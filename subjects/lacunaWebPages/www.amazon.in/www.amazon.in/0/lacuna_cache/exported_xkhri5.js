
        (function(k, c) {
            function l(a, b) {
                return a.filter(function(a) {
                    return a.initiatorType == b
                })
            }

            function f(a, c) {
                if (b.t[a]) {
                    var g = b.t[a] - b._t0,
                        e = c.filter(function(a) {
                            return 0 !== a.responseEnd && m(a) < g
                        }),
                        f = l(e, "script"),
                        h = l(e, "link"),
                        k = l(e, "img"),
                        n = e.map(function(a) {
                            return a.name.split("/")[2]
                        }).filter(function(a, b, c) {
                            return a && c.lastIndexOf(a) == b
                        }),
                        q = e.filter(function(a) {
                            return a.duration < p
                        }),
                        s = g - Math.max.apply(null, e.map(m)) < r | 0;
                    "af" == a && (b._afjs = f.length);
                    return a + ":" + [e[d], f[d], h[d], k[d], n[d], q[d], s].join("-")
                }
            }

            function m(a) {
                return a.responseEnd - (b._t0 - c.timing.navigationStart)
            }

            function n() {
                var a = c[h]("resource"),
                    d = f("cf", a),
                    g = f("af", a),
                    a = f("ld", a);
                delete b._rt;
                b._ld = b.t.ld - b._t0;
                b._art && b._art();
                return [d, g, a].join("_")
            }
            var p = 20,
                r = 50,
                d = "length",
                b = k.ue,
                h = "getEntriesByType";
            b._rre = m;
            b._rt = c && c.timing && c[h] && n
        })(ue_csm, window.performance);
    