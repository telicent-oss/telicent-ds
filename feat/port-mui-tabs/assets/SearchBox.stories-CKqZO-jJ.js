import{l}from"./DropdownButton-BpmbuP-W.js";import"./iframe-2ae3jLtY.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9xuM1bb.js";import"./SvgIcon-sVmN0tjE.js";import"./generateUtilityClass-DBJjU6LW.js";import"./styled-Cj2-Y3sw.js";import"./generateUtilityClasses-VYWBwYVV.js";import"./useTheme-D2IgbBvW.js";import"./Box-DcijUUVm.js";import"./Box-CxnaGThj.js";import"./Container-lpa-al36.js";import"./styled-BH3fMlC7.js";import"./createStyled-BadfWLO8.js";import"./useThemeProps-CjP8yKq7.js";import"./FlexBox-BAOPxaZ7.js";import"./Stack-AhKTZxfl.js";import"./Typography-CKX7xI1z.js";import"./Paper-D44EUSF6.js";import"./useThemeProps-5tLqmsws.js";import"./Text-CtYPczsC.js";import"./AdapterDayjs-WX-3Svd1.js";import"./Modal-Ct5j1anh.js";import"./utils-BRBAF39N.js";import"./TransitionGroupContext-CBaIu8bW.js";import"./index-_aQ6azBP.js";import"./resolveComponentProps-Cd-xgkW-.js";import"./Popover-CVm97bWw.js";import"./TextField-CtUdVhYe.js";import"./useFormControl-CedqS7-r.js";import"./createSvgIcon-CPbPJc4P.js";import"./IconButton-DHZQ4I-9.js";import"./ButtonBase-BhlfSjKw.js";import"./DialogContent-QyBYExTq.js";import"./Button-w3dj99fq.js";import"./Chip-C9Sq19CS.js";import"./DateTimePicker-D7ooMU44.js";import"./Divider-Cb5TCzV-.js";import"./AppInfoRow-B--uq7Sd.js";import"./Chip-BsvBzIp-.js";import"./Divider-M5RYGepX.js";import"./TreeView-DdTK-PUs.js";import"./Alert-DnPepOi0.js";import"./LinearProgress-CsGPtdNT.js";import"./Spinner-Ce4Lduox.js";import"./Dialog-zSVX8tBH.js";import"./MapToggleButtonPresentational-DEZRespE.js";import"./Remove-DUc8tOl9.js";import"./LinkButton-DFUlFy7Z.js";import"./TextField-rZhfzkLQ.js";import"./Switch-B6fBRjkG.js";import"./DatePicker-DoQqJsHZ.js";import"./Paper-Cyq_1M7S.js";import"./ErrorFallback-DoY8WDiN.js";import"./ErrorFallbackText-D5Vin4ef.js";import"./ErrorFallbackWrapper-Bw7iQJps.js";import"./Brand-CpWuTQBH.js";import"./constants-DPt7sep6.js";import"./Edit-CdllxfNz.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
