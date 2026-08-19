import{r as $,u as U,_ as A,b as i,c as j,S as M,G as p,J as x,j as B}from"./iframe-DMZf_z8l.js";import{g as X,c as E}from"./generateUtilityClass-CywfVb3a.js";import{c as F,s as N}from"./styled-BhjXjSTi.js";import{g as K}from"./generateUtilityClasses-E8kj8mkK.js";import"./preload-helper-C1FmrZbK.js";function O(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(t){return parseFloat(t)}function W(t){return X("MuiSkeleton",t)}K("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=["animation","className","component","height","style","variant","width"];let l=t=>t,m,g,f,b;const G=t=>{const{classes:e,variant:a,animation:s,hasChildren:n,width:d,height:o}=t;return F({root:["root",a,s,n&&"withChildren",n&&!d&&"fitContent",n&&!o&&"heightAuto"]},W,e)},J=x(m||(m=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),L=x(g||(g=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=N("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=O(t.shape.borderRadius)||"px",s=P(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(f||(f=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),J),({ownerState:t,theme:e})=>t.animation==="wave"&&p(b||(b=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),L,(e.vars||e).palette.action.hover)),V=$.forwardRef(function(e,a){const s=U({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:d,component:o="span",height:c,style:w,variant:_="text",width:R}=s,h=A(s,D),u=i({},s,{animation:n,component:o,variant:_,hasChildren:!!h.children}),S=G(u);return j.jsx(T,i({as:o,ref:a,className:E(S.root,d),ownerState:u},h,{style:i({width:R,height:c},w)}))}),y=V,Y={title:"Feedback/Skeleton",component:y},r={args:{},parameters:{docs:{description:{story:'A component used to visually stub out text/images which are "pending".'}}},render:t=>B(y,{...t})};var v,k,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`A component used to visually stub out text/images which are "pending".\`
      }
    }
  },
  render: args => <Skeleton {...args} />
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const Z=["Basic"];export{r as Basic,Z as __namedExportsOrder,Y as default};
