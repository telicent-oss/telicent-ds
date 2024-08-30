import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{F as m,n as y,o as g,l as v}from"./index-B4cTrqDe.js";import{T as b}from"./TeliBasicMenu-C_iPr2Cz.js";import{T as h}from"./TeliSwitch-Wjzt79nh.js";import{c as x}from"./index-Bl6ORisp.js";import{T}from"./TeliButton-DFvygePR.js";import"./ClockRotateLeft-3SSXHRN4.js";import{T as j}from"./TeliAddIcon-CbeuQDxp.js";import"./TeliCloseIcon-D7gePLQp.js";import"./TeliDeleteIcon-CbwVSRBK.js";import"./TeliEditIcon-CyB5r8OF.js";import"./TeliSearchIcon-D3S6z6_Z.js";import"./TeliSortIcons-riFk7gK9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./MenuList-BaiCNsbG.js";import"./extends-CCbyfPlC.js";import"./createTheme-CnHyYZiq.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-UxOPvILp.js";import"./List-Vl0e-Exg.js";import"./generateUtilityClasses-BGohe2Km.js";import"./MenuItem-BhcFgbA2.js";import"./ButtonBase-Er_LceZN.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./dividerClasses-Ce5UXV-K.js";/* empty css                      */import"./Popper-CBif7sJe.js";import"./Grow-CFEed8lE.js";import"./index-B8XB3FuZ.js";import"./useTheme-DGd8psJl.js";import"./utils-DOhIVSbh.js";import"./Paper-Bt1avxBe.js";import"./FormControlLabel-CJWVnRLB.js";import"./useFormControl-DPp5-Ez4.js";import"./useControlled-DpTMnm0X.js";import"./Typography-CJaAKyn9.js";import"./Stack-CQt_0ICX.js";import"./styled-DIAKr2Jf.js";import"./index-Ce_nUbHw.js";import"./index-D8zF22Iw.js";import"./useId-bIDWZ5VS.js";import"./Icon-CDQWMwPF.js";const e=({position:t="bottom-start",defaultControls:i=!0,vertical:a,variant:s="tertiary",onZoomIn:l,onZoomOut:n,children:r})=>{const p=s==="tertiary",c=t.startsWith("bottom")&&!a?"top":t.startsWith("bottom")&&a?"left":"bottom",d=p?"basic":"tertiary",f=()=>o.jsxs(o.Fragment,{children:[o.jsx(T,{"aria-label":"zoom in",tooltip:"Zoom in",tooltipPlacement:c,variant:d,onClick:l,children:o.jsx(j,{})}),o.jsx(T,{"aria-label":"zoom out",tooltip:"Zoom out",tooltipPlacement:c,variant:d,onClick:n,children:o.jsx(m,{icon:y})})]});return o.jsxs("ul",{className:x("toolbar",{"toolbar--vertical":a,"toolbar--tertiary":p,"toolbar--bottom-start":t==="bottom-start","toolbar--bottom-end":t==="bottom-end","toolbar--top-start":t==="top-start","toolbar--top-end":t==="top-end"}),children:[i&&o.jsx(f,{}),r]})};try{e.displayName="TeliToolbar",e.__docgenInfo={description:"",displayName:"TeliToolbar",props:{defaultControls:{defaultValue:{value:"true"},description:"",name:"defaultControls",required:!1,type:{name:"boolean"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"bottom-start"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},variant:{defaultValue:{value:"tertiary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tertiary"'},{value:'"basic"'}]}},onZoomIn:{defaultValue:null,description:"",name:"onZoomIn",required:!1,type:{name:"(() => void)"}},onZoomOut:{defaultValue:null,description:"",name:"onZoomOut",required:!1,type:{name:"(() => void)"}}}}}catch{}const w=()=>{const[t,i]=u.useState(!0),[a,s]=u.useState(!1),l=()=>{i(r=>!r)},n=()=>{s(r=>!r)};return o.jsxs(e,{children:[o.jsx(b,{label:o.jsx(m,{icon:g}),tooltip:"Map styles",variant:"basic",yPlacement:"top",menuItems:[{id:"Dark",label:"Dark"},{id:"Satellite",label:"Satellite"}]}),o.jsx(b,{label:o.jsx(m,{icon:v}),tooltip:"Map layers",variant:"basic",yPlacement:"top",menuItems:[{id:"Tools",label:o.jsx(h,{id:"flood-stations-toggle-switch",label:"Flood stations",labelPlacement:"start",edge:"end",size:"small",checked:a,onChange:n})},{id:"Heatmap",label:o.jsx(h,{id:"heatmap-toggle-switch",label:"Heatmap",labelPlacement:"start",edge:"end",size:"small",checked:t,onChange:l})}]})]})},H={render:()=>o.jsx(w,{}),parameters:{docs:{description:{story:"Similar actions can be grouped together to reduce visual clutter."},source:{code:`
<TeliToolbar>
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faMap} />}
    tooltip="Map styles"
    variant="basic"
    yPlacement="top"
    menuItems={[
      { id: "Dark", children: "Dark" },
      { id: "Satellite", children: "Satellite" },
    ]}
  />
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faLayerGroup} />}
    tooltip="Map layers"
    variant="basic"
    yPlacement="top"
    menuItems={[
      {
        id: "Tools",
        children: (
          <TeliSwitch
            id="flood-areas-toggle-switch"
            label="Flood areas"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
      {
        id: "Heatmap",
        children: (
          <TeliSwitch
            id="heatmap-toggle-switch"
            label="Heatmap"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
    ]}
  />
</TeliToolbar>
      `}}}},So=H,S={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{}),o.jsx(e,{vertical:!0,position:"bottom-end"})]}),parameters:{docs:{description:{story:`
By default toolbar items are arranged horizontally, to arrange the items vertically 
use the <code>vertical</code> prop.
        `},source:{code:`
<TeliToolbar />
<TeliToolbar vertical position="bottom-end" />
      `}}}},Ao=S,A={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{position:"top-start"}),o.jsx(e,{position:"top-end"}),o.jsx(e,{position:"bottom-start"}),o.jsx(e,{position:"bottom-end"})]}),parameters:{docs:{description:{story:`
You can position the toolbar by using the <code>position</code> prop
        `},source:{code:`
<TeliToolbar position="top-start" />
<TeliToolbar position="top-end" />
<TeliToolbar position="bottom-start" />
<TeliToolbar position="bottom-end" />
      `}}}},Po=A,Fo={component:e,parameters:{docs:{description:{component:`The toolbar component should consist of commands or actions 
        that are frequently used by novice and expert users. The toolbar components comes 
        with default controls for visualisations which can be disabled by using 
        <code>defaultControls</code> prop`}}},decorators:[t=>o.jsx("div",{style:{position:"relative",height:"8em"},children:o.jsx(t,{})})]},Io=["HorizontalAndVerticalToolbars","PositionedToolbars","GroupedActions"];export{So as GroupedActions,Ao as HorizontalAndVerticalToolbars,Po as PositionedToolbars,Io as __namedExportsOrder,Fo as default};
