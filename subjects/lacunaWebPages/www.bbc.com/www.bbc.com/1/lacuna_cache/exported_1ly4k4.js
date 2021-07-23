// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        // Promise polyfill from https://github.com/bramstein/promis
        (function() {
            'use strict';
            var f, g = [];

            function l(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[172:251]", functionData => eval(functionData))}

            function m() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[278:345]", functionData => eval(functionData))}
            f = function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[373:418]", functionData => eval(functionData))};

            function n(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[447:840]", functionData => eval(functionData))}
            var p = 2;

            function t(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[891:996]", functionData => eval(functionData))}

            function u(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[1024:1126]", functionData => eval(functionData))}

            function q(a, b) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[1157:2037]", functionData => eval(functionData))}

            function r(a, b) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[2068:2269]", functionData => eval(functionData))}

            function v(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[2297:3001]", functionData => eval(functionData))}
            n.prototype.g = function(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[3042:3098]", functionData => eval(functionData))};
            n.prototype.c = function(a, b) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[3143:3322]", functionData => eval(functionData))};

            function w(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[3351:3867]", functionData => eval(functionData))}

            function x(a) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[3895:4049]", functionData => eval(functionData))};
            window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
        }());


        // Polyfill Event constructor for IE ref: https://jira.dev.bbc.co.uk/browse/ORBITEN-919
        // see: https://stackoverflow.com/questions/26596123
        (function() {
            if (typeof window.CustomEvent === "function") {
                return false;
            }

            function CustomEvent(event, params) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[4653:5022]", functionData => eval(functionData))}
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
                value: function assign(target, varArgs) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[6106:7095]", functionData => eval(functionData))},
                writable: true,
                configurable: true
            });
        }

        if (typeof window.CustomEvent !== 'function') {

            function CustomEvent(event, params) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[7296:7660]", functionData => eval(functionData))}

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

            function getMetaValue(propertyName) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[8035:8435]", functionData => eval(functionData))}

            function generateCountername() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[8480:8716]", functionData => eval(functionData))}

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

            function updatePageData(newData) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[9505:9573]", functionData => eval(functionData))}

            document.addEventListener('bbc-page-reset', function(event) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[9647:9863]", functionData => eval(functionData))});

            window.bbcpage = {
                loadModule: function(deps) {
                    return new Promise(function(resolve, reject) {
                        window.require(deps, function() {
                                resolve.apply(this, arguments);
                            },
                            function(error) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[10207:10285]", functionData => eval(functionData))});
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
                                    setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[10888:10977]", functionData => eval(functionData))}, timeout);
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
                getSite: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[12424:12498]", functionData => eval(functionData))},
                getSection: function() {
                    return Promise.resolve(page.section);
                },
                getContentType: function() {
                    return Promise.resolve(page.contentType);
                },
                getContentId: function() {
                    return Promise.resolve(page.contentId);
                },
                getEdition: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[12905:13665]", functionData => eval(functionData))},
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

            function checkStatus(response) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[14946:15256]", functionData => eval(functionData))}

            function parseJSON(response) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[15299:15354]", functionData => eval(functionData))}

            var supportsCors = function() {
                return typeof XMLHttpRequest !== 'undefined' &&
                    'withCredentials' in new XMLHttpRequest();
            };

            var getUserInfoFallback = function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[15592:16759]", functionData => eval(functionData))};

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
                            .then(function(userInfo) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[17704:17829]", functionData => eval(functionData))});
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
                    return getUserInfo().then(function(userInfo) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[18592:18677]", functionData => eval(functionData))});
                },

                isUKCombined: function() {
                    return getUserInfo().then(function(userInfo) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[18808:19101]", functionData => eval(functionData))})
                },

                canSeeAdverts: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[19165:19560]", functionData => eval(functionData))},

                isSignedIn: function() {
                    return window.bbcpage.loadModule(['idcta-v2/idcta-1'])
                        .then(function(idcta) {
                            return (idcta && idcta.getCookieInstance().hasCookie());
                        });
                },
                allowsPerformanceCookies: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[19912:20190]", functionData => eval(functionData))},
                allowsFunctionalCookies: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[20244:20526]", functionData => eval(functionData))},
                getCookieValue: function(cookieName) {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[20581:20814]", functionData => eval(functionData))},
                resetCookiesPreferences: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[20868:21110]", functionData => eval(functionData))},
                hasCookiesEnabled: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.cookiesEnabled();
                        });
                },
                hasSeenCookieBanner: function() {lacuna_lazy_load("lacuna_cache/exported_1ly4k4.js[21444:21683]", functionData => eval(functionData))},
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
    