if (void 0 === Mzp) var Mzp = {};

function onYouTubeIframeAPIReady() {
  "use strict";
  Mozilla.homePageVideoPlay()
}
Mzp.Modal = function(t) {
    "use strict";
    var c, d, u, p = !1,
      h = t.document.body,
      f = t.document.documentElement,
      m = {},
      y = function(t) {
        27 === t.keyCode && p && v()
      },
      w = function(t) {
        p && !u.contains(t.target) && (t.stopPropagation(), u.focus())
      },
      v = function(t) {
        t && t.preventDefault(), c.appendChild(d), u.parentNode.removeChild(u), f.classList.remove("mzp-is-noscroll");
        var e = document.querySelector(".mzp-c-modal-origin");
        e.focus(), e.classList.remove("mzp-c-modal-origin"), p = !1, document.removeEventListener("focus", w, !1), m && "function" == typeof m.onDestroy && m.onDestroy(), m = {}
      };
    return {
      createModal: function(t, e, n) {
        ! function(t, e, n) {
          m = n;
          var o = window.innerWidth < 760;
          p && v();
          var i = m && m.title ? m.title : "",
            r = m && m.className ? m.className : "",
            s = m && m.closeText ? m.closeText : "",
            a = '<div class="mzp-c-modal ' + r + '" role="dialog" aria-labelledby="' + t.getAttribute("id") + '" tabindex="-1">  <div class="mzp-c-modal-window">    <div class="mzp-c-modal-inner">      <header><h2>' + i + '</h2></header>      <div class="mzp-c-modal-close">        <button type="button" class="mzp-c-modal-button-close">' + s + "</button>      </div>    </div>  </div></div>";
          m && !m.allowScroll || o ? f.classList.add("mzp-is-noscroll") : f.classList.remove("mzp-is-noscroll"), h.insertAdjacentHTML("beforeend", a), u = document.querySelector(".mzp-c-modal"), c = (d = e).parentNode, document.querySelector(".mzp-c-modal-inner").appendChild(e), e.classList.add("mzp-c-modal-overlay-contents");
          var l = document.querySelector(".mzp-c-modal-button-close");
          l.addEventListener("click", v, !1), l.setAttribute("title", s), document.querySelector(".mzp-c-modal .mzp-c-modal-window").addEventListener("click", function(t) {
            t.target === this && v()
          }, !1), u.focus(), document.addEventListener("keyup", y, !1), document.addEventListener("focus", w, !1), t.classList.add("mzp-c-modal-origin"), p = !0, m && "function" == typeof m.onCreate && m.onCreate()
        }(t, e, n)
      },
      closeModal: function() {
        v()
      }
    }
  }(window),
  function() {
    "use strict";
    ! function s() {
      var t, e, n, o, i = document.getElementById("newsletter-form");

      function r() {
        o || (e.style.display = "block", o = !0)
      }
      i && (t = document.getElementById("newsletter-submit"), e = document.getElementById("newsletter-details"), n = document.querySelector(".mzp-js-email-field"), o = "none" !== window.getComputedStyle(e).display, n.addEventListener("focus", function() {
        r()
      }), t.addEventListener("click", function(t) {
        o || (t.preventDefault(), r())
      }), i.addEventListener("submit", function(t) {
        o || (t.preventDefault(), r())
      }))
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
    }, o.loadAllFallback = function(t) {
      $(t).each(function() {
        var t = this.getAttribute("data-srcset");
        t && (this.srcset = t), this.src = this.getAttribute("data-src"), this.onload = o.onImageLoad
      })
    }, o.onImageLoad = function(t) {
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
    e.prototype.queueTrigger = function(t) {
      this.group.queueTrigger(this, t)
    }, e.prototype.trigger = function(t) {
      this.enabled && this.callback && this.callback.apply(this, t)
    }, e.prototype.destroy = function() {
      this.context.remove(this), this.group.remove(this), delete r[this.key]
    }, e.prototype.disable = function() {
      return this.enabled = !1, this
    }, e.prototype.enable = function() {
      return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function() {
      return this.group.next(this)
    }, e.prototype.previous = function() {
      return this.group.previous(this)
    }, e.invokeAll = function(t) {
      var e = [];
      for (var n in r) e.push(r[n]);
      for (var o = 0, i = e.length; o < i; o++) e[o][t]()
    }, e.destroyAll = function() {
      e.invokeAll("destroy")
    }, e.disableAll = function() {
      e.invokeAll("disable")
    }, e.enableAll = function() {
      for (var t in e.Context.refreshAll(), r) r[t].enabled = !0;
      return this
    }, e.refreshAll = function() {
      e.Context.refreshAll()
    }, e.viewportHeight = function() {
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
      "bottom-in-view": function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
      }
    }, window.Waypoint = e
  }(),
  function() {
    "use strict";

    function e(t) {
      window.setTimeout(t, 1e3 / 60)
    }

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
    }, n.prototype.checkEmpty = function() {
      var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
        n = this.element == this.element.window;
      t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, n.prototype.createThrottledResizeHandler = function() {
      function t() {
        e.handleResize(), e.didResize = !1
      }
      var e = this;
      this.adapter.on("resize.waypoints", function() {
        e.didResize || (e.didResize = !0, y.requestAnimationFrame(t))
      })
    }, n.prototype.createThrottledScrollHandler = function() {
      function t() {
        e.handleScroll(), e.didScroll = !1
      }
      var e = this;
      this.adapter.on("scroll.waypoints", function() {
        e.didScroll && !y.isTouch || (e.didScroll = !0, y.requestAnimationFrame(t))
      })
    }, n.prototype.handleResize = function() {
      y.Context.refreshAll()
    }, n.prototype.handleScroll = function() {
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
    }, n.prototype.remove = function(t) {
      delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, n.prototype.innerWidth = function() {
      return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function() {
      var t = [];
      for (var e in this.waypoints)
        for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
      for (var o = 0, i = t.length; o < i; o++) t[o].destroy()
    }, n.prototype.refresh = function() {
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

    function s(t, e) {
      return t.triggerPoint - e.triggerPoint
    }

    function a(t, e) {
      return e.triggerPoint - t.triggerPoint
    }

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
    }, e.prototype.flushTriggers = function() {
      for (var t in this.triggerQueues) {
        var e = this.triggerQueues[t],
          n = "up" === t || "left" === t;
        e.sort(n ? a : s);
        for (var o = 0, i = e.length; o < i; o += 1) {
          var r = e[o];
          !r.options.continuous && o !== e.length - 1 || r.trigger([t])
        }
      }
      this.clearTriggerQueues()
    }, e.prototype.next = function(t) {
      this.waypoints.sort(s);
      var e = o.Adapter.inArray(t, this.waypoints);
      return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, e.prototype.previous = function(t) {
      this.waypoints.sort(s);
      var e = o.Adapter.inArray(t, this.waypoints);
      return e ? this.waypoints[e - 1] : null
    }, e.prototype.queueTrigger = function(t, e) {
      this.triggerQueues[e].push(t)
    }, e.prototype.remove = function(t) {
      var e = o.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
    }, e.prototype.first = function() {
      return this.waypoints[0]
    }, e.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
    }, e.findOrCreate = function(t) {
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
      return function() {
        var e = [],
          n = arguments[0];
        return o.isFunction(arguments[0]) && ((n = o.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
          var t = o.extend({}, n, {
            element: this
          });
          "string" == typeof t.context && (t.context = o(this).closest(t.context)[0]), e.push(new i(t))
        }), e
      }
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
      h.addEventListener("submit", function v(t) {
        if (h.getAttribute("data-skip-xhr")) return !0;
        if (t.preventDefault(), t.stopPropagation(), f = [], m)
          for (m.style.display = "none"; m.firstChild;) m.removeChild(m.firstChild);
        var e = document.getElementById("format-html"),
          n = document.getElementById("format-text"),
          o = n.checked ? n.value : e.value,
          i = document.getElementById("id_email").value,
          r = document.getElementById("id_newsletters").value,
          s = document.querySelector('input[name="privacy"]:checked') ? "&privacy=true" : "",
          a = document.getElementById("id_country").value,
          l = document.getElementById("id_lang").value,
          c = "email=" + encodeURIComponent(i) + "&newsletters=" + r + s + "&fmt=" + o + "&country=" + a + "&lang=" + l + "&source_url=" + encodeURIComponent(document.location.href),
          d = new XMLHttpRequest;
        d.onload = function(t) {
          if (200 <= t.target.status && t.target.status < 300) {
            var e = t.target.response || t.target.responseText;
            if ("object" != typeof e && (e = JSON.parse(e)), e.success) h.style.display = "none",
              function o() {
                document.getElementById("newsletter-thanks").style.display = "block"
              }(), y(),
              function i() {
                if ("function" == typeof document.CustomEvent) document.dispatchEvent(new CustomEvent("newsletterSuccess", {
                  bubbles: !0,
                  cancelable: !0
                }));
                else if ("function" == typeof document.createEvent) {
                  var t = document.createEvent("Event");
                  t.initEvent("newsletterSuccess", !0, !0), document.dispatchEvent(t)
                }
              }(), window.dataLayer && window.dataLayer.push({
                event: "newsletter-signup-success",
                newsletter: r
              });
            else {
              if (e.errors)
                for (var n = 0; n < e.errors.length; n++) f.push(e.errors[n]);
              w()
            }
          } else w()
        }, d.onerror = function(t) {
          w()
        };
        var u = h.getAttribute("action");
        return d.open("POST", u, !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.timeout = 5e3, d.ontimeout = w, d.responseType = "json", d.send(c),
          function p() {
            for (var t = h.querySelectorAll("input, select"), e = 0; e < t.length; e++) t[e].disabled = !0
          }(), !1
      }, !1)
    }

    function y() {
      for (var t = h.querySelectorAll("input, select"), e = 0; e < t.length; e++) t[e].disabled = !1
    }

    function w() {
      if (y(), f.length) {
        m || ((m = document.createElement("div")).id = "newsletter-errors", m.className = "mzp-c-form-errors", o.insertBefore(m, o.firstChild));
        for (var t = document.createElement("ul"), e = 0; e < f.length; e++) {
          var n = document.createElement("li");
          n.appendChild(document.createTextNode(f[e])), t.appendChild(n)
        }
        m.appendChild(t), m.style.display = "block"
      } else h.setAttribute("data-skip-xhr", !0), h.submit()
    }
  }(),
  function() {
    "use strict";
    var r, o = "https://www.youtube.com/iframe_api";

    function e() {
      var n = document.querySelector(".mzp-c-modal-inner > header > h2").innerText,
        t = document.querySelector(".mzp-c-modal-inner .video-play"),
        e = t.getAttribute("data-id");
      r = new YT.Player(t, {
        width: 640,
        height: 360,
        videoId: e,
        playerVars: {
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: function o(t) {
            t.target.playVideo()
          },
          onStateChange: function i(t) {
            var e;
            switch (t.data) {
              case YT.PlayerState.PLAYING:
                e = "video play";
                break;
              case YT.PlayerState.PAUSED:
                e = "video paused";
                break;
              case YT.PlayerState.ENDED:
                e = "video complete"
            }
            e && window.dataLayer.push({
              event: "video-interaction",
              videoTitle: n,
              interaction: e
            })
          }
        }
      })
    }

    function s() {
      ! function t() {
        return !!document.querySelector('script[src="' + o + '"]')
      }() ? function n() {
        var t = document.createElement("script");
        t.src = o;
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
      }() : e()
    }

    function a() {
      r && r.destroy()
    }

    function n(t) {
      t.preventDefault();
      var e = t.currentTarget,
        n = e.querySelector(".mzp-c-card-title").innerText,
        o = function i(t) {
          for (t = t.nextSibling; t;) {
            if (1 === t.nodeType) return t;
            t = t.nextSibling
          }
          return null
        }(e).querySelector(".mzp-c-card-video-content");
      Mzp.Modal.createModal(e, o, {
        title: n,
        className: "mzp-has-media",
        onCreate: s,
        onDestroy: a
      })
    }
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
          handler: function(t) {
            "down" === t ? r.removeAttr("aria-hidden") : r.attr("aria-hidden", "true")
          }
        }),
        e = r.find(".c-sticky-cta-wrapper");
      e.hide();
      var n = new i({
        element: document.querySelectorAll(".mozilla-content"),
        handler: function(t) {
          "down" === t ? e.show() : e.hide()
        },
        offset: 100
      });
      o('<button type="button" class="sticky-dismiss">').text("Dismiss this prompt.").appendTo(e), o(".sticky-dismiss").on("click", function() {
        t.destroy(), n.destroy(),
          function e() {
            if (r.remove(), s) {
              var t = new Date;
              t.setTime(t.getTime() + 2592e6), Mozilla.Cookies.setItem("sticky-home-cta-dismissed", "true", t, "/")
            }
          }()
      })
    }() : r.remove()
  }(window.jQuery, window.Waypoint);