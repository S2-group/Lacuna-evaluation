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

                (function() {
                    var classname = document.getElementsByClassName("print-button");
                    var print = function() {lacuna_lazy_load("lacuna_cache/exported_7wr8qk.js[159:222]", functionData => eval(functionData))};
                    for (var i = 0; i < classname.length; i++) {
                        classname[i].addEventListener('click', print, false);
                    }
                })();
            