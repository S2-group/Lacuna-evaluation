! function(e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var i = t();
    for (var n in i)("object" == typeof exports ? exports : e)[n] = i[n]
  }
}(this, function() {
  return function(e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.i = null, t.d = null, t.n = null, t.o = null, t.p = "", t(t.s = 30)
  }([function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e[e.Unspecified = 0] = "Unspecified", e[e.String = 1] = "String", e[e.Int64 = 2] = "Int64", e[e.Double = 3] = "Double", e[e.Boolean = 4] = "Boolean"
      }(t.AWTPropertyType || (t.AWTPropertyType = {})),
      function(e) {
        e[e.NotSet = 0] = "NotSet", e[e.DistinguishedName = 1] = "DistinguishedName", e[e.GenericData = 2] = "GenericData", e[e.IPV4Address = 3] = "IPV4Address", e[e.IPv6Address = 4] = "IPv6Address", e[e.MailSubject = 5] = "MailSubject", e[e.PhoneNumber = 6] = "PhoneNumber", e[e.QueryString = 7] = "QueryString", e[e.SipAddress = 8] = "SipAddress", e[e.SmtpAddress = 9] = "SmtpAddress", e[e.Identity = 10] = "Identity", e[e.Uri = 11] = "Uri", e[e.Fqdn = 12] = "Fqdn", e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
      }(t.AWTPiiKind || (t.AWTPiiKind = {})),
      function(e) {
        e[e.NotSet = 0] = "NotSet", e[e.GenericContent = 1] = "GenericContent"
      }(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {})),
      function(e) {
        e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Immediate_sync = 5] = "Immediate_sync"
      }(t.AWTEventPriority || (t.AWTEventPriority = {})),
      function(e) {
        e[e.NonRetryableStatus = 1] = "NonRetryableStatus", e[e.QueueFull = 3] = "QueueFull"
      }(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {})),
      function(e) {
        e[e.InvalidEvent = 1] = "InvalidEvent", e[e.SizeLimitExceeded = 2] = "SizeLimitExceeded", e[e.KillSwitch = 3] = "KillSwitch"
      }(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}))
  }, function(e, t, i) {
    "use strict";

    function n(e) {
      var t = new W.Int64("0");
      return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
    }

    function r() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(I, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16)
      })
    }

    function o(e) {
      return "string" == typeof e
    }

    function s(e) {
      return "number" == typeof e
    }

    function a(e) {
      return "boolean" == typeof e
    }

    

    function h(e) {
      var t = e.indexOf("-");
      return t > -1 ? e.substring(0, t) : ""
    }

    

    function f() {
      return null === b && (b = "undefined" != typeof Uint8Array && !w() && !g()), b
    }

    function p(e) {
      return !(!s(e) || !(e >= 1 && e <= 3 || 5 === e))
    }

    function l(e, i) {
      if (!t.PropertyNameRegex.test(e) || void 0 === i || null === i || "" === i) return null;
      if (o(i) || s(i) || a(i)) i = {
        value: i,
        type: _.AWTPropertyType.Unspecified
      };
      else if (void 0 === i.value || null === i.value || "" === i.value || !o(i.value) && !s(i.value) && !a(i.value)) return null;
      return i.type = A(i.value, i.type), i.type ? i.pii > 0 && i.cc > 0 ? null : i.pii ? S(i.pii) ? i : null : i.cc ? E(i.cc) ? i : null : i : null
    }

    function d(e) {
      return e.getUTCFullYear() + "-" + y(e.getUTCMonth() + 1) + "-" + y(e.getUTCDate()) + "T" + y(e.getUTCHours()) + ":" + y(e.getUTCMinutes()) + ":" + y(e.getUTCSeconds()) + "." + T(e.getUTCMilliseconds()) + "Z"
    }

    function v() {
      if (null === C) {
        var e = new XMLHttpRequest;
        C = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest
      }
      return C
    }

    function g() {
      return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product
    }

    function y(e) {
      return e < 10 ? "0" + e : e.toString()
    }

    function T(e) {
      return e < 10 ? "00" + e : e < 100 ? "0" + e : e.toString()
    }

    function A(e, t) {
      return P(t) && t !== _.AWTPropertyType.Unspecified ? t === _.AWTPropertyType.String && "string" == typeof e ? t : t !== _.AWTPropertyType.Double && t !== _.AWTPropertyType.Int64 || "number" != typeof e ? t === _.AWTPropertyType.Boolean && "boolean" == typeof e ? t : void 0 : t === _.AWTPropertyType.Int64 && e % 1 != 0 ? null : t : m(e)
    }

    function m(e) {
      switch (typeof e) {
        case "string":
          return _.AWTPropertyType.String;
        case "boolean":
          return _.AWTPropertyType.Boolean;
        case "number":
          return _.AWTPropertyType.Double
      }
      return _.AWTPropertyType.Unspecified
    }

    

    

    function P(e) {
      return !!(s(e) && e >= 0 && e <= 4)
    }

    function w() {
      if ("undefined" != typeof navigator && navigator.userAgent) {
        var e = navigator.userAgent.toLowerCase();
        if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0) return !0
      }
      return !1
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var W = i(4),
      _ = i(0),
      I = /[xy]/g,
      O = 621355968e5,
      L = 1e4;
    t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/, t.EventNameDotRegex = /\./g, t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/, t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";
    var R = null,
      b = null,
      C = null;
    t.numberToBondInt64 = n, t.newGuid = r, t.isString = o, t.isNumber = s, t.isBoolean = a, t.msToTicks = u, t.getTenantId = h, t.isBeaconsSupported = c, t.isUint8ArrayAvailable = f, t.isPriority = p, t.sanitizeProperty = l, t.getISOString = d, t.useXDomainRequest = v, t.isReactNative = g
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      
      return e.addNotificationListener = function(e) {
        this.listeners.push(e)
      }, e.removeNotificationListener = null, e.eventsSent = function(e) {
        for (var t = this, i = this, n = 0; n < this.listeners.length; ++n) ! function(n) {
          i.listeners[n].eventsSent && setTimeout(function() {
            return t.listeners[n].eventsSent(e)
          }, 0)
        }(n)
      }, e.eventsDropped = null, e.eventsRetrying = null, e.eventsRejected = null, e.listeners = [], e
    }();
    t.default = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(14),
      r = i(0),
      o = i(28),
      s = i(10),
      a = i(5),
      u = i(11),
      h = i(1),
      c = function() {
        
        return e.setEventsHandler = null, e.getEventsHandler = null, e.scheduleTimer = function() {
          var e = this,
            t = this.r[this.a][2];
          this.u < 0 && t >= 0 && !this._ && (this.t.hasEvents() ? (0 === t && this.f > 0 && (t = 1), this.u = setTimeout(function() {
            return e.h()
          }, t * (1 << this.f) * 1e3)) : this.v = 0)
        }, e.initialize = function(e) {
          var t = this;
          this.y = !0, this.T = e, this.t = new o.default(e.collectorUri, e.cacheMemorySizeLimitInNumberOfEvents, e.httpXHROverride), this.g(), s.default.initialize(null)
        }, e.setTransmitProfile = null, e.loadTransmitProfiles = null, e.sendEvent = function(e) {
          this.y && (this.f > 0 && e.priority === r.AWTEventPriority.Immediate_sync && (e.priority = r.AWTEventPriority.High), this.t.addEvent(e), this.scheduleTimer())
        }, e.flush = null, e.pauseTransmission = null, e.resumeTransmision = null, e.flushAndTeardown = null, e.backOffTransmission = null, e.clearBackOff = function() {
          this.f > 0 && (this.f = 0, this.clearTimeout(), this.scheduleTimer())
        }, e.S = null, e.clearTimeout = null, e.h = function() {
          var e = r.AWTEventPriority.High;
          this.v++, this.v * this.r[this.a][2] === this.r[this.a][0] ? (e = r.AWTEventPriority.Low, this.v = 0) : this.v * this.r[this.a][2] === this.r[this.a][1] && (e = r.AWTEventPriority.Normal), this.t.sendEventsForPriorityAndAbove(e), this.u = -1, this.scheduleTimer()
        }, e.g = function() {
          this.r = {}, this.r[n.AWT_REAL_TIME] = [4, 2, 1], this.r[n.AWT_NEAR_REAL_TIME] = [12, 6, 3], this.r[n.AWT_BEST_EFFORT] = [36, 18, 9]
        }, e.y = !1, e.a = n.AWT_REAL_TIME, e.u = -1, e.f = 0, e._ = !1, e.v = 0, e.A = 0, e
      }();
    t.default = c
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      function e(e) {
        this.low = 0, this.high = 0, this.low = parseInt(e, 10), this.low < 0 && (this.high = -1)
      }
      return e.prototype.I = null, e
    }();
    t.Int64 = n;
    var r = function() {
      function e(e) {
        this.low = 0, this.high = 0, this.low = parseInt(e, 10)
      }
      return e.prototype.I = null, e
    }();
    t.UInt64 = r;
    var o = function() {
      
      return e.P = function(e) {
        return this.W(e)
      }, e.W = function(e) {
        return 255 & e
      }, e.B = null, e.w = function(e) {
        return 4294967295 & e
      }, e
    }();
    t.Number = o
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(1),
      r = i(0),
      o = function() {
        function e(e) {
          this.C = {
            name: "",
            properties: {}
          }, e && this.setName(e)
        }
        return e.prototype.setName = function(e) {
          this.C.name = e
        }, e.prototype.getName = null, e.prototype.setType = null, e.prototype.getType = null, e.prototype.setTimestamp = null, e.prototype.getTimestamp = null, e.prototype.setEventPriority = null, e.prototype.getEventPriority = null, e.prototype.setProperty = function(e, t, i) {
          void 0 === i && (i = r.AWTPropertyType.Unspecified);
          var o = {
            value: t,
            type: i,
            pii: r.AWTPiiKind.NotSet,
            cc: r.AWTCustomerContentKind.NotSet
          };
          if (null === (o = n.sanitizeProperty(e, o))) return void delete this.C.properties[e];
          this.C.properties[e] = o
        }, e.prototype.setPropertyWithPii = null, e.prototype.setPropertyWithCustomerContent = null, e.prototype.getPropertyMap = function() {
          return this.C.properties
        }, e.prototype.getEvent = function() {
          return this.C
        }, e
      }();
    t.default = o
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.MSACID = 1] = "MSACID", e[e.MSAPUID = 2] = "MSAPUID", e[e.ANID = 3] = "ANID", e[e.OrgIdCID = 4] = "OrgIdCID", e[e.OrgIdPUID = 5] = "OrgIdPUID", e[e.UserObjectId = 6] = "UserObjectId", e[e.Skype = 7] = "Skype", e[e.Yammer = 8] = "Yammer", e[e.EmailAddress = 9] = "EmailAddress", e[e.PhoneNumber = 10] = "PhoneNumber", e[e.SipAddress = 11] = "SipAddress", e[e.MUID = 12] = "MUID"
      }(t.AWTUserIdType || (t.AWTUserIdType = {})),
      function(e) {
        e[e.Started = 0] = "Started", e[e.Ended = 1] = "Ended"
      }(t.AWTSessionState || (t.AWTSessionState = {}))
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(1),
      r = "MicrosoftApplicationsTelemetryDeviceId",
      o = "MicrosoftApplicationsTelemetryFirstLaunchTime",
      s = {
        MSIE: "MSIE",
        CHROME: "Chrome",
        FIREFOX: "Firefox",
        SAFARI: "Safari",
        EDGE: "Edge",
        ELECTRON: "Electron",
        SKYPE_SHELL: "SkypeShell",
        PHANTOMJS: "PhantomJS",
        OPERA: "Opera"
      },
      a = {
        WINDOWS: "Windows",
        MACOSX: "Mac OS X",
        WINDOWS_PHONE: "Windows Phone",
        WINDOWS_RT: "Windows RT",
        IOS: "iOS",
        ANDROID: "Android",
        LINUX: "Linux",
        UNKNOWN: "Unknown"
      },
      u = {
        WIN: /(windows|win32)/i,
        WINRT: / arm;/i,
        WINPHONE: /windows\sphone\s\d+\.\d+/i,
        OSX: /(macintosh|mac os x)/i,
        IOS: /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
        LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
        ANDROID: /android/i
      },
      h = {
        5.1: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        "10.0": "10"
      },
      c = function() {
        
        return e.addPropertyStorageOverride = function(e) {
          return !!e && (this.b = e, !0)
        }, e.autoCollect = function(e, t, i) {
          if (this.O = e, this.R = t, this.D(), i || "undefined" == typeof navigator || (i = navigator.userAgent || ""), this.N(i), this.R && !this.b) return this.M(r), void this.M(o);
          (this.b || this.U && !this.R) && this.k()
        }, e.checkAndSaveDeviceId = function(e) {
          e && (this.x(r) !== e && (this.L(r, e), this.L(o, n.getISOString(new Date))), this.F(this.x(o)))
        }, e.k = function() {
          var e = this.x(r);
          e ? this.F(this.x(o)) : (e = n.newGuid(), this.checkAndSaveDeviceId(e)), this.O.setDeviceId(e)
        }, e.D = function() {
          "undefined" != typeof document && document.documentElement && this.O.setAppLanguage(document.documentElement.lang), "undefined" != typeof navigator && this.O.setUserLanguage(navigator.userLanguage || navigator.language);
          var e = (new Date).getTimezoneOffset(),
            t = e % 60,
            i = (e - t) / 60,
            n = "+";
          i > 0 && (n = "-"), i = Math.abs(i), t = Math.abs(t), this.O.setUserTimeZone(n + (i < 10 ? "0" + i : i.toString()) + ":" + (t < 10 ? "0" + t : t.toString()))
        }, e.N = function(e) {
          if (e) {
            var t = this.q(e);
            this.O.setDeviceBrowserName(t), this.O.setDeviceBrowserVersion(this.H(e, t));
            var i = this.Q(e);
            this.O.setDeviceOsName(i), this.O.setDeviceOsVersion(this.z(e, i))
          }
        }, e.q = function(e) {
          return this.j("OPR/", e) ? s.OPERA : this.j(s.PHANTOMJS, e) ? s.PHANTOMJS : this.j(s.EDGE, e) ? s.EDGE : this.j(s.ELECTRON, e) ? s.ELECTRON : this.j(s.CHROME, e) ? s.CHROME : this.j("Trident", e) ? s.MSIE : this.j(s.FIREFOX, e) ? s.FIREFOX : this.j(s.SAFARI, e) ? s.SAFARI : this.j(s.SKYPE_SHELL, e) ? s.SKYPE_SHELL : "Unknown"
        }, e.F = function(e) {
          if (!isNaN(e)) {
            var t = new Date;
            t.setTime(parseInt(e, 10)), e = n.getISOString(t)
          }
          this.firstLaunchTime = e
        }, e.j = function(e, t) {
          return t.indexOf(e) > -1
        }, e.H = function(e, t) {
          return t === s.MSIE ? this.K(e) : this.G(t, e)
        }, e.K = null, e.G = function(e, t) {
          e === s.SAFARI && (e = "Version");
          var i = t.match(new RegExp(e + "/([\\d,.]+)"));
          return i ? i[1] : "Unknown"
        }, e.Q = function(e) {
          return e.match(u.WINPHONE) ? a.WINDOWS_PHONE : e.match(u.WINRT) ? a.WINDOWS_RT : e.match(u.IOS) ? a.IOS : e.match(u.ANDROID) ? a.ANDROID : e.match(u.LINUX) ? a.LINUX : e.match(u.OSX) ? a.MACOSX : e.match(u.WIN) ? a.WINDOWS : "Unknown"
        }, e.z = function(e, t) {
          return t === a.WINDOWS ? this.V(e, "Windows NT") : t === a.ANDROID ? this.V(e, t) : t === a.MACOSX ? this.X(e) : "Unknown"
        }, e.V = null, e.X = function(e) {
          var t = e.match(new RegExp(a.MACOSX + " ([\\d,_,.]+)"));
          if (t) {
            var i = t[1].replace(/_/g, ".");
            if (i) {
              var n = this.Z(i);
              return n ? i.split(n)[0] : i
            }
          }
          return "Unknown"
        }, e.Z = function(e) {
          return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null
        }, e.L = function(e, t) {
          if (this.b) this.b.setProperty(e, t);
          else if (this.U) {
            var i = new Date;
            i.setTime(i.getTime() + 31536e6);
            var n = "expires=" + i.toUTCString();
            document.cookie = e + "=" + t + "; " + n
          }
        }, e.x = function(e) {
          if (this.b) return this.b.getProperty(e) || "";
          if (this.U) {
            e += "=";
            for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
              for (var n = t[i], r = 0;
                " " === n.charAt(r);) r++;
              if (n = n.substring(r), 0 === n.indexOf(e)) return n.substring(e.length, n.length)
            }
          }
          return ""
        }, e.M = null, e.R = !1, e.U = "undefined" != typeof document && void 0 !== document.cookie, e
      }();
    t.default = c
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(7),
      r = i(0),
      o = i(6),
      s = function() {
        function e(e, t) {
          this.J = e, this.Y = t
        }
        return e.prototype.setAppId = null, e.prototype.setAppVersion = null, e.prototype.setAppLanguage = function(e) {
          this.$("AppInfo.Language", e)
        }, e.prototype.setDeviceId = function(e) {
          this.J && (n.default.checkAndSaveDeviceId(e), this.$("DeviceInfo.Id", e))
        }, e.prototype.setDeviceOsName = function(e) {
          this.J && this.$("DeviceInfo.OsName", e)
        }, e.prototype.setDeviceOsVersion = function(e) {
          this.J && this.$("DeviceInfo.OsVersion", e)
        }, e.prototype.setDeviceBrowserName = function(e) {
          this.J && this.$("DeviceInfo.BrowserName", e)
        }, e.prototype.setDeviceBrowserVersion = function(e) {
          this.J && this.$("DeviceInfo.BrowserVersion", e)
        }, e.prototype.setDeviceMake = null, e.prototype.setDeviceModel = null, e.prototype.setUserId = null, e.prototype.setUserAdvertisingId = null, e.prototype.setUserTimeZone = function(e) {
          this.$("UserInfo.TimeZone", e)
        }, e.prototype.setUserLanguage = function(e) {
          this.$("UserInfo.Language", e)
        }, e.prototype.$ = function(e, t) {
          "string" == typeof t && this.Y.setProperty(e, t)
        }, e.prototype.ee = null, e
      }();
    t.default = s
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(21),
      r = i(0),
      o = i(2),
      s = i(1),
      a = function() {
        
        return e.getPayloadBlob = function(e, t) {
          var i, a = new n.IO.MemoryStream,
            u = new n.CompactBinaryProtocolWriter(a);
          u.te(n.ne.ie, 3, null), u.re(t, n.ne.oe, n.ne.se);
          for (var h in e)
            if (e.hasOwnProperty(h)) {
              u.ae(h);
              var c = e[h];
              u.ue(1, n.ne.de), u.te(n.ne.oe, 2, null), u.ae("act_default_source"), u.te(n.ne.oe, 5, null), u.ae(s.newGuid()), u.te(n.ne._e, 6, null), u.le(s.numberToBondInt64(Date.now())), u.te(n.ne.se, 8, null);
              var f = a.ce().length + 1;
              u.ue(e[h].length, n.ne.de);
              for (var p = a.ce().length - f, l = 0; l < c.length; ++l) {
                var d = a.ce().length;
                if (this.writeEvent(c[l], u), a.ce().length - d > 2936012) o.default.eventsRejected([c[l]], r.AWTEventsRejectedReason.SizeLimitExceeded), c.splice(l--, 1), a.ce().splice(d), this.pe(c.length, a, p, f);
                else if (a.ce().length > 2936012) {
                  a.ce().splice(d), i || (i = {}), e[h] = c.splice(0, l), i[h] = c, this.pe(e[h].length, a, p, f);
                  break
                }
              }
              u.fe(!1)
            } return u.fe(!1), {
            payloadBlob: a.ce(),
            remainingRequest: i
          }
        }, e.pe = null, e.writeEvent = function(e, t) {
          t.te(n.ne.oe, 1, null), t.ae(e.id), t.te(n.ne._e, 3, null), t.le(s.numberToBondInt64(e.timestamp)), t.te(n.ne.oe, 5, null), t.ae(e.type), t.te(n.ne.oe, 6, null), t.ae(e.name);
          var i = {},
            o = 0,
            a = {},
            u = 0,
            h = {},
            c = 0,
            f = {},
            p = 0,
            l = {},
            d = 0,
            v = {},
            g = 0;
          for (var y in e.properties)
            if (e.properties.hasOwnProperty(y)) {
              var T = e.properties[y];
              if (T.cc > 0) v[y] = T, g++;
              else if (T.pii > 0) l[y] = T, d++;
              else switch (T.type) {
                case r.AWTPropertyType.String:
                  i[y] = T.value, o++;
                  break;
                case r.AWTPropertyType.Int64:
                  a[y] = T.value, u++;
                  break;
                case r.AWTPropertyType.Double:
                  h[y] = T.value, c++;
                  break;
                case r.AWTPropertyType.Boolean:
                  f[y] = T.value, p++
              }
            } if (o) {
            t.te(n.ne.ie, 13, null), t.re(o, n.ne.oe, n.ne.oe);
            for (var y in i)
              if (i.hasOwnProperty(y)) {
                var A = i[y];
                t.ae(y), t.ae(A.toString())
              }
          }
          if (d) {
            t.te(n.ne.ie, 30, null), t.re(d, n.ne.oe, n.ne.de);
            for (var y in l)
              if (l.hasOwnProperty(y)) {
                var T = l[y];
                t.ae(y), t.te(n.ne.ye, 1, null), t.Te(1), t.te(n.ne.ye, 2, null), t.Te(T.pii), t.te(n.ne.oe, 3, null), t.ae(T.value.toString()), t.fe(!1)
              }
          }
          if (p) {
            t.te(n.ne.ie, 31, null), t.re(p, n.ne.oe, n.ne.ge);
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                var A = f[y];
                t.ae(y), t.me(A)
              }
          }
          if (u) {
            t.te(n.ne.ie, 33, null), t.re(u, n.ne.oe, n.ne._e);
            for (var y in a)
              if (a.hasOwnProperty(y)) {
                var A = a[y];
                t.ae(y), t.le(s.numberToBondInt64(A))
              }
          }
          if (c) {
            t.te(n.ne.ie, 34, null), t.re(c, n.ne.oe, n.ne.Se);
            for (var y in h)
              if (h.hasOwnProperty(y)) {
                var A = h[y];
                t.ae(y), t.Ae(A)
              }
          }
          if (g) {
            t.te(n.ne.ie, 36, null), t.re(g, n.ne.oe, n.ne.de);
            for (var y in v)
              if (v.hasOwnProperty(y)) {
                var T = v[y];
                t.ae(y), t.te(n.ne.ye, 1, null), t.Te(T.cc), t.te(n.ne.oe, 2, null), t.ae(T.value.toString()), t.fe(!1)
              }
          }
          t.fe(!1)
        }, e.base64Encode = null, e
      }();
    t.default = a
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(1),
      r = i(2),
      o = i(0),
      s = function() {
        
        return e.initialize = function(e) {
          var t = this;
          this.Ee = e, this.Pe = !0, r.default.addNotificationListener({
            eventsSent: function(e) {
              t.We("records_sent_count", e.length, e[0].apiKey)
            },
            eventsDropped: null,
            eventsRejected: null,
            eventsRetrying: null
          }), setTimeout(null, 6e4)
        }, e.teardown = null, e.eventReceived = function(t) {
          e.We("records_received_count", 1, t)
        }, e.flush = null, e.We = function(e, t, i) {
          if (this.Pe && i !== n.StatsApiKey) {
            var r = n.getTenantId(i);
            this.Be[r] || (this.Be[r] = {}), this.Be[r][e] ? this.Be[r][e] = this.Be[r][e] + t : this.Be[r][e] = t
          }
        }, e.Pe = !1, e.Be = {}, e
      }();
    t.default = s
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0),
      r = i(6),
      o = i(12),
      s = i(13),
      a = i(3),
      u = i(2),
      h = i(7),
      c = function() {
        
        return e.initialize = function(e, t) {
          if (void 0 === t && (t = {}), !this.we) return this.we = !0, o.default.defaultTenantToken = e, this.Ce(t), this.T.disableCookiesUsage && !this.T.propertyStorageOverride && (o.default.sessionEnabled = !1), h.default.addPropertyStorageOverride(this.T.propertyStorageOverride), h.default.autoCollect(o.default.semanticContext, this.T.disableCookiesUsage, this.T.userAgent), a.default.initialize(this.T), o.default.loggingEnabled = !0, this.T.enableAutoUserSession && (this.getLogger().logSession(r.AWTSessionState.Started), window.addEventListener("beforeunload", this.flushAndTeardown)), this.getLogger()
        }, e.getSemanticContext = null, e.flush = null, e.flushAndTeardown = null, e.pauseTransmission = null, e.resumeTransmision = null, e.setTransmitProfile = null, e.loadTransmitProfiles = null, e.setContext = null, e.setContextWithPii = null, e.setContextWithCustomerContent = null, e.getLogger = function(e) {
          var t = e;
          return t && t !== o.default.defaultTenantToken || (t = ""), this.Oe[t] || (this.Oe[t] = new s.default(t)), this.Oe[t]
        }, e.addNotificationListener = null, e.removeNotificationListener = null, e.Ce = function(e) {
          e.collectorUri && (this.T.collectorUri = e.collectorUri), e.cacheMemorySizeLimitInNumberOfEvents > 0 && (this.T.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents), e.httpXHROverride && e.httpXHROverride.sendPOST && (this.T.httpXHROverride = e.httpXHROverride), e.propertyStorageOverride && e.propertyStorageOverride.getProperty && e.propertyStorageOverride.setProperty && (this.T.propertyStorageOverride = e.propertyStorageOverride), e.userAgent && (this.T.userAgent = e.userAgent), e.disableCookiesUsage && (this.T.disableCookiesUsage = e.disableCookiesUsage), e.canSendStatEvent && (this.T.canSendStatEvent = e.canSendStatEvent), e.enableAutoUserSession && "undefined" != typeof window && window.addEventListener && (this.T.enableAutoUserSession = e.enableAutoUserSession)
        }, e.Oe = {}, e.we = !1, e.be = !1, e.T = {
          collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
          cacheMemorySizeLimitInNumberOfEvents: 1e4,
          disableCookiesUsage: !1,
          canSendStatEvent: null
        }, e
      }();
    t.default = c
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(5),
      r = i(8),
      o = function() {
        
        return e.logManagerContext = new n.default, e.sessionEnabled = !0, e.loggingEnabled = !1, e.defaultTenantToken = "", e.semanticContext = new r.default(!0, e.logManagerContext), e
      }();
    t.default = o
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0),
      r = i(6),
      o = i(5),
      s = i(1),
      a = i(10),
      u = i(2),
      h = i(3),
      c = i(12),
      f = i(15),
      p = i(8),
      l = i(7),
      d = function() {
        function e(e) {
          this.Re = e, this.De = new o.default, this.O = new p.default(!1, this.De), this.Ne = 0, this.Me()
        }
        return e.prototype.setContext = function(e, t, i) {
          void 0 === i && (i = n.AWTPropertyType.Unspecified), this.De.setProperty(e, t, i)
        }, e.prototype.setContextWithPii = null, e.prototype.setContextWithCustomerContent = null, e.prototype.getSemanticContext = null, e.prototype.logEvent = function(t) {
          if (c.default.loggingEnabled) {
            this.Re || (this.Re = c.default.defaultTenantToken, this.Me());
            var i = !0;
            s.isString(t) ? t = {
              name: t
            } : t instanceof o.default && (t = t.getEvent(), i = !1), a.default.eventReceived(this.Re), e.Ue(e.ke(t, this.Re, i), this.De)
          }
        }, e.prototype.logSession = function(t, i) {
          if (c.default.sessionEnabled) {
            var o = {
              name: "session",
              type: "session",
              properties: {}
            };
            if (e.xe(o, i), o.priority = n.AWTEventPriority.High, t === r.AWTSessionState.Started) {
              if (this.Ne > 0) return;
              this.Ne = (new Date).getTime(), this.Le = s.newGuid(), this.setContext("Session.Id", this.Le), o.properties["Session.State"] = "Started"
            } else {
              if (t !== r.AWTSessionState.Ended) return;
              if (0 === this.Ne) return;
              var a = Math.floor(((new Date).getTime() - this.Ne) / 1e3);
              o.properties["Session.Id"] = this.Le, o.properties["Session.State"] = "Ended", o.properties["Session.Duration"] = a.toString(), o.properties["Session.DurationBucket"] = e.Fe(a), this.Ne = 0, this.setContext("Session.Id", null), this.Le = void 0
            }
            o.properties["Session.FirstLaunchTime"] = l.default.firstLaunchTime, this.logEvent(o)
          }
        }, e.prototype.getSessionId = null, e.prototype.logFailure = null, e.prototype.logPageView = null, e.prototype.Me = function() {
          !e.qe[this.Re] && this.Re && (e.qe[this.Re] = s.newGuid())
        }, e.xe = function(e, t) {
          if (t) {
            t instanceof o.default && (t = t.getEvent()), t.name && (e.name = t.name), t.priority && (e.priority = t.priority);
            for (var i in t.properties) t.properties.hasOwnProperty(i) && (e.properties[i] = t.properties[i])
          }
        }, e.Fe = null, e.Ue = function(e, t) {
          return e.name && s.isString(e.name) ? (e.name = e.name.toLowerCase(), e.name = e.name.replace(s.EventNameDotRegex, "_"), e.type && s.isString(e.type) ? e.type = e.type.toLowerCase() : e.type = "custom", s.EventNameAndTypeRegex.test(e.name) && s.EventNameAndTypeRegex.test(e.type) ? ((!s.isNumber(e.timestamp) || e.timestamp < 0) && (e.timestamp = (new Date).getTime()), e.properties || (e.properties = {}), this.He(e, t.getPropertyMap()), this.He(e, c.default.logManagerContext.getPropertyMap()), this.Qe(e, "EventInfo.InitId", this.ze(e.apiKey)), this.Qe(e, "EventInfo.Sequence", this.je(e.apiKey)), this.Qe(e, "EventInfo.SdkVersion", f.FullVersionString), this.Qe(e, "EventInfo.Name", e.name), this.Qe(e, "EventInfo.Time", new Date(e.timestamp).toISOString()), s.isPriority(e.priority) || (e.priority = n.AWTEventPriority.Normal), void this.Ke(e)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)
        }, e.He = function(e, t) {
          if (t)
            for (var i in t) t.hasOwnProperty(i) && (e.properties[i] || (e.properties[i] = t[i]))
        }, e.Qe = function(e, t, i) {
          e.properties[t] = {
            value: i,
            pii: n.AWTPiiKind.NotSet,
            type: n.AWTPropertyType.String
          }
        }, e.Ke = function(e) {
          h.default.sendEvent(e)
        }, e.ke = function(e, t, i) {
          var n = e;
          if (n.id = s.newGuid(), n.apiKey = t, n.properties = n.properties || {}, i)
            for (var r in n.properties) n.properties.hasOwnProperty(r) && (n.properties[r] = s.sanitizeProperty(r, n.properties[r]), null === n.properties[r] && delete n.properties[r]);
          return n
        }, e.ze = function(t) {
          return e.qe[t]
        }, e.je = function(t) {
          return void 0 === e.Ge[t] && (e.Ge[t] = 0), (++e.Ge[t]).toString()
        }, e.Ge = {}, e.qe = {}, e
      }();
    t.default = d
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.AWT_REAL_TIME = "REAL_TIME", t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME", t.AWT_BEST_EFFORT = "BEST_EFFORT"
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Version = "1.6.1", t.FullVersionString = "AWT-Web-JS-" + t.Version
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0);
    t.AWTPropertyType = n.AWTPropertyType, t.AWTPiiKind = n.AWTPiiKind, t.AWTEventPriority = n.AWTEventPriority, t.AWTEventsDroppedReason = n.AWTEventsDroppedReason, t.AWTEventsRejectedReason = n.AWTEventsRejectedReason, t.AWTCustomerContentKind = n.AWTCustomerContentKind;
    var r = i(6);
    t.AWTUserIdType = r.AWTUserIdType, t.AWTSessionState = r.AWTSessionState;
    var o = i(14);
    t.AWT_BEST_EFFORT = o.AWT_BEST_EFFORT, t.AWT_NEAR_REAL_TIME = o.AWT_NEAR_REAL_TIME, t.AWT_REAL_TIME = o.AWT_REAL_TIME;
    var s = i(5);
    t.AWTEventProperties = s.default;
    var a = i(13);
    t.AWTLogger = a.default;
    var u = i(11);
    t.AWTLogManager = u.default;
    var h = i(29);
    t.AWTTransmissionManager = h.default;
    var c = i(9);
    t.AWTSerializer = c.default;
    var f = i(8);
    t.AWTSemanticContext = f.default, t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0",
      t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0"
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e[e.Ve = 0] = "_BT_STOP", e[e.Xe = 1] = "_BT_STOP_BASE", e[e.ge = 2] = "_BT_BOOL", e[e.Se = 8] = "_BT_DOUBLE", e[e.oe = 9] = "_BT_STRING", e[e.de = 10] = "_BT_STRUCT", e[e.se = 11] = "_BT_LIST", e[e.ie = 13] = "_BT_MAP", e[e.ye = 16] = "_BT_INT32", e[e._e = 17] = "_BT_INT64"
      }(t.ne || (t.ne = {}))
  }, function(e, t, i) {
    "use strict";

    function n(e) {
      for (var t = [], i = 0; i < e.length; ++i) {
        var n = e.charCodeAt(i);
        n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
      }
      return t
    }

    

    function o(e) {
      for (var t = []; 4294967168 & e;) t.push(127 & e | 128), e >>>= 7;
      return t.push(127 & e), t
    }

    function s(e) {
      for (var t = e.low, i = e.high, n = []; i || 4294967168 & t;) n.push(127 & t | 128), t = (127 & i) << 25 | t >>> 7, i >>>= 7;
      return n.push(127 & t), n
    }

    

    

    function h(e) {
      var t = e.low,
        i = e.high,
        n = i << 1 | t >>> 31,
        r = t << 1;
      2147483648 & i && (n = ~n, r = ~r);
      var o = new c.UInt64("0");
      return o.low = r, o.high = n, o
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = i(4),
      f = i(19),
      p = i(22);
    t.Ye = n, t.Ie = r, t.he = o, t.$e = s, t.et = a, t.tt = u, t.it = h
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      
      return e.Je = null, e.rt = [0, 0, 0, 0], e.nt = [0, 0, 0, 0, 0, 0, 0, 0], e.ut = [0, 0, 128, 127], e.st = [0, 0, 128, 255], e.at = [0, 0, 0, 0, 0, 0, 240, 127], e.ot = [0, 0, 0, 0, 0, 0, 240, 255], e
    }();
    t.FloatUtils = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(4),
      r = function() {
        function e() {
          this.dt = []
        }
        return e.prototype._t = function(e) {
          this.dt.push(n.Number.P(e))
        }, e.prototype.lt = function(e, t, i) {
          for (; i--;) this._t(e[t++])
        }, e.prototype.ce = function() {
          return this.dt
        }, e
      }();
    t.MemoryStream = r
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(17);
    t.ne = n.ne;
    var r = i(18);
    t.ve = r;
    var o = i(20);
    t.IO = o;
    var s = i(4);
    t.Int64 = s.Int64, t.UInt64 = s.UInt64, t.Number = s.Number;
    var a = function() {
      function e(e) {
        this.ct = e
      }
      return e.prototype.pt = null, e.prototype.me = function(e) {
        this.ct._t(e ? 1 : 0)
      }, e.prototype.ue = function(e, t) {
        this.ft(t), this.ht(e)
      }, e.prototype.re = function(e, t, i) {
        this.ft(t), this.ft(i), this.ht(e)
      }, e.prototype.Ae = null, e.prototype.te = function(e, t, i) {
        t <= 5 ? this.ct._t(e | t << 5) : t <= 255 ? (this.ct._t(192 | e), this.ct._t(t)) : (this.ct._t(224 | e), this.ct._t(t), this.ct._t(t >> 8))
      }, e.prototype.Te = null, e.prototype.le = function(e) {
        this.vt(r.it(e))
      }, e.prototype.ae = function(e) {
        if ("" === e) this.ht(0);
        else {
          var t = r.Ye(e);
          this.ht(t.length), this.ct.lt(t, 0, t.length)
        }
      }, e.prototype.fe = function(e) {
        this.ft(e ? n.ne.Xe : n.ne.Ve)
      }, e.prototype.ht = function(e) {
        var t = r.he(s.Number.w(e));
        this.ct.lt(t, 0, t.length)
      }, e.prototype.vt = function(e) {
        var t = r.$e(e);
        this.ct.lt(t, 0, t.length)
      }, e.prototype.ft = function(e) {
        this.ct._t(s.Number.W(e))
      }, e
    }();
    t.CompactBinaryProtocolWriter = a
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      
      return e.Ze = null, e
    }();
    t.BrowserChecker = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {
        this.yt = !0, this.Tt = !0, this.gt = !0, this.mt = "use-collector-delta", this.St = !1
      }
      return e.prototype.allowRequestSending = function() {
        return this.gt && !this.St ? (this.gt = !1, this.yt = !1, !0) : this.yt
      }, e.prototype.shouldAddClockSkewHeaders = function() {
        return this.Tt
      }, e.prototype.getClockSkewHeaderValue = function() {
        return this.mt
      }, e.prototype.setClockSkew = function(e) {
        this.St || (e ? this.mt = e : this.Tt = !1, this.St = !0, this.yt = !0)
      }, e
    }();
    t.default = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {
        this.At = {}
      }
      return e.prototype.setKillSwitchTenants = function(e, t) {
        if (e && t) try {
          var i = e.split(",");
          if ("this-request-only" === t) return i;
          for (var n = 1e3 * parseInt(t, 10), r = 0; r < i.length; ++r) this.At[i[r]] = Date.now() + n
        } catch (e) {
          return []
        }
        return []
      }, e.prototype.isTenantKilled = function(e) {
        return void 0 !== this.At[e] && this.At[e] > Date.now() || (delete this.At[e], !1)
      }, e
    }();
    t.default = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0),
      r = function() {
        function e(e, t) {
          this.It = e, this.Et = t, this.Pt = {}, this.Wt = 0
        }
        return e.prototype.addEventToBatch = function(e) {
          if (e.priority === n.AWTEventPriority.Immediate_sync) {
            var t = {};
            return t[e.apiKey] = [e], t
          }
          return this.Wt >= this.Et && this.flushBatch(), void 0 === this.Pt[e.apiKey] && (this.Pt[e.apiKey] = []), this.Pt[e.apiKey].push(e), this.Wt++, null
        }, e.prototype.flushBatch = function() {
          this.Wt > 0 && (this.It.push(this.Pt), this.Pt = {}, this.Wt = 0)
        }, e.prototype.hasBatch = null, e
      }();
    t.default = r
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      
      return e.shouldRetryForStatus = null, e.getMillisToBackoffForRetry = null, e
    }();
    t.default = n
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0),
      r = i(9),
      o = i(26),
      s = i(24),
      a = i(23),
      u = i(15),
      h = i(1),
      c = i(2),
      f = i(3),
      p = "POST",
      l = function() {
        function e(e, t, i, n) {
          var r = this;
          this.Bt = e, this.wt = i, this.Ct = n, this.bt = "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + u.FullVersionString, this.Ot = new s.default, this._ = !1, this.Rt = new a.default, this.Dt = !1, this.Nt = 0, h.isUint8ArrayAvailable() || (this.bt += "&content-encoding=base64"), this.bt = t + this.bt, this.Ct || (this.Dt = !h.isReactNative(), this.Ct = {
            sendPOST: function(e, t, i, n, o, s) {
              if (h.useXDomainRequest()) {
                var a = new XDomainRequest;
                a.open(p, e), a.onload = null, a.onerror = null, a.ontimeout = null, a.send(t)
              } else if (h.isReactNative()) fetch(e, {
                body: t,
                method: p
              }).then(null).catch(null);
              else {
                var u = new XMLHttpRequest;
                u.open(p, e, !s), u.onload = function() {
                  o(u.status, r.Mt(u.getAllResponseHeaders()))
                }, u.onerror = null, u.ontimeout = null, u.send(t)
              }
            }
          })
        }
        return e.prototype.hasIdleConnection = function() {
          return this.Nt < 2
        }, e.prototype.sendQueuedRequests = function() {
          for (; this.hasIdleConnection() && !this._ && this.Bt.length > 0 && this.Rt.allowRequestSending();) this.Nt++, this.Ut(this.Bt.shift(), 0, !1);
          this.hasIdleConnection() && f.default.scheduleTimer()
        }, e.prototype.isCompletelyIdle = null, e.prototype.teardown = null, e.prototype.pause = null, e.prototype.resume = null, e.prototype.removeQueuedRequests = null, e.prototype.sendSynchronousRequest = null, e.prototype.Ut = function(e, t, i, o) {
          var s = this;
          if (void 0 === o && (o = !1), this._) return this.Nt--, void this.wt.addBackRequest(e);
          var a = 0,
            u = "";
          for (var f in e) e.hasOwnProperty(f) && (this.Ot.isTenantKilled(f) ? (c.default.eventsRejected(e[f], n.AWTEventsRejectedReason.KillSwitch), delete e[f]) : (u.length > 0 && (u += ","), u += f, a++));
          if (a > 0) {
            var p = r.default.getPayloadBlob(e, a);
            p.remainingRequest && this.Bt.push(p.remainingRequest);
            var l = this.bt + "&x-apikey=" + u + "&client-time-epoch-millis=" + Date.now().toString();
            this.Rt.shouldAddClockSkewHeaders() && (l = l + "&time-delta-to-apply-millis=" + this.Rt.getClockSkewHeaderValue());
            var d = void 0;
            d = h.isUint8ArrayAvailable() ? new Uint8Array(p.payloadBlob) : r.default.base64Encode(p.payloadBlob);
            for (var f in e)
              if (e.hasOwnProperty(f))
                for (var v = 0; v < e[f].length; ++v) e[f][v].sendAttempt > 0 ? e[f][v].sendAttempt++ : e[f][v].sendAttempt = 1;
            if (this.Dt && i && h.isBeaconsSupported() && navigator.sendBeacon(l, d)) return;
            this.Ct.sendPOST(l, d, null, null, function(n, r) {
              s.kt(n, r, e, a, u, t, i, o)
            }, i || o)
          } else i || this.xt(null, {}, i, o)
        }, e.prototype.kt = function(e, t, i, r, s, a, u, h) {
          var p = this,
            l = !0;
          if (void 0 !== e) {
            if (t) {
              var d = this.Ot.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
              this.Rt.setClockSkew(t["time-delta-millis"]);
              for (var v = 0; v < d.length; ++v) c.default.eventsRejected(i[d[v]], n.AWTEventsRejectedReason.KillSwitch), delete i[d[v]], r--
            } else this.Rt.setClockSkew(null);
            if (200 === e) return void this.xt(!0, i, u, h);
            (!o.default.shouldRetryForStatus(e) || r <= 0) && (l = !1)
          }
          if (l)
            if (h) this.Nt--, i[s][0].priority = n.AWTEventPriority.High, this.wt.addBackRequest(i);
            else if (a < 1) {
            for (var g in i) i.hasOwnProperty(g) && c.default.eventsRetrying(i[g]);
            setTimeout(null, o.default.getMillisToBackoffForRetry(a))
          } else this.Nt--, f.default.backOffTransmission(), this.wt.addBackRequest(i);
          else this.xt(!1, i, u, h)
        }, e.prototype.xt = function(e, t, i, r) {
          e && f.default.clearBackOff();
          for (var o in t) t.hasOwnProperty(o) && (e ? c.default.eventsSent(t[o]) : c.default.eventsDropped(t[o], n.AWTEventsDroppedReason.NonRetryableStatus));
          this.Nt--, r || i || this.sendQueuedRequests()
        }, e.prototype.Mt = function(e) {
          var t = {};
          if (e)
            for (var i = e.split("\n"), n = 0; n < i.length; ++n) {
              var r = i[n].split(": ");
              t[r[0]] = r[1]
            }
          return t
        }, e
      }();
    t.default = l
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(0),
      r = i(27),
      o = i(3),
      s = i(25),
      a = i(2),
      u = 500,
      h = function() {
        function e(e, t, i) {
          this.Lt = t, this.Ft = !1, this.qt = [], this.Ht = !1, this._ = !1, this.Qt = 0, this.It = [], this.zt = {}, this.zt[n.AWTEventPriority.High] = [], this.zt[n.AWTEventPriority.Normal] = [], this.zt[n.AWTEventPriority.Low] = [], this.jt(), this.Kt = new s.default(this.It, u), this.Gt = new r.default(this.It, e, this, i)
        }
        return e.prototype.addEvent = function(e) {
          e.priority === n.AWTEventPriority.Immediate_sync ? this.Gt.sendSynchronousRequest(this.Kt.addEventToBatch(e), e.apiKey) : this.Qt < this.Lt ? this.Vt(e) : this.Xt(e.priority) ? this.Vt(e) : a.default.eventsDropped([e], n.AWTEventsDroppedReason.QueueFull)
        }, e.prototype.sendEventsForPriorityAndAbove = function(e) {
          this.Zt(e), this.Gt.sendQueuedRequests()
        }, e.prototype.hasEvents = function() {
          return (this.zt[n.AWTEventPriority.High][0].length > 0 || this.zt[n.AWTEventPriority.Normal][0].length > 0 || this.zt[n.AWTEventPriority.Low][0].length > 0 || this.Kt.hasBatch()) && this.Gt.hasIdleConnection()
        }, e.prototype.addBackRequest = null, e.prototype.teardown = null, e.prototype.uploadNow = null, e.prototype.pauseTransmission = null, e.prototype.resumeTransmission = null, e.prototype.shouldDropEventsOnPause = null, e.prototype.Yt = null, e.prototype.jt = function() {
          this.zt[n.AWTEventPriority.High].push([]), this.zt[n.AWTEventPriority.Normal].push([]), this.zt[n.AWTEventPriority.Low].push([])
        }, e.prototype.Vt = function(e) {
          this._ && this.Ht || (this.Qt++, this.zt[e.priority][this.zt[e.priority].length - 1].push(e))
        }, e.prototype.Xt = null, e.prototype.Zt = function(e) {
          for (var t = n.AWTEventPriority.High; t >= e;) {
            for (; this.zt[t][0].length > 0;) {
              var i = this.zt[t][0].pop();
              this.Qt--, this.Kt.addEventToBatch(i)
            }
            t--
          }
          this.Kt.flushBatch()
        }, e.prototype.Jt = null, e.prototype.$t = null, e
      }();
    t.default = h
  }, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(3),
      r = function() {
        
        return e.setEventsHandler = null, e.getEventsHandler = null, e.scheduleTimer = null, e
      }();
    t.default = r
  }, function(e, t, i) {
    e.exports = i(16)
  }])
});
var StandaloneAriaLogger;
! function(e) {
  var t = function() {
    
    return t.Initialize = function(t, i) {
      if (!e.Logger.ariaLogger) {
        var n = {
          enableAutoUserSession: !1,
          collectorUri: t.ariaCollectorUrl,
          propertyStorageOverride: null,
          disableCookiesUsage: t.cookieConsentRequired
        };
        if (e.Logger.ariaLogger = AWTLogManager.initialize(t.ariaTenant, n), e.Logger.ariaLogger) {
          if (e.Logger.ariaLogger.setContext("CorpNet", t.corpNet), e.Logger.ariaLogger.setContext("CorrelationId", t.correlationId), e.Logger.ariaLogger.setContext("DevEnvironment", t.devEnvironment), e.Logger.ariaLogger.setContext("DeploymentEnvironment", t.deploymentEnvironment), e.Logger.ariaLogger.setContext("Geo", t.geoName), e.Logger.ariaLogger.setContext("RequestOrigin", t.requestOrigin), e.Logger.ariaLogger.setContext("SessionId", t.sessionId), e.Logger.ariaLogger.setContext("TestTraffic", t.testTraffic), e.Logger.ariaLogger.setContext("ServerBuildDate", t.serverBuildDate), e.Logger.ariaLogger.setContext("ServerBuildId", t.serverBuildId), t.features && t.features.length > 0 ? t.flights && t.flights.length > 0 ? e.Logger.ariaLogger.setContext("Flights", t.flights + "," + t.features) : e.Logger.ariaLogger.setContext("Flights", t.features) : e.Logger.ariaLogger.setContext("Flights", t.flights), t.authTypeString && t.tenantId) {
            e.Logger.ariaLogger.setContext("AuthType", t.authTypeString);
            var r = t.puid,
              o = AWTUserIdType.Unknown;
            r ? "OrgId" === t.authTypeString ? o = AWTUserIdType.OrgIdPUID : "MSA" === t.authTypeString && (o = AWTUserIdType.MSAPUID) : r = "Unknown", e.Logger.ariaLogger.getSemanticContext().setUserId(r, AWTPiiKind.NotSet, o), e.Logger.ariaLogger.setContext("UserInfo.OMSTenantId", t.tenantId)
          }
          e.Logger.StartSession(), e.Logger.EndSessionOnUnload(i), e.Logger.FlushQueuedEvents()
        }
      }
    }, t.EndSession = null, t.LogEvent = function(t, i, n, r) {
      if (void 0 === r && (r = 0), e.Logger.ariaLogger) e.Logger.sessionActive || e.Logger.StartSession(), e.Logger.LogAriaEvent(t, i, r, n);
      else {
        var o = {
          streamName: t,
          eventName: i,
          eventParams: n || {},
          metrics: [],
          securityThreshold: r
        };
        window.queuedEvents || (window.queuedEvents = []), window.queuedEvents.push(o)
      }
    }, t.LogUnauthClick = null, t.LogUnauthPageView = function(t) {
      var i = {
        ViewType: t
      };
      e.Logger.LogEvent("unauth_page_view", null, i)
    }, t.LogBootError = null, t.LogAppBundleError = null, t.EndSessionOnUnload = function(t) {
      var i = null;
      window.addEventListener("beforeunload", i), window.addEventListener("pagehide", i)
    }, t.StartSession = function() {
      if (!window.disableLogs) {
        var t = e.Logger.GetSessionProperties();
        e.Logger.ariaLogger.logSession(AWTSessionState.Started, t)
      }
      e.Logger.sessionActive = !0
    }, t.GetSessionProperties = function() {
      var e = new AWTEventProperties;
      return window.prelaunchMode && e.setProperty("PrelaunchMode", "true"), e.setProperty("LoggerId", "Standalone"), e
    }, t.LogAriaEvent = function(t, i, n, r) {
      var o = e.Logger.GetAppSecurityLevel(),
        s = n || 0,
        a = i && i.indexOf("Error") > -1 || r && r.Error && "OK" !== r.Error;
      if (!(s > o || window.disableLogs && !a)) {
        var u = e.Logger.SetAriaProps(r || {});
        u.setName(t), i && u.setProperty(e.Logger.eventNameProperty, i), u.setProperty("AppSecurityLevel", o), window.prelaunchMode && u.setProperty("PrelaunchMode", "true"), "Performance_Dump" === t && void 0 !== window.startedFromServiceWorker && u.setProperty("CachedPage", window.startedFromServiceWorker.toString()), e.Logger.ariaLogger.logEvent(u)
      }
    }, t.GetCDNResourceDetails = null, t.FlushQueuedEvents = function() {
      if (window.queuedEvents) {
        for (var t = 0; t < window.queuedEvents.length; t++) {
          var i = window.queuedEvents[t];
          e.Logger.LogAriaEvent(i.streamName, i.eventName, i.securityThreshold, i.eventParams)
        }
        window.queuedEvents = []
      }
    }, t.SetAriaProps = function(e) {
      var t = new AWTEventProperties;
      if (e)
        for (var i in e) e.hasOwnProperty(i) && t.setProperty(i, e[i]);
      return t
    }, t.GetAppSecurityLevel = function() {
      return "number" == typeof window.windowsDataSecuritySetting ? window.windowsDataSecuritySetting : 3
    }, t.emailRegex = new RegExp("[a-zA-Z0-9_\\-\\.]+(@|%40|%2540)[a-zA-Z0-9_\\-\\.]+\\.[a-zA-Z]{2,63}", "g"), t.localFileRegex = new RegExp("file(:|%3A|%253A).*", "gi"), t.eventNameProperty = "EventName", t.sessionActive = !1, t
  }();
  e.Logger = t
}(StandaloneAriaLogger || (StandaloneAriaLogger = {}));