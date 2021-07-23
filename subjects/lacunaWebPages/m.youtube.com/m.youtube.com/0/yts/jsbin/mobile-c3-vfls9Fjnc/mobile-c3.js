(function() {
    var k;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

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
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
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
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
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
    var na = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        oa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function pa() {
        pa = function() {};
        oa.Symbol || (oa.Symbol = qa)
    }

    function ra(a, b) {
        this.g = a;
        na(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    ra.prototype.toString = function() {
        return this.g
    };
    var qa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();

    function sa() {
        pa();
        var a = oa.Symbol.iterator;
        a || (a = oa.Symbol.iterator = oa.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && na(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ta(aa(this))
            }
        });
        sa = function() {}
    }

    function ta(a) {
        sa();
        a = {
            next: a
        };
        a[oa.Symbol.iterator] = function() {
            return this
        };
        return a
    }

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
        function b(g) {
            this.i = 0;
            this.j = void 0;
            this.g = [];
            var h = this.D();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.j(function() {
                    h.C()
                })
            }
            this.g.push(g)
        };
        var e = oa.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.C = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (n) {
                        this.D(n)
                    }
                }
            }
            this.g = null
        };
        c.prototype.D = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.D = function() {
            function g(n) {
                return function(q) {
                    l || (l = !0, n.call(h, q))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.ea),
                reject: g(this.C)
            }
        };
        b.prototype.ea = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.ma(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.aa(g) : this.G(g)
            }
        };
        b.prototype.aa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.C(l);
                return
            }
            "function" == typeof h ? this.na(h, g) : this.G(g)
        };
        b.prototype.C = function(g) {
            this.N(2, g)
        };
        b.prototype.G = function(g) {
            this.N(1, g)
        };
        b.prototype.N = function(g, h) {
            if (0 != this.i) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.i);
            this.i = g;
            this.j = h;
            this.T()
        };
        b.prototype.T = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.i(this.g[g]);
                this.g = null
            }
        };
        var f = new c;
        b.prototype.ma = function(g) {
            var h = this.D();
            g.Pa(h.resolve, h.reject)
        };
        b.prototype.na = function(g, h) {
            var l = this.D();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (n) {
                l.reject(n)
            }
        };
        b.prototype.then = function(g, h) {
            function l(x, z) {
                return "function" == typeof x ? function(O) {
                    try {
                        n(x(O))
                    } catch (X) {
                        q(X)
                    }
                } : z
            }
            var n, q, t = new b(function(x, z) {
                n = x;
                q = z
            });
            this.Pa(l(g, n), l(h, q));
            return t
        };
        b.prototype["catch"] = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Pa = function(g, h) {
            function l() {
                switch (n.i) {
                    case 1:
                        g(n.j);
                        break;
                    case 2:
                        h(n.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.i);
                }
            }
            var n = this;
            null == this.g ? f.i(l) : this.g.push(l)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, l) {
                l(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, l) {
                for (var n = ba(g), q = n.next(); !q.done; q = n.next()) d(q.value).Pa(h, l)
            })
        };
        b.all = function(g) {
            var h = ba(g),
                l = h.next();
            return l.done ? d([]) : new b(function(n, q) {
                function t(O) {
                    return function(X) {
                        x[O] = X;
                        z--;
                        0 == z && n(x)
                    }
                }
                var x = [],
                    z = 0;
                do x.push(void 0), z++, d(l.value).Pa(t(x.length - 1), q), l = h.next(); while (!l.done)
            })
        };
        return b
    });

    function va(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ua("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            for (var e = Math.max(0, Math.min(c | 0, d.length)), f = b.length; 0 < f && 0 < e;)
                if (d[--e] != b[--f]) return !1;
            return 0 >= f
        }
    });
    ua("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        d = g;
                        break a
                    }
                }
                d = void 0
            }
            return d
        }
    });
    ua("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "startsWith");
            b += "";
            for (var e = d.length, f = b.length, g = Math.max(0, Math.min(c | 0, d.length)), h = 0; h < f && g < e;)
                if (d[g++] != b[h++]) return !1;
            return h >= f
        }
    });

    function wa(a, b) {
        sa();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    }
    ua("Array.prototype.values", function(a) {
        return a ? a : function() {
            return wa(this, function(b, c) {
                return c
            })
        }
    });

    function ya(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ua("WeakMap", function(a) {
        function b(l) {
            this.g = (h += Math.random() + 1).toString();
            if (l) {
                l = ba(l);
                for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
            }
        }

        function c() {}

        function d(l) {
            var n = typeof l;
            return "object" === n && null !== l || "function" === n
        }

        function e(l) {
            if (!ya(l, g)) {
                var n = new c;
                na(l, g, {
                    value: n
                })
            }
        }

        function f(l) {
            var n = Object[l];
            n && (Object[l] = function(q) {
                if (q instanceof c) return q;
                e(q);
                return n(q)
            })
        }
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
        b.prototype.set = function(l, n) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!ya(l, g)) throw Error("WeakMap key fail: " + l);
            l[g][this.g] = n;
            return this
        };
        b.prototype.get = function(l) {
            return d(l) && ya(l, g) ? l[g][this.g] : void 0
        };
        b.prototype.has = function(l) {
            return d(l) && ya(l, g) && ya(l[g], this.g)
        };
        b.prototype["delete"] = function(l) {
            return d(l) && ya(l, g) && ya(l[g], this.g) ? delete l[g][this.g] : !1
        };
        return b
    });
    ua("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, l) {
            var n = h.g;
            return ta(function() {
                if (n) {
                    for (; n.head != h.g;) n = n.previous;
                    for (; n.next != n.head;) return n = n.next, {
                        done: !1,
                        value: l(n)
                    };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, l) {
            var n = l && typeof l;
            "object" == n || "function" == n ? f.has(l) ? n = f.get(l) : (n = "" + ++g, f.set(l, n)) : n = "p_" + l;
            var q = h.i[n];
            if (q && ya(h.i, n))
                for (var t = 0; t < q.length; t++) {
                    var x = q[t];
                    if (l !== l && x.key !== x.key || l === x.key) return {
                        id: n,
                        list: q,
                        index: t,
                        O: x
                    }
                }
            return {
                id: n,
                list: q,
                index: -1,
                O: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = ba(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
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
        e.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this.i[n.id] = []);
            n.O ? n.O.value = l : (n.O = {
                next: this.g,
                previous: this.g.previous,
                head: this.g,
                key: h,
                value: l
            }, n.list.push(n.O), this.g.previous.next = n.O, this.g.previous = n.O, this.size++);
            return this
        };
        e.prototype["delete"] = function(h) {
            h = d(this, h);
            return h.O && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.O.previous.next = h.O.next, h.O.next.previous = h.O.previous, h.O.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.g = this.g.previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).O
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).O) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, l) {
            for (var n = this.entries(), q; !(q = n.next()).done;) q = q.value, h.call(l, q[1], q[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    ua("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = ba(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
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
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype["delete"] = function(c) {
            c = this.g["delete"](c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    ua("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return wa(this, function(b) {
                return b
            })
        }
    });
    ua("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ua("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length,
                f = c || 0;
            for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
                var g = d[f];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    });
    ua("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== va(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ua("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return wa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var za = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ya(d, e) && (a[e] = d[e])
        }
        return a
    };
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
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = fa(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    ua("Reflect.construct", function() {
        return Aa
    });
    ua("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
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

    function Ba(a) {
        if (a && a != m) return Ca(a.document);
        null === Da && (Da = Ca(m.document));
        return Da
    }
    var Ea = /^[\w+/_-]+[=]{0,2}$/,
        Da = null;

    function Ca(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ea.test(a) ? a : ""
    }

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

    function Ia(a) {
        return "array" == Ha(a)
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

    function Pa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Qa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qa = Oa : Qa = Pa;
        return Qa.apply(null, arguments)
    }

    function Ra(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var Sa = Date.now || function() {
        return +new Date
    };

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
    var Wa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Xa = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ya = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Za = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        $a = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            Xa(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        ab = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        bb = Array.prototype.every ? function(a, b) {
            return Array.prototype.every.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };

    function cb(a, b) {
        var c = db(a, b);
        return 0 > c ? null : "string" === typeof a ? a.charAt(c) : a[c]
    }

    function db(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function eb(a, b) {
        var c = Wa(a, b),
            d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    }

    function fb(a, b) {
        var c = db(a, b);
        0 <= c && Array.prototype.splice.call(a, c, 1)
    }

    function gb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function hb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ja(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function ib(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function jb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ia(d))
                for (var e = 0; e < d.length; e += 8192) {
                    var f = ib(d, e, e + 8192);
                    f = jb.apply(null, f);
                    for (var g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    };

    function kb(a) {
        return a
    }

    function lb(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function mb(a) {
        var b = 0;
        return function(c) {
            m.clearTimeout(b);
            var d = arguments;
            b = m.setTimeout(function() {
                a.apply(void 0, d)
            }, 250)
        }
    };

    function nb(a) {
        this.g = a
    }
    nb.prototype.toString = function() {
        return this.g
    };
    var u = {
        is: function(a, b) {
            return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
        },
        forEach: function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        filter: function(a, b, c) {
            var d = {},
                e;
            for (e in a) b.call(c, a[e], e, a) && (d[e] = a[e]);
            return d
        },
        map: function(a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = b.call(c, a[e], e, a);
            return d
        },
        some: function(a, b, c) {
            for (var d in a)
                if (b.call(c, a[d], d, a)) return !0;
            return !1
        },
        every: function(a, b, c) {
            for (var d in a)
                if (!b.call(c, a[d], d, a)) return !1;
            return !0
        },
        getCount: function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Wf: function(a) {
            for (var b in a) return b
        },
        Xf: function(a) {
            for (var b in a) return a[b]
        },
        contains: function(a, b) {
            return u.jb(a, b)
        },
        Ua: function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        sa: function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ta: function(a, b) {
            var c = Ja(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Qa: function(a, b) {
            return null !== a && b in a
        },
        jb: function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Tb: function(a, b, c) {
            for (var d in a)
                if (b.call(c, a[d], d, a)) return d
        },
        Uf: function(a, b, c) {
            return (b = u.Tb(a, b, c)) && a[b]
        },
        isEmpty: function(a) {
            for (var b in a) return !1;
            return !0
        },
        clear: function(a) {
            for (var b in a) delete a[b]
        },
        remove: function(a, b) {
            var c;
            (c = b in a) && delete a[b];
            return c
        },
        add: function(a, b, c) {
            if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
            u.set(a, b, c)
        },
        get: function(a, b, c) {
            return null !== a && b in a ? a[b] : c
        },
        set: function(a, b, c) {
            a[b] = c
        },
        mg: function(a, b, c) {
            return b in a ? a[b] : a[b] = c
        },
        ng: function(a, b, c) {
            if (b in a) return a[b];
            c = c();
            return a[b] = c
        },
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
        xc: function(a) {
            var b = Ha(a);
            if ("object" == b || "array" == b) {
                if (Ka(a.clone)) return a.clone();
                b = "array" == b ? [] : {};
                for (var c in a) b[c] = u.xc(a[c]);
                return b
            }
            return a
        },
        uc: function(a) {
            var b = {},
                c;
            for (c in a) b[a[c]] = c;
            return b
        },
        Cb: "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        extend: function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < u.Cb.length; f++) c = u.Cb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        create: function(a) {
            var b = arguments.length;
            if (1 == b && Ia(arguments[0])) return u.create.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        Ra: function(a) {
            var b = arguments.length;
            if (1 == b && Ia(arguments[0])) return u.Ra.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        },
        Sf: function(a) {
            var b = a;
            Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
            return b
        },
        eg: function(a) {
            return !!Object.isFrozen && Object.isFrozen(a)
        },
        Vf: function(a, b, c) {
            if (!a) return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return u.sa(a);
            for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c);) {
                for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++) d[e[f]] = !0;
                a = Object.getPrototypeOf(a)
            }
            return u.sa(d)
        },
        Yf: function(a) {
            return (a = Object.getPrototypeOf(a.prototype)) && a.constructor
        }
    };
    u.Ra("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");

    function ob(a, b) {
        this.g = a === pb && b || "";
        this.i = qb
    }
    ob.prototype.Y = !0;
    ob.prototype.U = function() {
        return this.g
    };

    function rb(a) {
        return a instanceof ob && a.constructor === ob && a.i === qb ? a.g : "type_error:Const"
    }

    function v(a) {
        return new ob(pb, a)
    }
    var qb = {},
        pb = {},
        sb = v("");

    function tb() {
        this.g = "";
        this.i = ub
    }
    tb.prototype.Y = !0;
    var ub = {};
    tb.prototype.U = function() {
        return this.g.toString()
    };

    function vb(a, b, c) {
        this.g = a === wb && b || "";
        this.i = a === wb && c || null;
        this.j = xb
    }
    vb.prototype.Y = !0;
    vb.prototype.U = function() {
        return this.g.toString()
    };
    vb.prototype.mb = !0;
    vb.prototype.lb = function() {
        return 1
    };

    function yb(a) {
        return zb(a).toString()
    }

    function zb(a) {
        if (a instanceof vb && a.constructor === vb && a.j === xb) return a.g;
        Ha(a);
        return "type_error:TrustedResourceUrl"
    }

    function Ab(a, b) {
        var c = rb(a);
        if (!Bb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        var d = c.replace(Cb, function(e, f) {
            if (!Object.prototype.hasOwnProperty.call(b, f)) throw Error('Found marker, "' + f + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            var g = b[f];
            return g instanceof ob ? rb(g) : encodeURIComponent(String(g))
        });
        return Db(d)
    }
    var Cb = /%{(\w+)}/g,
        Bb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Eb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        xb = {};

    function Db(a) {
        return new vb(wb, a, null)
    }

    function Fb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = Ia(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    }
    var wb = {};

    function Gb(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    function Hb(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Ib = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Jb(a, b) {
        if (b) a = a.replace(Kb, "&amp;").replace(Lb, "&lt;").replace(Mb, "&gt;").replace(Nb, "&quot;").replace(Ob, "&#39;").replace(Pb, "&#0;");
        else {
            if (!Qb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Kb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Lb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Mb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Nb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ob, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Pb, "&#0;"))
        }
        return a
    }
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
    Rb.prototype.U = function() {
        return this.g.toString()
    };
    Rb.prototype.mb = !0;
    Rb.prototype.lb = function() {
        return 1
    };

    function Ub(a) {
        return Vb(a).toString()
    }

    function Vb(a) {
        if (a instanceof Rb && a.constructor === Rb && a.i === Tb) return a.g;
        Ha(a);
        return "type_error:SafeUrl"
    }
    var Wb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        Xb = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        Yb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Zb(a) {
        if (a instanceof Rb) return a;
        a = "object" == typeof a && a.Y ? a.U() : String(a);
        Yb.test(a) || (a = "about:invalid#zClosurez");
        return new Rb(Sb, a)
    }

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

    function ac() {
        this.g = bc
    }
    ac.prototype.Y = !0;
    var bc = {};
    ac.prototype.U = function() {
        return ""
    };
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
    gc.prototype.lb = function() {
        return this.i
    };
    gc.prototype.Y = !0;
    gc.prototype.U = function() {
        return this.g.toString()
    };

    function ic(a) {
        return jc(a).toString()
    }

    function jc(a) {
        if (a instanceof gc && a.constructor === gc && a.j === hc) return a.g;
        Ha(a);
        return "type_error:SafeHtml"
    }
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

    function mc(a, b) {
        rb(a);
        rb(a);
        return Db(b)
    };

    function nc(a, b) {
        var c = b instanceof Rb ? b : $b(b);
        a.href = Vb(c)
    }

    function oc(a, b) {
        var c = b instanceof Rb ? b : $b(b, /^data:image\//i.test(b));
        a.src = Vb(c)
    }

    function pc(a, b) {
        a.src = b.i ? b.i : yb(b)
    }

    function qc(a, b) {
        a.src = zb(b);
        var c = Ba();
        c && a.setAttribute("nonce", c)
    }

    function rc(a, b) {
        var c = b instanceof Rb ? b : $b(b);
        a.href = Vb(c)
    }

    function sc(a, b) {
        var c = b instanceof Rb ? b : $b(b);
        a.replace(Vb(c))
    }

    function tc(a) {
        a = a instanceof Rb ? a : $b(a);
        m.open(Vb(a), "", void 0, void 0)
    };

    function uc(a) {
        return a = Jb(a, void 0)
    }

    function vc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function wc() {
        return "background-image".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function xc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function yc() {
        return fc("iPhone") && !fc("iPod") && !fc("iPad")
    };

    function zc(a) {
        zc[" "](a);
        return a
    }
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

    function Oc(a) {
        var b = r("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (f) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || m.$googDebugFname || b
        } catch (f) {
            e = "Not available", c = !0
        }
        return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : (b = a.message, null == b && (a.constructor &&
            a.constructor instanceof Function ? (a.constructor.name ? b = a.constructor.name : (b = a.constructor, Pc[b] ? b = Pc[b] : (b = String(b), Pc[b] || (c = /function\s+([^\(]+)/m.exec(b), Pc[b] = c ? c[1] : "[Anonymous]"), b = Pc[b])), b = 'Unknown Error of type "' + b + '"') : b = "Unknown Error of unknown type"), {
            message: b,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: a.stack || "Not available"
        })
    }
    var Pc = {};

    function Qc(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e =
                b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };

    function Rc() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            q = n = 0
        }

        function b(t) {
            for (var x = g, z = 0; 64 > z; z += 4) x[z / 4] = t[z] << 24 | t[z + 1] << 16 | t[z + 2] << 8 | t[z + 3];
            for (z = 16; 80 > z; z++) t = x[z - 3] ^ x[z - 8] ^ x[z - 14] ^ x[z - 16], x[z] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var O = e[1],
                X = e[2],
                da = e[3],
                P = e[4];
            for (z = 0; 80 > z; z++) {
                if (40 > z)
                    if (20 > z) {
                        var ca = da ^ O & (X ^ da);
                        var xa = 1518500249
                    } else ca = O ^ X ^ da, xa = 1859775393;
                else 60 > z ? (ca = O & X | da & (O | X), xa = 2400959708) : (ca = O ^ X ^ da, xa = 3395469782);
                ca = ((t << 5 | t >>> 27) & 4294967295) + ca + P + xa + x[z] & 4294967295;
                P = da;
                da = X;
                X = (O << 30 | O >>> 2) & 4294967295;
                O = t;
                t = ca
            }
            e[0] = e[0] + t & 4294967295;
            e[1] =
                e[1] + O & 4294967295;
            e[2] = e[2] + X & 4294967295;
            e[3] = e[3] + da & 4294967295;
            e[4] = e[4] + P & 4294967295
        }

        function c(t, x) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var z = [], O = 0, X = t.length; O < X; ++O) z.push(t.charCodeAt(O));
                t = z
            }
            x || (x = t.length);
            z = 0;
            if (0 == n)
                for (; z + 64 < x;) b(t.slice(z, z + 64)), z += 64, q += 64;
            for (; z < x;)
                if (f[n++] = t[z++], q++, 64 == n)
                    for (n = 0, b(f); z + 64 < x;) b(t.slice(z, z + 64)), z += 64, q += 64
        }

        function d() {
            var t = [],
                x = 8 * q;
            56 > n ? c(h, 56 - n) : c(h, 64 - (n - 56));
            for (var z = 63; 56 <= z; z--) f[z] = x & 255, x >>>= 8;
            b(f);
            for (z = x = 0; 5 > z; z++)
                for (var O = 24; 0 <= O; O -= 8) t[x++] = e[z] >> O & 255;
            return t
        }
        for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
        var n, q;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Ud: function() {
                for (var t = d(), x = "", z = 0; z < t.length; z++) x += "0123456789ABCDEF".charAt(Math.floor(t[z] / 16)) + "0123456789ABCDEF".charAt(t[z] % 16);
                return x
            }
        }
    };

    function Uc(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Ia(c) ? 2 : 1)) return e = [b, a], Xa(d, function(h) {
            e.push(h)
        }), Vc(e.join(" "));
        var f = [],
            g = [];
        Xa(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        Xa(d, function(h) {
            e.push(h)
        });
        a = Vc(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function Vc(a) {
        var b = Rc();
        b.update(a);
        return b.Ud().toLowerCase()
    };

    function Wc(a) {
        this.g = a || {
            cookie: ""
        }
    }
    k = Wc.prototype;
    k.isEnabled = function() {
        return navigator.cookieEnabled
    };
    k.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.i;
            f = c.j;
            e = c.domain;
            d = c.path;
            c = c.g
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Sa() + 1E3 * c)).toUTCString();
        this.g.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ib(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.remove = function(a, b, c) {
        var d = this.Qa(a);
        this.set(a, "", 0, b, c);
        return d
    };
    k.sa = function() {
        return Xc(this).keys
    };
    k.Ua = function() {
        return Xc(this).values
    };
    k.isEmpty = function() {
        return !this.g.cookie
    };
    k.getCount = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    k.Qa = function(a) {
        return void 0 !== this.get(a)
    };
    k.jb = function(a) {
        for (var b = Xc(this).values, c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
        return !1
    };
    k.clear = function() {
        for (var a = Xc(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function Xc(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ib(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var Yc = new Wc("undefined" == typeof document ? null : document);
    var Zc = !Bc || 9 <= Number(Hc);

    function $c(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    k = $c.prototype;
    k.clone = function() {
        return new $c(this.x, this.y)
    };
    k.Sa = function(a) {
        return a instanceof $c && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function ad(a, b) {
        this.width = a;
        this.height = b
    }
    k = ad.prototype;
    k.clone = function() {
        return new ad(this.width, this.height)
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function bd(a, b) {
        u.forEach(b, function(c, d) {
            c && "object" == typeof c && c.Y && (c = c.U());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : cd.hasOwnProperty(d) ? a.setAttribute(cd[d], c) : Gb(d, "aria-") || Gb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
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

    function dd(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!Zc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', uc(g.name), '"');
            if (g.type) {
                f.push(' type="', uc(g.type), '"');
                var h = {};
                u.extend(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = ed(e, f);
        g && ("string" === typeof g ? f.className = g : Ia(g) ? f.className = g.join(" ") : bd(f, g));
        2 < d.length && fd(e, f, d, 2);
        return f
    }

    function fd(a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !Ja(f) || La(f) && 0 < f.nodeType ? e(f) : Xa(gd(f) ? gb(f) : f, e)
        }
    }

    function ed(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function hd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function gd(a) {
        if (a && "number" == typeof a.length) {
            if (La(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (Ka(a)) return "function" == typeof a.item
        }
        return !1
    }

    function id(a, b) {
        if (!b) return null;
        var c = b ? String(b).toUpperCase() : null;
        return jd(a, function(d) {
            return (!c || d.nodeName == c) && !0
        }, void 0)
    }

    function jd(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function kd(a) {
        this.g = a || m.document || document
    }
    k = kd.prototype;
    k.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    k.createElement = function(a) {
        return ed(this.g, a)
    };
    k.appendChild = function(a, b) {
        a.appendChild(b)
    };
    k.append = function(a, b) {
        fd(hd(a), a, arguments, 1)
    };
    k.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    k.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function ld() {
        this.j = this.j;
        this.D = this.D
    }
    ld.prototype.j = !1;
    ld.prototype.dispose = function() {
        this.j || (this.j = !0, this.qa())
    };
    ld.prototype.qa = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function md(a) {
        a.preventDefault()
    };
    var nd = m.JSON.stringify;
    var od = "StopIteration" in m ? m.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function pd() {}
    pd.prototype.next = function() {
        throw od;
    };
    pd.prototype.ba = function() {
        return this
    };

    function qd(a) {
        if (a instanceof pd) return a;
        if ("function" == typeof a.ba) return a.ba(!1);
        if (Ja(a)) {
            var b = 0,
                c = new pd;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw od;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function rd(a, b) {
        if (Ja(a)) try {
            Xa(a, b, void 0)
        } catch (c) {
            if (c !== od) throw c;
        } else {
            a = qd(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== od) throw c;
            }
        }
    }

    function sd(a) {
        if (Ja(a)) return gb(a);
        a = qd(a);
        var b = [];
        rd(a, function(c) {
            b.push(c)
        });
        return b
    };

    function td(a, b) {
        this.i = {};
        this.g = [];
        this.ha = this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof td)
                for (c = a.sa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    k = td.prototype;
    k.getCount = function() {
        return this.j
    };
    k.Ua = function() {
        ud(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    k.sa = function() {
        ud(this);
        return this.g.concat()
    };
    k.Qa = function(a) {
        return vd(this.i, a)
    };
    k.jb = function(a) {
        for (var b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            if (vd(this.i, c) && this.i[c] == a) return !0
        }
        return !1
    };
    k.Sa = function(a, b) {
        if (this === a) return !0;
        if (this.j != a.getCount()) return !1;
        var c = b || wd;
        ud(this);
        for (var d, e = 0; d = this.g[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };

    function wd(a, b) {
        return a === b
    }
    k.isEmpty = function() {
        return 0 == this.j
    };
    k.clear = function() {
        this.i = {};
        this.ha = this.j = this.g.length = 0
    };
    k.remove = function(a) {
        return vd(this.i, a) ? (delete this.i[a], this.j--, this.ha++, this.g.length > 2 * this.j && ud(this), !0) : !1
    };

    function ud(a) {
        if (a.j != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                vd(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.j != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], vd(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    k.get = function(a, b) {
        return vd(this.i, a) ? this.i[a] : b
    };
    k.set = function(a, b) {
        vd(this.i, a) || (this.j++, this.g.push(a), this.ha++);
        this.i[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.sa(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new td(this)
    };
    k.uc = function() {
        for (var a = new td, b = 0; b < this.g.length; b++) {
            var c = this.g[b];
            a.set(this.i[c], c)
        }
        return a
    };
    k.ba = function(a) {
        ud(this);
        var b = 0,
            c = this.ha,
            d = this,
            e = new pd;
        e.next = function() {
            if (c != d.ha) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw od;
            var f = d.g[b++];
            return a ? f : d.i[f]
        };
        return e
    };

    function vd(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

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

    function zd(a) {
        m.setTimeout(function() {
            throw a;
        }, 0)
    }

    function Ad(a) {
        a = Bd(a);
        !Ka(m.setImmediate) || m.Window && m.Window.prototype && !fc("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (Cd || (Cd = Dd()), Cd(a)) : m.setImmediate(a)
    }
    var Cd;

    function Dd() {
        var a = m.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !fc("Presto") && (a = function() {
            var e = ed(document, "IFRAME");
            e.style.display = "none";
            pc(e, Db(rb(sb)));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(jc(lc));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Qa(function(l) {
                if (("*" == h || l.origin == h) && l.data ==
                    g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !fc("Trident") && !fc("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Ib;
                    c.Ib = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ib: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in ed(document, "SCRIPT") ? function(e) {
            var f = ed(document, "SCRIPT");
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            };
            document.documentElement.appendChild(f)
        } : function(e) {
            m.setTimeout(e, 0)
        }
    }
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
        } else Id = function() {
            Ad(Md)
        }
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

    function Wd(a, b, c) {
        Xd(a, b, c, null) || Hd(Ra(b, a))
    }

    function Yd(a) {
        return new Pd(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(n, q) {
                        d--;
                        e[n] = q;
                        0 == d && b(e)
                    }, g = function(n) {
                        c(n)
                    }, h = 0, l; h < a.length; h++) l = a[h], Wd(l, Ra(f, h), g);
            else b(e)
        })
    }

    function Zd() {
        var a, b, c = new Pd(function(d, e) {
            a = d;
            b = e
        });
        return new $d(c, a, b)
    }
    Pd.prototype.then = function(a, b, c) {
        return ae(this, Ka(a) ? a : null, Ka(b) ? b : null, c)
    };
    Nd(Pd);

    function be(a, b) {
        return ae(a, null, b, void 0)
    }
    Pd.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new ce(a);
            Hd(function() {
                de(this, b)
            }, this)
        }
    };

    function de(a, b) {
        if (0 == a.g)
            if (a.j) {
                var c = a.j;
                if (c.i) {
                    for (var d = 0, e = null, f = null, g = c.i; g && (g.j || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? de(c, b) : (f ? (d = f, d.next == c.D && (c.D = d), d.next = d.next.next) : ee(c), fe(c, e, 3, b)))
                }
                a.j = null
            } else Qd(a, 3, b)
    }

    function ge(a, b) {
        a.i || 2 != a.g && 3 != a.g || he(a);
        a.D ? a.D.next = b : a.i = b;
        a.D = b
    }

    function ae(a, b, c, d) {
        var e = Td(null, null, null);
        e.g = new Pd(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var l = b.call(d, h);
                    f(l)
                } catch (n) {
                    g(n)
                }
            } : f;
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
    Pd.prototype.aa = function(a) {
        this.g = 0;
        Qd(this, 2, a)
    };
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

    function je(a, b, c, d, e) {
        function f(l) {
            h || (h = !0, d.call(e, l))
        }

        function g(l) {
            h || (h = !0, c.call(e, l))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
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

    function ce(a) {
        Ua.call(this, a)
    }
    Ta(ce, Ua);
    ce.prototype.name = "cancel";

    function $d(a, b, c) {
        this.g = a;
        this.resolve = b;
        this.reject = c
    };
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

    function qe(a) {
        var b = ne(a);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function re(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    }

    function se(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function te(a, b) {
        if (!b) return a;
        var c = re(a);
        c[1] = se(c[1], b);
        return c[0] + (c[1] ? "?" + c[1] : "") + c[2]
    }

    function ue(a, b, c) {
        if (Ia(b))
            for (var d = 0; d < b.length; d++) ue(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function ve(a) {
        var b = [],
            c;
        for (c in a) ue(c, a[c], b);
        return b.join("&")
    }

    function we(a, b) {
        var c = ve(b);
        return te(a, c)
    }

    function xe(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return te(a, b + c)
    }

    function ye(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var ze = /#|$/;

    function Ae(a, b) {
        var c = a.search(ze),
            d = ye(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Be = /[?&]($|#)/;

    function Ce(a, b) {
        for (var c = a.search(ze), d = 0, e, f = []; 0 <= (e = ye(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(Be, "$1")
    }

    function De(a, b) {
        return xe(Ce(a, "amount"), "amount", b)
    }

    function Ee(a, b) {
        var c = re(a),
            d = c[1],
            e = [];
        d && Xa(d.split("&"), function(f) {
            var g = f.indexOf("=");
            b.hasOwnProperty(0 <= g ? f.substr(0, g) : f) || e.push(f)
        });
        c[1] = se(e.join("&"), ve(b));
        return c[0] + (c[1] ? "?" + c[1] : "") + c[2]
    };

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
    k.Va = function(a) {
        this.g = arguments;
        this.ka || this.Ma ? this.wa = !0 : Ge(this)
    };
    k.stop = function() {
        this.ka && (m.clearTimeout(this.ka), this.ka = null, this.wa = !1, this.g = [])
    };
    k.pause = function() {
        this.Ma++
    };
    k.resume = function() {
        this.Ma--;
        this.Ma || !this.wa || this.ka || (this.wa = !1, Ge(this))
    };
    k.qa = function() {
        Fe.la.qa.call(this);
        this.stop()
    };
    k.ue = function() {
        this.ka = null;
        this.wa && !this.Ma && (this.wa = !1, Ge(this))
    };

    function Ge(a) {
        var b = a.i;
        var c = a.C;
        if (!Ka(b))
            if (b && "function" == typeof b.handleEvent) b = Qa(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : m.setTimeout(b, c || 0);
        a.ka = b;
        a.G.apply(null, a.g)
    };

    function He() {};

    function Ie() {}
    Ta(Ie, He);
    Ie.prototype.getCount = function() {
        var a = 0;
        rd(this.ba(!0), function() {
            a++
        });
        return a
    };
    Ie.prototype.clear = function() {
        var a = sd(this.ba(!0)),
            b = this;
        Xa(a, function(c) {
            b.remove(c)
        })
    };

    function Je(a) {
        this.g = a
    }
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
    k.set = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    k.get = function(a) {
        a = this.g.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    k.remove = function(a) {
        this.g.removeItem(a)
    };
    k.getCount = function() {
        return this.g.length
    };
    k.ba = function(a) {
        var b = 0,
            c = this.g,
            d = new pd;
        d.next = function() {
            if (b >= c.length) throw od;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    k.clear = function() {
        this.g.clear()
    };
    k.key = function(a) {
        return this.g.key(a)
    };

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

    function Pe(a) {
        Qe();
        return Db(a)
    }
    var Qe = Fa;

    function Re() {
        var a = Se;
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    zc(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Te(a) {
        var b = Ue;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a.call(void 0, b[c], c, b)
    }

    function Ve() {
        var a = [];
        Te(function(b) {
            a.push(b)
        });
        return a
    }
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
        We = lb(function() {
            return Ve()
        });

    function Xe() {
        var a = ed(document, "IFRAME"),
            b = {};
        Xa(We(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };

    function Ye(a, b) {
        a.addEventListener && a.addEventListener("load", b, !1)
    };

    function Ze(a, b) {
        var c = $e["background-image"];
        if (!c) {
            var d = wc();
            c = d;
            void 0 === a.style[d] && (d = (Dc ? "Webkit" : Cc ? "Moz" : Bc ? "ms" : Ac ? "O" : null) + xc(d), void 0 !== a.style[d] && (c = d));
            $e["background-image"] = c
        }
        c && (a.style[c] = b)
    }
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

    function df() {
        var a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Sa()
    }

    function ef() {
        var a = void 0 === a ? m : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function ff(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
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
    kf.prototype.disable = function() {
        this.g = !1;
        this.events != this.i.google_js_reporting_queue && (jf() && Xa(this.events, lf), this.events.length = 0)
    };

    function lf(a) {
        a && gf && jf() && (gf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), gf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    kf.prototype.start = function(a, b) {
        if (!this.g) return null;
        var c = ef() || df();
        c = new ff(a, b, c);
        var d = "goog_" + c.label + "_" + c.uniqueId + "_start";
        gf && jf() && gf.mark(d);
        return c
    };
    kf.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            var b = ef() || df();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            gf && jf() && gf.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    };
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

    function zf(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
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

    function Df() {
        var a = vf.href;
        if (Cf.dpo) var b = Cf.h;
        else {
            b = Cf.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a))) try {
                b = decodeURIComponent(a[2])
            } catch (e) {}
        }
        return b
    }

    function Ef(a) {
        var b = yf(Cf, "PQ", []);
        Cf.PQ = [];
        var c = b.length;
        if (0 === c) a();
        else
            for (var d = 0, e = function() {
                    ++d === c && a()
                }, f = 0; f < c; f++) b[f](e)
    }

    function Ff(a) {
        return yf(yf(Cf, "H", Af()), a, Af())
    };
    var Gf = yf(Cf, "perf", Af());
    yf(Gf, "g", Af());
    var Hf = yf(Gf, "i", Af());
    yf(Gf, "r", []);
    Af();
    Af();

    function If(a, b, c) {
        b && 0 < b.length && (b = Jf(b), c && 0 < c.length && (b += "___" + Jf(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = yf(Hf, "_p", Af()), yf(b, c, Af())[a] = (new Date).getTime(), b = Gf.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    }

    function Jf(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
    };
    var Kf = Af(),
        Lf = [];

    function Mf(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    }
    Lf.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? Cf[b] = yf(Cf, b, []).concat(c) : yf(Cf, b, c)
            }
        if (b = a.u) a = yf(Cf, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Nf = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Of = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Pf = /^[a-zA-Z0-9\-_\.,!]+$/,
        Qf = /^gapi\.loaded_[0-9]+$/,
        Rf = /^[a-zA-Z0-9,._-]+$/;

    function Sf(a, b, c, d) {
        var e = a.split(";"),
            f = e.shift(),
            g = Kf[f],
            h = null;
        g ? h = g(e, b, c, d) : Mf("no hint processor for: " + f);
        h || Mf("failed to generate load url");
        b = h;
        c = b.match(Tf);
        (d = b.match(Uf)) && 1 === d.length && Vf.test(b) && c && 1 === c.length || Mf("failed sanity: " + a);
        return h
    }

    function Wf(a, b, c, d) {
        function e(f) {
            return encodeURIComponent(f).replace(/%2C/g, ",")
        }
        a = Xf(a);
        Qf.test(c) || Mf("invalid_callback");
        b = Yf(b);
        d = d && d.length ? Yf(d) : null;
        return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.Db ? "/am=" + e(a.Db) : "", a.kc ? "/rs=" + e(a.kc) : "", a.Ac ? "/t=" + e(a.Ac) : "", "/cb=", e(c)].join("")
    }

    function Xf(a) {
        "/" !== a.charAt(0) && Mf("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length;) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf(".")) Mf("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("="),
                g = decodeURIComponent(f[0]),
                h = decodeURIComponent(f[1]);
            2 == f.length && g && h && (a[g] = a[g] || h)
        }
        b = "/" + c.join("/");
        Nf.test(b) || Mf("invalid_prefix");
        c = 0;
        for (d = Of.length; c < d; ++c) Of[c].test(b) && Mf("invalid_prefix");
        c = Zf(a,
            "k", !0);
        d = Zf(a, "am");
        e = Zf(a, "rs");
        a = Zf(a, "t");
        return {
            pathPrefix: b,
            version: c,
            Db: d,
            kc: e,
            Ac: a
        }
    }

    function Yf(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            Rf.test(e) && b.push(e)
        }
        return b.join(",")
    }

    function Zf(a, b, c) {
        a = a[b];
        !a && c && Mf("missing: " + b);
        if (a) {
            if (Pf.test(a)) return a;
            Mf("invalid: " + b)
        }
        return null
    }
    var Vf = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Uf = /\/cb=/g,
        Tf = /\/\//g;

    function $f() {
        var a = Df();
        if (!a) throw Error("Bad hint");
        return a
    }
    Kf.m = function(a, b, c, d) {
        (a = a[0]) || Mf("missing_hint");
        return "https://apis.google.com" + Wf(a, b, c, d)
    };
    var ag = decodeURI("%73cript"),
        bg = /^[-+_0-9\/A-Za-z]+={0,2}$/;

    function cg(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d],
                f;
            if (f = e) {
                a: {
                    for (f = 0; f < b.length; f++)
                        if (b[f] === e) break a;f = -1
                }
                f = 0 > f
            }
            f && c.push(e)
        }
        return c
    }

    function dg() {
        var a = Cf.nonce;
        return void 0 !== a ? a && a === String(a) && a.match(bg) ? a : Cf.nonce = null : uf.querySelector ? (a = uf.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(bg) ? Cf.nonce = a : Cf.nonce = null) : null : null
    }

    function eg(a) {
        if ("loading" != uf.readyState) fg(a);
        else {
            var b = dg(),
                c = "";
            null !== b && (c = ' nonce="' + b + '"');
            a = "<" + ag + ' src="' + encodeURI(a) + '"' + c + "></" + ag + ">";
            uf.write(a)
        }
    }

    function fg(a) {
        var b = uf.createElement(ag);
        b.setAttribute("src", a);
        a = dg();
        null !== a && b.setAttribute("nonce", a);
        b.async = "true";
        (a = uf.getElementsByTagName(ag)[0]) ? a.parentNode.insertBefore(b, a): (uf.head || uf.body || uf.documentElement).appendChild(b)
    }

    function gg(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < Lf.length; d++) {
                var e = Lf[d][0],
                    f = Lf[d][1];
                f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
            }
    }

    function hg(a, b, c) {
        ig(function() {
            var d = b === Df() ? yf(Bf, "_", Af()) : Af();
            d = yf(Ff(b), "_", d);
            a(d)
        }, c)
    }

    function jg(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c.callback = b);
        gg(a, c);
        var d = a ? a.split(":") : [],
            e = c.h || $f(),
            f = yf(Cf, "ah", Af());
        if (f["::"] && d.length) {
            for (var g = [], h = null; h = d.shift();) {
                var l = h.split(".");
                l = f[h] || f[l[1] && "ns:" + l[0] || ""] || e;
                var n = g.length && g[g.length - 1] || null,
                    q = n;
                n && n.hint == l || (q = {
                    hint: l,
                    features: []
                }, g.push(q));
                q.features.push(h)
            }
            var t = g.length;
            if (1 < t) {
                var x = c.callback;
                x && (c.callback = function() {
                    0 == --t && x()
                })
            }
            for (; d = g.shift();) kg(d.features, c, d.hint)
        } else kg(d || [], c, e)
    }

    function kg(a, b, c) {
        function d(ca, xa) {
            if (t) return 0;
            tf.clearTimeout(q);
            x.push.apply(x, O);
            var Sc = ((Bf || {}).config || {}).update;
            Sc ? Sc(f) : f && yf(Cf, "cu", []).push(f);
            if (xa) {
                If("me0", ca, z);
                try {
                    hg(xa, c, n)
                } finally {
                    If("me1", ca, z)
                }
            }
            return 1
        }
        a = zf(a) || [];
        var e = b.callback,
            f = b.config,
            g = b.timeout,
            h = b.ontimeout,
            l = b.onerror,
            n = void 0;
        "function" == typeof l && (n = l);
        var q = null,
            t = !1;
        if (g && !h || !g && h) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        l = yf(Ff(c), "r", []).sort();
        var x = yf(Ff(c), "L", []).sort(),
            z = [].concat(l);
        0 < g && (q = tf.setTimeout(function() {
            t = !0;
            h()
        }, g));
        var O = cg(a, x);
        if (O.length) {
            O = cg(a, l);
            var X = yf(Cf, "CP", []),
                da = X.length;
            X[da] = function(ca) {
                function xa() {
                    var Tc = X[da + 1];
                    Tc && Tc()
                }

                function Sc(Tc) {
                    X[da] = null;
                    d(O, ca) && Ef(function() {
                        e && e();
                        Tc()
                    })
                }
                if (!ca) return 0;
                If("ml1", O, z);
                0 < da && X[da - 1] ? X[da] = function() {
                    Sc(xa)
                } : Sc(xa)
            };
            if (O.length) {
                var P = "loaded_" + Cf.I++;
                Bf[P] = function(ca) {
                    X[da](ca);
                    Bf[P] = null
                };
                a = Sf(c, O, "gapi." + P, l);
                l.push.apply(l, O);
                If("ml0", O, z);
                b.sync || tf.___gapisync ? eg(a) : fg(a)
            } else X[da](wf)
        } else d(O) && e && e()
    }

    function ig(a, b) {
        if (Cf.hee && 0 < Cf.hel) try {
            return a()
        } catch (c) {
            b && b(c), Cf.hel--, jg("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    }
    Bf.load = function(a, b) {
        return ig(function() {
            return jg(a, b)
        })
    };

    function lg(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return "string" === typeof a && a.match(/\S+/g) || []
    }

    function mg(a, b) {
        if (a.classList) var c = a.classList.contains(b);
        else c = lg(a), c = 0 <= Wa(c, b);
        return c
    }

    function ng(a, b) {
        a.classList ? a.classList.add(b) : mg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function og(a, b) {
        a.classList ? a.classList.remove(b) : mg(a, b) && (a.className = Ya(lg(a), function(c) {
            return c != b
        }).join(" "))
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function pg(a, b) {
        this.C = [];
        this.na = a;
        this.ma = b || null;
        this.D = this.g = !1;
        this.j = void 0;
        this.aa = this.fb = this.N = !1;
        this.G = 0;
        this.i = null;
        this.T = 0
    }
    pg.prototype.cancel = function(a) {
        if (this.g) this.j instanceof pg && this.j.cancel();
        else {
            if (this.i) {
                var b = this.i;
                delete this.i;
                a ? b.cancel(a) : (b.T--, 0 >= b.T && b.cancel())
            }
            this.na ? this.na.call(this.ma, this) : this.aa = !0;
            this.g || (a = new qg(this), rg(this), sg(this, !1, a))
        }
    };
    pg.prototype.ea = function(a, b) {
        this.N = !1;
        sg(this, a, b)
    };

    function sg(a, b, c) {
        a.g = !0;
        a.j = c;
        a.D = !b;
        tg(a)
    }

    function rg(a) {
        if (a.g) {
            if (!a.aa) throw new ug(a);
            a.aa = !1
        }
    }
    pg.prototype.ib = function(a) {
        rg(this);
        sg(this, !0, a)
    };

    function vg(a, b, c) {
        a.C.push([b, c, void 0]);
        a.g && tg(a)
    }
    pg.prototype.then = function(a, b, c) {
        var d, e, f = new Pd(function(g, h) {
            d = g;
            e = h
        });
        vg(this, d, function(g) {
            g instanceof qg ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    Nd(pg);
    pg.prototype.isError = function(a) {
        return a instanceof Error
    };

    function wg(a) {
        return ab(a.C, function(b) {
            return Ka(b[1])
        })
    }

    function tg(a) {
        if (a.G && a.g && wg(a)) {
            var b = a.G,
                c = xg[b];
            c && (m.clearTimeout(c.g), delete xg[b]);
            a.G = 0
        }
        a.i && (a.i.T--, delete a.i);
        b = a.j;
        for (var d = c = !1; a.C.length && !a.N;) {
            var e = a.C.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.D ? g : f) try {
                var h = f.call(e || a.ma, b);
                void 0 !== h && (a.D = a.D && (h == b || a.isError(h)), a.j = b = h);
                if (Od(b) || "function" === typeof m.Promise && b instanceof m.Promise) d = !0, a.N = !0
            } catch (l) {
                b = l, a.D = !0, wg(a) || (c = !0)
            }
        }
        a.j = b;
        d && (h = Qa(a.ea, a, !0), d = Qa(a.ea, a, !1), b instanceof pg ? (vg(b, h, d), b.fb = !0) : b.then(h, d));
        c && (b =
            new yg(b), xg[b.g] = b, a.G = b.g)
    }

    function ug() {
        Ua.call(this)
    }
    Ta(ug, Ua);
    ug.prototype.message = "Deferred has already fired";
    ug.prototype.name = "AlreadyCalledError";

    function qg() {
        Ua.call(this)
    }
    Ta(qg, Ua);
    qg.prototype.message = "Deferred was canceled";
    qg.prototype.name = "CanceledError";

    function yg(a) {
        this.g = m.setTimeout(Qa(this.j, this), 0);
        this.i = a
    }
    yg.prototype.j = function() {
        delete xg[this.g];
        throw this.i;
    };
    var xg = {};

    function zg(a, b) {
        var c = b || {},
            d = c.document || document,
            e = yb(a),
            f = ed(document, "SCRIPT"),
            g = {
                lc: f,
                sc: void 0
            },
            h = new pg(Ag, g),
            l = null,
            n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (l = window.setTimeout(function() {
            Bg(f, !0);
            var q = new Cg(1, "Timeout reached for loading script " + e);
            rg(h);
            sg(h, !1, q)
        }, n), g.sc = l);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (Bg(f, c.Qf || !1, l), h.ib(null))
        };
        f.onerror = function() {
            Bg(f, !0, l);
            var q = new Cg(0, "Error while loading script " + e);
            rg(h);
            sg(h, !1, q)
        };
        g = c.attributes || {};
        u.extend(g, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        bd(f, g);
        qc(f, a);
        Dg(d).appendChild(f);
        return h
    }

    function Dg(a) {
        var b;
        return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }

    function Ag() {
        if (this && this.lc) {
            var a = this.lc;
            a && "SCRIPT" == a.tagName && Bg(a, !0, this.sc)
        }
    }

    function Bg(a, b, c) {
        null != c && m.clearTimeout(c);
        a.onload = Fa;
        a.onerror = Fa;
        a.onreadystatechange = Fa;
        b && window.setTimeout(function() {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, 0)
    }

    function Cg(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ua.call(this, c);
        this.code = a
    }
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
    k.subscribe = function(a, b, c) {
        var d = this.i[a];
        d || (d = this.i[a] = []);
        var e = this.N;
        this.g[e] = a;
        this.g[e + 1] = b;
        this.g[e + 2] = c;
        this.N = e + 3;
        d.push(e);
        return e
    };
    k.bb = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.i[b];
            0 != this.G ? (this.C.push(a), this.g[a + 1] = Fa) : (c && eb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    k.ic = function(a, b) {
        var c = this.i[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.T)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    Fg(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.G++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.G--, 0 < this.C.length && 0 == this.G)
                            for (; c = this.C.pop();) this.bb(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function Fg(a, b, c) {
        Hd(function() {
            a.apply(b, c)
        })
    }
    k.clear = function(a) {
        if (a) {
            var b = this.i[a];
            b && (Xa(b, this.bb, this), delete this.i[a])
        } else this.g.length = 0, this.i = {}
    };
    k.getCount = function(a) {
        if (a) {
            var b = this.i[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.i) a += this.getCount(b);
        return a
    };
    k.qa = function() {
        Eg.la.qa.call(this);
        this.clear();
        this.C.length = 0
    };

    function Gg(a) {
        this.g = a
    }
    Gg.prototype.set = function(a, b) {
        void 0 === b ? this.g.remove(a) : this.g.set(a, nd(b))
    };
    Gg.prototype.get = function(a) {
        try {
            var b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    Gg.prototype.remove = function(a) {
        this.g.remove(a)
    };

    function Hg(a) {
        this.g = a
    }
    Ta(Hg, Gg);

    function Ig(a) {
        this.data = a
    }

    function Jg(a) {
        return void 0 === a || a instanceof Ig ? a : new Ig(a)
    }
    Hg.prototype.set = function(a, b) {
        Hg.la.set.call(this, a, Jg(b))
    };
    Hg.prototype.i = function(a) {
        a = Hg.la.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Hg.prototype.get = function(a) {
        if (a = this.i(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function Kg(a) {
        this.g = a
    }
    Ta(Kg, Hg);
    Kg.prototype.set = function(a, b, c) {
        if (b = Jg(b)) {
            if (c) {
                if (c < Sa()) {
                    Kg.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Sa()
        }
        Kg.la.set.call(this, a, b)
    };
    Kg.prototype.i = function(a) {
        var b = Kg.la.i.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Sa() || c && c > Sa()) Kg.prototype.remove.call(this, a);
            else return b
        }
    };

    function Lg(a, b) {
        this.i = a;
        this.g = null;
        if (Bc && !(9 <= Number(Hc))) {
            Mg || (Mg = new td);
            this.g = Mg.get(a);
            this.g || (b ? this.g = document.getElementById(b) : (this.g = document.createElement("userdata"), this.g.addBehavior("#default#userData"), document.body.appendChild(this.g)), Mg.set(a, this.g));
            try {
                this.g.load(this.i)
            } catch (c) {
                this.g = null
            }
        }
    }
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

    function Og(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return Ng[b]
        })
    }
    k = Lg.prototype;
    k.isAvailable = function() {
        return !!this.g
    };
    k.set = function(a, b) {
        this.g.setAttribute(Og(a), b);
        Pg(this)
    };
    k.get = function(a) {
        a = this.g.getAttribute(Og(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    k.remove = function(a) {
        this.g.removeAttribute(Og(a));
        Pg(this)
    };
    k.getCount = function() {
        return Qg(this).attributes.length
    };
    k.ba = function(a) {
        var b = 0,
            c = Qg(this).attributes,
            d = new pd;
        d.next = function() {
            if (b >= c.length) throw od;
            var e = c[b++];
            if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    k.clear = function() {
        for (var a = Qg(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Pg(this)
    };

    function Pg(a) {
        try {
            a.g.save(a.i)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    }

    function Qg(a) {
        return a.g.XMLDocument.documentElement
    };

    function Rg(a, b) {
        this.i = a;
        this.g = b + "::"
    }
    Ta(Rg, Ie);
    Rg.prototype.set = function(a, b) {
        this.i.set(this.g + a, b)
    };
    Rg.prototype.get = function(a) {
        return this.i.get(this.g + a)
    };
    Rg.prototype.remove = function(a) {
        this.i.remove(this.g + a)
    };
    Rg.prototype.ba = function(a) {
        var b = this.i.ba(!0),
            c = this,
            d = new pd;
        d.next = function() {
            for (var e = b.next(); e.substr(0, c.g.length) != c.g;) e = b.next();
            return a ? e.substr(c.g.length) : c.i.get(e)
        };
        return d
    };

    function Sg() {}
    Ga(Sg);
    Sg.prototype.g = 0;

    function Tg() {
        this.i = [];
        this.g = -1
    }
    Tg.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.i[a] != b && (this.i[a] = b, this.g = -1)
    };
    Tg.prototype.get = function(a) {
        return !!this.i[a]
    };

    function Ug(a) {
        -1 == a.g && (a.g = $a(a.i, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.g
    };
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

    function Yg(a, b) {
        for (; a.length > b;) a.pop()
    }

    function Zg(a) {
        a = Array(a);
        Yg(a, 0);
        return a
    };

    function $g(a, b, c) {
        if (null == c) a.removeAttribute(b);
        else {
            var d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null;
            d ? a.setAttributeNS(d, b, String(c)) : a.setAttribute(b, String(c))
        }
    }
    var ah = new Xg;
    ah[Vg["default"]] = function(a, b, c) {
        var d = typeof c;
        "object" === d || "function" === d ? a[b] = c : $g(a, b, c)
    };
    ah.style = function(a, b, c) {
        a = a.style;
        if ("string" === typeof c) a.cssText = c;
        else {
            a.cssText = "";
            for (var d in c)
                if (Wg.call(c, d)) {
                    b = d;
                    var e = c[d];
                    0 <= b.indexOf("-") ? a.setProperty(b, e) : a[b] = e
                }
        }
    };

    function bh(a, b, c) {
        (ah[b] || ah[Vg["default"]])(a, b, c)
    };

    function ch() {
        this.created = [];
        this.g = []
    };
    var dh = "undefined" !== typeof Node && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };

    function eh(a, b) {
        this.g = null;
        this.j = !1;
        this.i = a;
        this.key = b;
        this.text = void 0
    }

    function fh(a, b, c) {
        b = new eh(b, c);
        return a.__incrementalDOMData = b
    }

    function gh(a, b) {
        if (a.__incrementalDOMData) return a.__incrementalDOMData;
        var c = 1 === a.nodeType ? a.localName : a.nodeName,
            d = 1 === a.nodeType ? a.getAttribute("key") : null;
        c = fh(a, c, 1 === a.nodeType ? d || b : null);
        if (1 === a.nodeType) {
            d = a.attributes;
            var e = d.length;
            if (e)
                for (var f = c.g || (c.g = Zg(e)), g = 0, h = 0; g < e; g += 1, h += 2) {
                    var l = d[g],
                        n = l.value;
                    f[h] = l.name;
                    f[h + 1] = n
                }
        }
        return c
    };

    function hh(a, b, c, d, e) {
        return b == c && d == e
    }
    var ih = null,
        jh = null,
        kh = null,
        lh = null,
        mh = [],
        nh = hh,
        oh = [],
        ph = [];

    function qh(a) {
        for (var b = kh, c = jh ? jh.nextSibling : kh.firstChild; c !== a;) {
            var d = c.nextSibling;
            b.removeChild(c);
            ih.g.push(c);
            c = d
        }
    }

    function rh() {
        qh(null);
        jh = kh;
        kh = kh.parentNode
    }

    function sh(a, b) {
        jh = jh ? jh.nextSibling : kh.firstChild;
        var c;
        a: {
            if (c = jh) {
                do {
                    var d = c,
                        e = a,
                        f = b,
                        g = gh(d, f);
                    if (nh(d, e, g.i, f, g.key)) break a
                } while (b && (c = c.nextSibling))
            }
            c = null
        }
        c || ("#text" === a ? (c = lh.createTextNode(""), fh(c, "#text", null)) : (c = lh, d = kh, "function" === typeof a ? c = new a : c = (d = "svg" === a ? "http://www.w3.org/2000/svg" : "math" === a ? "http://www.w3.org/1998/Math/MathML" : null == d || "foreignObject" === gh(d, void 0).i ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), fh(c, a, b)), ih.created.push(c));
        if (c !==
            jh) {
            if (0 <= mh.indexOf(c))
                for (d = kh, e = c.nextSibling, f = jh; null !== f && f !== c;) g = f.nextSibling, d.insertBefore(f, e), f = g;
            else kh.insertBefore(c, jh);
            jh = c
        }
    }

    function th(a, b) {
        var c = b = void 0 === b ? {} : b,
            d = void 0 === c.matches ? hh : c.matches;
        return function(e, f, g) {
            var h = ih,
                l = lh,
                n = mh,
                q = oh,
                t = ph,
                x = jh,
                z = kh,
                O = nh;
            lh = e.ownerDocument;
            ih = new ch;
            nh = d;
            oh = [];
            ph = [];
            jh = null;
            var X = kh = e.parentNode,
                da, P = dh.call(e);
            if ((da = 11 === P.nodeType || 9 === P.nodeType ? P.activeElement : null) && e.contains(da)) {
                for (P = []; da !== X;) P.push(da), da = da.parentNode;
                X = P
            } else X = [];
            mh = X;
            try {
                return a(e, f, g)
            } finally {
                lh = l, ih = h, nh = O, oh = q, ph = t, jh = x, kh = z, mh = n
            }
        }
    }
    var uh = function(a) {
            return th(function(b, c, d) {
                kh = jh = b;
                jh = null;
                c(d);
                rh();
                return b
            }, a)
        }(),
        vh = function(a) {
            return th(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                jh = e;
                c(d);
                kh && qh(b.nextSibling);
                return e === jh ? null : jh
            }, a)
        }();
    var wh = [],
        xh = 0;

    function yh(a, b, c) {
        wh.push(bh);
        wh.push(a);
        wh.push(b);
        wh.push(c)
    };
    var zh = new Xg;
    var Ah = new Xg;

    function w(a, b) {
        for (var c = 1; c < arguments.length; ++c);
        sh("#text", null);
        c = jh;
        var d = gh(c, void 0);
        if (d.text !== a) {
            d = d.text = a;
            for (var e = 1; e < arguments.length; e += 1) d = (0, arguments[e])(d);
            c.data !== d && (c.data = d)
        }
        return c
    };
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
    function Bh(a, b, c) {
        if (Object.hasOwnProperty.call(Ch, a) && (a = Ch[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
            for (var d = null, e = !1, f = 0, g = a.length; f < g; ++f) {
                var h = a[f],
                    l = h.L;
                if (!l) return h.o;
                null === d && (d = {});
                l = Object.hasOwnProperty.call(d, l) ? d[l] : d[l] = c(l);
                if (l === h.M) return h.o;
                null == l && (e = !0)
            }
            if (e) return null
        }
        b = Dh[b];
        return "number" === typeof b ? b : null
    }
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

    function Gh(a, b, c) {
        a.timeOfStartCall = (new Date).getTime();
        var d = c || m,
            e = d.document,
            f = Ba(d);
        f && (a.nonce = f);
        if ("help" == a.flow) {
            var g = r("document.location.href", d);
            !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
            g = !0;
            if (b && JSON && JSON.stringify) {
                var h = JSON.stringify(b);
                (g = 1200 >= h.length) && (a.psdJson = h)
            }
            g || (b = {
                invalidPsd: !0
            })
        }
        b = [a, b, c];
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        c = a.serverUri || "//www.google.com/tools/feedback";
        if (g = d.GOOGLE_FEEDBACK_START) g.apply(d, b);
        else {
            d = c + "/load.js?";
            for (var l in a) b =
                a[l], null != b && !La(b) && (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
            a = (e ? new kd(hd(e)) : Va || (Va = new kd)).createElement("SCRIPT");
            f && a.setAttribute("nonce", f);
            qc(a, Pe(d));
            e.body.appendChild(a)
        }
    }
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

    function Lh(a, b, c, d, e) {
        var f = r("yt.logging.errors.log");
        f ? f(a, b, c, d, e) : (f = y("ERRORS", []), f.push([a, b, c, d, e]), Ih("ERRORS", f))
    }

    function Mh(a) {
        Lh(a, "WARNING", void 0, void 0, void 0)
    }

    function Nh(a) {
        a instanceof Error ? Lh(a) : (a = La(a) ? JSON.stringify(a) : String(a), Mh(Oh(a, "RejectedPromiseError")))
    }

    function Oh(a, b) {
        var c = Error(a);
        c.name = b;
        return c
    };

    function Ph(a) {
        return a ? a.dataset ? a.dataset[Qh()] : a.getAttribute("data-loaded") : null
    }
    var Rh = {};

    function Qh() {
        return Rh.loaded || (Rh.loaded = "loaded".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        }))
    };

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

    function Yh(a, b) {
        var c = Zh();
        if (c) {
            var d = c.subscribe(a, function() {
                var e = arguments;
                var f = function() {
                    Vh[d] && b.apply(window, e)
                };
                try {
                    Xh[a] ? f() : Sh(f, 0)
                } catch (g) {
                    Lh(g)
                }
            }, void 0);
            Vh[d] = !0;
            Wh[a] || (Wh[a] = []);
            Wh[a].push(d);
            return d
        }
        return 0
    }

    function $h(a) {
        var b = Zh();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), Xa(a, function(c) {
            b.unsubscribeByKey(c);
            delete Vh[c]
        }))
    }

    function ai(a, b) {
        var c = Zh();
        c && c.publish.apply(c, arguments)
    }

    function bi(a) {
        var b = Zh();
        if (b)
            if (b.clear(a), a) ci(a);
            else
                for (var c in Wh) ci(c)
    }

    function Zh() {
        return r("ytPubsubPubsubInstance")
    }

    function ci(a) {
        Wh[a] && (a = Wh[a], Xa(a, function(b) {
            Vh[b] && delete Vh[b]
        }), a.length = 0)
    };
    var di = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        ei = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;

    function fi(a, b, c) {
        c = void 0 === c ? null : c;
        if (window.spf && spf.script) {
            c = "";
            if (a) {
                var d = a.indexOf("jsbin/"),
                    e = a.lastIndexOf(".js"),
                    f = d + 6; - 1 < d && -1 < e && e > f && (c = a.substring(f, e), c = c.replace(di, ""), c = c.replace(ei, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else gi(a, b, c)
    }

    function gi(a, b, c) {
        c = void 0 === c ? null : c;
        var d = hi(a),
            e = document.getElementById(d),
            f = e && Ph(e),
            g = e && !f;
        f ? b && b() : (b && (f = Yh(d, b), b = "" + (b[Ma] || (b[Ma] = ++Na)), ii[b] = f), g || (e = ji(a, d, function() {
            if (!Ph(e)) {
                var h = e;
                h && (h.dataset ? h.dataset[Qh()] = "true" : h.setAttribute("data-loaded", "true"));
                ai(d);
                Sh(Ra(bi, d), 0)
            }
        }, c)))
    }

    function ji(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = ed(document, "SCRIPT");
        e.id = b;
        e.onload = function() {
            c && setTimeout(c, 0)
        };
        e.onreadystatechange = function() {
            switch (e.readyState) {
                case "loaded":
                case "complete":
                    e.onload()
            }
        };
        d && e.setAttribute("nonce", d);
        qc(e, Pe(a));
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(e, a.firstChild);
        return e
    }

    function hi(a) {
        var b = document.createElement("a");
        nc(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + vc(a)
    }
    var ii = {};

    function ki() {
        this.loading = !1;
        this.g = null
    }

    function li(a) {
        var b = mi,
            c = y("BG_I", null),
            d = y("BG_IU", null),
            e = ni;
        d ? (b.loading = !0, fi(d, function() {
            b.loading = !1;
            if (window.botguard) oi(b, a, e);
            else {
                var f = hi(d),
                    g = document.getElementById(f);
                g && (bi(f), g.parentNode.removeChild(g));
                f = Error("Unable to load Botguard");
                f.params = "from " + d;
                Mh(f)
            }
        }, void 0)) : c && (eval(c), window.botguard ? oi(b, a, e) : Mh(Error("Unable to load Botguard from JS")))
    }

    function oi(a, b, c) {
        try {
            a.g = new window.botguard.bg(b)
        } catch (d) {
            Mh(d)
        }
        c && c(b)
    }
    ki.prototype.dispose = function() {
        this.g = null
    };

    function pi() {}

    function qi(a, b) {
        return ri(a, 1, b)
    };

    function si() {}
    ma(si, pi);

    function ri(a, b, c) {
        isNaN(c) && (c = void 0);
        var d = r("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Sh(a, c || 0)
    }

    function ti(a) {
        if (!isNaN(a)) {
            var b = r("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    }
    si.prototype.start = function() {
        var a = r("yt.scheduler.instance.start");
        a && a()
    };
    si.prototype.pause = function() {
        var a = r("yt.scheduler.instance.pause");
        a && a()
    };
    Ga(si);
    si.K();
    var ui = [],
        vi = !1;

    function wi() {
        if ("1" != u.Ta(y("PLAYER_CONFIG", {}), "args", "privembed")) {
            var a = function() {
                vi = !0;
                "google_ad_status" in window ? Ih("DCLKSTAT", 1) : Ih("DCLKSTAT", 2)
            };
            fi("//static.doubleclick.net/instream/ad_status.js", a);
            ui.push(qi(function() {
                if (!(vi || "google_ad_status" in window)) {
                    if (a) {
                        var b = "" + (a[Ma] || (a[Ma] = ++Na));
                        (b = ii[b]) && $h(b)
                    }
                    vi = !0;
                    Ih("DCLKSTAT", 3)
                }
            }, 5E3))
        }
    }

    function xi() {
        return parseInt(y("DCLKSTAT", 0), 10)
    };

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
        Bi = Ai.ytcsi && Ai.ytcsi.now ? Ai.ytcsi.now : Ai.performance && Ai.performance.timing && Ai.performance.now ? function() {
            return Ai.performance.timing.navigationStart + Ai.performance.now()
        } : function() {
            return (new Date).getTime()
        };
    var mi = new ki,
        Ci = !1,
        Di = 0,
        Ei = "";

    function ni(a) {
        A("botguard_periodic_refresh") ? Di = Bi() : A("botguard_always_refresh") && (Ei = a)
    }

    function Fi(a) {
        if (a) {
            if (mi.loading) return !1;
            if (A("botguard_periodic_refresh")) return 72E5 < Bi() - Di;
            if (A("botguard_always_refresh")) return Ei != a
        } else return !1;
        return !Ci
    }

    function Gi() {
        return !!mi.g
    }

    function Hi(a) {
        a = void 0 === a ? {} : a;
        var b = mi;
        a = void 0 === a ? {} : a;
        return b.g ? b.g.invoke(void 0, void 0, a) : null
    };

    function Ii() {
        var a = Ji;
        r("yt.ads.biscotti.getId_") || p("yt.ads.biscotti.getId_", a, void 0)
    }

    function Ki(a) {
        p("yt.ads.biscotti.lastId_", a, void 0)
    };

    function Li(a) {
        var b = [];
        u.forEach(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Ia(c) ? f = c : f = [c];
            Xa(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function Mi(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) try {
                var f = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
                    g = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                f in b ? Ia(b[f]) ? hb(b[f], g) : b[f] = [b[f], g] : b[f] = g
            } catch (l) {
                var h = Error("Error decoding URL component");
                h.params = "key: " + e[0] + ", value: " + e[1];
                "q" == e[0] ? Mh(h) : Lh(h)
            }
        }
        return b
    }

    function Ni(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), Mi(1 < a.length ? a[1] : a[0])) : {}
    }

    function Oi(a, b) {
        return Pi(a, b || {}, !0)
    }

    function Pi(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = Mi(e[1] || "");
        for (var f in b)
            if (c || !u.Qa(e, f)) e[f] = b[f];
        return we(a, e) + d
    };

    function Qi(a) {
        var b = Ri;
        a = void 0 === a ? r("yt.ads.biscotti.lastId_") || "" : a;
        b = Object.assign(Si(b), Ti(b));
        b.ca_type = "image";
        a && (b.bid = a);
        return b
    }

    function Si(a) {
        var b = {};
        b.dt = sf;
        b.flash = "0";
        a: {
            try {
                var c = a.g.top.location.href
            } catch (f) {
                a = 2;
                break a
            }
            a = c ? c === a.i.location.href ? 0 : 1 : 2
        }
        b = (b.frm = a, b);
        b.u_tz = -(new Date).getTimezoneOffset();
        var d = void 0 === d ? Oe : d;
        try {
            var e = d.history.length
        } catch (f) {
            e = 0
        }
        b.u_his = e;
        b.u_java = !!Oe.navigator && "unknown" !== typeof Oe.navigator.javaEnabled && !!Oe.navigator.javaEnabled && Oe.navigator.javaEnabled();
        Oe.screen && (b.u_h = Oe.screen.height, b.u_w = Oe.screen.width, b.u_ah = Oe.screen.availHeight, b.u_aw = Oe.screen.availWidth, b.u_cd =
            Oe.screen.colorDepth);
        Oe.navigator && Oe.navigator.plugins && (b.u_nplug = Oe.navigator.plugins.length);
        Oe.navigator && Oe.navigator.mimeTypes && (b.u_nmime = Oe.navigator.mimeTypes.length);
        return b
    }

    function Ti(a) {
        var b = a.g;
        try {
            var c = b.screenX;
            var d = b.screenY
        } catch (t) {}
        try {
            var e = b.outerWidth;
            var f = b.outerHeight
        } catch (t) {}
        try {
            var g = b.innerWidth;
            var h = b.innerHeight
        } catch (t) {}
        b = [b.screenLeft, b.screenTop, c, d, b.screen ? b.screen.availWidth : void 0, b.screen ? b.screen.availTop : void 0, e, f, g, h];
        c = a.g.top;
        try {
            var l = (c || window).document,
                n = "CSS1Compat" == l.compatMode ? l.documentElement : l.body;
            var q = (new ad(n.clientWidth, n.clientHeight)).round()
        } catch (t) {
            q = new ad(-12245933, -12245933)
        }
        l = q;
        q = {};
        n = new Tg;
        m.SVGElement &&
            m.document.createElementNS && n.set(0);
        c = Xe();
        c["allow-top-navigation-by-user-activation"] && n.set(1);
        c["allow-popups-to-escape-sandbox"] && n.set(2);
        m.crypto && m.crypto.subtle && n.set(3);
        m.TextDecoder && m.TextEncoder && n.set(4);
        n = Ug(n);
        q.bc = n;
        q.bih = l.height;
        q.biw = l.width;
        q.brdim = b.join();
        a = a.i;
        return q.vis = {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0, q.wgl = !!Oe.WebGLRenderingContext, q
    }
    var Ri = new function() {
        var a = window.document;
        this.g = window;
        this.i = a
    };
    p("yt.ads_.signals_.getAdSignalsString", function(a) {
        return Li(Qi(a))
    }, void 0);
    Sa();
    var Ui = void 0 !== XMLHttpRequest ? function() {
        return new XMLHttpRequest
    } : void 0 !== ActiveXObject ? function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } : null;

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

    function bj(a) {
        var b = window.location.search,
            c = pe(a),
            d = oe(ne(a)[5] || null);
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = Mi(b),
            f = {};
        Xa(Yi, function(g) {
            e[g] && (f[g] = e[g])
        });
        return Pi(a, f || {}, !1)
    }

    function aj(a, b) {
        var c = y("CORS_HEADER_WHITELIST") || {},
            d = pe(a);
        return d ? (c = c[d]) ? 0 <= Wa(c, b) : !1 : !0
    }

    function cj(a, b) {
        if (window.fetch && "XML" != b.format) {
            var c = {
                method: b.method || "GET",
                credentials: "same-origin"
            };
            b.headers && (c.headers = b.headers);
            a = dj(a, b);
            var d = ej(a, b);
            d && (c.body = d);
            b.withCredentials && (c.credentials = "include");
            var e = !1,
                f;
            fetch(a, c).then(function(g) {
                if (!e) {
                    e = !0;
                    f && window.clearTimeout(f);
                    var h = g.ok,
                        l = function(n) {
                            n = n || {};
                            var q = b.context || m;
                            h ? b.onSuccess && b.onSuccess.call(q, n, g) : b.onError && b.onError.call(q, n, g);
                            b.rb && b.rb.call(q, n, g)
                        };
                    "JSON" == (b.format || "JSON") && (h || 400 <= g.status && 500 > g.status) ? g.json().then(l, function() {
                        l(null)
                    }): l(null)
                }
            });
            b.dc && 0 < b.timeout && (f = Sh(function() {
                e || (e = !0, window.clearTimeout(f), b.dc.call(b.context || m))
            }, b.timeout))
        } else fj(a, b)
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
        b.La && 0 < b.timeout && (f = Sh(function() {
            e || (e = !0, g.abort(), window.clearTimeout(f), b.La.call(b.context || m, g))
        }, b.timeout));
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

    function hj(a, b, c) {
        var d = null;
        switch (a) {
            case "JSON":
                a = b.responseText;
                b = b.getResponseHeader("Content-Type") || "";
                a && 0 <= b.indexOf("json") && (d = JSON.parse(a));
                break;
            case "XML":
                if (b = (b = b.responseXML) ? ij(b) : null) d = {}, Xa(b.getElementsByTagName("*"), function(e) {
                    d[e.tagName] = jj(e)
                })
        }
        c && kj(d);
        return d
    }

    function kj(a) {
        if (La(a))
            for (var b in a)
                if ("html_content" == b || Hb(b, "_html")) {
                    var c = b;
                    var d = a[b];
                    var e = v("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");
                    rb(e);
                    rb(e);
                    d = kc(d, null);
                    a[c] = d
                } else kj(a[b])
    }

    function ij(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function jj(a) {
        var b = "";
        Xa(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
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
            a.onSuccess = function(e) {
                Wi(e) ? c(e) : d(new nj("Request failed, status=" + e.status, "net.badstatus", e))
            };
            a.onError = function(e) {
                d(new nj("Unknown request error", "net.unknown", e))
            };
            a.La = function(e) {
                d(new nj("Request timed out", "net.timeout", e))
            };
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
    oj.prototype.then = function(a, b, c) {
        return this.j ? this.j.then(a, b, c) : 1 === this.g && a ? (a = a.call(c, this.i), Od(a) ? a : pj(a)) : 2 === this.g && b ? (a = b.call(c, this.i), Od(a) ? a : qj(a)) : this
    };
    Nd(oj);

    function qj(a) {
        var b = new oj;
        a = void 0 === a ? null : a;
        b.g = 2;
        b.i = void 0 === a ? null : a;
        return b
    }

    function pj(a) {
        var b = new oj;
        a = void 0 === a ? null : a;
        b.g = 1;
        b.i = void 0 === a ? null : a;
        return b
    };

    function rj(a) {
        Ua.call(this, a.message || a.description || a.name);
        this.isMissing = a instanceof sj;
        this.isTimeout = a instanceof nj && "net.timeout" == a.errorCode;
        this.isCanceled = a instanceof ce
    }
    ma(rj, Ua);
    rj.prototype.name = "BiscottiError";

    function sj() {
        Ua.call(this, "Biscotti ID is missing from server")
    }
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

    function uj(a) {
        a = a.responseText;
        if (!Gb(a, ")]}'")) throw new sj;
        a = JSON.parse(a.substr(4));
        if (1 < (a.type || 1)) throw new sj;
        a = a.id;
        Ki(a);
        tj = pj(a);
        wj(18E5, 2);
        return a
    }

    function vj(a, b) {
        var c = new rj(b);
        Ki("");
        tj = qj(c);
        0 < a && wj(12E4, a - 1);
        throw c;
    }

    function wj(a, b) {
        Sh(function() {
            be(lj().then(uj, function(c) {
                return vj(b, c)
            }), Fa)
        }, a)
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
        Xa(y("ERRORS") || [], function(a) {
            Bj.apply(null, a)
        });
        Ih("ERRORS", [])
    }

    function Bj(a, b, c, d, e, f) {
        f = f || {};
        f.name = c || y("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
        f.version = d || y("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
        b = void 0 === b ? "ERROR" : b;
        e = void 0 === e ? !1 : e;
        b = void 0 === b ? "ERROR" : b;
        e = window && window.yterr || (void 0 === e ? !1 : e) || !1;
        if (!(!a || !e || 5 <= zj || (A("console_log_js_exceptions") && (e = a, c = [], c.push("Name: " + e.name), c.push("Message: " + e.message), e.hasOwnProperty("params") && c.push("Error Params: " + JSON.stringify(e.params)), c.push("File name: " + e.fileName), c.push("Stacktrace: " + e.stack),
                window.console.log(c.join("\n"), e)), e = a.stacktrace, c = a.columnNumber, a.hasOwnProperty("params") && (d = String(JSON.stringify(a.params)), f.params = d.substr(0, 500)), a = Oc(a), e = e || a.stack, d = a.lineNumber.toString(), isNaN(d) || isNaN(c) || (d = d + ":" + c), window.yterr && Ka(window.yterr) && window.yterr(a), yj[a.message] || 0 <= e.indexOf("/YouTubeCenter.js") || 0 <= e.indexOf("/mytube.js")))) {
            b = {
                De: {
                    a: "logerror",
                    t: "jserror",
                    type: a.name,
                    msg: a.message.substr(0, 250),
                    line: d,
                    level: b,
                    "client.name": f.name
                },
                Z: {
                    url: y("PAGE_NAME", window.location.href),
                    file: a.fileName
                },
                method: "POST"
            };
            f.version && (b["client.version"] = f.version);
            e && (b.Z.stack = e);
            for (var g in f) b.Z["client." + g] = f[g];
            if (g = y("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0))
                for (var h in g) b.Z[h] = g[h];
            fj(y("ECATCHER_REPORT_HOST", "") + "/error_204", b);
            yj[a.message] = !0;
            zj++
        }
    };
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

    function Qj() {
        window.clearTimeout(Jj);
        window.clearTimeout(Kj);
        Kj = 0;
        if (!u.isEmpty(Mj)) {
            for (var a in Mj) {
                var b = Ij[a];
                b && (Rj(a, b), delete Mj[a])
            }
            u.isEmpty(Mj) || Sj()
        }
    }

    function Tj() {
        var a = [];
        for (e in Mj) {
            var b = Oj[e] || {};
            Oj[e] = b;
            for (var c in Mj[e]) {
                var d = Uj(e, c);
                b.storedEventsCount = b.storedEventsCount || 0;
                b.storedEventsCount += d.length
            }
        }
        var e = Math.round(Bi());
        for (var f in Oj) b = Oj[f], b.eventType = f in Gj ? Gj[f] : "UNKNOWN_TYPE", c = Pj[f], b.metricIntervalMs = c ? e - c : e - NaN, a.push(b), Pj[f] = e, delete Oj[f];
        return a
    }

    function Sj() {
        A("web_gel_timeout_cap") && !Kj && (Kj = Sh(Qj, 6E4));
        window.clearTimeout(Jj);
        Jj = Sh(Qj, y("LOGGING_BATCH_TIMEOUT", zi("web_gel_debounce_ms", 1E4)))
    }

    function Uj(a, b) {
        b = void 0 === b ? "" : b;
        Mj[a] = Mj[a] || {};
        Mj[a][b] = Mj[a][b] || [];
        return Mj[a][b]
    }

    function Rj(a, b) {
        var c = Fj[a],
            d = Oj[a] || {};
        Oj[a] = d;
        var e = Math.round(Bi());
        for (n in Mj[a]) {
            var f = u.xc({
                context: Vj(b.Ea)
            });
            f[c] = Uj(a, n);
            d.dispatchedEventCount = d.dispatchedEventCount || 0;
            d.dispatchedEventCount += f[c].length;
            var g = Nj[n];
            if (g) a: {
                var h = n;
                if (g.videoId) var l = "VIDEO";
                else if (g.playlistId) l = "PLAYLIST";
                else break a;f.credentialTransferTokenTargetId = g;f.context = f.context || {};f.context.user = f.context.user || {};f.context.user.credentialTransferTokens = [{
                    token: h,
                    scope: l
                }]
            }
            delete Nj[n];
            f.requestTimeMs =
                e;
            if (g = y("EVENT_ID", void 0)) l = (y("BATCH_CLIENT_COUNTER", void 0) || 0) + 1, l > Cj && (l = 1), Ih("BATCH_CLIENT_COUNTER", l), g = {
                serializedEventId: g,
                clientCounter: l
            }, f.serializedClientEventId = g, Dj && Ej && A("log_gel_rtt_web") && (f.previousBatchInfo = {
                serializedClientEventId: Dj,
                roundtripMs: Ej
            }), Dj = g, Ej = 0;
            Wj(b, a, f, {
                retry: Hj.has(a),
                onSuccess: Qa(Xj, this, Bi())
            })
        }
        if (d.previousDispatchMs) {
            c = e - d.previousDispatchMs;
            var n = d.diffCount || 0;
            d.averageTimeBetweenDispatchesMs = n ? (d.averageTimeBetweenDispatchesMs * n + c) / (n + 1) : c;
            d.diffCount =
                n + 1
        }
        d.previousDispatchMs = e
    }

    function Xj(a) {
        Ej = Math.round(Bi() - a)
    };
    var Yj = 0,
        Zj = Dc ? "webkit" : Cc ? "moz" : Bc ? "ms" : Ac ? "o" : "";

    function ak() {
        var a = document;
        if ("visibilityState" in a) return a.visibilityState;
        var b = Zj + "VisibilityState";
        if (b in a) return a[b]
    }

    function bk(a, b) {
        var c;
        ab(a, function(d) {
            c = b[d];
            return !!c
        });
        return c
    }
    p("ytDomDomGetNextId", r("ytDomDomGetNextId") || function() {
        return ++Yj
    }, void 0);
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

    function dk(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        try {
            a = a || window.event;
            if (!a) return;
            this.event = a
        } catch (c) {
            return
        }
        for (var b in a) b in ck || (this[b] = a[b]);
        this.scale = a.scale;
        this.rotation = a.rotation;
        (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
        this.target =
            b;
        if (b = a.relatedTarget) try {
            b = b.nodeName ? b : null
        } catch (c) {
            b = null
        } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
        this.relatedTarget = b;
        this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
        this.keyCode = a.keyCode ? a.keyCode : a.which;
        this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
        this.altKey = a.altKey;
        this.ctrlKey = a.ctrlKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.g = a.pageX;
        this.i = a.pageY
    }

    function ek(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.g = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.i = a.clientY + b
        }
    }
    dk.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    dk.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    dk.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
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

    function ik(a) {
        a && ("string" == typeof a && (a = [a]), Xa(a, function(b) {
            if (b in fk) {
                var c = fk[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? jk() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete fk[b]
            }
        }))
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
        var g = f ? function(h) {
            h = new dk(h);
            if (!jd(h.relatedTarget, function(l) {
                    return l == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new dk(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = Kh(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), jk() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        fk[e] = [a, b, c, g, d];
        return e
    };
    var lk = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };

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
    mk.prototype.ma = function(a) {
        void 0 === a.g && ek(a);
        var b = a.g;
        void 0 === a.i && ek(a);
        this.g = new $c(b, a.i)
    };
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
    mk.prototype.qa = function() {
        window.clearInterval(this.na);
        ik(this.ea)
    };
    var nk = {};

    function ok(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Wb ? !0 : b.Wb;
        var c = void 0 === b.gc ? !1 : b.gc,
            d = void 0 === b.oc ? !1 : b.oc;
        null == r("_lact", window) && (b = parseInt(y("LACT"), 10), b = isFinite(b) ? Sa() - Math.max(b, 0) : -1, p("_lact", b, window), p("_fact", b, window), -1 == b && pk(), kk(document, "keydown", function(e) {
            return pk(d, e)
        }), kk(document, "keyup", function(e) {
            return pk(d, e)
        }), kk(document, "mousedown", function(e) {
            return pk(d, e)
        }), kk(document, "mouseup", function(e) {
            return pk(d, e)
        }), a && (c ? kk(window, "touchmove", function(e) {
            qk("touchmove", 200,
                d, e)
        }, {
            passive: !0
        }) : (kk(window, "resize", function(e) {
            qk("resize", 200, d, e)
        }), kk(window, "scroll", function(e) {
            qk("scroll", 200, d, e)
        }))), new mk(function() {
            qk("mouse", 100)
        }), kk(document, "touchstart", function(e) {
            return pk(d, e)
        }, {
            passive: !0
        }), kk(document, "touchend", function(e) {
            return pk(d, e)
        }, {
            passive: !0
        }))
    }

    function qk(a, b, c, d) {
        nk[a] || (nk[a] = !0, qi(function() {
            pk(c, d);
            nk[a] = !1
        }, b))
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
        return a && b && b.path ? !!cb(b.path, function(c) {
            return "YTM-CUSTOM-CONTROL" == c.tagName
        }) : !1
    }

    function sk() {
        var a = r("_lact", window);
        return null == a ? -1 : Math.max(Sa() - a, 0)
    };
    var tk = r("ytLoggingGelSequenceIdObj_") || {};
    p("ytLoggingGelSequenceIdObj_", tk, void 0);

    function uk(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {};
        e.eventTimeMs = Math.round(d.timestamp || Bi());
        e[a] = b;
        e.context = {
            lastActivityMs: String(d.timestamp ? -1 : sk())
        };
        A("log_sequence_info_on_gel_web") && d.ga && (a = e.context, b = d.ga, tk[b] = b in tk ? tk[b] + 1 : 0, a.sequence = {
            index: tk[b],
            groupKey: b
        }, d.Wd && delete tk[d.ga]);
        (d = d.oa) ? (a = {}, d.videoId ? a.videoId = d.videoId : d.playlistId && (a.playlistId = d.playlistId), Nj[d.token] = a, d = Uj("log_event", d.token)) : d = Uj("log_event");
        d.push(e);
        c && (Ij.log_event = new c);
        c = zi("web_logging_max_batch") ||
            100;
        e = Bi();
        d.length >= c ? Qj() : 10 <= e - Lj && (Sj(), Lj = e)
    };

    function vk(a) {
        this.g = a
    }

    function wk(a) {
        return new vk({
            trackingParams: a
        })
    }

    function xk(a, b) {
        return new vk({
            veType: a,
            youtubeData: b
        })
    }

    function yk(a) {
        var b = {};
        void 0 !== a.g.trackingParams ? b.trackingParams = a.g.trackingParams : (b.veType = a.g.veType, null != a.g.veCounter && (b.veCounter = a.g.veCounter), null != a.g.elementIndex && (b.elementIndex = a.g.elementIndex));
        void 0 !== a.g.dataElement && (b.dataElement = yk(a.g.dataElement));
        void 0 !== a.g.youtubeData && (b.youtubeData = a.g.youtubeData);
        return b
    }
    vk.prototype.toString = function() {
        return JSON.stringify(yk(this))
    };

    function zk(a, b) {
        this.version = a;
        this.args = b
    };

    function Ak(a, b) {
        this.topic = a;
        this.g = b
    }
    Ak.prototype.toString = function() {
        return this.topic
    };
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

    function Fk(a, b) {
        var c = Gk();
        c && c.publish.call(c, a.toString(), a, b)
    }

    function Hk(a) {
        var b = Ik,
            c = Gk();
        if (!c) return 0;
        var d = c.subscribe(b.toString(), function(e, f) {
            var g = r("ytPubsub2Pubsub2SkipSubKey");
            g && g == d || (g = function() {
                if (Ck[d]) try {
                    if (f && b instanceof Ak && b != e) try {
                        var h = b.g,
                            l = f;
                        if (!l.args || !l.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                        try {
                            if (!h.ha) {
                                var n = new h;
                                h.ha = n.version
                            }
                            var q = h.ha
                        } catch (t) {}
                        if (!q || l.version != q) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                        try {
                            f = Reflect.construct(h,
                                gb(l.args))
                        } catch (t) {
                            throw t.message = "yt.pubsub2.Data.deserialize(): " + t.message, t;
                        }
                    } catch (t) {
                        throw t.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + t.message, t;
                    }
                    a.call(window, f)
                } catch (t) {
                    Lh(t)
                }
            }, Ek[b.toString()] ? r("yt.scheduler.instance") ? qi(g) : Sh(g, 0) : g())
        });
        Ck[d] = !0;
        Dk[b.toString()] || (Dk[b.toString()] = []);
        Dk[b.toString()].push(d);
        return d
    }

    function Jk() {
        var a = Kk,
            b = Hk(function(c) {
                a.apply(void 0, arguments);
                Lk(b)
            });
        return b
    }

    function Lk(a) {
        var b = Gk();
        b && ("number" === typeof a && (a = [a]), Xa(a, function(c) {
            b.unsubscribeByKey(c);
            delete Ck[c]
        }))
    }

    function Gk() {
        return r("ytPubsub2Pubsub2Instance")
    };

    function Mk(a) {
        zk.call(this, 1, arguments);
        this.csn = a
    }
    ma(Mk, zk);
    var Ik = new Ak("screen-created", Mk),
        Nk = [],
        Pk = Ok,
        Qk = 0;

    function Rk(a, b, c, d) {
        c = {
            csn: b,
            parentVe: yk(c),
            childVes: Za(d, function(f) {
                return yk(f)
            })
        };
        d = ba(d);
        for (var e = d.next(); !e.done; e = d.next()) e = yk(e.value), (u.isEmpty(e) || !e.trackingParams && !e.veType) && Bj(Error("Child VE logged with no data"), "WARNING");
        d = {
            oa: void 0,
            ga: b
        };
        "UNDEFINED_CSN" == b ? Sk("visualElementAttached", c, d) : uk("visualElementAttached", c, a, d)
    }

    function Ok() {
        for (var a = Math.random() + "", b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 3;
        Ja(b);
        void 0 === a && (a = 0);
        if (!Nc)
            for (Nc = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Mc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Nc[h] && (Nc[h] = g)
                }
            }
        a = Mc[a];
        c = [];
        for (d = 0; d < b.length; d += 3) {
            var l = b[d],
                n = (e = d + 1 < b.length) ? b[d + 1] : 0;
            h = (f = d + 2 < b.length) ? b[d +
                2] : 0;
            g = l >> 2;
            l = (l & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64, e || (n = 64));
            c.push(a[g], a[l], a[n] || "", a[h] || "")
        }
        return c.join("")
    }

    function Sk(a, b, c) {
        Nk.push({
            we: a,
            payload: b,
            options: c
        });
        Qk || (Qk = Jk())
    }

    function Kk(a) {
        if (Nk) {
            for (var b = ba(Nk), c = b.next(); !c.done; c = b.next()) c = c.value, c.payload && (c.payload.csn = a.csn, uk(c.we, c.payload, null, c.options));
            Nk.length = 0
        }
        Qk = 0
    };

    function Vj(a) {
        a = {
            client: {
                hl: a.le,
                gl: a.ke,
                clientName: a.je,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.ie
            }
        };
        var b = window.devicePixelRatio;
        b && 1 != b && (a.client.screenDensityFloat = String(b));
        b = y("EXPERIMENTS_TOKEN", "");
        "" !== b && (a.client.experimentsToken = b);
        b = [];
        var c = y("EXPERIMENTS_FORCED_FLAGS", {});
        for (d in c) b.push({
            key: d,
            value: String(c[d])
        });
        var d = y("EXPERIMENT_FLAGS", {});
        for (var e in d) e.startsWith("force_") && void 0 === c[e] && b.push({
            key: e,
            value: String(d[e])
        });
        0 < b.length && (a.request = {
            internalExperimentFlags: b
        });
        y("DELEGATED_SESSION_ID") && !A("pageid_as_header_web") && (a.user = {
            onBehalfOfUser: y("DELEGATED_SESSION_ID")
        });
        return a
    }

    function Tk(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {
            "X-Goog-Visitor-Id": c.visitorData || y("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        b = c.Of || y("AUTHORIZATION");
        if (!b)
            if (a) b = "Bearer " + r("gapi.auth.getToken")().Nf;
            else a: {
                a = [];b = Qc(String(m.location.href));c = m.__OVERRIDE_SID;null == c && (c = (new Wc(document)).get("SID"));
                if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? m.__SAPISID : m.__APISID, null == b && (b = (new Wc(document)).get(c ? "SAPISID" : "APISID")), b)) {
                    c = c ? "SAPISIDHASH" :
                        "APISIDHASH";
                    var e = String(m.location.href);
                    b = e && b && c ? [c, Uc(Qc(e), b, a || null)].join(" ") : null;
                    break a
                }
                b = null
            }
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = y("SESSION_INDEX", 0), A("pageid_as_header_web") && (d["X-Goog-PageId"] = y("DELEGATED_SESSION_ID")));
        return d
    };

    function Uk(a, b, c, d, e) {
        Yc.set("" + a, b, c, "/", void 0 === d ? "youtube.com" : d, void 0 === e ? !1 : e)
    };

    function Vk(a) {
        var b = new Ke;
        (b = b.isAvailable() ? a ? new Rg(b, a) : b : null) || (a = new Lg(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.g = (a = b) ? new Kg(a) : null;
        this.i = document.domain || window.location.hostname
    }
    Vk.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.g) try {
            this.g.set(a, b, Sa() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(nd(b))
        } catch (f) {
            return
        } else e = escape(b);
        Uk(a, e, c, this.i)
    };
    Vk.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.g;
        if (!d) try {
            c = this.g.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = Yc.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    Vk.prototype.remove = function(a) {
        this.g && this.g.remove(a);
        var b = this.i;
        Yc.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    new Vk("yt.innertube");

    function Wk(a) {
        this.Ea = a || {
            innertubeApiKey: y("INNERTUBE_API_KEY", void 0),
            innertubeApiVersion: y("INNERTUBE_API_VERSION", void 0),
            ie: y("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            je: y("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            innertubeContextClientVersion: y("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
            le: y("INNERTUBE_CONTEXT_HL", void 0),
            ke: y("INNERTUBE_CONTEXT_GL", void 0),
            me: y("INNERTUBE_HOST_OVERRIDE", void 0) || "",
            ne: !!y("INNERTUBE_USE_THIRD_PARTY_AUTH", !1)
        }
    }

    function Wj(a, b, c, d) {
        !y("VISITOR_DATA") && .01 > Math.random() && Lh(Error("Missing VISITOR_DATA when sending innertube request."), "WARNING");
        c = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            Z: c,
            fc: "JSON",
            La: function() {
                d.La()
            },
            dc: d.La,
            onSuccess: function(g, h) {
                if (d.onSuccess) d.onSuccess(h)
            },
            hg: function(g) {
                if (d.onSuccess) d.onSuccess(g)
            },
            onError: function(g, h) {
                if (d.onError) d.onError(h)
            },
            gg: function(g) {
                if (d.onError) d.onError(g)
            },
            timeout: d.timeout,
            withCredentials: !0
        };
        var e = "",
            f = a.Ea.me;
        f && (e = f);
        f = Tk(a.Ea.ne || !1, e, d);
        Object.assign(c.headers, f);
        c.headers.Authorization && !e && (c.headers["x-origin"] = window.location.origin);
        a = Oi("" + e + ("/youtubei/" + a.Ea.innertubeApiVersion + "/" + b), {
            alt: "json",
            key: a.Ea.innertubeApiKey
        });
        try {
            A("use_fetch_for_op_xhr") ? cj(a, c) : (c.method = "POST", c.Z || (c.Z = {}), fj(a, c))
        } catch (g) {
            if ("InvalidAccessError" == g) Lh(Error("An extension is blocking network request."), "WARNING");
            else throw g;
        }
    };
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

    function el() {
        if ("hidden" == ak()) var a = "FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND";
        else "visible" == ak() && (a = "FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND", cl = null);
        a && fl(a)
    }

    function fl(a) {
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND" == a || "FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND" == a) {
            if (dl == a) return;
            dl = a
        }
        var b = 9E4 + 2E3 * Math.random();
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL" != a || !(sk() > b) && "visible" == ak()) {
            b = -1;
            cl && (b = Math.round(Bi() - cl));
            var c = String;
            var d = r("_fact", window);
            d = null == d || -1 == d ? -1 : Math.max(Sa() - d, 0);
            a = {
                firstActivityMs: c(d),
                clientDocumentNonce: al,
                index: String(bl),
                lastEventDeltaMs: String(b),
                trigger: a
            };
            uk("foregroundHeartbeat", a, Wk);
            p("_fact", -1, window);
            bl++;
            cl = Bi()
        }
    }

    function gl(a) {
        a && uk("foregroundHeartbeatScreenAssociated", {
            clientDocumentNonce: al,
            clientScreenNonce: a
        }, Wk)
    };

    function hl(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a
    }

    function il(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    }

    function jl(a) {
        return y(il(void 0 === a ? 0 : a), void 0)
    }
    p("yt_logging_screen.getRootVeType", jl, void 0);

    function kl(a) {
        a = void 0 === a ? 0 : a;
        var b = y(hl(a));
        b || 0 != a || (A("kevlar_client_side_screens") ? b = "UNDEFINED_CSN" : b = y("EVENT_ID"));
        return b ? b : null
    }
    p("yt_logging_screen.getCurrentCsn", kl, void 0);

    function ll(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (a !== y(hl(c)) || b !== y(il(c))) Ih(hl(c), a), Ih(il(c), b), 0 == c && (b = function() {
            setTimeout(function() {
                gl(a)
            }, 0)
        }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b())
    }
    p("yt_logging_screen.setCurrentScreen", ll, void 0);

    function ml(a, b, c, d) {
        d = void 0 === d ? !0 : d;
        var e = y("VALID_SESSION_TEMPDATA_DOMAINS", []),
            f = pe(window.location.href);
        f && e.push(f);
        f = pe(a);
        if (0 <= Wa(e, f) || !f && Gb(a, "/"))
            if (A("autoescape_tempdata_url") && (e = document.createElement("a"), nc(e, a), a = e.href), a && (a = qe(a), e = a.indexOf("#"), a = 0 > e ? a : a.substr(0, e))) d && (b.itct || b.ved) && (b.csn = b.csn || kl()), c ? (c = parseInt(c, 10), isFinite(c) && 0 < c && (d = "ST-" + vc(a).toString(36), b = b ? ve(b) : "", Uk(d, b, c || 5))) : (c = "ST-" + vc(a).toString(36), b = b ? ve(b) : "", Uk(c, b, 5))
    };
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

    function ol(a) {
        a = pe(a);
        (a = nl[a] && nl.hasOwnProperty(a)) || (a = yi("consent_url_override"), a = void 0 !== a ? String(a) : "");
        return a
    };

    function pl(a, b) {
        a.requestFullscreen ? a.requestFullscreen(b) : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.webkitEnterFullscreen && a.webkitEnterFullscreen()
    }

    function ql() {
        var a = rl,
            b;
        sl() ? tl() == a && (b = document) : b = a;
        b && (a = bk(["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"], b)) && a.call(b)
    }

    function ul() {
        var a = document;
        return cb(["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(b) {
            return "on" + b.toLowerCase() in a
        })
    }

    function sl() {
        return !!bk(["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"], document)
    }

    function tl() {
        var a = bk(["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"], document);
        return a ? a : null
    };

    function vl(a) {
        a = void 0 === a ? {} : a;
        Ka(a) && (a = {
            callback: a
        });
        a._c && a._c.jsl && a._c.jsl.h || u.extend(a, {
            _c: {
                jsl: {
                    h: y("GAPI_HINT_PARAMS", void 0)
                }
            }
        });
        if (a.gapiHintOverride || y("GAPI_HINT_OVERRIDE")) {
            var b = Ni(document.location.href).gapi_jsh;
            b && u.extend(a, {
                _c: {
                    jsl: {
                        h: b
                    }
                }
            })
        }
        jg("family_creation", a)
    };

    function wl(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = Wk;
        y("ytLoggingEventsDefaultDisabled", !1) && Wk == Wk && (d = null);
        uk(a, b, d, c)
    }

    function xl() {
        yl();
        Qj()
    }

    function yl() {
        A("log_web_meta") && Tj().forEach(function(a) {
            wl("delayedEventMetricCaptured", a)
        })
    };

    function zl(a, b) {
        Xa(b, function(c) {
            c = {
                csn: a,
                ve: yk(c),
                eventType: 1
            };
            var d = {
                oa: void 0,
                ga: a
            };
            "UNDEFINED_CSN" == a ? Sk("visualElementShown", c, d) : uk("visualElementShown", c, Wk, d)
        })
    }

    function Al(a, b) {
        Xa(b, function(c) {
            c = {
                csn: a,
                ve: yk(c),
                eventType: 4
            };
            var d = {
                oa: void 0,
                ga: a
            };
            "UNDEFINED_CSN" == a ? Sk("visualElementShown", c, d) : uk("visualElementShown", c, Wk, d)
        })
    }

    function Bl(a, b) {
        Xa(b, function(c) {
            var d = void 0;
            d = void 0 === d ? !1 : d;
            c = {
                csn: a,
                ve: yk(c),
                eventType: d ? 16 : 8
            };
            d = {
                oa: void 0,
                ga: a,
                Wd: d
            };
            "UNDEFINED_CSN" == a ? Sk("visualElementHidden", c, d) : uk("visualElementHidden", c, Wk, d)
        })
    };
    var Cl = r("ytLoggingLatencyUsageStats_") || {};
    p("ytLoggingLatencyUsageStats_", Cl, void 0);
    var Dl = 0;

    function El(a, b) {
        var c = Object.keys(a).join("");
        Fl("info_" + c + "_" + b) || (a.clientActionNonce = b, wl("latencyActionInfo", a))
    }

    function Fl(a) {
        Cl[a] = Cl[a] || {
            count: 0
        };
        var b = Cl[a];
        b.count++;
        b.time = Bi();
        Dl || (Dl = ri(Gl, 0, 5E3));
        if (5 < b.count) {
            if (6 == b.count && 1 > 1E5 * Math.random()) {
                b = 0 == a.indexOf("info") ? "WARNING" : "ERROR";
                var c = Error("CSI data exceeded logging limit with key");
                c.params = a;
                Bj(c, b)
            }
            return !0
        }
        return !1
    }

    function Gl() {
        var a = Bi(),
            b;
        for (b in Cl) 6E4 < a - Cl[b].time && delete Cl[b];
        Dl = 0
    };

    function Hl() {
        this.i = new Set;
        this.g = new Set;
        this.j = new Map
    }
    Hl.prototype.clear = function() {
        this.i.clear();
        this.g.clear();
        this.j.clear()
    };

    function Il(a, b) {
        var c = b.data && b.data.loggingDirectives ? b.data.loggingDirectives.trackingParams || "" : b.data && b.data.trackingParams || "";
        return b.visualElement ? b.visualElement : c ? wk(c) : b.parentElement ? Il(a, b.parentElement) : null
    }
    Ga(Hl);

    function Jl(a, b) {
        b = void 0 === b ? null : b;
        var c = {
            youThereEventType: a
        };
        b || (b = kl());
        b && (c.clientScreenNonce = b);
        wl("youThere", c)
    };
    var Kl = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    p("yt.msgs_", Kl, void 0);

    function B(a) {
        var b = void 0 === b ? {} : b;
        a = (a = a in Kl ? Kl[a] : void 0) || "";
        var c = {},
            d;
        for (d in b) {
            c.za = d;
            var e = function(f) {
                return function() {
                    return String(b[f.za])
                }
            }(c);
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

    function Ol(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        a && (c && (c = cc, c = !(c && 0 <= c.toLowerCase().indexOf("cobalt"))), c ? a && (b = Ub(Zb(a)), "about:invalid#zClosurez" === b ? a = "" : (b instanceof gc ? a = b : (d = "object" == typeof b, a = null, d && b.mb && (a = b.lb()), b = Jb(d && b.Y ? b.U() : String(b)), a = kc(b, a)), a = ic(a), a = encodeURIComponent(String(nd(a)))), /^[\s\xa0]*$/.test(a) || (a = dd("IFRAME", {
                src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
                style: "display:none"
            }), hd(a).body.appendChild(a))) : e ? gj(a, b, "POST", e, d) : y("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) ||
            d ? gj(a, b, "GET", "", d) : Pl(a, b) || Ql(a, b))
    }

    function Pl(a, b) {
        if (!Jh("web_use_beacon_api_for_ad_click_server_pings")) return !1;
        var c = oe(ne(a)[5] || null);
        return c && -1 != c.indexOf("/aclk") && "1" === Ae(a, "ae") && "1" === Ae(a, "act") ? Rl(a) ? (b && b(), !0) : !1 : !1
    }

    function Sl(a) {
        if (a)
            for (var b = 0; b < a.length; b++) Ol(a[b], void 0, void 0)
    }

    function Rl(a, b) {
        try {
            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, void 0 === b ? "" : b)) return !0
        } catch (c) {}
        return !1
    }

    function Ql(a, b) {
        var c = new Image,
            d = "" + Nl++;
        Ml[d] = c;
        c.onload = c.onerror = function() {
            b && Ml[d] && b();
            delete Ml[d]
        };
        c.src = a
    };

    function Tl(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Ul(a) || c.some(function(e) {
                return !Ul(e)
            })) throw Error("Only objects may be merged.");
        c = ba(c);
        for (d = c.next(); !d.done; d = c.next()) Vl(a, d.value);
        return a
    }

    function Vl(a, b) {
        for (var c in b)
            if (Ul(b[c])) {
                if (c in a && !Ul(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                Vl(a[c], b[c])
            } else if (Wl(b[c])) {
            if (c in a && !Wl(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            Xl(a[c], b[c])
        } else a[c] = b[c];
        return a
    }

    function Xl(a, b) {
        for (var c = ba(b), d = c.next(); !d.done; d = c.next()) d = d.value, Ul(d) ? a.push(Vl({}, d)) : Wl(d) ? a.push(Xl([], d)) : a.push(d);
        return a
    }

    function Ul(a) {
        return "object" === typeof a && !Array.isArray(a)
    }

    function Wl(a) {
        return "object" === typeof a && Array.isArray(a)
    };
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
    em.prototype.getDuration = function() {
        return this.duration || 0
    };
    em.prototype.getCurrentTime = function() {
        return this.currentTime || 0
    };
    em.prototype.i = function() {
        this.hasAttribute("controls") && this.setAttribute("controls", "true")
    };

    function hm() {
        this.g = [];
        this.i = [];
        this.j = []
    }
    Ga(hm);
    var im = r("ytPlayerUtilsVideoTagPoolInstance") || hm.K();
    p("ytPlayerUtilsVideoTagPoolInstance", im, void 0);
    k = hm.prototype;
    k.Sb = function(a) {
        if (!(this.g.length >= a)) {
            a -= this.g.length;
            for (var b = 0; b < a; b++) jm(this)
        }
    };

    function jm(a, b, c) {
        c = ed(document, c ? "AUDIO" : "VIDEO");
        for (var d in gm) c[d] = gm[d];
        kk(c, "loadeddata", Qa(c.i, c));
        Kc && 6 <= cm && kk(c, "webkitbeginfullscreen", Qa(c.play, c));
        a.i.push(c);
        b ? a.j.push(c) : km(a, c);
        return c
    }

    function km(a, b) {
        0 <= Wa(a.i, b) && !(0 <= Wa(a.g, b)) && (b.src || b.load(), eb(a.j, b) || a.g.push(b))
    }
    k.Fe = function(a, b) {
        if (this.g.length) return this.g.pop();
        var c = jm(this, a, b);
        a || eb(this.g, c);
        return c
    };
    k.ye = function(a) {
        if (a && 0 <= Wa(this.i, a)) {
            a.src && (Ll && 0 < a.readyState && (a.currentTime = Math.max(fm, 0)), a.removeAttribute("src"), a.load(), !a.g || !a.g.g() || a.g && a.g.Sa(null) || (a.g && a.g.dispose(), a.g = null));
            for (var b in fk) fk[b][0] == a && ik(b);
            eb(this.i, a);
            eb(this.j, a)
        }
    };
    k.ge = function(a) {
        return this.g.length >= (a || 1)
    };
    k.Nd = function() {
        for (var a = this.j.length - 1; 0 <= a; a--) km(this, this.j[a]);
        this.g.length == this.i.length && 4 <= this.g.length || (4 > this.i.length ? this.Sb(4) : (this.g = [], Xa(this.i, function(b) {
            km(this, b)
        }, this)))
    };
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
    k.get = function(a, b) {
        pm(a);
        qm(a);
        var c = void 0 !== nm[a] ? nm[a].toString() : null;
        return null != c ? c : b ? b : ""
    };
    k.set = function(a, b) {
        pm(a);
        qm(a);
        if (null == b) throw Error("ExpectedNotNull");
        nm[a] = b.toString()
    };

    function rm(a, b) {
        return !!((sm("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }

    function tm(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1),
            d = 1 << a % 31,
            e = sm(c) || 0;
        e = b ? e | d : e & ~d;
        0 == e ? delete nm[c] : (d = e.toString(16), nm[c] = d.toString())
    }
    k.remove = function(a) {
        pm(a);
        qm(a);
        delete nm[a]
    };
    k.save = function() {
        Uk(this.g, this.dump(), 63072E3)
    };
    k.clear = function() {
        u.clear(nm)
    };
    k.dump = function() {
        var a = [],
            b;
        for (b in nm) a.push(b + "=" + encodeURIComponent(String(nm[b])));
        return a.join("&")
    };

    function qm(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a);
    }

    function pm(a) {
        if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a);
    }

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

    function zm() {
        var a = 9E4 + 2E3 * Math.random();
        sk() > a || Am()
    }

    function Am() {
        var a = {
            metric: {
                staticContext: xm,
                dynamicContext: {
                    viewportHeightPixels: Math.max(document.documentElement ? document.documentElement.clientHeight || 0 : 0, window.innerHeight || 0),
                    viewportWidthPixels: Math.max(document.documentElement ? document.documentElement.clientWidth || 0 : 0, window.innerWidth || 0)
                },
                webMetric: wm,
                webApiSupport: ym
            }
        };
        um && (a.metric.webMetric.currentHeapKbytes = Math.round(um.usedJSHeapSize / 1E3));
        wl("systemHealthCaptured", a)
    };
    var Bm = window,
        Cm = Bm.performance || Bm.mozPerformance || Bm.msPerformance || Bm.webkitPerformance || {};

    function Dm(a) {
        if (Cm.getEntriesByType) {
            var b = Cm.getEntriesByType("paint");
            if (b = cb(b, function(d) {
                    return "first-paint" == d.name
                })) return Math.round(a.navigationStart + b.startTime)
        }
        if (a.msFirstPaint) return Math.max(0, a.msFirstPaint);
        if (b = window.chrome)
            if (b = b.loadTimes, Ka(b)) {
                b = b();
                var c = 1E3 * Math.min(b.requestTime || Infinity, b.startLoadTime || Infinity);
                c = Infinity === c ? 0 : a.navigationStart - c;
                return Math.max(0, Math.round(1E3 * b.firstPaintTime + c) || 0)
            }
        return 0
    };

    function Em() {
        var a = y("TIMING_TICK_EXPIRATION");
        a || (a = {}, Ih("TIMING_TICK_EXPIRATION", a));
        return a
    }

    function Fm() {
        var a = Em(),
            b;
        for (b in a) ti(a[b]);
        Ih("TIMING_TICK_EXPIRATION", {})
    };

    function Gm(a, b) {
        zk.call(this, 1, arguments)
    }
    ma(Gm, zk);

    function Hm(a, b) {
        zk.call(this, 1, arguments)
    }
    ma(Hm, zk);
    var Im = new Ak("aft-recorded", Gm),
        Jm = new Ak("timing-sent", Hm);

    function Km(a, b, c) {
        if (A("debug_csi_data")) {
            var d = r("yt.timing.csiData");
            d || (d = [], p("yt.timing.csiData", d, void 0));
            d.push({
                page: location.href,
                time: new Date,
                args: a
            })
        }
        d = "";
        for (var e in a) a.hasOwnProperty(e) && (d += "&" + e + "=" + a[e]);
        a = "/csi_204?" + d.substring(1);
        if (window.navigator && window.navigator.sendBeacon && b) {
            var f = void 0 === f ? "" : f;
            Rl(a, f) || Ol(a, void 0, void 0, void 0, f)
        } else Ol(a);
        Lm(!0, c)
    }

    function Mm(a) {
        var b = Nm(a),
            c = b.pbr,
            d = b.vc;
        b = b.pbs;
        return !!(c && d && b && c < d && d < b && Om(a).yt_pvis)
    }

    function Pm(a) {
        p("ytglobal.timingready_", a, void 0)
    }

    function Qm(a) {
        return !!r("yt.timing." + (a || "") + "pingSent_")
    }

    function Lm(a, b) {
        p("yt.timing." + (b || "") + "pingSent_", a, void 0)
    }

    function Rm(a) {
        return r("ytcsi." + (a || "") + "data_") || Sm(a)
    }

    function Om(a) {
        a = Rm(a);
        a.info || (a.info = {});
        return a.info
    }

    function Nm(a) {
        a = Rm(a);
        a.tick || (a.tick = {});
        return a.tick
    }

    function Tm(a) {
        var b = Rm(a).nonce;
        b || (b = Yk(), Rm(a).nonce = b);
        return b
    }

    function Sm(a) {
        var b = {
            tick: {},
            info: {}
        };
        p("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    };

    function Um(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack)
    }
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

    function dn(a, b, c) {
        c = cn(c);
        if (c.gelInfos) c.gelInfos["info_" + a] = !0;
        else {
            var d = {};
            c.gelInfos = (d["info_" + a] = !0, d)
        }
        if (a in Wm) {
            c = Wm[a];
            0 <= Wa(Xm, c) && (b = !!b);
            a in Zm && "string" === typeof b && (b = Zm[a] + b.toUpperCase());
            a = c.split(".");
            d = c = {};
            for (var e = 0; e < a.length - 1; e++) {
                var f = a[e];
                d[f] = {};
                d = d[f]
            }
            d[a[a.length - 1]] = b;
            return Tl({}, c)
        }
        0 <= Wa($m, a) || (b = new Um("Unknown label logged with GEL CSI"), b.params = a, Mh(b))
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

    function en(a) {
        a = cn(a);
        "gelInfos" in a || (a.gelInfos = {});
        return a.gelInfos
    };
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

    function ln(a) {
        mn("yt_sts", "n", void 0);
        jn("_start", a, void 0)
    }

    function mn(a, b, c) {
        Om(c)[a] = b;
        an(c) && (a = dn(a, b, c)) && an(c) && (Tl(en(c), a), c = Tm(c), El(a, c))
    }

    function nn(a) {
        var b = Nm(a);
        if (b.aft) return b.aft;
        a = y((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return NaN
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

    function pn() {
        switch (ak()) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3
        }
        return -1
    }

    function on(a) {
        Fm();
        if (!an(a)) {
            var b = Nm(a),
                c = Om(a),
                d = b._start;
            for (g in b)
                if (Gb(g, "_") && Ia(b[g])) {
                    var e = g.slice(1);
                    if (e in fn) {
                        var f = Za(b[g], function(q) {
                            return Math.round(q - d)
                        });
                        c["all_" + e] = f.join()
                    }
                    delete b[g]
                }
            f = y("CSI_SERVICE_NAME", "youtube");
            var g = {
                v: 2,
                s: f,
                action: y((a || "") + "TIMING_ACTION", void 0)
            };
            e = mn.srt;
            void 0 !== b.srt && delete c.srt;
            if (c.h5jse) {
                var h = window.location.protocol + r("ytplayer.config.assets.js");
                (h = Cm.getEntriesByName ? Cm.getEntriesByName(h)[0] : null) ? c.h5jse = Math.round(c.h5jse - h.responseEnd): delete c.h5jse
            }
            b.aft = nn(a);
            Mm(a) && "youtube" == f && (mn("yt_lt", "hot_bg", a), f = b.vc, h = b.pbs, delete b.aft, c.aft = Math.round(h - f));
            for (var l in c) "_" != l.charAt(0) && (g[l] = c[l]);
            b.ps = Bi();
            l = {};
            f = [];
            for (var n in b) "_" != n.charAt(0) && (h = Math.round(b[n] - d), l[n] = h, f.push(n + "." + h));
            g.rt = f.join(",");
            (b = r("ytdebug.logTiming")) && b(g, l);
            Km(g, !!c.ap, a);
            Fk(Jm, new Hm(l.aft + (e || 0), a))
        }
    }

    function qn(a) {
        if (!an(void 0) && !Qm(void 0)) {
            var b = y("CSI_SERVICE_NAME", "youtube");
            y("TIMING_ACTION", void 0) && b && (jn("aa", void 0, void 0), mn("ap", 1, void 0), mn("yt_fss", a, void 0), on(void 0))
        }
    }
    var rn = Qa(Cm.clearResourceTimings || Cm.webkitClearResourceTimings || Cm.mozClearResourceTimings || Cm.msClearResourceTimings || Cm.oClearResourceTimings || Fa, Cm);

    function sn() {
        var a = window.location.protocol,
            b = Cm.getEntriesByType("resource");
        b = Ya(b, function(c) {
            return 0 == c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = $a(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (jn("wffs", Math.round((Cm.timing || {}).navigationStart + b.startTime)), jn("wffe", Math.round((Cm.timing || {}).navigationStart + b.responseEnd)))
    }

    function tn(a, b) {
        var c = document.querySelector(a);
        if (!c) return !1;
        var d = "",
            e = c.nodeName;
        "SCRIPT" == e ? (d = c.src, d || (d = c.getAttribute("data-timing-href")) && (d = window.location.protocol + d)) : "LINK" == e && (d = c.href);
        Ba() && c.setAttribute("nonce", Ba());
        return d ? (c = Cm.getEntriesByName(d)) && c[0] && (c = c[0], d = Cm.timing.navigationStart, jn("rsf_" + b, d + Math.round(c.fetchStart)), jn("rse_" + b, d + Math.round(c.responseEnd)), void 0 !== c.transferSize && (d = Om(void 0), e = en(void 0), "rc" in d || "rc" in e || mn("rc", ""), 0 === c.transferSize)) ?
            !0 : !1 : !1
    };

    function un(a) {
        a = [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255, (a & 4278190080) >>> 24];
        var b = bb(a, function(c) {
            return c == (c & 255)
        });
        a[3] = (a[3] / 255).toFixed(3);
        if (!b) throw Error('"(' + a.join(",") + '") is not a valid RGBA color');
        return "rgba(" + a.join(",") + ")"
    };

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
    k.dispose = function() {
        this.i.disconnect();
        this.j.disconnect();
        this.g.clear()
    };
    k.wc = function() {
        this.i.disconnect();
        this.j.disconnect();
        this.g.clear()
    };
    k.de = function(a) {
        var b = this;
        a.forEach(function(c) {
            var d = b.g.get(c.target);
            if (d) {
                var e = c.isIntersecting;
                d = ba(d);
                for (var f = d.next(); !f.done; f = d.next()) {
                    var g = ba(f.value);
                    f = g.next().value;
                    g = g.next().value;
                    if ("visible" == f.state && e || "hidden" == f.state && !e) g(c.target, f.state), f.Da && b.Na({
                        element: c.target,
                        option: f
                    })
                }
            }
        })
    };
    k.ee = function(a) {
        var b = this;
        a.forEach(function(c) {
            var d = b.g.get(c.target);
            if (d && c.isIntersecting) {
                d = ba(d);
                for (var e = d.next(); !e.done; e = d.next()) {
                    var f = ba(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    "prescan" == e.state && (f(c.target, e.state), e.Da && b.Na({
                        element: c.target,
                        option: e
                    }))
                }
            }
        })
    };
    k.pb = function(a, b, c) {
        var d = (d = this.g.get(a)) && d.has(c) ? {
            element: a,
            option: c
        } : void 0;
        d || (this.g.has(a) || this.g.set(a, new Map), d = this.g.get(a), d.has(c) || d.set(c, b), "prescan" == c.state && this.j.observe(a), this.i.observe(a))
    };
    k.Na = function(a) {
        var b = this.g.get(a.element);
        b && b.has(a.option) && (b["delete"](a.option), "prescan" == a.option && this.j.unobserve(a.element), 0 == b.size && (this.g["delete"](a.element), this.i.unobserve(a.element)))
    };

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

    function yn(a, b, c, d, e) {
        var f = {};
        b && (f[b] = c);
        d ? f.errorType = d : e && (f.errorReason = e);
        wl(a, f);
        xl()
    }

    function zn(a, b, c, d) {
        var e = {};
        e.serializedTransactionFlowLoggingParams = b;
        c && (e.errorType = c);
        d && (e.errorMessage = d);
        wl(a, e);
        xl()
    }

    function An(a, b, c, d, e) {
        var f = {};
        b && (f.serializedYpcFamilyCreateLoggingParams = b);
        c && (f.inviteStatus = c);
        d ? f.createErrorType = d : e && (f.inviteErrorType = e);
        wl(a, f);
        xl()
    }

    function Bn(a) {
        a && zn("transactionFlowStarted", a)
    }

    function Cn(a) {
        a && zn("transactionFlowCancelled", a)
    }

    function Dn(a) {
        a && zn("transactionFlowSucceeded", a)
    }

    function En(a, b, c) {
        b && zn("transactionFlowFailed", b, a, c)
    }

    function Fn() {
        yn("ypcRedeemFlowSucceeded")
    }

    function Gn(a) {
        yn("ypcRedeemFlowFailed", void 0, void 0, void 0, a)
    }

    function Hn(a) {
        a && yn("ypcCancelFlowFailed", "serializedYpcCancelFlowLoggingParams", a, void 0, "YPC_ERROR_REASON_YPC_CANCEL_RECURRENCE_TRANSACTION_FAILURE")
    }

    function In(a) {
        a && yn("ypcResumeFlowSucceeded", "serializedYpcResumeFlowLoggingParams", a)
    }

    function Jn(a) {
        a && yn("ypcResumeFlowFailed", "serializedYpcResumeFlowLoggingParams", a, void 0, "YPC_ERROR_REASON_INNERTUBE_RESPONSE_FAILURE")
    }

    function Kn(a) {
        a && yn("ypcPauseFlowSucceeded", "serializedYpcPauseFlowLoggingParams", a)
    }

    function Ln(a) {
        a && yn("ypcPauseFlowFailed", "serializedYpcPauseFlowLoggingParams", a, void 0, "YPC_ERROR_REASON_INNERTUBE_RESPONSE_FAILURE")
    }

    function Mn(a, b, c) {
        b && (a = {
            eventType: a,
            serializedFixFopLoggingParams: b
        }, c && (a.errorType = c), wl("fixFopFlow", a), xl())
    }

    function Nn(a) {
        a && An("ypcFamilyCreateFlowCancelled", a)
    };

    function On() {
        var a = {};
        u.extend(a, {
            label: "mb-api-loading",
            pageName: y("PAGE_NAME")
        });
        a = ve(a);
        Ol("/gen_204?a=ypc-checkout" + (a ? "&" + a : ""), void 0)
    };

    function Pn() {
        this.g = null
    }
    Ga(Pn);
    Pn.prototype.load = function(a) {
        On();
        this.g = y("YPC_MB_URL", void 0);
        fi(this.g, Qa(function() {
            a && a()
        }, this))
    };

    function Qn(a, b, c, d, e, f, g) {
        Bn(g);
        a.load(Qa(function() {
            Rn(this, b, c, d, e, f, g)
        }, a))
    }

    function Sn(a, b, c) {
        var d = Pn.K();
        d.load(Qa(function() {
            try {
                Tn(this, r("payments.business.integration")).forWidget().fixInstrument().withEncryptedParameters(a).withIntegratorCallback(b).load(void 0, c)
            } catch (e) {
                throw Lh(e, void 0, void 0, void 0, !0), e;
            }
        }, d))
    }

    function Tn(a, b, c, d, e) {
        var f = b.mashupMode.popup("buyFlowDivId").usingDraggableDialog().usingPreferredWidth(600);
        A("enable_window_constrained_buy_flow_dialog") && (f = f.usingPopupStyle(r("payments.business.integration").PopupStyle.WINDOW_CONSTRAINED));
        e && (f = f.usingCloseCallback(e));
        b.bootstrap.fromPaymentsUrl(a.g);
        a = b.bootstrap.asMashupMode(f);
        c = c ? c : y("YPC_GB_LANGUAGE");
        a.usingGaiaIndex(d ? d : y("SESSION_INDEX")).usingLocale(c).usingDefaultActivityStatusChangeHandler().usingStyle(":md;pc=#444;ac=#065fd4").usingBaseZIndex(2E9);
        return a
    }

    function Rn(a, b, c, d, e, f, g) {
        try {
            var h = r("payments.business.integration"),
                l = h.standaloneContextAuthId.forUserId(),
                n = Tn(a, h, e, void 0, void 0);
            f && n.usingServerAnalyticsEventHandler(f);
            n.inStandaloneContext(l).buyFlow(function(q) {
                !q || q.integratorData && "" !== q.integratorData && !q.error || (null != q.error ? "-1" === String(q.error) ? Cn(g) : (En("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_FAILURE", g, q.debugCode), Lh(Error("PAYMENT_ERROR_MESSAGE::" + q.userVisibleErrorMessage + "  PAYMENT_ERROR_DETAILS::" + q.internalErrorDetails),
                    void 0, void 0, void 0, !0)) : (En("TRANSACTION_ERROR_TYPE_YPC_BUYFLOW_COMPLETE_EMPTY", g), Lh(Error("IntegratorData not present in BuyFlow Complete Callback"))));
                c && c(q)
            }).withEncryptedParameters(b).load(void 0, function(q) {
                En("TRANSACTION_ERROR_TYPE_LOAD_FAILURE", g, q ? q.debugCode : void 0);
                Lh(q, void 0, void 0, void 0, !0);
                d && d(q)
            })
        } catch (q) {
            throw Lh(q, void 0, void 0, void 0, !0), q;
        }
    };

    function Un(a, b) {
        var c = y("SESSION_INDEX");
        this.i = a;
        this.g = b;
        this.j = c
    }

    function Vn(a) {
        var b = Zd(),
            c = r("payments.business.integration.bootstrap"),
            d = r("payments.business.integration"),
            e = d.Style.create().withMaterialDesignStyle(),
            f = d.mashupMode.popup("instrument-manager");
        c.asMashupMode(f).usingUserIndex(a.j).usingDefaultActivityStatusChangeHandler().usingStyle(e).inStandaloneContext(d.standaloneContextAuthId.forUserId()).instrumentManager(a.i, 0 < a.g.length ? a.g : void 0, function(g) {
            var h = g.instrumentId;
            h ? b.resolve(h) : (h = r("payments.business.integration.scenario.InstrumentManager"),
                b.reject(g.errorCode && g.errorCode === h.FailureReason.CANCELLED ? "instrumentManagerCancelled" : "instrumentManagerCallbackError"))
        }).load(null, function(g) {
            Lh(g);
            b.reject("instrumentManagerLoadError")
        });
        return b.g
    };
    var Wn = /^(?:https:)?\/\/[0-9a-z-.]+\.(google|youtube)\.com\//;

    function Xn(a) {
        a = Wn.test(a) ? mc(v("Url of payment library"), a) : null;
        if (!window.payments && a) a = zg(a, {
            attributes: {
                "data-payments-main": "",
                id: "payment-lib"
            }
        });
        else {
            var b = Zd();
            a = b.g;
            b.resolve()
        }
        return a
    };

    function Yn(a) {
        return a.filter(function(b) {
            return "ypcGetCartEndpoint" in b
        })
    };

    function Zn(a) {
        if (!document.getElementById("gtm")) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
            });
            var b = ed(document, "SCRIPT");
            b.async = !0;
            qc(b, Ab(v("//www.googletagmanager.com/gtm.js?id=%{id}"), {
                id: a
            }));
            b.id = "gtm";
            a = document.getElementsByTagName("script");
            0 == a.length ? document.head.appendChild(b) : (a = a[0], a.parentNode.insertBefore(b, a))
        }
    }

    function $n(a) {
        if (a = JSON.parse(a)) window.dataLayer = window.dataLayer || [], window.dataLayer.push(a)
    };

    function ao(a) {
        a.logYpcFlowStartCommand && (a = a.logYpcFlowStartCommand, a.serializedTransactionFlowLoggingParams ? Bn(a.serializedTransactionFlowLoggingParams) : a.serializedYpcCancelFlowLoggingParams ? (a = a.serializedYpcCancelFlowLoggingParams) && yn("ypcCancelFlowStarted", "serializedYpcCancelFlowLoggingParams", a) : a.serializedYpcResumeFlowLoggingParams ? (a = a.serializedYpcResumeFlowLoggingParams) && yn("ypcResumeFlowStarted", "serializedYpcResumeFlowLoggingParams", a) : a.serializedYpcPauseFlowLoggingParams && (a = a.serializedYpcPauseFlowLoggingParams) &&
            yn("ypcPauseFlowStarted", "serializedYpcPauseFlowLoggingParams", a))
    }

    function bo(a) {
        a = a.logYpcFlowDismissCommand;
        a.serializedTransactionFlowLoggingParams ? Cn(a.serializedTransactionFlowLoggingParams) : a.serializedYpcCancelFlowLoggingParams ? (a = a.serializedYpcCancelFlowLoggingParams) && yn("ypcCancelFlowCancelled", "serializedYpcCancelFlowLoggingParams", a) : a.serializedYpcResumeFlowLoggingParams ? (a = a.serializedYpcResumeFlowLoggingParams) && yn("ypcResumeFlowCancelled", "serializedYpcResumeFlowLoggingParams", a) : a.serializedYpcPauseFlowLoggingParams && (a = a.serializedYpcPauseFlowLoggingParams) &&
            yn("ypcPauseFlowCancelled", "serializedYpcPauseFlowLoggingParams", a)
    };
    var co = v("https://clients2.google.com/gr/gr_sync.js");

    function eo() {}
    eo.prototype.init = function() {
        if (fo()) {
            var a = Zd();
            a.resolve();
            return a.g
        }
        return zg(Ab(co, {})).then(function() {
            if (!fo()) throw Error("RiskService loaded but risk object does not exists");
        }, function() {
            throw Error("RiskService loading is rejected, reason:");
        })
    };

    function go() {
        if (!fo()) return "";
        var a = window.google.gr;
        a.init({
            async: {
                schedule: "sync"
            },
            merchantId: "youtube"
        });
        a.start();
        a = a.finish();
        return null == a ? "" : a
    }

    function fo() {
        return null != window.google && null != window.google.gr
    };
    var ho = new Vk("yt.autonav");
    var io = ["commandMetadata", "webCommandMetadata", "rootVe"];

    function jo() {
        this.i = [];
        this.client = Wk;
        this.g = !1;
        this.j = new Map
    }
    var ko;

    function lo() {
        ko || (ko = new jo);
        return ko
    }

    function mo(a, b, c) {
        if (!a.g || c) {
            var d = kl(void 0);
            c || (c = (c = jl(0)) ? xk(c) : null);
            d && c && Rk(a.client, d, c, [b])
        } else a.i.push(b)
    }

    function no(a, b, c, d) {
        function e() {
            f = oo(a, b, d);
            g = !0;
            a.g = !1;
            a.j.forEach(function(n, q) {
                void 0 === n && mo(a, q, l)
            });
            a.i.forEach(function(n) {
                mo(a, n, l)
            })
        }
        var f = "",
            g = !1;
        a.g = !0;
        var h = kl(void 0);
        d || h || e();
        var l = xk(b);
        c = ba(c);
        for (h = c.next(); !h.done; h = c.next()) h.value.then(function(n) {
            g || e();
            n.csn = f;
            n.response && n.response.trackingParams && f && Rk(a.client, f, l, [wk(n.response.trackingParams)]);
            n.playerResponse && n.playerResponse.trackingParams && f && Rk(a.client, f, l, [wk(n.playerResponse.trackingParams)])
        })
    }

    function oo(a, b, c) {
        var d = kl(void 0),
            e;
        d && c && (e = {
            clientScreenNonce: d,
            visualElement: c
        });
        a = a.client;
        c = Pk();
        d = {
            csn: c,
            pageVe: yk(xk(b, void 0))
        };
        e && (d.implicitGesture = {
            parentCsn: e.clientScreenNonce,
            gesturedVe: yk(e.visualElement)
        });
        uk("screenCreated", d, a, {
            oa: void 0,
            ga: c
        });
        Fk(Ik, new Mk(c));
        ll(c, b, void 0);
        Hl.K().clear();
        return c
    };

    function po(a) {
        if (a) {
            var b = new Image;
            oc(b, a)
        }
    };
    var qo = Sg.K();

    function ro() {
        this.g = ""
    }
    ro.prototype.toString = function() {
        return this.g
    };

    function so(a) {
        var b = new ro;
        b.g = rb(a);
        return b
    }

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
            X: function(a, b, c) {
                return uc(c)
            },
            W: gc,
            da: ic
        }, uo[3] = {
            X: function(a, b, c) {
                return Zb(c).U()
            },
            W: Rb,
            da: Ub
        }, uo[4] = {
            X: function() {
                return "about:invalid#zClosurez"
            },
            W: vb,
            da: yb
        }, uo[5] = {
            X: function() {
                return "zClosurez"
            },
            W: ac,
            da: function(a) {
                if (a instanceof ac && a.constructor === ac && a.g === bc) return "";
                Ha(a);
                return "type_error:SafeStyle"
            }
        }, uo[7] = {
            X: function() {
                return " /*zClosurez*/ "
            },
            W: tb,
            da: function(a) {
                a instanceof tb && a.constructor === tb && a.i === ub ? a = a.g : (Ha(a), a = "type_error:SafeScript");
                return a.toString()
            }
        }, uo[8] = {
            X: function(a, b, c) {
                c = String(c).toLowerCase();
                a: {
                    var d = null;
                    (a = Fh[a]) && (d = a[b]);
                    if ("number" !== typeof d && ((a = Fh["*"]) && (d = a[b]), "number" !== typeof d)) {
                        b = !1;
                        break a
                    }
                    b = !0 === Eh[d][String(c).toLowerCase()]
                }
                return b ? c : "zClosurez"
            },
            W: null,
            da: null
        }, uo[9] = {
            X: function() {
                return " /*zClosurez*/ "
            },
            W: ob,
            da: rb
        }, uo[10] = {
            X: function(a, b, c) {
                return "id" != b && "name" != b || "" == c ? String(c) : "zClosurez"
            },
            W: ro,
            da: function(a) {
                if (!(a instanceof ro && a.constructor === ro)) throw Error("Unwrap non-TrustedId");
                return a.g
            }
        }, uo);

    function wo(a, b, c) {
        if (null === c) return c;
        var d = Bh(a.tagName, b, function() {
            throw Error("Contingent attribute/property lookups are not supported.");
        });
        if (null === d) return c;
        d = vo[d];
        if (d.W && c instanceof d.W) return d.da(c);
        if (d.W == ro && c instanceof ob) return rb(c);
        c = c && c.Y ? c.U() : c;
        return d.X ? d.X(a.tagName, b, String(c)) : c
    };
    var xo = [];

    function yo() {
        var a = xo.slice();
        xo.length = 0;
        a.forEach(function(b) {
            try {
                b()
            } catch (c) {
                Vd(c)
            }
        })
    }

    function zo(a) {
        0 == xo.length && requestAnimationFrame(function() {
            setTimeout(yo)
        });
        xo.push(a)
    };
    var Ao = Object.freeze ? Object.freeze(Object.create(null)) : {};

    function Bo(a, b, c, d) {
        a[b] != c && (a[b] = c, d())
    }

    function D(a) {
        try {
            return a()
        } catch (b) {
            return null
        }
    }

    function E(a) {
        try {
            return a()
        } catch (b) {
            return Mh(b), null
        }
    }

    function Co() {
        "scrollBehavior" in document.documentElement.style ? window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        }) : window.scrollTo(0, 0)
    }
    var Do = window.requestIdleCallback || function(a) {
        zo(function() {
            return setTimeout(a, 500)
        })
    };
    var Eo = {},
        Fo = null,
        Go = "";

    function Ho() {
        return Eo
    }

    function Io(a) {
        (Eo = a) && a.response && a.response.guideResponse && (Fo = a.response.guideResponse)
    };

    function F() {
        return window.getPlayer ? window.getPlayer() : null
    };
    var Jo = !1,
        Ko = !1;

    function Lo(a) {
        a.program && Ih({
            BG_P: a.program
        });
        a.interpreterUrl && Ih({
            BG_IU: a.interpreterUrl
        });
        A("mweb_c3_revert_botguard_interpreterScript") && a.interpreter ? Ih({
            BG_I: a.interpreter
        }) : a.interpreterScript && Ih({
            BG_I: a.interpreterScript
        });
        a = r("yt.abuse.player.invokeBotguard") || Hi;
        p("yt.abuse.player.botguardInitialized", r("yt.abuse.player.botguardInitialized") || Gi, void 0);
        p("yt.abuse.player.invokeBotguard", a, void 0);
        p("yt.abuse.dclkstatus.checkDclkStatus", xi, void 0);
        a = y("BG_P", void 0);
        Fi(a) && (y("BG_I") ||
            y("BG_IU")) && (Ci = !0, li(a));
        wi();
        Ko = !0
    }

    function Mo(a) {
        return E(function() {
            return a.attestation.playerAttestationRenderer.botguardData
        })
    }

    function No() {
        var a = Eo;
        if (a && a.response && a.response.playerResponse) {
            var b = Mo(a.response.playerResponse);
            b && setTimeout(function() {
                return Lo(b)
            }, 1E3)
        }
    }

    function Oo(a) {
        1 !== a.detail.state || Jo || (Jo = !0, No())
    }

    function Po() {
        No()
    }

    function Qo() {
        Ko = Jo = !1
    }

    function Ro() {
        if (!Ko && Jo) {
            var a = Eo;
            a && a.response && a.response.playerResponse && (a = Mo(a.response.playerResponse)) && Lo(a)
        }
    };
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

    function So() {
        window.kaiOsLauncherApi && E(function() {
            return kaiOsLauncherApi.sendCloseKaiOsAppMessage()
        })
    };
    ah[Vg["default"]] = function(a, b, c) {
        var d = "$" != b[b.length - 1];
        c = wo(a, b, c);
        d ? a[b] = c : $g(a, b.slice(0, -1), null == c ? null : String(c))
    };

    function To(a, b) {
        var c = b && b.key,
            d = oh;
        d[0] = a;
        d[1] = c;
        d[2] = void 0;
        for (var e in b) c = b[e], d = ph, d.push(e), d.push(c);
        e = oh;
        sh(e[0], e[1]);
        kh = jh;
        jh = null;
        c = kh;
        d = gh(c, void 0);
        var f = e[2];
        if (!d.j && (d.j = !0, f && f.length)) {
            var g = d.g;
            if (g && g.length) {
                for (g = 0; g < f.length; g += 2) Ah[f[g]] = g + 1;
                g = d.g || (d.g = Zg(0));
                for (var h = 0, l = 0; l < g.length; l += 2) {
                    var n = g[l],
                        q = g[l + 1],
                        t = Ah[n];
                    t ? f[t] === q && delete Ah[n] : (g[h] = n, g[h + 1] = q, h += 2)
                }
                Yg(g, h);
                for (var x in Ah) bh(c, x, f[Ah[x]]), delete Ah[x]
            } else
                for (x = 0; x < f.length; x += 2) bh(c, f[x], f[x + 1])
        }
        x = ph;
        d = d.g || (d.g = Zg(x.length));
        g = !d.length;
        for (f = 0; f < x.length; f += 2) {
            h = x[f];
            if (g) d[f] = h;
            else if (d[f] !== h) break;
            l = x[f + 1];
            if (g || d[f + 1] !== l) d[f + 1] = l, yh(c, h, l)
        }
        if (f < x.length || f < d.length) {
            for (f = g = f; f < d.length; f += 2) zh[d[f]] = d[f + 1];
            for (f = g; f < x.length; f += 2) g = x[f], h = x[f + 1], zh[g] !== h && yh(c, g, h), d[f] = g, d[f + 1] = h, delete zh[g];
            Yg(d, x.length);
            for (var z in zh) yh(c, z, void 0), delete zh[z]
        }
        z = xh;
        xh = c = wh.length;
        for (d = z; d < c; d += 4)(0, wh[d])(wh[d + 1], wh[d + 2], wh[d + 3]);
        xh = z;
        Yg(wh, z);
        Yg(x, 0);
        Yg(e, 0)
    }

    function Uo(a, b) {
        a ? b() : jh = kh.lastChild
    }

    function Vo(a, b) {
        var c = kh;
        c._playlistPanelVideoData == a ? jh = kh.lastChild : (c._playlistPanelVideoData = a, b())
    };

    function H(a, b, c) {
        c = void 0 === c ? Fa : c;
        To(a, b);
        c(kh);
        rh()
    }

    function Wo(a) {
        var b = a.toString().toLowerCase();
        return function(c, d) {
            H(b, c, d)
        }
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

    function mp(a, b, c) {
        var d = a.g;
        b = a.i || b(a, function() {
            uh(a, a.i.F, a.g)
        }, c);
        var e = b.F,
            f = void 0 === b.ia ? Fa : b.ia,
            g = void 0 === b.Ob ? Fa : b.Ob;
        d && f(d, c);
        e(c);
        g(d, c);
        a.i = b;
        a.g = c
    }

    function np(a, b) {
        var c = Wo(new nb(a));
        return function(d, e) {
            c(e, function(f) {
                mp(f, b, d)
            })
        }
    };
    var op = new Set;

    function pp(a, b) {
        var c = this;
        this.D = a;
        this.C = b;
        this.g = [];
        this.j = !1;
        window.addEventListener("touchmove", Qa(this.i, this));
        window.addEventListener("touchend", Qa(this.i, this));
        var d = new Fe(Qa(this.i, this), 100);
        window.addEventListener("scroll", function() {
            d.Va()
        }, !0);
        window.addEventListener("resize", Qa(this.i, this));
        window.addEventListener("state-navigatestart", function() {
            c.g = []
        });
        window.addEventListener("state-navigateend", Qa(this.i, this))
    }
    pp.prototype.observe = function(a) {
        this.g.includes(a) || this.g.push(a)
    };

    function qp(a, b) {
        a.g = a.g.filter(function(c) {
            return c !== b
        })
    }
    pp.prototype.i = function() {
        var a = this;
        this.j || (zo(function() {
            rp(a)
        }), this.j = !0)
    };

    function rp(a) {
        var b = (1 + a.D) * (document.documentElement.clientHeight || window.innerHeight);
        a.g = a.g.filter(function(c) {
            var d = c.getBoundingClientRect();
            (d = b > d.top && !!d.height) && a.C(c);
            return !d && c.parentNode
        });
        a.j = !1
    };

    function sp() {
        vn.call(this);
        this.g = new pp(0, function(a) {
            a.__visibilityCallback && "function" === typeof a.__visibilityCallback && a.__visibilityCallback(a, "visible")
        })
    }
    ma(sp, vn);
    sp.prototype.pb = function(a, b, c) {
        c.Da && "visible" == c.state && ("function" !== typeof b ? Mh(Error("Visibility callback was not a function, it is a " + typeof b + ".")) : (a.__visibilityCallback = b, this.g.observe(a)))
    };
    sp.prototype.Na = function(a) {
        delete a.element.__visibilityCallback;
        qp(this.g, a.element)
    };
    sp.prototype.dispose = function() {
        this.g.g = []
    };
    var tp = !1,
        up = null,
        vp = [];

    function wp(a, b, c) {
        if (!tp || up) up ? up.pb(a, b, c) : vp.push({
            element: a,
            ib: b,
            option: c
        })
    }

    function xp(a) {
        up ? up.Na(a) : vp = vp.filter(function(b) {
            return b.element != a.element || b.option != a.option
        })
    }

    function yp(a) {
        up || tp || (tp = !0, (up = a()) && vp.forEach(function(b) {
            wp(b.element, b.ib, b.option)
        }), vp.length = 0)
    }
    window.addEventListener("state-navigateend", function() {
        up ? up.wc() : vp.length = 0
    });
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

    function Cp(a, b) {
        a.trackedParams && a.trackedParams != b && a.visibilityMonitorKeys && a.visibilityMonitorKeys.forEach(function(c) {
            xp({
                element: a,
                option: c
            })
        })
    }

    function Dp(a, b, c) {
        var d = b.trackingParams;
        b.visibility && b.visibility.types && 0 != (Number(b.visibility.types) & 4) && (wp(a, function() {
            d && Al(c, [wk(d)])
        }, Ap), a.visibilityMonitorKeys = [Ap]);
        b.visibility && b.visibility.types && 0 != (Number(b.visibility.types) & 8) && (wp(a, function() {
            d && Bl(c, [wk(d)])
        }, Bp), a.visibilityMonitorKeys[a.visibilityMonitorKeys.length] = Bp)
    }

    function Ep(a, b) {
        var c = kl();
        if (c)
            if (A("mweb_stt_logging") && a.visualElement && !b) Fp(a, a.visualElement, c);
            else if (b) {
            var d = b.loggingDirectives ? b.loggingDirectives.trackingParams : b.trackingParams;
            !d || a.trackedParams && a.trackedParams == b.trackingParams || (Cp(a, d), b.loggingDirectives ? Dp(a, b.loggingDirectives, c) : (Fp(a, wk(d), c), a.visibilityMonitorKeys = [zp]), a.trackedParams = d)
        }
    }

    function Fp(a, b, c) {
        wp(a, function() {
            zl(c, [b])
        }, zp)
    }

    function Gp() {
        up && up.dispose();
        vp.length = 0
    }

    function Hp() {
        "IntersectionObserver" in window ? yp(function() {
            return new wn
        }) : yp(function() {
            return new sp
        });
        window.addEventListener("state-responsestart", Gp)
    };

    function Ip(a) {
        var b = kl();
        if (b && a) {
            a = {
                csn: b,
                ve: yk(wk(a)),
                gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
            };
            var c = {
                oa: void 0,
                ga: b
            };
            "UNDEFINED_CSN" == b ? Sk("visualElementGestured", a, c) : uk("visualElementGestured", a, Wk, c)
        }
    };
    var K = !!y("MWEB_USE_SPRITE", void 0);

    function Jp(a, b, c, d) {
        H("svg", {
            viewBox$: "0 0 " + a + " " + (void 0 === c ? a : c),
            preserveAspectRatio$: "xMidYMid meet",
            fill$: "" + (void 0 === d ? "" : d)
        }, b)
    }

    function L(a, b) {
        Jp(a, function() {
            H("path", {
                d$: b
            })
        })
    }

    function M(a) {
        J({
            className: "sprite_button SPRITE_" + a
        })
    }

    function Kp() {
        K ? M("dislike") : L(24, "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z")
    }

    function Lp() {
        K ? M("dismissal") : L(24, "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")
    }

    function Mp() {
        K ? M("like") : L(24, "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z")
    }

    function Np() {
        K ? M("logo") : Jp(67, function() {
            H("path", {
                d$: "M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31 c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56 C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30 S64.31,19.77,63,14.87z"
            });
            H("polygon", {
                fill$: "#FFFFFF",
                class$: "logo-arrow",
                points$: "26.6,39.43 42.93,30 26.6,20.57"
            })
        }, 60)
    }

    function Op() {
        K ? M("more_vert") : L(24, "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")
    }

    function Pp() {
        K ? M("open_in_new") : L(24, "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z")
    }

    function Qp() {
        K ? M("play_all") : L(24, "M8 5v14l11-7z")
    }

    function Rp() {
        K ? M("privacy_private") : L(24, "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z")
    }

    function Sp() {
        K ? M("share_arrow") : L(24, "M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z")
    }
    var Tp = {
            ACCOUNT_BOX: function() {
                K ? M("account_box") : L(24, "M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z")
            },
            ACCOUNT_CIRCLE: function() {
                K ? M("account_circle") : L(24, "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z")
            },
            ADD_TO_PLAYLIST: function() {
                K ? M("add_to_playlist") : L(24, "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z")
            },
            ACCOUNT_LINKED: function() {
                K ? M("account_linked") : Jp(24, function() {
                    H("path", {
                        d$: "M 17.919928,14.606013 C 16.93056,14.80302 16.03686,15.265429 15.316173,15.915895 L 18.004738,9.5 l 4,0 -4.08481,5.106013 z M 12.002369,8 7.5,8 l 2,-4 2.502369,0 2.502369,0 2,4 -4.502369,0 z M 5,4 8,4 6,8 2,8 5,4 z M 6,9.5 10.4,20 2,9.5 l 4,0 z m 1.5,0 4.5,0 L 12,21 7.5,9.5 z M 19.004738,4 l 3,4 -4,0 -2,-4 3,0 z m -2.5,5.5 -4.5,11.5 0,-11.5 4.5,0 z"
                    });
                    H("path", {
                        d$: "m 19,24 c -2.209139,0 -4,-1.790861 -4,-4 0,-2.209139 1.790861,-4 4,-4 2.209139,0 4,1.790861 4,4 0,2.209139 -1.790861,4 -4,4 z m -0.249982,-3.911591 -1.251249,-1.213683 -1.044374,1.0767 2.313589,2.244128 2.981617,-2.992448 -1.062582,-1.058736 -1.937001,1.944039 z"
                    })
                })
            },
            ACCOUNT_SOME_LINKED: function() {
                K ? M("account_some_linked") : L(24, "M17.919928,14.6060133 C16.9305602,14.80302 16.0368598,15.2654293 15.3161733,15.9158946 L18.0047384,9.5 L22.0047384,9.5 L17.919928,14.6060133 Z M12.0047384,8 L7.5,8 L9.5,4 L12.0047384,4 L14.5047384,4 L16.5047384,8 L12.0047384,8 Z M5,4 L8,4 L6,8 L2,8 L5,4 Z M6,9.5 L10.3999996,20 L2,9.5 L6,9.5 Z M7.5,9.5 L12,9.5 L12,21 L7.5,9.5 Z M19.0047384,4 L22.0047384,8 L18.0047384,8 L16.0047384,4 L19.0047384,4 Z M16.5047384,9.5 L12.0047384,21 L12.0047384,9.5 L16.5047384,9.5 Z M19,24 C16.790861,24 15,22.209139 15,20 C15,17.790861 16.790861,16 19,16 C21.209139,16 23,17.790861 23,20 C23,22.209139 21.209139,24 19,24 Z M17,19.25 L17,20.75 L21,20.75 L21,19.25 L17,19.25 Z")
            },
            ACCOUNT_UNLINKED: function() {
                K ? M("account_unlinked") : L(24, "M12.0023692,8 L7.5,8 L9.5,4 L12.0023692,4 L14.5047384,4 L16.5047384,8 L12.0023692,8 Z M5,4 L8,4 L6,8 L2,8 L5,4 Z M6,9.5 L10.3999996,20 L2,9.5 L6,9.5 Z M7.5,9.5 L12,9.5 L12,21 L7.5,9.5 Z M19.0047384,4 L22.0047384,8 L18.0047384,8 L16.0047384,4 L19.0047384,4 Z M18.0047384,9.5 L22.0047384,9.5 L13.6047388,20 L18.0047384,9.5 Z M16.5047384,9.5 L12.0047384,21 L12.0047384,9.5 L16.5047384,9.5 Z")
            },
            ARROW_DROP_DOWN: function() {
                K ? M("arrow_drop_down") : L(24, "M7 10l5 5 5-5z")
            },
            ARROW_DROP_UP: function() {
                K ? M("arrow_drop_up") : L(24, "M7 14l5-5 5 5z")
            },
            AVATAR_CIRCLE_BLUE: function() {
                K ? M("account_circle_blue") : Jp(96, function() {
                    H("circle", {
                        fill$: "#C6DAFC",
                        cx$: "48",
                        cy$: "48",
                        r$: "48"
                    });
                    H("path", {
                        fill$: "#5E97F6",
                        d$: "M48,23c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C63,29.72,56.28,23,48,23z"
                    });
                    H("path", {
                        fill$: "#5E97F6",
                        d$: "M48,61c-10.33,0-31,5.17-31,15.5v8.13C25.36,91.72,36.18,96,48,96s22.64-4.28,31-11.37V76.5      C79,66.17,58.33,61,48,61z"
                    })
                })
            },
            AVATAR_LOGGED_OUT: function() {
                K ? M("avatar_logged_out") : L(24, "M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z")
            },
            ARROW_BACK: function() {
                K ? M("arrow_back") : Jp(24, function() {
                    H("path", {
                        d$: "M0 0h24v24H0z",
                        fill$: "none"
                    });
                    H("path", {
                        d$: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                    })
                })
            },
            CHECK: function() {
                K ? M("check") : L(24, "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z")
            },
            CHECK_BLUE: function() {
                K ? M("check_blue") : Jp(24, function() {
                    H("path", {
                        d$: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
                        fill$: "#1679C5"
                    })
                })
            },
            CHECK_CIRCLE_THICK: function() {
                K ? M("check_circle_thick") : L(24, "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10    S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z")
            },
            CHEVRON_RIGHT: function() {
                K ? M("chevron_right") : L(24, "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")
            },
            CLOSE: Lp,
            COMMENT: function() {
                K ? M("comment") : L(24, "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z")
            },
            CONSENT_SHIELD: function() {
                K ? M("consent_shield") : Jp(24, function() {
                    H("path", {
                        fill$: "#4285F4",
                        d$: "M12 24c6.264-2.945 8.227-8.545 8.8-12.396.12-.813.2-2.085.2-2.604V3.75L12 0 3 3.75V9c0 .52.08 1.79.2 2.604.573 3.85 2.536 9.45 8.8 12.396z"
                    });
                    H("circle", {
                        cx$: "12",
                        cy$: "11",
                        r$: "6",
                        overflow$: "visible",
                        fill$: "#3362B5"
                    });
                    H("path", {
                        fill$: "#FFF",
                        d$: "M17 16.063c-1.17 1.434-2.975 2.354-5 2.354s-3.83-.92-5-2.354v-.7c0-1.277 2.324-2.316 5-2.363 2.676.046 5 1.086 5 2.363v.7zm-5-4.313c1.242 0 2.25-1.006 2.25-2.25 0-1.242-1.008-2.25-2.25-2.25S9.75 8.258 9.75 9.5c0 1.244 1.008 2.25 2.25 2.25z"
                    })
                })
            },
            DELETE: function() {
                K ? M("delete") : L(24, "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z")
            },
            DESKTOP: function() {
                K ? M("desktop") : L(24, "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z")
            },
            DISLIKE: Kp,
            DISLIKE_COMMENT: function() {
                K ? M("dislike_comment") : Kp()
            },
            DISMISSAL: Lp,
            DISMISSAL_BLACK: function() {
                K ? M("dismissal_black") : Jp(24, function() {
                    H("path", {
                        fill$: "#757575",
                        d$: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    })
                })
            },
            EDIT: function() {
                K ? M("edit") : L(24, "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")
            },
            EXIT_TO_APP: function() {
                K ? M("expand_to_app") : L(24, "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z")
            },
            EXPAND_LESS: function() {
                K ? M("expand_less") : L(24, "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z")
            },
            EXPAND_MORE: function() {
                K ? M("expand_more") : L(24, "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z")
            },
            EXTERNAL_LINK: Pp,
            FAB_UPLOAD: function() {
                K ? M("fab_upload") : L(24, "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z")
            },
            FEEDBACK: function() {
                K ? M("feedback") : L(24, "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z")
            },
            FLAG: function() {
                K ? M("flag") : L(24, "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z")
            },
            FULLSCREEN: function() {
                K || L(24, "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z")
            },
            FULLSCREEN_EXIT: function() {
                K || L(24, "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z")
            },
            FULL_HEART: function() {
                K ? M("full_heart") : L(24, "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z")
            },
            GEAR: function() {
                K || Jp(20, function() {
                    H("path", {
                        d$: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                    })
                })
            },
            GOOGLE_LOGO: function() {
                K ? M("google_logo") : Jp(24, function() {
                    H("path", {
                        fill$: "#4285F4",
                        d$: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    });
                    H("path", {
                        fill$: "#34A853",
                        d$: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    });
                    H("path", {
                        fill$: "#FBBC05",
                        d$: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    });
                    H("path", {
                        fill$: "#EA4335",
                        d$: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    });
                    H("path", {
                        fill$: "none",
                        d$: "M1 1h22v22H1z"
                    })
                })
            },
            HAPPY: function() {
                K ? M("happy") : Jp(24, function() {
                    H("circle", {
                        cx$: "15.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("circle", {
                        cx$: "8.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("path", {
                        d$: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"
                    })
                })
            },
            HELP: function() {
                K ? M("help") : L(24, "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z")
            },
            INCOGNITO_CIRCLE: function() {
                K ? M("incognito_circle") : L(24, "M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zM9.38 5.51c.15-.39.57-.6.97-.46l1.62.54 1.61-.54c.39-.13.82.08.97.46l1.77 4.72h-8.7l1.76-4.72zm6.07 12.46c-1.42 0-2.56-1.09-2.69-2.48-.75-.48-1.36-.18-1.6-.02a2.696 2.696 0 0 1-2.69 2.49c-1.49 0-2.71-1.22-2.71-2.71s1.22-2.71 2.71-2.71c1.28 0 2.35.89 2.63 2.09.45-.19 1.05-.27 1.7.01a2.71 2.71 0 0 1 2.63-2.1c1.49 0 2.71 1.22 2.71 2.71a2.679 2.679 0 0 1-2.69 2.72zm3.49-6.19H5V11h13.94v.78z")
            },
            INFO: function() {
                K ? M("info") : Jp(24, function() {
                    H("path", {
                        fill$: "none",
                        d$: "M0 0h24v24H0z"
                    });
                    H("path", {
                        d$: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                    })
                })
            },
            INFO_OUTLINE: function() {
                K ? M("info_outline") : L(48, "M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z")
            },
            KEEP: function() {
                K ? M("keep") : L(24, "M16 5h.99L17 3H7v2h1v7l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2V5z")
            },
            LIKE: Mp,
            LIKE_COMMENT: function() {
                K ? M("like_comment") : Mp()
            },
            LOGO: Np,
            MEH: function() {
                K ? M("meh") : Jp(24, function() {
                    H("path", {
                        d$: "M9 14h6v1.5H9z"
                    });
                    H("circle", {
                        cx$: "15.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("circle", {
                        cx$: "8.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("path", {
                        d$: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    })
                })
            },
            MICROPHONE_ON: function() {
                K ? M("microphoneOn") : L(24, "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z")
            },
            MIX: function() {
                K ? M("mix") : L(24, "M20.3 11.95c0 2.46-.95 4.7-2.47 6.32l1.07 1.13c1.8-1.92 2.9-4.55 2.9-7.45 0-2.9-1.12-5.54-2.9-7.45l-1.07 1.13c1.52 1.62 2.46 3.86 2.46 6.32zm-17 0c0-2.46.93-4.7 2.45-6.32L4.7 4.5c-1.8 1.9-2.9 4.54-2.9 7.45 0 2.9 1.1 5.53 2.9 7.45l1.05-1.13C4.23 16.64 3.3 14.4 3.3 11.95zm3 0c0-1.6.6-3.03 1.57-4.08L6.8 6.75c-1.24 1.34-2 3.17-2 5.2 0 2.03.76 3.86 2 5.2l1.07-1.12c-.97-1.06-1.58-2.5-1.58-4.08zm10.47-5.2L15.7 7.87c1 1.05 1.6 2.5 1.6 4.08 0 1.6-.6 3.02-1.6 4.08l1.07 1.12c1.25-1.34 2.02-3.17 2.02-5.2 0-2.03-.8-3.86-2.05-5.2zm-6.64 2.93l4.16 2.3-4.2 2.3v-4.6z")
            },
            MONETIZATION_ON: function() {
                K ? M("monetization_on") : L(24, "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z")
            },
            MORE_CHEVRON: function() {
                K ? M("more_chevron") : L(24, "M 18.006339,7.96 12.003622,13.962717 6.0009055,7.96 4,9.960906 12.003622,18 20.007244,9.960906 18.006339,7.96 l 0,0 z")
            },
            MORE_HORIZ: function() {
                K ? M("more_horiz") : L(24, "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z")
            },
            MORE_VERT: Op,
            MORE_VERT_WHITE: function() {
                K ? M("more_vert_white") : Op()
            },
            OFFICIAL_ARTIST_BADGE: function() {
                K ? M("music_note") : L(24, "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z")
            },
            OFFLINE_CLOUD: function() {
                K ? M("offline_cloud") : Jp(24, function() {
                    H("path", {
                        d$: "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z",
                        fill$: "#909090"
                    })
                })
            },
            OFFLINE_DOWNLOAD: function() {
                K ? M("offline_download") : L(24, "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z")
            },
            OPEN_IN_NEW: Pp,
            PERSON_ADD: function() {
                K ? M("person_add") : L(24, "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z")
            },
            PIVOT_LIBRARY: function() {
                K ? M("pivot_library") : L(24, "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z")
            },
            PLAYER_NEXT: function() {
                K || Jp(36, function() {
                    H("path", {
                        d$: "M9,27 L21.75,18 L9,9 L9,27 Z M24,9 L24,27 L27,27 L27,9 L24,9 Z"
                    });
                    H("polygon", {
                        points$: "0 0 36 0 36 36 0 36"
                    })
                }, 36, "none")
            },
            PLAYER_PAUSE: function() {
                K || Jp(56, function() {
                    H("path", {
                        fill$: "#FFFFFF",
                        d$: "M14,44.3333333 L23.3333333,44.3333333 L23.3333333,11.6666667 L14,11.6666667 L14,44.3333333 Z M32.6666667,11.6666667 L32.6666667,44.3333333 L42,44.3333333 L42,11.6666667 L32.6666667,11.6666667 Z"
                    });
                    H("polygon", {
                        points$: "0 0 56 0 56 56 0 56"
                    })
                }, 56, "none")
            },
            PLAYER_PLAY: function() {
                K || Jp(56, function() {
                    H("polygon", {
                        fill$: "#FFFFFF",
                        points$: "18.6666667 11.6666667 18.6666667 44.3333333 44.3333333 28"
                    });
                    H("polygon", {
                        points$: "0 0 56 0 56 56 0 56"
                    })
                }, 56, "none")
            },
            PLAYER_PREVIOUS: function() {
                K || Jp(36, function() {
                    H("path", {
                        d$: "M9,9 L12,9 L12,27 L9,27 L9,9 Z M14.25,18 L27,27 L27,9 L14.25,18 Z"
                    });
                    H("polygon", {
                        points$: "0 0 36 0 36 36 0 36"
                    })
                }, 36, "none")
            },
            PLAYLISTS: function() {
                K ? M("playlists") : L(24, "M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z")
            },
            PLAYLIST_ADD: function() {
                K ? M("playlist_add") : L(24, "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z")
            },
            PLAYLIST_ADD_CHECK: function() {
                K ? M("playlist_add_check") : L(24, "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z")
            },
            PLAY_ALL: Qp,
            PLAY_ARROW: Qp,
            PRIVACY_INFO: Rp,
            PRIVACY_PRIVATE: Rp,
            PRIVACY_PUBLIC: function() {
                K ? M("privacy_public") : L(24, "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z")
            },
            PRIVACY_UNLISTED: function() {
                K ? M("privacy_unlisted") : L(24, "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z")
            },
            PURCHASES: function() {
                K ? M("purchases") : L(24, "M19.84 11.65l-7.5-7.5c-.3-.3-.7-.48-1.17-.48H5.33c-.9 0-1.66.75-1.66 1.66v5.84c0 .45.18.87.5 1.18l7.5 7.5c.3.3.7.48 1.16.48.46 0 .88-.18 1.18-.5L19.87 14c.3-.3.5-.7.5-1.16 0-.46-.2-.88-.5-1.18zM6.58 7.83c-.7 0-1.25-.55-1.25-1.25s.56-1.25 1.25-1.25c.7 0 1.25.56 1.25 1.25 0 .7-.55 1.25-1.25 1.25z")
            },
            RINGO_LOGO: function() {
                Jp(380.9, function() {
                        H("path", {
                            fill$: "#FF0000",
                            d$: "M118.9,13.5c-1.4-5.2-5.5-9.3-10.7-10.7c-9.5-2.5-47.5-2.5-47.5-2.5s-38,0-47.5,2.5C8,4.2,3.9,8.3,2.5,13.5   C0,23,0,42.7,0,42.7s0,19.8,2.5,29.2c1.4,5.2,5.5,9.3,10.7,10.7c9.5,2.5,47.5,2.5,47.5,2.5s38,0,47.5-2.5   c5.2-1.4,9.3-5.5,10.7-10.7c2.5-9.5,2.5-29.2,2.5-29.2S121.4,23,118.9,13.5z"
                        });
                        H("polygon", {
                            fill$: "#FFFFFF",
                            points$: "48.5,61 80.1,42.8 48.5,24.5  "
                        });
                        H("path", {
                            d$: "M147.1,55.5L133.5,6.2h11.9l4.8,22.3c1.2,5.5,2.1,10.2,2.7,14.1h0.3c0.4-2.8,1.3-7.4,2.7-14l5-22.4h11.9    L159,55.5v23.7h-11.8L147.1,55.5L147.1,55.5z"
                        });
                        H("path", {
                            d$: "M176.3,77.6c-2.4-1.6-4.1-4.1-5.1-7.6c-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7,0.6-10.3,1.7-13.8    c1.2-3.5,3-6,5.4-7.6c2.5-1.6,5.7-2.4,9.7-2.4c3.9,0,7.1,0.8,9.5,2.4s4.1,4.2,5.2,7.6s1.7,8,1.7,13.8v7.7c0,5.7-0.5,10.2-1.6,13.7    c-1.1,3.4-2.8,6-5.2,7.6c-2.4,1.6-5.7,2.4-9.8,2.4C182,80,178.7,79.2,176.3,77.6z M189.8,69.3c0.7-1.7,1-4.6,1-8.5V44.2    c0-3.8-0.3-6.6-1-8.4s-1.8-2.6-3.5-2.6c-1.6,0-2.8,0.9-3.4,2.6c-0.7,1.8-1,4.6-1,8.4v16.6c0,3.9,0.3,6.8,1,8.5    c0.6,1.7,1.8,2.6,3.5,2.6C187.9,71.9,189.1,71,189.8,69.3z"
                        });
                        H("path", {
                            d$: "M241.5,25.9v53.3h-9.4l-1-6.5h-0.3c-2.5,4.9-6.4,7.4-11.5,7.4c-3.5,0-6.1-1.2-7.8-3.5    c-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0,2.4,0.3,4.1,0.8,5.1s1.4,1.5,2.6,1.5c1,0,2-0.3,3-1c1-0.6,1.7-1.4,2.1-2.4V25.9H241.5z"
                        });
                        H("path", {
                            d$: "M274.1,15.9h-11.9v63.3h-11.7V16h-11.9V6.4h35.5V15.9z"
                        });
                        H("path", {
                            d$: "M303,25.9v53.3h-9.4l-1-6.5h-0.3c-2.5,4.9-6.4,7.4-11.5,7.4c-3.5,0-6.1-1.2-7.8-3.5    c-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0,2.4,0.3,4.1,0.8,5.1s1.4,1.5,2.6,1.5c1,0,2-0.3,3-1c1-0.6,1.7-1.4,2.1-2.4V25.9H303z"
                        });
                        H("path", {
                            d$: "M342.7,34.4c-0.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2,0-4.3,0.6-6.2,1.9c-1.9,1.2-3.4,2.9-4.4,4.9    h-0.1V3.5h-11.6v75.7h9.9l1.2-5h0.3c0.9,1.8,2.3,3.2,4.2,4.3c1.9,1,3.9,1.6,6.2,1.6c4.1,0,7-1.9,8.9-5.6c1.9-3.7,2.9-9.6,2.9-17.5    v-8.4C343.8,42.4,343.4,37.8,342.7,34.4z M331.7,56.1c0,3.9-0.2,6.9-0.5,9.1c-0.3,2.2-0.9,3.8-1.6,4.7c-0.8,0.9-1.8,1.4-3,1.4    c-1,0-1.9-0.2-2.7-0.7c-0.8-0.5-1.5-1.2-2-2.1V38.3c0.4-1.4,1.1-2.6,2.1-3.6c1-0.9,2.1-1.4,3.2-1.4c1.2,0,2.2,0.5,2.8,1.4    c0.7,1,1.1,2.6,1.4,4.8c0.3,2.3,0.4,5.5,0.4,9.6L331.7,56.1L331.7,56.1z"
                        });
                        H("path", {
                            d$: "M360.8,56.5v2.7c0,3.4,0.1,6,0.3,7.7c0.2,1.7,0.6,3,1.3,3.7c0.6,0.8,1.6,1.2,3,1.2c1.8,0,3-0.7,3.7-2.1    c0.7-1.4,1-3.7,1.1-7l10.3,0.6c0.1,0.5,0.1,1.1,0.1,1.9c0,4.9-1.3,8.6-4,11s-6.5,3.6-11.4,3.6c-5.9,0-10-1.9-12.4-5.6    c-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8,1.2-13.8,3.7-17.5s6.7-5.5,12.6-5.5c4.1,0,7.3,0.8,9.5,2.3s3.7,3.9,4.6,7    c0.9,3.2,1.3,7.6,1.3,13.2v9.1h-20.1V56.5z M362.3,34.1c-0.6,0.8-1,2-1.2,3.7s-0.3,4.3-0.3,7.8v3.8h8.8v-3.8c0-3.4-0.1-6-0.3-7.8    c-0.2-1.8-0.7-3-1.3-3.7c-0.6-0.7-1.6-1.1-2.8-1.1C363.9,33,362.9,33.4,362.3,34.1z"
                        })
                    },
                    85.1)
            },
            SAD: function() {
                K ? M("sad") : Jp(24, function() {
                    H("circle", {
                        cx$: "15.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("circle", {
                        cx$: "8.5",
                        cy$: "9.5",
                        r$: "1.5"
                    });
                    H("path", {
                        d$: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"
                    })
                })
            },
            SEARCH: function() {
                K ? M("search") : L(24, "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z")
            },
            SETTINGS: function() {
                K ? M("settings") : L(20, "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z")
            },
            SHARE: Sp,
            SHARE_ARROW: Sp,
            SHIELD: function() {
                K ? M("shield") : L(24, "M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z")
            },
            SHIELD_WITH_AVATAR: function() {
                K ? M("shield_with_avatar") : L(24, "M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zM7.7 15.1A5.3 5.3 0 0 1 12 6.7a5.3 5.3 0 0 1 4.3 8.4c-.6-1.1-3-1.7-4.3-1.7-1.3 0-3.7.6-4.3 1.7zM12 8.3a2.2 2.2 0 0 0-2.2 2.2c0 1.2 1 2.2 2.2 2.2a2.2 2.2 0 0 0 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0-2.6A6.3 6.3 0 0 0 5.7 12a6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3A6.3 6.3 0 0 0 12 5.7z")
            },
            SKIP_NEXT: function() {
                K ? M("skip_next") : L(24, "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z")
            },
            SKIP_PREVIOUS: function() {
                K ? M("skip_previous") : L(24, "M6 6h2v12H6zm3.5 6l8.5 6V6z")
            },
            SUBSCRIBE: function() {
                K ? M("subscribe") : Np()
            },
            SWITCH_ACCOUNTS: function() {
                K ? M("switch_accounts") : L(24, "M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4    C22,2.9,21.1,2,20,2z M14,4c1.66,0,3,1.34,3,3s-1.34,3-3,3c-1.66,0-3-1.34-3-3S12.34,4,14,4z M20,16H8v-1.5c0-1.99,4-3,6-3    c2,0,6,1.01,6,3V16z")
            },
            TAB_ACCOUNT: function() {
                K ? M("tab_account") : L(24, "M12 10.8c2.6 0 4.7-2.2 4.7-5 0-2.6-2-4.8-4.7-4.8-2.6 0-4.7 2.2-4.7 5 0 2.6 2 4.8 4.7 4.8zm-10 8v3.7c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5V19c0-4-6.7-6-10-6S2 15 2 19z")
            },
            TAB_HOME: function() {
                K ? M("tab_home") : L(24, "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z")
            },
            TAB_SUBSCRIPTIONS: function() {
                K ? M("tab_subscriptions") : L(24, "M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z")
            },
            TAB_TRENDING: function() {
                K ? M("tab_trending") : L(24, "M14.72,17.64c-0.32,0.28-0.83,0.56-1.23,0.69c-1.14,0.38-2.27-0.07-3.05-0.71c-0.11-0.09-0.07-0.26,0.06-0.31  c1.19-0.38,1.89-1.3,2.09-2.22c0.2-0.88-0.16-1.64-0.31-2.51c-0.12-0.72-0.11-1.34,0.12-2c0.04-0.11,0.2-0.13,0.25-0.02  c0.71,1.59,2.72,2.29,3.07,4.04c0.03,0.16,0.05,0.32,0.05,0.48C15.8,16.02,15.4,17.03,14.72,17.64 M17.55,9.62  c-0.75-0.7-1.63-1.2-2.36-1.93c-1.49-1.51-2-3.64-1.34-5.66c0.11-0.33-0.2-0.63-0.51-0.49c-0.71,0.31-1.39,0.76-1.98,1.24  C8.38,5.2,7.27,9.26,8.65,12.92c0.03,0.13,0.08,0.26,0.08,0.39c0,0.26-0.16,0.5-0.39,0.6c-0.26,0.12-0.54,0.04-0.74-0.15  c-0.06-0.06-0.12-0.12-0.17-0.19c-0.96-1.26-1.32-2.95-1.05-4.52c0.07-0.4-0.43-0.62-0.67-0.31c-1.21,1.57-1.81,3.67-1.69,5.65  c0.04,0.59,0.13,1.18,0.29,1.75c0.2,0.71,0.49,1.4,0.88,2.03c1.21,2.01,3.34,3.46,5.63,3.75c2.43,0.31,5.06-0.14,6.94-1.87  c2.09-1.93,2.85-5,1.73-7.68c-0.04-0.11-0.09-0.21-0.14-0.32c-0.25-0.52-0.55-1.01-0.91-1.45C18.17,10.24,17.87,9.92,17.55,9.62z")
            },
            TUNE: function() {
                K ? M("tune") : Jp(24, function() {
                    H("path", {
                        d$: "M0 0h24v24H0z",
                        fill$: "none"
                    });
                    H("path", {
                        d$: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                    })
                })
            },
            UPLOADS: function() {
                K ? M("uploads") : L(24, "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z")
            },
            VERY_HAPPY: function() {
                K ? M("very_happy") : L(24, "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z")
            },
            VERY_SAD: function() {
                K ? M("very_sad") : L(24, "M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z")
            },
            WARNING: function() {
                K ? M("warning") : L(24, "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z")
            },
            WATCH_HISTORY: function() {
                K ? M("watch_history") : L(24, "M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z")
            },
            WATCH_LATER: function() {
                K ? M("watch_later") : L(24, "M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z")
            },
            UNLIMITED: Np,
            YOUTUBE: Np
        },
        Up = {
            CHEVRON_RIGHT: !0,
            ARROW_BACK: !0
        };

    function N(a, b) {
        var c = Tp[a];
        c && H("c3-icon", b, function(d) {
            d.setAttribute("flip-for-rtl", a in Up);
            c()
        })
    }

    function Vp(a) {
        var b = {
            className: ["icon-button", a.className].join(" "),
            "aria-label$": a.w,
            "aria-labelledby$": a.Fb,
            "aria-pressed$": a.Gb,
            "aria-expanded$": a.Qd,
            "aria-haspopup$": !!a.Ub,
            "aria-disabled$": a.Pd,
            onclick: a.onclick
        };
        a.id && (b.id = a.id);
        Yo(b, a.content ? a.content : function() {
            return N(a.name)
        })
    }

    function Wp(a, b, c) {
        c = void 0 === c ? Fa : c;
        I({
            className: "icon-button",
            role$: "button",
            "aria-label$": b,
            "aria-haspopup$": void 0,
            onclick: c
        }, function() {
            N(a)
        })
    }

    function Xp() {
        I({
            className: "icon-button"
        }, function() {
            N("CHEVRON_RIGHT")
        })
    };

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

    function $p(a) {
        return a ? Yp(a).hostname || Q().hostname : ""
    };

    function aq(a) {
        var b = Zp(a ? a : Q().href);
        return "/" == b ? "home" : Gb(b, "/results") ? "search" : bq(a) ? "watch" : Gb(b, "/create_channel") ? "create_channel" : Gb(b, "/user/") || Gb(b, "/channel/") ? "channel" : Gb(b, "/experiments") ? "experiments" : Gb(b, "/sponsor_channel") ? "sponsorship" : "browse"
    }

    function cq(a) {
        switch (aq(a)) {
            case "watch":
                return "watch";
            case "search":
                return "search";
            default:
                return "browse"
        }
    }

    function bq(a) {
        return Gb(Zp(a ? a : Q().href), "/watch")
    };

    function dq() {
        return xe("/signin", "next", location.pathname + location.search)
    }

    function eq() {
        return !!y("ID_TOKEN")
    };

    function fq(a, b) {
        window.dispatchEvent(new CustomEvent(a, {
            detail: b
        }))
    };

    function R() {
        fq("updateui")
    };

    function gq(a) {
        Q().hash = a;
        R()
    };

    function hq() {
        var a = Q().href;
        return Ae(a, "search_query") || Ae(a, "q") || ""
    }

    function iq() {
        gq("searching")
    };

    function jq(a, b, c) {
        var d = {
            className: "select"
        };
        b && b.id && (d.id = b.id);
        H("ytm-select", a, function() {
            kp(d, c);
            N("ARROW_DROP_DOWN", {
                className: "select-icon"
            })
        })
    };

    function kq() {
        this.i = [];
        this.g = null
    }

    function lq(a, b) {
        a.g = b;
        a.i.forEach(function(c) {
            b(c)
        });
        a.i = null
    }
    kq.prototype.push = function(a) {
        this.g ? this.g(a) : this.i.push(a)
    };
    var mq = {
            clickTrackingParams: Fa
        },
        nq = new kq;

    function oq(a, b) {
        nq.push({
            action: a,
            context: b
        })
    };

    function pq(a) {
        return jb(Object.keys(a).map(function(b) {
            return "playlistEditEndpoint" == b ? a[b].clientActions || [] : a[b].actions || a[b].clientActions || []
        }))
    };
    var qq = [],
        rq = new kq;

    function sq(a) {
        return a && a.commandMetadata && a.commandMetadata.webCommandMetadata && a.commandMetadata.webCommandMetadata.url ? a.commandMetadata.webCommandMetadata.url : a && a.webNavigationEndpointData && a.webNavigationEndpointData.url ? a.webNavigationEndpointData.url : null
    }

    function tq(a) {
        return qq.reduce(function(b, c) {
            return b.concat(a[c.commandType] && c.l || [])
        }, [])
    }

    function uq(a, b) {
        var c = tq(a);
        if (!c.length) throw Error("Unhandled commands: " + Object.keys(a));
        var d = Eo,
            e = {
                B: d && d.response ? d.response : {},
                A: b
            };
        c.forEach(function(f) {
            return f(a, e)
        })
    }

    function S(a, b, c) {
        rq.push({
            command: a,
            A: b
        });
        c && a.clickTrackingParams && Ip(a.clickTrackingParams)
    }

    function vq(a, b, c) {
        a.forEach(function(d) {
            return S(d, b, c)
        })
    }

    function wq(a) {
        a = ba(pq(a));
        for (var b = a.next(); !b.done; b = a.next()) S(b.value, {}, !1)
    };

    function T(a, b, c, d, e) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? Fa : d;
        e = void 0 === e ? !1 : e;
        var f = a._replacingContent;
        f ? f(c) : H(b, c, function(g) {
            g.data = a;
            d(g);
            e || zo(function() {
                Ep(g, a)
            })
        })
    }

    function xq(a) {
        return a && (a.data || xq(a.parentNode))
    }

    function yq(a, b) {
        a._replacingContent = b
    };

    function zq(a) {
        if (a) return a.label ? a.label : zq(a.accessibilityData)
    };

    function Aq(a, b, c) {
        H("c3-material-button", a, function() {
            H("button", {
                className: "c3-material-button-button",
                disabled: b && b.disabled,
                onclick: b && b.onclick,
                "aria-label$": b && b.w,
                "aria-pressed$": b && b.Gb
            }, function() {
                I({
                    className: "cbox"
                }, c)
            })
        })
    };

    function Bq(a) {
        (a.loggingUrls || []).map(function(b) {
            return b.baseUrl
        }).filter(function(b) {
            return b
        }).forEach(function(b) {
            return Ol(b)
        })
    }

    function Cq(a, b) {
        var c = E(function() {
            return b.href
        });
        $p(c) != Q().hostname && Ip(a.clickTrackingParams)
    }

    function Dq(a) {
        var b = a.currentTarget;
        b._data && (Bq(a.currentTarget._data), Cq(a.currentTarget._data, b))
    }

    function Eq(a) {
        a.preventDefault()
    }

    function Fq(a) {
        var b = a.currentTarget;
        a = E(function() {
            return b.href
        });
        var c = b.params;
        a && ml(a, c || {}, 8)
    }

    function Gq(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? Fa : d;
        a && sq(a) ? (c.w && (b.w = c.w), U(a, b, d)) : Hq(c, a, b, d)
    }

    function U(a, b, c) {
        c = void 0 === c ? Fa : c;
        Xo(b, function(d) {
            Bo(d, "_data", a, function() {
                a ? (d.addEventListener("touchstart", Fq, {
                    passive: !0
                }), d.addEventListener("click", Dq), d.removeEventListener("click", Eq)) : (d.removeEventListener("touchstart", Fq, {
                    passive: !0
                }), d.removeEventListener("click", Dq), d.addEventListener("click", Eq));
                a && (a.clickTrackingParams && (d.params = {
                    itct: a.clickTrackingParams
                }), a && a.urlEndpoint && (a.urlEndpoint.target && "TARGET_NEW_WINDOW" === a.urlEndpoint.target && (d.target = "_blank"), a.urlEndpoint.nofollow &&
                    (d.rel = "nofollow")), nc(d, sq(a) || ""))
            });
            c()
        })
    }

    function Hq(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? Fa : d;
        a.ab ? (a.w && (c.w = a.w), a.disabled && (c.disabled = a.disabled), c.onclick = function() {
            b && (Bq(b), S(b, {}, !1))
        }, c.className = c.className ? c.className + " undecoratedEndpointButton" : "undecoratedEndpointButton", H("button", c, d)) : Aq(c, {
            w: a.w || "",
            disabled: a.disabled,
            onclick: function() {
                b && (Bq(b), S(b, {}, !1))
            }
        }, d)
    };

    function Iq(a) {
        a.bold && To("strong");
        a.deemphasize && To("span", {
            className: "formatted-string-deemphasize"
        });
        a.italics && To("em");
        if (a.textColor) {
            var b = a.textColor;
            b &= 16777215;
            var c = [(b & 16711680) >> 16, (b & 65280) >> 8, b & 255];
            b = c[0];
            var d = c[1];
            c = c[2];
            b = Number(b);
            d = Number(d);
            c = Number(c);
            if (b != (b & 255) || d != (d & 255) || c != (c & 255)) throw Error('"(' + b + "," + d + "," + c + '") is not a valid RGB color');
            d = b << 16 | d << 8 | c;
            b = 16 > b ? "#" + (16777216 | d).toString(16).substr(1) : "#" + d.toString(16);
            To("span", {
                style: "color: " + b
            })
        }
        a.strikethrough &&
            To("s")
    }

    function Jq(a) {
        a.strikethrough && rh();
        a.textColor && rh();
        a.italics && rh();
        a.deemphasize && rh();
        a.bold && rh()
    }

    function Kq(a, b) {
        var c = a.text;
        Iq(a);
        a.navigationEndpoint && !b ? U(a.navigationEndpoint, null, function() {
            return w(c)
        }) : w(c);
        Jq(a)
    }

    function V(a, b) {
        var c = (void 0 === b ? Ao : b).J;
        if (a) {
            a.accessibility && To("span", {
                "aria-label$": zq(a.accessibility)
            });
            if (a.simpleText) w(a.simpleText);
            else if (a.runs)
                for (var d = 0; d < a.runs.length; d++) Kq(a.runs[d], !!c);
            a.accessibility && rh()
        }
    }

    function Lq(a) {
        return a && a.simpleText ? a.simpleText : a && a.runs ? a.runs.map(function(b) {
            return b.text
        }).filter(Boolean).join("") : ""
    };

    function W(a) {
        return function(b, c) {
            if (b)
                for (var d = Array.isArray(b) ? b : [b], e = 0; e < d.length; e++) {
                    var f = void 0,
                        g = d[e],
                        h = c;
                    for (f in g)(a[f] || Fa)(g[f], h)
                }
        }
    };
    var Oq = W({
        navigationDropdownItemRenderer: Mq,
        privacyDropdownItemRenderer: Nq,
        dropdownItemRenderer: Nq
    });

    function Pq(a) {
        a = a.target;
        S(a.options[a.selectedIndex].endpoint, {}, !1)
    }

    function Qq(a, b) {
        var c = a && 0 < a.entries.length && a.entries[0].navigationDropdownItemRenderer;
        b = b || {};
        b.className = b.className || "";
        c && (b.className += " navigational");
        T(a, "ytm-dropdown-renderer", b, function() {
            var d = b && b.Rb ? b.Rb : to(v("dropdown"));
            a.label && gp({
                className: "dropdown-label",
                htmlFor: d.toString()
            }, function() {
                w(a.label)
            });
            var e = {};
            c && (e = {
                onchange: Pq
            });
            jq(e, {
                id: d
            }, function() {
                b && b.Vb && hp({
                    className: "option",
                    disabled: !0,
                    selected: !0,
                    value$: "test_value"
                });
                Oq(a.entries)
            })
        })
    }

    function Nq(a) {
        hp({
            className: "option",
            selected: a.isSelected,
            value$: a.int32Value
        }, function() {
            V(a.label)
        })
    }

    function Mq(a) {
        hp({
            className: "option",
            selected: a.isSelected,
            endpoint: a.endpoint
        }, function() {
            V(a.label)
        })
    };
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
    window.addEventListener("resize", function() {
        Sq = void 0
    });
    var Xq = "IntersectionObserver" in window,
        Yq = !Vq() && !y("MWEB_BLAZERPLAYER", !1),
        $q = Xq ? new IntersectionObserver(function(a, b) {
            a.filter(function(c) {
                return c.intersectionRect.height
            }).forEach(function(c) {
                c = c.target;
                Zq(c);
                b.unobserve(c)
            })
        }, {
            rootMargin: "10%",
            threshold: .01
        }) : Yq ? new pp(.1, function(a) {
            zo(function() {
                return Zq(a)
            })
        }) : {
            observe: function(a) {
                zo(function() {
                    return Zq(a)
                })
            }
        };

    function Zq(a) {
        var b = a.retrieveSrcCallback(a.lazyData, a);
        oc(a, b)
    }

    function ar(a, b) {
        br(a, kb, b)
    }

    function br(a, b, c) {
        Wo(new nb("IMG".toString()))(c, function(d) {
            Bo(d, "lazyData", a || Ao, function() {
                d.removeAttribute("src");
                a && (d.retrieveSrcCallback = b, $q.observe(d))
            })
        })
    };
    var cr = m.devicePixelRatio || 2;

    function dr(a, b, c) {
        b = c || b.getBoundingClientRect().width * cr;
        a = a.thumbnails;
        if (!a) return "";
        c = 0;
        for (var d = Number.MAX_SAFE_INTEGER, e = 0, f = -Number.MAX_SAFE_INTEGER, g = 0; g < a.length; g++) {
            var h = a[g].width - b;
            0 <= h && h <= d ? (c = g, d = h) : 0 > h && h > f && (e = g, f = h)
        }
        var l = [];
        a.forEach(function(n) {
            l.push(n.url)
        });
        return 100 > d || d < -f ? a[c].url : a[e].url
    }

    function er(a, b) {
        var c = D(function() {
            return a.thumbnails[0].url
        });
        b && a && (c = dr(a, b));
        return c ? Ub(Zb(c)) : null
    }

    function Y(a, b, c, d) {
        b = b ? b : {};
        void 0 === d || d ? br(a, function(e, f) {
            return e ? dr(e, f, c) : ""
        }, b) : ep(b, function(e) {
            a && oc(e, dr(a, e, c))
        })
    };

    function fr(a, b, c, d, e, f, g, h, l, n) {
        h = void 0 === h ? !1 : h;
        n = void 0 === n ? !1 : n;
        Aq({
            className: ["button-renderer compact", void 0 === l ? "" : l].join(" "),
            "data-style$": void 0 === g ? "" : g,
            "data-icon-only$": !b,
            "is-busy$": !!h,
            "aria-busy$": !!h,
            disabled$: e
        }, {
            w: c || "",
            Gb: d,
            disabled: !!e,
            onclick: f
        }, function() {
            !n && a && N(a, {
                className: "button-renderer-icon"
            });
            I({
                className: "button-renderer-text"
            }, function() {
                b && V(b)
            });
            n && a && N(a, {
                className: "button-renderer-icon"
            });
            h && I({
                className: "button-with-icon-spinner spinner"
            })
        })
    };

    function gr(a) {
        return "THEME_ATTRIBUTE_TEXT_DISABLED" === a.foregroundTitleColor || "THEME_ATTRIBUTE_ICON_DISABLED" === a.foregroundIconColor
    };

    function Z(a, b) {
        if (a) {
            var c = D(function() {
                    return b.V
                }),
                d = D(function() {
                    return a.icon.iconType
                }),
                e = a.text,
                f = zq(a.accessibilityData || a.accessibility),
                g = !!a.isDisabled,
                h = b && b.va,
                l = function(z) {
                    b && b.preventDefault && z.preventDefault();
                    b && b.stopPropagation && z.stopPropagation();
                    a._isBusy || (c && c(), h ? (a.trackingParams && Ip(a.trackingParams), a.serviceEndpoint && S(a.serviceEndpoint, a, !1), a.navigationEndpoint && S(a.navigationEndpoint, a, !1), a.command && S(a.command, a, !1)) : (z = a.serviceEndpoint || a.navigationEndpoint || a.command) && S(z, a, !a.navigationEndpoint))
                },
                n = a.style,
                q = a._isBusy,
                t = [];
            b && b.className && t.push(b.className);
            a.themedBasicColorPalette && gr(a.themedBasicColorPalette) && t.push("disabled");
            var x = a.iconPosition && "BUTTON_ICON_POSITION_TYPE_RIGHT_OF_TEXT" === a.iconPosition;
            (e || f) && fr(d, e, f, null, g, l, n, q, t.join(" "), x)
        }
    };

    function hr(a) {
        var b = a.toggledIcon && a.toggledIcon.iconType,
            c = a.defaultIcon && a.defaultIcon.iconType;
        return a.isToggled && b || c || null
    }

    function ir(a, b) {
        if (a) {
            var c = hr(a),
                d = a.isToggled && a.toggledText || a.defaultText,
                e = zq(a.accessibilityData),
                f = !!a.isToggled,
                g = !!a.isDisabled,
                h = a.style,
                l = a._isBusy,
                n = b && b.className ? b.className : "";
            jr(a);
            fr(c, d, e, f, g, function(q) {
                b && b.stopPropagation && q.stopPropagation();
                if (a) {
                    q = a.isToggled ? a.toggledServiceEndpoint : a.defaultServiceEndpoint;
                    var t = a.defaultNavigationEndpoint;
                    q ? S(q, a, !0) : t && S(t, {}, !1)
                }
            }, h, l, n)
        }
    }

    function jr(a) {
        var b = a && a.toggleButtonSupportedData && a.toggleButtonSupportedData.toggleButtonIdData && a.toggleButtonSupportedData.toggleButtonIdData.id;
        b && "TOGGLE_BUTTON_ID_TYPE_ACCOUNT_LINKING" === b && S({
            accountLinkCommand: {}
        }, a, !1)
    };
    var kr = B("PLAY_ALL"),
        lr = W({
            buttonRenderer: Z,
            toggleButtonRenderer: ir,
            heroPlaylistThumbnailRenderer: function(a, b) {
                var c = void 0 !== a.maxRatio ? a.maxRatio : .3;
                T(a, "ytm-hero-playlist-thumbnail-renderer", b, function() {
                    I({
                        style: {
                            "padding-bottom": 100 * c + "%"
                        }
                    }, function() {
                        Y(a.thumbnail, {
                            className: "cover",
                            alt: ""
                        })
                    })
                })
            },
            dropdownRenderer: Qq
        });

    function mr(a) {
        var b = a && a.actionButton;
        I(null, function() {
            ap(null, function() {
                V(a.title)
            });
            b ? (a.subtitle && I({
                className: "subhead small-text"
            }, function() {
                V(a.subtitle, {
                    J: !0
                })
            }), a.metadata && I({
                className: "subhead small-text"
            }, function() {
                V(a.metadata, {
                    J: !0
                })
            })) : U(a.ownerEndpoint, {
                className: "playlist-channel-link"
            }, function() {
                V(a.ownerText, {
                    J: !0
                })
            });
            ip({
                className: "subhead small-text"
            }, function() {
                V(a.descriptionText)
            })
        })
    }

    function nr(a) {
        I({
            className: "playlist-header-stats"
        }, function() {
            J({
                className: "text-info"
            }, function() {
                V(a.numVideosText)
            });
            J({
                className: "text-info"
            }, function() {
                V(a.viewCountText)
            })
        })
    }

    function or(a) {
        I({
            className: "playlist-header-actions cbox"
        }, function() {
            lr(a.saveButton);
            lr(a.shareButton);
            lr(a.deleteButton);
            lr(a.editButton)
        })
    }

    function pr(a) {
        I({
            className: "playlist-header-actions cbox offer"
        }, function() {
            lr(a.actionButton)
        })
    }

    function qr(a, b) {
        b ? I({
            className: "playlist-header-box section"
        }, function() {
            mr(a);
            pr(a)
        }) : (I({
            className: "playlist-header-box section"
        }, function() {
            mr(a);
            or(a)
        }), U(a.playEndpoint, {
            className: "playlist-play-all-button center",
            role$: "button",
            title: kr
        }, function() {
            N("PLAY_ALL")
        }))
    };

    function rr(a) {
        H("ytm-channel-link", null, function() {
            a.icon && Y(a.icon, {
                className: "channel-link-icon",
                alt: ""
            });
            U(a.navigationEndpoint, {
                className: "channel-link-link"
            }, function() {
                a.title ? V(a.title) : w(E(function() {
                    return a.navigationEndpoint.urlEndpoint.url
                }) || "")
            })
        })
    };

    function sr(a) {
        a.subscribed ? vq(E(function() {
            return a.onUnsubscribeEndpoints
        }), a, !0) : vq(E(function() {
            return a.onSubscribeEndpoints
        }), a, !0)
    }

    function tr(a) {
        a.subscribed || I({
            className: "subscribe-button-count secondary-text"
        }, function() {
            V(a.subscriberCountText)
        })
    }

    function ur(a, b) {
        function c() {
            return sr(a)
        }
        var d = a.subscribedButtonText,
            e = a.unsubscribedButtonText,
            f = a.subscribed,
            g = a.enabled,
            h = a.theme,
            l = f ? d : e;
        d = !!h && (f ? !!h.subscribedColorPalette && gr(h.subscribedColorPalette) : !!h.unsubscribedColorPalette && gr(h.unsubscribedColorPalette));
        var n = f || d ? "STYLE_TEXT" : "STYLE_BRAND",
            q = d ? "disabled" : "",
            t = !!f,
            x = h && h.suppressIcon ? null : "LOGO",
            z = null;
        f && a.subscribeAccessibility && a.subscribeAccessibility.accessibilityData ? z = a.subscribeAccessibility.accessibilityData.label : !f && a.unsubscribeAccessibility && a.unsubscribeAccessibility.accessibilityData &&
            (z = a.unsubscribeAccessibility.accessibilityData.label);
        T(a, "ytm-subscribe-button-renderer", b, function() {
            I({
                className: "cbox"
            }, function() {
                fr(x, l, z, t, !g, c, n, !1, q);
                tr(a)
            })
        })
    };

    function vr(a, b) {
        var c = a ? E(function() {
            return a.thumbnails[0].url
        }) : null;
        H("ytm-profile-icon", b, function() {
            c && ar(c, {
                className: "profile-icon-img",
                alt: ""
            })
        })
    };
    var wr = W({
        buttonRenderer: Z,
        channelHeaderLinksRenderer: function(a, b) {
            T(a, "ytm-channel-header-links-renderer", b, function() {
                a.primaryLinks.forEach(function(c) {
                    return rr(c)
                })
            })
        },
        subscribeButtonRenderer: ur
    });

    function xr(a) {
        var b = D(function() {
            return a.banner.thumbnails[0].url
        });
        if (b) {
            var c = zq(a.banner.accessibility) || "",
                d = D(function() {
                    return a.bannerLinkEndpoint
                }),
                e = {
                    alt: c,
                    className: "c4-tabbed-header-banner-img"
                };
            I({
                className: "c4-tabbed-header-banner"
            }, function() {
                d ? U(d, {}, function() {
                    ar(b, e)
                }) : ar(b, e)
            })
        }
    }

    function yr(a) {
        I({
            className: "c4-tabbed-header-details"
        }, function() {
            $o({
                className: "c4-tabbed-header-title"
            }, function() {
                w(a.title || "")
            });
            I({
                className: "c4-tabbed-header-subscibe cbox"
            }, function() {
                wr(a.subscribeButton);
                J({
                    className: "c4-tabbed-header-subscriber-count secondary-text"
                }, function() {
                    V(a.subscriberCountText)
                })
            });
            wr(a.headerLinks)
        })
    }

    function zr(a, b) {
        T(a, "ytm-c4-tabbed-header-renderer", b, function() {
            xr(a);
            I({
                className: "c4-tabbed-header-channel cbox"
            }, function() {
                vr(a.avatar, {
                    className: "c4-tabbed-header-profile-icon"
                });
                yr(a)
            })
        })
    };
    var Ar = W({
        subscribeButtonRenderer: ur
    });

    function Br(a, b) {
        H("ytm-badge", a, b)
    };

    function Cr(a, b) {
        a && T(a, "ytm-metadata-badge-renderer", b, function() {
            Br({
                className: "metadata-badge soft-background",
                "data-type$": a.style
            }, function() {
                N(D(function() {
                    return a.icon.iconType
                }));
                w(a.label || "")
            })
        })
    };

    function Dr(a) {
        T(a, "ytm-scrollable-tab-header", null, function() {
            var b = null;
            I({
                className: "scrollable-tab-header-container"
            }, function() {
                a.tabs.forEach(function(d, e) {
                    var f = d.tabRenderer;
                    f && I({
                        className: "scrollable-tab",
                        "aria-label$": f.title,
                        role$: "tab",
                        onclick: function() {
                            var g = a.tabs[e].tabRenderer.endpoint;
                            g && S(g, a, !0)
                        },
                        "aria-selected$": f.selected
                    }, function(g) {
                        f.selected && (b = g);
                        f.title && w(f.title)
                    })
                });
                if (b) {
                    var c = b.offsetLeft;
                    b.parentElement.scrollLeft = 0 < c ? c - 40 : 0
                }
            })
        })
    };
    var Er = W({
        metadataBadgeRenderer: Cr,
        subscribeButtonRenderer: ur
    });

    function Fr(a) {
        a.banner && I({
            className: "interactive-tabbed-header-banner",
            alt: zq(a.banner.accessibility) || ""
        }, function(b) {
            Ze(b, 'url("' + er(a.banner, b) + '")');
            H("svg", {
                class$: "interactive-tabbed-header-banner-overlay",
                viewBox$: "0 0 2900 304",
                preserveAspectRatio$: "xMidYMid slice"
            }, function() {
                H("path", {
                    d$: "M 0,304 V 0 H 963 L 1439,304 Z",
                    opacity$: "0.5"
                });
                H("path", {
                    d$: "M 0,0 l 0,304 580,0 L 1055,0 0,0 Z",
                    opacity$: "0.5"
                });
                H("path", {
                    d$: "M 0,304 V 0 H 780 L 1247,304 Z",
                    opacity$: "0.9"
                })
            })
        })
    }

    function Gr(a) {
        I({
            className: "interactive-tabbed-header-description"
        }, function() {
            a.boxArt && I({
                className: "interactive-tabbed-header-boxart",
                alt: zq(a.boxArt.accessibility) || ""
            }, function(b) {
                Ze(b, 'url("' + er(a.boxArt, b) + '")')
            });
            I({
                className: "interactive-tabbed-header-summary"
            }, function() {
                I({
                    className: "interactive-tabbed-header-summary-top"
                }, function() {
                    $o({
                        className: "interactive-tabbed-header-title"
                    }, function() {
                        V(a.title)
                    });
                    a.autoGenerated && I({
                        className: "interactive-tabbed-header-autogenerated"
                    }, function() {
                        V(a.autoGenerated)
                    });
                    a.badges && I({
                        className: "interactive-tabbed-header-badges"
                    }, function() {
                        Er(a.badges)
                    })
                });
                I({
                    className: "interactive-tabbed-header-buttons"
                }, function() {
                    Er(a.buttons)
                })
            })
        })
    };

    function Hr(a) {
        return a ? a.simpleText ? a.simpleText : a.runs.map(function(b) {
            return b.text
        }).join("") : ""
    }

    function Ir(a) {
        return {
            runs: [{
                text: a
            }]
        }
    };
    var Jr = W({
        headerFabRenderer: function(a) {
            T(a, "ytm-header-fab-renderer", {
                className: "center"
            }, function() {
                U(a.navigationEndpoint, {
                    "aria-label$": zq(a.accessibility),
                    className: "fab-icon-link"
                }, function() {
                    N(a.icon.iconType)
                })
            })
        }
    });

    function Kr(a) {
        var b = D(function() {
            return a.unlimitedStatus
        });
        b && I({
            className: "unlimited-status small-text"
        }, function() {
            b.forEach(function(c) {
                V(c)
            })
        })
    }

    function Lr(a) {
        T(a, "ytm-active-account-header-renderer", null, function() {
            I({
                className: "account-photo-and-info-wrapper"
            }, function() {
                U(a.channelEndpoint, {
                    className: "active-account-photo-container",
                    "aria-label$": Hr(a.accountName)
                }, function() {
                    vr(a.accountPhoto, {
                        className: "active-account-icon"
                    })
                });
                I({
                    className: "active-account-information"
                }, function() {
                    I({
                        className: "active-account-name cbox",
                        "aria-label$": G.Ec,
                        onclick: function() {
                            return S(a.serviceEndpoint, a, !0)
                        },
                        role$: "button"
                    }, function() {
                        V(a.accountName);
                        N("EXPAND_MORE", {
                            className: "view-account-icon"
                        })
                    });
                    I({
                        className: "active-account-email"
                    }, function() {
                        V(a.email)
                    });
                    a.manageAccountTitle && I({
                        className: "active-account-manage-account"
                    }, function() {
                        V(a.manageAccountTitle)
                    })
                })
            });
            Kr(a);
            Jr(a.fab)
        })
    };

    function Mr(a, b) {
        T(a, "ytm-lugash-footer-renderer", b, function() {
            I({
                className: "center secondary-text"
            }, function() {
                V(a.title)
            })
        })
    };
    var Nr = W({
        buttonRenderer: Z
    });
    var Or = W({
        channelListSubMenuAvatarRenderer: function(a, b) {
            T(a, "ytm-channel-list-sub-menu-avatar-renderer", b, function(c) {
                if (a.status) {
                    a: switch (a.status) {
                        case "CHANNEL_STATUS_UNREAD":
                            var d = "unread";
                            break a;
                        case "CHANNEL_STATUS_LIVE":
                            d = "live";
                            break a;
                        default:
                            d = ""
                    }
                    c.setAttribute("status", d)
                }
                U(a.navigationEndpoint, {
                    "aria-label$": zq(a.accessibility),
                    "force-new-state$": !0
                }, function() {
                    b && "LARGE_WITH_TEXT" === b.size ? (a.thumbnail && vr(a.thumbnail, {
                            className: "channel-list-sub-menu-avatar-large-icon"
                        }), a.title &&
                        cp({
                            className: "channel-list-sub-menu-avatar-title subhead small-text"
                        }, function() {
                            return V(a.title)
                        })) : a.thumbnail && vr(a.thumbnail, {
                        className: "channel-list-sub-menu-avatar-profile-icon"
                    })
                })
            })
        }
    });

    function Pr(a) {
        if (a) {
            var b = -1;
            a.forEach(function(c, d) {
                c.selected && (b = d)
            });
            jq({
                onchange: function(c) {
                    c = c.target;
                    c.selectedIndex != b && S(c.options[c.selectedIndex].endpoint, {}, !1)
                }
            }, null, function() {
                a.forEach(function(c) {
                    hp({
                        className: "option",
                        endpoint: c.endpoint,
                        selected: c.selected
                    }, function() {
                        w(c.title)
                    })
                })
            })
        }
    };
    var Qr = W({
        metadataBadgeRenderer: Cr,
        standaloneYpcBadgeRenderer: function(a, b) {
            T(a, "ytm-standalone-ypc-badge-renderer", b, function() {
                a.discountText && Br({
                    className: "standalone-ypc-badge",
                    "data-type$": "STYLE_DISCOUNT"
                }, function() {
                    V(a.discountText)
                });
                Br({
                    className: "standalone-ypc-badge",
                    "data-type$": D(function() {
                        return a.style.badgeStyle
                    })
                }, function() {
                    V(a.badgeText)
                })
            })
        }
    });

    function Rr(a, b) {
        a && H("ytm-badge-supported-renderer", b, function() {
            Qr(a)
        })
    };

    function Sr(a, b) {
        zo(function() {
            return nc(a, b)
        })
    }

    function Tr(a, b, c) {
        c = void 0 === c ? Fa : c;
        Xo(b, function(d) {
            Bo(d, "_href", a, function() {
                return Sr(d, a)
            });
            c()
        })
    };

    function Ur(a, b, c) {
        var d = {
            className: "menu-item-button"
        };
        a && (d.onclick = a);
        c && (d.role$ = c);
        H("ytm-menu-item", null, function() {
            H("button", d, b)
        })
    }

    function Vr(a, b) {
        var c = void 0 === c ? !1 : c;
        H("ytm-menu-item", null, function() {
            var d = {
                className: "menu-item-button"
            };
            c && (d.target = "_blank");
            Tr(a, d, b)
        })
    };

    function Wr(a, b) {
        S(b.navigationEndpoint, b, !1);
        E(function() {
            return b.navigationEndpoint.commandMetadata.webCommandMetadata.ignoreNavigation
        }) || a.stopPropagation()
    };

    function Xr(a, b) {
        var c = window;
        c.addEventListener(a, function f(e) {
            c.removeEventListener(a, f, void 0);
            b(e)
        }, void 0)
    };
    var Yr = Ud("init"),
        Zr = !1;

    function $r() {
        Yr = new Pd(function(a) {
            function b() {
                window.removeEventListener("popstate", b);
                window.removeEventListener("hashchange", b);
                a()
            }
            window.addEventListener("popstate", b);
            window.addEventListener("hashchange", b)
        });
        Xr("popstate", function() {
            setTimeout(function() {
                Zr = !1
            })
        });
        setTimeout(function() {
            Zr = !0;
            history.back()
        })
    }

    function as() {
        return Yr
    };
    var bs = 0,
        cs = null,
        ds = 0;

    function es(a, b, c) {
        Array.prototype.filter.call(a.parentElement.children, function(d) {
            return d !== a
        }).forEach(function(d) {
            b ? d.setAttribute(c ? "aria-hidden" : "hidden", !0) : d.removeAttribute(c ? "aria-hidden" : "hidden")
        })
    }

    function fs(a, b) {
        b = void 0 === b ? document.activeElement : b;
        ds += 1;
        1 == ds && (bs = (document.body || document.documentElement).scrollTop || window.pageYOffset || 0, cs = b, es(a, !0, !0), requestAnimationFrame(function() {
            document.body.setAttribute("modal-open-body", "");
            document.body.style.top = "-" + bs + "px";
            window.scrollTo(0, -bs)
        }))
    }

    function gs(a) {
        --ds;
        0 == ds && (es(a, !1, !0), requestAnimationFrame(function() {
            document.body.removeAttribute("modal-open-body");
            document.body.style.top = "";
            window.scrollTo(0, bs);
            cs && cs.focus()
        }))
    };

    function hs(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.S,
            e = c.ub;
        try {
            is(a, b, {
                S: d,
                ub: e
            })
        } catch (f) {
            c = document.createElement("div"), document.body.insertBefore(c, document.body.firstChild), vh(c, function() {
                is(a, b, {
                    S: d,
                    ub: e
                })
            })
        }
    }

    function is(a, b, c) {
        var d = (void 0 === c ? {} : c).S;
        H("c3-overlay", {
            onclick: b,
            ontouchmove: md
        }, function() {
            d && I({
                className: "dialog-container"
            }, function() {
                I({
                    className: "spinner"
                })
            });
            Yo({
                className: "overlay-button",
                "aria-label$": a
            })
        })
    }

    function js() {
        var a = document.querySelector("c3-overlay");
        a && a.parentNode.removeChild(a)
    };
    var ks, ls;

    function ms() {
        return Yr.then(function() {
            "#menu" === Q().hash && $r();
            return Yr
        })
    }

    function ns() {
        ks && "#menu" !== Q().hash && (window.removeEventListener("updateui", os), gs(ks), document.body.removeChild(ks), ls = ks = null)
    }

    function ps() {
        Ur(null, function() {
            I({
                className: "menu-cancel-button"
            }, function() {
                ls.ca && N(ls.ca, {
                    className: "menu-cancel-icon"
                });
                w(ls.R)
            })
        })
    }

    function os() {
        var a = "menu-content";
        ls.ta && (a += " menu-bottom");
        uh(ks, function() {
            var b = !!ls.Ka;
            I({
                role$: b ? "" : "dialog",
                "aria-modal$": !b,
                "aria-labelledby$": ls.Sd,
                className: a,
                onclick: ls.Ja || ls.Vd ? null : ms,
                tabindex$: "-1"
            }, function() {
                ls.content();
                ls.Ja || (ls.ta ? I({
                    className: "bottom-menu-cancel"
                }, ps) : ps())
            });
            b || hs("close", ms)
        })
    }

    function qs(a) {
        ls = a;
        ks = document.getElementById("menu");
        "#menu" != Q().hash && (gq("menu"), ks = document.createElement("div"), ks.id = "menu", document.body.appendChild(ks), fs(ks, a.Ia));
        ks.className = a.Ka ? "menu-container menu-full-width" : "menu-container";
        a.className && (ks.className += " " + a.className);
        "scrollTo" in ks && ks.scrollTo(0, 0);
        os();
        ks.querySelector("button").focus();
        window.addEventListener("updateui", os)
    }

    function rs(a) {
        var b = a.icon,
            c = a.label,
            d = a.content,
            e = a.R,
            f = a.ca,
            g = a.ta;
        H("ytm-menu", void 0, function() {
            return Vp({
                name: b,
                w: c,
                onclick: function() {
                    return qs({
                        content: d,
                        R: e,
                        ca: f,
                        ta: g
                    })
                },
                Ub: !0
            })
        })
    }

    function ss(a) {
        var b = a.icon,
            c = a.label,
            d = a.content,
            e = a.w,
            f = a.R,
            g = a.ca,
            h = a.style,
            l = a.dg,
            n = a.Pf,
            q = a.re;
        H("ytm-menu", void 0, function() {
            return fr(b, c, e, !1, !1, function() {
                return qs({
                    content: d,
                    R: f,
                    ca: g,
                    className: q
                })
            }, h, l, n)
        })
    }
    window.addEventListener("state-change", ns);
    window.addEventListener("hashchange", ns);
    var ts = W({
        buttonRenderer: Z,
        menuServiceItemRenderer: function(a, b) {
            T(a, "ytm-menu-service-item-renderer", b, function() {
                Ur(function() {
                    var c = a.serviceEndpoint,
                        d = a.command;
                    c && S(c, a, !0);
                    d && S(d, a, !0)
                }, function() {
                    a.icon && a.icon.iconType && N(a.icon.iconType);
                    V(a.text, {
                        J: !0
                    })
                })
            })
        },
        toggleButtonRenderer: ir,
        toggleMenuServiceItemRenderer: function(a, b) {
            T(a, "ytm-toggle-menu-service-item-renderer", b, function() {
                Ur(function() {
                    var c = a.isToggled ? a.toggledServiceEndpoint : a.defaultServiceEndpoint;
                    c && S(c, a, !0)
                }, function() {
                    V(a.isToggled ? a.toggledText : a.defaultText)
                })
            })
        },
        menuNavigationItemRenderer: function(a) {
            T(a, "ytm-menu-navigation-item-renderer", null, function() {
                Ur(function(b) {
                    return Wr(b, a)
                }, function() {
                    V(a.text)
                }, a.navigationEndpoint && a.navigationEndpoint.urlEndpoint ? "link" : void 0)
            })
        }
    });

    function us(a, b) {
        a.items && a.items.length && rs({
            icon: "MORE_VERT",
            label: zq(a.accessibility) || "",
            content: function() {
                ts(a.items)
            },
            R: G.P,
            ca: b.ca,
            ta: b.ta
        })
    }

    function vs(a, b) {
        a && T(a, "ytm-menu-renderer", b, function() {
            ts(a.topLevelButtons);
            us(a, {
                ca: b && b.cancelButtonIcon,
                ta: b && !!b.isBottomMenu
            })
        })
    }

    function ws(a) {
        qs({
            content: function() {
                ts(a.items)
            },
            R: G.P
        })
    };

    function xs(a, b, c, d) {
        d = void 0 === d ? !0 : d;
        I({
            className: "cover video-thumbnail-img video-thumbnail-bg"
        });
        Y(a, {
            alt: "",
            className: "cover video-thumbnail-img"
        }, c, d);
        b && b()
    }

    function ys(a, b) {
        I({
            className: "video-thumbnail-container-large center"
        }, function() {
            xs(a, b)
        })
    }

    function zs(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        var f = "video-thumbnail-container-compact center";
        d && (f += " " + d);
        I({
            className: f
        }, function() {
            xs(a, b, c, e)
        })
    };
    var As = W({
        menuRenderer: vs
    });

    function Bs(a) {
        var b = a.thumbnail,
            c = a.navigationEndpoint,
            d = a.headline,
            e = void 0 === a.H ? [] : a.H,
            f = a.descriptionSnippet,
            g = void 0 === a.vb ? [] : a.vb,
            h = a.Za,
            l = a.ra,
            n = a.overlay,
            q = a.menu,
            t = a.xb,
            x = void 0 === a.extraContent ? Fa : a.extraContent,
            z = !(!d || !d.accessibility);
        I({
            className: "compact-media-item"
        }, function() {
            U(c, {
                className: "compact-media-item-image",
                "aria-hidden$": z || !n
            }, function() {
                zs(b, n, t)
            });
            I({
                className: "compact-media-item-metadata",
                "data-has-badges$": !(!l && !h)
            }, function() {
                U(c, {
                    className: "compact-media-item-metadata-content"
                }, function() {
                    var O = !!Eo.loading;
                    Rr(h);
                    Cs(d, O);
                    Ds(z, e, f, g, O);
                    Rr(l);
                    x()
                });
                As(q, {
                    className: "compact-media-item-menu"
                })
            })
        })
    }

    function Cs(a, b) {
        var c = "compact-media-item-headline";
        b && !a && (c += "-placeholder");
        cp({
            className: c
        }, function() {
            V(a)
        })
    }

    function Ds(a, b, c, d, e) {
        var f = b.filter(function(h) {
                return h
            }),
            g = d.filter(function(h) {
                return h
            });
        b = "subhead";
        !e || f.length || g.length || (b = "compact-media-item-subhead-placeholder");
        I({
            className: b,
            "aria-hidden$": a
        }, function() {
            f.forEach(function(h) {
                I({
                    className: "compact-media-item-byline small-text"
                }, function() {
                    V(h, {
                        J: !0
                    })
                })
            });
            c && I({
                className: "compact-media-item-byline compact-media-item-description small-text"
            }, function() {
                V(c, {
                    J: !0
                })
            });
            g.forEach(function(h) {
                I({
                    className: "compact-media-item-stats small-text"
                }, function() {
                    V(h, {
                        J: !0
                    })
                })
            })
        })
    };

    function Es(a, b) {
        T(a, "ytm-thumbnail-overlay-resume-playback-renderer", b, function() {
            I({
                className: "thumbnail-overlay-resume-playback-progress",
                style$: "width: " + a.percentDurationWatched + "%;"
            })
        })
    };

    function Fs(a, b) {
        T(a, "ytm-thumbnail-overlay-time-status-renderer", b, function(c) {
            c.setAttribute("data-style", a.style || "");
            V(a.text)
        })
    };

    function Gs(a) {
        I({
            className: "video-thumbnail-overlay-side center vbox"
        }, a)
    }

    function Hs(a) {
        I({
            className: "video-thumbnail-overlay-bottom"
        }, a)
    }

    function Is(a) {
        I({
            className: "video-thumbnail-overlay-bottom-group"
        }, a)
    };
    var Js = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Ks = B("SHOW_MORE");

    function Ls(a) {
        a = a.currentTarget;
        a.hasAttribute("loading") || (a.setAttribute("loading", ""), a.dispatchEvent(new CustomEvent("ytm-load-more", {
            bubbles: !0,
            detail: a
        })))
    }

    function Ms(a, b, c) {
        var d = b.nextContinuationData;
        d && H("c3-next-continuation", {
            onclick: Ls,
            container: a,
            nextContinuationData: d,
            Nb: c
        }, function(e) {
            Bo(e, "data", d, function() {
                e.removeAttribute("loading")
            });
            Aq({
                className: "nextcontinuation-button"
            }, null, function() {
                d.label ? V(d.label) : w(Ks)
            });
            I({
                className: "spinner nextcontinuation-spinner"
            })
        })
    };
    var Ns = W({
        playlistVideoRenderer: function(a, b) {
            T(a, "ytm-playlist-video-renderer", b, function() {
                var c = [a.shortBylineText];
                a.upcomingEventData && a.upcomingEventData.upcomingEventText && c.push(a.upcomingEventData.upcomingEventText);
                Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    lengthText: a.lengthText,
                    headline: E(function() {
                        return a.title
                    }),
                    H: c,
                    ra: a.badges,
                    overlay: function() {
                        Is(function() {
                            return Js(a.thumbnailOverlays)
                        })
                    },
                    menu: a.menu
                })
            })
        }
    });

    function Os(a) {
        a.continuations && I({
            className: "vbox"
        }, function() {
            a.continuations.forEach(function(b) {
                return Ms(a, b)
            })
        })
    };

    function Ps(a, b) {
        b && I({
            className: a
        }, function() {
            V(b)
        })
    }

    function Qs(a) {
        var b = a.title,
            c = a.subtitle,
            d = a.thumbnail,
            e = void 0 === a.header ? Fa : a.header,
            f = void 0 === a.footer ? Fa : a.footer;
        H("ytm-promo", {
            className: "vbox"
        }, function() {
            e();
            d && ar(D(function() {
                return d.thumbnails[0].url
            }), {
                className: "promo-img",
                alt: ""
            });
            (b || c) && I({
                className: "promo-content"
            }, function() {
                Ps("promo-title", b);
                Ps("promo-subtitle", c)
            });
            f()
        })
    };

    function Rs(a) {
        switch (D(function() {
            return a.presentationStyle.style
        })) {
            case "NEW_CONTENT":
                return "new-content";
            case "GREYED_OUT":
                return "greyed-out";
            default:
                return ""
        }
    };
    var Ss = y("PAGE_BUILD_LABEL", void 0),
        Ts = y("SBOX_JS_URL", void 0),
        Us = y("SBOX_SETTINGS"),
        Vs = y("SHOW_OPEN_APP_BUTTON"),
        Ws = y("SHOW_SIGN_IN_BUTTON_FROM_HEADER");

    function Xs(a, b, c, d, e, f) {
        fq("navigate", {
            href: a,
            params: b,
            wb: c,
            target: d,
            Ya: e,
            element: f
        })
    };
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
        ct = np("ytm-searchbox", function(a, b) {
            function c() {
                fi(Ts, function() {
                    (0, window.ytsboxinstall)(a.querySelector("form"), at, a.querySelector('input[type="submit"]'), Us, Ys, e, a.querySelector(".searchbox-dropdown"));
                    if (A("enable_signed_in_mweb_zero_prefix_suggest"))
                        for (at.blur(); at !=
                            document.activeElement;) at.focus()
                })
            }

            function d(l) {
                bt = l.target.value;
                b()
            }

            function e(l, n) {
                bt = at.value;
                if (!bt.trim()) return !1;
                var q = {};
                n && (q.oq = n.oq, q.gs_l = n.gs_l);
                var t = "/results?search_query=" + encodeURIComponent(bt).replace(/%20/g, "+");
                Xs(t, q);
                at.blur();
                return !1
            }

            function f(l) {
                l.preventDefault();
                at.focus();
                bt = "";
                b()
            }
            var g = !1,
                h = "";
            return {
                ia: function() {
                    var l = Q();
                    l = l.pathname + l.search;
                    h != l && (h = l, bt = hq())
                },
                F: function() {
                    Zo({
                        action: "/results",
                        className: "searchbox-form cbox",
                        onsubmit: e
                    }, function() {
                        I({
                            className: "searchbox-input-wrapper"
                        }, function() {
                            fp({
                                className: "searchbox-input title",
                                name: v("search"),
                                placeholder: Zs,
                                autocomplete: "off",
                                autocorrect$: "off",
                                spellcheck: "false",
                                oninput: d
                            }, function(l) {
                                at = l;
                                at.value != bt && (at.value = bt)
                            })
                        });
                        fp({
                            type: "submit",
                            hidden: !0
                        });
                        bt && Vp({
                            name: "DISMISSAL",
                            w: $s,
                            onclick: f
                        });
                        Vp({
                            name: "SEARCH",
                            w: Zs,
                            onclick: function() {
                                return e()
                            }
                        })
                    });
                    I({
                        className: "searchbox-dropdown"
                    }, function() {
                        jh = kh.lastChild
                    })
                },
                Ob: function(l, n) {
                    n.mc ? at.focus() : at.blur();
                    g || !n.mc && !n.Ee || (g = !0, c())
                }
            }
        });
    var dt = B("SEARCH_CHANNEL"),
        et = B("SEARCH_CLEAR_LABEL"),
        ft = np("ytm-channel-search-box-renderer", function(a, b) {
            function c(h) {
                g = h.target.value;
                b()
            }

            function d(h) {
                g = f.value;
                if (!g.trim()) return !1;
                h = sq(h.endpoint);
                if (!h) return !1;
                Xs(xe(h, "query", g));
                f.blur();
                return !1
            }

            function e(h) {
                h.preventDefault();
                f.focus();
                g = "";
                b()
            }
            var f = null,
                g = Ae(Q().href, "query") || "";
            return {
                F: function(h) {
                    Zo({
                        className: "channel-searchbox-form cbox",
                        onsubmit: function() {
                            return d(h)
                        }
                    }, function() {
                        I({
                            className: "channel-searchbox-input-wrapper cbox"
                        }, function() {
                            fp({
                                className: "channel-searchbox-input  title",
                                placeholder: dt,
                                autocomplete: "off",
                                autocorrect$: "off",
                                spellcheck: "false",
                                oninput: c
                            }, function(l) {
                                f = l;
                                f.value != g && (f.value = g)
                            })
                        });
                        fp({
                            type: "submit",
                            hidden: !0
                        });
                        g && Wp("DISMISSAL", et, e);
                        Wp("SEARCH", dt, function() {
                            return d(h)
                        })
                    })
                }
            }
        });
    var gt = G.cd,
        ht = W({
            menuRenderer: vs
        });

    function it(a, b) {
        T(a, "ytm-clarification-renderer", b, function() {
            jt(a, function() {
                a.image && Y(a.image, {
                    className: "clarification-image small-style",
                    alt: ""
                });
                I({
                    className: "clarification-body"
                }, function() {
                    I({
                        className: "clarification-text subhead"
                    }, function() {
                        V(a.text)
                    });
                    kt(a)
                })
            })
        })
    }

    function lt(a, b) {
        T(a, "ytm-clarification-renderer", b, function() {
            jt(a, function() {
                a.image && Y(a.image, {
                    className: "clarification-image",
                    alt: ""
                });
                I({
                    className: "clarification-body"
                }, function() {
                    cp({
                        className: "clarification-content-title"
                    }, function() {
                        V(a.contentTitle)
                    });
                    I({
                        className: "clarification-text medium-style subhead"
                    }, function() {
                        V(a.text)
                    });
                    kt(a)
                })
            })
        })
    }

    function mt(a, b) {
        T(a, "ytm-clarification-renderer", b, function() {
            jt(a, function() {
                I({
                    className: "clarification-body"
                }, function() {
                    I({
                        className: "clarification-section-header cbox"
                    }, function() {
                        a.image && Y(a.image, {
                            className: "clarification-image small-style",
                            alt: ""
                        });
                        cp({
                            className: "clarification-section-title title"
                        }, function() {
                            V(a.sectionTitle)
                        })
                    });
                    I({
                        className: "clarification-content-title"
                    }, function() {
                        V(a.contentTitle)
                    });
                    I({
                        className: "clarification-text large-style subhead"
                    }, function() {
                        V(a.text)
                    });
                    kt(a)
                })
            })
        })
    }

    function jt(a, b) {
        I({
            className: "clarification-container breakout-item-content"
        }, function() {
            var c = "clarification-endpoint";
            a.menu && (c += " clarification-with-menu");
            Gq(a.endpoint, {
                className: c
            }, {
                w: gt,
                ab: !0
            }, b);
            ht(a.menu, {
                className: "clarification-menu-button"
            })
        })
    }

    function kt(a) {
        a.source && I({
            className: "clarification-source secondary-text cbox"
        }, function() {
            V(a.source);
            N("OPEN_IN_NEW", {
                className: "clarification-source-icon"
            })
        })
    };
    var nt = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    function ot(a, b) {
        T(a, "ytm-clip-attribution-renderer", b, function() {
            I({
                className: "ytm-clip-attribution-header"
            }, function() {
                vr(a.authorAvatar, {
                    alt: "",
                    className: "ytm-clip-attribution-avatar"
                });
                I({
                    className: "ytm-clip-attribution-author"
                }, function() {
                    bp(null, function() {
                        return V(a.clipAuthor)
                    });
                    J({
                        className: "ytm-clip-attribution-created"
                    }, function() {
                        return V(a.createdText)
                    })
                });
                nt(a.menu, {
                    isBottomMenu: !0,
                    cancelButtonIcon: "DISMISSAL"
                })
            });
            ap({
                className: "ytm-clip-attribution-content"
            }, function() {
                return V(a.title)
            });
            bp({
                className: "ytm-clip-attribution-views"
            }, function() {
                return V(a.viewCount)
            })
        })
    };
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
        p("ytglobal.ytUtilActivityCallback_", function() {
            fq("user-activity")
        }, void 0);
        window.addEventListener("popstate", function() {
            Zr || pk()
        })
    }

    function zt() {
        y("MWEB_STICKY_PLAYER", !1) && bq() && At();
        var a = document.querySelector("ytm-pivot-bar-renderer");
        a && !Wq() && (window.innerHeight <= wt ? (og(a, "pivot-bar-slide-out"), ng(a, "pivot-bar-slide-in")) : (og(a, "pivot-bar-slide-in"), ng(a, "pivot-bar-slide-out")))
    }

    function At() {
        rl.className = rt.offsetHeight > .6 * window.innerHeight ? "player-container" : "player-container sticky-player"
    }

    function Bt() {
        ut.Va()
    }

    function tt() {
        if (y("MWEB_STICKY_PLAYER", !1)) {
            var a = Ct();
            if (a) {
                var b = window.pageYOffset;
                bq() ? (At(), a.className = "sticky-player in") : a.className = vt > b ? "sticky-player in" : 48 <= b ? "sticky-player out" : "sticky-player in";
                vt = b
            }
        }
    }

    function Ct() {
        var a = so(v("header-bar"));
        return document.getElementById(a.toString())
    }

    function Dt() {
        var a = Ct();
        a && (a.className = "sticky-player in")
    };
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

    function Ot() {
        A("mweb_continue_autonav_with_comment_collapse") && (Ht = !1);
        Mt = Ht || Jt || It;
        Nt()
    }

    function Pt() {
        It = !0;
        Ot()
    }

    function Qt() {
        It = !1;
        clearTimeout(Kt);
        Kt = setTimeout(Pt, 18E5);
        Ot()
    }

    function Rt() {
        Gt.Va()
    }

    function Ft() {
        Ht = ((document.body || document.documentElement).scrollTop || window.pageYOffset || 0) > 2 * rt.offsetHeight / 3;
        Ot()
    }

    function St(a) {
        var b = a.detail.videoData;
        a = {
            itct: b.sessionData.itct
        };
        var c = b.sessionData;
        c = A("mweb_auto_lact") ? {
            autonav: c.autonav,
            playnext: c.playnext,
            lact: sk()
        } : {
            autonav: c.autonav,
            playnext: c.playnext
        };
        b = xe("/watch", "v", b.videoId);
        A("c3_client_side_screens") ? Xs(b, a, c, void 0, 3832) : Xs(b, a, c)
    }

    function Tt() {
        $r()
    }

    function Ut() {
        var a = Q().hash;
        Jt = Gb(a, "#") && !Gb(a, "#fauxfullscreen");
        Ot()
    };
    var Vt = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function Wt(a, b) {
        T(a, "ytm-compact-video-renderer", b, function() {
            var c = [a.shortBylineText];
            a.upcomingEventData && a.upcomingEventData.upcomingEventText && c.push(a.upcomingEventData.upcomingEventText);
            Bs({
                thumbnail: E(function() {
                    return a.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.title
                }),
                H: c,
                vb: [a.shortViewCountText, a.publishedTimeText],
                Za: a.topStandaloneBadge,
                ra: a.badges,
                overlay: function() {
                    Is(function() {
                        return Vt(a.thumbnailOverlays)
                    })
                },
                menu: a.menu,
                xb: Vq() ? 340 : void 0
            })
        })
    };

    function Xt(a, b) {
        H("c3-material-toggle-button", a, function() {
            H("button", {
                className: "c3-material-toggle-button",
                "aria-label$": b.w,
                "aria-pressed$": b.checked,
                onclick: b && b.onclick,
                disabled: b && b.disabled
            }, function() {
                I({
                    className: "c3-material-toggle-button-track"
                });
                I({
                    className: "c3-material-toggle-button-circle"
                })
            })
        })
    };
    var Yt = W({
        compactVideoRenderer: Wt
    });

    function Zt() {
        var a = Lt = !Lt,
            b = !rm(om.K(), 140);
        a != b && (b = ve({
            state: a ? "enabled" : "disabled"
        }), Ol("/gen_204?a=autoplay" + (b ? "&" + b : ""), void 0), b = om.K(), a || tm(141, !0), tm(140, !a), b.save(), ho.set("autonav_disabled", !a));
        if (y("AUTONAV_EXTRA_CHECK")) {
            a = !rm(om.K(), 140);
            b = !ho.get("autonav_disabled");
            var c = "";
            a != b && (c = "Cookie does not match localstorage value cookie:" + a + " LocalStorage:" + b);
            c && Lh(Error(c), "WARNING")
        }
        Nt();
        R()
    }

    function $t(a) {
        var b = Lt;
        I({
            className: "ytm-autonav-bar cbox"
        }, function() {
            bp({
                className: "ytm-autonav-title"
            }, function() {
                V(a.title)
            });
            I({
                className: "ytm-autonav-toggle-wrapper cbox"
            }, function() {
                I({
                    className: "ytm-autonav-toggle-description",
                    "aria-hidden$": "true"
                }, function() {
                    V(a.toggleDescription)
                });
                Xt({
                    className: "ytm-autonav-toggle"
                }, {
                    w: G.Dc,
                    checked: b,
                    onclick: Zt
                })
            })
        })
    };

    function au(a, b) {
        T(a, "ytm-compact-channel-renderer", b, function() {
            Bs({
                thumbnail: E(function() {
                    return a.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.displayName
                }),
                H: [a.videoCountText, a.subscriberCountText]
            })
        })
    };

    function bu(a, b) {
        var c = D(function() {
            return a.icon.iconType
        });
        T(a, "ytm-compact-link-renderer", b, function() {
            Gq(a.serviceEndpoint || a.navigationEndpoint, {
                className: "compact-link-endpoint"
            }, {
                ab: !0
            }, function() {
                N(c, {
                    className: "compact-link-icon"
                });
                V(a.title)
            })
        })
    };

    function cu(a, b) {
        "string" === typeof a && (a = Ir(a));
        return {
            thumbnailOverlayTimeStatusRenderer: {
                text: a,
                style: void 0 === b ? "DEFAULT" : b
            }
        }
    };

    function du(a) {
        var b = D(function() {
            return a.badges[0].liveBadge.label
        });
        return b ? [cu(b, "LIVE")] : a.lengthText ? [cu(a.lengthText)] : void 0
    };
    var eu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        buttonRenderer: Z
    });
    var fu = W({
        buttonRenderer: Z
    });

    function gu(a) {
        Gs(function() {
            I(null, function() {
                V(a.videoCountShortText)
            });
            N("PLAYLISTS")
        })
    }

    function hu(a, b) {
        T(a, "ytm-compact-playlist-renderer", b, function() {
            Bs({
                thumbnail: E(function() {
                    return a.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.title
                }),
                H: [a.shortBylineText, a.videoCountText],
                overlay: function() {
                    return gu(a)
                },
                menu: a.menu
            })
        })
    };

    function iu(a, b) {
        T(a, "ytm-visit-site-cta-renderer", b, function() {
            V(a.text)
        })
    };
    var ju = W({
        visitSiteCtaRenderer: iu
    });

    function ku(a) {
        zo(function() {
            a.impressionUrls && Sl(a.impressionUrls)
        })
    };

    function lu(a) {
        Gs(function() {
            I(null, function() {
                V(a.videoCountShortText)
            });
            N("MIX")
        })
    }

    function mu(a, b) {
        T(a, "ytm-compact-radio-renderer", b, function() {
            Bs({
                thumbnail: E(function() {
                    return a.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.title
                }),
                H: [a.longBylineText],
                overlay: function() {
                    return lu(a)
                },
                menu: a.menu
            })
        })
    };

    function nu(a) {
        var b = E(function() {
            return a.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.text
        });
        Hs(function() {
            V(b)
        })
    }

    function ou(a, b) {
        T(a, "ytm-compact-show-renderer", b, function() {
            Bs({
                thumbnail: E(function() {
                    return a.thumbnailRenderer.showCustomThumbnailRenderer.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.title
                }),
                H: [a.shortBylineText],
                overlay: function() {
                    return nu(a)
                },
                menu: a.menu
            })
        })
    };
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

    function ru(a) {
        H("ytm-simple-card", null, function(b) {
            U(E(function() {
                return a.endpoint
            }), {
                className: "simple-card-endpoint"
            }, function() {
                var c = er(a.thumbnail, b);
                I({
                    className: "simple-card-thumbnail background-image",
                    style$: "background-image: url(" + c + ");"
                });
                cp({
                    className: "simple-card-title"
                }, function() {
                    V(E(function() {
                        return a.title
                    }))
                })
            })
        })
    };

    function su(a) {
        bp({
            className: "ytm-game-card-line-item"
        }, function() {
            V(a.title)
        });
        a.liveViewersText && cp({
            className: "ytm-game-card-line-item ytm-game-card-live-viewers subhead small-text"
        }, function() {
            V(a.liveViewersText)
        })
    }

    function tu(a, b) {
        var c = a.game && a.game.gameDetailsRenderer;
        c && T(a, "ytm-game-card-renderer", b, function() {
            U(c.endpoint, {
                className: "ytm-game-card-endpoint"
            }, function() {
                c.boxArt && zs(c.boxArt, null, void 0, "ytm-game-card-box-art");
                su(c)
            })
        })
    };
    var uu = W({
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function vu(a) {
        var b = D(function() {
            return a.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.text
        });
        Hs(function() {
            V(b)
        })
    };
    var wu = W({
        channelThumbnailWithLinkRenderer: function(a) {
            U(a.navigationEndpoint, null, function() {
                vr(a.thumbnail, {
                    className: "channel-thumbnail-icon"
                })
            })
        }
    });

    function xu(a, b) {
        T(a, "ytm-rich-list-header-renderer", b, function() {
            wu(a.channelThumbnail);
            U(a.endpoint, {
                className: "ytm-rich-list-header-text"
            }, function() {
                var c = "ytm-rich-list-header-title";
                !a.subtitle && a.channelThumbnail && (c += " ytm-rich-list-header-title-only");
                cp({
                    className: c
                }, function() {
                    V(a.title)
                });
                I({
                    className: "subhead small-text"
                }, function() {
                    V(a.subtitle)
                })
            })
        })
    };
    var yu = W({
        thumbnailOverlayTimeStatusRenderer: Fs,
        menuRenderer: vs
    });

    function zu(a, b) {
        var c = [a.bylineText, a.metadataText];
        T(a, "ytm-video-card-renderer", b, function() {
            var d = a.thumbnailOverlays;
            U(a.navigationEndpoint, {
                className: "video-card-image",
                "aria-hidden$": !a.thumbnailOverlays
            }, function() {
                zs(a.thumbnail, function() {
                    Is(function() {
                        return yu(d)
                    })
                })
            });
            I({
                className: "video-card-metadata"
            }, function() {
                U(a.navigationEndpoint, {
                    className: "video-card-title-container"
                }, function() {
                    cp({
                        className: "video-card-title"
                    }, function() {
                        V(a.title)
                    });
                    I({
                        className: "subhead"
                    }, function() {
                        c.filter(function(e) {
                            return e
                        }).forEach(function(e) {
                            I({
                                className: "small-text"
                            }, function() {
                                V(e, {
                                    J: !0
                                })
                            })
                        })
                    })
                });
                yu(a.menu, {
                    className: "video-card-menu"
                })
            })
        })
    };
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

    function Du(a, b) {
        return a.reduceRight(function(c, d) {
            return c || b(d)
        }, null)
    }

    function Eu(a) {
        for (var b in a) return a[b];
        return {}
    }

    function Fu(a, b) {
        if (b(a)) return [a];
        if (null == a || "object" != typeof a) return null;
        for (var c = ba(u.Ua(a)), d = c.next(); !d.done; d = c.next())
            if (d = d.value)
                if (d = Fu(d, b)) return [a].concat(ea(d));
        return null
    }

    function Gu(a, b) {
        return Fu(a, function(c) {
            return c == b
        })
    }

    function Hu(a, b, c) {
        return Fu(a, function(d) {
            return d[b] == c
        })
    }

    function Iu(a, b, c) {
        a = Gu(a, b) || [];
        return Du(a, c)
    }

    function Ju(a, b, c) {
        a = Hu(a, b, c) || [];
        return a[a.length - 1]
    }

    function Ku(a, b) {
        var c = Fu(a, function(d) {
            return d[b]
        }) || [{}];
        return c[c.length - 1][b]
    };

    function Lu() {};

    function Mu() {
        this.j = [];
        this.g = [];
        this.i = []
    }

    function Nu(a, b, c) {
        a.j.push(b);
        a.g.push(c);
        a.i.forEach(function(d) {
            d instanceof Error ? c(d) : b(d)
        })
    }

    function Ou(a, b) {
        a.i.push(b);
        a.j.forEach(function(c) {
            c(b)
        })
    }

    function Pu(a, b) {
        a.g.length || Vd(b);
        a.i.push(b);
        a.g.forEach(function(c) {
            c(b)
        })
    };

    function Qu(a) {
        throw a;
    }

    function Ru(a) {
        return a
    }

    function Su(a) {
        this.g = a;
        this.i = !1;
        this.j = Ud()
    }

    function Tu(a, b, c) {
        a.j = a.j.then(function() {
            if (!a.i) return b(c)
        }).then(function(d) {
            d && (a.i = d.done, Ou(a.g, d))
        }, function(d) {
            Pu(a.g, d)
        })
    }

    function Uu(a, b, c) {
        var d = b ? b : Ru,
            e = c ? c : Qu,
            f = new Su(new Mu);
        Nu(a.g, function(g) {
            return Tu(f, d, g)
        }, function(g) {
            return Tu(f, e, g)
        });
        return f
    };

    function Vu() {
        function a(g, h) {
            var l = E(function() {
                return h.response.continuationContents
            });
            if (!l) return {};
            if (g && l[g]) return l[g];
            for (var n in l) return l[n];
            return {}
        }

        function b(g) {
            if (g.response && g.response.continuationContents) {
                var h = Eu(g.response.continuationContents);
                return Eu(E(function() {
                    return h.contents[0]
                }))
            }
            return {}
        }

        function c(g, h, l) {
            g[h] || (g[h] = []);
            g[h].push.apply(g[h], ea(l[h]))
        }

        function d(g, h, l) {
            h = we(h, {
                ctoken: g.continuation
            });
            Uu(f(h, {
                itct: g.clickTrackingParams
            }, Q().href), function(n) {
                n.done && l(n.value.response)
            }, function(n) {
                .01 > Math.random() && Lh(n);
                l({
                    response: {},
                    page: ""
                })
            })
        }

        function e(g) {
            return g.Fa || e(g.parentNode)
        }
        var f = Wu;
        window.addEventListener("ytm-load-more", function(g) {
            var h = g.detail,
                l = h.container,
                n = h.Nb;
            d(h.nextContinuationData, e(g.target), function(q) {
                q = a(n, q);
                "items" in q && c(l, "items", q);
                "contents" in q && c(l, "contents", q);
                l.continuations = q.continuations;
                R()
            })
        });
        window.addEventListener("ytm-reload-container", function(g) {
            g = g.detail;
            var h = g.ze,
                l = g.Ae;
            d(g.reloadContinuationData, oe(ne(window.location.href)[5] || null) || "/", function(n) {
                n = b(n);
                for (var q in n) h[q] = n[q];
                l && l();
                R()
            })
        })
    };
    var Xu = W({
        albumCardRenderer: function(a, b) {
            T(a, "ytm-album-card-renderer", b, function() {
                ru({
                    endpoint: a.navigationEndpoint,
                    thumbnail: a.thumbnail,
                    title: a.title
                })
            })
        },
        buttonRenderer: Z,
        gameCardRenderer: tu,
        movieCardRenderer: function(a, b) {
            T(a, "ytm-movie-card-renderer", b, function() {
                U(a.navigationEndpoint, {
                    className: "ytm-movie-card-endpoint"
                }, function() {
                    zs(a.thumbnail, function() {
                        Is(function() {
                            return uu(du(a))
                        })
                    });
                    cp({
                        className: "ytm-movie-card-title"
                    }, function() {
                        V(a.title)
                    });
                    Rr(a.movieBadge)
                })
            })
        },
        premiumSeasonCardRenderer: function(a, b) {
            T(a, "ytm-premium-season-card-renderer", b, function() {
                U(a.navigationEndpoint, {
                    className: "ytm-premium-season-card-endpoint"
                }, function() {
                    zs(a.thumbnail, function() {
                        return vu(a)
                    })
                })
            })
        },
        previewCardRenderer: function(a, b) {
            T(a, "ytm-preview-card-renderer", b, function() {
                I({
                    className: "ytm-preview-card-content"
                }, function() {
                    Au(a.header, {
                        className: "ytm-preview-card-header"
                    });
                    Au(a.contents, {
                        className: "ytm-preview-card-item"
                    })
                })
            })
        },
        richListHeaderRenderer: xu,
        searchRefinementCardRenderer: function(a, b) {
            T(a, "ytm-search-refinement-card-renderer", b, function(c) {
                a.searchRefinementCardRendererStyle && c.setAttribute("data-style", a.searchRefinementCardRendererStyle.value);
                ru({
                    endpoint: a.searchEndpoint,
                    thumbnail: a.thumbnail,
                    title: a.query
                })
            })
        },
        sortFilterSubMenuRenderer: function(a, b) {
            T(a, "ytm-sort-filter-sub-menu-renderer", b, function() {
                a.subMenuItems && a.subMenuItems.length && rs({
                    icon: "TUNE",
                    label: G.gb,
                    content: function() {
                        a.subMenuItems.forEach(function(c) {
                            if (c.title) {
                                var d = {
                                    Ae: function() {
                                        return b.loadingElement.removeAttribute("loading")
                                    },
                                    reloadContinuationData: c.continuation.reloadContinuationData,
                                    ze: b.reloadableData
                                };
                                I({
                                    className: "ytm-sort-filter-sub-menu-item",
                                    selected$: c.selected,
                                    onclick: function(e) {
                                        var f = b.loadingElement;
                                        f.hasAttribute("loading") || (f.setAttribute("loading", ""), e.currentTarget.dispatchEvent(new CustomEvent("ytm-reload-container", {
                                            bubbles: !0,
                                            detail: d
                                        })))
                                    }
                                }, function() {
                                    w(c.title)
                                })
                            }
                        })
                    },
                    R: G.P
                })
            })
        },
        videoCardRenderer: zu
    });

    function Yu(a, b) {
        T(a, "ytm-horizontal-card-list-renderer", b, function(c) {
            I({
                className: "horizontal-card-list-top-container"
            }, function() {
                Xu(a.header, {
                    className: "horizontal-card-list-header"
                });
                a.sortFilter ? Xu(a.sortFilter, {
                    className: "horizontal-card-list-sort-filter",
                    loadingElement: c,
                    reloadableData: a
                }) : a.button && Xu(a.button, {
                    className: "horizontal-card-list-button"
                })
            });
            I({
                className: "spinner"
            });
            I({
                className: "horizontal-card-list-cards"
            }, function() {
                Xu(a.cards, {
                    className: "horizontal-card-list-card"
                })
            })
        })
    };
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

    function dv(a) {
        I({
            className: "promoted-sparkles-text-search-primary-container"
        }, function() {
            ev(a);
            I({
                className: "promoted-sparkles-text-search-menu"
            }, function() {
                cv(a.content.closeButton, {
                    className: "menu"
                })
            })
        })
    }

    function ev(a) {
        I({}, function() {
            fv(a);
            gv(a)
        })
    }

    function fv(a) {
        cp({
            className: "promoted-sparkles-text-search-title",
            onclick: function() {
                return hv(a)
            }
        }, function() {
            V(a.content.title)
        })
    }

    function gv(a) {
        I({
            className: "promoted-sparkles-text-search-description subhead",
            onclick: function() {
                return hv(a)
            }
        }, function() {
            V(a.content.descriptionText)
        })
    }

    function iv(a) {
        I({
            className: "promoted-sparkles-text-search-format-container"
        }, function() {
            Br({
                className: "promoted-sparkles-text-search-ad-badge",
                "aria-label$": G.eb,
                onclick: function() {
                    return hv(a)
                }
            }, function() {
                w(G.Aa)
            });
            J({
                className: "promoted-sparkles-text-search-display-url",
                onclick: function() {
                    return hv(a)
                }
            }, function() {
                V(a.content.websiteText)
            });
            a.content.ctaButton && I({
                className: "promoted-sparkles-text-search-call-to-action-button",
                onclick: function() {
                    return jv(a)
                }
            }, function() {
                cv(a.content.ctaButton)
            })
        })
    }

    function jv(a) {
        var b = E(function() {
            return a.content.ctaButton.buttonRenderer.navigationEndpoint
        });
        b && Bq(b)
    }

    function hv(a) {
        var b = E(function() {
            return a.content.navigationEndpoint
        });
        b && (Bq(b), S(b, a, !1))
    };
    var kv = W({
        buttonRenderer: Z
    });

    function lv(a, b) {
        a && a.length && H("ytm-badge-and-byline-renderer", {}, function() {
            a.forEach(function(c) {
                c && c.runs ? J({
                    className: "ytm-badge-and-byline-item-byline small-text",
                    "aria-hidden$": b
                }, function() {
                    return V(c, {
                        J: !0
                    })
                }) : J({
                    className: "ytm-badge-and-byline-item-badge"
                }, function() {
                    return Rr(c)
                })
            })
        })
    };
    var mv = W({
        menuRenderer: vs
    });

    function nv(a, b, c, d) {
        (!d || a && b) && U(b, {
            "aria-label$": c
        }, function() {
            vr(a, {
                className: "large-media-icon",
                "aria-hidden$": !!c
            })
        })
    }

    function ov(a) {
        var b = a.thumbnail,
            c = a.channelThumbnail,
            d = a.channelEndpoint,
            e = a.Jb,
            f = a.navigationEndpoint,
            g = a.headline,
            h = void 0 === a.H ? [] : a.H,
            l = a.Za,
            n = a.ra,
            q = a.overlay,
            t = void 0 === a.menu ? null : a.menu,
            x = void 0 === a.extraContent ? Fa : a.extraContent,
            z = !(!g || !g.accessibility);
        H("ytm-large-media-item", null, function() {
            U(f, {
                "aria-hidden$": !0,
                className: "large-media-item-thumbnail-container"
            }, function() {
                ys(b, q)
            });
            I({
                className: "details"
            }, function() {
                I({
                    className: "large-media-channel"
                }, function() {
                    nv(c, d, e, g);
                    U(f, {
                        className: "large-media-item-extra-endpoint",
                        "aria-hidden$": !0
                    })
                });
                I({
                    className: "large-media-item-info cbox"
                }, function() {
                    U(f, {
                        className: "large-media-item-metadata"
                    }, function() {
                        var O = !!Eo.loading;
                        pv(g, O);
                        Rr(l, {
                            className: "large-media-item-top-badges"
                        });
                        A("mweb_single_endbadge_with_metadata") || A("mweb_single_endbadge_inline") ? qv(z, h, n, O) : (rv(z, h, O), Rr(n));
                        x()
                    });
                    mv(t, {
                        className: "large-media-item-menu"
                    })
                })
            })
        })
    }

    function pv(a, b) {
        var c = "";
        b && !a && (c = "large-media-item-headline-placeholder");
        bp({
            className: c
        }, function() {
            V(a)
        })
    }

    function rv(a, b, c) {
        var d = "subhead";
        c && !b.length && (d = "large-media-item-subhead-placeholder");
        I({
            className: d,
            "aria-hidden$": a
        }, function() {
            b.forEach(function(e) {
                J({
                    className: "large-media-item-byline small-text text-info"
                }, function() {
                    V(e, {
                        J: !0
                    })
                })
            })
        })
    }

    function qv(a, b, c, d) {
        var e = "";
        !d || b.length || c.length || (e = "large-media-item-headline-placeholder");
        I({
            className: e
        }, function() {
            lv(b, a);
            c && lv(c, a)
        })
    };

    function sv(a) {
        zo(function() {
            a.impressionUrls && Sl(a.impressionUrls)
        })
    };

    function tv(a, b) {
        a.onclick = function(c) {
            c = id(c.target, "A");
            b.clickTrackingUrls && c && "/watch" == Zp(c.href) && Sl(b.clickTrackingUrls)
        }
    };
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

    function xv(a) {
        I({
            className: "grid-media-item"
        }, function() {
            return Bs(a)
        })
    };

    function yv(a) {
        Gs(function() {
            I(null, function() {
                V(a.videoCountShortText)
            });
            N("PLAYLISTS")
        })
    };

    function zv(a) {
        Gs(function() {
            I(null, function() {
                V(a.videoCountShortText)
            });
            N("MIX")
        })
    };
    var Av = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var Bv = G.Ba,
        Cv = W({
            gridPlaylistRenderer: function(a, b) {
                T(a, "ytm-grid-playlist-renderer", b, function() {
                    xv({
                        thumbnail: a.thumbnail,
                        navigationEndpoint: a.navigationEndpoint,
                        headline: a.title,
                        H: [a.shortBylineText, a.videoCountText],
                        overlay: function() {
                            return yv(a)
                        },
                        menu: a.menu
                    })
                })
            },
            gridRadioRenderer: function(a, b) {
                T(a, "ytm-grid-radio-renderer", b, function() {
                    xv({
                        thumbnail: a.thumbnail,
                        navigationEndpoint: a.navigationEndpoint,
                        headline: a.title,
                        H: [a.shortBylineText, a.videoCountText],
                        overlay: function() {
                            return zv(a)
                        },
                        menu: a.menu
                    })
                })
            },
            gridVideoRenderer: function(a, b) {
                T(a, "ytm-grid-video-renderer", b, function() {
                    var c = [a.shortBylineText];
                    a.upcomingEventData && a.upcomingEventData.upcomingEventText && c.push(a.upcomingEventData.upcomingEventText);
                    xv({
                        thumbnail: a.thumbnail,
                        navigationEndpoint: a.navigationEndpoint,
                        headline: a.title,
                        H: c,
                        vb: [a.shortViewCountText, a.publishedTimeText],
                        Za: a.topStandaloneBadge,
                        ra: a.badges,
                        overlay: function() {
                            Is(function() {
                                return Av(a.thumbnailOverlays)
                            })
                        },
                        menu: a.menu
                    })
                })
            }
        });

    function Dv(a, b, c) {
        var d = "";
        "home" === aq() && Vq && (a.items.length > b && (d += " horizontal-list-collapse-portrait"), a.items.length > c && (d += " horizontal-list-collapse-landscape"));
        return d
    };
    var Ev = {
        compactChannelRenderer: au,
        compactPlaylistRenderer: hu,
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactStationRenderer: function(a, b) {
            T(a, "ytm-compact-station-renderer", b, function() {
                Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    headline: E(function() {
                        return a.title
                    }),
                    H: [a.description, a.videoCountText]
                })
            })
        },
        compactVideoRenderer: Wt
    };
    var Fv = B("SHOW_MORE"),
        Gv = W(Ev);

    function Hv(a) {
        I({
            className: "center"
        }, function() {
            return Vp({
                name: "MORE_CHEVRON",
                w: Fv,
                onclick: a
            })
        })
    }

    function Iv(a) {
        T(a, "ytm-vertical-list-renderer", null, function(b) {
            var c = b.hasAttribute("aria-expanded") ? void 0 : a.collapsedItemCount,
                d = void 0 !== c && a.items.length > c;
            Gv(a.items.slice(0, c), {
                className: "item"
            });
            c && d && Hv(function() {
                b.setAttribute("aria-expanded", "true");
                vh(b, Iv, a)
            })
        })
    };
    var Kv = W({
        gridRenderer: function(a, b) {
            T(a, "ytm-grid-renderer", b, function() {
                a.items.forEach(function(c) {
                    Object.keys(c).length && I({
                        className: "ytm-grid-renderer-item"
                    }, function() {
                        return wv(c)
                    })
                })
            })
        },
        horizontalListRenderer: function(a) {
            var b = a.visibleItemCount ? Math.floor(a.visibleItemCount / 3) : 1,
                c = 3 * b,
                d = 4 * b;
            T(a, "ytm-horizontal-list-renderer", {
                className: Dv(a, c, d)
            }, function(e) {
                I({
                    className: "horizontal-list-items"
                }, function() {
                    for (var f = a.items, g = 0; g < f.length; g++) {
                        var h = "horizontal-list-item";
                        g < c && (h += " horizontal-list-item-portrait-visible");
                        g < d && (h += " horizontal-list-item-landscape-visible");
                        Cv(f[g], {
                            className: h
                        })
                    }
                });
                Vp({
                    onclick: function() {
                        og(e, "horizontal-list-collapse-portrait");
                        og(e, "horizontal-list-collapse-landscape")
                    },
                    w: Bv,
                    className: "horizontal-list-expand-button",
                    name: "MORE_CHEVRON"
                })
            })
        },
        menuRenderer: vs,
        verticalListRenderer: Iv,
        shelfFeaturedTextBadgeRenderer: Jv
    });

    function Jv(a) {
        Br({
            className: "shelf-featured-badge"
        }, function() {
            V(a.label)
        })
    }

    function Lv(a) {
        a.thumbnail && vr(a.thumbnail, {
            className: "shelf-icon"
        });
        I({
            className: "shelf-title-bar"
        }, function() {
            bp(null, function() {
                V(a.title, {
                    J: !0
                })
            });
            Kv(a.badges);
            V(a.titleAnnotation, {
                J: !0
            })
        })
    }

    function Mv(a) {
        (a.title || a.badges || a.titleAnnotation || a.thumbnail || a.menu) && I({
            className: "shelf-header cbox"
        }, function() {
            a.endpoint ? U(a.endpoint, {
                className: "shelf-header-endpoint cbox"
            }, function() {
                Lv(a)
            }) : Lv(a);
            Kv(a.menu)
        })
    }

    function Nv(a, b) {
        T(a, "ytm-shelf-renderer", b, function() {
            Mv(a);
            Kv(a.content)
        })
    };
    var Ov = W({
        buttonRenderer: Z,
        subscribeButtonRenderer: ur
    });

    function Pv(a, b) {
        var c = b && b.expanded;
        T(a, "ytm-slim-owner-renderer", b, function() {
            Gq(a.navigationEndpoint, {
                className: "slim-owner-icon-and-title"
            }, {
                w: a.title && a.title.simpleText ? a.title.simpleText : "",
                ab: !0
            }, function() {
                a.thumbnail && vr(a.thumbnail, {
                    className: "slim-owner-profile-icon"
                });
                I(null, function() {
                    bp(null, function() {
                        V(a.title, {
                            J: !0
                        })
                    });
                    I({
                        className: "subhead",
                        "aria-hidden$": "true"
                    }, function() {
                        V(c ? a.expandedSubtitle : a.collapsedSubtitle)
                    })
                })
            });
            I({
                className: "slim-owner-subscribe-button cbox"
            }, function() {
                Ov(a.subscribeButton)
            });
            JSON && a.channelUrl && a.channelName && jp({
                type: "application/ld+json"
            }, function() {
                var d = JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [{
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@id": a.channelUrl,
                            name: a.channelName
                        }
                    }]
                });
                w(d)
            })
        })
    };
    var Qv = W({
        richMetadataRenderer: function(a, b) {
            U(a.endpoint, null, function() {
                T(a, "ytm-rich-metadata-renderer", b, function() {
                    a.thumbnail && ("RICH_METADATA_RENDERER_STYLE_TOPIC" === a.style ? vr(a.thumbnail, {
                        className: "ytm-rich-metadata-topic"
                    }) : Y(a.thumbnail, {
                        alt: "",
                        className: "ytm-rich-metadata-boxart"
                    }));
                    I({
                        className: "ytm-rich-metadata-details"
                    }, function() {
                        bp(null, function() {
                            V(a.title)
                        });
                        a.subtitle && I({
                            className: "ytm-rich-metadata-subtitle small-text"
                        }, function() {
                            V(a.subtitle)
                        });
                        I({
                            className: "ytm-rich-metadata-endpoint small-text"
                        }, function() {
                            V(a.callToAction);
                            N(E(function() {
                                return a.callToActionIcon.iconType
                            }))
                        })
                    })
                })
            })
        }
    });
    var Rv = W({
        metadataRowHeaderRenderer: function(a, b) {
            T(a, "ytm-metadata-row-header-renderer", b, function() {
                a.hasDividerLine ? bp({
                    className: "metadata-row-header-header"
                }, function() {
                    V(a.content)
                }) : V(a.content)
            })
        },
        metadataRowRenderer: function(a, b) {
            T(a, "ytm-metadata-row-renderer", b, function() {
                J({
                    className: "metadata-row-title"
                }, function() {
                    V(a.title)
                });
                J({
                    className: "metadata-row-items"
                }, function() {
                    a.contents.forEach(function(c) {
                        J({
                            className: "metadata-row-item"
                        }, function() {
                            V(c)
                        })
                    })
                })
            })
        },
        richMetadataRowRenderer: function(a, b) {
            T(a, "ytm-rich-metadata-row-renderer", b, function() {
                Qv(a.contents)
            })
        }
    });
    var Sv, Tv = "out",
        Uv = [],
        Vv;

    function Wv(a) {
        a && H("c3-toast", {
            dir$: Tv,
            role$: "in" == Tv ? "alert" : ""
        }, a)
    }

    function Xv(a) {
        var b = Sv;
        b && uh(b, Wv, a)
    }

    function Yv() {
        Uv.shift();
        0 < Uv.length ? Zv() : Xv(null)
    }

    function $v() {
        Tv = "out";
        Xv(Uv[0].content);
        setTimeout(Yv, 195)
    }

    function Zv() {
        Tv = "in";
        var a = Uv[0],
            b = a.durationMs;
        Xv(a.content);
        Vv = setTimeout($v, 225 + b)
    }

    function aw(a, b, c) {
        b = void 0 === b ? 2E3 : b;
        c = void 0 === c ? !1 : c;
        Sv || (Sv = document.createElement("div"), Sv.id = "toasts", document.body.appendChild(Sv), Xv(null));
        b = b || 2E3;
        var d = zi("mweb_toast_duration_ms", -1); - 1 < d && (b = d);
        c && 0 < Uv.length ? (clearTimeout(Vv), zo(function() {
            Uv[0] = {
                content: a,
                durationMs: b
            };
            Zv()
        })) : (Uv.push({
            content: a,
            durationMs: b
        }), 1 == Uv.length && zo(Zv))
    };

    function bw(a) {
        return {
            title: "Video " + a,
            byline: "Byline",
            thumbnail: {
                thumbnails: [{
                    url: "https://i.ytimg.com/vi/" + a + "/sddefault.jpg",
                    width: 120,
                    height: 90
                }]
            },
            duration: "0:00",
            videoId: a
        }
    }

    function cw() {
        var a = window.localStorage && window.localStorage["yt-player-lv"];
        return a ? a.split(",") : []
    }

    function dw(a) {
        var b = Eo.response;
        b && !b.player.args.download_media && (b.player.args.download_media = !0, b.player.args.start = F().getCurrentTime(), b.player = Object.assign({}, b.player), R(), aw(function() {
            return w("Downloading " + a)
        }), ew(a, 60, 1E3))
    }

    function ew(a, b, c) {
        setTimeout(function() {
            3 == (cw().includes(a) ? 3 : 1) ? fw(a) : 0 < b && ew(a, b - 1, c)
        }, c)
    }

    function fw(a) {
        R();
        aw(function() {
            return w("Finished downloading " + a)
        })
    }

    function gw() {
        aw(function() {
            w("Not implemented")
        })
    };

    function hw(a) {
        return new Pd(function(b) {
            zo(function() {
                return b(a)
            })
        })
    }

    function iw(a) {
        a = a.map(jw);
        return Yd(a).then(hw)
    }

    function jw(a) {
        return a.complete ? Ud("load") : new Pd(function(b) {
            function c(d) {
                a.removeEventListener("load", c);
                a.removeEventListener("error", c);
                b(d.type)
            }
            a.addEventListener("load", c);
            a.addEventListener("error", c)
        })
    };
    var kw, lw;

    function mw() {
        $r();
        lw.Kb && lw.Kb()
    }

    function nw() {
        window.removeEventListener("updateui", ow);
        kw && gs(kw);
        lw.jc ? document.getElementById("player-container-id").removeChild(kw) : document.body.removeChild(kw);
        lw = kw = null
    }

    function pw() {
        kw && "#dialog" != Q().hash && nw()
    }

    function qw(a) {
        (a = id(a.target, "button")) && !a.disabled && mw()
    }

    function ow() {
        var a = to(v("dialog-header")),
            b = to(v("dialog-body"));
        uh(kw, function() {
            H("c3-dialog", {
                role$: "dialog",
                "aria-labelledby$": lw.header ? a : b,
                "aria-describedby$": lw.header && b,
                "aria-modal$": !0,
                className: "dialog" + (lw.Od ? " " + lw.Od : ""),
                tabindex$: "-1"
            }, function(c) {
                c.focus();
                lw.header && I({
                    id: a,
                    className: "dialog-header"
                }, function() {
                    lw.header()
                });
                I({
                    id: b,
                    className: "dialog-body user-text"
                }, function() {
                    lw.content()
                });
                I({
                    className: "dialog-buttons",
                    onclick: lw.xa ? null : qw
                }, function() {
                    lw.buttons()
                });
                var d = lw.data;
                zo(function() {
                    Ep(c, d)
                })
            });
            hs("close", lw.ag ? function() {} : rw)
        })
    }

    function sw(a) {
        "#menu" == Q().hash && ms();
        hw().then(as).then(function() {
            gq("dialog");
            kw && nw();
            lw = a;
            kw = document.createElement("div");
            kw.className = "dialog-container";
            a.jc ? document.getElementById("player-container-id").appendChild(kw) : document.body.appendChild(kw);
            fs(kw, a.Ia);
            window.addEventListener("updateui", ow);
            ow();
            lw.sb && lw.sb()
        })
    }

    function rw() {
        lw.qb && lw.qb();
        mw()
    }
    window.addEventListener("state-change", pw);
    window.addEventListener("hashchange", pw);

    function tw() {
        return D(function() {
            return F().getVideoData().video_id
        })
    }

    function uw(a, b) {
        return 3 == b ? a.offlineCompleteText : 2 == b ? a.offlineProgressText : D(function() {
            return a.button.buttonRenderer.text
        })
    }

    function vw() {
        sw({
            header: function() {
                ap(null, function() {
                    return w("Delete from downloads?")
                })
            },
            buttons: function() {
                Aq({
                    className: "compact"
                }, null, function() {
                    return w("Cancel")
                });
                Aq({
                    className: "compact",
                    onclick: function() {
                        return gw()
                    }
                }, null, function() {
                    return w("Delete")
                })
            },
            content: function() {}
        })
    }

    function ww(a, b) {
        if (a) {
            var c = tw();
            if (c) {
                var d = cw().includes(c) ? 3 : 1,
                    e = uw(a, d);
                e && fr(3 == d ? "CHECK" : 2 == d ? "WATCH_LATER" : "OFFLINE_DOWNLOAD", e, null, null, !1, function() {
                    1 == d ? dw(c) : vw()
                }, "", !1, b && b.className ? b.className : "")
            }
        }
    };
    var xw = W({
        metadataBadgeRenderer: Cr,
        standaloneCollectionBadgeRenderer: function(a, b) {
            T(a, "ytm-standalone-collection-badge-renderer", b, function() {
                Br({
                    className: "standalone-collection-badge",
                    "data-type$": E(function() {
                        return a.style.badgeStyle
                    })
                }, function() {
                    a.icon && N(E(function() {
                        return a.icon.iconType
                    }));
                    a.iconText && Br({
                        className: "icon-text soft-background"
                    }, function() {
                        w(E(function() {
                            return a.iconText
                        }))
                    });
                    V(a.label)
                })
            })
        }
    });

    function yw(a) {
        var b = {
            className: "top-standalone-badge"
        };
        a && H("ytm-standalone-badge-supported-renderer", b, function() {
            xw(a)
        })
    };
    var zw = G.Oa,
        Aw = G.Ba,
        Dw = W({
            buttonRenderer: Z,
            metadataRowContainerRenderer: function(a, b) {
                T(a, "ytm-metadata-row-container-renderer", b, function() {
                    Rv(a.rows)
                })
            },
            slimOwnerRenderer: Pv,
            slimMetadataButtonRenderer: Bw,
            slimMetadataToggleButtonRenderer: Cw,
            toggleButtonRenderer: ir
        });

    function Bw(a, b) {
        a.isOfflineButtonPlaceholder ? ww(a, b) : Dw(a.button, b)
    }

    function Cw(a) {
        Dw(a.button)
    };
    var Ew = W({
        buttonRenderer: Z
    });
    var Fw = W({
        buttonRenderer: Z
    });
    var Hw = W({
        sponsorshipsLoyaltyBadgeRenderer: Gw
    });

    function Iw(a, b) {
        T(a, "ytm-sponsorships-loyalty-badges-renderer", b, function() {
            a.description && I({
                className: "description"
            }, function() {
                V(a.description)
            });
            var c = b && b.expanded;
            I({
                className: "badge-container"
            }, function() {
                a.loyaltyBadges.forEach(function(d, e) {
                    var f = -1 != a.selected ? a.selected : 0;
                    (c || e == f) && I({
                        className: Jw(a.selected, e, c)
                    }, function() {
                        Hw(d, b)
                    })
                })
            })
        })
    }

    function Gw(a, b) {
        T(a, "ytm-sponsorships-loyalty-badge-renderer", b, function() {
            I({
                className: "badge-title-container"
            }, function() {
                V(a.title)
            });
            Y(a.icon, {
                className: "badge-icon",
                alt: ""
            })
        })
    }

    function Jw(a, b, c) {
        return c ? -1 != a ? a == b ? "badge-line badge-selected" : "badge-line badge-not-selected" : "badge-line" : (-1 != a ? a : 0) == b ? "badge-line" : ""
    };
    var Kw = W({
            sponsorshipsLoyaltyBadgesRenderer: Iw
        }),
        Lw = np("ytm-sponsorships-list-tile-renderer", function(a, b) {
            var c = !1;
            return {
                F: function(d, e) {
                    var f = !!d.expandableItems;
                    Yo({
                        className: "tile",
                        disabled: !f,
                        onclick: function() {
                            c = !c;
                            b()
                        }
                    }, function() {
                        Y(d.icon, {
                            className: "sponsorships-list-tile-icon",
                            alt: ""
                        });
                        I({
                            className: "sponsorships-list-tile-text"
                        }, function() {
                            J({
                                className: "sponsorships-list-tile-title"
                            }, function() {
                                V(d.title)
                            });
                            J({
                                className: "sponsorships-list-tile-subtitle"
                            }, function() {
                                V(d.subtitle)
                            })
                        });
                        f && N(c ? "ARROW_DROP_UP" : "ARROW_DROP_DOWN", {
                            className: "sponsorships-list-tile-expand-icon"
                        })
                    });
                    f && c && d.expandableItems.forEach(function(g) {
                        g.sponsorshipsLoyaltyBadgesRenderer && I({
                            className: "container"
                        }, function() {
                            Kw(g, {
                                expanded: !0
                            })
                        });
                        g.sponsorshipsListTileRenderer && Lw(g.sponsorshipsListTileRenderer, e)
                    })
                }
            }
        });
    var Mw = W({
        sponsorshipsLoyaltyBadgesRenderer: Iw
    });
    var Nw = W({
        sponsorshipsPerkRenderer: function(a, b) {
            T(a, a.title ? "ytm-sponsorships-perk-renderer-item" : "ytm-sponsorships-perk-renderer", b, function() {
                a.title && ip({
                    className: "sponsorships-perk-renderer-title"
                }, function() {
                    V(a.title)
                });
                var c = b.expanded;
                a.description && ip({
                    hidden: !c
                }, function() {
                    V(a.description)
                });
                a.fulfillmentInstructions && ip({
                    className: "sponsorships-perk-renderer-fulfillment-instructions",
                    hidden: !c
                }, function() {
                    V(a.fulfillmentInstructions)
                });
                a.images && I({
                    className: "sponsorships-perk-renderer-image-line"
                }, function() {
                    J({
                        className: "sponsorships-perk-renderer-image-line-text"
                    }, function() {
                        V(a.imageDescription)
                    });
                    a.images.forEach(function(d) {
                        Y(d, {
                            className: "sponsorships-perk-renderer-images",
                            alt: ""
                        })
                    })
                });
                a.loyaltyBadges && Mw(a.loyaltyBadges, {
                    expanded: c
                })
            })
        }
    });
    var Qw = W({
        buttonRenderer: Z,
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsPerksRenderer: function(a, b) {
            T(a, "ytm-sponsorships-perks-renderer", b, function() {
                a.perksTitle && ip({
                    className: "sponsorships-perks-renderer-title"
                }, function() {
                    V(a.perksTitle)
                });
                a.perks && a.perks.forEach(function(c) {
                    Nw(c, b)
                })
            })
        },
        sponsorshipsTierRenderer: Pw
    });

    function Pw(a, b) {
        np("ytm-sponsorships-tier-renderer", function(c, d) {
            var e = !a.expansionCallToAction;
            return {
                F: function(f) {
                    var g = !!f.expansionCallToAction;
                    f.title && I({
                        className: "sponsorships-tier-renderer-title"
                    }, function() {
                        V(f.title)
                    });
                    f.abovePurchaseButtonText && I({
                        className: "sponsorships-tier-renderer-above-purchase-button-text"
                    }, function() {
                        V(f.abovePurchaseButtonText)
                    });
                    f.purchaseButton && I({
                        className: "sponsorships-tier-renderer-purchase-button-container"
                    }, function() {
                        Qw(f.purchaseButton, {
                            className: "sponsorships-tier-renderer-purchase-button"
                        })
                    });
                    f.disclaimer && I({
                        className: "sponsorships-tier-renderer-disclaimer"
                    }, function() {
                        V(f.disclaimer)
                    });
                    f.expandableMessage && Qw(f.expandableMessage);
                    f.perks && Qw(f.perks, {
                        expanded: e
                    });
                    g && Yo({
                        onclick: function() {
                            e = !e;
                            d()
                        },
                        className: "sponsorships-tier-renderer-expansion"
                    }, function() {
                        I({
                            className: "sponsorships-tier-renderer-expand-text"
                        }, function() {
                            V(e ? f.collapseCallToAction : f.expansionCallToAction)
                        });
                        N(e ? "ARROW_DROP_UP" : "ARROW_DROP_DOWN", {
                            className: "sponsorships-tier-renderer-expand-icon"
                        })
                    });
                    f.bottomDisclaimer && I({
                        className: "sponsorships-tier-renderer-disclaimer"
                    }, function() {
                        V(f.bottomDisclaimer)
                    })
                }
            }
        })(a, b)
    }

    function Ow(a, b) {
        np("ytm-sponsorships-expandable-message-renderer", function(c, d) {
            var e = !!a.startExpanded;
            return {
                F: function(f) {
                    var g = !!f.expandableItems;
                    I({
                        className: f.messageContainerStyle ? f.messageContainerStyle.split("MESSAGE_CONTAINER_")[1].replace(/_/g, "-").toLowerCase() : "style-unspecified"
                    }, function() {
                        Yo({
                            className: "message-container",
                            onclick: function() {
                                e = !e;
                                d()
                            }
                        }, function() {
                            f.messageContainerStyle && ("MESSAGE_CONTAINER_STYLE_SINGLE_PERK" === f.messageContainerStyle || "MESSAGE_CONTAINER_STYLE_SINGLE_PERK_FIRST" ===
                                f.messageContainerStyle) && N("CHECK", {
                                className: "expandable-message-renderer-check-icon"
                            });
                            I({
                                className: "expandable-message-renderer-text"
                            }, function() {
                                V(f.text)
                            });
                            g && N(e ? "ARROW_DROP_UP" : "ARROW_DROP_DOWN", {
                                className: "expandable-message-renderer-expand-icon"
                            })
                        });
                        g && e && I({
                            className: "content-container"
                        }, function() {
                            Qw(f.expandableItems, {
                                expanded: !0
                            })
                        })
                    })
                }
            }
        })(a, b)
    };
    var Rw = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function Sw(a) {
        var b = [];
        a.shortBylineText && b.push(a.shortBylineText);
        if (Tw(a.badges)) return b;
        Uw(a.badges) && b.push(a.badges[0]);
        a.shortViewCountText && b.push(a.shortViewCountText);
        a.publishedTimeText && b.push(a.publishedTimeText);
        a.upcomingEventData && a.upcomingEventData.upcomingEventText && b.push(a.upcomingEventData.upcomingEventText);
        return b
    }

    function Vw(a) {
        if (Uw(a.badges) || !a.badges) return [];
        if (Tw(a.badges)) {
            var b = [a.badges[0], a.shortViewCountText];
            b.push(a.publishedTimeText);
            return b
        }
        return a.badges
    }

    function Tw(a) {
        return !!a && 1 === a.length && A("mweb_single_endbadge_with_metadata")
    }

    function Uw(a) {
        return !!a && 1 === a.length && A("mweb_single_endbadge_inline")
    };

    function Ww(a, b, c) {
        ip(null, function() {
            V(a);
            U(b, {
                className: "search-query-correction-endpoint"
            }, function() {
                V(c)
            })
        })
    }

    function Xw(a) {
        var b = a.Ha,
            c = a.correctedQuery,
            d = a.Ga,
            e = a.originalText,
            f = a.originalQuery,
            g = a.ec;
        H("c3-search-query-correction", null, function() {
            b && c && d && Ww(b, d, c);
            e && f && g && Ww(e, g, f)
        })
    };
    var Yw = {},
        Zw = {};

    function $w() {
        I({
            className: "cbox"
        }, function() {
            I({
                className: "spinner"
            })
        })
    }

    function ax(a, b) {
        delete Zw[a];
        Yw[a] = b
    }

    function bx(a, b) {
        var c = void 0 === b ? {} : b,
            d = void 0 === c.S ? !0 : c.S;
        Yw[a] || (Zw[a] = !0);
        return function(e, f) {
            (Yw[a] || (d ? $w : Fa))(e, f)
        }
    };
    var cx = {
        backgroundPromoRenderer: function(a) {
            T(a, "ytm-background-promo-renderer", {
                className: "extend"
            }, function() {
                Qs({
                    title: a.title,
                    subtitle: a.bodyText,
                    thumbnail: E(function() {
                        return a.thumbnail
                    })
                })
            })
        },
        channelAboutMetadataRenderer: function(a, b) {
            var c = a.primaryLinks || [];
            T(a, "ytm-channel-about-metadata-renderer", b, function() {
                I({
                    className: "user-text"
                }, function() {
                    V(a.description)
                });
                c.forEach(function(d) {
                    return rr(d)
                });
                I(null, function() {
                    ip(null, function() {
                        V(a.subscriberCountText)
                    });
                    ip(null, function() {
                        V(a.joinedDateText)
                    });
                    ip(null, function() {
                        V(a.viewCountText)
                    })
                })
            })
        },
        channelFeaturedVideoRenderer: function(a, b) {
            T(a, "ytm-channel-featured-video-renderer", b, function() {
                U(a.navigationEndpoint, null, function() {
                    ys(E(function() {
                        return a.thumbnail
                    }));
                    bp({
                        className: "details"
                    }, function() {
                        V(E(function() {
                            return a.title
                        }))
                    })
                })
            })
        },
        channelListItemRenderer: function(a, b) {
            T(a, "ytm-channel-list-item-renderer", b, function() {
                U(a.navigationEndpoint, {
                    className: "cbox channel-list-item-link",
                    "presentation-style$": Rs(a)
                }, function() {
                    vr(a.thumbnail, {
                        className: "channel-list-item-thumbnail cbox"
                    });
                    I({
                        className: "channel-list-item-title"
                    }, function() {
                        V(a.title)
                    });
                    a.liveStatus && I({
                        className: "channel-list-item-live-status"
                    }, function() {
                        V(a.liveStatus)
                    })
                })
            })
        },
        channelSearchBoxRenderer: ft,
        clarificationRenderer: function(a, b) {
            switch (a.style) {
                case "CLARIFICATION_RENDERER_STYLE_SMALL":
                    it(a, b);
                    break;
                case "CLARIFICATION_RENDERER_STYLE_MEDIUM":
                    lt(a, b);
                    break;
                case "CLARIFICATION_RENDERER_STYLE_LARGE":
                    mt(a, b)
            }
        },
        clipAttributionRenderer: ot,
        compactAutoplayRenderer: function(a, b) {
            $t(a);
            Yt(a.contents, b)
        },
        compactChannelRenderer: au,
        compactOfferModuleRenderer: function(a, b) {
            A("enable_yto_window") && a.suppressIfCompanionAds && b.Zf || T(a, "ytm-compact-offer-module-renderer", b, function() {
                I({
                    className: "cbox"
                }, function() {
                    I({
                        className: "compact-offer-module-title"
                    }, function() {
                        ap(null, function() {
                            V(a.title)
                        });
                        I(null, function() {
                            V(a.subtitle)
                        })
                    });
                    Z(a.offerButton.buttonRenderer)
                })
            })
        },
        compactLinkRenderer: bu,
        compactMovieRenderer: function(a, b) {
            b = void 0 === b ? {} : b;
            var c = a.useVerticalPoster ? "" : "horizontal";
            b.className = b.className || "";
            b.className += " " + c;
            T(a, "ytm-compact-movie-renderer", b, function() {
                Bs({
                    H: [a.subtitle, E(function() {
                        return a.topMetadataItems[0]
                    })],
                    descriptionSnippet: a.descriptionSnippet,
                    ra: a.badges,
                    headline: a.title,
                    menu: a.menu,
                    navigationEndpoint: a.navigationEndpoint,
                    overlay: function() {
                        Is(function() {
                            return eu(du(a))
                        })
                    },
                    thumbnail: a.thumbnail,
                    extraContent: function() {
                        eu(a.actionButton, {
                            className: "compact-movie-renderer-offer-button",
                            stopPropagation: !0,
                            preventDefault: !0
                        })
                    },
                    xb: Vq() ? 340 : void 0
                })
            })
        },
        compactMultiOfferRenderer: function(a, b) {
            T(a, "ytm-compact-multi-offer-renderer", b, function() {
                a.offers.forEach(function(c) {
                    c.offerCells.forEach(function(d) {
                        I({
                            className: "compact-offer-cell"
                        }, function() {
                            fu(d.offerButton, {
                                className: "compact-multi-offers-button"
                            })
                        })
                    })
                })
            })
        },
        compactPlaylistRenderer: hu,
        compactPromotedVideoRenderer: function(a, b) {
            a._el = "adunit";
            T(a, "ytm-compact-promoted-video-renderer", b, function(c) {
                Bo(c, "_data", 1, function() {
                    return ku(a)
                });
                a.navigationEndpoint && a.adPlaybackContextParams && (c.onclick = function() {
                    var d = a.navigationEndpoint,
                        e = a.adPlaybackContextParams;
                    if (d.commandMetadata && d.commandMetadata.webCommandMetadata && d.commandMetadata.webCommandMetadata.url) {
                        d = Ni(d.commandMetadata.webCommandMetadata.url).adurl;
                        var f;
                        if (f = d) f = pe(d), f = null !== f ? f.split(".").reverse() : null, f = null === f ? !1 : "com" == f[0] && f[1].match(/^youtube(?:kids|-nocookie)?$/) ? !0 : !1;
                        f && ml(qe(d), {
                            encoded_ad_playback_context: e
                        })
                    }
                });
                Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    headline: E(function() {
                        return a.title
                    }),
                    menu: a.menu,
                    xb: Vq() ? 340 : void 0,
                    extraContent: function() {
                        I({
                            className: "compact-promoted-video-byline-container"
                        }, function() {
                            Br({
                                className: "compact-promoted-video-badge"
                            }, function() {
                                w(G.Aa)
                            });
                            J({
                                className: "subhead"
                            }, function() {
                                V(a.shortBylineText, {
                                    J: !0
                                })
                            })
                        });
                        J({
                            className: "subhead"
                        }, function() {
                            V(a.viewCountText)
                        });
                        ju(a.ctaRenderer)
                    },
                    overlay: function() {
                        Is(function() {
                            I({
                                className: "compact-promoted-video-length-overlay"
                            }, function() {
                                return V(a.lengthText)
                            })
                        })
                    },
                    H: [],
                    kg: !1
                })
            })
        },
        compactRadioRenderer: mu,
        compactShowRenderer: ou,
        compactVideoRenderer: Wt,
        didYouMeanRenderer: function(a, b) {
            T(a, "c3-did-you-mean-renderer", b, function() {
                Xw({
                    Ha: a.didYouMean,
                    correctedQuery: a.correctedQuery,
                    Ga: a.correctedQueryEndpoint
                })
            })
        },
        factCheckRenderer: function(a, b) {
            T(a, "ytm-fact-check-renderer", b, function() {
                I({
                    className: "fact-check-container breakout-item-content"
                }, function() {
                    U(a.endpoint, {
                        className: "fact-check-endpoint"
                    }, function() {
                        I({
                            className: "fact-check-section-title cbox"
                        }, function() {
                            N(E(function() {
                                return a.titleIcon.iconType
                            }));
                            ap({
                                className: "fact-check-section-title-text title"
                            }, function() {
                                V(a.sectionTitle)
                            })
                        });
                        I({
                            className: "fact-check-article-title"
                        }, function() {
                            J({
                                className: "fact-check-article-title-text"
                            }, function() {
                                V(a.articleTitle)
                            });
                            N(E(function() {
                                return a.publisherLinkIcon.iconType
                            }), {
                                className: "fact-check-publisher-link-icon"
                            })
                        });
                        I({
                            className: "fact-check-body",
                            role$: "text"
                        }, function() {
                            a.image && Y(a.image, {
                                className: "fact-check-image",
                                alt: ""
                            });
                            I({
                                className: "fact-check-body-text"
                            }, function() {
                                I({
                                    className: "fact-check-claim"
                                }, function() {
                                    V(a.claimText)
                                });
                                I({
                                    className: "fact-check-rating"
                                }, function() {
                                    V(a.ratingText)
                                })
                            })
                        })
                    });
                    pu(a.menu, {
                        className: "fact-check-menu"
                    })
                })
            })
        },
        feedEntryRenderer: function(a, b) {
            T(a, "ytm-feed-entry-renderer", b, function() {
                I({
                    className: "feed-entry-header cbox"
                }, function() {
                    U(a.ownerEndpoint, null, function() {
                        vr(a.ownerThumbnail, {
                            className: "feed-entry-profile-icon"
                        })
                    });
                    I({
                        className: "feed-entry-text"
                    }, function() {
                        V(a.title);
                        J({
                            className: "feed-entry-time secondary-text"
                        }, function() {
                            V(a.timeText)
                        })
                    })
                });
                qu(a.item)
            })
        },
        horizontalCardListRenderer: Yu,
        includingResultsForRenderer: function(a, b) {
            T(a, "c3-including-results-for-renderer", b, function() {
                Xw({
                    Ha: a.includingResultsFor,
                    correctedQuery: a.correctedQuery,
                    Ga: a.correctedQueryEndpoint,
                    originalText: a.searchOnlyFor,
                    originalQuery: a.originalQuery,
                    ec: a.originalQueryEndpoint
                })
            })
        },
        itemSectionHeaderRenderer: function(a, b) {
            T(a, "ytm-item-section-header-renderer", b, function() {
                a.title && I({
                    className: "ytm-item-section-header-title"
                }, function() {
                    V(a.title);
                    a.subtitle && I({
                        className: "subhead small-text"
                    }, function() {
                        V(a.subtitle)
                    })
                });
                Zu(a.buttons, {
                    className: "item-section-header-buttons"
                })
            })
        },
        limitedStateMessageRenderer: function(a, b) {
            T(a, "ytm-limited-state-message-renderer", b, function() {
                I({
                    className: "limited-state-message-header cbox"
                }, function() {
                    N(a.icon.iconType, {
                        className: "limited-state-message-icon"
                    });
                    V(a.headerText)
                });
                ip(null, function() {
                    V(a.subtext)
                });
                I({
                    className: "limited-state-message-buttons cbox"
                }, function() {
                    $u(a.learnMoreButton);
                    $u(a.goHomeButton)
                })
            })
        },
        messageRenderer: function(a, b) {
            b = void 0 === b ? {} : b;
            var c = a.subtext && a.subtext.messageSubtextRenderer && a.subtext.messageSubtextRenderer.text;
            a.style && "RENDER_STYLE_HORIZONTAL" === a.style.value && (b.className = (b.className || "") + " ytm-horizontal-message");
            T(a, "ytm-message-renderer", b, function() {
                I({
                    className: "ytm-message-content"
                }, function() {
                    a.thumbnail && Y(a.thumbnail.messageThumbnailRenderer.thumbnailDetails, {
                        alt: "",
                        className: "ytm-message-thumbnail"
                    });
                    I({
                        className: "ytm-message-text"
                    }, function() {
                        V(a.text);
                        c && I({
                            className: "ytm-message-subtext subhead"
                        }, function() {
                            return V(c)
                        })
                    })
                });
                av(a.button)
            })
        },
        noResultsFoundShowingResultsForRenderer: function(a, b) {
            T(a, "c3-no-results-found-showing-results-for-renderer", b, function() {
                Xw({
                    Ha: a.showingResultsFor,
                    correctedQuery: a.correctedQuery,
                    Ga: a.correctedQueryEndpoint,
                    originalText: a.noResultsFound,
                    originalQuery: a.originalQuery
                })
            })
        },
        playlistNotificationRenderer: function(a, b) {
            T(a, "ytm-playlist-notification-renderer", b, function() {
                I({
                    className: "playlist-notification"
                }, function() {
                    I({
                        className: "playlist-notification-text"
                    }, function() {
                        V(a.text)
                    });
                    bv(a.actions)
                })
            })
        },
        playlistVideoListRenderer: function(a, b) {
            T(a, "ytm-playlist-video-list-renderer", b, function() {
                Ns(a.contents, {
                    className: "item"
                });
                Os(a)
            })
        },
        promotedSparklesTextSearchRenderer: function(a, b) {
            a.content && T(a, "ytm-promoted-sparkles-text-search-renderer", b, function(c) {
                Bo(c, "_seen", !0, function() {
                    a.content.impressionEndpoints && a.content.impressionEndpoints.forEach(function(d) {
                        Bq(d)
                    })
                });
                I({
                    className: "promoted-sparkles-text-search-root-container"
                }, function() {
                    dv(a);
                    iv(a)
                })
            })
        },
        promotedSparklesWebRenderer: function(a, b) {
            a && T(a, "ytm-promoted-sparkles-web-renderer", b, function(c) {
                a && (Bo(c, "_seen", !0, function() {
                    if (c) {
                        if (a.clickTargetDelayMs) {
                            var d = Number(a.clickTargetDelayMs);
                            isNaN(d) || (ng(c, "click-target-disabled"), setTimeout(function() {
                                return og(c, "click-target-disabled")
                            }, d))
                        }
                        a.impressionCommands && a.impressionCommands.forEach(function(e) {
                            Bq(e)
                        })
                    }
                }), Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    headline: E(function() {
                        return a.title
                    }),
                    menu: E(function() {
                        return a.menu
                    }),
                    extraContent: function() {
                        I({
                            className: "sparkles-extra-contents"
                        }, function() {
                            I({
                                className: "sparkles-ad-byline"
                            }, function() {
                                Br({
                                    className: "sparkles-ad-badge",
                                    "aria-label$": G.eb
                                }, function() {
                                    w(G.Aa)
                                });
                                I({
                                    className: "sparkles-ad-website-text"
                                }, function() {
                                    V(E(function() {
                                        return a.websiteText
                                    }))
                                })
                            });
                            I({
                                className: "sparkles-ad-button"
                            }, function() {
                                kv(a.actionButton)
                            })
                        })
                    },
                    H: []
                }))
            })
        },
        promotedVideoRenderer: function(a, b) {
            a._adformat = "1_8";
            T(a, "ytm-promoted-video-renderer", b, function(c) {
                Bo(c, "_data", 1, function() {
                    return sv(a)
                });
                tv(c, a);
                ov({
                    thumbnail: a.thumbnail,
                    channelThumbnail: a.channelThumbnail,
                    channelEndpoint: a.channelEndpoint,
                    Jb: null,
                    navigationEndpoint: a.navigationEndpoint,
                    headline: a.title,
                    H: [a.description],
                    menu: a.menu,
                    overlay: function() {
                        Is(function() {
                            return uv(a.thumbnailOverlays)
                        })
                    },
                    extraContent: function() {
                        I({
                            className: "promoted-video-byline-container"
                        }, function() {
                            Br({
                                className: "promoted-video-badge"
                            }, function() {
                                w(G.Aa)
                            });
                            J({
                                className: "subhead"
                            }, function() {
                                V(a.shortBylineText, {
                                    J: !0
                                })
                            })
                        });
                        J({
                            className: "promoted-video-shelf-title"
                        }, function() {
                            V(a.shortBylineText)
                        });
                        uv(a.ctaRenderer)
                    }
                })
            })
        },
        purchaseItemRenderer: function(a, b) {
            T(a, "ytm-purchase-item-renderer", b, function() {
                Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    headline: E(function() {
                        return a.title
                    }),
                    H: [a.priceText],
                    menu: a.menu
                })
            })
        },
        resultsWithoutQuotesRenderer: function(a, b) {
            T(a, "c3-results-without-quotes-renderer", b, function() {
                Xw({
                    Ha: a.resultsFor,
                    correctedQuery: a.correctedQuery,
                    Ga: a.correctedQueryEndpoint,
                    originalText: a.withoutQuotes
                })
            })
        },
        searchHistoryQueryRenderer: function(a, b) {
            a.query && T(a, "ytm-search-history-query-renderer", b, function() {
                I({
                    className: "cbox"
                }, function() {
                    U(a.navigationEndpoint, {
                        className: "search-history-query-text-content"
                    }, function() {
                        a.query && I({
                            className: "search-history-query-query"
                        }, function() {
                            w(a.query)
                        });
                        I({
                            className: "search-history-query-latest-search-time"
                        }, function() {
                            V(a.latestSearchTimeText)
                        })
                    });
                    vv(a.menu)
                })
            })
        },
        slimOwnerRenderer: Pv,
        slimVideoMetadataRenderer: np("ytm-slim-video-metadata-renderer", function(a, b) {
            function c() {
                g = !g;
                b()
            }

            function d(h, l) {
                var n = h.topStandaloneBadge || [],
                    q = h.badges || [];
                I({
                    className: "slim-video-metadata-standalone-badge"
                }, function() {
                    yw(n)
                });
                Yo({
                    className: "slim-video-metadata-header",
                    onclick: c
                }, function() {
                    return I({
                        className: "slim-video-metadata-header-content"
                    }, function() {
                        I({
                            className: "slim-video-metadata-title-and-badges"
                        }, function() {
                            ap({
                                className: "slim-video-metadata-title"
                            }, function() {
                                V(h.title)
                            });
                            Rr(q);
                            I({}, function() {
                                J({
                                    className: "secondary-text"
                                }, function() {
                                    V(g ? h.expandedSubtitle : h.collapsedSubtitle)
                                })
                            })
                        });
                        N(g ? "EXPAND_LESS" : "EXPAND_MORE", {
                            className: l ? "slim-video-metadata-header-expand-placeholder" : "",
                            role$: "button",
                            "aria-label$": g ? zw : Aw,
                            "aria-expanded$": g
                        })
                    })
                })
            }

            function e(h) {
                var l = ["slim-video-metadata-actions"];
                h.buttons && 1 == h.buttons.length && l.push("slim-video-metadata-limited-state");
                I({
                    className: l.join(" ")
                }, function() {
                    if (5 >= h.buttons.length) Dw(h.buttons);
                    else {
                        for (var n = h.buttons.slice(4), q = 0; 4 > q; q++) Dw(h.buttons[q]);
                        ss({
                            icon: "MORE_HORIZ",
                            label: h.overflowMenuText,
                            w: zq(h.overflowMenuText) || "",
                            R: G.P,
                            ca: "DISMISSAL",
                            content: function() {
                                return Dw(n, {
                                    stopPropagation: !0
                                })
                            },
                            re: "slim-video-metadata-overflow-menu"
                        })
                    }
                })
            }

            function f(h) {
                g && (I({
                    className: "slim-video-metadata-info user-text"
                }, function() {
                    I(null, function() {
                        V(h.dateText)
                    });
                    I({
                        className: "slim-video-metadata-description"
                    }, function() {
                        V(h.description)
                    })
                }), I({
                    className: "slim-video-metadata-info metadata-row"
                }, function() {
                    Dw(h.metadataRowContainer)
                }))
            }
            var g = !1;
            return {
                F: function(h) {
                    a.data = h;
                    var l = !!h._isPlaceholderData;
                    d(h, l);
                    l || (e(h), Dw(h.owner, {
                        className: g ? "" : "slim-video-metadata-collapsed",
                        expanded: g
                    }), f(h))
                },
                ia: function(h, l) {
                    h != l && (g = !1)
                }
            }
        }),
        shelfRenderer: Nv,
        showingResultsForRenderer: function(a, b) {
            T(a, "c3-showing-results-for-renderer", b, function() {
                Xw({
                    Ha: a.showingResultsFor,
                    correctedQuery: a.correctedQuery,
                    Ga: a.correctedQueryEndpoint,
                    originalText: a.searchInsteadFor,
                    originalQuery: a.originalQuery,
                    ec: a.originalQueryEndpoint
                })
            })
        },
        simpleTextSectionRenderer: function(a, b) {
            T(a, "ytm-simple-text-section-renderer", b, function() {
                a.lines.forEach(function(c) {
                    ip({
                        className: "simple-text-section-content secondary-text",
                        "is-paid-memberships$": Gb(Zp(Q().href), "/paid_memberships")
                    }, function() {
                        V(c)
                    })
                })
            })
        },
        sponsorshipsAlertRenderer: function(a, b) {
            T(a, "ytm-sponsorships-alert-renderer", b, function() {
                V(a.alertMessage);
                a.actionButton && I({
                    className: "sponsorships-alert-bar-action-button cbox"
                }, function() {
                    Ew(a.actionButton)
                });
                a.secondaryActionButton && I({
                    className: "sponsorships-alert-bar-action-button cbox"
                }, function() {
                    Ew(a.secondaryActionButton)
                })
            })
        },
        sponsorshipsExpandableMessageRenderer: Ow,
        sponsorshipsHeaderRenderer: function(a, b) {
            T(a, "ytm-sponsorships-header-renderer", b, function() {
                var c = er(a.backgroundImage),
                    d = un(a.backgroundColor);
                I({
                    style$: "background-image: url(" + c + ");\n                 background-blend-mode: soft-light;\n                 background-color: " + d + ";",
                    className: "sponsorships-header"
                }, function() {
                    I({
                        className: "sponsorships-header-text"
                    }, function() {
                        I({
                            className: "sponsorships-header-supertitle"
                        }, function() {
                            V(a.superTitle)
                        });
                        I({
                            className: "sponsorships-header-title"
                        }, function() {
                            V(a.title)
                        });
                        I({
                            className: "sponsorships-header-subtitle"
                        }, function() {
                            V(a.subtitle)
                        })
                    });
                    I({
                        className: "sponsorships-image-container"
                    }, function() {
                        Y(a.channelImage, {
                            className: "sponsorships-image",
                            alt: ""
                        })
                    })
                })
            })
        },
        sponsorshipsHeadingRenderer: function(a, b) {
            T(a, "ytm-sponsorships-heading-renderer", b, function() {
                I({
                    className: a.darkBackground ? "sponsorships-heading-renderer-dark-background" : "sponsorships-heading-renderer"
                }, function() {
                    I({
                        className: "sponsorships-heading-renderer-text"
                    }, function() {
                        I({
                            className: "sponsorships-heading-renderer-title"
                        }, function() {
                            V(a.title)
                        });
                        a.subtitle && I({
                            className: "sponsorships-heading-renderer-subtitle-line"
                        }, function() {
                            a.subtitleIcon && Y(a.subtitleIcon, {
                                className: "sponsorships-heading-renderer-subtitle-icon",
                                alt: ""
                            });
                            J({
                                className: "sponsorships-heading-renderer-subtitle"
                            }, function() {
                                V(a.subtitle)
                            })
                        });
                        a.bottomButton && I({
                            className: "sponsorships-heading-renderer-bottom-button"
                        }, function() {
                            Fw(a.bottomButton)
                        })
                    });
                    a.endButton && I({
                        className: "sponsorships-heading-renderer-end-button"
                    }, function() {
                        Fw(a.endButton)
                    })
                })
            })
        },
        sponsorshipsLinksRenderer: function(a, b) {
            T(a, "ytm-sponsorships-links-renderer", b, function() {
                a.links.forEach(function(c) {
                    V(c)
                })
            })
        },
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
        videoWithContextRenderer: function(a, b) {
            var c = D(function() {
                return a.channelThumbnail.channelThumbnailWithLinkRenderer
            });
            T(a, "ytm-video-with-context-renderer", b, function() {
                ov({
                    thumbnail: a.thumbnail,
                    channelThumbnail: D(function() {
                        return c.thumbnail
                    }),
                    channelEndpoint: D(function() {
                        return c.navigationEndpoint
                    }),
                    Jb: c && zq(c.accessibility),
                    navigationEndpoint: a.navigationEndpoint,
                    headline: a.headline,
                    H: Sw(a),
                    Za: a.topStandaloneBadge,
                    ra: Vw(a),
                    menu: a.menu,
                    overlay: function() {
                        Is(function() {
                            return Rw(a.thumbnailOverlays)
                        })
                    }
                })
            })
        },
        watchMetadataAppPromoRenderer: bx("watchMetadataAppPromoRenderer"),
        ypcOffersListRenderer: bx("ypcOffersListRenderer")
    };

    function dx(a) {
        var b = a.items,
            c = a.Xa,
            d = a.Wa,
            e = a.chunkSize,
            f = void 0 === a.oncomplete ? Fa : a.oncomplete,
            g = a.pe,
            h = kh;
        a = h.g = h.g || {};
        if (b != a.items && g) jh = kh.lastChild;
        else if (b == a.items && !g && a.Hb) jh = kh.lastChild;
        else {
            b != a.items && (a.count = d - e);
            a.items = b;
            a.count = Math.min(a.count + e, b.length);
            for (g = 0; g < a.count; g++) c(b[g]);
            a.count < b.length ? (a.Hb = !0, zo(function() {
                requestAnimationFrame(function() {
                    uh(h, dx, {
                        items: b,
                        Xa: c,
                        Wa: d,
                        chunkSize: e,
                        oncomplete: f,
                        pe: !0
                    })
                })
            })) : (a.Hb = !1, f())
        }
    }

    function ex(a) {
        H("lazy-list", null, function() {
            dx(a)
        })
    };

    function fx(a) {
        a.dispatchEvent(new CustomEvent("ytm-load-more", {
            bubbles: !0,
            detail: a
        }))
    }
    var gx = "IntersectionObserver" in window ? new IntersectionObserver(function(a, b) {
        a.filter(function(c) {
            return c.intersectionRect.height
        }).forEach(function(c) {
            c = c.target;
            b.unobserve(c);
            fx(c)
        })
    }, {
        rootMargin: "10%",
        threshold: .01
    }) : new pp(.1, function(a) {
        fx(a)
    });

    function hx(a, b, c) {
        var d = b.nextContinuationData;
        d && H("c3-infinite-scroll-continuation", {
            className: "spinner",
            container: a,
            nextContinuationData: d,
            Nb: c
        }, function(e) {
            Bo(e, "continuation", d, function() {
                gx.observe(e)
            })
        })
    };
    var ix = W(cx);

    function jx(a) {
        if (a.continuations) {
            var b = "related-items" == a.sectionIdentifier;
            I({
                className: "vbox"
            }, function() {
                a.continuations.forEach(function(c) {
                    (Vq() || A("mweb_watch_next_infinite_scroll")) && b || c.nextContinuationData.autoloadEnabled ? hx(a, c, "itemSectionContinuation") : Ms(a, c, "itemSectionContinuation")
                })
            })
        }
    }

    function kx(a) {
        ix(a, {
            className: "item"
        })
    }

    function lx(a, b) {
        b = void 0 === b ? {} : b;
        var c = a.contents || [];
        T(a, "ytm-item-section-renderer", b, function(d) {
            d.setAttribute("section-identifier", a.sectionIdentifier || "");
            ix(a.header);
            ex({
                items: c,
                Xa: kx,
                Wa: 6,
                chunkSize: 6,
                oncomplete: function() {
                    return jx(a)
                }
            })
        })
    };
    var mx = !1,
        ox = W({
            searchFilterGroupRenderer: nx
        });

    function px(a) {
        return "FILTER_STATUS_SELECTED" == a.status
    }

    function qx(a) {
        a = a.target;
        (a = a.options[a.selectedIndex].Xd) && !px(a) && a.navigationEndpoint && S(a.navigationEndpoint, {}, !1)
    }

    function rx(a) {
        hp({
            className: "option",
            disabled: "FILTER_STATUS_DISABLED" == a.status,
            selected: px(a),
            Xd: a
        }, function() {
            V(a.label)
        })
    }

    function nx(a, b) {
        var c = a.filters.map(function(e) {
                return e.searchFilterRenderer
            }),
            d = c.some(function(e) {
                return !px(e) && "FILTER_STATUS_DISABLED" != e.status
            });
        T(a, "ytm-search-filter-group-renderer", b, function(e) {
            e.setAttribute("data-has-options", d);
            jq({
                onchange: qx
            }, null, function() {
                c.forEach(rx)
            })
        })
    };
    var sx = W({
        channelAgeGateRenderer: function(a, b) {
            T(a, "ytm-channel-age-gate-renderer", b, function() {
                I({
                    className: "channel-age-gate-header"
                }, function() {
                    a.avatar && vr(a.avatar, {
                        className: "channel-age-gate-profile-icon"
                    });
                    $o(null, function() {
                        V(E(function() {
                            return a.channelTitle
                        }))
                    })
                });
                I(null, function() {
                    ap(null, function() {
                        V(a.header)
                    });
                    ip({
                        className: "channel-age-gate-text"
                    }, function() {
                        V(a.mainText)
                    });
                    I({
                        className: "cbox"
                    }, function() {
                        Nr(a.signInButton)
                    });
                    ip({
                        className: "channel-age-gate-text"
                    }, function() {
                        V(a.secondaryText)
                    })
                })
            })
        },
        channelListSubMenuRenderer: function(a) {
            var b = "channel-list-sub-menu-avatars",
                c = a.contentSize && a.contentSize.value,
                d = !!a.channelsEndpoint;
            c && "LARGE_WITH_TEXT" === c && (b += " channel-list-sub-menu-large-avatars");
            a.channelsEndpoint && (b += " has-show-all");
            T(a, "ytm-channel-list-sub-menu-renderer", null, function() {
                I({
                    className: b,
                    "aria-hidden$": d
                }, function() {
                    Or(a.contents, {
                        size: c
                    })
                });
                a.channelsEndpoint && U(a.channelsEndpoint, {
                    className: "channel-list-sub-menu-show-all",
                    "aria-label$": B("ALL_CHANNELS_LABEL")
                }, function() {
                    Xp()
                })
            })
        },
        channelSubMenuRenderer: function(a, b) {
            T(a, "ytm-channel-sub-menu-renderer", b, function() {
                I({
                    className: "section"
                }, function() {
                    Pr(a.contentTypeSubMenuItems);
                    Pr(a.sortFilterSubMenuItems)
                })
            })
        },
        commentSectionRenderer: bx("commentSectionRenderer"),
        itemSectionRenderer: lx,
        searchSubMenuRenderer: function(a) {
            T(a, "ytm-search-sub-menu-renderer", {
                className: "section"
            }, function(b) {
                b.setAttribute("role", "region");
                "#filters" == Q().hash ? b.hasAttribute("hidden") && b.removeAttribute("hidden") : b.setAttribute("hidden", "");
                ox(a.groups);
                "#filters" != Q().hash || mx ? "" == Q().hash && (mx = !1) : (b.querySelector(".select").focus(), mx = !0)
            })
        },
        shelfRenderer: Nv,
        universalWatchCardRenderer: bx("universalWatchCardRenderer")
    });

    function tx(a) {
        (a.continuations || []).forEach(function(b) {
            return hx(a, b)
        })
    }

    function ux(a) {
        var b = a.subMenu,
            c = a.contents || [];
        T(a, "ytm-section-list-renderer", null, function() {
            sx(b);
            ex({
                items: c,
                Xa: sx,
                Wa: 3,
                chunkSize: 3,
                oncomplete: function() {
                    return tx(a)
                }
            })
        })
    };
    var vx = W({
        activeAccountHeaderRenderer: Lr,
        sectionListRenderer: ux,
        signInPromoWithBackgroundRenderer: function(a) {
            T(a, "ytm-sign-in-promo-with-background-renderer", {
                className: "extend"
            }, function() {
                Qs({
                    title: a.promoHeadline,
                    subtitle: a.promoSubtitle,
                    thumbnail: E(function() {
                        return a.promoImage
                    }),
                    header: function() {
                        U(a.navigationEndpoint, {
                            className: "sign-in-header cbox"
                        }, function() {
                            N("AVATAR_CIRCLE_BLUE", {
                                className: "sign-in-icon"
                            });
                            I({
                                className: "sign-in-header-text"
                            }, function() {
                                w(G.Ca)
                            })
                        })
                    },
                    footer: function() {
                        U(a.navigationEndpoint, {
                            "aria-label$": G.Ca,
                            className: "sign-in-link"
                        }, function() {
                            Aq({
                                className: "sign-in-button"
                            }, null, function() {
                                w(G.Ca)
                            })
                        })
                    }
                })
            })
        },
        lugashFooterRenderer: Mr
    });
    var wx = B("MORE_OPTIONS");

    function xx(a) {
        a.preventDefault();
        a.stopPropagation()
    }

    function yx(a) {
        var b = a.data,
            c = a.selected;
        U(b.endpoint, {
            "aria-label$": zq(b.accessibility),
            role$: "tab",
            "aria-selected$": c,
            className: "scbrr-tab center",
            "is-placeholder$": b._isPlaceholder,
            onclick: c ? xx : null,
            "tab-identifier$": a.tabIdentifier
        }, function() {
            b.icon ? N(b.icon.iconType) : b.title && w(b.title)
        })
    }

    function zx(a) {
        var b = a.data,
            c = a.selected;
        I({
            Fa: a.url,
            hidden: !c,
            "tab-identifier$": a.tabIdentifier
        }, function() {
            Uo(c, function() {
                vx(b.header);
                vx(b.content);
                vx(b.footer)
            })
        })
    }

    function Ax(a) {
        a.length && rs({
            icon: "EXPAND_MORE",
            label: wx,
            content: function() {
                a.forEach(function(b) {
                    U(b.data.endpoint, null, function() {
                        Ur(null, function() {
                            b.data.title && w(b.data.title)
                        })
                    })
                })
            },
            R: G.P
        })
    };
    var Bx = W({
        c4TabbedHeaderRenderer: zr,
        carouselHeaderRenderer: function(a, b) {
            T(a, "ytm-carousel-header-renderer", b, function() {
                var c = a.channelDetails && a.channelDetails.topicChannelDetailsRenderer;
                c && (c.avatar && Y(c.avatar, {
                    alt: "",
                    className: "ytm-carousel-header-avatar"
                }), I({
                    className: "ytm-carousel-header-details"
                }, function() {
                    ap(null, function() {
                        return V(c.title)
                    });
                    c.subscribeButton && Ar(c.subscribeButton)
                }))
            })
        },
        interactiveTabbedHeaderRenderer: function(a, b) {
            T(a, "ytm-interactive-tabbed-header-renderer", b, function() {
                var c = !!D(function() {
                    return b.tabs[0].tabRenderer.selected
                });
                Dr({
                    tabs: b.tabs
                });
                c && (Fr(a), Gr(a))
            })
        },
        playlistHeaderRenderer: function(a) {
            var b = !(!a || !a.actionButton);
            T(a, "ytm-playlist-header-renderer", {}, function() {
                I({
                    className: "playlist-header"
                }, function() {
                    lr(a.playlistHeaderBanner);
                    qr(a, b);
                    b && a.collection && a.collection.dropdownRenderer && lr(a.collection)
                });
                nr(a)
            })
        },
        singleColumnBrowseResultsRenderer: function(a, b) {
            T(a, "ytm-single-column-browse-results-renderer", b, function() {
                if (a) {
                    var c = Q().pathname,
                        d = a.tabs.map(function(h) {
                            h = h.tabRenderer;
                            return {
                                data: h,
                                url: sq(h.endpoint) || c,
                                selected: h.selected,
                                tabIdentifier: h.tabIdentifier
                            }
                        }),
                        e = b && b.isChannel,
                        f = e ? 3 : Number.MAX_VALUE,
                        g = e || Gb(c, "/feed/history");
                    b && b.isGamingChannel || !g || I({
                        className: "scbrr-tabs cbox",
                        hidden: 2 > d.length,
                        "is-channel$": e,
                        role$: "tablist"
                    }, function() {
                        var h = d.slice(f);
                        d.slice(0, f).forEach(yx);
                        Ax(h)
                    });
                    I(null, function() {
                        d.forEach(zx)
                    })
                }
            })
        },
        channelCreationForm: bx("channelCreationFormRenderer"),
        channelMetadataRenderer: function(a, b) {
            var c = a.vanityChannelUrl ? a.vanityChannelUrl : a.channelUrl;
            c && a.title && JSON && T(a, "ytm-channel-metadata-renderer", b, function() {
                jp({
                    type: "application/ld+json"
                }, function() {
                    var d = JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [{
                            "@type": "ListItem",
                            position: 1,
                            item: {
                                "@id": c,
                                name: a.title
                            }
                        }]
                    });
                    w(d)
                })
            })
        }
    });

    function Cx(a) {
        return !!D(function() {
            return a.header.c4TabbedHeaderRenderer
        })
    }

    function Dx(a) {
        return !!D(function() {
            return a.header.interactiveTabbedHeaderRenderer
        })
    }

    function Ex(a) {
        return D(function() {
            return a.contents.singleColumnBrowseResultsRenderer.tabs
        })
    }

    function Fx(a) {
        T(a, "ytm-browse", {}, function() {
            a.onResponseReceivedActions && vq(a.onResponseReceivedActions, a, !1);
            Dx(a) ? Bx(a.header, {
                tabs: Ex(a)
            }) : Bx(a.header);
            Bx(a.contents, {
                isChannel: Cx(a),
                isGamingChannel: Dx(a)
            });
            Bx(a.metadata, {
                isChannel: Cx(a)
            });
            Bx(a.channelCreation)
        })
    };
    var Jx = W({
        experimentsGroupRenderer: Gx,
        experimentsStudyRenderer: Hx,
        experimentsStudyItemRenderer: Ix,
        toggleButtonRenderer: ir
    });

    function Gx(a, b) {
        T(a, "ytm-experiments-group-renderer", b, function() {
            I({
                className: "experiment-group-title"
            }, function() {
                V(a.title)
            });
            Jx(a.studies)
        })
    }

    function Hx(a, b) {
        T(a, "ytm-experiments-study-renderer", b, function() {
            Jx(a.items)
        })
    }

    function Ix(a, b) {
        b || (b = {});
        b["data-joined$"] = D(function() {
            return a.optInButton.toggleButtonRenderer.isToggled
        });
        var c = !(!a.ineligibleBadge || !a.ineligibleBadge.metadataBadgeRenderer);
        c && (b.className = "ineligible");
        T(a, "ytm-experiments-study-item-renderer", b, function() {
            I({
                className: "experiments-study-item-description",
                onclick: function() {
                    if (c) aw(function() {
                        V(Ir(a.ineligibleBadge.metadataBadgeRenderer.label || ""))
                    });
                    else {
                        var d = a.optInButton.toggleButtonRenderer;
                        (d = d.isToggled ? d.toggledServiceEndpoint : d.defaultServiceEndpoint) && a.optInButton.toggleButtonRenderer && S(d, a.optInButton.toggleButtonRenderer, !0)
                    }
                }
            }, function() {
                V(a.label)
            });
            c || Jx(a.optInButton)
        })
    };
    var Kx = W({
            experimentsListRenderer: function(a, b) {
                T(a, "ytm-experiments-list-renderer", b, function() {
                    Jx(a.contents)
                })
            }
        }),
        Lx = np("ytm-experiments", function() {
            return {
                F: function(a) {
                    I({
                        className: "ytm-experiments-buttons"
                    }, function() {
                        Aq(null, {
                            w: "Clear Forced Exps",
                            onclick: function() {
                                Yc.remove("EXPERIMENTS_DEBUG", "/", ".youtube.com");
                                window.location.reload()
                            }
                        }, function() {
                            w("RESET")
                        });
                        Aq(null, {
                            w: "Force No Exps",
                            onclick: function() {
                                Yc.set("EXPERIMENTS_DEBUG", "ZERO", -1, "/", ".youtube.com");
                                window.location.reload()
                            }
                        }, function() {
                            w("NO EXP")
                        });
                        Aq(null, {
                            w: "Refresh",
                            onclick: function() {
                                window.location = "/"
                            }
                        }, function() {
                            w("REFRESH")
                        })
                    });
                    I({
                        className: "ytm-experiments-buttons"
                    }, function() {
                        I({}, function() {
                            w(y("MWEB_SAC", ""))
                        })
                    });
                    I({
                        className: "ytm-experiments-search"
                    }, function() {
                        fp({
                            type$: "text",
                            placeholder$: "Search Experiments",
                            oninput: mb(function(b) {
                                var c = b.target.value;
                                b = "/experiments";
                                var d = "?";
                                0 < c.length && (b += d + "query=" + c, d = "&");
                                c = Ae(Q().href, "wr_code");
                                null != c && (b += d + "wr_code=" + c);
                                Xs(b)
                            })
                        })
                    });
                    Kx(a.content)
                }
            }
        });
    var Mx, Nx, Ox;

    function Px() {
        Mx && !Q().hash && es(Mx, !0)
    }

    function Qx(a, b) {
        Mx || (Nx = b, Ox = a, window.addEventListener("hashchange", Px), window.addEventListener("updateui", Rx), window.addEventListener("state-navigatestart", Sx), Mx = document.createElement("fullscreen-overlay"), document.body.appendChild(Mx), Rx(), es(Mx, !0))
    }

    function Rx() {
        uh(Mx, function() {
            H(Ox, {}, function() {
                Nx()
            })
        })
    }

    function Sx() {
        Mx && (es(Mx, !1), document.body.removeChild(Mx), Mx = null, window.removeEventListener("hashchange", Px), window.removeEventListener("updateui", Rx), window.removeEventListener("state-navigatestart", Sx))
    };
    var Tx = W({
        buttonRenderer: Z
    });

    function Ux(a, b) {
        a && I({
            className: "unlimited-family-interstitial-buttons",
            onclick: function() {
                var c = a.buttonRenderer;
                c && c.navigationEndpoint || Sx()
            }
        }, function() {
            Tx(a)
        });
        b && I({
            className: "unlimited-family-interstitial-buttons"
        }, function() {
            Tx(b)
        })
    }

    function Vx(a) {
        "#dialog" == Q().hash && mw();
        Qx("ytm-unlimited-family-message-interstitial-renderer", function() {
            I({
                className: "unlimited-family-interstitial-content-container"
            }, function() {
                a.thumbnail && Y(a.thumbnail, {
                    className: "unlimited-family-message-thumbnail",
                    alt: ""
                });
                ap({
                    className: "unlimited-family-interstitial-title"
                }, function() {
                    V(a.title)
                });
                ip({
                    className: "unlimited-family-interstitial-content"
                }, function() {
                    V(a.content)
                });
                a.footer && ip({
                    className: "unlimited-family-message-footer"
                }, function() {
                    V(a.footer)
                })
            });
            I({
                className: "unlimited-family-interstitial-buttons-container"
            }, function() {
                Ux(a.dismissButton, a.actionButton)
            })
        })
    };

    function Wx(a, b) {
        var c = b.name,
            d = b.ua,
            e = to(v("radio"));
        H("c3-material-radio", a, function() {
            fp({
                id: e,
                type: "radio",
                name: c
            }, function(f) {
                "checked" in a && (f.checked = !!a.checked)
            });
            gp({
                htmlFor: e.toString()
            }, d)
        })
    };
    var Xx = W({
            buttonRenderer: Z
        }),
        Yx;

    function Zx(a, b) {
        a.forEach(function(c) {
            var d = c.selectRadioButtonRenderer;
            d && (!Yx && d.isDefault && (Yx = d), void 0 === d._isSelected && (d._isSelected = d.isDefault), I({
                className: "membership-collision-select-radio-buttons"
            }, function() {
                Wx({
                    onchange: function() {
                        Yx && (Yx._isSelected = !1);
                        d && (d._isSelected = !0, Yx = d, R())
                    },
                    checked: d._isSelected
                }, {
                    name: null,
                    ua: function() {
                        V(d.label)
                    }
                });
                d.selectButton.buttonRenderer.serviceEndpoint ? I({
                    className: "unlimited-family-interstitial-buttons-container",
                    hidden: !d._isSelected
                }, function() {
                    Xx(d.selectButton)
                }) : I({
                    className: "unlimited-family-interstitial-buttons-container",
                    hidden: !d._isSelected,
                    onclick: function() {
                        return b.onKeepClickedCallback()
                    }
                }, function() {
                    Xx(d.selectButton)
                })
            }))
        })
    };
    var $x = W({
        unlimitedFamilyMessageInterstitialRenderer: Vx,
        unlimitedMembershipCollisionRenderer: function(a, b) {
            Qx("ytm-unlimited-membership-collision-renderer", function() {
                I(null, function() {
                    ap({
                        className: "membership-collision-title"
                    }, function() {
                        V(a.title)
                    });
                    ip({
                        className: "membership-collision-content"
                    }, function() {
                        V(a.content)
                    });
                    Zx(a.selectRadioButtons, b)
                })
            })
        }
    });

    function ay(a) {
        T(a, "ytm-join-family", {}, function() {
            a.collisionRenderer ? $x(a.collisionRenderer, {
                onKeepClickedCallback: function() {
                    var b = a.confirmationRenderer;
                    Sx();
                    $x(b)
                }
            }) : $x(a.confirmationRenderer)
        })
    };
    var by = W({
        sectionListRenderer: ux
    });

    function cy(a) {
        T(a, "ytm-search", {
            Fa: "/results"
        }, function() {
            by(a.contents)
        })
    };

    function dy(a, b) {
        function c() {
            var h = b && b.Rd;
            a.title && bp({
                id: f,
                "aria-hidden$": e || h
            }, function() {
                return V(a.title)
            });
            a.summary && J({
                id: g,
                "aria-hidden$": e || h
            }, function() {
                return V(a.summary)
            })
        }
        var d = "setting-title-subtitle-block",
            e = !(!b || !b.onclick);
        b && b.disabled && (d += " disabled");
        var f = to(v("setting-title-subtitle-block-title")),
            g = to(v("setting-title-subtitle-block-subtitle"));
        d = {
            className: d
        };
        a.endpoint ? U(a.endpoint, d, c) : (e && (d.onclick = b.onclick, d.role$ = "button", d.tabindex$ = 0, d["aria-labelledby$"] = f, d["aria-describedby$"] = g), I(d, c))
    };
    var ey = W({
        buttonRenderer: Z
    });

    function fy(a, b) {
        sw({
            header: a.title && function() {
                ap(null, function() {
                    V(a.title)
                })
            },
            content: function() {
                a.dialogMessages && a.dialogMessages.forEach(function(c) {
                    ip({
                        className: "secondary-text confirm-dialog-messages"
                    }, function() {
                        V(c)
                    })
                })
            },
            buttons: function() {
                a.primaryIsCancel && ey(a.confirmButton, {
                    va: !0
                });
                ey(a.cancelButton, {
                    V: function() {
                        return gy(a)
                    },
                    va: !0
                });
                !a.primaryIsCancel && ey(a.confirmButton, {
                    V: function() {
                        return b && b.ac && b.ac()
                    },
                    va: !0
                })
            },
            Kb: function() {
                if (a.onClosedActions)
                    for (var c = ba(a.onClosedActions), d = c.next(); !d.done; d = c.next()) oq(d.value, {
                        B: a,
                        A: a
                    })
            },
            xa: b && b.xa,
            sb: function() {
                if (a.onOpenCommands)
                    for (var c = ba(a.onOpenCommands), d = c.next(); !d.done; d = c.next()) S(d.value, a, !0)
            },
            qb: function() {
                return gy(a)
            },
            Ia: b && b.Ia,
            data: a
        })
    }

    function gy(a) {
        if (a.onDismissCommands)
            for (var b = ba(a.onDismissCommands), c = b.next(); !c.done; c = b.next()) S(c.value, a, !0)
    };
    var hy = W({
        confirmDialogRenderer: fy
    });

    function iy(a, b) {
        T(a, "ytm-setting-action-renderer", b, function() {
            dy({
                title: a.title,
                summary: a.summary
            }, {
                onclick: function(c) {
                    hy(a.confirmDialog, {
                        Ia: c.currentTarget
                    })
                }
            })
        })
    };
    var jy = {};

    function ky(a) {
        if (!a) return !1;
        var b = !1;
        a.forEach(function(c) {
            c.item && (c = c.item, b = b || c in jy && !jy[c])
        });
        return b
    };
    var ly = W({
        confirmDialogRenderer: fy
    });

    function my(a, b) {
        void 0 === a.enabled && a.itemId && (a.enabled = ny(a.itemId));
        var c = a.invertClientsideUsage ? !a.enabled : !!a.enabled;
        jy[a.itemId] = c;
        T(a, "ytm-setting-boolean-renderer", b, function() {
            gp(null, function() {
                var d = a.isLocked ? a.messageWhenLocked : a.summary;
                dy({
                    title: a.title,
                    summary: d
                }, {
                    disabled: a.isLocked,
                    Rd: !0
                });
                d = Lq(a.title) + (d ? " " + Lq(d) : "");
                Xt({}, {
                    w: d,
                    checked: c,
                    onclick: function(e) {
                        oy(e, a)
                    },
                    disabled: a.isLocked
                })
            })
        })
    }

    function oy(a, b) {
        var c = b.invertClientsideUsage ? !b.enabled : !!b.enabled,
            d = c ? b.disableServiceEndpoint : b.enableServiceEndpoint;
        (c = c ? b.confirmDisableDialog : b.confirmEnableDialog) ? ly(c, {
            Ia: a.currentTarget,
            ac: function() {
                b.enabled = !b.enabled;
                R()
            }
        }): d && (S(d, b, !0), b.enabled = !b.enabled, R())
    }

    function ny(a) {
        om.K();
        switch (a) {
            case "DARK_THEME":
                return rm(0, 165);
            case "SAFETY_MODE":
                return rm(0, 58);
            default:
                return !1
        }
    };

    function py(a, b) {
        T(a, "ytm-setting-notification-item-renderer", null, function() {
            var c = b.isSubscribed ? a.undoActionDesc : a.actionDesc,
                d = b.isSubscribed ? a.undoServiceEndpoint : a.serviceEndpoint;
            I({
                className: "setting-notification-item-renderer-description"
            }, function() {
                V(a.title)
            });
            Yo({
                onclick: function() {
                    d && (S(d, a, !0), b.toggle(a))
                }
            }, function() {
                V(c)
            })
        })
    };

    function qy(a) {
        aw(function() {
            V(a.successResponseText)
        })
    }
    var ry = np("ytm-setting-notification-list-renderer", function(a, b, c) {
        function d(f) {
            return function(g) {
                e[f] = !e[f];
                e[f] && qy(g);
                b()
            }
        }
        var e = (c.items || []).map(function() {
            return !1
        });
        return {
            F: function(f) {
                if (!ky(f.clientSettingDependencies) && e.length) {
                    var g = e.some(function(l) {
                        return !l
                    });
                    I({
                        className: "setting-notification-list-renderer-header"
                    }, function() {
                        bp(null, function() {
                            V(f.title)
                        });
                        g && Yo({
                            onclick: function() {
                                S(f.serviceEndpoint, f, !0);
                                e = e.map(function() {
                                    return !0
                                });
                                qy(f);
                                b()
                            }
                        }, function() {
                            V(f.actionDesc)
                        })
                    });
                    for (var h = 0; h < f.items.length; h++) py(f.items[h].settingNotificationItemRenderer, {
                        isSubscribed: e[h],
                        toggle: d(h)
                    })
                }
            }
        }
    });

    function sy(a) {
        T(a, "ytm-setting-read-only-item-renderer", null, function() {
            dy({
                title: a.title || a.settingStatusText,
                summary: a.summary,
                endpoint: a.navigationEndpoint
            })
        })
    };
    var uy = W({
        settingMenuItemRenderer: ty
    });

    function vy(a) {
        ky(a.clientSettingDependencies) || (wy(a), T(a, "ytm-setting-single-option-menu-renderer", null, function() {
            dy({
                title: a.title,
                summary: {
                    runs: [{
                        text: xy(a).name || ""
                    }]
                }
            }, {
                onclick: function() {
                    qs({
                        content: function() {
                            yy(a)
                        },
                        Ka: !0,
                        Ja: !0,
                        R: G.P
                    })
                }
            })
        }))
    }

    function yy(a) {
        var b = to(v("setting-single-option-menu-header")),
            c = to(v("setting-single-option-menu-button"));
        I({
            className: "setting-single-option-menu-header"
        }, function() {
            Vp({
                id: c,
                name: "DISMISSAL",
                onclick: ms,
                Fb: b + " " + c,
                w: G.ja
            });
            $o({
                className: "title",
                id: b
            }, function() {
                return V(a.title)
            })
        });
        I({
            className: "setting-single-option-menu-items",
            role$: "listbox",
            "aria-labelledby$": b
        }, function() {
            uy(a.items)
        })
    }

    function ty(a) {
        T(a, "ytm-setting-menu-item-renderer", {
            "aria-selected$": a.selected,
            role$: "option",
            onclick: function(b) {
                b.stopPropagation();
                a.updateServiceEndpoint && S(a.updateServiceEndpoint, a, !0)
            }
        }, function() {
            J({
                className: "setting-menu-item-renderer-description"
            }, function() {
                w(a.name || "")
            });
            a.selected && N("CHECK", {
                role$: "presentation"
            })
        })
    }

    function xy(a) {
        var b = (a.items || []).find(function(c) {
            return !!c.settingMenuItemRenderer.selected
        });
        b || Lh(Error("Unable to get currently selected user preference: " + a.itemId));
        return E(function() {
            return b.settingMenuItemRenderer
        })
    }

    function wy(a) {
        if (a.itemId) {
            a: {
                var b = a.itemId;
                var c = om.K();
                switch (b) {
                    case "I18N_LANGUAGE":
                        b = c.get("hl") || y("INNERTUBE_CONTEXT_HL", void 0);
                        break a;
                    case "I18N_REGION":
                        b = c.get("gl") || y("INNERTUBE_CONTEXT_GL", void 0);
                        break a
                }
                b = void 0
            }
            b && zy(b, a.items || [])
        }
    }

    function zy(a, b) {
        for (var c = {
                ya: 0
            }; c.ya < b.length; c = {
                ya: c.ya
            }, c.ya++) {
            var d = E(function(e) {
                return function() {
                    return b[e.ya].settingMenuItemRenderer
                }
            }(c));
            d.selected = d.value === a ? !0 : !1
        }
    };
    var Ay = W({
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingNotificationListRenderer: ry
    });

    function By(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.tc,
            e = c.pc;
        I({
            className: "setting-generic-category-title-block",
            "aria-hidden$": "true"
        }, function() {
            ap({
                id: d
            }, function() {
                V(a)
            });
            b && J({
                id: e
            }, function() {
                return V(b)
            })
        })
    }
    var Cy = np("ytm-setting-generic-category", function(a, b, c) {
        function d() {
            e = !e;
            b()
        }
        var e = !!c.focused;
        return {
            F: function(f) {
                var g = f.title,
                    h = f.subtitle;
                f = f.children;
                var l = e ? "EXPAND_LESS" : "EXPAND_MORE",
                    n = void 0 !== e,
                    q = "setting-generic-category-title" + (e ? " expanded" : ""),
                    t = to(v("setting-generic-category-title-block-title")),
                    x = to(v("setting-generic-category-title-block-subtitle"));
                q = {
                    className: q,
                    onclick: d,
                    role$: "button",
                    "aria-expanded$": e,
                    "aria-labelledby$": t
                };
                h && (q["aria-describedby$"] = x);
                I(q, function() {
                    By(g, h, {
                        tc: t,
                        pc: x
                    });
                    n && N(l, {
                        "aria-hidden$": "true"
                    })
                });
                e && f()
            }
        }
    });

    function Dy(a) {
        var b = to(v("setting-generic-category-title-block-title")),
            c = to(v("setting-generic-category-title-block-subtitle"));
        U(a.navigationEndpoint, {
            className: "setting-generic-category",
            "aria-labelledBy$": b,
            "aria-describedBy$": c
        }, function() {
            I({
                className: "setting-generic-category-title"
            }, function() {
                By(a.title, a.subtitle, {
                    tc: b,
                    pc: c
                })
            })
        })
    };
    var Ey = W({
        gamingThirdPartySettingRenderer: function(a, b) {
            T(a, "ytm-gaming-third-party-setting-renderer", b, function() {
                I({
                    className: "gaming-third-party-setting-renderer-title"
                }, function() {
                    Y(a.icon, {
                        alt: "",
                        className: "gaming-third-party-setting-renderer-icon"
                    });
                    V(a.title)
                });
                var c = a.linked ? a.unlinkCommand : a.linkCommand,
                    d = a.linked ? a.linkedTooltip : a.unlinkedTooltip;
                Aq({
                    onclick: function() {
                        return S(c, a, !0)
                    },
                    className: "gaming-third-party-setting-renderer-button"
                }, null, function() {
                    return V(d)
                })
            })
        },
        settingActionRenderer: iy,
        settingBooleanRenderer: my,
        settingReadOnlyItemRenderer: sy,
        settingSingleOptionMenuRenderer: vy,
        settingCategorySectionRenderer: function(a) {
            ky(a.clientSettingDependencies) || T(a, "ytm-setting-category-section-renderer", null, function() {
                Ay(a.items)
            })
        },
        settingNotificationListRenderer: ry
    });
    var Fy = W({
        settingCategoryCollectionRenderer: function(a) {
            Cy({
                title: a.title,
                subtitle: a.subtitle,
                children: function() {
                    Ey(a.items)
                },
                focused: a.focused
            });
            zo(function() {
                "SETTING_CAT_GAMING_THIRD_PARTY" === a.categoryId && a.items.forEach(function(b) {
                    S({
                        accountLinkCommand: {}
                    }, b.gamingThirdPartySettingRenderer, !1)
                })
            })
        },
        settingCategoryEntryRenderer: function(a) {
            Dy({
                title: a.title
            })
        },
        subscriptionProductsSettingCategoryEntryRenderer: function(a, b) {
            T(a, "ytm-subscription-products-setting-category-entry-renderer", b, function() {
                Dy(a)
            })
        }
    });

    function Gy(a) {
        T(a, "ytm-settings", {}, function() {
            Fy(a.items)
        })
    };
    var Hy = W({
        sponsorshipsAccountBarRenderer: function(a, b) {
            T(a, "ytm-sponsorships-account-bar-renderer", b, function() {
                Y(a.viewerImage, {
                    className: "sponsorships-account-bar-image",
                    alt: ""
                });
                I({
                    className: "sponsorships-account-bar-text"
                }, function() {
                    ip({
                        className: "sponsorships-account-bar-display-name"
                    }, function() {
                        V(a.displayName)
                    });
                    ip({
                        className: "sponsorships-account-bar-email"
                    }, function() {
                        V(a.email)
                    })
                })
            })
        },
        sectionListRenderer: ux
    });
    var Iy = W({
        c4TabbedHeaderRenderer: zr,
        sponsorshipsOfferListRenderer: function(a, b) {
            T(a, "ytm-sponsorships-offer-list-renderer", b, function() {
                Hy(a.appBar);
                Hy(a.accountBar);
                Hy(a.itemSection)
            })
        }
    });

    function Jy(a) {
        T(a, "ytm-sponsorship", {}, function() {
            Iy(a.header);
            a.offers && a.offers.errorMessageRenderer ? a.offers.errorMessageRenderer.errorMessages.forEach(function(b) {
                I({
                    className: "offer-error"
                }, function() {
                    V(b)
                })
            }) : Iy(a.offers, {
                isChannel: !(!a.header || !a.header.c4TabbedHeaderRenderer)
            })
        })
    };

    function Ky(a) {
        return {
            commandMetadata: {
                webCommandMetadata: {
                    url: a
                }
            }
        }
    }

    function Ly() {
        return {
            signInEndpoint: {},
            commandMetadata: {
                webCommandMetadata: {
                    url: dq()
                }
            }
        }
    };
    var My = G.fd,
        Ny = G.gd,
        Oy = G.hd;

    function Py() {
        document.title = "404 Not Found";
        var a = {
            alt: "",
            className: "error-img"
        };
        I({
            className: "ytm-error vbox"
        }, function() {
            ar(y("404_IMG_URL", void 0), a);
            ap({
                className: "error-title typography-display-1"
            }, function() {
                w(Oy)
            });
            ip({
                className: "error-subtitle typography-body-2a"
            }, function() {
                w(Ny)
            });
            U(Ky("/"), {
                "aria-label$": My,
                className: "error-link"
            }, function() {
                Aq({
                    "aria-hidden$": "true",
                    className: "button-renderer",
                    "data-style$": "STYLE_PRIMARY"
                }, null, function() {
                    w(My)
                })
            })
        })
    };
    var Qy = G.Oc,
        Ry = G.kd,
        Sy = G.Fd,
        Ty = G.Ld;

    function Uy(a) {
        "oops" == a ? I({
            className: "ytm-oops-message"
        }, function() {
            w(Ry)
        }) : "terms" == a ? I({
            className: "ytm-terms"
        }, function() {
            var b = {
                className: "terms-page-link"
            };
            Gc && (b.target = "_blank");
            Tr("/t/terms?chromeless=1", b, function() {
                w(Ty)
            });
            Tr("//www.google.com/intl/en/policies/privacy/", b, function() {
                w(Sy)
            });
            I({}, function() {
                w(Qy)
            })
        }) : "404" === a && Py()
    };
    var Vy = G.ja,
        Wy = W({
            buttonRenderer: Z
        });

    function Xy(a) {
        (a = id(a.target, "ytm-alert-with-button-renderer")) && (a.style.display = "none")
    };
    var Yy = W({
        buttonRenderer: Z
    });
    var Zy = W({
        clipAttributionRenderer: ot,
        clipSectionFooterRenderer: function(a, b) {
            b = void 0 === b ? {} : b;
            T(a, "ytm-clip-section-footer-renderer", b, function() {
                Yy(a.buttons)
            })
        },
        itemSectionRenderer: lx
    });
    var $y = W({
        buttonRenderer: Z,
        clipSectionRenderer: function(a, b) {
            b = void 0 === b ? {} : b;
            T(a, "ytm-clip-section-renderer", b, function() {
                I({
                    className: "clip-section-renderer-contents"
                }, function() {
                    return Zy(a.contents, {
                        className: "clip-section-renderer-item"
                    })
                });
                Zy(a.footer)
            })
        },
        sectionListRenderer: ux
    });
    var az = W({
        engagementPanelSectionListRenderer: function(a, b) {
            T(a, "ytm-engagement-panel-section-list-renderer", b, function() {
                a.header && a.header.engagementPanelTitleHeaderRenderer && ap({
                    className: "engagement-panel-section-list-header"
                }, function() {
                    J({
                        className: "engagement-panel-section-list-header-title"
                    }, function() {
                        return V(a.header.engagementPanelTitleHeaderRenderer.title)
                    });
                    $y(a.header.engagementPanelTitleHeaderRenderer.informationButton, {
                        className: "engagement-panel-section-list-header-button"
                    });
                    $y(a.header.engagementPanelTitleHeaderRenderer.visibilityButton, {
                        className: "engagement-panel-section-list-header-button"
                    })
                });
                $y(a.content)
            })
        }
    });

    function bz(a) {
        var b = void 0 === b ? {} : b;
        H("ytm-engagement-panel", b, function() {
            az(a)
        })
    };
    var cz = W({
        buttonRenderer: Z
    });

    function dz(a) {
        T(a, "ytm-player-error-message-renderer", {}, function() {
            I({
                className: "playability-status-message"
            }, function() {
                V(a.reason)
            });
            I({
                className: "playability-status-message"
            }, function() {
                V(a.subreason)
            });
            I({
                className: "playability-status-message"
            }, function() {
                V(a.learnMore)
            });
            a.proceedButton && I({
                className: "playability-status-signin-button"
            }, function() {
                cz(a.proceedButton)
            })
        })
    };

    function ez(a) {
        T(a, "ytm-player-microformat-renderer", {}, function() {
            if (a && JSON) {
                var b = {
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    description: Lq(a.description),
                    duration: "PT" + a.lengthSeconds + "S",
                    interactionCount: a.viewCount,
                    name: Lq(a.title),
                    thumbnailUrl: a.thumbnail && a.thumbnail.thumbnails ? a.thumbnail.thumbnails.map(function(c) {
                        return c.url
                    }) : [],
                    uploadDate: a.publishDate
                };
                a.embed && (b.embedUrl = a.embed.iframeUrl);
                a.liveBroadcastDetails && (b.publication = [{
                    "@type": "BroadcastEvent",
                    isLiveBroadcast: a.liveBroadcastDetails.isLiveNow,
                    startDate: a.liveBroadcastDetails.startTimestamp,
                    endDate: a.liveBroadcastDetails.endTimestamp
                }]);
                jp({
                    type: "application/ld+json"
                }, function() {
                    w(JSON.stringify(b))
                })
            }
        })
    };

    function fz(a) {
        var b = E(function() {
                return a.sets[0].previousButtonVideo
            }),
            c = E(function() {
                return a.sets[0].nextButtonVideo
            });
        return {
            xe: b,
            next: c
        }
    };
    var gz = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    function hz(a) {
        Hq({
            w: G.Ed,
            disabled: !a
        }, a, {
            className: "icon"
        }, function() {
            N("SKIP_PREVIOUS")
        })
    }

    function iz(a) {
        Hq({
            w: G.ed,
            disabled: !a
        }, a, {
            className: "icon"
        }, function() {
            N("SKIP_NEXT")
        })
    }

    function jz(a) {
        var b = a.data,
            c = a.hb;
        H("ytm-playlist-controls", {}, function() {
            I({
                className: "playlist-controls-primary"
            }, function() {
                hz(c.xe);
                iz(c.next)
            });
            I({
                className: "playlist-controls-secondary"
            }, function() {
                gz(b.saveButton);
                gz(b.shareButton)
            })
        })
    };

    function kz(a, b) {
        var c = a.data,
            d = a.expanded;
        H("ytm-playlist-panel-header", b, function() {
            I({
                className: "playlist-panel-header-metadata"
            }, function() {
                bp({
                    className: "playlist-panel-header-title"
                }, function() {
                    V(c.titleText, {
                        J: !0
                    })
                });
                I({
                    className: "small-text playlist-panel-header-subhead"
                }, function() {
                    c.isInfinite || w(c.currentIndex + 1 + " / " + c.totalVideos + " ");
                    J({
                        className: "playlist-panel-header-byline"
                    }, function() {
                        V(c.shortBylineText)
                    })
                })
            });
            Aq({
                className: "icon playlist-panel-header-icon"
            }, null, function() {
                N(d ? "EXPAND_LESS" : "EXPAND_MORE")
            })
        })
    };
    var lz = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function mz(a, b) {
        T(a, "ytm-playlist-panel-video-renderer", b, function() {
            Vo(a, function() {
                Bs({
                    thumbnail: E(function() {
                        return a.thumbnail
                    }),
                    navigationEndpoint: E(function() {
                        return a.navigationEndpoint
                    }),
                    lengthText: a.lengthText,
                    headline: E(function() {
                        return a.title
                    }),
                    H: [a.shortBylineText],
                    overlay: function() {
                        Is(function() {
                            return lz(a.thumbnailOverlays)
                        })
                    }
                })
            })
        })
    };
    var oz = W({
        playlistPanelVideoRenderer: nz
    });

    function nz(a) {
        mz(a, {
            className: "item",
            selected$: a.selected
        })
    }

    function pz(a) {
        I({
            className: "playlist-content section"
        }, function() {
            ex({
                items: a.contents || [],
                Xa: oz,
                Wa: 6,
                chunkSize: 6
            })
        })
    }
    var qz = np("ytm-playlist", function(a, b) {
        function c() {
            d = !d;
            b()
        }
        var d = !0;
        return {
            F: function(e) {
                var f = e.data,
                    g = e.hb;
                a.setAttribute("aria-expanded", d);
                kz({
                    data: f,
                    expanded: d
                }, {
                    onclick: c
                });
                I({
                    hidden: !d
                }, function() {
                    jz({
                        data: f,
                        hb: g
                    });
                    pz(f)
                })
            },
            ia: function(e, f) {
                e.data != f.data && (d = !0)
            }
        }
    });
    if (A("mweb_enable_custom_control")) {
        var rz = ul();
        rz && window.addEventListener(rz, sz);
        Gc || Vq() || !A("mweb_enable_custom_control_landscape_to_fullscreen") || window.addEventListener("orientationchange", tz)
    }

    function sz() {
        uz() || (document.body.removeAttribute("faux-fullscreen"), ql(), fq("resize"))
    }

    function vz(a) {
        var b = uz();
        sl() ? (b ? (document.body.removeAttribute("faux-fullscreen"), ql()) : (document.body.setAttribute("faux-fullscreen", !0), pl(rl, {
            navigationUI: "hide"
        }), a || Wq() || !screen.orientation || !screen.orientation.lock || Vq() || screen.orientation.lock("landscape")), fq("resize")) : A("mweb_native_control_in_faux_fullscreen") ? (a = document.querySelector("video")) && pl(a) : fq("player-fullscreen-change", {
            isCurrentlyFullscreen: b
        })
    }

    function uz() {
        return !!tl() || "#fauxfullscreen" == Q().hash
    }

    function tz() {
        if (!Wq() && F() && !uz()) try {
            vz(!1)
        } catch (a) {
            Ol("/gen_204?action=rotate_to_fullscreen")
        }
    };
    var wz = G.Kc,
        xz = G.Nc;

    function yz(a) {
        a = document.getElementById(a.toString());
        a.focus();
        a.setSelectionRange(0, a.value.length);
        try {
            var b = document.execCommand("copy")
        } catch (c) {}
        aw(function() {
            b ? w(wz) : w(xz)
        })
    };
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

    function Kz() {
        var a = E(function() {
            return F().getDebugText(!0)
        });
        if (a) {
            var b = to(v("copy-debug-info-textarea"));
            sw({
                header: function() {
                    ap(null, function() {
                        return w(Bz)
                    })
                },
                buttons: function() {
                    Aq({
                        className: "compact",
                        onclick: function() {
                            return yz(b)
                        }
                    }, null, function() {
                        return w(Az)
                    });
                    Aq({
                        className: "compact"
                    }, null, function() {
                        return w(zz)
                    })
                },
                content: function() {
                    lp({
                        className: "player-debug-info",
                        id: b
                    }, function() {
                        return w(a)
                    })
                }
            })
        }
    }

    function Lz() {
        var a = F();
        a && (a.isVideoInfoVisible() ? a.hideVideoInfo() : a.showVideoInfo())
    }

    function Mz(a) {
        return (a = mm[a]) ? a + "p" : Ez
    }

    function Nz(a) {
        if (!(1 > a.length)) {
            var b = E(function() {
                    return F().getPlaybackQuality()
                }),
                c = E(function() {
                    return F().getPreferredQuality()
                }),
                d = to(v("player-quality-dropdown"));
            gp({
                className: "player-quality-label",
                htmlFor: d.toString()
            }, function() {
                w(Dz)
            });
            jq({
                className: "player-quality-settings",
                onchange: function(e) {
                    return E(function() {
                        return F().setPlaybackQualityRange(e.target.value, e.target.value)
                    })
                }
            }, {
                id: d
            }, function() {
                a.forEach(function(e) {
                    hp({
                        className: "option",
                        selected: e == c,
                        value$: e
                    }, function() {
                        var f = Mz(e);
                        "auto" == e && "auto" == c && (f += " (" + Mz(b) + ")");
                        w(f)
                    })
                })
            })
        }
    }

    function Oz(a) {
        if (!(2 > a.length)) {
            var b = E(function() {
                    return F().getPlaybackRate()
                }),
                c = to(v("player-speed-dropdown"));
            gp({
                htmlFor: c.toString()
            }, function() {
                w(Hz)
            });
            jq({
                className: "player-speed-settings",
                onchange: function(d) {
                    return E(function() {
                        return F().setPlaybackRate(Number(d.target.value))
                    })
                }
            }, {
                id: c
            }, function() {
                a.forEach(function(d) {
                    hp({
                        className: "option",
                        selected: d == b,
                        value$: d
                    }, function() {
                        w("1" == d ? Iz : d.toLocaleString())
                    })
                })
            })
        }
    }

    function Pz(a) {
        var b = F();
        if (a && b) {
            var c = b.getOption("captions", "tracklist", {
                    includeAsr: !0
                }),
                d = b.getOption("captions", "track"),
                e = !!d.displayName;
            a = to(v("player-captions-dropdown"));
            gp({
                htmlFor: a.toString()
            }, function() {
                w(Fz)
            });
            jq({
                className: "player-caption-settings",
                onchange: function(f) {
                    return Qz(f, c)
                }
            }, {
                id: a
            }, function() {
                hp({
                    className: "option",
                    selected: !e,
                    value$: Gz
                }, function() {
                    w(Gz)
                });
                c.forEach(function(f) {
                    hp({
                        className: "option",
                        selected: d.displayName === f.displayName,
                        value$: f.displayName
                    }, function() {
                        w(f.displayName)
                    })
                })
            })
        }
    }

    function Qz(a, b) {
        var c = F();
        if (c) {
            var d = a.target.value,
                e = cb(b, function(f) {
                    return f.displayName == d
                });
            e ? c.setOption("captions", "track", e) : (c.setOption("captions", "stickyLoading", {}), c.setOption("captions", "track", {}))
        }
    }

    function Rz(a) {
        sw({
            header: function() {
                ap({
                    className: "player-settings-header"
                }, function() {
                    return w(Cz)
                })
            },
            buttons: function() {
                Aq({
                    className: "compact"
                }, null, function() {
                    return w(zz)
                })
            },
            content: function() {
                var b = !!E(function() {
                    return F().getOptions("captions")
                });
                Pz(b);
                b = E(function() {
                    return F().getAvailableQualityLevels()
                }) || [];
                Nz(b);
                b = E(function() {
                    return F().getAvailablePlaybackRates()
                }) || [];
                Oz(b);
                Ur(Kz, function() {
                    return w(Bz)
                });
                Ur(Lz, function() {
                    return w(Jz)
                })
            },
            jc: uz()
        });
        a.stopPropagation()
    };

    function Sz() {
        var a = F();
        if (!a) return !1;
        a = a.getPlayerState();
        return !(1 !== a && 2 !== a && 3 !== a)
    }

    function Tz() {
        var a = F();
        return a ? 1 > a.getVideoAspectRatio() : !1
    }

    function Uz() {
        var a = F();
        if (a) return a.getCurrentTime()
    }

    function Vz() {
        var a = F();
        if (a) {
            var b = a.getPresentingPlayerType(),
                c = a.getVideoData();
            a = a.getProgressState(b);
            return c && c.isLive ? a.seekableEnd : a.duration
        }
    }

    function Wz() {
        var a = F();
        if (a) switch (a.getPlayerState()) {
            case 1:
                return "PLAYER_PAUSE";
            case 2:
                return "PLAYER_PLAY";
            case 3:
                return "BUFFERING"
        }
    };
    var Xz = null;
    A("mweb_enable_custom_control") && window.addEventListener("video-progress", Yz);
    var $z = new Fe(Zz, 100),
        aA = 0,
        bA = !1,
        cA, dA = 0,
        eA = 0,
        fA = 0,
        gA;

    function Yz() {
        Xz && Xz()
    }

    function Zz(a) {
        var b = F();
        b && b.seekTo(a)
    }
    var hA = np("ytm-progress-bar", function(a, b) {
        function c(e) {
            var f = F();
            if (f) {
                var g = e.target,
                    h = e.offsetX - g.offsetLeft,
                    l = Vz() || 0;
                f.seekTo(h / g.offsetWidth * l);
                fq("progress-bar-seek");
                e.stopPropagation()
            }
        }

        function d(e) {
            if (bA && F()) {
                var f = Vz() || 0,
                    g = e.touches[0].clientX,
                    h = eA - 16;
                g <= dA ? aA = gA.style.marginLeft = 0 : g >= h ? (gA.style.marginLeft = fA - 16 - 12 + "px", aA = f) : (gA.style.marginLeft = g - dA - 16 + "px", aA = (g - dA) / (eA - dA) * f);
                $z.Va(aA);
                fq("srubber-touch-move", {
                    draggingPosition: aA
                });
                e.preventDefault()
            }
        }
        Xz = b;
        return {
            F: function() {
                var e = F();
                if (e) {
                    var f = Uz() || 0,
                        g = Vz() || 0;
                    f = f / g * 100;
                    var h = 100 * e.getVideoLoadedFraction(),
                        l = f + "% ",
                        n = f + "% ";
                    I({
                        className: "progress-bar-line",
                        onclick: c
                    }, function(q) {
                        cA = q;
                        I({
                            className: "progress-bar-background"
                        }, function() {});
                        I({
                            className: "progress-bar-loaded"
                        }, function(t) {
                            t.style.width = h + "%"
                        });
                        I({
                            className: "progress-bar-played"
                        }, function(t) {
                            t.style.width = l
                        })
                    });
                    I({
                        className: "progress-bar-playhead-wrapper"
                    }, function(q) {
                        q.style.marginLeft = n;
                        gA = q;
                        I({
                            className: "progress-bar-playhead",
                            ontouchstart: function(t) {
                                ng(q, "in-dragging");
                                bA = !0;
                                var x = F();
                                x && (1 == x.getPlayerState() && x.pauseVideo(), fq("srubber-touch-start"), x = cA.getBoundingClientRect(), dA = x.left, eA = x.right, fA = x.width, t.stopPropagation(), t.preventDefault())
                            },
                            ontouchend: function(t) {
                                og(q, "in-dragging");
                                bA = !1;
                                var x = F();
                                x && (aA != Vz() && x.playVideo(), t.stopPropagation(), fq("srubber-touch-end"))
                            },
                            ontouchmove: d
                        }, function() {
                            I({
                                className: "progress-bar-playhead-dot"
                            })
                        })
                    })
                }
            }
        }
    });

    function iA(a) {
        var b = Math.abs(Math.floor(a)),
            c = Math.floor(b / 86400),
            d = Math.floor(b % 86400 / 3600),
            e = Math.floor(b % 3600 / 60);
        b = Math.floor(b % 60);
        var f = "";
        0 < c && (f += c + ":", 10 > d && (f += "0"));
        if (0 < c || 0 < d) f += d + ":", 10 > e && (f += "0");
        f += e + ":";
        10 > b && (f += "0");
        f += b;
        return 0 <= a ? f : "-" + f
    };
    var jA = G.qd,
        kA = G.Ad,
        lA = G.Bd,
        mA = null,
        nA = !1,
        oA = 0;
    A("mweb_enable_custom_control") && (window.addEventListener("video-progress", pA), window.addEventListener("srubber-touch-start", qA), window.addEventListener("srubber-touch-end", rA), window.addEventListener("srubber-touch-move", sA));

    function qA() {
        nA = !0
    }

    function rA() {
        nA = !1
    }

    function sA(a) {
        oA = a.detail.draggingPosition;
        mA && mA()
    }

    function pA() {
        mA && mA()
    }
    var uA = np("ytm-time-display", function(a, b) {
        function c(d, e, f, g) {
            var h = ["time-display-content", "cbox"];
            f && h.push("time-display-with-live-dot");
            g && h.push("live-at-head");
            I({
                className: h.join(" "),
                "aria-label$": f ? jA : "",
                onclick: tA
            }, function() {
                J({
                    className: "time-first",
                    "aria-label$": f ? "" : lA + d,
                    role$: "text"
                }, function() {
                    w(d)
                });
                g || (J({
                    className: "time-delimiter",
                    "aria-hidden$": !0
                }, function() {
                    w("/")
                }), J({
                    className: "time-second",
                    "aria-label$": f ? "" : kA + e,
                    role$: "text"
                }, function() {
                    w(e)
                }))
            })
        }
        mA = b;
        return {
            F: function() {
                var d = F();
                if (d) {
                    var e = d.getVideoData(),
                        f = nA ? Math.round(oA) : Math.round(Uz()),
                        g = Math.round(Vz());
                    e && e.isLive ? (d = d.isAtLiveHead(), c("LIVE", iA(Math.round(f - g)), !0, d)) : c(iA(f), iA(g), !1, !1)
                }
            }
        }
    });

    function tA() {
        var a = F();
        a && a.getVideoData().isLive && !a.isAtLiveHead() && a.seekTo(Infinity)
    };
    var vA = window.history,
        wA = 0,
        xA = 0,
        yA = 0;

    function zA() {
        return D(function() {
            return vA.state.previousUrl
        })
    }

    function AA() {
        return D(function() {
            return vA.state.params
        })
    }

    function BA(a) {
        try {
            var b = {},
                c = (b.params = a.params, b.previousUrl = a.hc, b);
            b = !1;
            A("mweb_history_state_limit") && Fc && 90 <= wA + xA && (b = !0);
            var d = !0;
            a.replace && vA && vA.replaceState && !b ? (xA++, vA.replaceState(c, "", a.href), d = !1) : vA && vA.pushState && !b && (wA++, vA.pushState(c, "", a.href), d = !1);
            d && (yA++, setTimeout(function() {
                rc(Q(), a.href)
            }))
        } catch (e) {
            throw setTimeout(function() {
                rc(Q(), a.href)
            }), Error("Failed to update history state with href " + a.href + " /\n        psc: " + wA + " /\n        rsc: " + xA + " /\n        fbc: " + yA +
                " /\n        " + e.message);
        }
    };
    var CA = !1;

    function DA(a) {
        var b = D(function() {
                return a.player.args
            }),
            c = zA();
        b && c && (b.external_list = bq(c), CA = b.external_list)
    };
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

    function TA() {
        clearTimeout(LA)
    }

    function UA() {
        WA()
    }

    function WA() {
        clearTimeout(LA);
        LA = setTimeout(XA, 2E3, !1)
    }

    function XA(a) {
        if (a) ng(MA, "tap-animation"), og(MA, "fadein");
        else {
            og(MA, "tap-animation");
            a = F();
            if (!a) return;
            1 === a.getPlayerState() && og(MA, "fadein")
        }
        clearTimeout(LA)
    }

    function YA(a, b) {
        a ? ng(MA, "tap-animation") : og(MA, "tap-animation");
        ng(MA, "fadein");
        b ? WA() : clearTimeout(LA)
    }

    function VA() {
        YA(!0, !0);
        NA && NA()
    }

    function ZA(a, b) {
        b = void 0 === b ? !1 : b;
        var c = F();
        MA && c && !OA && 1 == c.getPresentingPlayerType() && (mg(MA, "fadein") && !b ? XA(!0) : YA(!0, !0))
    }

    function PA() {
        NA && NA()
    }

    function $A() {
        if (Ae(Q().href, "list")) return !0;
        var a = F();
        if (!a) return !1;
        a = a.getVideoData();
        return !a.isListed || a.ypcPreview || a.isLive ? !0 : !1
    }

    function QA(a) {
        var b = F();
        (b = b && b.isMutedByMutedAutoplay()) ? aB(): OA && 1 === a.detail.state ? (OA = 3 === a.detail.state, NA && NA(), XA(!1)) : (OA = 3 === a.detail.state, 0 === a.detail.state || b ? (uz() && vz(Tz()), aB()) : (st.style.display = "", NA && NA(), OA ? YA(!1, !1) : WA()))
    }

    function SA(a) {
        a.detail.isMutedAutoplay ? aB() : (st.style.display = "", NA && NA())
    }

    function RA(a) {
        1 == a.detail.playertype ? st.style.display = "" : aB()
    }

    function aB() {
        st.style.display = "none"
    }
    var eB = np("ytm-custom-control", function(a, b) {
        function c() {
            I({
                className: "player-controls-content"
            }, function() {
                d();
                e();
                f()
            })
        }

        function d() {
            I({
                className: "player-controls-top"
            }, function() {
                Vp({
                    name: "GEAR",
                    w: KA,
                    className: "player-settings-icon",
                    onclick: function(h) {
                        return Rz(h)
                    }
                })
            })
        }

        function e() {
            I({
                className: "player-controls-middle center"
            }, function() {
                var h = !$A(),
                    l = Wz();
                if ("BUFFERING" == l) I({
                    key: "spinner",
                    className: "spinner"
                });
                else {
                    var n = !CA;
                    h && Vp({
                        name: "PLAYER_PREVIOUS",
                        w: JA,
                        Pd: n,
                        className: n ? "icon-disable" : "",
                        onclick: function() {
                            return bB(n)
                        }
                    });
                    Vp({
                        name: l,
                        w: "PLAYER_PLAY" === l ? IA : HA,
                        className: "player-control-play-pause-icon",
                        onclick: cB
                    });
                    h && Vp({
                        name: "PLAYER_NEXT",
                        onclick: dB,
                        w: GA
                    })
                }
            })
        }

        function f() {
            I({
                className: "player-controls-bottom cbox"
            }, function() {
                uA();
                hA();
                g()
            })
        }

        function g() {
            var h = uz() ? "FULLSCREEN_EXIT" : "FULLSCREEN";
            Vp({
                name: h,
                w: "FULLSCREEN" === h ? FA : EA,
                className: "fullscreen-icon",
                onclick: function() {
                    return vz(Tz())
                }
            })
        }
        NA = b;
        return {
            F: function() {
                if (Sz()) {
                    var h = {
                        tabindex$: "-1",
                        id: so(v("player-control-overlay")),
                        className: A("mweb_enable_custom_control_with_animation") ? "animation-enabled" : "",
                        "aria-label$": "video control overlay",
                        onclick: ZA
                    };
                    I(h, function(l) {
                        c();
                        MA = l
                    })
                }
            }
        }
    });

    function cB(a) {
        var b = F();
        b && (1 == b.getPlayerState() ? (b.pauseVideo(), YA(!0, !1)) : (b.playVideo(), WA()), a.stopPropagation())
    }

    function bB(a) {
        a || (uz() && vz(Tz()), zo(function() {
            F().previousVideo()
        }))
    }

    function dB() {
        uz() && vz(Tz());
        F().nextVideo()
    };

    function fB(a) {
        if (!a) return !0;
        if (a = a.playabilityStatus)
            if ("OK" === a.status || (a = a.errorScreen) && (a.ypcTrailerRenderer || a.playerLegacyDesktopYpcTrailerRenderer)) return !0;
        return !1
    };
    var gB = null,
        hB = null;
    A("mweb_enable_custom_control") && window.addEventListener("player-state-change", iB);
    p("yt.mobile.isMobilePersistentUniplayer", function() {
        return !0
    }, void 0);
    p("yt.mobile.supportsMwebAutonav", function() {
        return !0
    }, void 0);

    function jB(a) {
        var b = a.player,
            c = a && a.response && a.response.webWatchNextResponseExtensionData ? E(function() {
                return a.response.webWatchNextResponseExtensionData.relatedVideoArgs
            }) : null,
            d = a.playerResponse,
            e = "watch" === a.page,
            f = fB(d);
        rt.setAttribute("playable", f);
        rt.hidden = !e;
        A("mweb_enable_custom_control") && (uh(st, eB, null), st.setAttribute("playable", f), e ? st.removeAttribute("hidden") : st.setAttribute("hidden", !0));
        if (b !== gB || c !== hB) gB = b, hB = c, rt.setAttribute("loading", !gB), b = kB(d), window.loadPlayerConfig(gB, hB, a.response, b)
    }

    function kB(a) {
        return a && a.attestation ? E(function() {
            return a.attestation.playerAttestationRenderer.botguardData
        }) : null
    }

    function lB() {
        var a = F();
        a && a.sendAbandonmentPing && a.sendAbandonmentPing()
    }

    function mB() {
        var a = F();
        if (!a) return {};
        var b = a.getCurrentTime();
        a = a.getOption("cc", "track") || a.getOption("captions", "track");
        return {
            minutes: String(Math.floor(b / 60)),
            seconds: String(Math.floor(b) % 60),
            vssId: a && a.vss_id
        }
    }

    function nB() {
        var a = F();
        if (a) a.onAdUxClicked("action-companion")
    }

    function oB() {
        window.addEventListener(Fc ? "touchstart" : "click", function() {
            y("MWEB_SUPPORTS_AUTOPLAY", !1) && (y("MWEB_BLAZERPLAYER", !1) ? im.fillPool(4) : im.activateTags())
        }, {
            capture: !0,
            passive: !0
        });
        window.addEventListener("beforeunload", lB);
        window.addEventListener("state-navigatestart", lB);
        A("mweb_handle_botguard_to_player") && !y("MWEB_BLAZERPLAYER", !1) || window.addEventListener("state-navigatestart", Ro);
        var a = E(function() {
            return rt
        });
        a && a.addEventListener("click", function(b) {
            id(b.target, "a") && b.stopPropagation()
        })
    }

    function iB(a) {
        var b = F();
        b && (1 === a.detail.state && b.loadModule("captions"), 0 === a.detail.state && b.unloadModule("captions"))
    };
    var pB = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });

    function qB(a) {
        var b = D(function() {
            return a.buttonRenderer.navigationEndpoint
        });
        b && Bq(b);
        nB()
    }

    function rB(a) {
        a.iconImage && a.iconImage.thumbnail && vr(a.iconImage.thumbnail, {
            className: "companion-ad-icon"
        });
        I({
            className: "companion-ad-body"
        }, function() {
            I({
                className: "companion-ad-text-container"
            }, function() {
                a.headline && I({
                    className: "companion-ad-headline"
                }, function() {
                    w(a.headline.text || "")
                });
                I({
                    className: "companion-ad-description-container"
                }, function() {
                    Br({
                        className: "companion-ad-badge",
                        "aria-label$": G.eb
                    }, function() {
                        w(G.Aa)
                    });
                    a.description && I({
                        className: "companion-ad-description"
                    }, function() {
                        w(a.description.text || "")
                    })
                })
            });
            a.actionButton && I({
                className: "companion-ad-button",
                onclick: function() {
                    return qB(a.actionButton)
                }
            }, function() {
                pB(a.actionButton)
            })
        })
    };
    var sB = W({
            actionCompanionAdRenderer: function(a, b) {
                a && T(a, "ytm-companion-ad-renderer", b, function(c) {
                    Bo(c, "_seen", !0, function() {
                        a.impressionCommands && a.impressionCommands.forEach(function(d) {
                            Bq(d)
                        })
                    });
                    I({
                        className: "companion-ad-container"
                    }, function() {
                        I({
                            className: "companion-ad-body-container",
                            onclick: function() {
                                var d;
                                if (d = a) a.actionButton || (a.navigationEndpoint ? (Bq(a.navigationEndpoint), S(a.navigationEndpoint, a, !1), nB()) : Lh(Error("Companion navigationEndpoint is missing."))), d = void 0;
                                return d
                            }
                        }, function() {
                            a && rB(a)
                        });
                        pB(a.menu, {
                            className: "companion-ad-menu"
                        })
                    })
                })
            }
        }),
        tB = !1;

    function uB() {
        var a = r("yt.www.ads.eventcache.getLastCompanionData");
        return a && a()
    }

    function vB(a) {
        var b = Ku(Eo, "companionSlotRenderer");
        b && (b.actionCompanionAdRenderer = D(function() {
            return a.detail.actionCompanionAdRenderer
        }), R())
    };
    var wB = W({
        itemSectionRenderer: lx,
        companionSlotRenderer: function(a, b) {
            if (!tB) {
                tB = !0;
                var c = uB();
                c && !u.isEmpty(c) && (a.actionCompanionAdRenderer = c.actionCompanionAdRenderer);
                window.addEventListener("yt-update-c3-companion", vB)
            }
            T(a, "ytm-companion-slot", b, function() {
                sB(a)
            })
        },
        commentSectionRenderer: bx("commentSectionRenderer")
    });
    var xB = W({
        singleColumnWatchNextResults: function(a, b) {
            var c = a.results && a.results.results && a.results.results.contents || [],
                d = a.playlist && a.playlist.playlist;
            T(a, "ytm-single-column-watch-next-results-renderer", b, function() {
                d && a.autoplay && a.autoplay.autoplay && qz({
                    data: d,
                    hb: fz(a.autoplay.autoplay)
                });
                c.forEach(function(e) {
                    var f = e.itemSectionRenderer;
                    wB(e, {
                        className: "scwnr-content",
                        isWatch: !0,
                        "data-content-type$": f && 1 < f.contents.length ? "related" : "result",
                        has_action_companion_ad: b.has_action_companion_ad
                    })
                })
            })
        },
        alertWithButtonRenderer: function(a, b) {
            T(a, "ytm-alert-with-button-renderer", b, function(c) {
                c.setAttribute("data-type", a.type);
                N(D(function() {
                    return a.icon.iconType
                }), {
                    className: "alert-with-button-icon"
                });
                V(a.text);
                I({
                    className: "alert-with-button-button"
                }, function() {
                    Wy(a.button)
                });
                I({
                    className: "alert-with-button-close-icon",
                    onclick: Xy,
                    "aria-label$": Vy
                }, function() {
                    N("DISMISSAL")
                })
            })
        }
    });

    function yB(a) {
        I({
            className: "player-size"
        }, function() {
            if (!fB(a) && a && a.playabilityStatus) {
                var b = E(function() {
                        return a.playabilityStatus.errorScreen.playerErrorMessageRenderer
                    }),
                    c = E(function() {
                        return a.playabilityStatus.reason
                    });
                I({
                    className: "cover center"
                }, function() {
                    a && a.videoDetails && a.videoDetails.thumbnail && Y(a.videoDetails.thumbnail, {
                        className: "cover",
                        alt: ""
                    });
                    b ? dz(b) : c && I({
                        className: "playability-status-message"
                    }, function() {
                        w(c)
                    })
                })
            }
        })
    }

    function zB(a) {
        if (!a) return !1;
        var b = {};
        a = ba(a.adPlacements || []);
        for (var c = a.next(); !c.done; b = {
                cb: b.cb
            }, c = a.next())
            if (b.cb = c.value, E(function(d) {
                    return function() {
                        return d.cb.adPlacementRenderer.renderer.actionCompanionAdRenderer
                    }
                }(b))) return !0;
        return !1
    }

    function AB(a, b) {
        var c = {
            Fa: "/related"
        };
        A("enable_display_on_watch_next_for_mweb") && (c.className = "enable-compact-media-item-menu");
        T(a, "ytm-watch", c, function() {
            yB(b);
            b && b.microformat && b.microformat.playerMicroformatRenderer && ez(b.microformat.playerMicroformatRenderer);
            b && b.playabilityStatus && b.playabilityStatus.messageRenderers && xB(b.playabilityStatus.messageRenderers);
            var d = a.engagementPanels && cb(a.engagementPanels, function(f) {
                return "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" == f.engagementPanelSectionListRenderer.visibility
            });
            d && bz(d);
            var e = zB(b);
            xB(a.contents, {
                hidden: !!d,
                has_action_companion_ad: e
            })
        })
    };
    var BB, CB = null;

    function DB(a) {
        if ("TRIGGER_CONDITION_POST_AD" == a.triggerCondition) {
            var b = F();
            b && (EB(), CB = FB(a, b), Xr("navigate", EB), b.addEventListener("onAdEnd", CB))
        } else GB(a)
    }

    function FB(a, b) {
        function c() {
            b.removeEventListener("onAdEnd", c);
            GB(a);
            CB = null
        }
        return c
    }

    function EB() {
        if (CB) {
            var a = F();
            a && a.removeEventListener("onAdEnd", CB)
        }
    }

    function GB(a) {
        a.Yb && a.Yb();
        a.isCounterfactual || (BB || (BB = document.createElement("div"), BB.id = to(v("mealbar")), document.body.insertBefore(BB, document.body.firstChild), Xr("state-navigatestart", HB)), uh(BB, IB, a))
    }

    function IB(a) {
        T(a, "ytm-mealbar", {
            className: a.className || ""
        }, function() {
            I({
                className: "mealbar-icon-and-text"
            }, function() {
                a.qc ? Y(a.qc, {
                    className: "mealbar-icon",
                    alt: ""
                }) : a.iconImage && N(a.iconImage.iconType, {
                    className: "mealbar-icon"
                });
                I(null, function() {
                    I({
                        className: "mealbar-title typography-title-2"
                    }, function() {
                        a.title && V(a.title)
                    });
                    (a.texts || []).forEach(function(b) {
                        I({
                            className: "mealbar-body typography-body-2a"
                        }, function() {
                            V(b)
                        })
                    })
                });
                a.Qb && a.cc && I({
                    className: "mealbar-dismissal-icon"
                }, function() {
                    return Vp({
                        name: "DISMISSAL",
                        w: a.Qb,
                        onclick: function() {
                            return a.cc()
                        }
                    })
                })
            });
            a.buttons && I({
                className: "mealbar-buttons cbox"
            }, function() {
                a.buttons()
            })
        })
    }

    function HB() {
        BB && (EB(), document.body.removeChild(BB), BB = null)
    };
    var JB = W({
            buttonRenderer: Z
        }),
        KB;

    function LB(a, b) {
        HB();
        "true" == Yc.get("HideTicker", "false") || T(a, "ytm-consent-bump-renderer", b, function() {
            var c = E(function() {
                return a.remindMeLaterButton.buttonRenderer.accessibility.label
            });
            DB({
                iconImage: a.securityIcon,
                title: a.alertMessage,
                Qb: c,
                cc: MB,
                buttons: function() {
                    I({
                        onclick: function() {
                            return NB(a)
                        },
                        className: "consent-bump-button-wrapper"
                    }, function() {
                        JB(a.expressFlowButton)
                    });
                    JB(a.reviewButton)
                }
            })
        })
    }

    function OB(a) {
        KB && uh(KB, function() {
            T(a, "ytm-consent-bump-renderer", {
                className: "dialog-container"
            }, function() {
                I({
                    className: "dialog"
                }, function() {
                    I({
                        className: "dialog-header"
                    }, function() {
                        Y(a.interstitialThumbnail, {
                            className: "consent-bump-lightbox-image",
                            alt: ""
                        }, 452);
                        ap({
                            className: "consent-bump-lightbox-header"
                        }, function() {
                            V(a.interstitialTitle)
                        })
                    });
                    I({
                        className: "dialog-body secondary-text"
                    }, function() {
                        V(a.interstitialMessage)
                    });
                    I({
                        className: "dialog-buttons"
                    }, function() {
                        I({
                            onclick: function() {
                                return NB(a)
                            },
                            className: "consent-bump-button-wrapper"
                        }, function() {
                            JB(a.expressFlowButton)
                        });
                        JB(a.reviewButton)
                    })
                })
            })
        })
    }

    function MB() {
        Uk("HideTicker", "true", 86400);
        R()
    }

    function PB(a, b) {
        if (!ol(a.origin)) return !1;
        switch (a.data) {
            case "cb-express-done":
                return b._isClosed = !0, HB(), KB && (gs(KB), document.body.removeChild(KB), KB = null), b.onExpressFlowSuccess && S(b.onExpressFlowSuccess, b, !0), !0;
            case "cb-ui-navigate":
                var c = E(function() {
                    return b.reviewButton.buttonRenderer.navigationEndpoint.urlEndpoint.url
                });
                c = Ub(Zb(c));
                rc(Q(), c);
                return !0
        }
        return !1
    }

    function NB(a) {
        var b = a.expressFlowUrl;
        if (b && "https" === (ne(b)[1] || null) && "consent.youtube.com" === pe(b) && "/setx" === oe(ne(b)[5] || null)) {
            b = mc(v("Express consent url provided by the server"), b);
            var c = document.createElement("iframe");
            c.hidden = !0;
            document.body.appendChild(c);
            var d = function(e) {
                PB(e, a) && window.removeEventListener("message", d)
            };
            window.addEventListener("message", d);
            pc(c, b)
        } else throw Error("Incorrect express flow url received from server");
    };
    var QB = G.ld;

    function RB() {
        bq() && Yo({
            className: "open-app-button",
            onclick: SB
        }, function() {
            I({
                className: "open-app-button-inner"
            }, function() {
                w(QB)
            })
        })
    }

    function SB() {
        var a = Q(),
            b = Db(rb(v("http://m.youtube.com/watch")));
        var c = {
            v: Ae(location.href, "v"),
            feature: "mweb_c3_open_app",
            itc_campaign: "mweb_c3_open_app",
            redirect_app_store_ios: "1",
            app: "desktop"
        };
        b = yb(b);
        b = Eb.exec(b);
        var d = b[3] || "";
        c = Db(b[1] + Fb("?", b[2] || "", c) + Fb("#", d, void 0));
        c = new Rb(Sb, yb(c));
        rc(a, c)
    };
    var VB = W({
        accountItem: TB,
        accountItemSectionHeaderRenderer: UB
    });

    function UB(a, b) {
        T(a, "ytm-account-item-section-header-renderer", b, function() {
            V(a.title)
        })
    }

    function TB(a, b) {
        T(a, "ytm-account-item-renderer", b, function() {
            Yo({
                className: "account-item-endpoint",
                "aria-label$": Hr(a.accountName),
                "aria-selected$": a.isSelected,
                role$: "option",
                onclick: function() {
                    return WB(a)
                }
            }, function() {
                I({
                    className: "cbox"
                }, function() {
                    a.accountPhoto && vr(a.accountPhoto, {
                        className: "account-item-icon"
                    });
                    I({
                        className: "account-item-content"
                    }, function() {
                        I(null, function() {
                            V(a.accountName)
                        });
                        I({
                            className: "secondary-text small-text"
                        }, function() {
                            V(a.accountByline)
                        })
                    });
                    a.isSelected && N("CHECK_BLUE", {
                        className: "selected-account"
                    })
                })
            })
        })
    }

    function WB(a) {
        var b = D(function() {
                return a.serviceEndpoint.selectActiveIdentityEndpoint.supportedTokens
            }),
            c = D(function() {
                return b.filter(function(d) {
                    return d.accountSigninToken
                })[0].accountSigninToken.signinUrl
            });
        c && Xs(c)
    };
    var XB = W({
        accountItemSectionRenderer: function(a, b) {
            var c = to(v("ytm-account-item-section-renderer"));
            T(a, "ytm-account-item-section-renderer", b, function() {
                VB(a.header, {
                    id: c
                });
                I({
                    className: "contents",
                    role$: "listbox",
                    "aria-labelledby$": c
                }, function() {
                    VB(a.contents)
                })
            })
        }
    });
    var YB = W({
        lugashFooterRenderer: Mr
    });

    function ZB() {
        var a = {
                productId: "77522",
                locale: y("HTML_LANG", "en"),
                allowNonLoggedInFeedback: !0,
                bucket: "C3",
                callback: $B
            },
            b = {
                experiments: aC(),
                logged_in: eq(),
                Device: cc
            };
        ms().then(function() {
            gq("feedback");
            window.addEventListener("hashchange", bC);
            Gh(a, b)
        })
    }

    function aC() {
        return E(function() {
            return Eo.response.response.responseContext.serviceTrackingParams.filter(function(a) {
                return "GFEEDBACK" === a.service
            })[0].params.filter(function(a) {
                return "e" === a.key
            })[0].value
        })
    }

    function $B() {
        window.removeEventListener("hashchange", bC);
        cC()
    }

    function cC() {
        Yr.then(function() {
            "#feedback" === Q().hash && $r();
            return Yr
        })
    }

    function bC(a) {
        "#feedback" === (new URL(a.oldURL)).hash && "#feedback" !== Q().hash && (a = window.GOOGLE_FEEDBACK_DESTROY_FUNCTION) && a()
    };
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

    function pC() {
        switch (Q().pathname) {
            case "/feed/trending":
                return "yt_trending_web";
            case "/feed/subscriptions":
                return "yt_subscriptions_mweb";
            case "/feed/account":
                return "yt_account_mweb";
            case "/":
                return "yt_home_mweb";
            default:
                return "yt_mobile_mweb"
        }
    }

    function qC(a, b, c, d, e) {
        return b ? {
            text: a,
            href: c,
            onclick: d,
            iconType: e
        } : null
    }

    function rC() {
        var a = (fc("Chrome") || fc("CriOS")) && !fc("Edge") && Fc;
        a = bq() && !y("MWEB_BLAZERPLAYER", void 0) && !a;
        return [qC(eC, !0, "/select_site", null, "SETTINGS"), qC(fC, a, null, function(b) {
                b.stopPropagation();
                Rz(b)
            }, "INFO_OUTLINE"),
            qC(gC, !A("enable_mega_header_footer_for_main"), "/terms", null, "PRIVACY_INFO"), qC(oC, A("mweb_show_your_data_in_yt_link"), "//myaccount.google.com/yourdata/youtube", null, "SHIELD_WITH_AVATAR"), qC(hC, !0, null, ZB, "FEEDBACK"), qC(iC, !0, we("//support.google.com/youtube/", {
                src: "web",
                p: pC(),
                hl: y("HTML_LANG", "en")
            }), null, "HELP"), qC(jC, !A("redirect_classic_to_mweb_v2"), we("//www.youtube.com" + Q().pathname + Q().search, {
                app: "desktop",
                persist_app: "1"
            }), null, "DESKTOP"), qC(kC, !!y("SHOW_IMPRESSUM"), "https://www.youtube.com/t/impressum?hl=de&gl=DE",
                null, "OPEN_IN_NEW"), qC(lC, !!y("SHOW_NETZDG_TRANSPARENZBERICHT"), "https://transparencyreport.google.com/netzdg/youtube", null, "OPEN_IN_NEW"), qC(mC, !!y("SHOW_NETZDG_LOGGED_OUT_REPORT_FORM_LINK"), "https://support.google.com/youtube/contact/netzdg", null, "OPEN_IN_NEW"), qC(nC, !1, null, So, "EXIT_TO_APP")
        ].filter(function(b) {
            return b
        })
    }

    function sC() {
        eq() || Vr(dq(), function() {
            return w(dC)
        })
    }

    function tC() {
        rC().forEach(function(a) {
            a.href ? Vr(a.href, function() {
                return w(a.text)
            }) : a.onclick && Ur(a.onclick, function() {
                return w(a.text)
            })
        })
    }

    function uC() {
        rC().forEach(function(a) {
            a.href ? Tr(a.href, {
                className: "multi-page-menu-system-link"
            }, function() {
                N(a.iconType);
                w(a.text)
            }) : a.onclick && Yo({
                onclick: a.onclick,
                className: "multi-page-menu-system-link"
            }, function() {
                N(a.iconType);
                w(a.text)
            })
        })
    };
    var vC = G.ja,
        yC = W({
            accountSectionListRenderer: function(a, b) {
                T(a, "ytm-account-section-list-renderer", b, function() {
                    XB(a.contents)
                })
            },
            activeAccountHeaderRenderer: Lr,
            compactLinkRenderer: bu,
            multiPageMenuSectionRenderer: wC,
            privacyTosFooterRenderer: function(a) {
                T(a, "ytm-privacy-tos-footer-renderer", null, function() {
                    I({
                        className: "privacy-tos-footer-container"
                    }, function() {
                        a.privacyCommand && U(a.privacyCommand, {
                            className: "privacy-tos-footer-privacy subhead"
                        }, function() {
                            V(a.privacyTitle)
                        });
                        a.tosCommand && U(a.tosCommand, {
                            className: "privacy-tos-footer-tos subhead"
                        }, function() {
                            V(a.tosTitle)
                        })
                    });
                    YB(a.footer)
                })
            },
            simpleMenuHeaderRenderer: xC
        });

    function xC(a, b) {
        T(a, "ytm-simple-menu-header-renderer", b, function() {
            var c = so(v("simple-menu-header-close-button")),
                d = so(v("simple-menu-header-title"));
            Vp({
                id: c,
                name: "DISMISSAL",
                w: vC,
                Fb: d + " " + c,
                onclick: ms
            });
            $o({
                id: d,
                className: "ytm-simple-menu-header-title"
            }, function() {
                return V(a.title)
            })
        })
    }

    function wC(a, b) {
        T(a, "ytm-multi-page-menu-section-renderer", b, function() {
            yC(a.items)
        })
    }

    function zC(a) {
        return !!D(function() {
            return a.sections[0].accountSectionListRenderer
        })
    }

    function AC(a) {
        var b = {};
        qs({
            content: function() {
                b = b ? b : {};
                b["data-has-footer$"] = !!a.footer;
                T(a, "ytm-multi-page-menu-renderer", b, function() {
                    I(null, function() {
                        yC(a.title);
                        yC(a.header);
                        yC(a.sections);
                        zC(a) || I({
                            className: "multi-page-menu-system-link-list"
                        }, function() {
                            uC()
                        });
                        yC(a.footer)
                    })
                })
            },
            Vd: !0,
            Ka: !0,
            Ja: !0,
            R: G.P
        })
    };
    var BC = B("CREATE_CHANNEL_TITLE");

    function CC(a, b) {
        if ("search" == a) return hq() || "";
        if ("watch" == a && b) {
            var c = Ku(b, "slimVideoMetadataRenderer");
            if (c && c.title) return Hr(c.title)
        }
        if ("select_site" == a) return Hr(b.title) || "YouTube";
        if (b && b.channelCreation) return BC;
        c = b && b.header;
        if (!c) return "";
        var d = c.feedTabbedHeaderRenderer;
        return d && d.title ? Hr(d.title) : (d = c.c4TabbedHeaderRenderer) && d.title ? d.title : (c = c.playlistHeaderRenderer) && c.title ? Hr(c.title) : ""
    };
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

    function MC() {
        $r()
    }

    function NC() {
        "#filters" == Q().hash ? $r() : gq("filters")
    }

    function OC(a) {
        zo(function() {
            pt.content = getComputedStyle(a).backgroundColor
        })
    }

    function KC(a, b) {
        T(a, "ytm-topbar-menu-button-renderer", b, function() {
            Vp({
                onclick: function() {
                    return PC(a)
                },
                w: IC,
                className: "topbar-menu-button-avatar-button",
                content: function() {
                    a.avatar ? vr(a.avatar, {
                        className: "topbar-menu-button-avatar"
                    }) : N(D(function() {
                        return a.icon.iconType
                    }))
                }
            })
        })
    }

    function PC(a) {
        var b = D(function() {
            return a.menuRenderer.multiPageMenuRenderer
        });
        b && AC(b)
    }

    function QC(a, b, c, d) {
        b = b || {};
        var e = so(v("header-bar")),
            f = "#searching" == Q().hash,
            g = "#voice_searching" == Q().hash,
            h = f || g ? "searching" : a,
            l = "searching" === h,
            n = !(!d && !Go),
            q = n || "watch" == a,
            t = l ? md : null,
            x = l || "select_site" === h,
            z = !x;
        d = {
            id: e,
            className: ""
        };
        y("MWEB_STICKY_PLAYER", !1) && (d.className += "sticky-player");
        T(b, "ytm-mobile-topbar-renderer", d, function() {
            l && hs(EC, $r, {
                ub: !0
            });
            dp({
                className: "mobile-topbar-header cbox",
                key: "header",
                "data-mode$": h,
                ontouchmove: t
            }, function(O) {
                Bo(O, "mode", h, function() {
                    return OC(O)
                });
                if (x) Yo({
                    className: "mobile-topbar-back-arrow",
                    "aria-label$": l ? EC : FC,
                    onclick: l ? MC : function() {
                        return Xs("/")
                    }
                }, function() {
                    N("ARROW_BACK")
                });
                else {
                    var X = q ? "RINGO_LOGO" : "LOGO",
                        da = "mobile-topbar-logo";
                    q && (da += " ringo-logo");
                    RC(function() {
                        return N(X, {
                            className: da,
                            id$: "home-icon"
                        })
                    })
                }
                ct({
                    mc: f,
                    Ee: g
                }, {
                    className: "mobile-topbar-header-content search-mode"
                });
                I({
                    className: "mobile-topbar-header-content non-search-mode cbox"
                }, function() {
                    SC(c, q);
                    z && (Vs && RB(), TC() && Vp({
                        name: "SEARCH",
                        w: HC,
                        className: "topbar-menu-button-avatar-button",
                        onclick: iq
                    }), UC(b, n), "watch" == a && !eq() && Ws && I({
                        className: "mobile-topbar-header-sign-in-button"
                    }, function() {
                        Z({
                            style: "STYLE_BLUE_TEXT_WITH_INVERSE_THEME",
                            isDisabled: !1,
                            icon: {
                                iconType: "AVATAR_LOGGED_OUT"
                            },
                            text: Ir(DC),
                            navigationEndpoint: Ly()
                        }, {
                            className: "",
                            V: VC
                        })
                    }))
                })
            })
        })
    }

    function TC() {
        var a = aq(),
            b = A("mweb_remove_search_icon_in_header");
        return "search" === a ? !1 : "watch" === a && b ? !(0 < zi("mweb_add_search_to_pivot_bar") && A("mweb_add_guide_pivot_bar_to_watch")) : !b
    }

    function UC(a, b) {
        bq() ? WC("MORE_VERT_WHITE") : b ? a.buttons ? LC(a.buttons) : WC() : WC("MORE_VERT")
    }

    function SC(a, b) {
        document.title = a + ("YouTube" == a ? "" : " - YouTube");
        b || ("search" === aq() ? XC(a) : YC(a))
    }

    function XC(a) {
        I({
            className: "search-bar"
        }, function() {
            Yo({
                className: "title search-bar-text",
                "aria-label$": a,
                onclick: iq
            }, function() {
                w(a)
            });
            Vp({
                name: "TUNE",
                w: JC,
                Qd: "#filters" == Q().hash,
                onclick: NC,
                className: "search-filter-icon topbar-menu-button-avatar-button"
            })
        })
    }

    function RC(a) {
        Yo({
            "aria-label$": GC,
            role$: "link",
            className: "mobile-topbar-header-endpoint ",
            onclick: function(b) {
                Xs("/", void 0, void 0, void 0, 3854, b.currentTarget)
            }
        }, a)
    }

    function YC(a) {
        $o({
            className: "title mobile-topbar-title",
            "aria-label$": a
        }, function() {
            w(a)
        })
    }

    function WC(a) {
        rs({
            icon: void 0 === a ? "ACCOUNT_CIRCLE" : a,
            label: IC,
            content: function() {
                sC();
                tC()
            },
            R: G.P
        })
    }

    function VC() {
        Ol("/gen_204?action=sign_in_from_mweb_header")
    };
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

    function ZC(a, b) {
        T(a, "ytm-pivot-bar-item-renderer", b, function() {
            dD(a, b.selectedTabIdentifier)
        })
    }

    function eD(a) {
        [aD, bD, cD].forEach(function(b) {
            dD(b, a, !0)
        })
    }

    function dD(a, b, c) {
        var d = "pivot-bar-item-tab";
        (void 0 === c ? 0 : c) && (d += " pivot-bar-fallback-item");
        a.pivotIdentifier && a.pivotIdentifier === (b || Go) && !Ae(Q().href, "bp") ? Yo({
            role$: "tab",
            "aria-selected$": "true",
            className: d,
            onclick: Co
        }, function() {
            return fD(a)
        }) : (b = a.title.runs ? a.title.runs[0].text : a.title.simpleText, 0 < zi("mweb_add_search_to_pivot_bar") ? Hq({
            ab: !0
        }, a.navigationEndpoint, {
            ariaLabel: b,
            role$: "tab",
            className: d,
            onclick: function() {
                Go = a.pivotIdentifier
            },
            "force-new-state$": !0
        }, function() {
            return fD(a)
        }) : U(a.navigationEndpoint, {
            role$: "tab",
            className: d,
            onclick: function() {
                Go = a.pivotIdentifier
            },
            "force-new-state$": !0
        }, function() {
            return fD(a)
        }))
    }

    function fD(a) {
        N(E(function() {
            return a.icon.iconType
        }));
        I({
            className: "pivot-bar-item-title"
        }, function() {
            V(a.title)
        })
    }

    function gD(a, b) {
        a = a || {};
        T(a, "ytm-pivot-bar-renderer", {
            role$: "tablist",
            className: ""
        }, function() {
            a.items ? $C(a.items, {
                selectedTabIdentifier: b
            }) : eD(b)
        });
        Go = ""
    };
    var hD = W({
        buttonRenderer: Z
    });
    var iD;

    function jD(a) {
        a.isVisible = !1;
        F() && bq() && F().playVideo();
        iD && (gs(iD), document.body.removeChild(iD), iD = null)
    }

    function kD(a) {
        (a.impressionEndpoints || []).forEach(function(b) {
            S(b, a, !0)
        })
    };

    function lD() {
        var a;
        if (a = !bq() || A("mweb_add_guide_pivot_bar_to_watch")) a = !Gb(Zp(Q().href), "/select_site");
        return a
    }

    function mD(a) {
        var b = D(function() {
            return a.contents.singleColumnBrowseResultsRenderer.tabs
        });
        if (!b) return null;
        b = (b = Ju(b, "selected", !0)) && b.tabIdentifier;
        if (!b) return null;
        var c = D(function() {
            return Fo.items.filter(function(d) {
                return d.pivotBarRenderer
            })[0].pivotBarRenderer
        });
        return c ? c.items.map(function(d) {
            return D(function() {
                return d.pivotBarItemRenderer.pivotIdentifier
            })
        }).includes(b) ? b : null : null
    };
    var nD = G.Jc,
        oD = G.Pc,
        pD = G.jd,
        qD = {},
        rD = (qD.MEMBERSHIPS_AND_PURCHASES = "memberships-and-purchases", qD),
        sD = W({
            alertRenderer: function(a, b) {
                T(a, "ytm-alert-renderer", b, function() {
                    V(a.text)
                })
            },
            consentBumpRenderer: function(a, b) {
                a._isClosed || (a.forceConsent ? document.querySelector(".consent-bump-lightbox") || (KB = document.createElement("div"), KB.className = "consent-bump-lightbox", document.body.appendChild(KB), fs(KB), OB(a), KB.querySelector(".consent-bump-lightbox-header").focus()) : LB(a, b))
            },
            mealbarPromoRenderer: bx("mealbarPromoRenderer", {
                S: !1
            }),
            surveyTriggerRenderer: bx("surveyTriggerRenderer", {
                S: !1
            }),
            unlimitedUserNotificationRenderer: function(a, b) {
                T(a, "ytm-unlimited-user-notification-renderer", b, function() {
                    I({
                        className: "unlimited-user-notification-infobox"
                    }, function() {
                        ap({
                            className: "unlimited-user-notification-title"
                        }, function() {
                            V(a.title)
                        });
                        a.messages.forEach(function(c) {
                            ip({
                                className: "unlimited-user-notification-message"
                            }, function() {
                                V(c)
                            })
                        })
                    });
                    I({
                        className: "unlimited-user-notification-action-button-container"
                    }, function() {
                        hD(a.actionButton)
                    })
                })
            },
            upsellDialogRenderer: function(a) {
                if (a.isVisible && !document.querySelector(".upsell-dialog-lightbox")) {
                    iD = document.createElement("div");
                    iD.className = "upsell-dialog-lightbox";
                    document.body.appendChild(iD);
                    fs(iD);
                    F() && F().pauseVideo();
                    var b = to(v("upsell-dialog-header"));
                    uh(iD, function() {
                        T(a, "ytm-upsell-dialog-renderer", {
                            className: "dialog-container"
                        }, function(c) {
                            Bo(c, "_impressionData", a, function() {
                                return kD(a)
                            });
                            I({
                                "aria-labelledby$": b,
                                "aria-modal$": !0,
                                className: "dialog",
                                role$: "dialog",
                                tabindex$: "-1"
                            }, function() {
                                I({
                                    id: b,
                                    className: "dialog-header"
                                }, function(d) {
                                    d = er(a.headerBackgroundImage, d);
                                    I({
                                        className: "upsell-dialog-header-background",
                                        style$: "background-image: url(" + d + ");"
                                    })
                                });
                                I({
                                    className: "dialog-body"
                                }, function() {
                                    a.dialogMessageTitle && ap({
                                        className: "upsell-dialog-title-text typography-display-2"
                                    }, function() {
                                        V(a.dialogMessageTitle)
                                    });
                                    a.dialogMessageText && I({
                                        className: "upsell-dialog-body-text typography-body-2a"
                                    }, function() {
                                        V(a.dialogMessageText)
                                    })
                                });
                                I({
                                    className: "dialog-buttons"
                                }, function() {
                                    (a.actionButton || a.dismissButton) && I({
                                        className: "upsell-dialog-buttons"
                                    }, function() {
                                        a.actionButton && a.actionButton.buttonRenderer && Z(a.actionButton.buttonRenderer, {
                                            className: "upsell-dialog-action-button",
                                            V: function() {
                                                "UPSELL_DIALOG_DISMISS_STRATEGY_ONLY_DISMISS_BUTTON_TAP" !== a.dismissStrategy && jD(a)
                                            },
                                            va: !0
                                        });
                                        a.dismissButton && a.dismissButton.buttonRenderer && Z(a.dismissButton.buttonRenderer, {
                                            className: "upsell-dialog-dismiss-button",
                                            V: function() {
                                                "UPSELL_DIALOG_DISMISS_STRATEGY_ONLY_ACTION_BUTTON_TAP" !== a.dismissStrategy && jD(a)
                                            },
                                            va: !0
                                        })
                                    })
                                })
                            });
                            (c = c.querySelector(".dialog")) && c.focus()
                        })
                    })
                }
            }
        });

    function tD(a) {
        var b = a.page,
            c = a.response,
            d = c.responseContext;
        d = d && d.errors ? d.errors : [];
        var e = c.alerts || [];
        uD(c, b);
        sD(e);
        A("enable_memberships_and_purchases") && vD(c);
        wD(b, c, a.playerResponse);
        xD(d);
        sD(c.survey);
        b = c.overlay ? c.overlay : a.playerResponse && a.playerResponse.auxiliaryUi && a.playerResponse.auxiliaryUi.messageRenderers ? a.playerResponse.auxiliaryUi.messageRenderers : a.playerResponse && a.playerResponse.messages && a.playerResponse.messages.length ? a.playerResponse.messages[0] : void 0;
        sD(b);
        I({
            key: "spinner",
            className: "spinner",
            hidden: !a.loading
        })
    }

    function uD(a, b) {
        var c = Fo,
            d = c && c.items ? E(function() {
                return c.items.filter(function(h) {
                    return h.pivotBarRenderer
                })[0].pivotBarRenderer
            }) : null,
            e = c && c.items ? E(function() {
                return c.items.filter(function(h) {
                    return h.mobileTopbarRenderer
                })[0].mobileTopbarRenderer
            }) : null,
            f = mD(a),
            g = CC(b, a);
        QC(b, e, g, f);
        lD() && gD(d, f)
    }

    function vD(a) {
        Object.keys(rD).forEach(function(c) {
            og(document.documentElement, rD[c])
        });
        var b = "UNSPECIFIED";
        a.responseContext && a.responseContext.webResponseContextExtensionData && a.responseContext.webResponseContextExtensionData.pageTheme && (b = a.responseContext.webResponseContextExtensionData.pageTheme);
        switch (b) {
            case "MEMBERSHIPS_AND_PURCHASES":
                ng(document.documentElement, rD.MEMBERSHIPS_AND_PURCHASES)
        }
    }

    function wD(a, b, c) {
        yD("browse" === a, function() {
            return Fx(b)
        });
        yD("watch" === a, function() {
            return AB(b, c)
        });
        yD("search" === a, function() {
            return cy(b)
        });
        yD("experiments" === a, function() {
            return Lx(b, {})
        });
        yD("select_site" === a, function() {
            return Gy(b)
        });
        yD("sponsorship" === a, function() {
            return Jy(b)
        });
        yD("join_family" === a, function() {
            return ay(b)
        });
        yD("oops" === a || "404" === a || "terms" == a, function() {
            return Uy(a)
        })
    }

    function yD(a, b) {
        I({
            hidden: !a,
            className: "page-container"
        }, function() {
            Uo(a, function() {
                return b()
            })
        })
    }

    function xD(a) {
        a instanceof Array || (a = [oD], navigator.onLine || (N("OFFLINE_CLOUD", {
            className: "content-error-icon"
        }), I({
            className: "content-error-title"
        }, function() {
            w(nD)
        }), a = [pD]));
        a.forEach(function(b) {
            I({
                className: "content-error"
            }, function() {
                w(b)
            })
        })
    };
    var zD = {},
        AD = (zD.browse = "browse", zD.search = "results", zD.watch = "watch", zD.home = "home", zD.channel = "channels", zD);

    function BD(a, b) {
        this.i = a;
        this.j = b
    }
    BD.prototype.g = function() {
        jn(this.i, this.j)
    };

    function CD(a, b) {
        this.i = a;
        this.j = b
    }
    CD.prototype.g = function() {
        mn(this.i, this.j)
    };

    function DD(a) {
        this.i = a
    }
    DD.prototype.g = function() {
        var a = aq(this.i),
            b = AD[a],
            c = bq(this.i) ? ["pbs"] : ["cpt"];
        a = bq(this.i) ? ["vpl", "pbs"] : ["vpl"];
        Ih("TIMING_AFT_KEYS", c);
        Ih("TIMING_ACTION", b);
        b = y("TIMING_INFO", {});
        for (var d in b) mn(d, b[d]);
        mn("is_nav", 1);
        (d = kl()) && mn("csn", d);
        (d = y("PREVIOUS_ACTION", void 0)) && mn("pa", d);
        b = Om();
        b.p = y("CLIENT_PROTOCOL") || "unknown";
        b.t = y("CLIENT_TRANSPORT") || "unknown";
        mn("yt_vis", pn());
        if ("cold" == b.yt_lt) {
            d = Cm.timing || {};
            d.navigationStart && (jn("srt", d.responseStart), 1 != b.prerender && ln(d.navigationStart));
            b = Dm(d);
            0 < b && jn("fpt", b);
            jn("nreqs", d.requestStart, void 0);
            jn("nress", d.responseStart, void 0);
            jn("nrese", d.responseEnd, void 0);
            0 < d.redirectEnd - d.redirectStart && (jn("nrs", d.redirectStart, void 0), jn("nre", d.redirectEnd, void 0));
            0 < d.domainLookupEnd - d.domainLookupStart && (jn("ndnss", d.domainLookupStart, void 0), jn("ndnse", d.domainLookupEnd, void 0));
            0 < d.connectEnd - d.connectStart && (jn("ntcps", d.connectStart, void 0), jn("ntcpe", d.connectEnd, void 0));
            d.secureConnectionStart >= d.navigationStart && 0 < d.connectEnd -
                d.secureConnectionStart && (jn("nstcps", d.secureConnectionStart, void 0), jn("ntcpe", d.connectEnd, void 0));
            Cm.getEntriesByType && sn();
            d = [];
            if (document.querySelector && Cm && Cm.getEntriesByName)
                for (var e in gn) b = gn[e], tn(e, b) && d.push(b);
            d.length && mn("rc", d.join(","))
        }
        an(void 0) && (e = {
            actionType: Vm[y("TIMING_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN"
        }, d = Tm(void 0), El(e, d));
        e = Om();
        b = Nm();
        if ("cold" === e.yt_lt && (d = cn(), c = d.gelTicks ? d.gelTicks : d.gelTicks = {}, d = d.gelInfos ? d.gelInfos : d.gelInfos = {}, an())) {
            for (var f in b) Gb(f,
                "_") || "tick_" + f in c || bn(f, b[f]);
            f = en();
            b = Tm();
            c = {};
            for (var g in e)
                if (!("info_" + g in d)) {
                    var h = dn(g, e[g]);
                    h && (Tl(f, h), Tl(c, h))
                }
            El(c, b)
        }
        Pm(!0);
        if (a)
            for (g = 0; g < a.length; g++) f = a[g], e = y("TIMING_WAIT"), e && f in e || ((e = y("TIMING_WAIT", void 0)) ? e.push(f) : Ih("TIMING_WAIT", [f]));
        kn();
        mn("pis", window.pis)
    };

    function ED(a, b) {
        this.i = a;
        this.j = b
    }
    ED.prototype.g = function() {
        qn("n");
        Sm(void 0);
        rn();
        Lm(!1, void 0);
        y("TIMING_ACTION") && Ih("PREVIOUS_ACTION", y("TIMING_ACTION"));
        Ih("TIMING_ACTION", "");
        Pm(!1);
        Ih("TIMING_AFT_KEYS", []);
        mn("yt_lt", "warm");
        Ih("TIMING_ACTION", "");
        Ih("TIMING_WAIT", []);
        Fm();
        ln();
        FD.push(new DD(this.i));
        ln(this.j)
    };
    var FD = new kq;

    function GD(a, b) {
        FD.push(new CD(a, b))
    };

    function HD(a) {
        return (D(function() {
            return a.responseContext.serviceTrackingParams
        }) || []).filter(function(b) {
            return "CSI" == b.service
        }).map(function(b) {
            return b.params
        }).reduce(function(b, c) {
            return b.concat(c)
        }, []).reduce(function(b, c) {
            b[c.key] = c.value;
            return b
        }, Object.create(null))
    };

    function ID(a) {
        function b() {
            var d = 4 === a.readyState,
                e = a.responseText;
            if (d && 200 != a.status) {
                var f = new Lu;
                f.responseText = e;
                Pu(c, f)
            } else Ou(c, {
                done: d,
                value: e
            });
            d && a.removeEventListener("readystatechange", b)
        }
        var c = new Mu;
        4 === a.readyState ? b() : a.addEventListener("readystatechange", b);
        return new Su(c)
    }

    function JD(a) {
        return new Pd(function(b, c) {
            Uu(ID(a), function(d) {
                d.done && b(d.value)
            }, function(d) {
                c(d)
            })
        })
    };

    function KD() {
        var a = 0,
            b = {};
        return function(c) {
            var d = c.done,
                e = c.value;
            c = e.timingInfo;
            e = e.response;
            if (Gb(e, "[") || d) {
                e = e.split("\r\n").filter(function(g) {
                    return 1 < g.length
                }).slice(a).map(function(g) {
                    return Hb(g, ",") || Hb(g, "]") ? g.slice(0, -1) : g
                }).map(function(g) {
                    try {
                        return JSON.parse(g)
                    } catch (h) {}
                });
                var f = e[e.length - 1] ? e.length : e.length - 1;
                if (!(0 >= f) || d) return a += f, b = Object.assign.apply(Object, [{}, b].concat(ea(e))), {
                    done: d,
                    value: {
                        timingInfo: c,
                        response: b
                    }
                }
            }
        }
    };

    function Wu(a, b, c) {
        b = void 0 === b ? Ao : b;
        if (A("mweb_tmpdata")) {
            var d = we(a, {
                pbj: 1
            });
            ml(a, b || {}, 8, A("mweb_set_csn"))
        } else d = Object.assign({
            pbj: 1
        }, b), d = we(a, d);
        a = KD();
        (c = fj(d, {
            withCredentials: !0,
            headers: {
                "x-youtube-sts": "18177",
                "x-spf-referer": c
            },
            format: "RAW"
        })) ? c = Uu(Uu(ID(c), LD(c)), a): (c = new Mu, Pu(c, new Lu), c = new Su(c));
        return c
    }

    function LD(a) {
        var b = [];
        return function(c) {
            var d = c.done;
            c = c.value;
            var e = d ? a.getResponseHeader("content-length") : "",
                f = d ? a.getResponseHeader("content-encoding") : "";
            b.push(lk());
            return {
                done: d,
                value: {
                    timingInfo: {
                        chunks: b,
                        contentLength: e,
                        Td: f
                    },
                    response: c
                }
            }
        }
    };
    var MD = 0;

    function ND(a, b) {
        b = void 0 === b ? lk() : b;
        Do(function() {
            var c = b;
            c = void 0 === c ? lk() : c;
            FD.push(new BD(a, c))
        })
    }

    function OD(a) {
        var b = a.detail.href;
        Do(function() {
            GD("yt_lt", "cold");
            FD.push(new DD(b))
        })
    }

    function PD() {
        Do(function() {
            GD("prt", 1)
        })
    }

    function QD(a) {
        a = a.detail;
        var b = a.href,
            c = a.wb,
            d = lk();
        Do(function() {
            FD.push(new ED(b, d));
            var e = c && "1" == c.autonav,
                f = Ae(Q().href, "list");
            e && GD("nr", "an");
            f && GD("yt_pl", 1)
        });
        MD++
    }

    function RD(a) {
        if (a.timingInfo) {
            var b = a.timingInfo.contentLength,
                c = a.timingInfo.Td;
            ND("srt", a.timingInfo.chunks[0]);
            Do(function() {
                GD("rcl", b);
                GD("rce", c)
            })
        }
    }

    function SD(a) {
        Do(function() {
            var b = D(function() {
                    return a.timing.info
                }),
                c;
            for (c in b) GD(c, b[c])
        })
    }

    function TD(a) {
        a = a.detail.data;
        var b = Eo;
        a.he || a.response.player && !b.response.player && ND("cfg")
    }

    function UD() {
        var a = window.innerHeight - ((document.body || document.documentElement).scrollTop || window.pageYOffset || 0);
        return [].concat(ea(document.querySelectorAll("img"))).filter(function(b) {
            b = b.getBoundingClientRect();
            return 0 < b.height && b.top < a
        })
    }

    function VD(a) {
        a = a.getBoundingClientRect();
        return 50 < a.height && 50 < a.width
    }

    function WD() {
        var a = UD().filter(VD),
            b = MD;
        iw(a).then(function() {
            b == MD && ND("vpl")
        })
    }

    function XD(a) {
        a = a.detail.data;
        RD(a);
        SD(a.response);
        ND("pdr");
        zo(WD)
    }

    function YD(a) {
        a = HD(a);
        for (var b in a) GD(b, a[b])
    }

    function ZD(a) {
        var b = a.detail.data;
        ND("cpt");
        Do(function() {
            YD(b.response.response);
            YD(b.response.playerResponse)
        })
    };
    var $D = ["redirect_state", "service", "channel_switcher"];

    function aE() {
        var a = void 0 === a ? !1 : a;
        var b = bE();
        Object.keys(b).forEach(function(c) {
            -1 === $D.indexOf(c) && delete b[c]
        });
        cE(b, a)
    }

    function bE() {
        var a = Q().hash.substring(1).split("&").filter(Boolean),
            b = {};
        if (!a.length) return b;
        a.forEach(function(c) {
            c = c.split(/=(.+)/);
            b[c[0]] = 1 < c.length ? c[1] : ""
        });
        return b
    }

    function cE(a, b) {
        var c = Object.keys(a).map(function(d) {
            return a[d] ? d + "=" + a[d] : d
        }).join("&");
        c = c ? "#" + c : "";
        b ? sc(Q(), c) : Q().hash = c
    };

    function dE(a) {
        return D(function() {
            return a.response.preconnect
        })
    }

    function eE(a) {
        a = dE(a.detail.data);
        !dE(Eo) && a && a.forEach(po)
    };

    function fE(a, b) {
        b = void 0 === b ? {} : b;
        return {
            loading: !0,
            response: {
                page: cq(a) || "",
                response: {
                    contents: b,
                    responseContext: {}
                },
                loading: !0
            }
        }
    };

    function gE(a) {
        var b = "home" === aq(a);
        if (b || Gb(Zp(a ? a : Q().href), "/feed/trending")) {
            var c = !!y("IS_TABLET", !1);
            if (c && b) {
                b = [];
                for (c = 0; 3 > c; c++) b.push({
                    compactVideoRenderer: {}
                });
                b = {
                    itemSectionRenderer: {
                        contents: [{
                            shelfRenderer: {
                                content: {
                                    verticalListRenderer: {
                                        items: b
                                    }
                                }
                            }
                        }]
                    }
                };
                c = [];
                for (var d = 0; 4 > d; d++) c.push(b);
                b = c
            } else {
                b = c ? 6 : 4;
                c = [];
                for (d = 0; d < b; d++) c.push({
                    itemSectionRenderer: {
                        contents: [{
                            videoWithContextRenderer: {}
                        }]
                    }
                });
                b = c
            }
            return {
                replace: !0,
                data: fE(a, {
                    singleColumnBrowseResultsRenderer: {
                        tabs: [{
                            tabRenderer: {
                                selected: !0,
                                content: {
                                    sectionListRenderer: {
                                        contents: b
                                    }
                                }
                            }
                        }]
                    }
                })
            }
        }
    };

    function hE(a, b, c) {
        if ("experiments" === Zp(a).split("/")[1] && "experiments" == Zp(b).split("/")[1] && c) return {
            replace: !1,
            data: c
        }
    };

    function iE(a) {
        return {
            replace: !1,
            data: fE(a)
        }
    };

    function jE(a, b, c) {
        var d = aq(b),
            e = aq(a);
        b = Ae(b, "list");
        a = Ae(a, "list");
        if (b && b == a && d == e) return {
            replace: !1,
            data: {
                response: Object.assign({}, c.response, {
                    player: null
                })
            }
        }
    };

    function kE(a) {
        if ("search" === aq(a)) {
            var b = y("IS_TABLET", !1) ? 10 : 7;
            for (var c = [], d = 0; d < b; d++) c.push({
                compactVideoRenderer: {}
            });
            return {
                replace: !0,
                data: fE(a, {
                    sectionListRenderer: {
                        contents: [{
                            itemSectionRenderer: {
                                contents: c
                            }
                        }]
                    }
                })
            }
        }
    };

    function lE(a, b, c, d) {
        if (bq(a) && d && (b = xq(d))) return {
            replace: !1,
            data: fE(a, {
                singleColumnWatchNextResults: {
                    results: {
                        results: {
                            contents: [{
                                companionSlotRenderer: {
                                    hack: !0
                                },
                                itemSectionRenderer: {
                                    contents: [{
                                        slimVideoMetadataRenderer: {
                                            _isPlaceholderData: !0,
                                            title: b.title || b.headline
                                        }
                                    }]
                                }
                            }]
                        }
                    }
                }
            })
        }
    };

    function mE(a, b, c, d) {
        return [gE, jE, kE, lE, hE, iE].reduce(function(e, f) {
            return e || f(a, b, c, d)
        }, null)
    };
    var nE = !1,
        oE = 0,
        pE = Ec && Dc;

    function qE(a) {
        a.detail.isCurrentlyFullscreen ? $r() : gq("fauxfullscreen")
    }

    function rE() {
        var a = Q().hash;
        !nE && "#fauxfullscreen" !== a || nE && "#fauxfullscreen" === a || "#menu" === a || "#dialog" === a || (pE && sE(), setTimeout(function() {
            var b = !nE,
                c = F();
            document.body.setAttribute("faux-fullscreen", b);
            c.setSize(NaN, NaN);
            c.setFauxFullscreen(b);
            b ? window.addEventListener("touchmove", tE, {
                passive: !1
            }) : window.removeEventListener("touchmove", tE);
            nE = b
        }, 200))
    }

    function sE() {
        var a = !nE;
        a && 100 > window.scrollY ? (oE = window.scrollY, window.scrollTo(0, 100)) : !a && 100 < window.scrollY && window.scrollTo(0, oE)
    }

    function tE(a) {
        a.preventDefault()
    };
    var uE = 1;

    function vE(a) {
        a && a.detail && a.detail.Eb && !a.detail.Eb.playnext && (uE = 1)
    };
    var wE;

    function xE() {
        return wE && wE.contents && wE.contents.singleColumnWatchNextResults && wE.contents.singleColumnWatchNextResults.autoplay ? E(function() {
            return wE.contents.singleColumnWatchNextResults.autoplay.autoplay
        }) : null
    }

    function yE() {
        var a = xE();
        return a && a.sets ? E(function() {
            return a.sets[0].autoplayVideo
        }) : null
    }

    function zE() {
        var a = xE();
        return a && a.sets ? E(function() {
            return a.sets[0].mode
        }) : null
    }

    function AE() {
        if (A("decorate_autoplay_renderer_mweb")) return uE++;
        var a = xE();
        return a && a.sets ? E(function() {
            return a.webAutoplayRendererData.autoplayCount
        }) : null
    }

    function BE(a) {
        0 === a.detail.state && a && a.target && CE(a.target)
    }

    function CE(a) {
        if (a && (!a.isMutedByMutedAutoplay || !a.isMutedByMutedAutoplay()) && Ae(Q().href, "list")) {
            var b = yE();
            if (b) {
                var c = AE();
                if (a = sq(b)) {
                    var d = b.clickTrackingParams;
                    b = b.watchEndpoint.params;
                    var e = zE();
                    d = {
                        itct: d,
                        mode: e,
                        params: b
                    };
                    c = A("mweb_auto_lact") ? {
                        autonav: !0,
                        playnext: c,
                        lact: sk()
                    } : {
                        autonav: !0,
                        playnext: c
                    };
                    Xs(a, d, c)
                }
            }
        }
    }

    function DE() {
        y("MWEB_BLAZERPLAYER", !1) ? window.addEventListener("playback-end", function(a) {
            CE(a.target)
        }) : window.addEventListener("player-state-change", BE)
    };

    function EE(a) {
        a = Zp(a).split("/")[1];
        var b = A("enable_c3_premium");
        return !{
            "": !0,
            channel: !0,
            create_channel: A("mweb_c3_create_channel"),
            experiments: !0,
            feed: !0,
            gaming: !0,
            join_family: A("enable_c3_join_family"),
            musicpremium: b,
            oops: !0,
            paid_memberships: b,
            playlist: !0,
            premium: b,
            red: b,
            results: !0,
            select_site: !0,
            show: !0,
            sponsorship: !0,
            terms: !0,
            user: !0,
            watch: !0
        }[a]
    };

    function FE(a) {
        return a.filter(function(b) {
            return "SEE_OTHER" == b.code
        }).map(function(b) {
            return b.argument
        })[0]
    }

    function GE(a) {
        a.detail && a.detail.data && a.detail.data.response && zo(function() {
            var b = a.detail.data.response;
            if (Gb(location.pathname, "/channel") && b && b.response && b.response.responseContext && (b = b.response.responseContext) && b.errors)
                if (b = b.errors, b.error && b.error instanceof Array && (b = b.error), Ia(b)) {
                    if (b = FE(b)) switch (b[0]) {
                        case "REDIRECT_TO_VIDEO":
                            Xs("/watch?v=" + b[1]);
                            break;
                        case "REDIRECT_TO_URL":
                            Xs(String(b[1]));
                            break;
                        default:
                            Xs("/channel/" + b[0])
                    }
                } else Mh(Error("errors is not an array"))
        })
    };

    function HE(a, b) {
        a.video_masthead_ad_quartile_urls = {
            quartile_0_url: D(function() {
                return b.startUrls[0]
            }),
            quartile_25_url: D(function() {
                return b.firstQuartileUrls[0]
            }),
            quartile_50_url: D(function() {
                return b.secondQuartileUrls[0]
            }),
            quartile_75_url: D(function() {
                return b.thirdQuartileUrls[0]
            }),
            quartile_100_url: D(function() {
                return b.completeUrls[0]
            })
        }
    }

    function IE(a, b) {
        a.pyv_billable_url = D(function() {
            return b.pyvBillingUrl
        });
        a.pyv_conv_url = D(function() {
            return b.pyvConversionUrl
        })
    }

    function JE(a, b) {
        var c = D(function() {
                return a.player.args
            }),
            d = D(function() {
                return b.c3PlaybackTracking
            });
        c && d && (c.adformat || (c.adformat = b._adformat), c.el = b._el, HE(c, d), IE(c, d))
    };

    function KE(a) {
        var b = D(function() {
            return a.player.assets
        });
        b && (b.js = y("PLAYER_JS_URL") || b.js, b.css = y("PLAYER_CSS_URL") || b.css)
    };
    var LE = W({
        buttonRenderer: Z,
        toggleButtonRenderer: ir
    });

    function ME(a, b) {
        T(a, "ytm-notification-action-renderer", b, function() {
            I({
                className: "notification-action-response-text"
            }, function() {
                V(a.responseText)
            });
            a.actionButton && (I({
                className: "notification-action-button",
                role$: "button",
                tabIndex: "0"
            }, function() {
                LE(a.actionButton)
            }), zo(function() {
                var c = document.querySelector(".notification-action-button");
                c && c.focus()
            }))
        })
    };
    var NE = W({
        notificationActionRenderer: ME
    });

    function OE() {
        window.addEventListener("yt-show-toast", function(a) {
            var b = a.detail;
            b && aw(function() {
                if (b.notificationActionRenderer) NE(b);
                else if (b.toastMessage && b.toastActionMessage) {
                    var c = b.toastActionUrl;
                    NE({
                        notificationActionRenderer: {
                            responseText: Ir(b.toastMessage),
                            actionButton: {
                                buttonRenderer: {
                                    style: "STYLE_BLUE_TEXT",
                                    size: "SIZE_DEFAULT",
                                    isDisabled: !1,
                                    text: Ir(b.toastActionMessage),
                                    navigationEndpoint: {
                                        urlEndpoint: {
                                            url: c
                                        },
                                        commandMetadata: {
                                            webCommandMetadata: {
                                                url: c
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                }
            })
        })
    };
    var PE, QE;

    function RE() {
        var a = D(function() {
            return F().getPlayerState()
        });
        return -1 == a || 1 == a || 3 == a
    }

    function SE(a, b) {
        if (RE()) {
            for (var c = ba(a.showWarningActions || []), d = c.next(); !d.done; d = c.next()) oq(d.value, {
                B: {},
                A: {}
            });
            Jl("YOU_THERE_EVENT_TYPE_PROMPT_SHOWN", b);
            QE = setTimeout(function() {
                if (RE()) {
                    for (var e = ba(a.showPausedActions || []), f = e.next(); !f.done; f = e.next()) oq(f.value, {
                        B: {},
                        A: {}
                    });
                    Jl("YOU_THERE_EVENT_TYPE_PLAYBACK_PAUSED", b)
                }
            }, a.playbackPauseDelayMs)
        }
    }

    function TE() {
        PE && (clearTimeout(PE), PE = 0);
        QE && (clearTimeout(QE), QE = 0)
    }

    function UE() {
        var a = Eo;
        if (a && a.response && a.response.playerResponse && a.response.playerResponse.messages && (a = a.response.playerResponse.messages.filter(function(e) {
                return e.youThereRenderer
            })) && a.length) var b = a[0].youThereRenderer;
        if (b && (TE(), b.configData && b.configData.youThereData)) {
            var c = kl(),
                d = b.configData.youThereData;
            PE = setTimeout(function() {
                return SE(d, c)
            }, 1E3 * Math.max(1, d.promptDelaySec))
        }
    }

    function VE() {
        if (PE || QE) TE(), Jl("YOU_THERE_EVENT_TYPE_LACT_RESET", kl()), xl()
    };

    function WE(a) {
        var b = 0;
        return function(c, d, e, f) {
            b++;
            var g = b;
            return Uu(a(c, d, e, f), function(h) {
                if (g === b) return h
            })
        }
    };

    function XE(a) {
        function b(n) {
            n = void 0 === n ? a.kb() : n;
            a.Be(n);
            a.yc(n)
        }

        function c(n, q, t, x, z, O, X) {
            z = void 0 === z ? !0 : z;
            O = void 0 === O ? !1 : O;
            if (a.oe(n)) setTimeout(function() {
                a.ce(n, q)
            });
            else {
                fq("state-navigatestart", {
                    href: n,
                    wb: t
                });
                var da = Object.assign({}, q, t);
                t = z ? location.href : zA();
                var P = x && x._data ? x._data : null;
                Uu(l(n, da, x, t), function(ca) {
                    if (ca.done) {
                        if (A("c3_client_side_screens"))
                            if (P) {
                                var xa = lo(),
                                    Sc = [Ud(ca)],
                                    Tc = u.Ta.apply(u, [P].concat(ea(io)));
                                if (Tc) {
                                    var Yl;
                                    P.clickTrackingParams && (Yl = wk(P.clickTrackingParams));
                                    Sc ? no(xa, Tc, Sc, Yl) : oo(xa, Tc, Yl)
                                } else xa = Error("Error: Trying to create a new screen without a rootVeType"), xa.params = P, Lh(xa)
                            } else X && X.Ya && X.parentVe && (xa = lo(), oo(xa, X.Ya,
                                X.parentVe));
                        d(n, ca.value, q, da)
                    } else xa = ca.value, fq("state-progress", {
                        data: xa
                    }), b(xa);
                    return ca
                });
                x = a.ae(n, location.href, a.kb(), x);
                O || !x.replace && n !== location.href && !location.hash ? f(n, x.data, q) : g(n, x.data, q);
                x.fg || window.scrollTo(0, 0)
            }
        }

        function d(n, q, t, x) {
            fq("state-progress", {
                data: q
            });
            fq("state-responsereceived", {
                href: n,
                data: q
            });
            Ad(function() {
                var z = a.be(q);
                var O = n;
                z && O === Q().href ? (A("mweb_tmpdata") || (z = Ce(z, "lact"), O = Ce(we(O, x || {}), "lact")), z = qe(z) !== qe(O) ? z : null) : z = null;
                z ? g(z, q, t) : e(q);
                fq("state-navigateend", {
                    href: n,
                    data: q,
                    Eb: x
                })
            })
        }

        function e(n) {
            b(n);
            h = Q().pathname + Q().search;
            fq("state-change")
        }

        function f(n, q, t) {
            BA({
                replace: !1,
                href: n,
                params: t,
                hc: location.href
            });
            e(q)
        }

        function g(n, q, t) {
            BA({
                replace: !0,
                href: n,
                params: t,
                hc: zA()
            });
            e(q)
        }
        var h, l = WE(a.makeRequest);
        window.addEventListener("popstate", function() {
            h !== Q().pathname + Q().search && (c(location.href, AA() || {}, {}, null, !1), h = Q().pathname + Q().search)
        });
        window.addEventListener("hashchange", function() {
            b()
        });
        return {
            navigate: c,
            zc: e,
            g: g,
            fe: d
        }
    };

    function YE() {
        function a(f, g, h, l, n, q) {
            setTimeout(function() {
                Yr.then(function() {
                    d.navigate(f, g, h, l, void 0, n, q);
                    e = !0
                })
            })
        }

        function b(f, g, h, l) {
            "_blank" !== l && !c.Zd || !1 === c.Ce ? setTimeout(function() {
                Yr.then(function() {
                    rc(Q(), f)
                })
            }) : tc(f)
        }
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
        window.addEventListener("click", function(f) {
            var g = id(f.target, "A"),
                h = g && g.href;
            if (h) {
                f.preventDefault();
                var l = g.params;
                f = g.getAttribute("force-new-state");
                l = l || {};
                var n = {},
                    q = g.target;
                q || $p(h) != Q().hostname ? b(h, l, g, q) : a(h, l, n, g, !!f, void 0)
            }
        });
        window.addEventListener("navigate", function(f) {
            var g = f.detail;
            f = g.href;
            var h = g.params,
                l = g.wb,
                n = g.target,
                q = g.Ya;
            g = g.element;
            var t, x = h ? h.itct : null;
            x ? t = wk(x) : g ? t = Il(Hl.K(), g) : t = null;
            h = h || {};
            l = l || {};
            t = {
                Ya: q,
                parentVe: t
            };
            n || $p(f) != Q().hostname ? b(f, h, null, n) : a(f, h, l, null, void 0, t)
        });
        window.addEventListener("updateui", function() {
            c.yc(c.kb())
        });
        return {
            qe: function(f, g) {
                e || (fq("initialdata", {
                    href: f
                }), d.fe(f, g))
            },
            zc: d.zc
        }
    };

    function dF(a) {
        var b = E(function() {
            return a.detail.data.response.response.responseContext
        });
        if (b) {
            var c = b.webResponseContextExtensionData && b.webResponseContextExtensionData.ytConfigData || {};
            b = c.csn;
            c = c.rootVisualElementType;
            b && c && (ll(b, c), A("mweb_stt_logging") && op.clear())
        }
    };
    var cF = !Bc,
        eF = !1;

    function aF(a) {
        a.response && (jB(a.response), wE = a.response.response, a.response.loading || ND("ips"), uh(qt, tD, a.response), a.response.loading || ND("ipc"), document.body.setAttribute("has-pivot-bar", lD()), document.body.setAttribute("has-safe-area-in-max", Fc), document.body.setAttribute("has-player-custom-control", A("mweb_enable_custom_control")))
    }

    function bF(a) {
        if (a && a.response) return a.response.url
    }

    function fF(a) {
        return {
            page: Eo.response && Eo.response.page ? Eo.response.page : cq(Q().href),
            response: {
                response: {
                    responseContext: {
                        errors: a
                    }
                }
            }
        }
    }

    function ZE(a, b) {
        var c = Object.assign({
            disable_polymer: "true"
        }, b);
        rc(Q(), we(a, c))
    }

    function $E(a, b, c, d) {
        var e = {};
        eF && !bq(a) && (eF = !1, e = {
            wlfg: !0
        });
        b = Object.assign(A("mweb_auto_lact") ? {} : {
            lact: sk()
        }, b, e);
        var f = c ? xq(c) || {} : {};
        return Uu(Wu(a, b, d), function(g) {
            var h = g.done,
                l = g.value;
            g = l.timingInfo;
            l = l.response;
            if (l.reload) Q().reload();
            else if (l.redirect) rc(window.location, l.redirect);
            else return DA(l), KE(l), JE(l, f), l = h ? l : Object.assign({}, Eo.response, l), {
                done: h,
                value: {
                    timingInfo: g,
                    response: l
                }
            }
        }, function(g) {
            .01 > Math.random() && Lh(g);
            return {
                done: !0,
                value: fF(g)
            }
        })
    }

    function gF() {
        A("mweb_h2_push_selectively") && Uk("H2_SERVER_PUSH", Ss, 7889238, "youtube.com", !0);
        Zk || (ok(), fl("FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"), Th(Ra(fl, "FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"), 3E4), $k.push(kk(document, "visibilitychange", el)), Zk = !0);
        gl(y("EVENT_ID", void 0))
    };

    function hF(a) {
        return Ku(a.B, "commentSectionRenderer")
    }

    function iF(a) {
        return a.toggleMenuServiceItemRenderer
    }

    function jF(a) {
        return E(function() {
            return a.comment.commentRenderer.commentId
        })
    }

    function kF(a, b) {
        return cb(b, function(c) {
            return (c = c.commentThreadRenderer) ? jF(c) === a : !1
        }).commentThreadRenderer
    }

    function lF(a, b) {
        var c = kF(a, b);
        return E(function() {
            return c.comment.commentRenderer
        })
    }

    function mF(a, b, c) {
        var d = kF(a, c);
        a = E(function() {
            return d.replies.commentRepliesRenderer.contents
        });
        var e = cb(a, function(f) {
            return f.commentRenderer.commentId === b
        });
        return E(function() {
            return e.commentRenderer
        })
    }

    function nF(a) {
        fb(a, function(b) {
            var c = b.commentThreadRenderer;
            return E(function() {
                return c.comment.commentRenderer.pinnedCommentBadge
            })
        })
    }

    function oF(a, b) {
        fb(b, function(c) {
            return (c = c.commentThreadRenderer) ? jF(c) === a : !1
        })
    }

    function pF(a, b, c) {
        var d = kF(b, c);
        b = E(function() {
            return d.replies.commentRepliesRenderer.contents
        }) || [];
        fb(b, function(e) {
            return e.commentRenderer.commentId === a
        })
    }

    function qF(a, b) {
        var c = hF(a);
        c = c && c.items ? c.items : [];
        var d = b && b.actionResult && b.actionResult.update ? b.actionResult.update : null,
            e = null;
        d && (e = (e = d.commentThreadRenderer) ? jF(e) : null);
        return {
            Mb: c,
            update: d,
            commentId: e
        }
    }

    function rF(a, b) {
        var c = hF(b).items || [],
            d = a.parentCommentId,
            e = a.commentId;
        e && (d ? pF(e, d, c) : oF(e, c), R())
    }

    function sF(a, b) {
        var c = hF(b).items || [],
            d = a.parentCommentId,
            e = a.commentId;
        if (e) {
            var f = "FEEDBACK_HEART" === a.actionResult.feedback;
            c = d ? mF(d, e, c) : lF(e, c);
            c.creatorHeart.creatorHeartRenderer.isHearted = f;
            Iu(c.actionMenu.menuRenderer.items || [], b.A, iF).isToggled = f;
            R()
        }
    };

    function tF(a, b) {
        var c = Iu(b.B, b.A, uF);
        Iu(b.B, b.A, vF).studies.forEach(function(d) {
            d.experimentsStudyRenderer.items.forEach(function(e) {
                e.experimentsStudyItemRenderer.optInButton && (e.experimentsStudyItemRenderer.optInButton.toggleButtonRenderer.isToggled = !1)
            })
        });
        c.isToggled = !c.isToggled;
        aw(function() {
            V(a.text)
        }, 1E3, !1)
    }

    function uF(a) {
        return a.toggleButtonRenderer
    }

    function vF(a) {
        return a.experimentsGroupRenderer
    };

    function wF(a) {
        var b = D(function() {
            return a.dialog.fancyDismissibleDialogRenderer.dialogMessage
        });
        b && xF(b)
    }

    function xF(a) {
        a.runs && a.runs.forEach(function(b) {
            b.navigationEndpoint && yF(b.navigationEndpoint)
        })
    }

    function yF(a) {
        if (!a.commandMetadata) {
            var b = a.urlEndpoint && a.urlEndpoint.url ? a.urlEndpoint.url : a.browseEndpoint && a.browseEndpoint.canonicalBaseUrl ? a.browseEndpoint.canonicalBaseUrl : null;
            b && (a.commandMetadata = {
                webCommandMetadata: {
                    url: b
                }
            })
        }
    };

    function zF(a) {
        if (a.endpoint) {
            yF(a.endpoint);
            var b = sq(a.endpoint);
            b && Xs(b, {
                itct: a.endpoint.clickTrackingParams
            })
        }
    };
    var AF = W({
        textInputFormFieldRenderer: function(a, b) {
            T(a, "ytm-text-input-form-field-renderer", b, function() {
                var c = to(v("input"));
                a.label && gp({
                    htmlFor: c.toString()
                }, function() {
                    V(a.label)
                });
                fp({
                    dir$: void 0 !== a.value && 0 < a.value.length ? "auto" : void 0,
                    id: c,
                    maxlength$: a.maxCharacterLimit,
                    placeholder: a.placeholderText || "",
                    required: b && void 0 !== b.required ? b.required : !0,
                    value$: a.value,
                    onfocus: b && b.onfocus,
                    onblur: b && b.onblur
                })
            })
        }
    });

    function BF(a) {
        return -1 == a.indexOf("<") && -1 == a.indexOf(">")
    }
    var CF = np("ytm-input-with-counter", function(a, b) {
        var c = 0,
            d = !1;
        return {
            F: function(e) {
                var f = e.data,
                    g = e.value,
                    h = e.tb,
                    l = e.error,
                    n = e.className;
                e = e.required;
                if (f) {
                    0 === c && (c = void 0 !== f.textInputFormFieldRenderer.maxCharacterLimit ? f.textInputFormFieldRenderer.maxCharacterLimit : 0);
                    var q = (null === g ? f.textInputFormFieldRenderer.value.length : g.length) + "/" + c;
                    AF(f, {
                        oninput: function(t) {
                            h(t.target.value)
                        },
                        onfocus: function() {
                            d = !0;
                            b()
                        },
                        onblur: function() {
                            d = !1;
                            b()
                        },
                        className: n,
                        required: e
                    });
                    I({
                        className: "error-and-count"
                    }, function() {
                        l && l();
                        J({
                            className: "char-count" + (d ? " show-count" : "")
                        }, function() {
                            w(q)
                        })
                    })
                }
            }
        }
    });
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

    function LF(a) {
        IF = a;
        GF = a.trim().length ? BF(a) ? "" : G.Ab : G.Bb;
        KF = !!GF;
        EF && EF();
        FF && FF()
    }
    var MF = np("ytm-create-playlist-content-component", function(a, b) {
            EF = b;
            return {
                F: function(c) {
                    CF({
                        data: c.nameInput,
                        value: IF,
                        tb: LF
                    });
                    DF(c.privacyInput, {
                        className: "add-to-playlist-privacy-input",
                        onchange: function(d) {
                            JF = d.target.value
                        }
                    });
                    (GF || HF) && I({
                        className: "add-to-playlist-errors"
                    }, function() {
                        w(GF || HF)
                    })
                }
            }
        }),
        NF = np("ytm-create-playlist-buttons-component", function(a, b) {
            FF = b;
            return {
                F: function(c) {
                    c.createAction.buttonRenderer.isDisabled = KF;
                    Aq({
                        onclick: mw
                    }, null, function() {
                        w(G.P)
                    });
                    DF(c.createAction)
                }
            }
        });

    function OF(a) {
        FF = EF = void 0;
        HF = GF = "";
        JF = IF = null;
        KF = !0;
        sw({
            xa: !0,
            header: function() {
                ap({
                    className: "add-to-playlist-create-header"
                }, function() {
                    w(G.dd)
                })
            },
            content: function() {
                MF(a)
            },
            buttons: function() {
                NF(a)
            },
            data: a
        })
    };
    var PF = W({
        addToPlaylistCreateRenderer: function(a, b) {
            a.createAction.buttonRenderer.serviceEndpoint = a.serviceEndpoint;
            T(a, "ytm-add-to-playlist-create-renderer", b, function() {
                DF(a.openCreateLink, {
                    className: "add-to-playlist-create-link secondary-text",
                    onclick: function() {
                        return OF(a)
                    }
                })
            })
        },
        playlistAddToOptionRenderer: function(a, b) {
            T(a, "ytm-playlist-add-to-option-renderer", b, function() {
                I({
                    className: "playlist-add-to-option secondary-text",
                    onclick: function() {
                        mw();
                        a.addToPlaylistServiceEndpoint && S(a.addToPlaylistServiceEndpoint, a, !0)
                    }
                }, function() {
                    I({
                        className: "playlist-add-to-option-label"
                    }, function() {
                        I({
                            className: "playlist-add-to-option-title"
                        }, function() {
                            V(a.title)
                        });
                        a.shortBylineText && I({
                            className: "playlist-add-to-option-byline"
                        }, function() {
                            V(a.shortBylineText)
                        })
                    });
                    N(a.privacyIcon.iconType, {
                        className: "playlist-add-to-option-icon"
                    })
                })
            })
        }
    });

    function QF(a) {
        sw({
            header: function() {
                ap(null, function() {
                    V(a.title)
                })
            },
            content: function() {
                I({
                    className: "fancy-dismissable-dialog-content"
                }, function() {
                    V(a.dialogMessage)
                })
            },
            buttons: function() {
                fr(null, a.confirmLabel, null, null, null, Fa)
            },
            data: a
        })
    };

    function RF(a, b) {
        var c = b.Xb,
            d = b.minutes,
            e = b.seconds,
            f = b.Zb,
            g = b.nc;
        H("ytm-timestamp-input", a, function() {
            V(c);
            I({
                className: "ytm-timestamp-input"
            }, function() {
                fp({
                    className: "timestamp-input-minutes timestamp-number-input",
                    min: 0,
                    max: 999,
                    oninput: function(h) {
                        return f(h.target.value)
                    },
                    type: "number",
                    value: d
                });
                I({
                    className: "timestamp-input-separator"
                }, function() {
                    w(" : ")
                });
                fp({
                    className: "timestamp-input-seconds timestamp-number-input",
                    min: 0,
                    max: 59,
                    oninput: function(h) {
                        return g(h.target.value)
                    },
                    type: "number",
                    value: e
                })
            })
        })
    };
    var SF = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    function TF(a) {
        var b = !a.timestampLabel || !(!a._minutes || !a._seconds),
            c = a.submitButton.buttonRenderer.isDisabled;
        a.submitButton.buttonRenderer.isDisabled = !a._flag_description || !a._flag_affiliation || !a._flag_issue_type || !b;
        a.submitButton.buttonRenderer.isDisabled != c && R()
    }

    function UF(a) {
        if (void 0 == a._minutes && void 0 == a._seconds) {
            var b = mB(),
                c = b.seconds;
            a._minutes = b.minutes;
            a._seconds = c
        }
    };
    var VF = W({
        addToPlaylistRenderer: function(a) {
            sw({
                header: function() {
                    ap({
                        className: "add-to-playlist-title"
                    }, function() {
                        w(G.Cc)
                    })
                },
                content: function() {
                    PF(a.playlists, {
                        className: "add-to-playlist-option"
                    });
                    PF(a.actions)
                },
                buttons: function() {
                    I({
                        className: "add-to-playlist-button-wrapper"
                    }, function() {
                        Aq({
                            className: "add-to-playlist-button"
                        }, null, function() {
                            w(G.P)
                        })
                    })
                },
                data: a
            })
        },
        confirmDialogRenderer: fy,
        fancyDismissibleDialogRenderer: QF,
        legalReportDetailsFormRenderer: function(a) {
            a.timestampLabel && UF(a);
            a._flag_description = a._flag_description || "";
            a._flag_issue_type = a._flag_issue_type || "";
            sw({
                header: function() {
                    ap(null, function() {
                        V(a.title)
                    })
                },
                content: function() {
                    a.timestampLabel && RF(a, {
                        Xb: a.timestampLabel,
                        minutes: a._minutes,
                        seconds: a._seconds,
                        Zb: function(b) {
                            a._minutes != b && (a._minutes = b, TF(a))
                        },
                        nc: function(b) {
                            a._seconds != b && (a._seconds = b, TF(a))
                        }
                    });
                    lp({
                        className: "legal-report-details-form-description-input",
                        maxlength: 500,
                        rows: 4,
                        required: !0,
                        placeholder: Hr(a.descriptionHint),
                        oninput: function(b) {
                            b = b.target.value;
                            a._flag_description != b && (a._flag_description = b, TF(a))
                        }
                    }, function() {
                        a._flag_description && w(a._flag_description)
                    });
                    SF(a.issueTypeDropdown, {
                        className: "legal-report-details-form-issue-type",
                        Vb: !0,
                        onchange: function(b) {
                            b = b.target.value;
                            a._flag_issue_type != b && (a._flag_issue_type = b, TF(a))
                        }
                    });
                    SF(a.affiliationDropdown, {
                        className: "legal-report-details-form-affiliation",
                        Vb: !0,
                        onchange: function(b) {
                            b = b.target.value;
                            a._flag_affiliation != b && (a._flag_affiliation = b, TF(a))
                        }
                    });
                    fp({
                        className: "legal-report-details-form-name-input",
                        maxlength: 250,
                        placeholder: Hr(a.nameHint),
                        oninput: function(b) {
                            a._flag_full_name = b.target.value
                        }
                    });
                    I({
                        className: "legal-report-details-form-name-subtext"
                    }, function() {
                        V(a.nameSubtext)
                    });
                    I({
                        className: "legal-report-details-form-footer-text"
                    }, function() {
                        V(a.footerText)
                    })
                },
                buttons: function() {
                    I({
                        className: "legal-report-details-form-footer"
                    }, function() {
                        V(a.requiredLabel);
                        I({
                            className: "legal-report-details-form-buttons"
                        }, function() {
                            SF(a.cancelButton);
                            SF(a.submitButton)
                        })
                    })
                },
                data: a
            })
        },
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

    function WF(a) {
        a = a.openPopupAction || a;
        var b = a.popupType,
            c = a.popup;
        Eo.response.popup = c;
        switch (b) {
            case "TOAST":
                aw(function() {
                    VF(c)
                }, a.durationHintMs, a.reusePopup);
                break;
            case "DIALOG":
            case "SURVEY":
                VF(c);
                break;
            default:
                throw Error("Unhandled popup type: " + b);
        }
    };

    function XF(a) {
        return a.playlistVideoListRenderer
    };
    var YF = ["compactVideoRenderer", "searchHistoryQueryRenderer", "shelfRenderer", "videoWithContextRenderer"],
        ZF = W({
            notificationTextRenderer: function(a, b) {
                T(a, "ytm-notification-text-renderer", b, function() {
                    J({
                        "aria-live$": "polite"
                    }, function() {
                        V(a.successResponseText)
                    })
                })
            }
        });

    function $F(a) {
        return YF.reduce(function(b, c) {
            return b || a[c]
        }, void 0)
    };

    function aG(a) {
        return a.sectionListRenderer
    };
    var bG = W({
        confirmDialogRenderer: fy
    });

    function cG(a) {
        if (a = Iu(a.B, a.A, dG)) {
            var b = a.optionsSupportedRenderers.optionsRenderer;
            b._selectedDialog ? (Ku(b._selectedDialog, "flagEndpoint").legalCheckboxChecked = a._legalCheckboxChecked, bG(b._selectedDialog)) : b._selectedNavigationValue ? S(b._selectedNavigationValue, a, !0) : b._selectedValue && (b._selectedValue.flagEndpoint.legalCheckboxChecked = a._legalCheckboxChecked, S(b._selectedValue, a, !0))
        }
    }

    function dG(a) {
        return a.reportFormModalRenderer
    };

    function eG(a) {
        return a.commentRenderer
    }

    function fG(a) {
        return a.toggleMenuServiceItemRenderer
    };

    function gG(a, b) {
        var c = a.accountLinkCommand || a,
            d = Zd(),
            e = y("ACCOUNT_LINKING_JS_URL", void 0),
            f = bE().redirect_state,
            g = bE().service,
            h = c && !c.thirdPartyId;
        window.accountLinking ? d.resolve() : e && fi(e, function() {
            d.resolve()
        });
        d.g.then(function() {
            h ? f && g && hG(g, b) : window.accountLinking.connectServiceWithRedirect(c.thirdPartyId, Q().href.split("#")[0]).then(function() {}, function() {
                c.onFailureCommand && S(c.onFailureCommand, {
                    jg: f,
                    serviceId: g
                }, !0)
            })
        })
    }

    function hG(a, b) {
        var c = b.A,
            d = iG(c.defaultServiceEndpoint || c.linkCommand, a);
        d && !window.accountLinking.ob && (hs("close", function() {}, {
            S: !0
        }), window.accountLinking.ob = !0, window.accountLinking.connectServiceWithRedirect(a).then(function() {
            js();
            window.accountLinking.ob = !1;
            S(d.onSuccessCommand, b, !0);
            jG(a)
        }, function() {
            js();
            window.accountLinking.ob = !1;
            sc(window.location, "#");
            Ad(function() {
                S(d.onFailureCommand, b, !0)
            })
        }))
    }

    function iG(a, b) {
        if (!a) return null;
        var c = Object.keys(a).find(function(e) {
                return e.endsWith("Command")
            }),
            d = Eu(Eu(a[c]));
        return "gamingMultipleAccountLinkDialogCommand" === c && d ? (c = d.thirdParties.find(function(e) {
            return e.gamingThirdPartyRenderer.thirdPartyId === b
        }).gamingThirdPartyRenderer.command, iG(c, b)) : d.thirdPartyId === b ? d : null
    }

    function jG(a) {
        var b = document.querySelector("ytm-settings");
        if (b = b && b.data.items.find(function(c) {
                return !!c.settingCategoryCollectionRenderer && "SETTING_CAT_GAMING_THIRD_PARTY" === c.settingCategoryCollectionRenderer.categoryId
            }))
            if (b = b.settingCategoryCollectionRenderer.items.find(function(c) {
                    return E(function() {
                        return c.gamingThirdPartySettingRenderer.linkCommand.gamingAccountLinkSettingCommand.gamingAccountLinkSetting.gamingAccountLinkSettingRenderer.thirdPartyId
                    }) === a
                })) b.gamingThirdPartySettingRenderer.linked = !0, R()
    };

    function kG(a) {
        var b = Zd(),
            c = y("ACCOUNT_LINKING_JS_URL", void 0),
            d = a.accountUnlinkCommand || a;
        window.accountLinking ? b.resolve() : c && fi(c, function() {
            b.resolve()
        });
        b.g.then(function() {
            window.accountLinking.disconnectService(d.thirdPartyId).then(function() {
                d.onSuccessCommand && S(d.onSuccessCommand, a, !0);
                lG(d.thirdPartyId)
            }, function() {
                d.onFailureCommand && S(d.onFailureCommand, a, !0)
            })
        })
    }

    function lG(a) {
        var b = Array.from(document.querySelectorAll("ytm-gaming-third-party-setting-renderer")).find(function(c) {
            return E(function() {
                return c.data.linkCommand.gamingAccountLinkSettingCommand.gamingAccountLinkSetting.gamingAccountLinkSettingRenderer.thirdPartyId
            }) === a
        });
        b && (b.data.linked = !1, R())
    };

    function mG(a, b) {
        for (var c = ba((a.commandExecutorCommand || a).commands), d = c.next(); !d.done; d = c.next()) d = d.value, tq(d).length ? S(d, b, !0) : oq(d, b)
    };
    var nG = W({
        confirmDialogRenderer: fy
    });

    function oG(a) {
        nG((a.confirmDialogEndpoint || a).content)
    };

    function pG(a) {
        var b = sq(a);
        b && Xs(b, {
            itct: a.clickTrackingParams
        })
    };

    function qG(a) {
        var b = Object.keys(a).filter(function(c) {
            return Hb(c, "Endpoint")
        })[0];
        a = Object.keys(a).filter(function(c) {
            return Hb(c, "Command")
        })[0];
        return b || a
    }

    function rG(a, b) {
        b = void 0 === b ? Ao : b;
        var c = {
            sej: JSON.stringify(a)
        };
        c = Object.assign(c, b);
        var d = qG(a);
        d = xe("/service_ajax", "name", d);
        return (c = fj(d, {
            method: "POST",
            Z: c,
            format: "RAW"
        })) ? JD(c).then(function(e) {
            return JSON.parse(e)
        }, function(e) {
            e.responseText && (e.response = JSON.parse(e.responseText));
            throw e;
        }) : Vd(Error("XHR failed to initialize."))
    };

    function sG() {
        var a = document.querySelector("ytm-slim-video-metadata-renderer"),
            b = a && a.data && a.data.buttons;
        if (a && b) return b.find(function(c) {
            return (c = c.slimMetadataToggleButtonRenderer && c.slimMetadataToggleButtonRenderer.button && c.slimMetadataToggleButtonRenderer.button.toggleButtonRenderer) ? "TOGGLE_BUTTON_ID_TYPE_ACCOUNT_LINKING" === (c.toggleButtonSupportedData && c.toggleButtonSupportedData.toggleButtonIdData && c.toggleButtonSupportedData.toggleButtonIdData.id) : !1
        })
    };
    var tG = W({
        fancyDismissibleDialogRenderer: QF
    });
    var uG = B("NOTIFICATION_ERROR_MESSAGE");

    function vG(a, b) {
        return Iu(b.B, a, function(c) {
            return c.channelCreationForm
        }).contents.createCoreIdentityChannelContentRenderer
    };

    function wG(a, b, c) {
        var d = ba(pq(a));
        for (a = d.next(); !a.done; a = d.next()) oq(a.value, c);
        a = D(function() {
            return b.data.actions
        }) || [];
        d = ba(a);
        for (a = d.next(); !a.done; a = d.next()) oq(a.value, c);
        a = D(function() {
            return b.data.commands
        }) || [];
        a = ba(a);
        for (d = a.next(); !d.done; d = a.next()) oq(d.value, c);
        (a = D(function() {
            return b.data.command
        })) && oq(a, c)
    };

    function xG(a, b) {
        return Iu(b.B, a, function(c) {
            return c.commentSimpleboxRenderer
        })._commentText
    };
    var yG = W({
        buttonRenderer: Z
    });
    var zG = W({
        commentReplyDialogRenderer: function(a) {
            sw({
                buttons: function() {
                    yG(a.cancelButton);
                    yG(a.replyButton)
                },
                content: function() {
                    lp({
                        className: "comment-reply-input",
                        "name:": "comment-reply",
                        placeholder: Hr(a.placeholderText),
                        oninput: function(b) {
                            a._commentText = b.target.value
                        }
                    })
                },
                data: a
            })
        }
    });

    function AG(a, b) {
        var c = Iu(b.B, a, function(d) {
            return d.commentReplyDialogRenderer
        });
        if (c) return c._commentText
    };
    var BG = {
        addToPlaylistRenderer: !0
    };

    function CG(a) {
        return Object.keys(a).some(function(b) {
            return b in BG
        })
    }

    function DG(a) {
        var b = D(function() {
            return a.data.contents[0]
        });
        if (!b || !CG(b)) return a;
        b = {
            openPopupAction: {
                popupType: "DIALOG",
                popup: b
            }
        };
        a.data.actions || (a.data.actions = []);
        a.data.actions.push(b);
        return a
    };

    function EG(a) {
        return a.buttonRenderer || a.toggleButtonRenderer
    }

    function FG(a, b) {
        a && (a._isBusy = b, R())
    }

    function GG(a, b, c) {
        var d = Iu(b.B, b.A, EG);
        FG(d, !0);
        return rG(a, c).then(function(e) {
            wG(a, DG(e), b);
            FG(d, !1);
            return e
        }, function(e) {
            var f = Object.keys(a).filter(function(g) {
                return Hb(g, "Endpoint")
            })[0];
            f && a[f].onFailureAction && oq(a[f].onFailureAction, b);
            FG(d, !1);
            throw e;
        })
    };

    function HG(a) {
        return a.addToPlaylistCreateRenderer
    }

    function IG(a) {
        return (a = Iu(a.B, a.A, HG)) ? Ju(a, "isSelected", !0).int32Value : ""
    };

    function JG(a) {
        return (a = Iu(a.B, a.A, function(b) {
            return b.legalReportDetailsFormRenderer
        })) ? {
            formData: a,
            form: {
                flag_description: a._flag_description,
                flag_issue_type: a._flag_issue_type || KG(a),
                flag_affiliation: a._flag_affiliation || LG(a),
                flag_full_name: a._flag_full_name,
                minutes: a._minutes,
                seconds: a._seconds
            }
        } : void 0
    }

    function MG(a) {
        if (a = Iu(a.B, a.A, function(b) {
                return b.reportDetailsFormRenderer
            })) return {
            formData: a,
            form: {
                text: a._flag_description,
                minutes: a._minutes,
                seconds: a._seconds,
                vssId: a._vssId
            }
        }
    }

    function KG(a) {
        return Ju(E(function() {
            return a.issueTypeDropdown
        }), "identifier", "1").int32Value
    }

    function LG(a) {
        return Ju(E(function() {
            return a.affiliationDropdown
        }), "identifier", "1").int32Value
    };
    var NG = W({
        buttonRenderer: Z
    });

    function OG(a) {
        I({
            className: "gaming-account-link-confirm-dialog-renderer-banner"
        }, function() {
            I({
                className: "gaming-account-link-confirm-dialog-renderer-background"
            });
            Y(a.userAvatar, {
                alt: "",
                className: "gaming-account-link-confirm-dialog-renderer-avatar"
            });
            N(E(function() {
                return a.icon.iconType
            }), {
                className: "gaming-account-link-confirm-dialog-renderer-icon"
            });
            Y(a.thirdPartyAvatar, {
                alt: "",
                className: "gaming-account-link-confirm-dialog-renderer-avatar"
            })
        });
        ap({
            className: "gaming-account-link-confirm-dialog-renderer-title"
        }, function() {
            V(a.title)
        })
    }

    function PG(a) {
        a.dialogMessages.forEach(function(b) {
            ip({
                className: "secondary-text confirm-dialog-messages"
            }, function() {
                V(b)
            })
        })
    }

    function QG(a) {
        I({
            className: "gaming-account-link-confirm-dialog-renderer-buttons"
        }, function(b) {
            I({
                className: "spinner"
            });
            a.cancelButton && a.cancelButton.buttonRenderer && a.cancelButton.buttonRenderer.text && NG(a.cancelButton, {
                className: "gaming-account-confirm-dialog-renderer-button",
                V: function() {
                    b.setAttribute("loading", !0)
                }
            });
            NG(a.confirmButton, {
                className: "gaming-account-confirm-dialog-renderer-button",
                V: function() {
                    mw()
                }
            })
        })
    }

    function RG(a) {
        sw({
            header: function() {
                return OG(a)
            },
            content: function() {
                return PG(a)
            },
            buttons: function() {
                return QG(a)
            },
            data: a,
            xa: !0
        })
    };
    var SG = W({
        gamingAccountLinkConfirmDialogRenderer: RG
    });
    var TG = W({
        confirmDialogRenderer: fy
    });
    var UG = W({
        buttonRenderer: Z
    });

    function VG(a) {
        I({
            className: "gaming-account-link-setting-renderer-banner"
        }, function() {
            I({
                className: "gaming-account-link-setting-renderer-background"
            });
            Y(a.userAvatar, {
                alt: "",
                className: "gaming-account-link-setting-renderer-avatar"
            });
            N(E(function() {
                return a.icon.iconType
            }), {
                className: "gaming-account-link-setting-renderer-icon"
            });
            Y(a.thirdPartyAvatar, {
                alt: "",
                className: "gaming-account-link-setting-renderer-avatar"
            })
        });
        ap({
            className: "gaming-account-link-setting-renderer-title"
        }, function() {
            V(a.header)
        });
        Vp({
            name: "DISMISSAL",
            className: "gaming-account-link-setting-renderer-close",
            w: G.ja,
            onclick: function() {
                return mw()
            }
        })
    }

    function WG(a) {
        a.descriptions.forEach(function(b) {
            ip({
                className: "secondary-text gaming-account-link-setting-renderer-description"
            }, function() {
                V(b)
            })
        })
    }

    function XG(a) {
        I({
            className: "gaming-account-link-setting-renderer-buttons"
        }, function() {
            I({
                className: "spinner"
            });
            UG(a.linkButton, {
                className: "gaming-account-link-setting-renderer-button",
                V: function() {
                    document.querySelector(".gaming-account-link-setting-renderer-buttons").setAttribute("loading", !0)
                }
            })
        })
    }

    function YG(a) {
        sw({
            header: function() {
                return VG(a)
            },
            content: function() {
                return WG(a)
            },
            buttons: function() {
                return XG(a)
            },
            data: a,
            xa: !0
        })
    };
    var ZG = W({
        gamingAccountLinkSettingRenderer: YG
    });

    function $G(a) {
        a.title && ap({
            className: "gaming-multiple-account-link-dialog-title"
        }, function() {
            V(a.title)
        })
    }

    function aH(a) {
        a.thirdParties && a.thirdParties.forEach(function(b) {
            var c = b.gamingThirdPartyRenderer.thirdPartyName,
                d = b.gamingThirdPartyRenderer.thirdPartyAvatar,
                e = b.gamingThirdPartyRenderer.description,
                f = b.gamingThirdPartyRenderer.command;
            I({
                className: "third-party-account-option"
            }, function() {
                I({
                    className: "third-party-account-info"
                }, function() {
                    I({
                        className: "third-party-account-avatar-container"
                    }, function() {
                        Y(d, {
                            alt: Lq(c),
                            className: "third-party-account-avatar"
                        })
                    });
                    V(c)
                });
                Aq({
                    onclick: function() {
                        f && S(f, a, !0)
                    },
                    className: "compact"
                }, null, function() {
                    V(e)
                })
            })
        })
    }

    function bH() {
        Aq({
            onclick: mw,
            className: "compact dialog-cancel"
        }, null, function() {
            w(G.P)
        })
    }

    function cH(a) {
        sw({
            header: function() {
                return $G(a)
            },
            content: function() {
                return aH(a)
            },
            buttons: bH,
            data: a
        })
    };
    var dH = W({
        gamingMultipleAccountLinkDialogRenderer: cH
    });

    function eH(a) {
        return a.menuRenderer || a.slimVideoMetadataRenderer
    }

    function fH(a) {
        return a.toggleButtonRenderer
    }

    function gH(a, b) {
        var c = Ju(a, "status", b);
        return c ? Iu(a, c, fH) : null
    }

    function hH(a, b) {
        var c = a.likeEndpoint.status,
            d = a.likeEndpoint.target.videoId,
            e = iH(b);
        e && "INDIFFERENT" == c && (e.contents = e.contents.filter(function(f) {
            return d != f.playlistVideoRenderer.videoId
        }), R())
    }

    function iH(a) {
        return Iu(a.B, a.A, function(b) {
            return b.playlistVideoListRenderer
        })
    };
    var jH = W({
        buttonRenderer: Z
    });
    var kH = B("CANCEL"),
        lH = W({
            buttonRenderer: Z
        });

    function mH(a) {
        sw({
            header: function() {
                ap({
                    className: "modal-title"
                }, function() {
                    V(a.title)
                })
            },
            buttons: function() {
                Aq({
                    className: "compact"
                }, null, function() {
                    w(kH)
                });
                lH(a.button)
            },
            content: function() {
                ip({
                    className: "secondary-text"
                }, function() {
                    V(a.content)
                })
            },
            data: a
        })
    };
    var nH = W({
        modalWithTitleAndButtonRenderer: mH
    });

    function oH(a) {
        return a.reportFormModalRenderer
    };
    var pH = G.ja;

    function qH() {
        var a = cw().map(bw);
        T(a, "ytm-download-list", null, function() {
            if (a && a.length)
                for (var b = ba(a), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = c.videoId;
                    Wt({
                        thumbnail: c.thumbnail,
                        navigationEndpoint: {
                            watchEndpoint: {
                                videoId: d
                            },
                            commandMetadata: {
                                webCommandMetadata: {
                                    url: "/watch?v=" + d
                                }
                            }
                        },
                        title: Ir(c.title),
                        thumbnailOverlays: [cu(c.duration)],
                        shortBylineText: Ir(c.byline)
                    }, {
                        className: "item"
                    })
                } else w("No downloads")
        })
    }

    function rH() {
        qs({
            content: function() {
                I({
                    className: "downloads-page-header"
                }, function() {
                    Vp({
                        name: "DISMISSAL",
                        w: pH,
                        onclick: ms
                    });
                    w("Downloaded videos")
                });
                qH()
            },
            Ka: !0,
            Ja: !0,
            R: G.P
        })
    };
    var sH = B("NOTIFICATION_ERROR_MESSAGE");
    var tH = G.ja,
        uH = G.Gd,
        vH = G.Dd,
        wH = to(v("editor-header")),
        xH = to(v("dropdown")),
        yH = np("ytm-playlist-settings-editor-renderer", function(a, b) {
            function c(P) {
                O = P;
                x = P.trim().length ? BF(P) ? "" : G.Ab : G.Bb;
                b()
            }

            function d(P) {
                X = P;
                z = BF(P) ? "" : G.Cd;
                b()
            }

            function e(P) {
                dp({
                    className: "casual-section-header-container"
                }, function() {
                    Vp({
                        name: "DISMISSAL",
                        w: tH,
                        onclick: ms
                    });
                    $o({
                        id: wH,
                        className: "casual-section-header-title"
                    }, function() {
                        V(P.title)
                    });
                    Vp({
                        name: "CHECK",
                        w: uH,
                        className: "check-button",
                        onclick: function() {
                            if (x || z) n();
                            else {
                                var ca = [];
                                null !== O && ca.push({
                                    action: "ACTION_SET_PLAYLIST_NAME",
                                    playlistName: O
                                });
                                null !== X && ca.push({
                                    action: "ACTION_SET_PLAYLIST_DESCRIPTION",
                                    playlistDescription: X
                                });
                                null !== da && ca.push({
                                    action: "ACTION_SET_PLAYLIST_PRIVACY",
                                    playlistPrivacy: parseInt(da, 10)
                                });
                                0 < ca.length && (t.playlistEditEndpoint.actions = ca, S(t, P, !0));
                                ms()
                            }
                        }
                    })
                })
            }

            function f(P) {
                var ca = E(function() {
                    return P.thumbnail.playlistVideoThumbnailRenderer.thumbnail
                });
                ca && I({
                    className: "casual-section-thumbnail-container"
                }, function() {
                    zs(ca, null, void 0, void 0, !1)
                })
            }

            function g(P) {
                I({
                    className: "casual-section-playlist-title"
                }, function() {
                    CF({
                        data: P.name,
                        value: O,
                        tb: c,
                        error: function() {
                            x && J({
                                className: "casual-section-errors"
                            }, function() {
                                w(x)
                            })
                        }
                    })
                })
            }

            function h(P) {
                CF({
                    data: P.description,
                    value: X,
                    tb: d,
                    className: "casual-section-playlist-description",
                    required: !1,
                    error: function() {
                        I({
                            className: "casual-section-errors"
                        }, function() {
                            z && w(z)
                        })
                    }
                })
            }

            function l(P) {
                q(P.privacy, {
                    className: "casual-section-playlist-privacy",
                    onchange: function(ca) {
                        da = ca.target.value
                    }
                })
            }

            function n() {
                aw(function() {
                    w(vH)
                })
            }
            var q = W({
                    buttonRenderer: Z,
                    dropdownRenderer: Qq,
                    dropdownFormFieldRenderer: function(P, ca) {
                        T(P, "ytm-dropdown-form-field-renderer", ca, function() {
                            if (P.label) {
                                var xa = {
                                    Rb: xH
                                };
                                gp({
                                    className: "dropdown-label",
                                    htmlFor: xH.toString()
                                }, function() {
                                    V(P.label)
                                })
                            }
                            q(P.dropdown, xa)
                        })
                    },
                    playlistSettingsEditorCasualSectionRenderer: function(P, ca) {
                        T(P, "ytm-playlist-settings-editor-casual-section-renderer", ca, function() {
                            e(P);
                            I({
                                className: "casual-section-thumbnail-and-title"
                            }, function() {
                                f(P);
                                g(P)
                            });
                            I({
                                className: "casual-section-description-and-privacy"
                            }, function() {
                                h(P);
                                l(P)
                            })
                        })
                    }
                }),
                t, x = "",
                z = "",
                O = null,
                X = null,
                da = null;
            return {
                F: function(P) {
                    t = P.updateSettingsEndpoint;
                    q(P.sections[0])
                }
            }
        });
    var zH = W({
        playlistSettingsEditorRenderer: function(a) {
            qs({
                content: function() {
                    yH(a)
                },
                Ka: !0,
                Ja: !0,
                R: G.P,
                Sd: wH
            })
        }
    });
    var AH = B("NOTIFICATION_ERROR_MESSAGE");

    function BH(a, b) {
        return GG(a, b).then(null, function(c) {
            aw(function() {
                w(AH)
            });
            throw c;
        })
    };

    function CH() {
        return window.debugLocation || window.location
    };

    function DH(a) {
        return void 0 !== a.itemId ? a : null
    }

    function EH(a) {
        Iu(a.B, a.A, DH).items.find(function(b) {
            return !!b.settingMenuItemRenderer.selected
        }).settingMenuItemRenderer.selected = !1;
        a.A.selected = !0;
        $r()
    };
    var FH = B("CANCEL"),
        GH = W({
            shareTargetRenderer: function(a) {
                T(a, "ytm-share-target-renderer", null, function() {
                    U(a.navigationEndpoint, {
                        className: "share-target-link",
                        target: "_blank",
                        onclick: mw
                    }, function() {
                        V(a.title)
                    })
                })
            }
        });

    function HH(a) {
        a.preventDefault()
    }

    function IH(a) {
        Tr(a, {
            className: "sharing-renderer-url",
            onclick: HH
        }, function() {
            w(a)
        })
    };
    var JH = W({
        sharingRenderer: function(a) {
            navigator.share ? navigator.share({
                url: a.shortUrl
            }) : sw({
                header: function() {
                    ap(null, function() {
                        V(a.title)
                    })
                },
                buttons: function() {
                    Aq({
                        className: "compact"
                    }, null, function() {
                        w(FH)
                    })
                },
                content: function() {
                    a.shortUrl && IH(a.shortUrl);
                    GH(a.primaryShareTargets);
                    A("mweb_enable_secondary_share_targets") && GH(a.secondaryShareTargets)
                },
                data: a
            })
        }
    });

    function KH(a) {
        return a.subscribeButtonRenderer
    }

    function LH(a, b, c) {
        GG(a, b, c).then(function() {
            var d = Iu(b.B, b.A, KH);
            d.subscribed = !d.subscribed;
            R()
        })
    };

    function MH(a, b, c) {
        var d = b.A.isToggled;
        return GG(a, b, c).then(function() {
            b.A.isToggled = !d;
            R()
        })
    };
    var NH = {
            ytr: 3,
            ytm: 5
        },
        OH, PH, QH = 0;

    function RH() {
        OH && (Sx(), es(OH, !1, !0), document.body.removeChild(OH), OH = null)
    };
    var SH = W({
        confirmDialogRenderer: fy,
        unlimitedFamilyMessageInterstitialRenderer: bx("unlimitedFamilyMessageInterstitialRenderer"),
        unlimitedFamilyProfileInterstitialRenderer: bx("unlimitedFamilyProfileInterstitialRenderer")
    });

    function TH(a) {
        return a.toggleMenuServiceItemRenderer
    }

    function UH(a, b) {
        var c = Iu(b.B, b.A, TH);
        c.isToggled = !c.isToggled;
        return BH(a, b)
    };

    function VH(a, b) {
        return WH(a.data.encryptedPurchaseParams, a.data.ypcLogWalletAnalyticDataEndpoint, a.data.serializedTransactionFlowLoggingParams).then(function(c) {
            return XH(c, a, b)
        }, function(c) {
            throw c;
        })
    }

    function XH(a, b, c) {
        var d = a.integratorData;
        if (null == d || "" === d || null != a.error) return Vd(Error("Error in buyflowResponse"));
        a = {
            payments_payload: window.btoa(d),
            buybucket_params: b.data.buybucketParams,
            offer_params: b.data.offerParams
        };
        var e = b.data.completeTransactionEndpoint,
            f = E(function() {
                return e.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams
            });
        return rG(e, a).then(function(g) {
            g.data.messageRenderer ? En("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE", f) : (Dn(f), $n('{"event": "purchased", "purchaseStatus": "success"}'));
            wG(e, DG(g), c)
        }, function(g) {
            f && En("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE", f);
            throw g;
        })
    }

    function WH(a, b, c) {
        var d = Zd();
        a = a.replace(/-/g, "+").replace(/_/g, "/");
        var e = om.K().get("hl");
        Qn(Pn.K(), a, d.resolve, d.reject, e, b ? function(f) {
            b && rG(b, {
                backend_analytics: f
            })
        } : void 0, c);
        return d.g
    }

    function YH(a) {
        var b = E(function() {
            return a.ypcGetCartEndpoint.gtmId
        });
        b && Zn(b);
        (b = a.ypcGetCartEndpoint.gtmData) && $n(b)
    };
    var ZH = W({
        buttonRenderer: Z
    });
    var $H = W({
        offerGroupRenderer: function(a) {
            T(a, "ytm-offer-group-renderer", null, function() {
                cp({
                    className: "offer-group-title"
                }, function() {
                    V(a.title)
                });
                a.subtitle && I({
                    className: "offer-group-byline small-text subhead"
                }, function() {
                    V(a.subtitle, {
                        J: !0
                    })
                });
                I({
                    className: "offer-group-offers"
                }, function() {
                    ZH(a.offers)
                })
            })
        }
    });
    var aI = W({
        tvfilmSellableItemRenderer: function(a) {
            var b = a.thumbnail.thumbnails[0];
            T(a, "ytm-tvfilm-sellable-item-renderer", {
                className: b.width == b.height ? "square-thumbnail" : ""
            }, function() {
                zs(a.thumbnail);
                I({
                    className: "sellable-item-metadata"
                }, function() {
                    cp(null, function() {
                        V(a.title)
                    });
                    a.metadataRows.forEach(function(c) {
                        I({
                            className: "small-text subhead"
                        }, function() {
                            V(c)
                        })
                    })
                })
            })
        },
        tvfilmOffersRenderer: function(a) {
            var b = a && a.offerGroups;
            T(a, "ytm-tvfilm-offers-renderer", null, function() {
                $H(b)
            })
        }
    });
    var bI = W({
        tvfilmRichOffersRenderer: function(a) {
            Qx("ytm-tvfilm-rich-offers-renderer", function() {
                ap({
                    className: "rich-offers-headline"
                }, function() {
                    V(a.title)
                });
                I({
                    className: "rich-offers-top"
                }, function() {
                    aI(a.sellableItemRenderer)
                });
                I({
                    className: "rich-offers-groups"
                }, function() {
                    aI(a.offersRenderer)
                });
                Vp({
                    onclick: Sx,
                    w: G.ja,
                    className: "rich-offers-button",
                    name: "DISMISSAL"
                })
            })
        }
    });
    var cI = W({
        buttonRenderer: Z
    });

    function dI(a, b) {
        b._resumeTimeMs = D(function() {
            return b.endOptions[a].resumeTimeMs
        });
        b._pausePeriodMessage = D(function() {
            return b.endOptions[a].pausePeriodMessage
        });
        b._pauseEndMessage = D(function() {
            return b.endOptions[a].pauseEndMessage
        });
        R()
    }

    function eI(a, b) {
        b._resumeTimeMs = D(function() {
            return b.endOptions[a].resumeTimeMs
        });
        b._pausePeriodMessage = D(function() {
            return b.endOptions[a].pausePeriodMessage
        });
        b._pauseEndMessage = D(function() {
            return b.endOptions[a].pauseEndMessage
        })
    };
    var fI = W({
        unpluggedPauseMembershipDialogRenderer: function(a) {
            var b = a.defaultEndOptionIndex ? a.defaultEndOptionIndex : 0;
            eI(b, a);
            sw({
                header: a.title && function() {
                    ap(null, function() {
                        V(a.title)
                    })
                },
                content: function() {
                    ip({
                        className: "pause-period-message"
                    }, function() {
                        V(a._pausePeriodMessage)
                    });
                    ip({
                        className: "secondary-text pause-end-message"
                    }, function() {
                        V(a._pauseEndMessage)
                    });
                    fp({
                        className: "pause-slider",
                        type: "range",
                        min: 0,
                        max: a.endOptions.length - 1,
                        value$: b,
                        onchange: function(c) {
                            return dI(c.target.value, a)
                        }
                    });
                    a.dialogMessages.forEach(function(c) {
                        ip({
                            className: "secondary-text pause-dialog-messages"
                        }, function() {
                            V(c)
                        })
                    })
                },
                buttons: function() {
                    cI(a.secondaryButton);
                    cI(a.primaryButton)
                },
                sb: function() {
                    if (a.onOpenCommands)
                        for (var c = ba(a.onOpenCommands), d = c.next(); !d.done; d = c.next()) S(d.value, a, !0)
                },
                qb: function() {
                    if (a.onDismissCommands)
                        for (var c = ba(a.onDismissCommands), d = c.next(); !d.done; d = c.next()) S(d.value, a, !0)
                },
                data: a
            })
        }
    });

    function gI(a) {
        return a.unpluggedPauseMembershipDialogRenderer
    };

    function hI(a) {
        return E(function() {
            return a.redeemCode
        })
    }

    function iI(a, b) {
        a.ypcPostRedemptionRenderer = b;
        R()
    }

    function jI(a, b, c, d, e) {
        Vn(new Un(a.addToken, a.commonToken ? a.commonToken : "")).then(function() {
            return kI(b, c)
        }, function(f) {
            switch (f) {
                case "instrumentManagerLoadError":
                    d.fa = e;
                    R();
                    Gn("YPC_ERROR_REASON_INST_MANAGER_LOAD_FAILURE");
                    break;
                case "instrumentManagerCallbackError":
                    d.fa = e;
                    R();
                    Gn("YPC_ERROR_REASON_INST_MANAGER_CALLBACK_FAILURE");
                    break;
                case "instrumentManagerCancelled":
                    yn("ypcRedeemFlowCancelled");
                    break;
                default:
                    Lh(Error("unknown error during instrument manager flow."))
            }
        })
    }

    function kI(a, b) {
        var c = Xn(E(function() {
                return a.ypcRedeemCodeEndpoint.paymentUrl
            })),
            d = (new eo).init(),
            e = E(function() {
                return a.ypcRedeemCodeEndpoint.countryCode
            }),
            f = Iu(b.B, a, function(n) {
                return n.redeemCodeRenderer
            }),
            g = hI(f),
            h = E(function() {
                return f.errorMessage
            }),
            l = Iu(b.B, b.A, function(n) {
                return n.buttonRenderer
            });
        FG(l, !0);
        f.fa = void 0;
        f.ypcPostRedemptionRenderer = void 0;
        R();
        yn("ypcRedeemFlowStarted");
        return Yd([d, c]).then(function() {
            var n = go(),
                q = payments.business.integration.ClientTokenFactory.createClientToken(e, n);
            n = {
                c: g,
                rd: window.btoa(n),
                ctk: q
            };
            return rG(a, n).then(function(t) {
                FG(l, !1);
                if (t.code && "SUCCESS" == t.code)
                    if (t.data.errorMessage) f.fa = t.data.errorMessage, R();
                    else if (t.data.actions) {
                    var x = t.data.actions[0];
                    x.invokeInstrumentManagerAction ? jI(x.invokeInstrumentManagerAction, a, b, f, h) : Lh(Error("invoke instrument action not found."))
                } else t.data.renderer ?
                    (Fn(), iI(f, E(function() {
                        return t.data.renderer.ypcPostRedemptionRenderer
                    }))) : t.data.redirectEndpoint && (Fn(), S(E(function() {
                        return t.data.redirectEndpoint
                    }), l, !0));
                else "ERROR" === t.code ? (f.fa = h, R()) : Lh(Error("unknown error during redeem flow.")), Gn("YPC_ERROR_REASON_REDEEM_INNERTUBE_FAILURE")
            }, function(t) {
                FG(l, !1);
                Gn("YPC_ERROR_REASON_YPC_REDEEM_CODE_RPC_FAILURE");
                f.fa = Ir(t.response.errors[0]);
                R()
            })
        }, function() {
            FG(l, !1);
            Gn("YPC_ERROR_REASON_RISK_LIB_LOAD_FAILURE");
            Lh(Error("Couldn't load risk lib."));
            f.fa = h;
            R()
        })
    };
    var lI = W({
        buttonRenderer: Z
    });

    function mI(a, b) {
        var c = {
            className: "card-item-actions-primary-button"
        };
        a.primaryButtonRenderer && a.primaryButtonRenderer.buttonRenderer && "STYLE_BLUE_TEXT" === a.primaryButtonRenderer.buttonRenderer.style && (c.className += " card-item-actions-blue-text");
        T(a, "ytm-card-item-actions-renderer", b, function() {
            a.secondaryButtonRenderer && I({
                className: "card-item-actions-secondary-button"
            }, function() {
                return lI(a.secondaryButtonRenderer)
            });
            I(c, function() {
                return lI(a.primaryButtonRenderer)
            })
        })
    };
    var nI = new Map([
        ["DIVIDER_STYLE_INSET_THIN", "card-item-divider-inset-thin"],
        ["DIVIDER_STYLE_FULL_BLEED_THIN", "card-item-divider-fullbleed-thin"]
    ]);

    function oI(a) {
        T(a, "ytm-card-item-divider-renderer", null, function() {
            var b = [];
            nI.has(a.dividerStyle) && b.push(nI.get(a.dividerStyle));
            I({
                className: b.join(" ")
            })
        })
    };
    var pI = {},
        qI = (pI.CARD_ITEM_TEXT_STYLE_UNKNOWN = "", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_1 = "typography-display-1", pI.CARD_ITEM_TEXT_STYLE_DISPLAY_2 = "typography-display-2", pI.CARD_ITEM_TEXT_STYLE_TITLE_1 = "typography-title-1", pI.CARD_ITEM_TEXT_STYLE_TITLE_2 = "typography-title-2", pI.CARD_ITEM_TEXT_STYLE_BUTTON = "typography-button", pI.CARD_ITEM_TEXT_STYLE_BODY_1A = "typography-body-1a", pI.CARD_ITEM_TEXT_STYLE_BODY_1B = "typography-body-1b", pI.CARD_ITEM_TEXT_STYLE_BODY_2A = "typography-body-2a", pI.CARD_ITEM_TEXT_STYLE_BODY_2B =
            "typography-body-2b", pI.CARD_ITEM_TEXT_STYLE_LABEL = "typography-label", pI),
        rI = {},
        sI = (rI.CARD_ITEM_UX_SPACE_1 = "xs", rI.CARD_ITEM_UX_SPACE_2 = "s", rI.CARD_ITEM_UX_SPACE_3 = "m", rI.CARD_ITEM_UX_SPACE_4 = "l", rI.CARD_ITEM_UX_SPACE_5 = "xl", rI.CARD_ITEM_UX_SPACE_6 = "xl", rI);

    function tI(a, b, c) {
        return c && c in sI ? "card-item-" + a + b + "-" + sI[c] : ""
    }

    function uI(a, b) {
        var c = tI(a, "t", b.top),
            d = tI(a, "b", b.bottom),
            e = tI(a, "l", b.left),
            f = tI(a, "r", b.right),
            g = [];
        c && g.push(c);
        d && g.push(d);
        e && g.push(e);
        f && g.push(f);
        return g
    }
    var vI = {},
        wI = (vI.CARD_ITEM_COLOR_UNKNOWN = "color-unknown", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "color-general-background-a", vI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B = "color-general-background-b", vI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "color-error-background", vI.CARD_ITEM_COLOR_TEXT_PRIMARY = "color-text-primary", vI.CARD_ITEM_COLOR_TEXT_SECONDARY = "color-text-secondary", vI.CARD_ITEM_COLOR_CALL_TO_ACTION = "color-call-to-action", vI.CARD_ITEM_COLOR_ICON_INACTIVE = "color-icon-inactive", vI.CARD_ITEM_COLOR_ICON_DISABLED =
            "color-icon-disable", vI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "color-brand-icon-active", vI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "color-brand-icon-inactive", vI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "color-ten-percent-layer", vI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "color-text-primary-inverse", vI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "color-icon-active-other", vI),
        xI = {},
        yI = (xI.CARD_ITEM_COLOR_UNKNOWN = "background-color-unknown", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_A = "background-color-general-background-a", xI.CARD_ITEM_COLOR_GENERAL_BACKGROUND_B =
            "background-color-general-background-b", xI.CARD_ITEM_COLOR_ERROR_BACKGROUND = "background-color-error-background", xI.CARD_ITEM_COLOR_TEXT_PRIMARY = "background-color-text-primary", xI.CARD_ITEM_COLOR_TEXT_SECONDARY = "background-color-text-secondary", xI.CARD_ITEM_COLOR_CALL_TO_ACTION = "background-color-call-to-action", xI.CARD_ITEM_COLOR_ICON_INACTIVE = "background-color-icon-inactive", xI.CARD_ITEM_COLOR_ICON_DISABLED = "background-color-icon-disable", xI.CARD_ITEM_COLOR_BRAND_ICON_ACTIVE = "background-color-brand-icon-active",
            xI.CARD_ITEM_COLOR_BRAND_ICON_INACTIVE = "background-color-brand-icon-inactive", xI.CARD_ITEM_COLOR_10_PERCENT_LAYER = "background-color-ten-percent-layer", xI.CARD_ITEM_COLOR_TEXT_PRIMARY_INVERSE = "background-color-text-primary-inverse", xI.CARD_ITEM_COLOR_ICON_ACTIVE_OTHER = "background-color-icon-active-other", xI);

    function zI(a, b) {
        var c = a.containerMargin ? uI("m", a.containerMargin) : [];
        b && c.push(b);
        a.style && a.style in qI && c.push(qI[a.style]);
        c.push(a.textColor && a.textColor in wI ? wI[a.textColor] : wI.CARD_ITEM_COLOR_UNKNOWN);
        return c.join(" ")
    }

    function AI(a, b) {
        var c = b || {};
        c.className = zI(a, c.className);
        T(a, "ytm-card-item-text-renderer", c, function() {
            V(a.text)
        })
    };
    var BI = W({
        cardItemTextRenderer: AI
    });

    function CI(a, b) {
        T(a, "ytm-card-item-text-collection-renderer", b, function() {
            BI(a.textRenderers)
        })
    };

    function DI(a, b) {
        var c = rm(om.K(), 165);
        T(a, "ytm-themed-image-renderer", {
            className: (a.containerMargin ? uI("m", a.containerMargin) : []).join(" ")
        }, function() {
            if (a.themedIcon) {
                var d = a.themedIcon,
                    e = d.icon.iconType,
                    f = ["themed-image-icon"];
                f.push(wI[d.iconColor || "CARD_ITEM_COLOR_UNKNOWN"]);
                N(e, {
                    className: f.join(" "),
                    style$: "height:" + (a.imageHeight || 18) + "px; width:" + (a.imageWidth || 18) + "px;"
                })
            } else d = c ? a.imageDark : a.imageLight, e = ["themed-image-thumbnail"], a.isCircular && e.push("themed-image-thumbnail-circular"),
                b && b.Yd && e.push("themed-image-thumbnail-fit"), Y(d, {
                    className: e.join(" "),
                    "aria-label$": zq(a.accessibilityData),
                    height$: a.imageHeight,
                    width$: a.imageWidth
                })
        })
    };
    var EI = W({
            cardItemTextCollectionRenderer: CI,
            themedImageRenderer: DI
        }),
        FI = {},
        GI = (FI.CARD_ITEM_IMAGE_PLACEMENT_UNKNOWN = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_TOP = "card-item-text-with-image-image-placement-top", FI.CARD_ITEM_IMAGE_PLACEMENT_START = "card-item-text-with-image-image-placement-start", FI);

    function HI(a) {
        var b = [];
        a.imagePlacement && a.imagePlacement in GI && b.push(GI[a.imagePlacement]);
        return b.join(" ")
    }

    function II(a) {
        T(a, "ytm-card-item-text-with-image-renderer", {
            className: HI(a)
        }, function() {
            EI(a.imageRenderer);
            EI(a.textCollectionRenderer)
        })
    };
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
            cardItemErrorRenderer: function(a) {
                T(a, "ytm-card-item-error-renderer", null, function() {
                    I({
                        className: "card-item-error-triangle-up-container"
                    }, function() {
                        I({
                            className: "card-item-error-triangle-up"
                        })
                    });
                    I({
                        className: "card-item-error-error-text-renderer"
                    }, function() {
                        JI(a.errorTextRenderer)
                    })
                })
            },
            cardItemTextCollectionRenderer: CI,
            cardItemTextWithButtonRenderer: function(a, b) {
                T(a, "ytm-card-item-text-with-button-renderer", b, function() {
                    KI(a.textCollectionRenderer);
                    KI(a.buttonRenderer)
                })
            },
            cardItemTextWithImageRenderer: II,
            themedImageRenderer: DI
        }),
        MI = {},
        NI = (MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_UNKNOWN = "card-item-primary-container-placement-start", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_TOP = "card-item-primary-container-placement-top", MI.CARD_ITEM_PRIMARY_CONTAINER_PLACEMENT_START = "card-item-primary-container-placement-start", MI),
        OI = {},
        PI = (OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_UNKNOWN = "card-item-additional-info-placement-center", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_TOP = "card-item-additional-info-placement-top",
            OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_BOTTOM = "card-item-additional-info-placement-bottom", OI.CARD_ITEM_ADDITIONAL_INFO_PLACEMENT_CENTER = "card-item-additional-info-placement-center", OI);

    function QI(a) {
        var b = a.containerMargin ? uI("m", a.containerMargin) : [];
        a.backgroundColor && a.backgroundColor in yI && b.push(yI[a.backgroundColor]);
        return b.join(" ")
    }

    function RI(a) {
        var b = ["card-item-main-content"];
        a.primaryContainerPlacement && a.primaryContainerPlacement in NI && b.push(NI[a.primaryContainerPlacement]);
        a.containerPadding && (b = b.concat(uI("p", a.containerPadding)));
        return b.join(" ")
    }

    function SI(a) {
        var b = [];
        a.additionalInfoPlacement && a.additionalInfoPlacement in PI && b.push(PI[a.additionalInfoPlacement]);
        return b.join(" ")
    };
    var TI = W({
        buttonRenderer: Z,
        createCoreIdentityChannelContentRenderer: function(a, b) {
            T(a, "ytm-create-core-identity-channel-content-renderer", b, function() {
                I({
                    className: "ytm-create-core-identity-channel-content-renderer-content"
                }, function() {
                    a.profilePhoto && vr(a.profilePhoto, {
                        className: "ytm-create-core-identity-channel-content-renderer-icon"
                    });
                    I({
                        className: "ytm-create-core-identity-channel-content-renderer-input"
                    }, function() {
                        var c = to(v("given-name-input")),
                            d = to(v("family-name-input")),
                            e = Hr(a.givenNameLabel),
                            f = Hr(a.familyNameLabel);
                        fp({
                            dir$: "auto",
                            "aria-label$": e,
                            id: c,
                            value$: a.givenNameValue,
                            placeholder: e,
                            oninput: function(g) {
                                a.givenNameValue = g.target.value
                            },
                            required: !0
                        });
                        fp({
                            className: "ytm-create-core-identity-channel-content-renderer-family-name-input",
                            dir$: "auto",
                            "aria-label$": f,
                            id: d,
                            value$: a.familyNameValue,
                            placeholder: f,
                            oninput: function(g) {
                                a.familyNameValue = g.target.value
                            },
                            required: !0
                        })
                    })
                });
                I({
                    className: "ytm-create-core-identity-channel-content-renderer-messages"
                }, function() {
                    a.additionalInfos.forEach(function(c) {
                        I({
                            className: "ytm-create-core-identity-channel-content-renderer-message"
                        }, function() {
                            V(c)
                        })
                    })
                })
            })
        }
    });
    var UI = W({
        buttonRenderer: Z
    });
    var VI = G.Hc,
        WI = G.Ca;

    function XI() {
        return {
            content: {
                runs: [{
                    text: VI
                }]
            },
            button: {
                buttonRenderer: {
                    style: "STYLE_BRAND",
                    size: "SIZE_DEFAULT",
                    isDisabled: !1,
                    text: {
                        runs: [{
                            text: WI
                        }]
                    },
                    navigationEndpoint: Ly()
                }
            }
        }
    };
    var YI = W({
        creatorHeartRenderer: function(a, b) {
            T(a, "ytm-creator-heart-renderer", b, function() {
                I({
                    className: "cbox"
                }, function() {
                    a.isHearted && Y(a.creatorThumbnail, {
                        className: "creator-heart-thumbnail",
                        alt: ""
                    });
                    N("FULL_HEART", {
                        className: "comment-heart-icon",
                        "data-selected$": a.isHearted
                    })
                })
            })
        },
        pinnedCommentBadgeRenderer: function(a, b) {
            T(a, "ytm-pinned-comment-badge-renderer", b, function() {
                I({
                    className: "cbox"
                }, function() {
                    N("KEEP", {
                        className: "comment-pin"
                    });
                    V(a.label)
                })
            })
        }
    });

    function ZI(a, b) {
        id(a.target, "a") || (eq() ? b.actionMenu.menuRenderer && ws(b.actionMenu.menuRenderer) : mH(XI(), {}))
    }

    function $I(a) {
        I({
            className: "comment-details secondary-text cbox",
            onclick: function(b) {
                return ZI(b, a)
            }
        }, function() {
            J({
                className: "comment-published-time"
            }, function() {
                V(a.publishedTimeText)
            });
            N("LIKE_COMMENT", {
                className: "comment-action-icon",
                "data-selected$": "LIKE" == a.voteStatus
            });
            J({
                className: "comment-count"
            }, function() {
                V(a.voteCount)
            });
            N("DISLIKE_COMMENT", {
                className: "comment-action-icon",
                "data-selected$": "DISLIKE" == a.voteStatus
            });
            N("COMMENT", {
                className: "comment-action-icon"
            });
            a.replyCount && J({
                className: "comment-count"
            }, function() {
                w(a.replyCount.toString())
            });
            YI(a.creatorHeart);
            Yo({
                className: "comment-more-option",
                "aria-label$": G.gb,
                "aria-haspopup$": "true"
            })
        })
    };
    var aJ = W({
        commentRenderer: function(a, b) {
            T(a, "ytm-comment-renderer", b, function(c) {
                Bo(c, "_commentData", a, function() {
                    requestAnimationFrame(function() {
                        var d = c.querySelector(".comment-text");
                        c.setAttribute("expanded", 26 > d.scrollHeight - d.clientHeight)
                    })
                });
                U(a.authorEndpoint, {
                    className: "comment-icon-container"
                }, function() {
                    vr(a.authorThumbnail, {
                        className: "comment-icon"
                    })
                });
                I({
                    className: "comment-content"
                }, function() {
                    YI(a.pinnedCommentBadge);
                    U(a.authorEndpoint, {
                        className: "comment-title",
                        "is-owner$": a.authorIsChannelOwner
                    }, function() {
                        V(a.authorText)
                    });
                    ip({
                        className: "comment-text user-text",
                        onclick: function(d) {
                            return ZI(d, a)
                        }
                    }, function() {
                        V(a.contentText)
                    });
                    a.expandButton && a.expandButton.buttonRenderer && Z(a.expandButton.buttonRenderer, {
                        className: "comment-expand",
                        V: function() {
                            c.setAttribute("expanded", !0)
                        }
                    });
                    $I(a)
                });
                A("netzdg_logged_out_report_form_link_popups") && (!eq() || a.actionMenu && a.actionMenu.menuRenderer) && Vp({
                    w: G.gb,
                    name: "MORE_VERT",
                    className: "comment-menu",
                    onclick: function() {
                        a.actionMenu && a.actionMenu.menuRenderer ? ws(a.actionMenu.menuRenderer) : eq() || mH(XI(), {})
                    },
                    Ub: !0
                })
            })
        }
    });

    function bJ(a, b) {
        var c = a.continuations || [];
        I({
            className: "comment-replies-continuation vbox",
            Fa: b ? "/watch_comment?action_get_comment_replies=1" : "/comment_service?action_get_comment_replies=1"
        }, function() {
            c.forEach(function(d) {
                return Ms(a, d)
            })
        })
    }

    function cJ(a, b) {
        a && T(a, "ytm-comment-replies-renderer", null, function() {
            var c = a.commentRepliesRenderer;
            aJ(c.contents);
            bJ(c, b)
        })
    };
    var eJ = W({
            commentSimpleboxRenderer: np("ytm-comment-simplebox-renderer", function(a, b) {
                function c(e) {
                    var f = e.prepareAccountEndpoint;
                    f ? S(f, e, !0) : eq() ? (d = !d, b(), d && a.querySelector(".comment-simplebox-reply").focus()) : rc(location, dq())
                }
                var d = !1;
                return {
                    F: function(e) {
                        e.authorThumbnail && vr(e.authorThumbnail, {
                            className: "comment-simplebox-icon"
                        });
                        I({
                            className: "comment-simplebox-input"
                        }, function() {
                            if (d) {
                                var f = D(function() {
                                        return e.navigationEndpoint.createCommentDialogEndpoint.dialog.commentDialogRenderer
                                    }),
                                    g = f.cancelButton,
                                    h = f.submitButton;
                                lp({
                                    className: "comment-simplebox-reply",
                                    placeholder: Hr(e.placeholderText),
                                    oninput: function(l) {
                                        e._commentText = l.target.value
                                    }
                                });
                                I({
                                    className: "comment-simplebox-buttons cbox",
                                    onclick: function() {
                                        return c(e)
                                    }
                                }, function() {
                                    UI(g);
                                    UI(h)
                                })
                            } else I({
                                className: "comment-simplebox-placeholder"
                            }, function() {
                                Yo({
                                    className: "comment-simplebox-reply",
                                    onclick: function(l) {
                                        l.stopPropagation();
                                        c(e)
                                    }
                                }, function() {
                                    V(e.placeholderText)
                                })
                            })
                        })
                    },
                    ia: function(e, f) {
                        e != f && (d = !1)
                    }
                }
            }),
            commentThreadRenderer: function(a, b) {
                T(a, "ytm-comment-thread-renderer", b, function() {
                    aJ(a.comment);
                    cJ(a.replies, b.isWatch)
                })
            },
            commentSectionHeaderRenderer: dJ
        }),
        fJ = 0 <= cc.search("Factory Media Production");

    function dJ(a, b) {
        T(a, "ytm-comment-section-header-renderer", {}, function() {
            Yo(b, function() {
                I({
                    className: "cbox"
                }, function() {
                    ap({
                        className: "comment-section-header-text"
                    }, function() {
                        V(a.countText)
                    });
                    N(b.expanded ? "EXPAND_LESS" : "EXPAND_MORE")
                })
            })
        })
    }

    function gJ(a) {
        var b = a.continuations || [],
            c = bq() ? "/watch_comment?action_get_comments=1" : "/comment_service?action_get_comments=1",
            d = a.items && 0 < a.items.length;
        I({
            className: "vbox",
            Fa: c
        }, function() {
            b.forEach(function(e) {
                d ? Ms(a, e) : hx(a, e)
            })
        })
    }
    var hJ = np("ytm-comment-section-renderer", function(a, b) {
        function c() {
            if (!d && !A("mweb_auto_load_comments")) {
                var f = a.offsetTop;
                zo(function() {
                    return window.scrollTo(0, f)
                })
            }
            d = !d;
            b()
        }
        var d = A("redirect_classic_to_mweb_v2"),
            e = !1;
        return {
            F: function(f) {
                if (!fJ) {
                    var g = !(f.items && f.items.length) && A("mweb_auto_load_comments") && !Vq(),
                        h = bq(),
                        l = to(v("comment-section"));
                    eJ(f.header, {
                        expanded: d,
                        tabIndex: "0",
                        role$: "button",
                        "aria-expanded$": d,
                        "aria-controls$": l,
                        onclick: c,
                        className: g ? "extra-tall" : ""
                    });
                    !A("mweb_auto_load_comments") || d || e || Vq() && !Wq() || (new pp(0, function() {
                        c();
                        e = !0
                    })).observe(a);
                    I({
                        id: l,
                        className: "comment-section-content",
                        hidden: !d
                    }, function() {
                        eJ(f.sharebox, {
                            className: "section"
                        });
                        eJ(f.items, {
                            className: "section",
                            isWatch: h
                        });
                        gJ(f)
                    })
                }
            },
            ia: function(f, g) {
                f != g && (e = d = !1)
            }
        }
    });
    var iJ = W({
        buttonRenderer: Z
    });

    function jJ(a, b, c) {
        var d = E(function() {
            return b.donateButton.buttonRenderer.command
        });
        c = c.toString();
        d.ypcGetCartEndpoint ? d.ypcGetCartEndpoint.donationAmountMicros = c : d.urlEndpoint && (d.urlEndpoint.url = De(d.urlEndpoint.url, c));
        a.firstChild.firstChild.disabled = isNaN(parseFloat(kJ(b)))
    }

    function lJ(a, b, c) {
        c ? (ng(a, "custom"), b && b.focus()) : og(a, "custom")
    }

    function kJ(a) {
        var b = E(function() {
            return a.donateButton.buttonRenderer.command
        });
        return b.ypcGetCartEndpoint ? b.ypcGetCartEndpoint.donationAmountMicros : b.urlEndpoint ? Ae(b.urlEndpoint.url, "amount") || "" : null
    };
    var mJ = W({
        buttonRenderer: Z
    });
    var nJ = G.Oa,
        oJ = G.Ba,
        pJ = np("ytm-donation-shelf-renderer-outer", function(a, b) {
            function c() {
                h = !h;
                b()
            }

            function d(l) {
                I({
                    className: "donation-shelf-campaign"
                }, function() {
                    l.campaignThumbnail && Y(l.campaignThumbnail, {
                        className: "donation-shelf-campaign-thumbnail",
                        alt: ""
                    });
                    I({
                        className: "donation-shelf-campaign-text"
                    }, function() {
                        bp({
                            className: "donation-shelf-campaign-title"
                        }, function() {
                            V(l.campaignTitle)
                        });
                        I({
                            className: "donation-shelf-campaign-subtitle"
                        }, function() {
                            V(l.campaignSubtitle)
                        })
                    });
                    Z(l.donateButton.buttonRenderer, {
                        className: "donation-shelf-button",
                        V: function() {
                            var n = F();
                            n && n.pauseVideo()
                        }
                    })
                })
            }

            function e(l) {
                l.amountRaisedLabel ? bp({
                    className: "donation-shelf-amount-raised-label"
                }, function() {
                    V(l.amountRaisedLabel)
                }) : I({
                    className: "donation-shelf-progress"
                }, function() {
                    I({
                        className: "donation-shelf-progress-bar"
                    }, function() {
                        void 0 !== l.progress && I({
                            className: "donation-shelf-progress-bar-progress",
                            style: "width: " + 100 * l.progress + "%"
                        })
                    });
                    I({
                        className: "donation-shelf-labels"
                    }, function() {
                        l.startLabel && I({
                            className: "donation-shelf-start-label"
                        }, function() {
                            V(l.startLabel)
                        });
                        l.endLabel && I({
                            className: "donation-shelf-start-label"
                        }, function() {
                            V(l.endLabel)
                        })
                    });
                    l.matchLabel && I({}, function() {
                        V(l.matchLabel)
                    })
                })
            }

            function f(l) {
                I({
                    className: "donation-shelf-creator-message"
                }, function() {
                    I({
                        className: "donation-shelf-creator-message-header"
                    }, function() {
                        l.thumbnail && vr(l.thumbnail, {
                            className: "donation-shelf-creator-message-thumbnail"
                        });
                        V(l.title)
                    });
                    l.description && I({
                        className: "donation-shelf-creator-message-description"
                    }, function() {
                        V(l.description)
                    })
                })
            }

            function g(l) {
                l.nonprofitTitle && bp({
                    className: "donation-shelf-nonprofit-title"
                }, function() {
                    V(l.nonprofitTitle)
                });
                l.nonprofitSubtitle && I({
                    className: "donation-shelf-nonprofit-subtitle small-text"
                }, function() {
                    V(l.nonprofitSubtitle);
                    l.nonprofitWebsite && (w("  \u2022  "), J({
                        className: "donation-shelf-nonprofit-website"
                    }, function() {
                        V(l.nonprofitWebsite)
                    }))
                });
                l.nonprofitDescription && I({
                    className: "donation-shelf-nonprofit-description small-text"
                }, function() {
                    V(l.nonprofitDescription)
                })
            }
            var h = !1;
            return {
                F: function(l) {
                    T(l, "ytm-donation-shelf-renderer", {}, function() {
                        d(l);
                        e(l);
                        I({
                            className: "donation-shelf-expander",
                            onclick: c
                        }, function() {
                            I({
                                className: "donation-shelf-expand-text"
                            }, function() {
                                V(l.expandButton.buttonRenderer.text)
                            });
                            N(h ? "EXPAND_LESS" : "EXPAND_MORE", {
                                className: "donation-shelf-expand-icon",
                                role$: "button",
                                "aria-label$": h ? nJ : oJ
                            })
                        });
                        h && (l.creatorMessages && 0 < l.creatorMessages.length && (I({
                            className: "donation-shelf-expanded-separator"
                        }), l.creatorMessages.forEach(function(n) {
                            f(n)
                        })), g(l))
                    })
                },
                ia: function(l, n) {
                    l != n && (h = !1)
                }
            }
        });
    var qJ = W({
        buttonRenderer: Z
    });

    function rJ(a) {
        (a.impressionEndpoints || []).forEach(function(b) {
            S(b, a, !1)
        })
    }

    function sJ(a) {
        a && a.buttonRenderer && T(a.buttonRenderer, "div", {
            className: "ytm-mealbar-promo-button"
        }, function() {
            qJ(a, {
                va: !0
            })
        })
    };
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

    function vJ(a) {
        var b = [];
        a.backgroundColor && a.backgroundColor in yI && b.push(yI[a.backgroundColor]);
        return b.join(" ")
    };
    var wJ = W({
        buttonRenderer: Z
    });
    var xJ = W({
        postRedemptionSectionRenderer: function(a, b) {
            T(a, "ytm-post-redemption-section-renderer", b, function() {
                I({
                    className: "post-redemption-container",
                    style: 'background-image: url("' + er(E(function() {
                        return a.background.thumbnailLandscapePortraitRenderer.portrait
                    })) + '");'
                }, function() {
                    I({
                        className: "post-redemption-logo-image",
                        style: 'background-image: url("' + er(E(function() {
                            return a.logoImage.thumbnailLandscapePortraitRenderer.portrait
                        })) + '");'
                    }, function() {});
                    I({
                        className: "post-redemption-title"
                    }, function() {
                        V(a.title)
                    });
                    I({
                        className: "post-redemption-button-container"
                    }, function() {
                        wJ(a.button)
                    })
                })
            })
        }
    });

    function yJ(a, b) {
        T(a, "ytm-ypc-post-redemption-renderer", b, function() {
            I({
                className: "redeem-store-value-balance"
            }, function() {
                V(a.storeValueBalance)
            });
            I({
                className: "sections"
            }, function() {
                xJ(a.sections)
            })
        })
    };
    var zJ = np("ytm-redeem-code-renderer", function(a, b) {
        var c = W({
                buttonRenderer: Z
            }),
            d = !0;
        return {
            F: function(e, f) {
                e.redeemButton.buttonRenderer.isDisabled = d;
                e.ypcPostRedemptionRenderer ? yJ(e.ypcPostRedemptionRenderer, f) : T(e, "ytm-redeem-code-renderer", f, function() {
                    I({
                        className: "redeem-code-container",
                        style$: "background-image: url(" + er(E(function() {
                            return e.thumbnail
                        })) + ");"
                    }, function() {
                        I({
                            className: "redeem-code-title"
                        }, function() {
                            V(e.title)
                        });
                        I({
                            className: "redeem-code-input-container"
                        }, function() {
                            fp({
                                autocomplete: "off",
                                className: "redeem-code-input",
                                maxlength: 24,
                                oninput: function(g) {
                                    g = g.target.value.trim();
                                    d = 12 > g.length;
                                    e.redeemCode = g;
                                    b()
                                },
                                placeholder: Hr(e.placeholderText),
                                size: 24,
                                type: "text"
                            })
                        });
                        e.fa && I({
                            className: "redeem-code-error-message"
                        }, function() {
                            V(e.fa)
                        });
                        I({
                            className: "redeem-code-terms-conditions"
                        }, function() {
                            V(e.termsConditions)
                        });
                        I({
                            className: "redeem-button-container"
                        }, function() {
                            c(e.redeemButton)
                        })
                    })
                })
            }
        }
    });
    var AJ = W({
        dropdownRenderer: Qq,
        buttonRenderer: Z
    });

    function BJ(a) {
        var b = a.submitButton.buttonRenderer.isDisabled;
        a.submitButton.buttonRenderer.isDisabled = !(!a.timestampLabel || a._minutes && a._seconds);
        a.submitButton.buttonRenderer.isDisabled != b && R()
    }

    function CJ(a) {
        var b = mB(),
            c = b.seconds,
            d = b.vssId;
        a._minutes = b.minutes;
        a._seconds = c;
        a._vssId = d
    };

    function DJ(a, b) {
        var c = b.ua,
            d = to(v("checkbox"));
        H("c3-material-checkbox", a, function() {
            fp({
                id: d,
                className: "c3-material-checkbox-input",
                type: "checkbox"
            }, function(e) {
                "checked" in a && (e.checked = !!a.checked)
            });
            gp({
                className: "c3-material-checkbox-label",
                htmlFor: d.toString()
            }, c)
        })
    };

    function EJ(a, b) {
        a.target.checked ? S(E(function() {
            return b.enableCommand
        }), b, !0) : S(E(function() {
            return b.disableCommand
        }), b, !0)
    };
    var GJ = W({
        optionSelectableItemRenderer: FJ
    });

    function FJ(a) {
        hp({
            className: "option",
            data: a
        }, function() {
            V(a.text)
        })
    }

    function HJ(a) {
        a.subOptions && a._isSelected && jq({
            onchange: IJ
        }, null, function() {
            GJ(a.subOptions)
        })
    }

    function JJ(a, b) {
        window.addEventListener("change", function d() {
            a.parentNode && a.checked || (b(), window.removeEventListener("change", d, !0))
        }, !0)
    }

    function KJ(a) {
        a._isSelected = !1;
        (a.subOptions || []).forEach(function(b) {
            KJ(b.optionSelectableItemRenderer)
        })
    }

    function LJ(a, b) {
        b._isSelected = !0;
        b.clickCommands && b.clickCommands.forEach(function(c) {
            S(c, b, !0)
        });
        JJ(a.target, function() {
            return KJ(b)
        });
        R()
    }

    function IJ(a) {
        a = a.target;
        var b = a.selectedIndex;
        [].concat(ea(a.options)).forEach(function(c, d) {
            if (d == b) {
                var e = c.data.clickCommands;
                e && e.forEach(function(f) {
                    S(f, c.data, !0)
                })
            }
            c.data._isSelected = d === b
        })
    };
    var MJ = W({
        optionSelectableItemRenderer: function(a, b) {
            T(a, "ytm-option-selectable-item-renderer", b, function() {
                Wx({
                    onchange: function(c) {
                        return LJ(c, a)
                    }
                }, {
                    name: b.name,
                    ua: function() {
                        V(a.text)
                    }
                });
                HJ(a)
            })
        }
    });

    function NJ(a) {
        a = Ju(a, "_isSelected", !0);
        if (!a) return null;
        var b = a.subOptions;
        return b ? NJ(b) : a
    };

    function OJ() {
        return {
            signalServiceEndpoint: {
                signal: "CLIENT_SIGNAL",
                actions: [{
                    signalAction: {
                        signal: "SUBMIT_FORM"
                    }
                }]
            }
        }
    };
    var PJ = W({
        optionsRenderer: function(a, b) {
            var c = to(v("options"));
            T(a, "ytm-options-renderer", b, function() {
                MJ(a.items, {
                    name: c,
                    onchange: function() {
                        var d = NJ(a);
                        d && (a._selectedValue = d.submitEndpoint, a._selectedNavigationValue = d.submitNavigationEndpoint, a._selectedDialog = d.confirmDialog)
                    }
                })
            })
        },
        buttonRenderer: Z,
        booleanFormFieldV2Renderer: function(a, b) {
            T(a, "ytm-boolean-form-field-v2-renderer", b, function() {
                DJ({
                    onchange: function(c) {
                        return EJ(c, a)
                    }
                }, {
                    ua: function() {
                        V(a.label)
                    }
                })
            })
        }
    });
    var QJ = W({
        buttonRenderer: Z
    });
    var SJ = W({
        buttonRenderer: Z,
        sponsorshipsHeaderRenderer: RJ,
        sponsorshipsListTileRenderer: Lw
    });

    function RJ(a, b) {
        T(a, "ytm-sponsorships-header-renderer", b, function() {
            var c = er(a.backgroundImage),
                d = un(a.backgroundColor);
            I({
                style$: "background-image: url(" + c + ");\n                 background-blend-mode: soft-light;\n                 background-color: " + d + ";",
                className: "sponsorships-celebration-renderer-header"
            }, function() {
                I({
                    className: "sponsorships-celebration-renderer-header-image-container"
                }, function() {
                    Y(a.channelImage, {
                        className: "sponsorships-celebration-renderer-header-image",
                        alt: ""
                    })
                });
                I({
                    className: "sponsorships-celebration-renderer-header-text"
                }, function() {
                    I({
                        className: "sponsorships-celebration-renderer-header-title"
                    }, function() {
                        V(a.title)
                    });
                    I({
                        className: "sponsorships-celebration-renderer-header-subtitle"
                    }, function() {
                        V(a.subtitle)
                    })
                })
            })
        })
    };
    var TJ = W({
        buttonRenderer: Z,
        menuRenderer: vs
    });
    var UJ = W({
        buttonRenderer: Z
    });
    var VJ, WJ = !1,
        XJ = B("CLOSE");

    function YJ(a, b, c, d, e) {
        b && (VJ || (VJ = document.createElement("div"), VJ.id = "surveys", document.body.insertBefore(VJ, document.body.firstChild)), Xr("state-navigatestart", ZJ), VJ && uh(VJ, $J, {
            content: b,
            Pb: c,
            Lb: d,
            A: a,
            se: e
        }))
    }

    function ZJ() {
        if (VJ) {
            gs(VJ);
            var a = document.getElementById("home-icon");
            a && a.focus();
            document.body.removeChild(VJ);
            VJ = null;
            WJ = !1;
            a = Eo;
            delete a.response.response.survey;
            Io(a)
        }
    }

    function $J(a) {
        var b = !!a.Lb && !WJ,
            c = {};
        b && (c["aria-expanded$"] = !b, c.onclick = function() {
            YJ(null, a.content);
            VJ && fs(VJ);
            WJ = !0
        });
        c.className = b ? "collapsed" : "expanded";
        H("c3-survey", null, function() {
            H("c3-survey-content", c, function() {
                b ? (N("EXPAND_LESS", {
                    className: "c3-survey-expand"
                }), a.Lb()) : a.content()
            });
            H("c3-survey-close-icon", null, function() {
                Vp({
                    name: "DISMISSAL",
                    w: XJ,
                    onclick: function() {
                        ZJ();
                        a.Pb && a.Pb()
                    }
                })
            })
        });
        b || a.se || hs("close", ZJ);
        zo(function() {
            var d = a.A;
            d && d.impressionEndpoints && vq(d.impressionEndpoints, d, !0)
        })
    };
    var aK = W({
        buttonRenderer: Z
    });
    var bK = W({
        buttonRenderer: Z,
        checkboxSurveyOptionRenderer: function(a, b) {
            T(a, "ytm-checkbox-survey-option-renderer", b, function() {
                DJ({
                    onchange: function(c) {
                        return b.te(c.target.checked, a)
                    },
                    checked: b && !!b.checked
                }, {
                    ua: function() {
                        V(a.responseText)
                    }
                })
            })
        }
    });

    function cK(a, b) {
        H("div", {
            className: "ytm-checkbox-survey-renderer-header",
            tabIndex: "-1",
            role$: b ? "" : "button",
            "aria-expanded$": b
        }, function(c) {
            V(a.question);
            document.querySelector("ytm-checkbox-survey-option-renderer") || c.focus();
            b || zo(function() {
                Ep(c, a)
            })
        })
    }

    function dK(a) {
        if (a.submitButton) {
            var b = void 0 === a._selected || 0 == a._selected.length;
            a.submitButton.buttonRenderer.isDisabled = b;
            a.submitButton.buttonRenderer.style = b ? "STYLE_DEFAULT" : "STYLE_PRIMARY"
        }
    }

    function eK(a) {
        a.submitButton.buttonRenderer.isDisabled || (ZJ(), a._selected.forEach(function(b) {
            S(b.responseEndpoint, b, !0)
        }), a.submitActions && vq(a.submitActions, a, !0))
    }

    function fK(a, b) {
        var c = a.checkboxSurveyOptionRenderer;
        return c ? b.includes(c) : !1
    }

    function gK(a, b, c) {
        a ? (c._selected = b.isExclusiveOption ? [] : c._selected.filter(function(d) {
            return !d.isExclusiveOption
        }), c._selected.push(b)) : c._selected = c._selected.filter(function(d) {
            return !Object.is(d, b)
        });
        dK(c);
        R()
    };
    var hK = W({
        singleOptionSurveyOptionRenderer: function(a, b) {
            T(a, "ytm-single-option-survey-option-renderer", b, function() {
                a.icon && Vp({
                    name: a.icon.iconType,
                    w: Hr(a.option),
                    onclick: function() {
                        ZJ();
                        a.submissionEndpoint && S(a.submissionEndpoint, a, !0)
                    }
                });
                I({
                    className: "ytm-single-option-survey-option-label",
                    "aria-hidden$": !0
                }, function() {
                    V(a.option)
                })
            })
        }
    });
    var iK = W({
        singleOptionSurveyRenderer: function(a, b) {
            YJ(a, function() {
                T(a, "ytm-single-option-survey-renderer", b, function() {
                    I({
                        className: "ytm-single-option-survey-header"
                    }, function() {
                        V(a.question)
                    });
                    I({
                        className: "ytm-single-option-survey-options"
                    }, function() {
                        hK(a.options)
                    })
                })
            }, function() {
                a.dismissalEndpoint && S(a.dismissalEndpoint, a, !0)
            }, void 0)
        },
        checkboxSurveyRenderer: function(a, b) {
            YJ(a, function() {
                T(a, "ytm-checkbox-survey-renderer", b, function() {
                    a._selected || (a._selected = []);
                    dK(a);
                    cK(a, !0);
                    I({
                        className: "ytm-checkbox-survey-options"
                    }, function() {
                        a.options.forEach(function(c) {
                            bK(c, {
                                te: function(d, e) {
                                    gK(d, e, a)
                                },
                                checked: fK(c, a._selected)
                            })
                        })
                    });
                    I({
                        className: "ytm-checkbox-submit-button-wrapper",
                        onclick: function() {
                            eK(a)
                        }
                    }, function() {
                        bK(a.submitButton)
                    })
                }, !0)
            }, function() {
                a.dismissalEndpoint && S(a.dismissalEndpoint, a, !0)
            }, function() {
                cK(a, !1)
            }, !1)
        }
    });

    function jK(a, b) {
        I({
            className: "one-vs-one-team-row"
        }, function() {
            J({
                className: "one-vs-one-team-name"
            }, function() {
                V(a)
            });
            J({
                className: "one-vs-one-team-result"
            }, function() {
                V(b)
            })
        })
    }

    function kK(a, b) {
        a.homeName && a.awayName && a.homeParticipantResult && a.awayParticipantResult && T(a, "ytm-one-vs-one-event", b, function() {
            jK(a.homeName, a.homeParticipantResult);
            jK(a.awayName, a.awayParticipantResult);
            I({
                className: "one-vs-one-event-description"
            }, function() {
                V(a.eventDescription)
            });
            I({
                className: "one-vs-one-event-description"
            }, function() {
                V(a.additionalEventDescription)
            })
        })
    };
    var lK = W({
        oneVsOneEvent: kK,
        thumbnailOverlayTimeStatusRenderer: Fs
    });

    function mK(a, b) {
        I({
            className: ["collage-image background-image", a].join(" ")
        }, function(c) {
            Ze(c, 'url("' + er(b, c) + '")')
        })
    };
    var nK = W({
        callToActionButtonRenderer: function(a, b) {
            T(a, "ytm-call-to-action-button-renderer", b, function(c) {
                a.style && c.setAttribute("data-style", a.style);
                I({
                    className: "cbox"
                }, function() {
                    N(D(function() {
                        return a.icon.iconType
                    }));
                    I({
                        className: "call-to-action-button-label"
                    }, function() {
                        V(a.label)
                    })
                })
            })
        },
        collageHeroImageRenderer: function(a, b) {
            T(a, "ytm-collage-hero-image-renderer", b, function() {
                mK("collage-left collage-top collage-bottom", a.leftThumbnail);
                mK("collage-right collage-top", a.topRightThumbnail);
                mK("collage-right collage-bottom", a.bottomRightThumbnail)
            })
        },
        singleHeroImageRenderer: function(a, b) {
            T(a, "ytm-single-hero-image-renderer", b, function() {
                a.thumbnail && Y(a.thumbnail, {
                    className: "single-hero-image",
                    alt: ""
                }, 320)
            })
        },
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

    function qK(a, b) {
        T(a, "ytm-watch-card-compact-video-renderer", b, function() {
            U(a.navigationEndpoint, {
                className: "watch-card-compact-video-condensed-endpoint"
            }, function() {
                a.thumbnail && Y(a.thumbnail, {
                    className: "watch-card-compact-video-condensed-thumbnail",
                    alt: ""
                });
                I({
                    className: "watch-card-compact-video-condensed-metadata"
                }, function() {
                    cp({
                        className: "watch-card-compact-video-condensed-title"
                    }, function() {
                        V(a.title, {
                            J: !0
                        })
                    });
                    I({
                        className: "subhead"
                    }, function() {
                        V(a.subtitle, {
                            J: !0
                        })
                    })
                });
                V(a.lengthText)
            })
        })
    }

    function rK(a, b) {
        T(a, "ytm-watch-card-compact-video-renderer", b, function() {
            Bs({
                thumbnail: E(function() {
                    return a.thumbnail
                }),
                navigationEndpoint: E(function() {
                    return a.navigationEndpoint
                }),
                headline: E(function() {
                    return a.title
                }),
                H: [a.subtitle],
                overlay: function() {
                    Is(function() {
                        return pK(a.thumbnailOverlays)
                    })
                }
            })
        })
    };
    var sK = W({
        thumbnailOverlayResumePlaybackRenderer: Es,
        thumbnailOverlayTimeStatusRenderer: Fs
    });
    var tK = W({
        watchCardCompactVideoRenderer: function(a, b) {
            switch (a.style) {
                case "WATCH_CARD_COMPACT_VIDEO_RENDERER_STYLE_CONDENSED":
                    qK(a, b);
                    break;
                default:
                    rK(a, b)
            }
        },
        watchCardOneVsOneEventCompactVideoRenderer: function(a, b) {
            T(a, "ytm-watch-card-one-vs-one-event-compact-video-renderer", b, function() {
                U(a.navigationEndpoint, {
                    className: "ytm-watch-card-one-vs-one-event-link"
                }, function() {
                    zs(a.thumbnail, function() {
                        Is(function() {
                            return sK(a.thumbnailOverlays)
                        })
                    });
                    I({
                        className: "ytm-watch-card-one-vs-one-event-container"
                    }, function() {
                        kK(a.oneVsOneEvent, b)
                    })
                })
            })
        }
    });
    var uK = W({
        horizontalCardListRenderer: Yu,
        verticalWatchCardListRenderer: function(a, b) {
            T(a, "ytm-vertical-watch-card-list-renderer", b, function() {
                tK(a.items)
            })
        }
    });
    var vK = G.Oa,
        wK = G.Ba,
        xK = W({
            watchCardHeroOneVsOneEventRenderer: function(a, b) {
                T(a, "ytm-watch-card-hero-one-vs-one-event-renderer", b, function() {
                    var c = du(a);
                    U(a.navigationEndpoint, {
                        className: "watch-card-hero-one-vs-one-event-endpoint"
                    }, function() {
                        a.thumbnail && Y(a.thumbnail, {
                            className: "watch-card-hero-one-vs-one-event-hero-image",
                            alt: ""
                        }, 320);
                        I({
                            className: "watch-card-hero-one-vs-one-event-bottom-fade bottom-fade"
                        }, function() {
                            lK(a, {
                                className: "watch-card-one-vs-one-event"
                            });
                            Is(function() {
                                return lK(c)
                            })
                        })
                    })
                })
            },
            watchCardHeroVideoRenderer: function(a, b) {
                T(a, "ytm-watch-card-hero-video-renderer", b, function() {
                    U(a.navigationEndpoint, {
                        className: "watch-card-hero-video-endpoint",
                        "aria-label$": zq(a.accessibility)
                    }, function() {
                        nK(a.heroImage);
                        nK(a.callToActionButton, {
                            className: "watch-card-hero-video-call-to-action"
                        });
                        a.title && I({
                            className: "watch-card-single-hero-bottom-fade bottom-fade"
                        }, function() {
                            ap({
                                className: "watch-card-single-hero-title"
                            }, function() {
                                V(a.title, {
                                    J: !0
                                })
                            });
                            bp({
                                className: "watch-card-single-hero-subtitle"
                            }, function() {
                                V(a.subtitle, {
                                    J: !0
                                })
                            });
                            Is(function() {
                                return nK(a.thumbnailOverlays)
                            })
                        })
                    })
                })
            },
            watchCardRichHeaderRenderer: function(a, b) {
                T(a, "ytm-watch-card-rich-header-renderer", b, function() {
                    a.avatar && U(a.titleNavigationEndpoint, {
                        "aria-hidden$": "true"
                    }, function() {
                        vr(a.avatar, {
                            className: "watch-card-rich-header-profile-icon"
                        })
                    });
                    I({
                        className: "watch-card-rich-header-text"
                    }, function() {
                        U(a.titleNavigationEndpoint, null, function() {
                            cp({
                                className: "watch-card-rich-header-title"
                            }, function() {
                                V(a.title);
                                a.titleBadge && Cr(a.titleBadge.metadataBadgeRenderer, {
                                    className: "watch-card-rich-header-badge"
                                })
                            });
                            I({
                                className: "subhead"
                            }, function() {
                                V(a.subtitle)
                            })
                        });
                        oK(a.callToActionButton, {
                            className: "watch-card-rich-header-call-to-action"
                        })
                    })
                })
            },
            watchCardSectionSequenceRenderer: function(a, b) {
                T(a, "ytm-watch-card-section-sequence-renderer", b, function() {
                    uK(a.lists)
                })
            }
        }),
        yK = np("ytm-universal-watch-card-renderer", function(a, b) {
            function c() {
                e = !e;
                b();
                zo(function() {
                    e ? a.querySelector("ytm-watch-card-section-sequence-renderer a").focus() : (window.scrollTo(0, a.offsetTop), a.querySelector(".universal-watch-card-toggle-container").focus())
                })
            }

            function d(f) {
                var g = Hr(f.expandedLabel) || vK,
                    h = Hr(f.collapsedLabel) || wK,
                    l = e ? g : h;
                I({
                    className: "universal-watch-card-toggle-container-wrapper"
                }, function() {
                    Yo({
                        className: "universal-watch-card-toggle-container",
                        onclick: c,
                        "aria-expanded$": e,
                        "aria-label$": l
                    }, function() {
                        var n = e ? f.expandedLabel : f.collapsedLabel;
                        V(n);
                        var q = e ? "EXPAND_LESS" : "EXPAND_MORE";
                        I({
                            className: "universal-watch-card-toggle-button"
                        }, function() {
                            return Wp(q, Hr(n) || "")
                        })
                    })
                })
            }
            var e = !1;
            return {
                F: function(f) {
                    a.data = f;
                    xK(f.header);
                    xK(f.callToAction, {
                        className: "universal-watch-card-call-to-action"
                    });
                    f.sections && !e && d(f);
                    xK(f.sections, {
                        hidden: !e
                    });
                    f.sections && e && d(f)
                }
            }
        });
    var zK = W({
        buttonRenderer: Z
    });

    function AK(a, b) {
        a && I({
            className: "unlimited-family-interstitial-buttons",
            onclick: function() {
                var c = a.buttonRenderer;
                c && c.navigationEndpoint || Sx()
            }
        }, function() {
            zK(a)
        });
        b && I({
            className: "unlimited-family-interstitial-buttons",
            onclick: function() {
                return BK(b.buttonRenderer)
            }
        }, function() {
            zK(b)
        })
    }

    function BK(a) {
        (D(function() {
            return a.navigationEndpoint.browseEndpoint
        }) || D(function() {
            return a.serviceEndpoint.ypcGetCartEndpoint
        })) && Sx()
    }

    function CK(a) {
        a && I({
            className: "unlimited-family-profile-secondary-thumbnails"
        }, function() {
            a.forEach(function(b) {
                Y(b, {
                    className: "unlimited-family-profile-secondary-thumbnail",
                    alt: ""
                })
            })
        })
    };

    function DK(a) {
        return (a = EK(a)) ? "linear-gradient(180deg, " + a + ")," : ""
    }

    function EK(a) {
        if (!a) return null;
        var b = 100 / a.length;
        return a.map(function(c, d) {
            var e = d * b;
            return un(c) + " " + e + "%"
        }).join(",")
    };
    var FK = W({
        buttonRenderer: Z
    });

    function GK(a, b) {
        a && I({
            "aria-label$": b
        }, function() {
            Y(a, {
                alt: "",
                className: "unlimited-page-header-logo-thumbnail"
            })
        })
    }

    function HK(a) {
        a && I({
            className: "unlimited-page-header-metadatas"
        }, function() {
            a.forEach(function(b) {
                I({}, function() {
                    V(b)
                })
            })
        })
    }

    function IK(a) {
        J({
            className: "ypc-promotion"
        }, function() {
            V(a)
        })
    }

    function JK(a) {
        var b = E(function() {
            return a.thumbnailLandscapePortraitRenderer
        });
        return b ? Wq() && b.landscape ? b.landscape : b.portrait : null
    };
    var KK = W({
        buttonRenderer: Z
    });

    function LK(a) {
        a.metadatas && I({
            className: "single-ypc-offer-metadatas"
        }, function() {
            a.metadatas.forEach(function(b) {
                V(b)
            })
        })
    }

    function MK(a) {
        a.promotion && a.promotion.ypcPromotionRenderer && a.promotion.ypcPromotionRenderer.promotionText && J({
            className: "ypc-promotion"
        }, function() {
            V(MK)
        })
    }

    function NK(a, b) {
        T(a, "ytm-single-ypc-offer-renderer", b, function() {
            I({
                className: "single-ypc-offer"
            }, function() {
                I({
                    className: "single-ypc-offer-type-name"
                }, function() {
                    V(a.offerTypeName)
                });
                LK(a);
                MK(a)
            });
            I({
                className: "single-ypc-offer-button"
            }, function() {
                Z(a.button.buttonRenderer)
            })
        })
    };
    var OK = W({
        singleYpcOfferRenderer: NK
    });

    function PK(a) {
        var b = {
            className: "collapsible-ypc-offer-offers"
        };
        a.isCollapsed && (b.hidden = !0);
        I(b, function() {
            return OK(a.singleYpcOfferListSupportedRenderers)
        })
    }

    function QK(a, b) {
        var c = {
            className: "collapsible-ypc-offer-header",
            role$: "button",
            "aria-expanded$": !a.isCollapsed,
            onclick: function(d) {
                var e = b.querySelector(".collapsible-ypc-offer-offers");
                b.querySelector(".collapsible-ypc-offer-header").setAttribute("hidden", "true");
                e.removeAttribute("hidden");
                d.stopPropagation();
                d.preventDefault()
            }
        };
        a.isCollapsed || (c.hidden = !0);
        I(c, function() {
            return V(a.moreOfferInfoHeader)
        })
    };
    var RK = W({
        collapsibleYpcOfferRenderer: function(a, b) {
            T(a, "ytm-collapsible-ypc-offer-renderer", b, function(c) {
                QK(a, c);
                PK(a)
            })
        },
        singleYpcOfferRenderer: NK
    });
    var SK = G.Oa,
        TK = G.Ba,
        UK = W({
            singleYpcOfferListRenderer: function(a, b) {
                T(a, "ytm-single-ypc-offer-list-renderer", b, function() {
                    RK(a.singleYpcOfferSupportedRenderers, {
                        className: "single-ypc-offer-list-renderer-offer"
                    });
                    RK(a.collapsibleRenderers)
                })
            }
        }),
        VK = np("ytm-ypc-offers-list-renderer", function(a, b) {
            function c() {
                d = !d;
                b()
            }
            var d = !1;
            return {
                F: function(e) {
                    UK(e.offersList);
                    e.moreAdditionalInfoHeader && (I({
                        className: "ypc-offers-list-more-info-header",
                        onclick: c
                    }, function() {
                        I({
                            className: "ypc-offers-list-more-info-header-text"
                        }, function() {
                            V(e.moreAdditionalInfoHeader)
                        });
                        N(d ? "EXPAND_LESS" : "EXPAND_MORE", {
                            role$: "button",
                            "aria-expanded$": d,
                            "aria-label$": d ? SK : TK
                        })
                    }), I({
                        className: "ypc-offers-list-more-info-details",
                        hidden: !d
                    }, function() {
                        var f = e.moreAdditionalInfos;
                        f && f.forEach(function(g) {
                            I({
                                className: "ypc-offers-list-more-info-item"
                            }, function() {
                                V(g)
                            })
                        })
                    }))
                },
                ia: function(e, f) {
                    e != f && (d = !1)
                }
            }
        });

    function WK(a) {
        a && XK("/sw.js?0", a.scope)
    }

    function XK(a, b) {
        navigator.serviceWorker.register(a, {
            scope: void 0 === b ? "/" : b
        })
    };
    var YK = {
        getAccountsListEndpoint: {
            hack: !0
        }
    };
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !m.requestAnimationFrame; ++c) m.requestAnimationFrame = m[b + "RequestAnimationFrame"], m.cancelAnimationFrame = m[b + "CancelAnimationFrame"] || m[b + "CancelRequestAnimationFrame"];
        if (!m.requestAnimationFrame) {
            var d = 0;
            m.requestAnimationFrame = function(e) {
                var f = (new Date).getTime(),
                    g = Math.max(0, 16 - (f - d));
                d = f + g;
                return m.setTimeout(function() {
                    e(f + g)
                }, g)
            };
            m.cancelAnimationFrame || (m.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }
    })();
    (function() {
        function a(b, c) {
            var d = !(!c || !c.bubbles),
                e = !(!c || !c.cancelable),
                f = c ? c.detail : void 0;
            try {
                var g = document.createEvent("HTMLEvents");
                g.initEvent(b, d, e);
                g.detail = f
            } catch (l) {
                g = document.createEvent("Event");
                for (var h in Object.keys(f)) g[h] = f[h];
                g.initEvent(b, d, e)
            }
            return g
        }
        "function" !== typeof window.CustomEvent && (a.prototype = window.Event.prototype, window.CustomEvent = a)
    })();
    "hidden" in HTMLElement.prototype || Object.defineProperty(HTMLElement.prototype, "hidden", {
        get: function() {
            return this.hasAttribute("hidden")
        },
        set: function(a) {
            a ? this.setAttribute("hidden", "") : this.removeAttribute("hidden")
        }
    });
    ND("ai");
    (function() {
        function a(c, d) {
            b(c, {
                response: d,
                he: !0
            });
            if (A("c3_client_side_screens")) {
                var e = d.response.responseContext.webResponseContextExtensionData.ytConfigData.rootVisualElementType,
                    f = lo();
                oo(f, e, void 0)
            }
        }
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
        window.makeColdLoadRequest = function(c) {
            Uu(Uu(Wu(c, {
                pbjcold: "1"
            }), function(d) {
                var e = d.done;
                d = d.value;
                d.response.reload && (Lh(Error("Cold load request had reload response")), d = fF(Error(B("INVALID_RESPONSE_RECEIVED"))));
                return {
                    done: e,
                    value: d
                }
            }, function(d) {
                .01 > Math.random() && Lh(d);
                return {
                    done: !0,
                    value: fF(d)
                }
            }), function(d) {
                d.done && a(c, d.value.response)
            })
        };
        window.loadGuideResponse = function(c) {
            Fo || (Fo = c, R())
        }
    })();
    ND("apr");
    Xr("state-navigateend", function() {
        zo(gF)
    });
    xn(!0);
    lq(FD, function(a) {
        a.g()
    });
    window.addEventListener("beforeunload", function() {
        qn("u")
    });
    Object.assign(mq, {
        accountLinkCommand: gG,
        accountUnlinkCommand: kG,
        banAuthorAction: rF,
        commandExecutorCommand: mG,
        confirmDialogEndpoint: oG,
        createCommentAction: function(a, b) {
            (hF(b).items || []).unshift(a.contents);
            R()
        },
        createCommentReplyAction: function(a, b) {
            var c = hF(b).items || [],
                d = a.parentCommentId;
            d && (c = kF(d, c), c.replies || (c.replies = {
                commentRepliesRenderer: {}
            }), c.replies.commentRepliesRenderer.contents || (c.replies.commentRepliesRenderer.contents = []), c.replies.commentRepliesRenderer.contents.push(a.contents), R())
        },
        experimentsOptInAction: tF,
        experimentsOptOutAction: tF,
        getMultiPageMenuAction: function(a) {
            var b = D(function() {
                return a.menu.multiPageMenuRenderer
            });
            b && AC(b)
        },
        hideReportedCommentAction: function(a, b) {
            var c;
            (c = a.commentId) ? (c = c.replace("#", "."), c = c.split("."), c = c[1] ? c[0] : void 0) : c = void 0;
            a.parentCommentId = c;
            rF(a, b)
        },
        heartCommentCommand: sF,
        logYpcFlowDismissCommand: bo,
        logYpcFlowStartCommand: ao,
        navigateAction: zF,
        openPopupAction: WF,
        pinCommentAction: function(a, b) {
            var c = qF(b, a),
                d = c.Mb,
                e = c.update;
            c = c.commentId;
            e && d && c && (nF(d), oF(c, d), d.unshift(e), R())
        },
        playlistRemoveVideosAction: function(a, b) {
            var c = Iu(b.B, b.A, XF);
            if (c && c.contents) {
                var d = a.setVideoIds;
                c.contents = c.contents.filter(function(e) {
                    return !d.includes(E(function() {
                        return e.playlistVideoRenderer.setVideoId
                    }))
                });
                R()
            }
        },
        playlistDeletionRedirectCommand: function(a, b) {
            a.redirectEndpoint && pG(a.redirectEndpoint, b)
        },
        removeCommentAction: rF,
        refreshAccountLinkButtonCommand: function(a, b, c) {
            rG(c, {
                csn: kl()
            }).then(function(d) {
                var e = sG();
                e && (e.slimMetadataToggleButtonRenderer.button.toggleButtonRenderer = d.data.command.updateAccountLinkButtonCommand.toggleButtonRenderer.toggleButtonRenderer, R())
            }, function(d) {
                throw d;
            })
        },
        replaceEnclosingAction: function(a, b) {
            var c = Iu(b.B, b.A, $F);
            c && (yq(c, function() {
                ZF(a.item)
            }), R())
        },
        replaceFeedContentAction: function(a, b) {
            var c = Iu(b.B, b.A, aG);
            c && (c.contents = a.items, R())
        },
        signalAction: function(a, b) {
            "PAUSE_PLAYER" === a.signal ? D(function() {
                F().pauseVideo();
                2 === F().getVisibilityState() && F().toggleFullscreen()
            }) : "PLAY_PLAYER" === a.signal ? D(function() {
                return F().playVideo()
            }) : "RELOAD_PAGE" === a.signal ? setTimeout(function() {
                Q().reload(!0)
            }, 5) : "SUBMIT_FORM" === a.signal ? cG(b) : "OPEN_SEARCH_BAR" === a.signal && (Dt(), iq())
        },
        unheartCommentCommand: sF,
        unpinCommentAction: function(a, b) {
            var c = qF(b, a),
                d = c.Mb,
                e = c.update;
            c = c.commentId;
            e && d && c && (oF(c, d), 0 === d.length && d.unshift(e), R())
        },
        updateButtonAction: function(a, b) {
            var c = Iu(b.B, b.A, function(d) {
                if (d.buttonRenderer && b.A !== d.buttonRenderer) return d
            });
            c && (c.buttonRenderer = a.updatedButton.buttonRenderer, R())
        },
        updateCommentVoteAction: function(a, b) {
            var c = a.voteStatus,
                d = Iu(b.B, b.A, eG),
                e = E(function() {
                    return d.actionMenu.menuRenderer.items
                }),
                f = Ju(e, "voteStatus", "LIKE"),
                g = null;
            f && (g = Iu(e, f, fG));
            f = Ju(e, "voteStatus", "DISLIKE");
            var h = null;
            f && (h = Iu(e, f, fG));
            g && (g.isToggled = "LIKE" === c);
            h && (h.isToggled = "DISLIKE" === c);
            d && (d.voteCount = a.voteCount, d.voteStatus = c);
            R()
        },
        updatePlaylistHeaderAction: function(a, b) {
            Ku(b.B, "header").playlistHeaderRenderer = a.updatedHeader.playlistHeaderRenderer;
            R()
        },
        updateSubscribeButtonAction: function(a, b) {
            Ad(function() {
                Iu(b.B, b.A, function(c) {
                    return c.subscribeButtonRenderer
                }).subscribed = !!a.subscribed;
                R()
            })
        }
    });
    lq(nq, function(a) {
        var b = a.action;
        a = a.context;
        for (var c in b) {
            var d = mq[c];
            d ? d(b[c], a, b) : Lh(Error("Unknown action type:" + c))
        }
    });
    qq.push.apply(qq, ea([{
            commandType: "accountLinkCommand",
            l: gG
        }, {
            commandType: "accountUnlinkCommand",
            l: kG
        }, {
            commandType: "adChoicesDialogEndpoint",
            l: function(a) {
                a.adChoicesDialogEndpoint && a.adChoicesDialogEndpoint.dialog && (wF(a.adChoicesDialogEndpoint), tG(a.adChoicesDialogEndpoint.dialog))
            }
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
            l: function(a, b) {
                var c = b.B;
                c.response.engagementPanels && (0 < Uv.length && (clearTimeout(Vv), $v()), c.response.engagementPanels.filter(function(d) {
                    return d.engagementPanelSectionListRenderer.panelIdentifier == a.changeEngagementPanelVisibilityAction.targetId
                }).forEach(function(d) {
                    return d.engagementPanelSectionListRenderer.visibility =
                        a.changeEngagementPanelVisibilityAction.visibility
                }), R())
            }
        },
        {
            commandType: "channelCreationFormEndpoint",
            l: pG
        }, {
            commandType: "channelCreationServiceEndpoint",
            l: function(a, b) {
                var c = vG(a, b);
                return rG(a, {
                    given_name: c.givenNameValue,
                    family_name: c.familyNameValue
                }).then(function(d) {
                    var e = d.data;
                    d.code && "SUCCESS" == d.code && e ? e.createChannelError ? aw(function() {
                        V(e.createChannelError.errorMessage)
                    }) : e.navigationEndpoint && pG(e.navigationEndpoint, b) : aw(function() {
                        w(uG)
                    })
                })
            }
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
            l: function(a, b) {
                var c = xG(a, b);
                return c ? rG(a, {
                    comment_text: c
                }).then(function(d) {
                    wG(a, d, b)
                }) : Ud()
            }
        },
        {
            commandType: "createCommentReplyDialogEndpoint",
            l: function(a) {
                zG(a.createCommentReplyDialogEndpoint.dialog)
            }
        },
        {
            commandType: "createCommentReplyEndpoint",
            l: function(a, b) {
                var c = AG(a, b);
                return c ? rG(a, {
                    comment_text: c
                }).then(function(d) {
                    wG(a, d, b)
                }) : Ud()
            }
        },
        {
            commandType: "createPlaylistServiceEndpoint",
            l: function(a, b) {
                var c = JF;
                c = null !== c ? c : IG(b);
                return GG(a, b, {
                    create_playlist_title: IF,
                    create_playlist_privacy_status: c
                }).then(function() {
                    mw()
                }, function(d) {
                    d && d.response && d.response.errors && d.response.errors[0] && (HF = d.response.errors[0], EF && EF())
                })
            }
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
            l: function(a, b) {
                var c = JG(b) || MG(b) || {},
                    d = c.formData;
                return GG(a, b, c.form).then(function() {}, function(e) {
                    e && e.response && e.response.errors && e.response.errors[0] && d && (d._errorMessage = e.response.errors[0]);
                    R()
                })
            }
        },
        {
            commandType: "gamingAccountLinkConfirmDialogCommand",
            l: function(a) {
                SG(a.gamingAccountLinkConfirmDialogCommand.gamingAccountLinkConfirmDialog)
            }
        },
        {
            commandType: "gamingAccountLinkRedirectDialogCommand",
            l: function(a) {
                TG(a.gamingAccountLinkRedirectDialogCommand.redirectDialog)
            }
        },
        {
            commandType: "gamingAccountLinkSettingCommand",
            l: function(a) {
                ZG(a.gamingAccountLinkSettingCommand.gamingAccountLinkSetting)
            }
        },
        {
            commandType: "gamingMultipleAccountLinkDialogCommand",
            l: function(a) {
                dH(a.gamingMultipleAccountLinkDialogCommand.gamingMultipleAccountLinkDialog)
            }
        },
        {
            commandType: "getAccountsListEndpoint",
            l: GG
        }, {
            commandType: "getReportFormEndpoint",
            l: BH
        }, {
            commandType: "likeEndpoint",
            l: function(a, b) {
                var c = a.likeEndpoint.status,
                    d = Iu(b.B, b.A, eH);
                if (d) {
                    var e = gH(d, "LIKE");
                    d = gH(d, "DISLIKE");
                    e && (e.isToggled = "LIKE" == c);
                    d && (d.isToggled = "DISLIKE" == c);
                    R()
                }
                hH(a, b);
                return GG(a, b)
            }
        },
        {
            commandType: "logYpcFlowDismissCommand",
            l: bo
        }, {
            commandType: "logYpcFlowStartCommand",
            l: ao
        }, {
            commandType: "loopCommand",
            l: function(a) {
                var b = F();
                b && (a.loopCommand.loop ? b.setLoopRange({
                    startTimeMs: a.loopCommand.startTimeMs,
                    endTimeMs: a.loopCommand.endTimeMs
                }) : b.setLoopRange(null))
            }
        },
        {
            commandType: "managePurchaseEndpoint",
            l: function(a) {
                var b = D(function() {
                    return a.managePurchaseEndpoint.content.sponsorshipConfirmCancelRenderer
                });
                sw({
                    header: b.title && function() {
                        ap(null, function() {
                            V(b.title)
                        })
                    },
                    content: b.description && function() {
                        ip(null, function() {
                            V(b.description)
                        })
                    },
                    buttons: function() {
                        jH(b.confirmButton)
                    },
                    data: b
                })
            }
        },
        {
            commandType: "menuEndpoint",
            l: function(a) {
                var b = D(function() {
                    return a.menuEndpoint.menu.menuRenderer
                });
                ws(b)
            }
        },
        {
            commandType: "modalEndpoint",
            l: function(a) {
                nH(a.modalEndpoint.modal)
            }
        },
        {
            commandType: "modifyReportFormCommand",
            l: function(a, b) {
                var c = Iu(b.B, b.A, oH);
                switch (a.modifyReportFormCommand.action) {
                    case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_SHOW":
                        c._showLegalReportCheckbox = !0;
                        c._canShowNextButton = !1;
                        c._legalCheckboxChecked = !1;
                        break;
                    case "REPORT_FORM_ACTION_LEGAL_CHECKBOX_HIDE":
                        c._showLegalReportCheckbox = !1;
                        c._canShowNextButton = !1;
                        c._legalCheckboxChecked = !1;
                        break;
                    case "REPORT_FORM_ACTION_SUBMIT_BUTTON_SHOW":
                        c._canShowNextButton = !1;
                        break;
                    case "REPORT_FORM_ACTION_NEXT_BUTTON_SHOW":
                        c._canShowNextButton = !0
                }
                R()
            }
        },
        {
            commandType: "navigateAction",
            l: function(a, b) {
                a.navigateAction && zF(a.navigateAction, b)
            }
        },
        {
            commandType: "navigationEndpoint",
            l: pG
        }, {
            commandType: "nativeAppDeeplinkEndpoint",
            l: function(a) {
                window.location = a.nativeAppDeeplinkEndpoint.url
            }
        },
        {
            commandType: "offlineVideosEndpoint",
            l: function() {
                rH()
            }
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
            l: function(a, b, c) {
                return rG(a, c).then(function(d) {
                    wG(a, DG(d), b);
                    var e = E(function() {
                        return d.data.redirectEndpoint
                    });
                    e && S(e, d.data, !1)
                }, function(d) {
                    aw(function() {
                        w(sH)
                    });
                    throw d;
                })
            }
        },
        {
            commandType: "playlistEditorEndpoint",
            l: function(a, b) {
                return GG(a, b).then(function(c) {
                    zH(c.data.playlistSettingsEditor)
                })
            }
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
            l: function(a) {
                var b = D(function() {
                    return a.setClientSettingEndpoint.settingDatas
                });
                if (b && b.length) {
                    var c = om.K();
                    b.forEach(function(d) {
                        switch (d.clientSettingEnum.item) {
                            case "DARK_THEME":
                                return tm(165, !!d.boolValue), tm(174, !d.boolValue), c.save(), wq(a), d = CH().href, d = Ee(d, {
                                    category: "SETTING_CAT_ACCOUNT_MWEB"
                                }), sc(CH(), d), Ud();
                            case "I18N_LANGUAGE":
                                return c.set("hl", d.stringValue), c.save(), wq(a), ms().then(function() {
                                    return CH().reload()
                                });
                            case "I18N_REGION":
                                c.set("gl", d.stringValue);
                                c.save();
                                wq(a);
                                var e = CH().href;
                                e = Ee(e, {
                                    gl: d.stringValue,
                                    persist_gl: "1"
                                });
                                return ms().then(function() {
                                    return sc(CH(), e)
                                });
                            case "SAFETY_MODE":
                                return tm(58, !!d.boolValue), c.save(), wq(a), Ud();
                            default:
                                throw Error("Unhandled client preference: " + d.clientSettingEnum.item);
                        }
                    })
                }
            }
        },
        {
            commandType: "setSettingEndpoint",
            l: function(a, b) {
                "EMAIL_LANGUAGE" === a.setSettingEndpoint.settingItemIdForClient && EH(b);
                return GG(a, b)
            }
        },
        {
            commandType: "shareEndpoint",
            l: function(a) {
                JH(a.shareEndpoint.sharingRenderer)
            }
        },
        {
            commandType: "signInEndpoint",
            l: function(a, b) {
                pG(a, b)
            }
        },
        {
            commandType: "signalServiceEndpoint",
            l: function(a, b) {
                return "CLIENT_SIGNAL" == a.signalServiceEndpoint.signal ? (wG(a, {}, b), Ud()) : GG(a, b)
            }
        },
        {
            commandType: "subscribeEndpoint",
            l: LH
        }, {
            commandType: "unlimitedCreateFamilyEndpoint",
            l: function(a, b) {
                var c = a.unlimitedCreateFamilyEndpoint,
                    d = c.serializedYpcFamilyCreateLoggingParams;
                QH = setTimeout(function() {
                    var f = c.postFlowErrorEndpoint;
                    clearTimeout(QH);
                    RH();
                    d && Nn(d);
                    f && S(f, {}, !0)
                }, 3E4);
                var e = Iu(b.B, b.A, EG);
                FG(e, !0);
                OH = document.createElement("ytm-unicorn-iframe");
                OH.setAttribute("hidden", "");
                document.body.appendChild(OH);
                PH = document.createElement("div");
                OH.appendChild(PH);
                d && d && An("ypcFamilyCreateFlowStarted", d);
                vl(function() {
                    var f = r("gapi.family_creation.render");
                    r("gapi.config.update")("iframes/family_creation/url", y("YTR_FAMILY_CREATION_URL", void 0));
                    var g = 3;
                    c.appId && c.appId in NH && (g = NH[c.appId]);
                    g = {
                        authUser: y("SESSION_INDEX") || 0,
                        clientId: g,
                        darkmode: document.documentElement.hasAttribute("dark") ?
                            1 : 0,
                        hl: y("HTML_LANG", "en"),
                        initialflow: [4, 5, 6, 7],
                        m: 1,
                        onFlowComplete: function() {
                            var h = c.postFlowSuccessEndpoint;
                            RH();
                            d && d && An("ypcFamilyCreateFlowSucceeded", d, void 0, void 0, void 0);
                            h && S(h, {}, !0)
                        },
                        onError: function() {
                            var h = c.postFlowErrorEndpoint;
                            RH();
                            d && Nn(d);
                            h && S(h, {}, !0)
                        },
                        onReady: function() {
                            var h = c.referencePcidParams;
                            clearTimeout(QH);
                            Sx();
                            OH && (OH.removeAttribute("hidden"), es(OH, !0, !0));
                            h && r("gapi.family_creation.setConfig")(0, h)
                        }
                    };
                    f(PH, g)
                })
            }
        },
        {
            commandType: "unlimitedFamilyFlowEndpoint",
            l: function(a) {
                E(function() {
                    return a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint
                }) ? SH(a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers, {
                    xa: !0
                }) : SH(a.unlimitedFamilyFlowEndpoint.unlimitedFamilyFlowEndpointSupportedRenderers)
            }
        },
        {
            commandType: "unsubscribeEndpoint",
            l: LH
        }, {
            commandType: "uploadEndpoint",
            l: pG
        }, {
            commandType: "urlEndpoint",
            l: function(a) {
                a = a.urlEndpoint;
                Xs(a.url, void 0, void 0, "TARGET_NEW_WINDOW" == a.target ? "_blank" : "")
            }
        },
        {
            commandType: "userFeedbackEndpoint",
            l: function() {
                ZB()
            }
        },
        {
            commandType: "verifyAgeEndpoint",
            l: GG
        }, {
            commandType: "watchEndpoint",
            l: pG
        }, {
            commandType: "ypcCancelRecurrenceEndpoint",
            l: function(a, b) {
                var c = Iu(b.B, b.A, EG);
                FG(c, !0);
                hs("ypc-cancel-recurrence", function() {}, {
                    S: !0
                });
                return rG(a).then(function(d) {
                    js();
                    FG(c, !1);
                    if (!d.code || "ERROR" === d.code || d.data.messageRenderer) Hn(a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams);
                    else {
                        var e = a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams;
                        e && yn("ypcCancelFlowSucceeded", "serializedYpcCancelFlowLoggingParams", e)
                    }
                    wG(a, DG(d), b)
                }, function(d) {
                    js();
                    FG(c, !1);
                    Hn(a.ypcCancelRecurrenceEndpoint.serializedYpcCancelFlowLoggingParams);
                    throw d;
                })
            }
        },
        {
            commandType: "ypcCompleteTransactionEndpoint",
            l: function(a, b) {
                var c = Iu(b.B, b.A, EG);
                hs("ypc-complete-transaction", function() {}, {
                    S: !0
                });
                a.ypcCompleteTransactionEndpoint.gtmData && $n(a.ypcCompleteTransactionEndpoint.gtmData);
                return rG(a).then(function(d) {
                    js();
                    Sx();
                    FG(c, !1);
                    !d.code || "ERROR" === d.code || d.data && "YPC_RESPONSE_CODE_ERROR" == d.data.ypcResponseCode ? En("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE", a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams) : ($n('{"event": "purchased", "purchaseStatus": "success"}'), Dn(a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams));
                    wG(a, DG(d),
                        b);
                    var e = E(function() {
                        return d.data.actions
                    });
                    e && Yn(e).forEach(function(f) {
                        return S(f, b.A, !1)
                    })
                }, function(d) {
                    js();
                    Sx();
                    En("TRANSACTION_ERROR_TYPE_YPC_COMPLETE_TRANSACTION_RPC_FAILURE", a.ypcCompleteTransactionEndpoint.serializedTransactionFlowLoggingParams);
                    FG(c, !1);
                    throw d;
                })
            }
        },
        {
            commandType: "ypcFixInstrumentEndpoint",
            l: function(a, b) {
                if (a.ypcFixInstrumentEndpoint) {
                    var c = a.ypcFixInstrumentEndpoint;
                    if (c.encryptedFixInstrumentParameters) {
                        var d = c.encryptedFixInstrumentParameters.replace(/-/g, "+").replace(/_/g, "/");
                        Mn("FIX_FOP_EVENT_TYPE_START", c.serializedFixFopLoggingParams);
                        Sn(d, function(e, f) {
                            var g = r("payments.business.integration.scenario.FixInstrument.OnCompleteCallbackError.USER_CANCELLED");
                            e == r("payments.business.integration.scenario.FixInstrument.IntegratorCallbackType.ON_COMPLETE") &&
                                (f && f.error ? f.error == g ? Mn("FIX_FOP_EVENT_TYPE_CANCEL", c.serializedFixFopLoggingParams) : (Mn("FIX_FOP_EVENT_TYPE_FAILURE", c.serializedFixFopLoggingParams, "FIX_FOP_ERROR_TYPE_UNSPECIFIED"), c.errorAction && oq(c.errorAction, b)) : (Mn("FIX_FOP_EVENT_TYPE_SUCCESS", c.serializedFixFopLoggingParams), c.successAction && oq(c.successAction, b)))
                        }, function() {
                            Mn("FIX_FOP_EVENT_TYPE_FAILURE", c.serializedFixFopLoggingParams, "FIX_FOP_ERROR_TYPE_LOAD_FAILURE")
                        })
                    } else Lh(Error("encryptedFixInstrumentParameters not present."))
                }
            }
        },
        {
            commandType: "ypcGetCartEndpoint",
            l: function(a, b) {
                YH(a);
                if (a.ypcGetCartEndpoint.prefetchConfig) {
                    var c = a.ypcGetCartEndpoint.prefetchConfig.ypcGetCartPrefetchResponseDataConfig,
                        d = c.encryptedPurchaseParams,
                        e = c.completeTransactionEndpoint,
                        f = c.serializedTransactionFlowLoggingParams;
                    c = c.ypcLogWalletAnalyticDataEndpoint;
                    d = {
                        data: {
                            offerParams: window.btoa(a.ypcGetCartEndpoint.offerParams),
                            completeTransactionEndpoint: e,
                            serializedTransactionFlowLoggingParams: f,
                            encryptedPurchaseParams: d,
                            ypcLogWalletAnalyticDataEndpoint: c
                        }
                    };
                    return VH(d, b)
                }
                var g = Iu(b.B, b.A, EG);
                FG(g, !0);
                hs("ypc-get-cart", function() {}, {
                    S: !0
                });
                return rG(a).then(function(h) {
                    FG(g, !1);
                    js();
                    Sx();
                    h.code && "ERROR" !== h.code || Lh(Error("ypc get cart failed at innertube."));
                    VH(h, b)
                }, function(h) {
                    js();
                    Sx();
                    FG(g, !1);
                    throw h;
                })
            }
        },
        {
            commandType: "ypcGetOffersEndpoint",
            l: function(a, b) {
                var c = Iu(b.B, b.A, function(d) {
                    return d.buttonRenderer
                });
                FG(c, !0);
                hs("ypc-get-offers-endpoint-handler", function() {}, {
                    S: !0
                });
                return rG(a).then(function(d) {
                    js();
                    FG(c, !1);
                    d.code && "ERROR" !== d.code ? (bI(d.data.offers), wG(a, DG(d), b)) : Lh(Error("ypc get offers failed at innertube."))
                }, function(d) {
                    FG(c, !1);
                    throw d;
                })
            }
        },
        {
            commandType: "ypcPauseMembershipDialogCommand",
            l: function(a) {
                fI(a.ypcPauseMembershipDialogCommand.ypcPauseMembershipDialogRenderer)
            }
        },
        {
            commandType: "ypcPauseSubscriptionCommand",
            l: function(a, b) {
                var c = Iu(b.B, a, gI)._resumeTimeMs,
                    d = Iu(b.B, b.A, EG);
                FG(d, !0);
                hs("ypc-pause-subscription", function() {}, {
                    S: !0
                });
                return rG(a, {
                    resume_time_ms: c
                }).then(function(e) {
                    e.code && "ERROR" !== e.code ? Kn(D(function() {
                        return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams
                    })) : Ln(D(function() {
                        return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams
                    }));
                    wG(a, e, b);
                    FG(d, !1);
                    js()
                }, function(e) {
                    Ln(D(function() {
                        return a.ypcPauseSubscriptionCommand.serializedYpcPauseFlowLoggingParams
                    }));
                    FG(d, !1);
                    js();
                    throw e;
                })
            }
        },
        {
            commandType: "ypcRedeemCodeEndpoint",
            l: kI
        }, {
            commandType: "ypcResumeSubscriptionCommand",
            l: function(a, b) {
                var c = Iu(b.B, b.A, EG);
                FG(c, !0);
                hs("ypc-resume-subscription", function() {}, {
                    S: !0
                });
                return rG(a).then(function(d) {
                    d.code && "ERROR" !== d.code ? In(D(function() {
                        return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams
                    })) : Jn(D(function() {
                        return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams
                    }));
                    wG(a, d, b);
                    FG(c, !1);
                    js()
                }, function(d) {
                    Jn(D(function() {
                        return a.ypcResumeSubscriptionCommand.serializedYpcResumeFlowLoggingParams
                    }));
                    FG(c, !1);
                    js();
                    throw d;
                })
            }
        }
    ]));
    lq(rq, function(a) {
        uq(a.command, a.A)
    });
    ax("channelCreationFormRenderer", function(a, b) {
        T(a, "ytm-channel-creation-form-renderer", b, function() {
            $o(null, function() {
                V(a.title)
            });
            TI(a.contents);
            I({
                className: "ytm-channel-creation-form-renderer-buttons"
            }, function() {
                for (var c = ba(a.buttons), d = c.next(); !d.done; d = c.next()) d = d.value, TI(d, d.buttonRenderer.serviceEndpoint ? void 0 : {
                    V: function() {
                        return $r()
                    }
                })
            })
        })
    });
    ax("commentSectionRenderer", hJ);
    ax("cardItemRenderer", function(a) {
        var b = {
                className: QI(a)
            },
            c = {};
        c.className = RI(a);
        a.onTap && (c.onclick = function() {
            a.onTap && S(a.onTap, a, !1)
        });
        T(a, "ytm-card-item-renderer", b, function() {
            I(c, function() {
                I({
                    className: "card-item-heading-description-container"
                }, function() {
                    a.headingRenderer && LI(a.headingRenderer);
                    a.descriptionRenderer && LI(a.descriptionRenderer)
                });
                a.additionalInfoRenderer && I({
                    className: SI(a)
                }, function() {
                    LI(a.additionalInfoRenderer)
                })
            });
            a.errorRenderer && LI(a.errorRenderer);
            a.dividerStyle && oI({
                dividerStyle: a.dividerStyle
            })
        })
    });
    ax("donationAmountPickerRenderer", function(a) {
        var b = null,
            c = null;
        sw({
            header: function() {
                I({
                    className: "donation-amount-picker-header"
                }, function() {
                    a.campaignThumbnail && Y(a.campaignThumbnail, {
                        className: "donation-amount-picker-campaign-thumbnail",
                        alt: ""
                    });
                    ap({
                        className: "donation-amount-picker-title"
                    }, function() {
                        V(a.pickerTitle)
                    })
                })
            },
            content: function() {
                I({
                    className: "donation-amount-picker-line-item"
                }, function() {
                    V(a.nonprofitTitle)
                });
                I({
                    className: "donation-amount-picker-nonprofit-subtitle"
                }, function() {
                    V(a.nonprofitSubtitle)
                });
                I({
                    className: "donation-amount-picker-buttons donation-amount-picker-line-item"
                }, function(d) {
                    var e = !1,
                        f = !1,
                        g = kJ(a);
                    a.suggestedAmounts.forEach(function(h) {
                        var l = !1;
                        void 0 === h.amountMicros ? (l = !e && void 0 != g, lJ(d, null, l), f = !0) : (l = g === h.amountMicros, e = e || l);
                        Wx({
                            checked: l,
                            onchange: function() {
                                var n = parseInt(h.amountMicros, 10);
                                jJ(c, a, n);
                                lJ(d, b, isNaN(n))
                            }
                        }, {
                            name: null,
                            ua: function() {
                                V(h.label)
                            }
                        })
                    });
                    I({
                        className: "donation-amount-picker-custom"
                    }, function(h) {
                        I({
                            className: "donation-amount-picker-edit"
                        }, function() {
                            V(a.currencySymbol);
                            var l = parseFloat(g) / 1E6;
                            fp({
                                className: "donation-amount-picker-input",
                                id: null,
                                type: "number",
                                maxlength: 10,
                                value: isNaN(l) ? "" : l,
                                oninput: function(n) {
                                    var q = n.target;
                                    n = c;
                                    if ("" == q.value) jJ(n, a, NaN);
                                    else {
                                        q = Math.floor(1E6 * parseFloat(q.value));
                                        if (q < parseFloat(a.minAmountMicros) || q > parseFloat(a.maxAmountMicros)) q = NaN;
                                        jJ(n, a, q);
                                        isNaN(q) ? ng(h, "error") : og(h, "error")
                                    }
                                },
                                required: !0
                            }, function(n) {
                                b = n;
                                f && n.focus()
                            })
                        });
                        I({
                            className: "donation-amount-picker-error"
                        }, function() {
                            V(a.amountError)
                        })
                    })
                })
            },
            buttons: function() {
                Aq({}, null, function() {
                    w(G.P)
                });
                I({
                    className: "donation-amount-picker-continue"
                }, function(d) {
                    c = d;
                    iJ(a.donateButton);
                    d.firstChild.firstChild.disabled = isNaN(parseFloat(kJ(a)))
                })
            },
            data: a
        })
    });
    ax("donationPostTransactionRenderer", function(a) {
        sw({
            header: function() {
                a.donationIcon && I({}, function() {
                    Y(a.donationIcon, {
                        className: "donation-post-transaction-icon",
                        alt: ""
                    })
                });
                ap({
                    className: "donation-post-transaction-title"
                }, function() {
                    V(a.thankYouMessage)
                });
                I({
                    className: "donation-post-transaction-title"
                }, function() {
                    V(a.additionalInfo)
                })
            },
            content: function() {
                I({
                    className: "donation-post-transaction-creator-message"
                }, function() {
                    a.creatorMessage.thumbnail && vr(a.creatorMessage.thumbnail, {
                        className: "donation-post-transaction-avatar",
                        alt: ""
                    });
                    I({
                        className: "donation-post-transaction-message-right"
                    }, function() {
                        cp({
                            className: "donation-post-transaction-message"
                        }, function() {
                            V(a.creatorMessage.description)
                        });
                        I({}, function() {
                            V(a.creatorMessage.title)
                        })
                    })
                })
            },
            buttons: function() {
                I({
                    className: "donation-post-transaction-button"
                }, function() {
                    mJ(a.shareButton)
                });
                I({
                    className: "donation-post-transaction-button"
                }, function() {
                    mJ(a.doneButton)
                })
            },
            data: a
        })
    });
    ax("donationShelfRenderer", pJ);
    ax("gamingAccountLinkConfirmDialogRenderer", RG);
    ax("gamingAccountLinkSettingRenderer", YG);
    ax("gamingMultipleAccountLinkDialogRenderer", cH);
    ax("mealbarPromoRenderer", function(a, b) {
        T(a, "ytm-mealbar-promo-renderer", b, function(c) {
            DB({
                className: "mealbar-promo-renderer",
                iconImage: a.alternateIcon,
                texts: a.messageTexts,
                qc: a.icon,
                title: a.messageTitle,
                triggerCondition: a.triggerCondition,
                isCounterfactual: !a.isVisible,
                trackingParams: a.trackingParams,
                Yb: function() {
                    Bo(c, "_impressionData", a, function() {
                        return rJ(a)
                    })
                },
                buttons: function() {
                    I({
                        className: "mealbar-promo-buttons",
                        onclick: function(d) {
                            id(d.target, "button") && (yq(a, Fa), HB())
                        }
                    }, function() {
                        sJ(a.dismissButton);
                        sJ(a.actionButton)
                    })
                }
            })
        })
    });
    ax("membershipPostCancelRenderer", function(a) {
        sw({
            header: a.header && function() {
                I({
                    className: "membership-post-cancel-renderer-header"
                }, function() {
                    V(a.header)
                })
            },
            content: a.messages && function() {
                ip({
                    className: "membership-post-cancel-renderer-messages"
                }, function() {
                    a.messages.forEach(function(b) {
                        V(b)
                    })
                })
            },
            buttons: function() {
                QJ(a.okayButton)
            },
            data: a
        })
    });
    ax("modalWithTitleAndButtonRenderer", mH);
    ax("musicPassFeatureInfoRenderer", function(a, b) {
        T(a, "ytm-music-pass-feature-info-renderer", b, function() {
            I({
                className: "music-pass-feature-info-content"
            }, function() {
                ap({
                    className: "music-pass-feature-info-header"
                }, function() {
                    V(a.header)
                });
                I({
                    className: "music-pass-feature-info-description"
                }, function() {
                    V(a.description)
                })
            });
            a.image && Y(a.image, {
                alt: "",
                className: "music-pass-feature-info-thumbnail"
            })
        })
    });
    ax("musicPassSmallFeatureInfoRenderer", function(a) {
        T(a, "ytm-music-pass-small-feature-info-renderer", {
            className: "music-pass-small-feature"
        }, function() {
            a.icon && Y(a.icon, {
                alt: "",
                className: "music-pass-small-feature-thumbnail"
            });
            I({
                className: "music-pass-small-feature-description"
            }, function() {
                ap({
                    className: "music-pass-small-feature-header"
                }, function() {
                    V(a.header)
                });
                I({
                    className: "music-pass-small-feature-description-details"
                }, function() {
                    V(a.description)
                })
            })
        })
    });
    ax("offerItemRenderer", function(a) {
        T(a, "ytm-offer-item-renderer", null, function() {
            a.imageRenderer && tJ(a.imageRenderer, {
                Yd: !0
            });
            a.headingRenderer && tJ(a.headingRenderer, {
                className: "offer-item-heading"
            });
            a.descriptionRenderer && tJ(a.descriptionRenderer, {
                className: "offer-item-description"
            });
            a.additionalInfoRenderer && tJ(a.additionalInfoRenderer, {
                className: "offer-item-additionalinfo"
            })
        })
    });
    ax("offerItemUpsellRenderer", function(a) {
        T(a, "ytm-offer-item-upsell-renderer", {
            className: vJ(a)
        }, function() {
            a.imageRenderer && uJ(a.imageRenderer);
            a.headingRenderer && uJ(a.headingRenderer, {
                className: "offer-upsell-heading-renderer"
            });
            a.priceRenderer && uJ(a.priceRenderer, {
                className: "offer-upsell-price-renderer"
            });
            a.descriptionRenderer && uJ(a.descriptionRenderer, {
                className: "offer-upsell-description-renderer"
            });
            a.actionsRenderer && uJ(a.actionsRenderer)
        })
    });
    ax("redeemCodeRenderer", zJ);
    ax("reportDetailsFormRenderer", function(a) {
        a.timestampLabel && CJ(a);
        a.submitButton.buttonRenderer.isDisabled = !1;
        sw({
            header: function() {
                ap(null, function() {
                    V(a.title)
                })
            },
            content: function() {
                a.timestampLabel && RF(a, {
                    Xb: a.timestampLabel,
                    minutes: a._minutes,
                    seconds: a._seconds,
                    Zb: function(b) {
                        a._minutes = b;
                        BJ(a)
                    },
                    nc: function(b) {
                        a._seconds = b;
                        BJ(a)
                    }
                });
                lp({
                    className: "report-details-form-description-input",
                    maxlength: 500,
                    rows: 4,
                    required: !0,
                    placeholder: Hr(a.descriptionHint),
                    oninput: function(b) {
                        a._flag_description = b.target.value;
                        BJ(a)
                    }
                });
                I({
                    className: "report-details-form-footer"
                }, function() {
                    V(a.footer)
                })
            },
            buttons: function() {
                AJ(a.cancelButton);
                AJ(a.submitButton)
            },
            data: a
        })
    });
    ax("reportFormModalRenderer", function(a) {
        a.submitButton.buttonRenderer.serviceEndpoint = OJ();
        a.nextButton && (a.nextButton.buttonRenderer.serviceEndpoint = OJ());
        sw({
            header: function() {
                ap(null, function() {
                    V(a.title)
                })
            },
            content: function() {
                PJ(a.optionsSupportedRenderers, {
                    onchange: function() {
                        var b = a.optionsSupportedRenderers.optionsRenderer._selectedValue || a.optionsSupportedRenderers.optionsRenderer._selectedNavigationValue || a.optionsSupportedRenderers.optionsRenderer._selectedDialog,
                            c = a.submitButton.buttonRenderer.isDisabled;
                        a.submitButton.buttonRenderer.isDisabled = !b;
                        a.nextButton && (a.nextButton.buttonRenderer.isDisabled = !b);
                        c != a.submitButton.buttonRenderer.isDisabled && R()
                    }
                });
                a.footer && I({
                    className: "report-form-footer"
                }, function() {
                    V(a.footer)
                });
                a._showLegalReportCheckbox && PJ(a.legalReportCheckbox, {
                    className: "report-form-legal-report-checkbox",
                    onchange: function(b) {
                        a._legalCheckboxChecked = b.target.checked
                    }
                })
            },
            buttons: function() {
                PJ(a.cancelButton);
                a._canShowNextButton ? PJ(a.nextButton) : PJ(a.submitButton)
            },
            data: a
        })
    });
    ax("sponsorshipsCelebrationRenderer", function(a) {
        Qx("ytm-sponsorships-celebration-renderer", function() {
            SJ(a.header);
            I({
                className: "content"
            }, function() {
                SJ(a.contents)
            });
            I({
                className: "button-bar"
            }, function() {
                I({
                    onclick: function() {
                        return Sx()
                    }
                }, function() {
                    SJ(a.primaryButton)
                })
            })
        })
    });
    ax("surveyFollowUpRenderer", function(a) {
        YJ(a, function() {
            T(a, "ytm-survey-follow-up-renderer", null, function() {
                I({
                    className: "ytm-survey-follow-up-header",
                    tabIndex: "-1"
                }, function(b) {
                    V(a.description);
                    b.focus()
                });
                I({
                    className: "ytm-survey-follow-up-button"
                }, function() {
                    aK(a.followUpButton)
                })
            })
        }, null, void 0, !0)
    });
    ax("surveyTriggerRenderer", function(a, b) {
        T(a, "ytm-survey-trigger-renderer", b, function() {
            iK(a.survey)
        })
    });
    ax("subscriptionProductRenderer", function(a, b) {
        T(a, "ytm-subscription-product-renderer", b, function() {
            a.logo && Y(a.logo, {
                className: "subscription-product-logo",
                "aria-label$": zq(a.logo.accessibility) || ""
            });
            TJ(a.menu);
            I({
                className: "subscription-product-metadatas"
            }, function() {
                var c = a.metadatas;
                c && c.forEach(function(d) {
                    I({
                        className: "subscription-product-metadata-item"
                    }, function() {
                        V(d)
                    })
                })
            });
            I({
                className: "subscription-product-additional-infos"
            }, function() {
                var c = a.additionalInfos;
                c && c.forEach(function(d) {
                    I({
                        className: "subscription-product-additional-info-item"
                    }, function() {
                        V(d)
                    })
                })
            });
            I({
                className: "subscription-product-primary-button"
            }, function() {
                TJ(a.primaryButton)
            })
        })
    });
    ax("subscriptionProductUpsellOfferRenderer", function(a, b) {
        T(a, "ytm-subscription-product-upsell-offer-renderer", b, function() {
            var c = er(D(function() {
                return a.image
            }));
            I({
                className: "subscription-product-upsell-image",
                style$: "background-image: url(" + c + ");"
            }, function() {
                var d = a.imageScrimColorValues ? un(a.imageScrimColorValues[0]) : "transparent";
                I({
                    className: "subscription-product-upsell-scrim",
                    style$: "background-color: " + d
                }, function() {
                    a.logo && Y(a.logo, {
                        className: "subscription-product-upsell-logo",
                        "aria-label$": zq(a.logo.accessibility) || ""
                    })
                })
            });
            I({
                className: "subscription-product-upsell-info"
            }, function() {
                I({
                    className: "subscription-product-upsell-title"
                }, function() {
                    V(a.title)
                });
                I({
                    className: "subscription-product-upsell-description"
                }, function() {
                    V(a.description)
                });
                a.additionalInfos && a.additionalInfos.forEach(function(d) {
                    I({
                        className: "subscription-product-upsell-additional-infos"
                    }, function() {
                        V(d)
                    })
                });
                UJ(a.primaryButton)
            })
        })
    });
    ax("universalWatchCardRenderer", yK);
    ax("unlimitedFamilyProfileInterstitialRenderer", function(a) {
        Qx("ytm-unlimited-family-profile-interstitial-renderer", function() {
            I({
                className: "unlimited-family-interstitial-content-container"
            }, function() {
                I({
                    className: "unlimited-family-interstitial-member-container"
                }, function() {
                    a.mainThumbnail && Y(a.mainThumbnail, {
                        className: "unlimited-family-profile-main-thumbnail",
                        alt: ""
                    });
                    CK(a.secondaryThumbnails);
                    I({
                        className: "unlimited-family-interstitial-member-info"
                    }, function() {
                        V(a.memberInfo)
                    });
                    I({
                        className: "unlimited-family-interstitial-member-title"
                    }, function() {
                        V(a.memberTitle)
                    });
                    I({
                        className: "unlimited-family-interstitial-manage-button"
                    }, function() {
                        zK(a.manageButton)
                    })
                });
                I({
                    className: "unlimited-family-interstitial-title"
                }, function() {
                    V(a.additionalInfoHeader)
                });
                I({
                    className: "unlimited-family-interstitial-content"
                }, function() {
                    V(a.additionalInfo)
                })
            });
            I({
                className: "unlimited-family-interstitial-buttons-container"
            }, function() {
                AK(a.dismissButton, a.actionButton)
            })
        })
    });
    ax("unlimitedFamilyMessageInterstitialRenderer", Vx);
    ax("unlimitedPageHeaderRenderer", function(a, b) {
        T(a, "ytm-unlimited-page-header-renderer", b, function() {
            var c = E(function() {
                    return a.unlimitedHeaderV2Data.unlimitedHeaderV2Data
                }),
                d = er(JK(c ? Vq() && c.backgroundThumbnailLargeFactor ? c.backgroundThumbnailLargeFactor : c.backgroundThumbnailSmallFactor ? c.backgroundThumbnailSmallFactor : null : null)),
                e = DK(c.scrimLayerColors);
            I({
                className: "unlimited-page-header",
                style$: "background-image: " + e + "url(" + d + ");"
            }, function() {
                var f = JK(c.logoThumbnail);
                f && GK(f, a.pageTitle);
                I({
                    className: "unlimited-page-header-subtitle"
                }, function() {
                    V(a.subTitle)
                });
                I({
                    className: "unlimited-page-header-button"
                }, function() {
                    FK(a.manageSubscriptionButton)
                });
                HK(a.metadatas);
                a.promotion && a.promotion.ypcPromotionRenderer && a.promotion.ypcPromotionRenderer.promotionText && IK(E(function() {
                    return a.promotion.ypcPromotionRenderer.promotionText
                }))
            })
        })
    });
    ax("watchMetadataAppPromoRenderer", function(a, b) {
        T(a, "ytm-watch-metadata-app-promo-renderer", b, function() {
            Y(a.image, {
                className: "watch-metadata-app-promo-thumb",
                alt: ""
            });
            I({
                className: "watch-metadata-app-promo-content"
            }, function() {
                bp({}, function() {
                    return V(a.title)
                });
                I({
                    className: "secondary-text subhead"
                }, function() {
                    return V(a.subtitle)
                })
            });
            I({
                className: "watch-metadata-app-promo-button"
            }, function() {
                KK(a.button)
            })
        })
    });
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
        } else navigator.serviceWorker.getRegistrations().then(function(a) {
            a.forEach(WK)
        });
}).call(this);