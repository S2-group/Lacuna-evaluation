
        (function() {

            window.BZFD.Config.enhanced = (function() {
                if (location.search.match("nojs")) {
                    return false;
                }


                if ('MutationObserver' in window) {


                    if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {


                        return 'content' in document.createElement('template')
                    }
                    return true;

                }
            }());

            if (window.BZFD.Config.enhanced) {
                document.documentElement.classList.remove('core-ux');
                document.documentElement.classList.add('enhanced-ux');
            } else {

                (new Image()).src = 'https://pixiedust.buzzfeed.com/v1.gif?source=buzz_web&platform=feedpager&type=instrumentation&target=ux&value=core';

            }

        }());
    