import{j as e,a as i}from"./DefaultPropsProvider-DFY4ak0N.js";import{a as u}from"./UIThemeProvider-BLiZ0Gm7.js";import"./FeatureMap-BttrAoCv.js";import"./index-BBkUAzwr.js";import"./UserProfile-NMAtx-0s.js";import{u as g}from"./Divider-DAgaR-c5.js";import"./DataSetIcon-BKDYAjaN.js";import"./UserIcon-BBaOMras.js";import"./UserStatus-VnIxDP0V.js";import"./Text-CT8Hsbh7.js";import"./Chip-Re9EdDqo.js";import"./TreeView-lTRLpyPE.js";import"./UserProfileContent-BX1sU6gj.js";import"./FlexBox-BeMizPY2.js";import"./LinearProgress-D_OOVHuT.js";import"./Button-DBMYhhyj.js";import"./MiniSearchAutocomplete-BKZoEuge.js";import"./SearchBox-CMRfhy0w.js";import"./FlexGrid-C3XaaJ1g.js";import"./Container-UgwXBVDq.js";import"./Card-CAzITrCM.js";import"./CardActions-Bgy5QqvA.js";import"./FloatingPanelToggleButton-BHA_tshY.js";import"./Popover-hGM4NHSJ.js";import"./Toolbar-CMJ9Uid3.js";import"./Modal-uCxHbO_I.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-mSkvzYyn.js";import"./colorManipulator-CBCqAaIV.js";import"./GlobalStyles-BXgVjq2T.js";import"./useTheme-C0BBsbhz.js";import"./index-Cgu61Deq.js";import"./iframe-CrSVUlwC.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./ButtonBase-84En7ikD.js";import"./styled-B_l5QWFX.js";import"./generateUtilityClasses-BiAO1vNq.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./Popover-Am7Us3VU.js";import"./useTheme-BWRXETY3.js";import"./utils-CYUpNy-w.js";import"./Paper-CPACjhlu.js";import"./Box-BDaEidkD.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-CtD0QUEE.js";import"./SvgIcon-CLrTMJzm.js";import"./useThemeProps-BLcls0bU.js";import"./styled-CfhjJ1E8.js";import"./PrimaryButton-CcR-pRuA.js";import"./Button-bPCeHTF6.js";import"./OutlinedInput-irM7CcaK.js";import"./InputBase-jKBwaCDv.js";function f(r){return typeof r=="string"&&CSS.supports("color",r)}const p=({theme:r})=>{const n=(l,s=0)=>Object.entries(l).map(([o,t])=>{const d=s*4;return typeof t=="object"&&!Array.isArray(t)?i("div",{style:{paddingLeft:d},children:[i("strong",{children:[o,":"]}),n(t,s+1)]},o):i("div",{style:{paddingLeft:d,display:"flex",alignItems:"center",gap:8,fontFamily:"monospace"},children:[i("span",{children:[o,": ",t==null?void 0:t.toString()]}),f(t)&&e("span",{style:{display:"inline-block",width:32,height:16,backgroundColor:t,border:"2px solid #444",borderRadius:8}})]},o)});return e("div",{children:n(r)})};p.__docgenInfo={description:"A bit like JSON.stringify(), but with colour swatches",methods:[],displayName:"ThemeViewer",props:{theme:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:""}}};const fr={title:"Theme/ThemeViewer",component:p,tags:["autodocs"],decorators:[r=>e(u,{dark:!0,theme:"GraphOrange",children:e("div",{style:{padding:16,backgroundColor:"#222"},children:e(r,{})})})]},m={render:()=>{const r=g();return e(p,{theme:r})}};var a,c,h;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const theme = useExtendedTheme();
    return <ThemeViewer theme={theme} />;
  }
}`,...(h=(c=m.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const yr=["Default"];export{m as Default,yr as __namedExportsOrder,fr as default};
