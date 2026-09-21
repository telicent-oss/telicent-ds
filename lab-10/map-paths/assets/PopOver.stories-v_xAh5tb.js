import{R as h,a as u,j as r}from"./iframe-DJ7o9sjN.js";import{B as v}from"./DropdownButton-DAoCEQns.js";import{T as f}from"./Text-CKYvVaQ3.js";import{P as s}from"./AppInfoRow-B1OC277z.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BbRdVOeE.js";import"./SvgIcon-CTRLopq-.js";import"./generateUtilityClass-NKEQXImD.js";import"./styled-B2Xsi3Qk.js";import"./generateUtilityClasses-B-H4mZpl.js";import"./useTheme-Dpcr6gVj.js";import"./Box-DagEX-RT.js";import"./Box-DwCOAluV.js";import"./Container-LfFMcqXO.js";import"./styled-Dc3Vu47j.js";import"./createStyled-DrRmjKFf.js";import"./useThemeProps-CulH-gMG.js";import"./FlexBox-CmKMLmja.js";import"./Stack-BXgzYG84.js";import"./Typography-C3brZaXz.js";import"./Paper-DDqXORou.js";import"./useThemeProps-CGNqp4tk.js";import"./AdapterDayjs-e4cXOfxK.js";import"./Modal-D5bludlO.js";import"./utils-CXw9cUDE.js";import"./TransitionGroupContext-sf3TMEzC.js";import"./index-B7OBf6J8.js";import"./resolveComponentProps-DkEIZkOn.js";import"./Popover-Ws6V5nr9.js";import"./TextField-6M-OFJd4.js";import"./useFormControl-nxKSvLFH.js";import"./createSvgIcon-D0s82IB_.js";import"./IconButton-BZ9JsQ-4.js";import"./ButtonBase-XfSRIF2e.js";import"./DialogContent-n4vctS3x.js";import"./Button-C6ZWAVf1.js";import"./Chip-C6Fuob-a.js";import"./DateTimePicker-BzN4rV0M.js";import"./Divider-9TcGx5Qj.js";import"./Chip-4RBVK7P0.js";import"./Divider-CjS48Yb2.js";import"./TreeView-DnOkJcqx.js";import"./Alert-BiDnlkQN.js";import"./LinearProgress-qzie4g_h.js";import"./Spinner-D2gZDfJD.js";import"./Dialog-CFePTt5u.js";import"./MapToggleButtonPresentational-xRw_q0vm.js";import"./Remove-CwDdSJFc.js";import"./LinkButton-gt6rYSIe.js";import"./TextField-DZNSB9tK.js";import"./Switch-CXrRH0j2.js";import"./DatePicker-B18NgSFC.js";import"./Paper-Bl0ow7oP.js";import"./ErrorFallback-DHAi4B_j.js";import"./ErrorFallbackText-Bec6RRTL.js";import"./ErrorFallbackWrapper-D5su5Bh0.js";import"./Brand-BjLIRTja.js";import"./Edit-BaBc2Yf-.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,xo={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
