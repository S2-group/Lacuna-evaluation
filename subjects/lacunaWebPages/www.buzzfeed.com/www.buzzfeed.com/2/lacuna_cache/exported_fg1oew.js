
        if (typeof navigator.connection !== 'undefined') {
            window.bfa('track/website/instrumentation', {
                data: {
                    target: 'network_api',
                    value: 'enabled',
                    tags: {
                        effective_type: navigator.connection.effectiveType
                    }
                },
            });
        }
    