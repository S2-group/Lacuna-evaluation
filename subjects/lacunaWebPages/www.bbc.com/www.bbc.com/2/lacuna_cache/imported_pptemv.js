var dependencies = ["orb/features/_skiplinks", "orb/features/masthead/_layoutprimarynav"];

function removeElement(e, t) {}
window.bbcpage.isModal() && (dependencies = removeElement(dependencies, "orb/features/masthead/_layoutprimarynav")), require(dependencies, function() {
    "use strict";
    for (var e = 0, t = arguments.length; e < t; e++) arguments[e]()
  }), define("orb/lib/_anim", function() {
    "use strict";
    var e = {},
      n = ["transition", "WebkitTransition", "MozTransition", "msTransition", "OTransition"],
      r = function() {
        for (var e = document.createElement("div").style, t = n.length; t--;)
          if (n[t] in e) return n[t];
        return !1
      }();
    return e.animate = r ? function(e, t) {} : function(n, e) {}, e
  }), define("orb/lib/_attr", function() {
    "use strict";
    return {
      getAttr: function(e, t) {
        var n, r;
        return e ? e.attributes[t] ? e.attributes[t].specified ? e.attributes[t].value : "" : e.getAttributeNode ? null === (n = e.getAttributeNode(t, 0)) ? "" : n.value : null === (r = e.getAttribute(t, 2)) ? "" : r : ""
      },
      setAttr: function(e, t, n) {
        e.setAttribute(t, "" + n)
      }
    }
  }), define("orb/lib/_classy", function() {
    "use strict";
    var a = {
      addClass: function(e, t) {
        var n, r;
        if ("[object Array]" === Object.prototype.toString.call(t))
          for (n = 0, r = t.length; n < r; n++) a.addClass(e, t[n]);
        if (e.nodeName) a.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
        else if (e.length)
          for (n = 0, r = e.length; n < r; n++) a.addClass(e[n], t)
      },
      removeClass: function(e, t) {
        var n, r;
        if ("[object Array]" === Object.prototype.toString.call(t))
          for (n = 0, r = t.length; n < r; n++) a.removeClass(e, t[n]);
        if (e.nodeName) e.className = e.className.replace(new RegExp("(^| )" + t + "( |$)", "g"), " ").replace(/(^ | $)/g, "").replace(/ {2}/g, " ");
        else if (e.length)
          for (n = 0, r = e.length; n < r; n++) a.removeClass(e[n], t)
      },
      hasClass: function(e, t) {
        return !!e && -1 < (" " + e.className + " ").indexOf(" " + t + " ")
      }
    };
    return a
  }), define("orb/lib/_dom", function() {
    "use strict";
    return {
      remove: function(e) {
        e.parentNode.removeChild(e)
      }
    }
  }), define("orb/lib/_event", function() {
    "use strict";
    var o = {};
    return document.addEventListener ? o.addEvent = function(e, t, n) {
      if (e && (e.nodeName || e === window)) e.addEventListener(t, n, !1);
      else if (e && e.length)
        for (var r = 0, a = e.length; r < a; r++) o.addEvent(e[r], t, n)
    } : o.addEvent = function(t, e, n) {}, o.mixin = function(t) {
      t.__events = {}, t.event = function(e) {
        var r;
        return r = void 0 !== t.__events[e] ? t.__events[e] : t.__events[e] = [], {
          add: function(e) {
            r.push(e)
          },
          fire: function(e) {
            e = e || {};
            for (var t = 0, n = r.length; t < n; t++) r[t](e)
          }
        }
      }
    }, o
  }),
  function(d) {
    "use strict";

    function e(e, t, n) {
      var r, a = d.document,
        o = a.createElement("link");
      if (t) r = t;
      else {
        var i = (a.body || a.getElementsByTagName("head")[0]).childNodes;
        r = i[i.length - 1]
      }
      var s = a.styleSheets;
      o.rel = "stylesheet", o.href = e, o.media = "only x",
        function e(t) {
          if (a.body) return t();
          setTimeout(function() {})
        }(function() {
          r.parentNode.insertBefore(o, t ? r : r.nextSibling)
        });
      var l = function(e) {
        for (var t = o.href, n = s.length; n--;)
          if (s[n].href === t) return e();
        setTimeout(function() {
          l(e)
        })
      };

      function c() {
        o.addEventListener && o.removeEventListener("load", c), o.media = n || "all"
      }
      return o.addEventListener && o.addEventListener("load", c), (o.onloadcssdefined = l)(c), o
    }
    "undefined" != typeof exports ? exports.loadCSS = e : d.loadCSS = e
  }("undefined" != typeof global ? global : this), define("orb/lib/_nut", [], function() {
    var v, n, m, o, t = {
      exports: {}
    };

    function b(e, t) {
      var n = v.getElementById(e);
      return n ? [n] : []
    }

    function p(e, t) {
      return t[n] ? t[n](e) : o(e, t)
    }

    function g(e, t) {
      return t.getElementsByTagName(e)
    }
    return function(e) {
      void 0 !== t ? t.exports = e : this.nut = e
    }((v = document, n = "getElementsByClassName", m = "length", o = function(e, t) {}, function(e, t) {
      "object" == typeof(t = t || v) && t.pop && (t = t[0]);
      var n, r, a, o, i, s, l, c, d, u, f, h = [];
      for (e = e.split(","), d = -1; a = e[++d];) e[d] = a.split(/\s+/);
      for (i = e[m]; i;) {
        for (n = [t], s = -1, l = e[--i][m]; ++s < l;)
          if (a = e[i][s]) {
            for (f = "#" == a.charAt(0) ? (a = a.substr(1), b) : "." == a.charAt(0) ? (a = a.substr(1), p) : g, r = [], c = -1; n[++c];)
              for (d = -1, u = (o = f(a, n[c]))[m]; ++d < u;) r.push(o[d]);
            n = r
          } h = h.concat(n)
      }
      return h
    })), t.exports
  }), define("orb/lib/_onloadCSS", function() {
    return function(e, t) {
      var n;

      function r() {
        !n && t && (n = !0, t.call(e))
      }
      e.addEventListener && e.addEventListener("load", r), e.attachEvent && e.attachEvent("onload", r), "isApplicationInstalled" in navigator && "onloadcssdefined" in e && e.onloadcssdefined(r)
    }
  }), define("orb/lib/_ready", [], function() {
    "use strict";
    var t = [];
    var u = function(e) {
      u.isReady ? e() : t.push(e)
    };
    return u.isReady = !1,
      function(t, n) {
        var e = !0,
          r = t.document,
          a = r.documentElement,
          o = r.addEventListener,
          i = o ? "addEventListener" : "attachEvent",
          s = o ? "removeEventListener" : "detachEvent",
          l = o ? "" : "on",
          c = function(e) {
            "readystatechange" === e.type && "interactive" != r.readyState || (("load" === e.type ? t : r)[s](l + e.type, c, !1), !u.isReady && (u.isReady = !0) && n.call(t, e.type || e))
          },
          d = function() {};
        if ("complete" === r.readyState) u.isReady = !0, n.call(t, "lazy");
        else {
          if (!o && a.doScroll) {
            try {
              e = !t.frameElement
            } catch (e) {}
            e && d()
          }
          r[i](l + "DOMContentLoaded", c, !1), r[i](l + "readystatechange", c, !1), t[i](l + "load", c, !1)
        }
      }(window, function() {
        for (; t.length;) t.shift().call(null)
      }), u
  }), define("orb/lib/_str", function(e) {
    "use strict";
    return {
      htmlEntities: function(e) {},
      trimHtml: function(e, t) {}
    }
  }), define("orb/lib/_template", function() {
    "use strict";
    var a = {};
    return function e(t, n) {}
  }), define("orb/lib/_$", ["orb/lib/_nut", "orb/lib/_ready", "orb/lib/_anim", "orb/lib/_dom", "orb/lib/_event", "orb/lib/_classy", "orb/lib/_attr", "orb/lib/_str", "orb/lib/_script", "orb/lib/_template", "orb/lib/_onloadCSS"], function(e, t, n, r, a, o, i, s, l, c, d) {
    "use strict";
    var u = e,
      f = u("#orb-banner")[0],
      h = u("#orb-header")[0];
    return u.anim = n.animate, u.ready = t, u.remove = r.remove, u.addEvent = a.addEvent, u.addClass = o.addClass, u.removeClass = o.removeClass, u.hasClass = o.hasClass, u.getAttr = i.getAttr, u.setAttr = i.setAttr, u.str = s, u.script = l, u.template = c, u.onloadCSS = d, u.client = {
      old_ie: u.hasClass(f, "orb-old-ie"),
      ie8: u.hasClass(f, "orb-ie8"),
      ie7: u.hasClass(f, "orb-ie7"),
      ie6: u.hasClass(f, "orb-ie6")
    }, u.config = {
      fixed: u.hasClass(h, "orb-fixed-width") || u.client.old_ie,
      rtl: "rtl" === u.getAttr(h, "dir")
    }, u.addCSS = function(e) {}, u.addHTML = function(e, t) {}, u
  }), define("orb/features/masthead/_drawer", ["orb/lib/_$", "orb/lib/_event"], function(n, r) {
    "use strict";

    function e(e) {
      r.mixin(this), this.content = e, this._currentPanel = null, this.panels = {}, this.panelName = null
    }
    return e.prototype.addPanel = function(e) {
      return (this.panels[e.name] = e).drawer = this
    }, e.prototype.getPanel = function(e) {}, e.prototype.resize = function(e) {}, e.prototype.showPanel = function(e) {}, e.prototype.hidePanel = function() {}, e.prototype.activate = function() {}, e.prototype.deactivate = function() {}, e.prototype.getCurrentPanel = function() {
      return this._currentPanel
    }, e.Panel = function(e, t, n) {
      this.name = e, t && (this.control = t.control, this.content = t.content), this.publishState = function(e) {}, "function" == typeof n && (this.stateChangeCallback = n), r.mixin(this)
    }, e
  }), define("orb/features/masthead/_layoutprimarynav", ["orb/lib/_$", "orb/lib/_event", "orb/api", "orb/features/masthead/_linkmanager", "orb/fig", "orb/features/_drawerManager", "orb/features/_moreDrawer"], function(l, e, t, c, n, d, u) {
    "use strict";
    var f = new c(l(".orb-nav-links li").slice(0, -1)),
      h = !1,
      v = l(".orb-nav-search")[0],
      m = l("#orb-nav-more")[0],
      b = l("#orb-header")[0],
      p = l(".orb-nav-pri-container")[0],
      g = "orb-nav-dyn",
      y = "orb-nav-empty",
      C = "orb-nav-lock",
      w = 1,
      _ = l("#orb-nav-more a")[0],
      k = _.firstChild.data,
      E = l.getAttr(_, "data-alt");

    function T() {
      function r() {
        var e, t, n, r;
        e = T.event("beforeLayout"), t = T.event("afterLayout"), n = {
          links: f.links
        }, r = p.offsetTop, e.fire(n), l.addClass(m, "orb-nav-hide"), f.showAll();
        var a = f.getLastItem();
        v.offsetTop === r && a && a.offsetTop === r || (function() {
          var e, t, n;
          l.removeClass(m, "orb-nav-hide");
          var r = _.getAttribute("style");
          m.style.width = "auto", _.style.textIndent = "0", _.firstChild.data = E, e = m.offsetWidth, _.firstChild.data = k, t = m.offsetWidth, n = Math.max(e, t), m.style.width = n + "px", _.setAttribute("style", r)
        }(), f.hideToFit(function(e) {
          if (m.offsetTop !== r || v.offsetTop !== r) return !0
        }, w)), t.fire(n)
      }

      function a() {
        l.addClass(p, C)
      }

      function o() {
        l.removeClass(p, C), t.trigger("layout", {
          width: p.offsetWidth,
          height: p.offsetHeight
        })
      }

      function i() {
        var e, t = 0;
        return function() {}
      }

      function s() {
        var e = {
            isNull: !0,
            offsetLeft: -1,
            offsetWidth: 0
          },
          t = l(".orb-nav-search")[0] || e,
          n = l("#orb-nav-links")[0] || e,
          r = l("#orb-nav-more")[0] || e,
          a = (l(".orb-nav-id")[0], 0);
        a = l.config.rtl ? l.client.ie6 || l.client.ie7 ? function() {} : function() {} : function() {
          return t.offsetLeft - n.offsetLeft - n.offsetWidth
        }, T.event("afterLayout").add(function(e) {
          r.style.width = r.offsetWidth + a() - 3 + "px"
        })
      }

      function e(e) {
        var t = e.geo.isUK();
        window.orb && !t && function() {
          var e = l(".orb-nav-links ul li"),
            t = window.orb.worldwideNavlinks;
          if (t) {
            l(".orb-footer-primary-links ul")[0].innerHTML = t;
            for (var n = 0, r = e.length; n < r; n++) {
              var a = e[n];
              "orb-nav-more" !== a.id && l.remove(a)
            }
            l("#orb-nav-more")[0].insertAdjacentHTML("beforebegin", t)
          }
          var o = window.orb.worldwideFooterlinks;
          o && l("#orb-contentinfo ul")[0].insertAdjacentHTML("beforeend", o);
          var i = l(".orb-nav-blocks")[0].firstChild,
            s = l.getAttr(i, "href").replace("co.uk", "com");
          l.setAttr(i, "href", s), f = new c(l(".orb-nav-links li").slice(0, -1))
        }();
        var n = t ? l.getAttr(b, "data-max-d") : l.getAttr(b, "data-max-w");
        "" !== n && f.applyMaximum(n), T.event("afterLayout").add(function(e) {
          f.hasVisible() ? _.firstChild.data = E : _.firstChild.data = k
        }), s(), a(), l.addClass(b, g), l.removeClass(b, y), r(), o(), h = !0, d(T), u(), l.config.fixed || (l.addEvent(window, "resize", i()), l.addEvent(window, "orientationchange", function() {}))
      }
      T.recalculateLayout = function() {}, n.load(e, e)
    }
    return e.mixin(T), T
  }), define("orb/features/masthead/_linkmanager", ["orb/lib/_$"], function(a) {
    "use strict";

    function e(e) {
      if (void 0 !== this.links)
        for (var t = 0, n = this.links.length; t < n; t++) e(this.links[t], t)
    }
    var t, o = "orb-nav-hide";
    return (t = function(e) {
      this.links = [];
      for (var t = 0, n = e.length; t < n; t++) {
        this.links[t] = e[t];
        var r = (this.links[t].innerText || this.links[t].textContent).trim();
        this.links[t].linktrack = {
          nav_link: r
        }
      }
    }).prototype.removeLink = function(e) {}, t.prototype.showAll = function() {
      e.call(this, function(e) {
        a.removeClass(e, o)
      })
    }, t.prototype.hideToFit = function(e, t) {
      for (var n = !1, r = this.links.length; r--;)
        if (n || e()) a.addClass(this.links[r], o);
        else {
          if (!(r < t - 1)) break;
          n = !0, r++
        }
    }, t.prototype.applyMaximum = function(n) {}, t.prototype.hasVisible = function() {
      return this.links[0] && -1 === this.links[0].className.indexOf(o)
    }, t.prototype.getLastItem = function() {
      return this.links.length ? this.links[this.links.length - 1] : null
    }, t
  }), define("orb/features/_moreDrawer", ["orb/lib/_$", "orb/nav"], function(u, f) {
    var e = u("#orb-nav-more")[0],
      h = "orb-first-visible",
      t = document.createElement("div");

    function n() {
      for (var e = u(".orb-nav-links li"), t = u("#orb-panel-more li"), n = u(".orb-panel-content ." + h), r = "orb-panel-hide", a = 0, o = f.getMastheadDrawer(), i = 0, s = e.length; i < s - 1 && -1 === e[i].className.indexOf("orb-nav-hide"); i++) a++;
      for (var l = 0, c = t.length; l < c; l++) l < a ? u.addClass(t[l], r) : u.removeClass(t[l], r);
      if (n.length && u.removeClass(n[0], h), a < t.length) u.addClass(t[a], h);
      else if (a === t.length) {
        var d = o.getCurrentPanel();
        d && "more" === d.name && o.hidePanel()
      }
      u("#orb-panel-more-title")[0].innerHTML = u("#orb-nav-more a")[0].innerHTML
    }

    function r() {
      f.addDrawer("more", e, t),
        function() {
          var e = '<div class="orb-panel-content b-g-p b-r orb-nav-sec"><h2 id="orb-panel-more-title"></h2><ul>' + u("#orb-aside .orb-footer-primary-links ul")[0].innerHTML + "</ul></div>";
          t.innerHTML = e
        }(), n(), u.addClass(u("html")[0], "orb-more-loaded")
    }
    return t.setAttribute("id", "orb-panel-more"), u.addClass(t, "orb-panel"), r.layoutMorePanelContent = n, r
  }), define("orb/features/_drawerManager", ["orb/lib/_$", "orb/features/masthead/_drawer"], function(s, e) {
    "use strict";
    var o = new e(s("#orb-panels")[0]),
      l = s("#orb-header")[0],
      c = "orb-nav-focus-on",
      d = 400,
      u = "orb-panel-active",
      f = "orb-nav-active",
      h = "orb-first-visible";

    function a(e) {}

    function r(e) {
      var i, a = null,
        t = window.getComputedStyle ? function(e) {} : function(e) {};

      function n() {
        var e = o.getCurrentPanel();
        null !== e && function(e) {}(e)
      }
      r.initPanelDom = function(e, t) {}, s.ready(function() {
        ! function() {
          var e = s("#orb-panel-template")[0];
          e && (i = e.innerHTML, e.parentNode.removeChild(e))
        }(), (l.drawer = o).event("onActivate").add(function() {}), o.event("onDeactivate").add(function() {}), o.event("onSwapContents").add(function() {}), n(), s.addEvent(l, "mousemove", function(e) {}), s.addEvent(l, "mousedown", function(e) {}), s.addEvent(l, "keydown", function(e) {}), e.event("afterLayout").add(n)
      }), r.refreshNav = function() {}
    }
    return r.addPanelEvents = function(n) {
      var r = n.name;
      s.addEvent(n.control, "click", function(e) {}), s.addEvent(l, "keydown", function(e) {})
    }, r.getMastheadDrawer = function() {
      return o
    }, r
  }), define("orb/features/_skiplinks", ["orb/lib/_$"], function(r) {
    "use strict";
    return function() {
      r.ready(function() {
        var e = r(".orb-skip-links")[0];
        r.addEvent(e, "click", function(e) {})
      })
    }
  }), define("orb/nav", ["orb/lib/_$", "orb/features/_drawerManager", "orb/features/masthead/_drawer"], function(o, i, s) {
    "use strict";
    return {
      loadCss: function(e, t) {},
      loadJs: function(e) {},
      addDrawer: function(e, t, n, r) {
        o("#orb-panels")[0].appendChild(n);
        var a = new s.Panel(e, {
          control: t,
          content: n
        }, r);
        i.getMastheadDrawer().addPanel(a), i.addPanelEvents(a)
      },
      getDrawerState: function(e) {},
      updateDrawerHeight: function(e) {},
      getMastheadDrawer: function() {
        return i.getMastheadDrawer()
      },
      refresh: function() {}
    }
  });
//# sourceMappingURL=orb.min.js.map