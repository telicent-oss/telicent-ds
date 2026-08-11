import{S as l}from"./DropdownButton-B1bD1lNa.js";import"./iframe-woqfefPC.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CZrO7rOz.js";import"./SvgIcon-Bo1XjP9O.js";import"./generateUtilityClass-BJXokMoA.js";import"./styled-DxPBiXUf.js";import"./generateUtilityClasses-BfMa5HrZ.js";import"./useTheme-DjCAOCMf.js";import"./Box-B199DmZe.js";import"./Box-CdBdZvPi.js";import"./Container-DlcQbp9d.js";import"./styled-CUr9clCY.js";import"./createStyled-IyuL39l2.js";import"./useThemeProps-C7rvhRGK.js";import"./FlexBox-CFiAFxVr.js";import"./Stack-CkaIEl_P.js";import"./Typography-DpKxRL_6.js";import"./Paper-Cel9I3vj.js";import"./useThemeProps-DiI4sMJp.js";import"./Text-CVdTrgex.js";import"./AdapterDayjs-SYc6eaHj.js";import"./Modal-CaqrQysV.js";import"./utils-BHr5gcCM.js";import"./TransitionGroupContext-DpyE4Xc2.js";import"./index-Cc2aF9ce.js";import"./resolveComponentProps-BPbh-zwX.js";import"./Popover-FzkS9WOq.js";import"./TextField-C8YEFGvP.js";import"./useFormControl-CdUfgNyJ.js";import"./createSvgIcon-DMQw-rzj.js";import"./IconButton-CZXr5bFM.js";import"./ButtonBase-CZ3-eO2f.js";import"./DialogContent-D9t3JHo2.js";import"./Button-BYXN4taO.js";import"./Chip-CN1uKpCE.js";import"./DateTimePicker-BCq-mAD2.js";import"./Divider-CDzzakYn.js";import"./AppInfoRow-FQf-Uxyu.js";import"./Chip-Ye1FV8gr.js";import"./Divider-B-R56vz7.js";import"./TreeView-CnSgD92Q.js";import"./Alert-5oooyx2V.js";import"./LinearProgress-BghVVCAF.js";import"./Spinner-C544qo6r.js";import"./Dialog-Ck4mEIjf.js";import"./MapToggleButtonPresentational-DigQzjPw.js";import"./Remove-BFnkFzrU.js";import"./LinkButton-B1YmsP7j.js";import"./TextField-DBB085ZE.js";import"./Switch-CUBS3sDF.js";import"./DatePicker-C25_Cre5.js";import"./Paper-BJBTp4DB.js";import"./ErrorFallback-FTfU9tJD.js";import"./ErrorFallbackText-BxvBPsFK.js";import"./ErrorFallbackWrapper-WIZsIluo.js";import"./Brand-DchGyFNu.js";import"./constants-5mjpbbvY.js";import"./Edit-DCb6sKCZ.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
