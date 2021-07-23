
        var version = navigator && navigator.userAgent && navigator.userAgent.match(/MSIE (\d+)./);
        if (version && version[1]) {
            version = parseInt(version[1], 10);
            if (version <= 10) {
                location.href = 'https://nl.godaddy.com/upgrade-your-browser';
            }
        }
    