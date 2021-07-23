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

        var $trigger = $('.js-footer-category-trigger'),
            $footer = $('.js-footer'),
            $back = $('.js-footer-back'),
            $cols = $('.js-footer-col');

        function setCategory(target) {lacuna_lazy_load("lacuna_cache/exported_qjty1j.js[218:420]", functionData => eval(functionData))}

        $trigger.on('click', function(e) {lacuna_lazy_load("lacuna_cache/exported_qjty1j.js[463:728]", functionData => eval(functionData))});

        $back.on('click', function(e) {lacuna_lazy_load("lacuna_cache/exported_qjty1j.js[770:950]", functionData => eval(functionData))});
    