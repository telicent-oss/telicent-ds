import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{F as m,n as g,o as y,l as x}from"./index-EaYoR7Ht.js";import{T as b}from"./TeliBasicMenu-_Ihy2MUp.js";import{T as h}from"./TeliSwitch-B5G340LP.js";import{c as v}from"./index-CSpfAsmC.js";import{T}from"./TeliButton-DBBf574w.js";import"./ClockRotateLeft-BjWmZ_24.js";import{T as j}from"./TeliAddIcon-CbwSfORU.js";import"./TeliCloseIcon-JFcrqpdS.js";import"./TeliDeleteIcon-ggWi4uOu.js";import"./TeliEditIcon-BvDMgwnY.js";import"./TeliSearchIcon-BX-OU3i7.js";import"./TeliSortIcons-BiII0Lui.js";import"./index-CXPIPAcP.js";import"./MenuList-BbY1aGr7.js";import"./extends-BFqQA52f.js";import"./createTheme-BI2OWDpv.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-rM2yqL0Y.js";import"./List-C23U3F2W.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./MenuItem-CMhrTc-x.js";import"./ButtonBase-DxHKNkXA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./dividerClasses-D1EpZA7g.js";/* empty css                      */import"./Popper-Cg5SJw39.js";import"./Grow-Dt6YTbxq.js";import"./index-BVEwUaSm.js";import"./useTheme-CmkBszCQ.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./utils-IhZQnaQC.js";import"./useSlotProps-DmXLjd2q.js";import"./resolveComponentProps-iAOpfAUw.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DEGHyXeH.js";import"./FormControlLabel-CExt9vJ5.js";import"./useFormControl-CHYNG1zi.js";import"./useControlled-im5M3O13.js";import"./Typography-DE0lXvn2.js";import"./Stack-8PiQyM1k.js";import"./styled-B7SqznG2.js";import"./useThemeProps-Cz3Ol-ZY.js";import"./index-BjJ5k6rE.js";import"./useId-DLncWxdO.js";import"./Icon-Btk4_Z4H.js";const e=({position:o="bottom-start",defaultControls:i=!0,vertical:a,variant:s="tertiary",onZoomIn:l,onZoomOut:n,children:r})=>{const p=s==="tertiary",c=o.startsWith("bottom")&&!a?"top":o.startsWith("bottom")&&a?"left":"bottom",d=p?"basic":"tertiary",f=()=>t.jsxs(t.Fragment,{children:[t.jsx(T,{"aria-label":"zoom in",tooltip:"Zoom in",tooltipPlacement:c,variant:d,onClick:l,children:t.jsx(j,{})}),t.jsx(T,{"aria-label":"zoom out",tooltip:"Zoom out",tooltipPlacement:c,variant:d,onClick:n,children:t.jsx(m,{icon:g})})]});return t.jsxs("ul",{className:v("toolbar",{"toolbar--vertical":a,"toolbar--tertiary":p,"toolbar--bottom-start":o==="bottom-start","toolbar--bottom-end":o==="bottom-end","toolbar--top-start":o==="top-start","toolbar--top-end":o==="top-end"}),children:[i&&t.jsx(f,{}),r]})};e.__docgenInfo={description:"",methods:[],displayName:"TeliToolbar",props:{defaultControls:{required:!1,tsType:{name:"boolean"},description:"@default true",defaultValue:{value:"true",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"@default false"},position:{required:!1,tsType:{name:"union",raw:'"bottom-start" | "bottom-end" | "top-start" | "top-end"',elements:[{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"top-start"'},{name:"literal",value:'"top-end"'}]},description:"",defaultValue:{value:'"bottom-start"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"tertiary" | "basic"',elements:[{name:"literal",value:'"tertiary"'},{name:"literal",value:'"basic"'}]},description:"",defaultValue:{value:'"tertiary"',computed:!1}},onZoomIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onZoomOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const w=()=>{const[o,i]=u.useState(!0),[a,s]=u.useState(!1),l=()=>{i(r=>!r)},n=()=>{s(r=>!r)};return t.jsxs(e,{children:[t.jsx(b,{label:t.jsx(m,{icon:y}),tooltip:"Map styles",variant:"basic",yPlacement:"top",menuItems:[{id:"Dark",label:"Dark"},{id:"Satellite",label:"Satellite"}]}),t.jsx(b,{label:t.jsx(m,{icon:x}),tooltip:"Map layers",variant:"basic",yPlacement:"top",menuItems:[{id:"Tools",label:t.jsx(h,{id:"flood-stations-toggle-switch",label:"Flood stations",labelPlacement:"start",edge:"end",size:"small",checked:a,onChange:n})},{id:"Heatmap",label:t.jsx(h,{id:"heatmap-toggle-switch",label:"Heatmap",labelPlacement:"start",edge:"end",size:"small",checked:o,onChange:l})}]})]})},H={render:()=>t.jsx(w,{}),parameters:{docs:{description:{story:"Similar actions can be grouped together to reduce visual clutter."},source:{code:`
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
      `}}}},Pt=H,S={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(e,{vertical:!0,position:"bottom-end"})]}),parameters:{docs:{description:{story:`
By default toolbar items are arranged horizontally, to arrange the items vertically 
use the <code>vertical</code> prop.
        `},source:{code:`
<TeliToolbar />
<TeliToolbar vertical position="bottom-end" />
      `}}}},Ft=S,A={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{position:"top-start"}),t.jsx(e,{position:"top-end"}),t.jsx(e,{position:"bottom-start"}),t.jsx(e,{position:"bottom-end"})]}),parameters:{docs:{description:{story:`
You can position the toolbar by using the <code>position</code> prop
        `},source:{code:`
<TeliToolbar position="top-start" />
<TeliToolbar position="top-end" />
<TeliToolbar position="bottom-start" />
<TeliToolbar position="bottom-end" />
      `}}}},Mt=A,kt={component:e,parameters:{docs:{description:{component:`The toolbar component should consist of commands or actions 
        that are frequently used by novice and expert users. The toolbar components comes 
        with default controls for visualisations which can be disabled by using 
        <code>defaultControls</code> prop`}}},decorators:[o=>t.jsx("div",{style:{position:"relative",height:"8em"},children:t.jsx(o,{})})]},It=["HorizontalAndVerticalToolbars","PositionedToolbars","GroupedActions"];export{Pt as GroupedActions,Ft as HorizontalAndVerticalToolbars,Mt as PositionedToolbars,It as __namedExportsOrder,kt as default};
