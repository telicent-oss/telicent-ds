import{a as o,j as e}from"./iframe-2a6KH_Y2.js";import{D as s,C as D}from"./Divider-wOcP7z2O.js";import{H as I,a as y,T as d}from"./Text-kR8p7DIq.js";import{a,B as z,F as T}from"./UserIcon-DsHhd6fS.js";import{C as t}from"./Chip-CU7LtMVk.js";import{B as w}from"./Box-UIDy46IG.js";import"./preload-helper-C1FmrZbK.js";import"./styled-DgdLtGG_.js";import"./generateUtilityClasses-CVtZWfJL.js";import"./Paper-BSuha06s.js";import"./Divider-D9DUnApf.js";import"./Typography-DrPsKv4d.js";import"./createSvgIcon-D_wZWHy4.js";import"./useTheme-Cx6vnF0r.js";import"./Container-Du9KxdkV.js";import"./styled-D3ZZnIDk.js";import"./createStyled-DxFvKydN.js";import"./useThemeProps-vJmRtplj.js";import"./Stack-CojT_K4F.js";import"./Chip-D4g1B89E.js";import"./TransitionGroupContext-DW3H988m.js";import"./ButtonBase-CsM7vvGl.js";const X={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},n={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[e(I,{children:"Rivers in Africa"}),e(y,{children:"Nile"}),e(d,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),e(s,{}),o(w,{padding:2,children:[e(d,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[e(t,{label:"Zambezi",size:"small"}),e(t,{label:"Niger",size:"small"}),e(t,{label:"Mara",size:"small"})]})]})]})},r={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[e(z,{}),e(s,{...C}),e(T,{})]})},i={...r};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,x,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const Y=["Example","Orientation","FlexItem"];export{n as Example,i as FlexItem,r as Orientation,Y as __namedExportsOrder,X as default};
