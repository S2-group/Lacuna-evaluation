
                        function renderHerotator(A, params) {
                            A.ajax('/gp/auto-rotate-herotator/handler/getSlides.html', {
                                method: 'post',
                                params: params,
                                success: null,
                                error: function() {}
                            });
                        };
                        P.when("A", "ready").execute(function(A) {
                            P.when("af").execute(function() {
                                setTimeout(function() {
                                    renderHerotator(A, {
                                        "stopOnTouch": 0,
                                        "shouldInlineImage": "",
                                        "pageType": "36701",
                                        "firstId": "d8e57fbc-58c3-434a-8d8d-25fe1b31124e",
                                        "herotatorId": "grid-1-herotator",
                                        "pageIdent": "mobile",
                                        "imageStyle": "SY367",
                                        "firstValidSlot": "mobile-hero-slide-1",
                                        "firstSlot": "[\"mobile-hero-slide-1\"]",
                                        "rId": "VS5H3DHG80YPHS4W1AQD",
                                        "rotateInterval": 3000,
                                        "remainingSlots": "[\"mobile-hero-slide-2\",\"mobile-hero-slide-3\",\"mobile-hero-slide-4\", \"mobile-hero-slide-5\", \"mobile-hero-slide-6\", \"mobile-hero-slide-7\", \"mobile-hero-slide-8\"]"
                                    })
                                }, 1000);
                            });
                        });
                    