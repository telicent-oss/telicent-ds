import{a as m,j as o}from"./iframe-CYKKeyXc.js";import{w as p,x as n}from"./DropdownButton-DXvUw18o.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BEDwv6nP.js";import"./createSvgIcon-BCA_qiKo.js";import"./styled-DYVy4BQZ.js";import"./generateUtilityClasses-BddLF0YE.js";import"./useTheme-Clo7ftRJ.js";import"./Container-B4YkWBlj.js";import"./styled-C485N8nh.js";import"./createStyled-BrwGJ6p7.js";import"./useThemeProps-CSMSYrHE.js";import"./Stack-BjITiBsD.js";import"./Box-B5Idbuu2.js";import"./Typography-BqCL54fa.js";import"./Paper-mUQjj_jn.js";import"./useThemeProps-nKkQeJ84.js";import"./Text-Bt17FoZM.js";import"./AdapterDayjs-LnHs1126.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Button-BK6a-J9_.js";import"./Chip-BigX0SwN.js";import"./DateTimePicker-CUaoXgcA.js";import"./Divider-CZT4G2av.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./TreeView-CioP4QeT.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./MapToggleButtonPresentational-L_xNR8KH.js";import"./Remove-B42JroOj.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./LinkButton-BI7eyHxU.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import"./constants-C9fBqqHE.js";import"./Edit-BwdZQDqg.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
          body {
            overflow: auto !important;
          }
          #layer-selector-popover {
            pointer-events: none !important;
          }
        `}),o(n,{...e})]}),nt={title:"Component Library/Map/primitives/LayerSelectorPresentational",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const st=["Closed"];export{t as Closed,st as __namedExportsOrder,nt as default};
