import pandas as pd
import os
import pathlib
import csv
import re

pd.options.mode.chained_assignment = None
df = pd.read_csv('Aggregated_Results_Trepn.csv')
path = pathlib.Path('/home/salvatore/Desktop/Lacuna-evaluation-master/results_perfumeJS/')

num_run = 20
num_subject = 144

df['fcp'] = 0.0
df['fp'] = 0.0
df['Loading_time'] = 0
df['Start'] = 0
df['End'] = 0
df['lvl'] = 0
subject = ""

for i in range(num_subject):
	fcp = []
	fp = []
	load = []
	for j in range(num_run):
		index = j + (i * num_run)
		if j == 0:
			lista = df.iloc[index][1].split('-')
			if "lacunaweb" in df.iloc[index][1]:
				if "apache" in df.iloc[index][1] or "stackexchange" in df.iloc[index][1] or "stackoverflow" in df.iloc[index][1]:
					page_search = f'{lista[-4]}-{lista[-3]}.{lista[-2]}-{lista[-1]}'
				else:
					page_search = f'{lista[-4]}.{lista[-3]}.{lista[-2]}-{lista[-1]}'
			else:
				page_search = f'{lista[-2]}-{lista[-1]}'

			for folder in path.iterdir():
				print(page_search)
				if folder.name.endswith(page_search):
					subject = folder.name
					for root, dirs, files in os.walk(f"{folder}", topdown=False):
						for name in files:
							if name.startswith('fcp'):
								fcp.append(name)
							elif name.startswith('fp'):
								fp.append(name)
							elif name.startswith('load'):
								load.append(name)
			fcp.sort()
			fp.sort()
			load.sort()
		for root, dirs, files in os.walk(path, topdown=False):
			for name in files:
				if name == fcp[j]:
					print(subject)
					file_fcp = pd.read_csv(f'results_perfumeJS/{subject}/perfumeJS/{name}')
					df['fcp'][index] = file_fcp['fcp'][0]
				elif name == fp[j]:
					file_fp = pd.read_csv(f'results_perfumeJS/{subject}/perfumeJS/{name}')
					df['fp'][index] = file_fp['fp'][0]
				elif name == load[j]:
					file_load = pd.read_csv(f'results_perfumeJS/{subject}/perfumeJS/{name}')
					df['Loading_time'][index] = file_load['Loading_time'][0]
					df['Start'][index] = file_load['Start'][0]
					df['End'][index] = file_load['End'][0]


for index in range(len(df.index)):
	lista = df.iloc[index][1].split('-')
	print(df.iloc[index][1])
	if "lacunaweb" in df.iloc[index][1]:
		lvl = lista[-1]
	else:
		lvl = lista[-2][3]
	df['lvl'][index] = lvl

df.to_csv('aggregated.csv', index=False)