var pmgControls = {},
  pmgUtils = {};
if (pmgUtils.WindowWidth = function() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }, pmgUtils.isIE = function() {
    var e = navigator.userAgent.toLowerCase(),
      n = -1 != e.indexOf("msie") && parseInt(e.split("msie")[1]);
    return n || -1 == e.indexOf("trident/7.0") || (n = 11), n
  }, pmgControls.CategoryHeader = function(e) {
    try {
      var n = e.categoryMenuLink,
        o = e.headerItem,
        t = e.menu,
        a = e.categoryHeaderLogo,
        i = e.menuSection,
        d = e.allMenus,
        s = $(e.skipNavigation + " a"),
        r = $(e.skipNavigation),
        l = function(e, n, o, t) {
          n.find("svg").attr("class", ""), n.removeClass("pmg-selected"), o.addClass("hidden"), o.off("click"), o.off("keyup"), e.attr("aria-expanded", "false"), e.attr("ms.interactiontype", "14"), $("body").off("click.categoryheader"), Accessibility.FocusRelease(t)
        };
      $(n).on("click", function(e) {
        var a = $(this),
          i = $(o),
          s = $(d),
          r = $(this).parent(),
          c = r.find(t),
          g = c.hasClass("hidden");
        l(a, i, s, c), g && (a.attr("aria-expanded", "true"), a.attr("ms.interactiontype", "15"), r.find("svg").attr("class", "flipped-upside-down"), r.addClass("pmg-selected"), c.removeClass("hidden"), c.on("click", function(e) {
          e.stopPropagation()
        }), c.on("keyup", function(e) {
          27 == e.keyCode && l(a, i, s, c)
        }), $(n).on("keyup", function(e) {
          27 == e.keyCode && l(a, i, s, c)
        }), $("body").on("click.categoryheader", function() {
          l(a, i, s, c)
        }), Accessibility.FocusTrap(c)), e.stopPropagation()
      }), $(a).on("click", function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          var n = $(this),
            o = n.parent(),
            t = o.find(i);
          t.is(":hidden") ? (t.hide(), t.slideDown("normal", function() {
            n.find("svg").attr("class", "flipped-upside-down")
          })) : t.slideUp("normal", function() {
            t.attr("style", ""), n.find("svg").attr("class", "")
          })
        }
      }), s.on("keyup", function(n) {
        13 == n.keyCode ? ($(e.firstBodyLink).focus(), r.addClass("hidden"), $(e.skipNavigationTabPlaceholder).attr("tabindex", "0")) : 27 == n.keyCode && (r.addClass("hidden"), $(e.skipNavigationTabPlaceholder).attr("tabindex", "0"))
      }), s.on("blur", function() {
        r.addClass("hidden"), $(e.skipNavigationTabPlaceholder).attr("tabindex", "0")
      }), $(e.skipNavigationTabPlaceholder).on("focus", function() {
        r.removeClass("hidden"), s.focus(), $(e.skipNavigationTabPlaceholder).attr("tabindex", "-1")
      })
    } catch (e) {
      console.log(e)
    }
  }, pmgControls.FatFooter = function(e) {
    var n = function(e) {
      var n = $(e).parent(),
        o = n.find(".pmg-expand-control"),
        t = n.find(".pmg-collapse-control"),
        a = n.find(".pmg-footer-accordion-content"),
        i = n.find(".pmg-footer-accordion-header");
      a.is(":hidden"), pmgUtils.WindowWidth();
      $(e).hasClass("pmg-footer-expanded") ? a.slideUp({
        complete: function() {
          o.removeClass("hidden"), t.addClass("hidden"), a.addClass("hide-xs"), i.removeClass("pmg-footer-expanded"), a.removeClass("pmg-footer-expanded")
        }
      }) : a.slideDown({
        complete: function() {
          o.addClass("hidden"), t.removeClass("hidden"), a.removeClass("hide-xs"), i.addClass("pmg-footer-expanded"), a.addClass("pmg-footer-expanded")
        }
      })
    };
    $(e).on("click", function() {
      n(this)
    }), $(e).on("keyup", function(e) {
      13 == e.which && n(this)
    })
  }, $(function() {
    pmgControls.CategoryHeader({
      categoryHeaderSection: ".pmg-category-header",
      categoryHeaderSectionPlaceholder: ".pmg-category-header-placeholder",
      categoryMenuLink: ".pmg-category-header .pmg-menu-link",
      headerItem: ".pmg-header-item",
      menu: ".pmg-menu",
      categoryHeaderLogo: ".pmg-category-header .pmg-category-header-logo",
      menuSection: ".pmg-header-item",
      allMenus: ".pmg-category-header .pmg-menu",
      skipNavigation: ".pmg-skip-navigation-flyout",
      firstBodyLink: ".first-body-link",
      categoryLogoLink: ".pmg-category-header .pmg-category-header-logo .pmg-category-header-logo-link",
      skipNavigationTabPlaceholder: "#pmg-category-header--skip-navigation-flyout-tab-placeholder"
    }), pmgControls.FatFooter(".pmg-footer-expand-collapse"), pmgUtils.isIE() && $("html").addClass("ie" + pmgUtils.isIE())
  }), window.external && /Edge/.test(navigator.userAgent) && "getHostEnvironmentValue" in window.external) {
  var cloudOsGetHostEnvironmentKey = "os-sku",
    cloudOsGetHostEnvironmentValues = ["178", "179"],
    externalFunctions = window.external,
    result = externalFunctions.getHostEnvironmentValue(cloudOsGetHostEnvironmentKey);
  !result || -1 === result.indexOf(cloudOsGetHostEnvironmentValues[0]) && -1 === result.indexOf(cloudOsGetHostEnvironmentValues[1]) || $("#pmgLnkDownloads").hide()
}