
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
            } : function() {},
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
                var startTick = function() {};
                d.addEventListener(vName, startTick, false);
            }
            if (d.addEventListener) {
                d.addEventListener(vName, function() {}, false);
            }
            var slt = function(el, t) {};
            w.__ytRIL = function(el) {};
        })(window, document);
    