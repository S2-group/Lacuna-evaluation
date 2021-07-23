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

        window.ue_ibe = (window.ue_ibe || 0) + 1;
        if (window.ue_ibe === 1) {
            if (window.ue && window.ue.uels) {
                ue.uels("https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/ClientSideMetricsAUIJavascript@jserrorsForesterCompressedSushi.821f0440db9306eccf7e9cf0b17dac2d45b8e02d._V2_.js");
            }


            window.ue_csm.cel_widgets = [{
                id: "gw-mobile-herotator"
            }, {
                id: "mobile-ad"
            }, {
                id: "promo-row-1"
            }, {
                id: "promo-row-2"
            }, {
                c: "nav-mobile",
                id_gen: function() {
                    return 'nav-mobile';
                }
            }, {
                c: "shogun-widget",
                id_gen: function(elem, index) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[833:905]", functionData => eval(functionData))}
            }, {
                id: "gw-critical-content"
            }, {
                id: "gwm-Nav-footer"
            }, {
                id: "gwm-BasicFooter"
            }, {
                id: "mobile-ad-container"
            }, {
                c: "gwm-BillboardCard",
                id_gen: function(elem, index) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[1236:1311]", functionData => eval(functionData))}
            }, {
                c: "gwm-Secondary-row",
                id_gen: function(elem, index) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[1415:1490]", functionData => eval(functionData))}
            }, {
                c: "nav-panel",
                id_gen: function(elem, index) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[1586:1653]", functionData => eval(functionData))}
            }, {
                c: "celwidget"
            }, {
                id: "fallbacksessionShvl"
            }, {
                id: "rhf"
            }];



            ue_csm.ue.exec(function(b) {
                var a = b.ue;
                if (a && a.onSushiUnload) {
                    if (a.onunload) a.onunload(function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[1996:2156]", functionData => eval(functionData))});
                    a.onSushiUnload(function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[2206:2427]", functionData => eval(functionData))})
                }
            }, "Nxs-unload-baseline")(ue_csm);


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

                    function e() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[3697:4567]", functionData => eval(functionData))}

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
                        u = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[5092:5153]", functionData => eval(functionData))}, f)
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
                        z = c.requestAnimationFrame || function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[5745:5804]", functionData => eval(functionData))};
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
                            reset: function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[7035:7709]", functionData => eval(functionData))},
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

                    function e() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10171:10242]", functionData => eval(functionData))}

                    function r() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10277:10348]", functionData => eval(functionData))}

                    function x() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10383:10450]", functionData => eval(functionData))}

                    function t() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10485:10552]", functionData => eval(functionData))}

                    function q() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10587:10775]", functionData => eval(functionData))}

                    function k(a, b, c) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[10817:11146]", functionData => eval(functionData))}

                    function b() {
                        f.attach && (C && f.attach(p, q, h), y && P.when("mash").execute(function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[11284:11438]", functionData => eval(functionData))}), f.attach("blur", e, c), f.attach("focus", r, c))
                    }

                    function g() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[11546:11885]", functionData => eval(functionData))}
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
                        off: function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[13148:13330]", functionData => eval(functionData))},
                        ready: function() {
                            return h.body && a.ue_cel && a.ue_cel.log
                        },
                        reset: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[13515:13583]", functionData => eval(functionData))}
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

                    function l() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[14535:14616]", functionData => eval(functionData))}
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
                        off: function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[15546:15854]", functionData => eval(functionData))},
                        ready: function() {
                            return a.ue_cel && a.ue_cel.log
                        },
                        reset: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[16029:16095]", functionData => eval(functionData))},
                        getVpi: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[16140:16204]", functionData => eval(functionData))}
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
                            } || function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[26371:26452]", functionData => eval(functionData))};
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
                            off: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[28743:29128]", functionData => eval(functionData))},
                            ready: function() {
                                return a.ue_cel && a.ue_cel.log
                            },
                            reset: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[29319:29406]", functionData => eval(functionData))}
                        }
                    }(), a.ue_cel && a.ue_fem && a.ue_cel.registerModule("features module", a.ue_fem))
                }
            })(ue_csm, window, document);
            (function(a, c, h) {
                !a.ue_mcm && a.ue_cel && a.ue_utils && !a.ue.isBF && (a.ue_mcm = function() {
                    function l(a, k) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[29760:30895]", functionData => eval(functionData))}
                    var e = "mcm",
                        r, x = a.ue_cel.log,
                        t = a.ue_utils;
                    return {
                        on: function(c) {
                            r = c.ts;
                            a.ue_cel_stub && a.ue_cel_stub.replayModule(e, l);
                            window.addEventListener && window.addEventListener("mousedown", l, !0)
                        },
                        off: function(a) {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[31371:31500]", functionData => eval(functionData))},
                        ready: function() {
                            return a.ue_cel && a.ue_cel.log
                        },
                        reset: function() {lacuna_lazy_load("lacuna_cache/exported_gx5nzo.js[31675:31677]", functionData => eval(functionData))}
                    }
                }(), a.ue_cel && a.ue_cel.registerModule("mouse click module", a.ue_mcm))
            })(ue_csm, document, window.performance);


        }
    