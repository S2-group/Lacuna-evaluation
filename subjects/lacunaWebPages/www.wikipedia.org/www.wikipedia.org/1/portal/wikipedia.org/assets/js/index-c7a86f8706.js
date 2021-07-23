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
function addEvent(e, t, n) {
    e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (attachedEvents.push([e, t, n]), e.attachEvent("on" + t, n)))
}

function removeEvent(e, t, n) {
    e && (e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent("on" + t, n))
}

function doWhenReady(e) {
    var t = function() {
        removeEvent(document, "DOMContentLoaded", t), removeEvent(window, "load", t), e(), e = function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[474:476]", functionData => eval(functionData))}
    };
    "complete" === document.readyState ? e() : (addEvent(document, "DOMContentLoaded", t), addEvent(window, "load", t))
}

function getIso639(e) {
    var t = e && e.match(/^\w+/);
    if (t && (t = "nb" === t[0] ? "no" : t[0], !(t.length > 3))) return t
}

function getDevicePixelRatio() {
    return void 0 !== window.devicePixelRatio ? window.devicePixelRatio : void 0 !== window.msMatchMedia ? window.msMatchMedia("(min-resolution: 192dpi)").matches ? 2 : window.msMatchMedia("(min-resolution: 144dpi)").matches ? 1.5 : 1 : 1
}
window.JSON || (window.JSON = {
        parse: function(sJSON) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[1079:1133]", functionData => eval(functionData))},
        stringify: function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[1165:2729]", functionData => eval(functionData))}()
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[2809:3257]", functionData => eval(functionData))}),
    function() {
        window.document.querySelectorAll || (document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function(e, t, n, r, o) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[3433:3794]", functionData => eval(functionData))})
    }(), document.querySelector || (document.querySelector = function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[3869:3960]", functionData => eval(functionData))}), Function.prototype.bind || (Function.prototype.bind = function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[4029:4521]", functionData => eval(functionData))}), Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get && ! function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[4740:5078]", functionData => eval(functionData))}(), window.Element && !Element.prototype.matches && (Element.prototype.matches = function e(t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[5173:5330]", functionData => eval(functionData))}), window.attachedEvents = [], window.onunload = function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[5390:5563]", functionData => eval(functionData))};
var _ = _ || {};
_.now = Date.now || function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[5613:5648]", functionData => eval(functionData))}, _.throttle = function(e, t, n) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[5681:6190]", functionData => eval(functionData))}, _.debounce = function(e, t, n) {
    var r, o, a, i, s, c = function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[6263:6410]", functionData => eval(functionData))};
    return function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[6434:6598]", functionData => eval(functionData))}
};
var mw = mw || {};
mw.html = function() {
        function e(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[6666:7025]", functionData => eval(functionData))}
        return {
            escape: function(t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[7075:7138]", functionData => eval(functionData))},
            element: function(e, t, n) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[7179:8322]", functionData => eval(functionData))},
            Raw: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[8353:8399]", functionData => eval(functionData))},
            Cdata: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[8432:8478]", functionData => eval(functionData))}
        }
    }(), mw.storage = {
        localStorage: function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(),
        get: function(e) {
            try {
                return mw.storage.localStorage.getItem(e)
            } catch (t) {}
            return !1
        },
        set: function(e, t) {
            try {
                return mw.storage.localStorage.setItem(e, t), !0
            } catch (n) {}
            return !1
        },
        remove: function(e) {
            try {
                return mw.storage.localStorage.removeItem(e), !0
            } catch (t) {}
            return !1
        }
    },
    function(e) {
        e.RegExp = {
            escape: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[9235:9318]", functionData => eval(functionData))}
        }
    }(mw),
    function(e, t, n, r, o, a, i) {
        "use strict";

        function s(e) {
            var t, r, o = this,
                a = e.length,
                i = 0,
                s = o.i = o.j = o.m = 0;
            for (o.S = [], o.c = [], a || (e = [a++]); i < n;) o.S[i] = i++;
            for (i = 0; i < n; i++) t = o.S[i], s = u(s + t + e[i % a]), r = o.S[s], o.S[i] = r, o.S[s] = t;
            o.g = function(e) {
                var t = o.S,
                    r = u(o.i + 1),
                    a = t[r],
                    i = u(o.j + a),
                    s = t[i];
                t[r] = s, t[i] = a;
                for (var c = t[u(a + s)]; --e;) r = u(r + 1), a = t[r], i = u(i + a), s = t[i], t[r] = s, t[i] = a, c = c * n + t[u(a + s)];
                return o.i = r, o.j = i, c
            }, o.g(n)
        }

        function c(e, t, n, r, o) {
            if (n = [], o = typeof e, t && "object" == o)
                for (r in e)
                    if (r.indexOf("S") < 5) try {
                        n.push(c(e[r], t - 1))
                    } catch (a) {}
            return n.length ? n : e + ("string" != o ? "\0" : "")
        }

        function l(e, t, n, r) {
            for (e += "", n = 0, r = 0; r < e.length; r++) t[u(r)] = u((n ^= 19 * t[u(r)]) + e.charCodeAt(r));
            e = "";
            for (r in t) e += String.fromCharCode(t[r]);
            return e
        }

        function u(e) {
            return e & n - 1
        }
        t.seedrandom = function(u, d) {
            var g, m = [];
            return u = l(c(d ? [u, e] : arguments.length ? u : [(new Date).getTime(), e, window], 3), m), g = new s(m), l(g.S, e), t.seededrandom = function() {
                for (var e = g.g(r), t = i, s = 0; e < o;) e = (e + s) * n, t *= n, s = g.g(1);
                for (; e >= a;) e /= 2, t /= 2, s >>>= 1;
                return (e + s) / t
            }, u
        }, i = t.pow(n, r), o = t.pow(2, o), a = 2 * o, l(t.random(), e)
    }([], Math, 256, 6, 52),
    function() {
        "use strict";
        var e, t, n, r = "/beacon/event",
            o = [];
        for (t = {
                extend: function(e, t) {
                    var n, r = {};
                    for (n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && (r[n] = e[n]);
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && t[n] && (r[n] = t[n]);
                    return r
                },
                noop: function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[11846:11848]", functionData => eval(functionData))}
            }, n = 0; n < 256; n++) o[n] = (n + 256).toString(16).slice(1);
        e = window.eventLoggingLite = {
            schema: {},
            maxUrlSize: 2e3,
            byteToHex: o,
            checkUrlSize: function(t, n) {
                var r;
                if (n.length > e.maxUrlSize) return r = "Url exceeds maximum length"
            },
            generateRandomSessionId: function() {
                var t, n, r, o = new Array(8),
                    a = window.crypto || window.msCrypto;
                if (a && a.getRandomValues) t = new Uint8Array(8), a.getRandomValues(t);
                else
                    for (t = new Array(8), n = 0; n < 8; n++) 0 === (3 & n) && (r = 4294967296 * Math.random()), t[n] = r >>> ((3 & n) << 3) & 255;
                for (n = 0; n < 8; n++) o[n] = e.byteToHex[t[n]];
                return o.join("")
            },
            validate: function(e, t) {
                var n, r, o, a = [];
                if (!t || !t.properties) return a.push("Missing or empty schema"), a;
                for (n in e) t.properties.hasOwnProperty(n) || a.push("Undeclared property: " + n);
                for (n in t.properties) o = t.properties[n], e.hasOwnProperty(n) ? (r = e[n], o["enum"] && o.required && o["enum"].indexOf(r) === -1 && a.push('Value "' + JSON.stringify(r) + '" for property "' + n + '" is not one of ' + JSON.stringify(o["enum"]))) : o.required && a.push("Missing property:", n);
                return a
            },
            prepare: function(n, r) {
                for (var o = t.extend(n.defaults, r), a = e.validate(o, n); a.length;) console.log(a[a.length - 1]), a.pop();
                return {
                    event: o,
                    revision: n.revision || -1,
                    schema: n.name,
                    webHost: location.hostname,
                    wiki: "metawiki"
                }
            },
            makeBeaconUrl: function(e) {
                var t = encodeURIComponent(JSON.stringify(e));
                return r + "?" + t + ";"
            },
            sendBeacon: /1|yes/.test(navigator.doNotTrack) || !r ? t.noop : navigator.sendBeacon ? function(e) {
                try {
                    navigator.sendBeacon(e)
                } catch (t) {}
            } : function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[14172:14241]", functionData => eval(functionData))},
            logEvent: function(t, n) {
                var r = e.prepare(t, n),
                    o = e.makeBeaconUrl(r),
                    a = e.checkUrlSize(t, o);
                a || e.sendBeacon(o)
            }
        }
    }(), window.wmTest = function(e, t) {
        function n() {
            function e(e) {
                var t = getIso639(e);
                t && r.indexOf(t) < 0 && r.push(t)
            }
            var t, n, r = [];
            for (n in navigator.languages) e(navigator.languages[n]);
            return /Android/i.test(navigator.userAgent) && (t = navigator.userAgent.split(";"), t[3] && e(t[3].trim())), e(navigator.language), e(navigator.userLanguage), e(navigator.browserLanguage), e(navigator.systemLanguage), r
        }

        function r(e) {
            return 1 === Math.floor(Math.seededrandom() * e + 1)
        }

        function o() {
            var e = "rejected";
            return r(u.popSize) && (e = "baseline", u.testGroups && u.testGroups.test && r(10) && (e = r(2) ? u.testGroups.test : u.testGroups.control)), e
        }

        function a() {
            var n, r, o, a = !1;
            return t.storage.localStorage && !/1|yes/.test(navigator.doNotTrack) && (n = t.storage.get(d.SESSION_ID), r = t.storage.get(d.EXPIRES), o = (new Date).getTime(), n && r > parseInt(o, 10) ? a = n : (a = e.generateRandomSessionId(), t.storage.set(d.SESSION_ID, a)), t.storage.set(d.EXPIRES, o + u.sessionLength)), a
        }
        var i, s, c, l, u = {
                popSize: /www.wikipedia.org/.test(location.hostname) ? 200 : 2,
                testGroups: !1,
                sessionLength: 9e5
            },
            d = {
                GROUP: "portal_test_group",
                SESSION_ID: "portal_session_id",
                EXPIRES: "portal_test_group_expires"
            };
        return i = n(), l = location.hash.slice(1) === u.testGroups.test, s = a(), s ? (Math.seedrandom(s), c = l ? u.testGroups.test : o()) : (c = "rejected", l = !0), u.testGroups && c === u.testGroups.test && (document.body.className += " " + c), {
            loggingDisabled: l,
            sessionId: s,
            userLangs: i,
            group: c,
            testGroups: u.testGroups,
            populationSize: u.popSize,
            getTestGroup: o
        }
    }(eventLoggingLite, mw),
    function(e, t) {
        "use strict";

        function n(e, t) {
            var n, r, o, a = {};
            for (n = 0; n < t.length; n++)
                for (o = t[n].nodes, r = 0; r < o.length; r++) o[r].contains(e) && (a = t[n]);
            return a.name
        }

        function r(e) {
            return "A" !== e.tagName && e.parentElement ? r(e.parentElement) : e
        }

        function o() {
            d = {
                event_type: "landing"
            }, e.logEvent(c, d), d = null
        }

        function a(t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[17149:17638]", functionData => eval(functionData))}

        function i(t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[17662:18072]", functionData => eval(functionData))}

        function s(t) {
            var r = t || window.event,
                o = r.target || r.srcElement;
            null === d && (d = {
                event_type: "clickthrough",
                section_used: n(o, l),
                destination: o.action
            }), "search" === d.section_used && (d.selected_language = document.getElementById("searchLanguage").options[document.getElementById("searchLanguage").selectedIndex].lang), d.section_used && e.logEvent(c, d)
        }
        var c, l, u, d, g, m, h = document.cookie.match(/GeoIP=.[^:]/),
            p = document.cookie.match(/GeoIP=.[^:].{2}[^:]/);
        if ("rejected" !== t.group && !t.loggingDisabled) {
            for (c = {
                    name: "WikipediaPortal",
                    revision: 15890769,
                    defaults: {
                        session_id: t.sessionId,
                        event_type: "landing",
                        referer: document.referrer || null,
                        accept_language: t.userLangs.toString(),
                        cohort: t.group
                    },
                    properties: {
                        session_id: {
                            type: "string",
                            required: !0
                        },
                        event_type: {
                            type: "string",
                            required: !0,
                            "enum": ["landing", "clickthrough", "select-language"]
                        },
                        section_used: {
                            type: "string",
                            required: !1,
                            "enum": ["primary links", "search", "language search", "secondary links", "other languages", "other projects"]
                        },
                        destination: {
                            type: "string",
                            required: !1
                        },
                        referer: {
                            type: "string",
                            required: !1
                        },
                        country: {
                            type: "string",
                            required: !1
                        },
                        accept_language: {
                            type: "string",
                            required: !0
                        },
                        cohort: {
                            type: "string",
                            required: !1
                        },
                        selected_language: {
                            type: "string",
                            required: !1
                        }
                    }
                }, l = [{
                    name: "primary links",
                    nodes: document.querySelectorAll('[data-el-section="primary links"]')
                }, {
                    name: "search",
                    nodes: document.querySelectorAll('[data-el-section="search"]')
                }, {
                    name: "language search",
                    nodes: document.querySelectorAll('[data-el-section="language search"]')
                }, {
                    name: "secondary links",
                    nodes: document.querySelectorAll('[data-el-section="secondary links"]')
                }, {
                    name: "other languages",
                    nodes: document.querySelectorAll('[data-el-section="other languages"]')
                }, {
                    name: "other projects",
                    nodes: document.querySelectorAll('[data-el-section="other projects"]')
                }], addEvent(document, "click", a), addEvent(document, "change", i), u = document.getElementsByTagName("form"), m = 0; m < u.length; m++) addEvent(u[m], "submit", s);
            h && (g = h.toString().split("=")[1], "US" === g && p ? c.defaults.country = p.toString().split("=")[1] : c.defaults.country = g, addEvent(window, "load", o)), addEvent(window, "load", o)
        }
    }(eventLoggingLite, wmTest), window.WMTypeAhead = function(e, t) {
        function n(e) {
            var t, n = [];
            for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
            return n.join("&")
        }

        function r() {
            setTimeout(function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[22453:22598]", functionData => eval(functionData))}, 300)
        }

        function o(e) {
            var t = e.relatedTarget;
            t && /suggestion-link/.test(t.className) && (window.location = t.href)
        }

        function a(e, t) {
            var o, a, i, s = document.getElementById("api_opensearch"),
                c = document.getElementsByTagName("head")[0];
            return u = encodeURIComponent(t) || "en", d = encodeURIComponent(e), 0 === d.length ? void r() : (o = "//" + u + ".wikipedia.org/w/api.php?", s && c.removeChild(s), s = document.createElement("script"), s.id = "api_opensearch", a = window.callbackStack.addCallback(window.portalOpensearchCallback), i = {
                action: "query",
                format: "json",
                generator: "prefixsearch",
                prop: "pageprops|pageimages|description",
                redirects: "",
                ppprop: "displaytitle",
                piprop: "thumbnail",
                pithumbsize: y,
                pilimit: b,
                gpssearch: e,
                gpsnamespace: 0,
                gpslimit: b,
                callback: "callbackStack.queue[" + a + "]"
            }, s.src = o + n(i), void c.appendChild(s))
        }

        function i(e, t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[23826:24248]", functionData => eval(functionData))}

        function s(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[24272:25478]", functionData => eval(functionData))}

        function c(e, t) {
            var n, r, o = " active";
            for (r = 0; r < t.length; r++) n = t[r], n !== e ? n.className = n.className.replace(o, "") : / active/.test(e.className) ? e.className = e.className.replace(o, "") : (e.className += o, h.setIndex(r))
        }

        function l(e) {
            var t, n, r = e || window.event,
                o = r.which || r.keyCode;
            f.firstChild && (40 !== o && 38 !== o || (t = f.firstChild.childNodes, n = 40 === o ? h.increment(1) : h.increment(-1), m = !!t && t[n], c(m, t)), 13 === o && m && (r.preventDefault ? r.preventDefault() : r.returnValue = !1, m.children[0].click()))
        }
        var u, d, g, m, h, p = "typeahead-suggestions",
            f = document.getElementById(p),
            v = document.getElementById(e),
            w = document.getElementById(t),
            y = 80 * getDevicePixelRatio(),
            b = 6;
        return f || (f = document.createElement("div"), f.id = p, v.appendChild(f)), window.callbackStack = {
            queue: {},
            index: -1,
            incrementIndex: function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[26596:26662]", functionData => eval(functionData))},
            addCallback: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[26701:26810]", functionData => eval(functionData))},
            deleteSelfFromQueue: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[26857:26909]", functionData => eval(functionData))},
            deletePrevCallbacks: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[26956:27159]", functionData => eval(functionData))}
        }, h = {
            index: -1,
            max: b,
            setMax: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[27252:27296]", functionData => eval(functionData))},
            increment: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[27333:27491]", functionData => eval(functionData))},
            setIndex: function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[27527:27615]", functionData => eval(functionData))},
            clear: function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[27647:27696]", functionData => eval(functionData))}
        }, window.portalOpensearchCallback = function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[27754:28367]", functionData => eval(functionData))}, addEvent(w, "keydown", l), addEvent(w, "blur", function(e) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[28428:28461]", functionData => eval(functionData))}), {
            typeAheadEl: f,
            query: a
        }
    },
    function(e, t) {
        var n, r = document.getElementById("searchInput"),
            o = new t("search-input", "searchInput");
        n = "oninput" in document ? "input" : "propertychange", addEvent(r, n, _.debounce(function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[28767:28856]", functionData => eval(functionData))}, 100))
    }(wmTest, WMTypeAhead),
    function(e, t) {
        function n(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (n) {
                t = ""
            }
            return t
        }

        function r(e) {
            var t, n, r = [];
            for (n = 0; n < e.length; n++) t = e[n].getAttribute("lang"), r.push(t);
            return r
        }

        function o() {
            var e, t, n, r;
            for (d = 0; d < h.length; d++) e = h[d], t = g.indexOf(e), n = t >= 0, r = t === d, n ? r || g.splice(d, 0, g.splice(t, 1)[0]) : (g.splice(d, 0, e), g.pop())
        }

        function a(e, t) {
            var n = e.getElementsByTagName("a")[0],
                r = t.name.replace(/<\/?[^>]+(>|$)/g, "");
            n.setAttribute("href", "//" + t.url), n.setAttribute("id", "js-link-box-" + t.lang), n.setAttribute("data-slogan", t.slogan || "The Free Encyclopedia"), n.setAttribute("title", r + " — " + t.siteName + " — " + (t.slogan || "")), e.setAttribute("lang", t.lang), e.getElementsByTagName("strong")[0].textContent = r, e.getElementsByTagName("bdi")[0].textContent = t.numPages + "+", e.getElementsByTagName("span")[0].textContent = t.entries || ""
        }

        function i(e) {
            var t, n, r, o, a, i = document.querySelectorAll(".central-featured-lang"),
                s = !0;
            for (a = 0; a < i.length && s === !0; a++) n = i[a].getAttribute("lang"), s = e.indexOf(n) >= 0;
            for (a = 0; a < i.length; a++) s && (t = i[a], r = t.className, o = "central-featured-lang lang" + (a + 1), r !== o && (t.className = o))
        }

        function s(t, r) {
            var o, s = new XMLHttpRequest;
            s.open("GET", encodeURI("portal/wikipedia.org/assets/l10n/" + r + "-" + translationsHash + ".json"), !0), s.onload = function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[30726:30942]", functionData => eval(functionData))}, s.send()
        }

        function c(e, t) {
            var n = m;
            n[t] ? a(e, n[t]) : s(e, t)
        }

        function l(e, t) {
            var n, r, o = null;
            for (r = t.length - 1; r >= 0 && null === o; r--) n = e[r].getAttribute("lang"), t.indexOf(n) < 0 && (o = e[r]);
            return o
        }

        function u() {
            var e, t, n, r, o;
            for (d = 0; d < g.length; d++) e = document.querySelectorAll(".central-featured-lang"), t = g[d], n = document.querySelector(".central-featured-lang[lang=" + t + "]"), n ? (r = Array.prototype.indexOf.call(e, n), r !== d && f.insertBefore(n, e[d])) : (o = l(e, g), c(o, t), f.insertBefore(o, e[d])), (n || o).setAttribute("dir", rtlLangs.indexOf(t) >= 0 ? "rtl" : "ltr")
        }
        var d, g, m, h = t.userLangs,
            p = document.querySelectorAll(".central-featured-lang"),
            f = document.querySelector(".central-featured"),
            v = e.storage.get("translationHash");
        m = n(e.storage.get("storedTranslations")) || {}, g = r(p), v !== translationsHash && (e.storage.set("translationHash", translationsHash), e.storage.remove("storedTranslations")), wmL10nVisible.ready || (o(), u(), i(g))
    }(mw, wmTest),
    function() {
        "use strict";

        function e(e) {
            return document.getElementById(e)
        }

        function t(e) {
            var t, n;
            document.querySelector && "www-wiktionary-org" === document.body.id && !e.match(/\W/) && (t = document.querySelector('option[lang|="' + e + '"]'), n = t && t.getAttribute("data-logo"), n && document.body.setAttribute("data-logo", n))
        }

        function n(e) {
            var t = document.createElement("link"),
                n = window.location.hostname.split("."),
                r = n.pop(),
                o = n.pop();
            t.rel = "preconnect", t.href = "//" + e + "." + o + "." + r, document.head.appendChild(t)
        }

        function r() {
            var e = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || "";
            return e.toLowerCase().split("-")[0]
        }

        function o() {
            var e = document.cookie.match(/(?:^|\W)searchLang=([^;]+)/);
            return (e ? e[1] : r()).toLowerCase()
        }

        function a(e, t) {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }

        function i(t) {
            var n, r, o, i = "data-convert-hans",
                s = "data-converttitle-hans";
            if ("zh-hans,zh-cn,zh-sg,zh-my,".indexOf(t + ",") !== -1)
                for (o = ["zh_art", "zh_others", "zh_search", "zh_tag", "zh_top10", "zh-yue_wiki", "gan_wiki", "hak_wiki", "wuu_wiki"], n = 0; n < o.length; n += 1) r = e(o[n]), r && (r.hasAttribute(i) && a(r, r.getAttribute(i)), r.hasAttribute(s) && (r.title = r.getAttribute(s)))
        }

        function s(t) {
            var n;
            0 === t.indexOf("zh") && (n = t.substring(3), "mo" === n ? n = "hk" : "my" === n && (n = "sg"), n && "cn,tw,hk,sg,".indexOf(n + ",") >= 0 && (e("zh_wiki").href += "zh-" + n + "/", e("zh_others").href = e("zh_others").href.replace("wiki/", "zh-" + n + "/")), i(t))
        }

        function c(e) {
            var n, o, a;
            e && (n = r(), o = n.match(/^\w+/), a = new Date, t(e), o && o[0] === e ? a.setTime(a.getTime() - 1) : a.setFullYear(a.getFullYear() + 1), document.cookie = "searchLang=" + e + ";expires=" + a.toUTCString() + ";domain=" + location.host + ";")
        }

        function l(e, t) {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[34590:35000]", functionData => eval(functionData))}

        function u() {
            var e, t, n, r, o, a = getDevicePixelRatio(),
                i = new Image;
            if (a > 1 && void 0 === i.srcset)
                for (e = document.getElementsByTagName("img"), o = 0; o < e.length; o++) t = e[o], n = t.getAttribute("srcset"), "string" == typeof n && "" !== n && (r = l(a, n), void 0 !== r.src && (t.setAttribute("src", r.src), void 0 !== r.width && t.setAttribute("width", r.width), void 0 !== r.height && t.setAttribute("height", r.height)))
        }
        doWhenReady(function() {
            var r, i, c, l, u, d, g, m, h, p = o();
            if (p && (s(p), r = getIso639(p), i = e("searchLanguage"))) {
                for (c = i.getElementsByTagName("option"), l = 0, u = c.length; !d && l < u; l += 1) c[l].value === r && (d = r);
                !d && document.querySelector && (g = document.querySelector('.langlist a[lang|="' + r + '"]'), g && (d = r, m = document.createElement("option"), m.setAttribute("lang", r), m.setAttribute("value", r), h = g.textContent || g.innerText || r, a(m, h), i.appendChild(m))), d && (i.value = d, t(d), n(d))
            }
        }), doWhenReady(function() {
            var t, n, r, o = e("searchInput"),
                a = e("searchLanguage");
            if (o)
                for (void 0 === o.autofocus ? o.focus() : window.scroll(0, 0), t = location.search && location.search.substr(1).split("&"), n = 0; n < t.length; n += 1)
                    if (r = t[n].split("="), "search" === r[0] && r[1]) {
                        o.value = decodeURIComponent(r[1].replace(/\+/g, " "));
                        break
                    }
            addEvent(a, "change", function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[36699:36751]", functionData => eval(functionData))})
        }), doWhenReady(function() {
            var e = document.searchwiki && document.searchwiki.elements.uselang;
            e && (e.value = r())
        }), doWhenReady(u)
    }(), window.mw || (window.mw = window.mediaWiki = {
        loader: {
            state: function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[37035:37037]", functionData => eval(functionData))}
        }
    }),
    function() {
        function e() {
            / lang-list-active /g.test(document.body.className) ? (document.body.className = document.body.className.replace(" lang-list-active ", ""), mw.storage.set("lang-list-active", "false")) : (document.body.className += " lang-list-active ", mw.storage.set("lang-list-active", "true"))
        }

        function t(e) {
            var t, n, r, o = document.getElementsByTagName("a"),
                a = !0;
            for (t = 0; t < o.length && a; t++) n = o[t], r = n.getAttribute("lang"), r && e.indexOf(r) >= 0 && (a = !1);
            return a
        }
        var n = document.getElementById("js-lang-list-button");
        ("true" === mw.storage.get("lang-list-active") || t(wmTest.userLangs)) && e(), addEvent(n, "click", function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[37849:37876]", functionData => eval(functionData))})
    }(),
    function(e, t, n, r) {
        function o(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (n) {
                t = ""
            }
            return t
        }

        function a() {
            var e = n.storage.get("translationHash");
            return t === e && e
        }

        function i(e, t) {
            var r = o(n.storage.get("storedTranslations")) || {};
            r[e] = t, n.storage.set("storedTranslations", JSON.stringify(r))
        }

        function s(e, t) {
            var n = 0;
            for (t = String(t).split("."); n < t.length;) {
                if (void 0 === e || null === e) return;
                e = e[t[n++]]
            }
            return e
        }

        function c(e) {
            var t, n, r, o, a, i, c = document.querySelectorAll(".jsl10n"),
                l = new RegExp(/<a[^>]*>([^<]+)<\/a>/);
            for (t = 0; t < c.length; t++)
                if (n = c[t], r = n.getAttribute("data-jsl10n"), o = s(e, r), "string" == typeof o && o.length > 0) switch (r) {
                    case "app-links.other":
                        l.test(o) ? n.innerHTML = o : n.firstChild.textContent = o;
                        break;
                    case "license":
                        n.innerHTML = o;
                        break;
                    case "terms":
                        n.firstChild.textContent = o, a = s(e, "terms-link"), a && n.firstChild.setAttribute("href", a);
                        break;
                    case "Privacy Policy":
                        n.firstChild.textContent = o, i = s(e, "privacy-policy-link"), i && n.firstChild.setAttribute("href", i);
                        break;
                    default:
                        n.textContent = o
                }
            wmL10nVisible.makeVisible()
        }

        function l(e) {
            document.documentElement.lang = e, r.indexOf(e) >= 0 ? document.dir = "rtl" : document.dir = "ltr"
        }
        var u, d, g, m, h = e.userLangs[0];
        if ("en" === e.userLangs[0]) return void wmL10nVisible.makeVisible();
        if (u = a(), d = u ? o(n.storage.get("storedTranslations")) || {} : {}, d[h]) {
            if (m = d[h], wmL10nVisible.ready) return;
            l(h), c(m)
        } else g = new XMLHttpRequest, g.open("GET", encodeURI("portal/wikipedia.org/assets/l10n/" + h + "-" + t + ".json"), !0), g.onreadystatechange = function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[40369:40670]", functionData => eval(functionData))}, g.send()
    }(wmTest, translationsHash, mw, rtlLangs),
    function(e) {
        var t = document.cookie.match(/GeoIP=.[^:]/),
            n = t && t.toString().split("=")[1],
            r = ["FR"],
            o = "fr",
            a = e.userLangs,
            i = /(hideWikipediaPortalBanner|centralnotice_hide_fundraising)/.test(document.cookie),
            s = document.querySelectorAll(".banner-container"),
            c = s[Math.floor(Math.random() * s.length)],
            l = c.querySelector(".banner__close"),
            u = c.querySelector("a"),
            d = "banner-visible";
        addEvent(l, "click", function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/index-c7a86f8706.js[41308:41400]", functionData => eval(functionData))}), u.href = "https://donate.wikimedia.org/?utm_medium=portal&utm_campaign=portalBanner", u.href += "&uselang=fr&country=FR", u.href += "&utm_source=" + c.id, u.target = "_blank", !i && n && r.indexOf(n) > -1 && a[0] === o && c.classList.add(d)
    }(wmTest);