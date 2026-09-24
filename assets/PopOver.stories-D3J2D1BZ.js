import{R as h,b as u,a as r}from"./iframe-COFs_UtR.js";import{B as v}from"./DropdownButton-DdQkmJUC.js";import{T as f}from"./Text-DRb1poC2.js";import{P as s}from"./_IconPopover-DMMWxGzb.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BFtUc4n_.js";import"./SvgIcon-Cu8kR4gr.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Br9ekNhD.js";import"./Box-BEb_3Tji.js";import"./Box-DSZohf0j.js";import"./Container-D004PVc3.js";import"./styled-DsoO9eq7.js";import"./createStyled-btN_05Dm.js";import"./useThemeProps-C1YLMFu1.js";import"./FlexBox-CM3pIGUP.js";import"./Stack-Udab0hUQ.js";import"./Typography-DDyWDEsv.js";import"./Paper-B8rmAYsL.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import"./ThemeSwitchRow-D9BYjnUD.js";import"./index-CLjgFykj.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./useThemeProps-B3b-1bce.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./FormHelperText-pSG34NeB.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./Chip-A07BHzeG.js";import"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import"./Alert-D-nOd5MK.js";import"./AppInfoRow-B60RiNSZ.js";import"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./LinkButton-CKtknzFJ.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Uo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},i=!!t,e=i?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":e,onClick:l,children:"Open Popover"}),r(s,{id:e,open:i,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Yo=["Demo"];export{o as Demo,Yo as __namedExportsOrder,Uo as default};
