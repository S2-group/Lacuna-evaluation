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
            if (!window.require) {
                throw new Error('idcta: could not find require module');
            }
            if (typeof(map) == 'undefined') {
                var map = {};
            }
            if (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
                document.documentElement.className += ' id-svg';
            }
            var ptrt = new RegExp("[\\?&]ptrt=([^&]*)").exec(document.location.href);
            var ENDPOINT_URL = 'https://idcta.api.bbc.co.uk';
            var ENDPOINT_CONFIG = ('/idcta/config?callback=&ptrt=' + encodeURIComponent((ptrt ? ptrt[1] : document.location.href))).replace(/\&amp;/g, '&');
            var ENDPOINT_TRANSLATIONS = '/idcta/translations?callback=';

            function hasPromise() {
                var P = window.Promise;
                var promiseToString = null;
                if (P) {
                    try {
                        promiseToString = Object.prototype.toString.call(P.resolve());
                    } catch (e) { /*silently ignored*/ }
                }
                return (promiseToString === '[object Promise]' && !P.cast);
            }
            if (hasPromise()) {
                define('idcta/es6-promise', function() {lacuna_lazy_load("lacuna_cache/exported_bdou0x.js[1330:1392]", functionData => eval(functionData))});
                define('idcta-v2/es6-promise', function() {
                    return window.Promise;
                });
            }
            map['idcta-v2'] = 'https://mybbc.files.bbci.co.uk/s/id/account-idcta/1.21.1/modules/idcta-v2';
            map['idcta-v2/config'] = ENDPOINT_URL + ENDPOINT_CONFIG;
            map['idcta-v2/translations'] = ENDPOINT_URL + ENDPOINT_TRANSLATIONS;
            map['idcta'] = 'https://mybbc.files.bbci.co.uk/s/id/account-idcta/1.8.2/modules/idcta';
            map['idcta-v2/idcta-1'] = 'https://mybbc.files.bbci.co.uk/s/id/account-idcta/1.21.1/modules/idcta-v2/dist/idcta-1.min';
            const idctaShim = {
                deps: ['idcta-v2/idcta-1'],
            };
            require({
                shim: {
                    'idcta-v2/statusbar': idctaShim,
                    'idcta-v2/id-config': idctaShim
                },
                map: {
                    '*': {
                        'idcta/idcta-1': 'idcta-v2/idcta-1',
                        'idcta': 'idcta-v2',
                    }
                },
                paths: map
            });
            window.idctaBaseUrl = ENDPOINT_URL;
            define('idcta/config', ['idcta-v2/config'], function(data) {lacuna_lazy_load("lacuna_cache/exported_bdou0x.js[2641:2685]", functionData => eval(functionData))});
            define('idcta/translations', ['idcta-v2/translations'], function(data) {lacuna_lazy_load("lacuna_cache/exported_bdou0x.js[2771:2815]", functionData => eval(functionData))});
        })();
    