
            (function(w, t) {
                w.attachEvent ? w.attachEvent('onload', t) : w.addEventListener('load', t, !1)
            })(window, function() {
                setTimeout(function() {
                    document.getElementById('apaypx').innerHTML = '<iframe id=\'apaypxframe\' src=\'https://coin.amazonpay.com/rb?a2=010182f33f0226467ebd6db7964de128b05f4adcd1ab50e6aa7bd9c1c1b3a2235a9b&d=www.amazon.com\' frameborder=0 width=0 height=0>'
                }, 300)
            });
        