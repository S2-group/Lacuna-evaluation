
        function ImageLazyLoader() {
            this.highResQueue = [];
            this.shouldLoadHighRes = false;
            this.viewPortExtendedHeight = null;
            this.isWatchingForNewImages = false;
            this.supportsIntersectionObserver = 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in IntersectionObserverEntry.prototype && 'isIntersecting' in IntersectionObserverEntry.prototype
        }
        ImageLazyLoader.prototype = {
            SCREEN_HEIGHT_COEFFICIENT: 1.4,
            SCREEN_SIDE_COEFFICIENT: 1.33,
            LAZY_IMAGE_CLASS: '.js-lazy-image',
            init: function() {
                this.watcher = this.getWatcher();
                if (!this.supportsIntersectionObserver) {
                    var updateViewportHeight = function() {
                        this.viewPortExtendedHeight = (window.innerHeight || document.documentElement.clientHeight) * this.SCREEN_HEIGHT_COEFFICIENT
                    }.bind(this);
                    window.addEventListener('resize', updateViewportHeight);
                    window.addEventListener('orientationchange', updateViewportHeight);
                    updateViewportHeight()
                }
                document.addEventListener('readystatechange', this.enableHighResImagesLoading.bind(this));
                if (window.lzimg && window.lzimg.state) {
                    this.documentLoadingStateChanged(window.lzimg.state)
                }
                window.lzimg = this.documentLoadingStateChanged.bind(this)
            },
            enableHighResImagesLoading: function() {
                if ('complete' !== document.readyState) return;
                document.removeEventListener('readystatechange', this.enableHighResImagesLoading.bind(this));
                this.shouldLoadHighRes = true;
                this.highResQueue.forEach(function(lazyImage) {
                    this.watcher.add(lazyImage)
                }.bind(this));
                this.highResQueue = []
            },
            loadLazyImage: function(lazyImage) {
                var paths = this.parseDataSrc(lazyImage);
                if (this.shouldLoadHighRes && 2 === paths.length) {
                    this.loadImageAndInsert(paths[1], lazyImage)
                } else {
                    this.loadImageAndInsert(paths[0], lazyImage)
                }
                if (!this.shouldLoadHighRes && 2 === paths.length) {
                    this.highResQueue.push(lazyImage)
                }
            },
            observeMutations: function() {
                if ('MutationObserver' in window) {
                    this.isWatchingForNewImages = true;
                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            Array.prototype.forEach.call(mutation.addedNodes, function(node) {
                                if (1 !== node.nodeType) return;
                                this.addToWatch(node)
                            }.bind(this))
                        }.bind(this))
                    }.bind(this));
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true,
                        characterData: false
                    })
                }
            },
            documentLoadingStateChanged: function(state) {
                if (!this.isWatchingForNewImages) {
                    this.observeMutations();
                    this.addToWatch(document.body);
                    if (!this.isWatchingForNewImages && state === 'ready') {
                        this.addToWatch(document.body);
                        this.listenMutationEvents();
                        this.isWatchingForNewImages = true
                    }
                }
            },
            addToWatch: function(el) {
                if (this.isValidLazyImage(el)) {
                    this.watcher.add(el)
                }
                var imageList = el.querySelectorAll(this.LAZY_IMAGE_CLASS);
                for (var i = 0; i < imageList.length; i++) {
                    var image = imageList[i];
                    if (this.isValidLazyImage(image)) {
                        this.watcher.add(image)
                    }
                }
            },
            isValidLazyImage: function(el) {
                return el.getAttribute('data-src') && !el.getAttribute('data-lazy') && el.classList.contains('js-lazy-image')
            },
            parseDataSrc: function(el) {
                var paths = el.getAttribute('data-src').split(',');
                for (var i = 0; i < paths.length; i++) {
                    paths[i] = paths[i].trim()
                }
                return paths
            },
            loadImageAndInsert: function(src, el) {
                var img = new Image();
                var encodedSRC = encodeURI(src);
                img.onload = function imageLoadedHandler() {
                    if (el.tagName === "IMG") {
                        el.src = encodedSRC
                    } else {
                        el.style.backgroundImage = 'url(\"' + encodedSRC + '\")'
                    }
                };
                img.src = encodedSRC
            },
            listenMutationEvents: function() {
                if ('MutationEvent' in window) {
                    document.body.addEventListener('DOMNodeInserted', function(event) {
                        var node = event.target;
                        if (1 !== node.nodeType) return;
                        this.addToWatch(node)
                    }.bind(this))
                }
            },
            getWatcher: function() {
                if (this.supportsIntersectionObserver) {
                    return this.intersectionObserverWatcher()
                } else {
                    return this.vanillaJSWatcher()
                }
            },
            intersectionObserverWatcher: function() {
                var intersectionObserverHandler = function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            this.loadLazyImage(entry.target);
                            intersectionObserver.unobserve(entry.target)
                        }
                    }.bind(this))
                }.bind(this);
                var intersectionObserverProps = {
                    rootMargin: '0% ' + (100 * this.SCREEN_SIDE_COEFFICIENT - 100) + '% ' + (100 * this.SCREEN_HEIGHT_COEFFICIENT - 100) + '% ' + (100 * this.SCREEN_SIDE_COEFFICIENT - 100) + '%'
                };
                var intersectionObserver = new IntersectionObserver(intersectionObserverHandler, intersectionObserverProps);
                return {
                    add: function add(lazyImage) {
                        lazyImage.setAttribute('data-lazy', 1);
                        intersectionObserver.observe(lazyImage)
                    },
                    remove: function remove(lazyImage) {
                        intersectionObserver.unobserve(lazyImage)
                    }
                }
            },
            vanillaJSWatcher: function() {
                var add, remove;
                var _eventsAttached = false;
                var _images = [];
                var _elementInViewport = function(el) {
                    var rect = el.getBoundingClientRect();
                    return (rect.top >= 0 && rect.left >= 0 && rect.top <= this.viewPortExtendedHeight)
                }.bind(this);
                var _throttle = function(func, wait) {
                    var timeout = null;
                    var previous = 0;
                    var later = function() {
                        previous = Date.now();
                        timeout = null;
                        func.call()
                    };
                    return function() {
                        var now = Date.now();
                        var remaining = wait - (now - previous);
                        if (remaining <= 0 || remaining > wait) {
                            if (timeout) {
                                clearTimeout(timeout);
                                timeout = null
                            }
                            previous = now;
                            func.call()
                        } else if (!timeout) {
                            timeout = setTimeout(later, remaining)
                        }
                    }
                };
                var _visibilityHandler = _throttle(function() {
                    for (var i = 0; i < _images.length; i++) {
                        var lazyImage = _images[i];
                        if (_elementInViewport(lazyImage)) {
                            remove(lazyImage);
                            this.loadLazyImage(lazyImage)
                        }
                    }
                }.bind(this), 50);
                var _addEvents = function() {
                    _eventsAttached = true;
                    window.addEventListener('scroll', _visibilityHandler);
                    window.addEventListener('resize', _visibilityHandler);
                    window.addEventListener('orientationchange', _visibilityHandler);
                    window.removeEventListener('readystatechange', _visibilityHandler)
                };
                var _removeEvents = function() {
                    _eventsAttached = false;
                    window.removeEventListener('scroll', _visibilityHandler);
                    window.removeEventListener('resize', _visibilityHandler);
                    window.removeEventListener('orientationchange', _visibilityHandler);
                    window.removeEventListener('readystatechange', _visibilityHandler)
                };
                add = function(lazyImage) {
                    lazyImage.setAttribute('data-lazy', 1);
                    if (_elementInViewport(lazyImage)) {
                        this.loadLazyImage(lazyImage)
                    } else {
                        _images.push(lazyImage);
                        if (!_eventsAttached) {
                            _addEvents()
                        }
                    }
                }.bind(this);
                remove = function(lazyImage) {
                    var index = _images.indexOf(lazyImage);
                    if (-1 < index) {
                        _images.splice(index, 1);
                        if (0 === _images.length) {
                            _removeEvents()
                        }
                    }
                };
                return {
                    add: add,
                    remove: remove
                }
            }
        };
        ImageLazyLoader.prototype.isHiDPI = function() {
            var mediaQuery = '(-webkit-min-device-pixel-ratio:1.5),\(min--moz-device-pixel-ratio:1.5),\(-o-min-device-pixel-ratio:3/2),\(min-resolution:1.5dppx)';
            return window.matchMedia && window.matchMedia(mediaQuery).matches;
        };
        // eslint-disable-next-line no-undef
        ImageLazyLoader.prototype.enableHighResImagesLoading = function() {
            if ('complete' !== document.readyState) return;
            document.removeEventListener('readystatechange', this.enableHighResImagesLoading);
            if (this.isHiDPI()) {
                this.shouldLoadHighRes = true
            }
            this.highResQueue.forEach(function(lazyImage) {
                this.watcher.add(lazyImage)
            }.bind(this));
            this.highResQueue = []
        };
        new ImageLazyLoader().init();
    