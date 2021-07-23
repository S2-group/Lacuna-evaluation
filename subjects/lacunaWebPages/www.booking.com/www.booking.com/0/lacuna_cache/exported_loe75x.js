
        booking.env.fe_m_async_login = 1;
        booking.env.async_signin = booking.env.async_signin || {};
        booking.env.async_signin.init_cbs = booking.env.async_signin.init_cbs || [];
        booking.env.async_signin.paths = {
            css: 'https://r-cf.bstatic.com/mobile/css/sign_in_form_cloudfront.iq_ltr/81569504346d2e3a1112e2afe70e6dec96754675.css',
            script: 'https://r-cf.bstatic.com/mobile/js/sign_in_form_cloudfront/4437016d58b7fc880214243a47afadc5d2378ee6.js',
            tmpl: '/sign_in_form.html?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ;sid=a18d0e3647ad471a1ddf7cf6315fd08d;origin=%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ%3Bsid%3Da18d0e3647ad471a1ddf7cf6315fd08d%3Bsb_price_type%3Dtotal%26&'
        };
        booking.env.async_signin.endpoint_url = 'https://www.booking.com/index.html?label=gen173nr-1DCAEoggI46AdIM1gEaKkBiAECmAExuAEJyAER2AED6AEB-AECiAIBqAIDuALar_zsBcACAQ;sid=a18d0e3647ad471a1ddf7cf6315fd08d;sb_price_type=total&';
        booking.env.async_signin.enabled_critical_path = true;
    