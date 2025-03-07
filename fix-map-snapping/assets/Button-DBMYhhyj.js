import{j as t,a as s}from"./DefaultPropsProvider-DFY4ak0N.js";import{P as d}from"./PrimaryButton-CcR-pRuA.js";import{B as n}from"./Button-bPCeHTF6.js";import{u as m}from"./useTheme-BWRXETY3.js";import{B as a}from"./Box-BDaEidkD.js";const o=e=>e.disableElevation?t(n,{variant:"outlined",color:"primary",...e,children:e.children}):t(n,{variant:"outlined",color:"inherit",...e,children:e.children});o.__docgenInfo={description:"",methods:[],displayName:"SecondaryButton"};const l=e=>{const r=m();return s(a,{sx:{width:"fit-content"},children:[t(n,{variant:"text",color:"primary",...e,disableRipple:!0,sx:{minWidth:"fit-content",padding:0,":hover":{backgroundColor:"transparent"},":not(.Mui-disabled):hover + .ButtonLinkLine":{opacity:1,width:"100%"}},children:e.children}),t(a,{className:"ButtonLinkLine",borderTop:1.5,borderColor:r.palette.primary.main,sx:{opacity:0,width:0,marginLeft:"auto",marginRight:"auto",transitionDuration:"400ms",transitionProperty:"width, opacity",transitionTimingFunction:"cubic-bezier(0.39, 0.58, 0.57, 1)"}})]})};l.__docgenInfo={description:"",methods:[],displayName:"LinkButton"};const c=({variant:e="primary",color:r="primary",...i})=>e==="primary"?t(d,{...i}):e==="secondary"?t(o,{...i}):e==="link"?t(l,{...i}):t(n,{variant:"text",color:r,...i,children:i.children});c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:`The color of the component.
@default 'primary'`,defaultValue:{value:'"primary"',computed:!1}},component:{required:!1,tsType:{name:'MUIButtonProps["component"]',raw:'MUIButtonProps["component"]'},description:`The component used for the root node. Either a string to use a HTML element
or a component.`},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is disabled.\n@default false"},disableElevation:{required:!1,tsType:{name:"boolean"},description:"If `true`, no elevation is used.\n@default false"},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element placed after the children."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button will take up the full width of its container.\n@default false"},size:{required:!1,tsType:{name:'MUIButtonProps["size"]',raw:'MUIButtonProps["size"]'},description:"The size of the component.\n`small` is equivalent to the dense button styling.\n@default 'medium'"},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element placed before the children."},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary" | "link" | "text"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"link"'},{name:"literal",value:'"text"'}]},description:`The variant to use.
@default 'primary'`,defaultValue:{value:'"primary"',computed:!1}}},composes:["Omit"]};export{c as B};
