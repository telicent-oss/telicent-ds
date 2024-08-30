import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{c as O}from"./index-Bl6ORisp.js";import{T as H}from"./TeliButton-DFvygePR.js";import{M as D}from"./MenuList-BaiCNsbG.js";import{M as K}from"./MenuItem-BhcFgbA2.js";/* empty css                      */import{P as S}from"./Popper-CBif7sJe.js";import{G as U}from"./Grow-CFEed8lE.js";import{P as A}from"./Paper-Bt1avxBe.js";import{u as F}from"./useForkRef-UxOPvILp.js";import{b as G}from"./TransitionGroupContext-Dii4aaAC.js";import{o as x}from"./useSlotProps-CIvTNmGa.js";function w(s){return s.substring(2).toLowerCase()}function W(s,c){return c.documentElement.clientWidth<s.clientX||c.documentElement.clientHeight<s.clientY}function X(s){const{children:c,disableReactTree:y=!1,mouseEvent:a="onClick",onClickAway:m,touchEvent:i="onTouchEnd"}=s,v=n.useRef(!1),l=n.useRef(null),e=n.useRef(!1),b=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{e.current=!0},0),()=>{e.current=!1}),[]);const V=F(c.ref,l),p=G(t=>{const u=b.current;b.current=!1;const d=x(l.current);if(!e.current||!l.current||"clientX"in t&&W(t,d))return;if(v.current){v.current=!1;return}let E;t.composedPath?E=t.composedPath().indexOf(l.current)>-1:E=!d.documentElement.contains(t.target)||l.current.contains(t.target),!E&&(y||!u)&&m(t)}),g=t=>u=>{b.current=!0;const d=c.props[t];d&&d(u)},h={ref:V};return i!==!1&&(h[i]=g(i)),n.useEffect(()=>{if(i!==!1){const t=w(i),u=x(l.current),d=()=>{v.current=!0};return u.addEventListener(t,p),u.addEventListener("touchmove",d),()=>{u.removeEventListener(t,p),u.removeEventListener("touchmove",d)}}},[p,i]),a!==!1&&(h[a]=g(a)),n.useEffect(()=>{if(a!==!1){const t=w(a),u=x(l.current);return u.addEventListener(t,p),()=>{u.removeEventListener(t,p)}}},[p,a]),o.jsx(n.Fragment,{children:n.cloneElement(c,h)})}const R=({buttonId:s,listId:c,emptyMessage:y="Nothing found",menuItems:a=[],open:m,onKeyDown:i,onMenuItemClick:v,children:l})=>l||(a==null?void 0:a.length)>0?o.jsxs(o.Fragment,{children:[l&&o.jsx("div",{className:"teli-menu-contents",children:l}),(a==null?void 0:a.length)>0&&o.jsx(D,{autoFocusItem:m,id:c,"aria-labelledby":s,onKeyDown:i,children:a.map(e=>o.jsxs(K,{onClick:v(e.onClick),children:[e==null?void 0:e.startIcon,e==null?void 0:e.label,e==null?void 0:e.endIcon]},e.id))})]}):o.jsx("p",{className:"teli-menu-contents teli-empty-menu-contents",children:y});try{R.displayName="BasicMenuContents",R.__docgenInfo={description:"",displayName:"BasicMenuContents",props:{buttonId:{defaultValue:null,description:"",name:"buttonId",required:!1,type:{name:"any"}},emptyMessage:{defaultValue:{value:"Nothing found"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},listId:{defaultValue:null,description:"",name:"listId",required:!1,type:{name:"any"}},menuItems:{defaultValue:{value:"[]"},description:"",name:"menuItems",required:!1,type:{name:"MenuItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLUListElement>"}},onMenuItemClick:{defaultValue:null,description:"",name:"onMenuItemClick",required:!0,type:{name:"(onClick?: ((event?: Event | SyntheticEvent<Element, Event> | undefined) => void) | undefined) => (event: Event | SyntheticEvent<Element, Event>) => void"}}}}}catch{}const j=({buttonId:s,label:c,listId:y,menuItems:a=[],defaultOpen:m=!1,disabled:i=!1,emptyMessage:v,open:l,tooltip:e,startIcon:b,endIcon:V,width:p,variant:g="tertiary",yPlacement:h="bottom",xPlacement:t=h,onOpen:u,onClose:d,children:E})=>{const{current:k}=n.useRef(l!==void 0),[_,T]=n.useState(!1),f=k?l:_,M=n.useRef(null),N=n.useRef(f),q=n.useCallback(r=>{k||T(r)},[]),L=()=>{T(r=>!r)},I=r=>{M.current&&M.current.contains(r.target)||q(!1)},P=r=>C=>{r&&r(),I(C)},B=r=>{r.key==="Tab"?(r.preventDefault(),q(!1)):r.key==="Escape"&&q(!1)};return n.useEffect(()=>{N.current=f},[f]),n.useEffect(()=>{m&&q(!0)},[]),n.useEffect(()=>{if(i&&f){T(!1);return}},[i]),o.jsxs("div",{className:"teli-basic-menu",children:[o.jsx(H,{ref:M,id:s,variant:g,tooltip:e,startIcon:b,endIcon:V,disabled:i,"aria-controls":f?"composition-menu":void 0,"aria-expanded":f?"true":void 0,"aria-haspopup":"true",onClick:u??L,className:O({"bg-teli-black-600":f}),children:c}),o.jsx(S,{transition:!0,disablePortal:!0,open:f??m,anchorEl:M.current,placement:h,modifiers:[{name:"offset",options:{offset:[0,8]}}],sx:{width:p},children:({TransitionProps:r,placement:C})=>o.jsx(U,{...r,style:{transformOrigin:t??C},children:o.jsx(A,{children:o.jsx(X,{onClickAway:d??I,children:o.jsx("div",{children:o.jsx(R,{open:f??m,menuItems:a,emptyMessage:v,buttonId:s,listId:y,onKeyDown:B,onMenuItemClick:P,children:E})})})})})})]})};try{j.displayName="TeliBasicMenu",j.__docgenInfo={description:"",displayName:"TeliBasicMenu",props:{buttonId:{defaultValue:null,description:"The id of the Button element.",name:"buttonId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The menu contents.",name:"children",required:!1,type:{name:"ReactNode"}},defaultOpen:{defaultValue:{value:"false"},description:`If true, the component is initially open. Use when the component open state
is not controlled (i.e. the open prop is not defined).`,name:"defaultOpen",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"If true, the component will be displayed in a disabled state",name:"disabled",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:null,description:"The message to be displayed when menu items are empty.",name:"emptyMessage",required:!1,type:{name:"string"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},listId:{defaultValue:null,description:"The id of the MenuList component.",name:"listId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content of the Button component.",name:"label",required:!0,type:{name:"ReactNode"}},menuItems:{defaultValue:{value:"[]"},description:"Menu content items.",name:"menuItems",required:!1,type:{name:"MenuItem[]"}},open:{defaultValue:null,description:"If true, the menu component will be shown.",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be opened. Use it for
controlled mode.`,name:"onOpen",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed. Use it for
controlled mode.`,name:"onClose",required:!1,type:{name:"((event: MouseEvent | TouchEvent) => void)"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"Tooltip contents refer to [Button component](/?path=/docs/components-telibutton--docs).",name:"tooltip",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"tertiary"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tertiary"'},{value:'"basic"'}]}},width:{defaultValue:null,description:"Width of the menu component.",name:"width",required:!1,type:{name:"number"}},xPlacement:{defaultValue:{value:"bottom"},description:"Vertical menu placement.",name:"xPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"left"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},yPlacement:{defaultValue:{value:"bottom"},description:"Horizontal menu placement.",name:"yPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"left"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'}]}}}}}catch{}export{j as T};
