
        /*<![CDATA[*/
        (function() {
            if (typeof orb === 'undefined' || typeof orb.fig !== 'function') {
                bbcdotcom.data = {
                    ads: bbcdotcom.data.a,
                    stats: bbcdotcom.data.b,
                    statsProvider: bbcdotcom.data.c
                };
            }
            if (bbcdotcom.data.ads == 1) {
                document.write('<script type="text/javascript" src="https://www.bbc.com/wwscripts/flag">\x3C/script>');
            }
        })(); /*]]>*/
    