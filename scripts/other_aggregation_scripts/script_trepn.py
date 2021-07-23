import csv
import errno
import json
import os
import os.path as op
import time
from collections import OrderedDict
from functools import reduce
import util
import numpy as np
import pandas as pd


def split_reader(reader):
    column_dicts = {fn: [] for fn in reader.fieldnames if not fn.split('[')[0].strip() == 'Time'}
    for row in reader:
        for k, v in list(row.items()):
            if not k.split('[')[0].strip() == 'Time' and not v == '':
                column_dicts[k].append({k: v})
    return column_dicts

def calc_energy(run_file, output_path):
    df = pd.read_csv(os.path.join(output_path, run_file))
    y1 = (df['Battery Power [uW] (Raw)'] / 1000000).to_numpy()
    x1 = df['Time  [ms].10'].to_numpy()
    nan_array = np.isnan(y1)
    not_nan_array = ~ nan_array
    y = y1[not_nan_array]
    x = x1[not_nan_array]
    return np.trapz(y, x)

def aggregate_final(data_dir):
    def add_row(accum, new):
        row = {key: value + float(new[key]) for key, value in list(accum.items()) if
               key not in ['Component', 'count']}
        count = accum['count'] + 1
        return dict(row, **{'count': count})

    final_list = []
    device = util.list_subdir(data_dir)[0]
    device_dir = os.path.join(data_dir, device)
    for subject in util.list_subdir(device_dir):
        subject_dir = os.path.join(device_dir, subject)
        for browser in util.list_subdir(subject_dir):
            browser_dir = os.path.join(subject_dir, browser)
            output_path = os.path.join(browser_dir, 'trepn')
            if os.path.isdir(output_path):
                runs_subject = []
                for f in os.listdir(output_path):
                    if os.path.isfile(os.path.join(output_path, f)):
                        runs_subject.append(f)
                runs_subject.sort()
            
                for run_file in runs_subject:
                    if run_file != 'Aggregated.csv':
                        with open(os.path.join(output_path, run_file), 'r') as run:
                            run_dict = {}
                            runs = []
                            reader = csv.DictReader(run)
                            column_readers = split_reader(reader)
                            for k, v in list(column_readers.items()):
                                init = dict({k: 0}, **{'count': 0})
                                run_total = reduce(add_row, v, init)
                                if not run_total['count'] == 0:
                                    run_dict[k] = run_total[k] / run_total['count']
                            runs.append(run_dict)
                            
                        for i in range(len(runs)):
                            list_dict = sorted(list({k: v for k, v in list(runs[i].items())}.items()),
                                               key=lambda x: x[0])
                            current_dict = OrderedDict()
                            current_dict.update({'device': device})
                            current_dict.update({'subject': subject})
                            current_dict.update({'browser': browser})
                            energy_trapz = calc_energy(run_file, output_path)
                            current_dict.update(list_dict)
                            current_dict.update({'energy_trapz': energy_trapz})
                            final_list.append(current_dict)
    return final_list


def aggregate_end(data, output):
    rows = list()
    rows.append(aggregate_final(data))
    for i in range(len(rows[0])):
        l = [rows[0][i]]
        util.write_to_file(output, l, i)


data_dir = '/home/salvatore/Desktop/Lacuna-evaluation-master/android-runner/examples/trepn/output/2021.05.01_111336/data/'
output_file = '/home/salvatore/Desktop/aggregated.csv'
aggregate_end(data_dir, output_file)
