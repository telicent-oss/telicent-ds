import{a as o}from"./iframe-BMeccPNJ.js";import{M as C}from"./DropdownButton-CJcvDogh.js";import{I as t}from"./_IconPopover-C3iVtoCa.js";import{G as n,F as x,B}from"./ExpandLessIcon-B6HusTMu.js";import"./CogIcon-X3PjyXPP.js";import"./InfoIcon-C43YUatg.js";import"./ExpandMoreIcon-CMplMLVo.js";import"./ThemeSwitchRow-Nkm5fIMW.js";import"./Text-Cra0cu9R.js";import"./Chip-CK-xlIC7.js";import"./Divider-BN9JaA-W.js";import"./TreeView-D-bHLFUm.js";import"./AppInfoRow-BhcGHzv5.js";import"./AppSettings-Bog0XP8u.js";import"./SvgIcon-DBit6dcs.js";import"./TableRow-CT5-15pp.js";import{B as P}from"./Box-BwQkrYug.js";import{T as p}from"./Typography-Caf0sNeW.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-Buqurtd8.js";import"./AdapterDayjs-px4ygSzx.js";import"./index-CN2QR1mZ.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-PlbL7nuw.js";import"./extendSxProp-OZdELPHD.js";import"./useThemeProps-XBwwIBHe.js";import"./useThemeProps-C_eKUugk.js";import"./Modal-PM6MIqry.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-HXr4o3EP.js";import"./resolveComponentProps-BszGJrBF.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-DkyQgcjU.js";import"./utils-LzjE0vGE.js";import"./composeClasses-fLhin0tj.js";import"./Popover-rQlvehgO.js";import"./Paper-Bfmpijtg.js";import"./TextField-vO5ouNTu.js";import"./useFormControl-DbNJ1HNF.js";import"./FormControl-C0VKj7ef.js";import"./ListContext-B5Su0ZnG.js";import"./useControlled-DdlDfNFx.js";import"./createSvgIcon-DqqCMwW-.js";import"./SvgIcon-Cm2TYdXM.js";import"./FormHelperText-CIvqbQfR.js";import"./createStyled-Dcm0u-cs.js";import"./IconButton-0rcJlT-l.js";import"./ButtonBase-o3LjpFbz.js";import"./DialogContent-DpwGlWTc.js";import"./Button-B5coKyWo.js";import"./Chip-3WEw9hIt.js";import"./MenuItem-BX1rIrqX.js";import"./dividerClasses-ClH17Faz.js";import"./FlexBox-Bzg5xbu0.js";import"./Stack-BdG4YkNk.js";import"./styled-BEeg3fTD.js";import"./useSlot-rqk_l7yw.js";import"./LinearProgress-CICCh1kG.js";import"./Spinner-B2M52evq.js";import"./Dialog-BO3Bf7M6.js";import"./MapToggleButtonPresentational-DW-EnjXE.js";import"./Remove-MscLCauy.js";import"./Alert-CP3Y9oZL.js";import"./ToggleButton-m5lt3mYS.js";import"./LinkButton-Dtrnv-gT.js";import"./Box-ChrdOdVs.js";import"./Container-CAzy0WzY.js";import"./TextField-Bp2kLT4M.js";import"./Divider-E-THRAyD.js";import"./Switch-D1a_Aegr.js";import"./LabeledSwitch-BoR8fQ6y.js";import"./DatePicker-TOMHDLiw.js";import"./DateTimePicker-D_BgxS3t.js";import"./FormControl-djpzVMG5.js";import"./FormHelperText-BWjSDbV-.js";import"./MenuItem-Be8lFLDg.js";import"./AccordionDetails-CLRP6GtA.js";import"./Collapse-klM-UQl4.js";import"./Paper-BldQVT4i.js";import"./ErrorFallback-_-KBymsS.js";import"./ErrorFallbackText-BX7d4Mxw.js";import"./ErrorFallbackWrapper-CQ7_lFb3.js";import"./Brand-C4lqvhvY.js";import"./Edit-DiVFn-cA.js";const ae={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
