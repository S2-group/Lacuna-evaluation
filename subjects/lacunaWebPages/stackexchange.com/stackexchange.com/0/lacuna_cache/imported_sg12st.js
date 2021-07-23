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
    return function() {
      var n = this.supr;
      this.supr = i[u][t];
      var s = {}.fabricatedUndefined,
        o = s;
      try {
        o = e.apply(this, arguments)
      } finally {
        this.supr = n
      }
      return o
    }
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
      return t = "string" == typeof t ? function() {
        var i = {};
        return i[t] = e, i
      }() : t, s(this, t, r), this
    }, a
  }
  t = t || this;
  var a = t.klass,
    r = "function",
    l = /.*/,
    u = "prototype";
  return e.noConflict = function() {
    return t.klass = a, this
  }, e
}), StackExchange.topbar = function() {
  function t(t) {
    StackExchange.options.enableLogging && console.log("topbar: " + t)
  }

  function e(t) {
    for (var e = 0; e < p.length; e++) {
      var i = p[e].$button;
      if (i && i[0] == t) return !0
    }
    return !1
  }

  function i() {
    for (var t = 0; t < p.length; t++) p[t].toggle(!1)
  }

  function n(e) {
    var i;
    if (e && (i = JSON.parse(e))) {
      t("realtime message - " + e);
      for (var n in i)
        for (var s = 0; s < p.length; s++)
          if (n == p[s].name) {
            p[s].handleRealtimeMessage(i[n]);
            break
          }
    }
  }

  function s() {
    var t = $(".js-top-bar"),
      e = $(".js-search-field"),
      i = !1;
    e.on({
      "focus": function() {
        t.addClass("_search-open")
      },
      "blur": function() {
        i ? (e.focus(), i = !1) : t.removeClass("_search-open")
      },
      "keydown": function(t) {
        27 == t.keyCode && e.blur()
      }
    })
  }

  function o() {
    function t(t) {
      i.toggleClass(s, t), e.toggleClass(o, t)
    }
    var e = $(".js-searchbar"),
      i = $(".js-searchbar-trigger a"),
      n = $(".js-search-field"),
      s = "topbar-icon-on",
      o = "searchbar__open",
      a = !0;
    i.on("mousedown", function() {
      a = !e.hasClass(o)
    }).on("click", function(e) {
      e.preventDefault(), a && (t(!0), n.focus()), a = !0
    });
    var r = StackExchange.helpers.DelayedReaction(function() {
      t(!1)
    }, 0);
    $(".js-searchbar").focusout(r.trigger).focusin(r.cancel)
  }

  function a() {
    var t = $("#js-gdpr-consent-banner"),
      e = t.find(".js-notice-close");
    e.click(function() {
      e.prop("disabled", !0), $.ajax({
        "method": "POST",
        "url": "/accounts/accept-gdpr-consent-banner",
        "data": {
          "fkey": settings.fkey
        },
        "dataType": "json",
        "success": function(e) {
          e && t.remove()
        },
        "complete": function() {
          e.prop("disabled", !1)
        }
      })
    })
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
      "isLoading": function() {
        return null != this.$loadingPlaceholder
      },
      "isLoaded": function() {
        return null != this.$dialog
      },
      "isVisible": function() {
        var t = this.$dialog || this.$loadingPlaceholder;
        return null != t && t.is(":visible")
      },
      "toggle": function(t, e) {
        if ("boolean" != typeof t) throw new Error("showOrHide is a required parameter");
        if (!t) {
          if (this.isLoading()) return this.showOrHide(!1), void 0;
          if (!this.isLoaded()) return
        }
        if (this.isLoaded() || this.isLoading() ? (t || e || !this.hasRead || this.markAsRead(), this.showOrHide(t)) : this.$preloadedDialog ? this.loadChildContent() : this.loadDialog(), t)
          for (var i = 0; i < p.length; i++) this.button != p[i] && p[i].toggle(!1, e)
      },
      "showOrHide": function(t) {
        var e = this.$dialog || this.$loadingPlaceholder;
        e && e.toggle(t), t && this.$dialog && (this.hasRead = !0)
      },
      "loadChildContent": function() {
        var t = this.$preloadedDialog.find(".child-content");
        if (this.$dialog = this.$preloadedDialog, this.positionDialogUnderButton(), this.showOrHide(!0), this.url) {
          $("<div>", {
            "class": "child-content-loading"
          }).append(StackExchange.helpers.getSpinnerImg()).append(t);
          var e = this;
          this.fetchUrl().done(function(i) {
            t.html(i), e.afterLoad()
          })
        }
      },
      "loadDialog": function() {
        if (!this.isLoading()) {
          this.$loadingPlaceholder = this.getLoadingPlaceholder(), $(".js-topbar-dialog-corral").append(this.$loadingPlaceholder), this.positionDialogUnderButton(), this.showOrHide(!0);
          var t = this;
          this.fetchUrl().done(function(e) {
            if (e.length) {
              t.$dialog = $(e), $(".js-topbar-dialog-corral").append(t.$dialog), t.afterLoad();
              var i = t.$loadingPlaceholder.is(":visible");
              t.positionDialogUnderButton(), t.showOrHide(i)
            } else StackExchange.helpers.showErrorPopup(t.button.$button.parent(), "An error occurred while loading - please try again.")
          }).fail(function(t, e, i) {
            console.log(i)
          }).always(function() {
            t.$loadingPlaceholder.remove(), t.$loadingPlaceholder = null
          })
        }
      },
      "afterLoad": function() {},
      "getLoadingPlaceholder": function() {
        var t = $("<div/>").append(StackExchange.helpers.getSpinnerImg()).html(),
          e = ['<div class="topbar-dialog ', this.cssClass, ' dno">', '<div class="header">', t, "</div>", '<div class="modal-content"/>', "</div>"];
        return $(e.join(""))
      },
      "positionDialogUnderButton": function() {
        for (var t = this.button.$button.outerHeight(), e = this.$dialog || this.$loadingPlaceholder, i = e.parent(); i.not("body").length && "static" === i.css("position");) i = i.parent();
        i = i.length ? i : $("body");
        var n = this.button.$button.offset().left - i.offset().left;
        n = i.outerWidth() - n - this.button.$button.outerWidth();
        var s = {
          "top": t,
          "right": n
        };
        (this.$dialog || this.$loadingPlaceholder).css(s)
      },
      "fetchUrl": function() {
        t("fetching " + this.url);
        var e = $.ajax({
          "type": "GET",
          "url": this.url,
          "dataType": "html"
        });
        return e
      },
      "markAsRead": function() {
        this.button.markAsRead(), this.isLoaded() && this.$dialog.find(".unread-item").removeClass("unread-item")
      },
      "handleRealtimeMessage": function() {
        this.clearLoadedDialog()
      },
      "clearLoadedDialog": function() {
        this.isLoaded() && (this.$dialog.remove(), this.$dialog = null, this.hasRead = !1)
      }
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
        this.$button = $(this.selector), this.$button.click(function() {
          return t.toggle(), !1
        }), this.showsOnMouseOver && this.$button.mouseover(function() {
          t.showOnMouseOver()
        }), this.onClass = "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass
      },
      "toggle": function(t, e) {
        t = "boolean" == typeof t ? t : !this.$button.hasClass(this.onClass), this.$button.toggleClass(this.onClass, t), this.dialog.toggle(t, e)
      },
      "showOnMouseOver": function() {
        for (var t = !1, e = 0; e < p.length; e++) {
          var i = p[e];
          if (i != this && i.showsOnMouseOver && i.isOn()) {
            t = !0;
            break
          }
        }
        t && this.toggle(!0, !0)
      },
      "isOn": function() {
        return this.$button.hasClass(this.onClass)
      },
      "markAsRead": function() {
        this.$button.find(".unread-count").fadeOut();
        var t = this.$button.data("unread-class");
        t && this.$button.removeClass(t), this.dequeuePendingUnreadCount()
      },
      "dequeuePendingUnreadCount": function() {
        this.queuedUnreadCount && (this.setUnreadCount(this.queuedUnreadCount), this.queuedUnreadCount = 0, this.dialog.clearLoadedDialog())
      },
      "setUnreadCount": function(t) {
        if (void 0 === t);
        else if (0 >= t) this.queuedUnreadCount = 0, this.isOn() || this.markAsRead();
        else if (t > 0)
          if (this.isOn()) this.queuedUnreadCount = t;
          else {
            var e = this.$button.find(".unread-count");
            e.text(this.unreadCountPrefix + t).fadeIn(), this.addUnreadClass(), this.dialog.clearLoadedDialog()
          }
      },
      "addUnreadClass": function() {
        var t = this.$button.data("unread-class");
        t && this.$button.addClass(t)
      },
      "handleRealtimeMessage": function() {}
    }),
    u = r.extend({
      "url": "/topbar/site-switcher",
      "cssClass": "siteSwitcher-dialog",
      "$searchItems": null
    }).methods({
      "afterLoad": function() {
        this.$dialog.find("#js-site-filter-txt").typeWatch({
          "highlight": !1,
          "wait": 250,
          "captureLength": -1,
          "callback": $.proxy(this.filterSites, this)
        }), this.$searchItems = this.$dialog.find(".js-other-sites li").clone().map(function() {
          return {
            "title": $(".site-icon", this).attr("title").toLowerCase(),
            "description": $(".site-desc", this).text().toLowerCase(),
            "hostname": $("a", this).first().attr("href"),
            "li": this
          }
        });
        var t = this.$dialog;
        this.$dialog.find("#js-site-filter-txt").focus(function() {
          var e = t.offset().top + t.height(),
            i = t.find(".other-sites li:nth-child(2)"),
            n = i.offset().top + i.height();
          n > e && t.animate({
            "scrollTop": t.scrollTop() + n - e
          }, 750)
        }), this.supr()
      },
      "doSearch": function(t, e) {
        var i;
        e = e.toLowerCase();
        var n = [];
        return $.each(t, function(t, i) {
          var s = {
              "index": t,
              "li": i.li,
              "item": i
            },
            o = i.title.indexOf(e);
          i.title == e ? s.priority = 1 : 0 == o ? s.priority = 2 : o > -1 ? s.priority = 3 : i.description.indexOf(e) > -1 ? s.priority = 4 : i.hostname.indexOf(e) > -1 && (s.priority = 5), s.priority && n.push(s)
        }), i = n.sort(function(t, e) {
          return t.priority - e.priority || t.index - e.index
        })
      },
      "filterSites": function(t) {
        var e = $(".js-other-sites"),
          i = this.$searchItems;
        e.empty(), "" != t && (i = this.doSearch(i, t, !0)), e.append(i.map(function(t) {
          return this && this.li || t.li
        }))
      }
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
      "handleRealtimeMessage": function(t) {
        this.setUnreadCount(t.UnreadInboxCount)
      }
    }),
    g = r.extend({
      "url": "/topbar/achievements",
      "cssClass": "achievements-dialog"
    }).methods({
      "afterLoad": function() {
        this.alignRep(), this.bindDateGroupToggles(), this.displayUtcTime(), this.supr()
      },
      "alignRep": function() {
        var t = this.$dialog.find(".js-items .js-faux-column"),
          e = 0;
        t.filter(".js-rep-change").each(function() {
          var t = $.trim($(this).text()).length;
          t > e && (e = t)
        }), e > 0 && t.width(6 * e)
      },
      "bindDateGroupToggles": function() {
        this.$dialog.find(".js-date-group-toggle").click(function() {
          var t = $(this),
            e = t.closest(".js-date-group"),
            i = e.find(".js-items"),
            n = e.find(".rep-site-container");
          t.find(".date-group-toggle").toggleClass("toggle-hidden"), i.add(n).fadeToggle("fast")
        }), this.$dialog.find(".rep-site-container").on("click", function(t) {
          t.stopImmediatePropagation()
        })
      },
      "displayUtcTime": function() {
        var t = this.$dialog,
          e = function() {
            var e = new Date;
            e.setTime(e.getTime() + 1e3 * StackExchange.options.serverTimeOffsetSec);
            var i = e.getUTCHours(),
              n = e.getUTCMinutes();
            10 > i && (i = "0" + i), 10 > n && (n = "0" + n), t.find(".js-utc-time").text(i + ":" + n)
          };
        e(), setInterval(e, 6e4)
      }
    }),
    f = l.extend({
      "name": "Achievements",
      "selector": ".js-achievements-button",
      "dialog": new g,
      "unreadCountPrefix": "+",
      "showsOnMouseOver": !0
    }).methods({
      "handleRealtimeMessage": function(t) {
        var e = 0 === (t.UnreadRepCount || 0) && t.UnreadNonRepCount > 0;
        e ? this.addUnreadClass() : this.setUnreadCount(t.UnreadRepCount)
      }
    }),
    p = [],
    m = [];
  return {
    "init": function() {
      window.devicePixelRatio >= 1.5 && $(".js-avatar-me").attr("src", function(t, e) {
        return e.replace("?s=24", "?s=48")
      });
      var t = new c,
        n = new f;
      p.push(t), p.push(n), p.push(new h), $(document).click(function(t) {
        e(t.target) || $.contains($(".js-topbar-dialog-corral")[0], t.target) || i()
      }), $.get("/topbar/get-unread-counts", function(e) {
        e && (t.handleRealtimeMessage(e), n.handleRealtimeMessage(e))
      });
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