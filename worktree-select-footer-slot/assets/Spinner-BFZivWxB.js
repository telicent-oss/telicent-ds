import{r as N,x as z,_ as I,b as o,y as g,z as c,L as $,P as D,j as U}from"./iframe-Crov0WQz.js";import{g as w,c as E,a as F,s as v}from"./styled-Iiak7Ogq.js";import{g as K}from"./generateUtilityClasses-YSREvbxX.js";function L(r){return w("MuiCircularProgress",r)}K("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,_;const t=44,B=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=D(S||(S=l`
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
`)),V=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,m={root:["root",s,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return F(m,L,e)},Z=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),q=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),A=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(_||(_=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),H=N.forwardRef(function(e,s){const a=z({props:e,name:"MuiCircularProgress"}),{className:d,color:m="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:p=0,variant:x="indeterminate"}=a,j=I(a,W),n=o({},a,{color:m,disableShrink:M,size:u,thickness:i,value:p,variant:x}),f=V(n),h={},k={},y={};if(x==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return g.jsx(Z,o({className:E(f.root,d),style:o({width:u,height:u},k,R),ownerState:n,ref:s,role:"progressbar"},y,j,{children:g.jsx(q,{className:f.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(A,{className:f.circle,style:h,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),J=r=>U(H,{...r});J.__docgenInfo={description:"",methods:[],displayName:"Spinner"};export{H as C,J as S};
