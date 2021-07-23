
        (function(k, l) {
            function K(a) {
                if (a) return a.replace(/^\s+|\s+$/g, "")
            }

            function A(a, d) {
                if (!a) return {};
                var c = "INFO" === d.logLevel;
                a.m && a.m[n] && (a = a.m);
                var b = d.m || d[n] || "",
                    b = a.m && a.m[n] ? b + a.m[n] : a.m && a.m.target && a.m.target.tagName ? b + ("Error handler invoked by " + a.m.target.tagName + " tag") : a.m ? b + a.m : a[n] ? b + a[n] : b + "Unknown error",
                    b = {
                        m: b,
                        name: a.name,
                        type: a.type,
                        csm: L + " " + (a.fromOnError ? "onerror" : "ueLogError")
                    },
                    e, g, f = 0;
                e = 0;
                var h;
                g = l.location;
                b[p] = d[p] || v;
                d.adb && (b.adb = d.adb);
                (e = d[r]) && (b[r] = "" + e);
                if (!c) {
                    b[B] =
                        d[B] || g && g.href || "missing";
                    b.f = a.f || a.sourceURL || a.fileName || a.filename || a.m && a.m.target && a.m.target.src;
                    b.l = a.l || a.line || a.lineno || a.lineNumber;
                    b.c = a.c ? "" + a.c : a.c;
                    b.s = [];
                    b.t = k.ue.d();
                    if ((c = a.stack || (a.err ? a.err.stack : "")) && c.split)
                        for (b.csm += " stack", e = c.split("\n"); f < e.length && b.s.length < C;)(c = e[f++]) && b.s.push(K(c));
                    else
                        for (b.csm += " callee", g = D(a.args || arguments, "callee"), e = f = 0; g && f < C;) h = y, g[t] || (c = g.toString()) && c.substr && (h = 0 === e ? 4 * y : h, h = 1 == e ? 2 * y : h, b.s.push(c.substr(0, h)), e++), g = D(g, "caller"),
                            f++;
                    !b.f && 0 < b.s.length && (f = b, c = (f || {}).s || [], e = c[1] || "", c = (c[0] || "").match(M) || e.match(N)) && (f.f = c[1], f.l = c[2])
                }
                return b
            }

            function D(a, d) {
                try {
                    return a[d]
                } catch (c) {}
            }

            function E(a, d) {
                if (a && !(q.ec > q.mxe)) {
                    q.ter.push(a);
                    d = d || {};
                    var c = a[p] || d[p];
                    d[p] = c;
                    d[r] = a[r] || d[r];
                    c && c !== v && c !== O && c !== P && c !== Q || k.ue_err.ec++;
                    c && c != v || q.ecf++;
                    z(a, d)
                }
            }

            function z(a, d) {
                if (a) {
                    for (var c = A(a, d), b = d.channel || R, e = (window.ue_err ? window.ue_err.errorHandlers : null) || [], g = 0; g < e.length; g++) "function" == typeof e[g].handler && e[g].handler(c);
                    if (ue.log.isStub && l[w] && l[w][x]) {
                        e = {};
                        e[b] = c;
                        try {
                            var f = l[w][x]({
                                    rid: ue.rid,
                                    sid: k.ue_sid,
                                    mid: k.ue_mid,
                                    sn: k.ue_sn,
                                    reqs: [e]
                                }),
                                h = l[S],
                                m;
                            if (m = !(h[F] && h[F](G, f))) {
                                var n;
                                if (l[H]) {
                                    var s = new l[H];
                                    s.onerror = u;
                                    s.ontimeout = u;
                                    s.onprogress = u;
                                    s.onload = u;
                                    s.timeout = 0;
                                    n = s
                                } else {
                                    var p;
                                    if (l[I]) {
                                        var r = new l[I];
                                        p = "withCredentials" in r ? r : void 0
                                    } else p = void 0;
                                    n = p
                                }
                                m = n
                            }
                            if (b = m) {
                                b.open("POST", G, !0);
                                if (b[J]) b[J]("Content-type", "text/plain");
                                b.send(f)
                            }
                        } catch (t) {}
                    } else k.ue.log(c, b, {
                        nb: 1
                    });
                    "function" === typeof q.elh && q.elh(a, d);
                    if (!a.fromOnError) {
                        f = l.console || {};
                        b = f.error || f.log || u;
                        h = l[w];
                        m = "Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
                        if (h && h[x]) try {
                            m += h[x](c)
                        } catch (v) {
                            m += "no info provided; converting to string failed"
                        } else m += c.m;
                        b.apply(f, [m, c])
                    }
                }
            }
            if (k.ue_err) {
                var I = "XMLHttpRequest",
                    H = "XDomainRequest",
                    S = "navigator",
                    F = "sendBeacon",
                    x = "stringify",
                    w = "JSON",
                    p = "logLevel",
                    r = "attribution",
                    B = "pageURL",
                    t = "skipTrace",
                    J = "setRequestHeader",
                    n = "message",
                    u = function() {},
                    G = "//" + k.ue_furl +
                    "/1/batch/1/OE/",
                    q = k.ue_err,
                    R = k.ue_err_chan || "jserr",
                    v = "FATAL",
                    O = "ERROR",
                    P = "WARN",
                    Q = "DOWNGRADED",
                    L = "v6",
                    C = 20,
                    y = 256,
                    N = RegExp(" (?([^ s]*):( d+): d+ )?".split(" ").join(String.fromCharCode(92))),
                    M = /.*@(.*):(\d*)/;
                A[t] = 1;
                E[t] = 1;
                z[t] = 1;
                (function() {
                    for (var a, d = 0; d < (q.erl || []).length; d++) a = q.erl[d], z(a.ex, a.info);
                    q.erl = []
                })();
                k.ueLogError = E
            }
        })(ue_csm, window);
    