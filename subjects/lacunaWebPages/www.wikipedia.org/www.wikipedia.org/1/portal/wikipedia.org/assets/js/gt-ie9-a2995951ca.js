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
! function() {
    "use strict";
    doWhenReady(function() {
        function e(e) {
            var t = 4;
            e.length > 3 ? t = 6 : 3 === e.length && (t = 4.5), document.getElementById("searchInput").style.paddingRight = 16 * t + "px"
        }

        function t() {
            var t = document.createElement("label");
            return t.setAttribute("for", "searchLanguage"), t.setAttribute("id", "jsLangLabel"), t.className = "js-langpicker-label", t.innerText = l.value, t.textContent = l.value, l.parentNode.parentNode.className = " styled-select js-enabled", e(l.value), l.parentNode.insertBefore(t, l), t
        }

        function n(t) {
            a.innerText = t, a.textContent = t, e(t)
        }
        var a, l = document.getElementById("searchLanguage");
        a = t(), addEvent(l, "change", function() {lacuna_lazy_load("portal/wikipedia.org/assets/js/gt-ie9-a2995951ca.js[838:872]", functionData => eval(functionData))})
    })
}();