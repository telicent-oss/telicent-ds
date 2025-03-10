import{_ as ot,b as I,u as vn,j as U,d as xn,a as ne,F as An}from"./DefaultPropsProvider-DFY4ak0N.js";import{R as _e,r as ft}from"./index-BBkUAzwr.js";import{c as wn}from"./Text-CT8Hsbh7.js";import{U as Pn}from"./UserIcon-BBaOMras.js";import{P as p}from"./index-_4_hgnnR.js";import{u as kn}from"./useTheme-BWRXETY3.js";import{S as Sn}from"./FlexBox-BeMizPY2.js";import{g as On,s as Ht,c as Cn,a as En}from"./styled-B_l5QWFX.js";import{c as In}from"./createSvgIcon-CtD0QUEE.js";import{j as st}from"./jsx-runtime-BwZVo4Wn.js";import{g as Nn}from"./generateUtilityClasses-BiAO1vNq.js";import{r as Tn,m as Fn,b as _n}from"./Popover-T-ssfcJQ.js";import{u as Mn}from"./TransitionGroupContext-C9C3ikuq.js";import{I as Ln,M as Rn}from"./Menu-DMXuPVgm.js";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Dn(t,e,n){return(e=zn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ae(Object(n),!0).forEach(function(a){Dn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function jn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zn(t){var e=jn(t,"string");return typeof e=="symbol"?e:e+""}const re=()=>{};let Gt={},Me={},Le=null,Re={mark:re,measure:re};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(Me=document),typeof MutationObserver<"u"&&(Le=MutationObserver),typeof performance<"u"&&(Re=performance)}catch{}const{userAgent:oe=""}=Gt.navigator||{},R=Gt,y=Me,se=Le,at=Re;R.document;const M=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",De=~oe.indexOf("MSIE")||~oe.indexOf("Trident/");var Un=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Yn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,je={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Wn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ze=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S="classic",mt="duotone",Hn="sharp",Gn="sharp-duotone",Ue=[S,mt,Hn,Gn],$n={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Xn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Bn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},qn=["fak","fa-kit","fakd","fa-kit-duotone"],ie={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Kn=["kit"],Qn={kit:{"fa-kit":"fak"}},Jn=["fak","fakd"],Zn={kit:{fak:"fa-kit"}},le={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ea=["fak","fa-kit","fakd","fa-kit-duotone"],na={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},aa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ra={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},kt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},oa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ta,...oa],sa=["solid","regular","light","thin","duotone","brands"],Ye=[1,2,3,4,5,6,7,8,9,10],ia=Ye.concat([11,12,13,14,15,16,17,18,19,20]),la=[...Object.keys(ra),...sa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY].concat(Ye.map(t=>"".concat(t,"x"))).concat(ia.map(t=>"w-".concat(t))),fa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const F="___FONT_AWESOME___",Ot=16,We="fa",He="svg-inline--fa",W="data-fa-i2svg",Ct="data-fa-pseudo-element",ca="data-fa-pseudo-element-pending",$t="data-prefix",Xt="data-icon",fe="fontawesome-i2svg",ua="async",da=["HTML","HEAD","STYLE","SCRIPT"],Ge=(()=>{try{return!0}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[S]}})}const $e=l({},je);$e[S]=l(l(l(l({},{"fa-duotone":"duotone"}),je[S]),ie.kit),ie["kit-duotone"]);const ma=et($e),Et=l({},Vn);Et[S]=l(l(l(l({},{duotone:"fad"}),Et[S]),le.kit),le["kit-duotone"]);const ce=et(Et),It=l({},kt);It[S]=l(l({},It[S]),Zn.kit);const Bt=et(It),Nt=l({},aa);Nt[S]=l(l({},Nt[S]),Qn.kit);et(Nt);const pa=Un,Xe="fa-layers-text",ga=Yn,ha=l({},$n);et(ha);const ba=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt=Wn,ya=[...Kn,...la],Q=R.FontAwesomeConfig||{};function va(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=xa(va(n));r!=null&&(Q[a]=r)});const Be={styleDefault:"solid",familyDefault:S,cssPrefix:We,replacementClass:He,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const V=l(l({},Be),Q);V.autoReplaceSvg||(V.observeMutations=!1);const d={};Object.keys(Be).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){V[t]=e,J.forEach(n=>n(d))},get:function(){return V[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,J.forEach(e=>e(d))},get:function(){return V.cssPrefix}});R.FontAwesomeConfig=d;const J=[];function Aa(t){return J.push(t),()=>{J.splice(J.indexOf(t),1)}}const L=Ot,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wa(t){if(!t||!M)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return y.head.insertBefore(e,a),t}const Pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let t=12,e="";for(;t-- >0;)e+=Pa[Math.random()*62|0];return e}function q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vt(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ve(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ka(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ve(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qt(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Sa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Oa(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,o="";return r&&De?o+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):o+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),o+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Ca=`:root, :host {
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
}`;function qe(){const t=We,e=He,n=d.cssPrefix,a=d.replacementClass;let r=Ca;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let ue=!1;function vt(){d.autoAddCss&&!ue&&(wa(qe()),ue=!0)}var Ea={mixout(){return{dom:{css:qe,insertCss:vt}}},hooks(){return{beforeDOMElementCreation(){vt()},beforeI2svg(){vt()}}}};const _=R||{};_[F]||(_[F]={});_[F].styles||(_[F].styles={});_[F].hooks||(_[F].hooks={});_[F].shims||(_[F].shims=[]);var T=_[F];const Ke=[],Qe=function(){y.removeEventListener("DOMContentLoaded",Qe),ct=1,Ke.map(t=>t())};let ct=!1;M&&(ct=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ct||y.addEventListener("DOMContentLoaded",Qe));function Ia(t){M&&(ct?setTimeout(t,0):Ke.push(t))}function nt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ve(t):"<".concat(e," ").concat(ka(n),">").concat(a.map(nt).join(""),"</").concat(e,">")}function de(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var xt=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,c,f,u;for(a===void 0?(c=1,u=e[o[0]]):(c=0,u=a);c<s;c++)f=o[c],u=i(u,e[f],f,e);return u};function Na(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=Na(t);return e.length===1?e[0].toString(16):null}function Ta(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function me(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ft(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=me(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,me(e)):T.styles[t]=l(l({},T.styles[t]||{}),r),t==="fas"&&Ft("fa",e)}const{styles:tt,shims:Fa}=T,Je=Object.keys(Bt),_a=Je.reduce((t,e)=>(t[e]=Object.keys(Bt[e]),t),{});let Kt=null,Ze={},tn={},en={},nn={},an={};function Ma(t){return~ya.indexOf(t)}function La(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ma(r)?r:null}const rn=()=>{const t=a=>xt(tt,(r,o,s)=>(r[s]=xt(o,a,{}),r),{});Ze=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),tn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),an=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in tt||d.autoFetchSvg,n=xt(Fa,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});en=n.names,nn=n.unicodes,Kt=gt(d.styleDefault,{family:d.familyDefault})};Aa(t=>{Kt=gt(t.styleDefault,{family:d.familyDefault})});rn();function Qt(t,e){return(Ze[t]||{})[e]}function Ra(t,e){return(tn[t]||{})[e]}function Y(t,e){return(an[t]||{})[e]}function on(t){return en[t]||{prefix:null,iconName:null}}function Da(t){const e=nn[t],n=Qt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return Kt}const sn=()=>({prefix:null,iconName:null,rest:[]});function ja(t){let e=S;const n=Je.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return Ue.forEach(a=>{(t.includes(n[a])||t.some(r=>_a[a].includes(r)))&&(e=a)}),e}function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=S}=e,a=ma[n][t];if(n===mt&&!t)return"fad";const r=ce[n][t]||ce[n][a],o=t in T.styles?t:null;return r||o||null}function za(t){let e=[],n=null;return t.forEach(a=>{const r=La(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=St.concat(ea),o=pe(t.filter(g=>r.includes(g))),s=pe(t.filter(g=>!St.includes(g))),i=o.filter(g=>(a=g,!ze.includes(g))),[c=null]=i,f=ja(o),u=l(l({},za(s)),{},{prefix:gt(c,{family:f})});return l(l(l({},u),Ha({values:t,family:f,styles:tt,config:d,canonical:u,givenPrefix:a})),Ua(n,a,u))}function Ua(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?on(r):{},s=Y(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!tt.far&&tt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ya=Ue.filter(t=>t!==S||t!==mt),Wa=Object.keys(kt).filter(t=>t!==S).map(t=>Object.keys(kt[t])).flat();function Ha(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===mt,c=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(c||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ya.includes(n)&&(Object.keys(o).find(m=>Wa.includes(m))||s.autoFetchSvg)){const m=Bn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=Y(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=D()||"fas"),a}class Ga{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Ft(o,r[o]);const s=Bt[S][o];s&&Ft(s,r[o]),rn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],c=i[2];e[o]||(e[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[o][f]=i)}),e[o][s]=i}),e}}let ge=[],$={};const B={},$a=Object.keys(B);function Xa(t,e){let{mixoutsTo:n}=e;return ge=t,$={},Object.keys(B).forEach(a=>{$a.indexOf(a)===-1&&delete B[a]}),ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{$[s]||($[s]=[]),$[s].push(o[s])})}a.provides&&a.provides(B)}),n}function _t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function H(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(o=>{o.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function Mt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||D();if(e)return e=Y(n,e)||e,de(ln.definitions,n,e)||de(T.styles,n,e)}const ln=new Ga,Ba=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,H("noAuto")},Va={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(H("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ia(()=>{Ka({autoReplaceSvgRoot:e}),H("watch",t)})}},qa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:Y(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(pa))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||D(),iconName:Y(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=D();return{prefix:e,iconName:Y(e,t)||t}}}},C={noAuto:Ba,config:d,dom:Va,parse:qa,library:ln,findIconDefinition:Mt,toHtml:nt},Ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&C.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Qa(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(qt(s)&&n.found&&!a.found){const{width:i,height:c}=n,f={x:i/c/2,y:.5};r.style=pt(l(l({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ja(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function Jt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:c,titleId:f,extra:u,watchable:g=!1}=t,{width:m,height:b}=n.found?n:e,w=Jn.includes(a),O=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let h={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const x=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};g&&(h.attributes[W]=""),i&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Z())},children:[i]}),delete h.attributes.title);const v=l(l({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:l(l({},x),u.styles)}),{children:A,attributes:k}=n.found&&e.found?j("generateAbstractMask",v)||{children:[],attributes:{}}:j("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=A,v.attributes=k,s?Ja(v):Qa(v)}function he(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,c=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(c[W]="");const f=l({},s.styles);qt(r)&&(f.transform=Oa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=pt(f);u.length>0&&(c.style=u);const g=[];return g.push({tag:"span",attributes:c,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Za(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=pt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:At}=T;function Lt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const tr={found:!1,width:512,height:512};function er(t,e){!Ge&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=D()),new Promise((a,r)=>{if(n==="fa"){const o=on(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&At[e]&&At[e][t]){const o=At[e][t];return a(Lt(o))}er(t,e),a(l(l({},tr),{},{icon:d.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}const be=()=>{},Dt=d.measurePerformance&&at&&at.mark&&at.measure?at:{mark:be,measure:be},K='FA "6.7.2"',nr=t=>(Dt.mark("".concat(K," ").concat(t," begins")),()=>fn(t)),fn=t=>{Dt.mark("".concat(K," ").concat(t," ends")),Dt.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var Zt={begin:nr,end:fn};const it=()=>{};function ye(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function ar(t){const e=t.getAttribute?t.getAttribute($t):null,n=t.getAttribute?t.getAttribute(Xt):null;return e&&n}function rr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function or(){return d.autoReplaceSvg===!0?lt.replace:lt[d.autoReplaceSvg]||lt.replace}function sr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function ir(t){return y.createElement(t)}function cn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?sr:ir}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(cn(o,{ceFn:n}))}),a}function lr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const lt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(cn(n),e)}),e.getAttribute(W)===null&&d.keepOriginalSource){let n=y.createComment(lr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Vt(e).indexOf(d.replacementClass))return lt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>nt(o)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function ve(t){t()}function un(t,e){const n=typeof e=="function"?e:it;if(t.length===0)n();else{let a=ve;d.mutateApproach===ua&&(a=R.requestAnimationFrame||ve),a(()=>{const r=or(),o=Zt.begin("mutate");t.map(r),o(),n()})}}let te=!1;function dn(){te=!0}function jt(){te=!1}let ut=null;function xe(t){if(!se||!d.observeMutations)return;const{treeCallback:e=it,nodeCallback:n=it,pseudoElementsCallback:a=it,observeMutationsRoot:r=y}=t;ut=new se(o=>{if(te)return;const s=D();q(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!ye(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&ye(i.target)&&~ba.indexOf(i.attributeName))if(i.attributeName==="class"&&ar(i.target)){const{prefix:c,iconName:f}=ht(Vt(i.target));i.target.setAttribute($t,c||s),f&&i.target.setAttribute(Xt,f)}else rr(i.target)&&n(i.target)})}),M&&ut.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fr(){ut&&ut.disconnect()}function cr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function ur(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Vt(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ra(r.prefix,t.innerText)||Qt(r.prefix,Tt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function dr(t){const e=q(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Z()):(e["aria-hidden"]="true",e.focusable="false")),e}function mr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=ur(t),o=dr(t),s=_t("parseNodeAttributes",{},t);let i=e.styleParser?cr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:pr}=T;function mn(t){const e=d.autoReplaceSvg==="nest"?Ae(t,{styleParser:!1}):Ae(t);return~e.extra.classes.indexOf(Xe)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}function gr(){return[...qn,...St]}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(fe,"-").concat(u)),r=u=>n.remove("".concat(fe,"-").concat(u)),o=d.autoFetchSvg?gr():ze.concat(Object.keys(pr));o.includes("fa")||o.push("fa");const s=[".".concat(Xe,":not([").concat(W,"])")].concat(o.map(u=>".".concat(u,":not([").concat(W,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=q(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Zt.begin("onTree"),f=i.reduce((u,g)=>{try{const m=mn(g);m&&u.push(m)}catch(m){Ge||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,g)=>{Promise.all(f).then(m=>{un(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),g(m)})})}function hr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mn(t).then(n=>{n&&un([n],e)})}function br(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Mt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Mt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const yr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:m,icon:b}=t;return bt(l({type:"icon"},t),()=>(H("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||Z()):(f["aria-hidden"]="true",f.focusable="false")),Jt({icons:{main:Lt(b),mask:r?Lt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:l(l({},N),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:f,styles:u,classes:c}})))};var vr={mixout(){return{icon:br(yr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=we,t.nodeCallback=hr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return we(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:c,mask:f,maskId:u,extra:g}=n;return new Promise((m,b)=>{Promise.all([Rt(a,s),f.iconName?Rt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[O,h]=w;m([e,Jt({icons:{main:O,mask:h},prefix:s,iconName:a,transform:i,symbol:c,maskId:u,title:r,titleId:o,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=pt(s);i.length>0&&(a.style=i);let c;return qt(o)&&(c=j("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},xr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ar={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return bt({type:"counter",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:e}),Za({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},wr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=N,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return bt({type:"text",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:e}),he({content:t,transform:l(l({},N),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(De){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,i=f.height/c}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,he({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Pr=new RegExp('"',"ug"),Pe=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Xn),fa),na),zt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),kr=Object.keys(zt).reduce((t,e)=>{const n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Sr(t){const e=t.replace(Pr,""),n=Ta(e,0),a=n>=Pe[0]&&n<=Pe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function Or(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||kr[n]}function Se(t,e){const n="".concat(ca).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=q(t.children).filter(m=>m.getAttribute(Ct)===e)[0],i=R.getComputedStyle(t,e),c=i.getPropertyValue("font-family"),f=c.match(ga),u=i.getPropertyValue("font-weight"),g=i.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&g!=="none"&&g!==""){const m=i.getPropertyValue("content");let b=Or(c,u);const{value:w,isSecondary:O}=Sr(m),h=f[0].startsWith("FontAwesome");let x=Qt(b,w),v=x;if(h){const A=Da(w);A.iconName&&A.prefix&&(x=A.iconName,b=A.prefix)}if(x&&!O&&(!s||s.getAttribute($t)!==b||s.getAttribute(Xt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const A=mr(),{extra:k}=A;k.attributes[Ct]=e,Rt(x,b).then(P=>{const G=Jt(l(l({},A),{},{icons:{main:P,mask:sn()},prefix:b,iconName:v,extra:k,watchable:!0})),z=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=G.map(yn=>nt(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Cr(t){return Promise.all([Se(t,"::before"),Se(t,"::after")])}function Er(t){return t.parentNode!==document.head&&!~da.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ct)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Oe(t){if(M)return new Promise((e,n)=>{const a=q(t.querySelectorAll("*")).filter(Er).map(Cr),r=Zt.begin("searchPseudoElements");dn(),Promise.all(a).then(()=>{r(),jt(),e()}).catch(()=>{r(),jt(),n()})})}var Ir={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Oe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;d.searchPseudoElements&&Oe(n)}}};let Ce=!1;var Nr={mixout(){return{dom:{unwatch(){dn(),Ce=!0}}}},hooks(){return{bootstrap(){xe(_t("mutationObserverCallbacks",{}))},noAuto(){fr()},watch(t){const{observeMutationsRoot:e}=t;Ce?jt():xe(_t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ee=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Tr={mixout(){return{parse:{transform:t=>Ee(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ee(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(c," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:u,path:g};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const wt={x:0,y:0,width:"100%",height:"100%"};function Ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Fr(t){return t.tag==="g"?t.children:[t]}var _r={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):sn();return a.prefix||(a.prefix=D()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:c,icon:f}=r,{width:u,icon:g}=o,m=Sa({transform:i,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:l(l({},wt),{},{fill:"white"})},w=f.children?{children:f.children.map(Ie)}:{},O={tag:"g",attributes:l({},m.inner),children:[Ie(l({tag:f.tag,attributes:l(l({},f.attributes),m.path)},w))]},h={tag:"g",attributes:l({},m.outer),children:[O]},x="mask-".concat(s||Z()),v="clip-".concat(s||Z()),A={tag:"mask",attributes:l(l({},wt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Fr(g)},A]};return n.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},wt)}),{children:n,attributes:a}}}},Mr={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Lr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Rr=[Ea,vr,xr,Ar,wr,Ir,Nr,Tr,_r,Mr,Lr];Xa(Rr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Ut=C.parse;C.findIconDefinition;C.toHtml;const Dr=C.icon;C.layer;C.text;C.counter;function Ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function zr(t,e){if(t==null)return{};var n=jr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Ur(t)||Yr(t)||Wr(t)||Hr()}function Ur(t){if(Array.isArray(t))return Wt(t)}function Yr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wr(t,e){if(t){if(typeof t=="string")return Wt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wt(t,e)}}function Wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,c=t.spin,f=t.spinPulse,u=t.spinReverse,g=t.pulse,m=t.fixedWidth,b=t.inverse,w=t.border,O=t.listItem,h=t.flip,x=t.size,v=t.rotation,A=t.pull,k=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":m,"fa-inverse":b,"fa-border":w,"fa-li":O,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},X(e,"fa-".concat(x),typeof x<"u"&&x!==null),X(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),X(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),X(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(P){return k[P]?P:null}).filter(function(P){return P})}function $r(t){return t=t-0,t===t}function pn(t){return $r(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Xr=["style"];function Br(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Vr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=pn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Br(r)]=o:e[r]=o,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return gn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var u=e.attributes[f];switch(f){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=Vr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[pn(f)]=u}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=zr(n,Xr);return r.attrs.style=E(E({},r.attrs.style),s),t.apply(void 0,[e.tag,E(E({},r.attrs),i)].concat(Yt(a)))}var hn=!1;try{hn=!0}catch{}function qr(){if(!hn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Te(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ut.icon)return Ut.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Pt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?X({},t,e):{}}var Fe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ee=_e.forwardRef(function(t,e){var n=E(E({},Fe),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,c=n.titleId,f=n.maskId,u=Te(a),g=Pt("classes",[].concat(Yt(Gr(n)),Yt((s||"").split(" ")))),m=Pt("transform",typeof n.transform=="string"?Ut.transform(n.transform):n.transform),b=Pt("mask",Te(r)),w=Dr(u,E(E(E(E({},g),m),b),{},{symbol:o,title:i,titleId:c,maskId:f}));if(!w)return qr("Could not find icon",u),null;var O=w.abstract,h={ref:e};return Object.keys(n).forEach(function(x){Fe.hasOwnProperty(x)||(h[x]=n[x])}),Kr(O[0],h)});ee.displayName="FontAwesomeIcon";ee.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Kr=gn.bind(null,_e.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Qr={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Co={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Eo={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Io={prefix:"fas",iconName:"clock-rotate-left",icon:[512,512,["history"],"f1da","M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"]},Jr=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Zr=["component","slots","slotProps"],to=["component"];function eo(t,e){const{className:n,elementType:a,ownerState:r,externalForwardedProps:o,getSlotOwnerState:s,internalForwardedProps:i}=e,c=ot(e,Jr),{component:f,slots:u={[t]:void 0},slotProps:g={[t]:void 0}}=o;ot(o,Zr);const m=u[t]||a,b=Tn(g[t],r),w=Fn(I({className:n},c,{externalForwardedProps:void 0,externalSlotProps:b})),{props:{component:O},internalRef:h}=w,x=ot(w.props,to),v=Mn(h,b==null?void 0:b.ref,e.ref),A=s?s(x):{},k=I({},r,A),P=O,G=_n(m,I({},t==="root",!u[t]&&i,x,P&&{as:P},{ref:v}),k);return Object.keys(A).forEach(z=>{delete G[z]}),[m,G]}const no=In(st.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ao(t){return On("MuiAvatar",t)}Nn("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ro=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],oo=t=>{const{classes:e,variant:n,colorDefault:a}=t;return En({root:["root",n,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ao,e)},so=Ht("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:I({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:I({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),io=Ht("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),lo=Ht(no,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function fo({crossOrigin:t,referrerPolicy:e,src:n,srcSet:a}){const[r,o]=ft.useState(!1);return ft.useEffect(()=>{if(!n&&!a)return;o(!1);let s=!0;const i=new Image;return i.onload=()=>{s&&o("loaded")},i.onerror=()=>{s&&o("error")},i.crossOrigin=t,i.referrerPolicy=e,i.src=n,a&&(i.srcset=a),()=>{s=!1}},[t,e,n,a]),r}const co=ft.forwardRef(function(e,n){const a=vn({props:e,name:"MuiAvatar"}),{alt:r,children:o,className:s,component:i="div",slots:c={},slotProps:f={},imgProps:u,sizes:g,src:m,srcSet:b,variant:w="circular"}=a,O=ot(a,ro);let h=null;const x=fo(I({},u,{src:m,srcSet:b})),v=m||b,A=v&&x!=="error",k=I({},a,{colorDefault:!A,component:i,variant:w}),P=oo(k),[G,z]=eo("img",{className:P.img,elementType:io,externalForwardedProps:{slots:c,slotProps:{img:I({},u,f.img)}},additionalProps:{alt:r,src:m,srcSet:b,sizes:g},ownerState:k});return A?h=st.jsx(G,I({},z)):o||o===0?h=o:v&&r?h=r[0]:h=st.jsx(lo,{ownerState:k,className:P.fallback}),st.jsx(so,I({as:i,ownerState:k,className:Cn(P.root,s),ref:n},O,{children:h}))}),bn=({color:t,...e})=>{const n=kn();return U(ee,{icon:Qr,css:xn({color:t==="primary"?n.palette.primary.main:"inherit"},"",""),...e})};bn.__docgenInfo={description:"",methods:[],displayName:"DownArrow",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};const uo=({fullName:t,children:e})=>{const[n,a]=ft.useState(null),r=!!n,o=i=>{a(i.currentTarget)},s=()=>{a(null)};return ne(An,{children:[ne(Sn,{onClick:o,width:"max-content",direction:"row",alignItems:"center",spacing:1,sx:{cursor:"pointer"},children:[U(wn,{variant:"h6",sx:{display:{xs:"none",sm:"block"},maxWidth:{sm:"7rem",md:"16rem"},overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},title:t,children:t}),U(co,{variant:"circular-outlined",sx:{width:32,height:32,borderColor:"inherit"},children:U(Pn,{color:"inherit"})}),U(Ln,{"aria-label":"user-profile",color:"inherit",children:U(bn,{rotation:r?180:void 0,size:"sm"})})]}),U(Rn,{anchorEl:n,id:"user-profile-menu",open:r,onClose:s,onClick:s,MenuListProps:{component:"div",sx:{padding:0}},slotProps:{paper:{sx:{padding:2.5,border:"1px solid #8D99E270",width:300,filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))"}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e})]})};uo.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{co as A,bn as D,ee as F,uo as U,Io as a,Eo as b,Qr as c,Co as f};
