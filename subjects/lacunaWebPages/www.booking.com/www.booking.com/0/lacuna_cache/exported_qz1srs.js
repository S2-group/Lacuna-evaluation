
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

                            function t() {
                                var e, t = o;
                                o = Object.keys(r).join(","), (n || (n = document.getElementById("req_info"))) && (n.innerHTML !== t && (e = n.innerHTML, r = e.split(",").reduce(function(e, t) {
                                    return e[t] = !0, e
                                }, r), o = Object.keys(r).join(",")), n.innerHTML = o)
                            }

                            function i(e) {
                                r[e] = !0
                            }
                            return {
                                populate: function(e) {
                                    i(e), "string" == typeof e ? (i(e), t()) : e instanceof Array && (e.forEach(i), t())
                                }
                            }
                        }(),
                        i = function() {
                            var r, o = !1,
                                i = [],
                                n = [],
                                e = 0;

                            function a() {
                                c.level && c.report(c.events.BEACON_SENT, i), o = !1, e = 0, r = null, i.length && l()
                            }

                            function u() {
                                o = !1, r = null, 10 <= ++e ? n = [] : (i = i.concat(n), n = [], r = window.setTimeout(l, 100 * e))
                            }

                            function l() {
                                c.level && c.report(c.events.SEND_BEACON, i.slice(0)), o = !0;
                                var e = s + "&" + function(e) {
                                    for (var t, n = [], r = [], o = [], i = [], a = [], u = 0, l = e.length; u < l; ++u) switch ((t = e[u]).what) {
                                        case f.experiment:
                                            n.push(t.hash);
                                            break;
                                        case f.stage:
                                            a.push(t.hash + "|" + t.id);
                                            break;
                                        case f.goal:
                                            r.push(t.hash);
                                            break;
                                        case f.customGoal:
                                            o.push(t.hash + "|" + t.id);
                                            break;
                                        case f.goalWithValue:
                                            var s = b(t.hash);
                                            s && i.push(s);
                                            break;
                                        default:
                                            c.level && c.report(c.events.UNABLE_TO_STRINGIFY, t)
                                    }
                                    return "ete=" + n.join(",") + "&etg=" + r.join(",") + "&etcg=" + o.join(",") + "&ets=" + a.join(",") + "&etgwv=" + i.join(",")
                                }(n = i);
                                N.m && (e += "&m=" + encodeURIComponent(N.m)), i = [];
                                try {
                                    ! function(e) {
                                        var t, n = e.url,
                                            r = e.complete || function() {},
                                            o = e.headers || {},
                                            i = XMLHttpRequest.DONE || 4,
                                            a = new XMLHttpRequest;
                                        if (!n) return;
                                        if (a.open("GET", n, !0), o)
                                            for (t in o) o.hasOwnProperty(t) && a.setRequestHeader(t, "function" == typeof o[t] ? o[t].call() : o[t]);
                                        a.onreadystatechange = function() {
                                            a.readyState === i && r(a, a.status)
                                        }, a.send()
                                    }({
                                        url: e,
                                        complete: function(e, t) {
                                            200 === t ? a() : u()
                                        },
                                        headers: w
                                    })
                                } catch (e) {
                                    var t = new Image;
                                    t.onload = a, t.onerror = u, t.src = s
                                }
                            }
                            return function(e, t, n) {
                                c.level && c.report(c.events.INIT_BEACON, e, t, n), i.push({
                                    what: e,
                                    hash: t,
                                    id: n
                                }), o || r ? c.level && c.report(c.events.DEFER_BEACON, i) : r = window.setTimeout(l, 0)
                            }
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

                    function b(e) {
                        if (_[e] && _[e][0].length) {
                            var t = _[e][0],
                                n = _[e][1],
                                r = [e, t.join(":")];
                            return n.length && r.push(n.join(":")), [].push.apply(n, t.splice(0, t.length)), r.join("|")
                        }
                    }

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
                                (function(e, t) {
                                    _[e] || (_[e] = [
                                        [],
                                        []
                                    ]);
                                    var n = _[e][0];
                                    if (_[e][1].length <= y + 10) return n.push(t), !0
                                })(t, n) && i(f.goalWithValue, t, n);
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

                        function l() {
                            O(r, o, i);
                            for (var e = 0, t = a.length; e < t; e++) V(a[e], n, l)
                        }
                    }

                    function j() {
                        window.setTimeout(k, p)
                    }

                    function k() {
                        if (l) {
                            if (u) return;
                            u = setTimeout(function() {
                                u = !1, k()
                            }, p)
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
                        e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
                            e["e" + t + n](window.event)
                        }, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1)
                    }

                    function V(e, t, n) {
                        e.detachEvent ? e[t + n] && (e.detachEvent("on" + t, e[t + n]), e[t + n] = null) : e.removeEventListener(t, n, !1)
                    }

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

                    function M(e) {
                        var t, n = [],
                            r = e.length;
                        for (t = 0; t < r; t++) n.push(e[t]);
                        return n
                    }

                    function e() {}
                    return e.prototype.track = K, e.prototype.stage = function(e, t) {
                        if (!e) {
                            if (n) throw "B.et.trackStage: hash value should be a non-empty string";
                            return !1
                        }
                        if (void 0 === t) {
                            if (n) throw "B.et.trackStage: stage number should be a number between 1 and 9";
                            return !1
                        }
                        if (0 === t) return K(e);
                        if (/^[1-9]$/.test(t)) return O(f.stage, e, t);
                        if (n) throw "B.et.trackStage: stage number should be a number between 1 and 9";
                        return !1
                    }, e.prototype.goal = function(e) {
                        if (e) return O(f.goal, e);
                        if (n) throw "B.et.goal: name should be a non-empty string";
                        return !1
                    }, e.prototype.customGoal = function(e, t) {
                        if (e && t && /^[1-5]$/.test(t)) return O(f.customGoal, e, t);
                        if (n) {
                            if (!e) throw "B.et.customGoal: hash value should be a non-empty string";
                            if (!t || !/^[1-5]$/.test(t)) throw "B.et.customGoal: custom goal number should be a number between 1 and 5"
                        }
                        return !1
                    }, e.prototype.goalWithValue = function(e, t) {
                        if (/^js_/.test(e) && /^-?[0-9]+$/.test(t)) return O(f.goalWithValue, e, t);
                        if (n) {
                            if (!/^js_/.test(e)) throw "B.et.goalWithValue: name should be a non-empty string with prefix js_";
                            if (!/^-?[0-9]+$/.test(t)) throw "B.et.goalWithValue: value should be an integer"
                        }
                        return !1
                    }, e.prototype.on = D, e.prototype.set = H, e.prototype.Trackables = f, e.prototype.configure = function(e) {
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
                'X-Booking-Info': function() {
                    return (document && document.getElementById('req_info')) ? document.getElementById('req_info').innerHTML : ''
                },
                'X-Booking-Client-Info': function() {
                    return B.et.tracked()
                },
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
                unbindOnView: function(onViewHandler) {
                    if (B.eventEmitter) {
                        for (var i = 0; i < ViewTrackingEvents.length; i++) {
                            B.eventEmitter.unbind(ViewTrackingEvents[i], onViewHandler);
                        }
                    }
                },
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
    