
            window.$Nav && $Nav.when('jQuery', 'searchScoping').run(function($) {
                var hidden = $('#nav-search-form input[type=hidden]');
                if (hidden.length === 2 && hidden[1].value === '10329849011') {
                    hidden[0].remove();
                }
            })
        