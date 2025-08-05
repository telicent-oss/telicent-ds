import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-CP702T-k.js";import{T as g}from"./Text-DLq4GXsM.js";import{P as c}from"./Popover-BCuFO5oU.js";import"./jsx-runtime-DMAvRu52.js";import"./ButtonBase-BKsdIIYL.js";import"./defaultTheme-BpkXhfeA.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-BRXLRAOR.js";import"./Typography-D7Rc9HSx.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./Popover-DjMyMVBa.js";import"./utils-CzGd2JMT.js";import"./index-B0kOWIl9.js";import"./Paper-CjpJL0pm.js";const G={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
