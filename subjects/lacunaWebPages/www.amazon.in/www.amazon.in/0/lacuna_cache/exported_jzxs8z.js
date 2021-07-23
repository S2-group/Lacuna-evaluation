
        (function(b) {
            function c() {
                var d = [];
                a.log && a.log.isStub && a.log.replay(function(a) {
                    e(d, a)
                });
                a.clog && a.clog.isStub && a.clog.replay(function(a) {
                    e(d, a)
                });
                d.length && (a._flhs += 1, n(d), p(d))
            }

            function g() {
                a.log && a.log.isStub && (a.onflush && a.onflush.replay && a.onflush.replay(function(a) {
                    a[0]()
                }), a.onunload && a.onunload.replay && a.onunload.replay(function(a) {
                    a[0]()
                }), c())
            }

            function e(d, b) {
                var c = b[1],
                    f = b[0],
                    e = {};
                a._lpn[c] = (a._lpn[c] || 0) + 1;
                e[c] = f;
                d.push(e)
            }

            function n(b) {
                q && (a._lpn.csm = (a._lpn.csm || 0) + 1, b.push({
                    csm: {
                        k: "chk",
                        f: a._flhs,
                        l: a._lpn,
                        s: "inln"
                    }
                }))
            }

            function p(a) {
                if (h) a = k(a), b.navigator.sendBeacon(l, a);
                else {
                    a = k(a);
                    var c = new b[f];
                    c.open("POST", l, !0);
                    c.setRequestHeader && c.setRequestHeader("Content-type", "text/plain");
                    c.send(a)
                }
            }

            function k(a) {
                return JSON.stringify({
                    rid: b.ue_id,
                    sid: b.ue_sid,
                    mid: b.ue_mid,
                    mkt: b.ue_mkt,
                    sn: b.ue_sn,
                    reqs: a
                })
            }
            var f = "XMLHttpRequest",
                q = 1 === b.ue_ddq,
                a = b.ue,
                r = b[f] && "withCredentials" in new b[f],
                h = b.navigator && b.navigator.sendBeacon,
                l = "//" + b.ue_furl + "/1/batch/1/OE/",
                m = b.ue_fci_ft || 5E3;
            a && (r || h) &&
                (a._flhs = a._flhs || 0, a._lpn = a._lpn || {}, a.attach && (a.attach("beforeunload", g), a.attach("pagehide", g)), m && b.setTimeout(c, m), a._ffci = c)
        })(window);
    