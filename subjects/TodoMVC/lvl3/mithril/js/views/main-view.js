'use strict';
/*global m */
var app = app || {};

// View utility
app.watchInput = function (onenter, onescape) {
	return null;
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
					ctrl.list.filter(ctrl.isVisible.bind(ctrl)).map(null)
				])
			]), ctrl.list.length === 0 ? '' : app.footer(ctrl)
		];
	}
})();
