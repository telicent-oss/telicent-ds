import{a as h,j as r}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as u}from"./index-CTjT7uj6.js";import{f as v}from"./index-edE1QCkR.js";import{o as s,f}from"./AuthModal-INY1J062.js";import{T as g}from"./Text-DWuU5NOi.js";import"./jsx-runtime-CB_V9I5Y.js";import"./constants-DKuHcIkI.js";import"./iframe-s2GvGjGy.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./identifier-ubkqThfq.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./ButtonBase-BS_9IN6p.js";import"./styled-CeNrfZN8.js";import"./generateUtilityClasses-rmcueE__.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-BMyBEyBj.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BAZTFLL2.js";import"./utils-EYY7_thZ.js";import"./Paper-CX7OniPZ.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DI4ErmOj.js";import"./AdapterDayjs-B1noBw_N.js";import"./Typography-jxiy5gAQ.js";import"./TextField-Dd-W-Nbe.js";import"./createStyled-MF3orRa4.js";import"./IconButton-B40nmrRW.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BA_D-pD1.js";import"./Button-D5FpgyXB.js";import"./Chip-CpBBya1C.js";import"./UserIcon-C_uMuWNI.js";import"./Container-THkL10Ux.js";import"./styled-D52li5_j.js";import"./Stack-BXkbJ8_X.js";import"./Box-BmQrrWB5.js";import"./MenuItem-C70p-rzV.js";import"./dividerClasses-BqGj-Wnd.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BmTc0fFj.js";import"./Card-AawNb1ZT.js";import"./Divider-OL1fE4_m.js";import"./TreeView-DoStf2cx.js";import"./LinearProgress-D_UfVP6h.js";import"./Spinner-BatD7ajz.js";import"./Dialog-BCXWohbq.js";import"./MapToggleButtonPresentational-C-P2Xz9W.js";import"./Remove-VTXboCXe.js";import"./TextField-xy8B6PxM.js";import"./Select-Ovpwa_Do.js";import"./Switch-CFTT8Jub.js";import"./DatePicker-x8e043oY.js";import"./DateTimePicker-B10t8APv.js";import"./LinkButton-BaH7xTw3.js";import"./Paper-CPoUKSxJ.js";import"./ErrorFallback-ysz_C47v.js";import"./ErrorFallbackText-CR-qweg6.js";import"./ErrorFallbackWrapper-D_1cbupt.js";import"./Brand-npN9D4Uu.js";import"./Edit-DJ67vPjx.js";const _o={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[t,n]=u.useState(null),l=d=>{n(d.currentTarget)},c=()=>{n(null)},i=!!t,e=i?"simple-popover":void 0;return h("div",{children:[r(f,{"aria-describedby":e,onClick:l,children:"Open Popover"}),r(s,{id:e,open:i,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(g,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
