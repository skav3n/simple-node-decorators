const Ae = (i) => (s, c, h) => {
  const M = h.value;
  h.value = (...y) => {
    const [p, m] = y, b = p.headers;
    if (b && b.authorization === `Bearer ${i}`)
      return M.apply(void 0, y);
    m.status(401).json({ error: "Not Authorized" });
  };
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(i) {
  (function(s) {
    var c = typeof re == "object" ? re : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), h = M(i);
    typeof c.Reflect > "u" ? c.Reflect = i : h = M(c.Reflect, h), s(h);
    function M(y, p) {
      return function(m, b) {
        typeof y[m] != "function" && Object.defineProperty(y, m, { configurable: !0, writable: !0, value: b }), p && p(m, b);
      };
    }
  })(function(s) {
    var c = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", M = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", y = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", p = typeof Object.create == "function", m = { __proto__: [] } instanceof Array, b = !p && !m, R = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: p ? function() {
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
    }, j = Object.getPrototypeOf(Function), P = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", I = !P && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), A = !P && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), F = !P && typeof WeakMap == "function" ? WeakMap : Ee(), k = new F();
    function E(e, t, r, n) {
      if (v(r)) {
        if (!X(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return de(e, t);
      } else {
        if (!X(e))
          throw new TypeError();
        if (!_(t))
          throw new TypeError();
        if (!_(n) && !v(n) && !q(n))
          throw new TypeError();
        return q(n) && (n = void 0), r = T(r), he(e, t, r, n);
      }
    }
    s("decorate", E);
    function O(e, t) {
      function r(n, a) {
        if (!_(n))
          throw new TypeError();
        if (!v(a) && !Me(a))
          throw new TypeError();
        Q(e, t, n, a);
      }
      return r;
    }
    s("metadata", O);
    function W(e, t, r, n) {
      if (!_(r))
        throw new TypeError();
      return v(n) || (n = T(n)), Q(e, t, r, n);
    }
    s("defineMetadata", W);
    function oe(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), N(e, t, r);
    }
    s("hasMetadata", oe);
    function ie(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), z(e, t, r);
    }
    s("hasOwnMetadata", ie);
    function ue(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), $(e, t, r);
    }
    s("getMetadata", ue);
    function se(e, t, r) {
      if (!_(t))
        throw new TypeError();
      return v(r) || (r = T(r)), H(e, t, r);
    }
    s("getOwnMetadata", se);
    function fe(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Y(e, t);
    }
    s("getMetadataKeys", fe);
    function ce(e, t) {
      if (!_(e))
        throw new TypeError();
      return v(t) || (t = T(t)), Z(e, t);
    }
    s("getOwnMetadataKeys", ce);
    function le(e, t, r) {
      if (!_(t))
        throw new TypeError();
      v(r) || (r = T(r));
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      if (v(n) || !n.delete(e))
        return !1;
      if (n.size > 0)
        return !0;
      var a = k.get(t);
      return a.delete(r), a.size > 0 || k.delete(t), !0;
    }
    s("deleteMetadata", le);
    function de(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], a = n(t);
        if (!v(a) && !q(a)) {
          if (!K(a))
            throw new TypeError();
          t = a;
        }
      }
      return t;
    }
    function he(e, t, r, n) {
      for (var a = e.length - 1; a >= 0; --a) {
        var w = e[a], u = w(t, r, n);
        if (!v(u) && !q(u)) {
          if (!_(u))
            throw new TypeError();
          n = u;
        }
      }
      return n;
    }
    function C(e, t, r) {
      var n = k.get(e);
      if (v(n)) {
        if (!r)
          return;
        n = new I(), k.set(e, n);
      }
      var a = n.get(t);
      if (v(a)) {
        if (!r)
          return;
        a = new I(), n.set(t, a);
      }
      return a;
    }
    function N(e, t, r) {
      var n = z(e, t, r);
      if (n)
        return !0;
      var a = L(t);
      return q(a) ? !1 : N(e, a, r);
    }
    function z(e, t, r) {
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      return v(n) ? !1 : _e(n.has(e));
    }
    function $(e, t, r) {
      var n = z(e, t, r);
      if (n)
        return H(e, t, r);
      var a = L(t);
      if (!q(a))
        return $(e, a, r);
    }
    function H(e, t, r) {
      var n = C(
        t,
        r,
        /*Create*/
        !1
      );
      if (!v(n))
        return n.get(e);
    }
    function Q(e, t, r, n) {
      var a = C(
        r,
        n,
        /*Create*/
        !0
      );
      a.set(e, t);
    }
    function Y(e, t) {
      var r = Z(e, t), n = L(e);
      if (n === null)
        return r;
      var a = Y(n, t);
      if (a.length <= 0)
        return r;
      if (r.length <= 0)
        return a;
      for (var w = new A(), u = [], f = 0, o = r; f < o.length; f++) {
        var l = o[f], d = w.has(l);
        d || (w.add(l), u.push(l));
      }
      for (var x = 0, te = a; x < te.length; x++) {
        var l = te[x], d = w.has(l);
        d || (w.add(l), u.push(l));
      }
      return u;
    }
    function Z(e, t) {
      var r = [], n = C(
        e,
        t,
        /*Create*/
        !1
      );
      if (v(n))
        return r;
      for (var a = n.keys(), w = me(a), u = 0; ; ) {
        var f = ke(w);
        if (!f)
          return r.length = u, r;
        var o = be(f);
        try {
          r[u] = o;
        } catch (l) {
          try {
            ge(w);
          } finally {
            throw l;
          }
        }
        u++;
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
    function v(e) {
      return e === void 0;
    }
    function q(e) {
      return e === null;
    }
    function ye(e) {
      return typeof e == "symbol";
    }
    function _(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function ve(e, t) {
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
      var r = t === 3 ? "string" : t === 5 ? "number" : "default", n = ee(e, M);
      if (n !== void 0) {
        var a = n.call(e, r);
        if (_(a))
          throw new TypeError();
        return a;
      }
      return pe(e, r === "default" ? "number" : r);
    }
    function pe(e, t) {
      if (t === "string") {
        var r = e.toString;
        if (S(r)) {
          var n = r.call(e);
          if (!_(n))
            return n;
        }
        var a = e.valueOf;
        if (S(a)) {
          var n = a.call(e);
          if (!_(n))
            return n;
        }
      } else {
        var a = e.valueOf;
        if (S(a)) {
          var n = a.call(e);
          if (!_(n))
            return n;
        }
        var w = e.toString;
        if (S(w)) {
          var n = w.call(e);
          if (!_(n))
            return n;
        }
      }
      throw new TypeError();
    }
    function _e(e) {
      return !!e;
    }
    function we(e) {
      return "" + e;
    }
    function T(e) {
      var t = ve(
        e,
        3
        /* String */
      );
      return ye(t) ? t : we(t);
    }
    function X(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function S(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function Me(e) {
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
      var r = e[t];
      if (r != null) {
        if (!S(r))
          throw new TypeError();
        return r;
      }
    }
    function me(e) {
      var t = ee(e, y);
      if (!S(t))
        throw new TypeError();
      var r = t.call(e);
      if (!_(r))
        throw new TypeError();
      return r;
    }
    function be(e) {
      return e.value;
    }
    function ke(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ge(e) {
      var t = e.return;
      t && t.call(e);
    }
    function L(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === j || t !== j)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var a = n.constructor;
      return typeof a != "function" || a === e ? t : a;
    }
    function Re() {
      var e = {}, t = [], r = (
        /** @class */
        function() {
          function u(f, o, l) {
            this._index = 0, this._keys = f, this._values = o, this._selector = l;
          }
          return u.prototype["@@iterator"] = function() {
            return this;
          }, u.prototype[y] = function() {
            return this;
          }, u.prototype.next = function() {
            var f = this._index;
            if (f >= 0 && f < this._keys.length) {
              var o = this._selector(this._keys[f], this._values[f]);
              return f + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: o, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, u.prototype.throw = function(f) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), f;
          }, u.prototype.return = function(f) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: f, done: !0 };
          }, u;
        }()
      );
      return (
        /** @class */
        function() {
          function u() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(u.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), u.prototype.has = function(f) {
            return this._find(
              f,
              /*insert*/
              !1
            ) >= 0;
          }, u.prototype.get = function(f) {
            var o = this._find(
              f,
              /*insert*/
              !1
            );
            return o >= 0 ? this._values[o] : void 0;
          }, u.prototype.set = function(f, o) {
            var l = this._find(
              f,
              /*insert*/
              !0
            );
            return this._values[l] = o, this;
          }, u.prototype.delete = function(f) {
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
          }, u.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, u.prototype.keys = function() {
            return new r(this._keys, this._values, n);
          }, u.prototype.values = function() {
            return new r(this._keys, this._values, a);
          }, u.prototype.entries = function() {
            return new r(this._keys, this._values, w);
          }, u.prototype["@@iterator"] = function() {
            return this.entries();
          }, u.prototype[y] = function() {
            return this.entries();
          }, u.prototype._find = function(f, o) {
            return this._cacheKey !== f && (this._cacheIndex = this._keys.indexOf(this._cacheKey = f)), this._cacheIndex < 0 && o && (this._cacheIndex = this._keys.length, this._keys.push(f), this._values.push(void 0)), this._cacheIndex;
          }, u;
        }()
      );
      function n(u, f) {
        return u;
      }
      function a(u, f) {
        return f;
      }
      function w(u, f) {
        return [u, f];
      }
    }
    function Te() {
      return (
        /** @class */
        function() {
          function e() {
            this._map = new I();
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
    function Ee() {
      var e = 16, t = R.create(), r = n();
      return (
        /** @class */
        function() {
          function o() {
            this._key = n();
          }
          return o.prototype.has = function(l) {
            var d = a(
              l,
              /*create*/
              !1
            );
            return d !== void 0 ? R.has(d, this._key) : !1;
          }, o.prototype.get = function(l) {
            var d = a(
              l,
              /*create*/
              !1
            );
            return d !== void 0 ? R.get(d, this._key) : void 0;
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
            this._key = n();
          }, o;
        }()
      );
      function n() {
        var o;
        do
          o = "@@WeakMap@@" + f();
        while (R.has(t, o));
        return t[o] = !0, o;
      }
      function a(o, l) {
        if (!c.call(o, r)) {
          if (!l)
            return;
          Object.defineProperty(o, r, { value: R.create() });
        }
        return o[r];
      }
      function w(o, l) {
        for (var d = 0; d < l; ++d)
          o[d] = Math.random() * 255 | 0;
        return o;
      }
      function u(o) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(o)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(o)) : w(new Uint8Array(o), o) : w(new Array(o), o);
      }
      function f() {
        var o = u(e);
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
})(ne || (ne = {}));
const Ie = (i = "") => (s) => {
  Reflect.defineMetadata("prefix", i, s), Reflect.hasMetadata("routes", s) || Reflect.defineMetadata("routes", [], s);
};
var D = /* @__PURE__ */ ((i) => (i.and = "and", i.or = "or", i))(D || {});
const qe = (i = [], s = D.and) => (c) => {
  Reflect.defineMetadata("required-roles", {
    roles: i,
    operator: s
  }, c.constructor);
};
var G = /* @__PURE__ */ ((i) => (i.get = "get", i.post = "post", i.put = "put", i.delete = "delete", i))(G || {}), g = /* @__PURE__ */ ((i) => (i.param = "param", i.query = "query", i.req = "req", i.res = "res", i.body = "body", i))(g || {});
const U = (i) => (s) => (c, h, M) => {
  Reflect.hasMetadata("routes", c.constructor) || Reflect.defineMetadata("routes", [], c.constructor);
  const y = Reflect.getMetadata("routes", c.constructor);
  y.push({
    method: i,
    path: s,
    handlerName: h
  }), Reflect.defineMetadata("routes", y, c.constructor);
  const p = Reflect.getMetadata(g.req, c[h]), m = Reflect.getMetadata(g.res, c[h]), b = Reflect.getMetadata(g.param, c[h]), R = Reflect.getMetadata(g.query, c[h]), j = Reflect.getMetadata(g.body, c[h]), P = M.value;
  M.value = (...I) => {
    const [A, F] = I, k = [...I];
    if (p && (k[p.index] = A), m && (k[m.index] = F), b) {
      const { key: E, index: O } = b;
      k[O] = A.params[E];
    }
    if (R) {
      const { key: E, zod: O, index: W } = R;
      k[W] = E ? O.parse(A.query[E]) : O.parse(A.query);
    }
    if (j) {
      const { zod: E, index: O } = j;
      k[O] = E.parse(A.body);
    }
    return P.apply(void 0, k);
  };
}, Se = U(G.get), je = U(G.post), Pe = U(G.put), Ce = U(G.delete), V = (i) => (s) => (c, h, M) => {
  const y = c[h], p = {
    key: s == null ? void 0 : s.key,
    zod: s == null ? void 0 : s.zod,
    index: M
  };
  Reflect.defineMetadata(i, p, y);
}, ae = (i) => (s, c, h) => {
  const M = s[c];
  Reflect.defineMetadata(i, { index: h }, M);
}, Ge = V(g.param), De = V(g.query), Ue = ae(g.req), Fe = ae(g.res), We = V(g.body), Oe = (i) => {
  const s = Array.isArray(i.userRoles) ? i.userRoles : [i.userRoles], c = Array.isArray(i.requiredRoles) ? i.requiredRoles : [i.requiredRoles];
  return i.operator === D.and ? s.every((h) => c.includes(h)) : s.some((h) => c.includes(h));
}, ze = ({ userRoles: i, requiredRoles: s, operator: c = D.or }) => (h, M, y) => {
  const p = y.value;
  y.value = (...m) => {
    const [, b] = m;
    return Oe({ userRoles: i, requiredRoles: s, operator: c }) ? p.apply(void 0, m) : b.status(403).json({ error: "Forbidden" });
  };
}, xe = require("express"), Le = (i) => {
  const s = xe.Router();
  return i.forEach((c) => {
    const h = new c(), M = Reflect.getMetadata("prefix", c);
    Reflect.getMetadata("routes", c).forEach((p) => {
      s[p.method](`${M}${p.path}`, (m, b) => {
        h[p.handlerName](m, b);
      });
    });
  }), s;
};
export {
  Ae as AuthGuard,
  We as Body,
  Ie as Controller,
  Ce as Delete,
  Se as Get,
  G as Method,
  D as Operator,
  Ge as Param,
  g as Parameter,
  je as Post,
  Pe as Put,
  De as Query,
  Ue as Req,
  qe as RequiredRoles,
  Fe as Res,
  ze as RoleGuard,
  Le as getRouter
};
