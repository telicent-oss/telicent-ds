import{j as l}from"./DropdownButton-BcIbR7mn.js";import"./iframe-BR2e2YDK.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-jc37Ujil.js";import"./SvgIcon-Cv-K0R04.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./useTheme-s-RP8QJy.js";import"./Box-DUkA7BwQ.js";import"./Box-Cjy76m6G.js";import"./Container-BqQatTiF.js";import"./styled-BxRNAcX1.js";import"./createStyled-CY95Mz_9.js";import"./useThemeProps-DwRsn42H.js";import"./FlexBox-GegQ6KoK.js";import"./Stack-COhqTIW9.js";import"./Typography-DUgZ7jdW.js";import"./Paper-Bu9Xtg_J.js";import"./useThemeProps-Db0C_hKt.js";import"./Text-G3gRIU3S.js";import"./AdapterDayjs-Cqhoz3bg.js";import"./Modal-a8XaxvFh.js";import"./utils-BDR_SyG2.js";import"./TransitionGroupContext-ClPOJll4.js";import"./index-DPx2uLoP.js";import"./resolveComponentProps-4VX9PFU8.js";import"./Popover-Baj7zd45.js";import"./TextField-BYBS7QeR.js";import"./useFormControl-BDmNOi78.js";import"./createSvgIcon-BCjTwnIN.js";import"./IconButton-Bays2K--.js";import"./ButtonBase-CmJPQ6Im.js";import"./DialogContent-wB_kMJWd.js";import"./Button-D2nWt4S8.js";import"./Chip-Bs3GvNHw.js";import"./DateTimePicker-BhkD0_Tn.js";import"./Divider-Dz7TZSIi.js";import"./AppInfoRow-DakeCdvn.js";import"./Chip-Ba4FoljX.js";import"./Divider-BLHqQnsK.js";import"./TreeView-CdxXinPI.js";import"./Alert-C4X40l06.js";import"./LinearProgress-Bi0KtS5W.js";import"./Spinner-KSKr4HCV.js";import"./Dialog-BOV1hoDB.js";import"./MapToggleButtonPresentational-CDIZBpSC.js";import"./Remove-DuE88Ezs.js";import"./LinkButton-BqutvHI0.js";import"./TextField-ByfWKBjI.js";import"./Switch-EzT8Sy71.js";import"./DatePicker-Bv_1Qb5R.js";import"./Paper-DeFLSdpX.js";import"./ErrorFallback-9noxw0Ql.js";import"./ErrorFallbackText-DAVlUHED.js";import"./ErrorFallbackWrapper-DctsmiY9.js";import"./Brand-Bmi4u6qq.js";import"./Edit-DHIa2SgU.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vr=["Example","Disabled"];export{t as Disabled,r as Example,vr as __namedExportsOrder,Er as default};
