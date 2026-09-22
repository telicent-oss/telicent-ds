import{l}from"./DropdownButton-BjR4G6c6.js";import"./iframe-wwyKJVT7.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BJUhZHXy.js";import"./SvgIcon-CUVs1lE1.js";import"./generateUtilityClass-CkoJfXzB.js";import"./styled-LpRxHRpP.js";import"./generateUtilityClasses-lZioDJSU.js";import"./useTheme-fWgDsTlF.js";import"./Box-BfkY0LoG.js";import"./Box-CvHLitPM.js";import"./Container-Ex8awo5l.js";import"./styled-CqLf-K_6.js";import"./createStyled-7rACZg1S.js";import"./useThemeProps-DGz7F6m3.js";import"./FlexBox-PSVLjaHH.js";import"./Stack-DkIolbKj.js";import"./Typography-KsMZ-Lzq.js";import"./Paper-Ty8OBP7-.js";import"./useThemeProps-6ff9_uQw.js";import"./Text-Cs_t5jTe.js";import"./AdapterDayjs-DLuz1KZP.js";import"./Modal-FJt4lU_X.js";import"./utils-De2QkNKz.js";import"./TransitionGroupContext-Ci1yj1nx.js";import"./index-Bc6yxq3M.js";import"./resolveComponentProps-Tez3FZ9N.js";import"./Popover-ad1rGmx0.js";import"./TextField-DQEmSFXz.js";import"./useFormControl-Bu5lKDwq.js";import"./createSvgIcon-Bca1zsRN.js";import"./IconButton-DAUWwzIO.js";import"./ButtonBase-ZfxRSw2y.js";import"./DialogContent-B9FHsown.js";import"./Button-BUB-REPY.js";import"./Chip-dWFWXs2g.js";import"./DateTimePicker-CCwiql_t.js";import"./Divider-CgD_nbzY.js";import"./AppInfoRow-DD0pDyG_.js";import"./Chip-BBcf24H1.js";import"./Divider-DvGORPwC.js";import"./TreeView-BUpBgZFV.js";import"./Alert-BSE5AHq1.js";import"./LinearProgress-rfUNUhKS.js";import"./Spinner-tbj581ml.js";import"./Dialog-BtzheIZz.js";import"./MapToggleButtonPresentational-DIhML7LJ.js";import"./Remove-BOsHTnyW.js";import"./LinkButton-tlP8KO0e.js";import"./TextField-DzD39lVx.js";import"./Switch-DnCT64eH.js";import"./DatePicker-C6MhubZW.js";import"./Paper-K6NL7s7r.js";import"./ErrorFallback-SJMDDmk_.js";import"./ErrorFallbackText-CQHNy6L3.js";import"./ErrorFallbackWrapper-C_Ne2lSR.js";import"./Brand-Bn9laiH-.js";import"./Edit-CBu4FngS.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
