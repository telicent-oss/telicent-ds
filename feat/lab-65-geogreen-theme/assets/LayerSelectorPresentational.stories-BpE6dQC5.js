import{a as m,j as o}from"./iframe-CAVshkuv.js";import{w as p,x as n}from"./DropdownButton-9w3rAX6T.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DJgOmEVN.js";import"./createSvgIcon-B3EaAiNw.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./useTheme-ATZows8q.js";import"./Box-DLtVExO8.js";import"./Box-C4yeY-00.js";import"./Container-COrfX9qv.js";import"./styled-DmB_YMuy.js";import"./createStyled-BEuIMvDB.js";import"./useThemeProps-C0hUlt40.js";import"./Stack-aumhO8Vb.js";import"./Typography-B1Np1v7N.js";import"./Paper-BY4MSiKk.js";import"./useThemeProps-KzD3lSay.js";import"./Text-zn7-gcNn.js";import"./AdapterDayjs-DLp8STlk.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./Divider-BzwQ7r6O.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./Close-ZjhlHLtp.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./MapToggleButtonPresentational-Dh_eY9kA.js";import"./Remove-CPj-DoGK.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./LinkButton-UDbAGZRZ.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import"./constants-Bdme3Adm.js";import"./Edit-BJwA-2_m.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
