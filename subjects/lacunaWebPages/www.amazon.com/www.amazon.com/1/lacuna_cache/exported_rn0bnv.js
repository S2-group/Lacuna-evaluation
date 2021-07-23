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

            (function(d) {
                document.createElement("header");

                function b(e) {
                    return [].slice.call(e)
                }

                function c(f, e) {
                    return {
                        m: f,
                        a: b(e)
                    }
                }
                var a = function(f) {
                    var g = {};
                    g._sourceName = f;
                    g._replay = [];
                    g.getNow = function(i, h) {lacuna_lazy_load("lacuna_cache/exported_rn0bnv.js[531:587]", functionData => eval(functionData))};

                    function e(i, h, j) {
                        i[j] = function() {
                            g._replay.push(h.concat(c(j, arguments)))
                        }
                    }
                    g.when = function() {
                        var i = [c("when", arguments)];
                        var h = {};
                        e(h, i, "run");
                        e(h, i, "declare");
                        e(h, i, "publish");
                        e(h, i, "build");
                        return h
                    };
                    e(g, [], "declare");
                    e(g, [], "build");
                    e(g, [], "publish");
                    e(g, [], "importEvent");
                    a._shims.push(g);
                    return g
                };
                a._shims = [];
                if (!d.$Nav) {
                    d.$Nav = a("rcx-nav")
                }
                if (!d.$Nav.make) {
                    d.$Nav.make = a
                }
            }(window));
            $Nav.importEvent('navbarJS-mobile');
            $Nav.declare('img.sprite', {
                'png32': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/new-nav-sm-smile-sprite-global-1x_blueheaven._CB496507362_.png',
                'png32-2x': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/new-nav-sm-smile-sprite-global-2x_blueheaven._CB496507362_.png'
            });
            window._navbarSpriteUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/new-nav-sm-smile-sprite-global-1x_blueheaven._CB496507362_.png';
            $Nav.declare('img.pixel', 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB386942464_.gif');
            var nav_t_after_preload_JS = +new Date();
        