
            window.ux.eldorado._onDelayedJSLoadedFns.push(function delayedMounts(err) {
                if (err) return;
                ReactDOM.render(
                    React.createElement(SalesHeader.Header, ux.eldorado.data.props),
                    document.getElementById('header-ae6c008e9824206a55332b1472f7a07b')
                );
                ReactDOM.render(
                    React.createElement(SalesHeader.Footer, ux.eldorado.data.props),
                    document.getElementById('footer-ae6c008e9824206a55332b1472f7a07b')
                );
            });
        