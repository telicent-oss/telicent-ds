import{j as e}from"./iframe-DK5e7ZOT.js";import{M as C}from"./DropdownButton-DiNdw6-A.js";import{I as t}from"./AppInfoRow-8GncKDGn.js";import{G as o,F as x,B}from"./UserIcon-DxV6urXZ.js";import"./FlexBox-_W6sVTx8.js";import"./Text-CgE9U0QS.js";import"./Chip-DgY181Ve.js";import"./Divider-CKdiT8EK.js";import"./TreeView-0iiQTVqV.js";import{B as P}from"./Box-CviFExpe.js";import{T as c}from"./Typography-DtWNdwUY.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-B27knm1v.js";import"./useThemeProps-C49gig2L.js";import"./useTheme-6u7oaTI_.js";import"./AdapterDayjs-BNNJxlxy.js";import"./generateUtilityClass-CJ1oYMmM.js";import"./styled-whwJNJEY.js";import"./Modal-DmgCBfl7.js";import"./utils-BPA7G_xE.js";import"./TransitionGroupContext-chR__9Zz.js";import"./index-BXTU90x9.js";import"./resolveComponentProps-BehVUnHR.js";import"./generateUtilityClasses-De74ogiH.js";import"./Popover-BL6vaQzp.js";import"./Paper-CkmaxJia.js";import"./TextField-DVauQNmD.js";import"./useFormControl-DE-Z70Nv.js";import"./createSvgIcon-D4CWCoDK.js";import"./SvgIcon-D6AH0iNF.js";import"./createStyled-DZLwdHSi.js";import"./IconButton-DQxImuDe.js";import"./ButtonBase-DbfXnrFH.js";import"./DialogContent-B_p2qS1z.js";import"./Button-Bv1CAZBN.js";import"./Chip-DF7wqBOO.js";import"./DateTimePicker-Cmtn6oRj.js";import"./Divider-Bv5BlnnD.js";import"./Stack-D9tKsaGV.js";import"./styled-Cvi2Yhbz.js";import"./Alert-D3zd-dEy.js";import"./LinearProgress-DKPT-xSE.js";import"./Spinner-B4ZuhRHw.js";import"./Dialog-GFqm4Lft.js";import"./MapToggleButtonPresentational-DRlZN78V.js";import"./Remove-CLzfP5Pm.js";import"./LinkButton-DFGT5LNA.js";import"./Box-DZbp-pEY.js";import"./Container-CBY4xLcq.js";import"./TextField-ZbgnM2uQ.js";import"./Switch-CqtrnZSy.js";import"./DatePicker-Vi5l2hai.js";import"./Paper-DYeLzx0r.js";import"./ErrorFallback-C_jb8-Gz.js";import"./ErrorFallbackText-Ba6aZeYG.js";import"./ErrorFallbackWrapper-Cymj5yYi.js";import"./Brand-Bc1Aa_GQ.js";import"./Edit-705h0DKO.js";const _e={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:n=>e(P,{sx:{margin:"auto"},children:n()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})}},a={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:e(c,{variant:"caption",children:e(o,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:e(c,{variant:"caption",children:e(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:e(c,{variant:"caption",children:e(B,{color:"primary"})}),disabled:!0}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},r={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:n=>e(t,{...n,"aria-label":"open navigation menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:n=>console.log("Selected:",n.id),button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const Ge=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,r as LinkNavigation,l as WithDividerAndOnSelect,a as WithIconsAndDisabled,s as WithSelected,Ge as __namedExportsOrder,_e as default};
