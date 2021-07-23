// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        ue_csm.ue.exec(function(b, e) {
            function q() {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[66:415]", functionData => eval(functionData))}

            function t() {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[442:481]", functionData => eval(functionData))}

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
                    d.trigger.replay(function(a) {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[1660:1724]", functionData => eval(functionData))})
            }

            function y() {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[1766:1829]", functionData => eval(functionData))}
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
                        send: function(a) {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[2544:2810]", functionData => eval(functionData))}
                    }
                }(),
                u = function() {
                    return {
                        send: function(a) {lacuna_lazy_load("lacuna_cache/exported_nqlmfc.js[2958:3033]", functionData => eval(functionData))}
                    }
                }();
            e.encodeURIComponent && (d.attach && (d.attach("beforeunload", y), d.attach("pagehide", y)), E(), d.trigger = v)
        }, "client-wbl-trg")(ue_csm, window);

        if (ue.trigger) {
            ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", "C");
        }
    