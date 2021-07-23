! function() {
  /**
   * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
   * Available via the MIT or new BSD license.
   * see: http://github.com/jrburke/almond for details
   */
  var e, t, i;
  ! function(p) {
    var o, s, d, h, g = {},
      v = {},
      m = {},
      y = {},
      n = Object.prototype.hasOwnProperty,
      r = [].slice,
      x = /\.js$/;

    function b(e, t) {
      var n, r = B.env && B.env.b_dev_server,
        i = (n = B.reportError) && "[object Function]" === {}.toString.call(n) && B.reportError.bind(B);
      if (r || !i) throw new Error(e);
      i({
        message: e
      }, t)
    }

    function w(e, t) {
      return n.call(e, t)
    }

    function a(e, t) {
      var n, r, i, o, s, a, u, l, c, f, p, d = t && t.split("/"),
        h = m.map,
        g = h && h["*"] || {};
      if (e && "." === e.charAt(0))
        if (t) {
          for (d = d.slice(0, d.length - 1), s = (e = e.split("/")).length - 1, m.nodeIdCompat && x.test(e[s]) && (e[s] = e[s].replace(x, "")), e = d.concat(e), c = 0; c < e.length; c += 1)
            if ("." === (p = e[c])) e.splice(c, 1), c -= 1;
            else if (".." === p) {
            if (1 === c && (".." === e[2] || ".." === e[0])) break;
            0 < c && (e.splice(c - 1, 2), c -= 2)
          }
          e = e.join("/")
        } else 0 === e.indexOf("./") && (e = e.substring(2));
      if ((d || g) && h) {
        for (c = (n = e.split("/")).length; 0 < c; c -= 1) {
          if (r = n.slice(0, c).join("/"), d)
            for (f = d.length; 0 < f; f -= 1)
              if ((i = h[d.slice(0, f).join("/")]) && (i = i[r])) {
                o = i, a = c;
                break
              } if (o) break;
          !u && g && g[r] && (u = g[r], l = c)
        }!o && u && (o = u, a = l), o && (n.splice(0, a, o), e = n.join("/"))
      }
      return e
    }

    function T(t, n) {
      return function() {
        var e = r.call(arguments, 0);
        return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(p, e.concat([t, n]))
      }
    }

    function C(t) {
      return function(e) {
        g[t] = e
      }
    }

    function E(e) {
      if (w(v, e)) {
        var t = v[e];
        delete v[e], y[e] = !0, o.apply(p, t)
      }
      return w(g, e) || w(y, e) || b("No " + e, "almond"), g[e]
    }

    function u(e) {
      var t, n = e ? e.indexOf("!") : -1;
      return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }
    d = function(e, t) {
      var n, r, i = u(e),
        o = i[0];
      return e = i[1], o && (n = E(o = a(o, t))), o ? e = n && n.normalize ? n.normalize(e, (r = t, function(e) {
        return a(e, r)
      })) : a(e, t) : (o = (i = u(e = a(e, t)))[0], e = i[1], o && (n = E(o))), {
        f: o ? o + "!" + e : e,
        n: e,
        pr: o,
        p: n
      }
    }, h = {
      require: function(e) {
        return T(e)
      },
      exports: function(e) {
        var t = g[e];
        return void 0 !== t ? t : g[e] = {}
      },
      module: function(e) {
        return {
          id: e,
          uri: "",
          exports: g[e],
          config: (t = e, function() {
            return m && m.config && m.config[t] || {}
          })
        };
        var t
      }
    }, o = function(e, t, n, r) {
      var i, o, s, a, u, l, c = [],
        f = typeof n;
      if (r = r || e, "undefined" === f || "function" === f) {
        for (t = !t.length && n.length ? ["require", "exports", "module"] : t, u = 0; u < t.length; u += 1) "require" === (o = (a = d(t[u], r)).f) ? c[u] = h.require(e) : "exports" === o ? (c[u] = h.exports(e), l = !0) : "module" === o ? i = c[u] = h.module(e) : w(g, o) || w(v, o) || w(y, o) ? c[u] = E(o) : a.p ? (a.p.load(a.n, T(r, !0), C(o), {}), c[u] = g[o]) : b(e + " missing " + o, "almond");
        s = n ? n.apply(g[e], c) : void 0, e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : s === p && l || (g[e] = s))
      } else e && (g[e] = n)
    }, e = t = s = function(e, t, n, r, i) {
      if ("string" == typeof e) {
        if (h[e]) return h[e](t);
        return E(d(e, t).f)
      }
      if (!e.splice) {
        if ((m = e).deps && s(m.deps, m.callback), !t) return;
        t.splice ? (e = t, t = n, n = null) : e = p
      }
      return t = t || function() {}, "function" == typeof n && (n = r, r = i), r ? o(p, e, t, n) : setTimeout(function() {
        o(p, e, t, n)
      }, 4), s
    }, s.config = function(e) {
      return s(e)
    }, e._defined = g, (i = function(e, t, n) {
      t.splice || (n = t, t = []), w(g, e) || w(v, e) || (v[e] = [e, t, n])
    }).amd = {
      jQuery: !0
    }
  }(), B.define = i, B.require = t, B.requirejs = e
}(),
function(e, t) {
  e("tmpl_data", [], function() {
    "use strict";
    var a = {};

    function u(e, t, n) {
      void 0 === a[e] ? a[e] = t : (a.b_dev_server && console.warn("SERVER::Trying to override " + e + " with value: " + t), n && (a[e] = t))
    }

    function e(e, t) {
      if (t) u(e, t);
      else {
        if ("string" == typeof e) return a[e];
        if ("object" != typeof e) return Object.keys(a).reduce(function(e, t) {
          return e[t] = a[t], e
        }, {});
        if (e.slice) {
          for (var n, r = {}, i = 0, o = e.length; i < o; ++i) r[n = e[i]] = a[n];
          return r
        }
        for (var s in e) e.hasOwnProperty(s) && u(s, e[s])
      }
    }
    return e.reset = function(e) {
      for (var t in e) e.hasOwnProperty(t) && u(t, e[t], !0)
    }, e
  })
}(B.define, B.require),
function(e, t) {
  e("request_info", [], function() {
    "use strict";
    var n, r = {},
      i = "";

    function t() {
      var e, t = i;
      i = Object.keys(r).join(","), (n || (n = document.getElementById("req_info"))) && (n.innerHTML !== t && (e = n.innerHTML, r = e.split(",").reduce(function(e, t) {
        return e[t] = !0, e
      }, r), i = Object.keys(r).join(",")), n.innerHTML = i)
    }

    function o(e) {
      r[e] = !0
    }
    return {
      populate: function(e) {
        o(e), "string" == typeof e ? (o(e), t()) : e instanceof Array && (e.forEach(o), t())
      }
    }
  })
}(B.define, B.require),
function() {
  var e, n;
  B.define("et", function() {
    return B.et
  }), e = B.define, n = B.require, e("et_debug", [], function() {
    var t, r = B.env.b_dev_server && B.env.et_debug_level ? parseInt(B.env.et_debug_level, 10) : 0;

    function i() {
      try {
        if (!t) {
          var e = n("event-emitter");
          t = new e("et", {
            async: !0
          })
        }
        return t
      } catch (e) {
        return r && console.log("Error when trying to init et event emitter", "error:", e), null
      }
    }
    return {
      level: r,
      events: {
        UNABLE_TO_STRINGIFY: "unable_to_stringify",
        INIT_BEACON: "init_beacon",
        DEFER_BEACON: "defer_beacon",
        SEND_BEACON: "send_beacon",
        BEACON_SENT: "beacon_sent",
        TRACK_UNKNOWN_ITEM: "track_unknown_item",
        SHOULD_TRACK: "should_track",
        TRACKING_ATTEMPT: "tracking_attempt",
        NOT_TRACKING_WAS_TRACKED: "not_tracking_was_tracked",
        NOT_TRACKING_FULLON: "not_tracking_fullon",
        NOT_TRACKING_NOT_RUNNING: "not_tracking_not_running",
        ADD_EVENT_LISTENER: "add_event_listener",
        NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER: "not_existing_element_wont_add_listener",
        ADD_DEBOUNCED_VIEW_HANDLER: "add_view_handler",
        ATTACH_VIEW_LISTENER: "attach_view_listener",
        DETACH_VIEW_LISTENER: "detach_view_listener",
        CHECK_IF_VISIBLE: "check_if_visible",
        ONVIEW_TRACKING_TRIGGERED: "onview_tracking_triggered",
        VISIBLE_CHECK_FINISHED: "visible_check_finished",
        WONT_ATTACH_EVENT_TRACKING: "wont_attach_event_tracking"
      },
      report: function(t, n) {
        try {
          var e = i();
          e.trigger.apply(e, [].slice.call(arguments))
        } catch (e) {
          r && console.log("Error when trying to report et event", t, n, "error:", e)
        }
      },
      getEventEmitter: i
    }
  }), B.require(["et", "et_debug"], function(e, t) {
    e.registerDebug(t)
  })
}(), B.define("env", function(e, t, n) {
    var r = "benv/env.js is deprecated, use server-data instead";
    if (B.reportError({
        message: r
      }, "benv"), B.env && B.env.b_dev_server) throw new Error(r);
    return B.env
  }), B.define("server-data", function(e, t, n) {
    return B.env
  }),
  function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function(C, e) {
    var t = [],
      E = C.document,
      c = t.slice,
      g = t.concat,
      a = t.push,
      i = t.indexOf,
      n = {},
      r = n.toString,
      h = n.hasOwnProperty,
      v = {},
      N = function(e, t) {
        return new N.fn.init(e, t)
      },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      s = /^-ms-/,
      u = /-([\da-z])/gi,
      l = function(e, t) {
        return t.toUpperCase()
      };

    function f(e) {
      var t = !!e && "length" in e && e.length,
        n = N.type(e);
      return "function" !== n && !N.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    N.fn = N.prototype = {
      jquery: "2.2.4",
      constructor: N,
      selector: "",
      length: 0,
      toArray: function() {
        return c.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
      },
      pushStack: function(e) {
        var t = N.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return N.each(this, e)
      },
      map: function(n) {
        return this.pushStack(N.map(this, function(e, t) {
          return n.call(e, t, e)
        }))
      },
      slice: function() {
        return this.pushStack(c.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: a,
      sort: t.sort,
      splice: t.splice
    }, N.extend = N.fn.extend = function() {
      var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || N.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (N.isPlainObject(r) || (i = N.isArray(r))) ? (i ? (i = !1, o = n && N.isArray(n) ? n : []) : o = n && N.isPlainObject(n) ? n : {}, s[t] = N.extend(l, o, r)) : void 0 !== r && (s[t] = r));
      return s
    }, N.extend({
      expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === N.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !N.isArray(e) && 0 <= t - parseFloat(t) + 1
      },
      isPlainObject: function(e) {
        var t;
        if ("object" !== N.type(e) || e.nodeType || N.isWindow(e)) return !1;
        if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (t in e);
        return void 0 === t || h.call(e, t)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        (e = N.trim(e)) && (1 === e.indexOf("use strict") ? ((t = E.createElement("script")).text = e, E.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(s, "ms-").replace(u, l)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var n, r = 0;
        if (f(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(o, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (f(Object(e)) ? N.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : i.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
        return r
      },
      map: function(e, t, n) {
        var r, i, o = 0,
          s = [];
        if (f(e))
          for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
        else
          for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return g.apply([], s)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), N.isFunction(e) ? (r = c.call(arguments, 2), (i = function() {
          return e.apply(t || this, r.concat(c.call(arguments)))
        }).guid = e.guid = e.guid || N.guid++, i) : void 0
      },
      now: Date.now,
      support: v
    }), "function" == typeof Symbol && (N.fn[Symbol.iterator] = t[Symbol.iterator]), N.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
      var e, h, b, o, i, g, f, v, w, u, l, T, C, s, E, m, a, c, y, N = "sizzle" + 1 * new Date,
        x = n.document,
        k = 0,
        r = 0,
        p = ie(),
        d = ie(),
        S = ie(),
        j = function(e, t) {
          return e === t && (l = !0), 0
        },
        A = {}.hasOwnProperty,
        t = [],
        D = t.pop,
        _ = t.push,
        L = t.push,
        q = t.slice,
        O = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        B = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
        F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
        P = new RegExp(I + "+", "g"),
        M = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        W = new RegExp("^" + I + "*," + I + "*"),
        $ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        X = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
        z = new RegExp(F),
        U = new RegExp("^" + R + "$"),
        V = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + B),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
        G = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = /'|\\/g,
        ee = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        te = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        ne = function() {
          T()
        };
      try {
        L.apply(t = q.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
      } catch (e) {
        L = {
          apply: t.length ? function(e, t) {
            _.apply(e, q.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
        }
      }

      function re(e, t, n, r) {
        var i, o, s, a, u, l, c, f, p = t && t.ownerDocument,
          d = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
        if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, E)) {
          if (11 !== d && (l = Q.exec(e)))
            if (i = l[1]) {
              if (9 === d) {
                if (!(s = t.getElementById(i))) return n;
                if (s.id === i) return n.push(s), n
              } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
            } else {
              if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
              if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
            } if (h.qsa && !S[e + " "] && (!m || !m.test(e))) {
            if (1 !== d) p = t, f = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(Z, "\\$&") : t.setAttribute("id", a = N), o = (c = g(e)).length, u = U.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = u + " " + he(c[o]);
              f = c.join(","), p = J.test(e) && pe(t.parentNode) || t
            }
            if (f) try {
              return L.apply(n, p.querySelectorAll(f)), n
            } catch (e) {} finally {
              a === N && t.removeAttribute("id")
            }
          }
        }
        return v(e.replace(M, "$1"), t, n, r)
      }

      function ie() {
        var r = [];
        return function e(t, n) {
          return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
      }

      function oe(e) {
        return e[N] = !0, e
      }

      function se(e) {
        var t = C.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function ae(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
      }

      function ue(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function le(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }

      function ce(n) {
        return function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n
        }
      }

      function fe(s) {
        return oe(function(o) {
          return o = +o, oe(function(e, t) {
            for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
          })
        })
      }

      function pe(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (e in h = re.support = {}, i = re.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, T = re.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : x;
          return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, E = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), h.attributes = se(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), h.getElementsByTagName = se(function(e) {
            return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
          }), h.getElementsByClassName = Y.test(C.getElementsByClassName), h.getById = se(function(e) {
            return s.appendChild(e).id = N, !C.getElementsByName || !C.getElementsByName(N).length
          }), h.getById ? (b.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && E) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }, b.filter.ID = function(e) {
            var t = e.replace(ee, te);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }) : (delete b.find.ID, b.filter.ID = function(e) {
            var n = e.replace(ee, te);
            return function(e) {
              var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return t && t.value === n
            }
          }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
            return void 0 !== t.getElementsByClassName && E ? t.getElementsByClassName(e) : void 0
          }, a = [], m = [], (h.qsa = Y.test(C.querySelectorAll)) && (se(function(e) {
            s.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + N + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || m.push(".#.+[+~]")
          }), se(function(e) {
            var t = C.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
          })), (h.matchesSelector = Y.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function(e) {
            h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), a.push("!=", F)
          }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = Y.test(s.compareDocumentPosition), y = t || Y.test(s.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, j = t ? function(e, t) {
            if (e === t) return l = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return l = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
            if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
            if (i === o) return ue(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (; s[r] === a[r];) r++;
            return r ? ue(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
          }), C
        }, re.matches = function(e, t) {
          return re(e, null, null, t)
        }, re.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== C && T(e), t = t.replace(X, "='$1']"), h.matchesSelector && E && !S[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
            var n = c.call(e, t);
            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {}
          return 0 < re(t, C, null, [e]).length
        }, re.contains = function(e, t) {
          return (e.ownerDocument || e) !== C && T(e), y(e, t)
        }, re.attr = function(e, t) {
          (e.ownerDocument || e) !== C && T(e);
          var n = b.attrHandle[t.toLowerCase()],
            r = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
          return void 0 !== r ? r : h.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, re.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, re.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            i = 0;
          if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(j), l) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) e.splice(n[r], 1)
          }
          return u = null, e
        }, o = re.getText = function(e) {
          var t, n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
            } else if (3 === i || 4 === i) return e.nodeValue
          } else
            for (; t = e[r++];) n += o(t);
          return n
        }, (b = re.selectors = {
          cacheLength: 50,
          createPseudo: oe,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(ee, te).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = p[e + " "];
              return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && p(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(n, r, i) {
              return function(e) {
                var t = re.attr(e, n);
                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(P, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function(h, e, t, g, v) {
              var m = "nth" !== h.slice(0, 3),
                y = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === v ? function(e) {
                return !!e.parentNode
              } : function(e, t, n) {
                var r, i, o, s, a, u, l = m !== y ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;
                if (c) {
                  if (m) {
                    for (; l;) {
                      for (s = e; s = s[l];)
                        if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                      u = l = "only" === h && !u && "nextSibling"
                    }
                    return !0
                  }
                  if (u = [y ? c.firstChild : c.lastChild], y && p) {
                    for (d = (a = (r = (i = (o = (s = c)[N] || (s[N] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                      if (1 === s.nodeType && ++d && s === e) {
                        i[h] = [k, a, d];
                        break
                      }
                  } else if (p && (d = a = (r = (i = (o = (s = e)[N] || (s[N] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                    for (;
                      (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[N] || (s[N] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [k, d]), s !== e)););
                  return (d -= v) === g || d % g == 0 && 0 <= d / g
                }
              }
            },
            PSEUDO: function(e, o) {
              var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
              return s[N] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                for (var n, r = s(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
              }) : function(e) {
                return s(e, 0, t)
              }) : s
            }
          },
          pseudos: {
            not: oe(function(e) {
              var r = [],
                i = [],
                a = f(e.replace(M, "$1"));
              return a[N] ? oe(function(e, t, n, r) {
                for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
              }) : function(e, t, n) {
                return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
              }
            }),
            has: oe(function(t) {
              return function(e) {
                return 0 < re(t, e).length
              }
            }),
            contains: oe(function(t) {
              return t = t.replace(ee, te),
                function(e) {
                  return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                }
            }),
            lang: oe(function(n) {
              return U.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(),
                function(e) {
                  var t;
                  do {
                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function(e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id
            },
            root: function(e) {
              return e === s
            },
            focus: function(e) {
              return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
              return !1 === e.disabled
            },
            disabled: function(e) {
              return !0 === e.disabled
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !b.pseudos.empty(e)
            },
            header: function(e) {
              return K.test(e.nodeName)
            },
            input: function(e) {
              return G.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: fe(function() {
              return [0]
            }),
            last: fe(function(e, t) {
              return [t - 1]
            }),
            eq: fe(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: fe(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: fe(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: fe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
              return e
            }),
            gt: fe(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = b.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) b.pseudos[e] = le(e);
      for (e in {
          submit: !0,
          reset: !0
        }) b.pseudos[e] = ce(e);

      function de() {}

      function he(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
      }

      function ge(a, e, t) {
        var u = e.dir,
          l = t && "parentNode" === u,
          c = r++;
        return e.first ? function(e, t, n) {
          for (; e = e[u];)
            if (1 === e.nodeType || l) return a(e, t, n)
        } : function(e, t, n) {
          var r, i, o, s = [k, c];
          if (n) {
            for (; e = e[u];)
              if ((1 === e.nodeType || l) && a(e, t, n)) return !0
          } else
            for (; e = e[u];)
              if (1 === e.nodeType || l) {
                if ((r = (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === k && r[1] === c) return s[2] = r[2];
                if ((i[u] = s)[2] = a(e, t, n)) return !0
              }
        }
      }

      function ve(i) {
        return 1 < i.length ? function(e, t, n) {
          for (var r = i.length; r--;)
            if (!i[r](e, t, n)) return !1;
          return !0
        } : i[0]
      }

      function me(e, t, n, r, i) {
        for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
        return s
      }

      function ye(d, h, g, v, m, e) {
        return v && !v[N] && (v = ye(v)), m && !m[N] && (m = ye(m, e)), oe(function(e, t, n, r) {
          var i, o, s, a = [],
            u = [],
            l = t.length,
            c = e || function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
              return n
            }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : me(c, a, d, n, r),
            p = g ? m || (e ? d : l || v) ? [] : t : f;
          if (g && g(f, p, n, r), v)
            for (i = me(p, u), v(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
          if (e) {
            if (m || d) {
              if (m) {
                for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                m(null, p = [], i, r)
              }
              for (o = p.length; o--;)(s = p[o]) && -1 < (i = m ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
            }
          } else p = me(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : L.apply(t, p)
        })
      }

      function xe(e) {
        for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ge(function(e) {
            return e === i
          }, s, !0), l = ge(function(e) {
            return -1 < O(i, e)
          }, s, !0), c = [function(e, t, n) {
            var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
            return i = null, r
          }]; a < r; a++)
          if (t = b.relative[e[a].type]) c = [ge(ve(c), t)];
          else {
            if ((t = b.filter[e[a].type].apply(null, e[a].matches))[N]) {
              for (n = ++a; n < r && !b.relative[e[n].type]; n++);
              return ye(1 < a && ve(c), 1 < a && he(e.slice(0, a - 1).concat({
                value: " " === e[a - 2].type ? "*" : ""
              })).replace(M, "$1"), t, a < n && xe(e.slice(a, n)), n < r && xe(e = e.slice(n)), n < r && he(e))
            }
            c.push(t)
          } return ve(c)
      }
      return de.prototype = b.filters = b.pseudos, b.setFilters = new de, g = re.tokenize = function(e, t) {
        var n, r, i, o, s, a, u, l = d[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (s = e, a = [], u = b.preFilter; s;) {
          for (o in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = $.exec(s)) && (n = r.shift(), i.push({
              value: n,
              type: r[0].replace(M, " ")
            }), s = s.slice(n.length)), b.filter) !(r = V[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), s = s.slice(n.length));
          if (!n) break
        }
        return t ? s.length : s ? re.error(e) : d(e, a).slice(0)
      }, f = re.compile = function(e, t) {
        var n, v, m, y, x, r, i = [],
          o = [],
          s = S[e + " "];
        if (!s) {
          for (t || (t = g(e)), n = t.length; n--;)(s = xe(t[n]))[N] ? i.push(s) : o.push(s);
          (s = S(e, (v = o, y = 0 < (m = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
            var o, s, a, u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;
            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
              if (x && o) {
                for (s = 0, t || o.ownerDocument === C || (T(o), n = !E); a = v[s++];)
                  if (a(o, t || C, n)) {
                    r.push(o);
                    break
                  } i && (k = h)
              }
              y && ((o = !a && o) && u--, e && c.push(o))
            }
            if (u += l, y && l !== u) {
              for (s = 0; a = m[s++];) a(c, f, t, n);
              if (e) {
                if (0 < u)
                  for (; l--;) c[l] || f[l] || (f[l] = D.call(r));
                f = me(f)
              }
              L.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && re.uniqueSort(r)
            }
            return i && (k = h, w = p), c
          }, y ? oe(r) : r))).selector = e
        }
        return s
      }, v = re.select = function(e, t, n, r) {
        var i, o, s, a, u, l = "function" == typeof e && e,
          c = !r && g(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && E && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(s.matches[0].replace(ee, te), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
            if ((u = b.find[a]) && (r = u(s.matches[0].replace(ee, te), J.test(o[0].type) && pe(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && he(o))) return L.apply(n, r), n;
              break
            }
        }
        return (l || f(e, c))(r, t, !E, n, !t || J.test(e) && pe(t.parentNode) || t), n
      }, h.sortStable = N.split("").sort(j).join("") === N, h.detectDuplicates = !!l, T(), h.sortDetached = se(function(e) {
        return 1 & e.compareDocumentPosition(C.createElement("div"))
      }), se(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || ae("type|href|height|width", function(e, t, n) {
        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), h.attributes && se(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || ae("value", function(e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), se(function(e) {
        return null == e.getAttribute("disabled")
      }) || ae(H, function(e, t, n) {
        var r;
        return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), re
    }(C);
    N.find = p, N.expr = p.selectors, N.expr[":"] = N.expr.pseudos, N.uniqueSort = N.unique = p.uniqueSort, N.text = p.getText, N.isXMLDoc = p.isXML, N.contains = p.contains;
    var d = function(e, t, n) {
        for (var r = [], i = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && N(e).is(n)) break;
            r.push(e)
          } return r
      },
      m = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      y = N.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      b = /^.[^:#\[\.,]*$/;

    function w(e, n, r) {
      if (N.isFunction(n)) return N.grep(e, function(e, t) {
        return !!n.call(e, t, e) !== r
      });
      if (n.nodeType) return N.grep(e, function(e) {
        return e === n !== r
      });
      if ("string" == typeof n) {
        if (b.test(n)) return N.filter(n, e, r);
        n = N.filter(n, e)
      }
      return N.grep(e, function(e) {
        return -1 < i.call(n, e) !== r
      })
    }
    N.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? N.find.matchesSelector(r, e) ? [r] : [] : N.find.matches(e, N.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, N.fn.extend({
      find: function(e) {
        var t, n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e) return this.pushStack(N(e).filter(function() {
          for (t = 0; t < n; t++)
            if (N.contains(i[t], this)) return !0
        }));
        for (t = 0; t < n; t++) N.find(e, i[t], r);
        return (r = this.pushStack(1 < n ? N.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
      },
      filter: function(e) {
        return this.pushStack(w(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(w(this, e || [], !0))
      },
      is: function(e) {
        return !!w(this, "string" == typeof e && y.test(e) ? N(e) : e || [], !1).length
      }
    });
    var T, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (N.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || T, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof N ? t[0] : t, N.merge(this, N.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), x.test(r[1]) && N.isPlainObject(t))
            for (r in t) N.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (i = E.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = E, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : N.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(N) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), N.makeArray(e, this))
    }).prototype = N.fn, T = N(E);
    var S = /^(?:parents|prev(?:Until|All))/,
      j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function A(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    N.fn.extend({
      has: function(e) {
        var t = N(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (N.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, r = 0, i = this.length, o = [], s = y.test(e) || "string" != typeof e ? N(e, t || this.context) : 0; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && N.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(1 < o.length ? N.uniqueSort(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? i.call(N(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(N.uniqueSort(N.merge(this.get(), N(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), N.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return d(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return d(e, "parentNode", n)
      },
      next: function(e) {
        return A(e, "nextSibling")
      },
      prev: function(e) {
        return A(e, "previousSibling")
      },
      nextAll: function(e) {
        return d(e, "nextSibling")
      },
      prevAll: function(e) {
        return d(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return d(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return d(e, "previousSibling", n)
      },
      siblings: function(e) {
        return m((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return m(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || N.merge([], e.childNodes)
      }
    }, function(r, i) {
      N.fn[r] = function(e, t) {
        var n = N.map(this, i, e);
        return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = N.filter(t, n)), 1 < this.length && (j[r] || N.uniqueSort(n), S.test(r) && n.reverse()), this.pushStack(n)
      }
    });
    var D, _ = /\S+/g;

    function L() {
      E.removeEventListener("DOMContentLoaded", L), C.removeEventListener("load", L), N.ready()
    }
    N.Callbacks = function(r) {
      var e, n;
      r = "string" == typeof r ? (e = r, n = {}, N.each(e.match(_) || [], function(e, t) {
        n[t] = !0
      }), n) : N.extend({}, r);
      var i, t, o, s, a = [],
        u = [],
        l = -1,
        c = function() {
          for (s = r.once, o = i = !0; u.length; l = -1)
            for (t = u.shift(); ++l < a.length;) !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length, t = !1);
          r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
        },
        f = {
          add: function() {
            return a && (t && !i && (l = a.length - 1, u.push(t)), function n(e) {
              N.each(e, function(e, t) {
                N.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== N.type(t) && n(t)
              })
            }(arguments), t && !i && c()), this
          },
          remove: function() {
            return N.each(arguments, function(e, t) {
              for (var n; - 1 < (n = N.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
            }), this
          },
          has: function(e) {
            return e ? -1 < N.inArray(e, a) : 0 < a.length
          },
          empty: function() {
            return a && (a = []), this
          },
          disable: function() {
            return s = u = [], a = t = "", this
          },
          disabled: function() {
            return !a
          },
          lock: function() {
            return s = u = [], t || (a = t = ""), this
          },
          locked: function() {
            return !!s
          },
          fireWith: function(e, t) {
            return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
          },
          fire: function() {
            return f.fireWith(this, arguments), this
          },
          fired: function() {
            return !!o
          }
        };
      return f
    }, N.extend({
      Deferred: function(e) {
        var o = [
            ["resolve", "done", N.Callbacks("once memory"), "resolved"],
            ["reject", "fail", N.Callbacks("once memory"), "rejected"],
            ["notify", "progress", N.Callbacks("memory")]
          ],
          i = "pending",
          s = {
            state: function() {
              return i
            },
            always: function() {
              return a.done(arguments).fail(arguments), this
            },
            then: function() {
              var i = arguments;
              return N.Deferred(function(r) {
                N.each(o, function(e, t) {
                  var n = N.isFunction(i[e]) && i[e];
                  a[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && N.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                  })
                }), i = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? N.extend(e, s) : s
            }
          },
          a = {};
        return s.pipe = s.then, N.each(o, function(e, t) {
          var n = t[2],
            r = t[3];
          s[t[1]] = n.add, r && n.add(function() {
            i = r
          }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
            return a[t[0] + "With"](this === a ? s : this, arguments), this
          }, a[t[0] + "With"] = n.fireWith
        }), s.promise(a), e && e.call(a, a), a
      },
      when: function(e) {
        var i, t, n, r = 0,
          o = c.call(arguments),
          s = o.length,
          a = 1 !== s || e && N.isFunction(e.promise) ? s : 0,
          u = 1 === a ? e : N.Deferred(),
          l = function(t, n, r) {
            return function(e) {
              n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
            }
          };
        if (1 < s)
          for (i = new Array(s), t = new Array(s), n = new Array(s); r < s; r++) o[r] && N.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --a;
        return a || u.resolveWith(n, o), u.promise()
      }
    }), N.fn.ready = function(e) {
      return N.ready.promise().done(e), this
    }, N.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? N.readyWait++ : N.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --N.readyWait : N.isReady) || ((N.isReady = !0) !== e && 0 < --N.readyWait || (D.resolveWith(E, [N]), N.fn.triggerHandler && (N(E).triggerHandler("ready"), N(E).off("ready"))))
      }
    }), N.ready.promise = function(e) {
      return D || (D = N.Deferred(), "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(N.ready) : (E.addEventListener("DOMContentLoaded", L), C.addEventListener("load", L))), D.promise(e)
    }, N.ready.promise();
    var q = function(e, t, n, r, i, o, s) {
        var a = 0,
          u = e.length,
          l = null == n;
        if ("object" === N.type(n))
          for (a in i = !0, n) q(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, N.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(N(e), n)
          })), t))
          for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      O = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

    function H() {
      this.expando = N.expando + H.uid++
    }
    H.uid = 1, H.prototype = {
      register: function(e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      },
      cache: function(e) {
        if (!O(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[t] = n;
        else
          for (r in t) i[r] = t[r];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      },
      access: function(e, t, n) {
        var r;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, N.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r, i, o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 === t) this.register(e);
          else {
            N.isArray(t) ? r = t.concat(t.map(N.camelCase)) : (i = N.camelCase(t), t in o ? r = [t, i] : r = (r = i) in o ? [r] : r.match(_) || []), n = r.length;
            for (; n--;) delete o[r[n]]
          }(void 0 === t || N.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !N.isEmptyObject(t)
      }
    };
    var I = new H,
      R = new H,
      B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      F = /[A-Z]/g;

    function P(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(F, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? N.parseJSON(n) : n)
          } catch (e) {}
          R.set(e, t, n)
        } else n = void 0;
      return n
    }
    N.extend({
      hasData: function(e) {
        return R.hasData(e) || I.hasData(e)
      },
      data: function(e, t, n) {
        return R.access(e, t, n)
      },
      removeData: function(e, t) {
        R.remove(e, t)
      },
      _data: function(e, t, n) {
        return I.access(e, t, n)
      },
      _removeData: function(e, t) {
        I.remove(e, t)
      }
    }), N.fn.extend({
      data: function(r, e) {
        var t, n, i, o = this[0],
          s = o && o.attributes;
        if (void 0 === r) {
          if (this.length && (i = R.get(o), 1 === o.nodeType && !I.get(o, "hasDataAttrs"))) {
            for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = N.camelCase(n.slice(5)), P(o, n, i[n])));
            I.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof r ? this.each(function() {
          R.set(this, r)
        }) : q(this, function(t) {
          var e, n;
          if (o && void 0 === t) {
            if (void 0 !== (e = R.get(o, r) || R.get(o, r.replace(F, "-$&").toLowerCase()))) return e;
            if (n = N.camelCase(r), void 0 !== (e = R.get(o, n))) return e;
            if (void 0 !== (e = P(o, n, void 0))) return e
          } else n = N.camelCase(r), this.each(function() {
            var e = R.get(this, n);
            R.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && R.set(this, r, t)
          })
        }, null, e, 1 < arguments.length, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          R.remove(this, e)
        })
      }
    }), N.extend({
      queue: function(e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || N.isArray(n) ? r = I.access(e, t, N.makeArray(n)) : r.push(n)), r || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = N.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = N._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
          N.dequeue(e, t)
        }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return I.get(e, n) || I.access(e, n, {
          empty: N.Callbacks("once memory").add(function() {
            I.remove(e, [t + "queue", n])
          })
        })
      }
    }), N.fn.extend({
      queue: function(t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? N.queue(this[0], t) : void 0 === n ? this : this.each(function() {
          var e = N.queue(this, t, n);
          N._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && N.dequeue(this, t)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          N.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, r = 1,
          i = N.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = I.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t)
      }
    });
    var M = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      W = new RegExp("^(?:([+-])=|)(" + M + ")([a-z%]*)$", "i"),
      $ = ["Top", "Right", "Bottom", "Left"],
      X = function(e, t) {
        return e = t || e, "none" === N.css(e, "display") || !N.contains(e.ownerDocument, e)
      };

    function z(e, t, n, r) {
      var i, o = 1,
        s = 20,
        a = r ? function() {
          return r.cur()
        } : function() {
          return N.css(e, t, "")
        },
        u = a(),
        l = n && n[3] || (N.cssNumber[t] ? "" : "px"),
        c = (N.cssNumber[t] || "px" !== l && +u) && W.exec(N.css(e, t));
      if (c && c[3] !== l)
        for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", N.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var U = /^(?:checkbox|radio)$/i,
      V = /<([\w:-]+)/,
      G = /^$|\/(?:java|ecma)script/i,
      K = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function Y(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && N.nodeName(e, t) ? N.merge([e], n) : n
    }

    function Q(e, t) {
      for (var n = 0, r = e.length; n < r; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"))
    }
    K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
    var J, Z, ee = /<|&#?\w+;/;

    function te(e, t, n, r, i) {
      for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
        if ((o = e[d]) || 0 === o)
          if ("object" === N.type(o)) N.merge(p, o.nodeType ? [o] : o);
          else if (ee.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (V.exec(o) || ["", ""])[1].toLowerCase(), u = K[a] || K._default, s.innerHTML = u[1] + N.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
        N.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
      } else p.push(t.createTextNode(o));
      for (f.textContent = "", d = 0; o = p[d++];)
        if (r && -1 < N.inArray(o, r)) i && i.push(o);
        else if (l = N.contains(o.ownerDocument, o), s = Y(f.appendChild(o), "script"), l && Q(s), n)
        for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
      return f
    }
    J = E.createDocumentFragment().appendChild(E.createElement("div")), (Z = E.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), J.appendChild(Z), v.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
    var ne = /^key/,
      re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ie = /^([^.]*)(?:\.(.+)|)/;

    function oe() {
      return !0
    }

    function se() {
      return !1
    }

    function ae() {
      try {
        return E.activeElement
      } catch (e) {}
    }

    function ue(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) ue(e, a, n, r, t[a], o);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = se;
      else if (!i) return e;
      return 1 === o && (s = i, (i = function(e) {
        return N().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = N.guid++)), e.each(function() {
        N.event.add(this, t, i, r, n)
      })
    }
    N.event = {
      global: {},
      add: function(t, e, n, r, i) {
        var o, s, a, u, l, c, f, p, d, h, g, v = I.get(t);
        if (v)
          for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = N.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
              return void 0 !== N && N.event.triggered !== e.type ? N.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(_) || [""]).length; l--;) d = g = (a = ie.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = N.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = N.event.special[d] || {}, c = N.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && N.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), N.event.global[d] = !0)
      },
      remove: function(e, t, n, r, i) {
        var o, s, a, u, l, c, f, p, d, h, g, v = I.hasData(e) && I.get(e);
        if (v && (u = v.events)) {
          for (l = (t = (t || "").match(_) || [""]).length; l--;)
            if (d = g = (a = ie.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
              for (f = N.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || N.removeEvent(e, d, v.handle), delete u[d])
            } else
              for (d in u) N.event.remove(e, d + t[l], n, r, !0);
          N.isEmptyObject(u) && I.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        e = N.event.fix(e);
        var t, n, r, i, o, s = [],
          a = c.call(arguments),
          u = (I.get(this, "events") || {})[e.type] || [],
          l = N.event.special[e.type] || {};
        if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
          for (s = N.event.handlers.call(this, e, u), t = 0;
            (i = s[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((N.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, r, i, o, s = [],
          a = t.delegateCount,
          u = e.target;
        if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
              for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < N(i, this).index(u) : N.find(i, this, null, [u]).length), r[i] && r.push(o);
              r.length && s.push({
                elem: u,
                handlers: r
              })
            } return a < t.length && s.push({
          elem: this,
          handlers: t.slice(a)
        }), s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, r, i, o = t.button;
          return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || E).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[N.expando]) return e;
        var t, n, r, i = e.type,
          o = e,
          s = this.fixHooks[i];
        for (s || (this.fixHooks[i] = s = re.test(i) ? this.mouseHooks : ne.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new N.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
        return e.target || (e.target = E), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== ae() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === ae() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && N.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(e) {
            return N.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, N.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, N.Event = function(e, t) {
      return this instanceof N.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : se) : this.type = e, t && N.extend(this, t), this.timeStamp = e && e.timeStamp || N.now(), void(this[N.expando] = !0)) : new N.Event(e, t)
    }, N.Event.prototype = {
      constructor: N.Event,
      isDefaultPrevented: se,
      isPropagationStopped: se,
      isImmediatePropagationStopped: se,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = oe, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = oe, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, N.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, i) {
      N.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function(e) {
          var t, n = e.relatedTarget,
            r = e.handleObj;
          return n && (n === this || N.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
        }
      }
    }), N.fn.extend({
      on: function(e, t, n, r) {
        return ue(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return ue(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, N(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), this.each(function() {
          N.event.remove(this, e, n, t)
        })
      }
    });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ce = /<script|<style|<link/i,
      fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pe = /^true\/(.*)/,
      de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function he(e, t) {
      return N.nodeName(e, "table") && N.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ge(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
      var t = pe.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
      var n, r, i, o, s, a, u, l;
      if (1 === t.nodeType) {
        if (I.hasData(e) && (o = I.access(e), s = I.set(t, o), l = o.events))
          for (i in delete s.handle, s.events = {}, l)
            for (n = 0, r = l[i].length; n < r; n++) N.event.add(t, i, l[i][n]);
        R.hasData(e) && (a = R.access(e), u = N.extend({}, a), R.set(t, u))
      }
    }

    function ye(n, r, i, o) {
      r = g.apply([], r);
      var e, t, s, a, u, l, c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = N.isFunction(d);
      if (h || 1 < f && "string" == typeof d && !v.checkClone && fe.test(d)) return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), ye(t, r, i, o)
      });
      if (f && (t = (e = te(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (a = (s = N.map(Y(e, "script"), ge)).length; c < f; c++) u = e, c !== p && (u = N.clone(u, !0, !0), a && N.merge(s, Y(u, "script"))), i.call(n[c], u, c);
        if (a)
          for (l = s[s.length - 1].ownerDocument, N.map(s, ve), c = 0; c < a; c++) u = s[c], G.test(u.type || "") && !I.access(u, "globalEval") && N.contains(l, u) && (u.src ? N._evalUrl && N._evalUrl(u.src) : N.globalEval(u.textContent.replace(de, "")))
      }
      return n
    }

    function xe(e, t, n) {
      for (var r, i = t ? N.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || N.cleanData(Y(r)), r.parentNode && (n && N.contains(r.ownerDocument, r) && Q(Y(r, "script")), r.parentNode.removeChild(r));
      return e
    }
    N.extend({
      htmlPrefilter: function(e) {
        return e.replace(le, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, i, o, s, a, u, l, c = e.cloneNode(!0),
          f = N.contains(e.ownerDocument, e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || N.isXMLDoc(e)))
          for (s = Y(c), r = 0, i = (o = Y(e)).length; r < i; r++) a = o[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && U.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (o = o || Y(e), s = s || Y(c), r = 0, i = o.length; r < i; r++) me(o[r], s[r]);
          else me(e, c);
        return 0 < (s = Y(c, "script")).length && Q(s, !f && Y(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, n, r, i = N.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (O(n)) {
            if (t = n[I.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? N.event.remove(n, r) : N.removeEvent(n, r, t.handle);
              n[I.expando] = void 0
            }
            n[R.expando] && (n[R.expando] = void 0)
          }
      }
    }), N.fn.extend({
      domManip: ye,
      detach: function(e) {
        return xe(this, e, !0)
      },
      remove: function(e) {
        return xe(this, e)
      },
      text: function(e) {
        return q(this, function(e) {
          return void 0 === e ? N.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return ye(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || he(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return ye(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = he(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return ye(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return ye(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (N.cleanData(Y(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return N.clone(this, e, t)
        })
      },
      html: function(e) {
        return q(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !ce.test(e) && !K[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = N.htmlPrefilter(e);
            try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (N.cleanData(Y(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var n = [];
        return ye(this, arguments, function(e) {
          var t = this.parentNode;
          N.inArray(this, n) < 0 && (N.cleanData(Y(this)), t && t.replaceChild(e, this))
        }, n)
      }
    }), N.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, s) {
      N.fn[e] = function(e) {
        for (var t, n = [], r = N(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), N(r[o])[s](t), a.apply(n, t.get());
        return this.pushStack(n)
      }
    });
    var be, we = {
      HTML: "block",
      BODY: "block"
    };

    function Te(e, t) {
      var n = N(t.createElement(e)).appendTo(t.body),
        r = N.css(n[0], "display");
      return n.detach(), r
    }

    function Ce(e) {
      var t = E,
        n = we[e];
      return n || ("none" !== (n = Te(e, t)) && n || ((t = (be = (be || N("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Te(e, t), be.detach()), we[e] = n), n
    }
    var Ee = /^margin/,
      Ne = new RegExp("^(" + M + ")(?!px)[a-z%]+$", "i"),
      ke = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
      },
      Se = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
      },
      je = E.documentElement;

    function Ae(e, t, n) {
      var r, i, o, s, a = e.style;
      return "" !== (s = (n = n || ke(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || N.contains(e.ownerDocument, e) || (s = N.style(e, t)), n && !v.pixelMarginRight() && Ne.test(s) && Ee.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function De(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }! function() {
      var t, n, r, i, o = E.createElement("div"),
        s = E.createElement("div");
      if (s.style) {
        function e() {
          s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", je.appendChild(o);
          var e = C.getComputedStyle(s);
          t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, je.removeChild(o)
        }
        s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), N.extend(v, {
          pixelPosition: function() {
            return e(), t
          },
          boxSizingReliable: function() {
            return null == n && e(), n
          },
          pixelMarginRight: function() {
            return null == n && e(), r
          },
          reliableMarginLeft: function() {
            return null == n && e(), i
          },
          reliableMarginRight: function() {
            var e, t = s.appendChild(E.createElement("div"));
            return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", je.appendChild(o), e = !parseFloat(C.getComputedStyle(t).marginRight), je.removeChild(o), s.removeChild(t), e
          }
        })
      }
    }();
    var _e = /^(none|table(?!-c[ea]).+)/,
      Le = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      qe = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Oe = ["Webkit", "O", "Moz", "ms"],
      He = E.createElement("div").style;

    function Ie(e) {
      if (e in He) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Oe.length; n--;)
        if ((e = Oe[n] + t) in He) return e
    }

    function Re(e, t, n) {
      var r = W.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Be(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += N.css(e, n + $[o], !0, i)), r ? ("content" === n && (s -= N.css(e, "padding" + $[o], !0, i)), "margin" !== n && (s -= N.css(e, "border" + $[o] + "Width", !0, i))) : (s += N.css(e, "padding" + $[o], !0, i), "padding" !== n && (s += N.css(e, "border" + $[o] + "Width", !0, i)));
      return s
    }

    function Fe(e, t, n) {
      var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = ke(e),
        s = "border-box" === N.css(e, "boxSizing", !1, o);
      if (i <= 0 || null == i) {
        if (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ne.test(i)) return i;
        r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + Be(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function Pe(e, t) {
      for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = I.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && X(r) && (o[s] = I.access(r, "olddisplay", Ce(r.nodeName)))) : (i = X(r), "none" === n && i || I.set(r, "olddisplay", i ? n : N.css(r, "display"))));
      for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
      return e
    }

    function Me(e, t, n, r, i) {
      return new Me.prototype.init(e, t, n, r, i)
    }
    N.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = Ae(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, s, a = N.camelCase(t),
            u = e.style;
          return t = N.cssProps[a] || (N.cssProps[a] = Ie(a) || a), s = N.cssHooks[t] || N.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = W.exec(n)) && i[1] && (n = z(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (N.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
        }
      },
      css: function(e, t, n, r) {
        var i, o, s, a = N.camelCase(t);
        return t = N.cssProps[a] || (N.cssProps[a] = Ie(a) || a), (s = N.cssHooks[t] || N.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ae(e, t, r)), "normal" === i && t in qe && (i = qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), N.each(["height", "width"], function(e, s) {
      N.cssHooks[s] = {
        get: function(e, t, n) {
          return t ? _e.test(N.css(e, "display")) && 0 === e.offsetWidth ? Se(e, Le, function() {
            return Fe(e, s, n)
          }) : Fe(e, s, n) : void 0
        },
        set: function(e, t, n) {
          var r, i = n && ke(e),
            o = n && Be(e, s, n, "border-box" === N.css(e, "boxSizing", !1, i), i);
          return o && (r = W.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = N.css(e, s)), Re(0, t, o)
        }
      }
    }), N.cssHooks.marginLeft = De(v.reliableMarginLeft, function(e, t) {
      return t ? (parseFloat(Ae(e, "marginLeft")) || e.getBoundingClientRect().left - Se(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px" : void 0
    }), N.cssHooks.marginRight = De(v.reliableMarginRight, function(e, t) {
      return t ? Se(e, {
        display: "inline-block"
      }, Ae, [e, "marginRight"]) : void 0
    }), N.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(i, o) {
      N.cssHooks[i + o] = {
        expand: function(e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + $[t] + o] = r[t] || r[t - 2] || r[0];
          return n
        }
      }, Ee.test(i) || (N.cssHooks[i + o].set = Re)
    }), N.fn.extend({
      css: function(e, t) {
        return q(this, function(e, t, n) {
          var r, i, o = {},
            s = 0;
          if (N.isArray(t)) {
            for (r = ke(e), i = t.length; s < i; s++) o[t[s]] = N.css(e, t[s], !1, r);
            return o
          }
          return void 0 !== n ? N.style(e, t, n) : N.css(e, t)
        }, e, t, 1 < arguments.length)
      },
      show: function() {
        return Pe(this, !0)
      },
      hide: function() {
        return Pe(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          X(this) ? N(this).show() : N(this).hide()
        })
      }
    }), ((N.Tween = Me).prototype = {
      constructor: Me,
      init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || N.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (N.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = Me.propHooks[this.prop];
        return e && e.get ? e.get(this) : Me.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = Me.propHooks[this.prop];
        return this.options.duration ? this.pos = t = N.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Me.propHooks._default.set(this), this
      }
    }).init.prototype = Me.prototype, (Me.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = N.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          N.fx.step[e.prop] ? N.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[N.cssProps[e.prop]] && !N.cssHooks[e.prop] ? e.elem[e.prop] = e.now : N.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = Me.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, N.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, N.fx = Me.prototype.init, N.fx.step = {};
    var We, $e, Xe, ze, Ue, Ve = /^(?:toggle|show|hide)$/,
      Ge = /queueHooks$/;

    function Ke() {
      return C.setTimeout(function() {
        We = void 0
      }), We = N.now()
    }

    function Ye(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = $[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function Qe(e, t, n) {
      for (var r, i = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), o = 0, s = i.length; o < s; o++)
        if (r = i[o].call(n, t, e)) return r
    }

    function Je(o, e, t) {
      var n, s, r = 0,
        i = Je.prefilters.length,
        a = N.Deferred().always(function() {
          delete u.elem
        }),
        u = function() {
          if (s) return !1;
          for (var e = We || Ke(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
          return a.notifyWith(o, [l, n, t]), n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
        },
        l = a.promise({
          elem: o,
          props: N.extend({}, e),
          opts: N.extend(!0, {
            specialEasing: {},
            easing: N.easing._default
          }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: We || Ke(),
          duration: t.duration,
          tweens: [],
          createTween: function(e, t) {
            var n = N.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(n), n
          },
          stop: function(e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (s) return this;
            for (s = !0; t < n; t++) l.tweens[t].run(1);
            return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]), this
          }
        }),
        c = l.props;
      for (function(e, t) {
          var n, r, i, o, s;
          for (n in e)
            if (i = t[r = N.camelCase(n)], o = e[n], N.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = N.cssHooks[r]) && "expand" in s)
              for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
        if (n = Je.prefilters[r].call(l, o, c, l.opts)) return N.isFunction(n.stop) && (N._queueHooks(l.elem, l.opts.queue).stop = N.proxy(n.stop, n)), n;
      return N.map(c, Qe, l), N.isFunction(l.opts.start) && l.opts.start.call(o, l), N.fx.timer(N.extend(u, {
        elem: o,
        anim: l,
        queue: l.opts.queue
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    N.Animation = N.extend(Je, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return z(n.elem, e, W.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        N.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_);
        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Je.tweeners[n] = Je.tweeners[n] || [], Je.tweeners[n].unshift(t)
      },
      prefilters: [function(t, e, n) {
        var r, i, o, s, a, u, l, c = this,
          f = {},
          p = t.style,
          d = t.nodeType && X(t),
          h = I.get(t, "fxshow");
        for (r in n.queue || (null == (a = N._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
          }), a.unqueued++, c.always(function() {
            c.always(function() {
              a.unqueued--, N.queue(t, "fx").length || a.empty.fire()
            })
          })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = N.css(t, "display")) ? I.get(t, "olddisplay") || Ce(t.nodeName) : l) && "none" === N.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
          })), e)
          if (i = e[r], Ve.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
              if ("show" !== i || !h || void 0 === h[r]) continue;
              d = !0
            }
            f[r] = h && h[r] || N.style(t, r)
          } else l = void 0;
        if (N.isEmptyObject(f)) "inline" === ("none" === l ? Ce(t.nodeName) : l) && (p.display = l);
        else
          for (r in h ? "hidden" in h && (d = h.hidden) : h = I.access(t, "fxshow", {}), o && (h.hidden = !d), d ? N(t).show() : c.done(function() {
              N(t).hide()
            }), c.done(function() {
              var e;
              for (e in I.remove(t, "fxshow"), f) N.style(t, e, f[e])
            }), f) s = Qe(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
      }],
      prefilter: function(e, t) {
        t ? Je.prefilters.unshift(e) : Je.prefilters.push(e)
      }
    }), N.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? N.extend({}, e) : {
        complete: n || !n && t || N.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !N.isFunction(t) && t
      };
      return r.duration = N.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in N.fx.speeds ? N.fx.speeds[r.duration] : N.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        N.isFunction(r.old) && r.old.call(this), r.queue && N.dequeue(this, r.queue)
      }, r
    }, N.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(X).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(t, e, n, r) {
        var i = N.isEmptyObject(t),
          o = N.speed(e, n, r),
          s = function() {
            var e = Je(this, N.extend({}, t), o);
            (i || I.get(this, "finish")) && e.stop(!0)
          };
        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(i, e, o) {
        var s = function(e) {
          var t = e.stop;
          delete e.stop, t(o)
        };
        return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
          var e = !0,
            t = null != i && i + "queueHooks",
            n = N.timers,
            r = I.get(this);
          if (t) r[t] && r[t].stop && s(r[t]);
          else
            for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
          for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
          !e && o || N.dequeue(this, i)
        })
      },
      finish: function(s) {
        return !1 !== s && (s = s || "fx"), this.each(function() {
          var e, t = I.get(this),
            n = t[s + "queue"],
            r = t[s + "queueHooks"],
            i = N.timers,
            o = n ? n.length : 0;
          for (t.finish = !0, N.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
          for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
          delete t.finish
        })
      }
    }), N.each(["toggle", "show", "hide"], function(e, r) {
      var i = N.fn[r];
      N.fn[r] = function(e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ye(r, !0), e, t, n)
      }
    }), N.each({
      slideDown: Ye("show"),
      slideUp: Ye("hide"),
      slideToggle: Ye("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, r) {
      N.fn[e] = function(e, t, n) {
        return this.animate(r, e, t, n)
      }
    }), N.timers = [], N.fx.tick = function() {
      var e, t = 0,
        n = N.timers;
      for (We = N.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || N.fx.stop(), We = void 0
    }, N.fx.timer = function(e) {
      N.timers.push(e), e() ? N.fx.start() : N.timers.pop()
    }, N.fx.interval = 13, N.fx.start = function() {
      $e || ($e = C.setInterval(N.fx.tick, N.fx.interval))
    }, N.fx.stop = function() {
      C.clearInterval($e), $e = null
    }, N.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, N.fn.delay = function(r, e) {
      return r = N.fx && N.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
        var n = C.setTimeout(e, r);
        t.stop = function() {
          C.clearTimeout(n)
        }
      })
    }, Xe = E.createElement("input"), ze = E.createElement("select"), Ue = ze.appendChild(E.createElement("option")), Xe.type = "checkbox", v.checkOn = "" !== Xe.value, v.optSelected = Ue.selected, ze.disabled = !0, v.optDisabled = !Ue.disabled, (Xe = E.createElement("input")).value = "t", Xe.type = "radio", v.radioValue = "t" === Xe.value;
    var Ze, et = N.expr.attrHandle;
    N.fn.extend({
      attr: function(e, t) {
        return q(this, N.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
        return this.each(function() {
          N.removeAttr(this, e)
        })
      }
    }), N.extend({
      attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? N.prop(e, t, n) : (1 === o && N.isXMLDoc(e) || (t = t.toLowerCase(), i = N.attrHooks[t] || (N.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void N.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = N.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!v.radioValue && "radio" === t && N.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r, i = 0,
          o = t && t.match(_);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];) r = N.propFix[n] || n, N.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
      }
    }), Ze = {
      set: function(e, t, n) {
        return !1 === t ? N.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, N.each(N.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var o = et[t] || N.find.attr;
      et[t] = function(e, t, n) {
        var r, i;
        return n || (i = et[t], et[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, et[t] = i), r
      }
    });
    var tt = /^(?:input|select|textarea|button)$/i,
      nt = /^(?:a|area)$/i;
    N.fn.extend({
      prop: function(e, t) {
        return q(this, N.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[N.propFix[e] || e]
        })
      }
    }), N.extend({
      prop: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && N.isXMLDoc(e) || (t = N.propFix[t] || t, i = N.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = N.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (N.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), N.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      N.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;

    function it(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }
    N.fn.extend({
      addClass: function(t) {
        var e, n, r, i, o, s, a, u = 0;
        if (N.isFunction(t)) return this.each(function(e) {
          N(this).addClass(t.call(this, e, it(this)))
        });
        if ("string" == typeof t && t)
          for (e = t.match(_) || []; n = this[u++];)
            if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
              for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (a = N.trim(r)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function(t) {
        var e, n, r, i, o, s, a, u = 0;
        if (N.isFunction(t)) return this.each(function(e) {
          N(this).removeClass(t.call(this, e, it(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(_) || []; n = this[u++];)
            if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
              for (s = 0; o = e[s++];)
                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
              i !== (a = N.trim(r)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function(i, t) {
        var o = typeof i;
        return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : N.isFunction(i) ? this.each(function(e) {
          N(this).toggleClass(i.call(this, e, it(this), t), t)
        }) : this.each(function() {
          var e, t, n, r;
          if ("string" === o)
            for (t = 0, n = N(this), r = i.match(_) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          else void 0 !== i && "boolean" !== o || ((e = it(this)) && I.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : I.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && -1 < (" " + it(n) + " ").replace(rt, " ").indexOf(t)) return !0;
        return !1
      }
    });
    var ot = /\r/g,
      st = /[\x20\t\r\n\f]+/g;
    N.fn.extend({
      val: function(n) {
        var r, e, i, t = this[0];
        if (arguments.length) return i = N.isFunction(n), this.each(function(e) {
          var t;
          1 === this.nodeType && (null == (t = i ? n.call(this, e, N(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : N.isArray(t) && (t = N.map(t, function(e) {
            return null == e ? "" : e + ""
          })), (r = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
        });
        if (t) return (r = N.valHooks[t.type] || N.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ot, "") : null == e ? "" : e
      }
    }), N.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = N.find.attr(e, "value");
            return null != t ? t : N.trim(N.text(e)).replace(st, " ")
          }
        },
        select: {
          get: function(e) {
            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
              if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !N.nodeName(n.parentNode, "optgroup"))) {
                if (t = N(n).val(), o) return t;
                s.push(t)
              } return s
          },
          set: function(e, t) {
            for (var n, r, i = e.options, o = N.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < N.inArray(N.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), N.each(["radio", "checkbox"], function() {
      N.valHooks[this] = {
        set: function(e, t) {
          return N.isArray(t) ? e.checked = -1 < N.inArray(N(e).val(), t) : void 0
        }
      }, v.checkOn || (N.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var at = /^(?:focusinfocus|focusoutblur)$/;
    N.extend(N.event, {
      trigger: function(e, t, n, r) {
        var i, o, s, a, u, l, c, f = [n || E],
          p = h.call(e, "type") ? e.type : e,
          d = h.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !at.test(p + N.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[N.expando] ? e : new N.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : N.makeArray(t, [e]), c = N.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !N.isWindow(n)) {
            for (a = c.delegateType || p, at.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
            s === (n.ownerDocument || E) && f.push(s.defaultView || s.parentWindow || C)
          }
          for (i = 0;
            (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || p, (l = (I.get(o, "events") || {})[e.type] && I.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && O(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !O(n) || u && N.isFunction(n[p]) && !N.isWindow(n) && ((s = n[u]) && (n[u] = null), n[N.event.triggered = p](), N.event.triggered = void 0, s && (n[u] = s)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = N.extend(new N.Event, n, {
          type: e,
          isSimulated: !0
        });
        N.event.trigger(r, null, t)
      }
    }), N.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          N.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        return n ? N.event.trigger(e, t, n, !0) : void 0
      }
    }), N.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
      N.fn[n] = function(e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
    }), N.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), v.focusin = "onfocusin" in C, v.focusin || N.each({
      focus: "focusin",
      blur: "focusout"
    }, function(n, r) {
      var i = function(e) {
        N.event.simulate(r, e.target, N.event.fix(e))
      };
      N.event.special[r] = {
        setup: function() {
          var e = this.ownerDocument || this,
            t = I.access(e, r);
          t || e.addEventListener(n, i, !0), I.access(e, r, (t || 0) + 1)
        },
        teardown: function() {
          var e = this.ownerDocument || this,
            t = I.access(e, r) - 1;
          t ? I.access(e, r, t) : (e.removeEventListener(n, i, !0), I.remove(e, r))
        }
      }
    });
    var ut = C.location,
      lt = N.now(),
      ct = /\?/;
    N.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, N.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new C.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || N.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/,
      pt = /([?&])_=[^&]*/,
      dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ht = /^(?:GET|HEAD)$/,
      gt = /^\/\//,
      vt = {},
      mt = {},
      yt = "*/".concat("*"),
      xt = E.createElement("a");

    function bt(o) {
      return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, r = 0,
          i = e.toLowerCase().match(_) || [];
        if (N.isFunction(t))
          for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
      }
    }

    function wt(t, i, o, s) {
      var a = {},
        u = t === mt;

      function l(e) {
        var r;
        return a[e] = !0, N.each(t[e] || [], function(e, t) {
          var n = t(i, o, s);
          return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
        }), r
      }
      return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Tt(e, t) {
      var n, r, i = N.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && N.extend(!0, e, r), e
    }
    xt.href = ut.href, N.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ut.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": yt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": N.parseJSON,
          "text xml": N.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? Tt(Tt(e, N.ajaxSettings), t) : Tt(N.ajaxSettings, e)
      },
      ajaxPrefilter: bt(vt),
      ajaxTransport: bt(mt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var c, f, p, n, d, r, h, i, g = N.ajaxSetup({}, t),
          v = g.context || g,
          m = g.context && (v.nodeType || v.jquery) ? N(v) : N.event,
          y = N.Deferred(),
          x = N.Callbacks("once memory"),
          b = g.statusCode || {},
          o = {},
          s = {},
          w = 0,
          a = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === w) {
                if (!n)
                  for (n = {}; t = dt.exec(p);) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === w ? p : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return w || (e = s[n] = s[n] || e, o[e] = t), this
            },
            overrideMimeType: function(e) {
              return w || (g.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (w < 2)
                  for (t in e) b[t] = [b[t], e[t]];
                else T.always(e[T.status]);
              return this
            },
            abort: function(e) {
              var t = e || a;
              return c && c.abort(t), u(0, t), this
            }
          };
        if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || ut.href) + "").replace(ft, "").replace(gt, ut.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = N.trim(g.dataType || "*").toLowerCase().match(_) || [""], null == g.crossDomain) {
          r = E.createElement("a");
          try {
            r.href = g.url, r.href = r.href, g.crossDomain = xt.protocol + "//" + xt.host != r.protocol + "//" + r.host
          } catch (e) {
            g.crossDomain = !0
          }
        }
        if (g.data && g.processData && "string" != typeof g.data && (g.data = N.param(g.data, g.traditional)), wt(vt, g, t, T), 2 === w) return T;
        for (i in (h = N.event && g.global) && 0 == N.active++ && N.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ht.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ct.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = pt.test(f) ? f.replace(pt, "$1_=" + lt++) : f + (ct.test(f) ? "&" : "?") + "_=" + lt++)), g.ifModified && (N.lastModified[f] && T.setRequestHeader("If-Modified-Since", N.lastModified[f]), N.etag[f] && T.setRequestHeader("If-None-Match", N.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w)) return T.abort();
        for (i in a = "abort", {
            success: 1,
            error: 1,
            complete: 1
          }) T[i](g[i]);
        if (c = wt(mt, g, t, T)) {
          if (T.readyState = 1, h && m.trigger("ajaxSend", [T, g]), 2 === w) return T;
          g.async && 0 < g.timeout && (d = C.setTimeout(function() {
            T.abort("timeout")
          }, g.timeout));
          try {
            w = 1, c.send(o, u)
          } catch (e) {
            if (!(w < 2)) throw e;
            u(-1, e)
          }
        } else u(-1, "No Transport");

        function u(e, t, n, r) {
          var i, o, s, a, u, l = t;
          2 !== w && (w = 2, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
            for (var r, i, o, s, a = e.contents, u = e.dataTypes;
              "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in a)
                if (a[i] && a[i].test(r)) {
                  u.unshift(i);
                  break
                } if (u[0] in n) o = u[0];
            else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
                }
                s || (s = i)
              }
              o = o || s
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
          }(g, T, n)), a = function(e, t, n, r) {
            var i, o, s, a, u, l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
              if (!(s = l[u + " " + o] || l["* " + o]))
                for (i in l)
                  if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                  t = s(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + u + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(g, a, T, i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (N.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (N.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]), T.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), x.fireWith(v, [T, l]), h && (m.trigger("ajaxComplete", [T, g]), --N.active || N.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function(e, t, n) {
        return N.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return N.get(e, void 0, t, "script")
      }
    }), N.each(["get", "post"], function(e, i) {
      N[i] = function(e, t, n, r) {
        return N.isFunction(t) && (r = r || n, n = t, t = void 0), N.ajax(N.extend({
          url: e,
          type: i,
          dataType: r,
          data: t,
          success: n
        }, N.isPlainObject(e) && e))
      }
    }), N._evalUrl = function(e) {
      return N.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    }, N.fn.extend({
      wrapAll: function(t) {
        var e;
        return N.isFunction(t) ? this.each(function(e) {
          N(this).wrapAll(t.call(this, e))
        }) : (this[0] && (e = N(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(n) {
        return N.isFunction(n) ? this.each(function(e) {
          N(this).wrapInner(n.call(this, e))
        }) : this.each(function() {
          var e = N(this),
            t = e.contents();
          t.length ? t.wrapAll(n) : e.append(n)
        })
      },
      wrap: function(t) {
        var n = N.isFunction(t);
        return this.each(function(e) {
          N(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          N.nodeName(this, "body") || N(this).replaceWith(this.childNodes)
        }).end()
      }
    }), N.expr.filters.hidden = function(e) {
      return !N.expr.filters.visible(e)
    }, N.expr.filters.visible = function(e) {
      return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Ct = /%20/g,
      Et = /\[\]$/,
      Nt = /\r?\n/g,
      kt = /^(?:submit|button|image|reset|file)$/i,
      St = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
      var t;
      if (N.isArray(e)) N.each(e, function(e, t) {
        r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
      });
      else if (r || "object" !== N.type(e)) i(n, e);
      else
        for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    N.param = function(e, t) {
      var n, r = [],
        i = function(e, t) {
          t = N.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = N.ajaxSettings && N.ajaxSettings.traditional), N.isArray(e) || e.jquery && !N.isPlainObject(e)) N.each(e, function() {
        i(this.name, this.value)
      });
      else
        for (n in e) jt(n, e[n], t, i);
      return r.join("&").replace(Ct, "+")
    }, N.fn.extend({
      serialize: function() {
        return N.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = N.prop(this, "elements");
          return e ? N.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !N(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !U.test(e))
        }).map(function(e, t) {
          var n = N(this).val();
          return null == n ? null : N.isArray(n) ? N.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Nt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Nt, "\r\n")
          }
        }).get()
      }
    }), N.ajaxSettings.xhr = function() {
      try {
        return new C.XMLHttpRequest
      } catch (e) {}
    };
    var At = {
        0: 200,
        1223: 204
      },
      Dt = N.ajaxSettings.xhr();
    v.cors = !!Dt && "withCredentials" in Dt, v.ajax = Dt = !!Dt, N.ajaxTransport(function(i) {
      var o, s;
      return v.cors || Dt && !i.crossDomain ? {
        send: function(e, t) {
          var n, r = i.xhr();
          if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
            for (n in i.xhrFields) r[n] = i.xhrFields[n];
          for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
          o = function(e) {
            return function() {
              o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                binary: r.response
              } : {
                text: r.responseText
              }, r.getAllResponseHeaders()))
            }
          }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
            4 === r.readyState && C.setTimeout(function() {
              o && s()
            })
          }, o = o("abort");
          try {
            r.send(i.hasContent && i.data || null)
          } catch (e) {
            if (o) throw e
          }
        },
        abort: function() {
          o && o()
        }
      } : void 0
    }), N.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return N.globalEval(e), e
        }
      }
    }), N.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), N.ajaxTransport("script", function(n) {
      var r, i;
      if (n.crossDomain) return {
        send: function(e, t) {
          r = N("<script>").prop({
            charset: n.scriptCharset,
            src: n.url
          }).on("load error", i = function(e) {
            r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
          }), E.head.appendChild(r[0])
        },
        abort: function() {
          i && i()
        }
      }
    });
    var _t = [],
      Lt = /(=)\?(?=&|$)|\?\?/;
    N.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = _t.pop() || N.expando + "_" + lt++;
        return this[e] = !0, e
      }
    }), N.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r, i, o, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
      return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = N.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return o || N.error(r + " was not called"), o[0]
      }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
        o = arguments
      }, n.always(function() {
        void 0 === i ? N(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, _t.push(r)), o && N.isFunction(i) && i(o[0]), o = i = void 0
      }), "script") : void 0
    }), N.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || E;
      var r = x.exec(e),
        i = !n && [];
      return r ? [t.createElement(r[1])] : (r = te([e], t, i), i && i.length && N(i).remove(), N.merge([], r.childNodes))
    };
    var qt = N.fn.load;

    function Ot(e) {
      return N.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    N.fn.load = function(e, t, n) {
      if ("string" != typeof e && qt) return qt.apply(this, arguments);
      var r, i, o, s = this,
        a = e.indexOf(" ");
      return -1 < a && (r = N.trim(e.slice(a)), e = e.slice(0, a)), N.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && N.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        o = arguments, s.html(r ? N("<div>").append(N.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        s.each(function() {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
    }, N.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      N.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), N.expr.filters.animated = function(t) {
      return N.grep(N.timers, function(e) {
        return t === e.elem
      }).length
    }, N.offset = {
      setOffset: function(e, t, n) {
        var r, i, o, s, a, u, l = N.css(e, "position"),
          c = N(e),
          f = {};
        "static" === l && (e.style.position = "relative"), a = c.offset(), o = N.css(e, "top"), u = N.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), N.isFunction(t) && (t = t.call(e, n, N.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
      }
    }, N.fn.extend({
      offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
          N.offset.setOffset(this, t, e)
        });
        var e, n, r = this[0],
          i = {
            top: 0,
            left: 0
          },
          o = r && r.ownerDocument;
        if (o) return e = o.documentElement, N.contains(e, r) ? (i = r.getBoundingClientRect(), n = Ot(o), {
          top: i.top + n.pageYOffset - e.clientTop,
          left: i.left + n.pageXOffset - e.clientLeft
        }) : i
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            r = {
              top: 0,
              left: 0
            };
          return "fixed" === N.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), N.nodeName(e[0], "html") || (r = e.offset()), r.top += N.css(e[0], "borderTopWidth", !0), r.left += N.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - r.top - N.css(n, "marginTop", !0),
            left: t.left - r.left - N.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === N.css(e, "position");) e = e.offsetParent;
          return e || je
        })
      }
    }), N.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(t, i) {
      var o = "pageYOffset" === i;
      N.fn[t] = function(e) {
        return q(this, function(e, t, n) {
          var r = Ot(e);
          return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
        }, t, e, arguments.length)
      }
    }), N.each(["top", "left"], function(e, n) {
      N.cssHooks[n] = De(v.pixelPosition, function(e, t) {
        return t ? (t = Ae(e, n), Ne.test(t) ? N(e).position()[n] + "px" : t) : void 0
      })
    }), N.each({
      Height: "height",
      Width: "width"
    }, function(o, s) {
      N.each({
        padding: "inner" + o,
        content: s,
        "": "outer" + o
      }, function(r, e) {
        N.fn[e] = function(e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return q(this, function(e, t, n) {
            var r;
            return N.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? N.css(e, t, i) : N.style(e, t, n, i)
          }, s, n ? e : void 0, n, null)
        }
      })
    }), N.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      size: function() {
        return this.length
      }
    }), N.fn.andSelf = N.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return N
    });
    var Ht = C.jQuery,
      It = C.$;
    return N.noConflict = function(e) {
      return C.$ === N && (C.$ = It), e && C.jQuery === N && (C.jQuery = Ht), N
    }, e || (C.jQuery = C.$ = N), N
  }), B.define("jquery", function() {
    return jQuery
  }), "function" != typeof Object.assign && (Object.assign = function(e) {
    "use strict";
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      if (null != r)
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
    }
    return t
  }), Object.defineProperties && function(i, r) {
    var o = {
      pageX: function(e) {
        if (!e) return;
        var t = this.target.ownerDocument || i,
          n = t.documentElement,
          r = t.body;
        return e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0)
      },
      pageY: function(e) {
        if (!e) return;
        var t = this.target.ownerDocument || i,
          n = t.documentElement,
          r = t.body;
        return e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)
      },
      relatedTarget: function(e) {
        if (!e) return;
        return e.fromElement === this.target ? e.toElement : e.fromElement
      },
      metaKey: function(e) {
        if (!e) return;
        return e.ctrlKey
      },
      which: function(e) {
        if (!e) return;
        return null !== e.charCode ? e.charCode : e.keyCode
      }
    };
    r.each(r.event.keyHooks.props.concat(r.event.mouseHooks.props, r.event.props), function(e, i) {
      "target" !== i && Object.defineProperty(r.Event.prototype, i, {
        get: function() {
          var e, t, n, r = this.originalEvent && this.originalEvent[i];
          return void 0 !== this["_" + i] ? this["_" + i] : (e = this, void 0 !== (n = o[t = i] && void 0 === r ? o[i].call(this, this.originalEvent) : r) && Object.defineProperty(e, t, {
            value: n
          }), n)
        },
        set: function(e) {
          this["_" + i] = e
        }
      })
    }), r.event.fix = function(e) {
      if (e[r.expando]) return e;
      var t = e,
        n = t.target;
      return e = r.Event(t), n || (n = t.srcElement || i), 3 === n.nodeType && (n = n.parentNode), e.target = n, e
    }
  }(document, jQuery);