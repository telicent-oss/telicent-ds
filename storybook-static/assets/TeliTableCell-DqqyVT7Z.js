import{j as h}from"./jsx-runtime-Nms4Y4qS.js";/* empty css              */import{b as l,l as $,a as v,n as j,_ as M}from"./createTheme-CnHyYZiq.js";import{_ as x}from"./extends-CCbyfPlC.js";import{r as c}from"./index-BwDkhjyp.js";import{g as P,s as A,a as N,c as W,b as U}from"./styled-jK8V3O51.js";import{T as D}from"./Tablelvl2Context-BoWQS6Bn.js";import{g as q}from"./generateUtilityClasses-BGohe2Km.js";const E=c.createContext();function I(e){return P("MuiTableCell",e)}const L=q("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),V=["align","className","component","padding","scope","size","sortDirection","variant"],B=e=>{const{classes:a,variant:i,align:o,padding:s,size:g,stickyHeader:r}=e,f={root:["root",i,r&&"stickyHeader",o!=="inherit"&&`align${l(o)}`,s!=="normal"&&`padding${l(s)}`,`size${l(g)}`]};return U(f,I,a)},J=A("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:i}=e;return[a.root,a[i.variant],a[`size${l(i.size)}`],i.padding!=="normal"&&a[`padding${l(i.padding)}`],i.align!=="inherit"&&a[`align${l(i.align)}`],i.stickyHeader&&a.stickyHeader]}})(({theme:e,ownerState:a})=>x({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?$(v(e.palette.divider,1),.88):j(v(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},a.variant==="body"&&{color:(e.vars||e).palette.text.primary},a.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${L.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),F=c.forwardRef(function(a,i){const o=N({props:a,name:"MuiTableCell"}),{align:s="inherit",className:g,component:r,padding:f,scope:k,size:z,sortDirection:u,variant:_}=o,H=M(o,V),t=c.useContext(E),d=c.useContext(D),m=d&&d.variant==="head";let n;r?n=r:n=m?"th":"td";let p=k;n==="td"?p=void 0:!p&&m&&(p="col");const y=_||d&&d.variant,b=x({},o,{align:s,component:n,padding:f||(t&&t.padding?t.padding:"normal"),size:z||(t&&t.size?t.size:"medium"),sortDirection:u,stickyHeader:y==="head"&&t&&t.stickyHeader,variant:y}),R=B(b);let C=null;return u&&(C=u==="asc"?"ascending":"descending"),h.jsx(J,x({as:n,ref:i,className:W(R.root,g),"aria-sort":C,scope:p,ownerState:b},H))}),T=({minWidth:e,children:a,...i})=>h.jsx(F,{sx:{minWidth:e},...i,children:a});try{T.displayName="TeliTableCell",T.__docgenInfo={description:"",displayName:"TeliTableCell",props:{minWidth:{defaultValue:null,description:"Minimum width of the table",name:"minWidth",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{T,E as a};
