import{R as h,a as u,j as r}from"./iframe-DTfHyu5W.js";import{B as v}from"./DropdownButton-DUCyq73_.js";import{T as f}from"./Text-CbmCHta1.js";import{P as s}from"./AppInfoRow-DM5JDCIg.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DPsHQdqc.js";import"./SvgIcon-ByJD-XbM.js";import"./generateUtilityClass-Ba3X23cx.js";import"./styled-tbRfHNfe.js";import"./generateUtilityClasses-9N7BeDkA.js";import"./useTheme-CurHEFdS.js";import"./Box-6g8k1lEa.js";import"./Box-iMTEkAxo.js";import"./Container-CFRLiDzI.js";import"./styled-V-O3-yLC.js";import"./createStyled-28Jskctr.js";import"./useThemeProps-DhRvrWEK.js";import"./FlexBox-Dx9ngdP2.js";import"./Stack-B5wnKsZi.js";import"./Typography-DEVUDcjz.js";import"./Paper-7aLAfVaY.js";import"./useThemeProps-BMiY-Nz3.js";import"./AdapterDayjs-DfVF7Ju1.js";import"./Modal-CuQBat2_.js";import"./utils-hc9ieIbF.js";import"./TransitionGroupContext-pH2rcq8m.js";import"./index-BojeORES.js";import"./resolveComponentProps-kTxaYEkO.js";import"./Popover-CiC5O2RE.js";import"./TextField-Bq5brCt8.js";import"./useFormControl-CfqMxs37.js";import"./createSvgIcon-eW_NYhFU.js";import"./IconButton-B22dA0Mh.js";import"./ButtonBase-B4JUzgMd.js";import"./DialogContent-S6vhYFVZ.js";import"./Button-Dae9G8Ev.js";import"./Chip-C9IKZPuh.js";import"./DateTimePicker-CXsTfPVe.js";import"./Divider-B8-GGABN.js";import"./Chip-Ce6ftWrB.js";import"./Divider-DQcY7mpQ.js";import"./TreeView-CKyPmjfa.js";import"./Alert-DZul0Vde.js";import"./LinearProgress-HKvtzsEf.js";import"./Spinner-Dx14enoI.js";import"./Dialog-CGZIbGHz.js";import"./MapToggleButtonPresentational-jSE1x0h9.js";import"./Remove-NJ9P2pvD.js";import"./LinkButton-CUXW4PH5.js";import"./TextField-C0bNNYYR.js";import"./Switch-CyPgFvnQ.js";import"./DatePicker-YZ26x2F9.js";import"./Paper-BXaJm_Li.js";import"./ErrorFallback-UX7BvmTl.js";import"./ErrorFallbackText-CnIufqnP.js";import"./ErrorFallbackWrapper-B3axQyNr.js";import"./Brand-e-EQElnn.js";import"./constants-BAHDwWKH.js";import"./Edit-CU6kEAEu.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
