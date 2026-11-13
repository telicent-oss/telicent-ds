import{r as h,b as v,a as e}from"./iframe-DunpSdH6.js";import{a as l,R as a}from"./RadioGroup-DjTHdfvI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./FormControlLabel-oM-7wre-.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./useFormControl-DJJUNb1q.js";import"./useControlled-D5RrLse2.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./Typography-Cnm5zE5B.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./createChainedFunction-BO_9K8Jh.js";const j={title:"Inputs/RadioGroup",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
Container that groups several \`<Radio>\`s into a single mutually-exclusive choice. Thin re-export of MUI's \`RadioGroup\` — the DS adds no opinion of its own here, it's exported so apps can import the whole radio set from \`@telicent-oss/ds\` without reaching into \`@mui/material\`.

The opinionated piece of the pair is \`<Radio>\`; this is the container.

---

### Defaults

None baked. Row/column layout, selection, and change handling all pass through to MUI.

---

### Example

\`\`\`tsx
import { Radio, RadioGroup } from "@telicent-oss/ds";

const [value, setValue] = useState("full");

<RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
  <Radio value="full" label="Full backup" />
  <Radio value="incremental" label="Incremental" />
</RadioGroup>
\`\`\`
`}}}},o={parameters:{docs:{description:{story:"Default vertical stack. The common shape — one option per row."}}},render:()=>{const[r,n]=h.useState("full");return v(l,{value:r,onChange:s=>n(s.target.value),children:[e(a,{value:"full",label:"Full backup"}),e(a,{value:"incremental",label:"Incremental backup"}),e(a,{value:"snapshot",label:"Snapshot only"})]})}},t={parameters:{docs:{description:{story:"`row` lays the options horizontally. Use for 2–3 short options where the horizontal shape reads cleaner than a stack."}}},render:()=>{const[r,n]=h.useState("yes");return v(l,{row:!0,value:r,onChange:s=>n(s.target.value),children:[e(a,{value:"yes",label:"Yes"}),e(a,{value:"no",label:"No"})]})}},M=["Column","Row"];var i,u,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default vertical stack. The common shape — one option per row."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState("full");
    return <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
        <Radio value="full" label="Full backup" />
        <Radio value="incremental" label="Incremental backup" />
        <Radio value="snapshot" label="Snapshot only" />
      </RadioGroup>;
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`row\` lays the options horizontally. Use for 2–3 short options where the horizontal shape reads cleaner than a stack."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState("yes");
    return <RadioGroup row value={value} onChange={e => setValue(e.target.value)}>
        <Radio value="yes" label="Yes" />
        <Radio value="no" label="No" />
      </RadioGroup>;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};export{o as Column,t as Row,M as __namedExportsOrder,j as default};
