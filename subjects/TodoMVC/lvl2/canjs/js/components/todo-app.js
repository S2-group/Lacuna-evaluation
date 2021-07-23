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
			edit: function (todo, el) {},
			cancelEditing: function (todo, el, ev) {},
			// Returns a list of Todos filtered based on the route
			displayList: function () {
				var filter = can.route.attr('filter');
				return this.todos.filter(function (todo) {});
			},
			updateTodo: function (todo, el) {},
			createTodo: function (context, el) {},
			toggleAll: function (scope, el) {},
			clearCompleted: function () {}
		},
		events: {
			// When a new Todo has been created, add it to the todo list
			'{Todo} created': function (Construct, ev, todo) {}
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
