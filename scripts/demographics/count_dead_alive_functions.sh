#!/bin/bash

# This script counts the number of dead functions identified by Lacuna across all subjects  

# Set comma as delimiter
IFS=' '

count_functions() {

	RESULT=$(node NumberOfFunctions.js $1 | tail -1)
	read -a strarr <<< $RESULT
	local NUM_FUNCTIONS=$(echo ${strarr[5]} | sed 's/,//') 

	echo "$NUM_FUNCTIONS"
}

BASE_LAB="../../subjects/TodoMVC"
BASE_WILD="../../subjects/lacunaWebPages"

# LAB_NAMES=("angularjs_require" "canjs_require" "exoskeleton" "knockback" "reagent" "backbone" "dijon" "gwt" "knockoutjs_require" "vanilla_es6" "backbone_require" "dojo" "jquery" "mithril" "vanillajs" "canjs" "enyo_backbone" "jsblocks" "polymer" "vue")
LAB_NAMES=("vanillajs")

# WILD_NAMES=("apache.org" "nl.godaddy.com" "www.amazon.com" "www.booking.com" "www.office.com" "www.wikipedia.org" "aws.amazon.com" "stackexchange.com" "www.amazon.in" "www.buzzfeed.com" "www.paypal.com" "m.youtube.com" "stackoverflow.com" "www.bbc.com" "www.mozilla.org" "www.theguardian.com")
WILD_NAMES=("apache.org")

# Print CSV header
echo "subject_name,dead,alive,subject_type"

#Iterate over all in-the-lab subjects
for i in ${LAB_NAMES[@]};
do
	TOTAL_FUNCTIONS=0
	FILE_NAME="$BASE_LAB/lvl0/$i"
	echo $FILE_NAME
	COUNTED=$(count_functions $FILE_NAME)
	DEAD=0
	ALIVE=$COUNTED
	echo "$i,$DEAD,$ALIVE,lab"
done

# # Iterate over all in-the-wild subjects
# for i in ${WILD_NAMES[@]};
# do
# 	TOTAL_FUNCTIONS=0
# 	for j in 0 1 2 3
# 	do
# 		FILE_NAME="$BASE_WILD/$i/$i/$j"
# 		COUNTED=$(count_functions $FILE_NAME)
# 				if [[ $j -eq 0 ]] 
# 		then
# 			TOTAL_FUNCTIONS=$COUNTED
# 		fi
# 		if [[ $COUNTED -gt $TOTAL_FUNCTIONS ]] 
# 		then
# 			COUNTED=$TOTAL_FUNCTIONS
# 		fi
# 		DEAD=$((TOTAL_FUNCTIONS-COUNTED))
# 		ALIVE=$COUNTED
# 		echo "$i,$j,$DEAD,$ALIVE,wild"
# 	done
# done