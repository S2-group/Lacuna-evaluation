
                window.ue_ibe = (window.ue_ibe || 0) + 1;
                if (window.ue_ibe === 1) {

                    (function(e, c) {
                        function h(b, a) {
                            f.push([b, a])
                        }

                        function g(b, a) {
                            if (b) {
                                var c = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                                    d = e.createElement("script");
                                d.async = "async";
                                d.src = b;
                                d.setAttribute("crossorigin", "anonymous");
                                a && a.onerror && (d.onerror = a.onerror);
                                a && a.onload && (d.onload = a.onload);
                                c.insertBefore(d, c.firstChild)
                            }
                        }

                        function k() {
                            ue.uels = g;
                            for (var b = 0; b < f.length; b++) {
                                var a = f[b];
                                g(a[0], a[1])
                            }
                            ue.deffered = 1
                        }
                        var f = [];
                        c.ue && (ue.uels = h, c.ue.attach && c.ue.attach("load", k))
                    })(document, window);


                    if (window.ue && window.ue.uels) {
                        var cel_widgets = [{
                            "c": "celwidget"
                        }, {
                            "s": "#nav-swmslot > div",
                            "id_gen": null
                        }];

                        ue.uels("https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/ClientSideMetricsAUIJavascript@jserrorsForesterCompressed.56f1005c3bd8e4df49d09233ac09e77ec3ab0b69._V2_.js");
                    }
                    var ue_mbl = ue_csm.ue.exec(function(e, a) {
                        

                        

                        

                        

                        function h() {
                            if (!b) return "";
                            ue_mbl.cnt = null;
                            for (var a = b.timing, d = b.transition, a = ["mts", k(a.transitionStart), "mps", k(a.processStart), "mtt", d.type, "mtst", d.subType, "mtlt", d.launchType], d = "", c = 0; c <
                                a.length; c += 2) {
                                var e = a[c],
                                    g = a[c + 1];
                                "undefined" !== typeof g && (d += "&" + e + "=" + g)
                            }
                            return d
                        }

                        

                        
                        var c = e.ue || {},
                            g = e.ue_t0,
                            b;
                        if (a.P && a.P.when && a.P.register) return a.P.when("CSMPlugin").execute(null), {
                            cnt: h,
                            ajax: q
                        }
                    }, "mobile-timing")(ue_csm, window);

                    (function(d) {
                        d._uess = function() {
                            var a = "";
                            screen && screen.width && screen.height && (a += "&sw=" + screen.width + "&sh=" + screen.height);
                            var b = function(a) {
                                    var b = document.documentElement["client" + a];
                                    return "CSS1Compat" === document.compatMode && b || document.body["client" + a] || b
                                },
                                c = b("Width"),
                                b = b("Height");
                            c && b && (a += "&vw=" + c + "&vh=" + b);
                            return a
                        }
                    })(ue_csm);

                    (function(a) {
                        var b = document.ue_backdetect;
                        b && b.ue_back && a.ue && (a.ue.bfini = b.ue_back.value);
                        a.uet && a.uet("be");
                        a.onLdEnd && (window.addEventListener ? window.addEventListener("load", a.onLdEnd, !1) : window.attachEvent && window.attachEvent("onload", a.onLdEnd));
                        a.ueh && a.ueh(0, window, "load", a.onLd, 1);
                        a.ue && a.ue.tag && (a.ue_furl && a.ue_furl.split ? (b = a.ue_furl.split(".")) && b[0] && a.ue.tag(b[0]) : a.ue.tag("nofls"))
                    })(ue_csm);
                    (function(g, h) {
                        function d(a, d) {
                            var b = {};
                            if (!e || !f) try {
                                var c = h.sessionStorage;
                                c ? a && ("undefined" !== typeof d ? c.setItem(a, d) : b.val = c.getItem(a)) : f = 1
                            } catch (g) {
                                e = 1
                            }
                            e && (b.e = 1);
                            return b
                        }
                        var b = g.ue || {},
                            a = "",
                            f, e, c, a = d("csmtid");
                        f ? a = "NA" : a.e ? a = "ET" : (a = a.val, a || (a = b.oid || "NI", d("csmtid", a)), c = d(b.oid), c.e || (c.val = c.val || 0, d(b.oid, c.val + 1)), b.ssw = d);
                        b.tabid = a
                    })(ue_csm, window);
                    ue_csm.ue.exec(function(e, f) {
                        var a = e.ue || {},
                            b = a._wlo,
                            d;
                        if (a.ssw) {
                            d = a.ssw("CSM_previousURL").val;
                            var c = f.location,
                                b = b ? b : c && c.href ? c.href.split("#")[0] : void 0;
                            c = (b || "") === a.ssw("CSM_previousURL").val;
                            !c && b && a.ssw("CSM_previousURL", b);
                            d = c ? "reload" : d ? "intrapage-transition" : "first-view"
                        } else d = "unknown";
                        a._nt = d
                    }, "NavTypeModule")(ue_csm, window);
                    ue_csm.ue.exec(function(c, a) {
                        function g(a) {
                            a.run(null)
                        }
                        if (a.addEventListener)
                            for (var d = c.ue || {}, f = [{
                                    name: "touch-enabled",
                                    run: function(b) {
                                        var e = null,
                                            c = null,
                                            d = null;
                                        a.addEventListener("touchstart", c, !0);
                                        a.addEventListener("mousemove", d, !0)
                                    }
                                }], b = 0; b < f.length; b++) g(f[b])
                    }, "csm-features")(ue_csm, window);


                    (function(b, c) {
                        var a = c.images;
                        a && a.length && b.ue.count("totalImages", a.length)
                    })(ue_csm, document);
                    (function(b) {
                        

                        

                        

                        

                        

                        
                        var f = "XMLHttpRequest",
                            q = 1 === b.ue_ddq,
                            a = b.ue,
                            r = b[f] && "withCredentials" in new b[f],
                            h = b.navigator && b.navigator.sendBeacon,
                            l = "//" + b.ue_furl + "/1/batch/1/OE/",
                            m = b.ue_fci_ft || 5E3;
                        a && (r || h) &&
                            (a._flhs = a._flhs || 0, a._lpn = a._lpn || {}, a.attach && (a.attach("beforeunload", g), a.attach("pagehide", g)), m && b.setTimeout(c, m), a._ffci = c)
                    })(window);


                    (function(k, c) {
                        function l(a, b) {
                            return a.filter(function(a) {
                                return a.initiatorType == b
                            })
                        }

                        function f(a, c) {
                            if (b.t[a]) {
                                var g = b.t[a] - b._t0,
                                    e = c.filter(function(a) {
                                        return 0 !== a.responseEnd && m(a) < g
                                    }),
                                    f = l(e, "script"),
                                    h = l(e, "link"),
                                    k = l(e, "img"),
                                    n = e.map(function(a) {
                                        return a.name.split("/")[2]
                                    }).filter(function(a, b, c) {
                                        return a && c.lastIndexOf(a) == b
                                    }),
                                    q = e.filter(function(a) {
                                        return a.duration < p
                                    }),
                                    s = g - Math.max.apply(null, e.map(m)) < r | 0;
                                "af" == a && (b._afjs = f.length);
                                return a + ":" + [e[d], f[d], h[d], k[d], n[d], q[d], s].join("-")
                            }
                        }

                        function m(a) {
                            return a.responseEnd - (b._t0 - c.timing.navigationStart)
                        }

                        function n() {
                            var a = c[h]("resource"),
                                d = f("cf", a),
                                g = f("af", a),
                                a = f("ld", a);
                            delete b._rt;
                            b._ld = b.t.ld - b._t0;
                            b._art && b._art();
                            return [d, g, a].join("_")
                        }
                        var p = 20,
                            r = 50,
                            d = "length",
                            b = k.ue,
                            h = "getEntriesByType";
                        b._rre = m;
                        b._rt = c && c.timing && c[h] && n
                    })(ue_csm, window.performance);


                    ue_csm.ue._rtn = 1;
                    (function(e, f) {
                        function h(a) {
                            a = a.split("?")[0] || a;
                            a = a.replace("http://", "").replace("https://", "").replace("resource://", "").replace("res://", "").replace("undefined://", "").replace("chrome://", "").replace(/\*/g, "").replace(/!/g, "").replace(/~/g, "");
                            var b = a.split("/");
                            a = a.substr(a.lastIndexOf("/") + 1);
                            b.splice(-1);
                            b = b.map(function(a) {
                                c[a] || (c[a] = (k++).toString(36));
                                return c[a]
                            });
                            b.push(a);
                            return b.join("!")
                        }

                        function l() {
                            return f.getEntriesByType("resource").filter(function(a) {
                                return d._rre(a) < d._ld
                            }).sort(function(a,
                                b) {
                                return a.responseEnd - b.responseEnd
                            }).splice(0, m).map(function(a) {
                                var b = [],
                                    c;
                                for (c in a) g[c] && a[c] && b.push(g[c] + Math.max(a[c] | 0, -1).toString(36));
                                b.push("i" + a.initiatorType);
                                (1 == d._rtn && d._afjs > n || 2 == d._rtn) && b.push("n" + h(a.name));
                                return b.join("_")
                            }).join("*")
                        }

                        function p() {
                            var a = "pm",
                                b;
                            for (b in c) c.hasOwnProperty(b) && (a += "*" + c[b] + "_" + b);
                            return a
                        }

                        function q() {
                            d.log({
                                k: "rtiming",
                                value: l() + "~" + p()
                            }, "csm")
                        }
                        if (f && f.getEntriesByType && Array.prototype.map && Array.prototype.filter && e.ue && e.ue.log) {
                            var g = {
                                    connectStart: "c",
                                    connectEnd: "C",
                                    domainLookupStart: "d",
                                    domainLookupEnd: "D",
                                    duration: "z",
                                    encodedBodySize: "e",
                                    decodedBodySize: "E",
                                    fetchStart: "f",
                                    redirectStart: "r",
                                    redirectEnd: "R",
                                    requestStart: "q",
                                    responseStart: "s",
                                    responseEnd: "S",
                                    startTime: "a",
                                    transferSize: "t"
                                },
                                d = e.ue,
                                c = {},
                                k = 1,
                                n = 20,
                                m = 200;
                            d && d._rre && (d._art = function() {
                                d._ld && window.setTimeout(q, 0)
                            })
                        }
                    })(ue_csm || {}, window.performance);


                    (function(c, d) {
                        var b = c.ue,
                            a = d.navigator;
                        b && b.tag && a && (a = a.connection || a.mozConnection || a.webkitConnection) && a.type && b.tag("netInfo:" + a.type)
                    })(ue_csm, window);


                    (function(c, d) {
                        

                        

                        function q() {
                            g && g.isStub && g.replay(null);
                            l.impression = s;
                            g = null
                        }
                        if (!(1 < c.ueinit)) {
                            var k = "metadata",
                                x = "impressionType",
                                v = "foresterChannel",
                                w = "programGroup",
                                t = "marketplaceId",
                                u = "session",
                                f = "requestId",
                                p = "navigator",
                                l = c.ue || {},
                                n = d[p] && d[p].sendBeacon,
                                r = function(a, b, c, d) {
                                    return {
                                        encode: d,
                                        resourceSep: a,
                                        metaSep: b,
                                        metaPairSep: c
                                    }
                                },
                                y = r("", "?", "&", null),
                                z = r("/", ":", ",", null),
                                A = r(",", "@", "|", null),
                                g = l.impression;
                            n ? q() : (l.attach("load", q), l.attach("beforeunload", q));
                            try {
                                d.P && d.P.register && d.P.register("impression-client", function() {})
                            } catch (B) {
                                c.ueLogError(B, {
                                    logLevel: "WARN"
                                })
                            }
                        }
                    })(ue_csm, window);



                    var ue_pty = "exports-gateway-phone-web";

                    var ue_spty = "mobile";

                    var ue_pti = "mobile";


                    var ue_adb = 4;
                    var ue_adb_rtla = 1;
                    ue_csm.ue.exec(function(w, a) {
                        function q() {
                            if (d && f) {
                                var a;
                                a: {
                                    try {
                                        a = d.getItem(g);
                                        break a
                                    } catch (c) {}
                                    a = void 0
                                }
                                if (a) return b = a, !0
                            }
                            return !1
                        }

                        

                        function s() {
                            b = 1 === a.ue_adb_chk ? l : h;
                            k();
                            if (f) try {
                                d.setItem(g, b)
                            } catch (c) {}
                        }

                        function m() {
                            a.ue_adb_rtla && c && 0 < c.ec && !1 === n && (c.elh = null, ueLogError({
                                m: "Hit Info",
                                fromOnError: 1
                            }, {
                                logLevel: "INFO",
                                adb: b
                            }), n = !0)
                        }

                        function k() {
                            e.tag(b);
                            e.isl && a.uex && uex("at", b);
                            p && p.updateCsmHit("adb", b);
                            c && 0 < c.ec ? m() : a.ue_adb_rtla && c &&
                                (c.elh = m)
                        }

                        
                        if (a.ue_adb) {
                            a.ue_fadb = a.ue_fadb || 10;
                            var e = a.ue,
                                h = "adblk_yes",
                                l = "adblk_no",
                                b = "adblk_unk",
                                d;
                            a: {
                                try {
                                    d = a.localStorage;
                                    break a
                                } catch (x) {}
                                d = void 0
                            }
                            var g = "csm:adb",
                                c = a.ue_err,
                                p = e.cookie,
                                f = void 0 !== a.localStorage,
                                u = Math.random() > 1 - 1 / a.ue_fadb,
                                n = !1,
                                v = q();
                            u || !v ? e.uels("https://m.media-amazon.com/images/G/01/csm/showads.v2.js", {
                                onerror: r,
                                onload: s
                            }) : k();
                            a.ue_isAdb = t;
                            a.ue_isAdb.unk = "adblk_unk";
                            a.ue_isAdb.no = l;
                            a.ue_isAdb.yes = h
                        }
                    }, "adb")(document, window);




                    (function(c, l, m) {
                        

                        
                        var k = "data-cel-widget",
                            g = !1,
                            d = [];
                        (c.ue || {}).isBF = function() {
                            try {
                                var a = JSON.parse(localStorage["csm-bf"] || "[]"),
                                    b = 0 <= a.indexOf(c.ue_id);
                                a.unshift(c.ue_id);
                                a = a.slice(0, 20);
                                localStorage["csm-bf"] = JSON.stringify(a);
                                return b
                            } catch (d) {
                                return !1
                            }
                        }();
                        c.ue_utils = {
                            getXPath: h,
                            getFirstAscendingWidget: null,
                            notifyWidgetsLabeled: function() {
                                if (!1 === g) {
                                    g = !0;
                                    for (var a = f, b = 0; b < d.length; b++)
                                        if (d[b].hasOwnProperty("callback") && d[b].hasOwnProperty("element")) {
                                            var c = d[b].callback,
                                                e = d[b].element;
                                            "function" === typeof c && "function" === typeof a && c(a(e))
                                        }
                                    d = null
                                }
                            },
                            extractStringValue: null
                        }
                    })(ue_csm, window, document);



                    (function(a, c) {
                        a.ue_cel || (a.ue_cel = function() {
                            function h(a, b) {
                                b ? b.r = w : b = {
                                    r: w,
                                    c: 1
                                };
                                !ue_csm.ue_sclog && b.clog && d.clog ? d.clog(a, b.ns || n, b) : b.glog && d.glog ? d.glog(a, b.ns || n, b) : d.log(a, b.ns || n, b)
                            }

                            function l() {
                                var a = b.length;
                                if (0 < a) {
                                    for (var e = [], c = 0; c < a; c++) {
                                        var f = b[c].api;
                                        f.ready() ? (f.on({
                                            ts: d.d,
                                            ns: n
                                        }), g.push(b[c]), h({
                                            k: "mso",
                                            n: b[c].name,
                                            t: d.d()
                                        })) : e.push(b[c])
                                    }
                                    b = e
                                }
                            }

                            

                            function r(a) {
                                h({
                                    k: "hrt",
                                    t: d.d()
                                }, {
                                    c: 1,
                                    il: 1,
                                    n: a
                                });
                                f = Math.min(k, q * f);
                                x()
                            }

                            function x() {
                                clearTimeout(u);
                                u = setTimeout(null, f)
                            }

                            function t() {
                                e.executed || r()
                            }
                            var q = 1.5,
                                k = c.ue_cel_max_hrt || 3E4,
                                b = [],
                                g = [],
                                n = a.ue_cel_ns || "cel",
                                s, u, d = a.ue,
                                m = a.uet,
                                v = a.uex,
                                w = d.rid,
                                f = c.ue_cel_hrt_int || 3E3,
                                z = c.requestAnimationFrame || null;
                            if (d.isBF) h({
                                k: "bft",
                                t: d.d()
                            });
                            else {
                                "function" == typeof m && m("bb", "csmCELLSframework", {
                                    wb: 1
                                });
                                setTimeout(l, 0);
                                d.onunload(e);
                                if (d.onflush) d.onflush(t);
                                s = setTimeout(e, 6E5);
                                x();
                                "function" == typeof v && v("ld", "csmCELLSframework", {
                                    wb: 1
                                });
                                return {
                                    registerModule: function(a, c) {
                                        b.push({
                                            name: a,
                                            api: c
                                        });
                                        h({
                                            k: "mrg",
                                            n: a,
                                            t: d.d()
                                        });
                                        l()
                                    },
                                    reset: null,
                                    timeout: function(a, b) {
                                        return c.setTimeout(function() {
                                            z(function() {
                                                e.executed ||
                                                    a()
                                            })
                                        }, b)
                                    },
                                    log: h,
                                    off: e
                                }
                            }
                        }())
                    })(ue_csm, window);
                    (function(a, c, h) {
                        a.ue_pdm || !a.ue_cel || ue.isBF || (a.ue_pdm = function() {
                            function l() {
                                try {
                                    var b = window.screen;
                                    if (b) {
                                        var c = {
                                            w: b.width,
                                            aw: b.availWidth,
                                            h: b.height,
                                            ah: b.availHeight,
                                            cd: b.colorDepth,
                                            pd: b.pixelDepth
                                        };
                                        d && d.w === c.w && d.h === c.h && d.aw === c.aw && d.ah === c.ah && d.pd === c.pd && d.cd === c.cd || (d = c, d.t = s(), d.k = "sci", z(d))
                                    }
                                    var f = h.body || {},
                                        e = h.documentElement || {},
                                        g = {
                                            w: Math.max(f.scrollWidth || 0, f.offsetWidth || 0, e.clientWidth || 0, e.scrollWidth || 0, e.offsetWidth || 0),
                                            h: Math.max(f.scrollHeight || 0, f.offsetHeight || 0, e.clientHeight ||
                                                0, e.scrollHeight || 0, e.offsetHeight || 0)
                                        };
                                    m && m.w === g.w && m.h === g.h || (m = g, m.t = s(), m.k = "doi", z(m));
                                    n = a.ue_cel.timeout(l, u);
                                    w += 1
                                } catch (q) {
                                    window.ueLogError && ueLogError(q, {
                                        attribution: "csm-cel-page-module",
                                        logLevel: "WARN"
                                    })
                                }
                            }

                            

                            

                            

                            

                            

                            

                            function b() {
                                f.attach && (C && f.attach(p, q, h), y && P.when("mash").execute(null), f.attach("blur", e, c), f.attach("focus", r, c))
                            }

                            
                            var n, s, u, d, m, v = null,
                                w = 0,
                                f = a.ue,
                                z = a.ue_cel.log,
                                B = a.uet,
                                H = a.uex,
                                C = !!f.pageViz,
                                p = C && f.pageViz.event,
                                A = C && f.pageViz.propHid,
                                y = c.P && c.P.when;
                            "function" == typeof B && B("bb", "csmCELLSpdm", {
                                wb: 1
                            });
                            return {
                                on: function(a) {
                                    u = a.timespan || 500;
                                    s = a.ts;
                                    b();
                                    a = c.location;
                                    z({
                                        k: "pmd",
                                        o: a.origin,
                                        p: a.pathname,
                                        t: s()
                                    });
                                    l();
                                    "function" == typeof H && H("ld", "csmCELLSpdm", {
                                        wb: 1
                                    })
                                },
                                off: null,
                                ready: function() {
                                    return h.body && a.ue_cel && a.ue_cel.log
                                },
                                reset: null
                            }
                        }(), a.ue_cel && a.ue_cel.registerModule("page module",
                            a.ue_pdm))
                    })(ue_csm, window, document);
                    (function(a, c) {
                        a.ue_vpm || !a.ue_cel || ue.isBF || (a.ue_vpm = function() {
                            function h() {
                                var a = t(),
                                    b = {
                                        w: c.innerWidth,
                                        h: c.innerHeight,
                                        x: c.pageXOffset,
                                        y: c.pageYOffset
                                    };
                                e && e.w == b.w && e.h == b.h && e.x == b.x && e.y == b.y || (b.t = a, b.k = "vpi", e = b, g(e, {
                                    clog: 1
                                }));
                                r = 0;
                                q = t() - a;
                                k += 1
                            }

                            
                            var e, r, x, t, q = 0,
                                k = 0,
                                b = a.ue,
                                g = a.ue_cel.log,
                                n = a.uet,
                                s = a.uex,
                                u = b.attach,
                                d = b.detach;
                            "function" == typeof n && n("bb", "csmCELLSvpm", {
                                wb: 1
                            });
                            return {
                                on: function(a) {
                                    t = a.ts;
                                    x = a.timespan || 100;
                                    h();
                                    u && (u("scroll", l), u("resize",
                                        l));
                                    "function" == typeof s && s("ld", "csmCELLSvpm", {
                                        wb: 1
                                    })
                                },
                                off: null,
                                ready: function() {
                                    return a.ue_cel && a.ue_cel.log
                                },
                                reset: null,
                                getVpi: null
                            }
                        }(), a.ue_cel && a.ue_cel.registerModule("viewport module", a.ue_vpm))
                    })(ue_csm, window);
                    (function(a, c, h) {
                        if (!a.ue_fem && a.ue_cel && a.ue_utils) {
                            var l = a.ue || {};
                            !l.isBF && !a.ue_fem && h.querySelector && c.getComputedStyle && [].forEach && (a.ue_fem = function() {
                                function e(a, b) {
                                    return a > b ? 3 > a - b : 3 > b - a
                                }

                                function r(a, b) {
                                    var d = c.pageXOffset,
                                        f = c.pageYOffset,
                                        g;
                                    a: {
                                        try {
                                            if (a) {
                                                var h = a.getBoundingClientRect(),
                                                    q, l = 0 === a.offsetWidth && 0 === a.offsetHeight;
                                                c: {
                                                    for (var k = a.parentNode, n = h.left || 0, p = h.top || 0, r = h.width || 0, s = h.height || 0; k && k !== document.body;) {
                                                        var m;
                                                        d: {
                                                            try {
                                                                var u = void 0;
                                                                if (k) var t = k.getBoundingClientRect(),
                                                                    u = {
                                                                        x: t.left || 0,
                                                                        y: t.top || 0,
                                                                        w: t.width || 0,
                                                                        h: t.height || 0
                                                                    };
                                                                else u = void 0;
                                                                m = u;
                                                                break d
                                                            } catch (x) {}
                                                            m = void 0
                                                        }
                                                        var v = window.getComputedStyle(k),
                                                            y = "hidden" === v.overflow,
                                                            z = y || "hidden" === v.overflowX,
                                                            A = y || "hidden" === v.overflowY,
                                                            B = p + s - 1 < m.y + 1 || p + 1 > m.y + m.h - 1;
                                                        if ((n + r - 1 < m.x + 1 || n + 1 > m.x + m.w - 1) && z || B && A) {
                                                            q = !0;
                                                            break c
                                                        }
                                                        k = k.parentNode
                                                    }
                                                    q = !1
                                                }
                                                g = {
                                                    x: h.left + d || 0,
                                                    y: h.top + f || 0,
                                                    w: h.width || 0,
                                                    h: h.height || 0,
                                                    d: (l || q) | 0
                                                }
                                            } else g = void 0;
                                            break a
                                        } catch (D) {}
                                        g = void 0
                                    }
                                    if (g && !a.cel_b) a.cel_b = g, C({
                                        n: a.getAttribute(w),
                                        w: a.cel_b.w,
                                        h: a.cel_b.h,
                                        d: a.cel_b.d,
                                        x: a.cel_b.x,
                                        y: a.cel_b.y,
                                        t: b,
                                        k: "ewi",
                                        cl: a.className
                                    }, {
                                        clog: 1
                                    });
                                    else {
                                        if (d = g) d = a.cel_b, f = g, d = f.d === d.d && 1 === f.d ? !1 : !(e(d.x, f.x) && e(d.y, f.y) && e(d.w, f.w) && e(d.h, f.h) && d.d === f.d);
                                        d && (a.cel_b = g, C({
                                            n: a.getAttribute(w),
                                            w: a.cel_b.w,
                                            h: a.cel_b.h,
                                            d: a.cel_b.d,
                                            x: a.cel_b.x,
                                            y: a.cel_b.y,
                                            t: b,
                                            k: "ewi"
                                        }, {
                                            clog: 1
                                        }))
                                    }
                                }

                                function x(b, c) {
                                    var d;
                                    d = b.c ? h.getElementsByClassName(b.c) : b.id ? [h.getElementById(b.id)] : h.querySelectorAll(b.s);
                                    b.w = [];
                                    for (var g = 0; g < d.length; g++) {
                                        var e = d[g];
                                        if (e) {
                                            if (!e.getAttribute(w)) {
                                                var q = e.getAttribute("cel_widget_id") ||
                                                    (b.id_gen || H)(e, g) || e.id;
                                                e.setAttribute(w, q)
                                            }
                                            b.w.push(e);
                                            k(O, e, c)
                                        }
                                    }!1 === B && (z++, z === f.length && (B = !0, a.ue_utils.notifyWidgetsLabeled()))
                                }

                                function t(a, b) {
                                    p.contains(a) || C({
                                        n: a.getAttribute(w),
                                        t: b,
                                        k: "ewd"
                                    }, {
                                        clog: 1
                                    })
                                }

                                function q(a) {
                                    G.length && ue_cel.timeout(function() {
                                        if (m) {
                                            for (var b = Q(), c = !1; Q() - b < d && !c;) {
                                                for (c = R; 0 < c-- && 0 < G.length;) {
                                                    var e = G.shift();
                                                    S[e.type](e.elem, e.time)
                                                }
                                                c = 0 === G.length
                                            }
                                            T++;
                                            q(a)
                                        }
                                    }, 0)
                                }

                                function k(a, b, c) {
                                    G.push({
                                        type: a,
                                        elem: b,
                                        time: c
                                    })
                                }

                                function b(a, b) {
                                    for (var c = 0; c < f.length; c++)
                                        for (var d =
                                                f[c].w || [], e = 0; e < d.length; e++) k(a, d[e], b)
                                }

                                function g() {
                                    I || (I = a.ue_cel.timeout(function() {
                                        I = null;
                                        var c = v();
                                        b(W, c);
                                        for (var d = 0; d < f.length; d++) k(X, f[d], c);
                                        0 === f.length && !1 === B && (B = !0, a.ue_utils.notifyWidgetsLabeled());
                                        q(c)
                                    }, u))
                                }

                                function n() {
                                    I || M || (M = a.ue_cel.timeout(function() {
                                        M = null;
                                        var a = v();
                                        b(O, a);
                                        q(a)
                                    }, u))
                                }

                                function s() {
                                    return y && D && p && p.contains && p.getBoundingClientRect && v
                                }
                                var u = 50,
                                    d = 4.5,
                                    m = !1,
                                    v, w = "data-cel-widget",
                                    f = [],
                                    z = 0,
                                    B = !1,
                                    H = function() {},
                                    C = a.ue_cel.log,
                                    p, A, y, D, L = c.MutationObserver || c.WebKitMutationObserver ||
                                    c.MozMutationObserver,
                                    V = !!L,
                                    F, E, N = "DOMAttrModified",
                                    J = "DOMNodeInserted",
                                    K = "DOMNodeRemoved",
                                    M, I, G = [],
                                    T = 0,
                                    R = null,
                                    W = "removedWidget",
                                    X = "updateWidgets",
                                    O = "processWidget",
                                    S, U = c.performance || {},
                                    Q = U.now && function() {
                                        return U.now()
                                    } || null;
                                "function" == typeof uet && uet("bb", "csmCELLSfem", {
                                    wb: 1
                                });
                                return {
                                    on: function(b) {
                                        function c() {
                                            if (s()) {
                                                S = {
                                                    removedWidget: t,
                                                    updateWidgets: x,
                                                    processWidget: r
                                                };
                                                if (V) {
                                                    var a = {
                                                        attributes: !0,
                                                        subtree: !0
                                                    };
                                                    F = new L(n);
                                                    E = new L(g);
                                                    F.observe(p, a);
                                                    E.observe(p, {
                                                        childList: !0,
                                                        subtree: !0
                                                    });
                                                    E.observe(A, a)
                                                } else y.call(p, N, n), y.call(p, J, g), y.call(p, K, g), y.call(A, J, n), y.call(A, K, n);
                                                g()
                                            }
                                        }
                                        p = h.body;
                                        A = h.head;
                                        y = p.addEventListener;
                                        D = p.removeEventListener;
                                        v = b.ts;
                                        f = a.cel_widgets || [];
                                        R = b.bs || 5;
                                        l.deffered ? c() : l.attach && l.attach("load", c);
                                        "function" == typeof uex && uex("ld", "csmCELLSfem", {
                                            wb: 1
                                        });
                                        m = !0
                                    },
                                    off: null,
                                    ready: function() {
                                        return a.ue_cel && a.ue_cel.log
                                    },
                                    reset: null
                                }
                            }(), a.ue_cel && a.ue_fem && a.ue_cel.registerModule("features module", a.ue_fem))
                        }
                    })(ue_csm, window, document);
                    (function(a, c, h) {
                        !a.ue_mcm && a.ue_cel && a.ue_utils && !a.ue.isBF && (a.ue_mcm = function() {
                            
                            var e = "mcm",
                                r, x = a.ue_cel.log,
                                t = a.ue_utils;
                            return {
                                on: function(c) {
                                    r = c.ts;
                                    a.ue_cel_stub && a.ue_cel_stub.replayModule(e, l);
                                    window.addEventListener && window.addEventListener("mousedown", l, !0)
                                },
                                off: null,
                                ready: function() {
                                    return a.ue_cel && a.ue_cel.log
                                },
                                reset: null
                            }
                        }(), a.ue_cel && a.ue_cel.registerModule("mouse click module", a.ue_mcm))
                    })(ue_csm, document, window.performance);


                    ue_csm.ue.exec(function(b, c) {
                        var e = null,
                            f = function() {
                                return {
                                    send: null,
                                    isSupported: !0
                                }
                            }(),
                            g = function() {
                                return {
                                    send: function(c, d) {
                                        if (c && d)
                                            if (navigator.sendBeacon(c,
                                                    d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");
                                            else throw "";
                                    },
                                    isSupported: !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId)
                                }
                            }();
                        b.ue._ajx = f;
                        b.ue._sBcn = g
                    }, "Transportation-clients")(ue_csm, window);
                    ue_csm.ue.exec(function(c, f) {
                        function C() {
                            for (var a = 0; a < arguments.length; a++) {
                                var b = arguments[a];
                                try {
                                    var c;
                                    if (b.isSupported) {
                                        var g = t.buildPayload(k, e);
                                        c = b.send(N, g)
                                    } else throw dummyException;
                                    return c
                                } catch (m) {}
                            }
                            D({
                                m: "All supported clients failed",
                                attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
                                f: "sushi-client.js",
                                logLevel: "ERROR"
                            }, f.ue_err_chan || "jserr")
                        }

                        function n() {
                            if (e.length) {
                                for (var a = 0; a < p.length; a++) p[a]();
                                C(d._sBcn || {}, d._ajx || {});
                                e = [];
                                h = {};
                                k = {};
                                u = v = q = w = 0
                            }
                        }

                        function O() {
                            var a = new Date,
                                b = null;
                            return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z"
                        }

                        function x(a) {
                            try {
                                return JSON.stringify(a)
                            } catch (b) {}
                            return null
                        }

                        function E(a, b, l, g) {
                            var m = !1;
                            g = g || {};
                            r++;
                            r == F && D({
                                    m: "Max number of Sushi Logs exceeded",
                                    f: "sushi-client.js",
                                    logLevel: "ERROR",
                                    attribution: "CSMSushiClient_MAX_CALLS"
                                }, f.ue_err_chan ||
                                "jserr");
                            var y;
                            if (y = !(r >= F))(y = a && -1 < a.constructor.toString().indexOf("Object") && b && -1 < b.constructor.toString().indexOf("String") && l && -1 < l.constructor.toString().indexOf("String")) || P++;
                            y && (d.count && d.count("Event:" + l, 1), a.producerId = a.producerId || b, a.schemaId = a.schemaId || l, a.timestamp = O(), b = Date.now ? Date.now() : +new Date, l = Math.random().toString().substring(2, 12), a.messageId = c.ue_id + "-" + b + "-" + l, g && !g.ssd && (a.sessionId = a.sessionId || c.ue_sid, a.requestId = a.requestId || c.ue_id, a.obfuscatedMarketplaceId =
                                a.obfuscatedMarketplaceId || c.ue_mid), (b = x(a)) ? (b = b.length, (e.length == Q || q + b > R) && n(), q += b, a = {
                                data: t.compressEvent(a)
                            }, e.push(a), (g || {}).n ? 0 === G ? n() : u || (u = f.setTimeout(n, G)) : v || (v = f.setTimeout(n, S)), m = !0) : m = !1);
                            !m && c.ue_int && console.error("Invalid JS Nexus API call");
                            return m
                        }

                        

                        function J(a) {
                            z.push(a)
                        }

                        
                        var F = 1E3,
                            Q = 499,
                            R = 524288,
                            s = function() {},
                            d = c.ue || {},
                            D = d.log || s,
                            T = c.uex || s;
                        (c.uet || s)("bb", "ue_sushi_v1", {
                            wb: 1
                        });
                        var N = c.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
                            U = ["messageId", "timestamp"],
                            A = "#",
                            e = [],
                            h = {},
                            k = {},
                            q = 0,
                            w = 0,
                            P = 0,
                            r = 0,
                            B = 0,
                            L = 1,
                            M = 2,
                            z = [],
                            p = [],
                            I = !1,
                            u, v, G = void 0 === c.ue_hpsi ? 1E3 : c.ue_hpsi,
                            S = void 0 === c.ue_lpsi ? 1E4 : c.ue_lpsi,
                            t = function() {
                                function a(a) {
                                    h[a] = A + w++;
                                    k[h[a]] = a;
                                    return h[a]
                                }

                                function b(a) {
                                    return a.length > (A + w).length || a.charAt(0) ===
                                        A
                                }

                                function c(a) {
                                    if (a) switch (typeof a) {
                                        case "number":
                                            return !(isNaN(a) || Infinity === a) && b(a.toString());
                                        case "boolean":
                                            break;
                                        case "string":
                                            return b(a);
                                        default:
                                            return !0
                                    }
                                    return !1
                                }

                                function g(b) {
                                    if (c(b)) {
                                        var d = B;
                                        b instanceof Array ? d = M : b instanceof Function ? d = B : b instanceof Object && (d = L);
                                        switch (d) {
                                            case B:
                                                b = h[b] ? h[b] : a(b);
                                                break;
                                            case M:
                                                var e = b;
                                                b = [];
                                                for (var d = e.length, f = 0; f < d; f++) b[f] = g(e[f]);
                                                break;
                                            case L:
                                                d = {};
                                                for (e in b) b.hasOwnProperty(e) && (d[h[e] ? h[e] : a(e)] = -1 == U.indexOf(e) ? g(b[e]) : b[e]);
                                                b = d
                                        }
                                    }
                                    return b
                                }
                                return {
                                    compressEvent: g,
                                    buildPayload: function() {
                                        return x({
                                            cs: {
                                                dct: k
                                            },
                                            events: e
                                        })
                                    }
                                }
                            }();
                        (function() {
                            if (d.event && d.event.isStub) {
                                if (c.ue_sbuimp && c.ue && c.ue.ssw) {
                                    var a = c.ue.ssw("eelsts").val;
                                    if (a && "unk" === a && (a = c.ue.ssw("eeldata").val)) {
                                        var b;
                                        a: {
                                            try {
                                                b = JSON.parse(a);
                                                break a
                                            } catch (f) {}
                                            b = null
                                        }
                                        b && b.evt instanceof Array && b.dct instanceof Object && (e = b.evt, k = b.dct, e && k && (n(), c.ue.ssw("eeldata", "{}"), c.ue.ssw("eelsts", "scs")))
                                    }
                                }
                                d.event.replay(function(a) {
                                    a[3] = a[3] || {};
                                    a[3].n = 1;
                                    E.apply(this, a)
                                });
                                d.onSushiUnload.replay(null);
                                d.onSushiFlush.replay(null)
                            }
                        })();
                        d.attach("beforeunload", H);
                        d.attach("pagehide", H);
                        d._cmps = t;
                        d.event = E;
                        d.event.reset = null;
                        d.onSushiUnload = J;
                        d.onSushiFlush = K;
                        try {
                            f.P && f.P.register && f.P.register("sushi-client", s)
                        } catch (V) {
                            c.ueLogError(V, {
                                logLevel: "WARN"
                            })
                        }
                        T("ld", "ue_sushi_v1", {
                            wb: 1
                        })
                    }, "Nxs-JS-Client")(ue_csm, window);


                    ue_csm.ue_unrt = 750;
                    (function(d, b, t) {
                        

                        

                        function A(a) {
                            if (a) {
                                var b = a.filter(B);
                                a.length !== b.length && (q = !0, l = d.ue.d(), n && q && (l && h && d.ue.log({
                                    k: C,
                                    t: h,
                                    m: Math.abs(l - h)
                                }, r), m(), q = !1, l = 0))
                            }
                        }

                        function B(a) {
                            if (!a) return !1;
                            var b = "characterData" === a.type ? a.target.parentElement : a.target;
                            if (!b || !b.hasAttributes || !b.attributes) return !1;
                            var c = {
                                    "class": "gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(" "),
                                    id: ["dealClock",
                                        "deal_expiry_timer", "timer"
                                    ],
                                    role: ["timer"]
                                },
                                e = !1;
                            Object.keys(c).forEach(function(a) {
                                var d = b.attributes[a] ? b.attributes[a].value : "";
                                (c[a] || "").forEach(function(a) {
                                    -1 !== d.indexOf(a) && (e = !0)
                                })
                            });
                            return e
                        }

                        

                        

                        function D() {
                            b.ue.onSushiUnload(null);
                            b.ue.onunload(null)
                        }
                        if (b.MutationObserver && b.addEventListener && Object.keys && d && d.ue && d.ue.log && d.ue_unrt && d.ue_utils) {
                            var z = d.ue_unrt,
                                r = "cel",
                                w = "unr_mcm",
                                C = "res_mcm",
                                p = b.performance,
                                f = d.ue_utils,
                                n = !1,
                                h = 0,
                                s = 0,
                                q = !1,
                                l = 0,
                                g = 0,
                                k = 0;
                            b.addEventListener && (b.addEventListener("mousedown", x, !0), b.addEventListener("beforeunload", m, !0), b.addEventListener("visibilitychange", m, !0), b.addEventListener("pagehide", m, !0));
                            b.ue && b.ue.event && b.ue.onSushiUnload &&
                                b.ue.onunload && D();
                            (new MutationObserver(A)).observe(t, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0
                            })
                        }
                    })(ue_csm, window, document);


                    ue_csm.ue.exec(function(g, e) {
                        if (e.ue_err) {
                            var f = "";
                            e.ue_err.errorHandlers || (e.ue_err.errorHandlers = []);
                            e.ue_err.errorHandlers.push({
                                name: "fctx",
                                handler: function(a) {
                                    if (!a.logLevel || "FATAL" === a.logLevel)
                                        if (f = g.getElementsByTagName("html")[0].innerHTML) {
                                            var b = f.indexOf("var ue_t0=ue_t0||+new Date();");
                                            if (-1 !== b) {
                                                var b = f.substr(0, b).split(String.fromCharCode(10)),
                                                    d = Math.max(b.length - 10 - 1, 0),
                                                    b = b.slice(d, b.length - 1);
                                                a.fcsmln = d + b.length + 1;
                                                a.cinfo = a.cinfo || {};
                                                for (var c = 0; c < b.length; c++) a.cinfo[d + c + 1 + ""] =
                                                    b[c]
                                            }
                                            b = f.split(String.fromCharCode(10));
                                            a.cinfo = a.cinfo || {};
                                            if (!(a.f || void 0 === a.l || a.l in a.cinfo))
                                                for (c = +a.l - 1, d = Math.max(c - 5, 0), c = Math.min(c + 5, b.length - 1); d <= c; d++) a.cinfo[d + 1 + ""] = b[d]
                                        }
                                }
                            })
                        }
                    }, "fatals-context")(document, window);


                    (function(m, b) {
                        function c(k) {
                            function f(a) {
                                a && "string" === typeof a && (a = (a = a.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i)) && 1 < a.length ? a[1] : null, a && a && ("number" === typeof e[a] ? e[a]++ : e[a] = 1))
                            }

                            function d(a) {
                                var e = 10,
                                    d = +new Date;
                                a && a.timeRemaining ? e = a.timeRemaining() : a = {
                                    timeRemaining: null
                                };
                                for (var c = b.performance.getEntries(), k = e; g < c.length && k > n;) c[g].name && f(c[g].name), g++, k = a.timeRemaining();
                                g >= c.length ? h(!0) : l()
                            }

                            function h(a) {
                                if (!a) {
                                    a = m.scripts;
                                    var c;
                                    if (a)
                                        for (var d =
                                                0; d < a.length; d++)(c = a[d].getAttribute("src")) && "undefined" !== c && f(c)
                                }
                                0 < Object.keys(e).length && (p && ue_csm.ue && ue_csm.ue.event && ue_csm.ue.event({
                                    domains: e
                                }, "csm", "csm.CrossOriginDomains.1"), b.ue_ext = e)
                            }

                            function l() {
                                !0 === k ? d() : b.requestIdleCallback ? b.requestIdleCallback(d) : b.requestAnimationFrame ? b.requestAnimationFrame(d) : b.setTimeout(d, 100)
                            }

                            function c() {
                                if (b.performance && b.performance.getEntries) {
                                    var a = b.performance.getEntries();
                                    !a || 0 >= a.length ? h(!1) : l()
                                } else h(!1)
                            }
                            var e = b.ue_ext || {};
                            b.ue_ext || c();
                            return e
                        }

                        function q() {
                            setTimeout(c, r)
                        }
                        var s = b.ue_dserr || !1,
                            p = !0,
                            n = 1,
                            r = 2E3,
                            g = 0;
                        b.ue_err && s && (b.ue_err.errorHandlers || (b.ue_err.errorHandlers = []), b.ue_err.errorHandlers.push({
                            name: "ext",
                            handler: null
                        }));
                        b.ue && b.ue.isl ? c() : b.ue &&
                            ue.attach && ue.attach("load", q)
                    })(document, window);





                    ue_csm.ue.exec(function(b, e) {
                        

                        

                        function v(a, l, c) {
                            p++;
                            if (p > w) d.count && 1 == p - w && (d.count("WeblabTriggerThresholdReached", 1), b.ue_int && console.error("Number of max call reached. Data will no longer be send"));
                            else {
                                var h = c || {};
                                h && -1 < h.constructor.toString().indexOf(C) && a && -1 < a.constructor.toString().indexOf(x) && l && -1 < l.constructor.toString().indexOf(x) ?
                                    (h = b.ue_id, c && c.rid && (h = c.rid), c = h, a = encodeURIComponent(",wl=" + a + "/" + l), 2E3 > a.length + n ? (2E3 < k + a.length && t(), void 0 === g[c] && (g[c] = "", f.push(c)), g[c] += a, k += a.length, m || (m = e.setTimeout(t, D))) : b.ue_int && console.error("Invalid API call. The input provided is over 2000 chars.")) : d.count && (d.count("WeblabTriggerImproperAPICall", 1), b.ue_int && console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))
                            }
                        }

                        function E() {
                            d.trigger && d.trigger.isStub &&
                                d.trigger.replay(null)
                        }

                        
                        var s = ":1234",
                            r = "//" + b.ue_furl + "/1/remote-weblab-triggers/1/OE/" + b.ue_mid + ":" + b.ue_sid + ":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",
                            A = "PLCHLDR_RID",
                            D = b.wtt || 1E4,
                            n = r.length + s.length,
                            w = b.mwtc || 2E3,
                            F = e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest,
                            x = "String",
                            C = "Object",
                            d = b.ue,
                            g = {},
                            f = [],
                            k = n,
                            m, z = !1,
                            p = 0,
                            B = function() {
                                return {
                                    send: null
                                }
                            }(),
                            u = function() {
                                return {
                                    send: null
                                }
                            }();
                        e.encodeURIComponent && (d.attach && (d.attach("beforeunload", y), d.attach("pagehide", y)), E(), d.trigger = v)
                    }, "client-wbl-trg")(ue_csm, window);


                    (function(k, d, h) {
                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        function r() {
                            var a;
                            a = d.location && d.location.protocol ? d.location.protocol : void 0;
                            "https:" == a && (z(), w(), x(), y(), B(), p < C && setTimeout(r, D))
                        }
                        var s = "[CSM] Insecure content detected ",
                            t = "[CSM] Ajax request to same page detected ",
                            v = "WARN",
                            m = {},
                            p = 0,
                            D = k.ue_nsip || 1E3,
                            C = 5,
                            A = 1 == k.ue_urt,
                            u = !0;
                        ue_csm.ue_disableNonSecure || (d.performance && d.performance.setResourceTimingBufferSize && d.performance.setResourceTimingBufferSize(300), r())
                    })(ue_csm, window, document);


                    var ue_aa_a = "C";
                    if (ue.trigger && (ue_aa_a === "C" || ue_aa_a === "T1")) {
                        ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", ue_aa_a);
                    }
                    (function(f, b) {
                        function g() {
                            try {
                                b.PerformanceObserver && "function" === typeof b.PerformanceObserver && (a = new b.PerformanceObserver(null), a.observe(d))
                            } catch (h) {
                                k()
                            }
                        }

                        function m() {
                            for (var h = d.entryTypes, a = 0; a < h.length; a++) c(b.performance.getEntriesByType(h[a]))
                        }

                        function c(a) {
                            if (a && Array.isArray(a)) {
                                for (var c = 0, e = 0; e < a.length; e++) {
                                    var d = l.indexOf(a[e].name);
                                    if (-1 !== d) {
                                        var g = Math.round(b.performance.timing.navigationStart + a[e].startTime);
                                        f.uet(n[d], void 0, void 0, g);
                                        c++
                                    }
                                }
                                l.length ===
                                    c && k()
                            }
                        }

                        function k() {
                            a && a.disconnect && "function" === typeof a.disconnect && a.disconnect()
                        }
                        if ("function" === typeof f.uet && b.performance && "object" === typeof b.performance && b.performance.getEntriesByType && "function" === typeof b.performance.getEntriesByType && b.performance.timing && "object" === typeof b.performance.timing && "number" === typeof b.performance.timing.navigationStart) {
                            var d = {
                                    entryTypes: ["paint"]
                                },
                                l = ["first-paint", "first-contentful-paint"],
                                n = ["fp", "fcp"],
                                a;
                            try {
                                m(), g()
                            } catch (p) {
                                f.ueLogError(p, {
                                    logLevel: "ERROR",
                                    attribution: "performanceMetrics"
                                })
                            }
                        }
                    })(ue_csm, window);


                    if (window.csa) {
                        csa("Events")("setEntity", {
                            page: {
                                pageType: "exports-gateway-phone-web",
                                subPageType: "mobile",
                                pageTypeId: "mobile"
                            }
                        });
                    }
                    (function(d, l, n) {
                        var p = function() {
                                var a, b = function() {
                                        return null != a ? a : a = function() {
                                            var a = [],
                                                b = "unknown",
                                                c = {
                                                    trident: 0,
                                                    gecko: 0,
                                                    presto: 0,
                                                    webkit: 0,
                                                    unknown: -1
                                                },
                                                g, k = {},
                                                b = document.createElement("nadu");
                                            for (g in b.style)
                                                if (b = (/^([A-Za-z][a-z]*)[A-Z]/.exec(g) || [])[1]) b = b.toLowerCase(), b in k ? k[b]++ : k[b] = 1;
                                            for (var e in k) a.push([e, k[e]]);
                                            a = a.sort(function(a, c) {
                                                return c[1] - a[1]
                                            }).slice(0, 10);
                                            for (g = 0; g < a.length; g++) switch (a[g][0]) {
                                                case "moz":
                                                    c.gecko += 5;
                                                    break;
                                                case "ms":
                                                    c.trident += 5;
                                                    break;
                                                case "get":
                                                    c.webkit++;
                                                    break;
                                                case "webkit":
                                                    c.webkit += 5;
                                                    break;
                                                case "o":
                                                    c.presto += 2;
                                                    break;
                                                case "xv":
                                                    c.presto += 2
                                            }
                                            "onhelp" in window && c.trident++;
                                            "maxConnectionsPerServer" in window && c.trident++;
                                            try {
                                                void 0 !== window.ActiveXObject.toString && (c.trident += 5)
                                            } catch (d) {}
                                            void 0 !== null.toSource && (c.gecko += 5);
                                            var a = "unknown",
                                                f;
                                            for (f in c) c[f] > c[a] && (a = f);
                                            return a
                                        }()
                                    },
                                    d = null,
                                    f = null,
                                    e = null,
                                    h = function() {
                                        return "webkit" == b()
                                    },
                                    m = function() {
                                        return void 0 !== l.chrome && "Opera Software ASA" != navigator.vendor && void 0 === navigator.msLaunchUri && h()
                                    };
                                return {
                                    isOpera: d,
                                    isIE: f,
                                    isEdge: e,
                                    isFirefox: null,
                                    isWebkit: h,
                                    isChrome: m,
                                    isSafari: null
                                }
                            }(),
                            q = null;
                        (function(a) {
                            

                            function l() {
                                var b = !1,
                                    d = [function() {
                                        for (var b = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                                                c = 0; c < b.length; c++)
                                            if (b[c] in n) return e = b[c], !0;
                                        for (var d in n)
                                            if (d.match(/\$[a-z]dc_/) && a.document[d] && a.document[d].cache_) return e = d, !0;
                                        return !1
                                    }, function() {
                                        for (var b = "_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder".split(" "), c = 0; c < b.length; c++)
                                            if (b[c] in a) return e = b[c], !0;
                                        return !1
                                    }, function() {
                                        return a.webdriver || a.document.webdriver || a.document.documentElement.hasAttribute("webdriver") || a.document.documentElement.hasAttribute("selenium") || a.document.documentElement.hasAttribute("driver") ||
                                            navigator.webdriver || "object" === typeof a.$cdc_asdjflasutopfhvcZLmcfl_ || "object" === typeof a.document.$cdc_asdjflasutopfhvcZLmcfl_ || null != a.name && -1 < a.name.indexOf("driver") ? (e = null != a.name ? a.name : "", !0) : !1
                                    }, null],
                                    c = 0;
                                for (; c < d.length; c++)
                                    if (d[c].call()) {
                                        b = !0;
                                        break
                                    }
                                return {
                                    isSel: b,
                                    isTest: !1
                                }
                            }
                            var f = null,
                                e = "";
                            try {
                                (a.callPhantom || a._phantom ||
                                    a.PhantomEmitter || a.__phantomas || /PhantomJS/.test(navigator.userAgent)) && b(5);
                                a.emit && b(13);
                                a.spawn && b(14);
                                (null != a.domAutomation || null != a.domAutomationController || null != a._WEBDRIVER_ELEM_CACHE || /HeadlessChrome/.test(navigator.userAgent) || "" === navigator.languages) && b(0);
                                if (p.isChrome() && a.webkitRequestFileSystem) a.webkitRequestFileSystem(a.TEMPORARY, 1, function() {}, null);
                                else if (p.isSafari() && a.localStorage) {
                                    try {
                                        a.localStorage.setItem("__nadu", "")
                                    } catch (h) {
                                        b(3)
                                    }
                                    a.localStorage.removeItem("__nadu")
                                }
                                a.external &&
                                    "function" === typeof a.external.toString && a.external.toString() && -1 < a.external.toString().indexOf("RuntimeObject") && b(8);
                                a.FirefoxInterfaces && "function" === typeof a.FirefoxInterfaces && a.FirefoxInterfaces("wdICoordinate", "wdIMouse", "wdIStatus") && b(2);
                                a.XPCOMUtils && b(9);
                                (a.Components && (a.Components.interfaces && a.Components.interfaces.nsICommandProcessor || a.Components.wdICoordinate || a.Components.wdIMouse || a.Components.wdIStatus || a.Components.classes) || a.netscape && a.netscape.security && a.netscape.security.privilegemanager) &&
                                b(8);
                                !a.opera || null === a.opera._browserjsran || 0 !== a.opera._browserjsran && !1 !== a.opera._browserjsran || b(4);
                                a.screen && (1 >= a.screen.availHeight || 1 >= a.screen.availWidth || 1 >= a.screen.height || 1 >= a.screen.width || 0 >= a.screen.devicePixelRatio) && b(10);
                                l()
                            } catch (m) {
                                d.ueLogError(m, {
                                    logLevel: "ERROR",
                                    attribution: "A9TQForensics",
                                    message: "JS exception during headless browser check - "
                                })
                            }
                        })(l);
                        d.ue && d.ue.event && d.ue.event({
                            server: window.location.hostname,
                            fmp: {
                                vfrd: "0"
                            }
                        }, "a9_tq", "a9_tq.FraudMetrics.2")
                    })(ue_csm, window,
                        document);


                }
                /* ◬ */
            