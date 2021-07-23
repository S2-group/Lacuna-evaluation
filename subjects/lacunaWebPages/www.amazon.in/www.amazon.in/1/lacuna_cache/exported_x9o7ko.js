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

                            var hmenu = document.getElementById("nav-hamburger-menu");
                            hmenu.setAttribute("href", "javascript: void(0)");
                            window.navHamburgerMetricLogger = function() {lacuna_lazy_load("lacuna_cache/exported_x9o7ko.js[240:561]", functionData => eval(functionData))};
                            hmenu.addEventListener("click", window.navHamburgerMetricLogger);
                        