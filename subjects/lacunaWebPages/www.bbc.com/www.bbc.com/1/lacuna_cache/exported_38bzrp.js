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

        "use strict";
        ! function() {
            window.__reverb = {}, window.__reverb.__reverbLoadedPromise = new Promise(function(e, n) {
                window.__reverb.__resolveReverbLoaded = e, window.__reverb.__rejectReverbLoaded = n
            }), window.__reverb.__reverbTimeout = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_38bzrp.js[321:391]", functionData => eval(functionData))}, 5e3);
            var n = function(r, d) {lacuna_lazy_load("lacuna_cache/exported_38bzrp.js[434:1018]", functionData => eval(functionData))};
            document.addEventListener("bbc-user-event", function(e) {lacuna_lazy_load("lacuna_cache/exported_38bzrp.js[1088:1128]", functionData => eval(functionData))}), document.addEventListener("bbc-user-click", function(e) {lacuna_lazy_load("lacuna_cache/exported_38bzrp.js[1187:1227]", functionData => eval(functionData))}), document.addEventListener("bbc-page-updated", function() {lacuna_lazy_load("lacuna_cache/exported_38bzrp.js[1287:1620]", functionData => eval(functionData))})
        }();
    