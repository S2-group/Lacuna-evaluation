if (void 0 === Mzp) var Mzp = {};

function onYouTubeIframeAPIReady() {}
Mzp.Modal = function(t) {
    "use strict";
    var c, d, u, p = !1,
      h = t.document.body,
      f = t.document.documentElement,
      m = {},
      y = function(t) {},
      w = function(t) {},
      v = function(t) {};
    return {
      createModal: function(t, e, n) {},
      closeModal: function() {}
    }
  }(window),
  function() {
    "use strict";
    ! function s() {
      var t, e, n, o, i = document.getElementById("newsletter-form");

      function r() {}
      i && (t = document.getElementById("newsletter-submit"), e = document.getElementById("newsletter-details"), n = document.querySelector(".mzp-js-email-field"), o = "none" !== window.getComputedStyle(e).display, n.addEventListener("focus", function() {}), t.addEventListener("click", function(t) {}), i.addEventListener("submit", function(t) {}))
    }()
  }(), "undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function() {
    "use strict";
    var e, o = {};
    o.supportsInsersectionObserver = function t() {
      return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype
    }(), o.observerCallback = function(t, e) {
      t.forEach(function(t) {
        0 < t.intersectionRatio && (t.target.dataset.srcset && (t.target.srcset = t.target.dataset.srcset), t.target.src = t.target.dataset.src, t.target.onload = o.onImageLoad, e.unobserve(t.target))
      })
    }, o.registerObserver = function() {
      return new IntersectionObserver(o.observerCallback)
    }, o.observe = function(t) {
      var e = o.registerObserver(),
        n = Array.prototype.slice.call(document.querySelectorAll(t));
      return n.length && n.forEach(function(t) {
        e.observe(t)
      }), e
    }, o.loadAllFallback = function(t) {}, o.onImageLoad = function(t) {
      t.target.removeAttribute("data-src"), t.target.removeAttribute("data-srcset")
    }, o.init = function(t) {
      if ("string" != typeof(e = t || ".lazy-image-container img")) throw new Error("Mozilla.LazyLoad.init: custom selector is not a string");
      o.supportsInsersectionObserver ? o.observe(e) : o.loadAllFallback(e)
    }, window.Mozilla.LazyLoad = o
  }(),
  function() {
    "use strict";

    function e(t) {
      if (!t) throw new Error("No options passed to Waypoint constructor");
      if (!t.element) throw new Error("No element option passed to Waypoint constructor");
      if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + n, this.options = e.Adapter.extend({}, e.defaults, t), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, n += 1
    }
    var n = 0,
      r = {};
    e.prototype.queueTrigger = function(t) {}, e.prototype.trigger = function(t) {}, e.prototype.destroy = function() {}, e.prototype.disable = function() {}, e.prototype.enable = function() {}, e.prototype.next = function() {}, e.prototype.previous = function() {}, e.invokeAll = function(t) {}, e.destroyAll = function() {}, e.disableAll = function() {}, e.enableAll = function() {}, e.refreshAll = function() {}, e.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function() {
      return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    }, e.offsetAliases = {
      "bottom-in-view": function() {},
      "right-in-view": function() {}
    }, window.Waypoint = e
  }(),
  function() {
    "use strict";

    function e(t) {}

    function n(t) {
      this.element = t, this.Adapter = y.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + o, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }, this.waypoints = {
        vertical: {},
        horizontal: {}
      }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, o += 1, y.windowContext || (y.windowContext = !0, y.windowContext = new n(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var o = 0,
      i = {},
      y = window.Waypoint,
      t = window.onload;
    n.prototype.add = function(t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[e][t.key] = t, this.refresh()
    }, n.prototype.checkEmpty = function() {}, n.prototype.createThrottledResizeHandler = function() {
      function t() {}
      var e = this;
      this.adapter.on("resize.waypoints", function() {})
    }, n.prototype.createThrottledScrollHandler = function() {
      function t() {}
      var e = this;
      this.adapter.on("scroll.waypoints", function() {})
    }, n.prototype.handleResize = function() {}, n.prototype.handleScroll = function() {
      var t = {},
        e = {
          horizontal: {
            newScroll: this.adapter.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.adapter.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
      for (var n in e) {
        var o = e[n],
          i = o.newScroll > o.oldScroll ? o.forward : o.backward;
        for (var r in this.waypoints[n]) {
          var s = this.waypoints[n][r];
          if (null !== s.triggerPoint) {
            var a = o.oldScroll < s.triggerPoint,
              l = o.newScroll >= s.triggerPoint;
            (a && l || !a && !l) && (s.queueTrigger(i), t[s.group.id] = s.group)
          }
        }
      }
      for (var c in t) t[c].flushTriggers();
      this.oldScroll = {
        x: e.horizontal.newScroll,
        y: e.vertical.newScroll
      }
    }, n.prototype.innerHeight = function() {
      return this.element == this.element.window ? y.viewportHeight() : this.adapter.innerHeight()
    }, n.prototype.remove = function(t) {}, n.prototype.innerWidth = function() {
      return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function() {}, n.prototype.refresh = function() {
      var t, e = this.element == this.element.window,
        n = e ? void 0 : this.adapter.offset(),
        o = {};
      for (var i in this.handleScroll(), t = {
          horizontal: {
            contextOffset: e ? 0 : n.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: e ? 0 : n.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        }) {
        var r = t[i];
        for (var s in this.waypoints[i]) {
          var a, l, c, d, u = this.waypoints[i][s],
            p = u.options.offset,
            h = u.triggerPoint,
            f = 0,
            m = null == h;
          u.element !== u.element.window && (f = u.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(u) : "string" == typeof p && (p = parseFloat(p), -1 < u.options.offset.indexOf("%") && (p = Math.ceil(r.contextDimension * p / 100))), a = r.contextScroll - r.contextOffset, u.triggerPoint = Math.floor(f + a - p), l = h < r.oldScroll, c = u.triggerPoint >= r.oldScroll, d = !l && !c, !m && (l && c) ? (u.queueTrigger(r.backward), o[u.group.id] = u.group) : !m && d ? (u.queueTrigger(r.forward), o[u.group.id] = u.group) : m && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), o[u.group.id] = u.group)
        }
      }
      return y.requestAnimationFrame(function() {
        for (var t in o) o[t].flushTriggers()
      }), this
    }, n.findOrCreateByElement = function(t) {
      return n.findByElement(t) || new n(t)
    }, n.refreshAll = function() {
      for (var t in i) i[t].refresh()
    }, n.findByElement = function(t) {
      return i[t.waypointContextKey]
    }, window.onload = function() {
      t && t(), n.refreshAll()
    }, y.requestAnimationFrame = function(t) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, y.Context = n
  }(),
  function() {
    "use strict";

    function s(t, e) {}

    function a(t, e) {}

    function e(t) {
      this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
      },
      o = window.Waypoint;
    e.prototype.add = function(t) {
      this.waypoints.push(t)
    }, e.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      }
    }, e.prototype.flushTriggers = function() {}, e.prototype.next = function(t) {}, e.prototype.previous = function(t) {}, e.prototype.queueTrigger = function(t, e) {}, e.prototype.remove = function(t) {}, e.prototype.first = function() {}, e.prototype.last = function() {}, e.findOrCreate = function(t) {
      return n[t.axis][t.name] || new e(t)
    }, o.Group = e
  }(),
  function() {
    "use strict";

    function n(t) {
      this.$element = o(t)
    }
    var o = window.jQuery,
      t = window.Waypoint;
    o.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
      n.prototype[e] = function() {
        var t = Array.prototype.slice.call(arguments);
        return this.$element[e].apply(this.$element, t)
      }
    }), o.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
      n[e] = o[e]
    }), t.adapters.push({
      name: "jquery",
      Adapter: n
    }), t.Adapter = n
  }(),
  function() {
    "use strict";

    function t(o) {
      return function() {}
    }
    var i = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
  }(),
  function() {
    "use strict";
    var h = document.getElementById("newsletter-form");
    if (h) {
      var f = [],
        m = document.getElementById("newsletter-errors"),
        o = document.querySelector(".mzp-c-newsletter-content");
      h.addEventListener("submit", function v(t) {}, !1)
    }

    function y() {}

    function w() {}
  }(),
  function() {
    "use strict";
    var r, o = "https://www.youtube.com/iframe_api";

    function e() {}

    function s() {}

    function a() {}

    function n(t) {}
    Mozilla.homePageVideoPlay = e,
      function i() {
        for (var t = document.querySelectorAll(".mzp-c-card.has-video-embed .mzp-c-card-block-link"), e = 0; e < t.length; e++) t[e].addEventListener("click", n, !1)
      }()
  }(),
  function(o, i) {
    "use strict";
    Mozilla.LazyLoad.init();
    var r = o(document.querySelectorAll(".c-sticky-cta")),
      s = "undefined" != typeof Mozilla.Cookies && Mozilla.Cookies.enabled();
    r.attr("aria-hidden", "true"), s ? Mozilla.Cookies.getItem("sticky-home-cta-dismissed") ? r.remove() : function a() {
      var t = new i({
          element: document.querySelectorAll(".c-primary-cta"),
          handler: function(t) {}
        }),
        e = r.find(".c-sticky-cta-wrapper");
      e.hide();
      var n = new i({
        element: document.querySelectorAll(".mozilla-content"),
        handler: function(t) {},
        offset: 100
      });
      o('<button type="button" class="sticky-dismiss">').text("Dismiss this prompt.").appendTo(e), o(".sticky-dismiss").on("click", function() {})
    }() : r.remove()
  }(window.jQuery, window.Waypoint);