import{j as r,a as b,F as w}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{f as s}from"./index-ZIyp8o0e.js";import{C as o}from"./Chip-Jqcc-fVu.js";import{B as v}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Chip-B7XAvyWn.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./createSvgIcon-CxivGeKF.js";import"./SvgIcon-DDjczThx.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ButtonBase-C0n3d_CB.js";import"./useTheme-CEgm5wok.js";const J={title:"Data display/Chip",component:o,parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},tags:["autodocs"],args:{label:"Chip"},argTypes:{disabled:{description:"If true, the component is disabled.",type:"boolean",table:{defaultValue:{summary:"false"}}},variant:{type:"string"},label:{description:"The content of the component."},onClick:{description:"Callback fired when the chip is clicked.",type:"function"},onDelete:{description:"Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",type:"function"},size:{description:"The size of the component.",table:{defaultValue:{summary:"medium"}},control:"select",options:["small","medium","large"]}},decorators:e=>r(v,{display:"flex",gap:2,children:e()})},a={},t={args:{variant:"outlined"}},n={render:e=>b(w,{children:[r(o,{onClick:s(),...e}),r(o,{variant:"outlined",onClick:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the `onClick` prop defined change appearance on focus, hover, and click."}}}},i={render:e=>b(w,{children:[r(o,{onDelete:s(),...e}),r(o,{variant:"outlined",onDelete:s(),...e})]}),parameters:{docs:{description:{story:"Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."}}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,k,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const K=["Filled","Outlined","ClickableChips","DeletableChips"];export{n as ClickableChips,i as DeletableChips,a as Filled,t as Outlined,K as __namedExportsOrder,J as default};
