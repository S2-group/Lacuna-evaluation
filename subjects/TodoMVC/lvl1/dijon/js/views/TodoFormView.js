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
				$newTodo.on( 'keyup', function( e ) {lacuna_lazy_load("js/views/TodoFormView.js[391:690]", functionData => eval(functionData))} );
			},
			render: function() {}
		};
	};

}( dijondemo ));
