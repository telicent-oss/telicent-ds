import{R as h,a as u,j as r}from"./iframe-lbVyLo9M.js";import{B as v}from"./DropdownButton-DodwJLhq.js";import{T as f}from"./Text-GZhHB46q.js";import{P as s}from"./AppInfoRow-COyx2En4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BYJvLZx1.js";import"./SvgIcon-BhjTKujD.js";import"./generateUtilityClass-mLX-m29y.js";import"./styled-thNUQRPl.js";import"./generateUtilityClasses-DGf4tbvL.js";import"./useTheme-CLkEv95-.js";import"./Box-C83oWY3G.js";import"./Box-DlYuhDE8.js";import"./Container-DLPgUEUh.js";import"./styled-DCbo4I3z.js";import"./createStyled-lowEfwXB.js";import"./useThemeProps-At40PQ24.js";import"./FlexBox-NMVzPqDV.js";import"./Stack-CcM8nxhu.js";import"./Typography-7qJHmYWv.js";import"./Paper-D-csFAd3.js";import"./useThemeProps-CR3q6hIr.js";import"./AdapterDayjs-Bh746Glk.js";import"./Modal-DR8JHd-z.js";import"./utils-CtBn2Om0.js";import"./TransitionGroupContext-CHRtULwj.js";import"./index-DAZgcoYU.js";import"./resolveComponentProps-Dc14A0Xg.js";import"./Popover-BdniOjWh.js";import"./TextField-VYpRKwSw.js";import"./useFormControl-CZxL2IaN.js";import"./createSvgIcon-V9v0b-rh.js";import"./IconButton-D9SltU1Q.js";import"./ButtonBase-CvSf6vSn.js";import"./DialogContent-CfoP2HP5.js";import"./Button-Bf8_SP8e.js";import"./Chip-CPeHQbdq.js";import"./DateTimePicker-DtUwUzaw.js";import"./Divider-DHhQsNL_.js";import"./Chip-Cs6bMZDw.js";import"./Divider-BOL12Syp.js";import"./TreeView-DEjBOrW7.js";import"./Alert-C83Wtki0.js";import"./LinearProgress-D1WH3K-w.js";import"./Spinner-CX2KmoCf.js";import"./Dialog-BJNkPgfD.js";import"./MapToggleButtonPresentational-BtIuW8W8.js";import"./Remove-qUnvA5Qg.js";import"./LinkButton-XIf9yczH.js";import"./TextField-Z8WmXcEs.js";import"./Switch-vGqTkiql.js";import"./DatePicker-NdtGOenD.js";import"./Paper-BJ_QnuCU.js";import"./ErrorFallback-DSQ6d8ue.js";import"./ErrorFallbackText-CXIKZcAb.js";import"./ErrorFallbackWrapper-DbmuJJ7f.js";import"./Brand-BVn3cdyI.js";import"./constants-BK6Qtb1C.js";import"./Edit-DcejEQXi.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Po={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
