import{l}from"./DropdownButton-5YfSb9Fn.js";import"./iframe-sCMTah6I.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-4_LEutpy.js";import"./SvgIcon-CkgeR1pA.js";import"./generateUtilityClass-BYp2rJcs.js";import"./styled-DiK4NeDs.js";import"./generateUtilityClasses-9ji0KBHh.js";import"./useTheme-Cv8UvDsx.js";import"./Box-srHswpXa.js";import"./Box-DN1xyrcF.js";import"./Container-DVMysQv8.js";import"./styled-Bzi5a8Nn.js";import"./createStyled-BO5OqwSA.js";import"./useThemeProps-Cd4SWnkA.js";import"./FlexBox-CRw_PPcA.js";import"./Stack-DFUJU3IC.js";import"./Typography-C7H7tdJH.js";import"./Paper-Dj0XEFgg.js";import"./useThemeProps-CwuygNVU.js";import"./Text-9kYsGMH2.js";import"./AdapterDayjs-CjuRIhml.js";import"./Modal-VHuAw1xl.js";import"./utils-BShRNaI0.js";import"./TransitionGroupContext-CHNcdvbO.js";import"./index-1i7MGYri.js";import"./resolveComponentProps-BFmcRe6X.js";import"./Popover-DMdSQ1Gm.js";import"./TextField-CBhaYsMI.js";import"./useFormControl-OPIlrXbI.js";import"./createSvgIcon-CmrJPXWi.js";import"./IconButton-CYN9JXU4.js";import"./ButtonBase-DeG36Vwr.js";import"./DialogContent-BTIhtZgK.js";import"./Button-D80LzkP1.js";import"./Chip-hCr7175Z.js";import"./DateTimePicker-BfEgPMRC.js";import"./Divider-_tu6IKvy.js";import"./AppInfoRow-CnKYYJBk.js";import"./Chip-3WkjkahH.js";import"./Divider-BueWLHhh.js";import"./TreeView-BIfksvo4.js";import"./Alert-mijamWS4.js";import"./LinearProgress-DAPaXVKP.js";import"./Spinner-DUsSOKlD.js";import"./Dialog-DbeRkryw.js";import"./MapToggleButtonPresentational-Douysrfr.js";import"./Remove-CBCNzEQH.js";import"./LinkButton-nPoqBe3W.js";import"./TextField-D2x4JNLw.js";import"./Switch-9QJLy3Eh.js";import"./DatePicker-D-6cx-Gj.js";import"./Paper-CAqAKMmN.js";import"./ErrorFallback-BSr14lue.js";import"./ErrorFallbackText-wsO76vmK.js";import"./ErrorFallbackWrapper-D0L8TNPl.js";import"./Brand-D2huPEYW.js";import"./Edit-WLzQi74Q.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
