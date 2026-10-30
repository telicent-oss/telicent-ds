import{r as h,b as v,a as e}from"./iframe-B8Ndjgs7.js";import{a as l,R as a}from"./RadioGroup-B4cSf-Rs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./FormControlLabel-uh3SpxA2.js";import"./styled-CtcE8cKO.js";import"./extendSxProp-21VtOiYW.js";import"./useFormControl-BjXCnS6h.js";import"./useControlled-mY01Zfpb.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B_Llp_PF.js";import"./TransitionGroupContext-DZHet8-E.js";import"./Typography-s2ICI44X.js";import"./Stack-rvIPxQ-d.js";import"./styled-BYZRNKV0.js";import"./createStyled-wNLCiFTP.js";import"./useThemeProps-CLApfop_.js";import"./createSvgIcon-CGOjPHBt.js";import"./SvgIcon-C47WU1LB.js";import"./createChainedFunction-BO_9K8Jh.js";const j={title:"Inputs/RadioGroup",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
