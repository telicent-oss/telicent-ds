import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{Q as G,a as q}from"./useQuery-BUFZIRxJ.js";import{q as Q,T as t}from"./TeliTypeIcon-D5tYyoUm.js";import{O as B}from"./OntologyStyles-DPshq307.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Avatar-e-pslTjb.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./index-Ce_nUbHw.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./generateUtilityClasses-BGohe2Km.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-UxOPvILp.js";import"./lodash-BYTxXjAY.js";const D=new Q("http://localhost:3030/","ontology"),E=new G,re={component:t,parameters:{docs:{source:{type:"dynamic"}}},decorators:[o=>e.jsx(q,{client:E,children:e.jsx(B,{service:D,children:e.jsx("div",{className:"flex items-center gap-x-3",children:e.jsx(o,{})})})})]},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"http://ies.data.gov.uk/ontology/ies4#GalaxySector"}),e.jsx(t,{type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"}),e.jsx(t,{type:"http://ies.data.gov.uk/ontology/ies4#AssetState"})]})},r={},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"http://ies.data.gov.uk/ontology/ies4#Funeral"}),e.jsx(t,{type:"http://ies.data.gov.uk/ontology/ies4#OpenStreetmapIdentifier"})]})},i={args:{type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...o,size:"sm"}),e.jsx(t,{...o}),e.jsx(t,{...o,size:"lg"})]})},a={args:{disabled:!0},render:o=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#GalaxySector"}),e.jsx(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"}),e.jsx(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#AssetState"})]})};var p,c,d,l,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#AssetState" />
    </>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:`The type icon can be rendered by providing a <code>type</code> prop to the
component.`,...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.description}}};var m,g,u,h,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"When a type is not provided, a blank class will be displayed.",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var T,I,v,k,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#Funeral" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#OpenStreetmapIdentifier" />
    </>
}`,...(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source},description:{story:`When a type is specified but the icon is not defined in the ontology,
fallback text will be rendered (Class initials).`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};var S,b,f,z,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"
  },
  render: args => <>
      <TeliTypeIcon {...args} size="sm" />
      <TeliTypeIcon {...args} />
      <TeliTypeIcon {...args} size="lg" />
    </>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"The size of the icon can be controlled using the <code>size</code> prop.",...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var F,L,O,w,A;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <>
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity" />
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#AssetState" />
    </>
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:`The component can be rendered in a disabled state by setting
<code>disabled</code> to true.`,...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};const ne=["Icons","BlankClassIcon","TypeInitials","Size","DisabledState"];export{r as BlankClassIcon,a as DisabledState,s as Icons,i as Size,n as TypeInitials,ne as __namedExportsOrder,re as default};
