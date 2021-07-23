/*global dijondemo */
/**
 * @author Camille Reynders
 * Date: 03/02/12
 * Time: 14:39
 */
(function( ns ) {
	'use strict';

	ns.models.TodosModel = function() {
		var _list = [];
		return {
			system: undefined, //inject,
			getTodo: function( id ) {},
			getIndex: function( id ) {},
			notifyOfListUpdate: function() {},
			setList: function( list ) {
				_list = list || [];
				this.system.notify( 'TodosModel:todosListUpdated', list );
			},
			getList: function() {
				return _list;
			},
			add: function( vo ) {},
			toggleDone: function( id ) {},
			setTitle: function( id, title ) {},
			remove: function( id ) {},
			setDoneForAll: function( completed ) {},
			removeAllDone: function() {},
			getNumTotal: function() {
				return _list.length;
			},
			getNumActive: function() {
				var count = 0,
					i;
				for ( i in _list ) {
					if ( !_list[ i ].completed ) {
						count++;
					}
				}
				return count;
			}
		};
	};

}( dijondemo ));
