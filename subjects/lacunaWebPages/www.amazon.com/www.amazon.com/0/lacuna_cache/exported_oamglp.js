
            ! function() {
                function n(n, t) {
                    var r = i(n);
                    return t && (r = r("instance", t)), r
                }
                var r = [],
                    c = 0,
                    i = function(t) {
                        return function() {
                            var n = c++;
                            return r.push([t, [].slice.call(arguments, 0), n, {
                                time: Date.now()
                            }]), i(n)
                        }
                    };
                n._s = r, this.csa = n
            }();
            if (window.csa) {
                csa("Config", {
                    'Application': 'Retail',
                    'ObfuscatedMarketplaceId': 'ATVPDKIKX0DER',
                    'Events.SushiEndpoint': 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod'
                });

                csa("Events")("setEntity", {
                    page: {
                        requestId: "6QKAQWH3ARHCQFMBSRA9",
                        meaningful: "interactive"
                    },
                    session: {
                        id: "143-1759968-0841650"
                    }
                });
            }! function(n) {
                var e, o, t = n.csa,
                    i = {},
                    f = {},
                    u = n.csa._s,
                    c = 0,
                    r = {},
                    a = {},
                    s = setTimeout,
                    l = Object.keys;

                function g(n, i) {
                    return t(n, i)
                }

                function d(n, i) {
                    var t = f[n] || {};
                    O(t, i), f[n] = t, s(b, 0)
                }

                function h(n, i) {
                    r[n] || (r[n] = []), r[n].push(i)
                }

                function p(i, t) {
                    if (i in a) t(a[i]);
                    else {
                        var e = function(n) {
                            v(i, e), t(n)
                        };
                        h(i, e)
                    }
                }

                function v(n, i) {
                    var t = r[n];
                    t && t.splice(t.indexOf(i), 1)
                }

                function m(n) {
                    if (i.DEBUG) throw n
                }

                function w() {
                    return Math.abs(4294967295 * Math.random() | 0).toString(36)
                }

                function b() {
                    for (var n = 0; n < u.length;) {
                        var i = u[n],
                            t = i[0] in f;
                        if (!t && !o) return void(c = i.length);
                        t ? (u.splice(c = n, 1), S(i)) : n++
                    }
                }

                function S(n) {
                    var arguments, i = f[n[0]],
                        t = (arguments = n[1])[0];
                    if (!i || !i[t]) return m("Undefined function: " + i + "/" + t);
                    e = n[3], f[n[2]] = i[t].apply(i, arguments.slice(1)) || {}, e = 0
                }

                function D() {
                    o = 1, b()
                }

                function O(i, t) {
                    l(t).forEach(function(n) {
                        i[n] = t[n]
                    })
                }
                p("$beforeunload", D), d("Config", {
                    instance: function(n) {
                        O(i, n)
                    }
                }), t.plugin = function(n) {
                    n(g)
                }, g.config = i, g.register = d, g.on = h, g.removeListener = v, g.once = p, g.emit = function(n, i) {
                    (r[n] || []).forEach(function(n) {
                        n(i)
                    }), a[n] = i || {}
                }, g.UUID = function() {
                    return [w(), w(), w(), w()].join("-")
                }, g.time = function(n) {
                    var i = e ? new Date(e.time) : new Date;
                    return "ISO" === n ? i.toISOString() : i.getTime()
                }, g.error = m, (g.global = n).csa._s.push = function(n) {
                    n[0] in f && (!u.length || o) ? S(n) : u.splice(c++, 0, n)
                }, b(), s(function() {
                    s(D, i.SkipMissingPluginsTimeout || 5e3)
                }, 1)
            }("undefined" != typeof window ? window : global);
            csa.plugin(function(t) {
                var e;

                function n() {
                    if (!e) try {
                        e = t.global.localStorage || {}
                    } catch (t) {
                        e = {}
                    }
                }
                t.store = function(t, c) {
                    try {
                        if (n(), !t) return Object.keys(e);
                        if (!c) return e[t];
                        e[t] = c
                    } catch (t) {}
                }, t.deleteStored = function(t) {
                    try {
                        n(), delete e[t]
                    } catch (t) {}
                }
            });
            csa.plugin(function(a) {
                var t, e = a.global,
                    n = a("Events"),
                    r = e.location,
                    o = e.document,
                    i = e.addEventListener,
                    l = a.emit;

                function d() {
                    var e = !!t;
                    e && (l("$beforePageTransition"), l("$pageTransition")), t = a.UUID(), n("setEntity", {
                        page: {
                            schemaId: "csa.PageEntity.1",
                            id: t,
                            url: r.href,
                            server: r.hostname,
                            path: r.pathname,
                            referrer: o.referrer,
                            title: o.title
                        }
                    }), e && l("$afterPageTransition")
                }

                function f() {
                    l("$load"), l("$afterload")
                }

                function s() {
                    l("$beforeunload"), l("$unload"), l("$afterunload")
                }
                r && o && (i && (i("beforeunload", s), i("pagehide", s), "complete" === o.readyState ? f() : i("load", f)), a.register("SPA", {
                    newPage: d
                }), d())
            });
            csa.plugin(function(t) {
                var i = "UNKNOWN",
                    a = "id",
                    e = "messageId",
                    c = "timestamp",
                    u = "producerId",
                    o = "application",
                    f = "obfuscatedMarketplaceId",
                    s = "entities",
                    r = "schemaId",
                    l = "version",
                    d = "attributes",
                    p = t.config,
                    g = t("Transport"),
                    v = {},
                    I = function(n, t) {
                        Object.keys(n).forEach(t)
                    };

                function m(t, i, e) {
                    I(i, function(n) {
                        n in t || (t[n] = {
                            version: 1
                        }), b(t[n], i[n], e)
                    })
                }

                function b(t, i, e) {
                    I(i, function(n) {
                        !e && n !== a || (t[n] = i[n])
                    })
                }

                function h(c, n, o) {
                    I(n, function(n) {
                        var t = c[n];
                        if (t[r]) {
                            var i = {},
                                e = {};
                            E(i), i[a] = t[a], i[u] = t[u] || o, i[r] = t[r], i[l] = t[l]++, b(i[d] = e, t, 1), O(e), g("log", i)
                        }
                    })
                }

                function E(n) {
                    n[c] = n[c] || t.time("ISO"), n[e] = t.UUID(), n[o] = p.Application || i, n[f] = p.ObfuscatedMarketplaceId || i
                }

                function O(n) {
                    delete n[l], delete n[r], delete n[u]
                }

                function k(c) {
                    var o = {};
                    this.log = function(n, t) {
                        var i = {},
                            e = (t || {}).full;
                        E(n), m(i, v, e), m(i, o, e), m(i, n[s] || {}, e), I(i, function(n) {
                            O(i[n])
                        }), n[u] = c[u], n[s] = i, g("log", n)
                    }, this.setEntity = function(n) {
                        m(o, n, 1), h(o, n, c[u])
                    }
                }
                t.on("$pageTransition", function() {
                    v = {}
                }), t.register("Events", {
                    setEntity: function(n) {
                        m(v, n, 1), h(v, n, "csa")
                    },
                    instance: function(n) {
                        return new k(n)
                    }
                })
            });
            csa.plugin(function(o) {
                var n, i, r = "csa.cajun.",
                    c = "post",
                    u = "preflight",
                    e = "addEventListener",
                    f = "sendBeacon",
                    t = "Transport",
                    s = o.global,
                    a = s.document,
                    d = o.store,
                    l = o.config,
                    p = [],
                    v = [],
                    h = l[t + ".BatchInterval"] || 5e3,
                    g = l[t + ".MaxEvents"] || 1e3,
                    y = 0,
                    m = 864e5;

                function E(e) {
                    if (g <= ++y) return y === g ? o.error("Max events reached") : 0;
                    var t = e.timestamp;
                    if (o.time() - +new Date(t) > m) return o.error("Event is too old: " + t);
                    n = n || setTimeout(S, h), v.push(e)
                }

                function S() {
                    p.forEach(function(t) {
                        var n = [];
                        v.forEach(function(e) {
                            t.accepts(e) && n.push(e)
                        }), n.length && function(t, n, e) {
                            d(e, JSON.stringify(n));

                            function r() {
                                o.deleteStored(e)
                            }[function(e, t, n) {
                                var r = s.navigator || {},
                                    o = s.cordova || {};
                                if (!r[f]) return;
                                if ("ios" === o.platformId && !i) {
                                    if (!e[u]) return;
                                    (new Image).src = e[u]().url, i = 1
                                }
                                var a = e[c](t);
                                if (!a.type && r[f](a.url, a.body)) return n(), 1
                            }, function(e, t, n) {
                                var r = e[c](t),
                                    o = r.type,
                                    a = new XMLHttpRequest;
                                a.onload = function() {
                                    a.status < 299 && n()
                                }, a.open("POST", r.url), o && a.setRequestHeader("Content-Type", o);
                                return a.send(r.body), 1
                            }].some(function(e) {
                                try {
                                    return e(t, n, r)
                                } catch (e) {}
                            })
                        }(t, n, r + o.UUID())
                    }), v = [], n = 0
                }
                o.register(t, {
                    log: E,
                    register: function(e) {
                        p.push(e)
                    }
                }), o.once("$afterunload", S), o.once("$afterload", function() {
                    (d() || []).forEach(function(e) {
                        if (!e.indexOf(r)) try {
                            var t = d(e);
                            o.deleteStored(e), JSON.parse(t).forEach(E)
                        } catch (e) {}
                    }), S(), a && a[e] && a[e]("visibilitychange", S, !1)
                }), o.on("$afterPageTransition", function() {
                    y = 0
                })
            });
            csa.plugin(function(n) {
                var t, r = n.config["Events.SushiEndpoint"];
                var i = /\/\/(.*?)\//.exec(r);
                i && i[1] && (t = "https://" + i[1] + "/ping"), n("Transport")("register", {
                    post: function(n) {
                        return n = n.map(function(n) {
                            return {
                                data: n
                            }
                        }), {
                            url: r,
                            body: JSON.stringify({
                                events: n
                            })
                        }
                    },
                    preflight: function() {
                        return {
                            url: t
                        }
                    },
                    accepts: function() {
                        return 1
                    }
                })
            });
            csa.plugin(function(i) {
                var t, a, o, r, c = i.config["Content.ImpressionMinimumTime"] || 1e3,
                    e = "addEventListener",
                    d = "hidden",
                    n = "renderedTo",
                    s = n + "Viewed",
                    f = n + "Meaningful",
                    u = n + "Impressed",
                    g = 1,
                    m = 2,
                    l = 3,
                    v = 4,
                    p = 5,
                    h = 6,
                    T = 7,
                    I = i.global,
                    P = i("Events", {
                        producerId: "csa"
                    }),
                    y = I.document,
                    b = {},
                    w = {};
                if (!y || !y[e] || void 0 === y[d]) return E("PageStateChange.2", {
                    state: "ignored"
                });

                function C(e) {
                    if (!b[T]) {
                        var n;
                        if (b[e] = i.time(), e !== l && e !== h || (t = t || b[e]), t && !y[d]) a = a || b[e], (n = {})[f] = t - o, n[s] = a - o, E("PageView.4", n), r = r || setTimeout(S, c);
                        if (e !== p && e !== g && e !== m || (clearTimeout(r), r = 0), e !== g && e !== m || E("PageRender.3", {
                                transitionType: e === g ? "hard" : "soft"
                            }), e === T)(n = {})[f] = t - o, n[s] = a - o, n[u] = b[e] - o, E("PageImpressed.2", n)
                    }
                }

                function E(e, n) {
                    w[e] || (n.schemaId = "csa." + e, P("log", n, {
                        full: 1
                    }), w[e] = 1)
                }

                function M() {
                    C(y[d] ? p : v)
                }

                function S() {
                    C(T), r = 0
                }

                function V() {
                    var e = o ? m : g;
                    b = {}, w = {}, a = t = 0, o = i.time(), C(e), M()
                }

                function $() {
                    var e = y.readyState;
                    "interactive" === e && C(l), "complete" === e && C(h)
                }
                V(), y[e]("visibilitychange", M, !1), y[e]("readystatechange", $, !1), i.on("$afterPageTransition", V), i.once("$load", $)
            });
        