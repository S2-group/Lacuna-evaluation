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
/* global can */
(function (namespace) {
	'use strict';

	var ESCAPE_KEY = 27;

	can.Component.extend({
		// Create this component on a tag  like `<todo-app>`.
		tag: 'todo-app',
		scope: {
			// Store the Todo model in the scope
			Todo: namespace.Models.Todo,
			// A list of all Todos retrieved from LocalStorage
			todos: new namespace.Models.Todo.List({}),
			// Edit a Todo
			edit: function (todo, el) {lacuna_lazy_load("js/components/todo-app.js[409:494]", functionData => eval(functionData))},
			cancelEditing: function (todo, el, ev) {lacuna_lazy_load("js/components/todo-app.js[538:651]", functionData => eval(functionData))},
			// Returns a list of Todos filtered based on the route
			displayList: function () {
				var filter = can.route.attr('filter');
				return this.todos.filter(function (todo) {lacuna_lazy_load("js/components/todo-app.js[829:1010]", functionData => eval(functionData))});
			},
			updateTodo: function (todo, el) {lacuna_lazy_load("js/components/todo-app.js[1054:1227]", functionData => eval(functionData))},
			createTodo: function (context, el) {lacuna_lazy_load("js/components/todo-app.js[1267:1504]", functionData => eval(functionData))},
			toggleAll: function (scope, el) {lacuna_lazy_load("js/components/todo-app.js[1541:1674]", functionData => eval(functionData))},
			clearCompleted: function () {lacuna_lazy_load("js/components/todo-app.js[1707:1803]", functionData => eval(functionData))}
		},
		events: {
			// When a new Todo has been created, add it to the todo list
			'{Todo} created': function (Construct, ev, todo) {lacuna_lazy_load("js/components/todo-app.js[1937:1984]", functionData => eval(functionData))}
		},
		helpers: {
			link: function (name, filter) {
				var data = filter ? { filter: filter } : {};
				return can.route.link(name, data, {
					className: can.route.attr('filter') === filter ? 'selected' : ''
				});
			},
			plural: function (singular, num) {
				return num() === 1 ? singular : singular + 's';
			}
		}
	});
})(this);
