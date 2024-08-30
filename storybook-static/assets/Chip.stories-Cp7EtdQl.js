import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as s}from"./index-B5S312j6.js";import{C as r}from"./Chip-CuvFjp6R.js";import{B as w}from"./Box-cMJItZWL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Chip-QYx8wbL0.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./generateUtilityClasses-BGohe2Km.js";import"./useForkRef-UxOPvILp.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";const H={title:"Data display/Chip",component:r,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{label:"Chip"},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},label:{description:"The content of the component."},onClick:{description:"Callback fired when the chip is clicked.",type:"function"},onDelete:{description:"Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",type:"function"},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]}},decorators:o=>e.jsx(w,{display:"flex",gap:2,children:o()})},t={},n={args:{variant:"outlined"}},a={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s(),...o}),e.jsx(r,{variant:"outlined",onClick:s(),...o})]}),parameters:{docs:{description:{story:"Chips with the `onClick` prop defined change appearance on focus, hover, and click."}}}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{onDelete:s(),...o}),e.jsx(r,{variant:"outlined",onDelete:s(),...o})]}),parameters:{docs:{description:{story:"Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."}}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <>
      <Chip onClick={fn()} {...args} />
      <Chip variant="outlined" onClick={fn()} {...args} />
    </>,
  parameters: {
    docs: {
      description: {
        story: "Chips with the \`onClick\` prop defined change appearance on focus, hover, and click."
      }
    }
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,k,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <>
      <Chip onDelete={fn()} {...args} />
      <Chip variant="outlined" onDelete={fn()} {...args} />
    </>,
  parameters: {
    docs: {
      description: {
        story: "Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."
      }
    }
  }
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const J=["Filled","Outlined","ClickableChips","DeletableChips"];export{a as ClickableChips,i as DeletableChips,t as Filled,n as Outlined,J as __namedExportsOrder,H as default};
