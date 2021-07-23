
        (function(c, d) {
            function h(a, b) {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = b.encode(e);
                    if (e[k]) {
                        var g = b.metaSep,
                            e = e[k],
                            l = b.metaPairSep,
                            h = [],
                            m = void 0;
                        for (m in e) e.hasOwnProperty(m) && h.push(m + "=" + e[m]);
                        e = h.join(l);
                        f += g + e
                    }
                    c.push(f)
                }
                return c.join(b.resourceSep)
            }

            function s(a) {
                var b = a[k] = a[k] || {};
                b[t] || (b[t] = c.ue_mid);
                b[u] || (b[u] = c.ue_sid);
                b[f] || (b[f] = c.ue_id);
                b.csm = 1;
                a = "//" + c.ue_furl + "/1/" + a[v] + "/1/OP/" + a[w] + "/" + a[x] + "/" + h([a], y);
                if (n) try {
                    n.call(d[p], a)
                } catch (g) {
                    c.ue.sbf = 1, (new Image).src = a
                } else(new Image).src =
                    a
            }

            function q() {
                g && g.isStub && g.replay(function(a, b, c) {
                    a = a[0];
                    b = a[k] = a[k] || {};
                    b[f] = b[f] || c;
                    s(a)
                });
                l.impression = s;
                g = null
            }
            if (!(1 < c.ueinit)) {
                var k = "metadata",
                    x = "impressionType",
                    v = "foresterChannel",
                    w = "programGroup",
                    t = "marketplaceId",
                    u = "session",
                    f = "requestId",
                    p = "navigator",
                    l = c.ue || {},
                    n = d[p] && d[p].sendBeacon,
                    r = function(a, b, c, d) {
                        return {
                            encode: d,
                            resourceSep: a,
                            metaSep: b,
                            metaPairSep: c
                        }
                    },
                    y = r("", "?", "&", function(a) {
                        return h(a.impressionData, z)
                    }),
                    z = r("/", ":", ",", function(a) {
                        return a.featureName + ":" + h(a.resources,
                            A)
                    }),
                    A = r(",", "@", "|", function(a) {
                        return a.id
                    }),
                    g = l.impression;
                n ? q() : (l.attach("load", q), l.attach("beforeunload", q));
                try {
                    d.P && d.P.register && d.P.register("impression-client", function() {})
                } catch (B) {
                    c.ueLogError(B, {
                        logLevel: "WARN"
                    })
                }
            }
        })(ue_csm, window);
    