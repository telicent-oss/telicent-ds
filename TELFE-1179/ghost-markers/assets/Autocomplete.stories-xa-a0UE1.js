import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as a}from"./index-Dl6G-zuu.js";import{A as r}from"./Autocomplete-_HJ_smfh.js";import"./jsx-runtime-DMAvRu52.js";import"./TextField-Bt6j97Dp.js";import"./TextField-C7Fww-WA.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./useId-CkA8naEk.js";import"./Select-BuWwsDr7.js";import"./FormHelperText-jGmUqac9.js";import"./Menu-CYNMhx33.js";import"./index-CXtVKvFt.js";import"./Modal-cSJVsbaW.js";import"./utils-QfZKikgD.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-Dn0cO_TJ.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Popover-DD2HYYg7.js";import"./Paper-B-rBeRIm.js";import"./createSvgIcon-CxivGeKF.js";import"./SvgIcon-DDjczThx.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./Popper-QmfZ5sgW.js";import"./Chip-B7XAvyWn.js";import"./ButtonBase-C0n3d_CB.js";import"./IconButton-CL6GPvoG.js";const se={title:"Inputs/Autocomplete",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'\nAn opinionated wrapper around MUI **Autocomplete** for simple label/value option lists.\n\n---\n\n**How it works**\n- Pass an array of `{ label: string; value: string }` options.\n- The component is **controlled** via `value` (a string or `null`) and `onChange` (receives a string or `null`).\n- It renders your DS `<TextField>` in `renderInput`, so all familiar props like `label`, `helperText`, `error`, `size`, and `fullWidth` work as expected.\n\n---\n\n**Props**\n- `label: string` — Input label.\n- `value: string | null` — Current selected option\'s `value`.\n- `onChange: (value: string | null) => void` — Called with the new `value` (or `null`).\n- `options: { label: string; value: string }[]`\n- `placeholder?: string`\n- `disabled?: boolean`\n- `error?: boolean`\n- `helperText?: string`\n- `fullWidth?: boolean` (default `true`)\n- `size?: "small" | "medium"` (default `"small"`)\n\n**Tip:** To constrain width, wrap the component in a container (e.g. `<div style={{ width: 280 }} />`) since this wrapper doesn\'t expose `sx`.\n        '}}}},p=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],n={render:()=>{const[e,t]=a.useState(null);return o(r,{label:"Select country",value:e,onChange:t,options:p,placeholder:"Start typing…"})}},l={render:()=>{const[e,t]=a.useState("AT");return o(r,{label:"Select country",value:e,onChange:t,options:p})}},s={render:()=>{const[e,t]=a.useState(null);return o(r,{label:"Country",value:e,onChange:t,options:p,helperText:"Pick your country of residence",placeholder:"Search countries"})}},i={render:()=>{const[e]=a.useState("AU");return o(r,{label:"Country",value:e,onChange:()=>{},options:p,disabled:!0})}},u={render:()=>{const e=Array.from({length:100},(L,c)=>({label:`Option ${c+1}`,value:`opt-${c+1}`})),[t,O]=a.useState(null);return o(r,{label:"Lots of options",value:t,onChange:O,options:e,placeholder:"Type to filter…"})}};var m,d,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} placeholder="Start typing…" />;
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,h,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>("AT");
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} />;
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var A,y,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <Autocomplete label="Country" value={value} onChange={setValue} options={demoOptions} helperText="Pick your country of residence" placeholder="Search countries" />;
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,C,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<string | null>("AU");
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={demoOptions} disabled />;
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var x,V,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const many = Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`opt-\${i + 1}\`
    }));
    const [value, setValue] = useState<string | null>(null);
    return <Autocomplete label="Lots of options" value={value} onChange={setValue} options={many} placeholder="Type to filter…" />;
  }
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const ie=["Basic","Preselected","WithHelperText","Disabled","LongList"];export{n as Basic,i as Disabled,u as LongList,l as Preselected,s as WithHelperText,ie as __namedExportsOrder,se as default};
