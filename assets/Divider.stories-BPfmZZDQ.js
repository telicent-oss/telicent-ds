import{b as o,a as r}from"./iframe-CWOAzfBe.js";import{F as a}from"./FlexBox-pZJaha5u.js";import{D as s,C as D}from"./Divider-pNwF1iHD.js";import{C as n}from"./Chip-BqgzveIY.js";import{B as I,F as y}from"./XIcon-dAr9ghTX.js";import"./CogIcon-DoUxEvuA.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./InfoIcon-Dm5ciMv4.js";import{H as z,a as T,T as p}from"./Text-C2R7pbPC.js";import{B as w}from"./Box-Be9RsHl4.js";import"./preload-helper-Dp1pzeXC.js";import"./Stack-BSuJYMST.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./clsx-B-dksMZM.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./composeClasses-fLhin0tj.js";import"./Paper-7wOgw64N.js";import"./Divider-CFFp1ukz.js";import"./dividerClasses-CvuSSyUr.js";import"./Chip-Cmk_bJZP.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./ButtonBase-B2y4Re2S.js";import"./Typography-D-Cq-N2y.js";import"./Box-BeooBb3v.js";import"./Container-F3J-sHJz.js";const nr={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[r(z,{children:"Rivers in Africa"}),r(T,{children:"Nile"}),r(p,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(p,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(I,{}),r(s,{...C}),r(y,{})]})},i={...e},ar=["Example","Orientation","FlexItem"];var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Use the `flexItem` prop to display the Divider when it's being used in a flex container.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};export{t as Example,i as FlexItem,e as Orientation,ar as __namedExportsOrder,nr as default};
