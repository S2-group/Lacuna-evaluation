# Lacuna V2 evaluation 
This repository contains all the material needed to replicate an experiment on [Lacuna V2](https://github.com/S2-group/Lacuna) evaluation. This tool allows the removal of JavaScript dead code with 4 different optimization levels. The goal of the experiment is to evaluate the impact of this smell on various run-time metrics, measured in mobile web applications on Android smartphones. 

The collected metrics and the tools used to measure them, are the following: 
#### Energy consumption
* Energy (J) -> [Trepn](https://github.com/S2-group/Lacuna-evaluation/tree/main/android-runner/AndroidRunner/Plugins/trepn) plugin

#### Performance
* CPU usage (%) -> [Trepn](https://github.com/S2-group/Lacuna-evaluation/tree/main/android-runner/AndroidRunner/Plugins/trepn) plugin
* Memory usage (MB) -> [Trepn](https://github.com/S2-group/Lacuna-evaluation/tree/main/android-runner/AndroidRunner/Plugins/trepn) plugin
* Loading time (ms) -> JS snippet in each web page
* First Paint (ms) -> JS snippet in each web page using the [perfumeJS](https://zizzamia.github.io/perfume/) library
* First Contentful Paint (ms) -> JS snippet in each web page using the [perfumeJS](https://zizzamia.github.io/perfume/) library

#### Network usage
* Number of packets -> [mitmproxy](https://mitmproxy.org/)
* Bytes transferred (KB) -> [mitmproxy](https://mitmproxy.org/)

## Content
All the data and tools required for the replication of the experiment are provided in the following folders: 

* [LacunaV2-master](https://github.com/S2-group/Lacuna-evaluation/tree/main/LacunaV2-master) - Tool used to remove JavaScript dead code from the subjects
* [android-runner](https://github.com/S2-group/Lacuna-evaluation/tree/main/android-runner) - Tool adopted to automate the execution of the experiment on the Android device
* [data](https://github.com/S2-group/Lacuna-evaluation/tree/main/data) - Raw and aggregated data obtained from the execution of the experiment, including also the raw data about the count of the number of functions in each subject
* [data_analysis](https://github.com/S2-group/Lacuna-evaluation/tree/main/data_analysis) - Script adopted for data processing and analysis
* [scripts](https://github.com/S2-group/Lacuna-evaluation/tree/main/scripts) - Aggregation scripts adopted on raw data and scripts used on the subjects
* [subjects](https://github.com/S2-group/Lacuna-evaluation/tree/main/subjects) - Web Applications executed on the mobile device during the experiment. For each subject there are 4 different versions, one for every optimization level in Lacuna V2. 
	* [TodoMVC](https://github.com/S2-group/Lacuna-evaluation/tree/main/subjects/TodoMVC) - 20 web apps from the [TodoMVC project](https://todomvc.com/)  
	* [lacunaWebPages](https://github.com/S2-group/Lacuna-evaluation/tree/main/subjects/lacunaWebPages) - 16 popular web pages which are part of the [Tranco](https://tranco-list.eu/) list.

## Required software
* [Http-server](https://www.npmjs.com/package/http-server) (`npm install http-server`)
* [Pluginbase](https://pypi.org/project/pluginbase/) (`pip install pluginbase`)
* [BeautifulSoup](https://pypi.org/project/beautifulsoup4/) (`pip install beautifulsoup4`)

For [AndroidRunner](https://github.com/S2-group/android-runner):
* [Python 3](https://www.python.org/downloads/)
* [Android Debug Bridge](https://developer.android.com/studio/command-line/adb) (`sudo apt install android-tools-adb`)
* [monkeyrunner](https://developer.android.com/studio/test/monkeyrunner) (`sudo apt install monkeyrunner`) 
* [JDK 8](https://openjdk.java.net/install/) (`sudo apt-get install openjdk-8-jre`)
* [lxml](https://lxml.de/installation.html) (`sudo apt install python-lxml`)

For Mitmproxy, check [here](https://docs.mitmproxy.org/stable/overview-installation/).

## Setup
The following commands have already been executed on the subjects in this repository.

### Create the additional variants for each subject
```bash
# Apply JavaScript dead code removal to the angularjs_require subject, using the analyzers tajs and dynamic and optimization level 2

node LacunaV2-master/lacuna ./TodoMVC/lvl0/angularjs_require -a tajs dynamic -o 2 -d ./TodoMVC/lvl2/angularjs_require -f
```

### Add JavaScript snippet to each subject
This command is executed on all variants of the subjects to add a JavaScript snippet that allows the measurement of loading time, fp, and fcp metrics using the perfumeJS library. The file AddJS.py is in the [scripts](https://github.com/S2-group/Lacuna-evaluation/tree/main/scripts) folder.

```bash
python3 AddJS.py
```

## Run the experiment

To host the subjects on the machine, execute the following command in the directory where you have `subjects`:
```bash
# Hosting the current directory on port 2020

http-server -p 2020
```

To be able to access the localhost websites on the mobile device:
```bash
# Enter the portnumber that the websites are hosted on

adb reverse tcp:2020 tcp:2020
```

To collect details of the packets transferred for each run of each subject, execute the command below and add a proxy to the network that the mobile device is connected to. Make sure that the port used for the proxy on the mobile device is the same as the one used in the command below.
```bash
# Run mitmproxy on port 5050 and save the flow file in a text file such as flowFileName

mitmproxy -p 5050 --set save_stream_file=flowFileName
```

To execute AndroidRunner a configuration file is needed. Make sure that the path to monkeyrunner in the config file used, points to the respective location on your machine.
```bash
# The config file we used is in /android-runner/examples/trepn/config_webfinal.json

python3 android-runner path/to/config
```

## Aggregate results
To be able to analyze the results of the metrics collected, we need to aggregate the results for each variant of each metric into a separate csv file. 

The command below aggregates the results for the loading time, fp and fcp metrics placed within the `results_perfumeJS` directory.

```bash
# Aggregate loading time, fp, fcp 

python3 aggregate_perfumeJS.py path/to/results_perfumeJS
```

To aggregate the mitmproxy results, first we need to convert the flow text file(s) generated into csv file(s). If the experiment produced multiple text flow files, execute the following command for each file.

```bash
# Convert the text flow file into a csv file

python3 logfileToCSV.py flowFileName flowFileName.csv
```

Now, to aggregate the mitmproxy results, make sure that the perfumeJS metrics are aggregated first. The reason for this is that aggregating mitmproxy results uses the starting time of each run, which is aggregated in the directory `aggregated_perfumeJS`. 

The command below aggregates the mitmproxy results that are in a folder with only the csv flow files, such as `results_mitmproxy/`, given the directory `aggregated_perfumeJS` with the aggregated starting time.

```bash
# Aggregate packets transferred and bytes transferred 

python3 aggregate_mitmproxy.py path/to/results_mitmproxy path/to/aggregated_perfumeJS
```

## Data analysis 
To use the script provided and analyze the data, some libraries need to be installed. Using the console of RStudio, execute the following commands:

```bash
install.packages("plyr")
install.packages("dplyr")
install.packages("ggplot2")
install.packages("reshape2")
install.packages("nortest")
install.packages("effsize")
install.packages("splitstackshape")
install.packages("car")
install.packages("rstatix")
install.packages("tidyverse")
install.packages("ggpubr")
install.packages("ez")
install.packages("bestNormalize")
```



