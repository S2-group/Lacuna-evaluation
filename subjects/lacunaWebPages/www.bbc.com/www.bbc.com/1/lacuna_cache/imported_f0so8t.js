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
! function(e) {
  var o = {};

  function n(t) {
    if (o[t]) return o[t].exports;
    var i = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = o, n.d = function(e, o, t) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[273:367]", functionData => eval(functionData))}, n.r = function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[387:591]", functionData => eval(functionData))}, n.t = function(e, o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[614:1008]", functionData => eval(functionData))}, n.n = function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[1028:1173]", functionData => eval(functionData))}, n.o = function(e, o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[1196:1255]", functionData => eval(functionData))}, n.p = "", n(n.s = 0)
}([function(e, o, n) {
  e.exports = n(1)
}, function(e, o, n) {
  "use strict";
  var t, i, r, c;
  t = function() {
    var e = 1,
      o = {
        inject: function(e) {
          var o;
          return (o = document.createElement("script")).src = e, document.getElementsByTagName("head")[0].appendChild(o), o
        },
        jsonp: function(n, t, i) {
          var r, c, a, s = !1;
          r = (i = i || {}).callbackName ? i.callbackName : "jsonpcb" + e++, i.timeout && (a = setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[1788:1842]", functionData => eval(functionData))}, i.timeout));
          for (var u = r.split("."), l = u[u.length - 1], d = window, m = 0, f = u.length; m < f - 1; m++) d = d[u[m]];
          d[l] = function(e) {
            clearTimeout(a), s || t(e), c && c.parentNode && c.parentNode.removeChild(c), d[l] = void 0
          }, c = o.inject(n + (-1 === n.indexOf("?") ? "?" : "&") + "callback=" + r)
        }
      };
    return o
  }.call((i = {
    id: "orb/lib/_script",
    exports: {},
    loaded: !1
  }).exports, n, i.exports, i), i.loaded = !0, void 0 !== t || (t = i.exports), r = [n(2)], c = function(e) {
    function o(o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[2432:2573]", functionData => eval(functionData))}
    return {
      isOrbitEnvironment: function() {
        return "object" == typeof bbccookies && "function" != typeof bbccookies._getCookieName
      },
      set: function(o, n) {
        var t = new Date;
        if (t.setYear(t.getFullYear() + 1), this.isOrbitEnvironment()) return e.set(o, n, {
          domain: e._getCurrentDomain(),
          path: "/",
          expires: t
        });
        var i = window.location.host.match(/(.bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i),
          r = o + "=" + n + ";domain=" + (i && ".bbc.co.uk" === i[1] ? ".bbc.co.uk" : ".bbc.com") + ";path=/;expires=" + t.toUTCString() + ";";
        return e.set(r)
      },
      get: function(o) {
        return this.isOrbitEnvironment() ? e.get(o) : e.getCrumb(o)
      },
      copyPolicyCookiesCrossDomain: function(o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[3380:3482]", functionData => eval(functionData))},
      setDefaultCookiesSingleDomain: function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[3532:3626]", functionData => eval(functionData))},
      setDefaultCookiesCrossDomain: function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[3675:3768]", functionData => eval(functionData))},
      optInToAllCookiesCrossDomain: function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[3817:4068]", functionData => eval(functionData))},
      isCookiePolicySet: function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[4106:4215]", functionData => eval(functionData))}
    }
  }.apply(o, r), Promise.resolve().then(function() {
    (function(e, o) {
      var n = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
        t = "ckns_privacy",
        i = "ckns_explicit",
        r = "1",
        c = "july2019";

      function a() {
        var e = o.get(i);
        return null !== e && e === r
      }

      function s(e, o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[4702:4770]", functionData => eval(functionData))}

      function u(e, o) {
        a() || (e.style.display = "none", o.style.display = "block", window.bbcpage.trackRegion(o, {
          linkLocation: "nav-banner-cookies"
        }), window.bbcuser.logEvent("view", "nav-banner-cookies"))
      }

      function l() {
        var e = document.getElementById("bbcprivacy"),
          n = document.getElementById("bbccookies");
        document.getElementById("bbcprivacy-continue-button").addEventListener("click", function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[5247:5345]", functionData => eval(functionData))}), document.getElementById("bbccookies-continue-button").addEventListener("click", function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[5439:5580]", functionData => eval(functionData))});
        var a, l = document.getElementById("bbccookies-settings").getElementsByTagName("a")[0];
        l.addEventListener("click", (a = !1, function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[5736:5884]", functionData => eval(functionData))}));
        var d, m, f = o.get(t) === c;
        u(e, n), f ? u(e, n) : (m = n, (d = e).style.display = "block", m.style.display = "none", window.bbcpage.trackRegion(d, {
          linkLocation: "nav-banner-privacy"
        }), window.bbcuser.logEvent("view", "nav-banner-privacy"), o.set(t, c))
      }

      function d(o, n, t) {
        var i = function(e) {
            var o = "en";
            return "string" == typeof e && e.length >= 2 && (o = e.trim().substring(0, 2).toLowerCase()), -1 !== ["en", "cy", "gd", "ga"].indexOf(o) ? o : "en"
          }(o),
          r = window.COOKIES_STATIC_HOST + "bbccookies.min.css",
          c = window.COOKIES_STATIC_HOST + i + ".min.js";
        window.bbcpage.loadCSS(r).then(function() {
          e.jsonp(c, function(e) {
            var o = e.replace(/<<bbcUrlPrefix>>/g, function() {
              if (window.orb.bbcUrlPrefix) {
                var e = window.orb.bbcUrlPrefix + "bbc.com",
                  o = window.location.host.match(/(bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i);
                return o && "bbc.co.uk" === o[1] && (e = e.replace("bbc.com", "bbc.co.uk")), e
              }
              return ""
            }());
            document.getElementById("cookiePrompt").innerHTML = o;
            for (var i = document.querySelectorAll("[data-region-filter]"), r = 0; r < i.length; r++) {
              var c = i[r];
              c.getAttribute("data-region-filter") !== t && (c.style.display = "none")
            }
            n()
          }, {
            callbackName: "cookiePrompt"
          })
        })
      }
      Promise.all([window.bbcuser.isUKCombined(), window.bbcuser.getCountry(), window.bbcpage.getLanguage()]).then(function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[7601:7980]", functionData => eval(functionData))}).catch(function() {
        d("en", l, "gb")
      })
    }).apply(null, [t, c])
  }).catch(n.oe)
}, function(e, o, n) {
  var t;
  ! function() {
    var i = {};
    i.POLICY_REFRESH_DATE_MILLIS = new Date(2015, 4, 21, 0, 0, 0, 0).getTime();
    var r, c = "ckns_policy_exp",
      a = "ckns_policy",
      s = {
        ads: !1,
        personalisation: !1,
        performance: !1,
        necessary: !0
      },
      u = {},
      l = {
        personalisation: "ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|WEATHER|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2",
        performance: "ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|RT",
        ads: "ckad_.+|rsi_segs|c",
        necessary: "optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie"
      };

    function d(e, o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[10015:10049]", functionData => eval(functionData))}

    function m(e, o) {
      if (void 0 === e) return null;
      var n = {};
      n.expires = new Date(0), o && (n.domain = o.domain, n.path = o.path), document.cookie = k(e, "removed", n)
    }

    function f(e) {
      var o = window.location.hostname.split(".");
      o.length;
      for (m(e), p(e); o.length && -1 === "|co.uk|com|".indexOf("|" + o.join(".") + "|");) {
        if (o.length) {
          var n = o.join(".");
          m(e, {
            domain: n
          }), p(e, n)
        }
        o.shift()
      }
    }

    function p(e, o) {
      var n = window.location.pathname.split("/");
      for (m(e, o); n.length;) {
        var t = n.join("/");
        "" === t && (t = "/"), m(e, {
          domain: o,
          path: t
        }), m(e, {
          domain: "." + o,
          path: t
        }), n.pop()
      }
    }

    function b() {
      var e = new RegExp("(?:^|; ?)" + a + "=(\\d)(\\d)(\\d)($|;)"),
        o = document.cookie.match(e);
      return o ? {
        ads: !!+o[1],
        personalisation: !!+o[2],
        performance: !!+o[3],
        necessary: !0
      } : s
    }

    function v(e, o, n) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[11196:11741]", functionData => eval(functionData))}

    function y(e) {
      return e = (e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }

    function k(e, o, n) {
      n && n.domain && n.domain;
      var t = e + "=" + (o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
      return t += (n = n || {}).path ? ";path=" + n.path : "", t += n.domain ? ";domain=" + n.domain : "", t += n.expires ? ";expires=" + n.expires.toUTCString() : "", t += n.secure ? ";secure" : ""
    }
    /*!
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */
    i.cookieOvenRequest = function(e, o, n) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[12649:12765]", functionData => eval(functionData))}, i.cookieOvenClient = function(e, o, n, t) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[12809:14324]", functionData => eval(functionData))}, i.set = function(e, o, n, t) {
        var r, c;
        if (void 0 !== o) {
          c = k(r = y(e), o, n);
          var a = n && n.crossDomainEnabled;
          i.isAllowed(r) && a && i.cookieOvenClient(e, o, n.domain, t)
        } else r = function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[14583:14688]", functionData => eval(functionData))}(e), c = e;
        i.isAllowed(r) && (document.cookie = c)
      }, i.isAllowed = function(e) {
        return function(e) {
          var o = JSON.stringify(e);
          if (void 0 !== u[o]) return u[o];
          var n = "";
          for (var t in e) e.hasOwnProperty(t) && l[t] && !0 === e[t] && (n += (n ? "|" : "") + l[t]);
          return u[o] = new RegExp("^(" + (n || ".*") + ")$", "i"), u[o]
        }(i.readPolicy()).test(e)
      }, i.readPolicy = function(e) {
        var o = b();
        return e ? o[e] : o
      }, i.analyticsPolicyString = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15260:15371]", functionData => eval(functionData))}, i.get = function(e) {
        return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : document.cookie
      }, i.isCookiePolicySet = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15651:15693]", functionData => eval(functionData))}, i.setDefaultCookiesSingleDomain = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15740:15766]", functionData => eval(functionData))}, i.setDefaultCookiesCrossDomain = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15812:15838]", functionData => eval(functionData))}, i.copyPolicyCookiesCrossDomain = function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15885:15927]", functionData => eval(functionData))}, i.setCookiePolicyCrossDomain = function(e) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[15972:15998]", functionData => eval(functionData))}, i._setPolicy = function(e, o, n, t) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[16036:16109]", functionData => eval(functionData))}, i.cookiesEnabled = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[16141:16290]", functionData => eval(functionData))}, i.delete = function(e, o) {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[16318:16350]", functionData => eval(functionData))}, i.del = i.delete, i._crunch = function() {
        f("");
        for (var e = document.cookie.split(";"), o = 0; o < e.length; o++) {
          var n = e[o].split("=")[0].trim();
          this.isAllowed(n) || f(n)
        }
      }, i._getCurrentDomain = function() {
        try {
          return window.location.hostname.toLowerCase().match(/.*(bbc\.co\.uk|bbc\.com)\/*/)[1]
        } catch (e) {
          return
        }
      }, i._getPolicy = i.readPolicy, String.prototype.trim || (r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[16922:16966]", functionData => eval(functionData))}),
      function(e, o) {
        var n = !1,
          t = !0,
          i = e.document,
          r = i.documentElement,
          c = i.addEventListener,
          a = c ? "addEventListener" : "attachEvent",
          s = c ? "removeEventListener" : "detachEvent",
          u = c ? "" : "on",
          l = function(t) {
            "readystatechange" === t.type && "complete" != i.readyState || (("load" === t.type ? e : i)[s](u + t.type, l, !1), !n && (n = !0) && o.call(e, t.type || t))
          },
          d = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[17498:17668]", functionData => eval(functionData))};
        if ("complete" === i.readyState) o.call(e, "lazy");
        else {
          if (!c && r.doScroll) {
            try {
              t = !e.frameElement
            } catch (e) {}
            t && d()
          }
          i[a](u + "DOMContentLoaded", l, !1), i[a](u + "readystatechange", l, !1), e[a](u + "load", l, !1)
        }
      }(window, function() {
        i._crunch()
      }), window.addEventListener ? window.addEventListener("beforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[18145:18174]", functionData => eval(functionData))}, !1) : window.attachEvent ? window.attachEvent("onbeforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[18251:18280]", functionData => eval(functionData))}) : window.onbeforeunload = function() {lacuna_lazy_load("lacuna_cache/imported_f0so8t.js[18319:18348]", functionData => eval(functionData))}, "object" == typeof window.bbccookies && "function" == typeof window.bbccookies._getCookieName || (window.bbccookies = i, void 0 === (t = function() {
        return i
      }.call(o, n, o, e)) || (e.exports = t))
  }()
}]);