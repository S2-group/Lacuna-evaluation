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
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd otransitionend',
            'transition': 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {lacuna_lazy_load("js/bootstrap.js[1583:1908]", functionData => eval(functionData))}

    $(function() {
        $.support.transition = transitionEnd()
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // ALERT CLASS DEFINITION
    // ======================

    var dismiss = '[data-dismiss="alert"]'
    var Alert = function(el) {lacuna_lazy_load("js/bootstrap.js[2588:2642]", functionData => eval(functionData))}

    Alert.prototype.close = function(e) {lacuna_lazy_load("js/bootstrap.js[2684:3564]", functionData => eval(functionData))}


    // ALERT PLUGIN DEFINITION
    // =======================

    var old = $.fn.alert

    $.fn.alert = function(option) {lacuna_lazy_load("js/bootstrap.js[3690:3965]", functionData => eval(functionData))}

    $.fn.alert.Constructor = Alert


    // ALERT NO CONFLICT
    // =================

    $.fn.alert.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[4094:4146]", functionData => eval(functionData))}


    // ALERT DATA-API
    // ==============

    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function(element, options) {lacuna_lazy_load("js/bootstrap.js[4867:5002]", functionData => eval(functionData))}

    Button.DEFAULTS = {
        loadingText: 'loading...'
    }

    Button.prototype.setState = function(state) {lacuna_lazy_load("js/bootstrap.js[5117:5797]", functionData => eval(functionData))}

    Button.prototype.toggle = function() {lacuna_lazy_load("js/bootstrap.js[5840:6425]", functionData => eval(functionData))}


    // BUTTON PLUGIN DEFINITION
    // ========================

    var old = $.fn.button

    $.fn.button = function(option) {lacuna_lazy_load("js/bootstrap.js[6555:6938]", functionData => eval(functionData))}

    $.fn.button.Constructor = Button


    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[7072:7125]", functionData => eval(functionData))}


    // BUTTON DATA-API
    // ===============

    $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function(e) {lacuna_lazy_load("js/bootstrap.js[7259:7417]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {lacuna_lazy_load("js/bootstrap.js[8009:8457]", functionData => eval(functionData))}

    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true
    }

    Carousel.prototype.cycle = function(e) {lacuna_lazy_load("js/bootstrap.js[8602:8873]", functionData => eval(functionData))}

    Carousel.prototype.getActiveIndex = function() {lacuna_lazy_load("js/bootstrap.js[8926:9094]", functionData => eval(functionData))}

    Carousel.prototype.to = function(pos) {lacuna_lazy_load("js/bootstrap.js[9138:9546]", functionData => eval(functionData))}

    Carousel.prototype.pause = function(e) {lacuna_lazy_load("js/bootstrap.js[9591:9888]", functionData => eval(functionData))}

    Carousel.prototype.next = function() {lacuna_lazy_load("js/bootstrap.js[9931:10005]", functionData => eval(functionData))}

    Carousel.prototype.prev = function() {lacuna_lazy_load("js/bootstrap.js[10048:10122]", functionData => eval(functionData))}

    Carousel.prototype.slide = function(type, next) {lacuna_lazy_load("js/bootstrap.js[10176:12304]", functionData => eval(functionData))}


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel

    $.fn.carousel = function(option) {lacuna_lazy_load("js/bootstrap.js[12442:13015]", functionData => eval(functionData))}

    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[13159:13214]", functionData => eval(functionData))}


    // CAROUSEL DATA-API
    // =================

    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {lacuna_lazy_load("js/bootstrap.js[13362:13903]", functionData => eval(functionData))})

    $(window).on('load', function() {
        $('[data-ride="carousel"]').each(function() {lacuna_lazy_load("js/bootstrap.js[13996:14092]", functionData => eval(functionData))})
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function(element, options) {lacuna_lazy_load("js/bootstrap.js[14705:14964]", functionData => eval(functionData))}

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function() {lacuna_lazy_load("js/bootstrap.js[15066:15173]", functionData => eval(functionData))}

    Collapse.prototype.show = function() {lacuna_lazy_load("js/bootstrap.js[15216:16529]", functionData => eval(functionData))}

    Collapse.prototype.hide = function() {lacuna_lazy_load("js/bootstrap.js[16572:17521]", functionData => eval(functionData))}

    Collapse.prototype.toggle = function() {lacuna_lazy_load("js/bootstrap.js[17566:17636]", functionData => eval(functionData))}


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    var old = $.fn.collapse

    $.fn.collapse = function(option) {lacuna_lazy_load("js/bootstrap.js[17774:18244]", functionData => eval(functionData))}

    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[18388:18443]", functionData => eval(functionData))}


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {lacuna_lazy_load("js/bootstrap.js[18584:19335]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function(element) {lacuna_lazy_load("js/bootstrap.js[20001:20064]", functionData => eval(functionData))}

    Dropdown.prototype.toggle = function(e) {lacuna_lazy_load("js/bootstrap.js[20110:21022]", functionData => eval(functionData))}

    Dropdown.prototype.keydown = function(e) {lacuna_lazy_load("js/bootstrap.js[21069:21952]", functionData => eval(functionData))}

    function clearMenus(e) {lacuna_lazy_load("js/bootstrap.js[21981:22451]", functionData => eval(functionData))}

    function getParent($this) {lacuna_lazy_load("js/bootstrap.js[22483:22853]", functionData => eval(functionData))}


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    var old = $.fn.dropdown

    $.fn.dropdown = function(option) {lacuna_lazy_load("js/bootstrap.js[22991:23275]", functionData => eval(functionData))}

    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[23419:23474]", functionData => eval(functionData))}


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {lacuna_lazy_load("js/bootstrap.js[23706:23749]", functionData => eval(functionData))})
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function(element, options) {lacuna_lazy_load("js/bootstrap.js[24518:24911]", functionData => eval(functionData))}

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function(_relatedTarget) {lacuna_lazy_load("js/bootstrap.js[25064:25140]", functionData => eval(functionData))}

    Modal.prototype.show = function(_relatedTarget) {lacuna_lazy_load("js/bootstrap.js[25194:26622]", functionData => eval(functionData))}

    Modal.prototype.hide = function(e) {lacuna_lazy_load("js/bootstrap.js[26663:27307]", functionData => eval(functionData))}

    Modal.prototype.enforceFocus = function() {lacuna_lazy_load("js/bootstrap.js[27355:27688]", functionData => eval(functionData))}

    Modal.prototype.escape = function() {lacuna_lazy_load("js/bootstrap.js[27730:28036]", functionData => eval(functionData))}

    Modal.prototype.hideModal = function() {lacuna_lazy_load("js/bootstrap.js[28081:28274]", functionData => eval(functionData))}

    Modal.prototype.removeBackdrop = function() {lacuna_lazy_load("js/bootstrap.js[28324:28411]", functionData => eval(functionData))}

    Modal.prototype.backdrop = function(callback) {lacuna_lazy_load("js/bootstrap.js[28463:29824]", functionData => eval(functionData))}


    // MODAL PLUGIN DEFINITION
    // =======================

    var old = $.fn.modal

    $.fn.modal = function(option, _relatedTarget) {lacuna_lazy_load("js/bootstrap.js[29966:30421]", functionData => eval(functionData))}

    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[30550:30602]", functionData => eval(functionData))}


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {lacuna_lazy_load("js/bootstrap.js[30733:31280]", functionData => eval(functionData))})

    $(document)
        .on('show.bs.modal', '.modal', function() {lacuna_lazy_load("js/bootstrap.js[31349:31412]", functionData => eval(functionData))})
        .on('hidden.bs.modal', '.modal', function() {lacuna_lazy_load("js/bootstrap.js[31466:31532]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function(element, options) {lacuna_lazy_load("js/bootstrap.js[32189:32408]", functionData => eval(functionData))}

    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false
    }

    Tooltip.prototype.init = function(type, element, options) {lacuna_lazy_load("js/bootstrap.js[32810:33886]", functionData => eval(functionData))}

    Tooltip.prototype.getDefaults = function() {lacuna_lazy_load("js/bootstrap.js[33935:33974]", functionData => eval(functionData))}

    Tooltip.prototype.getOptions = function(options) {lacuna_lazy_load("js/bootstrap.js[34029:34335]", functionData => eval(functionData))}

    Tooltip.prototype.getDelegateOptions = function() {lacuna_lazy_load("js/bootstrap.js[34391:34632]", functionData => eval(functionData))}

    Tooltip.prototype.enter = function(obj) {lacuna_lazy_load("js/bootstrap.js[34678:35125]", functionData => eval(functionData))}

    Tooltip.prototype.leave = function(obj) {lacuna_lazy_load("js/bootstrap.js[35171:35620]", functionData => eval(functionData))}

    Tooltip.prototype.show = function() {lacuna_lazy_load("js/bootstrap.js[35662:38497]", functionData => eval(functionData))}

    Tooltip.prototype.applyPlacement = function(offset, placement) {lacuna_lazy_load("js/bootstrap.js[38566:40446]", functionData => eval(functionData))}

    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {lacuna_lazy_load("js/bootstrap.js[40522:40615]", functionData => eval(functionData))}

    Tooltip.prototype.setContent = function() {lacuna_lazy_load("js/bootstrap.js[40663:40875]", functionData => eval(functionData))}

    Tooltip.prototype.hide = function() {lacuna_lazy_load("js/bootstrap.js[40917:41541]", functionData => eval(functionData))}

    Tooltip.prototype.fixTitle = function() {lacuna_lazy_load("js/bootstrap.js[41587:41806]", functionData => eval(functionData))}

    Tooltip.prototype.hasContent = function() {lacuna_lazy_load("js/bootstrap.js[41854:41892]", functionData => eval(functionData))}

    Tooltip.prototype.getPosition = function() {lacuna_lazy_load("js/bootstrap.js[41941:42197]", functionData => eval(functionData))}

    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {lacuna_lazy_load("js/bootstrap.js[42295:42967]", functionData => eval(functionData))}

    Tooltip.prototype.getTitle = function() {lacuna_lazy_load("js/bootstrap.js[43013:43246]", functionData => eval(functionData))}

    Tooltip.prototype.tip = function() {lacuna_lazy_load("js/bootstrap.js[43287:43359]", functionData => eval(functionData))}

    Tooltip.prototype.arrow = function() {lacuna_lazy_load("js/bootstrap.js[43402:43487]", functionData => eval(functionData))}

    Tooltip.prototype.validate = function() {lacuna_lazy_load("js/bootstrap.js[43533:43683]", functionData => eval(functionData))}

    Tooltip.prototype.enable = function() {lacuna_lazy_load("js/bootstrap.js[43727:43762]", functionData => eval(functionData))}

    Tooltip.prototype.disable = function() {lacuna_lazy_load("js/bootstrap.js[43807:43843]", functionData => eval(functionData))}

    Tooltip.prototype.toggleEnabled = function() {lacuna_lazy_load("js/bootstrap.js[43894:43938]", functionData => eval(functionData))}

    Tooltip.prototype.toggle = function(e) {lacuna_lazy_load("js/bootstrap.js[43983:44173]", functionData => eval(functionData))}

    Tooltip.prototype.destroy = function() {lacuna_lazy_load("js/bootstrap.js[44218:44340]", functionData => eval(functionData))}


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    var old = $.fn.tooltip

    $.fn.tooltip = function(option) {lacuna_lazy_load("js/bootstrap.js[44474:44869]", functionData => eval(functionData))}

    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[45008:45062]", functionData => eval(functionData))}

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================

    var Popover = function(element, options) {lacuna_lazy_load("js/bootstrap.js[45663:45717]", functionData => eval(functionData))}

    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

    Popover.prototype.constructor = Popover

    Popover.prototype.getDefaults = function() {lacuna_lazy_load("js/bootstrap.js[46333:46372]", functionData => eval(functionData))}

    Popover.prototype.setContent = function() {lacuna_lazy_load("js/bootstrap.js[46420:47098]", functionData => eval(functionData))}

    Popover.prototype.hasContent = function() {lacuna_lazy_load("js/bootstrap.js[47146:47205]", functionData => eval(functionData))}

    Popover.prototype.getContent = function() {lacuna_lazy_load("js/bootstrap.js[47253:47476]", functionData => eval(functionData))}

    Popover.prototype.arrow = function() {lacuna_lazy_load("js/bootstrap.js[47519:47596]", functionData => eval(functionData))}

    Popover.prototype.tip = function() {lacuna_lazy_load("js/bootstrap.js[47637:47730]", functionData => eval(functionData))}


    // POPOVER PLUGIN DEFINITION
    // =========================

    var old = $.fn.popover

    $.fn.popover = function(option) {lacuna_lazy_load("js/bootstrap.js[47864:48259]", functionData => eval(functionData))}

    $.fn.popover.Constructor = Popover


    // POPOVER NO CONFLICT
    // ===================

    $.fn.popover.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[48398:48452]", functionData => eval(functionData))}

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {lacuna_lazy_load("js/bootstrap.js[49042:49708]", functionData => eval(functionData))}

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.refresh = function() {lacuna_lazy_load("js/bootstrap.js[49808:50766]", functionData => eval(functionData))}

    ScrollSpy.prototype.process = function() {lacuna_lazy_load("js/bootstrap.js[50813:51701]", functionData => eval(functionData))}

    ScrollSpy.prototype.activate = function(target) {lacuna_lazy_load("js/bootstrap.js[51755:52369]", functionData => eval(functionData))}


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    var old = $.fn.scrollspy

    $.fn.scrollspy = function(option) {lacuna_lazy_load("js/bootstrap.js[52511:52859]", functionData => eval(functionData))}

    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[53008:53064]", functionData => eval(functionData))}


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load', function() {
        $('[data-spy="scroll"]').each(function() {lacuna_lazy_load("js/bootstrap.js[53207:53289]", functionData => eval(functionData))})
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function(element) {lacuna_lazy_load("js/bootstrap.js[53855:53896]", functionData => eval(functionData))}

    Tab.prototype.show = function() {lacuna_lazy_load("js/bootstrap.js[53934:54792]", functionData => eval(functionData))}

    Tab.prototype.activate = function(element, container, callback) {lacuna_lazy_load("js/bootstrap.js[54862:55824]", functionData => eval(functionData))}


    // TAB PLUGIN DEFINITION
    // =====================

    var old = $.fn.tab

    $.fn.tab = function(option) {lacuna_lazy_load("js/bootstrap.js[55942:56201]", functionData => eval(functionData))}

    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[56320:56370]", functionData => eval(functionData))}


    // TAB DATA-API
    // ============

    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {lacuna_lazy_load("js/bootstrap.js[56515:56577]", functionData => eval(functionData))})

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function(element, options) {lacuna_lazy_load("js/bootstrap.js[57154:57576]", functionData => eval(functionData))}

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0
    }

    Affix.prototype.getPinnedOffset = function() {lacuna_lazy_load("js/bootstrap.js[57725:58010]", functionData => eval(functionData))}

    Affix.prototype.checkPositionWithEventLoop = function() {lacuna_lazy_load("js/bootstrap.js[58072:58136]", functionData => eval(functionData))}

    Affix.prototype.checkPosition = function() {lacuna_lazy_load("js/bootstrap.js[58185:59818]", functionData => eval(functionData))}


    // AFFIX PLUGIN DEFINITION
    // =======================

    var old = $.fn.affix

    $.fn.affix = function(option) {lacuna_lazy_load("js/bootstrap.js[59944:60280]", functionData => eval(functionData))}

    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function() {lacuna_lazy_load("js/bootstrap.js[60409:60461]", functionData => eval(functionData))}


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {lacuna_lazy_load("js/bootstrap.js[60595:60887]", functionData => eval(functionData))})
    })

}(jQuery);