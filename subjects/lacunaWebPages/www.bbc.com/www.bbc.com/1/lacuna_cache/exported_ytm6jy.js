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

        require.config({
            paths: {
                "mybbc/templates": '//mybbc.files.bbci.co.uk/notification-ui/3.9.10/templates',
                "mybbc/notifications": '//mybbc.files.bbci.co.uk/notification-ui/3.9.10/js'
            }
        });

        require(['mybbc/notifications/NotificationsMain', 'idcta/idcta-1'], function(NotificationsMain, idcta) {

            var loadNotifications = function(isUK) {lacuna_lazy_load("lacuna_cache/exported_ytm6jy.js[427:747]", functionData => eval(functionData))};

            if (window.bbcuser && window.bbcuser.isUKCombined && typeof(window.bbcuser.isUKCombined) === 'function') {
                // Use new API from Orbit if available
                window.bbcuser.isUKCombined().then(function(isUK) {lacuna_lazy_load("lacuna_cache/exported_ytm6jy.js[990:1054]", functionData => eval(functionData))});
            } else {
                // Fallback to fig (ORB support)
                var orbFig = window.orb.fig;
                loadNotifications(orbFig.geo.isUK());
            }
        });
    