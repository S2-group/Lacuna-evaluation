
        const pillar = 'News';
        (function() {
            function convertContentType(contentType) {
                var result = contentType;
                if (typeof contentType === 'string') {
                    result = contentType.toLowerCase().split(' ').join('');
                }
                return result;
            }

            function getQueryParam(key) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                var pairs = vars.map(function(x) {
                    return x.split('=')
                });
                return pairs.filter(function(xs) {
                    return xs.length == 2 && xs[0] == key
                }).map(function(xs) {
                    return xs[1]
                })[0];
            }

            function getAnalyticsEdition() {
                var edition = (guardian.config.page.edition || '').toLowerCase()
                return edition === 'int' ? 'international' : edition;
            }

            function getAnalyticsTitle() {
                var analyticsTitle = (guardian.config.page.webTitle || '');
                return (analyticsTitle === 'Network Front') ? getAnalyticsEdition() + ' network front' : analyticsTitle;
            }

            function getExperienceValue() {
                if (guardian.config.page.dcrCouldRender) {
                    return 'dcrCouldRender';
                } else {
                    return 'none';
                }
            }
            var identityId = null;
            if (guardian.config.user) {
                identityId = guardian.config.user.id;
            }
            var isLoggedIn = (!!identityId).toString();
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-78705427-1', 'auto', 'allEditorialPropertyTracker', {
                'sampleRate': 100,
                'siteSpeedSampleRate': 0.1,
                'userId': identityId
            });
            ga('create', 'UA-33592456-1', 'auto', 'guardianTestPropertyTracker', {
                'sampleRate': 5,
                'siteSpeedSampleRate': 0.1,
                'userId': identityId
            });
            ga('allEditorialPropertyTracker.set', 'forceSSL', true);
            ga('allEditorialPropertyTracker.set', 'title', getAnalyticsTitle());
            ga('allEditorialPropertyTracker.set', 'anonymizeIp', true);
            ga('allEditorialPropertyTracker.set', 'dimension3', 'theguardian.com');
            ga('allEditorialPropertyTracker.set', 'dimension4', guardian.config.page.section);
            ga('allEditorialPropertyTracker.set', 'dimension5', convertContentType(guardian.config.page.contentType));
            ga('allEditorialPropertyTracker.set', 'dimension6', guardian.config.page.commissioningDesks);
            ga('allEditorialPropertyTracker.set', 'dimension7', guardian.config.page.contentId);
            ga('allEditorialPropertyTracker.set', 'dimension8', guardian.config.page.authorIds);
            ga('allEditorialPropertyTracker.set', 'dimension9', guardian.config.page.keywordIds);
            ga('allEditorialPropertyTracker.set', 'dimension10', guardian.config.page.toneIds);
            ga('allEditorialPropertyTracker.set', 'dimension11', guardian.config.page.seriesId);
            ga('allEditorialPropertyTracker.set', 'dimension16', isLoggedIn);
            ga('allEditorialPropertyTracker.set', 'dimension21', getQueryParam('INTCMP'));
            ga('allEditorialPropertyTracker.set', 'dimension22', getQueryParam('CMP_BUNIT'));
            ga('allEditorialPropertyTracker.set', 'dimension23', getQueryParam('CMP_TU'));
            ga('allEditorialPropertyTracker.set', 'dimension26', (!!guardian.config.page.isHosted).toString());
            ga('allEditorialPropertyTracker.set', 'dimension27', navigator.userAgent);
            ga('allEditorialPropertyTracker.set', 'dimension29', window.location.href);
            ga('allEditorialPropertyTracker.set', 'dimension30', getAnalyticsEdition());
            ga('allEditorialPropertyTracker.set', 'dimension43', getExperienceValue());
            ga('allEditorialPropertyTracker.set', 'dimension50', pillar);
            if (document.location.hash === '#fbLogin') {
                ga('allEditorialPropertyTracker.set', 'referrer', null);
                document.location.hash = '';
            }
            ga('guardianTestPropertyTracker.set', 'forceSSL', true);
            ga('guardianTestPropertyTracker.set', 'title', getAnalyticsTitle());
            ga('guardianTestPropertyTracker.set', 'anonymizeIp', true);
            ga('guardianTestPropertyTracker.set', 'dimension3', 'theguardian.com');
            ga('guardianTestPropertyTracker.set', 'dimension4', guardian.config.page.section);
            ga('guardianTestPropertyTracker.set', 'dimension5', convertContentType(guardian.config.page.contentType));
            ga('guardianTestPropertyTracker.set', 'dimension6', guardian.config.page.commissioningDesks);
            ga('guardianTestPropertyTracker.set', 'dimension7', guardian.config.page.contentId);
            ga('guardianTestPropertyTracker.set', 'dimension8', guardian.config.page.authorIds);
            ga('guardianTestPropertyTracker.set', 'dimension9', guardian.config.page.keywordIds);
            ga('guardianTestPropertyTracker.set', 'dimension10', guardian.config.page.toneIds);
            ga('guardianTestPropertyTracker.set', 'dimension11', guardian.config.page.seriesId);
            ga('guardianTestPropertyTracker.set', 'dimension16', isLoggedIn);
            ga('guardianTestPropertyTracker.set', 'dimension21', getQueryParam('INTCMP'));
            ga('guardianTestPropertyTracker.set', 'dimension22', getQueryParam('CMP_BUNIT'));
            ga('guardianTestPropertyTracker.set', 'dimension23', getQueryParam('CMP_TU'));
            ga('guardianTestPropertyTracker.set', 'dimension26', (!!guardian.config.page.isHosted).toString());
            ga('guardianTestPropertyTracker.set', 'dimension27', navigator.userAgent);
            ga('guardianTestPropertyTracker.set', 'dimension29', window.location.href);
            ga('guardianTestPropertyTracker.set', 'dimension30', getAnalyticsEdition());
            ga('guardianTestPropertyTracker.set', 'dimension43', getExperienceValue());
            ga('guardianTestPropertyTracker.set', 'dimension50', pillar);
            if (document.location.hash === '#fbLogin') {
                ga('guardianTestPropertyTracker.set', 'referrer', null);
                document.location.hash = '';
            }
            ga('allEditorialPropertyTracker.send', 'pageview', {
                hitCallback: function() {
                    var image = new Image();
                    image.src = "//phar.gu-web.net/count/pvg.gif";
                }
            });
            try {
                var NG_STORAGE_KEY = 'gu.analytics.referrerVars';
                var referrerVarsData = window.sessionStorage.getItem(NG_STORAGE_KEY);
                var referrerVars = JSON.parse(referrerVarsData);
                if (referrerVars && referrerVars.value) {
                    var d = new Date().getTime();
                    if (d - referrerVars.value.time < 60 * 1000) {
                        ga('allEditorialPropertyTracker.send', 'event', 'Click', 'Internal', referrerVars.value.tag, {
                            nonInteraction: true,
                            dimension12: referrerVars.value.path
                        });
                    }
                    window.sessionStorage.removeItem(NG_STORAGE_KEY);
                }
            } catch (e) {}
            guardian.app && guardian.app.mediator && guardian.app.mediator.emit('modules:ga:ready');
        })();
    