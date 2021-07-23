var _i_ = this._i_ || function() {},
  _r_ = this._r_ || function(e) {
    return e
  },
  _sp_ = this._sp_ || function(e) {
    B.et.customGoal("cDPPESHbfNFVTAYZSQDZET", 1), B.reportError({
      message: "SPDR function called - " + e
    }, "SPDR")
  };
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
        load: function() {
          _i_("385b:dce66452");
          var e = this,
            t = e.getHotelsJsonUrl();
          r.get(t, r.proxy(e.onHotelLoaded, e)), _r_()
        },
        onHotelLoaded: function(e) {
          _i_("385b:20c7b2af");
          var t = this;
          if (!e.length) return t.onHotelNotLoaded(), _r_();
          var n = e[0];
          n && n.class && Number(n.class) === n.class && n.class % 1 == .5 && (n.class = parseInt(n.class, 10), n.class_is_half = 1), n.continueBookingUrl = t.continueBookingUrl, n.continueBookingCheckin = t.continueBookingCheckin, n.continueBookingCheckout = t.continueBookingCheckout, n.main_photo_id && (n.main_photo_url = t.getPhotoUrl(n.main_photo_id));
          var i = t.getBlockId(t.continueBookingUrl);
          n.block_rooms_left = t.getBlockRoomsLeft(i, n), n.block_room_name = t.getBlockRoomName(i, n), n.block_room_type_id = t.getBlockRoomTypeId(i, n), n = r.extend(n, b.env), t.render(n), _r_()
        },
        onHotelNotLoaded: function() {
          _i_("385b:b3992df4");
          this.$element.hide(), _r_()
        },
        render: function(e) {
          _i_("385b:07b8ad6f");
          var t = this,
            n = b.jstmpl("m_bp_promote_last_bs2_property_template").render(e);
          t.$element.html(n), t.$element.addClass("last-property-rendered"), t.$element.loadComponents(), _r_()
        },
        getHotelsJsonUrl: function() {
          _i_("385b:70d70785");
          var e = this,
            t = "/hotels_json" + booking.env.b_query_params_no_ext + ";hotel_ids=" + e.hotelId + ";lang=" + booking.env.b_lang;
          return t += ";checkin=" + e.continueBookingCheckinNotFormatted + ";checkout=" + e.continueBookingCheckoutNotFormatted, t += ";cc1=" + b.env.b_guest_country, _r_(t)
        },
        getPhotoUrl: function(e) {
          _i_("385b:f8bd927d");
          return _r_(b.env.b_protocol + "://" + this.servers[e % 2] + "/images/hotel/square200/" + String(e).substr(0, 3) + "/" + e + ".jpg")
        },
        getBlockId: function(e) {
          _i_("385b:61224bc6");
          var t = (e || "").match(/[?&;]nr_rooms_([^=]+)/);
          return _r_(t && 1 < t.length ? t[1] : null)
        },
        getBlockRoomsLeft: function(e, t) {
          return _i_("385b:fbfae2a4"), _r_(e && t && t.show_number_of_rooms_left ? t.show_number_of_rooms_left[e] : null)
        },
        getBlockRoomName: function(e, t) {
          return _i_("385b:e478bea1"), _r_(e && t && t.block_room_name ? t.block_room_name[e] : null)
        },
        getBlockRoomTypeId: function(e, t) {
          return _i_("385b:794ffc18"), _r_(e && t && t.block_roomtype_id ? t.block_roomtype_id[e] : null)
        }
      }.init(".continue-booking"), _r_()
    }), _r_()
  }), booking.jstmpl("m_bp_promote_last_bs2_property_template", function() {
    _i_("385b:44c158fa");
    var i, r = ["\n", "\n    ", "\n\n    ", '\n\n    <h3 class="continue-booking__title">', "/private/m_complete_your_booking_header/name", '</h3>\n\n            <a id="', '" href="', 'm_lp_cb_rl=1" class="continue-booking__property loadingButtonInit continue-booking__property-with-rooms">\n\n                <div class="spinner"></div>\n                <div class="continue-booking__property-image" style="background-image: url(', ');"></div>\n\n                <div class="continue-booking__property-details">\n\n                    <h3 class="continue-booking__property-name">', "</h3>\n\n                    \n                    ", '\n\n                        <p class="continue-booking__property-class">\n\n                            \n                            ', "\n\n                                ", '\n\n                                <span class="icon icon-circles-', "-5", '" alt="', '" title="', '"></span>\n\n                            ', "\n                                    ", "\n                                ", "\n                                        ", '\n                                        <span class="china_no_start_rating_mobile_adj">', "</span>\n                                    ", '\n                                    <span class="icon icon-circles-', '"></span>\n                                ', '\n                                    <span class="icon icon-stars-', "\n\n                            ", "\n\n                        </p>\n                    ", '\n\n\n                    <p class="continue-booking__property-line">\n\n                        ', "\n                        ", '\n\n                    </p>\n\n                    <p class="continue-booking__property-room-name" >\n                        ', "\n                    </p>\n\n                    \n\n\t\t\t\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t\t\t\t\t\t", '\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="continue-booking__property-rooms-left" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t', "/private/m_hstls_fin_urgency_num_beds_left/name", "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t", "/private/m_rlu_rooms_uni/name", "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t", "\n                    ", '\n                        <p class="continue-booking__property-last-booked" >\n                            ', "\n                        </p>\n                    ", '\n\n                    <button class="continue-booking__property-cta primary_cta" type="button" title="', "/private/m_complete_your_booking_button/name", '">\n                        ', "\n                    </button>\n\n                </div>\n            </a>\n\n"],
      a = ["fe_china_estimated_rating", "property_name", "name", "id", "continueBookingUrl", "b_query_params_delimiter", "main_photo_url", "star_rating_text", "estimated_rating", "class", "class_is_half", "class_is_estimated", "cc1", "sr_star_property", "accommodationtype_id", "fe_nostar_rating_stars", "b_lang_for_url", "star_rating_dots_tooltip_zhcn", "start_date", "continueBookingCheckin", "end_date", "continueBookingCheckout", "m_complete_your_booking_dates", "block_room_name", "block_rooms_left", "block_room_type_id", "last_booking_info"];
    return _r_(function(e) {
      _i_("385b:186cadcd");
      var t = "",
        n = this.fn;
      return t += r[0], n.MD(a[0]) && (t += r[1], t += r[1], t += r[1], t += r[1], t += r[1], t += r[0]), t += r[2], n.MN(a[1], n.MB(a[2])), t += [r[3], n.ME(r[4], n.MB, n.MN, null), r[5], n.MB(a[3]), r[6], n.MB(a[4]), n.MC(a[5]), r[7], n.MB(a[6]), r[8], n.MB(a[2]), r[9]].join(""), n.MJ(n.MB(a[9]) + "" != "0") && (t += r[10], n.MJ(n.MB(a[11])) && (n.MJ(n.MB(a[12]) + "" == "de") || n.MJ(n.MB(a[12]) + "" == "be")) ? (t += r[11], n.MN(a[7], (e.unshift({
        rating_score: n.MB(a[9]) + "/5"
      }), i = n.MB(a[8]), e.shift(), i)), t += [r[12], n.MB(a[9])].join(""), n.MD(a[10]) && (t += r[13]), t += [r[14], n.MB(a[7]), r[15], n.MB(a[7]), r[16]].join("")) : (t += r[11], n.MJ(204 != n.MB(a[14])) ? (t += r[17], n.MN(a[7], (e.unshift({
        rating_score: n.MB(a[9])
      }), i = n.MB(a[13]), e.shift(), i))) : (t += r[17], n.MN(a[7], "star_rating_" + n.MB(a[9]))), t += r[18], t += r[11], n.MD(a[0]) ? (t += r[17], n.MJ(n.MC(a[16]) + "" == "zh-cn") && (t += r[19], n.MN("fe_nostar_rating_stars", "{nostar_rating_filter_" + n.MB(a[9]) + "}"), t += [r[20], n.MB(a[15]), r[21]].join("")), t += [r[22], n.MB(a[9])].join(""), n.MD(a[10]) && (t += r[13]), t += [r[15], n.MB(a[17]), r[23]].join("")) : (t += [r[24], n.MB(a[9])].join(""), n.MD(a[10]) && (t += r[13]), t += [r[15], n.MB(a[7]), r[23]].join("")), t += r[25]), t += r[26]), t += r[27], n.MN(a[18], n.MB(a[19])), t += r[28], n.MN(a[20], n.MB(a[21])), t += [r[28], n.MB(a[22]), r[29], n.MC(a[23]), r[30]].join(""), n.MJ(1 <= n.MB(a[24])) && n.MJ(n.MB(a[24]) <= 5) ? (t += r[31], n.MJ(n.MB(a[25])) && n.MJ(26 == n.MB(a[25])) ? t += [r[32], (e.unshift({
        num_beds: n.MB(a[24])
      }), i = n.ME(r[33], n.MB, n.MN, n.MO(n.MC(a[24]), null, r[33])), e.shift(), i), r[34]].join("") : t += [r[32], (e.unshift({
        amountRooms: n.MB(a[24])
      }), i = n.ME(r[35], n.MB, n.MN, n.MO(n.MC(a[24]), null, r[35])), e.shift(), i), r[36]].join(""), t += r[37]) : n.MD(a[26]) && (t += [r[38], n.MC(a[26]), r[39]].join("")), t += [r[40], n.ME(r[41], n.MB, n.MN, null), r[42], n.ME(r[41], n.MB, n.MN, null), r[43]].join(""), _r_(t)
    })
  }()), B.require(["jquery", "et"], function(i, e) {
    "use strict";
    _i_("385b:bd0f7c95");
    var t = !parseInt(B.env.b_first_visit),
      n = i.cookie("gta_prompt_seen");
    if (-1 != B.env.b_lang.search(/zh/i)) var r = !0;
    if (-1 != B.env.b_lang.search(/ar/i)) var a = !0;
    if ("index" != B.env.b_action || !B.env.b_is_android && !b.env.b_is_iphone || !r && !a || !t || n || B.env.aff_is_mobile_hybrid) return _r_();
    if (r && !B.env.b_is_android) return _r_();
    i(function() {
      _i_("385b:f932068d");
      var t = i("#js-gta-prompt"),
        e = i("#js-gta-prompt-cancel");
      t.show(), e.click(function(e) {
        _i_("385b:1e9ef365"), e.preventDefault(), t.hide(), _r_()
      });
      var n = new Date;
      n.setTime(n.getTime() + 157248e5), i.cookie("gta_prompt_seen", "1", {
        expires: n
      }), _r_()
    }), _r_()
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
        load: function() {
          _i_("385b:f9aadf42"), a('table#m_tabs a[href="#m_' + this.name + '"]').trigger("click"), _r_()
        }
      }), e.on(e.EVENTS.M_TABS_RESET, function() {
        _i_("385b:ca022b5e"), a("table#m_tabs td:first").trigger("click"), _r_()
      })
    }
    a("table#m_tabs td").click(function(e) {
      _i_("385b:242bd003");
      var t = a("table#m_tabs td.active"),
        n = t.children(":first-child").attr("href").replace("#m_", "");
      t.removeClass("active"), a(this).addClass("active");
      var i = a(this).children(":first-child").attr("href");
      i = i.replace("#m_", ""), a(".tab").hide(), a("#" + i).show(), b.eventEmitter.emit(b.eventNames.M_TABS_SWITCH, [i, n]), r.enabled && (r.push(i), e.preventDefault()), _r_()
    }), _r_()
  }), booking.browserStorageHandler = function(l, e, d, u) {
    _i_("385b:a11e61ce");
    var f = !1;
    try {
      (f = !(!l.localStorage || !l.sessionStorage)) && l.localStorage.setItem("btest", "1")
    } catch (e) {
      f = !1
    }
    var i = {
      _readCookie: function(e) {
        _i_("385b:51d0b270");
        var t = {};
        try {
          "undefined" != typeof JSON && (t = JSON.parse(u.cookie(e)) || {})
        } catch (e) {}
        return _r_(t)
      },
      _modifySingleValue: function(e, t, n, i, r) {
        if (_i_("385b:22c7266b"), !t || !n) return _r_(!1);
        if (f && !r) {
          var a = "session" === e ? l.sessionStorage : l.localStorage;
          if ("delete" === t) a.removeItem(n);
          else try {
            a.setItem(n, i)
          } catch (e) {}
        } else {
          var _, o, s, c;
          "session" === e ? _ = "bs" : (_ = "b", c = 30), o = this._readCookie(_), "delete" === t ? delete o[n] : o[n] = i, s = u.isEmptyObject(o) ? null : JSON.stringify(o), u.cookie(_, s, {
            expires: c,
            path: "/",
            domain: d.b_domain_end
          })
        }
        _r_()
      },
      _getValue: function(e, t, n) {
        if (_i_("385b:f1ea0118"), !t) return _r_(void 0);
        if (f && !n) {
          var i = "session" === e ? l.sessionStorage : l.localStorage;
          return _r_(i.getItem(t))
        }
        var r, a;
        return r = "session" === e ? "bs" : "b", a = this._readCookie(r), _r_(a[t])
      }
    };
    return _r_({
      addSessionValue: function(e, t, n) {
        return _i_("385b:b380b492"), _r_(i._modifySingleValue("session", "add", e, t, n))
      },
      deleteSessionValue: function(e, t) {
        return _i_("385b:d61f09c2"), _r_(i._modifySingleValue("session", "delete", e, void 0, t))
      },
      getSessionValue: function(e, t) {
        return _i_("385b:d6b8f5d6"), _r_(i._getValue("session", e, t))
      },
      addPermanentValue: function(e, t, n) {
        return _i_("385b:fe0aaa49"), _r_(i._modifySingleValue("permanent", "add", e, t, n))
      },
      deletePermanentValue: function(e, t) {
        return _i_("385b:99a942db"), _r_(i._modifySingleValue("permanent", "delete", e, void 0, t))
      },
      getPermanentValue: function(e, t) {
        return _i_("385b:07d7aebb"), _r_(i._getValue("permanent", e, t))
      },
      isLocalStorageSupported: function() {
        return _i_("385b:1bca3a3a"), _r_(f)
      }
    })
  }(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), B.define("component/referral/floater", function(e, t, n) {
    _i_("385b:439cb7dd");
    var i = e("component"),
      r = e("ga-tracker");
    n.exports = i.extend({
      init: function() {
        _i_("385b:bdf88b61");
        var e = this;
        this.$toggle = this.$el.find(".friend_landing_collapsible--header"), this.$toggleIcon = this.$el.find(".friend_landing_collapsible--toggle_icon"), this.$collapse = this.$el.find(".friend_landing_collapsible-action_button"), this.isMobile = this.$el.data("is-mobile"), this.toggleCollapseClass = this.$el.data("expanded-class"), this.toggleExpandClass = this.$el.data("collapsed-class"), this.isCollapsed = !!this.$el.data("is-collapsed"), this.isCollapsedClass = this.$el.data("landing-collapsed-class"), this.collapsingDisabled = this.$el.data("collapsing-disabled"), this.collapsingDisabled || (this.$toggle.on("click", function() {
          _i_("385b:db6abdaa"), e.isCollapsed ? e.expand() : e.collapse(), _r_()
        }), this.$collapse.on("click", function() {
          _i_("385b:ca906f67"), e.collapse(), _r_()
        })), r.trackEvent(r.referralFriendTracker, "view", "friend_landing"), this.$el.find(".friend_landing_collapsible-tandc").on("click", function() {
          _i_("385b:208b670a"), r.trackEvent(r.referralFriendTracker, "click", "terms_and_conditions - source: friend_landing"), _r_()
        }), _r_()
      },
      collapse: function() {
        _i_("385b:5a14237e"), this.$el.addClass(this.isCollapsedClass), this.$toggleIcon.removeClass(this.toggleCollapseClass), this.$toggleIcon.addClass(this.toggleExpandClass), this.isCollapsed = !0, r.trackEvent(r.referralFriendTracker, "collapse", "friend_landing"), _r_()
      },
      expand: function() {
        _i_("385b:9260a3a3"), this.$el.removeClass(this.isCollapsedClass), this.$toggleIcon.addClass(this.toggleCollapseClass), this.$toggleIcon.removeClass(this.toggleExpandClass), this.isCollapsed = !1, r.trackEvent(r.referralFriendTracker, "expand", "friend_landing"), _r_()
      }
    }), _r_()
  }), B.define("component/referral/invalid-link", function(e, t, n) {
    _i_("385b:12d1cdea");
    var i = e("component"),
      r = e("lightbox"),
      a = e("jquery"),
      _ = e("browser-storage-handler"),
      o = "raf_invalid_modal";
    booking.jstmpl("invalid_link_card", function() {
      _i_("385b:6bb310e3");
      var r, a = ["\n        ", "\n\n\n\n\n\n\n\n\n\n\n", '\n    <div data-component="referral/require-login-lightbox"></div>\n', '\n    <div class="raf_modal_invalid">\n        <div class="raf_modal_invalid__title">\n            ', "\n                ", "/private/raf_validation_error_modal_employee_title/name", "\n            ", "/private/raf_restricted_countries_landing_modal_disclaimer_headline/name", "\n                    ", "/private/raf_friend_landing_shut_down_modal_body/name", "/private/raf_desktop_invalid_link_no_reward/name", "/private/raf_desktop_cannot_book_property/name", "/private/raf_validation_error_modal_already_used_title/name", "/private/raf_validation_error_modal_self_referral_title/name", '\n        </div>\n        <div class="raf_modal_invalid_image">\n            <img width="150" src="', '" alt="invalid raf">\n        </div>\n        <div class="raf_modal_invalid__subtitle">\n            ', "/private/raf_validation_error_modal_self_referral_subtitle/name", "/private/raf_validation_error_modal_employee_subtitle/name", "/private/raf_validation_error_modal_already_used_subtitle/name", '\n        </div>\n        <div class="raf_modal_invalid__body">\n            ', "/private/raf_validation_error_modal_self_referral_body_percent/name", "/private/raf_validation_error_modal_self_referral_body_fixed/name", "/private/raf_validation_error_modal_employee_body/name", "/private/raf_restricted_countries_landing_modal_disclaimer_body/name", "/private/raf_validation_error_modal_already_used_body/name", '\n        </div>\n        <div class="raf_modal_invalid_cta">\n            <button class="bui-button bui-button--primary js-modal-close" type="button" style="width: 100%">\n                <span class="bui-button__text">\n                    ', "\n                        ", "/private/raf_validation_error_modal_self_referral_button/name", "/private/raf_validation_error_modal_employee_button/name", '\n                </span>\n            </button>\n        </div>\n        <button class="modal-mask-closeBtn" title="Close">\n            ', "iconset/close", "large", '\n            <span class="invisible_spoken">Close</span>\n        </button>\n    </div>\n', "\n    "],
        _ = ["b_raf_error_code", "fe_feature_running_CLOSE_RAF_PROGRAM", "b_raf_li_in", "b_raf_prop_ne", "value_advocate", "fe_companyname", "value_friend", "is_discount"];
      return _r_(function(e) {
        _i_("385b:7417c43b");
        var t, n = "",
          i = this.fn;
        return n += a[0], t = n, _i_("385b:0a477e0f"), t += a[1], i.MJ(i.MC(_[0]) + "" == "user_not_logged_in") ? t += a[2] : (t += a[3], i.MJ(i.MC(_[0]) + "" == "is_bkng_employee") ? t += [a[4], i.ME(a[5], i.MB, i.MN, null), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "invalid_geo") ? t += [a[4], i.ME(a[7], i.MB, i.MN, null), a[6]].join("") : i.MJ(1 == i.MC(_[2])) ? (t += a[4], i.MD(_[1]) ? t += [a[8], i.ME(a[9], i.MB, i.MN, null), a[4]].join("") : t += [a[8], i.ME(a[10], i.MB, i.MN, null), a[4]].join(""), t += a[6]) : i.MJ(1 == i.MC(_[3])) || i.MJ(i.MC(_[0]) + "" == "raf_prop_ne") ? t += [a[4], i.ME(a[11], i.MB, i.MN, null), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "has_raf_booking") ? t += [a[4], i.ME(a[12], i.MB, i.MN, null), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "is_self_referral") && (t += [a[4], i.ME(a[13], i.MB, i.MN, null), a[6]].join("")), t += [a[14], i.STATIC_HOSTNAME("/static/img/referral/raf-failure.svg", 0, 0, 0), a[15]].join(""), i.MJ(i.MC(_[0]) + "" == "is_self_referral") ? t += [a[4], (e.unshift({
          value_advocate: i.MB(_[4])
        }), r = i.ME(a[16], i.MB, i.MN, null), e.shift(), r), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "is_bkng_employee") ? t += [a[4], i.ME(a[17], i.MB, i.MN, null), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "has_raf_booking") && (t += [a[4], i.ME(a[18], i.MB, i.MN, null), a[6]].join("")), t += a[19], i.MJ(i.MC(_[0]) + "" == "is_self_referral") ? (t += a[4], i.MJ(1 == i.MB(_[7])) ? t += [a[8], (e.unshift({
          b_companyname: i.MB(_[5]),
          value_advocate: i.MB(_[4]),
          value_percent_friend: i.MB(_[6])
        }), r = i.ME(a[20], i.MB, i.MN, null), e.shift(), r), a[4]].join("") : t += [a[8], (e.unshift({
          b_companyname: i.MB(_[5]),
          value_advocate: i.MB(_[4]),
          value_friend: i.MB(_[6])
        }), r = i.ME(a[21], i.MB, i.MN, null), e.shift(), r), a[4]].join(""), t += a[6]) : i.MJ(i.MC(_[0]) + "" == "is_bkng_employee") ? t += [a[4], (e.unshift({
          b_companyname: i.MB(_[5])
        }), r = i.ME(a[22], i.MB, i.MN, null), e.shift(), r), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "invalid_geo") ? t += [a[4], (e.unshift({
          b_companyname: i.MB(_[5])
        }), r = i.ME(a[23], i.MB, i.MN, null), e.shift(), r), a[6]].join("") : i.MJ(i.MC(_[0]) + "" == "has_raf_booking") && (t += [a[4], i.ME(a[24], i.MB, i.MN, null), a[6]].join("")), t += a[25], i.MJ(i.MC(_[0]) + "" == "is_self_referral") ? t += [a[26], i.ME(a[27], i.MB, i.MN, null), a[8]].join("") : t += [a[26], i.ME(a[28], i.MB, i.MN, null), a[8]].join(""), t += [a[29], (e.unshift({
          name: a[30],
          size: a[31]
        }), r = i.HELPER("icon", e[0]), e.shift(), r), a[32]].join("")), n = _r_(t), n += a[33], _r_(n)
      })
    }()), n.exports = i.extend({
      init: function() {
        _i_("385b:30e6341b");
        var e = B.jstmpl("invalid_link_card"),
          t = {
            b_raf_li_in: this.$el.data("raf-li-in"),
            b_raf_prop_ne: this.$el.data("raf-prop-ne"),
            b_raf_blocked_geo: this.$el.data("raf-blocked-geo"),
            b_raf_error_code: this.$el.data("raf-error-code"),
            fe_companyname: B.env.b_companyname,
            value_advocate: this.$el.data("value-advocate"),
            value_friend: this.$el.data("value-friend"),
            is_discount: this.$el.data("is-discount"),
            fe_feature_running_CLOSE_RAF_PROGRAM: B.env.fe_feature_running_CLOSE_RAF_PROGRAM
          },
          n = 0;
        if (_.getSessionValue(o) && (n = 1), (t.b_raf_error_code || t.b_raf_blocked_geo || t.b_raf_li_in || t.b_raf_prop_ne) && (0 == n || "index" == B.env.b_action) || "user_not_logged_in" == t.b_raf_error_code) {
          var i = r.show(e.render(t), {
            bCloseButton: !1,
            customWrapperClassName: "raf_invalid_modal_wrapper",
            hideCallBack: this.lightboxHideCallback
          });
          i && i.loadComponents && i.loadComponents(), a(".js-modal-close").click(function() {
            if (_i_("385b:af039781"), t.b_raf_error_code && "is_self_referral" == t.b_raf_error_code) {
              var e = B.env.b_secure_domain + "/myreferrals" + B.env.b_query_params_with_lang + B.env.b_query_params_delimiter;
              window.location.href = e
            }
            r.hide(), _r_()
          })
        }
        _r_()
      },
      lightboxHideCallback: function() {
        _i_("385b:da1dff2b"), _.addSessionValue(o, 1), _r_()
      }
    }), _r_()
  }), B.define("component/referral/m_friend_land_experience", function(e, t, n) {
    "use strict";
    _i_("385b:476d4f55");
    var i = e("jquery"),
      r = e("component"),
      a = B.require("persistent-view"),
      _ = B.env.request,
      o = _ && _.query && _.query.activeTab,
      s = _ && _.query && _.query.auth_success,
      c = !1;

    function l(e) {
      _i_("385b:ae7f9f7b"), this.$node = e.$node, this._successCallback = e.callback, this._$form = this.$node.find("form"), this._$submitBtn = this.$node.find(".js-m_friend_land_experience__btn-do-save-for-later"), this._$erorrPlaceholder = this.$node.find(".m_friend_land_experience__email-validation"), this._$serverErrorMessage = this._$erorrPlaceholder.find(".m_friend_land_experience__email-validation--server-issue"), this._$emailIssueErrorMessage = this._$erorrPlaceholder.find(".m_friend_land_experience__email-validation--email-issue"), this._$emailInput = this.$node.find(".js-m_friend_land_experience__email"), this._bindEvents(), _r_()
    }
    l.prototype._bindEvents = function() {
      _i_("385b:b8ab8005"), this._$form.on("submit", function(e) {
        _i_("385b:a74492bd"), e.preventDefault();
        var t = this._$form.serialize();
        this._hideErrors(), this._setLoadingState(), i.ajax({
          url: B.env.secure_hostname + "/saveforlaterindex",
          method: "POST",
          data: t,
          error: function() {
            _i_("385b:8740d335"), this._setLoadedState(), this._showError(1), _r_()
          }.bind(this)
        }).then(function(e) {
          _i_("385b:446c1bc5"), this._setLoadedState(), !e || e && 1 !== e.status ? this._showError(2) : this._onSuccess(), _r_()
        }.bind(this)), _r_()
      }.bind(this)), this._$emailInput.on("focus keyup", this._hideErrors.bind(this)), _r_()
    }, l.prototype._setLoadingState = function() {
      _i_("385b:638341ad"), this._$submitBtn.addClass("-loading"), _r_()
    }, l.prototype._setLoadedState = function() {
      _i_("385b:d1080ad8"), this._$submitBtn.removeClass("-loading"), _r_()
    }, l.prototype._showError = function(e) {
      switch (_i_("385b:82445496"), this._$erorrPlaceholder.show(), this._$serverErrorMessage.hide(), this._$emailIssueErrorMessage.hide(), e) {
        case 1:
          this._$serverErrorMessage.show();
          break;
        case 2:
          this._$emailIssueErrorMessage.show()
      }
      _r_()
    }, l.prototype._hideErrors = function() {
      _i_("385b:6ffd64a8"), this._$erorrPlaceholder.hide(), this._$serverErrorMessage.hide(), this._$emailIssueErrorMessage.hide(), _r_()
    }, l.prototype._onSuccess = function() {
      _i_("385b:1bb133c2"), this._successCallback && this._successCallback(), _r_()
    }, n.exports = r.extend({
      init: function() {
        if (_i_("385b:1855dd6f"), c = !B.env.b_user_auth_level) {
          var e = this;
          a.register("raflanding", {
            load: e._showPopup.bind(e),
            destroy: function() {
              _i_("385b:3cb7e027"), a.pop("raflanding"), _r_()
            }
          }), a.register("raflanding-sfl", {
            load: function() {
              _i_("385b:64cadf06"), e._showPopup(), e._showSaveForLaterView(), _r_()
            },
            destroy: function() {
              _i_("385b:4035f748"), a.pop("raflanding-sfl"), _r_()
            }
          })
        } else if (o && "main" != o && ("signin" != o || !s)) return _r_();
        if (this._$overlay = this.$el.find(".m_friend_land_experience-overlay"), this._$initialView = this.$el.find(".m_friend_land_experience__view-initial"), this._$saveForLaterView = this.$el.find(".m_friend_land_experience__view-save-for-later"), this.saveForLater = new l({
            $node: this._$saveForLaterView,
            callback: this._showSuccessView.bind(this)
          }), this._$savedSuccessfullyView = this.$el.find(".m_friend_land_experience__view-save-success"), this.$el.on("click", ".m_friend_land_experience__close-btn", this._close.bind(this)), this.$el.on("click", ".js-m_friend_land_experience__btn-trigger-start-searching", this._startSearching.bind(this)), this.$el.on("click", ".js-m_friend_land_experience__btn-trigger-save-for-later", this._showSaveForLaterView.bind(this)), this.$el.on("click", ".js-m_friend_land_experience__btn-close-safe-for-later-success", function() {
            if (_i_("385b:9839239f"), c) this._showPopup();
            else {
              var e = Array.prototype.slice.call(arguments);
              this._startSearching.apply(this, e)
            }
            _r_()
          }.bind(this)), this.$el.on("click", ".js-m_friend_land_experience__btn_close_view", this._close.bind(this)), i(window).on("resize.raf-land-experience", this._adjustOverlayHeight.bind(this)), c && o && "main" != o && "raflanding" != o && ("signin" != o || !s)) return _r_();
        this._showPopup(), c && a.push("raflanding"), _r_()
      },
      _adjustOverlayHeight: function() {
        _i_("385b:2468dd53"), this._$overlay.css({
          height: i("body").height() + "px"
        }), _r_()
      },
      _hideAllViews: function() {
        _i_("385b:81b7ac61"), this._$initialView.hide(), this._$saveForLaterView.hide(), this._$savedSuccessfullyView.hide(), _r_()
      },
      _startSearching: function() {
        _i_("385b:94cb9683"), this._close(), i("#input_destination").focus(), _r_()
      },
      _close: function() {
        _i_("385b:5d627b11"), i(window).off(".raf-land-experience"), this._$overlay.detach(), this._hideAllViews(), _r_()
      },
      _showPopup: function() {
        _i_("385b:87c02e56"), this._showInitialView(), i(document.body).append(this._$overlay), this._adjustOverlayHeight(), this._$overlay.show(), setTimeout(this._adjustOverlayHeight.bind(this), 500), _r_()
      },
      _showSaveForLaterView: function() {
        _i_("385b:2c53a67d"), this._hideAllViews(), this._$saveForLaterView.show(), c && a.push("raflanding-sfl"), _r_()
      },
      _showSuccessView: function() {
        _i_("385b:2994ff30"), this._hideAllViews(), this._$savedSuccessfullyView.show(), _r_()
      },
      _showInitialView: function() {
        _i_("385b:dfca19f9"), this._hideAllViews(), this._$initialView.show(), _r_()
      }
    }), _r_()
  }), B.when({
    events: "ready",
    condition: $(".js-m_friend_land_experience__btn-trigger-share").length
  }).run(function() {
    _i_("385b:333b6623"), $(".js-m_friend_land_experience__btn-trigger-share").click(function() {
      _i_("385b:ab1dcac2"), 0 == $(".wechat-share").length && ($(document.body).append($(".wechat-share-pop")), $(".wechat-share-pop").addClass("wechat-share")), $(".wechat-share").show(), _r_()
    }), _r_()
  }), B.define("dismiss-item", function(e, t, n) {
    _i_("385b:4fa1a5b8");
    var i = e("jquery");
    n.exports = function(e) {
      if (_i_("385b:ffcf03b7"), !e) throw new Error("param itemId is required");
      return _r_(i.ajax({
        url: "/dismiss_item",
        type: "POST",
        data: {
          item_id: e
        }
      }))
    }, _r_()
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
        _i_("385b:bc2d0b27"), this.$el.on("click", ".js-close", function() {
          _i_("385b:5fb0e455"), this._dismissItem(), this.hide(), _r_()
        }.bind(this)), _r_()
      },
      _dismissItem: function() {
        return _i_("385b:40f33ccd"), _r_(r(this.options.itemId))
      },
      hide: function() {
        _i_("385b:9a2d9335"), this.$el.hide(), _r_()
      }
    }), _r_()
  }), B.define("component/dismissible-item/on-init", function(e, t, n) {
    _i_("385b:8d48d686");
    var i = e("component"),
      r = e("dismiss-item"),
      a = e("read-data-options");
    n.exports = i.extend({
      init: function() {
        return _i_("385b:16676dbf"), this.options = a(this.$el, {
          itemId: {
            name: "item-id",
            type: String,
            required: !0
          }
        }), _r_(r(this.options.itemId))
      }
    }), _r_()
  }), B.define("segment", ["events", "jquery"], function(t, n) {
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
    }, o.prototype.fire = function(e) {
      if (_i_("385b:a47ea579"), this._fired) return _r_();
      this._fired = !0, this.store(e), t.trigger("track_segment_fire_" + this.name, e), _r_()
    }, o.prototype.getStored = function() {
      return _i_("385b:28517a6f"), _r_(_()[this.name] || {})
    }, o.prototype.store = function(e) {
      _i_("385b:f8acdf6c");
      var t, n = _();
      n[this.name] = n[this.name] || {}, this._fired && (n[this.name].fired = !0), e && (n[this.name].data = e), t = n, _i_("385b:5e9a0191"), r && (B.storage ? B.storage({
        location: "sessionstorage",
        key: a,
        value: t
      }) : B.browserStorageHandler.addSessionValue(a, window.JSON.stringify(t))), _r_(), _r_()
    }, o.prototype.onFire = function(e) {
      return _i_("385b:ea952eec"), this._fired ? e() : t.on("track_segment_fire_" + this.name, e), _r_(this)
    }, o.getInstance = function(e) {
      return _i_("385b:91040b08"), i[e] || (i[e] = new o, i[e].name = e, i[e].init()), _r_(i[e])
    }, o.segmentExists = function(e) {
      return _i_("385b:96dde06d"), _r_(!!i[e])
    }, _r_(o)
  }), B.require(["segment"], function(e) {
    _i_("385b:05ef45cb");
    var t = e.getInstance("facilities-aware"),
      r = {};

    function n() {
      _i_("385b:c76cab4c");
      var n = {},
        i = 0;
      $.each(r, function(e, t) {
        _i_("385b:8a5be24e"), t && (n[e] = !0, i++), _r_()
      }), i && t.fire(n), _r_()
    }
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(function() {
      _i_("385b:76cf054a"), r = Object.assign(r, {
        filterFacilities: (_i_("385b:62f98b11"), _r_(0 < $(".sr-filters--tag__facilities.sr-filters--tag__selected").length))
      }), n(), _r_()
    }), B.when({
      action: "hotel",
      events: "click #hotel_facility_block"
    }).run(function() {
      _i_("385b:48b52716"), r.clickFacilitiesTab = !0, n(), _r_()
    }), _r_()
  }), B.require(["segment"], function(e) {
    _i_("385b:363cc8fa");
    var t = e.getInstance("facilities-filter"),
      r = {};
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(function() {
      _i_("385b:76cf054a1"), r = Object.assign(r, {
          filterFacilities: (_i_("385b:62f98b111"), _r_(0 < $(".sr-filters--tag__facilities.sr-filters--tag__selected").length))
        }),
        function() {
          _i_("385b:c76cab4c1");
          var n = {},
            i = 0;
          $.each(r, function(e, t) {
            _i_("385b:8a5be24e1"), t && (n[e] = !0, i++), _r_()
          }), i && t.fire(n);
          _r_()
        }(), _r_()
    }), _r_()
  }), B.require(["segment"], function(e) {
    _i_("385b:303b0d0b");
    var t = e.getInstance("parking-aware"),
      r = {};
    B.when({
      action: "searchresults",
      events: "ready"
    }).run(function() {
      _i_("385b:0b90985b"), r = Object.assign(r, {
          filterFacilities: (_i_("385b:8735688c"), _r_(0 < $(".sr-filters--tag__hotelfacility-2.sr-filters--tag__selected").length))
        }),
        function() {
          _i_("385b:c76cab4c2");
          var n = {},
            i = 0;
          $.each(r, function(e, t) {
            _i_("385b:8a5be24e2"), t && (n[e] = !0, i++), _r_()
          }), i && t.fire(n);
          _r_()
        }(), _r_()
    }), _r_()
  }), B.define("component/track-segment", function(e, t, n) {
    "use strict";
    _i_("385b:6179fb06");
    var i = e("component"),
      r = e("segment"),
      a = e("et");
    n.exports = i.extend({
      init: function() {
        _i_("385b:a2fbe2ad");
        var n = this;
        $.each((this.$el.attr("data-segment") || "").split(/ +/), function(e, t) {
          _i_("385b:f6befdef"), t && r.getInstance(t).onFire($.proxy(n.track, n)), _r_()
        }), _r_()
      },
      track: function() {
        if (_i_("385b:4285fd56"), this.isTracked) return _r_();
        var e = this.$el.attr("data-hash");
        if (!e) return _r_();
        var t, n = this.$el.attr("data-track") || "click",
          i = this.$el.attr("data-segment-custom-goal"),
          r = this.$el.attr("data-segment-stage");
        i || r || (i = this.$el.attr("data-custom-goal"), r = this.$el.attr("data-stage")), t = "load" === n ? a : a.on(n, this.$el), i ? t.customGoal(e, i) : r ? t.stage(e, r) : t.track(e), this.isTracked = !0, _r_()
      }
    }), _r_()
  }), B.require("jquery")(function(e) {
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

    function s() {
      _i_("385b:6370fb3a"), r.length && a.length && (l({
        placement: r.join("|"),
        method: a.join("|"),
        page: _.join("|")
      }), r.length = 0, a.length = 0, _.length = 0), _r_()
    }

    function c(e, t) {
      if (_i_("385b:e28d3c73"), !e || !t) return _r_();
      var n = B.env && B.env.b_action;
      i ? (clearTimeout(o), r.push(e), a.push(t), _.push(n), o = setTimeout(s, 500)) : l({
        placement: e,
        method: t,
        page: n
      }), _r_()
    }

    function l(e) {
      _i_("385b:67a84fd8"), t.ajax({
        url: "/gta_impression",
        type: "POST",
        data: e
      }), _r_()
    }
    return _r_({
      trackWidgetImpressionOnView: function(e, t) {
        _i_("385b:9acdd93a"),
          function(e, t) {
            _i_("385b:4935302b");
            var n = e.getAttribute("id");
            n || (n = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(), e.setAttribute("id", n)), B.when({
              events: ["view #" + n, "gta:lightbox:init #" + n]
            }).run(function() {
              _i_("385b:8852ad20"), c(t.getCurrentPlacementName(), t.getMethodName()), _r_()
            }), _r_()
          }(e, t), _r_()
      },
      trackLinkImpressionOnView: function(e) {
        _i_("385b:4df570ab"),
          function(e) {
            _i_("385b:bc596103");
            var t = e.getAttribute("id"),
              n = e.getAttribute("data-placement");
            t || (t = ("gta-link-" + n).toLowerCase(), e.setAttribute("id", t)), B.when({
              events: ["view #" + t, "gta:lightbox:init #" + t]
            }).run(function() {
              _i_("385b:379165dd"), c(n, "link"), _r_()
            }), _r_()
          }(e), _r_()
      },
      trackImpression: function(e, t) {
        _i_("385b:af56aff9"), c(e, t), _r_()
      }
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
      _i_("385b:3e55b1d2"), o.on("focus input keyup", function(e) {
        if (_i_("385b:e89641a6"), n(e.currentTarget).val().length > _) return b(), _r_();
        f(), _r_()
      }), o.on("blur", function() {
        _i_("385b:d78de65a"), b(), _r_()
      }), _r_()
    }

    function u() {
      _i_("385b:622eeb0c"), s.on("click", ".popdest__item", function(e) {
        _i_("385b:6023e47d"), e.preventDefault(), h(n(e.currentTarget)), _r_()
      }), s.on("click", ".js-autocomplete-history-item", function(e) {
        _i_("385b:374b951c"), e.preventDefault(), h(n(this)), _r_()
      }), s.on("click", ".js-autocomplete-history-current-location", function() {
        _i_("385b:a6c1331e"), n(this).closest("[data-section-ovelayed-destination]").find("[data-section-overlay-apply]").trigger("click"), _r_()
      }), _r_()
    }

    function f() {
      _i_("385b:5600bb6d"), c && (B.et.stage("OLBEdIXCeZVGLT", 1), setTimeout(function() {
        _i_("385b:a5f213f5"), s.show(), n(".ui-autocomplete").hide(), i.emit(B.eventNames.SEARCHBOX_DEST_SHOW, s), _r_()
      }, t)), _r_()
    }

    function b() {
      _i_("385b:0ecd1a75"), setTimeout(function() {
        _i_("385b:35045056"), s.hide(), i.emit(B.eventNames.SEARCHBOX_DEST_HIDE, s), _r_()
      }, t), _r_()
    }

    function h(e) {
      _i_("385b:01c5791f");
      var t = e.data();
      r.applyValues({
        dest_id: t.destId,
        dest_type: t.destType,
        ss: t.title,
        ssne: t.title,
        ssne_untouched: t.title
      }), a && (a.selected = "popular"), B.et.track("m_sb_pop_dest_really_hide_keyboard__hashed") ? setTimeout(function() {
        _i_("385b:37d2948e"), n("input").blur(), _r_()
      }, 10) : o.trigger("blur"), i.emit(B.eventNames.SEARCHBOX_DEST_ITEM_SELECTED, e), _r_()
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
      disableShowDestinations: function() {
        _i_("385b:bdec35c5"), c = !1, _r_()
      },
      enableShowDestinations: function() {
        _i_("385b:11df1a36"), c = !0, _r_()
      }
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
    }).run(function(e) {
      _i_("385b:32eaf122");
      var t = B.eventEmitter || i(window);
      if (i.cookie("fscag01")) {
        t.on(B.eventNames.GROWL_USER_CLOSING, function(e, t) {
          _i_("385b:19579498"), t && t.type && "abandoned-cart" === t.type && i.removeCookie("fscag01", null, {
            path: "/",
            domain: B.env.b_domain_end
          }), _r_()
        });
        var n = {
          message: B.env.fe_abandoned_cart_growl_content,
          type: "abandoned-cart",
          showAsFirst: !0,
          duration: 6e4
        };
        B.growl(n), i(".abandoned-cart-growl-item").on("click", function(e) {
          _i_("385b:c036567e"), e.stopPropagation(), window.location.href = B.env.fe_abandoned_cart_growl_url, i(this).addClass("-tapped"), _r_()
        })
      }
      _r_()
    }), _r_()
  }();
var $ = B.require("jquery");
B.when({
    condition: "mdot" === B.env.b_site_type && $("#ge_genius_rate").length
  }).run(function() {
    _i_("385b:5a1046fb");
    var e = $("#ge_genius_rate");
    if (B.storage({
        key: "genius_search_checkbox_checked",
        location: "localstorage"
      }) || !e.length) return _r_();
    e.prop("checked", !0).on("change", function() {
      _i_("385b:db680e4e"), B.storage({
        key: "genius_search_checkbox_checked",
        value: 1,
        location: "localstorage"
      }), _r_()
    }), _r_()
  }), B.when({
    condition: B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
  }).run(function() {
    "use strict";
    _i_("385b:052b4a0a");
    var _, o = B.debug("fps"),
      s = 0;
    var e, c = !1;

    function t() {
      _i_("385b:0d5bda12");
      var i = performance.now(),
        r = 0;
      c = !1;
      var a = function() {
        if (_i_("385b:6b4a2672"), r++, c) {
          var e = performance.now(),
            t = Math.round(1e3 * r / (e - i));
          n = t, _i_("385b:561242d6"), o.log(n), s ? _ = (s * _ + n) / (s += 1) : (s = 1, _ = n), o.log("fps_avg", _), _r_()
        } else requestAnimationFrame(a);
        var n;
        _r_()
      };
      requestAnimationFrame(a), _r_()
    }

    function n() {
      _i_("385b:a22a736e"), c = !(e = void 0), _r_()
    }

    function i() {
      _i_("385b:a592d981"), void 0 === e ? t() : clearTimeout(e), e = setTimeout(n, 200), _r_()
    }
    window.addEventListener("scroll", i, !0), B.eventEmitter.on("et-scroll-observer:scroll", i), setTimeout(function() {
      _i_("385b:04cdec97"), _ && (o.log("js_fps_avg_1m", _), B.env.fe_send_fe_stats_hash && (B.env.fps_avg_1m = _), B.et.goalWithValue("js_fps_avg_1m", parseInt(_))), window.removeEventListener("scroll", i, !0), B.eventEmitter.off("et-scroll-observer:scroll", i), _r_()
    }, 6e4), _r_()
  }), B.define("component/company/account-split/profile-switch-link", function(e, t, n) {
    "use strict";
    _i_("385b:0720655f");
    var i = e("component");

    function a() {
      var e, t, n;
      _i_("385b:a2abb747");
      var i = B.env.b_connected_user_accounts,
        r = this.$el.attr("data-user-id");
      for (e = 0, t = i.length; e < t; ++e) i[e].b_user_id !== r && (n = i[e]);
      return _r_(n)
    }
    n.exports = i.extend({
      init: function() {
        _i_("385b:802c453f"), this.$el.on("click", function() {
            _i_("385b:44ee8248");
            var e = a.call(this),
              t = this.$el.attr("data-href"),
              n = this.$el.attr("data-redirect-url-business"),
              i = this.$el.attr("data-redirect-url-leisure"),
              r = $("<form>", {
                action: t,
                method: "POST"
              });
            $("<input>").attr({
              type: "hidden",
              name: "redirect_url",
              value: "business" === e.b_type ? n : i
            }).appendTo(r), $("<input>").attr({
              type: "hidden",
              name: "switch_to_user_id",
              value: e.b_user_id
            }).appendTo(r), $("<input>").attr({
              type: "hidden",
              name: "bhc_csrf_token",
              value: B.env.b_csrf_token
            }).appendTo(r), $("<input>").attr({
              type: "hidden",
              name: "bhc_csrf_token_check",
              value: 1
            }).appendTo(r), r.appendTo("body").submit(), _r_()
          }.bind(this)),
          function() {
            _i_("385b:7250f2cc");
            var e = a.call(this);
            $("<input>").attr({
              type: "hidden",
              name: "sb_travel_purpose",
              value: "business" === e.b_type ? "leisure" : "business"
            }).appendTo(this.$el), _r_()
          }.call(this), _r_()
      }
    }), _r_()
  }), B.define("rewards-ui/ga-tracking", function(e, t, n) {
    _i_("385b:516807c8");
    var r = e("ga-tracker"),
      a = function() {
        _i_("385b:d66e7588");
        var e = B.env.b_action;
        if ("index" === e) return _r_("Index");
        if ("searchresults" === e) return _r_("SR");
        if ("hotel" === e) return _r_("HP");
        if ("book" === e) {
          var t = B.env.b_book_stage;
          return _r_("BS" + t)
        }
        return _r_("UnknownPage")
      }();
    n.exports = {
      trackEvent: function(e, t, n, i) {
        _i_("385b:d8a4d6af"), void 0 === t && (t = a), r.trackEvent(r.incentivesTracker, e, t, n, i), _r_()
      }
    }, _r_()
  }), B.define("component/rewards-ui/ribbon", function(e, t, n) {
    _i_("385b:0f3043a2");
    var i, r, a = e("component"),
      _ = e("events"),
      o = e("rewards-ui/ga-tracking");
    "www" === B.env.b_site_type && "index" === B.env.b_action && (i = e("ultrafocus")) && (r = i.getInstance("rewards-ribbon", "[data-sb-outer]")), n.exports = a.extend({
      init: function() {
        _i_("385b:48b965e5"), this.initEvents(), _r_()
      },
      initEvents: function() {
        _i_("385b:27a35031"), this.$el.on("click", function() {
          _i_("385b:03058447"), this.$el.hasClass("-collapsed") && this.toggleRibbon(), _r_()
        }.bind(this)), this.$el.find(".js-toggle").on("click", this.toggleRibbon.bind(this)), this.$el.find(".js-collapse").on("click", this.collapseRibbon.bind(this)), r && r.on("ultrafocus::shown", function() {
          _i_("385b:a7983bf5"), $("#ss").focus(), _r_()
        }), "mdot" === B.env.b_site_type && "hotel" === B.env.b_action && B.eventNames && (this.$el.after('<div id="js-rewards-ui-ribbon-placement"></div>'), _.on(B.eventNames.RT_ROOM_EXPAND, function(e) {
          _i_("385b:fb49c190"), e.fullpage.$container.find(".js-rooms-page-loading").before(this.$el), _r_()
        }.bind(this)), _.on(B.eventNames.RT_ROOM_FOLD, function() {
          _i_("385b:6110acbb"), $("#js-rewards-ui-ribbon-placement").before(this.$el), _r_()
        }.bind(this))), _r_()
      },
      toggleRibbon: function() {
        return _i_("385b:90c52f87"), this.$el.toggleClass("-expanded -collapsed"), this.$el.hasClass("-expanded") && this.trackExpanded(), _r_(!1)
      },
      collapseRibbon: function() {
        return _i_("385b:abe73d6f"), this.$el.removeClass("-expanded").addClass("-collapsed"), r && r.show(), this.trackCollapsed(), _r_(!1)
      },
      trackExpanded: function() {
        _i_("385b:f5362c1e"), o.trackEvent("Ribbon-expand"), _r_()
      },
      trackCollapsed: function() {
        _i_("385b:5bbd7df3"), o.trackEvent("Ribbon-cta-click"), _r_()
      }
    }), _r_()
  }), B.define("component/rewards-ui/landing", function(e, t, n) {
    _i_("385b:da892457");
    var i, r, a = e("component"),
      _ = e("dismiss-item"),
      o = window.BUI,
      s = e("jquery"),
      c = e("rewards-ui/ga-tracking");
    "www" === B.env.b_site_type && "index" === B.env.b_action && (i = e("ultrafocus")) && (r = i.getInstance("rewards-landing", "[data-sb-outer]")), n.exports = a.extend({
      init: function() {
        _i_("385b:ec024b94"), this.modal = o.createInstance("Modal", document.createElement("div"), {
          id: "rewards-landing",
          onAfterClose: function() {
            _i_("385b:796f1dac"), _("rewards_landing"), r && r.show(), _r_()
          }
        }), r && r.on("ultrafocus::shown", function() {
          _i_("385b:a7983bf51"), s("#ss").focus(), _r_()
        }), this.modal.open(), this.initEvents(), _r_()
      },
      initEvents: function() {
        _i_("385b:2b31a0ae"), s(this.modal.modalEl).find(".js-main-cta").on("click", this.trackMainCta.bind(this)), _r_()
      },
      trackMainCta: function() {
        _i_("385b:96d27632"), c.trackEvent("Landing-cta-click"), _r_()
      }
    }), _r_()
  }), B.define("component/rewards-ui/offer-base", function(e, t, n) {
    _i_("385b:420c82b7");
    var i = e("component"),
      r = e("jquery");
    n.exports = i.extend({
      rejectCampaign: function() {
        _i_("385b:47694e36"), r.ajax({
          url: (B.env.b_secure_domain || B.env.b_domain_for_book) + "/incentives/accept_or_reject_onsite",
          type: "post",
          data: {
            offer_status: "rejected"
          },
          xhrFields: {
            withCredentials: !0
          }
        }), _r_()
      },
      applyCampaign: function() {
        _i_("385b:b0185ff3"), this.onApplyStart(), this.hideError(), r.ajax({
          url: (B.env.b_secure_domain || B.env.b_domain_for_book) + "/incentives/accept_or_reject_onsite",
          type: "post",
          data: {
            offer_status: "accepted"
          },
          xhrFields: {
            withCredentials: !0
          },
          success: function(e) {
            _i_("385b:ae48e12f"), e && 1 === e.success ? this.onApplySuccess(e) : this.showError(), _r_()
          }.bind(this),
          error: function() {
            _i_("385b:b03990c0"), this.showError(), _r_()
          }.bind(this),
          complete: function() {
            _i_("385b:acfd7d10"), this.onApplyComplete(), _r_()
          }.bind(this)
        }), _r_()
      },
      initRibbon: function() {
        _i_("385b:14825841");
        var e = r("#rewards-ribbon").html();
        "mdot" === B.env.b_site_type ? r(".tabbed-nav--content.tab-active").prepend(e) : r("body").append(e), r(".rewards-ribbon").loadComponents(), window.BUI && window.BUI.initComponents && window.BUI.initComponents(r(".rewards-ribbon").get(0)), _r_()
      },
      onApplySuccess: function() {},
      onApplyStart: function() {},
      onApplyComplete: function() {},
      showError: function() {},
      hideError: function() {}
    }), _r_()
  }), B.define("component/rewards-ui/offer-modal", function(e, t, n) {
    _i_("385b:cc7fa680");
    var i = e("component/rewards-ui/offer-base"),
      r = window.BUI,
      a = e("et"),
      _ = e("jquery");
    n.exports = i.extend({
      init: function() {
        _i_("385b:017ecff8"), this.expHash = this.$el.data("hash"), this.modal = r.createInstance("Modal", document.createElement("div"), {
          id: "rewards-offer-modal",
          onAfterOpen: function() {
            _i_("385b:0f48f41b"), this.$modalRoot = _(this.modal.getModalRoot()), this.initEvents(), _r_()
          }.bind(this),
          onBeforeClose: function() {
            _i_("385b:94284826"), this.campaignApplied || this.rejectCampaign(), _r_()
          }.bind(this)
        }), this.modal.open(), _r_()
      },
      initEvents: function() {
        _i_("385b:ad293820"), this.$modalRoot.find(".js-reject").on("click", this.modal.close.bind(this.modal)), this.$modalRoot.find(".js-apply").on("click", this.applyCampaign.bind(this)), _r_()
      },
      rejectCampaign: function() {
        _i_("385b:3a1a79c8"), this.expHash && a.customGoal(this.expHash, 2), i.prototype.rejectCampaign.apply(this), _r_()
      },
      applyCampaign: function() {
        _i_("385b:0117da52"), this.expHash && a.customGoal(this.expHash, 1), i.prototype.applyCampaign.apply(this), _r_()
      },
      onApplySuccess: function() {
        _i_("385b:b9576e43"), this.campaignApplied = !0, this.modal.close(), this.initRibbon(), _r_()
      },
      onApplyStart: function() {
        _i_("385b:bb24459f"), this.$modalRoot.find(".js-apply").addClass("bui-is-loading"), _r_()
      },
      onApplyComplete: function() {
        _i_("385b:a9328f2a"), this.$modalRoot.find(".js-apply").removeClass("bui-is-loading"), _r_()
      },
      showError: function() {
        _i_("385b:a00bb60d"), this.$modalRoot.find(".rewards-offer-modal__error").removeClass("g-hidden"), _r_()
      },
      hideError: function() {
        _i_("385b:3c43d261"), this.$modalRoot.find(".rewards-offer-modal__error").addClass("g-hidden"), _r_()
      }
    }), _r_()
  }), B.define("component/rewards-ui/feedback-modal", function(e, t, n) {
    _i_("385b:54ab697b");
    var i = e("component"),
      r = window.BUI;
    n.exports = i.extend({
      init: function() {
        _i_("385b:147fd111");
        var e = r.createInstance("Modal", null, {
          id: "incentives-feedback-modal"
        });
        e.mount(), e.open(), _r_()
      }
    }), _r_()
  }), B.when({
    events: "ready"
  }).run(function() {
    _i_("385b:25310b97");
    var e = function(e, t) {
      _i_("385b:f132ef94"), setTimeout(function() {
        _i_("385b:1401e2b8"), 0 < e.length && t(e), _r_()
      }, 0), _r_()
    };
    e($(".alternative_rewards__banner_container_desktop"), function(e) {
      _i_("385b:dfdc11ea");
      var t = {
        expandedBanner: $("#alternative_rewards__expanded_banner"),
        collapsedBanner: $("#alternative_rewards__collapsed_banner"),
        optedInButton: $("#alternative_rewards__opted_in"),
        optInButton: $("#alternative_rewards__opt_in"),
        optOutButton: $("#alternative_rewards__opt_out")
      };
      t.optInButton.click(function() {
        _i_("385b:fd2e99b8"), t.collapsedBanner.css("display", "block"), t.optedInButton.css("display", "block"), t.expandedBanner.css("display", "none"), t.optInButton.css("display", "none"), t.optOutButton.css("display", "none"), $.ajax({
          method: "POST",
          xhrFields: {
            withCredentials: !0
          },
          url: "/bcomlottery/update_settings?aid=" + (B.env.aid || "100000"),
          data: {
            mode: "customer_agreement",
            is_customer_interested: 1
          }
        }), _r_()
      }), t.optedInButton.click(function() {
        _i_("385b:eaf07b80"), t.collapsedBanner.css("display", "block"), t.expandedBanner.css("display", "none"), _r_()
      }), t.optOutButton.click(function() {
        _i_("385b:1fda06ee"), t.expandedBanner.css("display", "none"), t.collapsedBanner.css("display", "none"), $.ajax({
          method: "POST",
          xhrFields: {
            withCredentials: !0
          },
          url: "/bcomlottery/update_settings?aid=" + (B.env.aid || "100000"),
          data: {
            mode: "customer_agreement",
            is_customer_interested: 0
          }
        }), _r_()
      }), $("#alternative_rewards__collapsed_banner").click(function() {
        _i_("385b:d01afd67"), t.collapsedBanner.css("display", "none"), t.expandedBanner.css("display", "block"), _r_()
      }), $(document).on("click", ".alternative_rewards__tnc_link", function() {
        _i_("385b:c67aa2e6");
        try {
          B.et.stage("OVQSXIOCARSXMRUMVMIIcGVOBdVVUNTBdVZXDfYTWUTZVCMIRe", 1), B.et.customGoal("OVQSXIOCARSXMRUMVMIIcGVOBdVVUNTBdVZXDfYTWUTZVCMIRe", 3)
        } catch (e) {}
        _r_()
      }), _r_()
    }), e($(".alternative_rewards__mdot_banner"), function(e) {
      _i_("385b:7acfde73");
      var t = {
        modal: $("#alternative_rewards__m_modal"),
        optOutButton: $("#alternative_rewards__m_modal .alternative_rewards__opt_out"),
        optInButton: $("#alternative_rewards__m_modal .alternative_rewards__opt_in"),
        header: $(".alternative_rewards__mdot_banner")
      };
      1 === parseInt(t.modal.data("show-on-load")) && t.modal.css("display", "block"), t.optOutButton.click(function() {
        _i_("385b:6c6bed86"), t.modal.remove(), $.ajax({
          method: "POST",
          xhrFields: {
            withCredentials: !0
          },
          url: "/bcomlottery/update_settings?aid=304142",
          data: {
            mode: "customer_agreement",
            is_customer_interested: 0
          }
        }), _r_()
      }), t.optInButton.click(function() {
        _i_("385b:eeb01544"), t.modal.remove(), t.header.css("display", "block"), $.ajax({
          method: "POST",
          xhrFields: {
            withCredentials: !0
          },
          url: "/bcomlottery/update_settings?aid=304142",
          data: {
            mode: "customer_agreement",
            is_customer_interested: 1
          }
        }), _r_()
      }), _r_()
    }), _r_()
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
      }), i.on(n.EVENTS.AUTOCOMPLETE_ITEM_SELECTED, function(e, t) {
        _i_("385b:77040878"), a.applyValues({
          is_ski_area: t.flags && t.flags.ski_item
        }), _r_()
      }), _r_()
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
    }).run(function(e) {
      _i_("385b:a5de671b");
      var t = e("jquery"),
        n = e("events"),
        i = e("event-bus"),
        r = e("et"),
        a = t("form#form_search_location");
      if (!a.length) return _r_();
      i.on(n.EVENTS.AUTOCOMPLETE_ITEM_SELECTED, function(e, t) {
        _i_("385b:f3314656");
        var n = a.searchbox();
        t.flags && t.flags.beach_labeled_filter && (r.customGoal(_, 3), n.applyValues({
          nflt: "beachLabeledFilter=1;",
          is_beach_ufi_search: 1
        })), _r_()
      }), _r_()
    }), e.when({
      events: "ready",
      action: "searchresults",
      experiment: _
    }).run(function(e) {
      _i_("385b:d1e2f86a");
      var t = e("jquery"),
        n = e("et"),
        i = t('div#active_filters a[data-filter-id="beachLabeledFilter-1"]');
      i && i.on("click", function(e) {
        _i_("385b:ceeb7830"), n.customGoal(_, 4), _r_()
      }), _r_()
    }), _r_()
  }(window.booking), B.define("component/referral/web-virality/ga", function(e, t, n) {
    _i_("385b:a0535f39");
    var i = e("component"),
      r = e("ga-tracker"),
      a = e("jquery"),
      _ = e("when/events-view");
    "mdot" == B.env.b_site_type && B.events && B.eventNames && B.eventNames.TABNAV_MENU_LOADED && B.events.one(B.eventNames.TABNAV_MENU_LOADED, function() {
      _i_("385b:e5a27b97"), a("#raf-nav-entrypoint").loadComponents(), _r_()
    }), n.exports = i.extend({
      init: function() {
        _i_("385b:9d0bfdba");
        var e = this.$el;
        switch (e.data("wv-ga-type")) {
          case "pageview":
            var t = e.data("wv-ga-details");
            if (!t) return _r_();
            switch (B.env.b_action) {
              case "index":
                r.trackEvent(r.webViralityTracker, "raf-index-page-entered|" + t);
                break;
              case "searchresults":
                r.trackEvent(r.webViralityTracker, "raf-sr-page-entered|" + t);
                break;
              case "hotel":
                r.trackEvent(r.webViralityTracker, "raf-hp-page-entered|" + t);
                break;
              case "book":
                2 == B.env.b_stage ? r.trackEvent(r.webViralityTracker, "raf-bs2-entered|" + t) : 3 == B.env.b_stage && r.trackEvent(r.webViralityTracker, "raf-bs3-entered|" + t);
                break;
              case "confirmation":
                r.trackEvent(r.webViralityTracker, "raf-confirmation-page-entered|" + t)
            }
            break;
          case "viewandclick":
            e.on("click", function() {
              _i_("385b:5def794c"), r.trackEvent(r.webViralityTracker, "entry-point-button-click", e.data("wv-ga-placement")), _r_()
            }), _(e, function() {
              _i_("385b:b5a7c9fa"), r.trackEvent(r.webViralityTracker, "entry-point-button-show", e.data("wv-ga-placement")), _r_()
            });
            break;
          case "myreferrals-pageview":
            r.trackEvent(r.webViralityTracker, "raf-dashbard-show|" + e.data("wv-ga-action"), e.data("wv-ga-code"));
            break;
          case "click":
            e.on("click", function() {
              _i_("385b:9127e7ae"), r.trackEvent(r.webViralityTracker, e.data("wv-ga-action")), _r_()
            });
            break;
          case "share":
            e.on("click", function() {
              _i_("385b:3ad9c335"), r.trackEvent(r.webViralityTracker, e.data("wv-ga-action"), e.data("wv-ga-placement")), _r_()
            })
        }
        _r_()
      }
    }), _r_()
  }), B.when({
    condition: B.env.fe_show_amazon_prime_onboarding_modal,
    events: "ready"
  }).run(function() {
    _i_("385b:e40143fd"), window.BUI.createInstance("Modal", null, {
      id: "amazonPrimeOnboardingModal"
    }).open(), _r_()
  }), B.when({
    condition: B.env.fe_show_amazon_prime_crosssell_modal,
    events: "ready"
  }).run(function() {
    _i_("385b:c957dfde"), window.BUI.createInstance("Modal", null, {
      id: "amazonPrimeCrossSellModal"
    }).open(), _r_()
  }), B.when({
    condition: B.env.fe_show_signle_sign_grab_welcome_modal,
    events: "ready"
  }).run(function() {
    _i_("385b:339d6f51"), window.BUI.createInstance("Modal", null, {
      id: "singleSignGrabWelcomeModal"
    }).open(), _r_()
  }), B.when({
    condition: B.env.fe_show_opentable_welcome_modal,
    events: "ready"
  }).run(function() {
    _i_("385b:979a5c2c"), window.BUI.createInstance("Modal", null, {
      id: "openTableWelcomeModal"
    }).open(), _r_()
  }), B.when({
    events: "ready",
    condition: B.env.fe_new_level_comms_block_displayed && B.env.fe_new_level_comms_ga_tracking_enabled
  }).run(function(e) {
    _i_("385b:cd83bfac");
    var c = B.require("jquery"),
      t = B.require("ga-tracker");
    if (!t || !c) return _r_();
    var n = {},
      i = c("[data-ga-track-genius]").map(function(e, t) {
        _i_("385b:722ade42");
        var n = c(t).data("ga-track-genius"),
          i = n.split("|"),
          r = i[0],
          a = i[1],
          _ = i[2] || "Action",
          o = i[3] || "Label",
          s = parseInt(i[4], 10) || 1;
        if ("load" === r) return _r_({
          hash: n,
          category: a,
          action: _,
          label: o,
          value: s
        });
        _r_()
      }).get().reduce(function(e, t) {
        if (_i_("385b:bc517d62"), n[t.hash]) return _r_(e);
        return n[t.hash] = 1, e.push(t), _r_(e)
      }, []);
    t.pageviewIsTracked().then(function() {
      _i_("385b:c9073661"), i.map(function(e) {
        _i_("385b:e2be2af9"), t.trackEvent(e.category, e.action, e.label, e.value), _r_()
      }), _r_()
    }), _r_()
  }), B.define("component/genius-week-index-banner", function(_, e, t) {
    if (_i_("385b:26154018"), !(B.env.fe_highlight_genius_week_banner && !B.env.fe_show_genius_week_onboarding)) return t.exports = B.require("component"), _r_();
    t.exports = B.require("component").extend({
      init: function() {
        _i_("385b:c87aed78");
        var e = _("jquery"),
          t = B.require("dismiss-item"),
          n = e(this.$el),
          i = n.find(".js-genius-week-index-banner-overlay"),
          r = this.scrollToOffset;

        function a() {
          _i_("385b:315d7c89"), i.off().fadeOut(function() {
            _i_("385b:ec0367aa"), n.removeClass("gweek-index-banner--highlighted"), _r_()
          }), _r_()
        }
        B.when({
          events: "load"
        }).run(function() {
          _i_("385b:12bbc4a0"), r(e(window).height() - n.offset().top + n.innerHeight()).then(function() {
            _i_("385b:d7bf54e0"), setTimeout(function() {
              _i_("385b:6c085427"), t(B.env.fe_GWEEK_DISMISSIBLE_ITEM_BANNER_FROM_AD), e(window).one("scroll", a), _r_()
            }, 500), _r_()
          }), n.addClass("gweek-index-banner--highlighted"), i.fadeIn().one("click", function() {
            _i_("385b:f15c38e5"), r(0), _r_()
          }), _r_()
        }), _r_()
      },
      scrollToOffset: function(e) {
        _i_("385b:22c8933d");
        var t = $.Deferred();
        return $("html, body").animate({
          scrollTop: e
        }, 400, "swing", t.resolve), _r_(t)
      }
    }), _r_()
  }), B.define("component/genius-countdown", function(e, t, n) {
    "use strict";
    _i_("385b:26a986c3");
    var i = e("component");
    n.exports = i.extend({
      init: function() {
        _i_("385b:77113b34"), this.timeInterval = null, this.finalTimestamp = +this.$el.data("final-timestamp") - 3e3, this.totalCampaignTime = +this.$el.data("final-timestamp") - this.$el.data("initial-timestamp"), this.timesLeft = {}, this.elements = {
          days: this.getElement("days"),
          hours: this.getElement("hours"),
          minutes: this.getElement("minutes"),
          seconds: this.getElement("seconds"),
          progress: this.$el.find(".js-gweek-countdown-progress")
        }, this.copyTags = {
          days: "web_genius_week_ads_promo_message_all_users_days",
          hours: "web_genius_week_ads_promo_message_all_users_hours",
          minutes: "web_genius_week_ads_promo_message_all_users_minutes",
          seconds: "web_genius_week_ads_promo_message_all_users_seconds"
        }, this.isShortComponent = "short" === this.$el.data("format"), this.showProgress = this.$el.data("show-progress") && "false" !== this.$el.data("show-progress"), this.hasOneComponentVisible, this.startCountdown(), _r_()
      },
      getElement: function(e) {
        _i_("385b:1bd10619");
        var t = this.$el.find(".js-gweek-countdown-" + e);
        return _r_({
          root: t,
          num: t.find(".js-gweek-countdown-" + e + "__num"),
          copy: t.find(".js-gweek-countdown-" + e + "__copy")
        })
      },
      startCountdown: function() {
        _i_("385b:26ed4b27"), this.updateCountdown(), this.showProgress && this.updateProgress(), this.timeInterval = setInterval(this.updateCountdown.bind(this), 1e3), _r_()
      },
      stopTimer: function() {
        _i_("385b:71dbded2"), clearInterval(this.timeInterval), this.timeInterval = null, _r_()
      },
      updateCountdown: function() {
        _i_("385b:947dded9"), !this.timesLeft || this.timesLeft.total <= 0 ? (this.stopTimer(), this.updateTime(!0)) : this.updateTime();
        var n = !1;
        ["days", "hours", "minutes", "seconds"].forEach(function(e) {
          if (_i_("385b:1fdfdfc1"), this.isShortComponent && n) return _r_();
          if (!this.isShortComponent || this.timesLeft[e]) {
            var t = this.elements[e].root;
            t.fadeIn(), this.isShortComponent && (t.siblings(":not(.js-gweek-countdown-progress)").fadeOut(), n = !0)
          }
          this.updateElement(e), _r_()
        }.bind(this)), this.setElementsColor(), _r_()
      },
      updateTime: function(e) {
        _i_("385b:69d68b57");
        var t = e ? 0 : this.finalTimestamp - Date.now();
        return t < 0 && (t = 0), this.timesLeft = {
          total: t,
          days: Math.floor(t / 864e5),
          hours: Math.floor(t / 36e5 % 24),
          minutes: Math.floor(t / 1e3 / 60 % 60),
          seconds: Math.floor(t / 1e3 % 60)
        }, _r_(this.timesLeft)
      },
      updateElement: function(e) {
        _i_("385b:084b981c");
        var t = this.elements[e],
          n = this.timesLeft[e];
        if ("" !== t.num.text() && +t.num.text() == n) return _r_();
        t.num.text(this.padLeft(n));
        var i = this.getUpdatedCopy(e, n);
        t.copy.text() !== i && t.copy.text(i), _r_()
      },
      getUpdatedCopy: function(e, t) {
        return _i_("385b:374a29d8"), _r_(B.jstmpl.translations(this.copyTags[e], t))
      },
      setElementsColor: function() {
        if (_i_("385b:497e1d16"), 0 < this.timesLeft.days) return _r_();
        if (this.elements.days.root.addClass("gweek-countdown__item--past"), 0 < this.timesLeft.hours) return _r_();
        if (this.elements.hours.root.addClass("gweek-countdown__item--past"), 0 < this.timesLeft.minutes) return _r_();
        if (this.elements.minutes.root.addClass("gweek-countdown__item--past"), 0 < this.timesLeft.seconds) return _r_();
        this.elements.seconds.root.addClass("gweek-countdown__item--past"), _r_()
      },
      updateProgress: function() {
        _i_("385b:d8ea011f");
        var e = this.timesLeft.total / this.totalCampaignTime * 100;
        this.elements.progress.width(e + "%"), _r_()
      },
      padLeft: function(e) {
        if (_i_("385b:60c1c38f"), e < 10) return _r_("0" + e);
        return _r_(e)
      }
    }), _r_()
  }), B.when({
    events: "load",
    condition: B.env.fe_show_genius_week_onboarding
  }).run(function() {
    _i_("385b:31b683d0");
    var e = B.require("dismiss-item"),
      t = B.env.fe_GWEEK_DISMISSIBLE_ITEM_ONBOARDING,
      n = document.createElement("div");
    window.BUI.createInstance("Modal", n, {
      id: "geniusWeekOnboarding",
      onBeforeOpen: function() {
        _i_("385b:8f5c7168"), e(t), _r_()
      }
    }).open(), _r_()
  }), B.when({
    events: "ready"
  }).run(function() {
    _i_("385b:2999ccdc");
    var e = B.env.fe_robot_note;
    e && B.require("jquery").post("/seo/robot_note", {
      note: e
    });
    _r_()
  }), B.define("component/cookie-consent/manage-settings", function(e, t, n) {
    "use strict";
    _i_("385b:8526b9bc");
    var i = e("component"),
      r = e("jquery"),
      a = e("et");
    n.exports = i.extend({
      init: function() {
        _i_("385b:48a7e125"), this.cookieWarningVisible = this.$el.data("cookie-warning-visible"), this.modal = window.BUI.getInstance(this.$el.get(0)), this.modal && this.modal.props && this.modal.props.onBeforeOpen ? this.modal.props.onBeforeOpen = function() {
          _i_("385b:6b30e7cc");
          var e = r(this.modal.modalEl);
          this.bindFormEvents(e), _r_()
        }.bind(this) : (this.$targetElement = r(this.$el.siblings("#" + this.$el.data("target-element-id"))), this.bindFormEvents(this.$targetElement), this.$el.on("click", function() {
          _i_("385b:d03cb5c9"), this.$targetElement.show(), this.$targetElement.find(".cookie-warning-v2").first().show(), _r_()
        }.bind(this))), _r_()
      },
      loadTealium: function() {
        var e;
        _i_("385b:8acfea45"), B.env && B.env.fe_tealium_src && ((e = document.createElement("script")).src = B.env.fe_tealium_src, e.type = "text/javascript", e.async = !0, document.body.appendChild(e)), _r_()
      },
      loadGoogleAnalytics: function() {
        _i_("385b:0a3b4be8");
        var e = B.env.b_analytics_tracking_string;
        e && "string" == typeof e && "function" == typeof ga && (ga("require", "displayfeatures"), ga("send", "pageview", e + "&ga_virtual_pageview=1")), _r_()
      },
      bindFormEvents: function(e) {
        _i_("385b:71daae25"), this.$form = e.find("form"), this.$form.on("submit", this.save.bind(this)), this.$form.on("click", function(e) {
          if (_i_("385b:0b5b1bb4"), e.target.classList.contains("js-cancel-button")) {
            if (e.preventDefault(), this.modal) this.modal.close();
            else {
              var t = this.$targetElement.find(".bui-accordion__row.bui-is-active");
              t.removeClass("bui-is-active"), t.find("button").attr("aria-expanded", "false"), this.$targetElement.hide()
            }
            return _r_()
          }
          if (e.target.classList.contains("js-show-more-details")) return e.preventDefault(), r(".cookie-warning-v2__more-details").show(), r(".cookie-warning-v2__settings").hide(), _r_();
          if (e.target.classList.contains("js-show-settings")) return e.preventDefault(), r(".cookie-warning-v2__more-details").hide(), r(".cookie-warning-v2__settings").show(), _r_();
          if (e.target.classList.contains("cookie-warning-v2-modal__category-button")) {
            e.preventDefault(), r(".cookie-warning-v2-modal__category--active").addClass("cookie-warning-v2-modal__category").removeClass("cookie-warning-v2-modal__category--active");
            var n = r(e.target);
            return n.parent().addClass("cookie-warning-v2-modal__category--active").removeClass("cookie-warning-v2-modal__category"), r(".cookie-warning-v2-modal__category-content-inner").children().hide(), r("#" + n.data("content-id")).show(), _r_()
          }
          _r_()
        }.bind(this)), _r_()
      },
      save: function(e) {
        _i_("385b:d5800fcc"), e && e.preventDefault();
        var t = this.$form.get(0).action,
          n = this.$form.get(0).method,
          i = {
            analytics: this.$form.find("[name=analytics]").is(":checked") ? 0 : 1,
            marketing: this.$form.find("[name=marketing]").is(":checked") ? 0 : 1
          };
        this.cookieWarningVisible && r.ajax("/user_gave_consent", {
          type: "POST",
          data: "event_name=accepted_cookies"
        }), (i.analytics || i.marketing) && "gb" === B.env.ip_country && a.track("aAWbLTYUNTTJNLcMeDFbPCaZZOIEeUebWNPYSbC") && a.customGoal("aAWbLTYUNTTJNLcMeDFbPCaZZOIEeUebWNPYSbC", 4), r.ajax({
          url: t,
          data: i,
          type: n,
          success: function(e) {
            _i_("385b:8fe0cd6e"), !i.analytics && this.loadGoogleAnalytics(), !i.marketing && this.loadTealium(), this.modal ? (this.modal.close(), this.$el.closest(".cookie-warning-v2").hide()) : (this.$targetElement.hide(), this.$targetElement.closest(".cookie-warning-v2").hide()), _r_()
          }.bind(this)
        }), _r_()
      }
    }), _r_()
  });