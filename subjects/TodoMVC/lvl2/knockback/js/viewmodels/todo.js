/*global Knockback */
var app = app || {};

(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	// Todo View Model
	// ---------------

	app.TodoViewModel = kb.ViewModel.extend({
		constructor: function (model, options) {},

		onDestroy: function (self) {},

		// Start editing if not already editing.
		onCheckEditBegin: function (self) {},

		// Stop editing if already editing.
		onCheckEditEnd: function (self, event) {}
	});
})();
