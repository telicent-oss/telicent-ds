import{u as d,_ as m,j as p}from"./DefaultPropsProvider-CCTKYLI5.js";import{_ as i,j as u}from"./extends-EO7Nsyo1.js";import{r as C}from"./index-uubelm5h.js";import{g as f,s as x,c as _,a as g}from"./styled-DM1eSaGT.js";import{g as j}from"./generateUtilityClasses-C2NGeXhi.js";import{P as y}from"./Paper-ak1QantU.js";function v(s){return f("MuiCard",s)}j("MuiCard",["root"]);const N=["className","raised"],P=s=>{const{classes:o}=s;return g({root:["root"]},v,o)},R=x(y,{name:"MuiCard",slot:"Root",overridesResolver:(s,o)=>o.root})(()=>({overflow:"hidden"})),h=C.forwardRef(function(o,r){const t=d({props:o,name:"MuiCard"}),{className:n,raised:e=!1}=t,l=m(t,N),a=i({},t,{raised:e}),c=P(a);return u.jsx(R,i({className:_(c.root,n),elevation:e?8:void 0,ref:r,ownerState:a},l))}),M=({maxWidth:s,...o})=>p(h,{className:"Panel",sx:{maxWidth:s},...o});M.__docgenInfo={description:"",methods:[],displayName:"Card"};export{M as C};