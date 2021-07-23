/*global app, Router */

(function (app, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, null);
	});

	router.configure({
		notfound: null
	});

	router.init();

})(app, Router);
