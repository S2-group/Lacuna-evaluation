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
/*global qs, qsa, $on, $parent, $delegate */

(function (window) {
	'use strict';

	/**
	     * View that abstracts away the browser's DOM completely.
	     * It has two simple entry points:
	     *
	     *   - bind(eventName, handler)
	     *     Takes a todo application event and registers the handler
	     *   - render(command, parameterObject)
	     *     Renders the given command with the options
	     */
	function View(template) {
		this.template = template;

		this.ENTER_KEY = 13;
		this.ESCAPE_KEY = 27;

		this.$todoList = qs('.todo-list');
		this.$todoItemCounter = qs('.todo-count');
		this.$clearCompleted = qs('.clear-completed');
		this.$main = qs('.main');
		this.$footer = qs('.footer');
		this.$toggleAll = qs('.toggle-all');
		this.$newTodo = qs('.new-todo');
	}

	View.prototype._removeItem = function (id) {lacuna_lazy_load("js/view.js[831:934]", functionData => eval(functionData))};

	View.prototype._clearCompletedButton = function (completedCount, visible) {
		this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
		this.$clearCompleted.style.display = visible ? 'block' : 'none';
	};

	View.prototype._setFilter = function (currentPage) {
		qs('.filters .selected').className = '';
		qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
	};

	View.prototype._elementComplete = function (id, completed) {lacuna_lazy_load("js/view.js[1407:1668]", functionData => eval(functionData))};

	View.prototype._editItem = function (id, title) {lacuna_lazy_load("js/view.js[1720:2011]", functionData => eval(functionData))};

	View.prototype._editItemDone = function (id, title) {lacuna_lazy_load("js/view.js[2067:2383]", functionData => eval(functionData))};

	View.prototype.render = function (viewCmd, parameter) {
		var self = this;
		var viewCommands = {
			showEntries: function () {
				self.$todoList.innerHTML = self.template.show(parameter);
			},
			removeItem: function () {lacuna_lazy_load("js/view.js[2610:2649]", functionData => eval(functionData))},
			updateElementCount: function () {
				self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
			},
			clearCompletedButton: function () {
				self._clearCompletedButton(parameter.completed, parameter.visible);
			},
			contentBlockVisibility: function () {
				self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
			},
			toggleAll: function () {
				self.$toggleAll.checked = parameter.checked;
			},
			setFilter: function () {
				self._setFilter(parameter);
			},
			clearNewTodo: function () {lacuna_lazy_load("js/view.js[3210:3246]", functionData => eval(functionData))},
			elementComplete: function () {lacuna_lazy_load("js/view.js[3280:3348]", functionData => eval(functionData))},
			editItem: function () {lacuna_lazy_load("js/view.js[3375:3432]", functionData => eval(functionData))},
			editItemDone: function () {lacuna_lazy_load("js/view.js[3463:3524]", functionData => eval(functionData))}
		};

		viewCommands[viewCmd]();
	};

	View.prototype._itemId = function (element) {lacuna_lazy_load("js/view.js[3608:3685]", functionData => eval(functionData))};

	View.prototype._bindItemEditDone = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'blur', function () {lacuna_lazy_load("js/view.js[3824:3943]", functionData => eval(functionData))});

		$delegate(self.$todoList, 'li .edit', 'keypress', function (event) {lacuna_lazy_load("js/view.js[4016:4185]", functionData => eval(functionData))});
	};

	View.prototype._bindItemEditCancel = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit', 'keyup', function (event) {lacuna_lazy_load("js/view.js[4337:4484]", functionData => eval(functionData))});
	};

	View.prototype.bind = function (event, handler) {
		var self = this;
		if (event === 'newTodo') {
			$on(self.$newTodo, 'change', function () {lacuna_lazy_load("js/view.js[4635:4675]", functionData => eval(functionData))});

		} else if (event === 'removeCompleted') {
			$on(self.$clearCompleted, 'click', function () {lacuna_lazy_load("js/view.js[4773:4794]", functionData => eval(functionData))});

		} else if (event === 'toggleAll') {
			$on(self.$toggleAll, 'click', function () {lacuna_lazy_load("js/view.js[4881:4927]", functionData => eval(functionData))});

		} else if (event === 'itemEdit') {
			$delegate(self.$todoList, 'li label', 'dblclick', function () {lacuna_lazy_load("js/view.js[5033:5078]", functionData => eval(functionData))});

		} else if (event === 'itemRemove') {
			$delegate(self.$todoList, '.destroy', 'click', function () {lacuna_lazy_load("js/view.js[5183:5228]", functionData => eval(functionData))});

		} else if (event === 'itemToggle') {
			$delegate(self.$todoList, '.toggle', 'click', function () {lacuna_lazy_load("js/view.js[5332:5418]", functionData => eval(functionData))});

		} else if (event === 'itemEditDone') {
			self._bindItemEditDone(handler);

		} else if (event === 'itemEditCancel') {
			self._bindItemEditCancel(handler);
		}
	};

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
}(window));
