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
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[206:309]", functionData => eval(functionData))} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[749:785]", functionData => eval(functionData))};
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[904:937]", functionData => eval(functionData))},
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[960:1047]", functionData => eval(functionData))},
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a) {
      return n.each(this, a)
    },
    map: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[1274:1379]", functionData => eval(functionData))},
    slice: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[1403:1464]", functionData => eval(functionData))},
    first: function() {
      return this.eq(0)
    },
    last: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[1542:1574]", functionData => eval(functionData))},
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[1748:1806]", functionData => eval(functionData))},
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[2595:2627]", functionData => eval(functionData))},
    noop: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[2650:2652]", functionData => eval(functionData))},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[2771:2813]", functionData => eval(functionData))},
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[2917:3014]", functionData => eval(functionData))},
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (!l.ownFirst)
        for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[3732:3832]", functionData => eval(functionData))},
    camelCase: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[3861:3915]", functionData => eval(functionData))},
    nodeName: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[3946:4025]", functionData => eval(functionData))},
    each: function(a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[4310:4371]", functionData => eval(functionData))},
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[4570:4796]", functionData => eval(functionData))},
    merge: function(a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[5217:5464]", functionData => eval(functionData))},
    guid: 1,
    proxy: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[5505:5778]", functionData => eval(functionData))},
    now: function() {
      return +new Date
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[6750:6863]", functionData => eval(functionData))},
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[8622:8795]", functionData => eval(functionData))},
      da = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[8819:8840]", functionData => eval(functionData))};
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[9011:9054]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[9072:9192]", functionData => eval(functionData))}
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[10791:10886]", functionData => eval(functionData))}
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ka(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[11333:11594]", functionData => eval(functionData))}

    function la(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[11642:11738]", functionData => eval(functionData))}
    }

    function ma(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[11792:11908]", functionData => eval(functionData))}
    }

    function na(a) {
      return ha(function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[11965:12156]", functionData => eval(functionData))})
    }

    function oa(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[12184:12259]", functionData => eval(functionData))}
    c = fa.support = {}, f = fa.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[13242:13389]", functionData => eval(functionData))}, d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[13417:13544]", functionData => eval(functionData))}) : (delete d.find.ID, d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[13593:13800]", functionData => eval(functionData))}), d.find.TAG = c.getElementsByTagName ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[13856:13994]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[14012:14233]", functionData => eval(functionData))}, d.find.CLASS = c.getElementsByClassName && function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[14293:14408]", functionData => eval(functionData))}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function(a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[15783:16033]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[16051:16164]", functionData => eval(functionData))}, B = b ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[16189:16634]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[16652:17188]", functionData => eval(functionData))}, n) : n
    }, fa.matches = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[17232:17273]", functionData => eval(functionData))}, fa.matchesSelector = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[17311:17669]", functionData => eval(functionData))}, fa.contains = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[17700:17766]", functionData => eval(functionData))}, fa.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[18126:18202]", functionData => eval(functionData))}, fa.uniqueSort = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[18232:18503]", functionData => eval(functionData))}, e = fa.getText = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[18534:18921]", functionData => eval(functionData))}, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
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
        ATTR: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[19384:19552]", functionData => eval(functionData))},
        CHILD: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[19581:19838]", functionData => eval(functionData))},
        PSEUDO: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[19868:20145]", functionData => eval(functionData))}
      },
      filter: {
        TAG: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[20196:20426]", functionData => eval(functionData))},
        CLASS: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[20455:20755]", functionData => eval(functionData))},
        ATTR: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[20789:21238]", functionData => eval(functionData))},
        CHILD: function(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[21279:23060]", functionData => eval(functionData))},
        PSEUDO: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[23093:23543]", functionData => eval(functionData))}
      },
      pseudos: {
        not: ha(function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[23598:23984]", functionData => eval(functionData))}),
        has: ha(function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24015:24108]", functionData => eval(functionData))}),
        contains: ha(function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24144:24311]", functionData => eval(functionData))}),
        lang: ha(function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24343:24769]", functionData => eval(functionData))}),
        target: function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24800:24902]", functionData => eval(functionData))},
        root: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24930:24966]", functionData => eval(functionData))},
        focus: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[24995:25117]", functionData => eval(functionData))},
        enabled: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25148:25194]", functionData => eval(functionData))},
        disabled: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25226:25272]", functionData => eval(functionData))},
        checked: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25303:25438]", functionData => eval(functionData))},
        selected: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25470:25560]", functionData => eval(functionData))},
        empty: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25589:25718]", functionData => eval(functionData))},
        parent: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25748:25796]", functionData => eval(functionData))},
        header: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25826:25873]", functionData => eval(functionData))},
        input: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25902:25949]", functionData => eval(functionData))},
        button: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[25979:26106]", functionData => eval(functionData))},
        text: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26134:26309]", functionData => eval(functionData))},
        first: na(function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26340:26372]", functionData => eval(functionData))}),
        last: na(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26407:26443]", functionData => eval(functionData))}),
        eq: na(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26479:26527]", functionData => eval(functionData))}),
        even: na(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26562:26644]", functionData => eval(functionData))}),
        odd: na(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26678:26760]", functionData => eval(functionData))}),
        lt: na(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26796:26890]", functionData => eval(functionData))}),
        gt: na(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[26926:27019]", functionData => eval(functionData))})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[27417:28092]", functionData => eval(functionData))};

    function qa(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[28114:28209]", functionData => eval(functionData))}

    function ra(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[28236:28921]", functionData => eval(functionData))}

    function sa(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[28942:29117]", functionData => eval(functionData))}

    function ta(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[29144:29230]", functionData => eval(functionData))}

    function ua(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[29263:29423]", functionData => eval(functionData))}

    function va(a, b, c, d, e, f) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[29459:30402]", functionData => eval(functionData))}

    function wa(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[30423:31366]", functionData => eval(functionData))}

    function xa(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[31390:32580]", functionData => eval(functionData))}
    return h = fa.compile = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[32624:32877]", functionData => eval(functionData))}, i = fa.select = function(a, b, e, f) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[32916:33841]", functionData => eval(functionData))}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[34197:34284]", functionData => eval(functionData))}), c.attributes && ia(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[34481:34569]", functionData => eval(functionData))}), ia(function(a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[34671:34809]", functionData => eval(functionData))}), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[35024:35229]", functionData => eval(functionData))},
    v = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[35254:35363]", functionData => eval(functionData))},
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[35645:35679]", functionData => eval(functionData))});
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[35825:35872]", functionData => eval(functionData))})
  }
  n.filter = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[35909:36132]", functionData => eval(functionData))}, n.fn.extend({
    find: function(a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[36310:36399]", functionData => eval(functionData))}));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[36682:36739]", functionData => eval(functionData))},
    is: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[36761:36854]", functionData => eval(functionData))}
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        if (f = d.getElementById(e[2]), f && f.parentNode) {
          if (f.id !== e[2]) return A.find(a);
          this.length = 1, this[0] = f
        }
        return this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[38234:38419]", functionData => eval(functionData))},
    closest: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[38449:38865]", functionData => eval(functionData))},
    index: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[38890:39070]", functionData => eval(functionData))},
    add: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39096:39175]", functionData => eval(functionData))},
    addBack: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39202:39288]", functionData => eval(functionData))}
  });

  function F(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39315:39381]", functionData => eval(functionData))}
  n.each({
    parent: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39417:39499]", functionData => eval(functionData))},
    parents: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39526:39565]", functionData => eval(functionData))},
    parentsUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39603:39645]", functionData => eval(functionData))},
    next: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39669:39709]", functionData => eval(functionData))},
    prev: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39733:39777]", functionData => eval(functionData))},
    nextAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39804:39844]", functionData => eval(functionData))},
    prevAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39871:39915]", functionData => eval(functionData))},
    nextUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[39950:39993]", functionData => eval(functionData))},
    prevUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[40028:40075]", functionData => eval(functionData))},
    siblings: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[40103:40161]", functionData => eval(functionData))},
    children: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[40189:40225]", functionData => eval(functionData))},
    contents: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[40253:40373]", functionData => eval(functionData))}
  }, function(a, b) {
    n.fn[a] = function(c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[40425:40667]", functionData => eval(functionData))}
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function(b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[41615:41796]", functionData => eval(functionData))},
        has: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[41823:41891]", functionData => eval(functionData))},
        empty: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[41919:41967]", functionData => eval(functionData))},
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[42085:42116]", functionData => eval(functionData))},
        lock: function() {
          return e = !0, c || j.disable(), this
        },
        locked: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[42231:42263]", functionData => eval(functionData))},
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[42433:42495]", functionData => eval(functionData))},
        fired: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[42523:42555]", functionData => eval(functionData))}
      };
    return j
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[42976:43048]", functionData => eval(functionData))},
          then: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[43077:43607]", functionData => eval(functionData))},
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[44996:45041]", functionData => eval(functionData))},
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
  }
  n.ready.promise = function(b) {
    if (!I)
      if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
      else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
    else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && d.documentElement
      } catch (e) {}
      c && c.doScroll && ! function f() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[46129:46321]", functionData => eval(functionData))}()
    }
    return I.promise(b)
  }, n.ready.promise();
  var L;
  for (L in n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
      var a, b, c, e;
      c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
    function() {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        l.deleteExpando = !1
      }
      a = null
    }();
  var M = function(a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[47457:47856]", functionData => eval(functionData))}

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }

  function S(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[48690:49275]", functionData => eval(functionData))}
  n.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(a) {
        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
      },
      data: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[49591:49626]", functionData => eval(functionData))},
      removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[49661:49693]", functionData => eval(functionData))},
      _data: function(a, b, c) {
        return R(a, b, c, !0)
      },
      _removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[49801:49837]", functionData => eval(functionData))}
    }), n.fn.extend({
      data: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[49887:50542]", functionData => eval(functionData))},
      removeData: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[50574:50664]", functionData => eval(functionData))}
    }), n.extend({
      queue: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[50715:50898]", functionData => eval(functionData))},
      dequeue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[50930:51301]", functionData => eval(functionData))},
      _queueHooks: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[51337:51576]", functionData => eval(functionData))}
    }), n.fn.extend({
      queue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[51627:51950]", functionData => eval(functionData))},
      dequeue: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[51979:52066]", functionData => eval(functionData))},
      clearQueue: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[52098:52148]", functionData => eval(functionData))},
      promise: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[52180:52564]", functionData => eval(functionData))}
    }),
    function() {
      var a;
      l.shrinkWrapBlocks = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[52641:53281]", functionData => eval(functionData))}
    }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[53477:53575]", functionData => eval(functionData))};

  function X(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[53603:54196]", functionData => eval(functionData))}
  var Y = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[54539:54583]", functionData => eval(functionData))})), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }! function() {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[56804:57213]", functionData => eval(functionData))}

  function fa(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[57235:57348]", functionData => eval(functionData))}
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;

  function ia(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[57411:57469]", functionData => eval(functionData))}

  function ja(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[57500:58820]", functionData => eval(functionData))}! function() {
    var b, c, e = d.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    e = null
  }();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[59292:59311]", functionData => eval(functionData))}

  function qa() {
    return !1
  }

  function ra() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[59366:59429]", functionData => eval(functionData))}

  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) sa(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[59870:59927]", functionData => eval(functionData))}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[60353:60495]", functionData => eval(functionData))}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function(b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;
          try {
            e[q]()
          } catch (s) {}
          n.event.triggered = void 0, m && (e[h] = m)
        }
        return b.result
      }
    },
    dispatch: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[64222:65097]", functionData => eval(functionData))},
    handlers: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[65128:65837]", functionData => eval(functionData))},
    fix: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[65860:66380]", functionData => eval(functionData))},
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[66648:66750]", functionData => eval(functionData))}
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[66929:67516]", functionData => eval(functionData))}
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[67626:67747]", functionData => eval(functionData))},
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[67832:67916]", functionData => eval(functionData))},
        delegateType: "focusout"
      },
      click: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68003:68129]", functionData => eval(functionData))},
        _default: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68161:68215]", functionData => eval(functionData))}
      },
      beforeunload: {
        postDispatch: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68281:68385]", functionData => eval(functionData))}
      }
    },
    simulate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68433:68612]", functionData => eval(functionData))}
  }, n.removeEvent = d.removeEventListener ? function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68676:68738]", functionData => eval(functionData))} : function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[68759:68874]", functionData => eval(functionData))}, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[69429:69572]", functionData => eval(functionData))},
    stopPropagation: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[69606:69775]", functionData => eval(functionData))},
    stopImmediatePropagation: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[69818:69994]", functionData => eval(functionData))}
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[70247:70467]", functionData => eval(functionData))}
    }
  }), l.submit || (n.event.special.submit = {
    setup: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[70542:70949]", functionData => eval(functionData))},
    postDispatch: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[70981:71121]", functionData => eval(functionData))},
    teardown: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[71148:71238]", functionData => eval(functionData))}
  }), l.change || (n.event.special.change = {
    setup: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[71307:72076]", functionData => eval(functionData))},
    handle: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[72102:72290]", functionData => eval(functionData))},
    teardown: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[72317:72395]", functionData => eval(functionData))}
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[72513:72572]", functionData => eval(functionData))};
    n.event.special[b] = {
      setup: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[72625:72778]", functionData => eval(functionData))},
      teardown: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[72807:72979]", functionData => eval(functionData))}
    }
  }), n.fn.extend({
    on: function(a, b, c, d) {
      return sa(this, a, b, c, d)
    },
    one: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[73108:73152]", functionData => eval(functionData))},
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[73688:73776]", functionData => eval(functionData))},
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[74326:74521]", functionData => eval(functionData))}

  function Da(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[74540:74617]", functionData => eval(functionData))}

  function Ea(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[74636:74730]", functionData => eval(functionData))}

  function Fa(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[74752:75101]", functionData => eval(functionData))}

  function Ga(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[75123:75870]", functionData => eval(functionData))}

  function Ha(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[75898:76862]", functionData => eval(functionData))}

  function Ia(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[76887:77133]", functionData => eval(functionData))}
  n.extend({
    htmlPrefilter: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[77178:77225]", functionData => eval(functionData))},
    clone: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[77256:77917]", functionData => eval(functionData))},
    cleanData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[77949:78393]", functionData => eval(functionData))}
  }), n.fn.extend({
    domManip: Ha,
    detach: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[78456:78492]", functionData => eval(functionData))},
    remove: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[78518:78550]", functionData => eval(functionData))},
    text: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[78574:78776]", functionData => eval(functionData))},
    append: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[78801:79014]", functionData => eval(functionData))},
    prepend: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[79040:79268]", functionData => eval(functionData))},
    before: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[79293:79421]", functionData => eval(functionData))},
    after: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[79445:79585]", functionData => eval(functionData))},
    empty: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[79609:79878]", functionData => eval(functionData))},
    clone: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[79906:80039]", functionData => eval(functionData))},
    html: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[80063:80734]", functionData => eval(functionData))},
    replaceWith: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[80764:80969]", functionData => eval(functionData))}
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[81167:81352]", functionData => eval(functionData))}
  });
  var Ja, Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[81439:81555]", functionData => eval(functionData))}

  function Ma(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[81574:81883]", functionData => eval(functionData))}
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[81992:82164]", functionData => eval(functionData))},
    Qa = d.documentElement;
  ! function() {
    var b, c, e, f, g, h, i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[82920:82968]", functionData => eval(functionData))},
        boxSizingReliable: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83008:83056]", functionData => eval(functionData))},
        pixelMarginRight: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83095:83143]", functionData => eval(functionData))},
        pixelPosition: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83179:83227]", functionData => eval(functionData))},
        reliableMarginRight: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83269:83317]", functionData => eval(functionData))},
        reliableMarginLeft: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83358:83406]", functionData => eval(functionData))}
      });

      function k() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[83437:84769]", functionData => eval(functionData))}
    }
  }();
  var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[84872:84977]", functionData => eval(functionData))}, Sa = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[85002:85426]", functionData => eval(functionData))}) : Qa.currentStyle && (Ra = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[85467:85498]", functionData => eval(functionData))}, Sa = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[85523:85896]", functionData => eval(functionData))});

  function Ua(a, b) {
    return {
      get: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[85957:86048]", functionData => eval(functionData))}
    }
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;

  function bb(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[86470:86634]", functionData => eval(functionData))}

  function cb(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[86656:87207]", functionData => eval(functionData))}

  function db(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[87232:87326]", functionData => eval(functionData))}

  function eb(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[87357:87777]", functionData => eval(functionData))}

  function fb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[87802:88251]", functionData => eval(functionData))}
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[88326:88444]", functionData => eval(functionData))}
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
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[88866:89581]", functionData => eval(functionData))},
    css: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[89613:89956]", functionData => eval(functionData))}
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[90059:90227]", functionData => eval(functionData))},
      set: function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[90258:90405]", functionData => eval(functionData))}
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[90479:90627]", functionData => eval(functionData))},
    set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[90653:91041]", functionData => eval(functionData))}
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[91114:91212]", functionData => eval(functionData))}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[91279:91523]", functionData => eval(functionData))}), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[91662:91823]", functionData => eval(functionData))}
    }, Na.test(a) || (n.cssHooks[a + b].set = db)
  }), n.fn.extend({
    css: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[91918:92249]", functionData => eval(functionData))},
    show: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92272:92305]", functionData => eval(functionData))},
    hide: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92328:92357]", functionData => eval(functionData))},
    toggle: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92383:92541]", functionData => eval(functionData))}
  });

  function gb(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92578:92631]", functionData => eval(functionData))}
  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function(a, b, c, d, e, f) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92723:92918]", functionData => eval(functionData))},
    cur: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[92940:93058]", functionData => eval(functionData))},
    run: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[93081:93473]", functionData => eval(functionData))}
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[93579:93776]", functionData => eval(functionData))},
      set: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[93801:94017]", functionData => eval(functionData))}
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94103:94181]", functionData => eval(functionData))}
  }, n.easing = {
    linear: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94224:94246]", functionData => eval(functionData))},
    swing: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94271:94322]", functionData => eval(functionData))},
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb, ib, jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;

  function lb() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94479:94560]", functionData => eval(functionData))}

  function mb(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function nb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94807:94957]", functionData => eval(functionData))}

  function ob(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[94982:96806]", functionData => eval(functionData))}

  function pb(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[96828:97160]", functionData => eval(functionData))}

  function qb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[97185:98933]", functionData => eval(functionData))}
  n.Animation = n.extend(qb, {
      tweeners: {
        "*": [function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[99012:99112]", functionData => eval(functionData))}]
      },
      tweener: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[99153:99353]", functionData => eval(functionData))},
      prefilters: [ob],
      prefilter: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[99411:99481]", functionData => eval(functionData))}
    }), n.speed = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[99518:100085]", functionData => eval(functionData))}, n.fn.extend({
      fadeTo: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[100136:100257]", functionData => eval(functionData))},
      animate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[100295:100608]", functionData => eval(functionData))},
      stop: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[100640:101323]", functionData => eval(functionData))},
      finish: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[101351:101900]", functionData => eval(functionData))}
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102018:102139]", functionData => eval(functionData))}
    }), n.each({
      slideDown: mb("show"),
      slideUp: mb("hide"),
      slideToggle: mb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102457:102506]", functionData => eval(functionData))}
    }), n.timers = [], n.fx.tick = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102553:102738]", functionData => eval(functionData))}, n.fx.timer = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102765:102832]", functionData => eval(functionData))}, n.fx.interval = 13, n.fx.start = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102878:102944]", functionData => eval(functionData))}, n.fx.stop = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[102969:103013]", functionData => eval(functionData))}, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[103120:103335]", functionData => eval(functionData))},
    function() {
      var a, b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[104390:105152]", functionData => eval(functionData))}
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[105227:105349]", functionData => eval(functionData))}
      },
      select: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[105400:105881]", functionData => eval(functionData))},
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[105911:106287]", functionData => eval(functionData))}
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[106402:106492]", functionData => eval(functionData))}
    }, l.checkOn || (n.valHooks[this].get = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[106549:106619]", functionData => eval(functionData))})
  });
  var tb, ub, vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[106882:106964]", functionData => eval(functionData))}
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[107573:107767]", functionData => eval(functionData))}
      }
    },
    removeAttr: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[107814:108115]", functionData => eval(functionData))}
  }), ub = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[108156:108326]", functionData => eval(functionData))}
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[108486:108613]", functionData => eval(functionData))} : vb[b] = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[108642:108731]", functionData => eval(functionData))}
  }), yb && xb || (n.attrHooks.value = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[108800:108894]", functionData => eval(functionData))}
  }), xb || (tb = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[108942:109137]", functionData => eval(functionData))}
  }, vb.id = vb.name = vb.coords = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109191:109294]", functionData => eval(functionData))}, n.valHooks.button = {
    get: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109342:109435]", functionData => eval(functionData))},
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109517:109562]", functionData => eval(functionData))}
  }, n.each(["width", "height"], function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109611:109747]", functionData => eval(functionData))})), l.style || (n.attrHooks.style = {
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109806:109852]", functionData => eval(functionData))},
    set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[109878:109923]", functionData => eval(functionData))}
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[110054:110118]", functionData => eval(functionData))},
    removeProp: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[110148:110303]", functionData => eval(functionData))}
  }), n.extend({
    prop: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[110349:110649]", functionData => eval(functionData))},
    propHooks: {
      tabIndex: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[110711:110869]", functionData => eval(functionData))}
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[111022:111125]", functionData => eval(functionData))}), l.optSelected || (n.propHooks.selected = {
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[111192:111313]", functionData => eval(functionData))},
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[111336:111444]", functionData => eval(functionData))}
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || ""
  }
  n.fn.extend({
    addClass: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[111828:112373]", functionData => eval(functionData))},
    removeClass: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[112404:113051]", functionData => eval(functionData))},
    toggleClass: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[113085:113733]", functionData => eval(functionData))},
    hasClass: function(a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[114362:114420]", functionData => eval(functionData))}
  });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[114652:114971]", functionData => eval(functionData))}, n.parseXML = function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[114998:115396]", functionData => eval(functionData))};
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Ub(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[116142:116483]", functionData => eval(functionData))}

  function Vb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }

  function Wb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[116701:117254]", functionData => eval(functionData))}

  function Xb(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[117282:118269]", functionData => eval(functionData))}
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
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
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function(b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[119364:123903]", functionData => eval(functionData))},
    getJSON: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[123936:123979]", functionData => eval(functionData))},
    getScript: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[124011:124061]", functionData => eval(functionData))}
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[124141:124356]", functionData => eval(functionData))}
  }), n._evalUrl = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[124388:124550]", functionData => eval(functionData))}, n.fn.extend({
    wrapAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[124591:125036]", functionData => eval(functionData))},
    wrapInner: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125065:125312]", functionData => eval(functionData))},
    wrap: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125336:125469]", functionData => eval(functionData))},
    unwrap: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125494:125634]", functionData => eval(functionData))}
  });

  function Yb(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125659:125725]", functionData => eval(functionData))}

  function Zb(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125744:125947]", functionData => eval(functionData))}
  n.expr.filters.hidden = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[125986:126110]", functionData => eval(functionData))}, n.expr.filters.visible = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[126149:126191]", functionData => eval(functionData))};
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[126373:126667]", functionData => eval(functionData))}
  n.param = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[126695:127151]", functionData => eval(functionData))}, n.fn.extend({
    serialize: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[127193:127244]", functionData => eval(functionData))},
    serializeArray: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[127277:127918]", functionData => eval(functionData))}
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[127986:128124]", functionData => eval(functionData))} : hc;
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[128245:128290]", functionData => eval(functionData))}), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[128389:129782]", functionData => eval(functionData))});

  function hc() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function ic() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[129888:129976]", functionData => eval(functionData))}
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[130235:130278]", functionData => eval(functionData))}
    }
  }), n.ajaxPrefilter("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[130329:130425]", functionData => eval(functionData))}), n.ajaxTransport("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[130466:131115]", functionData => eval(functionData))});
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[131232:131318]", functionData => eval(functionData))}
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[131373:132225]", functionData => eval(functionData))}), n.parseHTML = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[132260:132535]", functionData => eval(functionData))};
  var lc = n.fn.load;
  n.fn.load = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[132591:133219]", functionData => eval(functionData))}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[133354:133388]", functionData => eval(functionData))}
  }), n.expr.filters.animated = function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[133433:133520]", functionData => eval(functionData))};

  function mc(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[133540:133632]", functionData => eval(functionData))}
  n.offset = {
    setOffset: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[133681:134265]", functionData => eval(functionData))}
  }, n.fn.extend({
    offset: function(a) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[134309:134892]", functionData => eval(functionData))},
    position: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[134919:135450]", functionData => eval(functionData))},
    offsetParent: function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[135481:135691]", functionData => eval(functionData))}
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function(d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[135840:136124]", functionData => eval(functionData))}
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[136227:136319]", functionData => eval(functionData))})
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[136535:137052]", functionData => eval(functionData))}
    })
  }), n.fn.extend({
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137180:137221]", functionData => eval(functionData))},
    delegate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137258:137298]", functionData => eval(functionData))},
    undelegate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137334:137425]", functionData => eval(functionData))}
  }), n.fn.size = function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137455:137483]", functionData => eval(functionData))}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137591:137609]", functionData => eval(functionData))});
  var nc = a.jQuery,
    oc = a.$;
  return n.noConflict = function(b) {lacuna_lazy_load("lacuna_cache/imported_tklg4y.js[137683:137766]", functionData => eval(functionData))}, b || (a.jQuery = a.$ = n), n
});