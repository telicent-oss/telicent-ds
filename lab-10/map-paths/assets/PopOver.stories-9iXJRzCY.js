import{R as h,a as u,j as r}from"./iframe-pszacA4H.js";import{B as v}from"./DropdownButton-C9PYtlvl.js";import{T as f}from"./Text-CY99CXXY.js";import{P as s}from"./AppInfoRow-BRrAHWV8.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CB1G1wTy.js";import"./SvgIcon-XcfurnTf.js";import"./generateUtilityClass-BfTSA2ZQ.js";import"./styled-CbW2HKyC.js";import"./generateUtilityClasses-DGogGnVz.js";import"./useTheme-Bw0ZNVbz.js";import"./Box-rB9UFT7p.js";import"./Box-CoitXI_U.js";import"./Container-UFLQM5aJ.js";import"./styled-Bdsosz3P.js";import"./createStyled-CEQlNkwM.js";import"./useThemeProps-DitB9ftq.js";import"./FlexBox-P753RbX0.js";import"./Stack-CowqRQdz.js";import"./Typography-CVdmjiVE.js";import"./Paper-DVbcfMuJ.js";import"./useThemeProps-WWbtI8HR.js";import"./AdapterDayjs-BBUVLuYE.js";import"./Modal-B_JXUh34.js";import"./utils-JVxM4WCa.js";import"./TransitionGroupContext-CaODL787.js";import"./index-C_qP2Xor.js";import"./resolveComponentProps-Bnl83VAv.js";import"./Popover-CLeTkZpW.js";import"./TextField-BtmYsaUD.js";import"./useFormControl-B9g9kZo5.js";import"./createSvgIcon-OMymEHKM.js";import"./IconButton-5N96Sbkv.js";import"./ButtonBase-i9cVtWJL.js";import"./DialogContent-SD13_ieT.js";import"./Button-9QqdFzed.js";import"./Chip-BtBjn1GF.js";import"./DateTimePicker-CFmdo-og.js";import"./Divider-CZs5Ku8H.js";import"./Chip-Ck-CjMOG.js";import"./Divider-BV2jxKYP.js";import"./TreeView-Cg5cah_6.js";import"./Alert-CfkRJKnU.js";import"./LinearProgress-B3k1N0Vh.js";import"./Spinner-COeGv-jx.js";import"./Dialog-BVjlScIy.js";import"./MapToggleButtonPresentational-B8OSYcmI.js";import"./Remove-DEmqYZQ1.js";import"./LinkButton-CJEhHAkn.js";import"./TextField-BXIIhSmS.js";import"./Switch-Cw_ietTJ.js";import"./DatePicker-5BS5wq4q.js";import"./Paper-BVfCuSkB.js";import"./ErrorFallback-BUB_KZrd.js";import"./ErrorFallbackText-D_fv6GUU.js";import"./ErrorFallbackWrapper-BydtoVbs.js";import"./Brand-BJODkHYZ.js";import"./constants-Bbs9w9BQ.js";import"./Edit-DtmqGm9P.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
