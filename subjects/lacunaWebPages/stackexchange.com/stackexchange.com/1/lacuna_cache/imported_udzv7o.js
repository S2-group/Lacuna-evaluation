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
jQuery.cookie = function(e, t, n) {
    if ("undefined" == typeof t) {
      var i = null;
      if (document.cookie && "" != document.cookie)
        for (var o = document.cookie.split(";"), r = 0; r < o.length; r++) {
          var s = jQuery.trim(o[r]);
          if (s.substring(0, e.length + 1) == e + "=") {
            i = decodeURIComponent(s.substring(e.length + 1));
            break
          }
        }
      return i
    }
    n = n || {}, null === t && (t = "", n.expires = -1);
    var a = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
      var c;
      "number" == typeof n.expires ? (c = new Date, c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires, a = "; expires=" + c.toUTCString()
    }
    var u = n.path ? "; path=" + n.path : "",
      l = n.domain ? "; domain=" + n.domain : "",
      f = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, u, l, f].join("")
  },
  function(e) {
    e.fn.typeWatch = function(t) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[1034:2192]", functionData => eval(functionData))}
  }(jQuery), window.StackExchange = {}, StackExchange.init = function() {
    var e = function() {
      $(document).keyup(function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[2328:2414]", functionData => eval(functionData))})
    };
    return function(t) {
      StackExchange.options = t, t.serverTimeOffsetSec = t.serverTime - (new Date).getTime() / 1e3, $.ajaxSetup({
        "cache": !1
      }), StackExchange.init.createJqueryExtensions(), $(function() {
        e()
      })
    }
  }(), StackExchange.init.createJqueryExtensions = function() {
    $.fn.extend({
      "fadeOutAndRemove": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[2798:2980]", functionData => eval(functionData))},
      "center": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[3009:3387]", functionData => eval(functionData))}
    })
  }, StackExchange.helpers = function() {
    var e, t, n, i = function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[3469:4396]", functionData => eval(functionData))},
      o = function() {
        function e() {
          if (!window.localStorage) return !1;
          try {
            if (window.localStorage["gps-probe"] = "1", "1" != window.localStorage["gps-probe"]) return !1;
            window.localStorage.removeItem("gps-probe")
          } catch (e) {
            return !1
          }
          return !0
        }

        function t() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[4781:4783]", functionData => eval(functionData))}

        function n(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[4807:5043]", functionData => eval(functionData))}

        function i() {
          StackExchange._gps_track && ($.each(StackExchange._gps_track, function(e, t) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[5155:5185]", functionData => eval(functionData))}), delete StackExchange._gps_track)
        }

        function o() {
          var e = localStorage[c];
          return e ? JSON.parse(e) : []
        }

        function r(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[5363:5835]", functionData => eval(functionData))}

        function s(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[5859:7015]", functionData => eval(functionData))}

        function a() {
          var e = o();
          if (e.length > 0) {
            for (var t = (new Date).getTime(), n = [], i = 0; i < e.length && n.length < 20; i++) {
              var a = e[i],
                c = t - a.now;
              0 > c || c > 36e5 ? r(a) : n.push(a)
            }
            n.length > 0 && s(n)
          }
        }
        var c = "gps-pending",
          u = {};
        if (!e()) return function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[7457:7459]", functionData => eval(functionData))};
        i(), a(), $(function() {
          $("a.tour-link").click(function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[7538:7698]", functionData => eval(functionData))}), $(".featured-site a").click(function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[7740:7931]", functionData => eval(functionData))})
        });
        var l = function(e, t, i) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[7979:8219]", functionData => eval(functionData))};
        return l
      }(),
      r = {
        "bindMovablePopups": i,
        "addSpinner": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[8330:8383]", functionData => eval(functionData))},
        "getSpinnerImg": function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[8422:8592]", functionData => eval(functionData))},
        "removeSpinner": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[8630:8681]", functionData => eval(functionData))},
        "showErrorPopup": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[8727:9147]", functionData => eval(functionData))},
        "removeErrorPopup": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[9188:9253]", functionData => eval(functionData))},
        "getHashParams": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[9291:9559]", functionData => eval(functionData))},
        "DelayedReaction": function(e, t, n) {
          n = n || {};
          var i, o, r = n.always,
            s = function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[9692:9748]", functionData => eval(functionData))};
          return {
            "trigger": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[9803:10015]", functionData => eval(functionData))},
            "cancel": function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[10050:10112]", functionData => eval(functionData))}
          }
        },
        "gps": o
      };
    return r
  }(),
  function(e) {
    function t(e, t, n, i, o) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[10228:10324]", functionData => eval(functionData))}

    function n() {
      this._events = {}, this._maxListeners = 10
    }
    t.prototype.fire = function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[10435:10602]", functionData => eval(functionData))}, n.prototype.eachListener = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[10646:10927]", functionData => eval(functionData))}, n.prototype.addListener = function(e, n, i, o) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[10976:11462]", functionData => eval(functionData))}, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[11543:11593]", functionData => eval(functionData))}, n.prototype.removeListener = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[11642:11869]", functionData => eval(functionData))}, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[11962:12076]", functionData => eval(functionData))}, n.prototype.listeners = function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[12114:12302]", functionData => eval(functionData))}, n.prototype.emit = function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[12335:12536]", functionData => eval(functionData))}, n.prototype.setMaxListeners = function(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[12580:12629]", functionData => eval(functionData))}, "function" == typeof define && define.amd ? define(function() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[12693:12715]", functionData => eval(functionData))}) : e.EventEmitter = n
  }(this), StackExchange.realtime = function() {
    function e(t, r) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[12808:13461]", functionData => eval(functionData))}

    function t(e, t, i) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[13487:13779]", functionData => eval(functionData))}

    function n(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[13799:13832]", functionData => eval(functionData))}

    function i() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[13851:13953]", functionData => eval(functionData))}

    function o() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[13972:14107]", functionData => eval(functionData))}

    function r(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[14127:14155]", functionData => eval(functionData))}

    function s() {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[14174:15198]", functionData => eval(functionData))}

    function a(n, i, o, a, c, u) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[15233:15414]", functionData => eval(functionData))}

    function c(t, n, i) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[15440:15598]", functionData => eval(functionData))}

    function u(t, n, i, o) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[15627:15793]", functionData => eval(functionData))}

    function l(e) {lacuna_lazy_load("lacuna_cache/imported_udzv7o.js[15813:16410]", functionData => eval(functionData))}
    var f, h, p = 0,
      g = [],
      d = new EventEmitter,
      v = !1;
    return {
      "init": e,
      "subscribeForStatus": u,
      "getRelativeTime": l,
      "subscribeToRealtimeQuestions": a,
      "subscribeToTopBarNotifications": c
    }
  }();