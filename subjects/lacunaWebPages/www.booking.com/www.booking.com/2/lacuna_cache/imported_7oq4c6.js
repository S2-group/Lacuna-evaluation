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

  function p(e) {}

  function v(e, r, t, n, o) {}
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
  }), s.onabort = function() {}, s.addEventListener && void 0 !== s.onbeforeunload && s.addEventListener("beforeunload", function() {}, !1);
  var e = function(e, n, r, t, o) {};
  if (B && B.alrt_js && (e = alert), s.onerror = e, g.reportError = function(e, r, t) {}, s.b_early_errors)
    for (var r = 0; r < s.b_early_errors.length; r++) s.onerror.apply(null, s.b_early_errors[r])
}(window, document, window.booking);