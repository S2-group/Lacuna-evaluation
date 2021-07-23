
                        if (typeof uet === 'function' && typeof ues === 'function') {
                            var scope = 'gateway_atf_gateway-mWeb';
                            var placementId = '84ed58f2-f73c-46d7-9cab-c7ce7f40aa7f';
                            ues('wb', 'adplacements:' + scope.replace(/\_/g, ':'), {
                                wb: 1
                            });
                            uet('bb', 'adplacements:' + scope.replace(/\_/g, ':'), {
                                wb: 1
                            });
                            if (placementId) {
                                ues('wb', 'adplacements:' + placementId, {
                                    wb: 1
                                });
                                uet('bb', 'adplacements:' + placementId, {
                                    wb: 1
                                });
                            }
                        }
                    