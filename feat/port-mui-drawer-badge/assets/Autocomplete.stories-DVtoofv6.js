import{r,b as p,a as s}from"./iframe-C-ZFHi7G.js";import{g as a}from"./DropdownButton-DBXQPZiC.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CbH3sEfM.js";import"./SvgIcon-BJCkR60K.js";import"./clsx-B-dksMZM.js";import"./styled-Bk2IjbB5.js";import"./extendSxProp-dXted_0R.js";import"./composeClasses-fLhin0tj.js";import"./Box-PWf94AkS.js";import"./Box-C8RueU9X.js";import"./Container-CV6bOf61.js";import"./styled-DNl7Cs_R.js";import"./createStyled-vuo4qSuW.js";import"./useThemeProps-CDA2VJay.js";import"./FlexBox-lULQm6VU.js";import"./Stack-CmCwoFm_.js";import"./Typography-CkxFGaa5.js";import"./Paper-C6Xte-jc.js";import"./CogIcon-CmSwAq5_.js";import"./InfoIcon-DtvtTana.js";import"./ExpandMoreIcon-CEeNpfle.js";import"./ThemeSwitchRow-Dvzp5zbn.js";import"./index-rmUNOSJG.js";import"./Text-CHFW8IH8.js";import"./ListItem-CnFySCf3.js";import"./ListContext-CUNnWBoY.js";import"./FormControl-z8ekdGjB.js";import"./useFormControl-CgAT6IKY.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./resolveComponentProps-Ji4pwD1h.js";import"./ButtonBase-UsKYAmFM.js";import"./Toolbar-BFoIYY9Z.js";import"./TextField-BnMSP8bO.js";import"./Modal-Bh0uOVdy.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-8MMKxgpT.js";import"./index-BiUXR6Fr.js";import"./utils-D_VBJbmQ.js";import"./Popover-CpBmz1D4.js";import"./useControlled-DIYZR1vI.js";import"./createSvgIcon-CgHhWzsp.js";import"./FormHelperText-YXdNPWNE.js";import"./Close-Da5sWuiq.js";import"./Popper-BYgvOfOT.js";import"./Badge-BRhX8-6K.js";import"./Chip-rsJ9-v4L.js";import"./IconButton-BSmPEpg3.js";import"./FormControlLabel-C_CoaMTJ.js";import"./MenuItem-CLSLkyOY.js";import"./dividerClasses-dRG9if5p.js";import"./IconButton-D4AMQVbi.js";import"./Badge-OR03eEi0.js";import"./Chip-B2wcrvAN.js";import"./Divider-O0zDh8J4.js";import"./Divider-B3REhvRn.js";import"./TreeView-CxyUEHYQ.js";import"./useThemeProps-DuHDulq9.js";import"./Collapse-Bi1bo0w0.js";import"./useSlot-CLq2sdyu.js";import"./AppInfoRow-DXVzvm-o.js";import"./_IconPopover-DOXgOPu3.js";import"./AppSettings-Dlv5aBW5.js";import"./SvgIcon-xwJ9lbKe.js";import"./TableRow-C03rPSUq.js";import"./TableCell-CB2ecjuI.js";import"./LinearProgress-BMstATZR.js";import"./LinearProgress-aqc0myF3.js";import"./Spinner-D6q0L9xa.js";import"./CircularProgress-BZGJCY_5.js";import"./Dialog-BGqZYpLW.js";import"./DialogContent-CNYTn0i-.js";import"./Button-eDvdHhIu.js";import"./MapToggleButtonPresentational-DrTKcpNc.js";import"./Remove-C6ct4kNK.js";import"./Alert-DuvNx40M.js";import"./ToggleButton-BzArV2oI.js";import"./ToggleButton-CBZbI2uz.js";import"./ToggleButtonGroup-DnQDLnGR.js";import"./LinkButton-DiWs23j2.js";import"./TextField-Dtcgs6IQ.js";import"./Switch-B9Vu7ZeK.js";import"./Switch-BYiHkx-A.js";import"./LabeledSwitch-Cjz_DPwA.js";import"./RadioGroup-D-HBNE5D.js";import"./FormControl-CgN7reua.js";import"./FormHelperText-BnLTH0UY.js";import"./Tabs-crUQBx1x.js";import"./MenuItem-MYpO4lco.js";import"./AccordionDetails-BU3W9zwP.js";import"./Paper-C2fTVCnQ.js";import"./ErrorFallback-CsyZPSJe.js";import"./ErrorFallbackText-DIe6Jt0v.js";import"./ErrorFallbackWrapper-BOMF25ch.js";import"./Brand-_mV_4qml.js";import"./Edit-wGiylSA_.js";const Dt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
A Design System wrapper around MUI **Autocomplete** that follows **MUI’s expected value model**.

---

## How MUI expects Autocomplete to work

MUI Autocomplete is designed to be controlled using the **actual option object(s)**, not just an id.

- **Single select**: \`value\` should be \`Option | null\`
- **Multi select**: \`value\` should be \`Option[]\` and you set \`multiple\`

This is important because MUI needs the full option object to:
- Render the selected label(s) correctly
- Match options to selected values (using \`isOptionEqualToValue\`)
- Render tags (chips) in \`multiple\` mode
- Handle keyboard interactions and deletion (tag props)

This wrapper keeps that model so you don’t have to do id-to-option mapping inside the component.

---

## Controlled usage in apps

### Single select
Store the selected **Option** (or \`null\`) in state:

\`\`\`tsx
const [country, setCountry] = useState<Option | null>(null);

<Autocomplete
  label="Country"
  options={options}
  value={country}
  onChange={setCountry}
/>
\`\`\`

### Multi select (chips)
Store an array of **Option**:

\`\`\`tsx
const [countries, setCountries] = useState<Option[]>([]);

<Autocomplete
  multiple
  label="Countries"
  options={options}
  value={countries}
  onChange={setCountries}
/>
\`\`\`

### If your app stores ids (e.g. in a form)
Keep this component MUI-native, and map at the app layer:

\`\`\`tsx
// app stores countryCode: string | null
const selected = options.find(o => o.value === countryCode) ?? null;

<Autocomplete
  label="Country"
  options={options}
  value={selected}
  onChange={(opt) => setCountryCode(opt?.value ?? null)}
/>
\`\`\`

This keeps the DS component simple while still supporting id-based form state.

---

## Props
- \`label: string\` — Input label.
- \`options: Option[]\` — Array of \`{ label; value; icon? }\`.
- **Single mode**
  - \`value: Option | null\`
  - \`onChange: (value: Option | null) => void\`
- **Multiple mode**
  - \`multiple: true\`
  - \`value: Option[]\`
  - \`onChange: (value: Option[]) => void\`
- \`placeholder?: string\`
- \`disabled?: boolean\`
- \`error?: boolean\`
- \`helperText?: string\`
- \`fullWidth?: boolean\` (default \`true\`)
- \`size?: "small" | "medium"\` (default \`"small"\`)
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),l=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],u={render:()=>{const[e,t]=r.useState(null);return s(a,{label:"Select country",value:e,onChange:t,options:l,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=r.useState(l.find(o=>o.value==="AT")??null);return s(a,{label:"Select country",value:e,onChange:t,options:l})}},d={render:()=>{const[e,t]=r.useState(null);return s(a,{label:"Country",value:e,onChange:t,options:l,helperText:"Pick your country of residence",placeholder:"Search countries"})}},m={render:()=>{const[e]=r.useState(l.find(t=>t.value==="AU")??null);return s(a,{label:"Country",value:e,onChange:()=>{},options:l,disabled:!0})}},v={render:()=>{const[e,t]=r.useState([]),[o,n]=r.useState(null),[i,y]=r.useState(!1),$=async()=>{y(!0),await q(900),t(l),y(!1)};return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(a,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:i?"Loading…":"Start typing…",disabled:i,loading:i,onOpen:()=>{e.length===0&&!i&&$()},noOptionsText:i?"Fetching countries…":"No matches"}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=r.useState("AT"),o=l.find(n=>n.value===e)??null;return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(a,{label:"Country (form stores id)",options:l,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),p("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=r.useState([]),o=3;return p("div",{style:{display:"grid",gap:12,maxWidth:520},children:[s(a,{multiple:!0,label:`Pick up to ${o} countries`,options:l,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(i=>i.value===n.value)}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}};var S,b,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} placeholder="Start typing…" />;
  }
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,A,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(countryOptions.find(o => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} />;
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var x,T,V;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={countryOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var M,w,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<Option | null>(countryOptions.find(o => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={countryOptions} disabled />;
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,U,D;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [value, setValue] = useState<Option | null>(null);
    const [loading, setLoading] = useState(false);
    const load = async () => {
      setLoading(true);
      await wait(900);
      setOptions(countryOptions);
      setLoading(false);
    };
    return <div style={{
      display: "grid",
      gap: 12,
      maxWidth: 420
    }}>
        <Autocomplete label="Country (async)" options={options} value={value} onChange={setValue} placeholder={loading ? "Loading…" : "Start typing…"} disabled={loading} loading={loading} onOpen={() => {
        if (options.length === 0 && !loading) void load();
      }} noOptionsText={loading ? "Fetching countries…" : "No matches"} />

        <div style={{
        fontSize: 12,
        opacity: 0.8
      }}>Selected: {value ? \`\${value.label} (\${value.value})\` : "—"}</div>
      </div>;
  }
}`,...(D=(U=v.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var W,j,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    // what a form library often stores
    const [countryCode, setCountryCode] = useState<string | null>("AT");
    const selected = countryOptions.find(o => o.value === countryCode) ?? null;
    return <div style={{
      display: "grid",
      gap: 12,
      maxWidth: 420
    }}>
        <Autocomplete label="Country (form stores id)" options={countryOptions} value={selected} onChange={opt => setCountryCode(opt?.value ?? null)} placeholder="Start typing…" />

        <div style={{
        fontSize: 12,
        opacity: 0.8
      }}>Form value (id): {countryCode ?? "—"}</div>
      </div>;
  }
}`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,k,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<Option[]>([]);
    const limit = 3;
    return <div style={{
      display: "grid",
      gap: 12,
      maxWidth: 520
    }}>
        <Autocomplete multiple label={\`Pick up to \${limit} countries\`} options={countryOptions} value={values} onChange={setValues} placeholder="Choose…" getOptionDisabled={opt => values.length >= limit && !values.some(v => v.value === opt.value)} />

        <div style={{
        fontSize: 12,
        opacity: 0.8
      }}>
          Selected ({values.length}/{limit}): {values.length ? values.map(v => v.label).join(", ") : "—"}
        </div>
      </div>;
  }
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Wt=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];export{v as AsyncLoading,u as Basic,m as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,d as WithHelperText,Wt as __namedExportsOrder,Dt as default};
