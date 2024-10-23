import{a as h,j as n}from"./DefaultPropsProvider-BXx8Lxdp.js";import{R as u}from"./index-uubelm5h.js";import{f as v}from"./index-R3fZrLBo.js";import{B as f}from"./Button-D5Cdt3bu.js";import{T as g}from"./Text-mT4dy15X.js";import{P as c}from"./Popover-BC6MybOP.js";import"./extends-EO7Nsyo1.js";import"./PrimaryButton-CS5XDf_-.js";import"./Button-CHvfK-Sl.js";import"./styled-CsMkIDyT.js";import"./generateUtilityClasses-DUdad9y1.js";import"./ButtonBase-Ds7yUReY.js";import"./useTheme-BLQURKm4.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BwmRXO23.js";import"./Popover-DDsTovIT.js";import"./utils-DLK7DDdD.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-wJjsJM5R.js";import"./Paper-DPZwIbCZ.js";const G={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
