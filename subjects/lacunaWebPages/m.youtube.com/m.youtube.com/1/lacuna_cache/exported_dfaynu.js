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

        (function() {
            var playerApi = document.getElementById('player');
            var player;
            var activeConfig;
            var latestConfig;
            var autonavState;

            function fireEvent(target, name, detail) {lacuna_lazy_load("lacuna_cache/exported_dfaynu.js[254:421]", functionData => eval(functionData))}

            function createPlayer(config) {lacuna_lazy_load("lacuna_cache/exported_dfaynu.js[465:2960]", functionData => eval(functionData))}

            function updatePlayerConfig(config) {lacuna_lazy_load("lacuna_cache/exported_dfaynu.js[3010:3589]", functionData => eval(functionData))}

            window.setAutonavStateInPlayer = function(newAutonavState) {
                autonavState = newAutonavState;
                if (player) {
                    player.setAutonavState(autonavState);
                }
            }

            window.getPlayer = function() {lacuna_lazy_load("lacuna_cache/exported_dfaynu.js[3875:3921]", functionData => eval(functionData))};

            window.loadPlayerConfig =
                function(newConfig, relatedVideoArgs, watchNextResponse,
                    unused_botguardData) {lacuna_lazy_load("lacuna_cache/exported_dfaynu.js[4076:4891]", functionData => eval(functionData))};
        })();
    