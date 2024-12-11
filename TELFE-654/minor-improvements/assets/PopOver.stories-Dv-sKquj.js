import{a as h,j as n}from"./DefaultPropsProvider-d5Yg5iWD.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-BYX12aAs.js";import{B as f}from"./Button-8mhcKYmr.js";import{T as g}from"./Text-Cbj1DL2Z.js";import{P as c}from"./Popover-KpZctWqV.js";import"./jsx-runtime-DRTy3Uxn.js";import"./PrimaryButton-DSKPXw_K.js";import"./Button-CXDsjVp7.js";import"./styled-Cd9OY9py.js";import"./generateUtilityClasses-BeBiso4Q.js";import"./ButtonBase-CMKap0Uh.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./useTheme-BGtMGxNE.js";import"./useTheme-DmEqPdBI.js";import"./Box-CiTSDCSY.js";import"./Popover-B0rHy99r.js";import"./utils-CDqwsCRL.js";import"./index-Db_96rXO.js";import"./resolveComponentProps-Br404nvz.js";import"./Paper-DALXAofg.js";const F={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
