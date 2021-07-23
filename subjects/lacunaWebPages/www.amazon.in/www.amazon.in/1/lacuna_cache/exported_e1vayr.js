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

        (function(f, b) {
            function g() {
                try {
                    b.PerformanceObserver && "function" === typeof b.PerformanceObserver && (a = new b.PerformanceObserver(function(b) {lacuna_lazy_load("lacuna_cache/exported_e1vayr.js[211:276]", functionData => eval(functionData))}), a.observe(d))
                } catch (h) {
                    k()
                }
            }

            function m() {
                for (var h = d.entryTypes, a = 0; a < h.length; a++) c(b.performance.getEntriesByType(h[a]))
            }

            function c(a) {
                if (a && Array.isArray(a)) {
                    for (var c = 0, e = 0; e < a.length; e++) {
                        var d = l.indexOf(a[e].name);
                        if (-1 !== d) {
                            var g = Math.round(b.performance.timing.navigationStart + a[e].startTime);
                            f.uet(n[d], void 0, void 0, g);
                            c++
                        }
                    }
                    l.length ===
                        c && k()
                }
            }

            function k() {
                a && a.disconnect && "function" === typeof a.disconnect && a.disconnect()
            }
            if ("function" === typeof f.uet && b.performance && "object" === typeof b.performance && b.performance.getEntriesByType && "function" === typeof b.performance.getEntriesByType && b.performance.timing && "object" === typeof b.performance.timing && "number" === typeof b.performance.timing.navigationStart) {
                var d = {
                        entryTypes: ["paint"]
                    },
                    l = ["first-paint", "first-contentful-paint"],
                    n = ["fp", "fcp"],
                    a;
                try {
                    m(), g()
                } catch (p) {
                    f.ueLogError(p, {
                        logLevel: "ERROR",
                        attribution: "performanceMetrics"
                    })
                }
            }
        })(ue_csm, window);
    