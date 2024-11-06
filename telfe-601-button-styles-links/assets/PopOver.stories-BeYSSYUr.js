import{a as h,j as n}from"./DefaultPropsProvider-_Lew82y0.js";import{R as u}from"./index-BBkUAzwr.js";import{f as v}from"./index-R3fZrLBo.js";import{B as f}from"./Button-lH8i3IaK.js";import{T as g}from"./Text-CGTJRmaL.js";import{P as c}from"./Popover-qN9BYoKp.js";import"./extends-l96ZYLL7.js";import"./PrimaryButton-C4l5l8uh.js";import"./Button-CERsBFR3.js";import"./styled-BJBODTqz.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./ButtonBase-_xvnSuiZ.js";import"./useTheme-D3h9sCof.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BFzPSdMH.js";import"./Popover-Hcm-BVgZ.js";import"./utils-DO1XUlS6.js";import"./index-COG_gdbT.js";import"./resolveComponentProps-BX18Z20f.js";import"./Paper-Bh8jhr9X.js";const G={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["Demo"];export{o as Demo,I as __namedExportsOrder,G as default};
