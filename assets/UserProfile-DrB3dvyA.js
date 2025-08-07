import{j as K,a as be,F as Gn}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as I,R as Je}from"./index-Dl6G-zuu.js";import{c as Bn}from"./Text-BNIHq94e.js";import{U as Kn}from"./UserIcon-q_P09GsN.js";import{_ as $,a as E,t as Vn}from"./defaultTheme-Cydao2Tu.js";import{P as y}from"./index-BfyspvgH.js";import{u as Xn}from"./useTheme-BYNjlLc8.js";import{S as qn}from"./FlexBox-D6GhYe9U.js";import{g as Zt,s as Q,c as te,a as ee,r as Qn}from"./styled-D6pw60Bp.js";import{c as Jn}from"./createSvgIcon-sttI1-XB.js";import{j as D}from"./jsx-runtime-DMAvRu52.js";import{g as ne}from"./generateUtilityClasses-YWFBP9tm.js";import{r as Zn,m as ta,a as ea,g as na,u as ye,b as aa,P as ra}from"./Popover-BFLlbOqP.js";import{u as Ze}from"./TransitionGroupContext-BU5kpZ0L.js";import{u as ae}from"./DefaultPropsProvider-BHKfC5ky.js";import{I as oa}from"./IconButton-DPejjeAT.js";import{u as sa}from"./index-1lBnjf3z.js";import{u as ia}from"./useEnhancedEffect-DZnfS5Iy.js";import{o as ve}from"./utils-xzVdhYNG.js";const la=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ca=["component","slots","slotProps"],fa=["component"];function ua(t,e){const{className:n,elementType:a,ownerState:r,externalForwardedProps:o,getSlotOwnerState:s,internalForwardedProps:i}=e,f=$(e,la),{component:c,slots:u={[t]:void 0},slotProps:p={[t]:void 0}}=o;$(o,ca);const m=u[t]||a,b=Zn(p[t],r),O=ta(E({className:n},f,{externalForwardedProps:void 0,externalSlotProps:b})),{props:{component:S},internalRef:v}=O,h=$(O.props,fa),w=Ze(v,b==null?void 0:b.ref,e.ref),g=s?s(h):{},x=E({},r,g),P=S,C=ea(m,E({},t==="root",!u[t]&&i,h,P&&{as:P},{ref:w}),x);return Object.keys(g).forEach(A=>{delete C[A]}),[m,C]}const da=Jn(D.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ma(t){return Zt("MuiAvatar",t)}ne("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const pa=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],ga=t=>{const{classes:e,variant:n,colorDefault:a}=t;return ee({root:["root",n,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ma,e)},ha=Q("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:E({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:E({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),ba=Q("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ya=Q(da,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function va({crossOrigin:t,referrerPolicy:e,src:n,srcSet:a}){const[r,o]=I.useState(!1);return I.useEffect(()=>{if(!n&&!a)return;o(!1);let s=!0;const i=new Image;return i.onload=()=>{s&&o("loaded")},i.onerror=()=>{s&&o("error")},i.crossOrigin=t,i.referrerPolicy=e,i.src=n,a&&(i.srcset=a),()=>{s=!1}},[t,e,n,a]),r}const xa=I.forwardRef(function(e,n){const a=ae({props:e,name:"MuiAvatar"}),{alt:r,children:o,className:s,component:i="div",slots:f={},slotProps:c={},imgProps:u,sizes:p,src:m,srcSet:b,variant:O="circular"}=a,S=$(a,pa);let v=null;const h=va(E({},u,{src:m,srcSet:b})),w=m||b,g=w&&h!=="error",x=E({},a,{colorDefault:!g,component:i,variant:O}),P=ga(x),[C,A]=ua("img",{className:P.img,elementType:ba,externalForwardedProps:{slots:f,slotProps:{img:E({},u,c.img)}},additionalProps:{alt:r,src:m,srcSet:b,sizes:p},ownerState:x});return g?v=D.jsx(C,E({},A)):o||o===0?v=o:w&&r?v=r[0]:v=D.jsx(ya,{ownerState:x,className:P.fallback}),D.jsx(ha,E({as:i,ownerState:x,className:te(P.root,s),ref:n},S,{children:v}))}),wa=I.createContext({});function Aa(t){return Zt("MuiList",t)}ne("MuiList",["root","padding","dense","subheader"]);const Pa=["children","className","component","dense","disablePadding","subheader"],Sa=t=>{const{classes:e,disablePadding:n,dense:a,subheader:r}=t;return ee({root:["root",!n&&"padding",a&&"dense",r&&"subheader"]},Aa,e)},ka=Q("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disablePadding&&e.padding,n.dense&&e.dense,n.subheader&&e.subheader]}})(({ownerState:t})=>E({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Oa=I.forwardRef(function(e,n){const a=ae({props:e,name:"MuiList"}),{children:r,className:o,component:s="ul",dense:i=!1,disablePadding:f=!1,subheader:c}=a,u=$(a,Pa),p=I.useMemo(()=>({dense:i}),[i]),m=E({},a,{component:s,dense:i,disablePadding:f}),b=Sa(m);return D.jsx(wa.Provider,{value:p,children:D.jsxs(ka,E({as:s,className:te(b.root,o),ref:n,ownerState:m},u,{children:[c,r]}))})}),Ca=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Ot(t,e,n){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n?null:t.firstChild}function xe(t,e,n){return t===e?n?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n?null:t.lastChild}function tn(t,e){if(e===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:e.repeating?n[0]===e.keys[0]:n.indexOf(e.keys.join(""))===0}function at(t,e,n,a,r,o){let s=!1,i=r(t,e,e?n:!1);for(;i;){if(i===t.firstChild){if(s)return!1;s=!0}const f=a?!1:i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||!tn(i,o)||f)i=r(t,i,n);else return i.focus(),!0}return!1}const Ia=I.forwardRef(function(e,n){const{actions:a,autoFocus:r=!1,autoFocusItem:o=!1,children:s,className:i,disabledItemsFocusable:f=!1,disableListWrap:c=!1,onKeyDown:u,variant:p="selectedMenu"}=e,m=$(e,Ca),b=I.useRef(null),O=I.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ia(()=>{r&&b.current.focus()},[r]),I.useImperativeHandle(a,()=>({adjustStyleForScrollbar:(g,{direction:x})=>{const P=!b.current.style.width;if(g.clientHeight<b.current.clientHeight&&P){const C=`${na(ve(g))}px`;b.current.style[x==="rtl"?"paddingLeft":"paddingRight"]=C,b.current.style.width=`calc(100% + ${C})`}return b.current}}),[]);const S=g=>{const x=b.current,P=g.key,C=ve(x).activeElement;if(P==="ArrowDown")g.preventDefault(),at(x,C,c,f,Ot);else if(P==="ArrowUp")g.preventDefault(),at(x,C,c,f,xe);else if(P==="Home")g.preventDefault(),at(x,null,c,f,Ot);else if(P==="End")g.preventDefault(),at(x,null,c,f,xe);else if(P.length===1){const A=O.current,M=P.toLowerCase(),ut=performance.now();A.keys.length>0&&(ut-A.lastTime>500?(A.keys=[],A.repeating=!0,A.previousKeyMatched=!0):A.repeating&&M!==A.keys[0]&&(A.repeating=!1)),A.lastTime=ut,A.keys.push(M);const nt=C&&!A.repeating&&tn(C,A);A.previousKeyMatched&&(nt||at(x,C,!1,f,Ot,A))?g.preventDefault():A.previousKeyMatched=!1}u&&u(g)},v=Ze(b,n);let h=-1;I.Children.forEach(s,(g,x)=>{if(!I.isValidElement(g)){h===x&&(h+=1,h>=s.length&&(h=-1));return}g.props.disabled||(p==="selectedMenu"&&g.props.selected||h===-1)&&(h=x),h===x&&(g.props.disabled||g.props.muiSkipListHighlight||g.type.muiSkipListHighlight)&&(h+=1,h>=s.length&&(h=-1))});const w=I.Children.map(s,(g,x)=>{if(x===h){const P={};return o&&(P.autoFocus=!0),g.props.tabIndex===void 0&&p==="selectedMenu"&&(P.tabIndex=0),I.cloneElement(g,P)}return g});return D.jsx(Oa,E({role:"menu",ref:v,className:i,onKeyDown:S,tabIndex:r?0:-1},m,{children:w}))});function Ea(t){return Zt("MuiMenu",t)}ne("MuiMenu",["root","paper","list"]);const Na=["onEntering"],Ma=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Ta={vertical:"top",horizontal:"right"},Fa={vertical:"top",horizontal:"left"},_a=t=>{const{classes:e}=t;return ee({root:["root"],paper:["paper"],list:["list"]},Ea,e)},La=Q(ra,{shouldForwardProp:t=>Qn(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ra=Q(aa,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Da=Q(Ia,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),ja=I.forwardRef(function(e,n){var a,r;const o=ae({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:i,className:f,disableAutoFocusItem:c=!1,MenuListProps:u={},onClose:p,open:m,PaperProps:b={},PopoverClasses:O,transitionDuration:S="auto",TransitionProps:{onEntering:v}={},variant:h="selectedMenu",slots:w={},slotProps:g={}}=o,x=$(o.TransitionProps,Na),P=$(o,Ma),C=sa(),A=E({},o,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:u,onEntering:v,PaperProps:b,transitionDuration:S,TransitionProps:x,variant:h}),M=_a(A),ut=s&&!c&&m,nt=I.useRef(null),Un=(F,mt)=>{nt.current&&nt.current.adjustStyleForScrollbar(F,{direction:C?"rtl":"ltr"}),v&&v(F,mt)},Wn=F=>{F.key==="Tab"&&(F.preventDefault(),p&&p(F,"tabKeyDown"))};let dt=-1;I.Children.map(i,(F,mt)=>{I.isValidElement(F)&&(F.props.disabled||(h==="selectedMenu"&&F.props.selected||dt===-1)&&(dt=mt))});const he=(a=w.paper)!=null?a:Ra,Yn=(r=g.paper)!=null?r:b,$n=ye({elementType:w.root,externalSlotProps:g.root,ownerState:A,className:[M.root,f]}),Hn=ye({elementType:he,externalSlotProps:Yn,ownerState:A,className:M.paper});return D.jsx(La,E({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:C?"right":"left"},transformOrigin:C?Ta:Fa,slots:{paper:he,root:w.root},slotProps:{root:$n,paper:Hn},open:m,ref:n,transitionDuration:S,TransitionProps:E({onEntering:Un},x),ownerState:A},P,{classes:O,children:D.jsx(Da,E({onKeyDown:Wn,actions:nt,autoFocus:s&&(dt===-1||c),autoFocusItem:ut,variant:h},u,{className:te(M.list,u.className),children:i}))}))});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function za(t,e,n){return(e=Wa(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?we(Object(n),!0).forEach(function(a){za(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ua(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Wa(t){var e=Ua(t,"string");return typeof e=="symbol"?e:e+""}const Ae=()=>{};let re={},en={},nn=null,an={mark:Ae,measure:Ae};try{typeof window<"u"&&(re=window),typeof document<"u"&&(en=document),typeof MutationObserver<"u"&&(nn=MutationObserver),typeof performance<"u"&&(an=performance)}catch{}const{userAgent:Pe=""}=re.navigator||{},H=re,k=en,Se=nn,pt=an;H.document;const U=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",rn=~Pe.indexOf("MSIE")||~Pe.indexOf("Trident/");var Ya=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,on={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ha={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",wt="duotone",Ga="sharp",Ba="sharp-duotone",ln=[N,wt,Ga,Ba],Ka={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Va={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Xa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),qa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Qa=["fak","fa-kit","fakd","fa-kit-duotone"],ke={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ja=["kit"],Za={kit:{"fa-kit":"fak"}},tr=["fak","fakd"],er={kit:{fak:"fa-kit"}},Oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ar=["fak","fa-kit","fakd","fa-kit-duotone"],rr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},or={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},sr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ft={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ir=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],_t=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...nr,...ir],lr=["solid","regular","light","thin","duotone","brands"],cn=[1,2,3,4,5,6,7,8,9,10],cr=cn.concat([11,12,13,14,15,16,17,18,19,20]),fr=[...Object.keys(sr),...lr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(cn.map(t=>"".concat(t,"x"))).concat(cr.map(t=>"w-".concat(t))),ur={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const j="___FONT_AWESOME___",Lt=16,fn="fa",un="svg-inline--fa",X="data-fa-i2svg",Rt="data-fa-pseudo-element",dr="data-fa-pseudo-element-pending",oe="data-prefix",se="data-icon",Ce="fontawesome-i2svg",mr="async",pr=["HTML","HEAD","STYLE","SCRIPT"],dn=(()=>{try{return!0}catch{return!1}})();function ct(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const mn=l({},on);mn[N]=l(l(l(l({},{"fa-duotone":"duotone"}),on[N]),ke.kit),ke["kit-duotone"]);const gr=ct(mn),Dt=l({},qa);Dt[N]=l(l(l(l({},{duotone:"fad"}),Dt[N]),Oe.kit),Oe["kit-duotone"]);const Ie=ct(Dt),jt=l({},Ft);jt[N]=l(l({},jt[N]),er.kit);const ie=ct(jt),zt=l({},or);zt[N]=l(l({},zt[N]),Za.kit);ct(zt);const hr=Ya,pn="fa-layers-text",br=$a,yr=l({},Ka);ct(yr);const vr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct=Ha,xr=[...Ja,...fr],ot=H.FontAwesomeConfig||{};function wr(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ar(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ar(wr(n));r!=null&&(ot[a]=r)});const gn={styleDefault:"solid",familyDefault:N,cssPrefix:fn,replacementClass:un,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);const tt=l(l({},gn),ot);tt.autoReplaceSvg||(tt.observeMutations=!1);const d={};Object.keys(gn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){tt[t]=e,st.forEach(n=>n(d))},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){tt.cssPrefix=t,st.forEach(e=>e(d))},get:function(){return tt.cssPrefix}});H.FontAwesomeConfig=d;const st=[];function Pr(t){return st.push(t),()=>{st.splice(st.indexOf(t),1)}}const W=Lt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sr(t){if(!t||!U)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return k.head.insertBefore(e,a),t}const kr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function it(){let t=12,e="";for(;t-- >0;)e+=kr[Math.random()*62|0];return e}function et(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function le(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function hn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Or(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(hn(t[n]),'" '),"").trim()}function At(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ce(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function Cr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ir(t){let{transform:e,width:n=Lt,height:a=Lt,startCentered:r=!1}=t,o="";return r&&rn?o+="translate(".concat(e.x/W-n/2,"em, ").concat(e.y/W-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):o+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),o+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Er=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function bn(){const t=fn,e=un,n=d.cssPrefix,a=d.replacementClass;let r=Er;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Ee=!1;function It(){d.autoAddCss&&!Ee&&(Sr(bn()),Ee=!0)}var Nr={mixout(){return{dom:{css:bn,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}};const z=H||{};z[j]||(z[j]={});z[j].styles||(z[j].styles={});z[j].hooks||(z[j].hooks={});z[j].shims||(z[j].shims=[]);var R=z[j];const yn=[],vn=function(){k.removeEventListener("DOMContentLoaded",vn),yt=1,yn.map(t=>t())};let yt=!1;U&&(yt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),yt||k.addEventListener("DOMContentLoaded",vn));function Mr(t){U&&(yt?setTimeout(t,0):yn.push(t))}function ft(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?hn(t):"<".concat(e," ").concat(Or(n),">").concat(a.map(ft).join(""),"</").concat(e,">")}function Ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Et=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,f,c,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<s;f++)c=o[f],u=i(u,e[c],c,e);return u};function Tr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ut(t){const e=Tr(t);return e.length===1?e[0].toString(16):null}function Fr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Wt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Me(e);typeof R.hooks.addPack=="function"&&!a?R.hooks.addPack(t,Me(e)):R.styles[t]=l(l({},R.styles[t]||{}),r),t==="fas"&&Wt("fa",e)}const{styles:lt,shims:_r}=R,xn=Object.keys(ie),Lr=xn.reduce((t,e)=>(t[e]=Object.keys(ie[e]),t),{});let fe=null,wn={},An={},Pn={},Sn={},kn={};function Rr(t){return~xr.indexOf(t)}function Dr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Rr(r)?r:null}const On=()=>{const t=a=>Et(lt,(r,o,s)=>(r[s]=Et(o,a,{}),r),{});wn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),An=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),kn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in lt||d.autoFetchSvg,n=Et(_r,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});Pn=n.names,Sn=n.unicodes,fe=Pt(d.styleDefault,{family:d.familyDefault})};Pr(t=>{fe=Pt(t.styleDefault,{family:d.familyDefault})});On();function ue(t,e){return(wn[t]||{})[e]}function jr(t,e){return(An[t]||{})[e]}function V(t,e){return(kn[t]||{})[e]}function Cn(t){return Pn[t]||{prefix:null,iconName:null}}function zr(t){const e=Sn[t],n=ue("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return fe}const In=()=>({prefix:null,iconName:null,rest:[]});function Ur(t){let e=N;const n=xn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return ln.forEach(a=>{(t.includes(n[a])||t.some(r=>Lr[a].includes(r)))&&(e=a)}),e}function Pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,a=gr[n][t];if(n===wt&&!t)return"fad";const r=Ie[n][t]||Ie[n][a],o=t in R.styles?t:null;return r||o||null}function Wr(t){let e=[],n=null;return t.forEach(a=>{const r=Dr(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Te(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function St(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=_t.concat(ar),o=Te(t.filter(p=>r.includes(p))),s=Te(t.filter(p=>!_t.includes(p))),i=o.filter(p=>(a=p,!sn.includes(p))),[f=null]=i,c=Ur(o),u=l(l({},Wr(s)),{},{prefix:Pt(f,{family:c})});return l(l(l({},u),Gr({values:t,family:c,styles:lt,config:d,canonical:u,givenPrefix:a})),Yr(n,a,u))}function Yr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Cn(r):{},s=V(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!lt.far&&lt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const $r=ln.filter(t=>t!==N||t!==wt),Hr=Object.keys(Ft).filter(t=>t!==N).map(t=>Object.keys(Ft[t])).flat();function Gr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===wt,f=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(f||c||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&$r.includes(n)&&(Object.keys(o).find(m=>Hr.includes(m))||s.autoFetchSvg)){const m=Xa.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=V(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=G()||"fas"),a}class Br{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Wt(o,r[o]);const s=ie[N][o];s&&Wt(s,r[o]),On()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[o][c]=i)}),e[o][s]=i}),e}}let Fe=[],J={};const Z={},Kr=Object.keys(Z);function Vr(t,e){let{mixoutsTo:n}=e;return Fe=t,J={},Object.keys(Z).forEach(a=>{Kr.indexOf(a)===-1&&delete Z[a]}),Fe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{J[s]||(J[s]=[]),J[s].push(o[s])})}a.provides&&a.provides(Z)}),n}function Yt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(J[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(J[t]||[]).forEach(o=>{o.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function $t(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||G();if(e)return e=V(n,e)||e,Ne(En.definitions,n,e)||Ne(R.styles,n,e)}const En=new Br,Xr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},qr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(q("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Mr(()=>{Jr({autoReplaceSvgRoot:e}),q("watch",t)})}},Qr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:V(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Pt(t[0]);return{prefix:n,iconName:V(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(hr))){const e=St(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:V(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=G();return{prefix:e,iconName:V(e,t)||t}}}},T={noAuto:Xr,config:d,dom:qr,parse:Qr,library:En,findIconDefinition:$t,toHtml:ft},Jr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&U&&d.autoReplaceSvg&&T.dom.i2svg({node:e})};function kt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ft(n))}}),Object.defineProperty(t,"node",{get:function(){if(!U)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Zr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(ce(s)&&n.found&&!a.found){const{width:i,height:f}=n,c={x:i/f/2,y:.5};r.style=At(l(l({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function to(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function de(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:f,titleId:c,extra:u,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,O=tr.includes(a),S=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let v={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:S,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const h=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(v.attributes[X]=""),i&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||it())},children:[i]}),delete v.attributes.title);const w=l(l({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:s,styles:l(l({},h),u.styles)}),{children:g,attributes:x}=n.found&&e.found?B("generateAbstractMask",w)||{children:[],attributes:{}}:B("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=g,w.attributes=x,s?to(w):Zr(w)}function _e(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,f=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(f[X]="");const c=l({},s.styles);ce(r)&&(c.transform=Ir({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=At(c);u.length>0&&(f.style=u);const p=[];return p.push({tag:"span",attributes:f,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function eo(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=At(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Nt}=R;function Ht(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const no={found:!1,width:512,height:512};function ao(t,e){!dn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=G()),new Promise((a,r)=>{if(n==="fa"){const o=Cn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Nt[e]&&Nt[e][t]){const o=Nt[e][t];return a(Ht(o))}ao(t,e),a(l(l({},no),{},{icon:d.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const Le=()=>{},Bt=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Le,measure:Le},rt='FA "6.7.2"',ro=t=>(Bt.mark("".concat(rt," ").concat(t," begins")),()=>Nn(t)),Nn=t=>{Bt.mark("".concat(rt," ").concat(t," ends")),Bt.measure("".concat(rt," ").concat(t),"".concat(rt," ").concat(t," begins"),"".concat(rt," ").concat(t," ends"))};var me={begin:ro,end:Nn};const ht=()=>{};function Re(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function oo(t){const e=t.getAttribute?t.getAttribute(oe):null,n=t.getAttribute?t.getAttribute(se):null;return e&&n}function so(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function io(){return d.autoReplaceSvg===!0?bt.replace:bt[d.autoReplaceSvg]||bt.replace}function lo(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function co(t){return k.createElement(t)}function Mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?lo:co}=e;if(typeof t=="string")return k.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Mn(o,{ceFn:n}))}),a}function fo(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const bt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Mn(n),e)}),e.getAttribute(X)===null&&d.keepOriginalSource){let n=k.createComment(fo(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~le(e).indexOf(d.replacementClass))return bt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ft(o)).join(`
`);e.setAttribute(X,""),e.innerHTML=r}};function De(t){t()}function Tn(t,e){const n=typeof e=="function"?e:ht;if(t.length===0)n();else{let a=De;d.mutateApproach===mr&&(a=H.requestAnimationFrame||De),a(()=>{const r=io(),o=me.begin("mutate");t.map(r),o(),n()})}}let pe=!1;function Fn(){pe=!0}function Kt(){pe=!1}let vt=null;function je(t){if(!Se||!d.observeMutations)return;const{treeCallback:e=ht,nodeCallback:n=ht,pseudoElementsCallback:a=ht,observeMutationsRoot:r=k}=t;vt=new Se(o=>{if(pe)return;const s=G();et(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Re(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Re(i.target)&&~vr.indexOf(i.attributeName))if(i.attributeName==="class"&&oo(i.target)){const{prefix:f,iconName:c}=St(le(i.target));i.target.setAttribute(oe,f||s),c&&i.target.setAttribute(se,c)}else so(i.target)&&n(i.target)})}),U&&vt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function uo(){vt&&vt.disconnect()}function mo(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function po(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=St(le(t));return r.prefix||(r.prefix=G()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=jr(r.prefix,t.innerText)||ue(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function go(t){const e=et(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||it()):(e["aria-hidden"]="true",e.focusable="false")),e}function ho(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ze(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=po(t),o=go(t),s=Yt("parseNodeAttributes",{},t);let i=e.styleParser?mo(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:bo}=R;function _n(t){const e=d.autoReplaceSvg==="nest"?ze(t,{styleParser:!1}):ze(t);return~e.extra.classes.indexOf(pn)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function yo(){return[...Qa,..._t]}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();const n=k.documentElement.classList,a=u=>n.add("".concat(Ce,"-").concat(u)),r=u=>n.remove("".concat(Ce,"-").concat(u)),o=d.autoFetchSvg?yo():sn.concat(Object.keys(bo));o.includes("fa")||o.push("fa");const s=[".".concat(pn,":not([").concat(X,"])")].concat(o.map(u=>".".concat(u,":not([").concat(X,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=et(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const f=me.begin("onTree"),c=i.reduce((u,p)=>{try{const m=_n(p);m&&u.push(m)}catch(m){dn||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(m=>{Tn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(m=>{f(),p(m)})})}function vo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_n(t).then(n=>{n&&Tn([n],e)})}function xo(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:$t(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:$t(r||{})),t(a,l(l({},n),{},{mask:r}))}}const wo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return kt(l({type:"icon"},t),()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||it()):(c["aria-hidden"]="true",c.focusable="false")),de({icons:{main:Ht(b),mask:r?Ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},L),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:c,styles:u,classes:f}})))};var Ao={mixout(){return{icon:xo(wo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ue,t.nodeCallback=vo,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:a=()=>{}}=e;return Ue(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:f,mask:c,maskId:u,extra:p}=n;return new Promise((m,b)=>{Promise.all([Gt(a,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[S,v]=O;m([e,de({icons:{main:S,mask:v},prefix:s,iconName:a,transform:i,symbol:f,maskId:u,title:r,titleId:o,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=At(s);i.length>0&&(a.style=i);let f;return ce(o)&&(f=B("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Po={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kt({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},So={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return kt({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),eo({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},ko={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return kt({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),_e({content:t,transform:l(l({},L),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(rn){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,i=c.height/f}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,_e({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Oo=new RegExp('"',"ug"),We=[1105920,1112319],Ye=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Va),ur),rr),Vt=Object.keys(Ye).reduce((t,e)=>(t[e.toLowerCase()]=Ye[e],t),{}),Co=Object.keys(Vt).reduce((t,e)=>{const n=Vt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Io(t){const e=t.replace(Oo,""),n=Fr(e,0),a=n>=We[0]&&n<=We[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ut(r?e[0]:e),isSecondary:a||r}}function Eo(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Vt[n]||{})[r]||Co[n]}function $e(t,e){const n="".concat(dr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=et(t.children).filter(m=>m.getAttribute(Rt)===e)[0],i=H.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),c=f.match(br),u=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&p!=="none"&&p!==""){const m=i.getPropertyValue("content");let b=Eo(f,u);const{value:O,isSecondary:S}=Io(m),v=c[0].startsWith("FontAwesome");let h=ue(b,O),w=h;if(v){const g=zr(O);g.iconName&&g.prefix&&(h=g.iconName,b=g.prefix)}if(h&&!S&&(!s||s.getAttribute(oe)!==b||s.getAttribute(se)!==w)){t.setAttribute(n,w),s&&t.removeChild(s);const g=ho(),{extra:x}=g;x.attributes[Rt]=e,Gt(h,b).then(P=>{const C=de(l(l({},g),{},{icons:{main:P,mask:In()},prefix:b,iconName:w,extra:x,watchable:!0})),A=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=C.map(M=>ft(M)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function No(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function Mo(t){return t.parentNode!==document.head&&!~pr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function He(t){if(U)return new Promise((e,n)=>{const a=et(t.querySelectorAll("*")).filter(Mo).map(No),r=me.begin("searchPseudoElements");Fn(),Promise.all(a).then(()=>{r(),Kt(),e()}).catch(()=>{r(),Kt(),n()})})}var To={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=He,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;d.searchPseudoElements&&He(n)}}};let Ge=!1;var Fo={mixout(){return{dom:{unwatch(){Fn(),Ge=!0}}}},hooks(){return{bootstrap(){je(Yt("mutationObserverCallbacks",{}))},noAuto(){uo()},watch(t){const{observeMutationsRoot:e}=t;Ge?Kt():je(Yt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Be=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var _o={mixout(){return{parse:{transform:t=>Be(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Be(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:u,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const Mt={x:0,y:0,width:"100%",height:"100%"};function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Lo(t){return t.tag==="g"?t.children:[t]}var Ro={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?St(n.split(" ").map(r=>r.trim())):In();return a.prefix||(a.prefix=G()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:f,icon:c}=r,{width:u,icon:p}=o,m=Cr({transform:i,containerWidth:u,iconWidth:f}),b={tag:"rect",attributes:l(l({},Mt),{},{fill:"white"})},O=c.children?{children:c.children.map(Ke)}:{},S={tag:"g",attributes:l({},m.inner),children:[Ke(l({tag:c.tag,attributes:l(l({},c.attributes),m.path)},O))]},v={tag:"g",attributes:l({},m.outer),children:[S]},h="mask-".concat(s||it()),w="clip-".concat(s||it()),g={tag:"mask",attributes:l(l({},Mt),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Lo(p)},g]};return n.push(x,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(h,")")},Mt)}),{children:n,attributes:a}}}},Do={provides(t){let e=!1;H.matchMedia&&(e=H.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},zo=[Nr,Ao,Po,So,ko,To,Fo,_o,Ro,Do,jo];Vr(zo,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;const Xt=T.parse;T.findIconDefinition;T.toHtml;const Uo=T.icon;T.layer;T.text;T.counter;var Wo={};function qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function Yo(t){if(Array.isArray(t))return t}function $o(t){if(Array.isArray(t))return qt(t)}function Y(t,e,n){return(e=Qo(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ho(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Go(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,o,s,i=[],f=!0,c=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(f=(a=o.call(n)).done)&&(i.push(a.value),i.length!==e);f=!0);}catch(u){c=!0,r=u}finally{try{if(!f&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return i}}function Bo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ve(Object(n),!0).forEach(function(a){Y(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Vo(t,e){if(t==null)return{};var n,a,r=Xo(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Xo(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function Xe(t,e){return Yo(t)||Go(t,e)||Ln(t,e)||Bo()}function Qt(t){return $o(t)||Ho(t)||Ln(t)||Ko()}function qo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qo(t){var e=qo(t,"string");return typeof e=="symbol"?e:e+""}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function Ln(t,e){if(t){if(typeof t=="string")return qt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qt(t,e):void 0}}var Jo="7.0.0-alpha1",Jt;try{var Zo=require("@fortawesome/fontawesome-svg-core/package.json");Jt=Zo.version}catch{Jt=Wo.FA_VERSION||"7.0.0-alpha8"}function ts(t){var e=t.beat,n=t.fade,a=t.beatFade,r=t.bounce,o=t.shake,s=t.flash,i=t.spin,f=t.spinPulse,c=t.spinReverse,u=t.pulse,p=t.fixedWidth,m=t.inverse,b=t.border,O=t.listItem,S=t.flip,v=t.size,h=t.rotation,w=t.pull,g=t.swapOpacity,x=t.rotateBy,P=t.widthAuto,C=es(Jt,Jo),A=Y(Y(Y(Y(Y(Y({"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":o,"fa-flash":s,"fa-spin":i,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":p,"fa-inverse":m,"fa-border":b,"fa-li":O,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},"fa-".concat(v),typeof v<"u"&&v!==null),"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),"fa-pull-".concat(w),typeof w<"u"&&w!==null),"fa-swap-opacity",g),"fa-rotate-by",C&&x),"fa-width-auto",C&&P);return Object.keys(A).map(function(M){return A[M]?M:null}).filter(function(M){return M})}function es(t,e){for(var n=t.split("-"),a=Xe(n,2),r=a[0],o=a[1],s=e.split("-"),i=Xe(s,2),f=i[0],c=i[1],u=r.split("."),p=f.split("."),m=0;m<Math.max(u.length,p.length);m++){var b=u[m]||"0",O=p[m]||"0",S=parseInt(b,10),v=parseInt(O,10);if(S!==v)return S>v}for(var h=0;h<Math.max(u.length,p.length);h++){var w=u[h]||"0",g=p[h]||"0";if(w!==g&&w.length!==g.length)return w.length<g.length}return!(o&&!c)}function ns(t){return t=t-0,t===t}function Rn(t){return ns(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var as=["style"];function rs(t){return t.charAt(0).toUpperCase()+t.slice(1)}function os(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Rn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[rs(r)]=o:e[r]=o,e},{})}function Dn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return Dn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var u=e.attributes[c];switch(c){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=os(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[Rn(c)]=u}return f},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=Vo(n,as);return r.attrs.style=_(_({},r.attrs.style),s),t.apply(void 0,[e.tag,_(_({},r.attrs),i)].concat(Qt(a)))}var jn=!1;try{jn=!0}catch{}function ss(){if(!jn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qe(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xt.icon)return Xt.icon(t);if(t===null)return null;if(t&&xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Tt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Y({},t,e):{}}var Qe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},ge=Je.forwardRef(function(t,e){var n=_(_({},Qe),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,f=n.titleId,c=n.maskId,u=qe(a),p=Tt("classes",[].concat(Qt(ts(n)),Qt((s||"").split(" ")))),m=Tt("transform",typeof n.transform=="string"?Xt.transform(n.transform):n.transform),b=Tt("mask",qe(r)),O=Uo(u,_(_(_(_({},p),m),b),{},{symbol:o,title:i,titleId:f,maskId:c}));if(!O)return ss("Could not find icon",u),null;var S=O.abstract,v={ref:e};return Object.keys(n).forEach(function(h){Qe.hasOwnProperty(h)||(v[h]=n[h])}),is(S[0],v)});ge.displayName="FontAwesomeIcon";ge.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),rotateBy:y.bool,shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool,widthAuto:y.bool};var is=Dn.bind(null,Je.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Es={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Ns={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},ls={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ms={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ts={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Fs={prefix:"fas",iconName:"clock-rotate-left",icon:[512,512,["history"],"f1da","M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"]},_s={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},zn=({color:t,...e})=>{const n=Xn();return K(ge,{icon:ls,size:"sm",css:Vn({color:t==="primary"?n.palette.primary.main:"inherit"},"",""),...e})};zn.__docgenInfo={description:"",methods:[],displayName:"DownArrow",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};const cs=({fullName:t,children:e})=>{const[n,a]=I.useState(null),r=!!n,o=i=>{a(i.currentTarget)},s=()=>{a(null)};return be(Gn,{children:[be(qn,{onClick:o,width:"max-content",direction:"row",alignItems:"center",spacing:1,sx:{cursor:"pointer"},children:[K(Bn,{variant:"h6",sx:{display:{xs:"none",sm:"block"},maxWidth:{sm:"7rem",md:"16rem"},overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},title:t,children:t}),K(xa,{variant:"circular-outlined",sx:{width:32,height:32,borderColor:"inherit"},children:K(Kn,{color:"inherit"})}),K(oa,{"aria-label":"user-profile",color:"inherit",children:K(zn,{rotation:r?180:void 0,size:"sm"})})]}),K(ja,{anchorEl:n,id:"user-profile-menu",open:r,onClose:s,onClick:s,MenuListProps:{component:"div",sx:{padding:0}},slotProps:{paper:{sx:{padding:2.5,border:"1px solid #8D99E270",width:300,filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))"}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e})]})};cs.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{xa as A,zn as D,ge as F,wa as L,ja as M,cs as U,Es as a,Ms as b,_s as c,Oa as d,Fs as e,Ns as f,Ts as g,ls as h};
