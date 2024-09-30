import{a as i,j as t,F as m}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{r as h}from"./index-BP8_t0zE.js";import{F as n,n as v,o as w,l as H}from"./index-EaYoR7Ht.js";import{T}from"./TeliBasicMenu-B8FwaRZh.js";import{T as f}from"./TeliSwitch-DRLNo-ou.js";import{c as S}from"./index-CSpfAsmC.js";import{T as g}from"./TeliButton-DMV69Ca-.js";import"./ClockRotateLeft-4x8CH0v-.js";import{T as A}from"./TeliAddIcon-ZQkbF6ay.js";import"./TeliCloseIcon-DGO5iUA8.js";import"./TeliDeleteIcon-lxFU83CB.js";import"./TeliEditIcon-DLqRa-97.js";import"./TeliSearchIcon-RHfkGMQw.js";import"./TeliSortIcons-BvUzhX95.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-CXPIPAcP.js";import"./MenuItem-_24OEzRD.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./List-B7wd7IsG.js";import"./generateUtilityClasses-DWDXFugI.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./dividerClasses-BuwNPLrC.js";import"./MenuList-DhXqMNVQ.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";/* empty css                      */import"./Grow-Bg0f54T-.js";import"./index-BVEwUaSm.js";import"./useTheme-Cxnl1_9N.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./utils-By8aWBlh.js";import"./Paper-P7C7xbRI.js";import"./Popper-BesQJJaZ.js";import"./useSlotProps-C0aSIFYh.js";import"./resolveComponentProps-CRsKqwAv.js";import"./isHostComponent-DVu5iVWx.js";import"./FormControlLabel-qjkC92A4.js";import"./useFormControl-CHYNG1zi.js";import"./useControlled-im5M3O13.js";import"./Typography-BcJWBAIA.js";import"./Stack-DIIGiS4P.js";import"./styled-L_KyKXnN.js";import"./useThemeProps-BFAJHbV7.js";import"./index-BpIClzG7.js";import"./useId-DLncWxdO.js";import"./Icon-Bbei6cwb.js";const e=({position:o="bottom-start",defaultControls:s=!0,vertical:a,variant:l="tertiary",onZoomIn:p,onZoomOut:c,children:r})=>{const d=l==="tertiary",u=o.startsWith("bottom")&&!a?"top":o.startsWith("bottom")&&a?"left":"bottom",b=d?"basic":"tertiary",y=()=>i(m,{children:[t(g,{"aria-label":"zoom in",tooltip:"Zoom in",tooltipPlacement:u,variant:b,onClick:p,children:t(A,{})}),t(g,{"aria-label":"zoom out",tooltip:"Zoom out",tooltipPlacement:u,variant:b,onClick:c,children:t(n,{icon:v})})]});return i("ul",{className:S("toolbar",{"toolbar--vertical":a,"toolbar--tertiary":d,"toolbar--bottom-start":o==="bottom-start","toolbar--bottom-end":o==="bottom-end","toolbar--top-start":o==="top-start","toolbar--top-end":o==="top-end"}),children:[s&&t(y,{}),r]})};e.__docgenInfo={description:"",methods:[],displayName:"TeliToolbar",props:{defaultControls:{required:!1,tsType:{name:"boolean"},description:"@default true",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"@default false"},position:{required:!1,tsType:{name:"union",raw:'"bottom-start" | "bottom-end" | "top-start" | "top-end"',elements:[{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"top-start"'},{name:"literal",value:'"top-end"'}]},description:"",defaultValue:{value:'"bottom-start"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"tertiary" | "basic"',elements:[{name:"literal",value:'"tertiary"'},{name:"literal",value:'"basic"'}]},description:"",defaultValue:{value:'"tertiary"',computed:!1}},onZoomIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onZoomOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const P=()=>{const[o,s]=h.useState(!0),[a,l]=h.useState(!1);return i(e,{children:[t(T,{label:t(n,{icon:w}),tooltip:"Map styles",variant:"basic",yPlacement:"top",menuItems:[{id:"Dark",label:"Dark"},{id:"Satellite",label:"Satellite"}]}),t(T,{label:t(n,{icon:H}),tooltip:"Map layers",variant:"basic",yPlacement:"top",menuItems:[{id:"Tools",label:t(f,{id:"flood-stations-toggle-switch",label:"Flood stations",labelPlacement:"start",edge:"end",size:"small",checked:a,onChange:()=>{l(r=>!r)}})},{id:"Heatmap",label:t(f,{id:"heatmap-toggle-switch",label:"Heatmap",labelPlacement:"start",edge:"end",size:"small",checked:o,onChange:()=>{s(r=>!r)}})}]})]})},F={render:()=>t(P,{}),parameters:{docs:{description:{story:"Similar actions can be grouped together to reduce visual clutter."},source:{code:`
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
      `}}}},zt=F,M={render:()=>i(m,{children:[t(e,{}),t(e,{vertical:!0,position:"bottom-end"})]}),parameters:{docs:{description:{story:`
By default toolbar items are arranged horizontally, to arrange the items vertically 
use the <code>vertical</code> prop.
        `},source:{code:`
<TeliToolbar />
<TeliToolbar vertical position="bottom-end" />
      `}}}},Ct=M,k={render:()=>i(m,{children:[t(e,{position:"top-start"}),t(e,{position:"top-end"}),t(e,{position:"bottom-start"}),t(e,{position:"bottom-end"})]}),parameters:{docs:{description:{story:`
You can position the toolbar by using the <code>position</code> prop
        `},source:{code:`
<TeliToolbar position="top-start" />
<TeliToolbar position="top-end" />
<TeliToolbar position="bottom-start" />
<TeliToolbar position="bottom-end" />
      `}}}},qt=k,Vt={component:e,parameters:{docs:{description:{component:`The toolbar component should consist of commands or actions 
        that are frequently used by novice and expert users. The toolbar components comes 
        with default controls for visualisations which can be disabled by using 
        <code>defaultControls</code> prop`}}},decorators:[o=>t("div",{style:{position:"relative",height:"8em"},children:t(o,{})})]},xt=["HorizontalAndVerticalToolbars","PositionedToolbars","GroupedActions"];export{zt as GroupedActions,Ct as HorizontalAndVerticalToolbars,qt as PositionedToolbars,xt as __namedExportsOrder,Vt as default};
