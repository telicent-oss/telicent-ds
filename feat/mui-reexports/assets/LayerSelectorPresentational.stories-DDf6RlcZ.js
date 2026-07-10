import{a as m,j as o}from"./iframe-COAWb0t1.js";import{w as p,x as n}from"./DropdownButton-Vpz5ANha.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-7ajEmXVT.js";import"./createSvgIcon-DrpJhUIt.js";import"./generateUtilityClass-Cu0h0UK6.js";import"./styled-BwRmoPFQ.js";import"./generateUtilityClasses-C5WQCcWA.js";import"./useTheme-CNaznUgl.js";import"./Box-DCFIHxCT.js";import"./Box-D8Tcr7GZ.js";import"./Container-r-acF5nk.js";import"./styled-BUAiwXGA.js";import"./createStyled-C7KAEifV.js";import"./useThemeProps-CqGuhErK.js";import"./Stack-ybP7OB7f.js";import"./Typography-rxz2-vrR.js";import"./Paper-mwKQc_Lr.js";import"./useThemeProps-BdnIs0e2.js";import"./Text-DFy_CB-X.js";import"./AdapterDayjs-Bhl9N9Cw.js";import"./Modal-DdTPb72x.js";import"./utils-DHa3ZdZl.js";import"./TransitionGroupContext-DLKhgV5R.js";import"./index-DvCbfciI.js";import"./resolveComponentProps-BLxc7nk0.js";import"./TextField-BvMOatl_.js";import"./useFormControl-DQ8tyOBm.js";import"./IconButton-CCcPFMgK.js";import"./ButtonBase-Djdar6tU.js";import"./DialogContent-D5gHw-su.js";import"./Button-DdObXY2o.js";import"./Chip-DZQXXGC9.js";import"./DateTimePicker-J4wSZb31.js";import"./Divider-CWXbwJhU.js";import"./Chip-CFRNYI56.js";import"./Divider-D-8UFSs5.js";import"./TreeView-DvKDilPN.js";import"./Close-CSu-E4xw.js";import"./LinearProgress-D6xAADWG.js";import"./Spinner-B1314fCC.js";import"./Dialog-D0Y5W3XX.js";import"./MapToggleButtonPresentational-zYeQBpIS.js";import"./Remove-CtS7gXV9.js";import"./TextField-CTYTdDqu.js";import"./Switch-C1EnJSQy.js";import"./DatePicker-Jx01V1aW.js";import"./LinkButton-B6YMfa2-.js";import"./Paper-Eeqwzp5S.js";import"./ErrorFallback-BY0PXNFd.js";import"./ErrorFallbackText-CR44PIbE.js";import"./ErrorFallbackWrapper-Cf9R1LA3.js";import"./Brand-Bh-wC9I-.js";import"./constants-DwIYQs1H.js";import"./Edit-IxgIwfJY.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
