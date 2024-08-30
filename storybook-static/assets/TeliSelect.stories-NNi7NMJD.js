import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{T as a}from"./TeliSelect-D-XNgzkv.js";import{r as n}from"./index-BwDkhjyp.js";import"./TeliChip-Bg8OsX3V.js";import"./index-Bl6ORisp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ClockRotateLeft-3SSXHRN4.js";import"./index-B4cTrqDe.js";import"./index-D3ylJrlI.js";import"./Icon-CDQWMwPF.js";import"./TeliAddIcon-CbeuQDxp.js";import"./TeliCloseIcon-D7gePLQp.js";import"./TeliDeleteIcon-CbwVSRBK.js";import"./TeliEditIcon-CyB5r8OF.js";import"./TeliSearchIcon-D3S6z6_Z.js";import"./TeliSortIcons-riFk7gK9.js";import"./Chip-QYx8wbL0.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./generateUtilityClasses-BGohe2Km.js";import"./useForkRef-UxOPvILp.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";/* empty css                  *//* empty css                      */import"./Select-BneetK8Z.js";import"./InputBase-DAcB6bD2.js";import"./useFormControl-DPp5-Ez4.js";import"./ownerWindow-COOHErMu.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-dlBMMA4c.js";import"./Menu-4GzERHpP.js";import"./index-D8zF22Iw.js";import"./Modal-Bh2jQC7s.js";import"./useTheme-DGd8psJl.js";import"./utils-DOhIVSbh.js";import"./index-B8XB3FuZ.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./Grow-CFEed8lE.js";import"./Paper-Bt1avxBe.js";import"./MenuList-BaiCNsbG.js";import"./List-Vl0e-Exg.js";import"./useControlled-DpTMnm0X.js";import"./useId-bIDWZ5VS.js";import"./MenuItem-BhcFgbA2.js";import"./dividerClasses-Ce5UXV-K.js";import"./Box-cMJItZWL.js";const s={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}]})},parameters:{docs:{description:{story:`Menus are positioned under their emitting elements, unless they 
        are close to the bottom of the viewport.`},source:{code:`
import { TeliSelect, SelectChangeEvent } from  "@telicent-oss/ds";

const [age, setAge] = useState("");

const handleChange = (event: SelectChangeEvent<any>) => {
  setAge(event.target.value);
};
return (
  <TeliSelect
    label="Age"
    id="age-selection"
    value={age}
    onChange={handleChange}
    options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  />
);
      `}}}},me=s,d={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsxs("div",{className:"space-x-3",children:[t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"With label and helper text"}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Without label",hiddenLabel:!0})]})},parameters:{docs:{description:{story:`It's highly encouraged to always use a label with this component.
        If you choose to not show the label ensure to wrap the component with the label tag`},source:{code:`
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="With label and helper text"
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Without label"
  showLabel={false}
/>
      `}}}},ue=d,p=[{label:"The Shawshank Redemption",id:"tt0111161"},{label:"The Godfather",id:"tt0068646"},{label:"The Godfather: Part II",id:"tt0071562"},{label:"Pulp Fiction",id:"tt0110912"},{label:"The Good, the Bad and the Ugly",id:"tt0060196"},{label:"The Dark Knight",id:"tt0468569"},{label:"12 Angry Men",id:"tt0050083"},{label:"Schindler's List",id:"tt0108052"},{label:"The Lord of the Rings: The Return of the King",id:"tt0167260"},{label:"Fight Club",id:"tt0137523"},{label:"Star Wars: Episode V - The Empire Strikes Back",id:"tt0080684"},{label:"The Lord of the Rings: The Fellowship of the Ring",id:"tt0120737"},{label:"One Flew Over the Cuckoo's Nest",id:"tt0073486"},{label:"Inception",id:"tt1375666"},{label:"Goodfellas",id:"tt0099685"},{label:"Star Wars",id:"tt0076759"},{label:"Seven Samurai",id:"tt0047478"},{label:"Forrest Gump",id:"tt0109830"},{label:"The Matrix",id:"tt0133093"},{label:"The Lord of the Rings: The Two Towers",id:"tt0167261"},{label:"City of God",id:"tt0317248"},{label:"Se7en",id:"tt0114369"},{label:"The Silence of the Lambs",id:"tt0102926"},{label:"Once Upon a Time in the West",id:"tt0064116"},{label:"Casablanca",id:"tt0034583"},{label:"The Usual Suspects",id:"tt0114814"},{label:"Raiders of the Lost Ark",id:"tt0082971"},{label:"Rear Window",id:"tt0047396"},{label:"It's a Wonderful Life",id:"tt0038650"},{label:"Psycho",id:"tt0054215"}],c={render:()=>{const[e,o]=n.useState([]),l=i=>{const{target:{value:r}}=i;o(typeof r=="string"?r.split(","):r)};return t.jsx(a,{multiple:!0,id:"movie-selection",label:"Select movies",value:e,onChange:l,options:p,width:250})},parameters:{docs:{description:{story:`The <code>Select</code> component can handle multiple selections. 
It's enabled with the <code>multiple</code> prop. Like with the single selection, 
you can pull out the new value by accessing event.target.value in the onChange 
callback. It's always an array.`},source:{code:`
import { TeliSelect, SelectChangeEvent } from  "@telicent-oss/ds";

const [movies, setMovies] = useState([]);

const handleChange = (event: SelectChangeEvent<any>) => {
  const {
    target: { value },
  } = event;
  setMovies(
    // On autofill we get a stringified value.
    typeof value === "string" ? value.split(",") : value
  );
};

return (
  <TeliSelect
    multiple
    id="movie-selection"
    label="Select movies"
    value={movies}
    onChange={handleChange}
    options={TOP_30_MOVIES}
    width={250}
  />
);
      `}}}},ve=c,h={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsxs("div",{className:"space-x-3",children:[t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Disabled",disabled:!0}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Error",error:!0}),t.jsx(a,{id:"age-selection",label:"Age",defaultValue:10,options:[{label:10},{label:20},{label:30}],helperText:"Read only",readOnly:!0,focused:!0}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],required:!0,helperText:"Required *"})]})},parameters:{docs:{source:{code:`
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Disabled"
  disabled
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Error"
  error
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Read only"
  readOnly
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  required
  helperText="Required *"
/>
      `}}}},Se=h,Te={component:a,parameters:{docs:{description:{component:"Select components are used for collecting user provided information from a list of options."}}},decorators:[e=>t.jsx("div",{style:{position:"relative"},children:t.jsx(e,{})})]},xe=["BasicSelect","LabelsAndHelperText","OtherStates","MultiSelect"];export{me as BasicSelect,ue as LabelsAndHelperText,ve as MultiSelect,Se as OtherStates,xe as __namedExportsOrder,Te as default};
