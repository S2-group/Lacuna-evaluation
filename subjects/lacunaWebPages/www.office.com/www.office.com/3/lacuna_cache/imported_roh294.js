var pmgControls = {},
  pmgUtils = {};
if (pmgUtils.WindowWidth = null, pmgUtils.isIE = function() {
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
        l = null;
      $(n).on("click", null), $(a).on("click", null), s.on("keyup", null), s.on("blur", null), $(e.skipNavigationTabPlaceholder).on("focus", null)
    } catch (e) {
      console.log(e)
    }
  }, pmgControls.FatFooter = function(e) {
    var n = null;
    $(e).on("click", null), $(e).on("keyup", null)
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