
        var AWS = {
            PageSettings: {
                supportedLanguages: ['ar', 'en', 'es', 'de', 'fr', 'id', 'it', 'jp', 'ko', 'pt', 'ru', 'th', 'tr', 'vi', 'cn', 'tw'],
                defaultLanguage: 'en',
                logDataSet: 'LIVE:PROD',
                logInstance: 'PUB',
                csdsEndpoint: 'https://aws.amazon.com/',
                framework: 'v2',
                g11nLibPath: 'https://a0.awsstatic.com/g11n-lib/2.0.36',
                i18nStringPath: 'https://i18n-string.us-west-2.prod.pricing.aws.a2z.com',
                libraCSSPath: 'https://a0.awsstatic.com/libra-css/css/1.0.308',
                libraCSSImagePath: 'https://a0.awsstatic.com/libra-css/images',
                isLoggingEnabled: true,
                currentLanguage: 'en-US',
                isMarketplace: false,
                isRTL: false
            }
        };

        var require = {
            baseUrl: 'https://a0.awsstatic.com',
            packages: [{
                name: 'libra',
                location: 'libra/1.0.303'
            }],
            paths: {
                "directories": "https://a0.awsstatic.com/libra/1.0.303/directories",
                "libra-cardsui": "https://a0.awsstatic.com/libra/1.0.303/libra-cardsui",
                "librastandardlib": "https://a0.awsstatic.com/libra/1.0.303/librastandardlib",
                "aws-blog": "https://a0.awsstatic.com/aws-blog/1.0.28/js",
                "plc": "https://a0.awsstatic.com/plc/js/1.0.84/plc",
                "scripts": "libra/1.0.303/v1-polyfills/scripts",
                "psf": "https://a0.awsstatic.com/psf/1.1.2",
                "libra-search": "https://a0.awsstatic.com/libra-search/1.0.10/js",
                "pricing-calculator": "https://a0.awsstatic.com/pricing-calculator/js/1.0.2",
                "pricing-savings-plan": "https://a0.awsstatic.com/pricing-savings-plan/js/1.0.2"
            },
            waitSeconds: 15
        };
    