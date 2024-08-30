import{j as x}from"./jsx-runtime-CexXSJP5.js";import{_ as U}from"./createTheme-BI2OWDpv.js";import{_ as i}from"./extends-BFqQA52f.js";import{r as A}from"./index-BP8_t0zE.js";import{g as j,s as M,c as B,a as X}from"./styled-CwhWP0k9.js";import{g as E}from"./generateUtilityClasses-CPjhs1S_.js";import{k as y,c as p,u as N}from"./DefaultPropsProvider-D6MvNwoC.js";import{a as F}from"./colorManipulator-BpQThoK9.js";import"./StyledEngineProvider-CtQ9vdjp.js";function K(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function O(t){return parseFloat(t)}function P(t){return j("MuiSkeleton",t)}E("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const W=["animation","className","component","height","style","variant","width"];let l=t=>t,m,g,f,b;const D=t=>{const{classes:e,variant:a,animation:o,hasChildren:r,width:d,height:s}=t;return X({root:["root",a,o,r&&"withChildren",r&&!d&&"fitContent",r&&!s&&"heightAuto"]},P,e)},L=y(m||(m=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=y(g||(g=l`
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
`)),V=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=K(t.shape.borderRadius)||"px",o=O(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:F(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(f||(f=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),L),({ownerState:t,theme:e})=>t.animation==="wave"&&p(b||(b=l`
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
    `),T,(e.vars||e).palette.action.hover)),q=A.forwardRef(function(e,a){const o=N({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:d,component:s="span",height:c,style:_,variant:R="text",width:S}=o,h=U(o,W),u=i({},o,{animation:r,component:s,variant:R,hasChildren:!!h.children}),$=D(u);return x.jsx(V,i({as:s,ref:a,className:B($.root,d),ownerState:u},h,{style:i({width:S,height:c},_)}))}),w=q,et={component:w},n={args:{},parameters:{docs:{description:{story:'A component used to visually stub out text/images which are "pending".'}}},render:t=>x.jsx(w,{...t})};var v,k,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`A component used to visually stub out text/images which are "pending".\`
      }
    }
  },
  render: args => <Skeleton {...args} />
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const at=["Basic"];export{n as Basic,at as __namedExportsOrder,et as default};
