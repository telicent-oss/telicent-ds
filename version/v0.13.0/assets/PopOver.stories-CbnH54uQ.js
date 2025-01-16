import{a as h,j as n}from"./DefaultPropsProvider--lJPAVOf.js";import{R as u}from"./index-Du_IP5cC.js";import{f}from"./index-3Lpd23TA.js";import{B as v}from"./Button--cz5G96H.js";import{T as g}from"./Text-CJDA79D9.js";import{P as c}from"./Popover-Cwq577Yx.js";import"./jsx-runtime-Dwss98Nb.js";import"./PrimaryButton-DlcywPdN.js";import"./Button-D07OoOtO.js";import"./styled-BSeuGzyp.js";import"./generateUtilityClasses-MMAG8yM0.js";import"./ButtonBase-DOatf38x.js";import"./useTheme-DqTbxjpC.js";import"./TransitionGroupContext-DmssZhy-.js";import"./useTheme-tLVpAwB4.js";import"./Popover-DS4PCjva.js";import"./utils-CRH9CwAG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-DNRE6Age.js";import"./Paper-pczEKBOb.js";const w={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:f()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(v,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
