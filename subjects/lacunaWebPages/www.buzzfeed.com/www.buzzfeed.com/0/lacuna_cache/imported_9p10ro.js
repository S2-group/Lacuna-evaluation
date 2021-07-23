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
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(r, o, function(t) {
        return e[t]
      }.bind(null, o));
    return r
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
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
  })), n.d(t, "createElement", (function() {
    return c
  })), n.d(t, "cloneElement", (function() {
    return l
  })), n.d(t, "Component", (function() {
    return D
  })), n.d(t, "render", (function() {
    return U
  })), n.d(t, "rerender", (function() {
    return d
  })), n.d(t, "options", (function() {
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

  function l(e, t) {
    return c(e.nodeName, u(u({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
  }
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

  function O(e) {
    return this._listeners[e.type](o.event && o.event(e) || e)
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

  function I(e) {
    o.beforeUnmount && o.beforeUnmount(e);
    var t = e.base;
    e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
    var n = e._component;
    n ? I(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, y(t), S.push(e), T(t)), e.__ref && e.__ref(null)
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
    forceUpdate: function(e) {
      e && this._renderCallbacks.push(e), B(this, 2)
    },
    render: function() {}
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
    var n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    };

    function r(e, t) {
      function r() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var o = {
      register: function(e) {
        console.warn("Consumer used without a Provider")
      },
      unregister: function(e) {},
      val: function(e) {}
    };

    function i(e) {
      var t = e.children;
      return {
        child: 1 === t.length ? t[0] : null,
        children: t
      }
    }

    function a(e) {
      return i(e).child || "render" in e && e.render
    }
    var c = 1073741823,
      u = function() {
        return c
      },
      s = 0;

    function l(e, n) {
      var l = "_preactContextProvider-" + s++;
      return {
        Provider: function(e) {
          function o(t) {
            var r = e.call(this, t) || this;
            return r.t = function(e, t) {
              var n = [],
                r = e,
                o = function(e) {
                  return 0 | t(r, e)
                };
              return {
                register: function(e) {
                  n.push(e), e(r, o(r))
                },
                unregister: function(e) {
                  n = n.filter((function(t) {
                    return t !== e
                  }))
                },
                val: function(e) {
                  if (void 0 === e || e == r) return r;
                  var t = o(e);
                  return r = e, n.forEach((function(n) {
                    return n(e, t)
                  })), r
                }
              }
            }(t.value, n || u), r
          }
          return r(o, e), o.prototype.getChildContext = function() {
            var e;
            return (e = {})[l] = this.t, e
          }, o.prototype.componentDidUpdate = function() {
            this.t.val(this.props.value)
          }, o.prototype.render = function() {
            var e = i(this.props),
              n = e.child,
              r = e.children;
            return n || t.h("span", null, r)
          }, o
        }(t.Component),
        Consumer: function(t) {
          function n(n, r) {
            var o = t.call(this, n, r) || this;
            return o.i = function(e, t) {
              var n = o.props.unstable_observedBits,
                r = null == n ? c : n;
              0 != ((r |= 0) & t) && o.setState({
                value: e
              })
            }, o.state = {
              value: o.u().val() || e
            }, o
          }
          return r(n, t), n.prototype.componentDidMount = function() {
            this.u().register(this.i)
          }, n.prototype.shouldComponentUpdate = function(e, t) {
            return this.state.value !== t.value || a(this.props) !== a(e)
          }, n.prototype.componentWillUnmount = function() {
            this.u().unregister(this.i)
          }, n.prototype.componentDidUpdate = function(e, t, n) {
            var r = n[l];
            r !== this.context[l] && ((r || o).unregister(this.i), this.componentDidMount())
          }, n.prototype.render = function() {
            var e = "render" in this.props && this.props.render,
              t = a(this.props);
            if (e && e !== t && console.warn("Both children and a render function are defined. Children will be used"), "function" == typeof t) return t(this.state.value);
            console.warn("Consumer is expecting a function as one and only child but didn't find any")
          }, n.prototype.u = function() {
            return this.context[l] || o
          }, n
        }(t.Component)
      }
    }
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
      function t(e) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.setFocusTrapElement = function(e) {
          n.focusTrapElement = e
        }, "undefined" != typeof document && (n.previouslyFocusedElement = document.activeElement), n
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
      }(t, e), r(t, [{
        key: "componentDidMount",
        value: function() {
          var e = this.props.focusTrapOptions,
            t = {
              returnFocusOnDeactivate: !1
            };
          for (var n in e) e.hasOwnProperty(n) && "returnFocusOnDeactivate" !== n && (t[n] = e[n]);
          var r = i.findDOMNode(this.focusTrapElement);
          this.focusTrap = this.props._createFocusTrap(r, t), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause()
        }
      }, {
        key: "componentDidUpdate",
        value: function(e) {
          if (e.active && !this.props.active) {
            var t = {
              returnFocus: this.props.focusTrapOptions.returnFocusOnDeactivate || !1
            };
            this.focusTrap.deactivate(t)
          } else !e.active && this.props.active && this.focusTrap.activate();
          e.paused && !this.props.paused ? this.focusTrap.unpause() : !e.paused && this.props.paused && this.focusTrap.pause()
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.focusTrap.deactivate(), !1 !== this.props.focusTrapOptions.returnFocusOnDeactivate && this.previouslyFocusedElement && this.previouslyFocusedElement.focus && this.previouslyFocusedElement.focus()
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = o.Children.only(this.props.children);
          return o.cloneElement(t, {
            ref: function(n) {
              e.setFocusTrapElement(n), "function" == typeof t.ref && t.ref(n)
            }
          })
        }
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
  n.r(t), n.d(t, "version", (function() {
    return c
  })), n.d(t, "DOM", (function() {
    return T
  })), n.d(t, "Children", (function() {
    return C
  })), n.d(t, "render", (function() {
    return g
  })), n.d(t, "hydrate", (function() {
    return g
  })), n.d(t, "createClass", (function() {
    return R
  })), n.d(t, "createPortal", (function() {
    return j
  })), n.d(t, "createFactory", (function() {
    return P
  })), n.d(t, "createElement", (function() {
    return M
  })), n.d(t, "cloneElement", (function() {
    return B
  })), n.d(t, "isValidElement", (function() {
    return I
  })), n.d(t, "findDOMNode", (function() {
    return A
  })), n.d(t, "unmountComponentAtNode", (function() {
    return k
  })), n.d(t, "Component", (function() {
    return G
  })), n.d(t, "PureComponent", (function() {
    return K
  })), n.d(t, "unstable_renderSubtreeIntoContainer", (function() {
    return _
  })), n.d(t, "unstable_batchedUpdates", (function() {
    return X
  })), n.d(t, "__spread", (function() {
    return U
  }));
  var r = n(11),
    o = n.n(r);
  n.d(t, "PropTypes", (function() {
    return o.a
  }));
  var i = n(0);
  n.d(t, "createRef", (function() {
    return i.createRef
  }));
  var a = n(14);
  n.d(t, "createContext", (function() {
    return a.createContext
  }));
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

  function v() {
    return null
  }
  var b = Object(i.h)("a", null).constructor;
  b.prototype.$$typeof = s, b.prototype.preactCompatUpgraded = !1, b.prototype.preactCompatNormalized = !1, Object.defineProperty(b.prototype, "type", {
    get: function() {
      return this.nodeName
    },
    set: function(e) {
      this.nodeName = e
    },
    configurable: !0
  }), Object.defineProperty(b.prototype, "props", {
    get: function() {
      return this.attributes
    },
    set: function(e) {
      this.attributes = e
    },
    configurable: !0
  });
  var m = i.options.event;
  i.options.event = function(e) {
    return m && (e = m(e)), e.persist = Object, e.nativeEvent = e, e
  };
  var y = i.options.vnode;

  function g(e, t, n) {
    var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
    r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
    for (var o = t.childNodes.length; o--;) t.childNodes[o] !== r && t.removeChild(t.childNodes[o]);
    var a = Object(i.render)(e, t, r);
    return t && (t._preactCompatRendered = a && (a._component || {
      base: a
    })), "function" == typeof n && n(), a && a._component || a
  }
  i.options.vnode = function(e) {
    if (!e.preactCompatUpgraded) {
      e.preactCompatUpgraded = !0;
      var t = e.nodeName,
        n = e.attributes = null == e.attributes ? {} : U({}, e.attributes);
      "function" == typeof t ? (!0 === t[l] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || L(e), function(e) {
        var t = e.nodeName,
          n = e.attributes;
        e.attributes = {}, t.defaultProps && U(e.attributes, t.defaultProps);
        n && U(e.attributes, n)
      }(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), function(e, t) {
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
  var O = function() {};

  function _(e, t, n, r) {
    var o = g(Object(i.h)(O, {
        context: e.context
      }, t), n),
      a = o._component || o.base;
    return r && r.call(a, o), a
  }

  function w(e) {
    _(this, e.vnode, e.container)
  }

  function j(e, t) {
    return Object(i.h)(w, {
      vnode: e,
      container: t
    })
  }

  function k(e) {
    var t = e._preactCompatRendered && e._preactCompatRendered.base;
    return !(!t || t.parentNode !== e) && (Object(i.render)(Object(i.h)(v), e, t), !0)
  }
  O.prototype.getChildContext = function() {
    return this.props.context
  }, O.prototype.render = function(e) {
    return e.children[0]
  };
  var N, x = [],
    C = {
      map: function(e, t, n) {
        return null == e ? null : (e = C.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
      },
      forEach: function(e, t, n) {
        if (null == e) return null;
        e = C.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
      },
      count: function(e) {
        return e && e.length || 0
      },
      only: function(e) {
        if (1 !== (e = C.toArray(e)).length) throw new Error("Children.only() expects only one child.");
        return e[0]
      },
      toArray: function(e) {
        return null == e ? [] : x.concat(e)
      }
    };

  function P(e) {
    return M.bind(null, e)
  }
  for (var T = {}, S = u.length; S--;) T[u[S]] = P(u[S]);

  function E(e) {
    var t, n = e[l];
    return n ? !0 === n ? e : n : (n = R({
      displayName: (t = e).displayName || t.name,
      render: function() {
        return t(this.props, this.context)
      }
    }), Object.defineProperty(n, l, {
      configurable: !0,
      value: !0
    }), n.displayName = e.displayName, n.propTypes = e.propTypes, n.defaultProps = e.defaultProps, Object.defineProperty(e, l, {
      configurable: !0,
      value: n
    }), n)
  }

  function M() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return function e(t, n) {
      for (var r = n || 0; r < t.length; r++) {
        var o = t[r];
        Array.isArray(o) ? e(o) : o && "object" == typeof o && !I(o) && (o.props && o.type || o.attributes && o.nodeName || o.children) && (t[r] = M(o.type || o.nodeName, o.props || o.attributes, o.children))
      }
    }(e, 2), L(i.h.apply(void 0, e))
  }

  function L(e) {
    var t;
    e.preactCompatNormalized = !0,
      function(e) {
        var t = e.attributes || (e.attributes = {});
        D.enumerable = "className" in t, t.className && (t.class = t.className);
        Object.defineProperty(t, "className", D)
      }(e), "function" != typeof(t = e.nodeName) || t.prototype && t.prototype.render || (e.nodeName = E(e.nodeName));
    var n, r, o = e.attributes.ref,
      i = o && typeof o;
    return !N || "string" !== i && "number" !== i || (e.attributes.ref = (n = o, (r = N)._refProxies[n] || (r._refProxies[n] = function(e) {
        r && r.refs && (r.refs[n] = e, null === e && (delete r._refProxies[n], r = null))
      }))),
      function(e) {
        var t = e.nodeName,
          n = e.attributes;
        if (!n || "string" != typeof t) return;
        var r = {};
        for (var o in n) r[o.toLowerCase()] = o;
        r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]);
        if (r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
          var i = r.oninput || "oninput";
          n[i] || (n[i] = V([n[i], n[r.onchange]]), delete n[r.onchange])
        }
      }(e), e
  }

  function B(e, t) {
    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
    if (!I(e)) return e;
    var o = e.attributes || e.props,
      a = [Object(i.h)(e.nodeName || e.type, U({}, o), e.children || o && o.children), t];
    return n && n.length ? a.push(n) : t && t.children && a.push(t.children), L(i.cloneElement.apply(void 0, a))
  }

  function I(e) {
    return e && (e instanceof b || e.$$typeof === s)
  }
  var D = {
    configurable: !0,
    get: function() {
      return this.class
    },
    set: function(e) {
      this.class = e
    }
  };

  function U(e, t) {
    for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++)
      if (o = n[r])
        for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i]);
    return e
  }

  function F(e, t) {
    for (var n in e)
      if (!(n in t)) return !0;
    for (var r in t)
      if (e[r] !== t[r]) return !0;
    return !1
  }

  function A(e) {
    return e && (e.base || 1 === e.nodeType && e) || null
  }

  function z() {}

  function R(e) {
    function t(e, t) {
      ! function(e) {
        for (var t in e) {
          var n = e[t];
          "function" != typeof n || n.__bound || f.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
        }
      }(this), G.call(this, e, t, h), H.call(this, e, t)
    }
    return (e = U({
      constructor: t
    }, e)).mixins && function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = V(t[n].concat(e[n] || x), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
    }(e, function(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n];
        for (var o in r) r.hasOwnProperty(o) && "function" == typeof r[o] && (t[o] || (t[o] = [])).push(r[o])
      }
      return t
    }(e.mixins)), e.statics && U(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)), z.prototype = G.prototype, t.prototype = U(new z, e), t.displayName = e.displayName || "Component", t
  }

  function W(e, t, n) {
    if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(e, n)
  }

  function V(e, t) {
    return function() {
      for (var n, r = arguments, o = this, i = 0; i < e.length; i++) {
        var a = W(o, e[i], r);
        if (t && null != a)
          for (var c in n || (n = {}), a) a.hasOwnProperty(c) && (n[c] = a[c]);
        else void 0 !== a && (n = a)
      }
      return n
    }
  }

  function H(e, t) {
    q.call(this, e, t), this.componentWillReceiveProps = V([q, this.componentWillReceiveProps || "componentWillReceiveProps"]), this.render = V([q, $, this.render || "render", Z])
  }

  function q(e, t) {
    if (e) {
      var n = e.children;
      if (n && Array.isArray(n) && 1 === n.length && ("string" == typeof n[0] || "function" == typeof n[0] || n[0] instanceof b) && (e.children = n[0], e.children && "object" == typeof e.children && (e.children.length = 1, e.children[0] = e.children)), d) {
        var r = "function" == typeof this ? this : this.constructor,
          i = this.propTypes || r.propTypes,
          a = this.displayName || r.name;
        i && o.a.checkPropTypes(i, e, "prop", a)
      }
    }
  }

  function $(e) {
    N = this
  }

  function Z() {
    N === this && (N = null)
  }

  function G(e, t, n) {
    i.Component.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {}, this._refProxies = {}, n !== h && H.call(this, e, t)
  }

  function K(e, t) {
    G.call(this, e, t)
  }

  function X(e) {
    e()
  }
  U(G.prototype = new i.Component, {
    constructor: G,
    isReactComponent: {},
    replaceState: function(e, t) {
      for (var n in this.setState(e, t), this.state) n in e || delete this.state[n]
    },
    getDOMNode: function() {
      return this.base
    },
    isMounted: function() {
      return !!this.base
    }
  }), z.prototype = G.prototype, K.prototype = new z, K.prototype.isPureReactComponent = !0, K.prototype.shouldComponentUpdate = function(e, t) {
    return F(this.props, e) || F(this.state, t)
  };
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
  e.exports = function(e, t, n) {
    "function" == typeof t && (n = t, t = {});
    t || (t = {});
    var a, c, u = t.prefix || "__jp",
      s = t.name || u + o++,
      l = t.param || "callback",
      f = null != t.timeout ? t.timeout : 6e4,
      p = encodeURIComponent,
      h = document.getElementsByTagName("script")[0] || document.head;
    f && (c = setTimeout((function() {
      d(), n && n(new Error("Timeout"))
    }), f));

    function d() {
      a.parentNode && a.parentNode.removeChild(a), window[s] = i, c && clearTimeout(c)
    }
    return window[s] = function(e) {
        r("jsonp got", e), d(), n && n(null, e)
      }, e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + p(s)).replace("?&", "?"), r('jsonp req "%s"', e), (a = document.createElement("script")).src = e, h.parentNode.insertBefore(a, h),
      function() {
        window[s] && d()
      }
  };
  var o = 0;

  function i() {}
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
      function e(e) {
        this.value = e
      }

      function t(t) {
        var n, r;

        function o(n, r) {
          try {
            var a = t[n](r),
              c = a.value;
            c instanceof e ? Promise.resolve(c.value).then((function(e) {
              o("next", e)
            }), (function(e) {
              o("throw", e)
            })) : i(a.done ? "return" : "normal", a.value)
          } catch (e) {
            i("throw", e)
          }
        }

        function i(e, t) {
          switch (e) {
            case "return":
              n.resolve({
                value: t,
                done: !0
              });
              break;
            case "throw":
              n.reject(t);
              break;
            default:
              n.resolve({
                value: t,
                done: !1
              })
          }(n = n.next) ? o(n.key, n.arg): r = null
        }
        this._invoke = function(e, t) {
          return new Promise((function(i, a) {
            var c = {
              key: e,
              arg: t,
              resolve: i,
              reject: a,
              next: null
            };
            r ? r = r.next = c : (n = r = c, o(e, t))
          }))
        }, "function" != typeof t.return && (this.return = void 0)
      }
      "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
        return this
      }), t.prototype.next = function(e) {
        return this._invoke("next", e)
      }, t.prototype.throw = function(e) {
        return this._invoke("throw", e)
      }, t.prototype.return = function(e) {
        return this._invoke("return", e)
      }
    }();
    var t = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
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
      r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      },
      o = function(o) {
        function a() {
          return t(this, a), r(this, o.apply(this, arguments))
        }
        return n(a, o), a.prototype.componentDidUpdate = function(e) {
          for (var t in e)
            if (e[t] !== this.props[t]) return setTimeout(this.renderLayer)
        }, a.prototype.componentDidMount = function() {
          this.isMounted = !0, this.renderLayer = this.renderLayer.bind(this), this.renderLayer()
        }, a.prototype.componentWillUnmount = function() {
          this.renderLayer(!1), this.isMounted = !1, this.remote && this.remote.parentNode.removeChild(this.remote)
        }, a.prototype.findNode = function(e) {
          return "string" == typeof e ? document.querySelector(e) : e
        }, a.prototype.renderLayer = function() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.isMounted && (this.props.into !== this.intoPointer && (this.intoPointer = this.props.into, this.into && this.remote && (this.remote = e.render(e.h(i, null), this.into, this.remote)), this.into = this.findNode(this.props.into)), this.remote = e.render(e.h(i, {
            context: this.context
          }, t && this.props.children || null), this.into, this.remote))
        }, a.prototype.render = function() {
          return null
        }, a
      }(e.Component),
      i = function(e) {
        function o() {
          return t(this, o), r(this, e.apply(this, arguments))
        }
        return n(o, e), o.prototype.getChildContext = function() {
          return this.props.context
        }, o.prototype.render = function(e) {
          var t = e.children;
          return t && t[0] || null
        }, o
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
    }(t = e.exports = n(30)).log = function() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function(e) {
      var n = this.useColors;
      if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
      var r = "color: " + this.color;
      e.splice(1, 0, r, "color: inherit");
      var o = 0,
        i = 0;
      e[0].replace(/%[a-zA-Z%]/g, (function(e) {
        "%%" !== e && (o++, "%c" === e && (i = o))
      })), e.splice(i, 0, r)
    }, t.save = function(e) {
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
    }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message
      }
    }, t.enable(o())
  }).call(this, n(29))
}, function(e, t) {
  var n, r, o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function a() {
    throw new Error("clearTimeout has not been defined")
  }

  function c(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
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

  function p() {
    l && u && (l = !1, u.length ? s = u.concat(s) : f = -1, s.length && h())
  }

  function h() {
    if (!l) {
      var e = c(p);
      l = !0;
      for (var t = s.length; t;) {
        for (u = s, s = []; ++f < t;) u && u[f].run();
        f = -1, t = s.length
      }
      u = null, l = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function d(e, t) {
    this.fun = e, this.array = t
  }

  function v() {}
  o.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    s.push(new d(e, t)), 1 !== s.length || l || c(h)
  }, d.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {
    return []
  }, o.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, o.cwd = function() {
    return "/"
  }, o.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, o.umask = function() {
    return 0
  }
}, function(e, t, n) {
  var r;

  function o(e) {
    function n() {
      if (n.enabled) {
        var e = n,
          o = +new Date,
          i = o - (r || o);
        e.diff = i, e.prev = r, e.curr = o, r = o;
        for (var a = new Array(arguments.length), c = 0; c < a.length; c++) a[c] = arguments[c];
        a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
        var u = 0;
        a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
          if ("%%" === n) return n;
          u++;
          var o = t.formatters[r];
          if ("function" == typeof o) {
            var i = a[u];
            n = o.call(e, i), a.splice(u, 1), u--
          }
          return n
        })), t.formatArgs.call(e, a), (n.log || t.log || console.log.bind(console)).apply(e, a)
      }
    }
    return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }(e), "function" == typeof t.init && t.init(n), n
  }(t = e.exports = o.debug = o.default = o).coerce = function(e) {
    return e instanceof Error ? e.stack || e.message : e
  }, t.disable = function() {
    t.enable("")
  }, t.enable = function(e) {
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

  function c(e, t, n) {
    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
  }
  e.exports = function(e, t) {
    t = t || {};
    var u, s = typeof e;
    if ("string" === s && e.length > 0) return function(e) {
      if ((e = String(e)).length > 100) return;
      var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
      if (!t) return;
      var c = parseFloat(t[1]);
      switch ((t[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return c * a;
        case "days":
        case "day":
        case "d":
          return c * i;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return c * o;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return c * r;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return c * n;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return c;
        default:
          return
      }
    }(e);
    if ("number" === s && !1 === isNaN(e)) return t.long ? c(u = e, i, "day") || c(u, o, "hour") || c(u, r, "minute") || c(u, n, "second") || u + " ms" : function(e) {
      if (e >= i) return Math.round(e / i) + "d";
      if (e >= o) return Math.round(e / o) + "h";
      if (e >= r) return Math.round(e / r) + "m";
      if (e >= n) return Math.round(e / n) + "s";
      return e + "ms"
    }(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
  }
}, function(e, t, n) {
  "use strict";
  var r = n(33);

  function o() {}

  function i() {}
  i.resetWarningCache = o, e.exports = function() {
    function e(e, t, n, o, i, a) {
      if (a !== r) {
        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw c.name = "Invariant Violation", c
      }
    }

    function t() {
      return e
    }
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
      activateTrap: function(e) {
        if (r.length > 0) {
          var t = r[r.length - 1];
          t !== e && t.pause()
        }
        var n = r.indexOf(e); - 1 === n ? r.push(e) : (r.splice(n, 1), r.push(e))
      },
      deactivateTrap: function(e) {
        var t = r.indexOf(e); - 1 !== t && r.splice(t, 1), r.length > 0 && r[r.length - 1].unpause()
      }
    });

  function c(e) {
    return setTimeout(e, 0)
  }
  e.exports = function(e, t) {
    var n = document,
      r = "string" == typeof e ? n.querySelector(e) : e,
      u = i({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0
      }, t),
      s = {
        firstTabbableNode: null,
        lastTabbableNode: null,
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1
      },
      l = {
        activate: function(e) {
          if (s.active) return;
          O(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = n.activeElement;
          var t = e && e.onActivate ? e.onActivate : u.onActivate;
          t && t();
          return p(), l
        },
        deactivate: f,
        pause: function() {
          if (s.paused || !s.active) return;
          s.paused = !0, h()
        },
        unpause: function() {
          if (!s.paused || !s.active) return;
          s.paused = !1, p()
        }
      };
    return l;

    function f(e) {
      if (s.active) {
        h(), s.active = !1, s.paused = !1, a.deactivateTrap(l);
        var t = e && void 0 !== e.onDeactivate ? e.onDeactivate : u.onDeactivate;
        return t && t(), (e && void 0 !== e.returnFocus ? e.returnFocus : u.returnFocusOnDeactivate) && c((function() {
          _(s.nodeFocusedBeforeActivation)
        })), l
      }
    }

    function p() {
      if (s.active) return a.activateTrap(l), O(), c((function() {
        _(v())
      })), n.addEventListener("focusin", m, !0), n.addEventListener("mousedown", b, !0), n.addEventListener("touchstart", b, !0), n.addEventListener("click", g, !0), n.addEventListener("keydown", y, !0), l
    }

    function h() {
      if (s.active) return n.removeEventListener("focusin", m, !0), n.removeEventListener("mousedown", b, !0), n.removeEventListener("touchstart", b, !0), n.removeEventListener("click", g, !0), n.removeEventListener("keydown", y, !0), l
    }

    function d(e) {
      var t = u[e],
        r = t;
      if (!t) return null;
      if ("string" == typeof t && !(r = n.querySelector(t))) throw new Error("`" + e + "` refers to no known node");
      if ("function" == typeof t && !(r = t())) throw new Error("`" + e + "` did not return a node");
      return r
    }

    function v() {
      var e;
      if (!(e = null !== d("initialFocus") ? d("initialFocus") : r.contains(n.activeElement) ? n.activeElement : s.firstTabbableNode || d("fallbackFocus"))) throw new Error("You can't have a focus-trap without at least one focusable element");
      return e
    }

    function b(e) {
      r.contains(e.target) || (u.clickOutsideDeactivates ? f({
        returnFocus: !o.isFocusable(e.target)
      }) : e.preventDefault())
    }

    function m(e) {
      r.contains(e.target) || e.target instanceof Document || (e.stopImmediatePropagation(), _(s.mostRecentlyFocusedNode || v()))
    }

    function y(e) {
      if (!1 !== u.escapeDeactivates && function(e) {
          return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
        }(e)) return e.preventDefault(), void f();
      (function(e) {
        return "Tab" === e.key || 9 === e.keyCode
      })(e) && function(e) {
        if (O(), e.shiftKey && e.target === s.firstTabbableNode) return e.preventDefault(), void _(s.lastTabbableNode);
        if (!e.shiftKey && e.target === s.lastTabbableNode) e.preventDefault(), _(s.firstTabbableNode)
      }(e)
    }

    function g(e) {
      u.clickOutsideDeactivates || r.contains(e.target) || (e.preventDefault(), e.stopImmediatePropagation())
    }

    function O() {
      var e = o(r);
      s.firstTabbableNode = e[0] || v(), s.lastTabbableNode = e[e.length - 1] || v()
    }

    function _(e) {
      e !== n.activeElement && (e && e.focus ? (e.focus(), s.mostRecentlyFocusedNode = e, function(e) {
        return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
      }(e) && e.select()) : _(v()))
    }
  }
}, function(e, t) {
  var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
    r = n.join(","),
    o = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function i(e, t) {
    t = t || {};
    var n, i, c, u = [],
      f = [],
      h = new p(e.ownerDocument || e),
      d = e.querySelectorAll(r);
    for (t.includeContainer && o.call(e, r) && (d = Array.prototype.slice.apply(d)).unshift(e), n = 0; n < d.length; n++) a(i = d[n], h) && (0 === (c = s(i)) ? u.push(i) : f.push({
      documentOrder: n,
      tabIndex: c,
      node: i
    }));
    return f.sort(l).map((function(e) {
      return e.node
    })).concat(u)
  }

  function a(e, t) {
    return !(!c(e, t) || function(e) {
      return function(e) {
        return f(e) && "radio" === e.type
      }(e) && ! function(e) {
        if (!e.name) return !0;
        var t = function(e) {
          for (var t = 0; t < e.length; t++)
            if (e[t].checked) return e[t]
        }(e.ownerDocument.querySelectorAll('input[type="radio"][name="' + e.name + '"]'));
        return !t || t === e
      }(e)
    }(e) || s(e) < 0)
  }

  function c(e, t) {
    return t = t || new p(e.ownerDocument || e), !(e.disabled || function(e) {
      return f(e) && "hidden" === e.type
    }(e) || t.isUntouchable(e))
  }
  i.isTabbable = function(e, t) {
    if (!e) throw new Error("No node provided");
    return !1 !== o.call(e, r) && a(e, t)
  }, i.isFocusable = function(e, t) {
    if (!e) throw new Error("No node provided");
    return !1 !== o.call(e, u) && c(e, t)
  };
  var u = n.concat("iframe").join(",");

  function s(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return isNaN(t) ? function(e) {
      return "true" === e.contentEditable
    }(e) ? 0 : e.tabIndex : t
  }

  function l(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
  }

  function f(e) {
    return "INPUT" === e.tagName
  }

  function p(e) {
    this.doc = e, this.cache = []
  }
  p.prototype.hasDisplayNone = function(e, t) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var n = function(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        if (t(e[n])) return e[n]
    }(this.cache, (function(t) {
      return t === e
    }));
    if (n) return n[1];
    var r = !1;
    return "none" === (t = t || this.doc.defaultView.getComputedStyle(e)).display ? r = !0 : e.parentNode && (r = this.hasDisplayNone(e.parentNode)), this.cache.push([e, r]), r
  }, p.prototype.isUntouchable = function(e) {
    if (e === this.doc.documentElement) return !1;
    var t = this.doc.defaultView.getComputedStyle(e);
    return !!this.hasDisplayNone(e, t) || "hidden" === t.visibility
  }, e.exports = i
}, function(e, t) {
  e.exports = function() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) n.call(r, o) && (e[o] = r[o])
    }
    return e
  };
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
  var d = function(e) {
      var t = f.call(e, h),
        n = e[h];
      try {
        e[h] = void 0;
        var r = !0
      } catch (e) {}
      var o = p.call(e);
      return r && (t ? e[h] = n : delete e[h]), o
    },
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
  var _ = function(e) {
      return null != e && "object" == typeof e
    },
    w = "[object Symbol]";
  var j = function(e) {
      return "symbol" == typeof e || _(e) && O(e) == w
    },
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
        s = setTimeout(m, function(e) {
          var n = t - (e - l);
          return h ? L(n, a - (e - f)) : n
        }(e))
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
      return t = S(t) || 0, o(n) && (p = !!n.leading, a = (h = "maxWait" in n) ? M(S(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), g.cancel = function() {
        void 0 !== s && clearTimeout(s), f = 0, r = l = i = s = void 0
      }, g.flush = function() {
        return void 0 === s ? c : y(u())
      }, g
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

  function U(e, t) {
    var n = e.match(t);
    return n && n.length ? n[0] : null
  }

  function F() {
    return "prod" === window.BZFD.Config.env ? "buzzfeed.com" : window.location.hostname
  }
  var A = {
      getBuzzfeedSubdomainOrWildcard: function(e) {
        var t = U(e, "(dev|stage|www).(buzzfeed|buzzfeednews).(com|io)$");
        return t || U(e, ".?[a-z]+.[a-z]+$")
      },
      get: function(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
          for (var i = r[o];
            " " === i.charAt(0);) i = i.substring(1, i.length);
          if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
        }
        return t
      },
      set: function(e) {
        var t = e.name,
          n = e.value,
          r = e.days,
          o = e.domain;
        o = o || F();
        var i = "";
        if (r) {
          var a = new Date;
          a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), i = "; expires=" + a.toGMTString()
        }
        return document.cookie = t + "=" + n + i + "; path=/; domain=" + o
      },
      remove: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F();
        return this.set({
          name: e,
          value: "",
          days: -1,
          domain: t
        })
      }
    },
    z = "function" == typeof fetch ? fetch : function(e, t) {
      return t = t || {}, new Promise((function(n, r) {
        var o = new XMLHttpRequest;
        for (var i in o.open(t.method || "get", e), t.headers) o.setRequestHeader(i, t.headers[i]);

        function a() {
          var e, t = [],
            n = [],
            r = {};
          return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, (function(o, i, a) {
            t.push(i = i.toLowerCase()), n.push([i, a]), e = r[i], r[i] = e ? e + "," + a : a
          })), {
            ok: 1 == (o.status / 200 | 0),
            status: o.status,
            statusText: o.statusText,
            url: o.responseURL,
            clone: a,
            text: function() {
              return Promise.resolve(o.responseText)
            },
            json: function() {
              return Promise.resolve(o.responseText).then(JSON.parse)
            },
            xml: function() {
              return Promise.resolve(o.responseXML)
            },
            blob: function() {
              return Promise.resolve(new Blob([o.response]))
            },
            headers: {
              keys: function() {
                return t
              },
              entries: function() {
                return n
              },
              get: function(e) {
                return r[e.toLowerCase()]
              },
              has: function(e) {
                return e.toLowerCase() in r
              }
            }
          }
        }
        o.withCredentials = "include" == t.credentials, o.onload = function() {
          n(a())
        }, o.onerror = r, o.send(t.body)
      }))
    };
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
  var se = function(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t
    },
    le = "__lodash_hash_undefined__",
    fe = Object.prototype.hasOwnProperty;
  var pe = function(e) {
      var t = this.__data__;
      if (ce) {
        var n = t[e];
        return n === le ? void 0 : n
      }
      return fe.call(t, e) ? t[e] : void 0
    },
    he = Object.prototype.hasOwnProperty;
  var de = function(e) {
      var t = this.__data__;
      return ce ? void 0 !== t[e] : he.call(t, e)
    },
    ve = "__lodash_hash_undefined__";
  var be = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = ce && void 0 === t ? ve : t, this
  };

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
  var ge = function() {
    this.__data__ = [], this.size = 0
  };
  var Oe = function(e, t) {
    return e === t || e != e && t != t
  };
  var _e = function(e, t) {
      for (var n = e.length; n--;)
        if (Oe(e[n][0], t)) return n;
      return -1
    },
    we = Array.prototype.splice;
  var je = function(e) {
    var t = this.__data__,
      n = _e(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : we.call(t, n, 1), --this.size, !0)
  };
  var ke = function(e) {
    var t = this.__data__,
      n = _e(t, e);
    return n < 0 ? void 0 : t[n][1]
  };
  var Ne = function(e) {
    return _e(this.__data__, e) > -1
  };
  var xe = function(e, t) {
    var n = this.__data__,
      r = _e(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
  };

  function Ce(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1])
    }
  }
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
  var Ee = function(e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
  };
  var Me = function(e, t) {
    var n = e.__data__;
    return Ee(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
  };
  var Le = function(e) {
    var t = Me(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
  };
  var Be = function(e) {
    return Me(this, e).get(e)
  };
  var Ie = function(e) {
    return Me(this, e).has(e)
  };
  var De = function(e, t) {
    var n = Me(this, e),
      r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
  };

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
    var n = function() {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, r);
      return n.cache = i.set(o, a) || i, a
    };
    return n.cache = new(ze.Cache || Fe), n
  }
  ze.Cache = Fe;
  var Re = ze,
    We = 500;
  var Ve = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    He = /\\(\\)?/g;
  ! function(e) {
    var t = Re(e, (function(e) {
        return n.size === We && n.clear(), e
      })),
      n = t.cache
  }((function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(Ve, (function(e, n, r, o) {
      t.push(r ? o.replace(He, "$1") : n || e)
    })), t
  }));
  var qe = s ? s.prototype : void 0;
  qe && qe.toString;
  var $e = "track/website/instrumentation";
  var Ze = ["samplingRate"];
  n(21);

  function Ge(e) {
    var t = [];
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        null !== r && "" !== r && void 0 !== r && t.push(n + "=" + r)
      } return t.join("&")
  }

  function Ke(e) {
    return new Promise((function(t, n) {
      setTimeout((function() {
        return n({
          type: "timeout",
          msg: e + "ms timeout exceeded"
        })
      }), e)
    }))
  }

  function Xe(e) {
    var t = e.url;
    return function(e) {
      return function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ("function" == typeof window.bfa) {
          Ze.some((function(e) {
            return n.hasOwnProperty(e)
          })) && (r = n, n = {});
          var o = r,
            i = o.samplingRate,
            a = o.platform,
            c = {
              data: {
                target: e,
                value: t,
                tags: n
              }
            };
          a && (c.data.platform = r.platform), i && (i > 1 ? "dev" === window.BZFD.Config.env && console.error("Your sampling rate is above 100%.") : Object.assign(c, {
            opts: {
              samplingRate: i
            }
          })), window.bfa($e, c)
        } else void 0 !== window.raven && window.raven.captureException(new Error("Instrumentation tracking issue: BFA is not available"))
      }("xhr", e.type || "error", {
        url: t,
        status: e.status || 0
      }), Promise.reject(e)
    }
  }

  function Ye(e) {
    return e.ok ? Promise.resolve(e) : Promise.reject({
      type: "error",
      status: e.status,
      statusText: e.statusText
    })
  }

  function Je(e) {
    return e.json()
  }

  function Qe(e) {
    return e.text()
  }

  function et(e) {
    if ("dev" !== BZFD.Config.env) return e;
    var t = e.indexOf("?") > -1 ? "&" : "?";
    return e + t + "eca385331012a621bc93fcda0a953a97"
  }
  var tt = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.data,
        r = t.type,
        o = void 0 === r ? "json" : r,
        i = t.params,
        a = void 0 === i ? {} : i,
        c = t.skipAuth,
        u = void 0 !== c && c,
        s = t.raw,
        l = void 0 !== s && s,
        f = t.timeout;
      if (!e) return Promise.reject("URL parameter is required");
      if (!n) return Promise.reject("Can not send POST request without data");
      u && (e = et(e));
      var p = void 0,
        h = Object.assign({
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          },
          credentials: "same-origin"
        }, a);
      switch (h.method = "POST", h.body = l ? n : Ge(n), o) {
        case "json":
          p = z(e, h).then(Ye).then(Je);
          break;
        case "text":
          p = z(e, h).then(Ye).then(Qe);
          break;
        default:
          p = Promise.reject("Unsupported type " + o)
      }
      return (f ? Promise.race([Ke(f), p]) : p).catch(Xe({
        url: e
      }))
    },
    nt = function(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function(e, t) {
        var n = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          o = !0, i = e
        } finally {
          try {
            !r && c.return && c.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
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
      signout: function() {
        return tt("/buzzfeed/_admin_user", {
          data: {
            action: "logout"
          },
          params: {
            headers: {
              "x-requested-with": "XMLHttpRequest",
              "content-type": "application/x-www-form-urlencoded"
            }
          }
        }).then((function() {
          A.remove(rt())
        }))
      },
      getUserInfo: function() {
        var e = decodeURIComponent(A.get(rt(), {})),
          t = {},
          n = e.split("&"),
          r = n.findIndex((function(e) {
            return e.match("^image=")
          }));
        if (-1 !== r && n[r + 1] && n[r + 1].match("^crop=")) {
          var o = n.splice(r + 1, 1);
          n[r] += "&" + o
        }
        return n.forEach((function(e) {
          var n = e.split("="),
            r = n.shift(),
            o = n.join("=");
          t[r] = decodeURIComponent(o)
        })), t
      },
      isAdmin: function() {
        var e = this.getUserInfo();
        return !!(e.p_admin || e.p_editor_admin || e.p_developer_admin || e.p_partner_admin)
      },
      userCan: function(e) {
        var t = this.getUserInfo().permission_key;
        if (!t) return !1;
        var n = nt(ot[e], 2),
          r = n[0],
          o = n[1],
          i = t.substr(t.length - (r + 1), 1);
        return (parseInt(i, 16) & 1 << o) > 0
      }
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
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    };

  function ht(e, t) {
    function n() {
      this.constructor = e
    }
    pt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var dt = {
    register: function(e) {
      console.warn("Consumer used without a Provider")
    },
    unregister: function(e) {},
    val: function(e) {}
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
              unregister: function(e) {
                n = n.filter((function(t) {
                  return t !== e
                }))
              },
              val: function(e) {
                if (void 0 === e || e == r) return r;
                var t = o(e);
                return r = e, n.forEach((function(n) {
                  return n(e, t)
                })), r
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
        }, r.prototype.componentWillUnmount = function() {
          this._getEmitter().unregister(this._updateContext)
        }, r.prototype.componentDidUpdate = function(e, t, r) {
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
        value: function(e) {
          A.set({
            name: "country",
            value: e.target.value,
            domain: "dev" === window.BZFD.Config.env ? "buzzfeed.io" : "buzzfeed.com",
            days: 180
          }), window.location = "/"
        }
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
    Tt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
    Mt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    It = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Ft = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Rt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Ht = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Zt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Yt = function(e) {
      var t = e.label,
        n = e.location;
      window.bfa("track/raw/ga", {
        data: {
          category: "Nav:" + n,
          action: "click",
          label: t
        }
      })
    },
    Jt = function(e) {
      var t = e.label,
        n = e.location;
      window.bfa("track/raw/ga", {
        data: {
          category: "Nav:" + n,
          action: "impression",
          label: t
        }
      })
    },
    Qt = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
          return function(e) {
            return Yt({
              label: n,
              location: r
            }), t(e)
          }
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
            u = void 0 === c ? function() {} : c,
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
    nn = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
          return function(e) {
            return Yt({
              label: n,
              location: r
            }), t(e)
          }
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
    fn = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
    vn = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
  var wn, jn, kn = function() {
      return window.innerWidth >= parseInt(an.breakpointSticky, 10)
    },
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
      function t() {
        yn(this, t);
        var e = gn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.onKeyDown = e.onKeyDown.bind(e), e
      }
      return On(t, e), bn(t, [{
        key: "onKeyDown",
        value: function(e) {
          27 === e.keyCode && this.props.onHide(e)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          kn() && document.body.classList.add(st.a.bodyWithMoreNav), window.addEventListener("keydown", this.onKeyDown, !0)
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          document.body.classList.remove(st.a.bodyWithMoreNav), window.removeEventListener("keydown", this.onKeyDown, !0)
        }
      }, {
        key: "render",
        value: function(e) {
          var t = e.top,
            n = e.onHide;
          return kn() ? Object(r.h)("div", {
            className: st.a.pageOverlay,
            style: "top:" + t + "px",
            onMouseDown: n,
            role: "presentation"
          }) : null
        }
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
    An = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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

  function Hn(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }
  var qn = function(e) {
      var t = e.children,
        n = Hn(e, ["children"]);
      return Object(r.h)("div", n, t)
    },
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
      function t() {
        Rn(this, t);
        var e = Wn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.state = {
          hovered: !1,
          enabled: !0,
          showFallback: !0,
          impressionTracked: !1
        }, e.onMouseEnter = e.onMouseEnter.bind(e), e.onMouseLeave = e.onMouseLeave.bind(e), e.onTouchStart = e.onTouchStart.bind(e), e
      }
      return Vn(t, e), zn(t, [{
        key: "componentDidMount",
        value: function() {
          this.setState({
            showFallback: !1
          })
        }
      }, {
        key: "getOffset",
        value: function() {
          var e = this.toggle.getBoundingClientRect(),
            t = e.width,
            n = (e.x || e.left) + t / 2 - this.props.width / 2,
            r = !0;
          return n + this.props.width > document.body.clientWidth && (r = !1, n = document.body.clientWidth - this.props.width), n < 0 && (r = !1, n = 0), {
            leftOffset: n,
            isCentered: r
          }
        }
      }, {
        key: "onMouseEnter",
        value: function() {
          this.toggleFlyout({
            forceVisible: !0
          })
        }
      }, {
        key: "onMouseLeave",
        value: function() {
          this.toggleFlyout({
            forceVisible: !1
          })
        }
      }, {
        key: "onTouchStart",
        value: function(e) {
          this.props.enabled() && (e.preventDefault(), this.toggleFlyout({
            delay: 0
          }))
        }
      }, {
        key: "toggleFlyout",
        value: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.forceVisible,
            r = void 0 === n ? !this.state.hovered : n,
            o = t.delay,
            i = void 0 === o ? 300 : o;
          if (r) {
            clearTimeout(this.willHideFlyout), this.state.impressionTracked || Jt({
              label: this.props.label,
              location: this.props.location
            });
            var a = this.getOffset(),
              c = a.leftOffset,
              u = a.isCentered;
            this.setState(An({}, this.state, {
              hovered: !0,
              leftOffset: c,
              enabled: this.props.enabled(),
              showArrow: u
            }))
          } else this.willHideFlyout = setTimeout((function() {
            return e.setState(An({}, e.state, {
              hovered: !1,
              impressionTracked: !0
            }))
          }), i)
        }
      }, {
        key: "render",
        value: function(e, t) {
          var n = this,
            o = e.children,
            i = e.width,
            a = void 0 === i ? 200 : i,
            c = Hn(e, ["children", "width"]),
            u = o.filter((function(e) {
              return e.nodeName === qn
            })),
            s = o.filter((function(e) {
              return e.nodeName !== qn
            })),
            l = {
              width: a + "px"
            };
          t.leftOffset && (l.left = t.leftOffset);
          var f = Object(r.h)("div", {
            className: Dn.a.flyoutInner,
            style: l,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          }, t.showArrow && Object(r.h)("span", {
            className: Dn.a.arrow
          }), s);
          return Object(r.h)("div", An({
            className: Dn.a.flyout,
            onTouchStart: this.onTouchStart,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          }, c), Object(r.h)("div", {
            ref: function(e) {
              return n.toggle = e
            }
          }, u), t.showFallback && Object(r.h)("div", {
            style: "display: none"
          }, f), t.enabled && t.hovered && Object(r.h)(Fn.a, {
            into: ".js-main-nav-flyout"
          }, f))
        }
      }]), t
    }(r.Component), wn.defaultProps = {
      enabled: function() {
        return !0
      }
    }, jn),
    Gn = n(6),
    Kn = n.n(Gn),
    Xn = n(9),
    Yn = n.n(Xn),
    Jn = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Qn = {
      id: "caret-icon",
      width: 38,
      height: 38
    },
    er = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Jn({
        id: Qn.id,
        viewBox: "0 0 " + Qn.width + " " + Qn.height
      }, t))
    },
    tr = Math.floor(6 * Math.random()),
    nr = function(e) {
      var t = e.title,
        n = e.items,
        o = e.cta,
        i = e.location;
      return Object(r.h)("div", {
        className: Yn.a.container
      }, Object(r.h)("h3", {
        className: Yn.a.title
      }, t), Object(r.h)("div", {
        className: Yn.a.items
      }, n.map((function(e) {
        var t = Array.isArray(e.img) ? e.img[tr] : e.img;
        return Object(r.h)(tn, {
          href: e.url,
          location: i,
          label: e.label,
          className: Yn.a.item
        }, Object(r.h)("figure", null, Object(r.h)(jt.Consumer, null, (function(n) {
          return Object(r.h)("img", {
            alt: e.title,
            src: n.image_service_url + "/" + t + "?output-format=auto&output-quality=auto&downsize=*:80"
          })
        })), Object(r.h)("figcaption", null, e.title)))
      }))), o ? Object(r.h)(tn, {
        className: Yn.a.cta,
        href: o.url,
        location: i,
        label: o.label
      }, o.title, Object(r.h)(er, {
        width: 16,
        height: 16,
        "aria-hidden": !0
      })) : "")
    },
    rr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };

  function or(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }

  function ir() {
    return !!window.matchMedia("(min-width:" + an.breakpointLarge + ")").matches
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
    lr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    hr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
      function t() {
        return vr(this, t), br(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return mr(t, e), dr(t, [{
        key: "componentDidMount",
        value: function() {
          this.input.focus()
        }
      }, {
        key: "render",
        value: function(e) {
          var t = this,
            n = e.id;
          return Object(r.h)(wt.Consumer, null, (function(e) {
            return Object(r.h)("form", {
              className: sr.a.searchInputContainer,
              role: "search",
              action: "/search"
            }, Object(r.h)("label", {
              htmlFor: n,
              className: sr.a.searchLabel
            }, e.search), Object(r.h)("input", {
              id: n,
              className: sr.a.searchInput,
              type: "search",
              name: "q",
              placeholder: e.search,
              autocomplete: "off",
              ref: function(e) {
                return t.input = e
              },
              "data-bfa": "@a:search;@d:input;"
            }))
          }))
        }
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
        value: function(e) {
          e.preventDefault(), this.setState(hr({}, this.state, {
            inputVisible: !this.state.inputVisible
          }))
        }
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
    jr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };

  function kr(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }
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
    Cr = function(e) {
      var t = kr(e, []);
      return Object(r.h)(Pt, jr({
        id: Nr.id,
        viewBox: "0 0 " + Nr.width + " " + Nr.height
      }, t))
    },
    Pr = function(e) {
      var t = kr(e, []);
      return Object(r.h)(Pt, jr({
        id: xr.id,
        viewBox: "0 0 " + xr.width + " " + xr.height
      }, t))
    },
    Tr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Sr = {
      width: 210,
      height: 50,
      id: "asis-brand-logo"
    },
    Er = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Tr({}, Sr, {
        viewBox: "0 0 " + Sr.width + " " + Sr.height
      }, t))
    },
    Mr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Lr = {
      width: 1748,
      height: 888,
      id: "bringme-brand-logo"
    },
    Br = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Mr({
        id: Lr.id,
        viewBox: "100 100 " + Lr.width + " " + Lr.height
      }, t))
    },
    Ir = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Dr = {
      width: 372.55,
      height: 131.34,
      id: "goodful-brand-logo"
    },
    Ur = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Ir({}, Dr, {
        viewBox: "0 0 " + Dr.width + " " + Dr.height
      }, t))
    },
    Fr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Ar = {
      width: 805,
      height: 334,
      id: "nifty-brand-logo"
    },
    zr = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Fr({
        id: Ar.id,
        viewBox: "0 0 " + Ar.width + " " + Ar.height
      }, t))
    },
    Rr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Wr = {
      width: 784,
      height: 290.91,
      id: "playfull-brand-logo"
    },
    Vr = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Rr({
        id: Wr.id,
        viewBox: "0 0 " + Wr.width + " " + Wr.height
      }, t))
    };
  var Hr = function(e) {
      var t = e.brandName,
        n = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["brandName"]);
      switch (t) {
        case "asis":
          return Object(r.h)(Er, n);
        case "bringme":
          return Object(r.h)(Br, n);
        case "goodful":
          return Object(r.h)(Ur, n);
        case "nifty":
          return Object(r.h)(zr, n);
        case "playfull":
          return Object(r.h)(Vr, n)
      }
      return null
    },
    qr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var $r = "js-bfo-logo-title",
    Zr = "js-bfn-logo-title",
    Gr = "js-microbrand-logo-title",
    Kr = hn((function(e) {
      var t = e.brand,
        n = e.theme,
        o = "delimiter-" + t;
      return Object(r.h)(jt.Consumer, null, (function(e) {
        return Object(r.h)("div", {
          className: wr.a.microBrandContainer
        }, Object(r.h)(tn, {
          className: wr.a.microBrandLink,
          href: e.brand_urls[t],
          label: t,
          location: "logo"
        }, Object(r.h)(Hr, {
          className: wr.a[t],
          brandName: t,
          role: "img",
          "aria-labelledby": Gr
        }, Object(r.h)("title", {
          id: Gr
        }, t, " Feed"))), Object(r.h)("span", {
          className: wr.a.microBrandDelimiter + " " + wr.a[o]
        }, "on"), Object(r.h)(tn, {
          href: e.bf_url,
          className: wr.a.logoContainer,
          label: "bfo",
          location: "logo"
        }, Object(r.h)(Et, {
          className: wr.a.bfo + " " + wr.a.secondary + " " + n.bfoLogo,
          role: "img",
          "aria-labelledby": $r
        }, Object(r.h)("title", {
          id: $r
        }, "Homepage"))))
      }))
    })),
    Xr = function(e) {
      return Object(r.h)("div", {
        className: wr.a.newsLogoContainer
      }, Object(r.h)(Cr, qr({
        className: wr.a.news
      }, e, {
        role: "img",
        "aria-labelledby": Zr
      }), Object(r.h)("title", {
        id: Zr
      }, "BuzzFeed News Homepage")), Object(r.h)(Pr, {
        className: wr.a.newsTagline,
        "aria-hidden": !0
      }))
    },
    Yr = hn((function(e) {
      var t = e.brand,
        n = e.theme,
        o = e.edition,
        i = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["brand", "theme", "edition"]);
      return "news" === t ? Object(r.h)(jt.Consumer, null, (function(e) {
        var n = e.brand_urls,
          a = "us" === o ? n[t] : n[t + "_alt"];
        return Object(r.h)(tn, {
          href: a,
          className: wr.a.logoContainer,
          label: "bfnews",
          location: "logo"
        }, Object(r.h)(Xr, qr({
          className: wr.a[t]
        }, i)))
      })) : "bfo" === t ? Object(r.h)(jt.Consumer, null, (function(e) {
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
    Jr = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    to = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var no = {
      id: "close-icon",
      width: 38,
      height: 38
    },
    ro = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, to({
        id: no.id,
        viewBox: "0 0 " + no.width + " " + no.height
      }, t))
    },
    oo = n(13),
    io = n.n(oo),
    ao = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var co = {
      width: 1024,
      height: 1024,
      id: "cute-badge"
    },
    uo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, ao({
        id: co.id,
        viewBox: "0 0 " + co.width + " " + co.height
      }, t))
    },
    so = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    po = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    bo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var mo = {
      width: 1024,
      height: 1024,
      id: "omg-badge"
    },
    yo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, bo({
        id: mo.id,
        viewBox: "0 0 " + mo.width + " " + mo.height
      }, t))
    },
    go = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Oo = {
      width: 200,
      height: 200,
      id: "wtf-badge"
    },
    _o = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, go({
        id: Oo.id,
        viewBox: "0 0 " + Oo.width + " " + Oo.height
      }, t))
    },
    wo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var jo = {
      width: 1024,
      height: 1024,
      id: "meudeus-badge"
    },
    ko = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, wo({
        id: jo.id,
        viewBox: "0 0 " + jo.width + " " + jo.height
      }, t))
    },
    No = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var xo = {
      width: 1024,
      height: 1024,
      id: "hahaha-badge"
    },
    Co = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, No({
        id: xo.id,
        viewBox: "0 0 " + xo.width + " " + xo.height
      }, t))
    },
    Po = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var To = {
      width: 1024,
      height: 1024,
      id: "fofo-badge"
    },
    So = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Po({
        id: To.id,
        viewBox: "0 0 " + To.width + " " + To.height
      }, t))
    },
    Eo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Mo = {
      width: 1024,
      height: 1024,
      id: "jajaja-badge"
    },
    Lo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Eo({
        id: Mo.id,
        viewBox: "0 0 " + Mo.width + " " + Mo.height
      }, t))
    },
    Bo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Io = {
      width: 200,
      height: 200,
      id: "kawaii-badge"
    },
    Do = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Bo({
        id: Io.id,
        viewBox: "0 0 " + Io.width + " " + Io.height
      }, t))
    },
    Uo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Fo = {
      width: 512,
      height: 512,
      id: "madremia-badge"
    },
    Ao = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Uo({
        id: Fo.id,
        viewBox: "0 0 " + Fo.width + " " + Fo.height
      }, t))
    },
    zo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Ro = {
      width: 1024,
      height: 1024,
      id: "lindo-badge"
    },
    Wo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, zo({
        id: Ro.id,
        viewBox: "0 0 " + Ro.width + " " + Ro.height
      }, t))
    },
    Vo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var Ho = {
      width: 512,
      height: 512,
      id: "oooh-badge"
    },
    qo = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, Vo({
        id: Ho.id,
        viewBox: "0 0 " + Ho.width + " " + Ho.height
      }, t))
    },
    $o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
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
    Xo = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
    ri = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var oi = {
      id: "settings-icon",
      width: 512,
      height: 512
    },
    ii = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, ri({}, oi, {
        viewBox: "0 0 " + oi.width + " " + oi.height
      }, t), Object(r.h)(wt.Consumer, null, (function(e) {
        return Object(r.h)("title", null, e.settings)
      })))
    },
    ai = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var ci = {
      id: "default-user-icon",
      width: 512,
      height: 512
    },
    ui = function(e) {
      var t = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
      }(e, []);
      return Object(r.h)(Pt, ai({
        id: ci.id,
        viewBox: "0 0 " + ci.width + " " + ci.height
      }, t))
    },
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
    li = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
  var fi = function(e) {
      var t = e.image,
        n = e.username,
        o = function(e, t) {
          var n = {};
          for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n
        }(e, ["image", "username"]);
      return t ? Object(r.h)(jt.Consumer, null, (function(e) {
        return Object(r.h)("img", li({
          className: ni.a.userAvatar,
          src: e.image_service_url + t,
          alt: n
        }, o))
      })) : Object(r.h)(ui, li({
        className: ni.a.userAvatar
      }, o))
    },
    pi = function(e) {
      var t = e.image,
        n = e.displayName,
        o = e.username,
        i = e.isCommunityUser,
        a = e.onLogoutClicked,
        c = function(e) {
          return i ? e.community_url : e.cms_url
        },
        u = function(e) {
          return i ? e.dashbird_community_url : e.dashbird_url
        };
      return Object(r.h)(jt.Consumer, null, (function(e) {
        return Object(r.h)("div", null, Object(r.h)("div", {
          className: ni.a.userOptionsProfile
        }, Object(r.h)(tn, {
          className: ni.a.userProfileLink,
          href: c(e),
          location: "userMenu",
          label: "profile"
        }, Object(r.h)(fi, {
          image: t,
          username: o
        }), Object(r.h)("p", {
          className: ni.a.userProfileName
        }, Object(r.h)("span", {
          className: ni.a.userProfileNameText
        }, n), Object(r.h)(wt.Consumer, null, (function(e) {
          return Object(r.h)("span", {
            className: ni.a.userProfileView
          }, e.view_profile)
        })))), Object(r.h)(tn, {
          className: ni.a.settingsLink,
          href: e.settings_path,
          location: "userMenu",
          label: "settings"
        }, Object(r.h)(ii, null))), Object(r.h)(wt.Consumer, null, (function(t) {
          return Object(r.h)("ul", {
            className: ni.a.userOptionsLinks
          }, Object(r.h)("li", null, Object(r.h)(tn, {
            href: c(e) + e.new_post_path,
            location: "userMenu",
            label: "new post"
          }, t.new_post)), Object(r.h)("li", null, Object(r.h)(tn, {
            href: c(e),
            location: "userMenu",
            label: "drafts"
          }, t.my_drafts)), Object(r.h)("li", null, Object(r.h)(tn, {
            href: u(e),
            location: "userMenu",
            label: "dashboard"
          }, t.dashboard)), Object(r.h)("li", null, Object(r.h)(on, {
            onClick: a,
            location: "userMenu",
            label: "logout"
          }, t.logout)))
        })))
      }))
    },
    hi = function(e) {
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
      }(t, e), si(t, [{
        key: "render",
        value: function(e) {
          var t = e.userInfo,
            n = e.onLogoutClicked;
          return Object(r.h)("div", {
            className: ni.a.userMenu
          }, Object(r.h)(Zn, {
            width: 255,
            location: "topicBar",
            label: "user"
          }, Object(r.h)(qn, null, Object(r.h)(fi, {
            image: t.image,
            username: t.username,
            onTouchStart: this.onTouchStart
          })), Object(r.h)(pi, li({}, t, {
            onLogoutClicked: n
          }))))
        }
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

  function gi(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function Oi(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

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
      function t() {
        return gi(this, t), Oi(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return _i(t, e), yi(t, [{
        key: "render",
        value: function(e) {
          var t = e.count;
          return Object(r.h)("div", {
            className: mi.a.unreadIcon
          }, " ", t, " ")
        }
      }]), t
    }(r.Component),
    ji = function(e) {
      function t() {
        return gi(this, t), Oi(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return _i(t, e), yi(t, [{
        key: "timeAgo",
        value: function(e) {
          var t, n = Date.now() - e.valueOf(),
            r = void 0;
          if (n < 36e5) {
            var o = Math.round(n / 60);
            r = o < 2 ? "1 minute ago" : o + " minutes ago"
          } else if (n < 864e5) {
            var i = Math.round(n / 36e5);
            r = i < 2 ? "1 hour ago" : i + " hours ago"
          } else r = "on " + (t = e, new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }).format(t));
          return r
        }
      }, {
        key: "render",
        value: function(e) {
          var t = e.body,
            n = e.triggered_at;
          return Object(r.h)("li", null, Object(r.h)("div", {
            className: mi.a.notification
          }, Object(r.h)("div", null, t), Object(r.h)("div", null, this.timeAgo(new Date(n)))))
        }
      }]), t
    }(r.Component),
    ki = function(e) {
      function t() {
        return gi(this, t), Oi(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return _i(t, e), yi(t, [{
        key: "render",
        value: function(e) {
          var t = e.unreadNotifications,
            n = void 0 === t ? [] : t,
            o = e.readNotifications,
            i = void 0 === o ? [] : o;
          return Object(r.h)("div", {
            className: mi.a.notifications
          }, Object(r.h)("h2", {
            className: mi.a.notificationsTitle
          }, "Notifications"), Object(r.h)("div", {
            className: mi.a.unreadTitle
          }, Object(r.h)("h3", null, "Unread"), n.length > 0 ? Object(r.h)(wi, {
            count: n.length
          }) : ""), n.length > 0 ? Object(r.h)("ul", null, n.map((function(e) {
            return Object(r.h)(ji, e)
          }))) : Object(r.h)("div", null, " No unread notifications. "), Object(r.h)("h3", null, "Read"), i.length > 0 ? Object(r.h)("ul", null, i.map((function(e) {
            return Object(r.h)(ji, e)
          }))) : Object(r.h)("div", null, " No read notifications. "))
        }
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
    xi = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };

  function Ci(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function Pi(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

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

  function Si(e, t) {
    var n = {};
    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
  }
  var Ei = void 0;
  "undefined" != typeof window && (Ei = n(18));
  var Mi = function(e) {
      var t = e.image,
        n = e.username,
        o = e.unreadNotificationsCount,
        i = Si(e, ["image", "username", "unreadNotificationsCount"]);
      return Object(r.h)("div", {
        className: vi.a.userAvatarContainer
      }, t ? Object(r.h)(jt.Consumer, null, (function(e) {
        return Object(r.h)("img", xi({
          className: vi.a.userAvatar,
          src: e.image_service_url + t,
          alt: n
        }, i))
      })) : Object(r.h)(ui, xi({
        className: vi.a.userAvatar
      }, i)), o > 0 && Object(r.h)("span", {
        className: vi.a.userAvatarUnread
      }))
    },
    Li = function(e) {
      var t = e.image,
        n = e.displayName,
        o = e.username,
        i = e.isCommunityUser,
        a = e.onLogoutClicked,
        c = e.onUserMenuClicked,
        u = e.unreadNotifications,
        s = e.readNotifications,
        l = e.isVisible,
        f = function(e) {
          return i ? e.community_url : e.cms_url
        },
        p = function(e) {
          return i ? e.dashbird_community_url : e.dashbird_url
        };
      return Object(r.h)(jt.Consumer, null, (function(e) {
        return Object(r.h)("div", null, Object(r.h)("div", {
          className: vi.a.userMenu
        }, Object(r.h)("div", {
          className: vi.a.userOptionsProfile
        }, Object(r.h)(tn, {
          className: vi.a.userProfileLink,
          href: f(e),
          location: "userMenu",
          label: "profile"
        }, Object(r.h)(Mi, {
          image: t,
          username: o
        }), Object(r.h)("p", {
          className: vi.a.userProfileName
        }, Object(r.h)("span", {
          className: vi.a.userProfileNameText
        }, n))), Object(r.h)(xn, {
          onClick: c,
          "aria-expanded": String(l),
          "aria-label": "close"
        }, Object(r.h)(ro, {
          width: 22,
          height: 22,
          "aria-hidden": !0
        }))), Object(r.h)(wt.Consumer, null, (function(t) {
          return Object(r.h)("ul", {
            className: vi.a.userOptionsLinks
          }, Object(r.h)("li", null, Object(r.h)(tn, {
            href: f(e) + e.new_post_path,
            location: "userMenu",
            label: "new post"
          }, t.new_post)), Object(r.h)("li", null, Object(r.h)(tn, {
            href: f(e),
            location: "userMenu",
            label: "drafts"
          }, t.my_drafts)), Object(r.h)("li", null, Object(r.h)(tn, {
            href: p(e),
            location: "userMenu",
            label: "dashboard"
          }, t.dashboard)), Object(r.h)("li", null, Object(r.h)(tn, {
            href: e.settings_path,
            location: "userMenu",
            label: "settings"
          }, "Account Settings")), Object(r.h)("li", null, Object(r.h)(on, {
            onClick: a,
            location: "userMenu",
            label: "logout"
          }, t.logout)))
        }))), Object(r.h)(ki, {
          unreadNotifications: u,
          readNotifications: s
        }))
      }))
    },
    Bi = function(e) {
      function t() {
        return Ci(this, t), Pi(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return Ti(t, e), Ni(t, [{
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isVisible && window.innerWidth >= parseInt(an.breakpointSticky, 10)) {
            var e = this.container.getBoundingClientRect().top;
            this.container.style.maxHeight = document.documentElement.clientHeight - e + "px"
          }
        }
      }, {
        key: "render",
        value: function(e) {
          var t = this,
            n = e.isVisible,
            o = e.userInfo,
            i = Si(e, ["isVisible", "userInfo"]);
          return Object(r.h)("section", {
            className: vi.a.userMenuContainer + "  " + (this.props.isVisible ? vi.a.visible : ""),
            id: "js-user-menu",
            ref: function(e) {
              return t.container = e
            }
          }, this.props.isVisible && Object(r.h)(Ei, {
            focusTrapOptions: {
              clickOutsideDeactivates: !0
            }
          }, Object(r.h)(Li, xi({}, o, i, {
            isVisible: n
          }))))
        }
      }]), t
    }(r.Component),
    Ii = hn(function(e) {
      function t(e) {
        Ci(this, t);
        var n = Pi(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.state = {
          unreadNotifications: [],
          readNotifications: []
        }, n
      }
      return Ti(t, e), Ni(t, [{
        key: "componentDidMount",
        value: function() {
          var e = this;
          this.fetchNotifications(this.props.userInfo.id).then((function(t) {
            e.updateNotificationsState(t)
          })).catch((function(e) {
            console.log(e)
          }))
        }
      }, {
        key: "fetchNotifications",
        value: function(e) {
          return fetch(this.props.bfURL + "/notification-api/v1/notifications?user_id=" + e, {
            credentials: "include"
          }).then((function(e) {
            return e.json()
          })).then((function(e) {
            return e.results
          }))
        }
      }, {
        key: "updateNotificationsState",
        value: function(e) {
          var t = e.filter((function(e) {
              return null === e.read_at
            })),
            n = e.filter((function(e) {
              return null !== e.read_at
            }));
          this.setState({
            unreadNotifications: t,
            readNotifications: n
          })
        }
      }, {
        key: "render",
        value: function(e) {
          var t = e.isVisible,
            n = e.userInfo,
            o = e.onLogoutClicked,
            i = e.onUserMenuClicked;
          return Object(r.h)("div", null, Object(r.h)(xn, {
            onClick: i,
            "aria-expanded": String(t),
            "aria-label": "avatar"
          }, Object(r.h)(Mi, {
            image: n.image,
            username: n.username,
            onTouchStart: this.onTouchStart,
            unreadNotificationsCount: this.state.unreadNotifications.length
          })), Object(r.h)(Bi, {
            isVisible: t,
            userInfo: n,
            onLogoutClicked: o,
            onUserMenuClicked: i,
            unreadNotifications: this.state.unreadNotifications,
            readNotifications: this.state.readNotifications
          }))
        }
      }]), t
    }(r.Component)),
    Di = n(16),
    Ui = n.n(Di),
    Fi = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
      function t(e) {
        zi(this, t);
        var n = Ri(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.state = {
          renderDev: !1
        }, n
      }
      return Wi(t, e), Ai(t, [{
        key: "componentDidMount",
        value: function() {
          "dev" !== window.BZFD.Config.env && "stage" !== window.BZFD.Config.env || this.setState({
            renderDev: !0
          })
        }
      }, {
        key: "render",
        value: function() {
          return this.state.renderDev ? Object(r.h)("div", null, this.props.notifUserMenu) : Object(r.h)("div", null, this.props.userMenu)
        }
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
          return function() {
            Yt({
              location: "skipNav"
            })
          }
        }
      }, {
        key: "focusHandler",
        value: function() {
          var e = this;
          return function() {
            e.impressionTracked || Jt({
              location: "skipNav"
            }), e.impressionTracked = !0
          }
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
    Ki = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
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
      value: function() {
        var e = this.stickyContainer.clientHeight,
          t = this.stickyContainer.getBoundingClientRect().y;
        return this.state.isSticking ? e : e + t
      }
    }, {
      key: "toggleMoreNav",
      value: function(e) {
        var t = e.forceVisible,
          n = void 0 === t ? !this.state.showMoreNav : t;
        this.setState(Ki({}, this.state, {
          showMoreNav: n
        }))
      }
    }, {
      key: "toggleNotifMenu",
      value: function(e) {
        var t = e.forceVisible,
          n = void 0 === t ? !this.state.showNotifMenu : t;
        this.setState(Ki({}, this.state, {
          showNotifMenu: n
        }))
      }
    }, {
      key: "onLogout",
      value: function() {
        it.signout().then((function() {
          return window.location.reload()
        }))
      }
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
      value: function() {
        window.removeEventListener("scroll", this.onScroll)
      }
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