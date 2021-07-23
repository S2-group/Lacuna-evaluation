
        /*<![CDATA[*/
        if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.stats && bbcdotcom.data.stats == 1 && bbcdotcom.config && bbcdotcom.config.isLotameEnabled && bbcdotcom.config.isLotameEnabled()) {
            (function() {
                var clientId, lotameUrl, lotameAudienceUrl;
                clientId = (bbcdotcom.config.isWorldService && bbcdotcom.config.isWorldService()) ? '10826' : '10816';
                lotameUrl = 'https://tags.crwdcntrl.net/c/' + clientId + '/cc.js?ns=' + clientId;
                lotameAudienceUrl = 'https://ad.crwdcntrl.net/5/c=10815/pe=y/var=ccauds';
                bbcdotcomScripts.push({
                    src: lotameUrl,
                    id: "LOTCC" + clientId
                });
                bbcdotcomScripts.push({
                    src: lotameAudienceUrl
                });
            })();
        } /*]]>*/
    