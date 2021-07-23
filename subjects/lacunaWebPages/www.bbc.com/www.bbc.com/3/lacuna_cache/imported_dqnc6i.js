define("orb/api", function() {
    "use strict";
    var i = {
        layout: []
      },
      t = {};
    return {
      layout: null,
      trigger: function(e, n) {
        if (i[e])
          for (var t = 0, o = i[e].length; t < o; t++) i[e][t](n)
      },
      config: null
    }
  }), define("orb/lib/_script", function(l) {
    "use strict";
    var h = 1,
      p = {
        inject: null,
        jsonp: null
      };
    return p
  }),
  function() {
    

    

    

    

    

    function e(e, n) {
      var t = n || {};
      this.family = e, this.style = t.style || "normal", this.weight = t.weight || "normal", this.stretch = t.stretch || "normal"
    }

    function t() {
      return null === n && (n = !!document.fonts), n
    }

    function E(e, n) {
      return [e.style, e.weight, function() {
        if (null === a) {
          var e = document.createElement("div");
          try {
            e.style.font = "condensed 100px sans-serif"
          } catch (e) {}
          a = "" !== e.style.font
        }
        return a
      }() ? e.stretch : "", "100px", n].join(" ")
    }
    var x, o, a, n;
    n = a = o = x = null, e.prototype.load = function(e, n) {
      var p = this,
        m = e || "BESbswy",
        w = 0,
        b = n || 3e3,
        g = (new Date).getTime();
      return new Promise(function(l, h) {
        if (t() && ! function() {
            if (null === o)
              if (t() && /Apple/.test(window.navigator.vendor)) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                o = !!e && parseInt(e[1], 10) < 603
              } else o = !1;
            return o
          }()) {
          var e = new Promise(function(t, e) {
              ! function n() {
                (new Date).getTime() - g >= b ? e() : document.fonts.load(E(p, '"' + p.family + '"'), m).then(function(e) {
                  1 <= e.length ? t() : setTimeout(n, 25)
                }, null)
              }()
            }),
            n = new Promise(function(e, n) {
              w = setTimeout(n, b)
            });
          Promise.race([n, e]).then(function() {
            clearTimeout(w), l(p)
          }, null)
        } else ! null(null)
      })
    }, "undefined" != typeof module ? module.exports = e : (window.FontFaceObserver = e, window.FontFaceObserver.prototype.load = e.prototype.load);
    var c = navigator.userAgent.toLowerCase();

    function s(n, e, t) {
      if (-1 != document.documentElement.className.indexOf(e)) {
        var o = new FontFaceObserver(n),
          i = new FontFaceObserver(n, {
            weight: "bold"
          });
        Promise.all([o.load(), i.load()]).then(function() {
          document.documentElement.className += " " + t, require.defined("orb/nav") && require(["orb/nav"], null)
        }).catch(null)
      }
    } - 1 !== c.indexOf("msie") && parseInt(c.split("msie")[1], 10) <= 10 || (s("ReithSans", "b-reith-sans-font", "b-reith-sans-loaded"), s("ReithSerif", "b-reith-serif-font", "b-reith-serif-loaded"))
  }(),
  function() {
    "use strict";

    
    var t = ["GB", "IM", "JE", "GG"],
      o = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
      e = {
        isUKCombined: null,
        isEU: null
      };
    "function" == typeof define && define.amd && define("orb/bbcuser", null)
  }(), window.orb = window.orb || {}, window.name.match(/ orb_fig_referrer=([^ ]*)/) && (window.orb.referrer = decodeURIComponent(RegExp.$1), window.name = window.name.replace(/ orb_fig_referrer=([^ ]*)/, ""));
var jsonpTimeout = 1e4;
window.orb.fig = function() {
  function i(e) {
    return e ? f[e] : f
  }
  var c, r = {
      ad: 0,
      ap: 0,
      ck: 1,
      eu: 1,
      uk: 1,
      df: 1
    },
    s = "ckns_orb_fig_cache",
    t = !1,
    a = !1,
    d = !1,
    u = !1,
    f = r,
    l = [],
    o = [];

  function h(e) {
    return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : document.cookie
  }

  function p(e) {
    var n = {},
      t = ["ad", "ap", "ck", "eu", "uk"];
    for (var o in t) {
      var i = t[o];
      e.hasOwnProperty(i) && (n[i] = e[i])
    }
    return n
  }
  return i.load = function(e, n) {
    i.figFailed() ? n && "function" == typeof n && n(i) : i.isDefault() ? (e && "function" == typeof e && l.push(e), n && "function" == typeof n && o.push(n)) : e && "function" == typeof e && e(i)
  }, i.isDefault = function() {
    return f.df ? 1 : 0
  }, i.geo = {
    isUK: function() {
      return i("uk")
    },
    isEU: null
  }, i.redirect = function() {
    var o = (window.document.referrer || "").toLowerCase(),
      e = (window.location.hostname || "").toLowerCase(),
      i = window.location.href || "";
    if (window.bbcredirection && (window.bbcredirection.geo || window.bbcredirection.device) && o !== i.toLowerCase()) {
      var n = /(^|\.)bbc\.co\.uk$/i.test(e),
        t = /(^|\.)bbc\.com$/i.test(e),
        r = f.uk,
        a = i;
      window.bbcredirection.geo && (t && r ? a = i.replace(/^(.+?bbc)\.com/i, "$1.co.uk") : n && !r && (a = i.replace(/^(.+?bbc)\.co\.uk/i, "$1.com"))), window.bbcpage.loadModule(["orb/cookies"]).then(function(e) {
        if (a !== i && o !== a.toLowerCase()) {
          var n = c === window.location.hostname,
            t = c && -1 < a.indexOf(c);
          try {
            e.del(s, {
              domain: ".bbc.co.uk",
              path: "/"
            }), e.del(s, {
              domain: ".bbc.com",
              path: "/"
            }), n || t || (window.name += " orb_fig_last_hostname=" + window.location.hostname, window.name += " orb_fig_referrer=" + encodeURIComponent(document.referrer), window.location.replace(a))
          } catch (e) {
            console.log("redirection_fail")
          }
        }
      })
    }
  }, i.updateCacheCookie = function(e) {
    a = !1;
    var n = new Date;
    n.setTime(n.getTime() + 432e6), window.bbcpage.loadModule(["orb/cookies"]).then(function() {
      window.bbccookies.set(s, JSON.stringify(e), {
        domain: ".bbc.co.uk",
        expires: n,
        path: "/"
      }), window.bbccookies.set(s, JSON.stringify(e), {
        domain: ".bbc.com",
        expires: n,
        path: "/"
      })
    })
  }, i.setData = null, i.figSuccess = null, i.figError = null, i.figFailed = function() {
    return t
  }, i.isOverridden = null, i.isCached = null, i.isStale = function() {
    return a
  }, i.init = function() {
    window.name.match(/ orb_fig_last_hostname=([^ ]*)/) && (c = decodeURIComponent(RegExp.$1), window.name = window.name.replace(/ orb_fig_last_hostname=([^ ]*)/, ""));
    var e = h("ckns_orb_fig");
    if (e) {
      var o = {};
      return e.replace(/([a-z]{2}):([0-9]+)/g, null), f = o, i.redirect(), u = !0, i
    }
    u = !1;
    var n = h(s);
    if (n) try {
      var t = JSON.parse(n);
      f = t, i.redirect(), d = a = !0
    } catch (e) {
      f = r, d = !(jsonpTimeout = 3e3)
    } else f = r, d = !(jsonpTimeout = 3e3);
    return !window.orb_fig_blocking || e || n || (window.orb.orb_fig = function(e) {
      f = p(e || r), i.updateCacheCookie(f), i.redirect()
    }, document.write('<script src="' + window.orb.figUrl + '"><\/script>')), i
  }, i.init()
}(), define("orb/fig", ["orb/lib/_script"], function(e) {
  var n = window.orb.fig;
  return (n.isDefault() || n.isStale()) && e.jsonp(window.orb.figUrl, n.figSuccess, {
    callbackName: "orb.orb_fig",
    timeout: jsonpTimeout,
    error: n.figError
  }), n
});
//# sourceMappingURL=api.min.js.map