/*! For license information please see files_sharing-files_sharing_tab.js.LICENSE.txt */
!function(){"use strict";var t,e,r,n={48143:function(t,e,r){var n=r(20144),o=r(31352),i=r(77958),a=r(25108);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var f=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n=void 0,(r=l(r="_state"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this._state={},this._state.results=[],a.debug("OCA.Sharing.ShareSearch initialized")}var e,r;return e=t,(r=[{key:"state",get:function(){return this._state}},{key:"addNewResult",value:function(t){return""!==t.displayName.trim()&&"function"==typeof t.handler?(this._state.results.push(t),!0):(a.error("Invalid search result provided",t),!1)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s=r(25108);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}var d=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n=void 0,(r=y(r="_state"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this._state={},this._state.actions=[],s.debug("OCA.Sharing.ExternalLinkActions initialized")}var e,r;return e=t,(r=[{key:"state",get:function(){return this._state}},{key:"registerAction",value:function(t){return OC.debug&&s.warn("OCA.Sharing.ExternalLinkActions is deprecated, use OCA.Sharing.ExternalShareAction instead"),"object"===h(t)&&t.icon&&t.name&&t.url?(this._state.actions.push(t),!0):(s.error("Invalid action provided",t),!1)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),v=r(25108);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n=void 0,(r=g(r="_state"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this._state={},this._state.actions=[],v.debug("OCA.Sharing.ExternalShareActions initialized")}var e,r;return e=t,(r=[{key:"state",get:function(){return this._state}},{key:"registerAction",value:function(t){return"object"===b(t)&&"string"==typeof t.id&&"function"==typeof t.data&&Array.isArray(t.shareType)&&"object"===b(t.handlers)&&Object.values(t.handlers).every((function(t){return"function"==typeof t}))?this._state.actions.findIndex((function(e){return e.id===t.id}))>-1?(v.error("An action with the same id ".concat(t.id," already exists"),t),!1):(this._state.actions.push(t),!0):(v.error("Invalid action provided",t),!1)}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function j(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var x=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n=void 0,(r=j(r="_sections"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this._sections=[]}var e,r;return e=t,(r=[{key:"registerSection",value:function(t){this._sections.push(t)}},{key:"getSections",value:function(){return this._sections}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),u=new A(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function h(){}function p(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(L([])));b&&b!==e&&r.call(b,i)&&(d=b);var m=y.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,u){var c=f(t[n],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==E(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),s;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=y,n(m,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,u,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function A(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}r.nc=btoa((0,i.IH)()),window.OCA.Sharing||(window.OCA.Sharing={}),Object.assign(window.OCA.Sharing,{ShareSearch:new f}),Object.assign(window.OCA.Sharing,{ExternalLinkActions:new d}),Object.assign(window.OCA.Sharing,{ExternalShareActions:new w}),Object.assign(window.OCA.Sharing,{ShareTabSections:new x}),n.default.prototype.t=o.Iu,n.default.prototype.n=o.uN;var L=null;window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"sharing",name:(0,o.Iu)("files_sharing","Sharing"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-share-variant" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>',mount:function(t,e,o){return(i=_().mark((function i(){var a,u;return _().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([r.e(7874),r.e(4978)]).then(r.bind(r,74907));case 2:return a=i.sent.default,u=n.default.extend(a),L&&L.$destroy(),L=new u({parent:o}),i.next=8,L.update(e);case 8:L.$mount(t);case 9:case"end":return i.stop()}}),i)})),function(){var t=this,e=arguments;return new Promise((function(r,n){var o=i.apply(t,e);function a(t){A(o,r,n,a,u,"next",t)}function u(t){A(o,r,n,a,u,"throw",t)}a(void 0)}))})();var i},update:function(t){L.update(t)},destroy:function(){L.$destroy(),L=null}}))}))}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,loaded:!1,exports:{}};return n[t].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,t=[],i.O=function(e,r,n,o){if(!r){var a=1/0;for(f=0;f<t.length;f++){r=t[f][0],n=t[f][1],o=t[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){t.splice(f--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[r,n,o]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,r){return i.f[r](t,e),e}),[]))},i.u=function(t){return t+"-"+t+".js?v="+{2250:"34f75a254de23027f023",4978:"0430c84add3e5ebc55b1",7608:"7798e1d24c1d047e1ab6"}[t]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e={},r="nextcloud:",i.l=function(t,n,o,a){if(e[t])e[t].push(n);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){u=s;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var h=function(r,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),r)return r(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),c&&document.head.appendChild(u)}},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},i.j=7870,function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),function(){i.b=document.baseURI||self.location.href;var t={7870:0};i.f.j=function(e,r){var n=i.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var a=i.p+i.u(e),u=new Error;i.l(a,(function(r){if(i.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);if(c)var f=c(i)}for(e&&e(r);l<a.length;l++)o=a[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(f)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),i.nc=void 0;var a=i.O(void 0,[7874],(function(){return i(48143)}));a=i.O(a)}();
//# sourceMappingURL=files_sharing-files_sharing_tab.js.map?v=ed10bab51889665024be