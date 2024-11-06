import{j as t,a as m,F as l}from"./DefaultPropsProvider-_Lew82y0.js";import{f as U}from"./index-R3fZrLBo.js";import{B as n}from"./Button-lH8i3IaK.js";import{D as p}from"./DataSetIcon-DvnsXFdB.js";import{B as X}from"./ButtonBase-_xvnSuiZ.js";import"./extends-l96ZYLL7.js";import"./index-BBkUAzwr.js";import"./PrimaryButton-C4l5l8uh.js";import"./Button-CERsBFR3.js";import"./styled-BJBODTqz.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./useTheme-BFzPSdMH.js";import"./useTheme-D3h9sCof.js";import"./SvgIcon-nOE-MXQL.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";const ne={title:"Inputs/Button",component:n,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:U()},decorators:e=>t(X,{sx:{button:{marginInline:2},a:{marginInline:2}},children:e()})},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},s={args:{variant:"tertiary"}},i={render:e=>m(l,{children:[t(n,{size:"large",children:e.children}),t(n,{size:"medium",children:e.children}),t(n,{size:"small",children:e.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},c={render:e=>m(l,{children:[t(n,{startIcon:t(p,{}),children:e.children}),t(n,{endIcon:t(p,{}),children:e.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},d={args:{fullWidth:!0}},C=e=>t("a",{...e}),r={render:e=>m(l,{children:[t(C,{to:"/inputs-button--primary",children:t(n,{component:"div",role:void 0,children:e.children})}),t("a",{href:"https://telicent.io/",target:"_self",children:t(n,{component:"div",role:void 0,children:e.children})})]})};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,B;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,b,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  }
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,I,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var w,x,L;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(x=c.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var F,W,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var j,D,_,A,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:'In some designs, a link may need to look like a button while still\nfunctioning as a standard link. Below are two examples where an anchor\n(`<a>`) tag or a `Link` component from `react-router-dom` can be used to\nachieve this effect. Note that in this example, the `Link` component mimics\nthe behavior of `react-router-dom`.\n\nThe key adjustment here is to make the\nbutton component not render as a button component. To achieve this the `role`\nhas been set to `undefined` and the root element is set to be a `div`. This\nensures that the "button-styled link" behaves correctly without causing\naccessibility issues or styling conflicts.\n\nIt’s important to note, it\'s recommended to avoid nesting interactive\nelements to prevent potential accessibility issues and unexpected behavior.',...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};const re=["Primary","Secondary","Tertiary","Sizing","WithIconsAndLabel","FullWidth","LinkButtons"];export{d as FullWidth,r as LinkButtons,o as Primary,a as Secondary,i as Sizing,s as Tertiary,c as WithIconsAndLabel,re as __namedExportsOrder,ne as default};
