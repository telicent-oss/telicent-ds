import{j as C}from"./jsx-runtime-Nms4Y4qS.js";import{_ as U}from"./createTheme-CnHyYZiq.js";import{_ as i}from"./extends-CCbyfPlC.js";import{r as j}from"./index-BwDkhjyp.js";import{g as A,k as x,s as E,j as u,a as M,c as N,b as T}from"./styled-jK8V3O51.js";import{g as B}from"./generateUtilityClasses-BGohe2Km.js";import{a as X}from"./colorManipulator-9GsPPk9G.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";function F(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function I(t){return parseFloat(t)}function K(t){return A("MuiSkeleton",t)}B("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const L=["animation","className","component","height","style","variant","width"];let l=t=>t,g,f,y,b;const O=t=>{const{classes:e,variant:a,animation:o,hasChildren:n,width:c,height:r}=t;return T({root:["root",a,o,n&&"withChildren",n&&!c&&"fitContent",n&&!r&&"heightAuto"]},K,e)},P=x(g||(g=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),V=x(f||(f=l`
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
`)),W=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=F(t.shape.borderRadius)||"px",o=I(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:X(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(y||(y=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:t,theme:e})=>t.animation==="wave"&&u(b||(b=l`
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
    `),V,(e.vars||e).palette.action.hover)),q=j.forwardRef(function(e,a){const o=M({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:c,component:r="span",height:p,style:w,variant:R="text",width:S}=o,m=U(o,L),h=i({},o,{animation:n,component:r,variant:R,hasChildren:!!m.children}),$=O(h);return C.jsx(W,i({as:r,ref:a,className:N($.root,c),ownerState:h},m,{style:i({width:S,height:p},w)}))}),d=q;try{d.displayName="Skeleton",d.__docgenInfo={description:"",displayName:"Skeleton",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const et={component:d},s={args:{},parameters:{docs:{description:{story:'A component used to visually stub out text/images which are "pending".'}}},render:t=>C.jsx(d,{...t})};var k,v,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: \`A component used to visually stub out text/images which are "pending".\`
      }
    }
  },
  render: args => <Skeleton {...args} />
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const at=["Basic"];export{s as Basic,at as __namedExportsOrder,et as default};
