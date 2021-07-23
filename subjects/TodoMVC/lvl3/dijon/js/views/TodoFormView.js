/*global dijondemo, $ */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 13:38
 */
(function( ns ) {
	'use strict';

	ns.views.TodoFormView = function() {
		var $newTodo = $('.new-todo');
		return {
			system: undefined, //inject
			enterKey: undefined, //inject
			uuidUtil: undefined, //inject
			setup: function() {
				var self = this;
				$newTodo.on( 'keyup', null );
			},
			render: function() {}
		};
	};

}( dijondemo ));
