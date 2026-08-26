import{j as l}from"./DropdownButton-BZtDtOal.js";import"./iframe-CA_6RkqO.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DTk_4ZHb.js";import"./SvgIcon-BWAhgByR.js";import"./generateUtilityClass-CfDRvlGw.js";import"./styled-CVefpKE-.js";import"./generateUtilityClasses-C47siXwS.js";import"./useTheme-Dm6Z4O55.js";import"./Box-BW6pEvIo.js";import"./Box-DRdQdhLP.js";import"./Container-ljR5Mlot.js";import"./styled-BZqq2mi8.js";import"./createStyled-D4eWRD3H.js";import"./useThemeProps-Cd3wv7Xx.js";import"./FlexBox-CNxWriJY.js";import"./Stack-BF2ZTufs.js";import"./Typography-89Tvlrsc.js";import"./Paper-Ec3Q2dVy.js";import"./useThemeProps-Ciz7WQ9r.js";import"./Text-kbO6tKSd.js";import"./AdapterDayjs-D37bSqFv.js";import"./Modal-ClU2RWPM.js";import"./utils-CUE5wzp2.js";import"./TransitionGroupContext-B7OUtgPI.js";import"./index-CZHtQLZq.js";import"./resolveComponentProps-Dn_frYuF.js";import"./Popover-BEGXH3NQ.js";import"./TextField-vpmRkwtN.js";import"./useFormControl-B5eiIyWN.js";import"./createSvgIcon-BmwhwAqn.js";import"./IconButton-DtNtarBg.js";import"./ButtonBase-D6Bx6lP1.js";import"./DialogContent-Bjk6fQxi.js";import"./Button-CtzIpja4.js";import"./Chip-CUcMHjoK.js";import"./DateTimePicker-BFqbfcrX.js";import"./Divider-C7dFHnGB.js";import"./AppInfoRow-CEbLv7hl.js";import"./Chip-Bn4GruJi.js";import"./Divider-Ch-VEHlJ.js";import"./TreeView-B6I62OZ2.js";import"./Alert-fjB33Bay.js";import"./LinearProgress-uTJnSXzv.js";import"./Spinner-CCLxETt1.js";import"./Dialog-CxPCMfoF.js";import"./MapToggleButtonPresentational-5Q31WZ7z.js";import"./Remove-DmcGi_Wa.js";import"./LinkButton-vlyktWjA.js";import"./TextField-X3HuGAf0.js";import"./Switch-M79zMsH0.js";import"./DatePicker-C_Oow28J.js";import"./Paper-BuyoLuFc.js";import"./ErrorFallback-LaiW1HKw.js";import"./ErrorFallbackText-Ck2XCFF1.js";import"./ErrorFallbackWrapper-BumR9vBV.js";import"./Brand-D_DOo81n.js";import"./constants-CcDpWV1i.js";import"./Edit-M3NLeTM0.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
