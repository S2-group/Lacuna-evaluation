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

        StackExchange.ready(function() {lacuna_lazy_load("lacuna_cache/exported_yhtgej.js[40:141]", functionData => eval(functionData))});
        StackExchange.scrollPadding.setPaddingTop(50, 10);
    