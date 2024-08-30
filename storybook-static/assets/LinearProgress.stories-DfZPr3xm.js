import{j as u}from"./jsx-runtime-CexXSJP5.js";import{g as t,_ as z,p as O,q as U}from"./createTheme-BI2OWDpv.js";import{_ as s}from"./extends-BFqQA52f.js";import{r as T}from"./index-BP8_t0zE.js";import{g as E,s as p,c as K,a as X}from"./styled-CwhWP0k9.js";import{u as W}from"./index-BjJ5k6rE.js";import{g as F}from"./generateUtilityClasses-CPjhs1S_.js";import{k as C,c as y,u as G}from"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";function H(r){return E("MuiLinearProgress",r)}F("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const J=["className","color","value","valueBuffer","variant"];let l=r=>r,_,k,L,B,I,R;const h=4,Q=C(_||(_=l`
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
`)),V=C(k||(k=l`
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
`)),Y=C(L||(L=l`
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
`)),Z=r=>{const{classes:a,variant:e,color:o}=r,g={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return X(g,H,a)},x=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?O(r.palette[a].main,.62):U(r.palette[a].main,.5),w=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),S=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=x(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),Y)),rr=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Q)),ar=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(a,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(R||(R=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),V)),er=T.forwardRef(function(a,e){const o=G({props:a,name:"MuiLinearProgress"}),{className:g,color:A="primary",value:v,valueBuffer:P,variant:i="indeterminate"}=o,D=z(o,J),c=s({},o,{color:A,variant:i}),d=Z(c),$=W(),f={},m={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){f["aria-valuenow"]=Math.round(v),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let n=v-100;$&&(n=-n),m.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;$&&(n=-n),m.bar2.transform=`translateX(${n}%)`}return u.jsxs(w,s({className:K(d.root,g),ownerState:c,role:"progressbar"},f,{ref:e},D,{children:[i==="buffer"?u.jsx(S,{className:d.dashed,ownerState:c}):null,u.jsx(rr,{className:d.bar1,ownerState:c,style:m.bar1}),i==="determinate"?null:u.jsx(ar,{className:d.bar2,ownerState:c,style:m.bar2})]}))}),M=({...r})=>u.jsx(er,{...r});M.__docgenInfo={description:"",methods:[],displayName:"LinearProgress"};const fr={component:M},b={args:{isActive:!0},parameters:{docs:{description:{story:"A line"}}}};var N,j,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const mr=["Basic"];export{b as Basic,mr as __namedExportsOrder,fr as default};
