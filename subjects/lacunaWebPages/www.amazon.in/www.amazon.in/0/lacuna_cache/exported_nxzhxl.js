
        (function(g, h) {
            function d(a, d) {
                var b = {};
                if (!e || !f) try {
                    var c = h.sessionStorage;
                    c ? a && ("undefined" !== typeof d ? c.setItem(a, d) : b.val = c.getItem(a)) : f = 1
                } catch (g) {
                    e = 1
                }
                e && (b.e = 1);
                return b
            }
            var b = g.ue || {},
                a = "",
                f, e, c, a = d("csmtid");
            f ? a = "NA" : a.e ? a = "ET" : (a = a.val, a || (a = b.oid || "NI", d("csmtid", a)), c = d(b.oid), c.e || (c.val = c.val || 0, d(b.oid, c.val + 1)), b.ssw = d);
            b.tabid = a
        })(ue_csm, window);
    