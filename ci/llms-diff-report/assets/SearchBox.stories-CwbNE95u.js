import{S as l}from"./DropdownButton-DUCyq73_.js";import"./iframe-DTfHyu5W.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DPsHQdqc.js";import"./SvgIcon-ByJD-XbM.js";import"./generateUtilityClass-Ba3X23cx.js";import"./styled-tbRfHNfe.js";import"./generateUtilityClasses-9N7BeDkA.js";import"./useTheme-CurHEFdS.js";import"./Box-6g8k1lEa.js";import"./Box-iMTEkAxo.js";import"./Container-CFRLiDzI.js";import"./styled-V-O3-yLC.js";import"./createStyled-28Jskctr.js";import"./useThemeProps-DhRvrWEK.js";import"./FlexBox-Dx9ngdP2.js";import"./Stack-B5wnKsZi.js";import"./Typography-DEVUDcjz.js";import"./Paper-7aLAfVaY.js";import"./useThemeProps-BMiY-Nz3.js";import"./Text-CbmCHta1.js";import"./AdapterDayjs-DfVF7Ju1.js";import"./Modal-CuQBat2_.js";import"./utils-hc9ieIbF.js";import"./TransitionGroupContext-pH2rcq8m.js";import"./index-BojeORES.js";import"./resolveComponentProps-kTxaYEkO.js";import"./Popover-CiC5O2RE.js";import"./TextField-Bq5brCt8.js";import"./useFormControl-CfqMxs37.js";import"./createSvgIcon-eW_NYhFU.js";import"./IconButton-B22dA0Mh.js";import"./ButtonBase-B4JUzgMd.js";import"./DialogContent-S6vhYFVZ.js";import"./Button-Dae9G8Ev.js";import"./Chip-C9IKZPuh.js";import"./DateTimePicker-CXsTfPVe.js";import"./Divider-B8-GGABN.js";import"./AppInfoRow-DM5JDCIg.js";import"./Chip-Ce6ftWrB.js";import"./Divider-DQcY7mpQ.js";import"./TreeView-CKyPmjfa.js";import"./Alert-DZul0Vde.js";import"./LinearProgress-HKvtzsEf.js";import"./Spinner-Dx14enoI.js";import"./Dialog-CGZIbGHz.js";import"./MapToggleButtonPresentational-jSE1x0h9.js";import"./Remove-NJ9P2pvD.js";import"./LinkButton-CUXW4PH5.js";import"./TextField-C0bNNYYR.js";import"./Switch-CyPgFvnQ.js";import"./DatePicker-YZ26x2F9.js";import"./Paper-BXaJm_Li.js";import"./ErrorFallback-UX7BvmTl.js";import"./ErrorFallbackText-CnIufqnP.js";import"./ErrorFallbackWrapper-B3axQyNr.js";import"./Brand-e-EQElnn.js";import"./constants-BAHDwWKH.js";import"./Edit-CU6kEAEu.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
