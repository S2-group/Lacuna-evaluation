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
"undefined" == typeof window.Mozilla && (window.Mozilla = {}),
  function() {
    "use strict";
    var e = {
      COOKIE_CODE_ID: "moz-stub-attribution-code",
      COOKIE_SIGNATURE_ID: "moz-stub-attribution-sig",
      withinAttributionRate: function() {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[256:319]", functionData => eval(functionData))},
      getAttributionRate: function() {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[358:499]", functionData => eval(functionData))},
      hasCookie: function() {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[529:645]", functionData => eval(functionData))},
      setCookie: function(t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[676:1010]", functionData => eval(functionData))},
      getCookie: function() {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[1040:1221]", functionData => eval(functionData))},
      updateBouncerLinks: function(i) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[1261:1695]", functionData => eval(functionData))},
      appendToDownloadURL: function(o, t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[1739:1967]", functionData => eval(functionData))},
      onRequestSuccess: function(t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[2005:2107]", functionData => eval(functionData))},
      requestAuthentication: function(t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[2150:2318]", functionData => eval(functionData))},
      getAttributionData: function(t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[2358:2674]", functionData => eval(functionData))},
      isFirefoxNewScene2: function(t) {lacuna_lazy_load("lacuna_cache/imported_2gjx8l.js[2714:2826]", functionData => eval(functionData))},
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