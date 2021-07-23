
            P.when('loading-indicator-counter')
                .execute(function(loadingIndicatorCounter) {
                    loadingIndicatorCounter();
                });
            P.when('primary-scroll-depth')
                .execute(function(primaryScrollDepth) {
                    primaryScrollDepth();
                });
            P.when('secondary-scroll-depth')
                .execute(function(secondaryScrollDepth) {
                    secondaryScrollDepth();
                });
            P.when('jQuery', 'card-loader', 'merch-data-store')
                .execute(function($, cardLoader, merchDataStore) {
                    cardLoader(merchDataStore);
                });
            P.declare('related-request-id', "6QKAQWH3ARHCQFMBSRA9");
        