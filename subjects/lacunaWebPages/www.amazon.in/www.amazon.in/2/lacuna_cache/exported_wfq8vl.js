
        (function(k, d, h) {
            function f(a, c, b) {}

            function g(a, c, b) {}

            function l(a, c, b, e) {}

            function e(a, c) {}

            function q() {}

            function n(a) {}

            function w() {}

            function x() {}

            function y() {}

            function z() {}

            function B() {}

            function r() {
                var a;
                a = d.location && d.location.protocol ? d.location.protocol : void 0;
                "https:" == a && (z(), w(), x(), y(), B(), p < C && setTimeout(r, D))
            }
            var s = "[CSM] Insecure content detected ",
                t = "[CSM] Ajax request to same page detected ",
                v = "WARN",
                m = {},
                p = 0,
                D = k.ue_nsip || 1E3,
                C = 5,
                A = 1 == k.ue_urt,
                u = !0;
            ue_csm.ue_disableNonSecure || (d.performance && d.performance.setResourceTimingBufferSize && d.performance.setResourceTimingBufferSize(300), r())
        })(ue_csm, window, document);
    