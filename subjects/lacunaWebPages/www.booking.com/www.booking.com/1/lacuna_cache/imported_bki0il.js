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

  function p(e) {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[489:507]", functionData => eval(functionData))}

  function v(e, r, t, n, o) {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[537:1621]", functionData => eval(functionData))}
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
  }), s.onabort = function() {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[1845:1869]", functionData => eval(functionData))}, s.addEventListener && void 0 !== s.onbeforeunload && s.addEventListener("beforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[1970:3022]", functionData => eval(functionData))}, !1);
  var e = function(e, n, r, t, o) {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[3063:6941]", functionData => eval(functionData))};
  if (B && B.alrt_js && (e = alert), s.onerror = e, g.reportError = function(e, r, t) {lacuna_lazy_load("lacuna_cache/imported_bki0il.js[7029:7301]", functionData => eval(functionData))}, s.b_early_errors)
    for (var r = 0; r < s.b_early_errors.length; r++) s.onerror.apply(null, s.b_early_errors[r])
}(window, document, window.booking);