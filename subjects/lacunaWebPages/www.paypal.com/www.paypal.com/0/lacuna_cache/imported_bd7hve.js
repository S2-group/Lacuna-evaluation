/*@ 2019 PayPal (v1.3.26) */ ! function() {
  "use strict";

  function d(t) {
    return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function a(t, e, n) {
    var r;
    if ((n = n || {}).expires) {
      var i = new Date;
      i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3), r = "; expires=" + i.toGMTString()
    } else r = "";
    document.cookie = t + "=" + e + r + "; path=/"
  }

  function m(t) {
    for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
      for (var r = e[n];
        " " === r.charAt(0);) r = r.substring(1, r.length);
      if (0 === r.indexOf(t + "=")) return r.substring((t + "=").length, r.length)
    }
    return null
  }

  function h(t) {
    a(t, "", {
      expires: -1
    })
  }
  var w = 1,
    y = 0;

  function p() {
    return (new Date).getTime()
  }

  function o(t, e) {
    for (var n in e) n && "undefined" != typeof e[n] && "" !== e[n] && (t = c(t, n, e[n]));
    return t
  }

  function c(t, e, n) {
    if (e && (n || 0 === n || !1 === n)) {
      if ("object" === d(n)) try {
        n = JSON.stringify(n)
      } catch (r) {}
      t += "&" + e + "=" + encodeURIComponent(n)
    }
    return t
  }

  function k() {
    var t = window,
      e = "inner";
    return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
      width: t[e + "Width"],
      height: t[e + "Height"]
    }
  }

  function b(t) {
    var e = -1;
    return void 0 !== t && (e = t === parseInt(t, 10) ? t : 0 < t && t < 1 ? parseFloat(t.toFixed(1)) : parseFloat(t.toFixed(0))), e
  }

  function r(t) {
    return Number(t) === t && 0 <= t
  }

  function v(t, e) {
    var n = 0;
    return r(e) && r(t) && e <= t && (12e4 < (n = t - e) && (n = 0), n = b(n)), n
  }

  function l() {
    var t = document.body,
      e = document.documentElement || {};
    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
  }
  window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || "https://t.paypal.com/ts";
  var n = function n() {},
    t = function t() {
      return {}
    };
  "undefined" == typeof JSON && (JSON = {}, JSON.stringify = n, JSON.parse = t, window.JSON = JSON);
  var P = "performance" in window && window.performance || {},
    s = function s() {
      return !(!P || "function" != typeof P.getEntries)
    };
  if (P && !P.now) {
    var e = P.timing;
    P.now = function() {
      var t = p() - (e && e.navigationStart || 0);
      return 0 < t ? t : 0
    }
  }
  String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
    if (null == this) throw new TypeError("Array.indexOf() - can't convert \"" + this + '" to object');
    var n = isFinite(e) ? Math.floor(e) : 0,
      r = this instanceof Object ? this : new Object(this),
      i = isFinite(r.length) ? Math.floor(r.length) : 0;
    if (i <= n) return -1;
    if (n < 0 && (n = Math.max(i + n, 0)), t === undefined) {
      do {
        if (n in r && r[n] === undefined) return n
      } while (++n < i)
    } else
      do {
        if (r[n] === t) return n
      } while (++n < i);
    return -1
  }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
    var e;
    if (null == this) throw new TypeError("this is null or not defined");
    var n = Object(this),
      r = n.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    1 < arguments.length && (e = arguments[1]);
    for (var i = 0; i < r;) {
      if (i in n) {
        var o = n[i];
        t.call(e, o, i, n)
      }
      i++
    }
  }), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, i) {
    var o = document,
      a = o.createStyleSheet();
    for (i = o.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
      for (a.addRule(t[n], "k:v"), r = i.length; r--;) i[r].currentStyle.k && e.push(i[r]);
      a.removeRule(0)
    }
    return e
  });
  var u = {},
    f = {},
    i = -1;

  function g(t) {
    for (var e in t)
      if (t.hasOwnProperty(e)) return !0;
    return !1
  }

  function E(t, e, n) {
    try {
      t(e, n)
    } catch (r) {
      setTimeout(function E(e) {
        return function() {
          throw e
        }
      }(r), 0)
    }
  }

  function _(t, e, n) {
    t(e, n)
  }

  function T(t, e, n, r) {
    var i = f[e],
      o = r ? _ : E;
    if (f.hasOwnProperty(e))
      for (var a in i) i.hasOwnProperty(a) && o(i[a], t, n)
  }

  function A(t, e, n, r) {
    var i = function o(n, r, i) {
      return function() {
        var t = String(n),
          e = t.lastIndexOf(".");
        for (T(n, n, r, i); - 1 !== e;) e = (t = t.substr(0, e)).lastIndexOf("."), T(n, t, r, i)
      }
    }(t, e, r);
    return !! function a(t) {
      for (var e = String(t), n = Boolean(f.hasOwnProperty(e) && g(f[e])), r = e.lastIndexOf("."); !n && -1 !== r;) r = (e = e.substr(0, r)).lastIndexOf("."), n = Boolean(f.hasOwnProperty(e) && g(f[e]));
      return n
    }(t) && (!0 === n ? i() : setTimeout(i, 0), !0)
  }
  u.publish = function(t, e) {
    return A(t, e, !1, u.immediateExceptions)
  }, u.publishSync = function(t, e) {
    return A(t, e, !0, u.immediateExceptions)
  }, u.subscribe = function(t, e) {
    if ("function" != typeof e) return !1;
    f.hasOwnProperty(t) || (f[t] = {});
    var n = "uid_" + String(++i);
    return f[t][n] = e, n
  }, u.subscribeOnce = function(t, e) {
    var n = u.subscribe(t, function() {
      u.unsubscribe(n), e.apply(this, arguments)
    });
    return u
  }, u.clearAllSubscriptions = function() {
    f = {}
  }, u.clearSubscriptions = function(t) {
    for (var e in f) f.hasOwnProperty(e) && 0 === e.indexOf(t) && delete f[e]
  }, u.unsubscribe = function(t) {
    var e, n, r, i = function i(t) {
        var e;
        for (e in f)
          if (f.hasOwnProperty(e) && 0 === e.indexOf(t)) return !0;
        return !1
      },
      o = "string" == typeof t && (f.hasOwnProperty(t) || i(t)),
      a = !o && "string" == typeof t,
      c = "function" == typeof t,
      s = !1;
    if (!o) {
      for (e in f)
        if (f.hasOwnProperty(e)) {
          if (n = f[e], a && n[t]) {
            delete n[t], s = t;
            break
          }
          if (c)
            for (r in n) n.hasOwnProperty(r) && n[r] === t && (delete n[r], s = !0)
        } return s
    }
    u.clearSubscriptions(t)
  };
  var C = {
    click: {
      elements: "*[data-pa-click]",
      onClick: n,
      request: {
        keys: {
          linkUrl: "lu"
        },
        values: {
          eventType: "cl"
        }
      }
    },
    formAbandonment: {
      elements: "form",
      request: {
        keys: {
          lastFormFocused: "lf",
          lastInputFocused: "li"
        },
        values: {
          eventType: "fa"
        }
      }
    },
    impression: {
      request: {
        keys: {
          cookiesEnabled: "ce",
          plugins: "pl",
          pageTitle: "pt",
          referrer: "ru",
          screenColorDepth: "cd",
          screenWidth: "sw",
          screenHeight: "sh",
          deviceWidth: "dw",
          deviceHeight: "dh",
          browserWidth: "bw",
          browserHeight: "bh"
        },
        values: {
          eventType: "im"
        }
      }
    },
    error: {
      values: {
        eventType: "err"
      }
    },
    scroll: {
      values: {
        eventType: "sd"
      }
    },
    request: {
      data: {},
      unloadDelay: !1,
      keys: {
        version: "v",
        timestamp: "t",
        gmtOffset: "g",
        eventType: "e"
      },
      values: {},
      url: window.fptiserverurl,
      onBeaconCreate: n
    }
  };

  function O(t) {
    var e = navigator.mimeTypes;
    if (e && e.length) {
      var n = e[t];
      return n && n.enabledPlugin
    }
  }

  function S() {
    var t = [],
      e = {
        director: "application/x-director",
        mediaplayer: "application/x-mplayer2",
        pdf: "application/pdf",
        quicktime: "video/quicktime",
        real: "audio/x-pn-realaudio-plugin",
        silverlight: "application/x-silverlight"
      };
    for (var n in e) O(e[n]) && t.push(n);
    var r = function i() {
      var t = null;
      if (navigator.plugins && 0 < navigator.plugins.length) {
        var e = "application/x-shockwave-flash",
          n = navigator.mimeTypes;
        n && n[e] && n[e].enabledPlugin && n[e].enabledPlugin.description && (t = n[e].enabledPlugin.description)
      }
      return t
    }();
    return r && t.push(r), t.join(",")
  }
  var I = {
      IS_MARKED: "pa-marked",
      PA_CL: "data-pa-click",
      PA_EX: "data-pa-exit",
      PA_DL: "data-pa-download",
      ERR_TYPE: "WINDOW_ONERROR",
      REJECTION_ERR_TYPE: "PROMISE_ONERROR",
      MI_ERR: "MI_ERROR",
      MI_OPT_OUT: "T=0",
      MI_POLICY: "gdpr_eu",
      ERR_MSG: "Script error",
      E: {
        BEACON: "pa.beacon",
        INIT: "pa.init"
      },
      HOST_PP: "paypal.com",
      HOST_PPOBJ: "paypalobjects.com",
      URL_PPOBJ: "https://www.paypalobjects.com",
      MOB_TP: {
        PRE: "_fpti"
      },
      STORE: {
        TP_ID: "fpti.tp",
        TK_ID: "fpti.tk"
      },
      QP_RL: {
        LEN: 512,
        HTML_RX: /<[^>]*>/g
      },
      V3P: {
        GA: "ga",
        DC: "dc",
        GTAG: "gtag",
        MPP: "mpp"
      }
    },
    L = null,
    x = null;
  try {
    L = window.localStorage, x = window.sessionStorage
  } catch (me) {
    x = L = null
  }

  function R(t) {
    if (!t || t.constructor !== Object && t.constructor !== Array) return t;
    var e = t.constructor();
    for (var n in t) e[n] = R(t[n]);
    return e
  }

  function D(t, e) {
    e = e || {};
    var n = R(t = t || {});
    for (var r in e) try {
      e[r].constructor === Object && n[r] && n[r].constructor === Object ? n[r] = D(n[r], e[r]) : n[r] = e[r]
    } catch (me) {
      n[r] = e[r]
    }
    return n
  }

  function q(t, e) {
    return t && t.data && "string" == typeof t.data && (t.data = j(t.data)), e && e.data && "string" == typeof e.data && (e.data = j(e.data)), D(t, e)
  }

  function j(t) {
    var e = {};
    if (!t || void 0 === t) return e;
    if ("object" === d(t)) return t;
    for (var n = t.split("&"), r = 0; r < n.length; r++) {
      var i = n[r].split("="),
        o = i.shift(),
        a = i.join("=");
      e[o] = decodeURIComponent(a)
    }
    return e
  }

  function F(t, e, n) {
    for (var r in void 0 === n && (n = !0), t = t || {}, e = e || {}) e[r] && (n || !n && !t[r]) && (t[r] = e[r]);
    return t
  }

  function U(t, e) {
    var n = [];
    if ((e = e || document).querySelectorAll) {
      var r = e.querySelectorAll(t);
      if ("object" !== d(r) && "function" != typeof r || "number" != typeof r.length) "object" === d(r) && (n = r);
      else
        for (var i = 0; i < r.length; i++) n.push(r[i])
    }
    return n
  }

  function N(t, e) {
    var n;
    return function() {
      return t && (n = t.apply(e || this, arguments), t = null), n
    }
  }

  function B(t) {
    t = N(t), "complete" === document.readyState ? t() : (M(window, "load", t), M(window, "DOMContentLoaded", function() {
      setTimeout(t, 3e3)
    }))
  }

  function M(t, e, n) {
    if (t.addEventListener) t.addEventListener(e, n, !1);
    else if (t.attachEvent) return t.attachEvent("on" + e, n)
  }

  function J(t, e, n) {
    if (e.removeEventListener) e.removeEventListener(t, n, !1);
    else if (e.detachEvent) return e.detachEvent("on" + t, n)
  }

  function H() {
    var t = !1,
      e = function n() {
        var t = null;
        try {
          if (L) {
            var e = "pa_feature_mod";
            (!(t = +L.getItem(e)) || t < 0 || 100 < t) && (t = Math.floor(Math.random() * Math.floor(100)), L.setItem(e, t))
          }
        } catch (me) {}
        return t
      }();
    return e && e < 2 && (t = !0), t
  }

  function V(t, e) {
    var n;
    return e && (n = t.getAttribute(e)), n || (n = t.getAttribute("id") || t.getAttribute("name") || t.getAttribute("data-name") || t.getAttribute("class") || t.getAttribute("href") || t.getAttribute("alt") || function i(t) {
      for (var e = t.childNodes, n = null, r = 0; r < e.length; r++) {
        if (3 === (n = e[r]).nodeType && n.nodeValue && n.nodeValue.match(/\S/)) return n.nodeValue.trim();
        if (1 === n.nodeType && n.childNodes.length) return i(n)
      }
    }(t)), n
  }

  function Y(t, e) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
  }

  function G(t, e) {
    var n = "";
    if ("string" == typeof t && "string" == typeof e) {
      t = t.split(",");
      for (var r = 0; r < t.length; r++) r !== t.length - 1 ? n += e.trim() + " " + t[r].trim() + ", " : n += e.trim() + " " + t[r].trim()
    } else n = t;
    return n
  }

  function z(t) {
    var e = (t = "string" == typeof t ? t : "").length,
      n = /&res=(%7B.*%7D)/i,
      r = t.match(n);
    return 6e3 < e && (t = c(t, "plsize", 1), r && (t = t.replace(n, ""))), t
  }

  function W(t, e) {
    if (t) {
      var n = document.createElement("script");
      if (n.setAttribute("crossorigin", "anonymous"), n.setAttribute("src", t), e) {
        var r = !1;
        n.onreadystatechange = n.onload = function() {
          r || e(), r = !0
        }
      }
      B(function() {
        document.body.appendChild(n)
      })
    }
  }

  function K(t, e) {
    var n = !1,
      r = e || window.location && window.location.hostname || "",
      i = /paypal.(com|me)$/;
    return t && (i = /paypal.com$/), -1 === r.indexOf("localhost") && i.test(r) && (n = !0), n
  }

  function X() {
    return decodeURIComponent(m("enforce_policy") || Q(window, "fpti.ef_policy")) === I.MI_POLICY
  }

  function $() {
    return decodeURIComponent(m("cookie_prefs") || Q(window, "fpti.c_prefs")) === I.MI_OPT_OUT | 0
  }

  function Q(t, e, n) {
    try {
      return e.replace("[", ".").replace("]", "").split(".").reduce(function(t, e) {
        return t && t[e] ? t[e] : n
      }, t)
    } catch (r) {
      return n
    }
  }

  function Z() {
    var t = {},
      e = m("ts") || m("ts_c"),
      n = decodeURIComponent(e);
    if (n)
      for (var r = n.split("&"), i = 0; i < r.length; i++) {
        var o = r[i].split("=");
        o[0] && o[1] && (t[o[0]] = o[1])
      }
    return t
  }

  function tt(t) {
    if (!t || "string" != typeof t) return "";
    var e = t.replace(I.QP_RL.HTML_RX, "");
    return t.length >= I.QP_RL.LEN ? e.substring(0, I.QP_RL.LEN) : e
  }

  function et(t) {
    t && void 0 !== t && (t.constructor === Object && function n(t) {
      if (!t || void 0 === t || "object" !== d(t)) return !0;
      for (var e in t)
        if (t.hasOwnProperty(e)) return !1;
      return !0
    }(t) || rt(I.STORE.TP_ID, JSON.stringify(t)))
  }

  function nt(t) {
    if (x) return x.getItem(t)
  }

  function rt(t, e) {
    if (x && e) try {
      x.setItem(t, e)
    } catch (me) {}
  }

  function it() {
    var t = function r() {
        return JSON.parse(nt(I.STORE.TP_ID))
      }() || function s(t) {
        var e = j(t),
          n = {};
        if (!e || void 0 === e) return n;
        for (var r = 0, i = Object.keys(e); r < i.length; r++) {
          var o = i[r],
            a = o.split("."),
            c = a.shift();
          c && c === I.MOB_TP.PRE && (n[a.join(".")] = tt(e[o]))
        }
        return n
      }(function i() {
        var t = window.location.search || "";
        return "?" === t.charAt(0) && (t = t.slice(1)), t
      }()) || {},
      e = function o() {
        return nt(I.STORE.TK_ID)
      }() || t.tk || "";
    delete t.tk,
      function a(t) {
        t && void 0 !== t && "string" == typeof t && rt(I.STORE.TK_ID, t)
      }(e), et(t);
    var n = {
      data: {
        tk: e
      }
    };
    return n.data = Y(t, n.data), n
  }
  var ot = 0,
    at = !1,
    ct = !1,
    st = 31e3,
    ut = /^xmlhttprequest|fetch/i,
    lt = /^xmlhttprequest|fetch|iframe|script/i;

  function ft() {
    return P && P.now && P.timing ? Math.round(P.now() + P.timing.navigationStart) : p()
  }

  function pt(t) {
    var e = [];
    return P && "function" == typeof P.getEntriesByType && (e = P.getEntriesByType(t)), e
  }

  function dt(t) {
    return t.loadEventEnd || t.loadEventStart || t.domComplete || t.domInteractive
  }

  function gt(t, e) {
    t = t || {};
    var n = {},
      r = (e = e || {}).data || {},
      i = P.now();
    if (P) {
      var o = pt("navigation")[0],
        a = pt("paint"),
        c = a[a.length - 1],
        s = 0,
        u = {},
        l = P.timing;
      if (l && !at) {
        at = !0;
        var f = l.secureConnectionStart || l.connectEnd,
          p = dt(l) || Date.now();
        n.t1 = v(l.requestStart, l.fetchStart), n.t1c = v(l.connectEnd, l.fetchStart), n.t1d = v(l.domainLookupEnd, l.domainLookupStart), n.t1s = v(l.connectEnd, f), n.t2 = v(l.responseStart, l.requestStart), n.t3 = v(l.responseEnd, l.responseStart), n.t4d = v(l.domComplete, l.domLoading), n.t4 = v(p, l.domLoading), n.t4e = v(p, l.loadEventStart), n.tt = v(p, l.navigationStart), s = v(l.requestStart, l.navigationStart), o && (n.rdc = o.redirectCount || 0, u.nt = o.type), l.msFirstPaint ? u.tcp = v(l.msFirstPaint, l.navigationStart) : c ? u.tcp = b(c.startTime) : o && (u.tcp = b(o.domInteractive)), navigator.connection && (u.et = navigator.connection.effectiveType)
      }
      if (!t.view) {
        var d = {
            t10: s
          },
          g = r.view && r.view._t11s;
        ct ? g && (d.t11 = b(i - g)) : (d.t11 = b(i), ct = !0), d.t11 = 225 < d.t11 ? d.t11 - 225 : d.t11, 6e4 < d.t11 && (d.t11 = n.tt || 0), u.tcp && (d.tcp = u.tcp), u.et && (d.et = u.et), u.nt && (d.nt = u.nt), n.view = d, ht(n, !0)
      }
    }
    return PAYPAL.analytics.perf = n
  }

  function vt(t, e) {
    var n, r, i, o, a, c = P.getEntries(),
      s = !0;
    if (-1 != t.indexOf("://") && (s = !1), c)
      for (var u = c.length - 1; 0 < u; u--) {
        var l = c[u];
        if ((!e || e && l.initiatorType === e) && (s && -1 !== l.name.indexOf(t) || !s && l.name === t)) {
          i = void 0, i = {}, o = (r = l).secureConnectionStart || r.connectEnd, a = r.responseStart || r.requestStart || r.fetchStart, i.t1 = v(r.requestStart, r.fetchStart), i.t1d = v(r.domainLookupEnd, r.domainLookupStart), i.t1s = v(r.connectEnd, o), i.t2 = v(r.responseStart, r.requestStart), i.t3 = v(r.responseEnd, a), i.tt = b(r.duration), n = i;
          break
        }
      }
    return n
  }

  function mt() {
    var t = P.getEntries(),
      e = 0 === ot ? t : t.slice(ot);
    ot = t.length;
    var n = H(),
      r = {
        rtt: function c() {
          var t = vt("/ts?", "img");
          return t && t.tt || 0
        }(),
        view: {}
      },
      i = {
        scr: {
          startTimes: [],
          responseEnds: [],
          t9: 0,
          t12: 0,
          t13: 0,
          cnt: 0
        },
        xhr: []
      };
    for (var o in n && e.forEach(function(t) {
        var e = t.initiatorType,
          n = t.name || "";
        "script" === e ? (i.scr.startTimes.push(t.startTime), i.scr.responseEnds.push(t.responseEnd), 0 < t.redirectStart && (i.scr.t13 += t.redirectEnd - t.redirectStart), t.duration > i.scr.t12 && (i.scr.t12 = t.duration), i.scr.cnt++) : "" !== e && !ut.test(e) || -1 !== n.indexOf(I.HOST_PPOBJ) || i.xhr.push({
          nm: function a(t) {
            var e = document.createElement("a");
            e.href = t;
            var n = e.pathname.replace(/\/*$/, ""),
              r = n.indexOf("&"); - 1 !== r && (n = n.substr(0, r));
            var i = n.split("/"),
              o = e.hostname;
            return -1 === o.indexOf(I.HOST_PP) && -1 === o.indexOf(I.HOST_PPOBJ) ? i.join("").length ? o + "/./" + i.pop() : o : i.join("").length ? i.slice(-2).join("/") : "/"
          }(t.name),
          t4: b(t.connectStart),
          t5: b(t.secureConnectionStart),
          t6: b(t.connectEnd),
          t7: b(t.domainLookupStart),
          t8: b(t.domainLookupEnd),
          t9: b(t.duration),
          ta: b(t.fetchStart),
          td: b(t.requestStart),
          te: b(t.responseStart),
          tf: b(t.responseEnd),
          t10: b(t.startTime)
        })
      }), i.scr.t9 = Math.max.apply(null, i.scr.responseEnds) - Math.min.apply(null, i.scr.startTimes), i.scr.t9 = i.scr.t9 < 0 || null === i.scr.t9 && "object" === d(i.scr.t9) ? i.scr.t12 : i.scr.t9, i)
      if (delete i[o].startTimes, delete i[o].responseEnds, "xhr" !== o) {
        for (var a in i[o]) i[o][a] = b(i[o][a]);
        i[o].cnt || delete i[o]
      } else i[o].length || delete i[o];
    return r.res = i, r
  }

  function ht(t, e) {
    var n, r = t.res;
    !s() || !e && r || (n = mt(), r = r ? q(r, n.res) : n.res, t.res = r),
      function i(t, e) {
        (e = e || {}).rtt && (t.rtt = e.rtt), 0 <= e.rdc && (t.rdc = e.rdc);
        var n = t.view = t.view || {};
        n.t10 = n.t10 || t.t1 || 0, n.t11 = n.t11 || 0, n.t11 < n.tcp && (n.t11 = n.tcp), n.t10 > n.t11 && (n.t10 = 0), n.t11 > st && (n.t11 = st);
        var r = e.view;
        r && (r.tcp && (n.tcp = r.tcp), r.nt && (n.nt = r.nt), r.dbs && (n.dbs = r.dbs), r.ebs && (n.ebs = r.ebs))
      }(t, n)
  }

  function wt(e) {
    var n, o = ft(),
      a = o,
      c = 0,
      s = 0,
      l = function u(t) {
        t = t || 4;
        for (var e = [], n = "", r = !1, i = 0; i < t; i++) e.push(0), n += "1";
        return {
          push: function(t) {
            0 != (t = +t) && 1 !== t && (t = 0), e.shift(), e.push(t)
          },
          skip: function() {
            r = !0
          },
          isTrue: function() {
            var t = e.join("");
            return r || (r = t === n), r
          }
        }
      }(),
      f = !1;

    function p(t) {
      return clearInterval(n), f = !1, e(t)
    }

    function t() {
      var t = ft(),
        e = t - a,
        n = t - o;
      if (a = t, PAYPAL.analytics.isUnloading) p(n);
      else {
        for (1e4 < t - o && (l.skip(), f = !0); 105 < e;) c++, s++, e -= 50;
        c++, 55 < e && s++;
        var r = Math.round(s / c * 100);
        if (s = c = 0, l.push(r < 25), l.isTrue() && !f) {
          var i = pt("resource");
          f = function u(t) {
            var e = !0,
              n = P && P.timing;
            if (n && (0 === dt(n) && (e = !1), t))
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (lt.test(i.initiatorType) && 0 === i.responseEnd) {
                  e = !1;
                  break
                }
              }
            if (e)
              for (var o = U("[type=submit][disabled]"), a = 0; a < o.length; a++)
                if (0 < o[a].clientHeight) {
                  e = !1;
                  break
                } if (!e) {
              var c = document.activeElement,
                s = c && c.tagName || "body";
              s = s.toLowerCase(), -1 === ["body", "a"].indexOf(s) && (e = !0)
            }
            return e
          }(i)
        }
        f && l.isTrue() && p(225 < n ? n - 225 : n)
      }
    }
    setTimeout(function() {
      n = setInterval(t, 50)
    }, 25)
  }
  u.subscribe(I.E.BEACON, function(t, e) {
    "im" === (e && e.values && e.values.eventType) && (at = !0)
  });
  var yt = I.URL_PPOBJ,
    kt = W,
    bt = 1e4;

  function Pt(t, e) {
    if (t === I.V3P.GA) ! function n(e) {
      e = N(e);
      var t = yt + "/gajs/analytics.js";
      if (window.ga) return void e();
      kt(t, function() {
        window.ga = window.ga || function() {
          (t.q = t.q || []).push(arguments)
        };
        var t = window.ga;
        t.l = +new Date, t("create", "UA-53389718-12", "auto", "PayPal", {
          allowLinker: !0
        }), t("PayPal.require", "linker"), window.location && window.location.hostname.match(/paypal.me/) ? t("PayPal.linker:autoLink", ["paypal.com"]) : t("PayPal.linker:autoLink", ["paypal.me"]), X() && (t("set", "anonymizeIp", !0), $() && t("set", "allowAdFeatures", !1)), e()
      }), setTimeout(e, bt)
    }(e);
    else if (t === I.V3P.GTAG) ! function i(r) {
      r = N(r), kt(yt + "/pa/mi/3p/gtag/gtag.js", function() {
        function t() {
          window.gDataLayer.push(arguments)
        }
        window.gDataLayer = window.gDataLayer || [], t("js", new Date), t("set", "linker", {
          domains: ["paypal.com", "paypal.me"]
        }), X() && (t("set", {
          anonymize_ip: !0
        }), $() && t("set", {
          allow_ad_personalization_signals: !1
        }));
        var e = window.dataLayer,
          n = e ? e.pageType : "";
        t("set", {
          send_page_view: !1,
          content_group1: n
        }), t("config", "UA-53389718-16"), window.gtag = window.gtag || t, r()
      }), setTimeout(r, bt)
    }(e);
    else if (t === I.V3P.MPP) ! function r(t) {
      t = N(t), kt(yt + "/pa/mi/mpp.js", function() {
        t()
      }), setTimeout(t, bt)
    }(e);
    else {
      (0, PAYPAL.analytics.logJSError)("Cannot load js", t, I.MI_ERR), (e = N(e))()
    }
  }
  var Et = {};

  function _t() {
    K() && W(I.URL_PPOBJ + "/pa/mi/miconfig.js", function() {
      Et = window.miconfig;
      var t = window.fpti && window.fpti.comp;
      if (t && Et) {
        var n = t.toLowerCase();
        ! function i(t, e) {
          var n = Et.loadJs && Et.loadJs(t) || [];
          n.push("ga", "gtag");
          var r = n.length;
          n.forEach(function(t) {
            Pt(t, function() {
              0 === (r -= 1) && e()
            })
          })
        }(n, function() {
          var t = Et.loadTags(n);
          t && (Et.fireState = Et.fireState || {}, function e(t) {
            var o = Q(window, "miconfig.fireState", {});
            t.forEach(function(t) {
              o[t] = t in o && o[t];
              var e = Et.loadTagConfig && Et.loadTagConfig(t) || {};
              if (function r(t) {
                  return Tt(t)
                }(e)) {
                var i = [],
                  n = e.vendors ? e.vendors : [];
                n.forEach(function(t) {
                  var e = Et.loadVendorDefault && Et.loadVendorDefault(t.name) || {},
                    n = D(e, t);
                  (function r(t) {
                    if (function e(t) {
                        if (t && t.hasOwnProperty("enforce_gdpr") && !t.enforce_gdpr) return !1;
                        if (X() && $()) return !0;
                        return !1
                      }(t)) return !1;
                    return Tt(t)
                  })(n) && i.push(n)
                }), i.length && function c(o) {
                  var t = PAYPAL.analytics.logJSError,
                    e = o.trigger.type;
                  o.trigger.hasOwnProperty("once") || (o.trigger.once = !0);
                  if ("fn" === e) {
                    var n = o.trigger.name;
                    Mt(n) ? Mt(n)(o) : t("Invalid trigger function", o.trigger, I.MI_ERR)
                  } else if (e === I.E.BEACON) {
                    var a = o.trigger.condition;
                    u.subscribe(e, function(t, e) {
                      if (e && e.data && e.values) {
                        var n = e.data;
                        for (var r in n.e = e.data.e || e.values.eventType, o.options = e, a)
                          if (a[r]) {
                            var i = new RegExp(a[r], "i");
                            if (!i.test(n[r])) return
                          } At(o)
                      }
                    })
                  } else "generic" === e ? At(o) : t("Invalid trigger type", o.trigger, I.MI_ERR)
                }({
                  id: t,
                  trigger: e.trigger,
                  vendors: i
                })
              }
            })
          }(t))
        })
      }
    })
  }

  function Tt(t) {
    if (t && !t.hasOwnProperty("enable")) return !0;
    if (t && t.hasOwnProperty("enable")) {
      if ("boolean" == typeof t.enable) return t.enable;
      var e = t.enable,
        n = e.type,
        r = e.name,
        i = e.args,
        o = void 0 === i ? [] : i;
      if ("fn" === n && r) return !!Mt(r) && Mt(r).apply(null, o)
    }
    return !1
  }

  function At(t) {
    if (function a(t) {
        var e = Q(t, "trigger.session"),
          n = function o(t) {
            if ("session" === t && window.sessionStorage) return window.sessionStorage
          }("session"); {
          if (!e || !n) return !0;
          var r = e.key,
            i = e.type;
          if (r && "start" === i) return n.setItem("mi." + r, !0), !0;
          if (r && "end" === i) return "true" === n.getItem("mi." + r)
        }
      }(t)) {
      var e = t.id,
        n = Q(window, "miconfig.fireState");
      if (n && !n[e]) {
        var r = function c(i) {
            var t = R(i.vendors);
            return t.forEach(function(t) {
              var e, n = t.vars;
              for (var r in n) n.hasOwnProperty(r) && (n[r] = (e = Ot(n[r], i.options)) ? decodeURIComponent(e).replace(RegExp(/[^@]+@[^\\.]+\..+/gi), "") : "")
            }), t
          }(t),
          i = Ct("ga"),
          o = Ct("gtag");
        r.forEach(function(t) {
          if ("google" === t.name && i) i("PayPal.send", t.vars);
          else if (t.name === I.V3P.GTAG || t.name === I.V3P.DC && o) t.action = t.action || "conversion", o("event", t.action, t.vars);
          else if (t.name === I.V3P.GA && o) {
            var e = t.vars.event_action,
              n = t.vars;
            o("event", e, n)
          } else {
            ! function r(t) {
              var e = new Image(0, 0);
              return e.src = t, e
            }(function a(t) {
              var e = t.seperator || "&",
                n = t.endpoint,
                r = "".concat(n.scheme, "://").concat(n.host).concat(n.path),
                i = t.vars || {},
                o = Object.keys(i).map(function(t) {
                  if (i[t]) return t + "=" + i[t]
                }).filter(Boolean).join(e);
              return r + o
            }(t))
          }
        }), n[e] = t.trigger.once
      }
    }
  }

  function Ct(t) {
    return Q(window, t)
  }

  function Ot(t, e) {
    if (t && function c(t) {
        return Tt(t)
      }(t)) {
      if ("string" == typeof t) return t;
      var n = t.type;
      if ("fn" === n) {
        var r = t.name,
          i = t.args,
          o = void 0 === i ? [] : i;
        return Mt(r) ? Mt(r).apply(null, o) : ""
      }
      var a = function f(t, e) {
        var n = {
            data: e ? e.data : {}
          },
          r = t.obj,
          i = void 0 === r ? window : r,
          o = t.path,
          a = t.defaultVal,
          c = void 0 === a ? "" : a;
        "data" === i && (i = n[i]); {
          if (o && o.constructor === Array) {
            for (var s = c, u = 0; u < o.length; u++) {
              var l = Q(i, o[u]);
              if (l) {
                s = l;
                break
              }
            }
            return s
          }
          return Q(i, o, c)
        }
      }(t, e);
      return "var" === n ? a : "int" === n ? parseFloat(a) : void 0
    }
  }

  function St() {
    var t = Ct("location.host") + Ct("location.pathname");
    return t && "string" == typeof t && -1 !== t.indexOf("&") && (t = t.substr(0, t.indexOf("&"))), t
  }

  function It(t, e, n) {
    var r = Mt(e),
      i = r && r();
    if (i && t) {
      if (t.constructor !== Object || t.constructor === Array) {
        if (t.constructor !== String) return null;
        var o = i.match(t);
        return o ? o[0] : null
      }
      for (var a in t) {
        var c = i.match(t[a]);
        if (c && c[0]) return n ? n[a] : c[0]
      }
    }
  }

  function Lt() {
    var t = Ct("fpti.ccpg") || Ct("dataLayer.contentCountry");
    return t ? t.toLowerCase() : null
  }

  function xt() {
    return 0 < Q(window, "fpti.cust", "").length
  }

  function Rt() {
    var t = Ct("ga"),
      e = t && t.getByName && t.getByName("PayPal");
    return e ? e.get("clientId") : ""
  }

  function Dt() {
    return Z().vr || ""
  }

  function qt(t) {
    t.trigger = {
      sel: "button[type=submit], input[type=submit]"
    }, Ft(t)
  }

  function jt(t) {
    var e = window.document.querySelectorAll(t);
    return e = e && e[0]
  }

  function Ft(t) {
    var e = jt(Q(t, "trigger.sel"));
    if (e) {
      var n = function n() {
        Ut(t), J("click", e, n)
      };
      M(e, "click", n)
    } else var r = setTimeout(function() {
      clearTimeout(r), Ft(t)
    }, 500)
  }

  function Ut(t) {
    var e = Q(t, "trigger.suppl.sel");
    if (e) {
      if (e.constructor === Array)
        for (var n = 0; n < e.length; n++) {
          var r = jt(e[n]);
          if (r && r.checked) {
            At(t);
            break
          }
        }
    } else At(t)
  }

  function Nt(t) {
    var e = Q(t, "trigger.sel"),
      n = Q(t, "trigger.text");
    if (e && n) {
      var r = jt(e),
        i = r && r.textContent,
        o = new RegExp(n, "i");
      if (i && o.test(i)) At(t);
      else var a = setTimeout(function() {
        clearTimeout(a), Nt(t)
      }, 500)
    }
  }

  function Bt(t) {
    var e = Ct("location.pathname"),
      n = Q(t, "trigger.path");
    n && e && new RegExp(n, "i").test(e) && At(t)
  }

  function Mt(t) {
    return {
      constructUrl: St,
      fetchGuid: Dt,
      fireImmediate: At,
      encodeURIComponent: encodeURIComponent,
      fetchCountry: Lt,
      conditionalValue: It,
      gdprOptOut: $,
      isLoggedIn: xt,
      gaClientId: Rt,
      fireButtonClick: qt,
      matchPgTxt: Nt,
      matchUrl: Bt,
      matchSuppl: Ut,
      handleClick: Ft
    } [t]
  }
  var Jt = {
      minHeight: 0,
      trackBy: "percent",
      readTime: 0,
      scrollDepth: [25, 50, 75, 100]
    },
    Ht = null,
    Vt = null,
    Yt = null,
    Gt = null;

  function zt(e, t) {
    J("scroll", window, Kt), Ht = [], Vt = D({}, Jt), Yt = t && t.Analytics ? t.Analytics.prototype : null, "object" === d(e) && Object.keys(e).forEach(function(t) {
      e[t] && Vt.hasOwnProperty(t) && d(e[t]) === d(Vt[t]) && (Vt[t] = e[t])
    });
    var n = l();
    isNaN(n) || n <= Vt.minHeight || Xt()
  }

  function Wt(n) {
    Gt = setTimeout(function() {
      if ("object" === d(Yt)) {
        var t = window.fpti || {},
          e = {
            page: t.page,
            pgrp: t.pgrp,
            comp: t.comp,
            st: Vt.trackBy,
            sd: n
          };
        Yt.recordScroll(e), Ht.push(n), Gt = null
      }
    }, Vt.readTime)
  }
  var Kt = function he(n, r, i) {
    var o, a, c, s, u = 0;
    i || (i = {});
    var l = function l() {
        u = !1 === i.leading ? 0 : p(), o = null, s = n.apply(a, c), o || (a = c = null)
      },
      f = function f() {
        var t = p();
        u || !1 !== i.leading || (u = t);
        var e = r - (t - u);
        return a = this, c = arguments, e <= 0 || r < e ? (o && (clearTimeout(o), o = null), u = t, s = n.apply(a, c), o || (a = c = null)) : o || !1 === i.trailing || (o = setTimeout(l, e)), s
      };
    return f.cancel = function() {
      clearTimeout(o), u = 0, o = a = c = null
    }, f
  }(function() {
    if (Gt && clearTimeout(Gt), Ht.length !== Vt.scrollDepth.length) {
      var t = l(),
        e = k(),
        n = "object" === d(e) && e.hasOwnProperty("height") ? e.height : 0,
        r = function a(n) {
          var r = [];
          return Vt.scrollDepth.forEach(function(t) {
            var e = 0;
            e = 100 === t ? n - 10 : Math.round(n * t / 100), r.push([t, e])
          }), r
        }(t),
        i = function c() {
          return window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
        }(),
        o = i + n;
      "percent" === Vt.trackBy ? function s(t, e, n) {
        t.forEach(function(t) {
          -1 === Ht.indexOf(t[0]) && n >= t[1] && t[1] > e && Wt(t[0])
        })
      }(r, i, o) : function u(e, n) {
        Vt.scrollDepth.forEach(function(t) {
          -1 === Ht.indexOf(t) && t <= n && e < t && Wt(t)
        })
      }(i, o)
    } else J("scroll", window, Kt)
  }, 500);

  function Xt() {
    M(window, "scroll", Kt)
  }
  PAYPAL.analytics = PAYPAL.analytics || {};
  var $t = PAYPAL.analytics;
  $t.options = {}, $t.settings = "", $t.beaconURL = "";
  var Qt = !1;

  function Zt() {
    var t = {};
    if (window._ifpti && window.fpti)
      for (var e in t = R(window._ifpti), window.fpti) "undefined" != typeof window.fpti[e] && window.fpti[e] !== window._ifpti[e] && (t[e] = window.fpti[e]);
    return t
  }

  function te(t) {
    t.view && delete t.view
  }

  function ee(t) {
    t && (window.fpti = R(t), te(window.fpti), window._ifpti = R(window.fpti))
  }

  function ne(t) {
    var e = m("cookie_prefs");
    e && (t.data.c_prefs = decodeURIComponent(e));
    var n = m("enforce_policy");
    n && (t.data.ef_policy = decodeURIComponent(n));
    var r = function i() {
      var t, e = m("_ga");
      if (e) {
        if (-1 !== e.indexOf("GA1")) {
          var n = e.split(".");
          4 === n.length && (t = [n[2], n[3]].join("."))
        }
        t && (t = encodeURIComponent(t))
      }
      return t
    }();
    r && (t.data.gacook = r)
  }
  $t.Analytics = function(t) {
    this._init(t)
  }, $t.Analytics.prototype = {
    version: "1.3.26",
    options: C,
    _delayUnloadUntil: null,
    _lastForm: null,
    _lastInput: null,
    _init: function Xt(t) {
      this.setOptions(t), this._enableUnloadDelay()
    },
    _enableUnloadDelay: function() {
      var t = this;
      $t.isUnloading = !1;
      var e = function e() {
        if ($t._imInProgress || $t.setup._onLoadImpression(), $t.isUnloading = !0, t._delayUnloadUntil)
          for (;
            (new Date).getTime() < t._delayUnloadUntil;);
      };
      J(window, "beforeunload", e), M(window, "beforeunload", e)
    },
    _recordEvent: function(t, e) {
      e.data = e.data || {}, e.data = F(e.data, t), $t.options && $t.options.stitchEvents && (e = q(e, it())), this.record(e)
    },
    _createBeacon: function(t) {
      var e, n = new window.Image;
      "function" == typeof t.onBeaconCreate && !1 !== t.onBeaconCreate(n) ? (e = this._generateBeaconUrl(t), t.unloadDelay && this.setUnloadDelay(t.unloadDelay)) : t.logActivity && (e = this._generateLogBeaconUrl(t)), e && (n.src = e, $t.beaconURL = e), u.publish(I.E.BEACON, t)
    },
    _generateBeaconUrl: function(t) {
      var e = t.url || window.fptiserverurl,
        n = e.split("?");
      e = n[0];
      var r = t.keys;
      if (e.match(/^\/\//) && (e = window.location.protocol + e), e += "?", n[1] && (e += n[1] + "&"), e += r.version + "=" + encodeURIComponent(this.version), r.timestamp && (e = c(e, r.timestamp, p())), r.gmtOffset && (e = c(e, r.gmtOffset, this._getGmtOffset())), r.eventType && (e = c(e, r.eventType, t.values.eventType)), t.data.opic) {
        var i = t.data.opic;
        i = (i = i.replace(/\w+@\w+\.\w+/g, "")).replace(/\d+/g, ""), t.data.opic = i
      }
      return z(e = o(e, t.data))
    },
    _generateLogBeaconUrl: function(t) {
      var e = window.fptiserverurl + "?v=" + this.version;
      return t.g = this._getGmtOffset(), t.t = ft(), t.start && (t.end = t.end || t.t, t.tt = t.end - t.start), delete t.logActivity, delete t.trackCPL, z(e = o(e, t))
    },
    getTimeNow: ft,
    _getGmtOffset: function() {
      return (new Date).getTimezoneOffset()
    },
    _getPageTitle: function() {
      return document.title
    },
    _getReferrer: function() {
      return document.referrer
    },
    _getLastFormFocusedValue: function() {
      var t = "";
      return this._lastForm && (t = this._lastForm.getAttribute("name") || this._lastForm.getAttribute("id") || ""), t
    },
    _getLastInputFocusedValue: function() {
      var t = "";
      return this._lastInput && (t = this._lastInput.getAttribute("name") || this._lastInput.getAttribute("id") || ""), t
    },
    _getElements: function(t) {
      var e = [];
      if (t)
        if ("string" == typeof t) e = U(t);
        else if ("object" === d(t))
        for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
      else 1 === t.nodeType && e.push(t);
      return e
    },
    _click: function(t) {
      t.getAttribute("href") && (window.location.href = t.getAttribute("href"))
    },
    setOptions: function(t) {
      var e = (t = t || {}).request && t.request.data;
      e && (delete t.request.data, "string" == typeof e && (e = j(e)), ee(e = q(window.fpti, e))), this.options = q(this.options, t)
    },
    setRequestData: function(t, e) {
      if ("object" === d(t))
        for (var n in t) this.options.request.data[n] = t[n];
      else "string" == typeof t && e === undefined ? this.setRequestData(j(t)) : "string" == typeof t && e !== undefined && (this.options.request.data[t] = e)
    },
    getRequestData: function(t) {
      var e = this.options.request.data;
      return t && (e = e[t] || window.fpti[t]), e
    },
    removeRequestData: function(t) {
      void 0 !== t ? this.options.request.data[t] && delete this.options.request.data[t] : this.options.request.data = {}
    },
    setUnloadDelay: function(t) {
      this._delayUnloadUntil = p() + t
    },
    recordImpression: function(o, t) {
      $t._imInProgress = !0;
      var a = this,
        c = {};
      if ((o = o || {}).data) {
        o.data = j(o.data);
        var e = Zt();
        o.data = q(e, o.data), ee(o.data)
      } else o.data = q(window.fpti, {});
      t && (o.data = q(o.data, t)), $t._imId = o.data.page;
      var n = this.getRequestData("pglk") || m("tcs");
      h("tcs"), n && (o.data.pglk = decodeURIComponent(n));
      var r = m("AKDC");
      r && (o.data.akdc = decodeURIComponent(r));
      var i = m("X-PP-L7");
      void 0 !== i && (o.data.l7 = decodeURIComponent(i)), ne(o);
      var s = (o = q(a.options.impression.request, o)).keys;
      c[s.pageTitle] = a._getPageTitle(), c[s.referrer] = a._getReferrer(), c[s.screenColorDepth] = function p() {
        return window.screen.colorDepth
      }();
      var u = function d() {
        var t = window.screen || {};
        return {
          width: t.width,
          height: t.height
        }
      }();
      c[s.screenWidth] = u.width, c[s.screenHeight] = u.height;
      var l = function g() {
        var t = window.screen || {},
          e = window.devicePixelRatio || 1,
          n = b(t.width * e),
          r = b(t.height * e);
        if (90 === Math.abs(window.orientation)) {
          var i = n;
          n = r, r = i
        }
        return {
          width: n,
          height: r
        }
      }();
      c[s.deviceWidth] = l.width, c[s.deviceHeight] = l.height;
      var f = k();
      c[s.browserWidth] = f.width, c[s.browserHeight] = f.height, c[s.cookiesEnabled] = function v() {
        return "undefined" === navigator.cookieEnabled ? (document.cookie = "enabledCheck", -1 !== document.cookie.indexOf("enabledCheck") ? w : y) : navigator.cookieEnabled ? w : y
      }(), "mo" !== $t.settings && (c[s.plugins] = S()), o.data.view ? a._recordEvent(c, o) : (P && (o.data.view = o.data.view || {}, o.data.view._t11s = P.now()), wt(function(t) {
        var e = $t.cpl && $t.cpl.beaconData || {},
          n = e.view && e.view._t11s || 0,
          r = o.data.view._t11s || 0;
        o.data.view._t11s = Math.min.apply(null, [n, r].filter(Boolean));
        var i = gt(c, o);
        i.view && (i.view.bt = t), c = F(c, i), $t._imInProgress = !1, a._recordEvent(c, o)
      }))
    },
    recordClick: function(t) {
      (t = t || {}).data = j(t.data), t.data = q(window.fpti, t.data), ne(t = q(this.options.click.request, t)), te(t.data), this._recordEvent({}, t)
    },
    recordFormAbandonment: function(t) {
      var e = {};
      (t = t || {}).data = j(t.data), t.data = q(window.fpti, t.data), te((t = q(this.options.formAbandonment.request, t)).data);
      var n = t.keys;
      e[n.lastFormFocused] = this._getLastFormFocusedValue(), e[n.lastInputFocused] = this._getLastInputFocusedValue(), this._recordEvent(e, t)
    },
    trackFormFocus: function(t) {
      t = this._getElements(t);
      for (var r = function r(t) {
          var e = t.currentTarget || t.srcElement,
            n = {
              uicomp: V(e, "data-pa-focus"),
              uitype: "form",
              action: "focus",
              value: t.target.value ? t.target.value : V(e)
            };
          $t.logActivity(n)
        }, e = 0; e < t.length; e++) {
        var n = t[e];
        J(n, "focus", r), M(n, "focus", r)
      }
    },
    _recordClick: function(i) {
      var o = this;
      return i = q(this.options.click, i), i = q({
          request: this.options.request
        }, i),
        function c(t, e) {
          var n, r = function a(t, e) {
            for (var n, r = [e, t.target, t.currentTarget, t.srcElement], i = 0; i < r.length; i++) {
              var o = r[i];
              if (n = n || o, o && o.getAttribute(I.IS_MARKED)) {
                n = o;
                break
              }
            }
            return n
          }(t, e);
          "function" == typeof i.onClick && (n = i.onClick(t, r)), !1 !== n && ("object" === d(n) && (i.request = q(i.request, n)), i.request.data[i.request.keys.linkUrl] = r.getAttribute("href") || "", o.recordClick(i.request))
        }
    },
    trackClicks: function(t) {
      for (var e = this._getElements(t.elements), n = this._recordClick(t), r = 0; r < e.length; r++) {
        var i = e[r];
        i.setAttribute(I.IS_MARKED, 1), J(i, "click", n), M(i, "click", n)
      }
    },
    trackFormAbandonment: function(n) {
      var r = this;
      (n = n || {}).data = j(n.data), n = q(this.options.formAbandonment, n), n = q({
        request: this.options.request
      }, n);
      for (var t = this._getElements(n.elements) || [], e = 0; e < t.length; e++)
        for (var i = t[e], o = "form" === i.tagName.toLowerCase() ? [i] : U("form", i), a = 0; a < o.length; a++)
          for (var c = o[a], s = U("input", c), u = s.length, l = 0; l < u; l++) {
            ! function(t, e) {
              M(e, "focus", function() {
                r._lastForm = t, r._lastInput = e, r._trackingFA || (r._trackingFA = !0, "beforeunload,hashchange".split(",").forEach(function(t) {
                  M(window, t, function() {
                    null !== r._lastForm && null !== r._lastInput && (r.recordFormAbandonment(n.request), r._lastForm = null, r._lastInput = null)
                  })
                }), M(t, "submit", function() {
                  r._lastForm = null, r._lastInput = null
                }))
              })
            }(c, s[l])
          }
    },
    recordAjaxStartTime: function() {
      this.activityStartTime = p()
    },
    logActivity: function(t) {
      t.page = t.page || window.fpti.page, t.pgrp = t.pgrp || window.fpti.pgrp, t.logActivity = !0, t.e = "ac", this._createBeacon(t)
    },
    logPerf: function(t, e) {
      (t.e = "pf", t.logActivity = !0, (t = q(Zt(), t)).tt) || (t = F(t, gt(t), !1));
      var n = !0;
      e && (t.page || (n = !1)), n && this._createBeacon(t)
    },
    recordAjaxPerformanceData: function(t) {
      var e = this.activityStartTime;
      if (e) {
        var n = p(),
          r = v(n, e),
          i = t.sys && t.sys.tracking && t.sys.tracking.fpti.dataString;
        if (i && 0 < r) {
          var o = j(i);
          o.tajst = e, o.tajnd = n, o.tt = r, this.logPerf(o)
        }
      }
    },
    recordError: function(t) {
      var e = q(this.options.error, {
        data: t
      });
      this.record(e)
    },
    recordScroll: function(t) {
      var e = q(this.options.scroll, {
        data: t
      });
      this.record(e)
    },
    record: function(t) {
      t = q(this.options.request, t), this._createBeacon(t)
    }
  }, $t.Analytics.prototype.utils = {
    queryStringToObject: j,
    getCookie: m,
    setCookie: a,
    removeCookie: h,
    wrapSelectors: G
  }, $t.logPerformance = function(t) {
    $t.Analytics.prototype.logPerf(t)
  }, $t.logActivity = function(t) {
    $t.Analytics.prototype.logActivity(t)
  }, $t.Analytics.prototype.resetScroll = function(t) {
    ! function n(t, e) {
      zt(t, e)
    }(t, $t)
  }, $t.setup = function(t) {
    ! function e() {
      "3p" !== $t.settings && _t()
    }(), $t.setupComplete = $t.setupComplete || n, $t.settings = $t.settings || "pp", $t.setup.init(t), $t.setup.onLoad(), setTimeout(function() {
      $t.setupComplete($t.setup.bindEvents()), u.publish(I.E.INIT)
    }, 500)
  }, $t.setup3p = function(t) {
    t = Y(t || {}, {
      trackPPLegacyClicks: !1,
      trackPPLegacyExitClicks: !1
    }), $t.settings = "3p", $t.setup(t)
  }, $t.setupMobile = function(t) {
    t = Y(t || {}, {
      trackPPLegacyClicks: !1,
      trackPPLegacyExitClicks: !1,
      trackPPDownloadClicks: !1,
      trackPPClickThrough: !1,
      trackFormAbandonment: !1
    }), $t.settings = "mo", $t.setup(t)
  }, $t.reSetup = function(t) {
    delete $t.instance, t = Y(t || {}, $t.options), $t.setup(t)
  }, $t.setup.init = function(t) {
    t = Y(t || {}, {
      trackImpression: !0,
      trackPPClicks: !0,
      trackPPExitClicks: !0,
      trackPPDownloadClicks: !0,
      trackPPLegacyClicks: !0,
      trackPPLegacyExitClicks: !0,
      trackPPClickThrough: !0,
      trackFormAbandonment: !0,
      trackFormFocus: !1,
      stitchEvents: !0,
      trackScroll: !0
    }), $t.Analytics.prototype.options.request.url = window.fptiserverurl = t.url || window.fptiserverurl, $t.options = t;
    var e = new $t.Analytics({
      request: {
        data: t.data || {}
      }
    });
    return t.data && (t.data = j(t.data), ee(t.data)), $t.instance = e
  }, $t.setup._onLoadImpression = function() {
    var t = $t.instance,
      e = $t.options;
    e.trackImpression && Qt && (t.recordImpression(e), Qt = !1)
  }, $t.setup.onLoad = function() {
    var t = $t.options,
      e = $t.setup._onLoadImpression;
    t.trackImpression && (Qt = !0, B(function() {
      $t.isUnloading || e()
    }))
  }, $t.setup.bindEvents = function() {
    var l = $t.instance,
      r = $t.options;

    function u(t, e) {
      var n = e || t.target || t.currentTarget || t.srcElement;
      if (n) {
        var r = n.tagName.toLowerCase(); - 1 !== ["svg"].indexOf(r) && (n = n.parentElement)
      }
      return n
    }

    function i(t, e, n) {
      var r = u(t, n),
        i = V(r, e),
        o = r.getAttribute("data-pa-page"),
        a = r.getAttribute("data-pa-pgrp"),
        c = function s(t, e, n) {
          var r = t || "";
          return {
            pglk: (n || l.getRequestData("pgrp") || "") + "|" + r,
            pgln: (e || l.getRequestData("page") || "") + "|" + r
          }
        }(i, o, a);
      return c.link = i, o && (c.page = o), a && (c.pgrp = a), c
    }
    var f = {
      unloadDelay: 500
    };

    function o(t, e) {
      var n;
      if ("string" == typeof t.className)
        for (var r = t.className.split(" "), i = 0; i < r.length; i++) {
          var o = r[i].split(":"); - 1 !== e.indexOf(o[0]) && 1 < o.length && (o.shift(), n = o.join(":"))
        }
      return n
    }
    var p = {
      customClicks: function(t) {
        var e = i(t),
          n = r.customClicks;
        return e.link = n.linkName ? n.linkName : e.link, e.exit = n.exitClick ? w : y, {
          data: e
        }
      },
      click: function(t, e) {
        return {
          data: i(t, I.PA_CL, e)
        }
      },
      exit: function(t) {
        var e = i(t, I.PA_EX);
        return e.exit = w, {
          data: e
        }
      },
      download: function(t) {
        var e = i(t, I.PA_DL);
        return e.dwnl = w, {
          data: e
        }
      },
      scTrack: function(t) {
        var e = i(t),
          n = o(u(t), ["scTrack"]) || e.link;
        return e.link = n, {
          data: e
        }
      },
      scExit: function(t) {
        var e = i(t),
          n = o(u(t), ["scExit"]) || e.link;
        return e.link = n, e.exit = w, {
          data: e
        }
      },
      clickThrough: function(t, e) {
        var n = (e = e || u(t)).getAttribute(I.PA_CL) || e.getAttribute(I.PA_EX) || e.getAttribute(I.PA_DL);
        n || (n = o(e, ["scTrack", "scExit"])), n || (n = V(e));
        var r = l.getRequestData("pgrp") || "";
        return a("tcs", encodeURIComponent(r + "|" + n)), !1
      }
    };
    return "object" === d(r.customClicks) && l.trackClicks({
      elements: r.customClicks.elements,
      onClick: p.customClicks,
      request: f
    }), r.trackPPClicks && l.trackClicks({
      elements: "*[data-pa-click]",
      onClick: p.click,
      request: f
    }), r.trackPPExitClicks && l.trackClicks({
      elements: "*[data-pa-exit]",
      onClick: p.exit,
      request: f
    }), r.trackFormFocus && l.trackFormFocus("*[data-pa-focus], " + G("textarea, input[type=text]", r.wrappingElement)), r.trackPPDownloadClicks && l.trackClicks({
      elements: "*[data-pa-download], " + G('*[href*=".zip"], *[href*=".wav"], *[href*=".mov"], *[href*=".mpg"], *[href*=".avi"], *[href*=".wmv"], *[href*=".doc"], *[href*=".docx"], *[href*=".pdf"], *[href*=".xls"], *[href*=".xlsx"], *[href*=".ppt"], *[href*=".pptx"], *[href*=".txt"], *[href*=".csv"], *[href*=".psd"], *[href*=".tar"]', r.wrappingElement),
      onClick: p.download,
      request: f
    }), r.trackPPLegacyClicks && l.trackClicks({
      elements: '*[class*="scTrack"]',
      onClick: p.scTrack,
      request: f
    }), r.trackPPLegacyExitClicks && l.trackClicks({
      elements: '*[class*="scExit"]',
      onClick: p.scExit,
      request: f
    }), r.trackPPClickThrough && l.trackClicks({
      elements: G("a, button, input[type=submit], input[type=button], input[type=image]", r.wrappingElement),
      onClick: p.clickThrough
    }), r.trackFormAbandonment && l.trackFormAbandonment({
      elements: G("form", r.wrappingElement),
      request: f
    }), r.trackScroll && zt(r.scroll, $t), M(document.body, "click", function(t) {
      var e, n, r, i = 0,
        o = !1,
        a = t.target,
        c = {
          onClick: p.click,
          request: f
        };
      if (a) {
        for (; !o && a;) n = a.tagName.toLowerCase(), -1 !== ["a", "button"].indexOf(n) ? r = a : "input" === n && -1 !== ["submit", "button", "image"].indexOf(a.type) && (r = a), e = a.getAttribute(I.PA_CL), 10 <= i++ || a === document.body || e ? o = !0 : a = a.parentElement;
        r && p.clickThrough(t, r);
        var s = a && a.getAttribute(I.IS_MARKED);
        if (e && !s) {
          a.setAttribute(I.IS_MARKED, 1);
          var u = l._recordClick(c);
          u(t, a), M(a, "click", u)
        }
      }
    }), $t.instance = l
  };

  function re(t, e) {
    if (P) {
      e = e || {};
      var n = t.cpl = t.cpl || {};
      n.started = !0;
      var r = n.beaconData = n.beaconData || {};
      e.flid && (r.flid = r.flid || e.flid), r.page = r.page || e.page, r.pgrp = r.pgrp || e.pgrp, r.view = {
        t10: e.t10 ? b(e.t10) : 0
      }, n.cplData = n.cplData || {
        pgrpData: {}
      }
    }
  }

  function ie(t) {
    t.cpl = {
      started: !1
    }
  }

  function oe(t, e, n) {
    if (t.cpl = t.cpl || {}, t.cpl.beaconData = t.cpl.beaconData || {}, "object" === d(e)) {
      var r = {};
      Y(r = e.pageData ? D(r, e.pageData) : e, t.cpl.beaconData)
    }
    P && (t.cpl.started || n && (re(t), t.cpl.beaconData.view._t11s = P.now()))
  }
  $t.resumeCPLTracking = function() {}, $t.beaconTrackingData = {}, $t.addCPLData = function() {}, $t.setCPLData = function() {}, $t.startCPLTracking = function(t) {
    P && (re($t, t), $t.cpl.beaconData.view = {
      t10: 0,
      _t11s: P.now()
    })
  }, $t.endCPLTracking = function(t) {
    oe($t, t),
      function a(t, e) {
        var n = t.cpl.beaconData || {};
        if (P && n.view && (!e || e && !t._imInProgress)) {
          n.view._t11s && (n.view.t11 = b(P.now() - n.view._t11s), delete n.view._t11s);
          var r = "manual";
          e && (r = "url"), n.view.nt = r, ht(n);
          var i = n.view.t11,
            o = !1;
          e && t._imId === n.page ? o = !1 : (!e && i < 61e3 || e && 50 < i && i < 31e3) && (o = !0), o && setTimeout(function() {
            t.Analytics.prototype.logPerf(n, e)
          }, 100)
        }
        ie(t)
      }($t)
  }, $t.resourceCPL = function(t, e) {
    if (t) {
      var n = vt(t);
      if (n) {
        var r = F(e, n);
        r.tmpl = r.tmpl || t, r.view = {
          t10: n.t1,
          t11: n.tt,
          nt: "res"
        }, $t.Analytics.prototype.logPerf(r)
      }
    }
  };
  var ae = !($t.autoCPLTracking = function(t) {
    oe($t, t, !0), setTimeout(function() {
      ie($t)
    }, 500)
  });

  function ce() {
    ae || (ae = !0, $t.autoCPLTracking())
  }! function we(t) {
    t || (t = window.history);
    var e = {
      listen: t.listen,
      transitionTo: t.transitionTo,
      pushState: t.pushState,
      setState: t.setState,
      replaceState: t.replaceState,
      go: t.go
    };
    t.setState = function() {
      ce(), e.setState.apply(this, arguments)
    }, t.listen = function() {
      ce(), e.listen.apply(this, arguments)
    }, t.transitionTo = function() {
      ce(), e.transitionTo.apply(this, arguments)
    }, t.pushState = function() {
      ce(), e.pushState.apply(this, arguments)
    }, t.go = function() {
      ce(), e.go.apply(this, arguments)
    }, M(window, "hashchange", ce), u.subscribe(I.E.BEACON, function() {
      ae = !1
    })
  }();
  var se = !1;
  $t.startClientErrorTracking = function(a) {
    if (a = a || {}, !se) {
      se = !0;
      var c, s = a.maxErrors || 5,
        u = 0,
        o = window.onerror;
      M(window, "unhandledrejection", function e(t) {
        t.preventDefault(), t.reason && t.reason.stack && l(t.reason.message, "", 0, 0, t.reason, I.REJECTION_ERR_TYPE)
      }), M(window, "error", function n(t) {
        t && t.error && l(t.message, t.filename, t.lineno, t.colno, t.error)
      }), window.onerror = function f(t, e, n, r, i) {
        l(t, e, n, r, i), "function" == typeof o && o.apply(window, arguments)
      }
    }

    function l(t, e, n, r, i, o) {
      c && c === i || (c = i, s < ++u || (e = e || "-", n = n || 0, r = r || 0, $t.logJSError(i, e + " " + n + ":" + r, o), "function" == typeof a.onError && a.onError({
        message: t,
        file: e,
        line: n,
        column: r,
        error: i
      })))
    }
  }, $t.logJSError = function(t, e, n) {
    var r = window.fpti || {},
      i = {
        page: r.page,
        pgrp: r.pgrp,
        comp: r.comp,
        erpg: t && t.message || t || I.ERR_MSG,
        error_type: n || I.ERR_TYPE,
        error_description: function o(t) {
          return (t && t.stack || "").replace(/http.*\/(\w+.)/gm, "_/$1").substring(0, 500)
        }(t),
        error_source: e
      };
    $t.Analytics.prototype.recordError(i)
  }, PAYPAL.trackJSError = function(t) {
    $t && $t.logJSError(t, "", "customError")
  }, u.subscribe(I.E.INIT, function() {
    ! function t() {
      se || ($t.startClientErrorTracking(), se = !0)
    }()
  });
  var ue = /^auth|bank|billingui|bizac|bizli|bizm|bizsign|bizpr|bizwal|checkout|compl|credit|comme|debit|dual|home|invoi|latin|mep|merchantb|merchants|merchm|money|p2p|policy|pools|ppdg|ppme|reporting|self|setting|smart|res|smc|sum|uni|virtual|wallete|work/i,
    le = I.URL_PPOBJ + "/pa/tl",
    fe = le + "/patleaf.js",
    pe = le + "/patlcfg.js";

  function de() {
    W(pe)
  }
  K(!0) && u.subscribe(I.E.INIT, function() {
    if (!window.TLT && window.fpti) {
      var t = window.fpti.comp || "";
      ue.test(t) && W(fe, de)
    }
  });
  var ge, ve = /moneynodeweb:(cards:new|money:banks)|walletweb:.*bank:confirminstantly/i;
  K(!0) && u.subscribe(I.E.BEACON, function() {
    var t = window.fpti;
    if (t && ve.test(t.page || "")) {
      var e = Z();
      (function n(t) {
        var e = document.getElementById("fconfig");
        if (e) {
          if (!e.parentNode || ge === t.s) return !1;
          e.parentNode.removeChild(e)
        }
        return ge = t.s, (e = document.createElement("script")).id = "fconfig", e.type = "application/json", e.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), e.text = JSON.stringify(t), document.body.appendChild(e), !0
      })({
        s: function r(t) {
          var e = (t || "").replace("main:", "").replace(/:+/g, "_").toUpperCase(),
            n = (e = e.substr(0, 32)).length - 1;
          return "_" === e.charAt(n) && (e = e.substr(0, n)), e
        }(t.page),
        f: e.vt || ""
      }) && W("https://c.paypal.com/da/r/fb.js")
    }
  })
}();