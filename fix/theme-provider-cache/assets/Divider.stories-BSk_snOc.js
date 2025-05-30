import{a as o,j as r}from"./DefaultPropsProvider-ZTfV1Zta.js";import{D as s,B as D,F as I}from"./Divider-U0HyYZdi.js";import{C as y}from"./Card-BfV-nf9i.js";import{H as z,a as T,T as d}from"./Text-CGNagbCi.js";import{F as a}from"./FlexBox-DADmAnZF.js";import{C as t}from"./Chip-Bi37CbO4.js";import"./DataSetIcon-CHIrb2GC.js";import"./UserIcon-DmjklXFK.js";import{B as w}from"./Box-DBuGxpzg.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-DM7CEwi3.js";import"./styled-jMWuTdIG.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./FlexGrid-CLKmKS3u.js";import"./styled-NI2V6uj_.js";import"./useTheme-BusmB1QR.js";import"./useThemeProps-BdYmkKoE.js";import"./useTheme-DUKUC1WO.js";import"./Container-C8J4gsN5.js";import"./Paper-BtR36xUR.js";import"./createSvgIcon-B0Qv8yy1.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-B36byFIM.js";const $={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},n={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(t,{label:"Zambezi",size:"small"}),r(t,{label:"Niger",size:"small"}),r(t,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,h,x,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const rr=["Example","Orientation","FlexItem"];export{n as Example,i as FlexItem,e as Orientation,rr as __namedExportsOrder,$ as default};
