import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{f as v}from"./index-edE1QCkR.js";import{B as f}from"./Button-U6T8kLew.js";import{T as g}from"./Text-DnbGH9ax.js";import{P as c}from"./Popover-CK2TS8dx.js";import"./jsx-runtime-DMAvRu52.js";import"./FormHelperText-jGmUqac9.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./ButtonBase-BzDRx6y5.js";import"./TransitionGroupContext-fPiqodp5.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-77I-sbEs.js";import"./Typography-DvrCv4HQ.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Popover-Cw1e4M6S.js";import"./utils-DToTkERF.js";import"./index-Dn0cO_TJ.js";import"./Paper-B-rBeRIm.js";const I={title:"Surfaces/PopOver",component:c,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),p=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,a=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":a,onClick:p,children:"Open Popover"}),n(c,{id:a,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
