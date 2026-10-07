import{r as i,a as l}from"./iframe-EHiispHx.js";import{T as s}from"./ToggleButton-AWyPEjYi.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-R0TygaOg.js";import"./TransitionGroupContext-CRo6hKdF.js";const x={title:"Inputs/ToggleButton",component:s},e={args:{value:"active"},parameters:{docs:{description:{story:"Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead."}}},render:()=>{const[t,a]=i.useState(!1);return l(s,{value:"active",selected:t,onChange:()=>a(c=>!c),children:t?"On":"Off"})}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const S=["Basic"];export{e as Basic,S as __namedExportsOrder,x as default};
