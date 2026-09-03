import{R as h,a as u,j as r}from"./iframe-Dy9lMmzB.js";import{B as v}from"./DropdownButton-BrGu84Gz.js";import{T as f}from"./Text-BrRsEWjj.js";import{P as s}from"./AppInfoRow-jj_TJA14.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-lIlQD_Ok.js";import"./SvgIcon-CqTEOtHz.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./useTheme-BclnZfmM.js";import"./Box-D8L85hdW.js";import"./Box-Co6pvyno.js";import"./Container-DjBIKTWZ.js";import"./styled-DtITPUZJ.js";import"./createStyled-CMAzb2jS.js";import"./useThemeProps-lwM53F9r.js";import"./FlexBox-BSJBSHE3.js";import"./Stack-B4iL1Uda.js";import"./Typography-C9bsTXqt.js";import"./Paper-5Ojvp1ys.js";import"./useThemeProps-DmFPjoYm.js";import"./AdapterDayjs-WZ0psJGR.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Button-hEWvcwcz.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./Chip-CWm1ngwI.js";import"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./ErrorFallback-D7lBO-St.js";import"./ErrorFallbackText-DxFvtQm8.js";import"./ErrorFallbackWrapper-BbmC-MtB.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
