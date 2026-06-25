import{R as h,a as u,j as r}from"./iframe-B_xAjz_a.js";import{P as s,B as v}from"./DropdownButton-BnaLLxdm.js";import{T as f}from"./Text-Dxo92Y_P.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-sXWYTtMY.js";import"./createSvgIcon-DNxDKV7W.js";import"./styled-DWxCgiIq.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./useTheme-DXfWrHWZ.js";import"./Container-DZVvhBo5.js";import"./styled-Dj6VM8rS.js";import"./createStyled-YK0OyouD.js";import"./useThemeProps-B45YfUAa.js";import"./Stack-BUP2Ksyi.js";import"./Box-HNQBJ69w.js";import"./Typography-ByJUc9gg.js";import"./Paper-BTmXDdaE.js";import"./useThemeProps-CIWHHPPz.js";import"./AdapterDayjs-q2OtrlCq.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./TextField-CXoQdh2Y.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Button-BK_6tBa6.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./dividerClasses-LlugbWYd.js";import"./Chip-CbHUK2Oi.js";import"./Divider-D_2gC9Rv.js";import"./Divider-CmQ1Xcb5.js";import"./TreeView-027Y335s.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./MapToggleButtonPresentational-CEsfsZc1.js";import"./Remove-C35S1kL4.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./LinkButton-BGw7Liqm.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import"./constants-1TT1xdyQ.js";import"./Edit-DYLHrREl.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,Co={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:E()}},o={args:{open:!1},render:O=>{const[t,n]=h.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},e=!!t,i=e?"simple-popover":void 0;return u("div",{children:[r(v,{"aria-describedby":i,onClick:l,children:"Open Popover"}),r(s,{id:i,open:e,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(f,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
