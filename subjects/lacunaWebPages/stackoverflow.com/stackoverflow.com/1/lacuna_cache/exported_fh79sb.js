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

    $('.js-scroll-link').on('click', function(e) {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[50:262]", functionData => eval(functionData))});

    
    var tourAutoplay = 3500;
    var tourItemActiveClass = ["is-active ", "bc-black-3 ", "bs-lg "];

    
    var tourTriggers = document.querySelectorAll('.js-tour-area');
    var tourIndex = 1;
    var tourAutoplayer;

    
    function tourInitAutoplay () {
        tourAutoplayer = setInterval(function() {
            
            tourTriggers[tourIndex].checked = true;

            
            for (var i=0; tourTriggers.length > i; i++) {
                var event;
                if(typeof(Event) === 'function') {
                    event = new Event('change');
                } else {
                    event = document.createEvent('Event');
                    event.initEvent('change', true, true);
                }

                tourTriggers[i].dispatchEvent(event);
            }

            
            if (tourIndex >= tourTriggers.length - 1) {
                tourIndex = 0;
            } else {
                tourIndex++;
            }
        }, tourAutoplay);
    }

    
    function tourKillAutoplay() {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[1311:1357]", functionData => eval(functionData))}

    
    tourInitAutoplay();

    
    for (var i=0; tourTriggers.length > i; i++) {
        
        tourTriggers[i].addEventListener('s-expandable-control:show', function (el) {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[1537:1670]", functionData => eval(functionData))}, false);

        
        tourTriggers[i].addEventListener('s-expandable-control:hide', function (el) {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[1774:1910]", functionData => eval(functionData))}, false);

        
        tourTriggers[i].addEventListener('click', function () {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[1992:2035]", functionData => eval(functionData))});

        tourTriggers[i].addEventListener('touchstart', function () {lacuna_lazy_load("lacuna_cache/exported_fh79sb.js[2106:2149]", functionData => eval(functionData))});
    }
