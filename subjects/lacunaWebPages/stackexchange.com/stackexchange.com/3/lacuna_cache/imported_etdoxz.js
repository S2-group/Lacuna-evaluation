var UniversalAuth = function() {
  var e = 1;
  return {
    "performAuth": function() {
      if (UniversalAuth.enabled()) {
        var t = $.cookie("uauth");
        null != t && ($.post("/users/login/universal/request", null, "json"), $.cookie("uauth", null, {
          "path": "/",
          "domain": document.domain
        }))
      }
    },
    "enabled": function() {
      return !0
    }
  }
}();