import{b,a as S}from"./QLayout.c658c8dc.js";import{b_ as g,b$ as h,r as w,w as C,aV as c,v as r,aj as i,be as p,d as m,a3 as f,ak as d}from"./index.5ac7495d.js";import{u as K}from"./i18n.5133204f.js";import{b as V,q as _}from"./quickbase.8d5c8477.js";import{_ as I}from"./KioskLogin.97bc6ea4.js";import"./QResizeObserver.8a29a19c.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.b1c957b0.js";import"./localForage.e4498546.js";import"./index.7dbe61ef.js";import"./use-quasar.881e7bfb.js";import"./array.52018025.js";const A={__name:"FullLayout",setup(Q){const t=V(),a=g(),o=h(),{locale:n}=K(),s=w(!1),u=async()=>{await _.checkKioskStatus()||(s.value=!0)};if(t.pageType==="Candidate Kiosk"&&u(),o.query.office_id){const e=Object.assign({},o.query);delete e.office_id,delete e.qr,a.replace({query:e})}C(()=>o.query,()=>{if(t.pageType==="Candidate Kiosk"&&u(),o.query.office_id){const e=Object.assign({},o.query);delete e.office_id,e.qr&&(_.checkInUser(),delete e.qr),a.replace({query:e})}});const k=()=>{n.value!=="en-US"&&(n.value="en-US"),o.path!=="/login"&&a.replace({name:"login"})};return(e,l)=>{const y=c("router-view"),q=c("v-idle");return r(),i(S,{view:"hHh lpR fFf"},{default:p(()=>[m(b,null,{default:p(()=>[m(y)]),_:1}),f(t).onKiosk?(r(),i(I,{key:0,modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=v=>s.value=v)},null,8,["modelValue"])):d("",!0),f(t).onKiosk?(r(),i(q,{key:1,onIdle:k,duration:300,style:{display:"none"}})):d("",!0)]),_:1})}}};export{A as default};
