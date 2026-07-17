import{R as h,a as u,j as r}from"./iframe-DjLxm7SD.js";import{P as s,B as v}from"./DropdownButton-OdITcuya.js";import{T as f}from"./Text-CVnCU36g.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DFS2VSDc.js";import"./createSvgIcon-MIeX2BRI.js";import"./generateUtilityClass-BLqluGhu.js";import"./styled-C0jSE3AP.js";import"./generateUtilityClasses-BO81MJJG.js";import"./useTheme-DvVKUnCu.js";import"./Box--iJ_3JNa.js";import"./Box-PIDL4Fit.js";import"./Container-DRKYHsiA.js";import"./styled-atsIZHYt.js";import"./createStyled-Cc_yoAqX.js";import"./useThemeProps-Fnp1xWzD.js";import"./Stack-CCnHELyK.js";import"./Typography-CofTJ_Fs.js";import"./Paper-Bw5HsGYD.js";import"./useThemeProps-Ewpml6lw.js";import"./AdapterDayjs-B1X-CvWP.js";import"./Modal-B7a9aff8.js";import"./utils-wz01l5qZ.js";import"./TransitionGroupContext-BU8BL2dP.js";import"./index-DrRIbANR.js";import"./resolveComponentProps-DFK19icQ.js";import"./TextField-OPZ9edjq.js";import"./useFormControl-UyDYT27V.js";import"./IconButton-DVwg49gr.js";import"./ButtonBase-CgGGn6Da.js";import"./DialogContent-CBR7V6gG.js";import"./Button-CS4wg-vH.js";import"./Chip-BpvzB-8r.js";import"./DateTimePicker-D4Hp4gX_.js";import"./Divider-C6mIQ5zR.js";import"./Chip-B8CDxprS.js";import"./Divider-DVlBE3P8.js";import"./TreeView-Co0t44VC.js";import"./Close-C1rysX-W.js";import"./LinearProgress-DeQbd7E0.js";import"./Spinner-BkQfXhtb.js";import"./Dialog-YQhBvj2B.js";import"./MapToggleButtonPresentational-3lb-UE9s.js";import"./Remove-CTK2Ub1o.js";import"./TextField-6mReXCWm.js";import"./Switch-CDyuDDTr.js";import"./DatePicker-aPQ8noSa.js";import"./LinkButton-D9oXM2qx.js";import"./Paper-ChmMIXfx.js";import"./ErrorFallback-ClFzMA-d.js";import"./ErrorFallbackText-vqUAjIHx.js";import"./ErrorFallbackWrapper-Dc3fOI5x.js";import"./Brand-Dvnzdq7_.js";import"./constants-629LYWu7.js";import"./Edit-DojDoZiY.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Bo=["Demo"];export{o as Demo,Bo as __namedExportsOrder,Co as default};
