import{h,u as _,_ as z,b as y}from"./DefaultPropsProvider-DW_T1ksU.js";import{r as v}from"./index-Du_IP5cC.js";import{g as C,s as I,c as R,a as b}from"./styled-CO2r5wNb.js";import{g as w}from"./generateUtilityClasses-CBYfpbff.js";import{j as x}from"./jsx-runtime-Dwss98Nb.js";function j(o){return C("MuiSvgIcon",o)}w("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],B=o=>{const{color:e,fontSize:n,classes:i}=o,t={root:["root",e!=="inherit"&&`color${h(e)}`,`fontSize${h(n)}`]};return b(t,j,i)},M=I("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,n.color!=="inherit"&&e[`color${h(n.color)}`],e[`fontSize${h(n.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var n,i,t,u,f,a,m,p,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=o.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(t=o.transitions)==null||(t=t.duration)==null?void 0:t.shorter}),fontSize:{inherit:"inherit",small:((u=o.typography)==null||(f=u.pxToRem)==null?void 0:f.call(u,20))||"1.25rem",medium:((a=o.typography)==null||(m=a.pxToRem)==null?void 0:m.call(a,24))||"1.5rem",large:((p=o.typography)==null||(d=p.pxToRem)==null?void 0:d.call(p,35))||"2.1875rem"}[e.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[e.color]}}),E=v.forwardRef(function(e,n){const i=_({props:e,name:"MuiSvgIcon"}),{children:t,className:u,color:f="inherit",component:a="svg",fontSize:m="medium",htmlColor:p,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=i,c=z(i,A),l=v.isValidElement(t)&&t.type==="svg",g=y({},i,{color:f,component:a,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),S={};d||(S.viewBox=s);const $=B(g);return x.jsxs(M,y({as:a,className:R($.root,u),focusable:"false",color:p,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:n},S,c,l&&t.props,{ownerState:g,children:[l?t.props.children:t,r?x.jsx("title",{children:r}):null]}))});E.muiName="SvgIcon";export{E as S};
