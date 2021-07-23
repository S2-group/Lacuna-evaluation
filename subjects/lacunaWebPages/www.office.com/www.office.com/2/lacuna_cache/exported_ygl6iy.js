
        $(function() {
            HomePage.init();
            var cookieConsentBannerNeeded = true;


            var viewType = 'NewUserView';

            function initializeLogging() {

                var sharedClientStartupContext = {
                    "ariaCollectorUrl": "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                    "ariaTenant": "ea6758984c4b43529f9929667d8d3198-c52d4a8b-47fe-4fdf-99b8-5f897ff4e33b-7365",
                    "buildDateUtc": "2019-10-09 12:25",
                    "buildId": "730460b7-08da-296f-2a09-14518366b1b4",
                    "corpNet": false,
                    "correlationId": "2bafa724-4b02-4312-be6a-e052173c2585",
                    "deploymentEnvironment": "Prod",
                    "devEnvironment": "Oahu",
                    "flights": "projenabled,teamsdeeplinkcf,sharedattachments,nopwaupdatecf,classcreateon,formquizcreateon",
                    "geoName": "neu",
                    "requestOrigin": "Direct",
                    "sessionId": "0100842f-8fbd-40b9-9dba-7d89598b66a1",
                    "testTraffic": false,
                    "cookieConsentRequired": true,
                    "officeMarketLcid": 1033
                };
                var ariaContext = {
                    ariaCollectorUrl: sharedClientStartupContext.ariaCollectorUrl,
                    ariaTenant: sharedClientStartupContext.ariaTenant,
                    authTypeString: '',
                    cookieConsentRequired: cookieConsentBannerNeeded && typeof mscc !== 'undefined',
                    corpNet: sharedClientStartupContext.corpNet,
                    correlationId: sharedClientStartupContext.correlationId,
                    deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                    devEnvironment: sharedClientStartupContext.devEnvironment,
                    features: '',
                    flights: sharedClientStartupContext.flights,
                    geoName: sharedClientStartupContext.geoName,
                    puid: '',
                    requestOrigin: sharedClientStartupContext.requestOrigin,
                    serverBuildDate: sharedClientStartupContext.buildDateUtc,
                    serverBuildId: sharedClientStartupContext.buildId,
                    sessionId: sharedClientStartupContext.sessionId,
                    tenantId: '',
                    testTraffic: sharedClientStartupContext.testTraffic
                };
                StandaloneAriaLogger.Logger.Initialize(ariaContext, true);


                var config = {
                    coreData: {
                        appId: "www.office.com-unauth",
                        pageName: "UnauthOhp"
                    }
                };
                awa && awa.init(config);
            }

            function addUnauthTelemetry() {
                $('button, a').click(function() {});

                // always log unauth page successfully loaded regardless of page is displayed or not
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'unauth_page_loaded')
                if (!false || (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView') {
                    // only log page view if page is displayed
                    StandaloneAriaLogger.Logger.LogUnauthPageView(viewType);
                }
            }

            initializeLogging();
            addUnauthTelemetry();
        });
    