
            var component = 'navCF';
            try {
                (window.AmazonUIPageJS ? AmazonUIPageJS : P).register(component, function() {
                    return {};
                });
            } catch (e) {
                var error = e.message.toLowerCase();
                var alreadyRegisteredMsg = component + ' already registered';

                if (error.indexOf(alreadyRegisteredMsg.toLowerCase()) === -1) {
                    throw (e);
                }
            }
        