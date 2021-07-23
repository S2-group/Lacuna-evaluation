
        (function() {
            function loadScript(src, cb) {
                var s, r, t;
                r = false;
                s = document.createElement("script");
                s.type = "text/javascript";
                s.src = src;
                s.onload = s.onreadystatechange = function() {
                    if (!r && (!this.readyState || this.readyState == "complete")) {
                        r = true;
                        cb();
                    }
                };
                t = document.getElementsByTagName("body")[0];
                t.appendChild(s);
            }

            function mountCode() {
                if (typeof window !== "undefined" && window.document && window.document.createElement) {
                    var appElement = React.createElement(window.PageBundle.default, {
                        modelData: window.modelData
                    });
                    ReactDOM.hydrate(appElement, window.document.getElementById("app-element-mountpoint"));
                }
            }
            window.addEventListener('load', function() {
                loadScript("https://www.paypalobjects.com/eboxapps/js/3f/df457462fcd5f1b863915f36fae93b64b9b332.js", mountCode);
            });
        })();
    