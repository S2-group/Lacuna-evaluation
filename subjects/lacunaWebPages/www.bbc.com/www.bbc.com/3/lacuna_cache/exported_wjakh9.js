
        "use strict";
        ! function() {
            window.__reverb = {}, window.__reverb.__reverbLoadedPromise = new Promise(function(e, n) {
                window.__reverb.__resolveReverbLoaded = e, window.__reverb.__rejectReverbLoaded = n
            }), window.__reverb.__reverbTimeout = setTimeout(null, 5e3);
            var n = null;
            document.addEventListener("bbc-user-event", null), document.addEventListener("bbc-user-click", null), document.addEventListener("bbc-page-updated", null)
        }();
    