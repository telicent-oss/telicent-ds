import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as u}from"./index-CTjT7uj6.js";import{f as v}from"./index-edE1QCkR.js";import{B as f}from"./Button-BBT7kpDa.js";import{T as g}from"./Text-D7i5Vapy.js";import{P as c}from"./Popover-DfYJjWq1.js";import"./jsx-runtime-CB_V9I5Y.js";import"./ButtonBase-DH2zkY_f.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./Button-DwUhO5A1.js";import"./Typography-NY1t2oJS.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./Popover-hHU0kX9Y.js";import"./utils-BbBxhV03.js";import"./index-DEWJqUJ8.js";import"./Modal-nppWUrX9.js";import"./Paper-DurtPqdU.js";const I={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const J=["Demo"];export{o as Demo,J as __namedExportsOrder,I as default};
