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

        require(['orb/lib/_$'], function($) {
            $.ready(function() {
                initialiseFooter();
            });

            var scrollCheckTimer;
            var didScroll;
            var previousPosition = 0;
            var delta = 5;
            var PROMO_SHOW_BREAKPOINT = 1500;
            var pageLength = 0;

            function initialiseFooter() {
                // Suppress this feature on browsers we no longer test
                var myNav = navigator.userAgent.toLowerCase();
                var oldIE = (myNav.indexOf('msie') !== -1) && parseInt(myNav.split('msie')[1], 10) <= 10;
                if (!oldIE) {
                    require(['orb/cookies'], function(bbccookies) {
                        var disabledByCookie = (parseInt(bbccookies.get('ckns_nav_promofail')) || 0) >= 3;
                        if (!disabledByCookie) {
                            require(['orb/fig'], function(orbFig) {
                                orbFig.load(function(fig) {
                                    if (fig.geo.isUK()) {
                                        setUpLazyLoading();
                                    }
                                });
                            });
                        }
                    });
                }
            }

            function setUpLazyLoading() {lacuna_lazy_load("lacuna_cache/exported_xg1mlw.js[1349:2075]", functionData => eval(functionData))}

            function loadPromo() {lacuna_lazy_load("lacuna_cache/exported_xg1mlw.js[2110:2336]", functionData => eval(functionData))}

            function getViewportHeight() {lacuna_lazy_load("lacuna_cache/exported_xg1mlw.js[2379:2437]", functionData => eval(functionData))}

            function getCurrentPosition() {lacuna_lazy_load("lacuna_cache/exported_xg1mlw.js[2481:2610]", functionData => eval(functionData))}

            function hasScrolled() {lacuna_lazy_load("lacuna_cache/exported_xg1mlw.js[2647:3115]", functionData => eval(functionData))}

        })
    