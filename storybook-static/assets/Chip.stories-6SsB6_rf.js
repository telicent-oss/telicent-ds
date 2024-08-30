import{j as e}from"./jsx-runtime-CexXSJP5.js";import{f as s}from"./index-X0cxQbTF.js";import{C as r}from"./Chip-1vDBX2io.js";import{B as w}from"./Box-Jzim7HDp.js";import"./index-BP8_t0zE.js";import"./index-DZLKizrv.js";import"./Chip-DIAWJyfw.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./createSvgIcon-BSqKsiVD.js";import"./SvgIcon-C5tcZsyu.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";const L={title:"Data display/Chip",component:r,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{label:"Chip"},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},label:{description:"The content of the component."},onClick:{description:"Callback fired when the chip is clicked.",type:"function"},onDelete:{description:"Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",type:"function"},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]}},decorators:o=>e.jsx(w,{display:"flex",gap:2,children:o()})},t={},n={args:{variant:"outlined"}},i={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s(),...o}),e.jsx(r,{variant:"outlined",onClick:s(),...o})]}),parameters:{docs:{description:{story:"Chips with the `onClick` prop defined change appearance on focus, hover, and click."}}}},a={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{onDelete:s(),...o}),e.jsx(r,{variant:"outlined",onDelete:s(),...o})]}),parameters:{docs:{description:{story:"Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."}}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,k,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const M=["Filled","Outlined","ClickableChips","DeletableChips"];export{i as ClickableChips,a as DeletableChips,t as Filled,n as Outlined,M as __namedExportsOrder,L as default};
