import{r as a,a as o,b as m,F as f}from"./iframe-QjimQxGJ.js";import{I as u}from"./IconButton-CdzYSU6E.js";import{B as v}from"./Box-kqiIuPV6.js";import{u as g}from"./useTheme-h6Umsisj.js";import{P}from"./Popover-D6-B0sHe.js";const s=a.forwardRef((e,n)=>o(u,{ref:n,...e}));s.__docgenInfo={description:"",methods:[],displayName:"IconButton"};const p=e=>(g(),o(P,{elevation:3,...e}));p.__docgenInfo={description:`A PopOver can be used to display some content on top of another.

Things to know when using the PopOver component:
- The component is built on top of the Modal component.`,methods:[],displayName:"PopOver",props:{anchorEl:{required:!1,tsType:{name:'MUIPopOverProps["anchorEl"]',raw:'MUIPopOverProps["anchorEl"]'},description:"Used to set the position of the pop over"},anchorOrigin:{required:!1,tsType:{name:"PopoverOrigin"},description:`Anchor element anchor. This is the point on the anchor where the pop over's
\`anchorEl\` will attach to. Should not e used when anchorReference is
'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},anchorPosition:{required:!1,tsType:{name:"PopoverPosition"},description:`This is the position that may be used to set the position of the pop over.
The coordinates are relative to the application's client area.`},anchorReference:{required:!1,tsType:{name:"PopoverReference"},description:`This determines which anchor prop to refer to when setting
the position of the pop over.
@default 'anchorEl'`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},open:{required:!0,tsType:{name:"boolean"},description:"If `true`, the component is shown."},transformOrigin:{required:!1,tsType:{name:"PopoverOrigin"},description:`This is the point on the pop over which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},width:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};const T=({id:e,ariaLabel:n,icon:c,width:h=240,children:l})=>{const[t,r]=a.useState(null),i=!!t;return m(f,{children:[o(s,{id:`${e}-trigger`,"aria-label":n,"aria-haspopup":"dialog","aria-expanded":i,onClick:d=>r(d.currentTarget),color:"inherit",size:"large",children:c}),o(p,{id:`${e}-popover`,open:i,anchorEl:t,onClose:()=>r(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:o(v,{role:"dialog","aria-label":n,sx:{display:"flex",flexDirection:"column",gap:1,padding:2,width:h},children:l})})]})};T.__docgenInfo={description:"",methods:[],displayName:"IconPopover",props:{width:{defaultValue:{value:"240",computed:!1},required:!1}}};export{s as I,p as P,T as a};
