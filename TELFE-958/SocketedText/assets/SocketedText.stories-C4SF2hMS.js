import{j as e,a as U}from"./DefaultPropsProvider-mMqPhAz4.js";import{S as r}from"./SocketedText-BAxe8Aam.js";import{T as p}from"./Typography-RFRigqiF.js";import{B as f}from"./Box-DOOM5p70.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./useTheme-Dc11I-P9.js";const ne={title:"Component Library/Data Display/SocketedText",component:r,tags:["autodocs"],args:{children:"Default text"}},a={args:{children:"Text with beforeItem slot icon",beforeItem:e("i",{className:"fa-solid fa-chevron-left"})}},t={args:{children:"Text with afterItem slot icon",afterItem:e("i",{className:"fa-solid fa-chevron-right"})}},o={args:{children:"Text with both slots",beforeItem:e("i",{className:"fa-solid fa-chevron-left"}),afterItem:e("i",{className:"fa-solid fa-chevron-right"})}},s={args:{children:"Open in SEARCH",afterItem:e("i",{className:"fa-solid fa-arrow-up-right-from-square"}),component:"a",href:"https://example.com",sx:{color:"primary.main",textDecoration:"none","&:hover":{textDecoration:"underline"}}}},n={args:{children:"Header with Icon Slots",variant:"h4",beforeItem:e("i",{className:"fa-solid fa-fire"}),afterItem:e("i",{className:"fa-solid fa-crown"}),containerSX:{gap:2}}},i={render:()=>U(f,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(p,{variant:"h6",children:"Normal Typography"}),e(p,{variant:"body1",children:"This is a normal Typography component for comparison."}),e(p,{variant:"h6",children:"SocketedText"}),e(r,{children:"SocketedText behaving like Typography",beforeItem:e("i",{className:"fa-solid fa-heart"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1"})]})},c={args:{children:"Text with custom slot styles",beforeItem:e("i",{className:"fa-solid fa-music"}),afterItem:e("i",{className:"fa-solid fa-volume-up"}),beforeItemSX:{color:"primary.main",fontSize:"1.5em"},afterItemSX:{color:"secondary.main",fontSize:"1.5em"},containerSX:{gap:2}}},l={render:()=>e(f,{sx:{width:300,border:"1px dashed gray",p:2},children:e(r,{children:"This is a very long text that shows that the icons stay center aligned by default.",beforeItem:e("i",{className:"fa-solid fa-info-circle"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1",containerSX:{gap:1}})})},m={render:()=>e(f,{sx:{width:300,border:"1px dashed gray",p:2},children:e(r,{children:"This is also very long text but with icons aligned to the top and text-centered. I think it shows - although this tries to mimic normal text - it is not text so so there are limits ",beforeItem:e("i",{className:"fa-solid fa-info-circle"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1",containerSX:{gap:1,textAlign:"center",alignItems:"flex-start"}})})},P=Q=>{throw new Error(Q)},d={render:()=>e(r,{children:"only text",propCheckError:P})},h={render:()=>e(r,{component:"a",children:"no href",propCheckError:P})};var g,x,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Text with beforeItem slot icon",
    beforeItem: <i className="fa-solid fa-chevron-left" />
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,S,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Text with afterItem slot icon",
    afterItem: <i className="fa-solid fa-chevron-right" />
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var b,T,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Text with both slots",
    beforeItem: <i className="fa-solid fa-chevron-left" />,
    afterItem: <i className="fa-solid fa-chevron-right" />
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,w,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Open in SEARCH",
    afterItem: <i className="fa-solid fa-arrow-up-right-from-square" />,
    component: "a",
    href: "https://example.com",
    // For creating link styles, setting variants might be better
    // e.g. variant: 'link',
    sx: {
      color: "primary.main",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,A,B;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Header with Icon Slots",
    variant: "h4",
    beforeItem: <i className="fa-solid fa-fire" />,
    afterItem: <i className="fa-solid fa-crown" />,
    containerSX: {
      gap: 2
    }
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var C,W,X;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2
  }}>
      <Typography variant="h6">Normal Typography</Typography>
      <Typography variant="body1">
        This is a normal Typography component for comparison.
      </Typography>
      <Typography variant="h6">SocketedText</Typography>
      <SocketedText children="SocketedText behaving like Typography" beforeItem={<i className="fa-solid fa-heart" />} afterItem={<i className="fa-solid fa-arrow-right" />} variant="body1" />
    </Box>
}`,...(X=(W=i.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var D,H,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Text with custom slot styles",
    beforeItem: <i className="fa-solid fa-music" />,
    afterItem: <i className="fa-solid fa-volume-up" />,
    beforeItemSX: {
      color: "primary.main",
      fontSize: "1.5em"
    },
    afterItemSX: {
      color: "secondary.main",
      fontSize: "1.5em"
    },
    containerSX: {
      gap: 2
    }
  }
}`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var j,L,O;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    border: "1px dashed gray",
    p: 2
  }}>
      <SocketedText children="This is a very long text that shows that the icons stay center aligned by default." beforeItem={<i className="fa-solid fa-info-circle" />} afterItem={<i className="fa-solid fa-arrow-right" />} variant="body1" containerSX={{
      gap: 1
    }} />
    </Box>
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,R,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    border: "1px dashed gray",
    p: 2
  }}>
      <SocketedText children="This is also very long text but with icons aligned to the top and text-centered. I think it shows - although this tries to mimic normal text - it is not text so so there are limits " beforeItem={<i className="fa-solid fa-info-circle" />} afterItem={<i className="fa-solid fa-arrow-right" />} variant="body1" containerSX={{
      gap: 1,
      textAlign: "center",
      alignItems: "flex-start"
    }} />
    </Box>
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,F,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SocketedText children="only text" propCheckError={propCheckError} />
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,M;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <SocketedText component="a" children="no href" propCheckError={propCheckError} />
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ie=["Default","AfterItem","WithBothSlots","AsLink","HeaderVariant","ComparisonWithTypography","CustomSlotStyles","Wrappedchildren","WrappedTextAlignStart","ErrorWhenNobeforeItemAndNoEndSet","ErrorWhenAnchorButNoHrefSet"];export{t as AfterItem,s as AsLink,i as ComparisonWithTypography,c as CustomSlotStyles,a as Default,h as ErrorWhenAnchorButNoHrefSet,d as ErrorWhenNobeforeItemAndNoEndSet,n as HeaderVariant,o as WithBothSlots,m as WrappedTextAlignStart,l as Wrappedchildren,ie as __namedExportsOrder,ne as default};
