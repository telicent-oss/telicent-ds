import{j as e,a as p}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";/* empty css                  */import{_ as I,d as T}from"./createTheme-CNnsHS-w.js";import{_ as x}from"./extends-BFqQA52f.js";import{r as m}from"./index-BP8_t0zE.js";import{g as S,s as W,c as N,a as k}from"./styled-BLGAcoWM.js";import{u as H,F as M}from"./useFormControl-CHYNG1zi.js";import{g as L}from"./generateUtilityClasses-DWDXFugI.js";import{j as d}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{u as z}from"./DefaultPropsProvider-O1PffH9H.js";import{T as _}from"./Typography-BcJWBAIA.js";import{T as j}from"./TextField-Do7bRFuV.js";import{F as y,r as $,s as U,t as D}from"./index-EaYoR7Ht.js";import{T as O}from"./TeliButton-DMV69Ca-.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./Select-DvxZuTWq.js";import"./InputBase-RYQzFHoQ.js";import"./useForkRef-rM2yqL0Y.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-B9g0kU6X.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./isMuiElement-Bdmsln0z.js";import"./Menu-cFw-Qsfz.js";import"./index-BpIClzG7.js";import"./Modal-AMNDv7--.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./resolveComponentProps-CRsKqwAv.js";import"./useTheme-Cxnl1_9N.js";import"./utils-By8aWBlh.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BVEwUaSm.js";import"./useSlotProps-C0aSIFYh.js";import"./Grow-Bg0f54T-.js";import"./Paper-P7C7xbRI.js";import"./MenuList-DhXqMNVQ.js";import"./List-B7wd7IsG.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";import"./createSvgIcon-BK8_stpa.js";import"./SvgIcon-DbzBai8R.js";import"./index-CXPIPAcP.js";import"./index-CSpfAsmC.js";import"./ButtonBase-zNROK4sl.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Popper-BesQJJaZ.js";function B(o){return S("MuiInputAdornment",o)}const P=L("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var F;const Y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],G=(o,t)=>{const{ownerState:a}=o;return[t.root,t[`position${T(a.position)}`],a.disablePointerEvents===!0&&t.disablePointerEvents,t[a.variant]]},J=o=>{const{classes:t,disablePointerEvents:a,hiddenLabel:l,position:i,size:n,variant:c}=o,h={root:["root",a&&"disablePointerEvents",i&&`position${T(i)}`,c,l&&"hiddenLabel",n&&`size${T(n)}`]};return k(h,B,t)},K=W("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:G})(({theme:o,ownerState:t})=>x({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(o.vars||o).palette.action.active},t.variant==="filled"&&{[`&.${P.positionStart}&:not(.${P.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),v=m.forwardRef(function(t,a){const l=z({props:t,name:"MuiInputAdornment"}),{children:i,className:n,component:c="div",disablePointerEvents:h=!1,disableTypography:R=!1,position:b,variant:w}=l,V=I(l,Y),s=H()||{};let f=w;w&&s.variant,s&&!f&&(f=s.variant);const g=x({},l,{hiddenLabel:s.hiddenLabel,size:s.size,disablePointerEvents:h,position:b,variant:f}),A=J(g);return d.jsx(M.Provider,{value:null,children:d.jsx(K,x({as:c,ownerState:g,className:N(A.root,n),ref:a},V,{children:typeof i=="string"&&!R?d.jsx(_,{color:"text.secondary",children:i}):d.jsxs(m.Fragment,{children:[b==="start"?F||(F=d.jsx("span",{className:"notranslate",children:"​"})):null,i]})}))})}),r=({ariaLabel:o,endAdornment:t,readOnly:a,pointerEvents:l,startAdornment:i,...n})=>e(j,{variant:"outlined",size:"small",maxRows:4,InputProps:{readOnly:a,startAdornment:e(v,{position:"start",children:i}),endAdornment:e(v,{position:"end",children:t})},InputLabelProps:{shrink:l},inputProps:{"aria-label":o},...n});r.__docgenInfo={description:`Text Fields let users enter and edit text. They typically appear in forms and dialogs.
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
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).`},value:{required:!1,tsType:{name:'TextFieldProps["value"]',raw:'TextFieldProps["value"]'},description:"The value of the input element, required for a controlled component."}}};const Q={render:()=>{const[o,t]=m.useState(!1);return p("div",{className:"grid grid-cols-3 gap-3",children:[e(r,{id:"start-adornment-amount",label:"Amount",startAdornment:e(y,{icon:$,size:"sm"})}),e(r,{id:"start-adornment-weight",label:"Weight",startAdornment:"kg"}),e(r,{id:"end-adornment-weight",label:"Weight",endAdornment:"kg"}),e(r,{id:"end-adornment-password",label:"Password",type:o?"text":"password",autoComplete:"current-password",endAdornment:e(O,{onClick:()=>{t(l=>!l)},children:e(y,{icon:o?U:D,size:"sm"})})})]})},parameters:{docs:{description:{story:`Start and end adornments can be added to the component to add a 
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
      `}}}},Xe=Q,X={render:()=>{const[o,t]=m.useState("I'm batman!");return p("div",{className:"grid grid-cols-3 gap-3",children:[e(r,{id:"controlled",label:"Controlled",value:o,onChange:l=>{t(l.target.value)}}),e(r,{id:"uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})},parameters:{docs:{description:{story:"The component can be controlled or uncontrolled."},source:{code:`
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
      `}}}},Ze=X,Z={render:({label:o,id:t})=>p("div",{className:"grid grid-cols-3 gap-3",children:[e(r,{required:!0,id:"required-example",label:"Required",defaultValue:"Hello World"}),e(r,{disabled:!0,id:"disabled-example",label:"Disabled",defaultValue:"Hello World"}),e(r,{id:"password-example",label:"Password",type:"password",autoComplete:"current-password"}),e(r,{readOnly:!0,id:"read-only-example",label:"Read Only",defaultValue:"Hello World"}),e(r,{pointerEvents:!0,id:"number-example",label:"Number",type:"number"}),e(r,{id:"search-example",label:"Search",type:"search"}),e(r,{id:"helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),parameters:{docs:{description:{story:`Standard form attributes are supported e.g. required, disabled, 
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
      `}}}},et=Z,ee={render:()=>p("div",{className:"grid grid-cols-3 gap-3",children:[e(r,{id:"multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),e(r,{id:"textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),e(r,{id:"multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
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
      `}}}},tt=ee,te={render:()=>p("div",{className:"grid grid-cols-3 gap-3",children:[e(r,{error:!0,id:"error-example",label:"Error",defaultValue:"Hello World"}),e(r,{error:!0,id:"error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect input"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
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
      `}}}},rt=te,ot={component:r},u={args:{id:"example-id",label:"Example",fullWidth:!0},parameters:{docs:{description:{story:`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.`}}}};var E,C,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(C=u.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const at=["Basic","FormProps","ValidationExamples","MultilineExamples","AdornmentExamples","Controlled"];export{Xe as AdornmentExamples,u as Basic,Ze as Controlled,et as FormProps,tt as MultilineExamples,rt as ValidationExamples,at as __namedExportsOrder,ot as default};
