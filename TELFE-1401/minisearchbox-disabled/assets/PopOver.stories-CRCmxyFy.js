import{a as h,j as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{f as v}from"./index-ZIyp8o0e.js";import{B as f}from"./Button-CI14C0BZ.js";import{T as g}from"./Text-DnbGH9ax.js";import{P as p}from"./Popover-BljOTz_3.js";import"./jsx-runtime-DMAvRu52.js";import"./FormHelperText-D2-CeYt9.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./useFormControl-CQLCXd-P.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./ButtonBase-C0n3d_CB.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-DPeHgJ80.js";import"./Typography-DvrCv4HQ.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Popover-CwNlqRg9.js";import"./utils-DW2zNrrJ.js";import"./index-B0kOWIl9.js";import"./Modal-DtyJzhmg.js";import"./Paper-B-rBeRIm.js";const K={title:"Surfaces/PopOver",component:p,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[e,r]=u.useState(null),c=d=>{r(d.currentTarget)},m=()=>{r(null)},t=!!e,i=t?"simple-popover":void 0;return h("div",{children:[n(f,{"aria-describedby":i,onClick:c,children:"Open Popover"}),n(p,{id:i,open:t,anchorEl:e,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:n(g,{children:"The content of the pop over."})})]})}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const N=["Demo"];export{o as Demo,N as __namedExportsOrder,K as default};
