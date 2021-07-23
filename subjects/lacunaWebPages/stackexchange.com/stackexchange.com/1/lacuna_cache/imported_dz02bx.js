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
    return function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[331:555]", functionData => eval(functionData))}
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
      return t = "string" == typeof t ? function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1259:1315]", functionData => eval(functionData))}() : t, s(this, t, r), this
    }, a
  }
  t = t || this;
  var a = t.klass,
    r = "function",
    l = /.*/,
    u = "prototype";
  return e.noConflict = function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1482:1516]", functionData => eval(functionData))}, e
}), StackExchange.topbar = function() {
  function t(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1576:1652]", functionData => eval(functionData))}

  function e(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1670:1800]", functionData => eval(functionData))}

  function i() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1817:1877]", functionData => eval(functionData))}

  function n(e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[1895:2163]", functionData => eval(functionData))}

  function s() {
    var t = $(".js-top-bar"),
      e = $(".js-search-field"),
      i = !1;
    e.on({
      "focus": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2296:2340]", functionData => eval(functionData))},
      "blur": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2367:2440]", functionData => eval(functionData))},
      "keydown": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2471:2516]", functionData => eval(functionData))}
    })
  }

  function o() {
    function t(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2564:2618]", functionData => eval(functionData))}
    var e = $(".js-searchbar"),
      i = $(".js-searchbar-trigger a"),
      n = $(".js-search-field"),
      s = "topbar-icon-on",
      o = "searchbar__open",
      a = !0;
    i.on("mousedown", function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2828:2860]", functionData => eval(functionData))}).on("click", function(e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[2886:2951]", functionData => eval(functionData))});
    var r = StackExchange.helpers.DelayedReaction(function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[3015:3034]", functionData => eval(functionData))}, 0);
    $(".js-searchbar").focusout(r.trigger).focusin(r.cancel)
  }

  function a() {
    var t = $("#js-gdpr-consent-banner"),
      e = t.find(".js-notice-close");
    e.click(function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[3226:3597]", functionData => eval(functionData))})
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
      "isLoading": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[3921:3978]", functionData => eval(functionData))},
      "isLoaded": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[4009:4054]", functionData => eval(functionData))},
      "isVisible": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[4086:4198]", functionData => eval(functionData))},
      "toggle": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[4231:4743]", functionData => eval(functionData))},
      "showOrHide": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[4777:4911]", functionData => eval(functionData))},
      "loadChildContent": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[4950:5405]", functionData => eval(functionData))},
      "loadDialog": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[5438:6312]", functionData => eval(functionData))},
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[6344:6346]", functionData => eval(functionData))},
      "getLoadingPlaceholder": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[6390:6660]", functionData => eval(functionData))},
      "positionDialogUnderButton": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[6708:7210]", functionData => eval(functionData))},
      "fetchUrl": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[7241:7420]", functionData => eval(functionData))},
      "markAsRead": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[7453:7576]", functionData => eval(functionData))},
      "handleRealtimeMessage": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[7620:7662]", functionData => eval(functionData))},
      "clearLoadedDialog": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[7702:7802]", functionData => eval(functionData))}
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
        this.$button = $(this.selector), this.$button.click(function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[8247:8290]", functionData => eval(functionData))}), this.showsOnMouseOver && this.$button.mouseover(function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[8352:8393]", functionData => eval(functionData))}), this.onClass = "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass
      },
      "toggle": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[8511:8666]", functionData => eval(functionData))},
      "showOnMouseOver": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[8704:8944]", functionData => eval(functionData))},
      "isOn": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[8971:9031]", functionData => eval(functionData))},
      "markAsRead": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[9064:9253]", functionData => eval(functionData))},
      "dequeuePendingUnreadCount": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[9301:9451]", functionData => eval(functionData))},
      "setUnreadCount": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[9489:9888]", functionData => eval(functionData))},
      "addUnreadClass": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[9925:10023]", functionData => eval(functionData))},
      "handleRealtimeMessage": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[10067:10069]", functionData => eval(functionData))}
    }),
    u = r.extend({
      "url": "/topbar/site-switcher",
      "cssClass": "siteSwitcher-dialog",
      "$searchItems": null
    }).methods({
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[10250:11186]", functionData => eval(functionData))},
      "doSearch": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[11221:11811]", functionData => eval(functionData))},
      "filterSites": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[11846:12069]", functionData => eval(functionData))}
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
      "handleRealtimeMessage": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[12557:12614]", functionData => eval(functionData))}
    }),
    g = r.extend({
      "url": "/topbar/achievements",
      "cssClass": "achievements-dialog"
    }).methods({
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[12766:12864]", functionData => eval(functionData))},
      "alignRep": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[12895:13150]", functionData => eval(functionData))},
      "bindDateGroupToggles": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[13193:13654]", functionData => eval(functionData))},
      "displayUtcTime": function() {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[13691:14096]", functionData => eval(functionData))}
    }),
    f = l.extend({
      "name": "Achievements",
      "selector": ".js-achievements-button",
      "dialog": new g,
      "unreadCountPrefix": "+",
      "showsOnMouseOver": !0
    }).methods({
      "handleRealtimeMessage": function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[14343:14500]", functionData => eval(functionData))}
    }),
    p = [],
    m = [];
  return {
    "init": function() {
      window.devicePixelRatio >= 1.5 && $(".js-avatar-me").attr("src", function(t, e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[14655:14707]", functionData => eval(functionData))});
      var t = new c,
        n = new f;
      p.push(t), p.push(n), p.push(new h), $(document).click(function(t) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[14823:14917]", functionData => eval(functionData))}), $.get("/topbar/get-unread-counts", function(e) {lacuna_lazy_load("lacuna_cache/imported_dz02bx.js[14967:15046]", functionData => eval(functionData))});
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