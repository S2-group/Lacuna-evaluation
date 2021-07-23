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

data = read.csv("../data/aggregated_results.csv")