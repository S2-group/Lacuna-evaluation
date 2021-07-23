
        /*<![CDATA[*/
        (function() {
            if (typeof orb !== 'undefined' && typeof orb.fig === 'function') {
                if (orb.fig('ad') && orb.fig('uk') == 0) {
                    bbcdotcom.data = {
                        ads: (orb.fig('ad') ? 1 : 0),
                        stats: (orb.fig('uk') == 0 ? 1 : 0),
                        statsProvider: orb.fig('ap')
                    };
                }
            } else {
                document.write('<script type="text/javascript" src="https://www.bbc.com/wwscripts/data">\x3C/script>');
            }
        })(); /*]]>*/
    