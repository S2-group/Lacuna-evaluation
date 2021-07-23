
    $('.js-scroll-link').on('click', function(e) {});

    
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

    
    function tourKillAutoplay() {}

    
    tourInitAutoplay();

    
    for (var i=0; tourTriggers.length > i; i++) {
        
        tourTriggers[i].addEventListener('s-expandable-control:show', function (el) {}, false);

        
        tourTriggers[i].addEventListener('s-expandable-control:hide', function (el) {}, false);

        
        tourTriggers[i].addEventListener('click', function () {});

        tourTriggers[i].addEventListener('touchstart', function () {});
    }
