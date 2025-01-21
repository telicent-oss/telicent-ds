import{d as Je,T as Ze,b as T,u as Qe,U as Ye,_ as K,j as et}from"./DefaultPropsProvider-D55Wj1Sq.js";import{r as x,b as tt}from"./index-Du_IP5cC.js";import{u as ge}from"./useTheme-B2MLISHX.js";import{g as he}from"./generateUtilityClasses-Cw-uw2o7.js";import{g as be,s as B,c as Q,a as ve}from"./styled-aipfhsBS.js";import{j as C}from"./jsx-runtime-Dwss98Nb.js";import{u as nt}from"./useThemeProps-DM2VlJkO.js";import{c as ot,u as re,d as W}from"./TransitionGroupContext-DmssZhy-.js";import{T as rt,g as Ee,o as st}from"./utils-CtVJ-2PG.js";import{c as Me}from"./createSvgIcon-BfNnQ0Hm.js";import{P as Te}from"./index-Df2kh431.js";import{a as ne}from"./colorManipulator-oYQv4ILr.js";let we=0;function it(e){const[t,n]=x.useState(e),r=e||t;return x.useEffect(()=>{t==null&&(we+=1,n(`mui-${we}`))},[t]),r}const Ce=tt.useId;function lt(e){if(Ce!==void 0){const t=Ce();return e??t}return it(e)}function De({props:e,name:t}){return nt({props:e,name:t,defaultTheme:Je,themeId:Ze})}function at(e){return be("MuiCollapse",e)}he("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ct=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ut=e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return ve(r,at,n)},dt=B("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>T({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&T({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),ft=B("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>T({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),pt=B("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>T({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ke=x.forwardRef(function(t,n){const r=Qe({props:t,name:"MuiCollapse"}),{addEndListener:s,children:c,className:d,collapsedSize:a="0px",component:m,easing:f,in:g,onEnter:o,onEntered:i,onEntering:y,onExit:I,onExited:l,onExiting:h,orientation:p="vertical",style:u,timeout:b=Ye.standard,TransitionComponent:R=rt}=r,S=K(r,ct),D=T({},r,{orientation:p,collapsedSize:a}),v=ut(D),Y=ge(),ae=ot(),F=x.useRef(null),$=x.useRef(),L=typeof a=="number"?`${a}px`:a,P=p==="horizontal",k=P?"width":"height",_=x.useRef(null),X=re(n,_),V=E=>M=>{if(E){const O=_.current;M===void 0?E(O):E(O,M)}},z=()=>F.current?F.current[P?"clientWidth":"clientHeight"]:0,A=V((E,M)=>{F.current&&P&&(F.current.style.position="absolute"),E.style[k]=L,o&&o(E,M)}),ee=V((E,M)=>{const O=z();F.current&&P&&(F.current.style.position="");const{duration:U,easing:j}=Ee({style:u,timeout:b,easing:f},{mode:"enter"});if(b==="auto"){const te=Y.transitions.getAutoHeightDuration(O);E.style.transitionDuration=`${te}ms`,$.current=te}else E.style.transitionDuration=typeof U=="string"?U:`${U}ms`;E.style[k]=`${O}px`,E.style.transitionTimingFunction=j,y&&y(E,M)}),ce=V((E,M)=>{E.style[k]="auto",i&&i(E,M)}),J=V(E=>{E.style[k]=`${z()}px`,I&&I(E)}),ue=V(l),de=V(E=>{const M=z(),{duration:O,easing:U}=Ee({style:u,timeout:b,easing:f},{mode:"exit"});if(b==="auto"){const j=Y.transitions.getAutoHeightDuration(M);E.style.transitionDuration=`${j}ms`,$.current=j}else E.style.transitionDuration=typeof O=="string"?O:`${O}ms`;E.style[k]=L,E.style.transitionTimingFunction=U,h&&h(E)}),fe=E=>{b==="auto"&&ae.start($.current||0,E),s&&s(_.current,E)};return C.jsx(R,T({in:g,onEnter:A,onEntered:ce,onEntering:ee,onExit:J,onExited:ue,onExiting:de,addEndListener:fe,nodeRef:_,timeout:b==="auto"?null:b},S,{children:(E,M)=>C.jsx(dt,T({as:m,className:Q(v.root,d,{entered:v.entered,exited:!g&&L==="0px"&&v.hidden}[E]),style:T({[P?"minWidth":"minHeight"]:L},u),ref:X},M,{ownerState:T({},D,{state:E}),children:C.jsx(ft,{ownerState:T({},D,{state:E}),className:v.wrapper,ref:F,children:C.jsx(pt,{ownerState:T({},D,{state:E}),className:v.wrapperInner,children:c})})}))}))});ke.muiSupportAuto=!0;function mt(e){return typeof e=="string"}function It(e,t,n){return e===void 0||mt(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function gt(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function H(e,t,n){return typeof e=="function"?e(t,n):e}function ht(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function bt(...e){return x.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{ht(n,t)})},e)}function Re(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function xt(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:s,className:c}=e;if(!t){const y=Q(n==null?void 0:n.className,c,s==null?void 0:s.className,r==null?void 0:r.className),I={...n==null?void 0:n.style,...s==null?void 0:s.style,...r==null?void 0:r.style},l={...n,...s,...r};return y.length>0&&(l.className=y),Object.keys(I).length>0&&(l.style=I),{props:l,internalRef:void 0}}const d=gt({...s,...r}),a=Re(r),m=Re(s),f=t(d),g=Q(f==null?void 0:f.className,n==null?void 0:n.className,c,s==null?void 0:s.className,r==null?void 0:r.className),o={...f==null?void 0:f.style,...n==null?void 0:n.style,...s==null?void 0:s.style,...r==null?void 0:r.style},i={...f,...n,...m,...a};return g.length>0&&(i.className=g),Object.keys(o).length>0&&(i.style=o),{props:i,internalRef:f.ref}}function yt(e,t,n){return typeof e=="function"?e(t,n):e}function q(e){var o;const{elementType:t,externalSlotProps:n,ownerState:r,skipResolvingSlotProps:s=!1,...c}=e,d=s?{}:yt(n,r),{props:a,internalRef:m}=xt({...c,externalSlotProps:d}),f=bt(m,d==null?void 0:d.ref,(o=e.additionalProps)==null?void 0:o.ref);return It(t,{...a,ref:f},r)}const Et=(e,t)=>{const n=x.useRef({}),[r,s]=x.useState(()=>{const d={};return e.forEach(a=>{a.models&&Object.entries(a.models).forEach(([m,f])=>{n.current[m]={isControlled:t[m]!==void 0,getDefaultValue:f.getDefaultValue},d[m]=f.getDefaultValue(t)})}),d});return Object.fromEntries(Object.entries(n.current).map(([d,a])=>{const m=t[d]??r[d];return[d,{value:m,setControlledValue:f=>{a.isControlled||s(g=>T({},g,{[d]:f}))}}]}))};class Tt{constructor(){this.maxListeners=20,this.warnOnce=!1,this.events={}}on(t,n,r={}){let s=this.events[t];s||(s={highPriority:new Map,regular:new Map},this.events[t]=s),r.isFirst?s.highPriority.set(n,!0):s.regular.set(n,!0)}removeListener(t,n){this.events[t]&&(this.events[t].regular.delete(n),this.events[t].highPriority.delete(n))}removeAllListeners(){this.events={}}emit(t,...n){const r=this.events[t];if(!r)return;const s=Array.from(r.highPriority.keys()),c=Array.from(r.regular.keys());for(let d=s.length-1;d>=0;d-=1){const a=s[d];r.highPriority.has(a)&&a.apply(this,n)}for(let d=0;d<c.length;d+=1){const a=c[d];r.regular.has(a)&&a.apply(this,n)}}once(t,n){const r=this;this.on(t,function s(...c){r.removeListener(t,s),n.apply(r,c)})}}const wt=e=>e.isPropagationStopped!==void 0,Ae=()=>{const[e]=x.useState(()=>new Tt),t=x.useCallback((...r)=>{const[s,c,d={}]=r;d.defaultMuiPrevented=!1,!(wt(d)&&d.isPropagationStopped())&&e.emit(s,c,d)},[e]),n=x.useCallback((r,s)=>(e.on(r,s),()=>{e.removeListener(r,s)}),[e]);return{instance:{$$publishEvent:t,$$subscribeEvent:n}}};Ae.params={};const Ct=[Ae];function Rt(e){const t=x.useRef({});return e?(e.current==null&&(e.current={}),e.current):t.current}const St=e=>{const t=[...Ct,...e.plugins],n=t.reduce((p,u)=>u.getDefaultizedParams?u.getDefaultizedParams(p):p,e),r=Et(t,n),c=x.useRef({}).current,d=Rt(e.apiRef),a=x.useRef(null),m=re(a,e.rootRef),[f,g]=x.useState(()=>{const p={};return t.forEach(u=>{u.getInitialState&&Object.assign(p,u.getInitialState(n))}),p}),o=[],i={publicAPI:d,instance:c,rootRef:a},y=p=>{const u=p({instance:c,params:n,slots:n.slots,slotProps:n.slotProps,state:f,setState:g,rootRef:a,models:r});u.getRootProps&&o.push(u.getRootProps),u.publicAPI&&Object.assign(d,u.publicAPI),u.instance&&Object.assign(c,u.instance),u.contextValue&&Object.assign(i,u.contextValue)};t.forEach(y),i.runItemPlugins=p=>{let u=null,b=null;return t.forEach(R=>{if(!R.itemPlugin)return;const S=R.itemPlugin({props:p,rootRef:u,contentRef:b});S!=null&&S.rootRef&&(u=S.rootRef),S!=null&&S.contentRef&&(b=S.contentRef)}),{contentRef:b,rootRef:u}};const I=t.map(p=>p.wrapItem).filter(p=>!!p);i.wrapItem=({itemId:p,children:u})=>{let b=u;return I.forEach(R=>{b=R({itemId:p,children:b})}),b};const l=t.map(p=>p.wrapRoot).filter(p=>!!p);return i.wrapRoot=({children:p})=>{let u=p;return l.forEach(b=>{u=b({children:u})}),u},{getRootProps:(p={})=>{const u=T({role:"tree"},p,{ref:m});return o.forEach(b=>{Object.assign(u,b(p))}),u},rootRef:m,contextValue:i,instance:c}},Oe=x.createContext(null);function vt(e){const{value:t,children:n}=e;return C.jsx(Oe.Provider,{value:t,children:t.wrapRoot({children:n})})}const Pe=({params:e})=>{const t=lt(e.id),n=x.useCallback((r,s)=>s??`${t}-${r}`,[t]);return{getRootProps:()=>({id:t}),instance:{getTreeItemIdAttribute:n}}};Pe.params={id:!0};const Mt=(e,t,n)=>{e.$$publishEvent(t,n)},Z="__TREE_VIEW_ROOT_PARENT_ID__",Dt=e=>{const t={};return e.forEach((n,r)=>{t[n]=r}),t},Ve=({items:e,isItemDisabled:t,getItemLabel:n,getItemId:r})=>{const s={},c={},d={[Z]:[]},a=(f,g)=>{var I,l;const o=r?r(f):f.id;if(o==null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.","An item was provided without id in the `items` prop:",JSON.stringify(f)].join(`
`));if(s[o]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Two items were provided with the same id in the \`items\` prop: "${o}"`].join(`
`));const i=n?n(f):f.label;if(i==null)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.","An item was provided without label in the `items` prop:",JSON.stringify(f)].join(`
`));s[o]={id:o,label:i,parentId:g,idAttribute:void 0,expandable:!!((I=f.children)!=null&&I.length),disabled:t?t(f):!1},c[o]=f,d[o]=[];const y=g??Z;d[y]||(d[y]=[]),d[y].push(o),(l=f.children)==null||l.forEach(h=>a(h,o))};e.forEach(f=>a(f,null));const m={};return Object.keys(d).forEach(f=>{m[f]=Dt(d[f])}),{itemMetaMap:s,itemMap:c,itemOrderedChildrenIds:d,itemChildrenIndexes:m}},se=({instance:e,params:t,state:n,setState:r})=>{const s=x.useCallback(I=>n.items.itemMetaMap[I],[n.items.itemMetaMap]),c=x.useCallback(I=>n.items.itemMap[I],[n.items.itemMap]),d=x.useCallback(I=>{if(I==null)return!1;let l=e.getItemMeta(I);if(!l)return!1;if(l.disabled)return!0;for(;l.parentId!=null;)if(l=e.getItemMeta(l.parentId),l.disabled)return!0;return!1},[e]),a=x.useCallback(I=>{const l=e.getItemMeta(I).parentId??Z;return n.items.itemChildrenIndexes[l][I]},[e,n.items.itemChildrenIndexes]),m=x.useCallback(I=>n.items.itemOrderedChildrenIds[I??Z]??[],[n.items.itemOrderedChildrenIds]),f=I=>t.disabledItemsFocusable?!0:!e.isItemDisabled(I),g=x.useRef(!1),o=x.useCallback(()=>{g.current=!0},[]),i=x.useCallback(()=>g.current,[]);return x.useEffect(()=>{e.areItemUpdatesPrevented()||r(I=>{const l=Ve({items:t.items,isItemDisabled:t.isItemDisabled,getItemId:t.getItemId,getItemLabel:t.getItemLabel});return Object.values(I.items.itemMetaMap).forEach(h=>{l.itemMetaMap[h.id]||Mt(e,"removeItem",{id:h.id})}),T({},I,{items:l})})},[e,r,t.items,t.isItemDisabled,t.getItemId,t.getItemLabel]),{publicAPI:{getItem:c},instance:{getItemMeta:s,getItem:c,getItemsToRender:()=>{const I=l=>{const h=n.items.itemMetaMap[l];return{label:h.label,itemId:h.id,id:h.idAttribute,children:n.items.itemOrderedChildrenIds[l].map(I)}};return n.items.itemOrderedChildrenIds[Z].map(I)},getItemIndex:a,getItemOrderedChildrenIds:m,isItemDisabled:d,isItemNavigable:f,preventItemUpdates:o,areItemUpdatesPrevented:i},contextValue:{disabledItemsFocusable:t.disabledItemsFocusable}}};se.getInitialState=e=>({items:Ve({items:e.items,isItemDisabled:e.isItemDisabled,getItemId:e.getItemId,getItemLabel:e.getItemLabel})});se.getDefaultizedParams=e=>T({},e,{disabledItemsFocusable:e.disabledItemsFocusable??!1});se.params={disabledItemsFocusable:!0,items:!0,isItemDisabled:!0,getItemLabel:!0,getItemId:!0};const ie=({instance:e,params:t,models:n})=>{const r=x.useMemo(()=>{const g=new Map;return n.expandedItems.value.forEach(o=>{g.set(o,!0)}),g},[n.expandedItems.value]),s=(g,o)=>{var i;(i=t.onExpandedItemsChange)==null||i.call(t,g,o),n.expandedItems.setControlledValue(o)},c=x.useCallback(g=>r.has(g),[r]),d=x.useCallback(g=>{var o;return!!((o=e.getItemMeta(g))!=null&&o.expandable)},[e]),a=W((g,o)=>{const i=e.isItemExpanded(o);e.setItemExpansion(g,o,!i)}),m=W((g,o,i)=>{if(e.isItemExpanded(o)===i)return;let I;i?I=[o].concat(n.expandedItems.value):I=n.expandedItems.value.filter(l=>l!==o),t.onItemExpansionToggle&&t.onItemExpansionToggle(g,o,i),s(g,I)});return{publicAPI:{setItemExpansion:m},instance:{isItemExpanded:c,isItemExpandable:d,setItemExpansion:m,toggleItemExpansion:a,expandAllSiblings:(g,o)=>{const i=e.getItemMeta(o),I=e.getItemOrderedChildrenIds(i.parentId).filter(h=>e.isItemExpandable(h)&&!e.isItemExpanded(h)),l=n.expandedItems.value.concat(I);I.length>0&&(t.onItemExpansionToggle&&I.forEach(h=>{t.onItemExpansionToggle(g,h,!0)}),s(g,l))}}}};ie.models={expandedItems:{getDefaultValue:e=>e.defaultExpandedItems}};const kt=[];ie.getDefaultizedParams=e=>T({},e,{defaultExpandedItems:e.defaultExpandedItems??kt});ie.params={expandedItems:!0,defaultExpandedItems:!0,onExpandedItemsChange:!0,onItemExpansionToggle:!0};const Fe=(e,t)=>{let n=t.length-1;for(;n>=0&&!e.isItemNavigable(t[n]);)n-=1;if(n!==-1)return t[n]},At=(e,t)=>{const n=e.getItemMeta(t),r=e.getItemOrderedChildrenIds(n.parentId),s=e.getItemIndex(t);if(s===0)return n.parentId;let c=r[s-1],d=Fe(e,e.getItemOrderedChildrenIds(c));for(;e.isItemExpanded(c)&&d!=null;)c=d,d=e.getItemOrderedChildrenIds(c).find(e.isItemNavigable);return c},oe=(e,t)=>{if(e.isItemExpanded(t)){const r=e.getItemOrderedChildrenIds(t).find(e.isItemNavigable);if(r!=null)return r}let n=e.getItemMeta(t);for(;n!=null;){const r=e.getItemOrderedChildrenIds(n.parentId),s=e.getItemIndex(n.id);if(s<r.length-1){let c=s+1;for(;!e.isItemNavigable(r[c])&&c<r.length-1;)c+=1;if(e.isItemNavigable(r[c]))return r[c]}n=e.getItemMeta(n.parentId)}return null},$e=e=>{let t=null;for(;t==null||e.isItemExpanded(t);){const n=e.getItemOrderedChildrenIds(t),r=Fe(e,n);if(r==null)return t;t=r}return t},G=e=>e.getItemOrderedChildrenIds(null).find(e.isItemNavigable),je=(e,t,n)=>{if(t===n)return[t,n];const r=e.getItemMeta(t),s=e.getItemMeta(n);if(r.parentId===s.id||s.parentId===r.id)return s.parentId===r.id?[r.id,s.id]:[s.id,r.id];const c=[r.id],d=[s.id];let a=r.parentId,m=s.parentId,f=d.indexOf(a)!==-1,g=c.indexOf(m)!==-1,o=!0,i=!0;for(;!g&&!f;)o&&(c.push(a),f=d.indexOf(a)!==-1,o=a!==null,!f&&o&&(a=e.getItemMeta(a).parentId)),i&&!f&&(d.push(m),g=c.indexOf(m)!==-1,i=m!==null,!g&&i&&(m=e.getItemMeta(m).parentId));const y=f?a:m,I=e.getItemOrderedChildrenIds(y),l=c[c.indexOf(y)-1],h=d[d.indexOf(y)-1];return I.indexOf(l)<I.indexOf(h)?[t,n]:[n,t]},Ot=(e,t,n)=>{const r=m=>{if(e.isItemExpandable(m)&&e.isItemExpanded(m))return e.getItemOrderedChildrenIds(m)[0];let f=e.getItemMeta(m);for(;f!=null;){const g=e.getItemOrderedChildrenIds(f.parentId),o=e.getItemIndex(f.id);if(o<g.length-1)return g[o+1];f=e.getItemMeta(f.parentId)}throw new Error("Invalid range")},[s,c]=je(e,t,n),d=[s];let a=s;for(;a!==c;)a=r(a),e.isItemDisabled(a)||d.push(a);return d},Pt=e=>{let t=G(e);const n=[];for(;t!=null;)n.push(t),t=oe(e,t);return n},me=e=>Array.isArray(e)?e:e!=null?[e]:[],Ie=e=>{const t={};return e.forEach(n=>{t[n]=!0}),t},le=({instance:e,params:t,models:n})=>{const r=x.useRef(null),s=x.useRef({}),c=x.useMemo(()=>{const l=new Map;return Array.isArray(n.selectedItems.value)?n.selectedItems.value.forEach(h=>{l.set(h,!0)}):n.selectedItems.value!=null&&l.set(n.selectedItems.value,!0),l},[n.selectedItems.value]),d=(l,h)=>{if(t.onItemSelectionToggle)if(t.multiSelect){const p=h.filter(b=>!e.isItemSelected(b)),u=n.selectedItems.value.filter(b=>!h.includes(b));p.forEach(b=>{t.onItemSelectionToggle(l,b,!0)}),u.forEach(b=>{t.onItemSelectionToggle(l,b,!1)})}else h!==n.selectedItems.value&&(n.selectedItems.value!=null&&t.onItemSelectionToggle(l,n.selectedItems.value,!1),h!=null&&t.onItemSelectionToggle(l,h,!0));t.onSelectedItemsChange&&t.onSelectedItemsChange(l,h),n.selectedItems.setControlledValue(h)},a=l=>c.has(l),m=(l,h,p=!1)=>{if(t.disableSelection)return;let u;if(p){const b=me(n.selectedItems.value);e.isItemSelected(h)?u=b.filter(R=>R!==h):u=[h].concat(b)}else u=t.multiSelect?[h]:h;d(l,u),r.current=h,s.current={}},f=(l,[h,p])=>{if(t.disableSelection||!t.multiSelect)return;let u=me(n.selectedItems.value).slice();Object.keys(s.current).length>0&&(u=u.filter(D=>!s.current[D]));const b=Ie(u),R=Ot(e,h,p),S=R.filter(D=>!b[D]);u=u.concat(S),d(l,u),s.current=Ie(R)};return{getRootProps:()=>({"aria-multiselectable":t.multiSelect}),instance:{isItemSelected:a,selectItem:m,selectAllNavigableItems:l=>{if(t.disableSelection||!t.multiSelect)return;const h=Pt(e);d(l,h),s.current=Ie(h)},expandSelectionRange:(l,h)=>{if(r.current!=null){const[p,u]=je(e,h,r.current);f(l,[p,u])}},selectRangeFromStartToItem:(l,h)=>{f(l,[G(e),h])},selectRangeFromItemToEnd:(l,h)=>{f(l,[h,$e(e)])},selectItemFromArrowNavigation:(l,h,p)=>{if(t.disableSelection||!t.multiSelect)return;let u=me(n.selectedItems.value).slice();Object.keys(s.current).length===0?(u.push(p),s.current={[h]:!0,[p]:!0}):(s.current[h]||(s.current={}),s.current[p]?(u=u.filter(b=>b!==h),delete s.current[h]):(u.push(p),s.current[p]=!0)),d(l,u)}},contextValue:{selection:{multiSelect:t.multiSelect}}}};le.models={selectedItems:{getDefaultValue:e=>e.defaultSelectedItems}};const Vt=[];le.getDefaultizedParams=e=>T({},e,{disableSelection:e.disableSelection??!1,multiSelect:e.multiSelect??!1,defaultSelectedItems:e.defaultSelectedItems??(e.multiSelect?Vt:null)});le.params={disableSelection:!0,multiSelect:!0,defaultSelectedItems:!0,selectedItems:!0,onSelectedItemsChange:!0,onItemSelectionToggle:!0};const Se=1e3;class Ft{constructor(t=Se){this.timeouts=new Map,this.cleanupTimeout=Se,this.cleanupTimeout=t}register(t,n,r){this.timeouts||(this.timeouts=new Map);const s=setTimeout(()=>{typeof n=="function"&&n(),this.timeouts.delete(r.cleanupToken)},this.cleanupTimeout);this.timeouts.set(r.cleanupToken,s)}unregister(t){const n=this.timeouts.get(t.cleanupToken);n&&(this.timeouts.delete(t.cleanupToken),clearTimeout(n))}reset(){this.timeouts&&(this.timeouts.forEach((t,n)=>{this.unregister({cleanupToken:n})}),this.timeouts=void 0)}}class $t{constructor(){this.registry=new FinalizationRegistry(t=>{typeof t=="function"&&t()})}register(t,n,r){this.registry.register(t,n,r)}unregister(t){this.registry.unregister(t)}reset(){}}class jt{}function Nt(e){let t=0;return function(r,s,c){e.registry===null&&(e.registry=typeof FinalizationRegistry<"u"?new $t:new Ft);const[d]=x.useState(new jt),a=x.useRef(null),m=x.useRef();m.current=c;const f=x.useRef(null);if(!a.current&&m.current){const g=(o,i)=>{var y;i.defaultMuiPrevented||(y=m.current)==null||y.call(m,o,i)};a.current=r.$$subscribeEvent(s,g),t+=1,f.current={cleanupToken:t},e.registry.register(d,()=>{var o;(o=a.current)==null||o.call(a),a.current=null,f.current=null},f.current)}else!m.current&&a.current&&(a.current(),a.current=null,f.current&&(e.registry.unregister(f.current),f.current=null));x.useEffect(()=>{if(!a.current&&m.current){const g=(o,i)=>{var y;i.defaultMuiPrevented||(y=m.current)==null||y.call(m,o,i)};a.current=r.$$subscribeEvent(s,g)}return f.current&&e.registry&&(e.registry.unregister(f.current),f.current=null),()=>{var g;(g=a.current)==null||g.call(a),a.current=null}},[r,s])}}const Lt={registry:null},_t=Nt(Lt),Ne=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?Ne(t.shadowRoot):t:null},zt=(e,t)=>{const n=s=>{const c=e.getItemMeta(s);return c&&(c.parentId==null||e.isItemExpanded(c.parentId))};let r;return Array.isArray(t)?r=t.find(n):t!=null&&n(t)&&(r=t),r==null&&(r=G(e)),r},xe=({instance:e,params:t,state:n,setState:r,models:s,rootRef:c})=>{const d=zt(e,s.selectedItems.value),a=W(p=>{const u=typeof p=="function"?p(n.focusedItemId):p;n.focusedItemId!==u&&r(b=>T({},b,{focusedItemId:u}))}),m=x.useCallback(()=>!!c.current&&c.current.contains(Ne(st(c.current))),[c]),f=x.useCallback(p=>n.focusedItemId===p&&m(),[n.focusedItemId,m]),g=p=>{const u=e.getItemMeta(p);return u&&(u.parentId==null||e.isItemExpanded(u.parentId))},o=(p,u)=>{const b=e.getItemMeta(u),R=document.getElementById(e.getTreeItemIdAttribute(u,b.idAttribute));R&&R.focus(),a(u),t.onItemFocus&&t.onItemFocus(p,u)},i=W((p,u)=>{g(u)&&o(p,u)}),y=W(p=>{let u;Array.isArray(s.selectedItems.value)?u=s.selectedItems.value.find(g):s.selectedItems.value!=null&&g(s.selectedItems.value)&&(u=s.selectedItems.value),u==null&&(u=G(e)),o(p,u)}),I=W(()=>{if(n.focusedItemId==null)return;const p=e.getItemMeta(n.focusedItemId);if(p){const u=document.getElementById(e.getTreeItemIdAttribute(n.focusedItemId,p.idAttribute));u&&u.blur()}a(null)}),l=p=>p===d;_t(e,"removeItem",({id:p})=>{n.focusedItemId===p&&e.focusDefaultItem(null)});const h=p=>u=>{var b;(b=p.onFocus)==null||b.call(p,u),!u.defaultMuiPrevented&&u.target===u.currentTarget&&e.focusDefaultItem(u)};return{getRootProps:p=>({onFocus:h(p)}),publicAPI:{focusItem:i},instance:{isItemFocused:f,canItemBeTabbed:l,focusItem:i,focusDefaultItem:y,removeFocusedItem:I}}};xe.getInitialState=()=>({focusedItemId:null});xe.params={onItemFocus:!0};function Ut(e){return!!e&&e.length===1&&!!e.match(/\S/)}const Le=({instance:e,params:t,state:n})=>{const s=ge().direction==="rtl",c=x.useRef({}),d=W(o=>{c.current=o(c.current)});x.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const o={},i=y=>{o[y.id]=y.label.substring(0,1).toLowerCase()};Object.values(n.items.itemMetaMap).forEach(i),c.current=o},[n.items.itemMetaMap,t.getItemId,e]);const a=(o,i)=>{const y=i.toLowerCase(),I=u=>{const b=oe(e,u);return b===null?G(e):b};let l=null,h=I(o);const p={};for(;l==null&&!p[h];)c.current[h]===y?l=h:(p[h]=!0,h=I(h));return l},m=o=>!t.disableSelection&&!e.isItemDisabled(o),f=o=>!e.isItemDisabled(o)&&e.isItemExpandable(o);return{instance:{updateFirstCharMap:d,handleItemKeyDown:(o,i)=>{if(o.defaultMuiPrevented||o.altKey||o.currentTarget!==o.target)return;const y=o.ctrlKey||o.metaKey,I=o.key;switch(!0){case(I===" "&&m(i)):{o.preventDefault(),t.multiSelect&&o.shiftKey?e.expandSelectionRange(o,i):t.multiSelect?e.selectItem(o,i,!0):e.selectItem(o,i);break}case I==="Enter":{f(i)?(e.toggleItemExpansion(o,i),o.preventDefault()):m(i)&&(t.multiSelect?(o.preventDefault(),e.selectItem(o,i,!0)):e.isItemSelected(i)||(e.selectItem(o,i),o.preventDefault()));break}case I==="ArrowDown":{const l=oe(e,i);l&&(o.preventDefault(),e.focusItem(o,l),t.multiSelect&&o.shiftKey&&m(l)&&e.selectItemFromArrowNavigation(o,i,l));break}case I==="ArrowUp":{const l=At(e,i);l&&(o.preventDefault(),e.focusItem(o,l),t.multiSelect&&o.shiftKey&&m(l)&&e.selectItemFromArrowNavigation(o,i,l));break}case(I==="ArrowRight"&&!s||I==="ArrowLeft"&&s):{if(e.isItemExpanded(i)){const l=oe(e,i);l&&(e.focusItem(o,l),o.preventDefault())}else f(i)&&(e.toggleItemExpansion(o,i),o.preventDefault());break}case(I==="ArrowLeft"&&!s||I==="ArrowRight"&&s):{if(f(i)&&e.isItemExpanded(i))e.toggleItemExpansion(o,i),o.preventDefault();else{const l=e.getItemMeta(i).parentId;l&&(e.focusItem(o,l),o.preventDefault())}break}case I==="Home":{m(i)&&t.multiSelect&&y&&o.shiftKey?e.selectRangeFromStartToItem(o,i):e.focusItem(o,G(e)),o.preventDefault();break}case I==="End":{m(i)&&t.multiSelect&&y&&o.shiftKey?e.selectRangeFromItemToEnd(o,i):e.focusItem(o,$e(e)),o.preventDefault();break}case I==="*":{e.expandAllSiblings(o,i),o.preventDefault();break}case(I==="a"&&y&&t.multiSelect&&!t.disableSelection):{e.selectAllNavigableItems(o),o.preventDefault();break}case(!y&&!o.shiftKey&&Ut(I)):{const l=a(i,I);l!=null&&(e.focusItem(o,l),o.preventDefault());break}}}}}};Le.params={};const _e=({slots:e,slotProps:t})=>({contextValue:{icons:{slots:{collapseIcon:e.collapseIcon,expandIcon:e.expandIcon,endIcon:e.endIcon},slotProps:{collapseIcon:t.collapseIcon,expandIcon:t.expandIcon,endIcon:t.endIcon}}}});_e.params={};const Kt=[Pe,se,ie,le,xe,Le,_e],ye=()=>{const e=x.useContext(Oe);if(e==null)throw new Error(["MUI X: Could not find the Tree View context.","It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));return e},Wt=["slots","slotProps","apiRef"],Bt=e=>{let{props:{slots:t,slotProps:n,apiRef:r},plugins:s,rootRef:c}=e,d=K(e.props,Wt);const a={};s.forEach(g=>{Object.assign(a,g.params)});const m={plugins:s,rootRef:c,slots:t??{},slotProps:n??{},apiRef:r},f={};return Object.keys(d).forEach(g=>{const o=d[g];a[g]?m[g]=o:f[g]=o}),{pluginParams:m,slots:t,slotProps:n,otherProps:f}};function Ht(e){return be("MuiRichTreeView",e)}he("MuiRichTreeView",["root"]);function qt(e,t,n=void 0){const r={};for(const s in e){const c=e[s];let d="",a=!0;for(let m=0;m<c.length;m+=1){const f=c[m];f&&(d+=(a===!0?"":" ")+t(f),a=!1,n&&n[f]&&(d+=" "+n[f]))}r[s]=d}return r}function Gt(e){const{instance:t,selection:{multiSelect:n}}=ye(),r=t.isItemExpandable(e),s=t.isItemExpanded(e),c=t.isItemFocused(e),d=t.isItemSelected(e),a=t.isItemDisabled(e);return{disabled:a,expanded:s,selected:d,focused:c,handleExpansion:o=>{if(!a){c||t.focusItem(o,e);const i=n&&(o.shiftKey||o.ctrlKey||o.metaKey);r&&!(i&&t.isItemExpanded(e))&&t.toggleItemExpansion(o,e)}},handleSelection:o=>{a||(c||t.focusItem(o,e),n&&(o.shiftKey||o.ctrlKey||o.metaKey)?o.shiftKey?t.expandSelectionRange(o,e):t.selectItem(o,e,!0):t.selectItem(o,e))},preventSelection:o=>{(o.shiftKey||o.ctrlKey||o.metaKey||a)&&o.preventDefault()}}}const Xt=["classes","className","displayIcon","expansionIcon","icon","label","itemId","onClick","onMouseDown"],ze=x.forwardRef(function(t,n){const{classes:r,className:s,displayIcon:c,expansionIcon:d,icon:a,label:m,itemId:f,onClick:g,onMouseDown:o}=t,i=K(t,Xt),{disabled:y,expanded:I,selected:l,focused:h,handleExpansion:p,handleSelection:u,preventSelection:b}=Gt(f),R=a||d||c,S=v=>{b(v),o&&o(v)},D=v=>{p(v),u(v),g&&g(v)};return C.jsxs("div",T({},i,{className:Q(s,r.root,I&&r.expanded,l&&r.selected,h&&r.focused,y&&r.disabled),onClick:D,onMouseDown:S,ref:n,children:[C.jsx("div",{className:r.iconContainer,children:R}),C.jsx("div",{className:r.label,children:m})]}))});function Jt(e){return be("MuiTreeItem",e)}const N=he("MuiTreeItem",["root","groupTransition","content","expanded","selected","focused","disabled","iconContainer","label"]),Zt=Me(C.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"TreeViewExpandIcon"),Qt=Me(C.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"TreeViewCollapseIcon");function Ue(e){const{children:t,itemId:n}=e,{wrapItem:r}=ye();return r({children:t,itemId:n})}Ue.propTypes={children:Te.node,itemId:Te.string.isRequired};const Yt=["children","className","slots","slotProps","ContentComponent","ContentProps","itemId","id","label","onClick","onMouseDown","onFocus","onBlur","onKeyDown"],en=["ownerState"],tn=["ownerState"],nn=["ownerState"],on=e=>{const{classes:t}=e;return qt({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],groupTransition:["groupTransition"]},Jt,t)},rn=B("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),sn=B(ze,{name:"MuiTreeItem",slot:"Content",overridesResolver:(e,t)=>[t.content,t.iconContainer&&{[`& .${N.iconContainer}`]:t.iconContainer},t.label&&{[`& .${N.label}`]:t.label}]})(({theme:e})=>({padding:e.spacing(.5,1),borderRadius:e.shape.borderRadius,width:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",gap:e.spacing(1),cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${N.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${N.focused}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${N.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ne(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ne(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ne(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${N.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ne(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`& .${N.iconContainer}`]:{width:16,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${N.label}`]:T({width:"100%",boxSizing:"border-box",minWidth:0,position:"relative"},e.typography.body1)})),ln=B(ke,{name:"MuiTreeItem",slot:"GroupTransition",overridesResolver:(e,t)=>t.groupTransition})({margin:0,padding:0,paddingLeft:12}),an=x.forwardRef(function(t,n){const{icons:r,runItemPlugins:s,selection:{multiSelect:c},disabledItemsFocusable:d,instance:a}=ye(),m=De({props:t,name:"MuiTreeItem"}),{children:f,className:g,slots:o,slotProps:i,ContentComponent:y=ze,ContentProps:I,itemId:l,id:h,label:p,onClick:u,onMouseDown:b,onBlur:R,onKeyDown:S}=m,D=K(m,Yt),{contentRef:v,rootRef:Y}=s(m),ae=re(n,Y),F=re(I==null?void 0:I.ref,v),$={expandIcon:(o==null?void 0:o.expandIcon)??r.slots.expandIcon??Zt,collapseIcon:(o==null?void 0:o.collapseIcon)??r.slots.collapseIcon??Qt,endIcon:(o==null?void 0:o.endIcon)??r.slots.endIcon,icon:o==null?void 0:o.icon,groupTransition:o==null?void 0:o.groupTransition},L=w=>Array.isArray(w)?w.length>0&&w.some(L):!!w,P=L(f),k=a.isItemExpanded(l),_=a.isItemFocused(l),X=a.isItemSelected(l),V=a.isItemDisabled(l),z=T({},m,{expanded:k,focused:_,selected:X,disabled:V}),A=on(z),ee=$.groupTransition??void 0,ce=q({elementType:ee,ownerState:{},externalSlotProps:i==null?void 0:i.groupTransition,additionalProps:{unmountOnExit:!0,in:k,component:"ul",role:"group"},className:A.groupTransition}),J=k?$.collapseIcon:$.expandIcon,ue=q({elementType:J,ownerState:{},externalSlotProps:w=>k?T({},H(r.slotProps.collapseIcon,w),H(i==null?void 0:i.collapseIcon,w)):T({},H(r.slotProps.expandIcon,w),H(i==null?void 0:i.expandIcon,w))}),de=K(ue,en),fe=P&&J?C.jsx(J,T({},de)):null,E=P?void 0:$.endIcon,M=q({elementType:E,ownerState:{},externalSlotProps:w=>P?{}:T({},H(r.slotProps.endIcon,w),H(i==null?void 0:i.endIcon,w))}),O=K(M,tn),U=E?C.jsx(E,T({},O)):null,j=$.icon,te=q({elementType:j,ownerState:{},externalSlotProps:i==null?void 0:i.icon}),Ke=K(te,nn),We=j?C.jsx(j,T({},Ke)):null;let pe;c?pe=X:X&&(pe=!0);function Be(w){!_&&(!V||d)&&w.currentTarget===w.target&&a.focusItem(w,l)}function He(w){R==null||R(w),a.removeFocusedItem()}const qe=w=>{S==null||S(w),a.handleItemKeyDown(w,l)},Ge=a.getTreeItemIdAttribute(l,h),Xe=a.canItemBeTabbed(l)?0:-1;return C.jsx(Ue,{itemId:l,children:C.jsxs(rn,T({className:Q(A.root,g),role:"treeitem","aria-expanded":P?k:void 0,"aria-selected":pe,"aria-disabled":V||void 0,id:Ge,tabIndex:Xe},D,{ownerState:z,onFocus:Be,onBlur:He,onKeyDown:qe,ref:ae,children:[C.jsx(sn,T({as:y,classes:{root:A.content,expanded:A.expanded,selected:A.selected,focused:A.focused,disabled:A.disabled,iconContainer:A.iconContainer,label:A.label},label:p,itemId:l,onClick:u,onMouseDown:b,icon:We,expansionIcon:fe,displayIcon:U,ownerState:z},I,{ref:F})),f&&C.jsx(ln,T({as:ee},ce,{children:f}))]}))})}),cn=e=>{const{classes:t}=e;return ve({root:["root"]},Ht,t)},un=B("ul",{name:"MuiRichTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0,position:"relative"});function dn({slots:e,slotProps:t,label:n,id:r,itemId:s,children:c}){const d=(e==null?void 0:e.item)??an,a=q({elementType:d,externalSlotProps:t==null?void 0:t.item,additionalProps:{itemId:s,id:r,label:n},ownerState:{itemId:s,label:n}});return C.jsx(d,T({},a,{children:c}))}const fn=x.forwardRef(function(t,n){const r=De({props:t,name:"MuiRichTreeView"}),{pluginParams:s,slots:c,slotProps:d,otherProps:a}=Bt({props:r,plugins:Kt,rootRef:n}),{getRootProps:m,contextValue:f,instance:g}=St(s),o=cn(r),i=(c==null?void 0:c.root)??un,y=q({elementType:i,externalSlotProps:d==null?void 0:d.root,externalForwardedProps:a,className:o.root,getSlotProps:m,ownerState:r}),I=g.getItemsToRender(),l=({label:h,itemId:p,id:u,children:b})=>C.jsx(dn,{slots:c,slotProps:d,label:h,id:u,itemId:p,children:b==null?void 0:b.map(l)},p);return C.jsx(vt,{value:f,children:C.jsx(i,T({},y,{children:I.map(l)}))})}),pn=({alwaysExpandedIds:e=[],...t})=>{const n=ge(),[r,s]=x.useState(e),c={backgroundColor:n.palette.primary.main,color:n.palette.primary.contrastText};return et(fn,{expandedItems:r,onExpandedItemsChange:(d,a)=>{s([...new Set([...e,...a])])},...t,sx:{".MuiTreeItem-content":{":hover":{...c},"&.Mui-selected.Mui-focused":{...c,":hover":{...c}},"&.Mui-selected":{...c,":hover":{...c}}}}})};pn.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:""},alwaysExpandedIds:{defaultValue:{value:"[]",computed:!1},required:!1}}};export{pn as T,lt as u};
