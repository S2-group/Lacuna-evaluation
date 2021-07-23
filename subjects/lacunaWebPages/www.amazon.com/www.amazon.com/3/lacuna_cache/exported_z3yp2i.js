
            window.addEventListener("load", function() {
                if (window.uet && window.uex) {
                    uet("cf", "tempPageLoaded", {
                        wb: 1
                    });
                    uex("ld", "tempPageLoaded", {
                        wb: 1
                    });
                }
            });
        