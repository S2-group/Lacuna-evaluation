! function() {
  "use strict";
  window.site = {
      getPlatform: function(e, t) {
        return t = "" === t ? "" : t || navigator.platform, e = e || navigator.userAgent, /Win(16|9[x58]|NT( [1234]| 5\.0| [^0-9]|[^ -]|$))/.test(e) || /Windows ([MC]E|9[x58]|3\.1|4\.10|NT( [1234]\D| 5\.0| [^0-9]|[^ ]|$))/.test(e) || /Windows_95/.test(e) ? "oldwin" : -1 !== t.indexOf("Win32") || -1 !== t.indexOf("Win64") ? "windows" : /android/i.test(e) ? "android" : /linux/i.test(t) || /linux/i.test(e) ? "linux" : -1 !== t.indexOf("MacPPC") ? "oldmac" : /Mac OS X 10.[0-8]\D/.test(e) ? "oldmac" : -1 !== t.indexOf("iPhone") || -1 !== t.indexOf("iPad") || -1 !== t.indexOf("iPod") || -1 !== t.indexOf("MacIntel") && "standalone" in navigator ? "ios" : -1 !== e.indexOf("Mac OS X") ? "osx" : -1 !== e.indexOf("MSIE 5.2") ? "oldmac" : -1 !== t.indexOf("Mac") ? "oldmac" : "" === t && /Firefox/.test(e) ? "fxos" : "other"
      },
      getPlatformVersion: function(e) {
        var t = (e = e || navigator.userAgent).match(/Windows\ NT\ (\d+\.\d+)/) || e.match(/Mac\ OS\ X\ (\d+[\._]\d+)/) || e.match(/Android\ (\d+\.\d+)/);
        return t ? t[1].replace("_", ".") : undefined
      },
      getArchType: function(e, t) {
        var o;
        return t = "" === t ? "" : t || navigator.platform, e = e || navigator.userAgent, /Windows/.test(e) && /ARM/.test(e) ? "armv7" : navigator.cpuClass ? navigator.cpuClass.toLowerCase() : (o = /armv\d+/i).test(t) || o.test(e) ? RegExp.lastMatch.toLowerCase() : /aarch64/.test(t) ? "armv8" : (o = /PowerPC|PPC/i).test(t) || o.test(e) ? "ppc" : "x86"
      },
      getArchSize: function(e, t) {
        t = "" === t ? "" : t || navigator.platform, e = e || navigator.userAgent;
        var o = /x64|x86_64|Win64|WOW64|aarch64/i;
        return o.test(t) || o.test(e) ? 64 : 32
      },
      platform: "other",
      platformVersion: undefined,
      archType: "x64",
      archSize: 32
    },
    function() {
      var e = document.documentElement,
        t = window.site.platform = window.site.getPlatform(),
        o = window.site.platformVersion = window.site.getPlatformVersion(),
        i = o ? parseFloat(o) : 0;
      "windows" === t ? (5.1 <= i && i <= 6 && (e.className += " xpvista"), 6.1 <= i && (e.className += " win7up")) : e.className = e.className.replace("windows", t);
      var n = window.site.archType = window.site.getArchType(),
        a = window.site.archSize = window.site.getArchSize(),
        r = n.match(/armv(\d+)/);
      "x86" !== n && (e.className = e.className.replace("x86", n), r && (e.className += " arm", 7 <= parseFloat(r[1]) && (e.className += " armv7up"))), 64 === a && (e.className += " x64"), /\s(Firefox|FxiOS)/.test(navigator.userAgent) && !/Iceweasel|IceCat|SeaMonkey|Camino|like\ Firefox/i.test(navigator.userAgent) && (e.className += " is-firefox"), e.className = e.className.replace(/\bno-js\b/, "js")
    }()
}(), "undefined" == typeof window.Mozilla && (window.Mozilla = {}), Mozilla.dntEnabled = function(e, t) {
    "use strict";
    var o = e || navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack,
      i = t || navigator.userAgent,
      n = i.match(/Firefox\/(\d+)/),
      a = /MSIE|Trident/i.test(i),
      r = i.match(/Windows.+?(?=;)/g);
    return (!a || "function" == typeof Array.prototype.indexOf) && "Enabled" === (o = n && parseInt(n[1], 10) < 32 ? "Unspecified" : a && r && -1 !== ["Windows NT 6.1", "Windows NT 6.2", "Windows NT 6.3"].indexOf(r.toString()) ? "Unspecified" : {
      0: "Disabled",
      1: "Enabled"
    } [o] || "Unspecified")
  }, "undefined" == typeof window.Mozilla && (window.Mozilla = {}), Mozilla.Cookies = {
    getItem: function(e) {
      "use strict";
      return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    },
    setItem: null,
    removeItem: null,
    hasItem: function(e) {
      "use strict";
      return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    },
    keys: null,
    enabled: function() {
      "use strict";
      try {
        document.cookie = "cookietest=1";
        var e = -1 !== document.cookie.indexOf("cookietest=");
        return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
      } catch (t) {
        return !1
      }
    }
  }, "undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function(t) {
    "use strict";
    var e = window.dataLayer = window.dataLayer || [],
      o = {
        getPageId: function(e) {
          var t = document.getElementsByTagName("html")[0].getAttribute("data-gtm-page-id"),
            o = e || document.location.pathname;
          return t || o.replace(/^(\/\w{2}\-\w{2}\/|\/\w{2,3}\/)/, "/")
        },
        getTrafficCopReferrer: function() {
          var e;
          return t.Cookies && t.Cookies.hasItem("mozilla-traffic-cop-original-referrer") && (e = t.Cookies.getItem("mozilla-traffic-cop-original-referrer"), t.Cookies.removeItem("mozilla-traffic-cop-original-referrer")), e
        },
        buildDataObject: function() {
          var e = {
              event: "page-id-loaded",
              pageId: o.getPageId()
            },
            t = o.getTrafficCopReferrer();
          return t && (e.customReferrer = t), e
        }
      };
    e.push(o.buildDataObject()), t.Analytics = o
  }(window.Mozilla);