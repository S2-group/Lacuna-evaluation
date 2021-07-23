
        var initOptimizely = (function(isEnabled) {
            if (!isEnabled) return;
            var logger = window.bbcdotcom.Logger('bbcdotcom:head:optimizely'); /* Allow Optimizely in these paths */
            var allowPaths = ['/', '/wwhp']; /* Only run on optimizely on homepage */
            if (bbcdotcom.utils && allowPaths.indexOf(window.location.pathname) !== -1 && window.bbccookies && bbccookies.readPolicy('necessary')) { /* set correct OptimizelyURL for prod or sandbox */
                var optimizelyURL = "https://cdn.optimizely.com/public/4621041136/s/bbccom_sandbox.js";
                if (window.location.hostname === 'www.bbc.com') {
                    optimizelyURL = "https://cdn.optimizely.com/public/4621041136/s/bbccom_prod.js";
                } /* Set cookie to 1 year */
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    "type": "cookieExpiration",
                    "cookieExpirationDays": 365
                });
                document.write('<script type="text/javascript" src="' + optimizelyURL + '">\x3C/script>');
            }
        })(bbcdotcom.config.isOptimizelyEnabled());
    