
                        $('.hero-box .close').click(function() {
                            $.cookie("hero", "closed", {
                                path: "/",
                                expires: 365
                            });
                            var $hero = $(".hero-box");
                            $hero.slideUp('fast', function() {
                                $hero.remove();
                            });
                            StackExchange.helpers.gps('hero.closed');
                            return false;
                        });
                    