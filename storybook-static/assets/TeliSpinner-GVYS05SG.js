import{j as N}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{d as c,_ as I}from"./createTheme-CNnsHS-w.js";import{_ as a}from"./extends-BFqQA52f.js";import{r as U}from"./index-BP8_t0zE.js";import{g as w,s as v,c as z,a as E}from"./styled-BLGAcoWM.js";import{g as T}from"./generateUtilityClasses-DWDXFugI.js";import{j as g}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{k as $,c as D,u as F}from"./DefaultPropsProvider-O1PffH9H.js";function K(r){return w("MuiCircularProgress",r)}T("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,_;const t=44,B=$(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=$(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,d={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,m&&"circleDisableShrink"]};return E(d,K,e)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D(_||(_=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),A=U.forwardRef(function(e,s){const o=F({props:e,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:j=!1,size:p=40,style:M,thickness:i=3.6,value:u=0,variant:k="indeterminate"}=o,R=I(o,W),n=a({},o,{color:d,disableShrink:j,size:p,thickness:i,value:u,variant:k}),f=L(n),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(u),h.strokeDashoffset=`${((100-u)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(V,a({className:z(f.root,m),style:a({width:p,height:p},x,M),ownerState:n,ref:s,role:"progressbar"},y,R,{children:g.jsx(Z,{className:f.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(q,{className:f.circle,style:h,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),H=r=>N(A,{...r});H.__docgenInfo={description:"",methods:[],displayName:"TeliSpinner"};export{H as T};
