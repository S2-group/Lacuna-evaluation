setwd(".")
library(plyr)
library(dplyr)
library(ggplot2)
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

var_names <- c('energy', 'load_time', 'fcp', 'fp', 'packets', 'bytes', 'cpu', 'gpu', 'mem')

# Overview of the collected data for each metric (summary statistics)
for (v in var_names) {
  print(summary(data[[v]]))
}

# Overview of the collected data for each metric (boxplots)
for (v in var_names) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data)
}

# Let's see if the subjects in the wild and the subjects in the lab are very different from each other
for (v in var_names) {
  boxplot(as.formula(paste(v, '~ subject_type')), data=data)
}

# We split the dataset into in-the-wild subjects and in-the-lab subjects
data_wild <- data %>% filter(subject_type == "wild")
data_lab <- data %>% filter(subject_type == "lab")

for (v in var_names) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data_wild)
}

for (v in var_names) {
  boxplot(as.formula(paste(v, '~ lvl')), data=data_lab)
}

# ############################
# # Statistical tests
# ############################

# All assumptions of the Kruskal-Wallis test are met by design

for (v in var_names) {
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
}

for (v in var_names) {
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





