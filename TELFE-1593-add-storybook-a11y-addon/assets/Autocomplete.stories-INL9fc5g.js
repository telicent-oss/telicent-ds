import{r as a,a as u,j as i}from"./iframe-DiOxHtDb.js";import{A as r}from"./DropdownButton-D5H4ZN6Z.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DdMLfs8b.js";import"./createSvgIcon-Bct_3USy.js";import"./generateUtilityClass-BGBNebZi.js";import"./styled-BnW9PuXP.js";import"./generateUtilityClasses-cqFKly7s.js";import"./useTheme-CVqTLjnG.js";import"./Box-BgHTu-7g.js";import"./Box-Bw2aXqxB.js";import"./Container-KdOlOXUt.js";import"./styled-CBtLOs7W.js";import"./createStyled-DJUAM10Y.js";import"./useThemeProps-D92Ph84F.js";import"./Stack-DMVCg2VL.js";import"./Typography-DD85r3aG.js";import"./Paper-DD8Uzrbd.js";import"./useThemeProps-D5iojeUJ.js";import"./Text-lve70lr8.js";import"./AdapterDayjs-Bw8jeCZr.js";import"./Modal-D1jGZMpX.js";import"./utils-Cpn5Nc-9.js";import"./TransitionGroupContext-B0zfRRgr.js";import"./index-DV6lSy4S.js";import"./resolveComponentProps-DdsoJ6q3.js";import"./TextField-DJduElX5.js";import"./useFormControl-gW4Kn0M5.js";import"./IconButton-BBPQ8wpR.js";import"./ButtonBase-Bf3wJpyF.js";import"./DialogContent-WZ5vlnc6.js";import"./Button-CBCE0jtS.js";import"./Chip-DxnlP6yz.js";import"./DateTimePicker-E72uzE7D.js";import"./Divider-BAZX2ZXo.js";import"./Chip-ueCpo9tP.js";import"./Divider-BRU7MloR.js";import"./TreeView-BEBQjpEx.js";import"./Close-DyblsOO8.js";import"./LinearProgress-Ca-5RCUI.js";import"./Spinner-DBD_1EOk.js";import"./Dialog-CV47DXVk.js";import"./MapToggleButtonPresentational-CY2HZx6p.js";import"./Remove-BolgW9Tm.js";import"./TextField-CODSynKi.js";import"./Switch-BaPgqioG.js";import"./DatePicker-DvcNDPm0.js";import"./LinkButton-AP67oc2f.js";import"./Paper-CNPN9Zh5.js";import"./ErrorFallback-BmSWrFlV.js";import"./ErrorFallbackText-DVOaDD_c.js";import"./ErrorFallbackWrapper-BCV9v7sN.js";import"./Brand-ClGGejsO.js";import"./constants-BXamS6jK.js";import"./Edit-DgM3068Z.js";const Re={title:"Inputs/Autocomplete",component:r,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),l=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],p={render:()=>{const[e,t]=a.useState(null);return i(r,{label:"Select country",value:e,onChange:t,options:l,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=a.useState(l.find(o=>o.value==="AT")??null);return i(r,{label:"Select country",value:e,onChange:t,options:l})}},d={render:()=>{const[e,t]=a.useState(null);return i(r,{label:"Country",value:e,onChange:t,options:l,helperText:"Pick your country of residence",placeholder:"Search countries"})}},m={render:()=>{const[e]=a.useState(l.find(t=>t.value==="AU")??null);return i(r,{label:"Country",value:e,onChange:()=>{},options:l,disabled:!0})}},v={render:()=>{const[e,t]=a.useState([]),[o,n]=a.useState(null),[s,y]=a.useState(!1),$=async()=>{y(!0),await q(900),t(l),y(!1)};return u("div",{style:{display:"grid",gap:12,maxWidth:420},children:[i(r,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:s?"Loading…":"Start typing…",disabled:s,loading:s,onOpen:()=>{e.length===0&&!s&&$()},noOptionsText:s?"Fetching countries…":"No matches"}),u("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=a.useState("AT"),o=l.find(n=>n.value===e)??null;return u("div",{style:{display:"grid",gap:12,maxWidth:420},children:[i(r,{label:"Country (form stores id)",options:l,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),u("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=a.useState([]),o=3;return u("div",{style:{display:"grid",gap:12,maxWidth:520},children:[i(r,{multiple:!0,label:`Pick up to ${o} countries`,options:l,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(s=>s.value===n.value)}),u("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}};var S,b,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} placeholder="Start typing…" />;
  }
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var A,f,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(countryOptions.find(o => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} />;
  }
}`,...(O=(f=c.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,T,V;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={countryOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var M,w,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<Option | null>(countryOptions.find(o => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={countryOptions} disabled />;
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,U,j;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(U=v.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var D,W,z;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var P,k,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Be=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];export{v as AsyncLoading,p as Basic,m as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,d as WithHelperText,Be as __namedExportsOrder,Re as default};
