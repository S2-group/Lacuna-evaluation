
        (function() {
            function asyncLoad(src, callback) {
                if (window.addEventListener) {
                    window.addEventListener('load', function() {
                        insertScript(src, callback);
                    }, false);
                } else if (window.attachEvent) {
                    window.attachEvent('onload', function() {});
                } else {
                    setTimeout(function() {}, 2000);
                }
            }

            function addToWindowLoad(func) {}

            function addLoadEventListener(func) {}

            function addLoadEvent(func) {}

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
    