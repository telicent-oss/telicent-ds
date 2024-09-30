import{j as t,a as s}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{T as l}from"./TeliSelect-DyCjtiCa.js";import{r as n}from"./index-BP8_t0zE.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./TeliChip-2hG-pJcP.js";import"./index-CSpfAsmC.js";import"./ClockRotateLeft-4x8CH0v-.js";import"./index-EaYoR7Ht.js";import"./index-CXPIPAcP.js";import"./Icon-Bbei6cwb.js";import"./TeliAddIcon-ZQkbF6ay.js";import"./TeliCloseIcon-DGO5iUA8.js";import"./TeliDeleteIcon-lxFU83CB.js";import"./TeliEditIcon-DLqRa-97.js";import"./TeliSearchIcon-RHfkGMQw.js";import"./TeliSortIcons-BvUzhX95.js";import"./Chip-DXsJQw9-.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./createSvgIcon-BK8_stpa.js";import"./SvgIcon-DbzBai8R.js";import"./generateUtilityClasses-DWDXFugI.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";/* empty css                  *//* empty css                      */import"./Select-DvxZuTWq.js";import"./InputBase-RYQzFHoQ.js";import"./useFormControl-CHYNG1zi.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-B9g0kU6X.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-cFw-Qsfz.js";import"./index-BpIClzG7.js";import"./Modal-AMNDv7--.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-CRsKqwAv.js";import"./useTheme-Cxnl1_9N.js";import"./utils-By8aWBlh.js";import"./index-BVEwUaSm.js";import"./useSlotProps-C0aSIFYh.js";import"./Grow-Bg0f54T-.js";import"./Paper-P7C7xbRI.js";import"./MenuList-DhXqMNVQ.js";import"./List-B7wd7IsG.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./MenuItem-_24OEzRD.js";import"./dividerClasses-BuwNPLrC.js";import"./Box-BAFJFhUk.js";const d={render:()=>{const[e,o]=n.useState("");return t(l,{id:"age-selection",label:"Age",value:e,onChange:i=>{o(i.target.value)},options:[{label:10},{label:20},{label:30}]})},parameters:{docs:{description:{story:`Menus are positioned under their emitting elements, unless they 
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
      `}}}},fe=d,p={render:()=>{const[e,o]=n.useState(""),a=i=>{o(i.target.value)};return s("div",{className:"space-x-3",children:[t(l,{id:"age-selection",label:"Age",value:e,onChange:a,options:[{label:10},{label:20},{label:30}],helperText:"With label and helper text"}),t(l,{id:"age-selection",label:"Age",value:e,onChange:a,options:[{label:10},{label:20},{label:30}],helperText:"Without label",hiddenLabel:!0})]})},parameters:{docs:{description:{story:`It's highly encouraged to always use a label with this component.
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
      `}}}},xe=p,h=[{label:"The Shawshank Redemption",id:"tt0111161"},{label:"The Godfather",id:"tt0068646"},{label:"The Godfather: Part II",id:"tt0071562"},{label:"Pulp Fiction",id:"tt0110912"},{label:"The Good, the Bad and the Ugly",id:"tt0060196"},{label:"The Dark Knight",id:"tt0468569"},{label:"12 Angry Men",id:"tt0050083"},{label:"Schindler's List",id:"tt0108052"},{label:"The Lord of the Rings: The Return of the King",id:"tt0167260"},{label:"Fight Club",id:"tt0137523"},{label:"Star Wars: Episode V - The Empire Strikes Back",id:"tt0080684"},{label:"The Lord of the Rings: The Fellowship of the Ring",id:"tt0120737"},{label:"One Flew Over the Cuckoo's Nest",id:"tt0073486"},{label:"Inception",id:"tt1375666"},{label:"Goodfellas",id:"tt0099685"},{label:"Star Wars",id:"tt0076759"},{label:"Seven Samurai",id:"tt0047478"},{label:"Forrest Gump",id:"tt0109830"},{label:"The Matrix",id:"tt0133093"},{label:"The Lord of the Rings: The Two Towers",id:"tt0167261"},{label:"City of God",id:"tt0317248"},{label:"Se7en",id:"tt0114369"},{label:"The Silence of the Lambs",id:"tt0102926"},{label:"Once Upon a Time in the West",id:"tt0064116"},{label:"Casablanca",id:"tt0034583"},{label:"The Usual Suspects",id:"tt0114814"},{label:"Raiders of the Lost Ark",id:"tt0082971"},{label:"Rear Window",id:"tt0047396"},{label:"It's a Wonderful Life",id:"tt0038650"},{label:"Psycho",id:"tt0054215"}],c={render:()=>{const[e,o]=n.useState([]);return t(l,{multiple:!0,id:"movie-selection",label:"Select movies",value:e,onChange:i=>{const{target:{value:r}}=i;o(typeof r=="string"?r.split(","):r)},options:h,width:250})},parameters:{docs:{description:{story:`The <code>Select</code> component can handle multiple selections. 
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
      `}}}},Ae=c,b={render:()=>{const[e,o]=n.useState(""),a=i=>{o(i.target.value)};return s("div",{className:"space-x-3",children:[t(l,{id:"age-selection",label:"Age",value:e,onChange:a,options:[{label:10},{label:20},{label:30}],helperText:"Disabled",disabled:!0}),t(l,{id:"age-selection",label:"Age",value:e,onChange:a,options:[{label:10},{label:20},{label:30}],helperText:"Error",error:!0}),t(l,{id:"age-selection",label:"Age",defaultValue:10,options:[{label:10},{label:20},{label:30}],helperText:"Read only",readOnly:!0,focused:!0}),t(l,{id:"age-selection",label:"Age",value:e,onChange:a,options:[{label:10},{label:20},{label:30}],required:!0,helperText:"Required *"})]})},parameters:{docs:{source:{code:`
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
      `}}}},ye=b,we={component:l,parameters:{docs:{description:{component:"Select components are used for collecting user provided information from a list of options."}}},decorators:[e=>t("div",{style:{position:"relative"},children:t(e,{})})]},Oe=["BasicSelect","LabelsAndHelperText","OtherStates","MultiSelect"];export{fe as BasicSelect,xe as LabelsAndHelperText,Ae as MultiSelect,ye as OtherStates,Oe as __namedExportsOrder,we as default};
