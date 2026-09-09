import{j as l}from"./DropdownButton-DJdqotpZ.js";import"./iframe-BSHZoLH0.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CHfoFH7k.js";import"./SvgIcon-DC5_2IrZ.js";import"./generateUtilityClass-93OEZURd.js";import"./styled-CmvYIxHZ.js";import"./generateUtilityClasses-Dmf-VZ7g.js";import"./useTheme-wykRndr8.js";import"./Box-DF0XtrAi.js";import"./Box-Bi27dI0Y.js";import"./Container-DSzlElAn.js";import"./styled-DpjO08Qt.js";import"./createStyled-CXLXU_b5.js";import"./useThemeProps-D1mqY05e.js";import"./FlexBox-Cic89pYt.js";import"./Stack-DL55RpSh.js";import"./Typography-B6wCg7xE.js";import"./Paper-u2F4-x87.js";import"./useThemeProps-BiMA9qcn.js";import"./Text-BTMH42VK.js";import"./AdapterDayjs-DtpCU4aK.js";import"./Modal-BI0OjZNh.js";import"./utils-CEnASBxq.js";import"./TransitionGroupContext-bIsVkF__.js";import"./index-CfPnIGXk.js";import"./resolveComponentProps-DF06A6lx.js";import"./Popover-D9PrNx1G.js";import"./TextField-D0AHhzbv.js";import"./useFormControl-CjQ9hJs3.js";import"./createSvgIcon-BAA291eo.js";import"./IconButton-BH6roq5J.js";import"./ButtonBase-DmGCS8gm.js";import"./DialogContent-sjLbqYOm.js";import"./Button-BGj1rfsC.js";import"./Chip-40aXZDOw.js";import"./DateTimePicker-yuJZFQX_.js";import"./Divider-D09lGavG.js";import"./AppInfoRow-RkbytSj0.js";import"./Chip-BniXzfdZ.js";import"./Divider-BZJnezW1.js";import"./TreeView-CzzylW8x.js";import"./Alert-BrDYZj8C.js";import"./LinearProgress-Cgz4Xu1_.js";import"./Spinner-DYac5LQn.js";import"./Dialog-BeIaWLBv.js";import"./MapToggleButtonPresentational-D_VEx1TD.js";import"./Remove-Bso_SpPx.js";import"./LinkButton-DfD1itup.js";import"./TextField-D855Mpyf.js";import"./Switch-S5xN80Zo.js";import"./DatePicker-B_uUVeOn.js";import"./Paper-DYqddmBf.js";import"./ErrorFallback-DQXVOLvB.js";import"./ErrorFallbackText-DKNgRgr1.js";import"./ErrorFallbackWrapper-CVlp2bT8.js";import"./Brand-B-VTUx_1.js";import"./Edit-DszYU_yI.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,Er={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
