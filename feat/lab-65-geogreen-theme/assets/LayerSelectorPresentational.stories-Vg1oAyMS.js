import{a as m,j as o}from"./iframe-IZoSKsE3.js";import{w as p,x as n}from"./DropdownButton-B5TP08KZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-RuE3VV1c.js";import"./createSvgIcon-D0jCcW4R.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./generateUtilityClasses-COTvziYz.js";import"./useTheme-CsPhboDS.js";import"./Box-uH6Ohr9R.js";import"./Box-DfvW-z9e.js";import"./Container-DG8DPGND.js";import"./styled-xThT8ge4.js";import"./createStyled-AIvOzxUM.js";import"./useThemeProps-Fa_ce5Ni.js";import"./Stack-9NxgANXW.js";import"./Typography-CQLnp7AW.js";import"./Paper-ClTtkpZ4.js";import"./useThemeProps-DTUKyBXe.js";import"./Text-Kj3CiPWT.js";import"./AdapterDayjs-X4Nz8chh.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./DateTimePicker-Cp3vG90e.js";import"./Divider-BYw826Ky.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./Close-Bkeo-_v7.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./MapToggleButtonPresentational-BDY0ODha.js";import"./Remove-CPvZ5wnT.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./LinkButton-DuZk3qqS.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import"./constants-CIQOnJ5P.js";import"./Edit-CK78KsNY.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
