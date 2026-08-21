import{R as h,a as u,j as r}from"./iframe-C9OzQXg_.js";import{B as v}from"./DropdownButton-C4xttH7Y.js";import{T as f}from"./Text-DJBgtXcr.js";import{P as s}from"./AppInfoRow-zLITu-6A.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B0X7YR88.js";import"./SvgIcon-B9jV-vVV.js";import"./generateUtilityClass-nmhkov4J.js";import"./styled-B4qHs92x.js";import"./generateUtilityClasses-B-IRdbhl.js";import"./useTheme-BoFB3y9E.js";import"./Box-DVA2EOpM.js";import"./Box-B6_welVH.js";import"./Container-Dd_avWFZ.js";import"./styled-tQz00g93.js";import"./createStyled-aUbpq_KF.js";import"./useThemeProps-C59Agyjh.js";import"./FlexBox-BhSKdKN3.js";import"./Stack-CVFIDsG6.js";import"./Typography-R7t904JM.js";import"./Paper-K-rVIpDQ.js";import"./useThemeProps-D6gL08vt.js";import"./AdapterDayjs-zE6fXVsl.js";import"./Modal-DeCTlAE4.js";import"./utils-5nTvwYBN.js";import"./TransitionGroupContext-B0kHEjtr.js";import"./index-aDITQ5Y9.js";import"./resolveComponentProps-DLoKn3XJ.js";import"./Popover-oHEbtlOD.js";import"./TextField-C2OAhByY.js";import"./useFormControl-DULJhOwb.js";import"./createSvgIcon-CNR6JU_j.js";import"./IconButton-D27QAIgA.js";import"./ButtonBase-D7zqtzaV.js";import"./DialogContent-Bqyrw-Dw.js";import"./Button-C_IckAB6.js";import"./Chip-2NNPtnVz.js";import"./DateTimePicker-CsFwsMPz.js";import"./Divider-o04g-Szi.js";import"./Chip-By1rLTon.js";import"./Divider-DaR7zBo2.js";import"./TreeView-CXCZxfYx.js";import"./Alert-BFVxOiq7.js";import"./LinearProgress-DX9Q_02A.js";import"./Spinner-DtzXi4x2.js";import"./Dialog-D61FGst9.js";import"./MapToggleButtonPresentational-C417ZVG5.js";import"./Remove-DBRMIEBC.js";import"./LinkButton-BDmrpSVS.js";import"./TextField-DfFTX4IJ.js";import"./Switch-CFkCea9A.js";import"./DatePicker-PqR1hban.js";import"./Paper-BC8jjBQR.js";import"./ErrorFallback-4ND5IQwj.js";import"./ErrorFallbackText-DxDVeSdA.js";import"./ErrorFallbackWrapper-BnyZ3rrn.js";import"./Brand-CobJZEjG.js";import"./constants-BRNzpaAh.js";import"./Edit-DhYGh0Lv.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const bo=["Demo"];export{o as Demo,bo as __namedExportsOrder,Po as default};
