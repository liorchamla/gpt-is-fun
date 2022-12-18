(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Q=function(e,t){return Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},Q(e,t)};function q(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Q(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var U=function(){return U=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},U.apply(this,arguments)};function Xe(e,t,r,n){function o(i){return i instanceof r?i:new r(function(u){u(i)})}return new(r||(r=Promise))(function(i,u){function c(l){try{a(n.next(l))}catch(d){u(d)}}function s(l){try{a(n.throw(l))}catch(d){u(d)}}function a(l){l.done?i(l.value):o(l.value).then(c,s)}a((n=n.apply(e,t||[])).next())})}function Ae(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(l){return s([a,l])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(r=0)),r;)try{if(n=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(l){a=[6,l],o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function L(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return i}function k(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function Ye(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),o,i=[];return o={},u("next"),u("throw"),u("return"),o[Symbol.asyncIterator]=function(){return this},o;function u(f){n[f]&&(o[f]=function(w){return new Promise(function(E,p){i.push([f,w,E,p])>1||c(f,w)})})}function c(f,w){try{s(n[f](w))}catch(E){d(i[0][3],E)}}function s(f){f.value instanceof P?Promise.resolve(f.value.v).then(a,l):d(i[0][2],f)}function a(f){c("next",f)}function l(f){c("throw",f)}function d(f,w){f(w),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Je(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof L=="function"?L(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(i){r[i]=e[i]&&function(u){return new Promise(function(c,s){u=e[i](u),o(c,s,u.done,u.value)})}}function o(i,u,c,s){Promise.resolve(s).then(function(a){i({value:a,done:c})},u)}}function v(e){return typeof e=="function"}function ne(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var Y=ne(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function W(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var F=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,n,o,i;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=L(u),s=c.next();!s.done;s=c.next()){var a=s.value;a.remove(this)}}catch(p){t={error:p}}finally{try{s&&!s.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}else u.remove(this);var l=this.initialTeardown;if(v(l))try{l()}catch(p){i=p instanceof Y?p.errors:[p]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var f=L(d),w=f.next();!w.done;w=f.next()){var E=w.value;try{me(E)}catch(p){i=i??[],p instanceof Y?i=k(k([],I(i)),I(p.errors)):i.push(p)}}}catch(p){n={error:p}}finally{try{w&&!w.done&&(o=f.return)&&o.call(f)}finally{if(n)throw n.error}}}if(i)throw new Y(i)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)me(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&W(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&W(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),Oe=F.EMPTY;function je(e){return e instanceof F||e&&"closed"in e&&v(e.remove)&&v(e.add)&&v(e.unsubscribe)}function me(e){v(e)?e():e.unsubscribe()}var oe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Z={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=Z.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,k([e,t],I(r))):setTimeout.apply(void 0,k([e,t],I(r)))},clearTimeout:function(e){var t=Z.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function Pe(e){Z.setTimeout(function(){throw e})}function be(){}var D=null;function M(e){if(oe.useDeprecatedSynchronousErrorHandling){var t=!D;if(t&&(D={errorThrown:!1,error:null}),e(),t){var r=D,n=r.errorThrown,o=r.error;if(D=null,n)throw o}}else e()}var ie=function(e){q(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,je(r)&&r.add(n)):n.destination=Qe,n}return t.create=function(r,n,o){return new N(r,n,o)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(F),Ve=Function.prototype.bind;function J(e,t){return Ve.call(e,t)}var Ke=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(n){H(n)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(n){H(n)}else H(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){H(r)}},e}(),N=function(e){q(t,e);function t(r,n,o){var i=e.call(this)||this,u;if(v(r)||!r)u={next:r??void 0,error:n??void 0,complete:o??void 0};else{var c;i&&oe.useDeprecatedNextContext?(c=Object.create(r),c.unsubscribe=function(){return i.unsubscribe()},u={next:r.next&&J(r.next,c),error:r.error&&J(r.error,c),complete:r.complete&&J(r.complete,c)}):u=r}return i.destination=new Ke(u),i}return t}(ie);function H(e){Pe(e)}function ze(e){throw e}var Qe={closed:!0,next:be,error:ze,complete:be},ue=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function _e(e){return e}function We(e){return e.length===0?_e:e.length===1?e[0]:function(r){return e.reduce(function(n,o){return o(n)},r)}}var x=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var o=this,i=Ne(t)?t:new N(t,r,n);return M(function(){var u=o,c=u.operator,s=u.source;i.add(c?c.call(i,s):s?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=we(r),new r(function(o,i){var u=new N({next:function(c){try{t(c)}catch(s){i(s),u.unsubscribe()}},error:i,complete:o});n.subscribe(u)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[ue]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return We(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=we(t),new t(function(n,o){var i;r.subscribe(function(u){return i=u},function(u){return o(u)},function(){return n(i)})})},e.create=function(t){return new e(t)},e}();function we(e){var t;return(t=e??oe.Promise)!==null&&t!==void 0?t:Promise}function Ze(e){return e&&v(e.next)&&v(e.error)&&v(e.complete)}function Ne(e){return e&&e instanceof ie||Ze(e)&&je(e)}function er(e){return v(e==null?void 0:e.lift)}function G(e){return function(t){if(er(t))return t.lift(function(r){try{return e(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function R(e,t,r,n,o){return new rr(e,t,r,n,o)}var rr=function(e){q(t,e);function t(r,n,o,i,u,c){var s=e.call(this,r)||this;return s.onFinalize=u,s.shouldUnsubscribe=c,s._next=n?function(a){try{n(a)}catch(l){r.error(l)}}:e.prototype._next,s._error=i?function(a){try{i(a)}catch(l){r.error(l)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=o?function(){try{o()}catch(a){r.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(ie),tr=ne(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Le=function(e){q(t,e);function t(){var r=e.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return t.prototype.lift=function(r){var n=new Se(this,this);return n.operator=r,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new tr},t.prototype.next=function(r){var n=this;M(function(){var o,i;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var u=L(n.currentObservers),c=u.next();!c.done;c=u.next()){var s=c.value;s.next(r)}}catch(a){o={error:a}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}}})},t.prototype.error=function(r){var n=this;M(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=r;for(var o=n.observers;o.length;)o.shift().error(r)}})},t.prototype.complete=function(){var r=this;M(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var n=r.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(r){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,r)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var n=this,o=this,i=o.hasError,u=o.isStopped,c=o.observers;return i||u?Oe:(this.currentObservers=null,c.push(r),new F(function(){n.currentObservers=null,W(c,r)}))},t.prototype._checkFinalizedStatuses=function(r){var n=this,o=n.hasError,i=n.thrownError,u=n.isStopped;o?r.error(i):u&&r.complete()},t.prototype.asObservable=function(){var r=new x;return r.source=this,r},t.create=function(r,n){return new Se(r,n)},t}(x),Se=function(e){q(t,e);function t(r,n){var o=e.call(this)||this;return o.destination=r,o.source=n,o}return t.prototype.next=function(r){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,r)},t.prototype.error=function(r){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,r)},t.prototype.complete=function(){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||n===void 0||n.call(r)},t.prototype._subscribe=function(r){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(r))!==null&&o!==void 0?o:Oe},t}(Le),nr=function(e){q(t,e);function t(r){var n=e.call(this)||this;return n._value=r,n}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(r){var n=e.prototype._subscribe.call(this,r);return!n.closed&&r.next(this._value),n},t.prototype.getValue=function(){var r=this,n=r.hasError,o=r.thrownError,i=r._value;if(n)throw o;return this._throwIfClosed(),i},t.prototype.next=function(r){e.prototype.next.call(this,this._value=r)},t}(Le),Ie=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function or(e){return v(e==null?void 0:e.then)}function ir(e){return v(e[ue])}function ur(e){return Symbol.asyncIterator&&v(e==null?void 0:e[Symbol.asyncIterator])}function ar(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function sr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var cr=sr();function lr(e){return v(e==null?void 0:e[cr])}function fr(e){return Ye(this,arguments,function(){var r,n,o,i;return Ae(this,function(u){switch(u.label){case 0:r=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,P(r.read())];case 3:return n=u.sent(),o=n.value,i=n.done,i?[4,P(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,P(o)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function dr(e){return v(e==null?void 0:e.getReader)}function $(e){if(e instanceof x)return e;if(e!=null){if(ir(e))return vr(e);if(Ie(e))return hr(e);if(or(e))return pr(e);if(ur(e))return Re(e);if(lr(e))return yr(e);if(dr(e))return mr(e)}throw ar(e)}function vr(e){return new x(function(t){var r=e[ue]();if(v(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function hr(e){return new x(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function pr(e){return new x(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,Pe)})}function yr(e){return new x(function(t){var r,n;try{for(var o=L(e),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(c){r={error:c}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}t.complete()})}function Re(e){return new x(function(t){br(e,t).catch(function(r){return t.error(r)})})}function mr(e){return Re(fr(e))}function br(e,t){var r,n,o,i;return Xe(this,void 0,void 0,function(){var u,c;return Ae(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),r=Je(e),s.label=1;case 1:return[4,r.next()];case 2:if(n=s.sent(),!!n.done)return[3,4];if(u=n.value,t.next(u),t.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=s.sent(),o={error:c},[3,11];case 6:return s.trys.push([6,,9,10]),n&&!n.done&&(i=r.return)?[4,i.call(r)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function wr(e,t,r,n,o){n===void 0&&(n=0),o===void 0&&(o=!1);var i=t.schedule(function(){r(),o?e.add(this.schedule(null,n)):this.unsubscribe()},n);if(e.add(i),!o)return i}function _(e,t){return G(function(r,n){var o=0;r.subscribe(R(n,function(i){n.next(e.call(t,i,o++))}))})}var Sr=Array.isArray;function Er(e,t){return Sr(t)?e.apply(void 0,k([],I(t))):e(t)}function gr(e){return _(function(t){return Er(e,t)})}function xr(e,t,r,n,o,i,u,c){var s=[],a=0,l=0,d=!1,f=function(){d&&!s.length&&!a&&t.complete()},w=function(p){return a<n?E(p):s.push(p)},E=function(p){i&&t.next(p),a++;var C=!1;$(r(p,l++)).subscribe(R(t,function(T){o==null||o(T),i?w(T):t.next(T)},function(){C=!0},void 0,function(){if(C)try{a--;for(var T=function(){var A=s.shift();u?wr(t,u,function(){return E(A)}):E(A)};s.length&&a<n;)T();f()}catch(A){t.error(A)}}))};return e.subscribe(R(t,w,function(){d=!0,f()})),function(){c==null||c()}}function qe(e,t,r){return r===void 0&&(r=1/0),v(t)?qe(function(n,o){return _(function(i,u){return t(n,i,o,u)})($(e(n,o)))},r):(typeof t=="number"&&(r=t),G(function(n,o){return xr(n,o,e,r)}))}var Tr=["addListener","removeListener"],Ar=["addEventListener","removeEventListener"],Or=["on","off"];function ee(e,t,r,n){if(v(r)&&(n=r,r=void 0),n)return ee(e,t,r).pipe(gr(n));var o=I(_r(e)?Ar.map(function(c){return function(s){return e[c](t,s,r)}}):jr(e)?Tr.map(Ee(e,t)):Pr(e)?Or.map(Ee(e,t)):[],2),i=o[0],u=o[1];if(!i&&Ie(e))return qe(function(c){return ee(c,t,r)})($(e));if(!i)throw new TypeError("Invalid event target");return new x(function(c){var s=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return c.next(1<a.length?a:a[0])};return i(s),function(){return u(s)}})}function Ee(e,t){return function(r){return function(n){return e[r](t,n)}}}function jr(e){return v(e.addListener)&&v(e.removeListener)}function Pr(e){return v(e.on)&&v(e.off)}function _r(e){return v(e.addEventListener)&&v(e.removeEventListener)}function Lr(e,t){return G(function(r,n){var o=null,i=0,u=!1,c=function(){return u&&!o&&n.complete()};r.subscribe(R(n,function(s){o==null||o.unsubscribe();var a=0,l=i++;$(e(s,l)).subscribe(o=R(n,function(d){return n.next(t?t(s,d,l,a++):d)},function(){o=null,c()}))},function(){u=!0,c()}))})}function V(e,t,r){var n=v(e)||t||r?{next:e,error:t,complete:r}:e;return n?G(function(o,i){var u;(u=n.subscribe)===null||u===void 0||u.call(n);var c=!0;o.subscribe(R(i,function(s){var a;(a=n.next)===null||a===void 0||a.call(n,s),i.next(s)},function(){var s;c=!1,(s=n.complete)===null||s===void 0||s.call(n),i.complete()},function(s){var a;c=!1,(a=n.error)===null||a===void 0||a.call(n,s),i.error(s)},function(){var s,a;c&&((s=n.unsubscribe)===null||s===void 0||s.call(n)),(a=n.finalize)===null||a===void 0||a.call(n)}))}):_e}function Ce(e){switch(e.responseType){case"json":{if("response"in e)return e.response;var t=e;return JSON.parse(t.responseText)}case"document":return e.responseXML;case"text":default:{if("response"in e)return e.response;var t=e;return t.responseText}}}var Ir=function(){function e(t,r,n,o){o===void 0&&(o="download_load"),this.originalEvent=t,this.xhr=r,this.request=n,this.type=o;var i=r.status,u=r.responseType;this.status=i??0,this.responseType=u??"";var c=r.getAllResponseHeaders();this.responseHeaders=c?c.split(`
`).reduce(function(l,d){var f=d.indexOf(": ");return l[d.slice(0,f)]=d.slice(f+2),l},{}):{},this.response=Ce(r);var s=t.loaded,a=t.total;this.loaded=s,this.total=a}return e}(),B=ne(function(e){return function(r,n,o){this.message=r,this.name="AjaxError",this.xhr=n,this.request=o,this.status=n.status,this.responseType=n.responseType;var i;try{i=Ce(n)}catch{i=n.responseText}this.response=i}}),Rr=function(){function e(t,r){return B.call(this,"ajax timeout",t,r),this.name="AjaxTimeoutError",this}return e.prototype=Object.create(B.prototype),e}();function qr(e,t){return j({method:"GET",url:e,headers:t})}function Cr(e,t,r){return j({method:"POST",url:e,body:t,headers:r})}function Ur(e,t){return j({method:"DELETE",url:e,headers:t})}function kr(e,t,r){return j({method:"PUT",url:e,body:t,headers:r})}function Dr(e,t,r){return j({method:"PATCH",url:e,body:t,headers:r})}var Hr=_(function(e){return e.response});function Mr(e,t){return Hr(j({method:"GET",url:e,headers:t}))}var j=function(){var e=function(t){var r=typeof t=="string"?{url:t}:t;return Fr(r)};return e.get=qr,e.post=Cr,e.delete=Ur,e.put=kr,e.patch=Dr,e.getJSON=Mr,e}(),Br="upload",ge="download",K="loadstart",z="progress",xe="load";function Fr(e){return new x(function(t){var r,n,o=U({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},e),i=o.queryParams,u=o.body,c=o.headers,s=o.url;if(!s)throw new TypeError("url is required");if(i){var a;if(s.includes("?")){var l=s.split("?");if(2<l.length)throw new TypeError("invalid url");a=new URLSearchParams(l[1]),new URLSearchParams(i).forEach(function(m,b){return a.set(b,m)}),s=l[0]+"?"+a}else a=new URLSearchParams(i),s=s+"?"+a}var d={};if(c)for(var f in c)c.hasOwnProperty(f)&&(d[f.toLowerCase()]=c[f]);var w=o.crossDomain;!w&&!("x-requested-with"in d)&&(d["x-requested-with"]="XMLHttpRequest");var E=o.withCredentials,p=o.xsrfCookieName,C=o.xsrfHeaderName;if((E||!w)&&p&&C){var T=(n=(r=document==null?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)")))===null||r===void 0?void 0:r.pop())!==null&&n!==void 0?n:"";T&&(d[C]=T)}var A=Gr(u,d),g=U(U({},o),{url:s,headers:d,body:A}),h;h=e.createXHR?e.createXHR():new XMLHttpRequest;{var y=e.progressSubscriber,se=e.includeDownloadProgress,Fe=se===void 0?!1:se,ce=e.includeUploadProgress,Ge=ce===void 0?!1:ce,le=function(m,b){h.addEventListener(m,function(){var S,O=b();(S=y==null?void 0:y.error)===null||S===void 0||S.call(y,O),t.error(O)})};le("timeout",function(){return new Rr(h,g)}),le("abort",function(){return new B("aborted",h,g)});var fe=function(m,b){return new Ir(b,h,g,m+"_"+b.type)},de=function(m,b,S){m.addEventListener(b,function(O){t.next(fe(S,O))})};Ge&&[K,z,xe].forEach(function(m){return de(h.upload,m,Br)}),y&&[K,z].forEach(function(m){return h.upload.addEventListener(m,function(b){var S;return(S=y==null?void 0:y.next)===null||S===void 0?void 0:S.call(y,b)})}),Fe&&[K,z].forEach(function(m){return de(h,m,ge)});var ve=function(m){var b="ajax error"+(m?" "+m:"");t.error(new B(b,h,g))};h.addEventListener("error",function(m){var b;(b=y==null?void 0:y.error)===null||b===void 0||b.call(y,m),ve()}),h.addEventListener(xe,function(m){var b,S,O=h.status;if(O<400){(b=y==null?void 0:y.complete)===null||b===void 0||b.call(y);var ye=void 0;try{ye=fe(ge,m)}catch($e){t.error($e);return}t.next(ye),t.complete()}else(S=y==null?void 0:y.error)===null||S===void 0||S.call(y,m),ve(O)})}var he=g.user,pe=g.method,X=g.async;he?h.open(pe,s,X,he,g.password):h.open(pe,s,X),X&&(h.timeout=g.timeout,h.responseType=g.responseType),"withCredentials"in h&&(h.withCredentials=g.withCredentials);for(var f in d)d.hasOwnProperty(f)&&h.setRequestHeader(f,d[f]);return A?h.send(A):h.send(),function(){h&&h.readyState!==4&&h.abort()}})}function Gr(e,t){var r;if(!e||typeof e=="string"||Kr(e)||zr(e)||Xr(e)||Yr(e)||Jr(e)||Qr(e))return e;if(Vr(e))return e.buffer;if(typeof e=="object")return t["content-type"]=(r=t["content-type"])!==null&&r!==void 0?r:"application/json;charset=utf-8",JSON.stringify(e);throw new TypeError("Unknown body type")}var $r=Object.prototype.toString;function ae(e,t){return $r.call(e)==="[object "+t+"]"}function Xr(e){return ae(e,"ArrayBuffer")}function Yr(e){return ae(e,"File")}function Jr(e){return ae(e,"Blob")}function Vr(e){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(e)}function Kr(e){return typeof FormData<"u"&&e instanceof FormData}function zr(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function Qr(e){return typeof ReadableStream<"u"&&e instanceof ReadableStream}const Wr="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",Zr=e=>{Ue.ariaDisabled=e.toString(),ke.disabled=e,De.disabled=e,He.disabled=e,Me.disabled=e,Be.disabled=e},Nr=e=>{Te.setAttribute("aria-busy",e.toString()),Te.disabled=e},et=e=>{re.setAttribute("aria-busy",e.toString()),e===!0&&(re.innerHTML="En cours de création d'une super théorie du complot")},rt=()=>`Ecris le monologue d'un conspirationniste qui pense qu'il existe un complot impliquant ${ke.value}, ${De.value} et ${He.value}, sur le thème de ${Me.value}, commandité par ${Be.value} (en étant précis et en citant des faits qui tendent à prouver ses dires) :`,tt=e=>e.choices[0].text.split(`
`).map(t=>`<p>${t}</p>`).join(""),Ue=document.querySelector("form"),ke=document.querySelector("#personnage-1"),De=document.querySelector("#personnage-2"),He=document.querySelector("#personnage-3"),Me=document.querySelector("#theme"),Be=document.querySelector("#commanditaires"),re=document.querySelector("#result"),Te=document.querySelector("button"),te=new nr(!1),nt=ee(Ue,"submit").pipe(V(e=>e.preventDefault()),_(()=>rt()),V(()=>te.next(!0)),Lr(e=>j({url:"https://api.openai.com/v1/completions",method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Wr}`},body:{prompt:e,max_tokens:2e3,model:"text-davinci-003"}}).pipe(_(t=>t.response),_(t=>tt(t)))),V(()=>te.next(!1)));nt.subscribe(e=>{re.innerHTML=e});te.subscribe(e=>{Zr(e),Nr(e),et(e)});