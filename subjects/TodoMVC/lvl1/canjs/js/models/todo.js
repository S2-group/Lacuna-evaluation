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
/*global can */
(function (namespace) {
	'use strict';

	// Basic Todo entry model
	var Todo = can.Model.LocalStorage.extend({
		storageName: 'todos-canjs'
	}, {
		init: function () {lacuna_lazy_load("js/models/todo.js[182:377]", functionData => eval(functionData))}
	});

	// List for Todos
	Todo.List = Todo.List.extend({
		filter: function (check) {
			var list = [];

			this.each(function (todo) {lacuna_lazy_load("js/models/todo.js[512:569]", functionData => eval(functionData))});

			return list;
		},

		completed: function () {
			return this.filter(function (todo) {lacuna_lazy_load("js/models/todo.js[660:700]", functionData => eval(functionData))});
		},

		remaining: function () {
			return this.attr('length') - this.completed().length;
		},

		allComplete: function () {
			return this.attr('length') === this.completed().length;
		}
	});

	namespace.Models = namespace.Models || {};
	namespace.Models.Todo = Todo;
})(this);
