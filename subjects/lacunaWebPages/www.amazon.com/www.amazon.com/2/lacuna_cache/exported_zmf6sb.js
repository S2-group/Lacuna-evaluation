
            var footerTimer = setTimeout(function() {}, 10000);

            P.when('merch-data-store').execute(function() {
                clearTimeout(footerTimer);
            });
        