(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        473: function(n, e, t) {
            "use strict";
            t.r(e);
            var o = t(28),
                r = t(52);

            function i() {}

            function c(n) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    try {
                        return Promise.resolve(n.apply(this, e))
                    } catch (n) {
                        return Promise.reject(n)
                    }
                }
            }

            function s(n, e, t) {
                return t ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n)
            }
            var u = c(function() {
                    return s(Object(r.a)("https://ak.sail-horizon.com/spm/spm.v1.min.js"), function() {
                        window.Sailthru && window.Sailthru.init && window.Sailthru.init({
                            customerId: "prod" === window.BZFD.Config.env ? "ccaf2e718aa7ed087167fca028bca7d1" : "baf0cdb4355c5f1f77236b0103c7a258"
                        })
                    })
                }),
                a = c(function() {
                    return s(Object(r.a)("https://secure.quantserve.com/quant.js"), function() {
                        window._qevents && window._qevents.push({
                            qacct: "p-3aud4J6uA4Z6Y"
                        })
                    })
                }),
                w = c(function() {
                    window.pintrk = window.pintrk || function() {
                        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                        window.pintrk.queue.push(e)
                    }, window.pintrk.queue = [], window.pintrk.version = "3.0", window.pintrk("load", "2615790681679");
                    var n = document.location.pathname.slice(1);
                    return window.pintrk("page", {
                            page_name: n || "Home",
                            page_category: n
                        }),
                        function(n, e) {
                            if (!e) return n && n.then ? n.then(i) : Promise.resolve()
                        }(Object(r.a)("https://s.pinimg.com/ct/core.js"))
                }),
                p = c(function() {
                    return s(Object(r.a)("https://sb.scorecardresearch.com/beacon.js"), function() {
                        window.COMSCORE && window.COMSCORE.beacon({
                            c1: 2,
                            c2: 6768151,
                            c3: "buzzfeed.com",
                            c4: "",
                            c5: "",
                            c6: "",
                            c15: ""
                        })
                    })
                });
            c(function() {
                for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                return s(o.a.getVendorConsents(), function(n) {
                    var t = n.success,
                        o = n.data;
                    (void 0 === o.purposeConsents[1] && void 0 === o.purposeConsents[5] || t && o.purposeConsents[1] && o.purposeConsents[5]) && e.forEach(function(n) {
                        return n()
                    })
                })
            })(p, w, a, u)
        }
    }
]);
//# sourceMappingURL=beacons-external.558f769bc7b20137abe5.js.map