import{u as B,_ as z,b as h,i as C,v as W,j as _,a as oe}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as d}from"./index-BBkUAzwr.js";import{g as K,s as F,c as O,a as U,r as te}from"./styled-CnbWPWMk.js";import{g as A}from"./generateUtilityClasses-BwpiFGlX.js";import{j as I}from"./jsx-runtime-BwZVo4Wn.js";import{B as se}from"./ButtonBase-DmgBfAJK.js";import{u as re}from"./index-Be18FJgs.js";import{g as ne,u as V,a as ae,P as ie}from"./Popover-CeXxOtTV.js";import{a as le,u as ce}from"./TransitionGroupContext-C9C3ikuq.js";import{o as G}from"./utils-BZ12QECu.js";import{S as ue}from"./SvgIcon-f13RXC8a.js";function de(e){return K("MuiIconButton",e)}const pe=A("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),fe=["edge","children","className","color","disabled","disableFocusRipple","size"],ge=e=>{const{classes:o,disabled:t,color:s,edge:i,size:p}=e,l={root:["root",t&&"disabled",s!=="default"&&`color${C(s)}`,i&&`edge${C(i)}`,`size${C(p)}`]};return U(l,de,o)},me=F(se,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="default"&&o[`color${C(t.color)}`],t.edge&&o[`edge${C(t.edge)}`],o[`size${C(t.size)}`]]}})(({theme:e,ownerState:o})=>h({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:W(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var t;const s=(t=(e.vars||e).palette)==null?void 0:t[o.color];return h({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&h({color:s==null?void 0:s.main},!o.disableRipple&&{"&:hover":h({},s&&{backgroundColor:e.vars?`rgba(${s.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:W(s.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${pe.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),We=d.forwardRef(function(o,t){const s=B({props:o,name:"MuiIconButton"}),{edge:i=!1,children:p,className:l,color:n="default",disabled:g=!1,disableFocusRipple:v=!1,size:y="medium"}=s,x=z(s,fe),M=h({},s,{edge:i,color:n,disabled:g,disableFocusRipple:v,size:y}),f=ge(M);return I.jsx(me,h({className:O(f.root,l),centerRipple:!0,focusRipple:!v,disabled:g,ref:t},x,{ownerState:M,children:p}))}),he=d.createContext({});function ve(e){return K("MuiList",e)}A("MuiList",["root","padding","dense","subheader"]);const be=["children","className","component","dense","disablePadding","subheader"],ye=e=>{const{classes:o,disablePadding:t,dense:s,subheader:i}=e;return U({root:["root",!t&&"padding",s&&"dense",i&&"subheader"]},ve,o)},xe=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disablePadding&&o.padding,t.dense&&o.dense,t.subheader&&o.subheader]}})(({ownerState:e})=>h({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Me=d.forwardRef(function(o,t){const s=B({props:o,name:"MuiList"}),{children:i,className:p,component:l="ul",dense:n=!1,disablePadding:g=!1,subheader:v}=s,y=z(s,be),x=d.useMemo(()=>({dense:n}),[n]),M=h({},s,{component:l,dense:n,disablePadding:g}),f=ye(M);return I.jsx(he.Provider,{value:x,children:I.jsxs(xe,h({as:l,className:O(f.root,p),ref:t,ownerState:M},y,{children:[v,i]}))})}),Pe=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function j(e,o,t){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t?null:e.firstChild}function q(e,o,t){return e===o?t?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t?null:e.lastChild}function J(e,o){if(o===void 0)return!0;let t=e.innerText;return t===void 0&&(t=e.textContent),t=t.trim().toLowerCase(),t.length===0?!1:o.repeating?t[0]===o.keys[0]:t.indexOf(o.keys.join(""))===0}function S(e,o,t,s,i,p){let l=!1,n=i(e,o,o?t:!1);for(;n;){if(n===e.firstChild){if(l)return!1;l=!0}const g=s?!1:n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||!J(n,p)||g)n=i(e,n,t);else return n.focus(),!0}return!1}const Re=d.forwardRef(function(o,t){const{actions:s,autoFocus:i=!1,autoFocusItem:p=!1,children:l,className:n,disabledItemsFocusable:g=!1,disableListWrap:v=!1,onKeyDown:y,variant:x="selectedMenu"}=o,M=z(o,Pe),f=d.useRef(null),N=d.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});le(()=>{i&&f.current.focus()},[i]),d.useImperativeHandle(s,()=>({adjustStyleForScrollbar:(r,{direction:c})=>{const m=!f.current.style.width;if(r.clientHeight<f.current.clientHeight&&m){const b=`${ne(G(r))}px`;f.current.style[c==="rtl"?"paddingLeft":"paddingRight"]=b,f.current.style.width=`calc(100% + ${b})`}return f.current}}),[]);const E=r=>{const c=f.current,m=r.key,b=G(c).activeElement;if(m==="ArrowDown")r.preventDefault(),S(c,b,v,g,j);else if(m==="ArrowUp")r.preventDefault(),S(c,b,v,g,q);else if(m==="Home")r.preventDefault(),S(c,null,v,g,j);else if(m==="End")r.preventDefault(),S(c,null,v,g,q);else if(m.length===1){const a=N.current,R=m.toLowerCase(),T=performance.now();a.keys.length>0&&(T-a.lastTime>500?(a.keys=[],a.repeating=!0,a.previousKeyMatched=!0):a.repeating&&R!==a.keys[0]&&(a.repeating=!1)),a.lastTime=T,a.keys.push(R);const k=b&&!a.repeating&&J(b,a);a.previousKeyMatched&&(k||S(c,b,!1,g,j,a))?r.preventDefault():a.previousKeyMatched=!1}y&&y(r)},L=ce(f,t);let u=-1;d.Children.forEach(l,(r,c)=>{if(!d.isValidElement(r)){u===c&&(u+=1,u>=l.length&&(u=-1));return}r.props.disabled||(x==="selectedMenu"&&r.props.selected||u===-1)&&(u=c),u===c&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(u+=1,u>=l.length&&(u=-1))});const w=d.Children.map(l,(r,c)=>{if(c===u){const m={};return p&&(m.autoFocus=!0),r.props.tabIndex===void 0&&x==="selectedMenu"&&(m.tabIndex=0),d.cloneElement(r,m)}return r});return I.jsx(Me,h({role:"menu",ref:L,className:n,onKeyDown:E,tabIndex:i?0:-1},M,{children:w}))});function Ce(e){return K("MuiMenu",e)}A("MuiMenu",["root","paper","list"]);const Ie=["onEntering"],Le=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],we={vertical:"top",horizontal:"right"},ke={vertical:"top",horizontal:"left"},Se=e=>{const{classes:o}=e;return U({root:["root"],paper:["paper"],list:["list"]},Ce,o)},ze=F(ie,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),Fe=F(ae,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ee=F(Re,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),Ve=d.forwardRef(function(o,t){var s,i;const p=B({props:o,name:"MuiMenu"}),{autoFocus:l=!0,children:n,className:g,disableAutoFocusItem:v=!1,MenuListProps:y={},onClose:x,open:M,PaperProps:f={},PopoverClasses:N,transitionDuration:E="auto",TransitionProps:{onEntering:L}={},variant:u="selectedMenu",slots:w={},slotProps:r={}}=p,c=z(p.TransitionProps,Ie),m=z(p,Le),b=re(),a=h({},p,{autoFocus:l,disableAutoFocusItem:v,MenuListProps:y,onEntering:L,PaperProps:f,transitionDuration:E,TransitionProps:c,variant:u}),R=Se(a),T=l&&!v&&M,k=d.useRef(null),Q=(P,D)=>{k.current&&k.current.adjustStyleForScrollbar(P,{direction:b?"rtl":"ltr"}),L&&L(P,D)},X=P=>{P.key==="Tab"&&(P.preventDefault(),x&&x(P,"tabKeyDown"))};let $=-1;d.Children.map(n,(P,D)=>{d.isValidElement(P)&&(P.props.disabled||(u==="selectedMenu"&&P.props.selected||$===-1)&&($=D))});const H=(s=w.paper)!=null?s:Fe,Y=(i=r.paper)!=null?i:f,Z=V({elementType:w.root,externalSlotProps:r.root,ownerState:a,className:[R.root,g]}),ee=V({elementType:H,externalSlotProps:Y,ownerState:a,className:R.paper});return I.jsx(ze,h({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:b?"right":"left"},transformOrigin:b?we:ke,slots:{paper:H,root:w.root},slotProps:{root:Z,paper:ee},open:M,ref:t,transitionDuration:E,TransitionProps:h({onEntering:Q},c),ownerState:a},m,{classes:N,children:I.jsx(Ee,h({onKeyDown:X,actions:k,autoFocus:l&&($===-1||v),autoFocusItem:T,variant:u},y,{className:O(R.list,y.className),children:n}))}))}),Te=e=>_(ue,{...e,children:oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[_("circle",{cx:"18",cy:"13.5",r:"3.375",stroke:"currentColor",strokeWidth:"2.25"}),_("path",{d:"M12 25.5V23.25C12 21.5931 13.3431 20.25 15 20.25H21C22.6569 20.25 24 21.5931 24 23.25V25.5",stroke:"currentColor",strokeWidth:"2.25",strokeLinecap:"round"})]})});Te.__docgenInfo={description:"",methods:[],displayName:"UserIcon"};export{We as I,he as L,Ve as M,Te as U,Me as a};
