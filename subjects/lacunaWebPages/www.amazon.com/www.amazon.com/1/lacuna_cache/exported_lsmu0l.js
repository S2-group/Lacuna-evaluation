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

            var footerTimer = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_lsmu0l.js[53:416]", functionData => eval(functionData))}, 10000);

            P.when('merch-data-store').execute(function() {
                clearTimeout(footerTimer);
            });
        