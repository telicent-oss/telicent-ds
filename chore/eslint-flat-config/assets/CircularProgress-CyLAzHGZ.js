import{h as N,k as U,r as w,e as z,_ as E,c as o,j as v,A as n,J as D,K as _}from"./iframe-DZvJTdLH.js";import{c as I}from"./clsx-B-dksMZM.js";import{s as g}from"./styled-CYiE1R_0.js";import{c as K}from"./composeClasses-fLhin0tj.js";function F(r){return N("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,A=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),B=_(S||(S=l`
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
`)),G=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,m={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,d&&"circleDisableShrink"]};return K(m,F,e)},J=g("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),A)),L=g("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),V=g("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),B)),Q=w.forwardRef(function(e,s){const a=z({props:e,name:"MuiCircularProgress"}),{className:d,color:m="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=a,j=E(a,W),c=o({},a,{color:m,disableShrink:M,size:u,thickness:i,value:p,variant:k}),f=G(c),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return v.jsx(J,o({className:I(f.root,d),style:o({width:u,height:u},x,R),ownerState:c,ref:s,role:"progressbar"},y,j,{children:v.jsx(L,{className:f.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:v.jsx(V,{className:f.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{Q as C};
