import{j as e,a as i}from"./DefaultPropsProvider-ZjhccZnB.js";import{U as u}from"./UIThemeProvider-CdpnkA_M.js";import"./FeatureMap-B_pg9Y8p.js";import"./index-BBkUAzwr.js";import"./UserProfile-EfrqN1PU.js";import{u as g}from"./Divider-9cYgS_Kv.js";import"./DataSetIcon-BOfCbmrC.js";import"./UserIcon-B6OSrQE1.js";import"./Text-Chcp7No1.js";import"./Chip-DHeIEnT7.js";import"./TreeView-DJcHSySb.js";import"./UserProfileContent-BjE7fYQQ.js";import"./FlexBox-CHX3w-Ff.js";import"./LinearProgress-DD-ZDPzk.js";import"./Button-BLGXxvup.js";import"./FlexGrid-Y8kMg0vc.js";import"./Container-CDaxYc3T.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";import"./Popover-Dnj75uG4.js";import"./jsx-runtime-BwZVo4Wn.js";import"./colorManipulator-zO1DXvwL.js";import"./useTheme-BAsjQMSl.js";import"./index-B47g9DW4.js";import"./iframe-BSROH7j9.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./ButtonBase-GdOU_fqa.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-rSPSjYHH.js";import"./useTheme-DIIM1Wcn.js";import"./utils-C6E22oQ1.js";import"./Paper-Cul9nzd-.js";import"./Box-DVpyV88R.js";import"./styled-DYky2rJa.js";import"./index-_4_hgnnR.js";import"./Button-DG02f22Q.js";import"./createSvgIcon-DQcKRcx_.js";import"./SvgIcon-0MOxWfTP.js";import"./useThemeProps-BAuVkQ7A.js";function f(r){return typeof r=="string"&&CSS.supports("color",r)}const p=({theme:r})=>{const n=(l,s=0)=>Object.entries(l).map(([o,t])=>{const d=s*4;return typeof t=="object"&&!Array.isArray(t)?i("div",{style:{paddingLeft:d},children:[i("strong",{children:[o,":"]}),n(t,s+1)]},o):i("div",{style:{paddingLeft:d,display:"flex",alignItems:"center",gap:8,fontFamily:"monospace"},children:[i("span",{children:[o,": ",t==null?void 0:t.toString()]}),f(t)&&e("span",{style:{display:"inline-block",width:32,height:16,backgroundColor:t,border:"2px solid #444",borderRadius:8}})]},o)});return e("div",{children:n(r)})};p.__docgenInfo={description:"A bit like JSON.stringify(), but with colour swatches",methods:[],displayName:"ThemeViewer",props:{theme:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:""}}};const mr={title:"Theme/ThemeViewer",component:p,tags:["autodocs"],decorators:[r=>e(u,{dark:!0,theme:"GraphOrange",children:e("div",{style:{padding:16,backgroundColor:"#222"},children:e(r,{})})})]},m={render:()=>{const r=g();return e(p,{theme:r})}};var a,c,h;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const theme = useExtendedTheme();
    return <ThemeViewer theme={theme} />;
  }
}`,...(h=(c=m.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const pr=["Default"];export{m as Default,pr as __namedExportsOrder,mr as default};
