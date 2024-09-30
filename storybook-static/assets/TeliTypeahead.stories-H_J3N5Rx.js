import{j as n}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{u as S,Q as v,a as q}from"./useQuery-eCq3Dhqs.js";import{r as s}from"./index-BP8_t0zE.js";import{T as C}from"./TeliAutocomplete-XRUaxEb_.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-EaYoR7Ht.js";import"./index-CXPIPAcP.js";import"./TeliChip-2hG-pJcP.js";import"./index-CSpfAsmC.js";import"./ClockRotateLeft-4x8CH0v-.js";import"./Icon-Bbei6cwb.js";import"./TeliAddIcon-ZQkbF6ay.js";import"./TeliCloseIcon-DGO5iUA8.js";import"./TeliDeleteIcon-lxFU83CB.js";import"./TeliEditIcon-DLqRa-97.js";import"./TeliSearchIcon-RHfkGMQw.js";import"./TeliSortIcons-BvUzhX95.js";import"./Chip-DXsJQw9-.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./createSvgIcon-BK8_stpa.js";import"./SvgIcon-DbzBai8R.js";import"./generateUtilityClasses-DWDXFugI.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TeliSpinner-GVYS05SG.js";import"./TeliAutocomplete-955u3xbg.js";import"./Select-DvxZuTWq.js";import"./InputBase-RYQzFHoQ.js";import"./useFormControl-CHYNG1zi.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-B9g0kU6X.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-cFw-Qsfz.js";import"./index-BpIClzG7.js";import"./Modal-AMNDv7--.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-CRsKqwAv.js";import"./useTheme-Cxnl1_9N.js";import"./utils-By8aWBlh.js";import"./index-BVEwUaSm.js";import"./useSlotProps-C0aSIFYh.js";import"./Grow-Bg0f54T-.js";import"./Paper-P7C7xbRI.js";import"./MenuList-DhXqMNVQ.js";import"./List-B7wd7IsG.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./IconButton-BH-_DhIA.js";import"./Popper-BesQJJaZ.js";import"./TextField-Do7bRFuV.js";const b=(e,r=300)=>{const[t,a]=s.useState(e);return s.useEffect(()=>{const o=setTimeout(()=>{a(e)},r);return()=>{clearTimeout(o)}},[e,r]),t},E={headers:{"Content-Type":"application/json"}},w=async(e,r,t)=>{const a=new URLSearchParams({[r]:t}).toString(),o=await fetch(`${e}/typeahead?${a}`,E);if(!o.ok)throw new Error(`An error occured while retrieving search results for query ${t}`);return o.json()},M=(e,r,t,a)=>S(["typeahead"],()=>w(e,r,t));function i({errorMessage:e,helperText:r,queryParamKey:t,url:a,noOptionsText:o,onTransform:F,...u}){const[p,d]=s.useState(""),h=b(p),{isInitialLoading:y,isError:m,data:g,...l}=M(a,t,h),T=l.error instanceof Error?l.error.message:void 0;return n(C,{error:m,options:g??[],noOptionsText:p===""?"Start typing ...":o,loading:y,inputValue:p,onInputChange:(U,f)=>{d(f)},helperText:m?e??T:r,mode:"search",...u})}i.__docgenInfo={description:"",methods:[],displayName:"TeliTypeahead",props:{errorMessage:{required:!1,tsType:{name:"string"},description:""},queryParamKey:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},onTransform:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => any",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"any"}}},description:""}},composes:["Omit"]};const c=e=>e.map(t=>({value:t.targetUri,label:t.displayName,type:t.primaryType})),P={render:()=>{const[e,r]=s.useState("");return n(i,{freeSolo:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Free solo typeahead",value:e,onChange:(a,o)=>{r(o)},onTransform:c})},parameters:{docs:{source:{code:`
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
        `}}}},Re=P,Q={render:()=>{const[e,r]=s.useState([]);return n(i,{multiple:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Multi select typeahead",value:e,onChange:(a,o)=>{r(o)},onTransform:c})},parameters:{docs:{source:{code:`
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
      `}}}},Ve=Q,x=new v,ke={component:i,parameters:{docs:{description:{component:`This component makes api calls to the desired api and 
        provides the user with the options specified. Use onTransform prop to 
        shape the options. This component uses react query and will require the 
        query client provider to be present.`}}},decorators:[e=>n(q,{client:x,children:n("div",{style:{height:"10em"},children:n(e,{})})})]},Le=["MultiSelect","FreeSolo"];export{Re as FreeSolo,Ve as MultiSelect,Le as __namedExportsOrder,ke as default};
