
        /*global B*/
        (function() {
            "use strict";
            var PREFIX = 'Atlas/';

            function prefixer(depName) {
                return PREFIX + depName;
            }

            function require(deps, callback) {}

            function define(name, deps) {
                var args = [].slice.call(arguments, 0);
                args[0] = prefixer(name);
                if (Array.isArray(deps)) {
                    args[1] = deps.map(prefixer);
                }
                B.define.apply(this, args);
            }
            B.atlas = B.atlas || {
                requirejs: require,
                require: require,
                define: define
            };
        }());
        /*
         */
        /**/
        (function() {
            /*global B*/
            /*jshint browser: true*/
            'use strict';
            if (!B.atlas || !B.atlas.define) {
                return;
            }
            var markersOnMapURL = '/markers_on_map' + cleanupMomParameters('?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ;sid=a18d0e3647ad471a1ddf7cf6315fd08d;dest_id=;dest_type=;checkin=;checkout=;limit=;currency=EUR;asdf=1;lang=en-us;stype=2;aid=304142;ref=index;room1=A,A,;;sav=1;ngp=1 ;ns=1');
            var _env = {
                markersOnMapURL: markersOnMapURL,
                markerDetailsURL: '/hotels_onmap_detail?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ;sid=a18d0e3647ad471a1ddf7cf6315fd08d;lang=en-us;aid=304142;cc1=nl;sav=1;room1=A,A,;;currency=EUR;prices=1;localize=1;av=1;localize_format=1;rr=1 ;kg=1',
                providerName: 'google',
                googleMapsUrl: 'https://maps.googleapis.com/maps/api/js?callback=GLOBAL_ATLAS_GOOGLE_MAPS_CALLBACK&channel=booking-mdot&language=en-us&region=en-us&client=gme-booking&v=3.35&libraries=places',
                destinationType: '',
                destinationName: '',
                destinationId: '',
                checkinCheckoutInterval: '',
                transPricePerXNights: '',
                isRTL: '',
                adultsTotal: '2',
                childrenTotal: '0',
                action: 'index',
                debug: 0,
                canAskForLocation: '',
                aid: '304142',
                lang: 'en',
                checkinDate: '',
                checkoutDate: '',
                viamichelin: '',
                hasValidDates: '0',
                usersLookingAtHotel: '',
                hasMaxotelRooms: '',
                hpFullAdress: '',
                ajaxHotelDetailsSoldout: 'Sold out on our site',
                bookWindow: '',
                isProviderMapBox: '',
                isGeniusUser: "",
                srDestType: '',
                ufi: '',
                srHpHideStars: '',
                nflt: '',
                destinationFullName: '',
                b_is_tdot_traffic_on_mdot_experiment: '',
                inCityName: '',
                cityName: '',
                isLandOrAddrMarkerEnabled: '',
                isSkiArea: '',
                fe_sp_load_maps_component: '',
                fe_is_aroundme: false,
                b_hotel_name_en_with_translation: '',
                MAP_SEARCH_BOX_TRACKING_KILLSWITCH: true,
                b_filter_selected: false,
            };
            // maps_mdot_hp_v3
            B.atlas.__env__ = _env;
            B.events.on('ATLAS_SR_AJAX_COMPLETE', function(envNew) {});
            B.atlas.define('util-env', function() {});
            // Remove double parameters
            function cleanupMomParameters(parameters) {
                var temp = {}
                parameters.split(';').forEach(function(param) {
                    temp[param] = true;
                })
                return Object.keys(temp).join(';');
            }
        }());
        if (this.$ && $.fn && $.fn.bind) {
            $(this.document.body).bind('submit', function(evt) {});
        }(function() {
            if (window.self !== window.top) {
                $.ajax({
                    type: 'POST',
                    url: 'https://www.booking.com/_frdtcr?aid=304142',
                    data: {
                        'pid': 'de8c51adcdad01e4',
                        'ref': document.referrer,
                        'url': document.location.href
                    }
                });
            }
        }());
        (function() {
            B.env.google_analytics_tracking_enabled = true;
            if (!B.env.google_analytics_tracking_enabled) return;
            (function() {
                window.b = window.b || window.B || window.booking || {};
                var pageviewInfo = window.b.gaPageViewInfo = {
                    page: '/index.html?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ&sb_price_type=total&ur_aid=304142&ur_plang=en-us&ur_gstcc=nl&ur_nodat=1',
                    dimension17: "index|",
                    dimension4: "A18D0E3",
                    dimension5: "304142",
                    dimension6: "3",
                    dimension7: "1",
                    dimension8: "gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ",
                    dimension44: "",
                    dimension9: "",
                    dimension53: "",
                    dimension11: "mdot",
                    dimension12: "en-us",
                    dimension10: "0",
                    dimension29: "0",
                    dimension32: "not_logged_in",
                    dimension33: "na",
                    dimension35: "UmFuZG9tSVYkc2RlIyh9YeXKWxo4vn0nuneVV59YKf0igZoW1JJN8VKeW9O4trxG",
                    dimension84: "0",
                    dimension31: "unknown",
                    dimension42: 'Index',
                    dimension61: "0",
                    dimension62: "1",
                    dimension63: "null",
                    dimension64: '',
                    dimension73: "EUR",
                    dimension23: (function() {
                        return navigator.connection && navigator.connection.effectiveType || ''
                    })(),
                    dimension24: (function() {
                        return navigator.connection && navigator.connection.type || ''
                    })(),
                    dimension85: "",
                    dimension99: "",
                    dimension91: "0",
                    dimension100: 270,
                    dimension116: 0,
                    dimension117: 0,
                    dimension118: 0,
                    dimension119: 0,
                    dimension52: "0",
                    dimension199: "2019-10-10;",
                    dimension255: "null"
                };
                if (window.devicePixelRatio) {
                    pageviewInfo.dimension47 = window.devicePixelRatio;
                }
                if (pageviewInfo && (pageviewInfo.dimension9 === "" || pageviewInfo.dimension9 == null)) {
                    delete pageviewInfo.dimension9;
                }
                ga('set', 'location', 'https://www.booking.com/index.html?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ&sb_price_type=total&ur_aid=304142&ur_plang=en-us&ur_gstcc=nl&ur_nodat=1');
                setTimeout(function() {
                    if (typeof ga !== 'function') return;
                    if (window.location.search.indexOf('gitlab_runner') > -1 || document.cookie.indexOf('gitlab_runner') > -1) return;
                    try {
                        ga(function(tracker) {
                            var clientId = tracker.get('clientId');
                            ga('set', 'dimension60', clientId);
                        });
                        if (pageviewInfo.page) {
                            ga('set', 'page', pageviewInfo.page);
                        }
                        pageviewInfo.hitCallback = function() {
                            var et;

                            function onNoGaTracker() {};
                            try {
                                window.__ga_tracker_set_page_as_tracked__();
                            } catch (e) {
                                onNoGaTracker();
                            }
                        }
                        ga('send', 'pageview', pageviewInfo);
                    } catch (e) {}
                });
            })();
            ga('require', 'ec');
            (function() {
                var promos = Array.prototype.slice.call(document.querySelectorAll('[data-ga-promo]'));
                var tracked = {};
                for (var i = 0; i < promos.length; i++) {
                    var s = promos[i].getAttribute('data-ga-promo');
                    if (!s) continue;
                    var r = parsePromo(s);
                    var k = r.id + r.name + r.creative + r.position;
                    if (tracked.hasOwnProperty(k)) continue;
                    tracked[k] = 1;
                    // this event has to be set before pageview is triggered as it is sent together with pageview
                    ga('ec:addPromo', {
                        'id': r.id,
                        'name': r.name,
                        'creative': r.creative,
                        'position': r.position
                    });
                }

                function parsePromo(str) {}
            }());
            if (B.env) {
                B.env.b_feature_running_TRACK_GA_EC_PROMO = true;
            }
        })();
        if (window.performance && performance.setResourceTimingBufferSize) {
            performance.setResourceTimingBufferSize(500);
        };
        (function nav_timing(w) {
            'use strict';

            function validMetric(value) {
                return !isNaN(value) && value >= 0 && value < 150000 || false;
            }

            function callback() {
                var performance = w.performance || w.mozPerformance || w.msPerformance || w.webkitPerformance || {},
                    navigation = performance.navigation,
                    timing = performance.timing,
                    hasGetEntries = !!performance.getEntriesByType,
                    userTiming = [];
                if (typeof timing !== 'object' || typeof navigation !== 'object') {
                    return;
                }
                if (timing.loadEventEnd == 0) {
                    setTimeout(callback, 1000);
                    return;
                }
                var domain = validMetric(timing.domainLookupEnd - timing.domainLookupStart),
                    connect = validMetric(timing.connectEnd - timing.connectStart),
                    response = validMetric(timing.responseEnd - timing.responseStart),
                    dom = validMetric(timing.domComplete - timing.domLoading),
                    load = validMetric(timing.loadEventEnd - timing.loadEventStart);
                if (!domain || !connect || !response || !dom || !load || w._phantom || w.callPhantom || w.__phantomas || window.Buffer || window.emit || window.spawn) {
                    return false;
                }
                if (typeof RUMSpeedIndex === 'function') {
                    var speedIndex = Math.round(RUMSpeedIndex());
                    if (speedIndex) {
                        if (window.ga) {
                            setTimeout(function() {
                                ga('send', 'timing', 'Performance', 'SpeedIndex', speedIndex, B.env['b_action']);
                            }, 100);
                        }
                        userTiming.push('speedindex:' + speedIndex);
                    }
                }
                if (hasGetEntries) {
                    var utMetrics = performance.getEntriesByType('measure') || [];
                    for (var _tmp, _i = 0, _l = utMetrics.length; _i < _l; _i++) {
                        _tmp = utMetrics[_i];
                        userTiming.push(_tmp['name'] + ':' + Math.round(_tmp['duration']));
                    }
                }
                var navTimesHost = '/navigation_times',
                    navTimesQuery = 'sid=a18d0e3647ad471a1ddf7cf6315fd08d&pid=de8c51adcdad01e4&nts=' + navigation.type + ',' + navigation.redirectCount + ',' + timing.navigationStart + ',' + timing.unloadEventStart + ',' + timing.unloadEventEnd + ',' + timing.redirectStart + ',' + timing.redirectEnd + ',' + timing.fetchStart + ',' + timing.domainLookupStart + ',' + timing.domainLookupEnd + ',' + timing.connectStart + ',' + timing.connectEnd + ',' + timing.secureConnectionStart + ',' + timing.requestStart + ',' + timing.responseStart + ',' + timing.responseEnd + ',' + timing.domLoading + ',' + timing.domInteractive + ',' + timing.domContentLoadedEventStart + ',' + timing.domContentLoadedEventEnd + ',' + timing.domComplete + ',' + timing.loadEventStart + ',' + timing.loadEventEnd + ',0' + '&first=0' + '&cdn=cf' + '&dc=4' + '&bo=3' + '&lang=en-us' + '&ref_action=index' + '&aid=304142' + '&stype=2' + '&route=' + '&ua=302' + '&ch=m' + '&lt=' + '&css_load=' + (window.mainCssWasLoaded || 0) + '&wn=1';
                var navTimesBody = 'utiming=' + userTiming.join(',');
                var _req = new XMLHttpRequest();
                _req.open('POST', navTimesHost + '?' + navTimesQuery);
                _req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                _req.setRequestHeader('X-Booking-CSRF', 'GlCfXQAAAAA=XQiWqNo8LxBbLfG5kL_VERigiGvX37W-HSa1JWiFwpsr7KSNZpP2B6KRW7LFvrw2TkJfZ284_l_ovnG6ooRdiJiIbohPauS1VHxPPqBwytWVScZwpv5pY5EJNQPweW4FOuge5bSTW3dw68P4yxF8IEGm_qCyvJBF4nI06pedvjKFzSJBrRcuM4gNilT_tEK-YljXOgrnL3DqluDS');
                _req.send(navTimesBody);
            };
            if (typeof w.attachEvent != "undefined") {
                w.attachEvent("onload", callback);
            } else if (w.addEventListener) {
                w.addEventListener("load", callback, false);
            }
        })(window);
    