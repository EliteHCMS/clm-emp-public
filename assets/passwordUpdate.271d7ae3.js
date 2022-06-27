import{Q as F}from"./QImg.8e368f22.js";import{_ as z,at as O,as as T,r as k,c as Z,aq as G,u as l,ad as w,ae as s,b0 as t,v as H,d as e,ah as f,y as r,a_ as g,b3 as X,a$ as P,b as R,ag as q,b1 as J,au as K,b2 as W,bF as Y,bG as ee,ai as Q}from"./index.846445a9.js";import{Q as se}from"./QForm.2faf244d.js";import{Q as ae}from"./QPage.270112b5.js";import{u as te}from"./use-quasar.54367c22.js";import{a as oe,e as re,c as $,d as le,b as de,u as I}from"./array.09e346df.js";import{q as d,g as D}from"./quickbase.7abc430b.js";import{c as ie}from"./carousel.e223cfaa.js";import"./_commonjsHelpers.d497b07e.js";import"./dayjs.1c4a0259.js";import"./localForage.9efa67e4.js";import"./index.7dbe61ef.js";import"./i18n.3b8f353b.js";import"./use-panel.af9641ad.js";import"./touch.6a3c5155.js";import"./selection.08fe0490.js";const ne=i=>(Y("data-v-17d8cafc"),i=i(),ee(),i),ue={key:0,class:"col-md-7 col-lg-8 col-lx-8"},ce={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},pe=ne(()=>r("p",{class:"text-dark"},"Update Password",-1)),me={class:"row"},we={class:"row"},fe={class:"text-grey-6"},ge=Q("Return to Login"),_e={class:"text-grey-6"},ve=Q("Need an account? "),he=Q("Register"),xe={__name:"passwordUpdate",setup(i){const _=te(),U=O(),v=T(),h=k("update-password"),n=k(!1),L=Z(()=>oe({userRID:re().required(),password:$().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,{excludeEmptyString:!0,message:"Must Contain at least 8 Characters, at least 1 Uppercase, 1 Lowercase, and 1 Number"}).nullable(),passwordConfirmation:$().oneOf([le("password"),null],"Passwords must match")})),{errors:ye,meta:N}=de({validationSchema:L,initialValues:{password:"",passwordConfirmation:""}}),{value:u}=I("userRID"),{value:c,errorMessage:S,meta:B}=I("password"),{value:x,errorMessage:V,meta:j}=I("passwordConfirmation"),p=k(!0);U.query.rid?(u.value=U.query.rid,v.replace({query:{}})):v.push("/");const A=async()=>{if(!u.value||u.value==="")return!1;n.value=!0;const M=await d.isUserLoggedIn(),a=await D.genSalt(10),m=D.hashSync(c.value,a),o=new Date,E=[{3:{value:u.value},7:{value:m},26:{value:o}}];try{const{data:y}=await d.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:E,formatObject:76}),b=y[0][76];if(M){const C=Object.assign({},b);delete C.access,delete C.permissions,d.setUserPermissions(b.permissions,!0),d.setUserAccess(b.access,!0),await d.setUserInfo(C,!0)}else _.notify({position:"top-right",type:"info",message:"Login with new password!"});n.value=!1,v.push("/")}catch(y){n.value=!1,_.notify({position:"top-right",type:"negative",message:y.message||"Error updating password"})}};return(M,a)=>{const m=G("router-link");return l(),w(ae,{class:"window-height window-width row"},{default:s(()=>[t(_).screen.lt.md?f("",!0):(l(),H("div",ue,[e(ie)])),r("div",ce,[e(W,{class:"auth-card",flat:""},{default:s(()=>[e(g,{style:{"padding-left":"30px","padding-right":"30px"}},{default:s(()=>[e(F,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),e(g,{class:"text-center auth-description"},{default:s(()=>[pe]),_:1}),e(g,null,{default:s(()=>[e(se,{class:"q-px-sm q-pt-sm",onSubmit:a[3]||(a[3]=X(()=>{},["prevent"]))},{default:s(()=>[r("div",me,[h.value==="update-password"?(l(),w(P,{key:0,class:"col-xs-12",outlined:"",modelValue:t(c),"onUpdate:modelValue":a[1]||(a[1]=o=>R(c)?c.value=o:null),type:p.value?"password":"text",autocomplete:"current-password",label:"Password",tabindex:"1",error:!!(t(S)&&t(B).validated),"error-message":t(S)},{append:s(()=>[e(q,{name:p.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[0]||(a[0]=o=>p.value=!p.value)},null,8,["name"])]),prepend:s(()=>[e(q,{name:"lock"})]),_:1},8,["modelValue","type","error","error-message"])):f("",!0)]),r("div",we,[h.value==="update-password"?(l(),w(P,{key:0,class:"col-xs-12",outlined:"",modelValue:t(x),"onUpdate:modelValue":a[2]||(a[2]=o=>R(x)?x.value=o:null),type:"password",autocomplete:"new-password",label:"Confirm Password",tabindex:"2",error:!!(t(V)&&t(j).validated),"error-message":t(V)},{prepend:s(()=>[e(q,{name:"lock"})]),_:1},8,["modelValue","error","error-message"])):f("",!0)])]),_:1})]),_:1}),e(J,{class:"q-px-lg"},{default:s(()=>[h.value==="update-password"?(l(),w(K,{key:0,loading:n.value,disable:!t(N).valid,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:"Update Password",tabindex:"3",onClick:A},null,8,["loading","disable"])):f("",!0)]),_:1}),e(g,{class:"text-center q-pa-sm"},{default:s(()=>[r("p",fe,[e(m,{to:"/login",class:"text-grey-6",tabindex:"4"},{default:s(()=>[ge]),_:1})]),r("p",_e,[ve,e(m,{to:"/register",class:"text-grey-6",tabindex:"5"},{default:s(()=>[he]),_:1})])]),_:1})]),_:1})])]),_:1})}}};var Be=z(xe,[["__scopeId","data-v-17d8cafc"]]);export{Be as default};
