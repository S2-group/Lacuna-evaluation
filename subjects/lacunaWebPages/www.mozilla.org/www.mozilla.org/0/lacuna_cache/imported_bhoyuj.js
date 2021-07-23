"undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function() {
    "use strict";
    var e = {
      COOKIE_CODE_ID: "moz-stub-attribution-code",
      COOKIE_SIGNATURE_ID: "moz-stub-attribution-sig",
      withinAttributionRate: function() {
        return Math.random() < e.getAttributionRate()
      },
      getAttributionRate: function() {
        var t = $("html").attr("data-stub-attribution-rate");
        return isNaN(t) ? 0 : Math.min(Math.max(parseFloat(t), 0), 1)
      },
      hasCookie: function() {
        return Mozilla.Cookies.hasItem(e.COOKIE_CODE_ID) && Mozilla.Cookies.hasItem(e.COOKIE_SIGNATURE_ID)
      },
      setCookie: function(t) {
        if (t.attribution_code && t.attribution_sig) {
          var i = new Date;
          i.setTime(i.getTime() + 864e5);
          var o = i.toUTCString();
          Mozilla.Cookies.setItem(e.COOKIE_CODE_ID, t.attribution_code, o, "/"), Mozilla.Cookies.setItem(e.COOKIE_SIGNATURE_ID, t.attribution_sig, o, "/")
        }
      },
      getCookie: function() {
        return {
          attribution_code: Mozilla.Cookies.getItem(e.COOKIE_CODE_ID),
          attribution_sig: Mozilla.Cookies.getItem(e.COOKIE_SIGNATURE_ID)
        }
      },
      updateBouncerLinks: function(i) {
        i.attribution_code && i.attribution_sig && e.meetsRequirements() && $(".download-list .download-link, .download-platform-list .download-link").each(function() {
          var t;
          this.href && -1 === this.href.indexOf("/firefox/download/thanks/") && (!(t = $(this).data("downloadVersion")) || "win" !== t && "win64" !== t || (this.href = Mozilla.StubAttribution.appendToDownloadURL(this.href, i)))
        })
      },
      appendToDownloadURL: function(o, t) {
        return t.attribution_code && t.attribution_sig && $.each(t, function(t, i) {
          "attribution_code" !== t && "attribution_sig" !== t || (o += (-1 < o.indexOf("?") ? "&" : "?") + t + "=" + i)
        }), o
      },
      onRequestSuccess: function(t) {
        t.attribution_code && t.attribution_sig && (e.updateBouncerLinks(t), e.setCookie(t))
      },
      requestAuthentication: function(t) {
        var i = window.location.protocol + "//" + window.location.host + "/en-US/firefox/stub_attribution_code/";
        $.get(i, t).done(e.onRequestSuccess)
      },
      getAttributionData: function(t) {
        var i = (new window._SearchParams).utmParams(),
          o = void 0 !== t ? t : document.referrer;
        return {
          utm_source: i.utm_source,
          utm_medium: i.utm_medium,
          utm_campaign: i.utm_campaign,
          utm_content: i.utm_content,
          referrer: o
        }
      },
      isFirefoxNewScene2: function(t) {
        return -1 < (t = void 0 !== t ? t : window.location.href).indexOf("/firefox/download/thanks/")
      },
      meetsRequirements: function() {
        return "undefined" != typeof window.site && "undefined" != typeof Mozilla.Cookies && (!!Mozilla.Cookies.enabled() && ("windows" === window.site.platform && !Mozilla.dntEnabled()))
      },
      init: function() {
        var t = {};
        e.meetsRequirements() && (e.hasCookie() ? (t = e.getCookie(), e.updateBouncerLinks(t)) : e.isFirefoxNewScene2() || (t = e.getAttributionData()) && e.withinAttributionRate() && e.requestAuthentication(t))
      }
    };
    window.Mozilla.StubAttribution = e
  }(),
  function() {
    "use strict";
    Mozilla.StubAttribution.init()
  }();