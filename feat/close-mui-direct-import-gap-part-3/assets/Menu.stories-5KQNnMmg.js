import{a as o}from"./iframe-C6HBQyGm.js";import{M as C}from"./DropdownButton-D6ogJQev.js";import{I as t}from"./_IconPopover-DVtF3Nsu.js";import{G as n,F as x,B}from"./ExpandLessIcon-CJuxEYmQ.js";import"./CogIcon-BXwRS_AX.js";import"./InfoIcon-CWUfQGMy.js";import"./ExpandMoreIcon-ClqhjkE_.js";import"./ThemeSwitchRow-DXzWXa9p.js";import"./Text-wXQO4nHE.js";import"./Chip-DcDaGxBc.js";import"./Divider-DrCyeUWn.js";import"./TreeView-BzicdKaq.js";import"./AppInfoRow-DeGsYz0Q.js";import"./AppSettings-BMRsMdd0.js";import"./SvgIcon-DN3G9e_T.js";import"./TableRow-DVUU-_Rr.js";import"./DataGrid-B9Ws_hxt.js";import{B as P}from"./Box-Bum79u3V.js";import{T as p}from"./Typography-BYEU65Ir.js";import"./preload-helper-C1FmrZbK.js";import"./AdapterDayjs-CJVXf95i.js";import"./index-B4fT1DFN.js";import"./clsx-B-dksMZM.js";import"./styled-CtHiKU2t.js";import"./extendSxProp-BpLVaWYK.js";import"./useThemeProps-BN8Oei1L.js";import"./useThemeProps-OSLHsrLr.js";import"./Modal-BhU-sf-u.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DNiDcEw8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DShg_lcf.js";import"./index-U2Ve87U_.js";import"./utils-BtrWCNj7.js";import"./composeClasses-fLhin0tj.js";import"./Popover-CqWusbsy.js";import"./Paper-DexiaJH7.js";import"./InputAdornment-DoxUPrGH.js";import"./useFormControl-DFXGdURu.js";import"./TextField-Tbuu-gB1.js";import"./FormControl-szbfKHSS.js";import"./ListContext-5L6Z3S72.js";import"./useControlled-Cv5AimIh.js";import"./createSvgIcon-C3fIw0nA.js";import"./SvgIcon-CBUaLZyl.js";import"./FormHelperText-BhBJtXut.js";import"./createStyled-BurZqg4B.js";import"./IconButton-DOLNhRve.js";import"./ButtonBase--3OMYxia.js";import"./DialogContent-kJfS09mU.js";import"./Button-T3gn82zd.js";import"./Chip-QwFDNXa1.js";import"./FlexBox-shtAMDc9.js";import"./Stack-CMijSaHm.js";import"./styled-Ddo_soiw.js";import"./useSlot-CYuUL_sL.js";import"./LinearProgress-BybMB8rs.js";import"./LinearProgress-CYKUds7Q.js";import"./Spinner-DaulITM1.js";import"./CircularProgress-py9IL6Xb.js";import"./Dialog-10P_WSlv.js";import"./MapToggleButtonPresentational-C-2_SKgs.js";import"./Remove-sOidiwEB.js";import"./Alert-bNEVirSp.js";import"./Close-W1rtBwZ4.js";import"./ToggleButton-DJ3QCC9g.js";import"./ToggleButton-B7VOnyAi.js";import"./ToggleButtonGroup-zjK0cDs4.js";import"./LinkButton-5Hl7qjTo.js";import"./Box-BORlsoOy.js";import"./Container-Cs0fA1rR.js";import"./TextField-Dsp6pCob.js";import"./MenuItem-DvEMZLtB.js";import"./dividerClasses-DKxjOi43.js";import"./Divider-CuhHNWiA.js";import"./Switch-Dftj6GoN.js";import"./Switch-D5vwKWe7.js";import"./FormControlLabel-D5xYv0-x.js";import"./LabeledSwitch-xW5OK_eY.js";import"./DatePicker-DkkjSWe9.js";import"./DateTimePicker-D2Mk4LF5.js";import"./Tabs-BxaLLPSP.js";import"./LocalizationProvider-BX7xAa0J.js";import"./RadioGroup-k1kHuSHq.js";import"./FormControl-DPsKVFX9.js";import"./FormHelperText-DzFlHg6J.js";import"./MenuItem-C9rqg35p.js";import"./AccordionDetails-C87shBW_.js";import"./Collapse-mPDdtelE.js";import"./Paper-D0Bm4wLe.js";import"./ErrorFallback-Ba6XGdtl.js";import"./ErrorFallbackText-D3ICAgi3.js";import"./ErrorFallbackWrapper-Cznrrj0A.js";import"./Brand-Cr9Yp0DV.js";import"./Edit-DmCTBJQu.js";import"./TableCell-DCDAnFJ5.js";import"./index-BqpemGyj.js";import"./Skeleton-Bh14KwXQ.js";const Ie={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var c,m,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const ke=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,ke as __namedExportsOrder,Ie as default};
