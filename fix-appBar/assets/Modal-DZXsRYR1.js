import{j as e,a as i}from"./DefaultPropsProvider-DFY4ak0N.js";import{C as s}from"./Divider-Dnn3mKg6.js";import{z as o}from"./index-mSkvzYyn.js";import{M as c}from"./Popover-Am7Us3VU.js";import{B as l}from"./Box-BDaEidkD.js";import{B as p}from"./Button-bPCeHTF6.js";const d=o.object({type:o.union([o.string(),o.function(),o.symbol()]),props:o.record(o.any()),key:o.union([o.string(),o.number(),o.null()]).optional()}),u=o.object({open:o.boolean(),children:d,className:o.string().optional(),id:o.string().optional(),role:o.string().optional(),closeAfterTransition:o.boolean().optional(),components:o.any().optional(),componentsProps:o.any().optional(),container:o.any().optional(),disableAutoFocus:o.boolean().optional(),disableEnforceFocus:o.boolean().optional(),disableEscapeKeyDown:o.boolean().optional(),disablePortal:o.boolean().optional(),disableRestoreFocus:o.boolean().optional(),disableScrollLock:o.boolean().optional(),hideBackdrop:o.boolean().optional(),keepMounted:o.boolean().optional(),manager:o.any().optional(),onBackdropClick:o.function().optional(),onClose:o.function().optional(),onTransitionEnter:o.function().optional(),onTransitionExit:o.function().optional(),sx:o.any().optional(),BackdropComponent:o.any().optional(),BackdropProps:o.any().optional(),slots:o.any().optional(),slotProps:o.any().optional()}),m=u.omit({slots:!0,slotProps:!0,BackdropComponent:!0,BackdropProps:!0,closeAfterTransition:!0,components:!0,componentsProps:!0,container:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableEscapeKeyDown:!0,disableRestoreFocus:!0,hideBackdrop:!0,keepMounted:!0,onBackdropClick:!0,onTransitionEnter:!0,onTransitionExit:!0}).passthrough(),b=({children:t,...n})=>(m.parse({children:t,...n}),e(c,{...n,children:i(l,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",p:2,borderRadius:1,boxShadow:24,minWidth:300,maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column"},children:[e(l,{sx:{display:"flex",justifyContent:"flex-end"},children:i(p,{onClick:r=>{var a;return(a=n.onClose)==null?void 0:a.call(n,r,"closeButtonClick")},color:"inherit",sx:{fontSize:18},children:["Close ",e(s,{sx:{fontSize:14}})]})}),t]})}));b.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"union",raw:`| ((
    event: {},
    reason:
      | "backdropClick" // MUI in-built
      | "escapeKeyDown" // MUI in-built
      | "closeButtonClick" // custom event. Maybe delete and _misuse_ "backdropClick"
  ) => void)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:""}}};export{b as M};
