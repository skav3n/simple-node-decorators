const Ae = (u) => (f, d, h) => {
  const w = h.value;
  h.value = (...y) => {
    const [v, m] = y, b = v.headers;
    if (b && b.authorization === `Bearer ${u}`)
      return w.apply(void 0, y);
    m.status(401).json({ error: "Not Authorized" });
  };
};
var te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ne;
(function(u) {
  (function(f) {
    var d = typeof te == "object" ? te : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), h = w(u);
    typeof d.Reflect > "u" ? d.Reflect = u : h = w(d.Reflect, h), f(h);
    function w(y, v) {
      return function(m, b) {
        typeof y[m] != "function" && Object.defineProperty(y, m, { configurable: !0, writable: !0, value: b }), v && v(m, b);
      };
    }
  })(function(f) {
    var d = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", w = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", y = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", m = { __proto__: [] } instanceof Array, b = !v && !m, T = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: v ? function() {
        return L(/* @__PURE__ */ Object.create(null));
      } : m ? function() {
        return L({ __proto__: null });
      } : function() {
        return L({});
      },
      has: b ? function(e, t) {
        return d.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: b ? function(e, t) {
        return d.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, A = Object.getPrototypeOf(Function), I = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", S = !I && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ee(), j = !I && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Oe(), U = !I && typeof WeakMap == "function" ? WeakMap : Re(), k = new U();
    function O(e, t, n, r) {
      if (p(n)) {
        if (!J(e))
          throw new TypeError();
        if (!X(t))
          throw new TypeError();
        return he(e, t);
      } else {
        if (!J(e))
          throw new TypeError();
        if (!_(t))
          throw new TypeError();
        if (!_(r) && !p(r) && !P(r))
          throw new TypeError();
        return P(r) && (r = void 0), n = E(n), ye(e, t, n, r);
      }
    }
    f("decorate", O);
    function R(e, t) {
      function n(r, a) {
        if (!_(r))
          throw new TypeError();
        if (!p(a) && !me(a))
          throw new TypeError();
        H(e, t, r, a);
      }
      return n;
    }
    f("metadata", R);
    function F(e, t, n, r) {
      if (!_(n))
        throw new TypeError();
      return p(r) || (r = E(r)), H(e, t, n, r);
    }
    f("defineMetadata", F);
    function ie(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = E(n)), V(e, t, n);
    }
    f("hasMetadata", ie);
    function ue(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = E(n)), W(e, t, n);
    }
    f("hasOwnMetadata", ue);
    function se(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = E(n)), N(e, t, n);
    }
    f("getMetadata", se);
    function fe(e, t, n) {
      if (!_(t))
        throw new TypeError();
      return p(n) || (n = E(n)), $(e, t, n);
    }
    f("getOwnMetadata", fe);
    function ce(e, t) {
      if (!_(e))
        throw new TypeError();
      return p(t) || (t = E(t)), Q(e, t);
    }
    f("getMetadataKeys", ce);
    function le(e, t) {
      if (!_(e))
        throw new TypeError();
      return p(t) || (t = E(t)), Y(e, t);
    }
    f("getOwnMetadataKeys", le);
    function de(e, t, n) {
      if (!_(t))
        throw new TypeError();
      p(n) || (n = E(n));
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
    f("deleteMetadata", de);
    function he(e, t) {
      for (var n = e.length - 1; n >= 0; --n) {
        var r = e[n], a = r(t);
        if (!p(a) && !P(a)) {
          if (!X(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function ye(e, t, n, r) {
      for (var a = e.length - 1; a >= 0; --a) {
        var M = e[a], i = M(t, n, r);
        if (!p(i) && !P(i)) {
          if (!_(i))
            throw new TypeError();
          r = i;
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
    function V(e, t, n) {
      var r = W(e, t, n);
      if (r)
        return !0;
      var a = z(t);
      return P(a) ? !1 : V(e, a, n);
    }
    function W(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      return p(r) ? !1 : we(r.has(e));
    }
    function N(e, t, n) {
      var r = W(e, t, n);
      if (r)
        return $(e, t, n);
      var a = z(t);
      if (!P(a))
        return N(e, a, n);
    }
    function $(e, t, n) {
      var r = C(
        t,
        n,
        /*Create*/
        !1
      );
      if (!p(r))
        return r.get(e);
    }
    function H(e, t, n, r) {
      var a = C(
        n,
        r,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Q(e, t) {
      var n = Y(e, t), r = z(e);
      if (r === null)
        return n;
      var a = Q(r, t);
      if (a.length <= 0)
        return n;
      if (n.length <= 0)
        return a;
      for (var M = new j(), i = [], s = 0, o = n; s < o.length; s++) {
        var c = o[s], l = M.has(c);
        l || (M.add(c), i.push(c));
      }
      for (var x = 0, ee = a; x < ee.length; x++) {
        var c = ee[x], l = M.has(c);
        l || (M.add(c), i.push(c));
      }
      return i;
    }
    function Y(e, t) {
      var n = [], r = C(
        e,
        t,
        /*Create*/
        !1
      );
      if (p(r))
        return n;
      for (var a = r.keys(), M = be(a), i = 0; ; ) {
        var s = ge(M);
        if (!s)
          return n.length = i, n;
        var o = ke(s);
        try {
          n[i] = o;
        } catch (c) {
          try {
            Te(M);
          } finally {
            throw c;
          }
        }
        i++;
      }
    }
    function Z(e) {
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
      switch (Z(e)) {
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
      var n = t === 3 ? "string" : t === 5 ? "number" : "default", r = K(e, w);
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
    function E(e) {
      var t = pe(
        e,
        3
        /* String */
      );
      return ve(t) ? t : Me(t);
    }
    function J(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function q(e) {
      return typeof e == "function";
    }
    function X(e) {
      return typeof e == "function";
    }
    function me(e) {
      switch (Z(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function K(e, t) {
      var n = e[t];
      if (n != null) {
        if (!q(n))
          throw new TypeError();
        return n;
      }
    }
    function be(e) {
      var t = K(e, y);
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
    function z(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === A || t !== A)
        return t;
      var n = e.prototype, r = n && Object.getPrototypeOf(n);
      if (r == null || r === Object.prototype)
        return t;
      var a = r.constructor;
      return typeof a != "function" || a === e ? t : a;
    }
    function Ee() {
      var e = {}, t = [], n = (
        /** @class */
        function() {
          function i(s, o, c) {
            this._index = 0, this._keys = s, this._values = o, this._selector = c;
          }
          return i.prototype["@@iterator"] = function() {
            return this;
          }, i.prototype[y] = function() {
            return this;
          }, i.prototype.next = function() {
            var s = this._index;
            if (s >= 0 && s < this._keys.length) {
              var o = this._selector(this._keys[s], this._values[s]);
              return s + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: o, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, i.prototype.throw = function(s) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), s;
          }, i.prototype.return = function(s) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: s, done: !0 };
          }, i;
        }()
      );
      return (
        /** @class */
        function() {
          function i() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(i.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), i.prototype.has = function(s) {
            return this._find(
              s,
              /*insert*/
              !1
            ) >= 0;
          }, i.prototype.get = function(s) {
            var o = this._find(
              s,
              /*insert*/
              !1
            );
            return o >= 0 ? this._values[o] : void 0;
          }, i.prototype.set = function(s, o) {
            var c = this._find(
              s,
              /*insert*/
              !0
            );
            return this._values[c] = o, this;
          }, i.prototype.delete = function(s) {
            var o = this._find(
              s,
              /*insert*/
              !1
            );
            if (o >= 0) {
              for (var c = this._keys.length, l = o + 1; l < c; l++)
                this._keys[l - 1] = this._keys[l], this._values[l - 1] = this._values[l];
              return this._keys.length--, this._values.length--, s === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, i.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, i.prototype.keys = function() {
            return new n(this._keys, this._values, r);
          }, i.prototype.values = function() {
            return new n(this._keys, this._values, a);
          }, i.prototype.entries = function() {
            return new n(this._keys, this._values, M);
          }, i.prototype["@@iterator"] = function() {
            return this.entries();
          }, i.prototype[y] = function() {
            return this.entries();
          }, i.prototype._find = function(s, o) {
            return this._cacheKey !== s && (this._cacheIndex = this._keys.indexOf(this._cacheKey = s)), this._cacheIndex < 0 && o && (this._cacheIndex = this._keys.length, this._keys.push(s), this._values.push(void 0)), this._cacheIndex;
          }, i;
        }()
      );
      function r(i, s) {
        return i;
      }
      function a(i, s) {
        return s;
      }
      function M(i, s) {
        return [i, s];
      }
    }
    function Oe() {
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
    function Re() {
      var e = 16, t = T.create(), n = r();
      return (
        /** @class */
        function() {
          function o() {
            this._key = r();
          }
          return o.prototype.has = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? T.has(l, this._key) : !1;
          }, o.prototype.get = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? T.get(l, this._key) : void 0;
          }, o.prototype.set = function(c, l) {
            var x = a(
              c,
              /*create*/
              !0
            );
            return x[this._key] = l, this;
          }, o.prototype.delete = function(c) {
            var l = a(
              c,
              /*create*/
              !1
            );
            return l !== void 0 ? delete l[this._key] : !1;
          }, o.prototype.clear = function() {
            this._key = r();
          }, o;
        }()
      );
      function r() {
        var o;
        do
          o = "@@WeakMap@@" + s();
        while (T.has(t, o));
        return t[o] = !0, o;
      }
      function a(o, c) {
        if (!d.call(o, n)) {
          if (!c)
            return;
          Object.defineProperty(o, n, { value: T.create() });
        }
        return o[n];
      }
      function M(o, c) {
        for (var l = 0; l < c; ++l)
          o[l] = Math.random() * 255 | 0;
        return o;
      }
      function i(o) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(o)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(o)) : M(new Uint8Array(o), o) : M(new Array(o), o);
      }
      function s() {
        var o = i(e);
        o[6] = o[6] & 79 | 64, o[8] = o[8] & 191 | 128;
        for (var c = "", l = 0; l < e; ++l) {
          var x = o[l];
          (l === 4 || l === 6 || l === 8) && (c += "-"), x < 16 && (c += "0"), c += x.toString(16).toLowerCase();
        }
        return c;
      }
    }
    function L(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ne || (ne = {}));
const Ie = (u = "") => (f) => {
  Reflect.defineMetadata("prefix", u, f), Reflect.hasMetadata("routes", f) || Reflect.defineMetadata("routes", [], f);
};
var G = /* @__PURE__ */ ((u) => (u.get = "get", u.post = "post", u.put = "put", u.delete = "delete", u))(G || {}), g = /* @__PURE__ */ ((u) => (u.param = "param", u.query = "query", u.req = "req", u.res = "res", u.body = "body", u))(g || {});
const D = (u) => (f) => (d, h, w) => {
  Reflect.hasMetadata("routes", d.constructor) || Reflect.defineMetadata("routes", [], d.constructor);
  const y = Reflect.getMetadata("routes", d.constructor);
  y.push({
    method: u,
    path: f,
    handlerName: h
  }), Reflect.defineMetadata("routes", y, d.constructor);
  const v = Reflect.getMetadata(g.req, d[h]), m = Reflect.getMetadata(g.res, d[h]), b = Reflect.getMetadata(g.param, d[h]), T = Reflect.getMetadata(g.query, d[h]), A = Reflect.getMetadata(g.body, d[h]), I = w.value;
  w.value = (...S) => {
    const [j, U] = S, k = [...S];
    if (v && (k[v.index] = j), m && (k[m.index] = U), b) {
      const { key: O, index: R } = b;
      k[R] = j.params[O];
    }
    if (T) {
      const { key: O, zod: R, index: F } = T;
      k[F] = O ? R.parse(j.query[O]) : R.parse(j.query);
    }
    if (A) {
      const { zod: O, index: R } = A;
      k[R] = O.parse(j.body);
    }
    return I.apply(void 0, k);
  };
}, je = D(G.get), Se = D(G.post), Pe = D(G.put), qe = D(G.delete), B = (u) => (f) => (d, h, w) => {
  const y = d[h], v = {
    key: f == null ? void 0 : f.key,
    zod: f == null ? void 0 : f.zod,
    index: w
  };
  Reflect.defineMetadata(u, v, y);
}, ae = (u) => (f, d, h) => {
  const w = f[d];
  Reflect.defineMetadata(u, { index: h }, w);
}, Ce = B(g.param), Ge = B(g.query), De = ae(g.req), Ue = ae(g.res), Fe = B(g.body);
var oe = /* @__PURE__ */ ((u) => (u.and = "and", u.or = "or", u))(oe || {});
const re = ({ roles: u, operator: f }, d) => f === oe.and ? u.every((h) => d.includes(h)) : d.some((h) => u.includes(h)), We = (u) => (f, d, h) => {
  const w = h.value;
  h.value = (...y) => {
    const [, v] = y, m = Array.isArray(u) ? u : [u], b = Reflect.getMetadata("use-role-class", f), T = Reflect.getMetadata("use-role-method", f.constructor), A = re(b, m), I = re(T, m);
    return A ? I ? w.apply(void 0, y) : v.status(403).json({ error: "Forbidden" }) : v.status(403).json({ error: "Forbidden" });
  };
}, xe = require("express"), ze = (u) => {
  const f = xe.Router();
  return u.forEach((d) => {
    const h = new d(), w = Reflect.getMetadata("prefix", d);
    Reflect.getMetadata("routes", d).forEach((v) => {
      f[v.method](`${w}${v.path}`, (m, b) => {
        h[v.handlerName](m, b);
      });
    });
  }), f;
};
export {
  Ae as AuthGuard,
  Fe as Body,
  Ie as Controller,
  qe as Delete,
  je as Get,
  G as Method,
  Ce as Param,
  g as Parameter,
  Se as Post,
  Pe as Put,
  Ge as Query,
  De as Req,
  Ue as Res,
  We as RoleGuard,
  ze as getRouter
};
