
            var footerTimer = setTimeout(function() {
                P.now('merch-data-store').execute(function(merchDataStore) {
                    if (typeof merchDataStore === 'undefined') {
                        P.declare('merch-data-store', {
                            html: "",
                            cardsData: []
                        });
                    }
                });
            }, 10000);

            P.when('merch-data-store').execute(function() {
                clearTimeout(footerTimer);
            });
        