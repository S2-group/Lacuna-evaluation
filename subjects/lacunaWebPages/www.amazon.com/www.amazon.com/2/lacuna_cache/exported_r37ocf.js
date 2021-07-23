
        window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
        if (window.ue_ihb === 1) {

            var ue_csm = window,
                ue_hob = +new Date();
            (function(d) {
                var e = d.ue = d.ue || {},
                    f = Date.now || function() {};
                e.d = function(b) {
                    return f() - (b ? 0 : d.ue_t0)
                };
                e.stub = function(b, a) {
                    if (!b[a]) {
                        var c = [];
                        b[a] = function() {
                            c.push([c.slice.call(arguments), e.d(), d.ue_id])
                        };
                        b[a].replay = function(b) {
                            for (var a; a = c.shift();) b(a[0], a[1], a[2])
                        };
                        b[a].isStub = 1
                    }
                };
                e.exec = function(b, a) {
                    return function() {
                        try {
                            return b.apply(this, arguments)
                        } catch (c) {
                            ueLogError(c, {
                                attribution: a || "undefined",
                                logLevel: "WARN"
                            })
                        }
                    }
                }
            })(ue_csm);


            var ue_err_chan = 'jserr-rw';
            (function(d, e) {
                function h(f, b) {}

                function l(a, b, c, e, g) {}
                var k = "FATAL",
                    m = "ERROR",
                    n = "WARN",
                    p = "DOWNGRADED",
                    a = {
                        ec: 0,
                        ecf: 0,
                        pec: 0,
                        ts: 0,
                        erl: [],
                        ter: [],
                        mxe: 50,
                        startTimer: function() {
                            a.ts++;
                            setInterval(function() {}, 1E4)
                        }
                    };
                l.skipTrace = 1;
                h.skipTrace = 1;
                h.isStub = 1;
                d.ueLogError = h;
                d.ue_err = a;
                e.onerror = l
            })(ue_csm, window);


            var ue_id = '6QKAQWH3ARHCQFMBSRA9',
                ue_url = '/gp/uedata',
                ue_navtiming = 1,
                ue_mid = 'ATVPDKIKX0DER',
                ue_sid = '143-1759968-0841650',
                ue_sn = 'www.amazon.com',
                ue_furl = 'fls-na.amazon.com',
                ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
                ue_int = 0,
                ue_fcsn = 1,
                ue_urt = 3,
                ue_rpl_ns = 'cel-rpl',
                ue_ddq = 1,
                ue_fpf = '//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:143-1759968-0841650:6QKAQWH3ARHCQFMBSRA9$uedata=s:',
                ue_sbuimp = 1,

                ue_swi = 1;

            function ue_viz() {
                (function(c, e, a) {
                    function k(b) {
                        if (c.ue.viz.length < p && !l) {
                            var a = b.type;
                            b = b.originalEvent;
                            /^focus./.test(a) && b && (b.toElement || b.fromElement || b.relatedTarget) || (a = e[m] || ("blur" == a || "focusout" == a ? "hidden" : "visible"), c.ue.viz.push(a + ":" + (+new Date - c.ue.t0)), "visible" == a && (ue.isl && uex("at"), l = 1))
                        }
                    }
                    for (var l = 0, f, g, m, n = ["", "webkit", "o", "ms", "moz"], d = 0, p = 20, h = 0; h < n.length && !d; h++)
                        if (a = n[h], f = (a ? a + "H" : "h") + "idden", d = "boolean" == typeof e[f]) g = a + "visibilitychange", m = (a ? a + "V" : "v") + "isibilityState";
                    k({});
                    d && e.addEventListener(g, k, 0);
                    c.ue && d && (c.ue.pageViz = {
                        event: g,
                        propHid: f
                    })
                })(ue_csm, document, window)
            };

            (function(d, k, J) {
                function C(a) {
                    return a && a.replace && a.replace(/^\s+|\s+$/g, "")
                }

                function q(a) {
                    return "undefined" === typeof a
                }

                function D(a, b) {
                    for (var c in b) b[r](c) && (a[c] = b[c])
                }

                function E(a) {}

                function K(p, b) {}

                function L() {
                    var a = {};
                    return function(b) {
                        b && (a[b] = 1);
                        b = [];
                        for (var c in a) a[r](c) && b.push(c);
                        return b
                    }
                }

                function u(d, b, c, e) {
                    e = e || +new z;
                    var f, k;
                    if (b || q(c)) {
                        if (d)
                            for (k in f = b ? h("t", b) || h("t", b, {}) : a.t, f[d] = e, c) c[r](k) && h(k, b, c[k]);
                        return e
                    }
                }

                function h(d, b, c) {
                    var e = b && b != a.id ? a.sc[b] : a;
                    e || (e = a.sc[b] = {});
                    "id" === d && c && (N = 1);
                    return e[d] = c || e[d]
                }

                function O(d, b, c, e, f) {
                    c = "on" + c;
                    var h = b[c];
                    "function" === typeof h ? d && (a.h[d] = h) : h = function() {};
                    b[c] = function(a) {
                        f ? (e(a), h(a)) : (h(a), e(a))
                    };
                    b[c] && (b[c].isUeh = 1)
                }

                function P(p, b, c, e) {
                    function w(b,
                        c) {
                        var d = [b],
                            g = 0,
                            e = {},
                            f, k;
                        c ? (d.push("m=1"), e[c] = 1) : e = a.sc;
                        for (k in e)
                            if (e[r](k)) {
                                var l = h("wb", k),
                                    m = h("t", k) || {},
                                    w = h("t0", k) || a.t0,
                                    n;
                                if (c || 2 == l) {
                                    l = l ? g++ : "";
                                    d.push("sc" + l + "=" + k);
                                    for (n in m) 3 >= n.length && !q(m[n]) && null !== m[n] && d.push(n + l + "=" + (m[n] - w));
                                    d.push("t" + l + "=" + m[p]);
                                    if (h("ctb", k) || h("wb", k)) f = 1
                                }
                            }!F && f && d.push("ctb=1");
                        return d.join("&")
                    }

                    function M(b, c, g, e) {
                        if (b) {
                            var f = d.ue_err;
                            d.ue_url && !e && b && 0 < b.length && (e = new Image, a.iel.push(e), e.src = b, a.count && a.count("postbackImageSize", b.length));
                            if (t) {
                                var h =
                                    k.encodeURIComponent;
                                h && b && (e = new Image, b = "" + d.ue_fpf + h(b) + ":" + (+new z - d.ue_t0), a.iel.push(e), e.src = b)
                            } else a.log && (a.log(b, "uedata", {
                                n: 1
                            }), a.ielf.push(b));
                            f && !f.ts && f.startTimer();
                            a.b && (f = a.b, a.b = "", M(f, c, g, 1))
                        }
                    }

                    function v(b) {
                        var c = x ? x.type : A,
                            d = c && 2 != c,
                            e = a.bfini;
                        N || (e && 1 < e && (b += "&bfform=1", d || (a.isBFT = e - 1)), 2 == c && (b += "&bfnt=1", a.isBFT = a.isBFT || 1), a.ssw && a.isBFT && (q(a.isNRBF) && (c = a.ssw(a.oid), c.e || q(c.val) || (a.isNRBF = 1 < c.val ? 0 : 1)), q(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)), a.isBFT && !a.isNRBF && (b += "&bft=" +
                            a.isBFT));
                        return b
                    }
                    if (!a.paused && (b || q(c))) {
                        for (var m in c) c[r](m) && h(m, b, c[m]);
                        u("pc", b, c);
                        m = h("id", b) || a.id;
                        var g = a.url + "?" + p + "&v=" + a.v + "&id=" + m,
                            F = h("ctb", b) || h("wb", b),
                            l, s;
                        F && (g += "&ctb=" + F);
                        1 < d.ueinit && (g += "&ic=" + d.ueinit);
                        if (!("ld" != p && "ul" != p || b && b != m)) {
                            if ("ld" == p) {
                                try {
                                    k[G] && k[G].isUeh && (k[G] = null)
                                } catch (E) {}
                                if (k.chrome)
                                    for (s = 0; s < H.length; s++) Q(B, H[s]);
                                (s = J.ue_backdetect) && s.ue_back && s.ue_back.value++;
                                d._uess && (l = d._uess());
                                a.isl = 1
                            }
                            a._bf && (g += "&bf=" + a._bf());
                            d.ue_navtiming && f && (h("ctb", m, "1"),
                                u("tc", A, A, I));
                            y && !R && (f && D(a.t, {
                                na_: f.navigationStart,
                                ul_: f.unloadEventStart,
                                _ul: f.unloadEventEnd,
                                rd_: f.redirectStart,
                                _rd: f.redirectEnd,
                                fe_: f.fetchStart,
                                lk_: f.domainLookupStart,
                                _lk: f.domainLookupEnd,
                                co_: f.connectStart,
                                _co: f.connectEnd,
                                sc_: f.secureConnectionStart,
                                rq_: f.requestStart,
                                rs_: f.responseStart,
                                _rs: f.responseEnd,
                                dl_: f.domLoading,
                                di_: f.domInteractive,
                                de_: f.domContentLoadedEventStart,
                                _de: f.domContentLoadedEventEnd,
                                _dc: f.domComplete,
                                ld_: f.loadEventStart,
                                _ld: f.loadEventEnd,
                                ntd: ("function" !== typeof y.now ||
                                    q(I) ? 0 : new z(I + y.now()) - new z) + a.t0
                            }), x && D(a.t, {
                                ty: x.type + a.t0,
                                rc: x.redirectCount + a.t0
                            }), R = 1);
                            D(a.t, {
                                hob: d.ue_hob,
                                hoe: d.ue_hoe
                            });
                            a.ifr && (g += "&ifr=1")
                        }
                        u(p, b, c, e);
                        c = "ld" == p && b && h("wb", b);
                        var n;
                        c || b && b !== m || Z(b);
                        c || m == a.oid || $((h("t", b) || {}).tc || +h("t0", b), +h("t0", b));
                        (e = d.ue_mbl) && e.cnt && !c && (g += e.cnt());
                        c ? h("wb", b, 2) : "ld" == p && (a.lid = C(m));
                        for (n in a.sc)
                            if (1 == h("wb", n)) break;
                        if (c) {
                            if (a.s) return;
                            g = w(g, null)
                        } else e = w(g, null), e != g && (e = v(e), a.b = e), l && (g += l), g = w(g, b || a.id);
                        g = v(g);
                        if (a.b || c)
                            for (n in a.sc) 2 ==
                                h("wb", n) && delete a.sc[n];
                        l = 0;
                        a._rt && (g += "&rt=" + a._rt());
                        c || (a.s = 0, (l = d.ue_err) && 0 < l.ec && l.pec < l.ec && (l.pec = l.ec, g += "&ec=" + l.ec + "&ecf=" + l.ecf), l = h("ctb", b), h("t", b, {}));
                        a.tag && a.tag().length && (g += "&csmtags=" + a.tag().join("|"), a.tag = L());
                        n = a.viz || [];
                        (e = n.length) && (g += "&viz=" + n.splice(0, e).join("|"));
                        q(d.ue_pty) || (g += "&pty=" + d.ue_pty + "&spty=" + d.ue_spty + "&pti=" + d.ue_pti);
                        a.tabid && (g += "&tid=" + a.tabid);
                        a.aftb && (g += "&aftb=1");
                        !a._ui || b && b != m || (g += a._ui());
                        a.a = g;
                        M(g, p, l, c)
                    }
                }

                function Z(a) {
                    var b = k.ue_csm_markers || {},
                        c;
                    for (c in b) b[r](c) && u(c, a, A, b[c])
                }

                function v(a, b, c) {
                    c = c || k;
                    if (c[S]) c[S](a, b, !1);
                    else if (c[T]) c[T]("on" + a, b)
                }

                function Q(a, b, c) {
                    c = c || k;
                    if (c[U]) c[U](a, b, !1);
                    else if (c[V]) c[V]("on" + a, b)
                }

                function W() {
                    function a() {}

                    function b(a) {
                        return function() {
                            c[a] || (c[a] = 1, P(a))
                        }
                    }
                    var c = {},
                        e, f;
                    d.onLd = b("ld");
                    d.onLdEnd = b("ld");
                    d.onUl = b("ul");
                    e = {
                        stop: b("os")
                    };
                    k.chrome ? (v(B, a), H.push(a)) : e[B] = d.onUl;
                    for (f in e) e[r](f) && O(0, k, f, e[f]);
                    d.ue_viz && ue_viz();
                    v("load", d.onLd);
                    u("ue")
                }

                function $(f, b) {
                    var c = d.ue_mbl;
                    c && c.ajax && c.ajax(f, b);
                    a.tag("ajax-transition")
                }
                d.ueinit = (d.ueinit || 0) + 1;
                var a = d.ue = d.ue || {};
                a.t0 = k.aPageStart || d.ue_t0;
                a.id = d.ue_id;
                a.url = d.ue_url;
                a.rid = d.ue_id;
                a.a = "";
                a.b = "";
                a.h = {};
                a.s = 1;
                a.t = {};
                a.sc = {};
                a.iel = [];
                a.ielf = [];
                a.viz = [];
                a.v = "0.205384.0";
                a.paused = !1;
                var r = "hasOwnProperty",
                    B = "beforeunload",
                    G = "on" + B,
                    S = "addEventListener",
                    U = "removeEventListener",
                    T = "attachEvent",
                    V = "detachEvent",
                    z = k.Date,
                    y = k.performance || k.webkitPerformance,
                    f = (y || {}).timing,
                    x = (y || {}).navigation,
                    I = (f || {}).navigationStart,
                    t = d.ue_fpf,
                    N = 0,
                    R = 0,
                    H = [],
                    A;
                a.oid = C(a.id);
                a.lid = C(a.id);
                a._t0 = a.t0;
                a.tag = L();
                a.ifr = k.top !== k.self || k.frameElement ? 1 : 0;
                a.attach = v;
                a.detach = Q;
                if ("000-0000000-8675309" === d.ue_sid) {
                    var X = E("cdn-rid"),
                        Y = E("session-id");
                    X && Y && K(X, Y)
                }
                d.uei = W;
                d.ueh = O;
                d.ues = h;
                d.uet = u;
                d.uex = P;
                a.reset = K;
                a.pause = function(d) {};
                W()
            })(ue_csm, window, ue_csm.document);


            ue.stub(ue, "event");
            ue.stub(ue, "onSushiUnload");
            ue.stub(ue, "onSushiFlush");

            ue.stub(ue, "log");
            ue.stub(ue, "onunload");
            ue.stub(ue, "onflush");
            (function(c) {
                var a = c.ue;
                a.cv = {};
                a.cv.scopes = {};
                a.count = function(d, c, b) {
                    var e = {},
                        f = a.cv,
                        g = b && 0 === b.c;
                    e.counter = d;
                    e.value = c;
                    e.t = a.d();
                    b && b.scope && (f = a.cv.scopes[b.scope] = a.cv.scopes[b.scope] || {}, e.scope = b.scope);
                    if (void 0 === c) return f[d];
                    f[d] = c;
                    d = 0;
                    b && b.bf && (d = 1);
                    ue_csm.ue_sclog || !a.clog || 0 !== d || g ? a.log && a.log(e, "csmcount", {
                        c: 1,
                        bf: d
                    }) : a.clog(e, "csmcount", {
                        bf: d
                    })
                };
                a.count("baselineCounter2", 1);
                a && a.event && (a.event({
                        requestId: c.ue_id || "rid",
                        server: c.ue_sn || "sn",
                        obfuscatedMarketplaceId: c.ue_mid || "mid"
                    },
                    "csm", "csm.CSMBaselineEvent.4"), a.count("nexusBaselineCounter", 1, {
                    bf: 1
                }))
            })(ue_csm);



            var ue_hoe = +new Date();
        }
        window.ueinit = window.ue_ihb;
    