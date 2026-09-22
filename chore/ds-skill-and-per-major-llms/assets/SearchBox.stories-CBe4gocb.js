import{l}from"./DropdownButton-C0SajuR0.js";import"./iframe-D2xSd84e.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DLxTDp4e.js";import"./SvgIcon-B_Vuuw4i.js";import"./generateUtilityClass-CL5j5EH9.js";import"./styled-Uo2f4_eJ.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./useTheme-DD50os6u.js";import"./Box-aVZbDO8n.js";import"./Box-AGJ8HEdo.js";import"./Container-t30wv68u.js";import"./styled-jm0NCBmc.js";import"./createStyled-Q-b37U0V.js";import"./useThemeProps-Be8ecqSA.js";import"./FlexBox-DFBellf-.js";import"./Stack-DDjwWG7N.js";import"./Typography-CrXkC3Kj.js";import"./Paper-CMPnbo-3.js";import"./useThemeProps-CRX3G5nR.js";import"./Text-YKd5ufxb.js";import"./AdapterDayjs-CiYnk4U8.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";import"./Popover-DC9XfNY8.js";import"./TextField-BGl_E-Mk.js";import"./useFormControl-Cm4ESQ5Z.js";import"./createSvgIcon-BEH_TywE.js";import"./IconButton-r2Lpaq8o.js";import"./ButtonBase-wo9-0n7F.js";import"./DialogContent-B91V-Ggp.js";import"./Button-CT09wWAC.js";import"./Chip-2ePwHCRw.js";import"./DateTimePicker-BuM--HXU.js";import"./Divider-CZRs-x0D.js";import"./AppInfoRow-DY_H98te.js";import"./Chip-CYDyhIWX.js";import"./Divider-iCQqHWoM.js";import"./TreeView-C70c9-5p.js";import"./Alert-B22QG778.js";import"./LinearProgress-BJVPH0JL.js";import"./Spinner-CNKuUvLk.js";import"./Dialog-COLBK_8G.js";import"./MapToggleButtonPresentational-CsNIma1D.js";import"./Remove-7bR9n6m0.js";import"./LinkButton-CzHaV0bx.js";import"./TextField-2b4aPcPE.js";import"./Switch-bG2W1qCe.js";import"./DatePicker-BZgfSvoM.js";import"./Paper-BZvfaCOX.js";import"./ErrorFallback-BIncdLow.js";import"./ErrorFallbackText-ZC0AQgkA.js";import"./ErrorFallbackWrapper-CHAW5TC5.js";import"./Brand-rY45k5xL.js";import"./Edit-gqxvj0va.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
