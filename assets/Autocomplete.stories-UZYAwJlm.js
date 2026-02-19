import{j as o}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as a}from"./index-CTjT7uj6.js";import{A as r}from"./Autocomplete-C-kTU09I.js";import"./jsx-runtime-CB_V9I5Y.js";import"./TextField-Cl8VKv-k.js";import"./TextField-jmY6cT1k.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./useId-DMVUMfb1.js";import"./Select-CQe_2BDr.js";import"./Menu-Cib9lkAX.js";import"./index-CejG0Q0C.js";import"./Modal-nppWUrX9.js";import"./utils-BbBxhV03.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./Popover-hHU0kX9Y.js";import"./Paper-DurtPqdU.js";import"./createSvgIcon-BGbWkX_4.js";import"./SvgIcon-nu1RSFLJ.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./IconButton-D-oHTsme.js";import"./ButtonBase-DH2zkY_f.js";import"./Popper-DKho5otB.js";import"./Chip-BVb47-Yv.js";const le={title:"Inputs/Autocomplete",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'\nAn opinionated wrapper around MUI **Autocomplete** for simple label/value option lists.\n\n---\n\n**How it works**\n- Pass an array of `{ label: string; value: string }` options.\n- The component is **controlled** via `value` (a string or `null`) and `onChange` (receives a string or `null`).\n- It renders your DS `<TextField>` in `renderInput`, so all familiar props like `label`, `helperText`, `error`, `size`, and `fullWidth` work as expected.\n\n---\n\n**Props**\n- `label: string` — Input label.\n- `value: string | null` — Current selected option\'s `value`.\n- `onChange: (value: string | null) => void` — Called with the new `value` (or `null`).\n- `options: { label: string; value: string }[]`\n- `placeholder?: string`\n- `disabled?: boolean`\n- `error?: boolean`\n- `helperText?: string`\n- `fullWidth?: boolean` (default `true`)\n- `size?: "small" | "medium"` (default `"small"`)\n\n**Tip:** To constrain width, wrap the component in a container (e.g. `<div style={{ width: 280 }} />`) since this wrapper doesn\'t expose `sx`.\n        '}}}},p=[{label:"Afghanistan",value:"AF"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"}],n={render:()=>{const[e,t]=a.useState(null);return o(r,{label:"Select country",value:e,onChange:t,options:p,placeholder:"Start typing…"})}},l={render:()=>{const[e,t]=a.useState("AT");return o(r,{label:"Select country",value:e,onChange:t,options:p})}},s={render:()=>{const[e,t]=a.useState(null);return o(r,{label:"Country",value:e,onChange:t,options:p,helperText:"Pick your country of residence",placeholder:"Search countries"})}},i={render:()=>{const[e]=a.useState("AU");return o(r,{label:"Country",value:e,onChange:()=>{},options:p,disabled:!0})}},u={render:()=>{const e=Array.from({length:100},(L,c)=>({label:`Option ${c+1}`,value:`opt-${c+1}`})),[t,O]=a.useState(null);return o(r,{label:"Lots of options",value:t,onChange:O,options:e,placeholder:"Type to filter…"})}};var m,d,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const se=["Basic","Preselected","WithHelperText","Disabled","LongList"];export{n as Basic,i as Disabled,u as LongList,l as Preselected,s as WithHelperText,se as __namedExportsOrder,le as default};
