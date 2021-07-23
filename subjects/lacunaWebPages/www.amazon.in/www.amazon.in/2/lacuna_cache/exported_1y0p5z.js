
        P.when('loading-indicator-counter')
            .execute(function(loadingIndicatorCounter) {
                loadingIndicatorCounter();
            });
        P.when('primary-scroll-depth')
            .execute(function(primaryScrollDepth) {
                primaryScrollDepth();
            });
        P.when('secondary-scroll-depth')
            .execute(function(secondaryScrollDepth) {});
        P.when('jQuery', 'card-loader', 'merch-data-store')
            .execute(function($, cardLoader, merchDataStore) {});
        P.declare('related-request-id', "VS5H3DHG80YPHS4W1AQD");
    