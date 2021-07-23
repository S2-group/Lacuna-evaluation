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

        require(["istats-1", "orb/cookies"], function(o, t) {
            if (t.isAllowed("s1")) try {
                if (!require.s.contexts._.config.paths.idcta) return void i();
                require(["idcta/idcta-1"], function(t) {
                    t && "function" == typeof t.getIStatsLabels && o.addLabels(t.getIStatsLabels()), i()
                }, function(t) {lacuna_lazy_load("lacuna_cache/exported_km1pl0.js[376:423]", functionData => eval(functionData))})
            } catch (t) {
                console && "function" == typeof console.log && console.log("an exception occurred while adding idcta labels to istats, invoking istats without them", t), i()
            }

            function i() {
                o.invoke()
            }
        });
    