import{R as h,a as u,j as r}from"./iframe-4Z2LxEjH.js";import{P as s,B as v}from"./DropdownButton-m4oAkgLO.js";import{T as f}from"./Text-CmblpdDq.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Dn7bcAci.js";import"./createSvgIcon-CNnlh6Ap.js";import"./generateUtilityClass-BPbgVUOY.js";import"./styled-D9Oi1aUK.js";import"./generateUtilityClasses-CQ1C1DNv.js";import"./useTheme-qiXM2BR_.js";import"./Box-CWnL0-kx.js";import"./Box-CtDO-7ut.js";import"./Container-BF2V3YgM.js";import"./styled-PljUaw1G.js";import"./createStyled-CgJyWD5K.js";import"./useThemeProps-Bm6W4Oay.js";import"./Stack-BPHOMmkF.js";import"./Typography-D7AEpGZI.js";import"./Paper-BKXMHiEm.js";import"./useThemeProps-D7Mz9mye.js";import"./AdapterDayjs-DKLAX8dA.js";import"./Modal-DtYiCPOd.js";import"./utils-DxmHp4p9.js";import"./TransitionGroupContext-BmRflWZM.js";import"./index-DN9JsOxD.js";import"./resolveComponentProps-DTqENjZa.js";import"./TextField-B-7n_i8J.js";import"./useFormControl-CIKuegYi.js";import"./IconButton-OboHhmdt.js";import"./ButtonBase-DC7GiLki.js";import"./DialogContent-CLTsR7Gc.js";import"./Button-D1loNkwl.js";import"./Chip-BnoHHAuC.js";import"./DateTimePicker-Dx8k1Xf_.js";import"./Divider-BgwjSeCu.js";import"./Chip-MK6JrQ5D.js";import"./Divider-DdjI0t4o.js";import"./TreeView-CpcN6HG5.js";import"./Close-TIUP1fcW.js";import"./LinearProgress-Co82gXpN.js";import"./Spinner-D0mTe2p1.js";import"./Dialog-CkoHwcao.js";import"./MapToggleButtonPresentational-C1a0Grpw.js";import"./Remove-xKXD2RcH.js";import"./TextField-CEsLErf5.js";import"./Switch-D1PyAAj4.js";import"./DatePicker-CrHvTLpZ.js";import"./LinkButton-DnFoZC7q.js";import"./Paper-NROpS9Qg.js";import"./ErrorFallback-BI44wUWi.js";import"./ErrorFallbackText-4v6ASHsj.js";import"./ErrorFallbackWrapper-Bdvw_u7e.js";import"./Brand-rjeL-2ua.js";import"./constants-DNsUScy4.js";import"./Edit-3N5tUp50.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const Bo=["Demo"];export{o as Demo,Bo as __namedExportsOrder,Co as default};
