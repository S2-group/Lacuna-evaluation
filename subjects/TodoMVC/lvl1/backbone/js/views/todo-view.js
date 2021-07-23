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
/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: _.template($('#item-template').html()),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			'keydown .edit': 'revertOnEscape',
			'blur .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since
		// there's a one-to-one correspondence between a **Todo** and a
		// **TodoView** in this app, we set a direct reference on the model for
		// convenience.
		initialize: function () {lacuna_lazy_load("js/views/todo-view.js[884:1057]", functionData => eval(functionData))},

		// Re-render the titles of the todo item.
		render: function () {lacuna_lazy_load("js/views/todo-view.js[1126:1824]", functionData => eval(functionData))},

		toggleVisible: function () {lacuna_lazy_load("js/views/todo-view.js[1856:1913]", functionData => eval(functionData))},

		isHidden: function () {lacuna_lazy_load("js/views/todo-view.js[1940:2055]", functionData => eval(functionData))},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {lacuna_lazy_load("js/views/todo-view.js[2139:2168]", functionData => eval(functionData))},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {lacuna_lazy_load("js/views/todo-view.js[2264:2433]", functionData => eval(functionData))},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {lacuna_lazy_load("js/views/todo-view.js[2518:3016]", functionData => eval(functionData))},

		// If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {lacuna_lazy_load("js/views/todo-view.js[3106:3166]", functionData => eval(functionData))},

		// If you're pressing `escape` we revert your change by simply leaving
		// the `editing` state.
		revertOnEscape: function (e) {lacuna_lazy_load("js/views/todo-view.js[3299:3485]", functionData => eval(functionData))},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {lacuna_lazy_load("js/views/todo-view.js[3590:3620]", functionData => eval(functionData))}
	});
})(jQuery);
