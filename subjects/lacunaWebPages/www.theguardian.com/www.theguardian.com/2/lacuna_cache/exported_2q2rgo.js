
        try {
            (function(isVeryModern, document, window) {
                if (isVeryModern) {
                    var decodeBase64 = function(str) {};
                    var cookieData = function(a) {
                        var d = [],
                            e = document.cookie.split(";");
                        a = RegExp("^\\s*" + a + "\x3d\\s*(.*?)\\s*$");
                        for (var b = 0; b < e.length; b++) {
                            var f = e[b].match(a);
                            f && d.push(f[1])
                        }
                        if (d.length > 0) return d[0];
                        return null
                    }("GU_U");
                    var userData = cookieData ? JSON.parse(decodeBase64(cookieData.split(".")[0])) : null;
                    if (userData) {
                        var displayName = decodeURIComponent(userData[2]);
                        window.guardian.config.user = {
                            id: userData[0],
                            displayName: displayName,
                            accountCreatedDate: userData[6],
                            emailVerified: userData[7],
                            rawResponse: cookieData
                        }
                    }
                }
            })(guardian.isEnhanced && "atob" in window, document, window)
        } catch (e) {};
        try {
            (function(document, window) {
                if (typeof window.getComputedStyle !== "function") return;
                var ad = document.createElement("div");
                ad.style.position = "absolute";
                ad.style.left = "0";
                ad.style.top = "0";
                ad.style.height = "10px";
                ad.style.zIndex = "-1";
                ad.innerHTML = "\x26nbsp;";
                ad.setAttribute("class", "ad_unit");
                window.requestAnimationFrame(function() {
                    document.body.appendChild(ad);
                    window.requestAnimationFrame(function() {
                        var adBlockers = window.guardian.adBlockers;
                        var adStyles = window.getComputedStyle(ad);
                        var displayProp = adStyles && adStyles.getPropertyValue("display");
                        var mozBindingProp = adStyles && adStyles.getPropertyValue("-moz-binding");
                        adBlockers.active = displayProp === "none" || mozBindingProp && mozBindingProp.indexOf("about:") !== -1;
                        runEachListener(adBlockers.onDetect);
                        adBlockers.onDetect = {
                            push: function() {}
                        };

                        function runEachListener(listeners) {
                            for (var i = 0; i < listeners.length; i++) try {
                                listeners[i](adBlockers.active)
                            } catch (e) {}
                        }
                    })
                })
            })(document, window)
        } catch (e) {};
        try {
            (function(isVeryModern, document, window) {
                var user = window.guardian.config.user;
                if (isVeryModern && user) window.requestAnimationFrame(function() {})
            })("classList" in document.documentElement, document, window)
        } catch (e) {};
        try {
            (function(document, window) {
                if (!window.__cmp) window.__cmp = function() {
                    var listen = window.attachEvent || window.addEventListener;
                    listen("message", function(event) {
                        window.__cmp.receiveMessage(event)
                    }, false);

                    function addLocatorFrame() {
                        if (!window.frames["__cmpLocator"])
                            if (document.body) {
                                var frame = document.createElement("iframe");
                                frame.style.display = "none";
                                frame.name = "__cmpLocator";
                                frame.setAttribute("aria-hidden", true);
                                document.body.appendChild(frame)
                            } else setTimeout(addLocatorFrame, 5)
                    }
                    addLocatorFrame();
                    var commandQueue = [];
                    var cmp = function(command, parameter, callback) {};
                    cmp.commandQueue = commandQueue;
                    cmp.receiveMessage = function(event) {};
                    cmp.config = {
                        storeConsentGlobally: false,
                        storePublisherData: false,
                        logging: false,
                        gdprApplies: true
                    };
                    return cmp
                }()
            })(document, window)
        } catch (e) {};
        try {
            (function(document, window) {
                function shouldServeLotame() {
                    try {
                        var geo = JSON.parse(window.localStorage.getItem("gu.geolocation")).value;
                        if (geo === "US" || geo === "CA" || geo === "AU" || geo === "NZ") return false;
                        return true
                    } catch (e) {}
                    return false
                }
                if (shouldServeLotame()) {
                    var script = document.createElement("script");
                    script.src = "https://tags.crwdcntrl.net/c/12666/cc.js";
                    document.body.appendChild(script)
                }
            })(document, window)
        } catch (e) {};
        (function(window, document) {
            function getCookieValue(name) {
                var nameEq = name + "\x3d",
                    cookies = document.cookie.split(";"),
                    value = null;
                cookies.forEach(function(cookie) {
                    while (cookie.charAt(0) === " ") cookie = cookie.substring(1, cookie.length);
                    if (cookie.indexOf(nameEq) === 0) value = cookie.substring(nameEq.length, cookie.length)
                });
                return value
            }
            window.guardian.config.ophan.browserId = getCookieValue("bwid")
        })(window, document);
    