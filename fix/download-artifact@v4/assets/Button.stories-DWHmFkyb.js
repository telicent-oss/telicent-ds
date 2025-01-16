import{j as e,a as m,F as l}from"./DefaultPropsProvider--lJPAVOf.js";import{f as A}from"./index-3Lpd23TA.js";import{B as n}from"./Button--cz5G96H.js";import{D as p}from"./DataSetIcon-DtNNSIik.js";import{B as P}from"./ButtonBase-DOatf38x.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./PrimaryButton-DlcywPdN.js";import"./Button-D07OoOtO.js";import"./styled-BSeuGzyp.js";import"./generateUtilityClasses-MMAG8yM0.js";import"./useTheme-tLVpAwB4.js";import"./useTheme-DqTbxjpC.js";import"./SvgIcon-DJ7HZSEs.js";import"./TransitionGroupContext-DmssZhy-.js";const $={title:"Inputs/Button",component:n,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:A()},decorators:r=>e(P,{sx:{button:{marginInline:2},a:{marginInline:2}},children:r()})},t={args:{variant:"primary"}},o={args:{variant:"secondary"}},a={args:{variant:"tertiary"}},s={render:r=>m(l,{children:[e(n,{size:"large",children:r.children}),e(n,{size:"medium",children:r.children}),e(n,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:r=>m(l,{children:[e(n,{startIcon:e(p,{}),children:r.children}),e(n,{endIcon:e(p,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}},j=r=>e("a",{...r});j.displayName="Link";const u=void 0,d={render:r=>m(l,{children:[e(j,{to:"/inputs-button--primary",children:e(n,{component:"div",role:u,children:r.children})}),e("a",{href:"https://telicent.io/",target:"_self",children:e(n,{component:"div",role:u,children:r.children})})]})};var h,g,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const rr=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth","LinkButtons"];export{c as FullWidth,d as LinkButtons,t as Primary,o as Secondary,s as Sizing,a as Tertiary,i as WithIconsAndLabel,rr as __namedExportsOrder,$ as default};
