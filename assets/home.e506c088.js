var ee=Object.defineProperty,te=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var U=(e,s,i)=>s in e?ee(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,K=(e,s)=>{for(var i in s||(s={}))oe.call(s,i)&&U(e,i,s[i]);if(O)for(var i of O(s))ae.call(s,i)&&U(e,i,s[i]);return e},W=(e,s)=>te(e,se(s));import{D as X,E as ne,G as re,c as v,h as S,H as R,g as ie,l as C,I as _,J as b,K as J,L as N,_ as A,p as o,t as u,v as t,y as n,M as l,d as r,N as c,O as d,Q as g,P as q,R as k,S as w,U as h,V as le,W as ce,X as V,Y as de,r as G,Z as I,$ as E,a0 as H,x as me,a1 as pe,a2 as ue,a3 as he,a4 as $,F as Y,a5 as L,a6 as M,a7 as ye,a8 as fe,a9 as ke,aa as ge,ab as $e,ac as ve,ad as qe,ae as be,af as De}from"./index.ebf56aa9.js";import{Q as _e}from"./QTooltip.791c5761.js";var we=X({name:"QBanner",props:W(K({},ne),{inlineActions:Boolean,dense:Boolean,rounded:Boolean}),setup(e,{slots:s}){const i=ie(),a=re(e,i.proxy.$q),y=v(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),f=v(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const m=[S("div",{class:"q-banner__avatar col-auto row items-center self-start"},R(s.avatar)),S("div",{class:"q-banner__content col text-body2"},R(s.default))],p=R(s.action);return p!==void 0&&m.push(S("div",{class:f.value},p)),S("div",{class:y.value+(e.inlineActions===!1&&p!==void 0?" q-banner--top-padding":""),role:"alert"},m)}}});const Ce=C({components:{},setup(){const{hiringCenterData:e,checkInData:s}=_(),{employeeData:i}=b(),{checkedIn:a}=J(_());return{hiringCenterData:e,employeeData:i,helpers:N,checkedIn:a,checkInData:s}}}),Ae={class:"row items-center"},Se={key:0},Ie={key:1};function Te(e,s,i,a,y,f){return o(),u("div",{class:n(e.$q.screen.gt.sm?"q-px-md q-pb-lg":"q-px-sm q-py-md")},[t("div",Ae,[t("div",{class:n(e.$q.screen.gt.sm?"col-8":"col-12 order-last text-center")},[t("div",{class:n(["text-primary",e.$q.screen.gt.sm?"text-h4":"text-h6 q-mt-sm"])}," Welcome, "+l(e.helpers.formatName(e.employeeData[20]))+"! ",3)],2),e.checkedIn?(o(),u("div",{key:0,class:n(e.$q.screen.gt.sm?"col-4":"col-12 order-first")},[r(we,{dense:e.$q.screen.lt.md,rounded:"",class:"text-white bg-info text-center"},{default:c(()=>[e.$q.screen.gt.sm?(o(),u("span",Se,"Currently checked in to the "+l(e.checkInData[22])+" Hiring Center.",1)):d("",!0),e.$q.screen.lt.md?(o(),u("span",Ie,"Checked in to "+l(e.checkInData[22])+" Hiring Center.",1)):d("",!0)]),_:1},8,["dense"])],2)):d("",!0)])],2)}var Pe=A(Ce,[["render",Te]]);const Ne=C({components:{},setup(){const{hiringCenterData:e}=_(),{employeeData:s,offerData:i}=b(),a=v(()=>s[79]===4||s[79]===5?"In Process":s[79]===6?"Deployed":"");return{hiringCenterData:e,employeeData:s,helpers:N,offerData:i,status:a}}}),Be={class:"text-body2"},Ye={class:"text-dark q-pb-sm"},Le=h("Status:"),je={class:"text-primary q-ml-md"},Ee={class:"text-dark q-pb-sm"},Fe=h("Project:"),Qe={class:"text-primary q-ml-md"},ze={class:"text-dark q-pb-sm"},Re=h("Job:"),He={class:"text-primary q-ml-md"},Je={class:"text-dark q-pb-sm"},Ve=h("Hire Date:"),Me={class:"text-primary q-ml-md"},Oe={class:"text-caption"},Ue={class:"text-dark q-pb-sm"},Ke=h("Status:"),We={class:"text-primary q-ml-md"},Ge={class:"text-dark q-pb-sm"},Xe=h("Job Site:"),Ze={class:"text-primary q-ml-md"},xe={class:"text-dark q-pb-sm"},et=h("Job:"),tt={class:"text-primary q-ml-md"},st={class:"text-dark q-pb-sm"},ot=h("Hire Date:"),at={class:"text-primary q-ml-md"};function nt(e,s,i,a,y,f){return o(),u("div",null,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},"Current Job Details",2)]),_:1}),r(q),e.$q.screen.gt.md?(o(),k(g,{key:0},{default:c(()=>[t("div",Be,[t("div",Ye,[Le,t("span",je,l(e.status),1)]),t("div",Ee,[Fe,t("span",Qe,l(e.offerData[56]),1)]),t("div",ze,[Re,t("span",He,l(e.offerData[57]),1)]),t("div",Je,[Ve,t("span",Me,l(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1})):d("",!0),e.$q.screen.gt.md?d("",!0):(o(),k(g,{key:1},{default:c(()=>[t("div",Oe,[t("div",Ue,[Ke,t("span",We,l(e.status),1)]),t("div",Ge,[Xe,t("span",Ze,l(e.offerData[160]),1)]),t("div",xe,[et,t("span",tt,l(e.offerData[57]),1)]),t("div",st,[ot,t("span",at,l(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1}))]),_:1})])}var rt=A(Ne,[["render",nt]]);const it=[S("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),S("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[S("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),S("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[S("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var lt=X({name:"QSpinnerClock",props:le,setup(e){const{cSize:s,classes:i}=ce(e);return()=>S("svg",{class:i.value,width:s.value,height:s.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},it)}});const ct=C({props:{item:Object},setup(e){const s=V(),i=de(),{openWindow:a,checkedIn:y,onKiosk:f}=_(),{employeeData:m,acceptDeployment:p,offerData:D,processingData:T}=b(),P=G(!1);function B(z){z==="deployment"&&(P.value=!0)}async function F(z){if(z==="deployment")try{await p(e.item.idForAcceptance),P.value=!1,s.notify({type:"positive",message:"Acceptance submitted!",position:"top-right"})}catch(x){console.log(x),s.notify({type:"negative",message:"Something went wrong",position:"top-right"})}}function Q(){i.replace({name:"assessment"})}function Z(){y||f?i.replace({name:"apply"}):i.replace({name:"jobs"})}return{tasks:[],showDescription:G(!1),openLink(){a(e.item.to,{url:e.item.url,name:e.item.to})},employeeData:m,openAgreement:B,showDeployAgreement:P,submitAcceptance:F,offerData:D,processingData:T,startTest:Q,startApply:Z}}}),dt={class:"row items-center"},mt={class:"col-11"},pt={class:"col-1"},ut=h(" Use the following information to log in to complete your training: "),ht=t("span",{class:"text-primary"},"Username: ",-1),yt=t("span",{class:"text-primary"},"Password: ",-1),ft=h(" welcome "),kt=[yt,ft],gt=t("div",{class:"text-h6"},"Terms of Job",-1),$t={class:"text-dark q-pb-sm"},vt=h("Start Date/Time:"),qt={class:"q-ml-sm text-primary"},bt={class:"text-dark q-pb-sm"},Dt=h("Project:"),_t={class:"q-ml-sm text-primary"},wt={class:"text-dark q-pb-sm"},Ct=h("Job:"),At={class:"q-ml-sm text-primary"},St={class:"text-dark q-pb-sm"},It=h("Pay Rate:"),Tt={class:"q-ml-sm text-primary"},Pt={key:0,class:"text-dark q-pb-sm"},Nt=h("Per-diem:"),Bt={class:"q-ml-sm text-primary"},Yt={class:"text-dark q-pb-sm"},Lt=h("Location:"),jt={class:"q-ml-sm text-primary"},Et={class:"text-dark q-pb-sm"},Ft=h("Site Contact:"),Qt={class:"q-ml-sm text-primary"},zt=t("span",null,"You must arrive fit for duty, clean shaven, with short finger nails and appropriately dressed. ",-1),Rt=t("span",null,"All tools must be in safe working order and not modified. ",-1),Ht=t("span",null,"In addition, you must have approved steel-toed shoes and FRC (Nomex), if required by the facility. ",-1),Jt=[zt,Rt,Ht],Vt=t("span",null,"If you cannot show up for work as scheduled for any reason, you must call the site contact prior to your scheduled start date and time. Their number will be provided once you have accepted these terms. ",-1),Mt=t("span",null,"If the site contact does not answer, you must leave a voicemail or send a text message, and contact the hiring center. ",-1),Ot=t("span",null,"Failure to do so may result in your offer being rescinded.",-1),Ut=[Vt,Mt,Ot];function Kt(e,s,i,a,y,f){return o(),u("div",null,[e.item.hide?d("",!0):(o(),k(w,{key:0,class:"q-mb-sm"},{default:c(()=>[r(g,{class:n(["q-py-sm",e.$q.screen.gt.md?"q-px-md":"q-px-sm",e.item.lock?"bg-info":e.item.complete?"bg-positive":e.item.alert?"bg-negative":"bg-accent"])},{default:c(()=>[t("div",dt,[t("div",mt,[t("div",{class:n(["text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[!e.item.visible&&!e.item.complete?(o(),k(I,{key:0,onClick:s[0]||(s[0]=m=>e.showDescription=!e.showDescription),round:"",flat:"",icon:e.showDescription?"keyboard_arrow_up":"keyboard_arrow_down",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white"},null,8,["icon","size"])):d("",!0),h(" "+l(e.item.lock?"Task Locked":e.item.task)+" ",1),e.item.hasLink&&!e.item.complete?(o(),k(I,{key:1,round:"",flat:"",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white",onClick:e.openLink,label:e.item.to,"icon-right":"open_in_new"},{default:c(()=>[e.item.to&&e.item.to!==""?(o(),k(_e,{key:0},{default:c(()=>[h("Open "+l(e.item.to),1)]),_:1})):d("",!0)]),_:1},8,["size","onClick","label"])):d("",!0)],2)]),t("div",pt,[!e.item.complete&&!e.item.alert&&!e.item.lock?(o(),k(lt,{key:0,size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):d("",!0),e.item.complete?(o(),k(E,{key:1,name:"check_circle",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):d("",!0),e.item.alert?(o(),k(E,{key:2,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):d("",!0),e.item.lock?(o(),k(E,{key:3,name:"lock",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):d("",!0)])])]),_:1},8,["class"]),!e.item.lock&&(e.showDescription||e.item.visible)?(o(),k(g,{key:0},{default:c(()=>[t("div",{class:n([e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},l(e.item.description),3),e.item.needsAcceptance?(o(),k(I,{key:0,class:"q-px-none",flat:"",style:{"text-decoration":"underline"},color:"primary",label:"Review Information",onClick:s[1]||(s[1]=m=>e.openAgreement(e.item.acceptanceType))})):d("",!0),e.item.saba?(o(),u("div",{key:1,class:n(["q-pt-sm",e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[ut,t("div",{class:n(["text-dark q-mt-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[ht,h(" "+l(e.employeeData[378]),1)],2),t("div",{class:n(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},kt,2)],2)):d("",!0)]),_:1})):d("",!0),(e.item.test||e.item.apply)&&e.item.hasStartButton?(o(),k(q,{key:1})):d("",!0),(e.item.test||e.item.apply)&&e.item.hasStartButton?(o(),k(H,{key:2,align:"right"},{default:c(()=>[e.item.test?(o(),k(I,{key:0,label:"Start Test",color:"primary",onClick:e.startTest},null,8,["onClick"])):d("",!0),e.item.apply?(o(),k(I,{key:1,label:"Apply Now",color:"primary",onClick:e.startApply},null,8,["onClick"])):d("",!0)]),_:1})):d("",!0)]),_:1})),r(he,{modelValue:e.showDeployAgreement,"onUpdate:modelValue":s[3]||(s[3]=m=>e.showDeployAgreement=m),persistent:"","full-width":e.$q.screen.lt.md,"full-height":e.$q.screen.lt.md},{default:c(()=>[r(w,{class:n(["scroll",e.$q.screen.gt.sm?"":"full-width"]),style:me(e.$q.screen.gt.sm?"min-width: 800px;":"")},{default:c(()=>[r(g,null,{default:c(()=>[gt]),_:1}),r(q),r(g,null,{default:c(()=>[t("div",{class:n(e.$q.screen.gt.md?"text-body2":"text-caption")},[t("div",$t,[vt,t("span",qt,l(e.processingData[33])+" @ "+l(e.processingData[39]),1)]),t("div",bt,[Dt,t("span",_t,l(e.offerData[91]),1)]),t("div",wt,[Ct,t("span",At,l(e.offerData[57]),1)]),t("div",St,[It,t("span",Tt,"$ "+l(e.offerData[22])+"/hr",1)]),e.processingData[34]?(o(),u("div",Pt,[Nt,t("span",Bt,"$ "+l(e.offerData[35]),1)])):d("",!0),t("div",Yt,[Lt,t("span",jt,l(e.processingData[188]===""?e.processingData[190]:e.processingData[188]),1)]),t("div",Et,[Ft,t("span",Qt,l(e.processingData[186]===""?"Hiring Center":e.processingData[186]),1)])],2)]),_:1}),r(g,{class:"q-pt-none"},{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Jt,2),t("div",{class:n(["text-dark q-mt-md",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Ut,2)]),_:1}),r(q),r(H,{align:"right"},{default:c(()=>[pe(r(I,{flat:"",label:"Decline",color:"dark"},null,512),[[ue]]),r(I,{flat:"",label:"Accept",color:"primary",onClick:s[2]||(s[2]=m=>e.submitAcceptance(e.item.acceptanceType))})]),_:1})]),_:1},8,["class","style"])]),_:1},8,["modelValue","full-width","full-height"])])}var j=A(ct,[["render",Kt]]);const Wt=C({components:{task:j},setup(){const e=V(),{hiringCenterData:s}=_(),{employeeData:i,processingData:a,offerData:y}=b(),f=v(()=>i[79]===4||i[79]===5?"In Process":i[79]===6?"Deployed":""),m=v(()=>[{task:"Complete Hire Packet",complete:a[249],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!a[258],hasLink:!1},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:a[250],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:`${s[335]?s[335].value:""}`,to:"i9 Complete",hide:!a[257]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:a[251],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!a[256],saba:!0,visible:!a[251]}]),p=v(()=>m.value.filter(D=>!D.complete));return{hiringCenterData:s,employeeData:i,helpers:N,processingData:a,offerData:y,status:f,tasks:m,incomplete:p}}}),Gt={key:0},Xt=h(" Assigned Tasks "),Zt={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},xt={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function es(e,s,i,a,y,f){const m=$("task");return e.processingData?(o(),u("div",Gt,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[Xt,e.incomplete.length>0?(o(),u("span",Zt,"("+l(e.incomplete.length)+" tasks remaining)",1)):(o(),u("span",xt,"(All tasks completed!)"))],2)]),_:1}),r(q),r(g,{class:"q-pa-sm"},{default:c(()=>[(o(!0),u(Y,null,L(e.tasks,p=>(o(),k(m,{key:p,item:p},null,8,["item"]))),128))]),_:1})]),_:1})])):d("",!0)}var ts=A(Wt,[["render",es]]);const ss=C({components:{task:j},setup(){const e=V(),{hiringCenterData:s}=_(),{employeeData:i,processingData:a,offerData:y}=b(),f=v(()=>[{task:"Complete Hire Packet",complete:a[210],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!a[209]},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:a[208],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:`${s[335]?s[335].value:""}`,to:"i9 Complete",hide:!a[207]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:a[205],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!a[206],saba:!0,visible:!a[205]},{task:"Complete Safety Council Training",complete:a[33]==="Complete",description:"Complete the trainings required for your Project. A hiring center employee will schedule these classes for you."},{task:"Complete Drug Screens",complete:a[34]==="Complete",description:"Complete the drug screens required for your Project. A hiring center employee will order these for you."},{task:"Complete Fit Tests",complete:a[35]==="Complete",description:"Complete the fit tests required for your Project. A hiring center employee will order these for you."},{task:"Complete Medical Screens",complete:a[36]==="Complete",description:"Complete the medical screens required for your Project. A hiring center employee will order these for you."}]),m=v(()=>f.value.filter(p=>!p.complete&&(p.hide===void 0||!p.hide&&!p.complete)));return{hiringCenterData:s,employeeData:i,helpers:N,processingData:a,offerData:y,date:M,tasks:f,incomplete:m}}}),os={key:0},as=h(" Assigned Tasks "),ns={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},rs={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function is(e,s,i,a,y,f){const m=$("task");return e.processingData?(o(),u("div",os,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[as,e.incomplete.length>0?(o(),u("span",ns,"("+l(e.incomplete.length)+" tasks remaining)",1)):(o(),u("span",rs,"(All tasks completed!)"))],2)]),_:1}),r(q),r(g,{class:"q-pa-sm"},{default:c(()=>[(o(!0),u(Y,null,L(e.tasks,p=>(o(),k(m,{key:p,item:p},null,8,["item"]))),128))]),_:1})]),_:1})])):d("",!0)}var ls=A(ss,[["render",is]]);const cs=C({components:{task:j},setup(){const{hiringCenterData:e}=_(),{employeeData:s,offerData:i}=b(),{processingData:a}=J(b()),y=v(()=>[{task:"Review and Accept Terms",complete:a.value.accepted,description:"Click the link below to review and accept the Terms for your new Job.",visible:!a.value.accepted,alert:a.value[192]?a.value[192]:!1,needsAcceptance:!0,acceptanceType:"deployment",idForAcceptance:a.value[3]},{task:`Start Work on ${a.value[33]}`,complete:!1,description:a.value[192]?`You were scheduled to arrive on site on ${a.value[33]} at ${a.value[39]}. If you have not arrived, please call your site contact to reschedule your start date.`:`Congratulations! You are ready to begin your new job assignment. You are scheduled to arrive on site on ${a.value[33]} at ${a.value[39]}. Review the job and arrival details for more info.`,visible:!0,alert:a.value[192]?a.value[192]:!1,lock:!a.value.accepted}]),f=v(()=>y.value.filter(m=>!m.complete));return{hiringCenterData:e,employeeData:s,helpers:N,processingData:a,offerData:i,date:M,tasks:y,incomplete:f}}}),ds={key:0},ms={class:"row justify-between q-mt-md"},ps=h(" Job and Arrival Details "),us={class:"text-dark q-pb-sm"},hs=h("Start Date/Time:"),ys={class:"text-dark q-pb-sm"},fs=h("Project:"),ks={class:"text-dark q-pb-sm"},gs=h("Job:"),$s={class:"text-dark q-pb-sm"},vs=h("Location:"),qs={class:"text-dark q-pb-sm"},bs=h("Address: "),Ds=["href"],_s={class:"text-dark q-pb-sm"},ws=h("Site Contact:"),Cs={class:"text-dark q-pb-sm"},As=h("Contact Number: "),Ss=["href"],Is={class:"text-dark q-pb-sm"},Ts=h("Hiring Center: "),Ps=["href"],Ns=t("span",null,"You must arrive fit for duty, clean shaven, with short finger nails and appropriately dressed. ",-1),Bs=t("span",null,"All tools must be in safe working order and not modified. ",-1),Ys=t("span",null,"In addition, you must have approved steel-toed shoes and FRC (Nomex), if required by the facility.",-1),Ls=[Ns,Bs,Ys],js=t("span",null,"If you cannot show up for work as scheduled for any reason, you must call the site contact prior to your scheduled start date and time. ",-1),Es=t("span",null,"If the site contact does not answer, you must leave a voicemail or send a text message, and contact the hiring center. ",-1),Fs=t("span",null,"Failure to do so may result in your offer being rescinded.",-1),Qs=[js,Es,Fs],zs=h(" Assigned Tasks "),Rs={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function Hs(e,s,i,a,y,f){const m=$("task");return e.processingData?(o(),u("div",ds,[t("div",{class:n(["text-positive q-pl-sm",e.$q.screen.gt.sm?"text-h5":"text-body1"])},"You are ready to start your new Job!",2),t("div",ms,[e.processingData.accepted?(o(),u("div",{key:0,class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[r(w,null,{default:c(()=>[r(g,{class:n(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:c(()=>[t("div",{class:n(e.$q.screen.gt.md?"text-h6":"text-body1")},[e.processingData[192]?(o(),k(E,{key:0,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):d("",!0),ps,e.processingData[192]?(o(),u("span",{key:1,class:n(["text-italic q-ml-sm text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"(Missed arrival date!)",2)):d("",!0)],2),t("div",{class:n(["text-secondary text-italic",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Terms Accepted: "+l(e.processingData[198].$d!==void 0?e.date.formatDate(e.processingData[198].$d,"MM-DD-YYYY"):e.processingData[198].date),3)]),_:1},8,["class"]),r(q),r(g,null,{default:c(()=>[t("div",{class:n(e.$q.screen.gt.md?"text-body2":"text-caption")},[t("div",us,[hs,t("span",{class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[33])+" @ "+l(e.processingData[39]),3)]),t("div",ys,[fs,t("span",{class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.offerData[91]),3)]),t("div",ks,[gs,t("span",{class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.offerData[57]),3)]),t("div",$s,[vs,t("span",{class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[188]===""?e.processingData[190]:e.processingData[188]),3)]),t("div",qs,[bs,t("a",{style:{"text-decoration":"underline"},href:`https://maps.google.com/?q=${e.processingData[189]===""?e.processingData[191]:e.processingData[189]}`,target:"_blank",class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[189]===""?e.processingData[191]:e.processingData[189]),11,Ds)]),t("div",_s,[ws,t("span",{class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[186]===""?"Hiring Center":e.processingData[186]),3)]),t("div",Cs,[As,e.$q.screen.lt.md?(o(),u("a",{key:0,style:{"text-decoration":"underline"},href:`tel:${e.processingData[187]===""?e.offerData[280]:e.processingData[187]}`,class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[187]===""?e.offerData[280]:e.processingData[187]),11,Ss)):d("",!0),e.$q.screen.gt.sm?(o(),u("span",{key:1,class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.processingData[187]===""?e.offerData[280]:e.processingData[187]),3)):d("",!0)]),t("div",Is,[Ts,e.$q.screen.lt.md?(o(),u("a",{key:0,style:{"text-decoration":"underline"},href:`tel:${e.offerData[280]}`,class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.offerData[280]),11,Ps)):d("",!0),e.$q.screen.gt.sm?(o(),u("span",{key:1,class:n(["q-ml-sm",e.processingData[192]?"":"text-primary"])},l(e.offerData[280]),3)):d("",!0)])],2)]),_:1}),r(q),r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Ls,2),t("div",{class:n(["text-dark q-mt-md",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Qs,2)]),_:1})]),_:1})],2)):d("",!0),t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[r(w,null,{default:c(()=>[r(g,{class:n(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:c(()=>[t("div",{class:n(e.$q.screen.gt.md?"text-h6":"text-body1")},[zs,e.incomplete.length>0?(o(),u("span",{key:0,class:n(["text-italic q-ml-sm",e.processingData[192]?"text-white":"text-accent",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"("+l(e.incomplete.length)+" task"+l(e.incomplete.length>1?"s":"")+" remaining)",3)):(o(),u("span",Rs,"(All tasks completed!)"))],2)]),_:1},8,["class"]),r(q),r(g,{class:"q-pa-sm"},{default:c(()=>[(o(!0),u(Y,null,L(e.tasks,p=>(o(),k(m,{key:p,item:p},null,8,["item"]))),128))]),_:1})]),_:1})],2)])])):d("",!0)}var Js=A(cs,[["render",Hs]]);const Vs=C({components:{task:j},setup(){const{hiringCenterData:e,testForCraft:s,onKiosk:i,checkedIn:a,addTaskToCheckin:y,checkInData:f}=_(),{employeeData:m}=b(),p=v(()=>i?[{task:`Complete ${s[10]} Craft Test`,complete:!1,description:"Click the start test button to complete your test.",hide:!1,hasLink:!1,hasStartButton:!0,visible:!0,test:!0}]:[{task:`Complete ${s[10]} Craft Test`,complete:!1,description:a?"Login to one of the kiosks and complete your test.":"When you visit a BrandSafway hiring center, login to one of the kiosks to complete your test.",hide:!1,hasLink:!1,hasStartButton:!1,visible:!0,test:!0}]),D=v(()=>p.value.filter(T=>!T.complete));return a&&s.available&&(f[27]!=="Kiosk"||f[10]!=="Take Craft Test")&&y({task:"Kiosk",reason:"Take Craft Test"}),{hiringCenterData:e,employeeData:m,tasks:p,incomplete:D}}}),Ms={class:"row justify-between q-mt-md"},Os=h(" You have Assigned Tasks "),Us={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},Ks={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function Ws(e,s,i,a,y,f){const m=$("task");return o(),u("div",Ms,[t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[Os,e.employeeData.needsTest&&e.incomplete.length>0?(o(),u("span",Us,"("+l(e.incomplete.length)+" task"+l(e.incomplete.length>1?"s":"")+" remaining)",1)):(o(),u("span",Ks,"(All tasks completed!)"))],2)]),_:1}),r(q),r(g,{class:"q-pa-sm"},{default:c(()=>[(o(!0),u(Y,null,L(e.tasks,p=>(o(),k(m,{key:p,item:p},null,8,["item"]))),128))]),_:1})]),_:1})])],2),t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},null,2)])}var Gs=A(Vs,[["render",Ws]]);const Xs=C({components:{task:j},setup(){const{hiringCenterData:e}=_(),{employeeData:s,voluntaryFormsComplete:i}=b(),a=v(()=>[{task:"Apply for a Job",complete:s.complete&&i,description:"Click the apply button to begin.",hide:!1,hasLink:!1,hasStartButton:!0,visible:!0,test:!1,apply:!0}]),y=v(()=>a.value.filter(f=>!f.complete));return{hiringCenterData:e,employeeData:s,tasks:a,incomplete:y}}}),Zs={class:"row justify-between q-mt-md"},xs=h(" You have Assigned Tasks "),eo={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},to={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function so(e,s,i,a,y,f){const m=$("task");return o(),u("div",Zs,[t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[xs,e.incomplete.length>0?(o(),u("span",eo,"("+l(e.incomplete.length)+" task"+l(e.incomplete.length>1?"s":"")+" remaining)",1)):(o(),u("span",to,"(All tasks completed!)"))],2)]),_:1}),r(q),r(g,{class:"q-pa-sm"},{default:c(()=>[(o(!0),u(Y,null,L(e.tasks,p=>(o(),k(m,{key:p,item:p},null,8,["item"]))),128))]),_:1})]),_:1})])],2),t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},null,2)])}var oo=A(Xs,[["render",so]]);const ao=C({components:{},setup(){const{hiringCenterData:e,addTaskToCheckin:s}=_(),{employeeData:i}=b(),a=v(()=>ye({selection:fe().required("Please select a reason!").nullable()})),{meta:y,errors:f,handleSubmit:m,isSubmitting:p}=ke({validationSchema:a}),{value:D}=ge("selection"),T=m(async P=>{const B=await s({task:"",reason:P.selection,active:!0});console.log(B)});return{options:["Transfer","Released from Job Site","Random Drug Screen","Safety Council","Help with Payroll","Other"],hiringCenterData:e,employeeData:i,submitUpdate:T,formMeta:y,formErrors:f,selection:D,isSubmitting:p}}}),no={class:"row justify-between q-mt-md"},ro={class:"text-caption"};function io(e,s,i,a,y,f){return o(),u("div",no,[t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[r(w,null,{default:c(()=>[r(g,null,{default:c(()=>[t("div",{class:n(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])}," Why Are You Here? ",2)]),_:1}),r(q),r($e,{onSubmit:ve(e.submitUpdate,["prevent"])},{default:c(()=>[r(g,null,{default:c(()=>[r(qe,{autofocus:"",label:"Select a Reason",modelValue:e.selection,"onUpdate:modelValue":s[0]||(s[0]=m=>e.selection=m),options:e.options,error:!!e.formErrors.selection,"bottom-slots":"",dense:""},{error:c(()=>[t("div",ro,l(e.formErrors.selection),1)]),_:1},8,["modelValue","options","error"])]),_:1}),r(H,{align:"right"},{default:c(()=>[r(I,{type:"submit",color:"info",label:"Continue",loading:e.isSubmitting},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})])],2)])}var lo=A(ao,[["render",io]]);const co=C({components:{},setup(){const{employeeData:e}=b(),{getUser:s}=be();return{employeeData:e,helpers:N,date:M,getUser:s}}}),mo={class:"row justify-between q-mt-md"},po=t("span",{class:"text-primary"},"Account Created",-1),uo={class:"text-dark q-pl-md"},ho=t("span",{class:"text-primary"},"Name",-1),yo={class:"text-dark q-pl-md"},fo=t("span",{class:"text-primary"},"Phone",-1),ko={class:"text-dark q-pl-md"},go=t("span",{class:"text-primary"},"Email",-1),$o={class:"text-dark q-pl-md"};function vo(e,s,i,a,y,f){return o(),u("div",mo,[t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[r(w,null,{default:c(()=>[r(g,{class:"bg-info"},{default:c(()=>[t("div",{class:n(["text-white",e.$q.screen.gt.sm?"text-h6":"text-body1"])},"Your Information",2)]),_:1}),r(q),r(g,null,{default:c(()=>[t("div",{class:n(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[po,t("span",uo,l(e.date.formatDate(e.getUser[1].$d,"MM/DD/YYYY")),1)],2),t("div",{class:n(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[ho,t("span",yo,l(e.helpers.formatName(e.employeeData[24])),1)],2),t("div",{class:n(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[fo,t("span",ko,l(e.helpers.formatPhone(e.employeeData[25])),1)],2),t("div",{class:n(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[go,t("span",$o,l(e.employeeData[26]),1)],2)]),_:1})]),_:1})])],2),t("div",{class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[r(w,null,{default:c(()=>[r(g,{class:"bg-positive"},{default:c(()=>[t("div",{class:n(["text-white",e.$q.screen.gt.md?"text-h6":"text-body1"])}," You have No Assigned Tasks ",2)]),_:1})]),_:1})])],2)])}var qo=A(co,[["render",vo]]);const bo=C({components:{JobDetails:rt,InProcess:ts,Pending:ls,Deployed:Js,NeedsTest:Gs,NeedsApply:oo,CheckInActive:lo,NoTasks:qo},setup(){const{hiringCenterData:e,testForCraft:s}=_(),{checkInActive:i,employeeActive:a,noTasks:y}=J(b()),{employeeData:f,offerData:m,showInProcess:p,voluntaryFormsComplete:D}=b();return{hiringCenterData:e,employeeData:f,helpers:N,offerData:m,showInProcess:p,testForCraft:s,voluntaryFormsComplete:D,checkInActive:i,employeeActive:a,noTasks:y}}}),Do={key:0,class:"row justify-between"};function _o(e,s,i,a,y,f){const m=$("job-details"),p=$("in-process"),D=$("pending"),T=$("deployed"),P=$("needs-test"),B=$("needs-apply"),F=$("check-in-active"),Q=$("no-tasks");return o(),u("div",null,[e.employeeData[79]!==6&&!e.employeeData.needsTest?(o(),u("div",Do,[e.offerData&&e.showInProcess&&e.employeeData[79]!==6?(o(),u("div",{key:0,class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm order-last"])},[r(m)],2)):d("",!0),e.showInProcess&&e.employeeData[79]&&(e.employeeData[79]===4||e.employeeData[79]===5)?(o(),u("div",{key:1,class:n(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[e.employeeData[79]===4?(o(),k(p,{key:0})):d("",!0),e.employeeData[79]===5?(o(),k(D,{key:1})):d("",!0)],2)):d("",!0)])):d("",!0),e.employeeData[79]&&e.employeeData[79]===6?(o(),k(T,{key:1,class:"q-mt-md"})):d("",!0),e.employeeData.needsTest&&e.testForCraft.available&&e.employeeData[79]!==6&&!e.showInProcess&&e.employeeData.complete&&!e.checkInActive&&!e.employeeActive?(o(),k(P,{key:2})):d("",!0),(!e.employeeData.complete||!e.voluntaryFormsComplete)&&e.employeeData[79]!==6&&!e.showInProcess&&!e.checkInActive&&!e.employeeActive?(o(),k(B,{key:3})):d("",!0),e.checkInActive?(o(),k(F,{key:4})):d("",!0),e.noTasks?(o(),k(Q,{key:5})):d("",!0)])}var wo=A(bo,[["render",_o]]);const Co=C({name:"PageIndex",components:{Banner:Pe,Employment:wo},setup(){const{employeeData:e,showEmployment:s,updateEmployeeData:i}=b(),{inHiringCenter:a,hiringCenterData:y,checkedIn:f,onKiosk:m,getHiringCenterData:p,fieldLabels:D}=_();return!y&&m&&p(),D||i({fields:{339:{value:1}}}),{employeeData:e,showEmployment:s,inHiringCenter:a,hiringCenterData:y,checkedIn:f,onKiosk:m}}});function Ao(e,s,i,a,y,f){const m=$("banner"),p=$("employment");return o(),k(De,{padding:"",style:{"max-width":"100vw"}},{default:c(()=>[e.checkedIn||e.onKiosk||!e.employeeData.complete?(o(),k(m,{key:0})):d("",!0),e.checkedIn||e.onKiosk?(o(),k(q,{key:1})):d("",!0),r(p)]),_:1})}var Po=A(Co,[["render",Ao]]);export{Po as default};
