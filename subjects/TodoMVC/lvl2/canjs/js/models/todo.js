/*global can */
(function (namespace) {
	'use strict';

	// Basic Todo entry model
	var Todo = can.Model.LocalStorage.extend({
		storageName: 'todos-canjs'
	}, {
		init: function () {}
	});

	// List for Todos
	Todo.List = Todo.List.extend({
		filter: function (check) {
			var list = [];

			this.each(function (todo) {});

			return list;
		},

		completed: function () {
			return this.filter(function (todo) {});
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
