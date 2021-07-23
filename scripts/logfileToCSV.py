#!/usr/bin/env python

from mitmproxy import io
from mitmproxy.exceptions import FlowReadException
import pprint
import sys
import csv


#If the same csv file is used for different flow files, then the old information will be overwritten
loop = 0
packet = {'Request_timestamp_start':0, 'Request_timestamp_end':0,'Response_timestamp_start':0, 'Response_timestamp_end':0,'Bytes_received':0, 'Request_Path':0,'Host':0}
with open(sys.argv[1], "rb") as logfile:
    freader = io.FlowReader(logfile)
    pp = pprint.PrettyPrinter(indent=4)
    with open(sys.argv[2], 'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
        w = csv.DictWriter(f, packet.keys())
        w.writeheader()
        try:
            for f in freader.stream():
                if((str(f.request.method) == 'GET') or (str(f.request.method) == 'POST') or (str(f.request.method) == 'PUT') or (str(f.request.method) == 'DELETE')):
                   print(f.request.method)
                   print(f.request.host)
                   # print(f)
                   try:
                       headers = f.response.headers
                   except:
                       continue
                   packet['Request_timestamp_start'] = str(f.request.timestamp_start)
                   packet['Request_timestamp_end'] = str(f.request.timestamp_end)
                   packet['Response_timestamp_start'] = str(f.response.timestamp_start)
                   packet['Response_timestamp_end']= str(f.response.timestamp_end)
                   #print(headers)
                   if 'Content-Length' in headers:
                       packet['Bytes_received'] = headers['Content-Length']
                       print(headers['Content-Length'])
                   #packet['Bytes_received'] = headers['Content-Length']
                   packet['Request_Path'] = str(f.request.path)
                   packet['Host'] = str(f.request.host)
                   print('Request timestamp start: ' + str(f.request.timestamp_start))
                   print('Request timestamp end: ' + str(f.request.timestamp_end))
                   print('Response timestamp start: ' + str(f.response.timestamp_start))
                   print('Response timestamp end: ' + str(f.response.timestamp_end))
                   print('Request path: ' + str(f.request.path))
                   print('Request host: ' + str(f.request.host))
                   w.writerow(packet)

        except FlowReadException as e:
            print("Flow file corrupted: {}".format(e))
