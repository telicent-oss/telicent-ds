import{R as h,a as u,j as r}from"./iframe-ekgyvAI9.js";import{P as s,B as v}from"./DropdownButton-iOB7tFo3.js";import{T as f}from"./Text-C-7vsUm_.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-6Ji74agl.js";import"./createSvgIcon-Cz2FQkUF.js";import"./styled-Q5upQxit.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./useTheme-C5GDcVVQ.js";import"./Container-CmEFyrQ9.js";import"./styled-BpMn-R5t.js";import"./createStyled-FZZaYGHg.js";import"./useThemeProps-DphVTmkb.js";import"./Stack-Cg7aALjV.js";import"./Box-Bgfu1TlP.js";import"./Typography-C64aAkxC.js";import"./Paper-BydBWlqJ.js";import"./useThemeProps-Bvz7h4cQ.js";import"./AdapterDayjs-NJf71x8s.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./DateTimePicker-BUG89NrY.js";import"./Divider-B---moVq.js";import"./Chip-CNM9xVJ3.js";import"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./MapToggleButtonPresentational-Bh86kc4C.js";import"./Remove-BKfh7hYJ.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./LinkButton-BUP5FRO7.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import"./constants-4ukM-jXN.js";import"./Edit-BIOwsPnM.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Eo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Oo=["Demo"];export{o as Demo,Oo as __namedExportsOrder,Eo as default};
