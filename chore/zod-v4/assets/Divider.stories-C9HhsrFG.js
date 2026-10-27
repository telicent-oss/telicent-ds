import{b as o,a as r}from"./iframe-C1kADl7K.js";import{D as s,C as D}from"./Divider-f5jacwQy.js";import{H as I,a as y,T as p}from"./Text-HgubeblD.js";import{F as a}from"./FlexBox-0Zk8Z1wf.js";import{C as n}from"./Chip-Dl8h3Hwb.js";import{B as z,F as T}from"./ExpandLessIcon-BAbK8V4h.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import{B as w}from"./Box-BdLyxJDN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./composeClasses-fLhin0tj.js";import"./Paper-DQDiDue-.js";import"./Divider-CijklUH2.js";import"./dividerClasses-B_31kY5s.js";import"./Typography-B2gj4f-z.js";import"./Stack-VS7yGLX2.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./Chip-Cday2RBB.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./TransitionGroupContext-DqUd00ju.js";import"./ButtonBase-NZH3pNGk.js";import"./Box-LsPv36hu.js";import"./Container-BJFXwx0J.js";const nr={title:"Data display/Divider",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}}}},t={render:()=>o(D,{maxWidth:360,children:[o(a,{padding:2,children:[r(I,{children:"Rivers in Africa"}),r(y,{children:"Nile"}),r(p,{children:"The Nile is the longest river in Africa. Its length is around 6,650 kilometers, and its drainage basin covers 11 African countries."})]}),r(s,{}),o(w,{padding:2,children:[r(p,{children:"Other rivers"}),o(a,{direction:"row",spacing:1,children:[r(n,{label:"Zambezi",size:"small"}),r(n,{label:"Niger",size:"small"}),r(n,{label:"Mara",size:"small"})]})]})]})},e={args:{orientation:"vertical",flexItem:!0},render:C=>o(a,{direction:"row",spacing:1,border:1,width:"fit-content",borderColor:"grey",borderRadius:1,padding:1,children:[r(z,{}),r(s,{...C}),r(T,{})]})},i={...e},ar=["Example","Orientation","FlexItem"];var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
