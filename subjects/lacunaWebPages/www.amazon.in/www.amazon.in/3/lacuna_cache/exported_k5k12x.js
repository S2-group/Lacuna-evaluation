
        ue_csm.ue.exec(function(e, f) {
            var a = e.ue || {},
                b = a._wlo,
                d;
            if (a.ssw) {
                d = a.ssw("CSM_previousURL").val;
                var c = f.location,
                    b = b ? b : c && c.href ? c.href.split("#")[0] : void 0;
                c = (b || "") === a.ssw("CSM_previousURL").val;
                !c && b && a.ssw("CSM_previousURL", b);
                d = c ? "reload" : d ? "intrapage-transition" : "first-view"
            } else d = "unknown";
            a._nt = d
        }, "NavTypeModule")(ue_csm, window);
    