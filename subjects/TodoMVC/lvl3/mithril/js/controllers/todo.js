'use strict';
/*global m */

var app = app || {};
app.controller = function () {

	// Todo collection
	this.list = app.storage.get();

	// Update with props
	this.list = this.list.map(null);

	// Temp title placeholder
	this.title = m.prop('');

	// Todo list filter
	this.filter = m.prop(m.route.param('filter') || '');

	this.add = null;

	this.isVisible = null;

	this.complete = null;

	this.edit = null;

	this.doneEditing = null;

	this.cancelEditing = null;

	this.clearTitle = null;

	this.remove = null;

	this.clearCompleted = null;

	this.amountCompleted = null;

	this.allCompleted = function () {
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].completed()) {
				return false;
			}
		}
		return true;
	};

	this.completeAll = null;
};
