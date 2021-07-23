
        (function(k, d, h) {
            function f(a, c, b) {
                a && a.indexOf && 0 === a.indexOf("http") && 0 !== a.indexOf("https") && l(s, c, a, b)
            }

            function g(a, c, b) {
                a && a.indexOf && (location.href.split("#")[0] != a && null !== a && "undefined" !== typeof a || l(t, c, a, b))
            }

            function l(a, c, b, e) {
                m[b] || (e = u && e ? n(e) : "N/A", d.ueLogError && d.ueLogError({
                    message: a + c + " : " + b,
                    logLevel: v,
                    stack: "N/A"
                }, {
                    attribution: e
                }), m[b] = 1, p++)
            }

            function e(a, c) {
                if (a && c)
                    for (var b = 0; b < a.length; b++) try {
                        c(a[b])
                    } catch (d) {}
            }

            function q() {
                return d.performance && d.performance.getEntriesByType ?
                    d.performance.getEntriesByType("resource") : []
            }

            function n(a) {
                if (a.id) return "//*[@id='" + a.id + "']";
                var c;
                c = 1;
                var b;
                for (b = a.previousSibling; b; b = b.previousSibling) b.nodeName == a.nodeName && (c += 1);
                b = a.nodeName;
                1 != c && (b += "[" + c + "]");
                a.parentNode && (b = n(a.parentNode) + "/" + b);
                return b
            }

            function w() {
                var a = h.images;
                a && a.length && e(a, function(a) {
                    var b = a.getAttribute("src");
                    f(b, "img", a);
                    g(b, "img", a)
                })
            }

            function x() {
                var a = h.scripts;
                a && a.length && e(a, function(a) {
                    var b = a.getAttribute("src");
                    f(b, "script", a);
                    g(b, "script", a)
                })
            }

            function y() {
                var a = h.styleSheets;
                a && a.length && e(a, function(a) {
                    if (a = a.ownerNode) {
                        var b = a.getAttribute("href");
                        f(b, "style", a);
                        g(b, "style", a)
                    }
                })
            }

            function z() {
                if (A) {
                    var a = q();
                    e(a, function(a) {
                        f(a.name, a.initiatorType)
                    })
                }
            }

            function B() {
                e(q(), function(a) {
                    g(a.name, a.initiatorType)
                })
            }

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
    