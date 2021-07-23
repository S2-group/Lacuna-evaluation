/*@ 2019 PayPal (v1.3.26) */ ! function() {
  "use strict";

  function d(t) {
    return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {})(t)
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

  function p() {}

  function o(t, e) {}

  function c(t, e, n) {}

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

  function r(t) {}

  function v(t, e) {}

  function l() {
    var t = document.body,
      e = document.documentElement || {};
    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
  }
  window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || "https://t.paypal.com/ts";
  var n = function n() {},
    t = function t() {};
  "undefined" == typeof JSON && (JSON = {}, JSON.stringify = n, JSON.parse = t, window.JSON = JSON);
  var P = "performance" in window && window.performance || {},
    s = function s() {};
  if (P && !P.now) {
    var e = P.timing;
    P.now = function() {}
  }
  String.prototype.trim || (String.prototype.trim = function() {}), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {}), Array.prototype.forEach || (Array.prototype.forEach = function(t) {}), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, i) {});
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
      setTimeout(function E(e) {}(r), 0)
    }
  }

  function _(t, e, n) {}

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
  }, u.publishSync = function(t, e) {}, u.subscribe = function(t, e) {
    if ("function" != typeof e) return !1;
    f.hasOwnProperty(t) || (f[t] = {});
    var n = "uid_" + String(++i);
    return f[t][n] = e, n
  }, u.subscribeOnce = function(t, e) {}, u.clearAllSubscriptions = function() {}, u.clearSubscriptions = function(t) {}, u.unsubscribe = function(t) {};
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

  function F(t, e, n) {}

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

  function H() {}

  function V(t, e) {}

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

  function z(t) {}

  function W(t, e) {}

  function K(t, e) {
    var n = !1,
      r = e || window.location && window.location.hostname || "",
      i = /paypal.(com|me)$/;
    return t && (i = /paypal.com$/), -1 === r.indexOf("localhost") && i.test(r) && (n = !0), n
  }

  function X() {}

  function $() {}

  function Q(t, e, n) {}

  function Z() {}

  function tt(t) {}

  function et(t) {}

  function nt(t) {}

  function rt(t, e) {}

  function it() {}
  var ot = 0,
    at = !1,
    ct = !1,
    st = 31e3,
    ut = /^xmlhttprequest|fetch/i,
    lt = /^xmlhttprequest|fetch|iframe|script/i;

  function ft() {
    return P && P.now && P.timing ? Math.round(P.now() + P.timing.navigationStart) : p()
  }

  function pt(t) {}

  function dt(t) {}

  function gt(t, e) {}

  function vt(t, e) {}

  function mt() {}

  function ht(t, e) {}

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
          skip: function() {},
          isTrue: function() {
            var t = e.join("");
            return r || (r = t === n), r
          }
        }
      }(),
      f = !1;

    function p(t) {}

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
          f = function u(t) {}(i)
        }
        f && l.isTrue() && p(225 < n ? n - 225 : n)
      }
    }
    setTimeout(function() {
      n = setInterval(t, 50)
    }, 25)
  }
  u.subscribe(I.E.BEACON, function(t, e) {});
  var yt = I.URL_PPOBJ,
    kt = W,
    bt = 1e4;

  function Pt(t, e) {}
  var Et = {};

  function _t() {
    K() && W(I.URL_PPOBJ + "/pa/mi/miconfig.js", function() {})
  }

  function Tt(t) {}

  function At(t) {}

  function Ct(t) {}

  function Ot(t, e) {}

  function St() {}

  function It(t, e, n) {}

  function Lt() {}

  function xt() {}

  function Rt() {}

  function Dt() {}

  function qt(t) {}

  function jt(t) {}

  function Ft(t) {}

  function Ut(t) {}

  function Nt(t) {}

  function Bt(t) {}

  function Mt(t) {}
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
    J("scroll", window, Kt), Ht = [], Vt = D({}, Jt), Yt = t && t.Analytics ? t.Analytics.prototype : null, "object" === d(e) && Object.keys(e).forEach(function(t) {});
    var n = l();
    isNaN(n) || n <= Vt.minHeight || Xt()
  }

  function Wt(n) {}
  var Kt = function he(n, r, i) {
    var o, a, c, s, u = 0;
    i || (i = {});
    var l = function l() {},
      f = function f() {};
    return f.cancel = function() {}, f
  }(function() {}, 500);

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
      var e = function e() {};
      J(window, "beforeunload", e), M(window, "beforeunload", e)
    },
    _recordEvent: function(t, e) {},
    _createBeacon: function(t) {},
    _generateBeaconUrl: function(t) {},
    _generateLogBeaconUrl: function(t) {},
    getTimeNow: ft,
    _getGmtOffset: function() {},
    _getPageTitle: function() {
      return document.title
    },
    _getReferrer: function() {
      return document.referrer
    },
    _getLastFormFocusedValue: function() {},
    _getLastInputFocusedValue: function() {},
    _getElements: function(t) {
      var e = [];
      if (t)
        if ("string" == typeof t) e = U(t);
        else if ("object" === d(t))
        for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
      else 1 === t.nodeType && e.push(t);
      return e
    },
    _click: function(t) {},
    setOptions: function(t) {
      var e = (t = t || {}).request && t.request.data;
      e && (delete t.request.data, "string" == typeof e && (e = j(e)), ee(e = q(window.fpti, e))), this.options = q(this.options, t)
    },
    setRequestData: function(t, e) {},
    getRequestData: function(t) {
      var e = this.options.request.data;
      return t && (e = e[t] || window.fpti[t]), e
    },
    removeRequestData: function(t) {},
    setUnloadDelay: function(t) {},
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
      }(), "mo" !== $t.settings && (c[s.plugins] = S()), o.data.view ? a._recordEvent(c, o) : (P && (o.data.view = o.data.view || {}, o.data.view._t11s = P.now()), wt(function(t) {}))
    },
    recordClick: function(t) {},
    recordFormAbandonment: function(t) {},
    trackFormFocus: function(t) {},
    _recordClick: function(i) {
      var o = this;
      return i = q(this.options.click, i), i = q({
          request: this.options.request
        }, i),
        function c(t, e) {}
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
            ! function(t, e) {}(c, s[l])
          }
    },
    recordAjaxStartTime: function() {},
    logActivity: function(t) {},
    logPerf: function(t, e) {},
    recordAjaxPerformanceData: function(t) {},
    recordError: function(t) {},
    recordScroll: function(t) {},
    record: function(t) {}
  }, $t.Analytics.prototype.utils = {
    queryStringToObject: j,
    getCookie: m,
    setCookie: a,
    removeCookie: h,
    wrapSelectors: G
  }, $t.logPerformance = function(t) {}, $t.logActivity = function(t) {}, $t.Analytics.prototype.resetScroll = function(t) {}, $t.setup = function(t) {
    ! function e() {
      "3p" !== $t.settings && _t()
    }(), $t.setupComplete = $t.setupComplete || n, $t.settings = $t.settings || "pp", $t.setup.init(t), $t.setup.onLoad(), setTimeout(function() {
      $t.setupComplete($t.setup.bindEvents()), u.publish(I.E.INIT)
    }, 500)
  }, $t.setup3p = function(t) {}, $t.setupMobile = function(t) {}, $t.reSetup = function(t) {}, $t.setup.init = function(t) {
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

    function u(t, e) {}

    function i(t, e, n) {}
    var f = {
      unloadDelay: 500
    };

    function o(t, e) {}
    var p = {
      customClicks: function(t) {},
      click: function(t, e) {},
      exit: function(t) {},
      download: function(t) {},
      scTrack: function(t) {},
      scExit: function(t) {},
      clickThrough: function(t, e) {}
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
    }), r.trackScroll && zt(r.scroll, $t), M(document.body, "click", function(t) {}), $t.instance = l
  };

  function re(t, e) {}

  function ie(t) {}

  function oe(t, e, n) {}
  $t.resumeCPLTracking = function() {}, $t.beaconTrackingData = {}, $t.addCPLData = function() {}, $t.setCPLData = function() {}, $t.startCPLTracking = function(t) {}, $t.endCPLTracking = function(t) {}, $t.resourceCPL = function(t, e) {};
  var ae = !($t.autoCPLTracking = function(t) {});

  function ce() {}! function we(t) {
    t || (t = window.history);
    var e = {
      listen: t.listen,
      transitionTo: t.transitionTo,
      pushState: t.pushState,
      setState: t.setState,
      replaceState: t.replaceState,
      go: t.go
    };
    t.setState = function() {}, t.listen = function() {}, t.transitionTo = function() {}, t.pushState = function() {}, t.go = function() {}, M(window, "hashchange", ce), u.subscribe(I.E.BEACON, function() {})
  }();
  var se = !1;
  $t.startClientErrorTracking = function(a) {
    if (a = a || {}, !se) {
      se = !0;
      var c, s = a.maxErrors || 5,
        u = 0,
        o = window.onerror;
      M(window, "unhandledrejection", function e(t) {}), M(window, "error", function n(t) {}), window.onerror = function f(t, e, n, r, i) {}
    }

    function l(t, e, n, r, i, o) {}
  }, $t.logJSError = function(t, e, n) {}, PAYPAL.trackJSError = function(t) {}, u.subscribe(I.E.INIT, function() {
    ! function t() {
      se || ($t.startClientErrorTracking(), se = !0)
    }()
  });
  var ue = /^auth|bank|billingui|bizac|bizli|bizm|bizsign|bizpr|bizwal|checkout|compl|credit|comme|debit|dual|home|invoi|latin|mep|merchantb|merchants|merchm|money|p2p|policy|pools|ppdg|ppme|reporting|self|setting|smart|res|smc|sum|uni|virtual|wallete|work/i,
    le = I.URL_PPOBJ + "/pa/tl",
    fe = le + "/patleaf.js",
    pe = le + "/patlcfg.js";

  function de() {}
  K(!0) && u.subscribe(I.E.INIT, function() {});
  var ge, ve = /moneynodeweb:(cards:new|money:banks)|walletweb:.*bank:confirminstantly/i;
  K(!0) && u.subscribe(I.E.BEACON, function() {})
}();