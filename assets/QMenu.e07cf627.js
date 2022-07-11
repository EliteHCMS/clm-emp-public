import{bC as L,bD as W,c3 as re,bE as N,c4 as de,c as n,bQ as fe,g as U,h as u,bU as O,c5 as ve,c6 as he,bZ as Z,bK as ge,c7 as me,bL as be,r as K,c8 as ke,bM as qe,c9 as Se,bO as Ce,ca as ye,w as j,cb as xe,cc as I,cd as Be,ce as Pe,cf as Te,cg as Oe,ch as _e,ci as Re,bR as we,bj as Ee,aH as Fe,cj as De}from"./index.5ac7495d.js";import{u as Me,v as z,a as Ae,b as Qe,c as He,p as V,d as Ke,r as $,s as je}from"./position-engine.cf84a8df.js";const Ie={xs:8,sm:10,md:14,lg:20,xl:24};var $e=L({name:"QChip",props:{...W,...re,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:C,emit:l}){const{proxy:{$q:s}}=U(),r=N(e,s),v=de(e,Ie),d=n(()=>e.selected===!0||e.icon!==void 0),g=n(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),b=n(()=>e.iconRemove||s.iconSet.chip.remove),f=n(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=n(()=>{const o=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(o?` text-${o} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(f.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),a=n(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function c(o){o.keyCode===13&&k(o)}function k(o){e.disable||(l("update:selected",!e.selected),l("click",o))}function q(o){(o.keyCode===void 0||o.keyCode===13)&&(Z(o),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function y(){const o=[];f.value===!0&&o.push(u("div",{class:"q-focus-helper"})),d.value===!0&&o.push(u(O,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const S=e.label!==void 0?[u("div",{class:"ellipsis"},[e.label])]:void 0;return o.push(u("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ve(C.default,S))),e.iconRight&&o.push(u(O,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&o.push(u(O,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...a.value,onClick:q,onKeyup:q})),o}return()=>{if(e.modelValue===!1)return;const o={class:i.value,style:v.value};return f.value===!0&&Object.assign(o,a.value,{onClick:k,onKeyup:c}),fe("div",o,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[he,e.ripple]])}}}),Le=L({name:"QMenu",inheritAttrs:!1,props:{...Me,...ge,...W,...me,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:z},self:{type:String,validator:z},offset:{type:Array,validator:Ae},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...be,"click","escape-key"],setup(e,{slots:C,emit:l,attrs:s}){let r=null,v,d,g;const b=U(),{proxy:f}=b,{$q:i}=f,a=K(null),c=K(!1),k=n(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),q=N(e,i),{registerTick:y,removeTick:o}=ke(),{registerTimeout:S,removeTimeout:_}=qe(),{transition:G,transitionStyle:J}=Se(e,c),{localScrollTarget:R,changeScrollEvent:X,unconfigureScrollTarget:Y}=Qe(e,Q),{anchorEl:h,canShow:p}=He({showing:c}),{hide:w}=Ce({showing:c,canShow:p,handleShow:ae,handleHide:le,hideOnRouteChange:k,processOnMount:!0}),{showPortal:E,hidePortal:F,renderPortal:ee}=ye(b,a,ce),x={anchorEl:h,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&c.value===!0)return w(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Z(t),!0}},D=n(()=>V(e.anchor||(e.cover===!0?"center middle":"bottom start"),i.lang.rtl)),te=n(()=>e.cover===!0?D.value:V(e.self||"top start",i.lang.rtl)),oe=n(()=>(e.square===!0?" q-menu--square":"")+(q.value===!0?" q-menu--dark q-dark":"")),ne=n(()=>e.autoClose===!0?{onClick:ie}:{}),M=n(()=>c.value===!0&&e.persistent!==!0);j(M,t=>{t===!0?(xe(P),Ke(x)):(I(P),$(x))});function B(){De(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ae(t){if(o(),_(),r=e.noRefocus===!1?document.activeElement:null,Be(H),E(),Q(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const T=Pe(t);if(T.left!==void 0){const{top:ue,left:se}=h.value.getBoundingClientRect();v={left:T.left-se,top:T.top-ue}}}d===void 0&&(d=j(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,m)),e.noFocus!==!0&&document.activeElement.blur(),y(()=>{m(),e.noFocus!==!0&&B()}),S(()=>{i.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),m(),E(!0),l("show",t)},e.transitionDuration)}function le(t){o(),_(),F(),A(!0),r!==null&&(t===void 0||t.qClickOutside!==!0)&&(r.focus(),r=null),S(()=>{F(!0),l("hide",t)},e.transitionDuration)}function A(t){v=void 0,d!==void 0&&(d(),d=void 0),(t===!0||c.value===!0)&&(Te(H),Y(),$(x),I(P)),t!==!0&&(r=null)}function Q(){(h.value!==null||e.scrollTarget!==void 0)&&(R.value=Oe(h.value,e.scrollTarget),X(R.value,m))}function ie(t){g!==!0?(_e(f,t),l("click",t)):g=!1}function H(t){M.value===!0&&e.noFocus!==!0&&Re(a.value,t.target)!==!0&&B()}function P(t){l("escape-key"),w(t)}function m(){const t=a.value;t===null||h.value===null||je({el:t,offset:e.offset,anchorEl:h.value,anchorOrigin:D.value,selfOrigin:te.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ce(){return u(Ee,{name:G.value,appear:!0},()=>c.value===!0?u("div",{...s,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+oe.value,s.class],style:[s.style,J.value],...ne.value},we(C.default)):null)}return Fe(A),Object.assign(f,{focus:B,updatePosition:m}),ee}});export{Le as Q,$e as a};
