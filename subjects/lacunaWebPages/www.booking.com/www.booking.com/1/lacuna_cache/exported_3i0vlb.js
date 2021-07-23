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

        /*eslint no-console: "off"*/
        (function() {
            // Impact mesurement
            window.addEventListener('load', impactRecordLoadTime);

            function impactRecordLoadTime() {
                try {
                    if (performance.timing.loadEventEnd == 0) return setTimeout(impactRecordLoadTime, 1000);
                    var delta = performance.timing.loadEventEnd - performance.timing.connectStart;
                    localStorage.reloadClock = parseInt(localStorage.reloadClock || 0, 10) + delta;
                    localStorage.reloadCount = parseInt(localStorage.reloadCount || 0, 10) + 1;
                } catch (o_O) {}
            }

            function impactHasHotReloadActive() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[729:866]", functionData => eval(functionData))}
            var loader = B.require('component/loader');
            // ------------------------------------------------------------------------
            // Toast Config
            function toast(message) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[1075:2414]", functionData => eval(functionData))}
            var Toast = {
                wsStarted: function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[2479:2547]", functionData => eval(functionData))},
                wsDisconnected: function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[2592:2671]", functionData => eval(functionData))},
                wsSuccess: function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[2711:2780]", functionData => eval(functionData))},
                wsFail: function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[2817:2893]", functionData => eval(functionData))},
                reloadHTML: function(id) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[2936:3016]", functionData => eval(functionData))},
                reloadCSS: function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[3056:3123]", functionData => eval(functionData))},
                reloadJS: function(file, name) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[3172:3263]", functionData => eval(functionData))}
            };
            // ------------------------------------------------------------------------
            // Reload actions
            var Reload = {
                HTML: function reloadHTML(newComponent, attributes) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[3492:4895]", functionData => eval(functionData))},
                CSS: function reloadCSS() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[4939:5907]", functionData => eval(functionData))},
                JS: function reloadJS(file, name) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[5959:7871]", functionData => eval(functionData))}
            };

            function hotReloadCSS(file) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[7928:8253]", functionData => eval(functionData))}

            function reloadRequestHandler(message) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[8306:9074]", functionData => eval(functionData))}
            // ------------------------------------------------------------------------
            // WebSocket Config
            function Watcher(options) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[9233:9567]", functionData => eval(functionData))}
            Watcher.prototype.connect = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[9619:10063]", functionData => eval(functionData))};
            Watcher.prototype.disconnect = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10119:10247]", functionData => eval(functionData))};
            Watcher.prototype.start = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10298:10345]", functionData => eval(functionData))};
            Watcher.prototype.stop = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10395:10485]", functionData => eval(functionData))};
            Watcher.prototype.openHandler = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10542:10675]", functionData => eval(functionData))};
            Watcher.prototype.closeHandler = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10733:10848]", functionData => eval(functionData))};
            Watcher.prototype.errorHandler = function(err) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[10909:11083]", functionData => eval(functionData))};
            Watcher.prototype.messageHandler = reloadRequestHandler;
            // ------------------------------------------------------------------------
            // Helpers
            function parseJSON(data) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[11302:11417]", functionData => eval(functionData))}

            function hotURL(file) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[11453:11589]", functionData => eval(functionData))}
            // ------------------------------------------------------------------------
            // CSS Link Helpers
            function forceLinkReload(linkElement) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[11760:11867]", functionData => eval(functionData))}

            function createLinkStylesheet(url, id) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[11920:12182]", functionData => eval(functionData))}
            // ------------------------------------------------------------------------
            // Hot Reload Config
            window.hotreload = function() {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[12346:12770]", functionData => eval(functionData))};
            var keys = [];
            window.addEventListener(
                'keydown',
                function(e) {lacuna_lazy_load("lacuna_cache/exported_3i0vlb.js[12891:13251]", functionData => eval(functionData))},
                false
            );
            if (/[?&]hotreload/.test(location.search)) {
                window.hotreload();
            }
        }());
    