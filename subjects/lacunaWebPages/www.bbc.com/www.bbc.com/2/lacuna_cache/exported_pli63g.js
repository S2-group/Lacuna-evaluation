
        /*<![CDATA[*/
        if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.ads && bbcdotcom.data.ads == 1 && bbcdotcom.config && bbcdotcom.config.isGrapeshotEnabled && bbcdotcom.config.isGrapeshotEnabled() && bbcdotcom.config.isWorldService && !bbcdotcom.config.isWorldService()) {
            var gs_channels = "DEFAULT";
            (function() {
                var gsurl = window.location.href.split("?")[0];
                bbcdotcomScripts.push({
                    src: 'https://bbc.gscontxt.net/?url=' + encodeURIComponent(gsurl)
                });
            })();
        } /*]]>*/
    