
        if (!/(^|;)\s*cws=/.test(document.cookie)) {
            var d = new Date();
            d.setTime(d.getTime() + 60 * 60 * 24 * 365 * 1000);
            var cookieDomain = '.booking.com' || '.booking.com';
            document.cookie = 'cws=true; domain=' + cookieDomain + '; path=/; expires=' + d.toGMTString();
        }
    