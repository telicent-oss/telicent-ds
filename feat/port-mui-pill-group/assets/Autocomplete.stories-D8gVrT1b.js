import{r as a,b as p,a as s}from"./iframe-DoV3QjMy.js";import{g as r}from"./DropdownButton-BhbMAESU.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-wPSuN2L4.js";import"./SvgIcon-LfRk_hx7.js";import"./clsx-B-dksMZM.js";import"./styled-CPIBH1-1.js";import"./extendSxProp-fXUqE6Bn.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-R2nn2wZz.js";import"./Box-BOj_am_D.js";import"./Box-i9wHmHIK.js";import"./Container-BCAp1nsC.js";import"./styled-B-12PeFE.js";import"./createStyled-eXdYsONq.js";import"./useThemeProps-TdGp5_1L.js";import"./FlexBox-DBCcJIxQ.js";import"./Stack-BdMqYFWr.js";import"./Typography-C5M9lYVd.js";import"./Paper-D8EuXHEg.js";import"./CogIcon-BrM3bM08.js";import"./InfoIcon-CiYXzfUV.js";import"./ExpandMoreIcon-B2nIi4ex.js";import"./ThemeSwitchRow-FSCnqxc5.js";import"./index-CQhMpfvr.js";import"./Text-5OLsLL-X.js";import"./AdapterDayjs-BKhrlOSN.js";import"./useThemeProps-BOXpzJ5n.js";import"./Modal-DOjyMiRU.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-D3Q5HB-K.js";import"./resolveComponentProps-Y7s_nXSn.js";import"./index-DW2iM9tp.js";import"./utils-wGaMTb_1.js";import"./Popover-DGWDneoN.js";import"./TextField-CBauxFJv.js";import"./useFormControl-BBJmWV5Z.js";import"./FormControl-NT9TewQW.js";import"./ListContext-DSsdSFYa.js";import"./useControlled-D4ltESLF.js";import"./createSvgIcon-BXWXI27a.js";import"./FormHelperText-DH_PsvUH.js";import"./IconButton-Do8WBZlm.js";import"./ButtonBase-B3vut5uf.js";import"./DialogContent-Cxk4mq_R.js";import"./Button-Q5m5wgGr.js";import"./Chip-ChxBfEd0.js";import"./MenuItem-Bi0nOKmr.js";import"./dividerClasses-DWbaFYr4.js";import"./_IconPopover-3JecEz2K.js";import"./Chip-DJ5vTtwO.js";import"./Divider-DRlkiuEy.js";import"./Divider-B_fO4zSk.js";import"./TreeView-BoweCL_Q.js";import"./Collapse-CsdAK5Wv.js";import"./useSlot-BdGIBGt4.js";import"./AppInfoRow-LLJ-5Iyu.js";import"./AppSettings-BRMLiFkJ.js";import"./SvgIcon-DWBoWjNh.js";import"./TableRow-CeRToYDZ.js";import"./LinearProgress-B2ekBvrP.js";import"./Spinner-CSc35F_z.js";import"./Dialog-ypZzlQrl.js";import"./MapToggleButtonPresentational-DTPSB-td.js";import"./Remove-DZnC4XqL.js";import"./Alert-DNKQv9Xy.js";import"./ToggleButton-CcNjzFiL.js";import"./ToggleButtonGroup-CBnYeWXB.js";import"./LinkButton-RAsf-V-S.js";import"./TextField-nss9Ddfr.js";import"./Switch-Dv-Mdd5-.js";import"./LabeledSwitch-CGdobyKV.js";import"./DatePicker-D3z9p8TY.js";import"./DateTimePicker-C5tnYF0t.js";import"./FormControl-Dx2UVhU_.js";import"./FormHelperText-DzTrQ05w.js";import"./MenuItem-98KVhiDY.js";import"./AccordionDetails-nJFr__g1.js";import"./Paper-Ci4OLb79.js";import"./ErrorFallback-ChSIl1-_.js";import"./ErrorFallbackText-DVL8h8i-.js";import"./ErrorFallbackWrapper-CrN-k4Ys.js";import"./Brand-CDQ5BSnl.js";import"./Edit-CXAUVhGa.js";const bt={title:"Inputs/Autocomplete",component:r,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),l=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],u={render:()=>{const[e,t]=a.useState(null);return s(r,{label:"Select country",value:e,onChange:t,options:l,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=a.useState(l.find(o=>o.value==="AT")??null);return s(r,{label:"Select country",value:e,onChange:t,options:l})}},d={render:()=>{const[e,t]=a.useState(null);return s(r,{label:"Country",value:e,onChange:t,options:l,helperText:"Pick your country of residence",placeholder:"Search countries"})}},m={render:()=>{const[e]=a.useState(l.find(t=>t.value==="AU")??null);return s(r,{label:"Country",value:e,onChange:()=>{},options:l,disabled:!0})}},v={render:()=>{const[e,t]=a.useState([]),[o,n]=a.useState(null),[i,y]=a.useState(!1),$=async()=>{y(!0),await q(900),t(l),y(!1)};return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(r,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:i?"Loading…":"Start typing…",disabled:i,loading:i,onOpen:()=>{e.length===0&&!i&&$()},noOptionsText:i?"Fetching countries…":"No matches"}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=a.useState("AT"),o=l.find(n=>n.value===e)??null;return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(r,{label:"Country (form stores id)",options:l,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),p("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=a.useState([]),o=3;return p("div",{style:{display:"grid",gap:12,maxWidth:520},children:[s(r,{multiple:!0,label:`Pick up to ${o} countries`,options:l,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(i=>i.value===n.value)}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}};var S,b,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Ct=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];export{v as AsyncLoading,u as Basic,m as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,d as WithHelperText,Ct as __namedExportsOrder,bt as default};
