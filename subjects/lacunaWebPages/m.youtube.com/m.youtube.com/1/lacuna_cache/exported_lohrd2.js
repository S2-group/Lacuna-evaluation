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

        window.yterr = window.yterr || true;
        window.unhandledErrorMessages = {};

        window.onerror = function(msg, url, line, opt_columnNumber, opt_error) {lacuna_lazy_load("lacuna_cache/exported_lohrd2.js[170:1771]", functionData => eval(functionData))};
    