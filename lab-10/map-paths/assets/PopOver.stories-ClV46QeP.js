import{R as h,a as u,j as r}from"./iframe-ciw1KLRs.js";import{B as v}from"./DropdownButton-DnxPQZL5.js";import{T as f}from"./Text-BL5BnwYw.js";import{P as s}from"./AppInfoRow-Cm2LKcgP.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Faf48ldY.js";import"./SvgIcon-DTc-5gfq.js";import"./generateUtilityClass-Cq12-ors.js";import"./styled-C2eEG51T.js";import"./generateUtilityClasses-mmv1qYeK.js";import"./useTheme-BHgtQyQE.js";import"./Box-HbuxBumj.js";import"./Box-902PeKhJ.js";import"./Container-B4cr1y6P.js";import"./styled-IIpvbrdl.js";import"./createStyled-MdD6v-m0.js";import"./useThemeProps-CD771-QY.js";import"./FlexBox-CDrP42BZ.js";import"./Stack-BsqiUcB-.js";import"./Typography--d6z-ax-.js";import"./Paper-8D9ezffr.js";import"./useThemeProps-CifS_No0.js";import"./AdapterDayjs-O0yRhyo9.js";import"./Modal-BfMSqNIi.js";import"./utils-CidoV_y6.js";import"./TransitionGroupContext-BaiKyvyF.js";import"./index-BpPfUxeP.js";import"./resolveComponentProps-B0NCZEz3.js";import"./Popover-DG-knyjb.js";import"./TextField-pGEePhF0.js";import"./useFormControl-BblJSTXJ.js";import"./createSvgIcon-BDEo2c1Q.js";import"./IconButton-BMVls5k1.js";import"./ButtonBase-ClETMG4i.js";import"./DialogContent-1fvduG_D.js";import"./Button-CDrOWbr-.js";import"./Chip-PFEXkFqS.js";import"./DateTimePicker-Bj6EpZ10.js";import"./Divider-CjkQD9g8.js";import"./Chip-DC0m9kxe.js";import"./Divider-CNdMEHKo.js";import"./TreeView-BFv2UIjz.js";import"./Alert-BIf5zh0i.js";import"./LinearProgress-DL5qgfW7.js";import"./Spinner-DiZv0D1w.js";import"./Dialog-CL0RDkI6.js";import"./MapToggleButtonPresentational-BuqOJVfe.js";import"./Remove-udeFhnPg.js";import"./LinkButton-vyYCYFuJ.js";import"./TextField-BiumEcKM.js";import"./Switch-BuYUgYFl.js";import"./DatePicker-CS8TkJd8.js";import"./Paper-D5KjIdWZ.js";import"./ErrorFallback-DCZhT-vP.js";import"./ErrorFallbackText-CwHlYFUh.js";import"./ErrorFallbackWrapper-DP0a9Fbv.js";import"./Brand-BPQCwrjg.js";import"./constants-UR64nFDG.js";import"./Edit-Cef1b_05.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
