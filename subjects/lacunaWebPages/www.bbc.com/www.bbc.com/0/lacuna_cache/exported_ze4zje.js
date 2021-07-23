
            /*<![CDATA[*/
            if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.stats && bbcdotcom.data.stats === 1 && bbcdotcom.utils && window.location.pathname === '/' && window.bbccookies && bbccookies.readPolicy('necessary')) {
                var wwhpEdition = bbcdotcom.utils.getMetaPropertyContent('wwhp-edition');
                var _sf_async_config = {}; /** CONFIGURATION START **/
                _sf_async_config.uid = 50924;
                _sf_async_config.domain = "bbc.co.uk";
                _sf_async_config.title = "Homepage" + (wwhpEdition !== '' ? ' - ' + wwhpEdition : '');
                _sf_async_config.sections = "Homepage" + (wwhpEdition !== '' ? ', Homepage - ' + wwhpEdition : '');
                _sf_async_config.region = wwhpEdition;
                _sf_async_config.path = "/" + (wwhpEdition !== '' ? '?' + wwhpEdition : ''); /** CONFIGURATION END **/
                (function() {
                    function loadChartbeat() {
                        window._sf_endpt = (new Date()).getTime();
                        var e = document.createElement("script");
                        e.setAttribute("language", "javascript");
                        e.setAttribute("type", "text/javascript");
                        e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
                        document.body.appendChild(e);
                    }
                    var oldonload = window.onload;
                    window.onload = (typeof window.onload != "function") ? loadChartbeat : function() {
                        oldonload();
                        loadChartbeat();
                    };
                })();
            } /*]]>*/
        