import{j as r}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as l}from"./index-CTjT7uj6.js";import{e as o}from"./AuthModal-B9CTpmXf.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-BI2n6SdC.js";import"./iframe-DnIRRRMc.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-Dn_72vF3.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./FlexBox-wqE_3hOo.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-GSj0T9Pb.js";import"./utils-BfJHuSOI.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-oAA5JCuL.js";import"./ButtonBase-C9YLNer7.js";import"./Menu-Dz_6jnqr.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./Paper-DurtPqdU.js";import"./Select-Cg4El2i7.js";import"./useId-DMVUMfb1.js";import"./AdapterDayjs-BJJxUjzR.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-eYN_4ghx.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Button-BsbypDuV.js";import"./Chip-DrHiCwPe.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./Box-CRiiUqfG.js";import"./DataSetIcon-eLJEtM34.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-gg1tI3tM.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-CSRnY2wZ.js";import"./Chip-BYDdnwPY.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./Button-BQmmc_Hj.js";import"./LinkButton-DOLgHIfS.js";import"./TextField-Btqabrxf.js";import"./Select-SSmDSWTe.js";import"./DatePicker-BiYSsM8F.js";import"./DateTimePicker-0RoXV4lB.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-BqkrEGud.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const st={title:"Inputs/Autocomplete",component:o,tags:["autodocs"],parameters:{...L("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4"),docs:{description:{component:`
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
        `}}}},n=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],s={render:()=>{const[e,t]=l.useState(null);return r(o,{label:"Select country",value:e,onChange:t,options:n,placeholder:"Start typing…"})}},p={render:()=>{const[e,t]=l.useState(n.find(a=>a.value==="AT")??null);return r(o,{label:"Select country",value:e,onChange:t,options:n})}},u={render:()=>{const[e,t]=l.useState(null);return r(o,{label:"Country",value:e,onChange:t,options:n,helperText:"Pick your country of residence",placeholder:"Search countries"})}},m={render:()=>{const[e]=l.useState(n.find(t=>t.value==="AU")??null);return r(o,{label:"Country",value:e,onChange:()=>{},options:n,disabled:!0})}},c={render:()=>{const e=Array.from({length:50},(j,i)=>({label:`Option ${i+1}`,value:`opt-${i+1}`})),[t,a]=l.useState(null);return r(o,{label:"Lots of options",value:t,onChange:a,options:e,placeholder:"Type to filter…"})}},d={render:()=>{const e=Array.from({length:10},(j,i)=>({label:`Option ${i+1}`,value:`opt-${i+1}`})),[t,a]=l.useState([]);return r(o,{multiple:!0,label:"Countries",value:t,onChange:a,options:e})}};var v,h,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} placeholder="Start typing…" />;
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,y,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(demoOptions.find(o => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} />;
  }
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var S,C,f;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={demoOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(f=(C=u.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var O,V,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<Option | null>(demoOptions.find(o => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={demoOptions} disabled />;
  }
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var x,T,U;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const many: Option[] = Array.from({
      length: 50
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`opt-\${i + 1}\`
    }));
    const [value, setValue] = useState<Option | null>(null);
    return <Autocomplete label="Lots of options" value={value} onChange={setValue} options={many} placeholder="Type to filter…" />;
  }
}`,...(U=(T=c.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var I,w,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const many: Option[] = Array.from({
      length: 10
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`opt-\${i + 1}\`
    }));
    const [values, setValues] = useState<Option[]>([]);
    return <Autocomplete multiple label="Countries" value={values} onChange={setValues} options={many} />;
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const pt=["Basic","Preselected","WithHelperText","Disabled","LongList","MultiSelect"];export{s as Basic,m as Disabled,c as LongList,d as MultiSelect,p as Preselected,u as WithHelperText,pt as __namedExportsOrder,st as default};
