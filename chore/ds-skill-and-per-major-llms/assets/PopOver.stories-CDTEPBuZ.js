import{R as h,a as u,j as r}from"./iframe-D2xSd84e.js";import{B as v}from"./DropdownButton-C0SajuR0.js";import{T as f}from"./Text-YKd5ufxb.js";import{P as s}from"./AppInfoRow-DY_H98te.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DLxTDp4e.js";import"./SvgIcon-B_Vuuw4i.js";import"./generateUtilityClass-CL5j5EH9.js";import"./styled-Uo2f4_eJ.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./useTheme-DD50os6u.js";import"./Box-aVZbDO8n.js";import"./Box-AGJ8HEdo.js";import"./Container-t30wv68u.js";import"./styled-jm0NCBmc.js";import"./createStyled-Q-b37U0V.js";import"./useThemeProps-Be8ecqSA.js";import"./FlexBox-DFBellf-.js";import"./Stack-DDjwWG7N.js";import"./Typography-CrXkC3Kj.js";import"./Paper-CMPnbo-3.js";import"./useThemeProps-CRX3G5nR.js";import"./AdapterDayjs-CiYnk4U8.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";import"./Popover-DC9XfNY8.js";import"./TextField-BGl_E-Mk.js";import"./useFormControl-Cm4ESQ5Z.js";import"./createSvgIcon-BEH_TywE.js";import"./IconButton-r2Lpaq8o.js";import"./ButtonBase-wo9-0n7F.js";import"./DialogContent-B91V-Ggp.js";import"./Button-CT09wWAC.js";import"./Chip-2ePwHCRw.js";import"./DateTimePicker-BuM--HXU.js";import"./Divider-CZRs-x0D.js";import"./Chip-CYDyhIWX.js";import"./Divider-iCQqHWoM.js";import"./TreeView-C70c9-5p.js";import"./Alert-B22QG778.js";import"./LinearProgress-BJVPH0JL.js";import"./Spinner-CNKuUvLk.js";import"./Dialog-COLBK_8G.js";import"./MapToggleButtonPresentational-CsNIma1D.js";import"./Remove-7bR9n6m0.js";import"./LinkButton-CzHaV0bx.js";import"./TextField-2b4aPcPE.js";import"./Switch-bG2W1qCe.js";import"./DatePicker-BZgfSvoM.js";import"./Paper-BZvfaCOX.js";import"./ErrorFallback-BIncdLow.js";import"./ErrorFallbackText-ZC0AQgkA.js";import"./ErrorFallbackWrapper-CHAW5TC5.js";import"./Brand-rY45k5xL.js";import"./Edit-gqxvj0va.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
