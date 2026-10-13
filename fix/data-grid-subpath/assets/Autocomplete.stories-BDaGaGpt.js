import{r,b as p,a as s}from"./iframe-BmJaKzpA.js";import{g as a}from"./DropdownButton-QvXMWf5g.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-D5NkrVUA.js";import"./SvgIcon-DbW9RRsY.js";import"./clsx-B-dksMZM.js";import"./styled-CFQ-Ztvf.js";import"./extendSxProp-Cqpi5UuK.js";import"./composeClasses-fLhin0tj.js";import"./Box-P52OPraP.js";import"./Box-B2o-aQ44.js";import"./Container-7dGm0tRY.js";import"./styled-CPt569yI.js";import"./createStyled-Bffddmhk.js";import"./useThemeProps-B16XkqYe.js";import"./FlexBox-DgaudmOI.js";import"./Stack-BjArtnwr.js";import"./Typography-Bjj7o5JG.js";import"./Paper-B5tHWr3y.js";import"./CogIcon-BGSwLsgD.js";import"./InfoIcon-C5-JlXMO.js";import"./ExpandMoreIcon-BN4cT-yD.js";import"./ThemeSwitchRow-CfV4zxDI.js";import"./index-lCqMlpSx.js";import"./Text-B1HWYqxs.js";import"./ListItem-BfrYHW-q.js";import"./ListContext-BjCFAdrG.js";import"./FormControl-CFg6_W5y.js";import"./useFormControl-pjOXLDlB.js";import"./TransitionGroupContext-CMgFzCdF.js";import"./resolveComponentProps-Dj3a59a6.js";import"./ButtonBase-BFPoEEs2.js";import"./Toolbar-jD6vFalY.js";import"./TextField--jGjhfWz.js";import"./Modal-C75qnOpZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DhKKRKi1.js";import"./utils-DZMG5O1d.js";import"./Popover-GM9dkxAx.js";import"./useControlled-BUnwEBDo.js";import"./createSvgIcon-CpJqzDT6.js";import"./FormHelperText-DTG0QA_j.js";import"./Close-amllp88t.js";import"./Popper-CifQJid9.js";import"./Chip-CgO8bUZN.js";import"./IconButton-DWTOtJ52.js";import"./FormControlLabel-3XwJheib.js";import"./MenuItem-CuIuo8np.js";import"./dividerClasses-BiY2d609.js";import"./_IconPopover-1aG3b1zb.js";import"./Chip-Ql9O3aun.js";import"./Divider-CTM8S9Dj.js";import"./Divider-CemJJ6Wh.js";import"./TreeView-CtojhVRp.js";import"./useThemeProps-BowsGwXu.js";import"./Collapse-CDHPxM_N.js";import"./useSlot-RSZxcDJ_.js";import"./AppInfoRow-B-b4XEQG.js";import"./AppSettings-euvhcHhi.js";import"./SvgIcon-ury5YQzT.js";import"./TableRow-C-dHDyK3.js";import"./TableCell-2kqeg-ZR.js";import"./LinearProgress-CkPmAm-N.js";import"./LinearProgress-DWspQSET.js";import"./Spinner-B8w9B477.js";import"./CircularProgress-Bpcy9xeq.js";import"./Dialog-BjU2rSW3.js";import"./DialogContent-b24aC058.js";import"./Button-CgVDEB-f.js";import"./MapToggleButtonPresentational-BlGzR4tE.js";import"./Remove-BvGV8H9W.js";import"./Alert-Dewj0bTT.js";import"./ToggleButton-DZeEWmii.js";import"./ToggleButton-BB7t-J4s.js";import"./ToggleButtonGroup-BiA9UuSt.js";import"./LinkButton-LA6411YK.js";import"./TextField-CmL0AHrj.js";import"./Switch-BDo_8rDv.js";import"./Switch-oYQP8P7N.js";import"./LabeledSwitch-Vf-AJisw.js";import"./RadioGroup-CajsPWEN.js";import"./FormControl-DkXLR7hU.js";import"./FormHelperText-9r7loZH4.js";import"./Tabs-NOxFJG61.js";import"./MenuItem-6sxk0toU.js";import"./AccordionDetails-CuYx0iXK.js";import"./Paper-Cl8KISr9.js";import"./ErrorFallback-BuYh8t03.js";import"./ErrorFallbackText-C7OKWQpp.js";import"./ErrorFallbackWrapper-BF42-cxX.js";import"./Brand-IOllSh90.js";import"./Edit-DNF2J48_.js";const wt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const It=["Basic","Preselected","WithHelperText","Disabled","AsyncLoading","StoresIdInFormState","MultiSelectWithLimit"];export{v as AsyncLoading,u as Basic,m as Disabled,h as MultiSelectWithLimit,c as Preselected,g as StoresIdInFormState,d as WithHelperText,It as __namedExportsOrder,wt as default};
