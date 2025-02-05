import{a as m,j as e}from"./DefaultPropsProvider-DW_T1ksU.js";import{P as p}from"./PrimaryButton-BhFuj2T-.js";import"./TelicentMark-CfEBkPGs.js";import"./DataSetIcon-CVKUnWQK.js";import"./UserIcon-D8df-UA-.js";import{S as l}from"./UserStatus-DkY_p60F.js";import"./UserProfile-X2kTYwXJ.js";import"./Text-DRT_rUFN.js";import"./Chip-DdEDmb-F.js";import"./TreeView-CUjnqCrH.js";import"./UserProfileContent-D76CJzOi.js";import"./FlexBox-BEh4lK-b.js";import{I as d}from"./InputBase-CqWbuVRK.js";import{B as c}from"./Box-BBaP0q4U.js";const h=({autoFocus:t=!1,placeholder:n="Search",inputRef:a,name:r,value:o,onBlur:i,onChange:s,onSearch:u})=>m(c,{id:"search-box",height:44,width:600,display:"flex",alignItems:"center",component:"form",onSubmit:u,children:[e(d,{id:"search-box-input",type:"search",sx:{height:"100%",width:"100%",borderWidth:1,borderRightWidth:0,borderColor:"#6D6D6D",borderStyle:"solid",borderTopLeftRadius:4,borderBottomLeftRadius:4},inputProps:{sx:{paddingInline:1.5}},ref:a,autoFocus:t,placeholder:n,onBlur:i,onChange:s,value:o,name:r}),e(p,{id:"search-box-button","aria-label":"search",type:"submit",sx:{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:4,borderBottomRightRadius:4,height:"100%"},disableElevation:!0,children:e(l,{size:"xl"})})]});h.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"If true, the input element is focused during the first mount.",defaultValue:{value:"false",computed:!1}},inputRef:{required:!1,tsType:{name:"union",raw:"React.ForwardedRef<HTMLInputElement> | React.RefObject<HTMLInputElement>",elements:[{name:"ReactForwardedRef",raw:"React.ForwardedRef<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},description:"Pass a ref to the input element."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:`Callback fired when the input looses focus (i.e. blurred).
Notice that the first argument (event) might be undefined.
@param event
@returns void`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:`Callback fired when the value is changed.
@param event The event source of the callback. You can pull out the new value by accessing event.target.value (string).
@returns void`},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:`Callback fired when the search button is clicked.
@param event
@returns`},name:{required:!1,tsType:{name:'InputBaseProps["name"]',raw:'InputBaseProps["name"]'},description:"Name attribute of the input element."},placeholder:{required:!1,tsType:{name:'InputBaseProps["placeholder"]',raw:'InputBaseProps["placeholder"]'},description:"The short hint displayed in the input before the user enters a value.",defaultValue:{value:'"Search"',computed:!1}},value:{required:!1,tsType:{name:"Value"},description:"The value of the input element, required for a controlled component."}}};export{h as S};
