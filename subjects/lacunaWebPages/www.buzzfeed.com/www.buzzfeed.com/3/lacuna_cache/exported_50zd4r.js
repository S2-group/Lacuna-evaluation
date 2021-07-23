
        (function() {
            /*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
            ! function(a) {
                "use strict";
                var b = null;
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
                        }, b.poly = null, !b.support()) {
                        b.poly();
                        var c = a.setInterval(b.poly, 300);
                        a.addEventListener && a.addEventListener("load", null), a.attachEvent && a.attachEvent("onload", null)
                    }
                }
            }(this);

            var createScript = function(options) {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = false;
                script.src = options.src;
                script.onerror = null;

                if (typeof options.callback === 'function') {
                    script.addEventListener('load', options.callback);
                }


                head.appendChild(script, head);
            };


            window.BZFD.Util = window.BZFD.Util || {};
            window.BZFD.Util.createScript = createScript;

        }());
    