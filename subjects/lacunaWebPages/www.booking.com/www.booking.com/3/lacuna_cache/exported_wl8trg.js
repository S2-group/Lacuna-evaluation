
        (function() {
            var done = function() {
                document.documentElement.className = document.documentElement.className.replace(/\bcss-is-loading\b/, '');
            };
            var countdown = 0;
            Array.prototype.forEach.call(document.getElementsByTagName('link'), function(link) {
                if (link.hasAttribute('data-async') && (link.rel === 'stylesheet' && link.media === 'none' || link.rel === 'preload' && link.as === 'style')) {
                    countdown++;
                    link.addEventListener('load', null);
                }
            });
            if (countdown === 0) {
                done();
            }
        }());
    