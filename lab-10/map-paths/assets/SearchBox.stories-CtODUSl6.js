import{j as l}from"./DropdownButton-BrGu84Gz.js";import"./iframe-Dy9lMmzB.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-lIlQD_Ok.js";import"./SvgIcon-CqTEOtHz.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./useTheme-BclnZfmM.js";import"./Box-D8L85hdW.js";import"./Box-Co6pvyno.js";import"./Container-DjBIKTWZ.js";import"./styled-DtITPUZJ.js";import"./createStyled-CMAzb2jS.js";import"./useThemeProps-lwM53F9r.js";import"./FlexBox-BSJBSHE3.js";import"./Stack-B4iL1Uda.js";import"./Typography-C9bsTXqt.js";import"./Paper-5Ojvp1ys.js";import"./useThemeProps-DmFPjoYm.js";import"./Text-BrRsEWjj.js";import"./AdapterDayjs-WZ0psJGR.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Button-hEWvcwcz.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./AppInfoRow-jj_TJA14.js";import"./Chip-CWm1ngwI.js";import"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./ErrorFallback-D7lBO-St.js";import"./ErrorFallbackText-DxFvtQm8.js";import"./ErrorFallbackWrapper-BbmC-MtB.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
