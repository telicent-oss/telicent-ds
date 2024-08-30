import{j as e}from"./jsx-runtime-Nms4Y4qS.js";/* empty css                  */import{T as A}from"./TextField-oxCt_idX.js";import{_ as C,b as h}from"./createTheme-CnHyYZiq.js";import{_ as f}from"./extends-CCbyfPlC.js";import{r as u}from"./index-BwDkhjyp.js";import{g as I,s as S,a as R,c as H,b as W}from"./styled-jK8V3O51.js";import{u as k,F as M}from"./useFormControl-DPp5-Ez4.js";import{g as N}from"./generateUtilityClasses-BGohe2Km.js";import{T as L}from"./Typography-CJaAKyn9.js";import{F as T,r as _,s as z,t as $}from"./index-B4cTrqDe.js";import{T as U}from"./TeliButton-DFvygePR.js";import"./Select-BneetK8Z.js";import"./InputBase-DAcB6bD2.js";import"./useForkRef-UxOPvILp.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./ownerWindow-COOHErMu.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-dlBMMA4c.js";import"./Menu-4GzERHpP.js";import"./index-D8zF22Iw.js";import"./Modal-Bh2jQC7s.js";import"./useTheme-DGd8psJl.js";import"./utils-DOhIVSbh.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./Grow-CFEed8lE.js";import"./Paper-Bt1avxBe.js";import"./MenuList-BaiCNsbG.js";import"./List-Vl0e-Exg.js";import"./useControlled-DpTMnm0X.js";import"./useId-bIDWZ5VS.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./ButtonBase-Er_LceZN.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Popper-CBif7sJe.js";function O(r){return I("MuiInputAdornment",r)}const y=N("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v;const B=["children","className","component","disablePointerEvents","disableTypography","position","variant"],D=(r,a)=>{const{ownerState:l}=r;return[a.root,a[`position${h(l.position)}`],l.disablePointerEvents===!0&&a.disablePointerEvents,a[l.variant]]},Y=r=>{const{classes:a,disablePointerEvents:l,hiddenLabel:n,position:o,size:i,variant:p}=r,m={root:["root",l&&"disablePointerEvents",o&&`position${h(o)}`,p,n&&"hiddenLabel",i&&`size${h(i)}`]};return W(m,O,a)},G=S("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:D})(({theme:r,ownerState:a})=>f({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},a.variant==="filled"&&{[`&.${y.positionStart}&:not(.${y.hiddenLabel})`]:{marginTop:16}},a.position==="start"&&{marginRight:8},a.position==="end"&&{marginLeft:8},a.disablePointerEvents===!0&&{pointerEvents:"none"})),w=u.forwardRef(function(a,l){const n=R({props:a,name:"MuiInputAdornment"}),{children:o,className:i,component:p="div",disablePointerEvents:m=!1,disableTypography:P=!1,position:x,variant:b}=n,j=C(n,B),s=k()||{};let c=b;b&&s.variant,s&&!c&&(c=s.variant);const g=f({},n,{hiddenLabel:s.hiddenLabel,size:s.size,disablePointerEvents:m,position:x,variant:c}),q=Y(g);return e.jsx(M.Provider,{value:null,children:e.jsx(G,f({as:p,ownerState:g,className:H(q.root,i),ref:l},j,{children:typeof o=="string"&&!P?e.jsx(L,{color:"text.secondary",children:o}):e.jsxs(u.Fragment,{children:[x==="start"?v||(v=e.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})}),t=({ariaLabel:r,endAdornment:a,readOnly:l,pointerEvents:n,startAdornment:o,...i})=>e.jsx(A,{variant:"outlined",size:"small",maxRows:4,InputProps:{readOnly:l,startAdornment:e.jsx(w,{position:"start",children:o}),endAdornment:e.jsx(w,{position:"end",children:a})},InputLabelProps:{shrink:n},inputProps:{"aria-label":r},...i});try{t.displayName="TeliTextField",t.__docgenInfo={description:`Text Fields let users enter and edit text. They typically appear in forms and dialogs.
More information about this component can be used can be found [here](https://mui.com/material-ui/react-text-field/)`,displayName:"TeliTextField",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill. You can learn
more about it [following the
specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"If true, the input element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},disabled:{defaultValue:{value:"false"},description:"If true, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If true, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"End InputAdornment for this component.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If true, the input will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:`The id of the input element. Use this prop to make label and helperText
accessible for screen readers.`,name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},multiline:{defaultValue:null,description:"If true, a textarea element is rendered instead of an input.",name:"multiline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the input element.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value is changed.
(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
@param event The event source of the callback. You can pull out the new
value by accessing event.target.value (string).
@returns void`,name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If true, the label is displayed as required and the input element is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},startAdornment:{defaultValue:null,description:"Start InputAdornment for this component.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},pointerEvents:{defaultValue:null,description:"If true, pointer events like onClick are enabled",name:"pointerEvents",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If true, the input value cannot be changed",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:`Type of the input element. It should be a [valid HTML5 input
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).`,name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"The value of the input element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}}}}}catch{}const J={render:()=>{const[r,a]=u.useState(!1),l=()=>{a(n=>!n)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"start-adornment-amount",label:"Amount",startAdornment:e.jsx(T,{icon:_,size:"sm"})}),e.jsx(t,{id:"start-adornment-weight",label:"Weight",startAdornment:"kg"}),e.jsx(t,{id:"end-adornment-weight",label:"Weight",endAdornment:"kg"}),e.jsx(t,{id:"end-adornment-password",label:"Password",type:r?"text":"password",autoComplete:"current-password",endAdornment:e.jsx(U,{onClick:l,children:e.jsx(T,{icon:r?z:$,size:"sm"})})})]})},parameters:{docs:{description:{story:`Start and end adornments can be added to the component to add a 
        prefix, a suffix, or an action to an input. For instance, you can use 
        an icon button to hide or reveal the password.`},source:{code:`
const [showPassword, setShowPassword] = useState(false);

const handlePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="start-adornment-amount"
      label="Amount"
      startAdornment={<FontAwesomeIcon icon={faPoundSign} size="sm" />}
    />
    <TeliTextField
      id="start-adornment-weight"
      label="Weight"
      startAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-weight"
      label="Weight"
      endAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-password"
      label="Password"
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      endAdornment={
        <TeliButton onClick={handlePasswordVisibility}>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size="sm"
          />
        </TeliButton>
      }
    />
  </div>
      `}}}},Be=J,K={render:()=>{const[r,a]=u.useState("I'm batman!"),l=n=>{a(n.target.value)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"controlled",label:"Controlled",value:r,onChange:l}),e.jsx(t,{id:"uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})},parameters:{docs:{description:{story:"The component can be controlled or uncontrolled."},source:{code:`
const [value, setValue] = useState("I'm batman!");

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="controlled"
      label="Controlled"
      value={value}
      onChange={handleChange}
    />
    <TeliTextField
      id="uncontrolled"
      label="Uncontrolled"
      defaultValue="foo"
    />
  </div>
);
      `}}}},De=K,Q={render:({label:r,id:a})=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{required:!0,id:"required-example",label:"Required",defaultValue:"Hello World"}),e.jsx(t,{disabled:!0,id:"disabled-example",label:"Disabled",defaultValue:"Hello World"}),e.jsx(t,{id:"password-example",label:"Password",type:"password",autoComplete:"current-password"}),e.jsx(t,{readOnly:!0,id:"read-only-example",label:"Read Only",defaultValue:"Hello World"}),e.jsx(t,{pointerEvents:!0,id:"number-example",label:"Number",type:"number"}),e.jsx(t,{id:"search-example",label:"Search",type:"search"}),e.jsx(t,{id:"helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),parameters:{docs:{description:{story:`Standard form attributes are supported e.g. required, disabled, 
        type, etc. as well as a helperText which is used to give context about a 
        field's input, such as how the input will be used.`},source:{code:`
<TeliTextField
  required
  id="required-example"
  label="Required"
  defaultValue="Hello World"
/>
<TeliTextField
  disabled
  id="disabled-example"
  label="Disabled"
  defaultValue="Hello World"
/>
<TeliTextField
  id="password-example"
  label="Password"
  type="password"
  autoComplete="current-password"
/>
<TeliTextField
  readOnly
  id="read-only-example"
  label="Read Only"
  defaultValue="Hello World"
/>
<TeliTextField
  pointerEvents
  id="number-example"
  label="Number"
  type="number"
/>
<TeliTextField id="search-example" label="Search" type="search" />
<TeliTextField
  id="helperText"
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
/>
      `}}}},Ye=Q,X={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),e.jsx(t,{id:"textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),e.jsx(t,{id:"multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
        then be used to provide feedback to the user about the error.`},source:{code:`
<TeliTextField
  error
  id="error-example"
  label="Error"
  defaultValue="Hello World"
/>
<TeliTextField
  error
  id="error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect input"
/>
      `}}}},Ge=X,Z={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{error:!0,id:"error-example",label:"Error",defaultValue:"Hello World"}),e.jsx(t,{error:!0,id:"error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect input"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
        then be used to provide feedback to the user about the error.`},source:{code:`
<TeliTextField
  error
  id="error-example"
  label="Error"
  defaultValue="Hello World"
/>
<TeliTextField
  error
  id="error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect input"
/>
      `}}}},Je=Z,Ke={component:t},d={args:{id:"example-id",label:"Example",fullWidth:!0},parameters:{docs:{description:{story:`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.`}}}};var V,E,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: "example-id",
    label: "Example",
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: \`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.\`
      }
    }
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const Qe=["Basic","FormProps","ValidationExamples","MultilineExamples","AdornmentExamples","Controlled"];export{Be as AdornmentExamples,d as Basic,De as Controlled,Ye as FormProps,Ge as MultilineExamples,Je as ValidationExamples,Qe as __namedExportsOrder,Ke as default};
