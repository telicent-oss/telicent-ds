import{j as N}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{a as w,_ as a,l as c,t as $,w as D}from"./identifier-ubkqThfq.js";import{r as I}from"./index-CTjT7uj6.js";import{g as U,c as z,a as E,s as v}from"./styled-DjfdLqg6.js";import{g as F}from"./generateUtilityClasses-axRDXlOb.js";import{j as g}from"./jsx-runtime-CB_V9I5Y.js";import{u as K}from"./DefaultPropsProvider-9gJiDDN4.js";function W(r){return U("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const B=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,_;const t=44,G=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),L=D(S||(S=l`
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
`)),V=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,d={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,m&&"circleDisableShrink"]};return E(d,W,e)},Z=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),G)),q=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),A=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(_||(_=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),L)),H=I.forwardRef(function(e,s){const o=K({props:e,name:"MuiCircularProgress"}),{className:m,color:d="primary",disableShrink:j=!1,size:p=40,style:M,thickness:i=3.6,value:u=0,variant:k="indeterminate"}=o,R=w(o,B),n=a({},o,{color:d,disableShrink:j,size:p,thickness:i,value:u,variant:k}),f=V(n),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(u),h.strokeDashoffset=`${((100-u)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(Z,a({className:z(f.root,m),style:a({width:p,height:p},x,M),ownerState:n,ref:s,role:"progressbar"},y,R,{children:g.jsx(q,{className:f.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(A,{className:f.circle,style:h,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),J=r=>N(H,{...r});J.__docgenInfo={description:"",methods:[],displayName:"Spinner"};export{H as C,J as S};
