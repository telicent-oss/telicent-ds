import{j as e,F as T,a as E}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as f}from"./index-BBkUAzwr.js";import"./TelicentMark-BhVEYsrQ.js";import"./DataSetIcon-DIlyQdTH.js";import"./UserIcon-BcU7B7I5.js";import{I as H,S as h}from"./UserStatus-BQiFFPMf.js";import"./UserProfile-BJO54jgr.js";import"./Text-Ahx6-q7X.js";import"./Chip-CyBXFftR.js";import"./TreeView-DHCao6gM.js";import"./UserProfileContent-yoIvuCQa.js";import{F as M}from"./FlexBox-BJwfCYMI.js";import"./FlexGrid-6cs-9T32.js";import"./Container-C9brU7ym.js";import{C as v,O as L}from"./OutlinedInput-mb-vB4Iz.js";const w=o=>{const{loading:s=!1,endIcon:l,onSearch:m,onTogglePopOver:y,onFocus:t,onBlur:r,progressProps:u,...d}=o,[a,i]=f.useState(!1),p=n=>{i(!0),t&&t(n)},c=n=>{i(!1),r&&r(n)};return e(L,{size:"small",type:"search",endAdornment:e(T,{children:E(M,{direction:"row",spacing:.5,children:[s?e(v,{color:a?"primary":"inherit",size:"20px",...u}):e(H,{size:"small",onClick:m,color:a?"primary":void 0,"aria-label":"search",children:e(h,{fontSize:"inherit"})}),l]})}),onFocus:p,onBlur:c,...d})};w.__docgenInfo={description:"",methods:[],displayName:"MiniSearchBox",props:{autoFocus:{required:!1,tsType:{name:"boolean"},description:"If `true`, the `input` element is focused during the first mount."},error:{required:!1,tsType:{name:"boolean"},description:"If `true`, the `input` will indicate an error."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the `input` will take up the full width of its container.\n@default false"},helperText:{required:!1,tsType:{name:"string"},description:`Can be used to give context. If ' ' is provided, the component reserves one
line height for displaying a future message.`},id:{required:!1,tsType:{name:"string"},description:"The id of the `input` element."},inputRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<any>",elements:[{name:"any"}]},description:"Pass a ref to the `input` element."},maxRows:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum number of rows to display when multiline option is set to true."},minRows:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Minimum number of rows to display when multiline option is set to true."},multiline:{required:!1,tsType:{name:"boolean"},description:`If true, a text area auto size element will be rendered
@default false;`},name:{required:!1,tsType:{name:"string"},description:"Name attribute of the `input` element."},onBlur:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},description:"Callback fired when the `input` is blurred.\n\n`(event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`\nNote: The first argument (event) might be undefined."},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLTextAreaElement | HTMLInputElement",elements:[{name:"HTMLTextAreaElement"},{name:"HTMLInputElement"}]}]},description:"Callback fired when the value is changed\n\n`(event: React.ChangeEvent) => void`\n@param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string)."},onFocus:{required:!1,tsType:{name:"ReactFocusEventHandler",raw:"React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},description:"`(event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`"},onKeyDown:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:`React.KeyboardEventHandler<
  HTMLTextAreaElement | HTMLInputElement
>`,elements:[{name:"union",raw:"HTMLTextAreaElement | HTMLInputElement",elements:[{name:"HTMLTextAreaElement"},{name:"HTMLInputElement"}]}]},description:"`(event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`"},onKeyUp:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLTextAreaElement | HTMLInputElement",elements:[{name:"HTMLTextAreaElement"},{name:"HTMLInputElement"}]}]},description:"`(event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`"},onInvalid:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},description:"Callback fired when the `input` doesn't satisfy its constraints.\n\n`(event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`"},placeholder:{required:!1,tsType:{name:"string"},description:"The short hint displayed in the input before the user enters a value."},progressProps:{required:!1,tsType:{name:"ProgressProps"},description:`Props which will be applied to the circular progress indicator when loading
is set to true`},rows:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Number of rows to display when multiline option is set to true."},value:{required:!1,tsType:{name:"unknown"},description:"The value of the `input` element, required for a controlled component."},loading:{required:!1,tsType:{name:"boolean"},description:"If true, a loading indicator will be visible"},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element placed after the search icon"},onSearch:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback fired when the search button is clicked\n\n`(event: React.MouseEvent<HTMLButtonElement>) => void;`"},onTogglePopOver:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback fired when the down arrow button is clicked\n\n`(event: React.MouseEvent<HTMLButtonElement>) => void;`"}},composes:["Omit"]};export{w as M};
