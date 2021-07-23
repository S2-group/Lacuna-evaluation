
            var footerTimer = setTimeout(null, 10000);

            P.when('merch-data-store').execute(function() {
                clearTimeout(footerTimer);
            });
        