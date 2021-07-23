
        (function(d) {
            var cs = d.getElementById('preload');
            var load = null;
            var supportsPreload = false;
            try {
                supportsPreload = d.createElement('link').relList.supports('preload');
            } catch (e) {}
            if (!supportsPreload) {
                Array.prototype.forEach.call(d.getElementsByTagName('link'), null);
            }
        }(document));
    