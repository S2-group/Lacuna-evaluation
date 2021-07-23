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
  n.m = t, n.c = e, n.d = function(t, e, r) {}, n.r = function(t) {}, n.t = function(t, e) {}, n.n = function(t) {}, n.o = function(t, e) {}, n.p = "", n(n.s = 0)
}([function(t, e, n) {
  t.exports = n(1)
}, function(t, e, n) {
  var r, o, i, s, a, c;
  if (function() {
      "use strict";
      if ("object" == typeof window)
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function() {}
        });
        else {
          var t = window.document,
            e = [];
          r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {}, r.prototype.unobserve = function(t) {}, r.prototype.disconnect = function() {}, r.prototype.takeRecords = function() {}, r.prototype._initThresholds = function(t) {}, r.prototype._parseRootMargin = function(t) {}, r.prototype._monitorIntersections = function() {}, r.prototype._unmonitorIntersections = function() {}, r.prototype._checkForIntersections = function() {}, r.prototype._computeTargetAndRootIntersection = function(e, n) {}, r.prototype._getRootRect = function() {}, r.prototype._expandRectByRootMargin = function(t) {}, r.prototype._hasCrossedThreshold = function(t, e) {}, r.prototype._rootIsInDom = function() {}, r.prototype._rootContainsTarget = function(e) {}, r.prototype._registerInstance = function() {}, r.prototype._unregisterInstance = function() {}, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
        }
      function n(t) {}

      function r(t, e) {}

      function o(t, e, n, r) {}

      function i(t, e, n, r) {}

      function s(t) {}

      function a(t, e) {}

      function c(t) {}
    }(), "function" != typeof window.CustomEvent) {
    function u(t, e) {}
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

      function c(t) {}
      var u = new IntersectionObserver(function(n) {}, n),
        h = function(t) {};

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
    return function t(e, n) {}
  }.call((s = {
    id: "getParentWithSelector",
    exports: {},
    loaded: !1
  }).exports, n, s.exports, s), s.loaded = !0, void 0 !== i || (i = s.exports), a = function(t) {
    function e(e) {}

    function n(t) {}
    return function(r) {}
  }.apply(e, [i]), c = function(t, e) {
    function n(t) {}

    function r(t) {}

    function o(t) {}

    function i(t) {}

    function s(e) {}

    function a(n) {}
    return function(t) {}
  }.apply(e, [i, a]), Promise.resolve().then(function() {
    (function(t, e) {
      window.addEventListener("pageshow", function(t) {
        var e = navigator.vendor && navigator.vendor.indexOf("Apple") > -1;
        t.persisted && e && document.location.reload()
      }), t(["[data-bbc-context]", "[data-bbc-container]"], function(t) {})
    }).apply(null, [r, c])
  }).catch(n.oe), Promise.resolve().then(function() {
    (function(t, e) {
      var n = function(t) {},
        r = function(r) {};
      ["click", "auxclick"].forEach(function(t) {
        document.body.addEventListener(t, r)
      })
    }).apply(null, [c, i])
  }).catch(n.oe)
}]);