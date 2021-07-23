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
/*global Backbone, microtemplate, ENTER_KEY, ESCAPE_KEY */
var app = app || {};

(function () {
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: microtemplate(document.querySelector('#item-template').innerHTML),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			// Not keypress since it doesn't work with escape.
			'keyup .edit': 'handleKey',
			// Not blur since it doesn't bubble up.
			'focusout .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Todo** and a **TodoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function () {lacuna_lazy_load("js/views/todo-view.js[968:1141]", functionData => eval(functionData))},

		// Re-render the titles of the todo item.
		render: function () {lacuna_lazy_load("js/views/todo-view.js[1210:1463]", functionData => eval(functionData))},

		toggleVisible: function () {lacuna_lazy_load("js/views/todo-view.js[1495:1568]", functionData => eval(functionData))},

		isHidden: function () {lacuna_lazy_load("js/views/todo-view.js[1595:1793]", functionData => eval(functionData))},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {lacuna_lazy_load("js/views/todo-view.js[1877:1906]", functionData => eval(functionData))},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {lacuna_lazy_load("js/views/todo-view.js[2002:2149]", functionData => eval(functionData))},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function (e, discard) {lacuna_lazy_load("js/views/todo-view.js[2244:2490]", functionData => eval(functionData))},

		// If you hit `enter`, we're through editing the item.
		// If you hit `escape`, we're saving it with old value.
		handleKey: function (e) {lacuna_lazy_load("js/views/todo-view.js[2634:2762]", functionData => eval(functionData))},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {lacuna_lazy_load("js/views/todo-view.js[2867:2897]", functionData => eval(functionData))}
	});
})();
