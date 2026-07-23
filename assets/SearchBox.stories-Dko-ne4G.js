import{S as l}from"./DropdownButton-DzB6ahkn.js";import"./iframe-BqqKlwwa.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CPduY34a.js";import"./createSvgIcon-1vjhxYae.js";import"./generateUtilityClass-C21e_TMF.js";import"./styled-DYH3NNtb.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./useTheme-D5fnxfrf.js";import"./Box-CMGXnnyg.js";import"./Box-fJZ8R9-A.js";import"./Container-CjnffXXv.js";import"./styled-BKL9P30Y.js";import"./createStyled-2Pi8n9Bx.js";import"./useThemeProps-BE43dwe9.js";import"./Stack-DGYvNFnp.js";import"./Typography-r9WARuqd.js";import"./Paper-CJpWpN4s.js";import"./useThemeProps-BeWtcQiU.js";import"./Text-D367fKUk.js";import"./AdapterDayjs-DvkxE42H.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./TextField-CSaMK6Rk.js";import"./useFormControl-CJ-AiNnx.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./DialogContent-CtGptt-v.js";import"./Button--P2V-vbf.js";import"./Chip-Bg9GS4ad.js";import"./DateTimePicker-Bg2Aumfy.js";import"./Divider-C9Y0zhSY.js";import"./Chip-DP6OEXjS.js";import"./Divider-DtsR-NFR.js";import"./TreeView-g4w2Ic2N.js";import"./Close-KcKFZADQ.js";import"./LinearProgress-BcbpGby2.js";import"./Spinner-C3y-_tnf.js";import"./Dialog-CU2Sdzg4.js";import"./MapToggleButtonPresentational-BhuzwcFT.js";import"./Remove-CJtGZM1W.js";import"./TextField-DcCagKfQ.js";import"./Switch-BFbXwE48.js";import"./DatePicker-D6WVRr1T.js";import"./LinkButton-5F2XfMGt.js";import"./Paper-8WAvk_Qw.js";import"./ErrorFallback-AR6ag1S9.js";import"./ErrorFallbackText-CFF1RAi1.js";import"./ErrorFallbackWrapper-D5foAbpi.js";import"./Brand-Dl2vMMPH.js";import"./constants-mvoOnkOS.js";import"./Edit-oZ_9Z-0E.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
