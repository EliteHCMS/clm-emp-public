import{Q}from"./QPage.52c5b735.js";import{k as P,c0 as $,r as u,aG as I,aI as N,c as g,_ as q,v as C,x as U,d as r,be as i,cx as j,z as n,cy as h,cA as F,a7 as w,d5 as D,bU as T,aV as B,aj as _}from"./index.5ac7495d.js";import{a as E}from"./QSelect.1101d1c2.js";import{Q as z}from"./QTable.f3a8f0e6.js";import{m as y,l as R,e as Y}from"./quickbase.8d5c8477.js";import{u as W}from"./use-quasar.881e7bfb.js";import{dayjs as V}from"./dayjs.b1c957b0.js";import"./QMenu.e07cf627.js";import"./position-engine.cf84a8df.js";import"./selection.e70f58a4.js";import"./rtl.65b79c69.js";import"./QList.62a78b93.js";import"./QMarkupTable.85e26b52.js";import"./use-fullscreen.82403be7.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.e4498546.js";import"./index.7dbe61ef.js";import"./i18n.5133204f.js";const x=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.map.workdayId,format:(e,l)=>l[20]==="In Process"?"W---------":e,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e.map.craft,format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.job,format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e.map.jobNumber,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e.map.contact,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e.map.start,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}],J=[{name:1,label:"Name",align:"left",field:e=>e,format:e=>`${e.map.name} (ID: ${e[20]==="In Process"?"W---------":e.map.workdayId})`,sortable:!0},{name:3,label:"Job",align:"left",field:e=>e.map,format:e=>`${e.craft} ${e.job}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e.map.contact,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e.map.start,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}],L=P({name:"Arrivals Table",components:{},setup(){const e=W(),{deploymentsForProject:l,alreadyArrived:m}=$(y()),p=l,{updateArrival:f}=y(),{active:b}=$(R()),t=u(""),s=u(null),v=u(null),d=u([]);I(()=>{m.value.forEach(a=>{d.value.includes(a)||d.value.push(a)})}),N(()=>{m.value.forEach(a=>{d.value.includes(a)||d.value.push(a)})});const c=g(()=>{let a=[];return p.value.forEach(o=>{o[31].toLowerCase().includes(t.value.toLowerCase())&&a.push(o)}),a=s.value?a.filter(o=>V(o[33].$d).tz("America/Chicago").format("MM/DD/YYYY")===V(s.value).tz("America/Chicago").format("MM/DD/YYYY")):a,a=v.value?a.filter(o=>o[132]===v.value):a,a}),S=g(()=>c.value&&c.value!==void 0?e.screen.lt.md?100:c.value.length>=25?Math.round(c.value.length/5):10:5);function k({rows:a,added:o,evt:re}){f({row:a[0],added:o})}const M=g(()=>[...new Map(l.value.map(a=>[a[132],a[132]])).values()]);return{columns:x,mobileColumns:J,rows:c,initialPagination:{rowsPerPage:S},separator:"vertical",arrivals:d,updateArrivals:k,active:b,alreadyArrived:m,search:t,craftOptions:M,craftFilter:v,startDateFilter:s,deploymentsForProject:l}}}),O={class:"q-px-sm"},G={class:"row items-center"},H={class:"col-12 col-md-4 q-px-sm"},K={class:"col-12 col-md-4 q-px-sm"},X={class:"col-12 col-md-4 q-px-sm"},Z={class:"text-dark text-caption text-italic"},ee={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function ae(e,l,m,p,f,b){return C(),U("div",O,[r(F,{flat:""},{default:i(()=>[r(j,{class:"q-pt-none"},{default:i(()=>[n("div",G,[n("div",H,[r(h,{dense:e.$q.screen.lt.md,modelValue:e.search,"onUpdate:modelValue":l[0]||(l[0]=t=>e.search=t),label:"Search"},null,8,["dense","modelValue"])]),n("div",K,[r(h,{dense:e.$q.screen.lt.md,modelValue:e.startDateFilter,"onUpdate:modelValue":l[1]||(l[1]=t=>e.startDateFilter=t),label:"Arrival Date",type:"date","stack-label":""},null,8,["dense","modelValue"])]),n("div",X,[r(E,{dense:e.$q.screen.lt.md,label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":l[2]||(l[2]=t=>e.craftFilter=t),options:e.craftOptions,"use-chips":""},null,8,["dense","modelValue","options"])])])]),_:1})]),_:1}),r(z,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Expected Arrivals for ${e.active[20]}`:"Arrivals",columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical",selection:"multiple",onSelection:e.updateArrivals,selected:e.alreadyArrived,"table-header-class":"bg-dark text-white","no-data-label":`There are no expected arrivals for ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"top-right":i(()=>[n("div",Z,"(Total: "+w(e.deploymentsForProject.length)+" arrivals)",1)]),"header-selection":i(t=>[r(D,{disable:"",modelValue:t.selected,"onUpdate:modelValue":s=>t.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":i(t=>[r(D,{label:e.$q.screen.lt.sm?"Arrived":"",modelValue:t.selected,"onUpdate:modelValue":s=>t.selected=s},null,8,["label","modelValue","onUpdate:modelValue"])]),"no-data":i(({message:t})=>[n("div",ee,[r(T,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),n("span",null,w(t),1)])]),_:1},8,["title-class","title","columns","rows","pagination","onSelection","selected","no-data-label","grid"])])}var A=q(L,[["render",ae]]);const te={name:"Arrivals",components:{arrivalTable:A},setup(){return{arrivalTable:A}}};function le(e,l,m,p,f,b){const t=B("arrival-table");return C(),_(Q,{style:{"max-width":"100vw"}},{default:i(()=>[r(t)]),_:1})}var Ve=q(te,[["render",le]]);export{Ve as default};
