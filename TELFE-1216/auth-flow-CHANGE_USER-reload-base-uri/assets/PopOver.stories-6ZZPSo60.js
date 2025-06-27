import{a as h,j as n}from"./DefaultPropsProvider-D0TKvr2r.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-CV-yCXgq.js";import{T as g}from"./Text--2kP2Hee.js";import{P as c}from"./Popover-9AMnJeot.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Button-DaXPrWak.js";import"./styled-BnvLNUCt.js";import"./generateUtilityClasses-Col5HTSz.js";import"./ButtonBase-CFxa-Eso.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./useTheme-CEroDfaK.js";import"./useTheme-Dxx0vh99.js";import"./Box-DMeDqlBc.js";import"./Typography-BNgSKp3j.js";import"./Popover-k2nIQyS4.js";import"./utils-rL4B1Bvl.js";import"./index-BXZwOzqJ.js";import"./Paper-hXWzzs4m.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
