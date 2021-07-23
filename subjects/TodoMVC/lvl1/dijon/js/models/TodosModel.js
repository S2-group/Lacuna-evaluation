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
			getTodo: function( id ) {lacuna_lazy_load("js/models/TodosModel.js[250:297]", functionData => eval(functionData))},
			getIndex: function( id ) {lacuna_lazy_load("js/models/TodosModel.js[327:498]", functionData => eval(functionData))},
			notifyOfListUpdate: function() {lacuna_lazy_load("js/models/TodosModel.js[534:634]", functionData => eval(functionData))},
			setList: function( list ) {
				_list = list || [];
				this.system.notify( 'TodosModel:todosListUpdated', list );
			},
			getList: function() {
				return _list;
			},
			add: function( vo ) {lacuna_lazy_load("js/models/TodosModel.js[832:891]", functionData => eval(functionData))},
			toggleDone: function( id ) {lacuna_lazy_load("js/models/TodosModel.js[923:1033]", functionData => eval(functionData))},
			setTitle: function( id, title ) {lacuna_lazy_load("js/models/TodosModel.js[1070:1145]", functionData => eval(functionData))},
			remove: function( id ) {lacuna_lazy_load("js/models/TodosModel.js[1173:1254]", functionData => eval(functionData))},
			setDoneForAll: function( completed ) {lacuna_lazy_load("js/models/TodosModel.js[1296:1414]", functionData => eval(functionData))},
			removeAllDone: function() {lacuna_lazy_load("js/models/TodosModel.js[1445:1631]", functionData => eval(functionData))},
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
