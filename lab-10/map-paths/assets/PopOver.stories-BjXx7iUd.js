import{R as h,a as u,j as r}from"./iframe-pRHhOQg2.js";import{B as v}from"./DropdownButton-BhUulX2F.js";import{T as f}from"./Text-CyftVFXd.js";import{P as s}from"./AppInfoRow-Bh0geM1J.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B_ujPWv_.js";import"./SvgIcon-BETWM0sA.js";import"./generateUtilityClass-BCADfncv.js";import"./styled-BT5czdOb.js";import"./generateUtilityClasses-FW_hjQkZ.js";import"./useTheme-Pj73We2K.js";import"./Box-BCY9iEzw.js";import"./Box-DtDcNTqo.js";import"./Container-B6BSNzBA.js";import"./styled-CPqvLnSt.js";import"./createStyled-CUHy6POj.js";import"./useThemeProps-iiZ4il65.js";import"./FlexBox-CVJnzuz0.js";import"./Stack-DQDETrC8.js";import"./Typography-D0LmHXWH.js";import"./Paper-jmBz9zYy.js";import"./useThemeProps-CGsmMNPE.js";import"./AdapterDayjs-v8geY8Yz.js";import"./Modal-DBc2l9M6.js";import"./utils-BcK75nLH.js";import"./TransitionGroupContext-BUjCANtX.js";import"./index-BZTrQaHy.js";import"./resolveComponentProps-Bmj0YTdO.js";import"./Popover-D8iN4GZw.js";import"./TextField-DHBYzqm_.js";import"./useFormControl-InOv9m2U.js";import"./createSvgIcon-BDR8vdZT.js";import"./IconButton-CvVfQwzZ.js";import"./ButtonBase-V2s46bUx.js";import"./DialogContent-CTQp3qrS.js";import"./Button-CPtCkVQU.js";import"./Chip-DDvACIff.js";import"./DateTimePicker-Cn_CbG0g.js";import"./Divider-D6agCD3x.js";import"./Chip-gnzR_yJR.js";import"./Divider-CVsgqjKK.js";import"./TreeView-Kik_R-ES.js";import"./Alert-DecaHlaz.js";import"./LinearProgress-C4VBChXn.js";import"./Spinner-C0vudGLr.js";import"./Dialog-Bcf-NoY1.js";import"./MapToggleButtonPresentational-fmHFE_FL.js";import"./Remove-DUvkPlWX.js";import"./LinkButton-x6CuZkTL.js";import"./TextField-CBpcQn2c.js";import"./Switch-DhAT4IM_.js";import"./DatePicker-D9GXXepP.js";import"./Paper-jV6pjJ0C.js";import"./ErrorFallback-CaX2CL1g.js";import"./ErrorFallbackText-C6J48uKa.js";import"./ErrorFallbackWrapper-y78ya1pb.js";import"./Brand-DOlsYGQL.js";import"./constants-C264WvBp.js";import"./Edit-wsLz-jz3.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
