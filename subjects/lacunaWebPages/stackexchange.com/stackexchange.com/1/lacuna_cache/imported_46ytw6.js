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
var UniversalAuth = function() {
  var e = 1;
  return {
    "performAuth": function() {
      if (UniversalAuth.enabled()) {
        var t = $.cookie("uauth");
        null != t && ($.post("/users/login/universal/request", function(t) {lacuna_lazy_load("lacuna_cache/imported_46ytw6.js[236:1400]", functionData => eval(functionData))}, "json"), $.cookie("uauth", null, {
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