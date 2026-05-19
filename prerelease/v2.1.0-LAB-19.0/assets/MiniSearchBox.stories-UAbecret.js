import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as c}from"./index-CTjT7uj6.js";import{w as T,u as l,f as h}from"./index-edE1QCkR.js";import{q as B,e as A,p as I,n as R}from"./AuthModal-Du-gkYTW.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-DOFQHH6y.js";import"./Typography-Dt5bLYJQ.js";import"./identifier-NKQQRePw.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./constants-KYtGOcw0.js";import"./iframe-BLoGSFSA.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DPnT8y_r.js";import"./useTheme-Ke1uTKsJ.js";import"./GlobalStyles-vI--UIQO.js";import"./GlobalStyles-sLZUO0b6.js";import"./useThemeProps-C2Iq9OHP.js";import"./useThemeProps-nZW5Papo.js";import"./ButtonBase-DFf65YyL.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-5fkkG_Vc.js";import"./Select-gRzCjZbZ.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./Paper-CLsLNy44.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DvZHek-i.js";import"./ListItem-DAm1IJrN.js";import"./UserIcon-CYDlAMM8.js";import"./Container-hm5vFygi.js";import"./styled-VzSze10G.js";import"./createStyled-Bvwk-_EE.js";import"./Stack-CY4EFDZz.js";import"./Box-vAbK_4PI.js";import"./AppBar-DsGNkIzs.js";import"./Toolbar-CWAIilLy.js";import"./Chip-CMxnGK95.js";import"./IconButton-Bo7QGuUx.js";import"./Switch-7uPqVfWJ.js";import"./MenuItem-nMzlburO.js";import"./dividerClasses-BU2gZmHL.js";import"./UIThemeProvider-Brj0zjMt.js";import"./colorManipulator-BRsEHmOt.js";import"./ThemeProvider-un6kJHlG.js";import"./Chip-BRwbwVbv.js";import"./Card-D8BkeIZl.js";import"./Divider-CKsZbUR-.js";import"./Card-BG9kVIdx.js";import"./TreeView-BkIoI9QN.js";import"./LinearProgress-CUuKFvvX.js";import"./LinearProgress-BfvI3P-T.js";import"./Spinner-DTNXzZM5.js";import"./Dialog-IWHBpnq2.js";import"./DialogContent-BwRvQmzV.js";import"./Button-ZGJdOyfv.js";import"./MapToggleButtonPresentational-DMcR06l5.js";import"./Remove-ORZ2Ffdu.js";import"./TextField-_IJI58oT.js";import"./TextField-C5Vpu56G.js";import"./Select-B2EkDVMA.js";import"./Switch-nwTgaDx0.js";import"./DatePicker-Cd3EM856.js";import"./AdapterDayjs-Kn4cdtM7.js";import"./DateTimePicker-DGWs0BNw.js";import"./Tabs-DRIhGf0U.js";import"./LinkButton-aT7Hu3l6.js";import"./Paper-Bl82cnKL.js";import"./ErrorFallback-CGP1zAVd.js";import"./ErrorFallbackText-D-_xaRa8.js";import"./ErrorFallbackWrapper-H8jVUQSn.js";import"./Brand-lXzjEeMF.js";import"./Edit-C1ZXnIQP.js";const er={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:h(),onTogglePopOver:h()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=T(i);await l.type(r.getByRole("searchbox"),"River Nile"),await l.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[a,s]=c.useState(!1),m=p=>{x(p.currentTarget),s(!0)},b=()=>{s(p=>!p)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(I,{rotation:a?180:void 0,fontSize:"inherit"})})}),t(R,{id:"search-popover",open:a,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Search"
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };
    const togglePopUp = () => {
      setShowPopOver(show => !show);
    };
    return <div>
        <MiniSearchBox {...args} onTogglePopOver={openPopUp} endIcon={<IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>} />
        <PopOver id="search-popover" open={showPopOver} anchorEl={anchorEl} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 214
      }} width={254} onClose={togglePopUp}>
          Pop over content goes here
        </PopOver>
      </div>;
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,f,E,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const nr=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,nr as __namedExportsOrder,er as default};
