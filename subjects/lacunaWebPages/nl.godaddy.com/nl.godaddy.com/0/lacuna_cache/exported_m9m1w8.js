
        (function() {
            function asyncLoad(src, callback) {
                if (window.addEventListener) {
                    window.addEventListener('load', function() {
                        insertScript(src, callback);
                    }, false);
                } else if (window.attachEvent) {
                    window.attachEvent('onload', function() {
                        insertScript(src, callback);
                    });
                } else {
                    setTimeout(function() {
                        insertScript(src, callback);
                    }, 2000);
                }
            }

            function addToWindowLoad(func) {
                if (window.addEventListener) {
                    addLoadEventListener(func);
                } else if (window.attachEvent) {
                    addLoadEvent(func);
                } else {
                    setTimeout(function() {
                        func();
                    }, 2000);
                }
            }

            function addLoadEventListener(func) {
                if (window.addEventListener) {
                    window.addEventListener('load', function() {
                        if (typeof func == 'function') {
                            func();
                        }
                    }, false);
                }
            }

            function addLoadEvent(func) {
                var oldOnLoad = window.onload;

                if (typeof window.onload != 'function') {
                    window.onload = func;
                } else {
                    window.onload = function() {
                        if (oldOnLoad) {
                            oldOnLoad();
                        }
                        func();
                    }
                }
            }

            function insertScript(src, callback, disableSecurity) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = src;
                if (!disableSecurity) {
                    script.setAttribute('crossorigin', 'anonymous');
                }

                if (callback) {
                    script.onload = callback;
                }

                document.body.appendChild(script);
            }

            window.lazy = window.lazy || {};
            window.lazy.asyncLoad = asyncLoad;
            window.lazy.insertScript = insertScript;
            window.lazy.addToWindowLoad = addToWindowLoad;
        })();
    