import{a as o}from"./iframe-DuvuyOYT.js";import{M as C}from"./DropdownButton-Cgp0ynRQ.js";import{I as t}from"./_IconPopover-Ck2hZc1U.js";import{G as n,F as x,B}from"./ExpandLessIcon-lDlqNob7.js";import"./CogIcon-C7ffmALX.js";import"./InfoIcon-1q2hApFd.js";import"./ExpandMoreIcon-Bk88I7pG.js";import"./ThemeSwitchRow-CSFvN-ub.js";import"./Text-L7vd9pUz.js";import"./Chip-C-mRw_Vp.js";import"./Divider-BcYVCAXY.js";import"./TreeView-DqxVlk-o.js";import"./AppInfoRow-D2P6hF0a.js";import"./AppSettings-BOXvpGNS.js";import"./SvgIcon-Bc8kLn_o.js";import"./TableRow-gyTKCCh4.js";import{B as P}from"./Box-CdEzcdGG.js";import{T as p}from"./Typography-DktY0xgL.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-DvEY6SKk.js";import"./AdapterDayjs-2T0rZWQj.js";import"./index-CI6Kqv0h.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-Cho-jsTU.js";import"./extendSxProp-JkKasx3H.js";import"./useThemeProps--eCMneWE.js";import"./useThemeProps-BobYEJQ-.js";import"./Modal-ztgM1uVX.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./resolveComponentProps-3edEfYXu.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-Bas_o1qY.js";import"./utils-B4ukibcw.js";import"./composeClasses-fLhin0tj.js";import"./Popover-BOr5Tnx-.js";import"./Paper-DUkfPqTN.js";import"./TextField-CUB3zYB0.js";import"./useFormControl-B7qRo7M3.js";import"./FormControl-B_bhgqKA.js";import"./ListContext-DBsT2SYb.js";import"./useControlled-ebES1RRU.js";import"./createSvgIcon-D8oPFoN7.js";import"./SvgIcon-3Tw63ijk.js";import"./FormHelperText-DHwUp4cY.js";import"./createStyled-BKTeOdVL.js";import"./IconButton-rZ6cns_p.js";import"./ButtonBase-B-XK-vT0.js";import"./DialogContent-D43DrM7u.js";import"./Button-BnMbhCon.js";import"./Chip-DXBg8N5K.js";import"./MenuItem-DqsdRt18.js";import"./dividerClasses-ClH17Faz.js";import"./FlexBox-TPzjGHTu.js";import"./Stack-BvZMuuuV.js";import"./styled-DgGNM0V5.js";import"./useSlot-C-CG0yuW.js";import"./LinearProgress-dxBLqzdG.js";import"./Spinner-Ed6-sLfr.js";import"./Dialog-DoKSgzIK.js";import"./MapToggleButtonPresentational-DoCeO59m.js";import"./Remove-IX44AOl9.js";import"./Alert-BZ_em7ms.js";import"./ToggleButton-DXPBOEid.js";import"./LinkButton-C6Iwaywt.js";import"./Box-B0L08xCP.js";import"./Container-UrugBBKw.js";import"./TextField-BbDqVZmX.js";import"./Divider-D68Fa2cD.js";import"./Switch-DAw3yXht.js";import"./LabeledSwitch-D25ybaX8.js";import"./DatePicker-Br58-B3a.js";import"./DateTimePicker-BgSSeO5r.js";import"./FormControl-DiFEjGcX.js";import"./FormHelperText-DzVT_Kzu.js";import"./MenuItem-Db2sbs9g.js";import"./AccordionDetails---llt0mU.js";import"./Collapse-BraLEtjm.js";import"./Paper-D2SNeHbc.js";import"./ErrorFallback-C6Uj6zhy.js";import"./ErrorFallbackText-CoG67Tay.js";import"./ErrorFallbackWrapper-kKw7iFhr.js";import"./Brand-Bj9k9vyT.js";import"./Edit-DPnzdP9f.js";const ae={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
