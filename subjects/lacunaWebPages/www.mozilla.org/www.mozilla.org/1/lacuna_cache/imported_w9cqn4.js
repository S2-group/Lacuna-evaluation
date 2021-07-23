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
if (void 0 === Mzp) var Mzp = {};

function onYouTubeIframeAPIReady() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[70:119]", functionData => eval(functionData))}
Mzp.Modal = function(t) {
    "use strict";
    var c, d, u, p = !1,
      h = t.document.body,
      f = t.document.documentElement,
      m = {},
      y = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[290:336]", functionData => eval(functionData))},
      w = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[360:440]", functionData => eval(functionData))},
      v = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[464:833]", functionData => eval(functionData))};
    return {
      createModal: function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[885:2395]", functionData => eval(functionData))},
      closeModal: function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[2426:2447]", functionData => eval(functionData))}
    }
  }(window),
  function() {
    "use strict";
    ! function s() {
      var t, e, n, o, i = document.getElementById("newsletter-form");

      function r() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[2611:2669]", functionData => eval(functionData))}
      i && (t = document.getElementById("newsletter-submit"), e = document.getElementById("newsletter-details"), n = document.querySelector(".mzp-js-email-field"), o = "none" !== window.getComputedStyle(e).display, n.addEventListener("focus", function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[2924:2945]", functionData => eval(functionData))}), t.addEventListener("click", function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[2988:3036]", functionData => eval(functionData))}), i.addEventListener("submit", function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[3080:3128]", functionData => eval(functionData))}))
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
    }, o.loadAllFallback = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[4115:4312]", functionData => eval(functionData))}, o.onImageLoad = function(t) {
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
    e.prototype.queueTrigger = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[5779:5825]", functionData => eval(functionData))}, e.prototype.trigger = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[5861:5936]", functionData => eval(functionData))}, e.prototype.destroy = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[5971:6055]", functionData => eval(functionData))}, e.prototype.disable = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6090:6134]", functionData => eval(functionData))}, e.prototype.enable = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6168:6236]", functionData => eval(functionData))}, e.prototype.next = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6268:6310]", functionData => eval(functionData))}, e.prototype.previous = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6346:6392]", functionData => eval(functionData))}, e.invokeAll = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6420:6540]", functionData => eval(functionData))}, e.destroyAll = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6568:6604]", functionData => eval(functionData))}, e.disableAll = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6632:6668]", functionData => eval(functionData))}, e.enableAll = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6695:6786]", functionData => eval(functionData))}, e.refreshAll = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[6814:6850]", functionData => eval(functionData))}, e.viewportHeight = function() {
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
      "bottom-in-view": function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[7272:7352]", functionData => eval(functionData))},
      "right-in-view": function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[7388:7466]", functionData => eval(functionData))}
    }, window.Waypoint = e
  }(),
  function() {
    "use strict";

    function e(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[7553:7597]", functionData => eval(functionData))}

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
    }, n.prototype.checkEmpty = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[8461:8726]", functionData => eval(functionData))}, n.prototype.createThrottledResizeHandler = function() {
      function t() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[8803:8855]", functionData => eval(functionData))}
      var e = this;
      this.adapter.on("resize.waypoints", function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[8929:9008]", functionData => eval(functionData))})
    }, n.prototype.createThrottledScrollHandler = function() {
      function t() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[9092:9144]", functionData => eval(functionData))}
      var e = this;
      this.adapter.on("scroll.waypoints", function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[9218:9311]", functionData => eval(functionData))})
    }, n.prototype.handleResize = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[9358:9394]", functionData => eval(functionData))}, n.prototype.handleScroll = function() {
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
    }, n.prototype.remove = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[10623:10692]", functionData => eval(functionData))}, n.prototype.innerWidth = function() {
      return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[10869:11064]", functionData => eval(functionData))}, n.prototype.refresh = function() {
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

    function s(t, e) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[13460:13512]", functionData => eval(functionData))}

    function a(t, e) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[13535:13587]", functionData => eval(functionData))}

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
    }, e.prototype.flushTriggers = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[14145:14503]", functionData => eval(functionData))}, e.prototype.next = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[14536:14701]", functionData => eval(functionData))}, e.prototype.previous = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[14738:14873]", functionData => eval(functionData))}, e.prototype.queueTrigger = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[14917:14960]", functionData => eval(functionData))}, e.prototype.remove = function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[14995:15093]", functionData => eval(functionData))}, e.prototype.first = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[15126:15164]", functionData => eval(functionData))}, e.prototype.last = function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[15196:15258]", functionData => eval(functionData))}, e.findOrCreate = function(t) {
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
      return function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[16056:16434]", functionData => eval(functionData))}
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
      h.addEventListener("submit", function v(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[16899:19517]", functionData => eval(functionData))}, !1)
    }

    function y() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[19547:19655]", functionData => eval(functionData))}

    function w() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[19674:20176]", functionData => eval(functionData))}
  }(),
  function() {
    "use strict";
    var r, o = "https://www.youtube.com/iframe_api";

    function e() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[20288:21326]", functionData => eval(functionData))}

    function s() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[21345:21654]", functionData => eval(functionData))}

    function a() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[21673:21703]", functionData => eval(functionData))}

    function n(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[21723:22221]", functionData => eval(functionData))}
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
          handler: function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[22903:23003]", functionData => eval(functionData))}
        }),
        e = r.find(".c-sticky-cta-wrapper");
      e.hide();
      var n = new i({
        element: document.querySelectorAll(".mozilla-content"),
        handler: function(t) {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[23192:23248]", functionData => eval(functionData))},
        offset: 100
      });
      o('<button type="button" class="sticky-dismiss">').text("Dismiss this prompt.").appendTo(e), o(".sticky-dismiss").on("click", function() {lacuna_lazy_load("lacuna_cache/imported_w9cqn4.js[23423:23700]", functionData => eval(functionData))})
    }() : r.remove()
  }(window.jQuery, window.Waypoint);