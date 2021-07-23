/*global app, Router */

(function (app, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {});
	});

	router.configure({
		notfound: function () {}
	});

	router.init();

})(app, Router);
