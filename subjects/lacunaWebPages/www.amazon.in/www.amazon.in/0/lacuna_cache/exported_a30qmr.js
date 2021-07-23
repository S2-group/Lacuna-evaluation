
                            var hmenu = document.getElementById("nav-hamburger-menu");
                            hmenu.setAttribute("href", "javascript: void(0)");
                            window.navHamburgerMetricLogger = function() {
                                if (window.ue && window.ue.count) {
                                    var metricName = "Navm:Hmenu:IconClickActionPending";
                                    window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
                                }
                            };
                            hmenu.addEventListener("click", window.navHamburgerMetricLogger);
                        