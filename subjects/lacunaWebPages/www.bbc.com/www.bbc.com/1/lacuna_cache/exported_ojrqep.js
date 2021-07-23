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
        window.__reverb.__reverbLoadedPromise.then(function(e) {
            return e.initialise().then(function() {
                return e.viewEvent()
            })
        }, function() {lacuna_lazy_load("lacuna_cache/exported_ojrqep.js[214:289]", functionData => eval(functionData))});
    