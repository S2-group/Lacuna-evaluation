
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

                        var _removeEventHandlers = function() {
                            window.removeEventListener('scroll');
                            window.removeEventListener('resize');
                        };

                        var _clearWillChange = function(e) {
                            e.target.style.willChange = '';
                        };

                        var _canLoadItem = function(lazyItem) {
                            return lazyItem &&
                                lazyItem.offsetParent !== null &&
                                lazyItem.getBoundingClientRect().top - windowHeight <= lazyContent.loadThresholdBottom;
                        };

                        var _stringToFunctionPath = function(functionString) {
                            var context = window;
                            var namespaces = functionString.split('.');
                            var target = namespaces.pop();
                            var found = true;
                            for (var i = 0, length = namespaces.length; i < length; i++) {
                                if (typeof context[namespaces[i]] !== 'undefined') {
                                    context = context[namespaces[i]];
                                } else {
                                    found = false;
                                }
                            }
                            if (found) {
                                return context[target];
                            } else {
                                return null;
                            }
                        };

                        var _callCallback = function(callback, callbackAfter) {
                            if (typeof callback === 'string') {
                                var parameters = callback.split(',');
                                var targetFunction = parameters.shift();
                                targetFunction = _stringToFunctionPath(targetFunction);

                                try {
                                    if (typeof parameters !== 'undefined' && parameters.length >= 1) {
                                        targetFunction.apply(null, parameters);
                                    } else {
                                        targetFunction.call(null);
                                    }
                                    if (callbackAfter) {
                                        _callCallback(callbackAfter);
                                    }
                                } catch (error) {
                                    //just catch, do nothing
                                }
                            }
                        };

                        var _lazyLoadImageLoadHandler = function(lazyItem, callback, callbackAfter) {
                            if (callback) {
                                _callCallback(callback, callbackAfter);
                            }

                            var lazyGroup = lazyItem.getAttribute('data-lazy-image-samesize-group');
                            if (lazyGroup) {

                                if (lazyGroup === 'closest') {
                                    var closestItem = lazyItem.closest('[data-same-size]');
                                    lazyGroup = JSON.parse(closestItem.getAttribute('data-same-size')).group;
                                }

                                if (lazyGroup === 'recursive') {
                                    var parentItem = lazyItem.closest('[data-same-size]');
                                    var maxCalculations = 5;
                                    while (parentItem && maxCalculations-- > 0) {
                                        var parentLazyGroup = JSON.parse(parentItem.getAttribute('data-same-size')).group;
                                        window.sameSize.sameSizeGroup(parentLazyGroup);
                                        parentItem = parentItem.parentElement.closest('[data-same-size]');
                                    }
                                    return;
                                }

                                window.sameSize.sameSizeGroup(lazyGroup);
                            }
                        }

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

                        var _parseImgSettings = function(lazyItem) {
                            var settingJson = {};
                            if (lazyItem.hasAttribute(LAZY_IMAGE_ATTRIBUTE_NAME)) { // older method, set inline style
                                var lazyImageJson = lazyItem.getAttribute(LAZY_IMAGE_ATTRIBUTE_NAME);
                                if (typeof lazyImageJson !== 'undefined' && lazyImageJson !== '') {
                                    settingJson = JSON.parse(lazyImageJson);
                                }
                            }
                            return settingJson;
                        }

                        var _loadAnimation = function(anim) {
                            if (!anim.classList.contains('run')) {
                                var offset = anim.getBoundingClientRect().top - windowHeight;
                                if (anim.offsetParent !== null && !(offset <= -100)) {
                                    if (offset <= 600 && anim.style.willChange !== 'transform, opacity') {
                                        anim.style.perspective = '1000px';
                                        anim.style.willChange = 'transform, opacity';
                                    }
                                    return;
                                }
                                anim.addEventListener('webkitAnimationEnd', function(e) {
                                    _clearWillChange(e);
                                });
                                anim.addEventListener('animationend', function(e) {
                                    _clearWillChange(e);
                                });
                                anim.classList.add('run');
                                _updateLazyLoadAttr(anim, LAZY_TYPE_ANIMATION);
                            }
                        };

                        var _loadBgImage = function(lazyItem) {
                            if (lazyItem.hasAttribute(LAZY_IMAGE_ATTRIBUTE_NAME)) { // older method, set inline style
                                var settingJson = _parseImgSettings(lazyItem);
                                var source = settingJson.src || settingJson.source;
                                if (source) {
                                    var image = new Image();

                                    function imageLoadHandler() {
                                        lazyItem.style.backgroundImage = 'url(' + source + ')';
                                        lazyItem.removeAttribute(LAZY_IMAGE_ATTRIBUTE_NAME);

                                        _lazyLoadImageLoadHandler(lazyItem,
                                            settingJson.callback,
                                            settingJson.callbackAfter);
                                    }

                                    image.onload = imageLoadHandler;
                                    image.src = source;
                                }
                            } else if (!lazyItem.classList.contains('apply-bg')) { // must be newer method with style tag. Add apply-bg class.
                                lazyItem.classList.add('apply-bg');
                            }
                            _updateLazyLoadAttr(lazyItem, LAZY_TYPE_BG_IMAGE);
                        }

                        var _loadImage = function(lazyItem) {
                            var settingJson = _parseImgSettings(lazyItem);
                            var source = settingJson.src || settingJson.source;
                            if (source) {
                                if (!lazyItem.hasAttribute('src')) {
                                    var srcAttribute = document.createAttribute('src');
                                    lazyItem.setAttributeNode(srcAttribute);
                                }

                                if (lazyItem.getAttribute('src') !== source) {
                                    lazyItem.setAttribute('src', source);
                                }
                                lazyItem.style.opacity = 1.0;
                            }
                            _updateLazyLoadAttr(lazyItem, LAZY_TYPE_BG_IMAGE);
                            _updateLazyLoadAttr(lazyItem, LAZY_TYPE_IMAGE);
                        }

                        var _loadVideo = function(lazyItem) {
                            var video = lazyItem.querySelector('video');
                            if (video) {
                                var srcVids = video.querySelectorAll('source');
                                for (var videoSrcIndex = 0; videoSrcIndex < srcVids.length; videoSrcIndex++) {
                                    var srcVideo = srcVids[videoSrcIndex];
                                    if (srcVideo.hasAttributes('data-lazy-video-src')) {
                                        srcVideo.setAttribute("src", srcVideo.getAttribute("data-lazy-video-src"));
                                    }
                                }

                                if (video.readyState === 0) {
                                    video.load();

                                    if (!lazyItem.classList.contains("cms-bgvideo-disable-autoplay")) {
                                        video.play();
                                    }

                                    lazyItem.setAttribute('data-autoplay-status', lazyContent.status.playing);
                                    _updateLazyLoadAttr(lazyItem, LAZY_TYPE_VIDEO);
                                }
                            }
                        };

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
                        lazyContent.check = function() {
                            _checkPosition();
                        };
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
    