
        /*<![CDATA[*/
        (function() {
            if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) {
                bbcdotcomConfig = {
                    "adFormat": "standard",
                    "adKeyword": "",
                    "adMode": "smart",
                    "adsEnabled": true,
                    "appAnalyticsSections": "",
                    "asyncEnabled": true,
                    "disableInitialLoad": false,
                    "advertInfoPageUrl": "https:\/\/www.bbc.com\/privacy\/cookies\/international\/",
                    "advertisementText": "Advertisement",
                    "analyticsEnabled": true,
                    "sherlockEnabled": false,
                    "appName": "",
                    "assetPrefix": "https:\/\/static.bbc.co.uk\/bbcdotcom\/2.8.0\/",
                    "customAdParams": [],
                    "customStatsParams": [],
                    "headline": "",
                    "id": "",
                    "inAssociationWithText": "in association with",
                    "keywords": "",
                    "language": "",
                    "orbTransitional": false,
                    "lotameWSEnabled": false,
                    "optimizelyEnabled": true,
                    "palEnv": "live",
                    "productName": "",
                    "sections": [],
                    "comScoreEnabled": true,
                    "comscoreSite": "bbc",
                    "comscoreID": "19293874",
                    "comscorePageName": "",
                    "slots": "",
                    "sponsoredByText": "is sponsored by",
                    "adsByGoogleText": "Ads by Google",
                    "summary": "",
                    "type": "",
                    "features": {
                        "testfeature": {
                            "name": "testfeature",
                            "envs": ["sandbox", "int", "test"],
                            "on": true,
                            "options": {},
                            "override": null
                        },
                        "lxadverts": {
                            "name": "lxadverts",
                            "envs": [],
                            "on": true,
                            "options": {},
                            "override": null
                        }
                    },
                    "staticBase": "\/bbcdotcom",
                    "staticHost": "https:\/\/static.bbc.co.uk",
                    "staticVersion": "2.8.0",
                    "staticPrefix": "https:\/\/static.bbc.co.uk\/bbcdotcom\/2.8.0",
                    "dataHttp": "tps.bbc.com",
                    "dataHttps": "www.bbc.com",
                    "flagHttp": "www.bbc.co.uk",
                    "flagHttps": "www.bbc.co.uk",
                    "analyticsHttp": "sa.bbc.com",
                    "analyticsHttps": "ssa.bbc.com"
                };
                bbcdotcom.config.init(bbcdotcomConfig, bbcdotcom.data, window.location, window.document);
                bbcdotcom.config.setFlagpoles(bbcdotcom.flag || {});
                bbcdotcom.config.setAssetPrefix("https://static.bbc.co.uk/bbcdotcom/2.8.0/");
                bbcdotcom.config.setVersion("2.8.0");
                document.write('<!--[if IE 7]><script type="text/javascript">bbcdotcom.config.setIE7(true);\x3C/script><![endif]-->');
                document.write('<!--[if IE 8]><script type="text/javascript">bbcdotcom.config.setIE8(true);\x3C/script><![endif]-->');
                document.write('<!--[if IE 9]><script type="text/javascript">bbcdotcom.config.setIE9(true);\x3C/script><![endif]-->');
                if (/[?|&]ex-dp/.test(window.location.href) || document.cookie.indexOf('ex-dp=') !== -1) {
                    bbcdotcom.utils.addHtmlTagClass('bbcdotcom-ex-dp');
                }
            }
        })(); /*]]>*/
    