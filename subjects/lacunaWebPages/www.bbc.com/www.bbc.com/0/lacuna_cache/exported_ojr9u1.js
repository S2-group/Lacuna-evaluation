
        "use strict";
        ! function() {
            window.__reverb = {}, window.__reverb.__reverbLoadedPromise = new Promise(function(e, n) {
                window.__reverb.__resolveReverbLoaded = e, window.__reverb.__rejectReverbLoaded = n
            }), window.__reverb.__reverbTimeout = setTimeout(function() {
                window.__reverb.__rejectReverbLoaded()
            }, 5e3);
            var n = function(r, d) {
                window.__reverb.__reverbLoadedPromise.then(function(e) {
                    if (r && r.detail) {
                        var n = r.detail.label,
                            t = r.detail.type,
                            i = r.detail.elem,
                            o = r.detail.originalEvent;
                        r.detail.isClick && (d = r.detail.isClick), e.userActionEvent(t, n, r.detail, i, o, d)
                    }
                }, function() {
                    console.log("Reverb failed to load. Event not sent")
                })
            };
            document.addEventListener("bbc-user-event", function(e) {
                n(e, !1)
            }), document.addEventListener("bbc-user-click", function(e) {
                n(e, !0)
            }), document.addEventListener("bbc-page-updated", function() {
                window.__reverb.__reverbLoadedPromise.then(function(e) {
                    e.initialise().then(function() {
                        return e.viewEvent()
                    })
                }, function() {
                    console.log("Reverb failed to load. Event not sent")
                })
            })
        }();
    