import{R as h,a as u,j as r}from"./iframe-BR2e2YDK.js";import{B as v}from"./DropdownButton-BcIbR7mn.js";import{T as f}from"./Text-G3gRIU3S.js";import{P as s}from"./AppInfoRow-DakeCdvn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-jc37Ujil.js";import"./SvgIcon-Cv-K0R04.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./useTheme-s-RP8QJy.js";import"./Box-DUkA7BwQ.js";import"./Box-Cjy76m6G.js";import"./Container-BqQatTiF.js";import"./styled-BxRNAcX1.js";import"./createStyled-CY95Mz_9.js";import"./useThemeProps-DwRsn42H.js";import"./FlexBox-GegQ6KoK.js";import"./Stack-COhqTIW9.js";import"./Typography-DUgZ7jdW.js";import"./Paper-Bu9Xtg_J.js";import"./useThemeProps-Db0C_hKt.js";import"./AdapterDayjs-Cqhoz3bg.js";import"./Modal-a8XaxvFh.js";import"./utils-BDR_SyG2.js";import"./TransitionGroupContext-ClPOJll4.js";import"./index-DPx2uLoP.js";import"./resolveComponentProps-4VX9PFU8.js";import"./Popover-Baj7zd45.js";import"./TextField-BYBS7QeR.js";import"./useFormControl-BDmNOi78.js";import"./createSvgIcon-BCjTwnIN.js";import"./IconButton-Bays2K--.js";import"./ButtonBase-CmJPQ6Im.js";import"./DialogContent-wB_kMJWd.js";import"./Button-D2nWt4S8.js";import"./Chip-Bs3GvNHw.js";import"./DateTimePicker-BhkD0_Tn.js";import"./Divider-Dz7TZSIi.js";import"./Chip-Ba4FoljX.js";import"./Divider-BLHqQnsK.js";import"./TreeView-CdxXinPI.js";import"./Alert-C4X40l06.js";import"./LinearProgress-Bi0KtS5W.js";import"./Spinner-KSKr4HCV.js";import"./Dialog-BOV1hoDB.js";import"./MapToggleButtonPresentational-CDIZBpSC.js";import"./Remove-DuE88Ezs.js";import"./LinkButton-BqutvHI0.js";import"./TextField-ByfWKBjI.js";import"./Switch-EzT8Sy71.js";import"./DatePicker-Bv_1Qb5R.js";import"./Paper-DeFLSdpX.js";import"./ErrorFallback-9noxw0Ql.js";import"./ErrorFallbackText-DAVlUHED.js";import"./ErrorFallbackWrapper-DctsmiY9.js";import"./Brand-Bmi4u6qq.js";import"./Edit-DHIa2SgU.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Po=["Demo"];export{o as Demo,Po as __namedExportsOrder,xo as default};
