import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as F}from"./index-B5S312j6.js";import{B as t}from"./Button-Bx9sjnnx.js";import{D as m}from"./DataSetIcon-BkGqgbEj.js";import{B as T}from"./Box-cMJItZWL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PrimaryButton-C6kfx75N.js";import"./Button-BFXfL3pE.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./generateUtilityClasses-BGohe2Km.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useForkRef-UxOPvILp.js";import"./useTheme-DGd8psJl.js";import"./SvgIcon-C67DTzBI.js";const Y={title:"Inputs/Button",component:t,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:F()},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},fullWidth:{description:"If true, the button will take up the full width of its container.",type:"boolean",table:{defaultValue:{summary:"false"}}},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]},variant:{description:"The type of button variant to use",table:{defaultValue:{summary:"primary"}},control:"select",options:["primary","secondary","tertiary"]},endIcon:{description:"Element placed after the children."},startIcon:{description:"Element placed before the children."}},decorators:r=>e.jsx(T,{display:"flex",gap:2,children:r()})},a={args:{variant:"primary"}},o={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"large",children:r.children}),e.jsx(t,{size:"medium",children:r.children}),e.jsx(t,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{startIcon:e.jsx(m,{}),children:r.children}),e.jsx(t,{endIcon:e.jsx(m,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},c={args:{fullWidth:!0}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const Z=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth"];export{c as FullWidth,a as Primary,o as Secondary,s as Sizing,n as Tertiary,i as WithIconsAndLabel,Z as __namedExportsOrder,Y as default};
