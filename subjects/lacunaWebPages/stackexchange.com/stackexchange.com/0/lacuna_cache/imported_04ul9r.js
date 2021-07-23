jQuery.cookie = function(e, t, n) {
    if ("undefined" == typeof t) {
      var i = null;
      if (document.cookie && "" != document.cookie)
        for (var o = document.cookie.split(";"), r = 0; r < o.length; r++) {
          var s = jQuery.trim(o[r]);
          if (s.substring(0, e.length + 1) == e + "=") {
            i = decodeURIComponent(s.substring(e.length + 1));
            break
          }
        }
      return i
    }
    n = n || {}, null === t && (t = "", n.expires = -1);
    var a = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
      var c;
      "number" == typeof n.expires ? (c = new Date, c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires, a = "; expires=" + c.toUTCString()
    }
    var u = n.path ? "; path=" + n.path : "",
      l = n.domain ? "; domain=" + n.domain : "",
      f = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, u, l, f].join("")
  },
  function(e) {
    e.fn.typeWatch = function(t) {
      function n(t, n) {
        var i = e(t.el).val();
        (i.length > o.captureLength && i.toUpperCase() != t.text || n && i.length > o.captureLength) && (t.text = i.toUpperCase(), t.cb(i))
      }

      function i(t) {
        if ("TEXT" == t.type.toUpperCase() || "TEXTAREA" == t.nodeName.toUpperCase()) {
          var i = {
            "timer": null,
            "text": e(t).val().toUpperCase(),
            "cb": o.callback,
            "el": t,
            "wait": o.wait
          };
          o.highlight && e(t).focus(function() {
            this.select()
          });
          var r = function(e) {
            var t = i.wait,
              o = !1;
            13 == e.keyCode && "TEXT" == this.type.toUpperCase() && (t = 1, o = !0);
            var r = function() {
              n(i, o)
            };
            clearTimeout(i.timer), i.timer = setTimeout(r, t)
          };
          e(t).keydown(r)
        }
      }
      var o = e.extend({
        "wait": 750,
        "callback": function() {},
        "highlight": !0,
        "captureLength": 2
      }, t);
      return this.each(function() {
        i(this)
      })
    }
  }(jQuery), window.StackExchange = {}, StackExchange.init = function() {
    var e = function() {
      $(document).keyup(function(e) {
        27 == e.which && $(".error-notification, .popup").fadeOutAndRemove()
      })
    };
    return function(t) {
      StackExchange.options = t, t.serverTimeOffsetSec = t.serverTime - (new Date).getTime() / 1e3, $.ajaxSetup({
        "cache": !1
      }), StackExchange.init.createJqueryExtensions(), $(function() {
        e()
      })
    }
  }(), StackExchange.init.createJqueryExtensions = function() {
    $.fn.extend({
      "fadeOutAndRemove": function() {
        return this.each(function() {
          var e = $(this);
          e.fadeOut("fast", function() {
            e.trigger("removing").remove()
          })
        })
      },
      "center": function() {
        var e = this.parent();
        "static" === e.css("position") && (e = e.offsetParent());
        var t = e.offset(),
          n = $(window);
        return this.css("position", "absolute"), this.css("top", (n.height() - this.height()) / 2 + n.scrollTop() - t.top + "px"), this.css("left", (n.width() - this.width()) / 2 + n.scrollLeft() - t.left + "px"), this
      }
    })
  }, StackExchange.helpers = function() {
    var e, t, n, i = function() {
        var i = function() {
            e = t = null, $("body").removeAttr("style")
          },
          o = $("div.popup");
        o.each(function(n, i) {
          var o = $(i).find(".handle");
          o.length && (o.css({
            "cursor": "move"
          }), o.unbind("mousedown").bind("mousedown", function(n) {
            var o = $(i).offset();
            t = {
              "x": o.left - n.pageX,
              "y": o.top - n.pageY
            }, e = $(i);
            var r = e.offset();
            e.offset(r).offset(r), $("body").attr("style", "cursor:move"), n.preventDefault()
          }))
        }), n || (n = !0, $(document).on("mousemove", function(n) {
          if (e) {
            var i = n.pageY + t.y,
              o = n.pageX + t.x;
            e.offset({
              "top": i,
              "left": o
            })
          }
        }).on("keypress", i).on("mouseup", i))
      },
      o = function() {
        function e() {
          if (!window.localStorage) return !1;
          try {
            if (window.localStorage["gps-probe"] = "1", "1" != window.localStorage["gps-probe"]) return !1;
            window.localStorage.removeItem("gps-probe")
          } catch (e) {
            return !1
          }
          return !0
        }

        function t() {}

        function n(e) {
          t(e);
          var n, i = localStorage[c];
          if (i) {
            var o = JSON.parse(i);
            o.push(e), n = JSON.stringify(o)
          } else n = JSON.stringify([e]);
          localStorage[c] = n
        }

        function i() {
          StackExchange._gps_track && ($.each(StackExchange._gps_track, function(e, t) {
            n(t)
          }), delete StackExchange._gps_track)
        }

        function o() {
          var e = localStorage[c];
          return e ? JSON.parse(e) : []
        }

        function r(e) {
          var t = localStorage[c];
          if (t) {
            for (var n = JSON.parse(t), i = JSON.stringify(e), o = -1, r = 0; r < n.length; r++) {
              var s = JSON.stringify(n[r]);
              if (i == s) {
                o = r;
                break
              }
            }
            if (-1 != o) return n.splice(o, 1), 0 == n.length ? (localStorage.removeItem(c), void 0) : (localStorage[c] = JSON.stringify(n), void 0)
          }
        }

        function s(e) {
          $.isArray(e) || (e = [e]);
          for (var t = 0; t < e.length; t++) {
            var n = JSON.stringify(e[t]);
            u[n] && (e.splice(t, 1), t--)
          }
          for (var t = 0; t < e.length; t++) {
            var n = JSON.stringify(e[t]);
            u[n] = !0
          }
          var i = JSON.stringify(e);
          if (navigator && navigator.sendBeacon) try {
            if (navigator && navigator.sendBeacon("/gps/event", i)) {
              for (var t = 0; t < e.length; t++) {
                r(e[t]);
                var n = JSON.stringify(e[t]);
                delete u[n]
              }
              return
            }
          } catch (o) {}
          $.ajax({
            "type": "POST",
            "url": "/gps/event",
            "data": {
              "data": i
            },
            "success": function() {
              for (var t = 0; t < e.length; t++) r(e[t])
            },
            "complete": function() {
              for (var t = 0; t < e.length; t++) {
                var n = JSON.stringify(e[t]);
                delete u[n]
              }
            }
          })
        }

        function a() {
          var e = o();
          if (e.length > 0) {
            for (var t = (new Date).getTime(), n = [], i = 0; i < e.length && n.length < 20; i++) {
              var a = e[i],
                c = t - a.now;
              0 > c || c > 36e5 ? r(a) : n.push(a)
            }
            n.length > 0 && s(n)
          }
        }
        var c = "gps-pending",
          u = {};
        if (!e()) return function() {};
        i(), a(), $(function() {
          $("a.tour-link").click(function() {
            var e = $(this).data("loc");
            StackExchange.helpers.gps("aboutpage.click", {
              "location": e
            }, !0)
          }), $(".featured-site a").click(function() {
            var e = $(this).closest(".featured-site").data("sid");
            StackExchange.helpers.gps("featured_site.click", {
              "item_site": e
            }, !0)
          })
        });
        var l = function(e, t, i) {
          var o = {
            "evt": e,
            "properties": t || {},
            "now": (new Date).getTime()
          };
          n(o), navigator && navigator.sendBeacon && (i = !1), i ? window.setTimeout(a, 1e4) : a()
        };
        return l
      }(),
      r = {
        "bindMovablePopups": i,
        "addSpinner": function(e, t) {
          $(e).append(r.getSpinnerImg(t))
        },
        "getSpinnerImg": function(e) {
          var t = $('<img class="ajax-loader" src="/content/img/progress-dots.gif" title="loading..." alt="loading..." />');
          return e && t.css(e), t
        },
        "removeSpinner": function() {
          $("img.ajax-loader").remove()
        },
        "showErrorPopup": function(e, t, n) {
          $(".error-notification").remove();
          var i = $('<div class="error-notification supernovabg"><h2>' + t + "</h2>" + (n ? "" : '<span class="error-close">(click on this box to dismiss)</span>') + "</div>"),
            o = function() {
              i.fadeOutAndRemove()
            };
          $(e).append(i), i.click(o).fadeIn("fast"), setTimeout(o, n ? Math.max(2500, 40 * t.length) : 3e4)
        },
        "removeErrorPopup": function() {
          $(".error-notification").fadeOutAndRemove()
        },
        "getHashParams": function() {
          for (var e, t = {}, n = /\+/g, i = /([^&;=]+)=?([^&;]*)/g, o = function(e) {
              return decodeURIComponent(e.replace(n, " "))
            }, r = window.location.hash.substring(1); e = i.exec(r);) t[o(e[1])] = o(e[2]);
          return t
        },
        "DelayedReaction": function(e, t, n) {
          n = n || {};
          var i, o, r = n.always,
            s = function() {
              i = null, e.apply(null, o)
            };
          return {
            "trigger": function() {
              if (o = arguments, r && r.apply(null, o), i) {
                if (!n.sliding) return;
                clearTimeout(i), i = setTimeout(s, t)
              } else i = setTimeout(s, t)
            },
            "cancel": function() {
              i && (clearTimeout(i), i = null)
            }
          }
        },
        "gps": o
      };
    return r
  }(),
  function(e) {
    function t(e, t, n, i, o) {
      this.type = e, this.listener = t, this.scope = n, this.once = i, this.instance = o
    }

    function n() {
      this._events = {}, this._maxListeners = 10
    }
    t.prototype.fire = function(e) {
      return this.listener.apply(this.scope || this.instance, e), this.once ? (this.instance.removeListener(this.type, this.listener, this.scope), !1) : void 0
    }, n.prototype.eachListener = function(e, t) {
      var n = null,
        i = null,
        o = null;
      if (this._events.hasOwnProperty(e))
        for (i = this._events[e], n = 0; n < i.length; n += 1)
          if (o = t.call(this, i[n], n), o === !1) n -= 1;
          else if (o === !0) break;
      return this
    }, n.prototype.addListener = function(e, n, i, o) {
      return this._events.hasOwnProperty(e) || (this._events[e] = []), this._events[e].push(new t(e, n, i, o, this)), this.emit("newListener", e, n, i, o), this._maxListeners && !this._events[e].warned && this._events[e].length > this._maxListeners && ("undefined" != typeof console && console.warn("Possible EventEmitter memory leak detected. " + this._events[e].length + " listeners added. Use emitter.setMaxListeners() to increase limit."), this._events[e].warned = !0), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t, n) {
      return this.addListener(e, t, n, !0)
    }, n.prototype.removeListener = function(e, t, n) {
      return this.eachListener(e, function(i, o) {
        i.listener !== t || n && i.scope !== n || this._events[e].splice(o, 1)
      }), this._events[e] && 0 === this._events[e].length && delete this._events[e], this
    }, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(e) {
      return e && this._events.hasOwnProperty(e) ? delete this._events[e] : e || (this._events = {}), this
    }, n.prototype.listeners = function(e) {
      if (this._events.hasOwnProperty(e)) {
        var t = [];
        return this.eachListener(e, function(e) {
          t.push(e.listener)
        }), t
      }
      return []
    }, n.prototype.emit = function(e) {
      var t = [],
        n = null;
      for (n = 1; n < arguments.length; n += 1) t.push(arguments[n]);
      return this.eachListener(e, function(e) {
        return e.fire(t)
      }), this
    }, n.prototype.setMaxListeners = function(e) {
      return this._maxListeners = e, this
    }, "function" == typeof define && define.amd ? define(function() {
      return n
    }) : e.EventEmitter = n
  }(this), StackExchange.realtime = function() {
    function e(t, r) {
      if (f = r, h) try {
        n("closing WebSocket"), h.close()
      } catch (s) {}
      h || (n("opening WebSocket"), h = "WebSocket" in window ? new WebSocket(t) : new MozWebSocket(t), h.onopen = function() {
        p = 0, n("WebSocket opened"), o(), i()
      }, h.onmessage = function(e) {
        var t = $.parseJSON(e.data);
        d.emit(t.action, t.data)
      }, h.onclose = function() {
        h = null, n("WebSocket closed"), 5 > p && (p++, n("reconnect attempt: " + p), setTimeout(function() {
          e(t)
        }, 5e3 * Math.random()))
      }, h.onerror = function() {
        n("WebSocket failed"), h = null
      })
    }

    function t(e, t, i) {
      n("polling will begin in " + t + " seconds"), setInterval(function() {
        var t = e();
        $.getJSON(t, function(e) {
          var o;
          for (n("received " + e.length + " questions from " + t), o = e.length - 1; o >= 0; o--) i(e[o])
        })
      }, 1e3 * t)
    }

    function n(e) {
      f && console.log(e)
    }

    function i() {
      d.on("hb", function(e) {
        n("heartbeat received; responding"), h.send(e)
      })
    }

    function o() {
      if (null != h && 1 == h.readyState)
        for (var e = 0, t = g.length; t > e; e++) n("sending: " + g[e]), h.send(g[e])
    }

    function r(e) {
      g.push(e), o()
    }

    function s() {
      v || (v = !0, $("#mainArea").delegate("div.question-container a, div.question-container a>img", "click", function(e) {
        if (!e._handled) {
          var t, n = $(this),
            i = n.closest("div.question-container"),
            o = $("#mainArea").data("location"),
            r = i.prevAll("div.question-container").length,
            s = i.data("sid");
          if (void 0 !== o) {
            n.hasClass("realtime-question-url") || n.hasClass("question-link") ? t = 1 : n.hasClass("post-tag") ? t = 2 : n.hasClass("realtime-site-icon") || n.closest(".hot-question-site-icon").length ? t = 3 : n.hasClass("realtime-host") || n.hasClass("question-host") ? t = 4 : n.closest("span").hasClass("owner") && (t = 5);
            var a = {
              "item_type": t,
              "tab": o,
              "position": r + 1,
              "item_site": s
            };
            StackExchange.helpers.gps("posts_hot_network.click", a, !0)
          }
          e._handled = !0
        }
      }))
    }

    function a(n, i, o, a, c, u) {
      s(), "WebSocket" in window || "MozWebSocket" in window ? (h || e(n, c), r(i), d.on(i, function(e) {
        var t = $.parseJSON(e);
        u(t)
      })) : t(o, a, u)
    }

    function c(t, n, i) {
      s(), h || e(t, i);
      var o = n + "-topbar";
      r(o), d.on(o, function(e) {
        StackExchange.topbar.handleRealtimeMessage(e)
      })
    }

    function u(t, n, i, o) {
      ("WebSocket" in window || "MozWebSocket" in window) && (h || e(t, o), r(n), d.on(n, function(e) {
        var t = $.parseJSON(e);
        i(t)
      }))
    }

    function l(e) {
      var t = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        n = new Date(1e3 * e),
        i = ((new Date).getTime() - n.getTime()) / 1e3;
      return 2 > i ? "just now" : 60 > i ? Math.floor(i) + " secs ago" : 120 > i ? "1 min ago" : 3600 > i ? Math.floor(i / 60) + " mins ago" : 7200 > i ? "1 hour ago" : 86400 > i ? Math.floor(i / 3600) + " hours ago" : 172800 > i ? "yesterday" : 259200 > i ? "2 days ago" : t[n.getUTCMonth()] + " " + n.getUTCDate() + " '" + n.getUTCFullYear() % 1e3 + " at " + n.getUTCHours() + ":" + n.getUTCMinutes()
    }
    var f, h, p = 0,
      g = [],
      d = new EventEmitter,
      v = !1;
    return {
      "init": e,
      "subscribeForStatus": u,
      "getRelativeTime": l,
      "subscribeToRealtimeQuestions": a,
      "subscribeToTopBarNotifications": c
    }
  }();