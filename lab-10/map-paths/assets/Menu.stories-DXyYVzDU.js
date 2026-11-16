import{a as o}from"./iframe-BjrXztvy.js";import{I as t}from"./IconButton-BZNX4IRe.js";import"./AppInfoRow-QQUqARHA.js";import"./AppSettings-D0R77tUT.js";import{M as C}from"./UserProfileContent-YwxxBLO1.js";import"./Badge-CijpDrIE.js";import"./Chip-C4L73zbZ.js";import"./Divider-CEsBrrMM.js";import"./ThemeSwitchRow-CzgtAJPj.js";import{G as n,F as x,B}from"./XIcon-ZQ00GxhK.js";import"./CogIcon-DausHvAi.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./InfoIcon-D83JWA8r.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./Text-BkX1azto.js";import"./TreeView-C6Uvz5eX.js";import{B as P}from"./Box-F47BA0Hn.js";import{T as p}from"./Typography-WZdIHWv0.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-Bn9Hma8U.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./_IconPopover-DMkjh4MO.js";import"./Box-D4Yea7CC.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./Paper-BZgZdenZ.js";import"./FlexBox-C2m_hHiB.js";import"./Stack-K8HBDx6V.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./Button-dBpFgvsm.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./Brand-C4AyXs8s.js";import"./LinkButton-BiG5XURl.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./dividerClasses-CmrggnBC.js";import"./Divider-D90yCN7B.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./Badge-ChEc66ZK.js";import"./Chip-Cehwhsrm.js";import"./FormControlLabel-uXfgMOYb.js";import"./Edit-D7Wj015S.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./Container-Dz0UBrhB.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Collapse-zg8g8jza.js";import"./index-fBdo_AAp.js";import"./Paper-BL8jtYAu.js";import"./ErrorFallback-DxZnaklR.js";import"./ErrorFallbackText-CBSkGSIV.js";import"./ErrorFallbackWrapper-2Ab5_OqS.js";import"./TableCell-CKU-Sz5Y.js";import"./useThemeProps-DBqV773e.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
