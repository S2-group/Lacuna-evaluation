
        (function() {
            function getDomain() {
                var host = window.location.hostname;
                var hostParts = host.split('.');
                if (hostParts && hostParts.length > 1) {
                    return hostParts[hostParts.length - 2] + '.' + hostParts[hostParts.length - 1];
                }

                return '';
            }

            function getUrlArgs() {
                var urlArgs = '';
                var cleanHref = window.location.href.replace(/#.*$/, '');
                var indexQuery = cleanHref.indexOf('?');

                if (indexQuery !== -1) {
                    urlArgs = cleanHref.substring(indexQuery);
                    if (urlArgs === '?countryview=1') {
                        urlArgs = '';
                    } else if (urlArgs.indexOf('&countryview=1') !== -1) {
                        urlArgs = urlArgs.replace('&countryview=1', '');
                    }
                }

                if (urlArgs.indexOf('isc') === -1) {
                    var iscCookie = window.cms.readCookie('isc');
                    if (iscCookie && iscCookie.length > 0) {
                        if (urlArgs.length > 0) {
                            urlArgs += '&isc=' + iscCookie;
                        } else {
                            urlArgs = '?isc=' + iscCookie;
                        }
                    }
                }

                return urlArgs;
            }

            function getHydraData() {
                window.ux = window.ux || {};
                window.ux.eldorado = window.ux.eldorado || {};
                window.ux.eldorado.page = window.ux.eldorado.page || {};

                return window.ux.eldorado.page;
            }

            var hydraData = getHydraData();
            hydraData.currency = window.cms.readCookie('currency');
            hydraData.shopperId = window.cms.shopperData.info_shopperId || '';
            hydraData.privateLabelId = 1;
            hydraData.domain = getDomain();
            hydraData.urlArgs = getUrlArgs();
            hydraData.currentPage = window.location.pathname.replace('/sc_preview/', '/').replace(/^\/[a-z]{2}\//i, '/').replace(/^\/[a-z]{2}$/i, '/').trim('/');
            hydraData.server = '';

        })();
    