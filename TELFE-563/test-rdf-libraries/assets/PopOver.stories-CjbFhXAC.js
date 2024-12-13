import{a as h,j as n}from"./DefaultPropsProvider-FmOZEx_L.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-BYX12aAs.js";import{B as f}from"./Button-C2h4Xa-_.js";import{T as g}from"./Text-Cr0Hr2-l.js";import{P as c}from"./Popover-Br8qrKSg.js";import"./jsx-runtime-DRTy3Uxn.js";import"./PrimaryButton-IZ6eR54o.js";import"./Button-D1ibog5D.js";import"./styled-CKqgJSB4.js";import"./generateUtilityClasses-DiIBTi47.js";import"./ButtonBase-W-QUno4-.js";import"./useTheme-C43gVfC6.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./useTheme-DvsKo-w_.js";import"./Popover-CRxjdS_0.js";import"./utils-EQzFzA8f.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-tsvYd0yv.js";import"./Paper-BL2CR90I.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
