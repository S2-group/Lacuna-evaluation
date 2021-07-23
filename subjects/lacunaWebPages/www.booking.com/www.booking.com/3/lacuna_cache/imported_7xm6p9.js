var _i_ = this._i_ || null,
  _r_ = this._r_ || null,
  _sp_ = this._sp_ || null;
b.env.scripts_tracking.lp = {
  loaded: 1,
  run: 0
};
var b = window.b || {};
b.map = b.map || {}, B.define("component/dropdown", null), $(function() {
    if (_i_("b71:52718e00"), "city" != b.env.b_action || $(".lp_sb_trigger").is("[data-tab-target]")) return _r_();
    $(".lp_sb_trigger").on("click", null), _r_()
  }),
  function(a) {
    "use strict";
    _i_("b71:0c71c0ed"), B.define("component/seo/more_relevant_nearby_cities", null), _r_()
  }(B.require("jquery")),
  function() {
    "use strict";
    _i_("b71:2f679b1d"), B.define("component/seo/top-accommodations", null), B.define("component/seo/top-accommodations-snap", null), _r_()
  }(),
  function() {
    "use strict";
    _i_("b71:192b450b"), B.define("component/seo/tabs-navigation", null), _r_()
  }(),
  function() {
    "use strict";
    _i_("b71:6996a028"), B.define("component/seo/target-click", null), _r_()
  }(), _i_("b71:9603028c"), B.define("component/multiple-states", null), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:1731f73f");
    var t = e("jquery");
    t(".js-click-search").on("click", null), _r_()
  }), _r_(), $(document).on("click", ".js-toggle-long-text__content", null), B.when({
    events: "click .lp-usp-banner__close"
  }).run(null), _i_("b71:95cf2ddf"), B.when({
    action: ["index"]
  }).run(function(e) {
    _i_("b71:b147e0e2");
    var t = e("event-bus");
    if (!B.env.cross_product_search_overlays) return _r_();
    if (!t) return _r_(!1);
    var i = null;
    $(".dualcal").each(null), t.on(t.EVENTS.CALENDAR_UPDATE, null), _r_()
  }), _r_(), b.require("jquery")(function(r) {
    if (_i_("b71:d7b1fbb6"), "index" != b.env.b_action) return _r_();
    r("#top-destinations_postcard").on("click", "a.city_link", null), _r_()
  }), B.require(["jquery", "et", "events", "searchbox/destinations"], function(e, t, i, n) {
    if (_i_("b71:497ddca4"), "index" !== B.env.b_action) return _r_();
    n.initEventHandlers(), _r_()
  }), B.define("component/tabs", null), B.when({
    action: "index",
    events: "ready"
  }).run(function(e) {
    _i_("b71:01f2d0fa");
    var i = e("jquery");
    i(".js--how-works-cta").on("click", null), _r_()
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
  }).run(null), B.when({
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
    })(n) || i.fadeIn(500), t(".ugc-pending-modal__close").on("click", null), _r_()
  }), B.define("component/dismissible-item/cookie-block", null), B.define("component/async-carousel", null), B.define("watcher", null), B.define("component/bh/exposure-counter", null), B.when({
    action: ["index", "searchresults", "hotel"],
    events: "load",
    condition: function(e) {
      return _i_("b71:dd433292"), _r_(!!e.bhaw_display_survey)
    }
  }).run(null), booking.jstmpl("m_booking_home_selected_properties_card", function() {
    _i_("b71:782d4d48");
    var d, u = ["\n    ", '\n        <li class="bui-carousel__item" data-bui-ref="carousel-item">\n            <a\n                href="', 'bhc_from_index=1"\n                target="_blank"\n                class="bui-card bui-card--media bui-card--transparent"\n                data-et-click="customGoal:', ':1"\n            >\n                <div\n                    class="bui-card__image-container c-async-carousel__photo"\n                    ', '\n                    style="background-image: url(', ')"\n                    ', '\n                ></div>\n                <div class="bui-card__content">\n                    ', "\n                        ", "\n\n\n", "\n", "\n\n\n\n", " \n", '\n\n<span\n    class="', "bh-quality-bars bh-quality-bars--", " ", "", '"\n    ', '\n    data-bui-component="Tooltip"\n    ', '\n    title="', "/private/bhqc_sr_qc_desc_tooltip_affiliate/name", "/private/bh_sr_quality_explanationv3/name", '\n    data-tooltip-position="bottom"\n    ', 'data-et-click="', '"', 'data-et-mouseenter="', "\n>\n    ", "iconset/square_rating", "\n</span>\n\n", "medium", "\n                    ", '\n                    <h1 class="bui-card__title bh_carousel--new-title"><span>', '</span></h1>\n                    <h2 class="bui-card__subtitle bui-spacer--medium">', "</h2>\n                    ", '\n                    <p class="bui_font_caption bui-spacer--medium">', "/private/bh_index_carousel_starting_from/name", "</p>\n                    ", "\n                    <div>\n                        ", "/private/review_adj_bad/name", "/private/review_adj_very_poor/name", "/private/review_adj_poor/name", "/private/review_adj_disappointing/name", "/private/review_adj_average_passable/name", "/private/review_adj_average_okay/name", "/private/review_adj_pleasant/name", "/private/review_adj_good/name", "/private/review_adj_very_good/name", "/private/review_adj_fabulous/name", "/private/review_adj_superb/name", "/private/review_adj_exceptional/name", "/private/comp_fd_lp_header_rs/name", '<div class="', '"> <div class="bui-review-score__badge" aria-label="', "/private/a11y_rating_score_for_screenreader/name", '"> ', " </div> ", '<div class="bui-review-score__content"> <div class="bui-review-score__title"> ', '<div class="bui-review-score__text"> ', "/private/comp_num_reviews_sr_page/name", "</div> ", "\n                    </div>\n                </div>\n            </a>\n        </li>\n    ", "/booking-home/index", "bhc_from_index_bh=1", '\n    <li class="bui-carousel__item" data-bui-ref="carousel-item">\n        <a\n            href="', '"\n            class="bui-card bui-card--media bui-card--transparent bh-carousel--new__more"\n            target="_blank"\n            data-et-click="customGoal:', ':2"\n        >\n            <h1 class="bh-carousel--new__more-title">', "/private/bh_index_carousel_more_homes_apartments_header/name", '</h1>\n            <button class="bui-button bui-button--secondary bh-carousel--new__more-cta" type="button">\n                <span class="bui-button__text">', "/private/bh_awareness_banner_discover_homes_cta/name", "</span>\n            </button>\n        </a>\n    </li>\n"],
      b = ["b_properties", "b_query_params_delimiter", "fe_bar_size", "fe_custom_classes", "fe_bar_level", "fe_is_affiliate", "fe_companyname", "fe_site_type", "fe_no_tooltip", "fe_click_tracking", "fe_mouseenter_tracking", "fe_icon_size", "b_companyname", "b_site_info", "b_site_type", "fe_classes", "fe_modifier_outline", "fe_modifier_end", "fe_modifier_inverse", "fe_modifier_inline", "fe_modifier_text", "fe_modifier_small", "fe_modifier_smaller", "fe_allow_zero", "fe_score", "fe_show_adjective", "fe_custom_adjective", "fe_adjective_text", "fe_adjective", "fe_hide_low_adjectives", "fe_can_show_adjective", "fe_score_formatted", "fe_reviews_number", "fe_bh_carousel_show_all_url", "nonsecure_hostname", "b_query_params_with_lang"];
    return _r_(null)
  }()), B.define("component/bh/async-carousel", null), B.define("component/surveygizmo_survey", null), booking.jstmpl("surveygizmo_survey_invite", function() {
    _i_("b71:787c85e0");
    var n = ['\n    <div class="surveygizmo-survey-invite surveygizmo-survey-invite--hidden surveygizmo-survey-invite--position-', '">\n        <div class="surveygizmo-survey-invite__title">', '</div>\n        <div class="surveygizmo-survey-invite__description">', '</div>\n        <div class="surveygizmo-survey-invite__buttons-wrapper">\n            <a class="surveygizmo-survey-invite__button js-surveygizmo-survey-cancel">\n                ', "/private/m_pod_survey_intro_no/name", '\n            </a>\n            <a class="surveygizmo-survey-invite__button surveygizmo-survey-invite__button--primary js-surveygizmo-survey-ok">\n                ', "/private/m_pod_survey_intro_yes/name", "\n            </a>\n        </div>\n    </div>\n"],
      a = ["invite_position", "title", "description"];
    return _r_(null)
  }()), B.define("referral/raf-goal", null), B.define("referral/rap-goal", null),
  function(b) {
    _i_("b71:a6bb0ba0");

    
    b.define("component/referral/copy-input", null), _r_()
  }(window.B), B.define("referral/clipboard", null), B.define("component/referral/share-buttons", null), B.define("component/referral/web-virality/ga", null), booking.lightbox = function() {
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
    var h = null,
      f = null,
      p = null,
      m = null,
      v = null,
      g = null;
    return _r_({
      show: null,
      hide: p,
      rePosition: f,
      open: null,
      isVisible: null,
      pushEscStack: null,
      popEscStack: null,
      hideWithFade: null
    })
  }(), B.define("lightbox", booking.lightbox), B.define("dismiss-item", null), B.when({
    action: "index",
    events: "click #btn_deals_index_banner_close"
  }).run(null), B.when({
    action: "index",
    events: "click #raf_banner_close"
  }).run(null), B.when({
    action: "index",
    events: "click #emk_banner_index_close"
  }).run(null), B.when({
    action: "index",
    events: "click #signin_banner_close"
  }).run(null), B.when({
    action: "index",
    events: "click #join_index_banner_close"
  }).run(null), B.when({
    action: "index",
    events: "click #genius_banner_index_close"
  }).run(null), B.when({
    action: "index",
    condition: B.env.b_deals_index_banners
  }).run(function(e) {
    _i_("b71:4279e6b0");
    for (var i = e("dismiss-item"), t = 0; t < B.env.b_deals_index_banners.length; t++) {
      var n = B.env.b_deals_index_banners[t].campaign_id;
      $("#btn_deals_index_banner_" + n + "_close").click(null)
    }
    _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:736e8acc");
    var t = e("jquery"),
      i = t(".ccp__acb__rb__toggle"),
      n = t(".ccp__acb__rb__coupon_list");
    0 < t(".ccp__acb__reminding_banner.ccp__acb__reminding_banner_header").length && i.click(null), _r_()
  }), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(null), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(null), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(null), B.when({
    experiment: "OMMKMBNFMBYDEZREaaUBfIdLHe",
    condition: "index" === B.env.b_action && !B.env.b_ppc_theme && !B.env.b_landingpage_theme && "zh-cn" === B.env.b_locale
  }).run(null), B.when({
    events: "ready"
  }).run(function(a) {
    _i_("b71:7a6a363d"), {
      priority: 9,
      run: function() {
        _i_("b71:89d0a48b");
        var e = $("#survey").attr("surveyurl");
        if (e && (window.b_survey_url = e, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), void 0 !== window.b_survey_url && window.b_survey_url) {
          var i = $("#conf_survey,#survey,#conf_survey_bottom"),
            n = null,
            t = null;
          booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", null), i.find("button").on("click", t)) : (i.fadeIn("normal", n), i.find("button").click(t))
        }
        _r_()
      },
      init: function() {
        if (_i_("b71:dff626a9"), this.run(), B.env.b_run_sr_ajax) {
          var t = this;
          B.require(["searchresults/events"], null)
        }
        _r_()
      }
    }.init(), _r_()
  }), booking.jstmpl("budget_themes", function() {
    _i_("b71:2aaf1020");
    var s, c = ["\n    ", '\n    <section class="budget-themes" data-ga-track="view|Hostels-CLP|Budget Themes|onView_budget_theme">\n        <div class="budget-themes__header--container">\n            ', '\n                <h3 class="budget-themes__header">', "/private/hstsls_m_clp_filtered_entry_head/name", '</h3>\n                <h4 class="budget-themes__subheader">', "/private/hstsls_m_clp_filtered_entry_sub/name", "</h4>\n            ", '\n                <span class="budget-themes__header">', '</span> <br>\n                <span class="budget-themes__subheader">', "</span>\n            ", '\n        </div>\n        <ul class="budget-themes__list">\n            ', "\n                ", '\n    <li class="budget-themes__list--item">\n        <a target="_blank" class="budget-themes__list--item-url" data-ga-track="', '" href="', '">\n            <div class="budget-themes__list--content" >\n                <div class="budget-themes__list--item-emoji">\n                    ', '\n                </div>\n                <div class="budget-themes__list--item-content">\n                    <span class="budget-themes__list--item-header">', '</span> <br>\n                    <span class="budget-themes__list--item-subheader">', '</span>\n                </div>\n                <div class="budget-themes__list--item-arrow">\n                    ', "\n                        ", "iconset/navarrow_left", "larger", "\n                    ", "iconset/navarrow_right", "\n                </div>\n            </div>\n        </a>\n    </li>\n", "\n", '\n                          <hr class="bui-divider" />\n                    ', "\n            ", "\n        </ul>\n\n        ", '\n            <a target="_blank" class="budget-themes__search-link" href="', '"> ', "/private/hstsls_m_clp_filtered_entry_view_all/name", " </a>\n        ", "\n    </section>\n"],
      l = ["fe_budget_themes_city", "fe_budget_theme_data", "fe_ga_tracking", "fe_budget_search_url", "fe_list_emoji", "fe_list_item_header", "fe_list_item_subheader", "fe_is_rtl", "fe_base_search_url"];
    return _r_(null)
  }()), B.define("component/landpages/budget-themes", null), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:5fa3c614");
    var i = e("jquery"),
      t = i(".featured-properties-sr_header--quick-btn-filter"),
      n = i(".featured-properties-sr_header--quick-btn-map"),
      a = document.getElementById("form_search_location"),
      r = i("#submit_search");
    if (void 0 !== a && i("<input />").attr("type", "hidden").attr("name", "lpsr").attr("value", "1").appendTo("#form_search_location"), t.length && n.length && void 0 !== a) {
      t.click(null), n.click(null)
    }

    
    r.length && t.length && n.length && r.click(null), _r_()
  }), B.when({
    events: "ready"
  }).run(function(e) {
    _i_("b71:2ce9b458");
    var t = e("jquery"),
      i = t("[name=group_adults]");

    
    i.length && i.click(null), _r_()
  }), B.define("component/landing_pages/beach/lp-accordion-switch", null), B.define("component/company/dom-utils/scroll", null), B.define("component/trip-types/show-more", null), B.when({
    action: ["city", "region"],
    events: "ready",
    condition: function(e) {
      return _i_("b71:1074cd6b"), _r_(e.fe_should_track_bdlp)
    }
  }).run(null),
  function(r) {
    
    _i_("b71:da8ddea9"), r.define("component/feedback-base", null), o.prototype.getStorage = null, o.prototype.saveData = null, o.prototype.loadData = null, o.prototype.removeExpired = null, o.prototype.isExpired = null, o.prototype.remove = null, o.prototype.set = null, o.prototype.get = null, _r_()
  }(window.booking),
  function(c) {
    _i_("b71:6bfd22f0"), c.define("component/feedback-inline", null), _r_()
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
    var h = null,
      f = null,
      p = null,
      m = null,
      v = null,
      g = null;
    return _r_({
      show: null,
      hide: p,
      rePosition: f,
      open: null,
      isVisible: null,
      pushEscStack: null,
      popEscStack: null,
      hideWithFade: null
    })
  }(), B.define("lightbox", booking.lightbox), B.require(["jquery"], function(e) {
    _i_("b71:6fcc3aa3"), e("#yielding_free_cancellation_addon_banner").on("click", ".bui-banner__close", null), _r_()
  }), B.define("component/fragment/joinapp-retargeting", null), B.define("component/sp-banner/floating", null), B.when({
    events: "ready",
    condition: B.env.fe_track_ski_discovery
  }).run(null), b.env.scripts_tracking.lp.run = 1;