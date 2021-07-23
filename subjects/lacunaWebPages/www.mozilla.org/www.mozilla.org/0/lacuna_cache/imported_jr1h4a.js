if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
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

    function b(e, t, n) {
      var r, i, o = (n = n || C).createElement("script");
      if (o.text = e, t)
        for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o)
    }

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
      toArray: function() {
        return s.call(this)
      },
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
      slice: function() {
        return this.pushStack(s.apply(this, arguments))
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
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l))
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e, t) {
        b(e, {
          nonce: t && t.nonce
        })
      },
      each: function(e, t) {
        var n, r = 0;
        if (p(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(d, "")
      },
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
      grep: function(e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
        return r
      },
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
      function f(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function i() {
        S()
      }
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
        P = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
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
        oe = function(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        ae = be(function(e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        O.apply(t = z.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
      } catch (e) {
        O = {
          apply: t.length ? function(e, t) {
            q.apply(e, z.call(t))
          } : function(e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];);
            e.length = n - 1
          }
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
        return function r(e, t) {
          return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
        }
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

      function de(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function pe(t) {
        return function(e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }

      function he(n) {
        return function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n
        }
      }

      function me(t) {
        return function(e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
      }

      function ge(a) {
        return le(function(o) {
          return o = +o, le(function(e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
          })
        })
      }

      function ve(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }
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
          }), p.getById ? (b.filter.ID = function(e) {
            var t = e.replace(re, f);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }, b.find.ID = function(e, t) {
            if ("undefined" != typeof t.getElementById && C) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (b.filter.ID = function(e) {
            var n = e.replace(re, f);
            return function(e) {
              var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
              return t && t.value === n
            }
          }, b.find.ID = function(e, t) {
            if ("undefined" != typeof t.getElementById && C) {
              var n, r, i, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" !== e) return o;
            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
            return r
          }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
          }, c = [], g = [], (p.qsa = ee.test(T.querySelectorAll)) && (ce(function(e) {
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
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, j = t ? function(e, t) {
            if (e === t) return l = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === x && y(x, e) ? -1 : t === T || t.ownerDocument === x && y(x, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return l = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];
            if (!i || !o) return e === T ? -1 : t === T ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
            if (i === o) return de(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) s.unshift(n);
            for (; a[r] === s[r];) r++;
            return r ? de(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
          }), T
        }, se.matches = function(e, t) {
          return se(e, null, null, t)
        }, se.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== T && S(e), p.matchesSelector && C && !N[t + " "] && (!c || !c.test(t)) && (!g || !g.test(t))) try {
            var n = v.call(e, t);
            if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {
            N(t, !0)
          }
          return 0 < se(t, T, null, [e]).length
        }, se.contains = function(e, t) {
          return (e.ownerDocument || e) !== T && S(e), y(e, t)
        }, se.attr = function(e, t) {
          (e.ownerDocument || e) !== T && S(e);
          var n = b.attrHandle[t.toLowerCase()],
            r = n && M.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
          return void 0 !== r ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function(e) {
          return (e + "").replace(ie, oe)
        }, se.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            i = 0;
          if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(j), l) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) e.splice(n[r], 1)
          }
          return u = null, e
        }, o = se.getText = function(e) {
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
        }, (b = se.selectors = {
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
            ATTR: function(e) {
              return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(re, f).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function(e) {
                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(n, r, i) {
              return function(e) {
                var t = se.attr(e, n);
                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function(h, e, t, m, g) {
              var v = "nth" !== h.slice(0, 3),
                y = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === m && 0 === g ? function(e) {
                return !!e.parentNode
              } : function(e, t, n) {
                var r, i, o, a, s, u, l = v != y ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  d = !n && !x,
                  p = !1;
                if (c) {
                  if (v) {
                    for (; l;) {
                      for (a = e; a = a[l];)
                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                      u = l = "only" === h && !u && "nextSibling"
                    }
                    return !0
                  }
                  if (u = [y ? c.firstChild : c.lastChild], y && d) {
                    for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                      if (1 === a.nodeType && ++p && a === e) {
                        i[h] = [k, s, p];
                        break
                      }
                  } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === p)
                    for (;
                      (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, p]), a !== e)););
                  return (p -= g) === m || p % m == 0 && 0 <= p / m
                }
              }
            },
            PSEUDO: function(e, o) {
              var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                for (var n, r = a(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
              }) : function(e) {
                return a(e, 0, t)
              }) : a
            }
          },
          pseudos: {
            not: le(function(e) {
              var r = [],
                i = [],
                s = d(e.replace($, "$1"));
              return s[A] ? le(function(e, t, n, r) {
                for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
              }) : function(e, t, n) {
                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
              }
            }),
            has: le(function(t) {
              return function(e) {
                return 0 < se(t, e).length
              }
            }),
            contains: le(function(t) {
              return t = t.replace(re, f),
                function(e) {
                  return -1 < (e.textContent || o(e)).indexOf(t)
                }
            }),
            lang: le(function(n) {
              return G.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(),
                function(e) {
                  var t;
                  do {
                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
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
              return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: me(!1),
            disabled: me(!0),
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
              return Z.test(e.nodeName)
            },
            input: function(e) {
              return K.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: ge(function() {
              return [0]
            }),
            last: ge(function(e, t) {
              return [t - 1]
            }),
            eq: ge(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: ge(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: ge(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: ge(function(e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
              return e
            }),
            gt: ge(function(e, t, n) {
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
        }) b.pseudos[e] = pe(e);
      for (e in {
          submit: !0,
          reset: !0
        }) b.pseudos[e] = he(e);

      function ye() {}

      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
      }

      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          d = r++;
        return e.first ? function(e, t, n) {
          for (; e = e[u];)
            if (1 === e.nodeType || f) return s(e, t, n);
          return !1
        } : function(e, t, n) {
          var r, i, o, a = [k, d];
          if (n) {
            for (; e = e[u];)
              if ((1 === e.nodeType || f) && s(e, t, n)) return !0
          } else
            for (; e = e[u];)
              if (1 === e.nodeType || f)
                if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                else {
                  if ((r = i[c]) && r[0] === k && r[1] === d) return a[2] = r[2];
                  if ((i[c] = a)[2] = s(e, t, n)) return !0
                } return !1
        }
      }

      function we(i) {
        return 1 < i.length ? function(e, t, n) {
          for (var r = i.length; r--;)
            if (!i[r](e, t, n)) return !1;
          return !0
        } : i[0]
      }

      function Se(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
        return a
      }

      function Te(p, h, m, g, v, e) {
        return g && !g[A] && (g = Te(g)), v && !v[A] && (v = Te(v, e)), le(function(e, t, n, r) {
          var i, o, a, s = [],
            u = [],
            l = t.length,
            c = e || function(e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
              return n
            }(h || "*", n.nodeType ? [n] : n, []),
            f = !p || !e && h ? c : Se(c, s, p, n, r),
            d = m ? v || (e ? p : l || g) ? [] : t : f;
          if (m && m(f, d, n, r), g)
            for (i = Se(d, u), g(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          if (e) {
            if (v || p) {
              if (v) {
                for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                v(null, d = [], i, r)
              }
              for (o = d.length; o--;)(a = d[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
            }
          } else d = Se(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, r) : O.apply(t, d)
        })
      }

      function Ce(e) {
        for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
            return e === i
          }, a, !0), l = be(function(e) {
            return -1 < P(i, e)
          }, a, !0), c = [function(e, t, n) {
            var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
            return i = null, r
          }]; s < r; s++)
          if (t = b.relative[e[s].type]) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[A]) {
              for (n = ++s; n < r && !b.relative[e[n].type]; n++);
              return Te(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace($, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && xe(e))
            }
            c.push(t)
          } return we(c)
      }
      return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, h = se.tokenize = function(e, t) {
        var n, r, i, o, a, s, u, l = D[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (a = e, s = [], u = b.preFilter; a;) {
          for (o in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = V.exec(a)) && (n = r.shift(), i.push({
              value: n,
              type: r[0].replace($, " ")
            }), a = a.slice(n.length)), b.filter) !(r = Y[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
          if (!n) break
        }
        return t ? a.length : a ? se.error(e) : D(e, s).slice(0)
      }, d = se.compile = function(e, t) {
        var n, g, v, y, x, r, i = [],
          o = [],
          a = L[e + " "];
        if (!a) {
          for (n = (t = t || h(e)).length; n--;)(a = Ce(t[n]))[A] ? i.push(a) : o.push(a);
          (a = L(e, (g = o, y = 0 < (v = i).length, x = 0 < g.length, r = function(e, t, n, r, i) {
            var o, a, s, u = 0,
              l = "0",
              c = e && [],
              f = [],
              d = w,
              p = e || x && b.find.TAG("*", i),
              h = k += null == d ? 1 : Math.random() || .1,
              m = p.length;
            for (i && (w = t === T || t || i); l !== m && null != (o = p[l]); l++) {
              if (x && o) {
                for (a = 0, t || o.ownerDocument === T || (S(o), n = !C); s = g[a++];)
                  if (s(o, t || T, n)) {
                    r.push(o);
                    break
                  } i && (k = h)
              }
              y && ((o = !s && o) && u--, e && c.push(o))
            }
            if (u += l, y && l !== u) {
              for (a = 0; s = v[a++];) s(c, f, t, n);
              if (e) {
                if (0 < u)
                  for (; l--;) c[l] || f[l] || (f[l] = F.call(r));
                f = Se(f)
              }
              O.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
            }
            return i && (k = h, w = d), c
          }, y ? le(r) : r))).selector = e
        }
        return a
      }, m = se.select = function(e, t, n, r) {
        var i, o, a, s, u, l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
            if ((u = b.find[s]) && (r = u(a.matches[0].replace(re, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && xe(o))) return O.apply(n, r), n;
              break
            }
        }
        return (l || d(e, c))(r, t, !C, n, !t || ne.test(e) && ve(t.parentNode) || t), n
      }, p.sortStable = A.split("").sort(j).join("") === A, p.detectDuplicates = !!l, S(), p.sortDetached = ce(function(e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
      }), ce(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || fe("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), p.attributes && ce(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || fe("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), ce(function(e) {
        return null == e.getAttribute("disabled")
      }) || fe(H, function(e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), se
    }(T);
    A.find = h, A.expr = h.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = h.uniqueSort, A.text = h.getText, A.isXMLDoc = h.isXML, A.contains = h.contains, A.escapeSelector = h.escape;

    function S(e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && A(e).is(n)) break;
          r.push(e)
        } return r
    }

    function k(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
    var E = A.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, r) {
      return x(n) ? A.grep(e, function(e, t) {
        return !!n.call(e, t, e) !== r
      }) : n.nodeType ? A.grep(e, function(e) {
        return e === n !== r
      }) : "string" != typeof n ? A.grep(e, function(e) {
        return -1 < i.call(n, e) !== r
      }) : A.filter(n, e, r)
    }
    A.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, A.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(A(e).filter(function() {
          for (t = 0; t < r; t++)
            if (A.contains(i[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
        return 1 < r ? A.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(N(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(N(this, e || [], !0))
      },
      is: function(e) {
        return !!N(this, "string" == typeof e && E.test(e) ? A(e) : e || [], !1).length
      }
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

    function O(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    A.fn.extend({
      has: function(e) {
        var t = A(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (A.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && A(e);
        if (!E.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
                o.push(n);
                break
              } return this.pushStack(1 < o.length ? A.uniqueSort(o) : o)
      },
      index: function(e) {
        return e ? "string" == typeof e ? i.call(A(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), A.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return S(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return S(e, "parentNode", n)
      },
      next: function(e) {
        return O(e, "nextSibling")
      },
      prev: function(e) {
        return O(e, "previousSibling")
      },
      nextAll: function(e) {
        return S(e, "nextSibling")
      },
      prevAll: function(e) {
        return S(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return S(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return S(e, "previousSibling", n)
      },
      siblings: function(e) {
        return k((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return k(e.firstChild)
      },
      contents: function(e) {
        return "undefined" != typeof e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), A.merge([], e.childNodes))
      }
    }, function(r, i) {
      A.fn[r] = function(e, t) {
        var n = A.map(this, i, e);
        return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = A.filter(t, n)), 1 < this.length && (q[r] || A.uniqueSort(n), F.test(r) && n.reverse()), this.pushStack(n)
      }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function P(e) {
      return e
    }

    function H(e) {
      throw e
    }

    function I(e, t, n, r) {
      var i;
      try {
        e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
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
          remove: function() {
            return A.each(arguments, function(e, t) {
              for (var n; - 1 < (n = A.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
            }), this
          },
          has: function(e) {
            return e ? -1 < A.inArray(e, u) : 0 < u.length
          },
          empty: function() {
            return u = u && [], this
          },
          disable: function() {
            return s = l = [], u = t = "", this
          },
          disabled: function() {
            return !u
          },
          lock: function() {
            return s = l = [], t || o || (u = t = ""), this
          },
          locked: function() {
            return !!s
          },
          fireWith: function(e, t) {
            return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
          },
          fire: function() {
            return f.fireWith(this, arguments), this
          },
          fired: function() {
            return !!a
          }
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
            state: function() {
              return i
            },
            always: function() {
              return s.done(arguments).fail(arguments), this
            },
            "catch": function(e) {
              return a.then(null, e)
            },
            pipe: function() {
              var i = arguments;
              return A.Deferred(function(r) {
                A.each(o, function(e, t) {
                  var n = x(i[t[4]]) && i[t[4]];
                  s[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                  })
                }), i = null
              }).promise()
            },
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
          }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
          }, s[t[0] + "With"] = n.fireWith
        }), a.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
        function t(t) {
          return function(e) {
            i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o)
          }
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = A.Deferred();
        if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || x(o[r] && o[r].then))) return a.then();
        for (; r--;) I(o[r], t(r), a.reject);
        return a.promise()
      }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    A.Deferred.exceptionHook = function(e, t) {
      T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, A.readyException = function(e) {
      T.setTimeout(function() {
        throw e
      })
    };
    var _ = A.Deferred();

    function W() {
      C.removeEventListener("DOMContentLoaded", W), T.removeEventListener("load", W), A.ready()
    }
    A.fn.ready = function(e) {
      return _.then(e)["catch"](function(e) {
        A.readyException(e)
      }), this
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
        else if (void 0 !== r && (i = !0, x(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
            return l.call(A(e), n)
          })), t))
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      $ = /^-ms-/,
      U = /-([a-z])/g;

    function V(e, t) {
      return t.toUpperCase()
    }

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
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(z) || []).length;
            for (; n--;) delete r[t[n]]
          }
          void 0 !== t && !A.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !A.isEmptyObject(t)
      }
    };
    var Y = new G,
      J = new G,
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

    function ee(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try {
            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
          } catch (e) {}
          J.set(e, t, n)
        } else n = void 0;
      return n
    }
    A.extend({
      hasData: function(e) {
        return J.hasData(e) || Y.hasData(e)
      },
      data: function(e, t, n) {
        return J.access(e, t, n)
      },
      removeData: function(e, t) {
        J.remove(e, t)
      },
      _data: function(e, t, n) {
        return Y.access(e, t, n)
      },
      _removeData: function(e, t) {
        Y.remove(e, t)
      }
    }), A.fn.extend({
      data: function(n, e) {
        var t, r, i, o = this[0],
          a = o && o.attributes;
        if (void 0 !== n) return "object" == typeof n ? this.each(function() {
          J.set(this, n)
        }) : B(this, function(e) {
          var t;
          if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
          this.each(function() {
            J.set(this, n, e)
          })
        }, null, e, 1 < arguments.length, null, !0);
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), ee(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0)
        }
        return i
      },
      removeData: function(e) {
        return this.each(function() {
          J.remove(this, e)
        })
      }
    }), A.extend({
      queue: function(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, A.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = A.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = A._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
          A.dequeue(e, t)
        }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Y.get(e, n) || Y.access(e, n, {
          empty: A.Callbacks("once memory").add(function() {
            Y.remove(e, [t + "queue", n])
          })
        })
      }
    }), A.fn.extend({
      queue: function(t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? A.queue(this[0], t) : void 0 === n ? this : this.each(function() {
          var e = A.queue(this, t, n);
          A._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && A.dequeue(this, t)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          A.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        function n() {
          --i || o.resolveWith(a, [a])
        }
        var r, i = 1,
          o = A.Deferred(),
          a = this,
          s = this.length;
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = Y.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
        return n(), o.promise(t)
      }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = C.documentElement,
      oe = function(e) {
        return A.contains(e.ownerDocument, e)
      },
      ae = {
        composed: !0
      };
    ie.getRootNode && (oe = function(e) {
      return A.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });

    function se(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === A.css(e, "display")
    }

    function ue(e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
      return i
    }

    function le(e, t, n, r) {
      var i, o, a = 20,
        s = r ? function() {
          return r.cur()
        } : function() {
          return A.css(e, t, "")
        },
        u = s(),
        l = n && n[3] || (A.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (A.cssNumber[t] || "px" !== l && +u) && ne.exec(A.css(e, t));
      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; a--;) A.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
        c *= 2, A.style(e, t, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = A.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e
    }
    A.fn.extend({
      show: function() {
        return fe(this, !0)
      },
      hide: function() {
        return fe(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          se(this) ? A(this).show() : A(this).hide()
        })
      }
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

    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
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

    function Ae() {
      return !0
    }

    function ke() {
      return !1
    }

    function Ee(e, t) {
      return e === function() {
        try {
          return C.activeElement
        } catch (e) {}
      }() == ("focus" === t)
    }

    function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
        return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) {
        return A().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = A.guid++)), e.each(function() {
        A.event.add(this, t, i, r, n)
      })
    }

    function Le(e, i, o) {
      o ? (Y.set(e, i, !1), A.event.add(e, i, {
        namespace: !1,
        handler: function(e) {
          var t, n, r = Y.get(this, i);
          if (1 & e.isTrigger && this[i]) {
            if (r.length)(A.event.special[i] || {}).delegateType && e.stopPropagation();
            else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
          } else r.length && (Y.set(this, i, {
            value: A.event.trigger(A.extend(r[0], A.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation())
        }
      })) : void 0 === Y.get(e, i) && A.event.add(e, i, Ae)
    }
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
      remove: function(e, t, n, r, i) {
        var o, a, s, u, l, c, f, d, p, h, m, g = Y.hasData(e) && Y.get(e);
        if (g && (u = g.events)) {
          for (l = (t = (t || "").match(z) || [""]).length; l--;)
            if (p = m = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
              for (f = A.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
              a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || A.removeEvent(e, p, g.handle), delete u[p])
            } else
              for (p in u) A.event.remove(e, p + t[l], n, r, !0);
          A.isEmptyObject(u) && Y.remove(e, "handle events")
        }
      },
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
          get: x(e) ? function() {
            if (this.originalEvent) return e(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[t]
          },
          set: function(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            })
          }
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
          trigger: function(e) {
            var t = this || e;
            return de.test(t.type) && t.click && D(t, "input") && Le(t, "click"), !0
          },
          _default: function(e) {
            var t = e.target;
            return de.test(t.type) && t.click && D(t, "input") && Y.get(t, "click") || D(t, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, A.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, A.Event = function(e, t) {
      if (!(this instanceof A.Event)) return new A.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && A.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[A.expando] = !0
    }, A.Event.prototype = {
      constructor: A.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
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
      which: function(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, A.event.addProp), A.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      A.event.special[e] = {
        setup: function() {
          return Le(this, e, Ee), !1
        },
        trigger: function() {
          return Le(this, e), !0
        },
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
        handle: function(e) {
          var t, n = e.relatedTarget,
            r = e.handleObj;
          return n && (n === this || A.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
        }
      }
    }), A.fn.extend({
      on: function(e, t, n, r) {
        return De(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
        return De(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
          A.event.remove(this, e, n, t)
        });
        for (i in e) this.off(i, t, e[i]);
        return this
      }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      je = /<script|<style|<link/i,
      Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
    }

    function Oe(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ze(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

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
      if (h || 1 < f && "string" == typeof p && !y.checkClone && Me.test(p)) return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), He(t, r, i, o)
      });
      if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (s = (a = A.map(ge(e, "script"), Oe)).length; c < f; c++) u = e, c !== d && (u = A.clone(u, !0, !0), s && A.merge(a, ge(u, "script"))), i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, A.map(a, ze), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && A.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? A._evalUrl && !u.noModule && A._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }) : b(u.textContent.replace(Fe, ""), u, l))
      }
      return n
    }

    function Ie(e, t, n) {
      for (var r, i = t ? A.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || A.cleanData(ge(r)), r.parentNode && (n && oe(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
      return e
    }
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
      detach: function(e) {
        return Ie(this, e, !0)
      },
      remove: function(e) {
        return Ie(this, e)
      },
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
      prepend: function() {
        return He(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return He(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return He(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (A.cleanData(ge(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return A.clone(this, e, t)
        })
      },
      html: function(e) {
        return B(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !je.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = A.htmlPrefilter(e);
            try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (A.cleanData(ge(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var n = [];
        return He(this, arguments, function(e) {
          var t = this.parentNode;
          A.inArray(this, n) < 0 && (A.cleanData(ge(this)), t && t.replaceChild(e, this))
        }, n)
      }
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
      Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T), t.getComputedStyle(e)
      },
      Ge = new RegExp(re.join("|"), "i");

    function Ye(e, t, n) {
      var r, i, o, a, s = e.style;
      return (n = n || Qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = A.style(e, t)), !y.pixelBoxStyles() && Xe.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Je(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }

    function Ke() {
      if (Ve) {
        Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ve.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Ue).appendChild(Ve);
        var e = T.getComputedStyle(Ve);
        Re = "1%" !== e.top, $e = 12 === Ze(e.marginLeft), Ve.style.right = "60%", Be = 36 === Ze(e.right), _e = 36 === Ze(e.width), Ve.style.position = "absolute", We = 12 === Ze(Ve.offsetWidth / 3), ie.removeChild(Ue), Ve = null
      }
    }

    function Ze(e) {
      return Math.round(parseFloat(e))
    }
    Ue = C.createElement("div"), (Ve = C.createElement("div")).style && (Ve.style.backgroundClip = "content-box", Ve.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ve.style.backgroundClip, A.extend(y, {
      boxSizingReliable: function() {
        return Ke(), _e
      },
      pixelBoxStyles: function() {
        return Ke(), Be
      },
      pixelPosition: function() {
        return Ke(), Re
      },
      reliableMarginLeft: function() {
        return Ke(), $e
      },
      scrollboxSize: function() {
        return Ke(), We
      }
    }));
    var et = ["Webkit", "Moz", "ms"],
      tt = C.createElement("div").style,
      nt = {};

    function rt(e) {
      return A.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
          if ((e = et[n] + t) in tt) return e
      }(e) || e)
    }
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

    function ut(e, t, n) {
      var r = ne.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function lt(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += A.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= A.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= A.css(e, "border" + re[a] + "Width", !0, i))) : (u += A.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += A.css(e, "border" + re[a] + "Width", !0, i) : s += A.css(e, "border" + re[a] + "Width", !0, i));
      return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function ct(e, t, n) {
      var r = Qe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === A.css(e, "boxSizing", !1, r),
        o = i,
        a = Ye(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Xe.test(a)) {
        if (!n) return a;
        a = "auto"
      }
      return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === A.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === A.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + lt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function ft(e, t, n, r, i) {
      return new ft.prototype.init(e, t, n, r, i)
    }
    A.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = Ye(e, "opacity");
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
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, a, s = X(t),
            u = ot.test(t),
            l = e.style;
          if (u || (t = rt(s)), a = A.cssHooks[t] || A.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" == (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (A.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
        }
      },
      css: function(e, t, n, r) {
        var i, o, a, s = X(t);
        return ot.test(t) || (t = rt(s)), (a = A.cssHooks[t] || A.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ye(e, t, r)), "normal" === i && t in st && (i = st[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), A.each(["height", "width"], function(e, u) {
      A.cssHooks[u] = {
        get: function(e, t, n) {
          if (t) return !it.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, u, n) : ue(e, at, function() {
            return ct(e, u, n)
          })
        },
        set: function(e, t, n) {
          var r, i = Qe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === A.css(e, "boxSizing", !1, i),
            s = n ? lt(e, u, n, a, i) : 0;
          return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - lt(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = A.css(e, u)), ut(0, t, s)
        }
      }
    }), A.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), A.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(i, o) {
      A.cssHooks[i + o] = {
        expand: function(e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n
        }
      }, "margin" !== i && (A.cssHooks[i + o].set = ut)
    }), A.fn.extend({
      css: function(e, t) {
        return B(this, function(e, t, n) {
          var r, i, o = {},
            a = 0;
          if (Array.isArray(t)) {
            for (r = Qe(e), i = t.length; a < i; a++) o[t[a]] = A.css(e, t[a], !1, r);
            return o
          }
          return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
        }, e, t, 1 < arguments.length)
      }
    }), ((A.Tween = ft).prototype = {
      constructor: ft,
      init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || A.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (A.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = ft.propHooks[this.prop];
        return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = ft.propHooks[this.prop];
        return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this
      }
    }).init.prototype = ft.prototype, (ft.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !A.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = ft.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, A.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, A.fx = ft.prototype.init, A.fx.step = {};
    var dt, pt, ht, mt, gt = /^(?:toggle|show|hide)$/,
      vt = /queueHooks$/;

    function yt() {
      pt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(yt) : T.setTimeout(yt, A.fx.interval), A.fx.tick())
    }

    function xt() {
      return T.setTimeout(function() {
        dt = void 0
      }), dt = Date.now()
    }

    function bt(e, t) {
      var n, r = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function wt(e, t, n) {
      for (var r, i = (St.tweeners[t] || []).concat(St.tweeners["*"]), o = 0, a = i.length; o < a; o++)
        if (r = i[o].call(n, t, e)) return r
    }

    function St(o, e, t) {
      var n, a, r = 0,
        i = St.prefilters.length,
        s = A.Deferred().always(function() {
          delete u.elem
        }),
        u = function() {
          if (a) return !1;
          for (var e = dt || xt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
          return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        },
        l = s.promise({
          elem: o,
          props: A.extend({}, e),
          opts: A.extend(!0, {
            specialEasing: {},
            easing: A.easing._default
          }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: dt || xt(),
          duration: t.duration,
          tweens: [],
          createTween: function(e, t) {
            var n = A.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(n), n
          },
          stop: function(e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
          }
        }),
        c = l.props;
      for (function(e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = A.cssHooks[r]) && "expand" in a)
              for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
        if (n = St.prefilters[r].call(l, o, c, l.opts)) return x(n.stop) && (A._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
      return A.map(c, wt, l), x(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), A.fx.timer(A.extend(u, {
        elem: o,
        anim: l,
        queue: l.opts.queue
      })), l
    }
    A.Animation = A.extend(St, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        for (var n, r = 0, i = (e = x(e) ? (t = e, ["*"]) : e.match(z)).length; r < i; r++) n = e[r], St.tweeners[n] = St.tweeners[n] || [], St.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
          d = this,
          p = {},
          h = e.style,
          m = e.nodeType && se(e),
          g = Y.get(e, "fxshow");
        for (r in n.queue || (null == (a = A._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
          }), a.unqueued++, d.always(function() {
            d.always(function() {
              a.unqueued--, A.queue(e, "fx").length || a.empty.fire()
            })
          })), t)
          if (i = t[r], gt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              m = !0
            }
            p[r] = g && g[r] || A.style(e, r)
          } if ((u = !A.isEmptyObject(t)) || !A.isEmptyObject(p))
          for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = Y.get(e, "display")), "none" === (c = A.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = A.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === A.css(e, "float") && (u || (d.done(function() {
              h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
            display: l
          }), o && (g.hidden = !m), m && fe([e], !0), d.done(function() {
            for (r in m || fe([e]), Y.remove(e, "fxshow"), p) A.style(e, r, p[r])
          })), u = wt(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
      }],
      prefilter: function(e, t) {
        t ? St.prefilters.unshift(e) : St.prefilters.push(e)
      }
    }), A.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? A.extend({}, e) : {
        complete: n || !n && t || x(e) && e,
        duration: e,
        easing: n && t || t && !x(t) && t
      };
      return A.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        x(r.old) && r.old.call(this), r.queue && A.dequeue(this, r.queue)
      }, r
    }, A.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(se).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(t, e, n, r) {
        function i() {
          var e = St(this, A.extend({}, t), a);
          (o || Y.get(this, "finish")) && e.stop(!0)
        }
        var o = A.isEmptyObject(t),
          a = A.speed(e, n, r);
        return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
      },
      stop: function(i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o)
        }
        return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
          var e = !0,
            t = null != i && i + "queueHooks",
            n = A.timers,
            r = Y.get(this);
          if (t) r[t] && r[t].stop && a(r[t]);
          else
            for (t in r) r[t] && r[t].stop && vt.test(t) && a(r[t]);
          for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
          !e && o || A.dequeue(this, i)
        })
      },
      finish: function(a) {
        return !1 !== a && (a = a || "fx"), this.each(function() {
          var e, t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = A.timers,
            o = n ? n.length : 0;
          for (t.finish = !0, A.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
          for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
          delete t.finish
        })
      }
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
      A.fn[e] = function(e, t, n) {
        return this.animate(r, e, t, n)
      }
    }), A.timers = [], A.fx.tick = function() {
      var e, t = 0,
        n = A.timers;
      for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || A.fx.stop(), dt = void 0
    }, A.fx.timer = function(e) {
      A.timers.push(e), A.fx.start()
    }, A.fx.interval = 13, A.fx.start = function() {
      pt || (pt = !0, yt())
    }, A.fx.stop = function() {
      pt = null
    }, A.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, A.fn.delay = function(r, e) {
      return r = A.fx && A.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
        var n = T.setTimeout(e, r);
        t.stop = function() {
          T.clearTimeout(n)
        }
      })
    }, ht = C.createElement("input"), mt = C.createElement("select").appendChild(C.createElement("option")), ht.type = "checkbox", y.checkOn = "" !== ht.value, y.optSelected = mt.selected, (ht = C.createElement("input")).value = "t", ht.type = "radio", y.radioValue = "t" === ht.value;
    var Tt, Ct = A.expr.attrHandle;
    A.fn.extend({
      attr: function(e, t) {
        return B(this, A.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
        return this.each(function() {
          A.removeAttr(this, e)
        })
      }
    }), A.extend({
      attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? A.prop(e, t, n) : (1 === o && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = A.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!y.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0,
          i = t && t.match(z);
        if (i && 1 === e.nodeType)
          for (; n = i[r++];) e.removeAttribute(n)
      }
    }), Tt = {
      set: function(e, t, n) {
        return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = Ct[t] || A.find.attr;
      Ct[t] = function(e, t, n) {
        var r, i, o = t.toLowerCase();
        return n || (i = Ct[o], Ct[o] = r, r = null != a(e, t, n) ? o : null, Ct[o] = i), r
      }
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
      prop: function(e, t) {
        return B(this, A.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[A.propFix[e] || e]
        })
      }
    }), A.extend({
      prop: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && A.isXMLDoc(e) || (t = A.propFix[t] || t, i = A.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = A.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : At.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), y.optSelected || (A.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      A.propFix[this.toLowerCase()] = this
    }), A.fn.extend({
      addClass: function(t) {
        var e, n, r, i, o, a, s, u = 0;
        if (x(t)) return this.each(function(e) {
          A(this).addClass(t.call(this, e, Dt(this)))
        });
        if ((e = Lt(t)).length)
          for (; n = this[u++];)
            if (i = Dt(n), r = 1 === n.nodeType && " " + Et(i) + " ") {
              for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = Et(r)) && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(t) {
        var e, n, r, i, o, a, s, u = 0;
        if (x(t)) return this.each(function(e) {
          A(this).removeClass(t.call(this, e, Dt(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = Lt(t)).length)
          for (; n = this[u++];)
            if (i = Dt(n), r = 1 === n.nodeType && " " + Et(i) + " ") {
              for (a = 0; o = e[a++];)
                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
              i !== (s = Et(r)) && n.setAttribute("class", s)
            } return this
      },
      toggleClass: function(i, t) {
        var o = typeof i,
          a = "string" == o || Array.isArray(i);
        return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) {
          A(this).toggleClass(i.call(this, e, Dt(this), t), t)
        }) : this.each(function() {
          var e, t, n, r;
          if (a)
            for (t = 0, n = A(this), r = Lt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          else void 0 !== i && "boolean" != o || ((e = Dt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
          if (1 === n.nodeType && -1 < (" " + Et(Dt(n)) + " ").indexOf(t)) return !0;
        return !1
      }
    });
    var Nt = /\r/g;
    A.fn.extend({
      val: function(n) {
        var r, e, i, t = this[0];
        return arguments.length ? (i = x(n), this.each(function(e) {
          var t;
          1 === this.nodeType && (null == (t = i ? n.call(this, e, A(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = A.map(t, function(e) {
            return null == e ? "" : e + ""
          })), (r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
        })) : t ? (r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Nt, "") : null == e ? "" : e : void 0
      }
    }), A.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = A.find.attr(e, "value");
            return null != t ? t : Et(A.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, r, i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = A(n).val(), a) return t;
                s.push(t)
              } return s
          },
          set: function(e, t) {
            for (var n, r, i = e.options, o = A.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < A.inArray(A.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), A.each(["radio", "checkbox"], function() {
      A.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = -1 < A.inArray(A(e).val(), t)
        }
      }, y.checkOn || (A.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), y.focusin = "onfocusin" in T;

    function jt(e) {
      e.stopPropagation()
    }
    var Mt = /^(?:focusinfocus|focusoutblur)$/;
    A.extend(A.event, {
      trigger: function(e, t, n, r) {
        var i, o, a, s, u, l, c, f, d = [n || C],
          p = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(p + A.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[A.expando] ? e : new A.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : A.makeArray(t, [e]), c = A.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !m(n)) {
            for (s = c.delegateType || p, Mt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
            a === (n.ownerDocument || C) && d.push(a.defaultView || a.parentWindow || T)
          }
          for (i = 0;
            (o = d[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && Q(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Q(n) || u && x(n[p]) && !m(n) && ((a = n[u]) && (n[u] = null), A.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, jt), n[p](), e.isPropagationStopped() && f.removeEventListener(p, jt), A.event.triggered = void 0, a && (n[u] = a)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = A.extend(new A.Event, n, {
          type: e,
          isSimulated: !0
        });
        A.event.trigger(r, null, t)
      }
    }), A.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          A.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return A.event.trigger(e, t, n, !0)
      }
    }), y.focusin || A.each({
      focus: "focusin",
      blur: "focusout"
    }, function(n, r) {
      function i(e) {
        A.event.simulate(r, e.target, A.event.fix(e))
      }
      A.event.special[r] = {
        setup: function() {
          var e = this.ownerDocument || this,
            t = Y.access(e, r);
          t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
        },
        teardown: function() {
          var e = this.ownerDocument || this,
            t = Y.access(e, r) - 1;
          t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
        }
      }
    });
    var Ft = T.location,
      qt = Date.now(),
      Ot = /\?/;
    A.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new T.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || A.error("Invalid XML: " + e), t
    };
    var zt = /\[\]$/,
      Pt = /\r?\n/g,
      Ht = /^(?:submit|button|image|reset|file)$/i,
      It = /^(?:input|select|textarea|keygen)/i;

    function Rt(n, e, r, i) {
      var t;
      if (Array.isArray(e)) A.each(e, function(e, t) {
        r || zt.test(n) ? i(n, t) : Rt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
      });
      else if (r || "object" !== w(e)) i(n, e);
      else
        for (t in e) Rt(n + "[" + t + "]", e[t], r, i)
    }
    A.param = function(e, t) {
      function n(e, t) {
        var n = x(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      }
      var r, i = [];
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !A.isPlainObject(e)) A.each(e, function() {
        n(this.name, this.value)
      });
      else
        for (r in e) Rt(r, e[r], t, n);
      return i.join("&")
    }, A.fn.extend({
      serialize: function() {
        return A.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = A.prop(this, "elements");
          return e ? A.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !A(this).is(":disabled") && It.test(this.nodeName) && !Ht.test(e) && (this.checked || !de.test(e))
        }).map(function(e, t) {
          var n = A(this).val();
          return null == n ? null : Array.isArray(n) ? A.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Pt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Pt, "\r\n")
          }
        }).get()
      }
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

    function Kt(t, i, o, a) {
      var s = {},
        u = t === Qt;

      function l(e) {
        var r;
        return s[e] = !0, A.each(t[e] || [], function(e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
        }), r
      }
      return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

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
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var c, f, d, n, p, r, h, m, i, o, g = A.ajaxSetup({}, t),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? A(v) : A.event,
          x = A.Deferred(),
          b = A.Callbacks("once memory"),
          w = g.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; t = $t.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = n[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function() {
              return h ? d : null
            },
            setRequestHeader: function(e, t) {
              return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == h && (g.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (h) S.always(e[S.status]);
                else
                  for (t in e) w[t] = [w[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this
            }
          };
        if (x.promise(S), g.url = ((e || g.url || Ft.href) + "").replace(Vt, Ft.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(z) || [""], null == g.crossDomain) {
          r = C.createElement("a");
          try {
            r.href = g.url, r.href = r.href, g.crossDomain = Yt.protocol + "//" + Yt.host != r.protocol + "//" + r.host
          } catch (e) {
            g.crossDomain = !0
          }
        }
        if (g.data && g.processData && "string" != typeof g.data && (g.data = A.param(g.data, g.traditional)), Kt(Xt, g, t, S), h) return S;
        for (i in (m = A.event && g.global) && 0 == A.active++ && A.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ut.test(g.type), f = g.url.replace(Wt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(_t, "+")) : (o = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (Ot.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Bt, "$1"), o = (Ot.test(f) ? "&" : "?") + "_=" + qt++ + o), g.url = f + o), g.ifModified && (A.lastModified[f] && S.setRequestHeader("If-Modified-Since", A.lastModified[f]), A.etag[f] && S.setRequestHeader("If-None-Match", A.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && S.setRequestHeader("Content-Type", g.contentType), S.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : g.accepts["*"]), g.headers) S.setRequestHeader(i, g.headers[i]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, S, g) || h)) return S.abort();
        if (u = "abort", b.add(g.complete), S.done(g.success), S.fail(g.error), c = Kt(Qt, g, t, S)) {
          if (S.readyState = 1, m && y.trigger("ajaxSend", [S, g]), h) return S;
          g.async && 0 < g.timeout && (p = T.setTimeout(function() {
            S.abort("timeout")
          }, g.timeout));
          try {
            h = !1, c.send(a, l)
          } catch (e) {
            if (h) throw e;
            l(-1, e)
          }
        } else l(-1, "No Transport");

        function l(e, t, n, r) {
          var i, o, a, s, u, l = t;
          h || (h = !0, p && T.clearTimeout(p), c = void 0, d = r || "", S.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
              "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in s)
                if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break
                } if (u[0] in n) o = u[0];
            else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
                }
                a = a || i
              }
              o = o || a
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
          }(g, S, n)), s = function(e, t, n, r) {
            var i, o, a, s, u, l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                    break
                  } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                  t = a(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(g, s, S, i), i ? (g.ifModified && ((u = S.getResponseHeader("Last-Modified")) && (A.lastModified[f] = u), (u = S.getResponseHeader("etag")) && (A.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, S]) : x.rejectWith(v, [S, l, a]), S.statusCode(w), w = void 0, m && y.trigger(i ? "ajaxSuccess" : "ajaxError", [S, g, i ? o : a]), b.fireWith(v, [S, l]), m && (y.trigger("ajaxComplete", [S, g]), --A.active || A.event.trigger("ajaxStop")))
        }
        return S
      },
      getJSON: function(e, t, n) {
        return A.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return A.get(e, void 0, t, "script")
      }
    }), A.each(["get", "post"], function(e, i) {
      A[i] = function(e, t, n, r) {
        return x(t) && (r = r || n, n = t, t = void 0), A.ajax(A.extend({
          url: e,
          type: i,
          dataType: r,
          data: t,
          success: n
        }, A.isPlainObject(e) && e))
      }
    }), A._evalUrl = function(e, t) {
      return A.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function() {}
        },
        dataFilter: function(e) {
          A.globalEval(e, t)
        }
      })
    }, A.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (x(e) && (e = e.call(this[0])), t = A(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(n) {
        return x(n) ? this.each(function(e) {
          A(this).wrapInner(n.call(this, e))
        }) : this.each(function() {
          var e = A(this),
            t = e.contents();
          t.length ? t.wrapAll(n) : e.append(n)
        })
      },
      wrap: function(t) {
        var n = x(t);
        return this.each(function(e) {
          A(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          A(this).replaceWith(this.childNodes)
        }), this
      }
    }), A.expr.pseudos.hidden = function(e) {
      return !A.expr.pseudos.visible(e)
    }, A.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, A.ajaxSettings.xhr = function() {
      try {
        return new T.XMLHttpRequest
      } catch (e) {}
    };
    var en = {
        0: 200,
        1223: 204
      },
      tn = A.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, A.ajaxTransport(function(i) {
      var o, a;
      if (y.cors || tn && !i.crossDomain) return {
        send: function(e, t) {
          var n, r = i.xhr();
          if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
            for (n in i.xhrFields) r[n] = i.xhrFields[n];
          for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
          o = function(e) {
            return function() {
              o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(en[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                binary: r.response
              } : {
                text: r.responseText
              }, r.getAllResponseHeaders()))
            }
          }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
            4 === r.readyState && T.setTimeout(function() {
              o && a()
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
      }
    }), A.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), A.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return A.globalEval(e), e
        }
      }
    }), A.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), A.ajaxTransport("script", function(n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs) return {
        send: function(e, t) {
          r = A("<script>").attr(n.scriptAttrs || {}).prop({
            charset: n.scriptCharset,
            src: n.url
          }).on("load error", i = function(e) {
            r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
          }), C.head.appendChild(r[0])
        },
        abort: function() {
          i && i()
        }
      }
    });
    var nn, rn = [],
      on = /(=)\?(?=&|$)|\?\?/;
    A.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = rn.pop() || A.expando + "_" + qt++;
        return this[e] = !0, e
      }
    }), A.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r, i, o, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(on, "$1" + r) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return o || A.error(r + " was not called"), o[0]
      }, e.dataTypes[0] = "json", i = T[r], T[r] = function() {
        o = arguments
      }, n.always(function() {
        void 0 === i ? A(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rn.push(r)), o && x(i) && i(o[0]), o = i = void 0
      }), "script"
    }), y.createHTMLDocument = ((nn = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), A.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && A(o).remove(), A.merge([], i.childNodes)));
      var r, i, o
    }, A.fn.load = function(e, t, n) {
      var r, i, o, a = this,
        s = e.indexOf(" ");
      return -1 < s && (r = Et(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && A.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        o = arguments, a.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
        a.each(function() {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
    }, A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      A.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), A.expr.pseudos.animated = function(t) {
      return A.grep(A.timers, function(e) {
        return t === e.elem
      }).length
    }, A.offset = {
      setOffset: function(e, t, n) {
        var r, i, o, a, s, u, l = A.css(e, "position"),
          c = A(e),
          f = {};
        "static" === l && (e.style.position = "relative"), s = c.offset(), o = A.css(e, "top"), u = A.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), x(t) && (t = t.call(e, n, A.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
      }
    }, A.fn.extend({
      offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
          A.offset.setOffset(this, t, e)
        });
        var e, n, r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === A.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position");) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && ((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0), i.left += A.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - i.top - A.css(r, "marginTop", !0),
            left: t.left - i.left - A.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === A.css(e, "position");) e = e.offsetParent;
          return e || ie
        })
      }
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
      A.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
        if (t) return t = Ye(e, n), Xe.test(t) ? A(e).position()[n] + "px" : t
      })
    }), A.each({
      Height: "height",
      Width: "width"
    }, function(a, s) {
      A.each({
        padding: "inner" + a,
        content: s,
        "": "outer" + a
      }, function(r, o) {
        A.fn[o] = function(e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return B(this, function(e, t, n) {
            var r;
            return m(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? A.css(e, t, i) : A.style(e, t, n, i)
          }, s, n ? e : void 0, n)
        }
      })
    }), A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
      A.fn[n] = function(e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
    }), A.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), A.fn.extend({
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
      }
    }), A.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = s.call(arguments, 2), (i = function() {
        return e.apply(t || this, r.concat(s.call(arguments)))
      }).guid = e.guid = e.guid || A.guid++, i
    }, A.holdReady = function(e) {
      e ? A.readyWait++ : A.ready(!0)
    }, A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = D, A.isFunction = x, A.isWindow = m, A.camelCase = X, A.type = w, A.now = Date.now, A.isNumeric = function(e) {
      var t = A.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return A
    });
    var an = T.jQuery,
      sn = T.$;
    return A.noConflict = function(e) {
      return T.$ === A && (T.$ = sn), e && T.jQuery === A && (T.jQuery = an), A
    }, e || (T.jQuery = T.$ = A), A
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
        maybeSwitchToDistDownloadLinks: function(e) {
          if (e.distribution && "default" !== e.distribution) {
            for (var t = e.distribution.toLowerCase(), n = document.querySelectorAll("a[data-" + t + "-link]"), r = document.querySelectorAll("img[data-" + t + "-link]"), i = 0; i < n.length; i++) {
              var o = n[i].getAttribute("data-" + t + "-link");
              n[i].setAttribute("href", o)
            }
            for (var a = 0; a < r.length; a++) {
              var s = r[a].getAttribute("data-" + t + "-link");
              r[a].setAttribute("src", s)
            }
          }
        },
        doRedirect: function(e) {
          e && (window.location.href = e)
        }
      },
      t = document.getElementById("strings");
    e.trans = function(e) {
      return t ? t.getAttribute("data-" + e) : undefined
    }, window.Mozilla.Utils = e
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
    }, l._compareVersion = function(e, t, n) {
      for (var r = 0, i = 0, o = !1; n.length < t.length;) n.push("0");
      for (; t.length < n.length;) t.push("0");
      e || (n.length = 1);
      for (var a = 0; a < n.length; a++) {
        if ((r = Number(t[a])) < (i = Number(n[a]))) {
          o = !1;
          break
        }
        if (i < r) {
          o = !0;
          break
        }
        o = !0
      }
      return o
    }, l._isFirefoxUpToDate = function(e, t, n) {
      e = e === undefined || e, t = t !== undefined && t, n = n === undefined ? l._getFirefoxVersion() : n;
      var r = document.documentElement;
      if (!r.getAttribute("data-esr-versions") || !r.getAttribute("data-latest-firefox")) return !1;
      var i = t ? r.getAttribute("data-esr-versions").split(" ") : [r.getAttribute("data-latest-firefox")],
        o = n.match(/^(\d+(?:\.\d+){1,2})/)[1].split("."),
        a = !1;
      i.sort(function(e, t) {
        return parseFloat(e) < parseFloat(t)
      });
      for (var s = 0; s < i.length; s++) {
        var u = i[s].split(".");
        if (a = l._compareVersion(e, o, u)) break
      }
      return a
    }, l.isFirefoxOutOfDate = function(e, t, n) {
      var r = parseInt(e, 10),
        i = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
        o = Math.max(parseInt(t, 10), 1);
      return !(isNaN(i) || isNaN(r) || isNaN(o)) && r <= i - o
    }, l.isFirefoxURLOutOfDate = function(e, t, n) {
      var r = void 0 === t ? window.location.pathname : t,
        i = /firefox\/(\d+(?:\.\d+)?\.\da?\d?)/.exec(r),
        o = i ? parseInt(i[1], 10) : null,
        a = void 0 === n ? parseInt(document.documentElement.getAttribute("data-latest-firefox"), 10) : parseInt(n, 10),
        s = Math.max(parseInt(e, 10), 1);
      return !!(o && a && o <= a - s)
    }, l.getFirefoxDetails = function(s) {
      if (l.FirefoxDetails) s(l.FirefoxDetails);
      else {
        var t = Math.random().toString(36).replace(/[^a-z]+/g, ""),
          u = function(e) {
            e.detail && e.detail.data && e.detail.callbackID === t && (window.clearTimeout(i), n(!0, e.detail.data.version, e.detail.data.defaultUpdateChannel, e.detail.data.distribution))
          },
          n = function(e, t, n, r) {
            document.removeEventListener("mozUITourResponse", u, !1);
            var i = "esr" === n,
              o = l._isFirefoxUpToDate(e, !!e && i, t),
              a = l.FirefoxDetails = {
                accurate: e,
                version: t,
                channel: n,
                distribution: r,
                isUpToDate: o,
                isESR: i
              };
            s(a)
          },
          e = l._getFirefoxVersion(),
          r = function() {
            n(!1, e, "release", undefined)
          };
        if (parseFloat(e) < 35 || l._isFirefoxAndroid()) r();
        else {
          var i = window.setTimeout(r, 400);
          document.addEventListener("mozUITourResponse", u, !1), document.dispatchEvent(new CustomEvent("mozUITour", {
            bubbles: !0,
            detail: {
              action: "getConfiguration",
              data: {
                configuration: "appinfo",
                callbackID: t
              }
            }
          }))
        }
      }
    }, l.getFxaDetails = function(e) {
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
              i = function(e) {
                e.detail && e.detail.data && e.detail.callbackID === r && (window.clearTimeout(o), document.removeEventListener("mozUITourResponse", i, !1), t.setup = Object.prototype.hasOwnProperty.call(e.detail.data, "setup") ? e.detail.data.setup : "unknown", t.desktopDevices = Object.prototype.hasOwnProperty.call(e.detail.data, "desktopDevices") ? e.detail.data.desktopDevices : "unknown", t.mobileDevices = Object.prototype.hasOwnProperty.call(e.detail.data, "mobileDevices") ? e.detail.data.mobileDevices : "unknown", a())
              };
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

    function t(e) {
      return new RegExp("(^| )" + e + "( |$)")
    }

    function e(e, t, n) {
      for (var r = 0; r < e.length; r++) t.call(n, e[r])
    }

    function n(e) {
      this.element = e
    }
    n.prototype = {
      add: function() {
        e(arguments, function(e) {
          this.contains(e) || this.element.setAttribute("class", this.element.className + " " + e)
        }, this)
      },
      remove: function() {
        e(arguments, function(e) {
          this.element.setAttribute("class", this.element.className.replace(t(e), ""))
        }, this)
      },
      toggle: function(e) {
        return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
      },
      contains: function(e) {
        return t(e).test(this.element.className)
      },
      replace: function(e, t) {
        this.remove(e), this.add(t)
      }
    }, "undefined" == typeof Element || "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
      get: function() {
        return new n(this)
      }
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
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), e.nextUntil = function(e, t, n) {
      var r = [];
      for (e = e.nextElementSibling; e && !e.matches(t);) e = ((!n || e.matches(n)) && r.push(e), e.nextElementSibling);
      return r
    }, window.Mzp.Utils = e
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
    r.open = function(e, t) {
      t && e.classList.add("mzp-is-animated"), e.classList.add("mzp-is-selected"), i = !0, e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !0), "function" == typeof o.onMenuOpen && o.onMenuOpen(e)
    }, r.close = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-is-selected"), t = 0; t < e.length; t++) e[t].classList.remove("mzp-is-selected"), e[t].classList.remove("mzp-is-animated"), e[t].querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1);
      return i = !1, "function" == typeof o.onMenuClose && 0 < e.length && o.onMenuClose(), 0 < e.length
    }, r.onDocumentKeyUp = function(e) {
      27 === e.keyCode && i && r.close()
    }, r.onCloseButtonClick = function(e) {
      e.preventDefault(), "function" == typeof o.onMenuButtonClose && o.onMenuButtonClose(), r.close()
    }, r.toggle = function(e) {
      !!e.classList.contains("mzp-is-selected") ? (e.classList.remove("mzp-is-selected"), e.classList.remove("mzp-is-animated"), e.querySelector(".mzp-c-menu-title").setAttribute("aria-expanded", !1), "function" == typeof o.onMenuClose && o.onMenuClose()) : r.open(e)
    }, r.onMouseEnter = function(t) {
      clearTimeout(n), n = setTimeout(function() {
        var e = !r.close();
        r.open(t.target, e)
      }, 150)
    }, r.onMouseLeave = function() {
      clearTimeout(n), n = setTimeout(function() {
        r.close()
      }, 150)
    }, r.onFocusOut = function() {
      var e = this;
      setTimeout(function() {
        !e.contains(document.activeElement) && e.classList.contains("mzp-is-selected") && r.close()
      }, 0)
    }, r.onClickWide = function(e) {
      e.preventDefault(), r.close(), r.open(e.target.parentNode)
    }, r.onClickSmall = function(e) {
      e.preventDefault(), r.toggle(e.target.parentNode)
    }, r.isWideViewport = function() {
      return t.matches
    }, r.handleState = function() {
      (t = matchMedia("(min-width: 768px)")).addListener(function(e) {
        r.close(), e.matches ? (r.unbindEventsSmall(), r.bindEventsWide()) : (r.unbindEventsWide(), r.bindEventsSmall())
      }), r.isWideViewport() ? r.bindEventsWide() : r.bindEventsSmall()
    }, r.bindEventsWide = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", r.onMouseEnter, !1), e[t].addEventListener("mouseleave", r.onMouseLeave, !1), e[t].addEventListener("focusout", r.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").addEventListener("click", r.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").addEventListener("click", r.onCloseButtonClick, !1);
      document.addEventListener("keyup", r.onDocumentKeyUp, !1)
    }, r.unbindEventsWide = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable"), t = 0; t < e.length; t++) e[t].removeEventListener("mouseenter", r.onMouseEnter, !1), e[t].removeEventListener("mouseleave", r.onMouseLeave, !1), e[t].removeEventListener("focusout", r.onFocusOut, !1), e[t].querySelector(".mzp-c-menu-title").removeEventListener("click", r.onClickWide, !1), e[t].querySelector(".mzp-c-menu-button-close").removeEventListener("click", r.onCloseButtonClick, !1);
      document.removeEventListener("keyup", r.onDocumentKeyUp, !1)
    }, r.bindEventsSmall = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].addEventListener("click", r.onClickSmall, !1)
    }, r.unbindEventsSmall = function() {
      for (var e = document.querySelectorAll(".mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title"), t = 0; t < e.length; t++) e[t].removeEventListener("click", r.onClickSmall, !1)
    }, r.setAria = function() {
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
    r.onClick = function(e) {
      var t = e.target.parentNode.querySelector(".mzp-c-navigation-items");
      e.preventDefault(), e.target.classList.toggle("mzp-is-active"), t.classList.toggle("mzp-is-open");
      var n = !!t.classList.contains("mzp-is-open");
      t.setAttribute("aria-expanded", n), n ? "function" == typeof i.onNavOpen && i.onNavOpen(t) : "function" == typeof i.onNavClose && i.onNavClose(t)
    }, r.setAria = function() {
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
          Mozilla.Client.getFxaDetails(function(e) {
            e.setup && (t.classList.add("fxa-signed-in"), n.href = r)
          })
        }
      }(), Mzp.Menu.init({
        onMenuOpen: function a(e) {
          if (i && window.matchMedia("(min-width: 768px)").matches) {
            var t = e.querySelector(".mzp-c-card-image");
            if (t) {
              var n = t.getAttribute("data-src");
              if (n) {
                var r = t.getAttribute("data-srcset");
                r && (t.srcset = r), t.src = n, t.onload = o
              }
            }
          }
        }
      }), Mzp.Navigation.init()
    }

    function o(e) {
      e.target.removeAttribute("data-src"), e.target.removeAttribute("data-srcset")
    }
  }(), void 0 === Mzp) Mzp = {};
if (function() {
    "use strict";
    var i = {
      switchPath: function(e, t) {
        var n = e.pathname.slice(1).split("/"),
          r = "/" + n[0] + "/";
        return !!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(r) && "/" + t + "/" + n.slice(1).join("/") + e.search
      },
      doRedirect: function(e) {
        e && (window.location.href = e)
      },
      init: function(r) {
        for (var e = document.querySelectorAll(".mzp-js-language-switcher-select"), t = 0; t < e.length; t++) e[t].setAttribute("data-previous-language", e[t].value), e[t].addEventListener("change", function(e) {
          var t = e.target.value,
            n = e.target.getAttribute("data-previous-language");
          "function" == typeof r && r(n, t), i.doRedirect(i.switchPath(window.location, t))
        }, !1)
      }
    };
    window.Mzp.LangSwitcher = i
  }(), function() {
    "use strict";
    void 0 !== Mzp && "undefined" != typeof Mzp.LangSwitcher && Mzp.LangSwitcher.init(function(e, t) {
      window.dataLayer.push({
        event: "change-language",
        languageSelected: t,
        previousLanguage: e
      })
    })
  }(), void 0 === Mzp) Mzp = {};
! function(l, c) {
  "use strict";
  var f = {},
    d = 0;
  f.isSupported = function() {
    return "undefined" != typeof c.Supports && "undefined" != typeof c.Utils && c.Supports.classList
  }, f.open = function(e, t) {
    var n = l.querySelector("[aria-controls=" + e + "]"),
      r = l.getElementById(e);
    n.setAttribute("aria-expanded", !0), r.setAttribute("aria-hidden", !1), r.classList.remove("is-closed"), "function" == typeof t.onDetailsOpen && t.onDetailsOpen(r)
  }, f.close = function(e, t) {
    var n = l.querySelector("[aria-controls=" + e + "]"),
      r = l.getElementById(e);
    n.setAttribute("aria-expanded", !1), r.setAttribute("aria-hidden", !0), r.classList.add("is-closed"), "function" == typeof t.onDetailsClose && t.onDetailsClose(r)
  }, f.toggle = function(e, t) {
    "true" === l.getElementById(e).getAttribute("aria-hidden") ? f.open(e, t) : f.close(e, t)
  }, f.handleControlActivation = function(e, t) {
    var n = e.target.getAttribute("aria-controls");
    f.toggle(n, t)
  }, f.initItem = function(e, t, n) {
    var r, i, o = e,
      a = l.createElement("button"),
      s = o.parentNode;
    if (0 === o.querySelectorAll("button").length) {
      if (1 === (i = c.Utils.nextUntil(o, t)).length) r = i[0];
      else {
        if (!(1 < i.length)) return;
        r = l.createElement("div"), i.forEach(function(e) {
          r.appendChild(e)
        }), o.parentNode.insertBefore(r, o.nextSibling)
      }
      if (s.classList.add("is-details"), r.classList.add("mzp-js-details-wrapper"), !r.id) {
        var u = t.replace(/[^a-zA-Z]+/g, "");
        r.id = "expand-" + u + "-" + d, d += 1
      }
      r.setAttribute("aria-hidden", !0), r.classList.add("is-closed"), a.setAttribute("type", "button"), a.setAttribute("aria-controls", r.id), a.setAttribute("aria-expanded", !1), a.addEventListener("click", function(e) {
        f.handleControlActivation(e, n)
      }, !1), Array.prototype.slice.call(o.childNodes).forEach(function(e) {
        a.appendChild(e)
      }), o.appendChild(a), o.classList.add("is-summary")
    }
  }, f.destroyItem = function(e) {
    var t = e,
      n = t.parentNode,
      r = t.nextElementSibling,
      i = t.querySelector("button");
    0 !== t.querySelectorAll("button").length && (n.classList.remove("is-details"), r.removeAttribute("aria-hidden"), r.classList.remove("is-closed"), Array.prototype.slice.call(i.childNodes).forEach(function(e) {
      t.appendChild(e)
    }), t.removeChild(i), t.classList.remove("is-summary"))
  }, f.init = function(e, t) {
    if (f.isSupported()) {
      void 0 === t && (t = {});
      for (var n = l.querySelectorAll(e), r = 0; r < n.length; r++) f.initItem(n[r], e, t)
    }
  }, f.destroy = function(e, t) {
    for (var n = l.querySelectorAll(e, t), r = 0; r < n.length; r++) f.destroyItem(n[r], e, t)
  }, "undefined" != typeof c.Supports && (c.Supports.details || f.init("summary")), f.init(".mzp-c-details > h2"), f.init(".mzp-c-details > h3"), f.init(".mzp-c-details > h4"), f.init(".mzp-c-details > h5"), f.init(".mzp-c-details > h6"), c.Details = f
}(document, window.Mzp),
function() {
  "use strict";
  if ("undefined" != typeof window.Mzp) {
    var t = window.Mzp,
      n = ".mzp-c-footer-sections .mzp-c-footer-heading";
    if ("undefined" != typeof t.Supports && "undefined" != typeof t.Details && t.Supports.matchMedia) {
      var e = matchMedia("(max-width: 479px)");
      e.matches && t.Details.init(n), e.addListener(function(e) {
        e.matches ? t.Details.init(n) : t.Details.destroy(n)
      })
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
    }), e.isFirefoxDesktop || e.isFirefoxAndroid ? e.getFirefoxDetails(function(e) {
      r.push(e), i = !0, t()
    }) : (i = !0, t()), n.updateDataLayerPush()
  }),
  function() {
    "use strict";
    var t = function(e) {
      e = e || location.search || "", this.params = t.queryStringToObject(e)
    };
    t.objectToQueryString = function(e) {
      var t = [];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push([encodeURIComponent(n), encodeURIComponent(e[n])].join("="));
      return t.join("&")
    }, t.queryStringToObject = function(e) {
      var t = {};
      e = (e = e.match(/^\??(.*)/)[1]) ? e.split(/[&;]/m) : [];
      for (var n = 0; n < e.length; n++) {
        var r = e[n].split("="),
          i = r[0],
          o = r[1];
        t[i] = isNaN(o) ? o : parseFloat(o)
      }
      return t
    }, t.prototype.get = function(e) {
      return this.params[e]
    }, t.prototype.set = function(e, t) {
      this.params[e] = isNaN(t) ? t : parseFloat(t)
    }, t.prototype.has = function(e) {
      return e in this.params
    }, t.prototype.remove = function(e) {
      delete this.params[e]
    }, t.prototype.toString = function() {
      return t.objectToQueryString(this.params)
    }, t.prototype.utmParams = function() {
      var e = {},
        t = this.params;
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 === n.indexOf("utm_") && (e[n] = t[n]);
      return e
    }, t.prototype.utmParamsFxA = function(e) {
      e = e || window.location.pathname || "";
      var t = this.utmParams();
      t.utm_campaign || (t.utm_campaign = "page referral - not part of a campaign");
      var n = e.match(/\/[\w-]+(\/.*)$/);
      return n && 1 < n.length && (t.utm_content = n[1]), Object.keys(t).forEach(function(e) {
        t[e] = t[e].toString()
      }), t
    }, window._SearchParams = t
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
    }, u.appendToDownloadURL = function(e, t) {
      var n, r;
      if (0 < e.indexOf("?")) {
        r = window._SearchParams.queryStringToObject(e.split("?")[1]);
        for (var i = ["utm_source", "utm_campaign", "utm_content", "utm_term", "utm_medium"], o = 0; o < i.length; o++) {
          var a = i[o];
          Object.prototype.hasOwnProperty.call(r, a) && delete r[a]
        }
        n = Object.assign(r, t)
      } else n = t;
      return e.split("?")[0] + "?" + window._SearchParams.objectToQueryString(n)
    }, u.getAttributionData.init = function(e) {
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