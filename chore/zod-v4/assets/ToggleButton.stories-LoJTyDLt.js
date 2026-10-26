import{r as i,a as l}from"./iframe-Djv8ktra.js";import{T as s}from"./ToggleButton-GvPbRr0J.js";import"./preload-helper-Dp1pzeXC.js";import"./ToggleButton-CFoTEcuq.js";import"./clsx-B-dksMZM.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BsGOhoOZ.js";import"./TransitionGroupContext-BAmDsqe-.js";const x={title:"Inputs/ToggleButton",component:s},e={args:{value:"active"},parameters:{docs:{description:{story:"Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead."}}},render:()=>{const[t,a]=i.useState(!1);return l(s,{value:"active",selected:t,onChange:()=>a(c=>!c),children:t?"On":"Off"})}},S=["Basic"];var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
