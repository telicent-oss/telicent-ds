import{a as o}from"./iframe-DunpSdH6.js";import{I as t}from"./IconButton-CnZQJMnz.js";import"./AppInfoRow-TLJdMOCL.js";import"./AppSettings-CieG7Itn.js";import{M as C}from"./UserProfileContent-D_7QN1X2.js";import"./Badge-DfmfDckY.js";import"./Chip-ClFjssnv.js";import"./Divider-DOwJyp8h.js";import"./ThemeSwitchRow-DKnKmbOE.js";import{G as n,F as x,B}from"./XIcon-B-AAlqIS.js";import"./CogIcon-DURisWGj.js";import"./ExpandMoreIcon-BIxTqLU3.js";import"./InfoIcon-C6C5JcpY.js";import"./SvgIcon-DQ2JuKIZ.js";import"./TableRow-D4o3RwxN.js";import"./Text-CAHfJU7X.js";import"./TreeView-BDnoQbge.js";import{B as P}from"./Box-B-pmLQD1.js";import{T as p}from"./Typography-Cnm5zE5B.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-BxRM68Nx.js";import"./clsx-B-dksMZM.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./_IconPopover-kbbuypBQ.js";import"./Box-CCnO3-HF.js";import"./Popover-DsC-QvdX.js";import"./utils-W3WhWsKZ.js";import"./index-MiBr_QQr.js";import"./index-DLav748F.js";import"./Modal-d3tziOSd.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Cq-RMR5j.js";import"./useSlotProps-CVslE_Pq.js";import"./Paper-BnYpX6e-.js";import"./FlexBox-DwjKj-U_.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./Button-stnAc-Tj.js";import"./MapToggleButtonPresentational-DhL_tRuE.js";import"./Remove-CypNUzA-.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./Brand-D0GB8OW-.js";import"./LinkButton-BoEmtgzU.js";import"./Skeleton-OXXt9MRY.js";import"./Skeleton-DeprtIml.js";import"./TextField-Bmgg2D5C.js";import"./useFormControl-DJJUNb1q.js";import"./FormControl-g-yWrPYN.js";import"./ListContext-C9AaZLBf.js";import"./useControlled-D5RrLse2.js";import"./FormHelperText-BuPvD1hT.js";import"./MenuItem-B2bWzFXk.js";import"./dividerClasses-DaEwxQ2U.js";import"./Divider-CZk7lu9D.js";import"./ListItem-BhthYCMo.js";import"./Toolbar-DNoBnjCT.js";import"./Close-Cj-9lqkJ.js";import"./Popper-DYqxq4vL.js";import"./Badge-DNThIf1X.js";import"./Chip-Cph2lDK-.js";import"./FormControlLabel-oM-7wre-.js";import"./Edit-DCrwz_Eh.js";import"./Dialog-CK4_JL4u.js";import"./DialogContent-DkAI-Cl0.js";import"./Alert-CN792Xkl.js";import"./useSlot-CWMKbCxx.js";import"./LinearProgress-aosU5P48.js";import"./LinearProgress-DX42AqMp.js";import"./Spinner-BAHqvCO1.js";import"./CircularProgress-CpVFRLj9.js";import"./TextField-B0XeM5G1.js";import"./FormControl-Bz1Pa-gf.js";import"./FormHelperText-D3Z6WRSy.js";import"./LabeledSwitch-CQiKhy5B.js";import"./Switch-zPa9dcOV.js";import"./Switch-d71D0uBO.js";import"./RadioGroup-DjTHdfvI.js";import"./Container-COQeBzQQ.js";import"./ToggleButton-wesw0Lhu.js";import"./ToggleButton-DGKJly8H.js";import"./ToggleButtonGroup-DhWfGsgc.js";import"./MenuItem-iCAnPddj.js";import"./Tabs-CIlDC37T.js";import"./AccordionSummary-ChOmO8Ka.js";import"./Collapse-WWGG7p11.js";import"./index-CZvxb2J0.js";import"./Paper-CNdqdVGK.js";import"./ErrorFallback-DcOvTajC.js";import"./ErrorFallbackText-DYZvmVRS.js";import"./ErrorFallbackWrapper-rsg5SlDs.js";import"./TableCell-xtN6Kl0n.js";import"./useThemeProps-BitkL5n2.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
A generic, reusable **Menu** component that pairs a trigger (any button) with a list of menu options.

This is designed for common UI patterns like:
- **App switchers**
- **Overflow (kebab) menus**
- **Contextual actions** (e.g. "Edit", "Duplicate", "Delete")
- **Quick navigation** links

Unlike feature-specific menus, this component stays intentionally small:
- You provide the **trigger** via a \`button\` render prop.
- You provide menu \`options\` (label, optional icon, disabled state, optional link navigation).
- It handles anchoring, open/close state, and selection behavior.

---

### When & How to use it
Use **Menu** any time you want consistent menu behavior without re-implementing MUI anchoring and a11y wiring.

Example usage:

\`\`\`tsx
<Menu
  aria-label="actions-menu"
  menuId="actions-menu"
  options={[
    { id: "edit", label: "Edit", onClick: () => console.log("edit") },
    { id: "duplicate", label: "Duplicate", onClick: () => console.log("duplicate") },
    { id: "delete", label: "Delete", onClick: () => console.log("delete"), disabled: true },
  ]}
  button={(btnProps) => (
    <IconButton {...btnProps} aria-label="open menu">
      <GridIcon />
    </IconButton>
  )}
/>
\`\`\`
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}},De=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];var c,m,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu",
    menuId: "menu-default",
    options: [{
      id: "profile",
      label: "Profile",
      onClick: () => console.log("Profile")
    }, {
      id: "settings",
      label: "Settings",
      onClick: () => console.log("Settings")
    }, {
      id: "logout",
      label: "Logout",
      onClick: () => console.log("Logout")
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with icons",
    menuId: "menu-icons",
    options: [{
      id: "grid",
      label: "View grid",
      icon: <Typography variant="caption">
            <GridIcon fontSize="small" color="primary" />
          </Typography>
    }, {
      id: "save",
      label: "Save",
      icon: <Typography variant="caption">
            <FloppyDiskIcon fontSize="small" color="primary" />
          </Typography>
    }, {
      id: "delete",
      label: "Delete (disabled)",
      icon: <Typography variant="caption">
            <BinIcon color="primary" />
          </Typography>,
      disabled: true
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "Menu options can include an optional \`icon\`, and can be disabled using \`disabled: true\`."
      }
    }
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "navigation menu",
    menuId: "menu-links",
    options: [{
      id: "docs",
      label: "Docs",
      href: "https://example.com/docs",
      target: "_blank"
    }, {
      id: "status",
      label: "Status",
      href: "https://example.com/status",
      target: "_blank"
    }, {
      id: "support",
      label: "Support",
      href: "https://example.com/support",
      target: "_blank"
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open navigation menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "If you provide \`href\`, the menu item will open a link (defaults to \`_self\` unless \`target\` is set)."
      }
    }
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,I,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with divider",
    menuId: "menu-divider",
    options: [{
      id: "edit",
      label: "Edit",
      onClick: () => console.log("Edit")
    }, {
      id: "duplicate",
      label: "Duplicate",
      onClick: () => console.log("Duplicate")
    }, {
      id: "disabled",
      label: "Disabled Example",
      dividerAbove: true,
      disabled: true
    }, {
      id: "delete",
      label: "Delete",
      onClick: () => console.log("Delete")
    }],
    onSelect: opt => console.log("Selected:", opt.id),
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "You can add a divider before an option with \`dividerAbove\`, and also capture selection centrally via \`onSelect\`."
      }
    }
  }
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,D,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with selected item",
    menuId: "menu-selected",
    options: [{
      id: "profile",
      label: "Very long option name that exceeds typical width",
      onClick: () => console.log("Profile")
    }, {
      id: "settings",
      label: "Settings",
      onClick: () => console.log("Settings"),
      selected: true
    }, {
      id: "logout",
      label: "Logout",
      onClick: () => console.log("Logout")
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "Use \`selected: true\` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."
      }
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,De as __namedExportsOrder,Se as default};
