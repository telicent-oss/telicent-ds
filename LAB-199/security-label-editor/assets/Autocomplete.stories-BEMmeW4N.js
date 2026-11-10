import{r as l,b as p,a as s}from"./iframe-Qc_S7xDc.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import{g as a}from"./UserProfileContent-BtTtKEHB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dj7cUP7O.js";import"./clsx-B-dksMZM.js";import"./styled-CgcIX_5n.js";import"./extendSxProp-BDprp3VL.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BGM1JOzh.js";import"./TransitionGroupContext-CPUMsqsi.js";import"./MapToggleButtonPresentational-BTwyEcFF.js";import"./Remove-BPrAu3rF.js";import"./createSvgIcon-vUDj1WZO.js";import"./SvgIcon-CVLqOmKr.js";import"./IconButton-BfhPabTn.js";import"./Paper-C70JDaiv.js";import"./Box-CxkKEmSS.js";import"./XIcon-FwcEWS-P.js";import"./Stack-DoNqUwFA.js";import"./styled-BB7A3pcn.js";import"./createStyled-CUdeGtFR.js";import"./useThemeProps-BxFBB-sR.js";import"./Typography-Cu-yy0Da.js";import"./Box-DtX81eGL.js";import"./Container-C-AxOArc.js";import"./FlexBox-DBS92b2G.js";import"./Brand-CXuO_7Nj.js";import"./IconButton-CRgr_6IA.js";import"./LinkButton-PZL0MtA6.js";import"./AppInfoRow-L9Ct41uR.js";import"./_IconPopover-CVwwBihx.js";import"./Popover-C5IN9cMT.js";import"./utils-ckqgl2AC.js";import"./index-xdr6vpDP.js";import"./index-DFgxXqr5.js";import"./Modal-KUCWN-hc.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C8vHIN9n.js";import"./useSlotProps-fAUM90Vx.js";import"./InfoIcon-WP7T-PZz.js";import"./Text-B8g7NM2g.js";import"./AppSettings-DLGgVhD4.js";import"./CogIcon-QfRJwl7x.js";import"./Badge-DH4M2IdE.js";import"./Badge-if7a42J8.js";import"./Chip-DtxHEqsM.js";import"./Chip-uL9TB9Pu.js";import"./Divider-CTYdoKka.js";import"./Divider-D8fiawbv.js";import"./dividerClasses-yonhPajF.js";import"./ThemeSwitchRow-B00tKUjH.js";import"./Skeleton-BJSorI16.js";import"./Skeleton-Dkff_NGZ.js";import"./TextField-xzu_DPyE.js";import"./useFormControl-xNPWxtva.js";import"./FormControl-X_hisCzp.js";import"./ListContext-BHAyDyBX.js";import"./useControlled-Cpi-ico-.js";import"./FormHelperText-DwzhRR8K.js";import"./MenuItem-TKTN96be.js";import"./ExpandMoreIcon-CcvmRhY8.js";import"./ListItem-C8W6Ik8d.js";import"./Toolbar-DSDblHdz.js";import"./Close-CIhAeHGU.js";import"./Popper-BT4vA2xI.js";import"./FormControlLabel-DLxcqeM9.js";import"./Edit-BvmZceNx.js";import"./SvgIcon-BrScsTXV.js";import"./TableRow-DHvRRQH1.js";import"./TableCell-_uNta8pa.js";import"./TreeView-BfiblcHE.js";import"./useThemeProps-Df8lhP5o.js";import"./index-C7V_D8MZ.js";import"./Collapse-CYu1yO86.js";import"./Dialog-DQAHdxrq.js";import"./DialogContent-DxaHQn4a.js";import"./Alert-C-ywUKjz.js";import"./useSlot-Cj9015tv.js";import"./LinearProgress-YzlvXZ7B.js";import"./LinearProgress-Cx-vdS0c.js";import"./Spinner-CFkE0pqS.js";import"./CircularProgress-Cu2BM2_M.js";import"./TextField-CMKqH5KV.js";import"./FormControl-BQbHDIJ4.js";import"./FormHelperText-Ca1ptZ2c.js";import"./LabeledSwitch-Z3aJeObb.js";import"./Switch-DDlhBOlC.js";import"./Switch-CLg_WwE6.js";import"./RadioGroup-Bf07373r.js";import"./ToggleButton-ClkVXijM.js";import"./ToggleButton-DMCkzxLU.js";import"./ToggleButtonGroup-B1_EfocB.js";import"./MenuItem-CFb7InxQ.js";import"./Tabs-C5IpzZMr.js";import"./AccordionSummary-Bp6-l77_.js";import"./Paper-CUW1p5Tc.js";import"./ErrorFallback-CETo05fh.js";import"./ErrorFallbackText-CMA-asQU.js";import"./ErrorFallbackWrapper-iwCi0O44.js";const kt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
  - \`lockedValues?: string[]\` — values the user cannot remove
- \`placeholder?: string\`
- \`disabled?: boolean\`
- \`error?: boolean\`
- \`helperText?: string\`
- \`fullWidth?: boolean\` (default \`true\`)
- \`size?: "small" | "medium"\` (default \`"small"\`)
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),r=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],u={render:()=>{const[e,t]=l.useState(null);return s(a,{label:"Select country",value:e,onChange:t,options:r,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=l.useState(r.find(o=>o.value==="AT")??null);return s(a,{label:"Select country",value:e,onChange:t,options:r})}},m={render:()=>{const[e,t]=l.useState(null);return s(a,{label:"Country",value:e,onChange:t,options:r,helperText:"Pick your country of residence",placeholder:"Search countries"})}},d={render:()=>{const[e]=l.useState(r.find(t=>t.value==="AU")??null);return s(a,{label:"Country",value:e,onChange:()=>{},options:r,disabled:!0})}},v={render:()=>{const[e,t]=l.useState([]),[o,n]=l.useState(null),[i,y]=l.useState(!1),$=async()=>{y(!0),await q(900),t(r),y(!1)};return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(a,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:i?"Loading…":"Start typing…",disabled:i,loading:i,onOpen:()=>{e.length===0&&!i&&$()},noOptionsText:i?"Fetching countries…":"No matches"}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=l.useState("AT"),o=r.find(n=>n.value===e)??null;return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(a,{label:"Country (form stores id)",options:r,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),p("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=l.useState([]),o=3;return p("div",{style:{display:"grid",gap:12,maxWidth:520},children:[s(a,{multiple:!0,label:`Pick up to ${o} countries`,options:r,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(i=>i.value===n.value)}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}},zt=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];var S,b,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} placeholder="Start typing…" />;
  }
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,A,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(countryOptions.find(o => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} />;
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var x,V,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={countryOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var M,w,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(U=v.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var W,j,k;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,P,F;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(P=h.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};export{v as AsyncLoading,u as Basic,d as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,m as WithHelperText,zt as __namedExportsOrder,kt as default};
