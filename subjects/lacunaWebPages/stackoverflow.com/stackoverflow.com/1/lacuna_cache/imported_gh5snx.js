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
  }(jQuery), top !== self && 0 !== window.location.pathname.toLowerCase().indexOf("/integrations/embedded")) throw top.location.replace(document.location), $(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[1032:1068]", functionData => eval(functionData))}), alert("For security reasons, framing is not allowed; click OK to remove the frames."), new Error;
if (StackExchange.init = function() {
    function e() {
      $(document).on("click", ".convert-to-post", function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[1288:1624]", functionData => eval(functionData))})
    }

    function t() {
      function e(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[1672:1937]", functionData => eval(functionData))}

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
      $(window).on("storage", function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[2439:2534]", functionData => eval(functionData))});
      try {
        var r = StackExchange.options.user.fkey,
          o = n();
        o.fkey !== r && (StackExchange.options.serverTime > o.time ? t(r, StackExchange.options.serverTime) : e(o.fkey))
      } catch (a) {}
    }

    function n() {
      function e(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[2805:2959]", functionData => eval(functionData))}
      var t = $(".js-footer-category-trigger"),
        n = $(".js-footer"),
        i = $(".js-footer-back"),
        r = $(".js-footer-col");
      t.on("click", function(i) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[3136:3314]", functionData => eval(functionData))}), i.on("click", function(i) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[3343:3455]", functionData => eval(functionData))})
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
          if ("complete" !== document.readyState) return setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[3969:3999]", functionData => eval(functionData))}, 1e3), void 0;
          var t = document.createElement("div");
          t.id = "noscript-warning", t.innerHTML = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[4127:4261]", functionData => eval(functionData))}({
            "siteName": e
          }), document.body.appendChild(t);
          var n = document.getElementById("noscript-css");
          if (!n) return;
          var i = document.createElement("div");
          i.innerHTML = n.innerText, document.head.appendChild(i.getElementsByTagName("style")[0])
        }
      },
      o = function() {
        var e = function(t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[4640:5805]", functionData => eval(functionData))};
        $(document).keyup(function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[5845:5888]", functionData => eval(functionData))}), $("body").mousedown(function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[5923:6681]", functionData => eval(functionData))}), $(document).bind("closePopups", function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[6728:6786]", functionData => eval(functionData))});
        var t = [];
        $(document).on("popupLoad", function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[6857:7147]", functionData => eval(functionData))}).on("popupClosing", function(n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[7180:7683]", functionData => eval(functionData))})
      },
      a = 1,
      s = 2;
    return function(c, l) {
      StackExchange.options = c, StackExchange.settings = l, c.serverTimeOffsetSec = c.serverTime - (new Date).getTime() / 1e3, r(c.site.name), $.ajaxSetup({
        "cache": !1
      }), StackExchange.init.createJqueryExtensions(), c.enableLogging = (c.user.isEmployee || c.isDebugBuild) && "undefined" != typeof console && "undefined" != typeof console.log, $(function() {
        function r() {
          StackExchange.using(StackExchange.options.user.isAnonymous ? "anonymous" : "loggedIn", function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[8254:8355]", functionData => eval(functionData))}, s, c.fullPostfix)
        }
        IsMalwareProxy() && (window.location.href = "https://stackexchange.com/about/malware?host=" + window.location.hostname), o(), t(), e(), n(), Array.from ? r() : StackExchange.using("stacksPolyfills", r, a);
        var u = StackExchange.settings.site.styleCodeAdditionalLang;
        u && StackExchange.ifUsing("prettify", function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[8726:8825]", functionData => eval(functionData))}), StackExchange.scrollPadding.ensureInitialized(), i(), StackExchange.ready(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[8913:10069]", functionData => eval(functionData))})
      })
    }
  }(), StackExchange.debug = {
    "log": function() {},
    "init": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[10166:10716]", functionData => eval(functionData))}
  }, StackExchange.initialized = $.Deferred(), StackExchange.gaInitialized = $.Deferred(), StackExchange.ready = function(e) {
    StackExchange.initialized.done(e)
  }, StackExchange.gaReady = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[10923:10968]", functionData => eval(functionData))}, window.serq)
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
    c = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[12690:12925]", functionData => eval(functionData))},
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
      return i.async = "async", i.src = t ? e : d(e), i.onload = i.onreadystatechange = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[13839:13946]", functionData => eval(functionData))}, i.onerror = function() {
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
      function t() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[14543:14864]", functionData => eval(functionData))}
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
      return i === v ? u = $.when(u, StackExchange.initialized) : i === y && m.resolve(), u.done(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[15809:15830]", functionData => eval(functionData))}).fail(function() {
        StackExchange.debug.log("failed to provide object " + e)
      }), u
    };
  b.setCacheBreakers = function(e) {
    for (var t in e) e.hasOwnProperty(t) && (a[t] = e[t])
  };
  var w = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[16062:16262]", functionData => eval(functionData))};
  StackExchange.using = b, StackExchange.ifUsing = w, StackExchange.loadJsFile = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[16360:16390]", functionData => eval(functionData))}
}(), String.prototype.formatUnicorn = function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[16440:16735]", functionData => eval(functionData))}, String.prototype.truncate = function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[16780:16874]", functionData => eval(functionData))}, String.prototype.splitOnLast = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[16919:17021]", functionData => eval(functionData))}, String.prototype.contains = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17063:17100]", functionData => eval(functionData))}, String.prototype.endsWith || (String.prototype.endsWith = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17172:17235]", functionData => eval(functionData))}), StackExchange.init.createJqueryExtensions = function() {
    var e = StackExchange.helpers;
    $.extend($.expr[":"], {
      "working": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17387:17478]", functionData => eval(functionData))},
      "data": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17512:17781]", functionData => eval(functionData))},
      "containsCI": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17821:17909]", functionData => eval(functionData))},
      "viewport": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[17941:18185]", functionData => eval(functionData))}
    }), $.fn.extend({
      "working": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[18237:18332]", functionData => eval(functionData))},
      "track": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[18360:18733]", functionData => eval(functionData))},
      "fadeOutAndRemove": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[18772:19164]", functionData => eval(functionData))},
      "charCounter": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[19199:21315]", functionData => eval(functionData))},
      "selectRange": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[21353:21687]", functionData => eval(functionData))},
      "addSpinner": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[21721:21811]", functionData => eval(functionData))},
      "addSpinnerAfter": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[21850:21952]", functionData => eval(functionData))},
      "addSpinnerBefore": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[21992:22095]", functionData => eval(functionData))},
      "addStacksSpinner": function(t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22138:22237]", functionData => eval(functionData))},
      "removeSpinner": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22273:22394]", functionData => eval(functionData))},
      "showErrorMessage": function(t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22437:22536]", functionData => eval(functionData))},
      "showErrorPopup": function(t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22577:22676]", functionData => eval(functionData))},
      "showInfoMessage": function(t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22718:22816]", functionData => eval(functionData))},
      "center": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[22846:23579]", functionData => eval(functionData))},
      "enable": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[23608:23852]", functionData => eval(functionData))},
      "disable": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[23882:23922]", functionData => eval(functionData))},
      "checked": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[23953:24048]", functionData => eval(functionData))},
      "loadPopup": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[24081:27521]", functionData => eval(functionData))},
      "asyncLoad": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[27554:28879]", functionData => eval(functionData))},
      "mathjax": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[28909:29036]", functionData => eval(functionData))},
      "elementNodesOnly": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[29075:29172]", functionData => eval(functionData))},
      "scrollIntoView": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[29210:29644]", functionData => eval(functionData))},
      "outerHTML": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[29676:29745]", functionData => eval(functionData))},
      "unadornedButtonClick": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[29792:30248]", functionData => eval(functionData))},
      "addAtEnd": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[30280:30379]", functionData => eval(functionData))},
      "dispatchEvent": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[30419:30772]", functionData => eval(functionData))}
    })
  }, StackExchange.helpers = function() {
    function e(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[30843:30933]", functionData => eval(functionData))}
    var t = function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[30957:31144]", functionData => eval(functionData))},
      n = {
        "addLightbox": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[31192:31305]", functionData => eval(functionData))},
        "bindMovablePopups": t,
        "onClickDraftSave": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[31379:31746]", functionData => eval(functionData))},
        "showMessage": function(e, t, i) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[31789:40662]", functionData => eval(functionData))},
        "suggestedTransientTimeout": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[40716:40858]", functionData => eval(functionData))},
        "showErrorMessage": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[40906:41097]", functionData => eval(functionData))},
        "showErrorPopup": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[41143:41202]", functionData => eval(functionData))},
        "showInfoMessage": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[41249:41470]", functionData => eval(functionData))},
        "showSuccessMessage": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[41520:41782]", functionData => eval(functionData))},
        "showMobileMessage": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[41828:41912]", functionData => eval(functionData))},
        "showBannerMessage": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[41958:42363]", functionData => eval(functionData))},
        "showStacksNotice": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[42411:43674]", functionData => eval(functionData))},
        "showModal": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[43712:45483]", functionData => eval(functionData))},
        "loadModal": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[45521:46082]", functionData => eval(functionData))},
        "showToast": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[46120:48105]", functionData => eval(functionData))},
        "hideToasts": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[48140:48219]", functionData => eval(functionData))},
        "removeMessages": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[48259:48342]", functionData => eval(functionData))},
        "addSpinner": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[48381:48434]", functionData => eval(functionData))},
        "addStacksSpinner": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[48482:48812]", functionData => eval(functionData))},
        "getSpinnerImg": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[48851:49099]", functionData => eval(functionData))},
        "removeSpinner": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[49137:49200]", functionData => eval(functionData))},
        "closePopups": function(e, t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[49240:49386]", functionData => eval(functionData))},
        "enableSubmitButton": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[49430:49460]", functionData => eval(functionData))},
        "disableSubmitButton": function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[49505:49535]", functionData => eval(functionData))},
        "loadTicks": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[49570:50070]", functionData => eval(functionData))},
        "showFancyOverlay": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[50112:50745]", functionData => eval(functionData))},
        "DelayedReaction": function(e, t, n) {
          n = n || {};
          var i, r, o = n.always,
            a = function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[50878:50934]", functionData => eval(functionData))};
          return {
            "trigger": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[50989:51201]", functionData => eval(functionData))},
            "cancel": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[51236:51298]", functionData => eval(functionData))}
          }
        },
        "fireAndForget": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[51359:51567]", functionData => eval(functionData))},
        "updateQueryStringParameter": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[51625:51842]", functionData => eval(functionData))},
        "parseUrl": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[51876:52001]", functionData => eval(functionData))},
        "isEmailAddress": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[52041:52169]", functionData => eval(functionData))},
        "getLikelyErrorMessage": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[52216:52519]", functionData => eval(functionData))},
        "getRejectedMockXhr": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[52563:52656]", functionData => eval(functionData))},
        "submitFormOnEnterPress": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[52704:53657]", functionData => eval(functionData))},
        "isInNetwork": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[53694:54297]", functionData => eval(functionData))},
        "removeParameterFromQueryString": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[54353:54779]", functionData => eval(functionData))},
        "placeCaretAtEnd": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[54820:55146]", functionData => eval(functionData))},
        "hasContentEditable": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[55190:55360]", functionData => eval(functionData))},
        "copyTextToClipboard": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[55405:55557]", functionData => eval(functionData))}
      };
    return n
  }(), StackExchange.switchMobile = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[55628:55808]", functionData => eval(functionData))}, StackExchange.scrollPadding = function() {
    function e() {
      function e(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[55892:56098]", functionData => eval(functionData))}

      function t(e, t) {
        return function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[56151:56343]", functionData => eval(functionData))}
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
      jQuery.fn.animate = t(r, function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[56925:57137]", functionData => eval(functionData))});
      var o = jQuery.fn.scrollTop;
      jQuery.fn.scrollTop = t(o, function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[57219:57404]", functionData => eval(functionData))});
      for (var s = document.body.__proto__; s && !s.hasOwnProperty("scrollIntoView");) s = s.__proto__;
      if (s) {
        var c = s.scrollIntoView;
        s.scrollIntoView = t(c, function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[57604:58142]", functionData => eval(functionData))})
      }
      var l = !1;
      $("body").on("click", "a", function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[58214:58379]", functionData => eval(functionData))}), a.on("hashchange", i), $(function() {
        setTimeout(i, 10), setTimeout(i, 100), setTimeout(i, 1e3)
      })
    }

    function t() {
      var e, t, i, r, o = performance.now ? performance.now.bind(performance) : Date.now.bind(Date),
        s = null,
        c = null,
        l = !1,
        u = StackExchange.helpers.DelayedReaction(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[58735:58765]", functionData => eval(functionData))}, 100, {
          "sliding": !0
        });
      a.on("keydown", function(n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[58844:59084]", functionData => eval(functionData))}), a.on("scroll", function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[59113:59787]", functionData => eval(functionData))})
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
      "getPaddingTop": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[60106:60132]", functionData => eval(functionData))},
      "getPaddingTopMinimal": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[60175:60201]", functionData => eval(functionData))},
      "getWindowScrollTopMinimal": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[60249:60291]", functionData => eval(functionData))},
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

    function r(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[60892:60958]", functionData => eval(functionData))}

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
      "currentRange": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[62390:62423]", functionData => eval(functionData))},
      "forceCheck": function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[62456:62513]", functionData => eval(functionData))}
    }
  }(), jQuery.cookie = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[62561:63567]", functionData => eval(functionData))}, jQuery.expr[":"].regex = function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[63612:63931]", functionData => eval(functionData))}, $.extend($.expr[":"], {
    "containsExact": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[63996:64073]", functionData => eval(functionData))},
    "containsExactCase": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[64118:64167]", functionData => eval(functionData))},
    "containsRegex": function(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[64208:64352]", functionData => eval(functionData))}
  }),
  function(e) {
    e.fn.typeWatch = function(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[64408:65727]", functionData => eval(functionData))}
  }(jQuery),
  function(e) {
    function t(t) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[65775:66541]", functionData => eval(functionData))}

    function n(n, i) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[66564:66771]", functionData => eval(functionData))}
    e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function(i, r) {
      e.fx.step[r] = function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[66957:67347]", functionData => eval(functionData))}
    });
    var i = {
      "transparent": [255, 255, 255]
    }
  }(jQuery), StackExchange.gps = function() {
    function e(e, t, n, i) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[67486:67851]", functionData => eval(functionData))}
    return StackExchange._gps_track = [], window.location.href.indexOf("utm_") >= 0 && StackExchange.ready(function() {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[67970:68679]", functionData => eval(functionData))}), {
      "track": e,
      "sendPending": function(e) {lacuna_lazy_load("lacuna_cache/imported_gh5snx.js[68735:68761]", functionData => eval(functionData))}
    }
  }();