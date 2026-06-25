import{a as o,j as e}from"./iframe-B_xAjz_a.js";import{D as s,C as D}from"./Divider-D_2gC9Rv.js";import{H as I,a as y,T as d}from"./Text-Dxo92Y_P.js";import{a,B as z,F as T}from"./UserIcon-sXWYTtMY.js";import{C as t}from"./Chip-CbHUK2Oi.js";import{B as w}from"./Box-HNQBJ69w.js";import"./preload-helper-C1FmrZbK.js";import"./styled-DWxCgiIq.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./Paper-BTmXDdaE.js";import"./Divider-CmQ1Xcb5.js";import"./dividerClasses-LlugbWYd.js";import"./Typography-ByJUc9gg.js";import"./createSvgIcon-DNxDKV7W.js";import"./useTheme-DXfWrHWZ.js";import"./Container-DZVvhBo5.js";import"./styled-Dj6VM8rS.js";import"./createStyled-YK0OyouD.js";import"./useThemeProps-B45YfUAa.js";import"./Stack-BUP2Ksyi.js";import"./Chip-CnGyAVsl.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./ButtonBase-rGiwpEnq.js";const Y={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},n={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[e(I,{children:"Rivers in Africa"}),e(y,{children:"Nile"}),e(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),e(s,{}),o(w,{padding:2,children:[e(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[e(t,{label:"Zambezi",size:"small"}),e(t,{label:"Niger",size:"small"}),e(t,{label:"Mara",size:"small"})]})]})]})},r={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[e(z,{}),e(s,{...C}),e(T,{})]})},i={...r};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,x,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    flexItem: true
  },
  render: args => <FlexBox direction="row" spacing={1} border={1} width="fit-content" borderColor="grey" borderRadius={1} padding={1}>
      <BinIcon />
      <Divider {...args} />
      <FloppyDiskIcon />
    </FlexBox>
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Use the orientation prop to change the Divider from `horizontal` to `vertical`.",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var f,v,b,B,F;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Orientation
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const $=["Example","Orientation","FlexItem"];export{n as Example,i as FlexItem,r as Orientation,$ as __namedExportsOrder,Y as default};
