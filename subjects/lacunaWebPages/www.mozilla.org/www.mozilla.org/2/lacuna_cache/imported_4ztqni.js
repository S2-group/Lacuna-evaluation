if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {} : t(e)
  }("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";

    function m(e) {
      return null != e && e === e.window
    }
    var t = [],
      C = T.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      x = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

    function b(e, t, n) {}

    function w(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
      A = function(e, t) {
        return new A.fn.init(e, t)
      },
      d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return !x(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    A.fn = A.prototype = {
      jquery: f,
      constructor: A,
      length: 0,
      toArray: function() {},
      get: function(e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = A.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return A.each(this, e)
      },
      map: function(n) {
        return this.pushStack(A.map(this, function(e, t) {
          return n.call(e, t, e)
        }))
      },
      slice: function() {},
      first: function() {},
      last: function() {},
      eq: function(e) {},
      end: function() {},
      push: u,
      sort: t.sort,
      splice: t.splice
    }, A.extend = A.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || x(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
        if (null != (e = arguments[s]))
          for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (A.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || A.isPlainObject(n) ? n : {}, i = !1, a[t] = A.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
    }, A.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {},
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l))
      },
      isEmptyObject: function(e) {},
      globalEval: function(e, t) {},
      each: function(e, t) {
        var n, r = 0;
        if (p(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {},
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (p(Object(e)) ? A.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : i.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return e.length = i, e
      },
      grep: function(e, t, n) {},
      map: function(e, t, n) {
        var r, i, o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else
          for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a)
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (A.fn[Symbol.iterator] = t[Symbol.iterator]), A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
      function f(e, t, n) {}

      function i() {}
      var e, p, b, o, a, h, d, m, w, u, l, S, T, s, C, g, c, v, y, A = "sizzle" + 1 * new Date,
        x = n.document,
        k = 0,
        r = 0,
        E = ue(),
        D = ue(),
        L = ue(),
        N = ue(),
        j = function(e, t) {
          return e === t && (l = !0), 0
        },
        M = {}.hasOwnProperty,
        t = [],
        F = t.pop,
        q = t.push,
        O = t.push,
        z = t.slice,
        P = function(e, t) {},
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        _ = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
        B = new RegExp(I + "+", "g"),
        $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        U = new RegExp("^" + I + "*," + I + "*"),
        V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        X = new RegExp(I + "|>"),
        Q = new RegExp(W),
        G = new RegExp("^" + R + "$"),
        Y = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + _),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
        J = /HTML$/i,
        K = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        ee = /^[^{]+\{\s*\[native \w/,
        te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ne = /[+~]/,
        re = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        oe = function(e, t) {},
        ae = be(function(e) {}, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        O.apply(t = z.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
      } catch (e) {
        O = {
          apply: t.length ? function(e, t) {} : function(e, t) {}
        }
      }

      function se(e, t, n, r) {
        var i, o, a, s, u, l, c, f = t && t.ownerDocument,
          d = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
        if (!r && ((t ? t.ownerDocument || t : x) !== T && S(t), t = t || T, C)) {
          if (11 !== d && (u = te.exec(e)))
            if (i = u[1]) {
              if (9 === d) {
                if (!(a = t.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n
              } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
            } else {
              if (u[2]) return O.apply(n, t.getElementsByTagName(e)), n;
              if ((i = u[3]) && p.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(i)), n
            } if (p.qsa && !N[e + " "] && (!g || !g.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
            if (c = e, f = t, 1 === d && X.test(e)) {
              for ((s = t.getAttribute("id")) ? s = s.replace(ie, oe) : t.setAttribute("id", s = A), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + xe(l[o]);
              c = l.join(","), f = ne.test(e) && ve(t.parentNode) || t
            }
            try {
              return O.apply(n, f.querySelectorAll(c)), n
            } catch (t) {
              N(e, !0)
            } finally {
              s === A && t.removeAttribute("id")
            }
          }
        }
        return m(e.replace($, "$1"), t, n, r)
      }

      function ue() {
        var n = [];
        return function r(e, t) {}
      }

      function le(e) {
        return e[A] = !0, e
      }

      function ce(e) {
        var t = T.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function fe(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
      }

      function de(e, t) {}

      function pe(t) {
        return function(e) {}
      }

      function he(n) {
        return function(e) {}
      }

      function me(t) {
        return function(e) {}
      }

      function ge(a) {
        return le(function(o) {})
      }

      function ve(e) {}
      for (e in p = se.support = {}, a = se.isXML = function(e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !J.test(t || n && n.nodeName || "HTML")
        }, S = se.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : x;
          return r !== T && 9 === r.nodeType && r.documentElement && (s = (T = r).documentElement, C = !a(T), x !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), p.attributes = ce(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), p.getElementsByTagName = ce(function(e) {
            return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
          }), p.getElementsByClassName = ee.test(T.getElementsByClassName), p.getById = ce(function(e) {
            return s.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
          }), p.getById ? (b.filter.ID = function(e) {}, b.find.ID = function(e, t) {}) : (b.filter.ID = function(e) {}, b.find.ID = function(e, t) {}), b.find.TAG = p.getElementsByTagName ? function(e, t) {} : function(e, t) {}, b.find.CLASS = p.getElementsByClassName && function(e, t) {}, c = [], g = [], (p.qsa = ee.test(T.querySelectorAll)) && (ce(function(e) {
            s.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + A + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || g.push(".#.+[+~]")
          }), ce(function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = T.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
          })), (p.matchesSelector = ee.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
            p.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", W)
          }), g = g.length && new RegExp(g.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(s.compareDocumentPosition), y = t || ee.test(s.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {}, j = t ? function(e, t) {
            if (e === t) return l = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === x && y(x, e) ? -1 : t === T || t.ownerDocument === x && y(x, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {}), T
        }, se.matches = function(e, t) {}, se.matchesSelector = function(e, t) {}, se.contains = function(e, t) {
          return (e.ownerDocument || e) !== T && S(e), y(e, t)
        }, se.attr = function(e, t) {}, se.escape = function(e) {}, se.error = function(e) {}, se.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            i = 0;
          if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(j), l) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) e.splice(n[r], 1)
          }
          return u = null, e
        }, o = se.getText = function(e) {}, (b = se.selectors = {
          cacheLength: 50,
          createPseudo: le,
          match: Y,
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
            ATTR: function(e) {},
            CHILD: function(e) {},
            PSEUDO: function(e) {}
          },
          filter: {
            TAG: function(e) {},
            CLASS: function(e) {},
            ATTR: function(n, r, i) {},
            CHILD: function(h, e, t, m, g) {},
            PSEUDO: function(e, o) {}
          },
          pseudos: {
            not: le(function(e) {}),
            has: le(function(t) {}),
            contains: le(function(t) {}),
            lang: le(function(n) {}),
            target: function(e) {},
            root: function(e) {},
            focus: function(e) {},
            enabled: me(!1),
            disabled: me(!0),
            checked: function(e) {},
            selected: function(e) {},
            empty: function(e) {},
            parent: function(e) {},
            header: function(e) {},
            input: function(e) {},
            button: function(e) {},
            text: function(e) {},
            first: ge(function() {}),
            last: ge(function(e, t) {}),
            eq: ge(function(e, t, n) {}),
            even: ge(function(e, t) {}),
            odd: ge(function(e, t) {}),
            lt: ge(function(e, t, n) {}),
            gt: ge(function(e, t, n) {})
          }
        }).pseudos.nth = b.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) b.pseudos[e] = pe(e);
      for (e in {
          submit: !0,
          reset: !0
        }) b.pseudos[e] = he(e);

      function ye() {}

      function xe(e) {}

      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          d = r++;
        return e.first ? function(e, t, n) {} : function(e, t, n) {}
      }

      function we(i) {}

      function Se(e, t, n, r, i) {}

      function Te(p, h, m, g, v, e) {}

      function Ce(e) {}
      return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, h = se.tokenize = function(e, t) {}, d = se.compile = function(e, t) {}, m = se.select = function(e, t, n, r) {}, p.sortStable = A.split("").sort(j).join("") === A, p.detectDuplicates = !!l, S(), p.sortDetached = ce(function(e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
      }), ce(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || fe("type|href|height|width", function(e, t, n) {}), p.attributes && ce(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || fe("value", function(e, t, n) {}), ce(function(e) {
        return null == e.getAttribute("disabled")
      }) || fe(H, function(e, t, n) {}), se
    }(T);
    A.find = h, A.expr = h.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = h.uniqueSort, A.text = h.getText, A.isXMLDoc = h.isXML, A.contains = h.contains, A.escapeSelector = h.escape;

    function S(e, t, n) {}

    function k(e, t) {}
    var E = A.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, r) {}
    A.filter = function(e, t, n) {}, A.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(A(e).filter(function() {}));
        for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
        return 1 < r ? A.uniqueSort(n) : n
      },
      filter: function(e) {},
      not: function(e) {},
      is: function(e) {}
    });
    var j, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (A.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(A) : A.makeArray(e, this);
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof A ? t[0] : t, A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), L.test(r[1]) && A.isPlainObject(t))
          for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = A.fn, j = A(C);
    var F = /^(?:parents|prev(?:Until|All))/,
      q = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function O(e, t) {}
    A.fn.extend({
      has: function(e) {},
      closest: function(e, t) {},
      index: function(e) {},
      add: function(e, t) {},
      addBack: function(e) {}
    }), A.each({
      parent: function(e) {},
      parents: function(e) {},
      parentsUntil: function(e, t, n) {},
      next: function(e) {},
      prev: function(e) {},
      nextAll: function(e) {},
      prevAll: function(e) {},
      nextUntil: function(e, t, n) {},
      prevUntil: function(e, t, n) {},
      siblings: function(e) {},
      children: function(e) {},
      contents: function(e) {}
    }, function(r, i) {
      A.fn[r] = function(e, t) {}
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function P(e) {
      return e
    }

    function H(e) {}

    function I(e, t, n, r) {}
    A.Callbacks = function(r) {
      var e, n;
      r = "string" == typeof r ? (e = r, n = {}, A.each(e.match(z) || [], function(e, t) {
        n[t] = !0
      }), n) : A.extend({}, r);

      function i() {
        for (s = s || r.once, a = o = !0; l.length; c = -1)
          for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
        r.memory || (t = !1), o = !1, s && (u = t ? [] : "")
      }
      var o, t, a, s, u = [],
        l = [],
        c = -1,
        f = {
          add: function() {
            return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
              A.each(e, function(e, t) {
                x(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== w(t) && n(t)
              })
            }(arguments), t && !o && i()), this
          },
          remove: function() {},
          has: function(e) {},
          empty: function() {},
          disable: function() {
            return s = l = [], u = t = "", this
          },
          disabled: function() {},
          lock: function() {
            return s = l = [], t || o || (u = t = ""), this
          },
          locked: function() {},
          fireWith: function(e, t) {
            return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
          },
          fire: function() {
            return f.fireWith(this, arguments), this
          },
          fired: function() {}
        };
      return f
    }, A.extend({
      Deferred: function(e) {
        var o = [
            ["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
            ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          a = {
            state: function() {},
            always: function() {},
            "catch": function(e) {
              return a.then(null, e)
            },
            pipe: function() {},
            then: function(t, n, r) {
              var u = 0;

              function l(i, o, a, s) {
                return function() {
                  var n = this,
                    r = arguments,
                    e = function() {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, H, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, H, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s ? e : function() {
                      try {
                        e()
                      } catch (e) {
                        A.Deferred.exceptionHook && A.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== H && (n = void 0, r = [e]), o.rejectWith(n, r))
                      }
                    };
                  i ? t() : (A.Deferred.getStackHook && (t.stackTrace = A.Deferred.getStackHook()), T.setTimeout(t))
                }
              }
              return A.Deferred(function(e) {
                o[0][3].add(l(0, e, x(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, x(t) ? t : P)), o[2][3].add(l(0, e, x(n) ? n : H))
              }).promise()
            },
            promise: function(e) {
              return null != e ? A.extend(e, a) : a
            }
          },
          s = {};
        return A.each(o, function(e, t) {
          var n = t[2],
            r = t[5];
          a[t[1]] = n.add, r && n.add(function() {
            i = r
          }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {}, s[t[0] + "With"] = n.fireWith
        }), a.promise(s), e && e.call(s, s), s
      },
      when: function(e) {}
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    A.Deferred.exceptionHook = function(e, t) {}, A.readyException = function(e) {};
    var _ = A.Deferred();

    function W() {
      C.removeEventListener("DOMContentLoaded", W), T.removeEventListener("load", W), A.ready()
    }
    A.fn.ready = function(e) {
      return _.then(e)["catch"](function(e) {}), this
    }, A.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --A.readyWait : A.isReady) || (A.isReady = !0) !== e && 0 < --A.readyWait || _.resolveWith(C, [A])
      }
    }), A.ready.then = _.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(A.ready) : (C.addEventListener("DOMContentLoaded", W), T.addEventListener("load", W));
    var B = function(e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0, x(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {})), t))
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      $ = /^-ms-/,
      U = /-([a-z])/g;

    function V(e, t) {}

    function X(e) {
      return e.replace($, "ms-").replace(U, V)
    }

    function Q(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function G() {
      this.expando = A.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else
          for (r in t) i[X(r)] = t[r];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
      },
      access: function(e, t, n) {},
      remove: function(e, t) {},
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !A.isEmptyObject(t)
      }
    };
    var Y = new G,
      J = new G,
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

    function ee(e, t, n) {}
    A.extend({
      hasData: function(e) {},
      data: function(e, t, n) {},
      removeData: function(e, t) {},
      _data: function(e, t, n) {},
      _removeData: function(e, t) {}
    }), A.fn.extend({
      data: function(n, e) {},
      removeData: function(e) {}
    }), A.extend({
      queue: function(e, t, n) {},
      dequeue: function(e, t) {},
      _queueHooks: function(e, t) {}
    }), A.fn.extend({
      queue: function(t, n) {},
      dequeue: function(e) {},
      clearQueue: function(e) {},
      promise: function(e, t) {}
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = C.documentElement,
      oe = function(e) {},
      ae = {
        composed: !0
      };
    ie.getRootNode && (oe = function(e) {
      return A.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });

    function se(e, t) {}

    function ue(e, t, n, r) {}

    function le(e, t, n, r) {}
    var ce = {};

    function fe(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = A.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e
    }
    A.fn.extend({
      show: function() {},
      hide: function() {
        return fe(this)
      },
      toggle: function(e) {}
    });
    var de = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function ge(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? A.merge([e], n) : n
    }

    function ve(e, t) {}
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var ye, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
        if ((o = e[p]) || 0 === o)
          if ("object" === w(o)) A.merge(d, o.nodeType ? [o] : o);
          else if (be.test(o)) {
        for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + A.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
        A.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      for (f.textContent = "", p = 0; o = d[p++];)
        if (r && -1 < A.inArray(o, r)) i && i.push(o);
        else if (l = oe(o), a = ge(f.appendChild(o), "script"), l && ve(a), n)
        for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
      return f
    }
    ye = C.createDocumentFragment().appendChild(C.createElement("div")), (xe = C.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {}

    function ke() {
      return !1
    }

    function Ee(e, t) {}

    function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) {}).guid = a.guid || (a.guid = A.guid++)), e.each(function() {
        A.event.add(this, t, i, r, n)
      })
    }

    function Le(e, i, o) {}
    A.event = {
      global: {},
      add: function(t, e, n, r, i) {
        var o, a, s, u, l, c, f, d, p, h, m, g = Y.get(t);
        if (g)
          for (n.handler && (n = (o = n).handler, i = o.selector), i && A.find.matchesSelector(ie, i), n.guid || (n.guid = A.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
              return void 0 !== A && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(z) || [""]).length; l--;) p = m = (s = Ce.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = A.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = A.event.special[p] || {}, c = A.extend({
            type: p,
            origType: m,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && A.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), A.event.global[p] = !0)
      },
      remove: function(e, t, n, r, i) {},
      dispatch: function(e) {
        var t, n, r, i, o, a, s = A.event.fix(e),
          u = new Array(arguments.length),
          l = (Y.get(this, "events") || {})[s.type] || [],
          c = A.event.special[s.type] || {};
        for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          for (a = A.event.handlers.call(this, s, l), t = 0;
            (i = a[t++]) && !s.isPropagationStopped();)
            for (s.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((A.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, s), s.result
        }
      },
      handlers: function(e, t) {
        var n, r, i, o, a, s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < A(i, this).index(l) : A.find(i, this, null, [l]).length), a[i] && o.push(r);
              o.length && s.push({
                elem: l,
                handlers: o
              })
            } return l = this, u < t.length && s.push({
          elem: l,
          handlers: t.slice(u)
        }), s
      },
      addProp: function(t, e) {
        Object.defineProperty(A.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: x(e) ? function() {} : function() {},
          set: function(e) {}
        })
      },
      fix: function(e) {
        return e[A.expando] ? e : new A.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function(e) {
            var t = this || e;
            return de.test(t.type) && t.click && D(t, "input") && Le(t, "click", Ae), !1
          },
          trigger: function(e) {},
          _default: function(e) {}
        },
        beforeunload: {
          postDispatch: function(e) {}
        }
      }
    }, A.removeEvent = function(e, t, n) {}, A.Event = function(e, t) {
      if (!(this instanceof A.Event)) return new A.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && A.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[A.expando] = !0
    }, A.Event.prototype = {
      constructor: A.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {},
      stopPropagation: function() {},
      stopImmediatePropagation: function() {}
    }, A.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {}
    }, A.event.addProp), A.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      A.event.special[e] = {
        setup: function() {},
        trigger: function() {},
        delegateType: t
      }
    }), A.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, i) {
      A.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function(e) {}
      }
    }), A.fn.extend({
      on: function(e, t, n, r) {
        return De(this, e, t, n, r)
      },
      one: function(e, t, n, r) {},
      off: function(e, t, n) {}
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      je = /<script|<style|<link/i,
      Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
    }

    function Oe(e) {}

    function ze(e) {}

    function Pe(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), l = o.events))
          for (i in delete a.handle, a.events = {}, l)
            for (n = 0, r = l[i].length; n < r; n++) A.event.add(t, i, l[i][n]);
        J.hasData(e) && (s = J.access(e), u = A.extend({}, s), J.set(t, u))
      }
    }

    function He(n, r, i, o) {
      r = g.apply([], r);
      var e, t, a, s, u, l, c = 0,
        f = n.length,
        d = f - 1,
        p = r[0],
        h = x(p);
      if (h || 1 < f && "string" == typeof p && !y.checkClone && Me.test(p)) return n.each(function(e) {});
      if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (s = (a = A.map(ge(e, "script"), Oe)).length; c < f; c++) u = e, c !== d && (u = A.clone(u, !0, !0), s && A.merge(a, ge(u, "script"))), i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, A.map(a, ze), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && A.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? A._evalUrl && !u.noModule && A._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }) : b(u.textContent.replace(Fe, ""), u, l))
      }
      return n
    }

    function Ie(e, t, n) {}
    A.extend({
      htmlPrefilter: function(e) {
        return e.replace(Ne, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var r, i, o, a, s, u, l, c = e.cloneNode(!0),
          f = oe(e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || A.isXMLDoc(e)))
          for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
          else Pe(e, c);
        return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, n, r, i = A.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (Q(n)) {
            if (t = n[Y.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0
            }
            n[J.expando] && (n[J.expando] = void 0)
          }
      }
    }), A.fn.extend({
      detach: function(e) {},
      remove: function(e) {},
      text: function(e) {
        return B(this, function(e) {
          return void 0 === e ? A.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return He(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
        })
      },
      prepend: function() {},
      before: function() {},
      after: function() {},
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (A.cleanData(ge(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return A.clone(this, e, t)
        })
      },
      html: function(e) {},
      replaceWith: function() {}
    }), A.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, a) {
      A.fn[e] = function(e) {
        for (var t, n = [], r = A(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), A(r[o])[a](t), u.apply(n, t.get());
        return this.pushStack(n)
      }
    });
    var Re, _e, We, Be, $e, Ue, Ve, Xe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Qe = function(e) {},
      Ge = new RegExp(re.join("|"), "i");

    function Ye(e, t, n) {}

    function Je(e, t) {
      return {
        get: function() {}
      }
    }

    function Ke() {}

    function Ze(e) {}
    Ue = C.createElement("div"), (Ve = C.createElement("div")).style && (Ve.style.backgroundClip = "content-box", Ve.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ve.style.backgroundClip, A.extend(y, {
      boxSizingReliable: function() {},
      pixelBoxStyles: function() {},
      pixelPosition: function() {},
      reliableMarginLeft: function() {},
      scrollboxSize: function() {}
    }));
    var et = ["Webkit", "Moz", "ms"],
      tt = C.createElement("div").style,
      nt = {};

    function rt(e) {}
    var it = /^(none|table(?!-c[ea]).+)/,
      ot = /^--/,
      at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      st = {
        letterSpacing: "0",
        fontWeight: "400"
      };

    function ut(e, t, n) {}

    function lt(e, t, n, r, i, o) {}

    function ct(e, t, n) {}

    function ft(e, t, n, r, i) {}
    A.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {}
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {},
      css: function(e, t, n, r) {}
    }), A.each(["height", "width"], function(e, u) {
      A.cssHooks[u] = {
        get: function(e, t, n) {},
        set: function(e, t, n) {}
      }
    }), A.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {}), A.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(i, o) {
      A.cssHooks[i + o] = {
        expand: function(e) {}
      }, "margin" !== i && (A.cssHooks[i + o].set = ut)
    }), A.fn.extend({
      css: function(e, t) {}
    }), ((A.Tween = ft).prototype = {
      constructor: ft,
      init: function(e, t, n, r, i, o) {},
      cur: function() {},
      run: function(e) {}
    }).init.prototype = ft.prototype, (ft.propHooks = {
      _default: {
        get: function(e) {},
        set: function(e) {}
      }
    }).scrollTop = ft.propHooks.scrollLeft = {
      set: function(e) {}
    }, A.easing = {
      linear: function(e) {},
      swing: function(e) {},
      _default: "swing"
    }, A.fx = ft.prototype.init, A.fx.step = {};
    var dt, pt, ht, mt, gt = /^(?:toggle|show|hide)$/,
      vt = /queueHooks$/;

    function yt() {}

    function xt() {}

    function bt(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function wt(e, t, n) {}

    function St(o, e, t) {}
    A.Animation = A.extend(St, {
      tweeners: {
        "*": [function(e, t) {}]
      },
      tweener: function(e, t) {},
      prefilters: [function(e, t, n) {}],
      prefilter: function(e, t) {}
    }), A.speed = function(e, t, n) {}, A.fn.extend({
      fadeTo: function(e, t, n, r) {},
      animate: function(t, e, n, r) {},
      stop: function(i, e, o) {},
      finish: function(a) {}
    }), A.each(["toggle", "show", "hide"], function(e, r) {
      var i = A.fn[r];
      A.fn[r] = function(e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(bt(r, !0), e, t, n)
      }
    }), A.each({
      slideDown: bt("show"),
      slideUp: bt("hide"),
      slideToggle: bt("toggle"),
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
      A.fn[e] = function(e, t, n) {}
    }), A.timers = [], A.fx.tick = function() {}, A.fx.timer = function(e) {}, A.fx.interval = 13, A.fx.start = function() {}, A.fx.stop = function() {}, A.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, A.fn.delay = function(r, e) {}, ht = C.createElement("input"), mt = C.createElement("select").appendChild(C.createElement("option")), ht.type = "checkbox", y.checkOn = "" !== ht.value, y.optSelected = mt.selected, (ht = C.createElement("input")).value = "t", ht.type = "radio", y.radioValue = "t" === ht.value;
    var Tt, Ct = A.expr.attrHandle;
    A.fn.extend({
      attr: function(e, t) {
        return B(this, A.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {}
    }), A.extend({
      attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? A.prop(e, t, n) : (1 === o && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = A.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {}
        }
      },
      removeAttr: function(e, t) {}
    }), Tt = {
      set: function(e, t, n) {}
    }, A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = Ct[t] || A.find.attr;
      Ct[t] = function(e, t, n) {}
    });
    var At = /^(?:input|select|textarea|button)$/i,
      kt = /^(?:a|area)$/i;

    function Et(e) {
      return (e.match(z) || []).join(" ")
    }

    function Dt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function Lt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }
    A.fn.extend({
      prop: function(e, t) {},
      removeProp: function(e) {}
    }), A.extend({
      prop: function(e, t, n) {},
      propHooks: {
        tabIndex: {
          get: function(e) {}
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), y.optSelected || (A.propHooks.selected = {
      get: function(e) {},
      set: function(e) {}
    }), A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      A.propFix[this.toLowerCase()] = this
    }), A.fn.extend({
      addClass: function(t) {
        var e, n, r, i, o, a, s, u = 0;
        if (x(t)) return this.each(function(e) {});
        if ((e = Lt(t)).length)
          for (; n = this[u++];)
            if (i = Dt(n), r = 1 === n.nodeType && " " + Et(i) + " ") {
              for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = Et(r)) && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(t) {},
      toggleClass: function(i, t) {},
      hasClass: function(e) {}
    });
    var Nt = /\r/g;
    A.fn.extend({
      val: function(n) {}
    }), A.extend({
      valHooks: {
        option: {
          get: function(e) {}
        },
        select: {
          get: function(e) {},
          set: function(e, t) {}
        }
      }
    }), A.each(["radio", "checkbox"], function() {
      A.valHooks[this] = {
        set: function(e, t) {}
      }, y.checkOn || (A.valHooks[this].get = function(e) {})
    }), y.focusin = "onfocusin" in T;

    function jt(e) {}
    var Mt = /^(?:focusinfocus|focusoutblur)$/;
    A.extend(A.event, {
      trigger: function(e, t, n, r) {},
      simulate: function(e, t, n) {}
    }), A.fn.extend({
      trigger: function(e, t) {},
      triggerHandler: function(e, t) {}
    }), y.focusin || A.each({
      focus: "focusin",
      blur: "focusout"
    }, function(n, r) {
      function i(e) {}
      A.event.special[r] = {
        setup: function() {},
        teardown: function() {}
      }
    });
    var Ft = T.location,
      qt = Date.now(),
      Ot = /\?/;
    A.parseXML = function(e) {};
    var zt = /\[\]$/,
      Pt = /\r?\n/g,
      Ht = /^(?:submit|button|image|reset|file)$/i,
      It = /^(?:input|select|textarea|keygen)/i;

    function Rt(n, e, r, i) {}
    A.param = function(e, t) {}, A.fn.extend({
      serialize: function() {},
      serializeArray: function() {}
    });
    var _t = /%20/g,
      Wt = /#.*$/,
      Bt = /([?&])_=[^&]*/,
      $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ut = /^(?:GET|HEAD)$/,
      Vt = /^\/\//,
      Xt = {},
      Qt = {},
      Gt = "*/".concat("*"),
      Yt = C.createElement("a");

    function Jt(o) {
      return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, r = 0,
          i = e.toLowerCase().match(z) || [];
        if (x(t))
          for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
      }
    }

    function Kt(t, i, o, a) {}

    function Zt(e, t) {
      var n, r, i = A.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
      return r && A.extend(!0, e, r), e
    }
    Yt.href = Ft.href, A.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ft.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ft.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Gt,
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
          "text json": JSON.parse,
          "text xml": A.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? Zt(Zt(e, A.ajaxSettings), t) : Zt(A.ajaxSettings, e)
      },
      ajaxPrefilter: Jt(Xt),
      ajaxTransport: Jt(Qt),
      ajax: function(e, t) {},
      getJSON: function(e, t, n) {},
      getScript: function(e, t) {}
    }), A.each(["get", "post"], function(e, i) {
      A[i] = function(e, t, n, r) {}
    }), A._evalUrl = function(e, t) {}, A.fn.extend({
      wrapAll: function(e) {},
      wrapInner: function(n) {},
      wrap: function(t) {},
      unwrap: function(e) {}
    }), A.expr.pseudos.hidden = function(e) {}, A.expr.pseudos.visible = function(e) {}, A.ajaxSettings.xhr = function() {
      try {
        return new T.XMLHttpRequest
      } catch (e) {}
    };
    var en = {
        0: 200,
        1223: 204
      },
      tn = A.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, A.ajaxTransport(function(i) {}), A.ajaxPrefilter(function(e) {}), A.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {}
      }
    }), A.ajaxPrefilter("script", function(e) {}), A.ajaxTransport("script", function(n) {});
    var nn, rn = [],
      on = /(=)\?(?=&|$)|\?\?/;
    A.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {}
    }), A.ajaxPrefilter("json jsonp", function(e, t, n) {}), y.createHTMLDocument = ((nn = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), A.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && A(o).remove(), A.merge([], i.childNodes)));
      var r, i, o
    }, A.fn.load = function(e, t, n) {}, A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      A.fn[t] = function(e) {}
    }), A.expr.pseudos.animated = function(t) {}, A.offset = {
      setOffset: function(e, t, n) {}
    }, A.fn.extend({
      offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {});
        var e, n, r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {},
      offsetParent: function() {}
    }), A.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(t, i) {
      var o = "pageYOffset" === i;
      A.fn[t] = function(e) {
        return B(this, function(e, t, n) {
          var r;
          if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
          r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
        }, t, e, arguments.length)
      }
    }), A.each(["top", "left"], function(e, n) {
      A.cssHooks[n] = Je(y.pixelPosition, function(e, t) {})
    }), A.each({
      Height: "height",
      Width: "width"
    }, function(a, s) {
      A.each({
        padding: "inner" + a,
        content: s,
        "": "outer" + a
      }, function(r, o) {
        A.fn[o] = function(e, t) {}
      })
    }), A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
      A.fn[n] = function(e, t) {}
    }), A.fn.extend({
      hover: function(e, t) {}
    }), A.fn.extend({
      bind: function(e, t, n) {},
      unbind: function(e, t) {},
      delegate: function(e, t, n, r) {},
      undelegate: function(e, t, n) {}
    }), A.proxy = function(e, t) {}, A.holdReady = function(e) {}, A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = D, A.isFunction = x, A.isWindow = m, A.camelCase = X, A.type = w, A.now = Date.now, A.isNumeric = function(e) {}, "function" == typeof define && define.amd && define("jquery", [], function() {});
    var an = T.jQuery,
      sn = T.$;
    return A.noConflict = function(e) {}, e || (T.jQuery = T.$ = A), A
  }), "undefined" == typeof window.Mozilla && (window.Mozilla = {}), function() {
    "use strict";
    var e = {
        initMobileDownloadLinks: function() {
          if ("android" === site.platform)
            for (var e = document.querySelectorAll('a[href^="https://play.google.com/store/apps/"]'), t = 0; t < e.length; ++t) {
              var n = e[t],
                r = n.getAttribute("href").replace("https://play.google.com/store/apps/", "market://");
              n.setAttribute("href", r)
            }
        },
        maybeSwitchToDistDownloadLinks: function(e) {},
        doRedirect: function(e) {}
      },
      t = document.getElementById("strings");
    e.trans = function(e) {}, window.Mozilla.Utils = e
  }(), "undefined" == typeof window.Mozilla && (window.Mozilla = {}), function() {
    "use strict";
    var l = {};
    l._isFirefox = function(e) {
      return e = e || navigator.userAgent, /\s(Firefox|FxiOS)/.test(e) && !l._isLikeFirefox(e)
    }, l._isFirefoxDesktop = function(e) {
      return e = e || navigator.userAgent, /\sFirefox/.test(e) && !/Mobile|Tablet|Fennec/.test(e) && !l._isLikeFirefox(e)
    }, l._isFirefoxAndroid = function(e) {
      return e = e || navigator.userAgent, /\sFirefox/.test(e) && /Android/.test(e)
    }, l._isFirefoxiOS = function(e) {
      return e = e || navigator.userAgent, /FxiOS/.test(e)
    }, l._isFirefoxFxOS = function(e, t) {
      return e = e || navigator.userAgent, t = "" === t ? "" : t || navigator.platform, /Firefox/.test(e) && "" === t
    }, l._isLikeFirefox = function(e) {
      return e = e || navigator.userAgent, /Iceweasel|IceCat|SeaMonkey|Camino|like\ Firefox/i.test(e)
    }, l._getFirefoxVersion = function(e) {
      e = e || navigator.userAgent;
      var t = /Firefox\/(\d+(?:\.\d+){1,2})/.exec(e);
      return t && !l._isLikeFirefox(e) ? t[1] : "0"
    }, l._getFirefoxMajorVersion = function(e) {
      return parseInt(l._getFirefoxVersion(e), 10)
    }, l._compareVersion = function(e, t, n) {}, l._isFirefoxUpToDate = function(e, t, n) {}, l.isFirefoxOutOfDate = function(e, t, n) {}, l.isFirefoxURLOutOfDate = function(e, t, n) {}, l.getFirefoxDetails = function(s) {}, l.getFxaDetails = function(e) {
      if (l.FxaDetails) e(l.FxaDetails);
      else {
        var t = {
          firefox: !1,
          legacy: !1,
          mobile: !1,
          setup: !1,
          desktopDevices: !1,
          mobileDevices: !1
        };
        if (l.isFirefoxAndroid) t.firefox = !0, t.mobile = "android", a();
        else if (l.isFirefoxiOS) t.firefox = !0, t.mobile = "ios", a();
        else if (l.isFirefoxDesktop) {
          t.firefox = !0;
          var n = l._getFirefoxVersion();
          if (parseFloat(n) < 29) t.legacy = !0;
          else {
            parseFloat(n) < 40 && (t.legacy = !0);
            var r = Math.random().toString(36).replace(/[^a-z]+/g, ""),
              i = function(e) {};
            document.addEventListener("mozUITourResponse", i, !1), document.dispatchEvent(new CustomEvent("mozUITour", {
              bubbles: !0,
              detail: {
                action: "getConfiguration",
                data: {
                  configuration: "sync",
                  callbackID: r
                }
              }
            }))
          }
        }
        var o = window.setTimeout(a, 400)
      }

      function a() {
        window.clearTimeout(o), l.FxaDetails = t, e(t)
      }
    }, l.isFirefox = l._isFirefox(), l.isFirefoxDesktop = l._isFirefoxDesktop(), l.isFirefoxAndroid = l._isFirefoxAndroid(), l.isFirefoxiOS = l._isFirefoxiOS(), l.isFirefoxFxOS = l._isFirefoxFxOS(), l.isLikeFirefox = l._isLikeFirefox(), l.FirefoxVersion = l._getFirefoxVersion(), l.FirefoxMajorVersion = l._getFirefoxMajorVersion(), l.platform = window.site.platform, l.isMobile = /^(android|ios|fxos)$/.test(l.platform), l.isDesktop = !l.isMobile, window.Mozilla.Client = l
  }(), function() {
    "use strict";

    function t(e) {}

    function e(e, t, n) {}

    function n(e) {}
    n.prototype = {
      add: function() {},
      remove: function() {},
      toggle: function(e) {},
      contains: function(e) {},
      replace: function(e, t) {}
    }, "undefined" == typeof Element || "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
      get: function() {}
    }), window.DOMTokenList && null === DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = n.prototype.replace)
  }(), void 0 === Mzp) var Mzp = {};
if (function(e) {
    "use strict";
    var t, n, r, i, o, a = {};
    a.matchMedia = "undefined" != typeof window.matchMedia && window.matchMedia("all").addListener, a.classList = "classList" in document.createElement("div"), a.details = "open" in (o = e.createElement("details")) && (n = e.body || (i = e.documentElement, t = !0, i.insertBefore(e.createElement("body"), i.firstElementChild || i.firstChild)), o.innerHTML = "<summary>a</summary>b", o.style.display = "block", n.appendChild(o), r = o.offsetHeight, o.open = !0, r = r !== o.offsetHeight, n.removeChild(o), t && n.parentNode.removeChild(n), r), window.Mzp.Supports = a
  }(document), void 0 === Mzp) Mzp = {};
if (function() {
    "use strict";
    var e = {};
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), e.nextUntil = function(e, t, n) {}, window.Mzp.Utils = e
  }(), void 0 === Mzp) Mzp = {};
if (function(e) {
    "use strict";
    var n, t, r = {},
      i = !1,
      o = {
        onMenuOpen: null,
        onMenuClose: null,
        onMenuButtonClose: null
      };
    r.open = function(e, t) {}, r.close = function() {}, r.onDocumentKeyUp = function(e) {}, r.onCloseButtonClick = function(e) {}, r.toggle = function(e) {}, r.onMouseEnter = function(t) {}, r.onMouseLeave = function() {}, r.onFocusOut = function() {}, r.onClickWide = function(e) {}, r.onClickSmall = function(e) {}, r.isWideViewport = function() {
      return t.matches
    }, r.handleState = function() {
      (t = matchMedia("(min-width: 768px)")).addListener(function(e) {}), r.isWideViewport() ? r.bindEventsWide() : r.bindEventsSmall()
    }, r.bindEventsWide = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", r.onMouseEnter, !1), e[t].addEventListener("mouseleave", r.onMouseLeave, !1), e[t].addEventListener("focusout", r.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").addEventListener("click", r.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").addEventListener("click", r.onCloseButtonClick, !1);
      document.addEventListener("keyup", r.onDocumentKeyUp, !1)
    }, r.unbindEventsWide = function() {}, r.bindEventsSmall = function() {}, r.unbindEventsSmall = function() {}, r.setAria = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].setAttribute("aria-expanded", !1)
    }, r.enhanceJS = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-basic"), e[t].classList.add("mzp-is-enhanced")
    }, r.isSupported = function() {
      return "undefined" != typeof e.Supports && (e.Supports.matchMedia && e.Supports.classList)
    }, r.init = function(e) {
      if ("object" == typeof e)
        for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
      r.isSupported() && (r.handleState(), r.setAria(), r.enhanceJS())
    }, window.Mzp.Menu = r
  }(window.Mzp), void 0 === Mzp) Mzp = {};
if (function() {
    "use strict";
    var n, r = {},
      i = {
        onNavOpen: null,
        onNavClose: null
      };
    r.onClick = function(e) {}, r.setAria = function() {
      for (var e = 0; e < n.length; e++) n[e].setAttribute("aria-expanded", !1)
    }, r.bindEvents = function() {
      if (0 < (n = document.querySelectorAll(".mzp-c-navigation-items")).length) {
        for (var e = document.querySelectorAll(".mzp-c-navigation-menu-button"), t = 0; t < e.length; t++) e[t].addEventListener("click", r.onClick, !1);
        r.setAria()
      }
    }, r.init = function(e) {
      if ("object" == typeof e)
        for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
      r.bindEvents()
    }, window.Mzp.Navigation = r
  }(), function() {
    "use strict";
    if (void 0 !== Mzp && "undefined" != typeof Mzp.Menu && "undefined" != typeof Mzp.Navigation) {
      var i = "undefined" != typeof window.matchMedia;
      ! function e() {
        if ("undefined" == typeof Mozilla.Client) return !1;
        var t = document.querySelector(".mzp-c-navigation"),
          n = document.querySelector(".mzp-c-navigation .c-navigation-fxa-cta");
        if (!Mozilla.Client.isFirefoxDesktop || !t || !n) return !1;
        if (n) {
          var r = n.getAttribute("data-alt-href");
          Mozilla.Client.getFxaDetails(function(e) {})
        }
      }(), Mzp.Menu.init({
        onMenuOpen: function a(e) {}
      }), Mzp.Navigation.init()
    }

    function o(e) {}
  }(), void 0 === Mzp) Mzp = {};
if (function() {
    "use strict";
    var i = {
      switchPath: function(e, t) {},
      doRedirect: function(e) {},
      init: function(r) {
        for (var e = document.querySelectorAll(".mzp-js-language-switcher-select"), t = 0; t < e.length; t++) e[t].setAttribute("data-previous-language", e[t].value), e[t].addEventListener("change", function(e) {}, !1)
      }
    };
    window.Mzp.LangSwitcher = i
  }(), function() {
    "use strict";
    void 0 !== Mzp && "undefined" != typeof Mzp.LangSwitcher && Mzp.LangSwitcher.init(function(e, t) {})
  }(), void 0 === Mzp) Mzp = {};
! function(l, c) {
  "use strict";
  var f = {},
    d = 0;
  f.isSupported = function() {
    return "undefined" != typeof c.Supports && "undefined" != typeof c.Utils && c.Supports.classList
  }, f.open = function(e, t) {}, f.close = function(e, t) {}, f.toggle = function(e, t) {}, f.handleControlActivation = function(e, t) {}, f.initItem = function(e, t, n) {}, f.destroyItem = function(e) {}, f.init = function(e, t) {
    if (f.isSupported()) {
      void 0 === t && (t = {});
      for (var n = l.querySelectorAll(e), r = 0; r < n.length; r++) f.initItem(n[r], e, t)
    }
  }, f.destroy = function(e, t) {}, "undefined" != typeof c.Supports && (c.Supports.details || f.init("summary")), f.init(".mzp-c-details > h2"), f.init(".mzp-c-details > h3"), f.init(".mzp-c-details > h4"), f.init(".mzp-c-details > h5"), f.init(".mzp-c-details > h6"), c.Details = f
}(document, window.Mzp),
function() {
  "use strict";
  if ("undefined" != typeof window.Mzp) {
    var t = window.Mzp,
      n = ".mzp-c-footer-sections .mzp-c-footer-heading";
    if ("undefined" != typeof t.Supports && "undefined" != typeof t.Details && t.Supports.matchMedia) {
      var e = matchMedia("(max-width: 479px)");
      e.matches && t.Details.init(n), e.addListener(function(e) {})
    }
  }
}(),
function(e) {
  "use strict";
  var n = !1,
    r = !1;

  function i() {
    e("html").addClass("loaded")
  }
  e(document).ready(function() {
    var e = Mozilla.Client,
      t = Mozilla.Utils;
    t.initMobileDownloadLinks(), e.isFirefoxDesktop && e.getFirefoxDetails(t.maybeSwitchToDistDownloadLinks), n && i(), r = !0
  }), e(window).on("load", function() {
    r && i(), n = !0
  })
}(window.jQuery), "undefined" == typeof window.Mozilla.Analytics && (window.Mozilla.Analytics = {}),
  function() {
    "use strict";
    var e = Mozilla.Analytics,
      t = "querySelector" in document && "querySelectorAll" in document;
    e.pageHasDownload = function() {
      return t && null !== document.querySelector("[data-download-os]") ? "true" : "false"
    }, e.pageHasVideo = function() {
      return t && (null !== document.querySelector("video") || null !== document.querySelector('iframe[src^="https://www.youtube"]')) ? "true" : "false"
    }, e.getPageVersion = function(e) {
      var t = e || document.location.pathname,
        n = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(t);
      return n ? n[1] : null
    }, e.getLatestFxVersion = function() {
      return document.getElementsByTagName("html")[0].getAttribute("data-latest-firefox")
    }, e.isWin10S = function(e) {
      if (!(-1 < (e = e || navigator.userAgent).indexOf("Edge"))) return !1;
      try {
        var t = JSON.parse(window.external.getHostEnvironmentValue("os-mode"));
        return !(!t || "2" !== t["os-mode"])
      } catch (n) {
        return !1
      }
    }, e.formatFxaDetails = function(e) {
      var t = {};
      if (!0 === e.firefox)
        if (e.mobile) t.FxASegment = "Firefox Mobile";
        else if (e.setup) {
        t.FxALogin = !0, t.FxASegment = "Logged in", !0 === e.legacy && (t.FxASegment = "Legacy Firefox");
        var n = !1,
          r = !1,
          i = !1;
        0 < e.mobileDevices ? n = t.FxAMobileSync = !0 : 0 === e.mobileDevices ? t.FxAMobileSync = !1 : t.FxAMobileSync = "unknown", 1 < e.desktopDevices ? i = t.FxAMultiDesktopSync = !0 : 1 === e.desktopDevices ? r = !(t.FxAMultiDesktopSync = !1) : 0 === e.desktopDevices ? t.FxAMultiDesktopSync = !1 : t.FxAMultiDesktopSync = "unknown", i && n ? t.FxASegment = "Multi-Desktop and Mobile Sync" : r && n ? t.FxASegment = "Desktop and Mobile Sync" : i && (t.FxASegment = "Multi-Desktop Sync")
      } else !0 === e.legacy ? (t.FxASegment = "Legacy Firefox", t.FxALogin = "unknown") : (t.FxASegment = "Not logged in", t.FxALogin = !1);
      else t.FxASegment = "Not Firefox";
      return t
    }, e.updateDataLayerPush = function(e) {
      var o = window.dataLayer = window.dataLayer || [],
        a = e || document.location.hostname;
      o.defaultPush = o.push, o.push = function() {
        for (var e = 0; e < arguments.length; e++)
          if ("gtm.linkClick" === arguments[e].event) {
            var t = arguments[e]["gtm.element"],
              n = t.href;
            if (t.hostname === a) {
              var r = n.replace(/^(?:https?\:\/\/)(?:[^\/])*/, ""),
                i = r.match(/^(\/\w{2}\-\w{2}\/|\/\w{2,3}\/)/);
              r = i ? r.replace(i[0], "/") : r, arguments[e].newClickHref = r
            } else arguments[e].newClickHref = n;
            o.defaultPush(arguments[e])
          } else o.defaultPush(arguments[e])
      }
    }
  }(), $(function() {
    "use strict";
    var n = Mozilla.Analytics,
      e = Mozilla.Client,
      r = window.dataLayer = window.dataLayer || [],
      i = !1,
      o = !1;

    function t() {
      i && o && ! function t() {
        var e = {
          event: "core-datalayer-loaded",
          pageHasDownload: n.pageHasDownload(),
          pageHasVideo: n.pageHasVideo(),
          pageVersion: n.getPageVersion(),
          testPilotUser: "testpilotAddon" in navigator ? "true" : "false",
          releaseWindowVersion: n.getLatestFxVersion(),
          win10SUser: n.isWin10S()
        };
        r.push(e)
      }()
    }
    e.getFxaDetails(function(e) {
      r.push(n.formatFxaDetails(e)), o = !0, t()
    }), e.isFirefoxDesktop || e.isFirefoxAndroid ? e.getFirefoxDetails(function(e) {}) : (i = !0, t()), n.updateDataLayerPush()
  }),
  function() {
    "use strict";
    var t = function(e) {
      e = e || location.search || "", this.params = t.queryStringToObject(e)
    };
    t.objectToQueryString = function(e) {}, t.queryStringToObject = function(e) {
      var t = {};
      e = (e = e.match(/^\??(.*)/)[1]) ? e.split(/[&;]/m) : [];
      for (var n = 0; n < e.length; n++) {
        var r = e[n].split("="),
          i = r[0],
          o = r[1];
        t[i] = isNaN(o) ? o : parseFloat(o)
      }
      return t
    }, t.prototype.get = function(e) {}, t.prototype.set = function(e, t) {}, t.prototype.has = function(e) {}, t.prototype.remove = function(e) {}, t.prototype.toString = function() {}, t.prototype.utmParams = function() {
      var e = {},
        t = this.params;
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 === n.indexOf("utm_") && (e[n] = t[n]);
      return e
    }, t.prototype.utmParamsFxA = function(e) {}, window._SearchParams = t
  }(), "undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function() {
    "use strict";
    var u = {},
      e = (new window._SearchParams).utmParams();
    u.getAttributionData = function(e) {
      for (var t = /^[\w/.%-]+$/, n = {}, r = ["utm_source", "utm_campaign", "utm_content", "utm_term", "utm_medium"], i = 0; i < r.length; i++) {
        var o = r[i];
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = decodeURIComponent(e[o]);
          t.test(a) && (n[o] = a)
        }
      }
      return Object.prototype.hasOwnProperty.call(n, "utm_source") && Object.prototype.hasOwnProperty.call(n, "utm_campaign") ? n : null
    }, u.appendToDownloadURL = function(e, t) {}, u.getAttributionData.init = function(e) {
      var t = u.getAttributionData(e),
        n = document.getElementsByClassName("js-fxa-cta-link");
      if (t && "function" == typeof Object.assign)
        for (var r = 0; r < n.length; r++) {
          var i = n[r].hasAttribute("href") ? n[r].href : null;
          if (i && (0 === i.indexOf("https://accounts.firefox.com") || 0 === i.indexOf("https://latest.dev.lcip.org"))) {
            var o = n[r].getAttribute("data-mozillaonline-link"),
              a = u.appendToDownloadURL(i, t);
            if (n[r].href = a, o) {
              var s = u.appendToDownloadURL(o, t);
              n[r].setAttribute("data-mozillaonline-link", s)
            }
          }
        }
    }, u.getAttributionData.init(e), window.Mozilla.UtmUrl = u
  }();