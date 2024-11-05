import{a as h,j as n}from"./DefaultPropsProvider-wYCywQOd.js";import{R as u}from"./index-uubelm5h.js";import{f as v}from"./index-BYX12aAs.js";import{B as f}from"./Button-CdAf4-VZ.js";import{T as g}from"./Text-_cnSIpXZ.js";import{P as c}from"./Popover-8txejZqT.js";import"./jsx-runtime-QvZ8i92b.js";import"./PrimaryButton-DZsoRjXv.js";import"./Button-DyDxAnkG.js";import"./styled-ChcWa6mF.js";import"./generateUtilityClasses-pp8e96Oj.js";import"./ButtonBase-DcPSPA3-.js";import"./useTheme-BjBMDFrD.js";import"./TransitionGroupContext-DFEdpA_P.js";import"./useTheme-CY03VFFQ.js";import"./Popover-d8D_jjQY.js";import"./utils-BliZeF-y.js";import"./index-C5xsJX-I.js";import"./resolveComponentProps-C3Ck13wz.js";import"./Paper-oIsZ1tmm.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
