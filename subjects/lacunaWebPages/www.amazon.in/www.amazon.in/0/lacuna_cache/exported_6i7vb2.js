
        ue_csm.ue.exec(function(b, e) {
            function q() {
                for (var a = 0; a < f.length; a++) a: for (var d = r.replace(A, f[a]) + g[f[a]] + s, c = arguments, b = 0; b < c.length; b++) try {
                    c[b].send(d);
                    break a
                } catch (e) {}
                g = {};
                f = [];
                m = 0;
                k = n
            }

            function t() {
                q(B, u)
            }

            function v(a, l, c) {
                p++;
                if (p > w) d.count && 1 == p - w && (d.count("WeblabTriggerThresholdReached", 1), b.ue_int && console.error("Number of max call reached. Data will no longer be send"));
                else {
                    var h = c || {};
                    h && -1 < h.constructor.toString().indexOf(C) && a && -1 < a.constructor.toString().indexOf(x) && l && -1 < l.constructor.toString().indexOf(x) ?
                        (h = b.ue_id, c && c.rid && (h = c.rid), c = h, a = encodeURIComponent(",wl=" + a + "/" + l), 2E3 > a.length + n ? (2E3 < k + a.length && t(), void 0 === g[c] && (g[c] = "", f.push(c)), g[c] += a, k += a.length, m || (m = e.setTimeout(t, D))) : b.ue_int && console.error("Invalid API call. The input provided is over 2000 chars.")) : d.count && (d.count("WeblabTriggerImproperAPICall", 1), b.ue_int && console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))
                }
            }

            function E() {
                d.trigger && d.trigger.isStub &&
                    d.trigger.replay(function(a) {
                        v.apply(this, a)
                    })
            }

            function y() {
                z || (f.length && q(u), z = !0)
            }
            var s = ":1234",
                r = "//" + b.ue_furl + "/1/remote-weblab-triggers/1/OE/" + b.ue_mid + ":" + b.ue_sid + ":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",
                A = "PLCHLDR_RID",
                D = b.wtt || 1E4,
                n = r.length + s.length,
                w = b.mwtc || 2E3,
                F = e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest,
                x = "String",
                C = "Object",
                d = b.ue,
                g = {},
                f = [],
                k = n,
                m, z = !1,
                p = 0,
                B = function() {
                    return {
                        send: function(a) {
                            if (F) {
                                var b = new e.XMLHttpRequest;
                                b.open("GET", a, !0);
                                b.send()
                            } else throw "";
                        }
                    }
                }(),
                u = function() {
                    return {
                        send: function(a) {
                            (new Image).src = a
                        }
                    }
                }();
            e.encodeURIComponent && (d.attach && (d.attach("beforeunload", y), d.attach("pagehide", y)), E(), d.trigger = v)
        }, "client-wbl-trg")(ue_csm, window);

        if (ue.trigger) {
            ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", "C");
        }
    