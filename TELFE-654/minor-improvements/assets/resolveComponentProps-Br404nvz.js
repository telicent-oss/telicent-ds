import{b as o}from"./DefaultPropsProvider-d5Yg5iWD.js";import{c as v}from"./styled-Cd9OY9py.js";function S(e){return typeof e=="string"}function H(e,s,n){return e===void 0||S(e)?s:o({},s,{ownerState:o({},s.ownerState,n)})}function p(e,s=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!s.includes(t)).forEach(t=>{n[t]=e[t]}),n}function y(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{s[n]=e[n]}),s}function O(e){const{getSlotProps:s,additionalProps:n,externalSlotProps:t,externalForwardedProps:l,className:u}=e;if(!s){const f=v(n==null?void 0:n.className,u,l==null?void 0:l.className,t==null?void 0:t.className),m=o({},n==null?void 0:n.style,l==null?void 0:l.style,t==null?void 0:t.style),a=o({},n,l,t);return f.length>0&&(a.className=f),Object.keys(m).length>0&&(a.style=m),{props:a,internalRef:void 0}}const N=p(o({},l,t)),g=y(t),h=y(l),r=s(N),d=v(r==null?void 0:r.className,n==null?void 0:n.className,u,l==null?void 0:l.className,t==null?void 0:t.className),c=o({},r==null?void 0:r.style,n==null?void 0:n.style,l==null?void 0:l.style,t==null?void 0:t.style),i=o({},r,n,h,g);return d.length>0&&(i.className=d),Object.keys(c).length>0&&(i.style=c),{props:i,internalRef:r.ref}}function P(e,s,n){return typeof e=="function"?e(s,n):e}export{H as a,p as e,S as i,O as m,P as r};
