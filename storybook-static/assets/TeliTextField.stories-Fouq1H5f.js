import{j as e}from"./jsx-runtime-CexXSJP5.js";/* empty css                  */import{T as R}from"./TextField-D8pns3DD.js";import{_ as A,g as h}from"./createTheme-BI2OWDpv.js";import{_ as x}from"./extends-BFqQA52f.js";import{r as p}from"./index-BP8_t0zE.js";import{g as I,s as V,c as S,a as W}from"./styled-CwhWP0k9.js";import{u as N,F as k}from"./useFormControl-CHYNG1zi.js";import{g as H}from"./generateUtilityClasses-CPjhs1S_.js";import{u as M}from"./DefaultPropsProvider-D6MvNwoC.js";import{T as L}from"./Typography-DE0lXvn2.js";import{F as w,r as z,s as _,t as $}from"./index-EaYoR7Ht.js";import{T as U}from"./TeliButton-DBBf574w.js";import"./Select-Yt9PZUPM.js";import"./InputBase-Bhc1YtKv.js";import"./useForkRef-rM2yqL0Y.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-BPqgQW9T.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-KaAF1bzu.js";import"./index-BjJ5k6rE.js";import"./Modal-Bd-pgXjw.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-iAOpfAUw.js";import"./useTheme-CmkBszCQ.js";import"./utils-IhZQnaQC.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BVEwUaSm.js";import"./useSlotProps-DmXLjd2q.js";import"./Grow-Dt6YTbxq.js";import"./Paper-DEGHyXeH.js";import"./MenuList-BbY1aGr7.js";import"./List-C23U3F2W.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./createSvgIcon-BSqKsiVD.js";import"./SvgIcon-C5tcZsyu.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./index-CXPIPAcP.js";import"./index-CSpfAsmC.js";import"./ButtonBase-DxHKNkXA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Popper-Cg5SJw39.js";function D(o){return I("MuiInputAdornment",o)}const g=H("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var y;const O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],B=(o,t)=>{const{ownerState:a}=o;return[t.root,t[`position${h(a.position)}`],a.disablePointerEvents===!0&&t.disablePointerEvents,t[a.variant]]},Y=o=>{const{classes:t,disablePointerEvents:a,hiddenLabel:l,position:i,size:s,variant:u}=o,m={root:["root",a&&"disablePointerEvents",i&&`position${h(i)}`,u,l&&"hiddenLabel",s&&`size${h(s)}`]};return W(m,D,t)},G=V("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:B})(({theme:o,ownerState:t})=>x({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(o.vars||o).palette.action.active},t.variant==="filled"&&{[`&.${g.positionStart}&:not(.${g.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),F=p.forwardRef(function(t,a){const l=M({props:t,name:"MuiInputAdornment"}),{children:i,className:s,component:u="div",disablePointerEvents:m=!1,disableTypography:q=!1,position:f,variant:T}=l,C=A(l,O),n=N()||{};let c=T;T&&n.variant,n&&!c&&(c=n.variant);const b=x({},l,{hiddenLabel:n.hiddenLabel,size:n.size,disablePointerEvents:m,position:f,variant:c}),j=Y(b);return e.jsx(k.Provider,{value:null,children:e.jsx(G,x({as:u,ownerState:b,className:S(j.root,s),ref:a},C,{children:typeof i=="string"&&!q?e.jsx(L,{color:"text.secondary",children:i}):e.jsxs(p.Fragment,{children:[f==="start"?y||(y=e.jsx("span",{className:"notranslate",children:"​"})):null,i]})}))})}),r=({ariaLabel:o,endAdornment:t,readOnly:a,pointerEvents:l,startAdornment:i,...s})=>e.jsx(R,{variant:"outlined",size:"small",maxRows:4,InputProps:{readOnly:a,startAdornment:e.jsx(F,{position:"start",children:i}),endAdornment:e.jsx(F,{position:"end",children:t})},InputLabelProps:{shrink:l},inputProps:{"aria-label":o},...s});r.__docgenInfo={description:`Text Fields let users enter and edit text. They typically appear in forms and dialogs.
More information about this component can be used can be found [here](https://mui.com/material-ui/react-text-field/)`,methods:[],displayName:"TeliTextField",props:{ariaLabel:{required:!1,tsType:{name:"string"},description:""},autoComplete:{required:!1,tsType:{name:'TextFieldProps["autoComplete"]',raw:'TextFieldProps["autoComplete"]'},description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill. You can learn
more about it [following the
specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`},autoFocus:{required:!1,tsType:{name:'TextFieldProps["autoFocus"]',raw:'TextFieldProps["autoFocus"]'},description:`If true, the input element is focused during the first mount.
@default false`},defaultValue:{required:!1,tsType:{name:'TextFieldProps["defaultValue"]',raw:'TextFieldProps["defaultValue"]'},description:"The default value. Use when the component is not controlled."},disabled:{required:!1,tsType:{name:'TextFieldProps["disabled"]',raw:'TextFieldProps["disabled"]'},description:`If true, the component is disabled.
 @default false`},error:{required:!1,tsType:{name:'TextFieldProps["error"]',raw:'TextFieldProps["error"]'},description:`If true, the label is displayed in an error state.
 @default false`},endAdornment:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"End InputAdornment for this component."},fullWidth:{required:!1,tsType:{name:'TextFieldProps["fullWidth"]',raw:'TextFieldProps["fullWidth"]'},description:`If true, the input will take up the full width of its container.
@default false`},helperText:{required:!1,tsType:{name:'TextFieldProps["helperText"]',raw:'TextFieldProps["helperText"]'},description:"The helper text content."},id:{required:!1,tsType:{name:'TextFieldProps["id"]',raw:'TextFieldProps["id"]'},description:`The id of the input element. Use this prop to make label and helperText
accessible for screen readers.`},inputRef:{required:!1,tsType:{name:'TextFieldProps["inputRef"]',raw:'TextFieldProps["inputRef"]'},description:"Pass a ref to the input element."},label:{required:!1,tsType:{name:'TextFieldProps["label"]',raw:'TextFieldProps["label"]'},description:"The label content."},maxRows:{required:!1,tsType:{name:'TextFieldProps["maxRows"]',raw:'TextFieldProps["maxRows"]'},description:"Maximum number of rows to display when multiline option is set to true."},minRows:{required:!1,tsType:{name:'TextFieldProps["minRows"]',raw:'TextFieldProps["minRows"]'},description:"Minimum number of rows to display when multiline option is set to true."},multiline:{required:!1,tsType:{name:'TextFieldProps["multiline"]',raw:'TextFieldProps["multiline"]'},description:"If true, a textarea element is rendered instead of an input."},name:{required:!1,tsType:{name:'TextFieldProps["name"]',raw:'TextFieldProps["name"]'},description:"Name attribute of the input element."},onChange:{required:!1,tsType:{name:'TextFieldProps["onChange"]',raw:'TextFieldProps["onChange"]'},description:`Callback fired when the value is changed.
(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
@param event The event source of the callback. You can pull out the new
value by accessing event.target.value (string).
@returns void`},placeholder:{required:!1,tsType:{name:'TextFieldProps["placeholder"]',raw:'TextFieldProps["placeholder"]'},description:"The short hint displayed in the input before the user enters a value."},required:{required:!1,tsType:{name:'TextFieldProps["required"]',raw:'TextFieldProps["required"]'},description:"If true, the label is displayed as required and the input element is required."},rows:{required:!1,tsType:{name:'TextFieldProps["rows"]',raw:'TextFieldProps["rows"]'},description:"Number of rows to display when multiline option is set to true."},startAdornment:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"Start InputAdornment for this component."},pointerEvents:{required:!1,tsType:{name:"boolean"},description:"If true, pointer events like onClick are enabled"},readOnly:{required:!1,tsType:{name:"boolean"},description:"If true, the input value cannot be changed"},type:{required:!1,tsType:{name:'TextFieldProps["type"]',raw:'TextFieldProps["type"]'},description:`Type of the input element. It should be a [valid HTML5 input
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).`},value:{required:!1,tsType:{name:'TextFieldProps["value"]',raw:'TextFieldProps["value"]'},description:"The value of the input element, required for a controlled component."}}};const J={render:()=>{const[o,t]=p.useState(!1),a=()=>{t(l=>!l)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(r,{id:"start-adornment-amount",label:"Amount",startAdornment:e.jsx(w,{icon:z,size:"sm"})}),e.jsx(r,{id:"start-adornment-weight",label:"Weight",startAdornment:"kg"}),e.jsx(r,{id:"end-adornment-weight",label:"Weight",endAdornment:"kg"}),e.jsx(r,{id:"end-adornment-password",label:"Password",type:o?"text":"password",autoComplete:"current-password",endAdornment:e.jsx(U,{onClick:a,children:e.jsx(w,{icon:o?_:$,size:"sm"})})})]})},parameters:{docs:{description:{story:`Start and end adornments can be added to the component to add a 
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
      `}}}},Je=J,K={render:()=>{const[o,t]=p.useState("I'm batman!"),a=l=>{t(l.target.value)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(r,{id:"controlled",label:"Controlled",value:o,onChange:a}),e.jsx(r,{id:"uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})},parameters:{docs:{description:{story:"The component can be controlled or uncontrolled."},source:{code:`
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
      `}}}},Ke=K,Q={render:({label:o,id:t})=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(r,{required:!0,id:"required-example",label:"Required",defaultValue:"Hello World"}),e.jsx(r,{disabled:!0,id:"disabled-example",label:"Disabled",defaultValue:"Hello World"}),e.jsx(r,{id:"password-example",label:"Password",type:"password",autoComplete:"current-password"}),e.jsx(r,{readOnly:!0,id:"read-only-example",label:"Read Only",defaultValue:"Hello World"}),e.jsx(r,{pointerEvents:!0,id:"number-example",label:"Number",type:"number"}),e.jsx(r,{id:"search-example",label:"Search",type:"search"}),e.jsx(r,{id:"helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),parameters:{docs:{description:{story:`Standard form attributes are supported e.g. required, disabled, 
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
      `}}}},Qe=Q,X={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(r,{id:"multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),e.jsx(r,{id:"textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),e.jsx(r,{id:"multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
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
      `}}}},Xe=X,Z={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(r,{error:!0,id:"error-example",label:"Error",defaultValue:"Hello World"}),e.jsx(r,{error:!0,id:"error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect input"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
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
      `}}}},Ze=Z,et={component:r},d={args:{id:"example-id",label:"Example",fullWidth:!0},parameters:{docs:{description:{story:`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.`}}}};var P,v,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const tt=["Basic","FormProps","ValidationExamples","MultilineExamples","AdornmentExamples","Controlled"];export{Je as AdornmentExamples,d as Basic,Ke as Controlled,Qe as FormProps,Xe as MultilineExamples,Ze as ValidationExamples,tt as __namedExportsOrder,et as default};
