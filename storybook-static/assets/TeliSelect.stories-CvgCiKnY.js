import{j as t}from"./jsx-runtime-CexXSJP5.js";import{T as a}from"./TeliSelect-D-Rbb5NF.js";import{r as n}from"./index-BP8_t0zE.js";import"./TeliChip-DAG7I11l.js";import"./index-CSpfAsmC.js";import"./ClockRotateLeft-BjWmZ_24.js";import"./index-EaYoR7Ht.js";import"./index-CXPIPAcP.js";import"./Icon-Btk4_Z4H.js";import"./TeliAddIcon-CbwSfORU.js";import"./TeliCloseIcon-JFcrqpdS.js";import"./TeliDeleteIcon-ggWi4uOu.js";import"./TeliEditIcon-BvDMgwnY.js";import"./TeliSearchIcon-BX-OU3i7.js";import"./TeliSortIcons-BiII0Lui.js";import"./Chip-DIAWJyfw.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./createSvgIcon-BSqKsiVD.js";import"./SvgIcon-C5tcZsyu.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";/* empty css                  *//* empty css                      */import"./Select-Yt9PZUPM.js";import"./InputBase-Bhc1YtKv.js";import"./useFormControl-CHYNG1zi.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-BPqgQW9T.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-KaAF1bzu.js";import"./index-BjJ5k6rE.js";import"./Modal-Bd-pgXjw.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-iAOpfAUw.js";import"./useTheme-CmkBszCQ.js";import"./utils-IhZQnaQC.js";import"./index-BVEwUaSm.js";import"./useSlotProps-DmXLjd2q.js";import"./Grow-Dt6YTbxq.js";import"./Paper-DEGHyXeH.js";import"./MenuList-BbY1aGr7.js";import"./List-C23U3F2W.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./MenuItem-CMhrTc-x.js";import"./dividerClasses-D1EpZA7g.js";import"./Box-Jzim7HDp.js";const s={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}]})},parameters:{docs:{description:{story:`Menus are positioned under their emitting elements, unless they 
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
      `}}}},Te=s,d={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsxs("div",{className:"space-x-3",children:[t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"With label and helper text"}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Without label",hiddenLabel:!0})]})},parameters:{docs:{description:{story:`It's highly encouraged to always use a label with this component.
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
      `}}}},xe=d,p=[{label:"The Shawshank Redemption",id:"tt0111161"},{label:"The Godfather",id:"tt0068646"},{label:"The Godfather: Part II",id:"tt0071562"},{label:"Pulp Fiction",id:"tt0110912"},{label:"The Good, the Bad and the Ugly",id:"tt0060196"},{label:"The Dark Knight",id:"tt0468569"},{label:"12 Angry Men",id:"tt0050083"},{label:"Schindler's List",id:"tt0108052"},{label:"The Lord of the Rings: The Return of the King",id:"tt0167260"},{label:"Fight Club",id:"tt0137523"},{label:"Star Wars: Episode V - The Empire Strikes Back",id:"tt0080684"},{label:"The Lord of the Rings: The Fellowship of the Ring",id:"tt0120737"},{label:"One Flew Over the Cuckoo's Nest",id:"tt0073486"},{label:"Inception",id:"tt1375666"},{label:"Goodfellas",id:"tt0099685"},{label:"Star Wars",id:"tt0076759"},{label:"Seven Samurai",id:"tt0047478"},{label:"Forrest Gump",id:"tt0109830"},{label:"The Matrix",id:"tt0133093"},{label:"The Lord of the Rings: The Two Towers",id:"tt0167261"},{label:"City of God",id:"tt0317248"},{label:"Se7en",id:"tt0114369"},{label:"The Silence of the Lambs",id:"tt0102926"},{label:"Once Upon a Time in the West",id:"tt0064116"},{label:"Casablanca",id:"tt0034583"},{label:"The Usual Suspects",id:"tt0114814"},{label:"Raiders of the Lost Ark",id:"tt0082971"},{label:"Rear Window",id:"tt0047396"},{label:"It's a Wonderful Life",id:"tt0038650"},{label:"Psycho",id:"tt0054215"}],c={render:()=>{const[e,o]=n.useState([]),l=i=>{const{target:{value:r}}=i;o(typeof r=="string"?r.split(","):r)};return t.jsx(a,{multiple:!0,id:"movie-selection",label:"Select movies",value:e,onChange:l,options:p,width:250})},parameters:{docs:{description:{story:`The <code>Select</code> component can handle multiple selections. 
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
      `}}}},Ce=c,h={render:()=>{const[e,o]=n.useState(""),l=i=>{o(i.target.value)};return t.jsxs("div",{className:"space-x-3",children:[t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Disabled",disabled:!0}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],helperText:"Error",error:!0}),t.jsx(a,{id:"age-selection",label:"Age",defaultValue:10,options:[{label:10},{label:20},{label:30}],helperText:"Read only",readOnly:!0,focused:!0}),t.jsx(a,{id:"age-selection",label:"Age",value:e,onChange:l,options:[{label:10},{label:20},{label:30}],required:!0,helperText:"Required *"})]})},parameters:{docs:{source:{code:`
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
      `}}}},fe=h,Ae={component:a,parameters:{docs:{description:{component:"Select components are used for collecting user provided information from a list of options."}}},decorators:[e=>t.jsx("div",{style:{position:"relative"},children:t.jsx(e,{})})]},ye=["BasicSelect","LabelsAndHelperText","OtherStates","MultiSelect"];export{Te as BasicSelect,xe as LabelsAndHelperText,Ce as MultiSelect,fe as OtherStates,ye as __namedExportsOrder,Ae as default};
