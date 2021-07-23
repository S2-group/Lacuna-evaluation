
        var ue_mbl = ue_csm.ue.exec(function(e, a) {
            function l(f) {
                b = f || {};
                a.AMZNPerformance = b;
                b.transition = b.transition || {};
                b.timing = b.timing || {};
                e.ue.exec(m, "csm-android-check")() && b.tags instanceof Array && (f = -1 != b.tags.indexOf("usesAppStartTime") || b.transition.type ? !b.transition.type && -1 < b.tags.indexOf("usesAppStartTime") ? "warm-start" : void 0 : "view-transition", f && (b.transition.type = f));
                "reload" === c._nt && e.ue_orct || "intrapage-transition" === c._nt ? a.performance && performance.timing && performance.timing.navigationStart ?
                    b.timing.transitionStart = a.performance.timing.navigationStart : delete b.timing.transitionStart : "undefined" === typeof c._nt && a.performance && performance.timing && performance.timing.navigationStart && a.history && "function" === typeof a.History && "object" === typeof a.history && history.length && 1 != history.length && (b.timing.transitionStart = a.performance.timing.navigationStart);
                f = b.transition;
                var d;
                d = c._nt ? c._nt : void 0;
                f.subType = d;
                a.ue && a.ue.tag && a.ue.tag("has-AMZNPerformance");
                c.isl && a.uex && uex("at", "csm-timing");
                n()
            }

            function p(b) {
                a.ue && a.ue.count && a.ue.count("csm-cordova-plugin-failed", 1)
            }

            function m() {
                return a.webclient && "function" === typeof a.webclient.getRealClickTime ? a.cordova && a.cordova.platformId && "ios" == a.cordova.platformId ? !1 : !0 : !1
            }

            function n() {
                try {
                    P.register("AMZNPerformance", function() {
                        return b
                    })
                } catch (a) {}
            }

            function h() {
                if (!b) return "";
                ue_mbl.cnt = null;
                for (var a = b.timing, d = b.transition, a = ["mts", k(a.transitionStart), "mps", k(a.processStart), "mtt", d.type, "mtst", d.subType, "mtlt", d.launchType], d = "", c = 0; c <
                    a.length; c += 2) {
                    var e = a[c],
                        g = a[c + 1];
                    "undefined" !== typeof g && (d += "&" + e + "=" + g)
                }
                return d
            }

            function k(a) {
                if ("undefined" !== typeof a && "undefined" !== typeof g) return a - g
            }

            function q(a, c) {
                b && (g = c, b.timing.transitionStart = a, b.transition.type = "view-transition", b.transition.subType = "ajax-transition", b.transition.launchType = "normal", ue_mbl.cnt = h)
            }
            var c = e.ue || {},
                g = e.ue_t0,
                b;
            if (a.P && a.P.when && a.P.register) return a.P.when("CSMPlugin").execute(function(a) {
                a.buildAMZNPerformance && a.buildAMZNPerformance({
                    successCallback: l,
                    failCallback: p
                })
            }), {
                cnt: h,
                ajax: q
            }
        }, "mobile-timing")(ue_csm, window);
    