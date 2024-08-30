import{P as p}from"./index-D3ylJrlI.js";import{R as Ra}from"./index-BwDkhjyp.js";function la(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function u(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?la(Object(n),!0).forEach(function(e){O(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):la(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xt(t)}function bn(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function gn(t,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function hn(t,a,n){return a&&gn(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function Kt(t,a){return kn(t)||xn(t,a)||ja(t,a)||On()}function ft(t){return yn(t)||wn(t)||ja(t)||An()}function yn(t){if(Array.isArray(t))return Rt(t)}function kn(t){if(Array.isArray(t))return t}function wn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xn(t,a){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(e.push(o.value),!(a&&e.length===a));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return e}}function ja(t,a){if(t){if(typeof t=="string")return Rt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rt(t,a)}}function Rt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function An(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ca=function(){},Zt={},Fa={},Da=null,Ya={mark:ca,measure:ca};try{typeof window<"u"&&(Zt=window),typeof document<"u"&&(Fa=document),typeof MutationObserver<"u"&&(Da=MutationObserver),typeof performance<"u"&&(Ya=performance)}catch{}var Cn=Zt.navigator||{},ua=Cn.userAgent,ma=ua===void 0?"":ua,D=Zt,h=Fa,da=Da,ut=Ya;D.document;var R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",$a=~ma.indexOf("MSIE")||~ma.indexOf("Trident/"),mt,dt,vt,pt,bt,T="___FONT_AWESOME___",jt=16,Ha="fa",Ua="svg-inline--fa",G="data-fa-i2svg",Ft="data-fa-pseudo-element",Sn="data-fa-pseudo-element-pending",Qt="data-prefix",Jt="data-icon",va="fontawesome-i2svg",Pn="async",En=["HTML","HEAD","STYLE","SCRIPT"],Va=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",ta=[g,y];function lt(t){return new Proxy(t,{get:function(n,e){return e in n?n[e]:n[g]}})}var et=lt((mt={},O(mt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(mt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),mt)),rt=lt((dt={},O(dt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(dt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),dt)),it=lt((vt={},O(vt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(vt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),vt)),Nn=lt((pt={},O(pt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(pt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pt)),Ln=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Wa="fa-layers-text",In=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mn=lt((bt={},O(bt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(bt,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),bt)),Ga=[1,2,3,4,5,6,7,8,9,10],Tn=Ga.concat([11,12,13,14,15,16,17,18,19,20]),_n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[g]).map(ot.add.bind(ot));Object.keys(rt[y]).map(ot.add.bind(ot));var zn=[].concat(ta,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(Ga.map(function(t){return"".concat(t,"x")})).concat(Tn.map(function(t){return"w-".concat(t)})),at=D.FontAwesomeConfig||{};function Rn(t){var a=h.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function jn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Fn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fn.forEach(function(t){var a=Kt(t,2),n=a[0],e=a[1],r=jn(Rn(n));r!=null&&(at[e]=r)})}var Xa={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ha,replacementClass:Ua,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);var Q=u(u({},Xa),at);Q.autoReplaceSvg||(Q.observeMutations=!1);var d={};Object.keys(Xa).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){Q[t]=n,nt.forEach(function(e){return e(d)})},get:function(){return Q[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,nt.forEach(function(n){return n(d)})},get:function(){return Q.cssPrefix}});D.FontAwesomeConfig=d;var nt=[];function Dn(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var F=jt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yn(t){if(!(!t||!R)){var a=h.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var n=h.head.childNodes,e=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return h.head.insertBefore(a,e),t}}var $n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,a="";t-- >0;)a+=$n[Math.random()*62|0];return a}function J(t){for(var a=[],n=(t||[]).length>>>0;n--;)a[n]=t[n];return a}function aa(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Ba(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hn(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,'="').concat(Ba(t[n]),'" ')},"").trim()}function St(t){return Object.keys(t||{}).reduce(function(a,n){return a+"".concat(n,": ").concat(t[n].trim(),";")},"")}function na(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Un(t){var a=t.transform,n=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Vn(t){var a=t.transform,n=t.width,e=n===void 0?jt:n,r=t.height,i=r===void 0?jt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&$a?f+="translate(".concat(a.x/F-e/2,"em, ").concat(a.y/F-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/F,"em), calc(-50% + ").concat(a.y/F,"em)) "):f+="translate(".concat(a.x/F,"em, ").concat(a.y/F,"em) "),f+="scale(".concat(a.size/F*(a.flipX?-1:1),", ").concat(a.size/F*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Wn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qa(){var t=Ha,a=Ua,n=d.cssPrefix,e=d.replacementClass,r=Wn;if(n!==t||e!==a){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(e))}return r}var pa=!1;function It(){d.autoAddCss&&!pa&&(Yn(qa()),pa=!0)}var Gn={mixout:function(){return{dom:{css:qa,insertCss:It}}},hooks:function(){return{beforeDOMElementCreation:function(){It()},beforeI2svg:function(){It()}}}},_=D||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var L=_[T],Ka=[],Xn=function t(){h.removeEventListener("DOMContentLoaded",t),At=1,Ka.map(function(a){return a()})},At=!1;R&&(At=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),At||h.addEventListener("DOMContentLoaded",Xn));function Bn(t){R&&(At?setTimeout(t,0):Ka.push(t))}function ct(t){var a=t.tag,n=t.attributes,e=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ba(t):"<".concat(a," ").concat(Hn(e),">").concat(i.map(ct).join(""),"</").concat(a,">")}function ba(t,a,n){if(t&&t[a]&&t[a][n])return{prefix:a,iconName:n,icon:t[a][n]}}var Mt=function(a,n,e,r){var i=Object.keys(a),o=i.length,s=n,f,c,l;for(e===void 0?(f=1,l=a[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,a[c],c,a);return l};function qn(t){for(var a=[],n=0,e=t.length;n<e;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<e){var i=t.charCodeAt(n++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),n--)}else a.push(r)}return a}function Dt(t){var a=qn(t);return a.length===1?a[0].toString(16):null}function Kn(t,a){var n=t.length,e=t.charCodeAt(a),r;return e>=55296&&e<=56319&&n>a+1&&(r=t.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function ga(t){return Object.keys(t).reduce(function(a,n){var e=t[n],r=!!e.icon;return r?a[e.iconName]=e.icon:a[n]=e,a},{})}function Yt(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=n.skipHooks,r=e===void 0?!1:e,i=ga(a);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(t,ga(a)):L.styles[t]=u(u({},L.styles[t]||{}),i),t==="fas"&&Yt("fa",a)}var gt,ht,yt,B=L.styles,Zn=L.shims,Qn=(gt={},O(gt,g,Object.values(it[g])),O(gt,y,Object.values(it[y])),gt),ea=null,Za={},Qa={},Ja={},tn={},an={},Jn=(ht={},O(ht,g,Object.keys(et[g])),O(ht,y,Object.keys(et[y])),ht);function te(t){return~zn.indexOf(t)}function ae(t,a){var n=a.split("-"),e=n[0],r=n.slice(1).join("-");return e===t&&r!==""&&!te(r)?r:null}var nn=function(){var a=function(i){return Mt(B,function(o,s,f){return o[f]=Mt(s,i,{}),o},{})};Za=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Qa=a(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),an=a(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in B||d.autoFetchSvg,e=Mt(Zn,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Ja=e.names,tn=e.unicodes,ea=Pt(d.styleDefault,{family:d.familyDefault})};Dn(function(t){ea=Pt(t.styleDefault,{family:d.familyDefault})});nn();function ra(t,a){return(Za[t]||{})[a]}function ne(t,a){return(Qa[t]||{})[a]}function W(t,a){return(an[t]||{})[a]}function en(t){return Ja[t]||{prefix:null,iconName:null}}function ee(t){var a=tn[t],n=ra("fas",t);return a||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return ea}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function Pt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.family,e=n===void 0?g:n,r=et[e][t],i=rt[e][t]||rt[e][r],o=t in L.styles?t:null;return i||o||null}var ha=(yt={},O(yt,g,Object.keys(it[g])),O(yt,y,Object.keys(it[y])),yt);function Et(t){var a,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,r=e===void 0?!1:e,i=(a={},O(a,g,"".concat(d.cssPrefix,"-").concat(g)),O(a,y,"".concat(d.cssPrefix,"-").concat(y)),a),o=null,s=g;(t.includes(i[g])||t.some(function(c){return ha[g].includes(c)}))&&(s=g),(t.includes(i[y])||t.some(function(c){return ha[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var m=ae(d.cssPrefix,l);if(B[l]?(l=Qn[s].includes(l)?Nn[s][l]:l,o=l,c.prefix=l):Jn[s].indexOf(l)>-1?(o=l,c.prefix=Pt(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[g]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=o==="fa"?en(c.iconName):{},b=W(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||b||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!B.far&&B.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},ia());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(B.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var re=function(){function t(){bn(this,t),this.definitions={}}return hn(t,[{key:"add",value:function(){for(var n=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Yt(s,o[s]);var f=it[g][s];f&&Yt(f,o[s]),nn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][f]=c}),n}}]),t}(),ya=[],q={},Z={},ie=Object.keys(Z);function oe(t,a){var n=a.mixoutsTo;return ya=t,q={},Object.keys(Z).forEach(function(e){ie.indexOf(e)===-1&&delete Z[e]}),ya.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),xt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(Z)}),n}function $t(t,a){for(var n=arguments.length,e=new Array(n>2?n-2:0),r=2;r<n;r++)e[r-2]=arguments[r];var i=q[t]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(e))}),a}function X(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),e=1;e<a;e++)n[e-1]=arguments[e];var r=q[t]||[];r.forEach(function(i){i.apply(null,n)})}function z(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,a):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,n=t.prefix||Y();if(a)return a=W(n,a)||a,ba(rn.definitions,n,a)||ba(L.styles,n,a)}var rn=new re,se=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},fe={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(X("beforeI2svg",a),z("pseudoElements2svg",a),z("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Bn(function(){ce({autoReplaceSvgRoot:n}),X("watch",a)})}},le={icon:function(a){if(a===null)return null;if(xt(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var n=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Pt(a[0]);return{prefix:e,iconName:W(e,n)||n}}if(typeof a=="string"&&(a.indexOf("".concat(d.cssPrefix,"-"))>-1||a.match(Ln))){var r=Et(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=Y();return{prefix:i,iconName:W(i,a)||a}}}},N={noAuto:se,config:d,dom:fe,parse:le,library:rn,findIconDefinition:Ht,toHtml:ct},ce=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot,e=n===void 0?h:n;(Object.keys(L.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&N.dom.i2svg({node:e})};function Nt(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ct(e)})}}),Object.defineProperty(t,"node",{get:function(){if(R){var e=h.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ue(t){var a=t.children,n=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(na(o)&&n.found&&!e.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=St(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function me(t){var a=t.prefix,n=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(a,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function oa(t){var a=t.icons,n=a.main,e=a.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,w=e.found?e:n,P=w.width,x=w.height,C=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(x)})},E=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/x*16*.0625,"em")}:{};b&&(A.attributes[G]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete A.attributes.title);var S=u(u({},A),{},{prefix:r,iconName:i,main:n,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},E),m.styles)}),H=e.found&&n.found?z("generateAbstractMask",S)||{children:[],attributes:{}}:z("generateAbstractIcon",S)||{children:[],attributes:{}},U=H.children,Lt=H.attributes;return S.children=U,S.attributes=Lt,s?me(S):ue(S)}function ka(t){var a=t.content,n=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[G]="");var l=u({},o.styles);na(r)&&(l.transform=Vn({transform:r,startCentered:!0,width:n,height:e}),l["-webkit-transform"]=l.transform);var m=St(l);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function de(t){var a=t.content,n=t.title,e=t.extra,r=u(u(u({},e.attributes),n?{title:n}:{}),{},{class:e.classes.join(" ")}),i=St(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Tt=L.styles;function Ut(t){var a=t[0],n=t[1],e=t.slice(4),r=Kt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:n,icon:o}}var ve={found:!1,width:512,height:512};function pe(t,a){!Va&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function Vt(t,a){var n=a;return a==="fa"&&d.styleDefault!==null&&(a=Y()),new Promise(function(e,r){if(z("missingIconAbstract"),n==="fa"){var i=en(t)||{};t=i.iconName||t,a=i.prefix||a}if(t&&a&&Tt[a]&&Tt[a][t]){var o=Tt[a][t];return e(Ut(o))}pe(t,a),e(u(u({},ve),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var wa=function(){},Wt=d.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:wa,measure:wa},tt='FA "6.5.2"',be=function(a){return Wt.mark("".concat(tt," ").concat(a," begins")),function(){return on(a)}},on=function(a){Wt.mark("".concat(tt," ").concat(a," ends")),Wt.measure("".concat(tt," ").concat(a),"".concat(tt," ").concat(a," begins"),"".concat(tt," ").concat(a," ends"))},sa={begin:be,end:on},kt=function(){};function xa(t){var a=t.getAttribute?t.getAttribute(G):null;return typeof a=="string"}function ge(t){var a=t.getAttribute?t.getAttribute(Qt):null,n=t.getAttribute?t.getAttribute(Jt):null;return a&&n}function he(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ye(){if(d.autoReplaceSvg===!0)return wt.replace;var t=wt[d.autoReplaceSvg];return t||wt.replace}function ke(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return h.createElement(t)}function sn(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.ceFn,e=n===void 0?t.tag==="svg"?ke:we:n;if(typeof t=="string")return h.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(sn(o,{ceFn:e}))}),r}function xe(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var wt={replace:function(a){var n=a[0];if(n.parentNode)if(a[1].forEach(function(r){n.parentNode.insertBefore(sn(r),n)}),n.getAttribute(G)===null&&d.keepOriginalSource){var e=h.createComment(xe(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(a){var n=a[0],e=a[1];if(~aa(n).indexOf(d.replacementClass))return wt.replace(a);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ct(s)}).join(`
`);n.setAttribute(G,""),n.innerHTML=o}};function Aa(t){t()}function fn(t,a){var n=typeof a=="function"?a:kt;if(t.length===0)n();else{var e=Aa;d.mutateApproach===Pn&&(e=D.requestAnimationFrame||Aa),e(function(){var r=ye(),i=sa.begin("mutate");t.map(r),i(),n()})}}var fa=!1;function ln(){fa=!0}function Gt(){fa=!1}var Ot=null;function Oa(t){if(da&&d.observeMutations){var a=t.treeCallback,n=a===void 0?kt:a,e=t.nodeCallback,r=e===void 0?kt:e,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Ot=new da(function(c){if(!fa){var l=Y();J(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xa(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xa(m.target)&&~_n.indexOf(m.attributeName))if(m.attributeName==="class"&&ge(m.target)){var v=Et(aa(m.target)),b=v.prefix,w=v.iconName;m.target.setAttribute(Qt,b||l),w&&m.target.setAttribute(Jt,w)}else he(m.target)&&r(m.target)})}}),R&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ae(){Ot&&Ot.disconnect()}function Oe(t){var a=t.getAttribute("style"),n=[];return a&&(n=a.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),n}function Ce(t){var a=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Et(aa(t));return r.prefix||(r.prefix=Y()),a&&n&&(r.prefix=a,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=ne(r.prefix,t.innerText)||ra(r.prefix,Dt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Se(t){var a=J(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?a["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||st()):(a["aria-hidden"]="true",a.focusable="false")),a}function Pe(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ca(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ce(t),e=n.iconName,r=n.prefix,i=n.rest,o=Se(t),s=$t("parseNodeAttributes",{},t),f=a.styleParser?Oe(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ee=L.styles;function cn(t){var a=d.autoReplaceSvg==="nest"?Ca(t,{styleParser:!1}):Ca(t);return~a.extra.classes.indexOf(Wa)?z("generateLayersText",t,a):z("generateSvgReplacementMutation",t,a)}var $=new Set;ta.map(function(t){$.add("fa-".concat(t))});Object.keys(et[g]).map($.add.bind($));Object.keys(et[y]).map($.add.bind($));$=ft($);function Sa(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=h.documentElement.classList,e=function(m){return n.add("".concat(va,"-").concat(m))},r=function(m){return n.remove("".concat(va,"-").concat(m))},i=d.autoFetchSvg?$:ta.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ee));i.includes("fa")||i.push("fa");var o=[".".concat(Wa,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=sa.begin("onTree"),c=s.reduce(function(l,m){try{var v=cn(m);v&&l.push(v)}catch(b){Va||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(v){fn(v,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),l()})}).catch(function(v){f(),m(v)})})}function Ne(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(t).then(function(n){n&&fn([n],a)})}function Le(t){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Ht(a||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ht(r||{})),t(e,u(u({},n),{},{mask:r}))}}var Ie=function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,r=e===void 0?M:e,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,m=n.title,v=m===void 0?null:m,b=n.titleId,w=b===void 0?null:b,P=n.classes,x=P===void 0?[]:P,C=n.attributes,k=C===void 0?{}:C,A=n.styles,E=A===void 0?{}:A;if(a){var S=a.prefix,H=a.iconName,U=a.icon;return Nt(u({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:n}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||st()):(k["aria-hidden"]="true",k.focusable="false")),oa({icons:{main:Ut(U),mask:f?Ut(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:u(u({},M),r),symbol:o,title:v,maskId:l,titleId:w,extra:{attributes:k,styles:E,classes:x}})})}},Me={mixout:function(){return{icon:Le(Ie)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sa,n.nodeCallback=Ne,n}}},provides:function(a){a.i2svg=function(n){var e=n.node,r=e===void 0?h:e,i=n.callback,o=i===void 0?function(){}:i;return Sa(r,o)},a.generateSvgReplacementMutation=function(n,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,v=e.extra;return new Promise(function(b,w){Promise.all([Vt(r,s),l.iconName?Vt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var x=Kt(P,2),C=x[0],k=x[1];b([n,oa({icons:{main:C,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=St(s);f.length>0&&(r.style=f);var c;return na(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Te={mixout:function(){return{layer:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Nt({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:n,params:e});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},_e={mixout:function(){return{counter:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return Nt({type:"counter",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),de({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},ze={mixout:function(){return{text:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?M:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,v=e.styles,b=v===void 0?{}:v;return Nt({type:"text",content:n},function(){return X("beforeDOMElementCreation",{content:n,params:e}),ka({content:n,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ft(c))}})})}}},provides:function(a){a.generateLayersText=function(n,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if($a){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ka({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Re=new RegExp('"',"ug"),Pa=[1105920,1112319];function je(t){var a=t.replace(Re,""),n=Kn(a,0),e=n>=Pa[0]&&n<=Pa[1],r=a.length===2?a[0]===a[1]:!1;return{value:Dt(r?a[0]:a),isSecondary:e||r}}function Ea(t,a){var n="".concat(Sn).concat(a.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(n)!==null)return e();var i=J(t.children),o=i.filter(function(U){return U.getAttribute(Ft)===a})[0],s=D.getComputedStyle(t,a),f=s.getPropertyValue("font-family").match(In),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[v][f[2].toLowerCase()]:Mn[v][c],w=je(m),P=w.value,x=w.isSecondary,C=f[0].startsWith("FontAwesome"),k=ra(b,P),A=k;if(C){var E=ee(P);E.iconName&&E.prefix&&(k=E.iconName,b=E.prefix)}if(k&&!x&&(!o||o.getAttribute(Qt)!==b||o.getAttribute(Jt)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var S=Pe(),H=S.extra;H.attributes[Ft]=a,Vt(k,b).then(function(U){var Lt=oa(u(u({},S),{},{icons:{main:U,mask:ia()},prefix:b,iconName:A,extra:H,watchable:!0})),j=h.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Lt.map(function(pn){return ct(pn)}).join(`
`),t.removeAttribute(n),e()}).catch(r)}else e()}else e()})}function Fe(t){return Promise.all([Ea(t,"::before"),Ea(t,"::after")])}function De(t){return t.parentNode!==document.head&&!~En.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Na(t){if(R)return new Promise(function(a,n){var e=J(t.querySelectorAll("*")).filter(De).map(Fe),r=sa.begin("searchPseudoElements");ln(),Promise.all(e).then(function(){r(),Gt(),a()}).catch(function(){r(),Gt(),n()})})}var Ye={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Na,n}}},provides:function(a){a.pseudoElements2svg=function(n){var e=n.node,r=e===void 0?h:e;d.searchPseudoElements&&Na(r)}}},La=!1,$e={mixout:function(){return{dom:{unwatch:function(){ln(),La=!0}}}},hooks:function(){return{bootstrap:function(){Oa($t("mutationObserverCallbacks",{}))},noAuto:function(){Ae()},watch:function(n){var e=n.observeMutationsRoot;La?Gt():Oa($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ia=function(a){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},n)},He={mixout:function(){return{parse:{transform:function(n){return Ia(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-transform");return r&&(n.transform=Ia(r)),n}}},provides:function(a){a.generateAbstractTransformGrouping=function(n){var e=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}}},_t={x:0,y:0,width:"100%",height:"100%"};function Ma(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function Ue(t){return t.tag==="g"?t.children:[t]}var Ve={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-mask"),i=r?Et(r.split(" ").map(function(o){return o.trim()})):ia();return i.prefix||(i.prefix=Y()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides:function(a){a.generateAbstractMask=function(n){var e=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,m=o.width,v=o.icon,b=Un({transform:f,containerWidth:m,iconWidth:c}),w={tag:"rect",attributes:u(u({},_t),{},{fill:"white"})},P=l.children?{children:l.children.map(Ma)}:{},x={tag:"g",attributes:u({},b.inner),children:[Ma(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},P))]},C={tag:"g",attributes:u({},b.outer),children:[x]},k="mask-".concat(s||st()),A="clip-".concat(s||st()),E={tag:"mask",attributes:u(u({},_t),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,C]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Ue(v)},E]};return e.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},_t)}),{children:e,attributes:r}}}},We={provides:function(a){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ge={hooks:function(){return{parseNodeAttributes:function(n,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Xe=[Gn,Me,Te,_e,ze,Ye,$e,He,Ve,We,Ge];oe(Xe,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var Xt=N.parse;N.findIconDefinition;N.toHtml;var Be=N.icon;N.layer;N.text;N.counter;function Ta(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function I(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Ta(Object(n),!0).forEach(function(e){K(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ta(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ct(t)}function K(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function qe(t,a){if(t==null)return{};var n={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(a.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ke(t,a){if(t==null)return{};var n=qe(t,a),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}function Bt(t){return Ze(t)||Qe(t)||Je(t)||tr()}function Ze(t){if(Array.isArray(t))return qt(t)}function Qe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Je(t,a){if(t){if(typeof t=="string")return qt(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qt(t,a)}}function qt(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,e=new Array(a);n<a;n++)e[n]=t[n];return e}function tr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(t){var a,n=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,w=t.border,P=t.listItem,x=t.flip,C=t.size,k=t.rotation,A=t.pull,E=(a={"fa-beat":n,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":w,"fa-li":P,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},K(a,"fa-".concat(C),typeof C<"u"&&C!==null),K(a,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),K(a,"fa-pull-".concat(A),typeof A<"u"&&A!==null),K(a,"fa-swap-opacity",t.swapOpacity),a);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function nr(t){return t=t-0,t===t}function un(t){return nr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(a,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var er=["style"];function rr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ir(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,n){var e=n.indexOf(":"),r=un(n.slice(0,e)),i=n.slice(e+1).trim();return r.startsWith("webkit")?a[rr(r)]=i:a[r]=i,a},{})}function mn(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(f){return mn(t,f)}),r=Object.keys(a.attributes||{}).reduce(function(f,c){var l=a.attributes[c];switch(c){case"class":f.attrs.className=l,delete a.attributes.class;break;case"style":f.attrs.style=ir(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[un(c)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Ke(n,er);return r.attrs.style=I(I({},r.attrs.style),o),t.apply(void 0,[a.tag,I(I({},r.attrs),s)].concat(Bt(e)))}var dn=!1;try{dn=!0}catch{}function or(){if(!dn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _a(t){if(t&&Ct(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xt.icon)return Xt.icon(t);if(t===null)return null;if(t&&Ct(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zt(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?K({},t,a):{}}var za={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},vn=Ra.forwardRef(function(t,a){var n=I(I({},za),t),e=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,c=n.maskId,l=_a(e),m=zt("classes",[].concat(Bt(ar(n)),Bt(o.split(" ")))),v=zt("transform",typeof n.transform=="string"?Xt.transform(n.transform):n.transform),b=zt("mask",_a(r)),w=Be(l,I(I(I(I({},m),v),b),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!w)return or("Could not find icon",l),null;var P=w.abstract,x={ref:a};return Object.keys(n).forEach(function(C){za.hasOwnProperty(C)||(x[C]=n[C])}),sr(P[0],x)});vn.displayName="FontAwesomeIcon";vn.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var sr=mn.bind(null,Ra.createElement),cr={prefix:"fas",iconName:"person",icon:[320,512,[129485,"male"],"f183","M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"]},ur={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},mr={prefix:"fas",iconName:"bacon",icon:[576,512,[129363],"f7e5","M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4c-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7L37.9 435.2 9.4 406.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5C136.1 296.2 180.9 231 223.3 169.3l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9c33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1c27.5-24.3 63.4-45.2 117.3-60.6l0 0 .2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2c-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2C327.8 365.9 275.5 442 142.3 508.6c-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"]},dr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},vr={prefix:"fas",iconName:"arrow-up-a-z",icon:[576,512,["sort-alpha-up"],"f15e","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z"]},pr={prefix:"fas",iconName:"map-location-dot",icon:[576,512,["map-marked-alt"],"f5a0","M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},br={prefix:"fas",iconName:"sterling-sign",icon:[320,512,[163,"gbp","pound-sign"],"f154","M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1C104.1 390 112 361.5 112 332.5V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V160.4z"]},gr={prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},hr={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},yr={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},kr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},wr={prefix:"fas",iconName:"circle-nodes",icon:[512,512,[],"e4e2","M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"]},xr={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Ar={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Or={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Cr={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Sr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Pr={prefix:"fas",iconName:"map",icon:[576,512,[128506,62072],"f279","M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"]},Er={prefix:"fas",iconName:"clock-rotate-left",icon:[512,512,["history"],"f1da","M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"]},Nr={prefix:"fas",iconName:"arrow-up-z-a",icon:[576,512,["sort-alpha-up-alt"],"f882","M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z"]},Lr={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};export{vn as F,Cr as a,Sr as b,kr as c,yr as d,Or as e,Er as f,vr as g,Nr as h,Ar as i,wr as j,pr as k,gr as l,dr as m,xr as n,Pr as o,mr as p,cr as q,br as r,hr as s,ur as t,Lr as u};
