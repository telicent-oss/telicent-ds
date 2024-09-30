import{j as r,a as T,F as k}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{f as D}from"./index-X0cxQbTF.js";import{B as t}from"./Button-BhiT93B9.js";import{D as m}from"./DataSetIcon-FJK9ubUK.js";import{B as V}from"./Box-BAFJFhUk.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-BP8_t0zE.js";import"./index-DZLKizrv.js";import"./PrimaryButton-8a24XeXu.js";import"./Button-C7AWJUTz.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./generateUtilityClasses-DWDXFugI.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./useTheme-Cxnl1_9N.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./SvgIcon-DbzBai8R.js";const oe={title:"Inputs/Button",component:t,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:D()},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},fullWidth:{description:"If true, the button will take up the full width of its container.",type:"boolean",table:{defaultValue:{summary:"false"}}},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]},variant:{description:"The type of button variant to use",table:{defaultValue:{summary:"primary"}},control:"select",options:["primary","secondary","tertiary"]},endIcon:{description:"Element placed after the children."},startIcon:{description:"Element placed before the children."}},decorators:e=>r(V,{display:"flex",gap:2,children:e()})},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},s={render:e=>T(k,{children:[r(t,{size:"large",children:e.children}),r(t,{size:"medium",children:e.children}),r(t,{size:"small",children:e.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:e=>T(k,{children:[r(t,{startIcon:r(m,{}),children:e.children}),r(t,{endIcon:r(m,{}),children:e.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var B,S,z;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,v,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,W,F;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const ae=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth"];export{c as FullWidth,o as Primary,a as Secondary,s as Sizing,n as Tertiary,i as WithIconsAndLabel,ae as __namedExportsOrder,oe as default};
