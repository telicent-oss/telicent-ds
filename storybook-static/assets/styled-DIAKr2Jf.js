import{_ as n}from"./extends-CCbyfPlC.js";import{_ as F,d as W,s as $,j as I}from"./createTheme-CnHyYZiq.js";import{i as q,h as z}from"./styled-jK8V3O51.js";const B=["ownerState"],G=["variants"],H=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function J(e){return Object.keys(e).length===0}function K(e){return typeof e=="string"&&e.charCodeAt(0)>96}function A(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Q=W(),U=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function w({defaultTheme:e,theme:s,themeId:t}){return J(s)?e:s[t]||s}function X(e){return e?(s,t)=>t[e]:null}function x(e,s){let{ownerState:t}=s,d=F(s,B);const l=typeof e=="function"?e(n({ownerState:t},d)):e;if(Array.isArray(l))return l.flatMap(h=>x(h,n({ownerState:t},d)));if(l&&typeof l=="object"&&Array.isArray(l.variants)){const{variants:h=[]}=l;let m=F(l,G);return h.forEach(o=>{let i=!0;typeof o.props=="function"?i=o.props(n({ownerState:t},d,t)):Object.keys(o.props).forEach(p=>{(t==null?void 0:t[p])!==o.props[p]&&d[p]!==o.props[p]&&(i=!1)}),i&&(Array.isArray(m)||(m=[m]),m.push(typeof o.style=="function"?o.style(n({ownerState:t},d,t)):o.style))}),m}return l}function Y(e={}){const{themeId:s,defaultTheme:t=Q,rootShouldForwardProp:d=A,slotShouldForwardProp:l=A}=e,h=c=>$(n({},c,{theme:w(n({},c,{defaultTheme:t,themeId:s}))}));return h.__mui_systemSx=!0,(c,m={})=>{q(c,r=>r.filter(a=>!(a!=null&&a.__mui_systemSx)));const{name:o,slot:i,skipVariantsResolver:p,skipSx:b,overridesResolver:j=X(U(i))}=m,V=F(m,H),E=p!==void 0?p:i&&i!=="Root"&&i!=="root"||!1,N=b||!1;let L,v=A;i==="Root"||i==="root"?v=d:i?v=l:K(c)&&(v=void 0);const R=z(c,n({shouldForwardProp:v,label:L},V)),k=r=>typeof r=="function"&&r.__emotion_real!==r||I(r)?a=>x(r,n({},a,{theme:w({theme:a.theme,defaultTheme:t,themeId:s})})):r,C=(r,...a)=>{let O=k(r);const y=a?a.map(k):[];o&&j&&y.push(f=>{const u=w(n({},f,{defaultTheme:t,themeId:s}));if(!u.components||!u.components[o]||!u.components[o].styleOverrides)return null;const S=u.components[o].styleOverrides,_={};return Object.entries(S).forEach(([D,M])=>{_[D]=x(M,n({},f,{theme:u}))}),j(f,_)}),o&&!E&&y.push(f=>{var u;const S=w(n({},f,{defaultTheme:t,themeId:s})),_=S==null||(u=S.components)==null||(u=u[o])==null?void 0:u.variants;return x({variants:_},n({},f,{theme:S}))}),N||y.push(h);const P=y.length-a.length;if(Array.isArray(r)&&P>0){const f=new Array(P).fill("");O=[...r,...f],O.raw=[...r.raw,...f]}const T=R(O,...y);return c.muiName&&(T.muiName=c.muiName),T};return R.withConfig&&(C.withConfig=R.withConfig),C}}const te=Y();export{te as s};
