
        (function(a, c, d, e) {
            if (!a[c]) {
                var b = a[c] = {};
                b[d] = [];
                b[e] = null
            }
        })(window, 'Scroll', '_q', 'do');
        Scroll.config = {
            detected: document.cookie.indexOf("scroll0=") > -1
        };
    