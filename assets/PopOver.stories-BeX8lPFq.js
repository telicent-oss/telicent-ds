import{a as h,j as n}from"./DefaultPropsProvider-D55Wj1Sq.js";import{R as u}from"./index-Du_IP5cC.js";import{f}from"./index-3Lpd23TA.js";import{B as v}from"./Button-KkiodFU_.js";import{T as g}from"./Text-CE-o78-6.js";import{P as c}from"./Popover-DFSjLxW4.js";import"./jsx-runtime-Dwss98Nb.js";import"./PrimaryButton-CNV22jX5.js";import"./Button-C2NOfWvY.js";import"./styled-aipfhsBS.js";import"./generateUtilityClasses-Cw-uw2o7.js";import"./ButtonBase-DU-mBhfv.js";import"./TransitionGroupContext-DmssZhy-.js";import"./useTheme-B2MLISHX.js";import"./useTheme-CtImnkTu.js";import"./Box-BykdrlxJ.js";import"./Popover-COQfAdtM.js";import"./utils-CtVJ-2PG.js";import"./index-DtoIJoF2.js";import"./resolveComponentProps-UrK7gkxe.js";import"./Paper-K73ck01N.js";const F={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:f()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(v,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
