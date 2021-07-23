
        (function() {
            history.replaceState && history.replaceState({}, null, null);

            var cfImages = [];

            var cfMetricFunc =

                function(images) {
                    gm.wil(images, function(cached) {
                        gm.w('af:lg', function() {

                            gm.mpe('cf');
                            window.P && P.register('sp.load.js');
                            if (typeof(ue) != 'undefined') {
                                if (ue && ue.tag) {
                                    ue.tag(cached.length > 0 ? 'gwImgCached' : 'gwImgNoCached');
                                }
                            }
                        });
                    });
                };
            P.declare('cfImages', cfImages);
            cfMetricFunc(cfImages);

            var cfPerformanceFunc =

                function(images) {
                    P.when('cf').execute(function() {
                        var id = 'gwm:cfImage:';

                        var logMetric = function(name, value) {
                            if (!value) {
                                return;
                            }

                            ue.count(id + name, value);

                        }

                        var resources =
                            window.performance &&
                            typeof window.performance.getEntriesByType === 'function' &&
                            window.performance.getEntriesByType("resource") || [];
                        var imageSrc;
                        var duration;
                        var csmTag;
                        var i;

                        if (!images || !images.length) {
                            return;
                        }

                        if (!ue.count || !ue.tag) {
                            return;
                        }

                        imageSrc = images[0];

                        for (i = 0; i < resources.length; i++) {
                            if (resources[i].name === imageSrc) {
                                csmTag = (resources[i].duration < 50) ? id + ":cfCached" : id + ":cfNotCached"
                                ue.tag(csmTag);

                                logMetric('fetchStart', resources[i].fetchStart);
                                logMetric('duration', resources[i].duration);
                                logMetric('transferSize', resources[i].transferSize);
                            }
                        }
                    });
                };
            cfPerformanceFunc(cfImages);
        }());
    