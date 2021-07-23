/*global Knockback */
var app = app || {};

(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	// Todo View Model
	// ---------------

	app.TodoViewModel = kb.ViewModel.extend({
		constructor: null,

		onDestroy: null,

		// Start editing if not already editing.
		onCheckEditBegin: null,

		// Stop editing if already editing.
		onCheckEditEnd: null
	});
})();
