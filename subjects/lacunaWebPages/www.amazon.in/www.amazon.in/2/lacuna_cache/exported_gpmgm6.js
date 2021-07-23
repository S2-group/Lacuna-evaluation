
            if (window.AmazonUIPageJS) {
                AmazonUIPageJS.when("inRetargeting").execute(function(pixel) {
                    pixel.parse({
                        fireGooglePixel: false,
                        fireVizuryPixel: false,
                        isSignedIn: 0,
                        pageType: "gateway-phone-web",
                        isMobile: 1
                    });
                });
            } else if (window.ueLogError) {
                ueLogError({
                    attribution: 'AmazonFamilyMarketingTagsMason',
                    message: 'Attempting to embed remarketing pixel, but AmazonUIPageJS is undefined'
                });
            }
        