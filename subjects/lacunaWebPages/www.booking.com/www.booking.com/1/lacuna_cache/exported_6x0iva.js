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

        (function() {
            var done = function() {
                document.documentElement.className = document.documentElement.className.replace(/\bcss-is-loading\b/, '');
            };
            var countdown = 0;
            Array.prototype.forEach.call(document.getElementsByTagName('link'), function(link) {
                if (link.hasAttribute('data-async') && (link.rel === 'stylesheet' && link.media === 'none' || link.rel === 'preload' && link.as === 'style')) {
                    countdown++;
                    link.addEventListener('load', function onLoad() {lacuna_lazy_load("lacuna_cache/exported_6x0iva.js[586:821]", functionData => eval(functionData))});
                }
            });
            if (countdown === 0) {
                done();
            }
        }());
    