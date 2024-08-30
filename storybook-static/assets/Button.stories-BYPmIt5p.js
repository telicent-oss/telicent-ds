import{j as e}from"./jsx-runtime-CexXSJP5.js";import{f as F}from"./index-X0cxQbTF.js";import{B as t}from"./Button-CppCz7r3.js";import{D as m}from"./DataSetIcon-DalgZNGA.js";import{B as T}from"./Box-Jzim7HDp.js";import"./index-BP8_t0zE.js";import"./index-DZLKizrv.js";import"./PrimaryButton-CTndbc_a.js";import"./Button-D8_qyAsZ.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./useTheme-CmkBszCQ.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./SvgIcon-C5tcZsyu.js";const ee={title:"Inputs/Button",component:t,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:F()},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},fullWidth:{description:"If true, the button will take up the full width of its container.",type:"boolean",table:{defaultValue:{summary:"false"}}},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]},variant:{description:"The type of button variant to use",table:{defaultValue:{summary:"primary"}},control:"select",options:["primary","secondary","tertiary"]},endIcon:{description:"Element placed after the children."},startIcon:{description:"Element placed before the children."}},decorators:r=>e.jsx(T,{display:"flex",gap:2,children:r()})},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"large",children:r.children}),e.jsx(t,{size:"medium",children:r.children}),e.jsx(t,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{startIcon:e.jsx(m,{}),children:r.children}),e.jsx(t,{endIcon:e.jsx(m,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,B,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var z,I,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var v,w,W;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const re=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth"];export{c as FullWidth,o as Primary,a as Secondary,s as Sizing,n as Tertiary,i as WithIconsAndLabel,re as __namedExportsOrder,ee as default};
