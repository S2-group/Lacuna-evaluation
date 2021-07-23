
        var ue_mbl = ue_csm.ue.exec(function(e, a) {
            

            

            

            

            function h() {
                if (!b) return "";
                ue_mbl.cnt = null;
                for (var a = b.timing, d = b.transition, a = ["mts", k(a.transitionStart), "mps", k(a.processStart), "mtt", d.type, "mtst", d.subType, "mtlt", d.launchType], d = "", c = 0; c <
                    a.length; c += 2) {
                    var e = a[c],
                        g = a[c + 1];
                    "undefined" !== typeof g && (d += "&" + e + "=" + g)
                }
                return d
            }

            

            
            var c = e.ue || {},
                g = e.ue_t0,
                b;
            if (a.P && a.P.when && a.P.register) return a.P.when("CSMPlugin").execute(null), {
                cnt: h,
                ajax: q
            }
        }, "mobile-timing")(ue_csm, window);
    