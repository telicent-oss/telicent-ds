import{S as l}from"./DropdownButton-DzEacR5L.js";import"./iframe-CakKu3tO.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BV3RYnBk.js";import"./createSvgIcon-DzFzUuJj.js";import"./generateUtilityClass-6Xw7P5Pk.js";import"./styled-D0i_6XAq.js";import"./generateUtilityClasses-CTZdcpcX.js";import"./useTheme-CU3Z1LPN.js";import"./Box-CScMK_tz.js";import"./Box-Dqg2QVrM.js";import"./Container-qAOf7brY.js";import"./styled-Bc9giz0S.js";import"./createStyled-_kKMVs_z.js";import"./useThemeProps-CaBBmZ9W.js";import"./Stack-Bp4TNhTS.js";import"./Typography-VZwDLLsu.js";import"./Paper-DBfB9cOM.js";import"./useThemeProps-B0dC3yxA.js";import"./Text-BpfdXhwS.js";import"./AdapterDayjs-FG7X0hAC.js";import"./Modal-B3Wl13vZ.js";import"./utils-CGnDQcez.js";import"./TransitionGroupContext-B9U98U0r.js";import"./index-Chjky9EM.js";import"./resolveComponentProps-iQz6eQKL.js";import"./TextField-Dz5pbBA4.js";import"./useFormControl-BnXqfYXF.js";import"./IconButton-by7O0-70.js";import"./ButtonBase-DXatlffU.js";import"./DialogContent-CqiwXf8a.js";import"./Button-4KrkEQt7.js";import"./Chip-DLnMpScH.js";import"./DateTimePicker-CeMgnArL.js";import"./Divider-DBfCyhXV.js";import"./Chip-B3Sx6Jvd.js";import"./Divider-B5Ng5m_3.js";import"./TreeView-_VwDVBrL.js";import"./Close-fI8KD5QN.js";import"./LinearProgress-K4-hTmuI.js";import"./Spinner-CQ5Mmb5a.js";import"./Dialog-hPYI290l.js";import"./MapToggleButtonPresentational-DlZ_MTdF.js";import"./Remove-C87szEH0.js";import"./TextField-X3bvylQP.js";import"./Switch-CvCjsl_j.js";import"./DatePicker-CvxthTcJ.js";import"./LinkButton-Cv90u6o7.js";import"./Paper-0914DYk_.js";import"./ErrorFallback-D2fuzadK.js";import"./ErrorFallbackText-_e0eHtFb.js";import"./ErrorFallbackWrapper-C92QdUtP.js";import"./Brand-oBbv0poP.js";import"./constants-kG9JxYl2.js";import"./Edit-CmkU-7Bg.js";const{fn:d,userEvent:a,within:h}=__STORYBOOK_MODULE_TEST__,gr={title:"Inputs/Search/SearchBox",component:l,tags:["autodocs"],args:{onSearch:d()}},r={args:{placeholder:"Search all"},play:async({canvasElement:c})=>{const o=h(c);await a.type(o.getByRole("searchbox"),"data catalog"),await a.click(o.getByRole("button",{name:"search"}))}},t={args:{placeholder:"Search all",disabled:!0}};var e,p,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
