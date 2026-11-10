import{r as l,b as p,a as s}from"./iframe-BOxWlwg5.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import{g as a}from"./UserProfileContent-dZ7zWbX5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-RST7cKYM.js";import"./clsx-B-dksMZM.js";import"./styled-BgVBpEwg.js";import"./extendSxProp-CVzwORHv.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Fpsrv8av.js";import"./TransitionGroupContext-s9Ly73kI.js";import"./MapToggleButtonPresentational-BdOPS_HS.js";import"./Remove-q51AYkkp.js";import"./createSvgIcon-Cbav5LI2.js";import"./SvgIcon-BuYUPz_9.js";import"./IconButton-Dau69Om4.js";import"./Paper-sf9JWptJ.js";import"./Box-CvHBf5NP.js";import"./XIcon-DBA19TI9.js";import"./Stack-CawfPr20.js";import"./styled-DO2oWJWU.js";import"./createStyled-BNm24LSV.js";import"./useThemeProps-Bxv5NIts.js";import"./Typography-CFlIo-Q1.js";import"./Box-DtSH4RJf.js";import"./Container-DHBouHEB.js";import"./FlexBox-Cv8f2Kgf.js";import"./Brand-XnqjgZ4f.js";import"./IconButton-LgOVvbaj.js";import"./LinkButton-D8kcuh6P.js";import"./AppInfoRow-CANQsy5u.js";import"./_IconPopover-OfVEyw5R.js";import"./Popover-DE_4eFiH.js";import"./utils-C3dOeq5Z.js";import"./index-CNcMevBU.js";import"./index-DGC1M5ns.js";import"./Modal-BhqwZZig.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-vB5A6xUp.js";import"./useSlotProps-Cg0GMwyG.js";import"./InfoIcon-BG9JhvZK.js";import"./Text-dB-e86oS.js";import"./AppSettings-DiZ0JEr4.js";import"./CogIcon-B7SI9pu3.js";import"./Badge-BGOsj2Ca.js";import"./Badge-DI9NlIAf.js";import"./Chip-8tQb7tBt.js";import"./Chip-iuAj1t61.js";import"./Divider-kspxcsBA.js";import"./Divider-w9MV6g0K.js";import"./dividerClasses-B5mKUAOo.js";import"./ThemeSwitchRow--QYarRG2.js";import"./Skeleton-O_rn9M7d.js";import"./Skeleton-DiHIX88t.js";import"./TextField-B-iZ9q_3.js";import"./useFormControl-CqEKaJO6.js";import"./FormControl-CNCCIB7H.js";import"./ListContext-3BYol91A.js";import"./useControlled-Crd973ZW.js";import"./FormHelperText-Cdu7wh-n.js";import"./MenuItem-DCjm5sxk.js";import"./ExpandMoreIcon-cR278gH1.js";import"./ListItem-sx5uYsfj.js";import"./Toolbar-BDm5sDas.js";import"./Close-CIRg-aOw.js";import"./Popper-BZv-1Yvv.js";import"./FormControlLabel-oASRYr7v.js";import"./Edit-Crc51dG7.js";import"./SvgIcon-BtF96WW6.js";import"./TableRow-B9BSqYVz.js";import"./TableCell-kr0lx5yP.js";import"./TreeView-BwV_15o1.js";import"./useThemeProps-CkA-ZwoX.js";import"./index-DHZDPTGE.js";import"./Collapse-CJdJ3uyR.js";import"./Dialog-MZhmu3-0.js";import"./DialogContent-CR-wXjtm.js";import"./Alert-bOjTzR4W.js";import"./useSlot-ljNNkbcn.js";import"./LinearProgress-B2bHkg80.js";import"./LinearProgress-CX8da3qz.js";import"./Spinner-COCl1drt.js";import"./CircularProgress-BHwLWokq.js";import"./TextField-DIbPruU-.js";import"./FormControl-Dwd6rDK_.js";import"./FormHelperText-BIWFhEJH.js";import"./LabeledSwitch-C8YuLEMm.js";import"./Switch-CUBlLIbd.js";import"./Switch-9odXMQM9.js";import"./RadioGroup-OVsHCzkT.js";import"./ToggleButton-CsoQZQ9x.js";import"./ToggleButton-DfWGuPF5.js";import"./ToggleButtonGroup-BIYFhty6.js";import"./MenuItem-Bh_ocaUE.js";import"./Tabs-BsBGmFx0.js";import"./AccordionSummary-DWx619cH.js";import"./Paper-B8YjvAvG.js";import"./ErrorFallback-z7nRQ4o7.js";import"./ErrorFallbackText-x_QK0bvY.js";import"./ErrorFallbackWrapper-CSs0BRCk.js";const kt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
