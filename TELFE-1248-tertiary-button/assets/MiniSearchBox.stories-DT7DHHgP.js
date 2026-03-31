import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as c}from"./index-CTjT7uj6.js";import{w as T,u as l,f as h}from"./index-edE1QCkR.js";import{r as B,e as A,q as I,o as R}from"./AuthModal-CiXo8-p4.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-BU7JDVYl.js";import"./iframe-DShMpYox.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-DOQIfnJh.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-CG_yOqSO.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BitlNMhn.js";import"./utils-EYY7_thZ.js";import"./Paper-DurtPqdU.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DTZC2Bgq.js";import"./AdapterDayjs-CwUPgnLa.js";import"./TextField-DHonYTvf.js";import"./createStyled-MF3orRa4.js";import"./IconButton-Cs2d6H_u.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-B0Ct5bDE.js";import"./Button-CDw32Au9.js";import"./Chip-DNdTa_iC.js";import"./UserIcon-Bq9kLVr7.js";import"./Container-CeTulhJU.js";import"./styled-D52li5_j.js";import"./Stack-C-VLTEnn.js";import"./Box-CRiiUqfG.js";import"./MenuItem-DqUkfAKy.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BPJ67Xo5.js";import"./Card-BQnMpQJj.js";import"./Divider-ALDgEm0R.js";import"./TreeView-DWvM_rah.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-C58kaBQ6.js";import"./MapToggleButtonPresentational-C6NzNk9h.js";import"./Remove-sI1URbM_.js";import"./TextField-h5PPgqP5.js";import"./Select-R6uhQZb-.js";import"./Switch-Cq_EkAlM.js";import"./DatePicker-CfVtjRA2.js";import"./DateTimePicker-CAFr88VV.js";import"./LinkButton-nuz8b2FC.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./Edit-C29vdGC_.js";const Xo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:h(),onTogglePopOver:h()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=T(i);await l.type(r.getByRole("searchbox"),"River Nile"),await l.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[p,s]=c.useState(!1),m=a=>{x(a.currentTarget),s(!0)},b=()=>{s(a=>!a)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(A,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(I,{rotation:p?180:void 0,fontSize:"inherit"})})}),t(R,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};const Yo=["Demo","WithDownArrow","Loading"];export{e as Demo,o as Loading,n as WithDownArrow,Yo as __namedExportsOrder,Xo as default};
