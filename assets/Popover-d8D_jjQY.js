import{_ as V,b as x,u as Ee}from"./DefaultPropsProvider-wYCywQOd.js";import{r as a}from"./index-uubelm5h.js";import{g as xe,s as ie,c as re,a as ve}from"./styled-ChcWa6mF.js";import{g as be}from"./generateUtilityClasses-pp8e96Oj.js";import{j as $}from"./jsx-runtime-QvZ8i92b.js";import{o as K,T as De,r as $e,g as ce}from"./utils-BliZeF-y.js";import{u as q,a as Ce,s as we,d as Ne,c as He}from"./TransitionGroupContext-DFEdpA_P.js";import{r as je,m as ze,a as We,e as Ue,i as Ke}from"./resolveComponentProps-C3Ck13wz.js";import{u as Be}from"./useTheme-CY03VFFQ.js";import{r as Ge}from"./index-C5xsJX-I.js";import{P as Ve}from"./Paper-oIsZ1tmm.js";function Me(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Ye(e,t=166){let o;function n(...s){const r=()=>{e.apply(this,s)};clearTimeout(o),o=setTimeout(r,t)}return n.clear=()=>{clearTimeout(o)},n}function se(e){return K(e).defaultView||window}function qe(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Xe=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function de(e){var t;const{elementType:o,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:r=!1}=e,i=V(e,Xe),d=r?{}:je(n,s),{props:c,internalRef:m}=ze(x({},i,{externalSlotProps:d})),T=q(m,d==null?void 0:d.ref,(t=e.additionalProps)==null?void 0:t.ref);return We(o,x({},c,{ref:T}),s)}function Je(e){return typeof e=="function"?e():e}const Qe=a.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,d]=a.useState(null),c=q(a.isValidElement(n)?n.ref:null,o);if(Ce(()=>{r||d(Je(s)||document.body)},[s,r]),Ce(()=>{if(i&&!r)return we(o,i),()=>{we(o,null)}},[o,i,r]),r){if(a.isValidElement(n)){const m={ref:c};return a.cloneElement(n,m)}return $.jsx(a.Fragment,{children:n})}return $.jsx(a.Fragment,{children:i&&Ge.createPortal(n,i)})}),Ze=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],et={entering:{opacity:1},entered:{opacity:1}},tt=a.forwardRef(function(t,o){const n=Be(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:d,easing:c,in:m,onEnter:T,onEntered:v,onEntering:I,onExit:C,onExited:p,onExiting:S,style:P,timeout:k=s,TransitionComponent:L=De}=t,l=V(t,Ze),g=a.useRef(null),E=q(g,d.ref,o),w=y=>u=>{if(y){const f=g.current;u===void 0?y(f):y(f,u)}},R=w(I),O=w((y,u)=>{$e(y);const f=ce({style:P,timeout:k,easing:c},{mode:"enter"});y.style.webkitTransition=n.transitions.create("opacity",f),y.style.transition=n.transitions.create("opacity",f),T&&T(y,u)}),B=w(v),A=w(S),j=w(y=>{const u=ce({style:P,timeout:k,easing:c},{mode:"exit"});y.style.webkitTransition=n.transitions.create("opacity",u),y.style.transition=n.transitions.create("opacity",u),C&&C(y)}),M=w(p),D=y=>{r&&r(g.current,y)};return $.jsx(L,x({appear:i,in:m,nodeRef:g,onEnter:O,onEntered:B,onEntering:R,onExit:j,onExited:M,onExiting:A,addEndListener:D,timeout:k},l,{children:(y,u)=>a.cloneElement(d,x({style:x({opacity:0,visibility:y==="exited"&&!m?"hidden":void 0},et[y],P,d.props.style),ref:E},u))}))});function nt(e){return xe("MuiBackdrop",e)}be("MuiBackdrop",["root","invisible"]);const ot=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],rt=e=>{const{classes:t,invisible:o}=e;return ve({root:["root",o&&"invisible"]},nt,t)},st=ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>x({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),it=a.forwardRef(function(t,o){var n,s,r;const i=Ee({props:t,name:"MuiBackdrop"}),{children:d,className:c,component:m="div",components:T={},componentsProps:v={},invisible:I=!1,open:C,slotProps:p={},slots:S={},TransitionComponent:P=tt,transitionDuration:k}=i,L=V(i,ot),l=x({},i,{component:m,invisible:I}),g=rt(l),E=(n=p.root)!=null?n:v.root;return $.jsx(P,x({in:C,timeout:k},L,{children:$.jsx(st,x({"aria-hidden":!0},E,{as:(s=(r=S.root)!=null?r:T.Root)!=null?s:m,className:re(g.root,c,E==null?void 0:E.className),ownerState:x({},l,E==null?void 0:E.ownerState),classes:g,ref:o,children:d}))}))});function at(e){const t=K(e);return t.body===e?se(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function oe(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ie(e){return parseInt(se(e).getComputedStyle(e).paddingRight,10)||0}function lt(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function Oe(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const d=r.indexOf(i)===-1,c=!lt(i);d&&c&&oe(i,s)})}function pe(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function ct(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(at(n)){const i=qe(K(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${Ie(n)+i}px`;const d=K(n).querySelectorAll(".mui-fixed");[].forEach.call(d,c=>{o.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Ie(c)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=K(n).body;else{const i=n.parentElement,d=se(n);r=(i==null?void 0:i.nodeName)==="HTML"&&d.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:d})=>{r?i.style.setProperty(d,r):i.style.removeProperty(d)})}}function dt(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class ut{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&oe(t.modalRef,!1);const s=dt(o);Oe(o,t.mount,t.modalRef,s,!0);const r=pe(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=pe(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=ct(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=pe(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&oe(t.modalRef,o),Oe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&oe(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const ft=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function pt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ht(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function mt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ht(e))}function gt(e){const t=[],o=[];return Array.from(e.querySelectorAll(ft)).forEach((n,s)=>{const r=pt(n);r===-1||!mt(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Et(){return!0}function xt(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=gt,isEnabled:i=Et,open:d}=e,c=a.useRef(!1),m=a.useRef(null),T=a.useRef(null),v=a.useRef(null),I=a.useRef(null),C=a.useRef(!1),p=a.useRef(null),S=q(t.ref,p),P=a.useRef(null);a.useEffect(()=>{!d||!p.current||(C.current=!o)},[o,d]),a.useEffect(()=>{if(!d||!p.current)return;const l=K(p.current);return p.current.contains(l.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),C.current&&p.current.focus()),()=>{s||(v.current&&v.current.focus&&(c.current=!0,v.current.focus()),v.current=null)}},[d]),a.useEffect(()=>{if(!d||!p.current)return;const l=K(p.current),g=R=>{P.current=R,!(n||!i()||R.key!=="Tab")&&l.activeElement===p.current&&R.shiftKey&&(c.current=!0,T.current&&T.current.focus())},E=()=>{const R=p.current;if(R===null)return;if(!l.hasFocus()||!i()||c.current){c.current=!1;return}if(R.contains(l.activeElement)||n&&l.activeElement!==m.current&&l.activeElement!==T.current)return;if(l.activeElement!==I.current)I.current=null;else if(I.current!==null)return;if(!C.current)return;let O=[];if((l.activeElement===m.current||l.activeElement===T.current)&&(O=r(p.current)),O.length>0){var B,A;const j=!!((B=P.current)!=null&&B.shiftKey&&((A=P.current)==null?void 0:A.key)==="Tab"),M=O[0],D=O[O.length-1];typeof M!="string"&&typeof D!="string"&&(j?D.focus():M.focus())}else R.focus()};l.addEventListener("focusin",E),l.addEventListener("keydown",g,!0);const w=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&E()},50);return()=>{clearInterval(w),l.removeEventListener("focusin",E),l.removeEventListener("keydown",g,!0)}},[o,n,s,i,d,r]);const k=l=>{v.current===null&&(v.current=l.relatedTarget),C.current=!0,I.current=l.target;const g=t.props.onFocus;g&&g(l)},L=l=>{v.current===null&&(v.current=l.relatedTarget),C.current=!0};return $.jsxs(a.Fragment,{children:[$.jsx("div",{tabIndex:d?0:-1,onFocus:L,ref:m,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:S,onFocus:k}),$.jsx("div",{tabIndex:d?0:-1,onFocus:L,ref:T,"data-testid":"sentinelEnd"})]})}function vt(e){return typeof e=="function"?e():e}function bt(e){return e?e.props.hasOwnProperty("in"):!1}const Pt=new ut;function yt(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Pt,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:d,children:c,onClose:m,open:T,rootRef:v}=e,I=a.useRef({}),C=a.useRef(null),p=a.useRef(null),S=q(p,v),[P,k]=a.useState(!T),L=bt(c);let l=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(l=!1);const g=()=>K(C.current),E=()=>(I.current.modalRef=p.current,I.current.mount=C.current,I.current),w=()=>{s.mount(E(),{disableScrollLock:n}),p.current&&(p.current.scrollTop=0)},R=Ne(()=>{const f=vt(t)||g().body;s.add(E(),f),p.current&&w()}),O=a.useCallback(()=>s.isTopModal(E()),[s]),B=Ne(f=>{C.current=f,f&&(T&&O()?w():p.current&&oe(p.current,l))}),A=a.useCallback(()=>{s.remove(E(),l)},[l,s]);a.useEffect(()=>()=>{A()},[A]),a.useEffect(()=>{T?R():(!L||!r)&&A()},[T,A,L,r,R]);const j=f=>h=>{var F;(F=f.onKeyDown)==null||F.call(f,h),!(h.key!=="Escape"||h.which===229||!O())&&(o||(h.stopPropagation(),m&&m(h,"escapeKeyDown")))},M=f=>h=>{var F;(F=f.onClick)==null||F.call(f,h),h.target===h.currentTarget&&m&&m(h,"backdropClick")};return{getRootProps:(f={})=>{const h=Ue(e);delete h.onTransitionEnter,delete h.onTransitionExited;const F=x({},h,f);return x({role:"presentation"},F,{onKeyDown:j(F),ref:S})},getBackdropProps:(f={})=>{const h=f;return x({"aria-hidden":!0},h,{onClick:M(h),open:T})},getTransitionProps:()=>{const f=()=>{k(!1),i&&i()},h=()=>{k(!0),d&&d(),r&&A()};return{onEnter:Me(f,c==null?void 0:c.props.onEnter),onExited:Me(h,c==null?void 0:c.props.onExited)}},rootRef:S,portalRef:B,isTopModal:O,exited:P,hasTransition:L}}function Tt(e){return xe("MuiModal",e)}be("MuiModal",["root","hidden","backdrop"]);const Rt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],kt=e=>{const{open:t,exited:o,classes:n}=e;return ve({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Tt,n)},St=ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>x({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Ct=ie(it,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),wt=a.forwardRef(function(t,o){var n,s,r,i,d,c;const m=Ee({name:"MuiModal",props:t}),{BackdropComponent:T=Ct,BackdropProps:v,className:I,closeAfterTransition:C=!1,children:p,container:S,component:P,components:k={},componentsProps:L={},disableAutoFocus:l=!1,disableEnforceFocus:g=!1,disableEscapeKeyDown:E=!1,disablePortal:w=!1,disableRestoreFocus:R=!1,disableScrollLock:O=!1,hideBackdrop:B=!1,keepMounted:A=!1,onBackdropClick:j,open:M,slotProps:D,slots:y}=m,u=V(m,Rt),f=x({},m,{closeAfterTransition:C,disableAutoFocus:l,disableEnforceFocus:g,disableEscapeKeyDown:E,disablePortal:w,disableRestoreFocus:R,disableScrollLock:O,hideBackdrop:B,keepMounted:A}),{getRootProps:h,getBackdropProps:F,getTransitionProps:_,portalRef:U,isTopModal:ae,exited:z,hasTransition:le}=yt(x({},f,{rootRef:o})),Y=x({},f,{exited:z}),G=kt(Y),X={};if(p.props.tabIndex===void 0&&(X.tabIndex="-1"),le){const{onEnter:b,onExited:N}=_();X.onEnter=b,X.onExited=N}const J=(n=(s=y==null?void 0:y.root)!=null?s:k.Root)!=null?n:St,te=(r=(i=y==null?void 0:y.backdrop)!=null?i:k.Backdrop)!=null?r:T,ne=(d=D==null?void 0:D.root)!=null?d:L.root,Q=(c=D==null?void 0:D.backdrop)!=null?c:L.backdrop,ue=de({elementType:J,externalSlotProps:ne,externalForwardedProps:u,getSlotProps:h,additionalProps:{ref:o,as:P},ownerState:Y,className:re(I,ne==null?void 0:ne.className,G==null?void 0:G.root,!Y.open&&Y.exited&&(G==null?void 0:G.hidden))}),fe=de({elementType:te,externalSlotProps:Q,additionalProps:v,getSlotProps:b=>F(x({},b,{onClick:N=>{j&&j(N),b!=null&&b.onClick&&b.onClick(N)}})),className:re(Q==null?void 0:Q.className,v==null?void 0:v.className,G==null?void 0:G.backdrop),ownerState:Y});return!A&&!M&&(!le||z)?null:$.jsx(Qe,{ref:U,container:S,disablePortal:w,children:$.jsxs(J,x({},ue,{children:[!B&&T?$.jsx(te,x({},fe)):null,$.jsx(xt,{disableEnforceFocus:g,disableAutoFocus:l,disableRestoreFocus:R,isEnabled:ae,open:M,children:a.cloneElement(p,X)})]}))})}),Nt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ge(e){return`scale(${e}, ${e**2})`}const Mt={entering:{opacity:1,transform:ge(1)},entered:{opacity:1,transform:"none"}},he=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),_e=a.forwardRef(function(t,o){const{addEndListener:n,appear:s=!0,children:r,easing:i,in:d,onEnter:c,onEntered:m,onEntering:T,onExit:v,onExited:I,onExiting:C,style:p,timeout:S="auto",TransitionComponent:P=De}=t,k=V(t,Nt),L=He(),l=a.useRef(),g=Be(),E=a.useRef(null),w=q(E,r.ref,o),R=u=>f=>{if(u){const h=E.current;f===void 0?u(h):u(h,f)}},O=R(T),B=R((u,f)=>{$e(u);const{duration:h,delay:F,easing:_}=ce({style:p,timeout:S,easing:i},{mode:"enter"});let U;S==="auto"?(U=g.transitions.getAutoHeightDuration(u.clientHeight),l.current=U):U=h,u.style.transition=[g.transitions.create("opacity",{duration:U,delay:F}),g.transitions.create("transform",{duration:he?U:U*.666,delay:F,easing:_})].join(","),c&&c(u,f)}),A=R(m),j=R(C),M=R(u=>{const{duration:f,delay:h,easing:F}=ce({style:p,timeout:S,easing:i},{mode:"exit"});let _;S==="auto"?(_=g.transitions.getAutoHeightDuration(u.clientHeight),l.current=_):_=f,u.style.transition=[g.transitions.create("opacity",{duration:_,delay:h}),g.transitions.create("transform",{duration:he?_:_*.666,delay:he?h:h||_*.333,easing:F})].join(","),u.style.opacity=0,u.style.transform=ge(.75),v&&v(u)}),D=R(I),y=u=>{S==="auto"&&L.start(l.current||0,u),n&&n(E.current,u)};return $.jsx(P,x({appear:s,in:d,nodeRef:E,onEnter:B,onEntered:A,onEntering:O,onExit:M,onExited:D,onExiting:j,addEndListener:y,timeout:S==="auto"?null:S},k,{children:(u,f)=>a.cloneElement(r,x({style:x({opacity:0,transform:ge(.75),visibility:u==="exited"&&!d?"hidden":void 0},Mt[u],p,r.props.style),ref:w},f))}))});_e.muiSupportAuto=!0;function It(e){return xe("MuiPopover",e)}be("MuiPopover",["root","paper"]);const Ot=["onEntering"],At=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Ft=["slotProps"];function Ae(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function Fe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Le(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function me(e){return typeof e=="function"?e():e}const Lt=e=>{const{classes:t}=e;return ve({root:["root"],paper:["paper"]},It,t)},Dt=ie(wt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),$t=ie(Ve,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),qt=a.forwardRef(function(t,o){var n,s,r;const i=Ee({props:t,name:"MuiPopover"}),{action:d,anchorEl:c,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:T,anchorReference:v="anchorEl",children:I,className:C,container:p,elevation:S=8,marginThreshold:P=16,open:k,PaperProps:L={},slots:l,slotProps:g,transformOrigin:E={vertical:"top",horizontal:"left"},TransitionComponent:w=_e,transitionDuration:R="auto",TransitionProps:{onEntering:O}={},disableScrollLock:B=!1}=i,A=V(i.TransitionProps,Ot),j=V(i,At),M=(n=g==null?void 0:g.paper)!=null?n:L,D=a.useRef(),y=q(D,M.ref),u=x({},i,{anchorOrigin:m,anchorReference:v,elevation:S,marginThreshold:P,externalPaperSlotProps:M,transformOrigin:E,TransitionComponent:w,transitionDuration:R,TransitionProps:A}),f=Lt(u),h=a.useCallback(()=>{if(v==="anchorPosition")return T;const b=me(c),H=(b&&b.nodeType===1?b:K(D.current).body).getBoundingClientRect();return{top:H.top+Ae(H,m.vertical),left:H.left+Fe(H,m.horizontal)}},[c,m.horizontal,m.vertical,T,v]),F=a.useCallback(b=>({vertical:Ae(b,E.vertical),horizontal:Fe(b,E.horizontal)}),[E.horizontal,E.vertical]),_=a.useCallback(b=>{const N={width:b.offsetWidth,height:b.offsetHeight},H=F(N);if(v==="none")return{top:null,left:null,transformOrigin:Le(H)};const Pe=h();let Z=Pe.top-H.vertical,ee=Pe.left-H.horizontal;const ye=Z+N.height,Te=ee+N.width,Re=se(me(c)),ke=Re.innerHeight-P,Se=Re.innerWidth-P;if(P!==null&&Z<P){const W=Z-P;Z-=W,H.vertical+=W}else if(P!==null&&ye>ke){const W=ye-ke;Z-=W,H.vertical+=W}if(P!==null&&ee<P){const W=ee-P;ee-=W,H.horizontal+=W}else if(Te>Se){const W=Te-Se;ee-=W,H.horizontal+=W}return{top:`${Math.round(Z)}px`,left:`${Math.round(ee)}px`,transformOrigin:Le(H)}},[c,v,h,F,P]),[U,ae]=a.useState(k),z=a.useCallback(()=>{const b=D.current;if(!b)return;const N=_(b);N.top!==null&&(b.style.top=N.top),N.left!==null&&(b.style.left=N.left),b.style.transformOrigin=N.transformOrigin,ae(!0)},[_]);a.useEffect(()=>(B&&window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)),[c,B,z]);const le=(b,N)=>{O&&O(b,N),z()},Y=()=>{ae(!1)};a.useEffect(()=>{k&&z()}),a.useImperativeHandle(d,()=>k?{updatePosition:()=>{z()}}:null,[k,z]),a.useEffect(()=>{if(!k)return;const b=Ye(()=>{z()}),N=se(c);return N.addEventListener("resize",b),()=>{b.clear(),N.removeEventListener("resize",b)}},[c,k,z]);let G=R;R==="auto"&&!w.muiSupportAuto&&(G=void 0);const X=p||(c?K(me(c)).body:void 0),J=(s=l==null?void 0:l.root)!=null?s:Dt,te=(r=l==null?void 0:l.paper)!=null?r:$t,ne=de({elementType:te,externalSlotProps:x({},M,{style:U?M.style:x({},M.style,{opacity:0})}),additionalProps:{elevation:S,ref:y},ownerState:u,className:re(f.paper,M==null?void 0:M.className)}),Q=de({elementType:J,externalSlotProps:(g==null?void 0:g.root)||{},externalForwardedProps:j,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:X,open:k},ownerState:u,className:re(f.root,C)}),{slotProps:ue}=Q,fe=V(Q,Ft);return $.jsx(J,x({},fe,!Ke(J)&&{slotProps:ue,disableScrollLock:B},{children:$.jsx(w,x({appear:!0,in:k,onEntering:le,onExited:Y,timeout:G},A,{children:$.jsx(te,x({},ne,{children:I}))}))}))});export{_e as G,wt as M,qt as P,$t as a,Qe as b,Ye as d,qe as g,se as o,de as u};
