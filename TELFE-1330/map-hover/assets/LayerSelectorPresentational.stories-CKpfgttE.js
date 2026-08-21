import{a as m,j as o}from"./iframe-C9OzQXg_.js";import{v as p,w as n}from"./DropdownButton-C4xttH7Y.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B0X7YR88.js";import"./SvgIcon-B9jV-vVV.js";import"./generateUtilityClass-nmhkov4J.js";import"./styled-B4qHs92x.js";import"./generateUtilityClasses-B-IRdbhl.js";import"./useTheme-BoFB3y9E.js";import"./Box-DVA2EOpM.js";import"./Box-B6_welVH.js";import"./Container-Dd_avWFZ.js";import"./styled-tQz00g93.js";import"./createStyled-aUbpq_KF.js";import"./useThemeProps-C59Agyjh.js";import"./FlexBox-BhSKdKN3.js";import"./Stack-CVFIDsG6.js";import"./Typography-R7t904JM.js";import"./Paper-K-rVIpDQ.js";import"./useThemeProps-D6gL08vt.js";import"./Text-DJBgtXcr.js";import"./AdapterDayjs-zE6fXVsl.js";import"./Modal-DeCTlAE4.js";import"./utils-5nTvwYBN.js";import"./TransitionGroupContext-B0kHEjtr.js";import"./index-aDITQ5Y9.js";import"./resolveComponentProps-DLoKn3XJ.js";import"./Popover-oHEbtlOD.js";import"./TextField-C2OAhByY.js";import"./useFormControl-DULJhOwb.js";import"./createSvgIcon-CNR6JU_j.js";import"./IconButton-D27QAIgA.js";import"./ButtonBase-D7zqtzaV.js";import"./DialogContent-Bqyrw-Dw.js";import"./Button-C_IckAB6.js";import"./Chip-2NNPtnVz.js";import"./DateTimePicker-CsFwsMPz.js";import"./Divider-o04g-Szi.js";import"./AppInfoRow-zLITu-6A.js";import"./Chip-By1rLTon.js";import"./Divider-DaR7zBo2.js";import"./TreeView-CXCZxfYx.js";import"./Alert-BFVxOiq7.js";import"./LinearProgress-DX9Q_02A.js";import"./Spinner-DtzXi4x2.js";import"./Dialog-D61FGst9.js";import"./MapToggleButtonPresentational-C417ZVG5.js";import"./Remove-DBRMIEBC.js";import"./LinkButton-BDmrpSVS.js";import"./TextField-DfFTX4IJ.js";import"./Switch-CFkCea9A.js";import"./DatePicker-PqR1hban.js";import"./Paper-BC8jjBQR.js";import"./ErrorFallback-4ND5IQwj.js";import"./ErrorFallbackText-DxDVeSdA.js";import"./ErrorFallbackWrapper-BnyZ3rrn.js";import"./Brand-CobJZEjG.js";import"./constants-BRNzpaAh.js";import"./Edit-DhYGh0Lv.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
          body {
            overflow: auto !important;
          }
          #layer-selector-popover {
            pointer-events: none !important;
          }
        `}),o(n,{...e})]}),bt={title:"Component Library/Map/primitives/LayerSelectorPresentational",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const xt=["Closed"];export{t as Closed,xt as __namedExportsOrder,bt as default};
