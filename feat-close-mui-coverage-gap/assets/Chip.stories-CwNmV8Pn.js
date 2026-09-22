import{b as w,a as o,F as y}from"./iframe-QjimQxGJ.js";import{C as r}from"./Chip-D2kTYDHW.js";import{B as D}from"./Box-BdgnJPj4.js";import"./preload-helper-C1FmrZbK.js";import"./Chip-BIs9pIL_.js";import"./generateUtilityClass-DYVh7KgR.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./SvgIcon-qDEXG8Q2.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./ButtonBase-B3FHfXkx.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,L={title:"Data display/Chip",component:r,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{label:"Chip"},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},label:{description:"The content of the component."},onClick:{description:"Callback fired when the chip is clicked.",type:"function"},onDelete:{description:"Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",type:"function"},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]}},decorators:e=>o(D,{display:"flex",gap:2,children:e()})},n={},a={args:{variant:"outlined"}},t={render:e=>w(y,{children:[o(r,{onClick:s(),...e}),o(r,{variant:"outlined",onClick:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the `onClick` prop defined change appearance on focus, hover, and click."}}}},i={render:e=>w(y,{children:[o(r,{onDelete:s(),...e}),o(r,{variant:"outlined",onDelete:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."}}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const M=["Filled","Outlined","ClickableChips","DeletableChips"];export{t as ClickableChips,i as DeletableChips,n as Filled,a as Outlined,M as __namedExportsOrder,L as default};
