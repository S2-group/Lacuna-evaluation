
        (function(c) {
            var d = window.AmazonUIPageJS || window.P,
                f = d._namespace || d.attributeErrors,
                a = f ? f("GWMCardHistory", "") : d;
            a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {})
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
    