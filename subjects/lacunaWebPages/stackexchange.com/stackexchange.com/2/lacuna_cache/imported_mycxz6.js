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
    e.fn.typeWatch = function(t) {}
  }(jQuery), window.StackExchange = {}, StackExchange.init = function() {
    var e = function() {
      $(document).keyup(function(e) {})
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
      "fadeOutAndRemove": function() {},
      "center": function() {}
    })
  }, StackExchange.helpers = function() {
    var e, t, n, i = function() {},
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

        function t() {}

        function n(e) {}

        function i() {
          StackExchange._gps_track && ($.each(StackExchange._gps_track, function(e, t) {}), delete StackExchange._gps_track)
        }

        function o() {
          var e = localStorage[c];
          return e ? JSON.parse(e) : []
        }

        function r(e) {}

        function s(e) {}

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
        if (!e()) return function() {};
        i(), a(), $(function() {
          $("a.tour-link").click(function() {}), $(".featured-site a").click(function() {})
        });
        var l = function(e, t, i) {};
        return l
      }(),
      r = {
        "bindMovablePopups": i,
        "addSpinner": function(e, t) {},
        "getSpinnerImg": function(e) {},
        "removeSpinner": function() {},
        "showErrorPopup": function(e, t, n) {},
        "removeErrorPopup": function() {},
        "getHashParams": function() {},
        "DelayedReaction": function(e, t, n) {
          n = n || {};
          var i, o, r = n.always,
            s = function() {};
          return {
            "trigger": function() {},
            "cancel": function() {}
          }
        },
        "gps": o
      };
    return r
  }(),
  function(e) {
    function t(e, t, n, i, o) {}

    function n() {
      this._events = {}, this._maxListeners = 10
    }
    t.prototype.fire = function(e) {}, n.prototype.eachListener = function(e, t) {}, n.prototype.addListener = function(e, n, i, o) {}, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t, n) {}, n.prototype.removeListener = function(e, t, n) {}, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(e) {}, n.prototype.listeners = function(e) {}, n.prototype.emit = function(e) {}, n.prototype.setMaxListeners = function(e) {}, "function" == typeof define && define.amd ? define(function() {}) : e.EventEmitter = n
  }(this), StackExchange.realtime = function() {
    function e(t, r) {}

    function t(e, t, i) {}

    function n(e) {}

    function i() {}

    function o() {}

    function r(e) {}

    function s() {}

    function a(n, i, o, a, c, u) {}

    function c(t, n, i) {}

    function u(t, n, i, o) {}

    function l(e) {}
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