



















! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : null : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = ie.type(e);
    return "function" !== n && !ie.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  

  

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

  

  

  

  

  

  

  function g() {
    return !1
  }

  

  function m(e, t, n, r, o, i) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (a in t) m(e, a, n, r, t[a], i);
      return e
    }
    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = g;
    else if (!o) return e;
    return 1 === i && (s = o, o = null, o.guid = s.guid || (s.guid = ie.guid++)), e.each(function() {
      ie.event.add(this, t, o, r, n)
    })
  }

  

  

  

  

  

  

  

  

  

  

  function I(e, t) {
    return {
      get: null
    }
  }

  function U(e) {
    if (e in nt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
      if ((e = tt[n] + t) in nt) return e
  }

  

  

  

  

  

  

  function O(e, t) {
    var n, r = 0,
      o = {
        height: e
      };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Me[r], o["margin" + n] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  

  

  

  

  

  function W(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, o = 0,
        i = t.toLowerCase().match(xe) || [];
      if (ie.isFunction(n))
        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  

  function $(e, t) {
    var n, r, o = ie.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ie.extend(!0, e, r), e
  }

  

  

  

  
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
    le = null;
  ie.fn = ie.prototype = {
    jquery: oe,
    constructor: ie,
    selector: "",
    length: 0,
    toArray: null,
    get: null,
    pushStack: function(e) {
      var t = ie.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e) {
      return ie.each(this, e)
    },
    map: null,
    slice: null,
    first: null,
    last: null,
    eq: null,
    end: null,
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
    error: null,
    noop: null,
    isFunction: function(e) {
      return "function" === ie.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: null,
    isPlainObject: function(e) {
      var t;
      if ("object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
      if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (t in e);
      return void 0 === t || ne.call(e, t)
    },
    isEmptyObject: null,
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
    },
    globalEval: null,
    camelCase: function(e) {
      return e.replace(ae, "ms-").replace(ue, le)
    },
    nodeName: null,
    each: function(e, t) {
      var r, o = 0;
      if (n(e))
        for (r = e.length; r > o && !1 !== t.call(e[o], o, e[o]); o++);
      else
        for (o in e)
          if (!1 === t.call(e[o], o, e[o])) break;
      return e
    },
    trim: null,
    makeArray: null,
    inArray: null,
    merge: function(e, t) {
      for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
      return e.length = o, e
    },
    grep: null,
    map: null,
    guid: 1,
    proxy: null,
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

    

    function a(e) {
      return r(null)
    }

    

    function l() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    

    

    

    

    

    

    
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
      K = null,
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
      be = null,
      xe = null;
    try {
      Y.apply(X = Q.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
    } catch (e) {
      Y = {
        apply: X.length ? null : null
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
      }), b.getById ? (x.find.ID = null, x.filter.ID = null) : (delete x.find.ID, x.filter.ID = null), x.find.TAG = b.getElementsByTagName ? null : null, x.find.CLASS = b.getElementsByClassName && null, j = [], k = [], (b.qsa = ge.test(M.querySelectorAll)) && (o(function(e) {
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
      } : null, _ = t ? null : null, M) : M
    }, t.matches = null, t.matchesSelector = null, t.contains = null, t.attr = null, t.error = null, t.uniqueSort = null, C = t.getText = null, x = t.selectors = {
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
        ATTR: null,
        CHILD: null,
        PSEUDO: null
      },
      filter: {
        TAG: null,
        CLASS: null,
        ATTR: null,
        CHILD: null,
        PSEUDO: null
      },
      pseudos: {
        not: r(null),
        has: r(null),
        contains: r(null),
        lang: r(null),
        target: null,
        root: null,
        focus: null,
        enabled: null,
        disabled: null,
        checked: null,
        selected: null,
        empty: null,
        parent: null,
        header: null,
        input: null,
        button: null,
        text: null,
        first: a(null),
        last: a(null),
        eq: a(null),
        even: a(null),
        odd: a(null),
        lt: a(null),
        gt: a(null)
      }
    }, x.pseudos.nth = x.pseudos.eq;
    for (y in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) x.pseudos[y] = function(e) {
      return null
    }(y);
    for (y in {
        submit: !0,
        reset: !0
      }) x.pseudos[y] = function(e) {
      return null
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
    }, A = t.compile = null, S = t.select = null, b.sortStable = F.split("").sort(_).join("") === F, b.detectDuplicates = !!U, E(), b.sortDetached = o(function(e) {
      return 1 & e.compareDocumentPosition(M.createElement("div"))
    }), o(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || i("type|href|height|width", null), b.attributes && o(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || i("value", null), o(function(e) {
      return null == e.getAttribute("disabled")
    }) || i(Z, null), t
  }(e);
  ie.find = de, ie.expr = de.selectors, ie.expr[":"] = ie.expr.pseudos, ie.uniqueSort = ie.unique = de.uniqueSort, ie.text = de.getText, ie.isXMLDoc = de.isXML, ie.contains = de.contains;
  var ce = null,
    fe = null,
    pe = ie.expr.match.needsContext,
    ge = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    he = /^.[^:#\[\.,]*$/;
  ie.filter = null, ie.fn.extend({
    find: function(e) {
      var t, n = this.length,
        r = [],
        o = this;
      if ("string" != typeof e) return this.pushStack(ie(e).filter(null));
      for (t = 0; n > t; t++) ie.find(e, o[t], r);
      return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    },
    filter: null,
    not: null,
    is: null
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
    has: null,
    closest: null,
    index: null,
    add: null,
    addBack: null
  }), ie.each({
    parent: null,
    parents: null,
    parentsUntil: null,
    next: null,
    prev: null,
    nextAll: null,
    prevAll: null,
    nextUntil: null,
    prevUntil: null,
    siblings: null,
    children: null,
    contents: null
  }, function(e, t) {
    ie.fn[e] = null
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
        remove: null,
        has: null,
        empty: null,
        disable: function() {
          return o = a = [], s = n = "", this
        },
        disabled: null,
        lock: function() {
          return o = a = [], n || (s = n = ""), this
        },
        locked: null,
        fireWith: function(e, n) {
          return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
        },
        fire: null,
        fired: null
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
          state: null,
          always: null,
          then: null,
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
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = null, o[i[0] + "With"] = s.fireWith
      }), r.promise(o), e && e.call(o, o), o
    },
    when: null
  });
  var Ce;
  ie.fn.ready = function(e) {
    return ie.ready.promise().done(e), this
  }, ie.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: null,
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
      } else if (void 0 !== r && (o = !0, ie.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = null)), t))
        for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    },
    Te = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  a.uid = 1, a.prototype = {
    register: null,
    cache: function(e) {
      if (!Te(e)) return {};
      var t = e[this.expando];
      return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: null,
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    },
    access: null,
    remove: null,
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
    hasData: null,
    data: null,
    removeData: null,
    _data: null,
    _removeData: null
  }), ie.fn.extend({
    data: null,
    removeData: null
  }), ie.extend({
    queue: null,
    dequeue: null,
    _queueHooks: null
  }), ie.fn.extend({
    queue: null,
    dequeue: null,
    clearQueue: null,
    promise: null
  });
  var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ee = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
    Me = ["Top", "Right", "Bottom", "Left"],
    De = null,
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
        for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = ie.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = null), t = (t || "").match(xe) || [""], l = t.length; l--;) a = Re.exec(t[l]) || [], p = h = a[1], g = (a[2] || "").split(".").sort(), p && (c = ie.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ie.event.special[p] || {}, d = ie.extend({
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
    dispatch: null,
    handlers: null,
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: null
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: null
    },
    fix: null,
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: null,
        delegateType: "focusin"
      },
      blur: {
        trigger: null,
        delegateType: "focusout"
      },
      click: {
        trigger: null,
        _default: null
      },
      beforeunload: {
        postDispatch: null
      }
    }
  }, ie.removeEvent = null, ie.Event = function(e, t) {
    return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : g) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
  }, ie.Event.prototype = {
    constructor: ie.Event,
    isDefaultPrevented: g,
    isPropagationStopped: g,
    isImmediatePropagationStopped: g,
    preventDefault: null,
    stopPropagation: null,
    stopImmediatePropagation: null
  }, ie.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    ie.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: null
    }
  }), ie.fn.extend({
    on: function(e, t, n, r) {
      return m(this, e, t, n, r)
    },
    one: null,
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
    htmlPrefilter: null,
    clone: null,
    cleanData: null
  }), ie.fn.extend({
    domManip: w,
    detach: null,
    remove: null,
    text: null,
    append: null,
    prepend: null,
    before: null,
    after: null,
    empty: null,
    clone: null,
    html: null,
    replaceWith: null
  }), ie.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    ie.fn[e] = null
  });
  var Ve, ze = {
      HTML: "block",
      BODY: "block"
    },
    Xe = /^margin/,
    Je = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
    Ge = null,
    Ye = null,
    Qe = G.documentElement;
  ! function() {
    
    var n, r, o, i, s = G.createElement("div"),
      a = G.createElement("div");
    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ie.extend(re, {
      pixelPosition: null,
      boxSizingReliable: null,
      pixelMarginRight: null,
      reliableMarginLeft: null,
      reliableMarginRight: null
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
        get: null
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
    css: null
  }), ie.each(["height", "width"], function(e, t) {
    ie.cssHooks[t] = {
      get: null,
      set: null
    }
  }), ie.cssHooks.marginLeft = I(re.reliableMarginLeft, null), ie.cssHooks.marginRight = I(re.reliableMarginRight, null), ie.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    ie.cssHooks[e + t] = {
      expand: null
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
    show: null,
    hide: null,
    toggle: null
  }), ie.Tween = k, k.prototype = {
    constructor: k,
    init: null,
    cur: null,
    run: null
  }, k.prototype.init.prototype = k.prototype, k.propHooks = {
    _default: {
      get: null,
      set: null
    }
  }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
    set: null
  }, ie.easing = {
    linear: null,
    swing: null,
    _default: "swing"
  }, ie.fx = k.prototype.init, ie.fx.step = {};
  var rt, ot, it = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
  ie.Animation = ie.extend(R, {
      tweeners: {
        "*": [null]
      },
      tweener: null,
      prefilters: [F],
      prefilter: null
    }), ie.speed = null, ie.fn.extend({
      fadeTo: null,
      animate: null,
      stop: null,
      finish: null
    }), ie.each(["toggle", "show", "hide"], function(e, t) {
      var n = ie.fn[t];
      ie.fn[t] = null
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
      ie.fn[e] = null
    }), ie.timers = [], ie.fx.tick = null, ie.fx.timer = null, ie.fx.interval = 13, ie.fx.start = null, ie.fx.stop = null, ie.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ie.fn.delay = null,
    function() {
      var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));
      e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
  var at, ut = ie.expr.attrHandle;
  ie.fn.extend({
    attr: null,
    removeAttr: null
  }), ie.extend({
    attr: null,
    attrHooks: {
      type: {
        set: null
      }
    },
    removeAttr: null
  }), at = {
    set: null
  }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = ut[t] || ie.find.attr;
    ut[t] = null
  });
  var lt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  ie.fn.extend({
    prop: null,
    removeProp: null
  }), ie.extend({
    prop: null,
    propHooks: {
      tabIndex: {
        get: null
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), re.optSelected || (ie.propHooks.selected = {
    get: null,
    set: null
  }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ie.propFix[this.toLowerCase()] = this
  });
  var ct = /[\t\r\n\f]/g;
  ie.fn.extend({
    addClass: null,
    removeClass: null,
    toggleClass: null,
    hasClass: null
  });
  var ft = /\r/g,
    pt = /[\x20\t\r\n\f]+/g;
  ie.fn.extend({
    val: null
  }), ie.extend({
    valHooks: {
      option: {
        get: null
      },
      select: {
        get: null,
        set: null
      }
    }
  }), ie.each(["radio", "checkbox"], function() {
    ie.valHooks[this] = {
      set: null
    }, re.checkOn || (ie.valHooks[this].get = null)
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
    simulate: null
  }), ie.fn.extend({
    trigger: null,
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? ie.event.trigger(e, t, n, !0) : void 0
    }
  }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    ie.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), ie.fn.extend({
    hover: null
  }), re.focusin = "onfocusin" in e, re.focusin || ie.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = null;
    ie.event.special[t] = {
      setup: null,
      teardown: null
    }
  });
  var ht = e.location,
    mt = ie.now(),
    vt = /\?/;
  ie.parseJSON = null, ie.parseXML = null;
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
    ajax: null,
    getJSON: null,
    getScript: null
  }), ie.each(["get", "post"], function(e, t) {
    ie[t] = null
  }), ie._evalUrl = null, ie.fn.extend({
    wrapAll: null,
    wrapInner: null,
    wrap: null,
    unwrap: null
  }), ie.expr.filters.hidden = null, ie.expr.filters.visible = null;
  var Ut = /%20/g,
    Et = /\[\]$/,
    Mt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  ie.param = null, ie.fn.extend({
    serialize: null,
    serializeArray: null
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
  re.cors = !!jt && "withCredentials" in jt, re.ajax = jt = !!jt, ie.ajaxTransport(null), ie.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": null
    }
  }), ie.ajaxPrefilter("script", null), ie.ajaxTransport("script", null);
  var Ot = [],
    qt = /(=)\?(?=&|$)|\?\?/;
  ie.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: null
  }), ie.ajaxPrefilter("json jsonp", null), ie.parseHTML = null;
  var Ft = ie.fn.load;
  ie.fn.load = null, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    ie.fn[t] = null
  }), ie.expr.filters.animated = null, ie.offset = {
    setOffset: null
  }, ie.fn.extend({
    offset: null,
    position: null,
    offsetParent: null
  }), ie.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    ie.fn[e] = null
  }), ie.each(["top", "left"], function(e, t) {
    ie.cssHooks[t] = I(re.pixelPosition, null)
  }), ie.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    ie.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      ie.fn[r] = null
    })
  }), ie.fn.extend({
    bind: null,
    unbind: null,
    delegate: null,
    undelegate: null,
    size: null
  }), ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], null);
  var Pt = e.jQuery,
    Rt = e.$;
  return ie.noConflict = null, t || (e.jQuery = e.$ = ie), ie
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
  
  e.timer = t
}(TimerUtils || (TimerUtils = {}));
var IframeUtils;
! function(e) {
  

  
  e.getIframe = t, e.deleteIframe = n
}(IframeUtils || (IframeUtils = {}));
var Constants;
! function(e) {
  var t = function() {
    
    return e
  }();
  t.msaMeSrf = "/Me.srf?wa=wsignin1.0&wreply=", t.aadSavedUsers = "/savedusers?wreply=", e.UriFormats = t;
  var n = function() {
    
    return e
  }();
  n.http = "http", n.https = "https", e.UriScheme = n;
  var r = function() {
    
    return e
  }();
  r.separator = "://", e.UriSeparator = r;
  var o = function() {
    
    return e
  }();
  o.remembered = "1", o.signedIn = "2", o.interrupted = "3", e.AuthState = o;
  var i = function() {
    
    return e
  }();
  i.msaFed = "MSAFED", e.Idp = i
}(Constants || (Constants = {}));
var LoggingUtils;
! function(e) {
  

  

  

  
  e.log = n, e.warn = r, e.error = o
}(LoggingUtils || (LoggingUtils = {}));
var IdpUserResult = function() {
    
    return e.prototype.containsValidUser = null, e
  }(),
  DefaultSignInOptions = function() {
    
    var t = !1,
      n = null;
    return e.prototype.isValid = null, e
  }(),
  enableConsoleLog = !1,
  msaFedEnabled = !1;