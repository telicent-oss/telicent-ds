import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{b as t,_ as D,l as O,n as T}from"./createTheme-CnHyYZiq.js";import{_ as s}from"./extends-CCbyfPlC.js";import{r as U}from"./index-BwDkhjyp.js";import{g as E,k as C,s as p,j as P,a as K,c as X,b as V}from"./styled-jK8V3O51.js";import{u as W}from"./index-D8zF22Iw.js";import{g as F}from"./generateUtilityClasses-BGohe2Km.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";function G(r){return E("MuiLinearProgress",r)}F("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const H=["className","color","value","valueBuffer","variant"];let l=r=>r,k,L,B,I,R,N;const h=4,J=C(k||(k=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Q=C(L||(L=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Y=C(B||(B=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Z=r=>{const{classes:e,variant:a,color:o}=r,g={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return V(g,G,e)},_=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?O(r.palette[e].main,.62):T(r.palette[e].main,.5),w=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${t(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),S=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${t(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=_(e,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},P(I||(I=l`
    animation: ${0} 3s infinite linear;
  `),Y)),rr=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&P(R||(R=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),J)),er=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:_(e,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&P(N||(N=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Q)),ar=U.forwardRef(function(e,a){const o=K({props:e,name:"MuiLinearProgress"}),{className:g,color:A="primary",value:v,valueBuffer:x,variant:i="indeterminate"}=o,z=D(o,H),c=s({},o,{color:A,variant:i}),u=Z(c),$=W(),f={},m={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){f["aria-valuenow"]=Math.round(v),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let n=v-100;$&&(n=-n),m.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&x!==void 0){let n=(x||0)-100;$&&(n=-n),m.bar2.transform=`translateX(${n}%)`}return d.jsxs(w,s({className:X(u.root,g),ownerState:c,role:"progressbar"},f,{ref:a},z,{children:[i==="buffer"?d.jsx(S,{className:u.dashed,ownerState:c}):null,d.jsx(rr,{className:u.bar1,ownerState:c,style:m.bar1}),i==="determinate"?null:d.jsx(er,{className:u.bar2,ownerState:c,style:m.bar2})]}))}),y=({...r})=>d.jsx(ar,{...r});try{y.displayName="LinearProgress",y.__docgenInfo={description:"",displayName:"LinearProgress",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const fr={component:y},b={args:{isActive:!0},parameters:{docs:{description:{story:"A line"}}}};var j,q,M;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isActive: true
  },
  parameters: {
    docs: {
      description: {
        story: \`A line\`
      }
    }
  }
}`,...(M=(q=b.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const mr=["Basic"];export{b as Basic,mr as __namedExportsOrder,fr as default};
