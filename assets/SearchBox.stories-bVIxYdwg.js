import{S as l}from"./DropdownButton-pqytKPlf.js";import"./iframe-CzCkUhLB.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D2XJ4u-D.js";import"./createSvgIcon-C5AbB3qG.js";import"./generateUtilityClass-BJmbtkIz.js";import"./styled-BAICCbW2.js";import"./generateUtilityClasses-DcHQ8wPZ.js";import"./useTheme-D8VtF-T3.js";import"./Box-ChoQNki_.js";import"./Box-BGVnL9Ww.js";import"./Container-CevBIhIW.js";import"./styled-BxT8txyJ.js";import"./createStyled-CnaTqEJw.js";import"./useThemeProps-BolcGYv-.js";import"./Stack-BQ9Nq0wB.js";import"./Typography-C4jf0x9_.js";import"./Paper-BitHaSdO.js";import"./useThemeProps-DU8Uvr2K.js";import"./Text-CrtF-KKD.js";import"./AdapterDayjs-BpTj0bJ_.js";import"./Modal-DIeDBBDO.js";import"./utils-DKTt1Dtk.js";import"./TransitionGroupContext-DMmZE5A7.js";import"./index-DsxJ_3S5.js";import"./resolveComponentProps-Cbl6fkow.js";import"./TextField-D7nA1rxz.js";import"./useFormControl-DtEaYh3d.js";import"./IconButton-DxOsamAP.js";import"./ButtonBase-C1jEsrEk.js";import"./DialogContent-ChmWl_kd.js";import"./Button-nVc9Q04c.js";import"./Chip-Bpfp1uo7.js";import"./DateTimePicker-CvUf-KCh.js";import"./Divider-Dhatnav_.js";import"./Chip-CiH2_6GH.js";import"./Divider-CY_WcVt5.js";import"./TreeView-DImXIC-1.js";import"./Close-ufy7FO6S.js";import"./LinearProgress-Bi56K1d1.js";import"./Spinner-DnNrdg_H.js";import"./Dialog-D71AnQMa.js";import"./MapToggleButtonPresentational-CKn0zbRc.js";import"./Remove-D-VYR3BE.js";import"./TextField-DWYxHpkX.js";import"./Switch-DeHO8LDM.js";import"./DatePicker-D79epJYE.js";import"./LinkButton-BEZRiMwC.js";import"./Paper-WtLvzPxM.js";import"./ErrorFallback-Biy0HDIH.js";import"./ErrorFallbackText-BbEDFHSR.js";import"./ErrorFallbackWrapper-BH2ujPyJ.js";import"./Brand-rCLVFpN1.js";import"./constants-SYLv77sP.js";import"./Edit-CNP1jkFH.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
