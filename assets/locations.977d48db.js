import{_ as r,aK as t,n as e,aw as o,ax as s,d as c,p as M,aL as g,F as $,a$ as k,s as v}from"./index.4b0ad8df.js";const x={name:"LocationsMap",data(){return{markers:[{position:{lat:29.96205,lng:-94.22626}},{position:{lat:29.00902,lng:-95.38633}},{position:{lat:30.02623,lng:-90.71339}}],center:{lat:30.02623,lng:-90.71339}}}};function w(p,i,l,_,a,m){const n=t("GMapMarker"),d=t("GMapCluster"),u=t("GMapMap");return e(),o(u,{center:a.center,zoom:7,"map-type-id":"terrain",style:{width:"100vw",height:"100vh"}},{default:s(()=>[c(d,null,{default:s(()=>[(e(!0),M($,null,g(a.markers,(f,h)=>(e(),o(n,{key:h,position:f.position},null,8,["position"]))),128))]),_:1})]),_:1},8,["center"])}var G=r(x,[["render",w]]);const y={name:"Locations",components:{LocationsMap:G}},L={style:{height:"100vh"}};function B(p,i,l,_,a,m){const n=t("locations-map");return e(),o(k,{padding:"",style:{"max-width":"100vw"}},{default:s(()=>[v("div",L,[c(n,{class:"fit"})])]),_:1})}var F=r(y,[["render",B]]);export{F as default};
