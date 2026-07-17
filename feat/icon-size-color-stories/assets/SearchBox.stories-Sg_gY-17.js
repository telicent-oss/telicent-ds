import{S as l}from"./DropdownButton-m4oAkgLO.js";import"./iframe-4Z2LxEjH.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Dn7bcAci.js";import"./createSvgIcon-CNnlh6Ap.js";import"./generateUtilityClass-BPbgVUOY.js";import"./styled-D9Oi1aUK.js";import"./generateUtilityClasses-CQ1C1DNv.js";import"./useTheme-qiXM2BR_.js";import"./Box-CWnL0-kx.js";import"./Box-CtDO-7ut.js";import"./Container-BF2V3YgM.js";import"./styled-PljUaw1G.js";import"./createStyled-CgJyWD5K.js";import"./useThemeProps-Bm6W4Oay.js";import"./Stack-BPHOMmkF.js";import"./Typography-D7AEpGZI.js";import"./Paper-BKXMHiEm.js";import"./useThemeProps-D7Mz9mye.js";import"./Text-CmblpdDq.js";import"./AdapterDayjs-DKLAX8dA.js";import"./Modal-DtYiCPOd.js";import"./utils-DxmHp4p9.js";import"./TransitionGroupContext-BmRflWZM.js";import"./index-DN9JsOxD.js";import"./resolveComponentProps-DTqENjZa.js";import"./TextField-B-7n_i8J.js";import"./useFormControl-CIKuegYi.js";import"./IconButton-OboHhmdt.js";import"./ButtonBase-DC7GiLki.js";import"./DialogContent-CLTsR7Gc.js";import"./Button-D1loNkwl.js";import"./Chip-BnoHHAuC.js";import"./DateTimePicker-Dx8k1Xf_.js";import"./Divider-BgwjSeCu.js";import"./Chip-MK6JrQ5D.js";import"./Divider-DdjI0t4o.js";import"./TreeView-CpcN6HG5.js";import"./Close-TIUP1fcW.js";import"./LinearProgress-Co82gXpN.js";import"./Spinner-D0mTe2p1.js";import"./Dialog-CkoHwcao.js";import"./MapToggleButtonPresentational-C1a0Grpw.js";import"./Remove-xKXD2RcH.js";import"./TextField-CEsLErf5.js";import"./Switch-D1PyAAj4.js";import"./DatePicker-CrHvTLpZ.js";import"./LinkButton-DnFoZC7q.js";import"./Paper-NROpS9Qg.js";import"./ErrorFallback-BI44wUWi.js";import"./ErrorFallbackText-4v6ASHsj.js";import"./ErrorFallbackWrapper-Bdvw_u7e.js";import"./Brand-rjeL-2ua.js";import"./constants-DNsUScy4.js";import"./Edit-3N5tUp50.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
