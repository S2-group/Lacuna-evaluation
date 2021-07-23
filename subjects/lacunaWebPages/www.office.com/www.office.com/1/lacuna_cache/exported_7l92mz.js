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

        var signInUrl = 'https://www.office.com/login?es=Click&ru=%2F';

        if (false) {
            if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('DefaultSignInCalledBefore') !== 'true') {
                var viewType = 'NewUserView';

                if (viewType !== "SignoutUserView") {
                    var myConfigOptions = {
                        msaConfig: {
                            replyUri: 'https://www.office.com/',
                            host: 'login.live.com'
                        },
                        aadConfig: {
                            replyUri: 'https://www.office.com/',
                            host: 'login.microsoftonline.com',
                            appId: '4345a7b9-9a63-4910-a426-35363201d503'
                        },
                        preferredIdp: AuthType.aad,
                        enableConsoleLogging: false,
                        msaFedEnabled: true
                    };

                    DefaultSignInHandler.DefaultSignInAdapter.signIn(signInUrl, myConfigOptions, 500).then(function(loginUrl) {lacuna_lazy_load("lacuna_cache/exported_7l92mz.js[1108:1629]", functionData => eval(functionData))});
                }
            } else {
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'DefaultSignin_Called_Before');
            }
        }

        function setShellOptions(shellOptions) {

            if (window.msCommonShell) {
                window.msCommonShell.load(shellOptions);
            } else {
                window.onShellReadyToLoad = function() {lacuna_lazy_load("lacuna_cache/exported_7l92mz.js[2022:2156]", functionData => eval(functionData))}
            }
        }


        var SendMeControlSignInEvent = function() {lacuna_lazy_load("lacuna_cache/exported_7l92mz.js[2233:2808]", functionData => eval(functionData))}

        function SetConsent() {lacuna_lazy_load("lacuna_cache/exported_7l92mz.js[2840:3107]", functionData => eval(functionData))}

        var shellOptions = {
            meControlOptions: {
                rpData: {
                    aadInfo: {
                        signInUrl: signInUrl,
                        signOutUrl: 'https://login.microsoft.com/logout.srf'
                    },
                    msaInfo: {
                        meUrl: null
                    },
                    preferredIdp: 'aad'
                },
                events: {
                    onEventLog: function(eventId) {lacuna_lazy_load("lacuna_cache/exported_7l92mz.js[3598:3956]", functionData => eval(functionData))}
                }
            }
        };

        setShellOptions(shellOptions);
    