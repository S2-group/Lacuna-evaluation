
        P.when("tfn:Experience").execute("tfn:data", function(Experience) {
            P.declare('toofanDataInit', {
                experience: Experience.STANDARD
            });
        });

        ;
        P.declare('devmea:deviceLatencyData', {
            "oldestCompatVersion": 2,
            "version": 3,
            "cookieDomain": ".amazon.in",
            "clientActualEvent": "af:gwm",
            "headPredictionEvent": "bb",
            "cookieServerPart": "8-GWMob-1020218--1020218-0",
            "*classHierarchy*": ["optimuslibraryservice.datastructures.DeviceLatencyData"],
            "serverPrediction": "SPEED_UNKNOWN",
            "prevWasToofan": "",
            "csmCounters": {},
            "*className*": "optimuslibraryservice.datastructures.DeviceLatencyData",
            "headPredictionBuckets": {
                "cssDownloaded": [250, 700],
                "noCssDownload": [250, 700]
            }
        });
    