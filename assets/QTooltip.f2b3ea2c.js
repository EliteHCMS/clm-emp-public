var ie=Object.defineProperty,le=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var A=(e,a,o)=>a in e?ie(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a||(a={}))re.call(a,o)&&A(e,o,a[o]);if(H)for(var o of H(a))ue.call(a,o)&&A(e,o,a[o]);return e},S=(e,a)=>le(e,se(a));import{R as ce,a3 as de,aA as fe,a4 as ve,r as D,c as m,aB as he,a5 as me,aC as ge,a7 as ye,aD as Te,w as q,a0 as L,O as M,J as j,aI as pe,h as Q,aL as be,g as Se,ab as Pe,Q as we}from"./index.846445a9.js";import{u as Oe,v as R,a as Ce,p as W,b as ke,c as Ee,r as B,s as xe,d as He}from"./position-engine.13a633f9.js";import{c as I}from"./selection.08fe0490.js";var Me=ce({name:"QTooltip",inheritAttrs:!1,props:S(v(v(v({},Oe),de),fe),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:R},self:{type:String,default:"top middle",validator:R},offset:{type:Array,default:()=>[14,14],validator:Ce},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[...ve],setup(e,{slots:a,emit:o,attrs:g}){let s,r;const y=Se(),{proxy:{$q:i}}=y,u=D(null),c=D(!1),N=m(()=>W(e.anchor,i.lang.rtl)),_=m(()=>W(e.self,i.lang.rtl)),J=m(()=>e.persistent!==!0),{registerTick:U,removeTick:P}=he(),{registerTimeout:h,removeTimeout:T}=me(),{transition:V,transitionStyle:$}=ge(e,c),{localScrollTarget:w,changeScrollEvent:z,unconfigureScrollTarget:F}=ke(e,E),{anchorEl:n,canShow:G,anchorEvents:d}=Ee({showing:c,configureAnchorEl:ae}),{show:K,hide:p}=ye({showing:c,canShow:G,handleShow:Y,handleHide:Z,hideOnRouteChange:J,processOnMount:!0});Object.assign(d,{delayShow:ee,delayHide:te});const{showPortal:O,hidePortal:C,renderPortal:X}=Te(y,u,ne);if(i.platform.is.mobile===!0){const t={anchorEl:n,innerRef:u,onClickOutside(l){return p(l),l.target.classList.contains("q-dialog__backdrop")&&we(l),!0}},b=m(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);q(b,l=>{(l===!0?He:B)(t)}),L(()=>{B(t)})}function Y(t){P(),T(),O(),U(()=>{r=new MutationObserver(()=>f()),r.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),f(),E()}),s===void 0&&(s=q(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,f)),h(()=>{O(!0),o("show",t)},e.transitionDuration)}function Z(t){P(),T(),C(),k(),h(()=>{C(!0),o("hide",t)},e.transitionDuration)}function k(){r!==void 0&&(r.disconnect(),r=void 0),s!==void 0&&(s(),s=void 0),F(),M(d,"tooltipTemp")}function f(){const t=u.value;n.value===null||!t||xe({el:t,offset:e.offset,anchorEl:n.value,anchorOrigin:N.value,selfOrigin:_.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(t){if(i.platform.is.mobile===!0){I(),document.body.classList.add("non-selectable");const b=n.value,l=["touchmove","touchcancel","touchend","click"].map(x=>[b,x,"delayHide","passiveCapture"]);j(d,"tooltipTemp",l)}h(()=>{K(t)},e.delay)}function te(t){T(),i.platform.is.mobile===!0&&(M(d,"tooltipTemp"),I(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),h(()=>{p(t)},e.hideDelay)}function ae(){if(e.noParentEvent===!0||n.value===null)return;const t=i.platform.is.mobile===!0?[[n.value,"touchstart","delayShow","passive"]]:[[n.value,"mouseenter","delayShow","passive"],[n.value,"mouseleave","delayHide","passive"]];j(d,"anchor",t)}function E(){if(n.value!==null||e.scrollTarget!==void 0){w.value=pe(n.value,e.scrollTarget);const t=e.noParentEvent===!0?f:p;z(w.value,t)}}function oe(){return c.value===!0?Q("div",S(v({},g),{ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",g.class],style:[g.style,$.value],role:"complementary"}),Pe(a.default)):null}function ne(){return Q(be,{name:V.value,appear:!0},oe)}return L(k),Object.assign(y.proxy,{updatePosition:f}),X}});export{Me as Q};
