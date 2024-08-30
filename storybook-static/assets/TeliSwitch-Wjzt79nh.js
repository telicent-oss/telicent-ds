import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{b as i,a as b,l as y,n as S,_ as x}from"./createTheme-CnHyYZiq.js";import{_ as c}from"./extends-CCbyfPlC.js";import{r as $}from"./index-BwDkhjyp.js";import{g as C,s as d,c as T,b as z}from"./styled-jK8V3O51.js";import{S as q,F as _}from"./FormControlLabel-CJWVnRLB.js";import{c as R}from"./index-Ce_nUbHw.js";import{g as j}from"./generateUtilityClasses-BGohe2Km.js";function I(e){return C("MuiSwitch",e)}const a=j("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),M=["className","color","edge","size","sx"],V=R(),B=e=>{const{classes:t,edge:o,size:s,color:u,checked:p,disabled:h}=e,m={root:["root",o&&`edge${i(o)}`,`size${i(s)}`],switchBase:["switchBase",`color${i(u)}`,p&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},g=z(m,I,t);return c({},t,g)},P=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${i(o.edge)}`],t[`size${i(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}}}]}),E=d(q,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${a.input}`]:t.input},o.color!=="default"&&t[`color${i(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:b(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{[`&.${a.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:b(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?y(e.palette[t].main,.62):S(e.palette[t].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),N=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),L=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),v=$.forwardRef(function(t,o){const s=V({props:t,name:"MuiSwitch"}),{className:u,color:p="primary",edge:h=!1,size:m="medium",sx:g}=s,k=x(s,M),r=c({},s,{color:p,edge:h,size:m}),l=B(r),f=n.jsx(L,{className:l.thumb,ownerState:r});return n.jsxs(P,{className:T(l.root,u),sx:g,ownerState:r,children:[n.jsx(E,c({type:"checkbox",icon:f,checkedIcon:f,ref:o,ownerState:r},k,{classes:c({},l,{root:l.switchBase})})),n.jsx(N,{className:l.track,ownerState:r})]})}),w=({label:e,labelPlacement:t="end",size:o="small",...s})=>e?n.jsx(_,{control:n.jsx(v,{size:o,...s}),label:e,labelPlacement:t,className:"m-0 gap-x-1.5",componentsProps:{typography:{fontSize:14}}}):n.jsx(v,{size:o,...s});try{w.displayName="TeliSwitch",w.__docgenInfo={description:`Switches toggle the state of a single setting on or off. The option that the
switch controls, as well as the state it's in, should be made clear from the
corresponding inline label. If unsure when to use toggle switch or checkbox,
refer to [Checkbox vs Toggle
Switch](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)`,displayName:"TeliSwitch",props:{checked:{defaultValue:null,description:"If true, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If true, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},edge:{defaultValue:null,description:`If given, uses a negative margin to counteract the padding on one side
(this is often helpful for aligning the left or right side of the icon with
content above or below, without ruining the border size and shape).`,name:"edge",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},id:{defaultValue:null,description:"The id of the input element.",name:"id",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:`[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)
applied to the input element.`,name:"inputProps",required:!1,type:{name:"HTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement> | null"}},label:{defaultValue:null,description:"Text to be used in an enclosing label element.",name:"label",required:!1,type:{name:"string"}},labelPlacement:{defaultValue:{value:"end"},description:"The position of the label.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onChange:{defaultValue:null,description:`Callback fired when the state is changed. <code>event</code> The event
source of the callback. You can pull out the new value by accessing
event.target.value (string). You can pull out the new checked state by
accessing event.target.checked (boolean)`,name:"onChange",required:!1,type:{name:"((event: ChangeEvent<Element>) => void)"}},required:{defaultValue:null,description:"If true, the input element is required.",name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"The size of the component. small is equivalent to the dense switch styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string. The browser
uses "on" as the default value.`,name:"value",required:!1,type:{name:"any"}}}}}catch{}export{w as T};
