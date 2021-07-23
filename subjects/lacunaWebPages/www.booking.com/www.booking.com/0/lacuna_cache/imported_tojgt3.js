var _i_ = this._i_ || function() {},
  _r_ = this._r_ || function(e) {
    return e
  },
  _sp_ = this._sp_ || function(e) {
    B.et.customGoal("cDPPESHbfNFVTAYZSQDZET", 1), B.reportError({
      message: "SPDR function called - " + e
    }, "SPDR")
  };
b.env.scripts_tracking.lp = {
  loaded: 1,
  run: 0
};
var b = window.b || {};
b.map = b.map || {}, B.define("component/dropdown", function(e, t, i) {
    _i_("b71:5fd45c52");
    var n = e("component"),
      a = e("click-out");
    i.exports = n.extend({
      init: function() {
        _i_("b71:efea29e2"), this.$trigger = this.$el.find('[data-dropdown-trigger], [data-dropdown-trigger=""]'), this.$menu = this.$el.find('[data-dropdown-menu], [data-dropdown-menu=""]'), this.addEventListeners(), this.configure(), _r_()
      },
      addEventListeners: function() {
        _i_("b71:89b08c45"), this.$el.find('[data-dropdown-close], [data-dropdown-close=""]').click(this.closeClick.bind(this)), this.$trigger.click(this.triggerClick.bind(this)), _r_()
      },
      configure: function() {
        _i_("b71:9341f423"), this.$menu.hasClass("g-hidden") && (this.hideByClass = "g-hidden"), _r_()
      },
      closeClick: function() {
        _i_("b71:faa87e41"), this.hide(), _r_()
      },
      triggerClick: function(e) {
        _i_("b71:bd95bf03"), e.preventDefault(), this.toggle(), _r_()
      },
      clickedOut: function() {
        _i_("b71:faa87e411"), this.hide(), _r_()
      },
      toggle: function() {
        _i_("b71:daebae3d"), this.visible ? this.hide() : this.show(), _r_()
      },
      show: function() {
        _i_("b71:5fd5efdd"), this.visible || (this.visible = !0, this.hideByClass ? this.$menu.removeClass(this.hideByClass) : this.$menu.show(), this.$el.trigger("show.dropdown"), this.clickOutMonitorId = a.addMonitor(this.$menu, this.clickedOut.bind(this))), _r_()
      },
      hide: function() {
        _i_("b71:505d4377"), this.visible && (this.visible = !1, this.hideByClass ? this.$menu.addClass(this.hideByClass) : this.$menu.hide(), this.$el.trigger("hide.dropdown"), this.clickOutMonitorId && (a.removeMonitor(this.clickOutMonitorId), this.clickOutMonitorId = void 0)), _r_()
      }
    }), _r_()
  }), $(function() {
    if (_i_("b71:52718e00"), "city" != b.env.b_action || $(".lp_sb_trigger").is("[data-tab-target]")) return _r_();
    $(".lp_sb_trigger").on("click", function(e) {
      _i_("b71:eb4a4fe0"), e.preventDefault(), $("#header_search_btn").click(), _r_()
    }), _r_()
  }),
  function(a) {
    "use strict";
    _i_("b71:0c71c0ed"), B.define("component/seo/more_relevant_nearby_cities", function(e, t, i) {
      _i_("b71:b1d72ab3");
      var n = e("component");
      i.exports = n.extend({
        init: function() {
          _i_("b71:344eb3bc"), this.$scrollEl = this.$el.find("[data-top-cities-scroll]"), this.$el.on("click", "[data-top-cities-nav]", {
            component: this
          }, this.scrollPage), _r_()
        },
        scrollPage: function(e) {
          _i_("b71:5fa910d6"), e.preventDefault();
          var t = e.data.component,
            i = a(this),
            n = a(i.attr("href").replace(/.*?#/, "#")).position();
          null != n && t.$scrollEl.animate({
            scrollLeft: n.left + "px"
          }), _r_()
        }
      }), _r_()
    }), _r_()
  }(B.require("jquery")),
  function() {
    "use strict";
    _i_("b71:2f679b1d"), B.define("component/seo/top-accommodations", function(e, t, i) {
      _i_("b71:0538c6f4");
      var n = e("component");
      i.exports = n.extend({
        init: function() {
          if (_i_("b71:741e0e6d"), !this.$el.find("[data-acc-active]").length) return _r_();
          this.$el.on("click", "[data-acc-control]", this.setTabToActiveCb.bind(this)), this.setTabToActive({
            target: this.$el.find("[data-acc-active]")
          }), _r_()
        },
        setTabToActive: function(e) {
          _i_("b71:bae88572");
          var t = $(e.target),
            i = t.prop("href").replace(/.*?#/, "#");
          this.$el.find("[data-acc-list]").hide(), this.$el.find(i).show(), this.$el.find("[data-acc-control]").removeClass("top-accom__link--active active"), t.addClass("top-accom__link--active active"), _r_()
        },
        setTabToActiveCb: function(e) {
          _i_("b71:3145d389"), e.preventDefault(), this.setTabToActive(e), _r_()
        }
      }), _r_()
    }), B.define("component/seo/top-accommodations-snap", function(e, t, i) {
      _i_("b71:d62c119c");
      var n = e("component");
      i.exports = n.extend({
        _timer: !1,
        _touchend: !1,
        _posArray: [],
        init: function() {
          _i_("b71:6bef8a86"), this.bindScrollEvents(), _r_()
        },
        bindScrollEvents: function() {
          _i_("b71:0bfbe431"), this.$el.on("scroll", this.scrollTriggered.bind(this)).on("touchend", this.touchEndTriggered.bind(this)), $(window).on("resize", this.resizeTriggered.bind(this)), _r_()
        },
        scrollTriggered: function(e) {
          _i_("b71:499b8ac9"), this._timer && window.clearTimeout(this._timer), this._timer = window.setTimeout(this.snap.bind(this), 300), _r_()
        },
        touchEndTriggered: function(e) {
          _i_("b71:3a727f82"), this._touchend = !0, _r_()
        },
        snap: function(e) {
          if (_i_("b71:65e1de8c"), !this._touchend) return _r_();
          var r, o = Math.abs(this.$el.find("[data-acc-list-scrolled]").position().left);
          this.getItemsPosition().some(function(e, t, i) {
            _i_("b71:fa19d95e");
            var n = o < e,
              a = i[t + 1];
            return n || (r = a ? o - e < (a - e) / 2 ? e : a : e), _r_(n)
          }), this._touchend = !1, this.$el.animate({
            scrollLeft: r
          }, 200), _r_()
        },
        getItemsPosition: function(e) {
          return _i_("b71:0c3a7832"), (0 == this._posArray.length || this._posArray[1] <= 0) && (this._posArray = this.$el.find("[data-acc-item]").get().reduce(function(e, t) {
            _i_("b71:4be090b0");
            var i = $(t).position();
            return i && e.push(i.left), _r_(e)
          }, [])), _r_(e ? this._posArray[e] : this._posArray)
        },
        resizeTriggered: function(e) {
          _i_("b71:f599b518"), this._posArray.length = 0, _r_()
        }
      }), _r_()
    }), _r_()
  }(),
  function() {
    "use strict";
    _i_("b71:192b450b"), B.define("component/seo/tabs-navigation", function(e, t, i) {
      _i_("b71:f39e7dd1");
      var n = e("component");
      i.exports = n.extend({
        init: function() {
          _i_("b71:97f97fc3"), this.$el.on("click", "[data-tab-control]", this.setTabToActiveCb.bind(this)), this.setTabToActive({
            target: this.$el.find("[data-tab-active]")
          }), _r_()
        },
        setTabToActive: function(e) {
          _i_("b71:41995c05");
          var t = $(e.target),
            i = t.prop("href").replace(/.*?#/, "#");
          this.$el.find("[data-tab-content]").hide(), this.$el.find(i).show(), this.$el.find("[data-tab-control]").removeClass("active"), t.addClass("active"), _r_()
        },
        setTabToActiveCb: function(e) {
          _i_("b71:3145d3891"), e.preventDefault(), this.setTabToActive(e), _r_()
        }
      }), _r_()
    }), _r_()
  }(),
  function() {
    "use strict";
    _i_("b71:6996a028"), B.define("component/seo/target-click", function(e, t, i) {
      _i_("b71:bdfad847");
      var n = e("component");
      i.exports = n.extend({
        init: function() {
          if (_i_("b71:e06620e3"), this.$target = this.$el.find("[data-target-click]"), this.$target.length < 1) return _r_();
          this.supportClickonIos(), this.$el.on("click", this.triggerAnchor.bind(this)), _r_()
        },
        triggerAnchor: function(e) {
          _i_("b71:268a2c5b"), this.checkTriggerEnabled(e) || this.$target[0].click(), _r_()
        },
        checkTriggerEnabled: function(e) {
          _i_("b71:ba2f4d54");
          var t = $(e.target);
          return _r_(e.target.hasAttribute("data-target-click") || 0 < t.closest("[data-target-click]").length)
        },
        supportClickonIos: function() {
          _i_("b71:5616fdc1"), this.$el.css({
            cursor: "pointer"
          }), _r_()
        }
      }), _r_()
    }), _r_()
  }(), _i_("b71:9603028c"), B.define("component/multiple-states", function(e, t, i) {
    _i_("b71:cf6e2d2b");
    var n = e("component"),
      a = e("jquery");
    i.exports = n.extend({
      states: [],
      init: function() {
        _i_("b71:fa765b8b"), this.getStates(), this.$el.on("click", "[data-multiple-states]", this.toggle.bind(this)), _r_()
      },
      toggle: function(e) {
        _i_("b71:e3b0a064"), e.preventDefault();
        var t = a(e.target).data("multiple-states");
        this.$el.toggleClass(t), _r_()
      },
      getStates: function() {
        _i_("b71:247e1677"), this.$el.find("[data-multiple-states]", function(e) {
          _i_("b71:800f9f59"), this.state.push(a(e).data("data-multiple-states")), _r_()
        }.bind(this)), _r_()
      }
    }), _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:1731f73f");
    var t = e("jquery");
    t(".js-click-search").on("click", function() {
      _i_("b71:e6e77c66"), t("#submit_search").click(), _r_()
    }), _r_()
  }), _r_(), $(document).on("click", ".js-toggle-long-text__content", function() {
    _i_("b71:c47f5dcd"), $(this).toggleClass("expanded"), _r_()
  }), B.when({
    events: "click .lp-usp-banner__close"
  }).run(function(e) {
    _i_("b71:855237ab");
    var t = e("dismiss-item"),
      i = $(".lp-usp-banner__close").data("banner-dismiss");
    i && t(i), _r_()
  }), _i_("b71:95cf2ddf"), B.when({
    action: ["index"]
  }).run(function(e) {
    _i_("b71:b147e0e2");
    var t = e("event-bus");
    if (!B.env.cross_product_search_overlays) return _r_();
    if (!t) return _r_(!1);
    var i = function(e) {
      _i_("b71:3914e10c");
      var t = $(".user_selected_nights_copy span");
      if (!t.length) return _r_();
      var i = e.getLengthOfStay(),
        n = B.jstmpl.translations("m_search_sbox_dates_num_night_stay", i, {
          num_nights: i
        });
      t.text(n), _r_()
    };
    $(".dualcal").each(function() {
      _i_("b71:dcacd3c6");
      var e = $(this).data("calendar");
      i(e), _r_()
    }), t.on(t.EVENTS.CALENDAR_UPDATE, function(e, t) {
      _i_("b71:f6d8587e"), i(t.instance), _r_()
    }), _r_()
  }), _r_(), b.require("jquery")(function(r) {
    if (_i_("b71:d7b1fbb6"), "index" != b.env.b_action) return _r_();
    r("#top-destinations_postcard").on("click", "a.city_link", function(e) {
      var t, i, n, a;
      _i_("b71:5a97f966"), e.preventDefault(), t = r(this).attr("href"), n = (i = r("#form_search_location")).find('[name="checkin_year_month"]').val() + "-" + i.find('[name="checkin_monthday"]').val(), a = i.find('[name="checkout_year_month"]').val() + "-" + i.find('[name="checkout_monthday"]').val(), t += b.env.b_query_params_delimiter + "checkin=" + n + b.env.b_query_params_delimiter + "checkout=" + a, location.href = t, _r_()
    }), _r_()
  }), B.require(["jquery", "et", "events", "searchbox/destinations"], function(e, t, i, n) {
    if (_i_("b71:497ddca4"), "index" !== B.env.b_action) return _r_();
    n.initEventHandlers(), _r_()
  }), B.define("component/tabs", function(e, t, i) {
    _i_("b71:8b0ab35b");
    var n = e("component");
    i.exports = n.extend({
      activeId: null,
      init: function() {
        _i_("b71:f5b792bb");
        var e = this.$el.find(".c-tabs li.-active a").eq(0),
          t = this.getId(e);
        t && (this.activeId = t), this.bindEvents(), _r_()
      },
      bindEvents: function() {
        _i_("b71:7e25f2b9"), this.$el.find(".c-tabs li a").on("click", this.tabClick.bind(this)), _r_()
      },
      tabClick: function(e) {
        _i_("b71:4b835449");
        var t = $(e.currentTarget),
          i = this.getId(t);
        if (!i || i === this.activeId) return _r_(!1);
        return this.$el.find(".c-tabs li").removeClass("-active"), t.closest("li").addClass("-active"), this.$el.find(".c-tabs-content").removeClass("-active"), $("#" + i).addClass("-active"), this.activeId = i, history.pushState && history.pushState(null, null, "#" + i), _r_(!1)
      },
      getId: function(e) {
        _i_("b71:dbdc5359");
        var t = e.attr("href");
        if (!t) return _r_();
        var i = t.split("#");
        if (i && i[1]) return _r_(i[1]);
        _r_()
      }
    }), _r_()
  }), B.when({
    action: "index",
    events: "ready"
  }).run(function(e) {
    _i_("b71:01f2d0fa");
    var i = e("jquery");
    i(".js--how-works-cta").on("click", function() {
      _i_("b71:368b9b00");
      var e = i(".bh-sb-horizontal, form#form_search_location, #wide_search"),
        t = e.offset();
      i("html, body").animate({
        scrollTop: t.top - 5
      }), e.find(".sb-destination__input").focus(), _r_()
    }), _r_()
  }), window.addEventListener("pageshow", function(e) {
    if (_i_("b71:2221c472"), B && B.env && "index" === B.env.b_action && e.persisted) {
      var t = document.getElementById("input_destination");
      t && t.disabled && t.removeAttribute("disabled")
    }
    _r_()
  }, !1), B.when({
    action: "index",
    events: "ready",
    condition: $(".js-ge-popbox-controller").length && !B.env.fe_show_genius_week
  }).run(function(e) {
    _i_("b71:427e3029");
    var t = e("jquery");
    setTimeout(function() {
      _i_("b71:345783e7"), t(".js-ge-popbox-controller").addClass("ge-popbox-open"), _i_("b71:f33cc61d"), t.ajax({
        type: "post",
        url: "/genius_login_banner_seen",
        data: {}
      }), _r_(), _r_()
    }, 1e3), t(".js-popbox-close-cta").on("click", function(e) {
      _i_("b71:a8b34abd"), e.preventDefault(), t(".js-ge-popbox-controller").removeClass("ge-popbox-open"), setTimeout(function() {
        _i_("b71:cc67fbf0"), t(".js-ge-popbox-controller").remove(), _r_()
      }, 1e3), _r_()
    }), _r_()
  }), B.when({
    action: "index",
    events: "ready"
  }).run(function(e) {
    _i_("b71:879df8d4");
    var t = e("jquery"),
      i = t(".ugc-pending-modal"),
      n = "booking_hide_pending_review_modal";
    (function(e) {
      _i_("b71:7a2e2469");
      var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
      return _r_(t ? t[2] : null)
    })(n) || i.fadeIn(500), t(".ugc-pending-modal__close").on("click", function() {
      _i_("b71:c2df5acc"), i.fadeOut(500),
        function(e, t) {
          _i_("b71:a104c372");
          var i = new Date;
          i.setTime(i.getTime() + 6048e5), document.cookie = e + "=" + t + ";expires=" + i.toUTCString(), _r_()
        }(n, "1"), _r_()
    }), _r_()
  }), B.define("component/dismissible-item/cookie-block", function(e, t, i) {
    _i_("b71:55fc2505");
    var n = e("component"),
      a = e("read-data-options");
    i.exports = n.extend({
      init: function() {
        _i_("b71:f063afbd"), this.options = a(this.$el, {
          itemId: {
            name: "item-id",
            type: String,
            required: !0
          }
        }), $.cookie(this.options.itemId) ? this.hide() : this.show(), this.$el.delegate(".js-close", "click", function() {
          _i_("b71:5fb0e455"), this._dismissItem(), this.hide(), _r_()
        }.bind(this)), _r_()
      },
      _dismissItem: function() {
        _i_("b71:76e3dd13"), $.cookie(this.options.itemId, !0), _r_()
      },
      show: function() {
        _i_("b71:5a0d742c"), this.$el.show(), _r_()
      },
      hide: function() {
        _i_("b71:bd0194ab"), this.$el.remove(), _r_()
      }
    }), _r_()
  }), B.define("component/async-carousel", function(e, t, i) {
    _i_("b71:8f93d1b5");
    var n = e("utils/throttled"),
      a = e("component/fragment"),
      r = e("read-data-options"),
      o = $(window);
    i.exports = a.extend({
      init: function() {
        _i_("b71:8f649e3f"), this.options = r(this.$el, {
          threshold: {
            name: "threshold",
            type: Number,
            defaultValue: void 0
          }
        }), this.onScroll = n(this.onScroll.bind(this), 100), this.options.threshold && o.on("scroll", this.onScroll), this.onScroll(), _r_()
      },
      isAboutToEnterViewport: function() {
        _i_("b71:04c8e48a");
        var e = o.scrollTop(),
          t = o.height(),
          i = this.$el.offset().top;
        return _r_(e + t + this.options.threshold >= i)
      },
      onScroll: function() {
        _i_("b71:8dcaee49"), (void 0 === this.options.threshold || this.isAboutToEnterViewport()) && (a.prototype.fragmentLoadFragment.call(this), o.off("scroll", this.onScroll)), _r_()
      },
      fragmentBeforeRender: function(e) {
        _i_("b71:7bd534d4"), a.prototype.fragmentBeforeRender.call(this), $.extend(e, {
          $targetEl: this.$el.find(".js-bh-async-carousel-inner")
        }), _r_()
      },
      fragmentAfterRender: function() {
        _i_("b71:706bfe21"), a.prototype.fragmentAfterRender.call(this);
        var e = window.BUI.getInstance(this.$el.get(0)) || window.BUI.createInstance("Carousel", this.$el.get(0));
        e.update(), window.BUI.initComponents(e.container), _r_()
      },
      fragmentRequestError: function() {
        _i_("b71:d96e2834"), a.prototype.fragmentRequestError.call(this), this.$el.hide(), _r_()
      }
    }), _r_()
  }), B.define("watcher", function(e, t, i) {
    "use strict";
    _i_("b71:3d83e765");
    var b = e("jquery"),
      a = e("utils/throttled"),
      h = [],
      f = [];

    function n(t, e, i) {
      _i_("b71:fadcf08b");
      var n = h.filter(function(e) {
        return _i_("b71:d8f694c2"), _r_(e.el === t && e.parent === i)
      })[0];
      if (!n) return _r_();
      var a = f.filter(function(e) {
        return _i_("b71:9d4e9b45"), _r_(e.el === i)
      })[0];
      if (e) {
        var r = n.conditions.indexOf(e);
        n.conditions.splice(r, 1), n.checks.splice(r, 1), 0 === n.checks.length && a.children.splice(a.children.indexOf(n), 1)
      } else a.children.splice(a.children.indexOf(n), 1);
      0 === a.children.length && (b(n.parent).off("resize scroll", a.handler), f.splice(f.indexOf(a), 1)), _r_()
    }

    function r(r, t, o, _, s) {
      _i_("b71:2b491703");
      var c = b(r),
        l = b(t),
        d = s && "function" == typeof s,
        u = t === window,
        e = function() {
          _i_("b71:2391de69");
          var e = c.offset().top,
            t = c.innerHeight(),
            i = {
              top: e,
              bottom: e + t,
              height: t
            },
            n = u ? window.pageYOffset : l.offset().top,
            a = u ? l.height() : l.innerHeight();
          o(i, {
            top: n,
            bottom: n + a,
            height: a
          }) ? _(r) : d && s(r), _r_()
        },
        i = h.filter(function(e) {
          return _i_("b71:d8f694c21"), _r_(e.el === r && e.parent === t)
        })[0];
      i ? (i.conditions.push(o), i.checks.push(e)) : (i = {
        el: r,
        parent: t,
        conditions: [o],
        checks: [e]
      }, h.push(i));
      var n = f.filter(function(e) {
        return _i_("b71:9d4e9b451"), _r_(e.el === t)
      })[0];
      n ? n.children.push(i) : (n = {
        el: t,
        children: [i],
        handler: a(function() {
          _i_("b71:3ef8b039"), n.children.forEach(function(e) {
            _i_("b71:fa0590ce"), e.checks.forEach(function(e) {
              _i_("b71:0af2e944"), e(), _r_()
            }), _r_()
          }), _r_()
        }, 150)
      }, f.push(n), l.on("resize scroll", n.handler)), e(), _r_()
    }
    return _r_({
      conditions: {
        isInViewport: function(e, t) {
          return _i_("b71:b78d60b6"), _r_(e.top <= t.bottom && e.bottom >= t.top)
        },
        isFullyInViewport: function(e, t) {
          return _i_("b71:74e6c26e"), _r_(e.bottom <= t.bottom && e.top >= t.top)
        },
        isOutOfViewport: function(e, t) {
          return _i_("b71:a70bfd92"), _r_(e.top > t.bottom || e.bottom < t.top)
        },
        isCloseToOrInViewport: function(e, t) {
          return _i_("b71:08d1ea98"), t.bottom += t.height / 2, t.top -= t.height / 2, _r_(e.top <= t.bottom && e.bottom >= t.top)
        }
      },
      unwatch: function(e, t, i) {
        _i_("b71:7ec0c4c1"), i = i instanceof b ? i[0] : i || window, e instanceof b ? e.each(function() {
          _i_("b71:cdfeb4df"), n(this, t, i), _r_()
        }) : n(e, t, i), _r_()
      },
      watch: function(n, a) {
        return _i_("b71:bed8bf4e"), _r_({
          when: function(i) {
            return _i_("b71:4a13cbc2"), a = a instanceof b ? a[0] : a || window, _r_({
              then: function(e, t) {
                if (_i_("b71:c0457ca3"), n instanceof b) n.each(function() {
                  _i_("b71:d244cd94"), r(this, a, i, e, t), _r_()
                });
                else {
                  if (!(n instanceof Node)) throw new TypeError("invalid element provided to watcher");
                  r(n, a, i, e, t)
                }
                _r_()
              }
            })
          }
        })
      }
    })
  }), B.define("component/bh/exposure-counter", function(e, t, i) {
    _i_("b71:ad94f708");
    var n = e("component"),
      a = e("et"),
      r = e("watcher"),
      o = e("browser-storage-handler"),
      _ = "bh_awareness_exposure_v2";

    function s(e) {
      _i_("b71:21306266");
      var t = JSON.parse(o.getPermanentValue(_) || "{}"),
        i = t.elements ? t.elements : []; - 1 === i.indexOf(e.name) && i.push(e.name), t.score = t.score ? t.score + e.value : e.value, t.elements = i, o.addPermanentValue(_, JSON.stringify(t)), _r_()
    }

    function c(e) {
      _i_("b71:68b26508");
      var t = e.data("exposure-parent-selector");
      return _r_($(t).length ? $(t) : void 0)
    }

    function l(e) {
      _i_("b71:b7268411");
      var t = parseInt($(e).data("exposure-value"), 10) || 0,
        i = c($(e)),
        n = $(e).data("exposure-name");
      a.goalWithValue("js_bh_awareness_exposure", t), n && s({
        name: n,
        value: t
      }), r.unwatch(e, null, i), _r_()
    }
    i.exports = n.extend({
      init: function() {
        _i_("b71:fd78b1f0");
        var e = c(this.$el);
        r.watch(this.$el, e).when(r.conditions.isInViewport).then(l), _r_()
      },
      add: function(e, t) {
        _i_("b71:d70c8e83"), s({
          name: e,
          value: t = parseInt(t, 10) || 0
        }), _r_()
      }
    }), _r_()
  }), B.when({
    action: ["index", "searchresults", "hotel"],
    events: "load",
    condition: function(e) {
      return _i_("b71:dd433292"), _r_(!!e.bhaw_display_survey)
    }
  }).run(function(e) {
    _i_("b71:7682f103");
    var r = e("jquery"),
      o = e("browser-storage-handler"),
      _ = e("server-data"),
      s = e("jstmpl"),
      t = "bh_awareness_pageviews_counter_v2",
      c = "bh_awareness_exposure_v2",
      i = JSON.parse(o.getPermanentValue(t) || "{}"),
      n = 18e5 < +new Date - i.timestamp,
      l = _.bhaw_sv,
      a = [2, 3, 4, 5, 6][l - 1];
    if (i.shown) return _r_();
    _i_("b71:9bcf1333"), i && i.counter && !n ? ++i.counter : i = {
      counter: 1
    }, i.timestamp = +new Date, i.shown = i.counter === a, o.addPermanentValue(t, JSON.stringify(i)), _r_(), i.counter === a && function() {
      _i_("b71:460b2fdc"), booking.jstmpl("bh_awareness_m_blackout_survey", function() {
        _i_("b71:e8ae0819");
        var r = ["\n            ", "/private/bh_awareness_survey_question_header/name", "\n", "/private/bh_awareness_survey_help_us_improve/name", "/private/bh_awareness_survey_take_survey_cta/name", "/private/bh_awareness_survey_not_now_cta/name", "\n\n", '<div data-component="surveygizmo_survey"\n     data-survey-title="', '"\n     data-survey-description="', '"\n     data-survey-invite-position="', '"\n     data-survey-url="', "-", "?", '"\n></div>\n\n', "bottom", "\n        "],
          o = ["fe_surveygizmo_header", "fe_surveygizmo_body", "fe_surveygizmo_agree_btn", "fe_surveygizmo_cancel_btn", "survey_title", "survey_body", "invite_position", "survey_master_link", "b_lang_for_url", "survey_link", "survey_params", "fe_js_survey_link", "fe_js_survey_params"];
        return _r_(function(e) {
          _i_("b71:9ba1fb6d");
          var t, i, n = "",
            a = this.fn;
          return n += r[0], t = n, _i_("b71:a09038cb"), a.MN(o[0], a.ME(r[1], a.MB, a.MN, null)), t += r[2], a.MN(o[1], a.ME(r[3], a.MB, a.MN, null)), t += r[2], a.MN(o[2], a.ME(r[4], a.MB, a.MN, null)), t += r[2], a.MN(o[3], a.ME(r[5], a.MB, a.MN, null)), t += r[6], e.unshift({
            invite_position: r[14],
            survey_body: a.MB(o[1]),
            survey_link: a.MB(o[11]),
            survey_params: a.MB(o[12]),
            survey_title: a.MB(o[0])
          }), i = t, _i_("b71:39dfb0ae"), i += [r[7], a.MC(o[4]), r[8], a.MC(o[5]), r[9], a.MB(o[6]) || "top", r[10]].join(""), a.MD(o[7]) ? i += [a.MC(o[7]), r[11], a.MC(o[8])].join("") : i += a.MC(o[9]), a.MD(o[10]) && (i += [r[12], a.MC(o[10])].join("")), i += r[13], i += r[2], i += r[2], t = _r_(i), e.shift(), t += r[2], n = _r_(t), n += r[15], _r_(n)
        })
      }());
      var e = "https://surveys.booking.com/s3/aw1904-" + _.b_lang_for_url,
        t = function() {
          _i_("b71:9ca90404");
          var e = JSON.parse(o.getPermanentValue(c) || "{}");
          return e.elements && (e.elements = e.elements.join(",")), _r_(e)
        }(),
        i = _.b_group && _.b_group.length && _.b_group[0] ? _.b_group[0] : {
          guests: 0,
          children: 0,
          ages: []
        };
      i.ages = i.ages.map(function(e) {
        return _i_("b71:43044741"), _r_(e.age)
      }).join(",");
      var n = {
          uuid: _.bhaw_uuid,
          bv: _.bhaw_bv,
          sv: l,
          id: _.bhaw_id,
          nu: _.bhaw_nu,
          ge: _.b_reg_user_is_genius,
          from: _.ip_country,
          ufi: _.b_ufi,
          los: _.bhaw_los,
          nra: i.guests,
          nrc: i.children,
          cages: i.ages,
          purpose: 1 === _.bhaw_purpose ? 2 : 1,
          exval: t.score,
          exels: t.elements,
          bhprob: _.bhaw_prob,
          bw: _.bhaw_bw,
          ptfm: _.b_site_type,
          dvcl: _.bhaw_device_class,
          lgnge: _.bhaw_lgnge ? 1 : 0
        },
        a = r(s("bh_awareness_m_blackout_survey").render({
          fe_js_survey_link: e,
          fe_js_survey_params: r.param(n)
        }));
      r("body").append(a), a.loadComponents(), _r_()
    }(), _r_()
  }), booking.jstmpl("m_booking_home_selected_properties_card", function() {
    _i_("b71:782d4d48");
    var d, u = ["\n    ", '\n        <li class="bui-carousel__item" data-bui-ref="carousel-item">\n            <a\n                href="', 'bhc_from_index=1"\n                target="_blank"\n                class="bui-card bui-card--media bui-card--transparent"\n                data-et-click="customGoal:', ':1"\n            >\n                <div\n                    class="bui-card__image-container c-async-carousel__photo"\n                    ', '\n                    style="background-image: url(', ')"\n                    ', '\n                ></div>\n                <div class="bui-card__content">\n                    ', "\n                        ", "\n\n\n", "\n", "\n\n\n\n", " \n", '\n\n<span\n    class="', "bh-quality-bars bh-quality-bars--", " ", "", '"\n    ', '\n    data-bui-component="Tooltip"\n    ', '\n    title="', "/private/bhqc_sr_qc_desc_tooltip_affiliate/name", "/private/bh_sr_quality_explanationv3/name", '\n    data-tooltip-position="bottom"\n    ', 'data-et-click="', '"', 'data-et-mouseenter="', "\n>\n    ", "iconset/square_rating", "\n</span>\n\n", "medium", "\n                    ", '\n                    <h1 class="bui-card__title bh_carousel--new-title"><span>', '</span></h1>\n                    <h2 class="bui-card__subtitle bui-spacer--medium">', "</h2>\n                    ", '\n                    <p class="bui_font_caption bui-spacer--medium">', "/private/bh_index_carousel_starting_from/name", "</p>\n                    ", "\n                    <div>\n                        ", "/private/review_adj_bad/name", "/private/review_adj_very_poor/name", "/private/review_adj_poor/name", "/private/review_adj_disappointing/name", "/private/review_adj_average_passable/name", "/private/review_adj_average_okay/name", "/private/review_adj_pleasant/name", "/private/review_adj_good/name", "/private/review_adj_very_good/name", "/private/review_adj_fabulous/name", "/private/review_adj_superb/name", "/private/review_adj_exceptional/name", "/private/comp_fd_lp_header_rs/name", '<div class="', '"> <div class="bui-review-score__badge" aria-label="', "/private/a11y_rating_score_for_screenreader/name", '"> ', " </div> ", '<div class="bui-review-score__content"> <div class="bui-review-score__title"> ', '<div class="bui-review-score__text"> ', "/private/comp_num_reviews_sr_page/name", "</div> ", "\n                    </div>\n                </div>\n            </a>\n        </li>\n    ", "/booking-home/index", "bhc_from_index_bh=1", '\n    <li class="bui-carousel__item" data-bui-ref="carousel-item">\n        <a\n            href="', '"\n            class="bui-card bui-card--media bui-card--transparent bh-carousel--new__more"\n            target="_blank"\n            data-et-click="customGoal:', ':2"\n        >\n            <h1 class="bh-carousel--new__more-title">', "/private/bh_index_carousel_more_homes_apartments_header/name", '</h1>\n            <button class="bui-button bui-button--secondary bh-carousel--new__more-cta" type="button">\n                <span class="bui-button__text">', "/private/bh_awareness_banner_discover_homes_cta/name", "</span>\n            </button>\n        </a>\n    </li>\n"],
      b = ["b_properties", "b_query_params_delimiter", "fe_bar_size", "fe_custom_classes", "fe_bar_level", "fe_is_affiliate", "fe_companyname", "fe_site_type", "fe_no_tooltip", "fe_click_tracking", "fe_mouseenter_tracking", "fe_icon_size", "b_companyname", "b_site_info", "b_site_type", "fe_classes", "fe_modifier_outline", "fe_modifier_end", "fe_modifier_inverse", "fe_modifier_inline", "fe_modifier_text", "fe_modifier_small", "fe_modifier_smaller", "fe_allow_zero", "fe_score", "fe_show_adjective", "fe_custom_adjective", "fe_adjective_text", "fe_adjective", "fe_hide_low_adjectives", "fe_can_show_adjective", "fe_score_formatted", "fe_reviews_number", "fe_bh_carousel_show_all_url", "nonsecure_hostname", "b_query_params_with_lang"];
    return _r_(function(_) {
      _i_("b71:9b9934ff");
      var e = "",
        s = this.fn;

      function t(e) {
        if (_i_("b71:46cbf8a8"), e += ["", u[14]].join(""), s.MJ(s.MB(b[24])) || s.MJ(s.MB(b[23]))) {
          if (s.MN("fe_classes", "bui-review-score c-score"), s.MJ(s.MB(b[16])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--outline"), s.MJ(s.MB(b[17])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--end"), s.MJ(s.MB(b[18])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--inverse"), s.MJ(s.MB(b[19])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--inline"), s.MJ(s.MB(b[20])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--text"), s.MJ(s.MB(b[21])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--small"), s.MJ(s.MB(b[22])) && s.MN("fe_classes", s.MB(b[15]) + " bui-review-score--smaller"), s.MJ(s.MB(b[23])) && s.MN("fe_score_formatted", 0), s.MJ(s.MB(b[24])) && s.MN("fe_score_formatted", s.format_review_score_new(s.MB(b[24]))), s.MN("fe_can_show_adjective", s.MB(b[25]) || s.MB(b[26])), s.MJ(s.MB(b[30]))) {
            var t = "";
            _.unshift({
              fe_hide_low_adjectives: s.MB(b[29]),
              fe_score: s.MB(b[24])
            }), t = function(e) {
              if (_i_("b71:e5829533"), s.MD(b[24])) {
                var t = "";
                s.MJ(1 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 2) && (t += s.ME(u[37], s.MB, s.MN, null)), s.MJ(2 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 3) && (t += s.ME(u[38], s.MB, s.MN, null)), s.MJ(3 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 4) && (t += s.ME(u[39], s.MB, s.MN, null)), s.MJ(4 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 5) && (t += s.ME(u[40], s.MB, s.MN, null)), s.MJ(5 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 5.6) && (t += s.ME(u[41], s.MB, s.MN, null)), s.MJ(5.6 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 6) && (t += s.ME(u[42], s.MB, s.MN, null)), s.MJ(6 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 7) && (t += s.ME(u[43], s.MB, s.MN, null)), s.MJ(7 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 8) && (t += s.ME(u[44], s.MB, s.MN, null)), s.MJ(8 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 8.6) && (t += s.ME(u[45], s.MB, s.MN, null)), s.MJ(8.6 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 9) && (t += s.ME(u[46], s.MB, s.MN, null)), s.MJ(9 <= s.MB(b[24])) && s.MJ(s.MB(b[24]) < 9.5) && (t += s.ME(u[47], s.MB, s.MN, null)), s.MJ(9.5 <= s.MB(b[24])) && (t += s.ME(u[48], s.MB, s.MN, null)), s.MN(b[28], t), s.MJ(s.MB(b[29])) && s.MJ(s.MB(b[24]) < 7) && s.MN(b[28], s.ME(u[49], s.MB, s.MN, null)), e += [s.MC(b[28]), u[15]].join("")
              }
              return s.MN("fe_adjective", 0), s.MN("fe_hide_low_adjectives", 0), s.MN("fe_score", 0), _r_(e)
            }(t), _.shift(), s.MN(b[27], t), s.MJ(s.MB(b[26])) && s.MN("fe_adjective_text", s.MB(b[26]))
          }
          e += [u[50], s.F.entities(s.MC(b[15])), u[51], (_.unshift({
            review_score_number: s.MB(b[31])
          }), d = s.ME(u[52], s.MB, s.MN, null), _.shift(), d), u[53], s.F.entities(s.MC(b[31])), u[54]].join(""), s.MD(b[27]) && (e += [u[55], s.MC(b[27]), u[54]].join(""), s.MD(b[32]) && (e += [u[56], (_.unshift({
            num_reviews: s.format_number(s.MB(b[32]))
          }), d = s.ME(u[57], s.MB, s.MN, s.MO(s.MI(s.MC(b[32])) + s.MI(0), null, u[57])), _.shift(), d), u[54]].join("")), e += u[58]), e += u[58]
        }
        return s.MN("fe_adjective_text", 0), s.MN("fe_allow_zero", 0), s.MN("fe_classes", 0), s.MN("fe_custom_adjective", 0), s.MN("fe_hide_low_adjectives", 0), s.MN("fe_modifier_end", 0), s.MN("fe_modifier_inline", 0), s.MN("fe_modifier_inverse", 0), s.MN("fe_modifier_outline", 0), s.MN("fe_modifier_text", 0), s.MN("fe_reviews_number", 0), s.MN("fe_score", 0), s.MN("fe_score_formatted", 0), s.MN("fe_show_adjective", 0), e += ["", u[14]].join(""), e += u[9], _r_(e)
      }

      function i(e) {
        _i_("b71:7386ebba"), e += ["", u[8]].join(""), s.MK(s.MB(b[2])) && (e += u[0], s.MN("fe_bar_size", "medium"), e += u[9]), e += u[10], s.MJ(s.MB(b[2]) + "" == "small") ? (e += u[0], s.MN("fe_icon_size", "smaller")) : s.MJ(s.MB(b[2]) + "" == "large") ? (e += u[0], s.MN("fe_icon_size", "medium")) : (e += u[0], s.MN("fe_icon_size", "small")), e += u[11], e += u[12], e += [u[13], s.F.entities(s.MC(b[2])), u[14], s.F.entities(s.MC(b[3])), u[15]].join(""), e += u[16], s.MK(s.MJ(s.MB(b[7]) + "" == "mdot") || s.MB(b[8])) && (e += u[17], s.MD(b[5]) ? e += [u[18], (_.unshift({
          num_rating: s.MB(b[4])
        }), d = s.ME(u[19], s.MB, s.MN, null), _.shift(), d), u[16]].join("") : e += [u[18], (_.unshift({
          b_companyname: s.MB(b[6]),
          end_bold: "</strong>",
          start_bold: "<strong>"
        }), d = s.ME(u[20], s.MB, s.MN, null), _.shift(), d), u[16]].join(""), e += u[21]), e += u[0], s.MD(b[9]) && (e += [u[22], s.F.entities(s.MC(b[9])), u[23]].join("")), e += u[0], s.MD(b[10]) && (e += [u[24], s.F.entities(s.MC(b[10])), u[23]].join("")), e += u[25];
        var t = r,
          i = a,
          n = o,
          a = s.seq(1, s.MB(b[4])) || [];
        _.unshift(null);
        for (var r = 1, o = a.length; r <= o; r++) _[0] = a[r - 1], e += [(_.unshift({
          color: "#FEBB02",
          name: u[26],
          size: s.MB(b[11])
        }), d = s.HELPER("icon", _[0]), _.shift(), d), u[15]].join("");
        return _.shift(), r = t, a = i, o = n, e += [u[27], "", u[9]].join(""), _r_(e)
      }
      e += u[0];
      var n = s.MC(b[0]) || [];
      _.unshift({
        property: null
      });
      for (var a, r = 1, o = n.length; r <= o; r++) {
        if (_[0].property = a = n[r - 1], e += [u[1], s.F.entities((a || {}).b_home_url), s.F.entities(s.MC(b[1])), u[2], s.F.entities("NAFQICFHUeUEBEDEZRdQTWEYZLPNINFPIWBHT"), u[3]].join(""), s.MJ(a.b_home_photo_uri) && (e += [u[4], s.STATIC_HOSTNAME(a.b_home_photo_uri, 0, 0, 0), u[5]].join("")), e += u[6], s.MJ(s.MG((a || {}).b_home_quality_class))) {
          e += u[7];
          var c = {
              fe_bar_level: s.MG((a || {}).b_home_quality_class),
              fe_bar_size: u[28],
              fe_companyname: s.MC(b[12]) || "Booking.com",
              fe_is_affiliate: s.MC(b[13]) && s.MC(b[13]).is_hybrid,
              fe_site_type: s.MC(b[14])
            },
            l = _;
          (_ = s.SV([{}, {}])).unshift(c), e = i(e), _ = s.SV(l), e += u[29]
        }
        e += [u[30], s.F.entities((a || {}).b_home_name), u[31], s.F.entities((a || {}).b_home_city_name), u[32]].join(""), s.MJ(2 != s.track_experiment("NAFQICFHUeUEBEDEZRdQTWEYZLPNINFPIWBHT")) && (e += [u[33], (_.unshift({
          price_property: s.MG((a || {}).b_price_selected_currency)
        }), d = s.ME(u[34], s.MB, s.MN, null), _.shift(), d), u[35]].join("")), e += u[36], _.unshift({
          fe_modifier_inline: 0,
          fe_modifier_small: 0,
          fe_modifier_smaller: 1,
          fe_reviews_number: s.MG((a || {}).b_home_review_count),
          fe_score: s.MG((a || {}).b_home_review_score),
          fe_show_adjective: 1
        }), e = t(e), _.shift(), e += u[59]
      }
      return _.shift(), e += u[0], s.MN(b[33], [s.MC(b[34]), u[60], s.F.entities(s.MC(b[35])), s.F.entities(s.MC(b[1])), u[61]].join("")), e += [u[62], s.F.entities(s.MC(b[33])), u[63], s.F.entities("NAFQICFHUeUEBEDEZRdQTWEYZLPNINFPIWBHT"), u[64], s.ME(u[65], s.MB, s.MN, null), u[66], s.ME(u[67], s.MB, s.MN, null), u[68]].join(""), _r_(e)
    })
  }()), B.define("component/bh/async-carousel", function(e, t, i) {
    _i_("b71:3f81887a");
    var n = e("component");
    i.exports = n.extend({
      init: function() {
        _i_("b71:128a6936"), this.fetchData(), _r_()
      },
      fetchData: function() {
        _i_("b71:eca636b9");
        var e = this.$el.data("carousel-endpoint"),
          t = parseInt(this.$el.data("carousel-max-items"), 10) || void 0,
          i = this.$el.data("carousel-use-qc"),
          n = {
            currency: B.env.b_selected_currency,
            max_entries: t,
            use_qc: i
          },
          a = this;
        $.ajax({
          url: e,
          method: "POST",
          data: n,
          success: function(e) {
            _i_("b71:d1835d6d"), e && e.result && e.result.length ? a.renderCarousel(e) : a.hideCarousel(), _r_()
          },
          error: function() {
            _i_("b71:e0217da1"), a.hideCarousel(), _r_()
          }
        }), _r_()
      },
      renderCarousel: function(e) {
        _i_("b71:fe2c4f31");
        var t = this.$el.data("carousel-template"),
          i = {
            b_properties: e.result,
            b_query_params_delimiter: B.env.b_query_params_delimiter,
            b_query_params_with_lang: B.env.b_query_params_with_lang,
            b_site_type: B.env.b_site_type,
            nonsecure_hostname: B.env.nonsecure_hostname
          },
          n = B.jstmpl(t).render(i),
          a = this.$el.find('[data-bui-ref="carousel-container"]');
        a.length && (a.html(n), a.loadComponents()), window.BUI.createInstance("Carousel", this.$el.get(0)).update(), _r_()
      },
      hideCarousel: function() {
        _i_("b71:9a2d9335"), this.$el.hide(), _r_()
      }
    }), _r_()
  }), B.define("component/surveygizmo_survey", function(e, t, i) {
    _i_("b71:2096d194");
    var n, a = e("component"),
      r = e("jquery"),
      o = e("jstmpl"),
      _ = [],
      s = {};
    try {
      s = JSON.parse(window.localStorage.getItem("survey_history")) || {}
    } catch (e) {
      s = {}
    }
    i.exports = a.extend({
      init: function() {
        _i_("b71:a547ca45"), this.title = this.$el.data("survey-title"), this.description = this.$el.data("survey-description"), this.survey_url = this.$el.data("survey-url"), this.invite_position = this.$el.data("survey-invite-position"), this.survey_url_base = this.survey_url.split("?")[0], s[this.survey_url_base] || _.push(this), _i_("b71:075f90b4"), n && clearTimeout(n), n = setTimeout(function() {
          if (_i_("b71:329ffc49"), 0 < _.length) {
            var e = Math.floor(1e3 * Math.random()) % _.length;
            _[e].runSurvey()
          }
          _r_()
        }, 500), _r_(), _r_()
      },
      runSurvey: function() {
        _i_("b71:5a26a1e4");
        var e = this.$el;
        ! function(e) {
          _i_("b71:e1d5a86c");
          try {
            s[e] = 1, window.localStorage.setItem("survey_history", JSON.stringify(s))
          } catch (e) {}
          _r_()
        }(this.survey_url_base);
        var t = r(o("surveygizmo_survey_invite").render({
          title: this.title,
          description: this.description,
          survey_url: this.survey_url,
          invite_position: this.invite_position
        }));
        e.append(t), t.on("click", ".js-surveygizmo-survey-cancel", function() {
          return _i_("b71:9c5b56bd"), t.addClass("surveygizmo-survey-invite--hidden"), setTimeout(function() {
            _i_("b71:fa934b29"), t.remove(), _r_()
          }, 200), _r_(!1)
        }), t.on("click", ".js-surveygizmo-survey-ok", function() {
          return _i_("b71:ce551b46"), t.remove(), window.open(e.data("survey-url"), "_blank"), _r_(!1)
        }), setTimeout(function() {
          _i_("b71:c3625f0c"), t.removeClass("surveygizmo-survey-invite--hidden"), _r_()
        }, 10), _r_()
      }
    }), _r_()
  }), booking.jstmpl("surveygizmo_survey_invite", function() {
    _i_("b71:787c85e0");
    var n = ['\n    <div class="surveygizmo-survey-invite surveygizmo-survey-invite--hidden surveygizmo-survey-invite--position-', '">\n        <div class="surveygizmo-survey-invite__title">', '</div>\n        <div class="surveygizmo-survey-invite__description">', '</div>\n        <div class="surveygizmo-survey-invite__buttons-wrapper">\n            <a class="surveygizmo-survey-invite__button js-surveygizmo-survey-cancel">\n                ', "/private/m_pod_survey_intro_no/name", '\n            </a>\n            <a class="surveygizmo-survey-invite__button surveygizmo-survey-invite__button--primary js-surveygizmo-survey-ok">\n                ', "/private/m_pod_survey_intro_yes/name", "\n            </a>\n        </div>\n    </div>\n"],
      a = ["invite_position", "title", "description"];
    return _r_(function(e) {
      _i_("b71:03135e4f");
      var t = "",
        i = this.fn;
      return t += [n[0], i.MC(a[0]), n[1], i.MC(a[1]), n[2], i.MC(a[2]), n[3], i.ME(n[4], i.MB, i.MN, null), n[5], i.ME(n[6], i.MB, i.MN, null), n[7]].join(""), _r_(t)
    })
  }()), B.define("referral/raf-goal", function(e, t, i) {
    _i_("b71:97b3ad3a");
    var n = e("et");
    i.exports = {
      shareGoal: function(e) {
        _i_("b71:53c28dcd"), n.goal(e), n.goal("gm_share"), _r_()
      }
    }, _r_()
  }), B.define("referral/rap-goal", function(e, t, i) {
    _i_("b71:2e0f5abd");
    var n = e("et");
    i.exports = {
      shareGoal: function(e) {
        _i_("b71:2cd92b4e"), n.goal("grap_share"), _r_()
      }
    }, _r_()
  }),
  function(b) {
    _i_("b71:a6bb0ba0");

    function h(e) {
      _i_("b71:92f30a71"), b.reportError(new Error(e), "raf:copy-input"), _r_()
    }
    b.define("component/referral/copy-input", function(e, t, i) {
      _i_("b71:09bb1fb1");
      var n = e("component"),
        l = e("referral/clipboard"),
        a = e("tooltip"),
        r = e("referral/raf-goal"),
        d = e("referral/rap-goal"),
        u = e("ga-tracker");
      i.exports = n.extend({
        init: function() {
          _i_("b71:2f039e91");
          var i = this,
            e = this.$el.find(".js-raf-copy-btn"),
            o = this.$el.find(".js-raf-copy-input"),
            t = this.$el.is("[data-is-partner-program]"),
            _ = o.val();
          if (!o.get(0)) return h("Share link node is missing"), _r_();
          if (!e.get(0)) return h("Share btn node is missing"), _r_();
          if (!_) return h("RAF share links is missing"), _r_();

          function s() {
            _i_("b71:35202ca9");
            var e = i.$el.data("tooltip-id"),
              t = a.get(e);
            if (!t) return h('Tooltip with id "' + e + '" is missing'), _r_();
            t.show(), setTimeout(function() {
              _i_("b71:ce2c5886"), t.hide(), _r_()
            }, 1e3), _r_()
          }

          function c() {
            _i_("b71:43c5560b"), t ? (u.trackEvent(u.referralPartnerAdvocateTracker, "share - source: " + b.env.b_action, "click copy"), d.shareGoal("share_copy")) : r.shareGoal("gm_share_copy"), _r_()
          }
          e.add(o).on("click", function(e) {
            if (_i_("b71:4a7ebd46"), e.preventDefault(), navigator.userAgent.match(/ipad|ipod|iphone/i)) {
              var t = o.get(0),
                i = t.contentEditable,
                n = t.readOnly;
              t.contentEditable = !0, t.readOnly = !1;
              var a = document.createRange();
              a.selectNodeContents(t);
              var r = window.getSelection();
              r.removeAllRanges(), r.addRange(a), t.setSelectionRange(0, 999999), t.contentEditable = i, t.readOnly = n, document.execCommand("copy"), o.blur(), s(), c()
            } else l.copy(_, function(e) {
              if (_i_("b71:3fc4dc86"), o.select(), e) return _r_();
              s(), c(), _r_()
            }.bind(this));
            _r_()
          }), _r_()
        }
      }), _r_()
    }), _r_()
  }(window.B), B.define("referral/clipboard", function(e, t, i) {
    _i_("b71:6dad79bc");
    var n = function() {};
    n.prototype.copy = function(e, t) {
      _i_("b71:b9e312de"), this.text = e, this.isRTL = B.env.b_lang_rtl, "function" == typeof t && (this.copyCallback = t), this.selectFake(), _r_()
    }, n.prototype.selectFake = function() {
      _i_("b71:563ce6c9"), this.removeFake();
      var e = document.createElement("textarea");
      (this.fakeElement = e).style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[this.isRTL ? "right" : "left"] = "-9999px";
      var t = window.pageYOffset || document.documentElement.scrollTop;
      e.style.top = t + "px", e.setAttribute("readonly", ""), e.value = this.text, document.body.appendChild(e),
        function(e) {
          var t;
          if (_i_("b71:eed13d9d"), "SELECT" === e.nodeName) e.focus(), t = e.value;
          else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var i = e.hasAttribute("readonly");
            i || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), i || e.removeAttribute("readonly"), t = e.value
          } else {
            e.hasAttribute("contenteditable") && e.focus();
            var n = window.getSelection(),
              a = document.createRange();
            a.selectNodeContents(e), n.removeAllRanges(), n.addRange(a), t = n.toString()
          }
          _r_(t)
        }(e), this.copyText(), _r_()
    }, n.prototype.removeFake = function() {
      _i_("b71:dcba3dac"), this.fakeElement && (document.body.removeChild(this.fakeElement), this.fakeElement = null), _r_()
    }, n.prototype.copyText = function() {
      var t;
      _i_("b71:881b30ae");
      try {
        t = document.execCommand("copy")
      } catch (e) {
        t = !1
      }
      this.handleResult(t), _r_()
    }, n.prototype.handleResult = function(e) {
      _i_("b71:14c14746"), this.copyCallback && (e ? this.copyCallback(null) : this.copyCallback(!0)), this.removeFake(), _r_()
    }, i.exports = new n, _r_()
  }), B.define("component/referral/share-buttons", function(e, t, i) {
    _i_("b71:691bb842");
    var n = e("ga-tracker"),
      a = e("referral/raf-goal"),
      r = e("referral/rap-goal");
    i.exports = e("component").extend({
      init: function() {
        _i_("b71:5cc084e3");
        var t = this,
          i = this.$el.is(".js-raf-share-buttons-partner");
        this.$emailShare = this.$el.find(".js-raf-share-email"), this.$emailShare.on("click", function(e) {
          _i_("b71:b3d23747"), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click email button"), r.shareGoal("share_email")) : (a.shareGoal("gm_share_email"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click email button")), _r_()
        }), this.$twShare = this.$el.find(".js-raf-share-twitter"), this.$twShare.on("click", function(e) {
          _i_("b71:63d3fdbb"), e.preventDefault(), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button"), r.shareGoal("share_twitter")) : (a.shareGoal("gm_share_twitter"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button")), t.showPopupWindow($(this).attr("href"), "Share", 480, 320), _r_()
        }), this.$messengerShare = this.$el.find(".js-raf-share-messenger"), this.$messengerShare.on("click", function(e) {
          _i_("b71:89f1d120"), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button"), r.shareGoal("share_messenger")) : (a.shareGoal("gm_share_messenger"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button")), "undefined" != typeof FB && void 0 !== FB.ui && $(e.delegateTarget).data("share-link") ? FB.ui({
            method: "send",
            link: $(e.delegateTarget).data("share-link")
          }) : window.open($(e.delegateTarget).data("url-link")), _r_()
        }), this.$gmailShare = this.$el.find(".js-raf-share-gmail"), this.$gmailShare.on("click", function(e) {
          _i_("b71:cad2ce2f"), e.preventDefault(), t.showPopupWindow($(this).attr("href"), "Share", 650, 550), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click gmail button"), r.shareGoal("share_gmail")) : (a.shareGoal("gm_share_gmail"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click gmail button")), _r_()
        }), this.$whatsappShare = this.$el.find(".js-raf-share-whatsapp"), this.$whatsappShare.on("click", function(e) {
          _i_("b71:aa2b38f0"), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button"), r.shareGoal("share_whatsapp")) : (a.shareGoal("gm_share_whatsapp"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button")), _r_()
        }), this.$linkedinShare = this.$el.find(".js-raf-share-linkedin"), this.$linkedinShare.on("click", function(e) {
          _i_("b71:a7a9a0c7"), i ? (n.trackEvent(n.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click linkedin button"), r.shareGoal("share_linkedin")) : (a.shareGoal("gm_share_linkedin"), n.trackEvent(n.referralAdvocateTracker, "share - source: " + B.env.b_action, "click linkedin button")), _r_()
        }), _r_()
      },
      showPopupWindow: function(e, t, i, n) {
        _i_("b71:9957ea84");
        var a = window.screen.width / 2 - i / 2,
          r = window.screen.height / 2 - n / 2;
        return _r_(window.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + n + ", top=" + r + ", left=" + a))
      }
    }), _r_()
  }), B.define("component/referral/web-virality/ga", function(e, t, i) {
    _i_("b71:a0535f39");
    var n = e("component"),
      a = e("ga-tracker"),
      r = e("jquery"),
      o = e("when/events-view");
    "mdot" == B.env.b_site_type && B.events && B.eventNames && B.eventNames.TABNAV_MENU_LOADED && B.events.one(B.eventNames.TABNAV_MENU_LOADED, function() {
      _i_("b71:e5a27b97"), r("#raf-nav-entrypoint").loadComponents(), _r_()
    }), i.exports = n.extend({
      init: function() {
        _i_("b71:9d0bfdba");
        var e = this.$el;
        switch (e.data("wv-ga-type")) {
          case "pageview":
            var t = e.data("wv-ga-details");
            if (!t) return _r_();
            switch (B.env.b_action) {
              case "index":
                a.trackEvent(a.webViralityTracker, "raf-index-page-entered|" + t);
                break;
              case "searchresults":
                a.trackEvent(a.webViralityTracker, "raf-sr-page-entered|" + t);
                break;
              case "hotel":
                a.trackEvent(a.webViralityTracker, "raf-hp-page-entered|" + t);
                break;
              case "book":
                2 == B.env.b_stage ? a.trackEvent(a.webViralityTracker, "raf-bs2-entered|" + t) : 3 == B.env.b_stage && a.trackEvent(a.webViralityTracker, "raf-bs3-entered|" + t);
                break;
              case "confirmation":
                a.trackEvent(a.webViralityTracker, "raf-confirmation-page-entered|" + t)
            }
            break;
          case "viewandclick":
            e.on("click", function() {
              _i_("b71:5def794c"), a.trackEvent(a.webViralityTracker, "entry-point-button-click", e.data("wv-ga-placement")), _r_()
            }), o(e, function() {
              _i_("b71:b5a7c9fa"), a.trackEvent(a.webViralityTracker, "entry-point-button-show", e.data("wv-ga-placement")), _r_()
            });
            break;
          case "myreferrals-pageview":
            a.trackEvent(a.webViralityTracker, "raf-dashbard-show|" + e.data("wv-ga-action"), e.data("wv-ga-code"));
            break;
          case "click":
            e.on("click", function() {
              _i_("b71:9127e7ae"), a.trackEvent(a.webViralityTracker, e.data("wv-ga-action")), _r_()
            });
            break;
          case "share":
            e.on("click", function() {
              _i_("b71:3ad9c335"), a.trackEvent(a.webViralityTracker, e.data("wv-ga-action"), e.data("wv-ga-placement")), _r_()
            })
        }
        _r_()
      }
    }), _r_()
  }), booking.lightbox = function() {
    _i_("b71:47a1a86e");
    var c, l, a, r, o, _, i, n = $("body"),
      s = {
        bAnimation: !0,
        bCloseButton: !0,
        bMaskClick: !0,
        closeOnEsc: !0,
        customWrapperClassName: "",
        customMaskClassName: "",
        bFullscreen: !1,
        hideCallBack: null,
        hideBeforeCallBack: null,
        positionBeforeCallBack: null,
        positionAfterCallBack: null,
        cloneElement: !1,
        bCanScroll: !1,
        bOverflowVisible: !1,
        autoCenter: !0,
        limitHeight: !1,
        opacity: .5,
        autoWidth: !1,
        position: "fixed",
        topMargin: 0,
        bottomMargin: 0,
        preventBodyScroll: !1,
        trapFocus: !0,
        addDialogStartEndText: !1,
        modalLabeledById: ""
      },
      d = {},
      t = [],
      u = function() {
        _i_("b71:b0c0e96f");
        for (var e = ["", "moz", "webkit"], t = 0; t < 3; t++)
          if (e[t] + ("" === e[t] ? "b" : "B") + "oxSizing" in document.body.style) return _r_(!0);
        return _r_(!1)
      }(),
      b = !1;
    var h = function(i) {
        var n;
        _i_("b71:4cee35e6"), d.positionBeforeCallBack && d.positionBeforeCallBack(), c.css({
          width: $(document).width(),
          height: $(document).height()
        });
        var e = $(window).width(),
          t = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
        if (u || (e = e - parseInt(l.css("paddingLeft")) - parseInt(l.css("paddingRight")), t = t - parseInt(l.css("paddingTop")) - parseInt(l.css("paddingBottom"))), !d.limitHeight) {
          var a = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
          l.outerHeight() > a ? (l.css("height", t), n = !0) : (l.css("height", ""), l.outerHeight() >= a && l.css("height", t))
        }
        if (l.outerWidth() > $(window).width()) l.css("width", e);
        else if (l.css("width", ""), l.outerWidth() >= $(window).width()) l.css("width", e);
        else if (d.autoWidth) {
          var r = l.children().first().outerWidth();
          u && (r += parseInt(l.css("padding-left"), 10) + parseInt(l.css("padding-right"), 10), r += parseInt(l.css("border-left-width"), 10) + parseInt(l.css("border-right-width"), 10)), l.css({
            width: r
          })
        }
        var o = 0,
          _ = 0;
        d.bFullscreen ? l.css({
          width: e,
          height: t
        }) : (o = Math.max(d.topMargin, $(window).height() / 2 - l.outerHeight() / 2), _ = Math.max(0, $(window).width() / 2 - l.outerWidth() / 2));
        var s = "hidden";
        d.bCanScroll ? s = "auto" : d.bOverflowVisible && (s = "visible"), "absolute" == d.position ? (o = Math.max(0, $(window).height() / 2 - l.outerHeight() / 2), o += $(document).scrollTop(), l.css("position", "absolute")) : "dynamic" == d.position && function() {
          _i_("b71:247e6024");
          var e = "modal-pos-abs",
            t = "modal-pos-to-fix";
          n ? (o = i && i.preserveAbsolute && l.hasClass(e) ? (l.offset() || {}).top : $(document).scrollTop() + d.topMargin, l.css({
            position: "absolute",
            height: ""
          }).addClass(e)) : (l.css({
            position: "fixed"
          }), l.hasClass(e) ? l.removeClass(e).addClass(t) : l.removeClass(t)), _r_()
        }(), l.css({
          top: o,
          left: _,
          overflow: s
        }), d.positionAfterCallBack && d.positionAfterCallBack(), _r_()
      },
      f = function(e) {
        _i_("b71:540f2962"), l && l.is(":visible") && h(e), _r_()
      },
      p = function() {
        if (_i_("b71:881a5a71"), !l) return _r_();
        d.hideBeforeCallBack && d.hideBeforeCallBack(), d.cloneElement || (r.prepend(a), a.css("display", _)), d.trapFocus && booking.trapFocus && booking.trapFocus.release(), c.remove(), l.remove(), b = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", f), $(window).unbind("resize", f), d.closeOnEsc && $(document).unbind("keyup", m), $(".modal-wrapper").off("click.userClose"), $("#calendar_popup").css("display", "none"), d.hideCallBack && d.hideCallBack(), d.preventBodyScroll && (_i_("b71:347a5263"), n.css({
          overflow: "auto",
          paddingRight: i
        }), _r_()), booking.eventEmitter.trigger("modal:close"), B.events.trigger("modal:close"), _r_()
      },
      m = function(e) {
        _i_("b71:53ad8b02"), 27 !== e.keyCode || t.length || p(), _r_()
      },
      v = function() {
        if (_i_("b71:deba661e"), c = $('<div class="modal-mask"/>').appendTo(document.body), 0 < d.customMaskClassName.length && c.addClass(d.customMaskClassName), l = $('<div class="modal-wrapper"/>').attr({
            role: "dialog",
            "aria-label": "dialog",
            "aria-modal": "true"
          }).appendTo(document.body), d.modalLabeledById) {
          var e = $("#" + d.modalLabeledById),
            t = e.text().trim();
          e.length && t ? l.attr("aria-label", t) : l.attr("aria-labelledby", d.modalLabeledById)
        }
        0 < d.customWrapperClassName.length && l.addClass(d.customWrapperClassName), d.addDialogStartEndText && booking.env.a11y_dialog_content_start_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_start_text).appendTo(l), d.cloneElement ? a.clone().appendTo(l) : l.append(a), d.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"><span class="invisible_spoken">' + booking.env.experiment_popups_close + "</span></button>").appendTo(l), d.addDialogStartEndText && booking.env.a11y_dialog_content_end_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_end_text).appendTo(l), d.bFullscreen && l.addClass("modal-wrapper--fullscreen"), b = !0, $("body").addClass("modal-visible"), d.preventBodyScroll && function() {
          _i_("b71:0a9b623a");
          var e = n.width();
          i = parseInt(n.css("padding-right"), 10), n.css("overflow", "hidden");
          var t = n.width() - e;
          n.css("padding-right", i + t), _r_()
        }(), a.show(), h(), _i_("b71:8fed2503"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
          _i_("b71:b5838b9c"), p(), _r_()
        }), $(".modal-wrapper").on("click.userClose", ".lightbox-element-close", function() {
          _i_("b71:ab60bbf1"), p(), _r_()
        }), d.bMaskClick && $(".modal-mask").one("click", function() {
          _i_("b71:2beba14a"), p(), _r_()
        }), d.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", f), "absolute" == d.position && d.autoCenter && $(window).bind("scroll", f), _r_(), _r_()
      },
      g = function() {
        if (_i_("b71:77b79d8f"), v(), l.css("visibility", "visible"), d.bAnimation) {
          var e = d.bAnimation;
          "number" != typeof e && (e = parseInt(e, 10) || 1e3), c.fadeTo(Math.max(0, Math.min(600, e - 400)), d.opacity), l.css("opacity", "0").animate({
            opacity: 1
          }, e, function() {
            _i_("b71:2e039ac2"), $(this).css("opacity", ""), _r_()
          }), d.trapFocus && booking.trapFocus && setTimeout(function() {
            _i_("b71:e718942f"), booking.trapFocus.trap(l[0], o), o = null, _r_()
          }, 100)
        } else c.css("opacity", d.opacity).show(), d.trapFocus && booking.trapFocus && (booking.trapFocus.trap(l[0], o), o = null);
        d.ajax && "function" == typeof d.loadCallBack && d.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), B.events.trigger("modal:open"), _r_()
      };
    return _r_({
      show: function(e, t, i) {
        if (_i_("b71:8db3284d"), l && l.is(":visible")) return _r_();
        if (d = {}, $.extend(d, s, t), d.trapFocus && void 0 === booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"), d.trapFocus && booking.trapFocus && (o = $(document.activeElement)), d.iframe) {
          var n = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + d.iframeHeight + '"></iframe> ');
          "function" == typeof d.loadCallBack && n.load(d.loadCallBack), r = (a = n).parent(), _ = a.css("display"), g()
        } else d.ajax ? jQuery.ajax({
          url: e,
          cache: !0,
          success: function(e) {
            _i_("b71:7acdb394"), a = d.ajaxRawContent ? $(e) : $($.trim(e)).eq(0), r = a.parent(), _ = a.css("display"), g(), _r_()
          }
        }) : ((a = $(e)).length && "SCRIPT" === a[0].tagName && (a = $($.trim(a.html()))), r = a.parent(), _ = a.css("display"), g());
        return void 0 !== i && i(), _r_(l)
      },
      hide: p,
      rePosition: f,
      open: function(e, t, i, n) {
        _i_("b71:c48b243c"), booking.lightbox.show($("#" + n)), _r_()
      },
      isVisible: function() {
        return _i_("b71:460df769"), _r_(b)
      },
      pushEscStack: function(e) {
        _i_("b71:5fd3d9f7"), t.push(e), _r_()
      },
      popEscStack: function() {
        _i_("b71:29642ab7"), t.pop(), _r_()
      },
      hideWithFade: function(e, t) {
        _i_("b71:0cf0d60c"), l.fadeOut(e), c.fadeOut(e, function() {
          _i_("b71:b8953fa0"), p(), t && t(), _r_()
        }), _r_()
      }
    })
  }(), B.define("lightbox", booking.lightbox), B.define("dismiss-item", function(e, t, i) {
    _i_("b71:4fa1a5b8");
    var n = e("jquery");
    i.exports = function(e) {
      if (_i_("b71:ffcf03b7"), !e) throw new Error("param itemId is required");
      return _r_(n.ajax({
        url: "/dismiss_item",
        type: "POST",
        data: {
          item_id: e
        }
      }))
    }, _r_()
  }), B.when({
    action: "index",
    events: "click #btn_deals_index_banner_close"
  }).run(function(e) {
    _i_("b71:06ac52f8"), e("dismiss-item")("deals_index_banner"), _r_()
  }), B.when({
    action: "index",
    events: "click #raf_banner_close"
  }).run(function(e) {
    _i_("b71:6bf7b40f"), e("dismiss-item")("raf_banner"), _r_()
  }), B.when({
    action: "index",
    events: "click #emk_banner_index_close"
  }).run(function(e) {
    _i_("b71:335caaba"), e("dismiss-item")("emk_banner_index"), _r_()
  }), B.when({
    action: "index",
    events: "click #signin_banner_close"
  }).run(function(e) {
    _i_("b71:341f362e"), e("dismiss-item")("signin_banner"), _r_()
  }), B.when({
    action: "index",
    events: "click #join_index_banner_close"
  }).run(function(e) {
    _i_("b71:f251325a"), e("dismiss-item")("join_index_banner"), _r_()
  }), B.when({
    action: "index",
    events: "click #genius_banner_index_close"
  }).run(function(e) {
    _i_("b71:87b3f713"), e("dismiss-item")("genius_banner_index"), _r_()
  }), B.when({
    action: "index",
    condition: B.env.b_deals_index_banners
  }).run(function(e) {
    _i_("b71:4279e6b0");
    for (var i = e("dismiss-item"), t = 0; t < B.env.b_deals_index_banners.length; t++) {
      var n = B.env.b_deals_index_banners[t].campaign_id;
      $("#btn_deals_index_banner_" + n + "_close").click(function(e) {
        _i_("b71:81989842");
        var t = $(e.currentTarget).data("campaign-id");
        i("deals_index_banner_" + t), _r_()
      })
    }
    _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:736e8acc");
    var t = e("jquery"),
      i = t(".ccp__acb__rb__toggle"),
      n = t(".ccp__acb__rb__coupon_list");
    0 < t(".ccp__acb__reminding_banner.ccp__acb__reminding_banner_header").length && i.click(function() {
      _i_("b71:3a276f92"), i.toggleClass("folded"), n.is(":hidden") ? n.slideDown(200) : n.slideUp(150), _r_()
    }), _r_()
  }), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(function(e) {
    _i_("b71:c3d166f3");
    var _, s, c, l = e("jquery"),
      d = [],
      t = l(".carousel-container"),
      u = 500,
      b = 0;

    function h() {
      _i_("b71:3fa43fd3"), l(".carousel-container").hide(), _r_()
    }
    t && 2 === this.variant() && (_i_("b71:bd1f8de1"), l.ajax({
      url: B.env.b_domain_for_app + "/china_seasonal_campaigns",
      method: "get",
      headers: {
        "X-Booking-Language-Code": "zh-cn",
        "X-Booking-AID": 1e5
      }
    }).done(function(e) {
      _i_("b71:e1f72ed0"), d = [];
      var t = e.length;
      if (t) {
        s = document.body.offsetWidth, e = e.map(function(e) {
          _i_("b71:e3484ec5");
          var t = {};
          return t.campaignName = e.campaign_name || "", t.campaignUrl = e.campaign_url || "", t.imageUrl = e.image_url, e.image_urls && e.image_urls.length && (t.imageUrl = function(e) {
            _i_("b71:208a4f5b");
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              if (i.width < 710 && 355 < i.width) return _r_(i.url)
            }
            return _r_("")
          }(e.image_urls) || e.image_url), _r_(t)
        });
        for (var i = '<div class="carousel__track"', n = "", a = 0; a < t; a++) {
          var r = e[a];
          if (1 === t) i += '><a class="carousel__slide" href="' + r.campaignUrl + '"><img src="' + r.imageUrl + '" alt="' + r.campaignName + '"/></a>', d.push(r.campaignUrl);
          else {
            var o = '<a class="carousel__slide" style="left:' + s * (a + 1) + 'px" href="' + r.campaignUrl + '"><img src="' + r.imageUrl + '" alt="' + r.campaignName + '"/></a>';
            d.push(r.campaignUrl), 0 === a ? (i += ' style="left:-' + s + 'px"><a class="carousel__slide" style="left:0" href="' + e[t - 1].campaignUrl + '"><img src="' + e[t - 1].imageUrl + '" alt="' + e[t - 1].campaignName + '"/></a>' + o, d.unshift(e[t - 1].campaignUrl), n += '<div class="carousel__indicators"><div class="carousel__indicator active"></div>') : (i += o, n += '<div class="carousel__indicator"></div>')
          }
        }
        1 < t ? (i += '<a class="carousel__slide" style="left:' + s * (t + 1) + 'px" href="' + e[0].campaignUrl + '"><img src="' + e[0].imageUrl + '" alt="' + e[0].campaignName + '"/></a></div>' + n, d.push(e[0].campaignUrl)) : i += "</div>", l(".carousel").empty().html(i), 1 < e.length && function i() {
          _i_("b71:c8bdf0da"), setTimeout(function() {
            _i_("b71:53c7158a"), b++, _ = document.querySelectorAll(".carousel__indicator");
            var e, t = document.querySelector(".carousel__track");
            _ && t ? (e = t, _i_("b71:05fa3ded"), Array.prototype.forEach.call(_, function(e, t) {
              _i_("b71:33668ab9"), e.addEventListener("click", function() {
                _i_("b71:94023d8d"), f(t + 1), clearInterval(c), p(), _r_()
              }), _r_()
            }), function(e, t) {
              _i_("b71:c61469cc");
              var n, a, r, o, _, i = e,
                s = t || function(e) {};
              i.addEventListener("touchstart", function(e) {
                _i_("b71:a955ada3");
                var t = e.changedTouches[0];
                r = t.pageX, o = t.pageY, _ = (new Date).getTime(), _r_()
              }), i.addEventListener("touchmove", function(e) {
                _i_("b71:08fac112"), e.preventDefault(), _r_()
              }), i.addEventListener("touchend", function(e) {
                _i_("b71:df239bd0");
                var t = e.changedTouches[0];
                if (n = t.pageX - r, a = t.pageY - o, (new Date).getTime() - _ <= 300 && 100 <= Math.abs(n) && Math.abs(a) <= 50) {
                  var i = n < 0 ? "left" : "right";
                  s.call(null, i)
                }
                _r_()
              }), _r_()
            }(e, m), Array.prototype.forEach.call(document.querySelectorAll(".carousel__slide"), function(e, t) {
              _i_("b71:c6282924"), e.addEventListener("click", function(e) {
                _i_("b71:6ab8d41b"), B.et.customGoal("OMMKMBNFMBYDEZREaaUBfIdLHe", 1), B.et.stage("OMMKMBNFMBYDEZREaaUBfIdLHe", 6), e.preventDefault(), window.open(d[t], "_blank"), _r_()
              }), _r_()
            }), _r_(), p()) : b <= u && i(), _r_()
          }, 200), _r_()
        }()
      } else h();
      _r_()
    }).fail(function() {
      _i_("b71:a6e38d0d"), h(), _r_()
    }).always(function() {}), _r_());
    var n = 1;

    function f(e) {
      _i_("b71:554a4814");
      var t = document.querySelector(".carousel__track"),
        i = -e * s;
      l(".carousel__track").animate({
        left: i + "px"
      }, 500, function() {
        _i_("b71:fde8d8ec"), -s < i ? (i = -s * _.length, e = _.length) : i < -s * _.length && (i = -s, e = 1), t.style.left = i + "px", n = e, _i_("b71:fac98fd2"), Array.prototype.forEach.call(_, function(e, t) {
          _i_("b71:ce0a940f"), e.className = e.className.replace(" active", ""), _r_()
        }), _[n - 1].className += " active", _r_(), _r_()
      }), _r_()
    }

    function i() {
      _i_("b71:ea24ed4f"), f(n + 1), _r_()
    }

    function p() {
      _i_("b71:a3c7320c"), c = setInterval(function() {
        _i_("b71:d3c0ad2b"), i(), _r_()
      }, 3e3), _r_()
    }

    function m(e) {
      _i_("b71:d0f10920"), "left" === e ? i() : "right" === e && (_i_("b71:adbc89d3"), f(n - 1), _r_()), clearInterval(c), p(), _r_()
    }
    _r_()
  }), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(function(e) {
    _i_("b71:f34dffd9");
    var _ = e("jquery");

    function s() {
      _i_("b71:a4dd8d51"), _(".discount_block__container").hide(), _r_()
    }
    _(".discount_block__container") && (_i_("b71:46958359"), _.ajax({
      url: B.env.b_domain_for_app + "/china_deals_destinations",
      method: "get",
      data: {
        include_prices: 1,
        sort_by_distance: 1,
        language: "zh",
        returns_object: 1,
        total_deals: 5,
        city_min_price: 1,
        checkin: B.env.b_todays_date,
        checkout: B.env.b_tomorrows_date,
        currency_code: B.env.b_selected_currency
      },
      headers: {
        "X-Booking-Language-Code": "zh-cn",
        "X-Booking-AID": 1e5
      }
    }).done(function(e) {
      if (_i_("b71:586a8c0d"), e.results && 5 === e.results.length) {
        var t = e.results,
          i = t.map(function(e) {
            return _i_("b71:a311cbb8"), _r_(e.ufi)
          });
        _(".discount_block__title").empty().append("超值优惠");
        for (var n = '<div class="double_size" style="background:url(' + t[0].city_image_url + ') center/cover no-repeat"><span class="price_tag">' + B.utils.accounting.formatMoney(parseInt(t[0].min_price)) + '起</span><span class="city_name">' + t[0].name_trans + "</span></div>", a = 1; a < t.length; a++) {
          var r = t[a];
          n += '<div style="background:url(' + r.city_image_url_square640 + ') center/cover no-repeat"><span class="price_tag">' + B.utils.accounting.formatMoney(parseInt(r.min_price)) + '起</span><span class="city_name">' + r.name_trans + "</span></div>"
        }
        _(".discount_block__row").empty().html(n), o = i, _i_("b71:0c5598bb"), Array.prototype.forEach.call(document.querySelectorAll(".discount_block__container .discount_block__row > div"), function(e, t) {
          _i_("b71:46986841"), e.addEventListener("click", function() {
            var e;
            _i_("b71:5c5a8243"), B.et.customGoal("OMMKMBNFMBYDEZREaaUBfIdLHe", 2), B.et.stage("OMMKMBNFMBYDEZREaaUBfIdLHe", 3), window.open((e = o[t], _i_("b71:7a961fbb"), _r_(B.env.nonsecure_hostname + "/searchresults.zh-cn.html?dest_id=" + e + "&dest_type=city&checkin=" + B.env.b_todays_date + "&checkout=" + B.env.b_tomorrows_date)), "_blank"), _r_()
          }), _r_()
        }), _r_()
      } else s();
      var o;
      _r_()
    }).fail(function() {
      _i_("b71:b80527dd"), s(), _r_()
    }).always(function() {}), _r_()), _r_()
  }), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(function(e) {
    _i_("b71:1a590236");
    var r = e("jquery"),
      o = [];

    function _() {
      _i_("b71:3edb252e"), r(".premium_selections__container").hide(), _r_()
    }

    function s(e, t) {
      return _i_("b71:750916c5"), _r_(0 === e ? t.replace("WIDTH", "720").replace("HEIGHT", "242") : t.replace("WIDTH", "180").replace("HEIGHT", "100"))
    }
    r(".premium_selections__container") && (_i_("b71:6a94a0f9"), r.ajax({
      url: B.env.b_domain_for_app + "/travel_stories",
      method: "get",
      headers: {
        "X-Booking-AID": 1e5,
        "X-Booking-Language_Code": "zh-cn"
      },
      data: {
        count: 4,
        languagecode: "zh",
        yun_ying_hotel_recommendations: 1
      }
    }).done(function(e) {
      if (_i_("b71:ca31366e"), e.selected_stories && 4 === e.selected_stories.length) {
        var t = e.selected_stories;
        o = [], r(".premium_selections__title").empty().html(e.section_header), r(".premium_selections__subtitle").empty().html(e.section_summary);
        var i = '<a><div class="full_size"style="background:url(' + s(0, t[0].photo_url_template) + ') center/cover no-repeat"><span>' + t[0].title + "</span></div></a>";
        o.push(t[0].page_url);
        for (var n = 1; n < t.length; n++) {
          var a = t[n];
          i += '<a><div><div style="background: url(' + s(n, a.photo_url_template) + ') center/cover no-repeat"></div><p>' + a.title + "</p></div></a>", o.push(a.page_url)
        }
        r(".premium_selections__row").empty().html(i), _i_("b71:60e5db76"), Array.prototype.forEach.call(document.querySelectorAll(".premium_selections__container .premium_selections__row > a"), function(e, t) {
          _i_("b71:286899d9"), e.addEventListener("click", function(e) {
            _i_("b71:49c5b7e8"), B.et.customGoal("OMMKMBNFMBYDEZREaaUBfIdLHe", 3), B.et.stage("OMMKMBNFMBYDEZREaaUBfIdLHe", 5), e.preventDefault(), window.open(o[t], "_blank"), _r_()
          }), _r_()
        }), _r_()
      } else _();
      _r_()
    }).fail(function() {
      _i_("b71:55623140"), _(), _r_()
    }).always(function() {}), _r_()), _r_()
  }), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(function(e) {
    _i_("b71:becd39c4");
    var t = e("jquery");
    t("carousel-container") && this.variant(), _r_()
  }), B.when({
    events: "ready"
  }).run(function(a) {
    _i_("b71:7a6a363d"), {
      priority: 9,
      run: function() {
        _i_("b71:89d0a48b");
        var e = $("#survey").attr("surveyurl");
        if (e && (window.b_survey_url = e, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), void 0 !== window.b_survey_url && window.b_survey_url) {
          var i = $("#conf_survey,#survey,#conf_survey_bottom"),
            n = function() {
              _i_("b71:f46c5266"), "hotel" === booking.env.b_action && a("booking-sticker").update(), _r_()
            },
            t = function(e) {
              if (_i_("b71:be242669"), booking.env.showRevdSurvey2016Q1) var t = $(e.target).val();
              else t = $(this).val();
              return t && ("accept" === t || "Yes" === t || "yes" === t || "Ja, ik doe mee" === t || "Okay" === t ? window.open(window.b_survey_url, "booking_survey_window") : i.hide("normal", n), $.get("/survey?decision=" + t + "&survey_key=" + booking.env.survey_key, {}, function(e) {
                _i_("b71:398c4c37"), i.hide("normal", function() {
                  _i_("b71:5951ed50"), i.remove(), n(), _r_()
                }), _r_()
              })), _r_(!1)
            };
          booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
            _i_("b71:7f514403"), i.addClass("show"), _r_()
          }), i.find("button").on("click", t)) : (i.fadeIn("normal", n), i.find("button").click(t))
        }
        _r_()
      },
      init: function() {
        if (_i_("b71:dff626a9"), this.run(), B.env.b_run_sr_ajax) {
          var t = this;
          B.require(["searchresults/events"], function(e) {
            _i_("b71:2cdd7226"), e.on(e.UI_RESULTS_UPDATED, function() {
              _i_("b71:648fe614"), t.run(), _r_()
            }), _r_()
          })
        }
        _r_()
      }
    }.init(), _r_()
  }), booking.jstmpl("budget_themes", function() {
    _i_("b71:2aaf1020");
    var s, c = ["\n    ", '\n    <section class="budget-themes" data-ga-track="view|Hostels-CLP|Budget Themes|onView_budget_theme">\n        <div class="budget-themes__header--container">\n            ', '\n                <h3 class="budget-themes__header">', "/private/hstsls_m_clp_filtered_entry_head/name", '</h3>\n                <h4 class="budget-themes__subheader">', "/private/hstsls_m_clp_filtered_entry_sub/name", "</h4>\n            ", '\n                <span class="budget-themes__header">', '</span> <br>\n                <span class="budget-themes__subheader">', "</span>\n            ", '\n        </div>\n        <ul class="budget-themes__list">\n            ', "\n                ", '\n    <li class="budget-themes__list--item">\n        <a target="_blank" class="budget-themes__list--item-url" data-ga-track="', '" href="', '">\n            <div class="budget-themes__list--content" >\n                <div class="budget-themes__list--item-emoji">\n                    ', '\n                </div>\n                <div class="budget-themes__list--item-content">\n                    <span class="budget-themes__list--item-header">', '</span> <br>\n                    <span class="budget-themes__list--item-subheader">', '</span>\n                </div>\n                <div class="budget-themes__list--item-arrow">\n                    ', "\n                        ", "iconset/navarrow_left", "larger", "\n                    ", "iconset/navarrow_right", "\n                </div>\n            </div>\n        </a>\n    </li>\n", "\n", '\n                          <hr class="bui-divider" />\n                    ', "\n            ", "\n        </ul>\n\n        ", '\n            <a target="_blank" class="budget-themes__search-link" href="', '"> ', "/private/hstsls_m_clp_filtered_entry_view_all/name", " </a>\n        ", "\n    </section>\n"],
      l = ["fe_budget_themes_city", "fe_budget_theme_data", "fe_ga_tracking", "fe_budget_search_url", "fe_list_emoji", "fe_list_item_header", "fe_list_item_subheader", "fe_is_rtl", "fe_base_search_url"];
    return _r_(function(o) {
      _i_("b71:04ba7139");
      var e = "",
        _ = this.fn;
      return e = function(e) {
        _i_("b71:07a2706a"), e += ["", c[1]].join(""), _.MJ(_.track_experiment("bSZNOdEXPSFfEWPRFPOSGNQHeeRe")) ? e += [c[2], _.ME(c[3], _.MB, _.MN, null), c[4], (o.unshift({
          city_name: _.MB(l[0])
        }), s = _.ME(c[5], _.MB, _.MN, null), o.shift(), s), c[6]].join("") : e += [c[7], _.ME(c[3], _.MB, _.MN, null), c[8], (o.unshift({
          city_name: _.MB(l[0])
        }), s = _.ME(c[5], _.MB, _.MN, null), o.shift(), s), c[9]].join(""), e += c[10];
        var t, i = _.MC(l[1]) || [];
        o.unshift({
          theme: null
        });
        for (var n, a = 1, r = i.length; a <= r; a++) o[0].theme = n = i[a - 1], e += c[11], o.unshift({
          fe_budget_search_url: _.MB(l[8]) + ";nflt=" + n.attributes.nflt + n.attributes.extraParams,
          fe_ga_tracking: "click|Hostels-CLP|Budget Theme|" + n.attributes.feature,
          fe_list_emoji: _.MG(((n || {}).copy || {}).emoji),
          fe_list_item_header: _.MG(((n || {}).copy || {}).header),
          fe_list_item_subheader: _.MG(((n || {}).copy || {}).subheader)
        }), t = e, _i_("b71:9f38b8e0"), t += ["", c[12], _.F.entities(_.MC(l[2])), c[13], _.F.entities(_.MC(l[3])), c[14], _.MC(l[4]), c[15], _.F.entities(_.MC(l[5])), c[16], _.F.entities(_.MC(l[6])), c[17]].join(""), _.MD(l[7]) ? t += [c[18], (o.unshift({
          name: c[19],
          size: c[20]
        }), s = _.HELPER("icon", o[0]), o.shift(), s), c[21]].join("") : t += [c[18], (o.unshift({
          name: c[22],
          size: c[20]
        }), s = _.HELPER("icon", o[0]), o.shift(), s), c[21]].join(""), t += [c[23], "", c[24]].join(""), e = _r_(t), o.shift(), _.MJ(a != i.length) && (e += c[25]), e += c[26];
        return o.shift(), e += c[27], _.MJ(_.MB(l[8])) && (e += [c[28], _.F.entities(_.MC(l[8]) + ";nflt=ht_id=203"), c[29], (o.unshift({
          city_name: _.MB(l[0])
        }), s = _.ME(c[30], _.MB, _.MN, null), o.shift(), s), c[31]].join("")), e += [c[32], "", c[24]].join(""), _r_(e)
      }(e += c[0]), e += c[24], _r_(e)
    })
  }()), B.define("component/landpages/budget-themes", function(e, t, i) {
    "use strict";
    _i_("b71:e5debe42");
    var d, u, n = e("component"),
      b = e("jstmpl"),
      h = e("jquery"),
      a = e("fragment"),
      f = e("server-data"),
      p = e("et"),
      m = b.translations;
    i.exports = n.extend({
      init: function() {
        _i_("b71:7d430c96"), this.fetchData(this.render), _r_()
      },
      fetchData: function(e) {
        _i_("b71:7f0a5b3c"), Promise.all([a.call("property.property_count_by_feature", this.fragmentData("FemaleDormAvailability")), a.call("property.property_count_by_feature", this.fragmentData("BreakfastIncluded")), a.call("property.property_count_by_feature", this.fragmentData("PrivateDormAvailability"))]).then(e.bind(this)).catch(function(e) {}), _r_()
      },
      fragmentData: function(e) {
        _i_("b71:869b8157"), d = this.forceValidDate(f.b_checkin_date);
        var t = void 0 !== f.b_checkin_checkout_interval && 0 < f.b_checkin_checkout_interval ? f.b_checkin_checkout_interval : 1;
        return u = this.forceValidDate(f.b_checkin_date, t), _r_({
          ufi: f.dest_id,
          checkin: d,
          feature: e,
          length_of_stay: t,
          adults: f.b_total_adults || 2
        })
      },
      forceValidDate: function(e, t) {
        _i_("b71:b44d95cc"), t = t || 0;
        var i = new Date;
        if (i.setHours(0, 0, 0, 0), isNaN(Date.parse(e)) || "Invalid Date" === Date.parse(e) || new Date(e).setHours(0, 0, 0, 0) - i < 0) {
          var n = new Date;
          return n.setDate(n.getDate() + t), _r_(n.toJSON().slice(0, 10).replace(/-/g, "-"))
        }
        return _r_(e)
      },
      addEventListeners: function() {},
      filterThemes: function(e) {
        _i_("b71:6eb7a2f2");
        try {
          return _r_(e.filter(function(e) {
            return _i_("b71:3e3f01e5"), _r_(e.count.single.total_after_filter >= e.attributes.displayThreshold)
          }))
        } catch (e) {
          return _r_([])
        }
        _r_()
      },
      render: function(e) {
        _i_("b71:8c37717d");
        var t, i = h(".budget-theme-holder"),
          n = b("budget_themes"),
          a = this.filterThemes(e),
          r = d.split("-"),
          o = u.split("-"),
          _ = "",
          s = [];
        3 === r.length && 3 === o.length && (t = {
          checkin_month: r[1],
          checkin_monthday: r[2],
          checkin_year: r[0],
          checkout_month: o[1],
          checkout_monthday: o[2],
          checkout_year: o[0]
        }, Object.keys(t).forEach(function(e) {
          _i_("b71:1fcf614e"), s.push(e + "=" + t[e]), _r_()
        }), 6 === s.length && (_ = s.join(";")));
        var c = f.b_query_params_delimiter + "lpsr=1";
        if (0 < a.length) {
          var l = n.render({
            fe_budget_themes_city: f.city_name,
            fe_budget_themes_header: m("seo_m_lp_show_on_map_cta"),
            fe_budget_theme_data: a,
            fe_is_rtl: f.b_lang_is_rtl,
            fe_base_search_url: "/searchresults" + f.b_query_params_with_lang + f.b_query_params_delimiter + _ + c + f.b_query_params_delimiter + "city=" + f.b_dest_id
          });
          i.html(l), p.initAttributesTracking(i)
        }
        _r_()
      },
      reset: function() {
        _i_("b71:d392dda6"), this.el.reset(), _r_()
      }
    }), _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:5fa3c614");
    var i = e("jquery"),
      t = i(".featured-properties-sr_header--quick-btn-filter"),
      n = i(".featured-properties-sr_header--quick-btn-map"),
      a = document.getElementById("form_search_location"),
      r = i("#submit_search");
    if (void 0 !== a && i("<input />").attr("type", "hidden").attr("name", "lpsr").attr("value", "1").appendTo("#form_search_location"), t.length && n.length && void 0 !== a) {
      t.click(function() {
        _i_("b71:97168c41"), o("sr_sortfilters", 1), a.submit(function(e) {}), _r_()
      }), n.click(function() {
        _i_("b71:78a404c6"), o("sr_map", 2), a.submit(function(e) {}), _r_()
      })
    }

    function o(e, t) {
      _i_("b71:f0ed95c4"), i("<input />").attr("type", "hidden").attr("name", "activeTab").attr("value", e).appendTo("#form_search_location"), _r_()
    }
    r.length && t.length && n.length && r.click(function(e) {
      _i_("b71:597b543e"), e.preventDefault(), i("<input />").attr("type", "hidden").attr("name", "htscs").attr("value", 1).appendTo("#form_search_location"), a.submit(function(e) {}), _r_()
    }), _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:2ce9b458");
    var t = e("jquery"),
      i = t("[name=group_adults]");

    function n(e) {
      _i_("b71:aa0921b9"), t(e).length && !t(e + " > input[name=htca]").length && t("<input />").attr("type", "hidden").attr("name", "htca").attr("value", 1).appendTo(e), _r_()
    }
    i.length && i.click(function(e) {
      _i_("b71:3f012ad0"), n("#form_search_location"), n("#form_search"), _r_()
    }), _r_()
  }), B.define("component/landing_pages/beach/lp-accordion-switch", function(e, t, i) {
    _i_("b71:b411fb61");
    var n = e("component");
    i.exports = n.extend({
      init: function() {
        _i_("b71:49192d90");
        var e = this.$el.parent('[data-bui-component="Accordion"]');
        this.instance = window.BUI.createInstance("Accordion", e[0]);
        var t = this.$el.closest(".bui-accordion__row");
        t && (this.$triggerBtn = t.find('[data-bui-ref="accordion-button"]')[0]), this.$target = $(this.$el.data("accordion-switch-target")), this.$target && (this.$targetnBtn = this.$target.find('[data-bui-ref="accordion-button"]')[0]), this.bindEvents(), _r_()
      },
      bindEvents: function() {
        _i_("b71:d87138b0"), this.$el.bind("click", this._closeTriggerAccordion.bind(this)), _r_()
      },
      _closeTriggerAccordion: function() {
        _i_("b71:e70fe862"), this._toggleAccordion(this.$triggerBtn, !0);
        var e = this;
        setTimeout(function() {
          _i_("b71:3702d396"), e._openTargetAccordion(), _r_()
        }, 100), _r_()
      },
      _openTargetAccordion: function() {
        _i_("b71:ef5d2e07"), this._toggleAccordion(this.$targetnBtn, !1), $("html, body").animate({
          scrollTop: this.$target.offset().top
        }, 500), _r_()
      },
      _toggleAccordion: function(e, t) {
        _i_("b71:df5e3b64"), this.instance && (this.instance.mount(), t ? this.instance.close(e) : this.instance.open(e), this.instance.unmount()), _r_()
      }
    }), _r_()
  }), B.define("component/company/dom-utils/scroll", function(e, t, i) {
    "use strict";
    _i_("b71:0215a8e8");
    var n = e("component");
    i.exports = n.extend({
      init: function() {
        _i_("b71:01e0daef"), this.$trigger = this.$el.find('[data-scroll-trigger], [data-scroll-trigger=""]'), this.$el.is('[data-scroll-trigger], [data-scroll-trigger=""]') && (this.$trigger = this.$trigger.add(this.$el)), this.eventHandlers(), _r_()
      },
      eventHandlers: function() {
        _i_("b71:58bf295b"), this.$trigger.bind("click", this.clicked.bind(this)), _r_()
      },
      clicked: function(e) {
        _i_("b71:f369b8d2");
        var t = $(e.currentTarget).data("scroll-target");
        e.preventDefault(), $.scrollTo ? t && $.scrollTo(t, 500) : $(t).length && window.scrollTo(0, $(t).offset().top), _r_()
      }
    }), _r_()
  }), B.define("component/trip-types/show-more", function(e, t, i) {
    _i_("b71:6a735df6");
    var n = e("component");
    i.exports = n.extend({
      init: function() {
        _i_("b71:da094413"), this.content = this.$el.find("[data-show-more-content]"), this.toShow = this.$el.find("[data-show-more]"), this.toHide = this.$el.find("[data-show-less]"), this.wordLimit = this.$el.data("wordLimit"), this.collapsed = !0, this.prepareShortText(), _r_()
      },
      bindEvents: function() {
        _i_("b71:13765f47"), this.toShow.on("click", $.proxy(this.onShowMore, this)), this.toHide.on("click", $.proxy(this.onShowLess, this)), this.content.on("click", $.proxy(this.onShowToggle, this)), _r_()
      },
      prepareShortText: function() {
        _i_("b71:c9a0fe0a");
        var e, t = this.content.text(),
          i = t.split(" ");
        i.length > this.wordLimit ? (e = (e = i.slice(0, this.wordLimit)).join(" "), this.longText = t, this.shortText = e + "...", this.toggleText("short"), this.bindEvents()) : this.toShow.hide(), _r_()
      },
      toggleText: function(e) {
        _i_("b71:b408467d"), "long" === e ? this.content.html(this.longText) : "short" === e && (this.content.html(this.shortText), this.content.css("max-height", this.content.height())), _r_()
      },
      onShowMore: function(e) {
        _i_("b71:49b789ba"), e.preventDefault(), this.toggleText("long"), this.content.addClass("is-visible"), this.toShow.hide(), this.toHide.show(), this.collapsed = !1, _r_()
      },
      onShowLess: function(e) {
        _i_("b71:5f169e0e"), e.preventDefault(), this.content.removeClass("is-visible");
        var t = this;
        window.setTimeout(function() {
          _i_("b71:b70baafa"), t.toggleText("short"), _r_()
        }, 1), this.toShow.show(), this.toHide.hide(), this.collapsed = !0, _r_()
      },
      onShowToggle: function(e) {
        _i_("b71:a431e2e1"), this.collapsed && (this.onShowMore(e), this.collapsed = !1), _r_()
      }
    }), _r_()
  }), B.when({
    action: ["city", "region"],
    events: "ready",
    condition: function(e) {
      return _i_("b71:1074cd6b"), _r_(e.fe_should_track_bdlp)
    }
  }).run(function(e) {
    _i_("b71:ebecd785");
    var t = e("et"),
      i = e("ga-tracker"),
      n = B.env.b_site_type,
      a = "YWYHaSQVUQSFfEC";
    _i_("b71:164cec65"), t.on("view", ".js-bdlp-st").stage(a, 1), t.on("view", ".js-bdlp-st").customGoal(a, 1), _r_(),
      function() {
        var e;
        _i_("b71:740c37b1"), "mdot" === n && ($(document).on("touchmove", ".c-beach-lp-top-beaches__image-carousel", function() {
          _i_("b71:56276141"), clearTimeout(e), e = setTimeout(function() {
            _i_("b71:86e0049c"), i.trackEvent("Beach Landing Page", "Top Beaches", "Interact With Gallery"), _r_()
          }, 200), _r_()
        }), $(document).on("touchmove", ".c-beach-lp-hotels-near-activities__hotel-carousel", function() {
          _i_("b71:c86d7ab9"), clearTimeout(e), e = setTimeout(function() {
            _i_("b71:99d94b50"), i.trackEvent("Beach Landing Page", "Activities", "Show More Hotels"), _r_()
          }, 200), _r_()
        }));
        _r_()
      }(), _r_()
  }),
  function(r) {
    function o(e, t) {
      if (_i_("b71:cfbd17e3"), !(this instanceof o)) return _r_(new o(e, t));
      t = t || "localStorage", this.ns = e, this._storage = this.getStorage(t), this.loadData(), _r_()
    }
    _i_("b71:da8ddea9"), r.define("component/feedback-base", function(a, e, t) {
      _i_("b71:cbca5fdd");
      var i = a("component"),
        l = a("jquery"),
        n = a("events"),
        d = {
          StorageService: o,
          submitModel: function(e, t) {
            _i_("b71:9acf2ef8");
            var i = l.ajax({
              url: e,
              method: "POST",
              data: t
            });
            return _r_(i)
          },
          setObjectPath: function(e, t, i) {
            _i_("b71:74753e22");
            var n = t.split("."),
              a = e,
              r = n.length - 1;
            n.forEach(function(e, t) {
              if (_i_("b71:92f47154"), t === r) return a[e] = i, _r_();
              a[e] = a[e] || {}, a = a[e], _r_()
            }), _r_()
          }
        };
      t.exports = i.extend({
        _utils: d,
        config: {
          url: "/receive_feedback",
          defaultView: "index",
          defaultErrorView: "error",
          defaultActionEvent: "click",
          defaultPoll: "general",
          defaultStorage: "floops",
          defaultTimeout: 168,
          defaultAutoclose: !1,
          stopPropagation: !1,
          neverExpire: !0
        },
        init: function() {
          if (_i_("b71:4f181444"), this.setupComponent(), !this.config.neverExpire && (this.setupStorage(), !this.storage)) return _r_();
          if ((this.setupModel(), !this.config.neverExpire) && !this.storage.isExpired(this.model.poll)) {
            var e = l(".feedback-loop");
            return e.length && e.hide(), _r_()
          }
          this.setupViews(), this.setupActions(), this.initActions(), this.render(), _r_()
        },
        setupComponent: function() {
          _i_("b71:de6ead02"), this.config = l.extend({}, this.config, this.$el.data()), _r_()
        },
        setupStorage: function() {
          _i_("b71:3b117858");
          var e = this.config.storage || this.config.defaultStorage;
          this.storage = new o(e), this.storage.removeExpired(), _r_()
        },
        setupViews: function() {
          _i_("b71:1b40aebe");
          var r = this.views = {};
          this.$el.children("[data-view]").each(function(e, t) {
            _i_("b71:5514ca10");
            var i = l(t),
              n = i.data(),
              a = n.view;
            r[a] = {
              config: n,
              view: t,
              $view: i
            }, _r_()
          }), this.setupGroups(), _r_()
        },
        setupGroups: function() {
          _i_("b71:82719688");
          var r = this;
          this.$el.off(".feedbackGroups").on("click.feedbackGroups", ".feedback-loop__group-header :checkbox", function() {
            _i_("b71:937bcb86"),
              function(e) {
                _i_("b71:f6a33c25");
                var t = e.find(".feedback-loop__group-body"),
                  i = e.find(".feedback-loop__group-header :checkbox"),
                  n = t.is(":visible"),
                  a = i.is(":checked");
                n != a && t.slideToggle({
                  duration: 200,
                  complete: function() {
                    _i_("b71:6cf7902e"), r.triggerResize(), _r_()
                  }
                });
                _r_()
              }(l(this).closest(".feedback-loop__group")), _r_()
          }), _r_()
        },
        triggerResize: function() {
          _i_("b71:92bff38c"), this.$el.trigger("feedbackBase_resize"), _r_()
        },
        setupModel: function() {
          _i_("b71:50a8bb1b"), this.model = {
            poll: this.config.poll || this.config.defaultPoll
          }, l.extend(this.model, {
            url: window.location.href,
            action: window.booking && window.booking.env && window.booking.env.b_action
          }), _r_()
        },
        setupActions: function() {
          _i_("b71:12426c42");
          var e = this.actions = {};
          e.showView = function(e) {
            _i_("b71:4011e8fa"), this.render(e.view), _r_()
          }, e.submit = function(e) {
            _i_("b71:9206980d");
            var t = this;
            d.submitModel(this.config.url, this.model).done(function() {
              _i_("b71:4ee30ade");
              var e = t.config.timeout;
              e && !t.config.neverExpire && t.storage.set(t.model.poll, !0, 1e3 * e * 3600), _r_()
            }).fail(function() {
              _i_("b71:9beecf9b");
              var e = t.config.defaultErrorView;
              if (t.views[e]) return _r_(t.render(e));
              throw n.emit("FLOOPS.request.error"), Error("[FLOOPS] Error submitting feedback")
            }), _r_()
          }, e.beforeSubmit = function(e) {
            _i_("b71:79db7a77"), this.$el.trigger("feedback_beforeSubmit"), this.updateModel(this.currentView), _r_()
          }, e.autoClose = function() {
            _i_("b71:c5dba1d8"), setTimeout(function() {
              _i_("b71:1c41d85f"), $el.fadeOut(200), _r_()
            }, 3e3), _r_()
          }, e.reset = function() {
            _i_("b71:9a0521b6"), this.updateModel(this.currentView, !0), _r_()
          }, e.close = function() {
            _i_("b71:e7199284"), this.$el.hide(), _r_()
          }, e.trackGaEvent = function(e) {
            _i_("b71:ae1fba28");
            var t, i = (e.feedbackGaEvent || "").split("|"),
              n = {
                nonInteraction: !0
              };
            "www" === r.env.b_site_type ? t = a("ga-tracker") : "mdot" === r.env.b_site_type && (t = a("ga-tracker")), 2 <= i.length && (n.type = i[0], n.action = i[1] || "", n.label = i[2] || "", void 0 !== i[3] && (n.value = i[3])), t && t.trackEvent && n.type && n.action && n.label && ("www" === r.env.b_site_type ? t.trackEvent(n.type, n.action, n.label, n.value) : "mdot" === r.env.b_site_type && t.trackEvent(n.type, n.action, n.label, n.value)), _r_()
          }, _r_()
        },
        updateModel: function(e, o) {
          _i_("b71:8c5f6d43");
          var _ = this,
            t = this.views[e],
            s = t ? t.$view : this.$el,
            c = {};
          s.find("[data-model]").each(function(e, t) {
            _i_("b71:c8bca89d");
            var i, n = l(t),
              a = n.data();
            if (a.model && (i = String(a.model).match(/^([^\[\]]+)\[\]$/))) return function(a) {
              if (_i_("b71:89662d3e"), c[a]) return _r_();
              c[a] = [], s.find('[data-model="' + a + '[]"]').each(function(e, t) {
                _i_("b71:f9d9f114");
                var i = l(t),
                  n = o ? "" : i.val();
                i.is(":checkbox,:radio") && !i.prop("checked") && (n = ""), n && c[a].push(n), _r_()
              }), d.setObjectPath(_.model, a, c[a].join(",")), _r_()
            }(i[1]), _r_();
            if (a.hasOwnProperty("modelValue")) return _r_();
            var r = o ? "" : n.val();
            n.is(":checkbox,:radio") && !n.prop("checked") && (r = ""), d.setObjectPath(_.model, a.model, r), _r_()
          }), _r_()
        },
        initActions: function() {
          _i_("b71:259473b1");
          var r = this;
          this.$el.find(":not([data-component]) [data-action]").each(function(e, t) {
            _i_("b71:36b8259b");
            var i = l(t),
              n = l.extend({
                action: r.config.defaultAction,
                on: r.config.defaultActionEvent,
                autoclose: i.data("autoclose") || !1,
                stopPropagation: i.data("stopPropagation") || r.config.stopPropagation
              }, i.data()),
              a = n.action.split(/\s+/);
            i.on(n.on, function(e) {
              _i_("b71:83d6d4ab"), n.model && n.modelValue && d.setObjectPath(r.model, n.model, n.modelValue), r.updateModel(r.currentView), n.stopPropagation && e.stopPropagation(), a.forEach(function(e) {
                _i_("b71:756f323f"), r.actions[e].call(r, n), _r_()
              }), _r_()
            }), _r_()
          }), r.config.stopPropagation && this.$el.on("click", function(e) {
            _i_("b71:72b5d735"), e.stopPropagation(), _r_()
          }), _r_()
        },
        render: function(i) {
          _i_("b71:477c817d");
          var n = this;
          if (!this.views) return _r_();
          if (this.$el.removeClass("feedback-loop--hidden"), (i = i || this.config.defaultView) === this.currentView) return _r_();
          Object.keys(this.views).forEach(function(e) {
            _i_("b71:964d4dbb");
            var t = this.views[e].$view;
            if (e === i) {
              this.currentView = e, t.data("viewAnimated") ? t.slideDown(300) : t.show();
              t.data("autoclose") && !/off|0|disabled|none/g.test(t.data("autoclose")) && setTimeout(function() {
                _i_("b71:4d1f0d35"), n.$el.fadeOut(300), _r_()
              }, 2e3)
            } else t.hide();
            _r_()
          }.bind(this)), this.triggerResize(), _r_()
        }
      }), _r_()
    }), o.prototype.getStorage = function(e) {
      _i_("b71:461c66cd");
      try {
        var t = window[e],
          i = "__storage_test__";
        return t.setItem(i, i), t.removeItem(i), _r_(t)
      } catch (e) {
        return _r_()
      }
      _r_()
    }, o.prototype.saveData = function() {
      if (_i_("b71:c040d6c7"), !this._storage) return _r_();
      return _r_(this._storage.setItem(this.ns, JSON.stringify(this.data)))
    }, o.prototype.loadData = function() {
      _i_("b71:55940a9d");
      var t = this._storage.getItem(this.ns);
      try {
        t = t && JSON.parse(t) || {}
      } catch (e) {
        t = {}
      }
      this.data = t, _r_()
    }, o.prototype.removeExpired = function() {
      _i_("b71:c16e0b02");
      var e = Object.keys(this.data),
        t = this.data;
      e.filter(this.isExpired.bind(this)).forEach(function(e) {
        _i_("b71:ba16d4d4"), delete t[e], _r_()
      }), this.saveData(), _r_()
    }, o.prototype.isExpired = function(e, t) {
      _i_("b71:52fac0b6"), t = t || (new Date).getTime();
      var i = this.data[e];
      if (!i || !i.expires) return _r_(!0);
      return _r_(t > i.expires)
    }, o.prototype.remove = function(e) {
      _i_("b71:29b0b53c"), delete this.data[e], this.saveData(), _r_()
    }, o.prototype.set = function(e, t, i) {
      if (_i_("b71:5b7dfa47"), i && i.constructor !== Date) {
        var n = (new Date).getTime();
        i = new Date(n + i).getTime()
      }
      this.data[e] = {
        value: t,
        expires: i
      }, this.saveData(), _r_()
    }, o.prototype.get = function(e) {
      _i_("b71:4f04d384");
      var t, i = this.data,
        n = i[e];
      return i[e] && (this.isExpired(e) ? this.remove(e) : t = n.value), _r_(t)
    }, _r_()
  }(window.booking),
  function(c) {
    _i_("b71:6bfd22f0"), c.define("component/feedback-inline", function(_, e, t) {
      _i_("b71:d0c93dc4");
      var i = _("component"),
        n = _("events"),
        s = _("jquery");
      t.exports = i.extend({
        init: function() {
          _i_("b71:b98f0641");
          var i = this;
          this.config = {
            url: "/receive_content_feedback",
            modalExtraClass: "feedback-modal-wrapper",
            modalMaskExtraClass: "",
            hideClass: "",
            modalPosition: "fixed",
            modalTopMargin: 0,
            autoFocus: !0
          }, this.setupComponent(), this.$el.on("click", "[data-action]", function(e) {
            _i_("b71:20084900");
            var t = s(this);
            e.preventDefault(), t.data("stopPropagation") && e.stopPropagation(), i.runElementActions(t), _r_()
          }), _r_()
        },
        runElementActions: function(n, e) {
          _i_("b71:271c4ea2");
          var a = this,
            t = (e || n.data("action") || "").split(/\s+/);
          s.each(t, function(e, t) {
            _i_("b71:0434bc19");
            var i = a["action_" + t];
            "function" == typeof i && i.call(a, n), a.triggerActionEvents(t), _r_()
          }), _r_()
        },
        action_submit: function(e) {
          _i_("b71:4e6dfb26");
          var t = e.data("model"),
            i = e.data("modelValue"),
            n = this.getModel();
          return t && (n[t] = i), this.$el.trigger("feedbackInline_submit", n), _r_(s.ajax({
            url: this.config.url,
            method: "POST",
            data: n
          }))
        },
        action_external: function(e) {
          _i_("b71:0d5779b7");
          var t = c.env && c.env.b_is_tdot_traffic ? c.lightbox : _("lightbox"),
            i = e.data("url"),
            n = e.data("iframe_height_percentage") || 90,
            a = {
              iframe: !0,
              iframeHeight: Math.max(Math.floor(n * s(window).height() / 100), 550),
              hideCallBack: function() {
                _i_("b71:ed8d9f5d"), s(document.body).css("overflow", ""), _r_()
              }
            };
          i && (t.show(i, a), s(document.body).css("overflow", "hidden")), _r_()
        },
        action_modal: function(e) {
          _i_("b71:1d295707");
          var t, i = this,
            n = c.env && c.env.b_is_tdot_traffic ? c.lightbox : _("lightbox"),
            a = e.data("showForm"),
            r = e.data("modalView"),
            o = a ? s(a) : s(".feedback-loop-lightbox").filter('[data-poll="' + this.config.poll + '"]').eq(0);
          if (!o.length) return _r_();
          r && (t = o.data("componentInstanceFeedbackBase")) && t.render && t.render(r), n.show(o, {
            customWrapperClassName: this.config.modalExtraClass,
            position: this.config.modalPosition,
            topMargin: this.config.modalTopMargin,
            customMaskClassName: this.config.modalMaskExtraClass,
            hideCallBack: function() {
              _i_("b71:d70cc8f4"), i.$el.trigger("feedbackInline_hideModal", {
                $feedbackForm: o
              }), i.triggerActionEvents("hideModal"), _r_()
            },
            hideBeforeCallBack: function() {
              _i_("b71:bc2c01f7"), i.$el.trigger("feedbackInline_beforeHideModal", {
                $feedbackForm: o
              }), _r_()
            }
          }), o.off(".feedbackInline").on("click.feedbackInline", "[data-close]", function() {
            _i_("b71:70046991"), n.hide(), _r_()
          }).on("click.feedbackInline", '[data-action~="submit"]', function() {
            _i_("b71:52ad58e5"), i.$el.trigger("feedbackInline_submitModal"), i.triggerActionEvents("submitModal", {
              $modal: o
            }), e.data("hideOnModalSubmit") && i.action_hide(), _r_()
          }).on("feedbackBase_resize", function() {
            _i_("b71:78825520"), n.rePosition({
              preserveAbsolute: !0
            }), _r_()
          }), i.config.autoFocus && o.find("input:visible, textarea:visible").first().focus(), i.$el.trigger("feedbackInline_showModal"), i.triggerActionEvents("showModal", {
            $modal: o
          }), _r_()
        },
        action_extraForm: function(e) {
          _i_("b71:b91183ca");
          var t, i = this,
            n = e.data("showForm"),
            a = s(n || '.feedback-loop-extra[data-poll="' + this.config.poll + '"]');
          if (!a.length) return _r_();
          a.data("tmplName") && (a = this.replaceWithJsTmpl(a)).addClass("feedback-loop-extra").attr("data-poll", this.config.poll), e.data("extraFormAnimated") ? a.slideDown(300) : a.show(), this.config.autoFocus && setTimeout(function() {
            _i_("b71:3d81a8ff"), a.find("input:text:visible,textarea:visible").focus(), _r_()
          }, 50), this.$el.trigger("feedbackInline_showExtra"), a.find('[data-action~="close"],[data-close]').off(".feedbackInline").on("click.feedbackInline", function() {
            _i_("b71:fcdcf62d"), i.$el.trigger("feedbackInline_hideExtra"), e.data("showOnCancel") && !t ? i.$el.show() : e.data("hideOnExtraClose") && i.action_hide(), _r_()
          }).end().find('[data-action~="submit"]').off(".feedbackInline").on("click.feedbackInline", function() {
            _i_("b71:c886f54b"), t = !0, e.data("hideOnExtraSubmit") && i.action_hide(), i.$el.trigger("feedbackInline_submitExtra"), i.triggerActionEvents("submitExtra", {
              $extraForm: a
            }), _r_()
          }), _r_()
        },
        action_hide: function(e) {
          _i_("b71:199b9109");
          var t = this,
            i = e ? e.data("hideDelay") : null,
            n = e ? e.data("hideAnimated") : null,
            a = function() {
              _i_("b71:9052449d"), n ? t.$el.slideUp(200) : t.$el.hide(), t.config.hideClass && t.$el.addClass(t.config.hideClass), _r_()
            };
          i ? setTimeout(a, i) : a(), _r_()
        },
        action_hideOther: function(e) {
          _i_("b71:22f931fe"), s('[data-component*="feedback-inline"][data-poll="' + this.config.poll + '"]').not(this.$el).hide(), _r_()
        },
        action_hideForeign: function(e) {
          _i_("b71:8bfe7520");
          var t = (e.data("hideForeign") || "").split(/\s+/);
          t.length && s.each(t, function(e, t) {
            _i_("b71:5f346003"), t && s('[data-component*="feedback-inline"][data-poll="' + t + '"]').hide(), _r_()
          }), _r_()
        },
        action_showView: function(e) {
          _i_("b71:682b0ccb");
          var n = this,
            a = e.data("showView"),
            t = this.$el.find("[data-view]"),
            r = t.filter('[data-view="' + a + '"]').data("viewAnimated");
          t.each(function() {
            _i_("b71:129d638c");
            var e = s(this),
              t = e.data("view"),
              i = e.is(":visible");
            t !== a || i ? t !== a && i && (r ? e.slideUp(200) : e.hide()) : r ? (n.$el.css({
              overflow: "hidden",
              height: n.$el.height()
            }), e.slideDown(300, function() {
              _i_("b71:13b8c923"), n.$el.css({
                overflow: "",
                height: ""
              }), _r_()
            }), s(".inline-feedback__hidden").focus()) : e.show(), _r_()
          }), _r_()
        },
        action_trackGaEvent: function(e) {
          _i_("b71:5b4052cd");
          var t, i = (e.data("feedbackGaEvent") || "").split("|"),
            n = {
              nonInteraction: !0
            };
          "www" !== c.env.b_site_type && "mdot" !== c.env.b_site_type || (t = _("ga-tracker")), 2 <= i.length && (n.type = i[0], n.action = i[1] || "", n.label = i[2] || "", void 0 !== i[3] && (n.value = i[3])), t && t.trackEvent && n.type && n.action && n.label && t.trackEvent(n.type, n.action, n.label, n.value), _r_()
        },
        replaceWithJsTmpl: function(e) {
          _i_("b71:e07a2005");
          var t = e.data(),
            n = {
              poll_id: this.config.poll
            },
            i = "",
            a = e;
          return c.jstmpl && t.tmplName && (s.each(t, function(e, t) {
            _i_("b71:188ac3e4");
            var i = e.match(/^tmplData(.+)$/);
            i && i[1] && (n[String(i[1]).toLowerCase()] = t), _r_()
          }), s.isPlainObject(t.tmplData) && s.extend(n, t.tmplData), i = c.jstmpl(t.tmplName).render(n)), i && (a = s(i), e.replaceWith(a), a.loadComponents()), _r_(a)
        },
        setupComponent: function() {
          _i_("b71:4feb1c29"), s.extend(this.config, this.$el.data()), _r_()
        },
        getModel: function() {
          _i_("b71:50979ab4");
          var e = this.$el.find("[data-view]:visible"),
            i = {
              url: window.location.href,
              action: window.booking && window.booking.env && window.booking.env.b_action,
              poll: this.config.poll
            };
          return e.length || (e = this.$el), e.find("[data-model]").each(function() {
            _i_("b71:cae24094");
            var e = s(this),
              t = e.data();
            !t.hasOwnProperty("modelValue") && t.model && (i[t.model] = e.val()), _r_()
          }), _r_(i)
        },
        triggerActionEvents: function(e, t) {
          _i_("b71:b886f9dc");
          var i = s.extend({
            feedbackInline: this
          }, t || {});
          n && e && (n.emit("feedbackInline:" + e, i), this.config.poll && n.emit("feedbackInline:" + e + ":" + this.config.poll, i)), _r_()
        }
      }), _r_()
    }), _r_()
  }(window.booking), booking.lightbox = function() {
    _i_("b71:47a1a86e1");
    var c, l, a, r, o, _, i, n = $("body"),
      s = {
        bAnimation: !0,
        bCloseButton: !0,
        bMaskClick: !0,
        closeOnEsc: !0,
        customWrapperClassName: "",
        customMaskClassName: "",
        bFullscreen: !1,
        hideCallBack: null,
        hideBeforeCallBack: null,
        positionBeforeCallBack: null,
        positionAfterCallBack: null,
        cloneElement: !1,
        bCanScroll: !1,
        bOverflowVisible: !1,
        autoCenter: !0,
        limitHeight: !1,
        opacity: .5,
        autoWidth: !1,
        position: "fixed",
        topMargin: 0,
        bottomMargin: 0,
        preventBodyScroll: !1,
        trapFocus: !0,
        addDialogStartEndText: !1,
        modalLabeledById: ""
      },
      d = {},
      t = [],
      u = function() {
        _i_("b71:b0c0e96f1");
        for (var e = ["", "moz", "webkit"], t = 0; t < 3; t++)
          if (e[t] + ("" === e[t] ? "b" : "B") + "oxSizing" in document.body.style) return _r_(!0);
        return _r_(!1)
      }(),
      b = !1;
    var h = function(i) {
        var n;
        _i_("b71:4cee35e61"), d.positionBeforeCallBack && d.positionBeforeCallBack(), c.css({
          width: $(document).width(),
          height: $(document).height()
        });
        var e = $(window).width(),
          t = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
        if (u || (e = e - parseInt(l.css("paddingLeft")) - parseInt(l.css("paddingRight")), t = t - parseInt(l.css("paddingTop")) - parseInt(l.css("paddingBottom"))), !d.limitHeight) {
          var a = Math.max(0, $(window).height() - d.topMargin - d.bottomMargin);
          l.outerHeight() > a ? (l.css("height", t), n = !0) : (l.css("height", ""), l.outerHeight() >= a && l.css("height", t))
        }
        if (l.outerWidth() > $(window).width()) l.css("width", e);
        else if (l.css("width", ""), l.outerWidth() >= $(window).width()) l.css("width", e);
        else if (d.autoWidth) {
          var r = l.children().first().outerWidth();
          u && (r += parseInt(l.css("padding-left"), 10) + parseInt(l.css("padding-right"), 10), r += parseInt(l.css("border-left-width"), 10) + parseInt(l.css("border-right-width"), 10)), l.css({
            width: r
          })
        }
        var o = 0,
          _ = 0;
        d.bFullscreen ? l.css({
          width: e,
          height: t
        }) : (o = Math.max(d.topMargin, $(window).height() / 2 - l.outerHeight() / 2), _ = Math.max(0, $(window).width() / 2 - l.outerWidth() / 2));
        var s = "hidden";
        d.bCanScroll ? s = "auto" : d.bOverflowVisible && (s = "visible"), "absolute" == d.position ? (o = Math.max(0, $(window).height() / 2 - l.outerHeight() / 2), o += $(document).scrollTop(), l.css("position", "absolute")) : "dynamic" == d.position && function() {
          _i_("b71:247e60241");
          var e = "modal-pos-abs",
            t = "modal-pos-to-fix";
          n ? (o = i && i.preserveAbsolute && l.hasClass(e) ? (l.offset() || {}).top : $(document).scrollTop() + d.topMargin, l.css({
            position: "absolute",
            height: ""
          }).addClass(e)) : (l.css({
            position: "fixed"
          }), l.hasClass(e) ? l.removeClass(e).addClass(t) : l.removeClass(t)), _r_()
        }(), l.css({
          top: o,
          left: _,
          overflow: s
        }), d.positionAfterCallBack && d.positionAfterCallBack(), _r_()
      },
      f = function(e) {
        _i_("b71:540f29621"), l && l.is(":visible") && h(e), _r_()
      },
      p = function() {
        if (_i_("b71:881a5a711"), !l) return _r_();
        d.hideBeforeCallBack && d.hideBeforeCallBack(), d.cloneElement || (r.prepend(a), a.css("display", _)), d.trapFocus && booking.trapFocus && booking.trapFocus.release(), c.remove(), l.remove(), b = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", f), $(window).unbind("resize", f), d.closeOnEsc && $(document).unbind("keyup", m), $(".modal-wrapper").off("click.userClose"), $("#calendar_popup").css("display", "none"), d.hideCallBack && d.hideCallBack(), d.preventBodyScroll && (_i_("b71:347a52631"), n.css({
          overflow: "auto",
          paddingRight: i
        }), _r_()), booking.eventEmitter.trigger("modal:close"), B.events.trigger("modal:close"), _r_()
      },
      m = function(e) {
        _i_("b71:53ad8b021"), 27 !== e.keyCode || t.length || p(), _r_()
      },
      v = function() {
        if (_i_("b71:deba661e1"), c = $('<div class="modal-mask"/>').appendTo(document.body), 0 < d.customMaskClassName.length && c.addClass(d.customMaskClassName), l = $('<div class="modal-wrapper"/>').attr({
            role: "dialog",
            "aria-label": "dialog",
            "aria-modal": "true"
          }).appendTo(document.body), d.modalLabeledById) {
          var e = $("#" + d.modalLabeledById),
            t = e.text().trim();
          e.length && t ? l.attr("aria-label", t) : l.attr("aria-labelledby", d.modalLabeledById)
        }
        0 < d.customWrapperClassName.length && l.addClass(d.customWrapperClassName), d.addDialogStartEndText && booking.env.a11y_dialog_content_start_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_start_text).appendTo(l), d.cloneElement ? a.clone().appendTo(l) : l.append(a), d.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"><span class="invisible_spoken">' + booking.env.experiment_popups_close + "</span></button>").appendTo(l), d.addDialogStartEndText && booking.env.a11y_dialog_content_end_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_end_text).appendTo(l), d.bFullscreen && l.addClass("modal-wrapper--fullscreen"), b = !0, $("body").addClass("modal-visible"), d.preventBodyScroll && function() {
          _i_("b71:0a9b623a1");
          var e = n.width();
          i = parseInt(n.css("padding-right"), 10), n.css("overflow", "hidden");
          var t = n.width() - e;
          n.css("padding-right", i + t), _r_()
        }(), a.show(), h(), _i_("b71:8fed25031"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
          _i_("b71:b5838b9c1"), p(), _r_()
        }), $(".modal-wrapper").on("click.userClose", ".lightbox-element-close", function() {
          _i_("b71:ab60bbf11"), p(), _r_()
        }), d.bMaskClick && $(".modal-mask").one("click", function() {
          _i_("b71:2beba14a1"), p(), _r_()
        }), d.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", f), "absolute" == d.position && d.autoCenter && $(window).bind("scroll", f), _r_(), _r_()
      },
      g = function() {
        if (_i_("b71:77b79d8f1"), v(), l.css("visibility", "visible"), d.bAnimation) {
          var e = d.bAnimation;
          "number" != typeof e && (e = parseInt(e, 10) || 1e3), c.fadeTo(Math.max(0, Math.min(600, e - 400)), d.opacity), l.css("opacity", "0").animate({
            opacity: 1
          }, e, function() {
            _i_("b71:2e039ac21"), $(this).css("opacity", ""), _r_()
          }), d.trapFocus && booking.trapFocus && setTimeout(function() {
            _i_("b71:e718942f1"), booking.trapFocus.trap(l[0], o), o = null, _r_()
          }, 100)
        } else c.css("opacity", d.opacity).show(), d.trapFocus && booking.trapFocus && (booking.trapFocus.trap(l[0], o), o = null);
        d.ajax && "function" == typeof d.loadCallBack && d.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), B.events.trigger("modal:open"), _r_()
      };
    return _r_({
      show: function(e, t, i) {
        if (_i_("b71:8db3284d1"), l && l.is(":visible")) return _r_();
        if (d = {}, $.extend(d, s, t), d.trapFocus && void 0 === booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"), d.trapFocus && booking.trapFocus && (o = $(document.activeElement)), d.iframe) {
          var n = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + d.iframeHeight + '"></iframe> ');
          "function" == typeof d.loadCallBack && n.load(d.loadCallBack), r = (a = n).parent(), _ = a.css("display"), g()
        } else d.ajax ? jQuery.ajax({
          url: e,
          cache: !0,
          success: function(e) {
            _i_("b71:7acdb3941"), a = d.ajaxRawContent ? $(e) : $($.trim(e)).eq(0), r = a.parent(), _ = a.css("display"), g(), _r_()
          }
        }) : ((a = $(e)).length && "SCRIPT" === a[0].tagName && (a = $($.trim(a.html()))), r = a.parent(), _ = a.css("display"), g());
        return void 0 !== i && i(), _r_(l)
      },
      hide: p,
      rePosition: f,
      open: function(e, t, i, n) {
        _i_("b71:c48b243c1"), booking.lightbox.show($("#" + n)), _r_()
      },
      isVisible: function() {
        return _i_("b71:460df7691"), _r_(b)
      },
      pushEscStack: function(e) {
        _i_("b71:5fd3d9f71"), t.push(e), _r_()
      },
      popEscStack: function() {
        _i_("b71:29642ab71"), t.pop(), _r_()
      },
      hideWithFade: function(e, t) {
        _i_("b71:0cf0d60c1"), l.fadeOut(e), c.fadeOut(e, function() {
          _i_("b71:b8953fa01"), p(), t && t(), _r_()
        }), _r_()
      }
    })
  }(), B.define("lightbox", booking.lightbox), B.require(["jquery"], function(e) {
    _i_("b71:6fcc3aa3"), e("#yielding_free_cancellation_addon_banner").on("click", ".bui-banner__close", function() {
      _i_("b71:999ba99c"), e.get("/dismiss_yielding_free_cancellation_addon_banner"), _r_()
    }), _r_()
  }), B.define("component/fragment/joinapp-retargeting", function(e, t, i) {
    _i_("b71:be2e4cc4");
    var n = e("component/fragment"),
      a = e("jquery");
    i.exports = n.extend({
      fragmentAfterRender: function(e) {
        _i_("b71:ecb22702"), n.prototype.fragmentAfterRender.call(this), e.data && a("#join_banner_index").hide(), _r_()
      }
    }), _r_()
  }), B.define("component/sp-banner/floating", function(e, t, i) {
    "use strict";
    _i_("b71:77343ade");
    var n = e("component"),
      a = $("body");
    i.exports = n.extend({
      init: function() {
        _i_("b71:4ca072c2"), this.props = {
          height: this.$el.outerHeight()
        }, this.setLayout(), window.BUI.getInstance(this.el).props.onAfterClose = this.resetLayout.bind(this), _r_()
      },
      setLayout: function() {
        _i_("b71:fda75054");
        var e = parseInt(a.css("padding-bottom"), 10) + this.props.height;
        a.css("padding-bottom", e), _r_()
      },
      resetLayout: function() {
        _i_("b71:3c0d50ec");
        var e = parseInt(a.css("padding-bottom"), 10) - this.props.height;
        a.css("padding-bottom", e), _r_()
      }
    }), _r_()
  }), B.when({
    events: "ready",
    condition: B.env.fe_track_ski_discovery
  }).run(function(e) {
    _i_("b71:f6a19f0a");
    var t = e("et"),
      i = e("utils/debounce"),
      n = e("events"),
      a = "cJaSQVUQSFfEC",
      r = $(window),
      o = $(document);

    function _() {
      _i_("b71:80912ab3"), t.customGoal(a, 1), _r_()
    }
    _i_("b71:46d1a7a1"), r.one("scroll.ski_discovery", i(_, 200, !0)), _i_("b71:42427f26"), o.on("click", ".sb-searchbox__button", function() {
      _i_("b71:05a9e91e"), t.goalWithValue("js_ski_lp_last_interaction", 1), t.goalWithValue("js_ski_lp_interaction", 1), _r_()
    }), o.on("click", ".main-carousel", function(e) {
      _i_("b71:eb880f19"), t.goalWithValue("js_ski_lp_last_interaction", 2), t.goalWithValue("js_ski_lp_interaction", 2), _r_()
    }), o.on("click", ".ski-lp-resort-list, .ski-lp-resort-list-grid", function() {
      _i_("b71:2dd8357e"), t.goalWithValue("js_ski_lp_last_interaction", 3), t.goalWithValue("js_ski_lp_interaction", 3), _r_()
    }), n.on("SKI_LP_RESORT_MAP:OPEN", function() {
      _i_("b71:7e358096"), t.goalWithValue("js_ski_lp_last_interaction", 4), t.goalWithValue("js_ski_lp_interaction", 4), _r_()
    }), n.on("SKI_LP_RESORT_OP:OPEN", function() {
      _i_("b71:05033543"), t.goalWithValue("js_ski_lp_last_interaction", 5), t.goalWithValue("js_ski_lp_interaction", 5), _r_()
    }), _r_(), _r_(), _r_()
  }), b.env.scripts_tracking.lp.run = 1;