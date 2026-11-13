import{a as o}from"./iframe-CkNiiXLn.js";import{I as t}from"./IconButton-Dodp6b5p.js";import"./AppInfoRow-54zgxE88.js";import"./AppSettings-C58RzYiC.js";import{M as C}from"./UserProfileContent-fQaFq2Ij.js";import"./Badge-Cf6QQjYx.js";import"./Chip-CzIXPAM6.js";import"./Divider-BBGr4h1z.js";import"./ThemeSwitchRow-DgBfNZR_.js";import{G as n,F as x,B}from"./XIcon-BnpOzrUx.js";import"./CogIcon-CUgKmZnu.js";import"./ExpandMoreIcon-7GR4ETlZ.js";import"./InfoIcon-CNZtHU0c.js";import"./SvgIcon-DSEb6mw_.js";import"./TableRow-CUz_YY1F.js";import"./Text-rScatiJx.js";import"./TreeView-YO-ZddkQ.js";import{B as P}from"./Box-05pko2XY.js";import{T as p}from"./Typography-DuOx53ON.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-CuVEOxhO.js";import"./clsx-B-dksMZM.js";import"./styled-76ib0pne.js";import"./extendSxProp-BK5IVCsk.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BqURM9Ak.js";import"./TransitionGroupContext-B2d67udZ.js";import"./_IconPopover-ChFYTO37.js";import"./Box-YjUNvW-N.js";import"./Popover-CHk_5JT_.js";import"./utils-DUL0G8fu.js";import"./index-DahoM0Dd.js";import"./index-DmVtciI9.js";import"./Modal-i00kY4hp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CMe9gMdQ.js";import"./useSlotProps-BLPs0jNc.js";import"./Paper-Co2ZhE_m.js";import"./FlexBox-DuXm_8u8.js";import"./Stack-CsP74eLy.js";import"./styled-BvHWXNqt.js";import"./createStyled-Cvg3k3VR.js";import"./useThemeProps-iEI_UVVT.js";import"./Button-Dyz6JNkZ.js";import"./MapToggleButtonPresentational-l2lmOHYk.js";import"./Remove-Ct8rdzlS.js";import"./createSvgIcon-iDztRpkl.js";import"./SvgIcon-B-DccnQT.js";import"./Brand-Dm6iRMuI.js";import"./LinkButton-C8qoOrAY.js";import"./Skeleton-CLKvWyBu.js";import"./Skeleton-DB4Iig_r.js";import"./TextField-jGTAB-zs.js";import"./useFormControl-Cy5_hCFa.js";import"./FormControl-Aq3S65NU.js";import"./ListContext-Dy1fZMht.js";import"./useControlled-BJ9psZrO.js";import"./FormHelperText-BkLGYuAu.js";import"./MenuItem-IabHC3U2.js";import"./dividerClasses-A0fl45Fm.js";import"./Divider-CupyNWLf.js";import"./ListItem-DfLiUxe7.js";import"./Toolbar-B-fWGjIK.js";import"./Close-3Y3Q-Wdq.js";import"./Popper-C_4fisPz.js";import"./Badge-DcNyFGRo.js";import"./Chip-B_4aGR8d.js";import"./FormControlLabel-DHtC2mPb.js";import"./Edit-CjwvC8Or.js";import"./Dialog-CpFNgoFo.js";import"./DialogContent-DaXl4CQu.js";import"./Alert-BoTqSYeo.js";import"./useSlot-k-KZgeup.js";import"./LinearProgress-Dy5_CdNI.js";import"./LinearProgress-DMwXeD9I.js";import"./Spinner-CT2AH6u2.js";import"./CircularProgress-BTnJNT1d.js";import"./TextField-BjCIF13p.js";import"./FormControl-CXubaWvq.js";import"./FormHelperText-BnJKYq1n.js";import"./LabeledSwitch-BNOamzBb.js";import"./Switch-DEcm6u5p.js";import"./Switch-C-S4rpDT.js";import"./RadioGroup-9Q56424I.js";import"./Container-DJ50h9Ca.js";import"./ToggleButton-BXKvGfFv.js";import"./ToggleButton-6UcPHypp.js";import"./ToggleButtonGroup-DJ_gF3ao.js";import"./MenuItem-72aw9qZO.js";import"./Tabs-CSxADV3D.js";import"./AccordionSummary-CkdrW3Ti.js";import"./Collapse-renE2O0C.js";import"./index-DspNy_CZ.js";import"./Paper-Dv3fWX-M.js";import"./ErrorFallback-IkkxBrLa.js";import"./ErrorFallbackText-DyiZWMdz.js";import"./ErrorFallbackWrapper-iVC7iWcE.js";import"./TableCell-Db5UJInr.js";import"./useThemeProps-BIQFXi-5.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
