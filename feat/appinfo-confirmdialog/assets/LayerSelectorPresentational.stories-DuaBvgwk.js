import{a as m,j as o}from"./iframe-BMuUneZj.js";import{v as p,w as n}from"./DropdownButton-GhplHAZP.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CQYMBk4-.js";import"./SvgIcon-RPSsRH1z.js";import"./generateUtilityClass-B9h8PBia.js";import"./styled-CVhYyncn.js";import"./generateUtilityClasses-DikdMsJY.js";import"./useTheme-DRDJjHMR.js";import"./Box-BJWVeEYX.js";import"./Box-CEEFXZo5.js";import"./Container-DlbpK-82.js";import"./styled-BNu8QFwr.js";import"./createStyled-Cb8Mr6dv.js";import"./useThemeProps-BNBknqIb.js";import"./FlexBox-Iozwjete.js";import"./Stack-TiSKoIHA.js";import"./Typography-w_4K0ja8.js";import"./Paper-E211ua9O.js";import"./useThemeProps-jBmUE9A9.js";import"./Text-B5-p14Rw.js";import"./AdapterDayjs-C8iCvla8.js";import"./Modal-Dy02jFWT.js";import"./utils-DfS-ADiV.js";import"./TransitionGroupContext-ejQez42S.js";import"./index-BbVjQDet.js";import"./resolveComponentProps-DLezU-r8.js";import"./Popover-CwdWMymH.js";import"./TextField-ECilJSMm.js";import"./useFormControl-EqKIaqm8.js";import"./createSvgIcon-BUAAkB8u.js";import"./IconButton-DlBfucp_.js";import"./ButtonBase-gJKL7X4c.js";import"./DialogContent-TC9gFBw7.js";import"./Button-8Li-cdwq.js";import"./Chip-7qvU_oAO.js";import"./DateTimePicker-DgHDar69.js";import"./Divider-DXhn6Ub8.js";import"./AppInfoRow-BgLW4R_q.js";import"./Chip-DLoVMQVm.js";import"./Divider-C2Xz7yk2.js";import"./TreeView-_qpTu6pI.js";import"./Alert-W7WaUGLz.js";import"./LinearProgress-DDNrYsWW.js";import"./Spinner-DUipJNcV.js";import"./Dialog-D0_pFUs6.js";import"./MapToggleButtonPresentational-CBnLn7Jp.js";import"./Remove-BQ2StRYG.js";import"./LinkButton-Bltx9Shr.js";import"./TextField-DK61R-xZ.js";import"./Switch-CSAD1dRX.js";import"./DatePicker-Cz_5sUCg.js";import"./Paper-DIhajTdq.js";import"./ErrorFallback-DQNkUk93.js";import"./ErrorFallbackText-C3uTVheG.js";import"./ErrorFallbackWrapper-C9Cmqijf.js";import"./Brand-RZcZ8N1N.js";import"./constants-DWdepPUO.js";import"./Edit-DeviR2d5.js";const s=[{uri:"u1",image:"https://dummyimage.com/25x20&text=1",label:"First"},{uri:"u2",image:"https://dummyimage.com/25x20&text=2",label:"Second"},{uri:"u3",image:"https://dummyimage.com/25x20&text=3",label:"Third"}],l=e=>m("div",{children:[o(p,{variant:"secondary",...e}),o("style",{children:`
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
