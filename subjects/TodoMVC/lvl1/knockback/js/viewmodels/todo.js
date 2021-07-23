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
/*global Knockback */
var app = app || {};

(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	// Todo View Model
	// ---------------

	app.TodoViewModel = kb.ViewModel.extend({
		constructor: function (model, options) {lacuna_lazy_load("js/viewmodels/todo.js[241:1003]", functionData => eval(functionData))},

		onDestroy: function (self) {lacuna_lazy_load("js/viewmodels/todo.js[1035:1062]", functionData => eval(functionData))},

		// Start editing if not already editing.
		onCheckEditBegin: function (self) {lacuna_lazy_load("js/viewmodels/todo.js[1144:1292]", functionData => eval(functionData))},

		// Stop editing if already editing.
		onCheckEditEnd: function (self, event) {lacuna_lazy_load("js/viewmodels/todo.js[1374:1781]", functionData => eval(functionData))}
	});
})();
