import{a as o}from"./iframe-Djv8ktra.js";import{M as C}from"./EntityList-CmXEoAc2.js";import{I as t}from"./IconButton-CerlmnQB.js";import{G as n,F as x,B}from"./ExpandLessIcon-C3pwZ4Pc.js";import"./CogIcon-CT9n-ILh.js";import"./InfoIcon-CHj9CFVM.js";import"./ExpandMoreIcon-teVtSgL8.js";import"./ThemeSwitchRow-H2pqK7Sf.js";import"./Text-Y9XZ_yHR.js";import"./Badge-CMOuLR30.js";import"./Chip-CxSld7rQ.js";import"./Divider-C9GgdKvp.js";import"./TreeView-CmgLkcRM.js";import"./AppInfoRow-C5ZQnBbJ.js";import"./AppSettings-CSEbvKPB.js";import"./SvgIcon-DcOD0BqO.js";import"./TableRow-zzNEo6q7.js";import{B as P}from"./Box-C9osqYpn.js";import{T as p}from"./Typography-Dq-Ciojh.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-Do_i3sJ9.js";import"./Stack-DjL-eZhY.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./clsx-B-dksMZM.js";import"./styled-CpIMtI8p.js";import"./createStyled-C4labjHn.js";import"./useThemeProps-2HbMDrfU.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-DOkPQ55E.js";import"./ListItem-DgF_KQ7w.js";import"./FormControl-KHlRX9wq.js";import"./useFormControl-yjc7eBp6.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./resolveComponentProps-BCG5tMa5.js";import"./ButtonBase-BsGOhoOZ.js";import"./Toolbar-zYbL7pMK.js";import"./TextField-FyiAyxRB.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";import"./Popover-B86b2_k9.js";import"./Paper-1JE7t4a2.js";import"./useControlled-BYl-fCxX.js";import"./createSvgIcon-DZnw1m24.js";import"./SvgIcon-DECtGhh0.js";import"./FormHelperText-D2wijesy.js";import"./Close-uaArJQbm.js";import"./Popper-CRx9JkVY.js";import"./Badge-Bne_esn3.js";import"./Chip-Df5TxRX3.js";import"./IconButton-D0URHQdC.js";import"./FormControlLabel-Dl4rNMyO.js";import"./MenuItem-BrTfhZTz.js";import"./dividerClasses-CaIblDIL.js";import"./Button-DwhmFZ5z.js";import"./MapToggleButtonPresentational-9yu7-Ilq.js";import"./Remove-UDhVurmI.js";import"./useSlot-DS97Xucj.js";import"./Divider-BQgZCPEt.js";import"./Skeleton-Kydo8R4j.js";import"./Skeleton-CnHTnMO_.js";import"./Edit-BKmGEAwu.js";import"./LinearProgress-DdDDCrSp.js";import"./LinearProgress-DK1T17kM.js";import"./Spinner-CZ5RlgS9.js";import"./CircularProgress-DH002ZiD.js";import"./Dialog-CNnh_iBj.js";import"./DialogContent-6oCYEZl_.js";import"./Box-Cvy3NsGq.js";import"./Alert-BVz-9DlK.js";import"./ToggleButton-GvPbRr0J.js";import"./ToggleButton-CFoTEcuq.js";import"./ToggleButtonGroup-BS0uvyOk.js";import"./LinkButton-CYrYI8ff.js";import"./Container-D5lO9yGB.js";import"./TextField-DZFwm5FK.js";import"./Switch-Ckcfd9qm.js";import"./Switch-DP0w0isr.js";import"./LabeledSwitch-Boji5GC-.js";import"./RadioGroup-CHfeD9PB.js";import"./FormControl-DEhUdqs_.js";import"./FormHelperText-B0uW7-Qr.js";import"./Tabs-DLjDcbju.js";import"./MenuItem-DaXvOOwF.js";import"./AccordionDetails-CqSaJtGy.js";import"./Collapse-BPTOiYJG.js";import"./index-8FsRt4pB.js";import"./_IconPopover-BLyK2_eM.js";import"./Paper-IIlbTA42.js";import"./ErrorFallback-ei1UHZWN.js";import"./ErrorFallbackText-CuxdV7zC.js";import"./ErrorFallbackWrapper-C5pNwo6x.js";import"./Brand-4F19u9Fh.js";import"./useThemeProps-DvIlKj6P.js";import"./TableCell-Bunj5ZcK.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
