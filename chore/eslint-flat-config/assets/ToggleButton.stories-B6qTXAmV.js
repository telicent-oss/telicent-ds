import{r as i,a as l}from"./iframe-DZvJTdLH.js";import{T as s}from"./ToggleButton-L5BGVeTP.js";import"./preload-helper-Dp1pzeXC.js";import"./ToggleButton-wbRLKRj1.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";const x={title:"Inputs/ToggleButton",component:s},e={args:{value:"active"},parameters:{docs:{description:{story:"Thin re-export of MUI ToggleButton. For a toggle button that shows a tooltip on hover, reach for `TooltipToggleButton` instead."}}},render:()=>{const[t,a]=i.useState(!1);return l(s,{value:"active",selected:t,onChange:()=>a(c=>!c),children:t?"On":"Off"})}},S=["Basic"];var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
