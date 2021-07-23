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

        (function(c, d) {
            function h(a, b) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[56:716]", functionData => eval(functionData))}

            function s(a) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[744:1270]", functionData => eval(functionData))}

            function q() {
                g && g.isStub && g.replay(function(a, b, c) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[1359:1514]", functionData => eval(functionData))});
                l.impression = s;
                g = null
            }
            if (!(1 < c.ueinit)) {
                var k = "metadata",
                    x = "impressionType",
                    v = "foresterChannel",
                    w = "programGroup",
                    t = "marketplaceId",
                    u = "session",
                    f = "requestId",
                    p = "navigator",
                    l = c.ue || {},
                    n = d[p] && d[p].sendBeacon,
                    r = function(a, b, c, d) {
                        return {
                            encode: d,
                            resourceSep: a,
                            metaSep: b,
                            metaPairSep: c
                        }
                    },
                    y = r("", "?", "&", function(a) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[2368:2445]", functionData => eval(functionData))}),
                    z = r("/", ":", ",", function(a) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[2501:2623]", functionData => eval(functionData))}),
                    A = r(",", "@", "|", function(a) {lacuna_lazy_load("lacuna_cache/exported_6fpemi.js[2679:2738]", functionData => eval(functionData))}),
                    g = l.impression;
                n ? q() : (l.attach("load", q), l.attach("beforeunload", q));
                try {
                    d.P && d.P.register && d.P.register("impression-client", function() {})
                } catch (B) {
                    c.ueLogError(B, {
                        logLevel: "WARN"
                    })
                }
            }
        })(ue_csm, window);
    