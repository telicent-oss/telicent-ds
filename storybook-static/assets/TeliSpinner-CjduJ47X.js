import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{b as l,_ as T}from"./createTheme-CnHyYZiq.js";import{_ as a}from"./extends-CCbyfPlC.js";import{r as w}from"./index-BwDkhjyp.js";import{g as I,k as D,s as k,j as R,a as U,c as z,b as E}from"./styled-jK8V3O51.js";import{g as F}from"./generateUtilityClasses-BGohe2Km.js";function K(r){return I("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const V=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,_,P,S,b;const t=44,W=D(_||(_=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),q=D(P||(P=d`
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
`)),B=r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,p={root:["root",s,`color${l(o)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,m&&"circleDisableShrink"]};return E(p,K,e)},G=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R(S||(S=d`
      animation: ${0} 1.4s linear infinite;
    `),W)),L=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R(b||(b=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),q)),A=w.forwardRef(function(e,s){const o=U({props:e,name:"MuiCircularProgress"}),{className:m,color:p="primary",disableShrink:j=!1,size:u=40,style:M,thickness:i=3.6,value:f=0,variant:v="indeterminate"}=o,N=T(o,V),n=a({},o,{color:p,disableShrink:j,size:u,thickness:i,value:f,variant:v}),h=B(n),g={},x={},y={};if(v==="determinate"){const C=2*Math.PI*((t-i)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return c.jsx(G,a({className:z(h.root,m),style:a({width:u,height:u},x,M),ownerState:n,ref:s,role:"progressbar"},y,N,{children:c.jsx(L,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:c.jsx(Z,{className:h.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),$=r=>c.jsx(A,{...r});try{$.displayName="TeliSpinner",$.__docgenInfo={description:"",displayName:"TeliSpinner",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{$ as T};
