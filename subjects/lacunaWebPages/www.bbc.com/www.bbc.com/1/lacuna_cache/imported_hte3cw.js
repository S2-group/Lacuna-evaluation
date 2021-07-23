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
! function(t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = t, n.c = e, n.d = function(t, e, r) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[273:367]", functionData => eval(functionData))}, n.r = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[387:591]", functionData => eval(functionData))}, n.t = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[614:1008]", functionData => eval(functionData))}, n.n = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[1028:1173]", functionData => eval(functionData))}, n.o = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[1196:1255]", functionData => eval(functionData))}, n.p = "", n(n.s = 0)
}([function(t, e, n) {
  t.exports = n(1)
}, function(t, e, n) {
  var r, o, i, s, a, c;
  if (function() {
      "use strict";
      if ("object" == typeof window)
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[1777:1836]", functionData => eval(functionData))}
        });
        else {
          var t = window.document,
            e = [];
          r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[2073:2512]", functionData => eval(functionData))}, r.prototype.unobserve = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[2550:2796]", functionData => eval(functionData))}, r.prototype.disconnect = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[2834:2949]", functionData => eval(functionData))}, r.prototype.takeRecords = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[2988:3097]", functionData => eval(functionData))}, r.prototype._initThresholds = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[3141:3466]", functionData => eval(functionData))}, r.prototype._parseRootMargin = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[3511:3942]", functionData => eval(functionData))}, r.prototype._monitorIntersections = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[3991:4602]", functionData => eval(functionData))}, r.prototype._unmonitorIntersections = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[4653:5006]", functionData => eval(functionData))}, r.prototype._checkForIntersections = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[5056:6150]", functionData => eval(functionData))}, r.prototype._computeTargetAndRootIntersection = function(e, n) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[6215:7197]", functionData => eval(functionData))}, r.prototype._getRootRect = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[7237:7777]", functionData => eval(functionData))}, r.prototype._expandRectByRootMargin = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[7829:8285]", functionData => eval(functionData))}, r.prototype._hasCrossedThreshold = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[8337:8709]", functionData => eval(functionData))}, r.prototype._rootIsInDom = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[8749:8811]", functionData => eval(functionData))}, r.prototype._rootContainsTarget = function(e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[8859:8912]", functionData => eval(functionData))}, r.prototype._registerInstance = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[8957:9018]", functionData => eval(functionData))}, r.prototype._unregisterInstance = function() {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[9065:9142]", functionData => eval(functionData))}, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
        }
      function n(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[9244:9846]", functionData => eval(functionData))}

      function r(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[9871:10652]", functionData => eval(functionData))}

      function o(t, e, n, r) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[10683:10843]", functionData => eval(functionData))}

      function i(t, e, n, r) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[10874:11042]", functionData => eval(functionData))}

      function s(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[11064:11532]", functionData => eval(functionData))}

      function a(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[11557:11676]", functionData => eval(functionData))}

      function c(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[11698:11847]", functionData => eval(functionData))}
    }(), "function" != typeof window.CustomEvent) {
    function u(t, e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[11921:12143]", functionData => eval(functionData))}
    u.prototype = window.Event.prototype, window.CustomEvent = u
  }
  r = function() {
    var t = .5,
      e = 1e3,
      n = {
        threshold: [0, .2, .5, .8, 1]
      };
    return function(r, o) {
      var i = 0,
        s = [],
        a = {};

      function c(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[12420:12469]", functionData => eval(functionData))}
      var u = new IntersectionObserver(function(n) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[12521:13048]", functionData => eval(functionData))}, n),
        h = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[13078:13172]", functionData => eval(functionData))};

      function l(t, e) {
        t.forEach(function(t) {
          for (var n = (e || document).querySelectorAll(t), r = 0; r < n.length; r++) h(n[r])
        })
      }
      l(r), new MutationObserver(function(t) {
        t.forEach(function(t) {
          Array.prototype.slice.call(t.addedNodes).forEach(function(t) {
            !1 != (t instanceof Element || t instanceof HTMLDocument) && (l(r, t), r.forEach(function(e) {
              t.matches(e) && h(t)
            }))
          })
        })
      }).observe(document, {
        childList: !0,
        subtree: !0
      })
    }
  }.call((o = {
    id: "detectview",
    exports: {},
    loaded: !1
  }).exports, n, o.exports, o), o.loaded = !0, void 0 !== r || (r = o.exports), i = function() {
    return function t(e, n) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[13961:14043]", functionData => eval(functionData))}
  }.call((s = {
    id: "getParentWithSelector",
    exports: {},
    loaded: !1
  }).exports, n, s.exports, s), s.loaded = !0, void 0 !== i || (i = s.exports), a = function(t) {
    function e(e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[14241:14352]", functionData => eval(functionData))}

    function n(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[14372:14712]", functionData => eval(functionData))}
    return function(r) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[14736:15040]", functionData => eval(functionData))}
  }.apply(e, [i]), c = function(t, e) {
    function n(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[15099:15246]", functionData => eval(functionData))}

    function r(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[15266:15367]", functionData => eval(functionData))}

    function o(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[15387:15441]", functionData => eval(functionData))}

    function i(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[15461:15826]", functionData => eval(functionData))}

    function s(e) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[15846:16215]", functionData => eval(functionData))}

    function a(n) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[16235:16498]", functionData => eval(functionData))}
    return function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[16522:16786]", functionData => eval(functionData))}
  }.apply(e, [i, a]), Promise.resolve().then(function() {
    (function(t, e) {
      window.addEventListener("pageshow", function(t) {
        var e = navigator.vendor && navigator.vendor.indexOf("Apple") > -1;
        t.persisted && e && document.location.reload()
      }), t(["[data-bbc-context]", "[data-bbc-container]"], function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[17126:17355]", functionData => eval(functionData))})
    }).apply(null, [r, c])
  }).catch(n.oe), Promise.resolve().then(function() {
    (function(t, e) {
      var n = function(t) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[17486:17565]", functionData => eval(functionData))},
        r = function(r) {lacuna_lazy_load("lacuna_cache/imported_hte3cw.js[17591:18425]", functionData => eval(functionData))};
      ["click", "auxclick"].forEach(function(t) {
        document.body.addEventListener(t, r)
      })
    }).apply(null, [c, i])
  }).catch(n.oe)
}]);