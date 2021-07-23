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

var uniqueId = (function () {
	var count = 0;
	return function () {lacuna_lazy_load("js/models/todo.js[116:138]", functionData => eval(functionData))};
}());

// Todo Model
app.Todo = function (data) {lacuna_lazy_load("js/models/todo.js[188:347]", functionData => eval(functionData))};
