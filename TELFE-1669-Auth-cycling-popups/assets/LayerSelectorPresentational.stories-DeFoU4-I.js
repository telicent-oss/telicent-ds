import{a as m,j as o}from"./iframe-CdPu0Nji.js";import{w as p,x as n}from"./DropdownButton-DLh5IwXH.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-zZuyRK2V.js";import"./createSvgIcon-BsGzgqT2.js";import"./generateUtilityClass-BkGLkL42.js";import"./styled-DvAHf-ii.js";import"./generateUtilityClasses-1MNiGsyU.js";import"./useTheme-CpTvU32l.js";import"./Box--WBeT2uu.js";import"./Box-DT8xOrnE.js";import"./Container-A4vphWw1.js";import"./styled-CmJFQDl3.js";import"./createStyled-CdQc-wzQ.js";import"./useThemeProps-C31Hu9eR.js";import"./Stack-DaLGDZVV.js";import"./Typography-jEpu3_H5.js";import"./Paper-Dd_SbCQz.js";import"./useThemeProps-_uNjXpz2.js";import"./Text-B4VJCCMs.js";import"./AdapterDayjs--a3WegzB.js";import"./Modal-H2NuyrfR.js";import"./utils-CZMvQYd-.js";import"./TransitionGroupContext-p-MdgXa8.js";import"./index-CjSg-LrS.js";import"./resolveComponentProps-BTqXFKqs.js";import"./TextField-0yYRCi_S.js";import"./useFormControl-DILhRqjH.js";import"./IconButton-UIxH2BuM.js";import"./ButtonBase-CwLYgF7v.js";import"./DialogContent-B145AqQj.js";import"./Button-CYBCMGv1.js";import"./Chip-DsSTZC0S.js";import"./DateTimePicker-Buv1kwF8.js";import"./Divider-BvdIoCl6.js";import"./Chip-qDUxoCCM.js";import"./Divider-CQaGt93_.js";import"./TreeView-DRYBS-Xt.js";import"./Close-EDI9r0DC.js";import"./LinearProgress-Dz1fhiUi.js";import"./Spinner-CTU6TpBn.js";import"./Dialog-DJtg1d2n.js";import"./MapToggleButtonPresentational-Ca86nxH9.js";import"./Remove-CVv2NlLk.js";import"./TextField-CrDyAMED.js";import"./Switch-D6FP3j0O.js";import"./DatePicker-1LYmoJIP.js";import"./LinkButton-DdkrapHh.js";import"./Paper-yLhdaCIP.js";import"./ErrorFallback-De_3OhnE.js";import"./ErrorFallbackText-CIVzvqun.js";import"./ErrorFallbackWrapper-BCfSQJea.js";import"./Brand-BhO6VgG7.js";import"./constants-8XY3AVHe.js";import"./Edit-CU0UvQ5m.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
