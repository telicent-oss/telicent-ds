import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-Db1NJzza.js";import{T as g}from"./Text-BNIHq94e.js";import{P as p}from"./Popover-DhgGZshX.js";import"./jsx-runtime-DMAvRu52.js";import"./Button-a6vHgwhc.js";import"./defaultTheme-Cydao2Tu.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./ButtonBase-BUg8pwcP.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./SecondaryButton-RKCuUyYG.js";import"./useTheme-BYNjlLc8.js";import"./useTheme-DxGOHaWi.js";import"./Box-DjrL3vcN.js";import"./Typography-BuiWgCNN.js";import"./Popover-BFLlbOqP.js";import"./utils-xzVdhYNG.js";import"./index-B0kOWIl9.js";import"./Paper-DB4yr4EO.js";const J={title:"Surfaces/PopOver",component:p,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),c=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,i=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":i,onClick:c,children:"Open Popover"}),n(p,{id:i,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const K=["Demo"];export{o as Demo,K as __namedExportsOrder,J as default};
