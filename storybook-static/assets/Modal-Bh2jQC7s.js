import{_ as V}from"./createTheme-CnHyYZiq.js";import{_ as v}from"./extends-CCbyfPlC.js";import{r as d}from"./index-BwDkhjyp.js";import{g as ce,s as X,a as de,c as G,b as ue}from"./styled-jK8V3O51.js";import{g as fe}from"./generateUtilityClasses-BGohe2Km.js";import{j as B}from"./jsx-runtime-Nms4Y4qS.js";import{u as Ee}from"./useTheme-DGd8psJl.js";import{T as xe,r as ve,g as oe}from"./utils-DOhIVSbh.js";import{u as J}from"./useForkRef-UxOPvILp.js";import{g as ye}from"./getScrollbarSize-Bqq2hMjQ.js";import{o as _,u as re}from"./useSlotProps-CIvTNmGa.js";import{o as Q}from"./ownerWindow-COOHErMu.js";import{b as se}from"./TransitionGroupContext-Dii4aaAC.js";import{e as Re}from"./mergeSlotProps-BTNqYSHa.js";import{P as Te}from"./Grow-CFEed8lE.js";function ie(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}const ke=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ce(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Se(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ce(e))}function Ie(e){const t=[],o=[];return Array.from(e.querySelectorAll(ke)).forEach((n,s)=>{const r=Pe(n);r===-1||!Se(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ne(){return!0}function Me(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Ie,isEnabled:i=Ne,open:l}=e,u=d.useRef(!1),b=d.useRef(null),h=d.useRef(null),g=d.useRef(null),T=d.useRef(null),y=d.useRef(!1),c=d.useRef(null),w=J(t.ref,c),P=d.useRef(null);d.useEffect(()=>{!l||!c.current||(y.current=!o)},[o,l]),d.useEffect(()=>{if(!l||!c.current)return;const a=_(c.current);return c.current.contains(a.activeElement)||(c.current.hasAttribute("tabIndex")||c.current.setAttribute("tabIndex","-1"),y.current&&c.current.focus()),()=>{s||(g.current&&g.current.focus&&(u.current=!0,g.current.focus()),g.current=null)}},[l]),d.useEffect(()=>{if(!l||!c.current)return;const a=_(c.current),E=R=>{P.current=R,!(n||!i()||R.key!=="Tab")&&a.activeElement===c.current&&R.shiftKey&&(u.current=!0,h.current&&h.current.focus())},x=()=>{const R=c.current;if(R===null)return;if(!a.hasFocus()||!i()||u.current){u.current=!1;return}if(R.contains(a.activeElement)||n&&a.activeElement!==b.current&&a.activeElement!==h.current)return;if(a.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!y.current)return;let I=[];if((a.activeElement===b.current||a.activeElement===h.current)&&(I=r(c.current)),I.length>0){var O,N;const D=!!((O=P.current)!=null&&O.shiftKey&&((N=P.current)==null?void 0:N.key)==="Tab"),L=I[0],F=I[I.length-1];typeof L!="string"&&typeof F!="string"&&(D?F.focus():L.focus())}else R.focus()};a.addEventListener("focusin",x),a.addEventListener("keydown",E,!0);const k=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&x()},50);return()=>{clearInterval(k),a.removeEventListener("focusin",x),a.removeEventListener("keydown",E,!0)}},[o,n,s,i,l,r]);const C=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0,T.current=a.target;const E=t.props.onFocus;E&&E(a)},S=a=>{g.current===null&&(g.current=a.relatedTarget),y.current=!0};return B.jsxs(d.Fragment,{children:[B.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:b,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:w,onFocus:C}),B.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:h,"data-testid":"sentinelEnd"})]})}function we(e){const t=_(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ae(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function Fe(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function le(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,u=!Fe(i);l&&u&&U(i,s)})}function q(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ae(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(we(n)){const i=ye(_(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ae(n)+i}px`;const l=_(n).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ae(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=_(n).body;else{const i=n.parentElement,l=Q(n);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function Be(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Oe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const s=Be(o);le(o,t.mount,t.modalRef,s,!0);const r=q(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=q(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ae(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=q(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,o),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Le(e){return typeof e=="function"?e():e}function De(e){return e?e.props.hasOwnProperty("in"):!1}const _e=new Oe;function je(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=_e,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:l,children:u,onClose:b,open:h,rootRef:g}=e,T=d.useRef({}),y=d.useRef(null),c=d.useRef(null),w=J(c,g),[P,C]=d.useState(!h),S=De(u);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const E=()=>_(y.current),x=()=>(T.current.modalRef=c.current,T.current.mount=y.current,T.current),k=()=>{s.mount(x(),{disableScrollLock:n}),c.current&&(c.current.scrollTop=0)},R=se(()=>{const f=Le(t)||E().body;s.add(x(),f),c.current&&k()}),I=d.useCallback(()=>s.isTopModal(x()),[s]),O=se(f=>{y.current=f,f&&(h&&I()?k():c.current&&U(c.current,a))}),N=d.useCallback(()=>{s.remove(x(),a)},[a,s]);d.useEffect(()=>()=>{N()},[N]),d.useEffect(()=>{h?R():(!S||!r)&&N()},[h,N,S,r,R]);const D=f=>m=>{var A;(A=f.onKeyDown)==null||A.call(f,m),!(m.key!=="Escape"||m.which===229||!I())&&(o||(m.stopPropagation(),b&&b(m,"escapeKeyDown")))},L=f=>m=>{var A;(A=f.onClick)==null||A.call(f,m),m.target===m.currentTarget&&b&&b(m,"backdropClick")};return{getRootProps:(f={})=>{const m=Re(e);delete m.onTransitionEnter,delete m.onTransitionExited;const A=v({},m,f);return v({role:"presentation"},A,{onKeyDown:D(A),ref:w})},getBackdropProps:(f={})=>{const m=f;return v({"aria-hidden":!0},m,{onClick:L(m),open:h})},getTransitionProps:()=>{const f=()=>{C(!1),i&&i()},m=()=>{C(!0),l&&l(),r&&N()};return{onEnter:ie(f,u==null?void 0:u.props.onEnter),onExited:ie(m,u==null?void 0:u.props.onExited)}},rootRef:w,portalRef:O,isTopModal:I,exited:P,hasTransition:S}}const He=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],$e={entering:{opacity:1},entered:{opacity:1}},Ue=d.forwardRef(function(t,o){const n=Ee(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:l,easing:u,in:b,onEnter:h,onEntered:g,onEntering:T,onExit:y,onExited:c,onExiting:w,style:P,timeout:C=s,TransitionComponent:S=xe}=t,a=V(t,He),E=d.useRef(null),x=J(E,l.ref,o),k=p=>M=>{if(p){const f=E.current;M===void 0?p(f):p(f,M)}},R=k(T),I=k((p,M)=>{ve(p);const f=oe({style:P,timeout:C,easing:u},{mode:"enter"});p.style.webkitTransition=n.transitions.create("opacity",f),p.style.transition=n.transitions.create("opacity",f),h&&h(p,M)}),O=k(g),N=k(w),D=k(p=>{const M=oe({style:P,timeout:C,easing:u},{mode:"exit"});p.style.webkitTransition=n.transitions.create("opacity",M),p.style.transition=n.transitions.create("opacity",M),y&&y(p)}),L=k(c),F=p=>{r&&r(E.current,p)};return B.jsx(S,v({appear:i,in:b,nodeRef:E,onEnter:I,onEntered:O,onEntering:R,onExit:D,onExited:L,onExiting:N,addEndListener:F,timeout:C},a,{children:(p,M)=>d.cloneElement(l,v({style:v({opacity:0,visibility:p==="exited"&&!b?"hidden":void 0},$e[p],P,l.props.style),ref:x},M))}))});function Ke(e){return ce("MuiBackdrop",e)}fe("MuiBackdrop",["root","invisible"]);const We=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ze=e=>{const{classes:t,invisible:o}=e;return ue({root:["root",o&&"invisible"]},Ke,t)},Ye=X("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),qe=d.forwardRef(function(t,o){var n,s,r;const i=de({props:t,name:"MuiBackdrop"}),{children:l,className:u,component:b="div",components:h={},componentsProps:g={},invisible:T=!1,open:y,slotProps:c={},slots:w={},TransitionComponent:P=Ue,transitionDuration:C}=i,S=V(i,We),a=v({},i,{component:b,invisible:T}),E=ze(a),x=(n=c.root)!=null?n:g.root;return B.jsx(P,v({in:y,timeout:C},S,{children:B.jsx(Ye,v({"aria-hidden":!0},x,{as:(s=(r=w.root)!=null?r:h.Root)!=null?s:b,className:G(E.root,u,x==null?void 0:x.className),ownerState:v({},a,x==null?void 0:x.ownerState),classes:E,ref:o,children:l}))}))});function Ge(e){return ce("MuiModal",e)}fe("MuiModal",["root","hidden","backdrop"]);const Ve=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Xe=e=>{const{open:t,exited:o,classes:n}=e;return ue({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ge,n)},Je=X("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Qe=X(qe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),mt=d.forwardRef(function(t,o){var n,s,r,i,l,u;const b=de({name:"MuiModal",props:t}),{BackdropComponent:h=Qe,BackdropProps:g,className:T,closeAfterTransition:y=!1,children:c,container:w,component:P,components:C={},componentsProps:S={},disableAutoFocus:a=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:x=!1,disablePortal:k=!1,disableRestoreFocus:R=!1,disableScrollLock:I=!1,hideBackdrop:O=!1,keepMounted:N=!1,onBackdropClick:D,open:L,slotProps:F,slots:p}=b,M=V(b,Ve),f=v({},b,{closeAfterTransition:y,disableAutoFocus:a,disableEnforceFocus:E,disableEscapeKeyDown:x,disablePortal:k,disableRestoreFocus:R,disableScrollLock:I,hideBackdrop:O,keepMounted:N}),{getRootProps:m,getBackdropProps:A,getTransitionProps:pe,portalRef:me,isTopModal:he,exited:Z,hasTransition:ee}=je(v({},f,{rootRef:o})),$=v({},f,{exited:Z}),j=Xe($),K={};if(c.props.tabIndex===void 0&&(K.tabIndex="-1"),ee){const{onEnter:H,onExited:W}=pe();K.onEnter=H,K.onExited=W}const te=(n=(s=p==null?void 0:p.root)!=null?s:C.Root)!=null?n:Je,ne=(r=(i=p==null?void 0:p.backdrop)!=null?i:C.Backdrop)!=null?r:h,z=(l=F==null?void 0:F.root)!=null?l:S.root,Y=(u=F==null?void 0:F.backdrop)!=null?u:S.backdrop,be=re({elementType:te,externalSlotProps:z,externalForwardedProps:M,getSlotProps:m,additionalProps:{ref:o,as:P},ownerState:$,className:G(T,z==null?void 0:z.className,j==null?void 0:j.root,!$.open&&$.exited&&(j==null?void 0:j.hidden))}),ge=re({elementType:ne,externalSlotProps:Y,additionalProps:g,getSlotProps:H=>A(v({},H,{onClick:W=>{D&&D(W),H!=null&&H.onClick&&H.onClick(W)}})),className:G(Y==null?void 0:Y.className,g==null?void 0:g.className,j==null?void 0:j.backdrop),ownerState:$});return!N&&!L&&(!ee||Z)?null:B.jsx(Te,{ref:me,container:w,disablePortal:k,children:B.jsxs(te,v({},be,{children:[!O&&h?B.jsx(ne,v({},ge)):null,B.jsx(Me,{disableEnforceFocus:E,disableAutoFocus:a,disableRestoreFocus:R,isEnabled:he,open:L,children:d.cloneElement(c,K)})]}))})});export{qe as B,Ue as F,mt as M};
