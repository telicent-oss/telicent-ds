import{n as C,h as t,b as s,k as y,u as A,_ as O,o as U,p as T,j as E}from"./DefaultPropsProvider-D55Wj1Sq.js";import{r as K}from"./index-Du_IP5cC.js";import{g as X,s as p,c as F,a as W}from"./styled-aipfhsBS.js";import{u as G}from"./index-DfQQp3ks.js";import{g as H}from"./generateUtilityClasses-Cw-uw2o7.js";import{j as m}from"./jsx-runtime-Dwss98Nb.js";function J(r){return X("MuiLinearProgress",r)}H("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Q=["className","color","value","valueBuffer","variant"];let l=r=>r,k,L,_,B,I,R;const h=4,V=C(k||(k=l`
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
`)),Y=C(L||(L=l`
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
`)),Z=C(_||(_=l`
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
`)),w=r=>{const{classes:e,variant:a,color:o}=r,g={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return W(g,J,e)},x=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?U(r.palette[e].main,.62):T(r.palette[e].main,.5),S=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${t(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),rr=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${t(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=x(e,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),Z)),er=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),V)),ar=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(e,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(R||(R=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Y)),or=K.forwardRef(function(e,a){const o=A({props:e,name:"MuiLinearProgress"}),{className:g,color:D="primary",value:v,valueBuffer:P,variant:i="indeterminate"}=o,z=O(o,Q),c=s({},o,{color:D,variant:i}),d=w(c),$=G(),u={},f={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){u["aria-valuenow"]=Math.round(v),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let n=v-100;$&&(n=-n),f.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;$&&(n=-n),f.bar2.transform=`translateX(${n}%)`}return m.jsxs(S,s({className:F(d.root,g),ownerState:c,role:"progressbar"},u,{ref:a},z,{children:[i==="buffer"?m.jsx(rr,{className:d.dashed,ownerState:c}):null,m.jsx(er,{className:d.bar1,ownerState:c,style:f.bar1}),i==="determinate"?null:m.jsx(ar,{className:d.bar2,ownerState:c,style:f.bar2})]}))}),M=({...r})=>E(or,{...r});M.__docgenInfo={description:"",methods:[],displayName:"LinearProgress"};const dr={title:"Feedback/Linear progress",component:M},b={parameters:{docs:{description:{story:"A line"}}}};var j,N,q;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`A line\`
      }
    }
  }
}`,...(q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const ur=["Basic"];export{b as Basic,ur as __namedExportsOrder,dr as default};
