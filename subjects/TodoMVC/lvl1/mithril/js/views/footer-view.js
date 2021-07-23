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
'use strict';
/*global m */
var app = app || {};

app.footer = function (ctrl) {lacuna_lazy_load("js/views/footer-view.js[79:914]", functionData => eval(functionData))};
