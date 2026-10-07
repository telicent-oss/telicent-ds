import{r as N,u as w,_ as I,c as a,j as g,w as c,J as $,M as D,a as U}from"./iframe-BMeccPNJ.js";import{g as z,c as E}from"./generateUtilityClass-DYVh7KgR.js";import{s as v}from"./styled-PlbL7nuw.js";import{g as F}from"./generateUtilityClasses-g9ufi11G.js";import{c as K}from"./composeClasses-fLhin0tj.js";function W(r){return z("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const B=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,_;const t=44,G=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),J=D(S||(S=l`
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
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:d}=r,m={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return K(m,W,e)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),G)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(_||(_=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),J)),A=N.forwardRef(function(e,s){const o=w({props:e,name:"MuiCircularProgress"}),{className:d,color:m="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=o,j=I(o,B),n=a({},o,{color:m,disableShrink:M,size:u,thickness:i,value:p,variant:k}),f=L(n),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(V,a({className:E(f.root,d),style:a({width:u,height:u},x,R),ownerState:n,ref:s,role:"progressbar"},y,j,{children:g.jsx(Z,{className:f.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(q,{className:f.circle,style:h,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),H=r=>U(A,{...r});H.__docgenInfo={description:"",methods:[],displayName:"Spinner"};export{A as C,H as S};
