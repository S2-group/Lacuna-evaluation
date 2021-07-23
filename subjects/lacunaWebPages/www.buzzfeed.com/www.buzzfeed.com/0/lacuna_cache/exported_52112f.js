
        if (typeof window.__cmp === 'undefined') {
            var count = 0;
            window.__cmp = function() {
                var arg = arguments;
                if (typeof window.__cmp.a != 'object') {
                    if (count < 10) {
                        setTimeout(function() {
                            window.__cmp.apply(window.__cmp, arg)
                        }, 400);
                        count++;
                    } else {
                        console.warn('CMP not loaded after 4 seconds');
                    }
                } else {
                    __cmp.a.push([].slice.apply(b));
                }
            }
        }
    