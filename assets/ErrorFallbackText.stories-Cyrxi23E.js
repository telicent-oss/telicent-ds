import{a as r}from"./iframe-Bm3hXUOR.js";import{E as a}from"./ErrorFallbackText-C_qZY6-a.js";import{B as w}from"./Box-CexaEQmQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-IeSSUSnG.js";import"./clsx-B-dksMZM.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./composeClasses-fLhin0tj.js";const G={title:"Utils/ErrorFallback/ErrorFallbackText",component:a,tags:["autodocs"],args:{name:"ExampleComponent",message:void 0},decorators:[e=>r(w,{sx:{bgcolor:"background.paper",p:2,border:1,borderColor:"grey.300",borderRadius:1,display:"flex",justifyContent:"center"},children:e()})]},s={args:{message:void 0,name:void 0},render:e=>r(a,{...e})},n={args:{message:"Custom failure message",name:void 0},render:e=>r(a,{...e})},o={args:{name:"DataWidget",message:void 0},render:e=>r(a,{...e})},t={args:{name:"name loses",message:"message wins"},render:e=>r(a,{...e})},d={args:{name:void 0,message:"http://long.uris.for.everyone/5da8fdf2-6f20-4050-a130-73a70caa524b/4ddf876b-d3ce-4012-94f7-e1aca0f1805b/fc2b2fb7-3c21-4e15-b7a8-766b5635c42a"},render:e=>r(a,{...e})},H=["Defaults","DefaultText","WithName","WithNameAndMessage","Long"];var m,i,c,g,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: undefined,
    name: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"DefaultText:\n- When `message` is passed, it overrides `name`.\n- Renders exactly the given `message`.",...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.description}}};var l,u,f,b,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: "Custom failure message",
    name: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"WithMessage:\n- When `message` is passed, it overrides `name`.\n- Renders exactly the given `message`.",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var h,E,F,T,W;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: "DataWidget",
    message: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:'WithName:\n- When `message` is undefined, uses `name` to generate:\n  "⚠️ {name} failed to load".',...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var k,v,y,D,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "name loses",
    message: "message wins"
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"WithNameAndMessage:\n- When `message` and `name` set, `message` wins",...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.description}}};var A,C,M,P,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: undefined,
    message: "http://long.uris.for.everyone/5da8fdf2-6f20-4050-a130-73a70caa524b/4ddf876b-d3ce-4012-94f7-e1aca0f1805b/fc2b2fb7-3c21-4e15-b7a8-766b5635c42a"
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source},description:{story:'WithNameAndMessage:\n- When `message` is undefined, uses `name` to generate:\n  "⚠️ {name} failed to load".',...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};export{n as DefaultText,s as Defaults,d as Long,o as WithName,t as WithNameAndMessage,H as __namedExportsOrder,G as default};
