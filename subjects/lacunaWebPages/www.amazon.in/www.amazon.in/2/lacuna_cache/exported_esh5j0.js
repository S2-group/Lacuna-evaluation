
        ue_csm.ue.exec(function(e, d, a) {
            function b(a, b) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        return void 0 !== b | 0
                    }
                }
            }

            function h(a, b, c) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        return b === c | 0
                    }
                }
            }

            function g(a, b) {
                return {
                    name: a,
                    getFeatureValue: function() {
                        for (var a = 0; a < b.length; a++)
                            if (void 0 !== b[a]) return 1;
                        return 0
                    }
                }
            }
            var f = e.ue || {},
                c = [b("dall", d.all), b("dcm", d.compatMode), b("xhr", a.XMLHttpRequest), b("qs", d.querySelector), b("ael", d.addEventListener), b("atob", a.atob), g("pjs", [a.callPhantom, a._phantom, a.PhantomEmitter,
                    a.__phantomas
                ]), b("njs", a.Buffer), b("cjs", a.emit), b("rhn", a.spawn), b("sel", a.webdriver), g("chrm", [a.domAutomation, a.domAutomationController]), {
                    name: "plg",
                    getFeatureValue: function() {
                        return (void 0 !== a.navigator.plugins && 0 < a.navigator.plugins.length) | 0
                    }
                }];
            try {
                c.push(h("no", a.navigator.onLine, !1))
            } catch (k) {
                c.push({
                    name: "no",
                    getFeatureValue: function() {}
                })
            }
            f._bf = e.ue.exec(function() {
                for (var a = "", b = 0; b < c.length; b++) a += c[b].name + "_" + c[b].getFeatureValue() + "-";
                (e.ue || {})._bf = null;
                return a
            }, "ue.bf");
            f._bf.modules = c;
            f._bf.mpm = b
        }, "bf")(ue_csm, document, window);

        ue_csm.ue.exec(function(c, a) {
            function g(a) {
                a.run(function(e) {})
            }
            if (a.addEventListener)
                for (var d = c.ue || {}, f = [{
                        name: "touch-enabled",
                        run: function(b) {
                            var e = function() {},
                                c = function() {},
                                d = function() {};
                            a.addEventListener("touchstart", c, !0);
                            a.addEventListener("mousemove", d, !0)
                        }
                    }], b = 0; b < f.length; b++) g(f[b])
        }, "csm-features")(ue_csm, window);
    