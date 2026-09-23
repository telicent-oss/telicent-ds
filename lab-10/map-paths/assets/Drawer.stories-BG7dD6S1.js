import{j as r,R as y,a as v,F as C}from"./iframe-BJgHgd1Z.js";import{t as b,v as k,w as B,P as R}from"./DropdownButton-BHLxTzKb.js";import{B as a}from"./Box-LUxyFkPT.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DRBR6vIl.js";import"./SvgIcon-DcQL11rx.js";import"./generateUtilityClass-Cn_5OWk3.js";import"./styled-BWamrOs2.js";import"./generateUtilityClasses-CN6mAH2Q.js";import"./useTheme-VlnuJmfA.js";import"./Box-Bf_aDvUP.js";import"./Container-DOyqGsQO.js";import"./styled-CHLKkDag.js";import"./createStyled-iOGV3soq.js";import"./useThemeProps-D_xWUNan.js";import"./FlexBox-BW1Y8iS1.js";import"./Stack-DjNdkcoM.js";import"./Typography-ujR-W61_.js";import"./Paper-CZnL-9iG.js";import"./useThemeProps-BpwhqMOr.js";import"./Text-CFG1txZB.js";import"./AdapterDayjs-BcMpDRru.js";import"./Modal-D7NqsO6R.js";import"./utils-N4V_aYBY.js";import"./TransitionGroupContext-D4FwzG5v.js";import"./index-T_DZwRUx.js";import"./resolveComponentProps-D-A_8V-W.js";import"./Popover-COvp4hyZ.js";import"./TextField-By-8GSNF.js";import"./useFormControl-B_d30NUq.js";import"./createSvgIcon-ChgfbEw0.js";import"./IconButton-BUrmmeH6.js";import"./ButtonBase-DpqXy7HG.js";import"./DialogContent-J5S8hT7c.js";import"./Button-ChD7S6cs.js";import"./Chip-B2SFgqJb.js";import"./DateTimePicker-BjDAHjib.js";import"./Divider-opnLhPuq.js";import"./AppInfoRow-if-kszvm.js";import"./Chip-BcrIk1ag.js";import"./Divider-BpZ0wQgx.js";import"./TreeView-BuHLvqR5.js";import"./Alert-Cxym7-Pq.js";import"./LinearProgress-Cfw17EUD.js";import"./Spinner-xAqEJSl-.js";import"./Dialog-Brvs81gM.js";import"./MapToggleButtonPresentational-Bkby2JVx.js";import"./Remove-C9EWMhX9.js";import"./LinkButton-CPyJZB5v.js";import"./TextField-DHHt2Dvp.js";import"./Switch-aGo7kiQe.js";import"./DatePicker-Dt0l70gu.js";import"./Paper-B7QMBDVQ.js";import"./ErrorFallback-CbYt6AMR.js";import"./ErrorFallbackText-CnPzZMoL.js";import"./ErrorFallbackWrapper-BvueGW-I.js";import"./Brand-CHgKb0un.js";import"./Edit-B_-WGaN2.js";const Nr={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return v(C,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return v(C,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Box p={2}>Drawer content</Box>
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    drawerWidth: 200,
    children: <Box p={2} height={400}>
        Narrow drawer & custom PaperSx
      </Box>,
    PaperSx: {
      outline: \`dashed 3px yellow\`,
      bgcolor: \`dodgerblue\`
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,h,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Presentational + useDrawer",
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates imperative API via \\\`useDrawer\\\` hook and \\\`DrawerPresentational\\\`.\`
      }
    }
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const {
      toggleDrawer,
      drawerProps
    } = useDrawer({
      ref: ctrlRef,
      initialOpen: false
    });
    return <>
        <PrimaryButton onClick={toggleDrawer}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerProps}>
          <Box p={2}>Controlled content</Box>
        </DrawerPresentational>
      </>;
  }
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,f,x;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Presentational + useDrawer: Imperative api only",
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates imperative API via \\\`useDrawer\\\` without a onToggle set (and thus no toggle button).\`
      }
    }
  },
  render: () => {
    // uses hook internally; no ref forwarding for presentational
    const ctrlRef = React.useRef<DrawerController>(null);
    const drawer = useDrawer({
      ref: ctrlRef,
      initialOpen: false
    });
    const {
      onToggle,
      ...drawerPropsNoToggle
    } = drawer.drawerProps;
    return <>
        <PrimaryButton onClick={onToggle}>Toggle Drawer</PrimaryButton>

        <DrawerPresentational {...drawerPropsNoToggle}>
          <Box p={2}>Chevron hidden: onClick unset, so clicking does nothing</Box>
        </DrawerPresentational>
      </>;
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Or=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,Or as __namedExportsOrder,Nr as default};
