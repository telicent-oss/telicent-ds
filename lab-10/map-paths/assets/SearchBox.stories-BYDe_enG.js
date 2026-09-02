import{j as l}from"./DropdownButton-Bb9iv5Vp.js";import"./iframe-B7cgaF-W.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BtEJ_j6a.js";import"./SvgIcon-CKN6T3r7.js";import"./generateUtilityClass-CYYdSLkV.js";import"./styled-B4hBdXs8.js";import"./generateUtilityClasses-7dram_XT.js";import"./useTheme-C9EIWu0e.js";import"./Box-CAg4Tsx7.js";import"./Box-v5biCQrT.js";import"./Container-DG9eXktv.js";import"./styled-aVKOBDcM.js";import"./createStyled-Ce75f-lr.js";import"./useThemeProps-DlhzAd0d.js";import"./FlexBox-DluCer-4.js";import"./Stack-C6HoR8k_.js";import"./Typography-DkJGsGTz.js";import"./Paper-BKCTlbQt.js";import"./useThemeProps-BLibk0ql.js";import"./Text-BTENkRLl.js";import"./AdapterDayjs-D1JpjkDV.js";import"./Modal-fooyFAIn.js";import"./utils-ClUtXAkm.js";import"./TransitionGroupContext-CZMjPoSB.js";import"./index-BginLdfj.js";import"./resolveComponentProps-b5o32fTm.js";import"./Popover-CTprQocu.js";import"./TextField-xW4lS50G.js";import"./useFormControl-B16JOFh2.js";import"./createSvgIcon-COsRokbB.js";import"./IconButton-Bwd-EBYU.js";import"./ButtonBase-pQD2E2i9.js";import"./DialogContent-CNCdvslU.js";import"./Button-bDQ4SD0F.js";import"./Chip-DqEC1oBy.js";import"./DateTimePicker-DuNCNG6Z.js";import"./Divider-qfOKhuSJ.js";import"./AppInfoRow-r354Xlqo.js";import"./Chip-C6_gr9Pz.js";import"./Divider-BYFJjNuf.js";import"./TreeView-Bm1zocjB.js";import"./Alert-DtTRNFbi.js";import"./LinearProgress-CHRD2DQp.js";import"./Spinner-dWVS9oPt.js";import"./Dialog-BLosbDfR.js";import"./MapToggleButtonPresentational-sMVPGoTJ.js";import"./Remove-BbJaJSzw.js";import"./LinkButton-DnPOi2Ez.js";import"./TextField-COjfZI8j.js";import"./Switch-CstIlIBg.js";import"./DatePicker-DBSyE5Fx.js";import"./Paper-DhD2fAsS.js";import"./ErrorFallback-CZ61smpx.js";import"./ErrorFallbackText-CfsRx3Jq.js";import"./ErrorFallbackWrapper-CV5TbnXm.js";import"./Brand-uk6lJML6.js";import"./constants-n8O9gxh0.js";import"./Edit-BDgoEkz2.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
