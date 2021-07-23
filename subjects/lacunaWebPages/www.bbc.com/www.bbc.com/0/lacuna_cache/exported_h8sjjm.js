
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

            function setUpLazyLoading() {
                // offsetHeight is expensive to calculate, only do it once.
                pageLength = Math.abs(document.body.offsetHeight);

                if (pageLength < getViewportHeight() + 300 || pageLength - getCurrentPosition() < PROMO_SHOW_BREAKPOINT) {
                    loadPromo();

                } else {
                    window.onscroll = function() {
                        didScroll = true;
                    };

                    scrollCheckTimer = setInterval(function() {
                        if (didScroll) {
                            hasScrolled();
                            didScroll = false;
                        }
                    }, 250);
                }
            }

            function loadPromo() {
                clearInterval(scrollCheckTimer);

                require(['orb/async/_footerpromo'], function(promo) {
                    promo.init('https://navpromo.api.bbci.co.uk', '');
                });
            }

            function getViewportHeight() {
                return window.innerHeight;
            }

            function getCurrentPosition() {
                return Math.abs(window.scrollY || document.body.scrollTop || document.documentElement.scrollTop);
            }

            function hasScrolled() {
                var currentPosition = getCurrentPosition();
                if (Math.abs(previousPosition - currentPosition) <= delta) {
                    return;
                }
                if (currentPosition > previousPosition) {
                    if ((pageLength - currentPosition) <= PROMO_SHOW_BREAKPOINT) {
                        loadPromo();
                    }
                }
                previousPosition = currentPosition;
            }

        })
    