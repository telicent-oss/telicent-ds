import{r as l,b as p,a as s}from"./iframe-Cq2F8nnt.js";import{g as i}from"./EntityList-DaLKgoBW.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-C04F2Oi9.js";import"./Stack-C0kkN408.js";import"./styled-BFu-il5r.js";import"./extendSxProp-C_3gOtzH.js";import"./clsx-B-dksMZM.js";import"./styled-DanlI2xt.js";import"./createStyled-Ch69_NI_.js";import"./useThemeProps-P0CvXcYF.js";import"./composeClasses-fLhin0tj.js";import"./Text-CBOSUAEh.js";import"./Typography-BwTJfg_0.js";import"./ListContext-BAusblW9.js";import"./ListItem-DKE093t7.js";import"./FormControl-BUNS3ShE.js";import"./useFormControl-CV4aeut4.js";import"./TransitionGroupContext-GhvSAu4t.js";import"./resolveComponentProps-Cqm51eMl.js";import"./ButtonBase-Dgq-9fM-.js";import"./Toolbar-oXmRnOPk.js";import"./TextField-DwlpbE60.js";import"./Modal-C_ZAcMul.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Cvu7cjI6.js";import"./index-Yf-oiQ9v.js";import"./utils-B_pcJLAo.js";import"./Popover-CXsS9GGj.js";import"./Paper-u6GRQMwm.js";import"./useControlled-B1ajGRtS.js";import"./createSvgIcon-1goxyuUk.js";import"./SvgIcon-TnW6j3SK.js";import"./FormHelperText-BmifT0EA.js";import"./Close-CBbLzOeS.js";import"./Popper-C0YrUmlc.js";import"./Badge-BZpNOhc9.js";import"./Chip-DKKqjRmN.js";import"./IconButton-C1aFxNcW.js";import"./FormControlLabel-Be4X22x1.js";import"./MenuItem-DceuxKDN.js";import"./dividerClasses-C6GToXYV.js";import"./Button-JWos0z8D.js";import"./MapToggleButtonPresentational-BFzQ5gPJ.js";import"./Remove-B3S6saWd.js";import"./Box-BQK-RQwY.js";import"./ExpandLessIcon-Baa6e0mA.js";import"./Box-CAEYLSso.js";import"./Container-DqN7QDyr.js";import"./CogIcon-C7NF5K8t.js";import"./InfoIcon-DPqgxdQZ.js";import"./ExpandMoreIcon-DNBS7Ae_.js";import"./ThemeSwitchRow-9homoP8I.js";import"./index-D2fxJFUo.js";import"./IconButton-Ci8BXdvE.js";import"./Badge-_Ks2Ec9c.js";import"./Chip-1H0HG8HA.js";import"./Divider-sULGPtF-.js";import"./Divider-Bbde2_fu.js";import"./TreeView-GAhKaiG4.js";import"./useThemeProps-Dr3B81aN.js";import"./Collapse-BYeD06gr.js";import"./useSlot-CReHhYw8.js";import"./AppInfoRow-_l5cjwhy.js";import"./_IconPopover-CYGOjWq8.js";import"./AppSettings-BTMPNOva.js";import"./SvgIcon-BI9-VwwI.js";import"./TableRow-DlKh2N0Z.js";import"./TableCell-CEBLf8Yr.js";import"./Skeleton-BpIhNe2X.js";import"./Skeleton-Du6dERAP.js";import"./Edit-CXQT9gM2.js";import"./LinearProgress-G9ObWG-G.js";import"./LinearProgress-Crs6Zu4l.js";import"./Spinner-DzvFtaD2.js";import"./CircularProgress-BgI1_Xtz.js";import"./Dialog-DhKmN4qh.js";import"./DialogContent-rtf5aXKs.js";import"./Alert-CE5w6l2H.js";import"./ToggleButton-Bub8BXIU.js";import"./ToggleButton-CAEgdqR9.js";import"./ToggleButtonGroup-D-3xBYH1.js";import"./LinkButton-BtFJ8Ptt.js";import"./TextField-DLAYsvZY.js";import"./Switch-Dic_zt7r.js";import"./Switch-DvSveS_U.js";import"./LabeledSwitch-BYrzyMPQ.js";import"./RadioGroup-C-Ze-TFB.js";import"./FormControl-Doz5KOXY.js";import"./FormHelperText-BXOFl--T.js";import"./Tabs-V9ydvoHK.js";import"./MenuItem-DnUBD1eV.js";import"./AccordionDetails-gBwhydje.js";import"./Paper-DR1fCpm6.js";import"./ErrorFallback-BK4szP6K.js";import"./ErrorFallbackText-DH69geC6.js";import"./ErrorFallbackWrapper-Dy-bg1rq.js";import"./Brand-B5FmdXmX.js";const jt={title:"Inputs/Autocomplete",component:i,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
        `}}}},q=e=>new Promise(t=>setTimeout(t,e)),r=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],u={render:()=>{const[e,t]=l.useState(null);return s(i,{label:"Select country",value:e,onChange:t,options:r,placeholder:"Start typing…"})}},c={render:()=>{const[e,t]=l.useState(r.find(o=>o.value==="AT")??null);return s(i,{label:"Select country",value:e,onChange:t,options:r})}},m={render:()=>{const[e,t]=l.useState(null);return s(i,{label:"Country",value:e,onChange:t,options:r,helperText:"Pick your country of residence",placeholder:"Search countries"})}},d={render:()=>{const[e]=l.useState(r.find(t=>t.value==="AU")??null);return s(i,{label:"Country",value:e,onChange:()=>{},options:r,disabled:!0})}},v={render:()=>{const[e,t]=l.useState([]),[o,n]=l.useState(null),[a,y]=l.useState(!1),$=async()=>{y(!0),await q(900),t(r),y(!1)};return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(i,{label:"Country (async)",options:e,value:o,onChange:n,placeholder:a?"Loading…":"Start typing…",disabled:a,loading:a,onOpen:()=>{e.length===0&&!a&&$()},noOptionsText:a?"Fetching countries…":"No matches"}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected: ",o?`${o.label} (${o.value})`:"—"]})]})}},g={render:()=>{const[e,t]=l.useState("AT"),o=r.find(n=>n.value===e)??null;return p("div",{style:{display:"grid",gap:12,maxWidth:420},children:[s(i,{label:"Country (form stores id)",options:r,value:o,onChange:n=>t((n==null?void 0:n.value)??null),placeholder:"Start typing…"}),p("div",{style:{fontSize:12,opacity:.8},children:["Form value (id): ",e??"—"]})]})}},h={render:()=>{const[e,t]=l.useState([]),o=3;return p("div",{style:{display:"grid",gap:12,maxWidth:520},children:[s(i,{multiple:!0,label:`Pick up to ${o} countries`,options:r,value:e,onChange:t,placeholder:"Choose…",getOptionDisabled:n=>e.length>=o&&!e.some(a=>a.value===n.value)}),p("div",{style:{fontSize:12,opacity:.8},children:["Selected (",e.length,"/",o,"): ",e.length?e.map(n=>n.label).join(", "):"—"]})]})}};var S,b,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const zt=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];export{v as AsyncLoading,u as Basic,d as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,m as WithHelperText,zt as __namedExportsOrder,jt as default};
