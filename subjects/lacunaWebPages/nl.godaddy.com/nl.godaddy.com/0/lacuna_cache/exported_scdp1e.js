
            window.ux = window.ux || {};
            window.ux.eldorado = window.ux.eldorado || {};

            (function trfqConfig() {
                var w = window;
                var page = w.ux.eldorado.page || {};
                w._gaDataLayer = w._gaDataLayer || [];
                w._gaDataLayer = [{
                    'loadSource': 'uxpHeader'
                }].concat(w._gaDataLayer, (w.ux && w.ux.gaconfig) || []);
                w._trfq = w._trfq || [];
            })();
        