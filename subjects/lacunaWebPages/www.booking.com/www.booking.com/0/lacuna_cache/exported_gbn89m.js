
                    (function() {
                        if (typeof EventTarget !== 'undefined') {
                            if (typeof EventTarget.prototype.dispatchEvent === 'undefined' && typeof EventTarget.prototype.fireEvent === 'function') {
                                EventTarget.prototype.dispatchEvent = EventTarget.prototype.fireEvent;
                            }
                        }
                        if (typeof window.CustomEvent !== 'function') {
                            // Mobile IE has CustomEvent implemented as Object, this fixes it.
                            var CustomEvent = function(event, params) {
                                // don't delete
                                var evt;
                                params = params || {
                                    bubbles: false,
                                    cancelable: false,
                                    detail: undefined
                                };
                                try {
                                    evt = document.createEvent('CustomEvent');
                                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                                } catch (error) {
                                    // fallback for browsers that don't support createEvent('CustomEvent')
                                    evt = document.createEvent("Event");
                                    for (var param in params) {
                                        evt[param] = params[param];
                                    }
                                    evt.initEvent(event, params.bubbles, params.cancelable);
                                }
                                return evt;
                            };
                            CustomEvent.prototype = window.Event.prototype;
                            window.CustomEvent = CustomEvent;
                        }
                        if (!Element.prototype.matches) {
                            Element.prototype.matches =
                                Element.prototype.matchesSelector ||
                                Element.prototype.msMatchesSelector ||
                                Element.prototype.oMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
                        }
                        if (!Element.prototype.closest) {
                            Element.prototype.closest = function(s) {
                                var el = this;
                                if (!document.documentElement.contains(el)) return null;
                                do {
                                    if (el.matches(s)) return el;
                                    el = el.parentElement || el.parentNode;
                                } while (el !== null && el.nodeType === 1);
                                return null;
                            };
                        }
                    }());
                    (function() {
                        var searchboxEl = document.querySelector('.js-searchbox_redesign');
                        if (!searchboxEl) return;
                        var groupChildren = searchboxEl.querySelector('[name=group_children]');
                        var childAgesEl = searchboxEl.querySelector('.js-child-ages');
                        var childAgesLabelEl = searchboxEl.querySelector('.js-child-ages-label');
                        var ageOptionHTML;
                        var childrenNo;

                        function showChildrenAges() {
                            childAgesEl.style.display = 'block';
                            childAgesLabelEl.style.display = 'block';
                        }

                        function hideChildrenAges() {
                            childAgesEl.style.display = 'none';
                            childAgesLabelEl.style.display = 'none';
                        }

                        function onGroupChildenChange(e) {
                            var newValue = parseInt(e.target.value);
                            if (newValue > childrenNo) {
                                for (var i = newValue; i > childrenNo; i--) {
                                    childAgesEl.insertAdjacentHTML('beforeend', ageOptionHTML);
                                }
                            } else {
                                var els = childAgesEl.querySelectorAll('.js-age-option-container');
                                for (var i = els.length - 1; i >= 0; i--) {
                                    if (i >= newValue) {
                                        var el = els[i];
                                        if (el.parentNode !== null) {
                                            el.parentNode.removeChild(el);
                                        }
                                    }
                                }
                            }
                            if (newValue == 0 && childrenNo > 0) {
                                hideChildrenAges();
                            }
                            if (newValue > 0 && childrenNo == 0) {
                                showChildrenAges();
                            }
                            childrenNo = newValue;
                        }
                        if (groupChildren) {
                            groupChildren.disabled = false;
                            childrenNo = parseInt(groupChildren.value);
                            if (childrenNo > 0) {
                                showChildrenAges();
                            }
                            ageOptionHTML = document.querySelector('#sb-age-option-container').innerHTML;
                            groupChildren.addEventListener('change', onGroupChildenChange);
                            document.addEventListener('cp:sb-group-children-ready', function() {
                                groupChildren.removeEventListener('change', onGroupChildenChange);
                            });
                        }
                    }());
                