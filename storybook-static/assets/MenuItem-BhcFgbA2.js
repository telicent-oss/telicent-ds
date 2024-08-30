import{a as d,_ as F}from"./createTheme-CnHyYZiq.js";import{_ as n}from"./extends-CCbyfPlC.js";import{r as c}from"./index-BwDkhjyp.js";import{g as N,s as P,r as _,a as G,c as x,b as w}from"./styled-jK8V3O51.js";import{a as I}from"./List-Vl0e-Exg.js";import{g as f}from"./generateUtilityClasses-BGohe2Km.js";import{j as $}from"./jsx-runtime-Nms4Y4qS.js";import{B as E}from"./ButtonBase-Er_LceZN.js";import{d as M}from"./dividerClasses-Ce5UXV-K.js";import{u as S}from"./TransitionGroupContext-Dii4aaAC.js";import{u as U}from"./useForkRef-UxOPvILp.js";const O=f("MuiListItemIcon",["root","alignItemsFlexStart"]),k=f("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function H(e){return N("MuiMenuItem",e)}const r=f("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],D=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},W=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=w({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},H,o);return n({},o,i)},q=P(E,{shouldForwardProp:e=>_(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:D})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),ae=c.forwardRef(function(t,s){const a=G({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:R,role:B="menuitem",tabIndex:b,className:L}=a,T=F(a,z),v=c.useContext(I),y=c.useMemo(()=>({dense:o||v.dense||!1,disableGutters:i}),[v.dense,o,i]),u=c.useRef(null);S(()=>{l&&u.current&&u.current.focus()},[l]);const V=n({},a,{dense:y.dense,divider:g,disableGutters:i}),m=W(a),j=U(u,s);let C;return a.disabled||(C=b!==void 0?b:-1),$.jsx(I.Provider,{value:y,children:$.jsx(q,n({ref:j,role:B,tabIndex:C,component:p,focusVisibleClassName:x(m.focusVisible,R),className:x(m.root,L)},T,{ownerState:V,classes:m}))})});export{ae as M};
