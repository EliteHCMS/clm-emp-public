var _=Object.defineProperty;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(o,t,a)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,i=(o,t)=>{for(var a in t||(t={}))b.call(t,a)&&c(o,a,t[a]);if(r)for(var a of r(t))g.call(t,a)&&c(o,a,t[a]);return o};import{a as y}from"./QSelect.b5911b0e.js";import{u as L}from"./use-quasar.54367c22.js";import{u as U,l as k}from"./i18n.3b8f353b.js";import{q as n}from"./quickbase.7abc430b.js";import{u as q,ad as w,B,b0 as p,b as S}from"./index.846445a9.js";const I={__name:"languageSelector",setup(o){const t=L(),{locale:a,availableLocales:m}=U(),d=m.map(e=>({label:k[`${e}`].nativeName,value:e})),u=async e=>{const s=n.getOfficeLocation(),l=i({339:{value:e}},s&&{16:{value:s.rid}});return await n.updateEmployeeData({fields:l})},f=async e=>{const s={26:{value:"now"},100:{value:e}};return await n.updateUserData({fields:s})},v=e=>{t.lang.set(e),f(e),e==="en-US"?u(1):e==="es"&&u(2)};return(e,s)=>(q(),w(y,B({modelValue:p(a),"onUpdate:modelValue":[s[0]||(s[0]=l=>S(a)?a.value=l:null),v],options:p(d)},e.$attrs,{"emit-value":"","map-options":""}),null,16,["modelValue","options"]))}};export{I as _};
