import{a as z,j as t}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as c}from"./index-CTjT7uj6.js";import{w as I,u as l,f as h}from"./index-edE1QCkR.js";import{i as B,I as T,D as A,P as D}from"./DropdownButton-DsEOrLxW.js";import"./jsx-runtime-CB_V9I5Y.js";import"./UserIcon-Bv1k9Gkr.js";import"./createSvgIcon-zAUpwBvY.js";import"./defaultTheme-Cd36Xqui.js";import"./styled-Co95aX7f.js";import"./generateUtilityClasses-LAuhwvbW.js";import"./DefaultPropsProvider-BJrUAfpV.js";import"./useTheme-CXTcqjFy.js";import"./useTheme-N1zbQagn.js";import"./Container-DAUnO2s0.js";import"./styled-BFCnUgfa.js";import"./createStyled-DALmTr0F.js";import"./useThemeProps-DY6NRhpk.js";import"./Stack-D6Q4v-dm.js";import"./Box-C8UM6PF1.js";import"./Typography-BTuSrW-Q.js";import"./Paper-C84P62Dn.js";import"./useThemeProps-mGX5p-it.js";import"./Text-DNDtww-5.js";import"./AdapterDayjs-Dcv1_Ch4.js";import"./index-gbGX4Sgq.js";import"./Modal-DMwGBxWQ.js";import"./utils-CZKs3qUl.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./Select-BAcvQhzR.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./GlobalStyles-Bf3t3VSv.js";import"./GlobalStyles-Cv-yeoYN.js";import"./TextField-DC0Fsl0w.js";import"./IconButton-DNCXIZ2n.js";import"./ButtonBase-D3m3WlyT.js";import"./colorManipulator-_4WjNWDc.js";import"./DialogContent-CV9k0A3j.js";import"./Button-BnBRdIVR.js";import"./Chip-CxBAkcex.js";import"./MenuItem-BQe4uye3.js";import"./dividerClasses-l5WzAbKi.js";import"./UIThemeProvider-C1WxYNpB.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-CVHsKeZ1.js";import"./Chip-CKDVrQLB.js";import"./Divider-oA2NDxbS.js";import"./Divider-B8c9urEZ.js";import"./TreeView-BEpIiRgO.js";import"./LinearProgress-DSGDjXQj.js";import"./Spinner-DhZwmjRq.js";import"./Dialog-BPI9Yj3K.js";import"./MapToggleButtonPresentational-D5YOt978.js";import"./Remove-BkPep7P_.js";import"./TextField-tnKbSM3S.js";import"./Select-3mUXH0tK.js";import"./Switch-BibpNf67.js";import"./DatePicker--dK9cNP8.js";import"./DateTimePicker-cy6yPI5j.js";import"./LinkButton-CVKymRM0.js";import"./Paper-24NI2w_o.js";import"./ErrorFallback-05kZtLFS.js";import"./ErrorFallbackText-BExZ28uU.js";import"./ErrorFallbackWrapper-76NLnkLs.js";import"./Brand-Kq-3gU1h.js";import"./constants-BOmE8RzX.js";import"./iframe-LMhFgRVo.js";import"../sb-preview/runtime.js";import"./Edit-GCVsx1H-.js";const Xo={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:h(),onTogglePopOver:h()}},e={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=I(i);await l.type(r.getByRole("searchbox"),"River Nile"),await l.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,x]=c.useState(null),[p,s]=c.useState(!1),m=a=>{x(a.currentTarget),s(!0)},b=()=>{s(a=>!a)};return z("div",{children:[t(B,{...i,onTogglePopOver:m,endIcon:t(T,{size:"small","aria-label":"toggle pop over",onClick:m,children:t(A,{rotation:p?180:void 0,fontSize:"inherit"})})}),t(D,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:b,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
