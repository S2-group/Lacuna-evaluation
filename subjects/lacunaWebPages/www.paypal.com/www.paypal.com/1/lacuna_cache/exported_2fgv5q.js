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

        (function() {
            'use strict';
            var callFpti = function(fptiDataString) {
                PAYPAL.core['pta'] = PAYPAL.analytics.setup({
                    data: fptiDataString,
                    trackCPL: true,
                    url: '//t.paypal.com/ts'
                });
            };
            if (typeof PAYPAL.analytics !== 'undefined') {
                PAYPAL.core = PAYPAL.core || {};
                var fptiDataString = 'pgrp=main%3Amktg%3Apersonal%3A%3Ahome&page=main%3Amktg%3Apersonal%3A%3Ahome%3A%3A%3A&pgst=Unknown&calc=76dd0ef7400d3&rsta=nl_NL&pgtf=Nodejs&env=live&s=ci&ccpg=nl&csci=2b655357265b470a9f822a3dcf4d8127&comp=mppnodeweb&tsrce=profilenodeweb&cu=0&gacook=753350427.1570706794&ef_policy=gdpr_eu&c_prefs=T%3D1&xe=100591&xt=101561&pgld=Unknown&bzsr=main&bchn=mktg&tmpl=home.jsx&pgsf=personal&lgin=out&shir=main_mktg_personal_&pros=3&lgcook=0';
                if (typeof ga !== 'undefined' && ga !== null) {
                    ga(function(tracker) {lacuna_lazy_load("lacuna_cache/exported_2fgv5q.js[1009:1287]", functionData => eval(functionData))});
                } else {
                    callFpti(fptiDataString);
                }
            }
        })();
    