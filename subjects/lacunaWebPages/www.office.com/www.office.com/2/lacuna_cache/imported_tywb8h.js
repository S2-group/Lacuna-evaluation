function getDefaultAadUser(e) {}

function getDefaultMsaUser(e) {}

function findDefaultSignedInUser(e, t, n, r, o) {}

function convertAadUserData(e) {}

function convertMsaUserData(e) {}

function isValidMsaUser(e) {}

function isValidAadUser(e) {}

function getAadData(e, t) {}

function getMsaData(e, t) {}

function getAadMsaData(e, t) {}

function getAccount(e, t) {}! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = ie.type(e);
    return "function" !== n && !ie.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function r(e, t, n) {}

  function o(e, t) {}

  function i(e) {
    var t = {};
    return ie.each(e.match(xe) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), ie.ready()
  }

  function a() {
    this.expando = ie.expando + a.uid++
  }

  function u(e, t, n) {}

  function l(e, t, n, r) {}

  function d(e, t) {}

  function c(e, t) {}

  function f(e, t, n, r, o) {}

  function p() {}

  function g() {
    return !1
  }

  function h() {}

  function m(e, t, n, r, o, i) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (a in t) m(e, a, n, r, t[a], i);
      return e
    }
    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = g;
    else if (!o) return e;
    return 1 === i && (s = o, o = function(e) {}, o.guid = s.guid || (s.guid = ie.guid++)), e.each(function() {
      ie.event.add(this, t, o, r, n)
    })
  }

  function v(e, t) {}

  function y(e) {}

  function b(e) {}

  function x(e, t) {}

  function C(e, t) {}

  function w(e, t, n, r) {}

  function T(e, t, n) {}

  function A(e, t) {}

  function S(e) {}

  function L(e, t, n) {}

  function I(e, t) {
    return {
      get: function() {}
    }
  }

  function U(e) {
    if (e in nt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
      if ((e = tt[n] + t) in nt) return e
  }

  function E(e, t, n) {}

  function M(e, t, n, r, o) {}

  function D(t, n, r) {}

  function N(e, t) {}

  function k(e, t, n, r, o) {}

  function j() {}

  function O(e, t) {
    var n, r = 0,
      o = {
        height: e
      };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Me[r], o["margin" + n] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  function q(e, t, n) {}

  function F(e, t, n) {}

  function P(e, t) {}

  function R(e, t, n) {}

  function H(e) {}

  function W(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, o = 0,
        i = t.toLowerCase().match(xe) || [];
      if (ie.isFunction(n))
        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function B(e, t, n, r) {}

  function $(e, t) {
    var n, r, o = ie.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ie.extend(!0, e, r), e
  }

  function _(e, t, n) {}

  function V(e, t, n, r) {}

  function z(e, t, n, r) {}

  function X(e) {}
  var J = [],
    G = e.document,
    Y = J.slice,
    Q = J.concat,
    K = J.push,
    Z = J.indexOf,
    ee = {},
    te = ee.toString,
    ne = ee.hasOwnProperty,
    re = {},
    oe = "2.2.2",
    ie = function(e, t) {
      return new ie.fn.init(e, t)
    },
    se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ae = /^-ms-/,
    ue = /-([\da-z])/gi,
    le = function(e, t) {};
  ie.fn = ie.prototype = {
    jquery: oe,
    constructor: ie,
    selector: "",
    length: 0,
    toArray: function() {},
    get: function(e) {},
    pushStack: function(e) {
      var t = ie.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e) {
      return ie.each(this, e)
    },
    map: function(e) {},
    slice: function() {},
    first: function() {},
    last: function() {},
    eq: function(e) {},
    end: function() {},
    push: K,
    sort: J.sort,
    splice: J.splice
  }, ie.extend = ie.fn.extend = function() {
    var e, t, n, r, o, i, s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || ie.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], r = e[t], s !== r && (l && r && (ie.isPlainObject(r) || (o = ie.isArray(r))) ? (o ? (o = !1, i = n && ie.isArray(n) ? n : []) : i = n && ie.isPlainObject(n) ? n : {}, s[t] = ie.extend(l, i, r)) : void 0 !== r && (s[t] = r));
    return s
  }, ie.extend({
    expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {},
    noop: function() {},
    isFunction: function(e) {
      return "function" === ie.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {},
    isPlainObject: function(e) {
      var t;
      if ("object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
      if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (t in e);
      return void 0 === t || ne.call(e, t)
    },
    isEmptyObject: function(e) {},
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {},
    camelCase: function(e) {
      return e.replace(ae, "ms-").replace(ue, le)
    },
    nodeName: function(e, t) {},
    each: function(e, t) {
      var r, o = 0;
      if (n(e))
        for (r = e.length; r > o && !1 !== t.call(e[o], o, e[o]); o++);
      else
        for (o in e)
          if (!1 === t.call(e[o], o, e[o])) break;
      return e
    },
    trim: function(e) {},
    makeArray: function(e, t) {},
    inArray: function(e, t, n) {},
    merge: function(e, t) {
      for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
      return e.length = o, e
    },
    grep: function(e, t, n) {},
    map: function(e, t, r) {},
    guid: 1,
    proxy: function(e, t) {},
    now: Date.now,
    support: re
  }), "function" == typeof Symbol && (ie.fn[Symbol.iterator] = J[Symbol.iterator]), ie.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    ee["[object " + t + "]"] = t.toLowerCase()
  });
  var de = function(e) {
    function t(e, t, n, r) {
      var o, i, s, a, l, c, f, p, g = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!r && ((t ? t.ownerDocument || t : P) !== M && E(t), t = t || M, N)) {
        if (11 !== h && (c = he.exec(e)))
          if (o = c[1]) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n
            } else if (g && (s = g.getElementById(o)) && q(t, s) && s.id === o) return n.push(s), n
          } else {
            if (c[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
            if ((o = c[3]) && b.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n
          } if (b.qsa && !$[e + " "] && (!k || !k.test(e))) {
          if (1 !== h) g = t, p = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = F), f = T(e), i = f.length, l = de.test(a) ? "#" + a : "[id='" + a + "']"; i--;) f[i] = l + " " + d(f[i]);
            p = f.join(","), g = me.test(e) && u(t.parentNode) || t
          }
          if (p) try {
            return Y.apply(n, g.querySelectorAll(p)), n
          } catch (e) {} finally {
            a === F && t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(ie, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[F] = !0, e
    }

    function o(e) {
      var t = M.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function i(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
    }

    function s(e, t) {}

    function a(e) {
      return r(function(t) {})
    }

    function u(e) {}

    function l() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function c(e, t, n) {}

    function f(e) {}

    function p(e, n, r) {}

    function g(e, t, n, r, o) {}

    function h(e, t, n, o, i, s) {}

    function m(e) {}

    function v(e, n) {}
    var y, b, x, C, w, T, A, S, L, I, U, E, M, D, N, k, j, O, q, F = "sizzle" + 1 * new Date,
      P = e.document,
      R = 0,
      H = 0,
      W = n(),
      B = n(),
      $ = n(),
      _ = function(e, t) {
        return e === t && (U = !0), 0
      },
      V = 1 << 31,
      z = {}.hasOwnProperty,
      X = [],
      J = X.pop,
      G = X.push,
      Y = X.push,
      Q = X.slice,
      K = function(e, t) {},
      Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      oe = new RegExp(ee + "+", "g"),
      ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      se = new RegExp("^" + ee + "*," + ee + "*"),
      ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      le = new RegExp(re),
      de = new RegExp("^" + te + "$"),
      ce = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + re),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      },
      fe = /^(?:input|select|textarea|button)$/i,
      pe = /^h\d$/i,
      ge = /^[^{]+\{\s*\[native \w/,
      he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      ve = /'|\\/g,
      ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      be = function(e, t, n) {},
      xe = function() {};
    try {
      Y.apply(X = Q.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
    } catch (e) {
      Y = {
        apply: X.length ? function(e, t) {} : function(e, t) {}
      }
    }
    b = t.support = {}, w = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, E = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e : P;
      return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, D = M.documentElement, N = !w(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = o(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), b.getElementsByTagName = o(function(e) {
        return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
      }), b.getElementsByClassName = ge.test(M.getElementsByClassName), b.getById = o(function(e) {
        return D.appendChild(e).id = F, !M.getElementsByName || !M.getElementsByName(F).length
      }), b.getById ? (x.find.ID = function(e, t) {}, x.filter.ID = function(e) {}) : (delete x.find.ID, x.filter.ID = function(e) {}), x.find.TAG = b.getElementsByTagName ? function(e, t) {} : function(e, t) {}, x.find.CLASS = b.getElementsByClassName && function(e, t) {}, j = [], k = [], (b.qsa = ge.test(M.querySelectorAll)) && (o(function(e) {
        D.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && k.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || k.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + F + "-]").length || k.push("~="), e.querySelectorAll(":checked").length || k.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || k.push(".#.+[+~]")
      }), o(function(e) {
        var t = M.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && k.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || k.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), k.push(",.*:")
      })), (b.matchesSelector = ge.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
        b.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), j.push("!=", re)
      }), k = k.length && new RegExp(k.join("|")), j = j.length && new RegExp(j.join("|")), t = ge.test(D.compareDocumentPosition), q = t || ge.test(D.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {}, _ = t ? function(e, t) {} : function(e, t) {}, M) : M
    }, t.matches = function(e, n) {}, t.matchesSelector = function(e, n) {}, t.contains = function(e, t) {}, t.attr = function(e, t) {}, t.error = function(e) {}, t.uniqueSort = function(e) {}, C = t.getText = function(e) {}, x = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: ce,
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
        ATTR: function(e, n, r) {},
        CHILD: function(e, t, n, r, o) {},
        PSEUDO: function(e, n) {}
      },
      pseudos: {
        not: r(function(e) {}),
        has: r(function(e) {}),
        contains: r(function(e) {}),
        lang: r(function(e) {}),
        target: function(t) {},
        root: function(e) {},
        focus: function(e) {},
        enabled: function(e) {},
        disabled: function(e) {},
        checked: function(e) {},
        selected: function(e) {},
        empty: function(e) {},
        parent: function(e) {},
        header: function(e) {},
        input: function(e) {},
        button: function(e) {},
        text: function(e) {},
        first: a(function() {}),
        last: a(function(e, t) {}),
        eq: a(function(e, t, n) {}),
        even: a(function(e, t) {}),
        odd: a(function(e, t) {}),
        lt: a(function(e, t, n) {}),
        gt: a(function(e, t, n) {})
      }
    }, x.pseudos.nth = x.pseudos.eq;
    for (y in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) x.pseudos[y] = function(e) {
      return function(t) {}
    }(y);
    for (y in {
        submit: !0,
        reset: !0
      }) x.pseudos[y] = function(e) {
      return function(t) {}
    }(y);
    return l.prototype = x.filters = x.pseudos, x.setFilters = new l, T = t.tokenize = function(e, n) {
      var r, o, i, s, a, u, l, d = B[e + " "];
      if (d) return n ? 0 : d.slice(0);
      for (a = e, u = [], l = x.preFilter; a;) {
        r && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(i = [])), r = !1, (o = ae.exec(a)) && (r = o.shift(), i.push({
          value: r,
          type: o[0].replace(ie, " ")
        }), a = a.slice(r.length));
        for (s in x.filter) !(o = ce[s].exec(a)) || l[s] && !(o = l[s](o)) || (r = o.shift(), i.push({
          value: r,
          type: s,
          matches: o
        }), a = a.slice(r.length));
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : B(e, u).slice(0)
    }, A = t.compile = function(e, t) {}, S = t.select = function(e, t, n, r) {}, b.sortStable = F.split("").sort(_).join("") === F, b.detectDuplicates = !!U, E(), b.sortDetached = o(function(e) {
      return 1 & e.compareDocumentPosition(M.createElement("div"))
    }), o(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || i("type|href|height|width", function(e, t, n) {}), b.attributes && o(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || i("value", function(e, t, n) {}), o(function(e) {
      return null == e.getAttribute("disabled")
    }) || i(Z, function(e, t, n) {}), t
  }(e);
  ie.find = de, ie.expr = de.selectors, ie.expr[":"] = ie.expr.pseudos, ie.uniqueSort = ie.unique = de.uniqueSort, ie.text = de.getText, ie.isXMLDoc = de.isXML, ie.contains = de.contains;
  var ce = function(e, t, n) {},
    fe = function(e, t) {},
    pe = ie.expr.match.needsContext,
    ge = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    he = /^.[^:#\[\.,]*$/;
  ie.filter = function(e, t, n) {}, ie.fn.extend({
    find: function(e) {
      var t, n = this.length,
        r = [],
        o = this;
      if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {}));
      for (t = 0; n > t; t++) ie.find(e, o[t], r);
      return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    },
    filter: function(e) {},
    not: function(e) {},
    is: function(e) {}
  });
  var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (ie.fn.init = function(e, t, n) {
    var r, o;
    if (!e) return this;
    if (n = n || me, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), ge.test(r[1]) && ie.isPlainObject(t))
          for (r in t) ie.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return o = G.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
  }).prototype = ie.fn, me = ie(G);
  var ye = /^(?:parents|prev(?:Until|All))/,
    be = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ie.fn.extend({
    has: function(e) {},
    closest: function(e, t) {},
    index: function(e) {},
    add: function(e, t) {},
    addBack: function(e) {}
  }), ie.each({
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
  }, function(e, t) {
    ie.fn[e] = function(n, r) {}
  });
  var xe = /\S+/g;
  ie.Callbacks = function(e) {
    e = "string" == typeof e ? i(e) : ie.extend({}, e);
    var t, n, r, o, s = [],
      a = [],
      u = -1,
      l = function() {
        for (o = e.once, r = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < s.length;) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
        e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
      },
      d = {
        add: function() {
          return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
            ie.each(n, function(n, r) {
              ie.isFunction(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== ie.type(r) && t(r)
            })
          }(arguments), n && !t && l()), this
        },
        remove: function() {},
        has: function(e) {},
        empty: function() {},
        disable: function() {
          return o = a = [], s = n = "", this
        },
        disabled: function() {},
        lock: function() {
          return o = a = [], n || (s = n = ""), this
        },
        locked: function() {},
        fireWith: function(e, n) {
          return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
        },
        fire: function() {},
        fired: function() {}
      };
    return d
  }, ie.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
          ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
          ["notify", "progress", ie.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {},
          always: function() {},
          then: function() {},
          promise: function(e) {
            return null != e ? ie.extend(e, r) : r
          }
        },
        o = {};
      return r.pipe = r.then, ie.each(t, function(e, i) {
        var s = i[2],
          a = i[3];
        r[i[1]] = s.add, a && s.add(function() {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {}, o[i[0] + "With"] = s.fireWith
      }), r.promise(o), e && e.call(o, o), o
    },
    when: function(e) {}
  });
  var Ce;
  ie.fn.ready = function(e) {
    return ie.ready.promise().done(e), this
  }, ie.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {},
    ready: function(e) {
      (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (Ce.resolveWith(G, [ie]), ie.fn.triggerHandler && (ie(G).triggerHandler("ready"), ie(G).off("ready"))))
    }
  }), ie.ready.promise = function(t) {
    return Ce || (Ce = ie.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(ie.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Ce.promise(t)
  }, ie.ready.promise();
  var we = function(e, t, n, r, o, i, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === ie.type(n)) {
        o = !0;
        for (a in n) we(e, t, a, n[a], !0, i, s)
      } else if (void 0 !== r && (o = !0, ie.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {})), t))
        for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    },
    Te = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  a.uid = 1, a.prototype = {
    register: function(e, t) {},
    cache: function(e) {
      if (!Te(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {},
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    },
    access: function(e, t, n) {},
    remove: function(e, t) {},
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !ie.isEmptyObject(t)
    }
  };
  var Ae = new a,
    Se = new a,
    Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ie = /[A-Z]/g;
  ie.extend({
    hasData: function(e) {},
    data: function(e, t, n) {},
    removeData: function(e, t) {},
    _data: function(e, t, n) {},
    _removeData: function(e, t) {}
  }), ie.fn.extend({
    data: function(e, t) {},
    removeData: function(e) {}
  }), ie.extend({
    queue: function(e, t, n) {},
    dequeue: function(e, t) {},
    _queueHooks: function(e, t) {}
  }), ie.fn.extend({
    queue: function(e, t) {},
    dequeue: function(e) {},
    clearQueue: function(e) {},
    promise: function(e, t) {}
  });
  var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ee = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
    Me = ["Top", "Right", "Bottom", "Left"],
    De = function(e, t) {},
    Ne = /^(?:checkbox|radio)$/i,
    ke = /<([\w:-]+)/,
    je = /^$|\/(?:java|ecma)script/i,
    Oe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td;
  var qe = /<|&#?\w+;/;
  ! function() {
    var e = G.createDocumentFragment(),
      t = e.appendChild(G.createElement("div")),
      n = G.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Fe = /^key/,
    Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Re = /^([^.]*)(?:\.(.+)|)/;
  ie.event = {
    global: {},
    add: function(e, t, n, r, o) {
      var i, s, a, u, l, d, c, f, p, g, h, m = Ae.get(e);
      if (m)
        for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = ie.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {}), t = (t || "").match(xe) || [""], l = t.length; l--;) a = Re.exec(t[l]) || [], p = h = a[1], g = (a[2] || "").split(".").sort(), p && (c = ie.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ie.event.special[p] || {}, d = ie.extend({
          type: p,
          origType: h,
          data: r,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && ie.expr.match.needsContext.test(o),
          namespace: g.join(".")
        }, i), (f = u[p]) || (f = u[p] = [], f.delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(p, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0)
    },
    remove: function(e, t, n, r, o) {
      var i, s, a, u, l, d, c, f, p, g, h, m = Ae.hasData(e) && Ae.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(xe) || [""], l = t.length; l--;)
          if (a = Re.exec(t[l]) || [], p = h = a[1], g = (a[2] || "").split(".").sort(), p) {
            for (c = ie.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, f = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = f.length; i--;) d = f[i], !o && h !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (f.splice(i, 1), d.selector && f.delegateCount--, c.remove && c.remove.call(e, d));
            s && !f.length && (c.teardown && !1 !== c.teardown.call(e, g, m.handle) || ie.removeEvent(e, p, m.handle), delete u[p])
          } else
            for (p in u) ie.event.remove(e, p + t[l], n, r, !0);
        ie.isEmptyObject(u) && Ae.remove(e, "handle events")
      }
    },
    dispatch: function(e) {},
    handlers: function(e, t) {},
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {}
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {}
    },
    fix: function(e) {},
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {},
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {},
        delegateType: "focusout"
      },
      click: {
        trigger: function() {},
        _default: function(e) {}
      },
      beforeunload: {
        postDispatch: function(e) {}
      }
    }
  }, ie.removeEvent = function(e, t, n) {}, ie.Event = function(e, t) {
    return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : g) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
  }, ie.Event.prototype = {
    constructor: ie.Event,
    isDefaultPrevented: g,
    isPropagationStopped: g,
    isImmediatePropagationStopped: g,
    preventDefault: function() {},
    stopPropagation: function() {},
    stopImmediatePropagation: function() {}
  }, ie.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    ie.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {}
    }
  }), ie.fn.extend({
    on: function(e, t, n, r) {
      return m(this, e, t, n, r)
    },
    one: function(e, t, n, r) {},
    off: function(e, t, n) {
      var r, o;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, t, e[o]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = g), this.each(function() {
        ie.event.remove(this, e, n, t)
      })
    }
  });
  var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    We = /<script|<style|<link/i,
    Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
    $e = /^true\/(.*)/,
    _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ie.extend({
    htmlPrefilter: function(e) {},
    clone: function(e, t, n) {},
    cleanData: function(e) {}
  }), ie.fn.extend({
    domManip: w,
    detach: function(e) {},
    remove: function(e) {},
    text: function(e) {},
    append: function() {},
    prepend: function() {},
    before: function() {},
    after: function() {},
    empty: function() {},
    clone: function(e, t) {},
    html: function(e) {},
    replaceWith: function() {}
  }), ie.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    ie.fn[e] = function(e) {}
  });
  var Ve, ze = {
      HTML: "block",
      BODY: "block"
    },
    Xe = /^margin/,
    Je = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
    Ge = function(t) {},
    Ye = function(e, t, n, r) {},
    Qe = G.documentElement;
  ! function() {
    function t() {}
    var n, r, o, i, s = G.createElement("div"),
      a = G.createElement("div");
    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ie.extend(re, {
      pixelPosition: function() {},
      boxSizingReliable: function() {},
      pixelMarginRight: function() {},
      reliableMarginLeft: function() {},
      reliableMarginRight: function() {}
    }))
  }();
  var Ke = /^(none|table(?!-c[ea]).+)/,
    Ze = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    et = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    tt = ["Webkit", "O", "Moz", "ms"],
    nt = G.createElement("div").style;
  ie.extend({
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
        var o, i, s, a = ie.camelCase(t),
          u = e.style;
        return t = ie.cssProps[a] || (ie.cssProps[a] = U(a) || a), s = ie.cssHooks[t] || ie.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Ee.exec(n)) && o[1] && (n = l(e, t, o), i = "number"), void(null != n && n === n && ("number" === i && (n += o && o[3] || (ie.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
      }
    },
    css: function(e, t, n, r) {}
  }), ie.each(["height", "width"], function(e, t) {
    ie.cssHooks[t] = {
      get: function(e, n, r) {},
      set: function(e, n, r) {}
    }
  }), ie.cssHooks.marginLeft = I(re.reliableMarginLeft, function(e, t) {}), ie.cssHooks.marginRight = I(re.reliableMarginRight, function(e, t) {}), ie.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    ie.cssHooks[e + t] = {
      expand: function(n) {}
    }, Xe.test(e) || (ie.cssHooks[e + t].set = E)
  }), ie.fn.extend({
    css: function(e, t) {
      return we(this, function(e, t, n) {
        var r, o, i = {},
          s = 0;
        if (ie.isArray(t)) {
          for (r = Ge(e), o = t.length; o > s; s++) i[t[s]] = ie.css(e, t[s], !1, r);
          return i
        }
        return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {},
    hide: function() {},
    toggle: function(e) {}
  }), ie.Tween = k, k.prototype = {
    constructor: k,
    init: function(e, t, n, r, o, i) {},
    cur: function() {},
    run: function(e) {}
  }, k.prototype.init.prototype = k.prototype, k.propHooks = {
    _default: {
      get: function(e) {},
      set: function(e) {}
    }
  }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
    set: function(e) {}
  }, ie.easing = {
    linear: function(e) {},
    swing: function(e) {},
    _default: "swing"
  }, ie.fx = k.prototype.init, ie.fx.step = {};
  var rt, ot, it = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
  ie.Animation = ie.extend(R, {
      tweeners: {
        "*": [function(e, t) {}]
      },
      tweener: function(e, t) {},
      prefilters: [F],
      prefilter: function(e, t) {}
    }), ie.speed = function(e, t, n) {}, ie.fn.extend({
      fadeTo: function(e, t, n, r) {},
      animate: function(e, t, n, r) {},
      stop: function(e, t, n) {},
      finish: function(e) {}
    }), ie.each(["toggle", "show", "hide"], function(e, t) {
      var n = ie.fn[t];
      ie.fn[t] = function(e, r, o) {}
    }), ie.each({
      slideDown: O("show"),
      slideUp: O("hide"),
      slideToggle: O("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      ie.fn[e] = function(e, n, r) {}
    }), ie.timers = [], ie.fx.tick = function() {}, ie.fx.timer = function(e) {}, ie.fx.interval = 13, ie.fx.start = function() {}, ie.fx.stop = function() {}, ie.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ie.fn.delay = function(t, n) {},
    function() {
      var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));
      e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
  var at, ut = ie.expr.attrHandle;
  ie.fn.extend({
    attr: function(e, t) {},
    removeAttr: function(e) {}
  }), ie.extend({
    attr: function(e, t, n) {},
    attrHooks: {
      type: {
        set: function(e, t) {}
      }
    },
    removeAttr: function(e, t) {}
  }), at = {
    set: function(e, t, n) {}
  }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = ut[t] || ie.find.attr;
    ut[t] = function(e, t, r) {}
  });
  var lt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  ie.fn.extend({
    prop: function(e, t) {},
    removeProp: function(e) {}
  }), ie.extend({
    prop: function(e, t, n) {},
    propHooks: {
      tabIndex: {
        get: function(e) {}
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), re.optSelected || (ie.propHooks.selected = {
    get: function(e) {},
    set: function(e) {}
  }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ie.propFix[this.toLowerCase()] = this
  });
  var ct = /[\t\r\n\f]/g;
  ie.fn.extend({
    addClass: function(e) {},
    removeClass: function(e) {},
    toggleClass: function(e, t) {},
    hasClass: function(e) {}
  });
  var ft = /\r/g,
    pt = /[\x20\t\r\n\f]+/g;
  ie.fn.extend({
    val: function(e) {}
  }), ie.extend({
    valHooks: {
      option: {
        get: function(e) {}
      },
      select: {
        get: function(e) {},
        set: function(e, t) {}
      }
    }
  }), ie.each(["radio", "checkbox"], function() {
    ie.valHooks[this] = {
      set: function(e, t) {}
    }, re.checkOn || (ie.valHooks[this].get = function(e) {})
  });
  var gt = /^(?:focusinfocus|focusoutblur)$/;
  ie.extend(ie.event, {
    trigger: function(t, n, r, o) {
      var i, s, a, u, l, d, c, f = [r || G],
        p = ne.call(t, "type") ? t.type : t,
        g = ne.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(p + ie.event.triggered) && (p.indexOf(".") > -1 && (g = p.split("."), p = g.shift(), g.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), c = ie.event.special[p] || {}, o || !c.trigger || !1 !== c.trigger.apply(r, n))) {
        if (!o && !c.noBubble && !ie.isWindow(r)) {
          for (u = c.delegateType || p, gt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
          a === (r.ownerDocument || G) && f.push(a.defaultView || a.parentWindow || e)
        }
        for (i = 0;
          (s = f[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : c.bindType || p, d = (Ae.get(s, "events") || {})[t.type] && Ae.get(s, "handle"), d && d.apply(s, n), (d = l && s[l]) && d.apply && Te(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = p, o || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), n) || !Te(r) || l && ie.isFunction(r[p]) && !ie.isWindow(r) && (a = r[l], a && (r[l] = null), ie.event.triggered = p, r[p](), ie.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    simulate: function(e, t, n) {}
  }), ie.fn.extend({
    trigger: function(e, t) {},
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? ie.event.trigger(e, t, n, !0) : void 0
    }
  }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    ie.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), ie.fn.extend({
    hover: function(e, t) {}
  }), re.focusin = "onfocusin" in e, re.focusin || ie.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {};
    ie.event.special[t] = {
      setup: function() {},
      teardown: function() {}
    }
  });
  var ht = e.location,
    mt = ie.now(),
    vt = /\?/;
  ie.parseJSON = function(e) {}, ie.parseXML = function(t) {};
  var yt = /#.*$/,
    bt = /([?&])_=[^&]*/,
    xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    wt = /^(?:GET|HEAD)$/,
    Tt = /^\/\//,
    At = {},
    St = {},
    Lt = "*/".concat("*"),
    It = G.createElement("a");
  It.href = ht.href, ie.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ht.href,
      type: "GET",
      isLocal: Ct.test(ht.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Lt,
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
        "text json": ie.parseJSON,
        "text xml": ie.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? $($(e, ie.ajaxSettings), t) : $(ie.ajaxSettings, e)
    },
    ajaxPrefilter: W(At),
    ajaxTransport: W(St),
    ajax: function(t, n) {},
    getJSON: function(e, t, n) {},
    getScript: function(e, t) {}
  }), ie.each(["get", "post"], function(e, t) {
    ie[t] = function(e, n, r, o) {}
  }), ie._evalUrl = function(e) {}, ie.fn.extend({
    wrapAll: function(e) {},
    wrapInner: function(e) {},
    wrap: function(e) {},
    unwrap: function() {}
  }), ie.expr.filters.hidden = function(e) {}, ie.expr.filters.visible = function(e) {};
  var Ut = /%20/g,
    Et = /\[\]$/,
    Mt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  ie.param = function(e, t) {}, ie.fn.extend({
    serialize: function() {},
    serializeArray: function() {}
  }), ie.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var kt = {
      0: 200,
      1223: 204
    },
    jt = ie.ajaxSettings.xhr();
  re.cors = !!jt && "withCredentials" in jt, re.ajax = jt = !!jt, ie.ajaxTransport(function(t) {}), ie.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {}
    }
  }), ie.ajaxPrefilter("script", function(e) {}), ie.ajaxTransport("script", function(e) {});
  var Ot = [],
    qt = /(=)\?(?=&|$)|\?\?/;
  ie.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {}
  }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {}), ie.parseHTML = function(e, t, n) {};
  var Ft = ie.fn.load;
  ie.fn.load = function(e, t, n) {}, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    ie.fn[t] = function(e) {}
  }), ie.expr.filters.animated = function(e) {}, ie.offset = {
    setOffset: function(e, t, n) {}
  }, ie.fn.extend({
    offset: function(e) {},
    position: function() {},
    offsetParent: function() {}
  }), ie.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    ie.fn[e] = function(r) {}
  }), ie.each(["top", "left"], function(e, t) {
    ie.cssHooks[t] = I(re.pixelPosition, function(e, n) {})
  }), ie.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    ie.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      ie.fn[r] = function(r, o) {}
    })
  }), ie.fn.extend({
    bind: function(e, t, n) {},
    unbind: function(e, t) {},
    delegate: function(e, t, n, r) {},
    undelegate: function(e, t, n) {},
    size: function() {}
  }), ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {});
  var Pt = e.jQuery,
    Rt = e.$;
  return ie.noConflict = function(t) {}, t || (e.jQuery = e.$ = ie), ie
});
var AuthType;
! function(e) {
  e[e.aad = 1] = "aad", e[e.msa = 2] = "msa"
}(AuthType || (AuthType = {}));
var Operation;
! function(e) {
  var t = "Redirect";
  e[e[t] = 1] = t, e[e.Error = 2] = "Error"
}(Operation || (Operation = {}));
var ErrorCode;
! function(e) {
  var t = "NonPreferredResponseIgnored",
    n = "UnknownError",
    r = "NoAccountFound",
    o = "InvalidDataReceivedFromIdp",
    i = "InvalidConfigurations";
  e[e[i] = 100] = i, e[e[o] = 105] = o, e[e[r] = 110] = r, e[e.TimeOut = 115] = "TimeOut", e[e[n] = 120] = n, e[e[t] = 125] = t
}(ErrorCode || (ErrorCode = {}));
var TimerUtils;
! function(e) {
  function t() {}
  e.timer = t
}(TimerUtils || (TimerUtils = {}));
var IframeUtils;
! function(e) {
  function t(e, t) {}

  function n(e) {}
  e.getIframe = t, e.deleteIframe = n
}(IframeUtils || (IframeUtils = {}));
var Constants;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  t.msaMeSrf = "/Me.srf?wa=wsignin1.0&wreply=", t.aadSavedUsers = "/savedusers?wreply=", e.UriFormats = t;
  var n = function() {
    function e() {}
    return e
  }();
  n.http = "http", n.https = "https", e.UriScheme = n;
  var r = function() {
    function e() {}
    return e
  }();
  r.separator = "://", e.UriSeparator = r;
  var o = function() {
    function e() {}
    return e
  }();
  o.remembered = "1", o.signedIn = "2", o.interrupted = "3", e.AuthState = o;
  var i = function() {
    function e() {}
    return e
  }();
  i.msaFed = "MSAFED", e.Idp = i
}(Constants || (Constants = {}));
var LoggingUtils;
! function(e) {
  function t(e, t) {}

  function n(e, n) {}

  function r(e, n) {}

  function o(e, n) {}
  e.log = n, e.warn = r, e.error = o
}(LoggingUtils || (LoggingUtils = {}));
var IdpUserResult = function() {
    function e(e) {}
    return e.prototype.containsValidUser = function() {}, e
  }(),
  DefaultSignInOptions = function() {
    function e(e) {}
    var t = !1,
      n = null;
    return e.prototype.isValid = function() {}, e
  }(),
  enableConsoleLog = !1,
  msaFedEnabled = !1;