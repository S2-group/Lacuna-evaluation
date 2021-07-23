
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
                xhr.onreadystatechange = function detectPlayerScriptErrors() {};
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

            window.whenPlayerReady = function(cb) {};
        })();
    