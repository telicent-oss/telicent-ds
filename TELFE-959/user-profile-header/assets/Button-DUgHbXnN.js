import{h as n,b as r,v as u,r as V,u as _,_ as j}from"./DefaultPropsProvider-DW_T1ksU.js";import{r as d}from"./index-Du_IP5cC.js";import{g as O,s as f,r as F,c as R,a as U}from"./styled-CO2r5wNb.js";import{g as G}from"./generateUtilityClasses-CBYfpbff.js";import{j as b}from"./jsx-runtime-Dwss98Nb.js";import{B as D}from"./ButtonBase-k7dNn2-f.js";function H(o){return O("MuiButton",o)}const v=G("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),A=d.createContext({}),q=d.createContext(void 0),J=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],K=o=>{const{color:a,disableElevation:i,fullWidth:s,size:t,variant:l,classes:c}=o,x={root:["root",l,`${l}${n(a)}`,`size${n(t)}`,`${l}Size${n(t)}`,`color${n(a)}`,i&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${n(t)}`],endIcon:["icon","endIcon",`iconSize${n(t)}`]},g=U(x,H,c);return r({},c,g)},k=o=>r({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Q=f(D,{shouldForwardProp:o=>F(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.root,a[i.variant],a[`${i.variant}${n(i.color)}`],a[`size${n(i.size)}`],a[`${i.variant}Size${n(i.size)}`],i.color==="inherit"&&a.colorInherit,i.disableElevation&&a.disableElevation,i.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var i,s;const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],l=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return r({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${v.focusVisible}`]:r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${v.disabled}`]:r({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${u(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(i=(s=o.palette).getContrastText)==null?void 0:i.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:t,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}),X=f("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.startIcon,a[`iconSize${n(i.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},k(o))),Y=f("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.endIcon,a[`iconSize${n(i.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},k(o))),ro=d.forwardRef(function(a,i){const s=d.useContext(A),t=d.useContext(q),l=V(s,a),c=_({props:l,name:"MuiButton"}),{children:x,color:g="primary",component:z="button",className:h,disabled:C=!1,disableElevation:m=!1,disableFocusRipple:y=!1,endIcon:I,focusVisibleClassName:E,fullWidth:P=!1,size:W="medium",startIcon:$,type:B,variant:M="text"}=c,N=j(c,J),p=r({},c,{color:g,component:z,disabled:C,disableElevation:m,disableFocusRipple:y,fullWidth:P,size:W,type:B,variant:M}),e=K(p),L=$&&b.jsx(X,{className:e.startIcon,ownerState:p,children:$}),S=I&&b.jsx(Y,{className:e.endIcon,ownerState:p,children:I}),T=t||"";return b.jsxs(Q,r({ownerState:p,className:R(s.className,e.root,h,T),component:z,disabled:C,focusRipple:!y,focusVisibleClassName:R(e.focusVisible,E),ref:i,type:B},N,{classes:e,children:[L,x,S]}))});export{ro as B};
