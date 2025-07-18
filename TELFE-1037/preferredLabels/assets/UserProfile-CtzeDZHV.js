import{_ as z,b as S,u as At,i as Z,y as be,j as K,t as Hn,a as ye,F as Bn}from"./DefaultPropsProvider-D0TKvr2r.js";import{R as Je,r as I}from"./index-BBkUAzwr.js";import{c as Gn}from"./Text-UfnIhWrZ.js";import{U as Kn}from"./UserIcon-CjSGJTuU.js";import{P as y}from"./index-_4_hgnnR.js";import{u as Xn}from"./useTheme-CEroDfaK.js";import{S as Vn}from"./FlexBox-DGOTTOBh.js";import{g as wt,s as G,c as kt,a as St,r as qn}from"./styled-C_kIfZUr.js";import{c as Qn}from"./createSvgIcon-vyKw-wJg.js";import{j as L}from"./jsx-runtime-BwZVo4Wn.js";import{g as Ot}from"./generateUtilityClasses-BJi7wJCo.js";import{r as Jn,m as Zn,a as ta,g as ea,u as ve,b as na,P as aa}from"./Popover-Bh0RZbgT.js";import{u as Ze,d as ra}from"./TransitionGroupContext-RFIud7ZD.js";import{B as oa}from"./ButtonBase-BBhFMBvz.js";import{u as sa}from"./index-DQBVfwdU.js";import{o as xe}from"./utils-rL4B1Bvl.js";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ia(t,e,n){return(e=ca(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pe(Object(n),!0).forEach(function(a){ia(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function la(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ca(t){var e=la(t,"string");return typeof e=="symbol"?e:e+""}const Ae=()=>{};let re={},tn={},en=null,nn={mark:Ae,measure:Ae};try{typeof window<"u"&&(re=window),typeof document<"u"&&(tn=document),typeof MutationObserver<"u"&&(en=MutationObserver),typeof performance<"u"&&(nn=performance)}catch{}const{userAgent:we=""}=re.navigator||{},Y=re,k=tn,ke=en,gt=nn;Y.document;const U=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",an=~we.indexOf("MSIE")||~we.indexOf("Trident/");var fa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ua=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,rn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},da={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},on=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N="classic",Ct="duotone",ma="sharp",pa="sharp-duotone",sn=[N,Ct,ma,pa],ga={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ha={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ba=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ya={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},va=["fak","fa-kit","fakd","fa-kit-duotone"],Se={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},xa=["kit"],Pa={kit:{"fa-kit":"fak"}},Aa=["fak","fakd"],wa={kit:{fak:"fa-kit"}},Oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Sa=["fak","fa-kit","fakd","fa-kit-duotone"],Oa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ca={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ia={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},jt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ea=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ut=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ka,...Ea],Na=["solid","regular","light","thin","duotone","brands"],ln=[1,2,3,4,5,6,7,8,9,10],Ma=ln.concat([11,12,13,14,15,16,17,18,19,20]),Ta=[...Object.keys(Ia),...Na,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY].concat(ln.map(t=>"".concat(t,"x"))).concat(Ma.map(t=>"w-".concat(t))),Fa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const D="___FONT_AWESOME___",$t=16,cn="fa",fn="svg-inline--fa",V="data-fa-i2svg",Wt="data-fa-pseudo-element",_a="data-fa-pseudo-element-pending",oe="data-prefix",se="data-icon",Ce="fontawesome-i2svg",Ra="async",La=["HTML","HEAD","STYLE","SCRIPT"],un=(()=>{try{return!0}catch{return!1}})();function ft(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const dn=l({},rn);dn[N]=l(l(l(l({},{"fa-duotone":"duotone"}),rn[N]),Se.kit),Se["kit-duotone"]);const za=ft(dn),Yt=l({},ya);Yt[N]=l(l(l(l({},{duotone:"fad"}),Yt[N]),Oe.kit),Oe["kit-duotone"]);const Ie=ft(Yt),Ht=l({},jt);Ht[N]=l(l({},Ht[N]),wa.kit);const ie=ft(Ht),Bt=l({},Ca);Bt[N]=l(l({},Bt[N]),Pa.kit);ft(Bt);const Da=fa,mn="fa-layers-text",ja=ua,Ua=l({},ga);ft(Ua);const $a=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tt=da,Wa=[...xa,...Ta],st=Y.FontAwesomeConfig||{};function Ya(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ha(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}k&&typeof k.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ha(Ya(n));r!=null&&(st[a]=r)});const pn={styleDefault:"solid",familyDefault:N,cssPrefix:cn,replacementClass:fn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const et=l(l({},pn),st);et.autoReplaceSvg||(et.observeMutations=!1);const d={};Object.keys(pn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){et[t]=e,it.forEach(n=>n(d))},get:function(){return et[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){et.cssPrefix=t,it.forEach(e=>e(d))},get:function(){return et.cssPrefix}});Y.FontAwesomeConfig=d;const it=[];function Ba(t){return it.push(t),()=>{it.splice(it.indexOf(t),1)}}const W=$t,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ga(t){if(!t||!U)return;const e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=k.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return k.head.insertBefore(e,a),t}const Ka="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=Ka[Math.random()*62|0];return e}function nt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function le(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(gn(t[n]),'" '),"").trim()}function It(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ce(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function Va(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function qa(t){let{transform:e,width:n=$t,height:a=$t,startCentered:r=!1}=t,o="";return r&&an?o+="translate(".concat(e.x/W-n/2,"em, ").concat(e.y/W-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):o+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),o+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Qa=`:root, :host {
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
}`;function hn(){const t=cn,e=fn,n=d.cssPrefix,a=d.replacementClass;let r=Qa;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Ee=!1;function Ft(){d.autoAddCss&&!Ee&&(Ga(hn()),Ee=!0)}var Ja={mixout(){return{dom:{css:hn,insertCss:Ft}}},hooks(){return{beforeDOMElementCreation(){Ft()},beforeI2svg(){Ft()}}}};const j=Y||{};j[D]||(j[D]={});j[D].styles||(j[D].styles={});j[D].hooks||(j[D].hooks={});j[D].shims||(j[D].shims=[]);var R=j[D];const bn=[],yn=function(){k.removeEventListener("DOMContentLoaded",yn),vt=1,bn.map(t=>t())};let vt=!1;U&&(vt=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),vt||k.addEventListener("DOMContentLoaded",yn));function Za(t){U&&(vt?setTimeout(t,0):bn.push(t))}function ut(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?gn(t):"<".concat(e," ").concat(Xa(n),">").concat(a.map(ut).join(""),"</").concat(e,">")}function Ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _t=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,f,c,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<s;f++)c=o[f],u=i(u,e[c],c,e);return u};function tr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Gt(t){const e=tr(t);return e.length===1?e[0].toString(16):null}function er(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Kt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Me(e);typeof R.hooks.addPack=="function"&&!a?R.hooks.addPack(t,Me(e)):R.styles[t]=l(l({},R.styles[t]||{}),r),t==="fas"&&Kt("fa",e)}const{styles:ct,shims:nr}=R,vn=Object.keys(ie),ar=vn.reduce((t,e)=>(t[e]=Object.keys(ie[e]),t),{});let fe=null,xn={},Pn={},An={},wn={},kn={};function rr(t){return~Wa.indexOf(t)}function or(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!rr(r)?r:null}const Sn=()=>{const t=a=>_t(ct,(r,o,s)=>(r[s]=_t(o,a,{}),r),{});xn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),Pn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),kn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in ct||d.autoFetchSvg,n=_t(nr,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});An=n.names,wn=n.unicodes,fe=Et(d.styleDefault,{family:d.familyDefault})};Ba(t=>{fe=Et(t.styleDefault,{family:d.familyDefault})});Sn();function ue(t,e){return(xn[t]||{})[e]}function sr(t,e){return(Pn[t]||{})[e]}function X(t,e){return(kn[t]||{})[e]}function On(t){return An[t]||{prefix:null,iconName:null}}function ir(t){const e=wn[t],n=ue("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return fe}const Cn=()=>({prefix:null,iconName:null,rest:[]});function lr(t){let e=N;const n=vn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return sn.forEach(a=>{(t.includes(n[a])||t.some(r=>ar[a].includes(r)))&&(e=a)}),e}function Et(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,a=za[n][t];if(n===Ct&&!t)return"fad";const r=Ie[n][t]||Ie[n][a],o=t in R.styles?t:null;return r||o||null}function cr(t){let e=[],n=null;return t.forEach(a=>{const r=or(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Te(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Nt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Ut.concat(Sa),o=Te(t.filter(p=>r.includes(p))),s=Te(t.filter(p=>!Ut.includes(p))),i=o.filter(p=>(a=p,!on.includes(p))),[f=null]=i,c=lr(o),u=l(l({},cr(s)),{},{prefix:Et(f,{family:c})});return l(l(l({},u),mr({values:t,family:c,styles:ct,config:d,canonical:u,givenPrefix:a})),fr(n,a,u))}function fr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?On(r):{},s=X(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!ct.far&&ct.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ur=sn.filter(t=>t!==N||t!==Ct),dr=Object.keys(jt).filter(t=>t!==N).map(t=>Object.keys(jt[t])).flat();function mr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===Ct,f=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(f||c||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ur.includes(n)&&(Object.keys(o).find(m=>dr.includes(m))||s.autoFetchSvg)){const m=ba.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=X(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=H()||"fas"),a}class pr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Kt(o,r[o]);const s=ie[N][o];s&&Kt(s,r[o]),Sn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[o][c]=i)}),e[o][s]=i}),e}}let Fe=[],Q={};const tt={},gr=Object.keys(tt);function hr(t,e){let{mixoutsTo:n}=e;return Fe=t,Q={},Object.keys(tt).forEach(a=>{gr.indexOf(a)===-1&&delete tt[a]}),Fe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{Q[s]||(Q[s]=[]),Q[s].push(o[s])})}a.provides&&a.provides(tt)}),n}function Xt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Q[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Q[t]||[]).forEach(o=>{o.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Vt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||H();if(e)return e=X(n,e)||e,Ne(In.definitions,n,e)||Ne(R.styles,n,e)}const In=new pr,br=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},yr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(q("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Za(()=>{xr({autoReplaceSvgRoot:e}),q("watch",t)})}},vr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Et(t[0]);return{prefix:n,iconName:X(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Da))){const e=Nt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||H(),iconName:X(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=H();return{prefix:e,iconName:X(e,t)||t}}}},M={noAuto:br,config:d,dom:yr,parse:vr,library:In,findIconDefinition:Vt,toHtml:ut},xr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=k}=t;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&U&&d.autoReplaceSvg&&M.dom.i2svg({node:e})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ut(n))}}),Object.defineProperty(t,"node",{get:function(){if(!U)return;const n=k.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Pr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(ce(s)&&n.found&&!a.found){const{width:i,height:f}=n,c={x:i/f/2,y:.5};r.style=It(l(l({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ar(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function de(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:f,titleId:c,extra:u,watchable:p=!1}=t,{width:m,height:h}=n.found?n:e,O=Aa.includes(a),C=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let x={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};const b=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};p&&(x.attributes[V]=""),i&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||lt())},children:[i]}),delete x.attributes.title);const A=l(l({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:s,styles:l(l({},b),u.styles)}),{children:g,attributes:v}=n.found&&e.found?B("generateAbstractMask",A)||{children:[],attributes:{}}:B("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=g,A.attributes=v,s?Ar(A):Pr(A)}function _e(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,f=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(f[V]="");const c=l({},s.styles);ce(r)&&(c.transform=qa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=It(c);u.length>0&&(f.style=u);const p=[];return p.push({tag:"span",attributes:f,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function wr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=It(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Rt}=R;function qt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const kr={found:!1,width:512,height:512};function Sr(t,e){!un&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=H()),new Promise((a,r)=>{if(n==="fa"){const o=On(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Rt[e]&&Rt[e][t]){const o=Rt[e][t];return a(qt(o))}Sr(t,e),a(l(l({},kr),{},{icon:d.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const Re=()=>{},Jt=d.measurePerformance&&gt&&gt.mark&&gt.measure?gt:{mark:Re,measure:Re},ot='FA "6.7.2"',Or=t=>(Jt.mark("".concat(ot," ").concat(t," begins")),()=>En(t)),En=t=>{Jt.mark("".concat(ot," ").concat(t," ends")),Jt.measure("".concat(ot," ").concat(t),"".concat(ot," ").concat(t," begins"),"".concat(ot," ").concat(t," ends"))};var me={begin:Or,end:En};const bt=()=>{};function Le(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function Cr(t){const e=t.getAttribute?t.getAttribute(oe):null,n=t.getAttribute?t.getAttribute(se):null;return e&&n}function Ir(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Er(){return d.autoReplaceSvg===!0?yt.replace:yt[d.autoReplaceSvg]||yt.replace}function Nr(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function Mr(t){return k.createElement(t)}function Nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Nr:Mr}=e;if(typeof t=="string")return k.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Nn(o,{ceFn:n}))}),a}function Tr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const yt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Nn(n),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){let n=k.createComment(Tr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~le(e).indexOf(d.replacementClass))return yt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ut(o)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function ze(t){t()}function Mn(t,e){const n=typeof e=="function"?e:bt;if(t.length===0)n();else{let a=ze;d.mutateApproach===Ra&&(a=Y.requestAnimationFrame||ze),a(()=>{const r=Er(),o=me.begin("mutate");t.map(r),o(),n()})}}let pe=!1;function Tn(){pe=!0}function Zt(){pe=!1}let xt=null;function De(t){if(!ke||!d.observeMutations)return;const{treeCallback:e=bt,nodeCallback:n=bt,pseudoElementsCallback:a=bt,observeMutationsRoot:r=k}=t;xt=new ke(o=>{if(pe)return;const s=H();nt(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Le(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Le(i.target)&&~$a.indexOf(i.attributeName))if(i.attributeName==="class"&&Cr(i.target)){const{prefix:f,iconName:c}=Nt(le(i.target));i.target.setAttribute(oe,f||s),c&&i.target.setAttribute(se,c)}else Ir(i.target)&&n(i.target)})}),U&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fr(){xt&&xt.disconnect()}function _r(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Rr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Nt(le(t));return r.prefix||(r.prefix=H()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=sr(r.prefix,t.innerText)||ue(r.prefix,Gt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Lr(t){const e=nt(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function zr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function je(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Rr(t),o=Lr(t),s=Xt("parseNodeAttributes",{},t);let i=e.styleParser?_r(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:Dr}=R;function Fn(t){const e=d.autoReplaceSvg==="nest"?je(t,{styleParser:!1}):je(t);return~e.extra.classes.indexOf(mn)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function jr(){return[...va,...Ut]}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();const n=k.documentElement.classList,a=u=>n.add("".concat(Ce,"-").concat(u)),r=u=>n.remove("".concat(Ce,"-").concat(u)),o=d.autoFetchSvg?jr():on.concat(Object.keys(Dr));o.includes("fa")||o.push("fa");const s=[".".concat(mn,":not([").concat(V,"])")].concat(o.map(u=>".".concat(u,":not([").concat(V,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=nt(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const f=me.begin("onTree"),c=i.reduce((u,p)=>{try{const m=Fn(p);m&&u.push(m)}catch(m){un||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(m=>{Mn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(m=>{f(),p(m)})})}function Ur(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fn(t).then(n=>{n&&Mn([n],e)})}function $r(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Vt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Vt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Wr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:h}=t;return Mt(l({type:"icon"},t),()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||lt()):(c["aria-hidden"]="true",c.focusable="false")),de({icons:{main:qt(h),mask:r?qt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},_),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:c,styles:u,classes:f}})))};var Yr={mixout(){return{icon:$r(Wr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ue,t.nodeCallback=Ur,t}}},provides(t){t.i2svg=function(e){const{node:n=k,callback:a=()=>{}}=e;return Ue(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:f,mask:c,maskId:u,extra:p}=n;return new Promise((m,h)=>{Promise.all([Qt(a,s),c.iconName?Qt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[C,x]=O;m([e,de({icons:{main:C,mask:x},prefix:s,iconName:a,transform:i,symbol:f,maskId:u,title:r,titleId:o,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=It(s);i.length>0&&(a.style=i);let f;return ce(o)&&(f=B("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Hr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Mt({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Br={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Mt({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),wr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Gr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return Mt({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),_e({content:t,transform:l(l({},_),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(an){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,i=c.height/f}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,_e({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Kr=new RegExp('"',"ug"),$e=[1105920,1112319],We=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ha),Fa),Oa),te=Object.keys(We).reduce((t,e)=>(t[e.toLowerCase()]=We[e],t),{}),Xr=Object.keys(te).reduce((t,e)=>{const n=te[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Vr(t){const e=t.replace(Kr,""),n=er(e,0),a=n>=$e[0]&&n<=$e[1],r=e.length===2?e[0]===e[1]:!1;return{value:Gt(r?e[0]:e),isSecondary:a||r}}function qr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(te[n]||{})[r]||Xr[n]}function Ye(t,e){const n="".concat(_a).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=nt(t.children).filter(m=>m.getAttribute(Wt)===e)[0],i=Y.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),c=f.match(ja),u=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&p!=="none"&&p!==""){const m=i.getPropertyValue("content");let h=qr(f,u);const{value:O,isSecondary:C}=Vr(m),x=c[0].startsWith("FontAwesome");let b=ue(h,O),A=b;if(x){const g=ir(O);g.iconName&&g.prefix&&(b=g.iconName,h=g.prefix)}if(b&&!C&&(!s||s.getAttribute(oe)!==h||s.getAttribute(se)!==A)){t.setAttribute(n,A),s&&t.removeChild(s);const g=zr(),{extra:v}=g;v.attributes[Wt]=e,Qt(b,h).then(P=>{const E=de(l(l({},g),{},{icons:{main:P,mask:Cn()},prefix:h,iconName:A,extra:v,watchable:!0})),w=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=E.map($=>ut($)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Qr(t){return Promise.all([Ye(t,"::before"),Ye(t,"::after")])}function Jr(t){return t.parentNode!==document.head&&!~La.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function He(t){if(U)return new Promise((e,n)=>{const a=nt(t.querySelectorAll("*")).filter(Jr).map(Qr),r=me.begin("searchPseudoElements");Tn(),Promise.all(a).then(()=>{r(),Zt(),e()}).catch(()=>{r(),Zt(),n()})})}var Zr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=He,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=k}=e;d.searchPseudoElements&&He(n)}}};let Be=!1;var to={mixout(){return{dom:{unwatch(){Tn(),Be=!0}}}},hooks(){return{bootstrap(){De(Xt("mutationObserverCallbacks",{}))},noAuto(){Fr()},watch(t){const{observeMutationsRoot:e}=t;Be?Zt():De(Xt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ge=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var eo={mixout(){return{parse:{transform:t=>Ge(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ge(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:u,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}};const Lt={x:0,y:0,width:"100%",height:"100%"};function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function no(t){return t.tag==="g"?t.children:[t]}var ao={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Nt(n.split(" ").map(r=>r.trim())):Cn();return a.prefix||(a.prefix=H()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:f,icon:c}=r,{width:u,icon:p}=o,m=Va({transform:i,containerWidth:u,iconWidth:f}),h={tag:"rect",attributes:l(l({},Lt),{},{fill:"white"})},O=c.children?{children:c.children.map(Ke)}:{},C={tag:"g",attributes:l({},m.inner),children:[Ke(l({tag:c.tag,attributes:l(l({},c.attributes),m.path)},O))]},x={tag:"g",attributes:l({},m.outer),children:[C]},b="mask-".concat(s||lt()),A="clip-".concat(s||lt()),g={tag:"mask",attributes:l(l({},Lt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,x]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:no(p)},g]};return n.push(v,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(b,")")},Lt)}),{children:n,attributes:a}}}},ro={provides(t){let e=!1;Y.matchMedia&&(e=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},oo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},so=[Ja,Yr,Hr,Br,Gr,Zr,to,eo,ao,ro,oo];hr(so,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;const ee=M.parse;M.findIconDefinition;M.toHtml;const io=M.icon;M.layer;M.text;M.counter;function Xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xe(Object(n),!0).forEach(function(a){J(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Pt(t){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pt(t)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lo(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function co(t,e){if(t==null)return{};var n=lo(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ne(t){return fo(t)||uo(t)||mo(t)||po()}function fo(t){if(Array.isArray(t))return ae(t)}function uo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mo(t,e){if(t){if(typeof t=="string")return ae(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(t,e)}}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function po(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function go(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,f=t.spin,c=t.spinPulse,u=t.spinReverse,p=t.pulse,m=t.fixedWidth,h=t.inverse,O=t.border,C=t.listItem,x=t.flip,b=t.size,A=t.rotation,g=t.pull,v=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":h,"fa-border":O,"fa-li":C,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},J(e,"fa-".concat(b),typeof b<"u"&&b!==null),J(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),J(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(v).map(function(P){return v[P]?P:null}).filter(function(P){return P})}function ho(t){return t=t-0,t===t}function _n(t){return ho(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var bo=["style"];function yo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=_n(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[yo(r)]=o:e[r]=o,e},{})}function Rn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return Rn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var u=e.attributes[c];switch(c){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=vo(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[_n(c)]=u}return f},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=co(n,bo);return r.attrs.style=F(F({},r.attrs.style),s),t.apply(void 0,[e.tag,F(F({},r.attrs),i)].concat(ne(a)))}var Ln=!1;try{Ln=!0}catch{}function xo(){if(!Ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ve(t){if(t&&Pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ee.icon)return ee.icon(t);if(t===null)return null;if(t&&Pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var qe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ge=Je.forwardRef(function(t,e){var n=F(F({},qe),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,f=n.titleId,c=n.maskId,u=Ve(a),p=zt("classes",[].concat(ne(go(n)),ne((s||"").split(" ")))),m=zt("transform",typeof n.transform=="string"?ee.transform(n.transform):n.transform),h=zt("mask",Ve(r)),O=io(u,F(F(F(F({},p),m),h),{},{symbol:o,title:i,titleId:f,maskId:c}));if(!O)return xo("Could not find icon",u),null;var C=O.abstract,x={ref:e};return Object.keys(n).forEach(function(b){qe.hasOwnProperty(b)||(x[b]=n[b])}),Po(C[0],x)});ge.displayName="FontAwesomeIcon";ge.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var Po=Rn.bind(null,Je.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ws={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},ks={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Ao={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ss={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Os={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Cs={prefix:"fas",iconName:"clock-rotate-left",icon:[512,512,["history"],"f1da","M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"]},wo=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ko=["component","slots","slotProps"],So=["component"];function Oo(t,e){const{className:n,elementType:a,ownerState:r,externalForwardedProps:o,getSlotOwnerState:s,internalForwardedProps:i}=e,f=z(e,wo),{component:c,slots:u={[t]:void 0},slotProps:p={[t]:void 0}}=o;z(o,ko);const m=u[t]||a,h=Jn(p[t],r),O=Zn(S({className:n},f,{externalForwardedProps:void 0,externalSlotProps:h})),{props:{component:C},internalRef:x}=O,b=z(O.props,So),A=Ze(x,h==null?void 0:h.ref,e.ref),g=s?s(b):{},v=S({},r,g),P=C,E=ta(m,S({},t==="root",!u[t]&&i,b,P&&{as:P},{ref:A}),v);return Object.keys(g).forEach(w=>{delete E[w]}),[m,E]}function Co(t){return wt("MuiIconButton",t)}const Io=Ot("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Eo=["edge","children","className","color","disabled","disableFocusRipple","size"],No=t=>{const{classes:e,disabled:n,color:a,edge:r,size:o}=t,s={root:["root",n&&"disabled",a!=="default"&&`color${Z(a)}`,r&&`edge${Z(r)}`,`size${Z(o)}`]};return St(s,Co,e)},Mo=G(oa,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="default"&&e[`color${Z(n.color)}`],n.edge&&e[`edge${Z(n.edge)}`],e[`size${Z(n.size)}`]]}})(({theme:t,ownerState:e})=>S({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:be(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:t,ownerState:e})=>{var n;const a=(n=(t.vars||t).palette)==null?void 0:n[e.color];return S({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&S({color:a==null?void 0:a.main},!e.disableRipple&&{"&:hover":S({},a&&{backgroundColor:t.vars?`rgba(${a.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:be(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Io.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),To=I.forwardRef(function(e,n){const a=At({props:e,name:"MuiIconButton"}),{edge:r=!1,children:o,className:s,color:i="default",disabled:f=!1,disableFocusRipple:c=!1,size:u="medium"}=a,p=z(a,Eo),m=S({},a,{edge:r,color:i,disabled:f,disableFocusRipple:c,size:u}),h=No(m);return L.jsx(Mo,S({className:kt(h.root,s),centerRipple:!0,focusRipple:!c,disabled:f,ref:n},p,{ownerState:m,children:o}))}),Fo=Qn(L.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function _o(t){return wt("MuiAvatar",t)}Ot("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ro=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Lo=t=>{const{classes:e,variant:n,colorDefault:a}=t;return St({root:["root",n,a&&"colorDefault"],img:["img"],fallback:["fallback"]},_o,e)},zo=G("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:S({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:S({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),Do=G("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),jo=G(Fo,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function Uo({crossOrigin:t,referrerPolicy:e,src:n,srcSet:a}){const[r,o]=I.useState(!1);return I.useEffect(()=>{if(!n&&!a)return;o(!1);let s=!0;const i=new Image;return i.onload=()=>{s&&o("loaded")},i.onerror=()=>{s&&o("error")},i.crossOrigin=t,i.referrerPolicy=e,i.src=n,a&&(i.srcset=a),()=>{s=!1}},[t,e,n,a]),r}const $o=I.forwardRef(function(e,n){const a=At({props:e,name:"MuiAvatar"}),{alt:r,children:o,className:s,component:i="div",slots:f={},slotProps:c={},imgProps:u,sizes:p,src:m,srcSet:h,variant:O="circular"}=a,C=z(a,Ro);let x=null;const b=Uo(S({},u,{src:m,srcSet:h})),A=m||h,g=A&&b!=="error",v=S({},a,{colorDefault:!g,component:i,variant:O}),P=Lo(v),[E,w]=Oo("img",{className:P.img,elementType:Do,externalForwardedProps:{slots:f,slotProps:{img:S({},u,c.img)}},additionalProps:{alt:r,src:m,srcSet:h,sizes:p},ownerState:v});return g?x=L.jsx(E,S({},w)):o||o===0?x=o:A&&r?x=r[0]:x=L.jsx(jo,{ownerState:v,className:P.fallback}),L.jsx(zo,S({as:i,ownerState:v,className:kt(P.root,s),ref:n},C,{children:x}))}),Wo=I.createContext({});function Yo(t){return wt("MuiList",t)}Ot("MuiList",["root","padding","dense","subheader"]);const Ho=["children","className","component","dense","disablePadding","subheader"],Bo=t=>{const{classes:e,disablePadding:n,dense:a,subheader:r}=t;return St({root:["root",!n&&"padding",a&&"dense",r&&"subheader"]},Yo,e)},Go=G("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disablePadding&&e.padding,n.dense&&e.dense,n.subheader&&e.subheader]}})(({ownerState:t})=>S({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Ko=I.forwardRef(function(e,n){const a=At({props:e,name:"MuiList"}),{children:r,className:o,component:s="ul",dense:i=!1,disablePadding:f=!1,subheader:c}=a,u=z(a,Ho),p=I.useMemo(()=>({dense:i}),[i]),m=S({},a,{component:s,dense:i,disablePadding:f}),h=Bo(m);return L.jsx(Wo.Provider,{value:p,children:L.jsxs(Go,S({as:s,className:kt(h.root,o),ref:n,ownerState:m},u,{children:[c,r]}))})}),Xo=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Dt(t,e,n){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n?null:t.firstChild}function Qe(t,e,n){return t===e?n?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n?null:t.lastChild}function zn(t,e){if(e===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:e.repeating?n[0]===e.keys[0]:n.indexOf(e.keys.join(""))===0}function rt(t,e,n,a,r,o){let s=!1,i=r(t,e,e?n:!1);for(;i;){if(i===t.firstChild){if(s)return!1;s=!0}const f=a?!1:i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||!zn(i,o)||f)i=r(t,i,n);else return i.focus(),!0}return!1}const Vo=I.forwardRef(function(e,n){const{actions:a,autoFocus:r=!1,autoFocusItem:o=!1,children:s,className:i,disabledItemsFocusable:f=!1,disableListWrap:c=!1,onKeyDown:u,variant:p="selectedMenu"}=e,m=z(e,Xo),h=I.useRef(null),O=I.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ra(()=>{r&&h.current.focus()},[r]),I.useImperativeHandle(a,()=>({adjustStyleForScrollbar:(g,{direction:v})=>{const P=!h.current.style.width;if(g.clientHeight<h.current.clientHeight&&P){const E=`${ea(xe(g))}px`;h.current.style[v==="rtl"?"paddingLeft":"paddingRight"]=E,h.current.style.width=`calc(100% + ${E})`}return h.current}}),[]);const C=g=>{const v=h.current,P=g.key,E=xe(v).activeElement;if(P==="ArrowDown")g.preventDefault(),rt(v,E,c,f,Dt);else if(P==="ArrowUp")g.preventDefault(),rt(v,E,c,f,Qe);else if(P==="Home")g.preventDefault(),rt(v,null,c,f,Dt);else if(P==="End")g.preventDefault(),rt(v,null,c,f,Qe);else if(P.length===1){const w=O.current,$=P.toLowerCase(),dt=performance.now();w.keys.length>0&&(dt-w.lastTime>500?(w.keys=[],w.repeating=!0,w.previousKeyMatched=!0):w.repeating&&$!==w.keys[0]&&(w.repeating=!1)),w.lastTime=dt,w.keys.push($);const at=E&&!w.repeating&&zn(E,w);w.previousKeyMatched&&(at||rt(v,E,!1,f,Dt,w))?g.preventDefault():w.previousKeyMatched=!1}u&&u(g)},x=Ze(h,n);let b=-1;I.Children.forEach(s,(g,v)=>{if(!I.isValidElement(g)){b===v&&(b+=1,b>=s.length&&(b=-1));return}g.props.disabled||(p==="selectedMenu"&&g.props.selected||b===-1)&&(b=v),b===v&&(g.props.disabled||g.props.muiSkipListHighlight||g.type.muiSkipListHighlight)&&(b+=1,b>=s.length&&(b=-1))});const A=I.Children.map(s,(g,v)=>{if(v===b){const P={};return o&&(P.autoFocus=!0),g.props.tabIndex===void 0&&p==="selectedMenu"&&(P.tabIndex=0),I.cloneElement(g,P)}return g});return L.jsx(Ko,S({role:"menu",ref:x,className:i,onKeyDown:C,tabIndex:r?0:-1},m,{children:A}))});function qo(t){return wt("MuiMenu",t)}Ot("MuiMenu",["root","paper","list"]);const Qo=["onEntering"],Jo=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Zo={vertical:"top",horizontal:"right"},ts={vertical:"top",horizontal:"left"},es=t=>{const{classes:e}=t;return St({root:["root"],paper:["paper"],list:["list"]},qo,e)},ns=G(aa,{shouldForwardProp:t=>qn(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),as=G(na,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),rs=G(Vo,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),os=I.forwardRef(function(e,n){var a,r;const o=At({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:i,className:f,disableAutoFocusItem:c=!1,MenuListProps:u={},onClose:p,open:m,PaperProps:h={},PopoverClasses:O,transitionDuration:C="auto",TransitionProps:{onEntering:x}={},variant:b="selectedMenu",slots:A={},slotProps:g={}}=o,v=z(o.TransitionProps,Qo),P=z(o,Jo),E=sa(),w=S({},o,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:u,onEntering:x,PaperProps:h,transitionDuration:C,TransitionProps:v,variant:b}),$=es(w),dt=s&&!c&&m,at=I.useRef(null),jn=(T,pt)=>{at.current&&at.current.adjustStyleForScrollbar(T,{direction:E?"rtl":"ltr"}),x&&x(T,pt)},Un=T=>{T.key==="Tab"&&(T.preventDefault(),p&&p(T,"tabKeyDown"))};let mt=-1;I.Children.map(i,(T,pt)=>{I.isValidElement(T)&&(T.props.disabled||(b==="selectedMenu"&&T.props.selected||mt===-1)&&(mt=pt))});const he=(a=A.paper)!=null?a:as,$n=(r=g.paper)!=null?r:h,Wn=ve({elementType:A.root,externalSlotProps:g.root,ownerState:w,className:[$.root,f]}),Yn=ve({elementType:he,externalSlotProps:$n,ownerState:w,className:$.paper});return L.jsx(ns,S({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?Zo:ts,slots:{paper:he,root:A.root},slotProps:{root:Wn,paper:Yn},open:m,ref:n,transitionDuration:C,TransitionProps:S({onEntering:jn},v),ownerState:w},P,{classes:O,children:L.jsx(rs,S({onKeyDown:Un,actions:at,autoFocus:s&&(mt===-1||c),autoFocusItem:dt,variant:b},u,{className:kt($.list,u.className),children:i}))}))}),Dn=({color:t,...e})=>{const n=Xn();return K(ge,{icon:Ao,size:"sm",css:Hn({color:t==="primary"?n.palette.primary.main:"inherit"},"",""),...e})};Dn.__docgenInfo={description:"",methods:[],displayName:"DownArrow",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};const ss=({fullName:t,children:e})=>{const[n,a]=I.useState(null),r=!!n,o=i=>{a(i.currentTarget)},s=()=>{a(null)};return ye(Bn,{children:[ye(Vn,{onClick:o,width:"max-content",direction:"row",alignItems:"center",spacing:1,sx:{cursor:"pointer"},children:[K(Gn,{variant:"h6",sx:{display:{xs:"none",sm:"block"},maxWidth:{sm:"7rem",md:"16rem"},overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},title:t,children:t}),K($o,{variant:"circular-outlined",sx:{width:32,height:32,borderColor:"inherit"},children:K(Kn,{color:"inherit"})}),K(To,{"aria-label":"user-profile",color:"inherit",children:K(Dn,{rotation:r?180:void 0,size:"sm"})})]}),K(os,{anchorEl:n,id:"user-profile-menu",open:r,onClose:s,onClick:s,MenuListProps:{component:"div",sx:{padding:0}},slotProps:{paper:{sx:{padding:2.5,border:"1px solid #8D99E270",width:300,filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))"}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e})]})};ss.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{$o as A,Dn as D,ge as F,To as I,Wo as L,os as M,ss as U,ws as a,Ss as b,Ko as c,Cs as d,Os as e,ks as f,Ao as g};
