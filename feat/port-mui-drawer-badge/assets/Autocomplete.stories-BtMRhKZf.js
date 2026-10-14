import{r,b as p,a as s}from"./iframe-H00w80Or.js";import{g as a}from"./DropdownButton-dp3UZT7u.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-BszsM4qE.js";import"./SvgIcon-62q7EVQn.js";import"./clsx-B-dksMZM.js";import"./styled-0iMzvdEp.js";import"./extendSxProp-DjNpUFg0.js";import"./composeClasses-fLhin0tj.js";import"./Box-BPWUYpPq.js";import"./Box-PGTe_iKL.js";import"./Container-xAch6yKK.js";import"./styled-DEANjgQR.js";import"./createStyled-BS21KARw.js";import"./useThemeProps-BwLca_Tx.js";import"./FlexBox-CO2h70Gz.js";import"./Stack-D4ylMwmH.js";import"./Typography-BeNp4hZk.js";import"./Paper-ufb6o8lk.js";import"./CogIcon-yzQkEaTn.js";import"./InfoIcon-KXnvf3xk.js";import"./ExpandMoreIcon-CmOQf-OW.js";import"./ThemeSwitchRow-DC0I62HD.js";import"./index-DroXl4b1.js";import"./Text-wA3ZXyxz.js";import"./ListItem-CIX3erCJ.js";import"./ListContext-JPB_oyLb.js";import"./FormControl-DgKeLVgZ.js";import"./useFormControl-IvUXOtj3.js";import"./TransitionGroupContext-BzdPLesw.js";import"./resolveComponentProps-BEZJTj5A.js";import"./ButtonBase-q86Xzq01.js";import"./Toolbar-B8bYqEFU.js";import"./TextField-gd7MEMhf.js";import"./Modal-4pBuhtQR.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-lvm_v48l.js";import"./index-CtDoTQ8v.js";import"./utils-D2gZUpWj.js";import"./Popover-FTtalKAU.js";import"./useControlled-Bn2nyR_9.js";import"./createSvgIcon-CiVlnnHz.js";import"./FormHelperText-Byk_ugW2.js";import"./Close-BjCtc8xA.js";import"./Popper-4ejOxVhQ.js";import"./Badge-C0V1iWjJ.js";import"./Chip-CIeLwZjP.js";import"./IconButton-B-TGVwcE.js";import"./FormControlLabel-DT2ODpRX.js";import"./MenuItem-DdlDr0ZH.js";import"./dividerClasses-BFp8x9AY.js";import"./IconButton-DlbSnkMX.js";import"./Badge-D-W6c0gw.js";import"./Chip-DKIonNZh.js";import"./Divider-pZ3IXV4I.js";import"./Divider-dkPyhD-7.js";import"./TreeView-DIg7qFOg.js";import"./useThemeProps-C79kCelR.js";import"./Collapse-BhPshysv.js";import"./useSlot-28dyUGlP.js";import"./AppInfoRow-kOozOQgV.js";import"./_IconPopover-DihhQVMX.js";import"./AppSettings-D-4IsWrA.js";import"./SvgIcon-8QThMI5m.js";import"./TableRow-uDW1Sb-b.js";import"./TableCell-DFC8CWhZ.js";import"./LinearProgress-DtO0fbZP.js";import"./LinearProgress-B2fSExrt.js";import"./Spinner-CF6arQiu.js";import"./CircularProgress-CjEAu3fq.js";import"./Dialog-C8r9bZj8.js";import"./DialogContent-3cYYjIfQ.js";import"./Button-C_DxOEgn.js";import"./MapToggleButtonPresentational-BZf2zw2H.js";import"./Remove-D7AlsKhh.js";import"./Alert-BlUYh8NQ.js";import"./ToggleButton-CTbh2YDH.js";import"./ToggleButton-BENVC70c.js";import"./ToggleButtonGroup-BrXjNDoG.js";import"./LinkButton-DU5juLDL.js";import"./TextField-vmXQ439n.js";import"./Switch-CZks5nrW.js";import"./Switch-nDSeyWnc.js";import"./LabeledSwitch-CPePvXi_.js";import"./RadioGroup-QDFk1CAT.js";import"./FormControl-Ddw-GhPc.js";import"./FormHelperText-Bmn0upHu.js";import"./Tabs-DPrcsUlF.js";import"./MenuItem-RCWgR922.js";import"./AccordionDetails-Dbo1O38p.js";import"./Paper-BJSr6UaX.js";import"./ErrorFallback-C0XWCyRr.js";import"./ErrorFallbackText-BCpI9Vcj.js";import"./ErrorFallbackWrapper-LbAdlq-T.js";import"./Brand-BCpYs0jj.js";import"./Edit-B-OE2jTa.js";const Dt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
