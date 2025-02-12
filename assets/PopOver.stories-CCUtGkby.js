import{a as h,j as n}from"./DefaultPropsProvider-mMqPhAz4.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-qkO9rVEF.js";import{T as g}from"./Text-D0yBQujI.js";import{P as c}from"./Popover-BX-bOhpB.js";import"./jsx-runtime-BwZVo4Wn.js";import"./PrimaryButton-BJTYkPlf.js";import"./Button-B6d-5iSa.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./ButtonBase-odUV3zMF.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./useTheme-Dl-fNHlA.js";import"./useTheme-Dc11I-P9.js";import"./Box-DOOM5p70.js";import"./Typography-RFRigqiF.js";import"./Popover-RATKuaxW.js";import"./utils-CXnKKwNB.js";import"./index-BXZwOzqJ.js";import"./Paper-BpSJjDAT.js";const F={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return <div>
        <Button aria-describedby={id} onClick={handleClick}>
          Open Popover
        </Button>
        <PopOver id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 0
      }}>
          <Text>The content of the pop over.</Text>
        </PopOver>
      </div>;
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const G=["Demo"];export{o as Demo,G as __namedExportsOrder,F as default};
