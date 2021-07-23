
        (function(g) {
            var f = window.AmazonUIPageJS || window.P,
                n = f._namespace || f.attributeErrors,
                b = n ? n("DeviceLatencyDifferentiationScripts", "") : f;
            b.guardFatal ? b.guardFatal(g)(b, window) : b.execute(function() {
                g(b, window)
            })
        })(function(g, f, n) {
            (function(b, f, r) {
                var h = b.ue && b.ue.count || function() {},
                    m = b.ue && b.ue.tag || function() {},
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
                var h = b.ue && b.ue.count || function() {},
                    m = b.ue && b.ue.tag || function() {},
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
                var h = b.ue && b.ue.tag || function() {};
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
                        this.getExperience = function() {
                            return a
                        };
                        this.getRenderedExperience = function() {
                            return d
                        };
                        this.reportAdaptedExperience = function(b) {
                            a = b;
                            e.recordToofanCookieValues({
                                experience: b
                            });
                            h("tfn-cx-adapt-" + b)
                        };
                        this.reportOptIn = function() {
                            e.setToofanCookie({
                                action: "I"
                            });
                            h("tfn-cx-optin")
                        };
                        this.reportOptOut = function() {
                            e.setToofanCookie({
                                action: "O"
                            });
                            h("tfn-cx-optout")
                        };
                        this.reportDismiss = function() {
                            e.setToofanCookie({
                                action: "D"
                            });
                            h("tfn-cx-dismiss")
                        };
                        this.shouldUpdateBannerTo = function(c) {
                            var e = g.prevWasToofan ? Number(g.prevWasToofan) : 0,
                                d = 1;
                            b.performance &&
                                1 < b.performance.navigation.type ? d = 0 : "T" === a ? (h("tfn-cx-from-toofan"), c !== f.SPEED_PROBABLY_FAST ? h("tfn-cx-adapt-none") : (h("tfn-cx-adapt-from-Toofan"), e ? (h("tfn-cx-fast-banner"), d = 2) : (h("tfn-cx-no-banner"), d = 0))) : e ? (d = 1, h("tfn-cx-normal-view-banner")) : (d = 0, h("tfn-cx-normal-view-no-banner"));
                            return d
                        }
                    };
                    g.declare("tfn:toofanCX", d)
                }))
            })(f, f.ue_t0, f.performance)
        });
    