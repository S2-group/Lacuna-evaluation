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

        (function() {
            (function() {
                var et = function() {
                    "use strict";
                    var s, c = {
                            level: 0
                        },
                        f = {
                            experiment: "e",
                            stage: "s",
                            goal: "g",
                            customGoal: "cg",
                            goalWithValue: "gwv"
                        },
                        r = [],
                        o = function() {
                            var n, r = {},
                                o = "";

                            function t() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[692:1107]", functionData => eval(functionData))}

                            function i(e) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[1151:1224]", functionData => eval(functionData))}
                            return {
                                populate: function(e) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[1316:1472]", functionData => eval(functionData))}
                            }
                        }(),
                        i = function() {
                            var r, o = !1,
                                i = [],
                                n = [],
                                e = 0;

                            function a() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[1777:1927]", functionData => eval(functionData))}

                            function u() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[1970:2133]", functionData => eval(functionData))}

                            function l() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[2176:5402]", functionData => eval(functionData))}
                            return function(e, t, n) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[5456:5833]", functionData => eval(functionData))}
                        }(),
                        a = {},
                        p = 300,
                        u = !1,
                        h = {},
                        v = [],
                        g = !1,
                        l = !1,
                        d = !1,
                        m = !1,
                        w = {},
                        T = !1,
                        E = !1,
                        n = !1,
                        N = {
                            r: {},
                            t: {},
                            f: {}
                        };
                    N.r || (N.r = {}), N.f || (N.f = {}), N.t || (N.t = {});
                    var _ = {},
                        y = 50;

                    function b(e) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[6617:6985]", functionData => eval(functionData))}

                    function A(e, t, n) {
                        return (e === f.experiment || e === f.goal ? [e, t] : [e, t, n]).join("-")
                    }

                    function I(e) {
                        if (!d) return e;
                        if (a[e]) return a[e];
                        for (var t = 2166136261, n = 0, r = e.length; n < r; ++n) t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t ^= e.charCodeAt(n);
                        return a[e] = (t >>> 0).toString(16)
                    }

                    function O(e, t, n) {
                        if (c.level && c.report(c.events.TRACKING_ATTEMPT, {
                                what: e,
                                hash: t,
                                id: n,
                                variant: (e === f.experiment || e === f.stage) && W(t)
                            }), R(e, t, n)) switch (e) {
                            case f.experiment:
                                C(f.experiment, t), o.populate(t), N.m && r.push(t), i(f.experiment, t);
                                break;
                            case f.stage:
                                C(f.stage, t, n), o.populate(t + "|" + n), N.m && r.push(t + "|" + n), i(f.stage, t, n);
                                break;
                            case f.goal:
                                C(f.goal, t), i(f.goal, t);
                                break;
                            case f.customGoal:
                                C(f.customGoal, t, n), i(f.customGoal, t, n);
                                break;
                            case f.goalWithValue:
                                (function(e, t) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[8703:9059]", functionData => eval(functionData))})(t, n) && i(f.goalWithValue, t, n);
                                break;
                            default:
                                c.level && c.report(c.events.TRACK_UNKNOWN_ITEM, e, t, n)
                        }
                        return e !== f.experiment || W(t)
                    }

                    function C(e, t, n) {
                        h[A(e, t, n)] = !0
                    }

                    function R(e, t, n) {
                        if (m) return !1;
                        c.level && c.report(c.events.SHOULD_TRACK, e, t, n);
                        var r, o, i = {
                            what: e,
                            hash: t,
                            id: n,
                            variant: (e === f.experiment || e === f.stage) && W(t)
                        };
                        if (h[A(e, t, n)]) return c.level && c.report(c.events.NOT_TRACKING_WAS_TRACKED, i), !1;
                        if (e === f.experiment || e === f.stage) {
                            if (o = 1 << (n || 0), r = I(t), N.f[r]) return c.level && c.report(c.events.NOT_TRACKING_FULLON, i), !1;
                            if (void 0 === N.r[r]) return c.level && c.report(c.events.NOT_TRACKING_NOT_RUNNING, i), !1;
                            if (N.t[r] & o) return C(e, t, n), c.level && c.report(c.events.NOT_TRACKING_WAS_TRACKED, i), !1
                        } else if (e === f.customGoal) {
                            if (r = I(t), N.f[r]) return c.level && c.report(c.events.NOT_TRACKING_FULLON, i), !1;
                            if (void 0 === N.r[r]) return c.level && c.report(c.events.NOT_TRACKING_NOT_RUNNING, i), !1
                        }
                        return !0
                    }

                    function G(n, e, r, o, i) {
                        c.level && c.report(c.events.ADD_EVENT_LISTENER, n, e, r, o, i);
                        var a = function(e) {
                            {
                                if ("string" == typeof e) return M(document.querySelectorAll(e));
                                if (e instanceof HTMLCollection) return M(e);
                                if (e instanceof NodeList) return M(e);
                                if (e instanceof Element) return [e];
                                if ("[object Array]" === Object.prototype.toString.call(e)) return e;
                                if (window.jQuery && e instanceof jQuery) return e.toArray()
                            }
                            return []
                        }(e);
                        if (0 < a.length)
                            if ("view" === n) ! function(e, t, n, r) {
                                c.level && c.report(c.events.ADD_DEBOUNCED_VIEW_HANDLER, e, t, n, r);
                                var o = A(t, n, r);
                                if (h[o]) return;
                                v.push([e, t, n, r]), g || (c.level && c.report(c.events.ATTACH_VIEW_LISTENER, v), L(window, "scroll", k), L(window, "resize", k), L(window, "load", j), window.setTimeout(k, p), T && T(k), g = !0)
                            }(a[0], r, o, i);
                            else
                                for (var t = 0, u = a.length; t < u; t++) L(a[t], n, l);
                        else c.level && c.report(c.events.NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER, r, o, i);

                        function l() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[12516:12667]", functionData => eval(functionData))}
                    }

                    function j() {
                        window.setTimeout(k, p)
                    }

                    function k() {
                        if (l) {
                            if (u) return;
                            u = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[12962:13037]", functionData => eval(functionData))}, p)
                        }
                        l = !0;
                        var e, t = [];
                        c.level && c.report(c.events.CHECK_IF_VISIBLE, v);
                        for (var n = 0, r = v.length; n < r; ++n)(e = v[n]) && S(e[0]) ? (c.level && c.report(c.events.ONVIEW_TRACKING_TRIGGERED, e[1], e[2], e[3]), O(e[1], e[2], e[3])) : t.push(e);
                        v = t, c.level && c.report(c.events.VISIBLE_CHECK_FINISHED, v), 0 === v.length && (g = !1, V(window, "scroll", k), V(window, "resize", k), V(window, "load", j), E && E(k), c.level && c.report(c.events.DETACH_VIEW_LISTENER)), window.setTimeout(function() {
                            l = !1
                        }, p)
                    }

                    function S(e) {
                        var t, n, r;
                        return !!e && (!!e.parentElement && (!e.getBoundingClientRect || (t = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth, !(t.right < 0 || t.left > r || 0 === t.top && 0 === t.left && 0 === t.right && 0 === t.bottom) && t.top < n)))
                    }

                    function L(e, t, n) {
                        e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[14362:14446]", functionData => eval(functionData))}, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1)
                    }

                    function V(e, t, n) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[14577:14739]", functionData => eval(functionData))}

                    function B(n, r, o) {
                        return function(e, t) {
                            R(o, e, t) ? G(n, r, o, e, t) : c.level && c.report(c.events.WONT_ATTACH_EVENT_TRACKING, n, r, o, e, t)
                        }
                    }

                    function D(e, t) {
                        return {
                            track: B(e, t, f.experiment),
                            stage: B(e, t, f.stage),
                            goal: B(e, t, f.goal),
                            customGoal: B(e, t, f.customGoal)
                        }
                    }

                    function t(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }

                    function H(e) {
                        N.f = e.f || {}, t(N.r, e.r || {}), t(N.t, e.t || {}), e.m && !N.m && (N.m = e.m, r = [])
                    }

                    function W(e) {
                        var t = I(e);
                        return N.r[t] || N.f[t] || 0
                    }

                    function K(e) {
                        if (1 < arguments.length) throw "Track only accept one parameter";
                        if (e) return O(f.experiment, e);
                        if (n) throw "B.et.track: hash value should be a non-empty string";
                        return 0
                    }

                    function x(e) {
                        var t, n = /^(?:(goal|customGoal):)?([a-zA-Z]\w+)?(?::([\d]))?$/,
                            r = [];
                        for (e = e.split(/\s+/), t = 0; t < e.length; t++) {
                            var o = e[t].match(n),
                                i = o && o[2],
                                a = o && o[3],
                                u = o && o[1] || (a ? "stage" : "track");
                            u && r.push({
                                hash: i,
                                value: a,
                                action: u
                            })
                        }
                        return r
                    }

                    function M(e) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[16925:17124]", functionData => eval(functionData))}

                    function e() {}
                    return e.prototype.track = K, e.prototype.stage = function(e, t) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[17247:17947]", functionData => eval(functionData))}, e.prototype.goal = function(e) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[17980:18174]", functionData => eval(functionData))}, e.prototype.customGoal = function(e, t) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[18216:18658]", functionData => eval(functionData))}, e.prototype.goalWithValue = function(e, t) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[18703:19158]", functionData => eval(functionData))}, e.prototype.on = D, e.prototype.set = H, e.prototype.Trackables = f, e.prototype.configure = function(e) {
                        e.url && (s = e.url), e.jset && H(e.jset), void 0 !== e.useFNV && (d = e.useFNV), void 0 !== e.ajaxHeaders && (w = e.ajaxHeaders), void 0 !== e.snt && (m = e.snt), "function" == typeof e.bindOnView && (T = e.bindOnView), "function" == typeof e.unbindOnView && (E = e.unbindOnView), e.isDevServer && (n = !0)
                    }, e.prototype.initAttributesTracking = function(i) {
                        var a, u, l, s = ["change", "click", "mouseenter", "focus", "view"];
                        ! function() {
                            if (i && 0 !== i.length ? i.length && (i = i[0]) : i = document, i && i.querySelectorAll)
                                for (a = 0; a < s.length; a++) {
                                    l = "data-et-" + (u = s[a]);
                                    for (var e = i.querySelectorAll("[" + l + "]"), t = 0; t < e.length; t++) {
                                        var n = e[t],
                                            r = x(n.getAttribute(l)),
                                            o = D(u, n);
                                        r.forEach(function(e) {
                                            o && o[e.action] && o[e.action](e.hash, e.value)
                                        })
                                    }
                                }
                        }()
                    }, e.prototype.tracked = function() {
                        return r.join(",")
                    }, e.prototype.registerDebug = function(e) {
                        if (0 == c.level) {
                            var t = !isNaN(e.level),
                                n = "object" == typeof e.events,
                                r = "function" == typeof e.report;
                            t && n && r && (c.level = e.level, c.events = e.events, c.report = e.report)
                        }
                    }, new e
                }();
                B.et = et;
            }());
            var ViewTrackingEvents = (function() {
                var desktopEvents = [
                    'GENERAL:dom_changed',
                    'GENERAL:layout_changed',
                    'GENERAL:throttled_scroll',
                    'GENERAL:throttled_resize',
                    'tab-opened',
                    'user_access_menu_register_tab',
                    'user_access_menu_login_tab',
                    'uc_popover_showed',
                    'rt-lightbox-open',
                    'rt-lightbox-closed',
                    'tooltip:show',
                    'reviews-sliding:scroll',
                    'et-scroll-observer:scroll'
                ];
                var mdotEvents = [
                    'HP.MAP.OPEN.COMPLETE',
                    'HP.block.expand',
                    'tabbed_nav:opened',
                    'RT.room.page.scrolls',
                    'RT.room.expand',
                    // START xroom_m_searchbox_rooms_before_guests
                    'hp_dates_popup_show',
                    // END xroom_m_searchbox_rooms_before_guests
                    'RT.room.select.done'
                ];
                return [].concat(desktopEvents, mdotEvents);
            }());
            var ajaxHeaders = {
                'X-Booking-AID': '304142',
                'X-Booking-CSRF': 'GlCfXQAAAAA=XQiWqNo8LxBbLfG5kL_VERigiGvX37W-HSa1JWiFwpsr7KSNZpP2B6KRW7LFvrw2TkJfZ284_l_ovnG6ooRdiJiIbohPauS1VHxPPqBwytWVScZwpv5pY5EJNQPweW4FOuge5bSTW3dw68P4yxF8IEGm_qCyvJBF4nI06pedvjKFzSJBrRcuM4gNilT_tEK-YljXOgrnL3DqluDS',
                'X-Booking-Info': function() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[22884:23033]", functionData => eval(functionData))},
                'X-Booking-Client-Info': function() {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[23087:23148]", functionData => eval(functionData))},
                'X-Booking-Label': encodeURIComponent('gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ'),
                'X-Booking-Language-Code': 'en-us',
                'X-Booking-Pageview-Id': 'de8c51adcdad01e4',
                'X-Booking-Session-Id': 'a18d0e3647ad471a1ddf7cf6315fd08d',
                'X-Booking-SiteType-Id': '2',
                'X-Partner-Channel-Id': '3',
                'X-Requested-With': 'XMLHttpRequest'
            };
            var extraAjaxHeaders = {};
            for (var extraAjaxHeader in extraAjaxHeaders) {
                if (Object.prototype.hasOwnProperty.call(extraAjaxHeaders, extraAjaxHeader)) {
                    ajaxHeaders[extraAjaxHeader] = extraAjaxHeaders[extraAjaxHeader];
                }
            }
            var eventsBindedAlready = false;

            function bindViewTrackingEvents(onViewHandler) {
                if (B.eventEmitter && !eventsBindedAlready) {
                    for (var i = 0; i < ViewTrackingEvents.length; i++) {
                        B.eventEmitter.bind(ViewTrackingEvents[i], onViewHandler);
                    }
                    eventsBindedAlready = true;
                }
            }
            B.et.configure({
                url: "/js_tracking?ref_action=index&sid=a18d0e3647ad471a1ddf7cf6315fd08d&stype=2&lang=en-us&ver=2&pid=de8c51adcdad01e4&aid=304142",
                noJqueryAjax: true,
                noJqueryOn: true,
                ajaxHeaders: ajaxHeaders,
                bindOnView: function(onViewHandler) {
                    bindViewTrackingEvents(onViewHandler);
                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', function() {
                            bindViewTrackingEvents(onViewHandler);
                        });
                    }
                },
                unbindOnView: function(onViewHandler) {lacuna_lazy_load("lacuna_cache/exported_oad2xg.js[25106:25382]", functionData => eval(functionData))},
                jset: B.jset || {
                    r: {},
                    t: {},
                    f: {}
                }
            });
            window.setTimeout(function() {
                B.et.initAttributesTracking();
            }, 4);
        }());
    