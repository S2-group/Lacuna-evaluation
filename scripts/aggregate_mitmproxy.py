import os
import pandas as pd
import sys
import numpy as np

header = ['Run 1', 'Run 2', 'Run 3', 'Run 4', 'Run 5', 'Run 6', 'Run 7', 'Run 8', 'Run 9', 'Run 10', 'Run 11', 'Run 12', 'Run 13', 'Run 14', 'Run 15', 'Run 16', 'Run 17', 'Run 18', 'Run 19', 'Run 20']

#Include for each file of start timestamp go through all the flows files and calculate the metrics
def aggregate_Metrics(j, fPath):#This function is called for each row of the aggregated_start csv files
    totalPackets = {}
    totalBytes = {}
    rotation = 0 #Used to remove KeyError in totalPackets.append in case the key is not created yet(the first time we try to add a value to totalPackets and totalBytes)
    for x in header:
       for flow in os.listdir(fPath):
           data = pd.read_csv(fPath+flow)
           data = data[data.Host == '192.168.1.57'] #Filter the data to have only the packets from the machine serving the subjects
           #print(j[x]/float(1000))
           data = data[(data.Request_timestamp_start > (j[x]/1000.0)) & (data.Request_timestamp_start < ((j[x]/1000.0)+5))] #j[x]/1000.0 is used because values collected from the onLoad event are in (ms) while values in request_timestamp_start are in seconds. (j[x]/1000.0) + 120 used because we need to collect the packets from the start of run to end of the run (some packets are recieved after the page is loaded so we use 120 seconds because each experiment run takes 2 minutes which is equal to 120 seconds)
           if len(data) != 0:
               if rotation == 0:
                   print(j[x])
                   print(len(data))
                   totalPackets[j['Website']] = []
                   totalBytes[j['Website']] = []
                   totalPackets[j['Website']].append(len(data))
                   totalBytes[j['Website']].append(data['Bytes_received'].sum())
                   rotation = rotation + 1
               else:
                   print(j[x])
                   print(len(data))
                   totalPackets[j['Website']].append(len(data))
                   totalBytes[j['Website']].append(data['Bytes_received'].sum())
               #print(j['Website'])
               #print(len(data)) #Use this to print the rows and check if total rows correctly printing
               #print(data['Bytes_received'].sum())) #Use this to print the values calculated
               break
    print(j['Website'])
    print(totalPackets) #Uncomment this to see the arrays filling up
    packets_serie = pd.Series([j['Website']] + totalPackets[j['Website']] + [np.mean(totalPackets[j['Website']])])
    
    bytes_serie = pd.Series([j['Website']] + totalBytes[j['Website']] + [np.mean(totalBytes[j['Website']])])

    return packets_serie, bytes_serie

if __name__ == '__main__':
    flowPath = sys.argv[1] #Path to folder with flow(packet) in csv
    timestampPath = sys.argv[2] #Path to folder with all the aggregated starting timestamp

    packetsNumber_headers = ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)]+ ['Average']
    bytesTotal_headers =  ['Optimization Levels', 'Website'] + ['Run {}'.format(x) for x in range(1, 21)]+ ['Average']

    level0_packets = pd.DataFrame(columns=packetsNumber_headers)
    level0_bytes = pd.DataFrame(columns=bytesTotal_headers)

    level1_packets = pd.DataFrame(columns=packetsNumber_headers)
    level1_bytes = pd.DataFrame(columns=bytesTotal_headers)


    level2_packets = pd.DataFrame(columns=packetsNumber_headers)
    level2_bytes = pd.DataFrame(columns=bytesTotal_headers)

    level3_packets = pd.DataFrame(columns=packetsNumber_headers)
    level3_bytes = pd.DataFrame(columns=bytesTotal_headers)
# CHECK THIS WEBSITE TO ITERATE ON ROWS https://www.geeksforgeeks.org/iterating-over-rows-and-columns-in-pandas-dataframe/

#CHECK THIS WEBSITE TO FILTER the flow csv to remove packets not from the ip address of the laptop https://datacarpentry.org/python-ecology-lesson/03-index-slice-subset/index.html , this can also be used to check the rows that are within the start timestamp by using df[(fp.request_StartTimestamp *1000 > startTimeStamp) && (fp.request_StartTimestamp * 1000 < (startTimestamp +30000) )]

#CHECK THIS FOR SUMMING THE BYTES NUMBER https://stackoverflow.com/questions/39922986/pandas-group-by-and-sum

#CHECK THIS FOR COUNTING THE NUMBER OF ROWS IN THE TABLE AFTER FILTERING OUT WHAT WE WANT https://kite.com/python/answers/how-to-count-the-number-of-rows-in-a-pandas-dataframe-in-python
    for item in os.listdir(timestampPath):
        print(item)
        if 'Results_Start' in item:
            df = pd.read_csv(timestampPath+item)
            for i, j in df.iterrows():
                #print(j['Run 1'])#this prints the value of colume run 1 for each row
                res1, res2 = aggregate_Metrics(j, flowPath)
                if 'level0' in item:
                    level0_packets = level0_packets.append(pd.Series(["0"] + list(res1), index=level0_packets.columns), ignore_index=True)
                    level0_bytes = level0_bytes.append(pd.Series(["0"] + list(res2), index=level0_bytes.columns), ignore_index=True)
                elif 'level1' in item:
                    level1_packets = level1_packets.append(pd.Series(["1"] + list(res1), index=level1_packets.columns), ignore_index=True)
                    level1_bytes = level1_bytes.append(pd.Series(["1"] + list(res2), index=level1_bytes.columns), ignore_index=True)
                elif 'level2' in item:
                    level2_packets = level2_packets.append(pd.Series(["2"] + list(res1), index=level2_packets.columns), ignore_index=True)
                    level2_bytes = level2_bytes.append(pd.Series(["2"] + list(res2), index=level2_bytes.columns), ignore_index=True)
                elif 'level3' in item:
                    level3_packets = level3_packets.append(pd.Series(["3"] + list(res1), index=level3_packets.columns), ignore_index=True)
                    level3_bytes = level3_bytes.append(pd.Series(["3"] + list(res2), index=level3_bytes.columns), ignore_index=True)

    level0_packets.to_csv('aggregated_mitmproxy/level0_Results_Packets.csv', header=True, index=None)
    level0_bytes.to_csv('aggregated_mitmproxy/level0_Results_Bytes.csv', header=True, index=None)

    level1_packets.to_csv('aggregated_mitmproxy/level1_Results_Packets.csv', header=True, index=None)
    level1_bytes.to_csv('aggregated_mitmproxy/level1_Results_Bytes.csv', header=True, index=None)

    level2_packets.to_csv('aggregated_mitmproxy/level2_Results_Packets.csv', header=True, index=None)
    level2_bytes.to_csv('aggregated_mitmproxy/level2_Results_Bytes.csv', header=True, index=None)

    level3_packets.to_csv('aggregated_mitmproxy/level3_Results_Packets.csv', header=True, index=None)
    level3_bytes.to_csv('aggregated_mitmproxy/level3_Results_Bytes.csv', header=True, index=None)

