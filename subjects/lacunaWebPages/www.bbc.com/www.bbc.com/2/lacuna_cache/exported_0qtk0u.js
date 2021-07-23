
        window.bbcFlagpoles_istats = "ON", require.config({
            paths: {
                "istats-1": "https://nav.files.bbci.co.uk/orbit-webmodules/0.0.1-332.8fd22d2/istats/istats-1"
            }
        }), require(["istats-1", "orb/cookies"], function(t, a) {
            if (a.isAllowed("s1")) {
                var e = (o = document.location.href.match(/^(?:https|http):\/\/\w*\.(?:(int|test|stage|live|)\.)?bbc\.(?:co\.uk|com)/)) ? void 0 === o[1] || "" === o[1] || "live" === o[1] ? "//sa.bbc.co.uk/bbc/bbc/s" : "//sa.bbc.co.uk/bbc/" + o[1] + "/s" : "//sa.bbc.co.uk/bbc/test/s";
                t.addCollector({
                    name: "default",
                    url: e,
                    separator: "&"
                });
                var s = "unknown";
                t.setCountername(s), window.istats_countername && t.setCountername(window.istats_countername), t.addLabels("ml_name=webmodule&ml_version=0.0.1-332.8fd22d2&blq_e=orbit&blq_r=orbit&blq_s=orbit&blq_v=default&language=en")
            }
            var o
        });
    