
        // Promise polyfill from https://github.com/bramstein/promis
        (function() {
            'use strict';
            var f, g = [];

            function l(a) {}

            function m() {}
            f = function() {};

            function n(a) {}
            var p = 2;

            function t(a) {}

            function u(a) {}

            function q(a, b) {}

            function r(a, b) {}

            function v(a) {}
            n.prototype.g = function(a) {};
            n.prototype.c = function(a, b) {};

            function w(a) {}

            function x(a) {};
            window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
        }());


        // Polyfill Event constructor for IE ref: https://jira.dev.bbc.co.uk/browse/ORBITEN-919
        // see: https://stackoverflow.com/questions/26596123
        (function() {
            if (typeof window.CustomEvent === "function") {
                return false;
            }

            function CustomEvent(event, params) {}
            CustomEvent.prototype = window.Event.prototype;
            window.Event = CustomEvent;
        })();


        //Element.prototype.matches polyfill
        //from https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector;
        }
        //NodeList.forEach Polyfill
        //from https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }

        // Object.assign polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
        if (typeof Object.assign != 'function') {
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, "assign", {
                value: function assign(target, varArgs) {},
                writable: true,
                configurable: true
            });
        }

        if (typeof window.CustomEvent !== 'function') {

            function CustomEvent(event, params) {}

            CustomEvent.prototype = window.Event.prototype;

            window.CustomEvent = CustomEvent;

        }

        (function() {

            var language = 'en';
            language = 'en';

            var modal = false;


            var istatsLabels = {
                name: '' || undefined
            };

            function getMetaValue(propertyName) {}

            function generateCountername() {}

            var additionalPageProperties = {};
            additionalPageProperties['custom_var_1'] = 'international';
            additionalPageProperties['custom_var_9'] = '1';

            var page = {
                name: 'home.page' || istatsLabels.name || generateCountername(),
                destination: 'HOMEPAGE_GNL' || null,
                producer: 'GNL_HOMEPAGE' || null,
                section: '' || null,
                site: '' || istatsLabels.bbc_site || istatsLabels.app_name || istatsLabels.prod_name || null,
                contentId: '' || null,
                contentType: 'Index-home' || null,
                edition: '' || null,
                additionalProperties: additionalPageProperties
            };

            function updatePageData(newData) {}

            document.addEventListener('bbc-page-reset', function(event) {});

            window.bbcpage = {
                loadModule: function(deps) {
                    return new Promise(function(resolve, reject) {
                        window.require(deps, function() {
                                resolve.apply(this, arguments);
                            },
                            function(error) {});
                    })
                },
                loadCSS: function(url, timeout) {
                    return window.bbcpage.loadModule(['orb/lib/_$'])
                        .then(function($) {
                            return new Promise(function(resolve, reject) {
                                var stylesheet = loadCSS(url);
                                $.onloadCSS(stylesheet, function() {
                                    resolve();
                                });
                                if (timeout) {
                                    setTimeout(function() {}, timeout);
                                }
                            });
                        });
                },
                isModal: function() {
                    return modal;
                },
                getLanguage: function() {
                    return new Promise(function(resolve, reject) {
                        resolve(language);
                    });
                },
                trackRegion: function(region, labels) {
                    return window.bbcpage.loadModule(['istats-1'])
                        .then(function(istats) {

                            var trackLabels = {
                                region: region
                            };

                            for (var label in labels) {
                                trackLabels[label] = labels[label];
                            }

                            var linkType = labels.linkType || 'internal';

                            istats.track(linkType, trackLabels);
                        });
                },
                getName: function() {
                    return Promise.resolve(page.name);
                },
                getDestination: function() {
                    return Promise.resolve(page.destination);
                },
                getProducer: function() {
                    return Promise.resolve(page.producer);
                },
                getSite: function() {},
                getSection: function() {
                    return Promise.resolve(page.section);
                },
                getContentType: function() {
                    return Promise.resolve(page.contentType);
                },
                getContentId: function() {
                    return Promise.resolve(page.contentId);
                },
                getEdition: function() {},
                getReferrer: function() {
                    return Promise.resolve(window.orb && window.orb.referrer ? window.orb.referrer : document.referrer);
                },
                getAdditionalProperties: function() {
                    return Promise.resolve(page.additionalProperties);
                }
            };

            var USERINFO_URL = "";
            var USERINFO_PREFIX = "www." || "www.";

            function initUserCache(orbitUser) {
                var availableAttr = [
                    'X-Country',
                    'X-Ip_is_advertise_combined',
                    'X-Ip_is_uk_combined'
                ];
                var userCache = availableAttr.reduce(function(user, curr, i) {
                    if (!orbitUser[curr]) {
                        return user;
                    }
                    var res = Object.assign({}, user);
                    res[curr] = orbitUser[curr];
                    return res;
                }, {});
                if (Object.keys(userCache).length !== availableAttr.length) {
                    userCache._partial = true;
                }
                return userCache;
            }

            var user = initUserCache({});

            function checkStatus(response) {}

            function parseJSON(response) {}

            var supportsCors = function() {
                return typeof XMLHttpRequest !== 'undefined' &&
                    'withCredentials' in new XMLHttpRequest();
            };

            var getUserInfoFallback = function() {};

            var _userInfoRequest;
            var getUserInfo = function() {

                const host = window.location.host.toString().match(/bbc\.com$/) ? 'bbc.com' : 'bbc.co.uk';

                const userInfoUrl = USERINFO_URL || window.location.protocol + "//" + USERINFO_PREFIX + host + '/userinfo';

                if (!user._partial) {
                    return Promise.resolve(user);
                }

                if (!_userInfoRequest) {
                    if (typeof window.fetch === 'undefined' || !supportsCors()) {
                        _userInfoRequest = getUserInfoFallback();
                    } else {
                        _userInfoRequest = window.fetch(userInfoUrl, {
                                credentials: 'same-origin'
                            })
                            .then(checkStatus)
                            .then(parseJSON)
                            .then(function(userInfo) {});
                    }
                }

                return _userInfoRequest;
            };

            window.bbcuser = {
                getHashedId: function() {
                    if (modal) {
                        return undefined;
                    }
                    return window.bbcpage.loadModule(['idcta-v2/idcta-1'])
                        .then(function(idcta) {
                            return idcta.getCookieInstance().getHidFromCookie();
                        });
                },

                getCountry: function() {
                    if (user['X-Country']) {
                        return Promise.resolve(user['X-Country']);
                    }
                    return getUserInfo().then(function(userInfo) {});
                },

                isUKCombined: function() {
                    return getUserInfo().then(function(userInfo) {})
                },

                canSeeAdverts: function() {},

                isSignedIn: function() {
                    return window.bbcpage.loadModule(['idcta-v2/idcta-1'])
                        .then(function(idcta) {
                            return (idcta && idcta.getCookieInstance().hasCookie());
                        });
                },
                allowsPerformanceCookies: function() {},
                allowsFunctionalCookies: function() {},
                getCookieValue: function(cookieName) {},
                resetCookiesPreferences: function() {},
                hasCookiesEnabled: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.cookiesEnabled();
                        });
                },
                hasSeenCookieBanner: function() {},
                logEvent: function(verb, noun, extraLabels) {
                    return window.bbcuser.hasCookiesEnabled()
                        .then(function(allowsCookies) {
                            if (allowsCookies) {
                                return window.bbcpage.loadModule(['istats-1'])
                                    .then(function(istats) {
                                        istats.log(verb, noun, extraLabels);
                                    });
                            } else {
                                throw new Error('User cannot be tracked due to cookies preferences.');
                            }
                        });
                },
            };

        }());
    