
        (function(c, l, m) {
            function h(a) {
                if (a) try {
                    if (a.id) return "//*[@id='" + a.id + "']";
                    var b, d = 1,
                        e;
                    for (e = a.previousSibling; e; e = e.previousSibling) e.nodeName === a.nodeName && (d += 1);
                    b = d;
                    var c = a.nodeName;
                    1 !== b && (c += "[" + b + "]");
                    a.parentNode && (c = h(a.parentNode) + "/" + c);
                    return c
                } catch (f) {
                    return "DETACHED"
                }
            }

            function f(a) {
                if (a && a.getAttribute) return a.getAttribute(k) ? a.getAttribute(k) : f(a.parentElement)
            }
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
                getFirstAscendingWidget: function(a, b) {
                    c.ue_cel && c.ue_fem ? !0 === g ? b(f(a)) : d.push({
                        element: a,
                        callback: b
                    }) : b()
                },
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
                extractStringValue: function(a) {
                    if ("string" ===
                        typeof a) return a
                }
            }
        })(ue_csm, window, document);
    