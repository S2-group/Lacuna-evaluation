
        (function(d) {
            var cs = d.getElementById('preload');
            var load = function(href) {
                var l = d.createElement('link');
                l.rel = 'stylesheet';
                l.setAttribute('data-async', '');
                l.href = href;
                if (l.addEventListener) {
                    l.media = 'none';
                    l.addEventListener('load', function onLoad() {
                        l.removeEventListener('load', onLoad);
                        l.removeAttribute('media');
                    });
                }
                cs.parentNode.insertBefore(l, cs);
            };
            var supportsPreload = false;
            try {
                supportsPreload = d.createElement('link').relList.supports('preload');
            } catch (e) {}
            if (!supportsPreload) {
                Array.prototype.forEach.call(d.getElementsByTagName('link'), function(l) {
                    if (l.getAttribute('rel') === 'preload' && l.hasAttribute('data-main-css')) {
                        l.removeAttribute('data-async');
                        load(l.getAttribute('href'));
                    }
                });
            }
        }(document));
    