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
  }, n.t = null, n.n = function(e) {
    var t = e && e.__esModule ? null : function() {
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
  })), n.d(t, "createElement", (null)), n.d(t, "cloneElement", (null)), n.d(t, "Component", (function() {
    return D
  })), n.d(t, "render", (function() {
    return U
  })), n.d(t, "rerender", (null)), n.d(t, "options", (function() {
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
    forceUpdate: null,
    render: null
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
    var n = null;

    
    var o = {
      register: null,
      unregister: null,
      val: null
    };

    

    
    var c = 1073741823,
      u = null,
      s = 0;

    
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
        value: null
      }, {
        key: "componentDidUpdate",
        value: null
      }, {
        key: "componentWillUnmount",
        value: null
      }, {
        key: "render",
        value: null
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
  n.r(t), n.d(t, "version", (null)), n.d(t, "DOM", (null)), n.d(t, "Children", (null)), n.d(t, "render", (null)), n.d(t, "hydrate", (null)), n.d(t, "createClass", (null)), n.d(t, "createPortal", (null)), n.d(t, "createFactory", (null)), n.d(t, "createElement", (null)), n.d(t, "cloneElement", (null)), n.d(t, "isValidElement", (null)), n.d(t, "findDOMNode", (null)), n.d(t, "unmountComponentAtNode", (null)), n.d(t, "Component", (function() {
    return G
  })), n.d(t, "PureComponent", (null)), n.d(t, "unstable_renderSubtreeIntoContainer", (null)), n.d(t, "unstable_batchedUpdates", (null)), n.d(t, "__spread", (null));
  var r = n(11),
    o = n.n(r);
  n.d(t, "PropTypes", (null));
  var i = n(0);
  n.d(t, "createRef", (null));
  var a = n(14);
  n.d(t, "createContext", (null));
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

  
  var b = Object(i.h)("a", null).constructor;
  b.prototype.$$typeof = s, b.prototype.preactCompatUpgraded = !1, b.prototype.preactCompatNormalized = !1, Object.defineProperty(b.prototype, "type", {
    get: null,
    set: null,
    configurable: !0
  }), Object.defineProperty(b.prototype, "props", {
    get: null,
    set: null,
    configurable: !0
  });
  var m = i.options.event;
  i.options.event = null;
  var y = i.options.vnode;

  
  i.options.vnode = function(e) {
    if (!e.preactCompatUpgraded) {
      e.preactCompatUpgraded = !0;
      var t = e.nodeName,
        n = e.attributes = null == e.attributes ? {} : U({}, e.attributes);
      "function" == typeof t ? (!0 === t[l] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || L(e), null(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), function(e, t) {
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
  var O = null;

  

  

  

  
  O.prototype.getChildContext = null, O.prototype.render = null;
  var N, x = [],
    C = {
      map: null,
      forEach: null,
      count: null,
      only: null,
      toArray: null
    };

  function P(e) {
    return M.bind(null, e)
  }
  for (var T = {}, S = u.length; S--;) T[u[S]] = P(u[S]);

  

  

  

  

  
  var D = {
    configurable: !0,
    get: null,
    set: null
  };

  function U(e, t) {
    for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++)
      if (o = n[r])
        for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i]);
    return e
  }

  

  

  function z() {}

  

  

  

  

  

  

  

  

  

  
  U(G.prototype = new i.Component, {
    constructor: G,
    isReactComponent: {},
    replaceState: null,
    getDOMNode: null,
    isMounted: null
  }), z.prototype = G.prototype, K.prototype = new z, K.prototype.isPureReactComponent = !0, K.prototype.shouldComponentUpdate = null;
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
  e.exports = null;
  var o = 0;

  
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
      

      
      "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = null), t.prototype.next = null, t.prototype.throw = null, t.prototype.return = null
    }();
    var t = null,
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
      r = null,
      o = function(o) {
        
        return n(a, o), a.prototype.componentDidUpdate = null, a.prototype.componentDidMount = null, a.prototype.componentWillUnmount = null, a.prototype.findNode = null, a.prototype.renderLayer = null, a.prototype.render = null, a
      }(e.Component),
      i = function(e) {
        
        return n(o, e), o.prototype.getChildContext = null, o.prototype.render = null, o
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
    }(t = e.exports = n(30)).log = null, t.formatArgs = null, t.save = function(e) {
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
    }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = null, t.enable(o())
  }).call(this, n(29))
}, function(e, t) {
  var n, r, o = e.exports = {};

  

  

  ! function() {
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

  

  

  

  
  o.nextTick = null, d.prototype.run = null, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = null, o.binding = null, o.cwd = null, o.chdir = null, o.umask = null
}, function(e, t, n) {
  var r;

  function o(e) {
    
    return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }(e), "function" == typeof t.init && t.init(n), n
  }(t = e.exports = o.debug = o.default = o).coerce = null, t.disable = null, t.enable = function(e) {
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

  
  e.exports = null
}, function(e, t, n) {
  "use strict";
  var r = n(33);

  

  
  i.resetWarningCache = o, e.exports = function() {
    

    
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
      activateTrap: null,
      deactivateTrap: null
    });

  
  e.exports = null
}, function(e, t) {
  var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
    r = n.join(","),
    o = "undefined" == typeof Element ? null : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  

  

  
  i.isTabbable = null, i.isFocusable = null;
  var u = n.concat("iframe").join(",");

  

  

  

  
  p.prototype.hasDisplayNone = null, p.prototype.isUntouchable = null, e.exports = i
}, function(e, t) {
  e.exports = null;
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
  var d = null,
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
  var _ = null,
    w = "[object Symbol]";
  var j = null,
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
        s = setTimeout(m, null(e))
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
      return t = S(t) || 0, o(n) && (p = !!n.leading, a = (h = "maxWait" in n) ? M(S(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), g.cancel = null, g.flush = null, g
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

  

  
  var A = {
      getBuzzfeedSubdomainOrWildcard: null,
      get: function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
          for (var i = r[o];
            " " === i.charAt(0);) i = i.substring(1, i.length);
          if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
        }
        return t
      },
      set: null,
      remove: null
    },
    z = "function" == typeof fetch ? fetch : null;
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
  var se = null,
    le = "__lodash_hash_undefined__",
    fe = Object.prototype.hasOwnProperty;
  var pe = null,
    he = Object.prototype.hasOwnProperty;
  var de = null,
    ve = "__lodash_hash_undefined__";
  var be = null;

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
  var ge = null;
  var Oe = null;
  var _e = null,
    we = Array.prototype.splice;
  var je = null;
  var ke = null;
  var Ne = null;
  var xe = null;

  
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
  var Ee = null;
  var Me = null;
  var Le = null;
  var Be = null;
  var Ie = null;
  var De = null;

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
    var n = null;
    return n.cache = new(ze.Cache || Fe), n
  }
  ze.Cache = Fe;
  var Re = ze,
    We = 500;
  var Ve = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    He = /\\(\\)?/g;
  ! function(e) {
    var t = Re(e, (null)),
      n = t.cache
  }((null));
  var qe = s ? s.prototype : void 0;
  qe && qe.toString;
  var $e = "track/website/instrumentation";
  var Ze = ["samplingRate"];
  n(21);

  

  

  

  

  

  

  
  var tt = null,
    nt = null,
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
      signout: null,
      getUserInfo: null,
      isAdmin: null,
      userCan: null
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
        instanceof Array && null || null)(e, t)
    };

  function ht(e, t) {
    function n() {
      this.constructor = e
    }
    pt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var dt = {
    register: null,
    unregister: null,
    val: null
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
              unregister: null,
              val: function(e) {
                if (void 0 === e || e == r) return r;
                var t = o(e);
                return r = e, n.forEach((null)), r
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
        }, r.prototype.componentWillUnmount = null, r.prototype.componentDidUpdate = function(e, t, r) {
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
        value: null
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
    Tt = Object.assign || null,
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
    Mt = Object.assign || null;
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
    It = Object.assign || null;
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
    Ft = Object.assign || null;
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
    Rt = Object.assign || null;
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
    Ht = Object.assign || null;
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
    Zt = Object.assign || null;
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
    Yt = null,
    Jt = null,
    Qt = Object.assign || null,
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
          return null
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
            u = void 0 === c ? null : c,
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
    nn = Object.assign || null,
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
          return null
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
    fn = Object.assign || null,
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
    vn = Object.assign || null,
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
  var wn, jn, kn = null,
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
      
      return On(t, e), bn(t, [{
        key: "onKeyDown",
        value: null
      }, {
        key: "componentDidMount",
        value: null
      }, {
        key: "componentWillUnmount",
        value: null
      }, {
        key: "render",
        value: null
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
    An = Object.assign || null,
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

  
  var qn = null,
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
      
      return Vn(t, e), zn(t, [{
        key: "componentDidMount",
        value: null
      }, {
        key: "getOffset",
        value: null
      }, {
        key: "onMouseEnter",
        value: null
      }, {
        key: "onMouseLeave",
        value: null
      }, {
        key: "onTouchStart",
        value: null
      }, {
        key: "toggleFlyout",
        value: null
      }, {
        key: "render",
        value: null
      }]), t
    }(r.Component), wn.defaultProps = {
      enabled: null
    }, jn),
    Gn = n(6),
    Kn = n.n(Gn),
    Xn = n(9),
    Yn = n.n(Xn),
    Jn = Object.assign || null;
  var Qn = {
      id: "caret-icon",
      width: 38,
      height: 38
    },
    er = null,
    tr = Math.floor(6 * Math.random()),
    nr = null,
    rr = Object.assign || null;

  function or(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }

  
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
    lr = Object.assign || null;
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
    hr = Object.assign || null,
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
      
      return mr(t, e), dr(t, [{
        key: "componentDidMount",
        value: null
      }, {
        key: "render",
        value: null
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
        value: null
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
    jr = Object.assign || null;

  
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
    Cr = null,
    Pr = null,
    Tr = Object.assign || null;
  var Sr = {
      width: 210,
      height: 50,
      id: "asis-brand-logo"
    },
    Er = null,
    Mr = Object.assign || null;
  var Lr = {
      width: 1748,
      height: 888,
      id: "bringme-brand-logo"
    },
    Br = null,
    Ir = Object.assign || null;
  var Dr = {
      width: 372.55,
      height: 131.34,
      id: "goodful-brand-logo"
    },
    Ur = null,
    Fr = Object.assign || null;
  var Ar = {
      width: 805,
      height: 334,
      id: "nifty-brand-logo"
    },
    zr = null,
    Rr = Object.assign || null;
  var Wr = {
      width: 784,
      height: 290.91,
      id: "playfull-brand-logo"
    },
    Vr = null;
  var Hr = null,
    qr = Object.assign || null;
  var $r = "js-bfo-logo-title",
    Zr = "js-bfn-logo-title",
    Gr = "js-microbrand-logo-title",
    Kr = hn((null)),
    Xr = null,
    Yr = hn((function(e) {
      var t = e.brand,
        n = e.theme,
        o = e.edition,
        i = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["brand", "theme", "edition"]);
      return "news" === t ? Object(r.h)(jt.Consumer, null, (null)) : "bfo" === t ? Object(r.h)(jt.Consumer, null, (function(e) {
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
    Jr = Object.assign || null;
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
    to = Object.assign || null;
  var no = {
      id: "close-icon",
      width: 38,
      height: 38
    },
    ro = null,
    oo = n(13),
    io = n.n(oo),
    ao = Object.assign || null;
  var co = {
      width: 1024,
      height: 1024,
      id: "cute-badge"
    },
    uo = null,
    so = Object.assign || null;
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
    po = Object.assign || null;
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
    bo = Object.assign || null;
  var mo = {
      width: 1024,
      height: 1024,
      id: "omg-badge"
    },
    yo = null,
    go = Object.assign || null;
  var Oo = {
      width: 200,
      height: 200,
      id: "wtf-badge"
    },
    _o = null,
    wo = Object.assign || null;
  var jo = {
      width: 1024,
      height: 1024,
      id: "meudeus-badge"
    },
    ko = null,
    No = Object.assign || null;
  var xo = {
      width: 1024,
      height: 1024,
      id: "hahaha-badge"
    },
    Co = null,
    Po = Object.assign || null;
  var To = {
      width: 1024,
      height: 1024,
      id: "fofo-badge"
    },
    So = null,
    Eo = Object.assign || null;
  var Mo = {
      width: 1024,
      height: 1024,
      id: "jajaja-badge"
    },
    Lo = null,
    Bo = Object.assign || null;
  var Io = {
      width: 200,
      height: 200,
      id: "kawaii-badge"
    },
    Do = null,
    Uo = Object.assign || null;
  var Fo = {
      width: 512,
      height: 512,
      id: "madremia-badge"
    },
    Ao = null,
    zo = Object.assign || null;
  var Ro = {
      width: 1024,
      height: 1024,
      id: "lindo-badge"
    },
    Wo = null,
    Vo = Object.assign || null;
  var Ho = {
      width: 512,
      height: 512,
      id: "oooh-badge"
    },
    qo = null,
    $o = Object.assign || null;
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
    Xo = Object.assign || null,
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
    ri = Object.assign || null;
  var oi = {
      id: "settings-icon",
      width: 512,
      height: 512
    },
    ii = null,
    ai = Object.assign || null;
  var ci = {
      id: "default-user-icon",
      width: 512,
      height: 512
    },
    ui = null,
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
    li = Object.assign || null;
  var fi = null,
    pi = null,
    hi = function(e) {
      
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
        value: null
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
      
      return _i(t, e), yi(t, [{
        key: "render",
        value: null
      }]), t
    }(r.Component),
    ji = function(e) {
      
      return _i(t, e), yi(t, [{
        key: "timeAgo",
        value: null
      }, {
        key: "render",
        value: null
      }]), t
    }(r.Component),
    ki = function(e) {
      
      return _i(t, e), yi(t, [{
        key: "render",
        value: null
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
    xi = Object.assign || null;

  

  

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

  
  var Ei = void 0;
  "undefined" != typeof window && (Ei = n(18));
  var Mi = null,
    Li = null,
    Bi = function(e) {
      
      return Ti(t, e), Ni(t, [{
        key: "componentDidUpdate",
        value: null
      }, {
        key: "render",
        value: null
      }]), t
    }(r.Component),
    Ii = hn(function(e) {
      
      return Ti(t, e), Ni(t, [{
        key: "componentDidMount",
        value: null
      }, {
        key: "fetchNotifications",
        value: null
      }, {
        key: "updateNotificationsState",
        value: null
      }, {
        key: "render",
        value: null
      }]), t
    }(r.Component)),
    Di = n(16),
    Ui = n.n(Di),
    Fi = Object.assign || null,
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
      
      return Wi(t, e), Ai(t, [{
        key: "componentDidMount",
        value: null
      }, {
        key: "render",
        value: null
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
          return null
        }
      }, {
        key: "focusHandler",
        value: function() {
          var e = this;
          return null
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
    Ki = Object.assign || null,
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
      value: null
    }, {
      key: "toggleMoreNav",
      value: null
    }, {
      key: "toggleNotifMenu",
      value: null
    }, {
      key: "onLogout",
      value: null
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
      value: null
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