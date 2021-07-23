'use strict';
/*global m */

var app = app || {};
app.controller = function () {

	// Todo collection
	this.list = app.storage.get();

	// Update with props
	this.list = this.list.map(function (item) {});

	// Temp title placeholder
	this.title = m.prop('');

	// Todo list filter
	this.filter = m.prop(m.route.param('filter') || '');

	this.add = function () {};

	this.isVisible = function (todo) {};

	this.complete = function (todo) {};

	this.edit = function (todo) {};

	this.doneEditing = function (todo, index) {};

	this.cancelEditing = function (todo) {};

	this.clearTitle = function () {};

	this.remove = function (key) {};

	this.clearCompleted = function () {};

	this.amountCompleted = function () {};

	this.allCompleted = function () {
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].completed()) {
				return false;
			}
		}
		return true;
	};

	this.completeAll = function () {};
};
