import{_ as R,b as v,m as h,n as p,o as V,p as B,q as T,h as D,t as x,u as _,j as M}from"./DefaultPropsProvider-mMqPhAz4.js";import{e as N,c as E,a as G,g as O,s as U}from"./styled-Coa2-1Nt.js";import{r as d}from"./index-BBkUAzwr.js";import{s as $}from"./styled-BLcKEFBG.js";import{j as A}from"./jsx-runtime-BwZVo4Wn.js";import{u as I}from"./useThemeProps-B38RGH21.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],q=D(),W=$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function z(e){return I({props:e,name:"MuiStack",defaultTheme:q})}function H(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const J=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],K=({ownerState:e,theme:s})=>{let n=v({display:"flex",flexDirection:"column"},h({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=V(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=B(n,h({theme:s},m,(o,r)=>e.useFlexGap?{gap:x(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${J(r?t[r]:e.direction)}`]:x(c,o)}}))}return n=T(s.breakpoints,n),n};function Q(e={}){const{createStyledComponent:s=W,useThemeProps:n=z,componentName:c="MuiStack"}=e,a=()=>G({root:["root"]},o=>O(c,o),{}),t=s(K);return d.forwardRef(function(o,r){const i=n(o),l=N(i),{component:u="div",direction:k="column",spacing:j=0,divider:y,children:g,className:P,useFlexGap:C=!1}=l,F=R(l,L),S={direction:k,spacing:j,useFlexGap:C},b=a();return A.jsx(t,v({as:u,ownerState:S,ref:r,className:E(b.root,P)},F,{children:y?H(g,y):g}))})}const X=Q({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>_({props:e,name:"MuiStack"})}),Y=e=>M(X,{...e,children:e.children});Y.__docgenInfo={description:"",methods:[],displayName:"FlexBox"};export{Y as F,X as S};
