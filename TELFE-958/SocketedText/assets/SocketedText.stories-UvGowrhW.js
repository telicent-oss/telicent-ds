import{j as e,a as P}from"./DefaultPropsProvider-mMqPhAz4.js";import{S as r}from"./SocketedText-BAxe8Aam.js";import{T as f}from"./Typography-RFRigqiF.js";import{B as p}from"./Box-DOOM5p70.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./useTheme-Dc11I-P9.js";const oe={title:"Component Library/Data Display/SocketedText",component:r,tags:["autodocs"],args:{children:"Default text"}},a={args:{children:"Text with beforeItem slot icon",beforeItem:e("i",{className:"fa-solid fa-chevron-left"})}},t={args:{children:"Text with afterItem slot icon",afterItem:e("i",{className:"fa-solid fa-chevron-right"})}},o={args:{children:"Text with both slots",beforeItem:e("i",{className:"fa-solid fa-chevron-left"}),afterItem:e("i",{className:"fa-solid fa-chevron-right"})}},s={args:{children:"Open in SEARCH",afterItem:e("i",{className:"fa-solid fa-arrow-up-right-from-square"}),component:"a",href:"https://example.com",sx:{color:"#F56AAA",textDecoration:"none","&:hover":{textDecoration:"underline"}}}},n={args:{children:"Header with Icon Slots",variant:"h4",beforeItem:e("i",{className:"fa-solid fa-fire"}),afterItem:e("i",{className:"fa-solid fa-crown"}),containerSX:{gap:2}}},i={render:()=>P(p,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(f,{variant:"h6",children:"Normal Typography"}),e(f,{variant:"body1",children:"This is a normal Typography component for comparison."}),e(f,{variant:"h6",children:"SocketedText"}),e(r,{children:"SocketedText behaving like Typography",beforeItem:e("i",{className:"fa-solid fa-heart"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1"})]})},c={args:{children:"Text with custom slot styles",beforeItem:e("i",{className:"fa-solid fa-music"}),afterItem:e("i",{className:"fa-solid fa-volume-up"}),beforeItemSX:{color:"primary.main",fontSize:"1.5em"},afterItemSX:{color:"secondary.main",fontSize:"1.5em"},containerSX:{gap:2}}},l={render:()=>e(p,{sx:{width:300,border:"1px dashed gray",p:2},children:e(r,{children:"This is a very long text that shows that the icons stay center aligned by default.",beforeItem:e("i",{className:"fa-solid fa-info-circle"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1",containerSX:{gap:1}})})},m={render:()=>e(p,{sx:{width:300,border:"1px dashed gray",p:2},children:e(r,{children:"This is also very long text but with icons aligned to the top and text-centered. I think it shows - although this tries to mimic normal text - it is not text so so there are limits ",beforeItem:e("i",{className:"fa-solid fa-info-circle"}),afterItem:e("i",{className:"fa-solid fa-arrow-right"}),variant:"body1",containerSX:{gap:1,textAlign:"center",alignItems:"flex-start"}})})},d={render:()=>e(r,{children:"only text"})},h={render:()=>e(r,{component:"a",children:"no href"})};var g,x,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,w,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Open in SEARCH",
    afterItem: <i className="fa-solid fa-arrow-up-right-from-square" />,
    component: "a",
    href: "https://example.com",
    // For creating link styles, setting variants might be better 
    // e.g. variant: 'link',
    sx: {
      color: "#F56AAA",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,B,W;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Header with Icon Slots",
    variant: "h4",
    beforeItem: <i className="fa-solid fa-fire" />,
    afterItem: <i className="fa-solid fa-crown" />,
    containerSX: {
      gap: 2
    }
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var X,D,E;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,C,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var j,F,L;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    border: "1px dashed gray",
    p: 2
  }}>
      <SocketedText children="This is a very long text that shows that the icons stay center aligned by default." beforeItem={<i className="fa-solid fa-info-circle" />} afterItem={<i className="fa-solid fa-arrow-right" />} variant="body1" containerSX={{
      gap: 1
    }} />
    </Box>
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,q,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    border: "1px dashed gray",
    p: 2
  }}>
      <SocketedText children="This is also very long text but with icons aligned to the top and text-centered. I think it shows - although this tries to mimic normal text - it is not text so so there are limits " beforeItem={<i className="fa-solid fa-info-circle" />} afterItem={<i className="fa-solid fa-arrow-right" />} variant="body1" containerSX={{
      gap: 1,
      textAlign: 'center',
      alignItems: "flex-start"
    }} />
    </Box>
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var V,_,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SocketedText children="only text" />
}`,...(G=(_=d.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,M;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <SocketedText component="a" children="no href" />
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const se=["Default","AfterItem","WithBothSlots","AsLink","HeaderVariant","ComparisonWithTypography","CustomSlotStyles","Wrappedchildren","WrappedTextAlignStart","ErrorWhenNobeforeItemAndNoEndSet","ErrorWhenAnchorButNoHrefSet"];export{t as AfterItem,s as AsLink,i as ComparisonWithTypography,c as CustomSlotStyles,a as Default,h as ErrorWhenAnchorButNoHrefSet,d as ErrorWhenNobeforeItemAndNoEndSet,n as HeaderVariant,o as WithBothSlots,m as WrappedTextAlignStart,l as Wrappedchildren,se as __namedExportsOrder,oe as default};
