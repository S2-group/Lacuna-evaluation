
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
    