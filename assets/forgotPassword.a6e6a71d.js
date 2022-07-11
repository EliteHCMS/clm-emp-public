import{Q as X}from"./QImg.edaccea0.js";import{_ as Y,b_ as Z,r as g,c as P,w as $,aV as ee,v as u,aj as k,be as l,a3 as s,x as b,d as a,ak as i,z as q,cx as h,a7 as v,bB as ae,bA as te,cy as I,b as C,bU as S,ao as se,c1 as D,A as le,cz as re,aq as E,cA as oe}from"./index.5ac7495d.js";import{Q as ne}from"./QForm.4aa22188.js";import{Q as ue}from"./QPage.52c5b735.js";import{u as ie}from"./use-quasar.881e7bfb.js";import{c as V,u as M}from"./array.52018025.js";import{u as me}from"./i18n.5133204f.js";import{b as de,q as pe}from"./quickbase.8d5c8477.js";import{p as ce}from"./VueTelInput.057da158.js";import{_ as ve}from"./languageSelector.aeadded5.js";import{c as fe}from"./carousel.5c68379e.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.b1c957b0.js";import"./localForage.e4498546.js";import"./index.7dbe61ef.js";import"./QSelect.1101d1c2.js";import"./QMenu.e07cf627.js";import"./position-engine.cf84a8df.js";import"./selection.e70f58a4.js";import"./rtl.65b79c69.js";import"./use-panel.ad377a95.js";import"./touch.d8ab472d.js";import"./use-fullscreen.82403be7.js";const ge={key:0,class:"col-md-7 col-lg-8 col-lx-8"},be={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},he={key:0,class:"text-dark"},ye={key:1,class:"text-dark"},xe={key:0,class:"row q-col-gutter-xs"},_e={class:"text-grey-6",tabindex:"4"},we={class:"text-grey-6",tabindex:"5"},Ne={class:"row justify-center"},$e={__name:"forgotPassword",setup(ke){const R=ie(),U=Z(),{t:y}=me(),{currentUserType:j}=de(),m=g(!1),d=g(!1),A=g(10),r=g("username"),o=g("phoneNumber"),f=g(null),F=P(()=>m.value||o.value==="phoneNumber"?V().email(`${y("validEmailIsRequired")}`).nullable():V().email(`${y("validEmailIsRequired")}`).required()),K=P(()=>{if(d.value||o.value==="email")return V().nullable();{const e=new RegExp("^[0-9]{"+A.value+"}","g");return V().matches(e,{excludeEmptyString:!0,message:`${y("validPhoneIsRequired")}`}).required()}}),{value:x,errorMessage:B,meta:H}=M("firstName"),{value:_,errorMessage:L,meta:W}=M("lastName"),{errorMessage:Q,value:p}=M("email",F),{errorMessage:w,value:c}=M("phone",K);j==="QuickBase User"&&U.push("/"),$(Q,e=>{e||p.value===""?d.value=!1:d.value=!0}),$(p,e=>{(!e||e==="")&&(d.value=!1)}),$(w,e=>{e||c.value===""?m.value=!1:m.value=!0}),$(c,e=>{(!e||e==="")&&(m.value=!1)});const G=e=>{f.value=e},J=e=>{A.value=e},T=P(()=>!(m.value||d.value)),z=async()=>{const e={userType:j,firstName:x.value,lastName:_.value,email:d.value?p.value:null,phoneNumber:m.value?`+${f.value?f.value.dialCode:"1"}${c.value}`:null},{data:t}=await pe.resetPassword(e);if(t.length===0)R.notify({position:"top-right",type:"negative",message:`${y("noUserFoundWithInformation")}`});else{const N=t[0][76];U.push({name:"code-confirmation",query:{...f.value&&m.value&&{p:`${f.value?f.value.dialCode:"1"}${c.value}`},...d.value&&{e:`${p.value}`},rid:N[3],ac:!0,send:!0}})}},O=e=>{r.value==="username"&&!T.value?z():e.preventDefault()};return(e,t)=>{const N=ee("router-link");return u(),k(ue,{class:"window-height window-width row"},{default:l(()=>[s(R).screen.lt.md?i("",!0):(u(),b("div",ge,[a(fe)])),q("div",be,[a(oe,{class:"auth-card",flat:""},{default:l(()=>[a(h,{style:{"padding-left":"30px","padding-right":"30px"}},{default:l(()=>[a(X,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),a(h,{class:"text-center auth-description"},{default:l(()=>[o.value==="email"&&r.value==="username"?(u(),b("p",he,v(e.$t("enterEmailSendCode")),1)):i("",!0),o.value==="phoneNumber"&&r.value==="username"?(u(),b("p",ye,v(e.$t("enterPhoneSendCode")),1)):i("",!0)]),_:1}),a(h,null,{default:l(()=>[a(ne,{class:"q-px-sm q-pt-sm",onSubmit:t[7]||(t[7]=ae(()=>{},["prevent"])),onKeyup:te(O,["enter"])},{default:l(()=>[r.value==="username"?(u(),b("div",xe,[a(I,{class:"col-xs-12 col-sm-6 q-pb-lg",clearable:"",outlined:"",modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=n=>C(x)?x.value=n:null),type:"text",autocomplete:"given-name",label:e.$t("firstName"),tabindex:"1",name:"firstName",error:!!(s(B)&&s(H).validated),"error-message":s(B)},{prepend:l(()=>[a(S,{name:"person"})]),_:1},8,["modelValue","label","error","error-message"]),a(I,{class:"col-xs-12 col-sm-6",clearable:"",outlined:"",modelValue:s(_),"onUpdate:modelValue":t[1]||(t[1]=n=>C(_)?_.value=n:null),type:"text",autocomplete:"family-name",label:e.$t("lastName"),tabindex:"2",name:"lastName",error:!!(s(L)&&s(W).validated),"error-message":s(L)},{prepend:l(()=>[a(S,{name:"person_outline"})]),_:1},8,["modelValue","label","error","error-message"])])):i("",!0),o.value==="email"&&r.value==="username"?(u(),k(I,{key:1,style:{"padding-bottom":"0px"},clearable:"",outlined:"",modelValue:s(p),"onUpdate:modelValue":t[3]||(t[3]=n=>C(p)?p.value=n:null),type:"email",label:e.$t("email"),tabindex:"3",error:!!s(Q),"error-message":s(Q),readonly:r.value!=="username"},se({prepend:l(()=>[a(S,{name:"email"})]),_:2},[r.value!=="username"?{name:"append",fn:l(()=>[a(D,{round:"",dense:"",flat:"",icon:"edit",onClick:t[2]||(t[2]=n=>{r.value="username"})})])}:void 0]),1032,["modelValue","label","error","error-message","readonly"])):i("",!0),o.value==="phoneNumber"&&r.value==="username"?(u(),k(ce,{key:2,outlined:"",modelValue:s(c),"onUpdate:modelValue":t[4]||(t[4]=n=>C(c)?c.value=n:null),label:e.$t("phoneNumber"),tabindex:"3",onMaxLengthChanged:J,style:le(s(w)?"padding-bottom: 20px;":"padding-bottom: 0px;"),error:!!s(w),"error-message":s(w),onCountryChanged:G},null,8,["modelValue","label","style","error","error-message"])):i("",!0),a(h,{class:"text-right q-pa-none"},{default:l(()=>[o.value==="email"?(u(),b("a",{key:0,onClick:t[5]||(t[5]=n=>o.value="phoneNumber"),class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},v(e.$t("usePhoneNumber")),1)):i("",!0),o.value==="phoneNumber"?(u(),b("a",{key:1,onClick:t[6]||(t[6]=n=>o.value="email"),class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},v(e.$t("useEmail")),1)):i("",!0)]),_:1})]),_:1},8,["onKeyup"])]),_:1}),a(re,{class:"q-px-lg"},{default:l(()=>[r.value==="username"?(u(),k(D,{key:0,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:e.$t("resetPassword"),tabindex:"3",disabled:s(T),onClick:z},null,8,["label","disabled"])):i("",!0)]),_:1}),a(h,{class:"text-center q-pa-sm"},{default:l(()=>[q("p",_e,[a(N,{to:"/login",class:"text-grey-6"},{default:l(()=>[E(v(e.$t("returnToLogin")),1)]),_:1})]),q("p",we,[E(v(e.$t("needAnAccountQuestion"))+" ",1),a(N,{to:"/register",class:"text-grey-6"},{default:l(()=>[E(v(e.$t("register")),1)]),_:1})])]),_:1}),a(h,{class:"q-pl-lg q-pa-sm"},{default:l(()=>[q("div",Ne,[a(ve,{dense:"",borderless:""})])]),_:1})]),_:1})])]),_:1})}}};var Je=Y($e,[["__scopeId","data-v-59610dc8"]]);export{Je as default};
