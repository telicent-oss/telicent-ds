import{a as o,j as r}from"./DefaultPropsProvider-D0TKvr2r.js";import{D as s,B as D,F as I}from"./Divider-BC0mQ412.js";import{C as y}from"./Card-WooPyQiw.js";import{H as z,a as T,T as d}from"./Text--2kP2Hee.js";import{F as a}from"./FlexBox-T1h48bRK.js";import{C as n}from"./Chip-x1iish4i.js";import"./DataSetIcon-CG5CkLnb.js";import"./UserIcon-iapurhls.js";import{B as w}from"./Box-DMeDqlBc.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./SvgIcon-CBAK7Tq2.js";import"./styled-BnvLNUCt.js";import"./generateUtilityClasses-Col5HTSz.js";import"./FlexGrid-CRPoQZwE.js";import"./styled-S0dBxBnq.js";import"./useTheme-Dxx0vh99.js";import"./useThemeProps-PRgA7wjr.js";import"./useTheme-CEroDfaK.js";import"./Container-DkGJoHLf.js";import"./Typography-BNgSKp3j.js";import"./Paper-hXWzzs4m.js";import"./createSvgIcon-BQydvJ91.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./ButtonBase-CFxa-Eso.js";const rr={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const er=["Example","Orientation","FlexItem"];export{t as Example,i as FlexItem,e as Orientation,er as __namedExportsOrder,rr as default};
