import{r as l,b as p,a as s}from"./iframe-BrOrNHEh.js";import{g as i}from"./EntityList-H_0K-dzQ.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-D5UCFB1S.js";import"./Stack-CkS2dy7z.js";import"./styled-B7Gun_NM.js";import"./extendSxProp-Duzm6Lca.js";import"./clsx-B-dksMZM.js";import"./styled-Bt2mTeFf.js";import"./createStyled-BOu-1Jtm.js";import"./useThemeProps-Cz1Ild6z.js";import"./composeClasses-fLhin0tj.js";import"./Text-DFwA3vR5.js";import"./Typography-Dpm-p6ja.js";import"./ListContext-7u-aoan4.js";import"./ListItem-KJHx1wCT.js";import"./FormControl-DZ_EUKmb.js";import"./useFormControl-BruFV-Qx.js";import"./TransitionGroupContext-Dt8HhoUr.js";import"./resolveComponentProps-DmG19-z7.js";import"./ButtonBase-DftoHfZR.js";import"./Toolbar-hT1KjkR5.js";import"./TextField-B2xiZYVb.js";import"./Modal-Cq6MPz4D.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-DGBa8jx5.js";import"./index-DbLrVmhX.js";import"./index-DI5L87ft.js";import"./utils-weDOyctD.js";import"./Popover-fh7sV9SA.js";import"./Paper-vuiB8TOC.js";import"./useControlled-BjktlrWs.js";import"./createSvgIcon-BVz2CBJw.js";import"./SvgIcon-oJ7O5BsC.js";import"./FormHelperText-CVrFiion.js";import"./Close-C1Ajlgcl.js";import"./Popper-BMlA55IB.js";import"./Badge-LDV7duPO.js";import"./Chip-FRFfDpZp.js";import"./IconButton-D5nyRFzv.js";import"./FormControlLabel-Ci79UUIH.js";import"./MenuItem-DmQEqCQc.js";import"./dividerClasses-Cf_Zsr30.js";import"./Button-CSBjMYNz.js";import"./MapToggleButtonPresentational-DjTLtwPH.js";import"./Remove-BXICJJmX.js";import"./Box-BfS4SYDH.js";import"./ExpandLessIcon-BzZ4XDrP.js";import"./Box-CLS-9xVu.js";import"./Container-BQSx0dcU.js";import"./CogIcon-DLVK3cal.js";import"./InfoIcon-BSsggCtY.js";import"./ExpandMoreIcon-hM54sdJa.js";import"./ThemeSwitchRow-CXKB4Cad.js";import"./index-DAO22fas.js";import"./IconButton-DY0MGdyy.js";import"./Badge-BMrbfaBl.js";import"./Chip-BkKs13LT.js";import"./Divider-EangdiJD.js";import"./Divider-B8FqOrn9.js";import"./TreeView-CY6JI_wL.js";import"./useThemeProps-DdH0afsQ.js";import"./Collapse-BxbbjR-2.js";import"./useSlot-T2OhbpiU.js";import"./AppInfoRow-BoeKISh2.js";import"./_IconPopover-M7QzOQvw.js";import"./AppSettings-8Bz0ezeY.js";import"./SvgIcon-M1RTRqad.js";import"./TableRow-B288CNJ8.js";import"./TableCell--9jHtUYw.js";import"./Skeleton-g9QI3QGP.js";import"./Skeleton-F5pzjQNl.js";import"./Edit-4mo734kz.js";import"./LinearProgress-Dhxq7sJJ.js";import"./LinearProgress-BFSiQRwS.js";import"./Spinner-DB7mFyLO.js";import"./CircularProgress-ClV7g0pC.js";import"./Dialog-B_-7JoVZ.js";import"./DialogContent-R-0O7NC9.js";import"./Alert-C2LM2JGB.js";import"./ToggleButton-h1qrIylX.js";import"./ToggleButton-RaOfILww.js";import"./ToggleButtonGroup-DJERzG3r.js";import"./LinkButton-tyFKol7f.js";import"./TextField--1bCY3MA.js";import"./Switch-v5jAUzas.js";import"./Switch-DUyEOTYL.js";import"./LabeledSwitch-xfpQoVPs.js";import"./RadioGroup-BxGwEAqL.js";import"./FormControl-DfXZkWqG.js";import"./FormHelperText-aeiOJUMu.js";import"./Tabs-BjpX6Btc.js";import"./MenuItem-DhoBzDNC.js";import"./AccordionDetails-CYEP5uVx.js";import"./Paper-oJZ4x_5E.js";import"./ErrorFallback-Bx0JnRhm.js";import"./ErrorFallbackText-B1EPTBkB.js";import"./ErrorFallbackWrapper-C9HUOcDg.js";import"./Brand-Dz7COHp9.js";const zt={title:"Inputs/Autocomplete",component:i,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
