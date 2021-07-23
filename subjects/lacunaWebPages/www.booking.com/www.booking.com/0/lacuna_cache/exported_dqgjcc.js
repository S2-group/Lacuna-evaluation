
        /*eslint no-console: "off"*/
        (function() {
            // Impact mesurement
            window.addEventListener('load', impactRecordLoadTime);

            function impactRecordLoadTime() {
                try {
                    if (performance.timing.loadEventEnd == 0) return setTimeout(impactRecordLoadTime, 1000);
                    var delta = performance.timing.loadEventEnd - performance.timing.connectStart;
                    localStorage.reloadClock = parseInt(localStorage.reloadClock || 0, 10) + delta;
                    localStorage.reloadCount = parseInt(localStorage.reloadCount || 0, 10) + 1;
                } catch (o_O) {}
            }

            function impactHasHotReloadActive() {
                try {
                    localStorage.reloadHasUsedHotComponent = true;
                } catch (o_O) {}
            }
            var loader = B.require('component/loader');
            // ------------------------------------------------------------------------
            // Toast Config
            function toast(message) {
                var id = 'hot-reload-toast';
                var previousToast = document.getElementById(id);
                if (previousToast) previousToast.remove();
                var toast = document.createElement('div');
                toast.id = id;
                Object.assign(toast.style, {
                    background: 'rgba(0,0,0,0.9)',
                    boxShadow: '0 2px -2px rgba(0,0,0,0.4)',
                    color: '#fff',
                    font: 'normal 14px/1.5 sans-serif',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    position: 'fixed',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    transition: 'all .2s ease-in-out',
                    zIndex: 999999
                });
                toast.textContent = message;
                console.info(message);
                document.body.appendChild(toast);
                setTimeout(function() {
                    toast.style.bottom = '40px';
                }, 10);
                setTimeout(function() {
                    toast.style.bottom = '-50px';
                }, 2200);
                setTimeout(function() {
                    toast.remove();
                }, 2500);
            }
            var Toast = {
                wsStarted: function() {
                    toast('Hot reload started');
                },
                wsDisconnected: function() {
                    toast('WebSocket server disconnected');
                },
                wsSuccess: function() {
                    toast('Hot Reload starting');
                },
                wsFail: function() {
                    toast('Failed starting hot reload');
                },
                reloadHTML: function(id) {
                    toast('HTML code reloaded - id: ' + id);
                },
                reloadCSS: function() {
                    toast('CSS code reloaded');
                },
                reloadJS: function(file, name) {
                    toast('JS code reloaded - ' + file + ' - ' + name);
                }
            };
            // ------------------------------------------------------------------------
            // Reload actions
            var Reload = {
                HTML: function reloadHTML(newComponent, attributes) {
                    var componentsToReload = [].slice.call(document.querySelectorAll('[data-hot-reload-id]'));
                    componentsToReload.forEach(function(componentToReload) {
                        if (componentToReload.dataset.hotReloadId === attributes['id']) {
                            fetch('https://book.dqs.booking.com/dev/render_tmpl_fiddle', {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json; charset=utf-8'
                                    },
                                    body: JSON.stringify({
                                        tmpl: newComponent,
                                        tmpl_data: JSON.stringify(attributes)
                                    })
                                })
                                .then(function(response) {
                                    return response.json();
                                })
                                .then(function _reloadHTML(response) {
                                    componentToReload.innerHTML = response.result;
                                    Toast.reloadHTML(attributes['id']);
                                });
                        }
                    });
                },
                CSS: function reloadCSS() {
                    var links = [].slice.call(document.querySelectorAll('link[rel="stylesheet"][href*="bstatic.com"]'));
                    var newLinksOnload = links.map(function(link) {
                        return new Promise(function(resolve, reject) {
                            var newLink = link.cloneNode();
                            document.head.appendChild(newLink);
                            newLink.onload = resolve;
                            newLink.onerror = resolve;
                            return newLink;
                        });
                    });
                    Promise.all(newLinksOnload).then(function() {
                        links.forEach(function(link) {
                            if (link.parentNode) {
                                link.parentNode.removeChild(link);
                            }
                        });
                    });
                    Toast.reloadCSS();
                },
                JS: function reloadJS(file, name) {
                    var id = btoa(name);
                    var url = hotURL(file);
                    var elements = $('[data-component=' + name + ']');
                    var script = document.getElementById(id);
                    if (script) script.remove();
                    // 1. destroy existing instances
                    elements.each(function(i, node) {
                        var self = $(node);
                        var c = loader.getComponent(node);
                        c && c._destroy && c._destroy();
                        self.removeData('component-instance-' + name);
                        // Remove event-map delegate listeners
                        self.off('*');
                        // Clone root node to get rid of all DOM modifications / event listeners
                        self.replaceWith(this.cloneNode(true));
                    });
                    // damn you component-loader.loadAsync !
                    setTimeout(function() {
                        var componentName = 'component/' + name;
                        // 2. remove component module definition
                        delete B.require._defined[componentName];
                        // 3. load new definition and initialize
                        script = document.createElement('script');
                        script.onload = function() {
                            elements = $('[data-component=' + name + ']');
                            if (elements.length) {
                                elements.component(name);
                            }
                            // elements.component(name);
                        };
                        script.src = url;
                        document.getElementsByTagName('head')[0].appendChild(script);
                        Toast.reloadJS(file, componentName);
                    }, 20);
                }
            };

            function hotReloadCSS(file) {
                var id = btoa(file);
                var url = hotURL(file);
                var link = document.getElementById(id);
                if (!link) {
                    var link = createLinkStylesheet(url, id);
                } else {
                    forceLinkReload(link);
                }
            }

            function reloadRequestHandler(message) {
                var data = parseJSON(message.data);
                console.info('hot-reload:', data);
                if (!data) return console.error('Could not parse message', message);
                switch (data.type) {
                    case 'reload-html':
                        return Reload.HTML(data.data.source, data.data.attributes);
                    case 'reload-css':
                        return Reload.CSS();
                    case 'reload-css-inline':
                        return hotReloadCSS(data.path);
                    case 'reload-js-component':
                        return Reload.JS(data.path, data.component);
                    case 'full':
                        window.location.reload();
                }
            }
            // ------------------------------------------------------------------------
            // WebSocket Config
            function Watcher(options) {
                this.host = (options && options.host) || 'wss://' + location.hostname;
                this.port = (options && options.port) || '3000';
                this.ws = null;
                this.wsURL = this.host + ':' + this.port;
                this.timer = null;
                this.pingInterval = 5000;
            }
            Watcher.prototype.connect = function() {
                if (!window.WebSocket) return Toast.wsStarted();
                if (this.connected) return Toast.wsSuccess();
                var ws = (this.ws = new WebSocket(this.wsURL));
                ws.onopen = this.openHandler.bind(this);
                ws.onclose = this.closeHandler.bind(this);
                ws.onmessage = this.messageHandler.bind(this);
                ws.onerror = this.errorHandler.bind(this);
            };
            Watcher.prototype.disconnect = function() {
                this.ws.close();
                this.connected = false;
                Toast.wsDisconnected();
            };
            Watcher.prototype.start = function() {
                this.connect();
            };
            Watcher.prototype.stop = function() {
                this.disconnect();
                Toast.wsDisconnected();
            };
            Watcher.prototype.openHandler = function() {
                this.connected = true;
                Toast.wsStarted();
                impactHasHotReloadActive();
            };
            Watcher.prototype.closeHandler = function() {
                if (this.connected) Toast.wsDisconnected();
                this.connected = false;
            };
            Watcher.prototype.errorHandler = function(err) {
                if (this.ws.readyState == WebSocket.CLOSING || this.ws.readyState == WebSocket.CLOSED) {
                    Toast.wsFail();
                }
            };
            Watcher.prototype.messageHandler = reloadRequestHandler;
            // ------------------------------------------------------------------------
            // Helpers
            function parseJSON(data) {
                try {
                    return JSON.parse(data);
                } catch (o_O) {}
            }

            function hotURL(file) {
                return '//' + location.host.replace('booking.com', 'bstatic.com') + '/dev/' + file + '?t=' + Date.now();
            }
            // ------------------------------------------------------------------------
            // CSS Link Helpers
            function forceLinkReload(linkElement) {
                linkElement.href = linkElement.href.replace(/\?.*|$/m, '?t=' + Date.now());
            }

            function createLinkStylesheet(url, id) {
                var link = document.createElement('link');
                if (id) link.id = id;
                link.rel = 'stylesheet';
                link.href = url;
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            // ------------------------------------------------------------------------
            // Hot Reload Config
            window.hotreload = function() {
                var isLocal = /[?&]hotreload=localhost/.test(location.search);
                var kvmAddress = 'https://q-cf.bstatic.com'.replace('https://', 'wss://').replace('bstatic', 'booking');
                var options = isLocal ? {
                    host: 'ws://localhost'
                } : {
                    host: kvmAddress
                };
                new Watcher(options).start();
            };
            var keys = [];
            window.addEventListener(
                'keydown',
                function(e) {
                    if (e.key === 'r') {
                        keys.push('r');
                        if (keys.length === 3) {
                            window.hotreload();
                            keys.length = 0;
                        }
                    } else {
                        keys.length = 0;
                    }
                },
                false
            );
            if (/[?&]hotreload/.test(location.search)) {
                window.hotreload();
            }
        }());
    