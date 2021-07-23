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

        (function(a, c, d, e) {
            if (!a[c]) {
                var b = a[c] = {};
                b[d] = [];
                b[e] = function(a) {lacuna_lazy_load("lacuna_cache/exported_sne0yv.js[155:207]", functionData => eval(functionData))}
            }
        })(window, 'Scroll', '_q', 'do');
        Scroll.config = {
            detected: document.cookie.indexOf("scroll0=") > -1
        };
    