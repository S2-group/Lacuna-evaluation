
        ue_csm.ue_unrt = 750;
        (function(d, b, t) {
            function u(a, b) {
                var c = a.srcElement || a.target || {},
                    e = {
                        k: w,
                        t: b.t,
                        dt: b.dt,
                        x: a.pageX,
                        y: a.pageY,
                        p: f.getXPath(c),
                        n: c.nodeName
                    };
                a.button && (e.b = a.button);
                c.type && (e.ty = c.type);
                c.href && (e.r = f.extractStringValue(c.href));
                c.id && (e.i = c.id);
                c.className && c.className.split && (e.c = c.className.split(/\s+/));
                g += 1;
                f.getFirstAscendingWidget(c, function(a) {
                    e.wd = a;
                    d.ue.log(e, r)
                })
            }

            function x(a) {
                if (!y(a.srcElement || a.target)) {
                    k += 1;
                    n = !0;
                    var v = h = d.ue.d(),
                        c;
                    p && "function" === typeof p.now && a.timeStamp && (c = p.now() -
                        a.timeStamp, c = parseFloat(c.toFixed(2)));
                    s = b.setTimeout(function() {
                        u(a, {
                            t: v,
                            dt: c
                        })
                    }, z)
                }
            }

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

            function y(a) {
                if (!a) return !1;
                var b = (f.extractStringValue(a.nodeName) || "").toLowerCase(),
                    c = (f.extractStringValue(a.type) || "").toLowerCase(),
                    d = (f.extractStringValue(a.href) || "").toLowerCase();
                a = (f.extractStringValue(a.id) || "").toLowerCase();
                var g = "checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
                if (-1 !== ["select", "textarea", "html"].indexOf(b) || "input" === b && -1 !== g.indexOf(c) || "a" === b && -1 !== d.indexOf("http") || -1 !== ["sitbreaderrightpageturner", "sitbreaderleftpageturner", "sitbreaderpagecontainer"].indexOf(a)) return !0
            }

            function m() {
                n = !1;
                h = 0;
                b.clearTimeout(s)
            }

            function D() {
                b.ue.onSushiUnload(function() {
                    ue.event({
                        violationType: "unresponsive-clicks",
                        violationCount: g,
                        totalScanned: k
                    }, "csm", "csm.ArmoredCXGuardrailsViolation.3")
                });
                b.ue.onunload(function() {
                    ue.count("armored-cxguardrails.unresponsive-clicks.violations",
                        g);
                    ue.count("armored-cxguardrails.unresponsive-clicks.violationRate", g / k * 100 || 0)
                })
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
    