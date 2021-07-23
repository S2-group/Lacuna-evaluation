
        (function(c, d) {
            function h(a, b) {}

            function s(a) {}

            function q() {
                g && g.isStub && g.replay(function(a, b, c) {});
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
                    y = r("", "?", "&", function(a) {}),
                    z = r("/", ":", ",", function(a) {}),
                    A = r(",", "@", "|", function(a) {}),
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
    