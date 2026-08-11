import{R as h,a as u,j as r}from"./iframe-LIGj3d-Q.js";import{B as v}from"./DropdownButton-BJ8ATclk.js";import{T as f}from"./Text-C1ckyoQT.js";import{P as s}from"./AppInfoRow-CM-T5Qzd.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZq18jI_.js";import"./SvgIcon-D7LY-Es_.js";import"./generateUtilityClass-BBJ39S72.js";import"./styled-CMrnC_6X.js";import"./generateUtilityClasses-CdCMisAN.js";import"./useTheme-Drvcy2jL.js";import"./Box-Xmc6gVQw.js";import"./Box-ZS7CRD1W.js";import"./Container-DsY-R8Xi.js";import"./styled-BE6CXqzB.js";import"./createStyled-DkzSDqqT.js";import"./useThemeProps-CsX7Y_ml.js";import"./FlexBox-CW-13tp1.js";import"./Stack-BLybbMM6.js";import"./Typography-D3mJSaGG.js";import"./Paper-BQl-weoM.js";import"./useThemeProps-OVRUsTmW.js";import"./AdapterDayjs-Ch4KVDrb.js";import"./Modal-C9wnEkLA.js";import"./utils-DXkjnBan.js";import"./TransitionGroupContext-BcEhJ9yi.js";import"./index-DxBxG5lA.js";import"./resolveComponentProps-pTf1jdNZ.js";import"./Popover-DB9tZCoT.js";import"./TextField-Zx-ZjNDc.js";import"./useFormControl-B8GjATra.js";import"./createSvgIcon-BsE78Bbg.js";import"./IconButton-E06dBbED.js";import"./ButtonBase-DLqnRUvo.js";import"./DialogContent-Cu4YKXbj.js";import"./Button-Q_dOly4u.js";import"./Chip-O7SJtB9c.js";import"./DateTimePicker-BhHVL6O-.js";import"./Divider-CvUfSPVx.js";import"./Chip-259Gi_f0.js";import"./Divider-K2aGA6fe.js";import"./TreeView-CY1-K2Qs.js";import"./Alert-CSa2GtHR.js";import"./LinearProgress-w3c5P4tQ.js";import"./Spinner-BXyU6yX3.js";import"./Dialog-DGOK43e8.js";import"./MapToggleButtonPresentational-DAJ6zUSX.js";import"./Remove-ZVe8f5hM.js";import"./LinkButton-BtKNy-FT.js";import"./TextField-CnjLxEi3.js";import"./Switch-fYOd7byu.js";import"./DatePicker-C-nFnRZR.js";import"./Paper-DkXRXPRv.js";import"./ErrorFallback-DKu42nBH.js";import"./ErrorFallbackText-N065n6oW.js";import"./ErrorFallbackWrapper-D0RMVwUL.js";import"./Brand-DWzMeGAm.js";import"./constants-CiN2e574.js";import"./Edit-t2iHK7-h.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
