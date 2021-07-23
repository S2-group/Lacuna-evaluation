
        ue_csm.ue.exec(function(g, e) {
            if (e.ue_err) {
                var f = "";
                e.ue_err.errorHandlers || (e.ue_err.errorHandlers = []);
                e.ue_err.errorHandlers.push({
                    name: "fctx",
                    handler: function(a) {
                        if (!a.logLevel || "FATAL" === a.logLevel)
                            if (f = g.getElementsByTagName("html")[0].innerHTML) {
                                var b = f.indexOf("var ue_t0=ue_t0||+new Date();");
                                if (-1 !== b) {
                                    var b = f.substr(0, b).split(String.fromCharCode(10)),
                                        d = Math.max(b.length - 10 - 1, 0),
                                        b = b.slice(d, b.length - 1);
                                    a.fcsmln = d + b.length + 1;
                                    a.cinfo = a.cinfo || {};
                                    for (var c = 0; c < b.length; c++) a.cinfo[d + c + 1 + ""] =
                                        b[c]
                                }
                                b = f.split(String.fromCharCode(10));
                                a.cinfo = a.cinfo || {};
                                if (!(a.f || void 0 === a.l || a.l in a.cinfo))
                                    for (c = +a.l - 1, d = Math.max(c - 5, 0), c = Math.min(c + 5, b.length - 1); d <= c; d++) a.cinfo[d + 1 + ""] = b[d]
                            }
                    }
                })
            }
        }, "fatals-context")(document, window);
    