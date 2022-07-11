import{k as j,b_ as ee,c as F,_ as A,v as a,aj as g,be as i,z as t,bB as te,x as u,aU as M,cA as se,B as _,d as l,a7 as r,ak as c,F as Y,aq as E,bU as w,d1 as P,cy as x,cx as V,c1 as D,bY as me,c0 as ae,r as R,w as ne,aV as G,ck as fe}from"./index.5ac7495d.js";import{Q as ve}from"./QPage.52c5b735.js";import{Q as le,a as oe,b as ye}from"./QStep.87206904.js";import{g as J,i as K,j as be,e as he,d as ge}from"./quickbase.8d5c8477.js";import{a as C,e as $e,c as H,f as _e,b as pe,u as Q,g as ke}from"./array.52018025.js";import{Q as Z}from"./QTooltip.928a238c.js";import"./use-panel.ad377a95.js";import"./touch.d8ab472d.js";import"./selection.e70f58a4.js";import"./QSlideTransition.b9a30752.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.b1c957b0.js";import"./localForage.e4498546.js";import"./index.7dbe61ef.js";import"./i18n.5133204f.js";import"./position-engine.cf84a8df.js";const qe=j({props:{title:String,step:Number,name:Number},setup(){const e=J(),o=ee(),{disabilityForm:f}=K(),{hiringCenter:b}=be(),h=[f.pages[0]],k=F(()=>{const m=h.find(n=>n[40]==="Yes");return m===void 0?!1:(m.columns={lg:{1:m[57].filter(n=>n[11]==="1"),2:m[57].filter(n=>n[11]==="2"),3:m[57].filter(n=>n[11]==="3"),4:m[57].filter(n=>n[11]==="4")},sm:{1:m[57]}},m.columns)}),s=F(()=>{const m=h.find(n=>n[41]==="Yes");return m===void 0?!1:(m[58].forEach(n=>{n.value=n[3],n.label=n[6]}),m[58])}),d=C({selection:$e().required().nullable(),nameEntry:H().required("Enter your name."),day:_e().required("Enter the date for today.")}),{meta:y,errors:$,handleSubmit:U}=pe({validationSchema:d,initialValues:{selection:null,nameEntry:"",day:he.formatDate(new Date,"YYYY-MM-DD")}}),{value:q}=Q("selection"),{value:O}=Q("nameEntry"),{value:L}=Q("day"),T=U(async m=>{console.log(m);const n={15:{value:m.selection},7:{value:m.nameEntry},8:{value:m.day},6:{value:new Date},10:{value:f.rid},17:{value:b[3]},19:{value:e.profile[19].value?e.profile[19].value:""}},p={next:7,values:n,type:"disability"};await e.updateVoluntaryForm(p),e.submitDisabilityToQB()});function z(){const m={next:7};e.updateProfile(m)}function B(){const m={next:3};o.push({name:"apply"}),e.updateProfile(m)}return{save:z,back:B,disabilityForm:f,pages:h,disabilitiesList:k,selection:q,disabilityOptions:s,nameEntry:O,day:L,formMeta:y,formErrors:$,submitUpdate:T}}}),Ee={class:"row justify-center"},Se={class:"col-12 col-lg-10"},we={class:"row justify-center"},Ve={class:"col-12"},Ue={class:"col-12 col-md-4 text-right"},Ie=t("hr",null,null,-1),Ce={key:0,class:"q-py-md"},Qe={key:0,class:"q-mb-md"},Fe={key:1},Ne=t("hr",null,null,-1),Me={key:1,class:"q-py-md"},Ye={key:0,class:"q-mb-md"},De={key:1},Oe={key:2},Le={key:0,class:"row"},Te={class:"col-2"},ze={class:"col-2"},Be={class:"col-3"},Pe={class:"col-5"},je={key:1,class:"row"},Ae={class:"col-12"},Re=t("hr",null,null,-1),Ge={key:2},Ze={key:0,class:"q-pl-md error-message text-body2"},xe={class:"row justify-center q-my-xl"},He={class:"col-12 col-md-4 q-px-md"};function Je(e,o,f,b,h,k){return a(),g(oe,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("div",Ee,[t("div",Se,[t("form",{onSubmit:o[3]||(o[3]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",we,[t("div",Ve,[(a(!0),u(Y,null,M(e.pages,s=>(a(),g(se,{key:s[3],class:_(["q-mb-sm",e.$q.screen.gt.md?"q-pa-xl":""])},{default:i(()=>[l(V,null,{default:i(()=>[t("div",{class:_(["text-dark text-center",e.$q.screen.lt.lg?"text-h6":"text-h5"])},r(e.disabilityForm.title),3),t("div",{class:_(["row justify-end",e.$q.screen.lt.lg?"q-mt-md":""])},[t("div",Ue,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"Form "+r(e.disabilityForm.formId),3),t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"OMB Control Number "+r(e.disabilityForm.controlNumber),3),t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"Expires "+r(e.disabilityForm.expiration),3)])],2),Ie,s[14]!==""?(a(),u("div",Ce,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body1":"text-h6"])},r(s[14]),3),t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[s[15]!==""?(a(),u("div",Qe,r(s[15]),1)):c("",!0),s[38]!==""?(a(),u("div",Fe,r(s[38]),1)):c("",!0)],2),Ne])):c("",!0),s[16]!==""?(a(),u("div",Me,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body1":"text-h6"])},r(s[16]),3),t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[s[17]!==""?(a(),u("div",Ye,r(s[17]),1)):c("",!0),s[39]!==""?(a(),u("div",De,r(s[39]),1)):c("",!0),s[40]==="Yes"?(a(),u("div",Oe,[e.$q.screen.gt.md?(a(),u("div",Le,[t("div",Te,[t("ul",null,[(a(!0),u(Y,null,M(e.disabilitiesList.lg[1],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",ze,[t("ul",null,[(a(!0),u(Y,null,M(e.disabilitiesList.lg[2],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",Be,[t("ul",null,[(a(!0),u(Y,null,M(e.disabilitiesList.lg[3],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",Pe,[t("ul",null,[(a(!0),u(Y,null,M(e.disabilitiesList.lg[4],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])])])):c("",!0),e.$q.screen.lt.md?(a(),u("div",je,[t("div",Ae,[t("ul",null,[(a(!0),u(Y,null,M(e.disabilitiesList.sm[1],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])])])):c("",!0)])):c("",!0)],2),Re])):c("",!0),s[41]==="Yes"?(a(),u("div",Ge,[t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[E(r(s[44])+" ",1),e.formErrors.selection?(a(),g(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)],2),l(P,{options:e.disabilityOptions,type:"radio",modelValue:e.selection,"onUpdate:modelValue":o[0]||(o[0]=d=>e.selection=d),class:_(e.formErrors.selection?"error-message":"")},null,8,["options","modelValue","class"]),e.formErrors.selection?(a(),u("div",Ze,r(e.formErrors.selection)+" - "+r(e.selection),1)):c("",!0),t("div",xe,[t("div",{class:_(["col-12 col-md-4 q-px-md",e.$q.screen.lt.md?"q-mb-lg":""])},[l(x,{dense:e.$q.screen.lt.md,modelValue:e.nameEntry,"onUpdate:modelValue":o[1]||(o[1]=d=>e.nameEntry=d),label:"Your Name",hint:"Your Name",error:!!e.formErrors.nameEntry,"bottom-slots":""},null,8,["dense","modelValue","error"])],2),t("div",He,[l(x,{type:"date",dense:e.$q.screen.lt.md,modelValue:e.day,"onUpdate:modelValue":o[2]||(o[2]=d=>e.day=d),hint:"Today's Date",error:!!e.formErrors.day,"bottom-slots":""},{error:i(()=>[E(r(e.formErrors.day),1)]),_:1},8,["dense","modelValue","error"])])])])):c("",!0)]),_:2},1024)]),_:2},1032,["class"]))),128))])])]),l(le,{class:"text-right"},{default:i(()=>[l(D,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(D,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])])]),_:1},8,["step","name","title"])}var ie=A(qe,[["render",Je]]);const Ke=j({props:{title:String,step:Number,name:Number},setup(){const{updateVoluntaryForm:e,submitAffirmativeToQB:o,updateProfile:f}=J(),{voluntaryFormOptions:b}=K(),h=F(()=>b.affirmative.filter(n=>n[10]==="Gender")),k=F(()=>b.affirmative.filter(n=>n[10]==="Ethnicity")),s=F(()=>b.affirmative.filter(n=>n[10]==="Race")),d=C({gender:C().required("Make a Selection").nullable(),ethnicity:C().required("Make a Selection").nullable(),race:C().required("Make a Selection").nullable(),initials:H().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."})}),{meta:y,errors:$,handleSubmit:U}=pe({validationSchema:d}),{value:q}=Q("gender"),{value:O}=Q("ethnicity"),{value:L}=Q("race"),{value:T}=Q("initials"),z=U(async n=>{const p={16:{value:n.gender.value,label:n.gender.label},20:{value:n.ethnicity.value,label:n.ethnicity.label},22:{value:n.race.value,label:n.race.label},24:{value:new Date},34:{value:n.initials}};await e({next:8,values:p,type:"affirmative"}),o()});function B(){f({next:8})}function m(){f({next:6})}return{save:B,back:m,submitUpdate:z,formMeta:y,formErrors:$,genderOptions:h,gender:q,ethnicityOptions:k,ethnicity:O,raceOptions:s,race:L,initials:T}}}),We={class:"row justify-center"},Xe={class:"col-12 col-lg-10"},et={class:"row justify-center"},tt={class:"col-12"},st={class:"text-h6 text-primary"},at=t("hr",null,null,-1),lt={class:"text-body2 text-dark q-mb-sm"},ot={class:"text-body2 text-dark q-mb-sm"},rt=t("div",{class:"text-h6 text-dark"},"Affirmative Action Related Data",-1),nt=t("div",{class:"text-subtitle2 text-italic"},"Please check appropriate boxes.",-1),it={class:"row"},dt={class:"col-12 col-lg-5 q-pr-sm"},ut={class:"text-body1 text-primary"},ct=E(" Race "),mt={class:"q-py-sm"},pt={key:0,class:"q-pl-md error-message text-body2"},ft={class:"col-12 col-lg-4 q-pr-sm"},vt={class:"text-body1 text-primary"},yt=E(" Ethnicity "),bt={class:"q-py-sm"},ht={key:0,class:"q-pl-md error-message text-body2"},gt={class:"col-12 col-lg-3 q-pr-sm"},$t={class:"text-body1 text-primary"},_t=E(" Gender "),kt={class:"q-py-sm"},qt={key:0,class:"q-pl-md error-message text-body2"},Et={class:"row"},St={class:"col-6 col-md-3 col-lg-2"};function wt(e,o,f,b,h,k){return a(),g(oe,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("div",We,[t("div",Xe,[t("form",{onSubmit:o[4]||(o[4]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",et,[t("div",tt,[l(se,null,{default:i(()=>[l(V,null,{default:i(()=>[t("div",st,r(e.$t("affirmativeTitle")),1),at,t("div",lt,r(e.$t("affirmativeStatement1")),1),t("div",ot,r(e.$t("affirmativeStatement2")),1)]),_:1}),l(me),l(V,{class:"q-pb-none"},{default:i(()=>[rt,nt]),_:1}),l(V,null,{default:i(()=>[t("div",it,[t("div",dt,[t("div",ut,[ct,e.formErrors.race?(a(),g(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",mt,[l(P,{options:e.raceOptions,type:"radio",modelValue:e.race,"onUpdate:modelValue":o[0]||(o[0]=s=>e.race=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),g(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(Z,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[E(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.race?(a(),u("div",pt,r(e.formErrors.race),1)):c("",!0)])]),t("div",ft,[t("div",vt,[yt,e.formErrors.ethnicity?(a(),g(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",bt,[l(P,{options:e.ethnicityOptions,type:"radio",modelValue:e.ethnicity,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ethnicity=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),g(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(Z,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[E(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.ethnicity?(a(),u("div",ht,r(e.formErrors.ethnicity),1)):c("",!0)])]),t("div",gt,[t("div",$t,[_t,e.formErrors.gender?(a(),g(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",kt,[l(P,{options:e.genderOptions,type:"radio",modelValue:e.gender,"onUpdate:modelValue":o[2]||(o[2]=s=>e.gender=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),g(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(Z,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[E(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.gender?(a(),u("div",qt,r(e.formErrors.gender),1)):c("",!0)])])])]),_:1}),l(V,null,{default:i(()=>[t("div",Et,[t("div",St,[l(x,{maxlength:"3",dense:e.$q.screen.lt.md,modelValue:e.initials,"onUpdate:modelValue":o[3]||(o[3]=s=>e.initials=s),label:"Your Initials",hint:"Your Initials",error:!!e.formErrors.initials,"bottom-slots":""},null,8,["dense","modelValue","error"])])])]),_:1})]),_:1})])])]),l(le,{class:"text-right"},{default:i(()=>[l(D,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(D,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])])]),_:1},8,["step","name","title"])}var de=A(Ke,[["render",wt]]);const Vt=j({props:{title:String,step:Number,name:Number},setup(){const{updateEmployeeData:e}=ge(),o=ee(),f=J(),{updateVetsForm:b,submitVeteransToQB:h,updateProfile:k}=f,{proceedToTest:s}=ae(f),{voluntaryFormOptions:d}=K(),y=R([]),$=R(null),U=R(""),q=R(null),O=H().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."}),L=C({initials:H().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."}),veteran:ke().of(C()).min(1,{message:"You must select at least one."})}).required(),T=F(()=>$.value?$.value:null),z=F(()=>q.value?q.value:null);async function B(){const p=[],I=d.veterans[0][9],S=d.veterans[0][10];y.value.forEach(N=>{const v={6:{value:I,label:S},8:{value:N.value,label:N.label}};p.push(v)});const W={8:{value:I,label:S},17:{value:new Date},16:{value:U.value.toUpperCase()}},X={next:0,values:W,selections:p};y.value.length===0&&($.value="Make a Selection");try{await L.validate({initials:U.value,veteran:y.value}),q.value=null,$.value=null,await b(X),await h(),s.value?(e({fields:{122:{value:8}}}),o.replace({name:"assessment"})):o.replace({name:"thanks"})}catch({name:N,path:v,errors:re,inner:Kt}){v==="veteran"?$.value=re[0].message:v==="initials"&&(q.value=re[0].message)}}function m(){k({next:8})}function n(){k({next:7})}return ne(y,(p,I)=>{console.log(p);const S=p.find(v=>v.value===6),W=I.find(v=>v.value===6),X=I.find(v=>v.value===7),N=p.find(v=>v.value===7);p.length===0?$.value="Make a Selection":$.value=null,W!==void 0&&p.length>1?y.value=p.filter(v=>v.value!==6):S!==void 0&&p.length>1?y.value=[S]:X!==void 0&&p.length>1?y.value=p.filter(v=>v.value!==7):N!==void 0&&p.length>1&&(y.value=[N])}),ne(U,async(p,I)=>{try{await O.validate(p),q.value=null}catch({errors:S}){S[0]instanceof Object?q.value=S[0].message:q.value=S[0]}}),{save:m,back:n,submitUpdate:B,voluntaryFormOptions:d,veteran:y,vetError:T,initials:U,initialsError:z}}}),Ut={class:"row justify-center"},It={class:"col-12"},Ct={class:"text-h6 text-primary"},Qt=t("hr",null,null,-1),Ft={class:"text-body2 text-dark q-mb-sm"},Nt={class:"text-body2 text-dark q-mb-sm"},Mt=t("div",{class:"text-h6 text-dark"},"Multiple Categories May be Selected if Veteran Falls into Multiple Categories.",-1),Yt=t("div",{class:"text-subtitle2 text-italic"},"Please check the appropriate boxes.",-1),Dt={class:"row"},Ot={class:"col-12 col-lg-8"},Lt={class:"text-body1 text-primary"},Tt=E(" Please check the box if you are: "),zt={class:"q-py-sm"},Bt={key:0,class:"q-pl-md error-message text-body2"},Pt={class:"row"},jt={class:"col-6 col-md-3 col-lg-2"};function At(e,o,f,b,h,k){return a(),g(oe,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("form",{onSubmit:o[2]||(o[2]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",Ut,[t("div",It,[l(se,null,{default:i(()=>[l(V,null,{default:i(()=>[t("div",Ct,r(e.$t("veteranTitle")),1),Qt,t("div",Ft,r(e.$t("veteranStatement1")),1),t("div",Nt,r(e.$t("veteranStatement2")),1)]),_:1}),l(me),l(V,{class:"q-pb-none"},{default:i(()=>[Mt,Yt]),_:1}),l(V,null,{default:i(()=>[t("div",Dt,[t("div",Ot,[t("div",Lt,[Tt,e.vetError?(a(),g(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",zt,[l(P,{options:e.voluntaryFormOptions.veterans,type:"checkbox",modelValue:e.veteran,"onUpdate:modelValue":o[0]||(o[0]=s=>e.veteran=s)},{label:i(s=>[t("span",null,r(s.label),1),s[7]!==""?(a(),g(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(Z,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[E(r(s[7]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.vetError?(a(),u("div",Bt,r(e.vetError),1)):c("",!0)])])])]),_:1}),l(V,null,{default:i(()=>[t("div",Pt,[t("div",jt,[l(x,{maxlength:"3",dense:e.$q.screen.lt.md,modelValue:e.initials,"onUpdate:modelValue":o[1]||(o[1]=s=>e.initials=s),label:"Your Initials",hint:"Your Initials",error:!!e.initialsError,"bottom-slots":""},{error:i(()=>[E(r(e.initialsError),1)]),_:1},8,["dense","modelValue","error"])])])]),_:1})]),_:1})])])]),l(le,{class:"text-right"},{default:i(()=>[l(D,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(D,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)]),_:1},8,["step","name","title"])}var ue=A(Vt,[["render",At]]);const Rt=j({components:{disability:ie,affirmative:de,veteran:ue},setup(){const{step:e}=ae(J());return{step:e,disability:ie,affirmative:de,veteran:ue}}});function Gt(e,o,f,b,h,k){const s=G("disability"),d=G("affirmative"),y=G("veteran");return a(),u("div",null,[l(ye,{modelValue:e.step,"onUpdate:modelValue":o[0]||(o[0]=$=>e.step=$),animated:"","done-color":"info","active-color":"dark","inactive-color":"secondary"},{default:i(()=>[l(s,{title:"",name:6,done:e.step>6},null,8,["done"]),l(d,{title:"",name:7,done:e.step>7},null,8,["done"]),l(y,{title:"",name:8,done:e.step>8},null,8,["done"])]),_:1},8,["modelValue"])])}var ce=A(Rt,[["render",Gt]]);const Zt=j({components:{stepper:ce},setup(){const e=K(),{disabilityForm:o}=e,{voluntaryLoadingState:f}=ae(e),b=ee();function h(){o||b.replace({name:"apply"})}return h(),{stepper:ce,voluntaryLoadingState:f}}}),xt={key:0,class:"absolute-center"},Ht={key:1};function Jt(e,o,f,b,h,k){const s=G("stepper");return a(),g(ve,{style:{"max-width":"100vw","max-height":"100vh"}},{default:i(()=>[e.voluntaryLoadingState?(a(),u("div",xt,[l(fe,{color:"primary",size:"5em"})])):c("",!0),e.voluntaryLoadingState?c("",!0):(a(),u("div",Ht,[l(s)]))]),_:1})}var fs=A(Zt,[["render",Jt]]);export{fs as default};
