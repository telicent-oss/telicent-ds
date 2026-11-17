import{r as i,a as l}from"./iframe-DgB5DOOK.js";import{T as s}from"./ToggleButton-B4UHGI52.js";import"./preload-helper-Dp1pzeXC.js";import"./ToggleButton-Bs18IMrD.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";const x={title:"Inputs/ToggleButton",component:s},e={args:{value:"active"},parameters:{docs:{description:{story:"Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead."}}},render:()=>{const[t,a]=i.useState(!1);return l(s,{value:"active",selected:t,onChange:()=>a(c=>!c),children:t?"On":"Off"})}},S=["Basic"];var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
