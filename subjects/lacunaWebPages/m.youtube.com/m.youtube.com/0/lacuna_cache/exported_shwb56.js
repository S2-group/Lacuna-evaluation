
        if (!window.loadInitialResponse) {
            const appContents = document.querySelector('ytm-browse');
            if (appContents) {
                appContents.style.display = 'none';
            }
            var msg = ytcfg.msgs['NOTIFICATION_ERROR_MESSAGE'];
            if (!navigator.onLine) {
                msg = ytcfg.msgs['OFFLINE_CHECK_CONNECTION'];
            }
            var err = document.createElement('div');
            err.className = 'content-error';
            err.appendChild(document.createTextNode(msg));
            document.body.appendChild(err);
        }
        ytInitialPlayerConfig = null;
        ytInitialPlayerResponse = null;
        history.scrollRestoration = 'manual';
        initialData = JSON.parse(document.getElementById('initial-data').firstChild.data);
        loadInitialResponse(window.location.href, {
            page: "browse",
            response: initialData,
            player: ytInitialPlayerConfig,
            playerResponse: ytInitialPlayerResponse
        });
        history.scrollRestoration = 'auto';
    