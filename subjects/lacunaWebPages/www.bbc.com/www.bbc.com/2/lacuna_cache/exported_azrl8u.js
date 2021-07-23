
        "use strict";
        window.__reverb.__reverbLoadedPromise.then(function(e) {
            return e.initialise().then(function() {
                return e.viewEvent()
            })
        }, function() {});
    