import{a as h,j as n}from"./DefaultPropsProvider-DNbgpcUu.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-C0Yj0oP_.js";import{T as g}from"./Text-Ahx6-q7X.js";import{P as c}from"./Popover-CcG_NWKa.js";import"./jsx-runtime-BwZVo4Wn.js";import"./PrimaryButton-Bk2zQLuP.js";import"./Button-BtgnMJoT.js";import"./styled-CnbWPWMk.js";import"./generateUtilityClasses-BwpiFGlX.js";import"./ButtonBase-DmgBfAJK.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./useTheme-DwzLSGxO.js";import"./useTheme-DL-c3i-n.js";import"./Box-DvRWFL1p.js";import"./Popover-DgOg7RQ1.js";import"./utils-BZ12QECu.js";import"./index-BXZwOzqJ.js";import"./Paper-Ckbq7hqr.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const F=["Demo"];export{o as Demo,F as __namedExportsOrder,w as default};
