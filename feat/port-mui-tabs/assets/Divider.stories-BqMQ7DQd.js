import{a as o,j as r}from"./iframe-Ce2OCE46.js";import{D as s,C as D}from"./Divider-BydDTYUN.js";import{H as I,a as y,T as d}from"./Text-iWgBtTEF.js";import{F as a}from"./FlexBox-QXmAoGfV.js";import{C as n}from"./Chip-D2Ptw4F5.js";import{B as z,F as T}from"./UserIcon-BeBbW4ae.js";import{B as w}from"./Box-DPN8iDtX.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./Paper-afLuPYhe.js";import"./Divider-DXzVK-0q.js";import"./Typography-wgrPajcY.js";import"./SvgIcon-1ianXB1D.js";import"./Stack-9i_ZvuDA.js";import"./styled-B5NIKwPN.js";import"./createStyled-C5CYLvYR.js";import"./useThemeProps-iW1JeY1q.js";import"./Chip-DrR5OuDg.js";import"./createSvgIcon-CR2ME6BQ.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./ButtonBase-xU-UolfF.js";import"./useTheme-CLM2GVtV.js";import"./Box-BOtHEcpc.js";import"./Container-bE4ocZr9.js";const er={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[r(I,{children:"Rivers in Africa"}),r(y,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(z,{}),r(s,{...C}),r(T,{})]})},i={...e};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
