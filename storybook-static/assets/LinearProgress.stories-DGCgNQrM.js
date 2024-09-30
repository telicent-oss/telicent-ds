import{j as z}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{d as t,_ as O,n as U,o as T}from"./createTheme-CNnsHS-w.js";import{_ as s}from"./extends-BFqQA52f.js";import{r as E}from"./index-BP8_t0zE.js";import{g as K,s as p,c as X,a as W}from"./styled-BLGAcoWM.js";import{u as F}from"./index-BpIClzG7.js";import{g as G}from"./generateUtilityClasses-DWDXFugI.js";import{j as m}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{k as C,c as y,u as H}from"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";function J(r){return K("MuiLinearProgress",r)}G("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Q=["className","color","value","valueBuffer","variant"];let l=r=>r,_,k,L,B,I,R;const h=4,V=C(_||(_=l`
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
`)),Y=C(k||(k=l`
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
`)),Z=C(L||(L=l`
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
`)),w=r=>{const{classes:a,variant:e,color:o}=r,g={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return W(g,J,a)},x=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?U(r.palette[a].main,.62):T(r.palette[a].main,.5),S=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),rr=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=x(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),Z)),ar=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),V)),er=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(a,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(R||(R=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Y)),or=E.forwardRef(function(a,e){const o=H({props:a,name:"MuiLinearProgress"}),{className:g,color:A="primary",value:v,valueBuffer:P,variant:i="indeterminate"}=o,D=O(o,Q),c=s({},o,{color:A,variant:i}),d=w(c),$=F(),u={},f={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){u["aria-valuenow"]=Math.round(v),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let n=v-100;$&&(n=-n),f.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;$&&(n=-n),f.bar2.transform=`translateX(${n}%)`}return m.jsxs(S,s({className:X(d.root,g),ownerState:c,role:"progressbar"},u,{ref:e},D,{children:[i==="buffer"?m.jsx(rr,{className:d.dashed,ownerState:c}):null,m.jsx(ar,{className:d.bar1,ownerState:c,style:f.bar1}),i==="determinate"?null:m.jsx(er,{className:d.bar2,ownerState:c,style:f.bar2})]}))}),M=({...r})=>z(or,{...r});M.__docgenInfo={description:"",methods:[],displayName:"LinearProgress"};const br={component:M},b={args:{isActive:!0},parameters:{docs:{description:{story:"A line"}}}};var j,N,q;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const pr=["Basic"];export{b as Basic,pr as __namedExportsOrder,br as default};
