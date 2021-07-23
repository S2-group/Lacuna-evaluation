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
! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[614:1008]", functionData => eval(functionData))}, n.n = function(e) {
    var t = e && e.__esModule ? function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[1073:1103]", functionData => eval(functionData))} : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 37)
}([function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "h", (function() {
    return c
  })), n.d(t, "createElement", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[1410:1428]", functionData => eval(functionData))})), n.d(t, "cloneElement", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[1467:1485]", functionData => eval(functionData))})), n.d(t, "Component", (function() {
    return D
  })), n.d(t, "render", (function() {
    return U
  })), n.d(t, "rerender", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[1625:1643]", functionData => eval(functionData))})), n.d(t, "options", (function() {
    return o
  }));
  var r = function() {},
    o = {},
    i = [],
    a = [];

  function c(e, t) {
    var n, c, u, s, l = a;
    for (s = arguments.length; s-- > 2;) i.push(arguments[s]);
    for (t && null != t.children && (i.length || i.push(t.children), delete t.children); i.length;)
      if ((c = i.pop()) && void 0 !== c.pop)
        for (s = c.length; s--;) i.push(c[s]);
      else "boolean" == typeof c && (c = null), (u = "function" != typeof e) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && n ? l[l.length - 1] += c : l === a ? l = [c] : l.push(c), n = u;
    var f = new r;
    return f.nodeName = e, f.children = l, f.attributes = null == t ? void 0 : t, f.key = null == t ? void 0 : t.key, void 0 !== o.vnode && o.vnode(f), f
  }

  function u(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  }
  var s = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

  function l(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[2682:2804]", functionData => eval(functionData))}
  var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
    p = [];

  function h(e) {
    !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (o.debounceRendering || s)(d)
  }

  function d() {
    var e, t = p;
    for (p = []; e = t.pop();) e._dirty && B(e)
  }

  function v(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && b(e, t.nodeName) : n || e._componentConstructor === t.nodeName
  }

  function b(e, t) {
    return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
  }

  function m(e) {
    var t = u({}, e.attributes);
    t.children = e.children;
    var n = e.nodeName.defaultProps;
    if (void 0 !== n)
      for (var r in n) void 0 === t[r] && (t[r] = n[r]);
    return t
  }

  function y(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
  }

  function g(e, t, n, r, o) {
    if ("className" === t && (t = "class"), "key" === t);
    else if ("ref" === t) n && n(null), r && r(e);
    else if ("class" !== t || o)
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof n)
            for (var i in n) i in r || (e.style[i] = "");
          for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === f.test(i) ? r[i] + "px" : r[i]
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
    else if ("o" == t[0] && "n" == t[1]) {
      var a = t !== (t = t.replace(/Capture$/, ""));
      t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, O, a) : e.removeEventListener(t, O, a), (e._listeners || (e._listeners = {}))[t] = r
    } else if ("list" !== t && "type" !== t && !o && t in e) {
      try {
        e[t] = null == r ? "" : r
      } catch (e) {}
      null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t)
    } else {
      var c = o && t !== (t = t.replace(/^xlink:?/, ""));
      null == r || !1 === r ? c ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (c ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
    } else e.className = r || ""
  }

  function O(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[5167:5235]", functionData => eval(functionData))}
  var _ = [],
    w = 0,
    j = !1,
    k = !1;

  function N() {
    for (var e; e = _.pop();) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount()
  }

  function x(e, t, n, r, o, i) {
    w++ || (j = null != o && void 0 !== o.ownerSVGElement, k = null != e && !("__preactattr_" in e));
    var a = C(e, t, n, r, i);
    return o && a.parentNode !== o && o.appendChild(a), --w || (k = !1, i || N()), a
  }

  function C(e, t, n, r, o) {
    var i = e,
      a = j;
    if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0))), i.__preactattr_ = !0, i;
    var c, u, s = t.nodeName;
    if ("function" == typeof s) return function(e, t, n, r) {
      var o = e && e._component,
        i = o,
        a = e,
        c = o && e._componentConstructor === t.nodeName,
        u = c,
        s = m(t);
      for (; o && !u && (o = o._parentComponent);) u = o.constructor === t.nodeName;
      o && u && (!r || o._component) ? (L(o, s, 3, n, r), e = o.base) : (i && !c && (I(i), e = a = null), o = E(t.nodeName, s, n), e && !o.nextBase && (o.nextBase = e, a = null), L(o, s, 1, n, r), e = o.base, a && e !== a && (a._component = null, P(a, !1)));
      return e
    }(e, t, n, r);
    if (j = "svg" === s || "foreignObject" !== s && j, s = String(s), (!e || !b(e, s)) && (c = s, (u = j ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c)).normalizedNodeName = c, i = u, e)) {
      for (; e.firstChild;) i.appendChild(e.firstChild);
      e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0)
    }
    var l = i.firstChild,
      f = i.__preactattr_,
      p = t.children;
    if (null == f) {
      f = i.__preactattr_ = {};
      for (var h = i.attributes, d = h.length; d--;) f[h[d].name] = h[d].value
    }
    return !k && p && 1 === p.length && "string" == typeof p[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != p[0] && (l.nodeValue = p[0]) : (p && p.length || null != l) && function(e, t, n, r, o) {
        var i, a, c, u, s, l = e.childNodes,
          f = [],
          p = {},
          h = 0,
          d = 0,
          b = l.length,
          m = 0,
          g = t ? t.length : 0;
        if (0 !== b)
          for (var O = 0; O < b; O++) {
            var _ = l[O],
              w = _.__preactattr_;
            null != (j = g && w ? _._component ? _._component.__key : w.key : null) ? (h++, p[j] = _) : (w || (void 0 !== _.splitText ? !o || _.nodeValue.trim() : o)) && (f[m++] = _)
          }
        if (0 !== g)
          for (O = 0; O < g; O++) {
            var j;
            if (u = t[O], s = null, null != (j = u.key)) h && void 0 !== p[j] && (s = p[j], p[j] = void 0, h--);
            else if (d < m)
              for (i = d; i < m; i++)
                if (void 0 !== f[i] && v(a = f[i], u, o)) {
                  s = a, f[i] = void 0, i === m - 1 && m--, i === d && d++;
                  break
                } s = C(s, u, n, r), c = l[O], s && s !== e && s !== c && (null == c ? e.appendChild(s) : s === c.nextSibling ? y(c) : e.insertBefore(s, c))
          }
        if (h)
          for (var O in p) void 0 !== p[O] && P(p[O], !1);
        for (; d <= m;) void 0 !== (s = f[m--]) && P(s, !1)
      }(i, p, n, r, k || null != f.dangerouslySetInnerHTML),
      function(e, t, n) {
        var r;
        for (r in n) t && null != t[r] || null == n[r] || g(e, r, n[r], n[r] = void 0, j);
        for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || g(e, r, n[r], n[r] = t[r], j)
      }(i, t.attributes, f), j = a, i
  }

  function P(e, t) {
    var n = e._component;
    n ? I(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || y(e), T(e))
  }

  function T(e) {
    for (e = e.lastChild; e;) {
      var t = e.previousSibling;
      P(e, !0), e = t
    }
  }
  var S = [];

  function E(e, t, n) {
    var r, o = S.length;
    for (e.prototype && e.prototype.render ? (r = new e(t, n), D.call(r, t, n)) : ((r = new D(t, n)).constructor = e, r.render = M); o--;)
      if (S[o].constructor === e) return r.nextBase = S[o].nextBase, S.splice(o, 1), r;
    return r
  }

  function M(e, t, n) {
    return this.constructor(e, n)
  }

  function L(e, t, n, r, i) {
    e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === o.syncComponentUpdates && e.base ? h(e) : B(e, 1, i)), e.__ref && e.__ref(e))
  }

  function B(e, t, n, r) {
    if (!e._disable) {
      var i, a, c, s = e.props,
        l = e.state,
        f = e.context,
        p = e.prevProps || s,
        h = e.prevState || l,
        d = e.prevContext || f,
        v = e.base,
        b = e.nextBase,
        y = v || b,
        g = e._component,
        O = !1,
        j = d;
      if (e.constructor.getDerivedStateFromProps && (l = u(u({}, l), e.constructor.getDerivedStateFromProps(s, l)), e.state = l), v && (e.props = p, e.state = h, e.context = d, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, l, f) ? O = !0 : e.componentWillUpdate && e.componentWillUpdate(s, l, f), e.props = s, e.state = l, e.context = f), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !O) {
        i = e.render(s, l, f), e.getChildContext && (f = u(u({}, f), e.getChildContext())), v && e.getSnapshotBeforeUpdate && (j = e.getSnapshotBeforeUpdate(p, h));
        var k, C, T = i && i.nodeName;
        if ("function" == typeof T) {
          var S = m(i);
          (a = g) && a.constructor === T && S.key == a.__key ? L(a, S, 1, f, !1) : (k = a, e._component = a = E(T, S, f), a.nextBase = a.nextBase || b, a._parentComponent = e, L(a, S, 0, f, !1), B(a, 1, n, !0)), C = a.base
        } else c = y, (k = g) && (c = e._component = null), (y || 1 === t) && (c && (c._component = null), C = x(c, i, f, n || !v, y && y.parentNode, !0));
        if (y && C !== y && a !== g) {
          var M = y.parentNode;
          M && C !== M && (M.replaceChild(C, y), k || (y._component = null, P(y, !1)))
        }
        if (k && I(k), e.base = C, C && !r) {
          for (var D = e, U = e; U = U._parentComponent;)(D = U).base = C;
          C._component = D, C._componentConstructor = D.constructor
        }
      }
      for (!v || n ? _.unshift(e) : O || (e.componentDidUpdate && e.componentDidUpdate(p, h, j), o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
      w || r || N()
    }
  }

  function I(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[12439:12776]", functionData => eval(functionData))}

  function D(e, t) {
    this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
  }

  function U(e, t, n) {
    return x(n, e, {}, !1, t, !1)
  }
  u(D.prototype, {
    setState: function(e, t) {
      this.prevState || (this.prevState = this.state), this.state = u(u({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), h(this)
    },
    forceUpdate: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[13256:13316]", functionData => eval(functionData))},
    render: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[13341:13343]", functionData => eval(functionData))}
  });
  var F = {
    h: c,
    createElement: c,
    cloneElement: l,
    Component: D,
    render: U,
    rerender: d,
    options: o
  };
  t.default = F
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    moreNav: "moreNav__1ShAb",
    visible: "visible__2mRGs",
    section: "section__1MiZw",
    sectionTitle: "sectionTitle__2XZFa",
    communitySection: "communitySection__2jNzS",
    sectionItems: "sectionItems__1tEqP",
    link: "link__HCunz",
    sectionLinksSection: "sectionLinksSection__2PxjQ",
    otherLinksSection: "otherLinksSection__3Q5VU",
    footerSection: "footerSection__2ydsr",
    copyright: "copyright__1Ooxv",
    destinationsSection: "destinationsSection__oGK0H",
    destinationItem: "destinationItem__sw0jG",
    destinationLink: "destinationLink__3BrxC",
    bfnLogo: "bfnLogo__82I0_",
    bfreviewsLogo: "bfreviewsLogo__1TXcx",
    tastyLogo: "tastyLogo__2XBtV",
    goodfulLogo: "goodfulLogo__3nZNd",
    asisLogo: "asisLogo__ZFs3D",
    bringmeLogo: "bringmeLogo__2_dtK",
    menuToggle: "menuToggle__GGVU-",
    pageOverlay: "pageOverlay__38sHJ",
    bodyWithMoreNav: "bodyWithMoreNav__2lFOz"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    logoContainer: "logoContainer__3fSgq",
    newsLogoContainer: "newsLogoContainer__x7FfB",
    microBrandContainer: "microBrandContainer__3nh2f",
    microBrandLink: "microBrandLink__3wbkF",
    microBrandDelimiter: "microBrandDelimiter__3CXeP",
    "delimiter-nifty": "delimiter-nifty__1lC-M",
    "delimiter-bringme": "delimiter-bringme__2lBJE",
    "delimiter-goodful": "delimiter-goodful__1Mi7S",
    "delimiter-asis": "delimiter-asis__24bsL",
    "delimiter-playfull": "delimiter-playfull__2N1Ai",
    bfo: "bfo__MfRqr",
    secondary: "secondary__1eyya",
    news: "news__3bAiS",
    newsTagline: "newsTagline__ZLyPI",
    bringme: "bringme__3Fhih",
    goodful: "goodful__3Gave",
    nifty: "nifty__1veSO",
    asis: "asis__1g-BP",
    playfull: "playfull__3uBIo"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    userMenu: "userMenu__35Tpj",
    userAvatarContainer: "userAvatarContainer__1fzue",
    userAvatar: "userAvatar__1hSmA",
    userOptions: "userOptions__2AWrW",
    userAvatarUnread: "userAvatarUnread__2SJew",
    userOptionsProfile: "userOptionsProfile__1k7j3",
    userProfileName: "userProfileName__1fUgc",
    userProfileNameText: "userProfileNameText__1kYou",
    userProfileLink: "userProfileLink__15Sc6",
    userOptionsLinks: "userOptionsLinks__Xnzta",
    userMenuContainer: "userMenuContainer__1N7EL",
    visible: "visible__1Jcvp"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    userMenu: "userMenu__USWPM",
    userAvatar: "userAvatar__pBPSq",
    userOptions: "userOptions__3HNoB",
    userOptionsProfile: "userOptionsProfile__1_Evm",
    userProfileName: "userProfileName__1exvg",
    userProfileNameText: "userProfileNameText__f7uq9",
    userProfileView: "userProfileView__ZIaj0",
    userProfileLink: "userProfileLink__3vxSs",
    userOptionsLinks: "userOptionsLinks__1QTHu",
    settingsLink: "settingsLink__24BMd"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    wrapper: "wrapper__DtNG9",
    topicNav: "topicNav__WFzIs",
    topicNavItem: "topicNavItem__i53qs",
    link: "link__1aeEz",
    mdHide: "mdHide__24xVL",
    downCaret: "downCaret__2AXUI"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    search: "search__1B6FB",
    searchLink: "searchLink__3OXhS",
    searchButton: "searchButton__1XY_w",
    searchIcon: "searchIcon__z-gd4",
    searchInputContainer: "searchInputContainer__3QaXp",
    searchInput: "searchInput__2f09w",
    searchLabel: "searchLabel__31sal"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    header: "header__3OBcH",
    wrapper: "wrapper__36hPD"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    container: "container__Wkw-E",
    title: "title__qkYfH",
    items: "items__EE0Lf",
    item: "item__1Bg9C",
    cta: "cta__1wCm_"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    notifications: "notifications__322d_",
    notificationsTitle: "notificationsTitle__POmkC",
    unreadTitle: "unreadTitle__10M4M",
    unreadIcon: "unreadIcon__3GhNp",
    notification: "notification__1GY2F"
  }
}, function(e, t, n) {
  e.exports = n(32)()
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    destinationNavContainer: "destinationNavContainer__eVhyq",
    destinationNav: "destinationNav__1qfPP",
    destinationNavItem: "destinationNavItem__2iBxl",
    link: "link__1pvR_"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    badgeBar: "badgeBar__1SKBc",
    badgeBarWithOffset: "badgeBarWithOffset__39sFf",
    badgeBarItem: "badgeBarItem__3ujdt",
    bounce: "bounce__3Y-pE",
    trendingBadge: "trendingBadge__nWA79"
  }
}, function(e, t, n) {
  ! function(e, t) {
    "use strict";
    var n = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19205:19473]", functionData => eval(functionData))};

    function r(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19497:19658]", functionData => eval(functionData))}
    var o = {
      register: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19701:19767]", functionData => eval(functionData))},
      unregister: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19799:19801]", functionData => eval(functionData))},
      val: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19826:19828]", functionData => eval(functionData))}
    };

    function i(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19855:19976]", functionData => eval(functionData))}

    function a(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[19996:20056]", functionData => eval(functionData))}
    var c = 1073741823,
      u = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[20102:20128]", functionData => eval(functionData))},
      s = 0;

    function l(e, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[20165:23090]", functionData => eval(functionData))}
    var f = l;
    e.default = l, e.createContext = f, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }(t, n(0))
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    flyout: "flyout__2gQze",
    flyoutInner: "flyoutInner__18rbM",
    arrow: "arrow__23JFg"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    mainNavContainer: "mainNavContainer__1m7kD",
    mainNav: "mainNav__VimfQ",
    stickyMainNav: "stickyMainNav__3x18O"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    container: "container__1NFBD",
    select: "select__3CYXv"
  }
}, function(e, t, n) {
  "use strict";
  var r = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  var o = n(19),
    i = n(19),
    a = n(34),
    c = function(e) {
      function t(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[24391:25015]", functionData => eval(functionData))}
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), r(t, [{
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[25558:26001]", functionData => eval(functionData))}
      }, {
        key: "componentDidUpdate",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[26075:26502]", functionData => eval(functionData))}
      }, {
        key: "componentWillUnmount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[26577:26799]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[26860:27123]", functionData => eval(functionData))}
      }]), t
    }(o.Component);
  c.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: a
  }, e.exports = c
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "version", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27358:27376]", functionData => eval(functionData))})), n.d(t, "DOM", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27406:27424]", functionData => eval(functionData))})), n.d(t, "Children", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27459:27477]", functionData => eval(functionData))})), n.d(t, "render", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27510:27528]", functionData => eval(functionData))})), n.d(t, "hydrate", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27562:27580]", functionData => eval(functionData))})), n.d(t, "createClass", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27618:27636]", functionData => eval(functionData))})), n.d(t, "createPortal", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27675:27693]", functionData => eval(functionData))})), n.d(t, "createFactory", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27733:27751]", functionData => eval(functionData))})), n.d(t, "createElement", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27791:27809]", functionData => eval(functionData))})), n.d(t, "cloneElement", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27848:27866]", functionData => eval(functionData))})), n.d(t, "isValidElement", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27907:27925]", functionData => eval(functionData))})), n.d(t, "findDOMNode", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[27963:27981]", functionData => eval(functionData))})), n.d(t, "unmountComponentAtNode", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28030:28048]", functionData => eval(functionData))})), n.d(t, "Component", (function() {
    return G
  })), n.d(t, "PureComponent", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28142:28160]", functionData => eval(functionData))})), n.d(t, "unstable_renderSubtreeIntoContainer", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28222:28240]", functionData => eval(functionData))})), n.d(t, "unstable_batchedUpdates", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28290:28308]", functionData => eval(functionData))})), n.d(t, "__spread", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28343:28361]", functionData => eval(functionData))}));
  var r = n(11),
    o = n.n(r);
  n.d(t, "PropTypes", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28432:28452]", functionData => eval(functionData))}));
  var i = n(0);
  n.d(t, "createRef", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28506:28534]", functionData => eval(functionData))}));
  var a = n(14);
  n.d(t, "createContext", (function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[28593:28625]", functionData => eval(functionData))}));
  var c = "15.1.0",
    u = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
    s = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    l = "undefined" != typeof Symbol && Symbol.for ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
    f = {
      constructor: 1,
      render: 1,
      shouldComponentUpdate: 1,
      componentWillReceiveProps: 1,
      componentWillUpdate: 1,
      componentDidUpdate: 1,
      componentWillMount: 1,
      componentDidMount: 1,
      componentWillUnmount: 1,
      componentDidUnmount: 1
    },
    p = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
    h = {},
    d = !1;
  try {
    d = !1
  } catch (e) {}

  function v() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30192:30213]", functionData => eval(functionData))}
  var b = Object(i.h)("a", null).constructor;
  b.prototype.$$typeof = s, b.prototype.preactCompatUpgraded = !1, b.prototype.preactCompatNormalized = !1, Object.defineProperty(b.prototype, "type", {
    get: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30433:30467]", functionData => eval(functionData))},
    set: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30490:30521]", functionData => eval(functionData))},
    configurable: !0
  }), Object.defineProperty(b.prototype, "props", {
    get: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30616:30652]", functionData => eval(functionData))},
    set: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30675:30708]", functionData => eval(functionData))},
    configurable: !0
  });
  var m = i.options.event;
  i.options.event = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30796:30870]", functionData => eval(functionData))};
  var y = i.options.vnode;

  function g(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[30922:31366]", functionData => eval(functionData))}
  i.options.vnode = function(e) {
    if (!e.preactCompatUpgraded) {
      e.preactCompatUpgraded = !0;
      var t = e.nodeName,
        n = e.attributes = null == e.attributes ? {} : U({}, e.attributes);
      "function" == typeof t ? (!0 === t[l] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || L(e), function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[31827:32002]", functionData => eval(functionData))}(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), function(e, t) {
        var n, r, o;
        if (t) {
          for (o in t)
            if (n = p.test(o)) break;
          if (n)
            for (o in r = e.attributes = {}, t) t.hasOwnProperty(o) && (r[p.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() : o] = t[o])
        }
      }(e, n))
    }
    y && y(e)
  };
  var O = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[32564:32566]", functionData => eval(functionData))};

  function _(e, t, n, r) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[32594:32740]", functionData => eval(functionData))}

  function w(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[32758:32797]", functionData => eval(functionData))}

  function j(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[32818:32893]", functionData => eval(functionData))}

  function k(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[32911:33072]", functionData => eval(functionData))}
  O.prototype.getChildContext = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33116:33151]", functionData => eval(functionData))}, O.prototype.render = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33186:33216]", functionData => eval(functionData))};
  var N, x = [],
    C = {
      map: function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33274:33379]", functionData => eval(functionData))},
      forEach: function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33414:33531]", functionData => eval(functionData))},
      count: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33558:33601]", functionData => eval(functionData))},
      only: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33627:33761]", functionData => eval(functionData))},
      toArray: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33790:33843]", functionData => eval(functionData))}
    };

  function P(e) {
    return M.bind(null, e)
  }
  for (var T = {}, S = u.length; S--;) T[u[S]] = P(u[S]);

  function E(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[33976:34430]", functionData => eval(functionData))}

  function M() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[34447:34876]", functionData => eval(functionData))}

  function L(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[34894:36107]", functionData => eval(functionData))}

  function B(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[36128:36481]", functionData => eval(functionData))}

  function I(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[36499:36557]", functionData => eval(functionData))}
  var D = {
    configurable: !0,
    get: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[36612:36643]", functionData => eval(functionData))},
    set: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[36666:36694]", functionData => eval(functionData))}
  };

  function U(e, t) {
    for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++)
      if (o = n[r])
        for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i]);
    return e
  }

  function F(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[36916:37045]", functionData => eval(functionData))}

  function A(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[37063:37126]", functionData => eval(functionData))}

  function z() {}

  function R(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[37163:38225]", functionData => eval(functionData))}

  function W(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[38249:38365]", functionData => eval(functionData))}

  function V(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[38386:38691]", functionData => eval(functionData))}

  function H(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[38712:38897]", functionData => eval(functionData))}

  function q(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[38918:39439]", functionData => eval(functionData))}

  function $(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39457:39475]", functionData => eval(functionData))}

  function Z() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39492:39526]", functionData => eval(functionData))}

  function G(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39550:39723]", functionData => eval(functionData))}

  function K(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39744:39772]", functionData => eval(functionData))}

  function X(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39790:39803]", functionData => eval(functionData))}
  U(G.prototype = new i.Component, {
    constructor: G,
    isReactComponent: {},
    replaceState: function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[39920:40011]", functionData => eval(functionData))},
    getDOMNode: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[40040:40070]", functionData => eval(functionData))},
    isMounted: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[40098:40130]", functionData => eval(functionData))}
  }), z.prototype = G.prototype, K.prototype = new z, K.prototype.isPureReactComponent = !0, K.prototype.shouldComponentUpdate = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[40275:40328]", functionData => eval(functionData))};
  var Y = {
    version: c,
    DOM: T,
    PropTypes: o.a,
    Children: C,
    render: g,
    hydrate: g,
    createClass: R,
    createContext: a.createContext,
    createPortal: j,
    createFactory: P,
    createElement: M,
    cloneElement: B,
    createRef: i.createRef,
    isValidElement: I,
    findDOMNode: A,
    unmountComponentAtNode: k,
    Component: G,
    PureComponent: K,
    unstable_renderSubtreeIntoContainer: _,
    unstable_batchedUpdates: X,
    __spread: U
  };
  t.default = Y
}, function(e, t, n) {
  "use strict";
  (function(e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.a = n
  }).call(this, n(27))
}, function(e, t, n) {
  var r = n(28)("jsonp");
  e.exports = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[41074:41927]", functionData => eval(functionData))};
  var o = 0;

  function i() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[41958:41960]", functionData => eval(functionData))}
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    text: "text__XYCjV",
    link: "link__357dN",
    linkCta: "linkCta__NNr1e",
    mainNavContainer: "mainNavContainer__2l6Vz",
    bfoLogo: "bfoLogo__1KJMe",
    menuToggle: "menuToggle__2EiBQ",
    topicNavWrapper: "topicNavWrapper__2NeIp",
    searchIcon: "searchIcon__1Ebx7",
    moreNav: "moreNav__2sbYE"
  }
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    text: "text__1dl8A",
    link: "link__2d6hQ",
    linkCta: "linkCta__2WKTn",
    mainNavContainer: "mainNavContainer__3mRKb",
    bfoLogo: "bfoLogo__198yR",
    menuToggle: "menuToggle__3tmWj",
    topicNavWrapper: "topicNavWrapper__1oERL",
    searchIcon: "searchIcon__1dTDa",
    moreNav: "moreNav__3FbPP"
  }
}, function(e, t, n) {
  e.exports = function(e) {
    "use strict";
    ! function() {
      function e(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[42963:42995]", functionData => eval(functionData))}

      function t(t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[43017:44259]", functionData => eval(functionData))}
      "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[44369:44398]", functionData => eval(functionData))}), t.prototype.next = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[44432:44480]", functionData => eval(functionData))}, t.prototype.throw = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[44514:44563]", functionData => eval(functionData))}, t.prototype.return = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[44598:44648]", functionData => eval(functionData))}
    }();
    var t = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[44685:44782]", functionData => eval(functionData))},
      n = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      },
      r = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[45274:45462]", functionData => eval(functionData))},
      o = function(o) {
        function a() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[45509:45583]", functionData => eval(functionData))}
        return n(a, o), a.prototype.componentDidUpdate = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[45653:45767]", functionData => eval(functionData))}, a.prototype.componentDidMount = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[45812:45921]", functionData => eval(functionData))}, a.prototype.componentWillUnmount = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[45969:46096]", functionData => eval(functionData))}, a.prototype.findNode = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[46133:46214]", functionData => eval(functionData))}, a.prototype.renderLayer = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[46253:46732]", functionData => eval(functionData))}, a.prototype.render = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[46766:46799]", functionData => eval(functionData))}, a
      }(e.Component),
      i = function(e) {
        function o() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[46870:46944]", functionData => eval(functionData))}
        return n(o, e), o.prototype.getChildContext = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[47010:47057]", functionData => eval(functionData))}, o.prototype.render = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[47092:47168]", functionData => eval(functionData))}, o
      }(e.Component);
    return o
  }(n(0))
}, function(e, t, n) {
  e.exports = {
    breakpointMedium: "500px",
    breakpointLarge: "790px",
    breakpointSticky: "500px",
    skipNav: "skipNav__261Yu"
  }
}, , function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  (function(r) {
    function o() {
      var e;
      try {
        e = t.storage.debug
      } catch (e) {}
      return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
    }(t = e.exports = n(30)).log = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[47837:47965]", functionData => eval(functionData))}, t.formatArgs = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[47994:48413]", functionData => eval(functionData))}, t.save = function(e) {
      try {
        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
      } catch (e) {}
    }, t.load = o, t.useColors = function() {
      if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
      return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
      try {
        return window.localStorage
      } catch (e) {}
    }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[49576:49714]", functionData => eval(functionData))}, t.enable(o())
  }).call(this, n(29))
}, function(e, t) {
  var n, r, o = e.exports = {};

  function i() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[49821:49881]", functionData => eval(functionData))}

  function a() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[49898:49960]", functionData => eval(functionData))}

  function c(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[49978:50277]", functionData => eval(functionData))}! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      n = i
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a
    } catch (e) {
      r = a
    }
  }();
  var u, s = [],
    l = !1,
    f = -1;

  function p() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[50570:50652]", functionData => eval(functionData))}

  function h() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[50669:51262]", functionData => eval(functionData))}

  function d(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51283:51321]", functionData => eval(functionData))}

  function v() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51338:51340]", functionData => eval(functionData))}
  o.nextTick = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51368:51575]", functionData => eval(functionData))}, d.prototype.run = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51606:51648]", functionData => eval(functionData))}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51933:51952]", functionData => eval(functionData))}, o.binding = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[51978:52039]", functionData => eval(functionData))}, o.cwd = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[52060:52080]", functionData => eval(functionData))}, o.chdir = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[52104:52163]", functionData => eval(functionData))}, o.umask = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[52186:52204]", functionData => eval(functionData))}
}, function(e, t, n) {
  var r;

  function o(e) {
    function n() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[52273:53017]", functionData => eval(functionData))}
    return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }(e), "function" == typeof t.init && t.init(n), n
  }(t = e.exports = o.debug = o.default = o).coerce = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[53381:53443]", functionData => eval(functionData))}, t.disable = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[53468:53490]", functionData => eval(functionData))}, t.enable = function(e) {
    t.save(e), t.names = [], t.skips = [];
    for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
  }, t.enabled = function(e) {
    var n, r;
    for (n = 0, r = t.skips.length; n < r; n++)
      if (t.skips[n].test(e)) return !1;
    for (n = 0, r = t.names.length; n < r; n++)
      if (t.names[n].test(e)) return !0;
    return !1
  }, t.humanize = n(31), t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
  var n = 1e3,
    r = 60 * n,
    o = 60 * r,
    i = 24 * o,
    a = 365.25 * i;

  function c(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[54241:54348]", functionData => eval(functionData))}
  e.exports = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[54378:56056]", functionData => eval(functionData))}
}, function(e, t, n) {
  "use strict";
  var r = n(33);

  function o() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[56129:56131]", functionData => eval(functionData))}

  function i() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[56148:56150]", functionData => eval(functionData))}
  i.resetWarningCache = o, e.exports = function() {
    function e(e, t, n, o, i, a) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[56236:56526]", functionData => eval(functionData))}

    function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[56545:56567]", functionData => eval(functionData))}
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: i,
      resetWarningCache: o
    };
    return n.PropTypes = n, n
  }
}, function(e, t, n) {
  "use strict";
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
  var r, o = n(35),
    i = n(36),
    a = (r = [], {
      activateTrap: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[57215:57410]", functionData => eval(functionData))},
      deactivateTrap: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[57446:57556]", functionData => eval(functionData))}
    });

  function c(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[57582:57615]", functionData => eval(functionData))}
  e.exports = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[57645:61572]", functionData => eval(functionData))}
}, function(e, t) {
  var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
    r = n.join(","),
    o = "undefined" == typeof Element ? function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[61833:61835]", functionData => eval(functionData))} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function i(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[61967:62425]", functionData => eval(functionData))}

  function a(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[62446:62891]", functionData => eval(functionData))}

  function c(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[62912:63069]", functionData => eval(functionData))}
  i.isTabbable = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63102:63198]", functionData => eval(functionData))}, i.isFocusable = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63231:63327]", functionData => eval(functionData))};
  var u = n.concat("iframe").join(",");

  function s(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63386:63553]", functionData => eval(functionData))}

  function l(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63574:63678]", functionData => eval(functionData))}

  function f(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63696:63734]", functionData => eval(functionData))}

  function p(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63752:63791]", functionData => eval(functionData))}
  p.prototype.hasDisplayNone = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[63838:64286]", functionData => eval(functionData))}, p.prototype.isUntouchable = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[64328:64506]", functionData => eval(functionData))}, e.exports = i
}, function(e, t) {
  e.exports = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[64567:64729]", functionData => eval(functionData))};
  var n = Object.prototype.hasOwnProperty
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);
  var o = function(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t)
    },
    i = n(20),
    a = "object" == typeof self && self && self.Object === Object && self,
    c = i.a || a || Function("return this")(),
    u = function() {
      return c.Date.now()
    },
    s = c.Symbol,
    l = Object.prototype,
    f = l.hasOwnProperty,
    p = l.toString,
    h = s ? s.toStringTag : void 0;
  var d = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[65293:65496]", functionData => eval(functionData))},
    v = Object.prototype.toString;
  var b = function(e) {
      return v.call(e)
    },
    m = "[object Null]",
    y = "[object Undefined]",
    g = s ? s.toStringTag : void 0;
  var O = function(e) {
    return null == e ? void 0 === e ? y : m : g && g in Object(e) ? d(e) : b(e)
  };
  var _ = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[65809:65863]", functionData => eval(functionData))},
    w = "[object Symbol]";
  var j = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[65914:65976]", functionData => eval(functionData))},
    k = NaN,
    N = /^\s+|\s+$/g,
    x = /^[-+]0x[0-9a-f]+$/i,
    C = /^0b[01]+$/i,
    P = /^0o[0-7]+$/i,
    T = parseInt;
  var S = function(e) {
      if ("number" == typeof e) return e;
      if (j(e)) return k;
      if (o(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = o(t) ? t + "" : t
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(N, "");
      var n = C.test(e);
      return n || P.test(e) ? T(e.slice(2), n ? 2 : 8) : x.test(e) ? k : +e
    },
    E = "Expected a function",
    M = Math.max,
    L = Math.min;
  var B = function(e, t, n) {
      var r, i, a, c, s, l, f = 0,
        p = !1,
        h = !1,
        d = !0;
      if ("function" != typeof e) throw new TypeError(E);

      function v(t) {
        var n = r,
          o = i;
        return r = i = void 0, f = t, c = e.apply(o, n)
      }

      function b(e) {
        var n = e - l;
        return void 0 === l || n >= t || n < 0 || h && e - f >= a
      }

      function m() {
        var e = u();
        if (b(e)) return y(e);
        s = setTimeout(m, function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[67106:67191]", functionData => eval(functionData))}(e))
      }

      function y(e) {
        return s = void 0, d && r ? v(e) : (r = i = void 0, c)
      }

      function g() {
        var e = u(),
          n = b(e);
        if (r = arguments, i = this, l = e, n) {
          if (void 0 === s) return function(e) {
            return f = e, s = setTimeout(m, t), p ? v(e) : c
          }(l);
          if (h) return s = setTimeout(m, t), v(l)
        }
        return void 0 === s && (s = setTimeout(m, t)), c
      }
      return t = S(t) || 0, o(n) && (p = !!n.leading, a = (h = "maxWait" in n) ? M(S(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), g.cancel = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[67835:67915]", functionData => eval(functionData))}, g.flush = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[67938:67988]", functionData => eval(functionData))}, g
    },
    I = "Expected a function";
  var D = function(e, t, n) {
    var r = !0,
      i = !0;
    if ("function" != typeof e) throw new TypeError(I);
    return o(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), B(e, t, {
      leading: r,
      maxWait: t,
      trailing: i
    })
  };

  function U(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[68341:68409]", functionData => eval(functionData))}

  function F() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[68426:68520]", functionData => eval(functionData))}
  var A = {
      getBuzzfeedSubdomainOrWildcard: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[68583:68712]", functionData => eval(functionData))},
      get: function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
          for (var i = r[o];
            " " === i.charAt(0);) i = i.substring(1, i.length);
          if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
        }
        return t
      },
      set: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[69129:69497]", functionData => eval(functionData))},
      remove: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[69525:69737]", functionData => eval(functionData))}
    },
    z = "function" == typeof fetch ? fetch : function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[69805:71432]", functionData => eval(functionData))};
  Array.isArray;
  var R = "[object AsyncFunction]",
    W = "[object Function]",
    V = "[object GeneratorFunction]",
    H = "[object Proxy]";
  var q, $ = function(e) {
      if (!o(e)) return !1;
      var t = O(e);
      return t == W || t == V || t == R || t == H
    },
    Z = c["__core-js_shared__"],
    G = (q = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q : "";
  var K = function(e) {
      return !!G && G in e
    },
    X = Function.prototype.toString;
  var Y = function(e) {
      if (null != e) {
        try {
          return X.call(e)
        } catch (e) {}
        try {
          return e + ""
        } catch (e) {}
      }
      return ""
    },
    J = /^\[object .+?Constructor\]$/,
    Q = Function.prototype,
    ee = Object.prototype,
    te = Q.toString,
    ne = ee.hasOwnProperty,
    re = RegExp("^" + te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var oe = function(e) {
    return !(!o(e) || K(e)) && ($(e) ? re : J).test(Y(e))
  };
  var ie = function(e, t) {
    return null == e ? void 0 : e[t]
  };
  var ae = function(e, t) {
      var n = ie(e, t);
      return oe(n) ? n : void 0
    },
    ce = ae(Object, "create");
  var ue = function() {
    this.__data__ = ce ? ce(null) : {}, this.size = 0
  };
  var se = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[72823:72923]", functionData => eval(functionData))},
    le = "__lodash_hash_undefined__",
    fe = Object.prototype.hasOwnProperty;
  var pe = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73028:73190]", functionData => eval(functionData))},
    he = Object.prototype.hasOwnProperty;
  var de = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73257:73343]", functionData => eval(functionData))},
    ve = "__lodash_hash_undefined__";
  var be = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73409:73527]", functionData => eval(functionData))};

  function me(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1])
    }
  }
  me.prototype.clear = ue, me.prototype.delete = se, me.prototype.get = pe, me.prototype.has = de, me.prototype.set = be;
  var ye = me;
  var ge = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73852:73895]", functionData => eval(functionData))};
  var Oe = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73923:73967]", functionData => eval(functionData))};
  var _e = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[73995:74091]", functionData => eval(functionData))},
    we = Array.prototype.splice;
  var je = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[74149:74290]", functionData => eval(functionData))};
  var ke = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[74315:74403]", functionData => eval(functionData))};
  var Ne = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[74428:74470]", functionData => eval(functionData))};
  var xe = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[74498:74619]", functionData => eval(functionData))};

  function Ce(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[74639:74784]", functionData => eval(functionData))}
  Ce.prototype.clear = ge, Ce.prototype.delete = je, Ce.prototype.get = ke, Ce.prototype.has = Ne, Ce.prototype.set = xe;
  var Pe = Ce,
    Te = ae(c, "Map");
  var Se = function() {
    this.size = 0, this.__data__ = {
      hash: new ye,
      map: new(Te || Pe),
      string: new ye
    }
  };
  var Ee = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75107:75244]", functionData => eval(functionData))};
  var Me = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75272:75372]", functionData => eval(functionData))};
  var Le = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75397:75474]", functionData => eval(functionData))};
  var Be = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75499:75534]", functionData => eval(functionData))};
  var Ie = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75559:75594]", functionData => eval(functionData))};
  var De = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[75622:75733]", functionData => eval(functionData))};

  function Ue(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1])
    }
  }
  Ue.prototype.clear = Se, Ue.prototype.delete = Le, Ue.prototype.get = Be, Ue.prototype.has = Ie, Ue.prototype.set = De;
  var Fe = Ue,
    Ae = "Expected a function";

  function ze(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(Ae);
    var n = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[76210:76416]", functionData => eval(functionData))};
    return n.cache = new(ze.Cache || Fe), n
  }
  ze.Cache = Fe;
  var Re = ze,
    We = 500;
  var Ve = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    He = /\\(\\)?/g;
  ! function(e) {
    var t = Re(e, (function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[76693:76747]", functionData => eval(functionData))})),
      n = t.cache
  }((function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[76786:76952]", functionData => eval(functionData))}));
  var qe = s ? s.prototype : void 0;
  qe && qe.toString;
  var $e = "track/website/instrumentation";
  var Ze = ["samplingRate"];
  n(21);

  function Ge(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[77114:77308]", functionData => eval(functionData))}

  function Ke(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[77327:77523]", functionData => eval(functionData))}

  function Xe(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[77542:78692]", functionData => eval(functionData))}

  function Ye(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[78711:78855]", functionData => eval(functionData))}

  function Je(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[78874:78899]", functionData => eval(functionData))}

  function Qe(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[78918:78943]", functionData => eval(functionData))}

  function et(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[78962:79111]", functionData => eval(functionData))}
  var tt = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[79135:80241]", functionData => eval(functionData))},
    nt = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[80267:80904]", functionData => eval(functionData))},
    rt = function() {
      return BZFD.Config.bfwInfoCookie
    },
    ot = {
      general_admin: [4, 0],
      bento_suggest_all: [116, 1],
      bento_suggest_edition: [115, 2],
      bento_user: [115, 3],
      freelance_contributors: [129, 1]
    },
    it = {
      isLoggedIn: function() {
        return !!A.get(rt())
      },
      signout: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[81268:81636]", functionData => eval(functionData))},
      getUserInfo: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[81668:82190]", functionData => eval(functionData))},
      isAdmin: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[82218:82356]", functionData => eval(functionData))},
      userCan: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[82385:82635]", functionData => eval(functionData))}
    },
    at = n(8),
    ct = n.n(at),
    ut = n(1),
    st = n.n(ut),
    lt = n(17),
    ft = n.n(lt),
    pt = function(e, t) {
      return (pt = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[82892:82929]", functionData => eval(functionData))} || function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[82948:83023]", functionData => eval(functionData))})(e, t)
    };

  function ht(e, t) {
    function n() {
      this.constructor = e
    }
    pt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var dt = {
    register: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[83251:83313]", functionData => eval(functionData))},
    unregister: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[83343:83345]", functionData => eval(functionData))},
    val: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[83368:83370]", functionData => eval(functionData))}
  };

  function vt(e) {
    var t = e.children;
    return {
      child: 1 === t.length ? t[0] : null,
      children: t
    }
  }

  function bt(e) {
    return vt(e).child || "render" in e && e.render
  }
  var mt = 1073741823,
    yt = function() {
      return mt
    },
    gt = 0;

  function Ot(e, t) {
    var n = "_preactContextProvider-" + gt++;
    return {
      Provider: function(e) {
        function o(n) {
          var r = e.call(this, n) || this;
          return r._emitter = function(e, t) {
            var n = [],
              r = e,
              o = function(e) {
                return 0 | t(r, e)
              };
            return {
              register: function(e) {
                n.push(e), e(r, o(r))
              },
              unregister: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[84167:84281]", functionData => eval(functionData))},
              val: function(e) {
                if (void 0 === e || e == r) return r;
                var t = o(e);
                return r = e, n.forEach((function(n) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[84453:84505]", functionData => eval(functionData))})), r
              }
            }
          }(n.value, t || yt), r
        }
        return ht(o, e), o.prototype.getChildContext = function() {
          var e;
          return (e = {})[n] = this._emitter, e
        }, o.prototype.componentDidUpdate = function() {
          this._emitter.val(this.props.value)
        }, o.prototype.render = function() {
          var e = vt(this.props),
            t = e.child,
            n = e.children;
          return t || Object(r.h)("span", null, n)
        }, o
      }(r.Component),
      Consumer: function(t) {
        function r(n, r) {
          var o = t.call(this, n, r) || this;
          return o._updateContext = function(e, t) {
            var n = o.props.unstable_observedBits,
              r = null == n ? mt : n;
            0 != ((r |= 0) & t) && o.setState({
              value: e
            })
          }, o.state = {
            value: o._getEmitter().val() || e
          }, o
        }
        return ht(r, t), r.prototype.componentDidMount = function() {
          this._getEmitter().register(this._updateContext)
        }, r.prototype.shouldComponentUpdate = function(e, t) {
          return this.state.value !== t.value || bt(this.props) !== bt(e)
        }, r.prototype.componentWillUnmount = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[85789:85861]", functionData => eval(functionData))}, r.prototype.componentDidUpdate = function(e, t, r) {
          var o = r[n];
          o !== this.context[n] && ((o || dt).unregister(this._updateContext), this.componentDidMount())
        }, r.prototype.render = function() {
          var e = "render" in this.props && this.props.render,
            t = bt(this.props);
          if (e && e !== t && console.warn("Both children and a render function are defined. Children will be used"), "function" == typeof t) return t(this.state.value);
          console.warn("Consumer is expecting a function as one and only child but didn't find any")
        }, r.prototype._getEmitter = function() {
          return this.context[n] || dt
        }, r
      }(r.Component)
    }
  }
  var _t = Ot,
    wt = _t({}),
    jt = _t({}),
    kt = _t("light"),
    Nt = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
  var xt = [{
      code: "us",
      name: "US"
    }, {
      code: "uk",
      name: "UK"
    }, {
      code: "au",
      name: "Australia"
    }, {
      code: "br",
      name: "Brasil"
    }, {
      code: "ca",
      name: "Canada"
    }, {
      code: "de",
      name: "Deutschland"
    }, {
      code: "in",
      name: "India"
    }, {
      code: "ja-jp",
      name: "Japan"
    }, {
      code: "mx",
      name: "Mexico"
    }],
    Ct = function(e) {
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.state = {
          edition: "us"
        }, n.handleSelectChange = n.handleSelectChange.bind(n), n
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), Nt(t, [{
        key: "componentDidMount",
        value: function() {
          this.setState({
            edition: A.get("country", "us")
          })
        }
      }, {
        key: "handleSelectChange",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[88789:89027]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e, t) {
          var n = this,
            o = t.edition;
          return Object(r.h)(wt.Consumer, null, (function(e) {
            return Object(r.h)("div", {
              className: ft.a.container
            }, Object(r.h)("label", {
              for: "js-header-edition-select"
            }, e.edition), Object(r.h)("select", {
              id: "js-header-edition-select",
              className: ft.a.select,
              value: o,
              onChange: n.handleSelectChange
            }, xt.map((function(e) {
              var t = e.code,
                n = e.name;
              return Object(r.h)("option", {
                "data-bfa": "@a:Main-Nav;@d:" + n + ";",
                value: t
              }, n)
            }))))
          }))
        }
      }]), t
    }(r.Component);
  var Pt = function(e) {
      var t = e.id,
        n = e.children,
        o = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["id", "children"]);
      return Object(r.h)("svg", o, n, Object(r.h)("use", {
        xlinkHref: "#" + t
      }))
    },
    Tt = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[90316:90512]", functionData => eval(functionData))},
    St = {
      id: "bfo-logo",
      width: 315.7,
      height: 53.2
    },
    Et = function(e) {
      return Object(r.h)(Pt, Tt({
        id: St.id,
        viewBox: "0 0 " + St.width + " " + St.height
      }, e))
    },
    Mt = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[90780:90976]", functionData => eval(functionData))};
  var Lt = {
      width: 48,
      height: 18,
      id: "asis-logo"
    },
    Bt = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Mt({}, Lt, {
        viewBox: "0 0 " + Lt.width + " " + Lt.height
      }, t))
    },
    It = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[91422:91618]", functionData => eval(functionData))};
  var Dt = {
      width: 92,
      height: 18,
      id: "bf-reviews-logo"
    },
    Ut = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, It({}, Dt, {
        viewBox: "0 0 " + Dt.width + " " + Dt.height
      }, t))
    },
    Ft = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[92070:92266]", functionData => eval(functionData))};
  var At = {
      width: 95,
      height: 18,
      id: "bfn-logo"
    },
    zt = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Ft({}, At, {
        viewBox: "0 0 " + At.width + " " + At.height
      }, t))
    },
    Rt = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[92711:92907]", functionData => eval(functionData))};
  var Wt = {
      width: 48,
      height: 18,
      id: "goodful-logo"
    },
    Vt = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Rt({}, Wt, {
        viewBox: "0 0 " + Wt.width + " " + Wt.height
      }, t))
    },
    Ht = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[93356:93552]", functionData => eval(functionData))};
  var qt = {
      width: 32,
      height: 18,
      id: "tasty-logo"
    },
    $t = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Ht({}, qt, {
        viewBox: "0 0 " + qt.width + " " + qt.height
      }, t))
    },
    Zt = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[93999:94195]", functionData => eval(functionData))};
  var Gt = {
      width: 48,
      height: 18,
      id: "bringme-logo"
    },
    Kt = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Zt({}, Gt, t))
    };
  var Xt = function(e) {
      var t = e.destinationName,
        n = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["destinationName"]);
      switch (t) {
        case "bfo":
          return Object(r.h)(Et, n);
        case "asis":
          return Object(r.h)(Bt, n);
        case "bfreviews":
          return Object(r.h)(Ut, n);
        case "bfn":
          return Object(r.h)(zt, n);
        case "goodful":
          return Object(r.h)(Vt, n);
        case "tasty":
          return Object(r.h)($t, n);
        case "bringme":
          return Object(r.h)(Kt, n)
      }
      return null
    },
    Yt = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[95302:95504]", functionData => eval(functionData))},
    Jt = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[95527:95734]", functionData => eval(functionData))},
    Qt = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[95774:95970]", functionData => eval(functionData))},
    en = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
  var tn = function(e) {
      function t() {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), en(t, [{
        key: "clickHandler",
        value: function(e) {
          var t = e.onClick,
            n = e.label,
            r = e.location;
          return function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[97497:97605]", functionData => eval(functionData))}
        }
      }, {
        key: "render",
        value: function(e) {
          var t = this,
            n = e.href,
            o = e.children,
            i = e.label,
            a = e.location,
            c = e.onClick,
            u = void 0 === c ? function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[97877:97879]", functionData => eval(functionData))} : c,
            s = function(e, t) {
              var n = {};
              for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n
            }(e, ["href", "children", "label", "location", "onClick"]);
          return Object(r.h)(jt.Consumer, null, (function(e) {
            var c = n.match(/^https?:/) ? n : "" + e.bf_url + n;
            return Object(r.h)("a", Qt({
              href: c,
              onClick: t.clickHandler({
                onClick: u,
                label: i,
                location: a
              })
            }, s), o)
          }))
        }
      }]), t
    }(r.Component),
    nn = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[98600:98796]", functionData => eval(functionData))},
    rn = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
  var on = function(e) {
      function t() {
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), rn(t, [{
        key: "clickHandler",
        value: function(e) {
          var t = e.onClick,
            n = e.label,
            r = e.location;
          return function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[100323:100431]", functionData => eval(functionData))}
        }
      }, {
        key: "render",
        value: function(e) {
          var t = e.onClick,
            n = e.children,
            o = e.label,
            i = e.location,
            a = function(e, t) {
              var n = {};
              for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n
            }(e, ["onClick", "children", "label", "location"]);
          return Object(r.h)("button", nn({
            onClick: this.clickHandler({
              onClick: t,
              label: o,
              location: i
            }),
            type: "button"
          }, a), n)
        }
      }]), t
    }(r.Component),
    an = n(5),
    cn = n(22),
    un = n.n(cn),
    sn = n(23),
    ln = n.n(sn),
    fn = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[101262:101458]", functionData => eval(functionData))},
    pn = {
      light: ln.a,
      purple: un.a
    },
    hn = function(e) {
      return function(t) {
        return Object(r.h)(kt.Consumer, null, (function(n) {
          return Object(r.h)(e, fn({
            theme: pn[n]
          }, t))
        }))
      }
    },
    dn = {
      bfo: {
        displayName: "BuzzFeed"
      },
      bfn: {
        displayName: "BuzzFeed News"
      },
      bfreviews: {
        displayName: "BuzzFeed Reviews"
      },
      tasty: {
        displayName: "BuzzFeed Tasty"
      },
      goodful: {
        displayName: "BuzzFeed Goodful"
      },
      asis: {
        displayName: "BuzzFeed As Is"
      },
      bringme: {
        displayName: "BuzzFeed Bring Me"
      }
    },
    vn = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[102225:102421]", functionData => eval(functionData))},
    bn = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function mn(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }

  function yn(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function gn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function On(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  var _n = void 0;
  "undefined" != typeof window && (_n = n(18));
  var wn, jn, kn = function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[103783:103858]", functionData => eval(functionData))},
    Nn = function(e) {
      return "js-destination-item-" + e + "-more"
    },
    xn = hn(function(e) {
      function t() {
        return yn(this, t), gn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return On(t, e), bn(t, [{
        key: "render",
        value: function(e) {
          var t = e.children,
            n = e.theme,
            o = mn(e, ["children", "theme"]);
          return Object(r.h)(on, vn({}, o, {
            className: st.a.menuToggle + " " + n.menuToggle,
            onClick: this.props.onClick,
            "aria-controls": "js-more-nav",
            location: "hamburger"
          }), Object(r.h)("i", null, t))
        }
      }]), t
    }(r.Component)),
    Cn = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[104635:104797]", functionData => eval(functionData))}
      return On(t, e), bn(t, [{
        key: "onKeyDown",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[104883:104945]", functionData => eval(functionData))}
      }, {
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[105017:105152]", functionData => eval(functionData))}
      }, {
        key: "componentWillUnmount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[105227:105360]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[105422:105689]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    Pn = hn((function(e) {
      var t = e.name,
        n = e.url,
        o = e.label,
        i = e.theme;
      return Object(r.h)("li", null, Object(r.h)(tn, {
        href: n,
        className: st.a.link + " " + i.link,
        label: o || t,
        location: "moreMenu"
      }, t))
    })),
    Tn = function(e) {
      var t = e.navItems,
        n = t.sections,
        o = void 0 === n ? [] : n,
        i = t.about,
        a = void 0 === i ? [] : i,
        c = t.footer,
        u = void 0 === c ? [] : c,
        s = t.destinations,
        l = void 0 === s ? [] : s,
        f = e.isUserLoggedIn,
        p = e.theme,
        h = e.edition;
      return Object(r.h)("div", null, !f && Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("div", {
          className: st.a.section + " " + st.a.communitySection + " " + p.text
        }, Object(r.h)(jt.Consumer, null, (function(t) {
          return Object(r.h)(tn, {
            href: t.community_url,
            className: st.a.link + " " + p.linkCta,
            location: "moreMenu",
            label: "login"
          }, e.log_in)
        })), " ", e.or, " ", Object(r.h)(tn, {
          href: "/signup",
          className: st.a.link + " " + p.linkCta,
          location: "moreMenu",
          label: "signup"
        }, e.sign_up), " ", e.to_post)
      })), Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("nav", {
          className: st.a.section + " " + st.a.sectionLinksSection,
          "aria-label": e.browse_sections
        }, Object(r.h)("h2", {
          className: st.a.sectionTitle + " " + p.text
        }, e.browse_sections), Object(r.h)("ul", {
          className: st.a.sectionItems
        }, o.map(Pn)))
      })), Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("nav", {
          className: st.a.section,
          "aria-label": e.about
        }, Object(r.h)("h2", {
          className: st.a.sectionTitle + " " + p.text
        }, e.about), Object(r.h)("ul", {
          className: st.a.sectionItems
        }, a.map(Pn)))
      })), Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("nav", {
          className: st.a.section + " " + st.a.otherLinksSection,
          "aria-label": e.useful_information
        }, Object(r.h)("ul", {
          className: st.a.sectionItems
        }, u.map(Pn)))
      })), Object(r.h)("div", {
        className: st.a.section + " " + st.a.footerSection
      }, Object(r.h)(Ct, {
        edition: h
      }), Object(r.h)("div", {
        className: st.a.copyright + " " + p.text
      }, "© ", (new Date).getFullYear(), " BuzzFeed, Inc")), Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("nav", {
          className: st.a.section + " " + st.a.destinationsSection,
          "aria-label": e.more_buzzfeed_brands
        }, Object(r.h)("ul", {
          className: st.a.sectionItems
        }, l.map((function(e) {
          var t = e.url,
            n = e.name,
            o = e.description,
            i = e.label;
          return Object(r.h)("li", {
            className: st.a.destinationItem
          }, Object(r.h)(tn, {
            className: st.a.destinationLink,
            href: t,
            location: "moreMenu",
            label: i || n
          }, Object(r.h)("i", {
            className: st.a[n + "Logo"]
          }, Object(r.h)(Xt, {
            destinationName: n,
            role: "img",
            "aria-labelledby": Nn(n)
          }, Object(r.h)("title", {
            id: Nn(n)
          }, dn[n].displayName))), Object(r.h)("span", null, o)))
        }))))
      })))
    },
    Sn = hn(function(e) {
      function t() {
        return yn(this, t), gn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return On(t, e), bn(t, [{
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isVisible && kn()) {
            var e = this.container.getBoundingClientRect().top;
            this.container.style.maxHeight = document.documentElement.clientHeight - e + "px"
          }
        }
      }, {
        key: "render",
        value: function(e) {
          var t = this,
            n = e.isVisible,
            o = mn(e, ["isVisible"]);
          return Object(r.h)("section", {
            className: st.a.moreNav + " " + o.theme.moreNav + " " + (n ? st.a.visible : ""),
            id: "js-more-nav",
            ref: function(e) {
              return t.container = e
            }
          }, n ? Object(r.h)(_n, {
            focusTrapOptions: {
              clickOutsideDeactivates: !0
            }
          }, Object(r.h)(Tn, o)) : Object(r.h)(Tn, o))
        }
      }]), t
    }(r.Component)),
    En = n(12),
    Mn = n.n(En),
    Ln = function(e) {
      return "js-destination-item-" + e + "-main"
    },
    Bn = function(e) {
      var t = e.destinations;
      return Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("div", {
          className: Mn.a.destinationNavContainer
        }, Object(r.h)("nav", {
          className: at.wrapper,
          "aria-label": e.more_buzzfeed_brands
        }, Object(r.h)("ul", {
          className: Mn.a.destinationNav
        }, t.map((function(e) {
          var t = e.url,
            n = e.name,
            o = e.label;
          return Object(r.h)("li", {
            className: Mn.a.destinationNavItem
          }, Object(r.h)(tn, {
            href: t,
            className: Mn.a.link,
            label: o || n,
            location: "brandBar"
          }, Object(r.h)(Xt, {
            destinationName: n,
            role: "img",
            "aria-labelledby": Ln(n)
          }, Object(r.h)("title", {
            id: Ln(n)
          }, dn[n].displayName))))
        })))))
      }))
    },
    In = n(15),
    Dn = n.n(In),
    Un = n(24),
    Fn = n.n(Un),
    An = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[111681:111877]", functionData => eval(functionData))},
    zn = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function Rn(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function Wn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function Vn(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  function Hn(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[113004:113141]", functionData => eval(functionData))}
  var qn = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[113165:113269]", functionData => eval(functionData))},
    $n = function(e) {
      function t() {
        return Rn(this, t), Wn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return Vn(t, e), zn(t, [{
        key: "shouldComponentUpdate",
        value: function() {
          return !1
        }
      }, {
        key: "render",
        value: function() {
          return Object(r.h)("div", {
            className: "js-main-nav-flyout"
          })
        }
      }]), t
    }(r.Component),
    Zn = (jn = wn = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[113807:114186]", functionData => eval(functionData))}
      return Vn(t, e), zn(t, [{
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[114279:114358]", functionData => eval(functionData))}
      }, {
        key: "getOffset",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[114422:114819]", functionData => eval(functionData))}
      }, {
        key: "onMouseEnter",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[114886:114969]", functionData => eval(functionData))}
      }, {
        key: "onMouseLeave",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[115036:115119]", functionData => eval(functionData))}
      }, {
        key: "onTouchStart",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[115187:115308]", functionData => eval(functionData))}
      }, {
        key: "toggleFlyout",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[115375:116351]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[116416:117728]", functionData => eval(functionData))}
      }]), t
    }(r.Component), wn.defaultProps = {
      enabled: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[117808:117835]", functionData => eval(functionData))}
    }, jn),
    Gn = n(6),
    Kn = n.n(Gn),
    Xn = n(9),
    Yn = n.n(Xn),
    Jn = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[117952:118148]", functionData => eval(functionData))};
  var Qn = {
      id: "caret-icon",
      width: 38,
      height: 38
    },
    er = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[118249:118566]", functionData => eval(functionData))},
    tr = Math.floor(6 * Math.random()),
    nr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[118629:119706]", functionData => eval(functionData))},
    rr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[119746:119942]", functionData => eval(functionData))};

  function or(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }

  function ir() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[120120:120206]", functionData => eval(functionData))}
  var ar = hn((function(e) {
      var t = e.theme,
        n = e.flyout,
        o = void 0 === n ? null : n,
        i = or(e, ["theme", "flyout"]);
      return o ? Object(r.h)(Zn, {
        width: 420,
        enabled: ir,
        location: "topicBar",
        label: i.label
      }, Object(r.h)(qn, null, Object(r.h)(tn, rr({
        location: "topicBar",
        className: Kn.a.link + " " + t.link
      }, i), i.emoji, " ", i.children, Object(r.h)(er, {
        className: Kn.a.downCaret,
        "aria-hidden": !0
      }))), Object(r.h)(nr, rr({
        location: i.label
      }, o))) : Object(r.h)(tn, rr({
        location: "topicBar",
        className: Kn.a.link + " " + t.link + " " + (i.mobileOnly ? Kn.a.mdHide : "")
      }, i))
    })),
    cr = hn((function(e) {
      var t = e.theme,
        n = e.topics,
        o = "news" === e.brand ? [{
          url: "/",
          name: "BuzzFeed"
        }].concat(n) : n;
      return Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("nav", {
          className: t.topicNavWrapper + " " + Kn.a.wrapper,
          "aria-label": e.trending_topics
        }, Object(r.h)("ul", {
          className: Kn.a.topicNav
        }, o.map((function(e) {
          var t = e.url,
            n = e.name,
            o = e.label,
            i = or(e, ["url", "name", "label"]);
          return Object(r.h)("li", {
            className: Kn.a.topicNavItem
          }, Object(r.h)(ar, rr({
            href: t,
            label: o || n
          }, i), n))
        }))))
      }))
    })),
    ur = n(7),
    sr = n.n(ur),
    lr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[121849:122045]", functionData => eval(functionData))};
  var fr = {
      id: "search-icon",
      width: 38,
      height: 38
    },
    pr = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, lr({
        id: fr.id,
        viewBox: "0 0 " + fr.width + " " + fr.height
      }, t))
    },
    hr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[122504:122700]", functionData => eval(functionData))},
    dr = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function vr(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function br(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function mr(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  var yr = hn((function(e) {
      var t = e.theme,
        n = e.id;
      return Object(r.h)(pr, {
        className: sr.a.searchIcon + " " + t.searchIcon,
        role: "img",
        "aria-labelledby": n
      }, Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("title", {
          id: n
        }, e.search)
      })))
    })),
    gr = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[124206:124318]", functionData => eval(functionData))}
      return mr(t, e), dr(t, [{
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[124411:124451]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[124513:125297]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    Or = function(e) {
      function t() {
        vr(this, t);
        var e = br(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.state = {
          inputVisible: !1
        }, e.onClick = e.onClick.bind(e), e
      }
      return mr(t, e), dr(t, [{
        key: "onClick",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[125665:125806]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function() {
          var e = this;
          return Object(r.h)("div", {
            className: sr.a.search
          }, this.state.inputVisible && Object(r.h)(gr, {
            id: "js-header-search"
          }), Object(r.h)("div", null, Object(r.h)(tn, {
            className: "" + sr.a.searchLink,
            href: "/search",
            location: "search"
          }, Object(r.h)(yr, {
            id: "js-search-button-mobile"
          })), Object(r.h)(wt.Consumer, null, (function(t) {
            return Object(r.h)(on, {
              className: "" + sr.a.searchButton,
              "aria-label": t.a11y_search,
              onClick: e.onClick,
              location: "search",
              "aria-controls": "js-header-search",
              "aria-expanded": String(e.state.inputVisible)
            }, Object(r.h)(yr, {
              id: "js-search-button-desktop"
            }))
          }))))
        }
      }]), t
    }(r.Component),
    _r = n(2),
    wr = n.n(_r),
    jr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[126887:127083]", functionData => eval(functionData))};

  function kr(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[127106:127243]", functionData => eval(functionData))}
  var Nr = {
      width: 1217,
      height: 150,
      id: "bfn-brand-logo"
    },
    xr = {
      width: 495,
      height: 116,
      id: "bfn-tagline"
    },
    Cr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[127429:127580]", functionData => eval(functionData))},
    Pr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[127603:127754]", functionData => eval(functionData))},
    Tr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[127794:127990]", functionData => eval(functionData))};
  var Sr = {
      width: 210,
      height: 50,
      id: "asis-brand-logo"
    },
    Er = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[128097:128403]", functionData => eval(functionData))},
    Mr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[128443:128639]", functionData => eval(functionData))};
  var Lr = {
      width: 1748,
      height: 888,
      id: "bringme-brand-logo"
    },
    Br = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[128751:129072]", functionData => eval(functionData))},
    Ir = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[129112:129308]", functionData => eval(functionData))};
  var Dr = {
      width: 372.55,
      height: 131.34,
      id: "goodful-brand-logo"
    },
    Ur = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[129425:129731]", functionData => eval(functionData))},
    Fr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[129771:129967]", functionData => eval(functionData))};
  var Ar = {
      width: 805,
      height: 334,
      id: "nifty-brand-logo"
    },
    zr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[130076:130393]", functionData => eval(functionData))},
    Rr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[130433:130629]", functionData => eval(functionData))};
  var Wr = {
      width: 784,
      height: 290.91,
      id: "playfull-brand-logo"
    },
    Vr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[130744:131061]", functionData => eval(functionData))};
  var Hr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[131086:131673]", functionData => eval(functionData))},
    qr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[131713:131909]", functionData => eval(functionData))};
  var $r = "js-bfo-logo-title",
    Zr = "js-bfn-logo-title",
    Gr = "js-microbrand-logo-title",
    Kr = hn((function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[132035:133104]", functionData => eval(functionData))})),
    Xr = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[133129:133512]", functionData => eval(functionData))},
    Yr = hn((function(e) {
      var t = e.brand,
        n = e.theme,
        o = e.edition,
        i = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["brand", "theme", "edition"]);
      return "news" === t ? Object(r.h)(jt.Consumer, null, (function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[133904:134216]", functionData => eval(functionData))})) : "bfo" === t ? Object(r.h)(jt.Consumer, null, (function(e) {
        var o = e.brand_urls;
        return Object(r.h)(tn, {
          href: o[t],
          className: wr.a.logoContainer,
          label: "buzzfeed",
          location: "logo"
        }, Object(r.h)(Et, qr({
          className: wr.a[t] + " " + n.bfoLogo,
          role: "img",
          "aria-labelledby": $r
        }, i), Object(r.h)("title", {
          id: $r
        }, "Homepage")))
      })) : Object(r.h)(Kr, {
        brand: t
      })
    })),
    Jr = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[134781:134977]", functionData => eval(functionData))};
  var Qr = {
      id: "hamburger",
      width: 16,
      height: 12
    },
    eo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Jr({
        id: Qr.id,
        viewBox: "0 0 " + Qr.width + " " + Qr.height
      }, t))
    },
    to = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[135434:135630]", functionData => eval(functionData))};
  var no = {
      id: "close-icon",
      width: 38,
      height: 38
    },
    ro = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[135731:136048]", functionData => eval(functionData))},
    oo = n(13),
    io = n.n(oo),
    ao = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[136122:136318]", functionData => eval(functionData))};
  var co = {
      width: 1024,
      height: 1024,
      id: "cute-badge"
    },
    uo = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[136423:136740]", functionData => eval(functionData))},
    so = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[136780:136976]", functionData => eval(functionData))};
  var lo = {
      width: 1024,
      height: 1024,
      id: "lol-badge"
    },
    fo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, so({
        id: lo.id,
        viewBox: "0 0 " + lo.width + " " + lo.height
      }, t))
    },
    po = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[137437:137633]", functionData => eval(functionData))};
  var ho = {
      width: 512,
      height: 512,
      id: "trending-badge"
    },
    vo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, po({
        id: ho.id,
        viewBox: "0 0 " + ho.width + " " + ho.height
      }, t))
    },
    bo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[138097:138293]", functionData => eval(functionData))};
  var mo = {
      width: 1024,
      height: 1024,
      id: "omg-badge"
    },
    yo = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[138397:138714]", functionData => eval(functionData))},
    go = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[138754:138950]", functionData => eval(functionData))};
  var Oo = {
      width: 200,
      height: 200,
      id: "wtf-badge"
    },
    _o = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[139052:139369]", functionData => eval(functionData))},
    wo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[139409:139605]", functionData => eval(functionData))};
  var jo = {
      width: 1024,
      height: 1024,
      id: "meudeus-badge"
    },
    ko = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[139713:140030]", functionData => eval(functionData))},
    No = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[140070:140266]", functionData => eval(functionData))};
  var xo = {
      width: 1024,
      height: 1024,
      id: "hahaha-badge"
    },
    Co = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[140373:140690]", functionData => eval(functionData))},
    Po = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[140730:140926]", functionData => eval(functionData))};
  var To = {
      width: 1024,
      height: 1024,
      id: "fofo-badge"
    },
    So = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[141031:141348]", functionData => eval(functionData))},
    Eo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[141388:141584]", functionData => eval(functionData))};
  var Mo = {
      width: 1024,
      height: 1024,
      id: "jajaja-badge"
    },
    Lo = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[141691:142008]", functionData => eval(functionData))},
    Bo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[142048:142244]", functionData => eval(functionData))};
  var Io = {
      width: 200,
      height: 200,
      id: "kawaii-badge"
    },
    Do = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[142349:142666]", functionData => eval(functionData))},
    Uo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[142706:142902]", functionData => eval(functionData))};
  var Fo = {
      width: 512,
      height: 512,
      id: "madremia-badge"
    },
    Ao = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[143009:143326]", functionData => eval(functionData))},
    zo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[143366:143562]", functionData => eval(functionData))};
  var Ro = {
      width: 1024,
      height: 1024,
      id: "lindo-badge"
    },
    Wo = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[143668:143985]", functionData => eval(functionData))},
    Vo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[144025:144221]", functionData => eval(functionData))};
  var Ho = {
      width: 512,
      height: 512,
      id: "oooh-badge"
    },
    qo = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[144324:144641]", functionData => eval(functionData))},
    $o = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[144681:144877]", functionData => eval(functionData))};
  var Zo = {
      width: 200,
      height: 200,
      id: "win-badge"
    },
    Go = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, $o({
        id: Zo.id,
        viewBox: "0 0 " + Zo.width + " " + Zo.height
      }, t))
    };
  var Ko = function(e) {
      var t = e.badgeName,
        n = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["badgeName"]);
      switch (t) {
        case "cute":
          return Object(r.h)(uo, n);
        case "lol":
          return Object(r.h)(fo, n);
        case "omg":
          return Object(r.h)(yo, n);
        case "wtf":
          return Object(r.h)(_o, n);
        case "trending":
          return Object(r.h)(vo, n);
        case "meudeus":
          return Object(r.h)(ko, n);
        case "hahaha":
          return Object(r.h)(Co, n);
        case "fofo":
          return Object(r.h)(So, n);
        case "jajaja":
          return Object(r.h)(Lo, n);
        case "kawaii":
          return Object(r.h)(Do, n);
        case "madremia":
          return Object(r.h)(Ao, n);
        case "lindo":
          return Object(r.h)(Wo, n);
        case "oooh":
          return Object(r.h)(qo, n);
        case "win":
          return Object(r.h)(Go, n)
      }
      return null
    },
    Xo = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[146473:146669]", functionData => eval(functionData))},
    Yo = {
      trending: {
        className: io.a.trendingBadge
      }
    },
    Jo = function(e) {
      return "js-badge-feed-title-" + e
    },
    Qo = function(e) {
      var t = e.name,
        n = e.label,
        o = e.url,
        i = e.zIndex;
      return Object(r.h)("li", {
        className: io.a.badgeBarItem,
        style: {
          "z-index": i
        }
      }, Object(r.h)(tn, {
        href: o,
        label: n || t,
        location: "badgeBar"
      }, Object(r.h)(Ko, Xo({
        badgeName: t,
        role: "img",
        "aria-labelledby": Jo(t)
      }, Yo[t]), Object(r.h)("title", {
        id: Jo(t)
      }, t, " Badge Feed"))))
    },
    ei = function(e) {
      var t = e.badges,
        n = e.withOffset,
        o = void 0 !== n && n;
      return Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("ul", {
          className: io.a.badgeBar + " " + (o ? io.a.badgeBarWithOffset : ""),
          "aria-label": e.buzzfeed_badges
        }, t.map((function(e, t, n) {
          return Object(r.h)(Qo, Xo({
            zIndex: n.length - t
          }, e))
        })))
      }))
    },
    ti = n(4),
    ni = n.n(ti),
    ri = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[147894:148090]", functionData => eval(functionData))};
  var oi = {
      id: "settings-icon",
      width: 512,
      height: 512
    },
    ii = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[148196:148613]", functionData => eval(functionData))},
    ai = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[148653:148849]", functionData => eval(functionData))};
  var ci = {
      id: "default-user-icon",
      width: 512,
      height: 512
    },
    ui = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[148959:149276]", functionData => eval(functionData))},
    si = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    li = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[149691:149887]", functionData => eval(functionData))};
  var fi = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[149912:150475]", functionData => eval(functionData))},
    pi = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[150498:152550]", functionData => eval(functionData))},
    hi = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[152594:153047]", functionData => eval(functionData))}
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), si(t, [{
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[153581:154096]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    di = n(3),
    vi = n.n(di),
    bi = n(10),
    mi = n.n(bi),
    yi = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function gi(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[154593:154682]", functionData => eval(functionData))}

  function Oi(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[154704:154880]", functionData => eval(functionData))}

  function _i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  var wi = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[155345:155457]", functionData => eval(functionData))}
      return _i(t, e), yi(t, [{
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[155540:155681]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    ji = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[155757:155869]", functionData => eval(functionData))}
      return _i(t, e), yi(t, [{
        key: "timeAgo",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[155953:156493]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[156555:156823]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    ki = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[156899:157011]", functionData => eval(functionData))}
      return _i(t, e), yi(t, [{
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[157094:158015]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    Ni = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    xi = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[158462:158658]", functionData => eval(functionData))};

  function Ci(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[158681:158770]", functionData => eval(functionData))}

  function Pi(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[158792:158968]", functionData => eval(functionData))}

  function Ti(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  function Si(e, t) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[159410:159547]", functionData => eval(functionData))}
  var Ei = void 0;
  "undefined" != typeof window && (Ei = n(18));
  var Mi = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[159638:160252]", functionData => eval(functionData))},
    Li = function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[160275:162658]", functionData => eval(functionData))},
    Bi = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[162702:162814]", functionData => eval(functionData))}
      return Ti(t, e), Ni(t, [{
        key: "componentDidUpdate",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[162908:163185]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[163247:163872]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    Ii = hn(function(e) {
      function t(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[163952:164172]", functionData => eval(functionData))}
      return Ti(t, e), Ni(t, [{
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[164265:164496]", functionData => eval(functionData))}
      }, {
        key: "fetchNotifications",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[164570:164849]", functionData => eval(functionData))}
      }, {
        key: "updateNotificationsState",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[164929:165244]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[165306:166110]", functionData => eval(functionData))}
      }]), t
    }(r.Component)),
    Di = n(16),
    Ui = n.n(Di),
    Fi = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[166217:166413]", functionData => eval(functionData))},
    Ai = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function zi(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function Ri(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function Wi(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  var Vi = function(e) {
      function t(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[167564:167741]", functionData => eval(functionData))}
      return Wi(t, e), Ai(t, [{
        key: "componentDidMount",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[167834:167984]", functionData => eval(functionData))}
      }, {
        key: "render",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[168045:168195]", functionData => eval(functionData))}
      }]), t
    }(r.Component),
    Hi = hn(function(e) {
      function t() {
        return zi(this, t), Ri(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return Wi(t, e), Ai(t, [{
        key: "render",
        value: function(e) {
          var t = e.navItems,
            n = e.brand,
            o = e.edition,
            i = e.theme,
            a = e.userInfo,
            c = e.showBadges,
            u = e.showMoreNav,
            s = e.showNotifMenu,
            l = e.isSticking,
            f = e.onNavToggleClicked,
            p = e.onUserMenuClicked,
            h = e.onLogoutClicked,
            d = e.bfURL,
            v = function(e, t) {
              var n = {};
              for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n
            }(e, ["navItems", "brand", "edition", "theme", "userInfo", "showBadges", "showMoreNav", "showNotifMenu", "isSticking", "onNavToggleClicked", "onUserMenuClicked", "onLogoutClicked", "bfURL"]),
            b = t.topics,
            m = void 0 === b ? [] : b,
            y = t.badges,
            g = void 0 === y ? [] : y,
            O = t.destinations,
            _ = void 0 === O ? [] : O;
          return Object(r.h)("div", {
            className: Ui.a.mainNavContainer + " " + i.mainNavContainer + " " + (l ? Ui.a.stickyMainNav : "")
          }, Object(r.h)("div", {
            className: at.wrapper
          }, Object(r.h)(wt.Consumer, null, (function(e) {
            return Object(r.h)("div", {
              className: Ui.a.mainNav
            }, Object(r.h)(xn, {
              onClick: f,
              "aria-expanded": String(u),
              "aria-label": e.hamburger
            }, u ? Object(r.h)(ro, {
              width: 22,
              height: 22,
              "aria-hidden": !0
            }) : Object(r.h)(eo, {
              width: 16,
              height: 12,
              "aria-hidden": !0
            })), Object(r.h)(Yr, {
              brand: n,
              edition: o
            }), Object(r.h)(cr, {
              topics: m,
              brand: n
            }), Object(r.h)(Or, null), a && Object(r.h)(Vi, {
              notifUserMenu: Object(r.h)(Ii, Fi({
                isVisible: s,
                userInfo: a,
                onUserMenuClicked: p,
                onLogoutClicked: h,
                bfURL: d
              }, v)),
              userMenu: Object(r.h)(hi, {
                userInfo: a,
                onLogoutClicked: h
              })
            }), c && Object(r.h)(ei, {
              badges: g,
              withOffset: !l && _.length > 0
            }))
          })), Object(r.h)(Sn, Fi({
            navItems: t,
            isVisible: u,
            isUserLoggedIn: !!a
          }, v))), Object(r.h)($n, null))
        }
      }]), t
    }(r.Component)),
    qi = n(25),
    $i = n.n(qi),
    Zi = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
  var Gi = function(e) {
      function t() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.impressionTracked = !1, e
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), Zi(t, [{
        key: "clickHandler",
        value: function() {
          return function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[172606:172685]", functionData => eval(functionData))}
        }
      }, {
        key: "focusHandler",
        value: function() {
          var e = this;
          return function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[172816:172944]", functionData => eval(functionData))}
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return Object(r.h)(wt.Consumer, null, (function(t) {
            return Object(r.h)("a", {
              href: "#buzz-content",
              className: $i.a.skipNav,
              onClick: e.clickHandler(),
              onFocus: e.focusHandler()
            }, t.skip_to_content)
          }))
        }
      }]), t
    }(r.Component),
    Ki = Object.assign || function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[173428:173624]", functionData => eval(functionData))},
    Xi = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();

  function Yi() {
    if (!it.isLoggedIn()) return null;
    var e = it.getUserInfo();
    return {
      id: e.userid,
      displayName: e.display_name,
      image: e.image,
      username: e.username,
      isCommunityUser: !it.userCan("general_admin") && !it.userCan("freelance_contributors")
    }
  }
  var Ji = function(e) {
    function t() {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      var e = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return e.state = {
        showMoreNav: !1,
        showNotifMenu: !1,
        isSticking: !1,
        userInfo: null
      }, e.toggleMoreNav = e.toggleMoreNav.bind(e), e.toggleNotifMenu = e.toggleNotifMenu.bind(e), e.onLogout = e.onLogout.bind(e), e.onScroll = D(e.onScroll.bind(e), 50), e
    }
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, e), Xi(t, [{
      key: "overlayTopOffset",
      value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[175584:175755]", functionData => eval(functionData))}
    }, {
      key: "toggleMoreNav",
      value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[175818:175997]", functionData => eval(functionData))}
    }, {
      key: "toggleNotifMenu",
      value: function(e) {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[176062:176245]", functionData => eval(functionData))}
    }, {
      key: "onLogout",
      value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[176302:176405]", functionData => eval(functionData))}
    }, {
      key: "onScroll",
      value: function() {
        var e = this.stickyContainer.getBoundingClientRect().top <= 0;
        this.state.isSticking !== e && this.setState(Ki({}, this.state, {
          isSticking: e
        }))
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.setState(Ki({}, this.state, {
          userInfo: Yi()
        })), window.innerWidth >= parseInt(an.breakpointSticky, 10) && window.innerHeight > 3 * this.stickyContainer.clientHeight && (window.addEventListener("scroll", this.onScroll), this.stickyContainer.style.height = this.stickyContainer.clientHeight + "px", this.onScroll())
      }
    }, {
      key: "componentWillUnmount",
      value: function() {lacuna_lazy_load("lacuna_cache/imported_uaavb9.js[177143:177212]", functionData => eval(functionData))}
    }, {
      key: "render",
      value: function(e, t) {
        var n = this,
          o = e.navItems,
          i = e.config,
          a = e.i18n,
          c = e.theme,
          u = function(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
          }(e, ["navItems", "config", "i18n", "theme"]),
          s = o.destinations,
          l = void 0 === s ? [] : s;
        return Object(r.h)(wt.Provider, {
          value: a
        }, Object(r.h)(jt.Provider, {
          value: i
        }, Object(r.h)(kt.Provider, {
          value: c
        }, Object(r.h)("header", {
          className: ct.a.header
        }, Object(r.h)(Gi, null), Object(r.h)(Bn, {
          destinations: l
        }), Object(r.h)("div", {
          className: "js-sticky-container",
          ref: function(e) {
            return n.stickyContainer = e
          }
        }, Object(r.h)(Hi, Ki({
          navItems: o,
          userInfo: t.userInfo,
          showMoreNav: t.showMoreNav,
          showNotifMenu: t.showNotifMenu,
          isSticking: t.isSticking,
          onNavToggleClicked: this.toggleMoreNav,
          onUserMenuClicked: this.toggleNotifMenu,
          onLogoutClicked: this.onLogout,
          bfURL: i.bf_url
        }, u))), t.showMoreNav && Object(r.h)(Cn, {
          top: this.overlayTopOffset(),
          onHide: this.toggleMoreNav
        }), t.showNotifMenu && Object(r.h)(Cn, {
          top: this.overlayTopOffset(),
          onHide: this.toggleNotifMenu
        })))))
      }
    }]), t
  }(r.Component);
  var Qi = document.querySelector("#js-header-container");
  Object(r.render)(Object(r.h)(Ji, window.BZFD.__HEADER_STATE__), Qi, Qi.firstElementChild), delete window.BZFD.__HEADER_STATE__
}]);
//# sourceMappingURL=app.b3fdb04fc82f908bcc29.js.map