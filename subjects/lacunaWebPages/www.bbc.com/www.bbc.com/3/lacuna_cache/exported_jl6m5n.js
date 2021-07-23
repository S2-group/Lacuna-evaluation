
        require(["istats-1", "orb/cookies"], function(o, t) {
            if (t.isAllowed("s1")) try {
                if (!require.s.contexts._.config.paths.idcta) return void i();
                require(["idcta/idcta-1"], function(t) {
                    t && "function" == typeof t.getIStatsLabels && o.addLabels(t.getIStatsLabels()), i()
                }, null)
            } catch (t) {
                console && "function" == typeof console.log && console.log("an exception occurred while adding idcta labels to istats, invoking istats without them", t), i()
            }

            function i() {
                o.invoke()
            }
        });
    