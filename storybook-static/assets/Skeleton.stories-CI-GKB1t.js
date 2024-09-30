import{j as $}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{_ as U}from"./createTheme-CNnsHS-w.js";import{_ as i}from"./extends-BFqQA52f.js";import{r as j}from"./index-BP8_t0zE.js";import{g as A,s as M,c as B,a as X}from"./styled-BLGAcoWM.js";import{g as E}from"./generateUtilityClasses-DWDXFugI.js";import{j as N}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{k as x,c as u,u as F}from"./DefaultPropsProvider-O1PffH9H.js";import{a as K}from"./colorManipulator-DiQxjTVg.js";import"./StyledEngineProvider-C7Os3f6l.js";function O(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(t){return parseFloat(t)}function W(t){return A("MuiSkeleton",t)}E("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=["animation","className","component","height","style","variant","width"];let l=t=>t,m,g,f,b;const L=t=>{const{classes:e,variant:a,animation:o,hasChildren:r,width:d,height:s}=t;return X({root:["root",a,o,r&&"withChildren",r&&!d&&"fitContent",r&&!s&&"heightAuto"]},W,e)},T=x(m||(m=l`
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
`)),q=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=O(t.shape.borderRadius)||"px",o=P(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:K(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(f||(f=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),T),({ownerState:t,theme:e})=>t.animation==="wave"&&u(b||(b=l`
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
    `),V,(e.vars||e).palette.action.hover)),z=j.forwardRef(function(e,a){const o=F({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:d,component:s="span",height:c,style:w,variant:_="text",width:R}=o,h=U(o,D),p=i({},o,{animation:r,component:s,variant:_,hasChildren:!!h.children}),S=L(p);return N.jsx(q,i({as:s,ref:a,className:B(S.root,d),ownerState:p},h,{style:i({width:R,height:c},w)}))}),y=z,ot={component:y},n={args:{},parameters:{docs:{description:{story:'A component used to visually stub out text/images which are "pending".'}}},render:t=>$(y,{...t})};var v,k,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`A component used to visually stub out text/images which are "pending".\`
      }
    }
  },
  render: args => <Skeleton {...args} />
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const rt=["Basic"];export{n as Basic,rt as __namedExportsOrder,ot as default};
