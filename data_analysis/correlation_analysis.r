setwd(".")
library(plyr)
library(dplyr)
library(ggplot2)
library(gridExtra)
require(reshape2)
library(nortest)
library(effsize)
library(splitstackshape)
library(car)
library(rstatix)
library(tidyverse)
library(ggpubr)
library(ez)
library(bestNormalize)
library(effectsize)
library(rmcorr)
library(outliers)
library(gridExtra)

options(max.print=50)
font_size = 10

############################
# Read the data
############################

data = read.csv("../data/aggregated_results.csv", stringsAsFactors = TRUE)
function_counts = read.csv("../data/counted_functions.csv", stringsAsFactors = TRUE)

# Beautify the data

subject_type <- c()
subject_name <- c()

lab_prefix <- "http-192-168-1-57-2020-subjects-"
wild_prefix <- "http-192-168-1-57-2020-lacunawebpages-"

for(i in 1:nrow(data)) {
  row <- data[i,]
  if(startsWith(as.character(row$subject), lab_prefix)) {
    subject_type <- c(subject_type, "lab")
    subject_name <- c(subject_name, str_split(row$subject, "-")[[1]][9])
  } else {
    subject_type <- c(subject_type, "wild")
    current_name <- str_sub(as.character(row$subject),1,nchar(as.character(row$subject))-2)
    current_name <- str_replace(current_name, wild_prefix, "")
    current_name <- substr(current_name, 1, nchar(current_name)/2)
    subject_name <- c(subject_name, current_name)
  }
  subject_name <- str_replace_all(subject_name, "-", ".")
}

subject_type <- as.factor(subject_type)
subject_name <- as.factor(subject_name)

data <- cbind(data, subject_name, subject_type)

# We rename the variables to consider so that their names are more mnemonic
data = rename(data, energy = energy_trapz)
data = rename(data, load_time = Loading_time)
data = rename(data, fcp = fcp)
data = rename(data, fp = fp)
data = rename(data, packets = n_packets)
data = rename(data, bytes = n_bytes)
data = rename(data, cpu = CPU.Load....)
data = rename(data, gpu = GPU.Load....)
data = rename(data, mem = Memory.Usage..KB.)

############################
# Filter subjects
############################

# We remove Amazon.in since we already have Amazon.com
data <- data %>% filter(subject_name != "www.amazon.in")
data$subject_name <- factor(data$subject_name)

# We remove 5 (randomly identified) in-the-lab subjects in order to have a balanced comparison with the in-the-wild subjects (15 vs 15)
data <- data %>% filter(subject_name != "canjs_require")
data <- data %>% filter(subject_name != "vanilla_es6")
data <- data %>% filter(subject_name != "backbone_require")
data <- data %>% filter(subject_name != "knockback")
data <- data %>% filter(subject_name != "exoskeleton")
data$subject_name <- factor(data$subject_name)

# ############################
# # Conversions
# ############################

data$mem <- data$mem / 1024 # we convert memory consumption from Kb to Mb
data$bytes <- data$bytes / 1024 # we convert exchanged bytes from bytes to Kb
data$lvl <- as.factor(data$lvl)

# We split the dataset into in-the-wild subjects and in-the-lab subjects
data_wild <- data %>% filter(subject_type == "wild")
data_lab <- data %>% filter(subject_type == "lab")

# We merge data and function_counts into a single dataframe
all_data <- merge(data, function_counts, by=c("subject_name", "lvl", "subject_type"))

# ############################
# # Explore via scatterplots
# ############################

# Used data:
# energy (mJ)
# load_time (ms)
# fcp (ms)
# fp (ms)
# packets
# bytes (Kb)
# cpu (%)
# gpu (%)
# mem (Mb)

vars <- c('energy'='Energy (mJ)', 'load_time'='Page load time (ms)', 'fcp'='First cont. paint (ms)', 'fp'='First paint (ms)', 'packets'='HTTP requests', 'bytes'='Transf. bytes (Kb)', 'cpu'='CPU usage (%)', 'gpu'='GPU usage (%)', 'mem'='Memory usage (Mb)')

# Let's compute the within subject coefficient of variation (so to decide if we can use the average for aggregating the 20 repeated measures)

check_normality = function(data, var_name) {
  print(var_name)
  plot(density(data), main=var_name) 
  boxplot(data, main=var_name) 
  qqPlot(data, main=var_name)
  print(shapiro.test(data))
}

columns = c("var","lvl","p","tau")
correlation_results <- data.frame(matrix(nrow = 0, ncol = length(columns)))
colnames(correlation_results) = columns
correlation_results$lvl <- as.factor(correlation_results$lvl)
correlation_results$var <- as.factor(correlation_results$var)

for (v in names(vars)) {
  print(v)
  baselines <- all_data %>% filter(lvl == 0) %>% group_by(subject_name, lvl) %>% summarise_at(vars(v, dead), mean) %>% select(subject_name, v)
  for (i in c(1, 2, 3)) {
    print(paste(c("Current variable:", v, "Level: ", i, sep="")))
    current_data <- all_data %>% filter(lvl == i)
    current_data <- current_data %>% group_by(subject_name, lvl) %>% summarise_at(vars(v, dead), mean)
    current_data <- merge(current_data, baselines, by=c("subject_name"))

    names(current_data)[names(current_data) == paste0(v, ".x")] <- v
    current_data <- rename(current_data, baseline = paste0(v, ".y"))
    # current_data$delta <- ((current_data[[v]] - current_data$baseline)/(current_data[[v]] + current_data$baseline)) * 100
    current_data$delta <- current_data[[v]] - current_data$baseline
                           
    # Compute the Kendall's Tau correlation coefficient between the delta and the amount of removed dead code
    corr <- cor.test(current_data$delta, current_data$dead, method="kendall")
    correlation_results <- correlation_results %>% add_row(var=v, lvl=as.factor(i), p = corr$p.value, tau = corr$estimate)
    
    current_plot <- ggplot(current_data, aes(x=delta, y=dead, color=lvl)) +
      geom_point(alpha=0.5) +
      theme_bw() +
      theme(legend.position = c(0.80, 0.80)) +
      scale_colour_discrete("OL") +
      labs(x= paste0("Delta", " ", vars[[v]]), y="Removed dead JS functions") +
      geom_smooth(method=lm,se = FALSE, size=0.5)
    ggsave(paste('./outputs/correlation_analysis/deltas/delta_ol', i, "_", v, '.pdf', sep=''), scale = 2, height = 3, width = 3, unit = "cm")
    
  }
  # Plot subjects separately across all levels. Variable: amount of dead code removed
  current_data <- all_data
  rmc <- rmcorr(participant = subject_name, measure1 = v, measure2 = dead, dataset = current_data)
  current_plot <- ggplot(current_data, aes(x=.data[[v]], y=dead, color=factor(subject_name), group=factor(subject_name))) + 
    geom_point(alpha=0.1, aes(color=factor(subject_name))) + 
    geom_line(aes(y = rmc$model$fitted.values), linetype = 1, size=0.5) + 
    theme_bw() + 
    theme(legend.position = "none") +
    labs(x= vars[[v]], y="Removed dead JS functions")
  ggsave(paste('./outputs/correlation_analysis/raw/dead_', v, '.pdf', sep=''), scale = 2, height = 4, width = 6, unit = "cm")
}

# Put the correlation results into a nicely formatted PDF
pdf("./outputs/correlation_analysis/correlation_results.pdf", height=11, width=10)
grid.table(correlation_results)
dev.off()
