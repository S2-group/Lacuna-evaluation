import os
import re
import random
import sys
from datetime import datetime

import numpy as np
import pandas as pd

def init_category(dictionary, category):
    dictionary[category] = {}
    return dictionary


def explore_subjects(path):
    level0_Sites = {}
    level1_Sites = {}
    level2_Sites = {}
    level3_Sites = {}
    
    # Explore the used subjects and save the path to their results
    for item  in os.listdir(path):
        if item == '.DS_Store':
            continue
        category = ''
        site_version = ''
        item1 = item.split("2020")[1]
        # Determine category
        if '0' in item1:
            category = '0'
        elif '1' in item1:
            category = '1'
        elif '2' in item1:
            category = '2'
        elif '3' in item1:
            category = '3'

        if category not in level0_Sites:
            level0_Sites = init_category(level0_Sites, category)
        
        if category not in level1_Sites:
            level1_Sites = init_category(level1_Sites, category)

        if category not in level2_Sites:
            level2_Sites = init_category(level2_Sites, category)

        if category not in level3_Sites:
            level3_Sites = init_category(level3_Sites, category)


        # Determine site name 
        dir_ending = item.split("2020")[1][:-1]
        site_name = dir_ending[int(len(dir_ending)/2):]


        if category == '0':
            level0_Sites[category][site_name] = path + '/' + item + '/perfumeJS/'
        elif category == '1':
            level1_Sites[category][site_name] = path + '/' + item + '/perfumeJS/'
        elif category == '2':
            level2_Sites[category][site_name] = path + '/' + item + '/perfumeJS/'
        elif category == '3':
            level3_Sites[category][site_name] = path + '/' + item + '/perfumeJS/'
    
    return level0_Sites, level1_Sites, level2_Sites, level3_Sites


def aggregate_subject(subject, n_runs):
    
    fp_values = {}
    fcp_values = {}
    load_values = {}
    start_values = {}

    for item in os.listdir(subject):
        if ((item == '.DS_Store') or (item == 'Aggregated.csv')):
            continue
        date = item.split('results')[1].split('_')[1:4]
        #print(date)
        date = ".".join(" ".join(date).split('.')[:-1])
        date_time = datetime.strptime(date, "%Y.%m.%d %H%M%S")

       #TODO Change these to the appropiate metrics collected for this script (load, fp, fcp)
        if 'fp_results_' in item:
            df = pd.read_csv(subject + item)
            fp_values[date_time] = df['fp'][0]
        elif 'fcp_results_' in item:
            df = pd.read_csv(subject + item)
            fcp_values[date_time] = df['fcp'][0]
        elif 'load_results_' in item:
            df = pd.read_csv(subject + item)
            load_values[date_time] = df['Loading_time'][0]
            start_values[date_time] = df['Start'][0]

    
    print(subject)

    ordered_fp_values = [fp_values[key] for key in sorted(fp_values.keys())]
    fp_serie = pd.Series([subject.split('/')[-3]] + ordered_fp_values + [np.mean(ordered_fp_values)])

    ordered_fcp_values = [fcp_values[key] for key in sorted(fcp_values.keys())]
    fcp_serie = pd.Series([subject.split('/')[-3]] + ordered_fcp_values + [np.mean(ordered_fcp_values)])

    ordered_load_values = [load_values[key] for key in sorted(load_values.keys())]
    load_serie = pd.Series([subject.split('/')[-3]] + ordered_load_values + [np.mean(ordered_load_values)])

    ordered_start_values = [start_values[key] for key in sorted(start_values.keys())]
    start_serie = pd.Series([subject.split('/')[-3]] + ordered_start_values + [np.mean(ordered_start_values)])

    return fp_serie, start_serie, fcp_serie, load_serie


if __name__ == '__main__':
    path = sys.argv[1]
    level0_Sites, level1_Sites, level2_Sites, level3_Sites = explore_subjects(path)
    fp_headers = ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)] + ['Average']
    fcp_headers =  ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)] + ['Average']
    load_headers = ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)] + ['Average']
    startTime_headers = ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)] + ['Average']
    # Parse level0 results
    level0_fp = pd.DataFrame(columns=fp_headers)
    level0_fcp = pd.DataFrame(columns=fcp_headers)
    level0_load = pd.DataFrame(columns=load_headers)
    level0_start = pd.DataFrame(columns=startTime_headers) #aggregate start timestamp to be used to aggregate the results of mitmproxy
    for CSS_Size, contents in level0_Sites.items():
        for _, path in contents.items():
            res1, res2, res3, res4 = aggregate_subject(path, 19)
            level0_fp = level0_fp.append(pd.Series([CSS_Size] + list(res1), index=level0_fp.columns), ignore_index=True)
            level0_start = level0_start.append(pd.Series([CSS_Size] + list(res2), index=level0_start.columns), ignore_index=True)
            level0_fcp = level0_fcp.append(pd.Series([CSS_Size] + list(res3), index=level0_fcp.columns), ignore_index=True)
            level0_load = level0_load.append(pd.Series([CSS_Size] + list(res4), index=level0_load.columns), ignore_index=True)
    
    level0_fp.to_csv('aggregated_perfumeJS/level0_Results_Fp.csv', header=True, index=None)
    level0_fcp.to_csv('aggregated_perfumeJS/level0_Results_Fcp.csv', header=True, index=None)
    level0_load.to_csv('aggregated_perfumeJS/level0_Results_Load.csv', header=True, index=None)
    level0_start.to_csv('aggregated_perfumeJS/level0_Results_Start.csv', header=True, index=None)

    
    # Parse level1
    level1_fp = pd.DataFrame(columns=fp_headers)
    level1_fcp = pd.DataFrame(columns=fcp_headers)
    level1_load = pd.DataFrame(columns=load_headers)
    level1_start = pd.DataFrame(columns=startTime_headers)
    for CSS_Size, contents in level1_Sites.items():
        for _, path in contents.items():
            res1, res2, res3, res4 = aggregate_subject(path, 19)
            level1_fp = level1_fp.append(pd.Series([CSS_Size] + list(res1), index=level1_fp.columns), ignore_index=True)
            level1_start = level1_start.append(pd.Series([CSS_Size] + list(res2), index=level1_start.columns), ignore_index=True)
            level1_fcp = level1_fcp.append(pd.Series([CSS_Size] + list(res3), index=level1_fcp.columns), ignore_index=True)
            level1_load = level1_load.append(pd.Series([CSS_Size] + list(res4), index=level1_load.columns), ignore_index=True)
    
    
    level1_fp.to_csv('aggregated_perfumeJS/level1_Results_Fp.csv', header=True, index=None)
    level1_fcp.to_csv('aggregated_perfumeJS/level1_Results_Fcp.csv', header=True, index=None)
    level1_load.to_csv('aggregated_perfumeJS/level1_Results_Load.csv', header=True, index=None)
    level1_start.to_csv('aggregated_perfumeJS/level1_Results_Start.csv', header=True, index=None)

    # Parse level2
    level2_fp = pd.DataFrame(columns=fp_headers)
    level2_fcp = pd.DataFrame(columns=fcp_headers)
    level2_load = pd.DataFrame(columns=load_headers)
    level2_start = pd.DataFrame(columns=startTime_headers)
    for CSS_Size, contents in level2_Sites.items():
        for _, path in contents.items():
            res1, res2, res3, res4 = aggregate_subject(path, 19)
            level2_fp = level2_fp.append(pd.Series([CSS_Size] + list(res1), index=level2_fp.columns), ignore_index=True)
            level2_start = level2_start.append(pd.Series([CSS_Size] + list(res2), index=level2_start.columns), ignore_index=True)
            level2_fcp = level2_fcp.append(pd.Series([CSS_Size] + list(res3), index=level2_fcp.columns), ignore_index=True)
            level2_load = level2_load.append(pd.Series([CSS_Size] + list(res4), index=level2_load.columns), ignore_index=True)
    
    level2_fp.to_csv('aggregated_perfumeJS/level2_Results_Fp.csv', header=True, index=None)
    level2_fcp.to_csv('aggregated_perfumeJS/level2_Results_Fcp.csv', header=True, index=None)
    level2_load.to_csv('aggregated_perfumeJS/level2_Results_Load.csv', header=True, index=None)
    level2_start.to_csv('aggregated_perfumeJS/level2_Results_Start.csv', header=True, index=None)

    # Parse level3
    level3_fp = pd.DataFrame(columns=fp_headers)
    level3_fcp = pd.DataFrame(columns=fcp_headers)
    level3_load = pd.DataFrame(columns=load_headers)
    level3_start = pd.DataFrame(columns=startTime_headers)
    for CSS_Size, contents in level3_Sites.items():
        for _, path in contents.items():
            res1, res2, res3, res4 = aggregate_subject(path, 19)
            level3_fp = level3_fp.append(pd.Series([CSS_Size] + list(res1), index=level3_fp.columns), ignore_index=True)
            level3_start = level3_start.append(pd.Series([CSS_Size] + list(res2), index=level3_start.columns), ignore_index=True)
            level3_fcp = level3_fcp.append(pd.Series([CSS_Size] + list(res3), index=level3_fcp.columns), ignore_index=True)
            level3_load = level3_load.append(pd.Series([CSS_Size] + list(res4), index=level3_load.columns), ignore_index=True)
    
    level3_fp.to_csv('aggregated_perfumeJS/level3_Results_Fp.csv', header=True, index=None)
    level3_fcp.to_csv('aggregated_perfumeJS/level3_Results_Fcp.csv', header=True, index=None)
    level3_load.to_csv('aggregated_perfumeJS/level3_Results_Load.csv', header=True, index=None)
    level3_start.to_csv('aggregated_perfumeJS/level3_Results_Start.csv', header=True, index=None)
