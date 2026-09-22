import{a as e}from"./iframe-QjimQxGJ.js";import{M as C}from"./DropdownButton-BqQMtZNv.js";import{I as t}from"./_IconPopover-enaiw0Ag.js";import{G as n,F as x,B}from"./UserIcon-C4O34cYP.js";import"./CogIcon-DoAefpgk.js";import"./InfoIcon-KAZwn8zl.js";import"./ThemeSwitchRow-CqJgfSGe.js";import"./Text-CbHxOYIZ.js";import"./Chip-D2kTYDHW.js";import"./Divider-D4gWlnBJ.js";import"./TreeView-DHji-qEu.js";import"./AppInfoRow-DsusScyS.js";import"./AppSettings-Blvm1PFt.js";import"./TableRow-ipCVlD9g.js";import{B as P}from"./Box-BdgnJPj4.js";import{T as p}from"./Typography-BALYr_AM.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-h6Umsisj.js";import"./AdapterDayjs-COKlw25t.js";import"./index-BhQh1m69.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./useThemeProps-qyYKSYwF.js";import"./useThemeProps-GaSBv1_5.js";import"./Modal-DPpC_MaX.js";import"./utils-DWVeh98X.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./index-C895Ui_J.js";import"./resolveComponentProps-u9w1Xhfi.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Popover-D6-B0sHe.js";import"./Paper-B4HMI984.js";import"./TextField-BxmNESyD.js";import"./useFormControl-CLcxU0V8.js";import"./FormControl-pQC5AWwY.js";import"./useControlled-ClIGAfqi.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./SvgIcon-qDEXG8Q2.js";import"./FormHelperText-D3ES7yVt.js";import"./createStyled-kkTu4cdj.js";import"./IconButton-CdzYSU6E.js";import"./ButtonBase-B3FHfXkx.js";import"./DialogContent-DEerxyRB.js";import"./Button-B0acl6RO.js";import"./Chip-BIs9pIL_.js";import"./DateTimePicker-Cs-8dsfN.js";import"./Divider-CfN-tf0_.js";import"./FlexBox-BHBK3XbM.js";import"./Stack-BCJid8GC.js";import"./styled-DdRNySmR.js";import"./Alert-BIYPLeJ4.js";import"./LinearProgress-CCUeeTNk.js";import"./Spinner-ZqiMizuS.js";import"./Dialog-CQqj-Shc.js";import"./MapToggleButtonPresentational-DlVdc9iK.js";import"./Remove-CZV99RA6.js";import"./LinkButton-C1rXXMBH.js";import"./Box-kqiIuPV6.js";import"./Container-DqveXh-O.js";import"./TextField-Cc6z2PNl.js";import"./Switch-T5c-KsvY.js";import"./LabeledSwitch-CY2Gql7U.js";import"./DatePicker-CZCRHMp9.js";import"./FormControl-CNaUogrQ.js";import"./FormHelperText-BO3t8uTC.js";import"./Paper-BSq9F4WF.js";import"./ErrorFallback-Dzp1pGy2.js";import"./ErrorFallbackText-D_comUev.js";import"./ErrorFallbackWrapper-CDfvx67q.js";import"./Brand-DAKosmlu.js";import"./Edit-D8MCsODy.js";const Je={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:o=>e(P,{sx:{margin:"auto"},children:o()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:o=>e(t,{...o,"aria-label":"open menu",color:"primary",children:e(n,{})})}},a={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:e(p,{variant:"caption",children:e(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:e(p,{variant:"caption",children:e(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:e(p,{variant:"caption",children:e(B,{color:"primary"})}),disabled:!0}],button:o=>e(t,{...o,"aria-label":"open menu",color:"primary",children:e(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},r={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:o=>e(t,{...o,"aria-label":"open navigation menu",color:"primary",children:e(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:o=>console.log("Selected:",o.id),button:o=>e(t,{...o,"aria-label":"open menu",color:"primary",children:e(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:o=>e(t,{...o,"aria-label":"open menu",color:"primary",children:e(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,I,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const Ke=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,r as LinkNavigation,l as WithDividerAndOnSelect,a as WithIconsAndDisabled,s as WithSelected,Ke as __namedExportsOrder,Je as default};
