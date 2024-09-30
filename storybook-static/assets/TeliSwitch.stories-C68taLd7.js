import{T as e}from"./TeliSwitch-DRLNo-ou.js";import{a,j as t}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{r}from"./index-BP8_t0zE.js";import"./createTheme-CNnsHS-w.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./FormControlLabel-qjkC92A4.js";import"./useFormControl-CHYNG1zi.js";import"./generateUtilityClasses-DWDXFugI.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./useControlled-im5M3O13.js";import"./Typography-BcJWBAIA.js";import"./Stack-DIIGiS4P.js";import"./styled-L_KyKXnN.js";import"./useThemeProps-BFAJHbV7.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";const o={render:()=>{const l={inputProps:{"aria-label":"Switch demo"}};return a("fieldset",{className:"space-x-3",children:[t(e,{...l,defaultChecked:!0}),t(e,{...l}),t(e,{...l,disabled:!0,defaultChecked:!0}),t(e,{...l,disabled:!0})]})},parameters:{docs:{source:{code:`
const label = { inputProps: { "aria-label": "Switch demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} defaultChecked />
    <TeliSwitch {...label} />
    <TeliSwitch {...label} disabled defaultChecked />
    <TeliSwitch {...label} disabled />
  </fieldset>
);
        `}}}},H=o,d={render:()=>{const[l,s]=r.useState(!0);return t(e,{checked:l,onChange:c=>{const i=c.target;s(i.checked)}})},parameters:{docs:{source:{description:{story:"You can control the switch with the <code>checked</code> and <code>onChange</code> props:"},code:`
const [checked, setChecked] = useState(true);

const handleChange = (event: React.ChangeEvent) => {
  const target = event.target as HTMLInputElement;
  setChecked(target.checked);
};

return <TeliSwitch checked={checked} onChange={handleChange} />;
        `}}}},I=d,n={render:()=>a("fieldset",{className:"flex flex-col",children:[t(e,{label:"Label"}),t(e,{required:!0,label:"Required"}),t(e,{disabled:!0,label:"Disabled"})]}),parameters:{docs:{source:{code:`
<fieldset>
  <TeliSwitch label="Label" />
  <TeliSwitch required label="Required" />
  <TeliSwitch disabled label="Disabled" />
</fieldset>
        `}}}},M=n,h={render:()=>a("fieldset",{className:"space-x-3",children:[t(e,{label:"Start",labelPlacement:"start"}),t(e,{label:"End",labelPlacement:"end"})]}),parameters:{docs:{source:{description:{story:"The placement of the label can be changed as shown below"},code:`
<fieldset>
  <TeliSwitch label="Start" labelPlacement="start" />
  <TeliSwitch label="End" labelPlacement="end" />
</fieldset>
        `}}}},O=h,m={render:()=>{const l={inputProps:{"aria-label":"Switch size demo"}};return a("fieldset",{className:"flex items-center gap-x-3",children:[t(e,{...l}),t(e,{...l,size:"medium"})]})},parameters:{docs:{source:{description:{story:"Use the <code>size</code> prop to change the size of the switch."},code:`
const label = { inputProps: { "aria-label": "Switch size demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} />
    <TeliSwitch {...label} size="medium" />
  </fieldset>
);
        `}}}},U=m,Y={component:e},A=["BasicSwitches","LabelledSwitches","ControlledSwitches","Sizes","LabelPlacement"];export{H as BasicSwitches,I as ControlledSwitches,O as LabelPlacement,M as LabelledSwitches,U as Sizes,A as __namedExportsOrder,Y as default};
