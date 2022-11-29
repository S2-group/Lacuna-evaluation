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
data <- data %>% filter(subject_name != "www-amazon-in")
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

vars <- c('energy'='Energy (mJ)', 'load_time'='Page load time (ms)', 'fcp'='First cont. paint (ms)', 'fp'='First paint (ms)', 'packets'='HTTP requests', 'bytes'='Transferred bytes (Kb)', 'cpu'='CPU usage (%)', 'gpu'='GPU usage (%)', 'mem'='Memory usage (Mb)')

# Let's compute the within subject coefficient of variation (so to decide if we can use the average for aggregating the 20 repeated measures)

for (v in names(vars)) {
  print(v)
  my.rmc <- rmcorr(participant = subject_name, measure1 = v, measure2 = dead, dataset = all_data)
  print(my.rmc)
  plot(my.rmc)
}

my.rmc <- rmcorr_mat(participant = subject_name, variables=names(vars), dataset = all_data)
print(my.rmc)

# ############## Plot values for all subjects (data exploration)
# 
# fontSize = 9
# 
# for (i in seq(1,length(vars))) {
# 
#   var <- vars[i]
#   
#   # The maximum value of the scale on the Y axis is the maximum value of the metric, or 100 if the metric is a percentage
#   min_y_value <- min(data[[names(var)]])
#   max_y_value <- max(data[[names(var)]])
#   if(names(var) == 'cpu' || names(var) == 'gpu') {
#     max_y_value <- 100
#   }
# 
#   bp <- ggplot(data, aes(x=subject_type, y=data[[names(var)]])) + ylim(min_y_value, max_y_value) + 
#     # geom_violin(trim = FALSE, alpha = 0.5, position=position_dodge(0.9)) + 
#     theme_bw() + xlab("") + ylab(var) +
#     geom_boxplot(alpha=1, color="black", width=.8, fill="white", outlier.size=0) +
#     stat_summary(fun.y=mean, colour="black", geom="point", 
#                shape=5, size=1,show_guide = FALSE) +
#     ggtitle(var) +
#     guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=fontSize), strip.text.x=element_text(size=fontSize), strip.text.y=element_text(size=fontSize),  axis.text.x=element_text(size=fontSize, angle = 45, hjust = 1), axis.text.y=element_text(size=fontSize), axis.title=element_text(size=fontSize)) +
#     scale_x_discrete(labels=c("lab" = "Lab", "wild" = "Wild")) 
#   
#   ggsave(paste('./plots/overview_wild_lab/', names(var), '.pdf', sep=''), scale = 1.6, height = 4, width = 3, unit = "cm")
# }
