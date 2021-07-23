
        window.ue_ihe = (window.ue_ihe || 0) + 1;
        if (window.ue_ihe === 1) {
            (function(k, l, g) {
                function m(a) {
                    c || (c = b[a.type].id, "undefined" === typeof a.clientX ? (e = a.pageX, f = a.pageY) : (e = a.clientX, f = a.clientY), 2 != c || h && (h != e || n != f) ? (r(), d.isl && l.setTimeout(function() {
                        p("at", d.id)
                    }, 0)) : (h = e, n = f, c = 0))
                }

                function r() {
                    for (var a in b) b.hasOwnProperty(a) && d.detach(a, m, b[a].parent)
                }

                function s() {
                    for (var a in b) b.hasOwnProperty(a) && d.attach(a, m, b[a].parent)
                }

                function t() {
                    var a = "";
                    !q && c && (q = 1, a += "&ui=" + c);
                    return a
                }
                var d = k.ue,
                    p = k.uex,
                    q = 0,
                    c = 0,
                    h, n, e, f, b = {
                        click: {
                            id: 1,
                            parent: g
                        },
                        mousemove: {
                            id: 2,
                            parent: g
                        },
                        scroll: {
                            id: 3,
                            parent: l
                        },
                        keydown: {
                            id: 4,
                            parent: g
                        }
                    };
                d && p && (s(), d._ui = t)
            })(ue_csm, window, document);



            (function(l, d) {
                function c(b) {
                    b = "";
                    var c = a.isBFT ? "b" : "s",
                        d = "" + a.oid,
                        f = "" + a.lid,
                        g = d;
                    d != f && 20 == f.length && (c += "a", g += "-" + f);
                    a.tabid && (b = a.tabid + "+");
                    b += c + "-" + g;
                    b != e && 100 > b.length && (e = b, a.cookie ? a.cookie.updateCsmHit(m, b + ("|" + +new Date)) : document.cookie = "csm-hit=" + b + ("|" + +new Date) + n + "; path=/")
                }

                function p() {
                    e = 0
                }

                function h(b) {
                    !0 === d[a.pageViz.propHid] ? e = 0 : !1 === d[a.pageViz.propHid] && c({
                        type: "visible"
                    })
                }
                var n = "; expires=" + (new Date(+new Date + 6048E5)).toGMTString(),
                    m = "tb",
                    e, a = l.ue || {},
                    k = a.pageViz && a.pageViz.event &&
                    a.pageViz.propHid;
                a.attach && (a.attach("click", c), a.attach("keyup", c), k || (a.attach("focus", c), a.attach("blur", p)), k && (a.attach(a.pageViz.event, h, d), h({})));
                a.aftb = 1
            })(ue_csm, document);


            ue_csm.ue.stub(ue, "impression");


            ue.stub(ue, "trigger");



            if (window.ue && uet) {
                uet('bb');
            }

        }
    