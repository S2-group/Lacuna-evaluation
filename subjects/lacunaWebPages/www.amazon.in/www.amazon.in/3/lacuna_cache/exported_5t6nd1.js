
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
    