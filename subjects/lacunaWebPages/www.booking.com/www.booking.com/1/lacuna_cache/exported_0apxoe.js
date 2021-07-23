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

        ;
        (function() {
            window.b_early_errors = window.b_early_errors || [];
            window.onerror = function() {lacuna_lazy_load("lacuna_cache/exported_0apxoe.js[138:208]", functionData => eval(functionData))};
        }());
    