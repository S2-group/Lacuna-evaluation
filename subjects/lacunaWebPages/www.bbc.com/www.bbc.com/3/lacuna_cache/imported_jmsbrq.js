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
  n.m = t, n.c = e, n.d = null, n.r = null, n.t = null, n.n = null, n.o = null, n.p = "", n(n.s = 0)
}([function(t, e, n) {
  t.exports = n(1)
}, function(t, e, n) {
  var r, o, i, s, a, c;
  if (function() {
      "use strict";
      if ("object" == typeof window)
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: null
        });
        else {
          var t = window.document,
            e = [];
          r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = null, r.prototype.unobserve = null, r.prototype.disconnect = null, r.prototype.takeRecords = null, r.prototype._initThresholds = null, r.prototype._parseRootMargin = null, r.prototype._monitorIntersections = null, r.prototype._unmonitorIntersections = null, r.prototype._checkForIntersections = null, r.prototype._computeTargetAndRootIntersection = null, r.prototype._getRootRect = null, r.prototype._expandRectByRootMargin = null, r.prototype._hasCrossedThreshold = null, r.prototype._rootIsInDom = null, r.prototype._rootContainsTarget = null, r.prototype._registerInstance = null, r.prototype._unregisterInstance = null, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
        }
      

      

      

      

      

      

      
    }(), "function" != typeof window.CustomEvent) {
    
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

      
      var u = new IntersectionObserver(null, n),
        h = null;

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
    return null
  }.call((s = {
    id: "getParentWithSelector",
    exports: {},
    loaded: !1
  }).exports, n, s.exports, s), s.loaded = !0, void 0 !== i || (i = s.exports), a = function(t) {
    

    
    return null
  }.apply(e, [i]), c = function(t, e) {
    

    

    

    

    

    
    return null
  }.apply(e, [i, a]), Promise.resolve().then(function() {
    (function(t, e) {
      window.addEventListener("pageshow", function(t) {
        var e = navigator.vendor && navigator.vendor.indexOf("Apple") > -1;
        t.persisted && e && document.location.reload()
      }), t(["[data-bbc-context]", "[data-bbc-container]"], null)
    }).apply(null, [r, c])
  }).catch(n.oe), Promise.resolve().then(function() {
    (function(t, e) {
      var n = null,
        r = null;
      ["click", "auxclick"].forEach(function(t) {
        document.body.addEventListener(t, r)
      })
    }).apply(null, [c, i])
  }).catch(n.oe)
}]);