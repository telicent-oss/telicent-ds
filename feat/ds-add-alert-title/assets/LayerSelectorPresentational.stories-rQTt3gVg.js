import{a as m,j as o}from"./iframe-lqtTyPDV.js";import{w as p,x as n}from"./DropdownButton-BiQZTsSN.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CCWXRARu.js";import"./createSvgIcon-pD-T4X64.js";import"./generateUtilityClass-Nor538iS.js";import"./styled-BNSlxa3g.js";import"./generateUtilityClasses-Dcld8p7_.js";import"./useTheme-BKtc1luz.js";import"./Box-VVrcLiMQ.js";import"./Box-D9fQMR-m.js";import"./Container-CXWOjLTi.js";import"./styled-PDD6VUwM.js";import"./createStyled-DEZqOrhE.js";import"./useThemeProps-ByihHSEs.js";import"./Stack-CRGQbSIw.js";import"./Typography-JvRod9_h.js";import"./Paper-CAMM_sGP.js";import"./useThemeProps-bXg8jihE.js";import"./Text-qBJvQAbh.js";import"./AdapterDayjs-BxMPdu73.js";import"./Modal-C2iMaJrT.js";import"./utils-CDZsqiOr.js";import"./TransitionGroupContext-CP4QTGTc.js";import"./index-Ct7m0A3p.js";import"./resolveComponentProps-D9ysefdV.js";import"./TextField-DU50OXKL.js";import"./useFormControl-BaHyTPGQ.js";import"./IconButton-CFe2D2CK.js";import"./ButtonBase-CG2-1ya1.js";import"./DialogContent-DminlgLj.js";import"./Button-ecopQR6Q.js";import"./Chip-b0N7Bs90.js";import"./DateTimePicker-DkGfB0lr.js";import"./Divider-Sgzys822.js";import"./Chip-B0KPLxd0.js";import"./Divider-CizCOsrH.js";import"./TreeView-Cx3DBEy0.js";import"./Close-B_FscGLy.js";import"./LinearProgress-D91QGpmj.js";import"./Spinner-CoTb4xM3.js";import"./Dialog-B0EJL6jv.js";import"./MapToggleButtonPresentational-BoxmLCzM.js";import"./Remove-BP8dJaea.js";import"./TextField-BiRVulas.js";import"./Switch-UYcRIQvQ.js";import"./DatePicker-Hg41mnHR.js";import"./LinkButton-B5iGNGjh.js";import"./Paper-Cg-Z_8b0.js";import"./ErrorFallback-b5W5Az-f.js";import"./ErrorFallbackText-C_HPDrVM.js";import"./ErrorFallbackWrapper-zYtUSZTF.js";import"./Brand-D_RHUJn0.js";import"./constants-DHZNsyg3.js";import"./Edit-B-6C9sjP.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
          body {
            overflow: auto !important;
          }
          #layer-selector-popover {
            pointer-events: none !important;
          }
        `}),o(n,{...e})]}),dt={title:"Component Library/Map/primitives/LayerSelectorPresentational",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
Renders a fake Presentational LayerSelector to help demonstrate how the default LayerSelector is assembled (used in FeatureMap)


<p>
  👉 Open 
  <a href="iframe.html?viewMode=docs&id=component-library-map-composites-featuremap--docs" target="_blank">
    FeatureMap story
  </a>
</p>

**NOTE** the PopOver story renders with position absolute, there is some hack styles to unlock the page when popover is visible.

• \`data\`: Array of { uri, image, label }  
• \`selectedIndex\` & \`anchorEl\`: control popover state  
• Handlers: \`onClickDropdown\`, \`onCloseDropdown\`, \`onListItemClick\`
`}}},argTypes:{data:{control:"object"},selectedIndex:{control:{type:"number",min:0,max:2}},anchorEl:{control:!1},onClickDropdown:{action:"dropdownClicked"},onCloseDropdown:{action:"dropdownClosed"},onListItemClick:{action:"itemClicked"}}},t={args:{data:s,selectedIndex:0,anchorEl:document.createElement("button")}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedIndex: 0,
    anchorEl: document.createElement("button")
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const ut=["Closed"];export{t as Closed,ut as __namedExportsOrder,dt as default};
