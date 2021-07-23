
        var $trigger = $('.js-footer-category-trigger'),
            $footer = $('.js-footer'),
            $back = $('.js-footer-back'),
            $cols = $('.js-footer-col');

        function setCategory(target) {
            var $picked = $cols.filter('[data-name="' + target + '"]');
            $cols.removeClass('site-footer--col__visible');
            $picked.addClass('site-footer--col__visible');
        }

        $trigger.on('click', function(e) {
            e.preventDefault();

            var target = $(this).data('target');

            $trigger.removeClass('_active');
            $(this).addClass('_active');

            $footer.addClass('site-footer__open');
            setCategory(target);
        });

        $back.on('click', function(e) {
            e.preventDefault();

            $trigger.removeClass('_active');
            $footer.removeClass('site-footer__open');

            setCategory('default');
        });
    