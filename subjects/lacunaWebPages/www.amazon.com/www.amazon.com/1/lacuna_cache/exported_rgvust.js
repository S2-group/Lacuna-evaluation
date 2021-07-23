// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

            P.when('loading-indicator-counter')
                .execute(function(loadingIndicatorCounter) {
                    loadingIndicatorCounter();
                });
            P.when('primary-scroll-depth')
                .execute(function(primaryScrollDepth) {
                    primaryScrollDepth();
                });
            P.when('secondary-scroll-depth')
                .execute(function(secondaryScrollDepth) {lacuna_lazy_load("lacuna_cache/exported_rgvust.js[439:502]", functionData => eval(functionData))});
            P.when('jQuery', 'card-loader', 'merch-data-store')
                .execute(function($, cardLoader, merchDataStore) {
                    cardLoader(merchDataStore);
                });
            P.declare('related-request-id', "6QKAQWH3ARHCQFMBSRA9");
        