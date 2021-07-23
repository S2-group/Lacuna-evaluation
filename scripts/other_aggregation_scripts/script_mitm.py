import pandas as pd
import os
import pathlib
import csv
import re

pd.options.mode.chained_assignment = None

df = pd.read_csv('modified.csv')
path = pathlib.Path('/home/salvatore/Desktop/Lacuna-evaluation-master/Aggregated_mitmproxy')

num_run = 20
num_subject = 144

df['n_packets'] = 0.0
df['n_bytes'] = 0.0

for i in range(num_subject):
	n_packets = []
	n_bytes = []
	for j in range(num_run):
		index = j + (i * num_run)
		lista = df.iloc[index][1].split('-')
		if "lacunaweb" in df.iloc[index][1]:
			if "apache" in df.iloc[index][1] or "stackexchange" in df.iloc[index][1] or "stackoverflow" in df.iloc[index][1]:
				page_search = f'{lista[-4]}-{lista[-3]}.{lista[-2]}-{lista[-1]}'
			else:
				page_search = f'{lista[-4]}.{lista[-3]}.{lista[-2]}-{lista[-1]}'
		else:
			page_search = f'{lista[-2]}-{lista[-1]}'
			
		print(page_search)

		if "0" in page_search:
			lvl = "level0"
		elif "1" in page_search:
			lvl = "level1"
		elif "2" in page_search:
			lvl = "level2"
		elif "3" in page_search:
			lvl = "level3"

		file_bytes = pd.read_csv(f"Aggregated_mitmproxy/{lvl}_Results_Bytes.csv")
		file_packets = pd.read_csv(f"Aggregated_mitmproxy/{lvl}_Results_Packets.csv")

		for subject in range(36):
			if page_search in file_bytes.iloc[subject][1]:
				df['n_bytes'][index] = file_bytes.iloc[subject][j+2]

		for subject in range(36):
			if page_search in file_packets.iloc[subject][1]:
				df['n_packets'][index] = file_packets.iloc[subject][j+2]

df.to_csv('aggregated.csv', index=False)

