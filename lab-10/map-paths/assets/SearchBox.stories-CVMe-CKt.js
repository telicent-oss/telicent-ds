import{j as l}from"./DropdownButton-DpvAnkHg.js";import"./iframe-B-bQ8-2T.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9Zr7okE.js";import"./SvgIcon-UN5gLgZI.js";import"./generateUtilityClass-CG5sjlGK.js";import"./styled-DOmm5J5B.js";import"./generateUtilityClasses-CA_BUpCf.js";import"./useTheme-B1KTYiIC.js";import"./Box-DUbUks71.js";import"./Box-Cb51q2aG.js";import"./Container-BrNvvhUm.js";import"./styled-XA2qTXOU.js";import"./createStyled-F7qmmNU6.js";import"./useThemeProps-BqcDYrbJ.js";import"./FlexBox-BGamYhMG.js";import"./Stack-NkQdXg6W.js";import"./Typography-ichFhS_t.js";import"./Paper-UD-fH5lO.js";import"./useThemeProps-D43hB7uA.js";import"./Text-C2SnKuds.js";import"./AdapterDayjs-Bi2Myd6S.js";import"./Modal-BinRocgF.js";import"./utils-Cwu4GIe3.js";import"./TransitionGroupContext-D6yDpsO9.js";import"./index-CI_ZfTAb.js";import"./resolveComponentProps-DFyBBYGP.js";import"./Popover-7r96UTT2.js";import"./TextField-COG7v3AR.js";import"./useFormControl-C2Wl_Rfv.js";import"./createSvgIcon-yZopMPvq.js";import"./IconButton-CzJgcxFx.js";import"./ButtonBase-jFTlO58q.js";import"./DialogContent-MA-T71Pz.js";import"./Button-CpFdI90F.js";import"./Chip-Bxe4KEdd.js";import"./DateTimePicker-BRht8fYt.js";import"./Divider-OvS7Rpu4.js";import"./AppInfoRow-8RG6mUcJ.js";import"./Chip-d5Jlpmkz.js";import"./Divider-CwRXz9WH.js";import"./TreeView-C7jsPmrW.js";import"./Alert-qseOYOaL.js";import"./LinearProgress-zOhaivJ7.js";import"./Spinner-L5B8MxAA.js";import"./Dialog-CtpvfQA2.js";import"./MapToggleButtonPresentational-B6oRN28T.js";import"./Remove-DO2en3Z5.js";import"./LinkButton-k11oZu-9.js";import"./TextField-Di8tiFVP.js";import"./Switch-xgHe0pBA.js";import"./DatePicker-DKq07de7.js";import"./Paper-Br8iEvDm.js";import"./ErrorFallback-DJBh-Sr1.js";import"./ErrorFallbackText-DRx9AnrW.js";import"./ErrorFallbackWrapper-DH7xG75e.js";import"./Brand-CPR-mKV1.js";import"./constants-CdgyqUfC.js";import"./Edit-B7KGH8V2.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
