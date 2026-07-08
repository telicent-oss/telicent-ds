import{a as m,j as o}from"./iframe-ekgyvAI9.js";import{w as p,x as n}from"./DropdownButton-iOB7tFo3.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-6Ji74agl.js";import"./createSvgIcon-Cz2FQkUF.js";import"./styled-Q5upQxit.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./useTheme-C5GDcVVQ.js";import"./Container-CmEFyrQ9.js";import"./styled-BpMn-R5t.js";import"./createStyled-FZZaYGHg.js";import"./useThemeProps-DphVTmkb.js";import"./Stack-Cg7aALjV.js";import"./Box-Bgfu1TlP.js";import"./Typography-C64aAkxC.js";import"./Paper-BydBWlqJ.js";import"./useThemeProps-Bvz7h4cQ.js";import"./Text-C-7vsUm_.js";import"./AdapterDayjs-NJf71x8s.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./DateTimePicker-BUG89NrY.js";import"./Divider-B---moVq.js";import"./Chip-CNM9xVJ3.js";import"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./MapToggleButtonPresentational-Bh86kc4C.js";import"./Remove-BKfh7hYJ.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./LinkButton-BUP5FRO7.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import"./constants-4ukM-jXN.js";import"./Edit-BIOwsPnM.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
