
        (function() {
            var shopperData;
            var idpCookie = window.cms.readCookie('info_idp');

            if (idpCookie && JSON && JSON.parse) {
                try {
                    shopperData = JSON.parse(decodeURIComponent(idpCookie));
                } catch (e) {
                    shopperData = null;
                }
            }

            window.cms = window.cms || {};
            window.cms.shopperData = shopperData || {
                info_shopperId: ''
            };
        })();
    