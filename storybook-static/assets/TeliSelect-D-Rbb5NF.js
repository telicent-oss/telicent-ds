import{j as t}from"./jsx-runtime-CexXSJP5.js";import{T as S}from"./TeliChip-DAG7I11l.js";/* empty css                  *//* empty css                      */import{F as k,I as V,S as C,a as o}from"./Select-Yt9PZUPM.js";import{M as N}from"./MenuItem-CMhrTc-x.js";import{B as E}from"./Box-Jzim7HDp.js";const O=({id:l,selectId:u,label:a,options:d=[],value:p,defaultOpen:c,defaultValue:m,helperText:s,disabled:f=!1,error:h=!1,focused:y,fullWidth:v=!1,hiddenLabel:n=!1,multiple:b=!1,open:g,readOnly:T=!1,required:r=!1,width:w,onChange:q,onClose:x,onOpen:I})=>{const j=()=>n?{displayEmpty:!0}:{labelId:l,label:a,displayEmpty:!1},R=()=>b?{multiple:!0,renderValue:e=>t.jsx(E,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(i=>t.jsx(S,{label:i,variant:"tertiary"},i))})}:{};return t.jsxs(k,{className:"teli-select",sx:{minWidth:88,width:w},size:"small",disabled:f,error:h,required:r,fullWidth:v,focused:y,hiddenLabel:n,children:[!n&&t.jsx(V,{id:l,children:a}),t.jsx(C,{...j(),...R(),id:u,value:p,onChange:q,size:"small",defaultOpen:c,defaultValue:m,open:g,onOpen:I,onClose:x,inputProps:{"aria-label":n?a:void 0,readOnly:T},MenuProps:{className:"teli-basic-menu",sx:{marginTop:"6px"}},children:d.map(e=>t.jsx(N,{value:(e==null?void 0:e.value)||e.label,children:e.label},(e==null?void 0:e.id)||e.label))}),s?t.jsx(o,{children:s}):r?t.jsx(o,{children:"Required *"}):null]})};O.__docgenInfo={description:"",methods:[],displayName:"TeliSelect",props:{defaultOpen:{required:!1,tsType:{name:"boolean"},description:`If true, the component is initially open. Use when the component open state
is not controlled (i.e. the open prop is not defined). You can only use it
when the native prop is false (default).
@default false`},defaultValue:{required:!1,tsType:{name:"any"},description:"The default value. Use when the component is not controlled."},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the label, input and helper text should be displayed in a disabled
state.`,defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"If true, the label is displayed in an error state.",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"If true, the component is displayed in focused state."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the component will take up the full width of its container.",defaultValue:{value:"false",computed:!1}},hiddenLabel:{required:!1,tsType:{name:"boolean"},description:`If true, the label is hidden. Be sure to add aria-label to the input
element.`,defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"The id of the input element."},label:{required:!1,tsType:{name:"string"},description:"The label of the input."},helperText:{required:!1,tsType:{name:"string"},description:`Text which will be displayed below the component. If ' ' is provided, the
component reserves one line height for displaying a future message.`},multiple:{required:!1,tsType:{name:"boolean"},description:`If true, value must be an array and the menu will support multiple
selections.`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SelectChangeEvent) => void",signature:{arguments:[{type:{name:"SelectChangeEvent"},name:"event"}],return:{name:"void"}}},description:`Callback fired when a menu item is selected.
@param event The event source of the callback. You can pull out the new
value by accessing event.target.value (any). Warning: This is a generic
event, not a change event, unless the change event is caused by browser
autofill.
@returns void`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object) => void",signature:{arguments:[{type:{name:"object"},name:"event"}],return:{name:"void"}}},description:`Callback fired when the component requests to be closed. Use it in either
controlled (see the open prop), or uncontrolled mode (to detect when the
Select collapses).
@param event The event source of the callback.
@returns void`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object) => void",signature:{arguments:[{type:{name:"object"},name:"event"}],return:{name:"void"}}},description:`Callback fired when the component requests to be opened. Use it in either
controlled (see the open prop), or uncontrolled mode (to detect when the
Select expands).
@param event The event source of the callback.
@returns void`},open:{required:!1,tsType:{name:"boolean"},description:"If true, the component is shown."},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: any;
  value?: any;
  label: React.ReactNode | string;
}`,signature:{properties:[{key:"id",value:{name:"any",required:!1}},{key:"value",value:{name:"any",required:!1}},{key:"label",value:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}],required:!0}}]}}],raw:"TeliSelectOption[]"},description:`The option elements to populate the select with
type TeliSelectOption = {
      id?: any;
      value?: any;
      label: React.ReactNode | string;
    };`,defaultValue:{value:"[]",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"If true, the selected option(s) cannot be changed",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"If true, the label will indicate that the input is required.",defaultValue:{value:"false",computed:!1}},selectId:{required:!1,tsType:{name:"string"},description:"The id of the select wrapper element"},width:{required:!1,tsType:{name:"number"},description:"The width of the component"},value:{required:!1,tsType:{name:"any"},description:`The input value. Providing an empty string will select no options. Set to
an empty string '' if you don't want any of the available options to be
selected. If the value is an object it must have reference equality with
the option in order to be selected. If the value is not an object, the
string representation must match with the string representation of the
option in order to be selected.`}}};export{O as T};
