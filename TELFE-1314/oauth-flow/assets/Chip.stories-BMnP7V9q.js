import{j as o,a as w,F as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{f as s}from"./index-ZIyp8o0e.js";import{C as r}from"./Chip-CNh8tqAF.js";import{B as v}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Chip-CDjOKJwQ.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./createSvgIcon-Bol9-9si.js";import"./SvgIcon-5gifbZ3Q.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-C9t-hGNZ.js";import"./useTheme-Cg37eTMn.js";const J={title:"Data display/Chip",component:r,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{label:"Chip"},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},label:{description:"The content of the component."},onClick:{description:"Callback fired when the chip is clicked.",type:"function"},onDelete:{description:"Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",type:"function"},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]}},decorators:e=>o(v,{display:"flex",gap:2,children:e()})},a={},n={args:{variant:"outlined"}},t={render:e=>w(y,{children:[o(r,{onClick:s(),...e}),o(r,{variant:"outlined",onClick:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the `onClick` prop defined change appearance on focus, hover, and click."}}}},i={render:e=>w(y,{children:[o(r,{onDelete:s(),...e}),o(r,{variant:"outlined",onDelete:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."}}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,k,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const K=["Filled","Outlined","ClickableChips","DeletableChips"];export{t as ClickableChips,i as DeletableChips,a as Filled,n as Outlined,K as __namedExportsOrder,J as default};
