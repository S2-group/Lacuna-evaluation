! function(s, _, g) {
  var l, u = [],
    f = !!b();

  function b() {
    var e;
    if (s.XMLHttpRequest) try {
      e = new s.XMLHttpRequest
    } catch (e) {
      return !1
    } else
      for (var r = new Array("Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"), t = 0; t < r.length; t++) try {
        e = new ActiveXObject(r[t]);
        break
      } catch (e) {
        return !1
      }
    return e
  }

  function p(e) {
    return e
  }

  function v(e, r, t, n, o) {
    var i;

    function c() {
      var e, r, t;
      try {
        for (e = 0, r = arguments.length; e < r; e += 1)
          if (t = a(arguments[e])) return t
      } catch (e) {}
      return l
    }

    function a(e) {
      var r;
      try {
        r = e()
      } catch (e) {
        r = l
      }
      return r
    }
    return i = {
      function_offset: a(function() {
        var e = u.length;
        return 0 < e ? p(u[e - 1]) : l
      }),
      caller_offset: a(function() {
        var e = u.length;
        return 1 < e ? p(u[e - 2]) : l
      }),
      message: c(function() {
        return e
      }, function() {
        return o.message
      }),
      file: c(function() {
        return "string" == typeof e.srcElement.src ? e.srcElement.src : l
      }, function() {
        return r
      }, function() {
        return s.document.location.href.split("?")[0]
      }),
      line: t,
      column: n,
      stack: a(function() {
        return o.stack
      }),
      bot: a(function() {
        return booking_extra.b01
      })
    }, u = [], i
  }
  s._i_ = function(e) {
    u.push(e)
  }, s._r_ = function(e) {
    return u.pop(), e
  };
  var d = 0,
    k = 0,
    h = 0;
  var x = !1;
  s.addEventListener("load", function() {
    x = !0
  }), s.onabort = function() {
    _.ff_kill = !0
  }, s.addEventListener && void 0 !== s.onbeforeunload && s.addEventListener("beforeunload", function() {
    var e;
    _.ff_kill = !0, "function" == typeof s.requestIdleCallback && "serviceWorker" in navigator && s.cssCoverage && !s.cssCoverage.__processed__ && s.cssCoverage.__collecting__ && ((e = navigator.serviceWorker).controller && e.controller.postMessage ? (s.cssCoverage.__processed__ = !0, e.controller.postMessage({
      type: "css_coverage",
      coverage: s.cssCoverage.getCoverage(),
      extra: booking_extra,
      csrf: s.cssCoverage.getConfig("service").csrfToken,
      endpoint: s.cssCoverage.getConfig("service").endpoint,
      origin: s.location.origin
    })) : e.ready && e.ready.then(function(e) {
      if (e.active && e.active.postMessage) return e.active
    }).then(function(e) {
      s.cssCoverage.__processed__ = !0, e.postMessage({
        type: "css_coverage",
        coverage: s.cssCoverage.getCoverage(),
        extra: booking_extra,
        csrf: s.cssCoverage.getConfig("service").csrfToken,
        endpoint: s.cssCoverage.getConfig("service").endpoint,
        origin: s.location.origin
      })
    }))
  }, !1);
  var e = function(e, n, r, t, o) {
    if (!f) return;
    var i = v.apply(this, [].slice.apply(arguments)),
      c = function(e) {
        for (var r = e + "=", t = _.cookie.split(";"), n = 0; n < t.length; n++) {
          for (var o = t[n];
            " " == o.charAt(0);) o = o.substring(1, o.length);
          if (0 === o.indexOf(r)) return o.substring(r.length, o.length)
        }
        return null
      }("error_catcher");
    if (void 0 !== _.ff_kill && !0 === _.ff_kill && -1 != navigator.userAgent.search("Firefox") && "Error loading script" === e) return !1;
    if ("kill" == c || void 0 !== _.kill && !0 === _.kill) return !1;
    if (3 <= h) return;
    if (1 <= h && 0 <= e.indexOf("SPDR")) return;
    d++;
    var a = b();
    return function e(r) {
      if (r && _.getElementById && _.getElementById("req_info")) r(_.getElementById("req_info").innerHTML), r = null;
      else if (r) {
        if (r.retry_count = r.retry_count || 0, x && 20 < r.retry_count && B.js_catch_no_info) return void r();
        r.retry_count++, setTimeout(e.bind(null, r), 100)
      }
    }(function(e) {
      var r = "pid=" + encodeURIComponent(booking_extra.pageview_id);
      if (r += "&url=" + encodeURIComponent("" !== n && void 0 !== n ? n : location.href.split("?")[0]), g && g.env && g.env.enable_scripts_tracking) try {
        r += function(e) {
          var r, t, n = {},
            o = !1,
            i = g.env.scripts_tracking || {};
          for (r in i) i.hasOwnProperty(r) && ((t = i[r]).loaded && t.run || (o = !0, n[r] = {
            loaded: !!t.loaded,
            run: !!t.run
          }));
          if (!o) return "";
          return "&scripts=" + encodeURIComponent(JSON.stringify(n))
        }()
      } catch (e) {
        r += "&scripts=error"
      }
      e && (r += "&info=" + e), r += "&aid=" + booking_extra.b_aid + "&lang=" + booking_extra.b_lang_for_url, 6 < d && (d = k ? k + 1 : 5), r += "&errc=" + d + "&errp=" + k, r += "&stid=" + booking_extra.b_stid, r += "&ch=" + booking_extra.b_ch, r += "&ref_action=" + booking_extra.b_action, booking_extra.b_site_type_id && (r += "&stype=" + booking_extra.b_site_type_id), booking_extra.b_bbtool && (r += "&bbtool=1"), booking_extra.b_gtt && (r += "&gtt=" + encodeURIComponent(booking_extra.b_gtt)), i && (r += "&error=" + encodeURIComponent(i.message), r += "&be_running=1" + function(e) {
        var r, t, n = "";
        for (r in e) e.hasOwnProperty(r) && void 0 !== (t = e[r]) && (n += "&be_" + r + "=" + encodeURIComponent(t));
        return n
      }(i)), booking_extra.b_bp_stage && (r += "&bp_stage=" + booking_extra.b_bp_stage), booking_extra.b_bp_hid && booking_extra.b_bp_blocks && (r += "&bp_blocks=" + booking_extra.b_bp_hid + ":" + booking_extra.b_bp_blocks.join(","), booking_extra.b_bp_checkin && booking_extra.b_bp_checkout && (r += ":" + booking_extra.b_bp_checkin + ":" + booking_extra.b_bp_checkout)), g && g.env && g.env.b_log_last_custom_event && void 0 !== s.booking_extra && s.booking_extra.custom_events_triggered && (r += "&ltce=" + s.booking_extra.custom_events_triggered);
      try {
        r += "&cors=" + (/cors_js=1/.test(_.cookie) ? 1 : 0)
      } catch (e) {}
      if (o && "object" == typeof o)
        for (var t in o) o.hasOwnProperty(t) && o[t] && (r += "&" + t + "=" + encodeURIComponent(o[t]));
      k = d, a.open("GET", "/js_errors?" + r, !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onreadystatechange = function() {
        4 != a.readyState || 503 != a.status && "shut up" != a.responseText || (_.kill = !0, function(e, r, t) {
          var n = "";
          if (t) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3), n = "; expires=" + o.toGMTString()
          }
          _.cookie = e + "=" + r + n + "; path=/"
        }("error_catcher", "kill", 30))
      }, a.send(), h++
    }), !1
  };
  if (B && B.alrt_js && (e = alert), s.onerror = e, g.reportError = function(e, r, t) {
      var n = "",
        o = "[" + (r || "Reported Error") + "] ";
      try {
        n = (o + (e.message || "") + " " + (e.stack || "")).slice(0, 500)
      } catch (e) {}
      n && (t && "object" == typeof t ? s.onerror(n, null, null, null, t) : s.onerror(n))
    }, s.b_early_errors)
    for (var r = 0; r < s.b_early_errors.length; r++) s.onerror.apply(null, s.b_early_errors[r])
}(window, document, window.booking);