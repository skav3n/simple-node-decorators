(function(v,C){typeof exports=="object"&&typeof module<"u"?C(exports):typeof define=="function"&&define.amd?define(["exports"],C):(v=typeof globalThis<"u"?globalThis:v||self,C(v.index={}))})(this,function(v){"use strict";const C=l=>(c,d,h)=>{const M=h.value;h.value=(...p)=>{const[m,g]=p,b=m.headers;if(b&&b.authorization===`Bearer ${l}`)return M.apply(void 0,p);g.status(401).json({error:"Not Authorized"})}};var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
  ***************************************************************************** */var Q;(function(l){(function(c){var d=typeof z=="object"?z:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),h=M(l);typeof d.Reflect>"u"?d.Reflect=l:h=M(d.Reflect,h),c(h);function M(p,m){return function(g,b){typeof p[g]!="function"&&Object.defineProperty(p,g,{configurable:!0,writable:!0,value:b}),m&&m(g,b)}}})(function(c){var d=Object.prototype.hasOwnProperty,h=typeof Symbol=="function",M=h&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",p=h&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",m=typeof Object.create=="function",g={__proto__:[]}instanceof Array,b=!m&&!g,R={create:m?function(){return N(Object.create(null))}:g?function(){return N({__proto__:null})}:function(){return N({})},has:b?function(e,t){return d.call(e,t)}:function(e,t){return t in e},get:b?function(e,t){return d.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},G=Object.getPrototypeOf(Function),U=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",j=!U&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Ge(),S=!U&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Ue(),B=!U&&typeof WeakMap=="function"?WeakMap:De(),T=new B;function E(e,t,n,r){if(y(n)){if(!ne(e))throw new TypeError;if(!re(t))throw new TypeError;return Te(e,t)}else{if(!ne(e))throw new TypeError;if(!_(t))throw new TypeError;if(!_(r)&&!y(r)&&!A(r))throw new TypeError;return A(r)&&(r=void 0),n=O(n),Oe(e,t,n,r)}}c("decorate",E);function P(e,t){function n(r,a){if(!_(r))throw new TypeError;if(!y(a)&&!je(a))throw new TypeError;X(e,t,r,a)}return n}c("metadata",P);function L(e,t,n,r){if(!_(n))throw new TypeError;return y(r)||(r=O(r)),X(e,t,n,r)}c("defineMetadata",L);function _e(e,t,n){if(!_(t))throw new TypeError;return y(n)||(n=O(n)),Y(e,t,n)}c("hasMetadata",_e);function we(e,t,n){if(!_(t))throw new TypeError;return y(n)||(n=O(n)),V(e,t,n)}c("hasOwnMetadata",we);function Me(e,t,n){if(!_(t))throw new TypeError;return y(n)||(n=O(n)),Z(e,t,n)}c("getMetadata",Me);function me(e,t,n){if(!_(t))throw new TypeError;return y(n)||(n=O(n)),J(e,t,n)}c("getOwnMetadata",me);function be(e,t){if(!_(e))throw new TypeError;return y(t)||(t=O(t)),K(e,t)}c("getMetadataKeys",be);function ke(e,t){if(!_(e))throw new TypeError;return y(t)||(t=O(t)),ee(e,t)}c("getOwnMetadataKeys",ke);function ge(e,t,n){if(!_(t))throw new TypeError;y(n)||(n=O(n));var r=D(t,n,!1);if(y(r)||!r.delete(e))return!1;if(r.size>0)return!0;var a=T.get(t);return a.delete(n),a.size>0||T.delete(t),!0}c("deleteMetadata",ge);function Te(e,t){for(var n=e.length-1;n>=0;--n){var r=e[n],a=r(t);if(!y(a)&&!A(a)){if(!re(a))throw new TypeError;t=a}}return t}function Oe(e,t,n,r){for(var a=e.length-1;a>=0;--a){var w=e[a],o=w(t,n,r);if(!y(o)&&!A(o)){if(!_(o))throw new TypeError;r=o}}return r}function D(e,t,n){var r=T.get(e);if(y(r)){if(!n)return;r=new j,T.set(e,r)}var a=r.get(t);if(y(a)){if(!n)return;a=new j,r.set(t,a)}return a}function Y(e,t,n){var r=V(e,t,n);if(r)return!0;var a=H(t);return A(a)?!1:Y(e,a,n)}function V(e,t,n){var r=D(t,n,!1);return y(r)?!1:Ie(r.has(e))}function Z(e,t,n){var r=V(e,t,n);if(r)return J(e,t,n);var a=H(t);if(!A(a))return Z(e,a,n)}function J(e,t,n){var r=D(t,n,!1);if(!y(r))return r.get(e)}function X(e,t,n,r){var a=D(n,r,!0);a.set(e,t)}function K(e,t){var n=ee(e,t),r=H(e);if(r===null)return n;var a=K(r,t);if(a.length<=0)return n;if(n.length<=0)return a;for(var w=new S,o=[],u=0,i=n;u<i.length;u++){var f=i[u],s=w.has(f);s||(w.add(f),o.push(f))}for(var I=0,ie=a;I<ie.length;I++){var f=ie[I],s=w.has(f);s||(w.add(f),o.push(f))}return o}function ee(e,t){var n=[],r=D(e,t,!1);if(y(r))return n;for(var a=r.keys(),w=Ae(a),o=0;;){var u=Ce(w);if(!u)return n.length=o,n;var i=qe(u);try{n[o]=i}catch(f){try{xe(w)}finally{throw f}}o++}}function te(e){if(e===null)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return e===null?1:6;default:return 6}}function y(e){return e===void 0}function A(e){return e===null}function Re(e){return typeof e=="symbol"}function _(e){return typeof e=="object"?e!==null:typeof e=="function"}function Ee(e,t){switch(te(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e}var n=t===3?"string":t===5?"number":"default",r=ae(e,M);if(r!==void 0){var a=r.call(e,n);if(_(a))throw new TypeError;return a}return Pe(e,n==="default"?"number":n)}function Pe(e,t){if(t==="string"){var n=e.toString;if(q(n)){var r=n.call(e);if(!_(r))return r}var a=e.valueOf;if(q(a)){var r=a.call(e);if(!_(r))return r}}else{var a=e.valueOf;if(q(a)){var r=a.call(e);if(!_(r))return r}var w=e.toString;if(q(w)){var r=w.call(e);if(!_(r))return r}}throw new TypeError}function Ie(e){return!!e}function Se(e){return""+e}function O(e){var t=Ee(e,3);return Re(t)?t:Se(t)}function ne(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:Object.prototype.toString.call(e)==="[object Array]"}function q(e){return typeof e=="function"}function re(e){return typeof e=="function"}function je(e){switch(te(e)){case 3:return!0;case 4:return!0;default:return!1}}function ae(e,t){var n=e[t];if(n!=null){if(!q(n))throw new TypeError;return n}}function Ae(e){var t=ae(e,p);if(!q(t))throw new TypeError;var n=t.call(e);if(!_(n))throw new TypeError;return n}function qe(e){return e.value}function Ce(e){var t=e.next();return t.done?!1:t}function xe(e){var t=e.return;t&&t.call(e)}function H(e){var t=Object.getPrototypeOf(e);if(typeof e!="function"||e===G||t!==G)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(r==null||r===Object.prototype)return t;var a=r.constructor;return typeof a!="function"||a===e?t:a}function Ge(){var e={},t=[],n=function(){function o(u,i,f){this._index=0,this._keys=u,this._values=i,this._selector=f}return o.prototype["@@iterator"]=function(){return this},o.prototype[p]=function(){return this},o.prototype.next=function(){var u=this._index;if(u>=0&&u<this._keys.length){var i=this._selector(this._keys[u],this._values[u]);return u+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:i,done:!1}}return{value:void 0,done:!0}},o.prototype.throw=function(u){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),u},o.prototype.return=function(u){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:u,done:!0}},o}();return function(){function o(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(o.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),o.prototype.has=function(u){return this._find(u,!1)>=0},o.prototype.get=function(u){var i=this._find(u,!1);return i>=0?this._values[i]:void 0},o.prototype.set=function(u,i){var f=this._find(u,!0);return this._values[f]=i,this},o.prototype.delete=function(u){var i=this._find(u,!1);if(i>=0){for(var f=this._keys.length,s=i+1;s<f;s++)this._keys[s-1]=this._keys[s],this._values[s-1]=this._values[s];return this._keys.length--,this._values.length--,u===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},o.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},o.prototype.keys=function(){return new n(this._keys,this._values,r)},o.prototype.values=function(){return new n(this._keys,this._values,a)},o.prototype.entries=function(){return new n(this._keys,this._values,w)},o.prototype["@@iterator"]=function(){return this.entries()},o.prototype[p]=function(){return this.entries()},o.prototype._find=function(u,i){return this._cacheKey!==u&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=u)),this._cacheIndex<0&&i&&(this._cacheIndex=this._keys.length,this._keys.push(u),this._values.push(void 0)),this._cacheIndex},o}();function r(o,u){return o}function a(o,u){return u}function w(o,u){return[o,u]}}function Ue(){return function(){function e(){this._map=new j}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._map.has(t)},e.prototype.add=function(t){return this._map.set(t,t),this},e.prototype.delete=function(t){return this._map.delete(t)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[p]=function(){return this.keys()},e}()}function De(){var e=16,t=R.create(),n=r();return function(){function i(){this._key=r()}return i.prototype.has=function(f){var s=a(f,!1);return s!==void 0?R.has(s,this._key):!1},i.prototype.get=function(f){var s=a(f,!1);return s!==void 0?R.get(s,this._key):void 0},i.prototype.set=function(f,s){var I=a(f,!0);return I[this._key]=s,this},i.prototype.delete=function(f){var s=a(f,!1);return s!==void 0?delete s[this._key]:!1},i.prototype.clear=function(){this._key=r()},i}();function r(){var i;do i="@@WeakMap@@"+u();while(R.has(t,i));return t[i]=!0,i}function a(i,f){if(!d.call(i,n)){if(!f)return;Object.defineProperty(i,n,{value:R.create()})}return i[n]}function w(i,f){for(var s=0;s<f;++s)i[s]=Math.random()*255|0;return i}function o(i){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(i)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(i)):w(new Uint8Array(i),i):w(new Array(i),i)}function u(){var i=o(e);i[6]=i[6]&79|64,i[8]=i[8]&191|128;for(var f="",s=0;s<e;++s){var I=i[s];(s===4||s===6||s===8)&&(f+="-"),I<16&&(f+="0"),f+=I.toString(16).toLowerCase()}return f}}function N(e){return e.__=void 0,delete e.__,e}})})(Q||(Q={}));const oe=(l="")=>c=>{Reflect.defineMetadata("prefix",l,c),Reflect.hasMetadata("routes",c)||Reflect.defineMetadata("routes",[],c)};var x=(l=>(l.get="get",l.post="post",l.put="put",l.delete="delete",l))(x||{}),k=(l=>(l.param="param",l.query="query",l.req="req",l.res="res",l.body="body",l))(k||{});const F=l=>c=>(d,h,M)=>{Reflect.hasMetadata("routes",d.constructor)||Reflect.defineMetadata("routes",[],d.constructor);const p=Reflect.getMetadata("routes",d.constructor);p.push({method:l,path:c,handlerName:h}),Reflect.defineMetadata("routes",p,d.constructor);const m=Reflect.getMetadata(k.req,d[h]),g=Reflect.getMetadata(k.res,d[h]),b=Reflect.getMetadata(k.param,d[h]),R=Reflect.getMetadata(k.query,d[h]),G=Reflect.getMetadata(k.body,d[h]),U=M.value;M.value=(...j)=>{const[S,B]=j,T=[...j];if(m&&(T[m.index]=S),g&&(T[g.index]=B),b){const{key:E,index:P}=b;T[P]=S.params[E]}if(R){const{key:E,schema:P,index:L}=R;T[L]=E?P.parse(S.query[E]):P.parse(S.query)}if(G){const{schema:E,index:P}=G;T[P]=E.parse(S.body)}return U.apply(void 0,T)}},ue=F(x.get),fe=F(x.post),se=F(x.put),W=l=>c=>(d,h,M)=>{const p=d[h],m={key:c==null?void 0:c.key,schema:c==null?void 0:c.schema,index:M};Reflect.defineMetadata(l,m,p)},$=l=>(c,d,h)=>{const M=c[d];Reflect.defineMetadata(l,{index:h},M)},ce=W(k.param),le=W(k.query),de=$(k.req),he=$(k.res),ye=W(k.body),ve=["User"],pe=l=>(c,d,h)=>{const M=h.value;h.value=(...p)=>{const[,m]=p;if(ve.some(b=>b===l))return M.apply(void 0,p);m.status(403).json({error:"Forbidden"})}};v.AuthGuard=C,v.Body=ye,v.Controller=oe,v.Get=ue,v.Method=x,v.Param=ce,v.Parameter=k,v.Post=fe,v.Put=se,v.Query=le,v.Req=de,v.Res=he,v.RoleGuard=pe,Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});