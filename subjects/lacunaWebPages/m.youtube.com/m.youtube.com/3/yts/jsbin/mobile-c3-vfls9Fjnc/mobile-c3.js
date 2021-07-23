(function() {
    var k;

    

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
    var fa = "function" == typeof Object.create ? Object.create : null,
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
        ha = ia ? null : null
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
    var na = "function" == typeof Object.defineProperties ? Object.defineProperty : null,
        oa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    

    
    ra.prototype.toString = null;
    var qa = function() {
        
        var b = 0;
        return a
    }();

    

    

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
        

        

        
        if (a) return a;
        c.prototype.i = null;
        var e = oa.setTimeout;
        c.prototype.j = null;
        c.prototype.C = null;
        c.prototype.D = null;
        b.prototype.D = null;
        b.prototype.ea = null;
        b.prototype.aa = null;
        b.prototype.C = null;
        b.prototype.G = null;
        b.prototype.N = null;
        b.prototype.T = null;
        var f = new c;
        b.prototype.ma = null;
        b.prototype.na = null;
        b.prototype.then = null;
        b.prototype["catch"] = null;
        b.prototype.Pa = null;
        b.resolve = d;
        b.reject = null;
        b.race = null;
        b.all = null;
        return b
    });

    
    ua("String.prototype.endsWith", function(a) {
        return a ? a : null
    });
    ua("Array.prototype.find", function(a) {
        return a ? a : null
    });
    ua("String.prototype.startsWith", function(a) {
        return a ? a : null
    });

    
    ua("Array.prototype.values", function(a) {
        return a ? a : null
    });

    
    ua("WeakMap", function(a) {
        

        

        

        

        
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
        b.prototype.set = null;
        b.prototype.get = null;
        b.prototype.has = null;
        b.prototype["delete"] = null;
        return b
    });
    ua("Map", function(a) {
        

        

        

        
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
        e.prototype.set = null;
        e.prototype["delete"] = null;
        e.prototype.clear = null;
        e.prototype.has = null;
        e.prototype.get = null;
        e.prototype.entries = null;
        e.prototype.keys = null;
        e.prototype.values = null;
        e.prototype.forEach = null;
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    ua("Set", function(a) {
        
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
        b.prototype.add = null;
        b.prototype["delete"] = null;
        b.prototype.clear = null;
        b.prototype.has = null;
        b.prototype.entries = null;
        b.prototype.values = null;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = null;
        return b
    });
    ua("Array.prototype.keys", function(a) {
        return a ? a : null
    });
    ua("Object.is", function(a) {
        return a ? a : null
    });
    ua("Array.prototype.includes", function(a) {
        return a ? a : null
    });
    ua("String.prototype.includes", function(a) {
        return a ? a : null
    });
    ua("Array.prototype.entries", function(a) {
        return a ? a : null
    });
    var za = "function" == typeof Object.assign ? Object.assign : null;
    ua("Object.assign", function(a) {
        return a || za
    });
    var Aa = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], null);
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return null
        }
        return null
    }();
    ua("Reflect.construct", function() {
        return Aa
    });
    ua("Array.from", function(a) {
        return a ? a : null
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

    
    var Ea = /^[\w+/_-]+[=]{0,2}$/,
        Da = null;

    

    function r(a, b) {
        for (var c = a.split("."), d = b || m, e = 0; e < c.length; e++)
            if (d = d[c[e]], null == d) return null;
        return d
    }

    

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

    

    function Qa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa = Oa : Qa = Pa;
        return Qa.apply(null, arguments)
    }

    
    var Sa = Date.now || null;

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
    var Wa = Array.prototype.indexOf ? null : null,
        Xa = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : null,
        Ya = Array.prototype.filter ? null : null,
        Za = Array.prototype.map ? null : null,
        $a = Array.prototype.reduce ? null : null,
        ab = Array.prototype.some ? null : null,
        bb = Array.prototype.every ? null : null;

    

    

    

    

    

    

    

    ;

    

    function lb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    ;

    function nb(a) {
        this.g = a
    }
    nb.prototype.toString = function() {
        return this.g
    };
    var u = {
        is: null,
        forEach: null,
        filter: null,
        map: null,
        some: null,
        every: null,
        getCount: null,
        Wf: null,
        Xf: null,
        contains: null,
        Ua: function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        sa: null,
        Ta: function(a, b) {
            var c = Ja(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Qa: null,
        jb: null,
        Tb: function(a, b, c) {
            for (var d in a)
                if (b.call(c, a[d], d, a)) return d
        },
        Uf: null,
        isEmpty: null,
        clear: null,
        remove: null,
        add: null,
        get: null,
        set: null,
        mg: null,
        ng: null,
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
        xc: null,
        uc: function(a) {
            var b = {},
                c;
            for (c in a) b[a[c]] = c;
            return b
        },
        Cb: "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        extend: null,
        create: null,
        Ra: function(a) {
            var b = arguments.length;
            if (1 == b && Ia(arguments[0])) return u.Ra.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        },
        Sf: null,
        eg: null,
        Vf: null,
        Yf: null
    };
    u.Ra("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");

    function ob(a, b) {
        this.g = a === pb && b || "";
        this.i = qb
    }
    ob.prototype.Y = !0;
    ob.prototype.U = null;

    function rb(a) {
        return a instanceof ob && a.constructor === ob && a.i === qb ? a.g : "type_error:Const"
    }

    function v(a) {
        return new ob(pb, a)
    }
    var qb = {},
        pb = {},
        sb = v("");

    
    tb.prototype.Y = !0;
    var ub = {};
    tb.prototype.U = null;

    function vb(a, b, c) {
        this.g = a === wb && b || "";
        this.i = a === wb && c || null;
        this.j = xb
    }
    vb.prototype.Y = !0;
    vb.prototype.U = null;
    vb.prototype.mb = !0;
    vb.prototype.lb = null;

    

    

    
    var Cb = /%{(\w+)}/g,
        Bb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Eb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        xb = {};

    function Db(a) {
        return new vb(wb, a, null)
    }

    
    var wb = {};

    function Gb(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    
    var Ib = String.prototype.trim ? function(a) {
        return a.trim()
    } : null;

    
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
    Rb.prototype.U = null;
    Rb.prototype.mb = !0;
    Rb.prototype.lb = null;

    

    function Vb(a) {
        if (a instanceof Rb && a.constructor === Rb && a.i === Tb) return a.g;
        Ha(a);
        return "type_error:SafeUrl"
    }
    var Wb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        Xb = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        Yb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    

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

    
    ac.prototype.Y = !0;
    var bc = {};
    ac.prototype.U = null;
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
    gc.prototype.lb = null;
    gc.prototype.Y = !0;
    gc.prototype.U = null;

    

    
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

    ;

    function nc(a, b) {
        var c = b instanceof Rb ? b : $b(b);
        a.href = Vb(c)
    }

    

    

    

    

    

    ;

    

    

    

    ;

    function yc() {
        return fc("iPhone") && !fc("iPod") && !fc("iPad")
    };

    
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

    
    var Pc = {};

    ;

    ;

    

    ;

    function Wc(a) {
        this.g = a || {
            cookie: ""
        }
    }
    k = Wc.prototype;
    k.isEnabled = null;
    k.set = null;
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ib(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = null;
    k.sa = null;
    k.Ua = null;
    k.isEmpty = null;
    k.getCount = null;
    k.Qa = null;
    k.jb = null;
    k.clear = null;

    
    var Yc = new Wc("undefined" == typeof document ? null : document);
    var Zc = !Bc || 9 <= Number(Hc);

    
    k = $c.prototype;
    k.clone = null;
    k.Sa = null;
    k.ceil = null;
    k.floor = null;
    k.round = null;
    k.scale = null;

    
    k = ad.prototype;
    k.clone = null;
    k.aspectRatio = null;
    k.isEmpty = null;
    k.ceil = null;
    k.floor = null;
    k.round = null;
    k.scale = null;

    
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

    

    

    function ed(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    

    

    

    

    
    k = kd.prototype;
    k.getElementsByTagName = null;
    k.createElement = null;
    k.appendChild = null;
    k.append = null;
    k.canHaveChildren = null;
    k.contains = null;

    function ld() {
        this.j = this.j;
        this.D = this.D
    }
    ld.prototype.j = !1;
    ld.prototype.dispose = null;
    ld.prototype.qa = null;

    ;
    var nd = m.JSON.stringify;
    var od = "StopIteration" in m ? m.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    
    pd.prototype.next = null;
    pd.prototype.ba = null;

    

    

    ;

    
    k = td.prototype;
    k.getCount = null;
    k.Ua = null;
    k.sa = null;
    k.Qa = null;
    k.jb = null;
    k.Sa = null;

    
    k.isEmpty = null;
    k.clear = null;
    k.remove = null;

    
    k.get = null;
    k.set = null;
    k.forEach = null;
    k.clone = null;
    k.uc = null;
    k.ba = null;

    ;

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

    

    
    var Cd;

    
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
        } else Id = null
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

    

    

    
    Pd.prototype.then = function(a, b, c) {
        return ae(this, Ka(a) ? a : null, Ka(b) ? b : null, c)
    };
    Nd(Pd);

    function be(a, b) {
        return ae(a, null, b, void 0)
    }
    Pd.prototype.cancel = null;

    

    function ge(a, b) {
        a.i || 2 != a.g && 3 != a.g || he(a);
        a.D ? a.D.next = b : a.i = b;
        a.D = b
    }

    function ae(a, b, c, d) {
        var e = Td(null, null, null);
        e.g = new Pd(function(f, g) {
            e.i = b ? null : f;
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
    Pd.prototype.aa = null;
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

    
    Ta(ce, Ua);
    ce.prototype.name = "cancel";

    ;
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

    

    

    

    

    

    

    

    

    
    var ze = /#|$/;

    
    var Be = /[?&]($|#)/;

    

    

    ;

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
    k.Va = null;
    k.stop = null;
    k.pause = null;
    k.resume = null;
    k.qa = null;
    k.ue = null;

    ;

    ;

    
    Ta(Ie, He);
    Ie.prototype.getCount = null;
    Ie.prototype.clear = null;

    
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
    k.set = null;
    k.get = null;
    k.remove = null;
    k.getCount = null;
    k.ba = null;
    k.clear = null;
    k.key = null;

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

    
    var Qe = Fa;

    

    

    
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
        We = lb(null);

    ;

    function Ye(a, b) {
        a.addEventListener && a.addEventListener("load", b, !1)
    };

    
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

    

    ;

    ;
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
    kf.prototype.disable = null;

    
    kf.prototype.start = null;
    kf.prototype.end = null;
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
    qf.prototype.reset = null;
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

    
    var xf = /\[native code\]/;

    function yf(a, b, c) {
        return a[b] = a[b] || c
    }

    

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

    

    

    ;
    var Gf = yf(Cf, "perf", Af());
    yf(Gf, "g", Af());
    var Hf = yf(Gf, "i", Af());
    yf(Gf, "r", []);
    Af();
    Af();

    

    ;
    var Kf = Af(),
        Lf = [];

    
    Lf.push(["jsl", null]);
    var Nf = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Of = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Pf = /^[a-zA-Z0-9\-_\.,!]+$/,
        Qf = /^gapi\.loaded_[0-9]+$/,
        Rf = /^[a-zA-Z0-9,._-]+$/;

    

    

    

    

    
    var Vf = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Uf = /\/cb=/g,
        Tf = /\/\//g;

    
    Kf.m = null;
    var ag = decodeURI("%73cript"),
        bg = /^[-+_0-9\/A-Za-z]+={0,2}$/;

    

    

    

    

    

    

    

    

    
    Bf.load = null;

    

    

    

    ;
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    
    pg.prototype.cancel = null;
    pg.prototype.ea = null;

    

    
    pg.prototype.ib = null;

    
    pg.prototype.then = null;
    Nd(pg);
    pg.prototype.isError = null;

    

    

    
    Ta(ug, Ua);
    ug.prototype.message = "Deferred has already fired";
    ug.prototype.name = "AlreadyCalledError";

    
    Ta(qg, Ua);
    qg.prototype.message = "Deferred was canceled";
    qg.prototype.name = "CanceledError";

    
    yg.prototype.j = null;
    var xg = {};

    

    

    

    

    
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
    k.subscribe = null;
    k.bb = null;
    k.ic = null;

    
    k.clear = null;
    k.getCount = null;
    k.qa = null;

    
    Gg.prototype.set = null;
    Gg.prototype.get = null;
    Gg.prototype.remove = null;

    
    Ta(Hg, Gg);

    

    
    Hg.prototype.set = null;
    Hg.prototype.i = null;
    Hg.prototype.get = null;

    function Kg(a) {
        this.g = a
    }
    Ta(Kg, Hg);
    Kg.prototype.set = null;
    Kg.prototype.i = null;

    
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

    
    k = Lg.prototype;
    k.isAvailable = null;
    k.set = null;
    k.get = null;
    k.remove = null;
    k.getCount = null;
    k.ba = null;
    k.clear = null;

    

    ;

    function Rg(a, b) {
        this.i = a;
        this.g = b + "::"
    }
    Ta(Rg, Ie);
    Rg.prototype.set = null;
    Rg.prototype.get = null;
    Rg.prototype.remove = null;
    Rg.prototype.ba = null;

    function Sg() {}
    Ga(Sg);
    Sg.prototype.g = 0;

    
    Tg.prototype.set = null;
    Tg.prototype.get = null;

    ;
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

    

    ;

    
    var ah = new Xg;
    ah[Vg["default"]] = null;
    ah.style = null;

    ;

    ;
    var dh = "undefined" !== typeof Node && Node.prototype.getRootNode || null;

    

    

    ;

    
    var ih = null,
        jh = null,
        kh = null,
        lh = null,
        mh = [],
        nh = hh,
        oh = [],
        ph = [];

    

    

    

    function th(a, b) {
        var c = b = void 0 === b ? {} : b,
            d = void 0 === c.matches ? hh : c.matches;
        return null
    }
    var uh = function(a) {
            return th(null, a)
        }(),
        vh = function(a) {
            return th(null, a)
        }();
    var wh = [],
        xh = 0;

    ;
    var zh = new Xg;
    var Ah = new Xg;

    ;
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

    

    

    

    ;

    
    var Rh = {};

    ;

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

    

    

    

    

    

    ;
    var di = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        ei = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    

    

    

    
    var ii = {};

    function ki() {
        this.loading = !1;
        this.g = null
    }

    

    
    ki.prototype.dispose = null;

    

    ;

    function si() {}
    ma(si, pi);

    

    
    si.prototype.start = null;
    si.prototype.pause = null;
    Ga(si);
    si.K();
    var ui = [],
        vi = !1;

    

    ;

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
        Bi = Ai.ytcsi && Ai.ytcsi.now ? Ai.ytcsi.now : Ai.performance && Ai.performance.timing && Ai.performance.now ? null : null;
    var mi = new ki,
        Ci = !1,
        Di = 0,
        Ei = "";

    

    

    

    ;

    function Ii() {
        var a = Ji;
        r("yt.ads.biscotti.getId_") || p("yt.ads.biscotti.getId_", a, void 0)
    }

    function Ki(a) {
        p("yt.ads.biscotti.lastId_", a, void 0)
    };

    

    

    

    

    ;

    

    

    
    var Ri = new function() {
        var a = window.document;
        this.g = window;
        this.i = a
    };
    p("yt.ads_.signals_.getAdSignalsString", null, void 0);
    Sa();
    var Ui = void 0 !== XMLHttpRequest ? function() {
        return new XMLHttpRequest
    } : void 0 !== ActiveXObject ? null : null;

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

    

    function aj(a, b) {
        var c = y("CORS_HEADER_WHITELIST") || {},
            d = pe(a);
        return d ? (c = c[d]) ? 0 <= Wa(c, b) : !1 : !0
    }

    

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
        b.La && 0 < b.timeout && (f = Sh(null, b.timeout));
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
            a.onSuccess = null;
            a.onError = function(e) {
                d(new nj("Unknown request error", "net.unknown", e))
            };
            a.La = null;
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
    oj.prototype.then = null;
    Nd(oj);

    function qj(a) {
        var b = new oj;
        a = void 0 === a ? null : a;
        b.g = 2;
        b.i = void 0 === a ? null : a;
        return b
    }

    ;

    function rj(a) {
        Ua.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof sj;
        this.isTimeout = a instanceof nj && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof ce
    }
    ma(rj, Ua);
    rj.prototype.name = "BiscottiError";

    
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

    

    function vj(a, b) {
        var c = new rj(b);
        Ki("");
        tj = qj(c);
        0 < a && wj(12E4, a - 1);
        throw c;
    }

    function wj(a, b) {
        Sh(null, a)
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
        Xa(y("ERRORS") || [], null);
        Ih("ERRORS", [])
    }

    ;
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

    

    

    

    

    

    ;
    var Yj = 0,
        Zj = Dc ? "webkit" : Cc ? "moz" : Bc ? "ms" : Ac ? "o" : "";

    

    
    p("ytDomDomGetNextId", r("ytDomDomGetNextId") || null, void 0);
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

    

    
    dk.prototype.preventDefault = null;
    dk.prototype.stopPropagation = null;
    dk.prototype.stopImmediatePropagation = null;
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
        var g = f ? null : null;
        g = Kh(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), jk() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        fk[e] = [a, b, c, g, d];
        return e
    };
    var lk = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? null : null;

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
    mk.prototype.ma = null;
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
    mk.prototype.qa = null;
    var nk = {};

    function ok(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Wb ? !0 : b.Wb;
        var c = void 0 === b.gc ? !1 : b.gc,
            d = void 0 === b.oc ? !1 : b.oc;
        null == r("_lact", window) && (b = parseInt(y("LACT"), 10), b = isFinite(b) ? Sa() - Math.max(b, 0) : -1, p("_lact", b, window), p("_fact", b, window), -1 == b && pk(), kk(document, "keydown", null), kk(document, "keyup", null), kk(document, "mousedown", null), kk(document, "mouseup", null), a && (c ? kk(window, "touchmove", null, {
            passive: !0
        }) : (kk(window, "resize", null), kk(window, "scroll", null))), new mk(null), kk(document, "touchstart", null, {
            passive: !0
        }), kk(document, "touchend", null, {
            passive: !0
        }))
    }

    

    function pk(a, b) {
        if (!rk(a, b)) {
            null == r("_lact", window) && ok();
            var c = Sa();
            p("_lact", c, window); - 1 == r("_fact", window) && p("_fact", c, window);
            (c = r("ytglobal.ytUtilActivityCallback_")) && c()
        }
    }

    function rk(a, b) {
        return a && b && b.path ? !!cb(b.path, null) : !1
    }

    ;
    var tk = r("ytLoggingGelSequenceIdObj_") || {};
    p("ytLoggingGelSequenceIdObj_", tk, void 0);

    ;

    

    

    

    
    vk.prototype.toString = null;

    ;

    function Ak(a, b) {
        this.topic = a;
        this.g = b
    }
    Ak.prototype.toString = null;
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

    

    

    

    

    ;

    
    ma(Mk, zk);
    var Ik = new Ak("screen-created", Mk),
        Nk = [],
        Pk = Ok,
        Qk = 0;

    

    

    

    ;

    

    ;

    ;

    function Vk(a) {
        var b = new Ke;
        (b = b.isAvailable() ? a ? new Rg(b, a) : b : null) || (a = new Lg(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.g = (a = b) ? new Kg(a) : null;
        this.i = document.domain || window.location.hostname
    }
    Vk.prototype.set = null;
    Vk.prototype.get = null;
    Vk.prototype.remove = null;
    new Vk("yt.innertube");

    

    ;
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

    

    

    ;

    

    

    
    p("yt_logging_screen.getRootVeType", jl, void 0);

    
    p("yt_logging_screen.getCurrentCsn", kl, void 0);

    
    p("yt_logging_screen.setCurrentScreen", ll, void 0);

    ;
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

    ;

    

    

    

    

    ;

    ;

    

    

    ;

    

    

    ;
    var Cl = r("ytLoggingLatencyUsageStats_") || {};
    p("ytLoggingLatencyUsageStats_", Cl, void 0);
    var Dl = 0;

    

    

    ;

    
    Hl.prototype.clear = null;

    
    Ga(Hl);

    ;
    var Kl = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    p("yt.msgs_", Kl, void 0);

    function B(a) {
        var b = void 0 === b ? {} : b;
        a = (a = a in Kl ? Kl[a] : void 0) || "";
        var c = {},
            d;
        for (d in b) {
            c.za = d;
            var e = null(c);
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

    

    

    

    

    ;

    

    

    

    

    ;
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
    em.prototype.getDuration = null;
    em.prototype.getCurrentTime = null;
    em.prototype.i = null;

    function hm() {
        this.g = [];
        this.i = [];
        this.j = []
    }
    Ga(hm);
    var im = r("ytPlayerUtilsVideoTagPoolInstance") || hm.K();
    p("ytPlayerUtilsVideoTagPoolInstance", im, void 0);
    k = hm.prototype;
    k.Sb = null;

    

    
    k.Fe = null;
    k.ye = null;
    k.ge = null;
    k.Nd = null;
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
    k.get = null;
    k.set = null;

    function rm(a, b) {
        return !!((sm("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }

    
    k.remove = null;
    k.save = null;
    k.clear = null;
    k.dump = null;

    

    

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

    

    ;
    var Bm = window,
        Cm = Bm.performance || Bm.mozPerformance || Bm.msPerformance || Bm.webkitPerformance || {};

    ;

    function Em() {
        var a = y("TIMING_TICK_EXPIRATION");
        a || (a = {}, Ih("TIMING_TICK_EXPIRATION", a));
        return a
    }

    ;

    
    ma(Gm, zk);

    
    ma(Hm, zk);
    var Im = new Ak("aft-recorded", Gm),
        Jm = new Ak("timing-sent", Hm);

    

    

    

    function Qm(a) {
        return !!r("yt.timing." + (a || "") + "pingSent_")
    }

    

    function Rm(a) {
        return r("ytcsi." + (a || "") + "data_") || Sm(a)
    }

    

    function Nm(a) {
        a = Rm(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    

    ;

    
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

    ;
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

    

    

    
    var rn = Qa(Cm.clearResourceTimings || Cm.webkitClearResourceTimings || Cm.mozClearResourceTimings || Cm.msClearResourceTimings || Cm.oClearResourceTimings || Fa, Cm);

    

    ;

    ;

    function vn() {
        if (this.constructor === vn) throw new TypeError("VisibilityObserver cannot be instantiated directly.");
    }
    vn.prototype.dispose = null;
    vn.prototype.pb = null;
    vn.prototype.wc = null;
    vn.prototype.Na = null;

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
    k.dispose = null;
    k.wc = null;
    k.de = null;
    k.ee = null;
    k.pb = null;
    k.Na = null;

    function xn(a) {
        if ("1" !== u.Ta(y("PLAYER_CONFIG", {}), "args", "privembed")) {
            a && Ii();
            try {
                xj().then(null, function() {}), Sh(xn, 18E5)
            } catch (b) {
                Lh(b)
            }
        }
    };

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    ;

    ;

    
    Ga(Pn);
    Pn.prototype.load = null;

    

    

    

    ;

    

    ;
    var Wn = /^(?:https:)?\/\/[0-9a-z-.]+\.(google|youtube)\.com\//;

    ;

    ;

    

    ;

    

    ;
    var co = v("https://clients2.google.com/gr/gr_sync.js");

    
    eo.prototype.init = null;

    

    ;
    var ho = new Vk("yt.autonav");
    var io = ["commandMetadata", "webCommandMetadata", "rootVe"];

    
    var ko;

    

    

    

    ;

    ;
    var qo = Sg.K();

    function ro() {
        this.g = ""
    }
    ro.prototype.toString = null;

    

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
            X: null,
            W: gc,
            da: ic
        }, uo[3] = {
            X: null,
            W: Rb,
            da: Ub
        }, uo[4] = {
            X: null,
            W: vb,
            da: yb
        }, uo[5] = {
            X: null,
            W: ac,
            da: null
        }, uo[7] = {
            X: null,
            W: tb,
            da: null
        }, uo[8] = {
            X: null,
            W: null,
            da: null
        }, uo[9] = {
            X: null,
            W: ob,
            da: rb
        }, uo[10] = {
            X: null,
            W: ro,
            da: null
        }, uo);

    ;
    var xo = [];

    

    ;
    var Ao = Object.freeze ? Object.freeze(Object.create(null)) : {};

    

    

    function E(a) {
        try {
            return a()
        } catch (b) {
            return Mh(b), null
        }
    }

    
    var Do = window.requestIdleCallback || null;
    var Eo = {},
        Fo = null,
        Go = "";

    

    ;

    ;
    var Jo = !1,
        Ko = !1;

    

    

    

    

    

    

    ;
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

    ;
    ah[Vg["default"]] = null;

    

    

    ;

    

    function Wo(a) {
        var b = a.toString().toLowerCase();
        return null
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

    

    function np(a, b) {
        var c = Wo(new nb(a));
        return null
    };
    var op = new Set;

    
    pp.prototype.observe = null;

    
    pp.prototype.i = null;

    ;

    
    ma(sp, vn);
    sp.prototype.pb = null;
    sp.prototype.Na = null;
    sp.prototype.dispose = null;
    var tp = !1,
        up = null,
        vp = [];

    

    

    function yp(a) {
        up || tp || (tp = !0, (up = a()) && vp.forEach(null), vp.length = 0)
    }
    window.addEventListener("state-navigateend", null);
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

    

    

    

    

    

    function Hp() {
        "IntersectionObserver" in window ? yp(function() {
            return new wn
        }) : yp(null);
        window.addEventListener("state-responsestart", Gp)
    };

    ;
    var K = !!y("MWEB_USE_SPRITE", void 0);

    

    

    

    

    

    

    

    

    

    

    

    
    var Tp = {
            ACCOUNT_BOX: null,
            ACCOUNT_CIRCLE: null,
            ADD_TO_PLAYLIST: null,
            ACCOUNT_LINKED: null,
            ACCOUNT_SOME_LINKED: null,
            ACCOUNT_UNLINKED: null,
            ARROW_DROP_DOWN: null,
            ARROW_DROP_UP: null,
            AVATAR_CIRCLE_BLUE: null,
            AVATAR_LOGGED_OUT: null,
            ARROW_BACK: null,
            CHECK: null,
            CHECK_BLUE: null,
            CHECK_CIRCLE_THICK: null,
            CHEVRON_RIGHT: null,
            CLOSE: Lp,
            COMMENT: null,
            CONSENT_SHIELD: null,
            DELETE: null,
            DESKTOP: null,
            DISLIKE: Kp,
            DISLIKE_COMMENT: null,
            DISMISSAL: Lp,
            DISMISSAL_BLACK: null,
            EDIT: null,
            EXIT_TO_APP: null,
            EXPAND_LESS: null,
            EXPAND_MORE: null,
            EXTERNAL_LINK: Pp,
            FAB_UPLOAD: null,
            FEEDBACK: null,
            FLAG: null,
            FULLSCREEN: null,
            FULLSCREEN_EXIT: null,
            FULL_HEART: null,
            GEAR: null,
            GOOGLE_LOGO: null,
            HAPPY: null,
            HELP: null,
            INCOGNITO_CIRCLE: null,
            INFO: null,
            INFO_OUTLINE: null,
            KEEP: null,
            LIKE: Mp,
            LIKE_COMMENT: null,
            LOGO: Np,
            MEH: null,
            MICROPHONE_ON: null,
            MIX: null,
            MONETIZATION_ON: null,
            MORE_CHEVRON: null,
            MORE_HORIZ: null,
            MORE_VERT: Op,
            MORE_VERT_WHITE: null,
            OFFICIAL_ARTIST_BADGE: null,
            OFFLINE_CLOUD: null,
            OFFLINE_DOWNLOAD: null,
            OPEN_IN_NEW: Pp,
            PERSON_ADD: null,
            PIVOT_LIBRARY: null,
            PLAYER_NEXT: null,
            PLAYER_PAUSE: null,
            PLAYER_PLAY: null,
            PLAYER_PREVIOUS: null,
            PLAYLISTS: null,
            PLAYLIST_ADD: null,
            PLAYLIST_ADD_CHECK: null,
            PLAY_ALL: Qp,
            PLAY_ARROW: Qp,
            PRIVACY_INFO: Rp,
            PRIVACY_PRIVATE: Rp,
            PRIVACY_PUBLIC: null,
            PRIVACY_UNLISTED: null,
            PURCHASES: null,
            RINGO_LOGO: null,
            SAD: null,
            SEARCH: null,
            SETTINGS: null,
            SHARE: Sp,
            SHARE_ARROW: Sp,
            SHIELD: null,
            SHIELD_WITH_AVATAR: null,
            SKIP_NEXT: null,
            SKIP_PREVIOUS: null,
            SUBSCRIBE: null,
            SWITCH_ACCOUNTS: null,
            TAB_ACCOUNT: null,
            TAB_HOME: null,
            TAB_SUBSCRIPTIONS: null,
            TAB_TRENDING: null,
            TUNE: null,
            UPLOADS: null,
            VERY_HAPPY: null,
            VERY_SAD: null,
            WARNING: null,
            WATCH_HISTORY: null,
            WATCH_LATER: null,
            UNLIMITED: Np,
            YOUTUBE: Np
        },
        Up = {
            CHEVRON_RIGHT: !0,
            ARROW_BACK: !0
        };

    

    

    

    ;

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

    ;

    

    

    function bq(a) {
        return Gb(Zp(a ? a : Q().href), "/watch")
    };

    

    ;

    ;

    ;

    ;

    

    ;

    ;

    function kq() {
        this.i = [];
        this.g = null
    }

    function lq(a, b) {
        a.g = b;
        a.i.forEach(null);
        a.i = null
    }
    kq.prototype.push = function(a) {
        this.g ? this.g(a) : this.i.push(a)
    };
    var mq = {
            clickTrackingParams: Fa
        },
        nq = new kq;

    ;

    ;
    var qq = [],
        rq = new kq;

    

    

    

    

    

    ;

    

    

    ;

    ;

    ;

    

    

    

    

    

    

    

    ;

    

    

    

    

    ;

    function W(a) {
        return null
    };
    var Oq = W({
        navigationDropdownItemRenderer: Mq,
        privacyDropdownItemRenderer: Nq,
        dropdownItemRenderer: Nq
    });

    

    

    

    ;
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
    window.addEventListener("resize", null);
    var Xq = "IntersectionObserver" in window,
        Yq = !Vq() && !y("MWEB_BLAZERPLAYER", !1),
        $q = Xq ? new IntersectionObserver(null, {
            rootMargin: "10%",
            threshold: .01
        }) : Yq ? new pp(.1, null) : {
            observe: null
        };

    

    

    ;
    var cr = m.devicePixelRatio || 2;

    

    

    ;

    ;

    ;

    ;

    

    

    ;
    var kr = B("PLAY_ALL"),
        lr = W({
            buttonRenderer: Z,
            toggleButtonRenderer: ir,
            heroPlaylistThumbnailRenderer: null,
            dropdownRenderer: Qq
        });

    

    

    

    

    ;

    ;

    

    

    ;

    ;
    var wr = W({
        buttonRenderer: Z,
        channelHeaderLinksRenderer: null,
        subscribeButtonRenderer: ur
    });

    

    

    ;
    var Ar = W({
        subscribeButtonRenderer: ur
    });

    ;

    ;

    ;
    var Er = W({
        metadataBadgeRenderer: Cr,
        subscribeButtonRenderer: ur
    });

    

    ;

    

    ;
    var Jr = W({
        headerFabRenderer: null
    });

    

    ;

    ;
    var Nr = W({
        buttonRenderer: Z
    });
    var Or = W({
        channelListSubMenuAvatarRenderer: null
    });

    ;
    var Qr = W({
        metadataBadgeRenderer: Cr,
        standaloneYpcBadgeRenderer: null
    });

    ;

    

    ;

    

    ;

    ;

    function Xr(a, b) {
        var c = window;
        c.addEventListener(a, null, void 0)
    };
    var Yr = Ud("init"),
        Zr = !1;

    

    ;
    var bs = 0,
        cs = null,
        ds = 0;

    

    

    ;

    

    

    ;
    var ks, ls;

    

    

    

    

    

    

    
    window.addEventListener("state-change", ns);
    window.addEventListener("hashchange", ns);
    var ts = W({
        buttonRenderer: Z,
        menuServiceItemRenderer: null,
        toggleButtonRenderer: ir,
        toggleMenuServiceItemRenderer: null,
        menuNavigationItemRenderer: null
    });

    

    

    ;

    

    

    ;
    var As = W({
        menuRenderer: vs
    });

    

    

    ;

    ;

    ;

    

    

    ;
    var Js = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Ks = B("SHOW_MORE");

    

    ;
    var Ns = W({
        playlistVideoRenderer: null
    });

    ;

    

    ;

    ;
    var Ss = y("PAGE_BUILD_LABEL", void 0),
        Ts = y("SBOX_JS_URL", void 0),
        Us = y("SBOX_SETTINGS"),
        Vs = y("SHOW_OPEN_APP_BUTTON"),
        Ws = y("SHOW_SIGN_IN_BUTTON_FROM_HEADER");

    ;
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
        ct = np("ytm-searchbox", null);
    var dt = B("SEARCH_CHANNEL"),
        et = B("SEARCH_CLEAR_LABEL"),
        ft = np("ytm-channel-search-box-renderer", null);
    var gt = G.cd,
        ht = W({
            menuRenderer: vs
        });

    

    

    

    

    ;
    var nt = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    ;
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
        p("ytglobal.ytUtilActivityCallback_", null, void 0);
        window.addEventListener("popstate", null)
    }

    

    

    

    

    

    ;
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

    

    

    

    

    

    

    

    ;
    var Vt = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    ;

    ;
    var Yt = W({
        compactVideoRenderer: Wt
    });

    

    ;

    ;

    ;

    ;

    ;
    var eu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        buttonRenderer: Z
    });
    var fu = W({
        buttonRenderer: Z
    });

    

    ;

    ;
    var ju = W({
        visitSiteCtaRenderer: iu
    });

    ;

    

    ;

    

    ;
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

    ;

    

    ;
    var uu = W({
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    ;
    var wu = W({
        channelThumbnailWithLinkRenderer: null
    });

    ;
    var yu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        menuRenderer: vs
    });

    ;
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

    

    

    

    

    

    

    

    ;

    ;

    

    

    

    ;

    

    

    

    

    ;

    function Vu() {
        

        

        

        

        
        var f = Wu;
        window.addEventListener("ytm-load-more", null);
        window.addEventListener("ytm-reload-container", null)
    };
    var Xu = W({
        albumCardRenderer: null,
        buttonRenderer: Z,
        gameCardRenderer: tu,
        movieCardRenderer: null,
        premiumSeasonCardRenderer: null,
        previewCardRenderer: null,
        richListHeaderRenderer: xu,
        searchRefinementCardRenderer: null,
        sortFilterSubMenuRenderer: null,
        videoCardRenderer: zu
    });

    ;
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

    

    

    

    

    

    

    ;
    var kv = W({
        buttonRenderer: Z
    });

    ;
    var mv = W({
        menuRenderer: vs
    });

    

    

    

    

    ;

    ;

    ;
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

    ;

    ;

    ;
    var Av = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Bv = G.Ba,
        Cv = W({
            gridPlaylistRenderer: null,
            gridRadioRenderer: null,
            gridVideoRenderer: null
        });

    ;
    var Ev = {
        compactChannelRenderer: au,
        compactPlaylistRenderer: hu,
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactStationRenderer: null,
        compactVideoRenderer: Wt
    };
    var Fv = B("SHOW_MORE"),
        Gv = W(Ev);

    

    ;
    var Kv = W({
        gridRenderer: null,
        horizontalListRenderer: null,
        menuRenderer: vs,
        verticalListRenderer: Iv,
        shelfFeaturedTextBadgeRenderer: Jv
    });

    

    

    

    ;
    var Ov = W({
        buttonRenderer: Z,
        subscribeButtonRenderer: ur
    });

    ;
    var Qv = W({
        richMetadataRenderer: null
    });
    var Rv = W({
        metadataRowHeaderRenderer: null,
        metadataRowRenderer: null,
        richMetadataRowRenderer: null
    });
    var Sv, Tv = "out",
        Uv = [],
        Vv;

    

    

    

    

    

    ;

    

    

    

    

    

    ;

    

    

    ;
    var kw, lw;

    

    

    

    

    

    

    
    window.addEventListener("state-change", pw);
    window.addEventListener("hashchange", pw);

    

    

    

    ;
    var xw = W({
        metadataBadgeRenderer: Cr,
        standaloneCollectionBadgeRenderer: null
    });

    ;
    var zw = G.Oa,
        Aw = G.Ba,
        Dw = W({
            buttonRenderer: Z,
            metadataRowContainerRenderer: null,
            slimOwnerRenderer: Pv,
            slimMetadataButtonRenderer: Bw,
            slimMetadataToggleButtonRenderer: Cw,
            toggleButtonRenderer: ir
        });

    

    ;
    var Ew = W({
        buttonRenderer: Z
    });
    var Fw = W({
        buttonRenderer: Z
    });
    var Hw = W({
        sponsorshipsLoyaltyBadgeRenderer: Gw
    });

    

    

    ;
    var Kw = W({
            sponsorshipsLoyaltyBadgesRenderer: Iw
        }),
        Lw = np("ytm-sponsorships-list-tile-renderer", null);
    var Mw = W({
        sponsorshipsLoyaltyBadgesRenderer: Iw
    });
    var Nw = W({
        sponsorshipsPerkRenderer: null
    });
    var Qw = W({
        buttonRenderer: Z,
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsPerksRenderer: null,
        sponsorshipsTierRenderer: Pw
    });

    

    ;
    var Rw = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    

    

    

    ;

    

    ;
    var Yw = {},
        Zw = {};

    

    function ax(a, b) {
        delete Zw[a];
        Yw[a] = b
    }

    function bx(a, b) {
        var c = void 0 === b ? {} : b,
            d = void 0 === c.S ? !0 : c.S;
        Yw[a] || (Zw[a] = !0);
        return null
    };
    var cx = {
        backgroundPromoRenderer: null,
        channelAboutMetadataRenderer: null,
        channelFeaturedVideoRenderer: null,
        channelListItemRenderer: null,
        channelSearchBoxRenderer: ft,
        clarificationRenderer: null,
        clipAttributionRenderer: ot,
        compactAutoplayRenderer: null,
        compactChannelRenderer: au,
        compactOfferModuleRenderer: null,
        compactLinkRenderer: bu,
        compactMovieRenderer: null,
        compactMultiOfferRenderer: null,
        compactPlaylistRenderer: hu,
        compactPromotedVideoRenderer: null,
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactVideoRenderer: Wt,
        didYouMeanRenderer: null,
        factCheckRenderer: null,
        feedEntryRenderer: null,
        horizontalCardListRenderer: Yu,
        includingResultsForRenderer: null,
        itemSectionHeaderRenderer: null,
        limitedStateMessageRenderer: null,
        messageRenderer: null,
        noResultsFoundShowingResultsForRenderer: null,
        playlistNotificationRenderer: null,
        playlistVideoListRenderer: null,
        promotedSparklesTextSearchRenderer: null,
        promotedSparklesWebRenderer: null,
        promotedVideoRenderer: null,
        purchaseItemRenderer: null,
        resultsWithoutQuotesRenderer: null,
        searchHistoryQueryRenderer: null,
        slimOwnerRenderer: Pv,
        slimVideoMetadataRenderer: np("ytm-slim-video-metadata-renderer", null),
        shelfRenderer: Nv,
        showingResultsForRenderer: null,
        simpleTextSectionRenderer: null,
        sponsorshipsAlertRenderer: null,
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsHeaderRenderer: null,
        sponsorshipsHeadingRenderer: null,
        sponsorshipsLinksRenderer: null,
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
        videoWithContextRenderer: null,
        watchMetadataAppPromoRenderer: bx("watchMetadataAppPromoRenderer"),
        ypcOffersListRenderer: bx("ypcOffersListRenderer")
    };

    

    ;

    
    var gx = "IntersectionObserver" in window ? new IntersectionObserver(null, {
        rootMargin: "10%",
        threshold: .01
    }) : new pp(.1, null);

    ;
    var ix = W(cx);

    

    

    ;
    var mx = !1,
        ox = W({
            searchFilterGroupRenderer: nx
        });

    

    

    

    ;
    var sx = W({
        channelAgeGateRenderer: null,
        channelListSubMenuRenderer: null,
        channelSubMenuRenderer: null,
        commentSectionRenderer: bx("commentSectionRenderer"),
        itemSectionRenderer: lx,
        searchSubMenuRenderer: null,
        shelfRenderer: Nv,
        universalWatchCardRenderer: bx("universalWatchCardRenderer")
    });

    

    ;
    var vx = W({
        activeAccountHeaderRenderer: Lr,
        sectionListRenderer: ux,
        signInPromoWithBackgroundRenderer: null,
        lugashFooterRenderer: Mr
    });
    var wx = B("MORE_OPTIONS");

    

    

    

    ;
    var Bx = W({
        c4TabbedHeaderRenderer: zr,
        carouselHeaderRenderer: null,
        interactiveTabbedHeaderRenderer: null,
        playlistHeaderRenderer: null,
        singleColumnBrowseResultsRenderer: null,
        channelCreationForm: bx("channelCreationFormRenderer"),
        channelMetadataRenderer: null
    });

    

    

    

    ;
    var Jx = W({
        experimentsGroupRenderer: Gx,
        experimentsStudyRenderer: Hx,
        experimentsStudyItemRenderer: Ix,
        toggleButtonRenderer: ir
    });

    

    

    ;
    var Kx = W({
            experimentsListRenderer: null
        }),
        Lx = np("ytm-experiments", null);
    var Mx, Nx, Ox;

    

    

    

    ;
    var Tx = W({
        buttonRenderer: Z
    });

    

    ;

    ;
    var Xx = W({
            buttonRenderer: Z
        }),
        Yx;

    ;
    var $x = W({
        unlimitedFamilyMessageInterstitialRenderer: Vx,
        unlimitedMembershipCollisionRenderer: null
    });

    ;
    var by = W({
        sectionListRenderer: ux
    });

    ;

    ;
    var ey = W({
        buttonRenderer: Z
    });

    

    ;
    var hy = W({
        confirmDialogRenderer: fy
    });

    ;
    var jy = {};

    ;
    var ly = W({
        confirmDialogRenderer: fy
    });

    

    

    ;

    ;

    
    var ry = np("ytm-setting-notification-list-renderer", null);

    ;
    var uy = W({
        settingMenuItemRenderer: ty
    });

    

    

    

    

    

    ;
    var Ay = W({
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingNotificationListRenderer: ry
    });

    
    var Cy = np("ytm-setting-generic-category", null);

    ;
    var Ey = W({
        gamingThirdPartySettingRenderer: null,
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingCategorySectionRenderer: null,
        settingNotificationListRenderer: ry
    });
    var Fy = W({
        settingCategoryCollectionRenderer: null,
        settingCategoryEntryRenderer: null,
        subscriptionProductsSettingCategoryEntryRenderer: null
    });

    ;
    var Hy = W({
        sponsorshipsAccountBarRenderer: null,
        sectionListRenderer: ux
    });
    var Iy = W({
        c4TabbedHeaderRenderer: zr,
        sponsorshipsOfferListRenderer: null
    });

    ;

    function Ky(a) {
        return {
            commandMetadata: {
                webCommandMetadata: {
                    url: a
                }
            }
        }
    }

    ;
    var My = G.fd,
        Ny = G.gd,
        Oy = G.hd;

    ;
    var Qy = G.Oc,
        Ry = G.kd,
        Sy = G.Fd,
        Ty = G.Ld;

    ;
    var Vy = G.ja,
        Wy = W({
            buttonRenderer: Z
        });

    ;
    var Yy = W({
        buttonRenderer: Z
    });
    var Zy = W({
        clipAttributionRenderer: ot,
        clipSectionFooterRenderer: null,
        itemSectionRenderer: lx
    });
    var $y = W({
        buttonRenderer: Z,
        clipSectionRenderer: null,
        sectionListRenderer: ux
    });
    var az = W({
        engagementPanelSectionListRenderer: null
    });

    ;
    var cz = W({
        buttonRenderer: Z
    });

    ;

    ;

    ;
    var gz = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    

    

    ;

    ;
    var lz = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    ;
    var oz = W({
        playlistPanelVideoRenderer: nz
    });

    

    
    var qz = np("ytm-playlist", null);
    if (A("mweb_enable_custom_control")) {
        var rz = ul();
        rz && window.addEventListener(rz, sz);
        Gc || Vq() || !A("mweb_enable_custom_control_landscape_to_fullscreen") || window.addEventListener("orientationchange", tz)
    }

    

    

    

    ;
    var wz = G.Kc,
        xz = G.Nc;

    ;
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

    

    

    

    

    

    

    

    ;

    

    

    

    

    ;
    var Xz = null;
    A("mweb_enable_custom_control") && window.addEventListener("video-progress", Yz);
    var $z = new Fe(Zz, 100),
        aA = 0,
        bA = !1,
        cA, dA = 0,
        eA = 0,
        fA = 0,
        gA;

    

    
    var hA = np("ytm-progress-bar", null);

    ;
    var jA = G.qd,
        kA = G.Ad,
        lA = G.Bd,
        mA = null,
        nA = !1,
        oA = 0;
    A("mweb_enable_custom_control") && (window.addEventListener("video-progress", pA), window.addEventListener("srubber-touch-start", qA), window.addEventListener("srubber-touch-end", rA), window.addEventListener("srubber-touch-move", sA));

    

    

    

    
    var uA = np("ytm-time-display", null);

    ;
    var vA = window.history,
        wA = 0,
        xA = 0,
        yA = 0;

    

    

    ;
    var CA = !1;

    ;
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

    

    

    

    

    

    

    

    

    

    

    

    

    
    var eB = np("ytm-custom-control", null);

    

    

    ;

    ;
    var gB = null,
        hB = null;
    A("mweb_enable_custom_control") && window.addEventListener("player-state-change", iB);
    p("yt.mobile.isMobilePersistentUniplayer", null, void 0);
    p("yt.mobile.supportsMwebAutonav", null, void 0);

    

    

    

    

    

    function oB() {
        window.addEventListener(Fc ? "touchstart" : "click", null, {
            capture: !0,
            passive: !0
        });
        window.addEventListener("beforeunload", lB);
        window.addEventListener("state-navigatestart", lB);
        A("mweb_handle_botguard_to_player") && !y("MWEB_BLAZERPLAYER", !1) || window.addEventListener("state-navigatestart", Ro);
        var a = E(function() {
            return rt
        });
        a && a.addEventListener("click", null)
    }

    ;
    var pB = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    

    ;
    var sB = W({
            actionCompanionAdRenderer: null
        }),
        tB = !1;

    

    ;
    var wB = W({
        itemSectionRenderer: lx,
        companionSlotRenderer: null,
        commentSectionRenderer: bx("commentSectionRenderer")
    });
    var xB = W({
        singleColumnWatchNextResults: null,
        alertWithButtonRenderer: null
    });

    

    

    ;
    var BB, CB = null;

    

    

    

    

    

    ;
    var JB = W({
            buttonRenderer: Z
        }),
        KB;

    

    

    

    

    ;
    var QB = G.ld;

    

    ;
    var VB = W({
        accountItem: TB,
        accountItemSectionHeaderRenderer: UB
    });

    

    

    ;
    var XB = W({
        accountItemSectionRenderer: null
    });
    var YB = W({
        lugashFooterRenderer: Mr
    });

    

    

    

    

    ;
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

    

    

    

    

    

    ;
    var vC = G.ja,
        yC = W({
            accountSectionListRenderer: null,
            activeAccountHeaderRenderer: Lr,
            compactLinkRenderer: bu,
            multiPageMenuSectionRenderer: wC,
            privacyTosFooterRenderer: null,
            simpleMenuHeaderRenderer: xC
        });

    

    

    

    ;
    var BC = B("CREATE_CHANNEL_TITLE");

    ;
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

    

    

    

    

    

    

    

    

    

    

    

    

    

    ;
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

    

    

    

    

    ;
    var hD = W({
        buttonRenderer: Z
    });
    var iD;

    

    ;

    

    ;
    var nD = G.Jc,
        oD = G.Pc,
        pD = G.jd,
        qD = {},
        rD = (qD.MEMBERSHIPS_AND_PURCHASES = "memberships-and-purchases", qD),
        sD = W({
            alertRenderer: null,
            consentBumpRenderer: null,
            mealbarPromoRenderer: bx("mealbarPromoRenderer", {
                S: !1
            }),
            surveyTriggerRenderer: bx("surveyTriggerRenderer", {
                S: !1
            }),
            unlimitedUserNotificationRenderer: null,
            upsellDialogRenderer: null
        });

    

    

    

    

    

    ;
    var zD = {},
        AD = (zD.browse = "browse", zD.search = "results", zD.watch = "watch", zD.home = "home", zD.channel = "channels", zD);

    function BD(a, b) {
        this.i = a;
        this.j = b
    }
    BD.prototype.g = function() {
        jn(this.i, this.j)
    };

    
    CD.prototype.g = null;

    
    DD.prototype.g = null;

    
    ED.prototype.g = null;
    var FD = new kq;

    ;

    ;

    

    ;

    ;

    

    ;
    var MD = 0;

    function ND(a, b) {
        b = void 0 === b ? lk() : b;
        Do(function() {
            var c = b;
            c = void 0 === c ? lk() : c;
            FD.push(new BD(a, c))
        })
    }

    

    

    

    

    

    

    

    

    

    

    

    ;
    var $D = ["redirect_state", "service", "channel_switcher"];

    

    

    ;

    

    ;

    ;

    ;

    ;

    ;

    ;

    ;

    ;

    ;
    var nE = !1,
        oE = 0,
        pE = Ec && Dc;

    

    

    

    ;
    var uE = 1;

    ;
    var wE;

    

    

    

    

    

    

    function DE() {
        y("MWEB_BLAZERPLAYER", !1) ? window.addEventListener("playback-end", null) : window.addEventListener("player-state-change", BE)
    };

    ;

    

    ;

    

    

    ;

    ;
    var LE = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    ;
    var NE = W({
        notificationActionRenderer: ME
    });

    function OE() {
        window.addEventListener("yt-show-toast", null)
    };
    var PE, QE;

    

    

    

    

    ;

    function WE(a) {
        var b = 0;
        return null
    };

    function XE(a) {
        

        

        

        

        

        
        var h, l = WE(a.makeRequest);
        window.addEventListener("popstate", null);
        window.addEventListener("hashchange", null);
        return {
            navigate: c,
            zc: e,
            g: g,
            fe: d
        }
    };

    function YE() {
        

        
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
        window.addEventListener("click", null);
        window.addEventListener("navigate", null);
        window.addEventListener("updateui", null);
        return {
            qe: null,
            zc: d.zc
        }
    };

    ;
    var cF = !Bc,
        eF = !1;

    

    

    

    

    

    ;

    

    

    

    

    

    

    

    

    

    

    

    ;

    

    

    ;

    

    

    ;

    ;
    var AF = W({
        textInputFormFieldRenderer: null
    });

    
    var CF = np("ytm-input-with-counter", null);
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

    
    var MF = np("ytm-create-playlist-content-component", null),
        NF = np("ytm-create-playlist-buttons-component", null);

    ;
    var PF = W({
        addToPlaylistCreateRenderer: null,
        playlistAddToOptionRenderer: null
    });

    ;

    ;
    var SF = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    

    ;
    var VF = W({
        addToPlaylistRenderer: null,
        confirmDialogRenderer: fy,
        fancyDismissibleDialogRenderer: QF,
        legalReportDetailsFormRenderer: null,
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

    ;

    ;
    var YF = ["compactVideoRenderer", "searchHistoryQueryRenderer", "shelfRenderer", "videoWithContextRenderer"],
        ZF = W({
            notificationTextRenderer: null
        });

    ;

    ;
    var bG = W({
        confirmDialogRenderer: fy
    });

    

    ;

    

    ;

    

    

    

    ;

    

    ;

    ;
    var nG = W({
        confirmDialogRenderer: fy
    });

    ;

    ;

    

    ;

    ;
    var tG = W({
        fancyDismissibleDialogRenderer: QF
    });
    var uG = B("NOTIFICATION_ERROR_MESSAGE");

    ;

    ;

    ;
    var yG = W({
        buttonRenderer: Z
    });
    var zG = W({
        commentReplyDialogRenderer: null
    });

    ;
    var BG = {
        addToPlaylistRenderer: !0
    };

    

    ;

    

    

    ;

    

    ;

    

    

    

    ;
    var NG = W({
        buttonRenderer: Z
    });

    

    

    

    ;
    var SG = W({
        gamingAccountLinkConfirmDialogRenderer: RG
    });
    var TG = W({
        confirmDialogRenderer: fy
    });
    var UG = W({
        buttonRenderer: Z
    });

    

    

    

    ;
    var ZG = W({
        gamingAccountLinkSettingRenderer: YG
    });

    

    

    

    ;
    var dH = W({
        gamingMultipleAccountLinkDialogRenderer: cH
    });

    

    

    

    

    ;
    var jH = W({
        buttonRenderer: Z
    });
    var kH = B("CANCEL"),
        lH = W({
            buttonRenderer: Z
        });

    ;
    var nH = W({
        modalWithTitleAndButtonRenderer: mH
    });

    ;
    var pH = G.ja;

    

    ;
    var sH = B("NOTIFICATION_ERROR_MESSAGE");
    var tH = G.ja,
        uH = G.Gd,
        vH = G.Dd,
        wH = to(v("editor-header")),
        xH = to(v("dropdown")),
        yH = np("ytm-playlist-settings-editor-renderer", null);
    var zH = W({
        playlistSettingsEditorRenderer: null
    });
    var AH = B("NOTIFICATION_ERROR_MESSAGE");

    ;

    ;

    

    ;
    var FH = B("CANCEL"),
        GH = W({
            shareTargetRenderer: null
        });

    

    ;
    var JH = W({
        sharingRenderer: null
    });

    

    ;

    ;
    var NH = {
            ytr: 3,
            ytm: 5
        },
        OH, PH, QH = 0;

    ;
    var SH = W({
        confirmDialogRenderer: fy,
        unlimitedFamilyMessageInterstitialRenderer: bx("unlimitedFamilyMessageInterstitialRenderer"),
        unlimitedFamilyProfileInterstitialRenderer: bx("unlimitedFamilyProfileInterstitialRenderer")
    });

    

    ;

    

    

    

    ;
    var ZH = W({
        buttonRenderer: Z
    });
    var $H = W({
        offerGroupRenderer: null
    });
    var aI = W({
        tvfilmSellableItemRenderer: null,
        tvfilmOffersRenderer: null
    });
    var bI = W({
        tvfilmRichOffersRenderer: null
    });
    var cI = W({
        buttonRenderer: Z
    });

    

    ;
    var fI = W({
        unpluggedPauseMembershipDialogRenderer: null
    });

    ;

    

    

    

    ;
    var lI = W({
        buttonRenderer: Z
    });

    ;
    var nI = new Map([
        ["DIVIDER_STYLE_INSET_THIN", "card-item-divider-inset-thin"],
        ["DIVIDER_STYLE_FULL_BLEED_THIN", "card-item-divider-fullbleed-thin"]
    ]);

    ;
    var pI = {},
        qI = (pI.CARD_ITEM_TEXT_STYLE_UNKNOWN = "", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_1 = "typography-display-1", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_2 = "typography-display-2", pI.CARD_ITEM_TEXT_STYLE_TITLE_1 = "typography-title-1", pI.CARD_ITEM_TEXT_STYLE_TITLE_2 = "typography-title-2", pI.CARD_ITEM_TEXT_STYLE_BUTTON = "typography-button", pI.CARD_ITEM_TEXT_STYLE_BODY_1A = "typography-body-1a", pI.CARD_ITEM_TEXT_STYLE_BODY_1B = "typography-body-1b", pI.CARD_ITEM_TEXT_STYLE_BODY_2A = "typography-body-2a", pI.CARD_ITEM_TEXT_STYLE_BODY_2B =
            "typography-body-2b", pI.CARD_ITEM_TEXT_STYLE_LABEL = "typography-label", pI),
        rI = {},
        sI = (rI.CARD_ITEM_UX_SPACE_1 = "xs", rI.CARD_ITEM_UX_SPACE_2 = "s", rI.CARD_ITEM_UX_SPACE_3 = "m", rI.CARD_ITEM_UX_SPACE_4 = "l", rI.CARD_ITEM_UX_SPACE_5 = "xl", rI.CARD_ITEM_UX_SPACE_6 = "xl", rI);

    

    
    var vI = {},
        wI = (vI.CARD_ITEM_COLOR_UNKNOWN = "color-unknown", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "color-general-background-a", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B = "color-general-background-b", vI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "color-error-background", vI.CARD_ITEM_COLOR_TEXT_PRIMARY = "color-text-primary", vI.CARD_ITEM_COLOR_TEXT_SECONDARY = "color-text-secondary", vI.CARD_ITEM_COLOR_CALL_TO_ACTION = "color-call-to-action", vI.CARD_ITEM_COLOR_ICON_INACTIVE = "color-icon-inactive", vI.CARD_ITEM_COLOR_ICON_DISABLED =
            "color-icon-disable", vI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "color-brand-icon-active", vI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "color-brand-icon-inactive", vI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "color-ten-percent-layer", vI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "color-text-primary-inverse", vI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "color-icon-active-other", vI),
        xI = {},
        yI = (xI.CARD_ITEM_COLOR_UNKNOWN = "background-color-unknown", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "background-color-general-background-a", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B =
            "background-color-general-background-b", xI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "background-color-error-background", xI.CARD_ITEM_COLOR_TEXT_PRIMARY = "background-color-text-primary", xI.CARD_ITEM_COLOR_TEXT_SECONDARY = "background-color-text-secondary", xI.CARD_ITEM_COLOR_CALL_TO_ACTION = "background-color-call-to-action", xI.CARD_ITEM_COLOR_ICON_INACTIVE = "background-color-icon-inactive", xI.CARD_ITEM_COLOR_ICON_DISABLED = "background-color-icon-disable", xI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "background-color-brand-icon-active",
            xI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "background-color-brand-icon-inactive", xI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "background-color-ten-percent-layer", xI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "background-color-text-primary-inverse", xI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "background-color-icon-active-other", xI);

    

    ;
    var BI = W({
        cardItemTextRenderer: AI
    });

    ;

    ;
    var EI = W({
            cardItemTextCollectionRenderer: CI,
            themedImageRenderer: DI
        }),
        FI = {},
        GI = (FI.CARD_ITEM_IMAGE_PLACEMENT_UNKNOWN = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_TOP = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_START = "card-item-text-with-image-image-placement-start", FI);

    

    ;
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
            cardItemErrorRenderer: null,
            cardItemTextCollectionRenderer: CI,
            cardItemTextWithButtonRenderer: null,
            cardItemTextWithImageRenderer: II,
            themedImageRenderer: DI
        }),
        MI = {},
        NI = (MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_UNKNOWN = "card-item-primary-container-placement-start", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_TOP = "card-item-primary-container-placement-top", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_START = "card-item-primary-container-placement-start", MI),
        OI = {},
        PI = (OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_UNKNOWN = "card-item-additional-info-placement-center", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_TOP = "card-item-additional-info-placement-top",
            OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_BOTTOM = "card-item-additional-info-placement-bottom", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_CENTER = "card-item-additional-info-placement-center", OI);

    

    

    ;
    var TI = W({
        buttonRenderer: Z,
        createCoreIdentityChannelContentRenderer: null
    });
    var UI = W({
        buttonRenderer: Z
    });
    var VI = G.Hc,
        WI = G.Ca;

    ;
    var YI = W({
        creatorHeartRenderer: null,
        pinnedCommentBadgeRenderer: null
    });

    

    ;
    var aJ = W({
        commentRenderer: null
    });

    

    ;
    var eJ = W({
            commentSimpleboxRenderer: np("ytm-comment-simplebox-renderer", null),
            commentThreadRenderer: null,
            commentSectionHeaderRenderer: dJ
        }),
        fJ = 0 <= cc.search("Factory Media Production");

    

    
    var hJ = np("ytm-comment-section-renderer", null);
    var iJ = W({
        buttonRenderer: Z
    });

    

    

    ;
    var mJ = W({
        buttonRenderer: Z
    });
    var nJ = G.Oa,
        oJ = G.Ba,
        pJ = np("ytm-donation-shelf-renderer-outer", null);
    var qJ = W({
        buttonRenderer: Z
    });

    

    ;
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

    ;
    var wJ = W({
        buttonRenderer: Z
    });
    var xJ = W({
        postRedemptionSectionRenderer: null
    });

    ;
    var zJ = np("ytm-redeem-code-renderer", null);
    var AJ = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    

    ;

    ;

    ;
    var GJ = W({
        optionSelectableItemRenderer: FJ
    });

    

    

    

    

    

    ;
    var MJ = W({
        optionSelectableItemRenderer: null
    });

    ;

    ;
    var PJ = W({
        optionsRenderer: null,
        buttonRenderer: Z,
        booleanFormFieldV2Renderer: null
    });
    var QJ = W({
        buttonRenderer: Z
    });
    var SJ = W({
        buttonRenderer: Z,
        sponsorshipsHeaderRenderer: RJ,
        sponsorshipsListTileRenderer: Lw
    });

    ;
    var TJ = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });
    var UJ = W({
        buttonRenderer: Z
    });
    var VJ, WJ = !1,
        XJ = B("CLOSE");

    

    

    ;
    var aK = W({
        buttonRenderer: Z
    });
    var bK = W({
        buttonRenderer: Z,
        checkboxSurveyOptionRenderer: null
    });

    

    

    

    

    ;
    var hK = W({
        singleOptionSurveyOptionRenderer: null
    });
    var iK = W({
        singleOptionSurveyRenderer: null,
        checkboxSurveyRenderer: null
    });

    

    ;
    var lK = W({
        oneVsOneEvent: kK,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    ;
    var nK = W({
        callToActionButtonRenderer: null,
        collageHeroImageRenderer: null,
        singleHeroImageRenderer: null,
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

    

    ;
    var sK = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var tK = W({
        watchCardCompactVideoRenderer: null,
        watchCardOneVsOneEventCompactVideoRenderer: null
    });
    var uK = W({
        horizontalCardListRenderer: Yu,
        verticalWatchCardListRenderer: null
    });
    var vK = G.Oa,
        wK = G.Ba,
        xK = W({
            watchCardHeroOneVsOneEventRenderer: null,
            watchCardHeroVideoRenderer: null,
            watchCardRichHeaderRenderer: null,
            watchCardSectionSequenceRenderer: null
        }),
        yK = np("ytm-universal-watch-card-renderer", null);
    var zK = W({
        buttonRenderer: Z
    });

    

    

    ;

    

    ;
    var FK = W({
        buttonRenderer: Z
    });

    

    

    

    ;
    var KK = W({
        buttonRenderer: Z
    });

    

    

    ;
    var OK = W({
        singleYpcOfferRenderer: NK
    });

    

    ;
    var RK = W({
        collapsibleYpcOfferRenderer: null,
        singleYpcOfferRenderer: NK
    });
    var SK = G.Oa,
        TK = G.Ba,
        UK = W({
            singleYpcOfferListRenderer: null
        }),
        VK = np("ytm-ypc-offers-list-renderer", null);

    

    ;
    var YK = {
        getAccountsListEndpoint: {
            hack: !0
        }
    };
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !m.requestAnimationFrame; ++c) m.requestAnimationFrame = m[b + "RequestAnimationFrame"], m.cancelAnimationFrame = m[b + "CancelAnimationFrame"] || m[b + "CancelRequestAnimationFrame"];
        if (!m.requestAnimationFrame) {
            var d = 0;
            m.requestAnimationFrame = null;
            m.cancelAnimationFrame || (m.cancelAnimationFrame = null)
        }
    })();
    (function() {
        
        "function" !== typeof window.CustomEvent && (a.prototype = window.Event.prototype, window.CustomEvent = a)
    })();
    "hidden" in HTMLElement.prototype || Object.defineProperty(HTMLElement.prototype, "hidden", {
        get: null,
        set: null
    });
    ND("ai");
    (function() {
        
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
        window.makeColdLoadRequest = null;
        window.loadGuideResponse = null
    })();
    ND("apr");
    Xr("state-navigateend", null);
    xn(!0);
    lq(FD, function(a) {
        a.g()
    });
    window.addEventListener("beforeunload", null);
    Object.assign(mq, {
        accountLinkCommand: gG,
        accountUnlinkCommand: kG,
        banAuthorAction: rF,
        commandExecutorCommand: mG,
        confirmDialogEndpoint: oG,
        createCommentAction: null,
        createCommentReplyAction: null,
        experimentsOptInAction: tF,
        experimentsOptOutAction: tF,
        getMultiPageMenuAction: null,
        hideReportedCommentAction: null,
        heartCommentCommand: sF,
        logYpcFlowDismissCommand: bo,
        logYpcFlowStartCommand: ao,
        navigateAction: zF,
        openPopupAction: WF,
        pinCommentAction: null,
        playlistRemoveVideosAction: null,
        playlistDeletionRedirectCommand: null,
        removeCommentAction: rF,
        refreshAccountLinkButtonCommand: null,
        replaceEnclosingAction: null,
        replaceFeedContentAction: null,
        signalAction: null,
        unheartCommentCommand: sF,
        unpinCommentAction: null,
        updateButtonAction: null,
        updateCommentVoteAction: null,
        updatePlaylistHeaderAction: null,
        updateSubscribeButtonAction: null
    });
    lq(nq, null);
    qq.push.apply(qq, ea([{
            commandType: "accountLinkCommand",
            l: gG
        }, {
            commandType: "accountUnlinkCommand",
            l: kG
        }, {
            commandType: "adChoicesDialogEndpoint",
            l: null
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
            l: null
        },
        {
            commandType: "channelCreationFormEndpoint",
            l: pG
        }, {
            commandType: "channelCreationServiceEndpoint",
            l: null
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
            l: null
        },
        {
            commandType: "createCommentReplyDialogEndpoint",
            l: null
        },
        {
            commandType: "createCommentReplyEndpoint",
            l: null
        },
        {
            commandType: "createPlaylistServiceEndpoint",
            l: null
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
            l: null
        },
        {
            commandType: "gamingAccountLinkConfirmDialogCommand",
            l: null
        },
        {
            commandType: "gamingAccountLinkRedirectDialogCommand",
            l: null
        },
        {
            commandType: "gamingAccountLinkSettingCommand",
            l: null
        },
        {
            commandType: "gamingMultipleAccountLinkDialogCommand",
            l: null
        },
        {
            commandType: "getAccountsListEndpoint",
            l: GG
        }, {
            commandType: "getReportFormEndpoint",
            l: BH
        }, {
            commandType: "likeEndpoint",
            l: null
        },
        {
            commandType: "logYpcFlowDismissCommand",
            l: bo
        }, {
            commandType: "logYpcFlowStartCommand",
            l: ao
        }, {
            commandType: "loopCommand",
            l: null
        },
        {
            commandType: "managePurchaseEndpoint",
            l: null
        },
        {
            commandType: "menuEndpoint",
            l: null
        },
        {
            commandType: "modalEndpoint",
            l: null
        },
        {
            commandType: "modifyReportFormCommand",
            l: null
        },
        {
            commandType: "navigateAction",
            l: null
        },
        {
            commandType: "navigationEndpoint",
            l: pG
        }, {
            commandType: "nativeAppDeeplinkEndpoint",
            l: null
        },
        {
            commandType: "offlineVideosEndpoint",
            l: null
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
            l: null
        },
        {
            commandType: "playlistEditorEndpoint",
            l: null
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
            l: null
        },
        {
            commandType: "setSettingEndpoint",
            l: null
        },
        {
            commandType: "shareEndpoint",
            l: null
        },
        {
            commandType: "signInEndpoint",
            l: null
        },
        {
            commandType: "signalServiceEndpoint",
            l: null
        },
        {
            commandType: "subscribeEndpoint",
            l: LH
        }, {
            commandType: "unlimitedCreateFamilyEndpoint",
            l: null
        },
        {
            commandType: "unlimitedFamilyFlowEndpoint",
            l: null
        },
        {
            commandType: "unsubscribeEndpoint",
            l: LH
        }, {
            commandType: "uploadEndpoint",
            l: pG
        }, {
            commandType: "urlEndpoint",
            l: null
        },
        {
            commandType: "userFeedbackEndpoint",
            l: null
        },
        {
            commandType: "verifyAgeEndpoint",
            l: GG
        }, {
            commandType: "watchEndpoint",
            l: pG
        }, {
            commandType: "ypcCancelRecurrenceEndpoint",
            l: null
        },
        {
            commandType: "ypcCompleteTransactionEndpoint",
            l: null
        },
        {
            commandType: "ypcFixInstrumentEndpoint",
            l: null
        },
        {
            commandType: "ypcGetCartEndpoint",
            l: null
        },
        {
            commandType: "ypcGetOffersEndpoint",
            l: null
        },
        {
            commandType: "ypcPauseMembershipDialogCommand",
            l: null
        },
        {
            commandType: "ypcPauseSubscriptionCommand",
            l: null
        },
        {
            commandType: "ypcRedeemCodeEndpoint",
            l: kI
        }, {
            commandType: "ypcResumeSubscriptionCommand",
            l: null
        }
    ]));
    lq(rq, null);
    ax("channelCreationFormRenderer", null);
    ax("commentSectionRenderer", hJ);
    ax("cardItemRenderer", null);
    ax("donationAmountPickerRenderer", null);
    ax("donationPostTransactionRenderer", null);
    ax("donationShelfRenderer", pJ);
    ax("gamingAccountLinkConfirmDialogRenderer", RG);
    ax("gamingAccountLinkSettingRenderer", YG);
    ax("gamingMultipleAccountLinkDialogRenderer", cH);
    ax("mealbarPromoRenderer", null);
    ax("membershipPostCancelRenderer", null);
    ax("modalWithTitleAndButtonRenderer", mH);
    ax("musicPassFeatureInfoRenderer", null);
    ax("musicPassSmallFeatureInfoRenderer", null);
    ax("offerItemRenderer", null);
    ax("offerItemUpsellRenderer", null);
    ax("redeemCodeRenderer", zJ);
    ax("reportDetailsFormRenderer", null);
    ax("reportFormModalRenderer", null);
    ax("sponsorshipsCelebrationRenderer", null);
    ax("surveyFollowUpRenderer", null);
    ax("surveyTriggerRenderer", null);
    ax("subscriptionProductRenderer", null);
    ax("subscriptionProductUpsellOfferRenderer", null);
    ax("universalWatchCardRenderer", yK);
    ax("unlimitedFamilyProfileInterstitialRenderer", null);
    ax("unlimitedFamilyMessageInterstitialRenderer", Vx);
    ax("unlimitedPageHeaderRenderer", null);
    ax("watchMetadataAppPromoRenderer", null);
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
        } else navigator.serviceWorker.getRegistrations().then(null);
}).call(this);