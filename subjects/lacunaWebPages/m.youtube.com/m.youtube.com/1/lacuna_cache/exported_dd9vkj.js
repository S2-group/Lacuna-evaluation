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

        var ytcsi = {
            gt: function(n) {
                n = (n || '') + 'data_';
                return ytcsi[n] || (ytcsi[n] = {
                    tick: {},
                    info: {}
                });
            },
            now: (window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart) ? function() {
                return window.performance.timing.navigationStart + window.performance.now();
            } : function() {lacuna_lazy_load("lacuna_cache/exported_dd9vkj.js[510:572]", functionData => eval(functionData))},
            tick: function(l, t, n) {
                ticks = ytcsi.gt(n).tick;
                var v = t || ytcsi.now();
                if (ticks[l]) {
                    ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);
                    ticks['_' + l].push(v);
                }
                ticks[l] = v;
            },
            info: function(k, v, n) {
                ytcsi.gt(n).info[k] = v;
            },
            setStart: function(s, t, n) {
                ytcsi.info('yt_sts', s, n);
                ytcsi.tick('_start', t, n);
            }
        };
        (function(w, d) {
            ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);
            var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';
            var vName = (!d.visibilityState && d.webkitVisibilityState) ? 'webkitvisibilitychange' : 'visibilitychange';
            if (isPrerender) {
                ytcsi.info('prerender', 1);
                var startTick = function() {lacuna_lazy_load("lacuna_cache/exported_dd9vkj.js[1605:1728]", functionData => eval(functionData))};
                d.addEventListener(vName, startTick, false);
            }
            if (d.addEventListener) {
                d.addEventListener(vName, function() {lacuna_lazy_load("lacuna_cache/exported_dd9vkj.js[1896:1953]", functionData => eval(functionData))}, false);
            }
            var slt = function(el, t) {lacuna_lazy_load("lacuna_cache/exported_dd9vkj.js[2015:2261]", functionData => eval(functionData))};
            w.__ytRIL = function(el) {lacuna_lazy_load("lacuna_cache/exported_dd9vkj.js[2300:2655]", functionData => eval(functionData))};
        })(window, document);
    