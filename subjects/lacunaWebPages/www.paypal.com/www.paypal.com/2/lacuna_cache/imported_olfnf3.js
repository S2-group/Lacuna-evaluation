/** 
 * open-chat.js v0.0.1
 *
 * Copyright (c) Paypal, Inc. and its affiliates.
 *
 */
"use strict";

function t() {
  this.loadScript = function(t, e) {}, this.doGet = function(t, e) {
    var o = new XMLHttpRequest;
    o.open("GET", t, !0), o.onreadystatechange = function() {
      if (4 == o.readyState || "complete" === o.readyState) switch (o.status) {
        case 200:
          if ("function" == typeof e) try {
            var t = JSON.parse(o.responseText);
            e(t)
          } catch (t) {
            e({}, {
              status: o.status,
              message: "Wrong response"
            })
          }
          break;
        default:
          "function" == typeof e && e({}, {
            status: o.status,
            message: "Chat not available"
          })
      }
    }, o.send()
  }
}! function(n) {
  var a, i = new t,
    s = 0,
    c = "/smartchat/open/chat-meta";
  ! function t() {
    if (document.body) {
      a = document.location.pathname;
      var o = function(t, e) {},
        e = "/smartchat/open/eligibility?intent=SALESCHAT&page=" + a;
      i.doGet(e, function(t, e) {
        if (window.openSalesChat = function() {}, e) {
          if ("object" == typeof e) return
        } else t.eligible && i.doGet(c, o)
      })
    } else ++s < 10 && setTimeout(t, 200)
  }()
}(window);