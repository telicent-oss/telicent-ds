import{a as o}from"./iframe-pSdNPpsj.js";import{M as C}from"./DropdownButton-PfYIilVr.js";import{I as t}from"./_IconPopover-Dbgx90FC.js";import{G as n,F as x,B}from"./ExpandLessIcon-8kjnvaru.js";import"./CogIcon-BfeV780C.js";import"./InfoIcon-CvY1jMPl.js";import"./ExpandMoreIcon-k57z5o9e.js";import"./ThemeSwitchRow-BPScvN64.js";import"./Text-C8xYhcTn.js";import"./Chip-CoSGGU0m.js";import"./Divider-BiRkEI1F.js";import"./TreeView-B43DTxN_.js";import"./AppInfoRow-CmmXVQhw.js";import"./AppSettings-DiAaHAeX.js";import"./SvgIcon-Dk67ihyJ.js";import"./TableRow-BbcetRBz.js";import{B as P}from"./Box-BoiUcmPE.js";import{T as p}from"./Typography-xJSRyULv.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-DVtKZHc7.js";import"./AdapterDayjs-Dder9SCv.js";import"./index-DpDMCIG9.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BV2hxUmf.js";import"./extendSxProp-DB41LN08.js";import"./useThemeProps-xIwPk4zG.js";import"./useThemeProps-CYWg9EgA.js";import"./Modal-Bours3kv.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DQVEqSZG.js";import"./resolveComponentProps-DPCNAT4d.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-CxGjzryR.js";import"./utils-BwusbXFX.js";import"./composeClasses-fLhin0tj.js";import"./Popover-BBnSYe1Z.js";import"./Paper-CaOTbWnl.js";import"./TextField-nhnGPtzx.js";import"./useFormControl-CUuOM4EU.js";import"./FormControl-BvmTFN4D.js";import"./ListContext-vhA9Ec2W.js";import"./useControlled-CTRf4Kyy.js";import"./createSvgIcon-DQJUL0l4.js";import"./SvgIcon-BonYN8Aw.js";import"./FormHelperText-C4G4-bY5.js";import"./createStyled-BCHR6s5i.js";import"./IconButton-sbMpLibE.js";import"./ButtonBase-12w3s8A9.js";import"./DialogContent-6bzIhVp6.js";import"./Button-C4RV-peR.js";import"./Chip-BlG_pkiR.js";import"./MenuItem-CaHZacD4.js";import"./dividerClasses-ClH17Faz.js";import"./FlexBox-hv-hpSGA.js";import"./Stack-Bs31Dqc4.js";import"./styled-DydIvW0v.js";import"./useSlot-D8cXYJ0o.js";import"./LinearProgress-4g4fQEVB.js";import"./Spinner-BhDP1jI-.js";import"./Dialog-HQr-WHjL.js";import"./MapToggleButtonPresentational-B3hG9Xgp.js";import"./Remove-C7Qh0rfw.js";import"./Alert-D6vFGcfN.js";import"./ToggleButton-DYJg3xc1.js";import"./LinkButton-CCaJDHCZ.js";import"./Box-CBjBaWaN.js";import"./Container-2KzmGqL8.js";import"./TextField-D6oyfCHl.js";import"./Divider-C_qV4GnK.js";import"./Switch-PrjoLUoj.js";import"./LabeledSwitch-BdwUyAoI.js";import"./DatePicker-BkGr75tM.js";import"./DateTimePicker-CPfgqStp.js";import"./FormControl-DGv8wv7P.js";import"./FormHelperText-c9msRWby.js";import"./MenuItem-Rg5Kc0O5.js";import"./AccordionDetails-xCw9eoCi.js";import"./Collapse-DCgMY-AU.js";import"./Paper-DVNzQMfL.js";import"./ErrorFallback-aVzTS4kp.js";import"./ErrorFallbackText-C0CAwCyb.js";import"./ErrorFallbackWrapper-GQ-Y6ktD.js";import"./Brand-Bitp_hZv.js";import"./Edit-BGaDb461.js";const ae={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
