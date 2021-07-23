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
/*global blocks */

(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var App = blocks.Application();

	var Todo = App.Model({
		title: App.Property(),

		completed: App.Property(),

		editing: blocks.observable(),

		init: function () {
			var collection = this.collection();

			// collection is undefined when a Todo is still not part of the Todos collection
			if (collection) {
				// save to Local Storage on each attribute change
				this.title.on('change', collection.save);
				this.completed.on('change', collection.save);
			}

			this.title.on('change', function (newValue) {lacuna_lazy_load("js/app.js[612:659]", functionData => eval(functionData))});
		},

		toggleComplete: function () {lacuna_lazy_load("js/app.js[698:741]", functionData => eval(functionData))},

		edit: function () {lacuna_lazy_load("js/app.js[764:826]", functionData => eval(functionData))},

		closeEdit: function () {lacuna_lazy_load("js/app.js[854:944]", functionData => eval(functionData))},

		handleAction: function (e) {lacuna_lazy_load("js/app.js[976:1137]", functionData => eval(functionData))}
	});

	var Todos = App.Collection(Todo, {
		remaining: blocks.observable(),

		init: function () {
			this
				// load the data from the Local Storage
				.reset(JSON.parse(localStorage.getItem('todos-jsblocks')) || [])
				// save to Local Storage on each item add or remove
				.on('add remove', this.save)
				.updateRemaining();
		},

		// set all todos as completed
		toggleAll: function () {lacuna_lazy_load("js/app.js[1534:1664]", functionData => eval(functionData))},

		// remove all completed todos
		clearCompleted: function () {lacuna_lazy_load("js/app.js[1729:1806]", functionData => eval(functionData))},

		// saves all data back to the Local Storage
		save: function () {lacuna_lazy_load("js/app.js[1875:2081]", functionData => eval(functionData))},

		// updates the observable
		updateRemaining: function () {
			this.remaining(this.reduce(function (memo, todo) {lacuna_lazy_load("js/app.js[2197:2250]", functionData => eval(functionData))}, 0));
		}
	});

	App.View('Todos', {
		options: {
			// creates a route for the View in order to handle
			// /all, /active, /completed filters
			route: blocks.route('{{filter}}').optional('filter')
		},

		filter: blocks.observable(),

		newTodo: new Todo(),

		// holds all todos for the current view
		// todos are filtered if "Active" or "Completed" is clicked
		todos: new Todos().extend('filter', function (value) {lacuna_lazy_load("js/app.js[2672:2910]", functionData => eval(functionData))}),

		// filter the data when the route have changed
		// the callback is fired when "All", "Active" or "Completed" have been clicked
		routed: function (params) {
			if (params.filter !== 'active' && params.filter !== 'completed') {
				params.filter = 'all';
			}
			this.filter(params.filter);
		},

		addTodo: function (e) {lacuna_lazy_load("js/app.js[3237:3412]", functionData => eval(functionData))}
	});
})();
