import{T as e}from"./TeliButton-DMV69Ca-.js";import{a as o,j as t}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{F as n,c as r,u as m}from"./index-EaYoR7Ht.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./ButtonBase-zNROK4sl.js";import"./extends-BFqQA52f.js";import"./createTheme-CNnsHS-w.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./generateUtilityClasses-DWDXFugI.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./index-BpIClzG7.js";import"./Popper-BesQJJaZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bg0f54T-.js";import"./index-BVEwUaSm.js";import"./useTheme-Cxnl1_9N.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./utils-By8aWBlh.js";import"./useSlotProps-C0aSIFYh.js";import"./resolveComponentProps-CRsKqwAv.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./index-CXPIPAcP.js";const u={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"primary",startIcon:t(n,{icon:r}),children:"Delete"}),t(e,{variant:"secondary",endIcon:t(n,{icon:m}),children:"Send"})]}),parameters:{docs:{description:{story:`
Sometimes you might want to have icons for certain buttons to enhance the UX
of the application as we recognize logos more easily than plain text.
For example, if you have a delete button you can label it with a dustbin icon.
      `},source:{code:`
<TeliButton
  variant="primary"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
>
  Delete
</TeliButton>
<TeliButton
  variant="secondary"
  endIcon={<FontAwesomeIcon icon={faSend} />}
>
  Send
</TeliButton>
      `}}}},tt=u,h={render:()=>o("div",{className:"flex items-center gap-x-4",children:[t("div",{children:t(e,{variant:"primary",startIcon:t(n,{icon:r}),size:"small",children:"Delete"})}),t("div",{children:t(e,{variant:"primary",color:"danger",startIcon:t(n,{icon:r}),size:"medium",children:"Delete"})}),t("div",{children:t(e,{variant:"secondary",startIcon:t(n,{icon:r}),size:"large",children:"Delete"})})]}),parameters:{docs:{description:{story:"For larger or smaller icon buttons, use the size prop to set the size."},source:{code:`
<TeliButton
variant="primary"
startIcon={<FontAwesomeIcon icon={faTrash} />}
size="small"
>
  Delete
</TeliButton>
<TeliButton
  variant="primary"
  color="danger"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
  size="medium"
>
  Delete
</TeliButton>
<TeliButton
  variant="secondary"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
  size="large"
>
  Delete
</TeliButton>
      `}}}},et=h,T={render:()=>o("div",{className:"flex gap-4",children:[t(e,{"aria-label":"delete",variant:"primary",children:t(n,{icon:r})}),t(e,{"aria-label":"delete",variant:"secondary",children:t(n,{icon:r})}),t(e,{"aria-label":"delete",variant:"tertiary",children:t(n,{icon:r})}),t(e,{"aria-label":"send",variant:"basic",children:t(n,{icon:m})})]}),parameters:{docs:{description:{story:`
Icon buttons are commonly found in app bars and toolbars. Icons are also
appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.
        `},source:{code:`
<TeliButton aria-label="delete" variant="primary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="delete" variant="secondary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="delete" variant="tertiary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="send" variant="basic">
  <FontAwesomeIcon icon={faSend} />
</TeliButton>
      `}}}},ot=T,y={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"primary",color:"danger",children:"Danger Primary"}),t(e,{variant:"primary",color:"danger",disabled:!0,children:"Danger Primary"})]}),parameters:{docs:{description:{story:`
Danger buttons should be used for potentially destructive actions such as delete.
        `},source:{code:`
<TeliButton variant="primary" color="danger">
  Danger Primary
</TeliButton>
<TeliButton variant="primary" color="danger" disabled>
  Danger Primary
</TeliButton>
      `}}}},it=y,B={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"link",children:"Link button"}),t(e,{variant:"link",href:"#link",children:"With href"}),t(e,{variant:"link",disabled:!0,children:"Disabled Link"}),t(e,{variant:"link",href:"#link",disabled:!0,children:"Disabled with href"})]}),parameters:{docs:{description:{story:`
Link buttons should be used for navigation. "Disable" link by removing the href 
property
        `},source:{code:`
<TeliButton variant="link">Link button</TeliButton>
<TeliButton variant="link" href="#link">
  With href
</TeliButton>
<TeliButton variant="link" disabled>
  Disabled Link
</TeliButton>
<TeliButton variant="link" href="#link" disabled>
  Disabled with href
</TeliButton>
      `}}}},nt=B,g={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"tertiary",children:"Tertiary"}),t(e,{variant:"tertiary",disabled:!0,children:"Disabled Tertiary"})]}),parameters:{docs:{description:{story:`
Tertiary buttons should be used for less prominent actions, including those
located in dialogs and cards. In cards, text buttons help maintain an
emphasis on card content.
        `},source:{code:`
<TeliButton variant="tertiary">Tertiary</TeliButton>
<TeliButton variant="tertiary" disabled>
  Disabled Tertiary
</TeliButton>
      `}}}},rt=g,v={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"secondary",children:"Secondary"}),t(e,{variant:"secondary",disabled:!0,children:"Disabled secondary"})]}),parameters:{docs:{description:{story:`
Seconday buttons should be used for medium-emphasis. They contain actions that
are important but aren't the primary action in the application.
They can also be used for lower emphasis when used together with a primary
buttons, or a higher emphasis when used with the tertiary buttons.
        `},source:{code:`
<TeliButton variant="secondary">Secondary</TeliButton>
<TeliButton variant="secondary" disabled>
  Disabled secondary
</TeliButton>
      `}}}},at=v,b={render:()=>o("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t(e,{variant:"primary",children:"Primary"}),t(e,{variant:"primary",disabled:!0,children:"Disabled Primary"})]}),parameters:{docs:{description:{story:`
Primary button should be used for primary actions in applications. They are
designed to have distinguished by the use of the filled background.
        `},source:{code:`
<TeliButton variant="primary">Primary</TeliButton>
<TeliButton variant="primary" disabled>
  Disabled Primary
</TeliButton>
      `}}}},st=b,i="Tooltip content goes here",f={render:()=>o("div",{className:"grid w-1/2 h-1/2 mx-auto my-16",children:[t("div",{className:"grid place-content-center",children:o("div",{className:"flex gap-x-4",children:[t(e,{variant:"primary",tooltip:i,tooltipPlacement:"top-start",children:"Top start"}),t(e,{variant:"primary",tooltip:i,tooltipPlacement:"top",children:"Top"}),t(e,{variant:"primary",tooltip:i,tooltipPlacement:"top-end",children:"Top end"})]})}),o("div",{className:"grid grid-rows-1 grid-cols-2 my-6",children:[o("div",{className:"flex flex-col items-start gap-y-4",children:[t(e,{tooltip:i,tooltipPlacement:"left-start",children:"Left start"}),t(e,{tooltip:i,tooltipPlacement:"left",children:"Left"}),t(e,{tooltip:i,tooltipPlacement:"left-end",children:"Left end"})]}),o("div",{className:"flex flex-col items-end gap-y-4",children:[t(e,{tooltip:i,tooltipPlacement:"right-start",children:"Right start"}),t(e,{tooltip:i,tooltipPlacement:"right",children:"Right"}),t(e,{tooltip:i,tooltipPlacement:"right-end",children:"Right end"})]})]}),t("div",{className:"grid place-content-center",children:o("div",{className:"flex gap-x-4",children:[t(e,{variant:"secondary",tooltip:i,tooltipPlacement:"bottom-start",children:"Bottom start"}),t(e,{variant:"secondary",tooltip:i,tooltipPlacement:"bottom",children:"Bottom"}),t(e,{variant:"secondary",tooltip:i,tooltipPlacement:"bottom-end",children:"Bottom end"})]})})]}),parameters:{docs:{description:{story:`
Tooltips display informative text when users hover over, focus on, or tap an element.
When activated, Tooltips display a text label identifying an element, such as a 
description of its function.
Tooltips should not be used for information that is vital to task completion.
        `},source:{code:`
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top-start"
>
  Top start
</TeliButton>
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top"
>
  Top
</TeliButton>
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top-end"
>
  Top end
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left-start">
  Left start
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left">
  Left
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left-end">
  Left end
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right-start">
  Right start
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right">
  Right
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right-end">
  Right end
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom-start"
>
  Bottom start
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom"
>
  Bottom
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom-end"
>
  Bottom end
</TeliButton>
      `}}}},lt=f,ct={component:e,parameters:{docs:{source:{type:"dynamic"}}}},a={args:{children:"Default button",onClick:()=>alert("Clicked default button")}};var s,l,c,d,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: "Default button",
    onClick: () => alert("Clicked default button")
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:`The TeliButton comes with four variants: primary, secondary,
tertiary and link.
All components accept an onClick handler that is applied to the root DOM element.
**Note**: The documentation avoids mentioning native props (there are a lot)
refer to the MUI and MDN documentation for a full list of props`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};const dt=["Basic","PrimaryButtons","SecondaryButtons","TertiaryButtons","LinkButtons","DangerButtons","ButtonsWithIcons","IconButtons","Sizes","ButtonsWithTooltips"];export{a as Basic,tt as ButtonsWithIcons,lt as ButtonsWithTooltips,it as DangerButtons,ot as IconButtons,nt as LinkButtons,st as PrimaryButtons,at as SecondaryButtons,et as Sizes,rt as TertiaryButtons,dt as __namedExportsOrder,ct as default};
