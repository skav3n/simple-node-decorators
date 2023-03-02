const Ae = (i) => (u, c, h) => {
  const w = h.value;
  h.value = (...y) => {
    const [v, m] = y, b = v.headers;
    if (b && b.authorization === `Bearer ${i}`)
      return w.apply(void 0, y);
    m.status(401).json({ error: "Not Authorized" });
  };
};
var ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var re;
(function(i) {
  (function(u) {
    var c = typeof ne == "object" ? ne : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), h = w(i);
    typeof c.Reflect > "u" ? c.Reflect = i : h = w(c.Reflect, h), u(h);
    function w(y, v) {
      return function(m, b) {
        typeof y[m] != "function" && Object.defineProperty(y, m, { configurable: !0, writable: !0, value: b }), v && v(m, b);
      };
    }
  })(function(u) {
    var c = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", w = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", y = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", m = { __proto__: [] } instanceof Array, b = !v && !m, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return B(/* @__PURE__ */ Object.create(null));
      } : m ? function() {
        return B({ __proto__: null });
      } : function() {
        return B({});
      },
      has: b ? function(e, t) {
        return c.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: b ? function(e, t) {
        return c.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, A = Object.getPrototypeOf(Function), I = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", S = !I && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), j = !I && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ee(), F = !I && typeof WeakMap == "function" ? WeakMap : Oe(), k = new F();
    function E(e, t, n, r) {
      if (p(n)) {
        if (!X(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return he(e, t);
      } else {
        if (!X(e))
          throw new TypeError();
        if (!_(t))
          throw new TypeError();
        if (!_(r) && !p(r) && !P(r))
          throw new TypeError();
        return P(r) && (r = void 0), n = R(n), ye(e, t, n, r);
      }
    }
    u("decorate", E);
    function O(e, t) {
      function n(r, a) {
        if (!_(r))
          throw new TypeError();
        if (!p(a) && !me(a))
          throw new TypeError();
        Q(e, t, r, a);
      }
      return n;
    }
    u("metadata", O);
    function W(e, t, n, r) {
      if (!_(n))
        throw new TypeError();
      return p(r) || (r = R(r)), Q(e, t, n, r);
    }
    u("defineMetadata", W);
    function ie(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = R(n)), N(e, t, n);
    }
    u("hasMetadata", ie);
    function ue(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = R(n)), z(e, t, n);
    }
    u("hasOwnMetadata", ue);
    function se(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = R(n)), $(e, t, n);
    }
    u("getMetadata", se);
    function fe(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = R(n)), H(e, t, n);
    }
    u("getOwnMetadata", fe);
    function ce(e, t) {
      if (!_(e))
        throw new TypeError();
      return p(t) || (t = R(t)), Y(e, t);
    }
    u("getMetadataKeys", ce);
    function le(e, t) {
      if (!_(e))
        throw new TypeError();
      return p(t) || (t = R(t)), Z(e, t);
    }
    u("getOwnMetadataKeys", le);
    function de(e, t, n) {
      if (!_(t))
        throw new TypeError();
      p(n) || (n = R(n));
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      if (p(r) || !r.delete(e))
        return !1;
      if (r.size > 0)
        return !0;
      var a = k.get(t);
      return a.delete(n), a.size > 0 || k.delete(t), !0;
    }
    u("deleteMetadata", de);
    function he(e, t) {
      for (var n = e.length - 1; n >= 0; --n) {
        var r = e[n], a = r(t);
        if (!p(a) && !P(a)) {
          if (!K(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function ye(e, t, n, r) {
      for (var a = e.length - 1; a >= 0; --a) {
        var M = e[a], s = M(t, n, r);
        if (!p(s) && !P(s)) {
          if (!_(s))
            throw new TypeError();
          r = s;
        }
      }
      return r;
    }
    function C(e, t, n) {
      var r = k.get(e);
      if (p(r)) {
        if (!n)
          return;
        r = new S(), k.set(e, r);
      }
      var a = r.get(t);
      if (p(a)) {
        if (!n)
          return;
        a = new S(), r.set(t, a);
      }
      return a;
    }
    function N(e, t, n) {
      var r = z(e, t, n);
      if (r)
        return !0;
      var a = L(t);
      return P(a) ? !1 : N(e, a, n);
    }
    function z(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      return p(r) ? !1 : we(r.has(e));
    }
    function $(e, t, n) {
      var r = z(e, t, n);
      if (r)
        return H(e, t, n);
      var a = L(t);
      if (!P(a))
        return $(e, a, n);
    }
    function H(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      if (!p(r))
        return r.get(e);
    }
    function Q(e, t, n, r) {
      var a = C(
        n,
        r,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Y(e, t) {
      var n = Z(e, t), r = L(e);
      if (r === null)
        return n;
      var a = Y(r, t);
      if (a.length <= 0)
        return n;
      if (n.length <= 0)
        return a;
      for (var M = new j(), s = [], f = 0, o = n; f < o.length; f++) {
        var l = o[f], d = M.has(l);
        d || (M.add(l), s.push(l));
      }
      for (var x = 0, te = a; x < te.length; x++) {
        var l = te[x], d = M.has(l);
        d || (M.add(l), s.push(l));
      }
      return s;
    }
    function Z(e, t) {
      var n = [], r = C(
        e,
        t,
        /*Create*/
        !1
      );
      if (p(r))
        return n;
      for (var a = r.keys(), M = be(a), s = 0; ; ) {
        var f = ge(M);
        if (!f)
          return n.length = s, n;
        var o = ke(f);
        try {
          n[s] = o;
        } catch (l) {
          try {
            Te(M);
          } finally {
            throw l;
          }
        }
        s++;
      }
    }
    function J(e) {
      if (e === null)
        return 1;
      switch (typeof e) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return e === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function p(e) {
      return e === void 0;
    }
    function P(e) {
      return e === null;
    }
    function ve(e) {
      return typeof e == "symbol";
    }
    function _(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function pe(e, t) {
      switch (J(e)) {
        case 0:
          return e;
        case 1:
          return e;
        case 2:
          return e;
        case 3:
          return e;
        case 4:
          return e;
        case 5:
          return e;
      }
      var n = t === 3 ? "string" : t === 5 ? "number" : "default", r = ee(e, w);
      if (r !== void 0) {
        var a = r.call(e, n);
        if (_(a))
          throw new TypeError();
        return a;
      }
      return _e(e, n === "default" ? "number" : n);
    }
    function _e(e, t) {
      if (t === "string") {
        var n = e.toString;
        if (q(n)) {
          var r = n.call(e);
          if (!_(r))
            return r;
        }
        var a = e.valueOf;
        if (q(a)) {
          var r = a.call(e);
          if (!_(r))
            return r;
        }
      } else {
        var a = e.valueOf;
        if (q(a)) {
          var r = a.call(e);
          if (!_(r))
            return r;
        }
        var M = e.toString;
        if (q(M)) {
          var r = M.call(e);
          if (!_(r))
            return r;
        }
      }
      throw new TypeError();
    }
    function we(e) {
      return !!e;
    }
    function Me(e) {
      return "" + e;
    }
    function R(e) {
      var t = pe(
        e,
        3
        /* String */
      );
      return ve(t) ? t : Me(t);
    }
    function X(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function q(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function me(e) {
      switch (J(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ee(e, t) {
      var n = e[t];
      if (n != null) {
        if (!q(n))
          throw new TypeError();
        return n;
      }
    }
    function be(e) {
      var t = ee(e, y);
      if (!q(t))
        throw new TypeError();
      var n = t.call(e);
      if (!_(n))
        throw new TypeError();
      return n;
    }
    function ke(e) {
      return e.value;
    }
    function ge(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function Te(e) {
      var t = e.return;
      t && t.call(e);
    }
    function L(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === A || t !== A)
        return t;
      var n = e.prototype, r = n && Object.getPrototypeOf(n);
      if (r == null || r === Object.prototype)
        return t;
      var a = r.constructor;
      return typeof a != "function" || a === e ? t : a;
    }
    function Re() {
      var e = {}, t = [], n = (
        /** @class */
        function() {
          function s(f, o, l) {
            this._index = 0, this._keys = f, this._values = o, this._selector = l;
          }
          return s.prototype["@@iterator"] = function() {
            return this;
          }, s.prototype[y] = function() {
            return this;
          }, s.prototype.next = function() {
            var f = this._index;
            if (f >= 0 && f < this._keys.length) {
              var o = this._selector(this._keys[f], this._values[f]);
              return f + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: o, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, s.prototype.throw = function(f) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), f;
          }, s.prototype.return = function(f) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: f, done: !0 };
          }, s;
        }()
      );
      return (
        /** @class */
        function() {
          function s() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(f) {
            return this._find(
              f,
              /*insert*/
              !1
            ) >= 0;
          }, s.prototype.get = function(f) {
            var o = this._find(
              f,
              /*insert*/
              !1
            );
            return o >= 0 ? this._values[o] : void 0;
          }, s.prototype.set = function(f, o) {
            var l = this._find(
              f,
              /*insert*/
              !0
            );
            return this._values[l] = o, this;
          }, s.prototype.delete = function(f) {
            var o = this._find(
              f,
              /*insert*/
              !1
            );
            if (o >= 0) {
              for (var l = this._keys.length, d = o + 1; d < l; d++)
                this._keys[d - 1] = this._keys[d], this._values[d - 1] = this._values[d];
              return this._keys.length--, this._values.length--, f === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, s.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, s.prototype.keys = function() {
            return new n(this._keys, this._values, r);
          }, s.prototype.values = function() {
            return new n(this._keys, this._values, a);
          }, s.prototype.entries = function() {
            return new n(this._keys, this._values, M);
          }, s.prototype["@@iterator"] = function() {
            return this.entries();
          }, s.prototype[y] = function() {
            return this.entries();
          }, s.prototype._find = function(f, o) {
            return this._cacheKey !== f && (this._cacheIndex = this._keys.indexOf(this._cacheKey = f)), this._cacheIndex < 0 && o && (this._cacheIndex = this._keys.length, this._keys.push(f), this._values.push(void 0)), this._cacheIndex;
          }, s;
        }()
      );
      function r(s, f) {
        return s;
      }
      function a(s, f) {
        return f;
      }
      function M(s, f) {
        return [s, f];
      }
    }
    function Ee() {
      return (
        /** @class */
        function() {
          function e() {
            this._map = new S();
          }
          return Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.has = function(t) {
            return this._map.has(t);
          }, e.prototype.add = function(t) {
            return this._map.set(t, t), this;
          }, e.prototype.delete = function(t) {
            return this._map.delete(t);
          }, e.prototype.clear = function() {
            this._map.clear();
          }, e.prototype.keys = function() {
            return this._map.keys();
          }, e.prototype.values = function() {
            return this._map.values();
          }, e.prototype.entries = function() {
            return this._map.entries();
          }, e.prototype["@@iterator"] = function() {
            return this.keys();
          }, e.prototype[y] = function() {
            return this.keys();
          }, e;
        }()
      );
    }
    function Oe() {
      var e = 16, t = T.create(), n = r();
      return (
        /** @class */
        function() {
          function o() {
            this._key = r();
          }
          return o.prototype.has = function(l) {
            var d = a(
              l,
              /*create*/
              !1
            );
            return d !== void 0 ? T.has(d, this._key) : !1;
          }, o.prototype.get = function(l) {
            var d = a(
              l,
              /*create*/
              !1
            );
            return d !== void 0 ? T.get(d, this._key) : void 0;
          }, o.prototype.set = function(l, d) {
            var x = a(
              l,
              /*create*/
              !0
            );
            return x[this._key] = d, this;
          }, o.prototype.delete = function(l) {
            var d = a(
              l,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, o.prototype.clear = function() {
            this._key = r();
          }, o;
        }()
      );
      function r() {
        var o;
        do
          o = "@@WeakMap@@" + f();
        while (T.has(t, o));
        return t[o] = !0, o;
      }
      function a(o, l) {
        if (!c.call(o, n)) {
          if (!l)
            return;
          Object.defineProperty(o, n, { value: T.create() });
        }
        return o[n];
      }
      function M(o, l) {
        for (var d = 0; d < l; ++d)
          o[d] = Math.random() * 255 | 0;
        return o;
      }
      function s(o) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(o)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(o)) : M(new Uint8Array(o), o) : M(new Array(o), o);
      }
      function f() {
        var o = s(e);
        o[6] = o[6] & 79 | 64, o[8] = o[8] & 191 | 128;
        for (var l = "", d = 0; d < e; ++d) {
          var x = o[d];
          (d === 4 || d === 6 || d === 8) && (l += "-"), x < 16 && (l += "0"), l += x.toString(16).toLowerCase();
        }
        return l;
      }
    }
    function B(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(re || (re = {}));
const Ie = (i = "") => (u) => {
  Reflect.defineMetadata("prefix", i, u), Reflect.hasMetadata("routes", u) || Reflect.defineMetadata("routes", [], u);
};
var G = /* @__PURE__ */ ((i) => (i.and = "and", i.or = "or", i))(G || {});
const je = (i = [], u = G.and) => (c) => {
  Reflect.defineMetadata("use-role-class", {
    roles: i,
    operator: u
  }, c);
}, Se = (i = [], u = G.and) => (c) => {
  Reflect.defineMetadata("use-role-method", {
    roles: i,
    operator: u
  }, c.constructor);
};
var U = /* @__PURE__ */ ((i) => (i.get = "get", i.post = "post", i.put = "put", i.delete = "delete", i))(U || {}), g = /* @__PURE__ */ ((i) => (i.param = "param", i.query = "query", i.req = "req", i.res = "res", i.body = "body", i))(g || {});
const D = (i) => (u) => (c, h, w) => {
  Reflect.hasMetadata("routes", c.constructor) || Reflect.defineMetadata("routes", [], c.constructor);
  const y = Reflect.getMetadata("routes", c.constructor);
  y.push({
    method: i,
    path: u,
    handlerName: h
  }), Reflect.defineMetadata("routes", y, c.constructor);
  const v = Reflect.getMetadata(g.req, c[h]), m = Reflect.getMetadata(g.res, c[h]), b = Reflect.getMetadata(g.param, c[h]), T = Reflect.getMetadata(g.query, c[h]), A = Reflect.getMetadata(g.body, c[h]), I = w.value;
  w.value = (...S) => {
    const [j, F] = S, k = [...S];
    if (v && (k[v.index] = j), m && (k[m.index] = F), b) {
      const { key: E, index: O } = b;
      k[O] = j.params[E];
    }
    if (T) {
      const { key: E, zod: O, index: W } = T;
      k[W] = E ? O.parse(j.query[E]) : O.parse(j.query);
    }
    if (A) {
      const { zod: E, index: O } = A;
      k[O] = E.parse(j.body);
    }
    return I.apply(void 0, k);
  };
}, Pe = D(U.get), qe = D(U.post), Ce = D(U.put), Ue = D(U.delete), V = (i) => (u) => (c, h, w) => {
  const y = c[h], v = {
    key: u == null ? void 0 : u.key,
    zod: u == null ? void 0 : u.zod,
    index: w
  };
  Reflect.defineMetadata(i, v, y);
}, oe = (i) => (u, c, h) => {
  const w = u[c];
  Reflect.defineMetadata(i, { index: h }, w);
}, Ge = V(g.param), De = V(g.query), Fe = oe(g.req), We = oe(g.res), ze = V(g.body), ae = ({ roles: i, operator: u }, c) => u === G.and ? i.every((h) => c.includes(h)) : c.some((h) => i.includes(h)), Le = (i) => (u, c, h) => {
  const w = h.value;
  h.value = (...y) => {
    const [, v] = y, m = Array.isArray(i) ? i : [i], b = Reflect.getMetadata("use-role-class", u), T = Reflect.getMetadata("use-role-method", u.constructor), A = ae(b, m), I = ae(T, m);
    return A ? I ? w.apply(void 0, y) : v.status(403).json({ error: "Forbidden" }) : v.status(403).json({ error: "Forbidden" });
  };
}, xe = require("express"), Be = (i) => {
  const u = xe.Router();
  return i.forEach((c) => {
    const h = new c(), w = Reflect.getMetadata("prefix", c);
    Reflect.getMetadata("routes", c).forEach((v) => {
      u[v.method](`${w}${v.path}`, (m, b) => {
        h[v.handlerName](m, b);
      });
    });
  }), u;
};
export {
  Ae as AuthGuard,
  ze as Body,
  Ie as Controller,
  Ue as Delete,
  Pe as Get,
  U as Method,
  Ge as Param,
  g as Parameter,
  qe as Post,
  Ce as Put,
  De as Query,
  Fe as Req,
  We as Res,
  Le as RoleGuard,
  je as UseRoleClass,
  Se as UseRoleMethod,
  Be as getRouter
};
