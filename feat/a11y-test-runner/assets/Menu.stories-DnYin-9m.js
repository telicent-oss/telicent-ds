import{a as o}from"./iframe-EHiispHx.js";import{M as C}from"./DropdownButton-Ch2KHcVV.js";import{I as t}from"./_IconPopover-D3s7jMPT.js";import{G as n,F as x,B}from"./ExpandLessIcon-jYjB0fJU.js";import"./CogIcon-BeV-4FUk.js";import"./InfoIcon-XACXhAsZ.js";import"./ExpandMoreIcon-BYRPKxhi.js";import"./ThemeSwitchRow-CWrDPQ4c.js";import"./Text-COeFgyG1.js";import"./Chip-E-lZUDs8.js";import"./Divider-B6qZ_hw9.js";import"./TreeView-CUJ68v5-.js";import"./AppInfoRow-C5_ggrgQ.js";import"./AppSettings-C2atzlyc.js";import"./SvgIcon-4pLSFCsg.js";import"./TableRow-B3CsX6Fd.js";import{B as P}from"./Box-BaAFlwfY.js";import{T as p}from"./Typography-u692F7Lr.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-D_CvADku.js";import"./AdapterDayjs-ByeICk9b.js";import"./index-BM8MsdEI.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./useThemeProps-BfDwWLGL.js";import"./useThemeProps-BJ2283JF.js";import"./Modal-C84-Mwi0.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CRo6hKdF.js";import"./resolveComponentProps-DB8vWEuZ.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-D6HbG4uh.js";import"./utils-BR7uOJR9.js";import"./composeClasses-fLhin0tj.js";import"./Popover-CNEqh9b6.js";import"./Paper-D5wyd3V2.js";import"./TextField-Dzy82oKI.js";import"./useFormControl-DfdyR1E3.js";import"./FormControl-BrydlDY8.js";import"./ListContext-BlVgl-Pi.js";import"./useControlled-OJY6NH35.js";import"./createSvgIcon-B8I8xlXT.js";import"./SvgIcon-DoFYhYUo.js";import"./FormHelperText-C_cemKQ0.js";import"./createStyled-C1fbm1Mc.js";import"./IconButton-D6RFmtWs.js";import"./ButtonBase-R0TygaOg.js";import"./DialogContent-CSkG4AHB.js";import"./Button-d-YWvRHk.js";import"./Chip-bJ3IowVa.js";import"./MenuItem-B3aA4AXj.js";import"./dividerClasses-ClH17Faz.js";import"./FlexBox-Brwmqgps.js";import"./Stack-BDiVPNv1.js";import"./styled-Dsi4lrKP.js";import"./useSlot-BwMdRg8G.js";import"./LinearProgress-D1Fz4RJ-.js";import"./Spinner-ByzkNUK0.js";import"./Dialog-Dkx34yy5.js";import"./MapToggleButtonPresentational-D-V7ixFF.js";import"./Remove-qKz_hbHL.js";import"./Alert-C6RVlPi4.js";import"./ToggleButton-AWyPEjYi.js";import"./LinkButton-BEGAfp3_.js";import"./Box-C_PltGBT.js";import"./Container--hMSSlEw.js";import"./TextField-BsHv7ljj.js";import"./Divider-Bj27IAqR.js";import"./Switch-B0Tv5QGv.js";import"./LabeledSwitch-BXMnIWFI.js";import"./DatePicker-CBY6xzyW.js";import"./DateTimePicker-B1l5MsHG.js";import"./FormControl-D_AEerrZ.js";import"./FormHelperText-pfF9X1Ya.js";import"./MenuItem-BPyYHvK7.js";import"./AccordionDetails-Cu0Lnfok.js";import"./Collapse-DwqZb05A.js";import"./Paper-Jsu15PNh.js";import"./ErrorFallback-Cwh2Uo6W.js";import"./ErrorFallbackText-CjRh0P2N.js";import"./ErrorFallbackWrapper-CQZHS6gC.js";import"./Brand-CXxdZUN_.js";import"./Edit-FsVyeYJ0.js";const ae={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
