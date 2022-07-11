import{cs as D,cG as v,cm as M,cH as X,cD as h,cI as y,cC as q,cJ as C,ce as E,cE as b,bZ as Y}from"./index.5ac7495d.js";import{g as w,s as _}from"./touch.d8ab472d.js";import{c as F}from"./selection.e70f58a4.js";function g(a,i,o){const l=E(a);let e,t=l.left-i.event.x,n=l.top-i.event.y,u=Math.abs(t),s=Math.abs(n);const r=i.direction;r.horizontal===!0&&r.vertical!==!0?e=t<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?e=n<0?"up":"down":r.up===!0&&n<0?(e="up",u>s&&(r.left===!0&&t<0?e="left":r.right===!0&&t>0&&(e="right"))):r.down===!0&&n>0?(e="down",u>s&&(r.left===!0&&t<0?e="left":r.right===!0&&t>0&&(e="right"))):r.left===!0&&t<0?(e="left",u<s&&(r.up===!0&&n<0?e="up":r.down===!0&&n>0&&(e="down"))):r.right===!0&&t>0&&(e="right",u<s&&(r.up===!0&&n<0?e="up":r.down===!0&&n>0&&(e="down")));let p=!1;if(e===void 0&&o===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,p=!0,e==="left"||e==="right"?(l.left-=t,u=0,t=0):(l.top-=n,s=0,n=0)}return{synthetic:p,payload:{evt:a,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:l,direction:e,isFirst:i.event.isFirst,isFinal:o===!0,duration:Date.now()-i.event.time,distance:{x:u,y:s},offset:{x:t,y:n},delta:{x:l.left-i.event.lastX,y:l.top-i.event.lastY}}}}let P=0;var L=D({name:"touch-pan",beforeMount(a,{value:i,modifiers:o}){if(o.mouse!==!0&&v.has.touch!==!0)return;function l(t,n){o.mouse===!0&&n===!0?Y(t):(o.stop===!0&&C(t),o.prevent===!0&&q(t))}const e={uid:"qvtp_"+P++,handler:i,modifiers:o,direction:w(o),noop:M,mouseStart(t){_(t,e)&&X(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(_(t,e)){const n=t.target;h(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,n){if(v.is.firefox===!0&&y(a,!0),e.lastEvt=t,n===!0||o.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0)){const r=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&q(r),t.cancelBubble===!0&&C(r),Object.assign(r,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:r}}C(t)}const{left:u,top:s}=E(t);e.event={x:u,y:s,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:u,lastY:s}},move(t){if(e.event===void 0)return;const n=E(t),u=n.left-e.event.x,s=n.top-e.event.y;if(u===0&&s===0)return;e.lastEvt=t;const r=e.event.mouse===!0,p=()=>{l(t,r),o.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),F(),e.styleCleanup=d=>{if(e.styleCleanup=void 0,o.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),r===!0){const m=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{m(),d()},50):m()}else d!==void 0&&d()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(t,e.event.mouse);const{payload:d,synthetic:m}=g(t,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=m===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||r===!0&&e.modifiers.mouseAllDir===!0){p(),e.event.detected=!0,e.move(t);return}const c=Math.abs(u),f=Math.abs(s);c!==f&&(e.direction.horizontal===!0&&c>f||e.direction.vertical===!0&&c<f||e.direction.up===!0&&c<f&&s<0||e.direction.down===!0&&c<f&&s>0||e.direction.left===!0&&c>f&&u<0||e.direction.right===!0&&c>f&&u>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,n){if(e.event!==void 0){if(b(e,"temp"),v.is.firefox===!0&&y(a,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(g(t===void 0?e.lastEvt:t,e).payload);const{payload:u}=g(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(u)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};a.__qtouchpan=e,o.mouse===!0&&h(e,"main",[[a,"mousedown","mouseStart",`passive${o.mouseCapture===!0?"Capture":""}`]]),v.has.touch===!0&&h(e,"main",[[a,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,i){const o=a.__qtouchpan;o!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&o.end(),o.handler=i.value),o.direction=w(i.modifiers))},beforeUnmount(a){const i=a.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),b(i,"main"),b(i,"temp"),v.is.firefox===!0&&y(a,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete a.__qtouchpan)}});export{L as T};
