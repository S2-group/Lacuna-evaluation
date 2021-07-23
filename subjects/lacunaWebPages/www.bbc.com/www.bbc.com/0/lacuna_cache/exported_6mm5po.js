
        /*<![CDATA[*/
        require(['orb/fig', 'orb/nav'], function(fig, nav) {
            fig.load(function(fig) {
                if (fig.geo.isUK()) {
                    nav.loadJs('https://nav.files.bbci.co.uk/orbit/3.0.0-689.22280858/js/edr.min.js');
                }
            });
        });
        /*]]>*/
    