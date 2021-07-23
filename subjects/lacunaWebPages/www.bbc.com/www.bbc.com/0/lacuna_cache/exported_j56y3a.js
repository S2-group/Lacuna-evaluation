
        if (window.SEARCHBOX.suppress === false && window.SEARCHBOX.locale && /^en-?.*?/.test(window.SEARCHBOX.locale)) {
            require.config({
                paths: {
                    "search/searchbox": window.SEARCHBOX.searchboxAppStaticPrefix,
                }
            });

            if (bbcuser && bbcuser.isUKCombined) {
                bbcuser.isUKCombined().then(function(isUK) {
                    if (isUK) {
                        require(['search/searchbox/searchboxDrawer'], function(SearchboxDrawer) {
                            SearchboxDrawer.run(window.SEARCHBOX);
                        });
                    }
                });
            }

        }
    