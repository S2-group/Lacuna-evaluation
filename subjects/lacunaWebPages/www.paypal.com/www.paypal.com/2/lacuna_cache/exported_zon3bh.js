
                if (window.console || 'console' in window) {
                    setTimeout(console.log.bind(console, '%c WARNING!!!', 'color:#FF8F1C; font-size:40px;'));
                    setTimeout(console.log.bind(console, '%c This browser feature is for developers only. Please do not copy-paste any code or run any scripts here. It may cause your PayPal account to be compromised.', 'color:#003087; font-size:16px; font-weight: bold;'));
                    setTimeout(console.log.bind(console, '%c For more information, http://en.wikipedia.org/wiki/Self-XSS', 'color:#003087; font-size:16px; font-weight: bold;'));
                }
                document.querySelector('html').classList.remove('no-js');
            