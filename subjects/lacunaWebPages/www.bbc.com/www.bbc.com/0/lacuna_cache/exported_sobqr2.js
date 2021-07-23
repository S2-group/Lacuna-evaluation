
        /*<![CDATA[*/
        (function() {
            if (window.bbcdotcom && (typeof bbcdotcom.flag == 'undefined' || (typeof bbcdotcom.data.ads !== 'undefined' && bbcdotcom.flag.a != 1))) {
                bbcdotcom.data.ads = 0;
            }
            if (/[?|&]ads/.test(window.location.href) || /(^|; )ads=on; /.test(document.cookie) || /; ads=on(; |$)/.test(document.cookie)) {
                bbcdotcom.data.ads = 1;
                bbcdotcom.data.stats = 1;
            }
            if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) {
                bbcdotcom.assetPrefix = "https://static.bbc.co.uk/bbcdotcom/2.8.0/";
                if (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) {
                    document.write('<script type="text/javascript" src="https://static.bbc.co.uk/bbcdotcom/2.8.0/script/dist/bbcdotcom.dev.js">\x3C/script>');
                } else {
                    document.write('<script type="text/javascript" src="https://static.bbc.co.uk/bbcdotcom/2.8.0/script/dist/bbcdotcom.js">\x3C/script>');
                }
            }
        })(); /*]]>*/
    