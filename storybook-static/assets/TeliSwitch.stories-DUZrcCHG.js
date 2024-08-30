import{T as t}from"./TeliSwitch-B5G340LP.js";import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r}from"./index-BP8_t0zE.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./FormControlLabel-CExt9vJ5.js";import"./useFormControl-CHYNG1zi.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./useControlled-im5M3O13.js";import"./Typography-DE0lXvn2.js";import"./Stack-8PiQyM1k.js";import"./styled-B7SqznG2.js";import"./useThemeProps-Cz3Ol-ZY.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";const o={render:()=>{const s={inputProps:{"aria-label":"Switch demo"}};return e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{...s,defaultChecked:!0}),e.jsx(t,{...s}),e.jsx(t,{...s,disabled:!0,defaultChecked:!0}),e.jsx(t,{...s,disabled:!0})]})},parameters:{docs:{source:{code:`
const label = { inputProps: { "aria-label": "Switch demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} defaultChecked />
    <TeliSwitch {...label} />
    <TeliSwitch {...label} disabled defaultChecked />
    <TeliSwitch {...label} disabled />
  </fieldset>
);
        `}}}},D=o,d={render:()=>{const[s,l]=r.useState(!0),a=c=>{const i=c.target;l(i.checked)};return e.jsx(t,{checked:s,onChange:a})},parameters:{docs:{source:{description:{story:"You can control the switch with the <code>checked</code> and <code>onChange</code> props:"},code:`
const [checked, setChecked] = useState(true);

const handleChange = (event: React.ChangeEvent) => {
  const target = event.target as HTMLInputElement;
  setChecked(target.checked);
};

return <TeliSwitch checked={checked} onChange={handleChange} />;
        `}}}},_=d,n={render:()=>e.jsxs("fieldset",{className:"flex flex-col",children:[e.jsx(t,{label:"Label"}),e.jsx(t,{required:!0,label:"Required"}),e.jsx(t,{disabled:!0,label:"Disabled"})]}),parameters:{docs:{source:{code:`
<fieldset>
  <TeliSwitch label="Label" />
  <TeliSwitch required label="Required" />
  <TeliSwitch disabled label="Disabled" />
</fieldset>
        `}}}},H=n,h={render:()=>e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{label:"Start",labelPlacement:"start"}),e.jsx(t,{label:"End",labelPlacement:"end"})]}),parameters:{docs:{source:{description:{story:"The placement of the label can be changed as shown below"},code:`
<fieldset>
  <TeliSwitch label="Start" labelPlacement="start" />
  <TeliSwitch label="End" labelPlacement="end" />
</fieldset>
        `}}}},I=h,m={render:()=>{const s={inputProps:{"aria-label":"Switch size demo"}};return e.jsxs("fieldset",{className:"flex items-center gap-x-3",children:[e.jsx(t,{...s}),e.jsx(t,{...s,size:"medium"})]})},parameters:{docs:{source:{description:{story:"Use the <code>size</code> prop to change the size of the switch."},code:`
const label = { inputProps: { "aria-label": "Switch size demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} />
    <TeliSwitch {...label} size="medium" />
  </fieldset>
);
        `}}}},M=m,O={component:t},U=["BasicSwitches","LabelledSwitches","ControlledSwitches","Sizes","LabelPlacement"];export{D as BasicSwitches,_ as ControlledSwitches,I as LabelPlacement,H as LabelledSwitches,M as Sizes,U as __namedExportsOrder,O as default};
