
        (function() {
            var playerApi = document.getElementById('player');
            var player;
            var activeConfig;
            var latestConfig;
            var autonavState;

            

            

            

            window.setAutonavStateInPlayer = function(newAutonavState) {
                autonavState = newAutonavState;
                if (player) {
                    player.setAutonavState(autonavState);
                }
            }

            window.getPlayer = null;

            window.loadPlayerConfig =
                null;
        })();
    