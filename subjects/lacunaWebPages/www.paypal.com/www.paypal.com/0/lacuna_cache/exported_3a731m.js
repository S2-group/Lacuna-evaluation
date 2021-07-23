
        if (self === top || /paypal.com$/.test(window.parent.location.hostname)) {
            var antiClickjack = document.getElementById('antiClickjack');
            if (antiClickjack) {
                antiClickjack.parentNode.removeChild(antiClickjack);
            }
        } else {
            top.location = self.location;
        }
    