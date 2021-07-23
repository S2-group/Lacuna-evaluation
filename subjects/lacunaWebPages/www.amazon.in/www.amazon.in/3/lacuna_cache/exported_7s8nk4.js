
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
    