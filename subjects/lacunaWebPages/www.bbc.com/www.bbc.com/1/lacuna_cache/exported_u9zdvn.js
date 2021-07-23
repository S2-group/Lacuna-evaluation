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

        if (window.SEARCHBOX.suppress === false && window.SEARCHBOX.locale && /^en-?.*?/.test(window.SEARCHBOX.locale)) {
            require.config({
                paths: {
                    "search/searchbox": window.SEARCHBOX.searchboxAppStaticPrefix,
                }
            });

            if (bbcuser && bbcuser.isUKCombined) {
                bbcuser.isUKCombined().then(function(isUK) {lacuna_lazy_load("lacuna_cache/exported_u9zdvn.js[405:671]", functionData => eval(functionData))});
            }

        }
    