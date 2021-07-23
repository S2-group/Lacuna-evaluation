
        (function() {
            var cookies;

            function readCookie(name) {
                if (cookies) {
                    return cookies[name];
                }

                var cookiesSplit = document.cookie.split('; ');
                cookies = {};

                for (var i = 0, len = cookiesSplit.length - 1; i < len; i++) {
                    var keyValue = cookiesSplit[i].split('=');
                    cookies[keyValue[0]] = keyValue[1];
                }

                return cookies[name];
            }

            window.cms = window.cms || {};
            window.cms.readCookie = readCookie;
        })();
    