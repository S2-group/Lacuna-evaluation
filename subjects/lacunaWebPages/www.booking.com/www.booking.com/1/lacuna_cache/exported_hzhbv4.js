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

        (function(d) {
            var cs = d.getElementById('preload');
            var load = function(href) {lacuna_lazy_load("lacuna_cache/exported_hzhbv4.js[112:650]", functionData => eval(functionData))};
            var supportsPreload = false;
            try {
                supportsPreload = d.createElement('link').relList.supports('preload');
            } catch (e) {}
            if (!supportsPreload) {
                Array.prototype.forEach.call(d.getElementsByTagName('link'), function(l) {lacuna_lazy_load("lacuna_cache/exported_hzhbv4.js[950:1200]", functionData => eval(functionData))});
            }
        }(document));
    