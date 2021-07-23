
        function clearStorage() {
            try {
                if (window && window.sessionStorage) {
                    var storage = window.sessionStorage;
                    for (var i = 0; i < storage.length; i++) {
                        var key = storage.key(i);
                        if (key && key.lastIndexOf('_msatoken_') !== -1) {
                            storage.removeItem(key);
                        }
                    }
                    storage.removeItem('LokiAuthToken');
                }
                if (window && window.localStorage) {
                    window.localStorage.removeItem('AntpUserCacheId');
                }
            } catch (err) {}
        }
        clearStorage();
    