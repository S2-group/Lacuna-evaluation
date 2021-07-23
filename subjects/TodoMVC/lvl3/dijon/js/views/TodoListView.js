/*global dijondemo, $, Handlebars */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 13:39
 */
(function( ns ) {
	'use strict';

	ns.views.TodoListView = function() {
		var _template = Handlebars.compile( $('#todo-template').html() ),
			$toggleAll = $('.toggle-all'),
			$todoList = $('.todo-list'),
			$main = $('.main'),
			$count = $('.todo-count');
		return {
			system: undefined, //inject
			enterKey: undefined,
			escapeKey: undefined,
			todosModel: undefined, //inject
			setup: function() {
				var self = this;
				$todoList.on( 'change', '.toggle', null);
				$todoList.on( 'dblclick', 'label', null );
				$todoList.on( 'keydown', '.edit', null);
				$todoList.on( 'blur', '.edit', null);
				$todoList.on( 'click', '.destroy', null);
				$toggleAll.on( 'change', null);
			},
			render: function() {
				var todoList = this.todosModel.getList();
				$todoList.html( _template( todoList ) );
				$main.toggle( !!todoList.length );
				$toggleAll.prop( 'checked', !this.todosModel.getNumActive() );
			}
		};
	};

}( dijondemo ));
