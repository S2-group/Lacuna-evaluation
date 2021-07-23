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
/*6b61447d852966a68d491394f7dccddd*/
(function(win) {
  "use strict";
  var listeners = [];
  var doc = win.document;
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  var observer;
  if (typeof MutationObserver !== "function") {
    return
  }

  function elemReady(selector, fn) {
    listeners.push({
      selector: selector,
      fn: fn
    });
    if (!observer) {
      observer = new MutationObserver(checkDOMforElem);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      })
    }
    checkDOMforElem()
  }

  function checkDOMforElem() {
    var len = listeners.length;
    var listener;
    var elems;
    var elem;
    for (var i = 0; i < len; i++) {
      listener = listeners[i];
      elems = doc.querySelectorAll(listener.selector);
      for (var j = 0; j < elems.length; j++) {
        elem = elems[j];
        if (!elem.elemReady) {
          elem.elemReady = true;
          listener.fn.call(elem, elem)
        }
        if (j === elems.length) {
          observer.disconnect()
        }
      }
    }
  }
  if (typeof AWS.Nav !== "object") {
    AWS.Nav = {}
  }
  AWS.Nav.elemReady = elemReady
})(this); /*a519bb836b5febadd955a739e0631733*/
if (typeof AWS.Nav === "object" && typeof AWS.Nav.elemReady === "function") {
  AWS.Nav.elemReady(".m-nav-header", function() {
    var navHeader = document.getElementsByClassName("m-nav-header")[0];
    AWS.isNavHeaderVisible = navHeader.offsetHeight;
    if (AWS.isNavHeaderVisible) {
      var navHeaderHeight = Math.floor(navHeader.offsetHeight);
      var secondaryLinksSingleRowMargin = "80px";
      var secondaryLinksElem = document.getElementsByClassName("m-nav-secondary-links")[0];
      var navHeaderSingleRowHeight = 68;
      var isRTL = AWS.PageSettings.isRTL;
      if (navHeaderHeight <= navHeaderSingleRowHeight && !isRTL) {
        secondaryLinksElem.style.marginLeft = secondaryLinksSingleRowMargin
      }
      if (navHeaderHeight > navHeaderSingleRowHeight) {
        navHeader.classList.add("m-nav-double-row")
      } else {
        navHeader.classList.add("m-nav-single-row")
      }
    }
  });
  AWS.Nav.elemReady("#aws-page-content", function() {
    if (AWS.isNavHeaderVisible) {
      if (document.getElementsByClassName("m-page-header").length) {
        var navPageHeaderHeight = Math.floor(document.getElementsByClassName("m-page-header")[0].offsetHeight);
        var html = document.getElementsByTagName("html")[0];
        var body = document.getElementsByTagName("body")[0];
        var v1PagePadding = 30;
        var setTopOffset = function() {
          if (body.classList.contains("homepage")) {
            body.style.paddingTop = navPageHeaderHeight + "px"
          } else if (html.classList.contains("aws-v1-page")) {
            body.style.paddingTop = navPageHeaderHeight + v1PagePadding + "px"
          } else if (body.classList.contains("aws-blogs-page")) {
            var blogSubNav = document.getElementsByClassName("lb-blog-nav")[0];
            var blogSubNavHeight = Math.floor(blogSubNav.offsetHeight);
            blogSubNav.style.top = navPageHeaderHeight + "px";
            this.style.marginTop = navPageHeaderHeight + blogSubNavHeight + "px"
          } else {
            this.style.marginTop = navPageHeaderHeight + "px"
          }
        }.bind(this);
        setTopOffset();
        var watchHeader = window.setInterval(function() {
          var watchedHeaderHeight = Math.floor(document.getElementsByClassName("m-page-header")[0].offsetHeight);
          if (body.classList.contains("m-nav-panel-active")) {
            return
          }
          if (watchedHeaderHeight > navPageHeaderHeight) {
            navPageHeaderHeight = watchedHeaderHeight;
            setTopOffset()
          }
        }, 20);
        window.setTimeout(function() {
          clearInterval(watchHeader)
        }, 1e4)
      }
    }
  })
} /*c9f5aeeca3ad37bf2aa006139b935f0a*/ /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[4209:4312]", functionData => eval(functionData))} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};

  function p(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[4670:4794]", functionData => eval(functionData))}
  var q = "3.2.1",
    r = function(a, b) {
      return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function(a, b) {
      return b.toUpperCase()
    };
  r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[5123:5156]", functionData => eval(functionData))},
    get: function(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
    },
    pushStack: function(a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b
    },
    each: function(a) {
      return r.each(this, a)
    },
    map: function(a) {
      return this.pushStack(r.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[5596:5657]", functionData => eval(functionData))},
    first: function() {
      return this.eq(0)
    },
    last: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[5735:5767]", functionData => eval(functionData))},
    eq: function(a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
    },
    end: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[5941:5999]", functionData => eval(functionData))},
    push: h,
    sort: c.sort,
    splice: c.splice
  }, r.extend = r.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[6796:6828]", functionData => eval(functionData))},
    noop: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[6851:6853]", functionData => eval(functionData))},
    isFunction: function(a) {
      return "function" === r.type(a)
    },
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[7033:7142]", functionData => eval(functionData))},
    isPlainObject: function(a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
    },
    isEmptyObject: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[7396:7462]", functionData => eval(functionData))},
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[7642:7660]", functionData => eval(functionData))},
    camelCase: function(a) {
      return a.replace(t, "ms-").replace(u, v)
    },
    each: function(a, b) {
      var c, d = 0;
      if (w(a)) {
        for (c = a.length; d < c; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[8028:8089]", functionData => eval(functionData))},
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : i.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, e, f = 0,
        h = [];
      if (w(a))
        for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
      else
        for (f in a) e = b(a[f], f, c), null != e && h.push(e);
      return g.apply([], h)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, e;
      if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
        return a.apply(b || this, d.concat(f.call(arguments)))
      }, e.guid = a.guid = a.guid || r.guid++, e
    },
    now: Date.now,
    support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    j["[object " + b + "]"] = b.toLowerCase()
  });

  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }
  var x = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[10145:10258]", functionData => eval(functionData))},
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
      N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[11993:12166]", functionData => eval(functionData))},
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[12260:12393]", functionData => eval(functionData))},
      da = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[12417:12438]", functionData => eval(functionData))},
      ea = ta(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[12466:12541]", functionData => eval(functionData))}, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[12774:12817]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[12835:12955]", functionData => eval(functionData))}
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))
          if (f = l[1]) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d
          } catch (x) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function la(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[15054:15299]", functionData => eval(functionData))}

    function ma(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[15347:15443]", functionData => eval(functionData))}
    }

    function na(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[15497:15613]", functionData => eval(functionData))}
    }

    function oa(a) {
      return function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[15667:15942]", functionData => eval(functionData))}
    }

    function pa(a) {
      return ia(function(b) {
        return b = +b, ia(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function qa(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[16218:16293]", functionData => eval(functionData))}
    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[17284:17410]", functionData => eval(functionData))}, d.find.ID = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[17439:17586]", functionData => eval(functionData))}) : (d.filter.ID = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[17617:17823]", functionData => eval(functionData))}, d.find.ID = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[17852:18264]", functionData => eval(functionData))}), d.find.TAG = c.getElementsByTagName ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[18320:18458]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[18476:18697]", functionData => eval(functionData))}, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function(a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[20733:20846]", functionData => eval(functionData))}, B = b ? function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[20871:21316]", functionData => eval(functionData))} : function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[21334:21870]", functionData => eval(functionData))}, n) : n
    }, ga.matches = function(a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, ga.escape = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[22809:22854]", functionData => eval(functionData))}, ga.error = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[22879:22955]", functionData => eval(functionData))}, ga.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[23287:23674]", functionData => eval(functionData))}, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
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
        ATTR: function(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[24332:24589]", functionData => eval(functionData))},
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(_, aa).toLowerCase();
          return "*" === a ? function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[25039:25074]", functionData => eval(functionData))} : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
          }
        },
        CHILD: function(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[26024:27805]", functionData => eval(functionData))},
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[28079:28214]", functionData => eval(functionData))}) : function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[28230:28273]", functionData => eval(functionData))}) : e
        }
      },
      pseudos: {
        not: ia(function(a) {
          var b = [],
            c = [],
            d = h(a.replace(P, "$1"));
          return d[u] ? ia(function(a, b, c, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[28474:28615]", functionData => eval(functionData))}) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[28760:28853]", functionData => eval(functionData))}),
        contains: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[28889:29055]", functionData => eval(functionData))}),
        lang: ia(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[29087:29512]", functionData => eval(functionData))}),
        target: function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[29543:29645]", functionData => eval(functionData))},
        root: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[29673:29709]", functionData => eval(functionData))},
        focus: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[29738:29860]", functionData => eval(functionData))},
        enabled: oa(!1),
        disabled: oa(!0),
        checked: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[29942:30077]", functionData => eval(functionData))},
        selected: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30109:30199]", functionData => eval(functionData))},
        empty: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30228:30357]", functionData => eval(functionData))},
        parent: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30387:30435]", functionData => eval(functionData))},
        header: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30465:30512]", functionData => eval(functionData))},
        input: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30541:30588]", functionData => eval(functionData))},
        button: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30618:30745]", functionData => eval(functionData))},
        text: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30773:30948]", functionData => eval(functionData))},
        first: pa(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[30979:31011]", functionData => eval(functionData))}),
        last: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[31046:31082]", functionData => eval(functionData))}),
        eq: pa(function(a, b, c) {
          return [c < 0 ? c + b : c]
        }),
        even: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[31201:31283]", functionData => eval(functionData))}),
        odd: pa(function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[31317:31399]", functionData => eval(functionData))}),
        lt: pa(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[31435:31529]", functionData => eval(functionData))}),
        gt: pa(function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[31565:31658]", functionData => eval(functionData))})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function ra() {}
    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d
    }

    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first ? function(b, c, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[33033:33141]", functionData => eval(functionData))} : function(b, c, i) {
        var j, k, l, m = [w, h];
        if (i) {
          while (b = b[d])
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || g)
              if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
              else {
                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                if (k[f] = m, m[2] = a(b, c, i)) return !0
              } return !1
      }
    }

    function ua(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function va(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[33947:34033]", functionData => eval(functionData))}

    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || va(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : wa(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
      })
    }

    function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[35353:35389]", functionData => eval(functionData))}, h, !0), l = ta(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[35418:35459]", functionData => eval(functionData))}, h, !0), m = [function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; i < f; i++)
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++)
              if (d.relative[a[e].type]) break;
            return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
          }
          m.push(c)
        } return ua(m)
    }

    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                } k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u)
            }
            G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ia(f) : f
    }
    return h = ga.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, za(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function(a, b, c, e) {
      var f, i, j, k, l, m = "function" == typeof a && a,
        n = !e && g(a = m.selector || a);
      if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
          m && (b = b.parentNode), a = a.slice(i.shift().value.length)
        }
        f = V.needsContext.test(a) ? 0 : i.length;
        while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;
          if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
            break
          }
        }
      }
      return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[38990:39072]", functionData => eval(functionData))}), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[39269:39352]", functionData => eval(functionData))}), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(J, function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[39454:39587]", functionData => eval(functionData))}), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a)
        } return d
    },
    z = function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    A = r.expr.match.needsContext;

  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    }) : b.nodeType ? r.grep(a, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[40568:40602]", functionData => eval(functionData))}) : "string" != typeof b ? r.grep(a, function(a) {
      return i.call(b, a) > -1 !== c
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[40774:40838]", functionData => eval(functionData))}))
  }
  r.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, r.fn.extend({
    find: function(a) {
      var b, c, d = this.length,
        e = this;
      if ("string" != typeof a) return this.pushStack(r(a).filter(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[41267:41356]", functionData => eval(functionData))}));
      for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c
    },
    filter: function(a) {
      return this.pushStack(E(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(E(this, a || [], !0))
    },
    is: function(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
    }
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = r.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || F, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
            for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
    J = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  r.fn.extend({
    has: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[42886:43072]", functionData => eval(functionData))},
    closest: function(a, b) {
      var c, d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
              f.push(c);
              break
            } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function K(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[43993:44055]", functionData => eval(functionData))}
  r.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return y(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44277:44319]", functionData => eval(functionData))},
    next: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44343:44383]", functionData => eval(functionData))},
    prev: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44407:44451]", functionData => eval(functionData))},
    nextAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44478:44518]", functionData => eval(functionData))},
    prevAll: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44545:44589]", functionData => eval(functionData))},
    nextUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44624:44667]", functionData => eval(functionData))},
    prevUntil: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44702:44749]", functionData => eval(functionData))},
    siblings: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44777:44835]", functionData => eval(functionData))},
    children: function(a) {
      return z(a.firstChild)
    },
    contents: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[44927:45054]", functionData => eval(functionData))}
  }, function(a, b) {
    r.fn[a] = function(c, d) {
      var e = r.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  r.Callbacks = function(a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            r.each(b, function(b, c) {
              r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[46302:46483]", functionData => eval(functionData))},
        has: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[46510:46578]", functionData => eval(functionData))},
        empty: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[46606:46654]", functionData => eval(functionData))},
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[46772:46803]", functionData => eval(functionData))},
        lock: function() {
          return e = g = [], c || b || (f = c = ""), this
        },
        locked: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[46928:46960]", functionData => eval(functionData))},
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {
          return j.fireWith(this, arguments), this
        },
        fired: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[47220:47252]", functionData => eval(functionData))}
      };
    return j
  };

  function N(a) {
    return a
  }

  function O(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[47333:47350]", functionData => eval(functionData))}

  function P(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[47377:47603]", functionData => eval(functionData))}
  r.extend({
    Deferred: function(b) {
      var c = [
          ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
          ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
        ],
        d = "pending",
        e = {
          state: function() {
            return d
          },
          always: function() {
            return f.done(arguments).fail(arguments), this
          },
          "catch": function(a) {
            return e.then(null, a)
          },
          pipe: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[48269:48778]", functionData => eval(functionData))},
          then: function(b, d, e) {
            var f = 0;

            function g(b, c, d, e) {
              return function() {
                var h = this,
                  i = arguments,
                  j = function() {
                    var a, j;
                    if (!(b < f)) {
                      if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                      j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                    }
                  },
                  k = e ? j : function() {
                    try {
                      j()
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                    }
                  };
                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
              }
            }
            return r.Deferred(function(a) {
              c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
            }).promise()
          },
          promise: function(a) {
            return null != a ? r.extend(a, e) : e
          }
        },
        f = {};
      return r.each(c, function(a, b) {
        var g = b[2],
          h = b[5];
        e[b[1]] = g.add, h && g.add(function() {
          d = h
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[50608:50698]", functionData => eval(functionData))}, f[b[0] + "With"] = g.fireWith
      }), e.promise(f), b && b.call(f, f), f
    },
    when: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[50804:51331]", functionData => eval(functionData))}
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function(b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[51450:51583]", functionData => eval(functionData))}, r.readyException = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[51616:51672]", functionData => eval(functionData))};
  var R = r.Deferred();
  r.fn.ready = function(a) {
    return R.then(a)["catch"](function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[51769:51802]", functionData => eval(functionData))}), this
  }, r.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
    }
  }), r.ready.then = R.then;

  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S), r.ready()
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[52699:52743]", functionData => eval(functionData))})), b))
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    U = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function V() {
    this.expando = r.expando + V.uid++
  }
  V.uid = 1, V.prototype = {
    cache: function(a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function(a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b) e[r.camelCase(b)] = c;
      else
        for (d in b) e[r.camelCase(d)] = b[d];
      return e
    },
    get: function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
    },
    access: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[53661:53800]", functionData => eval(functionData))},
    remove: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[53829:54210]", functionData => eval(functionData))},
    hasData: function(a) {
      var b = a[this.expando];
      return void 0 !== b && !r.isEmptyObject(b)
    }
  };
  var W = new V,
    X = new V,
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

  function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
  }

  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = $(c)
        } catch (e) {}
        X.set(a, b, c)
      } else c = void 0;
    return c
  }
  r.extend({
    hasData: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[54906:54955]", functionData => eval(functionData))},
    data: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[54985:55023]", functionData => eval(functionData))},
    removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[55056:55084]", functionData => eval(functionData))},
    _data: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[55115:55153]", functionData => eval(functionData))},
    _removeData: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[55187:55215]", functionData => eval(functionData))}
  }), r.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          W.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[55720:55752]", functionData => eval(functionData))}) : T(this, function(b) {
        var c;
        if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;
          if (c = _(f, a), void 0 !== c) return c
        } else this.each(function() {
          X.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[56093:56171]", functionData => eval(functionData))}
  }), r.extend({
    queue: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[56218:56390]", functionData => eval(functionData))},
    dequeue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[56420:56771]", functionData => eval(functionData))},
    _queueHooks: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[56805:57008]", functionData => eval(functionData))}
  }), r.fn.extend({
    queue: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[57055:57366]", functionData => eval(functionData))},
    dequeue: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[57393:57472]", functionData => eval(functionData))},
    clearQueue: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[57502:57548]", functionData => eval(functionData))},
    promise: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[57578:57938]", functionData => eval(functionData))}
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function(a, b) {
      return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    },
    ea = function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[58321:58493]", functionData => eval(functionData))};

  function fa(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[58522:59116]", functionData => eval(functionData))}
  var ga = {};

  function ha(a) {
    var b, c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
  }

  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a
  }
  r.fn.extend({
    show: function() {
      return ia(this, !0)
    },
    hide: function() {
      return ia(this)
    },
    toggle: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[59956:60115]", functionData => eval(functionData))}
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
  }
  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
      if (f = a[n], f || 0 === f)
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
      while (k--) g = g.lastChild;
      r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", n = 0;
    while (f = m[n++])
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
      k = 0;
      while (f = g[k++]) la.test(f.type || "") && c.push(f)
    }
    return l
  }! function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[62580:62599]", functionData => eval(functionData))}

  function wa() {
    return !1
  }

  function xa() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[62654:62717]", functionData => eval(functionData))}

  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ya(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[63158:63215]", functionData => eval(functionData))}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
      r.event.add(this, b, e, d, c)
    })
  }
  r.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(L) || [""], j = b.length;
        while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && r.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;
        while (j--)
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
          } else
            for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events")
      }
    },
    dispatch: function(a) {
      var b = r.event.fix(a),
        c, d, e, f, g, h, i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g, h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
            f.length && h.push({
              elem: j,
              handlers: f
            })
          } return j = this, i < b.length && h.push({
        elem: j,
        handlers: b.slice(i)
      }), h
    },
    addProp: function(a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b) ? function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[67556:67630]", functionData => eval(functionData))} : function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[67644:67718]", functionData => eval(functionData))},
        set: function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[67745:67917]", functionData => eval(functionData))}
      })
    },
    fix: function(a) {
      return a[r.expando] ? a : new r.Event(a)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68113:68191]", functionData => eval(functionData))},
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68276:68352]", functionData => eval(functionData))},
        delegateType: "focusout"
      },
      click: {
        trigger: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68439:68548]", functionData => eval(functionData))},
        _default: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68580:68625]", functionData => eval(functionData))}
      },
      beforeunload: {
        postDispatch: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68691:68795]", functionData => eval(functionData))}
      }
    }
  }, r.removeEvent = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[68849:68911]", functionData => eval(functionData))}, r.Event = function(a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[69647:69769]", functionData => eval(functionData))},
    stopPropagation: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[69803:69928]", functionData => eval(functionData))},
    stopImmediatePropagation: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[69971:70138]", functionData => eval(functionData))}
  }, r.each({
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
    which: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[70683:70904]", functionData => eval(functionData))}
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    r.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[71175:71395]", functionData => eval(functionData))}
    }
  }), r.fn.extend({
    on: function(a, b, c, d) {
      return ya(this, a, b, c, d)
    },
    one: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[71524:71568]", functionData => eval(functionData))},
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
        r.event.remove(this, a, c, b)
      })
    }
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
  }

  function Fa(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[72492:72569]", functionData => eval(functionData))}

  function Ga(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[72588:72682]", functionData => eval(functionData))}

  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
      }
      X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
    }
  }

  function Ia(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[73096:73273]", functionData => eval(functionData))}

  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e, f, h, i, j, k, l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[73541:73633]", functionData => eval(functionData))});
    if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
    }
    return a
  }

  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  r.extend({
    htmlPrefilter: function(a) {
      return a.replace(za, "<$1></$2>")
    },
    clone: function(a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
        else Ha(a, h);
      return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
    },
    cleanData: function(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0
          }
          c[X.expando] && (c[X.expando] = void 0)
        }
    }
  }), r.fn.extend({
    detach: function(a) {
      return Ka(this, a, !0)
    },
    remove: function(a) {
      return Ka(this, a)
    },
    text: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[75656:75924]", functionData => eval(functionData))},
    append: function() {
      return Ja(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return Ja(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return Ja(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return Ja(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function() {
        return r.clone(this, a, b)
      })
    },
    html: function(a) {
      return T(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);
          try {
            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[77684:77889]", functionData => eval(functionData))}
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    r.fn[a] = function(a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function(b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    };
  ! function() {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
      }
    }
    var c, e, f, g, h = d.createElement("div"),
      i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[79351:79382]", functionData => eval(functionData))},
      boxSizingReliable: function() {
        return b(), e
      },
      pixelMarginRight: function() {
        return b(), f
      },
      reliableMarginLeft: function() {
        return b(), g
      }
    }))
  }();

  function Oa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ta = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--)
      if (a = Ua[c] + b, a in Va) return a
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Za(a, b, c, d, e) {
    var f, g = 0;
    for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g
  }

  function $a(a, b, c) {
    var d, e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[81784:81902]", functionData => eval(functionData))}
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
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = r.camelCase(b),
        i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), r.each(["height", "width"], function(a, b) {
    r.cssHooks[b] = {
      get: function(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[83614:83654]", functionData => eval(functionData))})
      },
      set: function(a, c, d) {
        var e, f = d && Na(a),
          g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
        return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
      }
    }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[84007:84206]", functionData => eval(functionData))}), r.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    r.cssHooks[a + b] = {
      expand: function(c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[84345:84507]", functionData => eval(functionData))}
    }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
    css: function(a, b) {
      return T(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
      }, a, b, arguments.length > 1)
    }
  });

  function _a(a, b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[84974:85027]", functionData => eval(functionData))}
  r.Tween = _a, _a.prototype = {
    constructor: _a,
    init: function(a, b, c, d, e, f) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[85119:85314]", functionData => eval(functionData))},
    cur: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[85336:85454]", functionData => eval(functionData))},
    run: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[85477:85869]", functionData => eval(functionData))}
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[85975:86172]", functionData => eval(functionData))},
      set: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[86197:86413]", functionData => eval(functionData))}
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[86499:86577]", functionData => eval(functionData))}
  }, r.easing = {
    linear: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[86620:86642]", functionData => eval(functionData))},
    swing: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[86667:86718]", functionData => eval(functionData))},
    _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;

  function eb() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[86875:87012]", functionData => eval(functionData))}

  function fb() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[87030:87111]", functionData => eval(functionData))}

  function gb(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[87359:87509]", functionData => eval(functionData))}

  function ib(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[87534:89410]", functionData => eval(functionData))}

  function jb(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[89432:89768]", functionData => eval(functionData))}

  function kb(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[89793:91577]", functionData => eval(functionData))}
  r.Animation = r.extend(kb, {
      tweeners: {
        "*": [function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[91656:91758]", functionData => eval(functionData))}]
      },
      tweener: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[91799:91999]", functionData => eval(functionData))},
      prefilters: [ib],
      prefilter: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[92057:92127]", functionData => eval(functionData))}
    }), r.speed = function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[92164:92747]", functionData => eval(functionData))}, r.fn.extend({
      fadeTo: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[92798:92920]", functionData => eval(functionData))},
      animate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[92958:93269]", functionData => eval(functionData))},
      stop: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[93301:93982]", functionData => eval(functionData))},
      finish: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[94010:94557]", functionData => eval(functionData))}
    }), r.each(["toggle", "show", "hide"], function(a, b) {
      var c = r.fn[b];
      r.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
      }
    }), r.each({
      slideDown: gb("show"),
      slideUp: gb("hide"),
      slideToggle: gb("toggle"),
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
      r.fn[a] = function(a, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95114:95163]", functionData => eval(functionData))}
    }), r.timers = [], r.fx.tick = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95210:95395]", functionData => eval(functionData))}, r.fx.timer = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95422:95466]", functionData => eval(functionData))}, r.fx.interval = 13, r.fx.start = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95512:95547]", functionData => eval(functionData))}, r.fx.stop = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95572:95595]", functionData => eval(functionData))}, r.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, r.fn.delay = function(b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[95702:95917]", functionData => eval(functionData))},
    function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        r.removeAttr(this, a)
      })
    }
  }), r.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
        null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[97120:97305]", functionData => eval(functionData))}
      }
    },
    removeAttr: function(a, b) {
      var c, d = 0,
        e = b && b.match(L);
      if (e && 1 === a.nodeType)
        while (c = e[d++]) a.removeAttribute(c)
    }
  }), lb = {
    set: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[97530:97606]", functionData => eval(functionData))}
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = mb[b] || r.find.attr;
    mb[b] = function(a, b, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[97740:97874]", functionData => eval(functionData))}
  });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[98092:98183]", functionData => eval(functionData))}
  }), r.extend({
    prop: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[98591:98749]", functionData => eval(functionData))}
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), o.optSelected || (r.propHooks.selected = {
    get: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[98907:99009]", functionData => eval(functionData))},
    set: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[99032:99140]", functionData => eval(functionData))}
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    r.propFix[this.toLowerCase()] = this
  });

  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ")
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  r.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[99647:99708]", functionData => eval(functionData))});
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[100209:100273]", functionData => eval(functionData))});
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[100946:101016]", functionData => eval(functionData))}) : this.each(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[101041:101443]", functionData => eval(functionData))})
    },
    hasClass: function(a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      return !1
    }
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[101723:102489]", functionData => eval(functionData))}
  }), r.extend({
    valHooks: {
      option: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[102564:102665]", functionData => eval(functionData))}
      },
      select: {
        get: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[102716:103184]", functionData => eval(functionData))},
        set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[103214:103470]", functionData => eval(functionData))}
      }
    }
  }), r.each(["radio", "checkbox"], function() {
    r.valHooks[this] = {
      set: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[103585:103673]", functionData => eval(functionData))}
    }, o.checkOn || (r.valHooks[this].get = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[103730:103800]", functionData => eval(functionData))})
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function(b, c, e, f) {
      var g, h, i, j, k, m, n, o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
      }
    },
    simulate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[105557:105690]", functionData => eval(functionData))}
  }), r.fn.extend({
    trigger: function(a, b) {
      return this.each(function() {
        r.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[105864:105943]", functionData => eval(functionData))}
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
    r.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), r.fn.extend({
    hover: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[106330:106388]", functionData => eval(functionData))}
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[106536:106595]", functionData => eval(functionData))};
    r.event.special[b] = {
      setup: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[106648:106803]", functionData => eval(functionData))},
      teardown: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[106832:107001]", functionData => eval(functionData))}
    }
  });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[107097:107369]", functionData => eval(functionData))};
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b)) r.each(b, function(b, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[107598:107713]", functionData => eval(functionData))});
    else if (c || "object" !== r.type(b)) d(a, b);
    else
      for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
  }
  r.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
      };
    if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[108133:108171]", functionData => eval(functionData))});
    else
      for (c in a) Ab(c, a[c], b, e);
    return d.join("&")
  }, r.fn.extend({
    serialize: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[108289:108340]", functionData => eval(functionData))},
    serializeArray: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[108373:109019]", functionData => eval(functionData))}
  });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;

    function g(h) {
      var i;
      return e[h] = !0, r.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Ob(a, b) {
    var c, d, e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    if (f) return f !== i[0] && i.unshift(f), c[f]
  }

  function Qb(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          } if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
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
        "text xml": r.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[113705:113750]", functionData => eval(functionData))},
          setRequestHeader: function(a, b) {
            return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
          },
          overrideMimeType: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[113949:114017]", functionData => eval(functionData))},
          statusCode: function(a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else
                for (b in a) u[b] = [u[b], a[b]];
            return this
          },
          abort: function(a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this
          }
        };
      if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
        } catch (z) {
          o.crossDomain = !0
        }
      }
      if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
      l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
      if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
        o.async && o.timeout > 0 && (i = a.setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[116375:116415]", functionData => eval(functionData))}, o.timeout));
        try {
          k = !1, e.send(v, A)
        } catch (z) {
          if (k) throw z;
          A(-1, z)
        }
      } else A(-1, "No Transport");

      function A(b, c, d, h) {
        var j, m, n, v, w, x = c;
        k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
      }
      return y
    },
    getJSON: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[117545:117588]", functionData => eval(functionData))},
    getScript: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[117620:117670]", functionData => eval(functionData))}
  }), r.each(["get", "post"], function(a, b) {
    r[b] = function(a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, r.isPlainObject(a) && a))
    }
  }), r._evalUrl = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[117997:118159]", functionData => eval(functionData))}, r.fn.extend({
    wrapAll: function(a) {
      var b;
      return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this
    },
    wrapInner: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[118560:118807]", functionData => eval(functionData))},
    wrap: function(a) {
      var b = r.isFunction(a);
      return this.each(function(c) {
        r(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[118990:119115]", functionData => eval(functionData))}
  }), r.expr.pseudos.hidden = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[119158:119201]", functionData => eval(functionData))}, r.expr.pseudos.visible = function(a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
  }, r.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Rb = {
      0: 200,
      1223: 204
    },
    Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
    var c, d;
    if (o.cors || Sb && !b.crossDomain) return {
      send: function(e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
          for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e) h.setRequestHeader(g, e[g]);
        c = function(a) {
          return function() {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[120723:120826]", functionData => eval(functionData))}, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c) throw i
        }
      },
      abort: function() {
        c && c()
      }
    }
  }), r.ajaxPrefilter(function(a) {
    a.crossDomain && (a.contents.script = !1)
  }), r.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[121374:121417]", functionData => eval(functionData))}
    }
  }), r.ajaxPrefilter("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[121468:121549]", functionData => eval(functionData))}), r.ajaxTransport("script", function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[121590:122028]", functionData => eval(functionData))});
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[122145:122231]", functionData => eval(functionData))}
  }), r.ajaxPrefilter("json jsonp", function(b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[122286:123130]", functionData => eval(functionData))}), o.createHTMLDocument = function() {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function(a, b, c) {
    if ("string" != typeof a) return [];
    "boolean" == typeof b && (c = b, b = !1);
    var e, f, g;
    return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
  }, r.fn.load = function(a, b, c) {
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[124125:124211]", functionData => eval(functionData))}).always(c && function(a, b) {
      g.each(function() {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    r.fn[b] = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[124479:124513]", functionData => eval(functionData))}
  }), r.expr.pseudos.animated = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[124558:124645]", functionData => eval(functionData))}, r.offset = {
    setOffset: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[124693:125275]", functionData => eval(functionData))}
  }, r.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[125400:125448]", functionData => eval(functionData))});
      var b, c, d, e, f = this[0];
      if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
        top: d.top + e.pageYOffset - c.clientTop,
        left: d.left + e.pageXOffset - c.clientLeft
      }) : {
        top: 0,
        left: 0
      }
    },
    position: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[125818:126385]", functionData => eval(functionData))},
    offsetParent: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[126416:126600]", functionData => eval(functionData))}
  }), r.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = "pageYOffset" === b;
    r.fn[a] = function(d) {
      return T(this, function(a, d, e) {
        var f;
        return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), r.each(["top", "left"], function(a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[127147:127231]", functionData => eval(functionData))})
  }), r.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    r.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      r.fn[d] = function(e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
          h = c || (e === !0 || f === !0 ? "margin" : "border");
        return T(this, function(b, c, e) {
          var f;
          return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
        }, b, g ? e : void 0, g)
      }
    })
  }), r.fn.extend({
    bind: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128058:128101]", functionData => eval(functionData))},
    unbind: function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128130:128171]", functionData => eval(functionData))},
    delegate: function(a, b, c, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128208:128248]", functionData => eval(functionData))},
    undelegate: function(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128284:128375]", functionData => eval(functionData))}
  }), r.holdReady = function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128408:128449]", functionData => eval(functionData))}, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128597:128615]", functionData => eval(functionData))});
  var Vb = a.jQuery,
    Wb = a.$;
  return r.noConflict = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[128689:128772]", functionData => eval(functionData))}, b || (a.jQuery = a.$ = r), r
});
/*2d362381bb0c0e2148e854b2c1f30e1a*/
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"))
  } else {
    factory(jQuery)
  }
})(function($) {
  var pluses = /\+/g;

  function encode(s) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[129294:129349]", functionData => eval(functionData))}

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s)
  }

  function stringifyCookieValue(value) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[129468:129544]", functionData => eval(functionData))}

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
    }
    try {
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value
  }
  var config = $.cookie = function(key, value, options) {
    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === "number") {
        var days = options.expires,
          t = options.expires = new Date;
        t.setMilliseconds(t.getMilliseconds() + days * 864e5)
      }
      return document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
    }
    var result = key ? undefined : {},
      cookies = document.cookie ? document.cookie.split("; ") : [],
      i = 0,
      l = cookies.length;
    for (; i < l; i++) {
      var parts = cookies[i].split("="),
        name = decode(parts.shift()),
        cookie = parts.join("=");
      if (key === name) {
        result = read(cookie, value);
        break
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie
      }
    }
    return result
  };
  config.defaults = {};
  $.removeCookie = function(key, options) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[131195:131299]", functionData => eval(functionData))}
}); /*e4ea2eda78793cdc4e8a4742fe815e41*/
/*
 RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs, require, define;
(function(ba) {
  function G(b) {
    return "[object Function]" === K.call(b)
  }

  function H(b) {
    return "[object Array]" === K.call(b)
  }

  function v(b, c) {
    if (b) {
      var d;
      for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1);
    }
  }

  function T(b, c) {
    if (b) {
      var d;
      for (d = b.length - 1; - 1 < d && (!b[d] || !c(b[d], d, b)); d -= 1);
    }
  }

  function t(b, c) {
    return fa.call(b, c)
  }

  function n(b, c) {
    return t(b, c) && b[c]
  }

  function A(b, c) {
    for (var d in b)
      if (t(b, d) && c(b[d], d)) break
  }

  function U(b, c, d, e) {
    c && A(c, function(c, i) {
      if (d || !t(b, i)) e && "object" === typeof c && c && !H(c) && !G(c) && !(c instanceof RegExp) ? (b[i] || (b[i] = {}), U(b[i], c, d, e)) : b[i] = c
    });
    return b
  }

  function u(b, c) {
    return function() {
      return c.apply(b, arguments)
    }
  }

  function ca(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[132507:132525]", functionData => eval(functionData))}

  function da(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[132544:132657]", functionData => eval(functionData))}

  function B(b, c, d, e) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[132684:132850]", functionData => eval(functionData))}

  function ga(b) {
    function c(a, j, b) {
      var f, l, c, d, h, e, g, i, j = j && j.split("/"),
        p = k.map,
        m = p && p["*"];
      if (a) {
        a = a.split("/");
        l = a.length - 1;
        k.nodeIdCompat &&
          Q.test(a[l]) && (a[l] = a[l].replace(Q, ""));
        "." === a[0].charAt(0) && j && (l = j.slice(0, j.length - 1), a = l.concat(a));
        l = a;
        for (c = 0; c < l.length; c++)
          if (d = l[c], "." === d) l.splice(c, 1), c -= 1;
          else if (".." === d && !(0 === c || 1 === c && ".." === l[2] || ".." === l[c - 1]) && 0 < c) l.splice(c - 1, 2), c -= 2;
        a = a.join("/")
      }
      if (b && p && (j || m)) {
        l = a.split("/");
        c = l.length;
        a: for (; 0 < c; c -= 1) {
          h = l.slice(0, c).join("/");
          if (j)
            for (d = j.length; 0 < d; d -= 1)
              if (b = n(p, j.slice(0, d).join("/")))
                if (b = n(b, h)) {
                  f = b;
                  e = c;
                  break a
                }! g && (m && n(m, h)) && (g = n(m, h), i = c)
        }!f && g && (f = g, e = i);
        f && (l.splice(0,
          e, f), a = l.join("/"))
      }
      return (f = n(k.pkgs, a)) ? f : a
    }

    function d(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[134124:134362]", functionData => eval(functionData))}

    function p(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[134382:134553]", functionData => eval(functionData))}

    function g(a) {
      var j, c = a ? a.indexOf("!") : -1; - 1 < c && (j = a.substring(0, c), a = a.substring(c + 1, a.length));
      return [j, a]
    }

    function i(a,
      j, b, f) {
      var l, d, e = null,
        i = j ? j.name : null,
        k = a,
        p = !0,
        m = "";
      a || (p = !1, a = "_@r" + (K += 1));
      a = g(a);
      e = a[0];
      a = a[1];
      e && (e = c(e, i, f), d = n(q, e));
      a && (e ? m = d && d.normalize ? d.normalize(a, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[135052:135087]", functionData => eval(functionData))}) : -1 === a.indexOf("!") ? c(a, i, f) : a : (m = c(a, i, f), a = g(m), e = a[0], m = a[1], b = !0, l = h.nameToUrl(m)));
      b = e && !d && !b ? "_unnormalized" + (O += 1) : "";
      return {
        prefix: e,
        name: m,
        parentMap: j,
        unnormalized: !!b,
        url: l,
        originalName: k,
        isDefine: p,
        id: (e ? e + "!" + m : m) + b
      }
    }

    function r(a) {
      var j = a.id,
        b = n(m, j);
      b || (b = m[j] = new h.Module(a));
      return b
    }

    function s(a,
      j, b) {
      var f = a.id,
        c = n(m, f);
      if (t(q, f) && (!c || c.defineEmitComplete)) "defined" === j && b(q[f]);
      else if (c = r(a), c.error && "error" === j) b(c.error);
      else c.on(j, b)
    }

    function w(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[135872:136096]", functionData => eval(functionData))}

    function x() {
      R.length && (v(R, function(a) {
        var b = a[0];
        "string" === typeof b && (h.defQueueMap[b] = !0);
        C.push(a)
      }), R = [])
    }

    function y(a) {
      delete m[a];
      delete V[a]
    }

    function F(a, b, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[136366:136659]", functionData => eval(functionData))}

    function D() {
      var a, b, c = (a = 1E3 * k.waitSeconds) && h.startTime + a < (new Date).getTime(),
        f = [],
        l = [],
        e = !1,
        i = !0;
      if (!W) {
        W = !0;
        A(V, function(a) {
          var h = a.map,
            g = h.id;
          if (a.enabled && (h.isDefine || l.push(a), !a.error))
            if (!a.inited && c) p(g) ? e = b = !0 : (f.push(g), d(g));
            else if (!a.inited && (a.fetched && h.isDefine) && (e = !0, !h.prefix)) return i = !1
        });
        if (c && f.length) return a = B("timeout",
          "Load timeout for modules: " + f, null, f), a.contextName = h.contextName, w(a);
        i && v(l, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[137356:137390]", functionData => eval(functionData))});
        if ((!c || b) && e)
          if ((z || ea) && !X) X = setTimeout(function() {
            X = 0;
            D()
          }, 50);
        W = !1
      }
    }

    function E(a) {
      t(q, a[0]) || r(i(a[0], null, !0)).init(a[1], a[2])
    }

    function I(a) {
      var a = a.currentTarget || a.srcElement,
        b = h.onScriptLoad;
      a.detachEvent && !Y ? a.detachEvent("onreadystatechange", b) : a.removeEventListener("load", b, !1);
      b = h.onScriptError;
      (!a.detachEvent || Y) && a.removeEventListener("error", b, !1);
      return {
        node: a,
        id: a && a.getAttribute("data-requiremodule")
      }
    }

    function J() {
      var a;
      for (x(); C.length;) {
        a = C.shift();
        if (null === a[0]) return w(B("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
        E(a)
      }
      h.defQueueMap = {}
    }
    var W, Z, h, L, X, k = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {}
      },
      m = {},
      V = {},
      $ = {},
      C = [],
      q = {},
      S = {},
      aa = {},
      K = 1,
      O = 1;
    L = {
      require: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[138638:138719]", functionData => eval(functionData))},
      exports: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[138748:138888]", functionData => eval(functionData))},
      module: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[138916:139175]", functionData => eval(functionData))}
    };
    Z = function(a) {
      this.events = n($, a.id) || {};
      this.map = a;
      this.shim = n(k.shim, a.id);
      this.depExports = [];
      this.depMaps = [];
      this.depMatched = [];
      this.pluginMaps = {};
      this.depCount = 0
    };
    Z.prototype = {
      init: function(a, b, c, f) {
        f = f || {};
        if (!this.inited) {
          this.factory = b;
          if (c) this.on("error", c);
          else this.events.error && (c = u(this, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[139669:139716]", functionData => eval(functionData))}));
          this.depMaps = a && a.slice(0);
          this.errback = c;
          this.inited = !0;
          this.ignore = f.ignore;
          f.enabled || this.enabled ? this.enable() : this.check()
        }
      },
      defineDep: function(a, b) {
        this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
      },
      fetch: function() {
        if (!this.fetched) {
          this.fetched = !0;
          h.startTime = (new Date).getTime();
          var a = this.map;
          if (this.shim) h.makeRequire(this.map, {
            enableBuildCallback: !0
          })(this.shim.deps || [], u(this, function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[140380:140455]", functionData => eval(functionData))}));
          else return a.prefix ?
            this.callPlugin() : this.load()
        }
      },
      load: function() {
        var a = this.map.url;
        S[a] || (S[a] = !0, h.load(this.map.id, a))
      },
      check: function() {
        if (this.enabled && !this.enabling) {
          var a, b, c = this.map.id;
          b = this.depExports;
          var f = this.exports,
            l = this.factory;
          if (this.inited)
            if (this.error) this.emit("error", this.error);
            else {
              if (!this.defining) {
                this.defining = !0;
                if (1 > this.depCount && !this.defined) {
                  if (G(l)) {
                    if (this.events.error && this.map.isDefine || e.onError !== ca) try {
                      f = h.execCb(c, l, b, f)
                    } catch (d) {
                      a = d
                    } else f = h.execCb(c, l, b, f);
                    this.map.isDefine &&
                      void 0 === f && ((b = this.module) ? f = b.exports : this.usingExports && (f = this.exports));
                    if (a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", w(this.error = a)
                  } else f = l;
                  this.exports = f;
                  if (this.map.isDefine && !this.ignore && (q[c] = f, e.onResourceLoad)) e.onResourceLoad(h, this.map, this.depMaps);
                  y(c);
                  this.defined = !0
                }
                this.defining = !1;
                this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
              }
            }
          else t(h.defQueueMap, c) || this.fetch()
        }
      },
      callPlugin: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[142337:144615]", functionData => eval(functionData))},
      enable: function() {
        V[this.map.id] = this;
        this.enabling = this.enabled = !0;
        v(this.depMaps, u(this, function(a, b) {
          var c, f;
          if ("string" === typeof a) {
            a = i(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap);
            this.depMaps[b] = a;
            if (c =
              n(L, a.id)) {
              this.depExports[b] = c(this);
              return
            }
            this.depCount += 1;
            s(a, "defined", u(this, function(a) {
              this.undefed || (this.defineDep(b, a), this.check())
            }));
            this.errback ? s(a, "error", u(this, this.errback)) : this.events.error && s(a, "error", u(this, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[145365:145416]", functionData => eval(functionData))}))
          }
          c = a.id;
          f = m[c];
          !t(L, c) && (f && !f.enabled) && h.enable(a, this)
        }));
        A(this.pluginMaps, u(this, function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[145592:145680]", functionData => eval(functionData))}));
        this.enabling = !1;
        this.check()
      },
      on: function(a, b) {
        var c = this.events[a];
        c || (c = this.events[a] = []);
        c.push(b)
      },
      emit: function(a, b) {
        v(this.events[a], function(a) {
          a(b)
        });
        "error" === a && delete this.events[a]
      }
    };
    h = {
      config: k,
      contextName: b,
      registry: m,
      defined: q,
      urlFetched: S,
      defQueue: C,
      defQueueMap: {},
      Module: Z,
      makeModuleMap: i,
      nextTick: e.nextTick,
      onError: w,
      configure: function(a) {
        a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
        var b = k.shim,
          c = {
            paths: !0,
            bundles: !0,
            config: !0,
            map: !0
          };
        A(a, function(a, b) {
          c[b] ? (k[b] || (k[b] = {}), U(k[b], a, !0, !0)) : k[b] = a
        });
        a.bundles && A(a.bundles, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[146690:146794]", functionData => eval(functionData))});
        a.shim && (A(a.shim, function(a, c) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[146841:147019]", functionData => eval(functionData))}), k.shim = b);
        a.packages && v(a.packages, function(a) {
          var b, a = "string" === typeof a ? {
            name: a
          } : a;
          b = a.name;
          a.location && (k.paths[b] = a.location);
          k.pkgs[b] = a.name + "/" + (a.main || "main").replace(ha, "").replace(Q, "")
        });
        A(m, function(a, b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[147369:147451]", functionData => eval(functionData))});
        if (a.deps || a.callback) h.require(a.deps || [], a.callback)
      },
      makeShimExports: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[147568:147736]", functionData => eval(functionData))},
      makeRequire: function(a, j) {
        function g(c, d, p) {
          var k, n;
          j.enableBuildCallback && (d && G(d)) && (d.__requireJsBuild = !0);
          if ("string" === typeof c) {
            if (G(d)) return w(B("requireargs", "Invalid require call"), p);
            if (a && t(L, c)) return L[c](m[a.id]);
            if (e.get) return e.get(h, c, a, g);
            k = i(c, a, !1, !0);
            k = k.id;
            return !t(q, k) ? w(B("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + b + (a ? "" : ". Use require([])"))) : q[k]
          }
          J();
          h.nextTick(function() {
            J();
            n = r(i(null, a));
            n.skipMap = j.skipMap;
            n.init(c, d, p, {
              enabled: !0
            });
            D()
          });
          return g
        }
        j = j || {};
        U(g, {
          isBrowser: z,
          toUrl: function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[148694:148964]", functionData => eval(functionData))},
          defined: function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[148997:149054]", functionData => eval(functionData))},
          specified: function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[149089:149176]", functionData => eval(functionData))}
        });
        a || (g.undef = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[149225:149605]", functionData => eval(functionData))});
        return g
      },
      enable: function(a) {
        n(m, a.id) && r(a).enable()
      },
      completeLoad: function(a) {
        var b, c, d = n(k.shim, a) || {},
          e = d.exports;
        for (x(); C.length;) {
          c = C.shift();
          if (null === c[0]) {
            c[0] = a;
            if (b) break;
            b = !0
          } else c[0] === a && (b = !0);
          E(c)
        }
        h.defQueueMap = {};
        c = n(m, a);
        if (!b && !t(q, a) && c && !c.inited) {
          if (k.enforceDefine && (!e || !da(e))) return p(a) ? void 0 : w(B("nodefine", "No define call for " + a, null, [a]));
          E([a,
            d.deps || [], d.exportsFn
          ])
        }
        D()
      },
      nameToUrl: function(a, b, c) {
        var d, g, i;
        (d = n(k.pkgs, a)) && (a = d);
        if (d = n(aa, a)) return h.nameToUrl(d, b, c);
        if (e.jsExtRegExp.test(a)) d = a + (b || "");
        else {
          d = k.paths;
          a = a.split("/");
          for (g = a.length; 0 < g; g -= 1)
            if (i = a.slice(0, g).join("/"), i = n(d, i)) {
              H(i) && (i = i[0]);
              a.splice(0, g, i);
              break
            } d = a.join("/");
          d += b || (/^data\:|\?/.test(d) || c ? "" : ".js");
          d = ("/" === d.charAt(0) || d.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + d
        }
        return k.urlArgs ? d + ((-1 === d.indexOf("?") ? "?" : "&") + k.urlArgs) : d
      },
      load: function(a, b) {
        e.load(h,
          a, b)
      },
      execCb: function(a, b, c, d) {
        return b.apply(d, c)
      },
      onScriptLoad: function(a) {
        if ("load" === a.type || ia.test((a.currentTarget || a.srcElement).readyState)) N = null, a = I(a), h.completeLoad(a.id)
      },
      onScriptError: function(a) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[151448:151568]", functionData => eval(functionData))}
    };
    h.require = h.makeRequire();
    return h
  }
  var e, x, y, D, I, E, N, J, r, O, ja = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
    ka = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    Q = /\.js$/,
    ha = /^\.\//;
  x = Object.prototype;
  var K =
    x.toString,
    fa = x.hasOwnProperty,
    z = !!("undefined" !== typeof window && "undefined" !== typeof navigator && window.document),
    ea = !z && "undefined" !== typeof importScripts,
    ia = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
    Y = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
    F = {},
    s = {},
    R = [],
    M = !1;
  if ("undefined" === typeof define) {
    if ("undefined" !== typeof requirejs) {
      if (G(requirejs)) return;
      s = requirejs;
      requirejs = void 0
    }
    "undefined" !== typeof require && !G(require) && (s = require, require =
      void 0);
    e = requirejs = function(b, c, d, p) {
      var g, i = "_";
      !H(b) && "string" !== typeof b && (g = b, H(c) ? (b = c, c = d, d = p) : b = []);
      g && g.context && (i = g.context);
      (p = n(F, i)) || (p = F[i] = e.s.newContext(i));
      g && p.configure(g);
      return p.require(b, c, d)
    };
    e.config = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[152854:152879]", functionData => eval(functionData))};
    e.nextTick = "undefined" !== typeof setTimeout ? function(b) {
      setTimeout(b, 4)
    } : function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[152991:153008]", functionData => eval(functionData))};
    require || (require = e);
    e.version = "2.1.20";
    e.jsExtRegExp = /^\/|:|\?|\.js$/;
    e.isBrowser = z;
    x = e.s = {
      contexts: F,
      newContext: ga
    };
    e({});
    v(["toUrl", "undef", "defined", "specified"],
      function(b) {
        e[b] = function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[153295:153379]", functionData => eval(functionData))}
      });
    if (z && (y = x.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0])) y = x.head = D.parentNode;
    e.onError = ca;
    e.createNode = function(b) {
      var c = b.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
      c.type = b.scriptType || "text/javascript";
      c.charset = "utf-8";
      c.async = !0;
      return c
    };
    e.load = function(b, c, d) {
      var p = b && b.config || {},
        g;
      if (z) {
        g = e.createNode(p,
          c, d);
        if (p.onNodeCreated) p.onNodeCreated(g, p, c, d);
        g.setAttribute("data-requirecontext", b.contextName);
        g.setAttribute("data-requiremodule", c);
        g.attachEvent && !(g.attachEvent.toString && 0 > g.attachEvent.toString().indexOf("[native code")) && !Y ? (M = !0, g.attachEvent("onreadystatechange", b.onScriptLoad)) : (g.addEventListener("load", b.onScriptLoad, !1), g.addEventListener("error", b.onScriptError, !1));
        g.src = d;
        J = g;
        D ? y.insertBefore(g, D) : y.appendChild(g);
        J = null;
        return g
      }
      if (ea) try {
        importScripts(d), b.completeLoad(c)
      } catch (i) {
        b.onError(B("importscripts",
          "importScripts failed for " + c + " at " + d, i, [c]))
      }
    };
    z && !s.skipDataMain && T(document.getElementsByTagName("script"), function(b) {
      y || (y = b.parentNode);
      if (I = b.getAttribute("data-main")) return r = I, s.baseUrl || (E = r.split("/"), r = E.pop(), O = E.length ? E.join("/") + "/" : "./", s.baseUrl = O), r = r.replace(Q, ""), e.jsExtRegExp.test(r) && (r = I), s.deps = s.deps ? s.deps.concat(r) : [r], !0
    });
    define = function(b, c, d) {
      var e, g;
      "string" !== typeof b && (d = c, c = b, b = null);
      H(c) || (d = c, c = null);
      !c && G(d) && (c = [], d.length && (d.toString().replace(ja, "").replace(ka,
        function(b, d) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[155384:155415]", functionData => eval(functionData))}), c = (1 === d.length ? ["require"] : ["require", "exports", "module"]).concat(c)));
      if (M) {
        if (!(e = J)) N && "interactive" === N.readyState || T(document.getElementsByTagName("script"), function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[155632:155702]", functionData => eval(functionData))}), e = N;
        e && (b || (b = e.getAttribute("data-requiremodule")), g = F[e.getAttribute("data-requirecontext")])
      }
      g ? (g.defQueue.push([b, c, d]), g.defQueueMap[b] = !0) : R.push([b, c, d])
    };
    define.amd = {
      jQuery: !0
    };
    e.exec = function(b) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[155986:156014]", functionData => eval(functionData))};
    e(s)
  }
})(this);
/*cde0e5ba563c1b01c1058fa9d14f51d3*/
(function() {
  define("librastandardlib/obj-utils/assign", [], function() {
    return function assign(target, args) {
      "use strict";
      if (target === null) {
        throw new TypeError("Cannot convert undefined or null to object")
      }
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        if (source !== null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key]
            }
          }
        }
      }
      return to
    }
  });
  define("librastandardlib/aws/page-settings", ["librastandardlib/obj-utils/assign"], function(_assign) {
    "use strict";
    var defaults = {
      staticAssetPath: "https://a0.awsstatic.com",
      jsAssetPath: "https://a0.awsstatic.com/libra/1",
      isLoggingEnabled: true
    };
    var PageSettings = {};
    if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
      _assign(PageSettings, AWS.PageSettings)
    }
    var tagSettings = document.getElementsByTagName("html").dataset;
    if (tagSettings) {
      PageSettings.staticAssetPath = tagSettings.staticAssets;
      PageSettings.jsAssetPath = PageSettings.staticAssetPath + "/libra/" + tagSettings.jsVersion
    }
    PageSettings = _assign({}, defaults, PageSettings);
    if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
      AWS.PageSettings = PageSettings
    }
    return PageSettings
  });
  define("librastandardlib/test-helpers/browser-globals/window", [], function() {
    return window
  });
  define("librastandardlib/id-utils/generateUUID", [], function() {
    "use strict";
    return function generateUUID() {
      var d = (new Date).getTime();
      var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 3 | 8).toString(16)
      });
      return id
    }
  });
  define("librastandardlib/url-utils/buildQueryString", [], function() {
    "use strict";
    return function buildQueryString(params) {
      var parts = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          parts[parts.length] = encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
        }
      }
      return parts.join("&")
    }
  });
  define("librastandardlib/url-utils/getQueryStringParam", [], function() {
    "use strict";
    return function getQueryStringParam(name, querySrting) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var re = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var res = re.exec(querySrting);
      if (res === null) {
        return ""
      }
      return decodeURIComponent(res[1].replace(/\+/g, " "))
    }
  });
  define("librastandardlib/logger/logger", ["librastandardlib/test-helpers/browser-globals/window", "librastandardlib/obj-utils/assign", "librastandardlib/id-utils/generateUUID", "librastandardlib/url-utils/buildQueryString", "librastandardlib/url-utils/getQueryStringParam", "librastandardlib/aws/page-settings"], function(window, _assign, generateUUID, buildQueryString, getQueryStringParam, PageSettings) {
    "use strict";
    var Logger = function() {
      var LOG_LEVELS = {
        info: {
          warn: true,
          error: true
        },
        warn: {
          error: true
        },
        error: {},
        debug: {
          info: true,
          warn: true,
          error: true
        }
      };
      var RAW_ENDPOINT = "https://fls-na.amazon.com/1/aws-mktg/1/OE/";
      var AI_ENDPOINT = "https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/";
      var COMMON_AI_PARAMS = {
        marketplaceId: "A12QK8IU0H0XW5",
        requestId: "ABCDEFGHIJKLMNOPQRST",
        session: "123-1234567-1234567"
      };
      var DEFAULT_AI_UNITS = "ms";
      var DEFAULT_AI_VALUE_SET = "count";
      var AI_VALUE_SETS = {
        count: {
          value: "1",
          units: "c"
        },
        timeSinceResponseEnd: {
          valueFunction: "getElapsedTimeSincePageLoad",
          units: "ms"
        }
      };
      var HOSTNAMES_TO_SERVICES = [{
        hostname: "console.aws.amazon.com",
        service: "console"
      }, {
        hostname: "aws.amazon.com",
        service: "awsm"
      }, {
        hostname: "amazonaws-china.com",
        service: "awsm"
      }, {
        hostname: "www.amazonaws.cn",
        service: "cn"
      }];
      var LogType = {
        RAW: "RAW",
        AI: "AI",
        LOCAL: "LOCAL"
      };
      var PlatformType = {
        CMS: "CMS",
        DEFAULT: "DEFAULT"
      };
      var SERVICES_TO_PLATFORM_TYPES = {
        awsm: PlatformType.CMS,
        cn: PlatformType.CMS,
        console: PlatformType.DEFAULT,
        marketplace: PlatformType.CMS
      };
      var MARKETPLACE_SERVICE = "marketplace";
      var CONSOLE_SERVICE_NAME_PREFIX = "console-";
      var SERVICE_NAME_REGEX = /console\.(aws\.amazon\.com|amazonaws\.cn)\/([a-z0-9]+)\//;
      var ALLOWED_HOSTNAME_SUFFIXES = ["console.aws.amazon.com", "console.amazonaws.cn"];
      var ALLOWED_EXACT_MATCH_HOSTNAMES = {
        "aws.amazon.com": 1,
        "amazonaws-china.com": 1,
        "www.amazonaws.cn": 1
      };
      var pageRequestId = null;
      var instances = {};

      function Logger(namespace, logLevel) {
        if (instances.hasOwnProperty(namespace)) {
          instances[namespace].logLevel = logLevel || instances[namespace].logLevel;
          return instances[namespace]
        }
        this.namespace = namespace;
        this.logLevel = logLevel || this.getLogLevelByQueryString();
        this.pageRequestId = this.getPageRequestId();
        this.dataSet = this.getDataSet();
        this.service = this.getService();
        this.instance = this.getInstance(this.service);
        this.longLanguage = this.getLongLanguage();
        this.client = this.getClient();
        this.host = this.getHost();
        instances[namespace] = this
      }
      Logger.prototype = {
        getService: function() {
          if (typeof window.location.hostname !== "undefined" && typeof window.location.pathname !== "undefined") {
            if (PageSettings.isMarketplace) {
              return MARKETPLACE_SERVICE
            }
            var consoleServiceNameMatch = (window.location.hostname + window.location.pathname).match(SERVICE_NAME_REGEX);
            if (consoleServiceNameMatch && consoleServiceNameMatch.length === 3) {
              return CONSOLE_SERVICE_NAME_PREFIX + consoleServiceNameMatch[2]
            }
          }
          for (var i = 0, len = HOSTNAMES_TO_SERVICES.length; i < len; i++) {
            var hostname = HOSTNAMES_TO_SERVICES[i].hostname;
            var re = new RegExp(hostname + "\\/");
            if (re.test(window.location.hostname + "/") || re.test(window.location.pathname) || re.test(window.location.hash)) {
              return HOSTNAMES_TO_SERVICES[i].service
            }
          }
          return "NA"
        },
        getHost: function() {
          if (typeof window.location.hostname !== "undefined") {
            var hostname = window.location.hostname;
            if (ALLOWED_EXACT_MATCH_HOSTNAMES.hasOwnProperty(hostname)) {
              return hostname
            }
            for (var i = 0; i < ALLOWED_HOSTNAME_SUFFIXES.length; i++) {
              var currentHost = ALLOWED_HOSTNAME_SUFFIXES[i];
              var indexOf = hostname.indexOf(currentHost);
              var endsWithCurrentHost = indexOf >= 0 && indexOf === hostname.length - currentHost.length;
              if (endsWithCurrentHost) {
                return currentHost
              }
            }
          }
          return "NA"
        },
        getLongLanguage: function() {
          var langAttr = $("html").attr("lang");
          if (typeof langAttr !== "undefined") {
            return langAttr.replace("-", "_")
          }
          return "NA"
        },
        getInstance: function(service) {
          var platformType = PlatformType.DEFAULT;
          if (SERVICES_TO_PLATFORM_TYPES.hasOwnProperty(service)) {
            platformType = SERVICES_TO_PLATFORM_TYPES[service]
          }
          if (platformType === PlatformType.CMS) {
            if (window.location.pathname.indexOf(".html") === window.location.pathname.length - 5) {
              if ("logInstance" in PageSettings) {
                return PageSettings.logInstance
              }
              return "NA"
            }
            return "LIVE"
          }
          return "LIVE"
        },
        getDataSet: function() {
          if ("logDataSet" in PageSettings) {
            return PageSettings.logDataSet
          }
          return "NA"
        },
        getClient: function() {
          var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
          if (re.test(window.navigator.userAgent)) {
            return "mobile"
          }
          return "dsk"
        },
        logAI: function(metric, params) {
          params = params || {};
          var valueSet;
          if (params.hasOwnProperty("valueSet")) {
            if (AI_VALUE_SETS.hasOwnProperty(params.valueSet)) {
              valueSet = AI_VALUE_SETS[params.valueSet];
              params.units = valueSet.units;
              if (valueSet.hasOwnProperty("valueFunction")) {
                params.value = this[valueSet.valueFunction]()
              } else {
                params.value = valueSet.value
              }
            } else {
              valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
              params.value = valueSet.value;
              params.units = valueSet.units
            }
          } else if (!params.hasOwnProperty("value")) {
            valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
            params.value = valueSet.value;
            params.units = valueSet.units
          }
          if (!params.hasOwnProperty("units")) {
            params.units = DEFAULT_AI_UNITS
          }
          var url = AI_ENDPOINT + metric + "@v=" + encodeURIComponent(params.value) + ":u=" + encodeURIComponent(params.units);
          var standardParams = {
            dataset: this.dataSet,
            instance: this.instance,
            service: this.service,
            marketplace: this.longLanguage,
            client: this.client,
            host: this.host
          };
          var queryStringParams = _assign(standardParams, COMMON_AI_PARAMS);
          url += "?" + buildQueryString(queryStringParams);
          this.logUrl(url)
        },
        logRaw: function(logLevel, msg, currentTime, pageTime, customParams) {
          var standardParams = {
            cat: this.namespace,
            level: logLevel,
            msg: msg,
            currentTime: currentTime,
            pageTime: pageTime,
            pageRequestId: pageRequestId,
            page: window.location.toString()
          };
          var params = _assign({}, customParams, standardParams);
          var url = RAW_ENDPOINT + "?" + buildQueryString(params);
          this.logUrl(url)
        },
        logUrl: function(url) {
          if (PageSettings.isLoggingEnabled) {
            setTimeout(function() {
              (new Image).src = url
            }, 0);
            this._lastImageUrl = url
          }
        },
        getLogLevelByQueryString: function() {
          var level = getQueryStringParam("debug" + this.namespace, window.location.search);
          if (level === "") {
            return null
          }
          return level
        },
        getElapsedTimeSincePageLoad: function() {
          if ("performance" in window && "timing" in window.performance) {
            return (new Date).getTime() - window.performance.timing.responseEnd
          }
          return -1
        },
        getPageRequestId: function() {
          pageRequestId = pageRequestId || generateUUID();
          return pageRequestId
        },
        _rawEndpoint: RAW_ENDPOINT,
        _aiEndpoint: AI_ENDPOINT
      };
      for (var level in LOG_LEVELS) {
        if (LOG_LEVELS.hasOwnProperty(level)) {
          (function(level) {
            Logger.prototype[level] = function(msg, logType, params) {
              logType = logType || "LOCAL";
              var currentTime = (new Date).getTime();
              var pageTime = this.getElapsedTimeSincePageLoad();
              var logLevelStr = level.toUpperCase();
              if (logType === LogType.AI) {
                this.logAI(msg, params)
              } else if (logType === LogType.RAW) {
                this.logRaw(logLevelStr, msg, currentTime, pageTime, params)
              }
              if (this.logLevel !== null) {
                if (level === this.logLevel || LOG_LEVELS[this.logLevel].hasOwnProperty(level)) {
                  if (LogType.hasOwnProperty(logType)) {
                    var out = "[" + logLevelStr + "][" + LogType[logType] + "] " + this.namespace + ": " + msg + "; @" + pageTime + "ms";
                    if (typeof params !== "undefined") {
                      out += "; " + JSON.stringify(params)
                    }
                    console.log(out);
                    this._lastConsoleLog = out
                  } else {
                    var args = Array.prototype.slice.call(arguments);
                    var logObjPrefix = "[" + logLevelStr + "][" + LogType.LOCAL + "] " + this.namespace + ": " + args[0];
                    console.log(logObjPrefix, [].concat(args.slice(1)))
                  }
                }
              }
            }
          })(level)
        }
      }
      return Logger
    }();
    return Logger
  });
  define("libra/logger/page-error", ["librastandardlib/logger/logger", "librastandardlib/aws/page-settings"], function(Logger, PageSettings) {
    var PageError = {
      init: function() {
        var logger = new Logger("PageError");
        var logMetric = this.getLogMetric();
        var pageErrorCallback = window.onerror;
        window.onerror = function(errorMsg, url, lineNumber, columnNumber, error) {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[170468:170865]", functionData => eval(functionData))}
      },
      getLogMetric: function() {
        var isV2 = PageSettings.framework !== undefined && PageSettings.framework === "v2";
        return isV2 ? "awsm_v2_:comp_PageError" : "awsm_v1_:comp_PageError"
      }
    };
    PageError.init();
    return PageError
  });
  define("librastandardlib/event-utils/onWindowLoad", [], function() {
    "use strict";
    return function onWindowLoad(cb, context) {
      context = context || this;
      if (document.readyState === "complete") {
        cb.call(context)
      } else {
        document.addEventListener("readystatechange", function() {
          if (document.readyState === "complete") {
            cb.call(context)
          }
        }, false)
      }
    }
  });
  define("librastandardlib/event-utils/onDOMContentLoaded", ["librastandardlib/event-utils/onWindowLoad"], function(onWindowLoad) {
    "use strict";
    return function onDOMContentLoaded(cb, context) {
      context = context || this;
      var resolved = false;
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        resolved = true;
        cb.call(context)
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          if (!resolved) {
            resolved = true;
            cb.call(context)
          }
        }, false);
        onWindowLoad(function() {
          if (!resolved) {
            resolved = true;
            cb.call(context)
          }
        })
      }
    }
  });
  define("librastandardlib/detection-utils/isLocalStorageSupported", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
    "use strict";
    var isSupported = false;
    return function isLocalStorageSupported() {
      if (isSupported) {
        return isSupported
      }
      var storage = window.localStorage;
      try {
        storage.setItem("test", "test");
        storage.removeItem("test");
        isSupported = true;
        return true
      } catch (e) {
        return false
      }
    }
  });
  define("libra/core/load-font", ["librastandardlib/event-utils/onDOMContentLoaded", "librastandardlib/aws/page-settings", "librastandardlib/detection-utils/isLocalStorageSupported"], function(onDOMContentLoaded, PageSettings, isLocalStorageSupported) {
    "use strict";
    var KEY = "aws-fonts";
    var FONT_AWESOME_LOADING = "aws-fa-loading";
    var FONT_AWESOME_PATH = "/vendor/fontawesome.css";
    var FONT_MAP = {
      "default": "aws-ember",
      "vi-VN": "aws-open-sans",
      "th-TH": "aws-prompt",
      "ar-SA": "aws-ember-arabic"
    };
    var docHead = document.documentElement;
    var fontClass = getFontClass();

    function fallBack() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[173595:173695]", functionData => eval(functionData))}
    docHead.classList.add(FONT_AWESOME_LOADING);
    if (document.fonts && isLocalStorageSupported()) {
      try {
        var storedFont = localStorage.getItem(KEY);
        if (storedFont && storedFont === fontClass) {
          docHead.classList.add(storedFont)
        }
        document.fonts.ready.then(function() {
          if (!docHead.classList.contains(fontClass)) {
            localStorage.setItem(KEY, fontClass);
            docHead.classList.add(fontClass)
          }
          docHead.classList.remove(FONT_AWESOME_LOADING)
        })
      } catch (e) {
        fallBack()
      }
    } else {
      fallBack()
    }

    function loadFontAwesome() {
      var css = document.createElement("link");
      if ("libraCSSPath" in PageSettings) {
        css.href = PageSettings.libraCSSPath + FONT_AWESOME_PATH;
        css.rel = "stylesheet";
        css.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(css)
      }
    }

    function getFontClass() {
      var lang = document.documentElement.lang || "en-US";
      if (FONT_MAP[lang] !== undefined) {
        return FONT_MAP[lang]
      }
      return FONT_MAP.default
    }
    onDOMContentLoaded(loadFontAwesome)
  });
  /*!
  Copyright (c) 2014, Google Inc.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

      * Redistributions of source code must retain the above copyright notice,
        this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
      * Neither the name of the <ORGANIZATION> nor the names of its contributors
      may be used to endorse or promote products derived from this software
      without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
  CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
  OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  define("libra/vendor/rum-speedindex", [], function() {
    "use strict";
    var RUMSpeedIndex = function(win) {
      win = win || window;
      var doc = win.document;
      var GetElementViewportRect = function(el) {
        var intersect = false;
        if (el.getBoundingClientRect) {
          var elRect = el.getBoundingClientRect();
          intersect = {
            top: Math.max(elRect.top, 0),
            left: Math.max(elRect.left, 0),
            bottom: Math.min(elRect.bottom, win.innerHeight || doc.documentElement.clientHeight),
            right: Math.min(elRect.right, win.innerWidth || doc.documentElement.clientWidth)
          };
          if (intersect.bottom <= intersect.top || intersect.right <= intersect.left) {
            intersect = false
          } else {
            intersect.area = (intersect.bottom - intersect.top) * (intersect.right - intersect.left)
          }
        }
        return intersect
      };
      var CheckElement = function(el, url) {
        if (url) {
          var rect = GetElementViewportRect(el);
          if (rect) {
            rects.push({
              url: url,
              area: rect.area,
              rect: rect
            })
          }
        }
      };
      var GetRects = function() {
        var elements = doc.getElementsByTagName("*");
        var re = /url\(.*(http.*)\)/gi;
        for (var i = 0; i < elements.length; i++) {
          var el = elements[i];
          var style = win.getComputedStyle(el);
          if (el.tagName == "IMG") {
            CheckElement(el, el.src)
          }
          if (style["background-image"]) {
            re.lastIndex = 0;
            var matches = re.exec(style["background-image"]);
            if (matches && matches.length > 1) CheckElement(el, matches[1].replace('"', ""))
          }
          if (el.tagName == "IFRAME") {
            try {
              var rect = GetElementViewportRect(el);
              if (rect) {
                var tm = RUMSpeedIndex(el.contentWindow);
                if (tm) {
                  rects.push({
                    tm: tm,
                    area: rect.area,
                    rect: rect
                  })
                }
              }
            } catch (e) {}
          }
        }
      };
      var GetRectTimings = function() {
        var timings = {};
        var requests = win.performance.getEntriesByType("resource");
        for (var i = 0; i < requests.length; i++) timings[requests[i].name] = requests[i].responseEnd;
        for (var j = 0; j < rects.length; j++) {
          if (!("tm" in rects[j])) rects[j].tm = timings[rects[j].url] !== undefined ? timings[rects[j].url] : 0
        }
      };
      var GetFirstPaint = function() {
        try {
          var entries = performance.getEntriesByType("paint");
          for (var i = 0; i < entries.length; i++) {
            if (entries[i]["name"] == "first-paint") {
              navStart = performance.getEntriesByType("navigation")[0].startTime;
              firstPaint = entries[i].startTime - navStart;
              break
            }
          }
        } catch (e) {}
        if (firstPaint === undefined && "msFirstPaint" in win.performance.timing) firstPaint = win.performance.timing.msFirstPaint - navStart;
        if (firstPaint === undefined && "chrome" in win && "loadTimes" in win.chrome) {
          var chromeTimes = win.chrome.loadTimes();
          if ("firstPaintTime" in chromeTimes && chromeTimes.firstPaintTime > 0) {
            var startTime = chromeTimes.startLoadTime;
            if ("requestTime" in chromeTimes) startTime = chromeTimes.requestTime;
            if (chromeTimes.firstPaintTime >= startTime) firstPaint = (chromeTimes.firstPaintTime - startTime) * 1e3
          }
        }
        if (firstPaint === undefined || firstPaint < 0 || firstPaint > 12e4) {
          firstPaint = win.performance.timing.responseStart - navStart;
          var headURLs = {};
          var headElements = doc.getElementsByTagName("head")[0].children;
          for (var i = 0; i < headElements.length; i++) {
            var el = headElements[i];
            if (el.tagName == "SCRIPT" && el.src && !el.async) headURLs[el.src] = true;
            if (el.tagName == "LINK" && el.rel == "stylesheet" && el.href) headURLs[el.href] = true
          }
          var requests = win.performance.getEntriesByType("resource");
          var doneCritical = false;
          for (var j = 0; j < requests.length; j++) {
            if (!doneCritical && headURLs[requests[j].name] && (requests[j].initiatorType == "script" || requests[j].initiatorType == "link")) {
              var requestEnd = requests[j].responseEnd;
              if (firstPaint === undefined || requestEnd > firstPaint) firstPaint = requestEnd
            } else {
              doneCritical = true
            }
          }
        }
        firstPaint = Math.max(firstPaint, 0)
      };
      var CalculateVisualProgress = function() {
        var paints = {
          0: 0
        };
        var total = 0;
        for (var i = 0; i < rects.length; i++) {
          var tm = firstPaint;
          if ("tm" in rects[i] && rects[i].tm > firstPaint) tm = rects[i].tm;
          if (paints[tm] === undefined) paints[tm] = 0;
          paints[tm] += rects[i].area;
          total += rects[i].area
        }
        var pixels = Math.max(doc.documentElement.clientWidth, win.innerWidth || 0) * Math.max(doc.documentElement.clientHeight, win.innerHeight || 0);
        if (pixels > 0) {
          pixels = Math.max(pixels - total, 0) * pageBackgroundWeight;
          if (paints[firstPaint] === undefined) paints[firstPaint] = 0;
          paints[firstPaint] += pixels;
          total += pixels
        }
        if (total) {
          for (var time in paints) {
            if (paints.hasOwnProperty(time)) {
              progress.push({
                tm: time,
                area: paints[time]
              })
            }
          }
          progress.sort(function(a, b) {
            return a.tm - b.tm
          });
          var accumulated = 0;
          for (var j = 0; j < progress.length; j++) {
            accumulated += progress[j].area;
            progress[j].progress = accumulated / total
          }
        }
      };
      var CalculateSpeedIndex = function() {
        if (progress.length) {
          SpeedIndex = 0;
          var lastTime = 0;
          var lastProgress = 0;
          for (var i = 0; i < progress.length; i++) {
            var elapsed = progress[i].tm - lastTime;
            if (elapsed > 0 && lastProgress < 1) SpeedIndex += (1 - lastProgress) * elapsed;
            lastTime = progress[i].tm;
            lastProgress = progress[i].progress
          }
        } else {
          SpeedIndex = firstPaint
        }
      };
      var rects = [];
      var progress = [];
      var firstPaint;
      var SpeedIndex;
      var pageBackgroundWeight = .1;
      try {
        var navStart = win.performance.timing.navigationStart;
        GetRects();
        GetRectTimings();
        GetFirstPaint();
        CalculateVisualProgress();
        CalculateSpeedIndex()
      } catch (e) {}
      return SpeedIndex
    };
    return RUMSpeedIndex
  });
  define("libra/logger/perf-logger", ["librastandardlib/obj-utils/assign", "librastandardlib/event-utils/onWindowLoad", "librastandardlib/event-utils/onDOMContentLoaded", "librastandardlib/url-utils/buildQueryString", "libra/vendor/rum-speedindex", "librastandardlib/aws/page-settings"], function(_assign, onWindowLoad, onDOMContentLoaded, buildQueryString, speedIndex, PageSettings) {
    "use strict";
    var FORESTER_ENDPOINT = "https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/";
    var METRIC_PREFIX = getVersionMetricPrefix();
    var COMMON_QSP = {
      marketplaceId: "A12QK8IU0H0XW5",
      requestId: "ABCDEFGHIJKLMNOPQRST",
      session: "123-1234567-1234567"
    };
    var HOSTNAMES_TO_SERVICES = {
      "aws.amazon.com": "awsm",
      "amazonaws-china.com": "awsm",
      "www.amazonaws.cn": "cn"
    };
    var MARKETPLACE_SERVICE = "marketplace";
    var metricsToLog = [];
    var resolvedMetrics = {};

    function getVersionMetricPrefix() {
      var framework = "v1";
      if ("framework" in PageSettings) {
        framework = PageSettings.framework
      }
      return "awsm_" + framework + "_:perf_"
    }
    var PerfLogger = {
      dataSet: null,
      instance: null,
      service: null,
      longLanguage: null,
      init: function() {
        if ("performance" in window && "timing" in window.performance) {
          PerfLogger.dataSet = PerfLogger.getDataSet();
          PerfLogger.instance = PerfLogger.getInstance();
          PerfLogger.service = PerfLogger.getService();
          PerfLogger.longLanguage = PerfLogger.getLongLanguage();
          PerfLogger.client = PerfLogger.getClient();
          PerfLogger.host = PerfLogger.getHost();
          PerfLogger.csdsEndpoint = PerfLogger.getCSDSEndpoint();
          PerfLogger.checkDomainLookup();
          PerfLogger.checkResponseStart();
          PerfLogger.checkResponseEnd();
          $(document).ready(PerfLogger.onJqueryReady);
          onWindowLoad(PerfLogger.onWindowLoad);
          onDOMContentLoaded(PerfLogger.checkDOMContentLoaded);
          PerfLogger.logMetrics()
        }
      },
      getService: function() {
        if (PageSettings.isMarketplace) {
          return MARKETPLACE_SERVICE
        }
        var hostname;
        for (hostname in HOSTNAMES_TO_SERVICES) {
          if (HOSTNAMES_TO_SERVICES.hasOwnProperty(hostname)) {
            if (window.location.hostname === hostname) {
              return HOSTNAMES_TO_SERVICES[hostname]
            }
          }
        }
        for (hostname in HOSTNAMES_TO_SERVICES) {
          if (HOSTNAMES_TO_SERVICES.hasOwnProperty(hostname)) {
            var re = new RegExp(hostname + "\\/");
            if (re.test(window.location.pathname) || re.test(window.location.hash)) {
              return HOSTNAMES_TO_SERVICES[hostname]
            }
          }
        }
        return "NA"
      },
      getLongLanguage: function() {
        var langAttr = $("html").attr("lang");
        if (typeof langAttr !== "undefined") {
          return langAttr.replace("-", "_")
        }
        return "NA"
      },
      getInstance: function() {
        if (window.location.pathname.indexOf(".html") === window.location.pathname.length - 5) {
          if ("logInstance" in PageSettings) {
            return PageSettings.logInstance
          }
          return "NA"
        }
        return "LIVE"
      },
      getDataSet: function() {
        if ("logDataSet" in PageSettings) {
          return PageSettings.logDataSet
        }
        return "NA"
      },
      getHost: function() {
        if (typeof window.location.hostname !== "undefined") {
          var hostname = window.location.hostname;
          if (HOSTNAMES_TO_SERVICES.hasOwnProperty(hostname)) {
            return hostname
          }
        }
        return "NA"
      },
      getClient: function() {
        var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
        if (re.test(navigator.userAgent)) {
          return "mobile"
        }
        return "dsk"
      },
      getElapsedTimeSinceResponseEnd: function() {
        return (new Date).getTime() - window.performance.timing.responseEnd
      },
      getElapsedTimeBetweenTimingMetrics: function(later, earlier) {
        if (window.performance.timing[later] && window.performance.timing[earlier]) {
          return window.performance.timing[later] - window.performance.timing[earlier]
        }
        return -1
      },
      checkMetric: function(name, value) {
        if (value > 0 && !resolvedMetrics[name]) {
          metricsToLog.push({
            resource: name,
            value: value
          });
          resolvedMetrics[name] = true
        }
      },
      checkDomainLookup: function() {
        PerfLogger.checkMetric("domainLookupEnd", PerfLogger.getElapsedTimeBetweenTimingMetrics("domainLookupEnd", "domainLookupStart"))
      },
      checkResponseStart: function() {
        PerfLogger.checkMetric("responseStart", PerfLogger.getElapsedTimeBetweenTimingMetrics("responseStart", "domainLookupStart"))
      },
      checkResponseEnd: function() {
        PerfLogger.checkMetric("responseEnd", PerfLogger.getElapsedTimeBetweenTimingMetrics("responseEnd", "fetchStart"))
      },
      checkDOMContentLoaded: function() {
        PerfLogger.checkResponseEnd();
        PerfLogger.checkMetric("domContentLoadedEventEnd", PerfLogger.getElapsedTimeBetweenTimingMetrics("domContentLoadedEventEnd", "responseEnd"));
        PerfLogger.logMetrics()
      },
      checkSpeedIndex: function() {
        if (!resolvedMetrics.speedIndex) {
          try {
            PerfLogger.checkMetric("speedIndex", Math.round(speedIndex(window)))
          } catch (e) {}
        }
      },
      onJqueryReady: function() {
        PerfLogger.checkMetric("documentReady", PerfLogger.getElapsedTimeSinceResponseEnd());
        PerfLogger.checkSpeedIndex();
        PerfLogger.checkDOMContentLoaded();
        PerfLogger.logMetrics()
      },
      onWindowLoad: function() {
        setTimeout(function() {
          PerfLogger.checkMetric("windowLoad", PerfLogger.getElapsedTimeSinceResponseEnd());
          PerfLogger.checkMetric("loadEventEnd", PerfLogger.getElapsedTimeBetweenTimingMetrics("loadEventEnd", "responseEnd"));
          PerfLogger.checkMetric("domComplete", PerfLogger.getElapsedTimeBetweenTimingMetrics("domComplete", "responseEnd"));
          PerfLogger.checkSpeedIndex();
          PerfLogger.checkDOMContentLoaded();
          PerfLogger.logMetrics()
        }, 0)
      },
      getCSDSEndpoint: function() {
        var csdsToken = $.cookie("aws-csds-token");
        if (!csdsToken) {
          return null
        }
        var csdsEndpoint = PageSettings.csdsEndpoint;
        if (csdsEndpoint) {
          csdsEndpoint += "csds/token/" + csdsToken + "/data/"
        }
        return csdsEndpoint
      },
      getFLSQueryString: function() {
        var obj = {
          dataset: PerfLogger.dataSet,
          instance: PerfLogger.instance,
          service: PerfLogger.service,
          marketplace: PerfLogger.longLanguage,
          client: PerfLogger.client,
          host: PerfLogger.host
        };
        return buildQueryString(_assign(obj, COMMON_QSP))
      },
      getCSDSQueryString: function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[191204:191682]", functionData => eval(functionData))},
      buildResourcePath: function(metricsBeingLogged, prefix) {
        var str = "";
        for (var i = 0, len = metricsBeingLogged.length; i < len; i++) {
          var metricName = metricsBeingLogged[i].resource;
          var metricValue = metricsBeingLogged[i].value;
          str += prefix + encodeURIComponent(metricName) + "@v=" + encodeURIComponent(metricValue) + ":u=ms";
          if (i !== len - 1) {
            str += "/"
          }
        }
        return str
      },
      logMetrics: function() {
        if (metricsToLog.length === 0 || !PageSettings.isLoggingEnabled) {
          return
        }
        // Clear the metrics that are about to be fired to mitigate race conditions.
        var metricsBeingLogged = metricsToLog.slice();
        metricsToLog = [];
        var relativeFLSUrl = PerfLogger.buildResourcePath(metricsBeingLogged, METRIC_PREFIX) + "?" + PerfLogger.getFLSQueryString();
        var foresterUrl = FORESTER_ENDPOINT + relativeFLSUrl;
        setTimeout(function() {
          (new Image).src = foresterUrl
        }, 0);
        if (PerfLogger.csdsEndpoint) {
          var relativeCSDSUrl = PerfLogger.buildResourcePath(metricsBeingLogged, "") + "?" + PerfLogger.getCSDSQueryString();
          var csdsUrl = PerfLogger.csdsEndpoint + relativeCSDSUrl;
          setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_5lxwvg.js[193019:193070]", functionData => eval(functionData))}, 0)
        }
      }
    };
    PerfLogger.init();
    return PerfLogger
  });
  define("libra/libra-head", ["librastandardlib/aws/page-settings", "libra/logger/page-error", "libra/core/load-font", "libra/logger/perf-logger"], function(PageSettings) {
    "use strict";
    var bundlePath = "libra/libra-bundle";
    require([bundlePath]);
    if (PageSettings.isLoggingEnabled && PageSettings.logInstance !== "AUTH") {
      var marketoPath = "libra/vendor/require-marketo-munchkin";
      require([marketoPath], function() {
        Munchkin.init("112-TZM-766")
      })
    }
  })
})(); /*6cb55f1be80dd0757c396b8ba3e8b003*/
(function() {
  require(["libra/libra-head"])
})();