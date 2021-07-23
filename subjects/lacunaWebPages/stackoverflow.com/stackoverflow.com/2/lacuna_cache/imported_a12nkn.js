"use strict";

function IsMalwareProxy() {
  try {
    return window.location.host.endsWith(".kinokrad-co.com") || window.location.host.endsWith(".cryptoo.online")
  } catch (e) {
    return !1
  }
}
if (window.StackExchange = {}, window.jQuery && ! function(e) {
    var t = function(e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        "browser": t[1] || "",
        "version": t[2] || "0"
      }
    };
    if (!e.browser) {
      var n = t(navigator.userAgent),
        i = {};
      n.browser && (i[n.browser] = !0, i.version = n.version), i.chrome ? i.webkit = !0 : i.webkit && (i.safari = !0), e.browser = i
    }
  }(jQuery), top !== self && 0 !== window.location.pathname.toLowerCase().indexOf("/integrations/embedded")) throw top.location.replace(document.location), $(function() {}), alert("For security reasons, framing is not allowed; click OK to remove the frames."), new Error;
if (StackExchange.init = function() {
    function e() {
      $(document).on("click", ".convert-to-post", function(e) {})
    }

    function t() {
      function e(e) {}

      function t(e, t) {
        try {
          var n = e.lastIndexOf("/");
          n >= 0 && (e = e.substr(n + 1)), localStorage.setItem(i, e + "," + t)
        } catch (r) {}
      }

      function n() {
        var e = localStorage.getItem(i);
        if (!e) return {
          "time": 0
        };
        var t = e.split(/,/);
        return {
          "fkey": t[0],
          "time": parseInt(t[1], 10)
        }
      }
      var i = "se:fkey";
      $(window).on("storage", function(t) {});
      try {
        var r = StackExchange.options.user.fkey,
          o = n();
        o.fkey !== r && (StackExchange.options.serverTime > o.time ? t(r, StackExchange.options.serverTime) : e(o.fkey))
      } catch (a) {}
    }

    function n() {
      function e(e) {}
      var t = $(".js-footer-category-trigger"),
        n = $(".js-footer"),
        i = $(".js-footer-back"),
        r = $(".js-footer-col");
      t.on("click", function(i) {}), i.on("click", function(i) {})
    }

    function i() {
      if ("undefined" != typeof CSS && CSS.supports && CSS.supports("(display: grid)")) {
        var e = !1,
          t = !1,
          n = /; rv:(\d+)[^ );]*\) Gecko\//.exec(navigator.userAgent);
        e = t = n && parseInt(n[1], 10) < 57, e && $("body").addClass("no-grid-comments"), t && $("body").addClass("no-grid-post-layout")
      }
    }
    var r = function(e) {
        if (!window.jQuery) {
          if ("complete" !== document.readyState) return setTimeout(function() {}, 1e3), void 0;
          var t = document.createElement("div");
          t.id = "noscript-warning", t.innerHTML = function(e) {}({
            "siteName": e
          }), document.body.appendChild(t);
          var n = document.getElementById("noscript-css");
          if (!n) return;
          var i = document.createElement("div");
          i.innerHTML = n.innerText, document.head.appendChild(i.getElementsByTagName("style")[0])
        }
      },
      o = function() {
        var e = function(t, n) {};
        $(document).keyup(function(t) {}), $("body").mousedown(function(t) {}), $(document).bind("closePopups", function(t) {});
        var t = [];
        $(document).on("popupLoad", function(e) {}).on("popupClosing", function(n) {})
      },
      a = 1,
      s = 2;
    return function(c, l) {
      StackExchange.options = c, StackExchange.settings = l, c.serverTimeOffsetSec = c.serverTime - (new Date).getTime() / 1e3, r(c.site.name), $.ajaxSetup({
        "cache": !1
      }), StackExchange.init.createJqueryExtensions(), c.enableLogging = (c.user.isEmployee || c.isDebugBuild) && "undefined" != typeof console && "undefined" != typeof console.log, $(function() {
        function r() {
          StackExchange.using(StackExchange.options.user.isAnonymous ? "anonymous" : "loggedIn", function() {}, s, c.fullPostfix)
        }
        IsMalwareProxy() && (window.location.href = "https://stackexchange.com/about/malware?host=" + window.location.hostname), o(), t(), e(), n(), Array.from ? r() : StackExchange.using("stacksPolyfills", r, a);
        var u = StackExchange.settings.site.styleCodeAdditionalLang;
        u && StackExchange.ifUsing("prettify", function() {}), StackExchange.scrollPadding.ensureInitialized(), i(), StackExchange.ready(function() {})
      })
    }
  }(), StackExchange.debug = {
    "log": function() {},
    "init": function() {}
  }, StackExchange.initialized = $.Deferred(), StackExchange.gaInitialized = $.Deferred(), StackExchange.ready = function(e) {
    StackExchange.initialized.done(e)
  }, StackExchange.gaReady = function(e) {}, window.serq)
  for (var i = 0; i < window.serq.length; i++) StackExchange.ready(window.serq[i]);
! function() {
  var e, t = {
      "anonymous": "full-anon.js",
      "loggedIn": "full.js",
      "prettify": "prettify-full.js",
      "moderator": "moderator.js",
      "inlineEditing": "full.js",
      "beginEditEvent": "begin-edit-event.js",
      "editor": "wmd.js",
      "externalEditor": ["full-anon.js", "full.js"],
      "autocomplete": "tageditor.js",
      "tagAutocomplete": "tageditor.js",
      "tagEditor": "tageditornew.js",
      "tagSuggestions": "tagsuggestions.js",
      "mobile": "mobile.js",
      "help": "help.js",
      "inlineTagEditing": "inline-tag-editing.js",
      "mathjaxEditing": "mathjax-editing.js",
      "mathjaxEditingBeta": "mathjax-editing.beta.js",
      "revisions": "revisions.js",
      "mockups": ["full-anon.js", "full.js"],
      "schematics": ["full-anon.js", "full.js"],
      "snippets": ["full-anon.js", "full.js"],
      "snippetsJsCodeMirror": "snippet-javascript-codemirror.js",
      "review": "review.js",
      "translation": "full.js",
      "gps": ["full-anon.js", "full.js"],
      "postValidation": "post-validation.js",
      "exploreQuestions": "explore-qlist.js",
      "eventCharts": "events.js",
      "virtualKeyboard": "virtual-keyboard.js",
      "keyboardShortcuts": "keyboard-shortcuts.js",
      "adops": "adops.js",
      "stacksPolyfills": "stacks-polyfills.js",
      "wizardEditor": "wizard-editor.js",
      "ask": "ask.js"
    },
    n = {},
    i = {},
    r = {},
    o = {},
    a = {},
    s = function(e, t) {
      return function(n) {
        var i = e[n];
        return i || (i = e[n] = t(n)), i
      }
    },
    c = function(e) {},
    l = function() {
      if (!e) {
        var t = $("script[src]").filter(function() {
          return /stub.*\.js/.test($(this).attr("src"))
        }).first();
        0 === t.length ? (StackExchange.debug.log("couldn't figure out location of stub.js"), e = "/content/js/") : e = t.attr("src").replace(/\/stub.*\.js.*$/, "/")
      }
      return e
    },
    u = function(e) {
      var t = a["js/" + e];
      return t ? "?v=" + t : (StackExchange.debug.log("no cache breaker for " + e), "")
    },
    d = function(e) {
      return e && StackExchange.options.locale && -1 === e.indexOf("third-party") && (e = e.replace(/^(.*)(\.js)(\?.*)?$/, "$1." + StackExchange.options.locale + "$2$3")), e
    },
    f = function(e, t) {
      var n = $.Deferred(),
        i = document.createElement("script");
      return i.async = "async", i.src = t ? e : d(e), i.onload = i.onreadystatechange = function(e, t) {}, i.onerror = function() {
        n.reject()
      }, $("head")[0].appendChild(i), n.promise()
    },
    p = function(e) {
      var n = t[e];
      if (!n) return $.Deferred().reject().promise();
      if (n instanceof Array) {
        if (0 === n.length) return $.Deferred().reject().promise();
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = i[o];
          if (a) return a
        }
        return h(n[0])
      }
      return h(n)
    },
    h = s(i, function(e) {
      return f(l() + e + u(d(e)))
    }),
    g = s(n, function(e) {
      function t() {}
      var n = $.Deferred(),
        i = StackExchange[e],
        r = 3;
      return i ? n.resolve() : p(e).done(t).fail(n.reject), n.promise()
    }),
    m = $.Deferred(),
    v = 0,
    y = 2,
    b = function(e, n, i, r) {
      if (i = i || v, i === v && "resolved" !== m.state()) return m.done(function() {
        b(e, n)
      }), void 0;
      if (i === y)
        for (var o in t)
          if (t.hasOwnProperty(o)) {
            var a, s = t[o];
            if (s instanceof Array) {
              a = [];
              for (var c = 0; c < s.length; c++) {
                var l = s[c].replace(/^(full(?:-anon)?).js$/, "$1" + (r || "") + ".js");
                a.push(l)
              }
              t[o] = a
            } else t[o] = s.replace(/^(full(?:-anon)?).js$/, "$1" + (r || "") + ".js")
          } var u = g(e);
      return i === v ? u = $.when(u, StackExchange.initialized) : i === y && m.resolve(), u.done(function() {}).fail(function() {
        StackExchange.debug.log("failed to provide object " + e)
      }), u
    };
  b.setCacheBreakers = function(e) {
    for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t])
  };
  var w = function(e, t, n) {};
  StackExchange.using = b, StackExchange.ifUsing = w, StackExchange.loadJsFile = function(e, t) {}
}(), String.prototype.formatUnicorn = function() {}, String.prototype.truncate = function(e, t) {}, String.prototype.splitOnLast = function(e) {}, String.prototype.contains = function(e) {}, String.prototype.endsWith || (String.prototype.endsWith = function(e) {}), StackExchange.init.createJqueryExtensions = function() {
    var e = StackExchange.helpers;
    $.extend($.expr[":"], {
      "working": function(e) {},
      "data": function(e, t, n) {},
      "containsCI": function(e, t, n) {},
      "viewport": function(e) {}
    }), $.fn.extend({
      "working": function(e) {},
      "track": function() {},
      "fadeOutAndRemove": function() {},
      "charCounter": function(t) {},
      "selectRange": function(e, t) {},
      "addSpinner": function(t) {},
      "addSpinnerAfter": function(t) {},
      "addSpinnerBefore": function(t) {},
      "addStacksSpinner": function(t, n) {},
      "removeSpinner": function() {},
      "showErrorMessage": function(t, n) {},
      "showErrorPopup": function(t, n) {},
      "showInfoMessage": function(t, n) {},
      "center": function(e) {},
      "enable": function() {},
      "disable": function() {},
      "checked": function(e) {},
      "loadPopup": function(t) {},
      "asyncLoad": function(e) {},
      "mathjax": function() {},
      "elementNodesOnly": function() {},
      "scrollIntoView": function(e) {},
      "outerHTML": function() {},
      "unadornedButtonClick": function(e, t) {},
      "addAtEnd": function(e) {},
      "dispatchEvent": function(e, t) {}
    })
  }, StackExchange.helpers = function() {
    function e(e, t) {}
    var t = function() {},
      n = {
        "addLightbox": function() {},
        "bindMovablePopups": t,
        "onClickDraftSave": function(e) {},
        "showMessage": function(e, t, i) {},
        "suggestedTransientTimeout": function(e, t) {},
        "showErrorMessage": function(e, t, n) {},
        "showErrorPopup": function(e, t, n) {},
        "showInfoMessage": function(e, t, n) {},
        "showSuccessMessage": function(e, t, n) {},
        "showMobileMessage": function(e, t) {},
        "showBannerMessage": function(e, t) {},
        "showStacksNotice": function(e, t, n) {},
        "showModal": function(e, t) {},
        "loadModal": function(e, t) {},
        "showToast": function(e, t) {},
        "hideToasts": function() {},
        "removeMessages": function(e) {},
        "addSpinner": function(e, t) {},
        "addStacksSpinner": function(e, t, n) {},
        "getSpinnerImg": function(e) {},
        "removeSpinner": function() {},
        "closePopups": function(e, t) {},
        "enableSubmitButton": function(t) {},
        "disableSubmitButton": function(t) {},
        "loadTicks": function(e) {},
        "showFancyOverlay": function(e) {},
        "DelayedReaction": function(e, t, n) {
          n = n || {};
          var i, r, o = n.always,
            a = function() {};
          return {
            "trigger": function() {},
            "cancel": function() {}
          }
        },
        "fireAndForget": function(e) {},
        "updateQueryStringParameter": function(e, t, n) {},
        "parseUrl": function(e) {},
        "isEmailAddress": function(e) {},
        "getLikelyErrorMessage": function(e) {},
        "getRejectedMockXhr": function(e) {},
        "submitFormOnEnterPress": function(e) {},
        "isInNetwork": function(e) {},
        "removeParameterFromQueryString": function(e) {},
        "placeCaretAtEnd": function(e) {},
        "hasContentEditable": function(e) {},
        "copyTextToClipboard": function(e) {}
      };
    return n
  }(), StackExchange.switchMobile = function(e) {}, StackExchange.scrollPadding = function() {
    function e() {
      function e(e) {}

      function t(e, t) {
        return function() {}
      }

      function i() {
        var e = $(":target");
        if (e.length || (location.hash.length > 1 && /edge|msie|trident/i.test(navigator.userAgent) && (e = $(document.getElementsByName(location.hash.substr(1))).first()), e.length)) {
          var t = 1;
          e.is(":empty") && "inline" === e.css("display") && (t += parseInt(e.next().css("margin-top"), 10));
          var i = e.offset().top;
          e.length && Math.abs(a.scrollTop() - i - n) < t && a.scrollTop(i)
        }
      }
      var r = jQuery.fn.animate;
      jQuery.fn.animate = t(r, function(t) {});
      var o = jQuery.fn.scrollTop;
      jQuery.fn.scrollTop = t(o, function() {});
      for (var s = document.body.__proto__; s && !s.hasOwnProperty("scrollIntoView");) s = s.__proto__;
      if (s) {
        var c = s.scrollIntoView;
        s.scrollIntoView = t(c, function(e) {})
      }
      var l = !1;
      $("body").on("click", "a", function() {}), a.on("hashchange", i), $(function() {
        setTimeout(i, 10), setTimeout(i, 100), setTimeout(i, 1e3)
      })
    }

    function t() {
      var e, t, i, r, o = performance.now ? performance.now.bind(performance) : Date.now.bind(Date),
        s = null,
        c = null,
        l = !1,
        u = StackExchange.helpers.DelayedReaction(function() {}, 100, {
          "sliding": !0
        });
      a.on("keydown", function(n) {}), a.on("scroll", function() {})
    }
    var n = 0,
      i = 0,
      r = 0,
      o = !1,
      a = $(window);
    return {
      "setPaddingTop": function(a, s) {
        r = s || 0, n = a + r, i = a, o || (o = !0, e(), /^mac/i.test(navigator.platform) && !/firefox/i.test(navigator.userAgent) && t())
      },
      "getPaddingTop": function() {},
      "getPaddingTopMinimal": function() {},
      "getWindowScrollTopMinimal": function() {},
      "ensureInitialized": function() {
        o || StackExchange.scrollPadding.setPaddingTop(0, 0)
      }
    }
  }(), StackExchange.responsive = function() {
    function e() {
      return a ? $("html").hasClass("html__unpinned-leftnav") ? u : l : null
    }

    function t() {
      if (!a) return "lg";
      var t = "lg";
      return c.matches ? t = "sm" : e().matches && (t = "md"), t
    }

    function n() {
      var e = d,
        n = t();
      n !== e && (d = n, f.forEach(function(t) {
        t(n, e)
      }))
    }

    function i(e) {
      f.push(e)
    }

    function r(e) {}

    function o(e) {
      for (var t = document.querySelectorAll("*[data-can-be][data-is-here-when~='" + e + "']"), n = 0; n < t.length; n++) {
        var i = t[n],
          r = i.dataset.canBe,
          o = document.getElementById(r);
        if (o) {
          i.childNodes.length && StackExchange.debug.log("can-be target for id " + r + " at size '" + e + "' is not empty");
          var a = Array.prototype.slice.call(o.childNodes);
          a.forEach(function(e) {
            p.indexOf(e.nodeType) >= 0 && i.appendChild(e)
          }), o.removeAttribute("id"), o.dataset.canBe = r, delete i.dataset.canBe, i.id = r
        } else StackExchange.debug.log("no element with id " + r + " found")
      }
    }
    var a = $("html").hasClass("html__responsive"),
      s = {
        "S": 640,
        "L": 980,
        "L_UNPINNED": 816
      };
    if (a) {
      var c = matchMedia("(max-width: " + s.S + "px)"),
        l = matchMedia("(max-width: " + s.L + "px)"),
        u = matchMedia("(max-width: " + s.L_UNPINNED + "px)");
      c.addListener(n), l.addListener(n), u.addListener(n)
    }
    var d = null,
      f = [],
      p = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.COMMENT_NODE];
    return i(o), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : setTimeout(n, 0), {
      "addBreakpointListener": i,
      "removeBreakpointListener": r,
      "currentRange": function() {},
      "forceCheck": function() {}
    }
  }(), jQuery.cookie = function(e, t, n) {}, jQuery.expr[":"].regex = function(e, t, n) {}, $.extend($.expr[":"], {
    "containsExact": function(e, t, n) {},
    "containsExactCase": function(e, t, n) {},
    "containsRegex": function(e, t, n) {}
  }),
  function(e) {
    e.fn.typeWatch = function(t) {}
  }(jQuery),
  function(e) {
    function t(t) {}

    function n(n, i) {}
    e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function(i, r) {
      e.fx.step[r] = function(e) {}
    });
    var i = {
      "transparent": [255, 255, 255]
    }
  }(jQuery), StackExchange.gps = function() {
    function e(e, t, n, i) {}
    return StackExchange._gps_track = [], window.location.href.indexOf("utm_") >= 0 && StackExchange.ready(function() {}), {
      "track": e,
      "sendPending": function(e) {}
    }
  }();