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
            /*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
            ! function(a) {
                "use strict";
                var b = function(b, c, d) {lacuna_lazy_load("lacuna_cache/exported_3dtpsj.js[192:1519]", functionData => eval(functionData))};
                "undefined" != typeof exports ? exports.loadCSS = b : a.loadCSS = b
            }("undefined" != typeof global ? global : this);

            /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
            ! function(a) {
                if (a.loadCSS) {
                    var b = loadCSS.relpreload = {};
                    if (b.support = function() {
                            try {
                                return a.document.createElement("link").relList.supports("preload")
                            } catch (b) {
                                return !1
                            }
                        }, b.poly = function() {lacuna_lazy_load("lacuna_cache/exported_3dtpsj.js[2215:2581]", functionData => eval(functionData))}, !b.support()) {
                        b.poly();
                        var c = a.setInterval(b.poly, 300);
                        a.addEventListener && a.addEventListener("load", function() {lacuna_lazy_load("lacuna_cache/exported_3dtpsj.js[2777:2861]", functionData => eval(functionData))}), a.attachEvent && a.attachEvent("onload", function() {lacuna_lazy_load("lacuna_cache/exported_3dtpsj.js[2916:2990]", functionData => eval(functionData))})
                    }
                }
            }(this);

            var createScript = function(options) {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = false;
                script.src = options.src;
                script.onerror = function() {lacuna_lazy_load("lacuna_cache/exported_3dtpsj.js[3410:4046]", functionData => eval(functionData))};

                if (typeof options.callback === 'function') {
                    script.addEventListener('load', options.callback);
                }


                head.appendChild(script, head);
            };


            window.BZFD.Util = window.BZFD.Util || {};
            window.BZFD.Util.createScript = createScript;

        }());
    