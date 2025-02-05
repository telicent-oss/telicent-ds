import{j as e,a as m,F as p}from"./DefaultPropsProvider-DW_T1ksU.js";import{f as A}from"./index-3Lpd23TA.js";import{B as n}from"./Button-Dqvxy-zZ.js";import{D as l}from"./DataSetIcon-CVKUnWQK.js";import{B as P}from"./Box-BBaP0q4U.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./PrimaryButton-BhFuj2T-.js";import"./Button-DUgHbXnN.js";import"./styled-CO2r5wNb.js";import"./generateUtilityClasses-CBYfpbff.js";import"./ButtonBase-k7dNn2-f.js";import"./TransitionGroupContext-DmssZhy-.js";import"./useTheme-CDFymf_6.js";import"./useTheme-B6WcV9Bx.js";import"./SvgIcon-lXQO74Uo.js";const rr={title:"Inputs/Button",component:n,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:A()},decorators:r=>e(P,{sx:{button:{marginInline:2},a:{marginInline:2}},children:r()})},t={args:{variant:"primary"}},o={args:{variant:"secondary"}},a={args:{variant:"tertiary"}},s={render:r=>m(p,{children:[e(n,{size:"large",children:r.children}),e(n,{size:"medium",children:r.children}),e(n,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:r=>m(p,{children:[e(n,{startIcon:e(l,{}),children:r.children}),e(n,{endIcon:e(l,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}},j=r=>e("a",{...r});j.displayName="Link";const u=void 0,d={render:r=>m(p,{children:[e(j,{to:"/inputs-button--primary",children:e(n,{component:"div",role:u,children:r.children})}),e("a",{href:"https://telicent.io/",target:"_self",children:e(n,{component:"div",role:u,children:r.children})})]})};var h,g,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var B,f,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,v,z;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var D,b,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <>
      <Button size="large">{args.children}</Button>
      <Button size="medium">{args.children}</Button>
      <Button size="small">{args.children}</Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "For larger or smaller buttons, use the \`size\` prop."
      }
    }
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var F,x,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <>
      <Button startIcon={<DataSetIcon />}>{args.children}</Button>
      <Button endIcon={<DataSetIcon />}>{args.children}</Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: \`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.\`
      }
    }
  }
}`,...(L=(x=i.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var E,N,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var W,U,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <>
      <Link to="/inputs-button--primary">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </Link>
      <a href="https://telicent.io/" target="_self">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </a>
    </>
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const er=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth","LinkButtons"];export{c as FullWidth,d as LinkButtons,t as Primary,o as Secondary,s as Sizing,a as Tertiary,i as WithIconsAndLabel,er as __namedExportsOrder,rr as default};
