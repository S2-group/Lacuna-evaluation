var _i_ = this._i_ || null,
  _r_ = this._r_ || null,
  _sp_ = this._sp_ || null;
b.env.scripts_tracking.app = {
    loaded: 1,
    run: 0
  }, b.env = b.env || {}, b.utils = b.utils || {}, b.map = b.map || {}, b.errors = b.errors || {}, b.errors.list = b.errors.list || [], b.errors.additional_info = b.errors.additional_info || {}, B.require(["jquery"], function(r) {
    "use strict";
    _i_("385b:1a0d3e6f"), r(function() {
      _i_("385b:9be7cbe0"), {
        $element: null,
        hotelId: null,
        continueBookingUrl: null,
        continueBookingCheckin: null,
        continueBookingCheckout: null,
        continueBookingCheckinNotFormatted: null,
        continueBookingCheckoutNotFormatted: null,
        servers: ["q.bstatic.com", "r.bstatic.com"],
        init: function(e) {
          _i_("385b:6e618b78");
          var t = this;
          if (t.$element = r(e), 0 == t.$element.length) return _r_();
          t.hotelId = t.$element.data("hotel-id"), t.continueBookingUrl = t.$element.data("continue-booking-url"), t.continueBookingCheckin = t.$element.data("checkin"), t.continueBookingCheckout = t.$element.data("checkout"), t.continueBookingCheckinNotFormatted = t.$element.data("checkin-not-formatted"), t.continueBookingCheckoutNotFormatted = t.$element.data("checkout-not-formatted"), t.guestCount = t.$element.data("guest-count"), t.load(), _r_()
        },
        load: null,
        onHotelLoaded: null,
        onHotelNotLoaded: null,
        render: null,
        getHotelsJsonUrl: null,
        getPhotoUrl: null,
        getBlockId: null,
        getBlockRoomsLeft: null,
        getBlockRoomName: null,
        getBlockRoomTypeId: null
      }.init(".continue-booking"), _r_()
    }), _r_()
  }), booking.jstmpl("m_bp_promote_last_bs2_property_template", function() {
    _i_("385b:44c158fa");
    var i, r = ["\n", "\n    ", "\n\n    ", '\n\n    <h3 class="continue-booking__title">', "/private/m_complete_your_booking_header/name", '</h3>\n\n            <a id="', '" href="', 'm_lp_cb_rl=1" class="continue-booking__property loadingButtonInit continue-booking__property-with-rooms">\n\n                <div class="spinner"></div>\n                <div class="continue-booking__property-image" style="background-image: url(', ');"></div>\n\n                <div class="continue-booking__property-details">\n\n                    <h3 class="continue-booking__property-name">', "</h3>\n\n                    \n                    ", '\n\n                        <p class="continue-booking__property-class">\n\n                            \n                            ', "\n\n                                ", '\n\n                                <span class="icon icon-circles-', "-5", '" alt="', '" title="', '"></span>\n\n                            ', "\n                                    ", "\n                                ", "\n                                        ", '\n                                        <span class="china_no_start_rating_mobile_adj">', "</span>\n                                    ", '\n                                    <span class="icon icon-circles-', '"></span>\n                                ', '\n                                    <span class="icon icon-stars-', "\n\n                            ", "\n\n                        </p>\n                    ", '\n\n\n                    <p class="continue-booking__property-line">\n\n                        ', "\n                        ", '\n\n                    </p>\n\n                    <p class="continue-booking__property-room-name" >\n                        ', "\n                    </p>\n\n                    \n\n\t\t\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t\t\t\t\t", '\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="continue-booking__property-rooms-left" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t', "/private/m_hstls_fin_urgency_num_beds_left/name", "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t", "/private/m_rlu_rooms_uni/name", "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t", "\n                    ", '\n                        <p class="continue-booking__property-last-booked" >\n                            ', "\n                        </p>\n                    ", '\n\n                    <button class="continue-booking__property-cta primary_cta" type="button" title="', "/private/m_complete_your_booking_button/name", '">\n                        ', "\n                    </button>\n\n                </div>\n            </a>\n\n"],
      a = ["fe_china_estimated_rating", "property_name", "name", "id", "continueBookingUrl", "b_query_params_delimiter", "main_photo_url", "star_rating_text", "estimated_rating", "class", "class_is_half", "class_is_estimated", "cc1", "sr_star_property", "accommodationtype_id", "fe_nostar_rating_stars", "b_lang_for_url", "star_rating_dots_tooltip_zhcn", "start_date", "continueBookingCheckin", "end_date", "continueBookingCheckout", "m_complete_your_booking_dates", "block_room_name", "block_rooms_left", "block_room_type_id", "last_booking_info"];
    return _r_(null)
  }()), B.require(["jquery", "et"], function(i, e) {
    "use strict";
    _i_("385b:bd0f7c95");
    var t = !parseInt(B.env.b_first_visit),
      n = i.cookie("gta_prompt_seen");
    if (-1 != B.env.b_lang.search(/zh/i)) var r = !0;
    if (-1 != B.env.b_lang.search(/ar/i)) var a = !0;
    if ("index" != B.env.b_action || !B.env.b_is_android && !b.env.b_is_iphone || !r && !a || !t || n || B.env.aff_is_mobile_hybrid) return _r_();
    if (r && !B.env.b_is_android) return _r_();
    i(null), _r_()
  }), B.require(["event-bus", "persistent-view", "persistent-view/tabbed-nav-setup", "jquery"], function(e, r, t, a) {
    if (_i_("385b:b812448b"), !b.env.sr_or_lp) return _r_();
    if (r.enabled) {
      if (r.aliases("list", "main"), r.aliases("srList", "main"), "searchresults" === b.env.b_action) {
        var n = t.config;
        r.register("sr_map", {
          asap: !1,
          load: n.load,
          destroy: n.destroy
        }), r.register("sr_sortfilters", n)
      }
      r.register("places", {
        load: null
      }), e.on(e.EVENTS.M_TABS_RESET, null)
    }
    a("table#m_tabs td").click(null), _r_()
  }), booking.browserStorageHandler = function(l, e, d, u) {
    _i_("385b:a11e61ce");
    var f = !1;
    try {
      (f = !(!l.localStorage || !l.sessionStorage)) && l.localStorage.setItem("btest", "1")
    } catch (e) {
      f = !1
    }
    var i = {
      _readCookie: null,
      _modifySingleValue: null,
      _getValue: null
    };
    return _r_({
      addSessionValue: null,
      deleteSessionValue: null,
      getSessionValue: null,
      addPermanentValue: null,
      deletePermanentValue: null,
      getPermanentValue: null,
      isLocalStorageSupported: function() {
        return _i_("385b:1bca3a3a"), _r_(f)
      }
    })
  }(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), B.define("component/referral/floater", null), B.define("component/referral/invalid-link", null), B.define("component/referral/m_friend_land_experience", null), B.when({
    events: "ready",
    condition: $(".js-m_friend_land_experience__btn-trigger-share").length
  }).run(null), B.define("dismiss-item", function(e, t, n) {
    _i_("385b:4fa1a5b8");
    var i = e("jquery");
    n.exports = null, _r_()
  }), B.define("component/dismissible-item/block", function(e, t, n) {
    _i_("385b:1d6e38f0");
    var i = e("component"),
      r = e("dismiss-item"),
      a = e("read-data-options");
    n.exports = i.extend({
      init: function() {
        _i_("385b:60262eac"), this.options = a(this.$el, {
          itemId: {
            name: "item-id",
            type: String,
            required: !0
          }
        }), this._bindEvents(), _r_()
      },
      _bindEvents: function() {
        _i_("385b:bc2d0b27"), this.$el.on("click", ".js-close", null.bind(this)), _r_()
      },
      _dismissItem: null,
      hide: null
    }), _r_()
  }), B.define("component/dismissible-item/on-init", null), B.define("segment", ["events", "jquery"], function(t, n) {
    "use strict";
    _i_("385b:4eaa5c22");
    var i = {},
      r = B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported() && window.JSON && window.JSON.stringify || B.storage,
      a = "track_segments",
      _ = function() {
        if (_i_("385b:3ed23794"), !r) return _r_({});
        var e;
        if (B.storage) e = B.storage({
          location: "sessionstorage",
          key: a
        });
        else if (e = B.browserStorageHandler.getSessionValue(a)) try {
          e = n.parseJSON(e)
        } catch (e) {}
        return _r_(e || {})
      };

    function o() {}
    return o.prototype.init = function() {
      _i_("385b:c185635b"), this.getStored().fired && (this._fired = !0), _r_()
    }, o.prototype.fire = null, o.prototype.getStored = function() {
      return _i_("385b:28517a6f"), _r_(_()[this.name] || {})
    }, o.prototype.store = null, o.prototype.onFire = null, o.getInstance = function(e) {
      return _i_("385b:91040b08"), i[e] || (i[e] = new o, i[e].name = e, i[e].init()), _r_(i[e])
    }, o.segmentExists = null, _r_(o)
  }), B.require(["segment"], function(e) {
    _i_("385b:05ef45cb");
    var t = e.getInstance("facilities-aware"),
      r = {};

    
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(null), B.when({
      action: "hotel",
      events: "click #hotel_facility_block"
    }).run(null), _r_()
  }), B.require(["segment"], function(e) {
    _i_("385b:363cc8fa");
    var t = e.getInstance("facilities-filter"),
      r = {};
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(null), _r_()
  }), B.require(["segment"], function(e) {
    _i_("385b:303b0d0b");
    var t = e.getInstance("parking-aware"),
      r = {};
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(null), _r_()
  }), B.define("component/track-segment", null), B.require("jquery")(function(e) {
    _i_("385b:ddc997cc");
    var t = !!B.env.b_redirect_campaign_to_nearby,
      n = "nearby_search_trigerred",
      i = !!B.storage({
        key: n,
        location: "cookies"
      });
    if (!t) return _r_();
    if (i) return _r_();
    var r = e(".js-input_dest");
    if (!r.length) return _r_();
    r.val("");
    var a = r.searchbox();
    if ("object" != e.type(a)) return _r_();
    _i_("385b:0950dfbb"), a.resetDestination(), e("#submit_search").trigger("click"), B.storage({
      key: n,
      value: 1,
      location: "cookies",
      expires: .5
    }), _r_(), _r_()
  }), B.define("gta/impression-tracking", ["et", "jquery"], function(e, t) {
    _i_("385b:5eb445c4");
    var i = !0,
      r = [],
      a = [],
      _ = [],
      o = null;

    

    

    
    return _r_({
      trackWidgetImpressionOnView: null,
      trackLinkImpressionOnView: function(e) {
        _i_("385b:4df570ab"),
          function(e) {
            _i_("385b:bc596103");
            var t = e.getAttribute("id"),
              n = e.getAttribute("data-placement");
            t || (t = ("gta-link-" + n).toLowerCase(), e.setAttribute("id", t)), B.when({
              events: ["view #" + t, "gta:lightbox:init #" + t]
            }).run(null), _r_()
          }(e), _r_()
      },
      trackImpression: null
    })
  }), B.require(["gta/impression-tracking", "jquery"], function(n, e) {
    _i_("385b:5b984adc"), e(".gta-link-track").each(function(e, t) {
      _i_("385b:506a2561"), n.trackLinkImpressionOnView(t), _r_()
    }), _r_()
  }), B.define("searchbox/destinations", ["jquery", "events", "et"], function(n, i, e) {
    _i_("385b:16d590d8");
    var r, a, t = 0,
      _ = 0,
      o = n(".js-input_dest"),
      s = n(".popdest"),
      c = !0;

    function l(e) {
      _i_("385b:55653912"), r = n(e = e || ".searchForm").searchbox(), a = r.getAutocomplete(), _r_()
    }

    function d() {
      _i_("385b:3e55b1d2"), o.on("focus input keyup", null), o.on("blur", null), _r_()
    }

    function u() {
      _i_("385b:622eeb0c"), s.on("click", ".popdest__item", null), s.on("click", ".js-autocomplete-history-item", null), s.on("click", ".js-autocomplete-history-current-location", null), _r_()
    }

    

    

    
    return _r_({
      initEventHandlers: function(e) {
        _i_("385b:2062d1f5"), l(e), d(), u(), _r_()
      },
      initDisplay: d,
      initItems: u,
      showDestinations: f,
      hideDestinations: b,
      selectItem: h,
      setSearchbox: l,
      disableShowDestinations: null,
      enableShowDestinations: null
    })
  }),
  function() {
    "use strict";
    _i_("385b:4aca4f56");
    var i = B.require("jquery");
    B.when({
      events: "ready",
      action: ["index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "place"],
      condition: B.env.fe_abandoned_cart_growl_content && B.env.fe_abandoned_cart_growl_url && B.growl && !!i.cookie
    }).run(null), _r_()
  }();
var $ = B.require("jquery");
B.when({
    condition: "mdot" === B.env.b_site_type && $("#ge_genius_rate").length
  }).run(null), B.when({
    condition: B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
  }).run(function() {
    "use strict";
    _i_("385b:052b4a0a");
    var _, o = B.debug("fps"),
      s = 0;
    var e, c = !1;

    

    

    
    window.addEventListener("scroll", i, !0), B.eventEmitter.on("et-scroll-observer:scroll", i), setTimeout(null, 6e4), _r_()
  }), B.define("component/company/account-split/profile-switch-link", null), B.define("rewards-ui/ga-tracking", null), B.define("component/rewards-ui/ribbon", null), B.define("component/rewards-ui/landing", null), B.define("component/rewards-ui/offer-base", null), B.define("component/rewards-ui/offer-modal", null), B.define("component/rewards-ui/feedback-modal", null), B.when({
    events: "ready"
  }).run(function() {
    _i_("385b:25310b97");
    var e = function(e, t) {
      _i_("385b:f132ef94"), setTimeout(function() {
        _i_("385b:1401e2b8"), 0 < e.length && t(e), _r_()
      }, 0), _r_()
    };
    e($(".alternative_rewards__banner_container_desktop"), null), e($(".alternative_rewards__mdot_banner"), null), _r_()
  }),
  function(_, e) {
    "use strict";
    _i_("385b:94c159ab"), _.when({
      events: "load",
      action: ["index", "searchresults", "hotel"]
    }).run(function(e) {
      _i_("385b:1d9080a3");
      var t = e("jquery"),
        n = e("events"),
        i = e("event-bus"),
        r = t("form#form_search_location");
      if (!r.length) return _r_();
      var a = r.searchbox();
      a.applyValues({
        is_ski_area: _.env.b_is_ski_area
      }), i.on(n.EVENTS.AUTOCOMPLETE_ITEM_SELECTED, null), _r_()
    }), _r_()
  }(window.booking),
  function(e, t) {
    "use strict";
    _i_("385b:760086ff");
    var _ = "HMDCDCaSVTMIaUFaO";
    e.when({
      events: "ready",
      action: ["index", "searchresults", "hotel"],
      experiment: _
    }).run(null), e.when({
      events: "ready",
      action: "searchresults",
      experiment: _
    }).run(null), _r_()
  }(window.booking), B.define("component/referral/web-virality/ga", null), B.when({
    condition: B.env.fe_show_amazon_prime_onboarding_modal,
    events: "ready"
  }).run(null), B.when({
    condition: B.env.fe_show_amazon_prime_crosssell_modal,
    events: "ready"
  }).run(null), B.when({
    condition: B.env.fe_show_signle_sign_grab_welcome_modal,
    events: "ready"
  }).run(null), B.when({
    condition: B.env.fe_show_opentable_welcome_modal,
    events: "ready"
  }).run(null), B.when({
    events: "ready",
    condition: B.env.fe_new_level_comms_block_displayed && B.env.fe_new_level_comms_ga_tracking_enabled
  }).run(null), B.define("component/genius-week-index-banner", null), B.define("component/genius-countdown", null), B.when({
    events: "load",
    condition: B.env.fe_show_genius_week_onboarding
  }).run(null), B.when({
    events: "ready"
  }).run(function() {
    _i_("385b:2999ccdc");
    var e = B.env.fe_robot_note;
    e && B.require("jquery").post("/seo/robot_note", {
      note: e
    });
    _r_()
  }), B.define("component/cookie-consent/manage-settings", null);