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
  n.m = t, n.c = e, n.d = function(t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) n.d(r, o, function(e) {
        return t[e]
      }.bind(null, o));
    return r
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 0)
}([function(t, e, n) {
  t.exports = n(1)
}, function(t, e, n) {
  var r, o, i, s, a, c;
  if (function() {
      "use strict";
      if ("object" == typeof window)
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function() {
            return this.intersectionRatio > 0
          }
        });
        else {
          var t = window.document,
            e = [];
          r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
            if (!this._observationTargets.some(function(e) {
                return e.element == t
              })) {
              if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
              this._registerInstance(), this._observationTargets.push({
                element: t,
                entry: null
              }), this._monitorIntersections(), this._checkForIntersections()
            }
          }, r.prototype.unobserve = function(t) {
            this._observationTargets = this._observationTargets.filter(function(e) {
              return e.element != t
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
          }, r.prototype.disconnect = function() {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
          }, r.prototype.takeRecords = function() {
            var t = this._queuedEntries.slice();
            return this._queuedEntries = [], t
          }, r.prototype._initThresholds = function(t) {
            var e = t || [0];
            return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
              if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
              return t !== n[e - 1]
            })
          }, r.prototype._parseRootMargin = function(t) {
            var e = (t || "0px").split(/\s+/).map(function(t) {
              var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
              if (!e) throw new Error("rootMargin must be specified in pixels or percent");
              return {
                value: parseFloat(e[1]),
                unit: e[2]
              }
            });
            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
          }, r.prototype._monitorIntersections = function() {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(window, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0
            }))))
          }, r.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
          }, r.prototype._checkForIntersections = function() {
            var t = this._rootIsInDom(),
              e = t ? this._getRootRect() : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              };
            this._observationTargets.forEach(function(r) {
              var o = r.element,
                i = s(o),
                a = this._rootContainsTarget(o),
                c = r.entry,
                u = t && a && this._computeTargetAndRootIntersection(o, e),
                h = r.entry = new n({
                  time: window.performance && performance.now && performance.now(),
                  target: o,
                  boundingClientRect: i,
                  rootBounds: e,
                  intersectionRect: u
                });
              c ? t && a ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h) : c && c.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
          }, r.prototype._computeTargetAndRootIntersection = function(e, n) {
            if ("none" != window.getComputedStyle(e).display) {
              for (var r, o, i, a, u, h, l, d, f = s(e), p = c(e), b = !1; !b;) {
                var v = null,
                  g = 1 == p.nodeType ? window.getComputedStyle(p) : {};
                if ("none" == g.display) return;
                if (p == this.root || p == t ? (b = !0, v = n) : p != t.body && p != t.documentElement && "visible" != g.overflow && (v = s(p)), v && (r = v, o = f, void 0, void 0, void 0, void 0, void 0, void 0, i = Math.max(r.top, o.top), a = Math.min(r.bottom, o.bottom), u = Math.max(r.left, o.left), d = a - i, !(f = (l = (h = Math.min(r.right, o.right)) - u) >= 0 && d >= 0 && {
                    top: i,
                    bottom: a,
                    left: u,
                    right: h,
                    width: l,
                    height: d
                  }))) break;
                p = c(p)
              }
              return f
            }
          }, r.prototype._getRootRect = function() {
            var e;
            if (this.root) e = s(this.root);
            else {
              var n = t.documentElement,
                r = t.body;
              e = {
                top: 0,
                left: 0,
                right: n.clientWidth || r.clientWidth,
                width: n.clientWidth || r.clientWidth,
                bottom: n.clientHeight || r.clientHeight,
                height: n.clientHeight || r.clientHeight
              }
            }
            return this._expandRectByRootMargin(e)
          }, r.prototype._expandRectByRootMargin = function(t) {
            var e = this._rootMarginValues.map(function(e, n) {
                return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
              }),
              n = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3]
              };
            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
          }, r.prototype._hasCrossedThreshold = function(t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
              r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (n !== r)
              for (var o = 0; o < this.thresholds.length; o++) {
                var i = this.thresholds[o];
                if (i == n || i == r || i < n != i < r) return !0
              }
          }, r.prototype._rootIsInDom = function() {
            return !this.root || a(t, this.root)
          }, r.prototype._rootContainsTarget = function(e) {
            return a(this.root || t, e)
          }, r.prototype._registerInstance = function() {
            e.indexOf(this) < 0 && e.push(this)
          }, r.prototype._unregisterInstance = function() {
            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
          }, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
        }
      function n(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect,
          n = e.width * e.height,
          r = this.intersectionRect,
          o = r.width * r.height;
        this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
      }

      function r(t, e) {
        var n, r, o, i = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
          o || (o = setTimeout(function() {
            n(), o = null
          }, r))
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
          return t.value + t.unit
        }).join(" ")
      }

      function o(t, e, n, r) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
      }

      function i(t, e, n, r) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
      }

      function s(t) {
        var e;
        try {
          e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.right - e.left,
          height: e.bottom - e.top
        }), e) : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }
      }

      function a(t, e) {
        for (var n = e; n;) {
          if (n == t) return !0;
          n = c(n)
        }
        return !1
      }

      function c(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
      }
    }(), "function" != typeof window.CustomEvent) {
    function u(t, e) {
      e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
    }
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

      function c(t) {
        clearTimeout(a[t]), delete a[t]
      }
      var u = new IntersectionObserver(function(n) {
          n.forEach(function(n) {
            var r = n.target,
              i = function(t) {
                return t.getAttribute("data-x-bbc-element-id")
              }(r);
            ! function(t) {
              return s.indexOf(t) > -1
            }(r) && n.intersectionRatio >= t ? (a[i] && c(i), function(t, e, n) {
              a[t] = setTimeout(e, n)
            }(i, function() {
              ! function(t) {
                s.push(t), o(t)
              }(r)
            }, e)) : c(i)
          })
        }, n),
        h = function(t) {
          t.setAttribute("data-x-bbc-element-id", "el-" + i), u.observe(t), i += 1
        };

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
    return function t(e, n) {
      return e.matches(n) ? e : !!e.parentElement && t(e.parentElement, n)
    }
  }.call((s = {
    id: "getParentWithSelector",
    exports: {},
    loaded: !1
  }).exports, n, s.exports, s), s.loaded = !0, void 0 !== i || (i = s.exports), a = function(t) {
    function e(e) {
      var n = t(e, "[data-stats]");
      return JSON.parse(n.getAttribute("data-stats")).link_location
    }

    function n(t) {
      var n = {
        "iplayer-video": "iplayer",
        video: "video",
        audio: "audio",
        "iplayer-radio": "audio"
      };
      if (["message-banner", "message-banner-signed-in"].indexOf(e(t)) > -1) return "button";
      var r = t.getAttribute("data-bbc-asset-type");
      return n[r] ? "card-" + n[r] : "card"
    }
    return function(r) {
      var o = t(r, "[data-stats]"),
        i = Array.prototype.slice.call(document.querySelectorAll("[data-stats]")).indexOf(o) + 1,
        s = Array.prototype.slice.call(r.parentElement.children).indexOf(r) + 1;
      return {
        PAR: e(r) + "::" + i,
        CHD: n(r) + "::" + s
      }
    }
  }.apply(e, [i]), c = function(t, e) {
    function n(t) {
      return encodeURIComponent(t.getAttribute("data-bbc-title") || t.getAttribute("data-bbc-content-label") || t.innerText.split("\n")[0])
    }

    function r(t) {
      if (t.hasAttribute("data-bbc-event-type")) return t.getAttribute("data-bbc-event-type")
    }

    function o(t) {
      return t.getAttribute("data-bbc-source")
    }

    function i(t) {
      return t.hasAttribute("data-bbc-result") ? t.getAttribute("data-bbc-result") : function t(e) {
        if (e.hasAttribute("href")) return encodeURIComponent(e.getAttribute("href"));
        for (var n = e.children || [], r = 0; r < n.length; r++) {
          var o = t(n[r]);
          if (null !== o) return o
        }
        return null
      }(t)
    }

    function s(e) {
      var n = t(e, "[data-bbc-personalisation]");
      if (n) return JSON.parse(n.getAttribute("data-bbc-personalisation"));
      var r = t(e, "[data-stats]");
      if (!r) return {};
      var o = JSON.parse(r.getAttribute("data-stats"));
      return o.hp_sgm_id || o.hp_sgm_user_score ? {
        SEG: o.hp_sgm_id + "::" + o.hp_sgm_user_score
      } : {}
    }

    function a(n) {
      var r = t(n, "[data-bbc-metadata]"),
        o = r ? JSON.parse(r.getAttribute("data-bbc-metadata")) : {};
      if (t(n, "[data-bbc-track-position]")) {
        var i = e(n);
        if (!o.PAR) return Object.assign({}, i, o)
      }
      return o
    }
    return function(t) {
      return {
        container: t.getAttribute("data-bbc-container") || t.getAttribute("data-bbc-context"),
        label: n(t),
        type: r(t),
        source: o(t),
        personalisation: s(t),
        metadata: a(t),
        result: i(t)
      }
    }
  }.apply(e, [i, a]), Promise.resolve().then(function() {
    (function(t, e) {
      window.addEventListener("pageshow", function(t) {
        var e = navigator.vendor && navigator.vendor.indexOf("Apple") > -1;
        t.persisted && e && document.location.reload()
      }), t(["[data-bbc-context]", "[data-bbc-container]"], function(t) {
        if (!t.hasAttribute("data-bbc-ignore-views")) {
          var n = new window.CustomEvent("bbc-user-event", {
            bubbles: !0,
            detail: e(t)
          });
          t.dispatchEvent(n)
        }
      })
    }).apply(null, [r, c])
  }).catch(n.oe), Promise.resolve().then(function() {
    (function(t, e) {
      var n = function(t) {
          return null === t.which ? 4 === t.button : 1 === t.button
        },
        r = function(r) {
          if (function(t) {
              return 0 === t.button
            }(r) || n(r)) {
            var o = e(r.target, "[data-bbc-container]"),
              i = e(r.target, "a, button");
            if (o && i) {
              "A" === i.tagName && function(t, e, r) {
                t.altKey || t.ctrlKey || t.metaKey || t.shiftKey || n(t) || e.target && !e.target.match(/^_(self|parent|top)$/i) || (t.preventDefault(), setTimeout(function() {
                  window.location.href = e.href
                }, r))
              }(r, i, 1500);
              var s = t(o);
              s.elem = i, s.originalEvent = r;
              var a = new window.CustomEvent("bbc-user-click", {
                bubbles: !0,
                detail: s
              });
              i.dispatchEvent(a)
            }
          }
        };
      ["click", "auxclick"].forEach(function(t) {
        document.body.addEventListener(t, r)
      })
    }).apply(null, [c, i])
  }).catch(n.oe)
}]);