var m=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(e,i,r)=>i in e?m(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,h=(e,i)=>{for(var r in i||(i={}))v.call(i,r)&&p(e,r,i[r]);if(d)for(var r of d(i))w.call(i,r)&&p(e,r,i[r]);return e};import{l as q,m as I,r as S,i as P,f as R,z as L,n as y,q as a}from"./index.bd8b9437.js";function k(e){if(e.hasOwnProperty("possibleRulesFor"))return e;var i=S(!0);e.on("updated",function(){i.value=!i.value});var r=e.possibleRulesFor.bind(e);return e.possibleRulesFor=function(n,t){return i.value=i.value,r(n,t)},e.can=e.can.bind(e),e.cannot=e.cannot.bind(e),e}var b=Symbol("ability");function F(){var e=P(b);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function E(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}q({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(i,r){var n=r.slots,t=i,o="do",u="on";if(o in i||(o="I",u=E(i)),!t[o])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!n.default)throw new Error("Expects to receive default slot");var f=F();return function(){var c=f.can(t[o],t[u],t.field),s=i.not?!c:c;return i.passThrough?n.default({allowed:s,ability:f}):s?n.default():null}}});function j(e,i,r){if(!i||!(i instanceof I))throw new Error("Please provide an Ability instance to abilitiesPlugin plugin");e.provide(b,k(i)),r&&r.useGlobalProperties&&(e.config.globalProperties.$ability=i,e.config.globalProperties.$can=i.can.bind(i))}const A=e=>e.matched.some(i=>y.can(i.meta.action||"read",i.meta.resource));var O=R(({app:e,router:i})=>{e.config.globalProperties.$subject=L,e.use(j,y,{useGlobalProperties:!0}),i.beforeEach(async(r,n,t)=>{const o=await a.isUserLoggedIn(),u=Object.assign({},r.query);if(o||a.logout(),u.office_id&&(a.setOfficeLocation({rid:u.office_id}),u.qr&&a.setCheckIn(!0)),n.fullPath==="/"&&!n.name){const l=window.location.href;(l.startsWith("https://elitehcms.quickbase.com/db/bpzpy6n3x?a=dbpage&pageID=23")||l.startsWith("http://localhost:9000"))&&(a.checkKioskStatus(),console.log("need to sign into Kiosk")),o&&await a.reloadUserInfo({reAuthenticate:!0})}if(!A(r)){const l=r.path!=="/";return t(o?{name:"not-authorized"}:{name:"login",query:h({},l&&{redirect:r.path})})}if(r.meta.redirectIfLoggedIn&&o)return t("/");const f=await a.phoneNumberVerifyRequired(),c=await a.employeeLinkRequired(),s=await a.getUserFromStore(),g=await a.getSocialRequired();if(f)return n.name==="code-confirmation"&&o&&r.query.code?(await a.setPhoneNumberVerified(!0),t({path:"/"})):r.name!=="code-confirmation"?t({name:"code-confirmation",query:{p:s[9]?s[9].phoneNumber:s[8].replace(/[^0-9]/g,""),rid:s[3]}}):t();if(c||g)return n.name==="verify-identity"&&o&&r.query.verify?(r.query.rid?await a.setIdentityVerified(r.query.rid):await a.setIdentityVerified(!1),t({path:"/",query:{}})):r.name!=="verify-identity"?t({name:"verify-identity",query:{rid:s[3]}}):t();if(r.name==="verify-identity"){if(!c)return t({path:"/"})}else if(r.name==="code-confirmation")return!o&&r.query.ac?t():t({path:"/"});return t()}),i.afterEach(async(r,n)=>{const t=await a.isUserLoggedIn();n.fullPath==="/"&&!n.name&&t&&await a.updateStore({reAuthenticate:!1})})});export{O as default};
