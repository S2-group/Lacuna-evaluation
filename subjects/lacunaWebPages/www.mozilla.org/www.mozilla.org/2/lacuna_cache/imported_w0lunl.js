"undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function() {
    "use strict";
    var e = {
      COOKIE_CODE_ID: "moz-stub-attribution-code",
      COOKIE_SIGNATURE_ID: "moz-stub-attribution-sig",
      withinAttributionRate: function() {},
      getAttributionRate: function() {},
      hasCookie: function() {},
      setCookie: function(t) {},
      getCookie: function() {},
      updateBouncerLinks: function(i) {},
      appendToDownloadURL: function(o, t) {},
      onRequestSuccess: function(t) {},
      requestAuthentication: function(t) {},
      getAttributionData: function(t) {},
      isFirefoxNewScene2: function(t) {},
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