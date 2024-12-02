import{a as o,j as r}from"./DefaultPropsProvider-FmOZEx_L.js";import{D as s,B as D,F as I}from"./TelicentMark-DUG-e8LG.js";import{C as y}from"./Card-CfEFZngu.js";import{H as z,a as T,T as d}from"./Text-Cr0Hr2-l.js";import{F as a}from"./UserIcon-Bcuf3TR6.js";import{C as n}from"./Chip-DTb4MH_T.js";import"./DataSetIcon-DTgOixlg.js";import{B as w}from"./ButtonBase-W-QUno4-.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./styled-CKqgJSB4.js";import"./SvgIcon-DyVJVZbK.js";import"./generateUtilityClasses-DiIBTi47.js";import"./useTheme-DvsKo-w_.js";import"./useTheme-C43gVfC6.js";import"./Container-CYb-wCou.js";import"./styled-DWUfan1z.js";import"./useThemeProps-B4wga_l5.js";import"./index-DXqQCM1T.js";import"./Menu-Bi_XPucy.js";import"./index-B9uXLkjB.js";import"./Popover-CRxjdS_0.js";import"./utils-EQzFzA8f.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-tsvYd0yv.js";import"./Paper-BL2CR90I.js";import"./createSvgIcon-D_LOMcdM.js";const or={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
