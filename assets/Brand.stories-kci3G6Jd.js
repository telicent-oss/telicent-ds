import{j as n}from"./iframe-ulHXhjOW.js";import{B as c}from"./Brand-CleGoPe-.js";import{B as A}from"./Box-1efcaeVM.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-Dn5MRyem.js";import"./styled-Czze2UzD.js";import"./generateUtilityClasses-CSjJ64ks.js";const v={title:"Brand/Brand",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
The Brand component displays the Telicent wordmark with an optional \`appName\` and \`beta\` badge. 
It can be rendered with a link and support two sizes \`base\` for standard size and \`jumbo\` for larger landing or home layouts.
The app name is displayed in uppercase and styled using the primary theme color.

---

###  How to use it 

\`\`\`jsx
<Brand
  appName="Design System"
  beta=false
  size="jumbo"
  
/>
\`\`\`
`}},id:"switch-default",ariaLabel:"switch"},args:{appName:"Graph",beta:!1,size:"base"},argTypes:{appName:{control:"text"},beta:{control:"boolean"},size:{control:"radio",options:["base","jumbo"]},href:{control:"text"},target:{control:"text"},rel:{control:"text"}}},e={},r={args:{beta:!0}},a={args:{size:"jumbo",beta:!0},render:p=>n(A,{sx:{p:2},children:n(c,{...p})})},t={args:{appName:void 0}},o={args:{href:"https://telicent.io",target:"_blank",rel:"noreferrer",beta:!0}},s={args:{appName:"Admin",beta:!0},render:p=>n(A,{sx:{p:3,bgcolor:"grey.900"},children:n(c,{...p})})};var i,m,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    beta: true
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,h,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "jumbo",
    beta: true
  },
  render: args => <Box sx={{
    p: 2
  }}>
      <Brand {...args} />
    </Box>
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,x,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    appName: undefined
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var N,y,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    href: "https://telicent.io",
    target: "_blank",
    rel: "noreferrer",
    beta: true
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,z,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    appName: "Admin",
    beta: true
  },
  render: args => <Box sx={{
    p: 3,
    bgcolor: "grey.900"
  }}>
      <Brand {...args} />
    </Box>
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const E=["Default","WithBeta","Jumbo","WithoutAppName","AsLink","OnDarkBackground"];export{o as AsLink,e as Default,a as Jumbo,s as OnDarkBackground,r as WithBeta,t as WithoutAppName,E as __namedExportsOrder,v as default};
