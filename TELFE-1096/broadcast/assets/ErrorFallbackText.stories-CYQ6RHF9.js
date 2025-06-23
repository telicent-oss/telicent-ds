import{j as r}from"./DefaultPropsProvider-BSWuto10.js";import{E as a}from"./ErrorFallbackText-BHFGb7nB.js";import{B as j}from"./Box-DgiOPB4O.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./Typography-Ccepgalm.js";import"./styled-BrIIThlA.js";import"./generateUtilityClasses-D9eTBXKL.js";import"./useTheme-DqUUtKyf.js";const G={title:"Utils/ErrorFallback/ErrorFallbackText",component:a,tags:["autodocs"],args:{name:"ExampleComponent",message:void 0},decorators:[e=>r(j,{sx:{bgcolor:"background.paper",p:2,border:1,borderColor:"grey.300",borderRadius:1,display:"flex",justifyContent:"center"},children:e()})]},s={args:{message:void 0,name:void 0},render:e=>r(a,{...e})},n={args:{message:"Custom failure message",name:void 0},render:e=>r(a,{...e})},o={args:{name:"DataWidget",message:void 0},render:e=>r(a,{...e})},t={args:{name:"name loses",message:"message wins"},render:e=>r(a,{...e})},d={args:{name:void 0,message:"http://long.uris.for.everyone/5da8fdf2-6f20-4050-a130-73a70caa524b/4ddf876b-d3ce-4012-94f7-e1aca0f1805b/fc2b2fb7-3c21-4e15-b7a8-766b5635c42a"},render:e=>r(a,{...e})};var m,i,c,g,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: undefined,
    name: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"DefaultText:\n- When `message` is passed, it overrides `name`.\n- Renders exactly the given `message`.",...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.description}}};var l,f,u,b,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: "Custom failure message",
    name: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source},description:{story:"WithMessage:\n- When `message` is passed, it overrides `name`.\n- Renders exactly the given `message`.",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var h,E,T,W,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: "DataWidget",
    message: undefined
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:'WithName:\n- When `message` is undefined, uses `name` to generate:\n  "⚠️ {name} failed to load".',...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};var F,v,y,D,N;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: "name loses",
    message: "message wins"
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"WithNameAndMessage:\n- When `message` and `name` set, `message` wins",...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.description}}};var C,M,P,S,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: undefined,
    message: "http://long.uris.for.everyone/5da8fdf2-6f20-4050-a130-73a70caa524b/4ddf876b-d3ce-4012-94f7-e1aca0f1805b/fc2b2fb7-3c21-4e15-b7a8-766b5635c42a"
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:'WithNameAndMessage:\n- When `message` is undefined, uses `name` to generate:\n  "⚠️ {name} failed to load".',...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};const H=["Defaults","DefaultText","WithName","WithNameAndMessage","Long"];export{n as DefaultText,s as Defaults,d as Long,o as WithName,t as WithNameAndMessage,H as __namedExportsOrder,G as default};
