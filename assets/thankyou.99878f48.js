import{_ as g,k,as as S,u as s,v as o,y as d,A as a,z as $,aj as r}from"./index.846445a9.js";import{u as q}from"./i18n.3b8f353b.js";import{u as B,c as x,f as A,b as z,e as C,q as D}from"./quickbase.7abc430b.js";import"./_commonjsHelpers.d497b07e.js";import"./dayjs.1c4a0259.js";import"./localForage.9efa67e4.js";import"./index.7dbe61ef.js";const T=k({name:"Thanks",setup(){const e=S(),n=B(),l=x(),{locale:i}=q(),{storeBoardApp:c}=A(),{updateEmployeeData:u,employeeData:p}=l,{onKiosk:f,checkedIn:y}=z(),{onJobBoard:t,profileData:h}=C(),v=async()=>{i.value="en-US",n.logout().then(()=>{e.replace({name:"login"})})};async function b(){const m={122:{value:1}};(p.reset||p[79]===0)&&Object.assign(m,{79:{value:1}}),t||await D.upsertRecordsXML({to:"bp3gci48x",data:[{3:{value:h[3].value},80:{value:1}}],fieldsToReturn:[3]}),t||await u({fields:m}),setTimeout(f?async function(){v()}:function(){y?e.replace({path:"/"}):(c({}),e.replace({name:"jobs"}))},5e3)}return b(),{onJobBoard:t}}}),j={class:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"};function w(e,n,l,i,c,u){return s(),o("div",j,[d("div",null,[d("div",{class:a(e.$q.screen.gt.sm?"":"text-h5 q-mb-xl"),style:$(e.$q.screen.gt.sm?"font-size: 10vh":"")},r(e.$t("thankYouForCompleting")),7),e.onJobBoard?(s(),o("div",{key:1,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseCheckOtherJobs")),3)):(s(),o("div",{key:0,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseHaveASeat")),3))])])}var U=g(T,[["render",w]]);export{U as default};
