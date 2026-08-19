import{j as r,R as y,a as C,F as v}from"./iframe-O7ZSOzH6.js";import{p as b,u as k,q as B,P as R}from"./DropdownButton-9IQM39iB.js";import{B as a}from"./Box-Bh48kC-V.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CVW633Wu.js";import"./SvgIcon-C9V7Ug2C.js";import"./generateUtilityClass-CaBvuMTH.js";import"./styled-DIoSYlWj.js";import"./generateUtilityClasses-Ck-qx9fV.js";import"./useTheme-CyHOJq73.js";import"./Box-CGifCS97.js";import"./Container-Cnxb2MGW.js";import"./styled-CkMq9Go9.js";import"./createStyled-CVG07lMp.js";import"./useThemeProps-CHVM-BV5.js";import"./FlexBox-DE23WfsN.js";import"./Stack-BrwT5Je_.js";import"./Typography-ClJj-jBK.js";import"./Paper-Dr6YfsOz.js";import"./useThemeProps-DiSzJ5RC.js";import"./Text-nRcHvf3o.js";import"./AdapterDayjs-B5AjoP0Q.js";import"./Modal-9ChNdpfT.js";import"./utils-SoSev3en.js";import"./TransitionGroupContext-B7rwdiyI.js";import"./index-5Y2jY6OW.js";import"./resolveComponentProps-BETcHjWA.js";import"./Popover-BKe0lZr-.js";import"./TextField-BbFA9wlk.js";import"./useFormControl-Cg-wtjlR.js";import"./createSvgIcon-RHoLritL.js";import"./IconButton-B8s4GQ3S.js";import"./ButtonBase-BU7A4vUM.js";import"./DialogContent-DqMmuBKo.js";import"./Button-0ICa7MST.js";import"./Chip-VOgUgKU3.js";import"./DateTimePicker-D-qf43pp.js";import"./Divider-CF1tXDob.js";import"./AppInfoRow-0HJaNGZZ.js";import"./Chip-Bfi3CHWH.js";import"./Divider-CjbOd_kj.js";import"./TreeView-BB5-CSqu.js";import"./Alert-Djh-wYbn.js";import"./LinearProgress-CFUTsEE5.js";import"./Spinner-C_yQLXLp.js";import"./Dialog-WoMp7Hm5.js";import"./MapToggleButtonPresentational-BtoIJ6fP.js";import"./Remove-DOKjbcKs.js";import"./LinkButton-BBnTv_j7.js";import"./TextField-as-GdJ4B.js";import"./Switch-BpeAZxQ1.js";import"./DatePicker-B_n7IfRI.js";import"./Paper-BhX0sOWI.js";import"./ErrorFallback-CLGQlz6c.js";import"./ErrorFallbackText-Dz979o06.js";import"./ErrorFallbackWrapper-BWOXKjAC.js";import"./Brand-uV7cUGM3.js";import"./constants-B5xQjWnv.js";import"./Edit-BerfezYI.js";const Or={title:"Component Library/Drawer",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Persistent drawer with toggle control. Communicates open state via callback.\n\nUse `useDrawer` hook and `DrawerPresentational` for imperative control."}}},argTypes:{drawerWidth:{control:{type:"number"},description:"Width in pixels"},onVisibilityChange:{action:"visibilityChanged"}}},e={args:{children:r(a,{p:2,children:"Drawer content"})}},o={args:{drawerWidth:200,children:r(a,{p:2,height:400,children:"Narrow drawer & custom PaperSx"}),PaperSx:{outline:"dashed 3px yellow",bgcolor:"dodgerblue"}}},t={name:"Presentational + useDrawer",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` hook and `DrawerPresentational`."}}},render:()=>{const i=y.useRef(null),{toggleDrawer:s,drawerProps:p}=k({ref:i,initialOpen:!1});return C(v,{children:[r(R,{onClick:s,children:"Toggle Drawer"}),r(B,{...p,children:r(a,{p:2,children:"Controlled content"})})]})}},n={name:"Presentational + useDrawer: Imperative api only",parameters:{docs:{description:{story:"Demonstrates imperative API via `useDrawer` without a onToggle set (and thus no toggle button)."}}},render:()=>{const i=y.useRef(null),s=k({ref:i,initialOpen:!1}),{onToggle:p,...T}=s.drawerProps;return C(v,{children:[r(R,{onClick:p,children:"Toggle Drawer"}),r(B,{...T,children:r(a,{p:2,children:"Chevron hidden: onClick unset, so clicking does nothing"})})]})}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const jr=["Default","CustomWidth","PresentationalAndHook","ImperativeApi"];export{o as CustomWidth,e as Default,n as ImperativeApi,t as PresentationalAndHook,jr as __namedExportsOrder,Or as default};
