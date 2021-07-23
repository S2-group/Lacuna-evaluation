
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

            
            var loader = B.require('component/loader');
            // ------------------------------------------------------------------------
            // Toast Config
            
            var Toast = {
                wsStarted: null,
                wsDisconnected: null,
                wsSuccess: null,
                wsFail: null,
                reloadHTML: null,
                reloadCSS: null,
                reloadJS: null
            };
            // ------------------------------------------------------------------------
            // Reload actions
            var Reload = {
                HTML: null,
                CSS: null,
                JS: null
            };

            

            
            // ------------------------------------------------------------------------
            // WebSocket Config
            
            Watcher.prototype.connect = null;
            Watcher.prototype.disconnect = null;
            Watcher.prototype.start = null;
            Watcher.prototype.stop = null;
            Watcher.prototype.openHandler = null;
            Watcher.prototype.closeHandler = null;
            Watcher.prototype.errorHandler = null;
            Watcher.prototype.messageHandler = reloadRequestHandler;
            // ------------------------------------------------------------------------
            // Helpers
            

            
            // ------------------------------------------------------------------------
            // CSS Link Helpers
            

            
            // ------------------------------------------------------------------------
            // Hot Reload Config
            window.hotreload = null;
            var keys = [];
            window.addEventListener(
                'keydown',
                null,
                false
            );
            if (/[?&]hotreload/.test(location.search)) {
                window.hotreload();
            }
        }());
    