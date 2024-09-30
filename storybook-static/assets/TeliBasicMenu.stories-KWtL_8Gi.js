import{j as t,a as i}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{T as n}from"./TeliBasicMenu-B8FwaRZh.js";import{v as O}from"./v4-CQkTLCs1.js";import{r as T}from"./index-BP8_t0zE.js";import{T as v}from"./TeliButton-DMV69Ca-.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-CSpfAsmC.js";import"./MenuItem-_24OEzRD.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./List-B7wd7IsG.js";import"./generateUtilityClasses-DWDXFugI.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./dividerClasses-BuwNPLrC.js";import"./MenuList-DhXqMNVQ.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";/* empty css                      */import"./Grow-Bg0f54T-.js";import"./index-BVEwUaSm.js";import"./useTheme-Cxnl1_9N.js";import"./useTheme-BwLid0_q.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./utils-By8aWBlh.js";import"./Paper-P7C7xbRI.js";import"./Popper-BesQJJaZ.js";import"./useSlotProps-C0aSIFYh.js";import"./resolveComponentProps-CRsKqwAv.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BpIClzG7.js";import"./useControlled-im5M3O13.js";import"./useId-DLncWxdO.js";const{addons:B}=__STORYBOOK_MODULE_PREVIEW_API__,{global:b}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:_}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var N="storybook/actions",E=`${N}/action-event`,C={depth:10,clearOnStoryChange:!0,limit:50},f=(e,o)=>{let l=Object.getPrototypeOf(e);return!l||o(l)?l:f(l,o)},w=e=>!!(typeof e=="object"&&e&&f(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),S=e=>{if(w(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let l=Object.getOwnPropertyDescriptor(o,"view"),a=l==null?void 0:l.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...l,value:Object.create(a.constructor.prototype)}),o}return e},R=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?O():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(e,o={}){let l={...C,...o},a=function(...c){var d,p;if(o.implicit){let u=(d="__STORYBOOK_PREVIEW__"in b?b.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(u){let s=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),h=new _({phase:u.phase,name:e,deprecated:s});if(s)console.warn(h);else throw h}}let M=B.getChannel(),g=R(),I=5,m=c.map(S),P=c.length>1?m:m[0],x={id:g,count:0,data:{name:e,args:P},options:{...l,maxDepth:I+(l.depth||3),allowFunction:l.allowFunction||!1}};M.emit(E,x)};return a.isAction=!0,a.implicit=o.implicit,a}const r=[{id:"menu-item-1",onClick:y("Menu Item 1 has been selected"),label:"Donec velit libero, condimentum in sem et, faucibus finibus enim. Suspendisse potent"},{id:"menu-item-2",onClick:y("Menu Item 2 has been selected"),label:"Menu Item 2"},{id:"menu-item-3",label:"Menu Item 3"}],k={args:{label:"Menu"},render:({label:e})=>t(n,{label:e,menuItems:r,yPlacement:"bottom-start"}),decorators:[e=>t("div",{style:{height:"14em"},children:t(e,{})})],parameters:{docs:{source:{code:`
<TeliBasicMenu
  label="Menu"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `}}}},Te=k,D={args:{label:"Controlled menu"},render:({label:e})=>{const[o,l]=T.useState(!1);return t(n,{label:e,yPlacement:"bottom-start",open:o,onOpen:()=>{l(!0)},onClose:()=>{l(!1)},children:i("ul",{children:[t("li",{children:"Menu item 1"}),t("li",{children:"Menu item 2"})]})})},decorators:[e=>t("div",{style:{height:"14em"},children:t(e,{})})],parameters:{docs:{description:{story:"You can control the menu with the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props:"},source:{code:`
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
      `}}}},ve=D,j={args:{label:"Models"},render:({label:e})=>i("div",{className:"flex gap-x-3",children:[i(n,{label:e,yPlacement:"bottom-start",width:200,children:[i("div",{className:"flex justify-between gap-x-2 mb-4",children:[t("h2",{children:"Saved Models"}),t(v,{variant:"primary",size:"small",children:"New"})]}),i("ul",{className:"flex flex-col gap-y-2",children:[t("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:t("p",{children:"Model 1"})}),t("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:t("p",{children:"Model 2"})})]})]}),t(n,{label:e,menuItems:r,yPlacement:"bottom-start",children:t("h2",{children:"Menu items"})})]}),decorators:[e=>t("div",{style:{height:"14em"},children:t(e,{})})],parameters:{docs:{description:{story:"The <code>children</code> can be used to create custom menu items"},source:{code:`
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
      `}}}},Be=j,A={args:{label:"menu",menuItems:r},render:({menuItems:e})=>i("div",{className:"grid w-1/2 h-1/2 mx-auto my-44",children:[t("div",{className:"grid place-content-center",children:i("div",{className:"flex gap-x-4",children:[t(n,{label:"top-start",yPlacement:"top-start",menuItems:e}),t(n,{label:"top",yPlacement:"top",menuItems:e}),t(n,{label:"top-end",yPlacement:"top-end",menuItems:e})]})}),i("div",{className:"grid grid-rows-1 grid-cols-2 my-6",children:[i("div",{className:"flex flex-col items-start gap-y-4",children:[t(n,{label:"left-start",yPlacement:"left-start",menuItems:e}),t(n,{label:"left",yPlacement:"left",menuItems:e}),t(n,{label:"left-end",yPlacement:"left-end",menuItems:e})]}),i("div",{className:"flex flex-col items-end gap-y-4",children:[t(n,{label:"right-start",yPlacement:"right-start",menuItems:e}),t(n,{label:"right",yPlacement:"right",menuItems:e}),t(n,{label:"right-end",yPlacement:"right-end",menuItems:e})]})]}),t("div",{className:"grid place-content-center",children:i("div",{className:"flex gap-x-4",children:[t(n,{label:"bottom-start",yPlacement:"bottom-start",menuItems:e}),t(n,{label:"bottom",yPlacement:"bottom",menuItems:e}),t(n,{label:"bottom-end",yPlacement:"bottom-end",menuItems:e})]})})]}),parameters:{docs:{description:{story:"The menu can be positioned by using the <code>xPlacement</code> and <code>yPlacement</code> props."},source:{code:`
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
      `}}}},_e=A,W={args:{label:"Models"},render:({label:e})=>i("div",{className:"flex gap-x-3",children:[t(n,{label:e,yPlacement:"bottom-start",menuItems:[{id:"menu-item-1",label:"Archive",startIcon:t("i",{className:"ri-archive-fill"})},{id:"menu-item-2",label:"Inbox",startIcon:t("i",{className:"ri-inbox-2-fill"})}]}),t(n,{startIcon:t("i",{className:"ri-ghost-2-fill"}),label:"Label with icon",menuItems:r,yPlacement:"bottom-start"})]}),decorators:[e=>t("div",{style:{height:"14em"},children:t(e,{})})],parameters:{docs:{description:{story:"Icons can be added to the menu button and items"},source:{code:`
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
      `}}}},Ne=W,Ee={component:n,title:"components/Menus/TeliBasicMenu",parameters:{docs:{description:{component:`Menus display a list of choices on temporary surfaces.
        <br /> **Disambiguation**: In contrast to simple menus, simple dialogs can present 
        additional detail related to the options available for a list item or 
        provide navigational or orthogonal actions related to the primary task. 
        Although they can display the same content, simple menus are preferred 
        over simple dialogs because simple menus are less disruptive to the 
        user's current context.`}}}},Ce=["BasicMenu","CustomMenuItems","WithIcon","ControlledBasicMenu","PositionedMenu"];export{Te as BasicMenu,ve as ControlledBasicMenu,Be as CustomMenuItems,_e as PositionedMenu,Ne as WithIcon,Ce as __namedExportsOrder,Ee as default};
