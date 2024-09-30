import{j as e,a as p,F as c}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{Q as B,a as D}from"./useQuery-eCq3Dhqs.js";import{M as P,T as t}from"./TeliTypeIcon-DryBd136.js";import{O as W}from"./OntologyStyles-3vIeTx_k.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-BP8_t0zE.js";import"./Avatar-DWT_ExSU.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./createSvgIcon-BK8_stpa.js";import"./SvgIcon-DbzBai8R.js";import"./generateUtilityClasses-DWDXFugI.js";import"./resolveComponentProps-CRsKqwAv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-rM2yqL0Y.js";import"./lodash-DZrcJQkD.js";const _=new P("http://localhost:3030/","ontology"),q=new B,ie={component:t,parameters:{docs:{source:{type:"dynamic"}}},decorators:[o=>e(D,{client:q,children:e(W,{service:_,children:e("div",{className:"flex items-center gap-x-3",children:e(o,{})})})})]},s={render:()=>p(c,{children:[e(t,{type:"http://ies.data.gov.uk/ontology/ies4#GalaxySector"}),e(t,{type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"}),e(t,{type:"http://ies.data.gov.uk/ontology/ies4#AssetState"})]})},r={},n={render:()=>p(c,{children:[e(t,{type:"http://ies.data.gov.uk/ontology/ies4#Funeral"}),e(t,{type:"http://ies.data.gov.uk/ontology/ies4#OpenStreetmapIdentifier"})]})},i={args:{type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"},render:o=>p(c,{children:[e(t,{...o,size:"sm"}),e(t,{...o}),e(t,{...o,size:"lg"})]})},a={args:{disabled:!0},render:o=>p(c,{children:[e(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#GalaxySector"}),e(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"}),e(t,{...o,type:"http://ies.data.gov.uk/ontology/ies4#AssetState"})]})};var d,l,y,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#AssetState" />
    </>
}`,...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.source},description:{story:`The type icon can be rendered by providing a <code>type</code> prop to the
component.`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var u,h,T,I,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source},description:{story:"When a type is not provided, a blank class will be displayed.",...(v=(I=r.parameters)==null?void 0:I.docs)==null?void 0:v.description}}};var k,S,b,f,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#Funeral" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#OpenStreetmapIdentifier" />
    </>
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:`When a type is specified but the icon is not defined in the ontology,
fallback text will be rendered (Class initials).`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var z,C,L,O,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"
  },
  render: args => <>
      <TeliTypeIcon {...args} size="sm" />
      <TeliTypeIcon {...args} />
      <TeliTypeIcon {...args} size="lg" />
    </>
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"The size of the icon can be controlled using the <code>size</code> prop.",...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.description}}};var A,F,G,j,Q;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <>
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity" />
      <TeliTypeIcon {...args} type="http://ies.data.gov.uk/ontology/ies4#AssetState" />
    </>
}`,...(G=(F=a.parameters)==null?void 0:F.docs)==null?void 0:G.source},description:{story:`The component can be rendered in a disabled state by setting
<code>disabled</code> to true.`,...(Q=(j=a.parameters)==null?void 0:j.docs)==null?void 0:Q.description}}};const ae=["Icons","BlankClassIcon","TypeInitials","Size","DisabledState"];export{r as BlankClassIcon,a as DisabledState,s as Icons,i as Size,n as TypeInitials,ae as __namedExportsOrder,ie as default};
