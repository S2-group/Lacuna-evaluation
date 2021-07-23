
                        (function() {
                            

                            
                            var b = function() {
                                (function() {
                                    (function(j, n) {
                                        j.sfLogErrors = j.sfLogErrors || false;
                                        var p = p || null;

                                        function d() {
                                            return j.innerHeight || n.documentElement.clientHeight;
                                        }

                                        function g() {
                                            return j.innerWidth || n.documentElement.clientWidth;
                                        }

                                        function e(u, s, t) {
                                            if (u > 0) {
                                                return (t > u);
                                            } else {
                                                return (s > 0);
                                            }
                                        }
                                        var f = null;
                                        throttle = null;

                                        function l(v, x, w, s) {
                                            try {
                                                var u = n.getElementById(v).getBoundingClientRect();
                                                if (e(u.top, u.bottom, d()) && e(u.left, u.right, g())) {
                                                    if (typeof uet == "function") {
                                                        uet("bb", "adplacements:viewablelatency:" + x, {
                                                            wb: 1
                                                        });
                                                        if (w) {
                                                            uet("bb", "adplacements:viewablelatency:" + w, {
                                                                wb: 1
                                                            });
                                                        }
                                                    }
                                                    if (typeof uex == "function" && j.ue && typeof ue.count == "function") {
                                                        if (j.apeViewableLatencyTrackers[s].loaded) {
                                                            uex("ld", "adplacements:viewablelatency:" + x, {
                                                                wb: 1
                                                            });
                                                            if (w) {
                                                                uex("ld", "adplacements:viewablelatency:" + w, {
                                                                    wb: 1
                                                                });
                                                            }
                                                            ue.count("adplacements:htmlviewed:loaded:" + x, 1);
                                                            if (w) {
                                                                ue.count("adplacements:htmlviewed:loaded:" + w, 1);
                                                            }
                                                        }
                                                        ue.count("adplacements:htmlviewed:" + x, 1);
                                                        if (w) {
                                                            ue.count("adplacements:htmlviewed:" + w, 1);
                                                        }
                                                    }
                                                    j.apeViewableLatencyTrackers[s].viewed = true;
                                                    if (j.apeViewableLatencyTrackers[s].tracker) {
                                                        c("scroll", j.apeViewableLatencyTrackers[s].tracker);
                                                        c("resize", j.apeViewableLatencyTrackers[s].tracker);
                                                    }
                                                }
                                            } catch (t) {
                                                j.apeViewableLatencyTrackers[s].valid = false;
                                            }
                                        }
                                        try {
                                            j.apeViewableLatencyTrackers = j.apeViewableLatencyTrackers || {};
                                            var r = "ape_gateway_atf_gateway-mWeb_placement";
                                            var q = "gateway_atf_gateway-mWeb".replace(/\_/g, ":");
                                            var h = "84ed58f2-f73c-46d7-9cab-c7ce7f40aa7f";
                                            var i = "3ce7966f312144299377fbfadf56ab30";
                                            j.apeViewableLatencyTrackers[i] = j.apeViewableLatencyTrackers[i] || {};
                                            j.apeViewableLatencyTrackers[i].valid = true;
                                            l(r, q, h, i);
                                            if (j.apeViewableLatencyTrackers[i].valid && !j.apeViewableLatencyTrackers[i].viewed) {
                                                j.apeViewableLatencyTrackers[i].tracker = throttle(null, 20);
                                                a("scroll", j.apeViewableLatencyTrackers[i].tracker);
                                                a("resize", j.apeViewableLatencyTrackers[i].tracker);
                                            }
                                        } catch (k) {
                                            if (j.apeViewableLatencyTrackers && j.apeViewableLatencyTrackers["3ce7966f312144299377fbfadf56ab30"]) {
                                                j.apeViewableLatencyTrackers["3ce7966f312144299377fbfadf56ab30"].valid = false;
                                            }
                                            p("Error initializing viewable latency instrumentation", k);
                                        }
                                        try {
                                            j.atf = {};
                                            j.atf.adStartTime = (new Date()).getTime();
                                            var m = j.DAsf || j.MAsf || null;
                                            if (m) {
                                                m.loadAds();
                                            } else {
                                                var o = n.createElement("script");
                                                o.type = "text/javascript";
                                                o.async = true;
                                                o.charset = "utf-8";
                                                o.src = "https://images-eu.ssl-images-amazon.com/images/G/31/ape/sf/mobile/MAsf-1.50.a6f2e15._V451180727_.js?csm_attribution=APE-SafeFrame";
                                                o.onerror = null;
                                                o.setAttribute("crossorigin", "anonymous");
                                                (n.getElementsByTagName("head")[0] || n.getElementsByTagName("body")[0]).appendChild(o);
                                            }
                                        } catch (k) {
                                            p("Error appending MAsf library", k);
                                        }
                                    }(window, document));
                                })();
                            };
                            b();
                        })();
                    