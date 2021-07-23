
        ue_csm.ue.exec(function(w, a) {
            function q() {
                if (d && f) {
                    var a;
                    a: {
                        try {
                            a = d.getItem(g);
                            break a
                        } catch (c) {}
                        a = void 0
                    }
                    if (a) return b = a, !0
                }
                return !1
            }

            function r() {}

            function s() {
                b = 1 === a.ue_adb_chk ? l : h;
                k();
                if (f) try {
                    d.setItem(g, b)
                } catch (c) {}
            }

            function m() {
                a.ue_adb_rtla && c && 0 < c.ec && !1 === n && (c.elh = null, ueLogError({
                    m: "Hit Info",
                    fromOnError: 1
                }, {
                    logLevel: "INFO",
                    adb: b
                }), n = !0)
            }

            function k() {
                e.tag(b);
                e.isl && a.uex && uex("at", b);
                p && p.updateCsmHit("adb", b);
                c && 0 < c.ec ? m() : a.ue_adb_rtla && c &&
                    (c.elh = m)
            }

            function t() {}
            if (a.ue_adb) {
                a.ue_fadb = a.ue_fadb || 10;
                var e = a.ue,
                    h = "adblk_yes",
                    l = "adblk_no",
                    b = "adblk_unk",
                    d;
                a: {
                    try {
                        d = a.localStorage;
                        break a
                    } catch (x) {}
                    d = void 0
                }
                var g = "csm:adb",
                    c = a.ue_err,
                    p = e.cookie,
                    f = void 0 !== a.localStorage,
                    u = Math.random() > 1 - 1 / a.ue_fadb,
                    n = !1,
                    v = q();
                u || !v ? e.uels("https://m.media-amazon.com/images/G/01/csm/showads.v2.js", {
                    onerror: r,
                    onload: s
                }) : k();
                a.ue_isAdb = t;
                a.ue_isAdb.unk = "adblk_unk";
                a.ue_isAdb.no = l;
                a.ue_isAdb.yes = h
            }
        }, "adb")(document, window);
    