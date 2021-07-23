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
            window['pis'] = 'downloading';
            var playerScriptReady = false;
            var playerScript = document.createElement('script');
            var playerStyles = document.createElement('link');

            function detectAndLogAnyPlayerScriptErrors() {
                if (window.yt && window.yt.player) {
                    return;
                }
                var xhr = new XMLHttpRequest();
                xhr.open('GET', playerScript.src);
                xhr.onreadystatechange = function detectPlayerScriptErrors() {lacuna_lazy_load("lacuna_cache/exported_yid1j0.js[572:749]", functionData => eval(functionData))};
                xhr.send();
            }

            function fetchResources() {
                playerScript.addEventListener('load', function() {
                    detectAndLogAnyPlayerScriptErrors();
                    playerScriptReady = true;
                    window['pis'] = 'uninitialized';
                });
                playerScript.src = "/yts/jsbin/player-plasma-ias-phone-en_US-vflz_7J_S/base.js";

                playerStyles.rel = 'stylesheet';
                playerStyles.href = "/yts/cssbin/mobile-polymer-player-ias-mweb-2x-vflbw05Re.css";

                document.head.appendChild(playerScript);
                document.head.appendChild(playerStyles);
            }

            function delayedFetch() {
                window.removeEventListener('click', delayedFetch);
                window.removeEventListener('load', delayedFetch);

                requestAnimationFrame(function() {
                    setTimeout(fetchResources);
                });
            }

            window.addEventListener('click', delayedFetch);
            window.addEventListener('load', delayedFetch);

            window.whenPlayerReady = function(cb) {lacuna_lazy_load("lacuna_cache/exported_yid1j0.js[1929:2248]", functionData => eval(functionData))};
        })();
    