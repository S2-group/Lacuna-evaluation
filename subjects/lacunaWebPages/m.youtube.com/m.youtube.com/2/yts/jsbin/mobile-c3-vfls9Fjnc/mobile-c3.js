(function() {
    var k;

    function aa(a) {}

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ea(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {},
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {} : null
    }
    var la = ha;

    function ma(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.la = b.prototype
    }
    var na = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {},
        oa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function pa() {}

    function ra(a, b) {}
    ra.prototype.toString = function() {};
    var qa = function() {
        function a(c) {}
        var b = 0;
        return a
    }();

    function sa() {}

    function ta(a) {}

    function ua(a, b) {
        if (b) {
            for (var c = oa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            f = b(e);
            f != e && null != f && na(c, d, {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
    }
    ua("Promise", function(a) {
        function b(g) {}

        function c() {}

        function d(g) {}
        if (a) return a;
        c.prototype.i = function(g) {};
        var e = oa.setTimeout;
        c.prototype.j = function(g) {};
        c.prototype.C = function() {};
        c.prototype.D = function(g) {};
        b.prototype.D = function() {};
        b.prototype.ea = function(g) {};
        b.prototype.aa = function(g) {};
        b.prototype.C = function(g) {};
        b.prototype.G = function(g) {};
        b.prototype.N = function(g, h) {};
        b.prototype.T = function() {};
        var f = new c;
        b.prototype.ma = function(g) {};
        b.prototype.na = function(g, h) {};
        b.prototype.then = function(g, h) {};
        b.prototype["catch"] = function(g) {};
        b.prototype.Pa = function(g, h) {};
        b.resolve = d;
        b.reject = function(g) {};
        b.race = function(g) {};
        b.all = function(g) {};
        return b
    });

    function va(a, b, c) {}
    ua("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {}
    });
    ua("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {}
    });
    ua("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {}
    });

    function wa(a, b) {}
    ua("Array.prototype.values", function(a) {
        return a ? a : function() {}
    });

    function ya(a, b) {}
    ua("WeakMap", function(a) {
        function b(l) {}

        function c() {}

        function d(l) {}

        function e(l) {}

        function f(l) {}
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        n = Object.seal({}),
                        q = new a([
                            [l, 2],
                            [n, 3]
                        ]);
                    if (2 != q.get(l) || 3 != q.get(n)) return !1;
                    q["delete"](l);
                    q.set(n, 4);
                    return !q.has(l) && 4 == q.get(n)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(l, n) {};
        b.prototype.get = function(l) {};
        b.prototype.has = function(l) {};
        b.prototype["delete"] = function(l) {};
        return b
    });
    ua("Map", function(a) {
        function b() {}

        function c(h, l) {}

        function d(h, l) {}

        function e(h) {}
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(ba([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var n = l.entries(),
                        q = n.next();
                    if (q.done || q.value[0] != h || "s" != q.value[1]) return !1;
                    q = n.next();
                    return q.done || 4 != q.value[0].x || "t" != q.value[1] || !n.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        sa();
        var f = new WeakMap;
        e.prototype.set = function(h, l) {};
        e.prototype["delete"] = function(h) {};
        e.prototype.clear = function() {};
        e.prototype.has = function(h) {};
        e.prototype.get = function(h) {};
        e.prototype.entries = function() {};
        e.prototype.keys = function() {};
        e.prototype.values = function() {};
        e.prototype.forEach = function(h, l) {};
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    ua("Set", function(a) {
        function b(c) {}
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(ba([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        sa();
        b.prototype.add = function(c) {};
        b.prototype["delete"] = function(c) {};
        b.prototype.clear = function() {};
        b.prototype.has = function(c) {};
        b.prototype.entries = function() {};
        b.prototype.values = function() {};
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {};
        return b
    });
    ua("Array.prototype.keys", function(a) {
        return a ? a : function() {}
    });
    ua("Object.is", function(a) {
        return a ? a : function(b, c) {}
    });
    ua("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {}
    });
    ua("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {}
    });
    ua("Array.prototype.entries", function(a) {
        return a ? a : function() {}
    });
    var za = "function" == typeof Object.assign ? Object.assign : function(a, b) {};
    ua("Object.assign", function(a) {
        return a || za
    });
    var Aa = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {}
        }
        return function(c, d, e) {}
    }();
    ua("Reflect.construct", function() {
        return Aa
    });
    ua("Array.from", function(a) {
        return a ? a : function(b, c, d) {}
    });
    ua("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    var m = this || self;

    function p(a, b, c) {
        a = a.split(".");
        c = c || m;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ba(a) {}
    var Ea = /^[\w+/_-]+[=]{0,2}$/,
        Da = null;

    function Ca(a) {}

    function r(a, b) {
        for (var c = a.split("."), d = b || m, e = 0; e < c.length; e++)
            if (d = d[c[e]], null == d) return null;
        return d
    }

    function Fa() {}

    function Ga(a) {
        a.nb = void 0;
        a.K = function() {
            return a.nb ? a.nb : a.nb = new a
        }
    }

    function Ha(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function Ia(a) {}

    function Ja(a) {
        var b = Ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ka(a) {
        return "function" == Ha(a)
    }

    function La(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var Ma = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Na = 0;

    function Oa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Pa(a, b, c) {}

    function Qa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa = Oa : Qa = Pa;
        return Qa.apply(null, arguments)
    }

    function Ra(a, b) {}
    var Sa = Date.now || function() {};

    function Ta(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.la = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function Ua(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    Ta(Ua, Error);
    Ua.prototype.name = "CustomError";
    var Va;
    var Wa = Array.prototype.indexOf ? function(a, b) {} : function(a, b) {},
        Xa = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {},
        Ya = Array.prototype.filter ? function(a, b) {} : function(a, b) {},
        Za = Array.prototype.map ? function(a, b) {} : function(a, b) {},
        $a = Array.prototype.reduce ? function(a, b, c) {} : function(a, b, c) {},
        ab = Array.prototype.some ? function(a, b) {} : function(a, b) {},
        bb = Array.prototype.every ? function(a, b) {} : function(a, b) {};

    function cb(a, b) {}

    function db(a, b) {}

    function eb(a, b) {}

    function fb(a, b) {}

    function gb(a) {}

    function hb(a, b) {}

    function ib(a, b, c) {}

    function jb(a) {};

    function kb(a) {}

    function lb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function mb(a) {};

    function nb(a) {
        this.g = a
    }
    nb.prototype.toString = function() {
        return this.g
    };
    var u = {
        is: function(a, b) {},
        forEach: function(a, b, c) {},
        filter: function(a, b, c) {},
        map: function(a, b, c) {},
        some: function(a, b, c) {},
        every: function(a, b, c) {},
        getCount: function(a) {},
        Wf: function(a) {},
        Xf: function(a) {},
        contains: function(a, b) {},
        Ua: function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        sa: function(a) {},
        Ta: function(a, b) {
            var c = Ja(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Qa: function(a, b) {},
        jb: function(a, b) {},
        Tb: function(a, b, c) {
            for (var d in a)
                if (b.call(c, a[d], d, a)) return d
        },
        Uf: function(a, b, c) {},
        isEmpty: function(a) {},
        clear: function(a) {},
        remove: function(a, b) {},
        add: function(a, b, c) {},
        get: function(a, b, c) {},
        set: function(a, b, c) {},
        mg: function(a, b, c) {},
        ng: function(a, b, c) {},
        Sa: function(a, b) {
            for (var c in a)
                if (!(c in b) || a[c] !== b[c]) return !1;
            for (var d in b)
                if (!(d in a)) return !1;
            return !0
        },
        clone: function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        xc: function(a) {},
        uc: function(a) {
            var b = {},
                c;
            for (c in a) b[a[c]] = c;
            return b
        },
        Cb: "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        extend: function(a, b) {},
        create: function(a) {},
        Ra: function(a) {
            var b = arguments.length;
            if (1 == b && Ia(arguments[0])) return u.Ra.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        },
        Sf: function(a) {},
        eg: function(a) {},
        Vf: function(a, b, c) {},
        Yf: function(a) {}
    };
    u.Ra("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");

    function ob(a, b) {
        this.g = a === pb && b || "";
        this.i = qb
    }
    ob.prototype.Y = !0;
    ob.prototype.U = function() {};

    function rb(a) {
        return a instanceof ob && a.constructor === ob && a.i === qb ? a.g : "type_error:Const"
    }

    function v(a) {
        return new ob(pb, a)
    }
    var qb = {},
        pb = {},
        sb = v("");

    function tb() {}
    tb.prototype.Y = !0;
    var ub = {};
    tb.prototype.U = function() {};

    function vb(a, b, c) {
        this.g = a === wb && b || "";
        this.i = a === wb && c || null;
        this.j = xb
    }
    vb.prototype.Y = !0;
    vb.prototype.U = function() {};
    vb.prototype.mb = !0;
    vb.prototype.lb = function() {};

    function yb(a) {}

    function zb(a) {}

    function Ab(a, b) {}
    var Cb = /%{(\w+)}/g,
        Bb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Eb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        xb = {};

    function Db(a) {
        return new vb(wb, a, null)
    }

    function Fb(a, b, c) {}
    var wb = {};

    function Gb(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    function Hb(a, b) {}
    var Ib = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {};

    function Jb(a, b) {}
    var Kb = /&/g,
        Lb = /</g,
        Mb = />/g,
        Nb = /"/g,
        Ob = /'/g,
        Pb = /\x00/g,
        Qb = /[\x00&<>"']/;

    function Rb(a, b) {
        this.g = a === Sb && b || "";
        this.i = Tb
    }
    Rb.prototype.Y = !0;
    Rb.prototype.U = function() {};
    Rb.prototype.mb = !0;
    Rb.prototype.lb = function() {};

    function Ub(a) {}

    function Vb(a) {
        if (a instanceof Rb && a.constructor === Rb && a.i === Tb) return a.g;
        Ha(a);
        return "type_error:SafeUrl"
    }
    var Wb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        Xb = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        Yb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Zb(a) {}

    function $b(a, b) {
        if (a instanceof Rb) return a;
        a = "object" == typeof a && a.Y ? a.U() : String(a);
        if (b && /^data:/i.test(a)) {
            var c = a.replace(/(%0A|%0D)/g, "");
            var d = c.match(Xb);
            d = d && Wb.test(d[1]);
            c = new Rb(Sb, d ? c : "about:invalid#zClosurez");
            if (c.U() == a) return c
        }
        Yb.test(a) || (a = "about:invalid#zClosurez");
        return new Rb(Sb, a)
    }
    var Tb = {},
        Sb = {};

    function ac() {}
    ac.prototype.Y = !0;
    var bc = {};
    ac.prototype.U = function() {};
    var cc;
    a: {
        var dc = m.navigator;
        if (dc) {
            var ec = dc.userAgent;
            if (ec) {
                cc = ec;
                break a
            }
        }
        cc = ""
    }

    function fc(a) {
        return -1 != cc.indexOf(a)
    };

    function gc() {
        this.g = "";
        this.j = hc;
        this.i = null
    }
    gc.prototype.mb = !0;
    gc.prototype.lb = function() {};
    gc.prototype.Y = !0;
    gc.prototype.U = function() {};

    function ic(a) {}

    function jc(a) {}
    u.Ra("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    u.Ra("APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", "SCRIPT", "STYLE", "SVG", "TEMPLATE");
    var hc = {};

    function kc(a, b) {
        var c = new gc;
        c.g = a;
        c.i = b;
        return c
    }
    kc("<!DOCTYPE html>", 0);
    var lc = kc("", 0);
    kc("<br>", 0);

    function mc(a, b) {};

    function nc(a, b) {
        var c = b instanceof Rb ? b : $b(b);
        a.href = Vb(c)
    }

    function oc(a, b) {}

    function pc(a, b) {}

    function qc(a, b) {}

    function rc(a, b) {}

    function sc(a, b) {}

    function tc(a) {};

    function uc(a) {}

    function vc(a) {}

    function wc() {}

    function xc(a) {};

    function yc() {
        return fc("iPhone") && !fc("iPod") && !fc("iPad")
    };

    function zc(a) {}
    zc[" "] = Fa;
    var Ac = fc("Opera"),
        Bc = fc("Trident") || fc("MSIE"),
        Cc = fc("Gecko") && !(-1 != cc.toLowerCase().indexOf("webkit") && !fc("Edge")) && !(fc("Trident") || fc("MSIE")) && !fc("Edge"),
        Dc = -1 != cc.toLowerCase().indexOf("webkit") && !fc("Edge"),
        Ec = yc(),
        Fc = yc() || fc("iPad") || fc("iPod"),
        Gc = -1 != cc.toLowerCase().indexOf("kaios"),
        Hc;
    var Ic;
    if (m.document && Bc) {
        var Jc = m.document;
        Ic = Jc ? Jc.documentMode : void 0
    } else Ic = void 0;
    Hc = Ic;
    var Kc = yc() || fc("iPod"),
        Lc = fc("iPad");
    var Mc = {},
        Nc = null;

    function Oc(a) {}
    var Pc = {};

    function Qc(a) {};

    function Rc() {};

    function Uc(a, b, c) {}

    function Vc(a) {};

    function Wc(a) {
        this.g = a || {
            cookie: ""
        }
    }
    k = Wc.prototype;
    k.isEnabled = function() {};
    k.set = function(a, b, c, d, e, f) {};
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ib(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = function(a, b, c) {};
    k.sa = function() {};
    k.Ua = function() {};
    k.isEmpty = function() {};
    k.getCount = function() {};
    k.Qa = function(a) {};
    k.jb = function(a) {};
    k.clear = function() {};

    function Xc(a) {}
    var Yc = new Wc("undefined" == typeof document ? null : document);
    var Zc = !Bc || 9 <= Number(Hc);

    function $c(a, b) {}
    k = $c.prototype;
    k.clone = function() {};
    k.Sa = function(a) {};
    k.ceil = function() {};
    k.floor = function() {};
    k.round = function() {};
    k.scale = function(a, b) {};

    function ad(a, b) {}
    k = ad.prototype;
    k.clone = function() {};
    k.aspectRatio = function() {};
    k.isEmpty = function() {};
    k.ceil = function() {};
    k.floor = function() {};
    k.round = function() {};
    k.scale = function(a, b) {};

    function bd(a, b) {}
    var cd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function dd(a, b, c) {}

    function fd(a, b, c, d) {}

    function ed(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function hd(a) {}

    function gd(a) {}

    function id(a, b) {}

    function jd(a, b, c) {}

    function kd(a) {}
    k = kd.prototype;
    k.getElementsByTagName = function(a, b) {};
    k.createElement = function(a) {};
    k.appendChild = function(a, b) {};
    k.append = function(a, b) {};
    k.canHaveChildren = function(a) {};
    k.contains = function(a, b) {};

    function ld() {
        this.j = this.j;
        this.D = this.D
    }
    ld.prototype.j = !1;
    ld.prototype.dispose = function() {};
    ld.prototype.qa = function() {};

    function md(a) {};
    var nd = m.JSON.stringify;
    var od = "StopIteration" in m ? m.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function pd() {}
    pd.prototype.next = function() {};
    pd.prototype.ba = function() {};

    function qd(a) {}

    function rd(a, b) {}

    function sd(a) {};

    function td(a, b) {}
    k = td.prototype;
    k.getCount = function() {};
    k.Ua = function() {};
    k.sa = function() {};
    k.Qa = function(a) {};
    k.jb = function(a) {};
    k.Sa = function(a, b) {};

    function wd(a, b) {}
    k.isEmpty = function() {};
    k.clear = function() {};
    k.remove = function(a) {};

    function ud(a) {}
    k.get = function(a, b) {};
    k.set = function(a, b) {};
    k.forEach = function(a, b) {};
    k.clone = function() {};
    k.uc = function() {};
    k.ba = function(a) {};

    function vd(a, b) {};

    function xd(a, b) {
        this.j = a;
        this.D = b;
        this.i = 0;
        this.g = null
    }
    xd.prototype.get = function() {
        if (0 < this.i) {
            this.i--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.j();
        return a
    };

    function yd(a, b) {
        a.D(b);
        100 > a.i && (a.i++, b.next = a.g, a.g = b)
    };

    function zd(a) {}

    function Ad(a) {}
    var Cd;

    function Dd() {}
    var Bd = kb;

    function Ed() {
        this.i = this.g = null
    }
    var Gd = new xd(function() {
        return new Fd
    }, function(a) {
        a.reset()
    });
    Ed.prototype.add = function(a, b) {
        var c = Gd.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.g = c;
        this.i = c
    };
    Ed.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.i = null), a.next = null);
        return a
    };

    function Fd() {
        this.next = this.scope = this.g = null
    }
    Fd.prototype.set = function(a, b) {
        this.g = a;
        this.scope = b;
        this.next = null
    };
    Fd.prototype.reset = function() {
        this.next = this.scope = this.g = null
    };

    function Hd(a, b) {
        Id || Jd();
        Kd || (Id(), Kd = !0);
        Ld.add(a, b)
    }
    var Id;

    function Jd() {
        if (m.Promise && m.Promise.resolve) {
            var a = m.Promise.resolve(void 0);
            Id = function() {
                a.then(Md)
            }
        } else Id = function() {}
    }
    var Kd = !1,
        Ld = new Ed;

    function Md() {
        for (var a; a = Ld.remove();) {
            try {
                a.g.call(a.scope)
            } catch (b) {
                zd(b)
            }
            yd(Gd, a)
        }
        Kd = !1
    };

    function Nd(a) {
        a.prototype.$goog_Thenable = !0
    }

    function Od(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Pd(a, b) {
        this.g = 0;
        this.N = void 0;
        this.D = this.i = this.j = null;
        this.C = this.G = !1;
        if (a != Fa) try {
            var c = this;
            a.call(b, function(d) {
                Qd(c, 2, d)
            }, function(d) {
                Qd(c, 3, d)
            })
        } catch (d) {
            Qd(this, 3, d)
        }
    }

    function Rd() {
        this.next = this.context = this.onRejected = this.i = this.g = null;
        this.j = !1
    }
    Rd.prototype.reset = function() {
        this.context = this.onRejected = this.i = this.g = null;
        this.j = !1
    };
    var Sd = new xd(function() {
        return new Rd
    }, function(a) {
        a.reset()
    });

    function Td(a, b, c) {
        var d = Sd.get();
        d.i = a;
        d.onRejected = b;
        d.context = c;
        return d
    }

    function Ud(a) {
        if (a instanceof Pd) return a;
        var b = new Pd(Fa);
        Qd(b, 2, a);
        return b
    }

    function Vd(a) {
        return new Pd(function(b, c) {
            c(a)
        })
    }

    function Wd(a, b, c) {}

    function Yd(a) {}

    function Zd() {}
    Pd.prototype.then = function(a, b, c) {
        return ae(this, Ka(a) ? a : null, Ka(b) ? b : null, c)
    };
    Nd(Pd);

    function be(a, b) {
        return ae(a, null, b, void 0)
    }
    Pd.prototype.cancel = function(a) {};

    function de(a, b) {}

    function ge(a, b) {
        a.i || 2 != a.g && 3 != a.g || he(a);
        a.D ? a.D.next = b : a.i = b;
        a.D = b
    }

    function ae(a, b, c, d) {
        var e = Td(null, null, null);
        e.g = new Pd(function(f, g) {
            e.i = b ? function(h) {} : f;
            e.onRejected = c ? function(h) {
                try {
                    var l = c.call(d, h);
                    void 0 === l && h instanceof ce ? g(h) : f(l)
                } catch (n) {
                    g(n)
                }
            } : g
        });
        e.g.j = a;
        ge(a, e);
        return e.g
    }
    Pd.prototype.aa = function(a) {};
    Pd.prototype.ea = function(a) {
        this.g = 0;
        Qd(this, 3, a)
    };

    function Qd(a, b, c) {
        0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, Xd(c, a.aa, a.ea, a) || (a.N = c, a.g = b, a.j = null, he(a), 3 != b || c instanceof ce || ie(a, c)))
    }

    function Xd(a, b, c, d) {
        if (a instanceof Pd) return ge(a, Td(b || Fa, c || null, d)), !0;
        if (Od(a)) return a.then(b, c, d), !0;
        if (La(a)) try {
            var e = a.then;
            if (Ka(e)) return je(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    }

    function je(a, b, c, d, e) {}

    function he(a) {
        a.G || (a.G = !0, Hd(a.T, a))
    }

    function ee(a) {
        var b = null;
        a.i && (b = a.i, a.i = b.next, b.next = null);
        a.i || (a.D = null);
        return b
    }
    Pd.prototype.T = function() {
        for (var a; a = ee(this);) fe(this, a, this.g, this.N);
        this.G = !1
    };

    function fe(a, b, c, d) {
        if (3 == c && b.onRejected && !b.j)
            for (; a && a.C; a = a.j) a.C = !1;
        if (b.g) b.g.j = null, ke(b, c, d);
        else try {
            b.j ? b.i.call(b.context) : ke(b, c, d)
        } catch (e) {
            le.call(null, e)
        }
        yd(Sd, b)
    }

    function ke(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    }

    function ie(a, b) {
        a.C = !0;
        Hd(function() {
            a.C && le.call(null, b)
        })
    }
    var le = zd;

    function ce(a) {}
    Ta(ce, Ua);
    ce.prototype.name = "cancel";

    function $d(a, b, c) {};
    var me = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function ne(a) {
        return a.match(me)
    }

    function oe(a) {
        return a ? decodeURI(a) : a
    }

    function pe(a) {
        return oe(ne(a)[3] || null)
    }

    function qe(a) {}

    function re(a) {}

    function se(a, b) {}

    function te(a, b) {}

    function ue(a, b, c) {}

    function ve(a) {}

    function we(a, b) {}

    function xe(a, b, c) {}

    function ye(a, b, c, d) {}
    var ze = /#|$/;

    function Ae(a, b) {}
    var Be = /[?&]($|#)/;

    function Ce(a, b) {}

    function De(a, b) {}

    function Ee(a, b) {};

    function Fe(a, b, c) {
        ld.call(this);
        this.G = null != c ? Qa(a, c) : a;
        this.C = b;
        this.i = Qa(this.ue, this);
        this.g = []
    }
    Ta(Fe, ld);
    k = Fe.prototype;
    k.wa = !1;
    k.Ma = 0;
    k.ka = null;
    k.Va = function(a) {};
    k.stop = function() {};
    k.pause = function() {};
    k.resume = function() {};
    k.qa = function() {};
    k.ue = function() {};

    function Ge(a) {};

    function He() {};

    function Ie() {}
    Ta(Ie, He);
    Ie.prototype.getCount = function() {};
    Ie.prototype.clear = function() {};

    function Je(a) {}
    Ta(Je, Ie);
    k = Je.prototype;
    k.isAvailable = function() {
        if (!this.g) return !1;
        try {
            return this.g.setItem("__sak", "1"), this.g.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    k.set = function(a, b) {};
    k.get = function(a) {};
    k.remove = function(a) {};
    k.getCount = function() {};
    k.ba = function(a) {};
    k.clear = function() {};
    k.key = function(a) {};

    function Ke() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    Ta(Ke, Je);
    var Le = {},
        Me = (Le["bn-IN"] = "bn", Le["de-DE"] = "de", Le["en-AU"] = "en-AU", Le["en-CA"] = "en-CA", Le["en-GB"] = "en-GB", Le["en-IN"] = "en-IN", Le["en-SG"] = "en-SG", Le["en-US"] = "en-US", Le["es-ES"] = "es", Le["es-MX"] = "es-MX", Le["es-US"] = "es-US", Le["fr-CA"] = "fr-CA", Le["fr-FR"] = "fr", Le["hi-IN"] = "hi", Le["id-ID"] = "id", Le["it-IT"] = "it", Le["mr-IN"] = "mr", Le["pt-BR"] = "pt-BR", Le["ta-IN"] = "ta", Le["te-IN"] = "te", Le["th-TH"] = "th", Le["gu-IN"] = "gu", Le["kn-IN"] = "kn", Le["ml-IN"] = "ml", Le["ur-IN"] = "ur", Le["ar-XB"] = "ar-XB", Le["en-XA"] =
            "en-XA", Le["en-XC"] = "en-XC", Le);
    u.uc(Me);
    u.Ua({
        Ue: "de-DE",
        Ve: "en-AU",
        We: "en-CA",
        Ye: "en-IN",
        Ze: "en-SG",
        Xe: "en-GB",
        af: "en-US",
        df: "es-ES",
        ff: "es-US",
        ef: "es-MX",
        lf: "fr-CA",
        mf: "fr-FR",
        qf: "hi-IN",
        rf: "id-ID",
        sf: "it-IT",
        Ef: "pt-BR",
        Jf: "th-TH",
        Se: "bn-IN",
        yf: "mr-IN",
        Hf: "ta-IN",
        If: "te-IN",
        nf: "gu-IN",
        tf: "kn-IN",
        xf: "ml-IN",
        Mf: "ur-IN",
        Re: "ar-XB",
        bf: "en-XA",
        cf: "en-XC"
    });
    m.PlatformConfigs = {
        APP_VERSION: "3.5.0",
        DEVICE_MODEL: "YouTube",
        WEB_SEARCH_CLIENT_ID: "",
        DEFAULT_LOCALE: "en-IN",
        PROD_API_KEY: "AIzaSyBfZufNuuDQ68tr0y5NvCPsBtQrvM8wpcA",
        PROD_SPEECH_SYNTHESIS_API_KEY: "",
        REQUIRE_LOCATION_CONSENT: !1,
        LANGUAGES_NEED_REGION_NAME: [],
        PROMPTS_FOR_MICROPHONE_PERMISSION: !0,
        YOUTUBE_APP_NAME: ""
    };
    var Ne = document,
        Oe = window;

    function Pe(a) {}
    var Qe = Fa;

    function Re() {}

    function Te(a) {}

    function Ve() {}
    var Ue = {
            Ge: "allow-forms",
            He: "allow-modals",
            Ie: "allow-orientation-lock",
            Je: "allow-pointer-lock",
            Ke: "allow-popups",
            Le: "allow-popups-to-escape-sandbox",
            Me: "allow-presentation",
            Ne: "allow-same-origin",
            Oe: "allow-scripts",
            Pe: "allow-top-navigation",
            Qe: "allow-top-navigation-by-user-activation"
        },
        We = lb(function() {});

    function Xe() {};

    function Ye(a, b) {
        a.addEventListener && a.addEventListener("load", b, !1)
    };

    function Ze(a, b) {}
    var $e = {};
    var af = !!window.google_async_iframe_id,
        Se = af && window.parent || window;

    function bf() {
        if (af && !Re()) {
            var a = "." + Ne.domain;
            try {
                for (; 2 < a.split(".").length && !Re();) Ne.domain = a = a.substr(a.indexOf(".") + 1), Se = window.parent
            } catch (b) {}
            Re() || (Se = window)
        }
        return Se
    }
    Db(rb(v("//fonts.googleapis.com/css")));
    var cf = null;

    function df() {}

    function ef() {};

    function ff(a, b, c) {};
    var gf = m.performance,
        hf = !!(gf && gf.mark && gf.measure && gf.clearMarks),
        jf = lb(function() {
            var a;
            if (a = hf) {
                var b;
                if (null === cf) {
                    cf = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (cf = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = cf;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function kf() {
        var a = bf();
        this.events = [];
        this.i = a || m;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = jf() || (null != b ? b : 1 > Math.random())
    }
    kf.prototype.disable = function() {};

    function lf(a) {}
    kf.prototype.start = function(a, b) {};
    kf.prototype.end = function(a) {};
    var mf = new kf;

    function nf() {
        var a = bf();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || mf.disable())
    }
    (function() {
        var a = bf();
        a && a.document && ("complete" == a.document.readyState ? nf() : mf.g && Ye(a, function() {
            nf()
        }))
    })();
    Sa();
    if (Ne && Ne.URL) {
        var of = Ne.URL;
        if ( of && of ) {
            var pf = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                pf.exec(decodeURIComponent( of ))
            } catch (a) {}
        }
    };

    function qf() {}
    qf.prototype.reset = function() {};
    Ga(qf);
    qf.K();

    function rf() {
        this.done = !1
    }
    Ga(rf);
    rf.K();
    var sf = (new Date).getTime();
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var tf = window,
        uf = document,
        vf = tf.location;

    function wf() {}
    var xf = /\[native code\]/;

    function yf(a, b, c) {
        return a[b] = a[b] || c
    }

    function zf(a) {}

    function Af() {
        var a;
        if ((a = Object.create) && xf.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    }
    var Bf = yf(tf, "gapi", {});
    var Cf;
    Cf = yf(tf, "___jsl", Af());
    yf(Cf, "I", 0);
    yf(Cf, "hel", 10);

    function Df() {}

    function Ef(a) {}

    function Ff(a) {};
    var Gf = yf(Cf, "perf", Af());
    yf(Gf, "g", Af());
    var Hf = yf(Gf, "i", Af());
    yf(Gf, "r", []);
    Af();
    Af();

    function If(a, b, c) {}

    function Jf(a) {};
    var Kf = Af(),
        Lf = [];

    function Mf(a) {}
    Lf.push(["jsl", function(a) {}]);
    var Nf = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Of = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Pf = /^[a-zA-Z0-9\-_\.,!]+$/,
        Qf = /^gapi\.loaded_[0-9]+$/,
        Rf = /^[a-zA-Z0-9,._-]+$/;

    function Sf(a, b, c, d) {}

    function Wf(a, b, c, d) {}

    function Xf(a) {}

    function Yf(a) {}

    function Zf(a, b, c) {}
    var Vf = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Uf = /\/cb=/g,
        Tf = /\/\//g;

    function $f() {}
    Kf.m = function(a, b, c, d) {};
    var ag = decodeURI("%73cript"),
        bg = /^[-+_0-9\/A-Za-z]+={0,2}$/;

    function cg(a, b) {}

    function dg() {}

    function eg(a) {}

    function fg(a) {}

    function gg(a, b) {}

    function hg(a, b, c) {}

    function jg(a, b) {}

    function kg(a, b, c) {}

    function ig(a, b) {}
    Bf.load = function(a, b) {};

    function lg(a) {}

    function mg(a, b) {}

    function ng(a, b) {}

    function og(a, b) {};
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function pg(a, b) {}
    pg.prototype.cancel = function(a) {};
    pg.prototype.ea = function(a, b) {};

    function sg(a, b, c) {}

    function rg(a) {}
    pg.prototype.ib = function(a) {};

    function vg(a, b, c) {}
    pg.prototype.then = function(a, b, c) {};
    Nd(pg);
    pg.prototype.isError = function(a) {};

    function wg(a) {}

    function tg(a) {}

    function ug() {}
    Ta(ug, Ua);
    ug.prototype.message = "Deferred has already fired";
    ug.prototype.name = "AlreadyCalledError";

    function qg() {}
    Ta(qg, Ua);
    qg.prototype.message = "Deferred was canceled";
    qg.prototype.name = "CanceledError";

    function yg(a) {}
    yg.prototype.j = function() {};
    var xg = {};

    function zg(a, b) {}

    function Dg(a) {}

    function Ag() {}

    function Bg(a, b, c) {}

    function Cg(a, b) {}
    Ta(Cg, Ua);

    function Eg(a) {
        ld.call(this);
        this.N = 1;
        this.C = [];
        this.G = 0;
        this.g = [];
        this.i = {};
        this.T = !!a
    }
    Ta(Eg, ld);
    k = Eg.prototype;
    k.subscribe = function(a, b, c) {};
    k.bb = function(a) {};
    k.ic = function(a, b) {};

    function Fg(a, b, c) {}
    k.clear = function(a) {};
    k.getCount = function(a) {};
    k.qa = function() {};

    function Gg(a) {}
    Gg.prototype.set = function(a, b) {};
    Gg.prototype.get = function(a) {};
    Gg.prototype.remove = function(a) {};

    function Hg(a) {}
    Ta(Hg, Gg);

    function Ig(a) {}

    function Jg(a) {}
    Hg.prototype.set = function(a, b) {};
    Hg.prototype.i = function(a) {};
    Hg.prototype.get = function(a) {};

    function Kg(a) {
        this.g = a
    }
    Ta(Kg, Hg);
    Kg.prototype.set = function(a, b, c) {};
    Kg.prototype.i = function(a) {};

    function Lg(a, b) {}
    Ta(Lg, Ie);
    var Ng = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Mg = null;

    function Og(a) {}
    k = Lg.prototype;
    k.isAvailable = function() {};
    k.set = function(a, b) {};
    k.get = function(a) {};
    k.remove = function(a) {};
    k.getCount = function() {};
    k.ba = function(a) {};
    k.clear = function() {};

    function Pg(a) {}

    function Qg(a) {};

    function Rg(a, b) {
        this.i = a;
        this.g = b + "::"
    }
    Ta(Rg, Ie);
    Rg.prototype.set = function(a, b) {};
    Rg.prototype.get = function(a) {};
    Rg.prototype.remove = function(a) {};
    Rg.prototype.ba = function(a) {};

    function Sg() {}
    Ga(Sg);
    Sg.prototype.g = 0;

    function Tg() {}
    Tg.prototype.set = function(a, b) {};
    Tg.prototype.get = function(a) {};

    function Ug(a) {};
    /*

     Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Vg = {
        "default": "__default"
    };
    var Wg = Object.prototype.hasOwnProperty;

    function Xg() {}
    Xg.prototype = Object.create(null);

    function Yg(a, b) {}

    function Zg(a) {};

    function $g(a, b, c) {}
    var ah = new Xg;
    ah[Vg["default"]] = function(a, b, c) {};
    ah.style = function(a, b, c) {};

    function bh(a, b, c) {};

    function ch() {};
    var dh = "undefined" !== typeof Node && Node.prototype.getRootNode || function() {};

    function eh(a, b) {}

    function fh(a, b, c) {}

    function gh(a, b) {};

    function hh(a, b, c, d, e) {}
    var ih = null,
        jh = null,
        kh = null,
        lh = null,
        mh = [],
        nh = hh,
        oh = [],
        ph = [];

    function qh(a) {}

    function rh() {}

    function sh(a, b) {}

    function th(a, b) {
        var c = b = void 0 === b ? {} : b,
            d = void 0 === c.matches ? hh : c.matches;
        return function(e, f, g) {}
    }
    var uh = function(a) {
            return th(function(b, c, d) {}, a)
        }(),
        vh = function(a) {
            return th(function(b, c, d) {}, a)
        }();
    var wh = [],
        xh = 0;

    function yh(a, b, c) {};
    var zh = new Xg;
    var Ah = new Xg;

    function w(a, b) {};
    /*

     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at
     http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at
     http://polymer.github.io/PATENTS.txt
    */
    function Bh(a, b, c) {}
    var Dh = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            bgcolor: 1,
            border: 1,
            checked: 1,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            dir: 8,
            disabled: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loop: 1,
            max: 1,
            maxlength: 1,
            min: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            placeholder: 1,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        Ch = {
            a: {
                href: [{
                    o: 3
                }]
            },
            area: {
                href: [{
                    o: 3
                }]
            },
            audio: {
                src: [{
                    o: 3
                }]
            },
            blockquote: {
                cite: [{
                    o: 3
                }]
            },
            button: {
                formaction: [{
                    o: 3
                }],
                formmethod: [{
                    o: 1
                }],
                type: [{
                    o: 1
                }]
            },
            command: {
                type: [{
                    o: 1
                }]
            },
            content: {
                select: [{
                    o: 1
                }]
            },
            del: {
                cite: [{
                    o: 3
                }]
            },
            details: {
                open: [{
                    o: 1
                }]
            },
            form: {
                action: [{
                    o: 3
                }],
                method: [{
                    o: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    o: 2
                }]
            },
            img: {
                src: [{
                    o: 3
                }],
                srcset: [{
                    o: 11
                }]
            },
            input: {
                formaction: [{
                    o: 3
                }],
                formmethod: [{
                    o: 1
                }],
                pattern: [{
                    o: 1
                }],
                readonly: [{
                    o: 1
                }],
                src: [{
                    o: 3
                }],
                type: [{
                    o: 1
                }]
            },
            ins: {
                cite: [{
                    o: 3
                }]
            },
            li: {
                type: [{
                    o: 1
                }]
            },
            link: {
                href: [{
                        o: 3,
                        L: "rel",
                        M: "alternate"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "author"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "bookmark"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "canonical"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "cite"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "help"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "icon"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "license"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "next"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "prefetch"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "dns-prefetch"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "prerender"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "preconnect"
                    },
                    {
                        o: 3,
                        L: "rel",
                        M: "preload"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "prev"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "search"
                    }, {
                        o: 3,
                        L: "rel",
                        M: "subresource"
                    }
                ],
                media: [{
                    o: 1
                }],
                nonce: [{
                    o: 1
                }],
                type: [{
                    o: 1
                }]
            },
            menuitem: {
                icon: [{
                    o: 3
                }]
            },
            ol: {
                type: [{
                    o: 1
                }]
            },
            q: {
                cite: [{
                    o: 3
                }]
            },
            script: {
                nonce: [{
                    o: 1
                }],
                type: [{
                    o: 1
                }]
            },
            source: {
                media: [{
                    o: 1
                }],
                src: [{
                    o: 3
                }],
                srcset: [{
                    o: 11
                }]
            },
            style: {
                media: [{
                    o: 1
                }],
                nonce: [{
                    o: 1
                }]
            },
            table: {
                cellpadding: [{
                    o: 1
                }],
                cellspacing: [{
                    o: 1
                }]
            },
            textarea: {
                readonly: [{
                    o: 1
                }]
            },
            time: {
                datetime: [{
                    o: 1
                }]
            },
            video: {
                autoplay: [{
                    o: 1
                }],
                controls: [{
                    o: 1
                }],
                poster: [{
                    o: 3
                }],
                src: [{
                    o: 3
                }]
            }
        },
        Eh = [{
            auto: !0,
            ltr: !0,
            rtl: !0
        }, {
            async: !0
        }, {
            _self: !0,
            _blank: !0
        }],
        Fh = {
            "*": {
                async: 1,
                dir: 0,
                target: 2
            }
        };

    function Gh(a, b, c) {}
    p("userfeedback.api.startFeedback", Gh, void 0);
    var Hh = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    p("yt.config_", Hh, void 0);

    function Ih(a) {
        var b = arguments;
        1 < b.length ? Hh[b[0]] = b[1] : 1 === b.length && Object.assign(Hh, b[0])
    }

    function y(a, b) {
        return a in Hh ? Hh[a] : b
    }

    function Jh(a) {
        var b = Hh.EXPERIMENT_FLAGS;
        return b ? b[a] : void 0
    };

    function Kh(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                Lh(b)
            }
        } : a
    }

    function Lh(a, b, c, d, e) {}

    function Mh(a) {}

    function Nh(a) {}

    function Oh(a, b) {};

    function Ph(a) {}
    var Rh = {};

    function Qh() {};

    function Sh(a, b) {
        Ka(a) && (a = Kh(a));
        return window.setTimeout(a, b)
    }

    function Th(a, b) {
        Ka(a) && (a = Kh(a));
        return window.setInterval(a, b)
    };
    var Uh = r("ytPubsubPubsubInstance") || new Eg;
    Eg.prototype.subscribe = Eg.prototype.subscribe;
    Eg.prototype.unsubscribeByKey = Eg.prototype.bb;
    Eg.prototype.publish = Eg.prototype.ic;
    Eg.prototype.clear = Eg.prototype.clear;
    p("ytPubsubPubsubInstance", Uh, void 0);
    var Vh = r("ytPubsubPubsubSubscribedKeys") || {};
    p("ytPubsubPubsubSubscribedKeys", Vh, void 0);
    var Wh = r("ytPubsubPubsubTopicToKeys") || {};
    p("ytPubsubPubsubTopicToKeys", Wh, void 0);
    var Xh = r("ytPubsubPubsubIsSynchronous") || {};
    p("ytPubsubPubsubIsSynchronous", Xh, void 0);

    function Yh(a, b) {}

    function $h(a) {}

    function ai(a, b) {}

    function bi(a) {}

    function Zh() {}

    function ci(a) {};
    var di = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        ei = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    function fi(a, b, c) {}

    function gi(a, b, c) {}

    function ji(a, b, c, d) {}

    function hi(a) {}
    var ii = {};

    function ki() {
        this.loading = !1;
        this.g = null
    }

    function li(a) {}

    function oi(a, b, c) {}
    ki.prototype.dispose = function() {};

    function pi() {}

    function qi(a, b) {};

    function si() {}
    ma(si, pi);

    function ri(a, b, c) {}

    function ti(a) {}
    si.prototype.start = function() {};
    si.prototype.pause = function() {};
    Ga(si);
    si.K();
    var ui = [],
        vi = !1;

    function wi() {}

    function xi() {};

    function A(a) {
        a = yi(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function zi(a, b) {
        var c = yi(a);
        return void 0 === c && void 0 !== b ? b : Number(c || 0)
    }

    function yi(a) {
        var b = y("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : y("EXPERIMENT_FLAGS", {})[a]
    };
    var Ai = window,
        Bi = Ai.ytcsi && Ai.ytcsi.now ? Ai.ytcsi.now : Ai.performance && Ai.performance.timing && Ai.performance.now ? function() {} : function() {};
    var mi = new ki,
        Ci = !1,
        Di = 0,
        Ei = "";

    function ni(a) {}

    function Fi(a) {}

    function Gi() {}

    function Hi(a) {};

    function Ii() {
        var a = Ji;
        r("yt.ads.biscotti.getId_") || p("yt.ads.biscotti.getId_", a, void 0)
    }

    function Ki(a) {
        p("yt.ads.biscotti.lastId_", a, void 0)
    };

    function Li(a) {}

    function Mi(a) {}

    function Ni(a) {}

    function Oi(a, b) {}

    function Pi(a, b, c) {};

    function Qi(a) {}

    function Si(a) {}

    function Ti(a) {}
    var Ri = new function() {
        var a = window.document;
        this.g = window;
        this.i = a
    };
    p("yt.ads_.signals_.getAdSignalsString", function(a) {}, void 0);
    Sa();
    var Ui = void 0 !== XMLHttpRequest ? function() {
        return new XMLHttpRequest
    } : void 0 !== ActiveXObject ? function() {} : null;

    function Vi() {
        if (!Ui) return null;
        var a = Ui();
        return "open" in a ? a : null
    }

    function Wi(a) {
        switch (a && "status" in a ? a.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };
    var Xi = {
            Authorization: "AUTHORIZATION",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
        },
        Yi = "app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
        Zi = !1;

    function $i(a, b) {
        b = void 0 === b ? {} : b;
        if (!c) var c = window.location.href;
        var d = ne(a)[1] || null,
            e = pe(a);
        d && e ? (d = c, c = ne(a), d = ne(d), c = c[3] == d[3] && c[1] == d[1] && c[4] == d[4]) : c = e ? pe(c) == e && (Number(ne(c)[4] || null) || null) == (Number(ne(a)[4] || null) || null) : !0;
        d = A("web_ajax_ignore_global_headers_if_set");
        for (var f in Xi) e = y(Xi[f]), !e || !c && !aj(a, f) || d && void 0 !== b[f] || (b[f] = e);
        if (c || aj(a, "X-YouTube-Utc-Offset")) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        (A("pass_biscotti_id_in_header_ajax") || A("pass_biscotti_id_in_header_ajax_tv")) &&
        (c || aj(a, "X-YouTube-Ad-Signals")) && (b["X-YouTube-Ad-Signals"] = Li(Qi(void 0)));
        return b
    }

    function bj(a) {}

    function aj(a, b) {
        var c = y("CORS_HEADER_WHITELIST") || {},
            d = pe(a);
        return d ? (c = c[d]) ? 0 <= Wa(c, b) : !1 : !0
    }

    function cj(a, b) {}

    function fj(a, b) {
        var c = b.format || "JSON";
        a = dj(a, b);
        var d = ej(a, b),
            e = !1,
            f, g = gj(a, function(h) {
                    if (!e) {
                        e = !0;
                        f && window.clearTimeout(f);
                        var l = Wi(h),
                            n = null,
                            q = 400 <= h.status && 500 > h.status,
                            t = 500 <= h.status && 600 > h.status;
                        if (l || q || t) n = hj(c, h, b.Rf);
                        if (l) a: if (h && 204 == h.status) l = !0;
                            else {
                                switch (c) {
                                    case "XML":
                                        l = 0 == parseInt(n && n.return_code, 10);
                                        break a;
                                    case "RAW":
                                        l = !0;
                                        break a
                                }
                                l = !!n
                            }
                        n = n || {};
                        q = b.context || m;
                        l ? b.onSuccess && b.onSuccess.call(q, h, n) : b.onError && b.onError.call(q, h, n);
                        b.rb && b.rb.call(q, h, n)
                    }
                }, b.method, d, b.headers,
                b.responseType, b.withCredentials);
        b.La && 0 < b.timeout && (f = Sh(function() {}, b.timeout));
        return g
    }

    function dj(a, b) {
        b.cg && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = y("XSRF_FIELD_NAME", void 0),
            d = b.De;
        d && (d[c] && delete d[c], a = Oi(a, d));
        return a
    }

    function ej(a, b) {
        var c = y("XSRF_FIELD_NAME", void 0),
            d = y("XSRF_TOKEN", void 0),
            e = b.postBody || "",
            f = b.Z,
            g = y("XSRF_FIELD_NAME", void 0),
            h;
        b.headers && (h = b.headers["Content-Type"]);
        b.Tf || pe(a) && !b.withCredentials && pe(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.Z && b.Z[g] || (f || (f = {}), f[c] = d);
        f && "string" === typeof e && (e = Mi(e), u.extend(e, f), e = b.fc && "JSON" == b.fc ? JSON.stringify(e) : ve(e));
        f = e || f && !u.isEmpty(f);
        !Zi && f && "POST" != b.method && (Zi = !0, Lh(Error("AJAX request with postData should use POST")));
        return e
    }

    function hj(a, b, c) {}

    function kj(a) {}

    function ij(a) {}

    function jj(a) {}

    function gj(a, b, c, d, e, f, g) {
        function h() {
            4 == (l && "readyState" in l ? l.readyState : 0) && b && Kh(b)(l)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var l = Vi();
        if (!l) return null;
        "onloadend" in l ? l.addEventListener("loadend", h, !1) : l.onreadystatechange = h;
        A("debug_forward_web_query_parameters") && (a = bj(a));
        l.open(c, a, !0);
        f && (l.responseType = f);
        g && (l.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = $i(a, e))
            for (var n in e) l.setRequestHeader(n, e[n]), "content-type" == n.toLowerCase() && (c = !1);
        c && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        l.send(d);
        return l
    };

    function lj() {
        var a = u.clone(mj),
            b;
        return be(new Pd(function(c, d) {
            a.onSuccess = function(e) {};
            a.onError = function(e) {
                d(new nj("Unknown request error", "net.unknown", e))
            };
            a.La = function(e) {};
            b = fj("//googleads.g.doubleclick.net/pagead/id", a)
        }), function(c) {
            c instanceof ce && b.abort();
            return Vd(c)
        })
    }

    function nj(a, b) {
        Ua.call(this, a + ", errorCode=" + b);
        this.errorCode = b;
        this.name = "PromiseAjaxError"
    }
    ma(nj, Ua);

    function oj(a) {
        this.j = void 0 === a ? null : a;
        this.g = 0;
        this.i = null
    }
    oj.prototype.then = function(a, b, c) {};
    Nd(oj);

    function qj(a) {
        var b = new oj;
        a = void 0 === a ? null : a;
        b.g = 2;
        b.i = void 0 === a ? null : a;
        return b
    }

    function pj(a) {};

    function rj(a) {
        Ua.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof sj;
        this.isTimeout = a instanceof nj && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof ce
    }
    ma(rj, Ua);
    rj.prototype.name = "BiscottiError";

    function sj() {}
    ma(sj, Ua);
    sj.prototype.name = "BiscottiMissingError";
    var mj = {
            format: "RAW",
            method: "GET",
            timeout: 5E3,
            withCredentials: !0
        },
        tj = null;

    function Ji() {
        if ("1" === u.Ta(y("PLAYER_CONFIG", {}), "args", "privembed")) return Vd(Error("Biscotti ID is not available in private embed mode"));
        tj || (tj = be(lj().then(uj), function(a) {
            return vj(2, a)
        }));
        return tj
    }

    function uj(a) {}

    function vj(a, b) {
        var c = new rj(b);
        Ki("");
        tj = qj(c);
        0 < a && wj(12E4, a - 1);
        throw c;
    }

    function wj(a, b) {
        Sh(function() {}, a)
    }

    function xj() {
        try {
            var a = r("yt.ads.biscotti.getId_");
            return a ? a() : Ji()
        } catch (b) {
            return Vd(b)
        }
    };
    var yj = {},
        zj = 0;

    function Aj() {
        Xa(y("ERRORS") || [], function(a) {});
        Ih("ERRORS", [])
    }

    function Bj(a, b, c, d, e, f) {};
    var Cj = Math.pow(2, 16) - 1,
        Dj = null,
        Ej = 0,
        Fj = {
            log_event: "events",
            log_interaction: "interactions"
        },
        Gj = Object.create(null);
    Gj.log_event = "GENERIC_EVENT_LOGGING";
    Gj.log_interaction = "INTERACTION_LOGGING";
    var Hj = new Set(["log_event"]),
        Ij = {},
        Jj = 0,
        Kj = 0,
        Lj = 0,
        Mj = r("ytLoggingTransportLogPayloadsQueue_") || {};
    p("ytLoggingTransportLogPayloadsQueue_", Mj, void 0);
    var Nj = r("ytLoggingTransportTokensToCttTargetIds_") || {};
    p("ytLoggingTransportTokensToCttTargetIds_", Nj, void 0);
    var Oj = r("ytLoggingTransportDispatchedStats_") || {};
    p("ytLoggingTransportDispatchedStats_", Oj, void 0);
    var Pj = r("ytLoggingTransportCapturedTime_") || {};
    p("ytytLoggingTransportCapturedTime_", Pj, void 0);

    function Qj() {}

    function Tj() {}

    function Sj() {}

    function Uj(a, b) {}

    function Rj(a, b) {}

    function Xj(a) {};
    var Yj = 0,
        Zj = Dc ? "webkit" : Cc ? "moz" : Bc ? "ms" : Ac ? "o" : "";

    function ak() {}

    function bk(a, b) {}
    p("ytDomDomGetNextId", r("ytDomDomGetNextId") || function() {}, void 0);
    var ck = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function dk(a) {}

    function ek(a) {}
    dk.prototype.preventDefault = function() {};
    dk.prototype.stopPropagation = function() {};
    dk.prototype.stopImmediatePropagation = function() {};
    var fk = r("ytEventsEventsListeners") || {};
    p("ytEventsEventsListeners", fk, void 0);
    var gk = r("ytEventsEventsCounter") || {
        count: 0
    };
    p("ytEventsEventsCounter", gk, void 0);

    function hk(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return u.Tb(fk, function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = La(e[4]) && La(d) && u.Sa(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }

    function ik(a) {}
    var jk = lb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function kk(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = hk(a, b, c, d);
        if (e) return e;
        e = ++gk.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {} : function(h) {};
        g = Kh(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), jk() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        fk[e] = [a, b, c, g, d];
        return e
    };
    var lk = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {} : function() {};

    function mk(a) {
        this.fb = a;
        this.g = null;
        this.G = 0;
        this.T = null;
        this.N = 0;
        this.i = [];
        for (a = 0; 4 > a; a++) this.i.push(0);
        this.C = 0;
        this.ea = kk(window, "mousemove", Qa(this.ma, this));
        this.na = Th(Qa(this.aa, this), 25)
    }
    Ta(mk, ld);
    mk.prototype.ma = function(a) {};
    mk.prototype.aa = function() {
        if (this.g) {
            var a = lk();
            if (0 != this.G) {
                var b = this.T,
                    c = this.g,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.G);
                this.i[this.C] = .5 < Math.abs((d - this.N) / this.N) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.i[c] || 0;
                3 <= b && this.fb();
                this.N = d
            }
            this.G = a;
            this.T = this.g;
            this.C = (this.C + 1) % 4
        }
    };
    mk.prototype.qa = function() {};
    var nk = {};

    function ok(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Wb ? !0 : b.Wb;
        var c = void 0 === b.gc ? !1 : b.gc,
            d = void 0 === b.oc ? !1 : b.oc;
        null == r("_lact", window) && (b = parseInt(y("LACT"), 10), b = isFinite(b) ? Sa() - Math.max(b, 0) : -1, p("_lact", b, window), p("_fact", b, window), -1 == b && pk(), kk(document, "keydown", function(e) {}), kk(document, "keyup", function(e) {}), kk(document, "mousedown", function(e) {}), kk(document, "mouseup", function(e) {}), a && (c ? kk(window, "touchmove", function(e) {}, {
            passive: !0
        }) : (kk(window, "resize", function(e) {}), kk(window, "scroll", function(e) {}))), new mk(function() {}), kk(document, "touchstart", function(e) {}, {
            passive: !0
        }), kk(document, "touchend", function(e) {}, {
            passive: !0
        }))
    }

    function qk(a, b, c, d) {}

    function pk(a, b) {
        if (!rk(a, b)) {
            null == r("_lact", window) && ok();
            var c = Sa();
            p("_lact", c, window); - 1 == r("_fact", window) && p("_fact", c, window);
            (c = r("ytglobal.ytUtilActivityCallback_")) && c()
        }
    }

    function rk(a, b) {
        return a && b && b.path ? !!cb(b.path, function(c) {}) : !1
    }

    function sk() {};
    var tk = r("ytLoggingGelSequenceIdObj_") || {};
    p("ytLoggingGelSequenceIdObj_", tk, void 0);

    function uk(a, b, c, d) {};

    function vk(a) {}

    function wk(a) {}

    function xk(a, b) {}

    function yk(a) {}
    vk.prototype.toString = function() {};

    function zk(a, b) {};

    function Ak(a, b) {
        this.topic = a;
        this.g = b
    }
    Ak.prototype.toString = function() {};
    var Bk = r("ytPubsub2Pubsub2Instance") || new Eg;
    Eg.prototype.subscribe = Eg.prototype.subscribe;
    Eg.prototype.unsubscribeByKey = Eg.prototype.bb;
    Eg.prototype.publish = Eg.prototype.ic;
    Eg.prototype.clear = Eg.prototype.clear;
    p("ytPubsub2Pubsub2Instance", Bk, void 0);
    var Ck = r("ytPubsub2Pubsub2SubscribedKeys") || {};
    p("ytPubsub2Pubsub2SubscribedKeys", Ck, void 0);
    var Dk = r("ytPubsub2Pubsub2TopicToKeys") || {};
    p("ytPubsub2Pubsub2TopicToKeys", Dk, void 0);
    var Ek = r("ytPubsub2Pubsub2IsAsync") || {};
    p("ytPubsub2Pubsub2IsAsync", Ek, void 0);
    p("ytPubsub2Pubsub2SkipSubKey", null, void 0);

    function Fk(a, b) {}

    function Hk(a) {}

    function Jk() {}

    function Lk(a) {}

    function Gk() {};

    function Mk(a) {}
    ma(Mk, zk);
    var Ik = new Ak("screen-created", Mk),
        Nk = [],
        Pk = Ok,
        Qk = 0;

    function Rk(a, b, c, d) {}

    function Ok() {}

    function Sk(a, b, c) {}

    function Kk(a) {};

    function Vj(a) {}

    function Tk(a, b, c) {};

    function Uk(a, b, c, d, e) {};

    function Vk(a) {
        var b = new Ke;
        (b = b.isAvailable() ? a ? new Rg(b, a) : b : null) || (a = new Lg(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.g = (a = b) ? new Kg(a) : null;
        this.i = document.domain || window.location.hostname
    }
    Vk.prototype.set = function(a, b, c, d) {};
    Vk.prototype.get = function(a, b) {};
    Vk.prototype.remove = function(a) {};
    new Vk("yt.innertube");

    function Wk(a) {}

    function Wj(a, b, c, d) {};
    var Xk = Sa().toString();

    function Yk() {
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                var a = Array(16),
                    b = new Uint8Array(16);
                window.crypto.getRandomValues(b);
                for (var c = 0; c < a.length; c++) a[c] = b[c];
                var d = a;
                break a
            } catch (e) {}
            d = Array(16);
            for (a = 0; 16 > a; a++) {
                b = Sa();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (Xk)
                for (a = 1, b = 0; b < Xk.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ Xk.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
        return a.join("")
    };
    var Zk = !1,
        $k = [],
        al = r("ytLoggingTimeDocumentNonce_") || Yk();
    p("ytLoggingTimeDocumentNonce_", al, void 0);
    var bl = 0,
        cl = null,
        dl = null;

    function el() {}

    function fl(a) {}

    function gl(a) {};

    function hl(a) {}

    function il(a) {}

    function jl(a) {}
    p("yt_logging_screen.getRootVeType", jl, void 0);

    function kl(a) {}
    p("yt_logging_screen.getCurrentCsn", kl, void 0);

    function ll(a, b, c) {}
    p("yt_logging_screen.setCurrentScreen", ll, void 0);

    function ml(a, b, c, d) {};
    var nl = {
        "consent.google.com": !0,
        "consent.youtube.com": !0,
        "consent-daily-0.sandbox.youtube.com": !0,
        "consent-daily-1.sandbox.youtube.com": !0,
        "consent-daily-2.sandbox.youtube.com": !0,
        "consent-daily-3.sandbox.youtube.com": !0,
        "consent-daily-4.sandbox.youtube.com": !0,
        "consent-daily-5.sandbox.youtube.com": !0,
        "consent-daily-6.sandbox.youtube.com": !0,
        "consent-autopush.sandbox.youtube.com": !0,
        "daily-0.consent.corp.youtube.com": !0,
        "daily-1.consent.corp.youtube.com": !0,
        "daily-2.consent.corp.youtube.com": !0,
        "daily-3.consent.corp.youtube.com": !0,
        "daily-4.consent.corp.youtube.com": !0,
        "daily-5.consent.corp.youtube.com": !0,
        "daily-6.consent.corp.youtube.com": !0,
        "autopush.consent.corp.youtube.com": !0,
        "dev.consent.corp.youtube.com": !0,
        "consent-daily-0.sandbox.google.com": !0,
        "consent-daily-1.sandbox.google.com": !0,
        "consent-daily-2.sandbox.google.com": !0,
        "consent-daily-3.sandbox.google.com": !0,
        "consent-daily-4.sandbox.google.com": !0,
        "consent-daily-5.sandbox.google.com": !0,
        "consent-daily-6.sandbox.google.com": !0,
        "consent-autopush.sandbox.google.com": !0,
        "daily-0.consent.corp.google.com": !0,
        "daily-1.consent.corp.google.com": !0,
        "daily-2.consent.corp.google.com": !0,
        "daily-3.consent.corp.google.com": !0,
        "daily-4.consent.corp.google.com": !0,
        "daily-5.consent.corp.google.com": !0,
        "daily-6.consent.corp.google.com": !0,
        "autopush.consent.corp.google.com": !0,
        "dev.consent.corp.google.com": !0
    };

    function ol(a) {};

    function pl(a, b) {}

    function ql() {}

    function ul() {}

    function sl() {}

    function tl() {};

    function vl(a) {};

    function wl(a, b, c) {}

    function xl() {}

    function yl() {};

    function zl(a, b) {}

    function Al(a, b) {}

    function Bl(a, b) {};
    var Cl = r("ytLoggingLatencyUsageStats_") || {};
    p("ytLoggingLatencyUsageStats_", Cl, void 0);
    var Dl = 0;

    function El(a, b) {}

    function Fl(a) {}

    function Gl() {};

    function Hl() {}
    Hl.prototype.clear = function() {};

    function Il(a, b) {}
    Ga(Hl);

    function Jl(a, b) {};
    var Kl = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    p("yt.msgs_", Kl, void 0);

    function B(a) {
        var b = void 0 === b ? {} : b;
        a = (a = a in Kl ? Kl[a] : void 0) || "";
        var c = {},
            d;
        for (d in b) {
            c.za = d;
            var e = function(f) {}(c);
            a = a.replace(new RegExp("\\$\\{" + c.za + "\\}", "gi"), e);
            a = a.replace(new RegExp("\\$" + c.za, "gi"), e);
            c = {
                za: c.za
            }
        }
        return a
    };
    var Ll = Kc || Lc;
    var Ml = {},
        Nl = 0;

    function Ol(a, b, c, d, e) {}

    function Pl(a, b) {}

    function Sl(a) {}

    function Rl(a, b) {}

    function Ql(a, b) {};

    function Tl(a, b) {}

    function Vl(a, b) {}

    function Xl(a, b) {}

    function Ul(a) {}

    function Wl(a) {};
    var Zl;
    var $l = cc,
        am = $l.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
    if (!am || 2 > am.length) Zl = void 0;
    else {
        var bm = $l.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);
        Zl = bm && 6 == bm.length ? Number(bm[5].replace("_", ".")) : 0
    }
    var cm = Zl,
        dm = 0 <= cm;
    dm && 0 <= cc.search("Safari") && cc.search("Version");

    function em() {}
    var fm = dm && 4 > cm ? .1 : 0,
        gm = new em;
    em.prototype.g = null;
    em.prototype.getDuration = function() {};
    em.prototype.getCurrentTime = function() {};
    em.prototype.i = function() {};

    function hm() {
        this.g = [];
        this.i = [];
        this.j = []
    }
    Ga(hm);
    var im = r("ytPlayerUtilsVideoTagPoolInstance") || hm.K();
    p("ytPlayerUtilsVideoTagPoolInstance", im, void 0);
    k = hm.prototype;
    k.Sb = function(a) {};

    function jm(a, b, c) {}

    function km(a, b) {}
    k.Fe = function(a, b) {};
    k.ye = function(a) {};
    k.ge = function(a) {};
    k.Nd = function() {};
    hm.prototype.fillPool = hm.prototype.Sb;
    hm.prototype.getTag = hm.prototype.Fe;
    hm.prototype.releaseTag = hm.prototype.ye;
    hm.prototype.hasTags = hm.prototype.ge;
    hm.prototype.activateTags = hm.prototype.Nd;
    var lm = {},
        mm = (lm.auto = 0, lm.tiny = 144, lm.light = 144, lm.small = 240, lm.medium = 360, lm.large = 480, lm.hd720 = 720, lm.hd1080 = 1080, lm.hd1440 = 1440, lm.hd2160 = 2160, lm.hd2880 = 2880, lm.highres = 4320, lm);
    var nm = r("ytglobal.prefsUserPrefsPrefs_") || {};
    p("ytglobal.prefsUserPrefsPrefs_", nm, void 0);

    function om() {
        this.g = y("ALT_PREF_COOKIE_NAME", "PREF");
        var a = Yc.get("" + this.g, void 0);
        if (a) {
            a = decodeURIComponent(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (nm[d] = c.toString())
            }
        }
    }
    k = om.prototype;
    k.get = function(a, b) {};
    k.set = function(a, b) {};

    function rm(a, b) {
        return !!((sm("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }

    function tm(a, b) {}
    k.remove = function(a) {};
    k.save = function() {};
    k.clear = function() {};
    k.dump = function() {};

    function qm(a) {}

    function pm(a) {}

    function sm(a) {
        a = void 0 !== nm[a] ? nm[a].toString() : null;
        return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null
    }
    Ga(om);
    var um = window.performance && window.performance.memory,
        vm = !1,
        wm = {},
        xm = {},
        ym = {};

    function zm() {}

    function Am() {};
    var Bm = window,
        Cm = Bm.performance || Bm.mozPerformance || Bm.msPerformance || Bm.webkitPerformance || {};

    function Dm(a) {};

    function Em() {
        var a = y("TIMING_TICK_EXPIRATION");
        a || (a = {}, Ih("TIMING_TICK_EXPIRATION", a));
        return a
    }

    function Fm() {};

    function Gm(a, b) {}
    ma(Gm, zk);

    function Hm(a, b) {}
    ma(Hm, zk);
    var Im = new Ak("aft-recorded", Gm),
        Jm = new Ak("timing-sent", Hm);

    function Km(a, b, c) {}

    function Mm(a) {}

    function Pm(a) {}

    function Qm(a) {
        return !!r("yt.timing." + (a || "") + "pingSent_")
    }

    function Lm(a, b) {}

    function Rm(a) {
        return r("ytcsi." + (a || "") + "data_") || Sm(a)
    }

    function Om(a) {}

    function Nm(a) {
        a = Rm(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    function Tm(a) {}

    function Sm(a) {};

    function Um(a) {}
    ma(Um, Error);
    var Vm = {
            ad_to_ad: "LATENCY_ACTION_AD_TO_AD",
            ad_to_video: "LATENCY_ACTION_AD_TO_VIDEO",
            app_startup: "LATENCY_ACTION_APP_STARTUP",
            "artist.analytics": "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",
            "artist.events": "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",
            "artist.presskit": "LATENCY_ACTION_CREATOR_ARTIST_PROFILE",
            browse: "LATENCY_ACTION_BROWSE",
            channels: "LATENCY_ACTION_CHANNELS",
            channel: "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
            "channel.analytics": "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
            "channel.comments": "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
            "channel.copyright": "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",
            "channel.monetization": "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
            "channel.translations": "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
            "channel.videos": "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
            chips: "LATENCY_ACTION_CHIPS",
            embed: "LATENCY_ACTION_EMBED",
            home: "LATENCY_ACTION_HOME",
            library: "LATENCY_ACTION_LIBRARY",
            live: "LATENCY_ACTION_LIVE",
            prebuffer: "LATENCY_ACTION_PREBUFFER",
            prefetch: "LATENCY_ACTION_PREFETCH",
            results: "LATENCY_ACTION_RESULTS",
            search: "LATENCY_ACTION_RESULTS",
            search_ui: "LATENCY_ACTION_SEARCH_UI",
            search_zero_state: "LATENCY_ACTION_SEARCH_ZERO_STATE",
            tenx: "LATENCY_ACTION_TENX",
            video_to_ad: "LATENCY_ACTION_VIDEO_TO_AD",
            watch: "LATENCY_ACTION_WATCH",
            "watch,watch7": "LATENCY_ACTION_WATCH",
            "watch,watch7_html5": "LATENCY_ACTION_WATCH",
            "watch,watch7ad": "LATENCY_ACTION_WATCH",
            "watch,watch7ad_html5": "LATENCY_ACTION_WATCH",
            wn_comments: "LATENCY_ACTION_LOAD_COMMENTS",
            ww_rqs: "LATENCY_ACTION_WHO_IS_WATCHING",
            "video.analytics": "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
            "video.comments": "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
            "video.edit": "LATENCY_ACTION_CREATOR_VIDEO_EDIT",
            "video.translations": "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
            "video.video_editor": "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
            "video.video_editor_async": "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
            "video.monetization": "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
            voice_assistant: "LATENCY_ACTION_VOICE_ASSISTANT"
        },
        C = {},
        Wm = (C.ad_allowed = "adTypesAllowed", C.yt_abt = "adBreakType", C.ad_cpn = "adClientPlaybackNonce",
            C.ad_docid = "adVideoId", C.yt_ad_an = "adNetworks", C.ad_at = "adType", C.browse_id = "browseId", C.p = "httpProtocol", C.t = "transportProtocol", C.cpn = "clientPlaybackNonce", C.cseg = "creatorInfo.creatorSegment", C.csn = "clientScreenNonce", C.docid = "videoId", C.GetHome_rid = "getHomeRequestId", C.is_continuation = "isContinuation", C.is_nav = "isNavigation", C.b_p = "kabukiInfo.browseParams", C.is_prefetch = "kabukiInfo.isPrefetch", C.is_secondary_nav = "kabukiInfo.isSecondaryNav", C.prev_browse_id = "kabukiInfo.prevBrowseId", C.query_source =
            "kabukiInfo.querySource", C.voz_type = "kabukiInfo.vozType", C.yt_lt = "loadType", C.mver = "creatorInfo.measurementVersion", C.yt_ad = "isMonetized", C.nr = "webInfo.navigationReason", C.ncnp = "webInfo.nonPreloadedNodeCount", C.prt = "playbackRequiresTap", C.pis = "playerInfo.playerInitializedState", C.paused = "playerInfo.isPausedOnLoad", C.yt_pt = "playerType", C.fmt = "playerInfo.itag", C.yt_pl = "watchInfo.isPlaylist", C.yt_pre = "playerInfo.preloadType", C.yt_ad_pr = "prerollAllowed", C.pa = "previousAction", C.yt_red = "isRedSubscriber",
            C.st = "serverTimeMs", C.aq = "tvInfo.appQuality", C.br_trs = "tvInfo.bedrockTriggerState", C.label = "tvInfo.label", C.is_mdx = "tvInfo.isMdx", C.preloaded = "tvInfo.isPreloaded", C.query = "unpluggedInfo.query", C.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", C.yt_vst = "videoStreamType", C.vph = "viewportHeight", C.vpw = "viewportWidth", C.yt_vis = "isVisible", C),
        Xm = "isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Ym = {},
        Zm = (Ym.mver = "MEASUREMENT_VERSION_", Ym.pis = "PLAYER_INITIALIZED_STATE_", Ym.yt_pt = "LATENCY_PLAYER_", Ym.pa = "LATENCY_ACTION_", Ym.yt_vst = "VIDEO_STREAM_TYPE_", Ym),
        $m = "all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");

    function an(a) {
        return A("csi_on_gel") || !!Rm(a).useGel
    }

    function bn(a, b, c) {
        var d = cn(c);
        d.gelTicks && (d.gelTicks["tick_" + a] = !0);
        c || b || Bi();
        return an(c) ? (c = Tm(c), "_start" === a ? Fl("baseline_" + c) || wl("latencyActionBaselined", {
            clientActionNonce: c
        }, {
            timestamp: b
        }) : Fl("tick_" + a + "_" + c) || wl("latencyActionTicked", {
            tickName: a,
            clientActionNonce: c
        }, {
            timestamp: b
        }), !0) : !1
    }

    function dn(a, b, c) {}

    function cn(a) {
        a = Rm(a);
        if (!("gel" in a)) a.gel = {
            gelTicks: {},
            gelInfos: {}
        };
        else if (a.gel) {
            var b = a.gel;
            b.gelInfos || (b.gelInfos = {});
            b.gelTicks || (b.gelTicks = {})
        }
        return a.gel
    }

    function en(a) {};
    var fn = {
            vc: !0
        },
        gn = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'link[rel="stylesheet"][name="player/www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="mobile-c3/mobile-c3"]': "mcj",
            'link[rel="stylesheet"][name="mobile-c3"]': "mcc",
            'script[name="player-plasma-ias-phone/base"]': "mcppj",
            'script[name="player-plasma-ias-tablet/base"]': "mcptj",
            'link[rel="stylesheet"][name="mobile-polymer-player-ias"]': "mcpc",
            'script[name="mobile_blazer_core_mod"]': "mbcj",
            'link[rel="stylesheet"][name="mobile_blazer_css"]': "mbc",
            'script[name="mobile_blazer_logged_in_users_mod"]': "mbliuj",
            'script[name="mobile_blazer_logged_out_users_mod"]': "mblouj",
            'script[name="mobile_blazer_noncore_mod"]': "mbnj",
            "#player_css": "mbpc",
            'script[name="mobile_blazer_desktopplayer_mod"]': "mbpj",
            'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]': "mbtc",
            'script[name="mobile_blazer_watch_mod"]': "mbwj"
        },
        hn = !1;

    function jn(a, b, c) {
        var d = Nm(c),
            e;
        if (e = A("use_first_tick")) e = Nm(c), e = a in e;
        if (!e) {
            b || "_" == a[0] || (e = a, Cm.mark && (Gb(e, "mark_") || (e = "mark_" + e), c && (e += " (" + c + ")"), Cm.mark(e)));
            e = b || Bi();
            d[a] && (d["_" + a] = d["_" + a] || [d[a]], d["_" + a].push(e));
            d[a] = e;
            d = Em();
            if (e = d[a]) ti(e), d[a] = 0;
            bn(a, b, c) || kn(c)
        }
    }

    function ln(a) {}

    function mn(a, b, c) {}

    function nn(a) {}

    function kn(a) {
        if (!Qm(a)) {
            var b = y((a || "") + "TIMING_ACTION", void 0),
                c = Nm(a);
            if (r("ytglobal.timing" + (a || "") + "ready_") && b && c._start && (b = nn(a)))
                if (hn || (Fk(Im, new Gm(Math.round(b - c._start), a)), hn = !0), a) on(a);
                else {
                    b = !0;
                    var d = y("TIMING_WAIT", []);
                    if (d.length)
                        for (var e = 0, f = d.length; e < f; ++e)
                            if (!(d[e] in c)) {
                                b = !1;
                                break
                            }
                    b && on(a)
                }
        }
    }

    function pn() {}

    function on(a) {}

    function qn(a) {}
    var rn = Qa(Cm.clearResourceTimings || Cm.webkitClearResourceTimings || Cm.mozClearResourceTimings || Cm.msClearResourceTimings || Cm.oClearResourceTimings || Fa, Cm);

    function sn() {}

    function tn(a, b) {};

    function un(a) {};

    function vn() {
        if (this.constructor === vn) throw new TypeError("VisibilityObserver cannot be instantiated directly.");
    }
    vn.prototype.dispose = function() {};
    vn.prototype.pb = function() {};
    vn.prototype.wc = function() {};
    vn.prototype.Na = function() {};

    function wn(a, b) {
        b = void 0 === b ? 0 : b;
        vn.call(this);
        this.i = new IntersectionObserver(this.de.bind(this), a ? {
            root: a,
            rootMargin: "-0.1px"
        } : {
            rootMargin: "-0.1px"
        });
        var c = "-0.1px -0.1px " + b + "px -0.1px";
        this.j = new IntersectionObserver(this.ee.bind(this), a ? {
            root: a,
            rootMargin: c
        } : {
            rootMargin: c
        });
        this.g = new Map
    }
    ma(wn, vn);
    k = wn.prototype;
    k.dispose = function() {};
    k.wc = function() {};
    k.de = function(a) {};
    k.ee = function(a) {};
    k.pb = function(a, b, c) {};
    k.Na = function(a) {};

    function xn(a) {
        if ("1" !== u.Ta(y("PLAYER_CONFIG", {}), "args", "privembed")) {
            a && Ii();
            try {
                xj().then(function() {}, function() {}), Sh(xn, 18E5)
            } catch (b) {
                Lh(b)
            }
        }
    };

    function yn(a, b, c, d, e) {}

    function zn(a, b, c, d) {}

    function An(a, b, c, d, e) {}

    function Bn(a) {}

    function Cn(a) {}

    function Dn(a) {}

    function En(a, b, c) {}

    function Fn() {}

    function Gn(a) {}

    function Hn(a) {}

    function In(a) {}

    function Jn(a) {}

    function Kn(a) {}

    function Ln(a) {}

    function Mn(a, b, c) {}

    function Nn(a) {};

    function On() {};

    function Pn() {}
    Ga(Pn);
    Pn.prototype.load = function(a) {};

    function Qn(a, b, c, d, e, f, g) {}

    function Sn(a, b, c) {}

    function Tn(a, b, c, d, e) {}

    function Rn(a, b, c, d, e, f, g) {};

    function Un(a, b) {}

    function Vn(a) {};
    var Wn = /^(?:https:)?\/\/[0-9a-z-.]+\.(google|youtube)\.com\//;

    function Xn(a) {};

    function Yn(a) {};

    function Zn(a) {}

    function $n(a) {};

    function ao(a) {}

    function bo(a) {};
    var co = v("https://clients2.google.com/gr/gr_sync.js");

    function eo() {}
    eo.prototype.init = function() {};

    function go() {}

    function fo() {};
    var ho = new Vk("yt.autonav");
    var io = ["commandMetadata", "webCommandMetadata", "rootVe"];

    function jo() {}
    var ko;

    function lo() {}

    function mo(a, b, c) {}

    function no(a, b, c, d) {}

    function oo(a, b, c) {};

    function po(a) {};
    var qo = Sg.K();

    function ro() {
        this.g = ""
    }
    ro.prototype.toString = function() {};

    function so(a) {}

    function to(a) {
        var b = new ro;
        a = rb(a);
        var c = ":" + (qo.g++).toString(36);
        b.g = a + c;
        return b
    };
    var uo = {},
        vo = (uo[1] = {
            X: null,
            W: null,
            da: null
        }, uo[2] = {
            X: function(a, b, c) {},
            W: gc,
            da: ic
        }, uo[3] = {
            X: function(a, b, c) {},
            W: Rb,
            da: Ub
        }, uo[4] = {
            X: function() {},
            W: vb,
            da: yb
        }, uo[5] = {
            X: function() {},
            W: ac,
            da: function(a) {}
        }, uo[7] = {
            X: function() {},
            W: tb,
            da: function(a) {}
        }, uo[8] = {
            X: function(a, b, c) {},
            W: null,
            da: null
        }, uo[9] = {
            X: function() {},
            W: ob,
            da: rb
        }, uo[10] = {
            X: function(a, b, c) {},
            W: ro,
            da: function(a) {}
        }, uo);

    function wo(a, b, c) {};
    var xo = [];

    function yo() {}

    function zo(a) {};
    var Ao = Object.freeze ? Object.freeze(Object.create(null)) : {};

    function Bo(a, b, c, d) {}

    function D(a) {}

    function E(a) {
        try {
            return a()
        } catch (b) {
            return Mh(b), null
        }
    }

    function Co() {}
    var Do = window.requestIdleCallback || function(a) {};
    var Eo = {},
        Fo = null,
        Go = "";

    function Ho() {}

    function Io(a) {};

    function F() {};
    var Jo = !1,
        Ko = !1;

    function Lo(a) {}

    function Mo(a) {}

    function No() {}

    function Oo(a) {}

    function Po() {}

    function Qo() {}

    function Ro() {};
    var G = {
        Bc: B("ACCOUNT_LABEL"),
        eb: B("AD_BADGE_HINT"),
        Aa: B("AD_BADGE_TEXT"),
        Cc: B("ADD_TO_DROPDOWN_LABEL"),
        Dc: B("AUTONAV_TOGGLE"),
        P: B("CANCEL"),
        Ec: B("CHANNEL_SWITCHER_LABEL"),
        ja: B("CLOSE"),
        Fc: B("CLOSE_SEARCH_LABEL"),
        Gc: B("CLOSE_SETTINGS_LABEL"),
        Hc: B("COMMENT_MODAL_CONTENT"),
        Ic: B("CONFIRM_OK"),
        Jc: B("CONNECT_TO_THE_INTERNET"),
        Kc: B("COPIED_TO_CLIPBOARD"),
        Lc: B("COPY"),
        Mc: B("COPY_DEBUG_INFO"),
        Te: B("CREATE_CHANNEL_TITLE"),
        Nc: B("FAILED_COPY_ERROR_MESSAGE"),
        gf: B("FLAG_CONFIRM"),
        hf: B("FLAG_CONTENT"),
        jf: B("FLAG_LABEL"),
        kf: B("FLAG_TITLE"),
        Oc: B("GOOGLE_COMPANY"),
        yb: B("HOME"),
        pf: B("HIDE_SEARCH_FILTERS_LABEL"),
        Pc: B("INVALID_RESPONSE_RECEIVED"),
        Qc: B("LIBRARY"),
        uf: B("LISTENING"),
        vf: B("LONG_PRESS_MIC_TO_SPEAK"),
        Rc: B("MENU_DESKTOP"),
        Sc: B("MENU_EXIT"),
        Tc: B("MENU_FEEDBACK"),
        Uc: B("MENU_HELP"),
        Vc: B("MENU_IMPRESSUM"),
        Wc: B("MENU_NETZDG"),
        Xc: B("MENU_NETZDG_REPORT_LINK"),
        zb: B("MENU_PLAYER_SETTINGS"),
        Yc: B("MENU_SETTINGS"),
        Zc: B("MENU_SIGN_IN"),
        ad: B("MENU_TERMS"),
        wf: B("MENU_TITLE"),
        bd: B("MENU_YOUR_DATA"),
        cd: B("MORE_INFO"),
        gb: B("MORE_OPTIONS"),
        dd: B("NEW_PLAYLIST"),
        ed: B("NEXT_VIDEO"),
        Af: B("NO_MIC_INPUT"),
        fd: B("NOT_FOUND_CTA"),
        gd: B("NOT_FOUND_MESSAGE"),
        hd: B("NOT_FOUND_TITLE"),
        zf: B("NOTIFICATION_ERROR_MESSAGE"),
        jd: B("OFFLINE_CHECK_CONNECTION"),
        ld: B("OPEN_APP"),
        kd: B("OOPS_MESSAGE"),
        md: B("PLAYER_CAPTION"),
        nd: B("PLAYER_CAPTION_OFF"),
        Bf: B("PLAYER_CAPTION_ON"),
        od: B("PLAYER_EXIT_FULLSCREEN"),
        pd: B("PLAYER_FULLSCREEN"),
        qd: B("PLAYER_LIVE_NOW"),
        sd: B("PLAYER_NEXT"),
        td: B("PLAYER_PAUSE"),
        ud: B("PLAYER_PLAY"),
        vd: B("PLAYER_PREVIOUS"),
        Cf: B("PLAYER_PROGRESS_BAR"),
        wd: B("PLAYER_QUALITY"),
        xd: B("PLAYER_QUALITY_AUTO"),
        yd: B("PLAYER_SPEED"),
        zd: B("PLAYER_SPEED_NORMAL"),
        Ad: B("PLAYER_TIME_DURATION"),
        Bd: B("PLAYER_TIME_ELAPSED"),
        Bb: B("PLAYLIST_NAME_MISSING"),
        Df: B("PLAYLIST_NAME_TOO_LONG"),
        Ab: B("PLAYLIST_NAME_INVALID_CHARACTERS"),
        Cd: B("PLAYLIST_DESCRIPTION_INVALID_CHARACTERS"),
        Dd: B("PLEASE_FIX_ERRORS"),
        Ed: B("PREVIOUS_VIDEO"),
        Fd: B("PRIVACY_POLICY"),
        Gd: B("SAVE_PLAYLIST"),
        Hd: B("SEARCH_FILTERS_LABEL"),
        Id: B("SEARCH_LABEL"),
        Jd: B("SETTINGS_LABEL"),
        Ff: B("SETTINGS_MIC_PERMISSION"),
        Gf: B("SHOW_SEARCH_FILTERS_LABEL"),
        Oa: B("SHOW_LESS"),
        Ba: B("SHOW_MORE"),
        Ca: B("SIGN_IN_LABEL"),
        Kd: B("STATS_FOR_NERDS"),
        Ld: B("TERMS_OF_SERVICE"),
        Md: B("TRENDING"),
        Kf: B("TRY_AGAIN_LATER"),
        Lf: B("TRY_AGAIN_MIC_PERMISSION")
    };

    function So() {};
    ah[Vg["default"]] = function(a, b, c) {};

    function To(a, b) {}

    function Uo(a, b) {}

    function Vo(a, b) {};

    function H(a, b, c) {}

    function Wo(a) {
        var b = a.toString().toLowerCase();
        return function(c, d) {}
    }
    var Xo = Wo("A"),
        Yo = Wo("BUTTON"),
        I = Wo("DIV"),
        Zo = Wo("FORM"),
        $o = Wo("H1"),
        ap = Wo("H2"),
        bp = Wo("H3"),
        cp = Wo("H4"),
        dp = Wo("HEADER"),
        ep = Wo("IMG"),
        fp = Wo("INPUT"),
        gp = Wo("LABEL"),
        hp = Wo("OPTION"),
        ip = Wo("P"),
        jp = Wo("SCRIPT"),
        kp = Wo("SELECT"),
        J = Wo("SPAN"),
        lp = Wo("TEXTAREA");

    function mp(a, b, c) {}

    function np(a, b) {
        var c = Wo(new nb(a));
        return function(d, e) {}
    };
    var op = new Set;

    function pp(a, b) {}
    pp.prototype.observe = function(a) {};

    function qp(a, b) {}
    pp.prototype.i = function() {};

    function rp(a) {};

    function sp() {}
    ma(sp, vn);
    sp.prototype.pb = function(a, b, c) {};
    sp.prototype.Na = function(a) {};
    sp.prototype.dispose = function() {};
    var tp = !1,
        up = null,
        vp = [];

    function wp(a, b, c) {}

    function xp(a) {}

    function yp(a) {
        up || tp || (tp = !0, (up = a()) && vp.forEach(function(b) {}), vp.length = 0)
    }
    window.addEventListener("state-navigateend", function() {});
    var zp = {
            Da: !0,
            state: "visible"
        },
        Ap = {
            Da: !1,
            state: "visible"
        },
        Bp = {
            Da: !1,
            state: "hidden"
        };

    function Cp(a, b) {}

    function Dp(a, b, c) {}

    function Ep(a, b) {}

    function Fp(a, b, c) {}

    function Gp() {}

    function Hp() {
        "IntersectionObserver" in window ? yp(function() {
            return new wn
        }) : yp(function() {});
        window.addEventListener("state-responsestart", Gp)
    };

    function Ip(a) {};
    var K = !!y("MWEB_USE_SPRITE", void 0);

    function Jp(a, b, c, d) {}

    function L(a, b) {}

    function M(a) {}

    function Kp() {}

    function Lp() {}

    function Mp() {}

    function Np() {}

    function Op() {}

    function Pp() {}

    function Qp() {}

    function Rp() {}

    function Sp() {}
    var Tp = {
            ACCOUNT_BOX: function() {},
            ACCOUNT_CIRCLE: function() {},
            ADD_TO_PLAYLIST: function() {},
            ACCOUNT_LINKED: function() {},
            ACCOUNT_SOME_LINKED: function() {},
            ACCOUNT_UNLINKED: function() {},
            ARROW_DROP_DOWN: function() {},
            ARROW_DROP_UP: function() {},
            AVATAR_CIRCLE_BLUE: function() {},
            AVATAR_LOGGED_OUT: function() {},
            ARROW_BACK: function() {},
            CHECK: function() {},
            CHECK_BLUE: function() {},
            CHECK_CIRCLE_THICK: function() {},
            CHEVRON_RIGHT: function() {},
            CLOSE: Lp,
            COMMENT: function() {},
            CONSENT_SHIELD: function() {},
            DELETE: function() {},
            DESKTOP: function() {},
            DISLIKE: Kp,
            DISLIKE_COMMENT: function() {},
            DISMISSAL: Lp,
            DISMISSAL_BLACK: function() {},
            EDIT: function() {},
            EXIT_TO_APP: function() {},
            EXPAND_LESS: function() {},
            EXPAND_MORE: function() {},
            EXTERNAL_LINK: Pp,
            FAB_UPLOAD: function() {},
            FEEDBACK: function() {},
            FLAG: function() {},
            FULLSCREEN: function() {},
            FULLSCREEN_EXIT: function() {},
            FULL_HEART: function() {},
            GEAR: function() {},
            GOOGLE_LOGO: function() {},
            HAPPY: function() {},
            HELP: function() {},
            INCOGNITO_CIRCLE: function() {},
            INFO: function() {},
            INFO_OUTLINE: function() {},
            KEEP: function() {},
            LIKE: Mp,
            LIKE_COMMENT: function() {},
            LOGO: Np,
            MEH: function() {},
            MICROPHONE_ON: function() {},
            MIX: function() {},
            MONETIZATION_ON: function() {},
            MORE_CHEVRON: function() {},
            MORE_HORIZ: function() {},
            MORE_VERT: Op,
            MORE_VERT_WHITE: function() {},
            OFFICIAL_ARTIST_BADGE: function() {},
            OFFLINE_CLOUD: function() {},
            OFFLINE_DOWNLOAD: function() {},
            OPEN_IN_NEW: Pp,
            PERSON_ADD: function() {},
            PIVOT_LIBRARY: function() {},
            PLAYER_NEXT: function() {},
            PLAYER_PAUSE: function() {},
            PLAYER_PLAY: function() {},
            PLAYER_PREVIOUS: function() {},
            PLAYLISTS: function() {},
            PLAYLIST_ADD: function() {},
            PLAYLIST_ADD_CHECK: function() {},
            PLAY_ALL: Qp,
            PLAY_ARROW: Qp,
            PRIVACY_INFO: Rp,
            PRIVACY_PRIVATE: Rp,
            PRIVACY_PUBLIC: function() {},
            PRIVACY_UNLISTED: function() {},
            PURCHASES: function() {},
            RINGO_LOGO: function() {},
            SAD: function() {},
            SEARCH: function() {},
            SETTINGS: function() {},
            SHARE: Sp,
            SHARE_ARROW: Sp,
            SHIELD: function() {},
            SHIELD_WITH_AVATAR: function() {},
            SKIP_NEXT: function() {},
            SKIP_PREVIOUS: function() {},
            SUBSCRIBE: function() {},
            SWITCH_ACCOUNTS: function() {},
            TAB_ACCOUNT: function() {},
            TAB_HOME: function() {},
            TAB_SUBSCRIPTIONS: function() {},
            TAB_TRENDING: function() {},
            TUNE: function() {},
            UPLOADS: function() {},
            VERY_HAPPY: function() {},
            VERY_SAD: function() {},
            WARNING: function() {},
            WATCH_HISTORY: function() {},
            WATCH_LATER: function() {},
            UNLIMITED: Np,
            YOUTUBE: Np
        },
        Up = {
            CHEVRON_RIGHT: !0,
            ARROW_BACK: !0
        };

    function N(a, b) {}

    function Vp(a) {}

    function Wp(a, b, c) {}

    function Xp() {};

    function Q() {
        return window.location
    };

    function Yp(a) {
        var b = ed(document, "A");
        nc(b, a);
        return b
    }

    function Zp(a) {
        if (!a) return "";
        a = Yp(a).pathname;
        return Gb(a, "/") ? a : "/" + a
    }

    function $p(a) {};

    function aq(a) {}

    function cq(a) {}

    function bq(a) {
        return Gb(Zp(a ? a : Q().href), "/watch")
    };

    function dq() {}

    function eq() {};

    function fq(a, b) {};

    function R() {};

    function gq(a) {};

    function hq() {}

    function iq() {};

    function jq(a, b, c) {};

    function kq() {
        this.i = [];
        this.g = null
    }

    function lq(a, b) {
        a.g = b;
        a.i.forEach(function(c) {});
        a.i = null
    }
    kq.prototype.push = function(a) {
        this.g ? this.g(a) : this.i.push(a)
    };
    var mq = {
            clickTrackingParams: Fa
        },
        nq = new kq;

    function oq(a, b) {};

    function pq(a) {};
    var qq = [],
        rq = new kq;

    function sq(a) {}

    function tq(a) {}

    function uq(a, b) {}

    function S(a, b, c) {}

    function vq(a, b, c) {}

    function wq(a) {};

    function T(a, b, c, d, e) {}

    function xq(a) {}

    function yq(a, b) {};

    function zq(a) {};

    function Aq(a, b, c) {};

    function Bq(a) {}

    function Cq(a, b) {}

    function Dq(a) {}

    function Eq(a) {}

    function Fq(a) {}

    function Gq(a, b, c, d) {}

    function U(a, b, c) {}

    function Hq(a, b, c, d) {};

    function Iq(a) {}

    function Jq(a) {}

    function Kq(a, b) {}

    function V(a, b) {}

    function Lq(a) {};

    function W(a) {
        return function(b, c) {}
    };
    var Oq = W({
        navigationDropdownItemRenderer: Mq,
        privacyDropdownItemRenderer: Nq,
        dropdownItemRenderer: Nq
    });

    function Pq(a) {}

    function Qq(a, b) {}

    function Nq(a) {}

    function Mq(a) {};
    var Rq = {
            landscape: "(min-width: 800px) and (min-device-width: 550px) and (orientation: landscape)",
            portrait: "(min-width: 550px) and (min-device-height: 800px) and (orientation: portrait)"
        },
        Sq = void 0,
        Tq = window.innerWidth,
        Uq = window.innerHeight;

    function Vq() {
        if (void 0 === Sq) {
            var a = "matchMedia" in window ? window.matchMedia(Rq.landscape + "," + Rq.portrait).matches : void 0;
            Sq = void 0 !== a ? a : 800 <= Tq && 550 <= Uq || 550 <= Tq && 800 <= Uq
        }
        return Sq
    }

    function Wq() {
        return window.matchMedia && window.matchMedia("(orientation: landscape)").matches
    }
    window.addEventListener("resize", function() {});
    var Xq = "IntersectionObserver" in window,
        Yq = !Vq() && !y("MWEB_BLAZERPLAYER", !1),
        $q = Xq ? new IntersectionObserver(function(a, b) {}, {
            rootMargin: "10%",
            threshold: .01
        }) : Yq ? new pp(.1, function(a) {}) : {
            observe: function(a) {}
        };

    function Zq(a) {}

    function ar(a, b) {}

    function br(a, b, c) {};
    var cr = m.devicePixelRatio || 2;

    function dr(a, b, c) {}

    function er(a, b) {}

    function Y(a, b, c, d) {};

    function fr(a, b, c, d, e, f, g, h, l, n) {};

    function gr(a) {};

    function Z(a, b) {};

    function hr(a) {}

    function ir(a, b) {}

    function jr(a) {};
    var kr = B("PLAY_ALL"),
        lr = W({
            buttonRenderer: Z,
            toggleButtonRenderer: ir,
            heroPlaylistThumbnailRenderer: function(a, b) {},
            dropdownRenderer: Qq
        });

    function mr(a) {}

    function nr(a) {}

    function or(a) {}

    function pr(a) {}

    function qr(a, b) {};

    function rr(a) {};

    function sr(a) {}

    function tr(a) {}

    function ur(a, b) {};

    function vr(a, b) {};
    var wr = W({
        buttonRenderer: Z,
        channelHeaderLinksRenderer: function(a, b) {},
        subscribeButtonRenderer: ur
    });

    function xr(a) {}

    function yr(a) {}

    function zr(a, b) {};
    var Ar = W({
        subscribeButtonRenderer: ur
    });

    function Br(a, b) {};

    function Cr(a, b) {};

    function Dr(a) {};
    var Er = W({
        metadataBadgeRenderer: Cr,
        subscribeButtonRenderer: ur
    });

    function Fr(a) {}

    function Gr(a) {};

    function Hr(a) {}

    function Ir(a) {};
    var Jr = W({
        headerFabRenderer: function(a) {}
    });

    function Kr(a) {}

    function Lr(a) {};

    function Mr(a, b) {};
    var Nr = W({
        buttonRenderer: Z
    });
    var Or = W({
        channelListSubMenuAvatarRenderer: function(a, b) {}
    });

    function Pr(a) {};
    var Qr = W({
        metadataBadgeRenderer: Cr,
        standaloneYpcBadgeRenderer: function(a, b) {}
    });

    function Rr(a, b) {};

    function Sr(a, b) {}

    function Tr(a, b, c) {};

    function Ur(a, b, c) {}

    function Vr(a, b) {};

    function Wr(a, b) {};

    function Xr(a, b) {
        var c = window;
        c.addEventListener(a, function f(e) {}, void 0)
    };
    var Yr = Ud("init"),
        Zr = !1;

    function $r() {}

    function as() {};
    var bs = 0,
        cs = null,
        ds = 0;

    function es(a, b, c) {}

    function fs(a, b) {}

    function gs(a) {};

    function hs(a, b, c) {}

    function is(a, b, c) {}

    function js() {};
    var ks, ls;

    function ms() {}

    function ns() {}

    function ps() {}

    function os() {}

    function qs(a) {}

    function rs(a) {}

    function ss(a) {}
    window.addEventListener("state-change", ns);
    window.addEventListener("hashchange", ns);
    var ts = W({
        buttonRenderer: Z,
        menuServiceItemRenderer: function(a, b) {},
        toggleButtonRenderer: ir,
        toggleMenuServiceItemRenderer: function(a, b) {},
        menuNavigationItemRenderer: function(a) {}
    });

    function us(a, b) {}

    function vs(a, b) {}

    function ws(a) {};

    function xs(a, b, c, d) {}

    function ys(a, b) {}

    function zs(a, b, c, d, e) {};
    var As = W({
        menuRenderer: vs
    });

    function Bs(a) {}

    function Cs(a, b) {}

    function Ds(a, b, c, d, e) {};

    function Es(a, b) {};

    function Fs(a, b) {};

    function Gs(a) {}

    function Hs(a) {}

    function Is(a) {};
    var Js = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Ks = B("SHOW_MORE");

    function Ls(a) {}

    function Ms(a, b, c) {};
    var Ns = W({
        playlistVideoRenderer: function(a, b) {}
    });

    function Os(a) {};

    function Ps(a, b) {}

    function Qs(a) {};

    function Rs(a) {};
    var Ss = y("PAGE_BUILD_LABEL", void 0),
        Ts = y("SBOX_JS_URL", void 0),
        Us = y("SBOX_SETTINGS"),
        Vs = y("SHOW_OPEN_APP_BUTTON"),
        Ws = y("SHOW_SIGN_IN_BUTTON_FROM_HEADER");

    function Xs(a, b, c, d, e, f) {};
    var Ys = {
            CLEAR_HISTORY: B("CLEAR_HISTORY"),
            CONFIRM_CLEAR_HISTORY: B("CONFIRM_CLEAR_HISTORY"),
            SUGGESTION_DISMISS_LABEL: B("SUGGESTION_DISMISS_LABEL"),
            SUGGESTION_DISMISSED_LABEL: B("SUGGESTION_DISMISSED_LABEL")
        },
        Zs = B("SEARCH_LABEL"),
        $s = B("SEARCH_CLEAR_LABEL"),
        at = null,
        bt = "",
        ct = np("ytm-searchbox", function(a, b) {});
    var dt = B("SEARCH_CHANNEL"),
        et = B("SEARCH_CLEAR_LABEL"),
        ft = np("ytm-channel-search-box-renderer", function(a, b) {});
    var gt = G.cd,
        ht = W({
            menuRenderer: vs
        });

    function it(a, b) {}

    function lt(a, b) {}

    function mt(a, b) {}

    function jt(a, b) {}

    function kt(a) {};
    var nt = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    function ot(a, b) {};
    var pt = document.getElementById("theme-meta"),
        qt = document.getElementById("app"),
        rt = document.getElementById("player"),
        rl = document.getElementById("player-container-id"),
        st = document.getElementById("player-control-container");
    var ut = new Fe(tt, 200),
        vt = 0,
        wt = Wq() ? window.innerWidth : window.innerHeight;

    function xt() {
        ok({
            Wb: !0,
            gc: !0,
            oc: A("mweb_stop_reset_lact_via_custom_control")
        });
        p("ytglobal.ytUtilActivityCallback_", function() {}, void 0);
        window.addEventListener("popstate", function() {})
    }

    function zt() {}

    function At() {}

    function Bt() {}

    function tt() {}

    function Ct() {}

    function Dt() {};
    var Et = window.setAutonavStateInPlayer,
        Gt = new Fe(Ft, 200),
        Ht = !1,
        It = !1,
        Jt = !1,
        Kt = 0,
        Lt = !rm(om.K(), 140),
        Mt = !1;

    function Nt() {
        setTimeout(function() {
            var a = Mt;
            Et(Lt ? a ? 3 : 2 : 1)
        })
    }

    function Ot() {}

    function Pt() {}

    function Qt() {}

    function Rt() {}

    function Ft() {}

    function St(a) {}

    function Tt() {}

    function Ut() {};
    var Vt = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function Wt(a, b) {};

    function Xt(a, b) {};
    var Yt = W({
        compactVideoRenderer: Wt
    });

    function Zt() {}

    function $t(a) {};

    function au(a, b) {};

    function bu(a, b) {};

    function cu(a, b) {};

    function du(a) {};
    var eu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        buttonRenderer: Z
    });
    var fu = W({
        buttonRenderer: Z
    });

    function gu(a) {}

    function hu(a, b) {};

    function iu(a, b) {};
    var ju = W({
        visitSiteCtaRenderer: iu
    });

    function ku(a) {};

    function lu(a) {}

    function mu(a, b) {};

    function nu(a) {}

    function ou(a, b) {};
    var pu = W({
        menuRenderer: vs
    });
    var qu = W({
        compactChannelRenderer: au,
        compactPlaylistRenderer: hu,
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactVideoRenderer: Wt
    });

    function ru(a) {};

    function su(a) {}

    function tu(a, b) {};
    var uu = W({
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function vu(a) {};
    var wu = W({
        channelThumbnailWithLinkRenderer: function(a) {}
    });

    function xu(a, b) {};
    var yu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        menuRenderer: vs
    });

    function zu(a, b) {};
    var Au = W({
        videoCardRenderer: zu,
        richListHeaderRenderer: xu
    });

    function Bu(a, b, c, d, e) {
        if (!Cu()) {
            var f = !1,
                g = Jh("log_window_onerror_fraction");
            if (g && Math.random() < g) f = !0;
            else {
                g = document.getElementsByTagName("script");
                for (var h = 0, l = g.length; h < l; h++)
                    if (0 < g[h].src.indexOf("/debug-")) {
                        f = !0;
                        break
                    }
            }
            f && (f = !1, e ? f = !0 : ("string" === typeof a ? g = a : ErrorEvent && a instanceof ErrorEvent ? (f = !0, g = a.message, b = a.filename, c = a.lineno, d = a.colno) : (g = "Unknown error", b = "Unknown file", c = 0), e = Oh(g, "UnhandledWindowError"), e.message = g, e.fileName = b, e.lineNumber = c, isNaN(d) ? delete e.columnNumber :
                e.columnNumber = d), f ? Lh(e) : Mh(e))
        }
    }

    function Cu() {
        if (!A("mweb_filter_junk_errors")) return !1;
        for (var a in window)
            if (-1 != a.indexOf(atob("dmlkX21hdGU="))) return !0;
        return !1
    };

    function Du(a, b) {}

    function Eu(a) {}

    function Fu(a, b) {}

    function Gu(a, b) {}

    function Hu(a, b, c) {}

    function Iu(a, b, c) {}

    function Ju(a, b, c) {}

    function Ku(a, b) {};

    function Lu() {};

    function Mu() {}

    function Nu(a, b, c) {}

    function Ou(a, b) {}

    function Pu(a, b) {};

    function Qu(a) {}

    function Ru(a) {}

    function Su(a) {}

    function Tu(a, b, c) {}

    function Uu(a, b, c) {};

    function Vu() {
        function a(g, h) {}

        function b(g) {}

        function c(g, h, l) {}

        function d(g, h, l) {}

        function e(g) {}
        var f = Wu;
        window.addEventListener("ytm-load-more", function(g) {});
        window.addEventListener("ytm-reload-container", function(g) {})
    };
    var Xu = W({
        albumCardRenderer: function(a, b) {},
        buttonRenderer: Z,
        gameCardRenderer: tu,
        movieCardRenderer: function(a, b) {},
        premiumSeasonCardRenderer: function(a, b) {},
        previewCardRenderer: function(a, b) {},
        richListHeaderRenderer: xu,
        searchRefinementCardRenderer: function(a, b) {},
        sortFilterSubMenuRenderer: function(a, b) {},
        videoCardRenderer: zu
    });

    function Yu(a, b) {};
    var Zu = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });
    var $u = W({
        buttonRenderer: Z
    });
    var av = W({
        buttonRenderer: Z
    });
    var bv = W({
        buttonRenderer: Z
    });
    var cv = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    function dv(a) {}

    function ev(a) {}

    function fv(a) {}

    function gv(a) {}

    function iv(a) {}

    function jv(a) {}

    function hv(a) {};
    var kv = W({
        buttonRenderer: Z
    });

    function lv(a, b) {};
    var mv = W({
        menuRenderer: vs
    });

    function nv(a, b, c, d) {}

    function ov(a) {}

    function pv(a, b) {}

    function rv(a, b, c) {}

    function qv(a, b, c, d) {};

    function sv(a) {};

    function tv(a, b) {};
    var uv = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs,
        visitSiteCtaRenderer: iu
    });
    var vv = W({
        menuRenderer: vs
    });
    var wv = W({
        gameCardRenderer: tu
    });

    function xv(a) {};

    function yv(a) {};

    function zv(a) {};
    var Av = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Bv = G.Ba,
        Cv = W({
            gridPlaylistRenderer: function(a, b) {},
            gridRadioRenderer: function(a, b) {},
            gridVideoRenderer: function(a, b) {}
        });

    function Dv(a, b, c) {};
    var Ev = {
        compactChannelRenderer: au,
        compactPlaylistRenderer: hu,
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactStationRenderer: function(a, b) {},
        compactVideoRenderer: Wt
    };
    var Fv = B("SHOW_MORE"),
        Gv = W(Ev);

    function Hv(a) {}

    function Iv(a) {};
    var Kv = W({
        gridRenderer: function(a, b) {},
        horizontalListRenderer: function(a) {},
        menuRenderer: vs,
        verticalListRenderer: Iv,
        shelfFeaturedTextBadgeRenderer: Jv
    });

    function Jv(a) {}

    function Lv(a) {}

    function Mv(a) {}

    function Nv(a, b) {};
    var Ov = W({
        buttonRenderer: Z,
        subscribeButtonRenderer: ur
    });

    function Pv(a, b) {};
    var Qv = W({
        richMetadataRenderer: function(a, b) {}
    });
    var Rv = W({
        metadataRowHeaderRenderer: function(a, b) {},
        metadataRowRenderer: function(a, b) {},
        richMetadataRowRenderer: function(a, b) {}
    });
    var Sv, Tv = "out",
        Uv = [],
        Vv;

    function Wv(a) {}

    function Xv(a) {}

    function Yv() {}

    function $v() {}

    function Zv() {}

    function aw(a, b, c) {};

    function bw(a) {}

    function cw() {}

    function dw(a) {}

    function ew(a, b, c) {}

    function fw(a) {}

    function gw() {};

    function hw(a) {}

    function iw(a) {}

    function jw(a) {};
    var kw, lw;

    function mw() {}

    function nw() {}

    function pw() {}

    function qw(a) {}

    function ow() {}

    function sw(a) {}

    function rw() {}
    window.addEventListener("state-change", pw);
    window.addEventListener("hashchange", pw);

    function tw() {}

    function uw(a, b) {}

    function vw() {}

    function ww(a, b) {};
    var xw = W({
        metadataBadgeRenderer: Cr,
        standaloneCollectionBadgeRenderer: function(a, b) {}
    });

    function yw(a) {};
    var zw = G.Oa,
        Aw = G.Ba,
        Dw = W({
            buttonRenderer: Z,
            metadataRowContainerRenderer: function(a, b) {},
            slimOwnerRenderer: Pv,
            slimMetadataButtonRenderer: Bw,
            slimMetadataToggleButtonRenderer: Cw,
            toggleButtonRenderer: ir
        });

    function Bw(a, b) {}

    function Cw(a) {};
    var Ew = W({
        buttonRenderer: Z
    });
    var Fw = W({
        buttonRenderer: Z
    });
    var Hw = W({
        sponsorshipsLoyaltyBadgeRenderer: Gw
    });

    function Iw(a, b) {}

    function Gw(a, b) {}

    function Jw(a, b, c) {};
    var Kw = W({
            sponsorshipsLoyaltyBadgesRenderer: Iw
        }),
        Lw = np("ytm-sponsorships-list-tile-renderer", function(a, b) {});
    var Mw = W({
        sponsorshipsLoyaltyBadgesRenderer: Iw
    });
    var Nw = W({
        sponsorshipsPerkRenderer: function(a, b) {}
    });
    var Qw = W({
        buttonRenderer: Z,
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsPerksRenderer: function(a, b) {},
        sponsorshipsTierRenderer: Pw
    });

    function Pw(a, b) {}

    function Ow(a, b) {};
    var Rw = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function Sw(a) {}

    function Vw(a) {}

    function Tw(a) {}

    function Uw(a) {};

    function Ww(a, b, c) {}

    function Xw(a) {};
    var Yw = {},
        Zw = {};

    function $w() {}

    function ax(a, b) {
        delete Zw[a];
        Yw[a] = b
    }

    function bx(a, b) {
        var c = void 0 === b ? {} : b,
            d = void 0 === c.S ? !0 : c.S;
        Yw[a] || (Zw[a] = !0);
        return function(e, f) {}
    };
    var cx = {
        backgroundPromoRenderer: function(a) {},
        channelAboutMetadataRenderer: function(a, b) {},
        channelFeaturedVideoRenderer: function(a, b) {},
        channelListItemRenderer: function(a, b) {},
        channelSearchBoxRenderer: ft,
        clarificationRenderer: function(a, b) {},
        clipAttributionRenderer: ot,
        compactAutoplayRenderer: function(a, b) {},
        compactChannelRenderer: au,
        compactOfferModuleRenderer: function(a, b) {},
        compactLinkRenderer: bu,
        compactMovieRenderer: function(a, b) {},
        compactMultiOfferRenderer: function(a, b) {},
        compactPlaylistRenderer: hu,
        compactPromotedVideoRenderer: function(a, b) {},
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactVideoRenderer: Wt,
        didYouMeanRenderer: function(a, b) {},
        factCheckRenderer: function(a, b) {},
        feedEntryRenderer: function(a, b) {},
        horizontalCardListRenderer: Yu,
        includingResultsForRenderer: function(a, b) {},
        itemSectionHeaderRenderer: function(a, b) {},
        limitedStateMessageRenderer: function(a, b) {},
        messageRenderer: function(a, b) {},
        noResultsFoundShowingResultsForRenderer: function(a, b) {},
        playlistNotificationRenderer: function(a, b) {},
        playlistVideoListRenderer: function(a, b) {},
        promotedSparklesTextSearchRenderer: function(a, b) {},
        promotedSparklesWebRenderer: function(a, b) {},
        promotedVideoRenderer: function(a, b) {},
        purchaseItemRenderer: function(a, b) {},
        resultsWithoutQuotesRenderer: function(a, b) {},
        searchHistoryQueryRenderer: function(a, b) {},
        slimOwnerRenderer: Pv,
        slimVideoMetadataRenderer: np("ytm-slim-video-metadata-renderer", function(a, b) {}),
        shelfRenderer: Nv,
        showingResultsForRenderer: function(a, b) {},
        simpleTextSectionRenderer: function(a, b) {},
        sponsorshipsAlertRenderer: function(a, b) {},
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsHeaderRenderer: function(a, b) {},
        sponsorshipsHeadingRenderer: function(a, b) {},
        sponsorshipsLinksRenderer: function(a, b) {},
        sponsorshipsListTileRenderer: Lw,
        sponsorshipsTierRenderer: Pw,
        cardItemRenderer: bx("cardItemRenderer"),
        donationShelfRenderer: bx("donationShelfRenderer"),
        musicPassFeatureInfoRenderer: bx("musicPassFeatureInfoRenderer"),
        musicPassSmallFeatureInfoRenderer: bx("musicPassSmallFeatureInfoRenderer"),
        offerItemRenderer: bx("offerItemRenderer"),
        offerItemUpsellRenderer: bx("offerItemUpsellRenderer"),
        redeemCodeRenderer: bx("redeemCodeRenderer"),
        subscriptionProductRenderer: bx("subscriptionProductRenderer"),
        subscriptionProductUpsellOfferRenderer: bx("subscriptionProductUpsellOfferRenderer"),
        unlimitedPageHeaderRenderer: bx("unlimitedPageHeaderRenderer"),
        videoWithContextRenderer: function(a, b) {},
        watchMetadataAppPromoRenderer: bx("watchMetadataAppPromoRenderer"),
        ypcOffersListRenderer: bx("ypcOffersListRenderer")
    };

    function dx(a) {}

    function ex(a) {};

    function fx(a) {}
    var gx = "IntersectionObserver" in window ? new IntersectionObserver(function(a, b) {}, {
        rootMargin: "10%",
        threshold: .01
    }) : new pp(.1, function(a) {});

    function hx(a, b, c) {};
    var ix = W(cx);

    function jx(a) {}

    function kx(a) {}

    function lx(a, b) {};
    var mx = !1,
        ox = W({
            searchFilterGroupRenderer: nx
        });

    function px(a) {}

    function qx(a) {}

    function rx(a) {}

    function nx(a, b) {};
    var sx = W({
        channelAgeGateRenderer: function(a, b) {},
        channelListSubMenuRenderer: function(a) {},
        channelSubMenuRenderer: function(a, b) {},
        commentSectionRenderer: bx("commentSectionRenderer"),
        itemSectionRenderer: lx,
        searchSubMenuRenderer: function(a) {},
        shelfRenderer: Nv,
        universalWatchCardRenderer: bx("universalWatchCardRenderer")
    });

    function tx(a) {}

    function ux(a) {};
    var vx = W({
        activeAccountHeaderRenderer: Lr,
        sectionListRenderer: ux,
        signInPromoWithBackgroundRenderer: function(a) {},
        lugashFooterRenderer: Mr
    });
    var wx = B("MORE_OPTIONS");

    function xx(a) {}

    function yx(a) {}

    function zx(a) {}

    function Ax(a) {};
    var Bx = W({
        c4TabbedHeaderRenderer: zr,
        carouselHeaderRenderer: function(a, b) {},
        interactiveTabbedHeaderRenderer: function(a, b) {},
        playlistHeaderRenderer: function(a) {},
        singleColumnBrowseResultsRenderer: function(a, b) {},
        channelCreationForm: bx("channelCreationFormRenderer"),
        channelMetadataRenderer: function(a, b) {}
    });

    function Cx(a) {}

    function Dx(a) {}

    function Ex(a) {}

    function Fx(a) {};
    var Jx = W({
        experimentsGroupRenderer: Gx,
        experimentsStudyRenderer: Hx,
        experimentsStudyItemRenderer: Ix,
        toggleButtonRenderer: ir
    });

    function Gx(a, b) {}

    function Hx(a, b) {}

    function Ix(a, b) {};
    var Kx = W({
            experimentsListRenderer: function(a, b) {}
        }),
        Lx = np("ytm-experiments", function() {});
    var Mx, Nx, Ox;

    function Px() {}

    function Qx(a, b) {}

    function Rx() {}

    function Sx() {};
    var Tx = W({
        buttonRenderer: Z
    });

    function Ux(a, b) {}

    function Vx(a) {};

    function Wx(a, b) {};
    var Xx = W({
            buttonRenderer: Z
        }),
        Yx;

    function Zx(a, b) {};
    var $x = W({
        unlimitedFamilyMessageInterstitialRenderer: Vx,
        unlimitedMembershipCollisionRenderer: function(a, b) {}
    });

    function ay(a) {};
    var by = W({
        sectionListRenderer: ux
    });

    function cy(a) {};

    function dy(a, b) {};
    var ey = W({
        buttonRenderer: Z
    });

    function fy(a, b) {}

    function gy(a) {};
    var hy = W({
        confirmDialogRenderer: fy
    });

    function iy(a, b) {};
    var jy = {};

    function ky(a) {};
    var ly = W({
        confirmDialogRenderer: fy
    });

    function my(a, b) {}

    function oy(a, b) {}

    function ny(a) {};

    function py(a, b) {};

    function qy(a) {}
    var ry = np("ytm-setting-notification-list-renderer", function(a, b, c) {});

    function sy(a) {};
    var uy = W({
        settingMenuItemRenderer: ty
    });

    function vy(a) {}

    function yy(a) {}

    function ty(a) {}

    function xy(a) {}

    function wy(a) {}

    function zy(a, b) {};
    var Ay = W({
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingNotificationListRenderer: ry
    });

    function By(a, b, c) {}
    var Cy = np("ytm-setting-generic-category", function(a, b, c) {});

    function Dy(a) {};
    var Ey = W({
        gamingThirdPartySettingRenderer: function(a, b) {},
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingCategorySectionRenderer: function(a) {},
        settingNotificationListRenderer: ry
    });
    var Fy = W({
        settingCategoryCollectionRenderer: function(a) {},
        settingCategoryEntryRenderer: function(a) {},
        subscriptionProductsSettingCategoryEntryRenderer: function(a, b) {}
    });

    function Gy(a) {};
    var Hy = W({
        sponsorshipsAccountBarRenderer: function(a, b) {},
        sectionListRenderer: ux
    });
    var Iy = W({
        c4TabbedHeaderRenderer: zr,
        sponsorshipsOfferListRenderer: function(a, b) {}
    });

    function Jy(a) {};

    function Ky(a) {
        return {
            commandMetadata: {
                webCommandMetadata: {
                    url: a
                }
            }
        }
    }

    function Ly() {};
    var My = G.fd,
        Ny = G.gd,
        Oy = G.hd;

    function Py() {};
    var Qy = G.Oc,
        Ry = G.kd,
        Sy = G.Fd,
        Ty = G.Ld;

    function Uy(a) {};
    var Vy = G.ja,
        Wy = W({
            buttonRenderer: Z
        });

    function Xy(a) {};
    var Yy = W({
        buttonRenderer: Z
    });
    var Zy = W({
        clipAttributionRenderer: ot,
        clipSectionFooterRenderer: function(a, b) {},
        itemSectionRenderer: lx
    });
    var $y = W({
        buttonRenderer: Z,
        clipSectionRenderer: function(a, b) {},
        sectionListRenderer: ux
    });
    var az = W({
        engagementPanelSectionListRenderer: function(a, b) {}
    });

    function bz(a) {};
    var cz = W({
        buttonRenderer: Z
    });

    function dz(a) {};

    function ez(a) {};

    function fz(a) {};
    var gz = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    function hz(a) {}

    function iz(a) {}

    function jz(a) {};

    function kz(a, b) {};
    var lz = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function mz(a, b) {};
    var oz = W({
        playlistPanelVideoRenderer: nz
    });

    function nz(a) {}

    function pz(a) {}
    var qz = np("ytm-playlist", function(a, b) {});
    if (A("mweb_enable_custom_control")) {
        var rz = ul();
        rz && window.addEventListener(rz, sz);
        Gc || Vq() || !A("mweb_enable_custom_control_landscape_to_fullscreen") || window.addEventListener("orientationchange", tz)
    }

    function sz() {}

    function vz(a) {}

    function uz() {}

    function tz() {};
    var wz = G.Kc,
        xz = G.Nc;

    function yz(a) {};
    var zz = G.Ic,
        Az = G.Lc,
        Bz = G.Mc,
        Cz = G.zb,
        Dz = G.wd,
        Ez = G.xd,
        Fz = G.md,
        Gz = G.nd,
        Hz = G.yd,
        Iz = G.zd,
        Jz = G.Kd;

    function Kz() {}

    function Lz() {}

    function Mz(a) {}

    function Nz(a) {}

    function Oz(a) {}

    function Pz(a) {}

    function Qz(a, b) {}

    function Rz(a) {};

    function Sz() {}

    function Tz() {}

    function Uz() {}

    function Vz() {}

    function Wz() {};
    var Xz = null;
    A("mweb_enable_custom_control") && window.addEventListener("video-progress", Yz);
    var $z = new Fe(Zz, 100),
        aA = 0,
        bA = !1,
        cA, dA = 0,
        eA = 0,
        fA = 0,
        gA;

    function Yz() {}

    function Zz(a) {}
    var hA = np("ytm-progress-bar", function(a, b) {});

    function iA(a) {};
    var jA = G.qd,
        kA = G.Ad,
        lA = G.Bd,
        mA = null,
        nA = !1,
        oA = 0;
    A("mweb_enable_custom_control") && (window.addEventListener("video-progress", pA), window.addEventListener("srubber-touch-start", qA), window.addEventListener("srubber-touch-end", rA), window.addEventListener("srubber-touch-move", sA));

    function qA() {}

    function rA() {}

    function sA(a) {}

    function pA() {}
    var uA = np("ytm-time-display", function(a, b) {});

    function tA() {};
    var vA = window.history,
        wA = 0,
        xA = 0,
        yA = 0;

    function zA() {}

    function AA() {}

    function BA(a) {};
    var CA = !1;

    function DA(a) {};
    var EA = G.od,
        FA = G.pd,
        GA = G.sd,
        HA = G.td,
        IA = G.ud,
        JA = G.vd,
        KA = G.Jd,
        LA, MA, NA = null,
        OA = !1;
    A("mweb_enable_custom_control") && (rl.addEventListener("fullscreenchange", PA), window.addEventListener("player-state-change", QA), window.addEventListener("video-data-change", RA), window.addEventListener("muted-autoplay-change", SA), window.addEventListener("srubber-touch-start", TA), window.addEventListener("srubber-touch-end", UA), window.addEventListener("progress-bar-seek", VA));

    function TA() {}

    function UA() {}

    function WA() {}

    function XA(a) {}

    function YA(a, b) {}

    function VA() {}

    function ZA(a, b) {}

    function PA() {}

    function $A() {}

    function QA(a) {}

    function SA(a) {}

    function RA(a) {}

    function aB() {}
    var eB = np("ytm-custom-control", function(a, b) {});

    function cB(a) {}

    function bB(a) {}

    function dB() {};

    function fB(a) {};
    var gB = null,
        hB = null;
    A("mweb_enable_custom_control") && window.addEventListener("player-state-change", iB);
    p("yt.mobile.isMobilePersistentUniplayer", function() {}, void 0);
    p("yt.mobile.supportsMwebAutonav", function() {}, void 0);

    function jB(a) {}

    function kB(a) {}

    function lB() {}

    function mB() {}

    function nB() {}

    function oB() {
        window.addEventListener(Fc ? "touchstart" : "click", function() {}, {
            capture: !0,
            passive: !0
        });
        window.addEventListener("beforeunload", lB);
        window.addEventListener("state-navigatestart", lB);
        A("mweb_handle_botguard_to_player") && !y("MWEB_BLAZERPLAYER", !1) || window.addEventListener("state-navigatestart", Ro);
        var a = E(function() {
            return rt
        });
        a && a.addEventListener("click", function(b) {})
    }

    function iB(a) {};
    var pB = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    function qB(a) {}

    function rB(a) {};
    var sB = W({
            actionCompanionAdRenderer: function(a, b) {}
        }),
        tB = !1;

    function uB() {}

    function vB(a) {};
    var wB = W({
        itemSectionRenderer: lx,
        companionSlotRenderer: function(a, b) {},
        commentSectionRenderer: bx("commentSectionRenderer")
    });
    var xB = W({
        singleColumnWatchNextResults: function(a, b) {},
        alertWithButtonRenderer: function(a, b) {}
    });

    function yB(a) {}

    function zB(a) {}

    function AB(a, b) {};
    var BB, CB = null;

    function DB(a) {}

    function FB(a, b) {}

    function EB() {}

    function GB(a) {}

    function IB(a) {}

    function HB() {};
    var JB = W({
            buttonRenderer: Z
        }),
        KB;

    function LB(a, b) {}

    function OB(a) {}

    function MB() {}

    function PB(a, b) {}

    function NB(a) {};
    var QB = G.ld;

    function RB() {}

    function SB() {};
    var VB = W({
        accountItem: TB,
        accountItemSectionHeaderRenderer: UB
    });

    function UB(a, b) {}

    function TB(a, b) {}

    function WB(a) {};
    var XB = W({
        accountItemSectionRenderer: function(a, b) {}
    });
    var YB = W({
        lugashFooterRenderer: Mr
    });

    function ZB() {}

    function aC() {}

    function $B() {}

    function cC() {}

    function bC(a) {};
    var dC = G.Zc,
        eC = G.Yc,
        fC = G.zb,
        gC = G.ad,
        hC = G.Tc,
        iC = G.Uc,
        jC = G.Rc,
        kC = G.Vc,
        lC = G.Wc,
        mC = G.Xc,
        nC = G.Sc,
        oC = G.bd;

    function pC() {}

    function qC(a, b, c, d, e) {}

    function rC() {}

    function sC() {}

    function tC() {}

    function uC() {};
    var vC = G.ja,
        yC = W({
            accountSectionListRenderer: function(a, b) {},
            activeAccountHeaderRenderer: Lr,
            compactLinkRenderer: bu,
            multiPageMenuSectionRenderer: wC,
            privacyTosFooterRenderer: function(a) {},
            simpleMenuHeaderRenderer: xC
        });

    function xC(a, b) {}

    function wC(a, b) {}

    function zC(a) {}

    function AC(a) {};
    var BC = B("CREATE_CHANNEL_TITLE");

    function CC(a, b) {};
    var DC = G.Ca;
    var EC = G.Fc,
        FC = G.Gc,
        GC = G.yb,
        HC = G.Id,
        IC = G.Bc,
        JC = G.Hd,
        LC = W({
            topbarMenuButtonRenderer: KC
        });

    function MC() {}

    function NC() {}

    function OC(a) {}

    function KC(a, b) {}

    function PC(a) {}

    function QC(a, b, c, d) {}

    function TC() {}

    function UC(a, b) {}

    function SC(a, b) {}

    function XC(a) {}

    function RC(a) {}

    function YC(a) {}

    function WC(a) {}

    function VC() {};
    var $C = W({
            pivotBarItemRenderer: ZC
        }),
        aD = {
            navigationEndpoint: Ky("/"),
            icon: {
                iconType: "TAB_HOME"
            },
            title: {
                simpleText: G.yb
            },
            pivotIdentifier: "FEwhat_to_watch"
        },
        bD = {
            navigationEndpoint: Ky("/feed/trending"),
            icon: {
                iconType: "TAB_TRENDING"
            },
            title: {
                simpleText: G.Md
            },
            pivotIdentifier: "FEtrending"
        },
        cD = {
            navigationEndpoint: Ky("/feed/library"),
            icon: {
                iconType: "PIVOT_LIBRARY"
            },
            title: {
                simpleText: G.Qc
            },
            pivotIdentifier: "FElibrary"
        };

    function ZC(a, b) {}

    function eD(a) {}

    function dD(a, b, c) {}

    function fD(a) {}

    function gD(a, b) {};
    var hD = W({
        buttonRenderer: Z
    });
    var iD;

    function jD(a) {}

    function kD(a) {};

    function lD() {}

    function mD(a) {};
    var nD = G.Jc,
        oD = G.Pc,
        pD = G.jd,
        qD = {},
        rD = (qD.MEMBERSHIPS_AND_PURCHASES = "memberships-and-purchases", qD),
        sD = W({
            alertRenderer: function(a, b) {},
            consentBumpRenderer: function(a, b) {},
            mealbarPromoRenderer: bx("mealbarPromoRenderer", {
                S: !1
            }),
            surveyTriggerRenderer: bx("surveyTriggerRenderer", {
                S: !1
            }),
            unlimitedUserNotificationRenderer: function(a, b) {},
            upsellDialogRenderer: function(a) {}
        });

    function tD(a) {}

    function uD(a, b) {}

    function vD(a) {}

    function wD(a, b, c) {}

    function yD(a, b) {}

    function xD(a) {};
    var zD = {},
        AD = (zD.browse = "browse", zD.search = "results", zD.watch = "watch", zD.home = "home", zD.channel = "channels", zD);

    function BD(a, b) {
        this.i = a;
        this.j = b
    }
    BD.prototype.g = function() {
        jn(this.i, this.j)
    };

    function CD(a, b) {}
    CD.prototype.g = function() {};

    function DD(a) {}
    DD.prototype.g = function() {};

    function ED(a, b) {}
    ED.prototype.g = function() {};
    var FD = new kq;

    function GD(a, b) {};

    function HD(a) {};

    function ID(a) {}

    function JD(a) {};

    function KD() {};

    function Wu(a, b, c) {}

    function LD(a) {};
    var MD = 0;

    function ND(a, b) {
        b = void 0 === b ? lk() : b;
        Do(function() {
            var c = b;
            c = void 0 === c ? lk() : c;
            FD.push(new BD(a, c))
        })
    }

    function OD(a) {}

    function PD() {}

    function QD(a) {}

    function RD(a) {}

    function SD(a) {}

    function TD(a) {}

    function UD() {}

    function VD(a) {}

    function WD() {}

    function XD(a) {}

    function YD(a) {}

    function ZD(a) {};
    var $D = ["redirect_state", "service", "channel_switcher"];

    function aE() {}

    function bE() {}

    function cE(a, b) {};

    function dE(a) {}

    function eE(a) {};

    function fE(a, b) {};

    function gE(a) {};

    function hE(a, b, c) {};

    function iE(a) {};

    function jE(a, b, c) {};

    function kE(a) {};

    function lE(a, b, c, d) {};

    function mE(a, b, c, d) {};
    var nE = !1,
        oE = 0,
        pE = Ec && Dc;

    function qE(a) {}

    function rE() {}

    function sE() {}

    function tE(a) {};
    var uE = 1;

    function vE(a) {};
    var wE;

    function xE() {}

    function yE() {}

    function zE() {}

    function AE() {}

    function BE(a) {}

    function CE(a) {}

    function DE() {
        y("MWEB_BLAZERPLAYER", !1) ? window.addEventListener("playback-end", function(a) {}) : window.addEventListener("player-state-change", BE)
    };

    function EE(a) {};

    function FE(a) {}

    function GE(a) {};

    function HE(a, b) {}

    function IE(a, b) {}

    function JE(a, b) {};

    function KE(a) {};
    var LE = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    function ME(a, b) {};
    var NE = W({
        notificationActionRenderer: ME
    });

    function OE() {
        window.addEventListener("yt-show-toast", function(a) {})
    };
    var PE, QE;

    function RE() {}

    function SE(a, b) {}

    function TE() {}

    function UE() {}

    function VE() {};

    function WE(a) {
        var b = 0;
        return function(c, d, e, f) {}
    };

    function XE(a) {
        function b(n) {}

        function c(n, q, t, x, z, O, X) {}

        function d(n, q, t, x) {}

        function e(n) {}

        function f(n, q, t) {}

        function g(n, q, t) {}
        var h, l = WE(a.makeRequest);
        window.addEventListener("popstate", function() {});
        window.addEventListener("hashchange", function() {});
        return {
            navigate: c,
            zc: e,
            g: g,
            fe: d
        }
    };

    function YE() {
        function a(f, g, h, l, n, q) {}

        function b(f, g, h, l) {}
        var c = {
                oe: EE,
                ce: ZE,
                makeRequest: $E,
                ae: mE,
                yc: aF,
                lg: !1,
                kb: Ho,
                Be: Io,
                be: bF,
                Ce: cF,
                Zd: !1
            },
            d = XE(c),
            e = !1;
        window.addEventListener("click", function(f) {});
        window.addEventListener("navigate", function(f) {});
        window.addEventListener("updateui", function() {});
        return {
            qe: function(f, g) {},
            zc: d.zc
        }
    };

    function dF(a) {};
    var cF = !Bc,
        eF = !1;

    function aF(a) {}

    function bF(a) {}

    function fF(a) {}

    function ZE(a, b) {}

    function $E(a, b, c, d) {}

    function gF() {};

    function hF(a) {}

    function iF(a) {}

    function jF(a) {}

    function kF(a, b) {}

    function lF(a, b) {}

    function mF(a, b, c) {}

    function nF(a) {}

    function oF(a, b) {}

    function pF(a, b, c) {}

    function qF(a, b) {}

    function rF(a, b) {}

    function sF(a, b) {};

    function tF(a, b) {}

    function uF(a) {}

    function vF(a) {};

    function wF(a) {}

    function xF(a) {}

    function yF(a) {};

    function zF(a) {};
    var AF = W({
        textInputFormFieldRenderer: function(a, b) {}
    });

    function BF(a) {}
    var CF = np("ytm-input-with-counter", function(a, b) {});
    var DF = W({
            buttonRenderer: Z,
            compactLinkRenderer: bu,
            dropdownRenderer: Qq
        }),
        EF, FF, GF = "",
        HF = "",
        IF = null,
        JF = null,
        KF = !0;

    function LF(a) {}
    var MF = np("ytm-create-playlist-content-component", function(a, b) {}),
        NF = np("ytm-create-playlist-buttons-component", function(a, b) {});

    function OF(a) {};
    var PF = W({
        addToPlaylistCreateRenderer: function(a, b) {},
        playlistAddToOptionRenderer: function(a, b) {}
    });

    function QF(a) {};

    function RF(a, b) {};
    var SF = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    function TF(a) {}

    function UF(a) {};
    var VF = W({
        addToPlaylistRenderer: function(a) {},
        confirmDialogRenderer: fy,
        fancyDismissibleDialogRenderer: QF,
        legalReportDetailsFormRenderer: function(a) {},
        notificationActionRenderer: ME,
        donationAmountPickerRenderer: bx("donationAmountPickerRenderer"),
        donationPostTransactionRenderer: bx("donationPostTransactionRenderer"),
        gamingAccountLinkConfirmDialogRenderer: bx("gamingAccountLinkConfirmDialogRenderer"),
        gamingAccountLinkSettingRenderer: bx("gamingAccountLinkSettingRenderer"),
        gamingMultipleAccountLinkDialogRenderer: bx("gamingMultipleAccountLinkDialogRenderer"),
        membershipPostCancelRenderer: bx("membershipPostCancelRenderer"),
        modalWithTitleAndButtonRenderer: bx("modalWithTitleAndButtonRenderer"),
        reportDetailsFormRenderer: bx("reportDetailsFormRenderer"),
        reportFormModalRenderer: bx("reportFormModalRenderer"),
        sponsorshipsCelebrationRenderer: bx("sponsorshipsCelebrationRenderer"),
        surveyFollowUpRenderer: bx("surveyFollowUpRenderer"),
        unlimitedFamilyMessageInterstitialRenderer: bx("unlimitedFamilyMessageInterstitialRenderer"),
        unlimitedFamilyProfileInterstitialRenderer: bx("unlimitedFamilyProfileInterstitialRenderer")
    });

    function WF(a) {};

    function XF(a) {};
    var YF = ["compactVideoRenderer", "searchHistoryQueryRenderer", "shelfRenderer", "videoWithContextRenderer"],
        ZF = W({
            notificationTextRenderer: function(a, b) {}
        });

    function $F(a) {};

    function aG(a) {};
    var bG = W({
        confirmDialogRenderer: fy
    });

    function cG(a) {}

    function dG(a) {};

    function eG(a) {}

    function fG(a) {};

    function gG(a, b) {}

    function hG(a, b) {}

    function iG(a, b) {}

    function jG(a) {};

    function kG(a) {}

    function lG(a) {};

    function mG(a, b) {};
    var nG = W({
        confirmDialogRenderer: fy
    });

    function oG(a) {};

    function pG(a) {};

    function qG(a) {}

    function rG(a, b) {};

    function sG() {};
    var tG = W({
        fancyDismissibleDialogRenderer: QF
    });
    var uG = B("NOTIFICATION_ERROR_MESSAGE");

    function vG(a, b) {};

    function wG(a, b, c) {};

    function xG(a, b) {};
    var yG = W({
        buttonRenderer: Z
    });
    var zG = W({
        commentReplyDialogRenderer: function(a) {}
    });

    function AG(a, b) {};
    var BG = {
        addToPlaylistRenderer: !0
    };

    function CG(a) {}

    function DG(a) {};

    function EG(a) {}

    function FG(a, b) {}

    function GG(a, b, c) {};

    function HG(a) {}

    function IG(a) {};

    function JG(a) {}

    function MG(a) {}

    function KG(a) {}

    function LG(a) {};
    var NG = W({
        buttonRenderer: Z
    });

    function OG(a) {}

    function PG(a) {}

    function QG(a) {}

    function RG(a) {};
    var SG = W({
        gamingAccountLinkConfirmDialogRenderer: RG
    });
    var TG = W({
        confirmDialogRenderer: fy
    });
    var UG = W({
        buttonRenderer: Z
    });

    function VG(a) {}

    function WG(a) {}

    function XG(a) {}

    function YG(a) {};
    var ZG = W({
        gamingAccountLinkSettingRenderer: YG
    });

    function $G(a) {}

    function aH(a) {}

    function bH() {}

    function cH(a) {};
    var dH = W({
        gamingMultipleAccountLinkDialogRenderer: cH
    });

    function eH(a) {}

    function fH(a) {}

    function gH(a, b) {}

    function hH(a, b) {}

    function iH(a) {};
    var jH = W({
        buttonRenderer: Z
    });
    var kH = B("CANCEL"),
        lH = W({
            buttonRenderer: Z
        });

    function mH(a) {};
    var nH = W({
        modalWithTitleAndButtonRenderer: mH
    });

    function oH(a) {};
    var pH = G.ja;

    function qH() {}

    function rH() {};
    var sH = B("NOTIFICATION_ERROR_MESSAGE");
    var tH = G.ja,
        uH = G.Gd,
        vH = G.Dd,
        wH = to(v("editor-header")),
        xH = to(v("dropdown")),
        yH = np("ytm-playlist-settings-editor-renderer", function(a, b) {});
    var zH = W({
        playlistSettingsEditorRenderer: function(a) {}
    });
    var AH = B("NOTIFICATION_ERROR_MESSAGE");

    function BH(a, b) {};

    function CH() {};

    function DH(a) {}

    function EH(a) {};
    var FH = B("CANCEL"),
        GH = W({
            shareTargetRenderer: function(a) {}
        });

    function HH(a) {}

    function IH(a) {};
    var JH = W({
        sharingRenderer: function(a) {}
    });

    function KH(a) {}

    function LH(a, b, c) {};

    function MH(a, b, c) {};
    var NH = {
            ytr: 3,
            ytm: 5
        },
        OH, PH, QH = 0;

    function RH() {};
    var SH = W({
        confirmDialogRenderer: fy,
        unlimitedFamilyMessageInterstitialRenderer: bx("unlimitedFamilyMessageInterstitialRenderer"),
        unlimitedFamilyProfileInterstitialRenderer: bx("unlimitedFamilyProfileInterstitialRenderer")
    });

    function TH(a) {}

    function UH(a, b) {};

    function VH(a, b) {}

    function XH(a, b, c) {}

    function WH(a, b, c) {}

    function YH(a) {};
    var ZH = W({
        buttonRenderer: Z
    });
    var $H = W({
        offerGroupRenderer: function(a) {}
    });
    var aI = W({
        tvfilmSellableItemRenderer: function(a) {},
        tvfilmOffersRenderer: function(a) {}
    });
    var bI = W({
        tvfilmRichOffersRenderer: function(a) {}
    });
    var cI = W({
        buttonRenderer: Z
    });

    function dI(a, b) {}

    function eI(a, b) {};
    var fI = W({
        unpluggedPauseMembershipDialogRenderer: function(a) {}
    });

    function gI(a) {};

    function hI(a) {}

    function iI(a, b) {}

    function jI(a, b, c, d, e) {}

    function kI(a, b) {};
    var lI = W({
        buttonRenderer: Z
    });

    function mI(a, b) {};
    var nI = new Map([
        ["DIVIDER_STYLE_INSET_THIN", "card-item-divider-inset-thin"],
        ["DIVIDER_STYLE_FULL_BLEED_THIN", "card-item-divider-fullbleed-thin"]
    ]);

    function oI(a) {};
    var pI = {},
        qI = (pI.CARD_ITEM_TEXT_STYLE_UNKNOWN = "", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_1 = "typography-display-1", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_2 = "typography-display-2", pI.CARD_ITEM_TEXT_STYLE_TITLE_1 = "typography-title-1", pI.CARD_ITEM_TEXT_STYLE_TITLE_2 = "typography-title-2", pI.CARD_ITEM_TEXT_STYLE_BUTTON = "typography-button", pI.CARD_ITEM_TEXT_STYLE_BODY_1A = "typography-body-1a", pI.CARD_ITEM_TEXT_STYLE_BODY_1B = "typography-body-1b", pI.CARD_ITEM_TEXT_STYLE_BODY_2A = "typography-body-2a", pI.CARD_ITEM_TEXT_STYLE_BODY_2B =
            "typography-body-2b", pI.CARD_ITEM_TEXT_STYLE_LABEL = "typography-label", pI),
        rI = {},
        sI = (rI.CARD_ITEM_UX_SPACE_1 = "xs", rI.CARD_ITEM_UX_SPACE_2 = "s", rI.CARD_ITEM_UX_SPACE_3 = "m", rI.CARD_ITEM_UX_SPACE_4 = "l", rI.CARD_ITEM_UX_SPACE_5 = "xl", rI.CARD_ITEM_UX_SPACE_6 = "xl", rI);

    function tI(a, b, c) {}

    function uI(a, b) {}
    var vI = {},
        wI = (vI.CARD_ITEM_COLOR_UNKNOWN = "color-unknown", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "color-general-background-a", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B = "color-general-background-b", vI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "color-error-background", vI.CARD_ITEM_COLOR_TEXT_PRIMARY = "color-text-primary", vI.CARD_ITEM_COLOR_TEXT_SECONDARY = "color-text-secondary", vI.CARD_ITEM_COLOR_CALL_TO_ACTION = "color-call-to-action", vI.CARD_ITEM_COLOR_ICON_INACTIVE = "color-icon-inactive", vI.CARD_ITEM_COLOR_ICON_DISABLED =
            "color-icon-disable", vI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "color-brand-icon-active", vI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "color-brand-icon-inactive", vI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "color-ten-percent-layer", vI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "color-text-primary-inverse", vI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "color-icon-active-other", vI),
        xI = {},
        yI = (xI.CARD_ITEM_COLOR_UNKNOWN = "background-color-unknown", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "background-color-general-background-a", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B =
            "background-color-general-background-b", xI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "background-color-error-background", xI.CARD_ITEM_COLOR_TEXT_PRIMARY = "background-color-text-primary", xI.CARD_ITEM_COLOR_TEXT_SECONDARY = "background-color-text-secondary", xI.CARD_ITEM_COLOR_CALL_TO_ACTION = "background-color-call-to-action", xI.CARD_ITEM_COLOR_ICON_INACTIVE = "background-color-icon-inactive", xI.CARD_ITEM_COLOR_ICON_DISABLED = "background-color-icon-disable", xI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "background-color-brand-icon-active",
            xI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "background-color-brand-icon-inactive", xI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "background-color-ten-percent-layer", xI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "background-color-text-primary-inverse", xI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "background-color-icon-active-other", xI);

    function zI(a, b) {}

    function AI(a, b) {};
    var BI = W({
        cardItemTextRenderer: AI
    });

    function CI(a, b) {};

    function DI(a, b) {};
    var EI = W({
            cardItemTextCollectionRenderer: CI,
            themedImageRenderer: DI
        }),
        FI = {},
        GI = (FI.CARD_ITEM_IMAGE_PLACEMENT_UNKNOWN = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_TOP = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_START = "card-item-text-with-image-image-placement-start", FI);

    function HI(a) {}

    function II(a) {};
    var JI = W({
        cardItemTextCollectionRenderer: CI,
        cardItemTextWithImageRenderer: II
    });
    var KI = W({
        cardItemTextCollectionRenderer: CI,
        buttonRenderer: Z
    });
    var LI = W({
            cardItemActionsRenderer: mI,
            cardItemErrorRenderer: function(a) {},
            cardItemTextCollectionRenderer: CI,
            cardItemTextWithButtonRenderer: function(a, b) {},
            cardItemTextWithImageRenderer: II,
            themedImageRenderer: DI
        }),
        MI = {},
        NI = (MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_UNKNOWN = "card-item-primary-container-placement-start", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_TOP = "card-item-primary-container-placement-top", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_START = "card-item-primary-container-placement-start", MI),
        OI = {},
        PI = (OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_UNKNOWN = "card-item-additional-info-placement-center", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_TOP = "card-item-additional-info-placement-top",
            OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_BOTTOM = "card-item-additional-info-placement-bottom", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_CENTER = "card-item-additional-info-placement-center", OI);

    function QI(a) {}

    function RI(a) {}

    function SI(a) {};
    var TI = W({
        buttonRenderer: Z,
        createCoreIdentityChannelContentRenderer: function(a, b) {}
    });
    var UI = W({
        buttonRenderer: Z
    });
    var VI = G.Hc,
        WI = G.Ca;

    function XI() {};
    var YI = W({
        creatorHeartRenderer: function(a, b) {},
        pinnedCommentBadgeRenderer: function(a, b) {}
    });

    function ZI(a, b) {}

    function $I(a) {};
    var aJ = W({
        commentRenderer: function(a, b) {}
    });

    function bJ(a, b) {}

    function cJ(a, b) {};
    var eJ = W({
            commentSimpleboxRenderer: np("ytm-comment-simplebox-renderer", function(a, b) {}),
            commentThreadRenderer: function(a, b) {},
            commentSectionHeaderRenderer: dJ
        }),
        fJ = 0 <= cc.search("Factory Media Production");

    function dJ(a, b) {}

    function gJ(a) {}
    var hJ = np("ytm-comment-section-renderer", function(a, b) {});
    var iJ = W({
        buttonRenderer: Z
    });

    function jJ(a, b, c) {}

    function lJ(a, b, c) {}

    function kJ(a) {};
    var mJ = W({
        buttonRenderer: Z
    });
    var nJ = G.Oa,
        oJ = G.Ba,
        pJ = np("ytm-donation-shelf-renderer-outer", function(a, b) {});
    var qJ = W({
        buttonRenderer: Z
    });

    function rJ(a) {}

    function sJ(a) {};
    var tJ = W({
        cardItemActionsRenderer: mI,
        cardItemTextCollectionRenderer: CI,
        themedImageRenderer: DI
    });
    var uJ = W({
        cardItemActionsRenderer: mI,
        cardItemTextCollectionRenderer: CI,
        cardItemTextRenderer: AI,
        themedImageRenderer: DI
    });

    function vJ(a) {};
    var wJ = W({
        buttonRenderer: Z
    });
    var xJ = W({
        postRedemptionSectionRenderer: function(a, b) {}
    });

    function yJ(a, b) {};
    var zJ = np("ytm-redeem-code-renderer", function(a, b) {});
    var AJ = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    function BJ(a) {}

    function CJ(a) {};

    function DJ(a, b) {};

    function EJ(a, b) {};
    var GJ = W({
        optionSelectableItemRenderer: FJ
    });

    function FJ(a) {}

    function HJ(a) {}

    function JJ(a, b) {}

    function KJ(a) {}

    function LJ(a, b) {}

    function IJ(a) {};
    var MJ = W({
        optionSelectableItemRenderer: function(a, b) {}
    });

    function NJ(a) {};

    function OJ() {};
    var PJ = W({
        optionsRenderer: function(a, b) {},
        buttonRenderer: Z,
        booleanFormFieldV2Renderer: function(a, b) {}
    });
    var QJ = W({
        buttonRenderer: Z
    });
    var SJ = W({
        buttonRenderer: Z,
        sponsorshipsHeaderRenderer: RJ,
        sponsorshipsListTileRenderer: Lw
    });

    function RJ(a, b) {};
    var TJ = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });
    var UJ = W({
        buttonRenderer: Z
    });
    var VJ, WJ = !1,
        XJ = B("CLOSE");

    function YJ(a, b, c, d, e) {}

    function ZJ() {}

    function $J(a) {};
    var aK = W({
        buttonRenderer: Z
    });
    var bK = W({
        buttonRenderer: Z,
        checkboxSurveyOptionRenderer: function(a, b) {}
    });

    function cK(a, b) {}

    function dK(a) {}

    function eK(a) {}

    function fK(a, b) {}

    function gK(a, b, c) {};
    var hK = W({
        singleOptionSurveyOptionRenderer: function(a, b) {}
    });
    var iK = W({
        singleOptionSurveyRenderer: function(a, b) {},
        checkboxSurveyRenderer: function(a, b) {}
    });

    function jK(a, b) {}

    function kK(a, b) {};
    var lK = W({
        oneVsOneEvent: kK,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function mK(a, b) {};
    var nK = W({
        callToActionButtonRenderer: function(a, b) {},
        collageHeroImageRenderer: function(a, b) {},
        singleHeroImageRenderer: function(a, b) {},
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var oK = W({
        buttonRenderer: Z,
        subscribeButtonRenderer: ur
    });
    var pK = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function qK(a, b) {}

    function rK(a, b) {};
    var sK = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var tK = W({
        watchCardCompactVideoRenderer: function(a, b) {},
        watchCardOneVsOneEventCompactVideoRenderer: function(a, b) {}
    });
    var uK = W({
        horizontalCardListRenderer: Yu,
        verticalWatchCardListRenderer: function(a, b) {}
    });
    var vK = G.Oa,
        wK = G.Ba,
        xK = W({
            watchCardHeroOneVsOneEventRenderer: function(a, b) {},
            watchCardHeroVideoRenderer: function(a, b) {},
            watchCardRichHeaderRenderer: function(a, b) {},
            watchCardSectionSequenceRenderer: function(a, b) {}
        }),
        yK = np("ytm-universal-watch-card-renderer", function(a, b) {});
    var zK = W({
        buttonRenderer: Z
    });

    function AK(a, b) {}

    function BK(a) {}

    function CK(a) {};

    function DK(a) {}

    function EK(a) {};
    var FK = W({
        buttonRenderer: Z
    });

    function GK(a, b) {}

    function HK(a) {}

    function IK(a) {}

    function JK(a) {};
    var KK = W({
        buttonRenderer: Z
    });

    function LK(a) {}

    function MK(a) {}

    function NK(a, b) {};
    var OK = W({
        singleYpcOfferRenderer: NK
    });

    function PK(a) {}

    function QK(a, b) {};
    var RK = W({
        collapsibleYpcOfferRenderer: function(a, b) {},
        singleYpcOfferRenderer: NK
    });
    var SK = G.Oa,
        TK = G.Ba,
        UK = W({
            singleYpcOfferListRenderer: function(a, b) {}
        }),
        VK = np("ytm-ypc-offers-list-renderer", function(a, b) {});

    function WK(a) {}

    function XK(a, b) {};
    var YK = {
        getAccountsListEndpoint: {
            hack: !0
        }
    };
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !m.requestAnimationFrame; ++c) m.requestAnimationFrame = m[b + "RequestAnimationFrame"], m.cancelAnimationFrame = m[b + "CancelAnimationFrame"] || m[b + "CancelRequestAnimationFrame"];
        if (!m.requestAnimationFrame) {
            var d = 0;
            m.requestAnimationFrame = function(e) {};
            m.cancelAnimationFrame || (m.cancelAnimationFrame = function(e) {})
        }
    })();
    (function() {
        function a(b, c) {}
        "function" !== typeof window.CustomEvent && (a.prototype = window.Event.prototype, window.CustomEvent = a)
    })();
    "hidden" in HTMLElement.prototype || Object.defineProperty(HTMLElement.prototype, "hidden", {
        get: function() {},
        set: function(a) {}
    });
    ND("ai");
    (function() {
        function a(c, d) {}
        xt();
        var b = YE().qe;
        p("yt.logging.errors.log", Bj, void 0);
        Aj();
        window.onerror = Bu;
        le = Nh;
        Ih("CSI_SERVICE_NAME", "youtube_mobile");
        window.addEventListener("initialdata", OD);
        window.addEventListener("player-dom-paused", PD);
        window.addEventListener("state-navigatestart", QD);
        window.addEventListener("state-progress", TD);
        window.addEventListener("state-responsereceived", XD);
        window.addEventListener("state-navigateend", ZD);
        window.addEventListener("state-progress", eE);
        window.addEventListener("state-responsereceived",
            dF);
        Hp();
        Vu();
        window.addEventListener("state-navigateend", GE);
        if (!A("mweb_handle_botguard_to_player") || y("MWEB_BLAZERPLAYER", !1)) window.addEventListener("player-state-change", Oo), window.addEventListener("blazerplayer-playback-start", Po), window.addEventListener("state-navigateend", Qo);
        oB();
        A("decorate_autoplay_renderer_mweb") && window.addEventListener("state-navigateend", vE);
        DE();
        OE();
        window.addEventListener("scroll", Bt);
        window.addEventListener("resize", zt);
        A("youthere_supported") && (window.addEventListener("state-navigatestart",
            TE), window.addEventListener("state-navigateend", UE), window.addEventListener("user-activity", VE));
        y("MWEB_BLAZERPLAYER", !1) || (window.addEventListener("on-play-autonav-video", St), window.addEventListener("on-play-previous-autonav-video", Tt), window.addEventListener("hashchange", Ut), window.addEventListener("state-navigatestart", Ut), window.addEventListener("scroll", Rt), window.addEventListener("user-activity", Qt), Nt(), window.addEventListener("player-fullscreen-change", qE), window.addEventListener("hashchange",
            rE));
        bq() && A("mweb_fetch_guide_except_watch") && (eF = !0);
        Q().hash && aE();
        window.loadInitialResponse = a;
        window.makeColdLoadRequest = function(c) {};
        window.loadGuideResponse = function(c) {}
    })();
    ND("apr");
    Xr("state-navigateend", function() {});
    xn(!0);
    lq(FD, function(a) {
        a.g()
    });
    window.addEventListener("beforeunload", function() {});
    Object.assign(mq, {
        accountLinkCommand: gG,
        accountUnlinkCommand: kG,
        banAuthorAction: rF,
        commandExecutorCommand: mG,
        confirmDialogEndpoint: oG,
        createCommentAction: function(a, b) {},
        createCommentReplyAction: function(a, b) {},
        experimentsOptInAction: tF,
        experimentsOptOutAction: tF,
        getMultiPageMenuAction: function(a) {},
        hideReportedCommentAction: function(a, b) {},
        heartCommentCommand: sF,
        logYpcFlowDismissCommand: bo,
        logYpcFlowStartCommand: ao,
        navigateAction: zF,
        openPopupAction: WF,
        pinCommentAction: function(a, b) {},
        playlistRemoveVideosAction: function(a, b) {},
        playlistDeletionRedirectCommand: function(a, b) {},
        removeCommentAction: rF,
        refreshAccountLinkButtonCommand: function(a, b, c) {},
        replaceEnclosingAction: function(a, b) {},
        replaceFeedContentAction: function(a, b) {},
        signalAction: function(a, b) {},
        unheartCommentCommand: sF,
        unpinCommentAction: function(a, b) {},
        updateButtonAction: function(a, b) {},
        updateCommentVoteAction: function(a, b) {},
        updatePlaylistHeaderAction: function(a, b) {},
        updateSubscribeButtonAction: function(a, b) {}
    });
    lq(nq, function(a) {});
    qq.push.apply(qq, ea([{
            commandType: "accountLinkCommand",
            l: gG
        }, {
            commandType: "accountUnlinkCommand",
            l: kG
        }, {
            commandType: "adChoicesDialogEndpoint",
            l: function(a) {}
        },
        {
            commandType: "addToPlaylistServiceEndpoint",
            l: BH
        }, {
            commandType: "addUpcomingEventReminderEndpoint",
            l: UH
        }, {
            commandType: "browseEndpoint",
            l: pG
        }, {
            commandType: "changeEngagementPanelVisibilityAction",
            l: function(a, b) {}
        },
        {
            commandType: "channelCreationFormEndpoint",
            l: pG
        }, {
            commandType: "channelCreationServiceEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "clearSearchHistoryEndpoint",
            l: GG
        }, {
            commandType: "clearWatchHistoryEndpoint",
            l: GG
        }, {
            commandType: "commandExecutorCommand",
            l: mG
        }, {
            commandType: "confirmDialogEndpoint",
            l: oG
        }, {
            commandType: "createChannelEndpoint",
            l: pG
        }, {
            commandType: "createCommentEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "createCommentReplyDialogEndpoint",
            l: function(a) {}
        },
        {
            commandType: "createCommentReplyEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "createPlaylistServiceEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "deletePlaylistEndpoint",
            l: BH
        }, {
            commandType: "experimentsOptInEndpoint",
            l: GG
        }, {
            commandType: "experimentsOptOutEndpoint",
            l: GG
        }, {
            commandType: "feedbackEndpoint",
            l: GG
        }, {
            commandType: "flagEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "gamingAccountLinkConfirmDialogCommand",
            l: function(a) {}
        },
        {
            commandType: "gamingAccountLinkRedirectDialogCommand",
            l: function(a) {}
        },
        {
            commandType: "gamingAccountLinkSettingCommand",
            l: function(a) {}
        },
        {
            commandType: "gamingMultipleAccountLinkDialogCommand",
            l: function(a) {}
        },
        {
            commandType: "getAccountsListEndpoint",
            l: GG
        }, {
            commandType: "getReportFormEndpoint",
            l: BH
        }, {
            commandType: "likeEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "logYpcFlowDismissCommand",
            l: bo
        }, {
            commandType: "logYpcFlowStartCommand",
            l: ao
        }, {
            commandType: "loopCommand",
            l: function(a) {}
        },
        {
            commandType: "managePurchaseEndpoint",
            l: function(a) {}
        },
        {
            commandType: "menuEndpoint",
            l: function(a) {}
        },
        {
            commandType: "modalEndpoint",
            l: function(a) {}
        },
        {
            commandType: "modifyReportFormCommand",
            l: function(a, b) {}
        },
        {
            commandType: "navigateAction",
            l: function(a, b) {}
        },
        {
            commandType: "navigationEndpoint",
            l: pG
        }, {
            commandType: "nativeAppDeeplinkEndpoint",
            l: function(a) {}
        },
        {
            commandType: "offlineVideosEndpoint",
            l: function() {}
        },
        {
            commandType: "openPopupAction",
            l: WF
        }, {
            commandType: "pauseSearchHistoryEndpoint",
            l: MH
        }, {
            commandType: "pauseWatchHistoryEndpoint",
            l: MH
        }, {
            commandType: "performCommentActionEndpoint",
            l: GG
        }, {
            commandType: "playlistEditEndpoint",
            l: function(a, b, c) {}
        },
        {
            commandType: "playlistEditorEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "removeUpcomingEventReminderEndpoint",
            l: UH
        }, {
            commandType: "resumeSearchHistoryEndpoint",
            l: MH
        }, {
            commandType: "resumeWatchHistoryEndpoint",
            l: MH
        }, {
            commandType: "searchEndpoint",
            l: pG
        }, {
            commandType: "setClientSettingEndpoint",
            l: function(a) {}
        },
        {
            commandType: "setSettingEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "shareEndpoint",
            l: function(a) {}
        },
        {
            commandType: "signInEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "signalServiceEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "subscribeEndpoint",
            l: LH
        }, {
            commandType: "unlimitedCreateFamilyEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "unlimitedFamilyFlowEndpoint",
            l: function(a) {}
        },
        {
            commandType: "unsubscribeEndpoint",
            l: LH
        }, {
            commandType: "uploadEndpoint",
            l: pG
        }, {
            commandType: "urlEndpoint",
            l: function(a) {}
        },
        {
            commandType: "userFeedbackEndpoint",
            l: function() {}
        },
        {
            commandType: "verifyAgeEndpoint",
            l: GG
        }, {
            commandType: "watchEndpoint",
            l: pG
        }, {
            commandType: "ypcCancelRecurrenceEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "ypcCompleteTransactionEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "ypcFixInstrumentEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "ypcGetCartEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "ypcGetOffersEndpoint",
            l: function(a, b) {}
        },
        {
            commandType: "ypcPauseMembershipDialogCommand",
            l: function(a) {}
        },
        {
            commandType: "ypcPauseSubscriptionCommand",
            l: function(a, b) {}
        },
        {
            commandType: "ypcRedeemCodeEndpoint",
            l: kI
        }, {
            commandType: "ypcResumeSubscriptionCommand",
            l: function(a, b) {}
        }
    ]));
    lq(rq, function(a) {});
    ax("channelCreationFormRenderer", function(a, b) {});
    ax("commentSectionRenderer", hJ);
    ax("cardItemRenderer", function(a) {});
    ax("donationAmountPickerRenderer", function(a) {});
    ax("donationPostTransactionRenderer", function(a) {});
    ax("donationShelfRenderer", pJ);
    ax("gamingAccountLinkConfirmDialogRenderer", RG);
    ax("gamingAccountLinkSettingRenderer", YG);
    ax("gamingMultipleAccountLinkDialogRenderer", cH);
    ax("mealbarPromoRenderer", function(a, b) {});
    ax("membershipPostCancelRenderer", function(a) {});
    ax("modalWithTitleAndButtonRenderer", mH);
    ax("musicPassFeatureInfoRenderer", function(a, b) {});
    ax("musicPassSmallFeatureInfoRenderer", function(a) {});
    ax("offerItemRenderer", function(a) {});
    ax("offerItemUpsellRenderer", function(a) {});
    ax("redeemCodeRenderer", zJ);
    ax("reportDetailsFormRenderer", function(a) {});
    ax("reportFormModalRenderer", function(a) {});
    ax("sponsorshipsCelebrationRenderer", function(a) {});
    ax("surveyFollowUpRenderer", function(a) {});
    ax("surveyTriggerRenderer", function(a, b) {});
    ax("subscriptionProductRenderer", function(a, b) {});
    ax("subscriptionProductUpsellOfferRenderer", function(a, b) {});
    ax("universalWatchCardRenderer", yK);
    ax("unlimitedFamilyProfileInterstitialRenderer", function(a) {});
    ax("unlimitedFamilyMessageInterstitialRenderer", Vx);
    ax("unlimitedPageHeaderRenderer", function(a, b) {});
    ax("watchMetadataAppPromoRenderer", function(a, b) {});
    ax("ypcOffersListRenderer", VK);
    Object.keys(Zw);
    vm || (xm = {
            heightPixels: screen.height,
            widthPixels: screen.width
        }, um && (xm.memoryTotalKbytes = String(Math.round(um.jsHeapSizeLimit / 1E3))), window.devicePixelRatio && (xm.devicePixelRatio = window.devicePixelRatio), ym.intersectionObserverPresent = "IntersectionObserver" in window, ym.indexedDbPresent = "indexedDB" in window, ym.serviceWorkerPresent = "serviceWorker" in navigator, ym.webSharePresent = "share" in navigator, ym.fullScreenApiPresent = "exitFullscreen" in document || "webkitExitFullscreen" in document, Math.random() < zi("web_system_health_fraction") &&
        (Th(zm, 3E4), Am()), vm = !0);
    "#channel_switcher" == Q().hash && S(YK, {}, !1);
    if (A("mweb_service_worker_registration_enabled") && navigator.serviceWorker && navigator.serviceWorker.getRegistrations && "https:" === window.location.protocol)
        if (A("mweb_service_worker_enabled")) {
            var ZK = "/sw.js",
                $K = y("MWEB_SERVICE_WORKER_VFL", void 0);
            $K && (ZK += "?vfl=" + $K);
            XK(ZK)
        } else navigator.serviceWorker.getRegistrations().then(function(a) {});
}).call(this);