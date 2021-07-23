
        /*<![CDATA[*/ /** * ASYNC waits to make any gpt requests until the bottom of the page */
        if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.ads && bbcdotcom.data.ads == 1 && bbcdotcom.config && bbcdotcom.config.isAsync && bbcdotcom.config.isAsync()) {
            (function() {
                bbcdotcomScripts.push({
                    src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'
                });
            })();
        } /*]]>*/
    