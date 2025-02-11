import{b as $,_ as oe,h as ce,u as ae,j as L}from"./DefaultPropsProvider-mMqPhAz4.js";import{r as d}from"./index-BBkUAzwr.js";import{e as ue,c as fe,a as de,g as pe,s as me}from"./styled-Coa2-1Nt.js";import{s as ge}from"./styled-BLcKEFBG.js";import{u as be}from"./useTheme-Dc11I-P9.js";import{j as F}from"./jsx-runtime-BwZVo4Wn.js";import{u as ye}from"./useThemeProps-B38RGH21.js";function $e(e,n){var r,i;return d.isValidElement(e)&&n.indexOf((r=e.type.muiName)!=null?r:(i=e.type)==null||(i=i._payload)==null||(i=i.value)==null?void 0:i.muiName)!==-1}const Ge=(e,n)=>e.filter(r=>n.includes(r)),m=(e,n,r)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((t,s)=>{r((l,u)=>{s<=e.keys.length-1&&(s===0?Object.assign(l,u):l[e.up(e.keys[s])]=u)},t)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Ge(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.indexOf(s)!==-1){const l=n[s];l!==void 0&&r((u,g)=>{i===s?Object.assign(u,g):u[e.up(s)]=g},l)}}):(typeof n=="number"||typeof n=="string")&&r((t,s)=>{Object.assign(t,s)},n)};function a(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function A(e){return function(r){return`var(--Grid-${r}Spacing${a(e.unstable_level)})`}}function w(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${a(e.unstable_level-1)})`}}function k(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${a(e.unstable_level-1)})`}const xe=({theme:e,ownerState:n})=>{const r=A(n),i={};return m(e.breakpoints,n.gridSize,(t,s)=>{let l={};s===!0&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${k(n)}${G(n)?` + ${r("column")}`:""})`}),t(i,l)}),i},ve=({theme:e,ownerState:n})=>{const r={};return m(e.breakpoints,n.gridOffset,(i,t)=>{let s={};t==="auto"&&(s={marginLeft:"auto"}),typeof t=="number"&&(s={marginLeft:t===0?"0px":`calc(100% * ${t} / ${k(n)})`}),i(r,s)}),r},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${a(n.unstable_level)}`]:k(n)}:{"--Grid-columns":12};return m(e.breakpoints,n.columns,(i,t)=>{i(r,{[`--Grid-columns${a(n.unstable_level)}`]:t})}),r},he=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),i=G(n)?{[`--Grid-rowSpacing${a(n.unstable_level)}`]:r("row")}:{};return m(e.breakpoints,n.rowSpacing,(t,s)=>{var l;t(i,{[`--Grid-rowSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),i},Oe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),i=G(n)?{[`--Grid-columnSpacing${a(n.unstable_level)}`]:r("column")}:{};return m(e.breakpoints,n.columnSpacing,(t,s)=>{var l;t(i,{[`--Grid-columnSpacing${a(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),i},Se=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return m(e.breakpoints,n.direction,(i,t)=>{i(r,{flexDirection:t})}),r},Ee=({ownerState:e})=>{const n=A(e),r=w(e);return $({minWidth:0,boxSizing:"border-box"},e.container&&$({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&$({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Ne=e=>{const n=[];return Object.entries(e).forEach(([r,i])=>{i!==!1&&i!==void 0&&n.push(`grid-${r}-${String(i)}`)}),n},je=(e,n="xs")=>{function r(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([t,s])=>{r(s)&&i.push(`spacing-${t}-${String(s)}`)}),i}return[]},Ce=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],Pe=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],we=ce(),ke=ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function qe(e){return ye({props:e,name:"MuiGrid",defaultTheme:we})}function De(e={}){const{createStyledComponent:n=ke,useThemeProps:r=qe,componentName:i="MuiGrid"}=e,t=d.createContext(void 0),s=(g,c)=>{const{container:x,direction:v,spacing:_,wrap:b,gridSize:h}=g,O={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ce(v),...Ne(h),...x?je(_,c.breakpoints.keys[0]):[]]};return de(O,S=>pe(i,S),{})},l=n(_e,Oe,he,xe,Se,Ee,ve),u=d.forwardRef(function(c,x){var v,_,b,h,O,S,q,D;const N=be(),V=r(c),j=ue(V),E=d.useContext(t),{className:U,children:K,columns:H=12,container:J=!1,component:Q="div",direction:X="row",wrap:Y="wrap",spacing:C=0,rowSpacing:Z=C,columnSpacing:ee=C,disableEqualOverflow:R,unstable_level:f=0}=j,ne=oe(j,Pe);let y=R;f&&R!==void 0&&(y=c.disableEqualOverflow);const M={},T={},z={};Object.entries(ne).forEach(([o,p])=>{N.breakpoints.values[o]!==void 0?M[o]=p:N.breakpoints.values[o.replace("Offset","")]!==void 0?T[o.replace("Offset","")]=p:z[o]=p});const re=(v=c.columns)!=null?v:f?void 0:H,ie=(_=c.spacing)!=null?_:f?void 0:C,se=(b=(h=c.rowSpacing)!=null?h:c.spacing)!=null?b:f?void 0:Z,te=(O=(S=c.columnSpacing)!=null?S:c.spacing)!=null?O:f?void 0:ee,B=$({},j,{level:f,columns:re,container:J,direction:X,wrap:Y,spacing:ie,rowSpacing:se,columnSpacing:te,gridSize:M,gridOffset:T,disableEqualOverflow:(q=(D=y)!=null?D:E)!=null?q:!1,parentDisableEqualOverflow:E}),le=s(B,N);let P=F.jsx(l,$({ref:x,as:Q,ownerState:B,className:fe(le.root,U)},z,{children:d.Children.map(K,o=>{if(d.isValidElement(o)&&$e(o,["Grid"])){var p,W;return d.cloneElement(o,{unstable_level:(p=(W=o.props)==null?void 0:W.unstable_level)!=null?p:f+1})}return o})}));return y!==void 0&&y!==(E??!1)&&(P=F.jsx(t.Provider,{value:y,children:P})),P});return u.muiName="Grid",u}const I=De({createStyledComponent:me("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>ae({props:e,name:"MuiGrid2"})}),Re=e=>L(I,{container:!0,...e,children:e.children}),Me=e=>L(I,{...e,children:e.children});Re.__docgenInfo={description:"",methods:[],displayName:"FlexGrid"};Me.__docgenInfo={description:"",methods:[],displayName:"FlexGridItem"};export{Me as F,Re as a,$e as i};
