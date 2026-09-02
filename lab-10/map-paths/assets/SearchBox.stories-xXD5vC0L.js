import{j as l}from"./DropdownButton-DVtRIcts.js";import"./iframe-BF8_hFNx.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-rPKIWBtx.js";import"./SvgIcon-DhCv6bzj.js";import"./generateUtilityClass-C29SJJDl.js";import"./styled-kP_L0DyI.js";import"./generateUtilityClasses-B__cmnPL.js";import"./useTheme-DZci25c3.js";import"./Box-CUYKe1tY.js";import"./Box-DHvMVfZy.js";import"./Container-BegR-SrU.js";import"./styled-CbMT73hZ.js";import"./createStyled-DokrzfuI.js";import"./useThemeProps-CDeIQJ38.js";import"./FlexBox-DrOT4QhN.js";import"./Stack-BIqzh-e3.js";import"./Typography-CtK18Imo.js";import"./Paper-BguOuIiI.js";import"./useThemeProps-1BPhIFnh.js";import"./Text-DU9ZnK76.js";import"./AdapterDayjs-117jxmi7.js";import"./Modal-DCxYWccC.js";import"./utils-BRCA_V7K.js";import"./TransitionGroupContext-BVj8p-WN.js";import"./index-COCuBnZd.js";import"./resolveComponentProps-DfO40KW_.js";import"./Popover-9qKCk_MS.js";import"./TextField-BS2ilkb_.js";import"./useFormControl-qErKgMum.js";import"./createSvgIcon-BcTBSPU2.js";import"./IconButton-Gc7uHhHy.js";import"./ButtonBase-Clf2zMkW.js";import"./DialogContent-BWIOdOfX.js";import"./Button-DP7o8EIN.js";import"./Chip-DWhy1Stt.js";import"./DateTimePicker-DeJSXd4V.js";import"./Divider-DT8mT7OZ.js";import"./AppInfoRow-zwSigULx.js";import"./Chip-WKeTVlom.js";import"./Divider-CC0GgcEz.js";import"./TreeView-o0agiv7Y.js";import"./Alert-Cs3YD2KW.js";import"./LinearProgress-BwRzna67.js";import"./Spinner-C8DyG1BW.js";import"./Dialog-BHLXSVSJ.js";import"./MapToggleButtonPresentational-DbTpgosD.js";import"./Remove-DT44vmSD.js";import"./LinkButton-BCmyYT1I.js";import"./TextField-BHAI0ohz.js";import"./Switch-5NEqFo5z.js";import"./DatePicker-C_QVF-r5.js";import"./Paper-DrXlW5u-.js";import"./ErrorFallback-CzP6Gni1.js";import"./ErrorFallbackText-C_Foeru1.js";import"./ErrorFallbackWrapper-DMxUkyYr.js";import"./Brand-C-qNgu8Q.js";import"./constants-DJrxGGyh.js";import"./Edit-Dno316tl.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Search all"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "data catalog");
    await userEvent.click(canvas.getByRole("button", {
      name: "search"
    }));
  }
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var m,s,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Search all",
    disabled: true
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const br=["Example","Disabled"];export{t as Disabled,r as Example,br as __namedExportsOrder,vr as default};
