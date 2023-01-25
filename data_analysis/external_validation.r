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

data_lacuna = read.csv("../data/internal_validation_statistics.csv", stringsAsFactors = TRUE)
data_vazquez_load_only = read.csv("../data/external_validation/vazquez_load_only.csv", stringsAsFactors = TRUE)
data_vazquez_interaction = read.csv("../data/external_validation/vazquez_interaction.csv", stringsAsFactors = TRUE)
data_muzeel = read.csv("../data/external_validation/muzeel.csv", stringsAsFactors = TRUE)

############################
# Data preparation
############################

data_muzeel$Tool <- "Muzeel"
data_vazquez_load_only$Tool <- "Vazquez (L)"
data_vazquez_interaction$Tool <- "Vazquez (I)"

# We merge all data into a single data frame
data <- rbind(data_vazquez_load_only, data_vazquez_interaction, data_muzeel)

boxplot(data=data, Precision ~ Tool )
boxplot(data=data, Recall ~ Tool )
boxplot(data=data, FScore ~ Tool )

lacuna_precision <- data_lacuna[110, "Precision"]
lacuna_recall <- data_lacuna[110, "Recall"]
lacuna_fscore <- data_lacuna[110, "Fscore"]

# We programmatically add a row for including the average of the F score of Lacuna in the plot (the data comes from the previous experiment on LacunaV2)
new_row = list(Subject = "X", Precision=lacuna_precision, Recall=lacuna_recall, FScore=lacuna_fscore, Tool="Lacuna")
data <- rbind(data, new_row)

bp <- ggplot(data, aes(x=Tool, y=Precision)) + ylim(0, 1) +
  theme_bw() + xlab("") + ylab('') +
  # geom_boxplot(alpha=1, color="black", width=.8, fill="white", outlier.size=0) +
  geom_bar(stat = "summary", fun.y = "mean", alpha=1, color="black", width=.4, fill="white") +
  stat_summary(aes(label=format(round(..y.., 3), nsmall = 3)), fun.y=mean, geom="text", size=font_size/2.5,
               vjust = -0.5) +
  # stat_summary(fun.y=mean, colour="black", geom="point", shape=5, size=1,show_guide = FALSE) +
  ggtitle('Precision') +
  geom_hline(yintercept=lacuna_precision, linetype="dashed", color = "red") +
  guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=font_size), strip.text.x=element_text(size=font_size), strip.text.y=element_text(size=font_size),  axis.text.x=element_text(size=font_size, angle = 45, hjust = 1), axis.text.y=element_text(size=font_size), axis.title=element_text(size=font_size))
bp

ggsave(paste('./outputs/external_validation/precision.pdf', sep=''), scale = 1.6, height = 6, width = 4, unit = "cm")

bp <- ggplot(data, aes(x=Tool, y=Recall)) + ylim(0, 1) +
  theme_bw() + xlab("") + ylab('') +
  # geom_boxplot(alpha=1, color="black", width=.8, fill="white", outlier.size=0) +
  geom_bar(stat = "summary", fun.y = "mean", alpha=1, color="black", width=.4, fill="white") +
  stat_summary(aes(label=format(round(..y.., 3), nsmall = 3)), fun.y=mean, geom="text", size=font_size/2.5,
               vjust = -0.5) +
  # stat_summary(fun.y=mean, colour="black", geom="point", shape=5, size=1,show_guide = FALSE) +
  ggtitle('Recall') +
  geom_hline(yintercept=lacuna_recall, linetype="dashed", color = "red") +
  guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=font_size), strip.text.x=element_text(size=font_size), strip.text.y=element_text(size=font_size),  axis.text.x=element_text(size=font_size, angle = 45, hjust = 1), axis.text.y=element_text(size=font_size), axis.title=element_text(size=font_size))
bp

ggsave(paste('./outputs/external_validation/recall.pdf', sep=''), scale = 1.6, height = 6, width = 4, unit = "cm")

bp <- ggplot(data, aes(x=Tool, y=FScore)) + ylim(0, 1) +
  theme_bw() + xlab("") + ylab('') +
  # geom_boxplot(alpha=1, color="black", width=.8, fill="white", outlier.size=0) +
  geom_bar(stat = "summary", fun.y = "mean", alpha=1, color="black", width=.4, fill="white") +
  stat_summary(aes(label=format(round(..y.., 3), nsmall = 3)), fun.y=mean, geom="text", size=font_size/2.5,
               vjust = -0.5) +
  # stat_summary(fun.y=mean, colour="black", geom="point", shape=5, size=1,show_guide = FALSE) +
  ggtitle('F Score') +
  geom_hline(yintercept=lacuna_fscore, linetype="dashed", color = "red") +
  guides(color=guide_legend(title="")) + theme(plot.title=element_text(size=font_size), strip.text.x=element_text(size=font_size), strip.text.y=element_text(size=font_size),  axis.text.x=element_text(size=font_size, angle = 45, hjust = 1), axis.text.y=element_text(size=font_size), axis.title=element_text(size=font_size))
bp

ggsave(paste('./outputs/external_validation/f_score.pdf', sep=''), scale = 1.6, height = 6, width = 4, unit = "cm")

summary(subset(data, Tool == "Muzeel"))
summary(subset(data, Tool == "Vazquez (L)"))
summary(subset(data, Tool == "Vazquez (I)"))
