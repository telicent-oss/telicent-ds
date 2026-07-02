import{S as l}from"./DropdownButton-D4ndyRTJ.js";import"./iframe-ulHXhjOW.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B-d1IQYh.js";import"./createSvgIcon-uTqWg2nN.js";import"./styled-Czze2UzD.js";import"./generateUtilityClasses-CSjJ64ks.js";import"./useTheme-DrTNJuY8.js";import"./Container-e_1t6Vkj.js";import"./styled-B4vmi4YW.js";import"./createStyled-ZgfepH37.js";import"./useThemeProps-BpUXXMW6.js";import"./Stack-Cyq5pepP.js";import"./Box-1efcaeVM.js";import"./Typography-Dn5MRyem.js";import"./Paper-Ce5gTSZ1.js";import"./useThemeProps-4ujKhl13.js";import"./Text-BoiTDCRr.js";import"./AdapterDayjs-CZeE3p0P.js";import"./Modal-Cg5uim4K.js";import"./utils-Cprl2CzU.js";import"./TransitionGroupContext-qSVm1uFm.js";import"./index-YuMLfXhi.js";import"./Select-DJoERUQP.js";import"./useFormControl-DawOst1E.js";import"./TextField-DVVVIXqb.js";import"./IconButton-t9DwqyqP.js";import"./ButtonBase-B2PuhISu.js";import"./DialogContent-MOZRP09j.js";import"./Button-DqB_Kw8t.js";import"./Chip-msXb_G5D.js";import"./MenuItem-BxHmYRBI.js";import"./dividerClasses-BYFYoYAG.js";import"./Chip-n1uZIzP0.js";import"./Divider-C0lF_NPc.js";import"./Divider-JeDgfplA.js";import"./TreeView-Djo6uz5s.js";import"./LinearProgress-BE1QBgJT.js";import"./Spinner-wBjktabM.js";import"./Dialog-BN-VRNR9.js";import"./MapToggleButtonPresentational-CtiuSv3Q.js";import"./Remove-CeLDCN2O.js";import"./TextField-CgXZ8iCV.js";import"./Select-FuqWOM9m.js";import"./Switch-BGnmX7CN.js";import"./DatePicker-C7pca_1x.js";import"./DateTimePicker-Buoun9gu.js";import"./LinkButton-CaaZOAyU.js";import"./Paper-CRQ_Ffgy.js";import"./ErrorFallback-CM5zR9AD.js";import"./ErrorFallbackText-CWsckLjw.js";import"./ErrorFallbackWrapper-yYMeo0wW.js";import"./Brand-CleGoPe-.js";import"./constants-BPnf2WSg.js";import"./Edit-DOoALeDD.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
