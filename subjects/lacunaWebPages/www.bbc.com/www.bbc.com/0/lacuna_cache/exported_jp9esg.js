
        "use strict";
        window.__reverb.__reverbLoadedPromise.then(function(e) {
            return e.initialise().then(function() {
                return e.viewEvent()
            })
        }, function() {
            console.log("Failed to load reverb. No event sent")
        });
    