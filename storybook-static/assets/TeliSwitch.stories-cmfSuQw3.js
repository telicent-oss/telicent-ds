import{T as t}from"./TeliSwitch-Wjzt79nh.js";import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./FormControlLabel-CJWVnRLB.js";import"./useFormControl-DPp5-Ez4.js";import"./generateUtilityClasses-BGohe2Km.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useForkRef-UxOPvILp.js";import"./useControlled-DpTMnm0X.js";import"./Typography-CJaAKyn9.js";import"./Stack-CQt_0ICX.js";import"./styled-DIAKr2Jf.js";import"./index-Ce_nUbHw.js";const o={render:()=>{const s={inputProps:{"aria-label":"Switch demo"}};return e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{...s,defaultChecked:!0}),e.jsx(t,{...s}),e.jsx(t,{...s,disabled:!0,defaultChecked:!0}),e.jsx(t,{...s,disabled:!0})]})},parameters:{docs:{source:{code:`
const label = { inputProps: { "aria-label": "Switch demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} defaultChecked />
    <TeliSwitch {...label} />
    <TeliSwitch {...label} disabled defaultChecked />
    <TeliSwitch {...label} disabled />
  </fieldset>
);
        `}}}},v=o,d={render:()=>{const[s,l]=r.useState(!0),a=c=>{const i=c.target;l(i.checked)};return e.jsx(t,{checked:s,onChange:a})},parameters:{docs:{source:{description:{story:"You can control the switch with the <code>checked</code> and <code>onChange</code> props:"},code:`
const [checked, setChecked] = useState(true);

const handleChange = (event: React.ChangeEvent) => {
  const target = event.target as HTMLInputElement;
  setChecked(target.checked);
};

return <TeliSwitch checked={checked} onChange={handleChange} />;
        `}}}},y=d,n={render:()=>e.jsxs("fieldset",{className:"flex flex-col",children:[e.jsx(t,{label:"Label"}),e.jsx(t,{required:!0,label:"Required"}),e.jsx(t,{disabled:!0,label:"Disabled"})]}),parameters:{docs:{source:{code:`
<fieldset>
  <TeliSwitch label="Label" />
  <TeliSwitch required label="Required" />
  <TeliSwitch disabled label="Disabled" />
</fieldset>
        `}}}},D=n,h={render:()=>e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{label:"Start",labelPlacement:"start"}),e.jsx(t,{label:"End",labelPlacement:"end"})]}),parameters:{docs:{source:{description:{story:"The placement of the label can be changed as shown below"},code:`
<fieldset>
  <TeliSwitch label="Start" labelPlacement="start" />
  <TeliSwitch label="End" labelPlacement="end" />
</fieldset>
        `}}}},_=h,m={render:()=>{const s={inputProps:{"aria-label":"Switch size demo"}};return e.jsxs("fieldset",{className:"flex items-center gap-x-3",children:[e.jsx(t,{...s}),e.jsx(t,{...s,size:"medium"})]})},parameters:{docs:{source:{description:{story:"Use the <code>size</code> prop to change the size of the switch."},code:`
const label = { inputProps: { "aria-label": "Switch size demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} />
    <TeliSwitch {...label} size="medium" />
  </fieldset>
);
        `}}}},H=m,I={component:t},M=["BasicSwitches","LabelledSwitches","ControlledSwitches","Sizes","LabelPlacement"];export{v as BasicSwitches,y as ControlledSwitches,_ as LabelPlacement,D as LabelledSwitches,H as Sizes,M as __namedExportsOrder,I as default};
