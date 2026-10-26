import{r as i,a as l}from"./iframe-BrOrNHEh.js";import{T as s}from"./ToggleButton-h1qrIylX.js";import"./preload-helper-Dp1pzeXC.js";import"./ToggleButton-RaOfILww.js";import"./clsx-B-dksMZM.js";import"./styled-B7Gun_NM.js";import"./extendSxProp-Duzm6Lca.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DftoHfZR.js";import"./TransitionGroupContext-Dt8HhoUr.js";const x={title:"Inputs/ToggleButton",component:s},e={args:{value:"active"},parameters:{docs:{description:{story:"Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead."}}},render:()=>{const[t,a]=i.useState(!1);return l(s,{value:"active",selected:t,onChange:()=>a(c=>!c),children:t?"On":"Off"})}},S=["Basic"];var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: "active"
  },
  parameters: {
    docs: {
      description: {
        story: "Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for \`TooltipToggleButton\` instead."
      }
    }
  },
  render: () => {
    const [selected, setSelected] = useState(false);
    return <ToggleButton value="active" selected={selected} onChange={() => setSelected(v => !v)}>
        {selected ? "On" : "Off"}
      </ToggleButton>;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};export{e as Basic,S as __namedExportsOrder,x as default};
