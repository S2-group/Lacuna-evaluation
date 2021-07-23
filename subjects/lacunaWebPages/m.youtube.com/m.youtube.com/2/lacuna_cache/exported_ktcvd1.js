
        (function() {
            var playerApi = document.getElementById('player');
            var player;
            var activeConfig;
            var latestConfig;
            var autonavState;

            function fireEvent(target, name, detail) {}

            function createPlayer(config) {}

            function updatePlayerConfig(config) {}

            window.setAutonavStateInPlayer = function(newAutonavState) {
                autonavState = newAutonavState;
                if (player) {
                    player.setAutonavState(autonavState);
                }
            }

            window.getPlayer = function() {};

            window.loadPlayerConfig =
                function(newConfig, relatedVideoArgs, watchNextResponse,
                    unused_botguardData) {};
        })();
    