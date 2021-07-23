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

        var ue_mbl = ue_csm.ue.exec(function(e, a) {
            function l(f) {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[80:1406]", functionData => eval(functionData))}

            function p(b) {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[1434:1530]", functionData => eval(functionData))}

            function m() {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[1557:1745]", functionData => eval(functionData))}

            function n() {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[1772:1959]", functionData => eval(functionData))}

            function h() {
                if (!b) return "";
                ue_mbl.cnt = null;
                for (var a = b.timing, d = b.transition, a = ["mts", k(a.transitionStart), "mps", k(a.processStart), "mtt", d.type, "mtst", d.subType, "mtlt", d.launchType], d = "", c = 0; c <
                    a.length; c += 2) {
                    var e = a[c],
                        g = a[c + 1];
                    "undefined" !== typeof g && (d += "&" + e + "=" + g)
                }
                return d
            }

            function k(a) {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[2520:2622]", functionData => eval(functionData))}

            function q(a, c) {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[2653:2860]", functionData => eval(functionData))}
            var c = e.ue || {},
                g = e.ue_t0,
                b;
            if (a.P && a.P.when && a.P.register) return a.P.when("CSMPlugin").execute(function(a) {lacuna_lazy_load("lacuna_cache/exported_933hv7.js[3039:3216]", functionData => eval(functionData))}), {
                cnt: h,
                ajax: q
            }
        }, "mobile-timing")(ue_csm, window);
    