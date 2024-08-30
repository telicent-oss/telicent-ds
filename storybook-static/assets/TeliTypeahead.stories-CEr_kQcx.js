import{j as s}from"./jsx-runtime-CexXSJP5.js";import{u as q,Q as x,a as C}from"./useQuery-B337kmae.js";import{r as n}from"./index-BP8_t0zE.js";import{T as b}from"./TeliAutocomplete-DbK-aqZy.js";import"./index-EaYoR7Ht.js";import"./index-CXPIPAcP.js";import"./TeliChip-DAG7I11l.js";import"./index-CSpfAsmC.js";import"./ClockRotateLeft-BjWmZ_24.js";import"./Icon-Btk4_Z4H.js";import"./TeliAddIcon-CbwSfORU.js";import"./TeliCloseIcon-JFcrqpdS.js";import"./TeliDeleteIcon-ggWi4uOu.js";import"./TeliEditIcon-BvDMgwnY.js";import"./TeliSearchIcon-BX-OU3i7.js";import"./TeliSortIcons-BiII0Lui.js";import"./Chip-DIAWJyfw.js";import"./createTheme-BI2OWDpv.js";import"./extends-BFqQA52f.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./createSvgIcon-BSqKsiVD.js";import"./SvgIcon-C5tcZsyu.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-DxHKNkXA.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./TeliSpinner-DRh8kcx4.js";import"./TeliAutocomplete-DgUdjHQV.js";import"./Select-Yt9PZUPM.js";import"./InputBase-Bhc1YtKv.js";import"./useFormControl-CHYNG1zi.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-BPqgQW9T.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-KaAF1bzu.js";import"./index-BjJ5k6rE.js";import"./Modal-Bd-pgXjw.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-iAOpfAUw.js";import"./useTheme-CmkBszCQ.js";import"./utils-IhZQnaQC.js";import"./index-BVEwUaSm.js";import"./useSlotProps-DmXLjd2q.js";import"./Grow-Dt6YTbxq.js";import"./Paper-DEGHyXeH.js";import"./MenuList-BbY1aGr7.js";import"./List-C23U3F2W.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./IconButton-DDhPeAJG.js";import"./Popper-Cg5SJw39.js";import"./TextField-D8pns3DD.js";const E=(e,r=300)=>{const[t,a]=n.useState(e);return n.useEffect(()=>{const o=setTimeout(()=>{a(e)},r);return()=>{clearTimeout(o)}},[e,r]),t},j={headers:{"Content-Type":"application/json"}},w=async(e,r,t)=>{const a=new URLSearchParams({[r]:t}).toString(),o=await fetch(`${e}/typeahead?${a}`,j);if(!o.ok)throw new Error(`An error occured while retrieving search results for query ${t}`);return o.json()},P=(e,r,t,a)=>q(["typeahead"],()=>w(e,r,t));function i({errorMessage:e,helperText:r,queryParamKey:t,url:a,noOptionsText:o,onTransform:K,...u}){const[p,d]=n.useState(""),h=E(p),{isInitialLoading:y,isError:m,data:T,...l}=P(a,t,h),g=l.error instanceof Error?l.error.message:void 0,f=e??g,S=(U,v)=>{d(v)};return s.jsx(b,{error:m,options:T??[],noOptionsText:p===""?"Start typing ...":o,loading:y,inputValue:p,onInputChange:S,helperText:m?f:r,mode:"search",...u})}i.__docgenInfo={description:"",methods:[],displayName:"TeliTypeahead",props:{errorMessage:{required:!1,tsType:{name:"string"},description:""},queryParamKey:{required:!0,tsType:{name:"string"},description:""},url:{required:!0,tsType:{name:"string"},description:""},onTransform:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: any) => any",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"any"}}},description:""}},composes:["Omit"]};const c=e=>e.map(t=>({value:t.targetUri,label:t.displayName,type:t.primaryType})),M={render:()=>{const[e,r]=n.useState(""),t=(a,o)=>{r(o)};return s.jsx(i,{freeSolo:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Free solo typeahead",value:e,onChange:t,onTransform:c})},parameters:{docs:{source:{code:`
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
        `}}}},_e=M,Q={render:()=>{const[e,r]=n.useState([]),t=(a,o)=>{r(o)};return s.jsx(i,{multiple:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Multi select typeahead",value:e,onChange:t,onTransform:c})},parameters:{docs:{source:{code:`
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
      `}}}},De=Q,F=new x,Ve={component:i,parameters:{docs:{description:{component:`This component makes api calls to the desired api and 
        provides the user with the options specified. Use onTransform prop to 
        shape the options. This component uses react query and will require the 
        query client provider to be present.`}}},decorators:[e=>s.jsx(C,{client:F,children:s.jsx("div",{style:{height:"10em"},children:s.jsx(e,{})})})]},ke=["MultiSelect","FreeSolo"];export{_e as FreeSolo,De as MultiSelect,ke as __namedExportsOrder,Ve as default};
