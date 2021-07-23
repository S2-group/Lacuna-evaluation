(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        0: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return o
            }), n.d(e, "d", function() {
                return s
            }), n.d(e, "e", function() {
                return c
            });
            var a = n(10),
                i = n(36),
                r = n.n(i);

            function o(t) {
                var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).properties,
                    n = ["transitionend", "webkitTransitionEnd", "mozTransitionEnd", "oTransitionEnd"],
                    a = {},
                    i = [];

                function r(t) {
                    "any" in a ? a.any(t) : t.propertyName in a && a[t.propertyName](t)
                }(void 0 === e ? ["any"] : e).forEach(function(t) {
                    var e, n = new Promise(function(t) {
                        return e = t
                    });
                    i.push(n), a[t] = e
                }), n.forEach(function(e) {
                    return t.addEventListener(e, r)
                });
                var o = Promise.all(i);
                return o.unsubscribe = function() {
                    n.forEach(function(e) {
                        return t.removeEventListener(e, r)
                    })
                }, o.then(o.unsubscribe), o
            }

            function s(t, e) {
                var n = t.querySelector("script");
                return e ? n : n ? JSON.parse(n.text) : null
            }

            function c(t, e, n) {
                var i = t.getBoundingClientRect(),
                    r = a.a.getViewportHeight();
                e = e || 0, n = n || 0;
                var o = 0 - e,
                    s = r + e,
                    c = {
                        top: i.top - n,
                        bottom: i.bottom - n
                    };
                return {
                    isHidden: function() {
                        return !t.offsetParent
                    },
                    isWithinViewport: function() {
                        return c.top >= 0 && c.bottom <= r
                    },
                    isWithinLookahead: function() {
                        return c.top >= o && c.bottom <= s
                    },
                    isPartiallyInViewport: function() {
                        return c.top >= 0 && c.top <= r || c.bottom > 0 && c.bottom < r
                    },
                    isPartiallyInLookahead: function() {
                        return c.top > 0 ? c.top < e + r : c.bottom > 0 || Math.abs(c.bottom) < e
                    },
                    isNearBottom: function() {
                        return parseInt(i.bottom, 10) <= e
                    }
                }
            }
            n.d(e, "a", function() {
                    return r.a
                }),
                function() {
                    if (!(document.createElementNS("http://www.w3.org/2000/svg", "g").classList instanceof DOMTokenList)) try {
                        Object.defineProperty(SVGElement.prototype, "classList", Object.getOwnPropertyDescriptor(HTMLElement.prototype, "classList") || Object.getOwnPropertyDescriptor(Element.prototype, "classList"))
                    } catch (t) {}
                }(),
                function() {
                    try {
                        var t = document.createElement("div");
                        if (t.classList.add("foo", "bar"), t.classList.contains("bar")) return;
                        var e = DOMTokenList.prototype.add,
                            n = DOMTokenList.prototype.remove;
                        DOMTokenList.prototype.add = function() {
                            for (var t = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                            a.forEach(function(n) {
                                return e.call(t, n)
                            })
                        }, DOMTokenList.prototype.remove = function() {
                            for (var t = this, e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                            a.forEach(function(e) {
                                return n.call(t, e)
                            })
                        }
                    } catch (t) {}
                }(), NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach), e.b = {
                    stringToHTML: function(t) {
                        var e = document.createElement("div");
                        return e.innerHTML = t, e.childNodes
                    },
                    arrayFromNodeList: function(t) {
                        return [].slice.call(t)
                    },
                    withNodeList: function(t, e) {
                        return "string" == typeof t && (t = this.stringToHTML(t)), t instanceof HTMLElement && (t = [t]), (t instanceof NodeList || Array.isArray(t)) && Array.prototype.slice.call(t).forEach(function(t) {
                            return e(t)
                        }), this
                    },
                    append: function(t, e) {
                        void 0 === e && (e = t, t = document.body);
                        return this.withNodeList(e, function(e) {
                            return t.appendChild(e)
                        })
                    },
                    prepend: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        void 0 === e && (e = t, t = document.body);
                        var a = t.children[n];
                        return this.withNodeList(e, function(e) {
                            return t.insertBefore(e, a)
                        })
                    },
                    remove: function() {
                        for (var t = [], e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                        return n.forEach(function(e) {
                            e instanceof Element && e.parentNode && t.push(e.parentNode.removeChild(e))
                        }), t
                    },
                    find: function(t, e) {
                        return Array.prototype.slice.call(t.querySelectorAll(e))
                    },
                    findOne: function(t, e) {
                        return t.querySelector(e)
                    },
                    closest: function(t, e) {
                        return r()(t, e, !0)
                    },
                    addClass: function(t, e) {
                        Array.isArray(t) || (t = [t]);
                        var n = e.split(" ");
                        t.forEach(function(t) {
                            return n.forEach(function(e) {
                                return t.classList.add(e)
                            })
                        })
                    },
                    removeClass: function(t, e) {
                        Array.isArray(t) || (t = [t]);
                        var n = e.split(" ");
                        t.forEach(function(t) {
                            return n.forEach(function(e) {
                                return t.classList.remove(e)
                            })
                        })
                    },
                    hasClass: function(t, e) {
                        return Array.isArray(t) || (t = [t]), t.some(function(t) {
                            return t.classList.contains(e)
                        })
                    },
                    toggleClass: function(t, e) {
                        Array.isArray(t) || (t = [t]), "string" == typeof t && (t = this.find(t)), e.split(" ").forEach(function(e) {
                            return t.forEach(function(t) {
                                return t.classList.toggle(e)
                            })
                        })
                    },
                    matches: function() {
                        var t = Element.prototype,
                            e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || function(t) {
                                return [].indexOf.call(document.querySelectorAll(t), this) > -1
                            };
                        return function(t, n) {
                            return e.call(t, n)
                        }
                    }(),
                    getViewPosition: c,
                    on: function(t, e, n, a) {
                        "function" == typeof n && void 0 === a && (a = n, n = null), e.split(" ").forEach(function(e) {
                            return t.addEventListener(e, a)
                        })
                    },
                    one: function(t, e, n, a) {
                        var i = this;
                        "function" == typeof n && (a = n, n = null);
                        var r = function n(r) {
                            a.call(this, r), i.off(t, e, n)
                        };
                        return i.on(t, e, r), r
                    },
                    off: function(t, e, n) {
                        e.split(" ").forEach(function(e) {
                            return t.removeEventListener(e, n)
                        })
                    },
                    trigger: function(t, e) {
                        document.createEvent && e.split(" ").forEach(function(e) {
                            var n = document.createEvent("Event");
                            n.initEvent && (n.initEvent(e, !1, !0), t.dispatchEvent(n))
                        })
                    },
                    hide: function(t, e) {
                        var n = e ? this.find(t, e) : t;
                        return this.addClass(n, "js-hidden"), this
                    },
                    show: function(t, e) {
                        var n = this,
                            a = e ? this.find(t, e) : t;
                        return this.hasClass(a, "js-hidden") ? this.removeClass(a, "js-hidden") : (Array.isArray(a) || (a = [a]), a.forEach(function(t) {
                            return n.setStyle(t, {
                                display: "block"
                            })
                        })), this
                    },
                    getData: function(t, e) {
                        return "string" == typeof t && (t = this.stringToHTML(t)[0]), t.getAttribute("data-".concat(e))
                    },
                    setData: function(t, e, n) {
                        return "string" == typeof t && (t = this.stringToHTML(t)[0]), t.setAttribute("data-".concat(e), n), !0
                    },
                    getStyle: function(t, e) {
                        return t.style[e]
                    },
                    setStyle: function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
                        return this
                    },
                    getAttr: function(t, e) {
                        return t.getAttribute(e)
                    },
                    setAttr: function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && t.setAttribute(n, e[n]);
                        return this
                    },
                    removeAttr: function(t, e) {
                        return t.removeAttribute(e), this
                    },
                    hasAttr: function(t, e) {
                        return t.hasAttribute(e)
                    },
                    getText: function(t, e) {
                        var n = e ? this.findOne(t, e) : t;
                        return n ? n.textContent : ""
                    },
                    setText: function(t, e, n) {
                        var a = n ? this.findOne(t, n) : t;
                        return a && (a.textContent = e), this
                    },
                    setHTML: function(t, e, n) {
                        var a = n ? this.findOne(t, n) : t;
                        return a && (a.innerHTML = e), this
                    },
                    parent: function(t, e) {
                        return r()(t, e)
                    },
                    getModuleConfig: s,
                    createElement: function(t, e) {
                        var n = document.createElement(t);
                        return this.setAttr(n, e), n
                    },
                    scrollIntoView: function(t, e) {
                        var n = this;
                        e ? setTimeout(function() {
                            n.scrollIntoView(t)
                        }, e) : t.scrollIntoView ? t.scrollIntoView() : window.scrollTo(0, t.offsetTop)
                    },
                    offset: function(t, e) {
                        var n = e ? this.findOne(t, e) : t;
                        return n ? {
                            top: n.offsetTop,
                            left: n.offsetLeft
                        } : {}
                    },
                    size: function(t) {
                        return {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    },
                    detectTransitionEnd: o
                }
        },
        10: function(t, e, n) {
            "use strict";
            var a = document.documentElement,
                i = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                r = function() {
                    try {
                        return localStorage.setItem("ls_test", !0), localStorage.removeItem("ls_test"), !0
                    } catch (t) {
                        return !1
                    }
                }();
            i || a.classList.add("no-svg"), (navigator.userAgent.match(/Pinterest/i) || document.referrer.match(/pinterest.com/i)) && a.classList.add("pinterest"), e.a = {
                hasTouch: function() {
                    var t = "ontouchstart" in window;
                    return t && a.classList.add("has-touch"), t
                }(),
                os: navigator.userAgent.match(/android/i) ? (a.classList.add("is-android"), "android") : navigator.userAgent.match(/iphone|ipad|ipod/i) ? (a.classList.add("is-ios"), "ios") : "",
                referrer: function() {
                    var t = document.referrer,
                        e = window.location.search,
                        n = navigator.userAgent.match(/fban|twitter|pinterest/i),
                        a = n ? n[0] : "";
                    return e.match("referrer=pinterest") || t.match("pinterest") || "pinterest" === a ? "pinterest" : e.match("referrer=twitter") || t.match("t.co") || "twitter" === a ? "tweet" : e.match("referrer=facebook") || t.match("m.facebook") || "fban" === a ? "facebook" : ""
                }(),
                supportsLocalStorage: r,
                isVideoSupported: function() {
                    return "android" === this.os
                },
                autoplaysVideo: function() {
                    return !1
                },
                getViewportHeight: function() {
                    return window.innerHeight || a.clientHeight
                },
                getViewportWidth: function() {
                    return window.innerWidth || a.clientWidth
                }
            }
        },
        11: function(t, e, n) {
            "use strict";
            n(21);
            var a = n(52);

            function i(t) {
                var e = {
                    called: !1,
                    value: void 0
                };
                return function() {
                    return e.called || (e.called = !0, e.value = t()), e.value
                }
            }
            var r = n(29),
                o = function(t) {
                    var e = t.env;
                    return new r.a({
                        namespace: "bf-xdomain-tracking",
                        cookieName: "bf-xdomain-session-uuid",
                        env: e
                    }).get().then(function(t) {
                        return t = t || ""
                    }).catch(function(t) {
                        console.log("Error getting session UUID: ".concat(t))
                    })
                },
                s = n(35),
                c = function() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(t) {
                        return (t ^ function() {
                            try {
                                return crypto.getRandomValues(new Uint8Array(1))[0]
                            } catch (t) {
                                return 255 * Math.random()
                            }
                        }() & 15 >> t / 4).toString(16)
                    })
                };
            n(38), n(15), n(72);

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function l(t) {
                return t instanceof p && 1 & t.s
            }

            function p() {}

            function f(t, e, n) {
                if (!t.s) {
                    if (n instanceof p) {
                        if (!n.s) return void(n.o = f.bind(null, t, e));
                        1 & e && (e = n.s), n = n.v
                    }
                    if (n && n.then) return void n.then(f.bind(null, t, e), f.bind(null, t, 2));
                    t.s = e, t.v = n;
                    var a = t.o;
                    a && a(t)
                }
            }

            function h(t, e, n) {
                return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t)
            }
            p.prototype.then = function(t, e) {
                var n = new p,
                    a = this.s;
                if (a) {
                    var i = 1 & a ? t : e;
                    if (i) {
                        try {
                            f(n, 1, i(this.v))
                        } catch (t) {
                            f(n, 2, t)
                        }
                        return n
                    }
                    return this
                }
                return this.o = function(a) {
                    try {
                        var i = a.v;
                        1 & a.s ? f(n, 1, t ? t(i) : i) : e ? f(n, 1, e(i)) : f(n, 2, i)
                    } catch (t) {
                        f(n, 2, t)
                    }
                }, n
            };
            var g = function(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        try {
                            return Promise.resolve(t.apply(this, e))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }
                }(function(t) {
                    var e = t.context,
                        n = t.layers,
                        a = void 0 === n ? [] : n,
                        i = {};
                    return function(t, e) {
                        return t && t.then ? t.then(e) : e(t)
                    }(function(t, e, n) {
                        var a, i, r = -1;
                        return function o(s) {
                            try {
                                for (; ++r < t.length && (!n || !n());)
                                    if ((s = e(r)) && s.then) {
                                        if (!l(s)) return void s.then(o, i || (i = f.bind(null, a = new p, 2)));
                                        s = s.v
                                    }
                                a ? f(a, 1, s) : a = s
                            } catch (t) {
                                f(a || (a = new Pact), 2, t)
                            }
                        }(), a
                    }(a, function(t) {
                        var n = a[t];
                        return function(t, e) {
                            var n = t();
                            return n && n.then ? n.then(e) : e(n)
                        }(function() {
                            if ("function" == typeof n) return h(n(e()), function(t) {
                                n = t
                            })
                        }, function() {
                            i = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                                    }))), a.forEach(function(e) {
                                        d(t, e, n[e])
                                    })
                                }
                                return t
                            }({}, i, n)
                        })
                    }), function() {
                        return i
                    })
                }),
                m = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return function() {
                        return t.push.apply(t, arguments), t
                    }
                },
                v = function(t) {
                    var e = t.layers,
                        n = t.broadcast,
                        a = t.context,
                        i = void 0 === a ? function() {} : a;
                    return function() {
                        for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                        return h(g({
                            context: i,
                            layers: [].concat(u(e), a)
                        }), n)
                    }
                };
            var b = new Map;
            new IntersectionObserver(function(t, e) {
                t.forEach(function(t) {
                    var n = t.isIntersecting,
                        a = t.target;
                    n && b.has(a) && (b.get(a).call(null), e.unobserve(a))
                })
            }, {
                threshold: .5
            });

            function y(t) {
                return !!(t ? t.toLowerCase() : navigator.userAgent.toLowerCase()).match(/gsa/)
            }
            n.d(e, "g", function() {
                return a.a
            }), n.d(e, "h", function() {
                return i
            }), n.d(e, "d", function() {
                return o
            }), n.d(e, "e", function() {
                return s.a
            }), n.d(e, "i", function() {
                return c
            }), n.d(e, "a", function() {
                return r.a
            }), n.d(e, "b", function() {
                return v
            }), n.d(e, "c", function() {
                return m
            }), n.d(e, "f", function() {
                return y
            })
        },
        115: function(t, e) {
            var n, a, i = t.exports = {};

            function r() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : r
                } catch (t) {
                    n = r
                }
                try {
                    a = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    a = o
                }
            }();
            var c, u = [],
                d = !1,
                l = -1;

            function p() {
                d && c && (d = !1, c.length ? u = c.concat(u) : l = -1, u.length && f())
            }

            function f() {
                if (!d) {
                    var t = s(p);
                    d = !0;
                    for (var e = u.length; e;) {
                        for (c = u, u = []; ++l < e;) c && c[l].run();
                        l = -1, e = u.length
                    }
                    c = null, d = !1,
                        function(t) {
                            if (a === clearTimeout) return clearTimeout(t);
                            if ((a === o || !a) && clearTimeout) return a = clearTimeout, clearTimeout(t);
                            try {
                                a(t)
                            } catch (e) {
                                try {
                                    return a.call(null, t)
                                } catch (e) {
                                    return a.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function g() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new h(t, e)), 1 !== u.length || d || s(f)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        12: function(t, e, n) {
            "use strict";

            function a(t, e) {
                var n = t.match(e);
                return n && n.length ? n[0] : null
            }

            function i() {
                return "prod" === window.BZFD.Config.env ? "buzzfeed.com" : window.location.hostname
            }
            e.a = {
                getBuzzfeedSubdomainOrWildcard: function(t) {
                    var e = a(t, "(dev|stage|www).(buzzfeed|buzzfeednews).(com|io)$");
                    return e || a(t, ".?[a-z]+.[a-z]+$")
                },
                get: function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = "".concat(t, "="), a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                        for (var r = a[i];
                            " " === r.charAt(0);) r = r.substring(1, r.length);
                        if (0 === r.indexOf(n)) return r.substring(n.length, r.length)
                    }
                    return e
                },
                set: function(t) {
                    var e = t.name,
                        n = t.value,
                        a = t.days,
                        r = t.domain;
                    r = r || i();
                    var o = "";
                    if (a) {
                        var s = new Date;
                        s.setTime(s.getTime() + 24 * a * 60 * 60 * 1e3), o = "; expires=".concat(s.toGMTString())
                    }
                    return document.cookie = "".concat(e, "=").concat(n).concat(o, "; path=/; domain=").concat(r)
                },
                remove: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                    return this.set({
                        name: t,
                        value: "",
                        days: -1,
                        domain: e
                    })
                }
            }
        },
        13: function(t, e, n) {
            "use strict";
            var a = n(1),
                i = n(8);
            a.Application.addService("solid", function() {
                return i.a
            }), e.a = i.a
        },
        15: function(t, e, n) {
            "use strict";

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = [],
                        a = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0);
                    } catch (t) {
                        i = !0, r = t
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function i(t) {
                return (t += "").indexOf("#") > -1 ? t.substr(t.indexOf("#"), t.length) : ""
            }

            function r(t) {
                return (t += "").indexOf("#") > -1 ? t.substr(0, t.indexOf("#")) : t
            }

            function o(t) {
                return t.indexOf("?") > -1
            }

            function s(t) {
                if ("" === t || void 0 === t || null === t) return {};
                t.indexOf("?") > -1 && (t = t.substr(t.indexOf("?") + 1, t.length));
                var e = {};
                return (t = r(t)).split("&").forEach(function(t) {
                    var n = a(t.split("="), 2),
                        i = n[0],
                        r = n[1],
                        o = void 0 === r ? null : r;
                    e[i] = o
                }), e
            }

            function c(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?",
                    n = [];
                return Object.keys(t).forEach(function(e) {
                    n.push("".concat(e, "=").concat(encodeURIComponent(t[e])))
                }), (e || "") + n.join("&")
            }
            n.d(e, "c", function() {
                return s
            }), n.d(e, "b", function() {
                return c
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "a", function() {
                return d
            });

            function u(t) {
                return s(function(t) {
                    var e = "";
                    return o(t = r(t)) && (e = t.substr(t.indexOf("?"), t.length)), e
                }(t))
            }

            function d(t) {
                return t = function(t) {
                    if (!o(t)) return t;
                    var e = i(t);
                    return (t = r(t)).substr(0, t.indexOf("?")) + e
                }(t = r(t))
            }
        },
        18: function(t, e, n) {
            "use strict";
            var a = n(14),
                i = n.n(a),
                r = n(12),
                o = n(63);

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = [],
                        a = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0);
                    } catch (t) {
                        i = !0, r = t
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var c = window.BZFD.Context.page.localization,
                u = c.translations || {},
                d = {
                    de: ["de"],
                    en: ["au", "ca", "in", "uk", "us"],
                    es: ["es", "mx"],
                    fr: ["fr"],
                    ja: ["jp"],
                    pt: ["br"]
                };
            e.a = {
                getEdition: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i()(t) && (t = "feedpager" === t ? {
                        useCountryCookie: !1
                    } : {}), t = Object.assign({}, {
                        useCountryCookie: !0
                    }, t);
                    var e = s(c.country.split("-"), 2),
                        n = e[0],
                        a = e[1],
                        o = void 0 === a ? "" : a;
                    if ("en" === c.language && t.useCountryCookie) {
                        var u = r.a.get("country");
                        u || (u = o || "us");
                        var l = s(u.split("-"), 2);
                        n = l[0], (o = l[1]) || "es" === n || (o = n, n = Object.keys(d).filter(function(t) {
                            return -1 !== d[t].indexOf(n)
                        })[0])
                    }
                    return d[n] && -1 !== d[n].indexOf(o) ? "".concat(n, "-").concat(o) : "es" === n ? "es" : "en-us"
                },
                getRawPageLanguage: function() {
                    return -1 !== Object.keys(d).indexOf(c.language) ? c.language : "en"
                },
                getPageLocale: function() {
                    return c.locale
                },
                getUserCountry: function() {
                    return r.a.get("country") || "us"
                },
                getTranslation: function(t, e, n) {
                    if (!u[t]) throw new Error("Missing translation " + t + " for " + this.getRawPageLanguage());
                    var a = n ? {
                        delimiters: n
                    } : {};
                    return o.a.renderString(u[t], e, a)
                },
                getTranslationStr: function(t) {
                    return u[t] || ""
                },
                getDateFormatTemplate: function() {
                    switch (c.language) {
                        case "de":
                            return "{{D}}. {{MM}} {{Y}}, {{H}}:{{m}} Uhr";
                        case "es":
                            return "{{D}} de {{MM}} de {{Y}}, {{h}}:{{m}} {{a}}";
                        case "fr":
                            return "{{D}} {{MM}}, {{Y}} &agrave; {{H}} h {{m}}";
                        case "ja":
                            return "{{Y}}/{{M}}/{{DD}} {{H}}:{{m}}";
                        case "pt":
                            return "{{D}} de {{MM}} de {{Y}}, {{h}}:{{m}} {{a}}";
                        default:
                            return "{{MM}} {{D}}, {{Y}}, at {{h}}:{{m}} {{a}}"
                    }
                }
            }
        },
        2: function(t, e, n) {
            "use strict";
            var a = n(1),
                i = n(3);
            a.Application.addService("util", function() {
                return i.d
            }), e.a = i.d
        },
        20: function(t, e, n) {
            "use strict";
            var a = {};
            a.isMobileApp = function() {
                return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.CDN_URL ? window.CDN_URL : window.location.href).search("[?&]?s=mobile_app([&#]|$)")
            };
            a.isNewsApp = function() {
                return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.CDN_URL ? window.CDN_URL : window.location.href).search("[?&]?app=news([&#]|$)")
            };
            a.isNews2App = function() {
                return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.CDN_URL ? window.CDN_URL : window.location.href).search("[?&]?app=buzznews([&#]|$)")
            };
            a.isIOS = function() {
                return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.CDN_URL ? window.CDN_URL : window.location.href).search("[?&]?os=ios([&#]|$)")
            };
            a.isAndroid = function() {
                return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.CDN_URL ? window.CDN_URL : window.location.href).search("[?&]?os=android([&#]|$)")
            };
            e.a = a
        },
        21: function(t, e, n) {
            "use strict";

            function a(t, e) {
                var n = t.match(e);
                return n && n.length ? n[0] : null
            }
            e.a = {
                getBuzzfeedSubdomainOrWildcard: function(t) {
                    var e = a(t, "(dev|stage|www).(buzzfeed|buzzfeednews).(com|io)$");
                    return e || a(t, ".?[a-z]+.[a-z]+$")
                },
                get: function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = "".concat(t, "="), a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                        for (var r = a[i];
                            " " === r.charAt(0);) r = r.substring(1, r.length);
                        if (0 === r.indexOf(n)) return r.substring(n.length, r.length)
                    }
                    return e
                },
                set: function(t) {
                    var e = t.name,
                        n = t.value,
                        a = t.days,
                        i = t.domain,
                        r = "";
                    if (a) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3), r = "; expires=".concat(o.toGMTString())
                    }
                    var s = "";
                    return void 0 !== i && (s = "; domain=".concat(i)), document.cookie = "".concat(e, "=").concat(n).concat(r).concat(s, "; path=/")
                },
                remove: function(t, e) {
                    return this.set({
                        name: t,
                        value: "",
                        days: -1,
                        domain: e
                    })
                }
            }
        },
        213: function(t, e, n) {
            "use strict";
            (function(t) {
                var a = n(214),
                    i = n.n(a),
                    r = n(148),
                    o = n.n(r),
                    s = n(40),
                    c = n.n(s),
                    u = n(32),
                    d = n.n(u),
                    l = n(4),
                    p = n.n(l),
                    f = n(16),
                    h = n.n(f),
                    g = n(19),
                    m = n.n(g),
                    v = n(27),
                    b = n.n(v),
                    y = n(45),
                    w = n.n(y),
                    k = n(14),
                    _ = n.n(k),
                    T = n(41),
                    M = n(22),
                    x = n(217),
                    C = n(31),
                    F = n.n(C);

                function S() {
                    this._modules = {}, this._plugins = {}, this._instances = {}, this._router = new x.a, this.inited = new F.a, this.active = new F.a, this.crashed = new F.a, this._inited = !1, this._active = !1, this._crashed = !1, this.crashed.add(function() {
                        this._crashed = !0, this.log.error("CRASHED")
                    }, this, Number.MAX_VALUE), this._router.sub("bfa/subscribe/{action}/{eventName}", this._subscribe, this, {
                        action: ["add", "addOnce", "remove"],
                        eventName: function(t) {
                            return _()(t) && t.length > 0
                        }
                    }), this.inited.add(function() {
                        this._inited = !0
                    }, this, Number.MAX_VALUE), this.active.add(function() {
                        this._active = !0
                    }, this, Number.MAX_VALUE), this.Sandbox = function(t, e, n, a) {
                        return this.instanceId = e, this.moduleInited = new F.a, this.moduleActive = new F.a, this.fillModuleRoute = function(t) {
                            return "module/" + e + "/" + t
                        }, this.subOn = function(e, n, a) {
                            t._router.sub(e, n, a)
                        }, this.settings = n || {}, this.moduleId = a, this.utils = t.utils, this.defs = t.defs, this
                    }, this.construct.dispatch(this)
                }
                S.prototype.log = {
                    error: function(t) {
                        window.console && window.console.error("BFA [ BFACore ] " + t)
                    },
                    log: function() {},
                    info: function() {},
                    warn: function() {},
                    enabled: function() {}
                }, S.prototype.construct = new F.a, S.prototype.utils = T.a, S.prototype.defs = M.a, S.prototype._subscribe = function(t, e) {
                    return w()(t) && w()(e) && this[e.eventName] instanceof F.a && b()(t.fn) && t.context && this[e.eventName][e.action](t.fn, t.context), this
                }, S.prototype.registerModule = function(t, e, n) {
                    if (!0 === this._inited) return this.log.warn("You can't register module after activation"), this;
                    e = e || {};
                    var a = this.utils.checkType("function", t, "module") || this.utils.checkType("object", e, "settings");
                    if (a) throw new TypeError(a);
                    if (!_()(n) && _()(t.defaultId) && (n = t.defaultId), !_()(n) || 0 === n.length) throw new TypeError("moduleId has to be specified (as third argument or as `id` property of module) and must be not empty string");
                    return m()(this._modules, n) ? (this.log.warn("module " + n + " was already registered"), this) : (this.push("module/" + n + "/added"), this._modules[n] = {
                        Creator: t,
                        settings: e,
                        id: n
                    }, this)
                }, S.prototype.plugin = function(t, e, n) {
                    if (!0 === this._inited) return this.log.warn("You can't add plugins after activation"), this;
                    e = e || {};
                    var a = this.utils.checkType("function", t, "plugin") || this.utils.checkType("object", e, "settings");
                    if (a) throw new TypeError(a);
                    if (!_()(n) && _()(t.defaultId) && (n = t.defaultId), !_()(n) || 0 === n.length) throw new TypeError("pluginId has to be specified (as third argument or as `id` property of plugin) and must be not empty string");
                    return m()(this._plugins, n) ? (this.log.warn("plugin " + n + " was already registered"), this) : (this._plugins[n] = {
                        Creator: t,
                        instance: null,
                        settings: e,
                        id: n
                    }, this)
                }, S.prototype.activatePlugins = function() {
                    if (!0 !== this._crashed) {
                        var t = [],
                            e = {},
                            n = this;
                        try {
                            this.utils.forOwn(this._plugins, function(a) {
                                ! function a(i, r) {
                                    h()(r) || (r = []), r.push(i), e[i] = !0, p()(n._plugins[i], "Creator.require", []).forEach(function(t) {
                                        if (d()(n._plugins[t])) throw new Error("Can't resolve \"" + t + '" for "' + i + '" plugin');
                                        if (r.indexOf(t) >= 0) throw new Error('Circular dependency "' + t + '" is required by "' + i + '" plugin: ' + r.join(" -> "));
                                        e[t] || a(t, r.slice(0))
                                    }, n), t.indexOf(i) < 0 && t.push(i)
                                }(a.id)
                            }, this);
                            for (var a = 0; a < t.length; a++) {
                                var i = t[a];
                                null === this._plugins[i].instance ? (this._plugins[i].instance = new this._plugins[i].Creator(this, this._plugins[i].settings), this.push("plugin/" + i + "/added")) : this.log.warn("Plugin " + i + " already added and activated")
                            }
                        } catch (t) {
                            return void 0 === window.BZFD || "live" !== window.BZFD.Config.env && "prod" !== window.BZFD.Config.env || !window.raven || raven.captureException(t), this.log.error(t), this.log.error("Plugins activation interrupted"), void this.crashed.dispatch()
                        }
                    } else this.log.error("Plugins activation interrupted")
                }, S.prototype.activate = function() {
                    if (!0 !== this._inited)
                        if (this.activatePlugins(), !0 !== this._crashed) {
                            var e = this;
                            this.utils.forOwn(this._modules, function(e) {
                                var n = e.Creator.defaultId,
                                    a = !1;
                                _()(e.settings.instanceId) && (n = e.settings.instanceId);
                                var i = new this.Sandbox(this, n, e.settings, e.Creator.defaultId);
                                if (h()(e.Creator.require) && e.Creator.require.length > 0)
                                    for (var r = 0; r < e.Creator.require.length; r++) {
                                        var o = e.Creator.require[r];
                                        if (!m()(this._plugins, o) || !m()(this._plugins[o].instance, "modifySBInstance")) {
                                            a = "Module " + e.Creator.defaultId + " require plugin " + o;
                                            break
                                        }
                                        this._plugins[o].instance.modifySBInstance(i)
                                    }
                                if (!a) {
                                    var s = new e.Creator(i);
                                    m()(s, "init") ? (this._instances[n] = {
                                        module: s,
                                        sandbox: i
                                    }, this.push("module/" + n + "/added")) : a = "Constructor of module " + t.defaultId + " returned not valid object"
                                }
                                a && (this.log.error(a), this.log.error("Instance " + n + " of module " + t.defaultId + " is not added properly"))
                            }, this);
                            var n = c()(this._instances).length,
                                a = o()(n, function() {
                                    e.inited.dispatch(e)
                                }),
                                r = o()(n, function() {
                                    e.active.dispatch(e)
                                });
                            this.utils.forOwn(this._instances, function(t) {
                                t.sandbox.moduleInited.addOnce(a), t.sandbox.moduleActive.addOnce(r), i()(t.module.init)
                            }, this)
                        } else this.log.error("Activation interrupted");
                    else this.log.warn("Already initialized")
                }, S.prototype.push = function() {
                    this._router.pub.apply(this._router, arguments)
                }, e.a = S
            }).call(this, n(297)(t))
        },
        217: function(t, e, n) {
            "use strict";
            var a = n(19),
                i = n.n(a),
                r = n(23),
                o = n.n(r),
                s = n(27),
                c = n.n(s),
                u = n(71),
                d = n.n(u),
                l = n(46),
                p = n.n(l),
                f = n(85),
                h = n.n(f),
                g = n(218),
                m = n.n(g),
                v = n(14),
                b = n.n(v),
                y = n(149),
                w = n.n(y);

            function k() {
                this._router = w.a.create(), this._routes = {}, this._router.normalizeFn = w.a.NORM_AS_OBJECT, this._router.ignoreState = !0, this._router.greedy = !0, this._routes = []
            }
            k.prototype.pub = function(t) {
                if (b()(t)) {
                    var e, n = m()(arguments, 1);
                    1 === n.length ? e = n[0] : n.length > 1 && (e = n), this._router.parse(t, [e])
                }
                return this
            }, k.prototype.modifySubCB = function(t, e, n) {
                return h()(t, "track/") ? function() {
                    e.apply(n, p()(Array.prototype.slice.call(arguments)))
                } : e
            }, k.prototype.sub = function(t, e, n, a, r) {
                if (!b()(t) || d()(t)) return this.log.error("`route` must be not empty string"), this;
                if (!c()(e)) return this.log.error("`cb` must be a function"), this;
                if (a && !o()(a)) return this.log.error("`rules` must be an object or not specified"), this;
                var s = this.modifySubCB(t, e, n),
                    u = r ? "addOnce" : "add";
                if (i()(this._routes, t) || a)
                    if (a) {
                        var l = this._router.addRoute(t);
                        l.rules = a, l.matched[u](s, n)
                    } else this._routes[t].matched[u](s, n);
                else this._routes[t] = this._router.addRoute(t), this._routes[t].matched[u](s, n);
                return this
            }, k.prototype.log = {
                error: function() {},
                log: function() {},
                info: function() {},
                warn: function() {},
                enabled: function() {}
            }, e.a = k
        },
        22: function(t, e, n) {
            "use strict";
            var a = {
                platform: {
                    desktop: 1,
                    mobileweb: 2,
                    bflite: 3
                },
                bfaMode: {
                    develop: 1,
                    prod: 2,
                    test: 3
                },
                trackingBehavior: {
                    byDefault: 1,
                    ifSpecified: 2
                }
            };
            Object.freeze(a), e.a = a
        },
        24: function(t, e, n) {
            "use strict";
            var a = n(71),
                i = n.n(a),
                r = n(75),
                o = n.n(r),
                s = n(39),
                c = {};

            function u(t, e) {
                "function" == typeof window.bfa ? i()(e) || window.bfa(t, {
                    data: e
                }) : void 0 !== window.raven && window.raven.captureException(new Error("Performance tracking issue: BFA is not available"))
            }
            e.a = {
                mark: function(t, e) {
                    if (void 0 !== window.performance) {
                        var n = function(t, e) {
                            var n = o.a.getTimes()[e];
                            return !e || c[e] ? window.performance.now() - (c[e] || 0) : n ? window.Date.now() - n : null
                        }(0, e);
                        n || 0 === n ? (c[t] = n, u(s.b, {
                            markName: t,
                            markValue: n
                        }), void 0 !== window.performance.mark && window.performance.mark(t)) : console.error("".concat(e, " is not a known event."))
                    }
                },
                eventStart: function(t) {
                    void 0 !== window.performance && (c[t + "_start"] = window.performance.now(), void 0 !== window.performance.mark && window.performance.mark(t + "_start"))
                },
                eventEnd: function(t) {
                    void 0 !== window.performance && (c[t + "_start"] && (c[t + "_end"] = window.performance.now(), c[t] = c[t + "_end"] - c[t + "_start"], u(s.b, {
                        markName: t,
                        markValue: c[t]
                    })), void 0 !== window.performance.mark && window.performance.mark(t + "_end"))
                },
                histogram: function(t, e) {
                    c[t] = e, u(s.b, {
                        markName: t,
                        markValue: c[t]
                    })
                },
                start: function() {
                    ! function() {
                        function t() {
                            setTimeout(function() {
                                u(s.d, o.a.getTimes())
                            }, 0)
                        }
                        "complete" === document.readyState ? t() : window.addEventListener("load", t)
                    }()
                }
            }
        },
        25: function(t, e, n) {
            "use strict";
            var a = n(0),
                i = {},
                r = {},
                o = {},
                s = document.getElementsByTagName("head")[0];
            var c = {
                getUrl: function() {
                    return "".concat(r.base_url, "/").concat(o.username, "/").concat(o.uri)
                }
            };
            c.getAuthor = function() {
                return function(t) {
                    var e, n = "",
                        i = a.b.find(s, 'meta[property="' + t + '"]');
                    return i.length > 0 && (e = i[0].getAttribute("content")) && (n = e), n
                }("author").replace(/,$/g, "")
            }, c.getTitle = function() {
                return i.title || document.title
            }, c.getDescription = function() {
                return i.description
            }, c.getCaption = function() {
                var t = document.domain,
                    e = c.getAuthor();
                return e && (t += " | By " + e), t
            }, c.getPicture = function() {
                return i.picture
            }, c.getAll = function() {
                return {
                    url: c.getUrl(),
                    author: c.getAuthor(),
                    title: c.getTitle(),
                    description: c.getDescription(),
                    caption: c.getCaption(),
                    picture: c.getPicture()
                }
            }, e.a = c
        },
        28: function(t, e, n) {
            "use strict";
            var a = n(11),
                i = n(15),
                r = n(9),
                o = n(12),
                s = n(20);

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var u, d = {
                    isSafari: n(3).h,
                    loadScript: a.g,
                    queryStringToObject: i.c
                },
                l = window.location.hostname,
                p = "https://quantcast.mgr.consensu.org/choice",
                f = "".concat(p, "/3aud4J6uA4Z6Y/").concat(l, "/choice.js"),
                h = "".concat(p, ".js"),
                g = s.a.isMobileApp(),
                m = {
                    get gdprQueryParam() {
                        return Object(i.c)(window.location.search).gdpr || ""
                    },
                    get needsConsent() {
                        var t = "quantcast" === this.gdprQueryParam || "display-consent" === this.gdprQueryParam;
                        if (g || r.a.isDev && !t) return !1;
                        var e = o.a.get("gdpr");
                        return "string" == typeof e && (e = !!e), t || e || !1
                    },
                    get publisherPurposeIds() {
                        return [1, 2, 3, 4]
                    },
                    get vendorIds() {
                        return []
                    },
                    init: function() {
                        var t = "display-consent" === this.gdprQueryParam;
                        return u || (u = d.loadScript("".concat(f, "?timestamp=").concat(Date.now())).catch(function() {
                            return d.loadScript(h)
                        }).then(function() {
                            t && window.__cmp("displayConsentUi")
                        }))
                    },
                    cmpCall: function(t) {
                        var e = arguments;
                        return new Promise(function(n, a) {
                            var i;
                            (i = window).__cmp.apply(i, c(e).concat([function(e, i) {
                                return i ? n({
                                    success: i,
                                    data: e
                                }) : a({
                                    success: i,
                                    data: e,
                                    error: new Error('"'.concat(t, '" failed'))
                                })
                            }]))
                        })
                    },
                    getVendorConsents: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.vendorIds;
                        return m.cmpCall("getVendorConsents", t)
                    },
                    getPublisherConsents: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.publisherPurposeIds;
                        return m.cmpCall("getPublisherConsents", t)
                    },
                    getGooglePersonalization: function() {
                        return m.cmpCall("getGooglePersonalization")
                    },
                    handleCmpMsg: function(t) {
                        var e, n = "string" == typeof t.data;
                        if ((e = n ? -1 !== t.data.indexOf("__cmpCall") ? JSON.parse(t.data) : {} : t.data).__cmpCall) {
                            var a = e.__cmpCall;
                            window.__cmp(a.command, a.parameter, function(e, i) {
                                var r = {
                                    __cmpReturn: {
                                        returnValue: e,
                                        success: i,
                                        callId: a.callId
                                    }
                                };
                                t.source.postMessage(n ? JSON.stringify(r) : r, "*")
                            })
                        }
                    }
                };
            e.a = m
        },
        29: function(t, e, n) {
            "use strict";
            var a = n(38),
                i = function() {
                    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.hostname,
                        e = t.split(".")[0];
                    return e && "stage" !== e && -1 === ["buzzfeed", "buzzfeednews", "tasty"].indexOf(e) && t.split(".").length >= 3 && (t = t.substring(e.length + 1)), t
                },
                r = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dev";
                    return "dev" === t ? "dev.buzzfeed.io" : "prod" === t || "app-west" === t ? "buzzfeed.com" : "stage.buzzfeed.com"
                };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            n.d(e, "a", function() {
                return s
            });
            var s = function() {
                function t(e) {
                    var n = e.cookieName,
                        o = e.daysExpiry,
                        s = e.env,
                        c = e.namespace,
                        u = e.sourceOfTruthDomain,
                        d = e.throttleTimer,
                        l = void 0 === d ? null : d,
                        p = e.secureOnly,
                        f = void 0 === p || p,
                        h = e.localDomain,
                        g = void 0 === h ? i() : h;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), s = "live" === s ? "prod" : s, this.xDomainCookies = new a.a({
                        sourceOfTruthDomain: u || r(s),
                        namespace: c,
                        localDomain: g,
                        env: s
                    }), this.cookieName = n, this.daysExpiry = o, this.secureOnly = f, this.throttleTimer = l, this.inMemoryValue = null
                }
                return function(t, e, n) {
                    e && o(t.prototype, e), n && o(t, n)
                }(t, [{
                    key: "get",
                    value: function() {
                        var t = this;
                        return this.throttle ? Promise.resolve(this.inMemoryValue) : this.xDomainCookies.get(this.cookieName).then(function(e) {
                            return t.inMemoryValue = e, t.resetThrottle(), e
                        })
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        return this.inMemoryValue = t, this.xDomainCookies.set({
                            name: this.cookieName,
                            value: t,
                            days: this.daysExpiry,
                            secureOnly: this.secureOnly
                        })
                    }
                }, {
                    key: "resetThrottle",
                    value: function() {
                        var t = this;
                        this.throttleTimer && (this.throttle = setTimeout(function() {
                            t.throttle = null
                        }, this.throttleTimer))
                    }
                }]), t
            }()
        },
        297: function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        3: function(t, e, n) {
            "use strict";
            n.d(e, "f", function() {
                return y
            }), n.d(e, "j", function() {
                return w
            }), n.d(e, "b", function() {
                return k
            }), n.d(e, "e", function() {
                return _
            }), n.d(e, "h", function() {
                return M
            }), n.d(e, "c", function() {
                return x
            }), n.d(e, "g", function() {
                return C
            }), n.d(e, "a", function() {
                return F
            }), n.d(e, "i", function() {
                return S
            });
            var a = n(30),
                i = n.n(a),
                r = n(27),
                o = n.n(r),
                s = n(4),
                c = n.n(s),
                u = n(36),
                d = n.n(u),
                l = n(34),
                p = n(0);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var b = {};

            function y(t, e) {
                return t + "-" + e.id
            }

            function w(t) {
                var e = new Date(1e3 * t).toISOString().substr(11, 8);
                return t < 3600 && (e = e.substr(3, 5)), e.replace(/^0+(\d:)/, "$1")
            }

            function k(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.bfa && window.bfa instanceof Function && window.bfaBinder && window.bfa(t, e)
            }

            function _() {
                if (screen.orientation && screen.orientation.type) return screen.orientation.type.replace("-primary", "");
                if (window.orientation) return 90 === Math.abs(window.orientation) ? "landscape" : "portrait";
                if (window.matchMedia) {
                    if (window.matchMedia("(orientation: portrait)").matches) return "portrait";
                    if (window.matchMedia("(orientation: landscape)").matches) return "landscape"
                }
                return "landscape"
            }
            b.getKeys = function(t) {
                var e;
                if (Object.keys) return Object.keys(t);
                for (var n in e = [], t) t.hasOwnProperty(n) && e.push(n);
                return e
            }, b.getUniqueEventName = y, b.capitalize = function(t) {
                return "string" != typeof t ? t : t.replace(/\w+/g, function(t) {
                    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                })
            }, b.hasQueryString = function(t) {
                return t.indexOf("?") > -1
            }, b.removeHash = function(t) {
                return (t += "").indexOf("#") > -1 ? t.substr(0, t.indexOf("#")) : t
            }, b.removeQueryString = function(t) {
                return (t += "").indexOf("?") > -1 ? -1 === t.indexOf("#") ? t.substr(0, t.indexOf("?")) : t.substr(0, t.indexOf("?")) + t.substr("#", t.length) : t
            }, b.getQueryString = function(t) {
                var e = "";
                return (t = b.removeHash(t)).indexOf("?") > -1 && (e = t.substr(t.indexOf("?"), t.length)), e
            }, b.getHash = function(t) {
                return (t += "").indexOf("#") > -1 ? t.substr(t.indexOf("#"), t.length) : ""
            }, b.queryStringToObject = function(t) {
                if ("" === t || void 0 === t || null === t) return {};
                var e, n = t.split("&"),
                    a = {};
                return b.each(n, function(t, n) {
                    "" === (e = n.split("="))[1] && (e[1] = null), a[e[0]] = e[1]
                }), a
            }, b.objectToQueryString = function(t) {
                var e = [];
                return b.each(t, function(t, n) {
                    e.push(t + "=" + n)
                }), "?" + e.join("&")
            }, b.getBaseUrl = function(t) {
                return t = b.removeHash(t), t = b.removeQueryString(t)
            }, b.addParams = function(t, e) {
                var n, a, i = b.getQueryString(t),
                    r = b.getHash(t);
                return t = b.removeHash(t), t = b.removeQueryString(t), i = b.queryStringToObject(i.substr(1, i.length)), b.each(e, function(t, e) {
                    n = e[0], a = e[1], i[n] = a
                }), t + b.objectToQueryString(i) + r
            }, b.removeParams = function(t, e) {
                var n = b.getBaseUrl(t),
                    a = b.getQueryString(t),
                    i = b.getHash(t),
                    r = b.queryStringToObject(a.substr(1, a.length));
                return b.each(e, function(t, e) {
                    delete r[e]
                }), n + b.objectToQueryString(r) + i
            }, b.prepareUrl = function(t, e) {
                var n = [];
                return b.each(e, function(t, e) {
                    void 0 !== e && n.push([t, encodeURIComponent(e)])
                }), b.addParams(t, n)
            }, b.redirect = function(t) {
                "string" == typeof t && t && (window.location.href = t)
            }, b.openPopup = function(t, e) {
                if ("string" == typeof t && t) {
                    var n = "_blank",
                        a = "";
                    if (e && e.height && e.width) {
                        var i = window.screen.height / 2 - e.height / 2,
                            r = window.screen.width / 2 - e.width / 2;
                        a = "scrollbars=yes, toolbar=0, status=0, width=" + e.width + ", height=" + e.height + ", top=" + i + ", left=" + r, n = e.name ? e.name : n
                    }
                    window.open(t, n, a)
                }
            }, b.each = function(t, e) {
                if (Array.isArray(t)) t.forEach(function(t, n) {
                    return e(n, t)
                });
                else
                    for (var n in t) t.hasOwnProperty(n) && e(n, t[n])
            }, b.extend = i.a, b.getQueryParams = function() {
                var t = window.location.search.substring(1),
                    e = {};
                return t && t.split("&").forEach(function(t) {
                    var n = t.split("="),
                        a = decodeURIComponent(n[0]),
                        i = decodeURIComponent(n.slice(1).join("="));
                    e[a] = i
                }), e
            }, b.addQueryParam = function(t, e, n) {
                return (t = t || window.location.href) + (t.split("?")[1] ? "&" : "?") + e + "=" + n
            }, b.largeNumberNotation = function(t) {
                return t < 1e3 ? t : t < 1e4 ? t.toString().charAt(0) + "," + t.toString().substring(1) : t >= 1e6 ? (t / 1e6).toFixed(t % 1e6 != 0) + "M" : (t / 1e3).toFixed(t % 1e3 != 0) + "K"
            }, b.numberWithCommas = function(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }, b.min = function() {
                return Math.min.apply(Math, Array.prototype.filter.call(arguments, function(t) {
                    return !isNaN(+t)
                }))
            }, b.toQueryString = function(t) {
                var e = [];
                return this.each(t, function(t, n) {
                    null !== n && "" !== n && void 0 !== n && e.push(t + "=" + n)
                }), e.join("&")
            }, b.getMessageHandler = function(t) {
                return function(e, n) {
                    var a = t[e];
                    "function" == typeof a && a.call(this, n)
                }
            }, b.getEventHandler = function(t) {
                return function(e, n, a) {
                    var i = t[a];
                    "function" == typeof i && i.call(this, e, n)
                }
            }, b.padLeft = function(t, e, n) {
                for (var a = n - t.toString().length, i = "", r = 0; r < a; r++) i += e;
                return i + t
            }, b.freeFormFormat = function(t) {
                return t.replace(/["'"“’ ]/g, "").toLowerCase()
            }, b.secondsToTimeStamp = w, b.timeSince = function(t) {
                var e, n = ["year", "years"],
                    a = ["month", "months"],
                    i = ["day", "days"],
                    r = ["hour", "hours"],
                    o = ["minute", "minutes"],
                    s = ["just now"],
                    c = Math.floor(((new Date).getTime() - new Date(t).getTime()) / 1e3);
                return (e = Math.floor(c / 31536e3)) >= 1 ? {
                    type: "year",
                    value: e,
                    text: e + " " + (1 === e ? n[0] : n[1]) + " ago"
                } : (e = Math.floor(c / 2592e3)) >= 1 ? {
                    type: "month",
                    value: e,
                    text: e + " " + (1 === e ? a[0] : a[1]) + " ago"
                } : (e = Math.floor(c / 86400)) >= 1 ? {
                    type: "day",
                    value: e,
                    text: e + " " + (1 === e ? i[0] : i[1]) + " ago"
                } : (e = Math.floor(c / 3600)) >= 1 ? {
                    type: "hour",
                    value: e,
                    text: e + " " + (1 === e ? r[0] : r[1]) + " ago"
                } : (e = Math.floor(c / 60)) > 1 ? {
                    type: "minute",
                    value: e,
                    text: e + " " + (1 === e ? o[0] : o[1]) + " ago"
                } : {
                    type: "now",
                    value: "",
                    text: s[0]
                }
            }, b.bulkDelete = function(t, e) {
                b.each(t, function(t, n) {
                    delete e[n]
                })
            }, b.bfaTrack = k, b.getScreenOrientation = _, b.isIOSIPad = !!navigator.userAgent.toLowerCase().match(/ipad/), b.isIOSMobile = !!navigator.userAgent.toLowerCase().match(/iphone|ipod/);
            var T = b.isIOSIPad || b.isIOSMobile;
            b.isIOS = T;
            var M = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString();

            function x(t) {
                if (!o()(t)) throw new TypeError("".concat(t, " is not a function"));
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) n[a - 1] = arguments[a];
                n.forEach(function(t, e) {
                    if (void 0 === t) throw new TypeError("Mixin at position ".concat(e, " is undefined"))
                });
                var i = [t];
                return n.forEach(function(t) {
                    var e = i[0],
                        n = function(t) {
                            function n() {
                                return f(this, n), h(this, g(n).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && m(t, e)
                            }(n, e), n
                        }();
                    o()(t) && (t = t(e.prototype)), Object.assign(n.prototype, t), i.unshift(n)
                }), i[0]
            }

            function C() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return function() {
                    return t++
                }
            }
            b.isSafari = M, b.createScript = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.head,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return new Promise(function(a, i) {
                    var r = document.createElement("script");
                    r.onload = function() {
                        return a(r)
                    }, r.onerror = function(t) {
                        Object(l.a)("script", "error", {
                            url: c()(t, "currentTarget.src", "").split("?")[0]
                        }), i("Script failed to load")
                    }, r.src = t, r.async = n, e.appendChild(r)
                })
            }, b.createStyleSheet = function(t) {
                return new Promise(function(e, n) {
                    var a = document.createElement("link");
                    a.rel = "stylesheet", a.href = t, a.onload = function() {
                        return e(a)
                    }, a.onerror = function() {
                        return n("".concat(t, " failed to load"))
                    }, document.head.appendChild(a)
                })
            }, b.stripHTML = function(t) {
                var e = Array.isArray(t) ? [] : {},
                    n = document.createElement("div");
                switch (v(t)) {
                    case "string":
                        return n.innerHTML = t, n.textContent || "";
                    case "object":
                        return b.each(t, function(t, n) {
                            return e[t] = b.stripHTML(n)
                        }), e
                }
                return t
            }, b.truncate = function(t, e) {
                if (!t || !t.textContent || !t.textContent.length) return 0;
                var n = t.textContent,
                    a = t.textContent.substring(0, e),
                    i = t.innerHTML ? t.innerHTML.substring(0, e) : null;
                if (!t.innerHTML || a === i) return t.textContent = n === a ? a : a.replace(/\s*$/, "") + "...", a.length;
                var r = 0;
                return b.each(t.childNodes, function(n, a) {
                    r >= e ? t.removeChild(a) : r += b.truncate(a, e - r)
                }), t.textContent.length
            }, b.decorateWithMixins = x, b.idGenerator = C;
            var F = function t() {
                var e, n, a = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).unsubscribe,
                    i = void 0 === a ? function() {} : a;
                f(this, t);
                var r = new Promise(function(t, a) {
                    e = t, n = a
                });
                return r.resolve = e, r.reject = n, r.unsubscribe = i, r
            };

            function S(t) {
                var e = !0,
                    n = d()(t, "[data-module=buzz]", !0);
                if (document.querySelector(".infinite-posts-enabled") && n) try {
                    e = BZFD.Context.buzz.id === Object(p.d)(n).context.buzz.id
                } catch (t) {}
                return e
            }
            b.Deferred = F, b.moduleIsInContext = S, e.d = b
        },
        33: function(t, e, n) {
            "use strict";
            var a = n(48),
                i = n(34),
                r = n(107),
                o = n.n(r);

            function s(t) {
                var e = [];
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var a = t[n];
                        null !== a && "" !== a && void 0 !== a && e.push(n + "=" + a)
                    }
                return e.join("&")
            }

            function c(t) {
                return new Promise(function(e, n) {
                    setTimeout(function() {
                        return n({
                            type: "timeout",
                            msg: "".concat(t, "ms timeout exceeded")
                        })
                    }, t)
                })
            }

            function u(t) {
                var e = t.url;
                return function(t) {
                    return Object(i.a)("xhr", t.type || "error", {
                        url: e,
                        status: t.status || 0
                    }), Promise.reject(t)
                }
            }

            function d(t) {
                return t.ok ? Promise.resolve(t) : Promise.reject({
                    type: "error",
                    status: t.status,
                    statusText: t.statusText
                })
            }

            function l(t) {
                return t.json()
            }

            function p(t) {
                return t.text()
            }

            function f(t) {
                if ("dev" !== BZFD.Config.env) return t;
                return t + (t.indexOf("?") > -1 ? "&" : "?") + "eca385331012a621bc93fcda0a953a97"
            }
            e.a = {
                get: function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.type,
                        r = void 0 === i ? "json" : i,
                        h = n.data,
                        g = void 0 === h ? {} : h,
                        m = n.params,
                        v = void 0 === m ? {} : m,
                        b = n.skipAuth,
                        y = n.timeout;
                    if (!t) return Promise.reject("URL parameter is required");
                    var w = Object.assign({
                            credentials: "same-origin"
                        }, v),
                        k = t,
                        _ = s(g);
                    switch (_ && (k += (k.indexOf("?") > -1 ? "&" : "?") + _), b && (k = f(k)), r) {
                        case "json":
                            e = Object(a.a)(k, w).then(d).then(l);
                            break;
                        case "text":
                            e = Object(a.a)(k, w).then(d).then(p);
                            break;
                        case "jsonp":
                            e = function(t) {
                                return new Promise(function(e, n) {
                                    o()(t, function(t, a) {
                                        return t ? n(t) : e(a)
                                    })
                                })
                            }(k);
                            break;
                        default:
                            e = Promise.reject("Unsupported type ".concat(r))
                    }
                    return (y ? Promise.race([c(y), e]) : e).catch(u({
                        url: t
                    }))
                },
                post: function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.data,
                        r = n.type,
                        o = void 0 === r ? "json" : r,
                        h = n.params,
                        g = void 0 === h ? {} : h,
                        m = n.skipAuth,
                        v = void 0 !== m && m,
                        b = n.raw,
                        y = void 0 !== b && b,
                        w = n.timeout;
                    if (!t) return Promise.reject("URL parameter is required");
                    if (!i) return Promise.reject("Can not send POST request without data");
                    v && (t = f(t));
                    var k = Object.assign({
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                        credentials: "same-origin"
                    }, g);
                    switch (k.method = "POST", k.body = y ? i : s(i), o) {
                        case "json":
                            e = Object(a.a)(t, k).then(d).then(l);
                            break;
                        case "text":
                            e = Object(a.a)(t, k).then(d).then(p);
                            break;
                        default:
                            e = Promise.reject("Unsupported type ".concat(o))
                    }
                    return (w ? Promise.race([c(w), e]) : e).catch(u({
                        url: t
                    }))
                }
            }
        },
        34: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            var a = n(62),
                i = ["samplingRate"];

            function r(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if ("function" == typeof window.bfa) {
                    i.some(function(t) {
                        return n.hasOwnProperty(t)
                    }) && (r = n, n = {});
                    var o = r,
                        s = o.samplingRate,
                        c = o.platform,
                        u = {
                            data: {
                                target: t,
                                value: e,
                                tags: n
                            }
                        };
                    c && (u.data.platform = r.platform), s && (s > 1 ? "dev" === window.BZFD.Config.env && console.error("Your sampling rate is above 100%.") : Object.assign(u, {
                        opts: {
                            samplingRate: s
                        }
                    })), window.bfa(a.b, u)
                } else void 0 !== window.raven && window.raven.captureException(new Error("Instrumentation tracking issue: BFA is not available"))
            }
        },
        35: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return s
            });
            var a = n(29),
                i = n(43),
                r = parseInt(1e10 * Math.random(), 10),
                o = function(t) {
                    return function(t) {
                        if (0 !== t.indexOf(".")) {
                            var e = /[0-9A-Za-z]+/.exec(t);
                            return null !== e && e[0] === t && parseInt(t, 36)
                        }
                        var n = t.substr(1, 2),
                            a = t.substr(3);
                        return Object(i.a)(a, {
                            salt: n
                        })
                    }(decodeURIComponent(t).split("&").filter(function(t) {
                        return -1 !== t.indexOf("u=")
                    }).map(function(t) {
                        return t.split("=")[1]
                    }).pop() || "")
                },
                s = function(t) {
                    var e = t.env,
                        n = t.create,
                        s = void 0 === n || n,
                        c = new a.a({
                            namespace: "bf-xdomain-tracking",
                            cookieName: "bf_visit",
                            daysExpiry: 1e4,
                            env: e
                        });
                    return c.get().then(function(t) {
                        if (!t && s) {
                            var e = function(t) {
                                var e = parseInt(25 * Math.random() + 10, 10).toString(36) + parseInt(25 * Math.random() + 10, 10).toString(36);
                                return ".".concat(e).concat(Object(i.b)(t, {
                                    salt: e,
                                    length: 0
                                }))
                            }(r);
                            return c.set(encodeURIComponent("u=".concat(e, "&v=2"))), r
                        }
                        return o(t)
                    })
                }
        },
        38: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            });
            var a = n(21);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            var r = function(t) {
                    return t.match(/^stage\./) ? "https://".concat(t) : "https://www.".concat(t)
                },
                o = function() {
                    function t(e) {
                        var n = this,
                            a = e.sourceOfTruthDomain,
                            i = e.localDomain,
                            r = e.namespace,
                            o = e.env,
                            s = void 0 === o ? "dev" : o,
                            c = e.updateInterval,
                            u = void 0 === c ? 3e5 : c,
                            d = e.iframeTimeout,
                            l = void 0 === d ? 3e3 : d;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.sourceOfTruthDomain = a, this.localDomain = i, this.env = s, this.namespace = r, this.iframeTimeout = l, this.cookies = {}, a !== i && this.initIframe().then(function() {
                            setInterval(n.updateFromIframe.bind(n), u)
                        }).catch(function() {})
                    }
                    return function(t, e, n) {
                        e && i(t.prototype, e), n && i(t, n)
                    }(t, [{
                        key: "get",
                        value: function(t) {
                            var e = this;
                            return this.sourceOfTruthDomain === this.localDomain ? Promise.resolve(a.a.get(t)) : this.initIframe().then(function() {
                                return e.cookies[t] || a.a.get(t)
                            }).catch(function() {
                                return a.a.get(t)
                            })
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            var e = this,
                                n = t.name,
                                i = t.value,
                                o = t.days,
                                s = t.secureOnly,
                                c = void 0 === s || s;
                            this.sourceOfTruthDomain !== this.localDomain ? this.initIframe().then(function() {
                                var t = {
                                        namespace: e.namespace,
                                        msgType: "destination-sync-write",
                                        cookieName: n,
                                        cookieVal: i,
                                        expiresDays: o,
                                        secureOnly: c
                                    },
                                    a = r(e.sourceOfTruthDomain);
                                e.iframe.contentWindow.postMessage(JSON.stringify(t), a)
                            }).catch(function() {
                                return a.a.set({
                                    name: n,
                                    value: i,
                                    days: o,
                                    localDomain: e.localDomain
                                })
                            }) : a.a.set({
                                name: n,
                                value: i,
                                days: o,
                                localDomain: this.localDomain
                            })
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            if (this.boundOnMessage && window.removeEventListener("message", this.boundOnMessage), this.iframe) {
                                var t = new ErrorEvent({
                                    message: "XDomainCookies were cleaned up before ready"
                                });
                                this.iframe.dispatchEvent(t), this.iframe.remove()
                            }
                            this.iframeReady = null
                        }
                    }, {
                        key: "initIframe",
                        value: function() {
                            var t = this;
                            if (this.iframeReady) return this.iframeReady;
                            var e = new Promise(function(e, n) {
                                t.boundOnMessage = function(n) {
                                    t.onMessage(n, e)
                                }, window.addEventListener("message", t.boundOnMessage), t.createIframe(n)
                            });
                            return this.iframeReady = Promise.race([function(t) {
                                return new Promise(function(e, n) {
                                    var a = {
                                        type: "timeout",
                                        msg: "".concat(t, "ms timeout exceeded")
                                    };
                                    setTimeout(function() {
                                        return n(a)
                                    }, t)
                                })
                            }(this.iframeTimeout), e]).catch(function(e) {
                                throw "prod" === t.env && window.raven && window.raven.captureException("timeout" === e.type ? new Error("Destination Sync: ".concat(e.msg)) : e), console.error(e), e
                            }), this.iframeReady
                        }
                    }, {
                        key: "createIframe",
                        value: function(t) {
                            var e = "xdomaincookies-".concat(this.namespace),
                                n = document.getElementById(e);
                            if (n) return n.addEventListener("error", function(e) {
                                t(e)
                            }), this.iframe = n, void(this.iframe.contentWindow && this.updateFromIframe());
                            var a = JSON.stringify({
                                    namespace: this.namespace,
                                    windowOrigin: window.location.origin
                                }),
                                i = document.createElement("iframe");
                            i.style.display = "none", i.addEventListener("error", function(e) {
                                t(e)
                            }), i.id = e, i.src = function(t, e) {
                                return "".concat(r(t), "/").concat("destination-sync.html", "#").concat(encodeURIComponent(e))
                            }(this.sourceOfTruthDomain, a), this.iframe = i, document.body.appendChild(i)
                        }
                    }, {
                        key: "updateFromIframe",
                        value: function() {
                            var t = {
                                    namespace: this.namespace,
                                    msgType: "destination-sync-read"
                                },
                                e = r(this.sourceOfTruthDomain);
                            this.iframe.contentWindow.postMessage(JSON.stringify(t), e)
                        }
                    }, {
                        key: "onMessage",
                        value: function(t, e) {
                            var n = {};
                            try {
                                n = JSON.parse(t.data)
                            } catch (t) {}
                            n.namespace === this.namespace && ("destination-sync-init" !== n.msgType && "destination-sync-read" !== n.msgType || (this.cookies = n.cookies), e())
                        }
                    }]), t
                }()
        },
        39: function(t, e, n) {
            "use strict";
            n.d(e, "d", function() {
                return a
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return r
            }), n.d(e, "a", function() {
                return o
            });
            var a = "track/website/performance",
                i = "track/website/custom_timers";

            function r(t) {
                var e = t.getOrCreateMap(a);
                return e.addMapTo("type", "website_performance"), e.addMapTo("kind", "performance"), e.addMapTo("page_type", "").mapFrom("data.page.type"), e.addMapTo("page_format", "").mapFrom("data.page.post.format.type"), e.addMapTo("buzz_id", "").mapFrom("data.page.post.id"), e.addMapTo("platform", "").mapFrom("data.page.platform"), e.addMapTo("be_tcp", "").mapFrom("data.connectTime"), e.addMapTo("be_dns", "").mapFrom("data.lookupDomainTime"), e.addMapTo("be_latency", "").mapFrom(function(t) {
                    return t.data.responseEnd - t.data.fetchStart
                }), e.addMapTo("be_time", "").mapFrom(function(t) {
                    return t.data.responseStart - t.data.navigationStart
                }), e.addMapTo("fe_firstpaint", "").mapFrom("data.firstPaintTime"), e.addMapTo("fe_page_load", "").mapFrom(function(t) {
                    return t.data.loadEventEnd - t.data.responseEnd
                }), e.addMapTo("fe_page_load_full", "").mapFrom(function(t) {
                    return t.data.loadEventEnd - t.data.navigationStart
                }), e.addMapTo("fe_time", "").mapFrom(function(t) {
                    return t.data.loadEventEnd - t.data.responseStart
                }), e.addMapTo("fe_dom_content_loaded", "").mapFrom(function(t) {
                    return t.data.domContentLoadedEventStart - t.data.navigationStart
                }), e
            }

            function o(t) {
                var e = t.getOrCreateMap(i);
                return e.addMapTo("type", "website_performance"), e.addMapTo("kind", "custom_timer"), e.addMapTo("platform", "").mapFrom("data.page.platform"), e.addMapTo("country", "").mapFrom("data.page.country"), e.addMapTo("buzz_id", "").mapFrom("data.page.post.id"), e.addMapTo("mark_name", "").mapFrom("data.markName"), e.addMapTo("mark_value", "").mapFrom("data.markValue"), e
            }
        },
        41: function(t, e, n) {
            "use strict";
            var a = n(215),
                i = n.n(a),
                r = n(216),
                o = n.n(r),
                s = n(17),
                c = n.n(s);

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.a = {
                forOwn: function(t, e, n) {
                    o.a.apply(this, [t, c()(e, n)])
                },
                queryStringToObject: function(t) {
                    return t ? (-1 !== t.indexOf("?") && (t = t.split("?")[1]), i()(t.split("&").map(function(t) {
                        return t.split("=").map(decodeURIComponent)
                    }))) : {}
                },
                readCookie: function(t) {
                    for (var e, n = document.cookie.split(";"), a = [], i = 0; i < n.length; i++) {
                        if (n[i] = n[i].trim(), "object" === u(t) && t.exec)
                            if (new RegExp(t).test(n[i])) {
                                (e = /(.*)=(.*)$/g.exec(n[i])) && a.push({
                                    name: e[1],
                                    value: e[2]
                                })
                            }
                        if ("string" == typeof t) {
                            var r = RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
                            (e = n[i].match(r)) && a.push({
                                name: t,
                                value: e[1]
                            })
                        }
                    }
                    return a
                },
                setCookie: function(t, e, n) {
                    var a = new Date;
                    a.setTime(a.getTime() + 1e3 * n * 60 * 60 * 24);
                    var i = "".concat(t, "=").concat(encodeURIComponent(e), ";expires=").concat(a.toUTCString(), ";path=/");
                    document.cookie = i
                },
                checkType: function(t, e, n, a) {
                    return u(e) !== t ? n + " has to be a " + t : !0 === a && isEmpty(e) ? n + " has to be not empty" : void 0
                },
                getAppReferrer: function(t, e) {
                    var n = t && t.match(/fban(\/messenger)?|twitter|pinterest/i);
                    if (n) switch (n[0].toLowerCase()) {
                        case "fban/messenger":
                            return "http://msgr.facebook.com";
                        case "fban":
                            if (e && -1 === e.indexOf("m.facebook")) return "http://app.facebook.com";
                            break;
                        default:
                            return "http://app." + n[0].toLowerCase() + ".com"
                    }
                    return ""
                },
                onDocumentVisible: function(t) {
                    document.addEventListener("visibilitychange", function e() {
                        "visible" === document.visibilityState && (t(), document.removeEventListener("visibilitychange", e))
                    })
                },
                rejectOnTimeout: function(t) {
                    return new Promise(function(e, n) {
                        setTimeout(function() {
                            return n({
                                type: "timeout",
                                msg: "".concat(t, "ms timeout exceeded")
                            })
                        }, t)
                    })
                }
            }
        },
        43: function(t, e, n) {
            "use strict";

            function a(t, e, n) {
                var a, i, r, o, s, c, u;
                for (this.version = "1.0.1", this.minAlphabetLength = 16, this.sepDiv = 3.5, this.guardDiv = 12, this.errorAlphabetLength = "error: alphabet must contain at least X unique characters", this.errorAlphabetSpace = "error: alphabet cannot contain spaces", this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", this.seps = "cfhistuCFHISTU", this.minHashLength = parseInt(e, 10) > 0 ? e : 0, this.salt = "string" == typeof t ? t : "", "string" == typeof n && (this.alphabet = n), a = "", i = 0, o = this.alphabet.length; i !== o; i++) - 1 === a.indexOf(this.alphabet[i]) && (a += this.alphabet[i]);
                if (this.alphabet = a, this.alphabet.length < this.minAlphabetLength) throw this.errorAlphabetLength.replace("X", this.minAlphabetLength);
                if (-1 !== this.alphabet.search(" ")) throw this.errorAlphabetSpace;
                for (i = 0, o = this.seps.length; i !== o; i++) - 1 === (r = this.alphabet.indexOf(this.seps[i])) ? this.seps = this.seps.substr(0, i) + " " + this.seps.substr(i + 1) : this.alphabet = this.alphabet.substr(0, r) + " " + this.alphabet.substr(r + 1);
                this.alphabet = this.alphabet.replace(/ /g, ""), this.seps = this.seps.replace(/ /g, ""), this.seps = this.consistentShuffle(this.seps, this.salt), (!this.seps.length || this.alphabet.length / this.seps.length > this.sepDiv) && (1 === (s = Math.ceil(this.alphabet.length / this.sepDiv)) && s++, s > this.seps.length ? (c = s - this.seps.length, this.seps += this.alphabet.substr(0, c), this.alphabet = this.alphabet.substr(c)) : this.seps = this.seps.substr(0, s)), this.alphabet = this.consistentShuffle(this.alphabet, this.salt), u = Math.ceil(this.alphabet.length / this.guardDiv), this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, u), this.seps = this.seps.substr(u)) : (this.guards = this.alphabet.substr(0, u), this.alphabet = this.alphabet.substr(u))
            }
            a.prototype.encode = function() {
                var t, e, n = Array.prototype.slice.call(arguments);
                if (!n.length) return "";
                for (n[0] instanceof Array && (n = n[0]), t = 0, e = n.length; t !== e; t++)
                    if ("number" != typeof n[t] || n[t] % 1 != 0 || n[t] < 0) return "";
                return this._encode(n)
            }, a.prototype.decode = function(t) {
                return t.length && "string" == typeof t ? this._decode(t, this.alphabet) : []
            }, a.prototype.encodeHex = function(t) {
                var e, n, a;
                if (t = t.toString(), !/^[0-9a-fA-F]+$/.test(t)) return "";
                for (e = 0, n = (a = t.match(/[\w\W]{1,12}/g)).length; e !== n; e++) a[e] = parseInt("1" + a[e], 16);
                return this.encode.apply(this, a)
            }, a.prototype.decodeHex = function(t) {
                var e, n, a = [],
                    i = this.decode(t);
                for (e = 0, n = i.length; e !== n; e++) a += i[e].toString(16).substr(1);
                return a
            }, a.prototype._encode = function(t) {
                var e, n, a, i, r, o, s, c, u, d, l, p = this.alphabet,
                    f = t.length,
                    h = 0;
                for (a = 0, i = t.length; a !== i; a++) h += t[a] % (a + 100);
                for (n = e = p[h % p.length], a = 0, i = t.length; a !== i; a++) r = t[a], o = n + this.salt + p, p = this.consistentShuffle(p, o.substr(0, p.length)), e += s = this.hash(r, p), a + 1 < f && (c = (r %= s.charCodeAt(0) + a) % this.seps.length, e += this.seps[c]);
                for (e.length < this.minHashLength && (u = (h + e[0].charCodeAt(0)) % this.guards.length, (e = this.guards[u] + e).length < this.minHashLength && (u = (h + e[2].charCodeAt(0)) % this.guards.length, e += this.guards[u])), d = parseInt(p.length / 2, 10); e.length < this.minHashLength;)(l = (e = (p = this.consistentShuffle(p, p)).substr(d) + e + p.substr(0, d)).length - this.minHashLength) > 0 && (e = e.substr(l / 2, this.minHashLength));
                return e
            }, a.prototype._decode = function(t, e) {
                var n, a, i, r, o = [],
                    s = 0,
                    c = new RegExp("[" + this.guards + "]", "g"),
                    u = t.replace(c, " "),
                    d = u.split(" ");
                if (3 !== d.length && 2 !== d.length || (s = 1), void 0 !== (u = d[s])[0]) {
                    for (n = u[0], u = u.substr(1), c = new RegExp("[" + this.seps + "]", "g"), s = 0, a = (d = (u = u.replace(c, " ")).split(" ")).length; s !== a; s++) i = d[s], r = n + this.salt + e, e = this.consistentShuffle(e, r.substr(0, e.length)), o.push(this.unhash(i, e));
                    this._encode(o) !== t && (o = [])
                }
                return o
            }, a.prototype.consistentShuffle = function(t, e) {
                var n, a, i, r, o, s;
                if (!e.length) return t;
                for (r = t.length - 1, o = 0, s = 0; r > 0; r--, o++) s += n = e[o %= e.length].charCodeAt(0), i = t[a = (n + o + s) % r], t = (t = t.substr(0, a) + t[r] + t.substr(a + 1)).substr(0, r) + i + t.substr(r + 1);
                return t
            }, a.prototype.hash = function(t, e) {
                var n = "",
                    a = e.length;
                do {
                    n = e[t % a] + n, t = parseInt(t / a, 10)
                } while (t);
                return n
            }, a.prototype.unhash = function(t, e) {
                var n, a = 0;
                for (n = 0; n < t.length; n++) a += e.indexOf(t[n]) * Math.pow(e.length, t.length - n - 1);
                return a
            }, n.d(e, "b", function() {
                return i
            }), n.d(e, "a", function() {
                return r
            });
            var i = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.salt,
                        i = void 0 === n ? null : n,
                        r = e.length;
                    return new a(i, void 0 === r ? 32 : r).encode(t)
                },
                r = function(t) {
                    var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).salt;
                    return new a(void 0 === e ? null : e).decode(t)[0]
                }
        },
        468: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(4),
                i = n.n(a),
                r = {
                    Core: n(213).a
                },
                o = n(83),
                s = n(3),
                c = n(30),
                u = n.n(c);
            var d = function(t) {
                this.defaultConfig = {
                    start: "@",
                    end: ";",
                    separator: ":",
                    objectPropertySeparator: ",",
                    objectStart: "{",
                    objectEnd: "}",
                    arrayStart: "[",
                    arrayEnd: "]",
                    parts: {
                        action: "a",
                        description: "d",
                        location: "l",
                        data: "e",
                        options: "o"
                    }
                }, this.config = t || this.defaultConfig, this.parse = function(t) {
                    var e = {},
                        n = t.getAttribute("data-bfa");
                    return "" === (e = null === n || "" === n ? {
                        action: "",
                        location: "",
                        description: "",
                        data: {},
                        options: {}
                    } : this.processAttribute(n)).location && (e.location = this.findLocation(t.parentElement)), e.action = this.grabDataSource(e.action), e.location = this.grabDataSource(e.location), e.description = this.grabDataSource(e.description), e
                }, this.processAttribute = function(t) {
                    var e = [];
                    for (var n in this.config.parts)
                        if (this.config.parts.hasOwnProperty(n)) {
                            var a = t.indexOf(this.config.start + this.config.parts[n] + this.config.separator);
                            a > -1 && e.push({
                                part: n,
                                idx: a
                            })
                        }
                    e = e.sort(function(t, e) {
                        return t.idx < e.idx ? -1 : t.idx === e.idx ? 0 : 1
                    });
                    for (var i = {
                            action: "",
                            location: "",
                            description: "",
                            data: "",
                            options: ""
                        }, r = 0; r < e.length; r++) r < e.length - 1 ? i[e[r].part] = t.substring(e[r].idx, e[r + 1].idx) : i[e[r].part] = t.substring(e[r].idx);
                    for (var o in i) i.hasOwnProperty(o) && (i[o] = i[o].replace(this.config.start + this.config.parts[o] + this.config.separator, "").trim(), i[o][i[o].length - 1] === this.config.end && (i[o] = i[o].substring(0, i[o].length - 1)));
                    return i.data = this.convertToObject(i.data), i.options = this.convertToObject(i.options), i
                }, this.findLocation = function(t) {
                    for (; null !== t && t.getAttribute;) {
                        var e = t.getAttribute("data-bfa");
                        if (null !== e && "" !== e) {
                            var n = this.processAttribute(e);
                            if ("" === n.location) {
                                t = t.parentElement;
                                continue
                            }
                            return n.location
                        }
                        t = t.parentElement
                    }
                    return ""
                }, this.objectParseMode = {
                    propertyName: 1,
                    propertyValue: 2,
                    propertyArray: 4
                }, this.convertToObject = function(t) {
                    var e = {};
                    if ("string" != typeof(t = t.trim().replace('"', "").replace("'", "")) || 0 !== t.indexOf(this.defaultConfig.objectStart) || t.indexOf(this.defaultConfig.objectEnd) !== t.length - 1) return e;
                    for (var n = "", a = "", i = "", r = this.objectParseMode.propertyName, o = 1; o < t.length - 1; o++)
                        if (t[o] !== this.defaultConfig.separator || r !== this.objectParseMode.propertyName) switch (r) {
                            case this.objectParseMode.propertyArray:
                                if (a || (a = []), t[o] === this.defaultConfig.arrayEnd) {
                                    a.push(i.trim()), e[n.trim()] = a, n = "", i = "", a = "", r = this.objectParseMode.propertyName;
                                    break
                                }
                                if (t[o] === this.defaultConfig.objectPropertySeparator) {
                                    a.push(i), i = "";
                                    break
                                }
                                i += t[o];
                                break;
                            case this.objectParseMode.propertyValue:
                                t[o] === this.defaultConfig.objectPropertySeparator || o === t.length - 2 ? (e[n.trim()] = (a + (t[o] !== this.defaultConfig.objectPropertySeparator ? t[o] : "")).trim(), n = "", a = "", r = this.objectParseMode.propertyName) : a += t[o];
                                break;
                            case this.objectParseMode.propertyName:
                                t[o] !== this.defaultConfig.objectPropertySeparator && (n += t[o])
                        } else t[o + 1] && t[o + 1] === this.defaultConfig.arrayStart ? (r = this.objectParseMode.propertyArray, o++) : r = this.objectParseMode.propertyValue;
                    return e
                }, this.grabDataSource = function(t) {
                    if (t.indexOf("source:") > -1) {
                        var e = t.replace("source:", "").trim();
                        if (e && window) {
                            for (var n = window, a = e.split("."), i = a.pop(), r = 0; r < a.length; r++) n = n[a[r]];
                            var o = n[i];
                            if (o) return o()
                        }
                    }
                    return t
                }
            };
            var l = function() {
                    var t = this;
                    this.decodeURL = function(t) {
                        if (!t) return "";
                        var e;
                        try {
                            e = decodeURIComponent(t)
                        } catch (n) {
                            e = t
                        }
                        return e
                    }, this.parse = function(e, n) {
                        var a = n.url,
                            i = t.getAffiliate(a);
                        return {
                            affiliate: i,
                            campaign: t.getCampaign(a),
                            price: t.getPrice(e),
                            redirectUrl: t.getRedirect(a, i)
                        }
                    }, this.getAffiliate = function(e) {
                        var n, a = {
                            Amazon: /^https?:\/\/aax-us-east\.amazon-adsystem\.com/,
                            ASOS: /^https?:\/\/[^\/]+\.asosconnect\.com.+/,
                            AWIN: /^https?:\/\/www\.awin1\.com/,
                            CJ: /^https?:\/\/www\.anrdoezrs\.net/,
                            "Impact Radius": /^https?:\/\/[^\/]+\.sjv\.io/,
                            Pepperjam: /^https?:\/\/www\.pjatr\.com/,
                            Rakuten: /^https?:\/\/(click\.)?linksynergy(\.[^\.]+)?\.com/,
                            ShareASale: /^https?:\/\/shareasale\.com/,
                            Shopify: /^https?:\/\/ref\.buybuzzfeed\.com/
                        };
                        return Object.keys(a).some(function(t) {
                            return a[t].test(e) && (n = t), n
                        }), n || t.getDomain(e)
                    }, this.getCampaign = function(e) {
                        var n = t.decodeURL(e).match(/((afftrack|clickref|aff_sub|subid1|campid|u1|sid)(\/|=))([^(&|#)]+)/i);
                        return n && n.length > 4 ? n[4] : void 0
                    }, this.getPrice = function(t) {
                        for (var e, n, a, i = t; !a && !/content-wrapper|\bsubbuzz\b/.test(i.className);) {
                            var r = i.parentNode,
                                o = r && r.innerText.match(/(\$|£)((?:\d|,)*\.?\d+)/);
                            n = o && o.length > 2 && Number(o[2].replace(/,/g, "")), a = o && o[1], i = r
                        }
                        return a && (e = {
                            value: n,
                            currency: {
                                $: "USD",
                                "£": "GBP"
                            }[a]
                        }), e
                    }, this.getRedirect = function(e, n) {
                        var a;
                        switch (n) {
                            case "Amazon":
                            case "CJ":
                                for (var i = e, r = /\/(https?:\/\/(.+))$/;
                                    (a = i.match(r)) && a.length > 1;) i = a[1];
                                if (i !== e) return i;
                                break;
                            case "ShareASale":
                                if ((a = e.match(/(\?|&)(urllink)=([^(&|$|#)]+)/)) && a.length > 3) return t.decodeURL(a[3]);
                                break;
                            default:
                                if ((a = e.match(/(\?|&)(murl|url|u|p)=([^(&|$|#)]+)/)) && a.length > 3) return t.decodeURL(a[3])
                        }
                    }, this.getDomain = function(t) {
                        var e = t.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                        return e ? e[1] : void 0
                    }
                },
                p = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");

            function f(t) {
                if (null === t || void 0 === t || !("string" == typeof t || t instanceof String)) return null;
                var e = t.match(p);
                return {
                    url: e[0] ? e[0] : "",
                    scheme: e[2] ? e[2] : "",
                    host: e[4] ? e[4] : "",
                    path: e[5] ? e[5] : "",
                    cleanedPath: e[5] ? e[5] : "",
                    query: e[7] ? e[7] : "",
                    fragment: e[9] ? e[9] : ""
                }
            }

            function h(t) {
                return !(t.scheme.length > 0 && t.host.length > 0 && -1 === t.host.indexOf("buzzfeed.com") || 0 === t.url.indexOf("javascript:;"))
            }

            function g(t) {
                return !(!t.host || !t.scheme || t.host.indexOf("buzzfeed.com") > -1 || -1 === t.scheme.indexOf("http"))
            }

            function m(t) {
                return t.path + (t.query ? "?" + t.query : "")
            }

            function v(t) {
                return t.url
            }

            function b(t) {
                var e = f(t);
                return null === e ? "" : g(e) ? v(e) : h(e) ? m(e) : ""
            }

            function y(t) {
                return !(t && t.ignore instanceof Array) || -1 === t.ignore.indexOf("bfaBinder") && -1 === t.ignore.indexOf("all") || t.force instanceof Array && -1 !== t.force.indexOf("bfaBinder")
            }
            var w = {
                ATagWithInternalLinkHandler: function(t, e) {
                    if (null === t || "A" !== t.nodeName || t.hasAttribute("data-bfa")) return !1;
                    var n = f(t.getAttribute("href"));
                    if (null === n || !h(n)) return !1;
                    var a = ["track/click/Nav-Link", {
                        t: "click",
                        n: "Nav-Link",
                        l: (new d).findLocation(t),
                        data: {
                            url: m(n)
                        }
                    }];
                    return e && window[e] instanceof Function && window[e].apply(this, a), !0
                },
                ATagWithExternalLinkHandler: function(t, e) {
                    if (null === t || "A" !== t.nodeName || t.hasAttribute("data-bfa")) return !1;
                    var n = f(t.getAttribute("href"));
                    if (!n || !g(n)) return !1;
                    var a = {
                        t: "click",
                        n: "Exit-Link",
                        l: (new d).findLocation(t),
                        data: {
                            url: v(n),
                            anchorDesc: t.innerHTML
                        }
                    };
                    if (t.hasAttribute("data-affiliate")) {
                        var i = new l;
                        a.data = Object.assign(a.data, i.parse(t, a.data))
                    }
                    var r = ["track/click/Exit-Link", a];
                    return e && window[e] instanceof Function && window[e].apply(this, r), !0
                },
                ATagDefaultHandler: function(t, e, n) {
                    if (null === t || "A" !== t.nodeName || !t.hasAttribute("data-bfa")) return !1;
                    var a = (new d).parse(t);
                    if (!y(a.options)) return !1;
                    a.data.url = b(t.getAttribute("href"));
                    var i = ["track/" + n + "/" + a.action, {
                        t: n,
                        n: a.action,
                        l: a.location,
                        d: a.description,
                        data: a.data,
                        opt: a.options
                    }];
                    return e && window[e] instanceof Function && window[e].apply(this, i), !0
                },
                SelectTagChangedClickHandler: function(t, e) {
                    if (null === t || "SELECT" !== t.nodeName) return !1;
                    var n = t.options[t.selectedIndex];
                    if (!n) return !1;
                    if (!n.hasAttribute("data-bfa")) return !1;
                    var a = (new d).parse(n);
                    if (!y(a.options)) return !1;
                    n.hasAttribute("data-href") && (a.data.url = b(n.getAttribute("data-href")));
                    var i = ["track/click/" + a.action, {
                        t: "click",
                        n: a.action,
                        l: a.location,
                        d: a.description,
                        data: a.data,
                        opt: a.options
                    }];
                    return e && window[e] instanceof Function && window[e].apply(this, i), !0
                },
                DefaultHandler: function(t, e, n) {
                    if (null === t || !t.hasAttribute("data-bfa")) return !1;
                    var a = (new d).parse(t);
                    if (!y(a.options)) return !1;
                    var i = ["track/" + n + "/" + a.action, {
                        t: n,
                        n: a.action,
                        l: a.location,
                        d: a.description,
                        data: a.data,
                        opt: a.options
                    }];
                    return e && window[e] instanceof Function && window[e].apply(this, i), !0
                }
            };
            var k = function(t, e) {
                this.events = [], this.matches = document.documentElement.matches || document.documentElement.webkitMatchesSelector || document.documentElement.mozMatchesSelector || document.documentElement.oMatchesSelector || document.documentElement.msMatchesSelector, this.init = function() {
                    this.processMapping(), this.subscribeForEvents()
                }, this.processMapping = function() {
                    for (var e in t)
                        if (t.hasOwnProperty(e))
                            for (var n = t[e], a = 0; a < n.length; a++) n[a].trackMethod = e, this.events.push(n[a])
                }, this.subscribeForEvents = function() {
                    var t = document.body || document.documentElement,
                        e = this;
                    this.events = this.events.map(function(n) {
                        return n.handler = e.getHandler(), t.addEventListener(n.event, n.handler), n
                    })
                }, this.getHandler = function() {
                    var t = this;
                    return function(e) {
                        if (!e.bfaHandled && e.target)
                            for (var n = e.target; n;) {
                                for (var a = 0; a < t.events.length; a++) {
                                    var i = t.events[a];
                                    if (n.nodeType && 9 !== n.nodeType && i.event === e.type && t.matches.call(n, i.selector)) {
                                        var r = i.options ? i.options.handlers : null;
                                        t.trackElement(n, i.trackMethod, r), e.bfaHandled = !0;
                                        break
                                    }
                                }
                                if (e.bfaHandled) break;
                                n = n.parentNode
                            }
                    }
                }, this.trackElement = function(t, n, a) {
                    if (a)
                        for (var i = 0; i < a.length && !w[a[i]](t, e, n); i++);
                    else(0, w.DefaultHandler)(t, e, n)
                }, this.disable = function() {
                    for (var t = document.body || document.documentElement, e = 0; e < this.events.length; e++) t.removeEventListener(this.events[e].event, this.events[e].handler)
                }
            };
            var _ = function(t, e) {
                this.events = [], this.init = function() {
                    this.processMapping(), this.subscribeForEvents()
                }, this.processMapping = function() {
                    for (var e in t)
                        if (t.hasOwnProperty(e))
                            for (var n = t[e], a = 0; a < n.length; a++) n[a].trackMethod = e, this.events.push(n[a])
                }, this.subscribeForEvents = function() {
                    var t = this;
                    this.events = this.events.map(function(e) {
                        var n = document.querySelector(e.selector);
                        if (n) {
                            var a = e.options ? e.options.handlers : null;
                            e.handler = t.getHandler(e.trackMethod, a), n.addEventListener(e.event, e.handler)
                        }
                        return e
                    })
                }, this.getHandler = function(t, e) {
                    var n = this;
                    return function(a) {
                        n.trackElement(this, t, e), a.bfaHandled = !0
                    }
                }, this.trackElement = function(t, n, a) {
                    if (a)
                        for (var i = 0; i < a.length && !w[a[i]](t, e, n); i++);
                    else(0, w.DefaultHandler)(t, e, n)
                }, this.disable = function() {
                    for (var t = 0; t < this.events.length; t++) {
                        var e = document.querySelector(this.events[t].selector);
                        e && e.removeEventListener(this.events[t].event, this.events[t].handler)
                    }
                }
            };
            var T = function(t) {
                this.visibilityProps = {
                    hidden: null,
                    visibilityChange: null
                }, this.trackedByVisibility = !1, this.trackedByUnload = !1;
                var e = this;
                this.init = function() {
                    this.visibilityProps = this.getVisibilityProps(), this.visibilityProps.hidden && this.visibilityProps.visibilityChange && document.addEventListener(this.visibilityProps.visibilityChange, this.visibilityHandler, !1), window.addEventListener("beforeunload", this.unloadHandler, !1), window.addEventListener("unload", this.unloadHandler, !1), window.addEventListener("pagehide", this.unloadHandler, !1)
                }, this.visibilityHandler = function() {
                    document[e.visibilityProps.hidden] || e.trackedByVisibility || (e.trackedByVisibility = !0, window[t].apply(this, ["track/page/exit"]))
                }, this.unloadHandler = function() {
                    e.trackedByUnload || (e.trackedByUnload = !0, window[t].apply(this, ["track/page/exit"]))
                }, this.getVisibilityProps = function() {
                    var t = null,
                        e = null;
                    return void 0 !== document.hidden ? (t = "hidden", e = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", e = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", e = "webkitvisibilitychange"), {
                        hidden: t,
                        visibilityChange: e
                    }
                }
            };
            var M = function(t, e) {
                    this.mapping = t, this.executable = e, this.parser = new d, this.init = function() {
                        var t = this,
                            e = 0,
                            n = setInterval(function() {
                                e >= 10 && clearInterval(n), window.FB && (clearInterval(n), t.processMappings()), e++
                            }, 1e3)
                    }, this.processMappings = function() {
                        if (void 0 !== t)
                            for (var e = 0; e < t.length; e++) "like" === t[e] && this.bindLikes(), "unlike" === t[e] && this.bindDislikes(), "comment" === t[e] && this.bindComments()
                    }, this.bindLikes = function() {
                        var t = this;
                        window.FB.Event.subscribe("edge.create", function(e, n) {
                            if (null !== n && n.getAttribute) {
                                var a = t.parser.parse(n),
                                    i = ["track/click/" + a.action, {
                                        t: "click",
                                        n: a.action,
                                        d: a.description,
                                        l: a.location,
                                        data: a.data,
                                        opt: a.options
                                    }];
                                t.executable && window[t.executable] instanceof Function && window[t.executable].apply(this, i)
                            }
                        })
                    }, this.bindDislikes = function() {
                        var t = this;
                        window.FB.Event.subscribe("edge.remove", function(e, n) {
                            var a = t.parser.parse(n),
                                i = ["track/click/" + a.action, {
                                    t: "click",
                                    n: a.action,
                                    d: a.description,
                                    l: a.location,
                                    data: a.data,
                                    opt: a.options
                                }];
                            t.executable && window[t.executable] instanceof Function && window[t.executable].apply(this, i)
                        })
                    }, this.bindComments = function() {
                        var t = this;
                        window.FB.Event.subscribe("comment.create", function() {
                            t.executable && window[t.executable] instanceof Function && window[t.executable].apply(this, ["track/click/Submit", {
                                t: "click",
                                n: "Submit",
                                d: "Facebook",
                                l: "Contributions"
                            }])
                        })
                    }
                },
                x = n(42),
                C = n.n(x);
            var F = function(t, e) {
                this.options = t || {}, this.executable = e, this.points = [], this.init = function() {
                    this.fillCheckPoints()
                }, this.track = function() {
                    var t, e, n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                        a = document.documentElement.clientHeight + 1,
                        i = document.documentElement.clientTop || document.body.clientTop || 0,
                        r = n + a,
                        o = 0;
                    for (t = 0; t < this.options.bottomBounds.length && !(e = document.querySelector(this.options.bottomBounds[t])); t++);
                    if (e) {
                        var s = e.getBoundingClientRect().top + n - i;
                        r >= s && o < 100 && (o = 100), r <= s && (o = r / s * 100)
                    }
                    for (t = 0; t < this.options.checkpoints.length; t++)
                        if (this.points[t].percentage <= o && !this.points[t].passed) {
                            this.points[t].passed = !0;
                            var c = ["track/scroll/post", {
                                t: "scroll",
                                n: "post",
                                d: this.points[t].percentage.toString()
                            }];
                            this.executable && window[this.executable] instanceof Function && window[this.executable].apply(this, c)
                        }
                }, this.fillCheckPoints = function() {
                    for (var t = 0; t < this.options.checkpoints.length; t++) this.points.push({
                        percentage: this.options.checkpoints[t],
                        passed: !1
                    })
                }
            };
            var S = function(t, e) {
                this.options = t || {}, this.executable = e, this.points = [], this.init = function() {
                    this.fillCheckPoints()
                }, this.track = function() {
                    if (this.options.elementMode.element && this.options.elementMode.expected) {
                        var t, e = window.pageYOffset + document.documentElement.clientHeight + 1,
                            n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                            a = document.documentElement.clientTop || document.body.clientTop || 0,
                            i = document.querySelectorAll(this.options.elementMode.element),
                            r = 0;
                        for (t = 0; t < i.length; t++) i[t].getBoundingClientRect().top + n - a <= e && r++;
                        var o = r / this.options.elementMode.expected * 100,
                            s = null;
                        for (t = 0; t < this.options.bottomBounds.length && !(s = document.querySelector(this.options.bottomBounds[t])); t++);
                        for (s && e >= s.getBoundingClientRect().top + n - a && o < 100 && (o = 100), t = 0; t < this.options.checkpoints.length; t++)
                            if (this.points[t].percentage <= o && !this.points[t].passed) {
                                this.points[t].passed = !0;
                                var c = ["track/scroll/post", {
                                    t: "scroll",
                                    n: "post",
                                    d: this.points[t].percentage.toString()
                                }];
                                this.executable && window[this.executable] instanceof Function && window[this.executable].apply(this, c)
                            }
                    }
                }, this.fillCheckPoints = function() {
                    for (var t = 0; t < this.options.checkpoints.length; t++) this.points.push({
                        percentage: this.options.checkpoints[t],
                        passed: !1
                    })
                }
            };
            var O = function(t, e) {
                    this.options = t || {}, this.executable = e, this.scrollHandler = null, this.keyPressHandler = null, this.init = function() {
                        window && t && e && (this.scrollHandler = this.getScrollHandler(), this.keyPressHandler = this.getKeyPressScrollHandler(), this.scrollHandler && window.addEventListener("scroll", C()(this.scrollHandler, 200)), this.keyPressHandler && document.addEventListener("keydown", C()(this.keyPressHandler, 200)))
                    }, this.getScrollHandler = function() {
                        var e = null,
                            n = null;
                        return this.options.pixelMode.enabled && (e = new F(this.options, this.executable)).init(), this.options.elementMode.enabled && (n = new S(this.options, this.executable)).init(),
                            function() {
                                t.elementMode.enabled && document.querySelectorAll(t.elementMode.element).length !== t.elementMode.expected ? n.track() : t.pixelMode.enabled && e.track()
                            }
                    }, this.getKeyPressScrollHandler = function() {
                        var t = this;
                        return function(e) {
                            if (!(32 === e.which || 33 === e.which || 34 === e.which || 38 === e.which || 40 === e.which || e.ctrlKey && 35 === e.which || e.ctrlKey && 36 === e.which && t.scrollHandler)) return null;
                            t.scrollHandler()
                        }
                    }
                },
                E = new d,
                I = .5,
                P = function(t, e) {
                    var n = E.parse(e);
                    t("track/scroll/impression", {
                        t: "scroll",
                        n: n.action,
                        l: n.location,
                        d: n.description,
                        data: n.data,
                        opt: n.options
                    })
                };
            var A = function(t, e) {
                var n = this;
                this.options = t || {}, this.executable = e, this.init = function() {
                    t && t.locators && e && "function" == typeof window[e] && (this.observedElements = [], this.elementQuery = this.options.locators.join(","), this.updateTargets())
                }, this.updateTargets = function() {
                    var t = Array.from(document.querySelectorAll(n.elementQuery)),
                        e = t.filter(function(t) {
                            return n.observedElements.indexOf(t) < 0
                        });
                    n.observedElements = t, e.length && n.observeElements(e)
                }, this.onObserve = function(t, e) {
                    t.forEach(function(t) {
                        t.isIntersecting && (P(window[n.executable], t.target), e.unobserve(t.target))
                    })
                }, this.observeElements = function(t) {
                    var e = new IntersectionObserver(n.onObserve, {
                        threshold: I
                    });
                    t.forEach(function(t) {
                        return e.observe(t)
                    })
                }
            };
            var D = function(t) {
                this.inited = !1;
                var e = this;
                window.bfaYoutubeIframePlayerTracking || (window.bfaYoutubeIframePlayerTracking = function(t) {
                    e.processVideo(t)
                }), this.init = function() {
                    this.inited = !0
                }, this.processVideo = function(n) {
                    var a = n.getIframe(),
                        i = a.getAttribute("id"),
                        r = a.getAttribute("data-published"),
                        o = a.getAttribute("src");
                    n.addEventListener("onStateChange", function(n) {
                        if (e.inited) {
                            var a = {
                                id: i,
                                duration: n.target.getDuration(),
                                currentTime: n.target.getCurrentTime(),
                                published: r,
                                url: n.target.getVideoUrl(),
                                source: "youtube",
                                type: "embed"
                            };
                            switch (n.data) {
                                case 1:
                                    window[t].apply(this, ["track/video/play", {
                                        data: a
                                    }]);
                                    break;
                                case 2:
                                    window[t].apply(this, ["track/video/pause", {
                                        data: a
                                    }]);
                                    break;
                                case 0:
                                    window[t].apply(this, ["track/video/finish", {
                                        data: a
                                    }]);
                                    break;
                                case 3:
                                    window[t].apply(this, ["track/video/startedBuffering", {
                                        data: a
                                    }])
                            }
                        }
                    }), n.addEventListener("onError", function(n) {
                        if (e.inited) {
                            var a = {
                                id: i,
                                published: r,
                                url: o,
                                source: "youtube",
                                errorCode: n.data
                            };
                            window[t].apply(this, ["track/video/error", {
                                data: a
                            }])
                        }
                    })
                }
            };
            var B = function(t) {
                this.inited = !1;
                var e = this;

                function n(t) {
                    /^https?:\/\/player.vimeo.com/.test(t.origin) && e.processVideo(t)
                }
                window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n, !1), this.init = function() {
                    this.inited = !0
                }, this.processVideo = function(n) {
                    var a = JSON.parse(n.data);
                    if ("ready" === a.event && this.registerListeners(a.player_id), this.inited) switch (a.event) {
                        case "play":
                            window[t].apply(this, ["track/video/play", {
                                data: e.getVideoData(a)
                            }]);
                            break;
                        case "pause":
                            window[t].apply(this, ["track/video/pause", {
                                data: e.getVideoData(a)
                            }]);
                            break;
                        case "finish":
                            window[t].apply(this, ["track/video/finish", {
                                data: e.getVideoData(a)
                            }])
                    }
                }, this.registerListeners = function(t) {
                    var e = document.getElementById(t);
                    e.contentWindow.postMessage(JSON.stringify({
                        method: "addEventListener",
                        value: "play"
                    }), "*"), e.contentWindow.postMessage(JSON.stringify({
                        method: "addEventListener",
                        value: "pause"
                    }), "*"), e.contentWindow.postMessage(JSON.stringify({
                        method: "addEventListener",
                        value: "finish"
                    }), "*")
                }, this.getVideoData = function(t) {
                    var e = document.getElementById(t.player_id);
                    return {
                        id: t.player_id,
                        duration: t.data.duration,
                        currentTime: t.data.seconds,
                        published: e.getAttribute("data-published") || e.parentElement.getAttribute("data-published"),
                        url: e.getAttribute("src"),
                        source: "vimeo"
                    }
                }
            };
            var N = function(t) {
                var e = this;
                this.initCounter = 0, this.init = function() {
                    window.FB ? window.FB.Event.subscribe("xfbml.ready", function(t) {
                        "video" === t.type && e.processVideo(t)
                    }) : this.initCounter < 10 && (this.initCounter++, setTimeout(function() {
                        e.init()
                    }, 500))
                }, this.processVideo = function(e) {
                    var n = document.getElementById(e.id),
                        a = e.instance,
                        i = {
                            id: e.id,
                            published: n.getAttribute("data-published"),
                            url: n.getAttribute("data-video-url"),
                            source: "facebook",
                            type: "embed"
                        };
                    a.subscribe("startedPlaying", function() {
                        i.duration = e.instance.getDuration(), i.currentTime = e.instance.getCurrentPosition(), window[t].apply(this, ["track/video/play", {
                            data: i
                        }])
                    }), a.subscribe("paused", function() {
                        i.duration = e.instance.getDuration(), i.currentTime = e.instance.getCurrentPosition(), window[t].apply(this, ["track/video/pause", {
                            data: i
                        }])
                    }), a.subscribe("finishedPlaying", function() {
                        i.duration = e.instance.getDuration(), i.currentTime = e.instance.getCurrentPosition(), window[t].apply(this, ["track/video/finish", {
                            data: i
                        }])
                    }), a.subscribe("startedBuffering", function() {
                        i.duration = e.instance.getDuration(), i.currentTime = e.instance.getCurrentPosition(), window[t].apply(this, ["track/video/startedBuffering", {
                            data: i
                        }])
                    }), a.subscribe("finishedBuffering", function() {
                        i.duration = e.instance.getDuration(), i.currentTime = e.instance.getCurrentPosition(), window[t].apply(this, ["track/video/finishedBuffering", {
                            data: i
                        }])
                    }), a.subscribe("error", function() {
                        window[t].apply(this, ["track/video/error", {
                            data: i
                        }])
                    })
                }
            };
            var R = function() {
                var t;
                this.domBinders = [], this.socialBinders = [], this.scrollBinders = [], this.generalBinders = [], this.videoBinders = [], this.parser = new d, this.init = function() {
                    for (t = 0; t < this.domBinders.length; t++) this.domBinders[t].init();
                    for (t = 0; t < this.socialBinders.length; t++) this.socialBinders[t].init();
                    for (t = 0; t < this.scrollBinders.length; t++) this.scrollBinders[t].init();
                    for (t = 0; t < this.generalBinders.length; t++) this.generalBinders[t].init();
                    for (t = 0; t < this.videoBinders.length; t++) this.videoBinders[t].init()
                }, this.trigger = function(t) {
                    "updateTargets" === t.type && this.scrollBinders.forEach(function(t) {
                        "function" == typeof t.updateTargets && t.updateTargets()
                    })
                }
            };

            function z() {}
            z.prototype.buildConfig = {
                bfaFunctionName: null,
                domBinder: {
                    delegatedMapping: null,
                    directMapping: null
                },
                generalBinder: {
                    pageExitBinder: !1
                },
                inViewImpressionBinder: {
                    enabled: !1,
                    locators: []
                },
                scrollBinder: {
                    pixelMode: {
                        enabled: !1
                    },
                    elementMode: {
                        enabled: !1,
                        element: "",
                        expected: 0
                    },
                    checkpoints: [],
                    bottomBounds: []
                },
                socialBinder: {
                    facebookMapping: null
                },
                videoBinder: {
                    youtube: !1,
                    vimeo: !1,
                    facebook: !1
                }
            }, z.prototype.useDomDelegatedBinder = function(t) {
                return this.buildConfig.domBinder.delegatedMapping = t, this
            }, z.prototype.useDomDirectBinder = function(t) {
                return this.buildConfig.domBinder.directMapping = t, this
            }, z.prototype.usePageExitBinder = function() {
                return this.buildConfig.generalBinder.pageExitBinder = !0, this
            }, z.prototype.useInViewImpressionBinder = function(t) {
                return this.buildConfig.inViewImpressionBinder.enabled = !0, this.buildConfig.inViewImpressionBinder.locators = t, this
            }, z.prototype.useScrollPixelModeBinder = function() {
                return this.buildConfig.scrollBinder.pixelMode.enabled = !0, this
            }, z.prototype.useScrollElementsModeBinder = function(t, e) {
                return this.buildConfig.scrollBinder.elementMode.enabled = !0, this.buildConfig.scrollBinder.elementMode.element = t, this.buildConfig.scrollBinder.elementMode.expected = e, this
            }, z.prototype.useSocialBinder = function(t) {
                return this.buildConfig.socialBinder.mapping = t, this
            }, z.prototype.setBottomBoundElements = function(t) {
                return this.buildConfig.bottomBounds = t, this
            }, z.prototype.setPercentageCheckpoints = function(t) {
                this.scrollBinder.checkpoints = t
            }, z.prototype.useBfaFunction = function(t) {
                this.bfaFunctionName = t
            }, z.prototype.useVideoBinder = function() {
                this.buildConfig.videoBinder.youtube = !0, this.buildConfig.videoBinder.vimeo = !0, this.buildConfig.videoBinder.facebook = !0
            }, z.prototype.build = function() {
                if (!this.buildConfig.bfaFunctionName) return null;
                var t = new R;
                if (this.buildConfig.domBinder.delegatedMapping) {
                    var e = new k(this.buildConfig.domBinder.delegatedMapping, this.buildConfig.bfaFunctionName);
                    t.domBinders.push(e)
                }
                if (this.buildConfig.domBinder.directMapping) {
                    var n = new _(this.buildConfig.domBinder.directMapping, this.buildConfig.bfaFunctionName);
                    t.domBinders.push(n)
                }
                if (this.buildConfig.generalBinder.pageExitBinder) {
                    var a = new T(this.buildConfig.bfaFunctionName);
                    t.generalBinders.push(a)
                }
                if (this.buildConfig.socialBinder.facebookMapping) {
                    var i = new M(this.buildConfig.socialBinder.facebookMapping, this.buildConfig.bfaFunctionName);
                    t.socialBinders.push(i)
                }
                if (this.buildConfig.videoBinder.youtube) {
                    var r = new D(this.buildConfig.bfaFunctionName);
                    t.videoBinders.push(r)
                }
                if (this.buildConfig.videoBinder.vimeo) {
                    var o = new B(this.buildConfig.bfaFunctionName);
                    t.videoBinders.push(o)
                }
                if (this.buildConfig.videoBinder.facebook) {
                    var s = new N(this.buildConfig.bfaFunctionName);
                    t.videoBinders.push(s)
                }
                if (this.buildConfig.scrollBinder.elementMode.enabled || this.buildConfig.scrollBinder.pixelMode.enabled) {
                    var c = new O(this.buildConfig.scrollBinder, this.buildConfig.bfaFunctionName);
                    t.scrollBinders.push(c)
                }
                if (this.buildConfig.inViewImpressionBinder.enabled) {
                    var u = new A({
                        locators: this.buildConfig.inViewImpressionBinder.locators
                    }, this.buildConfig.bfaFunctionName);
                    t.scrollBinders.push(u)
                }
                return t.init(), t
            };
            var L = z;

            function j(t, e) {
                this.settings = e || {}, this._binderBuilder = new L;
                var n = this;
                return t._router.sub("plugin/binder/activate", function(e) {
                    u()(n.settings, e || {}), u()(n._binderBuilder.buildConfig, n.settings), t.domi.onDomReady(function() {
                        var e = n._binderBuilder.build();
                        null !== e && (window.bfaBinder = e, t._router.sub("plugin/binder/trigger", window.bfaBinder.trigger.bind(window.bfaBinder)))
                    })
                }, this, null, !0), {}
            }
            window.bfaBinder = {
                parser: new d
            }, j.defaultId = "binder", j.require = ["domi"];
            var V = j,
                U = n(14),
                q = n.n(U),
                H = n(19),
                Z = n.n(H),
                G = n(32),
                W = n.n(G),
                Q = n(73),
                J = n.n(Q),
                $ = n(23),
                Y = n.n($);

            function X(t, e, n, a, i, r) {
                this.t = t || "", this.n = e || "", this.l = n || "", this.d = a || "", this.data = Y()(i) ? i : {}, this.opt = Y()(r) ? r : {}
            }
            X.tryParse = function(t) {
                var e = i()(t, "t", ""),
                    n = i()(t, "n", "");
                return q()(e) && 0 !== e.length && q()(n) && 0 !== n.length ? new X(e, n, i()(t, "l", ""), i()(t, "d", ""), i()(t, "data", {}), i()(t, "opt", {})) : null
            };
            var K = X,
                tt = {
                    logger: "loggerAppender",
                    sessionStorage: "sessionStorageAppender"
                };

            function et(t, e) {
                e = e || {}, this.defaultSettings = {
                    storageKeyName: "bfa_debugStore",
                    appendersConfig: {}
                }, this.defaultSettings.appendersConfig[t.defs.bfaMode.develop] = [tt.logger], this.defaultSettings.appendersConfig[t.defs.bfaMode.test] = [tt.sessionStorage, tt.logger], this.settings = J()(e, this.defaultSettings), this._bfaMode = t._generalSettings.mode, t._onGeneralSettingsChange.add(function() {
                    this._bfaMode = t._generalSettings.mode
                }, this);
                var n = this;

                function a(e, a) {
                    if (e instanceof K && a) {
                        if (!Z()(n.settings.appendersConfig, n._bfaMode)) return;
                        for (var i = n.settings.appendersConfig[n._bfaMode], r = 0; r < i.length; r++) Z()(n, i[r]) && n[i[r]].trackEvent(this.instanceId, e, a)
                    } else t.log.warn("DebugTracker: can't store event data for " + this.instanceId + ": not valid arguments")
                }

                function i(t) {
                    if (!q()(t) || "" === t) throw new Error("Error occurred on _createDebugTracker call: instanceId arg has to be not empty string");
                    return {
                        instanceId: t,
                        trackEvent: a
                    }
                }
                return this[tt.sessionStorage] = {
                    trackEvent: function(t, e, a) {
                        var i, r = sessionStorage.getItem(n.settings.storageKeyName);
                        i = null === r ? {
                            pageHref: document.location.href
                        } : JSON.parse(r), W()(i[t]) && (i[t] = []), i[t].push({
                            eventType: e.t,
                            eventName: e.n,
                            eventLocation: e.l,
                            eventDescription: e.d,
                            dataObject: a
                        }), sessionStorage.setItem(n.settings.storageKeyName, JSON.stringify(i))
                    }
                }, this[tt.logger] = {
                    trackEvent: function(t, e, n) {
                        this.logger.event(t, e, n)
                    }
                }, this[tt.logger].logger = t.createLogger("DebugTracker_" + tt.logger), t.createDebugTracker = i, {
                    modifySBInstance: function(t) {
                        t.debugTracker = i(t.instanceId)
                    }
                }
            }
            et.defaultId = "debugTracker", et.require = ["generalSettings", "logger"], et.debugTrackerAppenderTypes = tt;
            var nt = et,
                at = n(27),
                it = n.n(at),
                rt = n(31),
                ot = n.n(rt),
                st = n(41);

            function ct(t) {
                this._core = t, this._isDomReady = !1, this._domReady = new ot.a, this._domReady.addOnce(function() {
                    this._isDomReady = !0
                }, this, Number.MAX_VALUE);
                var e = this;
                return this._installDomi = function(t) {
                        t.domi = {
                            onDomReady: function(t, n) {
                                e._isDomReady ? t.call(n) : e._domReady.addOnce(t, n)
                            },
                            loadScript: function(t, e, n, a) {
                                var i = document.createElement("script");
                                i.type = t.type || "text/javascript", i.charset = t.charset || "utf8", i.src = t.src, !1 !== t.async && (i.async = !0), W()(t.attrs) || st.a.forOwn(t.attrs, function(t, e) {
                                    i.setAttribute(e, t)
                                }), it()(e) && (i.onload = function() {
                                    this.onerror = null, this.onload = null, e.apply(a)
                                }), it()(n) && (i.onerror = function() {
                                    this.onerror = null, this.onload = null, n.apply(a)
                                });
                                var r = document.body || document.getElementsByTagName("body")[0];
                                r && r.appendChild(i)
                            }
                        }
                    }, this._installDomi(t),
                    function() {
                        if ("complete" !== document.readyState && "loaded" !== document.readyState && "interactive" !== document.readyState)
                            if (document.addEventListener) document.addEventListener("DOMContentLoaded", e._domReady.dispatch, !1);
                            else if (document.attachEvent) document.attachEvent("onreadystatechange", function() {
                            "complete" === document.readyState && e._domReady.dispatch()
                        });
                        else {
                            var t = window.onload;
                            window.onload = function() {
                                t && t(), e._domReady.dispatch()
                            }
                        } else e._domReady.dispatch()
                    }(), {
                        modifySBInstance: function(t) {
                            e._installDomi(t)
                        }
                    }
            }
            ct.defaultId = "domi";
            var ut = ct,
                dt = n(109),
                lt = n.n(dt),
                pt = n(26),
                ft = n.n(pt),
                ht = n(17),
                gt = n.n(ht),
                mt = n(40),
                vt = n.n(mt),
                bt = n(22);

            function yt(t) {
                var e = {
                    trackingBehavior: bt.a.trackingBehavior.byDefault,
                    extTrackerGlobalName: "fbq",
                    tracker: null,
                    configMapsDelegate: null,
                    extFilesPaths: [],
                    facebookId: "260954170738952",
                    affiliateTrackingFeatureFlag: Promise.resolve(!0)
                };
                this._inited = !1, this._active = !1, this.settings = ft()(t.settings || {}, e), this.generalSettings = t.getGeneralSettings();
                var n = this,
                    a = ["ViewContent", "Search", "Lead", "AddToCart", "AddToWishlist", "InitiateCheckout", "AddPaymentInfo", "Purchase", "CompleteRegistration"];
                this.activate = function() {
                    if (!n._active && n._inited) {
                        if (!this.tracker && this.generalSettings.mode === bt.a.bfaMode.prod) {
                            if (!window[this.settings.extTrackerGlobalName]) return;
                            this.tracker = window[this.settings.extTrackerGlobalName], this.tracker("init", this.settings.facebookId)
                        }
                        this.page && n.user && (this._active = !0, t.moduleActive.dispatch())
                    }
                }, t.onGeneralSettingsChange(function() {
                    n.generalSettings = t.getGeneralSettings()
                }, this), t.onPageReady(function() {
                    n.page = t.getPageInfo(), n.activate()
                }, this), t.onPageChanged(function() {
                    n.page = t.getPageInfo()
                }, this), t.onUserReady(function() {
                    n.user = t.getUserInfo(), n.activate()
                }, this), t.onUserChanged(function() {
                    n.user = t.getUserInfo()
                }, this), this.getEventInfo = function(e, n, a) {
                    var i = t.tryConvertToEventInfo(e, n, a);
                    return t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, i) ? (i.data.page = this.page, i.data.user = this.user, i) : (t.log.warn(t.moduleId + " cannot track current event. Type: " + n + "; Name: " + a + ";"), null)
                }, this._trackDefault = function(e, n) {
                    if (e && null !== n && vt()(n).length > 0) {
                        var i = "";
                        switch ("fbEventName" in n && (i = n.fbEventName, delete n.fbEventName), this.generalSettings.mode) {
                            case bt.a.bfaMode.prod:
                                lt()(a, i) ? this.tracker("track", i, n) : this.tracker("trackCustom", i, n);
                                break;
                            default:
                                t.debugTracker.trackEvent(e, n)
                        }
                    }
                }, this._trackPage = function(e) {
                    if (this._active) {
                        var n = this.getEventInfo(e, "page", "view");
                        if (t.mapper.isExists("track/page/view")) {
                            var a = t.mapper.map("track/page/view", n, {});
                            this._trackDefault(n, a)
                        } else t.log.warn("Mapping for `track/page/view` doesn't exist")
                    } else t.moduleActive.addOnce(gt()(this._trackPage, this, e), this)
                }, t.subOn("track/page/view", this._trackPage, this), this._trackClick = function(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        try {
                            return Promise.resolve(t.apply(this, e))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }
                }(function(e, n) {
                    var a = this;
                    if (a._active) {
                        var r, o, s = a.getEventInfo(e, "click", n.eventName);
                        if (s) {
                            if (t.mapper.isExists("track/click")) {
                                var c = "Exit-Link" !== s.n;
                                return function(t, e, n) {
                                    return n ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t)
                                }(c || a.settings.affiliateTrackingFeatureFlag, function(e) {
                                    if (e) {
                                        var n = t.mapper.map("track/click", s, {});
                                        a._trackDefault(s, n), i()(a.page, "post.flags.ad", !1) && "Share" === s.n && (r = ft()({
                                            n: "Lead"
                                        }, s), o = t.mapper.map("track/click", r, {}), a._trackDefault(r, o))
                                    }
                                }, c)
                            }
                            t.log.warn("Mapping for `track/click` doesn't exist")
                        }
                    } else t.moduleActive.addOnce(gt()(a._trackClick, a, e, n), a)
                }), t.subOn("track/click/{eventName}", this._trackClick, this), this._trackQuiz = function(e, n) {
                    if (this._active) {
                        var a = this.getEventInfo(e, "quiz", n.eventName);
                        if (t.mapper.isExists("track/quiz")) {
                            var i = t.mapper.map("track/quiz", a, {});
                            this._trackDefault(a, i)
                        } else t.log.warn("Mapping for `track/quiz` doesn't exist")
                    } else t.moduleActive.addOnce(gt()(this._trackQuiz, this, e, n), this)
                }, t.subOn("track/quiz/{eventName}", this._trackQuiz, this), this._trackVideo = function(e, n) {
                    if (this._active) {
                        var a = this.getEventInfo(e, "video", n.eventName);
                        if (t.mapper.isExists("track/video")) {
                            var i = t.mapper.map("track/video", a, {});
                            this._trackDefault(a, i)
                        } else t.log.warn("Mapping for `track/video` doesn't exist")
                    } else t.moduleActive.addOnce(gt()(this._trackVideo, this, e, n), this)
                }, t.subOn("track/video/{eventName}", this._trackVideo, this), this._trackAbVariation = function(e, n) {
                    if (this._active) {
                        var a = this.getEventInfo(e, "abtest", n.eventName);
                        if (t.mapper.isExists("track/abtest")) {
                            var i = t.mapper.map("track/abtest", a, {});
                            this._trackDefault(a, i)
                        } else t.log.warn("Mapping for `track/abtest` doesn't exist")
                    } else t.moduleActive.addOnce(gt()(this._trackAbVariation, this, e, n), this)
                }, t.subOn("track/abtest/{abTestName}", this._trackAbVariation, this), this._trackImpression = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/scroll/impression")) {
                            var a = this.getEventInfo(e, "impression", n.eventName),
                                i = t.mapper.map("track/scroll/impression", a, {});
                            this._trackDefault(a, i)
                        } else t.log.warn("Mapping for `track/scroll/impression` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackImpression, this, e, n), this)
                }, t.subOn("track/scroll/impression", this._trackImpression, this), this._declare = function() {
                    var t, e = window;
                    e.fbq || (t = e.fbq = function() {
                        t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments)
                    }, e._fbq || (e._fbq = t), t.push = t, t.loaded = !0, t.version = "2.0", t.queue = [])
                }, this.init = function() {
                    n.settings.configMapsDelegate(t.mapper), n.generalSettings.mode === bt.a.bfaMode.prod ? (n.tracker = n.settings.tracker, !n.tracker && !window[n.extTrackerGlobalName] && n.settings.extFilesPaths && n.settings.extFilesPaths.length > 0 && (n._declare(), t.domi.onDomReady(function() {
                        n.settings.extFilesPaths.forEach(function(e) {
                            t.domi.loadScript({
                                src: e
                            }, n.activate, null, n)
                        })
                    }, n))) : n.tracker = {}, n._inited = !0, t.moduleInited.dispatch(), n.activate()
                }
            }
            yt.defaultId = "FacebookIntegration", yt.require = ["logger", "domi", "pageInfo", "userInfo", "mapper", "trackingUtils", "generalSettings", "debugTracker"];
            var wt = yt,
                kt = n(18),
                _t = n(13),
                Tt = function(t) {
                    var e = _t.a.isXsmall() || _t.a.isSmall() ? "mobile" : "desktop",
                        n = kt.a.getEdition();

                    function a(t) {
                        return function(t) {
                            return -1 !== t.n.indexOf("dfp") && (t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), !0)
                        }(t) && ("display_card" === t.data.type || "dfp_native_video" === t.data.type)
                    }
                    var r = t.getOrCreateMap("track/page/view");
                    r.addMapTo("page", "").mapFrom("data.url"), r.addMapTo("fbEventName").mapFrom(function(t) {
                        return i()(t, "data.url", "").match(/\?p=(\d)/) ? "PageScroll" : "PageView"
                    });
                    var o = t.getOrCreateRouter("track/click"),
                        s = o.createConfigForRoute(function(t) {
                            return "Share" === t.l
                        });
                    s.addMapTo("share", "").mapFrom("d"), s.addMapTo("fbEventName", "Share");
                    var c = t.getOrCreateRouter("track/video").createConfigForRoute(function(t) {
                        return "in_feed" === t.l
                    });
                    c.applyTemplateByName("gaTemplate"), c.addMapTo("action", "").mapFrom("n"), c.addMapTo("label", "").mapFrom("d"), c.addMapTo("value", "").mapFrom(function(t) {
                        var e;
                        return t.opt && (t.opt.dimension5 && screen.orientation && screen.orientation.type && (t.opt.dimension5 = screen.orientation.type.replace("-primary", "")), e = t.opt), e
                    }), c.addMapTo("fbEventName", "Video");
                    var u = t.createMapTemplate("adUnit");
                    u.addMapTo("creative_id", "").mapFrom(function(t) {
                        return t.data.creativeId
                    }), u.addMapTo("unit_type", "").mapFrom(function(t) {
                        return t.data.type
                    }), u.addMapTo("mode", e), u.addMapTo("page_edition", n), u.addMapTo("page_type", "feed"), u.addMapTo("unit", "").mapFrom(function(t) {
                        return t.l
                    });
                    var d = t.getOrCreateRouter("track/scroll/impression").createConfigForRoute(function(t) {
                        return a(t)
                    });
                    d.addMapTo("fbEventName", "UnitImpression"), d.applyTemplateByName("adUnit");
                    var l = o.createConfigForRoute(function(t) {
                        return a(t)
                    });
                    l.addMapTo("fbEventName", "UnitClick"), l.applyTemplateByName("adUnit")
                };

            function Mt(t) {
                var e = {
                    trackingBehavior: t.defs.trackingBehavior.byDefault,
                    extTrackerGlobalName: "ga",
                    googleAnalyticsId: "",
                    tracker: null,
                    extFilePath: "//www.google-analytics.com/analytics.js",
                    configMapsDelegate: null
                };
                this._inited = !1, this._active = !1, this.settings = ft()(t.settings || {}, e), this.generalSettings = t.getGeneralSettings();
                var n = this;
                return this.activate = function() {
                    if (!this._active && this._inited) {
                        if (!this.tracker && this.generalSettings.mode === t.defs.bfaMode.prod) {
                            if (!window[this.settings.extTrackerGlobalName]) return;
                            this.tracker = window[this.settings.extTrackerGlobalName], this.tracker("create", this.settings.googleAnalyticsId, "auto")
                        }
                        this.page && this.user && (this._active = !0, t.moduleActive.dispatch())
                    }
                }, t.onGeneralSettingsChange(function() {
                    this.generalSettings = t.getGeneralSettings()
                }, this), t.onPageReady(function() {
                    this.page = t.getPageInfo(), this.activate()
                }, this), t.onUserReady(function() {
                    this.user = t.getUserInfo(), this.activate()
                }, this), this._trackDefault = function(e, n, a) {
                    if (this._active) {
                        if (e || n || a) {
                            "videoplayer" !== n || e || (e = {});
                            var i = t.tryConvertToEventInfo(e, n, a);
                            if (t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, i))
                                if (i.data.page = this.page, i.data.user = this.user, t.mapper.isExists("track/" + n)) {
                                    var r = t.mapper.map("track/" + n, i, {
                                        label: "(no label)",
                                        value: function(t) {
                                            return screen && screen.orientation && screen.orientation.type && t && (t.dimension5 = screen.orientation.type.replace("-primary", "")), t || ""
                                        }(e.opt)
                                    });
                                    switch (this.generalSettings.mode) {
                                        case t.defs.bfaMode.prod:
                                            this.tracker("send", "event", r.category, r.action, r.label, r.value);
                                            break;
                                        default:
                                            t.debugTracker.trackEvent(i, r)
                                    }
                                } else t.log.error("Mapping for `track/" + n + "` doesn't exist")
                        }
                    } else t.moduleActive.addOnce(gt()(this._trackDefault, this, e, n, a), this)
                }, this._trackPage = function(e) {
                    var n = "";
                    if (this._active) {
                        var a = t.tryConvertToEventInfo(e, "page", "view");
                        if (t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, a))
                            if (t.mapper.isExists("track/page/view")) {
                                var i = t.mapper.map("track/page/view", a);
                                i.page.match(/p=\d+/) && (n = "?" + i.page.match(/p=\d+/)[0]), vt()(i).length > 0 ? (this.generalSettings.mode === t.defs.bfaMode.prod && (this.tracker("set", "page", window.location.pathname), this.tracker("send", "pageview", window.location.pathname + n, {
                                    dimension1: "feedpager"
                                })), t.debugTracker.trackEvent(a, i)) : t.log.warn("Event won't be tracked to GA, because object is empty after mapping. Type: " + a.t + "; Name: " + a.n + ";")
                            } else t.log.error("Mapping for `track/page/view` doesn't exist")
                    } else t.moduleActive.addOnce(gt()(this._trackPage, this, e), this)
                }, t.subOn("track/page/view", this._trackPage, this), this._trackClick = function(t, e) {
                    t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), e.eventName.match("|") && (e.eventName = e.eventName.replace(/\|/g, "/")), this._trackDefault(t, "click", e.eventName)
                }, t.subOn("track/click/{eventName}", this._trackClick, this), this._trackPageExit = function(t, e) {
                    t = {
                        n: "Page-Exit",
                        data: {
                            scrolledDistance: Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100)
                        }
                    }, this._trackDefault(t, "page", e.eventName), this._trackDefault({
                        l: "Feed",
                        n: "last-cell-visible",
                        d: n.feedIndex
                    }, "update/feedindex")
                }, this._trackGDPR = function(t, e) {
                    this._trackDefault(t, "gdpr", e.eventName)
                }, this._trackNewsletter = function(t, e) {
                    this._trackDefault(t, "signup", e.eventName)
                }, this._trackVideo = function(t, e) {
                    "share" !== e.eventName && this._trackDefault(t, "video", e.eventName)
                }, this._updateFeedIndex = function(t) {
                    t.feedItemTrack && t.cardIndex && (n.feedIndex = t.cardIndex)
                }, this._trackAbVariation = function(t, e) {
                    this._trackDefault(t, "abtest", e.abTestName)
                }, this._trackScroll = function(t, e) {
                    void 0 === t.data || void 0 === t.d || "1" !== t.d && "0" !== t.d || void 0 === t.data.type || "package/hp-shopping" !== t.data.type ? "NewsletterPromo" === t.l ? this._trackDefault(t, "scroll", e.eventName) : "welcome-message" === t.l ? this._trackDefault(t, "scroll", e.eventName) : 0 === t.l.indexOf("Package") || 0 === t.l.indexOf("mega-package") ? this._trackDefault(t, "scroll", e.eventName) : "Nav" === t.l ? this._trackDefault(t, "scroll", e.eventName) : -1 !== t.l.indexOf("Feed:package") ? this._trackDefault(t, "scroll", e.eventName) : -1 !== t.l.indexOf("buzzblocks/Package") && this._trackDefault(t, "scroll", e.eventName) : this._trackDefault(t, "scroll", e.eventName)
                }, t.subOn("track/scroll/{eventName}", this._trackScroll, this), t.subOn("track/video/{eventName}", this._trackVideo, this), t.subOn("track/page/exit", this._trackPageExit, this), t.subOn("track/signup/{eventName}", this._trackNewsletter, this), t.subOn("track/gdpr/{eventName}", this._trackGDPR, this), t.subOn("track/update/feedindex", this._updateFeedIndex, this), t.subOn("track/abtest/{abTestName}", this._trackAbVariation, this), this._trackVideoPlayer = function(t, e) {
                    this._trackDefault(t, "videoplayer", e.eventName)
                }, t.subOn("track/videoplayer/{eventName}", this._trackVideoPlayer, this), this._trackRawEvent = function(e) {
                    if (this._active) {
                        var n = t.tryConvertToEventInfo(e, "raw", "ga");
                        if (t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, n)) {
                            var a = n.data,
                                i = a.category,
                                r = a.action,
                                o = a.label,
                                s = void 0 === o ? "(no label)" : o,
                                c = a.value,
                                u = void 0 === c ? null : c;
                            switch (this.generalSettings.mode) {
                                case t.defs.bfaMode.prod:
                                    this.tracker("send", "event", i, r, s, u);
                                    break;
                                default:
                                    console.groupCollapsed("GA tracked raw event"), console.table({
                                        category: i,
                                        action: r,
                                        label: s,
                                        value: u
                                    }), console.groupEnd()
                            }
                        }
                    } else t.moduleActive.addOnce(gt()(this._trackRawEvent, this, e), this)
                }, t.subOn("track/raw/ga", this._trackRawEvent, this), {
                    init: function() {
                        q()(n.settings.googleAnalyticsId) ? it()(n.settings.configMapsDelegate) ? (n.settings.configMapsDelegate(t.mapper), n.generalSettings.mode === t.defs.bfaMode.prod ? (n.tracker = n.settings.tracker, n.tracker || window[n.settings.extTrackerGlobalName] || !n.settings.extFilePath || t.domi.loadScript({
                            src: n.settings.extFilePath
                        }, n.activate, null, n)) : n.tracker = {}, n._inited = !0, t.moduleInited.dispatch(), n.activate()) : t.log.error("Value of configMapsDelegate (in settings) property must be a `function` that have to set up mapping") : t.log.error("Must set googleAnalyticsId")
                    }
                }
            }
            Mt.defaultId = "GAIntegration", Mt.require = ["logger", "domi", "trackingUtils", "generalSettings", "mapper", "debugTracker", "pageInfo", "userInfo"];
            var xt = Mt;
            var Ct = n(64);
            var Ft = function(t) {
                    t.addUtility("capitalize", function(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }), t.addUtility("cleanLink", function(t) {
                        return t.replace("http://", "").replace("https://", "").replace("www.", "")
                    }), t.addUtility("getIdFromObjectId", function(t) {
                        return "string" == typeof t && t.indexOf(":") > -1 && (t = t.split(":")[1]), t
                    }), t.addUtility("isNumeric", function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    });
                    var e = t.getOrCreateRouter("track/click"),
                        n = t.getOrCreateRouter("track/video");
                    t.createMapTemplate("gaTemplate").addMapTo("category", "").mapFrom(function(t) {
                        var e;
                        return "in_feed" === t.l && (t.l = "Feed"), t.data.type ? (t.data.type.match("news-package") && (t.data.type = "news"), e = t.l + ":" + t.data.type) : e = t.l, e
                    });
                    var a = e.createConfigForRoute(function(t) {
                        return -1 !== t.n.indexOf("dfp")
                    });
                    a.applyTemplateByName("gaTemplate"), a.addMapTo("action", "").mapFrom(function(t) {
                        var e = t.n;
                        return t.n.match("|") && (e = t.n.replace(/\|/g, "/")), e
                    }), a.addMapTo("label", "").mapFrom(function(t) {
                        return t.d
                    });
                    var r = e.createConfigForRoute(function(t) {
                        return "Advertise" === t.n
                    });
                    r.applyTemplateByName("gaTemplate"), r.addMapTo("action", "").mapFrom("t"), r.addMapTo("category", "").mapFrom("l"), r.addMapTo("label", "").mapFrom("d");
                    var o = e.createConfigForRoute(function(t) {
                        return "awareness" === t.l
                    });
                    o.applyTemplateByName("gaTemplate"), o.addMapTo("action", "").mapFrom("t"), o.addMapTo("category", "").mapFrom("l"), o.addMapTo("label", "").mapFrom("d");
                    var s = n.createConfigForRoute(function(t) {
                        return "in_feed" === t.l
                    });
                    s.applyTemplateByName("gaTemplate"), s.addMapTo("action", "").mapFrom("n"), s.addMapTo("label", "").mapFrom("d");
                    var c = e.createConfigForRoute(function(t) {
                        return "Feed" === t.l && "FeedItem" !== t.n
                    });
                    c.addMapTo("action", "click"), c.addMapTo("category").mapFrom(function(t) {
                        var e = "in_feed" === t.l ? "Feed" : t.l;
                        if (t.data.type) {
                            var n = t.data.type.match("news-package") ? "news" : t.data.type;
                            return "list:".concat(e, "/").concat(n)
                        }
                        return "list:".concat(e)
                    }), c.addMapTo("label").mapFrom(function(t) {
                        return "".concat(t.data.obj_type || "buzz", ":").concat(t.data.obj_id)
                    }), c.addMapTo("value").mapFrom(function(t) {
                        return parseInt(t.d, 10) || 0
                    });
                    var u = e.createConfigForRoute(function(t) {
                        return "Share" === t.l
                    });
                    u.addMapTo("category", "").mapFrom(function() {
                        return "Share"
                    }), u.addMapTo("action", "").mapFrom(function(t) {
                        return "facebook" === t.d ? "click:feed-module" : "open-share-sheet" === t.n ? "click:open-share-sheet" : "click:feed-module/share-sheet"
                    }), u.addMapTo("label", "").mapFrom(function(t) {
                        return t.d
                    }), t.getOrCreateMap("track/page/view").addMapTo("page", "").mapFrom("data.url");
                    var d = t.getOrCreateRouter("track/page").createConfigForRoute(function(t) {
                        return "Page-Exit" === t.n
                    });
                    d.applyTemplateByName("gaTemplate"), d.addMapTo("action", "").mapFrom("n", [t.formatters.strToLowerCase]), d.addMapTo("label", "").mapFrom(function(t) {
                        return t.data.scrolledDistance + "%"
                    });
                    var l = t.getOrCreateRouter("track/update/feedindex").createConfigForRoute(function(t) {
                        return "Feed" === t.l
                    });
                    l.applyTemplateByName("gaTemplate"), l.addMapTo("action", "last-cell-visible"), l.addMapTo("label", "").mapFrom(function(t) {
                        return t.d
                    });
                    var p = t.getOrCreateMap("track/abtest");
                    p.addMapTo("category", "ABTestRegister"), p.addMapTo("action", "").mapFrom("n"), p.addMapTo("label", "").mapFrom("data.variation.value"), p.addMapTo("value", null);
                    var f = e.createConfigForRoute(function(t) {
                        return "feed-filters" === t.l
                    });
                    f.addMapTo("category", "").mapFrom(function(t) {
                        return void 0 !== t.data.page_name && t.data.page_name ? "Feed/" + t.data.page_name : t.l
                    }), f.addMapTo("action", "").mapFrom("n"), f.addMapTo("label", "").mapFrom("d"), f.addMapTo("value", null);
                    var h = t.getOrCreateRouter("track/scroll"),
                        g = t.getOrCreateRouter("track/signup").createConfigForRoute(function(t) {
                            return "NewsletterPromo" === t.l
                        });
                    g.addMapTo("action", "").mapFrom("n"), g.addMapTo("category", "").mapFrom("l"), g.addMapTo("label", "").mapFrom(function(t) {
                        return t.d || "(no label)"
                    });
                    var m = e.createConfigForRoute(function(t) {
                        return "NewsletterPromo" === t.l
                    });
                    m.addMapTo("category", "").mapFrom("l"), m.addMapTo("action", "").mapFrom(function(t) {
                        return "click:" + t.n
                    }), m.addMapTo("label", "").mapFrom("d");
                    var v = h.createConfigForRoute(function(t) {
                        return "NewsletterPromo" === t.l
                    });
                    v.addMapTo("action", "impression"), v.addMapTo("category", "").mapFrom("l"), v.addMapTo("label", "").mapFrom("d");
                    var b = e.createConfigForRoute(function(t) {
                        return "FeedSearch" === t.l
                    });
                    b.addMapTo("action", "").mapFrom("n"), b.addMapTo("label", "").mapFrom("data.d"), b.addMapTo("category", "").mapFrom(function(t) {
                            return void 0 !== t.data.page_name && t.data.page_name ? "Feed/" + t.data.page_name : t.l
                        }), b.addMapTo("value", null), Object(Ct.b)(t),
                        function(t) {
                            var e = t.getOrCreateRouter("track/videoplayer"),
                                n = e.createDefaultConfig(),
                                a = t.createMapTemplate("videoTemplate");
                            n.applyTemplateByName("videoTemplate"), n.addMapTo("category", "VideoPlayer"), n.addMapTo("action", "").mapFrom(function(t) {
                                return "video_finish" === t.n ? "video:playback" : t.n
                            }), n.addMapTo("label", "").mapFrom(function(t) {
                                return "video_finish" === t.n ? "100%" : t.data.play_start_type
                            }), a.addMapTo("value", "").mapFrom(function(t) {
                                return {
                                    dimension3: t.data.video_id,
                                    dimension4: t.data.video_title,
                                    dimension5: t.data.orientation,
                                    dimension14: t.data.duration || 0,
                                    dimension15: t.data.video_ts,
                                    dimension16: t.data.youtube_id
                                }
                            })
                        }(t),
                        function(t) {
                            var e = t.getOrCreateRouter("track/gdpr"),
                                n = e.createConfigForRoute(function(t) {
                                    return "gdpr" === t.l
                                });
                            n.addMapTo("category", "").mapFrom("l"), n.addMapTo("action", "").mapFrom("n"), n.addMapTo("label", "").mapFrom("data.page.platform"), n.addMapTo("value", null).mapFrom(function(t) {
                                var e = null;
                                return void 0 !== t.opt && (e = t.opt), e
                            })
                        }(t),
                        function(t) {
                            var e = {
                                    feedpager: "Feed",
                                    bpager: "Buzz"
                                },
                                n = t.getOrCreateRouter("track/click"),
                                a = t.getOrCreateRouter("track/scroll"),
                                r = n.createConfigForRoute(function(t) {
                                    return "Package/reviews" === t.l
                                });
                            r.addMapTo("category", "").mapFrom(function(t) {
                                return Z()(e, i()(t, "data.page.platform")) ? e[i()(t, "data.page.platform")] : i()(t, "data.page.platform")
                            }), r.addMapTo("action", "").mapFrom(function(t) {
                                return t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), t.n
                            }), r.addMapTo("label", "").mapFrom("d"), r.addMapTo("value", "").mapFrom(function(t) {
                                return {
                                    dimension6: i()(t, "data.url")
                                }
                            });
                            var o = a.createConfigForRoute(function(t) {
                                return "Package/reviews" === t.l
                            });
                            o.addMapTo("category", "").mapFrom(function(t) {
                                return Z()(e, i()(t, "data.page.platform")) ? e[i()(t, "data.page.platform")] : i()(t, "data.page.platform")
                            }), o.addMapTo("action", "impression"), o.addMapTo("label", "").mapFrom("d")
                        }(t),
                        function(t) {
                            var e = {
                                    feedpager: "Feed",
                                    bpager: "Buzz"
                                },
                                n = t.getOrCreateRouter("track/click"),
                                a = t.getOrCreateRouter("track/scroll"),
                                r = n.createConfigForRoute(function(t) {
                                    return "buzzblocks/Package" === t.l
                                });
                            r.addMapTo("category", "").mapFrom(function(t) {
                                return (Z()(e, i()(t, "data.page.platform")) ? e[i()(t, "data.page.platform")] : i()(t, "data.page.platform")) + ":package"
                            }), r.addMapTo("action", "").mapFrom(function(t) {
                                return t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), "click:" + t.n
                            }), r.addMapTo("label", "").mapFrom("d");
                            var o = a.createConfigForRoute(function(t) {
                                return "buzzblocks/Package" === t.l
                            });
                            o.addMapTo("category", "").mapFrom(function(t) {
                                return (Z()(e, i()(t, "data.page.platform")) ? e[i()(t, "data.page.platform")] : i()(t, "data.page.platform")) + ":package"
                            }), o.addMapTo("action", "impression"), o.addMapTo("label", "").mapFrom(function(t) {
                                var e = t.d;
                                return 0 === t.n.indexOf("post|package") && (e += t.n.replace("post|package|", "/")), e
                            })
                        }(t),
                        function(t) {
                            t || console.log("Cannot bind GA mapping for feed-header: No mapper defined");
                            var e = t.getOrCreateRouter("track/click"),
                                n = e.createConfigForRoute(function(t) {
                                    return "FeedHeader" === t.l && "FeedHeaderBrand" === t.n
                                });
                            n.addMapTo("action", "click:link"), n.addMapTo("category", "feed_header"), n.addMapTo("label", "brand");
                            var a = e.createConfigForRoute(function(t) {
                                return "FeedHeader" === t.l && "FeedHeaderSponsor" === t.n
                            });
                            a.addMapTo("action", "click:link"), a.addMapTo("category", "feed_header"), a.addMapTo("label", "sponsor")
                        }(t);
                    var y = e.createConfigForRoute(function(t) {
                        return "Footer" === t.l
                    });
                    y.addMapTo("category", "").mapFrom("l"), y.addMapTo("action", "").mapFrom("n"), y.addMapTo("label", "").mapFrom("d");
                    var w = e.createConfigForRoute(function(t) {
                        return "Package" === t.l || "mega-package" === t.l
                    });
                    w.addMapTo("category", "Feed").mapFrom(function(t) {
                        var e = t.l;
                        return t.n.match("|") && (e = ":" + e.replace(/\|/g, "/")), "Feed" + e.toLowerCase()
                    }), w.addMapTo("action", "").mapFrom(function(t) {
                        return t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), "click:" + t.n
                    }), w.addMapTo("label", "").mapFrom("d");
                    var k = h.createConfigForRoute(function(t) {
                        return "Package" === t.l || "mega-package" === t.l
                    });
                    k.addMapTo("category", "Feed").mapFrom(function(t) {
                        var e = t.l;
                        return t.n.match("|") && (e = ":" + e.replace(/\|/g, "/")), "Feed" + e.toLowerCase()
                    }), k.addMapTo("action", "impression"), k.addMapTo("label", "").mapFrom(function(t) {
                        var e = t.d;
                        return 0 === t.n.indexOf("post|package") && (e += t.n.replace("post|package|", "/")), e
                    }), k.addMapTo("value", null).mapFrom(function(t) {
                        var e = null;
                        return this.isNumeric(this.getIdFromObjectId(t.data.obj_id)) && (e = {
                            dimension2: this.getIdFromObjectId(t.data.obj_id)
                        }), void 0 !== t.opt && (e = Object.assign(e || {}, t.opt)), e
                    })
                },
                St = n(46),
                Ot = n.n(St);

            function Et(t, e) {
                var n = {
                    mode: t.defs.bfaMode.prod,
                    debug: !1,
                    isConsentRequired: !1,
                    approvedModules: []
                };
                this._core = t;
                var a = ft()(e || {}, n),
                    i = new ot.a;
                return this.setSettings = function(e) {
                    t._generalSettings = Ot()(e || {}), t._onGeneralSettingsChange.dispatch(Ot()(t._generalSettings))
                }, this.updateSettings = function(e) {
                    t._generalSettings = u()(t._generalSettings || {}, e || {}), t._onGeneralSettingsChange.dispatch(Ot()(t._generalSettings))
                }, t._onGeneralSettingsChange = i, this.setSettings(a), this._core._router.sub("general/settings/set", this.setSettings, this), this._core._router.sub("general/settings/update", this.updateSettings, this), {
                    modifySBInstance: function(e) {
                        e.getGeneralSettings = function() {
                            return Ot()(t._generalSettings)
                        }, e.onGeneralSettingsChange = function(e, n) {
                            t._onGeneralSettingsChange.add(e, n)
                        }, e.isApproved = function(e) {
                            return !t._generalSettings.isConsentRequired || -1 !== t._generalSettings.approvedModules.indexOf(e)
                        }
                    }
                }
            }
            Et.defaultId = "generalSettings";
            var It = Et,
                Pt = n(85),
                At = n.n(Pt),
                Dt = n(219),
                Bt = n.n(Dt),
                Nt = n(16),
                Rt = n.n(Nt);

            function zt(t, e) {
                if (this.settings = ft()(e || {}, {
                        varName: "bfa",
                        eventsArrayName: "c"
                    }), this.unhandledEventsArray = null, Z()(window, this.settings.varName)) {
                    var n = i()(window, this.settings.varName);
                    if (Z()(n, this.settings.eventsArrayName) && Rt()(n[this.settings.eventsArrayName]))
                        if (this.unhandledEventsArray = n[this.settings.eventsArrayName], this.unhandledEventsArray.length > 0) Bt()(this.unhandledEventsArray, function(t) {
                            return t[0] && !At()(t[0], "track") && !At()(t[0], "module")
                        }).forEach(function(e) {
                            t.push.apply(t, e)
                        }, this)
                }
                return t.inited.addOnce(function() {
                    window[this.settings.varName] = function() {
                        t.push.apply(t, arguments)
                    }, this.unhandledEventsArray && this.unhandledEventsArray.length > 0 && this.unhandledEventsArray.forEach(function(e) {
                        t.push.apply(t, e)
                    }, this), window.location.search.indexOf("e2e_test") > -1 && document.documentElement.setAttribute("data-bfa-ready", "true")
                }, this), {}
            }
            zt.defaultId = "globalBfaEndpoint";
            var Lt = zt;

            function jt(t) {
                return t instanceof Error ? t.stack || t.message : t.toString()
            }

            function Vt(t, e) {
                return {
                    logLevel: e || 1,
                    log: function(t, e) {
                        Array.isArray(e) || (e = [e]), !0 === Vt._enabled && window.console && window.console[t].apply(window.console, e)
                    },
                    event: function(t, e, n) {
                        if (3 === this.logLevel) {
                            var a = t + " '" + e.t + "'";
                            e.printType && n.type && (a = a + " '" + n.type + "'"), this.log("groupCollapsed", a), this.log("log", "EventInfo"), this.log("table", [
                                [e]
                            ]), this.log("log", "DataObject"), this.log("table", [
                                [n]
                            ]), e.prettyPrintData && this.log("log", JSON.stringify(n, null, 2)), this.log("groupEnd")
                        }
                    },
                    error: function(e) {
                        this.logLevel >= 1 && this.log("error", "BFA [" + t + "] " + jt(e))
                    },
                    warn: function(e) {
                        this.logLevel >= 2 && this.log("warn", "BFA [" + t + "] " + jt(e))
                    }
                }
            }
            Vt._enabled = !1, Vt.enabled = function(t) {
                return void 0 !== t && (Vt._enabled = !!t), Vt._enabled
            };
            var Ut = Vt;

            function qt(t) {
                function e(e) {
                    e.mode === t.defs.bfaMode.develop || !0 === e.debug ? !0 !== t.log.enabled() && t.log.enabled(!0) : !0 === t.log.enabled() && t.log.enabled(!1)
                }
                return t.log = Ut("BFACore", t._generalSettings.logLevel), t._router.log = t.log, t.createLogger = function(e) {
                    return q()(e) && "" !== e || t.log.error("core.createLogger: `loggerName` argument must be a not empty string"), Ut(e, t._generalSettings.logLevel)
                }, t.log.enabled = function(t) {
                    return Ut.enabled(t)
                }, e(t._generalSettings), t._onGeneralSettingsChange.add(e, this), {
                    modifySBInstance: function(e) {
                        e.log = Ut(e.instanceId, t._generalSettings.logLevel)
                    }
                }
            }
            qt.defaultId = "logger", qt.require = ["generalSettings"];
            var Ht = qt,
                Zt = n(44),
                Gt = n.n(Zt),
                Wt = n(150),
                Qt = n.n(Wt);

            function Jt(t) {
                return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function $t(t, e) {
                if (!1 === q()(t) || t.length <= 0) throw new TypeError('"mapTo" should be a non empty string');
                W()(e) && (e = null), this.destinationVarPath = t, this.mappingType = this.mappingTypes.sourcePath, this.mappingFrom = void 0, this.preFormatters = [], this.defaultValue = e
            }

            function Yt(t) {
                this.options = t, this.mapToCollection = []
            }

            function Xt(t) {
                Yt.call(this, t), this.templatesToApply = []
            }

            function Kt(t, e) {
                this.mapName = t, this.options = e, this.routers = [], this.defaultMapConfig = null
            }

            function te() {
                this.mapRouters = {}, this.mapTemplates = {}, this._utils = {
                    utils: st.a,
                    defs: bt.a
                }
            }

            function ee(t, e) {
                if (!1 === q()(t) || t.length <= 0) throw new TypeError('"mapTo" should be a non empty string');
                W()(e) && (e = null), this.destinationVarPath = t, this.mappings = [], this.defaultValue = e
            }
            $t.prototype.mappingTypes = {
                sourcePath: 1,
                function: 2
            }, $t.prototype.mapFrom = function(t, e) {
                if (it()(t)) this.mappingType = this.mappingTypes.function, this.mappingFrom = t;
                else {
                    if (!(q()(t) && t.length > 0)) throw new TypeError('"mapFrom" is object of wrong type: ' + Jt(t).toString());
                    this.mappingType = this.mappingTypes.sourcePath, this.mappingFrom = t
                }
                return Rt()(e) && Qt()(e, function(t) {
                    return t instanceof Function
                }) && this.preFormatters.push.apply(this.preFormatters, e), this
            }, $t.prototype.map = function(t, e, n) {
                var a = this.defaultValue;
                if (!W()(this.mappingFrom)) switch (this.mappingType) {
                    case this.mappingTypes.function:
                        a = this.mappingFrom.call(n, t, e);
                        break;
                    case this.mappingTypes.sourcePath:
                        a = i()(t, this.mappingFrom, this.defaultValue)
                }
                return W()(a) && (a = this.defaultValue), this.preFormatters.length > 0 && this.preFormatters.forEach(function(t) {
                    a = t.call(n, a)
                }), Gt()(e, this.destinationVarPath, a), a
            }, Yt.prototype.addMapTo = function(t, e) {
                var n = new $t(t, e);
                return this.mapToCollection.push(n), n
            }, Xt.prototype = Object.create(Yt.prototype), Xt.prototype.constructor = Xt, Xt.prototype.applyTemplateByName = function(t) {
                -1 === this.templatesToApply.indexOf(t) && this.templatesToApply.push(t)
            }, Kt.prototype.getMapConfig = function(t, e) {
                for (var n = null, a = 0; a < this.routers.length; a++) {
                    var i = this.routers[a];
                    if (!0 === i.routeFunc.call(e, t)) {
                        n = i.mapConfig;
                        break
                    }
                }
                return null === n && (n = this.defaultMapConfig), n
            }, Kt.prototype.createConfigForRoute = function(t) {
                var e = new function(t, e) {
                    if (!t || !it()(t)) throw new Error("routeFunc should be a function that receives src object as parameter and returns bool");
                    if (!(e && e instanceof Yt)) throw new Error("mapConfig should be an instance of BfaMapperMapConfig");
                    this.routeFunc = t, this.mapConfig = e
                }(t, new Xt(this.options));
                return this.routers.push(e), e.mapConfig
            }, Kt.prototype.createDefaultConfig = function() {
                return this.defaultMapConfig = new Xt(this.options), this.defaultMapConfig
            }, te.prototype.addUtility = function(t, e) {
                if (!this.validateName(t)) throw new TypeError("`utilityName` have to be not empty string");
                if (Z()(this._utils, t)) throw new Error("utility with " + t + " already exists");
                return this._utils[t] = e, this
            }, te.prototype.getOrCreateMap = function(t, e) {
                if (!this.validateName(t)) throw new TypeError("mapName must be a not empty string");
                if (this.mapRouters[t]) return this.mapRouters[t].defaultMapConfig;
                var n = new Kt(t, e);
                return this.mapRouters[t] = n, n.createDefaultConfig()
            }, te.prototype.isExists = function(t) {
                return Z()(this.mapRouters, t)
            }, te.prototype.getOrCreateRouter = function(t, e) {
                if (!this.validateName(t)) throw new TypeError("`routeName` should be not empty string");
                if (Z()(this.mapRouters, t)) return this.mapRouters[t];
                var n = new Kt(t, e);
                return this.mapRouters[t] = n, n
            }, te.prototype.createMapTemplate = function(t, e) {
                if (!this.validateName(t)) throw new TypeError("`templateName` should be not empty string");
                if (Z()(this.mapTemplates[t])) return this.mapTemplates[t];
                var n = new Yt(e);
                return this.mapTemplates[t] = n, n
            }, te.prototype.validateName = function(t) {
                return !(!1 === q()(t) || t.length <= 0)
            }, te.prototype.map = function(t, e, n) {
                var a = this;
                if ((W()(n) || null === n) && (n = {}), W()(e) || null === e) return n;
                if (!Z()(this.mapRouters, t)) return n;
                var i = this.mapRouters[t].getMapConfig(e, a._utils);
                if (null === i) return n;
                var r = i.mapToCollection;
                r.length > 0 && r.forEach(function(t) {
                    t.map(e, n, a._utils)
                });
                var o = i.templatesToApply;
                return o.length > 0 && o.forEach(function(t) {
                    Z()(a.mapTemplates, t) && a.mapTemplates[t].mapToCollection.forEach(function(t) {
                        t.map(e, n, a._utils)
                    })
                }), n
            }, te.prototype.formatters = {
                strToLowerCase: function(t) {
                    return q()(t) ? t.toLowerCase() : t
                },
                strCutTo255Characters: function(t) {
                    return q()(t) && t.length > 255 ? t.substr(0, 255) : t
                },
                strToInt: function(t) {
                    try {
                        return parseInt(t)
                    } catch (e) {
                        return t
                    }
                }
            }, ee.prototype.mappingTypes = {
                sourcePath: 1,
                function: 2
            }, ee.prototype.mapFrom = function(t, e) {
                var n = {
                    mappingFrom: t,
                    preFormatters: []
                };
                if (it()(t)) n.mappingType = this.mappingTypes.function;
                else {
                    if (!(q()(t) && t.length > 0)) throw new TypeError('"mapFrom" is object of wrong type: ' + Jt(t).toString());
                    n.mappingType = this.mappingTypes.sourcePath
                }
                return Rt()(e) && Qt()(e, function(t) {
                    return t instanceof Function
                }) && n.preFormatters.push.apply(this.preFormatters, e), this.mappings.push(n), this
            }, ee.prototype.map = function(t, e, n) {
                var a = this,
                    r = i()(e, this.destinationVarPath);
                if (r || (r = []), !Rt()(r)) throw new TypeError('"Destination" is an object of wrong type: ' + Jt(r).toString() + ". Array is expected");
                this.mappings.forEach(function(o) {
                    var s = a.defaultValue;
                    if (!W()(o.mappingFrom)) switch (o.mappingType) {
                        case a.mappingTypes.function:
                            s = o.mappingFrom.call(n, t, e);
                            break;
                        case a.mappingTypes.sourcePath:
                            s = i()(t, o.mappingFrom, a.defaultValue)
                    }
                    W()(s) && (s = a.defaultValue), o.preFormatters.length > 0 && o.preFormatters.forEach(function(t) {
                        s = t.call(n, s)
                    }), r.push(s)
                }), Gt()(e, this.destinationVarPath, r)
            }, Yt.prototype.addMapToArray = function(t, e) {
                var n = new ee(t, e);
                return this.mapToCollection.push(n), n
            };
            var ne = te;

            function ae(t) {
                this._core = t;
                var e = this;
                return this._installMapper = function(t) {
                    t.mapper = new ne
                }, {
                    modifySBInstance: function(t) {
                        e._installMapper(t)
                    }
                }
            }
            ae.defaultId = "mapper";
            var ie = ae;

            function re(t) {
                var e = {
                    trackingBehavior: bt.a.trackingBehavior.byDefault,
                    extTrackerGlobalName: "NOLCMB",
                    staticTracker: null,
                    videoTracker: null,
                    staticConfig: {
                        apid: "P7A907367-6D97-4DFD-AF90-B51EDF8D9AC5",
                        sfcode: "dcr",
                        nsdkv: "511",
                        apn: "BuzzFeed Webapp Static"
                    },
                    videoConfig: {
                        apid: "P3816F089-E5B5-4BF1-9D71-A955F54BCDE3",
                        sfcode: "dcr",
                        nsdkv: "511",
                        apn: "buzzfeedVideos"
                    },
                    configMapsDelegate: null,
                    extFilesPaths: [],
                    trackers: []
                };
                this._inited = !1, this._active = !1, this.settings = ft()(t.settings || {}, e), this.generalSettings = t.getGeneralSettings();
                var n = this;

                function a(t, e) {
                    n._playheadCounter && s({
                        playheadPosition: n._playheadCounter
                    }), t.playheadPosition = e || 0, n._playheadCounter = t.playheadPosition, n._lastPlayed = t.assetid, n._loadedData = !0, n._videoPlaying = !1, n.videoTracker.ggPM("loadMetadata", t), n._loadedVideos || (n._loadedVideos = {}), n._loadedVideos[t.assetid] || (n._loadedVideos[t.assetid] = t), r(t)
                }

                function i(t) {
                    n._playheadInterval && (clearInterval(n._playheadInterval), n._playheadInterval = null), n._playheadCounter = t.playheadPosition, !n._playheadInterval && n._videoPlaying && (n.videoTracker.ggPM("play", t.playheadPosition), c(), n._playheadInterval = setInterval(function() {
                        c()
                    }, 1e3))
                }

                function r(t) {
                    if (n._lastPlayed !== t.assetid) return n._playheadInterval && (clearInterval(n._playheadInterval), n._playheadInterval = null), void(n._loadedVideos && n._loadedVideos[t.assetid] && a(n._loadedVideos[t.assetid], t.playheadPosition));
                    !n._loadedData && n._loadedVideos && n._loadedVideos[t.assetid] ? a(n._loadedVideos[t.assetid]) : (n._playheadCounter = t.playheadPosition, n._playheadInterval || (n.videoTracker.ggPM("play", t.playheadPosition), c(), n._videoPlaying = !0, n._playheadInterval = setInterval(function() {
                        c()
                    }, 1e3)))
                }

                function o(t) {
                    n._playheadInterval && (n._videoPlaying = !1, clearInterval(n._playheadInterval), n._playheadInterval = null, n._playheadCounter = t.playheadPosition, n.videoTracker.ggPM("stop", n._playheadCounter))
                }

                function s(t) {
                    n._playheadCounter && (n._videoPlaying = !1, clearInterval(n._playheadInterval), n._playheadCounter = t.playheadPosition, n.videoTracker.ggPM("end", n._playheadCounter), n._playheadInterval = null, n._playheadCounter = null, n._loadedData = !1)
                }

                function c() {
                    n.videoTracker.ggPM("setPlayheadPosition", n._playheadCounter), n._playheadCounter++
                }
                this._canInitializeTracker = function(t) {
                    return 0 === this.settings.trackers.length || -1 !== this.settings.trackers.indexOf(t)
                }, this.activate = function() {
                    if (!this._active && this._inited && t.isApproved(n.constructor.defaultId)) {
                        if (this.generalSettings.mode === bt.a.bfaMode.prod) {
                            if (!window[this.settings.extTrackerGlobalName]) return;
                            var e = window[this.settings.extTrackerGlobalName];
                            !this.staticTracker && this._canInitializeTracker("static") && (this.staticTracker = e.getInstance("static_instance"), this.staticTracker.ggInitialize(this.settings.staticConfig)), !this.videoTracker && this._canInitializeTracker("video") && (this.videoTracker = e.getInstance("video_instance"), this.videoTracker.ggInitialize(this.settings.videoConfig))
                        }
                        this.page && (n._active = !0, t.moduleActive.dispatch())
                    }
                }, t.onGeneralSettingsChange(function() {
                    n.generalSettings = t.getGeneralSettings(), t.isApproved(n.constructor.defaultId) && n.activate()
                }, this), t.onPageReady(function() {
                    n.page = t.getPageInfo(), n.activate()
                }, this), t.onPageChanged(function() {
                    n.page = t.getPageInfo()
                }, this), this.getEventInfo = function(e, n, a) {
                    var i = t.tryConvertToEventInfo(e, n, a);
                    return t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, i) ? (i.data.page = this.page, i) : (t.log.warn("Event won't be tracked to Nielsen because of `Event type` and `Tracking behavior`. Type: " + i.t + "; Name: " + i.n + "; Location: " + i.l + "; Desc: " + i.d + ";"), null)
                }, this._trackPage = function(e) {
                    if (this._active)
                        if (t.mapper.isExists("track/page/view")) {
                            var n = this.getEventInfo(e, "page", "view");
                            if (n) {
                                var a = t.mapper.map("track/page/view", n, {});
                                this.generalSettings.mode === bt.a.bfaMode.prod ? this.staticTracker.ggPM("staticstart", a) : t.debugTracker.trackEvent(n, a)
                            }
                        } else t.log.warn("Mapping for `track/page/view` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackPage, this, e), this)
                }, t.subOn("track/page/view", this._trackPage, this), this._trackVideoplayer = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/videoplayer")) {
                            var c = this.getEventInfo(e, "video", n.eventName);
                            if (c) {
                                var u = t.mapper.map("track/videoplayer", c, {});
                                if (u.assetid && "undefined" !== u.assetid) switch (n.eventName) {
                                    case "video_view":
                                        a(u);
                                        break;
                                    case "resume":
                                        r(u);
                                        break;
                                    case "pause":
                                        o(u);
                                        break;
                                    case "flush":
                                        s(u);
                                        break;
                                    case "scrub":
                                        i(u)
                                }
                            }
                        } else t.log.warn("Mapping for `track/videoplayer` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackVideoplayer, this, e, n), this)
                }, t.subOn("track/videoplayer/{eventName}", this._trackVideoplayer, this), this._trackVideo = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/video")) {
                            var c = this.getEventInfo(e, "video", n.eventName);
                            if (c) {
                                var u = t.mapper.map("track/video", c, {});
                                if (this.generalSettings.mode === bt.a.bfaMode.prod) switch (n.eventName) {
                                    case "load":
                                        a(u);
                                        break;
                                    case "play":
                                        r(u);
                                        break;
                                    case "pause":
                                        o(u);
                                        break;
                                    case "finish":
                                        s(u);
                                        break;
                                    case "scrub":
                                        i(u)
                                } else t.debugTracker.trackEvent(c, u)
                            }
                        } else t.log.warn("Mapping for `track/video` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackVideo, this, e, n), this)
                }, t.subOn("track/video/{eventName}", this._trackVideo, this), this.init = function() {
                    n.settings.configMapsDelegate(t.mapper), n.generalSettings.mode === bt.a.bfaMode.prod ? (n.staticTracker = n.settings.staticTracker, n.videoTracker = n.settings.videoTracker, !n.staticTracker && !n.videoTracker && !window[n.extTrackerGlobalName] && n.settings.extFilesPaths && n.settings.extFilesPaths.length > 0 && t.domi.onDomReady(function() {
                        n.settings.extFilesPaths.forEach(function(e) {
                            t.domi.loadScript({
                                src: e
                            }, n.activate, null, n)
                        })
                    }, n)) : (n.staticTracker = {
                        ggPM: function() {},
                        ggInitialize: function() {}
                    }, n.videoTracker = {
                        ggPM: function() {},
                        ggInitialize: function() {}
                    }), n._inited = !0, t.moduleInited.dispatch(), n.activate()
                }
            }
            re.defaultId = "NielsenIntegration", re.require = ["logger", "domi", "pageInfo", "mapper", "trackingUtils", "generalSettings", "debugTracker"];
            var oe = re;
            var se = function(t) {
                    var e = t.getOrCreateMap("track/page/view");
                    e.addMapTo("type", "static"), e.addMapTo("assetid", "").mapFrom(function() {
                        return parseInt(Date.now() + 1e10 * Math.random(), 10).toString(16)
                    }), e.addMapTo("section", "").mapFrom(function() {
                        return "home"
                    }, [t.formatters.strToLowerCase]), e.addMapTo("segA", "").mapFrom(function(t) {
                        return i()(t, "data.page.post.isPromoted") ? "sponsored" : "editorial"
                    }), e.addMapTo("segB", "desktop"), e.addMapTo("segC", "").mapFrom("data.page.country");
                    var n = t.getOrCreateRouter("track/video"),
                        a = n.createConfigForRoute(function(t) {
                            return "video_view" === t.data.e
                        });
                    a.addMapTo("type", "content"), a.addMapTo("assetid", "").mapFrom("d"), a.addMapTo("isfullepisode", "n"), a.addMapTo("program").mapFrom(function(t) {
                        return t.data.a || "BuzzFeed Video"
                    }), a.addMapTo("title", "").mapFrom("data.n"), a.addMapTo("length", "").mapFrom(function(t) {
                        return Math.round(t.data.d)
                    }), a.addMapTo("mediaURL", "").mapFrom("data.u"), a.addMapTo("segB", "desktop"), a.addMapTo("segC", "").mapFrom("data.page.country"), a.addMapTo("airdate", "").mapFrom(function(t) {
                        return t.data.ut.replace(/-/g, "").replace("T", " ").replace("Z", "")
                    }), a.addMapTo("adloadtype", "2"), a.addMapTo("hasAds", "0");
                    var r = n.createConfigForRoute(function(t) {
                        return "play" === t.data.e || "resume" === t.data.e
                    });
                    r.addMapTo("playheadPosition", "").mapFrom("data.d"), r.addMapTo("assetid", "").mapFrom("d"), n.createConfigForRoute(function(t) {
                            return "pause" === t.data.e
                        }).addMapTo("playheadPosition", "").mapFrom("data.d"), n.createConfigForRoute(function(t) {
                            return "scrub" === t.data.e
                        }).addMapTo("playheadPosition", "").mapFrom(function(t) {
                            return parseInt(t.data.st, 10)
                        }), n.createConfigForRoute(function(t) {
                            return "100%" === t.d
                        }).addMapTo("playheadPosition", "").mapFrom("data.d"),
                        function(t) {
                            var e = t.getOrCreateRouter("track/videoplayer"),
                                n = e.createDefaultConfig();
                            n.addMapTo("type", "content"), n.addMapTo("adloadtype", "2"), n.addMapTo("title", "").mapFrom(function(t) {
                                return "".concat(t.data.video_title)
                            }), n.addMapTo("assetid", "").mapFrom(function(t) {
                                return "".concat((t.data.video_id || t.data.transcoder_path || "").replace(/\//g, ""))
                            }), n.addMapTo("segB", "").mapFrom(function(t) {
                                return "".concat(t.data.platform)
                            }), n.addMapTo("segC", "").mapFrom(function(t) {
                                return "".concat(t.data.page.country)
                            }), n.addMapTo("program", "").mapFrom(function(t) {
                                return "".concat(t.data.author)
                            }), n.addMapTo("isfullepisode", "y"), n.addMapTo("length", "").mapFrom(function(t) {
                                return Math.round((t.data.length || 0) / 1e3)
                            }), n.addMapTo("airdate", "").mapFrom(function(t) {
                                return t.data.releasedAt ? t.data.releasedAt.replace(/-/g, "").replace("T", " ").replace("Z", "").replace(/\.[0-9]+/, "") : ""
                            }), n.addMapTo("playheadPosition", "").mapFrom(function(t) {
                                return Math.round((t.data.video_ts || 0) / 1e3)
                            })
                        }(t)
                },
                ce = n(45),
                ue = n.n(ce);

            function de(t, e) {
                e = e || {}, this.defaultSettings = {
                        readyOnFirstUpdate: !0,
                        isReady: !1,
                        pageInfo: {
                            uri: a()
                        }
                    },
                    function() {
                        if (!window.history || !window.history.replaceState || !document.location.search) return;
                        var t = ["bfseed"],
                            e = st.a.queryStringToObject(document.location.search),
                            n = Object.keys(e).filter(function(n) {
                                return -1 === t.indexOf(n) || (Gt()(window, "BZFD.Context.page.".concat(n), e[n]), !1)
                            }).map(function(t) {
                                return void 0 === e[t] ? encodeURIComponent(t) : "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
                            }).join("&");
                        try {
                            window.history.replaceState(null, null, "?".concat(n).concat(document.location.hash))
                        } catch (t) {
                            window.raven && window.raven.captureException(t)
                        }
                    }(), this.pageReady = new ot.a, this.pageChanged = new ot.a, this.settings = ft()(e, this.defaultSettings);
                var n = this;

                function a() {
                    return {
                        href: document.location.href.replace(/\/p\/\.[0-9a-zA-Z]+\//, "/"),
                        host: document.location.host,
                        path: document.location.pathname.replace(/^\/p\/\.[0-9a-zA-Z]+\//, "/"),
                        search: document.location.search,
                        hash: document.location.hash,
                        protocol: document.location.protocol
                    }
                }

                function i(t, e) {
                    !0 === n.settings.isReady && t.call(e), n.pageReady.add(t, e)
                }

                function r() {
                    return Ot()(n.settings.pageInfo)
                }
                return t._router.sub("general/page/{action}", function(e, n) {
                    if ("ready" !== n.action)
                        if (ue()(e)) {
                            switch (n.action) {
                                case "set":
                                    this.settings.pageInfo = u()({
                                        uri: a()
                                    }, e);
                                    break;
                                case "update":
                                default:
                                    this.settings.pageInfo = u()(this.settings.pageInfo, e)
                            }
                            this.pageChanged.dispatch(), !this.settings.isReady && this.settings.readyOnFirstUpdate && (this.settings.isReady = !0, this.pageReady.dispatch())
                        } else t.log.warn("page info must be a plain object");
                    else this.isReady || (this.isReady = !0, this.pageReady.dispatch())
                }, this, {
                    action: ["ready", "update", "set"]
                }), t._onPageReady = function(t, e) {
                    i(t, e)
                }, t._getPageInfo = function() {
                    return r()
                }, {
                    modifySBInstance: function(t) {
                        t.getPageInfo = function() {
                            return r()
                        }, t.onPageReady = function(t, e) {
                            i(t, e)
                        }, t.onPageChanged = function(t, e, a) {
                            n.pageChanged[a ? "addOnce" : "add"](t, e)
                        }
                    }
                }
            }
            de.defaultId = "pageInfo";
            var le = de,
                pe = n(112),
                fe = n.n(pe);

            function he(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }

            function ge(t) {
                return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var me = "a2a5c7f9-3fa0-4182-889a-15aa61acf59b",
                ve = "https://cdn.permutive.com/".concat(me, "-web.js"),
                be = {
                    enabled: Promise.resolve(!1)
                },
                ye = function t(e) {
                    switch (ge(e)) {
                        case "string":
                            var n = document.createElement("textarea");
                            return n.innerHTML = e, n.value;
                        case "object":
                            var a = !0,
                                i = Array.isArray(e) ? [] : {};
                            for (var r in e) a = !1, i[r] = t(e[r]);
                            return a ? void 0 : i
                    }
                    return e
                },
                we = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.sandbox = e, this.configureSandbox(), this.settings = ft()(e.settings || {}, be), this.init = function() {
                            n.inited = !0, n.sandbox.moduleInited.dispatch(), n.activate()
                        }
                    }
                    return function(t, e, n) {
                        e && he(t.prototype, e), n && he(t, n)
                    }(t, [{
                        key: "activate",
                        value: function() {
                            var t = this;
                            if (!this.active && this.inited && this.page && this.user) {
                                var e = this.settings.enabled;
                                Promise.resolve(e) === e ? (this.active = !0, e.then(function(e) {
                                    e && (t.enabled = !0, t.identifyUser(t.user), t.trackPage(t.transformPageMeta()), t.sandbox.domi.onDomReady(function() {
                                        return t.sandbox.domi.loadScript({
                                            src: ve
                                        })
                                    }), t.sandbox.moduleActive.dispatch())
                                })) : sandbox.log.warn(sandbox.moduleId + " enabled setting should be a promise.")
                            }
                        }
                    }, {
                        key: "configureSandbox",
                        value: function() {
                            var t = this;
                            this.sandbox.onPageReady(function() {
                                t.page = t.sandbox.getPageInfo(), t.activate()
                            }), this.sandbox.onUserReady(function() {
                                t.user = t.sandbox.getUserInfo(), t.activate()
                            }), this.sandbox.onUserChanged(function() {
                                t.user = t.sandbox.getUserInfo(), t.identifyUser(t.user)
                            }), this.sandbox.subOn("track/page/view", function() {
                                return t.onPageView()
                            }), this.sandbox.subOn("track/quiz/answer", function(e) {
                                var n = e.data;
                                return t.onQuizAnswer(n)
                            }), this.sandbox.subOn("track/bfp/quiz-answer", function(e) {
                                var n = e.data;
                                return t.onQuizAnswer(n)
                            }), this.sandbox.subOn("track/quiz/complete", function(e) {
                                var n = e.data;
                                return t.onQuizComplete(n)
                            }), this.sandbox.subOn("track/bfp/quiz-complete", function(e) {
                                var n = e.data;
                                return t.onQuizComplete(n)
                            }), this.sandbox.subOn("track/click/Exit-Link", function(e) {
                                var n = e.data;
                                return t.onAffiliateLinkClick(n)
                            })
                        }
                    }, {
                        key: "onPageView",
                        value: function() {
                            var t = this.sandbox.getPageInfo();
                            t && !fe()(this.page, t) && (this.page = t, this.trackPage(this.transformPageMeta()))
                        }
                    }, {
                        key: "onQuizAnswer",
                        value: function(t) {
                            var e = (this.page || {}).post || {},
                                n = ye({
                                    bf_buzzid: e.id,
                                    quizId: t.quizId,
                                    questionId: t.questionId,
                                    itemId: t.answerId,
                                    answerText: t.answerValue || ""
                                });
                            this.trackEvent("QuizAnswer", n)
                        }
                    }, {
                        key: "onQuizComplete",
                        value: function(t) {
                            var e = (this.page || {}).post || {},
                                n = ye({
                                    bf_buzzid: e.id,
                                    quizId: t.quizId,
                                    resultImageAlt: t.resultImageAlt,
                                    resultDescription: t.resultDescription,
                                    resultId: t.itemId || t.resultId,
                                    resultText: t.resultText,
                                    resultTitle: t.resultTitle
                                });
                            this.trackEvent("QuizComplete", n)
                        }
                    }, {
                        key: "onAffiliateLinkClick",
                        value: function(t) {
                            if ("affiliate" in t) {
                                var e = ye({
                                    affiliate: t.affiliate,
                                    campaign: t.campaign,
                                    href: t.url,
                                    name: t.anchorDesc,
                                    price: t.price,
                                    redirectUrl: t.redirectUrl
                                });
                                this.trackEvent("AffiliateLinkClick", e)
                            }
                        }
                    }, {
                        key: "transformPageMeta",
                        value: function() {
                            var t = this.page || {},
                                e = t.post || {},
                                n = {
                                    page: {
                                        meta: {
                                            bf_buzzid: e.id,
                                            bf_userid: e.authorId,
                                            type: t.hasQuiz ? "quiz" : e.format ? e.format.type : "feed",
                                            section: ("section" === t.name ? t.section : void 0) || t.category || t.name,
                                            publisher: t.destination || "buzzfeed",
                                            title: e.title,
                                            description: t.description,
                                            author: e.author,
                                            tags: e.tags,
                                            platform: "web",
                                            edition: t.country ? t.country.replace(/.*-/, "") : void 0,
                                            categories: t.sections,
                                            badges: e.badges ? e.badges.map(function(t) {
                                                return t.name
                                            }) : void 0
                                        }
                                    }
                                };
                            return ye(n)
                        }
                    }, {
                        key: "identifyUser",
                        value: function(t) {
                            if (this.enabled && t && t.clientId) {
                                var e = "" + t.clientId;
                                this.tracker.identify(e), this.logEvent({
                                    clientId: e
                                }, "user", "identify")
                            }
                        }
                    }, {
                        key: "trackPage",
                        value: function(t) {
                            this.enabled && (this.tracker.addon("web", t), this.logEvent(t, "page", "view"))
                        }
                    }, {
                        key: "trackEvent",
                        value: function(t, e) {
                            this.enabled && (this.tracker.track(t, e), this.logEvent(e, t, "track"))
                        }
                    }, {
                        key: "logEvent",
                        value: function(t, e, n) {
                            t = Object.assign({}, t);
                            var a = this.sandbox.tryConvertToEventInfo(t, e, n);
                            this.sandbox.debugTracker.trackEvent(a, t)
                        }
                    }, {
                        key: "tracker",
                        get: function() {
                            if (!window.permutive) {
                                window.permutive = {
                                    q: [],
                                    config: {
                                        projectId: me,
                                        apiKey: "dc7cae83-2bc8-40f8-b7f0-6a097fbcfc20",
                                        environment: "production"
                                    }
                                };
                                for (var t = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], e = function() {
                                        var e = t[n];
                                        window.permutive[e] = function() {
                                            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                                            return window.permutive.q.push({
                                                functionName: e,
                                                arguments: n
                                            })
                                        }
                                    }, n = 0; n < t.length; n++) e()
                            }
                            return window.permutive
                        }
                    }]), t
                }();
            we.defaultId = "PermutiveIntegration", we.require = ["domi", "pageInfo", "logger", "debugTracker", "trackingUtils", "userInfo"];
            var ke = n(11),
                _e = n(74),
                Te = n.n(_e),
                Me = "dev",
                xe = {},
                Ce = {
                    dev: {
                        trackingURL: "https://nsq-api-public.dev.buzzfeed.io",
                        debug: !0
                    },
                    stage: {
                        trackingURL: "https://pixiedust-stage.buzzfeed.com",
                        debug: !0
                    },
                    prod: {
                        trackingURL: "https://pixiedust.buzzfeed.com",
                        debug: !1
                    },
                    "app-west": {
                        trackingURL: "https://pixiedust.buzzfeed.com",
                        debug: !1
                    }
                };
            Ce.live = Ce.prod;
            var Fe = {
                apiVersion: "1",
                delay: 200,
                urlLengthLimit: 2e3,
                batch: !0,
                samplingRate: 0,
                requiredFields: ["type", "source", "session_id"],
                acceptedDataTypes: ["string", "boolean", "number"]
            };
            var Se = {
                    init: function(t) {
                        Ce[t] ? Me = t : console.warn("Pixiedust: environment not recognized:", t)
                    },
                    get: function(t) {
                        if (t in xe && void 0 !== xe[t]) return xe[t];
                        var e = Ce[Me];
                        return e && t in e ? e[t] : Fe[t]
                    },
                    set: function(t, e) {
                        var n = {};
                        Y()(t) ? n = t : n[t] = e, Te()(xe, n)
                    }
                },
                Oe = 10,
                Ee = 200;
            var Ie = n(220),
                Pe = n.n(Ie),
                Ae = n(143),
                De = n.n(Ae);

            function Be(t) {
                return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var Ne = "\v";

            function Re(t) {
                return Object.keys(t).reduce(function(e, n) {
                    var a = t[n];
                    return a = null === a || void 0 === a ? "" : a, e[n] = a, e
                }, {})
            }

            function ze() {
                var t = {};
                return {
                    queue: [],
                    timeout: null,
                    history: [],
                    push: function(e) {
                        var n = J()({}, e, t);
                        if (!this.validateData(n)) return !1;
                        var a = this.queue[this.queue.length - 1];
                        return a && a.type !== n.type ? (this.sendData(), this.push(n), !0) : (this.queue.push(n), this.getURL(this.queue).length > Se.get("urlLengthLimit") ? (this.queue.pop(), this.sendData(), this.push(n), !0) : (Se.get("batch") ? this.timeout || (this.timeout = setTimeout(this.sendData.bind(this), Se.get("delay"))) : this.sendData(), !0))
                    },
                    validateData: function(t) {
                        for (var e = Se.get("requiredFields"), n = 0, a = e.length; n < a; n++)
                            if (!(e[n] in t)) {
                                if (Se.get("debug")) throw new Error("Pixiedust required event field: " + e[n]);
                                return !1
                            }
                        var i = Se.get("acceptedDataTypes");
                        for (var r in t) {
                            var o = t[r],
                                s = Be(t[r]);
                            if (null !== o && void 0 !== o && -1 === i.indexOf(s)) {
                                if (Se.get("debug")) throw new Error('Pixiedust: field "' + r + '" is invalid data type: ' + s);
                                return !1
                            }
                        }
                        if (this.getURL([t]).length > Se.get("urlLengthLimit")) {
                            if (Se.get("debug")) throw new Error("Pixiedust: single event exceeds url length limit", t);
                            return !1
                        }
                        return !0
                    },
                    sendData: function() {
                        var t;
                        this.queue && this.queue.length && (t = this.getURL(this.queue), this.createPixel(t), this.history.push(t)), this.queue = [], clearTimeout(this.timeout), this.timeout = null
                    },
                    createPixel: function(t) {
                        (new Image).src = t
                    },
                    getURL: function(t) {
                        var e = Pe()(De()(t.map(Object.keys)));
                        t.forEach(function(t) {
                            Object.keys(t).forEach(function(e) {
                                var n = t[e];
                                null !== n && void 0 !== n || (t[e] = "")
                            })
                        }), t = t.map(Re);
                        var n = e.reduce(function(e, n) {
                            return e[n] = t.map(function(t) {
                                return t[n]
                            }), e
                        }, {});
                        n._z = Date.now(), n._d = Ne, n._n = t.length;
                        var a = Object.keys(n).map(function(t) {
                            var e = n[t];
                            return e = Array.isArray(e) ? e : [e], encodeURIComponent(t) + "=" + encodeURIComponent(e.join(Ne))
                        });
                        return this.url() + "?" + a.join("&")
                    },
                    setSessionVars: function(e) {
                        Object.keys(e).forEach(function(t) {
                            var n = e[t];
                            null !== n && void 0 !== n || (e[t] = "")
                        }), t = Te()(t, Re(e))
                    },
                    url: function() {
                        return Se.get("trackingURL") + "/v" + Se.get("apiVersion") + ".gif"
                    },
                    getHistory: function() {
                        return this.history.slice()
                    }
                }
            }
            var Le = function() {
                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).dispatch;
                this.enabled = !1, this.started = !1, this.version = "1.1.0", this.dispatch = t || new ze, this.queue = []
            };
            Le.prototype.push = function(t) {
                return this.started && this.enabled ? (this.updateSessionUuid(), t.visit_id = this.sessionUuid, this.dispatch.push(t)) : (this.queue.push(t), !0)
            }, Le.prototype.start = function(t, e) {
                var n = this;
                if (this.started) {
                    if (Se.get("debug")) throw new Error("Pixiedust instance may only be started once")
                } else if (t = t || {}, Se.init(t.env), Se.set({
                        samplingRate: t.sampling_rate,
                        requiredFields: t.required_fields
                    }), this.enabled = Math.random() < Se.get("samplingRate"), Se.get("debug") && this.setupTestMethods(), this.enabled) {
                    var a = "live" === t.env ? "prod" : t.env;
                    this.sessionUuidCookieManager = new ke.a({
                        env: a,
                        namespace: "bf-xdomain-tracking",
                        cookieName: "bf-xdomain-session-uuid",
                        daysExpiry: .5 / 24,
                        throttleTimer: 18e4
                    }), this.updateSessionUuid().then(function() {
                        for (n.started = !0; n.queue.length;) n.push(n.queue.shift());
                        e && e()
                    })
                }
            }, Le.prototype.updateSessionUuid = function() {
                var t = this;
                return this.sessionUuidCookieManager.get().then(function(e) {
                    t.sessionUuid = e || Object(ke.i)(), t.sessionUuidCookieManager.set(t.sessionUuid)
                }).catch(function(t) {
                    console.log("Error getting session UUID: ".concat(t))
                })
            }, Le.prototype.setupTestMethods = function() {
                this.__testHistory = function() {
                    if (!this.enabled && Se.get("debug")) throw new Error("Pixiedust is not enabled (perhaps due to sampling)");
                    return this.dispatch.getHistory()
                }
            }, Le.prototype.setSessionVars = function(t) {
                return this.dispatch.setSessionVars(t)
            }, Le.prototype.flush = function() {
                return this.dispatch.sendData()
            };
            var je = Le;

            function Ve(t) {
                var e = this,
                    n = st.a.queryStringToObject(document.location.search),
                    a = {
                        sessionId: Date.now().toString(32) + (1e8 * Math.random() | 0).toString(32),
                        e2e: n.e2e_test,
                        impressionsSamplingRate: 1,
                        scrollDepthSamplingRate: 1,
                        instrumentationSamplingRate: 1,
                        performanceSamplingRate: 1
                    };
                this._inited = !1, this._active = !1, this.generalSettings = t.getGeneralSettings(), this.settings = ft()(t.settings || {}, a);
                var r = this;
                this.activate = function() {
                    !r._active && r._inited && this.page && this.user && this.user.clientId && (r.pixiedust = new je, r.pixiedust.setSessionVars({
                        session_id: r.settings.sessionId,
                        client_id: r.user.clientId,
                        source: r.settings.source || "buzz_web"
                    }), r.pixiedust.start({
                        env: r.generalSettings.env,
                        sampling_rate: r.settings.samplingRate || 0
                    }), r._active = !0, t.moduleActive.dispatch())
                }, t.onGeneralSettingsChange(function() {
                    r.generalSettings = t.getGeneralSettings()
                }, this), t.onPageReady(function() {
                    r.page = t.getPageInfo(), r.activate()
                }, this), t.onPageChanged(function() {
                    r.page = t.getPageInfo()
                }, this), t.onUserReady(function() {
                    r.user = t.getUserInfo(), r.activate()
                }, this), t.onUserChanged(function() {
                    r.user = t.getUserInfo()
                }, this), this.getEventInfo = function(e, n, a) {
                    var i = t.tryConvertToEventInfo(e, n, a);
                    return t.canTrackEvent(t.moduleId, this.settings.trackingBehavior, i) ? (i.data.page = this.page, i.data.user = this.user, i.data.seedSocialFlags = {}, i) : (t.log.warn(t.moduleId + " cannot track current event. Type: " + n + "; Name: " + a + ";"), null)
                }, this._shouldTrack = function(t) {
                    return !("dev" !== e.generalSettings.env && !e.generalSettings.debug) || e.user.clientId && e.user.clientId % 100 < 100 * t
                }, this._shouldSample = function(t) {
                    return !("dev" !== e.generalSettings.env && !e.generalSettings.debug) || Math.random() < t
                }, this._isDocumentVisible = function() {
                    return !document.visibilityState || "visible" === document.visibilityState
                }, this._trackPage = function(e) {
                    if (this._active)
                        if (t.mapper.isExists("track/page/view"))
                            if (this._isDocumentVisible()) {
                                var n = r.getEventInfo(e, "page", "view");
                                this._trackDefault(n, "track/page/view")
                            } else st.a.onDocumentVisible(gt()(this._trackPage, this, e));
                    else t.log.warn("Mapping for `pixiedust: track/page/view` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackPage, this, e), this)
                }, t.subOn("track/page/view", this._trackPage, this), this._trackPageExit = function(e) {
                    if (this._active)
                        if (t.mapper.isExists("track/page/exit")) {
                            var n = r.getEventInfo(e, "page", "exit");
                            this._trackDefault(n, "track/page/exit", !0)
                        } else t.log.warn("Mapping for `pixiedust: track/page/exit` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackPageExit, this, e), this)
                }, t.subOn("track/page/exit", this._trackPageExit, this), this._trackClick = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/click")) {
                            var a = this.getEventInfo(e, "click", n.eventName);
                            this._trackDefault(a, "track/click", !0)
                        } else t.log.warn("Mapping for `track/click` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackClick, this, e, n), this)
                }, t.subOn("track/click/{eventName}", this._trackClick, this), this._trackVideo = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/video")) {
                            var a = this.getEventInfo(e, "video", n.eventName);
                            this._trackDefault(a, "track/video")
                        } else t.log.warn("Mapping for `track/video` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackVideo, this, e, n), this)
                }, t.subOn("track/video/{eventName}", this._trackVideo, this), this._trackVideoPlayer = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/videoplayer")) {
                            var a = this.getEventInfo(e, "videoplayer", n.eventName);
                            if (a && "flush" === a.n) return this.pixiedust.flush();
                            this._trackDefault(a, "track/videoplayer")
                        } else t.log.warn("Mapping for `track/videoplayer` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackVideoPlayer, this, e, n), this)
                }, t.subOn("track/videoplayer/{eventName}", this._trackVideoPlayer, this), this._trackImpression = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/scroll/impression")) {
                            var a = this.getEventInfo(e, "impression", n.eventName);
                            this._shouldTrack(i()(a, "opt.samplingRate", 0) || this.settings.impressionsSamplingRate) ? this._trackDefault(a, "track/scroll/impression") : t.log.warn("`track/scroll/impression` will not be tracked: events from current user are not being sampled")
                        } else t.log.warn("Mapping for `track/scroll/impression` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackImpression, this, e, n), this)
                }, t.subOn("track/scroll/impression", this._trackImpression, this), this._trackScrollPost = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/scroll/post"))
                            if (this._shouldTrack(this.settings.scrollDepthSamplingRate)) {
                                var a = this.getEventInfo(e, "post", n.eventName);
                                this._trackDefault(a, "track/scroll/post")
                            } else t.log.warn("`track/scroll/post` will not be tracked: events from current user are not being sampled");
                    else t.log.warn("Mapping for `track/scroll/post` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackScrollPost, this, e, n), this)
                }, t.subOn("track/scroll/post", this._trackScrollPost, this), this._trackPerformance = function(e) {
                    if (this._active)
                        if (t.mapper.isExists("track/website/performance"))
                            if (this._shouldSample(this.settings.performanceSamplingRate)) {
                                var n = r.getEventInfo(e, "website", "performance");
                                this._trackDefault(n, "track/website/performance", !0)
                            } else t.log.warn("`track/website/custom_timers` event will not be tracked, because it was not sampled.");
                    else t.log.warn("Mapping for `pixiedust: track/website/performance` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackPerformance, this, e), this)
                }, t.subOn("track/website/performance", this._trackPerformance, this), this._trackCustomPerformance = function(e) {
                    if (this._active)
                        if (t.mapper.isExists("track/website/custom_timers"))
                            if (this._shouldSample(this.settings.performanceSamplingRate)) {
                                var n = r.getEventInfo(e, "website", "custom_timers");
                                this._trackDefault(n, "track/website/custom_timers", !0)
                            } else t.log.warn("`track/website/custom_timers` event will not be tracked, because it was not sampled.");
                    else t.log.warn("Mapping for `pixiedust: track/website/custom_timers` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackCustomPerformance, this, e), this)
                }, t.subOn("track/website/custom_timers", this._trackCustomPerformance, this), this._trackAbVariation = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/abtest")) {
                            var a = this.getEventInfo(e, "abtest", n.abTestName);
                            this._trackDefault(a, "track/abtest")
                        } else t.log.warn("Mapping for `track/abtest` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackAbVariation, this, e, n), this)
                }, t.subOn("track/abtest/{abTestName}", this._trackAbVariation, this), this._trackAbeagleRequest = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/abeagle/request")) {
                            var a = this.getEventInfo(e, "abeagle", "request");
                            this._trackDefault(a, "track/abeagle/request")
                        } else t.log.warn("Mapping for `track/abeagle/request` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackAbeagleRequest, this, e, n), this)
                }, t.subOn("track/abeagle/request", this._trackAbeagleRequest, this), this._trackQuiz = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/quiz")) {
                            var a = this.getEventInfo(e, "quiz", n.eventName);
                            this._trackDefault(a, "track/quiz")
                        } else t.log.warn("Mapping for `track/quiz` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackQuiz, this, e, n), this)
                }, t.subOn("track/quiz/{eventName}", this._trackQuiz, this), this._trackBfp = function(e, n) {
                    if (this._active)
                        if (t.mapper.isExists("track/bfp")) {
                            var a = this.getEventInfo(e, "bfp", n.eventName);
                            this._trackDefault(a, "track/bfp")
                        } else t.log.warn("Mapping for `track/bfp` doesn't exist");
                    else t.moduleActive.addOnce(gt()(this._trackBfp, this, e, n), this)
                }, t.subOn("track/bfp/{eventName}", this._trackBfp, this), this._trackInstrumentation = function(n) {
                    if (e._active)
                        if (t.mapper.isExists("track/website/instrumentation")) {
                            var a = i()(n, "opts.samplingRate", e.settings.instrumentationSamplingRate);
                            if (e._shouldSample(a)) {
                                var o = r.getEventInfo(n, "website", "instrumentation");
                                e._trackDefault(o, "track/website/instrumentation")
                            } else t.log.warn("`track/website/instrumentation` event will not be tracked, because it was not sampled.")
                        } else t.log.warn("Mapping for `track/website/instrumentation` doesn't exist");
                    else t.moduleActive.addOnce(gt()(e._trackInstrumentation, e, n), e)
                }, t.subOn("track/website/instrumentation", this._trackInstrumentation, this), this._trackDefault = function(e, n, a) {
                    if (e) {
                        e.data.env = this.generalSettings.mode === bt.a.bfaMode.prod ? "prod" : "dev", e.data.debug = this.generalSettings.debug;
                        var i = t.mapper.map(n, e, {});
                        Object.keys(i).length > 0 && (this.settings.e2e && (i.e2e_test = this.settings.e2e), this.pixiedust.push(i), a && this.pixiedust.flush(), this.generalSettings.mode !== bt.a.bfaMode.prod && (e.printType = !0, e.prettyPrintData = !0, t.debugTracker.trackEvent(e, i)))
                    }
                }, this.init = function() {
                    r.settings.configMapsDelegate(t.mapper), r._inited = !0, t.moduleInited.dispatch(), r.activate()
                }
            }
            Ve.defaultId = "PixiedustIntegration", Ve.require = ["logger", "pageInfo", "userInfo", "debugTracker", "mapper", "trackingUtils", "generalSettings"];
            var Ue = Ve,
                qe = n(62),
                He = ["page_url", "position", "target", "type", "value", "duration", "audio_volume", "source", "video_id", "transcoder_path", "video_ts", "video_type", "video_title", "position", "bandwidth", "orientation", "play_start_type", "player_location", "hls_level", "dimensions", "buffer_count", "buffer_duration", "youtube_id"];
            var Ze = n(39);
            var Ge = n(12);
            n(33);
            var We = function() {
                    return BZFD.Config.bfwInfoCookie
                },
                Qe = function() {
                    return !!Ge.a.get(We())
                };

            function Je(t) {
                return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var $e = function(t) {
                    function e(e, a) {
                        e.addMapTo("source", "buzz_web"), e.addMapTo("user_agent", navigator.userAgent.toLowerCase()), e.addMapTo("screen_resolution", "").mapFrom(function() {
                            return window.screen.availWidth + " x " + window.screen.availHeight
                        }), e.addMapTo("referrer", "").mapFrom(function() {
                            return window.document.referrer
                        }), e.addMapTo("url", "").mapFrom(function(t) {
                            var e = i()(t, "data.page.uri.path", null);
                            return void 0 === Je(e) && (e = null), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                                return e = e || 0, this.indexOf(t, e) === e
                            }), null === e && "Home" === window.BZFD.Context.page.name && (e = "/index"), null === e && (e = i()(t, "data.page.uri.href")), null === e && (e = document.location.href), !e || e.startsWith("http://") || e.startsWith("https://") || (e = document.location.origin + e + i()(t, "data.page.uri.search", "")), e
                        }), e.addMapTo("page", "").mapFrom(function(t) {
                            return window.BZFD.Context.page.name ? this.capitalize(window.BZFD.Context.page.name) : this.capitalize(t.data.page.category)
                        }), e.addMapTo("author", ""), e.addMapTo("author_id", ""), e.addMapTo("buzz", ""), e.addMapTo("buzz_id", ""), e.addMapTo("page_edition", "").mapFrom(function(t) {
                            return i()(t, "data.page.country", null)
                        }), void 0 !== a && a.forEach(function(a) {
                            switch (a) {
                                case "page_type":
                                    e.addMapTo("page_type", "feed");
                                    break;
                                case "variation_id":
                                    e.addMapTo("variation_id", "").mapFrom(function(t) {
                                        return t.data.variation_id ? t.data.variation_id : ""
                                    });
                                    break;
                                case "unit":
                                    e.addMapTo("unit", "").mapFrom("l", [t.formatters.strToLowerCase]);
                                    break;
                                case "mode":
                                    e.addMapTo("mode", "desktop");
                                    break;
                                case "page_url":
                                    e.addMapTo("page_url", "").mapFrom(function(t) {
                                        var e = i()(t, "data.page.uri.path", null);
                                        return "Home" === window.BZFD.Context.page.name && window.BZFD.Config.tracking.pixiedust.page_view_url && (e = window.BZFD.Config.tracking.pixiedust.page_view_url.startsWith("/") ? window.BZFD.Config.tracking.pixiedust.page_view_url : "/" + window.BZFD.Config.tracking.pixiedust.page_view_url), null === e && "Home" === window.BZFD.Context.page.name && (e = "/index"), null === e && (e = i()(t, "data.page.uri.href")), null === e && (e = document.location.href), e.startsWith("http://") || e.startsWith("https://") || (e = document.location.origin + e + i()(t, "data.page.uri.search", "")), e
                                    });
                                    break;
                                case "os":
                                    e.addMapTo("os", function() {
                                        var t = "Linux",
                                            e = "MacOs",
                                            n = "Unix",
                                            a = "Unknown",
                                            i = "Windows";
                                        return -1 !== navigator.appVersion.indexOf("Win") ? i : -1 !== navigator.appVersion.indexOf("Mac") ? e : -1 !== navigator.appVersion.indexOf("X11") ? n : -1 !== navigator.appVersion.indexOf("Linux") ? t : a
                                    }());
                                    break;
                                case "position":
                                    e.addMapTo("position", "").mapFrom(function(t) {
                                        if (t.data && t.data.p) return this.strToInt(t.data.p)
                                    });
                                    break;
                                case "sub_position":
                                    e.addMapTo("sub_position", "").mapFrom(function(t) {
                                        if (t.data && t.data.sub_p) return this.strToInt(t.data.sub_p)
                                    });
                                    break;
                                case "content_id":
                                    e.addMapTo("content_id", "").mapFrom(function(t) {
                                        if (t.opt.dimension2) return "buzz:" + this.strToInt(t.opt.dimension2);
                                        if (t.opt.dimension3) return "video:" + this.strToInt(t.opt.dimension3);
                                        if (t.opt.dimension13) {
                                            var e = t.opt.dimension13;
                                            return "adxbackfill" !== e && this.strToInt(e), "creative:" + e
                                        }
                                    });
                                    break;
                                case "post_category":
                                    e.addMapTo("post_category", "").mapFrom(function(t) {
                                        if (t.data && t.data.post_category) return t.data.post_category
                                    });
                                    break;
                                case "unit_client_id":
                                    e.addMapTo("unit_client_id", "");
                                    break;
                                case "data_source":
                                    e.addMapTo("data_source", "").mapFrom(function(t) {
                                        var e = i()(t, "data.data_source", null);
                                        return n(t) ? "ad_api" : e
                                    });
                                    break;
                                case "treatment":
                                    e.addMapTo("treatment", "").mapFrom(function(t) {
                                        return i()(t, "data.treatment", null)
                                    });
                                    break;
                                case "sub_unit":
                                    e.addMapTo("sub_unit", "").mapFrom(function(t) {
                                        return n(t) ? "ad" : i()(t, "data.sub_unit", null)
                                    });
                                    break;
                                case "v":
                                    e.addMapTo("v", "").mapFrom(function(t) {
                                        return i()(t, "data.platform", "feedpager")
                                    })
                            }
                        })
                    }

                    function n(t) {
                        return -1 !== t.n.indexOf("dfp") && (t.n.match("|") && (t.n = t.n.replace(/\|/g, "/")), !0)
                    }
                    t.addUtility("capitalize", function(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }), t.addUtility("isNumeric", function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }), t.addUtility("strToInt", function(t) {
                        var e = parseInt(t, 10);
                        return !isNaN(e) && isFinite(e) ? e : ""
                    }), t.addUtility("getIdFromObjectId", function(t) {
                        return "string" == typeof t && t.indexOf(":") > -1 && (t = t.split(":")[1]), t
                    });
                    var a = t.getOrCreateRouter("track/page/view").createConfigForRoute(function(t) {
                        var e = i()(t, "data.url", "");
                        return "" === e || !e.match(/\?p=(\d)/)
                    });
                    e(a, ["page", "v"]), a.addMapTo("type", "pageview"), a.addMapTo("is_logged_in", Qe());
                    var r = t.getOrCreateRouter("track/page/exit").createConfigForRoute(function(t) {
                        return "exit" === t.n
                    });
                    e(r, ["post_category", "page", "os"]), r.addMapTo("type", "page_exit");
                    var o = t.getOrCreateRouter("track/click"),
                        s = o.createConfigForRoute(function(t) {
                            return t.data.fromUW ? (s.addMapTo("unit_client_id", this.strToInt(t.data.user.clientId)), s.addMapTo("content_id", "buzz:" + t.data.adbuzzid), s.addMapTo("position", t.d), !1) : "click:open-share-sheet" !== t.n && ((0 === t.l.indexOf("Feed") || 0 === t.l.indexOf("sidebar")) && (0 === t.n.indexOf("post") || 0 === t.n.indexOf("video")) || "Package" === t.l || "feed-filters" === t.l || n(t))
                        });
                    e(s, ["mode", "page_url", "os", "position", "sub_position", "post_category", "content_id", "unit_client_id", "page_type", "variation_id", "unit", "data_source", "treatment", "sub_unit"]), s.addMapTo("type", "unit_click");
                    var c = o.createConfigForRoute(function(t) {
                        return "Breaking-Bar" === t.l
                    });
                    c.applyTemplateByName("commonFields"), c.applyTemplateByName("pageFields"), c.addMapTo("type", "unit_click"), c.addMapTo("unit", "breaking"), c.addMapTo("link_url", "").mapFrom("data.url"), e(c, ["mode", "page_url", "os", "position", "content_id", "page_type", "unit_client_id", "post_category", "variation_id", "treatment", "sub_unit"]);
                    var u = ["share", "native-video:autoplay", "video:spinner", "video:playback"],
                        d = t.getOrCreateRouter("track/video").createConfigForRoute(function(t) {
                            return !t.n || -1 === u.indexOf(t.n)
                        });
                    e(d, ["mode", "page_url", "os", "position", "content_id", "page_type", "unit", "unit_client_id", "post_category", "variation_id", "treatment", "sub_unit"]), d.addMapTo("type", "").mapFrom("data.e", [t.formatters.strToLowerCase]), d.addMapTo("orientation").mapFrom("data.o", [t.formatters.strToLowerCase]), d.addMapTo("player_location", "").mapFrom("l", [t.formatters.strToLowerCase]), d.addMapTo("duration", "").mapFrom(function(t) {
                        return this.strToInt(t.data.d)
                    }), d.addMapTo("play_start_type").mapFrom("data.s", [t.formatters.strToLowerCase]), d.addMapTo("audio_volume").mapFrom("data.v", [t.formatters.strToLowerCase]), d.addMapTo("video_ts").mapFrom(function(t) {
                        return this.strToInt(t.data.t)
                    });
                    var l = t.getOrCreateRouter("track/scroll/impression").createConfigForRoute(function(t) {
                        return "scroll" === t.t && ("Feed" === t.l && ("post" === t.n || "video" === t.n) || "Package" === t.l || n(t)) && !W()(t.data) && !W()(t.data.obj_id) && this.isNumeric(this.getIdFromObjectId(t.data.obj_id))
                    });
                    e(l, ["mode", "page_url", "os", "position", "content_id", "unit_client_id", "post_category", "variation_id", "unit", "page_type", "data_source", "treatment", "sub_unit"]), l.addMapTo("type", "unit_impression");
                    var p = t.getOrCreateRouter("track/click").createConfigForRoute(function(t) {
                        return "Share" === t.l
                    });
                    e(p, ["mode", "page_url", "os", "position", "content_id"]), p.addMapTo("type", "share"), p.addMapTo("unit", "feed"), p.addMapTo("share_type", "").mapFrom("d"), p.addMapTo("share_activity_source", "").mapFrom(function(t) {
                        return "click:feed-module" === t.n ? "on_screen" : "share_sheet"
                    }), p.addMapTo("share_button_location", "feed_module"), p.addMapTo("share_tap_outcome", "");
                    var f = t.getOrCreateMap("track/abtest");
                    e(f, ["mode", "page_url", "os", "position", "post_category", "content_id", "unit_client_id", "page_type", "unit"]), f.addMapTo("type", "experiment_status"), f.addMapTo("experiment_name", "").mapFrom("data.experiment"), f.addMapTo("experiment_id", null).mapFrom("data.variation.id"), f.addMapTo("experiment_version", null).mapFrom("data.variation.version"), f.addMapTo("variant_id", null).mapFrom("data.variation.variant_id"), f.addMapTo("variant_name", null).mapFrom("data.variation.value");
                    var h = t.getOrCreateMap("track/abeagle/request");
                    e(h, ["mode", "page_url", "os", "position", "post_category", "content_id", "unit_client_id", "page_type", "unit"]), h.addMapTo("type", "experiment_request"), h.addMapTo("response_time_ms").mapFrom("data.responseTime"), Object(Ct.c)(t),
                        function(t) {
                            var e = t.getOrCreateRouter("track/videoplayer"),
                                n = e.createDefaultConfig();
                            n.addMapTo("page_edition", "").mapFrom("data.page.country"), n.addMapTo("page_type", "").mapFrom("data.page.type"), n.addMapTo("platform", "").mapFrom("data.page.platform"), n.addMapTo("referrer", "").mapFrom("data.user.referrer"), He.forEach(function(t, e) {
                                t.addMapTo(e, "").mapFrom("data.".concat(e))
                            }.bind(null, n))
                        }(t), Object(qe.a)(t), Object(Ze.c)(t), Object(Ze.a)(t),
                        function(t, e) {
                            var n = {
                                    feedpager: "feed",
                                    bpager: "buzz"
                                },
                                a = t.getOrCreateRouter("track/scroll/impression"),
                                r = t.getOrCreateRouter("track/click"),
                                o = a.createConfigForRoute(function(t) {
                                    return "buzzblocks/Package" === t.l
                                }),
                                s = r.createConfigForRoute(function(t) {
                                    return "buzzblocks/Package" === t.l
                                });
                            e(o, ["mode", "page_url", "os", "position", "content_id", "unit_client_id", "post_category", "variation_id", "data_source", "treatment"]), o.addMapTo("type", "unit_impression"), o.addMapTo("unit", "package"), o.addMapTo("sub_unit", "").mapFrom("d"), o.addMapTo("page_type", "").mapFrom(function(t) {
                                return Z()(n, i()(t, "data.page.platform")) ? n[i()(t, "data.page.platform")] : i()(t, "data.page.platform")
                            }), e(s, ["mode", "page_url", "os", "position", "post_category", "content_id", "unit_client_id", "variation_id", "data_source", "treatment"]), s.addMapTo("type", "unit_click"), s.addMapTo("unit", "package"), s.addMapTo("sub_unit", "").mapFrom("d"), s.addMapTo("sub_position", "").mapFrom(function(t) {
                                return t.data && t.data.sub_p ? t.data.sub_p : ""
                            }), s.addMapTo("page_type", "").mapFrom(function(t) {
                                return Z()(n, i()(t, "data.page.platform")) ? n[i()(t, "data.page.platform")] : i()(t, "data.page.platform")
                            })
                        }(t, e),
                        function(t, e) {
                            t || console.log("Cannot bind pixiedust mapping for feed-header: No mapper defined");
                            var n = t.getOrCreateRouter("track/click"),
                                a = n.createConfigForRoute(function(t) {
                                    return "FeedHeader" === t.l && "FeedHeaderBrand" === t.n
                                });
                            e(a, ["mode", "page_url", "os", "content_id", "unit_client_id", "variation_id", "data_source", "treatment"]), a.addMapTo("unit", "feed_header"), a.addMapTo("sub_unit", "brand"), a.addMapTo("type", "link_click_external");
                            var i = n.createConfigForRoute(function(t) {
                                return "FeedHeader" === t.l && "FeedHeaderSponsor" === t.n
                            });
                            e(i, ["mode", "page_url", "os", "content_id", "unit_client_id", "variation_id", "data_source", "treatment"]), i.addMapTo("unit", "feed_header"), i.addMapTo("sub_unit", "sponsor"), i.addMapTo("type", "link_click_external")
                        }(t, e)
                },
                Ye = "track/page/view",
                Xe = "track/click",
                Ke = "track/right-click",
                tn = "track/scroll/impression",
                en = "track/scroll/depth";

            function nn(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            var an = {
                    sessionId: Date.now().toString(32) + (1e8 * Math.random() | 0).toString(32),
                    e2e: st.a.queryStringToObject(document.location.search).e2e_test
                },
                rn = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.sandbox = e, this.pixiedust = new je({
                            dispatch: navigator.sendBeacon ? new function() {
                                var t, e = [],
                                    n = {};
                                return {
                                    setSessionVars: function(t) {
                                        n = Te()(n, t)
                                    },
                                    sendData: function() {
                                        if (e.length) {
                                            var n = JSON.stringify(e);
                                            !navigator.sendBeacon("".concat(Se.get("trackingURL"), "/events"), n) && window.raven && window.raven.captureException("Pixiedust: sendBeacon could not process a queue."), clearTimeout(t), t = null, e = []
                                        }
                                    },
                                    push: function(a) {
                                        e.push(J()({}, a, n)), e.length === Oe && this.sendData(), t || (t = setTimeout(this.sendData, Ee))
                                    }
                                }
                            } : new ze
                        }), this.generalSettings = e.getGeneralSettings(), this.settings = ft()(e.settings || {}, an), this.configureSandbox(), this.init = function() {
                            n.settings.mapping(n.sandbox.mapper), n.inited = !0, n.sandbox.moduleInited.dispatch(), n.activate()
                        }
                    }
                    return function(t, e, n) {
                        e && nn(t.prototype, e), n && nn(t, n)
                    }(t, [{
                        key: "activate",
                        value: function() {
                            !this.active && this.inited && this.user && this.user.clientId && (this.pixiedust.setSessionVars({
                                session_id: this.settings.sessionId,
                                client_id: this.user.clientId
                            }), this.pixiedust.start({
                                env: this.generalSettings.env,
                                sampling_rate: 1,
                                required_fields: []
                            }), this.active = !0, this.sandbox.moduleActive.dispatch())
                        }
                    }, {
                        key: "track",
                        value: function(t) {
                            if (this.active) {
                                var e = t.dataObj,
                                    n = t.eventType,
                                    a = t.route,
                                    i = t.routeVars.eventName,
                                    r = t.flush,
                                    o = void 0 !== r && r,
                                    s = e.mappingOverride,
                                    c = this.sandbox.tryConvertToEventInfo(e, n, i);
                                if (c) {
                                    c.data.page = this.page, c.data.user = this.user;
                                    var u = s ? s(c) : this.sandbox.mapper.map(a, c, {});
                                    Object.keys(u).length && (this.settings.e2e && (u.e2e_test = this.settings.e2e), this.pixiedust.push(u), o && this.pixiedust.flush(), this.generalSettings.mode !== bt.a.bfaMode.prod && this.sandbox.debugTracker.trackEvent(c, u))
                                }
                            } else this.sandbox.moduleActive.addOnce(this.track.bind(this, t), this)
                        }
                    }, {
                        key: "configureSandbox",
                        value: function() {
                            var t = this;
                            this.sandbox.subOn(Ye, function(e) {
                                t.track({
                                    route: Ye,
                                    eventType: "page",
                                    dataObj: e,
                                    routeVars: {
                                        eventName: "view"
                                    }
                                })
                            }, this), this.sandbox.subOn("".concat(Xe, "/{eventName}"), function(e, n) {
                                t.track({
                                    route: Xe,
                                    eventType: "click",
                                    flush: !0,
                                    dataObj: e,
                                    routeVars: n
                                })
                            }, this), this.sandbox.subOn("".concat(Ke, "/{eventName}"), function(e, n) {
                                t.track({
                                    route: Ke,
                                    eventType: "right-click",
                                    flush: !0,
                                    dataObj: e,
                                    routeVars: n
                                })
                            }), this.sandbox.subOn(tn, function(e, n) {
                                t.track({
                                    route: tn,
                                    eventType: "impression",
                                    dataObj: e,
                                    routeVars: n
                                })
                            }, this), this.sandbox.subOn(en, function(e) {
                                t.track({
                                    route: en,
                                    eventType: "scroll",
                                    flush: !0,
                                    dataObj: e,
                                    routeVars: {
                                        eventName: "depth"
                                    }
                                })
                            }), this.sandbox.subOn("track/raw/pixiedust", function(e) {
                                t.track({
                                    route: "track/raw/pixiedust",
                                    eventType: "raw",
                                    routeVars: {
                                        eventName: "pixiedust"
                                    },
                                    dataObj: e
                                })
                            }, this), this.sandbox.onPageReady(function() {
                                t.page = t.sandbox.getPageInfo(), t.activate()
                            }), this.sandbox.onUserReady(function() {
                                t.user = t.sandbox.getUserInfo(), t.activate()
                            }), this.sandbox.onUserChanged(function() {
                                t.user = t.sandbox.getUserInfo()
                            }), this.sandbox.onPageChanged(function() {
                                t.page = t.sandbox.getPageInfo()
                            })
                        }
                    }]), t
                }();
            rn.defaultId = "PixiedustV2Integration", rn.require = ["logger", "pageInfo", "userInfo", "debugTracker", "mapper", "trackingUtils", "generalSettings"];
            var on = rn,
                sn = n(47),
                cn = n.n(sn);

            function un(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = [],
                        a = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0);
                    } catch (t) {
                        i = !0, r = t
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return n
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var dn = function(t) {
                    return Number.isFinite(Number(t)) ? Number(t) : null
                },
                ln = function() {
                    return [
                        ["content_meta", cn()(null)],
                        ["target_content_type", function(t) {
                            var e = t.data;
                            return e.target_content_type || ("post" === e.obj_type ? "buzz" : e.obj_type || e.type)
                        }]
                    ]
                },
                pn = function() {
                    return [
                        ["platform", cn()("web")],
                        ["destination", cn()("buzzfeed")],
                        ["referrer_url", function(t) {
                            return t.data.user.referrer || document.referrer
                        }]
                    ]
                },
                fn = function() {
                    return [
                        ["unit_identifier", "data.unit_identifier"],
                        ["position_in_unit", function(t) {
                            var e = t.data;
                            return dn(e.position_in_unit || e.position || e.p)
                        }],
                        ["unit_name", "data.unit_name"],
                        ["sub_position", function(t) {
                            var e = t.data;
                            return dn(e.sub_position || e.sub_p)
                        }],
                        ["data_source", function(t) {
                            var e = t.data;
                            return decodeURIComponent(e.data_source || e.dataSource)
                        }],
                        ["algo_version", cn()(null)],
                        ["variation_id", function(t) {
                            var e = t.data;
                            return e.variation_id || e.variationId
                        }],
                        ["treatment", "data.treatment"]
                    ]
                },
                hn = function(t) {
                    var e = t.eventType,
                        n = t.type,
                        a = void 0 === n ? "web_".concat(e) : n;
                    return function() {
                        return [
                            ["type", cn()(a)],
                            ["event_type", cn()(e)],
                            ["uuid", ke.i],
                            ["viewport_size", cn()(JSON.stringify({
                                width: window.screen.width,
                                height: window.screen.height
                            }))],
                            ["client_ts", function() {
                                return Date.now()
                            }]
                        ]
                    }
                };

            function gn(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function mn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), a.forEach(function(e) {
                        vn(t, e, n[e])
                    })
                }
                return t
            }

            function vn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function bn(t, e) {
                if (null == t) return {};
                var n, a, i = function(t, e) {
                    if (null == t) return {};
                    var n, a, i = {},
                        r = Object.keys(t);
                    for (a = 0; a < r.length; a++) n = r[a], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < r.length; a++) n = r[a], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }
            var yn = function(t) {
                    var e = t.route,
                        n = t.mapper,
                        a = t.layers,
                        i = t.shouldTrack,
                        r = void 0 === i ? function() {
                            return !0
                        } : i;
                    return function(t) {
                        var e = t.mapping,
                            n = t.layers;
                        return (void 0 === n ? [] : n).forEach(function(t) {
                            t().forEach(function(t) {
                                var n = un(t, 2),
                                    a = n[0],
                                    i = n[1];
                                e.addMapTo(a).mapFrom(i)
                            })
                        }), e
                    }({
                        mapping: n.getOrCreateRouter(e).createConfigForRoute(r),
                        layers: a
                    })
                },
                wn = n(8),
                kn = {
                    mode: function() {
                        return wn.a.isXsmall() || wn.a.isSmall() ? "mobile" : "desktop"
                    },
                    os: function() {
                        var t = "Linux",
                            e = "MacOs",
                            n = "Unix",
                            a = "Unknown",
                            i = "Windows";
                        return -1 !== navigator.appVersion.indexOf("Win") ? i : -1 !== navigator.appVersion.indexOf("Mac") ? e : -1 !== navigator.appVersion.indexOf("X11") ? n : -1 !== navigator.appVersion.indexOf("Linux") ? t : a
                    },
                    referrer: function() {
                        return window.document.referrer
                    },
                    screenResolution: function() {
                        return window.screen.width + " x " + window.screen.height
                    },
                    userAgent: function() {
                        return navigator.userAgent.toLowerCase()
                    }
                },
                _n = function(t) {
                    var e = t.data.url;
                    return !e || !e.match(/\?p=\d+/)
                },
                Tn = function(t) {
                    var e = t.n,
                        n = t.l;
                    return !e.match(/(-|\|)dfp$/) && "Nav-Link" !== e && "Exit-Link" !== e && ("FeedItem" === e || "Feed" === n || "Package" === n || "buzzblocks/Package" === n)
                },
                Mn = function(t) {
                    var e = t.pageType,
                        n = t.pageId;
                    return function() {
                        return [
                            ["page_url", function(t) {
                                return t.data.page.uri.href || document.location.href
                            }],
                            ["page_edition", "data.page.country"],
                            ["context_page_type", cn()(e)],
                            ["context_page_id", function(t) {
                                var e = t.data;
                                return dn(e.page.id || n)
                            }],
                            ["target_content_id", function(t) {
                                var e = t.data;
                                return dn(e.target_content_id || e.obj_id || e.id)
                            }]
                        ]
                    }
                }({
                    pageType: "feed"
                }),
                xn = function() {
                    return [
                        ["os", kn.os],
                        ["mode", kn.mode]
                    ]
                },
                Cn = function(t) {
                    ! function(t) {
                        var e = t.layers,
                            n = void 0 === e ? [] : e,
                            a = bn(t, ["layers"]);
                        yn(mn({
                            route: Ye,
                            layers: [hn({
                                eventType: "pageview"
                            }), pn, ln].concat(gn(n))
                        }, a))
                    }({
                        mapper: t,
                        layers: [Mn, xn],
                        shouldTrack: _n
                    }),
                    function(t) {
                        var e = t.layers,
                            n = void 0 === e ? [] : e,
                            a = bn(t, ["layers"]);
                        yn(mn({
                            route: Xe,
                            layers: [hn({
                                eventType: "click"
                            }), pn, ln, fn].concat(gn(n))
                        }, a))
                    }({
                        mapper: t,
                        layers: [Mn, xn],
                        shouldTrack: Tn
                    }),
                    function(t) {
                        var e = t.layers,
                            n = void 0 === e ? [] : e,
                            a = bn(t, ["layers"]);
                        yn(mn({
                            route: Ke,
                            layers: [hn({
                                eventType: "right_click",
                                type: "web_click"
                            }), pn, ln, fn].concat(gn(n))
                        }, a))
                    }({
                        mapper: t,
                        layers: [Mn, xn],
                        shouldTrack: Tn
                    }),
                    function(t) {
                        var e = t.layers,
                            n = void 0 === e ? [] : e,
                            a = bn(t, ["layers"]);
                        yn(mn({
                            route: tn,
                            layers: [hn({
                                eventType: "impression"
                            }), pn, ln, fn].concat(gn(n))
                        }, a))
                    }({
                        mapper: t,
                        layers: [Mn, xn],
                        shouldTrack: Tn
                    })
                };

            function Fn(t, e) {
                e = e || {}, this.defaultSettings = {
                    cookieName: "bfa_test"
                }, this.settings = ft()(e, this.defaultSettings);
                var n = t.utils.readCookie(this.settings.cookieName);
                return this._isTestMode = n.length > 0 && "true" === n[0].value, this.updateGeneralSettings = function(e) {
                    e.mode !== t.defs.bfaMode.test && t.push("general/settings/update", {
                        mode: t.defs.bfaMode.test
                    })
                }, this._isTestMode && (this.updateGeneralSettings(t._generalSettings), t._onGeneralSettingsChange.add(this.updateGeneralSettings, this)), {}
            }
            Fn.defaultId = "testMode", Fn.require = ["generalSettings"];
            var Sn = Fn,
                On = n(50),
                En = n.n(On),
                In = n(221),
                Pn = n.n(In);

            function An() {
                function t(t, e, n) {
                    if (!q()(t) || 0 === t.length) return !1;
                    if (!(n instanceof K)) return !1;
                    var a = -1 !== Pn()(En()(bt.a.trackingBehavior), e) ? e : bt.a.trackingBehavior.byDefault,
                        i = n.opt,
                        r = !1;
                    switch (a) {
                        case bt.a.trackingBehavior.ifSpecified:
                            ue()(i) && Rt()(i.force) && (-1 !== i.force.indexOf("all") || -1 !== i.force.indexOf(t)) && (r = !0);
                            break;
                        case bt.a.trackingBehavior.byDefault:
                        default:
                            (!ue()(i) || !Rt()(i.ignore) || -1 === i.ignore.indexOf("all") && -1 === i.ignore.indexOf(t) || Rt()(i.force) && -1 !== i.force.indexOf(t)) && (r = !0)
                    }
                    return r
                }

                function e(t, e, n) {
                    return (t = t || {}) instanceof K ? t : (q()(t.t) && 0 !== t.t.length || (t.t = e), q()(t.n) && 0 !== t.n.length || (t.n = n), K.tryParse(t))
                }
                return {
                    modifySBInstance: function(n) {
                        n.canTrackEvent = t, n.tryConvertToEventInfo = e
                    }
                }
            }
            An.defaultId = "trackingUtils";
            var Dn = An,
                Bn = n(35);

            function Nn(t, e) {
                e = e || {}, this.defaultSettings = {
                    readyOnFirstUpdate: !0,
                    isReady: !1,
                    userInfo: {
                        isLoggedIn: !1,
                        referrer: document.referrer,
                        userAgent: navigator.userAgent,
                        inApp: !1,
                        clientId: null
                    }
                };
                var n = this;

                function a(t, e) {
                    !0 === n.settings.isReady && t.call(e), n.userReady.add(t, e)
                }

                function i() {
                    return Ot()(n.settings.userInfo)
                }
                return this.userReady = new ot.a, this.userChanged = new ot.a, this.settings = ft()(e, this.defaultSettings), t._router.sub("general/user/{action}", function(e, n) {
                    var a = this;
                    if ("update" === n.action)
                        if (ue()(e)) {
                            this.settings.userInfo = u()(this.settings.userInfo, e);
                            var i = this.settings.userInfo,
                                r = t.utils.getAppReferrer(i.userAgent, i.referrer);
                            r && (i.referrer = r, i.inApp = !0), this.userChanged.dispatch(), !this.settings.isReady && this.settings.readyOnFirstUpdate && Object(Bn.a)({
                                env: t._generalSettings.env
                            }).then(function(t) {
                                a.settings.userInfo.clientId = t, a.settings.isReady = !0, a.userReady.dispatch()
                            })
                        } else t.log.warn("user info must be a plain object");
                    else t.log.warn("user info can only be updated")
                }, this, {
                    action: ["ready", "update", "set"]
                }), t._onUserReady = function(t, e) {
                    a(t, e)
                }, t._getUserInfo = function() {
                    return i()
                }, {
                    modifySBInstance: function(t) {
                        t.getUserInfo = function() {
                            return i()
                        }, t.onUserReady = function(t, e) {
                            a(t, e)
                        }, t.onUserChanged = function(t, e, a) {
                            n.userChanged[a ? "addOnce" : "add"](t, e)
                        }
                    }
                }
            }
            Nn.defaultId = "userInfo";
            var Rn = Nn,
                zn = s.d.getQueryParams();
            ! function() {
                var t = new r.Core,
                    e = window.BZFD,
                    n = e.Config,
                    a = e.Context,
                    s = "true" === zn.bfadebug,
                    c = {
                        mode: "dev" === n.env || s ? t.defs.bfaMode.develop : t.defs.bfaMode.prod,
                        webRoot: n.webRoot,
                        staticRoot: n.staticRoot,
                        env: n.env,
                        isConsentRequired: "quantcast" === zn.bfadebug || n.isConsentRequired,
                        logLevel: s ? 3 : 1,
                        debug: s,
                        source: "feedpager"
                    },
                    u = {
                        id: i()(a, "page.id"),
                        country: i()(a, "page.localization.country"),
                        type: "feed",
                        language: i()(a, "page.localization.language"),
                        name: i()(a, "page.name"),
                        category: "",
                        platform: "feedpager",
                        uri: {
                            cleanedPath: document.location.pathname
                        }
                    },
                    d = {
                        referrer: document.referrer
                    };
                t.plugin(It, c).plugin(Ht).plugin(ut).plugin(Lt).plugin(ie).plugin(le).plugin(Rn).plugin(Dn).plugin(Sn).plugin(nt).plugin(V, {
                    bfaFunctionName: "bfa",
                    domBinder: {
                        delegatedMapping: {
                            click: [{
                                event: "click",
                                selector: "a",
                                options: {
                                    handlers: ["ATagWithExternalLinkHandler", "ATagWithInternalLinkHandler", "ATagDefaultHandler"]
                                }
                            }, {
                                event: "click",
                                selector: "input"
                            }, {
                                event: "click",
                                selector: "button"
                            }],
                            "right-click": [{
                                event: "contextmenu",
                                selector: "a",
                                options: {
                                    handlers: ["ATagWithExternalLinkHandler", "ATagWithInternalLinkHandler", "ATagDefaultHandler"]
                                }
                            }]
                        }
                    },
                    inViewImpressionBinder: {
                        enabled: !0,
                        locators: ["[data-bfa-impressions=true]"]
                    }
                }), t.registerModule(xt, {
                    extFilePath: "//www.google-analytics.com/analytics.js",
                    googleAnalyticsId: i()(n, "tracking.googleAnalytics.id"),
                    configMapsDelegate: Ft
                }).registerModule(oe, {
                    extFilesPaths: ["https://cdn-gl.imrworldwide.com/novms/js/2/ggcmb510.js"],
                    configMapsDelegate: se
                }).registerModule(Ue, {
                    samplingRate: "1",
                    configMapsDelegate: $e,
                    impressionsSamplingRate: i()(n, "tracking.pixiedust.impression_sampling_rate"),
                    instrumentationSamplingRate: i()(n, "tracking.pixiedust.instrumentation_sampling_rate"),
                    performanceSamplingRate: i()(n, "tracking.pixiedust.performance_sampling_rate")
                }).registerModule(on, {
                    mapping: Cn
                }).registerModule(wt, {
                    extFilesPaths: ["https://connect.facebook.net/en_US/fbevents.js"],
                    configMapsDelegate: Tt
                }).registerModule(we, {
                    enabled: o.a.checkIsOn()
                }), t.activatePlugins(), t.push("general/page/update", u), t.push("general/user/update", d), t.domi.onDomReady(function() {
                    t.push("plugin/binder/activate")
                }), t.activate()
            }(), n(56).a.init().then(function(t) {
                t.AppEvents.logPageView()
            })
        },
        51: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        52: function(t, e, n) {
            "use strict";

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.head,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return new Promise(function(a, i) {
                    var r = document.createElement("script");
                    r.onload = function() {
                        return a(r)
                    }, r.onerror = function() {
                        i("Script failed to load")
                    }, r.src = t, r.async = n, e.appendChild(r)
                })
            }
            n.d(e, "a", function() {
                return a
            })
        },
        56: function(t, e, n) {
            "use strict";
            var a = n(0),
                i = n(10);

            function r(t) {
                return t + "|expiration"
            }
            var o, s, c = {
                    set: function(t) {
                        i.a.supportsLocalStorage && void 0 !== t && (localStorage.setItem(t.key, t.value), t.expires && localStorage.setItem(r(t.key), Date.now() + t.expires))
                    },
                    get: function(t) {
                        return i.a.supportsLocalStorage ? function(t) {
                            var e = localStorage.getItem(r(t));
                            return e && e <= Date.now()
                        }(t) ? (this.remove(t), null) : localStorage.getItem(t) : null
                    },
                    sessionSet: function(t) {
                        i.a.supportsLocalStorage && void 0 !== t && sessionStorage.setItem(t.key, t.value)
                    },
                    sessionGet: function(t) {
                        return i.a.supportsLocalStorage ? sessionStorage.getItem(t) : null
                    },
                    remove: function(t) {
                        i.a.supportsLocalStorage && (localStorage.removeItem(r(t)), localStorage.removeItem(t))
                    },
                    clear: function() {
                        i.a.supportsLocalStorage && localStorage.clear()
                    }
                },
                u = n(2),
                d = n(25),
                l = window.BZFD.Config.facebookApi.appId || null,
                p = window.BZFD.Config.facebookApi.version;

            function f() {
                return s || (s = new Promise(function(t) {
                    window.fbAsyncInit = function() {
                        (o = window.FB).init({
                            version: p,
                            appId: l,
                            status: !0,
                            cookie: !0,
                            xfbml: !0
                        }), t(o)
                    }
                }), u.a.createScript("//connect.facebook.net/en_US/sdk.js")), s
            }

            function h() {
                var t = c.sessionGet("offset");
                t && window.scrollTo(0, t)
            }
            var g = {
                parse: function(t) {
                    return f().then(function(e) {
                        return e.XFBML.parse(t)
                    })
                },
                subscribe: function(t, e) {
                    return f().then(function(n) {
                        return n.Event.subscribe(t, e)
                    })
                },
                unsubscribe: function(t, e) {
                    return f().then(function(n) {
                        return n.Event.unsubscribe(t, e)
                    })
                },
                ui: function(t, e) {
                    o.ui(t, e)
                }
            };
            g.openFeedDialog = function(t) {
                var e = u.a.extend({}, {
                    method: "share",
                    app_id: l,
                    href: d.a.getUrl(),
                    caption: d.a.getCaption(),
                    description: d.a.getDescription(),
                    name: d.a.getTitle(),
                    picture: d.a.getPicture(),
                    ref: "mobile_share",
                    iframe_test: !0
                }, t);
                if (e.app_id = l, t.redirect_uri = t.redirectUri || t.url, o) {
                    c.sessionSet({
                        key: "offset",
                        value: window.scrollY
                    }), g.ui(e, h);
                    var n = a.b.findOne(document, "#fb_dialog_loader_close");
                    n && a.b.one(n, "click", function(t) {
                        return t.preventDefault()
                    })
                } else u.a.openPopup(u.a.prepareUrl("https://www.facebook.com/dialog/" + e.method + "/?", e))
            }, g.share = function(t, e) {
                "android" === i.a.os && (t.display = "popup", t.iframe_test = !1), e && e.preventDefault(), g.openFeedDialog(t)
            }, g.init = f;
            e.a = g
        },
        62: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return u
            }), n.d(e, "a", function() {
                return d
            });
            var a = n(4),
                i = n.n(a),
                r = "target",
                o = "value",
                s = "platform",
                c = "tags",
                u = "track/website/instrumentation";

            function d(t) {
                var e = t.getOrCreateMap(u);
                return e.addMapTo("type", "instrumentation"), e.addMapTo("platform", "").mapFrom(function(t) {
                    return i()(t, "data.".concat(s)) || i()(t, "data.page.platform")
                }), e.addMapTo("edition", "").mapFrom("data.page.country"), e.addMapTo("category", "").mapFrom(function(t) {
                    return i()(t, "data.page.category") || "home"
                }), e.addMapTo(r, "").mapFrom("data.".concat(r)), e.addMapTo(o, "").mapFrom("data.".concat(o)), e.addMapTo(c, "").mapFrom(function(t) {
                    return JSON.stringify(i()(t, "data.".concat(c), ""))
                }), e
            }
        },
        63: function(t, e, n) {
            "use strict";
            var a = n(110),
                i = n.n(a);
            e.a = {
                renderString: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return i.a.compile(t, n).render(e)
                }
            }
        },
        64: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return v
            }), n.d(e, "c", function() {
                return b
            }), n.d(e, "b", function() {
                return y
            });
            var a = n(13),
                i = n(18),
                r = "id",
                o = "type",
                s = "contentCategory",
                c = "unit",
                u = "unitType",
                d = "unit_name",
                l = "position",
                p = "position_in_unit",
                f = "dataSource",
                h = "subUnit",
                g = "variationId",
                m = function(t) {
                    return "Feed" === t.l && "FeedItem" === t.n
                },
                v = function(t, e, n, a) {
                    if (!e) throw new Error("unit must be specified for tracking");
                    return '\n    data-bfa-impressions="true"\n    data-bfa="@a:FeedItem; @e:{ '.concat(r, ":").concat(n.id, ",\n                                ").concat(o, ":").concat(n.type || "buzz", ",\n                                ").concat(s, ":").concat(n.category || "", ",\n                                ").concat(c, ":").concat(e, ",\n                                ").concat(u, ":").concat(t, ",\n                                ").concat(d, ":").concat(a, ",\n                                ").concat(l, ":").concat(n.number || n.position || -1, ",\n                                ").concat(p, ":").concat(n.position, ",\n                                ").concat(f, ":").concat(n.dataSource || n.data_source, ",\n                                ").concat(h, ":").concat(n.sub_unit || "", ",\n                                ").concat(g, ":").concat(n.variationId || "", '\n                              };"\n  ')
                },
                b = function(t) {
                    var e = t.createMapTemplate("feedTmpl");
                    e.addMapTo("page_edition", i.a.getEdition()), e.addMapTo("page_type").mapFrom("data.page.type"), e.addMapTo("page").mapFrom("data.page.type"), e.addMapTo("page_url").mapFrom("data.page.uri.path"), e.addMapTo("author").mapFrom("data.page.post.author"), e.addMapTo("author_id").mapFrom("data.page.post.authorId"), e.addMapTo("post_category").mapFrom("data.page.category"), e.addMapTo("mode", a.a.isXsmall() || a.a.isSmall() ? "mobile" : "desktop");
                    var n = function(t) {
                        return function(e) {
                            return e.data[t]
                        }
                    };
                    e.addMapTo("content_id").mapFrom(function(t) {
                        return "".concat(t.data[o] || "buzz", ":").concat(t.data[r])
                    }), e.addMapTo("content_category").mapFrom(n(s)), e.addMapTo("unit").mapFrom(n(c)), e.addMapTo("unitType").mapFrom(n(u)), e.addMapTo("position").mapFrom(n(l)), e.addMapTo("data_source").mapFrom(n(f)), e.addMapTo("sub_unit").mapFrom(n(h)), e.addMapTo("variation_id").mapFrom(n(g));
                    var d = t.getOrCreateRouter("track/click").createConfigForRoute(m);
                    d.applyTemplateByName("feedTmpl"), d.addMapTo("type", "unit_click");
                    var p = t.getOrCreateRouter("track/scroll/impression").createConfigForRoute(m);
                    p.applyTemplateByName("feedTmpl"), p.addMapTo("type", "unit_impression")
                },
                y = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.createMapTemplate("gaFeedTmpl");
                    n.addMapTo("category").mapFrom(function(t) {
                        return "".concat(t.data[u], ":").concat(t.data[c])
                    }), n.addMapTo("label").mapFrom(function(t) {
                        return "".concat(t.data[o] || "buzz", ":").concat(t.data[r])
                    }), n.addMapTo("value").mapFrom(function(t) {
                        return t.data[l]
                    });
                    var a = t.getOrCreateRouter("track/click").createConfigForRoute(m);
                    if (a.applyTemplateByName("gaFeedTmpl"), a.addMapTo("action", "click"), e) {
                        var i = t.getOrCreateRouter("track/scroll/impression").createConfigForRoute(m);
                        i.applyTemplateByName("gaFeedTmpl"), i.addMapTo("action", "impression")
                    }
                }
        },
        7: function(t, e, n) {
            "use strict";
            var a = n(106),
                i = n.n(a),
                r = n(35),
                o = n(15),
                s = "track/abtest",
                c = "track/abeagle/request";
            var u, d = n(33),
                l = n(12),
                p = n(24),
                f = [],
                h = {},
                g = {},
                m = {},
                v = function() {
                    var t = Object(o.c)(window.location.search);
                    return t.abflags || t.abdebug
                }(),
                b = l.a.getBuzzfeedSubdomainOrWildcard(window.location.hostname),
                y = null;

            function w(t, e) {
                g[t] = e, h[t] && h[t].forEach(function(t) {
                    return t.resolve(e)
                })
            }

            function k() {
                f.forEach(function(t) {
                    t.isEligible() && w(t.name, y)
                })
            }

            function _(t, e) {
                var n = window.location.hostname.replace("www", "");
                l.a.remove(t, ".".concat(n));
                var a = b === "www.".concat(n) ? 14 : 1;
                l.a.set({
                    name: t,
                    value: e,
                    days: a,
                    domain: b
                })
            }

            function T(t, e) {
                window.bfa(t, {
                    data: e
                })
            }

            function M(t) {
                Object.keys(t).forEach(function(e) {
                    var n = "".concat(e, "_version"),
                        a = t[e],
                        i = a.value,
                        r = a.version,
                        o = a.error,
                        c = a.resolved;
                    if (o) {
                        var u = {
                            type: "ExperimentServerError",
                            name: e,
                            error: o
                        };
                        return m[e] = u, void(h[e] && h[e].forEach(function(t) {
                            return t.resolve(y)
                        }))
                    }
                    if (c && (i = i || "control"), w(e, i), null === i) return l.a.remove(e, b), void l.a.remove(n, b);
                    var d = l.a.get(e) === String(i),
                        p = l.a.get(n) === String(r);
                    d && p || (_(e, i), _(n, r), T("".concat(s, "/").concat(e), {
                        experiment: e,
                        variation: a
                    }))
                })
            }

            function x(t, e) {
                var n = [];
                f.forEach(function(t) {
                    "boolean" == typeof t.storeResponse && t.storeResponse && n.push(t.name)
                }), 0 !== n.length && t.forEach(function(t) {
                    if (-1 !== n.indexOf(t)) {
                        var a = e[t];
                        if (!a || a.error || null === a.value) w(t, y);
                        else {
                            var i = t + "_metadata",
                                r = a;
                            r = JSON.stringify(r), r = escape(r), l.a.get(i) !== r && _(i, r)
                        }
                    }
                })
            }
            e.a = {
                registerExperiments: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    f = t, u = null
                },
                getExperimentMetaData: function(t) {
                    var e = {};
                    return t.forEach(function(t) {
                        var n = l.a.get(t + "_metadata");
                        try {
                            n = unescape(n), n = JSON.parse(n), e[t] = n
                        } catch (t) {
                            return
                        }
                    }), e
                },
                getExperimentVariant: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.rejectErrors,
                        a = void 0 === n || n,
                        i = e.defaultVariantIfUnbucketed,
                        r = void 0 === i ? "control" : i,
                        s = e.errorVariant,
                        c = void 0 === s ? y : s,
                        u = function(t) {
                            return Object(o.c)(window.location.search)["abeagle_".concat(t)]
                        }(t);
                    if (u) return Promise.resolve(u);
                    var d, l = f.filter(function(e) {
                            return e.name === t
                        })[0],
                        p = m[t];
                    return l ? l.isEligible() || (p = {
                        type: "ExperimentNotEligible",
                        name: t
                    }) : p = {
                        type: "ExperimentNotFound",
                        name: t
                    }, p ? !1 === a ? (this.defaultErrorHandler(p), d = Promise.resolve(c)) : d = Promise.reject(p) : d = t in g ? Promise.resolve(g[t]) : new Promise(function(e, n) {
                        h[t] ? h[t].push({
                            resolve: e,
                            reject: n
                        }) : h[t] = [{
                            resolve: e,
                            reject: n
                        }]
                    }), r !== y && (d = d.then(function(t) {
                        return t === y ? r : t
                    })), d
                },
                isOn: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "on";
                    return i()(e) ? Promise.reject("onValue cannot be null or undefined") : this.getExperimentVariant(t, {
                        rejectErrors: !1
                    }).then(function(t) {
                        return t === e
                    })
                },
                defaultErrorHandler: function(t) {
                    if (t instanceof Error) throw t;
                    if ("prod" !== window.BZFD.Config.env) switch (t.type) {
                        case "ExperimentNotFound":
                            console.log('Experiment "'.concat(t.name, '" is not registered'));
                            break;
                        case "ExperimentNotEligible":
                            console.log('Experiment "'.concat(t.name, '" is not eligible'));
                            break;
                        case "ExperimentServerError":
                            console.log("Experiment ".concat(t.name, " error: ").concat(t.error))
                    }
                },
                getVariants: function() {
                    if (p.a.eventStart("abeagle.getVariants"), v) return f.forEach(function(t) {
                        if (t.isEligible()) {
                            var e = l.a.get(t.name);
                            w(t.name, e)
                        }
                    }), Promise.resolve();
                    if (u) return Promise.resolve();
                    var t = f.filter(function(t) {
                        return t.isEligible()
                    }).map(function(t) {
                        return t.name
                    });
                    if (!t.length) return Promise.resolve();
                    var e = (new Date).getTime();
                    return Object(r.a)({
                        env: BZFD.Config.env
                    }).then(function(n) {
                        return u = d.a.get("".concat(window.BZFD.Config.abeagle.url, "/public/v2/experiment_variants"), {
                            data: {
                                experiment_names: t.join(";"),
                                user_id: n,
                                client_id: "buzz_web"
                            },
                            timeout: 1500
                        }).then(function(n) {
                            p.a.mark("".concat("abeagle.getVariants", "_fetched")), T(c, {
                                responseTime: Date.now() - e
                            }), M(n), x(t, n), p.a.eventEnd("abeagle.getVariants")
                        }).catch(k)
                    })
                },
                saveExperiments: function(t) {
                    void 0 !== t.experimentsMap && void 0 !== t.experimentNames && (M(t.experimentsMap), x(t.experimentNames, t.experimentsMap))
                },
                start: function() {
                    this.getVariants(), v ? n.e(9).then(n.bind(null, 472)).then(function(t) {
                        t.start(f)
                    }) : f.forEach(function(t) {
                        if (t.isEligible()) {
                            var e = l.a.get(t.name);
                            e && w(t.name, e)
                        } else w(t.name, y)
                    })
                },
                reset: function() {
                    f = [], h = {}, m = {}, g = {}, u = null
                }
            }
        },
        8: function(t, e, n) {
            "use strict";
            var a, i = n(111),
                r = n.n(i),
                o = n(1),
                s = window,
                c = {
                    xs: "(max-width:39.9rem)",
                    sm: "(min-width:40rem) and (max-width:51.9rem)",
                    md: "(min-width:52rem) and (max-width:63.9rem)",
                    lg: "(min-width:64rem)"
                };

            function u(t) {
                return "screen and ".concat(c[t])
            }
            var d = new o.EventTarget;
            d.init = function() {
                Object.keys(c).forEach(function(t) {
                    var e = s.matchMedia(u(t));
                    e.addListener(function(e) {
                        e.matches && (d.fire(t), d.fire("match", {
                            breakpoint: t
                        }))
                    }), d[t] = e
                })
            }, d.init(), a = {
                _getWindowWidth: function() {
                    return Number(s.innerWidth)
                },
                _isRetinaDevice: function() {
                    return s.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches
                },
                _makeSizeMediaQuery: u,
                _mediaMatches: function(t) {
                    return t in c && d[t].matches
                },
                isBreakpoint: function(t) {
                    return a._mediaMatches(t)
                },
                isXsmall: function() {
                    return a._mediaMatches("xs")
                },
                isSmall: function() {
                    return a._mediaMatches("sm")
                },
                isMedium: function() {
                    return a._mediaMatches("md")
                },
                isLarge: function() {
                    return a._mediaMatches("lg")
                },
                isAny: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return r()(t, a._mediaMatches)
                },
                isSmallerThan: function(t) {
                    var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).inclusive,
                        n = void 0 === e || e;
                    return "xs" === t ? !!n && a.isXsmall() : "sm" === t ? n ? a.isAny(["xs", "sm"]) : a.isXsmall() : "md" === t ? n ? a.isAny(["xs", "sm", "md"]) : a.isAny(["xs", "sm"]) : "lg" === t && (!!n || a.isAny(["xs", "sm", "md"]))
                },
                isLargerThan: function(t) {
                    var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).inclusive,
                        n = void 0 === e || e;
                    return "xs" === t ? !!n || a.isAny(["sm", "md", "lg"]) : "sm" === t ? n ? a.isAny(["sm", "md", "lg"]) : a.isAny(["md", "lg"]) : "md" === t ? n ? a.isAny(["md", "lg"]) : a.isLarge() : "lg" === t && (!!n && a.isLarge())
                },
                breakPoint: function(t) {
                    return a._mediaMatches(t)
                },
                getBreakPoint: function() {
                    var t;
                    for (var e in c)
                        if (a.breakPoint(e)) {
                            t = e;
                            break
                        }
                    return t
                },
                getWindowWidth: function() {
                    return a._isRetinaDevice() ? 2 * a._getWindowWidth() : a._getWindowWidth()
                },
                get cssBreakpoints() {
                    return {
                        xs: null,
                        sm: "40rem",
                        md: "52rem",
                        lg: "64rem"
                    }
                },
                get breakpointObserver() {
                    return {
                        on: function() {
                            return d.on.apply(d, arguments)
                        },
                        off: function() {
                            return d.off.apply(d, arguments)
                        }
                    }
                }
            }, e.a = a
        },
        83: function(t, e, n) {
            "use strict";
            var a = n(15),
                i = n(7),
                r = n(20),
                o = n(28),
                s = {
                    isTest: "permutive-test" in ({
                        queryStringToObject: a.c
                    }.queryStringToObject(window.location.search) || {}),
                    checkIsOn: function() {
                        return s.isTest ? Promise.resolve(!0) : o.a.needsConsent || r.a.isMobileApp() ? Promise.resolve(!1) : i.a.getExperimentVariant("ADSGROUP-442-permutive").catch(function(t) {
                            return t && "ExperimentNotFound" === t.type ? "on" : null
                        }).then(function(t) {
                            return Promise.resolve("on" === t)
                        })
                    }
                };
            e.a = s
        },
        9: function(t, e, n) {
            "use strict";
            var a = n(108),
                i = n.n(a),
                r = n(44),
                o = n.n(r),
                s = n(36),
                c = n.n(s);
            var u = {
                get isBPage() {
                    try {
                        return "buzz" in BZFD.Context
                    } catch (t) {
                        return !1
                    }
                },
                get hasQuiz() {
                    try {
                        return BZFD.Context.page.hasQuiz
                    } catch (t) {
                        return !1
                    }
                },
                get hasList() {
                    try {
                        return BZFD.Context.buzz.format.type.match(/list/)
                    } catch (t) {
                        return !1
                    }
                },
                get isFeedPage() {
                    return !!window.FEEDPAGER || !!BZFD.Context.feedpager
                },
                get isFeedpager() {
                    return u.isFeedPage
                },
                get isFeed() {
                    return !!BZFD.Context.isFeed
                },
                get isHomePage() {
                    return !!BZFD.Context.homepage || "home" === u.pageName
                },
                get isBuzzblocks() {
                    try {
                        return "buzzblocks" === BZFD.Config.service
                    } catch (t) {
                        return !1
                    }
                },
                get isDev() {
                    try {
                        return "dev" === BZFD.Config.env
                    } catch (t) {
                        return !1
                    }
                },
                get isStage() {
                    try {
                        return "stage" === BZFD.Config.env
                    } catch (t) {
                        return !1
                    }
                },
                get isProd() {
                    try {
                        return "prod" === BZFD.Config.env
                    } catch (t) {
                        return !1
                    }
                },
                get isPharmaceutical() {
                    return "emdserono" === u.author
                },
                get author() {
                    try {
                        return u.isBPage ? BZFD.Context.buzz.username : BZFD.Context.page.username
                    } catch (t) {
                        return null
                    }
                },
                get pageName() {
                    try {
                        return BZFD.Context.page.name
                    } catch (t) {
                        return null
                    }
                },
                get pageCategory() {
                    try {
                        return BZFD.Context.page.category
                    } catch (t) {
                        return null
                    }
                },
                get pageVertical() {
                    try {
                        return BZFD.Context.page.vertical
                    } catch (t) {
                        return null
                    }
                },
                get pageClassification() {
                    try {
                        return BZFD.Context.page.classification || {}
                    } catch (t) {
                        return {}
                    }
                },
                get localization() {
                    try {
                        return i()(BZFD.Context.page.localization, ["country", "language", "locale"])
                    } catch (t) {
                        return {}
                    }
                },
                get allPageClassifications() {
                    try {
                        return BZFD.Context.page.allClassifications || {}
                    } catch (t) {
                        return {}
                    }
                },
                get allPageSections() {
                    try {
                        return BZFD.Context.page.allClassifications.sections || []
                    } catch (t) {
                        return []
                    }
                },
                get allPageEditions() {
                    try {
                        return BZFD.Context.page.allClassifications.editions || []
                    } catch (t) {
                        return []
                    }
                },
                get pageFilter() {
                    try {
                        return BZFD.Context.page.filter
                    } catch (t) {
                        return null
                    }
                },
                get pageFilters() {
                    try {
                        return BZFD.Context.page.filters || {}
                    } catch (t) {
                        return {}
                    }
                },
                get pageMainFilter() {
                    try {
                        var t, e = BZFD.Context.page.filters;
                        for (var n in e)
                            if (e[n].is_main) {
                                t = n;
                                break
                            }
                        return t || null
                    } catch (t) {
                        return null
                    }
                },
                get isWidePost() {
                    try {
                        return "buzz" in BZFD.Context && "wide" === BZFD.Context.page.width
                    } catch (t) {
                        return !1
                    }
                },
                get facebookApiAppId() {
                    try {
                        return BZFD.Config.facebookApi.appId
                    } catch (t) {
                        return null
                    }
                },
                get facebookApiVersion() {
                    try {
                        return BZFD.Config.facebookApi.version
                    } catch (t) {
                        return "v2.9"
                    }
                },
                get isNewsPost() {
                    try {
                        return "news" === BZFD.Context.page.vertical
                    } catch (t) {
                        return !1
                    }
                },
                get buzzType() {
                    var t = "article";
                    return u.hasQuiz ? t = "quiz" : u.hasList && (t = "list"), t
                },
                get buzzTags() {
                    try {
                        return BZFD.Context.buzz.tags
                    } catch (t) {
                        return []
                    }
                },
                get buzzFlags() {
                    try {
                        return BZFD.Context.buzz.flags
                    } catch (t) {
                        return {}
                    }
                },
                get locale() {
                    try {
                        return BZFD.Context.page.localization.locale
                    } catch (t) {
                        return "en_US"
                    }
                },
                get hasTranslations() {
                    try {
                        return !!BZFD.Context.page.localization.translations
                    } catch (t) {
                        return !1
                    }
                },
                get webRoot() {
                    try {
                        return BZFD.Config.webRoot
                    } catch (t) {
                        return ""
                    }
                },
                get prebidUnits() {
                    try {
                        BZFD.Config.ads.prebidUnits.length
                    } catch (t) {
                        o()(window, "BZFD.Config.ads.prebidUnits", [])
                    }
                    return BZFD.Config.ads.prebidUnits
                },
                get programmaticSizes() {
                    try {
                        return BZFD.Config.ads.programmaticSizes
                    } catch (t) {
                        throw new Error("`BZFD.Config.ads` is not defined, which may cause ads to work incorrectly; use `bf_ads.get_ads_config` to make the config")
                    }
                },
                get contextDestination() {
                    var t, e;
                    try {
                        t = BZFD.Context.buzz.destination
                    } catch (e) {
                        t = null
                    }
                    try {
                        e = BZFD.Context.page.destination
                    } catch (t) {
                        e = null
                    }
                    return t || e || "buzzfeed"
                },
                get isShopping() {
                    try {
                        return -1 !== u.allPageSections.indexOf("Shopping")
                    } catch (t) {
                        return !1
                    }
                },
                get isAsIs() {
                    try {
                        return u.isBPage && /^(As\/?Is)/im.test(u.pageClassification.section) || "asis" === u.pageName
                    } catch (t) {
                        return !1
                    }
                },
                get isBFO() {
                    try {
                        return "buzzfeed" === u.contextDestination
                    } catch (t) {
                        return !1
                    }
                },
                get isBFN() {
                    try {
                        return "buzzfeed_news" === u.contextDestination
                    } catch (t) {
                        return !1
                    }
                },
                get buzzId() {
                    try {
                        return BZFD.Context.buzz.id
                    } catch (t) {
                        return ""
                    }
                },
                isAdPost: function(t) {
                    try {
                        return !! function(t) {
                            var e = null;
                            try {
                                var n = c()(t, ".js-buzz", !0);
                                n && (e = JSON.parse(n.querySelector("script").textContent).context)
                            } catch (t) {}
                            return e
                        }(t).buzz.flags.ad
                    } catch (t) {}
                    try {
                        return !!BZFD.Context.buzz.flags.ad
                    } catch (t) {
                        return !1
                    }
                }
            };
            e.a = u
        },
        92: function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        }
    },
    [
        [468, 0, 1]
    ]
]);
//# sourceMappingURL=bfa.d9af4ff5d8e9f6d905cc.js.map