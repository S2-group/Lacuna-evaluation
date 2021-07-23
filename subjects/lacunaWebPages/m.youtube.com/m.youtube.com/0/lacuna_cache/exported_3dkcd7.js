
        (function() {
            var playerApi = document.getElementById('player');
            var player;
            var activeConfig;
            var latestConfig;
            var autonavState;

            function fireEvent(target, name, detail) {
                target.dispatchEvent(new CustomEvent(name, {
                    bubbles: true,
                    detail: detail
                }));
            }

            function createPlayer(config) {
                yt.player.Application.create(playerApi, config);
                window['pis'] = 'initialized';

                var playerEl = playerApi.firstElementChild;
                playerEl.addEventListener('onStateChange', function(state) {
                    fireEvent(playerEl, 'player-state-change', {
                        state: state
                    });
                });

                playerEl.addEventListener('onPlayVideo', function(videoData) {
                    fireEvent(playerEl, 'on-play-autonav-video', {
                        videoData: videoData
                    });
                });

                playerEl.addEventListener('onPlaylistPrevious', function() {
                    fireEvent(playerEl, 'on-play-previous-autonav-video');
                });

                playerEl.addEventListener(
                    'onFullscreenToggled',
                    function(isCurrentlyFullscreen) {
                        fireEvent(playerEl, 'player-fullscreen-change', {
                            isCurrentlyFullscreen: isCurrentlyFullscreen
                        });
                    });

                playerEl.addEventListener('onDompaused', function(data) {
                    fireEvent(playerEl, 'player-dom-paused');
                });

                playerEl.addEventListener('onYtShowToast', function(data) {
                    fireEvent(playerEl, 'yt-show-toast', data);
                });

                playerEl.addEventListener(
                    'updateKevlarOrC3Companion',
                    function(data) {
                        fireEvent(playerEl, 'yt-update-c3-companion', data);
                    });

                playerEl.addEventListener(
                    'onVideoDataChange',
                    function(data) {
                        fireEvent(playerEl, 'video-data-change', data);
                    });

                playerEl.addEventListener(
                    'onVideoProgress',
                    function(data) {
                        fireEvent(playerEl, 'video-progress', data);
                    });

                playerEl.addEventListener(
                    'onMutedAutoplayChange',
                    function(isMutedAutoplay) {
                        fireEvent(playerEl, 'muted-autoplay-change', {
                            isMutedAutoplay: isMutedAutoplay
                        });
                    });

                return playerEl;
            }

            function updatePlayerConfig(config) {
                var hadPlayer = !!player;

                if (!config) {

                    if (player) {
                        player.stopVideo();
                    }
                    return;
                }

                if (player) {
                    player.loadVideoByPlayerVars(config.args);
                } else {
                    player = createPlayer(config);
                }

                if (!hadPlayer && (config == ytInitialPlayerConfig)) {
                    return;
                }

                player.playVideo();
            }

            window.setAutonavStateInPlayer = function(newAutonavState) {
                autonavState = newAutonavState;
                if (player) {
                    player.setAutonavState(autonavState);
                }
            }

            window.getPlayer = function() {
                return player;
            };

            window.loadPlayerConfig =
                function(newConfig, relatedVideoArgs, watchNextResponse,
                    unused_botguardData) {
                    latestConfig = newConfig;

                    window.whenPlayerReady(function() {
                        if (latestConfig != newConfig) {
                            return;
                        }

                        if (activeConfig != newConfig) {
                            activeConfig = newConfig;
                            updatePlayerConfig(activeConfig);
                        }

                        if (player) {
                            player.updateVideoData({
                                'raw_watch_next_response': watchNextResponse,
                                'rvs': relatedVideoArgs
                            });
                            player.setAutonavState(autonavState);
                        }
                    });
                };
        })();
    