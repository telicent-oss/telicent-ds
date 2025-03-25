import{j as e,a as t,F as a}from"./DefaultPropsProvider-ZjhccZnB.js";import{f as M}from"./index-ZIyp8o0e.js";import{B as n}from"./Button-B_9AedaA.js";import{D as g}from"./DataSetIcon-BOfCbmrC.js";import{B as Q}from"./Box-DVpyV88R.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./Button-DG02f22Q.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./ButtonBase-GdOU_fqa.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./useTheme-DIIM1Wcn.js";import"./useTheme-BAsjQMSl.js";import"./SvgIcon-0MOxWfTP.js";const ur={title:"Inputs/Button",component:n,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{children:"Button",onClick:M()},decorators:r=>e(Q,{sx:{button:{marginInline:2},a:{marginInline:2}},children:r()})},o={render:r=>t(a,{children:[e(n,{variant:"primary",children:r.children}),e(n,{variant:"primary",disabled:!0,children:r.children})]})},i={render:r=>t(a,{children:[e(n,{variant:"secondary",children:r.children}),e(n,{variant:"secondary",disabled:!0,children:r.children})]})},s={render:r=>t(a,{children:[e(n,{variant:"primary",disableElevation:!0,children:r.children}),e(n,{variant:"secondary",disableElevation:!0,children:r.children})]})},c={render:r=>t(a,{children:[e(n,{variant:"tertiary",children:r.children}),e(n,{variant:"tertiary",disabled:!0,children:r.children})]})},d={render:r=>t(a,{children:[e(n,{variant:"link",children:r.children}),e(n,{variant:"link",disabled:!0,children:r.children})]})},l={render:r=>t(a,{children:[e(n,{variant:"text",children:r.children}),e(n,{variant:"text",disabled:!0,children:r.children})]})},u={render:r=>t(a,{children:[e(n,{size:"large",children:r.children}),e(n,{size:"medium",children:r.children}),e(n,{size:"small",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},h={render:r=>t(a,{children:[e(n,{startIcon:e(g,{}),children:r.children}),e(n,{endIcon:e(g,{}),children:r.children})]}),parameters:{docs:{description:{story:`Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`}}}},m={args:{fullWidth:!0},parameters:{docs:{description:{story:"Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use `fullWidth` to push the box out."}}}},K=r=>e("a",{...r});K.displayName="Link";const B=void 0,p={render:r=>t(a,{children:[e(K,{to:"/inputs-button--primary",children:e(n,{component:"div",role:B,children:r.children})}),e("a",{href:"https://telicent.io/",target:"_self",children:e(n,{component:"div",role:B,children:r.children})})]})};var y,v,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="primary">{args.children}</Button>
      <Button variant="primary" disabled>{args.children}</Button>
    </>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,S,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="secondary">{args.children}</Button>
      <Button variant="secondary" disabled>{args.children}</Button>
    </>
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,E,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  /**
   * TODO make secondary's colours for disableElevation:true match when disableElevation:false
   * WHEN know how to edit theme
   */
  render: args => <>
      <Button variant="primary" disableElevation>{args.children}</Button>
      <Button variant="secondary" disableElevation>{args.children}</Button>
    </>
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var k,D,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="tertiary">{args.children}</Button>
      <Button variant="tertiary" disabled>{args.children}</Button>
    </>
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var N,F,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="link">{args.children}</Button>
      <Button variant="link" disabled>{args.children}</Button>
    </>
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var A,L,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="text">{args.children}</Button>
      <Button variant="text" disabled>{args.children}</Button>
    </>
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var U,_,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var O,P,X;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(X=(P=h.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,C,H;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \\\`fullWidth\\\` to push the box out.\`
      }
    }
  }
}`,...(H=(C=m.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var q,G,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <>
      <Anchor to="/inputs-button--primary">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </Anchor>
      <a href="https://telicent.io/" target="_self">
        <Button component="div" role={UNDEFINED}>
          {args.children}
        </Button>
      </a>
    </>
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const hr=["Primary","Secondary","DisableElevation","Tertiary","Link","Text","Sizing","WithIconsAndLabel","FullWidth","LinkButtons"];export{s as DisableElevation,m as FullWidth,d as Link,p as LinkButtons,o as Primary,i as Secondary,u as Sizing,c as Tertiary,l as Text,h as WithIconsAndLabel,hr as __namedExportsOrder,ur as default};
