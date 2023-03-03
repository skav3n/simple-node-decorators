(function(y,C){typeof exports=="object"&&typeof module<"u"?C(exports):typeof define=="function"&&define.amd?define(["exports"],C):(y=typeof globalThis<"u"?globalThis:y||self,C(y.index={}))})(this,function(y){"use strict";const C=o=>(f,c,h)=>{const m=h.value;h.value=(...v)=>{const[_,b]=v,R=_.headers;if(R&&R.authorization===`Bearer ${o}`)return m.apply(void 0,v);b.status(401).json({error:"Not Authorized"})}};var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
  ***************************************************************************** */var Q;(function(o){(function(f){var c=typeof H=="object"?H:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),h=m(o);typeof c.Reflect>"u"?c.Reflect=o:h=m(c.Reflect,h),f(h);function m(v,_){return function(b,R){typeof v[b]!="function"&&Object.defineProperty(v,b,{configurable:!0,writable:!0,value:R}),_&&_(b,R)}}})(function(f){var c=Object.prototype.hasOwnProperty,h=typeof Symbol=="function",m=h&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",v=h&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",_=typeof Object.create=="function",b={__proto__:[]}instanceof Array,R=!_&&!b,T={create:_?function(){return $(Object.create(null))}:b?function(){return $({__proto__:null})}:function(){return $({})},has:R?function(e,t){return c.call(e,t)}:function(e,t){return t in e},get:R?function(e,t){return c.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},D=Object.getPrototypeOf(Function),U=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",S=!U&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ze(),q=!U&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Be(),B=!U&&typeof WeakMap=="function"?WeakMap:Le(),k=new B;function E(e,t,n,r){if(p(n)){if(!re(e))throw new TypeError;if(!ae(t))throw new TypeError;return Pe(e,t)}else{if(!re(e))throw new TypeError;if(!w(t))throw new TypeError;if(!w(r)&&!p(r)&&!j(r))throw new TypeError;return j(r)&&(r=void 0),n=O(n),qe(e,t,n,r)}}f("decorate",E);function A(e,t){function n(r,a){if(!w(r))throw new TypeError;if(!p(a)&&!Ge(a))throw new TypeError;K(e,t,r,a)}return n}f("metadata",A);function L(e,t,n,r){if(!w(n))throw new TypeError;return p(r)||(r=O(r)),K(e,t,n,r)}f("defineMetadata",L);function Re(e,t,n){if(!w(t))throw new TypeError;return p(n)||(n=O(n)),Z(e,t,n)}f("hasMetadata",Re);function ge(e,t,n){if(!w(t))throw new TypeError;return p(n)||(n=O(n)),V(e,t,n)}f("hasOwnMetadata",ge);function ke(e,t,n){if(!w(t))throw new TypeError;return p(n)||(n=O(n)),J(e,t,n)}f("getMetadata",ke);function Te(e,t,n){if(!w(t))throw new TypeError;return p(n)||(n=O(n)),X(e,t,n)}f("getOwnMetadata",Te);function Oe(e,t){if(!w(e))throw new TypeError;return p(t)||(t=O(t)),ee(e,t)}f("getMetadataKeys",Oe);function Ee(e,t){if(!w(e))throw new TypeError;return p(t)||(t=O(t)),te(e,t)}f("getOwnMetadataKeys",Ee);function Ae(e,t,n){if(!w(t))throw new TypeError;p(n)||(n=O(n));var r=F(t,n,!1);if(p(r)||!r.delete(e))return!1;if(r.size>0)return!0;var a=k.get(t);return a.delete(n),a.size>0||k.delete(t),!0}f("deleteMetadata",Ae);function Pe(e,t){for(var n=e.length-1;n>=0;--n){var r=e[n],a=r(t);if(!p(a)&&!j(a)){if(!ae(a))throw new TypeError;t=a}}return t}function qe(e,t,n,r){for(var a=e.length-1;a>=0;--a){var M=e[a],u=M(t,n,r);if(!p(u)&&!j(u)){if(!w(u))throw new TypeError;r=u}}return r}function F(e,t,n){var r=k.get(e);if(p(r)){if(!n)return;r=new S,k.set(e,r)}var a=r.get(t);if(p(a)){if(!n)return;a=new S,r.set(t,a)}return a}function Z(e,t,n){var r=V(e,t,n);if(r)return!0;var a=N(t);return j(a)?!1:Z(e,a,n)}function V(e,t,n){var r=F(t,n,!1);return p(r)?!1:xe(r.has(e))}function J(e,t,n){var r=V(e,t,n);if(r)return X(e,t,n);var a=N(t);if(!j(a))return J(e,a,n)}function X(e,t,n){var r=F(t,n,!1);if(!p(r))return r.get(e)}function K(e,t,n,r){var a=F(n,r,!0);a.set(e,t)}function ee(e,t){var n=te(e,t),r=N(e);if(r===null)return n;var a=ee(r,t);if(a.length<=0)return n;if(n.length<=0)return a;for(var M=new q,u=[],s=0,i=n;s<i.length;s++){var l=i[s],d=M.has(l);d||(M.add(l),u.push(l))}for(var P=0,oe=a;P<oe.length;P++){var l=oe[P],d=M.has(l);d||(M.add(l),u.push(l))}return u}function te(e,t){var n=[],r=F(e,t,!1);if(p(r))return n;for(var a=r.keys(),M=De(a),u=0;;){var s=Fe(M);if(!s)return n.length=u,n;var i=Ue(s);try{n[u]=i}catch(l){try{We(M)}finally{throw l}}u++}}function ne(e){if(e===null)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return e===null?1:6;default:return 6}}function p(e){return e===void 0}function j(e){return e===null}function Ie(e){return typeof e=="symbol"}function w(e){return typeof e=="object"?e!==null:typeof e=="function"}function Se(e,t){switch(ne(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e}var n=t===3?"string":t===5?"number":"default",r=ie(e,m);if(r!==void 0){var a=r.call(e,n);if(w(a))throw new TypeError;return a}return je(e,n==="default"?"number":n)}function je(e,t){if(t==="string"){var n=e.toString;if(x(n)){var r=n.call(e);if(!w(r))return r}var a=e.valueOf;if(x(a)){var r=a.call(e);if(!w(r))return r}}else{var a=e.valueOf;if(x(a)){var r=a.call(e);if(!w(r))return r}var M=e.toString;if(x(M)){var r=M.call(e);if(!w(r))return r}}throw new TypeError}function xe(e){return!!e}function Ce(e){return""+e}function O(e){var t=Se(e,3);return Ie(t)?t:Ce(t)}function re(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:Object.prototype.toString.call(e)==="[object Array]"}function x(e){return typeof e=="function"}function ae(e){return typeof e=="function"}function Ge(e){switch(ne(e)){case 3:return!0;case 4:return!0;default:return!1}}function ie(e,t){var n=e[t];if(n!=null){if(!x(n))throw new TypeError;return n}}function De(e){var t=ie(e,v);if(!x(t))throw new TypeError;var n=t.call(e);if(!w(n))throw new TypeError;return n}function Ue(e){return e.value}function Fe(e){var t=e.next();return t.done?!1:t}function We(e){var t=e.return;t&&t.call(e)}function N(e){var t=Object.getPrototypeOf(e);if(typeof e!="function"||e===D||t!==D)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(r==null||r===Object.prototype)return t;var a=r.constructor;return typeof a!="function"||a===e?t:a}function ze(){var e={},t=[],n=function(){function u(s,i,l){this._index=0,this._keys=s,this._values=i,this._selector=l}return u.prototype["@@iterator"]=function(){return this},u.prototype[v]=function(){return this},u.prototype.next=function(){var s=this._index;if(s>=0&&s<this._keys.length){var i=this._selector(this._keys[s],this._values[s]);return s+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:i,done:!1}}return{value:void 0,done:!0}},u.prototype.throw=function(s){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),s},u.prototype.return=function(s){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:s,done:!0}},u}();return function(){function u(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(u.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),u.prototype.has=function(s){return this._find(s,!1)>=0},u.prototype.get=function(s){var i=this._find(s,!1);return i>=0?this._values[i]:void 0},u.prototype.set=function(s,i){var l=this._find(s,!0);return this._values[l]=i,this},u.prototype.delete=function(s){var i=this._find(s,!1);if(i>=0){for(var l=this._keys.length,d=i+1;d<l;d++)this._keys[d-1]=this._keys[d],this._values[d-1]=this._values[d];return this._keys.length--,this._values.length--,s===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},u.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},u.prototype.keys=function(){return new n(this._keys,this._values,r)},u.prototype.values=function(){return new n(this._keys,this._values,a)},u.prototype.entries=function(){return new n(this._keys,this._values,M)},u.prototype["@@iterator"]=function(){return this.entries()},u.prototype[v]=function(){return this.entries()},u.prototype._find=function(s,i){return this._cacheKey!==s&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=s)),this._cacheIndex<0&&i&&(this._cacheIndex=this._keys.length,this._keys.push(s),this._values.push(void 0)),this._cacheIndex},u}();function r(u,s){return u}function a(u,s){return s}function M(u,s){return[u,s]}}function Be(){return function(){function e(){this._map=new S}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._map.has(t)},e.prototype.add=function(t){return this._map.set(t,t),this},e.prototype.delete=function(t){return this._map.delete(t)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[v]=function(){return this.keys()},e}()}function Le(){var e=16,t=T.create(),n=r();return function(){function i(){this._key=r()}return i.prototype.has=function(l){var d=a(l,!1);return d!==void 0?T.has(d,this._key):!1},i.prototype.get=function(l){var d=a(l,!1);return d!==void 0?T.get(d,this._key):void 0},i.prototype.set=function(l,d){var P=a(l,!0);return P[this._key]=d,this},i.prototype.delete=function(l){var d=a(l,!1);return d!==void 0?delete d[this._key]:!1},i.prototype.clear=function(){this._key=r()},i}();function r(){var i;do i="@@WeakMap@@"+s();while(T.has(t,i));return t[i]=!0,i}function a(i,l){if(!c.call(i,n)){if(!l)return;Object.defineProperty(i,n,{value:T.create()})}return i[n]}function M(i,l){for(var d=0;d<l;++d)i[d]=Math.random()*255|0;return i}function u(i){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(i)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(i)):M(new Uint8Array(i),i):M(new Array(i),i)}function s(){var i=u(e);i[6]=i[6]&79|64,i[8]=i[8]&191|128;for(var l="",d=0;d<e;++d){var P=i[d];(d===4||d===6||d===8)&&(l+="-"),P<16&&(l+="0"),l+=P.toString(16).toLowerCase()}return l}}function $(e){return e.__=void 0,delete e.__,e}})})(Q||(Q={}));const ue=(o="")=>f=>{Reflect.defineMetadata("prefix",o,f),Reflect.hasMetadata("routes",f)||Reflect.defineMetadata("routes",[],f)};var G=(o=>(o.and="and",o.or="or",o))(G||{});const fe=(o=[],f=G.and)=>c=>{Reflect.defineMetadata("required-roles",{roles:o,operator:f},c.constructor)};var I=(o=>(o.get="get",o.post="post",o.put="put",o.delete="delete",o))(I||{}),g=(o=>(o.param="param",o.query="query",o.req="req",o.res="res",o.body="body",o))(g||{});const W=o=>f=>(c,h,m)=>{Reflect.hasMetadata("routes",c.constructor)||Reflect.defineMetadata("routes",[],c.constructor);const v=Reflect.getMetadata("routes",c.constructor);v.push({method:o,path:f,handlerName:h}),Reflect.defineMetadata("routes",v,c.constructor);const _=Reflect.getMetadata(g.req,c[h]),b=Reflect.getMetadata(g.res,c[h]),R=Reflect.getMetadata(g.param,c[h]),T=Reflect.getMetadata(g.query,c[h]),D=Reflect.getMetadata(g.body,c[h]),U=m.value;m.value=(...S)=>{const[q,B]=S,k=[...S];if(_&&(k[_.index]=q),b&&(k[b.index]=B),R){const{key:E,index:A}=R;k[A]=q.params[E]}if(T){const{key:E,zod:A,index:L}=T;k[L]=E?A.parse(q.query[E]):A.parse(q.query)}if(D){const{zod:E,index:A}=D;k[A]=E.parse(q.body)}return U.apply(void 0,k)}},se=W(I.get),ce=W(I.post),le=W(I.put),de=W(I.delete),z=o=>f=>(c,h,m)=>{const v=c[h],_={key:f==null?void 0:f.key,zod:f==null?void 0:f.zod,index:m};Reflect.defineMetadata(o,_,v)},Y=o=>(f,c,h)=>{const m=f[c];Reflect.defineMetadata(o,{index:h},m)},he=z(g.param),ye=z(g.query),ve=Y(g.req),pe=Y(g.res),_e=z(g.body),we=o=>{const f=Array.isArray(o.userRoles)?o.userRoles:[o.userRoles],c=Array.isArray(o.requiredRoles)?o.requiredRoles:[o.requiredRoles];return o.operator===G.and?f.every(h=>c.includes(h)):f.some(h=>c.includes(h))},Me=({userRoles:o,requiredRoles:f,operator:c=G.or})=>(h,m,v)=>{const _=v.value;v.value=(...b)=>{const[,R]=b;return we({userRoles:o,requiredRoles:f,operator:c})?_.apply(void 0,b):R.status(403).json({error:"Forbidden"})}},me=require("express"),be=o=>{const f=me.Router();return o.forEach(c=>{const h=new c,m=Reflect.getMetadata("prefix",c);Reflect.getMetadata("routes",c).forEach(_=>{f[_.method](`${m}${_.path}`,(b,R)=>{h[_.handlerName](b,R)})})}),f};y.AuthGuard=C,y.Body=_e,y.Controller=ue,y.Delete=de,y.Get=se,y.Method=I,y.Operator=G,y.Param=he,y.Parameter=g,y.Post=ce,y.Put=le,y.Query=ye,y.Req=ve,y.RequiredRoles=fe,y.Res=pe,y.RoleGuard=Me,y.getRouter=be,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
