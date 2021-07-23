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
            function asyncLoad(src, callback) {
                if (window.addEventListener) {
                    window.addEventListener('load', function() {
                        insertScript(src, callback);
                    }, false);
                } else if (window.attachEvent) {
                    window.attachEvent('onload', function() {lacuna_lazy_load("lacuna_cache/exported_bu0b9h.js[376:452]", functionData => eval(functionData))});
                } else {
                    setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_bu0b9h.js[522:598]", functionData => eval(functionData))}, 2000);
                }
            }

            function addToWindowLoad(func) {lacuna_lazy_load("lacuna_cache/exported_bu0b9h.js[683:1031]", functionData => eval(functionData))}

            function addLoadEventListener(func) {lacuna_lazy_load("lacuna_cache/exported_bu0b9h.js[1081:1376]", functionData => eval(functionData))}

            function addLoadEvent(func) {lacuna_lazy_load("lacuna_cache/exported_bu0b9h.js[1418:1835]", functionData => eval(functionData))}

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
    