
        P.when("gwm-js-assets-loaded").execute(function() {
            if (window.uet && window.uex) {
                uet("cf", "interactivity", {
                    wb: 1
                });
                uex("ld", "interactivity", {
                    wb: 1
                });
            }
        });
    