import{S as l}from"./DropdownButton-iOB7tFo3.js";import"./iframe-ekgyvAI9.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-6Ji74agl.js";import"./createSvgIcon-Cz2FQkUF.js";import"./styled-Q5upQxit.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./useTheme-C5GDcVVQ.js";import"./Container-CmEFyrQ9.js";import"./styled-BpMn-R5t.js";import"./createStyled-FZZaYGHg.js";import"./useThemeProps-DphVTmkb.js";import"./Stack-Cg7aALjV.js";import"./Box-Bgfu1TlP.js";import"./Typography-C64aAkxC.js";import"./Paper-BydBWlqJ.js";import"./useThemeProps-Bvz7h4cQ.js";import"./Text-C-7vsUm_.js";import"./AdapterDayjs-NJf71x8s.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./DateTimePicker-BUG89NrY.js";import"./Divider-B---moVq.js";import"./Chip-CNM9xVJ3.js";import"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./MapToggleButtonPresentational-Bh86kc4C.js";import"./Remove-BKfh7hYJ.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./LinkButton-BUP5FRO7.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import"./constants-4ukM-jXN.js";import"./Edit-BIOwsPnM.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,lr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const dr=["Example","Disabled"];export{t as Disabled,r as Example,dr as __namedExportsOrder,lr as default};
