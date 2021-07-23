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
'use strict';
/*global m */

var app = app || {};
app.controller = function () {

	// Todo collection
	this.list = app.storage.get();

	// Update with props
	this.list = this.list.map(function (item) {lacuna_lazy_load("js/controllers/todo.js[200:233]", functionData => eval(functionData))});

	// Temp title placeholder
	this.title = m.prop('');

	// Todo list filter
	this.filter = m.prop(m.route.param('filter') || '');

	this.add = function () {lacuna_lazy_load("js/controllers/todo.js[391:547]", functionData => eval(functionData))};

	this.isVisible = function (todo) {lacuna_lazy_load("js/controllers/todo.js[584:746]", functionData => eval(functionData))};

	this.complete = function (todo) {lacuna_lazy_load("js/controllers/todo.js[782:908]", functionData => eval(functionData))};

	this.edit = function (todo) {lacuna_lazy_load("js/controllers/todo.js[940:1003]", functionData => eval(functionData))};

	this.doneEditing = function (todo, index) {lacuna_lazy_load("js/controllers/todo.js[1049:1240]", functionData => eval(functionData))};

	this.cancelEditing = function (todo) {lacuna_lazy_load("js/controllers/todo.js[1281:1342]", functionData => eval(functionData))};

	this.clearTitle = function () {lacuna_lazy_load("js/controllers/todo.js[1376:1398]", functionData => eval(functionData))};

	this.remove = function (key) {lacuna_lazy_load("js/controllers/todo.js[1431:1493]", functionData => eval(functionData))};

	this.clearCompleted = function () {lacuna_lazy_load("js/controllers/todo.js[1531:1689]", functionData => eval(functionData))};

	this.amountCompleted = function () {lacuna_lazy_load("js/controllers/todo.js[1728:1872]", functionData => eval(functionData))};

	this.allCompleted = function () {
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].completed()) {
				return false;
			}
		}
		return true;
	};

	this.completeAll = function () {lacuna_lazy_load("js/controllers/todo.js[2072:2241]", functionData => eval(functionData))};
};
