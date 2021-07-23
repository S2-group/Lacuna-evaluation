
        // Promise polyfill from https://github.com/bramstein/promis
        (function() {
            'use strict';
            var f, g = [];

            function l(a) {
                g.push(a);
                1 == g.length && f()
            }

            function m() {
                for (; g.length;) g[0](), g.shift()
            }
            f = function() {
                setTimeout(m)
            };

            function n(a) {
                this.a = p;
                this.b = void 0;
                this.f = [];
                var b = this;
                try {
                    a(function(a) {
                        q(b, a)
                    }, function(a) {
                        r(b, a)
                    })
                } catch (c) {
                    r(b, c)
                }
            }
            var p = 2;

            function t(a) {
                return new n(function(b, c) {
                    c(a)
                })
            }

            function u(a) {
                return new n(function(b) {
                    b(a)
                })
            }

            function q(a, b) {
                if (a.a == p) {
                    if (b == a) throw new TypeError;
                    var c = !1;
                    try {
                        var d = b && b.then;
                        if (null != b && "object" == typeof b && "function" == typeof d) {
                            d.call(b, function(b) {
                                c || q(a, b);
                                c = !0
                            }, function(b) {
                                c || r(a, b);
                                c = !0
                            });
                            return
                        }
                    } catch (e) {
                        c || r(a, e);
                        return
                    }
                    a.a = 0;
                    a.b = b;
                    v(a)
                }
            }

            function r(a, b) {
                if (a.a == p) {
                    if (b == a) throw new TypeError;
                    a.a = 1;
                    a.b = b;
                    v(a)
                }
            }

            function v(a) {
                l(function() {
                    if (a.a != p)
                        for (; a.f.length;) {
                            var b = a.f.shift(),
                                c = b[0],
                                d = b[1],
                                e = b[2],
                                b = b[3];
                            try {
                                0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
                            } catch (h) {
                                b(h)
                            }
                        }
                })
            }
            n.prototype.g = function(a) {
                return this.c(void 0, a)
            };
            n.prototype.c = function(a, b) {
                var c = this;
                return new n(function(d, e) {
                    c.f.push([a, b, d, e]);
                    v(c)
                })
            };

            function w(a) {
                return new n(function(b, c) {
                    function d(c) {
                        return function(d) {
                            h[c] = d;
                            e += 1;
                            e == a.length && b(h)
                        }
                    }
                    var e = 0,
                        h = [];
                    0 == a.length && b(h);
                    for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c)
                })
            }

            function x(a) {
                return new n(function(b, c) {
                    for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c)
                })
            };
            window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
        }());


        // Polyfill Event constructor for IE ref: https://jira.dev.bbc.co.uk/browse/ORBITEN-919
        // see: https://stackoverflow.com/questions/26596123
        (function() {
            if (typeof window.CustomEvent === "function") {
                return false;
            }

            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
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
                value: function assign(target, varArgs) { // .length of function is 2
                    'use strict';
                    if (target == null) { // TypeError if undefined or null
                        throw new TypeError('Cannot convert undefined or null to object');
                    }

                    var to = Object(target);

                    for (var index = 1; index < arguments.length; index++) {
                        var nextSource = arguments[index];

                        if (nextSource != null) { // Skip over if undefined or null
                            for (var nextKey in nextSource) {
                                // Avoid bugs when hasOwnProperty is shadowed
                                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                    to[nextKey] = nextSource[nextKey];
                                }
                            }
                        }
                    }
                    return to;
                },
                writable: true,
                configurable: true
            });
        }

        if (typeof window.CustomEvent !== 'function') {

            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: null
                };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }

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

            function getMetaValue(propertyName) {
                var metaTag = document.querySelector(
                    "meta[property='" + propertyName + "'], " +
                    "meta[name='" + propertyName + "']");
                if (metaTag) {
                    return metaTag.getAttribute("content");
                } else {
                    throw new Error('No meta tag called: ' + propertyName)
                }
            }

            function generateCountername() {
                var pathName = window.location.pathname
                    .replace(/\/$/, "")
                    .replace(/^\//, "")
                    .replace(/\//g, '.');
                return pathName + '.page';
            }

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

            function updatePageData(newData) {
                page = Object.assign(page, newData);
            }

            document.addEventListener('bbc-page-reset', function(event) {
                if (event.detail && event.detail.page) {
                    updatePageData(event.detail.page);
                }
                document.dispatchEvent(new Event('bbc-page-updated'));
            });

            window.bbcpage = {
                loadModule: function(deps) {
                    return new Promise(function(resolve, reject) {
                        window.require(deps, function() {
                                resolve.apply(this, arguments);
                            },
                            function(error) {
                                reject(error);
                            });
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
                                    setTimeout(function() {
                                        reject();
                                    }, timeout);
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
                getSite: function() {
                    return Promise.resolve(page.site);
                },
                getSection: function() {
                    return Promise.resolve(page.section);
                },
                getContentType: function() {
                    return Promise.resolve(page.contentType);
                },
                getContentId: function() {
                    return Promise.resolve(page.contentId);
                },
                getEdition: function() {
                    return new Promise(function(resolve, reject) {
                        if (page.edition) {
                            resolve(page.edition);
                            return;
                        }
                        try {
                            resolve(getMetaValue('x-audience').toLowerCase());
                        } catch (err) {
                            // This property is related to Chartbeat; see http://support.chartbeat.com/docs/
                            if (window._sf_async_config) {
                                resolve(window._sf_async_config.region || null);
                            }
                        }
                        resolve(null);
                    });
                },
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

            function checkStatus(response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            }

            function parseJSON(response) {
                return response.json();
            }

            var supportsCors = function() {
                return typeof XMLHttpRequest !== 'undefined' &&
                    'withCredentials' in new XMLHttpRequest();
            };

            var getUserInfoFallback = function() {
                return window.bbcpage.loadModule(['orb/fig'])
                    .then(function(orbFig) {
                        return new Promise(function(resolve, reject) {
                            orbFig.load(function(fig) {
                                var getCountryFallback = function() {
                                    if (fig.geo.isUK()) {
                                        return 'GB';
                                    } else if (fig.geo.isEU()) {
                                        return 'EU';
                                    }
                                };
                                resolve({
                                    'X-Country': user.country || getCountryFallback(),
                                    'X-Ip_is_uk_combined': fig().uk ? 'yes' : 'no',
                                    'X-Ip_is_advertise_combined': fig().ad ? 'yes' : 'no'
                                });
                            }, function() {
                                reject('Error determining country. Timeout?');
                            });
                        });
                    });
            };

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
                            .then(function(userInfo) {
                                user = userInfo;
                                return user;
                            });
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
                    return getUserInfo().then(function(userInfo) {
                        return userInfo['X-Country'] || 'GB';
                    });
                },

                isUKCombined: function() {
                    return getUserInfo().then(function(userInfo) {
                        if (!userInfo['X-Ip_is_uk_combined']) {
                            throw new Error('missing isUKCombined from userinfo response');
                        }
                        return userInfo['X-Ip_is_uk_combined'].toLowerCase() === 'yes';
                    })
                },

                canSeeAdverts: function() {
                    return getUserInfo().then(function(userInfo) {
                        if (!userInfo['X-Ip_is_advertise_combined']) {
                            throw new Error('missing canSeeAdverts from userinfo response');
                        }
                        return userInfo['X-Ip_is_advertise_combined'].toLowerCase() === "yes";
                    });
                },

                isSignedIn: function() {
                    return window.bbcpage.loadModule(['idcta-v2/idcta-1'])
                        .then(function(idcta) {
                            return (idcta && idcta.getCookieInstance().hasCookie());
                        });
                },
                allowsPerformanceCookies: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.cookiesEnabled() && !!bbccookies.readPolicy('performance');
                        });
                },
                allowsFunctionalCookies: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.cookiesEnabled() && !!bbccookies.readPolicy('personalisation');
                        });
                },
                getCookieValue: function(cookieName) {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return bbccookies.get(cookieName);
                        });
                },
                resetCookiesPreferences: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            bbccookies.setDefaultCookiesSingleDomain();
                        });
                },
                hasCookiesEnabled: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.cookiesEnabled();
                        });
                },
                hasSeenCookieBanner: function() {
                    return window.bbcpage.loadModule(['orb/cookies'])
                        .then(function(bbccookies) {
                            return !!bbccookies.isCookiePolicySet();
                        });
                },
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
    