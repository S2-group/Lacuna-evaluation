
        (function(c, d) {
            var b = c.ue,
                a = d.navigator;
            b && b.tag && a && (a = a.connection || a.mozConnection || a.webkitConnection) && a.type && b.tag("netInfo:" + a.type)
        })(ue_csm, window);
    