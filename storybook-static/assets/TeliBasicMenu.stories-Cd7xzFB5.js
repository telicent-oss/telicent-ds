import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{T as o}from"./TeliBasicMenu-C_iPr2Cz.js";import{d as M}from"./index-DrFu-skq.js";import{v as P}from"./v4-CQkTLCs1.js";import{r as g}from"./index-BwDkhjyp.js";import{T as _}from"./TeliButton-DFvygePR.js";import"./index-Bl6ORisp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./MenuList-BaiCNsbG.js";import"./extends-CCbyfPlC.js";import"./createTheme-CnHyYZiq.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useSlotProps-CIvTNmGa.js";import"./mergeSlotProps-BTNqYSHa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-UxOPvILp.js";import"./List-Vl0e-Exg.js";import"./generateUtilityClasses-BGohe2Km.js";import"./MenuItem-BhcFgbA2.js";import"./ButtonBase-Er_LceZN.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./dividerClasses-Ce5UXV-K.js";/* empty css                      */import"./Popper-CBif7sJe.js";import"./Grow-CFEed8lE.js";import"./index-B8XB3FuZ.js";import"./useTheme-DGd8psJl.js";import"./utils-DOhIVSbh.js";import"./Paper-Bt1avxBe.js";import"./index-D8zF22Iw.js";import"./useControlled-DpTMnm0X.js";import"./useId-bIDWZ5VS.js";var N=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let e=String(this.code).padStart(4,"0");return`SB_${this.category}_${e}`}get name(){let e=this.constructor.name;return`${this.fullErrorCode} (${e})`}get message(){let e;return this.documentation===!0?e=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?e=this.documentation:Array.isArray(this.documentation)&&(e=`
${this.documentation.map(s=>`	- ${s}`).join(`
`)}`),`${this.template()}${e!=null?`

More info: ${e}
`:""}`}},j=(e=>(e.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",e.PREVIEW_CHANNELS="PREVIEW_CHANNELS",e.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",e.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",e.PREVIEW_API="PREVIEW_API",e.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",e.PREVIEW_ROUTER="PREVIEW_ROUTER",e.PREVIEW_THEMING="PREVIEW_THEMING",e.RENDERER_HTML="RENDERER_HTML",e.RENDERER_PREACT="RENDERER_PREACT",e.RENDERER_REACT="RENDERER_REACT",e.RENDERER_SERVER="RENDERER_SERVER",e.RENDERER_SVELTE="RENDERER_SVELTE",e.RENDERER_VUE="RENDERER_VUE",e.RENDERER_VUE3="RENDERER_VUE3",e.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",e))(j||{}),T=class extends N{constructor(e){super(),this.data=e,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return M`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};const{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var v="storybook/actions",B=`${v}/action-event`,S={depth:10,clearOnStoryChange:!0,limit:50},b=(e,s)=>{let n=Object.getPrototypeOf(e);return!n||s(n)?n:b(n,s)},V=e=>!!(typeof e=="object"&&e&&b(e,s=>/^Synthetic(?:Base)?Event$/.test(s.constructor.name))&&typeof e.persist=="function"),D=e=>{if(V(e)){let s=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));s.persist();let n=Object.getOwnPropertyDescriptor(s,"view"),i=n==null?void 0:n.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(s,"view",{...n,value:Object.create(i.constructor.prototype)}),s}return e},C=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?P():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(e,s={}){let n={...S,...s},i=function(...a){var m,d;if(s.implicit){let u=(m="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(u){let l=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),p=new T({phase:u.phase,name:e,deprecated:l});if(l)console.warn(p);else throw p}}let R=O.getChannel(),x=C(),y=5,c=a.map(D),f=a.length>1?c:c[0],I={id:x,count:0,data:{name:e,args:f},options:{...n,maxDepth:y+(n.depth||3),allowFunction:n.allowFunction||!1}};R.emit(B,I)};return i.isAction=!0,i}const r=[{id:"menu-item-1",onClick:h("Menu Item 1 has been selected"),label:"Donec velit libero, condimentum in sem et, faucibus finibus enim. Suspendisse potent"},{id:"menu-item-2",onClick:h("Menu Item 2 has been selected"),label:"Menu Item 2"},{id:"menu-item-3",label:"Menu Item 3"}],w={args:{label:"Menu"},render:({label:e})=>t.jsx(o,{label:e,menuItems:r,yPlacement:"bottom-start"}),decorators:[e=>t.jsx("div",{style:{height:"14em"},children:t.jsx(e,{})})],parameters:{docs:{source:{code:`
<TeliBasicMenu
  label="Menu"
  menuItems={MENU_ITEMS}
  yPlacement="bottom-start"
/>
      `}}}},Pe=w,W={args:{label:"Controlled menu"},render:({label:e})=>{const[s,n]=g.useState(!1),i=()=>{n(!0)},a=()=>{n(!1)};return t.jsx(o,{label:e,yPlacement:"bottom-start",open:s,onOpen:i,onClose:a,children:t.jsxs("ul",{children:[t.jsx("li",{children:"Menu item 1"}),t.jsx("li",{children:"Menu item 2"})]})})},decorators:[e=>t.jsx("div",{style:{height:"14em"},children:t.jsx(e,{})})],parameters:{docs:{description:{story:"You can control the menu with the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props:"},source:{code:`
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
      `}}}},ge=W,A={args:{label:"Models"},render:({label:e})=>t.jsxs("div",{className:"flex gap-x-3",children:[t.jsxs(o,{label:e,yPlacement:"bottom-start",width:200,children:[t.jsxs("div",{className:"flex justify-between gap-x-2 mb-4",children:[t.jsx("h2",{children:"Saved Models"}),t.jsx(_,{variant:"primary",size:"small",children:"New"})]}),t.jsxs("ul",{className:"flex flex-col gap-y-2",children:[t.jsx("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:t.jsx("p",{children:"Model 1"})}),t.jsx("li",{role:"button",onClick:()=>alert("Clicked menu item"),className:"flex flex-col gap-y-2 border border-teli-whitesmoke-700 rounded py-1 px-2",children:t.jsx("p",{children:"Model 2"})})]})]}),t.jsx(o,{label:e,menuItems:r,yPlacement:"bottom-start",children:t.jsx("h2",{children:"Menu items"})})]}),decorators:[e=>t.jsx("div",{style:{height:"14em"},children:t.jsx(e,{})})],parameters:{docs:{description:{story:"The <code>children</code> can be used to create custom menu items"},source:{code:`
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
      `}}}},_e=A,k={args:{label:"menu",menuItems:r},render:({menuItems:e})=>t.jsxs("div",{className:"grid w-1/2 h-1/2 mx-auto my-44",children:[t.jsx("div",{className:"grid place-content-center",children:t.jsxs("div",{className:"flex gap-x-4",children:[t.jsx(o,{label:"top-start",yPlacement:"top-start",menuItems:e}),t.jsx(o,{label:"top",yPlacement:"top",menuItems:e}),t.jsx(o,{label:"top-end",yPlacement:"top-end",menuItems:e})]})}),t.jsxs("div",{className:"grid grid-rows-1 grid-cols-2 my-6",children:[t.jsxs("div",{className:"flex flex-col items-start gap-y-4",children:[t.jsx(o,{label:"left-start",yPlacement:"left-start",menuItems:e}),t.jsx(o,{label:"left",yPlacement:"left",menuItems:e}),t.jsx(o,{label:"left-end",yPlacement:"left-end",menuItems:e})]}),t.jsxs("div",{className:"flex flex-col items-end gap-y-4",children:[t.jsx(o,{label:"right-start",yPlacement:"right-start",menuItems:e}),t.jsx(o,{label:"right",yPlacement:"right",menuItems:e}),t.jsx(o,{label:"right-end",yPlacement:"right-end",menuItems:e})]})]}),t.jsx("div",{className:"grid place-content-center",children:t.jsxs("div",{className:"flex gap-x-4",children:[t.jsx(o,{label:"bottom-start",yPlacement:"bottom-start",menuItems:e}),t.jsx(o,{label:"bottom",yPlacement:"bottom",menuItems:e}),t.jsx(o,{label:"bottom-end",yPlacement:"bottom-end",menuItems:e})]})})]}),parameters:{docs:{description:{story:"The menu can be positioned by using the <code>xPlacement</code> and <code>yPlacement</code> props."},source:{code:`
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
      `}}}},Ne=k,$={args:{label:"Models"},render:({label:e})=>t.jsxs("div",{className:"flex gap-x-3",children:[t.jsx(o,{label:e,yPlacement:"bottom-start",menuItems:[{id:"menu-item-1",label:"Archive",startIcon:t.jsx("i",{className:"ri-archive-fill"})},{id:"menu-item-2",label:"Inbox",startIcon:t.jsx("i",{className:"ri-inbox-2-fill"})}]}),t.jsx(o,{startIcon:t.jsx("i",{className:"ri-ghost-2-fill"}),label:"Label with icon",menuItems:r,yPlacement:"bottom-start"})]}),decorators:[e=>t.jsx("div",{style:{height:"14em"},children:t.jsx(e,{})})],parameters:{docs:{description:{story:"Icons can be added to the menu button and items"},source:{code:`
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
      `}}}},je=$,Te={component:o,title:"components/Menus/TeliBasicMenu",parameters:{docs:{description:{component:`Menus display a list of choices on temporary surfaces.
        <br /> **Disambiguation**: In contrast to simple menus, simple dialogs can present 
        additional detail related to the options available for a list item or 
        provide navigational or orthogonal actions related to the primary task. 
        Although they can display the same content, simple menus are preferred 
        over simple dialogs because simple menus are less disruptive to the 
        user's current context.`}}}},Oe=["BasicMenu","CustomMenuItems","WithIcon","ControlledBasicMenu","PositionedMenu"];export{Pe as BasicMenu,ge as ControlledBasicMenu,_e as CustomMenuItems,Ne as PositionedMenu,je as WithIcon,Oe as __namedExportsOrder,Te as default};
