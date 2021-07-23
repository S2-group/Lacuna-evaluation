
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

            function setUpLazyLoading() {}

            function loadPromo() {}

            function getViewportHeight() {}

            function getCurrentPosition() {}

            function hasScrolled() {}

        })
    