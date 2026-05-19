import{a as h,j as r}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{R as u}from"./index-CTjT7uj6.js";import{f as v}from"./index-edE1QCkR.js";import{n as s,f}from"./AuthModal-Du-gkYTW.js";import{T as g}from"./Text-DOFQHH6y.js";import"./jsx-runtime-CB_V9I5Y.js";import"./constants-KYtGOcw0.js";import"./iframe-BLoGSFSA.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DPnT8y_r.js";import"./identifier-NKQQRePw.js";import"./useTheme-Ke1uTKsJ.js";import"./GlobalStyles-vI--UIQO.js";import"./GlobalStyles-sLZUO0b6.js";import"./useThemeProps-C2Iq9OHP.js";import"./useThemeProps-nZW5Papo.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./ButtonBase-DFf65YyL.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-5fkkG_Vc.js";import"./Select-gRzCjZbZ.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./Paper-CLsLNy44.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DvZHek-i.js";import"./ListItem-DAm1IJrN.js";import"./Typography-Dt5bLYJQ.js";import"./UserIcon-CYDlAMM8.js";import"./Container-hm5vFygi.js";import"./styled-VzSze10G.js";import"./createStyled-Bvwk-_EE.js";import"./Stack-CY4EFDZz.js";import"./Box-vAbK_4PI.js";import"./AppBar-DsGNkIzs.js";import"./Toolbar-CWAIilLy.js";import"./Chip-CMxnGK95.js";import"./IconButton-Bo7QGuUx.js";import"./Switch-7uPqVfWJ.js";import"./MenuItem-nMzlburO.js";import"./dividerClasses-BU2gZmHL.js";import"./UIThemeProvider-Brj0zjMt.js";import"./colorManipulator-BRsEHmOt.js";import"./ThemeProvider-un6kJHlG.js";import"./Chip-BRwbwVbv.js";import"./Card-D8BkeIZl.js";import"./Divider-CKsZbUR-.js";import"./Card-BG9kVIdx.js";import"./TreeView-BkIoI9QN.js";import"./LinearProgress-CUuKFvvX.js";import"./LinearProgress-BfvI3P-T.js";import"./Spinner-DTNXzZM5.js";import"./Dialog-IWHBpnq2.js";import"./DialogContent-BwRvQmzV.js";import"./Button-ZGJdOyfv.js";import"./MapToggleButtonPresentational-DMcR06l5.js";import"./Remove-ORZ2Ffdu.js";import"./TextField-_IJI58oT.js";import"./TextField-C5Vpu56G.js";import"./Select-B2EkDVMA.js";import"./Switch-nwTgaDx0.js";import"./DatePicker-Cd3EM856.js";import"./AdapterDayjs-Kn4cdtM7.js";import"./DateTimePicker-DGWs0BNw.js";import"./Tabs-DRIhGf0U.js";import"./LinkButton-aT7Hu3l6.js";import"./Paper-Bl82cnKL.js";import"./ErrorFallback-CGP1zAVd.js";import"./ErrorFallbackText-D-_xaRa8.js";import"./ErrorFallbackWrapper-H8jVUQSn.js";import"./Brand-lXzjEeMF.js";import"./Edit-C1ZXnIQP.js";const Ko={title:"Surfaces/PopOver",component:s,tags:["autodocs"],args:{onClose:v()}},o={args:{open:!1},render:E=>{const[t,i]=u.useState(null),l=d=>{i(d.currentTarget)},c=()=>{i(null)},n=!!t,e=n?"simple-popover":void 0;return h("div",{children:[r(f,{"aria-describedby":e,onClick:l,children:"Open Popover"}),r(s,{id:e,open:n,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:0},children:r(g,{children:"The content of the pop over."})})]})}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const No=["Demo"];export{o as Demo,No as __namedExportsOrder,Ko as default};
