import{a as o}from"./iframe-Bm3hXUOR.js";import{M as C}from"./EntityList-rJdJf1cx.js";import{I as t}from"./IconButton-DbDsumXP.js";import{G as n,F as x,B}from"./ExpandLessIcon-DBGEN9sP.js";import"./CogIcon-BvyMh2cw.js";import"./InfoIcon-DtylHRhB.js";import"./ExpandMoreIcon-Rcc8lwpw.js";import"./ThemeSwitchRow-D2RDNnRH.js";import"./Text-DijcGIMv.js";import"./Badge-Bln6FEW9.js";import"./Chip-sFPDCY_T.js";import"./Divider-1DTE9E3S.js";import"./TreeView-DbGOvJIf.js";import"./AppInfoRow-C1wf-V0h.js";import"./AppSettings-ueUwBjzn.js";import"./SvgIcon-BOgW6Vs6.js";import"./TableRow-D-N1ayrG.js";import{B as P}from"./Box-CexaEQmQ.js";import{T as p}from"./Typography-IeSSUSnG.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-_AwHYlr2.js";import"./Stack-CweGn0Hc.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./clsx-B-dksMZM.js";import"./styled-C7iFnRcW.js";import"./createStyled-BSW-AAi3.js";import"./useThemeProps-DbicsnOf.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-DK998PZh.js";import"./ListItem-mVDRARA2.js";import"./FormControl-BPl_v2oA.js";import"./useFormControl-Dh2tG7y1.js";import"./TransitionGroupContext-TroGB69i.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./ButtonBase-B90bUUd9.js";import"./Toolbar-BGwmXmZ6.js";import"./TextField-DZPOD6P2.js";import"./Modal-DT28HXjZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-BDu1bYir.js";import"./index-Cj-yI5r7.js";import"./index-DQBmKBjb.js";import"./utils-BaA0rvxy.js";import"./Popover-EfvB51d9.js";import"./Paper-pWUzODlp.js";import"./useControlled-BLxWakUc.js";import"./createSvgIcon-CY9Fp0_O.js";import"./SvgIcon-BeWTLv9H.js";import"./FormHelperText-B1KQ539b.js";import"./Close-DwHyc7oX.js";import"./Popper-ByZb3Mzn.js";import"./Badge-C2hR_d-s.js";import"./Chip-BZnuQMLc.js";import"./IconButton-CErjrx2_.js";import"./FormControlLabel-zVmiSlDE.js";import"./MenuItem-DPWeZRqW.js";import"./dividerClasses-DReHYfP6.js";import"./Button-CBrDpZ-p.js";import"./MapToggleButtonPresentational-CBDLh_cV.js";import"./Remove-BQa1AOEr.js";import"./useSlot-Dr-m60mq.js";import"./Divider-eqbb1UOv.js";import"./Skeleton-D7hRqs-z.js";import"./Skeleton-B_UdrOGr.js";import"./Edit-RIIp7UWE.js";import"./LinearProgress-CayA7BiN.js";import"./LinearProgress-BUkYKEbD.js";import"./Spinner-DXnO_-hv.js";import"./CircularProgress-Dib0Lx_Z.js";import"./Dialog-BJXw5Ehe.js";import"./DialogContent-DMwkd_KF.js";import"./Box-D21XowzU.js";import"./Alert-FBw1yGft.js";import"./ToggleButton-YWaXnOlt.js";import"./ToggleButton-BCPxy8Ge.js";import"./ToggleButtonGroup-DgGofYMS.js";import"./LinkButton-BXoA6ppQ.js";import"./Container-edJRQxXs.js";import"./TextField-ByxcbquB.js";import"./Switch-CDRD8Euo.js";import"./Switch-It0KOob1.js";import"./LabeledSwitch-DVDqP3zB.js";import"./RadioGroup-BAvBK26U.js";import"./FormControl-CiX3rHgQ.js";import"./FormHelperText-Bc9Sqjm2.js";import"./Tabs-3h5XvcqN.js";import"./MenuItem-CH4gFEae.js";import"./AccordionDetails-Ct_vIrVf.js";import"./Collapse-Ddn3acUj.js";import"./index-DCLPWREO.js";import"./_IconPopover-B-DWREQB.js";import"./Paper-BDi0dJoh.js";import"./ErrorFallback-DgO8QC3X.js";import"./ErrorFallbackText-C_qZY6-a.js";import"./ErrorFallbackWrapper-FM7Ac7RI.js";import"./Brand-CHH9dXMD.js";import"./useThemeProps-Bp1dY9od.js";import"./TableCell-D6yiUVMs.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
