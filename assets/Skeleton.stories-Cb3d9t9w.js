import{u as $,_ as U,b as i,t as p,v as x,j}from"./DefaultPropsProvider-ZjhccZnB.js";import{r as A}from"./index-BBkUAzwr.js";import{g as M,s as B,c as X,a as E}from"./styled-BT4RjJzR.js";import{g as F}from"./generateUtilityClasses-Ope_UxWr.js";import{j as N}from"./jsx-runtime-BwZVo4Wn.js";import{a as K}from"./colorManipulator-zO1DXvwL.js";function O(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(t){return parseFloat(t)}function W(t){return M("MuiSkeleton",t)}F("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=["animation","className","component","height","style","variant","width"];let l=t=>t,m,g,f,b;const L=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:d,height:n}=t;return E({root:["root",a,s,o&&"withChildren",o&&!d&&"fitContent",o&&!n&&"heightAuto"]},W,e)},T=x(m||(m=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),V=x(g||(g=l`
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
`)),q=B("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=O(t.shape.borderRadius)||"px",s=P(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:K(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(f||(f=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),T),({ownerState:t,theme:e})=>t.animation==="wave"&&p(b||(b=l`
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
    `),V,(e.vars||e).palette.action.hover)),z=A.forwardRef(function(e,a){const s=$({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:d,component:n="span",height:c,style:w,variant:_="text",width:R}=s,h=U(s,D),u=i({},s,{animation:o,component:n,variant:_,hasChildren:!!h.children}),S=L(u);return N.jsx(q,i({as:n,ref:a,className:X(S.root,d),ownerState:u},h,{style:i({width:R,height:c},w)}))}),y=z,Z={title:"Feedback/Skeleton",component:y},r={args:{},parameters:{docs:{description:{story:'A component used to visually stub out text/images which are "pending".'}}},render:t=>j(y,{...t})};var v,k,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`A component used to visually stub out text/images which are "pending".\`
      }
    }
  },
  render: args => <Skeleton {...args} />
}`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const tt=["Basic"];export{r as Basic,tt as __namedExportsOrder,Z as default};
