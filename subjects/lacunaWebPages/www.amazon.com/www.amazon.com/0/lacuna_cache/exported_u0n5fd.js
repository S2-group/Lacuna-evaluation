
                    if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
                        window.P.now('packardGlowIngressMobileJsEnabled').execute(function(glowEnabled) {
                            if (!glowEnabled) {
                                window.P.declare('packardGlowIngressMobileJsEnabled', true);
                            }
                        });
                        window.P.now('glowMobileSelectedLocationType').execute(function(locationType) {
                            if (!locationType) {
                                window.P.declare('glowMobileSelectedLocationType', '');
                            }
                        });
                        window.P.now('glowMobileSelectedLocationValue').execute(function(locationValue) {
                            if (!locationValue) {
                                window.P.declare('glowMobileSelectedLocationValue', '');
                            }
                        });
                        window.P.now('glowMobileBottomSheetCallRefactor').execute(function(glowCallRefactor) {
                            if (!glowCallRefactor) {
                                window.P.declare('glowMobileBottomSheetCallRefactor', true);
                            }
                        });
                        window.P.now('glowMobileStoreName').execute(function(storeName) {
                            if (!storeName) {
                                window.P.declare('glowMobileStoreName', 'NoStoreName');
                            }
                        });
                        window.P.now('glowMobileDoneBottonEnabled').execute(function(doneBottonEnabled) {
                            if (!doneBottonEnabled) {
                                window.P.declare('glowMobileDoneBottonEnabled', true);
                            }
                        });
                        window.P.now('glowMobileDoneBottonLabel').execute(function(doneBottonLabel) {
                            if (!doneBottonLabel) {
                                window.P.declare('glowMobileDoneBottonLabel', 'DONE');
                            }
                        });
                    }
                