
        (function() {
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

            function updateLinks() {
                var data = getUxData();
                var replaceVal = data.urlArgs.length > 0 ? '?pc=urlargs' : 'pc=urlargs&';

                var pcQueries = document.querySelectorAll("a[data-pc-qry]");
                for (var i = 0; i < pcQueries.length; i++) {
                    var value = pcQueries[i].dataset['pcQry'];
                    var newValue = value.replace(replaceVal, data.urlArgs);
                    pcQueries[i].dataset['pcQry'] = newValue;
                }
            }

            function getUxData() {
                var uxel = ux.eldorado || {};
                return uxel.data || {};
            }

            var uxData = getUxData();
            uxData.currency = window.cms.readCookie('currency');
            uxData.shopperId = window.cms.shopperData.info_shopperId || '';
            uxData.urlArgs = getUrlArgs();
            ux.eldorado.ready(updateLinks);
        })();
    