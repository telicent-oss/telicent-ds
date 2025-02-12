import{a as o,j as r}from"./DefaultPropsProvider-mMqPhAz4.js";import{D as s,B as D,F as I}from"./TelicentMark-C5iLy6vt.js";import{C as y}from"./Card-B6PfFdOk.js";import{H as z,a as T,T as p}from"./Text-D0yBQujI.js";import{F as a}from"./FlexBox-DBC_blm8.js";import{C as n}from"./Chip-C1kB__FQ.js";import"./DataSetIcon-Be5MVSv8.js";import"./UserIcon-Dnfx85jE.js";import{B as w}from"./Box-DOOM5p70.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-Coa2-1Nt.js";import"./SvgIcon-9htPR1de.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./FlexGrid-CF3-QHHR.js";import"./styled-BLcKEFBG.js";import"./useTheme-Dc11I-P9.js";import"./useThemeProps-B38RGH21.js";import"./useTheme-Dl-fNHlA.js";import"./Container-Db-Htp1t.js";import"./index-mSkvzYyn.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./ButtonBase-odUV3zMF.js";import"./Typography-RFRigqiF.js";import"./Paper-BpSJjDAT.js";import"./createSvgIcon-k3y9_sX-.js";import"./index-DzKG53lc.js";import"./Popover-RATKuaxW.js";import"./utils-CXnKKwNB.js";import"./index-BXZwOzqJ.js";const nr={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(p,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(p,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,h,x,g,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const ar=["Example","Orientation","FlexItem"];export{t as Example,i as FlexItem,e as Orientation,ar as __namedExportsOrder,nr as default};
