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
/*global app, Router */

(function (app, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {lacuna_lazy_load("js/routes.js[197:234]", functionData => eval(functionData))});
	});

	router.configure({
		notfound: function () {lacuna_lazy_load("js/routes.js[287:349]", functionData => eval(functionData))}
	});

	router.init();

})(app, Router);
