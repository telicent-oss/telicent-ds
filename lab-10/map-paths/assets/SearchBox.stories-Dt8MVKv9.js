import{l}from"./DropdownButton-BR3B1G6x.js";import"./iframe-DOLuw-8z.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D-CtbMck.js";import"./SvgIcon-BjWn1_cp.js";import"./generateUtilityClass-D23RcBiy.js";import"./styled-5Shyaefz.js";import"./generateUtilityClasses-ChqHqDQv.js";import"./useTheme-BSZkNvEx.js";import"./Box-BFt0Svhz.js";import"./Box-Bwed_2XS.js";import"./Container-DA4_3B6s.js";import"./styled-CU1aRKTP.js";import"./createStyled-DWYFW-gl.js";import"./useThemeProps-CShRTLgw.js";import"./FlexBox-dhqGSpWS.js";import"./Stack-D5u4BrRv.js";import"./Typography-Z1XTMoOJ.js";import"./Paper-BriXG56v.js";import"./useThemeProps-CUodZPbj.js";import"./Text-v6BCoAFn.js";import"./AdapterDayjs-C99Dz3b5.js";import"./Modal-D90df1Mz.js";import"./utils-CUrWUUX2.js";import"./TransitionGroupContext-CvOe7o6x.js";import"./index-F34Reg20.js";import"./resolveComponentProps-Da1Gp387.js";import"./Popover-DWnhc3gj.js";import"./TextField-CSSUqK2u.js";import"./useFormControl-DJ_bputt.js";import"./createSvgIcon-Dp3o3x_9.js";import"./IconButton-B7uU5-A6.js";import"./ButtonBase-DQ4h9g4Z.js";import"./DialogContent-MnGvk2PE.js";import"./Button-77T-pKpm.js";import"./Chip-Bo6kFT4m.js";import"./DateTimePicker-4y9zAVnR.js";import"./Divider-BIsEpysU.js";import"./AppInfoRow-Cc31NytU.js";import"./Chip-CbE023TT.js";import"./Divider-DLErqQ6C.js";import"./TreeView-BvSVb2QI.js";import"./Alert-DOAPXxCG.js";import"./LinearProgress-BhUeYgYm.js";import"./Spinner-B2RojS2c.js";import"./Dialog-Bx2dNClF.js";import"./MapToggleButtonPresentational-CkgwP2H7.js";import"./Remove-e2Ul6uKz.js";import"./LinkButton-qsDBDeKr.js";import"./TextField-Z8zl28V9.js";import"./Switch-CdY-5xOk.js";import"./DatePicker-FXWZ1w0I.js";import"./Paper-B6G87zKQ.js";import"./ErrorFallback-bABA0cST.js";import"./ErrorFallbackText-CRXi0n9L.js";import"./ErrorFallbackWrapper-BV65zCgM.js";import"./Brand-fYK7bDws.js";import"./Edit-yjB0ncsI.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
