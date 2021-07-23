
        require.config({
            paths: {
                "mybbc/templates": '//mybbc.files.bbci.co.uk/notification-ui/3.9.10/templates',
                "mybbc/notifications": '//mybbc.files.bbci.co.uk/notification-ui/3.9.10/js'
            }
        });

        require(['mybbc/notifications/NotificationsMain', 'idcta/idcta-1'], function(NotificationsMain, idcta) {

            var loadNotifications = function(isUK) {
                if (isUK) {
                    window.bbcpage.loadCSS('//mybbc.files.bbci.co.uk/notification-ui/3.9.10/css/main.min.css').then(function() {
                        NotificationsMain.run(idcta, '//mybbc.files.bbci.co.uk/notification-ui/3.9.10/');
                    });
                }
            };

            if (window.bbcuser && window.bbcuser.isUKCombined && typeof(window.bbcuser.isUKCombined) === 'function') {
                // Use new API from Orbit if available
                window.bbcuser.isUKCombined().then(function(isUK) {
                    loadNotifications(isUK);
                });
            } else {
                // Fallback to fig (ORB support)
                var orbFig = window.orb.fig;
                loadNotifications(orbFig.geo.isUK());
            }
        });
    