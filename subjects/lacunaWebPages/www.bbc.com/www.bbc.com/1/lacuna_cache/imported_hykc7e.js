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
! function() {
  var p = {};
  p.POLICY_REFRESH_DATE_MILLIS = new Date(2015, 4, 21, 0, 0, 0, 0).getTime();
  var e, s = "ckns_policy_exp",
    f = "ckns_policy",
    t = {
      ads: !1,
      personalisation: !1,
      performance: !1,
      necessary: !0
    },
    i = {},
    r = {
      personalisation: "ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|WEATHER|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2",
      performance: "ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|RT",
      ads: "ckad_.+|rsi_segs|c",
      necessary: "optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie"
    };

  function h(e, o) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[1866:1896]", functionData => eval(functionData))}

  function c(e, o) {
    if (void 0 === e) return null;
    var t = {};
    t.expires = new Date(0), o && (t.domain = o.domain, t.path = o.path), document.cookie = m(e, "removed", t)
  }

  function n(e) {
    var o = window.location.hostname.split(".");
    o.length;
    for (c(e), a(e); o.length && -1 === "|co.uk|com|".indexOf("|" + o.join(".") + "|");) {
      if (o.length) {
        var t = o.join(".");
        c(e, {
          domain: t
        }), a(e, t)
      }
      o.shift()
    }
  }

  function a(e, o) {
    var t = window.location.pathname.split("/");
    for (c(e, o); t.length;) {
      var n = t.join("/");
      "" === n && (n = "/"), c(e, {
        domain: o,
        path: n
      }), c(e, {
        domain: "." + o,
        path: n
      }), t.pop()
    }
  }

  function d() {
    var e = new RegExp("(?:^|; ?)" + f + "=(\\d)(\\d)(\\d)($|;)"),
      o = document.cookie.match(e);
    return o ? {
      ads: !!+o[1],
      personalisation: !!+o[2],
      performance: !!+o[3],
      necessary: !0
    } : t
  }

  function l(e, o, t) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[2959:3420]", functionData => eval(functionData))}

  function u(e) {
    return e = (e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")
  }

  function m(e, o, t) {
    t && t.domain && t.domain;
    var n = e + "=" + (o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
    return n += (t = t || {}).path ? ";path=" + t.path : "", n += t.domain ? ";domain=" + t.domain : "", n += t.expires ? ";expires=" + t.expires.toUTCString() : "", n += t.secure ? ";secure" : ""
  }
  p.cookieOvenRequest = function(e, o, t) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[3946:4050]", functionData => eval(functionData))}, p.cookieOvenClient = function(e, o, t, n) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[4094:5455]", functionData => eval(functionData))}, p.set = function(e, o, t, n) {
      var i, r, c;
      if (void 0 !== o) {
        r = m(i = u(e), o, t);
        var a = t && t.crossDomainEnabled;
        p.isAllowed(i) && a && p.cookieOvenClient(e, o, t.domain, n)
      } else i = (c = ("" + e).match(/^([^=]+)(?==)/)) && c.length ? c[0] : "", r = e;
      p.isAllowed(i) && (document.cookie = r)
    }, p.isAllowed = function(e) {
      return function(e) {
        var o = JSON.stringify(e);
        if (void 0 !== i[o]) return i[o];
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && r[n] && !0 === e[n] && (t += (t ? "|" : "") + r[n]);
        return i[o] = new RegExp("^(" + (t || ".*") + ")$", "i"), i[o]
      }(p.readPolicy()).test(e)
    }, p.readPolicy = function(e) {
      var o = d();
      return e ? o[e] : o
    }, p.analyticsPolicyString = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6297:6402]", functionData => eval(functionData))}, p.get = function(e) {
      return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : document.cookie
    }, p.isCookiePolicySet = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6678:6716]", functionData => eval(functionData))}, p.setDefaultCookiesSingleDomain = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6763:6785]", functionData => eval(functionData))}, p.setDefaultCookiesCrossDomain = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6831:6853]", functionData => eval(functionData))}, p.copyPolicyCookiesCrossDomain = function(e) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6900:6938]", functionData => eval(functionData))}, p.setCookiePolicyCrossDomain = function(e) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[6983:7005]", functionData => eval(functionData))}, p._setPolicy = function(e, o, t, n) {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[7043:7110]", functionData => eval(functionData))}, p.cookiesEnabled = function() {
      var e = "ckns_cookietest" + Math.floor(1e5 * Math.random());
      return this.set(e, "1"), !!this.get(e) && (this.delete(e), !0)
    }, p.delete = function(e, o) {
      c(e = u(e), o)
    }, p.del = p.delete, p._crunch = function() {
      n("");
      for (var e = document.cookie.split(";"), o = 0; o < e.length; o++) {
        var t = e[o].split("=")[0].trim();
        this.isAllowed(t) || n(t)
      }
    }, p._getCurrentDomain = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[7599:7755]", functionData => eval(functionData))}, p._getPolicy = p.readPolicy, String.prototype.trim || (e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[7889:7929]", functionData => eval(functionData))}),
    function(o, t) {
      var n = !1,
        e = !0,
        i = o.document,
        r = i.documentElement,
        c = i.addEventListener,
        a = c ? "addEventListener" : "attachEvent",
        s = c ? "removeEventListener" : "detachEvent",
        d = c ? "" : "on",
        l = function(e) {
          "readystatechange" === e.type && "complete" != i.readyState || (("load" === e.type ? o : i)[s](d + e.type, l, !1), !n && (n = !0) && t.call(o, e.type || e))
        },
        u = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[8435:8591]", functionData => eval(functionData))};
      if ("complete" === i.readyState) t.call(o, "lazy");
      else {
        if (!c && r.doScroll) {
          try {
            e = !o.frameElement
          } catch (e) {}
          e && u()
        }
        i[a](d + "DOMContentLoaded", l, !1), i[a](d + "readystatechange", l, !1), o[a](d + "load", l, !1)
      }
    }(window, function() {
      p._crunch()
    }), window.addEventListener ? window.addEventListener("beforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[9042:9067]", functionData => eval(functionData))}, !1) : window.attachEvent ? window.attachEvent("onbeforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[9144:9169]", functionData => eval(functionData))}) : window.onbeforeunload = function() {lacuna_lazy_load("lacuna_cache/imported_hykc7e.js[9208:9233]", functionData => eval(functionData))}, "object" == typeof window.bbccookies && "function" == typeof window.bbccookies._getCookieName || (window.bbccookies = p, "function" == typeof define && define.amd && define("orb/cookies", function() {
      return p
    }))
}();