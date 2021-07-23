import os, sys
import subprocess
from distutils.dir_util import copy_tree
from bs4 import BeautifulSoup

def bfs_dirs(root):
    paths = [root]

    while len(paths) > 0:
        children = []

        for parent in paths:
            if parent.endswith(".gitignore"):
                continue

            for element in os.listdir(parent):
                found_element = os.path.join(parent, element)
                #print(found_element)
                if os.path.isdir(found_element) and "googletagmanager" not in found_element:
                    children.append(found_element)
                elif found_element.endswith(".html") or found_element.endswith(".htm"):#The entrance html file to the webpage needs to be called index.html or index.htm otherwise it won't add the JS code to read load times
                    if("index.html" in os.listdir(parent) and not(found_element.endswith("index.html"))):
                       continue
                    else:
                       return found_element
        paths = children

    return root

def add_js(directory):
    for cat in os.listdir(directory):
        if cat == ".DS_Store" or cat == "RUN_WEBAPPS_README.md" or cat == "START_SERVER_IN_THIS_DIR":
            continue
        
        for site in os.listdir(directory + cat):
            if site == ".DS_Store":
                continue

            path_to_html = bfs_dirs('{}{}/{}'.format(directory, cat, site))
            path_to_src = os.path.dirname(path_to_html)
            print(path_to_html)
            soup = BeautifulSoup(open(path_to_html), "lxml")
            if(soup.find('head')):
                perfumeSource = soup.new_tag('script')
                perfumeSource['src'] ="/node_modules/perfume.js/dist/perfume.umd.min.js"
                script = soup.new_tag('script')

                # To remove current script
                # if soup.head.script is not None:
                #   soup.head.script.extract()

                # script.string = "function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open(\"POST\", url, true); req.send(data);} setTimeout(function(){ if(LoadingEnd == 0){LoadingEnd = window.performance.timing.domContentLoadedEventEnd; LoadingTime = LoadingEnd - LoadingStart;}  objectToSend=\"{ 'WebName':\"+window.location.href+\", 'Load':\"+LoadingTime+\", 'Start':\"+LoadingStart+\",'End':\"+LoadingEnd+\", 'PerfumeResult':\"+JSON.stringify(perfumeResults)+\"}\"; xml_http_post(\"http://192.168.1.57:8081/\",objectToSend,null); }, 10000); perfumeResults = []; LoadingTime = (window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart); LoadingStart = window.performance.timing.navigationStart; LoadingEnd = window.performance.timing.domContentLoadedEventEnd; const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options;     perfumeResults.push(options); } }); function load_log() {LoadingTime = (window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart); LoadingStart = window.performance.timing.navigationStart; LoadingEnd= window.performance.timing.domContentLoadedEventEnd}; window.addEventListener ?window.addEventListener(\"load\",load_log, true) : window.attachEvent && window.attachEvent(\"onload\", load_log);"

                # domContentLoadedEventEnd
                # script.string = "function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open(\"POST\", url, true); req.send(data);} setTimeout(function(){ if(LoadingEnd == 0){LoadingEnd = window.performance.timing.domContentLoadedEventEnd; LoadingTime = LoadingEnd - LoadingStart;}  objectToSend=\"{ 'WebName':\"+window.location.href+\", 'Load':\"+LoadingTime+\", 'Start':\"+LoadingStart+\",'End':\"+LoadingEnd+\", 'PerfumeResult':\"+JSON.stringify(perfumeResults)+\"}\"; xml_http_post(\"http://192.168.1.57:8081/\",objectToSend,null); }, 10000); perfumeResults = []; const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options;     perfumeResults.push(options); } }); function load_log() {LoadingTime = (window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart); LoadingStart = window.performance.timing.navigationStart; LoadingEnd= window.performance.timing.domContentLoadedEventEnd}; window.addEventListener ?window.addEventListener(\"load\",load_log, true) : window.attachEvent && window.attachEvent(\"onload\", load_log);"

                # loadEventEnd
                # script.string = "function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open(\"POST\", url, true); req.send(data);} setTimeout(function(){ if(LoadingEnd == 0){LoadingEnd = window.performance.timing.loadEventEnd; LoadingTime = LoadingEnd - LoadingStart;}  objectToSend=\"{ 'WebName':\"+window.location.href+\", 'Load':\"+LoadingTime+\", 'Start':\"+LoadingStart+\",'End':\"+LoadingEnd+\", 'PerfumeResult':\"+JSON.stringify(perfumeResults)+\"}\"; xml_http_post(\"http://192.168.1.57:8081/\",objectToSend,null); }, 10000); perfumeResults = []; const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options;     perfumeResults.push(options); } }); function load_log() {LoadingTime = (window.performance.timing.loadEventEnd-window.performance.timing.navigationStart); LoadingStart = window.performance.timing.navigationStart; LoadingEnd= window.performance.timing.loadEventEnd}; window.addEventListener ?window.addEventListener(\"load\",load_log, true) : window.attachEvent && window.attachEvent(\"onload\", load_log);"

                # requestStart, loadEventEnd
                script.string = "function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open(\"POST\", url, true); req.send(data);} setTimeout(function(){ if(LoadingEnd == 0){LoadingEnd = window.performance.timing.loadEventEnd; LoadingTime = LoadingEnd - LoadingStart;}  objectToSend=\"{ 'WebName':\"+window.location.href+\", 'Load':\"+LoadingTime+\", 'Start':\"+LoadingStart+\",'End':\"+LoadingEnd+\", 'PerfumeResult':\"+JSON.stringify(perfumeResults)+\"}\"; xml_http_post(\"http://192.168.1.57:8081/\",objectToSend,null); }, 18000); perfumeResults = []; const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options;     perfumeResults.push(options); } }); function load_log() {LoadingTime = (window.performance.timing.loadEventEnd-window.performance.timing.requestStart); LoadingStart = window.performance.timing.requestStart; LoadingEnd= window.performance.timing.loadEventEnd}; window.addEventListener ?window.addEventListener(\"load\",load_log, true) : window.attachEvent && window.attachEvent(\"onload\", load_log);"
                
                soup.head.insert(0, perfumeSource)
                soup.head.insert(1,script)

            with open(path_to_html, "w") as file:
                file.write(str(soup))

if __name__ == '__main__':
   add_js("lacunaWebPages/apache.org/")
   add_js("lacunaWebPages/aws.amazon.com/")
   add_js("lacunaWebPages/m.youtube.com/")
   add_js("lacunaWebPages/nl.godaddy.com/")
   add_js("lacunaWebPages/stackexchange.com/")
   add_js("lacunaWebPages/stackoverflow.com/")
   add_js("lacunaWebPages/www.amazon.com/")
   add_js("lacunaWebPages/www.amazon.in/")
   add_js("lacunaWebPages/www.bbc.com/")
   add_js("lacunaWebPages/www.booking.com/")
   add_js("lacunaWebPages/www.buzzfeed.com/")
   add_js("lacunaWebPages/www.mozilla.org/")
   add_js("lacunaWebPages/www.wikipedia.org/")
   add_js("lacunaWebPages/www.theguardian.com/")
   add_js("lacunaWebPages/www.office.com/")
   add_js("lacunaWebPages/www.paypal.com/")
   add_js("subjects/")
