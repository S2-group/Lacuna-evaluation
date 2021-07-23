
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function() {
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/614ihxQDWpL._RC|11-BZEJ8lnL.js,61mMHVjNxeL.js,21Of0-9HPCL.js,01E8f3KV-NL.js,119KAWlHU6L.js,51xL2QLv4YL.js,11sT42sZnQL.js,016iHgpF74L.js,11aNYFFS5hL.js,116tgw9TSaL.js,211-p4GRUCL.js,01PoLXBDXWL.js,61QLTxLCkaL.js,31ro+1yon+L.js,11BOgvnnntL.js,31xbSVcI5iL.js,01qkmZhGmAL.js,01iyxuSGj4L.js,01oGoEUF1PL.js_.js?AUIClients/AmazonUI#mobile.180587-T1.218320-T1.192338-T1.202051-T1');
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/01mnPuiFP6L._RC|41qv5GZovXL.js,11zXHNWLloL.js_.js?AUIClients/GWMWebAssets');
        });
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('af').execute(function() {
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41%2BpHDk7UqL._RC|31HQ91DGsZL.js,2176veFB-2L.js_.js?AUIClients/QTipsMobileWebAssets#120926-T1.210725-T1.227546-T1');
        });
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function() {
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/01Gnofgg9qL.js?AUIClients/AFAPAboveNavAssets');
        });
        (function(c) {
            var d = window.AmazonUIPageJS || window.P,
                f = d._namespace || d.attributeErrors,
                a = f ? f("GWMCardHistory", "") : d;
            a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(null)
        })(function(c, d, f) {
            c.when("btfContent", "dataStoreUrl", "attribution").execute(function(a, f, l) {
                var e = document.getElementById("gwm-Deck-btf"),
                    b, h, g, k;
                b = a;
                if (a = !!(d.history && history.state && history.state.deck && history.state.deck.btf && "scrollTop" in history.state && history.state.cards)) b = history.state.deck.btf;
                e.innerHTML =
                    b;
                e = e.getElementsByTagName("script");
                for (b = 0; b < e.length; ++b) {
                    g = document.createElement("script");
                    k = e[b].attributes;
                    for (h = 0; h < k.length; ++h) attribute = k.item(h), attribute.specified && g.setAttribute(attribute.name, attribute.value);
                    g.innerHTML = e[b].innerHTML;
                    try {
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(g).parentNode.removeChild(g)
                    } catch (m) {
                        d.ueLogError && d.ueLogError(m, {
                            logLevel: "ERROR",
                            attribution: l,
                            message: "error thrown while executing " + e[b].innerHTML
                        })
                    }
                }
                a ? (c.declare("merch-data-store", {
                    html: "",
                    cardsData: history.state.cards
                }), d.scrollTo(0, history.state.scrollTop)) : c.when("fetch-merch-data-store").execute(function(a) {
                    a(f)
                });
                c.declare("cardHistoryReady", 1)
            });
            c.declare("gwm-history-asset-loaded", {})
        });
    