
        window.yterr = window.yterr || true;
        window.unhandledErrorMessages = {};

        window.onerror = function(msg, url, line, opt_columnNumber, opt_error) {
            var err;
            if (opt_error) {
                err = opt_error;
            } else {
                err = new Error();
                err.message = msg;
                err.fileName = url;
                err.lineNumber = line;
                if (!isNaN(opt_columnNumber)) {
                    err['columnNumber'] = opt_columnNumber;
                }
            }
            var message = String(err.message);
            if (!err.message || message in window.unhandledErrorMessages) {
                return;
            }
            window.unhandledErrorMessages[message] = true;
            var img = new Image();
            window.emergencyTimeoutImg = img;
            img.onload = img.onerror = function() {
                delete window.emergencyTimeoutImg;
            };
            var values = {
                'client.name': ytcfg.get('INNERTUBE_CONTEXT_CLIENT_NAME'),
                'client.version': ytcfg.get('INNERTUBE_CONTEXT_CLIENT_VERSION'),
                'msg': message,
                'type': 'UnhandledWindow' + err.name,
                'file': err.fileName,
                'line': err.lineNumber,
                'stack': (err.stack || '').substr(0, 500)
            };
            var parts = [ytcfg.get(
                'EMERGENCY_BASE_URL', '/error_204?t=jserror&level=ERROR')];
            for (var key in values) {
                var value = values[key];
                if (value) {
                    parts.push(key + '=' + encodeURIComponent(value));
                }
            }
            img.src = parts.join('&');
        };
    