import{r as l,b as p,a as s}from"./iframe-Djv8ktra.js";import{g as i}from"./EntityList-CmXEoAc2.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-Do_i3sJ9.js";import"./Stack-DjL-eZhY.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./clsx-B-dksMZM.js";import"./styled-CpIMtI8p.js";import"./createStyled-C4labjHn.js";import"./useThemeProps-2HbMDrfU.js";import"./composeClasses-fLhin0tj.js";import"./Text-Y9XZ_yHR.js";import"./Typography-Dq-Ciojh.js";import"./ListContext-DOkPQ55E.js";import"./ListItem-DgF_KQ7w.js";import"./FormControl-KHlRX9wq.js";import"./useFormControl-yjc7eBp6.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./resolveComponentProps-BCG5tMa5.js";import"./ButtonBase-BsGOhoOZ.js";import"./Toolbar-zYbL7pMK.js";import"./TextField-FyiAyxRB.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";import"./Popover-B86b2_k9.js";import"./Paper-1JE7t4a2.js";import"./useControlled-BYl-fCxX.js";import"./createSvgIcon-DZnw1m24.js";import"./SvgIcon-DECtGhh0.js";import"./FormHelperText-D2wijesy.js";import"./Close-uaArJQbm.js";import"./Popper-CRx9JkVY.js";import"./Badge-Bne_esn3.js";import"./Chip-Df5TxRX3.js";import"./IconButton-D0URHQdC.js";import"./FormControlLabel-Dl4rNMyO.js";import"./MenuItem-BrTfhZTz.js";import"./dividerClasses-CaIblDIL.js";import"./Button-DwhmFZ5z.js";import"./MapToggleButtonPresentational-9yu7-Ilq.js";import"./Remove-UDhVurmI.js";import"./Box-C9osqYpn.js";import"./ExpandLessIcon-C3pwZ4Pc.js";import"./Box-Cvy3NsGq.js";import"./Container-D5lO9yGB.js";import"./CogIcon-CT9n-ILh.js";import"./InfoIcon-CHj9CFVM.js";import"./ExpandMoreIcon-teVtSgL8.js";import"./ThemeSwitchRow-H2pqK7Sf.js";import"./index-8FsRt4pB.js";import"./IconButton-CerlmnQB.js";import"./Badge-CMOuLR30.js";import"./Chip-CxSld7rQ.js";import"./Divider-C9GgdKvp.js";import"./Divider-BQgZCPEt.js";import"./TreeView-CmgLkcRM.js";import"./useThemeProps-DvIlKj6P.js";import"./Collapse-BPTOiYJG.js";import"./useSlot-DS97Xucj.js";import"./AppInfoRow-C5ZQnBbJ.js";import"./_IconPopover-BLyK2_eM.js";import"./AppSettings-CSEbvKPB.js";import"./SvgIcon-DcOD0BqO.js";import"./TableRow-zzNEo6q7.js";import"./TableCell-Bunj5ZcK.js";import"./Skeleton-Kydo8R4j.js";import"./Skeleton-CnHTnMO_.js";import"./Edit-BKmGEAwu.js";import"./LinearProgress-DdDDCrSp.js";import"./LinearProgress-DK1T17kM.js";import"./Spinner-CZ5RlgS9.js";import"./CircularProgress-DH002ZiD.js";import"./Dialog-CNnh_iBj.js";import"./DialogContent-6oCYEZl_.js";import"./Alert-BVz-9DlK.js";import"./ToggleButton-GvPbRr0J.js";import"./ToggleButton-CFoTEcuq.js";import"./ToggleButtonGroup-BS0uvyOk.js";import"./LinkButton-CYrYI8ff.js";import"./TextField-DZFwm5FK.js";import"./Switch-Ckcfd9qm.js";import"./Switch-DP0w0isr.js";import"./LabeledSwitch-Boji5GC-.js";import"./RadioGroup-CHfeD9PB.js";import"./FormControl-DEhUdqs_.js";import"./FormHelperText-B0uW7-Qr.js";import"./Tabs-DLjDcbju.js";import"./MenuItem-DaXvOOwF.js";import"./AccordionDetails-CqSaJtGy.js";import"./Paper-IIlbTA42.js";import"./ErrorFallback-ei1UHZWN.js";import"./ErrorFallbackText-CuxdV7zC.js";import"./ErrorFallbackWrapper-C5pNwo6x.js";import"./Brand-4F19u9Fh.js";const zt={title:"Inputs/Autocomplete",component:i,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),r=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],u={render:()=>{const[e,t]=l.useState(null);return s(i,{label:"Select country",value:e,onChange:t,options:r,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=l.useState(r.find(o=>o.value==="AT")??null);return s(i,{label:"Select country",value:e,onChange:t,options:r})}},m={render:()=>{const[e,t]=l.useState(null);return s(i,{label:"Country",value:e,onChange:t,options:r,helperText:"Pick your country of residence",placeholder:"Search countries"})}},d={render:()=>{const[e]=l.useState(r.find(t=>t.value==="AU")??null);return s(i,{label:"Country",value:e,onChange:()=>{},options:r,disabled:!0})}},v={render:()=>{const[e,t]=l.useState([]),[o,n]=l.useState(null),[a,y]=l.useState(!1),$=async()=>{y(!0),await q(900),t(r),y(!1)};return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(i,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:a?"Loading…":"Start typing…",disabled:a,loading:a,onOpen:()=>{e.length===0&&!a&&$()},noOptionsText:a?"Fetching countries…":"No matches"}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=l.useState("AT"),o=r.find(n=>n.value===e)??null;return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(i,{label:"Country (form stores id)",options:r,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),p("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=l.useState([]),o=3;return p("div",{style:{display:"grid",gap:12,maxWidth:520},children:[s(i,{multiple:!0,label:`Pick up to ${o} countries`,options:r,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(a=>a.value===n.value)}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}},Pt=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];var S,b,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} placeholder="Start typing…" />;
  }
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,A,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(countryOptions.find(o => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} />;
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var x,T,V;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={countryOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var M,w,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<Option | null>(countryOptions.find(o => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={countryOptions} disabled />;
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,U,D;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};export{v as AsyncLoading,u as Basic,d as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,m as WithHelperText,Pt as __namedExportsOrder,zt as default};
