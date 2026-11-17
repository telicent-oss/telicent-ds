import{r as h,b as v,a as e}from"./iframe-DgB5DOOK.js";import{a as l,R as a}from"./RadioGroup-BaCjTbVF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./FormControlLabel-BEFCwgAZ.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./useFormControl-C1QvXYzQ.js";import"./useControlled-BxoUib7D.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./Typography-BF7sK5Ae.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./createChainedFunction-BO_9K8Jh.js";const j={title:"Inputs/RadioGroup",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
