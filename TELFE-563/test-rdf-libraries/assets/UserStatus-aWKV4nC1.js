import{b as p,u as z,_,q as H,p as st,l as C,j as m,k as lt,a as et}from"./DefaultPropsProvider--lJPAVOf.js";import{f as xt,F as dt}from"./UserProfile-CnsTjZhi.js";import{u as ot}from"./useTheme-tLVpAwB4.js";import{r as u}from"./index-Du_IP5cC.js";import{g as Y,s as V,e as bt,c as $,a as F,r as yt}from"./styled-BSeuGzyp.js";import{L as R}from"./Menu-CIfbVCM2.js";import{g as J}from"./generateUtilityClasses-MMAG8yM0.js";import{j as x}from"./jsx-runtime-Dwss98Nb.js";import{a as pt,u as ut}from"./TransitionGroupContext-DmssZhy-.js";import{i as at}from"./resolveComponentProps-DNRE6Age.js";import{a as mt,B as ft}from"./ButtonBase-DOatf38x.js";import{g as It}from"./TelicentMark-BfOjK1gM.js";import{c as Ct,T as $t}from"./Text-CJDA79D9.js";import{U as ht}from"./UserIcon-VQcL6Cr3.js";import{A as St}from"./UserProfileContent-C0M4KfJU.js";function Nt(t,e){var s,o;return u.isValidElement(t)&&e.indexOf((s=t.type.muiName)!=null?s:(o=t.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}const ct=u.createContext();function Lt(t){return Y("MuiGrid",t)}const kt=[0,1,2,3,4,5,6,7,8,9,10],wt=["column-reverse","column","row-reverse","row"],Rt=["nowrap","wrap-reverse","wrap"],T=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=J("MuiGrid",["root","container","item","zeroMinWidth",...kt.map(t=>`spacing-xs-${t}`),...wt.map(t=>`direction-xs-${t}`),...Rt.map(t=>`wrap-xs-${t}`),...T.map(t=>`grid-xs-${t}`),...T.map(t=>`grid-sm-${t}`),...T.map(t=>`grid-md-${t}`),...T.map(t=>`grid-lg-${t}`),...T.map(t=>`grid-xl-${t}`)]),Gt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function A(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function Bt({theme:t,ownerState:e}){let s;return t.breakpoints.keys.reduce((o,n)=>{let i={};if(e[n]&&(s=e[n]),!s)return o;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const r=H({values:e.columns,breakpoints:t.breakpoints.values}),a=typeof r=="object"?r[n]:r;if(a==null)return o;const l=`${Math.round(s/a*1e8)/1e6}%`;let c={};if(e.container&&e.item&&e.columnSpacing!==0){const d=t.spacing(e.columnSpacing);if(d!=="0px"){const f=`calc(${l} + ${A(d)})`;c={flexBasis:f,maxWidth:f}}}i=p({flexBasis:l,flexGrow:0,maxWidth:l},c)}return t.breakpoints.values[n]===0?Object.assign(o,i):o[t.breakpoints.up(n)]=i,o},{})}function Mt({theme:t,ownerState:e}){const s=H({values:e.direction,breakpoints:t.breakpoints.values});return st({theme:t},s,o=>{const n={flexDirection:o};return o.indexOf("column")===0&&(n[`& > .${W.item}`]={maxWidth:"none"}),n})}function gt({breakpoints:t,values:e}){let s="";Object.keys(e).forEach(n=>{s===""&&e[n]!==0&&(s=n)});const o=Object.keys(t).sort((n,i)=>t[n]-t[i]);return o.slice(0,o.indexOf(s))}function Ot({theme:t,ownerState:e}){const{container:s,rowSpacing:o}=e;let n={};if(s&&o!==0){const i=H({values:o,breakpoints:t.breakpoints.values});let r;typeof i=="object"&&(r=gt({breakpoints:t.breakpoints.values,values:i})),n=st({theme:t},i,(a,l)=>{var c;const d=t.spacing(a);return d!=="0px"?{marginTop:`-${A(d)}`,[`& > .${W.item}`]:{paddingTop:A(d)}}:(c=r)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${W.item}`]:{paddingTop:0}}})}return n}function Pt({theme:t,ownerState:e}){const{container:s,columnSpacing:o}=e;let n={};if(s&&o!==0){const i=H({values:o,breakpoints:t.breakpoints.values});let r;typeof i=="object"&&(r=gt({breakpoints:t.breakpoints.values,values:i})),n=st({theme:t},i,(a,l)=>{var c;const d=t.spacing(a);return d!=="0px"?{width:`calc(100% + ${A(d)})`,marginLeft:`-${A(d)}`,[`& > .${W.item}`]:{paddingLeft:A(d)}}:(c=r)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${W.item}`]:{paddingLeft:0}}})}return n}function At(t,e,s={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[s[`spacing-xs-${String(t)}`]];const o=[];return e.forEach(n=>{const i=t[n];Number(i)>0&&o.push(s[`spacing-${n}-${String(i)}`])}),o}const _t=V("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t,{container:o,direction:n,item:i,spacing:r,wrap:a,zeroMinWidth:l,breakpoints:c}=s;let d=[];o&&(d=At(r,c,e));const f=[];return c.forEach(g=>{const b=s[g];b&&f.push(e[`grid-${g}-${String(b)}`])}),[e.root,o&&e.container,i&&e.item,l&&e.zeroMinWidth,...d,n!=="row"&&e[`direction-xs-${String(n)}`],a!=="wrap"&&e[`wrap-xs-${String(a)}`],...f]}})(({ownerState:t})=>p({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),Mt,Ot,Pt,Bt);function Vt(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const s=[];return e.forEach(o=>{const n=t[o];if(Number(n)>0){const i=`spacing-${o}-${String(n)}`;s.push(i)}}),s}const jt=t=>{const{classes:e,container:s,direction:o,item:n,spacing:i,wrap:r,zeroMinWidth:a,breakpoints:l}=t;let c=[];s&&(c=Vt(i,l));const d=[];l.forEach(g=>{const b=t[g];b&&d.push(`grid-${g}-${String(b)}`)});const f={root:["root",s&&"container",n&&"item",a&&"zeroMinWidth",...c,o!=="row"&&`direction-xs-${String(o)}`,r!=="wrap"&&`wrap-xs-${String(r)}`,...d]};return F(f,Lt,e)},w=u.forwardRef(function(e,s){const o=z({props:e,name:"MuiGrid"}),{breakpoints:n}=ot(),i=bt(o),{className:r,columns:a,columnSpacing:l,component:c="div",container:d=!1,direction:f="row",item:g=!1,rowSpacing:b,spacing:v=0,wrap:h="wrap",zeroMinWidth:I=!1}=i,y=_(i,Gt),G=b||v,S=l||v,B=u.useContext(ct),U=d?a||12:B,E={},q=p({},y);n.keys.forEach(N=>{y[N]!=null&&(E[N]=y[N],delete q[N])});const D=p({},i,{columns:U,container:d,direction:f,item:g,rowSpacing:G,columnSpacing:S,wrap:h,zeroMinWidth:I,spacing:v},E,{breakpoints:n.keys}),Q=jt(D);return x.jsx(ct.Provider,{value:U,children:x.jsx(_t,p({ownerState:D,className:$(Q.root,r),as:c,ref:s},q))})});function Tt(t){return Y("MuiListItem",t)}const O=J("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function Wt(t){return Y("MuiListItemButton",t)}const P=J("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),zt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Ft=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},Ut=t=>{const{alignItems:e,classes:s,dense:o,disabled:n,disableGutters:i,divider:r,selected:a}=t,c=F({root:["root",o&&"dense",!i&&"gutters",r&&"divider",n&&"disabled",e==="flex-start"&&"alignItemsFlexStart",a&&"selected"]},Wt,s);return p({},s,c)},Et=V(mt,{shouldForwardProp:t=>yt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Ft})(({theme:t,ownerState:e})=>p({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),qt=u.forwardRef(function(e,s){const o=z({props:e,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:i=!1,component:r="div",children:a,dense:l=!1,disableGutters:c=!1,divider:d=!1,focusVisibleClassName:f,selected:g=!1,className:b}=o,v=_(o,zt),h=u.useContext(R),I=u.useMemo(()=>({dense:l||h.dense||!1,alignItems:n,disableGutters:c}),[n,h.dense,l,c]),y=u.useRef(null);pt(()=>{i&&y.current&&y.current.focus()},[i]);const G=p({},o,{alignItems:n,dense:I.dense,disableGutters:c,divider:d,selected:g}),S=Ut(G),B=ut(y,s);return x.jsx(R.Provider,{value:I,children:x.jsx(Et,p({ref:B,href:v.href||v.to,component:(v.href||v.to)&&r==="div"?"button":r,focusVisibleClassName:$(S.focusVisible,f),ownerState:G,className:$(S.root,b)},v,{classes:S,children:a}))})});function Dt(t){return Y("MuiListItemSecondaryAction",t)}J("MuiListItemSecondaryAction",["root","disableGutters"]);const Kt=["className"],Zt=t=>{const{disableGutters:e,classes:s}=t;return F({root:["root",e&&"disableGutters"]},Dt,s)},Ht=V("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>p({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),vt=u.forwardRef(function(e,s){const o=z({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=o,i=_(o,Kt),r=u.useContext(R),a=p({},o,{disableGutters:r.disableGutters}),l=Zt(a);return x.jsx(Ht,p({className:$(l.root,n),ownerState:a,ref:s},i))});vt.muiName="ListItemSecondaryAction";const Yt=["className"],Jt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Qt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Xt=t=>{const{alignItems:e,button:s,classes:o,dense:n,disabled:i,disableGutters:r,disablePadding:a,divider:l,hasSecondaryAction:c,selected:d}=t;return F({root:["root",n&&"dense",!r&&"gutters",!a&&"padding",l&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction",d&&"selected"],container:["container"]},Tt,o)},te=V("div",{name:"MuiListItem",slot:"Root",overridesResolver:Qt})(({theme:t,ownerState:e})=>p({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&p({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${P.root}`]:{paddingRight:48}},{[`&.${O.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${O.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${O.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${O.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),ee=V("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),se=u.forwardRef(function(e,s){const o=z({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:r=!1,children:a,className:l,component:c,components:d={},componentsProps:f={},ContainerComponent:g="li",ContainerProps:{className:b}={},dense:v=!1,disabled:h=!1,disableGutters:I=!1,disablePadding:y=!1,divider:G=!1,focusVisibleClassName:S,secondaryAction:B,selected:U=!1,slotProps:E={},slots:q={}}=o,D=_(o.ContainerProps,Yt),Q=_(o,Jt),N=u.useContext(R),X=u.useMemo(()=>({dense:v||N.dense||!1,alignItems:n,disableGutters:I}),[n,N.dense,v,I]),tt=u.useRef(null);pt(()=>{i&&tt.current&&tt.current.focus()},[i]);const M=u.Children.toArray(a),nt=M.length&&Nt(M[M.length-1],["ListItemSecondaryAction"]),K=p({},o,{alignItems:n,autoFocus:i,button:r,dense:X.dense,disabled:h,disableGutters:I,disablePadding:y,divider:G,hasSecondaryAction:nt,selected:U}),it=Xt(K),rt=ut(tt,s),Z=q.root||d.Root||te,j=E.root||f.root||{},L=p({className:$(it.root,j.className,l),disabled:h},Q);let k=c||"li";return r&&(L.component=c||"div",L.focusVisibleClassName=$(O.focusVisible,S),k=mt),nt?(k=!L.component&&!c?"div":k,g==="li"&&(k==="li"?k="div":L.component==="li"&&(L.component="div")),x.jsx(R.Provider,{value:X,children:x.jsxs(ee,p({as:g,className:$(it.container,b),ref:rt,ownerState:K},D,{children:[x.jsx(Z,p({},j,!at(Z)&&{as:k,ownerState:p({},K,j.ownerState)},L,{children:M})),M.pop()]}))})):x.jsx(R.Provider,{value:X,children:x.jsxs(Z,p({},j,{as:k,ref:rt},!at(Z)&&{ownerState:p({},K,j.ownerState)},L,{children:[M,B&&x.jsx(vt,{children:B})]}))})}),oe=["className"],ne=t=>{const{alignItems:e,classes:s}=t;return F({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},It,s)},ie=V("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:t,ownerState:e})=>p({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},e.alignItems==="flex-start"&&{marginTop:8})),re=u.forwardRef(function(e,s){const o=z({props:e,name:"MuiListItemIcon"}),{className:n}=o,i=_(o,oe),r=u.useContext(R),a=p({},o,{alignItems:r.alignItems}),l=ne(a);return x.jsx(ie,p({className:$(l.root,n),ownerState:a,ref:s},i))}),ae=({color:t,...e})=>{const s=ot();return m(dt,{icon:xt,css:lt({color:t==="primary"?s.palette.primary.main:"inherit"},"",""),...e})};ae.__docgenInfo={description:"",methods:[],displayName:"SearchIcon",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ce={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},le=({color:t,...e})=>{const s=ot();return m(dt,{icon:ce,css:lt({color:t==="primary"?s.palette.primary.main:"inherit"},"",""),...e})};le.__docgenInfo={description:"",methods:[],displayName:"ClockIcon",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inherit"'}]},description:""}}};const de=t=>m(se,{...t}),pe=t=>m(qt,{...t}),ue=t=>m(re,{...t});de.__docgenInfo={description:"",methods:[],displayName:"ListItem"};pe.__docgenInfo={description:"",methods:[],displayName:"ListItemButton"};ue.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon"};const me=({backgroundColor:t,borderColor:e,color:s,iconClass:o,className:n,role:i="img",...r})=>m(ft,{component:"div",sx:{backgroundColor:t,color:s,borderColor:e,borderRadius:9999,width:34,height:34,borderWidth:2,borderStyle:"solid",display:"flex",justifyContent:"center",alignItems:"center"},children:m("i",{role:i,"aria-hidden":"true",className:o+" "+n,...r})});me.__docgenInfo={description:"",methods:[],displayName:"IESType",props:{backgroundColor:{required:!0,tsType:{name:"string"},description:""},borderColor:{required:!0,tsType:{name:"string"},description:""},color:{required:!0,tsType:{name:"string"},description:""},iconClass:{required:!0,tsType:{name:"string"},description:""},role:{defaultValue:{value:'"img"',computed:!1},required:!1}}};const fe=({fullName:t,children:e})=>et(w,{container:!0,children:[m(ft,{sx:{width:"100%"},marginBottom:2,children:m(Ct,{variant:"h4",children:"User Status"})}),et(w,{container:!0,columns:6,alignItems:"center",children:[m(w,{item:!0,xs:1,children:m(St,{variant:"circular-outlined",sx:{width:32,height:32},children:m(ht,{color:"primary"})})}),m(w,{item:!0,xs:5,children:m($t,{variant:"subtitle1",children:t})})]}),et(w,{container:!0,columns:6,children:[m(w,{item:!0,xs:1}),m(w,{item:!0,xs:5,children:e})]})]});fe.__docgenInfo={description:"",methods:[],displayName:"UserStatus",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};export{le as C,me as I,de as L,ae as S,fe as U,pe as a,ue as b,qt as c,se as d};