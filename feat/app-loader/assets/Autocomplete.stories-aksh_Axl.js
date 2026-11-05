import{r as l,b as p,a as s}from"./iframe-CWOAzfBe.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import{g as i}from"./UserProfileContent-PP1H7xMQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TjLPzi1x.js";import"./clsx-B-dksMZM.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B2y4Re2S.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./MapToggleButtonPresentational-CEHdazAY.js";import"./Remove-C8RIYb0h.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./IconButton-DgurzXTO.js";import"./Paper-7wOgw64N.js";import"./Box-Be9RsHl4.js";import"./XIcon-dAr9ghTX.js";import"./Stack-BSuJYMST.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./Typography-D-Cq-N2y.js";import"./Box-BeooBb3v.js";import"./Container-F3J-sHJz.js";import"./FlexBox-pZJaha5u.js";import"./Brand-CKv8y3LC.js";import"./IconButton-2rYQRxsd.js";import"./LinkButton-XU4sXk5X.js";import"./AppInfoRow-CS9nkuxJ.js";import"./_IconPopover-7sZ10jAV.js";import"./Popover-vUzglvRh.js";import"./utils-Bhl493yy.js";import"./index-DWVJrjyq.js";import"./index-DjnTYE3b.js";import"./Modal-DpeBRA_s.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DyVW6uNc.js";import"./useSlotProps-DYSwu3K9.js";import"./InfoIcon-Dm5ciMv4.js";import"./Text-C2R7pbPC.js";import"./AppSettings-CAogJme_.js";import"./CogIcon-DoUxEvuA.js";import"./Badge-D_pdYXXr.js";import"./Badge-B8UvVhKt.js";import"./Chip-BqgzveIY.js";import"./Chip-Cmk_bJZP.js";import"./Divider-pNwF1iHD.js";import"./Divider-CFFp1ukz.js";import"./dividerClasses-CvuSSyUr.js";import"./ThemeSwitchRow-BIg4pT4X.js";import"./Skeleton-D5xdqxBS.js";import"./Skeleton-D4kMWV6G.js";import"./TextField-BCQeTXpB.js";import"./useFormControl-Du95Ze_o.js";import"./FormControl-psQBgE76.js";import"./ListContext-D0cTsJmH.js";import"./useControlled-CQQMs9uM.js";import"./FormHelperText-Bpw2KcDZ.js";import"./MenuItem-D6VvEmRc.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./ListItem-BPZeYGxz.js";import"./Toolbar-CToRG8p1.js";import"./Close-BxICseQ8.js";import"./Popper-CrLTcQdC.js";import"./FormControlLabel-a66K3OEG.js";import"./Edit-BGN1rUEo.js";import"./SvgIcon-Dte4xqyw.js";import"./TableRow-CJHAGSMA.js";import"./TableCell-BcaiVUkP.js";import"./TreeView-Bwkbpo83.js";import"./useThemeProps-Ce3qTZG0.js";import"./index-Db069xsF.js";import"./Collapse-CuLQ9H5N.js";import"./Dialog-DcXNP11i.js";import"./DialogContent-B_RMQklx.js";import"./Alert-D1RRFPA_.js";import"./useSlot-BCKzb_k_.js";import"./LinearProgress-DYdo5kC4.js";import"./LinearProgress-BwQMcTrR.js";import"./Spinner-BUwM6wcC.js";import"./CircularProgress-hkecqCAX.js";import"./TextField-BvQJwsnk.js";import"./FormControl-C6XdQTGq.js";import"./FormHelperText-Cpr8FSPI.js";import"./LabeledSwitch-CZe5HyJI.js";import"./Switch-Bgf3cuRU.js";import"./Switch-C9fMxVpv.js";import"./RadioGroup-BjERn-tn.js";import"./ToggleButton-DaGu9yPS.js";import"./ToggleButton--S7xR4zz.js";import"./ToggleButtonGroup-s374tJhr.js";import"./MenuItem-CpoRDk7B.js";import"./Tabs-BsDialm7.js";import"./AccordionSummary-FJf2LPtG.js";import"./Paper-CcJbfhLV.js";import"./ErrorFallback-r5W_n7Xq.js";import"./ErrorFallbackText-B8i4qwXi.js";import"./ErrorFallbackWrapper-TPpQ5mRs.js";const zt={title:"Inputs/Autocomplete",component:i,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
