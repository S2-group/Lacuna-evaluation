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
/*global Backbone, microtemplate, ENTER_KEY */
var app = app || {};

(function () {
	'use strict';

	var toggleEl = function (el, toggle) {
		el.style.display = toggle ? '' : 'none';
	};

	var matchesSelector = function (node, selector) {lacuna_lazy_load("js/views/app-view.js[237:345]", functionData => eval(functionData))};

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.todoapp',

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: microtemplate(document.querySelector('#stats-template').innerHTML),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress .new-todo': 'createOnEnter',
			'click .clear-completed': 'clearCompleted',
			'click .toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			this.allCheckbox = this.$('.toggle-all').item(0);
			this.input = this.$('.new-todo').item(0);
			this.footer = this.$('.footer').item(0);
			this.main = this.$('.main').item(0);

			this.listenTo(app.todos, 'add', this.addOne);
			this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: true});
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;
			var selector = '[href="#/' + (app.TodoFilter || '') + '"]';

			if (app.todos.length) {
				// TODO
				toggleEl(this.main, true);
				toggleEl(this.footer, true);

				this.footer.innerHTML = this.statsTemplate({
					completed: completed,
					remaining: remaining
				});

				[].forEach.call(this.$('.filters li a'), function (el) {lacuna_lazy_load("js/views/app-view.js[2507:2637]", functionData => eval(functionData))});

			} else {
				toggleEl(this.main, false);
				toggleEl(this.footer, false);
			}

			this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {lacuna_lazy_load("js/views/app-view.js[2912:3037]", functionData => eval(functionData))},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$('.todo-list').item(0).innerHTML = '';
			app.todos.forEach(this.addOne, this);
		},

		filterOne: function (todo) {lacuna_lazy_load("js/views/app-view.js[3244:3277]", functionData => eval(functionData))},

		filterAll: function () {lacuna_lazy_load("js/views/app-view.js[3305:3354]", functionData => eval(functionData))},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {lacuna_lazy_load("js/views/app-view.js[3436:3550]", functionData => eval(functionData))},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {lacuna_lazy_load("js/views/app-view.js[3696:3848]", functionData => eval(functionData))},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {lacuna_lazy_load("js/views/app-view.js[3943:4043]", functionData => eval(functionData))},

		toggleAllComplete: function () {lacuna_lazy_load("js/views/app-view.js[4079:4228]", functionData => eval(functionData))}
	});
})();
