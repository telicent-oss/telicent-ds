import{j as r,a as m,F as l}from"./DefaultPropsProvider-FmOZEx_L.js";import{f as U}from"./index-BYX12aAs.js";import{B as t}from"./Button-C2h4Xa-_.js";import{D as p}from"./DataSetIcon-DTgOixlg.js";import{B as X}from"./ButtonBase-W-QUno4-.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-IZ6eR54o.js";import"./Button-D1ibog5D.js";import"./styled-CKqgJSB4.js";import"./generateUtilityClasses-DiIBTi47.js";import"./useTheme-DvsKo-w_.js";import"./useTheme-C43gVfC6.js";import"./SvgIcon-DyVJVZbK.js";import"./TransitionGroupContext-C9C3ikuq.js";const ee={title:"Inputs/Button",component:t,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:U()},decorators:e=>r(X,{sx:{button:{marginInline:2},a:{marginInline:2}},children:e()})},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},s={args:{variant:"tertiary"}},i={render:e=>m(l,{children:[r(t,{size:"large",children:e.children}),r(t,{size:"medium",children:e.children}),r(t,{size:"small",children:e.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},c={render:e=>m(l,{children:[r(t,{startIcon:r(p,{}),children:e.children}),r(t,{endIcon:r(p,{}),children:e.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},d={args:{fullWidth:!0}},C=e=>r("a",{...e}),n={render:e=>m(l,{children:[r(C,{to:"/inputs-button--primary",children:r(t,{component:"div",role:void 0,children:e.children})}),r("a",{href:"https://telicent.io/",target:"_self",children:r(t,{component:"div",role:void 0,children:e.children})})]})};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,B,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,b,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,z,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var x,L,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(L=c.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var F,W,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var _,j,T,A,P;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <>
      <Link to="/inputs-button--primary">
        <Button component="div" role={undefined}>
          {args.children}
        </Button>
      </Link>
      <a href="https://telicent.io/" target="_self">
        <Button component="div" role={undefined}>
          {args.children}
        </Button>
      </a>
    </>
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Sometimes links should look like a button, but behave like links. Do this by\nusing `<a>` tag or react-router-dom's `Link` component.\n\nTo help assistive technologies,\n - avoid nesting interactive element e.g. `<button><a /></button>` or\n   `<a><button /></a>`\n - set Button attributes like so:\n - `role` attribute to `undefined`\n - `component` (root element) to `div`",...(P=(A=n.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};const re=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth","LinkButtons"];export{d as FullWidth,n as LinkButtons,o as Primary,a as Secondary,i as Sizing,s as Tertiary,c as WithIconsAndLabel,re as __namedExportsOrder,ee as default};
