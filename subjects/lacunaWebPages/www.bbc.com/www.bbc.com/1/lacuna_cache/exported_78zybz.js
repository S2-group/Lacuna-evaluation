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

        /*<![CDATA[*/
        var bbcdotcom = {
            adverts: {
                keyValues: {
                    set: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[137:139]", functionData => eval(functionData))}
                }
            },
            advert: {
                write: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[229:231]", functionData => eval(functionData))},
                show: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[266:268]", functionData => eval(functionData))},
                isActive: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[307:360]", functionData => eval(functionData))},
                layout: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[397:512]", functionData => eval(functionData))}
            },
            config: {
                init: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[583:585]", functionData => eval(functionData))},
                isActive: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[624:626]", functionData => eval(functionData))},
                setSections: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[668:670]", functionData => eval(functionData))},
                isAdsEnabled: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[713:715]", functionData => eval(functionData))},
                setAdsEnabled: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[759:761]", functionData => eval(functionData))},
                isAnalyticsEnabled: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[810:812]", functionData => eval(functionData))},
                setAnalyticsEnabled: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[862:864]", functionData => eval(functionData))},
                setAssetPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[909:911]", functionData => eval(functionData))},
                setFlagpoles: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[954:956]", functionData => eval(functionData))},
                setVersion: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[997:999]", functionData => eval(functionData))},
                setJsPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1041:1043]", functionData => eval(functionData))},
                setSwfPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1086:1088]", functionData => eval(functionData))},
                setCssPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1131:1133]", functionData => eval(functionData))},
                setConfig: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1173:1175]", functionData => eval(functionData))},
                getAssetPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1220:1222]", functionData => eval(functionData))},
                getJsPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1264:1266]", functionData => eval(functionData))},
                getSwfPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1309:1311]", functionData => eval(functionData))},
                getCssPrefix: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1354:1356]", functionData => eval(functionData))},
                isOptimizelyEnabled: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1406:1408]", functionData => eval(functionData))}
            },
            survey: {
                init: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1479:1532]", functionData => eval(functionData))}
            },
            data: {},
            init: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1599:1601]", functionData => eval(functionData))},
            objects: function(str) {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1638:1683]", functionData => eval(functionData))},
            locale: {
                set: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1739:1741]", functionData => eval(functionData))},
                get: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1775:1777]", functionData => eval(functionData))}
            },
            setAdKeyValue: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1831:1833]", functionData => eval(functionData))},
            utils: {
                addEvent: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1893:1895]", functionData => eval(functionData))},
                addHtmlTagClass: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1941:1943]", functionData => eval(functionData))},
                log: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[1977:1979]", functionData => eval(functionData))}
            },
            addLoadEvent: function() {lacuna_lazy_load("lacuna_cache/exported_78zybz.js[2032:2034]", functionData => eval(functionData))}
        }; /*]]>*/
    