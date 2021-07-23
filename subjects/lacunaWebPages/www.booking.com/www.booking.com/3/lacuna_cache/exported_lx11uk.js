
                    (function() {
                        if (typeof EventTarget !== 'undefined') {
                            if (typeof EventTarget.prototype.dispatchEvent === 'undefined' && typeof EventTarget.prototype.fireEvent === 'function') {
                                EventTarget.prototype.dispatchEvent = EventTarget.prototype.fireEvent;
                            }
                        }
                        if (typeof window.CustomEvent !== 'function') {
                            // Mobile IE has CustomEvent implemented as Object, this fixes it.
                            var CustomEvent = null;
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
                            Element.prototype.closest = null;
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
                