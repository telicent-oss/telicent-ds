import{r as l,b as p,a as s}from"./iframe-nsP25gKo.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import{g as a}from"./UserProfileContent-f95zNd9R.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcG95mMM.js";import"./clsx-B-dksMZM.js";import"./styled-Bt4bz1Ri.js";import"./extendSxProp-BBWs3qYR.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Baj9xzH7.js";import"./TransitionGroupContext-CRxBndhR.js";import"./MapToggleButtonPresentational-DctfZT0J.js";import"./Remove-CzBf15o4.js";import"./createSvgIcon-LgicXHPs.js";import"./SvgIcon-DwNiQzjj.js";import"./IconButton-BYlTCNOG.js";import"./Paper-B4TYotmL.js";import"./Box-BLLAoZm6.js";import"./XIcon-DvjInBT6.js";import"./Stack-RhHn8vw5.js";import"./styled-6EMwNmQ6.js";import"./createStyled-BLSQzFCR.js";import"./useThemeProps-DsTjZoaE.js";import"./Typography-DnSN7OSu.js";import"./Box-ClYQvNbI.js";import"./Container-hgkEhD5P.js";import"./FlexBox-Bbary1W6.js";import"./Brand-D2VeOYCO.js";import"./IconButton-D_s4EuKD.js";import"./LinkButton-BfQndRTn.js";import"./AppInfoRow-CLIPujn3.js";import"./_IconPopover-CM-VnDWQ.js";import"./Popover-DUCsUIlP.js";import"./utils-DLdYsqUd.js";import"./index-DjtdcByO.js";import"./index-Dxol60-t.js";import"./Modal-CeMyLzIn.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C1ZfCTRs.js";import"./useSlotProps-vjHHGShq.js";import"./InfoIcon-B4QZA7Dh.js";import"./Text-Bwgymadh.js";import"./AppSettings-DVRHQY8i.js";import"./CogIcon-B6b_cT6g.js";import"./Badge-85zKMsnD.js";import"./Badge-9XdJnLxl.js";import"./Chip-JnNyPpPT.js";import"./Chip-CRajJEkV.js";import"./Divider-DsquOdv6.js";import"./Divider-BIYJU6nM.js";import"./dividerClasses-CfQ_rPvR.js";import"./ThemeSwitchRow-BjVkP1Fv.js";import"./Skeleton-DtU8OxFt.js";import"./Skeleton-CwfPMYJi.js";import"./TextField-yAyXnCKm.js";import"./useFormControl-BUEp33Hh.js";import"./FormControl-BMwiDYNj.js";import"./ListContext-B3Q6EA8E.js";import"./useControlled-etmNhFyh.js";import"./FormHelperText-CAF4d6sh.js";import"./MenuItem-ZgZIMTVz.js";import"./ExpandMoreIcon-BpXAgeqq.js";import"./ListItem-DzmK-gV-.js";import"./Toolbar-Dp-Ug-sg.js";import"./Close-CCEFKHxU.js";import"./Popper-Bu4oq1KR.js";import"./FormControlLabel-46a0qj7a.js";import"./Edit-y9PYitAs.js";import"./SvgIcon-DR4WFJkh.js";import"./TableRow-BZSMQNDt.js";import"./TableCell-COiajT-b.js";import"./TreeView-CrbubHa0.js";import"./useThemeProps-qS4SKgCb.js";import"./index-CLveBa9-.js";import"./Collapse-BSI7DmKL.js";import"./Dialog-DylwUyfT.js";import"./DialogContent-c2oq3SeY.js";import"./Alert-BAgHB1Qx.js";import"./useSlot-OYO5iV9R.js";import"./LinearProgress-Ck7jjyC4.js";import"./LinearProgress-Dmr1J_kV.js";import"./Spinner-cC4ZThnx.js";import"./CircularProgress-B7fpNiMY.js";import"./TextField-CFGiNnsX.js";import"./FormControl-DpTA0hxG.js";import"./FormHelperText-BifUht1K.js";import"./LabeledSwitch-B9jnW4jb.js";import"./Switch-Cny72m0T.js";import"./Switch-Cble3tJI.js";import"./RadioGroup-DhIrKGmL.js";import"./ToggleButton-A0J8XTcs.js";import"./ToggleButton-CYeKTcPs.js";import"./ToggleButtonGroup-CjH0lsuO.js";import"./MenuItem-BVxpSR0S.js";import"./Tabs-BgeYDhLN.js";import"./AccordionSummary-Bc-n5IVo.js";import"./Paper-CRM4XuDd.js";import"./ErrorFallback-CvDibk96.js";import"./ErrorFallbackText-CKST_BNY.js";import"./ErrorFallbackWrapper-BaLlP7IC.js";const kt={title:"Inputs/Autocomplete",component:a,tags:["autodocs"],parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
