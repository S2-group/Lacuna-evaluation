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
            var lazyContentLoader = function() {

                var LAZY_LOAD_ATTRIBUTE_NAME = "data-lazy-content";
                var LAZY_IMAGE_ATTRIBUTE_NAME = "data-lazy-image";

                var LAZY_TYPE_ANIMATION = "animation";
                var LAZY_TYPE_BG_IMAGE = "bg-image";
                var LAZY_TYPE_IMAGE = "image";
                var LAZY_TYPE_VIDEO = "video";

                var init = function() {
                    (function() {
                        var windowHeight = window.innerHeight;

                        window.lazyContent = {
                            version: '1.0.0',
                            items: [],
                            loadThresholdBottom: 200,
                            checkInterval: 200,
                            status: {
                                playing: 'PLAYING'
                            }
                        };

                        var _addEventHandlers = function() {
                            window.addEventListener('scroll', _checkPosition);
                            window.addEventListener('resize', _checkPosition);
                        };

                        var _removeEventHandlers = function() {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[1240:1399]", functionData => eval(functionData))};

                        var _clearWillChange = function(e) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[1461:1548]", functionData => eval(functionData))};

                        var _canLoadItem = function(lazyItem) {
                            return lazyItem &&
                                lazyItem.offsetParent !== null &&
                                lazyItem.getBoundingClientRect().top - windowHeight <= lazyContent.loadThresholdBottom;
                        };

                        var _stringToFunctionPath = function(functionString) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[1953:2818]", functionData => eval(functionData))};

                        var _callCallback = function(callback, callbackAfter) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[2899:3933]", functionData => eval(functionData))};

                        var _lazyLoadImageLoadHandler = function(lazyItem, callback, callbackAfter) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[4036:5495]", functionData => eval(functionData))}

                        var _updateLazyLoadAttr = function(item, type) {
                            var contentTypes = item.getAttribute(LAZY_LOAD_ATTRIBUTE_NAME);
                            if (contentTypes) {
                                contentTypes = contentTypes.split(',');
                                var index = contentTypes.indexOf(type);

                                if (index !== -1) {
                                    contentTypes.splice(index, 1);
                                }

                                if (contentTypes.length === 0) {
                                    item.removeAttribute(LAZY_LOAD_ATTRIBUTE_NAME);
                                } else {
                                    item.setAttribute(LAZY_LOAD_ATTRIBUTE_NAME, contentTypes.join(','));
                                }
                            }
                        }

                        var _parseImgSettings = function(lazyItem) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[6462:7048]", functionData => eval(functionData))}

                        var _loadAnimation = function(anim) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[7110:8298]", functionData => eval(functionData))};

                        var _loadBgImage = function(lazyItem) {
                            if (lazyItem.hasAttribute(LAZY_IMAGE_ATTRIBUTE_NAME)) { // older method, set inline style
                                var settingJson = _parseImgSettings(lazyItem);
                                var source = settingJson.src || settingJson.source;
                                if (source) {
                                    var image = new Image();

                                    function imageLoadHandler() {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[8818:9261]", functionData => eval(functionData))}

                                    image.onload = imageLoadHandler;
                                    image.src = source;
                                }
                            } else if (!lazyItem.classList.contains('apply-bg')) { // must be newer method with style tag. Add apply-bg class.
                                lazyItem.classList.add('apply-bg');
                            }
                            _updateLazyLoadAttr(lazyItem, LAZY_TYPE_BG_IMAGE);
                        }

                        var _loadImage = function(lazyItem) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[9829:10756]", functionData => eval(functionData))}

                        var _loadVideo = function(lazyItem) {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[10818:12072]", functionData => eval(functionData))};

                        var _checkPosition = function(keepInterval) {
                            lazyContent.items = window.document.querySelectorAll('[data-lazy-content]');

                            if (keepInterval.type && keepInterval.type === 'scroll' && lazyContent.checkInterval) {
                                clearInterval(lazyContent.checkInterval);
                                lazyContent.checkInterval = null;
                            }

                            var count = lazyContent.items && lazyContent.items.length || 0;

                            for (var x = 0; x < count; x++) {
                                var lazyItem = lazyContent.items[x];
                                if (_canLoadItem(lazyItem)) {
                                    var type = lazyItem.getAttribute('data-lazy-content').split(',')[0];


                                    if (lazyItem.tagName === 'IMG' && type === LAZY_TYPE_BG_IMAGE) {
                                        type = LAZY_TYPE_IMAGE;
                                    }

                                    switch (type) {
                                        case LAZY_TYPE_ANIMATION:
                                            _loadAnimation(lazyItem);
                                            break;
                                        case LAZY_TYPE_BG_IMAGE:
                                            _loadBgImage(lazyItem);
                                            break;
                                        case LAZY_TYPE_IMAGE:
                                            _loadImage(lazyItem);
                                            break;
                                        case LAZY_TYPE_VIDEO:
                                            _loadVideo(lazyItem);
                                            break;
                                    }

                                }
                            }
                        };

                        var _initialize = function() {
                            _addEventHandlers();
                            lazyContent.checkInterval =
                                setInterval(function() {
                                    _checkPosition(true);
                                }, window.lazyContent.checkInterval);
                        };

                        _initialize();

                        /* Public Methods */
                        lazyContent.check = function() {lacuna_lazy_load("lacuna_cache/exported_2ig77c.js[14560:14633]", functionData => eval(functionData))};
                    })();
                }

                return {
                    init: init
                }
            }

            lazyContentLoader().init();

            window.cms = window.cms || {};
            window.cms.plugins = window.cms.plugins || {};
            window.cms.plugins.lazyContentLoader = lazyContentLoader;
        })();
    