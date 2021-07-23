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

        (function(c, l, m) {
            function h(a) {lacuna_lazy_load("lacuna_cache/exported_huq3g7.js[56:642]", functionData => eval(functionData))}

            function f(a) {lacuna_lazy_load("lacuna_cache/exported_huq3g7.js[670:792]", functionData => eval(functionData))}
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
                getFirstAscendingWidget: function(a, b) {lacuna_lazy_load("lacuna_cache/exported_huq3g7.js[1452:1645]", functionData => eval(functionData))},
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
                extractStringValue: function(a) {lacuna_lazy_load("lacuna_cache/exported_huq3g7.js[2288:2387]", functionData => eval(functionData))}
            }
        })(ue_csm, window, document);
    