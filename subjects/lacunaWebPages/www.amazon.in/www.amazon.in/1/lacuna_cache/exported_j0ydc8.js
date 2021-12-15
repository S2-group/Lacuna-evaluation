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

        ue_csm.ue.exec(function(e, d, a) {
            function b(a, b) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        return void 0 !== b | 0
                    }
                }
            }

            function h(a, b, c) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        return b === c | 0
                    }
                }
            }

            function g(a, b) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        for (var a = 0; a < b.length; a++)
                            if (void 0 !== b[a]) return 1;
                        return 0
                    }
                }
            }
            var f = e.ue || {},
                c = [b("dall", d.all), b("dcm", d.compatMode), b("xhr", a.XMLHttpRequest), b("qs", d.querySelector), b("ael", d.addEventListener), b("atob", a.atob), g("pjs", [a.callPhantom, a._phantom, a.PhantomEmitter,
                    a.__phantomas
                ]), b("njs", a.Buffer), b("cjs", a.emit), b("rhn", a.spawn), b("sel", a.webdriver), g("chrm", [a.domAutomation, a.domAutomationController]), {
                    name: "plg",
                    getFeatureValue: function() {
                        return (void 0 !== a.navigator.plugins && 0 < a.navigator.plugins.length) | 0
                    }
                }];
            try {
                c.push(h("no", a.navigator.onLine, !1))
            } catch (k) {
                c.push({
                    name: "no",
                    getFeatureValue: function() {lacuna_lazy_load("lacuna_cache/exported_j0ydc8.js[1736:1792]", functionData => eval(functionData))}
                })
            }
            f._bf = e.ue.exec(function() {
                for (var a = "", b = 0; b < c.length; b++) a += c[b].name + "_" + c[b].getFeatureValue() + "-";
                (e.ue || {})._bf = null;
                return a
            }, "ue.bf");
            f._bf.modules = c;
            f._bf.mpm = b
        }, "bf")(ue_csm, document, window);

        ue_csm.ue.exec(function(c, a) {
            function g(a) {
                a.run(function(e) {lacuna_lazy_load("lacuna_cache/exported_j0ydc8.js[2276:2398]", functionData => eval(functionData))})
            }
            if (a.addEventListener)
                for (var d = c.ue || {}, f = [{
                        name: "touch-enabled",
                        run: function(b) {
                            var e = function() {lacuna_lazy_load("lacuna_cache/exported_j0ydc8.js[2635:2828]", functionData => eval(functionData))},
                                c = function() {lacuna_lazy_load("lacuna_cache/exported_j0ydc8.js[2877:2999]", functionData => eval(functionData))},
                                d = function() {lacuna_lazy_load("lacuna_cache/exported_j0ydc8.js[3048:3171]", functionData => eval(functionData))};
                            a.addEventListener("touchstart", c, !0);
                            a.addEventListener("mousemove", d, !0)
                        }
                    }], b = 0; b < f.length; b++) g(f[b])
        }, "csm-features")(ue_csm, window);
    