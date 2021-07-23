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
(function (window) {
	'use strict';

	/**
	 * Takes a model and view and acts as the controller between them
	 *
	 * @constructor
	 * @param {object} model The model instance
	 * @param {object} view The view instance
	 */
	function Controller(model, view) {
		var self = this;
		self.model = model;
		self.view = view;

		self.view.bind('newTodo', function (title) {lacuna_lazy_load("js/controller.js[366:395]", functionData => eval(functionData))});

		self.view.bind('itemEdit', function (item) {lacuna_lazy_load("js/controller.js[444:476]", functionData => eval(functionData))});

		self.view.bind('itemEditDone', function (item) {lacuna_lazy_load("js/controller.js[529:577]", functionData => eval(functionData))});

		self.view.bind('itemEditCancel', function (item) {lacuna_lazy_load("js/controller.js[632:670]", functionData => eval(functionData))});

		self.view.bind('itemRemove', function (item) {lacuna_lazy_load("js/controller.js[721:755]", functionData => eval(functionData))});

		self.view.bind('itemToggle', function (item) {lacuna_lazy_load("js/controller.js[806:860]", functionData => eval(functionData))});

		self.view.bind('removeCompleted', function () {lacuna_lazy_load("js/controller.js[912:949]", functionData => eval(functionData))});

		self.view.bind('toggleAll', function (status) {lacuna_lazy_load("js/controller.js[1001:1043]", functionData => eval(functionData))});
	}

	/**
	 * Loads and initialises the view
	 *
	 * @param {string} '' | 'active' | 'completed'
	 */
	Controller.prototype.setView = function (locationHash) {
		var route = locationHash.split('/')[1];
		var page = route || '';
		this._updateFilterState(page);
	};

	/**
	 * An event to fire on load. Will get all items and display them in the
	 * todo-list
	 */
	Controller.prototype.showAll = function () {
		var self = this;
		self.model.read(function (data) {
			self.view.render('showEntries', data);
		});
	};

	/**
	 * Renders all active tasks
	 */
	Controller.prototype.showActive = function () {lacuna_lazy_load("js/controller.js[1648:1777]", functionData => eval(functionData))};

	/**
	 * Renders all completed tasks
	 */
	Controller.prototype.showCompleted = function () {lacuna_lazy_load("js/controller.js[1872:2000]", functionData => eval(functionData))};

	/**
	 * An event to fire whenever you want to add an item. Simply pass in the event
	 * object and it'll handle the DOM insertion and saving of the new item.
	 */
	Controller.prototype.addItem = function (title) {lacuna_lazy_load("js/controller.js[2216:2392]", functionData => eval(functionData))};

	/*
	 * Triggers the item editing mode.
	 */
	Controller.prototype.editItem = function (id) {lacuna_lazy_load("js/controller.js[2487:2621]", functionData => eval(functionData))};

	/*
	 * Finishes the item editing mode successfully.
	 */
	Controller.prototype.editItemSave = function (id, title) {lacuna_lazy_load("js/controller.js[2740:2979]", functionData => eval(functionData))};

	/*
	 * Cancels the item editing mode.
	 */
	Controller.prototype.editItemCancel = function (id) {lacuna_lazy_load("js/controller.js[3079:3217]", functionData => eval(functionData))};

	/**
	 * By giving it an ID it'll find the DOM element matching that ID,
	 * remove it from the DOM and also remove it from storage.
	 *
	 * @param {number} id The ID of the item to remove from the DOM and
	 * storage
	 */
	Controller.prototype.removeItem = function (id) {lacuna_lazy_load("js/controller.js[3492:3617]", functionData => eval(functionData))};

	/**
	 * Will remove all completed items from the DOM and storage.
	 */
	Controller.prototype.removeCompletedItems = function () {lacuna_lazy_load("js/controller.js[3749:3925]", functionData => eval(functionData))};

	/**
	 * Give it an ID of a model and a checkbox and it will update the item
	 * in storage based on the checkbox's state.
	 *
	 * @param {number} id The ID of the element to complete or uncomplete
	 * @param {object} checkbox The checkbox to check the state of complete
	 *                          or not
	 * @param {boolean|undefined} silent Prevent re-filtering the todo items
	 */
	Controller.prototype.toggleComplete = function (id, completed, silent) {lacuna_lazy_load("js/controller.js[4386:4605]", functionData => eval(functionData))};

	/**
	 * Will toggle ALL checkboxes' on/off state and completeness of models.
	 * Just pass in the event object.
	 */
	Controller.prototype.toggleAll = function (completed) {lacuna_lazy_load("js/controller.js[4781:4984]", functionData => eval(functionData))};

	/**
	 * Updates the pieces of the page which change depending on the remaining
	 * number of todos.
	 */
	Controller.prototype._updateCount = function () {
		var self = this;
		self.model.getCount(function (todos) {
			self.view.render('updateElementCount', todos.active);
			self.view.render('clearCompletedButton', {
				completed: todos.completed,
				visible: todos.completed > 0
			});

			self.view.render('toggleAll', {checked: todos.completed === todos.total});
			self.view.render('contentBlockVisibility', {visible: todos.total > 0});
		});
	};

	/**
	 * Re-filters the todo items, based on the active route.
	 * @param {boolean|undefined} force  forces a re-painting of todo items.
	 */
	Controller.prototype._filter = function (force) {
		var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1);

		// Update the elements on the page, which change with each completed todo
		this._updateCount();

		// If the last active route isn't "All", or we're switching routes, we
		// re-create the todo item elements, calling:
		//   this.show[All|Active|Completed]();
		if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
			this['show' + activeRoute]();
		}

		this._lastActiveRoute = activeRoute;
	};

	/**
	 * Simply updates the filter nav's selected states
	 */
	Controller.prototype._updateFilterState = function (currentPage) {
		// Store a reference to the active route, allowing us to re-filter todo
		// items as they are marked complete or incomplete.
		this._activeRoute = currentPage;

		if (currentPage === '') {
			this._activeRoute = 'All';
		}

		this._filter();

		this.view.render('setFilter', currentPage);
	};

	// Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);
