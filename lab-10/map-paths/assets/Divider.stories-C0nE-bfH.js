import{a as o,j as r}from"./iframe-B-bQ8-2T.js";import{D as s,C as D}from"./Divider-CwRXz9WH.js";import{H as I,a as y,T as d}from"./Text-C2SnKuds.js";import{F as a}from"./FlexBox-BGamYhMG.js";import{C as n}from"./Chip-d5Jlpmkz.js";import{B as z,F as T}from"./UserIcon-C9Zr7okE.js";import{B as w}from"./Box-Cb51q2aG.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-CG5sjlGK.js";import"./styled-DOmm5J5B.js";import"./generateUtilityClasses-CA_BUpCf.js";import"./Paper-UD-fH5lO.js";import"./Divider-OvS7Rpu4.js";import"./Typography-ichFhS_t.js";import"./SvgIcon-UN5gLgZI.js";import"./Stack-NkQdXg6W.js";import"./styled-XA2qTXOU.js";import"./createStyled-F7qmmNU6.js";import"./useThemeProps-BqcDYrbJ.js";import"./Chip-Bxe4KEdd.js";import"./createSvgIcon-yZopMPvq.js";import"./TransitionGroupContext-D6yDpsO9.js";import"./ButtonBase-jFTlO58q.js";import"./useTheme-B1KTYiIC.js";import"./Box-DUbUks71.js";import"./Container-BrNvvhUm.js";const er={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[r(I,{children:"Rivers in Africa"}),r(y,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(z,{}),r(s,{...C}),r(T,{})]})},i={...e};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card maxWidth={360}>
      <FlexBox padding={2}>
        <H4>Rivers in Africa</H4>
        <H5>Nile</H5>
        <Text>
          The Nile is the longest river in Africa. Its length is around 6,650
          kilometers, and its drainage basin covers 11 African countries.
        </Text>
      </FlexBox>
      <Divider />
      <Box padding={2}>
        <Text>Other rivers</Text>
        <FlexBox direction="row" spacing={1}>
          <Chip label="Zambezi" size="small" />
          <Chip label="Niger" size="small" />
          <Chip label="Mara" size="small" />
        </FlexBox>
      </Box>
    </Card>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,h,x,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    flexItem: true
  },
  render: args => <FlexBox direction="row" spacing={1} border={1} width="fit-content" borderColor="grey" borderRadius={1} padding={1}>
      <BinIcon />
      <Divider {...args} />
      <FloppyDiskIcon />
    </FlexBox>
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Use the orientation prop to change the Divider from `horizontal` to `vertical`.",...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var f,v,b,B,F;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Orientation
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const ir=["Example","Orientation","FlexItem"];export{t as Example,i as FlexItem,e as Orientation,ir as __namedExportsOrder,er as default};
