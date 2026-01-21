import{j as $,a as re,F as wn}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as ct,R as Re}from"./index-Dl6G-zuu.js";import{c as Pn}from"./Text-DnbGH9ax.js";import{U as Sn}from"./UserIcon-B0AVfc7u.js";import{a as st,_ as N,t as kn}from"./identifier-CCo8HfxA.js";import{P as g}from"./index-BfyspvgH.js";import{u as On}from"./useTheme-DC9e96ys.js";import{S as In}from"./FlexBox-owEKTX38.js";import{g as Cn,s as Gt,c as En,a as Nn}from"./styled-DiVYluCu.js";import{c as Tn}from"./createSvgIcon-CxivGeKF.js";import{j as it}from"./jsx-runtime-DMAvRu52.js";import{g as _n}from"./generateUtilityClasses-CRyAR7Z0.js";import{r as Fn,m as Mn,b as Ln}from"./Popover-Cw1e4M6S.js";import{u as Rn}from"./TransitionGroupContext-fPiqodp5.js";import{u as jn}from"./DefaultPropsProvider-BrPVfFhn.js";import{I as zn}from"./IconButton-DNsjTpj4.js";import{M as Dn}from"./Menu-Dbz-agEj.js";const Un=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Wn=["component","slots","slotProps"],Yn=["component"];function $n(t,e){const{className:n,elementType:a,ownerState:r,externalForwardedProps:o,getSlotOwnerState:s,internalForwardedProps:i}=e,u=st(e,Un),{component:f,slots:c={[t]:void 0},slotProps:p={[t]:void 0}}=o,m=st(o,Wn),b=c[t]||a,P=Fn(p[t],r),A=Mn(N({className:n},u,{externalForwardedProps:t==="root"?m:void 0,externalSlotProps:P})),{props:{component:h},internalRef:y}=A,v=st(A.props,Yn),w=Rn(y,P==null?void 0:P.ref,e.ref),S=s?s(v):{},O=N({},r,S),F=t==="root"?h||f:h,C=Ln(b,N({},t==="root"&&!f&&!c[t]&&i,t!=="root"&&!c[t]&&i,v,F&&{as:F},{ref:w}),O);return Object.keys(S).forEach(j=>{delete C[j]}),[b,C]}const Hn=Tn(it.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Gn(t){return Cn("MuiAvatar",t)}_n("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Bn=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Xn=t=>{const{classes:e,variant:n,colorDefault:a}=t;return Nn({root:["root",n,a&&"colorDefault"],img:["img"],fallback:["fallback"]},Gn,e)},Vn=Gt("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:N({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:N({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),qn=Gt("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Kn=Gt(Hn,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function Qn({crossOrigin:t,referrerPolicy:e,src:n,srcSet:a}){const[r,o]=ct.useState(!1);return ct.useEffect(()=>{if(!n&&!a)return;o(!1);let s=!0;const i=new Image;return i.onload=()=>{s&&o("loaded")},i.onerror=()=>{s&&o("error")},i.crossOrigin=t,i.referrerPolicy=e,i.src=n,a&&(i.srcset=a),()=>{s=!1}},[t,e,n,a]),r}const Jn=ct.forwardRef(function(e,n){const a=jn({props:e,name:"MuiAvatar"}),{alt:r,children:o,className:s,component:i="div",slots:u={},slotProps:f={},imgProps:c,sizes:p,src:m,srcSet:b,variant:P="circular"}=a,A=st(a,Bn);let h=null;const y=Qn(N({},c,{src:m,srcSet:b})),v=m||b,w=v&&y!=="error",S=N({},a,{colorDefault:!w,component:i,variant:P}),O=Xn(S),[F,C]=$n("img",{className:O.img,elementType:qn,externalForwardedProps:{slots:u,slotProps:{img:N({},c,f.img)}},additionalProps:{alt:r,src:m,srcSet:b,sizes:p},ownerState:S});return w?h=it.jsx(F,N({},C)):o||o===0?h=o:v&&r?h=r[0]:h=it.jsx(Kn,{ownerState:S,className:O.fallback}),it.jsx(Vn,N({as:i,ownerState:S,className:En(O.root,s),ref:n},A,{children:h}))});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Zn(t,e,n){return(e=ea(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?oe(Object(n),!0).forEach(function(a){Zn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ta(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ea(t){var e=ta(t,"string");return typeof e=="symbol"?e:e+""}const se=()=>{};let Bt={},je={},ze=null,De={mark:se,measure:se};try{typeof window<"u"&&(Bt=window),typeof document<"u"&&(je=document),typeof MutationObserver<"u"&&(ze=MutationObserver),typeof performance<"u"&&(De=performance)}catch{}const{userAgent:ie=""}=Bt.navigator||{},U=Bt,x=je,le=ze,rt=De;U.document;const R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Ue=~ie.indexOf("MSIE")||~ie.indexOf("Trident/");var na=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,We={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ra={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ye=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",pt="duotone",oa="sharp",sa="sharp-duotone",$e=[k,pt,oa,sa],ia={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},la={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},fa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ca={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ua=["fak","fa-kit","fakd","fa-kit-duotone"],fe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},da=["kit"],ma={kit:{"fa-kit":"fak"}},pa=["fak","fakd"],ga={kit:{fak:"fa-kit"}},ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ha=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ba=["fak","fa-kit","fakd","fa-kit-duotone"],ya={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},va={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},kt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Aa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ot=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ha,...Aa],wa=["solid","regular","light","thin","duotone","brands"],He=[1,2,3,4,5,6,7,8,9,10],Pa=He.concat([11,12,13,14,15,16,17,18,19,20]),Sa=[...Object.keys(xa),...wa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(He.map(t=>"".concat(t,"x"))).concat(Pa.map(t=>"w-".concat(t))),ka={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const M="___FONT_AWESOME___",It=16,Ge="fa",Be="svg-inline--fa",G="data-fa-i2svg",Ct="data-fa-pseudo-element",Oa="data-fa-pseudo-element-pending",Xt="data-prefix",Vt="data-icon",ue="fontawesome-i2svg",Ia="async",Ca=["HTML","HEAD","STYLE","SCRIPT"],Xe=(()=>{try{return!0}catch{return!1}})();function nt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[k]}})}const Ve=l({},We);Ve[k]=l(l(l(l({},{"fa-duotone":"duotone"}),We[k]),fe.kit),fe["kit-duotone"]);const Ea=nt(Ve),Et=l({},ca);Et[k]=l(l(l(l({},{duotone:"fad"}),Et[k]),ce.kit),ce["kit-duotone"]);const de=nt(Et),Nt=l({},kt);Nt[k]=l(l({},Nt[k]),ga.kit);const qt=nt(Nt),Tt=l({},va);Tt[k]=l(l({},Tt[k]),ma.kit);nt(Tt);const Na=na,qe="fa-layers-text",Ta=aa,_a=l({},ia);nt(_a);const Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=ra,Ma=[...da,...Sa],J=U.FontAwesomeConfig||{};function La(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ra(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ra(La(n));r!=null&&(J[a]=r)});const Ke={styleDefault:"solid",familyDefault:k,cssPrefix:Ge,replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);const q=l(l({},Ke),J);q.autoReplaceSvg||(q.observeMutations=!1);const d={};Object.keys(Ke).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){q[t]=e,Z.forEach(n=>n(d))},get:function(){return q[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,Z.forEach(e=>e(d))},get:function(){return q.cssPrefix}});U.FontAwesomeConfig=d;const Z=[];function ja(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const z=It,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function za(t){if(!t||!R)return;const e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return x.head.insertBefore(e,a),t}const Da="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,e="";for(;t-- >0;)e+=Da[Math.random()*62|0];return e}function K(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Qe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Qe(t[n]),'" '),"").trim()}function gt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function Wa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Ya(t){let{transform:e,width:n=It,height:a=It,startCentered:r=!1}=t,o="";return r&&Ue?o+="translate(".concat(e.x/z-n/2,"em, ").concat(e.y/z-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):o+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),o+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var $a=`:root, :host {
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
}`;function Je(){const t=Ge,e=Be,n=d.cssPrefix,a=d.replacementClass;let r=$a;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let me=!1;function xt(){d.autoAddCss&&!me&&(za(Je()),me=!0)}var Ha={mixout(){return{dom:{css:Je,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const L=U||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var _=L[M];const Ze=[],tn=function(){x.removeEventListener("DOMContentLoaded",tn),ut=1,Ze.map(t=>t())};let ut=!1;R&&(ut=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ut||x.addEventListener("DOMContentLoaded",tn));function Ga(t){R&&(ut?setTimeout(t,0):Ze.push(t))}function at(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Qe(t):"<".concat(e," ").concat(Ua(n),">").concat(a.map(at).join(""),"</").concat(e,">")}function pe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var At=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,u,f,c;for(a===void 0?(u=1,c=e[o[0]]):(u=0,c=a);u<s;u++)f=o[u],c=i(c,e[f],f,e);return c};function Ba(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function _t(t){const e=Ba(t);return e.length===1?e[0].toString(16):null}function Xa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ge(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ft(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ge(e);typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(t,ge(e)):_.styles[t]=l(l({},_.styles[t]||{}),r),t==="fas"&&Ft("fa",e)}const{styles:et,shims:Va}=_,en=Object.keys(qt),qa=en.reduce((t,e)=>(t[e]=Object.keys(qt[e]),t),{});let Jt=null,nn={},an={},rn={},on={},sn={};function Ka(t){return~Ma.indexOf(t)}function Qa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ka(r)?r:null}const ln=()=>{const t=a=>At(et,(r,o,s)=>(r[s]=At(o,a,{}),r),{});nn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),an=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),sn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in et||d.autoFetchSvg,n=At(Va,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});rn=n.names,on=n.unicodes,Jt=ht(d.styleDefault,{family:d.familyDefault})};ja(t=>{Jt=ht(t.styleDefault,{family:d.familyDefault})});ln();function Zt(t,e){return(nn[t]||{})[e]}function Ja(t,e){return(an[t]||{})[e]}function H(t,e){return(sn[t]||{})[e]}function fn(t){return rn[t]||{prefix:null,iconName:null}}function Za(t){const e=on[t],n=Zt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return Jt}const cn=()=>({prefix:null,iconName:null,rest:[]});function tr(t){let e=k;const n=en.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return $e.forEach(a=>{(t.includes(n[a])||t.some(r=>qa[a].includes(r)))&&(e=a)}),e}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=k}=e,a=Ea[n][t];if(n===pt&&!t)return"fad";const r=de[n][t]||de[n][a],o=t in _.styles?t:null;return r||o||null}function er(t){let e=[],n=null;return t.forEach(a=>{const r=Qa(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function he(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Ot.concat(ba),o=he(t.filter(p=>r.includes(p))),s=he(t.filter(p=>!Ot.includes(p))),i=o.filter(p=>(a=p,!Ye.includes(p))),[u=null]=i,f=tr(o),c=l(l({},er(s)),{},{prefix:ht(u,{family:f})});return l(l(l({},c),or({values:t,family:f,styles:et,config:d,canonical:c,givenPrefix:a})),nr(n,a,c))}function nr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?fn(r):{},s=H(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!et.far&&et.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ar=$e.filter(t=>t!==k||t!==pt),rr=Object.keys(kt).filter(t=>t!==k).map(t=>Object.keys(kt[t])).flat();function or(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===pt,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",c=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(u||f||c)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ar.includes(n)&&(Object.keys(o).find(m=>rr.includes(m))||s.autoFetchSvg)){const m=fa.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=W()||"fas"),a}class sr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Ft(o,r[o]);const s=qt[k][o];s&&Ft(s,r[o]),ln()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],u=i[2];e[o]||(e[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[o][f]=i)}),e[o][s]=i}),e}}let be=[],X={};const V={},ir=Object.keys(V);function lr(t,e){let{mixoutsTo:n}=e;return be=t,X={},Object.keys(V).forEach(a=>{ir.indexOf(a)===-1&&delete V[a]}),be.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{X[s]||(X[s]=[]),X[s].push(o[s])})}a.provides&&a.provides(V)}),n}function Mt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(X[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function B(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(X[t]||[]).forEach(o=>{o.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Lt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||W();if(e)return e=H(n,e)||e,pe(un.definitions,n,e)||pe(_.styles,n,e)}const un=new sr,fr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,B("noAuto")},cr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(B("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ga(()=>{dr({autoReplaceSvgRoot:e}),B("watch",t)})}},ur={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ht(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Na))){const e=bt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=W();return{prefix:e,iconName:H(e,t)||t}}}},I={noAuto:fr,config:d,dom:cr,parse:ur,library:un,findIconDefinition:Lt,toHtml:at},dr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=x}=t;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&I.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>at(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=x.createElement("div");return n.innerHTML=t.html,n.children}}),t}function mr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Qt(s)&&n.found&&!a.found){const{width:i,height:u}=n,f={x:i/u/2,y:.5};r.style=gt(l(l({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function pr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:u,titleId:f,extra:c,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,P=pa.includes(a),A=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(O=>c.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(c.classes).join(" ");let h={children:[],attributes:l(l({},c.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const y=P&&!~c.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(h.attributes[G]=""),i&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||tt())},children:[i]}),delete h.attributes.title);const v=l(l({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:o,symbol:s,styles:l(l({},y),c.styles)}),{children:w,attributes:S}=n.found&&e.found?Y("generateAbstractMask",v)||{children:[],attributes:{}}:Y("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=w,v.attributes=S,s?pr(v):mr(v)}function ye(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,u=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(u[G]="");const f=l({},s.styles);Qt(r)&&(f.transform=Ya({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const c=gt(f);c.length>0&&(u.style=c);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function gr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=gt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:wt}=_;function Rt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const hr={found:!1,width:512,height:512};function br(t,e){!Xe&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=W()),new Promise((a,r)=>{if(n==="fa"){const o=fn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){const o=wt[e][t];return a(Rt(o))}br(t,e),a(l(l({},hr),{},{icon:d.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const ve=()=>{},zt=d.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:ve,measure:ve},Q='FA "6.7.2"',yr=t=>(zt.mark("".concat(Q," ").concat(t," begins")),()=>dn(t)),dn=t=>{zt.mark("".concat(Q," ").concat(t," ends")),zt.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))};var ee={begin:yr,end:dn};const lt=()=>{};function xe(t){return typeof(t.getAttribute?t.getAttribute(G):null)=="string"}function vr(t){const e=t.getAttribute?t.getAttribute(Xt):null,n=t.getAttribute?t.getAttribute(Vt):null;return e&&n}function xr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ar(){return d.autoReplaceSvg===!0?ft.replace:ft[d.autoReplaceSvg]||ft.replace}function wr(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Pr(t){return x.createElement(t)}function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?wr:Pr}=e;if(typeof t=="string")return x.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(mn(o,{ceFn:n}))}),a}function Sr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(mn(n),e)}),e.getAttribute(G)===null&&d.keepOriginalSource){let n=x.createComment(Sr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kt(e).indexOf(d.replacementClass))return ft.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>at(o)).join(`
`);e.setAttribute(G,""),e.innerHTML=r}};function Ae(t){t()}function pn(t,e){const n=typeof e=="function"?e:lt;if(t.length===0)n();else{let a=Ae;d.mutateApproach===Ia&&(a=U.requestAnimationFrame||Ae),a(()=>{const r=Ar(),o=ee.begin("mutate");t.map(r),o(),n()})}}let ne=!1;function gn(){ne=!0}function Dt(){ne=!1}let dt=null;function we(t){if(!le||!d.observeMutations)return;const{treeCallback:e=lt,nodeCallback:n=lt,pseudoElementsCallback:a=lt,observeMutationsRoot:r=x}=t;dt=new le(o=>{if(ne)return;const s=W();K(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!xe(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&xe(i.target)&&~Fa.indexOf(i.attributeName))if(i.attributeName==="class"&&vr(i.target)){const{prefix:u,iconName:f}=bt(Kt(i.target));i.target.setAttribute(Xt,u||s),f&&i.target.setAttribute(Vt,f)}else xr(i.target)&&n(i.target)})}),R&&dt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function kr(){dt&&dt.disconnect()}function Or(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Ir(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=bt(Kt(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ja(r.prefix,t.innerText)||Zt(r.prefix,_t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Cr(t){const e=K(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||tt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Er(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ir(t),o=Cr(t),s=Mt("parseNodeAttributes",{},t);let i=e.styleParser?Or(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:Nr}=_;function hn(t){const e=d.autoReplaceSvg==="nest"?Pe(t,{styleParser:!1}):Pe(t);return~e.extra.classes.indexOf(qe)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function Tr(){return[...ua,...Ot]}function Se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=x.documentElement.classList,a=c=>n.add("".concat(ue,"-").concat(c)),r=c=>n.remove("".concat(ue,"-").concat(c)),o=d.autoFetchSvg?Tr():Ye.concat(Object.keys(Nr));o.includes("fa")||o.push("fa");const s=[".".concat(qe,":not([").concat(G,"])")].concat(o.map(c=>".".concat(c,":not([").concat(G,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=K(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const u=ee.begin("onTree"),f=i.reduce((c,p)=>{try{const m=hn(p);m&&c.push(m)}catch(m){Xe||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise((c,p)=>{Promise.all(f).then(m=>{pn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),c()})}).catch(m=>{u(),p(m)})})}function _r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(n=>{n&&pn([n],e)})}function Fr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Lt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Lt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Mr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:u=[],attributes:f={},styles:c={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return yt(l({type:"icon"},t),()=>(B("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||tt()):(f["aria-hidden"]="true",f.focusable="false")),te({icons:{main:Rt(b),mask:r?Rt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},T),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:f,styles:c,classes:u}})))};var Lr={mixout(){return{icon:Fr(Mr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Se,t.nodeCallback=_r,t}}},provides(t){t.i2svg=function(e){const{node:n=x,callback:a=()=>{}}=e;return Se(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:u,mask:f,maskId:c,extra:p}=n;return new Promise((m,b)=>{Promise.all([jt(a,s),f.iconName?jt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[A,h]=P;m([e,te({icons:{main:A,mask:h},prefix:s,iconName:a,transform:i,symbol:u,maskId:c,title:r,titleId:o,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=gt(s);i.length>0&&(a.style=i);let u;return Qt(o)&&(u=Y("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Rr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{B("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},jr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return yt({type:"counter",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),gr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},zr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return yt({type:"text",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),ye({content:t,transform:l(l({},T),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(Ue){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,i=f.height/u}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,ye({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Dr=new RegExp('"',"ug"),ke=[1105920,1112319],Oe=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),la),ka),ya),Ut=Object.keys(Oe).reduce((t,e)=>(t[e.toLowerCase()]=Oe[e],t),{}),Ur=Object.keys(Ut).reduce((t,e)=>{const n=Ut[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Wr(t){const e=t.replace(Dr,""),n=Xa(e,0),a=n>=ke[0]&&n<=ke[1],r=e.length===2?e[0]===e[1]:!1;return{value:_t(r?e[0]:e),isSecondary:a||r}}function Yr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ut[n]||{})[r]||Ur[n]}function Ie(t,e){const n="".concat(Oa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=K(t.children).filter(m=>m.getAttribute(Ct)===e)[0],i=U.getComputedStyle(t,e),u=i.getPropertyValue("font-family"),f=u.match(Ta),c=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&p!=="none"&&p!==""){const m=i.getPropertyValue("content");let b=Yr(u,c);const{value:P,isSecondary:A}=Wr(m),h=f[0].startsWith("FontAwesome");let y=Zt(b,P),v=y;if(h){const w=Za(P);w.iconName&&w.prefix&&(y=w.iconName,b=w.prefix)}if(y&&!A&&(!s||s.getAttribute(Xt)!==b||s.getAttribute(Vt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const w=Er(),{extra:S}=w;S.attributes[Ct]=e,jt(y,b).then(O=>{const F=te(l(l({},w),{},{icons:{main:O,mask:cn()},prefix:b,iconName:v,extra:S,watchable:!0})),C=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=F.map(j=>at(j)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function $r(t){return Promise.all([Ie(t,"::before"),Ie(t,"::after")])}function Hr(t){return t.parentNode!==document.head&&!~Ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ct)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ce(t){if(R)return new Promise((e,n)=>{const a=K(t.querySelectorAll("*")).filter(Hr).map($r),r=ee.begin("searchPseudoElements");gn(),Promise.all(a).then(()=>{r(),Dt(),e()}).catch(()=>{r(),Dt(),n()})})}var Gr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ce,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=x}=e;d.searchPseudoElements&&Ce(n)}}};let Ee=!1;var Br={mixout(){return{dom:{unwatch(){gn(),Ee=!0}}}},hooks(){return{bootstrap(){we(Mt("mutationObserverCallbacks",{}))},noAuto(){kr()},watch(t){const{observeMutationsRoot:e}=t;Ee?Dt():we(Mt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ne=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Xr={mixout(){return{parse:{transform:t=>Ne(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ne(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(i," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:c,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function Te(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vr(t){return t.tag==="g"?t.children:[t]}var qr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?bt(n.split(" ").map(r=>r.trim())):cn();return a.prefix||(a.prefix=W()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:u,icon:f}=r,{width:c,icon:p}=o,m=Wa({transform:i,containerWidth:c,iconWidth:u}),b={tag:"rect",attributes:l(l({},Pt),{},{fill:"white"})},P=f.children?{children:f.children.map(Te)}:{},A={tag:"g",attributes:l({},m.inner),children:[Te(l({tag:f.tag,attributes:l(l({},f.attributes),m.path)},P))]},h={tag:"g",attributes:l({},m.outer),children:[A]},y="mask-".concat(s||tt()),v="clip-".concat(s||tt()),w={tag:"mask",attributes:l(l({},Pt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Vr(p)},w]};return n.push(S,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Pt)}),{children:n,attributes:a}}}},Kr={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Jr=[Ha,Lr,Rr,jr,zr,Gr,Br,Xr,qr,Kr,Qr];lr(Jr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;const Wt=I.parse;I.findIconDefinition;I.toHtml;const Zr=I.icon;I.layer;I.text;I.counter;var to={};function Yt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function eo(t){if(Array.isArray(t))return t}function no(t){if(Array.isArray(t))return Yt(t)}function D(t,e,n){return(e=co(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ao(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ro(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,o,s,i=[],u=!0,f=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(u=(a=o.call(n)).done)&&(i.push(a.value),i.length!==e);u=!0);}catch(c){f=!0,r=c}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return i}}function oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function so(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(a){D(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function io(t,e){if(t==null)return{};var n,a,r=lo(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function lo(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function Fe(t,e){return eo(t)||ro(t,e)||bn(t,e)||oo()}function $t(t){return no(t)||ao(t)||bn(t)||so()}function fo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function co(t){var e=fo(t,"string");return typeof e=="symbol"?e:e+""}function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mt(t)}function bn(t,e){if(t){if(typeof t=="string")return Yt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yt(t,e):void 0}}var uo="7.0.0",Ht;try{var mo=require("@fortawesome/fontawesome-svg-core/package.json");Ht=mo.version}catch{Ht=typeof process<"u"&&to.FA_VERSION||"7.0.0"}function po(t){var e=t.beat,n=t.fade,a=t.beatFade,r=t.bounce,o=t.shake,s=t.flash,i=t.spin,u=t.spinPulse,f=t.spinReverse,c=t.pulse,p=t.fixedWidth,m=t.inverse,b=t.border,P=t.listItem,A=t.flip,h=t.size,y=t.rotation,v=t.pull,w=t.swapOpacity,S=t.rotateBy,O=t.widthAuto,F=go(Ht,uo),C=D(D(D(D(D(D({"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":o,"fa-flash":s,"fa-spin":i,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":p,"fa-inverse":m,"fa-border":b,"fa-li":P,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},"fa-".concat(h),typeof h<"u"&&h!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(v),typeof v<"u"&&v!==null),"fa-swap-opacity",w),"fa-rotate-by",F&&S),"fa-width-auto",F&&O);return Object.keys(C).map(function(j){return C[j]?j:null}).filter(function(j){return j})}function go(t,e){for(var n=t.split("-"),a=Fe(n,2),r=a[0],o=a[1],s=e.split("-"),i=Fe(s,2),u=i[0],f=i[1],c=r.split("."),p=u.split("."),m=0;m<Math.max(c.length,p.length);m++){var b=c[m]||"0",P=p[m]||"0",A=parseInt(b,10),h=parseInt(P,10);if(A!==h)return A>h}for(var y=0;y<Math.max(c.length,p.length);y++){var v=c[y]||"0",w=p[y]||"0";if(v!==w&&v.length!==w.length)return v.length<w.length}return!(o&&!f)}function ho(t){return t=t-0,t===t}function yn(t){return ho(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var bo=["style"];function yo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[yo(r)]=o:e[r]=o,e},{})}function vn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return vn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var c=e.attributes[f];switch(f){case"class":u.attrs.className=c,delete e.attributes.class;break;case"style":u.attrs.style=vo(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=c:u.attrs[yn(f)]=c}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=io(n,bo);return r.attrs.style=E(E({},r.attrs.style),s),t.apply(void 0,[e.tag,E(E({},r.attrs),i)].concat($t(a)))}var xn=!1;try{xn=!0}catch{}function xo(){if(!xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Me(t){if(t&&mt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(t&&mt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function St(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?D({},t,e):{}}var Le={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},ae=Re.forwardRef(function(t,e){var n=E(E({},Le),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,u=n.titleId,f=n.maskId,c=Me(a),p=St("classes",[].concat($t(po(n)),$t((s||"").split(" ")))),m=St("transform",typeof n.transform=="string"?Wt.transform(n.transform):n.transform),b=St("mask",Me(r)),P=Zr(c,E(E(E(E({},p),m),b),{},{symbol:o,title:i,titleId:u,maskId:f}));if(!P)return xo("Could not find icon",c),null;var A=P.abstract,h={ref:e};return Object.keys(n).forEach(function(y){Le.hasOwnProperty(y)||(h[y]=n[y])}),Ao(A[0],h)});ae.displayName="FontAwesomeIcon";ae.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),rotateBy:g.bool,shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool,widthAuto:g.bool};var Ao=vn.bind(null,Re.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Wo={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Yo={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},wo={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},$o={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ho={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Go={prefix:"fas",iconName:"clock-rotate-left",icon:[512,512,["history"],"f1da","M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"]},Bo={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},An=({color:t,...e})=>{const n=On();return $(ae,{icon:wo,size:"sm",css:kn({color:t==="primary"?n.palette.primary.main:"inherit"},"",""),...e})};An.__docgenInfo={description:"",methods:[],displayName:"DownArrow",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};const Po=({fullName:t,children:e})=>{const[n,a]=ct.useState(null),r=!!n,o=i=>{a(i.currentTarget)},s=()=>{a(null)};return re(wn,{children:[re(In,{onClick:o,width:"max-content",direction:"row",alignItems:"center",spacing:1,sx:{cursor:"pointer"},children:[$(Pn,{variant:"h6",sx:{display:{xs:"none",sm:"block"},maxWidth:{sm:"7rem",md:"16rem"},overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},title:t,children:t}),$(Jn,{variant:"circular-outlined",sx:{width:32,height:32,borderColor:"inherit"},children:$(Sn,{color:"inherit"})}),$(zn,{"aria-label":"user-profile",color:"inherit",children:$(An,{rotation:r?180:void 0,size:"sm"})})]}),$(Dn,{anchorEl:n,id:"user-profile-menu",open:r,onClose:s,onClick:s,MenuListProps:{component:"div",sx:{padding:0}},slotProps:{paper:{sx:{padding:2.5,width:300,filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))"}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e})]})};Po.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{Jn as A,An as D,ae as F,Po as U,Wo as a,$o as b,Bo as c,Go as d,Ho as e,Yo as f,wo as g,$n as u};
