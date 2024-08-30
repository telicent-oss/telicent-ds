import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as b,Q as v,a as x}from"./useQuery-BUFZIRxJ.js";import{r as i}from"./index-BwDkhjyp.js";import{T as V}from"./TeliAutocomplete-CNB0ljs-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B4cTrqDe.js";import"./index-D3ylJrlI.js";import"./TeliChip-Bg8OsX3V.js";import"./index-Bl6ORisp.js";import"./ClockRotateLeft-3SSXHRN4.js";import"./Icon-CDQWMwPF.js";import"./TeliAddIcon-CbeuQDxp.js";import"./TeliCloseIcon-D7gePLQp.js";import"./TeliDeleteIcon-CbwVSRBK.js";import"./TeliEditIcon-CyB5r8OF.js";import"./TeliSearchIcon-D3S6z6_Z.js";import"./TeliSortIcons-riFk7gK9.js";import"./Chip-QYx8wbL0.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./generateUtilityClasses-BGohe2Km.js";import"./useForkRef-UxOPvILp.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./TeliSpinner-CjduJ47X.js";import"./TeliAutocomplete-ZdaQkPvZ.js";import"./Select-BneetK8Z.js";import"./InputBase-DAcB6bD2.js";import"./useFormControl-DPp5-Ez4.js";import"./ownerWindow-COOHErMu.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-dlBMMA4c.js";import"./Menu-4GzERHpP.js";import"./index-D8zF22Iw.js";import"./Modal-Bh2jQC7s.js";import"./useTheme-DGd8psJl.js";import"./utils-DOhIVSbh.js";import"./index-B8XB3FuZ.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./Grow-CFEed8lE.js";import"./Paper-Bt1avxBe.js";import"./MenuList-BaiCNsbG.js";import"./List-Vl0e-Exg.js";import"./useControlled-DpTMnm0X.js";import"./useId-bIDWZ5VS.js";import"./index-Ce_nUbHw.js";import"./IconButton-BTXAq08u.js";import"./Popper-CBif7sJe.js";import"./TextField-oxCt_idX.js";const C=(e,r=300)=>{const[t,a]=i.useState(e);return i.useEffect(()=>{const o=setTimeout(()=>{a(e)},r);return()=>{clearTimeout(o)}},[e,r]),t},w={headers:{"Content-Type":"application/json"}},E=async(e,r,t)=>{const a=new URLSearchParams({[r]:t}).toString(),o=await fetch(`${e}/typeahead?${a}`,w);if(!o.ok)throw new Error(`An error occured while retrieving search results for query ${t}`);return o.json()},j=(e,r,t,a)=>b(["typeahead"],()=>E(e,r,t));function l({errorMessage:e,helperText:r,queryParamKey:t,url:a,noOptionsText:o,onTransform:I,...c}){const[s,d]=i.useState(""),h=C(s),{isInitialLoading:y,isError:p,data:f,...m}=j(a,t,h),g=m.error instanceof Error?m.error.message:void 0,T=e??g,q=(N,S)=>{d(S)};return n.jsx(V,{error:p,options:f??[],noOptionsText:s===""?"Start typing ...":o,loading:y,inputValue:s,onInputChange:q,helperText:p?T:r,mode:"search",...c})}try{l.displayName="TeliTypeahead",l.__docgenInfo={description:"",displayName:"TeliTypeahead",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},queryParamKey:{defaultValue:null,description:"",name:"queryParamKey",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},onTransform:{defaultValue:null,description:"",name:"onTransform",required:!1,type:{name:"((data: any) => any)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},error:{defaultValue:null,description:"If true, the component will be rendered in an error state",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The label content.",name:"helperText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the component.",name:"width",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"Maximum height of the menu component",name:"maxHeight",required:!1,type:{name:"number"}},mode:{defaultValue:null,description:"The autocomplete mode with predefined defaults",name:"mode",required:!1,type:{name:"enum",value:[{value:'"search"'}]}},startAdornment:{defaultValue:null,description:"Element placed before the input element",name:"startAdornment",required:!1,type:{name:"ReactNode"}},getChipIcon:{defaultValue:null,description:"Used to determine the icon elment of a given option",name:"getChipIcon",required:!1,type:{name:"((option: Value) => any)"}}}}}catch{}const u=e=>e.map(t=>({value:t.targetUri,label:t.displayName,type:t.primaryType})),_={render:()=>{const[e,r]=i.useState(""),t=(a,o)=>{r(o)};return n.jsx(l,{freeSolo:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Free solo typeahead",value:e,onChange:t,onTransform:u})},parameters:{docs:{source:{code:`
<TeliTypeaheadAutocomplete
  freeSolo
  fullWidth
  url="http://localhost:5051"
  queryParamKey="searchTerm"
  label="Free solo typeahead"
  onTransform={(targets: Target[]) => {
    const options = targets.map((target) => ({
      value: target.targetUri,
      label: target.displayName,
      type: target.primaryType,
    }));
    return options;
  }}
/>
        `}}}},Ke=_,M={render:()=>{const[e,r]=i.useState([]),t=(a,o)=>{r(o)};return n.jsx(l,{multiple:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Multi select typeahead",value:e,onChange:t,onTransform:u})},parameters:{docs:{source:{code:`
const [selected, setSelected] = useState<Target[]>([]);

const handleTargetChange = (
  event: React.SyntheticEvent<Element, Event>,
  targets: Target[]
): void => {
  setSelected(targets);
};

return (
  <TeliTypeaheadAutocomplete
    multiple
    fullWidth
    url="http://localhost:5051"
    queryParamKey="searchTerm"
    label="Typeahead"
    value={selected}
    onChange={handleTargetChange}
    onTransform={(targets: Target[]) => {
      const options = targets.map((target) => ({
        value: target.targetUri,
        label: target.displayName,
        type: target.primaryType,
      }));
      return options;
    }}
  />
);
      `}}}},Ue=M,P=new v,We={component:l,parameters:{docs:{description:{component:`This component makes api calls to the desired api and 
        provides the user with the options specified. Use onTransform prop to 
        shape the options. This component uses react query and will require the 
        query client provider to be present.`}}},decorators:[e=>n.jsx(x,{client:P,children:n.jsx("div",{style:{height:"10em"},children:n.jsx(e,{})})})]},$e=["MultiSelect","FreeSolo"];export{Ke as FreeSolo,Ue as MultiSelect,$e as __namedExportsOrder,We as default};
