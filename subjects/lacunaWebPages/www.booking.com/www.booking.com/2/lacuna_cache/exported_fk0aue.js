
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
                    var updateViewportHeight = function() {}.bind(this);
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
            enableHighResImagesLoading: function() {},
            loadLazyImage: function(lazyImage) {},
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
            parseDataSrc: function(el) {},
            loadImageAndInsert: function(src, el) {},
            listenMutationEvents: function() {},
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
                    remove: function remove(lazyImage) {}
                }
            },
            vanillaJSWatcher: function() {}
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
            this.highResQueue.forEach(function(lazyImage) {}.bind(this));
            this.highResQueue = []
        };
        new ImageLazyLoader().init();
    