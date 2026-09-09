import{a as o,j as r}from"./iframe-BR2e2YDK.js";import{D as s,C as D}from"./Divider-BLHqQnsK.js";import{H as I,a as y,T as d}from"./Text-G3gRIU3S.js";import{F as a}from"./FlexBox-GegQ6KoK.js";import{C as n}from"./Chip-Ba4FoljX.js";import{B as z,F as T}from"./UserIcon-jc37Ujil.js";import{B as w}from"./Box-Cjy76m6G.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./Paper-Bu9Xtg_J.js";import"./Divider-Dz7TZSIi.js";import"./Typography-DUgZ7jdW.js";import"./SvgIcon-Cv-K0R04.js";import"./Stack-COhqTIW9.js";import"./styled-BxRNAcX1.js";import"./createStyled-CY95Mz_9.js";import"./useThemeProps-DwRsn42H.js";import"./Chip-Bs3GvNHw.js";import"./createSvgIcon-BCjTwnIN.js";import"./TransitionGroupContext-ClPOJll4.js";import"./ButtonBase-CmJPQ6Im.js";import"./useTheme-s-RP8QJy.js";import"./Box-DUkA7BwQ.js";import"./Container-BqQatTiF.js";const er={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[r(I,{children:"Rivers in Africa"}),r(y,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(z,{}),r(s,{...C}),r(T,{})]})},i={...e};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
