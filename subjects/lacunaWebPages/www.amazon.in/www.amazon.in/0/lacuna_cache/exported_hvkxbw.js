
        (function(f, h, R, A) {
            function G(a) {
                x && x.tag && x.tag(q(":", "aui", a))
            }

            function v(a, b) {
                x && x.count && x.count("aui:" + a, 0 === b ? 0 : b || (x.count("aui:" + a) || 0) + 1)
            }

            function p(a) {
                try {
                    return a.test(navigator.userAgent)
                } catch (b) {
                    return !1
                }
            }

            function y(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            }

            function q(a, b, c, e) {
                b = b && c ? b + a + c : b || c;
                return e ? q(a, b, e) : b
            }

            function H(a, b, c) {
                try {
                    Object.defineProperty(a, b, {
                        value: c,
                        writable: !1
                    })
                } catch (e) {
                    a[b] = c
                }
                return c
            }

            function ua(a, b) {
                var c = a.length,
                    e = c,
                    g = function() {
                        e-- || (S.push(b), T || (setTimeout(U, 0), T = !0))
                    };
                for (g(); c--;) da[a[c]] ? g() : (B[a[c]] = B[a[c]] || []).push(g)
            }

            function va(a, b, c, e, g) {
                var d = h.createElement(a ? "script" : "link");
                y(d, "error", e);
                g && y(d, "load", g);
                a ? (d.type = "text/javascript", d.async = !0, c && /AUIClients|images[/]I/.test(b) && d.setAttribute("crossorigin", "anonymous"), d.src = b) : (d.rel = "stylesheet", d.href = b);
                h.getElementsByTagName("head")[0].appendChild(d)
            }

            function ea(a, b) {
                function c(c, e) {
                    function g() {
                        va(b, c, h, function(b) {
                            !I && h ? (h = !1, v("resource_retry"),
                                g()) : (v("resource_error"), a.log("Asset failed to load: " + c, I ? "WARN" : A));
                            b && b.stopPropagation ? b.stopPropagation() : f.event && (f.event.cancelBubble = !0)
                        }, e)
                    }
                    if (fa[c]) return !1;
                    fa[c] = !0;
                    v("resource_count");
                    var h = !0;
                    return !g()
                }
                if (b) {
                    var e = 0,
                        g = 0;
                    c.andConfirm = function(a, b) {
                        return c(a, function() {
                            e++;
                            b && b.apply(this, arguments)
                        })
                    };
                    c.confirm = function() {
                        g++
                    };
                    c.getCsriCounters = function() {
                        return {
                            reqs: e,
                            full: g
                        }
                    }
                }
                return c
            }

            function wa(a, b, c) {
                for (var e = {
                        name: a,
                        guard: function(c) {
                            return b.guardFatal(a, c)
                        },
                        logError: function(c,
                            d, e) {
                            b.logError(c, d, e, a)
                        }
                    }, g = [], d = 0; d < c.length; d++) J.hasOwnProperty(c[d]) && (g[d] = V.hasOwnProperty(c[d]) ? V[c[d]](J[c[d]], e) : J[c[d]]);
                return g
            }

            function C(a, b, c, e, g) {
                return function(d, h) {
                    function n() {
                        var a = null;
                        e ? a = h : "function" === typeof h && (p.start = D(), a = h.apply(f, wa(d, k, l)), p.end = D());
                        if (b) {
                            J[d] = a;
                            a = d;
                            for (da[a] = !0;
                                (B[a] || []).length;) B[a].shift()();
                            delete B[a]
                        }
                        p.done = !0
                    }
                    var k = g || this;
                    "function" === typeof d && (h = d, d = A);
                    b && (d = d ? d.replace(ga, "") : "__NONAME__", W.hasOwnProperty(d) && k.error(q(", reregistered by ",
                        q(" by ", d + " already registered", W[d]), k.attribution), d), W[d] = k.attribution);
                    for (var l = [], m = 0; m < a.length; m++) l[m] = a[m].replace(ga, "");
                    var p = ha[d || "anon" + ++xa] = {
                        depend: l,
                        registered: D(),
                        namespace: k.namespace
                    };
                    c ? n() : ua(l, k.guardFatal(d, n));
                    return {
                        decorate: function(a) {
                            V[d] = k.guardFatal(d, a)
                        }
                    }
                }
            }

            function ia(a) {
                return function() {
                    var b = Array.prototype.slice.call(arguments);
                    return {
                        execute: C(b, !1, a, !1, this),
                        register: C(b, !0, a, !1, this)
                    }
                }
            }

            function X(a, b) {
                return function(c, e) {
                    e || (e = c, c = A);
                    var g = this.attribution;
                    return function() {
                        z.push(b || {
                            attribution: g,
                            name: c,
                            logLevel: a
                        });
                        var d = e.apply(this, arguments);
                        z.pop();
                        return d
                    }
                }
            }

            function K(a, b) {
                this.load = {
                    js: ea(this, !0),
                    css: ea(this)
                };
                H(this, "namespace", b);
                H(this, "attribution", a)
            }

            function ja() {
                h.body ? r.trigger("a-bodyBegin") : setTimeout(ja, 20)
            }

            function E(a, b) {
                a.className = Y(a, b) + " " + b
            }

            function Y(a, b) {
                return (" " + a.className + " ").split(" " + b + " ").join(" ").replace(/^ | $/g, "")
            }

            function ka(a) {
                try {
                    return a()
                } catch (b) {
                    return !1
                }
            }

            function L() {
                if (M) {
                    var a = {
                        w: f.innerWidth ||
                            n.clientWidth,
                        h: f.innerHeight || n.clientHeight
                    };
                    5 < Math.abs(a.w - Z.w) || 50 < a.h - Z.h ? (Z = a, N = 4, (a = k.mobile || k.tablet ? 450 < a.w && a.w > a.h : 1250 <= a.w) ? E(n, "a-ws") : n.className = Y(n, "a-ws")) : 0 < N && (N--, la = setTimeout(L, 16))
                }
            }

            function ya(a) {
                (M = a === A ? !M : !!a) && L()
            }

            function za() {
                return M
            }

            function u(a, b) {
                return "sw:" + (b || "") + ":" + a + ":"
            }

            function ma() {
                na.forEach(function(a) {
                    G(a)
                })
            }

            function t(a) {
                na.push(a)
            }

            function oa(a, b, c, e) {
                if (c) {
                    b = p(/Chrome/i) && !p(/Edge/i) && !p(/OPR/i) && !a.capabilities.isAmazonApp && !p(new RegExp(aa + "bwv" +
                        aa + "b"));
                    var g = u(e, "browser"),
                        d = u(e, "prod_mshop"),
                        f = u(e, "beta_mshop");
                    !a.capabilities.isAmazonApp && c.browser && b && (t(g + "supported"), c.browser.action(g, e));
                    !b && c.browser && t(g + "unsupported");
                    c.prodMshop && t(d + "unsupported");
                    c.betaMshop && t(f + "unsupported")
                }
            }
            "use strict";
            var O = R.now = R.now || function() {
                    return +new R
                },
                D = function(a) {
                    return a && a.now ? a.now.bind(a) : O
                }(f.performance),
                P = D(),
                l = f.AmazonUIPageJS || f.P;
            if (l && l.when && l.register) {
                for (var P = [], m = h.currentScript; m; m = m.parentElement) m.id && P.push(m.id);
                return l.log("A copy of P has already been loaded on this page.",
                    "FATAL", P.join(" "))
            }
            var x = f.ue;
            G();
            G("aui_build_date:3.19.6-2019-09-05");
            var S = [],
                T = !1,
                U;
            U = function() {
                for (var a = setTimeout(U, 0), b = O(); S.length;)
                    if (S.shift()(), 50 < O() - b) return;
                clearTimeout(a);
                T = !1
            };
            var da = {},
                B = {},
                fa = {},
                I = !1;
            y(f, "beforeunload", function() {
                I = !0;
                setTimeout(function() {
                    I = !1
                }, 1E4)
            });
            var ga = /^prv:/,
                W = {},
                J = {},
                V = {},
                ha = {},
                xa = 0,
                aa = String.fromCharCode(92),
                F, z = [],
                pa = f.onerror;
            f.onerror = function(a, b, c, e, g) {
                g && "object" === typeof g || (g = Error(a, b, c), g.columnNumber = e, g.stack = b || c || e ? q(aa, g.message, "at " +
                    q(":", b, c, e)) : A);
                var d = z.pop() || {};
                g.attribution = q(":", g.attribution || d.attribution, d.name);
                g.logLevel = d.logLevel;
                g.attribution && console && console.log && console.log([g.logLevel || "ERROR", a, "thrown by", g.attribution].join(" "));
                z = [];
                pa && (d = [].slice.call(arguments), d[4] = g, pa.apply(f, d))
            };
            K.prototype = {
                logError: function(a, b, c, e) {
                    b = {
                        message: b,
                        logLevel: c || "ERROR",
                        attribution: q(":", this.attribution, e)
                    };
                    if (f.ueLogError) return f.ueLogError(a || b, a ? b : null), !0;
                    console && console.error && (console.log(b), console.error(a));
                    return !1
                },
                error: function(a, b, c, e) {
                    a = Error(q(":", e, a, c));
                    a.attribution = q(":", this.attribution, b);
                    throw a;
                },
                guardError: X(),
                guardFatal: X("FATAL"),
                guardCurrent: function(a) {
                    var b = z[z.length - 1];
                    return b ? X(b.logLevel, b).call(this, a) : a
                },
                log: function(a, b, c) {
                    return this.logError(null, a, b, c)
                },
                declare: C([], !0, !0, !0),
                register: C([], !0),
                execute: C([]),
                AUI_BUILD_DATE: "3.19.6-2019-09-05",
                when: ia(),
                now: ia(!0),
                trigger: function(a, b, c) {
                    var e = O();
                    this.declare(a, {
                        data: b,
                        pageElapsedTime: e - (f.aPageStart || NaN),
                        triggerTime: e
                    });
                    c && c.instrument && F.when("prv:a-logTrigger").execute(function(b) {
                        b(a)
                    })
                },
                handleTriggers: function() {
                    this.log("handleTriggers deprecated")
                },
                attributeErrors: function(a) {
                    return new K(a)
                },
                _namespace: function(a, b) {
                    return new K(a, b)
                }
            };
            var r = H(f, "AmazonUIPageJS", new K);
            F = r._namespace("PageJS", "AmazonUI");
            F.declare("prv:p-debug", ha);
            r.declare("p-recorder-events", []);
            r.declare("p-recorder-stop", function() {});
            H(f, "P", r);
            ja();
            if (h.addEventListener) {
                var qa;
                h.addEventListener("DOMContentLoaded", qa = function() {
                    r.trigger("a-domready");
                    h.removeEventListener("DOMContentLoaded", qa, !1)
                }, !1)
            }
            var n = h.documentElement,
                ba = function() {
                    var a = ["O", "ms", "Moz", "Webkit"],
                        b = h.createElement("div");
                    return {
                        testGradients: function() {
                            b.style.cssText = "background-image:-webkit-gradient(linear,left top,right bottom,from(#1E4),to(white));background-image:-webkit-linear-gradient(left top,#1E4,white);background-image:linear-gradient(left top,#1E4,white);";
                            return ~b.style.backgroundImage.indexOf("gradient")
                        },
                        test: function(c) {
                            var e = c.charAt(0).toUpperCase() +
                                c.substr(1);
                            c = (a.join(e + " ") + e + " " + c).split(" ");
                            for (e = c.length; e--;)
                                if ("" === b.style[c[e]]) return !0;
                            return !1
                        },
                        testTransform3d: function() {
                            var a = !1;
                            f.matchMedia && (a = f.matchMedia("(-webkit-transform-3d)").matches);
                            return a
                        }
                    }
                }(),
                l = n.className,
                ra = /(^| )a-mobile( |$)/.test(l),
                sa = /(^| )a-tablet( |$)/.test(l),
                k = {
                    audio: function() {
                        return !!h.createElement("audio").canPlayType
                    },
                    video: function() {
                        return !!h.createElement("video").canPlayType
                    },
                    canvas: function() {
                        return !!h.createElement("canvas").getContext
                    },
                    svg: function() {
                        return !!h.createElementNS &&
                            !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
                    },
                    offline: function() {
                        return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine
                    },
                    dragDrop: function() {
                        return "draggable" in h.createElement("span")
                    },
                    geolocation: function() {
                        return !!navigator.geolocation
                    },
                    history: function() {
                        return !(!f.history || !f.history.pushState)
                    },
                    webworker: function() {
                        return !!f.Worker
                    },
                    autofocus: function() {
                        return "autofocus" in h.createElement("input")
                    },
                    inputPlaceholder: function() {
                        return "placeholder" in
                            h.createElement("input")
                    },
                    textareaPlaceholder: function() {
                        return "placeholder" in h.createElement("textarea")
                    },
                    localStorage: function() {
                        return "localStorage" in f && null !== f.localStorage
                    },
                    orientation: function() {
                        return "orientation" in f
                    },
                    touch: function() {
                        return "ontouchend" in h
                    },
                    gradients: function() {
                        return ba.testGradients()
                    },
                    hires: function() {
                        var a = f.devicePixelRatio && 1.5 <= f.devicePixelRatio || f.matchMedia && f.matchMedia("(min-resolution:144dpi)").matches;
                        v("hiRes" + (ra ? "Mobile" : sa ? "Tablet" : "Desktop"), a ? 1 : 0);
                        return a
                    },
                    transform3d: function() {
                        return ba.testTransform3d()
                    },
                    touchScrolling: function() {
                        return p(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)
                    },
                    ios: function() {
                        return p(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !p(/trident|Edge/i)
                    },
                    android: function() {
                        return p(/android.([1-9]|[L-Z])/i) && !p(/trident|Edge/i)
                    },
                    mobile: function() {
                        return ra
                    },
                    tablet: function() {
                        return sa
                    },
                    rtl: function() {
                        return "rtl" === n.dir
                    }
                };
            for (m in k) k.hasOwnProperty(m) &&
                (k[m] = ka(k[m]));
            for (var ca = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), Q = 0; Q < ca.length; Q++) k[ca[Q]] = ka(function() {
                return ba.test(ca[Q])
            });
            var M = !0,
                la = 0,
                Z = {
                    w: 0,
                    h: 0
                },
                N = 4;
            L();
            y(f, "resize", function() {
                clearTimeout(la);
                N = 4;
                L()
            });
            var ta = {
                getItem: function(a) {
                    try {
                        return f.localStorage.getItem(a)
                    } catch (b) {}
                },
                setItem: function(a, b) {
                    try {
                        return f.localStorage.setItem(a, b)
                    } catch (c) {}
                }
            };
            n.className = Y(n, "a-no-js");
            E(n, "a-js");
            !p(/OS [1-8](_[0-9]*)+ like Mac OS X/i) ||
                f.navigator.standalone || p(/safari/i) || E(n, "a-ember");
            l = [];
            for (m in k) k.hasOwnProperty(m) && k[m] && l.push("a-" + m.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            }));
            E(n, l.join(" "));
            n.setAttribute("data-aui-build-date", "3.19.6-2019-09-05");
            r.register("p-detect", function() {
                return {
                    capabilities: k,
                    localStorage: k.localStorage && ta,
                    toggleResponsiveGrid: ya,
                    responsiveGridEnabled: za
                }
            });
            p(/UCBrowser/i) || k.localStorage && E(n, ta.getItem("a-font-class"));
            r.declare("a-event-revised-handling", !1);
            var w;
            try {
                w =
                    navigator.serviceWorker
            } catch (a) {
                G("sw:nav_err")
            }
            w && (y(w, "message", function(a) {
                a && a.data && v(a.data.k, a.data.v)
            }), w.controller && w.controller.postMessage("MSG-RDY"));
            var na = [],
                l = {
                    reg: {},
                    unreg: {}
                };
            l.reg.browser = {
                action: function(a, b) {
                    w.register("/service-worker.js").then(function() {
                        v(a + "success")
                    }).catch(function(c) {
                        r.logError(c, "[AUI SW] Failed to " + b + " service worker: ");
                        v(a + "failure")
                    })
                }
            };
            (function(a) {
                var b = a.reg,
                    c = a.unreg;
                w && w.getRegistrations ? (F.when("A", "a-util").execute(function(a, b) {
                    oa(a, b, c,
                        "unregister")
                }), y(f, "load", function() {
                    F.when("A", "a-util").execute(function(a, c) {
                        oa(a, c, b, "register");
                        ma()
                    })
                })) : (b && (b.browser && t(u("register", "browser") + "unsupported"), b.prodMshop && t(u("register", "prod_mshop") + "unsupported"), b.betaMshop && t(u("register", "beta_mshop") + "unsupported")), c && (c.browser && t(u("unregister", "browser") + "unsupported"), c.prodMshop && t(u("unregister", "prod_mshop") + "unsupported"), c.betaMshop && t(u("unregister", "beta_mshop") + "unsupported")), ma())
            })(l);
            r.declare("a-fix-event-off", !1);
            v("pagejs:pkgExecTime", D() - P)
        })(window, document, Date);
    