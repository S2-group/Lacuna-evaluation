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
		uuid: null,
		pluralize: function( count, word ) {
			return count === 1 ? word : word + 's';
		}
	};

}( dijondemo ));
