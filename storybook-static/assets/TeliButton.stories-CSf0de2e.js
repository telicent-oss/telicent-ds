import{T as e}from"./TeliButton-DFvygePR.js";import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{F as i,c as n,u as p}from"./index-B4cTrqDe.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./ButtonBase-Er_LceZN.js";import"./extends-CCbyfPlC.js";import"./createTheme-CnHyYZiq.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./generateUtilityClasses-BGohe2Km.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useForkRef-UxOPvILp.js";import"./index-D8zF22Iw.js";import"./useTheme-DGd8psJl.js";import"./Popper-CBif7sJe.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-CFEed8lE.js";import"./index-B8XB3FuZ.js";import"./utils-DOhIVSbh.js";import"./useControlled-DpTMnm0X.js";import"./useId-bIDWZ5VS.js";import"./index-D3ylJrlI.js";const m={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"primary",startIcon:t.jsx(i,{icon:n}),children:"Delete"}),t.jsx(e,{variant:"secondary",endIcon:t.jsx(i,{icon:p}),children:"Send"})]}),parameters:{docs:{description:{story:`
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
      `}}}},K=m,u={render:()=>t.jsxs("div",{className:"flex items-center gap-x-4",children:[t.jsx("div",{children:t.jsx(e,{variant:"primary",startIcon:t.jsx(i,{icon:n}),size:"small",children:"Delete"})}),t.jsx("div",{children:t.jsx(e,{variant:"primary",color:"danger",startIcon:t.jsx(i,{icon:n}),size:"medium",children:"Delete"})}),t.jsx("div",{children:t.jsx(e,{variant:"secondary",startIcon:t.jsx(i,{icon:n}),size:"large",children:"Delete"})})]}),parameters:{docs:{description:{story:"For larger or smaller icon buttons, use the size prop to set the size."},source:{code:`
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
      `}}}},Q=u,h={render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(e,{"aria-label":"delete",variant:"primary",children:t.jsx(i,{icon:n})}),t.jsx(e,{"aria-label":"delete",variant:"secondary",children:t.jsx(i,{icon:n})}),t.jsx(e,{"aria-label":"delete",variant:"tertiary",children:t.jsx(i,{icon:n})}),t.jsx(e,{"aria-label":"send",variant:"basic",children:t.jsx(i,{icon:p})})]}),parameters:{docs:{description:{story:`
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
      `}}}},V=h,T={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"primary",color:"danger",children:"Danger Primary"}),t.jsx(e,{variant:"primary",color:"danger",disabled:!0,children:"Danger Primary"})]}),parameters:{docs:{description:{story:`
Danger buttons should be used for potentially destructive actions such as delete.
        `},source:{code:`
<TeliButton variant="primary" color="danger">
  Danger Primary
</TeliButton>
<TeliButton variant="primary" color="danger" disabled>
  Danger Primary
</TeliButton>
      `}}}},Y=T,y={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"link",children:"Link button"}),t.jsx(e,{variant:"link",href:"#link",children:"With href"}),t.jsx(e,{variant:"link",disabled:!0,children:"Disabled Link"}),t.jsx(e,{variant:"link",href:"#link",disabled:!0,children:"Disabled with href"})]}),parameters:{docs:{description:{story:`
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
      `}}}},Z=y,B={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"tertiary",children:"Tertiary"}),t.jsx(e,{variant:"tertiary",disabled:!0,children:"Disabled Tertiary"})]}),parameters:{docs:{description:{story:`
Tertiary buttons should be used for less prominent actions, including those
located in dialogs and cards. In cards, text buttons help maintain an
emphasis on card content.
        `},source:{code:`
<TeliButton variant="tertiary">Tertiary</TeliButton>
<TeliButton variant="tertiary" disabled>
  Disabled Tertiary
</TeliButton>
      `}}}},tt=B,g={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"secondary",children:"Secondary"}),t.jsx(e,{variant:"secondary",disabled:!0,children:"Disabled secondary"})]}),parameters:{docs:{description:{story:`
Seconday buttons should be used for medium-emphasis. They contain actions that
are important but aren't the primary action in the application.
They can also be used for lower emphasis when used together with a primary
buttons, or a higher emphasis when used with the tertiary buttons.
        `},source:{code:`
<TeliButton variant="secondary">Secondary</TeliButton>
<TeliButton variant="secondary" disabled>
  Disabled secondary
</TeliButton>
      `}}}},et=g,v={render:()=>t.jsxs("div",{className:"grid grid-rows-1 grid-cols-4 gap-4",children:[t.jsx(e,{variant:"primary",children:"Primary"}),t.jsx(e,{variant:"primary",disabled:!0,children:"Disabled Primary"})]}),parameters:{docs:{description:{story:`
Primary button should be used for primary actions in applications. They are
designed to have distinguished by the use of the filled background.
        `},source:{code:`
<TeliButton variant="primary">Primary</TeliButton>
<TeliButton variant="primary" disabled>
  Disabled Primary
</TeliButton>
      `}}}},ot=v,o="Tooltip content goes here",x={render:()=>t.jsxs("div",{className:"grid w-1/2 h-1/2 mx-auto my-16",children:[t.jsx("div",{className:"grid place-content-center",children:t.jsxs("div",{className:"flex gap-x-4",children:[t.jsx(e,{variant:"primary",tooltip:o,tooltipPlacement:"top-start",children:"Top start"}),t.jsx(e,{variant:"primary",tooltip:o,tooltipPlacement:"top",children:"Top"}),t.jsx(e,{variant:"primary",tooltip:o,tooltipPlacement:"top-end",children:"Top end"})]})}),t.jsxs("div",{className:"grid grid-rows-1 grid-cols-2 my-6",children:[t.jsxs("div",{className:"flex flex-col items-start gap-y-4",children:[t.jsx(e,{tooltip:o,tooltipPlacement:"left-start",children:"Left start"}),t.jsx(e,{tooltip:o,tooltipPlacement:"left",children:"Left"}),t.jsx(e,{tooltip:o,tooltipPlacement:"left-end",children:"Left end"})]}),t.jsxs("div",{className:"flex flex-col items-end gap-y-4",children:[t.jsx(e,{tooltip:o,tooltipPlacement:"right-start",children:"Right start"}),t.jsx(e,{tooltip:o,tooltipPlacement:"right",children:"Right"}),t.jsx(e,{tooltip:o,tooltipPlacement:"right-end",children:"Right end"})]})]}),t.jsx("div",{className:"grid place-content-center",children:t.jsxs("div",{className:"flex gap-x-4",children:[t.jsx(e,{variant:"secondary",tooltip:o,tooltipPlacement:"bottom-start",children:"Bottom start"}),t.jsx(e,{variant:"secondary",tooltip:o,tooltipPlacement:"bottom",children:"Bottom"}),t.jsx(e,{variant:"secondary",tooltip:o,tooltipPlacement:"bottom-end",children:"Bottom end"})]})})]}),parameters:{docs:{description:{story:`
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
      `}}}},it=x,nt={component:e,parameters:{docs:{source:{type:"dynamic"}}}},r={args:{children:"Default button",onClick:()=>alert("Clicked default button")}};var a,s,l,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Default button",
    onClick: () => alert("Clicked default button")
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:`The TeliButton comes with four variants: primary, secondary,
tertiary and link.
All components accept an onClick handler that is applied to the root DOM element.
**Note**: The documentation avoids mentioning native props (there are a lot)
refer to the MUI and MDN documentation for a full list of props`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};const rt=["Basic","PrimaryButtons","SecondaryButtons","TertiaryButtons","LinkButtons","DangerButtons","ButtonsWithIcons","IconButtons","Sizes","ButtonsWithTooltips"];export{r as Basic,K as ButtonsWithIcons,it as ButtonsWithTooltips,Y as DangerButtons,V as IconButtons,Z as LinkButtons,ot as PrimaryButtons,et as SecondaryButtons,Q as Sizes,tt as TertiaryButtons,rt as __namedExportsOrder,nt as default};
