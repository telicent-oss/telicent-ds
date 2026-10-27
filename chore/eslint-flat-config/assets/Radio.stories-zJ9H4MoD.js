import{r as w,b as S,a as r}from"./iframe-DZvJTdLH.js";import{R as l,a as k}from"./RadioGroup-CHruPiDE.js";import{B as x}from"./Box-BKngloQ-.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./FormControlLabel-W0LRkKmU.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./useFormControl-DRohniRh.js";import"./useControlled-CMjA5emF.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./Typography-CMsNHFNw.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./createChainedFunction-BO_9K8Jh.js";const z={title:"Inputs/Radio",component:l,tags:["autodocs"],parameters:{docs:{description:{component:'\nA single radio input built on MUI\'s `<Radio>` with DS theming. Pair with `<RadioGroup>` when offering a choice between several mutually-exclusive options; use standalone only for the (rare) one-off two-state case where a `Switch` would be wrong semantically.\n\n---\n\n### The opinion\n\n- **`color="primary"` is baked.** The `color` prop is omitted from `RadioProps` so a callsite can\'t pick a different accent. The DS has one accent per theme — the current theme\'s `primary` — and inputs follow it. Matches `Switch` and `Checkbox`.\n- **`label` is a Radio prop, not a wrapping concern.** When you pass `label`, the wrapper internally pairs the control with a `FormControlLabel` — the three-line `<FormControlLabel value="x" control={<Radio />} label="X" />` composition becomes `<Radio value="x" label="X" />`. `value` is routed to the `FormControlLabel` so `RadioGroup` selection resolves correctly.\n- **No label → no wrapper.** Standalone Radio renders only the control.\n\n---\n\n### Defaults\n\n- `color`: `primary` — not exposed; the DS owns the accent choice.\n- `labelPlacement`: `end` — matches Switch and MUI.\n\n---\n\n### When & how to use it\n\n- **Pair with `RadioGroup`** for mutually-exclusive options.\n- **Reach for `Switch`** when the choice is on/off for a single setting.\n- **Reach for `Checkbox`** when more than one option can be selected at once.\n\n---\n\n### Example\n\n```tsx\nimport { Radio, RadioGroup } from "@telicent-oss/ds";\n\nconst BackupType = () => {\n  const [value, setValue] = useState("full");\n  return (\n    <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>\n      <Radio value="full" label="Full backup" />\n      <Radio value="incremental" label="Incremental" />\n    </RadioGroup>\n  );\n};\n```\n'}},id:"radio-default",ariaLabel:"radio"},decorators:[n=>r(x,{sx:{margin:"auto"},children:n()})],argTypes:{label:{control:"text",description:"Caption rendered next to the radio. When set, the component internally wraps with `FormControlLabel` and routes `value` to the label so `RadioGroup` selection still binds.",table:{type:{summary:"ReactNode"},category:"Radio (DS)"}},labelPlacement:{control:{type:"radio"},options:["end","start","top","bottom"],description:"Where the label sits relative to the control. Only applies when `label` is set.",table:{defaultValue:{summary:"end"},category:"Radio (DS)"}},checked:{control:"boolean",description:"Controlled checked state. Pair with `onChange` and hold the state in the consumer, or use `defaultChecked` for uncontrolled.",table:{type:{summary:"boolean"},category:"Radio"}},disabled:{control:"boolean",description:"Render the control inert.",table:{defaultValue:{summary:"false"},category:"Radio"}},required:{control:"boolean",description:"Required attribute on the underlying input.",table:{defaultValue:{summary:"false"},category:"Radio"}},value:{control:"text",description:"The value this radio contributes to its parent `RadioGroup`.",table:{type:{summary:"string"},category:"Radio"}}}},e={args:{id:"radio-default",value:"option-a"},parameters:{docs:{description:{story:"A bare, standalone radio with no label. Rare — radios almost always ship inside a `RadioGroup`. Shown here to demonstrate the no-label branch."}}}},a={args:{id:"radio-with-label",value:"option-a",label:"Full backup",defaultChecked:!0},parameters:{docs:{description:{story:"`label` collapses the usual `<FormControlLabel value='x' control={<Radio />} label='X' />` composition into a single Radio call. The wrapper handles the pairing internally."}}}},o={args:{id:"radio-disabled",value:"option-a",label:"Not available",disabled:!0},parameters:{docs:{description:{story:"`disabled` greys the control and blocks pointer / keyboard interaction."}}}},t={parameters:{docs:{description:{story:"The intended shape. `RadioGroup` owns the selected `value`; each `Radio` carries its own `value` and `label`. `value` routes through the internal `FormControlLabel` so the group's selection logic resolves correctly even though the DS wrapper hides the FormControlLabel from the callsite."}}},render:()=>{const[n,v]=w.useState("full");return S(k,{value:n,onChange:f=>v(f.target.value),children:[r(l,{value:"full",label:"Full backup"}),r(l,{value:"incremental",label:"Incremental backup"}),r(l,{value:"snapshot",label:"Snapshot only"})]})}},H=["Default","WithLabel","Disabled","InsideRadioGroup"];var i,s,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "radio-default",
    value: "option-a"
  },
  parameters: {
    docs: {
      description: {
        story: "A bare, standalone radio with no label. Rare — radios almost always ship inside a \`RadioGroup\`. Shown here to demonstrate the no-label branch."
      }
    }
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "radio-with-label",
    value: "option-a",
    label: "Full backup",
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`label\` collapses the usual \`<FormControlLabel value='x' control={<Radio />} label='X' />\` composition into a single Radio call. The wrapper handles the pairing internally."
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,m,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "radio-disabled",
    value: "option-a",
    label: "Not available",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`disabled\` greys the control and blocks pointer / keyboard interaction."
      }
    }
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,R,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The intended shape. \`RadioGroup\` owns the selected \`value\`; each \`Radio\` carries its own \`value\` and \`label\`. \`value\` routes through the internal \`FormControlLabel\` so the group's selection logic resolves correctly even though the DS wrapper hides the FormControlLabel from the callsite."
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
}`,...(g=(R=t.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};export{e as Default,o as Disabled,t as InsideRadioGroup,a as WithLabel,H as __namedExportsOrder,z as default};
