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
/*global Vue, todoStorage */

(function (exports) {

	'use strict';

	var filters = {
		all: function (todos) {
			return todos;
		},
		active: function (todos) {
			return todos.filter(function (todo) {lacuna_lazy_load("js/app.js[202:236]", functionData => eval(functionData))});
		},
		completed: function (todos) {lacuna_lazy_load("js/app.js[274:354]", functionData => eval(functionData))}
	};

	exports.app = new Vue({

		// the root element that will be compiled
		el: '.todoapp',

		// app initial state
		data: {
			todos: todoStorage.fetch(),
			newTodo: '',
			editedTodo: null,
			visibility: 'all'
		},

		// watch todos change for localStorage persistence
		watch: {
			todos: {
				deep: true,
				handler: todoStorage.save
			}
		},

		// computed properties
		// http://vuejs.org/guide/computed.html
		computed: {
			filteredTodos: function () {
				return filters[this.visibility](this.todos);
			},
			remaining: function () {
				return filters.active(this.todos).length;
			},
			allDone: {
				get: function () {
					return this.remaining === 0;
				},
				set: function (value) {lacuna_lazy_load("js/app.js[1062:1150]", functionData => eval(functionData))}
			}
		},

		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {

			pluralize: function (word, count) {
				return word + (count === 1 ? '' : 's');
			},

			addTodo: function () {lacuna_lazy_load("js/app.js[1381:1629]", functionData => eval(functionData))},

			removeTodo: function (todo) {lacuna_lazy_load("js/app.js[1663:1744]", functionData => eval(functionData))},

			editTodo: function (todo) {lacuna_lazy_load("js/app.js[1776:1849]", functionData => eval(functionData))},

			doneEdit: function (todo) {lacuna_lazy_load("js/app.js[1881:2055]", functionData => eval(functionData))},

			cancelEdit: function (todo) {lacuna_lazy_load("js/app.js[2089:2162]", functionData => eval(functionData))},

			removeCompleted: function () {lacuna_lazy_load("js/app.js[2197:2248]", functionData => eval(functionData))}
		},

		// a custom directive to wait for the DOM to be updated
		// before focusing on the input field.
		// http://vuejs.org/guide/custom-directive.html
		directives: {
			'todo-focus': function (el, binding) {lacuna_lazy_load("js/app.js[2460:2514]", functionData => eval(functionData))}
		}
	});

})(window);
