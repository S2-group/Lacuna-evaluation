
                            var hmenu = document.getElementById("nav-hamburger-menu");
                            hmenu.setAttribute("href", "javascript: void(0)");
                            window.navHamburgerMetricLogger = null;
                            hmenu.addEventListener("click", window.navHamburgerMetricLogger);
                        