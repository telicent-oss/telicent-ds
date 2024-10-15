import{a as o,j as r}from"./DefaultPropsProvider-BtHbA0VU.js";import{D as s,B as D,F as I}from"./TelicentMark-WRD3ZMbv.js";import{C as y}from"./Card-BJEp-GEW.js";import{H as z,a as T,T as p}from"./Text-CgkSqo90.js";import{F as a}from"./UserIcon-D68f8n6J.js";import{C as n}from"./Chip-BY9InDlU.js";import"./DataSetIcon-Az5FxROx.js";import{B as w}from"./ButtonBase-DCYB2nLY.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-BYpVOPyr.js";import"./SvgIcon-BaDrUo6b.js";import"./generateUtilityClasses-BIknaJ37.js";import"./useTheme-D3IlMF1k.js";import"./useTheme-Ckz7wL11.js";import"./Container-nDHQPLDZ.js";import"./styled-BkWK7I8A.js";import"./useThemeProps-2Kac9Ors.js";import"./index-DXqQCM1T.js";import"./Menu-CE8ciUHE.js";import"./index-CB99OiCM.js";import"./Popover-CEasQiDS.js";import"./utils-C0stDFpQ.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CfOt2XX2.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./resolveComponentProps-NyHP_ua9.js";import"./Paper-DC39T9uc.js";import"./createSvgIcon-CveOJVlc.js";import"./assertThisInitialized-B9jnkVVz.js";const nr={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(y,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(p,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(p,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(D,{}),r(s,{...C}),r(I,{})]})},i={...e};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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