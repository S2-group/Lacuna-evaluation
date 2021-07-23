// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        (function(g) {
            var f = window.AmazonUIPageJS || window.P,
                n = f._namespace || f.attributeErrors,
                b = n ? n("DeviceLatencyDifferentiationScripts", "") : f;
            b.guardFatal ? b.guardFatal(g)(b, window) : b.execute(function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[285:329]", functionData => eval(functionData))})
        })(function(g, f, n) {
            (function(b, f, r) {
                var h = b.ue && b.ue.count || function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[452:454]", functionData => eval(functionData))},
                    m = b.ue && b.ue.tag || function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[511:513]", functionData => eval(functionData))},
                    e = b.testHooks;
                if (b.P) {
                    g.declare("mea:PredictedSpeed", {
                        SPEED_PROBABLY_FAST: "SPEED_PROBABLY_FAST",
                        SPEED_UNKNOWN: "SPEED_UNKNOWN",
                        SPEED_PROBABLY_SLOW: "SPEED_PROBABLY_SLOW"
                    });
                    var k = function(a, b) {
                        for (var c in b) b.hasOwnProperty(c) &&
                            (a[c] = b[c]);
                        return a
                    };
                    e && (e.overrideFromPojo = k);
                    var d = {
                            version: 3,
                            oldestCompatVersion: 2,
                            serverPrediction: "SPEED_UNKNOWN",
                            clientActualEvent: "atf",
                            prevWasToofan: "0"
                        },
                        l = d;
                    g.when("devmea:deviceLatencyData").execute(function(a) {
                        a = a || d;
                        if (3 < a.oldestCompatVersion || 2 > a.version) m("tfn-w-dldBadVer");
                        else {
                            l = k(k({}, d), a);
                            if (l.csmCounters) {
                                a = l.csmCounters;
                                for (var u in a) a.hasOwnProperty(u) && h(u, a[u])
                            }
                            var c = new function() {
                                var a = l.serverPrediction || "SPEED_UNKNOWN",
                                    c = "SPEED_UNKNOWN",
                                    u = a,
                                    d = !1;
                                this.getPrediction = function() {
                                    return u
                                };
                                this.getServerPrediction = function() {
                                    return a
                                };
                                this.getHeadPrediction = function() {
                                    return c
                                };
                                this.setHeadPrediction = function(a) {
                                    c = a;
                                    "SPEED_UNKNOWN" !== c && (u = c)
                                };
                                var r = function(a) {
                                    d || (d = !0, a || 0 === a ? h("tfn-actual", a) : (a = null, m("tfn-e-actbad")), w({
                                        duration: a
                                    }), g.declare("devmea:actual", a), e && (e.actualDurationMeasured = a))
                                };
                                this.recordActualMeasurement = r;
                                this.measureActualNow = function() {
                                    f && r((new Date).getTime() - f)
                                };
                                this.getDeviceLatencyData = function() {
                                    return l
                                };
                                var q = {
                                        duration: "",
                                        experience: "",
                                        action: ""
                                    },
                                    y;
                                this.recordToofanCookieValues = function(a) {
                                    q = k(q, a);
                                    y && t()
                                };
                                var w = function(a) {
                                    a && (q = k(q, a));
                                    t()
                                };
                                this.setToofanCookie = w;
                                var t = function() {
                                    b.performance && 1 < b.performance.navigation.type || (e && q.experience && (e.experienceReported = q.experience), y = !0, document.cookie = ["tfnPrev\x3d8|8-", q.duration, "-", q.experience, "-", q.action, "|", l.cookieServerPart, l.cookieDomain ? "; domain\x3d" + l.cookieDomain : "", "; expires\x3d", (new Date(+new Date + 7776E3)).toGMTString(), "; max-age\x3d7776000; path\x3d/"].join(""), m("tfn-i-cookieset"))
                                }
                            };
                            l.clientActualEvent && g.when(l.clientActualEvent).execute("ToofanAct", function() {
                                c.measureActualNow()
                            });
                            g.declare("devmea:controller", c)
                        }
                    })
                } else m("tfn-e-no-P")
            })(f, f.ue_t0, f.performance);
            "use strict";
            (function(b, f, r) {
                var h = b.ue && b.ue.count || function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[5463:5465]", functionData => eval(functionData))},
                    m = b.ue && b.ue.tag || function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[5522:5524]", functionData => eval(functionData))},
                    e = b.testHooks;
                if (b.P) {
                    var k = {},
                        d = function(a, b) {
                            var c;
                            for (c = 0; c < b.length; c++)
                                if (a < b[c]) return c;
                            return b.length
                        };
                    e && (e.findBucket = d);
                    var l = function(a, b, c) {
                        return (a || 0 === a) && b && c[d(a, b)] || n
                    };
                    e && (e.findBucketLabel = l);
                    g.when("mea:PredictedSpeed",
                        "devmea:controller").execute(function(a, b) {
                        var c = a.SPEED_PROBABLY_FAST,
                            d = a.SPEED_UNKNOWN,
                            v = a.SPEED_PROBABLY_SLOW;
                        k[v] = "slow";
                        k[c] = "fast";
                        k[d] = "unk";
                        var n = b.getDeviceLatencyData(),
                            z = [c, d, v],
                            x = new function() {
                                var a = null;
                                this.makeHeadPredictionNow = function() {
                                    if (a) m("tfn-w-pred2");
                                    else if (a = d, f) {
                                        var c = (new Date).getTime() - f,
                                            v = n.headPredictionBuckets,
                                            t = 0;
                                        if (r && r.getEntriesByType) {
                                            var p = r.getEntriesByType("resource");
                                            p && (t = p.length)
                                        }
                                        if ((p = e && e.forceHeadResourceCount) || 0 === p) t = p;
                                        p = null;
                                        v && (p = t ? v.cssDownloaded :
                                            v.noCssDownload);
                                        if (p) {
                                            h("tfn-dev-pred-dur", c);
                                            h("tfn-dev-pred-res", t);
                                            if (a = l(c, p, z) || null) return m("tfn-dev-pred-head-" + k[a]), b.setHeadPrediction(a), c = b.getPrediction(), m("tfn-dev-prediction-" + k[c]), g.declare("devmea:prediction", c), c;
                                            m("tfn-w-prednobucket")
                                        } else m("tfn-e-dev-buck-bad")
                                    } else m("tfn-w-noT0")
                                }
                            };
                        n.headPredictionEvent && g.when(n.headPredictionEvent).execute("Latency head prediction", function() {
                            x.makeHeadPredictionNow()
                        });
                        g.declare("devmea:realtime", x)
                    })
                } else m("tfn-e-no-P")
            })(f, f.ue_t0,
                f.performance);
            "use strict";
            (function(b, f, n) {
                var h = b.ue && b.ue.tag || function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[8829:8831]", functionData => eval(functionData))};
                b.P && (g.declare("mea:BannerStatus", {
                    HIDE_BANNER: 0,
                    SHOW_BANNER: 1,
                    UPDATE_BANNER: 2
                }), g.declare("tfn:Experience", {
                    STANDARD: "S",
                    ADAPT_FAST: "F",
                    TOOFAN: "T"
                }), g.when("mea:PredictedSpeed", "devmea:controller", "toofanDataInit").execute(function(f, e, k) {
                    var d = new function() {
                        var g = e.getDeviceLatencyData(),
                            a = k && k.experience ? k.experience : "S",
                            d = a;
                        e.recordToofanCookieValues({
                            experience: a
                        });
                        h("tfn-cx-initial-" + a);
                        this.getExperience = function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[9707:9771]", functionData => eval(functionData))};
                        this.getRenderedExperience = function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[9837:9901]", functionData => eval(functionData))};
                        this.reportAdaptedExperience = function(b) {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[9970:10218]", functionData => eval(functionData))};
                        this.reportOptIn = function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[10274:10471]", functionData => eval(functionData))};
                        this.reportOptOut = function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[10528:10726]", functionData => eval(functionData))};
                        this.reportDismiss = function() {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[10784:10983]", functionData => eval(functionData))};
                        this.shouldUpdateBannerTo = function(c) {lacuna_lazy_load("lacuna_cache/exported_7zgqt7.js[11049:11645]", functionData => eval(functionData))}
                    };
                    g.declare("tfn:toofanCX", d)
                }))
            })(f, f.ue_t0, f.performance)
        });
    