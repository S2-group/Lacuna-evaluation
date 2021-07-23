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

############################
# Filter subjects
############################

# We remove Amazon.in since we already have Amazon.com
data <- data %>% filter(subject_name != "www-amazon-in")
data$subject_name <- factor(data$subject_name)

# We remove 5 in-the-lab subjects in order to have a balanced comparison with the in-the-wild subjects (15 vs 15)
data <- data %>% filter(subject_name != "canjs_require")
data <- data %>% filter(subject_name != "vanilla_es6")
data <- data %>% filter(subject_name != "backbone_require")
data <- data %>% filter(subject_name != "knockback")
data <- data %>% filter(subject_name != "exoskeleton")
data$subject_name <- factor(data$subject_name)
