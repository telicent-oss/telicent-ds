import{r as l,b as p,a as s}from"./iframe-CkNiiXLn.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import{g as i}from"./UserProfileContent-fQaFq2Ij.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dyz6JNkZ.js";import"./clsx-B-dksMZM.js";import"./styled-76ib0pne.js";import"./extendSxProp-BK5IVCsk.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BqURM9Ak.js";import"./TransitionGroupContext-B2d67udZ.js";import"./MapToggleButtonPresentational-l2lmOHYk.js";import"./Remove-Ct8rdzlS.js";import"./createSvgIcon-iDztRpkl.js";import"./SvgIcon-B-DccnQT.js";import"./IconButton-CuVEOxhO.js";import"./Paper-Co2ZhE_m.js";import"./Box-05pko2XY.js";import"./XIcon-BnpOzrUx.js";import"./Stack-CsP74eLy.js";import"./styled-BvHWXNqt.js";import"./createStyled-Cvg3k3VR.js";import"./useThemeProps-iEI_UVVT.js";import"./Typography-DuOx53ON.js";import"./Box-YjUNvW-N.js";import"./Container-DJ50h9Ca.js";import"./FlexBox-DuXm_8u8.js";import"./Brand-Dm6iRMuI.js";import"./IconButton-Dodp6b5p.js";import"./LinkButton-C8qoOrAY.js";import"./AppInfoRow-54zgxE88.js";import"./_IconPopover-ChFYTO37.js";import"./Popover-CHk_5JT_.js";import"./utils-DUL0G8fu.js";import"./index-DahoM0Dd.js";import"./index-DmVtciI9.js";import"./Modal-i00kY4hp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CMe9gMdQ.js";import"./useSlotProps-BLPs0jNc.js";import"./InfoIcon-CNZtHU0c.js";import"./Text-rScatiJx.js";import"./AppSettings-C58RzYiC.js";import"./CogIcon-CUgKmZnu.js";import"./Badge-Cf6QQjYx.js";import"./Badge-DcNyFGRo.js";import"./Chip-CzIXPAM6.js";import"./Chip-B_4aGR8d.js";import"./Divider-BBGr4h1z.js";import"./Divider-CupyNWLf.js";import"./dividerClasses-A0fl45Fm.js";import"./ThemeSwitchRow-DgBfNZR_.js";import"./Skeleton-CLKvWyBu.js";import"./Skeleton-DB4Iig_r.js";import"./TextField-jGTAB-zs.js";import"./useFormControl-Cy5_hCFa.js";import"./FormControl-Aq3S65NU.js";import"./ListContext-Dy1fZMht.js";import"./useControlled-BJ9psZrO.js";import"./FormHelperText-BkLGYuAu.js";import"./MenuItem-IabHC3U2.js";import"./ExpandMoreIcon-7GR4ETlZ.js";import"./ListItem-DfLiUxe7.js";import"./Toolbar-B-fWGjIK.js";import"./Close-3Y3Q-Wdq.js";import"./Popper-C_4fisPz.js";import"./FormControlLabel-DHtC2mPb.js";import"./Edit-CjwvC8Or.js";import"./SvgIcon-DSEb6mw_.js";import"./TableRow-CUz_YY1F.js";import"./TableCell-Db5UJInr.js";import"./TreeView-YO-ZddkQ.js";import"./useThemeProps-BIQFXi-5.js";import"./index-DspNy_CZ.js";import"./Collapse-renE2O0C.js";import"./Dialog-CpFNgoFo.js";import"./DialogContent-DaXl4CQu.js";import"./Alert-BoTqSYeo.js";import"./useSlot-k-KZgeup.js";import"./LinearProgress-Dy5_CdNI.js";import"./LinearProgress-DMwXeD9I.js";import"./Spinner-CT2AH6u2.js";import"./CircularProgress-BTnJNT1d.js";import"./TextField-BjCIF13p.js";import"./FormControl-CXubaWvq.js";import"./FormHelperText-BnJKYq1n.js";import"./LabeledSwitch-BNOamzBb.js";import"./Switch-DEcm6u5p.js";import"./Switch-C-S4rpDT.js";import"./RadioGroup-9Q56424I.js";import"./ToggleButton-BXKvGfFv.js";import"./ToggleButton-6UcPHypp.js";import"./ToggleButtonGroup-DJ_gF3ao.js";import"./MenuItem-72aw9qZO.js";import"./Tabs-CSxADV3D.js";import"./AccordionSummary-CkdrW3Ti.js";import"./Paper-Dv3fWX-M.js";import"./ErrorFallback-IkkxBrLa.js";import"./ErrorFallbackText-DyiZWMdz.js";import"./ErrorFallbackWrapper-iVC7iWcE.js";const zt={title:"Inputs/Autocomplete",component:i,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
