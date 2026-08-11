import{r as p,j as t,a as c,F as m}from"./iframe-LIGj3d-Q.js";import{I as f}from"./IconButton-E06dBbED.js";import{B as u}from"./Box-Xmc6gVQw.js";import{u as g}from"./useTheme-Drvcy2jL.js";import{P as v}from"./Popover-DB9tZCoT.js";import{I as T,F as w}from"./FlexBox-CW-13tp1.js";import{T as s}from"./Text-C1ckyoQT.js";const l=p.forwardRef((e,o)=>t(f,{ref:o,...e}));l.__docgenInfo={description:"",methods:[],displayName:"IconButton"};const d=e=>{const o=g();return t(v,{elevation:3,slotProps:{paper:{sx:{backgroundColor:o.palette.mode==="dark"?"#2A2A2A":"#eee",backgroundImage:"none",width:e.width,padding:2}}},...e})};d.__docgenInfo={description:`A PopOver can be used to display some content on top of another.

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
}`},width:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};const x=({id:e="app-info",ariaLabel:o="App information",children:n})=>{const[r,i]=p.useState(null),a=!!r;return c(m,{children:[t(l,{id:`${e}-trigger`,"aria-label":o,"aria-haspopup":"dialog","aria-expanded":a,onClick:h=>i(h.currentTarget),color:"inherit",size:"large",children:t(T,{fontSize:"medium",sx:{fontSize:24}})}),t(d,{id:`${e}-popover`,open:a,anchorEl:r,onClose:()=>i(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},width:240,children:t(u,{role:"dialog","aria-label":o,sx:{display:"flex",flexDirection:"column",gap:1},children:n})})]})};x.__docgenInfo={description:"",methods:[],displayName:"AppInfo",props:{id:{defaultValue:{value:'"app-info"',computed:!1},required:!1},ariaLabel:{defaultValue:{value:'"App information"',computed:!1},required:!1}}};const y=({label:e,value:o,id:n})=>c(w,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,children:[t(s,{variant:"caption",sx:{fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"text.secondary"},children:e}),t(s,{id:n,variant:"body2",children:o})]});y.__docgenInfo={description:"",methods:[],displayName:"AppInfoRow",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};export{x as A,l as I,d as P,y as a};
