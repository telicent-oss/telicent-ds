import{a as m,j as o}from"./iframe-DiOxHtDb.js";import{w as p,x as n}from"./DropdownButton-D5H4ZN6Z.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DdMLfs8b.js";import"./createSvgIcon-Bct_3USy.js";import"./generateUtilityClass-BGBNebZi.js";import"./styled-BnW9PuXP.js";import"./generateUtilityClasses-cqFKly7s.js";import"./useTheme-CVqTLjnG.js";import"./Box-BgHTu-7g.js";import"./Box-Bw2aXqxB.js";import"./Container-KdOlOXUt.js";import"./styled-CBtLOs7W.js";import"./createStyled-DJUAM10Y.js";import"./useThemeProps-D92Ph84F.js";import"./Stack-DMVCg2VL.js";import"./Typography-DD85r3aG.js";import"./Paper-DD8Uzrbd.js";import"./useThemeProps-D5iojeUJ.js";import"./Text-lve70lr8.js";import"./AdapterDayjs-Bw8jeCZr.js";import"./Modal-D1jGZMpX.js";import"./utils-Cpn5Nc-9.js";import"./TransitionGroupContext-B0zfRRgr.js";import"./index-DV6lSy4S.js";import"./resolveComponentProps-DdsoJ6q3.js";import"./TextField-DJduElX5.js";import"./useFormControl-gW4Kn0M5.js";import"./IconButton-BBPQ8wpR.js";import"./ButtonBase-Bf3wJpyF.js";import"./DialogContent-WZ5vlnc6.js";import"./Button-CBCE0jtS.js";import"./Chip-DxnlP6yz.js";import"./DateTimePicker-E72uzE7D.js";import"./Divider-BAZX2ZXo.js";import"./Chip-ueCpo9tP.js";import"./Divider-BRU7MloR.js";import"./TreeView-BEBQjpEx.js";import"./Close-DyblsOO8.js";import"./LinearProgress-Ca-5RCUI.js";import"./Spinner-DBD_1EOk.js";import"./Dialog-CV47DXVk.js";import"./MapToggleButtonPresentational-CY2HZx6p.js";import"./Remove-BolgW9Tm.js";import"./TextField-CODSynKi.js";import"./Switch-BaPgqioG.js";import"./DatePicker-DvcNDPm0.js";import"./LinkButton-AP67oc2f.js";import"./Paper-CNPN9Zh5.js";import"./ErrorFallback-BmSWrFlV.js";import"./ErrorFallbackText-DVOaDD_c.js";import"./ErrorFallbackWrapper-BCV9v7sN.js";import"./Brand-ClGGejsO.js";import"./constants-BXamS6jK.js";import"./Edit-DgM3068Z.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
