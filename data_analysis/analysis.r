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

options(max.print=50)
font_size = 10

############################
# Read the data
############################

data = read.csv("../data/aggregated_results.csv", stringsAsFactors = TRUE)

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

# ############################
# # Data exploration
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

# Overview of the collected data for each metric (summary statistics)
for (v in names(vars)) {
  print(summary(data[[v]]))
}

# Overview of the collected data for each metric (boxplots)
for (v in names(vars)) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data)
}

# Let's see if the subjects in the wild and the subjects in the lab are very different from each other
for (v in names(vars)) {
  boxplot(as.formula(paste(v, '~ subject_type')), data=data)
}

# We split the dataset into in-the-wild subjects and in-the-lab subjects
data_wild <- data %>% filter(subject_type == "wild")
data_lab <- data %>% filter(subject_type == "lab")

for (v in names(vars)) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data_wild)
}

for (v in names(vars)) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data_lab)
}

# ############################
# # Statistical tests
# ############################

# All assumptions of the Kruskal-Wallis test are met by design

for (v in names(vars)) {
  
  print(paste('-------------------', v, ' --- IN THE WILD'))
  
  # Compute the Kruskal-Wallis test
  res.kruskal <- data_wild %>% kruskal_test(as.formula(paste(v, '~ lvl')))
  print(res.kruskal)
  
  # Compute the Chi2 effect size estimation
  chi2 <- data_wild %>% kruskal_effsize(as.formula(paste(v, '~ lvl')))
  print(chi2)
  
  # Compute the Dunn's test across all possible pairs of the optimization levels
  pwc <- data_wild %>% dunn_test(as.formula(paste(v, '~ lvl')), p.adjust.method = "BH")
  print(pwc)
  
  # make a boxplot to get a graphical overview of the results 
  pwc <- pwc %>% add_xy_position(x = "lvl")
  print(ggboxplot(data_wild, x = "lvl", y = v) +
    stat_pvalue_manual(pwc, hide.ns = TRUE) +
    labs(
      subtitle = get_test_label(res.kruskal, detailed = TRUE),
      caption = get_pwc_label(pwc)
    ))
  
  print(paste('-------------------', v, ' --- IN THE LAB'))
  
  # Compute the Kruskal-Wallis test
  res.kruskal <- data_lab %>% kruskal_test(as.formula(paste(v, '~ lvl')))
  print(res.kruskal)
  
  # Compute the Chi2 effect size estimation
  chi2 <- data_lab %>% kruskal_effsize(as.formula(paste(v, '~ lvl')))
  print(chi2)
  
  # Compute the Dunn's test across all possible pairs of the optimization levels
  pwc <- data_lab %>% dunn_test(as.formula(paste(v, '~ lvl')), p.adjust.method = "BH")
  print(pwc)
  
  # make a boxplot to get a graphical overview of the results
  pwc <- pwc %>% add_xy_position(x = "lvl")
  print(ggboxplot(data_lab, x = "lvl", y = v) +
          stat_pvalue_manual(pwc, hide.ns = TRUE) +
          labs(
            subtitle = get_test_label(res.kruskal, detailed = TRUE),
            caption = get_pwc_label(pwc)
          ))
}

#=========================================================
# Visualizations for the article
#=========================================================

############## Plot values for all subjects (data exploration)

fontSize = 9

for (i in seq(1,length(vars))) {

  var <- vars[i]
  
  # The maximum value of the scale on the Y axis is the maximum value of the metric, or 100 if the metric is a percentage
  min_y_value <- min(data[[names(var)]])
  max_y_value <- max(data[[names(var)]])
  if(names(var) == 'cpu' || names(var) == 'gpu') {
    max_y_value <- 100
  }

  bp <- ggplot(data, aes(x=subject_type, y=data[[names(var)]])) + ylim(min_y_value, max_y_value) +
    geom_violin(trim = FALSE, alpha = 0.5, position=position_dodge(0.9)) + theme_bw() + xlab("") + ylab(var) +
    geom_boxplot(alpha=1, color="black", width=.2, fill="white", outlier.size=0) +
    stat_summary(fun.y=mean, colour="black", geom="point", 
               shape=5, size=1,show_guide = FALSE) +
    ggtitle(var) + 
    guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=fontSize), strip.text.x=element_text(size=fontSize), strip.text.y=element_text(size=fontSize),  axis.text.x=element_text(size=fontSize, angle = 45, hjust = 1), axis.text.y=element_text(size=fontSize), axis.title=element_text(size=fontSize)) +
    scale_x_discrete(labels=c("lab" = "Lab", "wild" = "Wild")) 
  
  ggsave(paste('./plots/overview_wild_lab/', names(var), '.pdf', sep=''), scale = 1.6, height = 4, width = 3, unit = "cm")
}

############## Print Latex table for summarizing the overview of in-the-lab and in-the-wild subjets

# Rows for all subjects
for (i in seq(1,length(vars))) {
  var <- vars[i]
  stats <- data %>% summarise(min=min(data[[names(var)]]), max=max(data[[names(var)]]), median=median(data[[names(var)]]), mean=mean(data[[names(var)]]), sd=sd(data[[names(var)]])) %>%  mutate(cv=100 * sd/mean) %>% as.data.frame()
  stats <- round(stats, 2)
  stats_string <- paste(stats, collapse=' & ' )
  stats_string <- (paste(var, ' &', stats_string, '\\'))
  if(i %% 2 == 1 && i != length(vars)) {
    stats_string <- paste(stats_string, '\rowcolor{gray10}')
  }
  print(stats_string)
}

# Rows for in-the-lab subjects
for (i in seq(1,length(vars))) {
  var <- vars[i]
  stats <- data_lab %>% summarise(min=min(data_lab[[names(var)]]), max=max(data_lab[[names(var)]]), median=median(data_lab[[names(var)]]), mean=mean(data_lab[[names(var)]]), sd=sd(data_lab[[names(var)]])) %>%  mutate(cv=100 * sd/mean) %>% as.data.frame()
  stats <- round(stats, 2)
  stats_string <- paste(stats, collapse=' & ' )
  stats_string <- (paste(var, ' &', stats_string, '\\'))
  if(i %% 2 == 1 && i != length(vars)) {
    stats_string <- paste(stats_string, '\rowcolor{gray10}')
  }
  print(stats_string)
}

# Rows for in-the-wild subjects
for (i in seq(1,length(vars))) {
  var <- vars[i]
  stats <- data_wild %>% summarise(min=min(data_wild[[names(var)]]), max=max(data_wild[[names(var)]]), median=median(data_wild[[names(var)]]), mean=mean(data_wild[[names(var)]]), sd=sd(data_wild[[names(var)]])) %>%  mutate(cv=100 * sd/mean) %>% as.data.frame()
  stats <- round(stats, 2)
  stats_string <- paste(stats, collapse=' & ' )
  stats_string <- (paste(var, ' &', stats_string, '\\'))
  if(i %% 2 == 1 && i != length(vars)) {
    stats_string <- paste(stats_string, '\rowcolor{gray10}')
  }
  print(stats_string)
}

############## Plot values for all RQs

fontSize = 12

for (i in seq(1,length(vars))) {
  
  var <- vars[i]
  
  min_y_value <- min(data[[names(var)]])
  max_y_value <- max(data[[names(var)]])
  if(names(var) == 'cpu' || names(var) == 'gpu') {
    max_y_value <- 100
  }
  
  filtered_by_level <- data_lab %>% filter(lvl == "0")
  level_zero_line <- summary(filtered_by_level[[names(var)]])[['Median']]

  bp <- ggplot(data_lab, aes(x=lvl, y=data_lab[[names(var)]])) + ylim(min_y_value, max_y_value) +
    geom_violin(trim = FALSE, alpha = 0.5, position=position_dodge(0.9)) + theme_bw() + xlab("") + ylab(var) +
    geom_boxplot(alpha=1, color="black", width=.2, fill="white", outlier.size=0) +
    stat_summary(fun.y=mean, colour="black", geom="point", 
                 shape=5, size=1,show_guide = FALSE) +
    ggtitle('In-the-lab subjects') +
    geom_hline(yintercept=level_zero_line, linetype="dashed", color = "red") +
    guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=fontSize), strip.text.x=element_text(size=fontSize), strip.text.y=element_text(size=fontSize),  axis.text.x=element_text(size=fontSize, angle = 45, hjust = 1), axis.text.y=element_text(size=fontSize), axis.title=element_text(size=fontSize)) +
    scale_x_discrete(labels=c("0" = "OL-0", "1" = "OL-1", "2" = "OL-2", "3" = "OL-3"))
  
  ggsave(paste('./plots/', names(var), '_lab.pdf', sep=''), scale = 1.6, height = 6, width = 4, unit = "cm")
  
  filtered_by_level <- data_wild %>% filter(lvl == "0")
  level_zero_line <- summary(filtered_by_level[[names(var)]])[['Median']]
  
  bp <- ggplot(data_wild, aes(x=lvl, y=data_wild[[names(var)]])) + ylim(min_y_value, max_y_value) +
    geom_violin(trim = FALSE, alpha = 0.5, position=position_dodge(0.9)) + theme_bw() + xlab("") + ylab('') +
    geom_boxplot(alpha=1, color="black", width=.2, fill="white", outlier.size=0) +
    stat_summary(fun.y=mean, colour="black", geom="point", 
                 shape=5, size=1,show_guide = FALSE) +
    ggtitle('In-the-wild subjects') +
    geom_hline(yintercept=level_zero_line, linetype="dashed", color = "red") +
    guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=fontSize), strip.text.x=element_text(size=fontSize), strip.text.y=element_text(size=fontSize),  axis.text.x=element_text(size=fontSize, angle = 45, hjust = 1), axis.text.y=element_text(size=fontSize), axis.title=element_text(size=fontSize)) +
    scale_x_discrete(labels=c("0" = "OL-0", "1" = "OL-1", "2" = "OL-2", "3" = "OL-3"))
  
  ggsave(paste('./plots/', names(var), '_wild.pdf', sep=''), scale = 1.6, height = 6, width = 4, unit = "cm")
}

############## Print Latex tables for summarizing the data collected for each RQ

for (i in seq(1,length(vars))) {
  var <- vars[i]
  print(paste('\\multicolumn{7}{c}{\textbf{', var, '}} \\ ', sep=''))
  lvls <- levels(data$lvl)
  print('LAB data')
  for(j in lvls) {
    current_data <- data_lab %>% filter(lvl == j)
    stats <- current_data %>% summarise(min=min(current_data[[names(var)]]), max=max(current_data[[names(var)]]), median=median(current_data[[names(var)]]), mean=mean(current_data[[names(var)]]), sd=sd(current_data[[names(var)]])) %>%  mutate(cv=100 * sd/mean) %>% as.data.frame()
    stats <- round(stats, 2)
    stats_string <- paste(stats, collapse=' & ' )
    stats_string <- (paste('OL-', j, ' & ', stats_string, ' \\ ', sep=''))
    if(j == '0' && j == '2') {
      stats_string <- paste(stats_string, '\rowcolor{gray10}')
    }
    print(stats_string) 
  }
  print('WILD data')
  for(j in lvls) {
    current_data <- data_wild %>% filter(lvl == j)
    stats <- current_data %>% summarise(min=min(current_data[[names(var)]]), max=max(current_data[[names(var)]]), median=median(current_data[[names(var)]]), mean=mean(current_data[[names(var)]]), sd=sd(current_data[[names(var)]])) %>%  mutate(cv=100 * sd/mean) %>% as.data.frame()
    stats <- round(stats, 2)
    stats_string <- paste(stats, collapse=' & ' )
    stats_string <- (paste('OL-', j, ' & ', stats_string, ' \\ ', sep=''))
    if(j == '0' && j == '2') {
      stats_string <- paste(stats_string, '\rowcolor{gray10}')
    }
    print(stats_string) 
  }
}
