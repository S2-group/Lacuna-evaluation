
            /*<![CDATA[*/
            (function() {
                var wallpaper;
                if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) {
                    if (bbcdotcom.config.isAsync()) {
                        googletag.cmd.push(function() {
                            googletag.display('bbccom_wallpaper');
                        });
                    } else if (typeof googletag !== "undefined" && typeof googletag.display === "function") {
                        googletag.display("wallpaper");
                    }
                    wallpaper = bbcdotcom.adverts.adRegister.getAd('wallpaper');
                }
            }()); /*]]>*/
        