import{j as e}from"./jsx-runtime-CexXSJP5.js";import{T as n}from"./TeliBasicMenu-_Ihy2MUp.js";import{v as I}from"./v4-CQkTLCs1.js";import{r as P}from"./index-BP8_t0zE.js";import{T as O}from"./TeliButton-DBBf574w.js";import"./index-CSpfAsmC.js";import"./MenuList-BbY1aGr7.js";import"./extends-BFqQA52f.js";import"./createTheme-BI2OWDpv.js";import"./styled-CwhWP0k9.js";import"./DefaultPropsProvider-D6MvNwoC.js";import"./StyledEngineProvider-CtQ9vdjp.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-rM2yqL0Y.js";import"./List-C23U3F2W.js";import"./generateUtilityClasses-CPjhs1S_.js";import"./MenuItem-CMhrTc-x.js";import"./ButtonBase-DxHKNkXA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./dividerClasses-D1EpZA7g.js";/* empty css                      */import"./Popper-Cg5SJw39.js";import"./Grow-Dt6YTbxq.js";import"./index-BVEwUaSm.js";import"./useTheme-CmkBszCQ.js";import"./useTheme-BOvJgVym.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./utils-IhZQnaQC.js";import"./useSlotProps-DmXLjd2q.js";import"./resolveComponentProps-iAOpfAUw.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DEGHyXeH.js";import"./index-BjJ5k6rE.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";const{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:v}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var B="storybook/actions",_=`${B}/action-event`,E={depth:10,clearOnStoryChange:!0,limit:50},x=(t,l)=>{let s=Object.getPrototypeOf(t);return!s||l(s)?s:x(s,l)},N=t=>!!(typeof t=="object"&&t&&x(t,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof t.persist=="function"),C=t=>{if(N(t)){let l=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));l.persist();let s=Object.getOwnPropertyDescriptor(l,"view"),o=s==null?void 0:s.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(l,"view",{...s,value:Object.create(o.constructor.prototype)}),l}return t},w=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?I():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(t,l={}){let s={...E,...l},o=function(...a){var m,d;if(l.implicit){let p=(m="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(p){let i=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new v({phase:p.phase,name:t,deprecated:i});if(i)console.warn(u);else throw u}}let y=T.getChannel(),f=w(),M=5,c=a.map(C),g=a.length>1?c:c[0],j={id:f,count:0,data:{name:t,args:g},options:{...s,maxDepth:M+(s.depth||3),allowFunction:s.allowFunction||!1}};y.emit(_,j)};return o.isAction=!0,o.implicit=l.implicit,o}const r=[{id:"menu-item-1",onClick:b("Menu Item 1 has been selected"),label:"Donec velit libero, condimentum in sem et, faucibus finibus enim. Suspendisse potent"},{id:"menu-item-2",onClick:b("Menu Item 2 has been selected"),label:"Menu Item 2"},{id:"menu-item-3",label:"Menu Item 3"}],S={args:{label:"Menu"},render:({label:t})=>e.jsx(n,{label:t,menuItems:r,yPlacement:"bottom-start"}),decorators:[t=>e.jsx("div",{style:{height:"14em"},children:e.jsx(t,{})})],parameters:{docs:{source:{code:`
<TeliBasicMenu
  label="Menu"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `}}}},Ie=S,R={args:{label:"Controlled menu"},render:({label:t})=>{const[l,s]=P.useState(!1),o=()=>{s(!0)},a=()=>{s(!1)};return e.jsx(n,{label:t,yPlacement:"bottom-start",open:l,onOpen:o,onClose:a,children:e.jsxs("ul",{children:[e.jsx("li",{children:"Menu item 1"}),e.jsx("li",{children:"Menu item 2"})]})})},decorators:[t=>e.jsx("div",{style:{height:"14em"},children:e.jsx(t,{})})],parameters:{docs:{description:{story:"You can control the menu with the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props:"},source:{code:`
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return (
  <TeliBasicMenu
    label="Controlled menu"
    yPlacement="bottom-start"
    open={open}
    onOpen={handleOpen}
    onClose={handleClose}
  >
    <ul>
      <li>Menu item 1</li>
      <li>Menu item 2</li>
    </ul>
  </TeliBasicMenu>
);
      `}}}},Pe=R,k={args:{label:"Models"},render:({label:t})=>e.jsxs("div",{className:"flex gap-x-3",children:[e.jsxs(n,{label:t,yPlacement:"bottom-start",width:200,children:[e.jsxs("div",{className:"flex justify-between gap-x-2 mb-4",children:[e.jsx("h2",{children:"Saved Models"}),e.jsx(O,{variant:"primary",size:"small",children:"New"})]}),e.jsxs("ul",{className:"flex flex-col gap-y-2",children:[e.jsx("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:e.jsx("p",{children:"Model 1"})}),e.jsx("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:e.jsx("p",{children:"Model 2"})})]})]}),e.jsx(n,{label:t,menuItems:r,yPlacement:"bottom-start",children:e.jsx("h2",{children:"Menu items"})})]}),decorators:[t=>e.jsx("div",{style:{height:"14em"},children:e.jsx(t,{})})],parameters:{docs:{description:{story:"The <code>children</code> can be used to create custom menu items"},source:{code:`
<TeliBasicMenu label="Models" yPlacement="bottom-start" width={200}>
  <div className="flex justify-between gap-x-2 mb-4">
    <h2>Saved Models</h2>
    <TeliButton variant="primary" size="small">
      New
    </TeliButton>
  </div>
  <ul className="flex flex-col gap-y-2">
    <li
      role="button"
      onClick={() => alert("Clicked menu item")}
      className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
    >
      <p>Model 1</p>
    </li>
    <li
      role="button"
      onClick={() => alert("Clicked menu item")}
      className="flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2"
    >
      <p>Model 2</p>
    </li>
  </ul>
</TeliBasicMenu>
<TeliBasicMenu
  label={label}
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
>
  <h2>Menu items</h2>
</TeliBasicMenu>
      `}}}},Oe=k,D={args:{label:"menu",menuItems:r},render:({menuItems:t})=>e.jsxs("div",{className:"grid w-1/2 h-1/2 mx-auto my-44",children:[e.jsx("div",{className:"grid place-content-center",children:e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx(n,{label:"top-start",yPlacement:"top-start",menuItems:t}),e.jsx(n,{label:"top",yPlacement:"top",menuItems:t}),e.jsx(n,{label:"top-end",yPlacement:"top-end",menuItems:t})]})}),e.jsxs("div",{className:"grid grid-rows-1 grid-cols-2 my-6",children:[e.jsxs("div",{className:"flex flex-col items-start gap-y-4",children:[e.jsx(n,{label:"left-start",yPlacement:"left-start",menuItems:t}),e.jsx(n,{label:"left",yPlacement:"left",menuItems:t}),e.jsx(n,{label:"left-end",yPlacement:"left-end",menuItems:t})]}),e.jsxs("div",{className:"flex flex-col items-end gap-y-4",children:[e.jsx(n,{label:"right-start",yPlacement:"right-start",menuItems:t}),e.jsx(n,{label:"right",yPlacement:"right",menuItems:t}),e.jsx(n,{label:"right-end",yPlacement:"right-end",menuItems:t})]})]}),e.jsx("div",{className:"grid place-content-center",children:e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx(n,{label:"bottom-start",yPlacement:"bottom-start",menuItems:t}),e.jsx(n,{label:"bottom",yPlacement:"bottom",menuItems:t}),e.jsx(n,{label:"bottom-end",yPlacement:"bottom-end",menuItems:t})]})})]}),parameters:{docs:{description:{story:"The menu can be positioned by using the <code>xPlacement</code> and <code>yPlacement</code> props."},source:{code:`
<TeliBasicMenu
  label="top-start"
  yPlacement="top-start"
  menuItems={menuItems}
/>
<TeliBasicMenu label="top" yPlacement="top" menuItems={menuItems} />
<TeliBasicMenu
  label="top-end"
  yPlacement="top-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="left-start"
  yPlacement="left-start"
  menuItems={menuItems}
/>
<TeliBasicMenu label="left" yPlacement="left" menuItems={menuItems} />
<TeliBasicMenu
  label="left-end"
  yPlacement="left-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right-start"
  yPlacement="right-start"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right"
  yPlacement="right"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="right-end"
  yPlacement="right-end"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom-start"
  yPlacement="bottom-start"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom"
  yPlacement="bottom"
  menuItems={menuItems}
/>
<TeliBasicMenu
  label="bottom-end"
  yPlacement="bottom-end"
  menuItems={menuItems}
/>
      `}}}},Te=D,A={args:{label:"Models"},render:({label:t})=>e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx(n,{label:t,yPlacement:"bottom-start",menuItems:[{id:"menu-item-1",label:"Archive",startIcon:e.jsx("i",{className:"ri-archive-fill"})},{id:"menu-item-2",label:"Inbox",startIcon:e.jsx("i",{className:"ri-inbox-2-fill"})}]}),e.jsx(n,{startIcon:e.jsx("i",{className:"ri-ghost-2-fill"}),label:"Label with icon",menuItems:r,yPlacement:"bottom-start"})]}),decorators:[t=>e.jsx("div",{style:{height:"14em"},children:e.jsx(t,{})})],parameters:{docs:{description:{story:"Icons can be added to the menu button and items"},source:{code:`
<TeliBasicMenu
  label={label}
  yPlacement="bottom-start"
  menuItems={[
    {
      id: "menu-item-1",
      label: "Archive",
      startIcon: <i className="ri-archive-fill" />,
    },
    {
      id: "menu-item-2",
      label: "Inbox",
      startIcon: <i className="ri-inbox-2-fill" />,
    },
  ]}
/>
<TeliBasicMenu
  startIcon={<i className="ri-ghost-2-fill" />}
  label="Label with icon"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `}}}},ve=A,Be={component:n,title:"components/Menus/TeliBasicMenu",parameters:{docs:{description:{component:`Menus display a list of choices on temporary surfaces.
        <br /> **Disambiguation**: In contrast to simple menus, simple dialogs can present 
        additional detail related to the options available for a list item or 
        provide navigational or orthogonal actions related to the primary task. 
        Although they can display the same content, simple menus are preferred 
        over simple dialogs because simple menus are less disruptive to the 
        user's current context.`}}}},_e=["BasicMenu","CustomMenuItems","WithIcon","ControlledBasicMenu","PositionedMenu"];export{Ie as BasicMenu,Pe as ControlledBasicMenu,Oe as CustomMenuItems,Te as PositionedMenu,ve as WithIcon,_e as __namedExportsOrder,Be as default};
