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
 * Time: 14:34
 */
(function( ns ) {
	'use strict';

	ns.utils.Utils = {
		// https://gist.github.com/1308368
		uuid: function( a, b ) {lacuna_lazy_load("js/utils/Utils.js[207:354]", functionData => eval(functionData))},
		pluralize: function( count, word ) {
			return count === 1 ? word : word + 's';
		}
	};

}( dijondemo ));
