
        (function(e, c) {
            function h(b, a) {
                f.push([b, a])
            }

            function g(b, a) {
                if (b) {
                    var c = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                        d = e.createElement("script");
                    d.async = "async";
                    d.src = b;
                    d.setAttribute("crossorigin", "anonymous");
                    a && a.onerror && (d.onerror = a.onerror);
                    a && a.onload && (d.onload = a.onload);
                    c.insertBefore(d, c.firstChild)
                }
            }

            function k() {
                ue.uels = g;
                for (var b = 0; b < f.length; b++) {
                    var a = f[b];
                    g(a[0], a[1])
                }
                ue.deffered = 1
            }
            var f = [];
            c.ue && (ue.uels = h, c.ue.attach && c.ue.attach("load", k))
        })(document, window);
    