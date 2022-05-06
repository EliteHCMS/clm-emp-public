import{k as Ue,r as De,i as Be,f as Ve}from"./index.4b0ad8df.js";function Ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var X=function(){function e(r,i){this.operator=r,this.value=i,Object.defineProperty(this,"t",{writable:!0})}var t,n;return e.prototype.addNote=function(r){this.t=this.t||[],this.t.push(r)},t=e,(n=[{key:"notes",get:function(){return this.t}}])&&Ye(t.prototype,n),e}(),S=function(e){function t(){return e.apply(this,arguments)||this}return N(t,e),t}(X),m=function(e){function t(n,r){if(!Array.isArray(r))throw new Error('"'+n+'" operator expects to receive an array of conditions');return e.call(this,n,r)||this}return N(t,e),t}(S),d="__itself__",b=function(e){function t(n,r,i){var o;return(o=e.call(this,n,i)||this).field=r,o}return N(t,e),t}(X),Z=new S("__null__",null),_=Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);function Ge(e,t){return t instanceof m&&t.operator===e}function H(e,t){return t.length===1?t[0]:new m(e,function n(r,i,o){for(var a=o||[],u=0,s=i.length;u<s;u++){var c=i[u];Ge(r,c)?n(r,c.value,a):a.push(c)}return a}(e,t))}var Je=function(e){return e},K=function(){return Object.create(null)},ee=Object.defineProperty(K(),"__@type@__",{value:"ignore value"});function Le(e,t,n){if(n===void 0&&(n=!1),!e||e&&e.constructor!==Object)return!1;for(var r in e)if(_(e,r)&&_(t,r)&&(!n||e[r]!==ee))return!0;return!1}function Qe(e){var t=[];for(var n in e)_(e,n)&&e[n]!==ee&&t.push(n);return t}function O(e,t){t!==Z&&e.push(t)}var te=function(e){return H("and",e)},re={compound:function(e,t,n){var r=(Array.isArray(t)?t:[t]).map(function(i){return n.parse(i)});return new m(e.name,r)},field:function(e,t,n){return new b(e.name,n.field,t)},document:function(e,t){return new S(e.name,t)}},ne=function(){function e(n,r){var i=this;r===void 0&&(r=K()),this.i=void 0,this.o=void 0,this.u=void 0,this.s=void 0,this.h=void 0,this.parse=this.parse.bind(this),this.s={operatorToConditionName:r.operatorToConditionName||Je,defaultOperatorName:r.defaultOperatorName||"eq",mergeFinalConditions:r.mergeFinalConditions||te},this.i=Object.keys(n).reduce(function(o,a){return o[a]=h({name:i.s.operatorToConditionName(a)},n[a]),o},{}),this.o=h({},r.fieldContext,{field:"",query:{},parse:this.parse,hasOperators:function(o){return Le(o,i.i,r.useIgnoreValue)}}),this.u=h({},r.documentContext,{parse:this.parse,query:{}}),this.h=r.useIgnoreValue?Qe:Object.keys}var t=e.prototype;return t.setParse=function(n){this.parse=n,this.o.parse=n,this.u.parse=n},t.parseField=function(n,r,i,o){var a=this.i[r];if(!a)throw new Error('Unsupported operator "'+r+'"');if(a.type!=="field")throw new Error("Unexpected "+a.type+' operator "'+r+'" at field level');return this.o.field=n,this.o.query=o,this.parseInstruction(a,i,this.o)},t.parseInstruction=function(n,r,i){return typeof n.validate=="function"&&n.validate(n,r),(n.parse||re[n.type])(n,r,i)},t.parseFieldOperators=function(n,r){for(var i=[],o=this.h(r),a=0,u=o.length;a<u;a++){var s=o[a];if(!this.i[s])throw new Error('Field query for "'+n+'" may contain only operators or a plain object as a value');O(i,this.parseField(n,s,r[s],r))}return i},t.parse=function(n){var r=[],i=this.h(n);this.u.query=n;for(var o=0,a=i.length;o<a;o++){var u=i[o],s=n[u],c=this.i[u];if(c){if(c.type!=="document"&&c.type!=="compound")throw new Error('Cannot use parsing instruction for operator "'+u+'" in "document" context as it is supposed to be used in  "'+c.type+'" context');O(r,this.parseInstruction(c,s,this.u))}else this.o.hasOperators(s)?r.push.apply(r,this.parseFieldOperators(u,s)):O(r,this.parseField(u,this.s.defaultOperatorName,s,n))}return this.s.mergeFinalConditions(r)},e}();function x(e,t){var n=e[t];if(typeof n!="function")throw new Error('Unable to interpret "'+t+'" condition. Did you forget to register interpreter for it?');return n}function We(e){return e.operator}function Xe(e,t){var n,r=t,i=r&&r.getInterpreterName||We;switch(r?r.numberOfArguments:0){case 1:n=function(a){var u=i(a,r);return x(e,u)(a,o)};break;case 3:n=function(a,u,s){var c=i(a,r);return x(e,c)(a,u,s,o)};break;default:n=function(a,u){var s=i(a,r);return x(e,s)(a,u,o)}}var o=h({},r,{interpret:n});return o.interpret}function Ze(e,t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a=e.apply(void 0,[n].concat(i)),u=t.bind(null,a);return u.ast=a,u}}ne.prototype.parseInstruction;function ie(e,t){if(!Array.isArray(t))throw new Error('"'+e.name+'" expects value to be an array')}function oe(e,t){if(ie(e,t),!t.length)throw new Error('"'+e.name+'" expects to have at least one element in array')}var T=function(e){return function(t,n){if(typeof n!==e)throw new Error('"'+t.name+'" expects value to be a "'+e+'"')}},ae={type:"compound",validate:oe,parse:function(e,t,n){var r=n.parse,i=t.map(function(o){return r(o)});return H(e.name,i)}},He=ae,Ke={type:"compound",validate:oe},et={type:"field",validate:function(e,t){if(!(t&&(t instanceof RegExp||t.constructor===Object)))throw new Error('"'+e.name+'" expects to receive either regular expression or object of field operators')},parse:function(e,t,n){var r=t instanceof RegExp?new b("regex",n.field,t):n.parse(t,n);return new m(e.name,[r])}},ue={type:"field",validate:function(e,t){if(!t||t.constructor!==Object)throw new Error('"'+e.name+'" expects to receive an object with nested query or field level operators')},parse:function(e,t,n){var r=n.parse,i=n.field,o=(0,n.hasOperators)(t)?r(t,{field:d}):r(t);return new b(e.name,i,o)}},se={type:"field",validate:T("number")},$={type:"field",validate:ie},ce=$,fe=$,tt={type:"field",validate:function(e,t){if(!Array.isArray(t)||t.length!==2)throw new Error('"'+e.name+'" expects an array with 2 numeric elements')}},le={type:"field",validate:T("boolean")},C={type:"field",validate:function(e,t){if(!(typeof t=="string"||typeof t=="number"||t instanceof Date))throw new Error('"'+e.name+'" expects value to be comparable (i.e., string, number or date)')}},w=C,pe=w,he=w,R={type:"field"},ve=R,de={type:"field",validate:function(e,t){if(!(t instanceof RegExp)&&typeof t!="string")throw new Error('"'+e.name+'" expects value to be a regular expression or a string that represents regular expression')},parse:function(e,t,n){var r=typeof t=="string"?new RegExp(t,n.query.$options||""):t;return new b(e.name,n.field,r)}},ye={type:"field",parse:function(){return Z}},rt={type:"document",validate:T("function")},nt=Object.freeze({__proto__:null,$and:ae,$or:He,$nor:Ke,$not:et,$elemMatch:ue,$size:se,$in:$,$nin:ce,$all:fe,$mod:tt,$exists:le,$gte:C,$gt:w,$lt:pe,$lte:he,$eq:R,$ne:ve,$regex:de,$options:ye,$where:rt}),it=function(e){var t,n;function r(i){return e.call(this,i,{defaultOperatorName:"$eq",operatorToConditionName:function(o){return o.slice(1)}})||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.parse=function(i,o){return o&&o.field?te(this.parseFieldOperators(o.field,i)):e.prototype.parse.call(this,i)},r}(ne),A=nt;function q(e,t,n){for(var r=0,i=e.length;r<i;r++)if(n(e[r],t)===0)return!0;return!1}function k(e,t){return Array.isArray(e)&&Number.isNaN(Number(t))}function V(e,t,n){if(!k(e,t))return n(e,t);for(var r=[],i=0;i<e.length;i++){var o=n(e[i],t);o!==void 0&&(r=r.concat(o))}return r}function f(e){return function(t,n,r){var i=r.get(n,t.field);return Array.isArray(i)?i.some(function(o){return e(t,o,r)}):e(t,i,r)}}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ot=function(e,t){return e[t]};function ge(e,t,n){var r=t.lastIndexOf(".");return r===-1?[e,t]:[n(e,t.slice(0,r)),t.slice(r+1)]}function at(e,t,n){if(n===void 0&&(n=ot),t===d)return e;if(!e)throw new Error('Unable to get field "'+t+'" out of '+String(e)+".");return function(r,i,o){if(i.indexOf(".")===-1)return V(r,i,o);for(var a=i.split("."),u=r,s=0,c=a.length;s<c;s++)if(!(u=V(u,a[s],o))||typeof u!="object")return u;return u}(e,t,n)}function me(e,t){return e===t?0:e>t?1:-1}function be(e,t){return t===void 0&&(t={}),Xe(e,z({get:at,compare:me},t))}var $e=function(e,t,n){var r=n.interpret;return e.value.some(function(i){return r(i,t)})},ut=function(e,t,n){return!$e(e,t,n)},we=function(e,t,n){var r=n.interpret;return e.value.every(function(i){return r(i,t)})},st=function(e,t,n){return!(0,n.interpret)(e.value[0],t)},I=function(e,t,n){var r=n.compare,i=(0,n.get)(t,e.field);return Array.isArray(i)&&!Array.isArray(e.value)?q(i,e.value,r):r(i,e.value)===0},je=function(e,t,n){return!I(e,t,n)},Oe=f(function(e,t,n){var r=n.compare(t,e.value);return r===0||r===-1}),xe=f(function(e,t,n){return n.compare(t,e.value)===-1}),_e=f(function(e,t,n){return n.compare(t,e.value)===1}),Ae=f(function(e,t,n){var r=n.compare(t,e.value);return r===0||r===1}),Ee=function(e,t,n){var r=n.get;if(e.field===d)return t!==void 0;var i=ge(t,e.field,r),o=i[0],a=i[1],u=function(s){return!!s&&s.hasOwnProperty(a)===e.value};return k(o,a)?o.some(u):u(o)},ct=f(function(e,t){return typeof t=="number"&&t%e.value[0]===e.value[1]}),Fe=function(e,t,n){var r=n.get,i=ge(t,e.field,r),o=i[0],a=i[1],u=function(s){var c=r(s,a);return Array.isArray(c)&&c.length===e.value};return e.field!==d&&k(o,a)?o.some(u):u(o)},Pe=f(function(e,t){return typeof t=="string"&&e.value.test(t)}),g=f(function(e,t,n){var r=n.compare;return q(e.value,t,r)}),Me=function(e,t,n){return!g(e,t,n)},Ne=function(e,t,n){var r=n.compare,i=(0,n.get)(t,e.field);return Array.isArray(i)&&e.value.every(function(o){return q(i,o,r)})},Se=function(e,t,n){var r=n.interpret,i=(0,n.get)(t,e.field);return Array.isArray(i)&&i.some(function(o){return r(e.value,o)})},ft=function(e,t){return e.value.call(t)},U=z({},Object.freeze({__proto__:null,or:$e,nor:ut,and:we,not:st,eq:I,ne:je,lte:Oe,lt:xe,gt:_e,gte:Ae,exists:Ee,mod:ct,size:Fe,regex:Pe,within:g,nin:Me,all:Ne,elemMatch:Se,where:ft}),{in:g});be(U);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e){return e instanceof Date?e.getTime():e&&typeof e.toJSON=="function"?e.toJSON():e}var lt=function(e,t){return me(Y(e),Y(t))};function D(e,t,n){var r=new it(e),i=be(t,v({compare:lt},n));if(n&&n.forPrimitives){var o={field:d},a=r.parse;r.setParse(function(u){return a(u,o)})}return Ze(r.parse,i)}D(A,U);D(["$and","$or"].reduce(function(e,t){return e[t]=v({},e[t],{type:"field"}),e},v({},A,{$nor:v({},A.$nor,{type:"field",parse:re.compound})})),U,{forPrimitives:!0});function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),e}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function B(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,F(e,t)}function F(e,t){return F=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},F(e,t)}function pt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return Array.isArray(e)?e:[e]}var l="__caslSubjectType__";function ht(e,t){if(t){if(!t.hasOwnProperty(l))Object.defineProperty(t,l,{value:e});else if(e!==t[l])throw new Error("Trying to cast object to subject type "+e+" but previously it was casted to "+t[l])}return t}var M=function(t){var n=typeof t;return n==="string"||n==="function"},Ce=function(t){return t.modelName||t.name},vt=function(t){return typeof t=="string"?t:Ce(t)};function dt(e){return e.hasOwnProperty(l)?e[l]:Ce(e.constructor)}function J(e,t,n){for(var r=n;r<t.length;r++)e.push(t[r])}function L(e,t){if(!e||!e.length)return t||[];if(!t||!t.length)return e||[];for(var n=0,r=0,i=[];n<e.length&&r<t.length;)e[n].priority<t[r].priority?(i.push(e[n]),n++):(i.push(t[r]),r++);return J(i,e,n),J(i,t,r),i}function y(e,t,n){var r=e.get(t);return r||(r=n(),e.set(t,r)),r}var yt=function(t){return t};function gt(e,t){if(Array.isArray(e.fields)&&!e.fields.length)throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");if(e.fields&&!t.fieldMatcher)throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');if(e.conditions&&!t.conditionsMatcher)throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions')}var mt=function(){function e(n,r,i){i===void 0&&(i=0),gt(n,r),this.action=r.resolveAction(n.action),this.subject=n.subject,this.inverted=!!n.inverted,this.conditions=n.conditions,this.reason=n.reason,this.fields=n.fields?P(n.fields):void 0,this.priority=i,this.t=r}var t=e.prototype;return t.i=function(){return this.conditions&&!this.u&&(this.u=this.t.conditionsMatcher(this.conditions)),this.u},t.matchesConditions=function(r){if(!this.conditions)return!0;if(!r||M(r))return!this.inverted;var i=this.i();return i(r)},t.matchesField=function(r){return this.fields?r?(this.fields&&!this.o&&(this.o=this.t.fieldMatcher(this.fields)),this.o(r)):!this.inverted:!0},Te(e,[{key:"ast",get:function(){var r=this.i();return r?r.ast:void 0}}]),e}();function bt(e,t){var n={value:e,prev:t,next:null};return t&&(t.next=n),n}function $t(e){e.next&&(e.next.prev=e.prev),e.prev&&(e.prev.next=e.next),e.next=e.prev=null}var wt=function(t){return{value:t.value,prev:t.prev,next:t.next}},Q=function(){return{rules:[],merged:!1}},W=function(){return new Map},jt=function(t,n){!t.h&&n.fields&&(t.h=!0)},Ot=function(){function e(n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.h=!1,this.v=new Map,this.l={conditionsMatcher:r.conditionsMatcher,fieldMatcher:r.fieldMatcher,resolveAction:r.resolveAction||yt},this.p=r.anyAction||"manage",this.g=r.anySubjectType||"all",this.A=r.detectSubjectType||dt,this.$=n,this.j=this.m(n)}var t=e.prototype;return t.detectSubjectType=function(r){return M(r)?r:r?this.A(r):this.g},t.update=function(r){var i={rules:r,ability:this,target:this};return this.M("update",i),this.$=r,this.j=this.m(r),this.M("updated",i),this},t.m=function(r){for(var i=new Map,o=r.length-1;o>=0;o--){var a=r.length-o-1,u=new mt(r[o],this.l,a),s=P(u.action),c=P(u.subject||this.g);jt(this,u);for(var p=0;p<c.length;p++)for(var Ie=y(i,c[p],W),j=0;j<s.length;j++)y(Ie,s[j],Q).rules.push(u)}return i},t.possibleRulesFor=function(r,i){if(i===void 0&&(i=this.g),!M(i))throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');var o=y(this.j,i,W),a=y(o,r,Q);if(a.merged)return a.rules;var u=r!==this.p&&o.has(this.p)?o.get(this.p).rules:void 0,s=L(a.rules,u);return i!==this.g&&(s=L(s,this.possibleRulesFor(r,this.g))),a.rules=s,a.merged=!0,s},t.rulesFor=function(r,i,o){var a=this.possibleRulesFor(r,i);if(o&&typeof o!="string")throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");return this.h?a.filter(function(u){return u.matchesField(o)}):a},t.on=function(r,i){var o=this,a=this.v.get(r)||null,u=bt(i,a);return this.v.set(r,u),function(){var s=o.v.get(r);!u.next&&!u.prev&&s===u?o.v.delete(r):u===s&&o.v.set(r,u.prev),$t(u)}},t.M=function(r,i){for(var o=this.v.get(r)||null;o!==null;){var a=o.prev?wt(o.prev):null;o.value(i),o=a}},Te(e,[{key:"rules",get:function(){return this.$}}]),e}(),Re=function(e){B(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.can=function(){var i=this.relevantRuleFor.apply(this,arguments);return!!i&&!i.inverted},n.relevantRuleFor=function(i,o,a){for(var u=this.detectSubjectType(o),s=this.rulesFor(i,u,a),c=0,p=s.length;c<p;c++)if(s[c].matchesConditions(o))return s[c];return null},n.cannot=function(){return!this.can.apply(this,arguments)},t}(Ot),xt={$eq:R,$ne:ve,$lt:pe,$lte:he,$gt:w,$gte:C,$in:$,$nin:ce,$all:fe,$size:se,$regex:de,$options:ye,$elemMatch:ue,$exists:le},_t={eq:I,ne:je,lt:xe,lte:Oe,gt:_e,gte:Ae,in:g,nin:Me,all:Ne,size:Fe,regex:Pe,elemMatch:Se,exists:Ee,and:we},At=D(xt,_t),Et=/[-/\\^$+?.()|[\]{}]/g,Ft=/\.?\*+\.?/g,Pt=/\*+/,Mt=/\./g;function Nt(e,t,n){var r=n[0]==="*"||e[0]==="."&&e[e.length-1]==="."?"+":"*",i=e.indexOf("**")===-1?"[^.]":".",o=e.replace(Mt,"\\$&").replace(Pt,i+r);return t+e.length===n.length?"(?:"+o+")?":o}function St(e,t,n){return e==="."&&(n[t-1]==="*"||n[t+1]==="*")?e:"\\"+e}function Tt(e){var t=e.map(function(r){return r.replace(Et,St).replace(Ft,Nt)}),n=t.length>1?"(?:"+t.join("|")+")":t[0];return new RegExp("^"+n+"$")}var Ct=function(t){var n;return function(r){return typeof n=="undefined"&&(n=t.every(function(i){return i.indexOf("*")===-1})?null:Tt(t)),n===null?t.indexOf(r)!==-1:n.test(r)}},Rt=function(e){B(t,e);function t(n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.call(this,n,E({conditionsMatcher:At,fieldMatcher:Ct},r))||this}return t}(Re),qt=function(t){return'Cannot execute "'+t.action+'" on "'+t.subjectType+'"'},qe=function(t){this.message=t};qe.prototype=Object.create(Error.prototype);var kt=function(e){B(t,e),t.setDefaultMessage=function(i){this._=typeof i=="string"?function(){return i}:i},t.from=function(i){return new this(i)};function t(r){var i;return i=e.call(this,"")||this,i.ability=r,typeof Error.captureStackTrace=="function"&&(i.name="ForbiddenError",Error.captureStackTrace(pt(i),i.constructor)),i}var n=t.prototype;return n.setMessage=function(i){return this.message=i,this},n.throwUnlessCan=function(){var i,o=(i=this.ability).relevantRuleFor.apply(i,arguments);if(!(o&&!o.inverted)){this.action=arguments.length<=0?void 0:arguments[0],this.subject=arguments.length<=1?void 0:arguments[1],this.subjectType=vt(this.ability.detectSubjectType(arguments.length<=1?void 0:arguments[1])),this.field=arguments.length<=2?void 0:arguments[2];var a=o?o.reason:"";throw this.message=this.message||a||this.constructor._(this),this}},t}(qe);kt._=qt;Object.freeze({__proto__:null});function zt(e){if(e.hasOwnProperty("possibleRulesFor"))return e;var t=De(!0);e.on("updated",function(){t.value=!t.value});var n=e.possibleRulesFor.bind(e);return e.possibleRulesFor=function(r,i){return t.value=t.value,n(r,i)},e.can=e.can.bind(e),e.cannot=e.cannot.bind(e),e}var ke=Symbol("ability");function It(){var e=Be(ke);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function Ut(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}Ue({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(t,n){var r=n.slots,i=t,o="do",a="on";if(o in t||(o="I",a=Ut(t)),!i[o])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!r.default)throw new Error("Expects to receive default slot");var u=It();return function(){var s=u.can(i[o],i[a],i.field),c=t.not?!s:s;return t.passThrough?r.default({allowed:c,ability:u}):c?r.default():null}}});function Dt(e,t,n){if(!t||!(t instanceof Re))throw new Error("Please provide an Ability instance to abilitiesPlugin plugin");e.provide(ke,zt(t)),n&&n.useGlobalProperties&&(e.config.globalProperties.$ability=t,e.config.globalProperties.$can=t.can.bind(t))}const Bt=[{action:"read",subject:"auth"},{action:"read",subject:"open"}],ze=new Rt(Bt),Vt=e=>e.matched.some(t=>ze.can(t.meta.action||"read",t.meta.resource));var Gt=Ve(({app:e,router:t})=>{e.config.globalProperties.$subject=ht,e.use(Dt,ze,{useGlobalProperties:!0}),t.beforeEach((n,r,i)=>{if(n.matched.some(o=>o.meta.resource)){if(!Vt(n))return i({name:"not-authorized"})}else return i();return i()})});export{Gt as default};
