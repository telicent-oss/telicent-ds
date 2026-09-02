import{r as m,a as b,j as e}from"./iframe-BF8_hFNx.js";import{i as B,D as z}from"./DropdownButton-DVtRIcts.js";import{I as D,P as I}from"./AppInfoRow-zwSigULx.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-rPKIWBtx.js";import"./SvgIcon-DhCv6bzj.js";import"./generateUtilityClass-C29SJJDl.js";import"./styled-kP_L0DyI.js";import"./generateUtilityClasses-B__cmnPL.js";import"./useTheme-DZci25c3.js";import"./Box-CUYKe1tY.js";import"./Box-DHvMVfZy.js";import"./Container-BegR-SrU.js";import"./styled-CbMT73hZ.js";import"./createStyled-DokrzfuI.js";import"./useThemeProps-CDeIQJ38.js";import"./FlexBox-DrOT4QhN.js";import"./Stack-BIqzh-e3.js";import"./Typography-CtK18Imo.js";import"./Paper-BguOuIiI.js";import"./useThemeProps-1BPhIFnh.js";import"./Text-DU9ZnK76.js";import"./AdapterDayjs-117jxmi7.js";import"./Modal-DCxYWccC.js";import"./utils-BRCA_V7K.js";import"./TransitionGroupContext-BVj8p-WN.js";import"./index-COCuBnZd.js";import"./resolveComponentProps-DfO40KW_.js";import"./Popover-9qKCk_MS.js";import"./TextField-BS2ilkb_.js";import"./useFormControl-qErKgMum.js";import"./createSvgIcon-BcTBSPU2.js";import"./IconButton-Gc7uHhHy.js";import"./ButtonBase-Clf2zMkW.js";import"./DialogContent-BWIOdOfX.js";import"./Button-DP7o8EIN.js";import"./Chip-DWhy1Stt.js";import"./DateTimePicker-DeJSXd4V.js";import"./Divider-DT8mT7OZ.js";import"./Chip-WKeTVlom.js";import"./Divider-CC0GgcEz.js";import"./TreeView-o0agiv7Y.js";import"./Alert-Cs3YD2KW.js";import"./LinearProgress-BwRzna67.js";import"./Spinner-C8DyG1BW.js";import"./Dialog-BHLXSVSJ.js";import"./MapToggleButtonPresentational-DbTpgosD.js";import"./Remove-DT44vmSD.js";import"./LinkButton-BCmyYT1I.js";import"./TextField-BHAI0ohz.js";import"./Switch-5NEqFo5z.js";import"./DatePicker-C_QVF-r5.js";import"./Paper-DrXlW5u-.js";import"./ErrorFallback-CzP6Gni1.js";import"./ErrorFallbackText-C_Foeru1.js";import"./ErrorFallbackWrapper-DMxUkyYr.js";import"./Brand-C-qNgu8Q.js";import"./constants-DJrxGGyh.js";import"./Edit-Dno316tl.js";const{fn:l,userEvent:h,within:R}=__STORYBOOK_MODULE_TEST__,Co={title:"Inputs/Search/MiniSearchBox",component:B,tags:["autodocs"],args:{onSearch:l(),onTogglePopOver:l()}},t={args:{placeholder:"Search"},play:async({canvasElement:i})=>{const r=R(i);await h.type(r.getByRole("searchbox"),"River Nile"),await h.click(r.getByRole("button",{name:"search"}))}},n={args:{placeholder:"Search"},render:i=>{const[r,T]=m.useState(null),[p,s]=m.useState(!1),c=a=>{T(a.currentTarget),s(!0)},x=()=>{s(a=>!a)};return b("div",{children:[e(B,{...i,onTogglePopOver:c,endIcon:e(D,{size:"small","aria-label":"toggle pop over",onClick:c,children:e(z,{rotation:p?180:void 0,fontSize:"inherit"})})}),e(I,{id:"search-popover",open:p,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:214},width:254,onClose:x,children:"Pop over content goes here"})]})}},o={args:{placeholder:"Loading",loading:!0}};var g,d,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var u,w,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,O,E,f,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Loading",
    loading: true
  }
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source},description:{story:"For asynchronous events, display a loader to inform the user that an action\nis in progress. To implement this, simply set the `loading` prop to `true`.",...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const jo=["Demo","WithDownArrow","Loading"];export{t as Demo,o as Loading,n as WithDownArrow,jo as __namedExportsOrder,Co as default};
