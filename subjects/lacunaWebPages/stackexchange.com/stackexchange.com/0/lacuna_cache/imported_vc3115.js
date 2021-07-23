var UniversalAuth = function() {
  var e = 1;
  return {
    "performAuth": function() {
      if (UniversalAuth.enabled()) {
        var t = $.cookie("uauth");
        null != t && ($.post("/users/login/universal/request", function(t) {
          $.each(t, function(t, a) {
            var n = "//" + a.Host + "/users/login/universal.gif?authToken=" + encodeURIComponent(a.Token) + "&nonce=" + encodeURIComponent(a.Nonce);
            $(document).ready(function() {
              var t = $("<img/>").attr({
                "style": "display:none",
                "src": n,
                "crossOrigin": "use-credentials"
              });
              t.one("load", function() {
                var a = t[0].width,
                  n = t[0].height;
                if (2 == a && 2 == n && e > 0) {
                  e--;
                  var r = $.cookie("uauth");
                  if (!r) {
                    var i = new Date,
                      o = new Date(i.getTime() + 3e5);
                    $.cookie("uauth", "true", {
                      "path": "/",
                      "domain": document.domain,
                      "expires": o
                    }), setTimeout(function() {
                      UniversalAuth.performAuth()
                    }, 10)
                  }
                }
              }), $("#footer").append(t)
            })
          })
        }, "json"), $.cookie("uauth", null, {
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