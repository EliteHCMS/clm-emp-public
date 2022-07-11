import{f as Yr}from"./index.5ac7495d.js";import{a as ae,c as ie}from"./_commonjsHelpers.a26ce4be.js";var Ye={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(K,Qr){(function($){K.exports=$()})(function(){return function $(M,Q,E){function C(T,U){if(!Q[T]){if(!M[T]){var v=typeof ie=="function"&&ie;if(!U&&v)return v(T,!0);if(_)return _(T,!0);var h=new Error("Cannot find module '"+T+"'");throw h.code="MODULE_NOT_FOUND",h}var I=Q[T]={exports:{}};M[T][0].call(I.exports,function(D){var Y=M[T][1][D];return C(Y||D)},I,I.exports,$,M,Q,E)}return Q[T].exports}for(var _=typeof ie=="function"&&ie,B=0;B<E.length;B++)C(E[B]);return C}({1:[function($,M,Q){(function(E){var C=E.MutationObserver||E.WebKitMutationObserver,_;if(C){var B=0,T=new C(D),U=E.document.createTextNode("");T.observe(U,{characterData:!0}),_=function(){U.data=B=++B%2}}else if(!E.setImmediate&&typeof E.MessageChannel!="undefined"){var v=new E.MessageChannel;v.port1.onmessage=D,_=function(){v.port2.postMessage(0)}}else"document"in E&&"onreadystatechange"in E.document.createElement("script")?_=function(){var A=E.document.createElement("script");A.onreadystatechange=function(){D(),A.onreadystatechange=null,A.parentNode.removeChild(A),A=null},E.document.documentElement.appendChild(A)}:_=function(){setTimeout(D,0)};var h,I=[];function D(){h=!0;for(var A,z,N=I.length;N;){for(z=I,I=[],A=-1;++A<N;)z[A]();N=I.length}h=!1}M.exports=Y;function Y(A){I.push(A)===1&&!h&&_()}}).call(this,typeof ae!="undefined"?ae:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function($,M,Q){var E=$(1);function C(){}var _={},B=["REJECTED"],T=["FULFILLED"],U=["PENDING"];M.exports=v;function v(l){if(typeof l!="function")throw new TypeError("resolver must be a function");this.state=U,this.queue=[],this.outcome=void 0,l!==C&&Y(this,l)}v.prototype.catch=function(l){return this.then(null,l)},v.prototype.then=function(l,g){if(typeof l!="function"&&this.state===T||typeof g!="function"&&this.state===B)return this;var y=new this.constructor(C);if(this.state!==U){var w=this.state===T?l:g;I(y,w,this.outcome)}else this.queue.push(new h(y,l,g));return y};function h(l,g,y){this.promise=l,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}h.prototype.callFulfilled=function(l){_.resolve(this.promise,l)},h.prototype.otherCallFulfilled=function(l){I(this.promise,this.onFulfilled,l)},h.prototype.callRejected=function(l){_.reject(this.promise,l)},h.prototype.otherCallRejected=function(l){I(this.promise,this.onRejected,l)};function I(l,g,y){E(function(){var w;try{w=g(y)}catch(x){return _.reject(l,x)}w===l?_.reject(l,new TypeError("Cannot resolve promise with itself")):_.resolve(l,w)})}_.resolve=function(l,g){var y=A(D,g);if(y.status==="error")return _.reject(l,y.value);var w=y.value;if(w)Y(l,w);else{l.state=T,l.outcome=g;for(var x=-1,P=l.queue.length;++x<P;)l.queue[x].callFulfilled(g)}return l},_.reject=function(l,g){l.state=B,l.outcome=g;for(var y=-1,w=l.queue.length;++y<w;)l.queue[y].callRejected(g);return l};function D(l){var g=l&&l.then;if(l&&(typeof l=="object"||typeof l=="function")&&typeof g=="function")return function(){g.apply(l,arguments)}}function Y(l,g){var y=!1;function w(L){y||(y=!0,_.reject(l,L))}function x(L){y||(y=!0,_.resolve(l,L))}function P(){g(x,w)}var O=A(P);O.status==="error"&&w(O.value)}function A(l,g){var y={};try{y.value=l(g),y.status="success"}catch(w){y.status="error",y.value=w}return y}v.resolve=z;function z(l){return l instanceof this?l:_.resolve(new this(C),l)}v.reject=N;function N(l){var g=new this(C);return _.reject(g,l)}v.all=fe;function fe(l){var g=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,w=!1;if(!y)return this.resolve([]);for(var x=new Array(y),P=0,O=-1,L=new this(C);++O<y;)W(l[O],O);return L;function W(k,ne){g.resolve(k).then(ue,function(J){w||(w=!0,_.reject(L,J))});function ue(J){x[ne]=J,++P===y&&!w&&(w=!0,_.resolve(L,x))}}}v.race=X;function X(l){var g=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,w=!1;if(!y)return this.resolve([]);for(var x=-1,P=new this(C);++x<y;)O(l[x]);return P;function O(L){g.resolve(L).then(function(W){w||(w=!0,_.resolve(P,W))},function(W){w||(w=!0,_.reject(P,W))})}}},{1:1}],3:[function($,M,Q){(function(E){typeof E.Promise!="function"&&(E.Promise=$(2))}).call(this,typeof ae!="undefined"?ae:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{2:2}],4:[function($,M,Q){var E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function C(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var B=_();function T(){try{if(!B||!B.open)return!1;var e=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||n)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function U(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(t){if(t.name!=="TypeError")throw t;for(var r=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,o=new r,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(n.type)}}typeof Promise=="undefined"&&$(3);var v=Promise;function h(e,n){n&&e.then(function(r){n(null,r)},function(r){n(r)})}function I(e,n,r){typeof n=="function"&&e.then(n),typeof r=="function"&&e.catch(r)}function D(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function Y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var A="local-forage-detect-blob-support",z=void 0,N={},fe=Object.prototype.toString,X="readonly",l="readwrite";function g(e){for(var n=e.length,r=new ArrayBuffer(n),o=new Uint8Array(r),a=0;a<n;a++)o[a]=e.charCodeAt(a);return r}function y(e){return new v(function(n){var r=e.transaction(A,l),o=U([""]);r.objectStore(A).put(o,"key"),r.onabort=function(a){a.preventDefault(),a.stopPropagation(),n(!1)},r.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function w(e){return typeof z=="boolean"?v.resolve(z):y(e).then(function(n){return z=n,z})}function x(e){var n=N[e.name],r={};r.promise=new v(function(o,a){r.resolve=o,r.reject=a}),n.deferredOperations.push(r),n.dbReady?n.dbReady=n.dbReady.then(function(){return r.promise}):n.dbReady=r.promise}function P(e){var n=N[e.name],r=n.deferredOperations.pop();if(r)return r.resolve(),r.promise}function O(e,n){var r=N[e.name],o=r.deferredOperations.pop();if(o)return o.reject(n),o.promise}function L(e,n){return new v(function(r,o){if(N[e.name]=N[e.name]||be(),e.db)if(n)x(e),e.db.close();else return r(e.db);var a=[e.name];n&&a.push(e.version);var t=B.open.apply(B,a);n&&(t.onupgradeneeded=function(i){var f=t.result;try{f.createObjectStore(e.storeName),i.oldVersion<=1&&f.createObjectStore(A)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),t.onerror=function(i){i.preventDefault(),o(t.error)},t.onsuccess=function(){var i=t.result;i.onversionchange=function(f){f.target.close()},r(i),P(e)}})}function W(e){return L(e,!1)}function k(e){return L(e,!0)}function ne(e,n){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==n&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||r){if(r){var t=e.db.version+1;t>e.version&&(e.version=t)}return!0}return!1}function ue(e){return new v(function(n,r){var o=new FileReader;o.onerror=r,o.onloadend=function(a){var t=btoa(a.target.result||"");n({__local_forage_encoded_blob:!0,data:t,type:e.type})},o.readAsBinaryString(e)})}function J(e){var n=g(atob(e.data));return U([n],{type:e.type})}function pe(e){return e&&e.__local_forage_encoded_blob}function $e(e){var n=this,r=n._initReady().then(function(){var o=N[n._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return I(r,e,e),r}function ze(e){x(e);for(var n=N[e.name],r=n.forages,o=0;o<r.length;o++){var a=r[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,W(e).then(function(t){return e.db=t,ne(e)?k(e):t}).then(function(t){e.db=n.db=t;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=t}).catch(function(t){throw O(e,t),t})}function V(e,n,r,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,n);r(null,a)}catch(t){if(o>0&&(!e.db||t.name==="InvalidStateError"||t.name==="NotFoundError"))return v.resolve().then(function(){if(!e.db||t.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),k(e)}).then(function(){return ze(e).then(function(){V(e,n,r,o-1)})}).catch(r);r(t)}}function be(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function We(e){var n=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var a=N[r.name];a||(a=be(),N[r.name]=a),a.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=$e);var t=[];function i(){return v.resolve()}for(var f=0;f<a.forages.length;f++){var u=a.forages[f];u!==n&&t.push(u._initReady().catch(i))}var s=a.forages.slice(0);return v.all(t).then(function(){return r.db=a.db,W(r)}).then(function(c){return r.db=c,ne(r,n._defaultConfig.version)?k(r):c}).then(function(c){r.db=a.db=c,n._dbInfo=r;for(var d=0;d<s.length;d++){var m=s[d];m!==n&&(m._dbInfo.db=r.db,m._dbInfo.version=r.version)}})}function Ve(e,n){var r=this;e=D(e);var o=new v(function(a,t){r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.get(e);s.onsuccess=function(){var c=s.result;c===void 0&&(c=null),pe(c)&&(c=J(c)),a(c)},s.onerror=function(){t(s.error)}}catch(c){t(c)}})}).catch(t)});return h(o,n),o}function Ke(e,n){var r=this,o=new v(function(a,t){r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.openCursor(),c=1;s.onsuccess=function(){var d=s.result;if(d){var m=d.value;pe(m)&&(m=J(m));var p=e(m,d.key,c++);p!==void 0?a(p):d.continue()}else a()},s.onerror=function(){t(s.error)}}catch(d){t(d)}})}).catch(t)});return h(o,n),o}function Qe(e,n,r){var o=this;e=D(e);var a=new v(function(t,i){var f;o.ready().then(function(){return f=o._dbInfo,fe.call(n)==="[object Blob]"?w(f.db).then(function(u){return u?n:ue(n)}):n}).then(function(u){V(o._dbInfo,l,function(s,c){if(s)return i(s);try{var d=c.objectStore(o._dbInfo.storeName);u===null&&(u=void 0);var m=d.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),t(u)},c.onabort=c.onerror=function(){var p=m.error?m.error:m.transaction.error;i(p)}}catch(p){i(p)}})}).catch(i)});return h(a,r),a}function Ge(e,n){var r=this;e=D(e);var o=new v(function(a,t){r.ready().then(function(){V(r._dbInfo,l,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.delete(e);f.oncomplete=function(){a()},f.onerror=function(){t(s.error)},f.onabort=function(){var c=s.error?s.error:s.transaction.error;t(c)}}catch(c){t(c)}})}).catch(t)});return h(o,n),o}function He(e){var n=this,r=new v(function(o,a){n.ready().then(function(){V(n._dbInfo,l,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var s=u.error?u.error:u.transaction.error;a(s)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function Xe(e){var n=this,r=new v(function(o,a){n.ready().then(function(){V(n._dbInfo,X,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.count();u.onsuccess=function(){o(u.result)},u.onerror=function(){a(u.error)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function Je(e,n){var r=this,o=new v(function(a,t){if(e<0){a(null);return}r.ready().then(function(){V(r._dbInfo,X,function(i,f){if(i)return t(i);try{var u=f.objectStore(r._dbInfo.storeName),s=!1,c=u.openKeyCursor();c.onsuccess=function(){var d=c.result;if(!d){a(null);return}e===0||s?a(d.key):(s=!0,d.advance(e))},c.onerror=function(){t(c.error)}}catch(d){t(d)}})}).catch(t)});return h(o,n),o}function je(e){var n=this,r=new v(function(o,a){n.ready().then(function(){V(n._dbInfo,X,function(t,i){if(t)return a(t);try{var f=i.objectStore(n._dbInfo.storeName),u=f.openKeyCursor(),s=[];u.onsuccess=function(){var c=u.result;if(!c){o(s);return}s.push(c.key),c.continue()},u.onerror=function(){a(u.error)}}catch(c){a(c)}})}).catch(a)});return h(r,e),r}function Ze(e,n){n=Y.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;if(!e.name)a=v.reject("Invalid arguments");else{var t=e.name===r.name&&o._dbInfo.db,i=t?v.resolve(o._dbInfo.db):W(e).then(function(f){var u=N[e.name],s=u.forages;u.db=f;for(var c=0;c<s.length;c++)s[c]._dbInfo.db=f;return f});e.storeName?a=i.then(function(f){if(!!f.objectStoreNames.contains(e.storeName)){var u=f.version+1;x(e);var s=N[e.name],c=s.forages;f.close();for(var d=0;d<c.length;d++){var m=c[d];m._dbInfo.db=null,m._dbInfo.version=u}var p=new v(function(b,R){var S=B.open(e.name,u);S.onerror=function(F){var ee=S.result;ee.close(),R(F)},S.onupgradeneeded=function(){var F=S.result;F.deleteObjectStore(e.storeName)},S.onsuccess=function(){var F=S.result;F.close(),b(F)}});return p.then(function(b){s.db=b;for(var R=0;R<c.length;R++){var S=c[R];S._dbInfo.db=b,P(S._dbInfo)}}).catch(function(b){throw(O(e,b)||v.resolve()).catch(function(){}),b})}}):a=i.then(function(f){x(e);var u=N[e.name],s=u.forages;f.close();for(var c=0;c<s.length;c++){var d=s[c];d._dbInfo.db=null}var m=new v(function(p,b){var R=B.deleteDatabase(e.name);R.onerror=function(){var S=R.result;S&&S.close(),b(R.error)},R.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},R.onsuccess=function(){var S=R.result;S&&S.close(),p(S)}});return m.then(function(p){u.db=p;for(var b=0;b<s.length;b++){var R=s[b];P(R._dbInfo)}}).catch(function(p){throw(O(e,p)||v.resolve()).catch(function(){}),p})})}return h(a,n),a}var ke={_driver:"asyncStorage",_initStorage:We,_support:T(),iterate:Ke,getItem:Ve,setItem:Qe,removeItem:Ge,clear:He,length:Xe,key:Je,keys:je,dropInstance:Ze};function qe(){return typeof openDatabase=="function"}var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",er="~~local_forage_type~",_e=/^~~local_forage_type~([^~]+)~/,te="__lfsc__:",se=te.length,ce="arbf",le="blob",we="si08",Ee="ui08",Se="uic8",Ie="si16",Re="si32",De="ur16",Ae="ui32",Ne="fl32",Te="fl64",xe=se+ce.length,Be=Object.prototype.toString;function Ce(e){var n=e.length*.75,r=e.length,o,a=0,t,i,f,u;e[e.length-1]==="="&&(n--,e[e.length-2]==="="&&n--);var s=new ArrayBuffer(n),c=new Uint8Array(s);for(o=0;o<r;o+=4)t=G.indexOf(e[o]),i=G.indexOf(e[o+1]),f=G.indexOf(e[o+2]),u=G.indexOf(e[o+3]),c[a++]=t<<2|i>>4,c[a++]=(i&15)<<4|f>>2,c[a++]=(f&3)<<6|u&63;return s}function ve(e){var n=new Uint8Array(e),r="",o;for(o=0;o<n.length;o+=3)r+=G[n[o]>>2],r+=G[(n[o]&3)<<4|n[o+1]>>4],r+=G[(n[o+1]&15)<<2|n[o+2]>>6],r+=G[n[o+2]&63];return n.length%3===2?r=r.substring(0,r.length-1)+"=":n.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function rr(e,n){var r="";if(e&&(r=Be.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Be.call(e.buffer)==="[object ArrayBuffer]")){var o,a=te;e instanceof ArrayBuffer?(o=e,a+=ce):(o=e.buffer,r==="[object Int8Array]"?a+=we:r==="[object Uint8Array]"?a+=Ee:r==="[object Uint8ClampedArray]"?a+=Se:r==="[object Int16Array]"?a+=Ie:r==="[object Uint16Array]"?a+=De:r==="[object Int32Array]"?a+=Re:r==="[object Uint32Array]"?a+=Ae:r==="[object Float32Array]"?a+=Ne:r==="[object Float64Array]"?a+=Te:n(new Error("Failed to get type for BinaryArray"))),n(a+ve(o))}else if(r==="[object Blob]"){var t=new FileReader;t.onload=function(){var i=er+e.type+"~"+ve(this.result);n(te+le+i)},t.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),n(null,i)}}function nr(e){if(e.substring(0,se)!==te)return JSON.parse(e);var n=e.substring(xe),r=e.substring(se,xe),o;if(r===le&&_e.test(n)){var a=n.match(_e);o=a[1],n=n.substring(a[0].length)}var t=Ce(n);switch(r){case ce:return t;case le:return U([t],{type:o});case we:return new Int8Array(t);case Ee:return new Uint8Array(t);case Se:return new Uint8ClampedArray(t);case Ie:return new Int16Array(t);case De:return new Uint16Array(t);case Re:return new Int32Array(t);case Ae:return new Uint32Array(t);case Ne:return new Float32Array(t);case Te:return new Float64Array(t);default:throw new Error("Unkown type: "+r)}}var de={serialize:rr,deserialize:nr,stringToBuffer:Ce,bufferToString:ve};function Pe(e,n,r,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,o)}function tr(e){var n=this,r={db:null};if(e)for(var o in e)r[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new v(function(t,i){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(f){return i(f)}r.db.transaction(function(f){Pe(f,r,function(){n._dbInfo=r,t()},function(u,s){i(s)})},i)});return r.serializer=de,a}function H(e,n,r,o,a,t){e.executeSql(r,o,a,function(i,f){f.code===f.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],function(u,s){s.rows.length?t(u,f):Pe(u,n,function(){u.executeSql(r,o,a,t)},t)},t):t(i,f)},t)}function or(e,n){var r=this;e=D(e);var o=new v(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){H(f,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(u,s){var c=s.rows.length?s.rows.item(0).value:null;c&&(c=i.serializer.deserialize(c)),a(c)},function(u,s){t(s)})})}).catch(t)});return h(o,n),o}function ar(e,n){var r=this,o=new v(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){H(f,i,"SELECT * FROM "+i.storeName,[],function(u,s){for(var c=s.rows,d=c.length,m=0;m<d;m++){var p=c.item(m),b=p.value;if(b&&(b=i.serializer.deserialize(b)),b=e(b,p.key,m+1),b!==void 0){a(b);return}}a()},function(u,s){t(s)})})}).catch(t)});return h(o,n),o}function Oe(e,n,r,o){var a=this;e=D(e);var t=new v(function(i,f){a.ready().then(function(){n===void 0&&(n=null);var u=n,s=a._dbInfo;s.serializer.serialize(n,function(c,d){d?f(d):s.db.transaction(function(m){H(m,s,"INSERT OR REPLACE INTO "+s.storeName+" (key, value) VALUES (?, ?)",[e,c],function(){i(u)},function(p,b){f(b)})},function(m){if(m.code===m.QUOTA_ERR){if(o>0){i(Oe.apply(a,[e,u,r,o-1]));return}f(m)}})})}).catch(f)});return h(t,r),t}function ir(e,n,r){return Oe.apply(this,[e,n,r,1])}function fr(e,n){var r=this;e=D(e);var o=new v(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){H(f,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(u,s){t(s)})})}).catch(t)});return h(o,n),o}function ur(e){var n=this,r=new v(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){H(i,t,"DELETE FROM "+t.storeName,[],function(){o()},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function sr(e){var n=this,r=new v(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){H(i,t,"SELECT COUNT(key) as c FROM "+t.storeName,[],function(f,u){var s=u.rows.item(0).c;o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function cr(e,n){var r=this,o=new v(function(a,t){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){H(f,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(u,s){var c=s.rows.length?s.rows.item(0).key:null;a(c)},function(u,s){t(s)})})}).catch(t)});return h(o,n),o}function lr(e){var n=this,r=new v(function(o,a){n.ready().then(function(){var t=n._dbInfo;t.db.transaction(function(i){H(i,t,"SELECT key FROM "+t.storeName,[],function(f,u){for(var s=[],c=0;c<u.rows.length;c++)s.push(u.rows.item(c).key);o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function vr(e){return new v(function(n,r){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,t){for(var i=[],f=0;f<t.rows.length;f++)i.push(t.rows.item(f).name);n({db:e,storeNames:i})},function(a,t){r(t)})},function(o){r(o)})})}function dr(e,n){n=Y.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;return e.name?a=new v(function(t){var i;e.name===r.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?t({db:i,storeNames:[e.storeName]}):t(vr(i))}).then(function(t){return new v(function(i,f){t.db.transaction(function(u){function s(p){return new v(function(b,R){u.executeSql("DROP TABLE IF EXISTS "+p,[],function(){b()},function(S,F){R(F)})})}for(var c=[],d=0,m=t.storeNames.length;d<m;d++)c.push(s(t.storeNames[d]));v.all(c).then(function(){i()}).catch(function(p){f(p)})},function(u){f(u)})})}):a=v.reject("Invalid arguments"),h(a,n),a}var hr={_driver:"webSQLStorage",_initStorage:tr,_support:qe(),iterate:ar,getItem:or,setItem:ir,removeItem:fr,clear:ur,length:sr,key:cr,keys:lr,dropInstance:dr};function mr(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Le(e,n){var r=e.name+"/";return e.storeName!==n.storeName&&(r+=e.storeName+"/"),r}function yr(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function gr(){return!yr()||localStorage.length>0}function pr(e){var n=this,r={};if(e)for(var o in e)r[o]=e[o];return r.keyPrefix=Le(e,n._defaultConfig),gr()?(n._dbInfo=r,r.serializer=de,v.resolve()):v.reject()}function br(e){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var t=localStorage.key(a);t.indexOf(o)===0&&localStorage.removeItem(t)}});return h(r,e),r}function _r(e,n){var r=this;e=D(e);var o=r.ready().then(function(){var a=r._dbInfo,t=localStorage.getItem(a.keyPrefix+e);return t&&(t=a.serializer.deserialize(t)),t});return h(o,n),o}function wr(e,n){var r=this,o=r.ready().then(function(){for(var a=r._dbInfo,t=a.keyPrefix,i=t.length,f=localStorage.length,u=1,s=0;s<f;s++){var c=localStorage.key(s);if(c.indexOf(t)===0){var d=localStorage.getItem(c);if(d&&(d=a.serializer.deserialize(d)),d=e(d,c.substring(i),u++),d!==void 0)return d}}});return h(o,n),o}function Er(e,n){var r=this,o=r.ready().then(function(){var a=r._dbInfo,t;try{t=localStorage.key(e)}catch{t=null}return t&&(t=t.substring(a.keyPrefix.length)),t});return h(o,n),o}function Sr(e){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo,a=localStorage.length,t=[],i=0;i<a;i++){var f=localStorage.key(i);f.indexOf(o.keyPrefix)===0&&t.push(f.substring(o.keyPrefix.length))}return t});return h(r,e),r}function Ir(e){var n=this,r=n.keys().then(function(o){return o.length});return h(r,e),r}function Rr(e,n){var r=this;e=D(e);var o=r.ready().then(function(){var a=r._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return h(o,n),o}function Dr(e,n,r){var o=this;e=D(e);var a=o.ready().then(function(){n===void 0&&(n=null);var t=n;return new v(function(i,f){var u=o._dbInfo;u.serializer.serialize(n,function(s,c){if(c)f(c);else try{localStorage.setItem(u.keyPrefix+e,s),i(t)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&f(d),f(d)}})})});return h(a,r),a}function Ar(e,n){if(n=Y.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this,a;return e.name?a=new v(function(t){e.storeName?t(Le(e,o._defaultConfig)):t(e.name+"/")}).then(function(t){for(var i=localStorage.length-1;i>=0;i--){var f=localStorage.key(i);f.indexOf(t)===0&&localStorage.removeItem(f)}}):a=v.reject("Invalid arguments"),h(a,n),a}var Nr={_driver:"localStorageWrapper",_initStorage:pr,_support:mr(),iterate:wr,getItem:_r,setItem:Dr,removeItem:Rr,clear:br,length:Ir,key:Er,keys:Sr,dropInstance:Ar},Tr=function(n,r){return n===r||typeof n=="number"&&typeof r=="number"&&isNaN(n)&&isNaN(r)},xr=function(n,r){for(var o=n.length,a=0;a<o;){if(Tr(n[a],r))return!0;a++}return!1},Fe=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},q={},Me={},j={INDEXEDDB:ke,WEBSQL:hr,LOCALSTORAGE:Nr},Br=[j.INDEXEDDB._driver,j.WEBSQL._driver,j.LOCALSTORAGE._driver],oe=["dropInstance"],he=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(oe),Cr={description:"",driver:Br.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Pr(e,n){e[n]=function(){var r=arguments;return e.ready().then(function(){return e[n].apply(e,r)})}}function me(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var r in n)n.hasOwnProperty(r)&&(Fe(n[r])?arguments[0][r]=n[r].slice():arguments[0][r]=n[r])}return arguments[0]}var Or=function(){function e(n){C(this,e);for(var r in j)if(j.hasOwnProperty(r)){var o=j[r],a=o._driver;this[r]=a,q[a]||this.defineDriver(o)}this._defaultConfig=me({},Cr),this._config=me({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(r){if((typeof r=="undefined"?"undefined":E(r))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in r){if(o==="storeName"&&(r[o]=r[o].replace(/\W/g,"_")),o==="version"&&typeof r[o]!="number")return new Error("Database version must be a number.");this._config[o]=r[o]}return"driver"in r&&r.driver?this.setDriver(this._config.driver):!0}else return typeof r=="string"?this._config[r]:this._config},e.prototype.defineDriver=function(r,o,a){var t=new v(function(i,f){try{var u=r._driver,s=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!r._driver){f(s);return}for(var c=he.concat("_initStorage"),d=0,m=c.length;d<m;d++){var p=c[d],b=!xr(oe,p);if((b||r[p])&&typeof r[p]!="function"){f(s);return}}var R=function(){for(var ee=function(Mr){return function(){var Ur=new Error("Method "+Mr+" is not implemented by the current driver"),Ue=v.reject(Ur);return h(Ue,arguments[arguments.length-1]),Ue}},ye=0,Fr=oe.length;ye<Fr;ye++){var ge=oe[ye];r[ge]||(r[ge]=ee(ge))}};R();var S=function(ee){q[u]&&console.info("Redefining LocalForage driver: "+u),q[u]=r,Me[u]=ee,i()};"_support"in r?r._support&&typeof r._support=="function"?r._support().then(S,f):S(!!r._support):S(!0)}catch(F){f(F)}});return I(t,o,a),t},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(r,o,a){var t=q[r]?v.resolve(q[r]):v.reject(new Error("Driver not found."));return I(t,o,a),t},e.prototype.getSerializer=function(r){var o=v.resolve(de);return I(o,r),o},e.prototype.ready=function(r){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return I(a,r,r),a},e.prototype.setDriver=function(r,o,a){var t=this;Fe(r)||(r=[r]);var i=this._getSupportedDrivers(r);function f(){t._config.driver=t.driver()}function u(d){return t._extend(d),f(),t._ready=t._initStorage(t._config),t._ready}function s(d){return function(){var m=0;function p(){for(;m<d.length;){var b=d[m];return m++,t._dbInfo=null,t._ready=null,t.getDriver(b).then(u).catch(p)}f();var R=new Error("No available storage method found.");return t._driverSet=v.reject(R),t._driverSet}return p()}}var c=this._driverSet!==null?this._driverSet.catch(function(){return v.resolve()}):v.resolve();return this._driverSet=c.then(function(){var d=i[0];return t._dbInfo=null,t._ready=null,t.getDriver(d).then(function(m){t._driver=m._driver,f(),t._wrapLibraryMethodsWithReady(),t._initDriver=s(i)})}).catch(function(){f();var d=new Error("No available storage method found.");return t._driverSet=v.reject(d),t._driverSet}),I(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(r){return!!Me[r]},e.prototype._extend=function(r){me(this,r)},e.prototype._getSupportedDrivers=function(r){for(var o=[],a=0,t=r.length;a<t;a++){var i=r[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var r=0,o=he.length;r<o;r++)Pr(this,he[r])},e.prototype.createInstance=function(r){return new e(r)},e}(),Lr=new Or;M.exports=Lr},{3:3}]},{},[4])(4)})})(Ye);var Z=Ye.exports;const re="clm-emp-db",$r=Z.createInstance({name:re,storeName:"user"}),zr=Z.createInstance({name:re,storeName:"employees"}),Wr=Z.createInstance({name:re,storeName:"interviews"}),Vr=Z.createInstance({name:re,storeName:"inProcess"}),Kr=Z.createInstance({name:re,storeName:"pending"});var Jr=Yr(({app:K})=>{K.config.globalProperties.$localforage=Z,K.config.globalProperties.$userDB=$r,K.config.globalProperties.$employeesDB=zr,K.config.globalProperties.$interviewsDB=Wr,K.config.globalProperties.$inProcessDB=Vr,K.config.globalProperties.$pendingDB=Kr});export{Jr as default,zr as employeesDB,Vr as inProcessDB,Wr as interviewsDB,Z as localforage,Kr as pendingDB,$r as userDB};
