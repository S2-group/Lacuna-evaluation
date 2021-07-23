/* prebid.js v2.11.0
Updated : 2019-04-17 */
!(function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            227: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 586)
})({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", (function() {
            return C
        })), n.d(t, "bind", (function() {
            return B
        })), t.replaceTokenInString = function(i, e, o) {
            return ne(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        }, t.getUniqueIdentifierStr = D, t.generateUUID = function e(t) {
            return t ? (t ^ N() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map((function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(ge(t, e)))
            })).join("&") : ""
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === g(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                    else
                        for (var a = 0; a < o; a++) t.push(k(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = k, t.getTopWindowLocation = x, t.getTopFrameReferrer = P, t.getAncestorOrigins = M, t.getWindowTop = q, t.getWindowSelf = G, t.getWindowLocation = W, t.getTopWindowUrl = function() {
            var t;
            try {
                t = C.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = L, t.logInfo = z, t.logWarn = F, t.logError = H, t.hasConsoleLogger = function() {
            return O
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = D(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = J, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, ne(e, i), !r) return H("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Y, t.isFn = Q, t.isStr = X, t.isArray = $, t.isNumber = Z, t.isPlainObject = ee, t.isBoolean = function(e) {
            return Y(e, A)
        }, t.isEmpty = te, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length)
        }, t._each = ne, t.contains = function(e, t) {
            if (te(e)) return !1;
            if (Q(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", (function() {
            return re
        })), t._map = function(n, r) {
            if (te(n)) return [];
            if (Q(n.map)) return n.map(r);
            var i = [];
            return ne(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        }, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === p.S2S.SRC && n && C.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = D(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ue, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                C.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = se, t.uniques = de, t.flatten = fe, t.getBidRequest = function(n, e) {
            return n ? (e.some((function(e) {
                var t = c()(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === n
                    }))
                }));
                return t && (r = t), t
            })), r) : void 0;
            var r
        }, t.getKeys = le, t.getValue = ge, t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(fe, [])
            })).reduce(fe).filter(de)
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && Q(window.googletag.pubads) && Q(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", (function() {
            return pe
        })), n.d(t, "getOldestHighestCpmBid", (function() {
            return be
        })), n.d(t, "getLatestHighestCpmBid", (function() {
            return ve
        })), t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = he, t.inIframe = me, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function() {
            return (new Date).getTime()
        }, t.checkCookieSupport = Se, t.cookiesAreEnabled = function() {
            if (C.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function(e, t, n) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
        }, t.localStorageIsEnabled = function() {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, t.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return l(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return s()(t, e)
                }))) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(fe, []).filter((function(e) {
                return e.bidder === n
            })).map((function(e) {
                return e.params || {}
            }))
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ae(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ae(e, t)
            }
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function(e, t) {
            var n = l({}, e);
            return delete n[t], n
        }, t.isInteger = Ee, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ne(e, (function(e, t) {
                if ($(e)) {
                    var n = [];
                    ne(e, (function(e) {
                        ((e = se(r + "." + t, e)) || "" === e) && n.push(e)
                    })), e = n
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            })), i
        }, t.convertTypes = function(t, n) {
            return Object.keys(t).forEach((function(e) {
                n[e] && (Q(t[e]) ? n[e] = t[e](n[e]) : n[e] = (function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                })(t[e], n[e]), isNaN(n[e]) && delete n.key)
            })), n
        }, t.setDataInLocalStorage = function(e, t) {
            Te() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function(e) {
            if (Te()) return window.localStorage.getItem(e)
        }, t.hasLocalStorage = Te, t.isArrayOfNums = function(e, t) {
            return $(e) && (!t || e.length === t) && e.every((function(e) {
                return Ee(e)
            }))
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ee(e) ? he(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(90),
            o = n.n(i),
            a = n(10),
            c = n.n(a),
            u = n(9),
            s = n.n(u),
            d = n(11);

        function f(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = n(4),
            b = !1,
            v = "Array",
            y = "String",
            h = "Function",
            m = "Number",
            S = "Object",
            A = "Boolean",
            E = Object.prototype.toString,
            T = Boolean(window.console),
            O = Boolean(T && window.console.log),
            I = Boolean(T && window.console.info),
            w = Boolean(T && window.console.warn),
            _ = Boolean(T && window.console.error),
            C = {
                checkCookieSupport: Se,
                createTrackPixelIframeHtml: ue,
                getWindowSelf: G,
                getWindowTop: q,
                getAncestorOrigins: M,
                getTopFrameReferrer: P,
                getWindowLocation: W,
                getTopWindowLocation: x,
                insertUserSyncIframe: ce,
                insertElement: oe,
                isFn: Q,
                triggerPixel: ae,
                logError: H,
                logWarn: F,
                logMessage: L,
                logInfo: z
            },
            j = {},
            B = function(e, t) {
                return t
            }.bind(null, 1, j)() === j ? Function.prototype.bind : function(e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var U, R = (U = 0, function() {
            return ++U
        });

        function D() {
            return R() + Math.random().toString(16).substr(2)
        }

        function N() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function k(e) {
            if ($(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function x() {
            if (me()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer()
                } catch (e) {
                    z("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return C.getWindowLocation()
        }

        function P() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function M() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function q() {
            return window.top
        }

        function G() {
            return window.self
        }

        function W() {
            return window.location
        }

        function L() {
            K() && O && console.log.apply(console, V(arguments, "MESSAGE:"))
        }

        function z() {
            K() && I && console.info.apply(console, V(arguments, "INFO:"))
        }

        function F() {
            K() && w && console.warn.apply(console, V(arguments, "WARNING:"))
        }

        function H() {
            K() && _ && console.error.apply(console, V(arguments, "ERROR:"))
        }

        function V(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function K() {
            if (!1 === r.config.getConfig("debug") && !1 === b) {
                var e = "TRUE" === J(p.DEBUG_MODE).toUpperCase();
                r.config.setConfig({
                    debug: e
                }), b = !0
            }
            return !!r.config.getConfig("debug")
        }

        function J(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }

        function Y(e, t) {
            return E.call(e) === "[object " + t + "]"
        }

        function Q(e) {
            return Y(e, h)
        }

        function X(e) {
            return Y(e, y)
        }

        function $(e) {
            return Y(e, v)
        }

        function Z(e) {
            return Y(e, m)
        }

        function ee(e) {
            return Y(e, S)
        }

        function te(e) {
            if (!e) return !0;
            if ($(e) || X(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ne(e, t) {
            if (!te(e)) {
                if (Q(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var re = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })();
        var ie = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function oe(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ae(e, t) {
            var n = new Image;
            t && C.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ce(e, t) {
            var n = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), C.insertElement(i, document, "html", !0)
        }

        function ue(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(D(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function se(e, t, n) {
            return null == t ? n : X(t) ? t : Z(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function de(e, t, n) {
            return n.indexOf(e) === t
        }

        function fe(e, t) {
            return e.concat(t)
        }

        function le(e) {
            return Object.keys(e)
        }

        function ge(e, t) {
            return e[t]
        }
        var pe = ye("timeToRespond", (function(e, t) {
                return t < e
            })),
            be = ye("responseTimestamp", (function(e, t) {
                return t < e
            })),
            ve = ye("responseTimestamp", (function(e, t) {
                return e < t
            }));

        function ye(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function he(e) {
            return o()(e)
        }

        function me() {
            try {
                return C.getWindowSelf() !== C.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Ee(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Te() {
            try {
                return !!window.localStorage
            } catch (e) {
                H("Local storage api disabled")
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                a.default.aliasRegistry[e] = t.code, r(E({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(h.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(h.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = _;
        var r = n(45),
            a = n(7),
            i = n(3),
            b = n(22),
            o = n(24),
            c = n(27),
            u = n(46),
            s = n(4),
            v = n.n(s),
            d = n(8),
            y = n.n(d),
            f = n(9),
            l = n.n(f),
            g = n(5),
            h = n(0),
            p = n(2),
            m = n(17);

        function S(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function A(e) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function E() {
            return (E = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(l) {
            return E(new r.a(l.code), {
                getSpec: function() {
                    return Object.freeze(l)
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(p);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach((function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var r = l.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var f = Object(h.delayExecution)(i, r.length);
                                r.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function(e) {
                                                if (e) return "?".concat("object" === A(e) ? Object(h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: e,
                                                error: t
                                            }, void 0, E({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), E({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(h.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(l.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = l.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(h.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t = d[e.requestId];
                                            if (t) {
                                                var n = E(Object(b.a)(v.a.STATUS.GOOD, t), e);
                                                !(function(e, t) {
                                                    u[e] = !0, _(e, t, [o]) && a(e, t)
                                                })(t.adUnitCode, n)
                                            } else Object(h.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(l.code), Object(h.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i() {
                        e(), y.a.emit(v.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent)
                    }
                }
            });

            function g(e, t) {
                if (l.getUserSyncs) {
                    var n = i.config.getConfig("userSync.filterSettings"),
                        r = l.getUserSyncs({
                            iframeEnabled: !!(i.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(i.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
                        o.a.registerSync(e.type, l.code, e.url)
                    })))
                }
            }

            function p(e) {
                return !!l.isBidRequestValid(e) || (Object(h.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!i.config.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter((function(e) {
                return Object(h.deepAccess)(e, "mediaTypes.video.context") === p.a
            })).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                }))
            })).reduce(h.flatten, []).filter(h.uniques).forEach((function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(h.getDataFromLocalStorage)(i);
                    (!o || Object(h.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(g.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(h.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(h.setDataInLocalStorage)(i, JSON.stringify(t))
                            } catch (e) {
                                Object(h.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function() {
                            Object(h.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            })), e.call(this, t)
        }

        function _(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every((function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            })) ? "native" !== t.mediaType || Object(c.f)(t, n) ? "video" !== t.mediaType || Object(u.c)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            })(e, t, n)) || (Object(h.logError)(r("Banner bids require a width and height")), !1) : (Object(h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(h.logError)(r("Native bid missing some required properties.")), !1) : (Object(h.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(m.a)("checkAdUnitSetup").before(w)
    },
    10: function(e, t, n) {
        n(82), e.exports = n(14).Array.find
    },
    11: function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return "".concat(t, "[]=").concat(e)
                })).join("&") : "".concat(t, "=").concat(e[t])
            })).join("&")
        }
        t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : (function(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                        var n = t.split("="),
                            r = (function(e, t) {
                                return (function(e) {
                                    if (Array.isArray(e)) return e
                                })(e) || (function(e, t) {
                                    var n = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                    } catch (e) {
                                        i = !0, o = e
                                    } finally {
                                        try {
                                            r || null == c.return || c.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return n
                                })(e, t) || (function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                })()
                            })(n, 2),
                            i = r[0],
                            o = r[1];
                        return /\[\]$/.test(i) ? (i = i.replace("[]", ""), e[i] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
                    }), {}) : {}
                })(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url)
        }, t.b = function(e, t) {
            e.render(t)
        };
        var u = n(47),
            s = n(0),
            r = n(10),
            d = n.n(r);

        function i(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, !(function(t) {
                var e = pbjs.adUnits,
                    n = d()(e, (function(e) {
                        return e.code === t
                    }));
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            })(c) ? Object(u.b)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c))
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function() {
            return this.config
        }, i.prototype.setRender = function(e) {
            this.render = e
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    13: function(e, t, n) {
        var b = n(18),
            v = n(14),
            y = n(23),
            h = n(20),
            m = n(26),
            S = "prototype",
            A = function(e, t, n) {
                var r, i, o, a = e & A.F,
                    c = e & A.G,
                    u = e & A.S,
                    s = e & A.P,
                    d = e & A.B,
                    f = e & A.W,
                    l = c ? v : v[t] || (v[t] = {}),
                    g = l[S],
                    p = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && p && void 0 !== p[r]) && m(l, r) || (o = i ? p[r] : n[r], l[r] = c && "function" != typeof p[r] ? n[r] : d && i ? y(o, b) : f && p[r] == o ? (function(r) {
                    var e = function(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    };
                    return e[S] = r[S], e
                })(o) : s && "function" == typeof o ? y(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & A.R && g && !g[r] && h(g, r, o)))
            };
        A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128, e.exports = A
    },
    131: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", g, !1)
        };
        var r = n(8),
            o = n.n(r),
            a = n(27),
            i = n(4),
            d = (n.n(i), n(0)),
            c = n(37),
            u = n(10),
            f = n.n(u),
            l = n(12),
            s = i.EVENTS.BID_WON;

        function g(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = f()(c.a.getBidsReceived(), (function(e) {
                    return e.adId === n.adId
                }));
                if ("Prebid Request" === n.message && (function(e, t, n) {
                        var r = e.adId,
                            i = e.ad,
                            o = e.adUrl,
                            a = e.width,
                            c = e.height,
                            u = e.renderer,
                            s = e.cpm;
                        Object(l.c)(u) ? Object(l.b)(u, e) : r && (function(e) {
                            var r = e.adUnitCode,
                                i = e.width,
                                o = e.height;

                            function a(e) {
                                var t = (function(e) {
                                        return window.googletag ? (function(e) {
                                            return f()(window.googletag.pubads().getSlots().filter(Object(d.isSlotMatchingAdUnitCode)(e)), (function(e) {
                                                return e
                                            })).getSlotElementId()
                                        })(e) : window.apntag ? (function(e) {
                                            var t = window.apntag.getTag(e);
                                            return t && t.targetId
                                        })(e) : e
                                    })(r),
                                    n = document.getElementById(t);
                                return n && n.querySelector(e)
                            }["div", "iframe"].forEach((function(e) {
                                var t = a(e);
                                if (t) {
                                    var n = t.style;
                                    n.width = i + "px", n.height = o + "px"
                                } else Object(d.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            }))
                        }(e), n.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: Object(d.replaceAuctionPrice)(i, s),
                            adUrl: Object(d.replaceAuctionPrice)(o, s),
                            adId: r,
                            width: a,
                            height: c
                        }), t))
                    }(r, n.adServerDomain, e.source), c.a.addWinningBid(r), o.a.emit(s, r)), "Prebid Native" === n.message) {
                    if ("assetRequest" === n.action) {
                        var i = Object(a.c)(n, r);
                        return void e.source.postMessage(JSON.stringify(i), e.origin)
                    }
                    if ("click" === Object(a.b)(n, r)) return;
                    c.a.addWinningBid(r), o.a.emit(s, r)
                }
            }
        }
    },
    132: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(36);

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(t ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void(function(e) {
                    Object(o.logWarn)("DEBUG: " + e)
                })("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach((function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter((function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    })).forEach((function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    })))
                }));
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.config.getConfig("debugging", (function(e) {
            return l(e.debugging)
        }))
    },
    133: function(e, t, n) {
        n(134), n(67), n(143), n(145), n(149), n(152), n(154), e.exports = n(14).Set
    },
    134: function(e, t) {},
    135: function(e, t, n) {
        var u = n(42),
            s = n(32);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    136: function(e, t, n) {
        e.exports = n(20)
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(68),
            i = n(39),
            o = n(51),
            a = {};
        n(20)(a, n(15)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    138: function(e, t, n) {
        var a = n(19),
            c = n(25),
            u = n(139);
        e.exports = n(21) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    139: function(e, t, n) {
        var r = n(140),
            i = n(69);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = n)
    },
    140: function(e, t, n) {
        var a = n(26),
            c = n(44),
            u = n(59)(!1),
            s = n(50)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    141: function(e, t, n) {
        var r = n(18).document;
        e.exports = r && r.documentElement
    },
    142: function(e, t, n) {
        var r = n(26),
            i = n(41),
            o = n(50)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    143: function(e, t, n) {
        n(144);
        for (var r = n(18), i = n(20), o = n(28), a = n(15)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(34),
            i = n(70),
            o = n(28),
            a = n(44);
        e.exports = n(49)(Array, "Array", (function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(146),
            i = n(78);
        e.exports = n(148)("Set", (function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }), {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    146: function(e, t, n) {
        "use strict";
        var a = n(19).f,
            c = n(68),
            u = n(71),
            s = n(23),
            d = n(72),
            f = n(38),
            r = n(49),
            i = n(70),
            o = n(147),
            l = n(21),
            g = n(77).fastKey,
            p = n(78),
            b = l ? "_s" : "size",
            v = function(e, t) {
                var n, r = g(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            };
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e((function(e, t) {
                    d(e, i, o, "_i"), e._t = o, e._i = c(null), e._f = void 0, e._l = void 0, e[b] = 0, null != t && f(t, n, e[r], e)
                }));
                return u(i.prototype, {
                    clear: function() {
                        for (var e = p(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[b] = 0
                    },
                    delete: function(e) {
                        var t = p(this, o),
                            n = v(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[b]--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        p(this, o);
                        for (var t, n = s(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                            for (n(t.v, t.k, this); t && t.r;) t = t.p
                    },
                    has: function(e) {
                        return !!v(p(this, o), e)
                    }
                }), l && a(i.prototype, "size", {
                    get: function() {
                        return p(this, o)[b]
                    }
                }), i
            },
            def: function(e, t, n) {
                var r, i, o = v(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[b]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: v,
            setStrong: function(e, n, t) {
                r(e, n, (function(e, t) {
                    this._t = p(e, n), this._k = t, this._l = void 0
                }), (function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }), t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(18),
            i = n(14),
            o = n(19),
            a = n(21),
            c = n(15)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    148: function(e, t, n) {
        "use strict";
        var f = n(18),
            l = n(13),
            g = n(77),
            p = n(30),
            b = n(20),
            v = n(71),
            y = n(38),
            h = n(72),
            m = n(16),
            S = n(51),
            A = n(19).f,
            E = n(40)(0),
            T = n(21);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !p((function() {
                (new c).entries().next()
            }))) ? (c = e((function(e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && y(t, i, e[u], e)
            })), E("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, (function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                }))
            })), o || A(c.prototype, "size", {
                get: function() {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), v(c.prototype, t), g.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    149: function(e, t, n) {
        var r = n(13);
        r(r.P + r.R, "Set", {
            toJSON: n(150)("Set")
        })
    },
    15: function(e, t, n) {
        var r = n(57)("wks"),
            i = n(43),
            o = n(18).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    150: function(e, t, n) {
        var r = n(76),
            i = n(151);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    151: function(e, t, n) {
        var r = n(38);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    152: function(e, t, n) {
        n(153)("Set")
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(13);
        e.exports = function(e) {
            r(r.S, e, { of: function() {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    154: function(e, t, n) {
        n(155)("Set")
    },
    155: function(e, t, n) {
        "use strict";
        var r = n(13),
            a = n(53),
            c = n(23),
            u = n(38);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e) {
                    var t, n, r, i, o = arguments[1];
                    return a(this), (t = void 0 !== o) && a(o), null == e ? new this : (n = [], t ? (r = 0, i = c(o, arguments[2], 2), u(e, !1, (function(e) {
                        n.push(i(e, r++))
                    }))) : u(e, !1, n.push, n), new this(n))
                }
            })
        }
    },
    156: function(e, t, n) {
        n(67), n(157), e.exports = n(14).Array.from
    },
    157: function(e, t, n) {
        "use strict";
        var l = n(23),
            r = n(13),
            g = n(41),
            p = n(73),
            b = n(74),
            v = n(33),
            y = n(158),
            h = n(75);
        r(r.S + r.F * !n(159)((function(e) {
            Array.from(e)
        })), "Array", {
            from: function(e) {
                var t, n, r, i, o = g(e),
                    a = "function" == typeof this ? this : Array,
                    c = arguments.length,
                    u = 1 < c ? arguments[1] : void 0,
                    s = void 0 !== u,
                    d = 0,
                    f = h(o);
                if (s && (u = l(u, 2 < c ? arguments[2] : void 0, 2)), null == f || a == Array && b(f))
                    for (n = new a(t = v(o.length)); d < t; d++) y(n, d, s ? u(o[d], d) : o[d]);
                else
                    for (i = f.call(o), n = new a; !(r = i.next()).done; d++) y(n, d, s ? p(i, u, [r.value, d], !0) : r.value);
                return n.length = d, n
            }
        })
    },
    158: function(e, t, n) {
        "use strict";
        var r = n(19),
            i = n(39);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    159: function(e, t, n) {
        var o = n(15)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function() {
                a = !0
            }, Array.from(r, (function() {
                throw 2
            }))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    }
                }, r[o] = function() {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    16: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    17: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        })), t.c = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        };
        var r = n(89),
            i = n.n(r),
            o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    18: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    19: function(e, t, n) {
        var r = n(25),
            i = n(83),
            o = n(84),
            a = Object.defineProperty;
        t.f = n(21) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return a
        }));
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function(e, t, n) {
        var r = n(19),
            i = n(39);
        e.exports = n(21) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    21: function(e, t, n) {
        e.exports = !n(30)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    22: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function() {
                return r
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    23: function(e, t, n) {
        var o = n(53);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    24: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var s = n(0),
            d = n(3),
            r = n(9),
            f = n.n(r);

        function l(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        d.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var i = !s.isSafariBrowser() && s.cookiesAreEnabled(),
            o = (function(e) {
                var r = {},
                    i = {
                        image: [],
                        iframe: []
                    },
                    t = !1,
                    o = {},
                    a = {
                        image: !1,
                        iframe: !1
                    },
                    c = e.config;

                function n() {
                    if (c.syncEnabled && e.browserSupportsCookies && (c.enableOverride || !t)) {
                        try {
                            (c.pixelEnabled || a.image) && s.shuffle(i.image).forEach((function(e) {
                                var t = l(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), s.triggerPixel(r)
                            })), (c.iframeEnabled || a.iframe) && s.shuffle(i.iframe).forEach((function(e) {
                                var t = l(e, 2),
                                    n = t[0],
                                    r = t[1];
                                s.logMessage("Invoking iframe user sync for bidder: ".concat(n)), s.insertUserSyncIframe(r)
                            }))
                        } catch (e) {
                            return s.logError("Error firing user syncs", e)
                        }
                        i = {
                            image: [],
                            iframe: []
                        }, t = !0
                    }
                }

                function u(e, t) {
                    var n = c.filterSettings;
                    if (function(e, t) {
                            if (e.all && e[t]) return s.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                            var n = e.all ? e.all : e[t],
                                r = e.all ? "all" : t;
                            if (!n) return !1;
                            var i = n.filter,
                                o = n.bidders;
                            return i && "include" !== i && "exclude" !== i ? (s.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                return s.isStr(e) && "*" !== e
                            }))) || (s.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                        }(n, e)) {
                        a[e] = !0;
                        var r = n.all ? n.all : n[e],
                            i = "*" === r.bidders ? [t] : r.bidders;
                        return {
                            include: function(e, t) {
                                return !f()(e, t)
                            },
                            exclude: function(e, t) {
                                return f()(e, t)
                            }
                        }[r.filter || "include"](i, t)
                    }
                    return !1
                }
                return d.config.getConfig("userSync", (function(e) {
                    c = g(c, e.userSync)
                })), r.registerSync = function(e, t, n) {
                    return c.syncEnabled && s.isArray(i[e]) ? t ? 0 !== c.syncsPerBidder && Number(o[t]) >= c.syncsPerBidder ? s.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : r.canBidderRegisterSync(e, t) ? (i[e].push([t, n]), void(o = (function(e, t) {
                        return e[t] ? e[t] += 1 : e[t] = 1, e
                    })(o, t))) : s.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : s.logWarn("Bidder is required for registering sync") : s.logWarn('User sync type "'.concat(e, '" not supported'))
                }, r.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(n, Number(e));
                    n()
                }, r.triggerUserSyncs = function() {
                    c.enableOverride && r.syncUsers()
                }, r.canBidderRegisterSync = function(e, t) {
                    if (c.filterSettings) {
                        if (u(e, t)) return !1
                    } else {
                        if (c.enabledBidders && c.enabledBidders.length && c.enabledBidders.indexOf(t) < 0) return !1;
                        if ("iframe" === e && !c.iframeEnabled && !a.iframe) return !1;
                        if ("image" === e && !c.pixelEnabled && !a.image) return !1
                    }
                    return !0
                }, r
            })({
                config: d.config.getConfig("userSync"),
                browserSupportsCookies: i
            })
    },
    25: function(e, t, n) {
        var r = n(16);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    26: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return o
        })), n.d(t, "a", (function() {
            return s
        })), t.g = function(e) {
            if (e && e.type && (function(e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                })(e.type)) return d[e.type];
            return e
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return c()(o, e)
            }))
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (o[t] = n)
            })), o
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach((function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            })), i
        };
        var a = n(0),
            r = n(9),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(4),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map((function(e) {
                return u.NATIVE_KEYS[e]
            })),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    28: function(e, t) {
        e.exports = {}
    },
    29: function(qy, ry) {
        var sy;
        sy = (function() {
            return this
        })();
        try {
            sy = sy || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (sy = window)
        }
        qy.exports = sy
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "RANDOM", (function() {
            return a
        })), t.newConfig = c, n.d(t, "config", (function() {
            return u
        }));
        var s = n(52),
            r = n(10),
            d = n.n(r),
            i = n(9),
            o = n.n(i),
            f = n(17);

        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = n(0),
            b = !1,
            v = 3e3,
            y = window.location.origin,
            h = !0,
            m = !1,
            S = !1,
            A = 400,
            a = "random",
            E = {};
        E[a] = !0, E.fixed = !0;
        var T = a,
            O = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            I = "*";

        function c() {
            var a, c, r = [];

            function e() {
                a = {};
                var n = {
                    _debug: b,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: v,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: y,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _priceGranularity: O.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : O.MEDIUM : "object" === g(e) && (this._customPriceBucket = e, this._priceGranularity = O.CUSTOM, p.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _mediaTypePriceGranularity: {},
                    get mediaTypePriceGranularity() {
                        return this._mediaTypePriceGranularity
                    },
                    set mediaTypePriceGranularity(n) {
                        var r = this;
                        this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === g(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e
                        }), {})
                    },
                    _sendAllBids: h,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _useBidCache: S,
                    get useBidCache() {
                        return this._useBidCache
                    },
                    set useBidCache(e) {
                        this._useBidCache = e
                    },
                    _bidderSequence: T,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        E[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                    },
                    _timeoutBuffer: A,
                    get timeoutBuffer() {
                        return this._timeoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e
                    },
                    _disableAjaxTimeout: m,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e
                    }
                };

                function i(t) {
                    return d()(Object.keys(O), (function(e) {
                        return t === O[e]
                    }))
                }

                function o(e) {
                    if (!e) return p.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === g(e) && !Object(s.b)(e)) return p.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                c && u(Object.keys(c).reduce((function(e, t) {
                    return c[t] !== n[t] && (e[t] = n[t] || {}), e
                }), {})), c = n
            }
            var t = Object(f.b)("async", (function(n) {
                if ("object" === g(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === g(a[e]) && "object" === g(t) && (t = l({}, a[e], t)), r[e] = c[e] = t
                    })), u(r)
                } else p.logError("setConfig options must be an object")
            }));

            function u(t) {
                var n = Object.keys(t);
                r.filter((function(e) {
                    return o()(n, e.topic)
                })).forEach((function(e) {
                    e.callback(function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, e.topic, t[e.topic]))
                })), r.filter((function(e) {
                    return e.topic === I
                })).forEach((function(e) {
                    return e.callback(t)
                }))
            }
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? p.deepAccess(c, e) : c
                    }
                    return function(e, t) {
                        var n = t;
                        return "string" != typeof e && (n = e, e = I), "function" == typeof n ? (r.push({
                            topic: e,
                            callback: n
                        }), function() {
                            r.splice(r.indexOf(t), 1)
                        }) : void p.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === g(a) ? (l(a, e), l(c, e)) : p.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        var u = c()
    },
    30: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    31: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    32: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    33: function(e, t, n) {
        var r = n(42),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    34: function(e, t) {
        e.exports = function() {}
    },
    35: function(e, t, n) {
        n(129), e.exports = n(14).Array.findIndex
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return N
        })), n.d(t, "a", (function() {
            return k
        })), t.h = function(e) {
            var t, a, u, s, c = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                d = e.auctionId,
                f = c,
                l = o,
                g = n,
                p = [],
                b = [],
                v = [],
                y = d || j.generateUUID(),
                h = r,
                m = i,
                S = [],
                A = new Set;

            function E() {
                return {
                    auctionId: y,
                    timestamp: t,
                    auctionEnd: a,
                    auctionStatus: u,
                    adUnits: f,
                    adUnitCodes: g,
                    labels: l,
                    bidderRequests: p,
                    noBids: v,
                    bidsReceived: b,
                    winningBids: S,
                    timeout: m
                }
            }

            function T(e, t) {
                if (t && clearTimeout(s), null != h) {
                    var n = [];
                    e && (j.logMessage("Auction ".concat(y, " timedOut")), (n = (function(e, t) {
                        return e.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return !t.has(e.bidder)
                            }))
                        })).reduce(w.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        }))
                    })(p, A)).length && U.emit(R.EVENTS.BID_TIMEOUT, n));
                    try {
                        u = k, a = Date.now(), U.emit(R.EVENTS.AUCTION_END, E());
                        var r = g,
                            i = b.filter(j.bind.call(w.adUnitsFilter, this, r)).reduce(L, {});
                        h.apply(pbjs, [i, e])
                    } catch (e) {
                        j.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && B.callTimedOutBidders(c, n, m);
                        var o = _.config.getConfig("userSync") || {};
                        o.enableOverride || C(o.syncDelay)
                    }
                    h = null
                }
            }

            function O() {
                j.logInfo("Bids Received for Auction with id: ".concat(y), b), u = k, T(!1, !0)
            }

            function I(e) {
                A.add(e)
            }
            return {
                addBidReceived: function(e) {
                    b = b.concat(e)
                },
                addNoBid: function(e) {
                    v = v.concat(e)
                },
                executeCallback: T,
                callBids: function() {
                    var n = this;
                    u = D, t = Date.now();
                    var i = B.makeBidRequests(f, t, y, m, l);
                    j.logInfo("Bids Requested for Auction with id: ".concat(y), i), i.forEach((function(e) {
                        var t;
                        t = e, p = p.concat(t)
                    }));
                    var o = {};
                    if (i.length < 1) j.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = T.bind(null, !0), t = setTimeout(e, m), s = t, u = N, U.emit(R.EVENTS.AUCTION_INIT, E());
                                var r = W(O, n);
                                B.callBids(f, i, (function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    G.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }), r.adapterDone, {
                                    request: function(e, t) {
                                        c(P, t), c(o, e), M[e] || (M[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (M[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        P[e]--, q[0] && a(q[0]) && q.shift()
                                    }
                                }, m, I)
                            }
                        };
                        a(e) || (j.logWarn("queueing auction due to limited endpoint capacity"), q.push(e))
                    }

                    function a(e) {
                        var r = !0,
                            i = _.config.getConfig("maxRequestsPerOrigin") || x;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === R.S2S.SRC ? "s2s" : e.bidderCode;
                            return M[n] && (!1 === M[n].SRA && (t = Math.min(e.bids.length, i)), P[M[n].origin] + t > i && (r = !1)), !r
                        })), r && e.run(), r
                    }

                    function c(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    S = S.concat(e), B.callBidWonBidder(e.bidder, e, c)
                },
                setBidTargeting: function(e) {
                    B.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return y
                },
                getAuctionStatus: function() {
                    return u
                },
                getAdUnits: function() {
                    return f
                },
                getAdUnitCodes: function() {
                    return g
                },
                getBidRequests: function() {
                    return p
                },
                getBidsReceived: function() {
                    return b
                },
                getNoBids: function() {
                    return v
                }
            }
        }, n.d(t, "c", (function() {
            return G
        })), t.f = d, t.d = v, n.d(t, "e", (function() {
            return h
        })), t.g = S;
        var w = n(0),
            s = n(11),
            f = n(52),
            a = n(27),
            o = n(64),
            l = n(12),
            _ = n(3),
            r = n(24),
            i = n(17),
            c = n(10),
            g = n.n(c),
            u = n(46);

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var C = r.a.syncUsers,
            j = n(0),
            B = n(7).default,
            U = n(8),
            R = n(4),
            D = "started",
            N = "inProgress",
            k = "completed";
        U.on(R.EVENTS.BID_ADJUSTMENT, (function(e) {
            !(function(e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, b({}, e))
                } catch (e) {
                    j.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            })(e)
        }));
        var x = 4,
            P = {},
            M = {},
            q = [];
        var G = Object(i.b)("async", (function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }), "addBidResponse");

        function W(t, o) {
            var a = 0,
                n = false,
                r = new Set,
                c = {};

            function u() {
                a--;
                if (n && a === 0) {
                    t()
                }
            }

            function e(e, t) {
                var n = this;
                c[t.requestId] = true, a++;
                var r = o.getAuctionId(),
                    i = m({
                        adUnitCode: e,
                        bid: t,
                        bidderRequest: n,
                        auctionId: r
                    });
                if (i.mediaType === "video") {
                    y(o, i, n, u)
                } else {
                    v(o, i);
                    u()
                }
            }

            function i() {
                var e = this;
                if (r.add(this), n = o.getBidRequests().every((function(e) {
                        return r.has(e)
                    })), this.bids.forEach((function(e) {
                        c[e.bidId] || (o.addNoBid(e), U.emit(R.EVENTS.NO_BID, e))
                    })), n && 0 === a) {
                    t()
                }
            }
            return {
                addBidResponse: e,
                adapterDone: i
            }
        }

        function d(e, t) {
            t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function v(e, t) {
            var n = e.getBidRequests(),
                r = g()(n, (function(e) {
                    return e.bidderCode === t.bidderCode
                }));
            !(function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = g()(e.bids, (function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }));
                    n = (function(e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = S(t.mediaType, e);
                            A(r, o, t), e && i[e] && i[e][R.JSON_MAPPING.ADSERVER_TARGETING] && (A(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = b({}, r, Object(a.d)(t, n)));
                        return r
                    })(t.bidderCode, t, r)
                }
                t.adserverTargeting = b(t.adserverTargeting || {}, n)
            })(t, r), U.emit(R.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t)
        }

        function y(e, t, n, r) {
            var i = true,
                o = Object(w["getBidRequest"])(t.requestId, [n]),
                a = o && Object(w["deepAccess"])(o, "mediaTypes.video"),
                c = a && Object(w["deepAccess"])(a, "context");
            if (_["config"].getConfig("cache.url") && c !== u["a"]) {
                if (!t.videoCacheKey) {
                    i = false;
                    h(e, t, r, o)
                } else if (!t.vastUrl) {
                    j.logError("videoCacheKey specified but not required vastUrl for video bid");
                    i = false
                }
            }
            if (i) {
                v(e, t);
                r()
            }
        }
        var h = Object(i.b)("async", (function(n, r, i, e) {
            Object(o.b)([r], (function(e, t) {
                e ? (j.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (j.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), v(n, r), i())
            }))
        }), "callPrebidCache");

        function m(e) {
            var t = e.adUnitCode,
                n = e.bid,
                r = e.bidderRequest,
                i = e.auctionId,
                o = r.start,
                a = b({}, n, {
                    auctionId: i,
                    responseTimestamp: Object(w["timestamp"])(),
                    requestTimestamp: o,
                    cpm: parseFloat(n.cpm) || 0,
                    bidder: n.bidderCode,
                    adUnitCode: t
                });
            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, U.emit(R.EVENTS.BID_ADJUSTMENT, a);
            var c = r.bids && g()(r.bids, (function(e) {
                    return e.adUnitCode == t
                })),
                u = c && c.renderer;
            if (u && u.url) {
                a.renderer = l["a"].install({
                    url: u.url
                });
                a.renderer.setRender(u.render)
            }
            var s = _["config"].getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                d = Object(f["a"])(a.cpm, p(s) === "object" ? s : _["config"].getConfig("customPriceBucket"), _["config"].getConfig("currency.granularityMultiplier"));
            return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
        }

        function S(e, t) {
            function n(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    } : function(e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var r = R.TARGETING_KEYS,
                i = _.config.getConfig("mediaTypePriceGranularity.".concat(e)),
                o = "string" == typeof e && i ? "string" == typeof i ? i : "custom" : _.config.getConfig("priceGranularity"),
                a = pbjs.bidderSettings;
            if (a[R.JSON_MAPPING.BD_SETTING_STANDARD] || (a[R.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] || (a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] = [n(r.BIDDER, "bidderCode"), n(r.AD_ID, "adId"), n(r.PRICE_BUCKET, (function(e) {
                    return o === R.GRANULARITY_OPTIONS.AUTO ? e.pbAg : o === R.GRANULARITY_OPTIONS.DENSE ? e.pbDg : o === R.GRANULARITY_OPTIONS.LOW ? e.pbLg : o === R.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : o === R.GRANULARITY_OPTIONS.HIGH ? e.pbHg : o === R.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                })), n(r.SIZE, "size"), n(r.DEAL, "dealId"), n(r.SOURCE, "source"), n(r.FORMAT, "mediaType")]), "video" === e) {
                var c = a[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING];
                if ([r.UUID, r.CACHE_ID].forEach((function(t) {
                        void 0 === g()(c, (function(e) {
                            return e.key === t
                        })) && c.push(n(t, "videoCacheKey"))
                    })), _.config.getConfig("cache.url") && (!t || !1 !== j.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(_.config.getConfig("cache.url"));
                    void 0 === g()(c, (function(e) {
                        return e.key === r.CACHE_HOST
                    })) && c.push(n(r.CACHE_HOST, (function(e) {
                        return j.deepAccess(e, "adserverTargeting.".concat(r.CACHE_HOST)) ? e.adserverTargeting[r.CACHE_HOST] : u.hostname
                    })))
                }
            }
            return a[R.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function A(r, i, o) {
            var e = i[R.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), j._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && j.logWarn("The key: " + t + " is getting ovewritten"), j.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    j.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== R.TARGETING_KEYS.DEAL || !j.isEmptyStr(n) && null != n ? r[t] = n : j.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function L(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }));
        var r = n(0),
            u = n(36),
            i = n(10),
            o = n.n(i),
            a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, (function(e) {
                return e.getAuctionId() === t.auctionId
            }));
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function() {
            return s.map((function(e) {
                return e.getWinningBids()
            })).reduce(r.flatten, [])
        }, c.getBidsRequested = function() {
            return s.map((function(e) {
                return e.getBidRequests()
            })).reduce(r.flatten, [])
        }, c.getNoBids = function() {
            return s.map((function(e) {
                return e.getNoBids()
            })).reduce(r.flatten, [])
        }, c.getBidsReceived = function() {
            return s.map((function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived()
            })).reduce(r.flatten, []).filter((function(e) {
                return e
            }))
        }, c.getAdUnits = function() {
            return s.map((function(e) {
                return e.getAdUnits()
            })).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function() {
            return s.map((function(e) {
                return e.getAdUnitCodes()
            })).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function(e) {
            var t = e.adUnits,
                n = e.adUnitCodes,
                r = e.callback,
                i = e.cbTimeout,
                o = e.labels,
                a = e.auctionId,
                c = Object(u.h)({
                    adUnits: t,
                    adUnitCodes: n,
                    callback: r,
                    cbTimeout: i,
                    labels: o,
                    auctionId: a
                });
            return (function(e) {
                s.push(e)
            })(c), c
        }, c.findBidByAdId = function(t) {
            return o()(s.map((function(e) {
                return e.getBidsReceived()
            })).reduce(r.flatten, []), (function(e) {
                return e.adId === t
            }))
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.g)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, (function(e) {
                    return e.getAuctionId() === n.auctionId
                }));
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId()
        }, c)
    },
    38: function(e, t, n) {
        var l = n(23),
            g = n(73),
            p = n(74),
            b = n(25),
            v = n(33),
            y = n(75),
            h = {},
            m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                    return e
                } : y(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (p(s)) {
                for (o = v(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = g(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    39: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered"
            }
        }
    },
    40: function(e, t, n) {
        var m = n(23),
            S = n(55),
            A = n(41),
            E = n(33),
            r = n(85);
        e.exports = function(f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                b = 4 == f,
                v = 6 == f,
                y = 5 == f || v,
                h = e || r;
            return function(e, t, n) {
                for (var r, i, o = A(e), a = S(o), c = m(t, n, 3), u = E(a.length), s = 0, d = l ? h(e, u) : g ? h(e, 0) : void 0; s < u; s++)
                    if ((y || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (b) return !1;
                return v ? -1 : p || b ? b : d
            }
        }
    },
    41: function(e, t, n) {
        var r = n(32);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    42: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    43: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    44: function(e, t, n) {
        var r = n(55),
            i = n(32);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    45: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    46: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), t.c = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i)
        }, n.d(t, "b", (function() {
            return u
        }));
        n(7);
        var o = n(0),
            i = n(3),
            r = n(9),
            a = (n.n(r), n(17)),
            c = "outstream";
        var u = Object(a.b)("sync", (function(e, t, n, r) {
            return !t || n && r !== c ? i.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }), "checkVideoBidSetup")
    },
    47: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, (function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : u(t, e)
        };
        var r = n(9),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    48: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    49: function(e, t, n) {
        "use strict";
        var m = n(58),
            S = n(13),
            A = n(136),
            E = n(20),
            T = n(28),
            O = n(137),
            I = n(51),
            w = n(142),
            _ = n(15)("iterator"),
            C = !([].keys && "next" in [].keys()),
            j = "values",
            B = function() {
                return this
            };
        e.exports = function(e, t, n, r, i, o, a) {
            O(n, t, r);
            var c, u, s, d = function(e) {
                    if (!C && e in p) return p[e];
                    switch (e) {
                        case "keys":
                        case j:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                f = t + " Iterator",
                l = i == j,
                g = !1,
                p = e.prototype,
                b = p[_] || p["@@iterator"] || i && p[i],
                v = b || d(i),
                y = i ? l ? d("entries") : v : void 0,
                h = "Array" == t && p.entries || b;
            if (h && (s = w(h.call(new e))) !== Object.prototype && s.next && (I(s, f, !0), m || "function" == typeof s[_] || E(s, _, B)), l && b && b.name !== j && (g = !0, v = function() {
                    return b.call(this)
                }), m && !a || !C && !g && p[_] || E(p, _, v), T[t] = v, T[f] = B, i)
                if (c = {
                        values: l ? v : d(j),
                        keys: o ? v : d("keys"),
                        entries: y
                    }, a)
                    for (u in c) u in p || A(p, u, c[u]);
                else S(S.P + S.F * (C || g), t, c);
            return c
        }
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), t.b = i;
        var l = n(11),
            g = n(3);

        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var v = n(0),
            y = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            v.logMessage("xhr success")
                        },
                        error: function(e) {
                            v.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === y) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, g.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            v.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        p(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), g.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), v._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    v.logError("xhr construction", e)
                }
            }
        }
    },
    50: function(e, t, n) {
        var r = n(57)("keys"),
            i = n(43);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    },
    51: function(e, t, n) {
        var r = n(19).f,
            i = n(26),
            o = n(15)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    52: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        })), n.d(t, "b", (function() {
            return p
        }));
        var r = n(10),
            a = n.n(r),
            i = n(0),
            s = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            f = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : g(e, o, n),
                med: "" === r ? "" : g(e, c, n),
                high: "" === r ? "" : g(e, u, n),
                auto: "" === r ? "" : g(e, f, n),
                dense: "" === r ? "" : g(e, d, n),
                custom: "" === r ? "" : g(e, t, n)
            }
        }

        function g(n, e, r) {
            var i = "";
            if (!p(e)) return i;
            var o = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                t = a()(e.buckets, (function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return t && (i = (function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    c = (e * a - o * a) / (i * a),
                    u = Math.floor(c) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            })(n, t, r)), i
        }

        function p(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
    },
    53: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    54: function(e, t, n) {
        var r = n(16),
            i = n(18).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    55: function(e, t, n) {
        var r = n(31);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    56: function(e, t, n) {
        var r = n(31);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    57: function(e, t, n) {
        var r = n(14),
            i = n(18),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(58) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    58: function(e, t) {
        e.exports = !0
    },
    586: function(e, t, n) {
        e.exports = n(65)
    },
    59: function(e, t, n) {
        var u = n(44),
            s = n(33),
            d = n(88);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
    },
    60: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(g.isPlainObject)(c) ? Object(g.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(g.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter((function(e) {
                return s.sizesSupported[e]
            })));
            var f = Object.keys(c),
                l = {
                    active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < Object(g.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some((function(e) {
                        return s.labels[e]
                    })) || n.some((function(e) {
                        return p()(a, e)
                    }))) || i && n.reduce((function(e, t) {
                        return e ? s.labels[t] || p()(a, t) : e
                    }), !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            g = n(0),
            i = n(9),
            p = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function v(e) {
            return e.reduce((function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(g.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(g.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                        return (r[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }))
                    })))
                } else Object(g.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }), {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.config.getConfig("sizeConfig", (function(e) {
            return (function(e) {
                b = e
            })(e.sizeConfig)
        }))
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
            }
        }
    },
    62: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", (function() {
            return i
        }));
        var c = n(0);

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = (function() {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    })(),
                    t = (function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    })();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = (function(e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c || (c = r);
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c || (c = o)) : a ? (n.push(a), c || (c = a)) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        })(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    63: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "TARGETING_KEY_PB_CAT_DUR", (function() {
            return y
        })), n.d(t, "TARGETING_KEY_CACHE_ID", (function() {
            return h
        })), t.callPrebidCacheHook = T, t.checkAdUnitSetupHook = O, t.checkVideoBidSetupHook = I, t.adpodSetConfig = w, t.initAdpodHooks = function() {
            Object(o.c)(d.e, T), Object(o.c)(r.checkAdUnitSetup, O), Object(o.c)(i.b, I)
        }, t.callPrebidCacheAfterAuction = function(i, o) {
            Object(f.b)(i, (function(e, t) {
                if (e) o(e, null);
                else {
                    for (var n = [], r = 0; r < t.length; r++) "" !== t[r] && n.push(i[r]);
                    o(null, n)
                }
            }))
        }, t.sortByPricePerSecond = function(e, t) {
            if (e.cpm / e.video.durationBucket < t.cpm / t.video.durationBucket) return 1;
            if (e.cpm / e.video.durationBucket > t.cpm / t.video.durationBucket) return -1;
            return 0
        };
        var s = n(0),
            d = n(36),
            r = n(65),
            i = n(46),
            o = n(17),
            f = n(64),
            c = n(3),
            u = n(2),
            a = n(133),
            l = n.n(a),
            g = n(10),
            p = n.n(g);

        function b(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var v = n(156),
            y = "hb_pb_cat_dur",
            h = "hb_cache_id",
            m = 50,
            S = 5,
            A = (function() {
                var t = {};

                function n(e) {
                    t[e] = {}, t[e].bidStorage = new l.a, t[e].queueDispatcher = (function(a) {
                        var c, u = 1;
                        return function(e, t, n, r) {
                            var i = this,
                                o = function() {
                                    (function(i, o, a) {
                                        (function(e) {
                                            for (var t = 0; t < e.length; t++) A.removeBid(e[t])
                                        })(o), Object(f.b)(o, (function(e, t) {
                                            if (e) {
                                                s.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid(s) must be discarded."));
                                                for (var n = 0; n < o.length; n++) Object(d.f)(i, o[n])
                                            } else
                                                for (var r = 0; r < t.length; r++) "" !== t[r].uuid ? Object(d.d)(i, o[r]) : s.logInfo("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(o[r].customCacheKey, ". Bid was: "), o[r]), a()
                                        }))
                                    }).call(i, e, t, n)
                                };
                            clearTimeout(c), r ? u = 1 : u === S ? (u = 1, o()) : (u++, c = setTimeout(o, a))
                        }
                    })(m), t[e].initialCacheKey = s.generateUUID()
                }
                return {
                    addBid: function(e) {
                        t[e.auctionId] || n(e.auctionId), t[e.auctionId].bidStorage.add(e)
                    },
                    removeBid: function(e) {
                        t[e.auctionId].bidStorage.delete(e)
                    },
                    getBids: function(e) {
                        return t[e.auctionId] && t[e.auctionId].bidStorage.values()
                    },
                    getQueueDispatcher: function(e) {
                        return t[e.auctionId] && t[e.auctionId].queueDispatcher
                    },
                    setupInitialCacheKey: function(e) {
                        t[e.auctionId] || (t[e.auctionId] = {}, t[e.auctionId].initialCacheKey = s.generateUUID())
                    },
                    getInitialCacheKey: function(e) {
                        return t[e.auctionId] && t[e.auctionId].initialCacheKey
                    }
                }
            })();

        function E(e, t) {
            var n, r = A.getInitialCacheKey(e),
                i = s.deepAccess(e, "video.durationBucket"),
                o = e.cpm.toFixed(2);
            if (t) {
                var a = s.deepAccess(e, "meta.adServerCatId");
                n = "".concat(o, "_").concat(a, "_").concat(i, "s")
            } else n = "".concat(o, "_").concat(i, "s");
            e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[y] = n, e.adserverTargeting[h] = r, e.videoCacheKey = r, e.customCacheKey = "".concat(n, "_").concat(r)
        }

        function T(e, t, n, r, i) {
            var o = s.deepAccess(i, "mediaTypes.video");
            if (o && o.context === u.a) {
                var a = c.config.getConfig("adpod.brandCategoryExclusion");
                !s.deepAccess(n, "meta.adServerCatId") && a && (s.logWarn("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), r()), !1 === c.config.getConfig("adpod.deferCaching") ? (A.addBid(n), E(n, a), (function(e, t, n) {
                    var r = A.getBids(t);
                    if (r) {
                        var i = v(r),
                            o = A.getQueueDispatcher(t),
                            a = !(e.getAuctionStatus() === d.b);
                        o(e, i, n, a)
                    } else s.logWarn("Attempted to cache a bid from an unknown auction. Bid:", t)
                })(t, n, r)) : (A.setupInitialCacheKey(n), E(n, a), Object(d.d)(t, n), r())
            } else e.call(this, t, n, r, i)
        }

        function O(e, t) {
            t = t.filter((function(e) {
                var t = s.deepAccess(e, "mediaTypes"),
                    n = s.deepAccess(t, "video");
                if (n && n.context === u.a) {
                    if (1 < Object.keys(t).length) return s.logWarn("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
                    var r = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
                        i = !(!n.playerSize || !s.isArrayOfNums(n.playerSize)),
                        o = !!(n.adPodDurationSec && s.isNumber(n.adPodDurationSec) && 0 < n.adPodDurationSec),
                        a = !!(n.durationRangeSec && s.isArrayOfNums(n.durationRangeSec) && n.durationRangeSec.every((function(e) {
                            return 0 < e
                        })));
                    if (!i || !o || !a) return r += i ? "" : "\nmediaTypes.video.playerSize", r += o ? "" : "\nmediaTypes.video.adPodDurationSec", r += a ? "" : "\nmediaTypes.video.durationRangeSec", s.logWarn(r), !1
                }
                return !0
            })), e.call(this, t)
        }

        function I(e, t, n, r, i) {
            if (i === u.a) {
                var o = !0;
                if (c.config.getConfig("adpod.brandCategoryExclusion") && !s.deepAccess(t, "meta.iabSubCatId") && (o = !1), s.deepAccess(t, "video"))
                    if (s.deepAccess(t, "video.context") && t.video.context === u.a || (o = !1), !s.deepAccess(t, "video.durationSeconds") || t.video.durationSeconds <= 0) o = !1;
                    else(function(e, t) {
                        var n = s.deepAccess(t, "video.durationSeconds"),
                            r = s.deepAccess(e, "mediaTypes.video"),
                            i = r.durationRangeSec;
                        if (i.sort((function(e, t) {
                                return e - t
                            })), r.requireExactDuration) {
                            if (!p()(i, (function(e) {
                                    return e === n
                                }))) return s.logWarn("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
                            t.video.durationBucket = n
                        } else {
                            var o = Math.max.apply(Math, b(i));
                            if (!(n <= o + 2)) return s.logWarn("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
                            var a = p()(i, (function(e) {
                                return n <= e + 2
                            }));
                            t.video.durationBucket = a
                        }
                        return !0
                    })(n, t) || (o = !1);
                c.config.getConfig("cache.url") || !t.vastXml || t.vastUrl || (s.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), o = !1), e.bail(o)
            } else e.call(this, t, n, r, i)
        }

        function w(e) {
            void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && 0 < e.bidQueueTimeDelay ? m = e.bidQueueTimeDelay : s.logWarn("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(m))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && 0 < e.bidQueueSizeLimit ? S = e.bidQueueSizeLimit : s.logWarn("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(S)))
        }
        c.config.getConfig("adpod", (function(e) {
            return w(e.adpod)
        }))
    },
    64: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            Object(r.a)(i.config.getConfig("cache.url"), (function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            })(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function(e) {
            return "".concat(i.config.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(5),
            i = n(3);

        function o(e) {
            var t = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (function(e, t) {
                    var n = t ? "<![CDATA[".concat(t, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                })(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (t.key = e.customCacheKey), t
        }
    },
    65: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", (function() {
            return G
        }));
        var r = n(48),
            c = n(0),
            i = n(131),
            o = n(24),
            a = n(47),
            d = n(3),
            v = n(37),
            f = n(66),
            u = n(17),
            s = n(132),
            l = n(9),
            g = n.n(l),
            p = n(61),
            y = n(12),
            b = n(22);

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            A = n(4),
            E = n(0),
            T = n(7).default,
            O = n(8),
            I = o.a.triggerUserSyncs,
            w = A.EVENTS,
            _ = w.ADD_AD_UNITS,
            C = w.BID_WON,
            j = w.REQUEST_BIDS,
            B = w.SET_TARGETING,
            U = w.AD_RENDER_FAILED,
            R = A.AD_RENDER_FAILED_REASON,
            D = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            N = R.NO_AD,
            k = R.EXCEPTION,
            x = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function(e) {
                    var t = v.a.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(c.flatten).filter(c.uniques);
                    return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.11.0", E.logInfo("Prebid.js v2.11.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", (function(e) {
            return e.forEach((function(e) {
                var t = e.mediaTypes,
                    n = E.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (E.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (E.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every((function(e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            }))) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), E.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }), "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(E.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map((function(e) {
                return e.adUnitCode
            })).filter(c.uniques).map((function(t) {
                return n.filter((function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return (function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                })({}, e[0].adUnitCode, {
                    bids: e
                })
            })).reduce((function(e, t) {
                return m(e, t)
            }), {})
        }

        function L(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), E.logError(t), O.emit(U, r)
        }

        function z(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    E.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function() {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function() {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                }))
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach((function(t) {
                    Object.keys(n[t]).forEach((function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                    }))
                })), O.emit(B, n)
            } else E.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function() {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(), O.emit(B, f.b.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = A.BID_STATUS.RENDERED, n.ad = E.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (E.insertElement(s, e, "body"), Object(y.c)(u)) Object(y.b)(u, n);
                    else if (e === document && !E.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L(D, d, n)
                    } else if (o) e.open("text/html", "replace"), e.write(o), e.close(), q(e, i, r), E.callBurl(n);
                    else if (c) {
                        var f = E.createInvisibleIframe();
                        f.height = r, f.width = i, f.style.display = "inline", f.style.overflow = "hidden", f.src = c, E.insertElement(f, e, "body"), q(e, i, r), E.callBurl(n)
                    } else {
                        var l = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L(N, l, n)
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L(x, g)
                }
            } catch (e) {
                var p = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L(k, p)
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L(P, b)
            }
        }, S.removeAdUnit = function(e) {
            (E.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (E.isArray(e) ? e : [e]).forEach((function(e) {
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            })): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(j);
            var c = n || d.config.getConfig("bidderTimeout");
            if (r = r || S.adUnits, E.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return g()(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), (r = G(r)).forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = T.bidderRegistry,
                        t = d.config.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter((function(e) {
                            return !g()(n, e)
                        })) : e;
                    i.transactionId = E.generateUUID(), r.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return g()(r, e)
                        })) || (E.logWarn(E.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    })), p.a.incrementCounter(i.code)
                })), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach((function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                })), u.callBids(), u
            }
            if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                E.logError("Error executing bidsBackHandler", null, e)
            }
        })), S.addAdUnits = function(e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === h(e) && S.adUnits.push(e), O.emit(_)
        }, S.onEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || M[e].call(null, n) ? O.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return E.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function(e, t, n) {
            E.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter((function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            }))
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            })) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter((function(e) {
                return e.adId === t.adId
            })) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }, S.getConfig = d.config.getConfig, S.setConfig = d.config.setConfig, S.que.push((function() {
            return Object(i.a)()
        })), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack)
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), z(S.que), z(S.cmd)
        }, t.default = S
    },
    66: function(e, t, n) {
        "use strict";
        t.a = w, n.d(t, "b", (function() {
            return o
        }));
        var f = n(0),
            l = n(3),
            g = n(27),
            r = n(37),
            p = n(60),
            b = n(2),
            i = n(9),
            v = n.n(i);

        function y(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }

        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var S = n(0),
            A = n(4),
            E = [],
            T = Object.keys(A.TARGETING_KEYS).map((function(e) {
                return A.TARGETING_KEYS[e]
            })),
            O = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(f.timestamp)()
            },
            I = function(e) {
                return e && (e.status && !v()([A.BID_STATUS.BID_TARGETING_SET, A.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function w(e, n) {
            var r = [],
                i = Object(f.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach((function(e) {
                var t = Object(f.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return r.push(t[e].reduce(n))
                }))
            })), r
        }
        var o = (function(n) {
            var i = {},
                r = {};

            function o(e) {
                return "string" == typeof e ? [e] : S.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function a() {
                var e = n.getBidsReceived();
                return l.config.getConfig("useBidCache") || (e = e.filter((function(e) {
                    return r[e.adUnitCode] === e.auctionId
                }))), w(e = e.filter((function(e) {
                    return Object(f.deepAccess)(e, "video.context") !== b.a
                })).filter((function(e) {
                    return "banner" !== e.mediaType || Object(p.c)([e.width, e.height])
                })).filter(I).filter(O), f.getOldestHighestCpmBid)
            }

            function c() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(T).filter(f.uniques)
            }

            function u(t, n, e, r) {
                return Object.keys(n.adserverTargeting).filter(s()).forEach((function(e) {
                    t.length && t.filter(function(t) {
                        return function(e) {
                            return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                        }
                    }(e)).forEach(function(t) {
                        return function(e) {
                            S.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(f.uniques), delete n.adserverTargeting[t]
                        }
                    }(e))
                })), t.push(n), t
            }

            function s() {
                var t = c();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function d(t) {
                return m({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(s()).map((function(e) {
                    return m({}, e.substring(0, 20), [t.adserverTargeting[e]])
                })))
            }
            return i.setLatestAuctionForAdUnit = function(e, t) {
                r[e] = t
            }, i.resetPresetTargeting = function(e) {
                if (Object(f.isGptPubadsDefined)()) {
                    var t = o(e),
                        r = n.getAdUnits().filter((function(e) {
                            return v()(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        E.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, i.resetPresetTargetingAST = function(e) {
                o(e).forEach((function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var n = Object.keys(t.keywords),
                            r = {};
                        n.forEach((function(e) {
                            v()(E, e.toLowerCase()) || (r[e] = t.keywords[e])
                        })), window.apntag.modifyTag(e, {
                            keywords: r
                        })
                    }
                }))
            }, i.getAllTargeting = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    n = o(e),
                    r = (function(e, t) {
                        var n = i.getWinningBids(e, t),
                            r = c();
                        return n = n.map((function(o) {
                            return m({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter((function(e) {
                                return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                            })).reduce((function(e, t) {
                                var n = [o.adserverTargeting[t]],
                                    r = m({}, t.substring(0, 20), n);
                                if (t !== A.TARGETING_KEYS.DEAL) return [].concat(y(e), [r]);
                                var i = m({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                                return [].concat(y(e), [r, i])
                            }), []))
                        }))
                    })(n, t).concat(function(t, e) {
                        return e.filter((function(e) {
                            return v()(t, e.adUnitCode)
                        })).map((function(e) {
                            return h({}, e)
                        })).reduce(u, []).map(d).filter((function(e) {
                            return e
                        }))
                    }(n, t)).concat(l.config.getConfig("enableSendAllBids") ? (function(e, t) {
                        var n = T.concat(g.a);
                        return w(t, f.getHighestCpm).map((function(t) {
                            if (t.adserverTargeting && e && (S.isArray(e) && v()(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return m({}, t.adUnitCode, (function(t, e) {
                                return e.map((function(e) {
                                    return m({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                                }))
                            })(t, n.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }))))
                        })).filter((function(e) {
                            return e
                        }))
                    })(n, t) : []);
                return r.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === E.indexOf(Object.keys(e)[0]) && (E = Object.keys(e).concat(E))
                        }))
                    }))
                })), r = (function(e) {
                    return e.map((function(e) {
                        return m({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                            return m({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        })).reduce((function(e, t) {
                            return h(t, e)
                        }), {}))
                    })).reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = h({}, e[n], t[n]), e
                    }), {})
                })(r), n.forEach((function(e) {
                    r[e] || (r[e] = {})
                })), r
            }, i.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter(e ? e(r) : Object(f.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return S.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, i.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    t = o(e);
                return n.filter((function(e) {
                    return v()(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(f.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(f.getHighestCpm)
                }))
            }, i.setTargetingForAst = function() {
                var r = i.getAllTargeting();
                try {
                    i.resetPresetTargetingAST()
                } catch (e) {
                    S.logError("unable to reset targeting for AST" + e)
                }
                Object.keys(r).forEach((function(n) {
                    return Object.keys(r[n]).forEach((function(e) {
                        if (S.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), S.isStr(r[n][e]) || S.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                                overrideKeyValue: !0
                            })
                        }
                    }))
                }))
            }, i.isApntagDefined = function() {
                if (window.apntag && S.isFn(window.apntag.setKeywords)) return !0
            }, i
        })(r.a)
    },
    67: function(e, t, n) {
        "use strict";
        var r = n(135)(!0);
        n(49)(String, "String", (function(e) {
            this._t = String(e), this._i = 0
        }), (function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        }))
    },
    68: function(e, t, r) {
        var i = r(25),
            o = r(138),
            a = r(69),
            c = r(50)("IE_PROTO"),
            u = function() {},
            s = "prototype",
            d = function() {
                var e, t = r(54)("iframe"),
                    n = a.length;
                for (t.style.display = "none", r(141).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][a[n]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (u[s] = i(e), n = new u, u[s] = null, n[c] = e) : n = d(), void 0 === t ? n : o(n, t)
        }
    },
    69: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", (function() {
            return U
        })), t.setS2STestingModule = function(e) {
            O = e
        };
        var h = n(0),
            g = n(60),
            p = n(27),
            u = n(1),
            m = n(5),
            b = n(3),
            r = n(9),
            S = n.n(r),
            i = n(10),
            v = n.n(i),
            y = n(61),
            A = n(62);

        function E(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var O, I = n(0),
            w = n(4),
            _ = n(8),
            s = {},
            C = s.bidderRegistry = {},
            d = s.aliasRegistry = {},
            j = {};
        b.config.getConfig("s2sConfig", (function(e) {
            j = e.s2sConfig
        }));
        var o = {};

        function B(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce((function(e, c) {
                var t = Object(g.b)(Object(g.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : I.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter((function(e) {
                    return e.bidder === i
                })).reduce((function(e, t) {
                    var n = c.nativeParams || I.deepAccess(c, "mediaTypes.native");
                    n && (t = T({}, t, {
                        nativeParams: Object(p.g)(n)
                    })), t = T({}, t, Object(h.getDefinedParams)(c, ["mediaType", "renderer"]));
                    var r = Object(g.b)(Object(g.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && I.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : I.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), I.isValidMediaTypes(o) ? t = T({}, t, {
                        mediaTypes: o
                    }) : I.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(T({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: I.deepAccess(o, "banner.sizes") || I.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: y.a.getCounter(c.code)
                    })), e
                }), [])), e
            }), []).reduce(h.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }
        var U = {
            consentData: null,
            setConsentData: function(e) {
                U.consentData = e
            },
            getConsentData: function() {
                return U.consentData
            }
        };

        function R() {
            return j && j.enabled && j.testing && O
        }

        function a(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (I.logInfo("Invoking ".concat(t, ".").concat(n)), r[n](e))
            } catch (e) {
                I.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        s.makeBidRequests = function(e, i, o, a, c) {
            var u = [],
                t = Object(h.getBidderCodes)(e);
            b.config.getConfig("bidderSequence") === b.RANDOM && (t = Object(h.shuffle)(t));
            var s = Object(A.b)(),
                n = t,
                r = [];
            if (j.enabled) {
                R() && (r = O.getSourceBidderMap(e)[O.CLIENT]);
                var d = j.bidders;
                n = t.filter((function(e) {
                    return !S()(d, e) || S()(r, e)
                }));
                var f = (function(e) {
                        var t = j.bidders,
                            n = I.deepClone(e);
                        return n.forEach((function(e) {
                            e.bids = e.bids.filter((function(e) {
                                return S()(t, e.bidder) && (!R() || e.finalSource !== O.CLIENT)
                            })).map((function(e) {
                                return e.bid_id = I.getUniqueIdentifierStr(), e
                            }))
                        })), n = n.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    })(e),
                    l = I.generateUUID();
                d.forEach((function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: B({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: I.deepClone(f),
                                labels: c,
                                src: w.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: j.timeout,
                            src: w.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                })), f.forEach((function(e) {
                    var t = e.bids.filter((function(t) {
                        return v()(u, (function(e) {
                            return v()(e.bids, (function(e) {
                                return e.bidId === t.bid_id
                            }))
                        }))
                    }));
                    e.bids = t
                })), u.forEach((function(e) {
                    e.adUnitsS2SCopy = f.filter((function(e) {
                        return 0 < e.bids.length
                    }))
                }))
            }
            var g = (function(e) {
                var t = I.deepClone(e);
                return t.forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        return !R() || e.finalSource !== O.SERVER
                    }))
                })), t = t.filter((function(e) {
                    return 0 !== e.bids.length
                }))
            })(e);
            return n.forEach((function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: B({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: I.deepClone(g),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = C[e];
                r || I.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            })), U.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = U.getConsentData()
            })), u
        }, s.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = E(t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(m.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = j.bidders,
                        l = C[j.adapter],
                        g = s[0].tid,
                        p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: g,
                            ad_units: p
                        };
                        if (b.ad_units.length) {
                            var v = s.map((function(e) {
                                    return e.start = Object(h.timestamp)(), i.bind(e)
                                })),
                                y = b.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter((function(e) {
                                return S()(y, e)
                            })).join(","))), s.forEach((function(e) {
                                _.emit(w.EVENTS.BID_REQUESTED, e)
                            })), l.callBids(b, s, (function(e, t) {
                                var n = Object(h.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }), (function() {
                                return v.forEach((function(e) {
                                    return e()
                                }))
                            }), d)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = Object(h.timestamp)();
                    var t = C[e.bidderCode];
                    I.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(m.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n, c)
                }))
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, s.videoAdapters = [], s.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (C[t] = e, S()(r, "video") && s.videoAdapters.push(t), S()(r, "native") && p.e.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, s.aliasBidAdapter = function(t, e) {
            if (void 0 === C[e]) {
                var n = C[t];
                if (void 0 === n) {
                    var r = b.config.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && S()(i, e) ? d[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var o, a = (function(e) {
                        var t = [];
                        return S()(s.videoAdapters, e) && t.push("video"), S()(p.e, e) && t.push("native"), t
                    })(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var c = n.getSpec();
                        o = Object(u.newBidder)(T({}, c, {
                            code: e
                        })), d[e] = t
                    }
                    s.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, s.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, s.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, (function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            }))
        }, s.getBidAdapter = function(e) {
            return C[e]
        }, s.callTimedOutBidders = function(t, n, r) {
            n = n.map((function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            })), n = I.groupBy(n, "bidder"), Object.keys(n).forEach((function(e) {
                a(e, "onTimeout", n[e])
            }))
        }, s.callBidWonBidder = function(e, t, n) {
            t.params = I.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, s.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = s
    },
    70: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    71: function(e, t, n) {
        var i = n(20);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    72: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    73: function(e, t, n) {
        var o = n(25);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    74: function(e, t, n) {
        var r = n(28),
            i = n(15)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    75: function(e, t, n) {
        var r = n(76),
            i = n(15)("iterator"),
            o = n(28);
        e.exports = n(14).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    76: function(e, t, n) {
        var i = n(31),
            o = n(15)("toStringTag"),
            a = "Arguments" == i(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = (function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            })(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    77: function(e, t, n) {
        var r = n(43)("meta"),
            i = n(16),
            o = n(26),
            a = n(19).f,
            c = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            s = !n(30)((function() {
                return u(Object.preventExtensions({}))
            })),
            d = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            f = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        d(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!o(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        d(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return s && f.NEED && u(e) && !o(e, r) && d(e), e
                }
            }
    },
    78: function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    79: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach((function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            }))
        };
        var r = n(48),
            i = n(0),
            o = Object(r.a)()
    },
    8: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            if (function(e) {
                    return u.contains(d, e)
                }(e)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(e) {
            !(function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })) : u._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })), c[e] = i)
        }, i.get = function() {
            return c
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, (function(e) {
                var t = r({}, e);
                n.push(t)
            })), n
        }, i)
    },
    82: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(40)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    },
    83: function(e, t, n) {
        e.exports = !n(21) && !n(30)((function() {
            return 7 != Object.defineProperty(n(54)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    84: function(e, t, n) {
        var i = n(16);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    85: function(e, t, n) {
        var r = n(86);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    86: function(e, t, n) {
        var r = n(16),
            i = n(56),
            o = n(15)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    87: function(e, t, n) {
        "use strict";
        var r = n(13),
            i = n(59)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)("includes")
    },
    88: function(e, t, n) {
        var r = n(42),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    89: function(e, t) {
        y.SYNC = 1, y.ASYNC = 2, y.QUEUE = 4;
        var g = "fun-hooks",
            n = "function" == typeof Proxy,
            r = Object.freeze({
                useProxy: n,
                ready: 0
            }),
            i = Object.getPrototypeOf({}),
            c = "2,1,0" === [1].reduce((function(e, t, n) {
                return [e, t, n]
            }), 2).toString() ? Array.prototype.reduce : function(e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            },
            p = 4 === function(e, t) {
                return t
            }.bind(null, 1, 4)() ? Function.prototype.bind : function(e) {
                var t = this,
                    n = v(arguments, 1);
                return function() {
                    return t.apply(e, n.concat(v(arguments)))
                }
            };

        function b(e) {
            return c.call(v(arguments, 1), (function(t, n) {
                return n && Object.keys(n).forEach((function(e) {
                    t[e] = n[e]
                })), t
            }), e)
        }

        function v(e, t) {
            return Array.prototype.slice.call(e, t)
        }

        function y(o) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? u.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? u.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter((function(e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        }))).forEach((function(e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = u(r, i, a ? [a, n] : void 0)
                            }
                        })), o = Object.getPrototypeOf(o), t && o !== i;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function f(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return c.call(a, (function(t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push((function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    })), t[n] = l((function(e) {
                        t[n] = e, i = !0
                    }))) : t[n] = {})
                }), e)
            }

            function l(r) {
                var o = [],
                    a = [],
                    c = function() {};
                return {
                    __funHook: {
                        install: function(e, t, n) {
                            this.type = e, this.fn = t, (c = n)(o, a), r && r(t)
                        }
                    },
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter((function(t) {
                            return Object.keys(n).every((function(e) {
                                return t[e] === n[e]
                            }))
                        }))), b(e, {
                            remove: function() {
                                return e.forEach((function(e) {
                                    e.remove()
                                })), this
                            }
                        })
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                };

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort((function(e, t) {
                        return t.priority - e.priority
                    })), c(o, a), this
                }
            }

            function u(a, e, t) {
                if (e.__funHook) {
                    if (e.__funHook.type !== a) throw g + ": recreated hookable with different type";
                    return e.__funHook.fn
                }
                var c, n, r = t ? f(t) : l(),
                    i = {
                        get: function(e, t) {
                            return r[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(u), o.useProxy ? n = new Proxy(e, i) : b(n = function() {
                    return i.apply ? i.apply(e, this, v(arguments)) : e.apply(this, arguments)
                }, r), r.__funHook.install(a, n, (function(e, t) {
                    if (e.length || t.length) {
                        var n;
                        if ("sync" === a) {
                            var r, i = "r=t.apply(h," + (e.length ? "arguments" : "g") + ")";
                            t.length && (r = o(t, "a", "n(function extract(s){r=s},e)")), e.length && (i = o(e, "b", "n(function extract(){" + i + ";" + r + "},e)"), r = ""), n = ["var r,e={bail:function(a){r=a}}", i, r, "return r"].join(";")
                        } else "async" === a && (n = "t.apply(h," + (e.length ? "Array.prototype.slice.call(arguments)" : "g") + ".concat(" + o(t, "a", "z?n(z,e):[]") + "))", e.length && (n = "n(function partial(){" + n + "},e)"), n = ["var z", 'typeof g[g.length-1]==="function"&&(z=i.call(g.pop(),null))', "var e={bail:z}", o(e, "b", n)].join(";"));
                        c = p.call(new Function("i,b,a,n,t,h,g", n), null, p, e, t, Object.assign || b)
                    } else c = void 0;

                    function o(e, t, n) {
                        for (var r = e.length; 0 < r--;) 0 !== r || "async" === a && "a" === t ? (n = "i.call(" + t + "[" + r + "].hook, h," + n + ")", "async" === a && "a" === t && 0 === r || (n = "n(" + n + ",e)")) : n = t + "[" + r + "].hook.apply(h,[" + n + ("b" === t ? "].concat(g))" : ",r])");
                        return n
                    }
                    u()
                })), n;

                function u() {
                    !s && ("sync" !== a || o.ready & y.SYNC) && ("async" !== a || o.ready & y.ASYNC) ? "sync" !== a && o.ready & y.QUEUE ? i.apply = function() {
                        var e = arguments;
                        d.push((function() {
                            n.apply(e[1], e[2])
                        }))
                    } : i.apply = function() {
                        throw g + ": hooked function not ready"
                    } : i.apply = c
                }
            }
            return (o = b({}, r, o)).ready ? t.ready = function() {
                s = !0, (function(e) {
                    for (var t; t = e.shift();) t()
                })(d)
            } : s = !0, t.get = f, t
        }
        e.exports = y
    },
    9: function(e, t, n) {
        n(87), e.exports = n(14).Array.includes
    },
    90: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    }
});
pbjsChunk([194], {
    192: function(e, r, a) {
        e.exports = a(193)
    },
    193: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", (function() {
            return o
        }));
        var c = a(12),
            b = a(0),
            v = a(3),
            m = a(1),
            l = a(2),
            n = a(10),
            h = a.n(n),
            t = a(9),
            _ = a.n(t);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f() {
            return (f = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }).apply(this, arguments)
        }

        function k(e) {
            return (function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            })(e) || (function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            })(e) || (function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            })()
        }
        var I = "//ib.adnxs.com/ut/v3/prebid",
            s = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            x = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            T = ["geo", "device_id"],
            w = ["enabled", "dongle", "member_id", "debug_timeout"],
            d = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            o = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [l.b, l.d, l.c],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a, n = e.map(C),
                        t = h()(e, S);
                    t && (a = {}, Object.keys(t.params.user).filter((function(e) {
                        return _()(x, e)
                    })).forEach((function(e) {
                        return a[e] = t.params.user[e]
                    })));
                    var i, s = h()(e, A);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter((function(e) {
                        return _()(T, e)
                    })).forEach((function(e) {
                        return i[e] = s.params.app[e]
                    })));
                    var o, d = h()(e, R);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        u = {},
                        c = b.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        p = JSON.parse(c)
                    } catch (e) {
                        b.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var m = h()(e, P);
                        m && m.debug && (p = m.debug)
                    }
                    p && p.enabled && Object.keys(p).filter((function(e) {
                        return _()(w, e)
                    })).forEach((function(e) {
                        u[e] = p[e]
                    }));
                    var l = h()(e, E),
                        f = l ? parseInt(l.params.member, 10) : 0,
                        y = {
                            tags: k(n),
                            user: a,
                            sdk: {
                                source: "pbjs",
                                version: "2.11.0"
                            }
                        };
                    if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), v.config.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), u.enabled && (y.debug = u, b.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (y.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var g = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map((function(e) {
                                return encodeURIComponent(e)
                            })).join(",")
                        };
                        y.referrer_detection = g
                    }
                    return h()(e, O) && e.filter(O).forEach((function(r) {
                        var e = (function(e, r) {
                                var a = r.mediaTypes.video,
                                    n = a.durationRangeSec,
                                    t = a.requireExactDuration,
                                    i = (function(e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            n = e.requireExactDuration,
                                            t = b.getMinValueFromArray(a),
                                            i = Math.floor(r / t);
                                        return n ? Math.max(i, a.length) : i
                                    })(r.mediaTypes.video),
                                    s = b.getMaxValueFromArray(n),
                                    o = e.filter((function(e) {
                                        return e.uuid === r.bidId
                                    })),
                                    d = b.fill.apply(b, k(o).concat([i]));
                                if (t) {
                                    var p = Math.ceil(i / n.length),
                                        u = b.chunk(d, p);
                                    n.forEach((function(r, e) {
                                        u[e].map((function(e) {
                                            j(e, "minduration", r), j(e, "maxduration", r)
                                        }))
                                    }))
                                } else d.map((function(e) {
                                    return j(e, "maxduration", s)
                                }));
                                return d
                            })(n, r),
                            a = y.tags.filter((function(e) {
                                return e.uuid !== r.bidId
                            }));
                        y.tags = [].concat(k(a), k(e))
                    })), (function(e, a) {
                        var n = [];
                        if (15 < e.tags.length) {
                            var t = b.deepClone(e);
                            b.chunk(e.tags, 15).forEach((function(e) {
                                t.tags = e;
                                var r = JSON.stringify(t);
                                n.push({
                                    method: "POST",
                                    url: I,
                                    data: r,
                                    bidderRequest: a
                                })
                            }))
                        } else {
                            var r = JSON.stringify(e);
                            n = {
                                method: "POST",
                                url: I,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return n
                    })(y, r)
                },
                interpretResponse: function(e, r) {
                    var n = this,
                        t = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(t.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), b.logError(a), i
                    }
                    if (e.tags && e.tags.forEach((function(e) {
                            var r = (function(e) {
                                return e && e.ads && e.ads.length && h()(e.ads, (function(e) {
                                    return e.rtb
                                }))
                            })(e);
                            if (r && 0 !== r.cpm && _()(n.supportedMediaTypes, r.ad_type)) {
                                var a = (function(e, r, a) {
                                    var n = b.getBidRequest(e.uuid, [a]),
                                        t = {
                                            requestId: e.uuid,
                                            cpm: r.cpm,
                                            creativeId: r.creative_id,
                                            dealId: r.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: n.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: r.buyer_member_id,
                                                dealPriority: r.deal_priority,
                                                dealCode: r.deal_code
                                            }
                                        };
                                    if (r.rtb.video) {
                                        f(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        });
                                        var i = b.deepAccess(n, "mediaTypes.video.context");
                                        if (i === l.a) {
                                            var s = Object(m.getIabSubCategory)(n.bidder, r.brand_category_id);
                                            t.meta = {
                                                iabSubCatId: s
                                            }, t.video = {
                                                context: l.a,
                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3)
                                            }
                                        }
                                        if (r.renderer_url) {
                                            var o = b.deepAccess(a.bids[0], "renderer.options");
                                            f(t, {
                                                adResponse: e,
                                                renderer: (function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                        n = c.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        n.setRender(g)
                                                    } catch (e) {
                                                        b.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return n.setEventHandlers({
                                                        impression: function() {
                                                            return b.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return b.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            b.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                        }
                                                    }), n
                                                })(t.adUnitCode, r, o)
                                            }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[l.c]) {
                                        var d = r.rtb[l.c];
                                        t[l.c] = {
                                            title: d.title,
                                            body: d.desc,
                                            body2: d.desc2,
                                            cta: d.ctatext,
                                            rating: d.rating,
                                            sponsoredBy: d.sponsored,
                                            privacyLink: d.privacy_link,
                                            address: d.address,
                                            downloads: d.downloads,
                                            likes: d.likes,
                                            phone: d.phone,
                                            price: d.price,
                                            salePrice: d.saleprice,
                                            clickUrl: d.link.url,
                                            displayUrl: d.displayurl,
                                            clickTrackers: d.link.click_trackers,
                                            impressionTrackers: d.impression_trackers,
                                            javascriptTrackers: d.javascript_trackers
                                        }, d.main_img && (t.native.image = {
                                            url: d.main_img.url,
                                            height: d.main_img.height,
                                            width: d.main_img.width
                                        }), d.icon && (t.native.icon = {
                                            url: d.icon.url,
                                            height: d.icon.height,
                                            width: d.icon.width
                                        })
                                    } else {
                                        f(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var p = r.rtb.trackers[0].impression_urls[0],
                                                u = b.createTrackPixelHtml(p);
                                            t.ad += u
                                        } catch (e) {
                                            b.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                })(e, r, t);
                                a.mediaType = (function(e) {
                                    var r = e.ad_type;
                                    return r === l.d ? l.d : r === l.c ? l.c : l.b
                                })(r), i.push(a)
                            }
                        })), e.debug && e.debug.debug_info) {
                        var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), b.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), b.logMessage(s)
                    }
                    return i
                },
                getMappingFileInfo: function() {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = b.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: b.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, p(a.keywords) && a.keywords.forEach(u), Object.keys(a).forEach((function(e) {
                        var r = b.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    }))), a
                }
            };

        function p(e) {
            return !!(b.isArray(e) && 0 < e.length)
        }

        function u(e) {
            p(e.value) && "" === e.value[0] && delete e.value
        }

        function C(r) {
            var a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !b.isEmpty(r.params.keywords)) {
                var e = b.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(u), a.keywords = e
            }
            if ((r.mediaType === l.c || b.deepAccess(r, "mediaTypes.".concat(l.c))) && (a.ad_types.push(l.c), 0 === a.sizes.length && (a.sizes = y([1, 1])), r.nativeParams)) {
                var n = (function(s) {
                    var o = {};
                    return Object.keys(s).forEach((function(e) {
                        var r = d[e] && d[e].serverName || d[e] || e,
                            a = d[e] && d[e].requiredParams;
                        o[r] = f({}, a, s[e]);
                        var n = d[e] && d[e].minimumParams;
                        if (a && n) {
                            var t = Object.keys(s[e]),
                                i = Object.keys(a);
                            0 === t.filter((function(e) {
                                return !_()(i, e)
                            })).length && (o[r] = f({}, o[r], n))
                        }
                    })), o
                })(r.nativeParams);
                a[l.c] = {
                    layouts: [n]
                }
            }
            var t = b.deepAccess(r, "mediaTypes.".concat(l.d)),
                i = b.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === l.d || t) && a.ad_types.push(l.d), (r.mediaType === l.d || t && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return _()(s, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (b.isEmpty(r.mediaType) && b.isEmpty(r.mediaTypes) || r.mediaType === l.b || r.mediaTypes && r.mediaTypes[l.b]) && a.ad_types.push(l.b), a
        }

        function y(e) {
            var r = [],
                a = {};
            if (b.isArray(e) && 2 === e.length && !b.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var n = 0; n < e.length; n++) {
                    var t = e[n];
                    (a = {}).width = parseInt(t[0], 10), a.height = parseInt(t[1], 10), r.push(a)
                }
            return r
        }

        function S(e) {
            return !!e.params.user
        }

        function E(e) {
            return !!parseInt(e.params.member, 10)
        }

        function A(e) {
            if (e.params) return !!e.params.app
        }

        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function P(e) {
            return !!e.debug
        }

        function O(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === l.a
        }

        function j(e, r, a) {
            b.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function g(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }
        Object(m.registerBidder)(o)
    }
}, [192]);
pbjsChunk([1], {
    236: function(n, t, e) {
        n.exports = e(237)
    },
    237: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", (function() {
            return o
        })), e.d(t, "consentTimeout", (function() {
            return a
        })), e.d(t, "allowAuction", (function() {
            return s
        })), e.d(t, "staticConsentData", (function() {
            return i
        })), t.requestBidsHook = D, t.resetConsentData = function() {
            r = void 0, d.gdprDataHandler.setConsentData(null)
        }, t.setConfig = _;
        var o, a, s, i, r, u = e(0),
            c = e(3),
            d = e(7),
            l = e(9),
            f = e.n(l),
            g = e(238),
            p = e.n(g),
            m = "iab",
            C = 1e4,
            v = !0,
            w = !1,
            b = {
                iab: function(n, t, s) {
                    var e, o = (function() {
                            var t = {};

                            function e() {
                                t.getConsentData && t.getVendorConsents && n(t, s)
                            }
                            return {
                                consentDataCallback: function(n) {
                                    t.getConsentData = n, e()
                                },
                                vendorConsentsCallback: function(n) {
                                    t.getVendorConsents = n, e()
                                }
                            }
                        })(),
                        r = {};
                    try {
                        e = window.__cmp || u.getWindowTop().__cmp
                    } catch (n) {}
                    if (u.isFn(e)) e("getConsentData", null, o.consentDataCallback), e("getVendorConsents", null, o.vendorConsentsCallback);
                    else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) c("getConsentData", o.consentDataCallback), c("getVendorConsents", o.vendorConsentsCallback);
                    else {
                        for (var a, i = window; !a;) {
                            try {
                                i.frames.__cmpLocator && (a = i)
                            } catch (n) {}
                            if (i === window.top) break;
                            i = i.parent
                        }
                        if (!a) return t("CMP not found.", s);
                        d("getConsentData", a, o.consentDataCallback), d("getVendorConsents", a, o.vendorConsentsCallback)
                    }

                    function c(o, a) {
                        var n = s.adUnits,
                            t = 1,
                            e = 1;
                        if (Array.isArray(n) && 0 < n.length) {
                            var i = u.getAdUnitSizes(n[0]);
                            t = i[0][0], e = i[0][1]
                        }
                        window.$sf.ext.register(t, e, (function(n, t) {
                            if ("cmpReturn" === n) {
                                var e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents;
                                a(e)
                            }
                        })), window.$sf.ext.cmp(o)
                    }

                    function d(n, i, t) {
                        function e(n) {
                            var t = "string" == typeof n.data && p()(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
                            if (t.__cmpReturn && t.__cmpReturn.callId) {
                                var e = t.__cmpReturn;
                                void 0 !== r[e.callId] && (r[e.callId](e.returnValue, e.success), delete r[e.callId])
                            }
                        }
                        window.__cmp = function(n, t, e) {
                            var o = Math.random() + "",
                                a = {
                                    __cmpCall: {
                                        command: n,
                                        parameter: t,
                                        callId: o
                                    }
                                };
                            r[o] = e, i.postMessage(a, "*")
                        }, window.addEventListener("message", e, !1), window.__cmp(n, null, (function(n) {
                            window.removeEventListener("message", e, !1), t(n)
                        }))
                    }
                },
                static: function(n, t, e) {
                    n(i, e)
                }
            };

        function D(n, t) {
            var e = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return r ? k(null, e) : f()(Object.keys(b), o) ? (b[o].call(this, h, x, e), void(e.haveExited || (0 === a ? h(void 0, e) : e.timer = setTimeout(function(n) {
                x("CMP workflow exceeded timeout threshold.", n)
            }.bind(null, e), a)))) : (u.logWarn("CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args))
        }

        function h(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), y(n), k(null, t)) : x("CMP returned unexpected value during lookup process.", t, n)
        }

        function x(n, t, e) {
            clearTimeout(t.timer), s && y(void 0), k(n, t, e)
        }

        function y(n) {
            r = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, d.gdprDataHandler.setConsentData(r)
        }

        function k(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context,
                    a = t.args,
                    i = t.nextFn;
                n ? s ? (u.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a)
            }
        }

        function _(n) {
            u.isStr(n.cmpApi) ? o = n.cmpApi : (o = m, u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), u.isNumber(n.timeout) ? a = n.timeout : (a = C, u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(C, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent ? s = n.allowAuctionWithoutConsent : (s = v, u.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), u.logInfo("consentManagement module has been activated..."), "static" === o && (u.isPlainObject(n.consentData) ? (i = n.consentData, a = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), w || pbjs.requestBids.before(D, 50), w = !0
        }
        c.config.getConfig("consentManagement", (function(n) {
            return _(n.consentManagement)
        }))
    },
    238: function(n, t, e) {
        e(239), n.exports = e(14).String.includes
    },
    239: function(n, t, e) {
        "use strict";
        var o = e(13),
            a = e(240),
            i = "includes";
        o(o.P + o.F * e(242)(i), "String", {
            includes: function(n) {
                return !!~a(this, n, i).indexOf(n, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    },
    240: function(n, t, e) {
        var o = e(241),
            a = e(32);
        n.exports = function(n, t, e) {
            if (o(t)) throw TypeError("String#" + e + " doesn't accept regex!");
            return String(a(n))
        }
    },
    241: function(n, t, e) {
        var o = e(16),
            a = e(31),
            i = e(15)("match");
        n.exports = function(n) {
            var t;
            return o(n) && (void 0 !== (t = n[i]) ? !!t : "RegExp" == a(n))
        }
    },
    242: function(n, t, e) {
        var o = e(15)("match");
        n.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[o] = !1, !"/./" [t](e)
                } catch (n) {}
            }
            return !0
        }
    }
}, [236]);
pbjsChunk([146], {
    304: function(e, n, o) {
        e.exports = o(305)
    },
    305: function(e, n, o) {
        "use strict";

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = o(8),
            s = o(0),
            t = o(4),
            a = o(7).default,
            u = t.EVENTS.BID_REQUESTED,
            d = t.EVENTS.BID_TIMEOUT,
            c = t.EVENTS.BID_RESPONSE,
            l = t.EVENTS.BID_WON,
            f = {
                nonInteraction: !0
            },
            b = [],
            p = null,
            m = !0,
            v = "Prebid.js Bids",
            y = 0,
            g = !1,
            T = null,
            w = !0,
            E = {};

        function S() {
            if (m && "function" == typeof window[p]) {
                for (var e = 0; e < b.length; e++) b[e].call();
                b.push = function(e) {
                    e.call()
                }, m = !1
            }
            s.logMessage("event count sent to GA: " + y)
        }

        function h(e) {
            return e ? Math.floor(100 * e) : 0
        }

        function $(e) {
            e && e.bidderCode && b.push((function() {
                y++, window[p](T, "event", v, "Requests", e.bidderCode, 1, f)
            })), S()
        }

        function D(i) {
            i && i.bidderCode && b.push((function() {
                var e = h(i.cpm),
                    n = i.bidderCode;
                if (void 0 !== i.timeToRespond && g) {
                    y++;
                    var o = (function(e) {
                        var n;
                        return 0 <= e && e < 200 ? n = "0-200ms" : 200 <= e && e < 300 ? n = "0200-300ms" : 300 <= e && e < 400 ? n = "0300-400ms" : 400 <= e && e < 500 ? n = "0400-500ms" : 500 <= e && e < 600 ? n = "0500-600ms" : 600 <= e && e < 800 ? n = "0600-800ms" : 800 <= e && e < 1e3 ? n = "0800-1000ms" : 1e3 <= e && e < 1200 ? n = "1000-1200ms" : 1200 <= e && e < 1500 ? n = "1200-1500ms" : 1500 <= e && e < 2e3 ? n = "1500-2000ms" : 2e3 <= e && (n = "2000ms above"), n
                    })(i.timeToRespond);
                    window[p](T, "event", "Prebid.js Load Time Distribution", o, n, 1, f)
                }
                if (0 < i.cpm) {
                    y += 2;
                    var t = (function(e) {
                        var n;
                        return 0 <= e && e < .5 ? n = "$0-0.5" : .5 <= e && e < 1 ? n = "$0.5-1" : 1 <= e && e < 1.5 ? n = "$1-1.5" : 1.5 <= e && e < 2 ? n = "$1.5-2" : 2 <= e && e < 2.5 ? n = "$2-2.5" : 2.5 <= e && e < 3 ? n = "$2.5-3" : 3 <= e && e < 4 ? n = "$3-4" : 4 <= e && e < 6 ? n = "$4-6" : 6 <= e && e < 8 ? n = "$6-8" : 8 <= e && (n = "$8 above"), n
                    })(i.cpm);
                    g && (y++, window[p](T, "event", "Prebid.js CPM Distribution", t, n, 1, f)), window[p](T, "event", v, "Bids", n, e, f), window[p](T, "event", v, "Bid Load Time", n, i.timeToRespond, f)
                }
            })), S()
        }

        function M(e) {
            b.push((function() {
                s._each(e, (function(e) {
                    y++;
                    var n = e.bidder;
                    window[p](T, "event", v, "Timeouts", n, f)
                }))
            })), S()
        }

        function N(e) {
            var n = h(e.cpm);
            b.push((function() {
                y++, window[p](T, "event", v, "Wins", e.bidderCode, n, f)
            })), S()
        }
        E.enableAnalytics = function(e) {
            var n = e.provider,
                o = e.options;
            p = n || "ga", T = o && o.trackerName ? o.trackerName + ".send" : "send", w = void 0 === o || void 0 === o.sampling || Math.random() < parseFloat(o.sampling), o && void 0 !== o.global && (p = o.global), o && void 0 !== o.enableDistribution && (g = o.enableDistribution);
            if (w) {
                var t = r.getEvents();
                s._each(t, (function(e) {
                    if ("object" === i(e)) {
                        var n = e.args;
                        if (e.eventType === u) $(n);
                        else if (e.eventType === c) D(n);
                        else if (e.eventType === d) {
                            M(n)
                        } else e.eventType === l && N(n)
                    }
                })), r.on(u, (function(e) {
                    $(e)
                })), r.on(c, (function(e) {
                    D(e)
                })), r.on(d, (function(e) {
                    M(e)
                })), r.on(l, (function(e) {
                    N(e)
                }))
            } else s.logMessage("Prebid.js google analytics disabled by sampling");
            this.enableAnalytics = function() {
                return s.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.")
            }
        }, E.getTrackerSend = function() {
            return T
        }, a.registerAnalyticsAdapter({
            adapter: E,
            code: "ga"
        }), n.default = E
    }
}, [304]);
pbjsChunk([0], {
    328: function(e, r, t) {
        e.exports = t(329)
    },
    329: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return b
        }));
        var w = t(0),
            n = t(2),
            I = t(3),
            a = t(330),
            i = t.n(a),
            o = t(332),
            s = t.n(o),
            d = t(1);

        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = [n.b],
            f = 100,
            c = 35,
            m = !0,
            y = {
                JPY: 1
            };

        function u(e) {
            return i()(e) && 2 === e.length && s()(e[0]) && s()(e[1])
        }
        var b = {
            code: "ix",
            supportedMediaTypes: p,
            isBidRequestValid: function(e) {
                if (!u(e.params.size)) return !1;
                if (!(function(e, r) {
                        if (u(e)) return e[0] === r[0] && e[1] === r[1];
                        for (var t = 0; t < e.length; t++)
                            if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
                        return !1
                    })(e.sizes, e.params.size)) return !1;
                if (e.hasOwnProperty("mediaType") && "banner" !== e.mediaType) return !1;
                if (e.hasOwnProperty("mediaTypes") && !w.deepAccess(e, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return !1;
                var r = e.params.hasOwnProperty("bidFloor"),
                    t = e.params.hasOwnProperty("bidFloorCur");
                return !r && !t || r && t && (function(e, r) {
                    return Boolean("number" == typeof e && "string" == typeof r && r.match(/^[A-Z]{3}$/))
                })(e.params.bidFloor, e.params.bidFloorCur)
            },
            buildRequests: function(e, r) {
                for (var t, n, a = [], i = [], o = null, s = null, d = "https://as-sec.casalemedia.com/cygnus", p = 0; p < e.length; p++) o = e[p], n = void 0, (n = {}).id = (t = o).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = w.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = "".concat(t.params.size[0], "x").concat(t.params.size[1]) : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), s = n, a.push(s);
                if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                    var u = window.headertag.getIdentityInfo();
                    if (u && "object" === P(u))
                        for (var f in u)
                            if (u.hasOwnProperty(f)) {
                                var c = u[f];
                                !c.responsePending && c.data && "object" === P(c.data) && Object.keys(c.data).length && i.push(c.data)
                            }
                }
                var m = {};
                if (m.id = e[0].bidderRequestId, m.imp = a, m.site = {}, m.ext = {}, m.ext.source = "prebid", 0 < i.length && (m.user = {}, m.user.eids = i), document.referrer && "" !== document.referrer && (m.site.ref = document.referrer), r) {
                    if (r.gdprConsent) {
                        var y = r.gdprConsent;
                        y.hasOwnProperty("gdprApplies") && (m.regs = {
                            ext: {
                                gdpr: y.gdprApplies ? 1 : 0
                            }
                        }), y.hasOwnProperty("consentString") && (m.user = m.user || {}, m.user.ext = {
                            consent: y.consentString || ""
                        })
                    }
                    r.refererInfo && (m.site.page = r.refererInfo.referer, r.refererInfo.referer && 0 !== r.refererInfo.referer.indexOf("https") && (d = "http://as.casalemedia.com/cygnus"))
                }
                var b = {},
                    l = I.config.getConfig("ix");
                if (l) {
                    if ("object" === P(l.firstPartyData)) {
                        var h = l.firstPartyData,
                            g = "?";
                        for (var v in h) h.hasOwnProperty(v) && (g += "".concat(encodeURIComponent(v), "=").concat(encodeURIComponent(h[v]), "&"));
                        g = g.slice(0, -1), m.site.page += g
                    }
                    "number" == typeof l.timeout && (b.t = l.timeout)
                }
                return b.s = e[0].params.siteId, b.v = 7.2, b.r = JSON.stringify(m), b.ac = "j", b.sd = 1, {
                    method: "GET",
                    url: d,
                    data: b
                }
            },
            interpretResponse: function(e) {
                var r = [],
                    t = null;
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return r;
                for (var n, a, i, o = e.body, s = o.seatbid, d = 0; d < s.length; d++)
                    if (s[d].hasOwnProperty("bid"))
                        for (var p = s[d].bid, u = 0; u < p.length; u++) n = p[u], a = o.cur, i = void 0, i = {}, y.hasOwnProperty(a) ? i.cpm = n.price / y[a] : i.cpm = n.price / f, i.requestId = n.impid, i.width = n.w, i.height = n.h, i.ad = n.adm, i.dealId = w.deepAccess(n, "ext.dealid"), i.ttl = c, i.netRevenue = m, i.currency = a, i.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", i.meta = {}, i.meta.networkId = w.deepAccess(n, "ext.dspid"), i.meta.brandId = w.deepAccess(n, "ext.advbrandid"), i.meta.brandName = w.deepAccess(n, "ext.advbrand"), t = i, r.push(t);
                return r
            },
            transformBidParams: function(e, r) {
                return w.convertTypes({
                    siteID: "number"
                }, e)
            }
        };
        Object(d.registerBidder)(b)
    },
    330: function(e, r, t) {
        t(331), e.exports = t(14).Array.isArray
    },
    331: function(e, r, t) {
        var n = t(13);
        n(n.S, "Array", {
            isArray: t(56)
        })
    },
    332: function(e, r, t) {
        t(333), e.exports = t(14).Number.isInteger
    },
    333: function(e, r, t) {
        var n = t(13);
        n(n.S, "Number", {
            isInteger: t(334)
        })
    },
    334: function(e, r, t) {
        var n = t(16),
            a = Math.floor;
        e.exports = function(e) {
            return !n(e) && isFinite(e) && a(e) === e
        }
    }
}, [328]);
pbjsChunk([132], {
    341: function(e, r, t) {
        e.exports = t(342)
    },
    342: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return s
        }));
        var i = t(0),
            u = t(3),
            n = t(1);

        function g() {
            return (g = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }).apply(this, arguments)
        }
        var s = {
            code: "kargo",
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && !!e.params.placementId
            },
            buildRequests: function(e, r) {
                var t = u.config.getConfig("currency"),
                    n = t && t.adServerCurrency || "USD",
                    a = {};
                i._each(e, (function(e) {
                    return a[e.bidId] = e.params.placementId
                }));
                var o = g({}, {
                        timeout: r.timeout,
                        currency: n,
                        cpmGranularity: 1,
                        timestamp: (new Date).getTime(),
                        cpmRange: {
                            floor: 0,
                            ceil: 20
                        },
                        bidIDs: a
                    }, s._getAllMetadata()),
                    c = encodeURIComponent(JSON.stringify(o));
                return g({}, r, {
                    method: "GET",
                    url: "".concat("https://krk.kargo.com", "/api/v2/bid"),
                    data: "json=".concat(c),
                    currency: n
                })
            },
            interpretResponse: function(e, r) {
                var t = e.body,
                    n = [];
                for (var a in t) {
                    var o = t[a];
                    n.push({
                        requestId: a,
                        cpm: Number(o.cpm),
                        width: o.width,
                        height: o.height,
                        ad: o.adm,
                        ttl: 300,
                        creativeId: o.id,
                        dealId: o.targetingCustom,
                        netRevenue: !0,
                        currency: r.currency
                    })
                }
                return n
            },
            getUserSyncs: function(e) {
                var r = [],
                    t = s._generateRandomUuid(),
                    n = s._getClientId();
                if (e.iframeEnabled && t && n)
                    for (var a = 0; a < 5; a++) r.push({
                        type: "iframe",
                        url: "https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}".replace("{UUID}", n).replace("{SEED}", t).replace("{INDEX}", a)
                    });
                return r
            },
            _readCookie: function(e) {
                for (var r = "".concat(e, "="), t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    for (var a = t[n];
                        " " === a.charAt(0);) a = a.substring(1, a.length);
                    if (0 === a.indexOf(r)) return a.substring(r.length, a.length)
                }
                return null
            },
            _getCrbFromCookie: function() {
                try {
                    var e = JSON.parse(decodeURIComponent(s._readCookie("krg_crb")));
                    if (e && e.v) {
                        var r = JSON.parse(atob(e.v));
                        if (r) return r
                    }
                    return {}
                } catch (e) {
                    return {}
                }
            },
            _getCrbFromLocalStorage: function() {
                try {
                    return JSON.parse(atob(s._getLocalStorageSafely("krg_crb")))
                } catch (e) {
                    return {}
                }
            },
            _getCrb: function() {
                var e = s._getCrbFromLocalStorage();
                return Object.keys(e).length ? e : s._getCrbFromCookie()
            },
            _getKruxUserId: function() {
                return s._getLocalStorageSafely("kxkar_user")
            },
            _getKruxSegments: function() {
                return s._getLocalStorageSafely("kxkar_segs")
            },
            _getKrux: function() {
                var e = s._getKruxSegments(),
                    r = [];
                return e && (r = e.split(",")), {
                    userID: s._getKruxUserId(),
                    segments: r
                }
            },
            _getLocalStorageSafely: function(e) {
                try {
                    return localStorage.getItem(e)
                } catch (e) {
                    return null
                }
            },
            _getUserIds: function() {
                var e = s._getCrb();
                return {
                    kargoID: e.userId,
                    clientID: e.clientId,
                    crbIDs: e.syncIds || {},
                    optOut: e.optOut
                }
            },
            _getClientId: function() {
                return s._getCrb().clientId
            },
            _getAllMetadata: function() {
                return {
                    userIDs: s._getUserIds(),
                    krux: s._getKrux(),
                    pageURL: window.location.href,
                    rawCRB: s._readCookie("krg_crb"),
                    rawCRBLocalStorage: s._getLocalStorageSafely("krg_crb")
                }
            },
            _generateRandomUuid: function() {
                try {
                    var e = new Uint8Array(16);
                    crypto.getRandomValues(e), e[6] = -177 & e[6] | 64, e[8] = -65 & e[8] | 128;
                    var r = Array.prototype.map.call(new Uint8Array(e), (function(e) {
                        return ("00" + e.toString(16)).slice(-2)
                    })).join("");
                    return r.slice(0, 8) + "-" + r.slice(8, 12) + "-" + r.slice(12, 16) + "-" + r.slice(16, 20) + "-" + r.slice(20)
                } catch (e) {
                    return ""
                }
            }
        };
        Object(n.registerBidder)(s)
    }
}, [341]);
pbjsChunk([109], {
    395: function(e, t, n) {
        e.exports = n(396)
    },
    396: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetBoPixel = function() {
            l = !0
        }, n.d(t, "spec", (function() {
            return h
        }));
        var c = n(3),
            r = n(1),
            d = n(0),
            u = n(24),
            p = n(2),
            m = n(11);

        function o(e, t) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            })(e, t) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }
        var a = [p.b, p.d],
            f = "openx",
            i = "hb_pb",
            s = "2.1.6",
            l = !0;
        var h = {
            code: f,
            supportedMediaTypes: a,
            isBidRequestValid: function(e) {
                var t = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
            },
            buildRequests: function(e, t) {
                if (0 === e.length) return [];
                var n = [],
                    r = o(function(e) {
                        return e.reduce((function(e, t) {
                            return !(function(e) {
                                return d.deepAccess(e, "mediaTypes.video") || e.mediaType === p.d
                            })(t) ? e[1].push(t) : e[0].push(t), e
                        }), [
                            [],
                            []
                        ])
                    }(e), 2),
                    a = r[0],
                    i = r[1];
                return 0 < i.length && n.push(function(e, t) {
                    var r = [],
                        a = !1,
                        n = v(e, t),
                        i = d._map(e, (function(e) {
                            return e.params.unit
                        }));
                    n.aus = d._map(e, (function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    })).join("|"), n.divIds = d._map(e, (function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    })).join(","), i.some((function(e) {
                        return e
                    })) && (n.auid = i.join(","));
                    e.some((function(e) {
                        return e.params.doNotTrack
                    })) && (n.ns = 1);
                    e.some((function(e) {
                        return e.params.coppa
                    })) && (n.tfcd = 1);
                    e.forEach((function(t) {
                        if (t.params.customParams) {
                            var e = d._map(Object.keys(t.params.customParams), (function(e) {
                                    return (function(e, t) {
                                        var n = t[e];
                                        return d.isArray(n) && (n = n.join(",")), (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                    })(e, t.params.customParams)
                                })),
                                n = window.btoa(e.join("&"));
                            a = !0, r.push(n)
                        } else r.push("")
                    })), a && (n.tps = r.join(","));
                    var o = [],
                        s = !1;
                    e.forEach((function(e) {
                        e.params.customFloor ? (o.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), s = !0) : o.push(0)
                    })), s && (n.aumfs = o.join(","));
                    return {
                        method: "GET",
                        url: n.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(e[0].params.delDomain, "/w/1.0/arj"),
                        data: n,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(i, t)), 0 < a.length && a.forEach((function(e) {
                    n.push(function(e, t) {
                        var n = (function(e, t) {
                            var n, r, a = v([e], t),
                                i = d.deepAccess(e, "params.video") || {},
                                o = d.deepAccess(e, "mediaTypes.video.context"),
                                s = d.deepAccess(e, "mediaTypes.video.playerSize");
                            d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(s) && 2 === s.length && (n = parseInt(s[0], 10), r = parseInt(s[1], 10));
                            Object.keys(i).forEach((function(e) {
                                "openrtb" === e ? (i[e].w = n || i[e].w, i[e].v = r || i[e].v, a[e] = JSON.stringify(i[e])) : e in a || "url" === e || (a[e] = i[e])
                            })), a.auid = e.params.unit, a.vwd = n || i.vwd, a.vht = r || i.vht, "outstream" === o && (a.vos = "101");
                            i.mimes && (a.vmimes = i.mimes);
                            return a
                        })(e, t);
                        return {
                            method: "GET",
                            url: n.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(e.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: e,
                                startTime: new Date
                            }
                        }
                    }(e, t))
                })), n
            },
            interpretResponse: function(e, t) {
                var n = e.body;
                return (function(e) {
                    return /avjp$/.test(e.url) ? p.d : p.b
                })(t) === p.d ? (function(e, t) {
                    var n = t.bid,
                        r = t.startTime,
                        a = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var i = Object(m.c)(e.vastUrl).search || {},
                            o = {};
                        o.requestId = n.bidId, o.ttl = 300, o.netRevenue = !0, o.currency = e.currency, o.cpm = Number(e.pub_rev) / 1e3, o.width = e.width, o.height = e.height, o.creativeId = e.adid, o.vastUrl = e.vastUrl, o.mediaType = p.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, a.push(o), g(p.d, e, r)
                    }
                    return a
                })(n, t.payload) : (function(e, t) {
                    for (var n = t.bids, r = t.startTime, a = e.ads.ad, i = [], o = 0; o < a.length; o++) {
                        var s = a[o],
                            c = parseInt(s.idx, 10),
                            d = {};
                        if (d.requestId = n[c].bidId, s.pub_rev) {
                            d.cpm = Number(s.pub_rev) / 1e3;
                            var u = s.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = s.html, s.deal_id && (d.dealId = s.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = s.currency, s.tbd && (d.tbd = s.tbd), d.ts = s.ts, d.meta = {}, s.brand_id && (d.meta.brandId = s.brand_id), i.push(d), g(p.b, s, r)
                        }
                    }
                    return i
                })(n, t.payload)
            },
            getUserSyncs: function(e, t) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, t) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function b(t) {
            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
            return d._map(Object.keys(t), (function(e) {
                return "".concat(e, "=").concat(t[e])
            })).join("&")
        }

        function v(e, t) {
            var n, r = d.inIframe();
            if (n = {
                    ju: c.config.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var t, n, r, a = window,
                            i = document,
                            o = i.documentElement;
                        if (e) {
                            try {
                                a = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            o = i.documentElement, r = i.body, t = a.innerWidth || o.clientWidth || r.clientWidth, n = a.innerHeight || o.clientHeight || r.clientHeight
                        } else o = i.documentElement, t = a.innerWidth || o.clientWidth, n = a.innerHeight || o.clientHeight;
                        return "".concat(t, "x").concat(n)
                    })(r),
                    be: 1,
                    bc: e[0].params.bc || "".concat(i, "_").concat(s),
                    dddid: d._map(e, (function(e) {
                        return e.transactionId
                    })).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(t, "gdprConsent")) {
                var a = t.gdprConsent;
                void 0 !== a.consentString && (n.gdpr_consent = a.consentString), void 0 !== a.gdprApplies && (n.gdpr = a.gdprApplies ? 1 : 0), "iab" === c.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), n
        }

        function g(e, t, n) {
            if (l) {
                l = !1;
                var r, a = c.config.getConfig("bidderTimeout");
                window.PREBID_TIMEOUT && (a = Math.min(window.PREBID_TIMEOUT, a));
                var i = {
                    bd: +new Date - n,
                    bp: t.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: a,
                    ts: t.ts
                };
                if (i.br = i.bt < i.bd ? "t" : "p", e === p.d) {
                    var o = Object(m.c)(t.colo);
                    i.ph = t.ph, r = "//".concat(o.hostname, "/w/1.0/bo?").concat(b(i))
                } else {
                    var s = d.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    s && 1 < s.length && (r = "".concat(s[1], "bo?").concat(b(i)))
                }
                r && u.a.registerSync("image", f, r)
            }
        }
        Object(r.registerBidder)(h)
    }
}, [395]);
pbjsChunk([78], {
    472: function(e, r, t) {
        e.exports = t(473)
    },
    473: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", (function() {
            return s
        })), t.d(r, "VIDEO_ENDPOINT", (function() {
            return m
        })), t.d(r, "SYNC_ENDPOINT", (function() {
            return n
        })), t.d(r, "spec", (function() {
            return v
        })), r.hasVideoMediaType = h, r.masSizeOrdering = _, r.determineRubiconVideoSizeId = A, r.getPriceGranularity = T, r.hasValidVideoParams = I, r.resetUserSync = function() {
            j = !1
        };
        var c = t(0),
            i = t(1),
            d = t(3),
            u = t(2);

        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, r) {
            return (function(e) {
                if (Array.isArray(e)) return e
            })(e) || (function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            })(e, r) || (function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            })()
        }

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f() {
            return "https:" === location.protocol
        }
        var s = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            m = "//prebid-server.rubiconproject.com/openrtb2/auction",
            n = "https://eus.rubiconproject.com/usync.html",
            g = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
        c._each(g, (function(e, r) {
            return g[e] = r
        }));
        var v = {
            code: "rubicon",
            supportedMediaTypes: [u.b, u.d],
            isBidRequestValid: function(e) {
                if ("object" !== l(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return c.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."), !1;
                var i = x(e, !0);
                return !!i && ("video" !== i || I(e))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter((function(e) {
                        return "video" === x(e)
                    })).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                            id: e.transactionId,
                            test: d.config.getConfig("debug") ? 1 : 0,
                            cur: ["USD"],
                            source: {
                                tid: e.transactionId
                            },
                            tmax: d.config.getConfig("TTL") || 1e3,
                            imp: [{
                                exp: 300,
                                id: e.adUnitCode,
                                secure: f() || e.params.secure ? 1 : 0,
                                ext: {
                                    rubicon: e.params
                                },
                                video: c.deepAccess(e, "mediaTypes.video") || {}
                            }],
                            ext: {
                                prebid: {
                                    cache: {
                                        vastxml: {
                                            returnCreative: !1
                                        }
                                    },
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1,
                                        pricegranularity: T(d.config)
                                    }
                                }
                            }
                        };
                        r.imp[0].ext.rubicon.video.size_id = A(e), (function(r, t, e) {
                            if (!r) return;
                            "object" === l(d.config.getConfig("app")) ? r.app = d.config.getConfig("app") : r.site = {
                                page: y(t, e)
                            };
                            "object" === l(d.config.getConfig("device")) && (r.device = d.config.getConfig("device"));
                            t.params.video.language && ["site", "device"].forEach((function(e) {
                                r[e] && (r[e].content = a({
                                    language: t.params.video.language
                                }, r[e].content))
                            }))
                        })(r, e, o), (function(e, r) {
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                            "object" === l(e.imp[0].video) && void 0 === e.imp[0].video.pos && (e.imp[0].video.pos = "atf" === r.params.position ? 1 : "btf" === r.params.position ? 3 : 0);
                            var t = b(r, "video");
                            e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                        })(r, e);
                        var t = (function() {
                            var e = (function() {
                                var e = window.DigiTrust && (d.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                    member: "T9QSFKPDN9"
                                }));
                                return e && e.success && e.identity || null
                            })();
                            if (!e || e.privacy && e.privacy.optout) return null;
                            return {
                                id: e.id,
                                keyv: e.keyv,
                                pref: 0
                            }
                        })();
                        if (t && (r.user = {
                                ext: {
                                    digitrust: t
                                }
                            }), o.gdprConsent) {
                            var i;
                            "boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), r.regs ? r.regs.ext ? r.regs.ext.gdpr = i : r.regs.ext = {
                                gdpr: i
                            } : r.regs = {
                                ext: {
                                    gdpr: i
                                }
                            };
                            var n = o.gdprConsent.consentString;
                            r.user ? r.user.ext ? r.user.ext.consent = n : r.user.ext = {
                                consent: n
                            } : r.user = {
                                ext: {
                                    consent: n
                                }
                            }
                        }
                        return {
                            method: "POST",
                            url: m,
                            data: r,
                            bidRequest: e
                        }
                    }));
                if (!0 !== d.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return "banner" === x(e)
                })).map((function(e) {
                    var i = v.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: s,
                        data: v.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                        }), "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return "banner" === x(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (c.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(r.length - 10, " bids were not sent")), r = r.slice(0, 10));
                        var i = v.combineSlotUrlParams(r.map((function(e) {
                            return v.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: s,
                            data: v.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return c.isStr(t) && "" !== t || c.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e
                            }), "") + "slots=".concat(r.length, "&rand=").concat(Math.random()),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = b(e, "banner"),
                    n = p(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: f() ? "1" : "0",
                        tk_flint: "pbjs_lite_v2.11.0",
                        "x_source.tid": e.transactionId,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: y(e, r)
                    };
                (e.userId || {}).tdid && (s.tpid_tdid = e.userId.tdid), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (s.gdpr = Number(r.gdprConsent.gdprApplies)), s.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === l(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    null != t.visitor[e] && (s["tg_v.".concat(e)] = t.visitor[e].toString())
                })), null !== t.inventory && "object" === l(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    null != t.inventory[e] && (s["tg_i.".concat(e)] = t.inventory[e].toString())
                }));
                var c = (function() {
                    var e = (function() {
                        var e = window.DigiTrust && (d.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        }));
                        return e && e.success && e.identity || null
                    })();
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    s[e] = c[e]
                })), s
            },
            interpretResponse: function(a, e) {
                var s = e.bidRequest;
                if (!(a = a.body) || "object" !== l(a)) return [];
                if (a.seatbid) {
                    var r = c.deepAccess(a, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && r.forEach((function(e) {
                        c.logError("Got error from PBS Java openRTB: " + e)
                    }));
                    var o = [];
                    return a.seatbid.forEach((function(n) {
                        (n.bid || []).forEach((function(e) {
                            var r = {
                                requestId: s.bidId,
                                currency: a.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: d.config.getConfig("rubicon.netRevenue") || !1,
                                width: e.w || c.deepAccess(s, "mediaTypes.video.w") || c.deepAccess(s, "params.video.playerWidth"),
                                height: e.h || c.deepAccess(s, "mediaTypes.video.h") || c.deepAccess(s, "params.video.playerHeight")
                            };
                            e.dealid && (r.dealId = e.dealid);
                            var t = c.deepAccess(a, "ext.responsetimemillis.rubicon");
                            if (s && t && (s.serverResponseTimeMs = t), c.deepAccess(e, "ext.prebid.type") === u.d) {
                                r.mediaType = u.d;
                                var i = c.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === l(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === l(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else c.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                            o.push(r)
                        }))
                    })), o
                }
                var t = a.ads;
                return "object" !== l(s) || Array.isArray(s) || "video" !== x(s) || "object" !== l(t) || (t = t[s.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(s) ? s[t] : s;
                    if (i && "object" === l(i)) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: d.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === u.d) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = (function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(r, "'>\n<script type='text/javascript'>").concat(e, "<\/script>\n</div>\n</body>\n</html>")
                            })(r.script, r.impression_id);
                            var o = p(g[r.size_id].split("x").map((function(e) {
                                return Number(e)
                            })), 2);
                            n.width = o[0], n.height = o[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else c.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), s, a);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!j && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), j = !0, {
                        type: "iframe",
                        url: n + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return c.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t = d.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function b(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(c.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== c.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : c.logWarn("Warning: no sizes are setup or found"), _(n)
        }

        function o(e) {
            return c.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function h(e) {
            return "object" === l(c.deepAccess(e, "params.video")) && void 0 !== c.deepAccess(e, "mediaTypes.".concat(u.d))
        }

        function x(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return h(e) ? -1 === ["outstream", "instream"].indexOf(c.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void(r && c.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : b(e, "video").length < 2 ? void(r && c.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (r && c.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video") : 0 === b(e, "banner").length ? void(r && c.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (r && c.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function _(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }

        function A(e) {
            var r = parseInt(c.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === c.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r
        }

        function T(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function I(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach((function(e) {
                Object.prototype.toString.call(c.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, c.logError("Rubicon Bid Adapter: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            })), t
        }
        var j = !1;
        Object(i.registerBidder)(v)
    }
}, [472]);
pbjsChunk([58], {
    520: function(e, r, t) {
        e.exports = t(521)
    },
    521: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", (function() {
            return n
        }));
        var a = t(1),
            u = t(0),
            p = 12,
            o = 11,
            c = 0,
            f = 22,
            n = {
                code: "teads",
                supportedMediaTypes: ["video", "banner"],
                isBidRequestValid: function(e) {
                    var r = !1;
                    if (void 0 !== e.params) {
                        var t = d(u.getValue(e.params, "placementId")),
                            a = d(u.getValue(e.params, "pageId"));
                        r = t && a
                    }
                    return r || u.logError("Teads placementId and pageId parameters are required. Bid aborted."), r
                },
                buildRequests: function(e, r) {
                    var t = e.map(I),
                        a = {
                            referrer: u.getTopWindowUrl(),
                            data: t,
                            deviceWidth: screen.width
                        },
                        n = r.gdprConsent;
                    if (r && n) {
                        var d = "boolean" == typeof n.gdprApplies,
                            i = "string" == typeof n.consentString,
                            s = d ? (function(e, r) {
                                var t = p;
                                e ? (r.hasGlobalScope || r.hasGlobalConsent) && (t = o) : t = c;
                                return t
                            })(n.gdprApplies, n.vendorData) : f;
                        a.gdpr_iab = {
                            consent: i ? n.consentString : "",
                            status: s
                        }
                    }
                    return {
                        method: "POST",
                        url: "//a.teads.tv/hb/bid-request",
                        data: JSON.stringify(a)
                    }
                },
                interpretResponse: function(e, r) {
                    var t = [];
                    return (e = e.body).responses && e.responses.forEach((function(e) {
                        var r = {
                            cpm: e.cpm,
                            width: e.width,
                            height: e.height,
                            currency: e.currency,
                            netRevenue: !0,
                            ttl: e.ttl,
                            ad: e.ad,
                            requestId: e.bidId,
                            creativeId: e.creativeId
                        };
                        t.push(r)
                    })), t
                },
                getUserSyncs: function(e, r, t) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//sync.teads.tv/iframe"
                    }]
                }
            };

        function I(e) {
            var r = {},
                t = u.getValue(e.params, "placementId"),
                a = u.getValue(e.params, "pageId");
            return r.sizes = (function(e) {
                return u.parseSizesInput(function(e) {
                    var r = u.deepAccess(e, "mediaTypes.video.playerSize"),
                        t = u.deepAccess(e, "mediaTypes.video.sizes"),
                        a = u.deepAccess(e, "mediaTypes.banner.sizes"); {
                        if (u.isArray(a) || u.isArray(r) || u.isArray(t)) {
                            var n = [a, t, r];
                            return n.reduce((function(r, e) {
                                return u.isArray(e) && (u.isArray(e[0]) ? e.forEach((function(e) {
                                    r.push(e)
                                })) : r.push(e)), r
                            }), [])
                        }
                        return e.sizes
                    }
                }(e))
            })(e), r.bidId = u.getBidIdParameter("bidId", e), r.bidderRequestId = u.getBidIdParameter("bidderRequestId", e), r.placementId = parseInt(t, 10), r.pageId = parseInt(a, 10), r.adUnitCode = u.getBidIdParameter("adUnitCode", e), r.auctionId = u.getBidIdParameter("auctionId", e), r.transactionId = u.getBidIdParameter("transactionId", e), r
        }

        function d(e) {
            return 0 < parseInt(e)
        }
        Object(a.registerBidder)(n)
    }
}, [520]);
pbjs.processQueue();