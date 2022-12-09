#!/bin/bash

# This script counts the number of dead functions identified by Lacuna across all subjects  

# Set comma as delimiter
IFS=' '

count_all_functions() {

	RESULT=$(node NumberOfFunctions.js $1 | grep GRAND | tail -1)
	# echo $RESULT
	read -a strarr <<< $RESULT
	local NUM_FUNCTIONS=$(echo ${strarr[2]} | sed 's/ //') 

	echo "$NUM_FUNCTIONS"
}

# NOTE: for reagent we do not have the "lacuna_lazyload_storage.json" file of OL-1, but by looking at the empty functions at OL-2 we know that it has 3357 dead functions
# cat app.js | grep function | grep {} | wc -l
count_dead_functions() {
	if [ -f "$1" ]; then
		local RESULT=$(cat $1 | wc -l | tr -d ' ')
		RESULT=$(($RESULT - 1))
		echo "$RESULT"
	else
		echo "0"
	fi 	
}

BASE_LAB="../../subjects/TodoMVC"
BASE_WILD="../../subjects/lacunaWebPages"

LAB_NAMES=("angularjs_require" "canjs_require" "exoskeleton" "knockback" "reagent" "backbone" "dijon" "gwt" "knockoutjs_require" "vanilla_es6" "backbone_require" "dojo" "jquery" "mithril" "vanillajs" "canjs" "enyo_backbone" "jsblocks" "polymer" "vue")
# LAB_NAMES=("vanillajs")

WILD_NAMES=("apache.org" "nl.godaddy.com" "www.amazon.com" "www.booking.com" "www.office.com" "www.wikipedia.org" "aws.amazon.com" "stackexchange.com" "www.amazon.in" "www.buzzfeed.com" "www.paypal.com" "m.youtube.com" "stackoverflow.com" "www.bbc.com" "www.mozilla.org" "www.theguardian.com")
# WILD_NAMES=("apache.org")

# Print CSV header
echo "subject_name,lvl,dead,all,subject_type"

#Iterate over all in-the-lab subjects
for i in ${LAB_NAMES[@]};
do
	TOTAL_FUNCTIONS=0
	FILE_PATH_LVL0="$BASE_LAB/lvl0/$i"
	FILE_PATH_DEAD_FUNCTIONS="$BASE_LAB/lvl1/$i/lacuna_lazyload_storage.json"
	# echo $FILE_PATH_LVL0
	# echo $FILE_PATH_DEAD_FUNCTIONS
	ALL=$(count_all_functions $FILE_PATH_LVL0)
	DEAD=$(count_dead_functions $FILE_PATH_DEAD_FUNCTIONS)
	echo "$i,0,$DEAD,$ALL,lab"
	echo "$i,1,$DEAD,$ALL,lab"
	echo "$i,2,$DEAD,$ALL,lab"
	echo "$i,3,$DEAD,$ALL,lab"
done

for i in ${WILD_NAMES[@]};
do
	TOTAL_FUNCTIONS=0
	FILE_PATH_LVL0="$BASE_WILD/$i/$i/0"
	FILE_PATH_DEAD_FUNCTIONS="$BASE_WILD/$i/$i/1/lacuna_lazyload_storage.json"
	# echo $FILE_PATH_LVL0
	# echo $FILE_PATH_DEAD_FUNCTIONS
	ALL=$(count_all_functions $FILE_PATH_LVL0)
	DEAD=$(count_dead_functions $FILE_PATH_DEAD_FUNCTIONS)
	echo "$i,0,$DEAD,$ALL,wild"
	echo "$i,1,$DEAD,$ALL,wild"
	echo "$i,2,$DEAD,$ALL,wild"
	echo "$i,3,$DEAD,$ALL,wild"
done