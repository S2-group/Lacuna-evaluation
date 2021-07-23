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

                    (function() {
                        if (typeof EventTarget !== 'undefined') {
                            if (typeof EventTarget.prototype.dispatchEvent === 'undefined' && typeof EventTarget.prototype.fireEvent === 'function') {
                                EventTarget.prototype.dispatchEvent = EventTarget.prototype.fireEvent;
                            }
                        }
                        if (typeof window.CustomEvent !== 'function') {
                            // Mobile IE has CustomEvent implemented as Object, this fixes it.
                            var CustomEvent = function(event, params) {lacuna_lazy_load("lacuna_cache/exported_124tbb.js[648:1819]", functionData => eval(functionData))};
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
                            Element.prototype.closest = function(s) {lacuna_lazy_load("lacuna_cache/exported_124tbb.js[2534:3001]", functionData => eval(functionData))};
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

                        function showChildrenAges() {lacuna_lazy_load("lacuna_cache/exported_124tbb.js[3648:3810]", functionData => eval(functionData))}

                        function hideChildrenAges() {lacuna_lazy_load("lacuna_cache/exported_124tbb.js[3864:4024]", functionData => eval(functionData))}

                        function onGroupChildenChange(e) {lacuna_lazy_load("lacuna_cache/exported_124tbb.js[4083:5409]", functionData => eval(functionData))}
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
                