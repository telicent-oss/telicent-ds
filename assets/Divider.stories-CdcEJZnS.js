import{a as o,j as r}from"./DefaultPropsProvider-wYCywQOd.js";import{D as s,B as D,F as I}from"./TelicentMark-BD5NecVa.js";import{C as y}from"./Card-CCnB9dBG.js";import{H as z,a as T,T as d}from"./Text-_cnSIpXZ.js";import{F as a}from"./UserIcon-BGtgVsRY.js";import{C as n}from"./Chip-tNF-LRXo.js";import"./DataSetIcon-B3OWU2WU.js";import{B as w}from"./ButtonBase-DcPSPA3-.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./styled-ChcWa6mF.js";import"./SvgIcon-BxldJtJX.js";import"./generateUtilityClasses-pp8e96Oj.js";import"./useTheme-CY03VFFQ.js";import"./useTheme-BjBMDFrD.js";import"./Container-D-vVbSn2.js";import"./styled-CCBLWc3l.js";import"./useThemeProps-CJNGtWNs.js";import"./index-DXqQCM1T.js";import"./Menu-DCFAtxym.js";import"./index-Dm3RFQs3.js";import"./Popover-d8D_jjQY.js";import"./utils-BliZeF-y.js";import"./TransitionGroupContext-DFEdpA_P.js";import"./index-C5xsJX-I.js";import"./resolveComponentProps-C3Ck13wz.js";import"./Paper-oIsZ1tmm.js";import"./createSvgIcon-BOXpFpC1.js";const or={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,h,x,g,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const tr=["Example","Orientation","FlexItem"];export{t as Example,i as FlexItem,e as Orientation,tr as __namedExportsOrder,or as default};
