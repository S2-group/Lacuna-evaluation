
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

                    DefaultSignInHandler.DefaultSignInAdapter.signIn(signInUrl, myConfigOptions, 500).then(function(loginUrl) {});
                }
            } else {
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'DefaultSignin_Called_Before');
            }
        }

        function setShellOptions(shellOptions) {

            if (window.msCommonShell) {
                window.msCommonShell.load(shellOptions);
            } else {
                window.onShellReadyToLoad = function() {}
            }
        }


        var SendMeControlSignInEvent = function() {}

        function SetConsent() {}

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
                    onEventLog: function(eventId) {}
                }
            }
        };

        setShellOptions(shellOptions);
    