import{a as h,j as r}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as u}from"./index-CTjT7uj6.js";import{f as v}from"./index-edE1QCkR.js";import{P as s,B as f}from"./DropdownButton-DsEOrLxW.js";import{T as g}from"./Text-DNDtww-5.js";import"./jsx-runtime-CB_V9I5Y.js";import"./UserIcon-Bv1k9Gkr.js";import"./createSvgIcon-zAUpwBvY.js";import"./defaultTheme-Cd36Xqui.js";import"./styled-Co95aX7f.js";import"./generateUtilityClasses-LAuhwvbW.js";import"./DefaultPropsProvider-BJrUAfpV.js";import"./useTheme-CXTcqjFy.js";import"./useTheme-N1zbQagn.js";import"./Container-DAUnO2s0.js";import"./styled-BFCnUgfa.js";import"./createStyled-DALmTr0F.js";import"./useThemeProps-DY6NRhpk.js";import"./Stack-D6Q4v-dm.js";import"./Box-C8UM6PF1.js";import"./Typography-BTuSrW-Q.js";import"./Paper-C84P62Dn.js";import"./useThemeProps-mGX5p-it.js";import"./AdapterDayjs-Dcv1_Ch4.js";import"./index-gbGX4Sgq.js";import"./Modal-DMwGBxWQ.js";import"./utils-CZKs3qUl.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./Select-BAcvQhzR.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./GlobalStyles-Bf3t3VSv.js";import"./GlobalStyles-Cv-yeoYN.js";import"./TextField-DC0Fsl0w.js";import"./IconButton-DNCXIZ2n.js";import"./ButtonBase-D3m3WlyT.js";import"./colorManipulator-_4WjNWDc.js";import"./DialogContent-CV9k0A3j.js";import"./Button-BnBRdIVR.js";import"./Chip-CxBAkcex.js";import"./MenuItem-BQe4uye3.js";import"./dividerClasses-l5WzAbKi.js";import"./UIThemeProvider-C1WxYNpB.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-CVHsKeZ1.js";import"./Chip-CKDVrQLB.js";import"./Divider-oA2NDxbS.js";import"./Divider-B8c9urEZ.js";import"./TreeView-BEpIiRgO.js";import"./LinearProgress-DSGDjXQj.js";import"./Spinner-DhZwmjRq.js";import"./Dialog-BPI9Yj3K.js";import"./MapToggleButtonPresentational-D5YOt978.js";import"./Remove-BkPep7P_.js";import"./TextField-tnKbSM3S.js";import"./Select-3mUXH0tK.js";import"./Switch-BibpNf67.js";import"./DatePicker--dK9cNP8.js";import"./DateTimePicker-cy6yPI5j.js";import"./LinkButton-CVKymRM0.js";import"./Paper-24NI2w_o.js";import"./ErrorFallback-05kZtLFS.js";import"./ErrorFallbackText-BExZ28uU.js";import"./ErrorFallbackWrapper-76NLnkLs.js";import"./Brand-Kq-3gU1h.js";import"./constants-BOmE8RzX.js";import"./iframe-LMhFgRVo.js";import"../sb-preview/runtime.js";import"./Edit-GCVsx1H-.js";const _o={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[t,n]=u.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},i=!!t,e=i?"simple-popover":void 0;return h("div",{children:[r(f,{"aria-describedby":e,onClick:l,children:"Open Popover"}),r(s,{id:e,open:i,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(g,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const qo=["Demo"];export{o as Demo,qo as __namedExportsOrder,_o as default};
