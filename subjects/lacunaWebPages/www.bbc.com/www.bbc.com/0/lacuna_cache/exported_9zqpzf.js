
        /*<![CDATA[*/ /* Load Lotame, Grapeshot and GPT without blocking rendering but executing in order */
        if (bbcdotcomScripts && bbcdotcomScripts.length > 0) {
            (function() {
                bbcdotcomScripts.forEach(function(item) {
                    var script = document.createElement('script');
                    script.async = false;
                    if (item.id) script.id = item.id;
                    script.src = item.src;
                    document.head.appendChild(script);
                });
            })();
        } /*]]>*/
    