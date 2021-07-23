(function() {
    self.amzSwConfig = self.amzSwConfig || {};
    self.amzSwConfig.offlinePage = {
        cacheKey: "static-v1"
    }
})();
var WPN_CL_PNAFV = "AmazonWebPushNotificationsClientLib-1.0.60.0",
    AUI_JS_DEBUG = !1;
(function(La) {
    function x(e, b, a) {
        for (var g = [], c = 3; c < arguments.length; c++) g[c - 3] = arguments[c];
        w.isLoggingEnabled() && console.debug.apply(console, ["%cWPN%c%c" + e + "%c%c" + b + "%c " + a, "background-color: #DF2935; color: #FFFFFF; padding: 5px", "color: auto", "background-color: #77ACA2; color: #FFFFFF; padding: 5px", "color: auto", "background-color: #F5F3BB; padding: 5px", "color: auto"].concat(g))
    }

    function Ma(e, b, a) {
        if (AUI_JS_DEBUG) {
            var g = a.value;
            a.value = function() {
                for (var a = [], f = 0; f < arguments.length; f++) a[f] = arguments[f];
                f = this.constructor.name === e.constructor.name ? this.constructor.name : this.constructor.name + " (" + e.constructor.name + ")";
                x(f, b, "Called with: %o", a);
                a = g.apply(this, a);
                x(f, b, "Returned: %o", a);
                return a
            };
            return a
        }
    }

    function l() {
        for (var e = [], b = 0; b < arguments.length; b++) e[b] = arguments[b];
        switch (e.length) {
            case 3:
                if ("number" !== typeof e[2]) return Ma(e[0], e[1], e[2]);
            default:
                throw p.create(n.UNSUPPORTED_LOG_DECORATION);
        }
    }

    function qa(e) {
        x("", "validatePushMarketplaceConfig", "%o", e);
        var b = [];
        m.hasContent(e.applicationIdentifier) ||
            b.push("applicationIdentifier:" + e.applicationIdentifier);
        m.hasContent(e.marketplaceId) || b.push("marketplaceId:" + e.marketplaceId);
        m.hasContent(e.countryCode) || b.push("countryCode:" + e.countryCode);
        m.hasContent(e.providerKey) || b.push("providerKey:" + e.providerKey);
        K.isVapidKeyValid(e.publicVapidKey) || b.push("publicVapidKey:" + e.publicVapidKey);
        m.hasContent(e.publicVapidKeySerial) || b.push("publicVapidKeySerial:" + e.publicVapidKeySerial);
        e.endpoints ? (m.isValidAPIEndpoint(e.endpoints.kfe) || b.push("endpoints.kfe:" +
            e.endpoints.kfe), m.isValidAPIEndpoint(e.endpoints.pfe) || b.push("endpoints.pfe:" + e.endpoints.pfe), m.isValidAPIEndpoint(e.endpoints.forester) || b.push("endpoints.forester:" + e.endpoints.forester)) : b.push("endpoints:" + e.endpoints);
        e.cookies ? (m.hasContent(e.cookies.session) || b.push("cookies.session:" + e.cookies.session), m.hasContent(e.cookies.recognition) || b.push("cookies.recognition:" + e.cookies.recognition), m.hasContent(e.cookies.locale) || b.push("cookies.locale:" + e.cookies.locale), m.hasContent(e.cookies.ubid) ||
            b.push("cookies.ubid:" + e.cookies.ubid)) : b.push("cookies:" + e.cookies);
        return b
    }

    function Na(e) {
        var b = [];
        e.pushInformation ? (m.hasContent(e.pushInformation.provider) || b.push("pushSubscriptionInformation.pushInformation.provider:" + e.pushInformation.provider), m.hasContent(e.pushInformation.providerKey) || b.push("pushSubscriptionInformation.pushInformation.providerKey:" + e.pushInformation.providerKey), m.hasContent(e.pushInformation.protocol) || b.push("pushSubscriptionInformation.pushInformation.protocol:" +
            e.pushInformation.protocol), m.hasContent(e.pushInformation.secret) || b.push("pushSubscriptionInformation.pushInformation.secret:" + e.pushInformation.secret)) : b.push("pushSubscriptionInformation.pushInformation:" + e.pushInformation);
        return b
    }

    function Oa(e) {
        var b = [];
        e.payloadEncryptionInformation ? (m.hasContent(e.payloadEncryptionInformation.__type) || b.push("pushSubscriptionInformation.payloadEncryptionInformation.__type:" + e.payloadEncryptionInformation.__type), m.hasContent(e.payloadEncryptionInformation.protocol) ||
                b.push("pushSubscriptionInformation.payloadEncryptionInformation.protocol:" + e.payloadEncryptionInformation.protocol), m.hasContent(e.payloadEncryptionInformation.endpointEcdhPublicKey) || b.push("pushSubscriptionInformation.payloadEncryptionInformation.endpointEcdhPublicKey:" + e.payloadEncryptionInformation.endpointEcdhPublicKey), m.hasContent(e.payloadEncryptionInformation.sharedAuthSecret) || b.push("pushSubscriptionInformation.payloadEncryptionInformation.sharedAuthSecret:" + e.payloadEncryptionInformation.sharedAuthSecret)) :
            b.push("pushSubscriptionInformation.payloadEncryptionInformation:" + e.payloadEncryptionInformation);
        return b
    }

    function Pa(e) {
        var b = [];
        e.serverAuthenticationInformation ? (m.hasContent(e.serverAuthenticationInformation.__type) || b.push("pushSubscriptionInformation.serverAuthenticationInformation.__type:" + e.serverAuthenticationInformation.__type), m.hasContent(e.serverAuthenticationInformation.protocol) || b.push("pushSubscriptionInformation.serverAuthenticationInformation.protocol:" + e.serverAuthenticationInformation.protocol),
            K.isVapidKeyValid(e.serverAuthenticationInformation.publicKey) || b.push("pushSubscriptionInformation.serverAuthenticationInformation.publicKey:" + e.serverAuthenticationInformation.publicKey), m.hasContent(e.serverAuthenticationInformation.certificateVersion) || b.push("pushSubscriptionInformation.serverAuthenticationInformation.certificateVersion:" + e.serverAuthenticationInformation.certificateVersion)) : b.push("pushSubscriptionInformation.serverAuthenticationInformation:" + e.serverAuthenticationInformation);
        return b
    }
    var O;
    (function(e) {
        e.isSupported = function() {
            return self && "ServiceWorkerRegistration" in self && "showNotification" in ServiceWorkerRegistration.prototype && "Notification" in self && "PushManager" in self && "PushSubscription" in self && "getKey" in PushSubscription.prototype && "toJSON" in PushSubscription.prototype && "indexedDB" in self
        };
        e.isServiceWorkerContext = function() {
            return self && "ServiceWorkerGlobalScope" in self
        }
    })(O || (O = {}));
    var w = new(function() {
            function e() {
                this.libOptionsInjected = !1;
                this.libVersion =
                    "1.0";
                this.logging = !1;
                this.configEndpoint = "/gp/aw/webpush/config";
                this._computeLibVersion()
            }
            e.prototype.injectLibOptions = function(b) {
                void 0 !== b.configEndpoint && (this.configEndpoint = b.configEndpoint);
                void 0 !== b.logging && (this.logging = b.logging);
                this.libOptionsInjected = !0
            };
            e.prototype.getLibVersion = function() {
                return this.libVersion
            };
            e.prototype.getCurrentTimestamp = function() {
                return Date.now()
            };
            e.prototype.isLoggingEnabled = function() {
                return this.logging
            };
            e.prototype.getConfigEndpoint = function() {
                this._verifyLibOptionsInjected();
                return this.configEndpoint
            };
            e.prototype._computeLibVersion = function() {
                if (WPN_CL_PNAFV) {
                    var b = WPN_CL_PNAFV.match(/\-(\w+\.\w+)\.\w+\.\w+$/);
                    b && b[1] && (this.libVersion = b[1])
                }
            };
            e.prototype._verifyLibOptionsInjected = function() {
                if (!this.libOptionsInjected) throw p.create(n.NO_LIB_OPTIONS_INIT);
            };
            return e
        }()),
        y;
    (function(e) {
        e.decode = function(b) {
            try {
                return JSON.parse(b)
            } catch (a) {
                return x("json", "decode", "JSON parse failed, input\x3d" + b), {}
            }
        };
        e.encode = function(b, a) {
            void 0 === a && (a = !1);
            return a ? JSON.stringify(b,
                void 0, 4) : JSON.stringify(b)
        }
    })(y || (y = {}));
    var Z;
    (function(e) {
        e.getOS = function(b) {
            void 0 === b && (b = navigator.userAgent);
            return /Windows/i.test(b) ? "Windows" : /CrOS/i.test(b) ? "ChromeOS" : /Macintosh/i.test(b) ? "MacOS" : /(iPhone|iPad|iOS)/i.test(b) ? "iOS" : /(Android|Adr)/.test(b) ? "Android" : /Linux/i.test(b) ? "Linux" : "Unknown"
        }
    })(Z || (Z = {}));
    var m;
    (function(e) {
        e.hasContent = function(b) {
            return "string" === typeof b && 0 < b.trim().length
        };
        e.isPositiveInteger = function(b) {
            return b === Math.floor(b) && 0 < b && Infinity !== b
        };
        e.isValidAPIEndpoint =
            function(b) {
                return !!b && /https\:\/\/.*$/.test(b)
            }
    })(m || (m = {}));
    var K;
    (function(e) {
        function b(a) {
            var b;
            try {
                var c = "\x3d".repeat((4 - a.length % 4) % 4),
                    f = (a + c).replace(/-/g, "+").replace(/_/g, "/"),
                    e = atob(f),
                    d = new Uint8Array(e.length);
                for (a = 0; a < e.length; ++a) d[a] = e.charCodeAt(a);
                b = d;
                if (65 !== b.length || 4 !== b[0]) throw Error();
            } catch (k) {
                throw p.create(n.INVALID_VAPID_KEY, {
                    data: k.message
                });
            }
            return b
        }
        e.parseVapidKey = b;
        e.isVapidKeyValid = function(a) {
            if (!a) return !1;
            try {
                return b(a), !0
            } catch (g) {
                return !1
            }
        }
    })(K || (K = {}));
    var Qa = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Ra = function(e) {
            function b(a, b, c) {
                b = e.call(this, b) || this;
                b.code = a;
                b.data = c;
                return b
            }
            Qa(b, e);
            return b
        }(Error),
        p = new(function() {
            function e() {
                this.serviceIdentifier = "WPNClient"
            }
            e.prototype.create = function(b,
                a) {
                var g = "[" + this.serviceIdentifier + "] E",
                    c;
                c = b.code.toString();
                var f = "0";
                void 0 === f && (f = " ");
                if (!(4 <= c.length || 0 === f.length)) {
                    for (var e = 4 - c.length, d = f; d.length < e;) d += f;
                    c = d.slice(0, e) + c
                }
                g = g + c + ": " + b.description;
                a && (c = y.encode(a), "{}" === c && a.toString && (c = a.toString()), g = g + "\ndata\x3d" + c);
                return new Ra(b.code, g, a)
            };
            return e
        }()),
        n;
    (function(e) {
        e.UNSUPPORTED_BROWSER = {
            code: 101,
            description: "Web Push Notifications is not supported on this browser."
        };
        e.UNSUPPORTED_CONTEXT = {
            code: 102,
            description: "Web Push Notifications client needs to run in the ServiceWorker context."
        };
        e.UNEXPECTED_INITIALIZATION = {
            code: 103,
            description: "Web Push Notifications client was already initialized in this context."
        };
        e.NO_PERMISSIONS = {
            code: 201,
            description: "Notification permissions are not granted."
        };
        e.NO_CUSTOMER_CONTEXT = {
            code: 202,
            description: "Missing required customer context information."
        };
        e.NO_LIB_OPTIONS_INIT = {
            code: 203,
            description: "Lib Environment not yet initialized with Lib Options."
        };
        e.INVALID_PUSH_MARKETPLACE_CONFIG = {
            code: 301,
            description: "Push Marketplace Config invalid or missing."
        };
        e.INVALID_SW_SCOPE = {
            code: 401,
            description: "Invalid ServiceWorker scope input."
        };
        e.INVALID_COOKIES = {
            code: 402,
            description: "Invalid cookie input. One or more required cookies missing."
        };
        e.INVALID_VAPID_KEY = {
            code: 403,
            description: "Invalid input or decryption failed for VAPID key."
        };
        e.INVALID_PUSH_SUBSCRIPTION = {
            code: 404,
            description: "Invalid PushSubscription input."
        };
        e.INVALID_RECORD = {
            code: 405,
            description: "Invalid record input."
        };
        e.SERVICE_CALL_FAILED = {
            code: 501,
            description: "Service call failed."
        };
        e.SERVICE_CALL_RESPONSE_ERROR = {
            code: 502,
            description: "Service call response error."
        };
        e.KIANG_ERROR_NO_AIID = {
            code: 601,
            description: "Kiang Service error. No ApplicationInstallId returned."
        };
        e.DB_INVALID_NAME_OR_VERSION = {
            code: 701,
            description: "Invalid IndexedDB name or version. Name should be non-empty and version should be postive integer."
        };
        e.DB_REQUEST_BLOCKED = {
            code: 702,
            description: "Opening IndexedDB resulted in blocked. Any open tabs with active connection to DB must be closed."
        };
        e.DB_DOM_EXCEPTION = {
            code: 703,
            description: "DOMException Error on IndexedDB."
        };
        e.DB_INVALID_INDEX = {
            code: 704,
            description: "Object Store does not contain provided index."
        };
        e.INVALID_NOTIFICATION_PAYLOAD = {
            code: 801,
            description: "Invalid notification payload received."
        };
        e.UNSUPPORTED_LOG_DECORATION = {
            code: 901,
            description: "Log decoration type is not supported."
        }
    })(n || (n = {}));
    var t = function() {
            function e() {}
            e.prototype.log = function(b, a) {
                for (var g = [], c = 2; c < arguments.length; c++) g[c - 2] = arguments[c];
                x.apply(void 0, [this.constructor.name, b, a].concat(g))
            };
            return e
        }(),
        Sa = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        P = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f =
                        (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ra = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        sa = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f =
                        1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        aa = function(e) {
            function b() {
                return e.call(this) || this
            }
            Sa(b, e);
            b.prototype.callService = function(a, g, c, f) {
                void 0 === c && (c = b.ATTEMPTS);
                void 0 ===
                    f && (f = !0);
                return ra(this, void 0, void 0, function() {
                    var b, d;
                    return sa(this, function(e) {
                        switch (e.label) {
                            case 0:
                                b = 1, e.label = 1;
                            case 1:
                                if (!(b <= c)) return [3, 6];
                                e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), this.log("callService", "attempt\x3d" + b), [4, fetch(a, this._decorateOptions(g, f))];
                            case 3:
                                return d = e.sent(), this.log("callService", "status\x3d" + d.status), [2, d];
                            case 4:
                                return e.sent(), this.log("callService", "failed"), [3, 5];
                            case 5:
                                return b++, [3, 1];
                            case 6:
                                throw p.create(n.SERVICE_CALL_FAILED, {
                                    url: a
                                });
                        }
                    })
                })
            };
            b.prototype.extractJSONFromResponse = function(a) {
                return ra(this, void 0, void 0, function() {
                    var b, c;
                    return sa(this, function(f) {
                        switch (f.label) {
                            case 0:
                                this.validateResponseOk(a), f.label = 1;
                            case 1:
                                return f.trys.push([1, 3, , 4]), [4, a.json()];
                            case 2:
                                return b = f.sent(), [3, 4];
                            case 3:
                                throw c = f.sent(), p.create(n.SERVICE_CALL_RESPONSE_ERROR, {
                                    url: a.url,
                                    data: "Response not JSON",
                                    error: c.message
                                });
                            case 4:
                                return [2, b]
                        }
                    })
                })
            };
            b.prototype.validateResponseOk = function(a) {
                if (!a.ok) throw p.create(n.SERVICE_CALL_RESPONSE_ERROR, {
                    url: a.url,
                    data: "Response not ok",
                    status: a.status
                });
            };
            b.prototype._decorateOptions = function(a, b) {
                a.credentials = a.credentials || "include";
                b && (b = new Headers(a.headers), b.append("X-Amz-WPNClient-LibVersion", w.getLibVersion()), a.headers = b);
                return a
            };
            b.ATTEMPTS = 3;
            P([l], b.prototype, "callService", null);
            P([l], b.prototype, "extractJSONFromResponse", null);
            P([l], b.prototype, "validateResponseOk", null);
            P([l], b.prototype, "_decorateOptions", null);
            return b
        }(t),
        Ta = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof
            Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        ta = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) :
                        h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ua = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Va = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ?
                            "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] &&
                                    c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        ba = function(e) {
            function b() {
                return e.call(this) || this
            }
            Ta(b, e);
            b.prototype.callPushApplicationService = function(a, b, c, f) {
                return Ua(this, void 0, void 0,
                    function() {
                        var e;
                        return Va(this, function(d) {
                            e = this.getPushApplicationAPICallOptions(b, c);
                            return [2, this.callService(a, e, f)]
                        })
                    })
            };
            b.prototype.getPushApplicationAPICallOptions = function(a, b, c) {
                void 0 === c && (c = "POST");
                var f = new Headers;
                f.append("Content-Encoding", "amz-1.0");
                f.append("Content-Type", "application/json");
                f.append("X-Amz-Target", a);
                return {
                    method: c,
                    headers: f,
                    body: b
                }
            };
            ta([l], b.prototype, "callPushApplicationService", null);
            ta([l], b.prototype, "getPushApplicationAPICallOptions", null);
            return b
        }(aa),
        Wa = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Xa = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ya = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Za = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label =
                                d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        $a = function(e) {
            function b() {
                var a = e.call(this) || this;
                a.endpoint = w.getConfigEndpoint();
                return a
            }
            Wa(b, e);
            b.prototype.fetchConfig =
                function() {
                    return Ya(this, void 0, void 0, function() {
                        var a, b, c, f;
                        return Za(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return a = {
                                        method: "GET"
                                    }, [4, this.callService(this.endpoint, a)];
                                case 1:
                                    return b = e.sent(), [4, this.extractJSONFromResponse(b)];
                                case 2:
                                    c = e.sent();
                                    if (c.error) throw p.create(n.SERVICE_CALL_RESPONSE_ERROR, {
                                        url: b.url,
                                        data: c.error
                                    });
                                    f = qa(c);
                                    if (0 < f.length) throw p.create(n.INVALID_PUSH_MARKETPLACE_CONFIG);
                                    return [2, c]
                            }
                        })
                    })
                };
            Xa([l], b.prototype, "fetchConfig", null);
            return b
        }(aa),
        ab = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        D = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f =
                        (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        bb = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        cb = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f =
                        1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        db = function(e) {
            function b(a, b) {
                var c = e.call(this) || this;
                if (!m.hasContent(a) || !m.isPositiveInteger(b)) throw p.create(n.DB_INVALID_NAME_OR_VERSION, {
                    dbName: a,
                    dbVersion: b
                });
                c.dbName = a;
                c.dbFullName = "WPN" + a + "DB";
                c.dbVersion = b;
                c.dbObjectStoreName = c.getObjectStoreName(a, b);
                return c
            }
            ab(b, e);
            b.prototype.getData = function(a) {
                return this._runTransaction(function(b) {
                    return b.get(a)
                })
            };
            b.prototype.putData = function(a) {
                return this._runTransaction(function(b) {
                    return b.put(a)
                }, "readwrite")
            };
            b.prototype.deleteData = function(a) {
                return this._runTransaction(function(b) {
                    return b.delete(a)
                }, "readwrite")
            };
            b.prototype.getObjectStoreName = function(a, b) {
                return a + "StoreV" +
                    b
            };
            b.prototype._getOrOpenDB = function() {
                var a = this;
                this.dbPromise || (this.dbPromise = new Promise(function(b, c) {
                    var f = indexedDB.open(a.dbFullName, a.dbVersion);
                    f.onupgradeneeded = function(b) {
                        a.onDBUpgrade(f, b)
                    };
                    f.onsuccess = function() {
                        b(f.result)
                    };
                    f.onblocked = function() {
                        a.dbPromise = void 0;
                        c({
                            message: p.create(n.DB_REQUEST_BLOCKED).message
                        })
                    };
                    f.onerror = function() {
                        a.dbPromise = void 0;
                        c({
                            message: p.create(n.DB_DOM_EXCEPTION).message + " " + f.error.name + ": " + f.error.message
                        })
                    }
                }));
                return this.dbPromise
            };
            b.prototype._runTransaction =
                function(a, b) {
                    void 0 === b && (b = "readonly");
                    return bb(this, void 0, void 0, function() {
                        var c, f, e, d;
                        return cb(this, function(k) {
                            switch (k.label) {
                                case 0:
                                    return [4, this._getOrOpenDB()];
                                case 1:
                                    return c = k.sent(), f = c.transaction(this.dbObjectStoreName, b), e = f.objectStore(this.dbObjectStoreName), [4, this._promisifyRequest(a(e))];
                                case 2:
                                    return d = k.sent(), [2, new Promise(function(a, b) {
                                        f.oncomplete = function() {
                                            a(d)
                                        };
                                        f.onerror = function() {
                                            b({
                                                message: p.create(n.DB_DOM_EXCEPTION).message + " " + f.error.name + ": " + f.error.message
                                            })
                                        }
                                    })]
                            }
                        })
                    })
                };
            b.prototype._promisifyRequest = function(a) {
                return new Promise(function(b, c) {
                    a.onsuccess = function() {
                        b(a.result)
                    };
                    a.onerror = function() {
                        c(a.error)
                    }
                })
            };
            D([l], b.prototype, "getData", null);
            D([l], b.prototype, "putData", null);
            D([l], b.prototype, "deleteData", null);
            D([l], b.prototype, "getObjectStoreName", null);
            D([l], b.prototype, "_getOrOpenDB", null);
            D([l], b.prototype, "_runTransaction", null);
            D([l], b.prototype, "_promisifyRequest", null);
            return b
        }(t),
        eb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof
            Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Q = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) :
                        h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ca = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        da = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ?
                            "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] &&
                                    c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        fb = function(e) {
            function b(a, b, c) {
                a = e.call(this, a, b) || this;
                a.swScope = c;
                return a
            }
            eb(b, e);
            b.prototype.getRecord = function() {
                return ca(this, void 0, void 0,
                    function() {
                        var a, b, c;
                        return da(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    return [4, this.getData(this.swScope)];
                                case 1:
                                    a = f.sent();
                                    if (!a) return [2];
                                    b = a.record;
                                    c = this.validateRecord(b);
                                    return 0 < c.length ? (this.log("getRecord", "invalid or corrupted record, returning none: failures \x3d %o", c), [2]) : [2, b]
                            }
                        })
                    })
            };
            b.prototype.saveRecord = function(a) {
                return ca(this, void 0, void 0, function() {
                    var b;
                    return da(this, function(c) {
                        b = this.validateRecord(a);
                        if (0 < b.length) throw p.create(n.INVALID_RECORD, {
                            record: a,
                            failures: b
                        });
                        return [2, this.putData({
                            swScope: this.swScope,
                            record: a
                        })]
                    })
                })
            };
            b.prototype.removeRecord = function() {
                return ca(this, void 0, void 0, function() {
                    return da(this, function(a) {
                        return [2, this.deleteData(this.swScope)]
                    })
                })
            };
            b.prototype.onDBUpgrade = function(a, g) {
                a = a.result;
                try {
                    a.deleteObjectStore(this.getObjectStoreName(this.dbName, g.oldVersion))
                } catch (c) {
                    this.log("onDBUpgrade", "objectstore delete failed: " + c)
                }
                a.createObjectStore(this.dbObjectStoreName, {
                    keyPath: b.SW_SCOPE_KEY_PATH
                })
            };
            b.SW_SCOPE_KEY_PATH = "swScope";
            Q([l], b.prototype, "getRecord", null);
            Q([l], b.prototype, "saveRecord", null);
            Q([l], b.prototype, "removeRecord", null);
            Q([l], b.prototype, "onDBUpgrade", null);
            return b
        }(db),
        gb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        R = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ea = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h,
                        d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        fa = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length &&
                                    d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                    next: a(0),
                    "throw": a(1),
                    "return": a(2)
                }, "function" ===
                typeof Symbol && (k[Symbol.iterator] = function() {
                    return this
                }), k
        },
        ga = function(e) {
            function b(a, b, c) {
                return e.call(this, a, b, c) || this
            }
            gb(b, e);
            b.prototype.getRecord = function() {
                return ea(this, void 0, void 0, function() {
                    var a;
                    return fa(this, function(b) {
                        switch (b.label) {
                            case 0:
                                if (this.cache) return this.log("getRecord", "returning from memory cache"), [2, this.cache];
                                a = this;
                                return [4, e.prototype.getRecord.call(this)];
                            case 1:
                                return a.cache = b.sent(), [2, this.cache]
                        }
                    })
                })
            };
            b.prototype.saveRecord = function(a) {
                return ea(this,
                    void 0, void 0,
                    function() {
                        return fa(this, function(b) {
                            this._invalidateCache();
                            return [2, e.prototype.saveRecord.call(this, a)]
                        })
                    })
            };
            b.prototype.removeRecord = function() {
                return ea(this, void 0, void 0, function() {
                    return fa(this, function(a) {
                        this._invalidateCache();
                        return [2, e.prototype.removeRecord.call(this)]
                    })
                })
            };
            b.prototype._invalidateCache = function() {
                this.cache = void 0
            };
            R([l], b.prototype, "getRecord", null);
            R([l], b.prototype, "saveRecord", null);
            R([l], b.prototype, "removeRecord", null);
            R([l], b.prototype, "_invalidateCache",
                null);
            return b
        }(fb),
        hb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        ib = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e,
                b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        jb = function(e) {
            function b(a) {
                return e.call(this, b.DB_NAME, b.DB_VERSION, a) || this
            }
            hb(b, e);
            b.prototype.validateRecord = function(a) {
                var b = [];
                "1" !== a.libTag && b.push("libTag:" + a.libTag);
                a.createTime || b.push("createTime:" + a.createTime);
                a.pushMarketplaceConfig ? (a = qa(a.pushMarketplaceConfig), b = b.concat(a)) : b.push("pushMarketplaceConfig:" + y.encode(a.pushMarketplaceConfig));
                return b
            };
            b.DB_NAME = "PushMarketplaceConfig";
            b.DB_VERSION = 1;
            ib([l], b.prototype, "validateRecord", null);
            return b
        }(ga),
        kb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        ha = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b,
                    a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ia = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        ja =
        function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c =
                                    0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] =
                function() {
                    return this
                }), k
        },
        lb = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.log("ctor", "Called with: %o", [a]);
                b.service = new $a;
                b.store = new jb(a.registration.scope);
                return b
            }
            kb(b, e);
            b.prototype.getConfig = function() {
                return ia(this, void 0, void 0, function() {
                    var a, g;
                    return ja(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this.store.getRecord()];
                            case 1:
                                return (a = c.sent()) && w.getCurrentTimestamp() <= a.createTime + b.EXPIRY_TTL ? [2, a.pushMarketplaceConfig] : [4, this.service.fetchConfig()];
                            case 2:
                                return g =
                                    c.sent(), [4, this.store.saveRecord({
                                        libTag: "1",
                                        createTime: w.getCurrentTimestamp(),
                                        pushMarketplaceConfig: g
                                    })];
                            case 3:
                                return c.sent(), [2, g]
                        }
                    })
                })
            };
            b.prototype.getConfigLocalOnly = function() {
                return ia(this, void 0, void 0, function() {
                    var a;
                    return ja(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this.store.getRecord()];
                            case 1:
                                return (a = b.sent()) ? [2, a.pushMarketplaceConfig] : [2]
                        }
                    })
                })
            };
            b.prototype.killConfig = function() {
                return ia(this, void 0, void 0, function() {
                    return ja(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4,
                                    this.store.removeRecord()
                                ];
                            case 1:
                                return a.sent(), [2]
                        }
                    })
                })
            };
            b.EXPIRY_TTL = 2592E6;
            ha([l], b.prototype, "getConfig", null);
            ha([l], b.prototype, "getConfigLocalOnly", null);
            ha([l], b.prototype, "killConfig", null);
            return b
        }(t),
        mb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype,
                    new g)
            }
        }(),
        nb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ob = function(e) {
            function b(a) {
                return e.call(this, b.DB_NAME, b.DB_VERSION, a) || this
            }
            mb(b, e);
            b.prototype.validateRecord = function(a) {
                var b = [];
                "1" !== a.libTag && b.push("libTag:" +
                    a.libTag);
                a.createTime || b.push("createTime:" + a.createTime);
                if (a.customerContext) {
                    a = a.customerContext;
                    x("", "validateCustomerContext", "%o", a);
                    var c = [];
                    m.hasContent(a.session) || c.push("session:" + a.session);
                    m.hasContent(a.ubid) || c.push("ubid:" + a.ubid);
                    b = b.concat(c)
                } else b.push("customerContext:" + y.encode(a.customerContext));
                return b
            };
            b.DB_NAME = "CustomerContext";
            b.DB_VERSION = 1;
            nb([l], b.prototype, "validateRecord", null);
            return b
        }(ga),
        pb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
                function(b, a) {
                    b.__proto__ = a
                } || function(b, a) {
                    for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
                };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        E = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) ||
                        f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        S = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        T = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ?
                            "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        qb = function(e) {
            function b(a, b) {
                var c = e.call(this) || this;
                c.log("ctor", "Called with: %o", [b]);
                c.pushMarketplaceConfigProvider = b;
                c.store = new ob(a.registration.scope);
                return c
            }
            pb(b, e);
            b.prototype.getCustomerContext = function() {
                return S(this, void 0, void 0, function() {
                    var a;
                    return T(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this.store.getRecord()];
                            case 1:
                                if (a = b.sent()) return [2, a.customerContext];
                                throw p.create(n.NO_CUSTOMER_CONTEXT);
                        }
                    })
                })
            };
            b.prototype.isCustomerRecognized = function() {
                return S(this, void 0, void 0, function() {
                    var a;
                    return T(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this.getCustomerContext()];
                            case 1:
                                return a = b.sent(), [2, !!(a && a.recognition &&
                                    m.hasContent(a.recognition))]
                        }
                    })
                })
            };
            b.prototype.updateCustomerContext = function(a) {
                return S(this, void 0, void 0, function() {
                    var b, c, f;
                    return T(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return b = !1, [4, this._constructCustomerContextFromCookies(a)];
                            case 1:
                                c = e.sent(), e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), [4, this.getCustomerContext()];
                            case 3:
                                return f = e.sent(), b = this.hasCustomerIdentityChanged(f, c) || this.hasCustomerPreferenceChanged(f, c), [3, 5];
                            case 4:
                                return e.sent(), b = !0, [3, 5];
                            case 5:
                                return b ? [4, this.store.saveRecord({
                                    libTag: "1",
                                    createTime: w.getCurrentTimestamp(),
                                    customerContext: c
                                })] : [2];
                            case 6:
                                return e.sent(), this.log("updateCustomerContext", "Customer context updated to %o", c), [2]
                        }
                    })
                })
            };
            b.prototype.hasCustomerIdentityChanged = function(a, b) {
                return !(a && b && a.session === b.session && a.ubid === b.ubid && a.recognition === b.recognition)
            };
            b.prototype.hasCustomerPreferenceChanged = function(a, b) {
                return !(a && b && a.locale === b.locale)
            };
            b.prototype._constructCustomerContextFromCookies = function(a) {
                return S(this, void 0, void 0, function() {
                    var b, c, f,
                        e, d, k;
                    return T(this, function(q) {
                        switch (q.label) {
                            case 0:
                                if ("string" !== typeof a) throw p.create(n.INVALID_COOKIES);
                                return [4, this.pushMarketplaceConfigProvider.getConfig()];
                            case 1:
                                b = q.sent();
                                c = this._getCookie(a, b.cookies.session);
                                f = this._getCookie(a, b.cookies.ubid);
                                if (!c || !f) throw p.create(n.INVALID_COOKIES);
                                e = this._getCookie(a, b.cookies.recognition);
                                d = this._getCookie(a, b.cookies.locale);
                                k = {
                                    session: c,
                                    ubid: f
                                };
                                e && (k.recognition = e);
                                d && (k.locale = d);
                                return [2, k]
                        }
                    })
                })
            };
            b.prototype._getCookie = function(a, b) {
                a =
                    a ? a.split(";") : [];
                for (var c = 0; c < a.length; c++) {
                    var f = a[c].trim().split("\x3d"),
                        e = f[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                    if (b === e) return f.slice(1).join("\x3d").replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
            };
            E([l], b.prototype, "getCustomerContext", null);
            E([l], b.prototype, "isCustomerRecognized", null);
            E([l], b.prototype, "updateCustomerContext", null);
            E([l], b.prototype, "hasCustomerIdentityChanged", null);
            E([l], b.prototype, "hasCustomerPreferenceChanged", null);
            E([l], b.prototype, "_constructCustomerContextFromCookies",
                null);
            E([l], b.prototype, "_getCookie", null);
            return b
        }(t),
        L;
    (L || (L = {})).OPEN_URL = "open_url";
    var rb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        sb = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.serviceWorker = a;
                return b
            }
            rb(b, e);
            return b
        }(t),
        tb =
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        ka = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d =
                        e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ua = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        va = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label =
                                d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        ub = function(e) {
            function b(a) {
                return e.call(this, a) || this
            }
            tb(b, e);
            b.prototype.run = function(a) {
                return ua(this, void 0,
                    void 0,
                    function() {
                        var b, c;
                        return va(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    return b = this._normalizeUrl(a.args.url), [4, this._getWindowClient(b)];
                                case 1:
                                    return (c = f.sent()) ? [4, c.focus()] : [3, 3];
                                case 2:
                                    return f.sent(), [3, 5];
                                case 3:
                                    return [4, this.serviceWorker.clients.openWindow(b)];
                                case 4:
                                    f.sent(), f.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
            };
            b.prototype._getWindowClient = function(a) {
                return ua(this, void 0, void 0, function() {
                    var b, c, f, e;
                    return va(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return [4, this.serviceWorker.clients.matchAll({
                                    type: "window",
                                    includeUncontrolled: !0
                                })];
                            case 1:
                                b = d.sent();
                                for (f = 0; f < b.length; f++)
                                    if (e = this._normalizeUrl(b[f].url), e === a) {
                                        c = b[f];
                                        break
                                    }
                                return [2, c]
                        }
                    })
                })
            };
            b.prototype._normalizeUrl = function(a) {
                return (new URL(a, this.serviceWorker.location.origin)).href
            };
            ka([l], b.prototype, "run", null);
            ka([l], b.prototype, "_getWindowClient", null);
            ka([l], b.prototype, "_normalizeUrl", null);
            return b
        }(sb),
        vb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) &&
                    (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        wb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        xb = function(e) {
            function b(a) {
                var b =
                    e.call(this) || this;
                b.tasks = (c = {}, c[L.OPEN_URL] = new ub(a), c);
                return b;
                var c
            }
            vb(b, e);
            b.prototype.resolve = function(a) {
                return this.tasks[a.__type]
            };
            wb([l], b.prototype, "resolve", null);
            return b
        }(t),
        la;
    (function(e) {
        e.NO_STRATEGY = "no_strategy";
        e.SHOW_MOST_RECENT = "show_most_recent"
    })(la || (la = {}));
    var yb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor =
                        b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        zb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ab = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Bb = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] &
                            1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Cb = function(e) {
            function b() {
                return e.call(this) || this
            }
            yb(b, e);
            b.prototype.run = function(a) {
                return Ab(this, void 0, void 0, function() {
                    return Bb(this, function(b) {
                        a.options.data.consolidation && (a.options.tag = a.options.data.consolidation.key);
                        return [2, a]
                    })
                })
            };
            zb([l], b.prototype, "run", null);
            return b
        }(t),
        Db = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Eb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f =
                        (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Fb = function(e) {
            function b() {
                var a = e.call(this) || this;
                a.tasks = (b = {}, b[la.SHOW_MOST_RECENT] = new Cb, b);
                return a;
                var b
            }
            Db(b, e);
            b.prototype.resolve = function(a) {
                if (a.options.data.consolidation) return this.tasks[a.options.data.consolidation.strategy]
            };
            Eb([l], b.prototype, "resolve", null);
            return b
        }(t),
        z;
    (function(e) {
        e.DELIVERED = "dlv";
        e.RENDERED = "rnd";
        e.RENDER_FAILED = "rfl";
        e.RENDERED_FORCED_NOTIFICATION = "rfn";
        e.CLICKED = "clk";
        e.ACTION_CLICKED =
            "aclk";
        e.DISMISSED = "dsm";
        e.INTERACTION_FAILED = "ifl"
    })(z || (z = {}));
    var Gb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        ma = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect &&
                "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        wa = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        xa = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a,
                        b
                    ])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label =
                                a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Hb = function(e) {
            function b(a) {
                var b =
                    e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            Gb(b, e);
            b.prototype.run = function(a) {
                return wa(this, void 0, void 0, function() {
                    var b, c, f, e, d;
                    return xa(this, function(k) {
                        switch (k.label) {
                            case 0:
                                b = this._validatePayload(a);
                                if (0 < b.length) throw p.create(n.INVALID_NOTIFICATION_PAYLOAD, {
                                    payload: a,
                                    failures: b
                                });
                                return [4, this._getDefaultBadge()];
                            case 1:
                                c = k.sent();
                                f = {
                                    title: a.notification.title || a.notification.body || "",
                                    options: {
                                        body: a.notification.body || "",
                                        image: a.notification.image || "",
                                        icon: a.notification.icon ||
                                            "/favicon.ico",
                                        badge: a.notification.badge || c,
                                        dir: a.notification.dir || "auto",
                                        renotify: void 0 !== a.notification.renotify ? !!a.notification.renotify : !1,
                                        requireInteraction: void 0 !== a.notification.requireInteraction ? !!a.notification.requireInteraction : !1,
                                        silent: void 0 !== a.notification.silent ? !!a.notification.silent : !0,
                                        tag: "",
                                        data: {
                                            url: a.notification.url,
                                            consolidation: a.consolidation,
                                            actions: a.buttons,
                                            meta: a.meta
                                        }
                                    }
                                };
                                if (Array.isArray(a.buttons))
                                    for (f.options.actions = [], e = 0; e < a.buttons.length; e++) {
                                        d = a.buttons[e];
                                        a: if (k = d, x("", "validateAction", "%o", k), k.__type && m.hasContent(k.id) && m.hasContent(k.title)) switch (k.__type) {
                                            case L.OPEN_URL:
                                                k = !(!k.args || !m.hasContent(k.args.url));
                                                break a;
                                            default:
                                                k = !1
                                        } else k = !1;
                                        if (!k) break;
                                        f.options.actions.push({
                                            action: d.id,
                                            title: d.title,
                                            icon: d.icon || ""
                                        })
                                    }
                                return [2, f]
                        }
                    })
                })
            };
            b.prototype._validatePayload = function(a) {
                var b = [];
                a.notification ? (m.hasContent(a.notification.title) || m.hasContent(a.notification.body) || b.push("notification.title:" + a.notification.title + ",notification.body:" +
                    a.notification.body), m.hasContent(a.notification.url) || b.push("notification.url:" + a.notification.url)) : b.push("notification:" + a.notification);
                return b
            };
            b.prototype._getDefaultBadge = function() {
                return wa(this, void 0, void 0, function() {
                    var a;
                    return xa(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this.pushMarketplaceConfigProvider.getConfigLocalOnly()];
                            case 1:
                                return a = b.sent(), [2, a && a.visual && a.visual.badge ? a.visual.badge : ""]
                        }
                    })
                })
            };
            ma([l], b.prototype, "run", null);
            ma([l], b.prototype, "_validatePayload",
                null);
            ma([l], b.prototype, "_getDefaultBadge", null);
            return b
        }(t),
        Ib = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        A = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" ===
                typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        U = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        V = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a,
                        b
                    ])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label =
                                a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Jb = function(e) {
            function b(a, b,
                c) {
                var f = e.call(this) || this;
                f.log("ctor", "Called with: %o", [a, b, c]);
                f.serviceWorker = a;
                f.reportingManager = c;
                f.renderTask = new Hb(b);
                f.consolidationTaskResolver = new Fb;
                f.actionTaskResolver = new xb(a);
                f._registerEvents();
                return f
            }
            Ib(b, e);
            b.prototype._registerEvents = function() {
                var a = this;
                this.serviceWorker.addEventListener("push", function(b) {
                    b.waitUntil(a.reportingManager.withReporting(a._onPush(b)))
                });
                this.serviceWorker.addEventListener("notificationclick", function(b) {
                    b.waitUntil(a.reportingManager.withReporting(a._onNotificationClick(b)))
                });
                this.serviceWorker.addEventListener("notificationclose", function(b) {
                    b.waitUntil(a.reportingManager.withReporting(a._onNotificationClose(b)))
                })
            };
            b.prototype._onPush = function(a) {
                return U(this, void 0, void 0, function() {
                    var b, c;
                    return V(this, function(f) {
                        switch (f.label) {
                            case 0:
                                this._logCounter(z.DELIVERED), f.label = 1;
                            case 1:
                                return f.trys.push([1, 5, , 6]), b = this._getNotificationPayload(a), [4, this.renderTask.run(b)];
                            case 2:
                                return c = f.sent(), [4, this._runConsolidation(c)];
                            case 3:
                                return c = f.sent(), [4, this.serviceWorker.registration.showNotification(c.title,
                                    c.options)];
                            case 4:
                                return f.sent(), this._logCounter(z.RENDERED, this._getNotificationSuffix(c.options.data)), [3, 6];
                            case 5:
                                return f.sent(), this._logCounter(z.RENDER_FAILED), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            };
            b.prototype._onNotificationClick = function(a) {
                return U(this, void 0, void 0, function() {
                    var b, c, f;
                    return V(this, function(e) {
                        a.notification.close();
                        b = this._getNotificationSuffix(a.notification.data);
                        a.action ? this._logCounter(z.ACTION_CLICKED, b) : this._logCounter(z.CLICKED, b);
                        if (c = this._getActionDetailsFromNotificationClick(a.action,
                                a.notification.data))
                            if (f = this.actionTaskResolver.resolve(c)) return [2, f.run(c)];
                        this._logCounter(z.INTERACTION_FAILED, this._getNotificationSuffix(a.notification.data));
                        return [2]
                    })
                })
            };
            b.prototype._onNotificationClose = function(a) {
                return U(this, void 0, void 0, function() {
                    return V(this, function(b) {
                        this._logCounter(z.DISMISSED, this._getNotificationSuffix(a.notification.data));
                        return [2]
                    })
                })
            };
            b.prototype._getNotificationPayload = function(a) {
                if (!a.data) throw p.create(n.INVALID_NOTIFICATION_PAYLOAD, {
                    eventData: a.data
                });
                return a.data.json()
            };
            b.prototype._runConsolidation = function(a) {
                return U(this, void 0, void 0, function() {
                    var b;
                    return V(this, function(c) {
                        return (b = this.consolidationTaskResolver.resolve(a)) ? [2, b.run(a)] : [2, a]
                    })
                })
            };
            b.prototype._getActionDetailsFromNotificationClick = function(a, b) {
                if (!a) return {
                    __type: L.OPEN_URL,
                    id: "default_notification_click",
                    title: "",
                    args: {
                        url: b.url
                    }
                };
                var c;
                if (a && Array.isArray(b.actions))
                    for (var f = 0; f < b.actions.length; f++)
                        if (b.actions[f].id === a) {
                            c = b.actions[f];
                            break
                        }
                return c
            };
            b.prototype._getNotificationSuffix =
                function(a) {
                    if (a && a.meta && a.meta.topic) return a.meta.topic
                };
            b.prototype._logCounter = function(a, g) {
                this.reportingManager.logCounter(b.REPORTING_FEATURE_NAME, a);
                g && this.reportingManager.logCounter(b.REPORTING_FEATURE_NAME, a + "_" + g)
            };
            b.REPORTING_FEATURE_NAME = "notf";
            A([l], b.prototype, "_registerEvents", null);
            A([l], b.prototype, "_onPush", null);
            A([l], b.prototype, "_onNotificationClick", null);
            A([l], b.prototype, "_onNotificationClose", null);
            A([l], b.prototype, "_getNotificationPayload", null);
            A([l], b.prototype, "_runConsolidation",
                null);
            A([l], b.prototype, "_getActionDetailsFromNotificationClick", null);
            A([l], b.prototype, "_getNotificationSuffix", null);
            A([l], b.prototype, "_logCounter", null);
            return b
        }(t),
        F;
    (function(e) {
        e.UNRESOLVED_REQUEST = "unresolved_request";
        e.OPERATION_SUCCESS = "operation_success";
        e.OPERATION_FAILED = "operation_failed";
        e.RETRY_LATER = "retry_later"
    })(F || (F = {}));
    var W;
    (function(e) {
        e.SYNC_SUBSCRIPTION = "sync_subscribe";
        e.UPDATE_CONFIG = "update_config"
    })(W || (W = {}));
    var Kb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof
            Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        na = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) :
                        h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ya = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        za = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ?
                            "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] &&
                                    c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Lb = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            Kb(b, e);
            b.prototype.register = function(a, g, c) {
                return ya(this,
                    void 0, void 0,
                    function() {
                        var f, e, d, k;
                        return za(this, function(q) {
                            switch (q.label) {
                                case 0:
                                    return [4, this.pushMarketplaceConfigProvider.getConfig()];
                                case 1:
                                    return f = q.sent(), e = this._constructRequestBody(f, a, g, c), [4, this.callPushApplicationService(f.endpoints.kfe, b.REGISTER_API_TARGET, e)];
                                case 2:
                                    return d = q.sent(), [4, this.extractJSONFromResponse(d)];
                                case 3:
                                    k = q.sent();
                                    if (!k.applicationInstallId) throw p.create(n.KIANG_ERROR_NO_AIID, {
                                        data: k.__type || void 0
                                    });
                                    return [2, k.applicationInstallId]
                            }
                        })
                    })
            };
            b.prototype.update =
                function(a, g, c, f, e) {
                    return ya(this, void 0, void 0, function() {
                        var d, k, q;
                        return za(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.pushMarketplaceConfigProvider.getConfig()];
                                case 1:
                                    return d = r.sent(), k = this._constructRequestBody(d, a, g, c, f, e), [4, this.callPushApplicationService(d.endpoints.kfe, b.UPDATE_API_TARGET, k)];
                                case 2:
                                    return q = r.sent(), this.validateResponseOk(q), [2]
                            }
                        })
                    })
                };
            b.prototype._constructRequestBody = function(a, b, c, f, e, d) {
                a = {
                    applicationInformation: {
                        applicationIdentifier: a.applicationIdentifier,
                        applicationVersion: w.getLibVersion(),
                        ubid: b.ubid,
                        userAgent: navigator.userAgent,
                        osIdentifier: Z.getOS()
                    },
                    pushInformation: f.pushInformation,
                    payloadEncryptionInformation: f.payloadEncryptionInformation,
                    serverAuthenticationInformation: f.serverAuthenticationInformation,
                    marketplaceId: a.marketplaceId,
                    osNotificationState: c
                };
                b.locale && (a.localeId = b.locale);
                e && (a.applicationInstallId = e, d ? a.sequenceNumber = d : a.sequenceNumber = 2);
                return y.encode(a)
            };
            b.REGISTER_API_TARGET = "com.amazon.mobilepushfrontendappstateexternal.MobilePushFrontendExternalAppStateService.RegisterApplicationInstall";
            b.UPDATE_API_TARGET = "com.amazon.mobilepushfrontendappstateexternal.MobilePushFrontendExternalAppStateService.UpdateApplicationInstall";
            na([l], b.prototype, "register", null);
            na([l], b.prototype, "update", null);
            na([l], b.prototype, "_constructRequestBody", null);
            return b
        }(ba),
        G;
    (function(e) {
        e.ACTIVE = "ACTIVE";
        e.INACTIVE = "INACTIVE"
    })(G || (G = {}));
    var M;
    (function(e) {
        e.PERMISSION_NOT_GRANTED = "permission_not_granted";
        e.SYNC_SUBSCRIPTION_SUCCESS = "sync_subscription_success";
        e.SYNC_SUBSCRIPTION_FAILURE = "sync_subscription_failure"
    })(M ||
        (M = {}));
    var u;
    (function(e) {
        e.PUSH_SUBSCRIPTION_GENERATED = "psg";
        e.PUSH_SUBSCRIPTION_CHANGED = "psc";
        e.KIANG_REGISTERED = "krs";
        e.KIANG_REGISTER_FAILED = "krf";
        e.KIANG_UPDATED = "kus";
        e.KIANG_UPDATE_FAILED = "kuf";
        e.DEACTIVATED_NOTIF_STATE = "kds";
        e.DEACTIVATE_NOTIF_STATE_FAILED = "kdf"
    })(u || (u = {}));
    var Mb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor =
                        b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Nb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ob = function(e) {
            function b(a) {
                return e.call(this, b.DB_NAME, b.DB_VERSION, a) || this
            }
            Mb(b, e);
            b.prototype.validateRecord =
                function(a) {
                    var b = [];
                    a.customerContext || b.push("customerContext:" + a.customerContext);
                    m.hasContent(a.applicationIdentifier) || b.push("applicationIdentifier:" + a.applicationIdentifier);
                    m.hasContent(a.applicationVersion) || b.push("applicationVersion:" + a.applicationVersion);
                    if (a.kiangInstallId) {
                        var c = a.kiangInstallId;
                        x("", "validateKiangInstallId", "%o", c);
                        var f = [];
                        m.hasContent(c.applicationInstallId) || f.push("kiangInstallId.applicationInstallId:" + c.applicationInstallId);
                        c.sequenceNumber && m.isPositiveInteger(c.sequenceNumber) ||
                            f.push("kiangInstallId.sequenceNumber:" + c.sequenceNumber);
                        b = b.concat(f)
                    } else b.push("kiangInstallId:" + a.kiangInstallId);
                    m.hasContent(a.osNotificationState) || b.push("osNotificationState:" + a.osNotificationState);
                    a.pushSubscriptionInformation ? (c = a.pushSubscriptionInformation, x("", "validatePushSubscriptionInformation", "%o", c), f = [], f = f.concat(Na(c)), f = f.concat(Oa(c)), f = f.concat(Pa(c)), b = b.concat(f)) : b.push("pushSubscriptionInformation:" + a.pushSubscriptionInformation);
                    a.libTag || b.push("libTag:" + a.libTag);
                    a.createTime || b.push("createTime:" + a.createTime);
                    return b
                };
            b.DB_NAME = "Subscription";
            b.DB_VERSION = 1;
            Nb([l], b.prototype, "validateRecord", null);
            return b
        }(ga),
        H;
    (function(e) {
        e.CREATE = "create";
        e.UPDATE = "update";
        e.NO_OP = "no_op"
    })(H || (H = {}));
    var Pb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) :
                    (g.prototype = a.prototype, new g)
            }
        }(),
        v = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        B = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        C = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a =
                                c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Qb = function(e) {
            function b(a, b, c, f) {
                var h = e.call(this) || this;
                h.log("ctor", "Called with: %o", [a, b, c, f]);
                h.serviceWorker = a;
                h.pushMarketplaceConfigProvider = b;
                h.customerContextProvider = c;
                h.reportingManager = f;
                h.service = new Lb(b);
                h.store = new Ob(a.registration.scope);
                h._registerEvents();
                return h
            }
            Pb(b, e);
            b.prototype.syncSubscription = function(a) {
                void 0 === a && (a = !1);
                return B(this,
                    void 0, void 0,
                    function() {
                        var b, c, f, e;
                        return C(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return d.trys.push([0, 3, , 4]), [4, this.customerContextProvider.getCustomerContext()];
                                case 1:
                                    return b = d.sent(), [4, this._synchronizeSubscriptionTokens(b, a)];
                                case 2:
                                    return c = d.sent(), this.log("syncSubscription", "aiid \x3d %o", c), [2, this._constructSubscriptionResponse(!0, M.SYNC_SUBSCRIPTION_SUCCESS, c.applicationInstallId, c.subscriptionSyncMode)];
                                case 3:
                                    f = d.sent();
                                    this.log("syncSubscription", f.toString());
                                    e = M.SYNC_SUBSCRIPTION_FAILURE;
                                    switch (f.code) {
                                        case n.NO_PERMISSIONS.code:
                                            e = M.PERMISSION_NOT_GRANTED
                                    }
                                    return [2, this._constructSubscriptionResponse(!1, e, void 0, void 0, f.message)];
                                case 4:
                                    return [2]
                            }
                        })
                    })
            };
            b.prototype._synchronizeSubscriptionTokens = function(a, b) {
                return B(this, void 0, void 0, function() {
                    var c, f, e, d, k, q, r, l;
                    return C(this, function(m) {
                        switch (m.label) {
                            case 0:
                                return "granted" === Notification.permission ? [3, 2] : [4, this._deactivateOsNotificationState(a)];
                            case 1:
                                throw m.sent(), p.create(n.NO_PERMISSIONS);
                            case 2:
                                return [4, this.pushMarketplaceConfigProvider.getConfig()];
                            case 3:
                                return c = m.sent(), [4, this.store.getRecord()];
                            case 4:
                                return e = (f = m.sent()) ? f.kiangInstallId.applicationInstallId : "", d = !1, k = H.NO_OP, [4, this._getExistingPushSubscriptionFromBrowser()];
                            case 5:
                                return q = m.sent(), !b && f && this._isPushSubscriptionInformationValid(c, q, a, f) ? [3, 7] : [4, this._getFreshPushSubscriptionFromBrowser(c.publicVapidKey)];
                            case 6:
                                return q = m.sent(), d = !0, [3, 8];
                            case 7:
                                this._isKiangServiceMetadataValid(a, f) || (d = !0), m.label = 8;
                            case 8:
                                if (!d || !q) return [3, 11];
                                r = this._getPushSubscriptionInformation(c,
                                    q);
                                return [4, this._synchronizeKiangState(a, r, f, G.ACTIVE)];
                            case 9:
                                return l = m.sent(), e = l.applicationInstallId, k = f ? H.UPDATE : H.CREATE, [4, this._synchronizeStoreRecord(c, a, r, l, G.ACTIVE)];
                            case 10:
                                m.sent(), m.label = 11;
                            case 11:
                                return [2, {
                                    applicationInstallId: e,
                                    subscriptionSyncMode: k
                                }]
                        }
                    })
                })
            };
            b.prototype._isPushSubscriptionInformationValid = function(a, g, c, f) {
                if (!g || this.customerContextProvider.hasCustomerIdentityChanged(f.customerContext, c)) return !1;
                g = this._getPushSubscriptionInformation(a, g);
                c = f.pushSubscriptionInformation;
                return w.getCurrentTimestamp() < f.createTime + b.PUSH_SUBSCRIPTION_EXPIRY_TTL && "1" === f.libTag && a.applicationIdentifier === f.applicationIdentifier && g.pushInformation.provider === c.pushInformation.provider && g.pushInformation.providerKey === c.pushInformation.providerKey && g.pushInformation.protocol === c.pushInformation.protocol && g.pushInformation.secret === c.pushInformation.secret && g.payloadEncryptionInformation.__type === c.payloadEncryptionInformation.__type && g.payloadEncryptionInformation.protocol === c.payloadEncryptionInformation.protocol &&
                    g.payloadEncryptionInformation.endpointEcdhPublicKey === c.payloadEncryptionInformation.endpointEcdhPublicKey && g.payloadEncryptionInformation.sharedAuthSecret === c.payloadEncryptionInformation.sharedAuthSecret && g.serverAuthenticationInformation.__type === c.serverAuthenticationInformation.__type && g.serverAuthenticationInformation.protocol === c.serverAuthenticationInformation.protocol && g.serverAuthenticationInformation.publicKey === c.serverAuthenticationInformation.publicKey && g.serverAuthenticationInformation.certificateVersion ===
                    c.serverAuthenticationInformation.certificateVersion
            };
            b.prototype._isKiangServiceMetadataValid = function(a, b) {
                return this.customerContextProvider.hasCustomerPreferenceChanged(b.customerContext, a) || b.applicationVersion !== w.getLibVersion() ? !1 : !0
            };
            b.prototype._synchronizeKiangState = function(a, b, c, f) {
                return B(this, void 0, void 0, function() {
                    var e, d, k, q;
                    return C(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (c) return [3, 5];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.service.register(a, f, b)];
                            case 2:
                                return e =
                                    r.sent(), this._logCounter(u.KIANG_REGISTERED), this._logCounter(u.KIANG_REGISTER_FAILED, 0), [3, 4];
                            case 3:
                                throw d = r.sent(), this._logCounter(u.KIANG_REGISTERED, 0), this._logCounter(u.KIANG_REGISTER_FAILED), d;
                            case 4:
                                return [3, 6];
                            case 5:
                                e = c.kiangInstallId.applicationInstallId, r.label = 6;
                            case 6:
                                return [4, this._getKiangSequenceNumber()];
                            case 7:
                                k = r.sent(), r.label = 8;
                            case 8:
                                return r.trys.push([8, 10, , 11]), [4, this.service.update(a, f, b, e, k)];
                            case 9:
                                return r.sent(), this._logCounter(u.KIANG_UPDATED), this._logCounter(u.KIANG_UPDATE_FAILED,
                                    0), [3, 11];
                            case 10:
                                throw q = r.sent(), this._logCounter(u.KIANG_UPDATED, 0), this._logCounter(u.KIANG_UPDATE_FAILED), q;
                            case 11:
                                return [2, {
                                    applicationInstallId: e,
                                    sequenceNumber: k
                                }]
                        }
                    })
                })
            };
            b.prototype._synchronizeStoreRecord = function(a, b, c, f, e) {
                return B(this, void 0, void 0, function() {
                    var d;
                    return C(this, function(k) {
                        switch (k.label) {
                            case 0:
                                return d = {
                                    customerContext: b,
                                    applicationIdentifier: a.applicationIdentifier,
                                    applicationVersion: w.getLibVersion(),
                                    kiangInstallId: f,
                                    osNotificationState: e,
                                    pushSubscriptionInformation: c,
                                    libTag: "1",
                                    createTime: w.getCurrentTimestamp()
                                }, [4, this.store.saveRecord(d)];
                            case 1:
                                return k.sent(), [2]
                        }
                    })
                })
            };
            b.prototype._getKiangSequenceNumber = function() {
                return B(this, void 0, void 0, function() {
                    var a, b;
                    return C(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this.store.getRecord()];
                            case 1:
                                a = c.sent();
                                if (!a) return [2, 2];
                                b = y.decode(y.encode(a));
                                b.kiangInstallId.sequenceNumber++;
                                return [4, this.store.saveRecord(b)];
                            case 2:
                                return c.sent(), [2, b.kiangInstallId.sequenceNumber]
                        }
                    })
                })
            };
            b.prototype._getPushSubscriptionInformation =
                function(a, b) {
                    b = b.toJSON();
                    if (!(b.endpoint && b.keys && b.keys.p256dh && b.keys.auth)) throw p.create(n.INVALID_PUSH_SUBSCRIPTION);
                    return {
                        pushInformation: {
                            provider: "WPN",
                            providerKey: a.providerKey,
                            protocol: "RFC8030",
                            secret: b.endpoint
                        },
                        payloadEncryptionInformation: {
                            __type: "com.amazon.KiangService#RFC8291PayloadEncryptionInformation",
                            protocol: "RFC8291",
                            endpointEcdhPublicKey: b.keys.p256dh,
                            sharedAuthSecret: b.keys.auth
                        },
                        serverAuthenticationInformation: {
                            __type: "com.amazon.KiangService#RFC8292ServerAuthenticationInformation",
                            protocol: "RFC8292",
                            publicKey: a.publicVapidKey,
                            certificateVersion: a.publicVapidKeySerial
                        }
                    }
                };
            b.prototype._getExistingPushSubscriptionFromBrowser = function() {
                return B(this, void 0, void 0, function() {
                    return C(this, function(a) {
                        return [2, this.serviceWorker.registration.pushManager.getSubscription()]
                    })
                })
            };
            b.prototype._getFreshPushSubscriptionFromBrowser = function(a) {
                return B(this, void 0, void 0, function() {
                    var b, c, f;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this._getExistingPushSubscriptionFromBrowser()];
                            case 1:
                                return (b = e.sent()) ? [4, b.unsubscribe()] : [3, 3];
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                return c = K.parseVapidKey(a), [4, this.serviceWorker.registration.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: c
                                })];
                            case 4:
                                return f = e.sent(), this._logCounter(u.PUSH_SUBSCRIPTION_GENERATED), [2, f]
                        }
                    })
                })
            };
            b.prototype._deactivateOsNotificationState = function(a) {
                return B(this, void 0, void 0, function() {
                    var b, c, f;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.store.getRecord()];
                            case 1:
                                b = e.sent();
                                if (!b || b.osNotificationState === G.INACTIVE) return [2];
                                e.label = 2;
                            case 2:
                                return e.trys.push([2, 6, , 7]), [4, this.pushMarketplaceConfigProvider.getConfig()];
                            case 3:
                                return c = e.sent(), [4, this._synchronizeKiangState(a, b.pushSubscriptionInformation, b, G.INACTIVE)];
                            case 4:
                                return f = e.sent(), [4, this._synchronizeStoreRecord(c, a, b.pushSubscriptionInformation, f, G.INACTIVE)];
                            case 5:
                                return e.sent(), this._logCounter(u.DEACTIVATED_NOTIF_STATE), this._logCounter(u.DEACTIVATE_NOTIF_STATE_FAILED, 0), [3, 7];
                            case 6:
                                return e.sent(),
                                    this._logCounter(u.DEACTIVATED_NOTIF_STATE, 0), this._logCounter(u.DEACTIVATE_NOTIF_STATE_FAILED), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            };
            b.prototype._constructSubscriptionResponse = function(a, b, c, f, e) {
                a = {
                    ok: a,
                    exitCode: b
                };
                c && (a.applicationInstallId = c, a.subscriptionSyncMode = f);
                e && (a.message = e.toString());
                return a
            };
            b.prototype._registerEvents = function() {
                var a = this;
                this.serviceWorker.addEventListener("pushsubscriptionchange", function(b) {
                    b.waitUntil(a.reportingManager.withReporting(a._onPushSubscriptionChange(b)))
                })
            };
            b.prototype._onPushSubscriptionChange = function(a) {
                return B(this, void 0, void 0, function() {
                    return C(this, function(a) {
                        this._logCounter(u.PUSH_SUBSCRIPTION_CHANGED);
                        return [2]
                    })
                })
            };
            b.prototype._logCounter = function(a, g) {
                void 0 === g && (g = 1);
                this.reportingManager.logCounter(b.REPORTING_FEATURE_NAME, a, g)
            };
            b.REPORTING_FEATURE_NAME = "subs";
            b.PUSH_SUBSCRIPTION_EXPIRY_TTL = 2592E6;
            v([l], b.prototype, "syncSubscription", null);
            v([l], b.prototype, "_synchronizeSubscriptionTokens", null);
            v([l], b.prototype, "_isPushSubscriptionInformationValid",
                null);
            v([l], b.prototype, "_isKiangServiceMetadataValid", null);
            v([l], b.prototype, "_synchronizeKiangState", null);
            v([l], b.prototype, "_synchronizeStoreRecord", null);
            v([l], b.prototype, "_getExistingPushSubscriptionFromBrowser", null);
            v([l], b.prototype, "_getFreshPushSubscriptionFromBrowser", null);
            v([l], b.prototype, "_deactivateOsNotificationState", null);
            v([l], b.prototype, "_constructSubscriptionResponse", null);
            v([l], b.prototype, "_registerEvents", null);
            v([l], b.prototype, "_onPushSubscriptionChange", null);
            v([l],
                b.prototype, "_logCounter", null);
            return b
        }(t),
        Rb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Sb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f =
                Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Aa = function(e) {
            function b() {
                return e.call(this) || this
            }
            Rb(b, e);
            b.prototype.constructOrchestratorResponse = function(a, b, c) {
                a = {
                    ok: a,
                    exitCode: b,
                    message: c
                };
                c && (a.message = c);
                return a
            };
            Sb([l], b.prototype, "constructOrchestratorResponse", null);
            return b
        }(t),
        Tb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ =
                    a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        X = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b,
                a, f), f
        },
        Ba = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Ca = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g],
                        h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Ub = function(e) {
            function b(a, b, c) {
                var f = e.call(this) || this;
                f.syncSubscriptionLock = 0;
                f.customerContextProvider = a;
                f.subscriptionManager = b;
                f.topicSubscriptionManager = c;
                return f
            }
            Tb(b, e);
            b.prototype.execute = function(a) {
                return Ba(this,
                    void 0, void 0,
                    function() {
                        var b, c;
                        return Ca(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    if (!this._obtainSyncSubscriptionLock()) return [2, this.constructOrchestratorResponse(!1, F.RETRY_LATER)];
                                    f.label = 1;
                                case 1:
                                    return f.trys.push([1, 6, 7, 8]), [4, this.customerContextProvider.updateCustomerContext(a.cookies)];
                                case 2:
                                    return f.sent(), [4, this.subscriptionManager.syncSubscription(a.freshTokens || !1)];
                                case 3:
                                    return b = f.sent(), b.ok ? [4, this._syncTopics(b, a)] : [3, 5];
                                case 4:
                                    f.sent(), f.label = 5;
                                case 5:
                                    return [2, b];
                                case 6:
                                    return c =
                                        f.sent(), this.log("execute", c.toString()), [2, this.constructOrchestratorResponse(!1, F.OPERATION_FAILED, c.message)];
                                case 7:
                                    return this._releaseSyncSubscriptionLock(), [7];
                                case 8:
                                    return [2]
                            }
                        })
                    })
            };
            b.prototype._syncTopics = function(a, b) {
                return Ba(this, void 0, void 0, function() {
                    var c, f;
                    return Ca(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return a.applicationInstallId ? [4, this.customerContextProvider.isCustomerRecognized()] : [2];
                            case 1:
                                c = e.sent();
                                if (!c) return [2];
                                f = [];
                                a.subscriptionSyncMode !== H.NO_OP && f.push(this.topicSubscriptionManager.autoOptIn(a.applicationInstallId));
                                Array.isArray(b.topics) && 0 < b.topics.length && f.push(this.topicSubscriptionManager.subscribeToTopics(a.applicationInstallId, b.topics));
                                return [4, Promise.all(f)];
                            case 2:
                                return e.sent(), [2]
                        }
                    })
                })
            };
            b.prototype._obtainSyncSubscriptionLock = function() {
                var a = this;
                if (this.syncSubscriptionLock) return !1;
                this.syncSubscriptionLock = setTimeout(function() {
                    a._releaseSyncSubscriptionLock()
                }, b.LOCK_TTL);
                return !0
            };
            b.prototype._releaseSyncSubscriptionLock = function() {
                clearTimeout(this.syncSubscriptionLock);
                this.syncSubscriptionLock =
                    0
            };
            b.LOCK_TTL = 3E4;
            X([l], b.prototype, "execute", null);
            X([l], b.prototype, "_syncTopics", null);
            X([l], b.prototype, "_obtainSyncSubscriptionLock", null);
            X([l], b.prototype, "_releaseSyncSubscriptionLock", null);
            return b
        }(Aa),
        Vb = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype,
                    new g)
            }
        }(),
        Wb = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Xb = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ?
                        c(b.value) : (new a(function(a) {
                            a(b.value)
                        })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Yb = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        Zb = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            Vb(b, e);
            b.prototype.execute = function() {
                return Xb(this, void 0, void 0, function() {
                    var a;
                    return Yb(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return b.trys.push([0, 2, , 3]), [4, this.pushMarketplaceConfigProvider.killConfig()];
                            case 1:
                                return b.sent(), [2, this.constructOrchestratorResponse(!0, F.OPERATION_SUCCESS)];
                            case 2:
                                return a = b.sent(), this.log("execute", a.toString()), [2, this.constructOrchestratorResponse(!1, F.OPERATION_FAILED, a.message)];
                            case 3:
                                return [2]
                        }
                    })
                })
            };
            Wb([l], b.prototype, "execute", null);
            return b
        }(Aa),
        $b = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Da = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ac = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ?
                        c(b.value) : (new a(function(a) {
                            a(b.value)
                        })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        bc = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        cc = function(e) {
            function b(a, b, c, f) {
                var h = e.call(this) || this;
                h.log("ctor", "Called with: %o", [a, b, c, f]);
                h.requestExecutors = (d = {}, d[W.SYNC_SUBSCRIPTION] = new Ub(b, c, f), d[W.UPDATE_CONFIG] = new Zb(a), d);
                return h;
                var d
            }
            $b(b, e);
            b.prototype.request = function(a) {
                return ac(this, void 0, void 0, function() {
                    var b;
                    return bc(this, function(c) {
                        return (b = this.requestExecutors[a.__type]) ? [2, b.execute(a.options)] : [2, this._handleUnresolvedRequest()]
                    })
                })
            };
            b.prototype._handleUnresolvedRequest = function() {
                return {
                    ok: !1,
                    exitCode: F.UNRESOLVED_REQUEST
                }
            };
            Da([l], b.prototype, "request", null);
            Da([l], b.prototype, "_handleUnresolvedRequest", null);
            return b
        }(t),
        dc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype =
                    a.prototype, new g)
            }
        }(),
        Y = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        ec = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        fc = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a =
                                c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        gc = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            dc(b, e);
            b.prototype.postMetrics = function(a, b) {
                return ec(this, void 0, void 0, function() {
                    var c, f, e, d, k;
                    return fc(this, function(q) {
                        switch (q.label) {
                            case 0:
                                return [4, this.pushMarketplaceConfigProvider.getConfigLocalOnly()];
                            case 1:
                                c = q.sent();
                                if (!c) throw p.create(n.INVALID_PUSH_MARKETPLACE_CONFIG);
                                f = {
                                    endpoint: c.endpoints.forester,
                                    marketplaceId: c.marketplaceId,
                                    requestId: this._generateRequestId(),
                                    session: a.session,
                                    marketplace: c.countryCode.toLowerCase(),
                                    wyw: this._renderWYW(b)
                                };
                                e = this._renderPostbackUrl(f);
                                d = {
                                    method: "GET",
                                    credentials: "omit"
                                };
                                return [4, this.callService(e, d, 1, !1)];
                            case 2:
                                return k = q.sent(), this.validateResponseOk(k), [2]
                        }
                    })
                })
            };
            b.prototype._renderWYW = function(a) {
                var b = [],
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var f = [],
                            e;
                        for (e in a[c]) a[c].hasOwnProperty(e) && f.push(1 !== a[c][e] ? e + "@v\x3d" +
                            a[c][e] : e);
                        b.push(c + "_:" + f.join(","))
                    }
                return b.join("/")
            };
            b.prototype._renderPostbackUrl = function(a) {
                var g = b.URL_TEMPLATE,
                    c;
                for (c in a) a.hasOwnProperty(c) && (g = g.replace(new RegExp("{{" + c + "}}", "gi"), a[c]));
                return g
            };
            b.prototype._generateRequestId = function() {
                for (var a = "WPN"; 20 > a.length;) a += Math.floor(9007199254740991 * Math.random()).toString();
                return a.substring(0, 20)
            };
            b.URL_TEMPLATE = "{{endpoint}}/1/action-impressions/1/OP/webpush/action/{{wyw}}?marketplaceId\x3d{{marketplaceId}}\x26requestId\x3d{{requestId}}\x26session\x3d{{session}}\x26marketplace\x3d{{marketplace}}\x26service\x3dWebPushClient";
            Y([l], b.prototype, "postMetrics", null);
            Y([l], b.prototype, "_renderWYW", null);
            Y([l], b.prototype, "_renderPostbackUrl", null);
            Y([l], b.prototype, "_generateRequestId", null);
            return b
        }(aa),
        hc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        N = function(e, b, a, g) {
            var c =
                arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ea = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h,
                        d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Fa = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length &&
                                    d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                    next: a(0),
                    "throw": a(1),
                    "return": a(2)
                }, "function" ===
                typeof Symbol && (k[Symbol.iterator] = function() {
                    return this
                }), k
        },
        ic = function(e) {
            function b(a, b) {
                var c = e.call(this) || this;
                c.loggerQueue = [];
                c.timeout = 0;
                c.log("ctor", "Called with: %o", [a, b]);
                c.customerContextProvider = b;
                c.service = new gc(a);
                return c
            }
            hc(b, e);
            b.prototype.logCounter = function(a, g, c) {
                var e = this;
                void 0 === c && (c = 1);
                this.loggerQueue.push({
                    feature: this._sanitize(a),
                    resource: this._sanitize(g),
                    value: c
                });
                this.loggerQueue.length > b.LOGGER_QUEUE_MAX && this.loggerQueue.shift();
                this.timeout || (this.log("logCounter",
                    "setting timeout for a flush..."), this.timeout = setTimeout(function() {
                    e.flush(!0)
                }, b.FLUSH_TIMEOUT))
            };
            b.prototype.flush = function(a) {
                void 0 === a && (a = !1);
                return Ea(this, void 0, void 0, function() {
                    var a, b, e;
                    return Fa(this, function(h) {
                        switch (h.label) {
                            case 0:
                                clearTimeout(this.timeout);
                                this.timeout = 0;
                                if (0 === this.loggerQueue.length) return [2];
                                h.label = 1;
                            case 1:
                                return h.trys.push([1, 4, , 5]), [4, this.customerContextProvider.getCustomerContext()];
                            case 2:
                                return a = h.sent(), b = this.loggerQueue.length, [4, this.service.postMetrics(a,
                                    this._generateMetricsTree())];
                            case 3:
                                return h.sent(), this.loggerQueue.splice(0, b), [3, 5];
                            case 4:
                                return e = h.sent(), this.log("flush", "failed, Error: " + e.message), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            };
            b.prototype.withReporting = function(a) {
                return Ea(this, void 0, void 0, function() {
                    var b;
                    return Fa(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return c.trys.push([0, 2, 3, 5]), [4, a];
                            case 1:
                                return c.sent(), [3, 5];
                            case 2:
                                throw b = c.sent(), b;
                            case 3:
                                return [4, this.flush()];
                            case 4:
                                return c.sent(), [7];
                            case 5:
                                return [2]
                        }
                    })
                })
            };
            b.prototype._generateMetricsTree =
                function() {
                    var a = {};
                    this.loggerQueue.forEach(function(b) {
                        a[b.feature] = a[b.feature] || {};
                        a[b.feature][b.resource] ? a[b.feature][b.resource] += b.value : a[b.feature][b.resource] = b.value
                    });
                    return a
                };
            b.prototype._sanitize = function(a) {
                return a.toLowerCase().replace(/[^a-z0-9_]/g, "_")
            };
            b.FLUSH_TIMEOUT = 3E4;
            b.LOGGER_QUEUE_MAX = 200;
            N([l], b.prototype, "logCounter", null);
            N([l], b.prototype, "flush", null);
            N([l], b.prototype, "withReporting", null);
            N([l], b.prototype, "_generateMetricsTree", null);
            N([l], b.prototype, "_sanitize",
                null);
            return b
        }(t),
        jc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        Ga = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e,
                b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        kc = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        lc = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label =
                                d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        mc = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            jc(b, e);
            b.prototype.autoOptIn =
                function(a, e) {
                    return kc(this, void 0, void 0, function() {
                        var c, f, h;
                        return lc(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return [4, this.pushMarketplaceConfigProvider.getConfig()];
                                case 1:
                                    return c = d.sent(), f = this._constructRequestBody(c, a, e), [4, this.callPushApplicationService(c.endpoints.pfe, b.API_TARGET, f)];
                                case 2:
                                    return h = d.sent(), this.validateResponseOk(h), [2]
                            }
                        })
                    })
                };
            b.prototype._constructRequestBody = function(a, b, c) {
                a = {
                    applicationInstallId: b,
                    marketplaceId: a.marketplaceId
                };
                c.locale && (a.locale = c.locale);
                return y.encode(a)
            };
            b.API_TARGET = "com.amazon.mobilepushfrontendexternal.MobilePushFrontendExternalService.MShopToggleMarketplaceNotifications";
            Ga([l], b.prototype, "autoOptIn", null);
            Ga([l], b.prototype, "_constructRequestBody", null);
            return b
        }(ba),
        nc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype =
                    a.prototype, new g)
            }
        }(),
        Ha = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        oc = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        pc = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a =
                                c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        qc = function(e) {
            function b(a) {
                var b = e.call(this) || this;
                b.pushMarketplaceConfigProvider = a;
                return b
            }
            nc(b, e);
            b.prototype.setSubscriptionTopics = function(a, e) {
                return oc(this, void 0, void 0, function() {
                    var c, f, h;
                    return pc(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return [4, this.pushMarketplaceConfigProvider.getConfig()];
                            case 1:
                                return c = d.sent(), f = this._constructRequestBody(c,
                                    a, e), [4, this.callPushApplicationService(c.endpoints.pfe, b.API_TARGET, f)];
                            case 2:
                                return h = d.sent(), this.validateResponseOk(h), [2]
                        }
                    })
                })
            };
            b.prototype._constructRequestBody = function(a, b, c) {
                return y.encode({
                    applicationInstallId: b,
                    marketplaceId: a.marketplaceId,
                    subscriptions: c
                })
            };
            b.API_TARGET = "com.amazon.mobilepushfrontendexternal.MobilePushFrontendExternalService.SetSubscriptions";
            Ha([l], b.prototype, "setSubscriptionTopics", null);
            Ha([l], b.prototype, "_constructRequestBody", null);
            return b
        }(ba),
        I;
    (function(e) {
        e.TOPIC_SUBSCRIPTION_SUCCESS =
            "topic_subcription_success";
        e.TOPIC_SUBSCRIPTION_FAILURE = "topic_subscription_failure"
    })(I || (I = {}));
    var J;
    (function(e) {
        e.AUTO_OPTED_IN = "aos";
        e.AUTO_OPT_IN_FAILED = "aof";
        e.SET_TOPIC = "sts";
        e.SET_TOPIC_FAILED = "stf"
    })(J || (J = {}));
    var rc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype =
                    a.prototype, new g)
            }
        }(),
        oa = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        Ia = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h, d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        Ja = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a =
                                c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                next: a(0),
                "throw": a(1),
                "return": a(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                return this
            }), k
        },
        sc = function(e) {
            function b(a, b, c) {
                var f = e.call(this) || this;
                f.log("ctor", "Called with: %o", [a, b, c]);
                f.customerContextProvider = b;
                f.reportingManager = c;
                f.autoOptInService = new mc(a);
                f.setSubscriptionTopicService = new qc(a);
                return f
            }
            rc(b, e);
            b.prototype.autoOptIn = function(a) {
                return Ia(this, void 0, void 0, function() {
                    var b, c;
                    return Ja(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0,
                                    3, , 4
                                ]), [4, this.customerContextProvider.getCustomerContext()];
                            case 1:
                                return b = e.sent(), [4, this.autoOptInService.autoOptIn(a, b)];
                            case 2:
                                return e.sent(), this._logCounter(J.AUTO_OPTED_IN), [2, {
                                    ok: !0,
                                    exitCode: I.TOPIC_SUBSCRIPTION_SUCCESS
                                }];
                            case 3:
                                return c = e.sent(), this._logCounter(J.AUTO_OPT_IN_FAILED), [2, {
                                    ok: !1,
                                    exitCode: I.TOPIC_SUBSCRIPTION_FAILURE,
                                    message: c.message.toString()
                                }];
                            case 4:
                                return [2]
                        }
                    })
                })
            };
            b.prototype.subscribeToTopics = function(a, b) {
                return Ia(this, void 0, void 0, function() {
                    var c, e;
                    return Ja(this,
                        function(h) {
                            switch (h.label) {
                                case 0:
                                    return h.trys.push([0, 2, , 3]), c = b.map(function(a) {
                                        return {
                                            subscriptionId: a,
                                            subscribed: !0
                                        }
                                    }), [4, this.setSubscriptionTopicService.setSubscriptionTopics(a, c)];
                                case 1:
                                    return h.sent(), this._logCounter(J.SET_TOPIC), [2, {
                                        ok: !0,
                                        exitCode: I.TOPIC_SUBSCRIPTION_SUCCESS
                                    }];
                                case 2:
                                    return e = h.sent(), this._logCounter(J.SET_TOPIC_FAILED), [2, {
                                        ok: !1,
                                        exitCode: I.TOPIC_SUBSCRIPTION_FAILURE,
                                        message: e.message.toString()
                                    }];
                                case 3:
                                    return [2]
                            }
                        })
                })
            };
            b.prototype._logCounter = function(a) {
                this.reportingManager.logCounter(b.REPORTING_FEATURE_NAME,
                    a)
            };
            b.REPORTING_FEATURE_NAME = "topc";
            oa([l], b.prototype, "autoOptIn", null);
            oa([l], b.prototype, "subscribeToTopics", null);
            oa([l], b.prototype, "_logCounter", null);
            return b
        }(t),
        tc = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, a) {
                b.__proto__ = a
            } || function(b, a) {
                for (var e in a) a.hasOwnProperty(e) && (b[e] = a[e])
            };
            return function(b, a) {
                function g() {
                    this.constructor = b
                }
                e(b, a);
                b.prototype = null === a ? Object.create(a) : (g.prototype = a.prototype, new g)
            }
        }(),
        pa = function(e, b, a, g) {
            var c = arguments.length,
                f = 3 > c ? b : null === g ? g = Object.getOwnPropertyDescriptor(b, a) : g,
                h;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(e, b, a, g);
            else
                for (var d = e.length - 1; 0 <= d; d--)
                    if (h = e[d]) f = (3 > c ? h(f) : 3 < c ? h(b, a, f) : h(b, a)) || f;
            return 3 < c && f && Object.defineProperty(b, a, f), f
        },
        uc = function(e, b, a, g) {
            return new(a || (a = Promise))(function(c, f) {
                function h(a) {
                    try {
                        k(g.next(a))
                    } catch (b) {
                        f(b)
                    }
                }

                function d(a) {
                    try {
                        k(g["throw"](a))
                    } catch (b) {
                        f(b)
                    }
                }

                function k(b) {
                    b.done ? c(b.value) : (new a(function(a) {
                        a(b.value)
                    })).then(h,
                        d)
                }
                k((g = g.apply(e, b || [])).next())
            })
        },
        vc = function(e, b) {
            function a(a) {
                return function(b) {
                    return g([a, b])
                }
            }

            function g(a) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (f = 1, h && (d = h[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(d = d.call(h, a[1])).done) return d;
                    if (h = 0, d) a = [0, d.value];
                    switch (a[0]) {
                        case 0:
                        case 1:
                            d = a;
                            break;
                        case 4:
                            return c.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            c.label++;
                            h = a[1];
                            a = [0];
                            continue;
                        case 7:
                            a = c.ops.pop();
                            c.trys.pop();
                            continue;
                        default:
                            if (!(d = c.trys, d = 0 < d.length &&
                                    d[d.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === a[0] && (!d || a[1] > d[0] && a[1] < d[3])) c.label = a[1];
                            else if (6 === a[0] && c.label < d[1]) c.label = d[1], d = a;
                            else if (d && c.label < d[2]) c.label = d[2], c.ops.push(a);
                            else {
                                d[2] && c.ops.pop();
                                c.trys.pop();
                                continue
                            }
                    }
                    a = b.call(e, c)
                } catch (g) {
                    a = [6, g], h = 0
                } finally {
                    f = d = 0
                }
                if (a[0] & 5) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
            var c = {
                    label: 0,
                    sent: function() {
                        if (d[0] & 1) throw d[1];
                        return d[1]
                    },
                    trys: [],
                    ops: []
                },
                f, h, d, k;
            return k = {
                    next: a(0),
                    "throw": a(1),
                    "return": a(2)
                }, "function" ===
                typeof Symbol && (k[Symbol.iterator] = function() {
                    return this
                }), k
        },
        wc = function(e) {
            function b(a, b, c) {
                var f = e.call(this) || this;
                f.FEATURE_NAME = "webpush";
                f.log("ctor", "Called with: %o", [a, b, c]);
                f.serviceWorker = a;
                f.orchestrator = b;
                f.reportingManager = c;
                f._registerEvents();
                return f
            }
            tc(b, e);
            b.prototype._registerEvents = function() {
                var a = this;
                this.serviceWorker.addEventListener("message", function(b) {
                    b.waitUntil(a.reportingManager.withReporting(a._onMessage(b)))
                })
            };
            b.prototype._onMessage = function(a) {
                return uc(this,
                    void 0, void 0,
                    function() {
                        var b, c, e, h;
                        return vc(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (a.origin !== this.serviceWorker.location.origin) return [2];
                                    b = a.data;
                                    if (null === b || "object" !== typeof b || b.feature !== this.FEATURE_NAME) return [2];
                                    c = {
                                        __type: b.command,
                                        options: b.options
                                    };
                                    return [4, this.orchestrator.request(c)];
                                case 1:
                                    return e = d.sent(), h = this._constructResponseMessageToClient(b, e), a.ports && a.ports[0] && a.ports[0].postMessage(h), [2]
                            }
                        })
                    })
            };
            b.prototype._constructResponseMessageToClient = function(a, b) {
                return {
                    feature: this.FEATURE_NAME,
                    __type: "command_response",
                    request: a,
                    response: b
                }
            };
            pa([l], b.prototype, "_registerEvents", null);
            pa([l], b.prototype, "_onMessage", null);
            pa([l], b.prototype, "_constructResponseMessageToClient", null);
            return b
        }(t),
        Ka = !1;
    La.init = function(e) {
        a: {
            void 0 === e && (e = {});
            if (Ka) throw p.create(n.UNEXPECTED_INITIALIZATION);Ka = !0;w.injectLibOptions(e);
            try {
                if (!O.isSupported()) throw p.create(n.UNSUPPORTED_BROWSER);
                if (!O.isServiceWorkerContext()) throw p.create(n.UNSUPPORTED_CONTEXT);
            } catch (f) {
                x("", "Bootstrap", f.message);
                break a
            }
            e =
            new lb(self);
            var b = new qb(self, e),
                a = new ic(e, b),
                g = new Qb(self, e, b, a),
                c = new sc(e, b, a),
                b = new cc(e, b, g, c);new Jb(self, e, a);new wc(self, b, a)
        }
    }
})(this.WebPushNotifications = this.WebPushNotifications || {});
(function() {
    (function() {
        function m(b, a) {
            var c, d, e, f, g = function() {
                var a = Date.now() - f;
                a < h ? c = setTimeout(g, h - a) : (c = null, b.apply(e, d))
            };
            return function() {
                e = this;
                d = arguments;
                f = Date.now();
                c || (c = setTimeout(g, a))
            }
        }

        function n() {
            return (self.registration.navigationPreload ? self.registration.navigationPreload.enable() : Promise.resolve()).catch(function(b) {
                throw b;
            })
        }

        function p(b, a) {
            return (b.preloadResponse || Promise.resolve(void 0)).then(function(a) {
                if (a) return a;
                throw Error("PreloadResponse failed");
            }).catch(a)
        }

        function q(b) {
            return fetch(b.request).catch(function(a) {
                return caches.open(k).then(function(a) {
                    return a.match("/gp/aw/amazonwebapp/offline.html")
                })
            })
        }

        function r(b) {
            var a = b.request;
            if ("GET" === a.method && /:\/\/[^\/]*\/manifest.webmanifest/.test(a.url)) {
                t.getClientCounters(b.clientId || "").increment("web-app-manifest-request");
                var c = new Headers(a.headers);
                c.append("x-amazon-service-worker-features", "offline");
                b.respondWith(fetch(new Request(a.url, {
                    method: a.method,
                    mode: a.mode,
                    credentials: a.credentials,
                    cache: a.cache,
                    redirect: a.redirect,
                    referrer: a.referrer,
                    headers: c
                })))
            }
        }
        var u = function() {
                var b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
                };
                return function(a, c) {
                    function d() {
                        this.constructor = a
                    }
                    b(a, c);
                    a.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
                }
            }(),
            w = function() {
                function b() {
                    this.clientCounterMap = {}
                }
                b.prototype.getClientCounters = function(a) {
                    this.clientCounterMap[a] || (this.clientCounterMap[a] =
                        new v(a));
                    return this.clientCounterMap[a]
                };
                return b
            }();
        (function(b) {
            function a(c) {
                var d = b.call(this, c) || this;
                d.message = c;
                Object.setPrototypeOf(d, a.prototype);
                return d
            }
            u(a, b);
            return a
        })(Error);
        var v = function() {
                function b(a) {
                    var b = this;
                    this.counters = {};
                    this.emitCounters = m(function() {
                        self.clients.get(b.clientID).then(function(a) {
                            if (a && a.postMessage) {
                                for (var e = 0, f = Object.keys(b.counters); e < f.length; e++) {
                                    var g = f[e];
                                    a.postMessage({
                                        k: "sw:" + g,
                                        v: b.counters[g]
                                    })
                                }
                                b.counters = {}
                            }
                        }).catch(function() {})
                    }, h);
                    this.clientID =
                        a
                }
                b.prototype.increment = function(a, b) {
                    void 0 === b && (b = 1);
                    this.clientID && (this.counters[a] = (this.counters[a] || 0) + b, this.emitCounters());
                    return this
                };
                return b
            }(),
            h = 500,
            l = {
                cacheKey: "static-v0"
            },
            l = function(b) {
                for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
                for (var c = Object(b), d = 0; d < a.length; d++) {
                    var e = a[d],
                        f;
                    for (f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
                }
                return c
            }(l, function(b) {
                return self.amzSwConfig && self.amzSwConfig.hasOwnProperty(b) ? self.amzSwConfig[b] : {}
            }("offlinePage")),
            k = "offline-cache-" + l.cacheKey,
            x = /^offline-cache-/,
            t = new w;
        self.addEventListener("install", function(b) {
            b.waitUntil(self.skipWaiting())
        });
        self.addEventListener("activate", function(b) {
            return self.clients.claim()
        });
        self.addEventListener("install", function(b) {
            b.waitUntil(caches.open(k).then(function(a) {
                return a.addAll(["/gp/aw/amazonwebapp/offline.html"])
            }).catch(function(a) {
                throw a;
            }))
        });
        self.addEventListener("activate", function(b) {
            var a = caches.keys().then(function(a) {
                    return Promise.all(a.filter(function(a) {
                        return x.test(a) &&
                            a !== k
                    }).map(function(a) {
                        return caches.delete(a)
                    }))
                }).catch(function(a) {
                    throw a;
                }),
                c = n();
            b.waitUntil(Promise.all([a, c]))
        });
        self.addEventListener("fetch", function(b) {
            "navigate" === b.request.mode && !0 !== b.request.isHistoryNavigation && "only-if-cached" !== b.request.cache ? b.respondWith(p(b, function(a) {
                return q(b)
            })) : r(b)
        });
        WebPushNotifications && "function" === typeof WebPushNotifications.init && WebPushNotifications.init()
    })()
})();