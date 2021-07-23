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

        (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A', 'gw-start-preload').execute(function(A) {lacuna_lazy_load("lacuna_cache/exported_srswdl.js[104:421]", functionData => eval(functionData))});
    