import{a as o}from"./iframe-Y1N6bk8p.js";import{M as C}from"./DropdownButton-DLugr0xg.js";import{I as t}from"./_IconPopover-BSW2238Q.js";import{G as n,F as x,B}from"./ExpandLessIcon-Cl7uik3S.js";import"./CogIcon-DvPSQXZo.js";import"./InfoIcon-Ct5f0UzT.js";import"./ExpandMoreIcon-CeKVlKWF.js";import"./ThemeSwitchRow-BSMzMCw1.js";import"./Text-B8NihZq2.js";import"./Chip-Bbcx00in.js";import"./Divider-BxRyf5aR.js";import"./TreeView-BLSiq3QR.js";import"./AppInfoRow-CjdXbBLa.js";import"./AppSettings-Dhwai-20.js";import"./SvgIcon-DDcy4gnv.js";import"./TableRow-CUQU1TNz.js";import{B as P}from"./Box-CXk6M6mR.js";import{T as p}from"./Typography-DmCu6xYW.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-D-jdU__u.js";import"./AdapterDayjs-DP2CnPXm.js";import"./index-LiVer2cg.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DiMPCvor.js";import"./extendSxProp-DbTy98VK.js";import"./useThemeProps-DFwnlb8_.js";import"./useThemeProps-Biv_2OSw.js";import"./Modal-B4PiUlG8.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-w0BzhBs7.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-CriZbu4z.js";import"./utils-FxzgolTc.js";import"./composeClasses-fLhin0tj.js";import"./Popover-CwKmJLrH.js";import"./Paper-DN68ECSn.js";import"./TextField-D67MRuoC.js";import"./useFormControl-D_Xige0L.js";import"./FormControl-v9I3oitM.js";import"./ListContext-BSGrFhbe.js";import"./useControlled-zS0ZvXST.js";import"./createSvgIcon-CqGXTWJV.js";import"./SvgIcon-CxVDfqSx.js";import"./FormHelperText-DAWPwhSQ.js";import"./createStyled-BL_vYvCM.js";import"./IconButton-BTiO4iMN.js";import"./ButtonBase-Dh8n1X5l.js";import"./DialogContent-C9N2UKrx.js";import"./Button-D5koxhYf.js";import"./Chip-BA5IS77I.js";import"./MenuItem-2qdsD5am.js";import"./dividerClasses-ClH17Faz.js";import"./FlexBox-DoF2Tbdg.js";import"./Stack-D8q2WUfD.js";import"./styled-WAGLmHxX.js";import"./useSlot-sFClRxF7.js";import"./LinearProgress-DijGLa0J.js";import"./Spinner-D28ZfjXd.js";import"./Dialog-B3meZdDB.js";import"./MapToggleButtonPresentational-DWQxMudH.js";import"./Remove-DH3EMgKC.js";import"./Alert-D3Q4Es8x.js";import"./ToggleButton-ClBjS5Ky.js";import"./LinkButton-C0iWbNJQ.js";import"./Box-D3afCydQ.js";import"./Container-D3Y9-mOQ.js";import"./TextField-BgCiXhS4.js";import"./Divider-Cu_DPk8e.js";import"./Switch-DUAgT_Dc.js";import"./LabeledSwitch-BWamddRC.js";import"./DatePicker-G9qJ6QsT.js";import"./DateTimePicker-BmvwZZ-N.js";import"./FormControl-DNaghd-n.js";import"./FormHelperText-kXl3i3tQ.js";import"./MenuItem-B6NIKMg1.js";import"./AccordionDetails-xda9fO-T.js";import"./Collapse-DAMiDAlQ.js";import"./Paper-D1WHigEv.js";import"./ErrorFallback-Cmgcm6jb.js";import"./ErrorFallbackText-COet1f5O.js";import"./ErrorFallbackWrapper-C4fgBbmv.js";import"./Brand-NzozEoiB.js";import"./Edit-BAaxdE7v.js";const ae={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const le=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,le as __namedExportsOrder,ae as default};
