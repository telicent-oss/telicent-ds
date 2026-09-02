import{R as h,a as u,j as r}from"./iframe-B7cgaF-W.js";import{B as v}from"./DropdownButton-Bb9iv5Vp.js";import{T as f}from"./Text-BTENkRLl.js";import{P as s}from"./AppInfoRow-r354Xlqo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BtEJ_j6a.js";import"./SvgIcon-CKN6T3r7.js";import"./generateUtilityClass-CYYdSLkV.js";import"./styled-B4hBdXs8.js";import"./generateUtilityClasses-7dram_XT.js";import"./useTheme-C9EIWu0e.js";import"./Box-CAg4Tsx7.js";import"./Box-v5biCQrT.js";import"./Container-DG9eXktv.js";import"./styled-aVKOBDcM.js";import"./createStyled-Ce75f-lr.js";import"./useThemeProps-DlhzAd0d.js";import"./FlexBox-DluCer-4.js";import"./Stack-C6HoR8k_.js";import"./Typography-DkJGsGTz.js";import"./Paper-BKCTlbQt.js";import"./useThemeProps-BLibk0ql.js";import"./AdapterDayjs-D1JpjkDV.js";import"./Modal-fooyFAIn.js";import"./utils-ClUtXAkm.js";import"./TransitionGroupContext-CZMjPoSB.js";import"./index-BginLdfj.js";import"./resolveComponentProps-b5o32fTm.js";import"./Popover-CTprQocu.js";import"./TextField-xW4lS50G.js";import"./useFormControl-B16JOFh2.js";import"./createSvgIcon-COsRokbB.js";import"./IconButton-Bwd-EBYU.js";import"./ButtonBase-pQD2E2i9.js";import"./DialogContent-CNCdvslU.js";import"./Button-bDQ4SD0F.js";import"./Chip-DqEC1oBy.js";import"./DateTimePicker-DuNCNG6Z.js";import"./Divider-qfOKhuSJ.js";import"./Chip-C6_gr9Pz.js";import"./Divider-BYFJjNuf.js";import"./TreeView-Bm1zocjB.js";import"./Alert-DtTRNFbi.js";import"./LinearProgress-CHRD2DQp.js";import"./Spinner-dWVS9oPt.js";import"./Dialog-BLosbDfR.js";import"./MapToggleButtonPresentational-sMVPGoTJ.js";import"./Remove-BbJaJSzw.js";import"./LinkButton-DnPOi2Ez.js";import"./TextField-COjfZI8j.js";import"./Switch-CstIlIBg.js";import"./DatePicker-DBSyE5Fx.js";import"./Paper-DhD2fAsS.js";import"./ErrorFallback-CZ61smpx.js";import"./ErrorFallbackText-CfsRx3Jq.js";import"./ErrorFallbackWrapper-CV5TbnXm.js";import"./Brand-uk6lJML6.js";import"./constants-n8O9gxh0.js";import"./Edit-BDgoEkz2.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
