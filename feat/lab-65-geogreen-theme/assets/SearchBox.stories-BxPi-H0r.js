import{S as l}from"./DropdownButton-G-K-EndC.js";import"./iframe-BTs8Qz_v.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-qL3nc6Ye.js";import"./createSvgIcon-ZqZYcYJv.js";import"./generateUtilityClass-XH2js52g.js";import"./styled-B0ve5Lte.js";import"./generateUtilityClasses-DzsYMhVt.js";import"./useTheme-BY7-I-_D.js";import"./Box-Ajc45ecz.js";import"./Box-BHCfSNSs.js";import"./Container-BT4lQ41_.js";import"./styled-DgGoeEUu.js";import"./createStyled-CiTOBok1.js";import"./useThemeProps-CHaXSOO8.js";import"./Stack-Cl9uE_8Z.js";import"./Typography-Bwzy_pT0.js";import"./Paper-DxuvVAQ6.js";import"./useThemeProps-XRwC7y3X.js";import"./Text-By5Br_b-.js";import"./AdapterDayjs-B4hS7p71.js";import"./Modal-BHy1MODJ.js";import"./utils-DsGpmSH6.js";import"./TransitionGroupContext-C2nTmoPW.js";import"./index-Anq-NE1T.js";import"./resolveComponentProps-BSvdUFPL.js";import"./TextField-BCq8fbtP.js";import"./useFormControl-kbGIszV2.js";import"./IconButton-BOjLmXTD.js";import"./ButtonBase-DlDbZFIP.js";import"./DialogContent-pg1EBpb5.js";import"./Button-B27AaC1x.js";import"./Chip-BttY0NCV.js";import"./DateTimePicker-C0SYLDsK.js";import"./Divider-CN9HmWY3.js";import"./Chip-bGugLWYg.js";import"./Divider-D8qwfiZK.js";import"./TreeView-D9FXVNiU.js";import"./Close-Ck6AS4Zz.js";import"./LinearProgress-BtCU_M3F.js";import"./Spinner-m7x04DVn.js";import"./Dialog-IL7KeYEd.js";import"./MapToggleButtonPresentational-C7HzS0Xc.js";import"./Remove-bxF0BX3Y.js";import"./TextField-BL90cYaN.js";import"./Switch-5GXWpenZ.js";import"./DatePicker-XxDKSNN6.js";import"./LinkButton-B7KGF6ie.js";import"./Paper-BjLrjFfj.js";import"./ErrorFallback-75I18Wfm.js";import"./ErrorFallbackText-CkvOLZB-.js";import"./ErrorFallbackWrapper-Do3gktls.js";import"./Brand-BV9ZwJS1.js";import"./constants-7Gz8l8bJ.js";import"./Edit-ClsnfoJ9.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,s,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Search all",
    disabled: true
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Sr=["Example","Disabled"];export{t as Disabled,r as Example,Sr as __namedExportsOrder,gr as default};
