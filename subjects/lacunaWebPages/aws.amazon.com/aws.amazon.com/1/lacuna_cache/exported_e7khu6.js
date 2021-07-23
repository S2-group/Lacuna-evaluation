
        if (document.documentMode === 10) {
            var msg = 'You are using an <strong>outdated</strong> browser. Please upgrade to Internet Explorer 11 or another modern browser to improve your experience.';
            $('html').addClass('unsupported-version');
            $(document.body).append('<p class="deprecated-browser-support-message">' + msg + '<img src="https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/awsm_:comp_DeprecatedBrowser@v=1:u=c?dataset=LIVE:PROD&instance=PUB&client=dsk&marketplaceId=A12QK8IU0H0XW5&requestId=ABCDEFGHIJKLMNOPQRST&session=123-1234567-1234567" alt="deprecated-browser pixel tag" /></p>');
            jQuery = $ = undefined;
        }
    