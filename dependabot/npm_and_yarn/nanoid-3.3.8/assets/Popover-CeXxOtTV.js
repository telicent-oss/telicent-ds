import{b as m,_ as V,u as ve}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as l}from"./index-BBkUAzwr.js";import{c as q,g as xe,s as ie,a as be}from"./styled-CnbWPWMk.js";import{g as ye}from"./generateUtilityClasses-BwpiFGlX.js";import{j as H}from"./jsx-runtime-BwZVo4Wn.js";import{u as $e}from"./useTheme-DwzLSGxO.js";import{o as K,T as Be,g as ce,r as _e}from"./utils-BZ12QECu.js";import{u as X,a as Ce,s as Ne,d as Me,c as Ue}from"./TransitionGroupContext-C9C3ikuq.js";import{r as Ke}from"./index-BXZwOzqJ.js";import{P as Ge}from"./Paper-Ckbq7hqr.js";function Ie(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}function Ve(e,t=166){let n;function o(...s){const r=()=>{e.apply(this,s)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function se(e){return K(e).defaultView||window}function Ye(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function je(e){return typeof e=="string"}function qe(e,t,n){return e===void 0||je(e)?t:m({},t,{ownerState:m({},t.ownerState,n)})}function We(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function Oe(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Xe(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:s,className:r}=e;if(!t){const w=q(n==null?void 0:n.className,r,s==null?void 0:s.className,o==null?void 0:o.className),f=m({},n==null?void 0:n.style,s==null?void 0:s.style,o==null?void 0:o.style),S=m({},n,s,o);return w.length>0&&(S.className=w),Object.keys(f).length>0&&(S.style=f),{props:S,internalRef:void 0}}const i=We(m({},s,o)),d=Oe(o),a=Oe(s),u=t(i),x=q(u==null?void 0:u.className,n==null?void 0:n.className,r,s==null?void 0:s.className,o==null?void 0:o.className),E=m({},u==null?void 0:u.style,n==null?void 0:n.style,s==null?void 0:s.style,o==null?void 0:o.style),C=m({},u,n,a,d);return x.length>0&&(C.className=x),Object.keys(E).length>0&&(C.style=E),{props:C,internalRef:u.ref}}function Ze(e,t,n){return typeof e=="function"?e(t,n):e}const Je=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function de(e){var t;const{elementType:n,externalSlotProps:o,ownerState:s,skipResolvingSlotProps:r=!1}=e,i=V(e,Je),d=r?{}:Ze(o,s),{props:a,internalRef:u}=Xe(m({},i,{externalSlotProps:d})),x=X(u,d==null?void 0:d.ref,(t=e.additionalProps)==null?void 0:t.ref);return qe(n,m({},a,{ref:x}),s)}function ue(e){if(parseInt(l.version,10)>=19){var t;return(e==null||(t=e.props)==null?void 0:t.ref)||null}return(e==null?void 0:e.ref)||null}function Qe(e){return typeof e=="function"?e():e}const et=l.forwardRef(function(t,n){const{children:o,container:s,disablePortal:r=!1}=t,[i,d]=l.useState(null),a=X(l.isValidElement(o)?ue(o):null,n);if(Ce(()=>{r||d(Qe(s)||document.body)},[s,r]),Ce(()=>{if(i&&!r)return Ne(n,i),()=>{Ne(n,null)}},[n,i,r]),r){if(l.isValidElement(o)){const u={ref:a};return l.cloneElement(o,u)}return H.jsx(l.Fragment,{children:o})}return H.jsx(l.Fragment,{children:i&&Ke.createPortal(o,i)})}),tt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],nt={entering:{opacity:1},entered:{opacity:1}},ot=l.forwardRef(function(t,n){const o=$e(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:d,easing:a,in:u,onEnter:x,onEntered:E,onEntering:C,onExit:w,onExited:f,onExiting:S,style:P,timeout:k=s,TransitionComponent:L=Be}=t,c=V(t,tt),v=l.useRef(null),b=X(v,ue(d),n),N=R=>p=>{if(R){const h=v.current;p===void 0?R(h):R(h,p)}},T=N(C),O=N((R,p)=>{_e(R);const h=ce({style:P,timeout:k,easing:a},{mode:"enter"});R.style.webkitTransition=o.transitions.create("opacity",h),R.style.transition=o.transitions.create("opacity",h),x&&x(R,p)}),$=N(E),A=N(S),j=N(R=>{const p=ce({style:P,timeout:k,easing:a},{mode:"exit"});R.style.webkitTransition=o.transitions.create("opacity",p),R.style.transition=o.transitions.create("opacity",p),w&&w(R)}),I=N(f),D=R=>{r&&r(v.current,R)};return H.jsx(L,m({appear:i,in:u,nodeRef:v,onEnter:O,onEntered:$,onEntering:T,onExit:j,onExited:I,onExiting:A,addEndListener:D,timeout:k},c,{children:(R,p)=>l.cloneElement(d,m({style:m({opacity:0,visibility:R==="exited"&&!u?"hidden":void 0},nt[R],P,d.props.style),ref:b},p))}))});function rt(e){return xe("MuiBackdrop",e)}ye("MuiBackdrop",["root","invisible"]);const st=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],it=e=>{const{classes:t,invisible:n}=e;return be({root:["root",n&&"invisible"]},rt,t)},lt=ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>m({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),at=l.forwardRef(function(t,n){var o,s,r;const i=ve({props:t,name:"MuiBackdrop"}),{children:d,className:a,component:u="div",components:x={},componentsProps:E={},invisible:C=!1,open:w,slotProps:f={},slots:S={},TransitionComponent:P=ot,transitionDuration:k}=i,L=V(i,st),c=m({},i,{component:u,invisible:C}),v=it(c),b=(o=f.root)!=null?o:E.root;return H.jsx(P,m({in:w,timeout:k},L,{children:H.jsx(lt,m({"aria-hidden":!0},b,{as:(s=(r=S.root)!=null?r:x.Root)!=null?s:u,className:q(v.root,a,b==null?void 0:b.className),ownerState:m({},c,b==null?void 0:b.ownerState),classes:v,ref:n,children:d}))}))});function ct(e){const t=K(e);return t.body===e?se(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function re(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ae(e){return parseInt(se(e).getComputedStyle(e).paddingRight,10)||0}function dt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function Fe(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const d=r.indexOf(i)===-1,a=!dt(i);d&&a&&re(i,s)})}function he(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function ut(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(ct(o)){const i=Ye(K(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ae(o)+i}px`;const d=K(o).querySelectorAll(".mui-fixed");[].forEach.call(d,a=>{n.push({value:a.style.paddingRight,property:"padding-right",el:a}),a.style.paddingRight=`${Ae(a)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=K(o).body;else{const i=o.parentElement,d=se(o);r=(i==null?void 0:i.nodeName)==="HTML"&&d.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:d})=>{r?i.style.setProperty(d,r):i.style.removeProperty(d)})}}function ft(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class pt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&re(t.modalRef,!1);const s=ft(n);Fe(n,t.mount,t.modalRef,s,!0);const r=he(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=he(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=ut(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=he(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&re(t.modalRef,n),Fe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&re(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const ht=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function mt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function gt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||gt(e))}function vt(e){const t=[],n=[];return Array.from(e.querySelectorAll(ht)).forEach((o,s)=>{const r=mt(o);r===-1||!Et(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function xt(){return!0}function bt(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=vt,isEnabled:i=xt,open:d}=e,a=l.useRef(!1),u=l.useRef(null),x=l.useRef(null),E=l.useRef(null),C=l.useRef(null),w=l.useRef(!1),f=l.useRef(null),S=X(ue(t),f),P=l.useRef(null);l.useEffect(()=>{!d||!f.current||(w.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!f.current)return;const c=K(f.current);return f.current.contains(c.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),w.current&&f.current.focus()),()=>{s||(E.current&&E.current.focus&&(a.current=!0,E.current.focus()),E.current=null)}},[d]),l.useEffect(()=>{if(!d||!f.current)return;const c=K(f.current),v=T=>{P.current=T,!(o||!i()||T.key!=="Tab")&&c.activeElement===f.current&&T.shiftKey&&(a.current=!0,x.current&&x.current.focus())},b=()=>{const T=f.current;if(T===null)return;if(!c.hasFocus()||!i()||a.current){a.current=!1;return}if(T.contains(c.activeElement)||o&&c.activeElement!==u.current&&c.activeElement!==x.current)return;if(c.activeElement!==C.current)C.current=null;else if(C.current!==null)return;if(!w.current)return;let O=[];if((c.activeElement===u.current||c.activeElement===x.current)&&(O=r(f.current)),O.length>0){var $,A;const j=!!(($=P.current)!=null&&$.shiftKey&&((A=P.current)==null?void 0:A.key)==="Tab"),I=O[0],D=O[O.length-1];typeof I!="string"&&typeof D!="string"&&(j?D.focus():I.focus())}else T.focus()};c.addEventListener("focusin",b),c.addEventListener("keydown",v,!0);const N=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(N),c.removeEventListener("focusin",b),c.removeEventListener("keydown",v,!0)}},[n,o,s,i,d,r]);const k=c=>{E.current===null&&(E.current=c.relatedTarget),w.current=!0,C.current=c.target;const v=t.props.onFocus;v&&v(c)},L=c=>{E.current===null&&(E.current=c.relatedTarget),w.current=!0};return H.jsxs(l.Fragment,{children:[H.jsx("div",{tabIndex:d?0:-1,onFocus:L,ref:u,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:S,onFocus:k}),H.jsx("div",{tabIndex:d?0:-1,onFocus:L,ref:x,"data-testid":"sentinelEnd"})]})}function yt(e){return typeof e=="function"?e():e}function Pt(e){return e?e.props.hasOwnProperty("in"):!1}const Rt=new pt;function Tt(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:s=Rt,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:d,children:a,onClose:u,open:x,rootRef:E}=e,C=l.useRef({}),w=l.useRef(null),f=l.useRef(null),S=X(f,E),[P,k]=l.useState(!x),L=Pt(a);let c=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(c=!1);const v=()=>K(w.current),b=()=>(C.current.modalRef=f.current,C.current.mount=w.current,C.current),N=()=>{s.mount(b(),{disableScrollLock:o}),f.current&&(f.current.scrollTop=0)},T=Me(()=>{const h=yt(t)||v().body;s.add(b(),h),f.current&&N()}),O=l.useCallback(()=>s.isTopModal(b()),[s]),$=Me(h=>{w.current=h,h&&(x&&O()?N():f.current&&re(f.current,c))}),A=l.useCallback(()=>{s.remove(b(),c)},[c,s]);l.useEffect(()=>()=>{A()},[A]),l.useEffect(()=>{x?T():(!L||!r)&&A()},[x,A,L,r,T]);const j=h=>g=>{var F;(F=h.onKeyDown)==null||F.call(h,g),!(g.key!=="Escape"||g.which===229||!O())&&(n||(g.stopPropagation(),u&&u(g,"escapeKeyDown")))},I=h=>g=>{var F;(F=h.onClick)==null||F.call(h,g),g.target===g.currentTarget&&u&&u(g,"backdropClick")};return{getRootProps:(h={})=>{const g=We(e);delete g.onTransitionEnter,delete g.onTransitionExited;const F=m({},g,h);return m({role:"presentation"},F,{onKeyDown:j(F),ref:S})},getBackdropProps:(h={})=>{const g=h;return m({"aria-hidden":!0},g,{onClick:I(g),open:x})},getTransitionProps:()=>{const h=()=>{k(!1),i&&i()},g=()=>{k(!0),d&&d(),r&&A()};return{onEnter:Ie(h,a==null?void 0:a.props.onEnter),onExited:Ie(g,a==null?void 0:a.props.onExited)}},rootRef:S,portalRef:$,isTopModal:O,exited:P,hasTransition:L}}function St(e){return xe("MuiModal",e)}ye("MuiModal",["root","hidden","backdrop"]);const kt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],wt=e=>{const{open:t,exited:n,classes:o}=e;return be({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},St,o)},Ct=ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>m({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Nt=ie(at,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Mt=l.forwardRef(function(t,n){var o,s,r,i,d,a;const u=ve({name:"MuiModal",props:t}),{BackdropComponent:x=Nt,BackdropProps:E,className:C,closeAfterTransition:w=!1,children:f,container:S,component:P,components:k={},componentsProps:L={},disableAutoFocus:c=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:b=!1,disablePortal:N=!1,disableRestoreFocus:T=!1,disableScrollLock:O=!1,hideBackdrop:$=!1,keepMounted:A=!1,onBackdropClick:j,open:I,slotProps:D,slots:R}=u,p=V(u,kt),h=m({},u,{closeAfterTransition:w,disableAutoFocus:c,disableEnforceFocus:v,disableEscapeKeyDown:b,disablePortal:N,disableRestoreFocus:T,disableScrollLock:O,hideBackdrop:$,keepMounted:A}),{getRootProps:g,getBackdropProps:F,getTransitionProps:B,portalRef:U,isTopModal:le,exited:W,hasTransition:ae}=Tt(m({},h,{rootRef:n})),Y=m({},h,{exited:W}),G=wt(Y),Z={};if(f.props.tabIndex===void 0&&(Z.tabIndex="-1"),ae){const{onEnter:y,onExited:M}=B();Z.onEnter=y,Z.onExited=M}const J=(o=(s=R==null?void 0:R.root)!=null?s:k.Root)!=null?o:Ct,ne=(r=(i=R==null?void 0:R.backdrop)!=null?i:k.Backdrop)!=null?r:x,oe=(d=D==null?void 0:D.root)!=null?d:L.root,Q=(a=D==null?void 0:D.backdrop)!=null?a:L.backdrop,fe=de({elementType:J,externalSlotProps:oe,externalForwardedProps:p,getSlotProps:g,additionalProps:{ref:n,as:P},ownerState:Y,className:q(C,oe==null?void 0:oe.className,G==null?void 0:G.root,!Y.open&&Y.exited&&(G==null?void 0:G.hidden))}),pe=de({elementType:ne,externalSlotProps:Q,additionalProps:E,getSlotProps:y=>F(m({},y,{onClick:M=>{j&&j(M),y!=null&&y.onClick&&y.onClick(M)}})),className:q(Q==null?void 0:Q.className,E==null?void 0:E.className,G==null?void 0:G.backdrop),ownerState:Y});return!A&&!I&&(!ae||W)?null:H.jsx(et,{ref:U,container:S,disablePortal:N,children:H.jsxs(J,m({},fe,{children:[!$&&x?H.jsx(ne,m({},pe)):null,H.jsx(bt,{disableEnforceFocus:v,disableAutoFocus:c,disableRestoreFocus:T,isEnabled:le,open:I,children:l.cloneElement(f,Z)})]}))})}),It=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ee(e){return`scale(${e}, ${e**2})`}const Ot={entering:{opacity:1,transform:Ee(1)},entered:{opacity:1,transform:"none"}},me=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ze=l.forwardRef(function(t,n){const{addEndListener:o,appear:s=!0,children:r,easing:i,in:d,onEnter:a,onEntered:u,onEntering:x,onExit:E,onExited:C,onExiting:w,style:f,timeout:S="auto",TransitionComponent:P=Be}=t,k=V(t,It),L=Ue(),c=l.useRef(),v=$e(),b=l.useRef(null),N=X(b,ue(r),n),T=p=>h=>{if(p){const g=b.current;h===void 0?p(g):p(g,h)}},O=T(x),$=T((p,h)=>{_e(p);const{duration:g,delay:F,easing:B}=ce({style:f,timeout:S,easing:i},{mode:"enter"});let U;S==="auto"?(U=v.transitions.getAutoHeightDuration(p.clientHeight),c.current=U):U=g,p.style.transition=[v.transitions.create("opacity",{duration:U,delay:F}),v.transitions.create("transform",{duration:me?U:U*.666,delay:F,easing:B})].join(","),a&&a(p,h)}),A=T(u),j=T(w),I=T(p=>{const{duration:h,delay:g,easing:F}=ce({style:f,timeout:S,easing:i},{mode:"exit"});let B;S==="auto"?(B=v.transitions.getAutoHeightDuration(p.clientHeight),c.current=B):B=h,p.style.transition=[v.transitions.create("opacity",{duration:B,delay:g}),v.transitions.create("transform",{duration:me?B:B*.666,delay:me?g:g||B*.333,easing:F})].join(","),p.style.opacity=0,p.style.transform=Ee(.75),E&&E(p)}),D=T(C),R=p=>{S==="auto"&&L.start(c.current||0,p),o&&o(b.current,p)};return H.jsx(P,m({appear:s,in:d,nodeRef:b,onEnter:$,onEntered:A,onEntering:O,onExit:I,onExited:D,onExiting:j,addEndListener:R,timeout:S==="auto"?null:S},k,{children:(p,h)=>l.cloneElement(r,m({style:m({opacity:0,transform:Ee(.75),visibility:p==="exited"&&!d?"hidden":void 0},Ot[p],f,r.props.style),ref:N},h))}))});ze.muiSupportAuto=!0;function At(e){return xe("MuiPopover",e)}ye("MuiPopover",["root","paper"]);const Ft=["onEntering"],Lt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Dt=["slotProps"];function Le(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function De(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function He(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ge(e){return typeof e=="function"?e():e}const Ht=e=>{const{classes:t}=e;return be({root:["root"],paper:["paper"]},At,t)},$t=ie(Mt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Bt=ie(Ge,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Xt=l.forwardRef(function(t,n){var o,s,r;const i=ve({props:t,name:"MuiPopover"}),{action:d,anchorEl:a,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:E="anchorEl",children:C,className:w,container:f,elevation:S=8,marginThreshold:P=16,open:k,PaperProps:L={},slots:c,slotProps:v,transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:N=ze,transitionDuration:T="auto",TransitionProps:{onEntering:O}={},disableScrollLock:$=!1}=i,A=V(i.TransitionProps,Ft),j=V(i,Lt),I=(o=v==null?void 0:v.paper)!=null?o:L,D=l.useRef(),R=X(D,I.ref),p=m({},i,{anchorOrigin:u,anchorReference:E,elevation:S,marginThreshold:P,externalPaperSlotProps:I,transformOrigin:b,TransitionComponent:N,transitionDuration:T,TransitionProps:A}),h=Ht(p),g=l.useCallback(()=>{if(E==="anchorPosition")return x;const y=ge(a),_=(y&&y.nodeType===1?y:K(D.current).body).getBoundingClientRect();return{top:_.top+Le(_,u.vertical),left:_.left+De(_,u.horizontal)}},[a,u.horizontal,u.vertical,x,E]),F=l.useCallback(y=>({vertical:Le(y,b.vertical),horizontal:De(y,b.horizontal)}),[b.horizontal,b.vertical]),B=l.useCallback(y=>{const M={width:y.offsetWidth,height:y.offsetHeight},_=F(M);if(E==="none")return{top:null,left:null,transformOrigin:He(_)};const Pe=g();let ee=Pe.top-_.vertical,te=Pe.left-_.horizontal;const Re=ee+M.height,Te=te+M.width,Se=se(ge(a)),ke=Se.innerHeight-P,we=Se.innerWidth-P;if(P!==null&&ee<P){const z=ee-P;ee-=z,_.vertical+=z}else if(P!==null&&Re>ke){const z=Re-ke;ee-=z,_.vertical+=z}if(P!==null&&te<P){const z=te-P;te-=z,_.horizontal+=z}else if(Te>we){const z=Te-we;te-=z,_.horizontal+=z}return{top:`${Math.round(ee)}px`,left:`${Math.round(te)}px`,transformOrigin:He(_)}},[a,E,g,F,P]),[U,le]=l.useState(k),W=l.useCallback(()=>{const y=D.current;if(!y)return;const M=B(y);M.top!==null&&(y.style.top=M.top),M.left!==null&&(y.style.left=M.left),y.style.transformOrigin=M.transformOrigin,le(!0)},[B]);l.useEffect(()=>($&&window.addEventListener("scroll",W),()=>window.removeEventListener("scroll",W)),[a,$,W]);const ae=(y,M)=>{O&&O(y,M),W()},Y=()=>{le(!1)};l.useEffect(()=>{k&&W()}),l.useImperativeHandle(d,()=>k?{updatePosition:()=>{W()}}:null,[k,W]),l.useEffect(()=>{if(!k)return;const y=Ve(()=>{W()}),M=se(a);return M.addEventListener("resize",y),()=>{y.clear(),M.removeEventListener("resize",y)}},[a,k,W]);let G=T;T==="auto"&&!N.muiSupportAuto&&(G=void 0);const Z=f||(a?K(ge(a)).body:void 0),J=(s=c==null?void 0:c.root)!=null?s:$t,ne=(r=c==null?void 0:c.paper)!=null?r:Bt,oe=de({elementType:ne,externalSlotProps:m({},I,{style:U?I.style:m({},I.style,{opacity:0})}),additionalProps:{elevation:S,ref:R},ownerState:p,className:q(h.paper,I==null?void 0:I.className)}),Q=de({elementType:J,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:j,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Z,open:k},ownerState:p,className:q(h.root,w)}),{slotProps:fe}=Q,pe=V(Q,Dt);return H.jsx(J,m({},pe,!je(J)&&{slotProps:fe,disableScrollLock:$},{children:H.jsx(N,m({appear:!0,in:k,onEntering:ae,onExited:Y,timeout:G},A,{children:H.jsx(ne,m({},oe,{children:C}))}))}))});export{ze as G,Mt as M,Xt as P,Bt as a,qe as b,et as c,Ve as d,ue as e,Ye as g,je as i,Xe as m,se as o,Ze as r,de as u};
