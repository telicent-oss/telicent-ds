import{a as h,j as n}from"./DefaultPropsProvider-D0TKvr2r.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-DsRoEJUk.js";import{T as g}from"./Text-UfnIhWrZ.js";import{P as c}from"./Popover-BmuZ8Ngm.js";import"./jsx-runtime-BwZVo4Wn.js";import"./Button-Da6qIdfX.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./ButtonBase-BBhFMBvz.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./useTheme-CEroDfaK.js";import"./useTheme-Dxx0vh99.js";import"./Box-CeeIJm_P.js";import"./Typography-CYbZWU4W.js";import"./Popover-Bh0RZbgT.js";import"./utils-rL4B1Bvl.js";import"./index-BXZwOzqJ.js";import"./Paper-CMbjB9GA.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
