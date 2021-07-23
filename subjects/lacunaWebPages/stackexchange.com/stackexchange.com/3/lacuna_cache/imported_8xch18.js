! function(t, e, i) {
  "function" == typeof define ? define(i) : "undefined" != typeof module ? module.exports = i() : e[t] = i(e)
}("klass", this, function(t) {
  function e(t) {
    return o.call(i(t) ? t : function() {}, t, 1)
  }

  function i(t) {
    return typeof t === r
  }

  function n(t, e, i) {
    return null
  }

  function s(t, e, s) {
    for (var o in e) e.hasOwnProperty(o) && (t[o] = i(e[o]) && i(s[u][o]) && l.test(e[o]) ? n(o, e[o], s) : e[o])
  }

  function o(t, e) {
    function n() {}

    function a() {
      this.initialize ? this.initialize.apply(this, arguments) : (e || h && r.apply(this, arguments), d.apply(this, arguments))
    }
    n[u] = this[u];
    var r = this,
      l = new n,
      h = i(t),
      d = h ? t : this,
      c = h ? {} : t;
    return a.methods = function(t) {
      return s(l, t, r), a[u] = l, this
    }, a.methods.call(a, c).prototype.constructor = a, a.extend = o, a[u].implement = a.statics = function(t, e) {
      return t = "string" == typeof t ? null() : t, s(this, t, r), this
    }, a
  }
  t = t || this;
  var a = t.klass,
    r = "function",
    l = /.*/,
    u = "prototype";
  return e.noConflict = null, e
}), StackExchange.topbar = function() {
  

  

  

  

  function s() {
    var t = $(".js-top-bar"),
      e = $(".js-search-field"),
      i = !1;
    e.on({
      "focus": null,
      "blur": null,
      "keydown": null
    })
  }

  function o() {
    
    var e = $(".js-searchbar"),
      i = $(".js-searchbar-trigger a"),
      n = $(".js-search-field"),
      s = "topbar-icon-on",
      o = "searchbar__open",
      a = !0;
    i.on("mousedown", null).on("click", null);
    var r = StackExchange.helpers.DelayedReaction(null, 0);
    $(".js-searchbar").focusout(r.trigger).focusin(r.cancel)
  }

  function a() {
    var t = $("#js-gdpr-consent-banner"),
      e = t.find(".js-notice-close");
    e.click(null)
  }
  var r = klass({
      "name": "",
      "url": "",
      "cssClass": "",
      "button": null,
      "$dialog": null,
      "$loadingPlaceholder": null,
      "$preloadedDialog": null,
      "hasRead": !1
    }).statics({
      "$corral": $(".js-topbar-dialog-corral")
    }).methods({
      "isLoading": null,
      "isLoaded": null,
      "isVisible": null,
      "toggle": null,
      "showOrHide": null,
      "loadChildContent": null,
      "loadDialog": null,
      "afterLoad": null,
      "getLoadingPlaceholder": null,
      "positionDialogUnderButton": null,
      "fetchUrl": null,
      "markAsRead": null,
      "handleRealtimeMessage": null,
      "clearLoadedDialog": null
    }),
    l = klass({
      "name": "",
      "selector": "",
      "dialog": null,
      "$button": null,
      "onClass": "",
      "unreadCountPrefix": "",
      "queuedUnreadCount": 0,
      "showsOnMouseOver": !1
    }).methods({
      "initialize": function() {
        this.dialog.name = name, this.dialog.button = this, m.push(this.dialog);
        var t = this;
        this.$button = $(this.selector), this.$button.click(null), this.showsOnMouseOver && this.$button.mouseover(null), this.onClass = "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass
      },
      "toggle": null,
      "showOnMouseOver": null,
      "isOn": null,
      "markAsRead": null,
      "dequeuePendingUnreadCount": null,
      "setUnreadCount": null,
      "addUnreadClass": null,
      "handleRealtimeMessage": null
    }),
    u = r.extend({
      "url": "/topbar/site-switcher",
      "cssClass": "siteSwitcher-dialog",
      "$searchItems": null
    }).methods({
      "afterLoad": null,
      "doSearch": null,
      "filterSites": null
    }),
    h = l.extend({
      "name": "SiteSwitcher",
      "selector": ".js-site-switcher-button",
      "dialog": new u,
      "showsOnMouseOver": !1,
      "onClass": "icon-site-switcher-on"
    }),
    d = r.extend({
      "url": "/topbar/inbox",
      "cssClass": "inbox-dialog"
    }),
    c = l.extend({
      "name": "Inbox",
      "selector": ".js-inbox-button",
      "dialog": new d,
      "showsOnMouseOver": !1
    }).methods({
      "handleRealtimeMessage": null
    }),
    g = r.extend({
      "url": "/topbar/achievements",
      "cssClass": "achievements-dialog"
    }).methods({
      "afterLoad": null,
      "alignRep": null,
      "bindDateGroupToggles": null,
      "displayUtcTime": null
    }),
    f = l.extend({
      "name": "Achievements",
      "selector": ".js-achievements-button",
      "dialog": new g,
      "unreadCountPrefix": "+",
      "showsOnMouseOver": !0
    }).methods({
      "handleRealtimeMessage": null
    }),
    p = [],
    m = [];
  return {
    "init": function() {
      window.devicePixelRatio >= 1.5 && $(".js-avatar-me").attr("src", null);
      var t = new c,
        n = new f;
      p.push(t), p.push(n), p.push(new h), $(document).click(null), $.get("/topbar/get-unread-counts", null);
      var r = document.body.style;
      "justifyContent" in r || "WebkitJustifyContent" in r || $(".top-bar *:visible").css({
        "display": "inline-block",
        "white-space": "nowrap",
        "vertical-align": "middle"
      }).not(".-logo, .-logo *, svg, .-badges *").css("width", "auto"), s(), o(), a()
    },
    "hideAll": i,
    "handleRealtimeMessage": n
  }
}();