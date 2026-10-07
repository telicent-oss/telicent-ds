import{r as a,b as p,a as s}from"./iframe-DuvuyOYT.js";import{g as r}from"./DropdownButton-Cgp0ynRQ.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-lDlqNob7.js";import"./SvgIcon-3Tw63ijk.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-Cho-jsTU.js";import"./extendSxProp-JkKasx3H.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DvEY6SKk.js";import"./Box-B0L08xCP.js";import"./Box-CdEzcdGG.js";import"./Container-UrugBBKw.js";import"./styled-DgGNM0V5.js";import"./createStyled-BKTeOdVL.js";import"./useThemeProps-BobYEJQ-.js";import"./FlexBox-TPzjGHTu.js";import"./Stack-BvZMuuuV.js";import"./Typography-DktY0xgL.js";import"./Paper-DUkfPqTN.js";import"./CogIcon-C7ffmALX.js";import"./InfoIcon-1q2hApFd.js";import"./ExpandMoreIcon-Bk88I7pG.js";import"./ThemeSwitchRow-CSFvN-ub.js";import"./index-CI6Kqv0h.js";import"./Text-L7vd9pUz.js";import"./AdapterDayjs-2T0rZWQj.js";import"./useThemeProps--eCMneWE.js";import"./Modal-ztgM1uVX.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./resolveComponentProps-3edEfYXu.js";import"./index-Bas_o1qY.js";import"./utils-B4ukibcw.js";import"./Popover-BOr5Tnx-.js";import"./TextField-CUB3zYB0.js";import"./useFormControl-B7qRo7M3.js";import"./FormControl-B_bhgqKA.js";import"./ListContext-DBsT2SYb.js";import"./useControlled-ebES1RRU.js";import"./createSvgIcon-D8oPFoN7.js";import"./FormHelperText-DHwUp4cY.js";import"./IconButton-rZ6cns_p.js";import"./ButtonBase-B-XK-vT0.js";import"./DialogContent-D43DrM7u.js";import"./Button-BnMbhCon.js";import"./Chip-DXBg8N5K.js";import"./MenuItem-DqsdRt18.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Ck2hZc1U.js";import"./Chip-C-mRw_Vp.js";import"./Divider-BcYVCAXY.js";import"./Divider-D68Fa2cD.js";import"./TreeView-DqxVlk-o.js";import"./Collapse-BraLEtjm.js";import"./useSlot-C-CG0yuW.js";import"./AppInfoRow-D2P6hF0a.js";import"./AppSettings-BOXvpGNS.js";import"./SvgIcon-Bc8kLn_o.js";import"./TableRow-gyTKCCh4.js";import"./LinearProgress-dxBLqzdG.js";import"./Spinner-Ed6-sLfr.js";import"./Dialog-DoKSgzIK.js";import"./MapToggleButtonPresentational-DoCeO59m.js";import"./Remove-IX44AOl9.js";import"./Alert-BZ_em7ms.js";import"./ToggleButton-DXPBOEid.js";import"./LinkButton-C6Iwaywt.js";import"./TextField-BbDqVZmX.js";import"./Switch-DAw3yXht.js";import"./LabeledSwitch-D25ybaX8.js";import"./DatePicker-Br58-B3a.js";import"./DateTimePicker-BgSSeO5r.js";import"./FormControl-DiFEjGcX.js";import"./FormHelperText-DzVT_Kzu.js";import"./MenuItem-Db2sbs9g.js";import"./AccordionDetails---llt0mU.js";import"./Paper-D2SNeHbc.js";import"./ErrorFallback-C6Uj6zhy.js";import"./ErrorFallbackText-CoG67Tay.js";import"./ErrorFallbackWrapper-kKw7iFhr.js";import"./Brand-Bj9k9vyT.js";import"./Edit-DPnzdP9f.js";const bt={title:"Inputs/Autocomplete",component:r,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
