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
 * Time: 14:20
 */
(function( ns ) {
	'use strict';

	ns.views.FooterView = function() {
		var $count = $('.todo-count'),
			$clearBtn = $('.clear-completed'),
			$footer = $('.todoapp').find('footer');

		return {
			system: undefined, //inject
			pluralizeUtil: undefined, //inject,
			todosModel: undefined, //inject
			setup: function() {
				var self = this;
				$clearBtn.on( 'click', function() {lacuna_lazy_load("js/views/FooterView.js[477:546]", functionData => eval(functionData))});

			},
			render: function() {
				this.renderCounts( this.todosModel.getNumTotal(), this.todosModel.getNumActive() );
			},
			renderCounts: function( numTodosTotal, numTodosActive ) {
				var numTodosCompleted = numTodosTotal - numTodosActive,
					countTitle = '<strong>' + numTodosActive + '</strong> ' + this.pluralizeUtil.pluralize( numTodosActive, 'item' ) + ' left';

				$count.html(countTitle)
				
				// Only show the footer when there are at least one todo.
				$footer.toggle( !!numTodosTotal );

				// Toggle clear button
				$clearBtn.toggle( !!numTodosCompleted );
			}
		};
	};

}( dijondemo ));
