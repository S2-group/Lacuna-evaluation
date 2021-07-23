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
'use strict';
/*global m */
var app = app || {};

// View utility
app.watchInput = function (onenter, onescape) {
	return function (e) {lacuna_lazy_load("js/views/main-view.js[135:340]", functionData => eval(functionData))};
};

app.view = (function () {
	var focused = false;

	return function (ctrl) {
		return [
			m('header.header', [
				m('h1', 'todos'), m('input.new-todo[placeholder="What needs to be done?"]', {
					onkeyup: app.watchInput(ctrl.add.bind(ctrl),
						ctrl.clearTitle.bind(ctrl)),
					value: ctrl.title(),
					oninput: m.withAttr('value', ctrl.title),
					config: function (element) {
						if (!focused) {
							element.focus();
							focused = true;
						}
					}
				})
			]),
			m('section.main', {
				style: {
					display: ctrl.list.length ? '' : 'none'
				}
			}, [
				m('input#toggle-all.toggle-all[type=checkbox]', {
					onclick: ctrl.completeAll.bind(ctrl),
					checked: ctrl.allCompleted()
				}),
				m('label', {
					for: 'toggle-all'
				}),
				m('ul.todo-list', [
					ctrl.list.filter(ctrl.isVisible.bind(ctrl)).map(function (task, index) {lacuna_lazy_load("js/views/main-view.js[1210:2352]", functionData => eval(functionData))})
				])
			]), ctrl.list.length === 0 ? '' : app.footer(ctrl)
		];
	}
})();
