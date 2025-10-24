import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-KcRgJ0xu.js";import{T as g}from"./Text-BFNiasyU.js";import{P as c}from"./Popover-C7MCebY1.js";import"./jsx-runtime-DMAvRu52.js";import"./ButtonBase-COX4AZc7.js";import"./defaultTheme-BO-GVTvG.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-BVpYsrGj.js";import"./Typography-Cuh1ru_h.js";import"./useTheme-KUAcGPiB.js";import"./useTheme-Pepcoth9.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./index-B0kOWIl9.js";import"./Paper-CYPvuqVC.js";const G={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
