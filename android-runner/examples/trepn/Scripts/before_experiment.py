import csv
import os
import sys
import time
import threading
import logging
from http.server import BaseHTTPRequestHandler, HTTPServer
from AndroidRunner.Device import Device
from multiprocessing import Process
from AndroidRunner.Profilers import Profilers

navigationTime = {'fetchTime': 0, 'workerTime': 0, 'totalTime': 0, 'downloadTime': 0, 'timeToFirstByte': 0,
                  'headerSize': 0, 'dnsLookupTime': 0}
networkInf = {'downlink': 0, 'effectiveType': 0, 'rtt': 0, 'saveData': False}
storageEstimate = {'quota': 0, 'usage': 0, 'caches': 0, 'indexedDB': 0, 'serviceWorker': 0}
loadResult = {'Loading_time': 0, 'Start': 0, 'End': 0}
webAppName = ""
fpResult = {'fp': 0}
fcpResult = {'fcp': 0}
fidResult = {'fid': 0}
lcpResult = {'lcp': 0}
clsResult = {'cls': 0}
tbtResult = {'tbt': 0}
httpd = 0
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


def main(device: Device, *args: tuple, **kwargs: dict):

    class TestHandler(BaseHTTPRequestHandler):
        def do_POST(self):
            length = int(self.headers['Content-Length'])  # <--- Gets the size of data
            data_string = self.rfile.read(length)
            data_string = data_string.decode("utf-8")

            profilers = args[0]
            logger.info("------------stop_profiling-----------------")
            profilers.stop_profiling(device)

            if 'Load' in data_string:
                loadResult['Loading_time'] = data_string.split("Load\':")[1].split(", \'Start")[0]
                loadResult['Start'] = data_string.split("Start\':")[1].split(",\'End")[0]
                loadResult['End'] = data_string.split("End\':")[1].split(", \'PerfumeResult")[0]

                if 'navigationTiming' in data_string:
                    navigationTime['fetchTime'] = data_string.split("fetchTime\":")[1].split(",\"workerTime")[0]
                    navigationTime['workerTime'] = data_string.split("workerTime\":")[1].split(",\"totalTime")[0]
                    navigationTime['totalTime'] = data_string.split("totalTime\":")[1].split(",\"downloadTime")[0]
                    navigationTime['downloadTime'] = \
                        data_string.split("downloadTime\":")[1].split(",\"timeToFirstByte")[0]
                    navigationTime['timeToFirstByte'] = \
                        data_string.split("timeToFirstByte\":")[1].split(",\"headerSize")[0]
                    navigationTime['headerSize'] = data_string.split("headerSize\":")[1].split(",\"dnsLookupTime")[0]
                    navigationTime['dnsLookupTime'] = \
                        data_string.split("dnsLookupTime\":")[1].split("},\"eventProperties", 1)[0]

                if 'networkInformation' in data_string:
                    networkInf['downlink'] = data_string.split("downlink\":")[1].split(",\"effectiveType")[0]
                    networkInf['effectiveType'] = data_string.split("effectiveType\":\"")[1].split("\",\"rtt")[0]
                    networkInf['rtt'] = data_string.split("rtt\":")[1].split(",\"saveData")[0]
                    networkInf['saveData'] = data_string.split("saveData\":")[1].split("},\"eventProperties", 1)[0]

                if 'storageEstimate' in data_string:
                    storageEstimate['quota'] = data_string.split("quota\":")[1].split(",\"usage")[0]
                    storageEstimate['usage'] = data_string.split("usage\":")[1].split(",\"caches")[0]
                    storageEstimate['caches'] = data_string.split("caches\":")[1].split(",\"indexedDB")[0]
                    storageEstimate['indexedDB'] = data_string.split("indexedDB\":")[1].split(",\"serviceWorker")[0]
                    storageEstimate['serviceWorker'] = \
                        data_string.split("serviceWorker\":")[1].split("},\"eventProperties", 1)[0]

                if 'fp' in data_string:
                    fpResult['fp'] = data_string.split("fp\",\"data\":")[1].split(",\"eventProperties", 1)[0]

                if 'fcp' in data_string:
                    fcpResult['fcp'] = data_string.split("fcp\",\"data\":")[1].split(",\"eventProperties", 1)[0]

                outputDir = "results_perfumeJS"

                if 'WebName' in data_string:
                    webAppName = data_string.split("WebName\':")[1].split(", \'Load\'")[0]
                    webAppName = ((webAppName.replace("//", "")).replace("/", "-")).replace(":", "-")
                    webAppName = webAppName[:-1]
                    outputDir = outputDir + "/" + webAppName + "/perfumeJS"

                if not os.path.exists(outputDir):
                    os.makedirs(outputDir)
                else:
                    print("The file already exists")
                try:
                    file2 = open(outputDir + '/MyFile2_results_{}.txt'.format(time.strftime('%Y.%m.%d_%H%M%S')), "w+")
                    file2.write(data_string)
                    with open(outputDir + '/navigationTiming_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')),
                              'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                        w = csv.DictWriter(f, navigationTime.keys())
                        w.writeheader()
                        w.writerow(navigationTime)
                    with open(outputDir + '/networkInformation_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')),
                              'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                        w = csv.DictWriter(f, networkInf.keys())
                        w.writeheader()
                        w.writerow(networkInf)
                    with open(outputDir + '/storageEstimate_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')),
                              'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                        w = csv.DictWriter(f, storageEstimate.keys())
                        w.writeheader()
                        w.writerow(storageEstimate)
                    with open(outputDir + '/load_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')), 'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                      w = csv.DictWriter(f, loadResult.keys())
                      w.writeheader()
                      w.writerow(loadResult)
                    with open(outputDir + '/fp_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')),
                              'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                        w = csv.DictWriter(f, fpResult.keys())
                        w.writeheader()
                        w.writerow(fpResult)
                    with open(outputDir + '/fcp_results_{}.csv'.format(time.strftime('%Y.%m.%d_%H%M%S')),
                              'w') as f:  # Just use 'w' mode in 3.x 'w' mode in 3.x
                        w = csv.DictWriter(f, fcpResult.keys())
                        w.writeheader()
                        w.writerow(fcpResult)

                    #print(data_string)

                except:
                    print('error')
            self.wfile.write(b'')

    def start_server():
        """Start the server."""
        server_address = ('', 8081)
        global httpd
        httpd = HTTPServer(server_address, TestHandler)
        httpd.serve_forever()

    process = Process(target=start_server)
    process.start()

    def stop_server():
        """Stop the server."""
        global httpd
        httpd.server_close()
