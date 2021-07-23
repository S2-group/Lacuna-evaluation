
        (function() {
            /*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
            ! function(a) {
                "use strict";
                var b = function(b, c, d) {
                    function e(a) {
                        return h.body ? a() : void setTimeout(function() {
                            e(a)
                        })
                    }

                    function f() {
                        i.addEventListener && i.removeEventListener("load", f), i.media = d || "all"
                    }
                    var g, h = a.document,
                        i = h.createElement("link");
                    if (c) g = c;
                    else {
                        var j = (h.body || h.getElementsByTagName("head")[0]).childNodes;
                        g = j[j.length - 1]
                    }
                    var k = h.styleSheets;
                    i.rel = "stylesheet", i.href = b, i.media = "only x", e(function() {
                        g.parentNode.insertBefore(i, c ? g : g.nextSibling)
                    });
                    var l = function(a) {
                        for (var b = i.href, c = k.length; c--;)
                            if (k[c].href === b) return a();
                        setTimeout(function() {
                            l(a)
                        })
                    };
                    return i.addEventListener && i.addEventListener("load", f), i.onloadcssdefined = l, l(f), i
                };
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
                        }, b.poly = function() {
                            for (var b = a.document.getElementsByTagName("link"), c = 0; c < b.length; c++) {
                                var d = b[c];
                                "preload" === d.rel && "style" === d.getAttribute("as") && (a.loadCSS(d.href, d, d.getAttribute("media")), d.rel = null)
                            }
                        }, !b.support()) {
                        b.poly();
                        var c = a.setInterval(b.poly, 300);
                        a.addEventListener && a.addEventListener("load", function() {
                            b.poly(), a.clearInterval(c)
                        }), a.attachEvent && a.attachEvent("onload", function() {
                            a.clearInterval(c)
                        })
                    }
                }
            }(this);

            var createScript = function(options) {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = false;
                script.src = options.src;
                script.onerror = function() {


                    var chunkName = options.src
                        .split('/')
                        .filter(function(path) {
                            return /\.js$/.test(path);
                        })
                        .map(function(filename) {
                            return filename.split('.')[0];
                        })[0];

                    (new Image()).src = 'https://pixiedust.buzzfeed.com/v1.gif?source=buzz_web&platform=feedpager&type=instrumentation&target=chunk&value=timeout&tags=' + JSON.stringify({
                        chunk_name: chunkName
                    });

                };

                if (typeof options.callback === 'function') {
                    script.addEventListener('load', options.callback);
                }


                head.appendChild(script, head);
            };


            window.BZFD.Util = window.BZFD.Util || {};
            window.BZFD.Util.createScript = createScript;

        }());
    