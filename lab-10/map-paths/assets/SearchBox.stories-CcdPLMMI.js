import{S as l}from"./DropdownButton-C9PYtlvl.js";import"./iframe-pszacA4H.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CB1G1wTy.js";import"./SvgIcon-XcfurnTf.js";import"./generateUtilityClass-BfTSA2ZQ.js";import"./styled-CbW2HKyC.js";import"./generateUtilityClasses-DGogGnVz.js";import"./useTheme-Bw0ZNVbz.js";import"./Box-rB9UFT7p.js";import"./Box-CoitXI_U.js";import"./Container-UFLQM5aJ.js";import"./styled-Bdsosz3P.js";import"./createStyled-CEQlNkwM.js";import"./useThemeProps-DitB9ftq.js";import"./FlexBox-P753RbX0.js";import"./Stack-CowqRQdz.js";import"./Typography-CVdmjiVE.js";import"./Paper-DVbcfMuJ.js";import"./useThemeProps-WWbtI8HR.js";import"./Text-CY99CXXY.js";import"./AdapterDayjs-BBUVLuYE.js";import"./Modal-B_JXUh34.js";import"./utils-JVxM4WCa.js";import"./TransitionGroupContext-CaODL787.js";import"./index-C_qP2Xor.js";import"./resolveComponentProps-Bnl83VAv.js";import"./Popover-CLeTkZpW.js";import"./TextField-BtmYsaUD.js";import"./useFormControl-B9g9kZo5.js";import"./createSvgIcon-OMymEHKM.js";import"./IconButton-5N96Sbkv.js";import"./ButtonBase-i9cVtWJL.js";import"./DialogContent-SD13_ieT.js";import"./Button-9QqdFzed.js";import"./Chip-BtBjn1GF.js";import"./DateTimePicker-CFmdo-og.js";import"./Divider-CZs5Ku8H.js";import"./AppInfoRow-BRrAHWV8.js";import"./Chip-Ck-CjMOG.js";import"./Divider-BV2jxKYP.js";import"./TreeView-Cg5cah_6.js";import"./Alert-CfkRJKnU.js";import"./LinearProgress-B3k1N0Vh.js";import"./Spinner-COeGv-jx.js";import"./Dialog-BVjlScIy.js";import"./MapToggleButtonPresentational-B8OSYcmI.js";import"./Remove-DEmqYZQ1.js";import"./LinkButton-CJEhHAkn.js";import"./TextField-BXIIhSmS.js";import"./Switch-Cw_ietTJ.js";import"./DatePicker-5BS5wq4q.js";import"./Paper-BVfCuSkB.js";import"./ErrorFallback-BUB_KZrd.js";import"./ErrorFallbackText-D_fv6GUU.js";import"./ErrorFallbackWrapper-BydtoVbs.js";import"./Brand-BJODkHYZ.js";import"./constants-Bbs9w9BQ.js";import"./Edit-DtmqGm9P.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,vr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var p,e,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
