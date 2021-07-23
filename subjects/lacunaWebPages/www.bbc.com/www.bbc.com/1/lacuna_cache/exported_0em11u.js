// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

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
                (function() {lacuna_lazy_load("lacuna_cache/exported_0em11u.js[932:1685]", functionData => eval(functionData))})();
            } /*]]>*/
        