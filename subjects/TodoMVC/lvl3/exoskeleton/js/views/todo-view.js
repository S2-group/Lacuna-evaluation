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
		initialize: null,

		// Re-render the titles of the todo item.
		render: null,

		toggleVisible: null,

		isHidden: null,

		// Toggle the `"completed"` state of the model.
		toggleCompleted: null,

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: null,

		// Close the `"editing"` mode, saving changes to the todo.
		close: null,

		// If you hit `enter`, we're through editing the item.
		// If you hit `escape`, we're saving it with old value.
		handleKey: null,

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: null
	});
})();
