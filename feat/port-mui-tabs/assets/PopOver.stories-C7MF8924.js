import{R as h,a as u,j as r}from"./iframe-2ae3jLtY.js";import{B as v}from"./DropdownButton-BpmbuP-W.js";import{T as f}from"./Text-CtYPczsC.js";import{P as s}from"./AppInfoRow-B--uq7Sd.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9xuM1bb.js";import"./SvgIcon-sVmN0tjE.js";import"./generateUtilityClass-DBJjU6LW.js";import"./styled-Cj2-Y3sw.js";import"./generateUtilityClasses-VYWBwYVV.js";import"./useTheme-D2IgbBvW.js";import"./Box-DcijUUVm.js";import"./Box-CxnaGThj.js";import"./Container-lpa-al36.js";import"./styled-BH3fMlC7.js";import"./createStyled-BadfWLO8.js";import"./useThemeProps-CjP8yKq7.js";import"./FlexBox-BAOPxaZ7.js";import"./Stack-AhKTZxfl.js";import"./Typography-CKX7xI1z.js";import"./Paper-D44EUSF6.js";import"./useThemeProps-5tLqmsws.js";import"./AdapterDayjs-WX-3Svd1.js";import"./Modal-Ct5j1anh.js";import"./utils-BRBAF39N.js";import"./TransitionGroupContext-CBaIu8bW.js";import"./index-_aQ6azBP.js";import"./resolveComponentProps-Cd-xgkW-.js";import"./Popover-CVm97bWw.js";import"./TextField-CtUdVhYe.js";import"./useFormControl-CedqS7-r.js";import"./createSvgIcon-CPbPJc4P.js";import"./IconButton-DHZQ4I-9.js";import"./ButtonBase-BhlfSjKw.js";import"./DialogContent-QyBYExTq.js";import"./Button-w3dj99fq.js";import"./Chip-C9Sq19CS.js";import"./DateTimePicker-D7ooMU44.js";import"./Divider-Cb5TCzV-.js";import"./Chip-BsvBzIp-.js";import"./Divider-M5RYGepX.js";import"./TreeView-DdTK-PUs.js";import"./Alert-DnPepOi0.js";import"./LinearProgress-CsGPtdNT.js";import"./Spinner-Ce4Lduox.js";import"./Dialog-zSVX8tBH.js";import"./MapToggleButtonPresentational-DEZRespE.js";import"./Remove-DUc8tOl9.js";import"./LinkButton-DFUlFy7Z.js";import"./TextField-rZhfzkLQ.js";import"./Switch-B6fBRjkG.js";import"./DatePicker-DoQqJsHZ.js";import"./Paper-Cyq_1M7S.js";import"./ErrorFallback-DoY8WDiN.js";import"./ErrorFallbackText-D5Vin4ef.js";import"./ErrorFallbackWrapper-Bw7iQJps.js";import"./Brand-CpWuTQBH.js";import"./constants-DPt7sep6.js";import"./Edit-CdllxfNz.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
