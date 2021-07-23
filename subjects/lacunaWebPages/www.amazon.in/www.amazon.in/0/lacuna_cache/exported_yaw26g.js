
        (function(l) {
            var m = window.AmazonUIPageJS || window.P,
                p = m._namespace || m.attributeErrors,
                c = p ? p("GWMMetricsJS", "") : m;
            c.guardFatal ? c.guardFatal(l)(c, window) : c.execute(function() {
                l(c, window)
            })
        })(function(l, m, p) {
            (function(c) {
                function k(a) {
                    if (a && !e[a] && (e[a] = !0, d[a])) {
                        a = d[a];
                        for (var b = 0; b < a.length; ++b) a[b]()
                    }
                }

                function f(a, b) {
                    if (a) {
                        var c = new Image;
                        c.onload = function() {
                            b && b()
                        };
                        c.src = a;
                        g.push(c);
                        return c.complete
                    }
                }
                var d = {},
                    e = {},
                    h = {},
                    g = [];
                c.gm = {
                    s: function(a, b) {
                        h[a] = b
                    },
                    r: function(a) {
                        return h[a]
                    },
                    mpe: function(a,
                        b) {
                        c.uet && c.uet(a);
                        k(a);
                        b = b || {};
                        b.ld && c.uex && c.uex("ld");
                        c.P && l.register(a)
                    },
                    mse: function(a, b, d) {
                        if (b) {
                            var e = a + ":" + b;
                            c.uet && c.uet(a, b, {
                                wb: 1
                            });
                            k(e);
                            d = d || {};
                            d.ld && c.uex && c.uex("ld", b, {
                                wb: 1
                            });
                            c.P && l.register(e)
                        }
                    },
                    w: function(a, b) {
                        b && (e[a] ? b() : (d[a] || (d[a] = []), d[a].push(b)))
                    },
                    wil: function(a, b) {
                        if (b)
                            if (a && 0 !== a.length)
                                for (var c = 0, d = [], e = function(e) {
                                        return function() {
                                            c += 1;
                                            c === a.length && b && b(d)
                                        }
                                    }, n = 0; n < a.length; ++n) {
                                    var q = a[n];
                                    f(q, e(q)) && d.push(q)
                                } else b([])
                    },
                    ail: function(a, b) {
                        var c, d, e, n;
                        if (b)
                            if (a && 0 != a.length)
                                for (c =
                                    function(c) {
                                        return function() {
                                            b && b(c, a)
                                        }
                                    }, d = 0; d < a.length; ++d) e = a[d], (n = f(e, c(e))) && b && b(e, a);
                            else b("")
                    },
                    o: function(a, b) {
                        a && b && (a = "gm.o:" + a, c.gm.r(a) || (c.gm.s(a, !0), b()))
                    }
                }
            })(m);
            "use strict";
            (function(c) {
                c.gwmAf = {
                    init: function() {
                        var k = document.getElementsByTagName("img"),
                            f = [];
                        try {
                            for (var d = document.getElementById("gwm-Deck"), e = null === d ? [] : d.getElementsByTagName("*"), d = 0; d < e.length; d++) {
                                var h = c.getComputedStyle(e[d]).backgroundImage;
                                if (h && h.match(/^url\(/g)) {
                                    var g = h.slice(4, -1).replace(/['"]/g, ""); -
                                    1 === f.indexOf(g) && f.push(g)
                                }
                            }
                        } catch (a) {
                            c.ueLogError && c.ueLogError(a, {
                                logLevel: "WARN",
                                attribution: "GWM:Metrics:true-af",
                                message: "UnsupportedJSError"
                            })
                        }
                        for (d = 0; d < k.length; d++) - 1 === k[d].className.indexOf("aok-hidden") && -1 === f.indexOf(k[d].src) && f.push(k[d].src);
                        gm.ail(f, gwmAf.onImageLoad)
                    },
                    onImageLoad: function(k, f) {
                        var d = document.querySelectorAll("#gwm-CardLoadingIndicator"),
                            e, h = 1,
                            g, a, b;
                        if (!gm.r("hfa")) {
                            e = document.getElementsByTagName("img");
                            for (b = 0; b < e.length; b++) - 1 !== f.indexOf(e[b].src) && (g = e[b].naturalHeight,
                                g = e[b].complete && "undefined" !== typeof g && 0 !== g && f.indexOf(k), (a = e[b].getBoundingClientRect().top + c.pageYOffset < c.innerHeight && "none" !== e[b].style.display) && !g && (h = 0));
                            if (d.length && -1 == d[0].className.indexOf("hidden") && d[0].getBoundingClientRect().top + c.pageYOffset < c.innerHeight) {
                                h = 0;
                                if (gm.r("taw")) return;
                                gm.s("taw", 1);
                                l.when("A").execute(function(a) {
                                    var b = a.once(function() {
                                        var a = [],
                                            b, c;
                                        gm.s("taw", 0);
                                        b = document.getElementsByTagName("img");
                                        for (c = 0; c < b.length; c++) - 1 === f.indexOf(b[c].src) && a.push(b[c].src);
                                        f = a;
                                        gm.ail(f, gwmAf.onImageLoad)
                                    });
                                    a.state.bind("gwm-card-loader", function(a, c) {
                                        c.request && !a.request && b()
                                    })
                                })
                            }
                            h && (gm.s("hfa", 1), gm.mse("af", "gwm", {
                                ld: 1
                            }))
                        }
                    }
                }
            })(m)
        });
    